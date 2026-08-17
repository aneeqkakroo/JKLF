import {
  Landmark,
  Scale,
  FileText,
  Globe2,
  ArrowUpRight,
} from "lucide-react";

import {
  Container,
  Section,
  SectionHeader,
} from "../ui";

import "./home.css";

const priorities = [
  {
    title: "Political Advocacy",
    description:
      "Political positions, policy documents and information concerning the organisation's current political activities.",
    icon: Landmark,
    href: "/position",
  },
  {
    title: "Human Rights",
    description:
      "Reports, documentation and source material concerning human rights and civil liberties in Jammu Kashmir.",
    icon: Scale,
    href: "/human-rights",
  },
  {
    title: "Case Documentation",
    description:
      "Timelines, legal documents, public statements and other material concerning significant cases.",
    icon: FileText,
    href: "/documents",
  },
  {
    title: "International Engagement",
    description:
      "Information concerning conferences, meetings, representations and international political engagement.",
    icon: Globe2,
    href: "/news",
  },
];

export default function Priorities() {
  return (
    <Section
      id="priorities"
      className="priorities-section"
    >
      <Container>

        <SectionHeader
          eyebrow="Current Focus"
          title="Our Current Priorities"
          description="Explore key areas of current work, documentation and public information."
        />

        <div className="priority-grid">
          {priorities.map((priority) => {
            const Icon = priority.icon;

            return (
              <a
                href={priority.href}
                className="priority-card"
                key={priority.title}
              >
                <div className="priority-card__top">

                  <div className="priority-card__icon">
                    <Icon size={23} />
                  </div>

                  <ArrowUpRight
                    className="priority-card__arrow"
                    size={20}
                  />

                </div>

                <h3>{priority.title}</h3>

                <p>{priority.description}</p>
              </a>
            );
          })}
        </div>

      </Container>
    </Section>
  );
}