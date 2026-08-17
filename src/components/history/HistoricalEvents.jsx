import {
  ArrowRight,
  CalendarDays,
} from "lucide-react";

import {
  historyEvents,
} from "../../data/history";

import {
  Button,
  Container,
  Section,
  SectionHeader,
} from "../ui";

import "./history.css";

export default function HistoricalEvents() {
  return (
    <Section>

      <Container>

        <div className="historical-events__heading">

          <SectionHeader
            eyebrow="Major Events"
            title="Events That Shaped the Political History"
            description="Important events can be documented through concise summaries, timelines, competing perspectives and primary material."
          />

          <Button
            to="/documents"
            variant="outline"
          >
            Search Archive
            <ArrowRight size={17} />
          </Button>

        </div>

        <div className="historical-event-grid">

          {historyEvents.map((event) => (
            <article
              className="historical-event-card"
              key={event.id}
            >

              <div className="historical-event-card__top">

                <div className="historical-event-card__date">
                  <CalendarDays size={16} />
                  {event.date}
                </div>

                <span>
                  {event.category}
                </span>

              </div>

              <h3>
                {event.title}
              </h3>

              <p>
                {event.description}
              </p>

              <button type="button">
                Explore event
                <ArrowRight size={16} />
              </button>

            </article>
          ))}

        </div>

      </Container>
    </Section>
  );
}