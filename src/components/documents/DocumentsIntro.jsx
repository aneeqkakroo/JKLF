import {
  Library,
  Search,
  FileText,
  History,
} from "lucide-react";

import {
  Container,
  Section,
} from "../ui";

import "./documents.css";

const features = [
  {
    icon: Library,
    title: "Primary Documents",
    text:
      "Constitutions, political programmes, resolutions, memoranda and other formal records.",
  },
  {
    icon: Search,
    title: "Searchable Archive",
    text:
      "Search documents by title, category, date or keyword.",
  },
  {
    icon: FileText,
    title: "Permanent Records",
    text:
      "Every document can have a permanent page with metadata, description and source information.",
  },
  {
    icon: History,
    title: "Historical Material",
    text:
      "Historical documents can be linked directly with people, events and periods elsewhere on the website.",
  },
];

export default function DocumentsIntro() {
  return (
    <Section>
      <Container>

        <div className="documents-intro">

          <div className="documents-intro__heading">
            <span className="ui-eyebrow">
              Digital Archive
            </span>

            <h2>
              A Structured Document Library
            </h2>
          </div>

          <div className="documents-intro__content">

            <p className="documents-large-copy">
              The document archive should serve as the primary source
              library for the wider website.
            </p>

            <p>
              Political, historical and legal pages can link directly
              to individual records rather than duplicating documents
              across different sections.
            </p>

          </div>

        </div>

        <div className="documents-feature-grid">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                className="documents-feature"
                key={feature.title}
              >
                <Icon size={24} />

                <h3>
                  {feature.title}
                </h3>

                <p>
                  {feature.text}
                </p>
              </article>
            );
          })}

        </div>

      </Container>
    </Section>
  );
}
