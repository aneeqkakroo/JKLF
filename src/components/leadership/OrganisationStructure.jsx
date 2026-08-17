import {
  Crown,
  Network,
  Globe2,
  MapPinned,
  UsersRound,
} from "lucide-react";

import {
  Container,
  Section,
  SectionHeader,
} from "../ui";

import "./leadership.css";

const levels = [
  {
    level: "01",
    title: "Central Leadership",
    description:
      "Central political and organisational leadership.",
    icon: Crown,
  },
  {
    level: "02",
    title: "Central Departments",
    description:
      "Political, organisational, media and other functional responsibilities.",
    icon: Network,
  },
  {
    level: "03",
    title: "Regional Organisation",
    description:
      "Regional and local organisational structures where publicly documented.",
    icon: MapPinned,
  },
  {
    level: "04",
    title: "International Organisation",
    description:
      "International chapters and organisational structures operating outside the region.",
    icon: Globe2,
  },
  {
    level: "05",
    title: "Members & Supporters",
    description:
      "The wider organisational community represented through appropriate structures.",
    icon: UsersRound,
  },
];

export default function OrganisationStructure() {
  return (
    <Section
      variant="dark"
      className="leadership-structure"
    >

      <Container>

        <SectionHeader
          eyebrow="Organisation"
          title="Organisational Structure"
          description="A simplified visual overview of how organisational responsibility can be presented."
        />

        <div className="organisation-structure">

          {levels.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                className="structure-level"
                key={item.level}
              >

                <div className="structure-level__line">
                  <div className="structure-level__marker">
                    {item.level}
                  </div>

                  {index < levels.length - 1 && (
                    <span />
                  )}
                </div>

                <div className="structure-level__content">

                  <Icon size={26} />

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                </div>

              </article>
            );
          })}

        </div>

      </Container>
    </Section>
  );
}