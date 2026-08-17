import {
  ArrowRight,
  UserRound,
} from "lucide-react";
import { Link } from "react-router-dom";

import { historicalFigures } from "../../data/leadership";

import {
  Button,
  Container,
  Section,
  SectionHeader,
} from "../ui";

import "./about.css";

export default function KeyFigures() {
  return (
    <Section id="key-figures">

      <Container>

        <div className="key-figures__heading">

          <SectionHeader
            eyebrow="People & History"
            title="Key Historical Figures"
            description="Biographies should provide context, primary material and historical sources rather than simply short profile descriptions."
          />

          <Button
            to="/leadership"
            variant="outline"
          >
            Leadership & People
            <ArrowRight size={17} />
          </Button>

        </div>

        <div className="figure-grid">

          {historicalFigures.map((person) => (
            <Link
              to={`/leadership/${person.id}`}
              className="figure-card"
              key={person.id}
            >

              <div className="figure-card__image">

                {person.image ? (
                  <img
                    src={person.image}
                    alt={person.name}
                  />
                ) : (
                  <div className="figure-card__placeholder">
                    <UserRound size={45} />
                  </div>
                )}

              </div>

              <div className="figure-card__content">

                <span>
                  {person.category}
                </span>

                <h3>
                  {person.name}
                </h3>

                <p>
                  {person.description}
                </p>

                <div className="figure-card__link">
                  View profile
                  <ArrowRight size={16} />
                </div>

              </div>

            </Link>
          ))}

        </div>

      </Container>

    </Section>
  );
}