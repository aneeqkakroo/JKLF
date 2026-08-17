import {
  Download,
  FileText,
  Image,
  Users,
  ArrowRight,
} from "lucide-react";

import {
  Button,
  Container,
  Section,
  SectionHeader,
} from "../ui";

import "./media.css";

const resources = [
  {
    icon: Image,
    title: "Approved Logo",
    text:
      "Provide approved logo files and basic brand guidance for media use.",
  },
  {
    icon: FileText,
    title: "Organisation Biography",
    text:
      "A concise approved organisational biography for journalists and publications.",
  },
  {
    icon: Users,
    title: "Leadership Photos",
    text:
      "Approved photographs of current leadership where available.",
  },
  {
    icon: Download,
    title: "Media Downloads",
    text:
      "A single place for approved downloadable press and media assets.",
  },
];

export default function PressResources() {
  return (
    <Section
      variant="dark"
      className="press-resources"
    >

      <Container>

        <div className="press-resources__heading">

          <SectionHeader
            eyebrow="For Journalists"
            title="Press & Media Resources"
            description="Approved material for journalists, researchers and media organisations."
          />

          <Button
            to="/contact"
            variant="hero-outline"
          >
            Media Enquiries
            <ArrowRight size={17} />
          </Button>

        </div>

        <div className="press-resource-grid">

          {resources.map((resource) => {
            const Icon = resource.icon;

            return (
              <article
                className="press-resource-card"
                key={resource.title}
              >

                <Icon size={27} />

                <h3>
                  {resource.title}
                </h3>

                <p>
                  {resource.text}
                </p>

              </article>
            );
          })}

        </div>

      </Container>
    </Section>
  );
}
