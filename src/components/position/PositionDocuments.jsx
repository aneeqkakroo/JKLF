import {
  FileText,
  Flag,
  Library,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";

import { constitution } from "../../data/constitution";

import {
  Container,
  Section,
} from "../ui";

import "./position.css";

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
              Read It in Our Own Words
            </h2>

            <p>
              Everything on this page is drawn from the Fundamental
              Constitution of the Jammu Kashmir Liberation Front.
            </p>
          </div>

        </div>

        <div className="position-document-grid">

          <a
            className="position-document-card"
            href={constitution.url}
            target="_blank"
            rel="noreferrer"
          >

            <FileText size={27} />

            <span>
              PDF · {constitution.language}
            </span>

            <h3>
              {constitution.title}
            </h3>

            <p>
              Approved on {constitution.approved}. Our ideology,
              aims and objectives, membership, organisation and
              elections.
            </p>

            <div className="position-document-card__link">
              Open document
              <ArrowRight size={16} />
            </div>

          </a>

          <Link
            className="position-document-card"
            to="/about#flag"
          >

            <Flag size={27} />

            <span>
              Article 18
            </span>

            <h3>
              Our Flag
            </h3>

            <p>
              What the green, red and white of the JKLF flag
              represent.
            </p>

            <div className="position-document-card__link">
              Learn more
              <ArrowRight size={16} />
            </div>

          </Link>

          <Link
            className="position-document-card"
            to="/news"
          >

            <Library size={27} />

            <span>
              Statements
            </span>

            <h3>
              News & Statements
            </h3>

            <p>
              Official statements, press releases and notices
              from the Liberation Front.
            </p>

            <div className="position-document-card__link">
              Read the latest
              <ArrowRight size={16} />
            </div>

          </Link>

        </div>

      </Container>

    </Section>
  );
}
