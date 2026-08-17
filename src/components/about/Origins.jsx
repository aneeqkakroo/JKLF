import {
  ArrowRight,
  Clock3,
} from "lucide-react";

import {
  Button,
  Container,
  Section,
} from "../ui";

import "./about.css";

const periods = [
  {
    date: "Early Period",
    title: "Political Origins",
    text:
      "Background material explaining the political organisations, individuals and ideas associated with the movement's early development.",
  },
  {
    date: "Development",
    title: "Formation and Organisation",
    text:
      "An overview of the organisation's formal development and emerging political programme.",
  },
  {
    date: "Later Period",
    title: "Expansion and Political Change",
    text:
      "The development of organisational structures and political activity across Jammu Kashmir and internationally.",
  },
];

export default function Origins() {
  return (
    <Section
      id="origins"
      variant="soft"
    >
      <Container>

        <div className="about-split-heading">

          <div>
            <span className="ui-eyebrow">
              Origins & Development
            </span>

            <h2>
              A Movement Shaped by the Political History of Jammu Kashmir
            </h2>
          </div>

          <div>
            <p>
              The detailed History section will provide a sourced
              chronology. The About page instead gives visitors a
              concise introduction to the organisation's development.
            </p>

            <Button
              to="/history"
              variant="outline"
            >
              Explore Full History
              <ArrowRight size={17} />
            </Button>
          </div>

        </div>

        <div className="origins-timeline">

          {periods.map((period, index) => (
            <div
              className="origin-period"
              key={period.title}
            >

              <div className="origin-period__number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="origin-period__icon">
                <Clock3 size={18} />
              </div>

              <span>{period.date}</span>

              <h3>{period.title}</h3>

              <p>{period.text}</p>

            </div>
          ))}

        </div>

      </Container>
    </Section>
  );
}