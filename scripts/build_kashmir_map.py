"""
Builds src/data/kashmirMapGeometry.js from the Kashmir Ke Waris boundary GeoJSON.

The home-page map draws eight selectable regions. They come from:
  jammu_kashmir_six_regions.geojson      Kashmir, Jammu, Ladakh, AJK, GB, Aksai Chin
  jammu_kashmir_special_overlays.geojson Siachen and Shaksgam, cut out of Ladakh and GB
  jammu_kashmir_loc.geojson              Line of Control
The Line of Actual Control is the shared border of Aksai Chin and Ladakh.

Region areas are measured on the source geometry with an equal-area projection,
so the figures on the site match the outlines it draws.

Needs shapely 2.1+. Run with the boundary builder's Python environment:
  ..\\kashmir-boundary-builder\\.venv\\Scripts\\python.exe scripts\\build_kashmir_map.py [geojson folder]
The folder defaults to ../kashmir-boundary-builder/output next to this repository.
"""

import json
import math
import sys
from pathlib import Path

import numpy as np
import shapely
from shapely.geometry import LineString, MultiLineString, MultiPolygon, Polygon, shape
from shapely.ops import linemerge, polylabel, unary_union

ROOT = Path(__file__).resolve().parent.parent
SOURCE = Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT.parent.parent / "kashmir-boundary-builder" / "output"
OUT = ROOT / "src" / "data" / "kashmirMapGeometry.js"

WIDTH = 800
PADDING = 6
LAT0 = math.radians(34.5)  # centre latitude of the state
EARTH_RADIUS_KM = 6371.0088
SIMPLIFY_PX = 0.55  # tolerance in SVG pixels

# Site region id -> how to build it from the source features
SIX = {"valley": "kashmir", "jammu": "jammu", "ladakh": "ladakh", "ajk": "ajk", "gb": "gb", "aksai-chin": "aksai_chin"}

PLACES = [
    ("Gilgit", 74.308, 35.920),
    ("Skardu", 75.633, 35.297),
    ("Muzaffarabad", 73.471, 34.370),
    ("Srinagar", 74.797, 34.084),
    ("Kargil", 76.131, 34.557),
    ("Leh", 77.585, 34.164),
    ("Jammu", 74.857, 32.727),
]
PEAKS = [
    ("K2", 76.513, 35.881),
    ("Nanga Parbat", 74.589, 35.237),
]


def load(name):
    with open(SOURCE / f"{name}.geojson", encoding="utf-8") as f:
        return {feat["properties"]["id"]: shape(feat["geometry"]) for feat in json.load(f)["features"]}


def polygons_only(geom):
    """Drop slivers of lines/points left by overlay operations."""
    if isinstance(geom, (Polygon, MultiPolygon)):
        return shapely.make_valid(geom)
    parts = [g for g in getattr(geom, "geoms", []) if isinstance(g, (Polygon, MultiPolygon))]
    return unary_union(parts)


def area_km2(geom):
    # Lambert cylindrical equal-area projection centred on the state
    def eq_area(coords):
        lon, lat = np.radians(coords[:, 0]), np.radians(coords[:, 1])
        return np.column_stack(
            (EARTH_RADIUS_KM * lon * math.cos(LAT0), EARTH_RADIUS_KM * np.sin(lat) / math.cos(LAT0))
        )

    return shapely.transform(geom, eq_area).area


def main():
    six = load("jammu_kashmir_six_regions")
    overlays = load("jammu_kashmir_special_overlays")
    loc = load("jammu_kashmir_loc")["loc"]

    state = unary_union(list(six.values()))
    siachen = polygons_only(overlays["siachen"].intersection(state))
    shaksgam = polygons_only(overlays["shaksgam"].intersection(state))

    regions = {site_id: six[src] for site_id, src in SIX.items()}
    regions["ladakh"] = polygons_only(regions["ladakh"].difference(siachen))
    regions["gb"] = polygons_only(regions["gb"].difference(shaksgam).difference(siachen))
    regions["siachen"] = siachen
    regions["shaksgam"] = shaksgam
    # Overlays may also overlap neighbours slightly; carve them out everywhere.
    for rid in list(regions):
        if rid not in ("siachen", "shaksgam"):
            regions[rid] = polygons_only(regions[rid].difference(siachen).difference(shaksgam))

    areas = {rid: round(area_km2(g)) for rid, g in regions.items()}
    total = round(area_km2(state))

    # Display projection: equirectangular, scaled to the SVG width
    minx, miny, maxx, maxy = state.bounds
    kx = math.cos(LAT0)
    scale = (WIDTH - 2 * PADDING) / ((maxx - minx) * kx)
    height = math.ceil((maxy - miny) * scale + 2 * PADDING)

    def to_svg(coords):
        return np.column_stack(
            (PADDING + (coords[:, 0] - minx) * kx * scale, PADDING + (maxy - coords[:, 1]) * scale)
        )

    order = ["valley", "jammu", "ladakh", "siachen", "ajk", "gb", "aksai-chin", "shaksgam"]
    projected = [shapely.transform(regions[rid], to_svg) for rid in order]
    simplified = shapely.coverage_simplify(projected, SIMPLIFY_PX)
    svg_regions = dict(zip(order, simplified))

    def fmt(v):
        return f"{v:.1f}".rstrip("0").rstrip(".")

    def ring_d(coords):
        pts = list(coords)[:-1]
        return "M" + " L".join(f"{fmt(x)} {fmt(y)}" for x, y in pts) + " Z"

    def poly_d(geom):
        polys = geom.geoms if isinstance(geom, MultiPolygon) else [geom]
        parts = []
        for p in polys:
            if p.is_empty or p.area < 1.0:  # drop sub-pixel specks
                continue
            parts.append(ring_d(p.exterior.coords))
            parts.extend(ring_d(r.coords) for r in p.interiors if Polygon(r).area >= 1.0)
        return " ".join(parts)

    def line_d(geom):
        lines = geom.geoms if isinstance(geom, MultiLineString) else [geom]
        out = []
        for ln in lines:
            if ln.length < 2:
                continue
            out.append("M" + " L".join(f"{fmt(x)} {fmt(y)}" for x, y in ln.coords))
        return " ".join(out)

    def label_point(geom):
        biggest = max(geom.geoms, key=lambda g: g.area) if isinstance(geom, MultiPolygon) else geom
        p = polylabel(biggest, tolerance=0.5)
        return [round(p.x, 1), round(p.y, 1)]

    loc_svg = shapely.transform(loc, to_svg).simplify(SIMPLIFY_PX)
    lac = svg_regions["aksai-chin"].boundary.intersection(svg_regions["ladakh"].boundary)
    lac = linemerge([g for g in getattr(lac, "geoms", [lac]) if isinstance(g, LineString)])

    def point(lon, lat):
        x, y = to_svg(np.array([[lon, lat]]))[0]
        return [round(float(x), 1), round(float(y), 1)]

    data = {
        "viewBox": f"0 0 {WIDTH} {height}",
        "regions": {
            rid: {"d": poly_d(svg_regions[rid]), "label": label_point(svg_regions[rid]), "areaKm2": areas[rid]}
            for rid in order
        },
        "totalAreaKm2": total,
        "lineOfControl": line_d(loc_svg),
        "lineOfActualControl": line_d(lac),
        "places": [{"name": n, "point": point(lon, lat)} for n, lon, lat in PLACES],
        "peaks": [{"name": n, "point": point(lon, lat)} for n, lon, lat in PEAKS],
    }

    header = (
        "// GENERATED by scripts/build_kashmir_map.py - do not edit by hand.\n"
        "// Boundaries: Kashmir Ke Waris GeoJSON, derived from OpenStreetMap (ODbL 1.0).\n"
        "// Areas are measured from these boundaries and are approximate.\n\n"
    )
    body = "export const kashmirMapGeometry = " + json.dumps(data, indent=2) + ";\n"
    OUT.write_text(header + body, encoding="utf-8")

    print(f"Wrote {OUT.relative_to(ROOT)} ({OUT.stat().st_size // 1024} KB), viewBox {data['viewBox']}")
    for rid in order:
        print(f"  {rid:11s} {areas[rid]:>8,} km2  label {data['regions'][rid]['label']}")
    print(f"  {'total':11s} {total:>8,} km2")


if __name__ == "__main__":
    main()
