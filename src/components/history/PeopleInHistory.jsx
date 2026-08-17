import {
  UserRound,
  ArrowRight,
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

import "./history.css";

export default function PeopleInHistory() {
  return (
    <Section variant="soft">

      <Container>

        <div className="history-people__heading">

          <SectionHeader
            eyebrow="People"
            title="People in the Historical Record"
            description="Biographical profiles can connect individuals with documents, speeches, correspondence and historical events."
          />

          <Button
            to="/leadership"
            variant="outline"
          >
            Explore People
            <ArrowRight size={17} />
          </Button>

        </div>

        <div className="history-person-grid">

          {historicalFigures.map((person) => (
            <Link
              to={`/leadership/${person.id}`}
              className="history-person-card"
              key={person.id}
            >

              <div className="history-person-card__image">

                {person.image ? (
                  <img
                    src={person.image}
                    alt={person.name}
                  />
                ) : (
                  <UserRound size={44} />
                )}

              </div>

              <div className="history-person-card__content">

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
                  Biography
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