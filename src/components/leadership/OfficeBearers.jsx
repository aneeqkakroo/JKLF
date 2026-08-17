import {
  ArrowRight,
  UserRound,
} from "lucide-react";

import { Link } from "react-router-dom";

import {
  officeBearers,
} from "../../data/leadership";

import {
  Container,
  Section,
  SectionHeader,
} from "../ui";

import "./leadership.css";

export default function OfficeBearers() {
  return (
    <Section id="office-bearers">

      <Container>

        <SectionHeader
          eyebrow="Office Bearers"
          title="Organisational Directory"
          description="A searchable directory can later allow visitors to filter office holders by role, region or organisational level."
        />

        <div className="office-bearer-grid">

          {officeBearers.map((person) => (
            <Link
              key={person.id}
              to={`/leadership/${person.id}`}
              className="office-bearer-card"
            >

              <div className="office-bearer-card__image">

                {person.image ? (
                  <img
                    src={person.image}
                    alt={person.name}
                  />
                ) : (
                  <UserRound size={30} />
                )}

              </div>

              <div className="office-bearer-card__content">

                <span>
                  {person.region}
                </span>

                <h3>
                  {person.name}
                </h3>

                <p>
                  {person.role}
                </p>

              </div>

              <ArrowRight
                size={18}
                className="office-bearer-card__arrow"
              />

            </Link>
          ))}

        </div>

      </Container>
    </Section>
  );
}