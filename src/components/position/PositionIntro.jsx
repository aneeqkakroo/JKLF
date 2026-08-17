import {
  BookOpen,
  Scale,
  Vote,
} from "lucide-react";

import {
  Container,
  Section,
} from "../ui";

import "./position.css";

const principles = [
  {
    icon: BookOpen,
    title: "Published Positions",
    text:
      "The political section should be grounded in formal programmes, constitutions, resolutions and public statements.",
  },
  {
    icon: Scale,
    title: "Clear Attribution",
    text:
      "Organisational positions should be clearly distinguished from historical facts, government positions and independent analysis.",
  },
  {
    icon: Vote,
    title: "Democratic Framework",
    text:
      "Political questions are presented through the organisation's stated emphasis on political participation and public consent.",
  },
];

export default function PositionIntro() {
  return (
    <Section>

      <Container>

        <div className="position-intro">

          <div className="position-intro__heading">

            <span className="ui-eyebrow">
              Political Programme
            </span>

            <h2>
              A Clear Statement of Political Principles
            </h2>

          </div>

          <div className="position-intro__content">

            <p className="position-large-copy">
              This section provides a structured overview of JKLF's
              published political positions and proposed political
              framework.
            </p>

            <p>
              Rather than presenting one long manifesto, major
              questions are separated into individual topics so
              visitors can understand specific aspects of the
              organisation's political programme.
            </p>

            <p>
              Each detailed position page can later include relevant
              primary documents, historical context, statements and
              references.
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