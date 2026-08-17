import {
  UsersRound,
  MapPin,
  Globe2,
  Network,
} from "lucide-react";

import {
  Container,
  Section,
  SectionHeader,
} from "../ui";

import { Link } from "react-router-dom";

import "./about.css";

const organisationLevels = [
  {
    icon: Network,
    title: "Central Organisation",
    description:
      "Information concerning central organisational structures, offices and responsibilities.",
  },
  {
    icon: MapPin,
    title: "Regional Structures",
    description:
      "Publicly documented organisational structures operating across different regions.",
  },
  {
    icon: Globe2,
    title: "International Chapters",
    description:
      "Information concerning publicly recognised branches and organisational activity outside the region.",
  },
  {
    icon: UsersRound,
    title: "Office Bearers",
    description:
      "Current leadership and office-holder information maintained in a dedicated leadership directory.",
  },
];

export default function Organisation() {
  return (
    <Section
      id="organisation"
      variant="soft"
    >
      <Container>

        <SectionHeader
          eyebrow="Organisation"
          title="How JKLF Is Organised"
          description="A clear directory of publicly documented organisational structures, offices and responsibilities."
          align="center"
        />

        <div className="organisation-grid">

          {organisationLevels.map((item) => {
            const Icon = item.icon;

            return (
              <article
                className="organisation-card"
                key={item.title}
              >

                <div className="organisation-card__icon">
                  <Icon size={25} />
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </article>
            );
          })}

        </div>

        <div className="organisation-note">

          <div>
            <strong>
              Organisational transparency
            </strong>

            <p>
              Current office holders should be clearly distinguished
              from historical leaders and former office holders.
            </p>
          </div>

          <Link to="/leadership">
            View Leadership Directory →
          </Link>

        </div>

      </Container>
    </Section>
  );
}