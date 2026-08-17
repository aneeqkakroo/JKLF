import {
  FileText,
  ArrowRight,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

import {
  Badge,
  Container,
  Section,
  SectionHeader,
} from "../ui";

import {
  documents,
} from "../../data/documents";

import "./documents.css";

export default function FeaturedDocuments() {
  const featured = documents.slice(0, 2);

  return (
    <Section variant="soft">

      <Container>

        <SectionHeader
          eyebrow="Primary Documents"
          title="Featured Documents"
          description="Direct access to the organisation's principal constitutional and political documents."
        />

        <div className="featured-documents-grid">

          {featured.map((document) => (
            <Link
              to={`/documents/${document.id}`}
              className="featured-document-card"
              key={document.id}
            >

              <div className="featured-document-card__icon">
                <FileText size={28} />
              </div>

              <Badge>
                {document.category}
              </Badge>

              <h3>
                {document.title}
              </h3>

              <p>
                {document.description}
              </p>

              <div className="featured-document-card__link">
                View document
                <ArrowRight size={17} />
              </div>

            </Link>
          ))}

        </div>

      </Container>
    </Section>
  );
}
