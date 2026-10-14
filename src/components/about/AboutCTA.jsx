import {
  ArrowRight,
  BookOpen,
  Landmark,
} from "lucide-react";

import {
  Container,
  Section,
} from "../ui";

import { Link } from "react-router-dom";

import "./about.css";

export default function AboutCTA() {
  return (
    <Section
      variant="dark"
      className="about-cta"
    >
      <Container>

        <div className="about-cta__heading">

          <span className="ui-eyebrow">
            Continue Exploring
          </span>

          <h2>
            Learn More About Our Struggle
          </h2>

        </div>

        <div className="about-cta__links">

          <Link
            to="/history"
            className="about-cta-card"
          >
            <BookOpen size={27} />

            <div>
              <span>
                Historical Archive
              </span>

              <h3>
                Explore JKLF History
              </h3>

              <p>
                From our founding in 1977 to today — the people
                and events that shaped our movement.
              </p>
            </div>

            <ArrowRight
              className="about-cta-card__arrow"
              size={23}
            />
          </Link>

          <Link
            to="/position"
            className="about-cta-card"
          >
            <Landmark size={27} />

            <div>
              <span>
                Political Programme
              </span>

              <h3>
                Read Our Position
              </h3>

              <p>
                Where we stand on independence, human rights and
                the future of Jammu Kashmir.
              </p>
            </div>

            <ArrowRight
              className="about-cta-card__arrow"
              size={23}
            />
          </Link>

        </div>

      </Container>
    </Section>
  );
}