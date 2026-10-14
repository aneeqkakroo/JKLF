import { useState } from "react";

import {
  Landmark,
  MapPinned,
} from "lucide-react";

import {
  kashmirRegions,
  lineOfActualControl,
  lineOfControl,
  mapPeaks,
  mapPlaces,
  mapViewBox,
  stateFacts,
} from "../../data/kashmirMap";

import {
  Container,
  Section,
  SectionHeader,
} from "../ui";

import "./home.css";

export default function KashmirMap() {
  const [selectedId, setSelectedId] = useState(
    kashmirRegions[0].id
  );

  const [hoveredId, setHoveredId] = useState(null);

  const selected = kashmirRegions.find(
    (region) => region.id === selectedId
  );

  function handleKeyDown(event, id) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setSelectedId(id);
    }
  }

  return (
    <Section
      id="map"
      className="map-section"
    >
      <Container>

        <SectionHeader
          eyebrow="One Nation, Forcibly Divided"
          title="The State of Jammu Kashmir"
          description="Every territory that formed part of the state on 14 August 1947. Select a region to learn more."
          align="center"
        />

        <div className="map-explorer">

          <figure className="map-explorer__map">

            <svg
              className="kashmir-map"
              viewBox={mapViewBox}
              role="group"
              aria-label="Interactive map of the State of Jammu Kashmir"
            >

              {kashmirRegions.map((region) => (
                <path
                  key={region.id}
                  d={region.d}
                  className={[
                    "kashmir-map__region",
                    `kashmir-map__region--${region.id}`,
                    region.id === selectedId &&
                      "kashmir-map__region--active",
                    region.id === hoveredId &&
                      "kashmir-map__region--hover",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  role="button"
                  tabIndex={0}
                  aria-label={region.name}
                  aria-pressed={region.id === selectedId}
                  onClick={() => setSelectedId(region.id)}
                  onKeyDown={(event) =>
                    handleKeyDown(event, region.id)
                  }
                  onMouseEnter={() => setHoveredId(region.id)}
                  onMouseLeave={() => setHoveredId(null)}
                />
              ))}

              <path
                className="kashmir-map__line kashmir-map__line--loc"
                d={lineOfControl}
              />

              <path
                className="kashmir-map__line kashmir-map__line--lac"
                d={lineOfActualControl}
              />

              <g
                className="kashmir-map__places"
                aria-hidden="true"
              >
                {mapPlaces.map((place) => (
                  <g key={place.name}>
                    <circle
                      cx={place.point[0]}
                      cy={place.point[1]}
                      r="3.5"
                    />

                    <text
                      x={place.point[0] + 7}
                      y={place.point[1] + 4}
                    >
                      {place.name}
                    </text>
                  </g>
                ))}

                {mapPeaks.map((peak) => (
                  <g
                    key={peak.name}
                    className="kashmir-map__peak"
                  >
                    <path
                      d={`M${peak.point[0] - 6} ${peak.point[1] + 5} L${peak.point[0]} ${peak.point[1] - 6} L${peak.point[0] + 6} ${peak.point[1] + 5} Z`}
                    />

                    <text
                      x={peak.point[0] + 9}
                      y={peak.point[1] + 4}
                    >
                      {peak.name}
                    </text>
                  </g>
                ))}
              </g>

              <g
                className="kashmir-map__labels"
                aria-hidden="true"
              >
                {kashmirRegions.map((region) => (
                  <text
                    key={region.id}
                    x={region.label[0]}
                    y={region.label[1]}
                    transform={
                      region.labelRotate
                        ? `rotate(${region.labelRotate} ${region.label[0]} ${region.label[1]})`
                        : undefined
                    }
                    className={[
                      "kashmir-map__label",
                      `kashmir-map__label--${region.id}`,
                      region.id === selectedId &&
                        "kashmir-map__label--active",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {region.shortName || region.name}
                  </text>
                ))}
              </g>

            </svg>

            <figcaption className="kashmir-map__legend">
              <span>
                <i className="kashmir-map__key kashmir-map__key--loc" />
                Line of Control
              </span>

              <span>
                <i className="kashmir-map__key kashmir-map__key--lac" />
                Line of Actual Control
              </span>

              <small>
                Boundaries are approximate and shown for
                reference only.
              </small>
            </figcaption>

          </figure>

          <div className="map-explorer__panel">

            <div
              className="region-selector"
              role="group"
              aria-label="Select a region"
            >
              {kashmirRegions.map((region) => (
                <button
                  type="button"
                  key={region.id}
                  className={
                    region.id === selectedId
                      ? "region-button region-button--active"
                      : "region-button"
                  }
                  aria-pressed={region.id === selectedId}
                  onClick={() => setSelectedId(region.id)}
                >
                  {region.name}
                </button>
              ))}
            </div>

            <div
              className="region-information"
              aria-live="polite"
            >

              <span>
                {selected.control}
              </span>

              <h3>
                {selected.name}
              </h3>

              <p>
                {selected.description}
              </p>

              {selected.districts.length > 0 && (
                <dl className="region-information__facts">
                  <div>
                    <dt>
                      <Landmark size={16} />
                      Districts
                    </dt>

                    <dd>
                      {selected.districts.join(", ")}
                    </dd>
                  </div>
                </dl>
              )}

            </div>

            <dl className="map-facts">
              {stateFacts.map((fact) => (
                <div key={fact.label}>
                  <dd>
                    {fact.value}
                  </dd>

                  <dt>
                    {fact.label}
                  </dt>
                </div>
              ))}
            </dl>

            <p className="map-source">
              <MapPinned size={14} />
              Figures from the JKLF Constitution (2012).
            </p>

          </div>

        </div>

      </Container>
    </Section>
  );
}
