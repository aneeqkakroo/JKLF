import {
  Flag,
  HeartHandshake,
  Vote,
  HandHeart,
} from "lucide-react";

import {
  Container,
  Section,
  SectionHeader,
} from "../ui";

import "./position.css";

// Article 4(6) and 4(7)(a)–(e): the freedom JKLF seeks.
const principles = [
  {
    number: "01",
    title: "Independence",
    icon: Flag,
    description:
      "The whole State of Jammu Kashmir reunited as an independent and sovereign country, free from external domination.",
  },
  {
    number: "02",
    title: "Religious Harmony",
    icon: HeartHandshake,
    description:
      "Complete freedom for every citizen to choose and practise their religion, beliefs and way of life, with no law against the faith or traditions of any community.",
  },
  {
    number: "03",
    title: "Democracy",
    icon: Vote,
    description:
      "Government founded on democracy, equality, social justice and human brotherhood, protecting free thought, free expression and equal opportunity.",
  },
  {
    number: "04",
    title: "Welfare System",
    icon: HandHeart,
    description:
      "Basic necessities, medical treatment, education and employment as duties of the state, with support for the unemployed and priority for backward areas.",
  },
];

export default function CorePrinciples() {
  return (
    <Section
      variant="dark"
      className="position-principles"
    >

      <Container>

        <SectionHeader
          eyebrow="Ultimate Freedom"
          title="The Free Jammu Kashmir We Seek"
          description="Our ultimate objective is freedom: an independent country whose society is built on these four principles."
        />

        <div className="position-principle-grid">

          {principles.map((principle) => {
            const Icon = principle.icon;

            return (
              <article
                className="position-principle"
                key={principle.title}
              >

                <div className="position-principle__top">

                  <span>
                    {principle.number}
                  </span>

                  <Icon size={25} />

                </div>

                <h3>
                  {principle.title}
                </h3>

                <p>
                  {principle.description}
                </p>

              </article>
            );
          })}

        </div>

      </Container>

    </Section>
  );
}
