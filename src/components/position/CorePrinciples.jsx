import {
  Landmark,
  Vote,
  UsersRound,
  Map,
} from "lucide-react";

import {
  Container,
  Section,
  SectionHeader,
} from "../ui";

import "./position.css";

const principles = [
  {
    number: "01",
    title: "Political Independence",
    icon: Landmark,
    description:
      "The organisation's published objective concerning the future political status of Jammu Kashmir.",
  },
  {
    number: "02",
    title: "Popular Consent",
    icon: Vote,
    description:
      "Political authority should derive from public participation and the expressed consent of the people.",
  },
  {
    number: "03",
    title: "Equal Citizenship",
    icon: UsersRound,
    description:
      "Political and civil rights should apply equally irrespective of religious, regional, ethnic or linguistic identity.",
  },
  {
    number: "04",
    title: "Regional Diversity",
    icon: Map,
    description:
      "Political institutions should recognise the different regions, communities and identities within Jammu Kashmir.",
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
          eyebrow="Core Principles"
          title="Four Themes at the Centre of the Programme"
          description="A concise overview of recurring themes within the organisation's stated political philosophy."
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