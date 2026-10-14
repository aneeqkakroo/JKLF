import { ArrowRight, ChevronDown } from "lucide-react";

import WavingFlag from "./WavingFlag";

import SocialLinks from "../SocialLinks";

import { Button, Container } from "../ui";

import "./home.css";

const principles = [
  "Independence",
  "Religious Harmony",
  "Democracy",
  "Welfare",
];

export default function Hero() {
  return (
    <section className="home-hero">

      <div
        className="home-hero__glow"
        aria-hidden="true"
      >
        <span />
        <span />
        <span />
      </div>

      <WavingFlag className="home-hero__flag" />

      <Container className="home-hero__container">

        <div className="home-hero__content">

          <span className="home-hero__eyebrow">
            Our objective: national independence
          </span>

          <h1>
            Jammu Kashmir
            <span>Liberation Front</span>
          </h1>

          <p className="home-hero__lead">
            One nation, forcibly divided since 1947. We struggle to
            reunite the whole State of Jammu Kashmir as a free,
            sovereign and democratic country — home to people of
            every faith.
          </p>

          <div className="home-hero__actions">
            <Button
              to="/position"
              size="large"
              variant="white"
            >
              What we stand for
              <ArrowRight size={18} />
            </Button>

            <Button
              to="/about"
              size="large"
              variant="hero-outline"
            >
              About JKLF
            </Button>
          </div>

          <ul className="home-hero__principles">
            {principles.map((principle) => (
              <li key={principle}>
                {principle}
              </li>
            ))}
          </ul>

        </div>

        <div className="home-hero__follow">
          <span>
            Follow JKLF
          </span>

          <SocialLinks size={17} />
        </div>

      </Container>

      <a
        href="#mission"
        className="home-hero__scroll"
      >
        <span>Explore</span>
        <ChevronDown size={19} />
      </a>

    </section>
  );
}
