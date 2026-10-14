import { ArrowRight } from "lucide-react";

import {
  Button,
  Container,
  Section,
} from "../ui";

import { timeline } from "../../data/timeline";

import "./about.css";

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
              Our Story
            </span>

            <h2>
              Decades of Struggle for a Free Kashmir
            </h2>
          </div>

          <div>
            <p>
              Our movement grew from the conviction that Kashmir's
              future must be decided by Kashmiris. These are some of
              the moments that shaped it.
            </p>

            <Button
              to="/history"
              variant="outline"
            >
              Explore our full history
              <ArrowRight size={17} />
            </Button>
          </div>

        </div>

        <ol className="story-timeline">

          {timeline.map((milestone) => (
            <li
              className="story-milestone"
              key={milestone.title}
            >

              <span className="story-milestone__year">
                {milestone.year}
              </span>

              <h3>
                {milestone.title}
              </h3>

              <p>
                {milestone.description}
              </p>

            </li>
          ))}

        </ol>

      </Container>
    </Section>
  );
}
