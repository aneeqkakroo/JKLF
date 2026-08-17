import {
  Newspaper,
  Library,
  ArrowRight,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

import {
  Container,
  Section,
} from "../ui";

import "./contact.css";

export default function ContactCTA() {
  return (
    <Section
      variant="dark"
      className="contact-cta"
    >

      <Container>

        <div className="contact-cta__grid">

          <Link
            to="/news"
            className="contact-cta-card"
          >
            <Newspaper size={28} />

            <div>
              <span>
                Media
              </span>

              <h3>
                News & Statements
              </h3>

              <p>
                Read official statements and public information before
                making a media enquiry.
              </p>
            </div>

            <ArrowRight size={22} />
          </Link>

          <Link
            to="/documents"
            className="contact-cta-card"
          >
            <Library size={28} />

            <div>
              <span>
                Research
              </span>

              <h3>
                Search the Archive
              </h3>

              <p>
                Many historical and research enquiries may already be
                answered in the document archive.
              </p>
            </div>

            <ArrowRight size={22} />
          </Link>

        </div>

      </Container>

    </Section>
  );
}
