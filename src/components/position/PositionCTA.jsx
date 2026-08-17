import {
  BookOpen,
  Library,
  ArrowRight,
} from "lucide-react";

import {
  Container,
  Section,
} from "../ui";

import { Link } from "react-router-dom";

import "./position.css";

export default function PositionCTA() {
  return (
    <Section
      variant="soft"
      className="position-cta"
    >

      <Container>

        <div className="position-cta__intro">

          <span className="ui-eyebrow">
            Continue Exploring
          </span>

          <h2>
            Political Positions in Context
          </h2>

          <p>
            Explore the historical record or read the primary
            documents behind the political programme.
          </p>

        </div>

        <div className="position-cta__grid">

          <Link
            to="/history"
            className="position-cta-card"
          >

            <BookOpen size={29} />

            <div>
              <span>
                Historical Context
              </span>

              <h3>
                Explore the History
              </h3>

              <p>
                Timelines, historical events, documents and
                contextual material.
              </p>
            </div>

            <ArrowRight size={22} />

          </Link>

          <Link
            to="/documents"
            className="position-cta-card"
          >

            <Library size={29} />

            <div>
              <span>
                Primary Sources
              </span>

              <h3>
                Search the Archive
              </h3>

              <p>
                Constitutions, programmes, resolutions,
                statements and historical documents.
              </p>
            </div>

            <ArrowRight size={22} />

          </Link>

        </div>

      </Container>

    </Section>
  );
}