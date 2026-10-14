import {
  ArrowRight,
  UserRound,
} from "lucide-react";

import { Link } from "react-router-dom";

import { currentLeadership } from "../../data/leadership";

import {
  Button,
  Container,
  Section,
  SectionHeader,
} from "../ui";

import "./home.css";

export default function LeadershipPreview() {
  return (
    <Section>
      <Container>

        <div className="latest-heading">

          <SectionHeader
            eyebrow="Leadership"
            title="Our Leadership"
            description="The central leadership guiding the Liberation Front today."
          />

          <Button
            to="/leadership"
            variant="outline"
          >
            All leadership
            <ArrowRight size={17} />
          </Button>

        </div>

        <div className="leader-grid">

          {currentLeadership.map((person) => (
            <Link
              to={`/leadership/${person.id}`}
              className="leader-card"
              key={person.id}
            >

              <div className="leader-card__image">
                {person.image ? (
                  <img
                    src={person.image}
                    alt={person.name}
                  />
                ) : (
                  <UserRound size={44} />
                )}
              </div>

              <div className="leader-card__content">
                <span>
                  {person.role}
                </span>

                <h3>
                  {person.name}
                </h3>

                {person.location && (
                  <p>
                    {person.location}
                  </p>
                )}
              </div>

            </Link>
          ))}

        </div>

      </Container>
    </Section>
  );
}
