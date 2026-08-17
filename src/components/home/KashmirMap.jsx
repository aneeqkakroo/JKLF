import { useState } from "react";
import {
  MapPinned,
  Languages,
  BookOpen,
  Landmark,
} from "lucide-react";

import {
  Container,
  Section,
  SectionHeader,
} from "../ui";

import "./home.css";

const regions = [
  {
    id: "valley",
    name: "Kashmir Valley",
    description:
      "Explore geographical, historical and administrative information relating to the Kashmir Valley.",
  },
  {
    id: "jammu",
    name: "Jammu",
    description:
      "Explore the geography, communities, history and administrative development of the Jammu region.",
  },
  {
    id: "ladakh",
    name: "Ladakh",
    description:
      "Explore historical, geographical and administrative information relating to Ladakh.",
  },
  {
    id: "ajk",
    name: "Azad Jammu & Kashmir",
    description:
      "Explore historical and administrative information concerning Azad Jammu and Kashmir.",
  },
  {
    id: "gb",
    name: "Gilgit-Baltistan",
    description:
      "Explore historical, geographical and administrative information concerning Gilgit-Baltistan.",
  },
];

const informationTypes = [
  {
    icon: MapPinned,
    label: "Geography",
  },
  {
    icon: Languages,
    label: "Languages",
  },
  {
    icon: BookOpen,
    label: "History",
  },
  {
    icon: Landmark,
    label: "Administration",
  },
];

export default function KashmirMap() {
  const [selectedRegion, setSelectedRegion] =
    useState(regions[0]);

  return (
    <Section className="map-section">
      <Container>

        <SectionHeader
          eyebrow="Explore the Region"
          title="Jammu Kashmir"
          description="Explore the geography, peoples, history and administrative development of the different regions."
          align="center"
        />

        <div className="map-explorer">

          <div className="map-explorer__map">

            <div className="map-placeholder">
              <div className="map-placeholder__shape">
                <MapPinned size={48} />

                <strong>
                  Interactive Kashmir Map
                </strong>

                <span>
                  SVG map will be inserted here
                </span>
              </div>
            </div>

          </div>

          <div className="map-explorer__panel">

            <span className="map-explorer__label">
              Select a region
            </span>

            <div className="region-selector">
              {regions.map((region) => (
                <button
                  key={region.id}
                  className={
                    selectedRegion.id === region.id
                      ? "region-button region-button--active"
                      : "region-button"
                  }
                  onClick={() =>
                    setSelectedRegion(region)
                  }
                >
                  {region.name}
                </button>
              ))}
            </div>

            <div className="region-information">
              <span>Region</span>

              <h3>{selectedRegion.name}</h3>

              <p>
                {selectedRegion.description}
              </p>

              <div className="region-information__types">
                {informationTypes.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.label}>
                      <Icon size={18} />
                      <span>{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </Container>
    </Section>
  );
}