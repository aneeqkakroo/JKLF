import {
  Container,
  Section,
} from "../ui";

import "./about.css";

export default function WhoWeAre() {
  return (
    <Section id="who-we-are">

      <Container>

        <div className="about-intro">

          <div className="about-intro__heading">

            <span className="ui-eyebrow">
              Who We Are
            </span>

            <h2>
              A Movement for a Free and United Kashmir
            </h2>

          </div>

          <div className="about-intro__text">

            <p className="about-large-copy">
              The Kashmir issue is not a territorial dispute between
              India and Pakistan. It is the question of the national
              freedom and reunification of a forcibly divided nation.
            </p>

            <p>
              The Jammu Kashmir Liberation Front struggles to free
              the whole State of Jammu Kashmir — every territory
              that formed part of it on 14 August 1947 — from
              external domination, and to make it an independent,
              sovereign country with a dignified place among the
              nations of the world.
            </p>

            <p>
              We are the only Kashmiri organisation working under
              one constitution and one leadership in all three parts
              of the state and across the diaspora, bringing together
              people of every region, faith and language in a single
              national struggle.
            </p>

          </div>

        </div>

        <blockquote className="about-statement">
          <p>
            Our objective: national independence.
            <br />
            Struggle until victory.
          </p>
        </blockquote>

      </Container>

    </Section>
  );
}
