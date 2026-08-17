import {
  Scale,
  Library,
  PlaySquare,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

import {
  Container,
  Section,
  SectionHeader,
} from "../ui";

import "./home.css";

const resources = [
  {
    title: "Human Rights",
    label: "Documentation",
    description:
      "Reports, source material and documented information concerning human rights and civil liberties.",
    icon: Scale,
    path: "/human-rights",
  },
  {
    title: "Documents",
    label: "Digital Archive",
    description:
      "Political documents, historical records, statements, reports, correspondence and research material.",
    icon: Library,
    path: "/documents",
  },
  {
    title: "Media Centre",
    label: "Photos & Video",
    description:
      "Photographs, video, interviews, speeches, press material and other multimedia resources.",
    icon: PlaySquare,
    path: "/media",
  },
];

export default function ResourcePreview() {
  return (
    <Section>
      <Container>

        <SectionHeader
          eyebrow="Research & Resources"
          title="Documentation & Archive"
          description="Explore research material, historical documents, reports and multimedia resources."
          align="center"
        />

        <div className="resource-grid">

          {resources.map((resource) => {
            const Icon = resource.icon;

            return (
              <Link
                to={resource.path}
                className="resource-card"
                key={resource.title}
              >
                <div className="resource-card__icon">
                  <Icon size={28} />
                </div>

                <span>{resource.label}</span>

                <h3>{resource.title}</h3>

                <p>{resource.description}</p>

                <div className="resource-card__link">
                  Explore
                  <ArrowRight size={17} />
                </div>

              </Link>
            );
          })}

        </div>

      </Container>
    </Section>
  );
}