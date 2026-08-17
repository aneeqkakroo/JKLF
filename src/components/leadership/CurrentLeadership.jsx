import {
  ArrowRight,
  MapPin,
  UserRound,
} from "lucide-react";

import { Link } from "react-router-dom";

import {
  currentLeadership,
} from "../../data/leadership";

import {
  Container,
  Section,
  SectionHeader,
} from "../ui";

import "./leadership.css";

export default function CurrentLeadership() {
  return (
    <Section
      variant="soft"
      id="current-leadership"
    >

      <Container>

        <SectionHeader
          eyebrow="Current Leadership"
          title="Current Organisational Leadership"
          description="Current office holders should be maintained from a single verified dataset so changes can be reflected throughout the website."
        />

        <div className="current-leadership-grid">

          {currentLeadership.map((person) => (
            <Link
              key={person.id}
              to={`/leadership/${person.id}`}
              className="current-leader-card"
            >

              <div className="current-leader-card__image">

                {person.image ? (
                  <img
                    src={person.image}
                    alt={person.name}
                  />
                ) : (
                  <div className="current-leader-card__placeholder">
                    <UserRound size={60} />
                  </div>
                )}

              </div>

              <div className="current-leader-card__content">

                <span className="current-leader-card__category">
                  {person.category}
                </span>

                <h3>
                  {person.name}
                </h3>

                <strong>
                  {person.role}
                </strong>

                <div className="current-leader-card__location">
                  <MapPin size={15} />
                  {person.location}
                </div>

                <p>
                  {person.description}
                </p>

                <div className="current-leader-card__link">
                  View profile
                  <ArrowRight size={17} />
                </div>

              </div>

            </Link>
          ))}

        </div>

      </Container>
    </Section>
  );
}