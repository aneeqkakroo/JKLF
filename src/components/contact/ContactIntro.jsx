import {
  Mail,
  Newspaper,
  Library,
  Globe2,
} from "lucide-react";

import {
  Container,
  Section,
  SectionHeader,
} from "../ui";

import "./contact.css";

const departments = [
  {
    icon: Mail,
    title: "General Enquiries",
    description:
      "General organisational, public information and website enquiries.",
  },
  {
    icon: Newspaper,
    title: "Media Enquiries",
    description:
      "Press, interview, journalist and publication enquiries.",
  },
  {
    icon: Library,
    title: "Research & Archive",
    description:
      "Questions relating to documents, historical material and archive records.",
  },
  {
    icon: Globe2,
    title: "International Relations",
    description:
      "International engagement, correspondence and organisational enquiries.",
  },
];

export default function ContactIntro() {
  return (
    <Section>

      <Container>

        <SectionHeader
          eyebrow="Contact JKLF"
          title="Choose the Right Contact"
          description="Direct your enquiry to the most appropriate organisational area."
        />

        <div className="contact-department-grid">

          {departments.map((department) => {
            const Icon = department.icon;

            return (
              <article
                className="contact-department-card"
                key={department.title}
              >

                <Icon size={25} />

                <h3>
                  {department.title}
                </h3>

                <p>
                  {department.description}
                </p>

              </article>
            );
          })}

        </div>

      </Container>

    </Section>
  );
}
