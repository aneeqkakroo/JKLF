import {
  Landmark,
  Vote,
  Users,
  Map,
  ArrowRight,
} from "lucide-react";

import {
  Button,
  Container,
  Section,
  SectionHeader,
} from "../ui";

import "./about.css";

const principles = [
  {
    number: "01",
    title: "Political Independence",
    icon: Landmark,
    text:
      "Material explaining the organisation's published position concerning the political status and future government of Jammu Kashmir.",
  },
  {
    number: "02",
    title: "Democratic Government",
    icon: Vote,
    text:
      "An emphasis on representative government, political participation, elections and government based upon public consent.",
  },
  {
    number: "03",
    title: "Secular Citizenship",
    icon: Users,
    text:
      "The principle that citizenship and political rights should not depend upon religious, ethnic, linguistic or regional identity.",
  },
  {
    number: "04",
    title: "Regional Unity",
    icon: Map,
    text:
      "Recognition of Jammu Kashmir's multiple regions, identities and communities within the organisation's broader political programme.",
  },
];

export default function PoliticalPhilosophy() {
  return (
    <Section
      id="philosophy"
      variant="dark"
      className="about-philosophy"
    >
      <Container>

        <div className="about-philosophy__heading">

          <SectionHeader
            eyebrow="Political Philosophy"
            title="Principles of the Movement"
            description="A concise introduction to themes found within JKLF's political programme. The dedicated Political Position section will examine each issue in greater depth."
          />

          <Button
            to="/position"
            variant="hero-outline"
          >
            Read Our Position
            <ArrowRight size={17} />
          </Button>

        </div>

        <div className="philosophy-grid">

          {principles.map((principle) => {
            const Icon = principle.icon;

            return (
              <article
                className="philosophy-item"
                key={principle.title}
              >
                <div className="philosophy-item__header">

                  <span>
                    {principle.number}
                  </span>

                  <Icon size={25} />

                </div>

                <h3>
                  {principle.title}
                </h3>

                <p>{principle.text}</p>

              </article>
            );
          })}

        </div>

      </Container>
    </Section>
  );
}