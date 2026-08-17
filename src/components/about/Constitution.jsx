import {
  FileText,
  BookOpenText,
  Download,
  ArrowRight,
} from "lucide-react";

import {
  Button,
  Container,
  Section,
} from "../ui";

import "./about.css";

const documents = [
  {
    title: "JKLF Constitution",
    category: "Constitutional Document",
    description:
      "The organisation's constitution, governance provisions and formal organisational framework.",
    icon: FileText,
  },
  {
    title: "Political Programme",
    category: "Political Document",
    description:
      "The principal document setting out the organisation's political objectives and proposed political framework.",
    icon: BookOpenText,
  },
];

export default function Constitution() {
  return (
    <Section
      id="constitution"
      variant="soft"
    >
      <Container>

        <div className="constitution-layout">

          <div className="constitution-intro">

            <span className="ui-eyebrow">
              Constitution & Programme
            </span>

            <h2>
              Read the Primary Documents
            </h2>

            <p>
              Rather than relying only on summaries, visitors should
              be able to read the organisation's principal documents
              directly.
            </p>

            <Button
              to="/documents"
              variant="outline"
            >
              Browse Document Archive
              <ArrowRight size={17} />
            </Button>

          </div>

          <div className="constitution-documents">

            {documents.map((document) => {
              const Icon = document.icon;

              return (
                <article
                  className="constitution-document"
                  key={document.title}
                >

                  <div className="constitution-document__top">

                    <div className="constitution-document__icon">
                      <Icon size={24} />
                    </div>

                    <Download size={18} />

                  </div>

                  <span>
                    {document.category}
                  </span>

                  <h3>
                    {document.title}
                  </h3>

                  <p>
                    {document.description}
                  </p>

                  <button type="button">
                    View document
                    <ArrowRight size={16} />
                  </button>

                </article>
              );
            })}

          </div>

        </div>

      </Container>
    </Section>
  );
}