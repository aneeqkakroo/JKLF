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
            Learn More About Our Struggle
          </h2>

          <p>
            Discover the history of our movement, or read our
            latest statements.
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
                From our founding in 1977 to the reunification of
                the Front and beyond.
              </p>
            </div>

            <ArrowRight size={22} />

          </Link>

          <Link
            to="/news"
            className="position-cta-card"
          >

            <Library size={29} />

            <div>
              <span>
                Latest
              </span>

              <h3>
                News & Statements
              </h3>

              <p>
                Official statements, press releases and notices
                from the Front.
              </p>
            </div>

            <ArrowRight size={22} />

          </Link>

        </div>

      </Container>

    </Section>
  );
}