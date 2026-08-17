import {
  Mail,
  Clock3,
  ShieldCheck,
  FileText,
} from "lucide-react";

import {
  Container,
  Section,
  SectionHeader,
} from "../ui";

import "./contact.css";

const information = [
  {
    icon: Mail,
    title: "Email",
    value: "Add official email address",
    description:
      "Replace this placeholder with the appropriate organisational contact address.",
  },
  {
    icon: Clock3,
    title: "Response",
    value: "Response times vary",
    description:
      "Urgent or media enquiries can be directed to the appropriate contact address.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy",
    value: "Personal information",
    description:
      "Contact details should be processed according to the website privacy policy.",
  },
  {
    icon: FileText,
    title: "Research Material",
    value: "Archive enquiries",
    description:
      "Include enough detail to help identify the document, event or historical material required.",
  },
];

export default function ContactInformation() {
  return (
    <Section>

      <Container>

        <SectionHeader
          eyebrow="Contact Information"
          title="Before You Send an Enquiry"
          description="Useful information for directing enquiries efficiently."
        />

        <div className="contact-information-grid">

          {information.map((item) => {
            const Icon = item.icon;

            return (
              <article
                className="contact-information-card"
                key={item.title}
              >

                <div className="contact-information-card__icon">
                  <Icon size={23} />
                </div>

                <span>
                  {item.title}
                </span>

                <h3>
                  {item.value}
                </h3>

                <p>
                  {item.description}
                </p>

              </article>
            );
          })}

        </div>

      </Container>

    </Section>
  );
}
