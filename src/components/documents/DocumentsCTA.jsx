import {
  BookOpen,
  Mail,
  ArrowRight,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

import {
  Container,
  Section,
} from "../ui";

import "./documents.css";

export default function DocumentsCTA() {
  return (
    <Section
      variant="soft"
      className="documents-cta"
    >

      <Container>

        <div className="documents-cta__heading">

          <span className="ui-eyebrow">
            Continue Exploring
          </span>

          <h2>
            Documents in Context
          </h2>

        </div>

        <div className="documents-cta__grid">

          <Link
            to="/history"
            className="documents-cta-card"
          >
            <BookOpen size={28} />

            <div>
              <span>
                Historical Context
              </span>

              <h3>
                Explore the History
              </h3>

              <p>
                Connect archival material with historical periods,
                people and events.
              </p>
            </div>

            <ArrowRight size={22} />
          </Link>

          <Link
            to="/contact"
            className="documents-cta-card"
          >
            <Mail size={28} />

            <div>
              <span>
                Archive Enquiries
              </span>

              <h3>
                Contact the Archive
              </h3>

              <p>
                Enquiries relating to documents, research material
                and archival records.
              </p>
            </div>

            <ArrowRight size={22} />
          </Link>

        </div>

      </Container>
    </Section>
  );
}
