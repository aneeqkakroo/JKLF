import { ArrowRight } from "lucide-react";

import { timeline } from "../../data/timeline";

import {
  Button,
  Container,
  Section,
  SectionHeader,
} from "../ui";

import "./home.css";

export default function HistoryPreview() {
  return (
    <Section
      variant="dark"
      className="history-preview"
    >
      <Container>

        <div className="history-preview__heading">

          <SectionHeader
            eyebrow="Historical Archive"
            title="The JKLF Story"
            description="Explore a chronological archive of political developments, documents, individuals and major events."
          />

          <Button
            to="/history"
            variant="hero-outline"
          >
            Explore Full History
            <ArrowRight size={17} />
          </Button>

        </div>

        <div className="timeline">

          <div className="timeline__line" />

          {timeline.map((event, index) => (
            <div
              className="timeline__item"
              key={event.year}
            >
              <div className="timeline__marker">
                <span />
              </div>

              <div className="timeline__number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <strong className="timeline__year">
                {event.year}
              </strong>

              <h3>{event.title}</h3>

              <p>{event.description}</p>
            </div>
          ))}

        </div>

      </Container>
    </Section>
  );
}