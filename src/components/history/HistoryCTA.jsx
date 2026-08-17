import {
  Library,
  UsersRound,
  ArrowRight,
} from "lucide-react";

import {
  Container,
  Section,
} from "../ui";

import { Link } from "react-router-dom";

import "./history.css";

export default function HistoryCTA() {
  return (
    <Section
      variant="dark"
      className="history-cta"
    >

      <Container>

        <div className="history-cta__header">

          <span className="ui-eyebrow">
            Continue Exploring
          </span>

          <h2>
            Go Deeper Into the Archive
          </h2>

        </div>

        <div className="history-cta__grid">

          <Link
            to="/documents"
            className="history-cta-card"
          >
            <Library size={28} />

            <div>
              <span>
                Primary Material
              </span>

              <h3>
                Search Documents
              </h3>

              <p>
                Explore political documents, reports,
                correspondence and historical records.
              </p>
            </div>

            <ArrowRight size={22} />
          </Link>

          <Link
            to="/leadership"
            className="history-cta-card"
          >
            <UsersRound size={28} />

            <div>
              <span>
                People & Biography
              </span>

              <h3>
                Explore Historical Figures
              </h3>

              <p>
                Discover biographies and connect people with
                events, documents and historical periods.
              </p>
            </div>

            <ArrowRight size={22} />
          </Link>

        </div>

      </Container>

    </Section>
  );
}