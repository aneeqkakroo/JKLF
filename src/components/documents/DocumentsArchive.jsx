import {
  useMemo,
  useState,
} from "react";

import {
  Search,
  FileText,
  Download,
  CalendarDays,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

import {
  documents,
  documentCategories,
} from "../../data/documents";

import {
  Badge,
  Container,
  Section,
  SectionHeader,
} from "../ui";

import "./documents.css";

export default function DocumentsArchive() {
  const [query, setQuery] =
    useState("");

  const [category, setCategory] =
    useState("All");

  const filteredDocuments =
    useMemo(() => {
      const search =
        query.trim().toLowerCase();

      return documents.filter(
        (document) => {
          const matchesCategory =
            category === "All" ||
            document.category === category;

          const matchesSearch =
            !search ||
            document.title
              .toLowerCase()
              .includes(search) ||
            document.description
              .toLowerCase()
              .includes(search) ||
            document.category
              .toLowerCase()
              .includes(search);

          return (
            matchesCategory &&
            matchesSearch
          );
        }
      );
    }, [query, category]);

  return (
    <Section>

      <Container>

        <SectionHeader
          eyebrow="Archive"
          title="Search Documents"
          description="Browse political, constitutional, legal and historical documents by category or keyword."
        />

        <div className="documents-tools">

          <div className="documents-search-box">

            <Search size={19} />

            <input
              type="search"
              value={query}
              onChange={(event) =>
                setQuery(event.target.value)
              }
              placeholder="Search documents..."
              aria-label="Search documents"
            />

          </div>

        </div>

        <div className="documents-category-tabs">

          {documentCategories.map(
            (item) => (
              <button
                type="button"
                key={item}
                className={
                  item === category
                    ? "documents-category-tab documents-category-tab--active"
                    : "documents-category-tab"
                }
                onClick={() =>
                  setCategory(item)
                }
              >
                {item}
              </button>
            )
          )}

        </div>

        {filteredDocuments.length > 0 ? (

          <div className="documents-grid">

            {filteredDocuments.map(
              (document) => (
                <Link
                  to={`/documents/${document.id}`}
                  className="document-card"
                  key={document.id}
                >

                  <div className="document-card__top">

                    <div className="document-card__icon">
                      <FileText size={24} />
                    </div>

                    <Download size={18} />

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

                  <div className="document-card__footer">

                    <span>
                      <CalendarDays size={14} />
                      {document.date}
                    </span>

                    <strong>
                      View record
                    </strong>

                  </div>

                </Link>
              )
            )}

          </div>

        ) : (

          <div className="documents-empty">

            <strong>
              No documents found
            </strong>

            <p>
              Try another keyword or category.
            </p>

          </div>

        )}

      </Container>
    </Section>
  );
}
