import {
  Scale,
  Vote,
  ShieldCheck,
  Landmark,
  Users,
  MapPinned,
} from "lucide-react";

import {
  Container,
  Section,
  SectionHeader,
} from "../ui";

import "./position.css";

const governance = [
  {
    icon: Vote,
    title: "Representative Government",
    text:
      "Institutions based on public participation and representative political structures.",
  },
  {
    icon: Scale,
    title: "Rule of Law",
    text:
      "Government institutions operating within a clear constitutional and legal framework.",
  },
  {
    icon: ShieldCheck,
    title: "Fundamental Rights",
    text:
      "Constitutional protection of civil, political and individual rights.",
  },
  {
    icon: Landmark,
    title: "Institutional Accountability",
    text:
      "Political institutions subject to democratic oversight and constitutional limits.",
  },
  {
    icon: Users,
    title: "Equal Citizenship",
    text:
      "Equal political rights regardless of religion, ethnicity, language or region.",
  },
  {
    icon: MapPinned,
    title: "Regional Representation",
    text:
      "Structures designed to recognise Jammu Kashmir's geographical and cultural diversity.",
  },
];

export default function GovernancePrinciples() {
  return (
    <Section>

      <Container>

        <SectionHeader
          eyebrow="Governance"
          title="Principles for Democratic Government"
          description="Themes that can be developed further within the dedicated governance and constitutional sections."
          align="center"
        />

        <div className="governance-grid">

          {governance.map((item) => {
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