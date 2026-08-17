import {
  Landmark,
  Vote,
  Users,
  Map,
  ArrowRight,
} from "lucide-react";

import {
  Button,
  Container,
  Section,
  SectionHeader,
} from "../ui";

import "./home.css";

const pillars = [
  {
    number: "01",
    title: "Independent",
    description:
      "Information concerning JKLF's position on political self-government and the future status of Jammu Kashmir.",
    icon: Landmark,
  },
  {
    number: "02",
    title: "Democratic",
    description:
      "A political system based upon representative government, elections and popular consent.",
    icon: Vote,
  },
  {
    number: "03",
    title: "Secular",
    description:
      "Equal citizenship irrespective of religion, ethnicity, language, region or community.",
    icon: Users,
  },
  {
    number: "04",
    title: "United",
    description:
      "Recognition of the different historical regions and peoples that make up Jammu Kashmir.",
    icon: Map,
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
            eyebrow="Political Principles"
            title="Our Vision for Jammu Kashmir"
            description="Explore the principles and political ideas set out in JKLF's published programme and policy documents."
          />

          <Button
            to="/position"
            variant="hero-outline"
          >
            Political Programme
            <ArrowRight size={17} />
          </Button>
        </div>

        <div className="vision-grid">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <div
                className="vision-card"
                key={pillar.title}
              >
                <div className="vision-card__number">
                  {pillar.number}
                </div>

                <Icon
                  className="vision-card__icon"
                  size={28}
                />

                <h3>{pillar.title}</h3>

                <p>{pillar.description}</p>
              </div>
            );
          })}
        </div>

      </Container>
    </Section>
  );
}