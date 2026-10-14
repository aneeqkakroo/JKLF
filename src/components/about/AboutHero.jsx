import { ArrowRight } from "lucide-react";

import { organisationalZones } from "../../data/leadership";

import {
  Button,
  Container,
} from "../ui";

import "./about.css";

const facts = [
  {
    label: "Founded",
    value: "1977",
  },
  {
    label: "Zones worldwide",
    value: String(organisationalZones.length),
  },
  {
    label: "Our aim",
    value: "A free, united Jammu Kashmir",
  },
];

export default function AboutHero() {
  return (
    <section className="about-hero">

      <img
        className="about-hero__image"
        src="/heros/abouthero.jpg"
        alt="JKLF supporters gathered at a rally, carrying the party flag"
      />

      <div className="about-hero__overlay" />

      <Container className="about-hero__container">

        <div className="about-hero__content">

          <span className="about-hero__eyebrow">
            Our objective: national independence
          </span>

          <h1>
            Jammu Kashmir Liberation Front
          </h1>

          <p>
            We are a political movement working for the
            independence and reunification of Jammu Kashmir —
            one nation, free, democratic and home to people of
            every faith.
          </p>

          <div className="about-hero__actions">

            <Button
              href="#philosophy"
              variant="white"
            >
              What we stand for
              <ArrowRight size={17} />
            </Button>

            <Button
              to="/leadership"
              variant="hero-outline"
            >
              Our leadership
            </Button>

          </div>

        </div>

        <dl className="about-hero__facts">

          {facts.map((fact) => (
            <div key={fact.label}>
              <dt>
                {fact.label}
              </dt>

              <dd>
                {fact.value}
              </dd>
            </div>
          ))}

        </dl>

      </Container>

    </section>
  );
}
