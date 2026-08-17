import {
  Compass,
  BookOpen,
  Users,
  Globe2,
} from "lucide-react";

import {
  Container,
  Section,
} from "../ui";

import "./about.css";

const facts = [
  {
    icon: Compass,
    label: "Political Movement",
    description:
      "An organisation centred on the political future and status of Jammu Kashmir.",
  },
  {
    icon: BookOpen,
    label: "Historical Organisation",
    description:
      "A political history spanning several decades and different phases of activity.",
  },
  {
    icon: Users,
    label: "Organisation",
    description:
      "A movement with organisational structures, leadership and supporters across different regions.",
  },
  {
    icon: Globe2,
    label: "International Activity",
    description:
      "A history of political campaigning and engagement beyond Jammu Kashmir.",
  },
];

export default function WhoWeAre() {
  return (
    <Section id="who-we-are">

      <Container>

        <div className="about-intro">

          <div className="about-intro__heading">

            <span className="ui-eyebrow">
              Who We Are
            </span>

            <h2>
              Understanding JKLF
            </h2>

          </div>

          <div className="about-intro__text">

            <p className="about-large-copy">
              The Jammu Kashmir Liberation Front is a political
              organisation whose history forms part of the wider
              modern political history of Jammu Kashmir.
            </p>

            <p>
              This website is intended to provide a structured
              record of the organisation, its published political
              positions, historical development, documents,
              leadership and public activity.
            </p>

            <p>
              Historical and political material should distinguish
              organisational positions from independently
              verifiable historical information, government
              positions and other interpretations where relevant.
            </p>

          </div>

        </div>

        <div className="about-fact-grid">

          {facts.map((fact) => {
            const Icon = fact.icon;

            return (
              <div
                className="about-fact"
                key={fact.label}
              >

                <Icon size={24} />

                <h3>{fact.label}</h3>

                <p>{fact.description}</p>

              </div>
            );
          })}

        </div>

      </Container>

    </Section>
  );
}