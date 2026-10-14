import {
  Container,
  Section,
} from "../ui";

import "./about.css";

// Meanings from Article 18(a) of the constitution.
const colours = [
  {
    name: "Green",
    swatch: "#0b6b3a",
    text:
      "The greenery of our land, and the identity of the majority of its people.",
  },
  {
    name: "Red",
    swatch: "#b52025",
    text:
      "Struggle and sacrifice: the revolutionary programme of the Front, and the price of freedom.",
  },
  {
    name: "White",
    swatch: "#ffffff",
    text:
      "Peace, our peaceful struggle, and the identity of the state's religious minorities.",
  },
];

// Proportions follow Article 18(a): 5 × 3, two equal stripes and a hoist triangle a quarter of the length.
function JklfFlag() {
  return (
    <svg
      className="about-flag__image"
      viewBox="0 0 500 300"
      role="img"
      aria-label="The JKLF flag: green over red, with a white triangle at the hoist"
    >
      <rect width="500" height="150" fill="#0b6b3a" />
      <rect y="150" width="500" height="150" fill="#b52025" />
      <path d="M0 0 L125 150 L0 300 Z" fill="#ffffff" />
    </svg>
  );
}

export default function OurFlag() {
  return (
    <Section
      id="flag"
      variant="soft"
    >
      <Container>

        <div className="about-flag">

          <div className="about-flag__visual">
            <JklfFlag />
          </div>

          <div className="about-flag__content">

            <span className="ui-eyebrow">
              Our Flag
            </span>

            <h2>
              Green, Red and White
            </h2>

            <p>
              The three colours of our flag, and the triangle that
              joins them, express the ideology and philosophy of the
              Liberation Front.
            </p>

            <ul className="about-flag__colours">
              {colours.map((colour) => (
                <li key={colour.name}>

                  <span
                    className="about-flag__swatch"
                    style={{ background: colour.swatch }}
                  />

                  <div>
                    <strong>
                      {colour.name}
                    </strong>

                    <p>
                      {colour.text}
                    </p>
                  </div>

                </li>
              ))}
            </ul>

          </div>

        </div>

      </Container>
    </Section>
  );
}
