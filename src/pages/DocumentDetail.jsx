import {
  Navigate,
  Link,
  useParams,
} from "react-router-dom";

import {
  ArrowLeft,
  FileText,
} from "lucide-react";

import {
  documents,
} from "../data/documents";

import {
  Badge,
  Button,
  Container,
  Section,
} from "../components/ui";

import "../components/documents/documents.css";

export default function DocumentDetail() {
  const { slug } = useParams();

  const document = documents.find(
    (item) => item.id === slug
  );

  if (!document) {
    return (
      <Navigate
        to="/documents"
        replace
      />
    );
  }

  return (
    <>
      <section className="document-detail-hero">

        <Container>

          <Link
            to="/documents"
            className="document-detail-back"
          >
            <ArrowLeft size={16} />
            Document Archive
          </Link>

          <Badge>
            {document.category}
          </Badge>

          <h1>
            {document.title}
          </h1>

          <p>
            {document.description}
          </p>

        </Container>

      </section>

      <Section>

        <Container>

          <div className="document-detail-layout">

            <div className="document-viewer">

              <FileText size={42} />

              <h2>
                Document Viewer
              </h2>

              <p>
                Connect the final PDF or document file through the
                document's file field in
                <code> src/data/documents.js</code>.
              </p>

              {document.file ? (
                <Button
                  href={document.file}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Document
                </Button>
              ) : (
                <p>
                  No file has been connected to this placeholder record yet.
                </p>
              )}

            </div>

            <aside className="document-detail-sidebar">

              <div className="document-detail-sidebar__item">
                <span>
                  Category
                </span>

                <strong>
                  {document.category}
                </strong>
              </div>

              <div className="document-detail-sidebar__item">
                <span>
                  Date / Period
                </span>

                <strong>
                  {document.date}
                </strong>
              </div>

              <div className="document-detail-sidebar__item">
                <span>
                  Archive
                </span>

                <strong>
                  JKLF Document Library
                </strong>
              </div>

            </aside>

          </div>

        </Container>

      </Section>
    </>
  );
}
