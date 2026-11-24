import {
  Archive,
  Mail,
  ArrowRight,
} from "lucide-react";

import {
  Container,
  Section,
} from "../ui";

import { Link } from "react-router-dom";

import "./news.css";

export default function NewsArchiveCTA() {
  return (
    <Section
      variant="dark"
      className="news-cta"
    >
      <Container>

        <div className="news-cta__heading">
          <span className="ui-eyebrow">
            Learn More
          </span>

          <h2>
            Need More Information?
          </h2>
        </div>

        <div className="news-cta__grid">

          <Link
            to="/about"
            className="news-cta-card"
          >
            <Archive size={28} />

            <div>
              <span>
                Background
              </span>

              <h3>
                About JKLF
              </h3>

              <p>
                Who we are, our constitution
                and how the Front is
                organised.
              </p>
            </div>

            <ArrowRight size={22} />
          </Link>

          <Link
            to="/contact"
            className="news-cta-card"
          >
            <Mail size={28} />

            <div>
              <span>
                Press Enquiries
              </span>

              <h3>
                Contact the Media Office
              </h3>

              <p>
                Contact information for
                journalists and media
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
