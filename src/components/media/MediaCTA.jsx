import {
  Newspaper,
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

import "./media.css";

export default function MediaCTA() {
  return (
    <Section
      variant="soft"
      className="media-cta"
    >

      <Container>

        <div className="media-cta__grid">

          <Link
            to="/news"
            className="media-cta-card"
          >
            <Newspaper size={28} />

            <div>
              <span>
                Newsroom
              </span>

              <h3>
                News & Statements
              </h3>

              <p>
                View official statements, press releases, speeches and
                organisational publications.
              </p>
            </div>

            <ArrowRight size={22} />
          </Link>

          <Link
            to="/contact"
            className="media-cta-card"
          >
            <Mail size={28} />

            <div>
              <span>
                Press Contact
              </span>

              <h3>
                Media Enquiries
              </h3>

              <p>
                Contact information for journalists and media
                organisations.
              </p>
            </div>

            <ArrowRight size={22} />
          </Link>

        </div>

      </Container>
    </Section>
  );
}
