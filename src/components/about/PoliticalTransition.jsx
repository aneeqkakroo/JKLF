import {
  ArrowRight,
  FileText,
} from "lucide-react";

import {
  Button,
  Container,
  Section,
} from "../ui";

import "./about.css";

export default function PoliticalTransition() {
  return (
    <Section id="political-transition">

      <Container>

        <div className="political-transition">

          <div className="political-transition__number">
            <span>Political</span>
            <strong>Transition</strong>
          </div>

          <div className="political-transition__content">

            <span className="ui-eyebrow">
              A Major Organisational Development
            </span>

            <h2>
              From One Political Phase to Another
            </h2>

            <p className="about-large-copy">
              JKLF's history includes significant changes in
              political strategy, organisation and methods of
              political activity.
            </p>

            <p>
              This section will provide a concise account of that
              transition and direct readers toward primary
              statements, historical documents and independent
              sources that explain the circumstances surrounding it.
            </p>

            <div className="transition-note">

              <FileText size={21} />

              <div>
                <strong>
                  Source-led historical record
                </strong>

                <span>
                  Major historical claims will link directly to
                  documents, contemporary reporting or archival
                  sources.
                </span>
              </div>

            </div>

            <Button
              to="/history"
              variant="outline"
            >
              View Historical Record
              <ArrowRight size={17} />
            </Button>

          </div>

        </div>

      </Container>

    </Section>
  );
}