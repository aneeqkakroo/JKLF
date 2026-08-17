import {
  BookOpen,
  Mail,
  ArrowRight,
} from "lucide-react";

import {
  Container,
  Section,
} from "../ui";

import { Link } from "react-router-dom";

import "./leadership.css";

export default function LeadershipCTA() {
  return (
    <Section
      variant="dark"
      className="leadership-cta"
    >

      <Container>

        <div className="leadership-cta__heading">

          <span className="ui-eyebrow">
            Continue Exploring
          </span>

          <h2>
            People, History & Organisation
          </h2>

        </div>

        <div className="leadership-cta__grid">

          <Link
            to="/history"
            className="leadership-cta-card"
          >

            <BookOpen size={28} />

            <div>
              <span>
                Historical Context
              </span>

              <h3>
                Explore JKLF History
              </h3>

              <p>
                Connect people with events, historical periods and
                archival documents.
              </p>
            </div>

            <ArrowRight size={22} />

          </Link>

          <Link
            to="/contact"
            className="leadership-cta-card"
          >

            <Mail size={28} />

            <div>
              <span>
                Contact
              </span>

              <h3>
                Organisational Enquiries
              </h3>

              <p>
                Contact the appropriate organisational or media
                office.
              </p>
            </div>

            <ArrowRight size={22} />

          </Link>

        </div>

      </Container>
    </Section>
  );
}