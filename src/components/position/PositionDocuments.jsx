import {
  FileText,
  BookOpenText,
  Library,
  ArrowRight,
} from "lucide-react";

import {
  Button,
  Container,
  Section,
} from "../ui";

import "./position.css";

const documents = [
  {
    type: "Primary Document",
    title: "Political Programme",
    description:
      "The principal published document outlining the organisation's political objectives and proposed framework.",
    icon: BookOpenText,
  },
  {
    type: "Organisational Document",
    title: "JKLF Constitution",
    description:
      "The organisation's constitutional structure, internal governance provisions and formal framework.",
    icon: FileText,
  },
  {
    type: "Archive",
    title: "Political Resolutions",
    description:
      "A searchable archive of formal resolutions, statements and other political documents.",
    icon: Library,
  },
];

export default function PositionDocuments() {
  return (
    <Section
      variant="dark"
      className="position-documents"
    >

      <Container>

        <div className="position-documents__heading">

          <div>
            <span className="ui-eyebrow">
              Primary Sources
            </span>

            <h2>
              Read the Documents
            </h2>

            <p>
              Detailed political pages should link directly to
              primary organisational documents whenever possible.
            </p>
          </div>

          <Button
            to="/documents"
            variant="hero-outline"
          >
            Document Archive
            <ArrowRight size={17} />
          </Button>

        </div>

        <div className="position-document-grid">

          {documents.map((document) => {
            const Icon = document.icon;

            return (
              <article
                className="position-document-card"
                key={document.title}
              >

                <Icon size={27} />

                <span>
                  {document.type}
                </span>

                <h3>
                  {document.title}
                </h3>

                <p>
                  {document.description}
                </p>

                <div className="position-document-card__link">
                  View document
                  <ArrowRight size={16} />
                </div>

              </article>
            );
          })}

        </div>

      </Container>

    </Section>
  );
}