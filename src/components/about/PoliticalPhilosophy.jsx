import {
  Flag,
  HeartHandshake,
  Vote,
  HandHeart,
  ArrowRight,
} from "lucide-react";

import {
  Button,
  Container,
  Section,
} from "../ui";

import "./about.css";

// Drawn from Article 4 (Ideology) of the JKLF Constitution.
const principles = [
  {
    title: "Independence — the Right of a Nation",
    icon: Flag,
    text:
      "Jammu Kashmir, including every territory that formed part of the state on 14 August 1947, is one indivisible political entity. No part of it is legally part of another country, and its future belongs solely to its people. The best solution is to reunite the whole state as an independent, sovereign country.",
  },
  {
    title: "Religious Harmony",
    icon: HeartHandshake,
    text:
      "Every citizen will be free to choose and practise their religion and way of life. Sectarian, racial, linguistic and regional division is poison to the national cause, and protecting the rights of every minority is the centuries-old tradition and moral duty of all Kashmiris.",
  },
  {
    title: "Democracy",
    icon: Vote,
    text:
      "Government must rest on democracy, equality, social justice and human brotherhood, with freedom of thought and expression, protection of life, property and honour, and equal opportunity for every citizen.",
  },
  {
    title: "Welfare System",
    icon: HandHeart,
    text:
      "Providing basic necessities, medical treatment, education and employment, and supporting the unemployed, are fundamental duties of the state. Backward areas and communities will be given priority, so that the whole state rises to the same level.",
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

        <div className="philosophy-layout">

          <div className="philosophy-layout__heading">

            <span className="ui-eyebrow">
              Political Philosophy
            </span>

            <h2>
              What We Stand For
            </h2>

            <p>
              Four principles from our constitution guide our
              struggle and the free Jammu Kashmir we are working to
              build.
            </p>

            <Button
              to="/position"
              variant="hero-outline"
            >
              Read our full position
              <ArrowRight size={17} />
            </Button>

          </div>

          <ol className="philosophy-list">

            {principles.map((principle, index) => {
              const Icon = principle.icon;

              return (
                <li
                  className="philosophy-item"
                  key={principle.title}
                >

                  <span className="philosophy-item__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>

                    <h3>
                      <Icon size={22} />
                      {principle.title}
                    </h3>

                    <p>
                      {principle.text}
                    </p>

                  </div>

                </li>
              );
            })}

          </ol>

        </div>

      </Container>
    </Section>
  );
}
