import {
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

import {
  positionTopics,
} from "../../data/positions";

import {
  Container,
  Section,
  SectionHeader,
} from "../ui";

import "./position.css";

export default function PositionTopics() {
  return (
    <Section>

      <Container>

        <SectionHeader
          eyebrow="Issues & Policies"
          title="Explore Our Political Positions"
          description="Select a topic to view the organisation's position, relevant documents, historical context and supporting material."
        />

        <div className="position-topic-grid">

          {positionTopics.map((topic) => (
            <Link
              key={topic.id}
              to={`/position/${topic.id}`}
              className="position-topic-card"
            >

              <div className="position-topic-card__top">

                <span className="position-topic-card__number">
                  {topic.number}
                </span>

                <span className="position-topic-card__category">
                  {topic.category}
                </span>

              </div>

              <h3>
                {topic.title}
              </h3>

              <p>
                {topic.description}
              </p>

              <div className="position-topic-card__link">
                Explore position
                <ArrowRight size={17} />
              </div>

            </Link>
          ))}

        </div>

      </Container>

    </Section>
  );
}