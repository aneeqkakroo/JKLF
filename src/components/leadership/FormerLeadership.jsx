import {
  ArrowRight,
  UserRound,
} from "lucide-react";

import { Link } from "react-router-dom";

import {
  formerLeadership,
} from "../../data/leadership";

import {
  Container,
  Section,
  SectionHeader,
} from "../ui";

import "./leadership.css";

export default function FormerLeadership() {
  return (
    <Section
      variant="soft"
      id="former-leadership"
    >

      <Container>

        <SectionHeader
          eyebrow="Leadership Archive"
          title="Former Office Holders"
          description="Former leaders and office holders remain accessible through the historical archive without being confused with current organisational positions."
        />

        <div className="former-leadership-list">

          {formerLeadership.map((person) => (
            <Link
              to={`/leadership/${person.id}`}
              className="former-leader-row"
              key={person.id}
            >

              <div className="former-leader-row__image">

                {person.image ? (
                  <img
                    src={person.image}
                    alt={person.name}
                  />
                ) : (
                  <UserRound size={25} />
                )}

              </div>

              <div className="former-leader-row__name">
                <span>
                  Former Office Holder
                </span>

                <strong>
                  {person.name}
                </strong>
              </div>

              <div className="former-leader-row__role">
                <span>
                  Position
                </span>

                <strong>
                  {person.role}
                </strong>
              </div>

              <div className="former-leader-row__period">
                <span>
                  Period
                </span>

                <strong>
                  {person.period}
                </strong>
              </div>

              <ArrowRight size={18} />

            </Link>
          ))}

        </div>

      </Container>
    </Section>
  );
}