import {
  FileText,
  BookOpenText,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

import { Link } from "react-router-dom";

import { constitution } from "../../data/constitution";

import {
  Button,
  Container,
  Section,
} from "../ui";

import "./about.css";

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
              Our Constitution
            </h2>

            <p>
              The Fundamental Constitution of the Jammu Kashmir
              Liberation Front was approved on {constitution.approved},
              after the reunification of the Front. It sets out our
              ideology and aims, who may join, how we are organised
              and how our leaders are elected.
            </p>

            <Button
              href={constitution.url}
              target="_blank"
              rel="noreferrer"
              variant="outline"
            >
              Read the Constitution
              <ExternalLink size={16} />
            </Button>

          </div>

          <div className="constitution-documents">

            <a
              className="constitution-document"
              href={constitution.url}
              target="_blank"
              rel="noreferrer"
            >

              <div className="constitution-document__top">

                <div className="constitution-document__icon">
                  <FileText size={24} />
                </div>

                <ExternalLink size={18} />

              </div>

              <span>
                PDF · {constitution.language}
              </span>

              <h3>
                {constitution.title}
              </h3>

              <p>
                All {constitution.articles} articles: ideology,
                aims, membership, organisation, elections, the flag
                and subsidiary organisations.
              </p>

              <div className="constitution-document__link">
                Open document
                <ArrowRight size={16} />
              </div>

            </a>

            <Link
              className="constitution-document"
              to="/position"
            >

              <div className="constitution-document__top">

                <div className="constitution-document__icon">
                  <BookOpenText size={24} />
                </div>

                <ArrowRight size={18} />

              </div>

              <span>
                Articles 4 & 5
              </span>

              <h3>
                Ideology & Aims
              </h3>

              <p>
                Our position on the Kashmir issue, the freedom we
                seek, and the objectives of our struggle, explained.
              </p>

              <div className="constitution-document__link">
                Read our position
                <ArrowRight size={16} />
              </div>

            </Link>

          </div>

        </div>

      </Container>
    </Section>
  );
}
