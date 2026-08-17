import {
  ArrowRight,
  CircleDot,
} from "lucide-react";

import {
  Button,
  Container,
  Section,
} from "../ui";

import "./position.css";

const stages = [
  {
    number: "01",
    title: "Political Dialogue",
    text:
      "A political process involving relevant parties and affected communities.",
  },
  {
    number: "02",
    title: "Public Participation",
    text:
      "A meaningful role for the population in determining future political arrangements.",
  },
  {
    number: "03",
    title: "Constitutional Framework",
    text:
      "Development of democratic institutions and constitutional protections.",
  },
  {
    number: "04",
    title: "Regional Representation",
    text:
      "Institutional recognition of the different regions and communities within Jammu Kashmir.",
  },
];

export default function PoliticalFramework() {
  return (
    <Section
      variant="soft"
      className="political-framework-section"
    >

      <Container>

        <div className="political-framework">

          <div className="political-framework__intro">

            <span className="ui-eyebrow">
              Political Framework
            </span>

            <h2>
              How a Future Political Settlement Could Be Discussed
            </h2>

            <p>
              This section can summarise the organisation's
              proposed political process while allowing the
              dedicated policy pages to explain specific
              constitutional questions in detail.
            </p>

            <Button
              to="/position/political-settlement"
              variant="outline"
            >
              Political Settlement
              <ArrowRight size={17} />
            </Button>

          </div>

          <div className="political-framework__steps">

            {stages.map((stage) => (
              <article
                className="framework-step"
                key={stage.number}
              >

                <div className="framework-step__marker">
                  <CircleDot size={19} />
                </div>

                <div className="framework-step__content">

                  <span>
                    {stage.number}
                  </span>

                  <h3>
                    {stage.title}
                  </h3>

                  <p>
                    {stage.text}
                  </p>

                </div>

              </article>
            ))}

          </div>

        </div>

      </Container>

    </Section>
  );
}