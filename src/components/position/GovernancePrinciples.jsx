import {
  Scale,
  ShieldCheck,
  Users,
  HeartHandshake,
  TrendingUp,
  Landmark,
} from "lucide-react";

import {
  Container,
  Section,
  SectionHeader,
} from "../ui";

import "./position.css";

// Article 4(7), 4(10), 4(12) and 4(13) of the constitution.
const rights = [
  {
    icon: ShieldCheck,
    title: "Fundamental Rights",
    text:
      "Freedom of thought and expression, freedom to propagate one's views, and protection of life, property and honour.",
  },
  {
    icon: Scale,
    title: "Equality Before All",
    text:
      "No citizen will suffer injustice because of sex, place of residence, race, language or religion.",
  },
  {
    icon: Users,
    title: "No Group Above Another",
    text:
      "No region, or racial, linguistic or religious group, will hold undue superiority over another.",
  },
  {
    icon: HeartHandshake,
    title: "Minority Rights",
    text:
      "Safeguarding every minority is the centuries-old tradition and moral responsibility of all Kashmiris.",
  },
  {
    icon: TrendingUp,
    title: "Lifting Backward Areas",
    text:
      "Backward areas and communities will be given priority, to bring the whole state to the same educational and economic level.",
  },
  {
    icon: Landmark,
    title: "Free Movement & Opportunity",
    text:
      "Freedom of movement and equal opportunities for political, economic and social advancement for every citizen.",
  },
];

export default function GovernancePrinciples() {
  return (
    <Section>

      <Container>

        <SectionHeader
          eyebrow="Rights of Citizens"
          title="Every Citizen Equal"
          description="In a free Jammu Kashmir, these rights will belong to every citizen, whatever their faith, region or language."
          align="center"
        />

        <div className="governance-grid">

          {rights.map((item) => {
            const Icon = item.icon;

            return (
              <article
                className="governance-card"
                key={item.title}
              >

                <div className="governance-card__icon">
                  <Icon size={25} />
                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

              </article>
            );
          })}

        </div>

      </Container>

    </Section>
  );
}
