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
    title: "How to Reach Us",
    value: "Use the contact form",
    description:
      "Messages from the form go straight to the organisation. Choose the enquiry type that fits best so it reaches the right people.",
  },
  {
    icon: Clock3,
    title: "Response",
    value: "We reply by email",
    description:
      "Replies usually take a few days. Media enquiries with a deadline should say so in the first line of the message.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy",
    value: "Your details stay private",
    description:
      "We use your name and email only to answer your message, and delete messages after two years.",
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
