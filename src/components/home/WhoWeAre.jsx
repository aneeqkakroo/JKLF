import { ArrowRight } from "lucide-react";

import {
  Button,
  Container,
  Section,
} from "../ui";

import "./home.css";

const points = [
  "One constitution and one leadership in every part of the state",
  "A Supreme Council elected from every zone",
  "A Diplomatic Bureau representing Kashmir to the world",
  "Branches across Kashmir, the UK, Europe, North America and the Gulf",
];

export default function WhoWeAre() {
  return (
    <Section
      id="mission"
      variant="soft"
    >

      <Container>
        <div className="who-we-are">

          <figure className="who-we-are__quote">

            <img
              src="/images/maqboolbhat.jpg"
              alt="Shaheed Maqbool Bhat"
            />

            <blockquote>
              <p>
                “Passion for the beloved freedom is as essential as
                breath is for preserving life.”
              </p>

              <figcaption>
                Shaheed Muhammad Maqbool Bhat
                <span>Father of the Nation</span>
              </figcaption>
            </blockquote>

          </figure>

          <div className="who-we-are__content">

            <span className="ui-eyebrow">
              Who We Are
            </span>

            <h2>
              A National Liberation Movement
            </h2>

            <p className="who-we-are__lead">
              The Kashmir issue is not a territorial dispute between
              India and Pakistan. It is the question of the national
              freedom and reunification of a forcibly divided
              nation.
            </p>

            <p>
              Since 1977 the Jammu Kashmir Liberation Front has
              struggled to end that division. Reunited in 2011, we
              are today the only Kashmiri organisation working under
              one constitution in all three parts of the state and
              across the diaspora.
            </p>

            <ul className="who-we-are__points">
              {points.map((point) => (
                <li key={point}>
                  <span />
                  {point}
                </li>
              ))}
            </ul>

            <Button
              to="/about"
              variant="outline"
            >
              Read our story
              <ArrowRight size={17} />
            </Button>

          </div>

        </div>
      </Container>

    </Section>
  );
}
