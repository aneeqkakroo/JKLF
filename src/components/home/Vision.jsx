import {
  Flag,
  HeartHandshake,
  Vote,
  HandHeart,
  ArrowRight,
} from "lucide-react";

import {
  Button,
  Container,
  Section,
  SectionHeader,
} from "../ui";

import "./home.css";

// The four principles of Article 4 of the constitution.
const pillars = [
  {
    title: "Independence",
    description:
      "The whole State of Jammu Kashmir, as it stood on 14 August 1947, reunited as a sovereign country. Its future belongs to its people alone.",
    icon: Flag,
  },
  {
    title: "Religious Harmony",
    description:
      "Every citizen free to practise their faith. Sectarian and regional division is poison to the national cause.",
    icon: HeartHandshake,
  },
  {
    title: "Democracy",
    description:
      "Government built on democracy, equality, social justice and human brotherhood, with fundamental rights for all.",
    icon: Vote,
  },
  {
    title: "Welfare System",
    description:
      "Food, healthcare, education and work as duties of the state, with priority for backward areas and communities.",
    icon: HandHeart,
  },
];

export default function Vision() {
  return (
    <Section
      variant="dark"
      className="vision-section"
    >
      <Container>

        <div className="vision-heading">
          <SectionHeader
            eyebrow="What We Stand For"
            title="The Free Jammu Kashmir We Seek"
            description="Four principles from our constitution guide our struggle and the country we are working to build."
          />

          <Button
            to="/position"
            variant="hero-outline"
          >
            Our full position
            <ArrowRight size={17} />
          </Button>
        </div>

        <div className="vision-grid">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <article
                className="vision-card"
                key={pillar.title}
              >
                <div className="vision-card__top">
                  <span className="vision-card__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <Icon
                    className="vision-card__icon"
                    size={26}
                  />
                </div>

                <h3>
                  {pillar.title}
                </h3>

                <p>
                  {pillar.description}
                </p>
              </article>
            );
          })}
        </div>

      </Container>
    </Section>
  );
}
