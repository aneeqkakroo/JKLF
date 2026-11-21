/*
  Map of the State of Jammu Kashmir as it existed on 14 August 1947.
  Outlines, region areas, the LoC and LAC come from kashmirMapGeometry.js,
  generated from the Kashmir Ke Waris GeoJSON by scripts/build_kashmir_map.py.
  Whole-state figures and district lists come from "Some Important Facts About
  Kashmir" in the JKLF Constitution (2012). Region populations are the latest
  census counts: Census of India 2011 and Pakistan Census 2017.
*/

import { kashmirMapGeometry as geometry } from "./kashmirMapGeometry";

export const mapViewBox = geometry.viewBox;
export const lineOfControl = geometry.lineOfControl;
export const lineOfActualControl = geometry.lineOfActualControl;
export const mapPlaces = geometry.places;
export const mapPeaks = geometry.peaks;

const regionText = [
  {
    id: "valley",
    population: "6,888,475",
    name: "Kashmir Valley",
    control: "Indian-occupied Kashmir",
    description:
      "The heart of the state and home of the JKLF head office, Maqbool Manzil in Maisuma, Srinagar.",
    districts: ["Srinagar", "Budgam", "Anantnag", "Pulwama", "Baramulla", "Kupwara"],
  },
  {
    id: "jammu",
    population: "5,378,538",
    name: "Jammu",
    control: "Indian-occupied Kashmir",
    description:
      "The southern province of the state, home to communities of many faiths and languages.",
    districts: ["Jammu", "Kathua", "Udhampur", "Doda", "Rajouri", "Poonch"],
  },
  {
    id: "ladakh",
    population: "274,289",
    name: "Ladakh",
    control: "Indian-occupied Kashmir",
    description:
      "The high-altitude east of the state, the largest province by area.",
    districts: ["Leh", "Kargil"],
  },
  {
    id: "siachen",
    population: null,
    name: "Siachen Glacier",
    shortName: "Siachen",
    control: "Under Indian control since 1984",
    description:
      "The glacier at the northern end of the Line of Control, among the highest battlefields on Earth.",
    districts: [],
  },
  {
    id: "ajk",
    population: "4,045,366",
    name: "Azad Kashmir",
    control: "Under Pakistan's control",
    description:
      "Home of the Azad Government of 4 October 1947 and the JKLF sub head office in Upper Chatter, Muzaffarabad.",
    districts: ["Muzaffarabad", "Bagh", "Poonch", "Sudhnoti", "Kotli", "Mirpur", "Bhimber"],
  },
  {
    id: "gb",
    population: "1,492,924",
    name: "Gilgit-Baltistan",
    control: "Under Pakistan's control",
    description:
      "The mountainous north of the state, home to K2 and Nanga Parbat, two of the highest peaks on Earth.",
    districts: ["Gilgit", "Ghizer", "Diamer", "Skardu", "Ganche"],
  },
  {
    id: "aksai-chin",
    population: null,
    name: "Aksai Chin",
    control: "Under Chinese control since 1962",
    description:
      "The high plateau in the far north-east of the state, held by China since 1962.",
    districts: [],
  },
  {
    id: "shaksgam",
    population: null,
    name: "Shaksgam Valley",
    shortName: "Shaksgam",
    control: "Ceded by Pakistan to China in 1963",
    description:
      "The Trans-Karakoram Tract north of K2, handed to China by Pakistan under a 1963 boundary agreement.",
    districts: [],
  },
];


// Short labels sit on the map; narrow regions get a rotated label.
const labelRotate = { ajk: -72 };

export const kashmirRegions = regionText.map((region) => ({
  ...region,
  d: geometry.regions[region.id].d,
  label: geometry.regions[region.id].label,
  labelRotate: labelRotate[region.id],
  areaKm2: geometry.regions[region.id].areaKm2,
}));

// Whole-state population is the sum of the regions, so the figures always agree.
const totalPopulation = kashmirRegions.reduce(
  (sum, region) => sum + Number(String(region.population || 0).replace(/,/g, "")),
  0
);

export const stateFacts = [
  {
    value: "≈ 222,000 km²",
    label: "Total area",
  },
  {
    value: `≈ ${(totalPopulation / 1e6).toFixed(1)} million`,
    label: "People",
  },
  {
    value: "1947",
    label: "Forcibly divided",
  },
];

// Shown before a region is selected.
export const wholeState = {
  id: "state",
  name: "The Whole State",
  control: "One nation, divided since 1947",
  description:
    "Every territory that formed part of the State of Jammu Kashmir on 14 August 1947, now divided between India, Pakistan and China.",
  districts: [],
  facts: stateFacts,
};

const formatArea = (km2) =>
  `≈ ${(km2 < 1000 ? Math.round(km2 / 10) * 10 : Math.round(km2 / 100) * 100).toLocaleString("en-GB")} km²`;

// The three figures shown for the current selection.
export function regionFacts(region) {
  if (!region || region.id === "state") {
    return stateFacts;
  }

  const share = (region.areaKm2 / geometry.totalAreaKm2) * 100;

  return [
    { value: formatArea(region.areaKm2), label: "Area" },
    {
      value: region.population || "None",
      label: region.population ? "People" : "Permanent residents",
    },
    {
      value: share < 1 ? "< 1%" : `${Math.round(share)}%`,
      label: "Of the whole state",
    },
  ];
}
