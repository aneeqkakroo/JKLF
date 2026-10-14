import {
  Map,
  Scale,
  Vote,
} from "lucide-react";

import {
  Container,
  Section,
} from "../ui";

import "./position.css";

// Article 4, clauses 1–6 and 11 of the constitution.
const principles = [
  {
    icon: Scale,
    title: "Not a Territorial Dispute",
    text:
      "Kashmir is not a quarrel between India and Pakistan over who owns a piece of land. No part of the State of Jammu Kashmir is, constitutionally or legally, part of another country.",
  },
  {
    icon: Map,
    title: "One Indivisible State",
    text:
      "Every territory that formed part of the state on 14 August 1947 belongs to one indivisible political entity. We do not recognise any agreement that keeps it divided.",
  },
  {
    icon: Vote,
    title: "The People Decide",
    text:
      "Only the people of the state may decide its constitution, its political, economic and social system, and its relations with other countries. Nothing imposed on them has any standing.",
  },
];

export default function PositionIntro() {
  return (
    <Section id="ideology">

      <Container>

        <div className="position-intro">

          <div className="position-intro__heading">

            <span className="ui-eyebrow">
              Our Ideology
            </span>

            <h2>
              A National Liberation Movement
            </h2>

          </div>

          <div className="position-intro__content">

            <p className="position-large-copy">
              The movement for Kashmir's freedom is the national
              liberation movement of the Kashmiri people, across the
              line that forcibly divides them.
            </p>

            <p>
              We believe the best solution of the Kashmir issue is to
              reunite the entire State of Jammu Kashmir and make it
              an independent and sovereign country. No individual,
              party or government has the right to decide the
              future of the state, or of any part of it, on its
              people's behalf.
            </p>

            <p>
              The struggle for that freedom is the duty of every
              patriotic Kashmiri, wherever they live — in any part
              of the state or abroad.
            </p>

          </div>

        </div>

        <div className="position-editorial-grid">

          {principles.map((item) => {
            const Icon = item.icon;

            return (
              <article
                className="position-editorial-card"
                key={item.title}
              >

                <Icon size={24} />

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

              </article>
            );
          })}

        </div>

      </Container>

    </Section>
  );
}
