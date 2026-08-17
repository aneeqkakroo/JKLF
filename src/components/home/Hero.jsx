import { ArrowRight, ChevronDown } from "lucide-react";

import { Button, Container } from "../ui";

import "./home.css";

export default function Hero() {
  return (
    <section className="home-hero">
      <div className="home-hero__background" />

      <div className="home-hero__overlay" />

      <Container className="home-hero__container">
        <div className="home-hero__content">

          <span className="home-hero__eyebrow">
            Jammu Kashmir Liberation Front
          </span>

          <h1>
            Jammu Kashmir
            <span>Liberation Front</span>
          </h1>

          <p className="home-hero__lead">
            Official information, political positions, historical
            material, statements and documentation relating to JKLF
            and Jammu Kashmir.
          </p>

          <div className="home-hero__actions">
            <Button
              to="/position"
              size="large"
              variant="primary"
            >
              Our Political Position
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

          <div className="home-hero__principles">
            <span>Peace</span>
            <i />
            <span>Democracy</span>
            <i />
            <span>Secularism</span>
            <i />
            <span>Self-Determination</span>
          </div>

        </div>
      </Container>

      <a href="#priorities" className="home-hero__scroll">
        <span>Explore</span>
        <ChevronDown size={19} />
      </a>
    </section>
  );
}