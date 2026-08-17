import {
  ArrowRight,
  UserRound,
} from "lucide-react";

import { Link } from "react-router-dom";

import {
  historicalFigures,
} from "../../data/leadership";

import {
  Button,
  Container,
  Section,
  SectionHeader,
} from "../ui";

import "./leadership.css";

export default function HistoricalLeadership() {
  return (
    <Section>

      <Container>

        <div className="historical-leadership__heading">

          <SectionHeader
            eyebrow="Historical Figures"
            title="People in the History of JKLF"
            description="Historical figures are presented separately from current leadership and can be connected with archival material, events and documents."
          />

          <Button
            to="/history"
            variant="outline"
          >
            Explore History
            <ArrowRight size={17} />
          </Button>

        </div>

        <div className="historical-leadership-grid">

          {historicalFigures.map((person) => (
            <Link
              key={person.id}
              to={`/leadership/${person.id}`}
              className="historical-leader-card"
            >

              <div className="historical-leader-card__image">

                {person.image ? (
                  <img
                    src={person.image}
                    alt={person.name}
                  />
                ) : (
                  <UserRound size={50} />
                )}

              </div>

              <div className="historical-leader-card__content">

                <span>
                  {person.category}
                </span>

                <h3>
                  {person.name}
                </h3>

                <p>
                  {person.description}
                </p>

                <div>
                  View biography
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