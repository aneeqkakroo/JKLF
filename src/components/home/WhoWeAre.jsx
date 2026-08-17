import { ArrowRight } from "lucide-react";

import {
  Button,
  Container,
  Section,
} from "../ui";

import "./home.css";

const points = [
  "Historical origins and development",
  "Political philosophy and programme",
  "Democratic political activity",
  "Organisation and international presence",
];

export default function WhoWeAre() {
  return (
    <Section variant="soft">

      <Container>
        <div className="who-we-are">

          <div className="who-we-are__image">
            <img
              src="/src/assets/images/about-kashmir.jpg"
              alt="Landscape of Jammu Kashmir"
            />

            <div className="who-we-are__image-label">
              <strong>Explore</strong>
              <span>JKLF history and archive</span>
            </div>
          </div>

          <div className="who-we-are__content">

            <span className="ui-eyebrow">
              Who We Are
            </span>

            <h2>
              A Political Movement with a Long History
            </h2>

            <p className="who-we-are__lead">
              This section introduces JKLF's history, political
              development, organisational structure and published
              political positions.
            </p>

            <p>
              The full About section will provide visitors with
              access to historical information, constitutional
              material, leadership information and primary-source
              documents.
            </p>

            <ul className="who-we-are__points">
              {points.map((point) => (
                <li key={point}>
                  <span />
                  {point}
                </li>
              ))}
            </ul>

            <Button to="/about" variant="outline">
              Read Our Story
              <ArrowRight size={17} />
            </Button>

          </div>

        </div>
      </Container>

    </Section>
  );
}