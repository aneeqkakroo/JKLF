import { Container } from "../ui";

import "./shared.css";

export default function PageHero({
  eyebrow,
  title,
  description,
  backgroundImage,
  children,
}) {
  return (
    <section className="page-hero">

      {backgroundImage && (
        <div
          className="page-hero__background"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        />
      )}

      <div className="page-hero__overlay" />

      <Container className="page-hero__container">

        <div className="page-hero__content">

          {eyebrow && (
            <span className="page-hero__eyebrow">
              {eyebrow}
            </span>
          )}

          <h1>{title}</h1>

          {description && (
            <p>{description}</p>
          )}

          {children && (
            <div className="page-hero__actions">
              {children}
            </div>
          )}

        </div>

      </Container>

    </section>
  );
}