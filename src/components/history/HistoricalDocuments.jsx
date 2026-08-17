import {
  FileText,
  Newspaper,
  ScrollText,
  Mail,
  ArrowRight,
} from "lucide-react";

import {
  Button,
  Container,
  Section,
} from "../ui";

import "./history.css";

const documentTypes = [
  {
    icon: ScrollText,
    title: "Political Documents",
    description:
      "Political programmes, resolutions and formal organisational documents.",
  },
  {
    icon: Mail,
    title: "Letters & Correspondence",
    description:
      "Historical correspondence and publicly available political communications.",
  },
  {
    icon: Newspaper,
    title: "Contemporary Reporting",
    description:
      "Historical press reports and other contemporaneous material.",
  },
  {
    icon: FileText,
    title: "Official Records",
    description:
      "Publicly available governmental, legal and institutional records.",
  },
];

export default function HistoricalDocuments() {
  return (
    <Section
      variant="dark"
      className="historical-documents"
    >

      <Container>

        <div className="historical-documents__intro">

          <div>
            <span className="ui-eyebrow">
              Historical Sources
            </span>

            <h2>
              Explore the Documents Behind the History
            </h2>
          </div>

          <div>
            <p>
              The strongest part of the history section should be
              its connection to primary and contemporaneous
              material.
            </p>

            <Button
              to="/documents"
              variant="hero-outline"
            >
              Open Document Archive
              <ArrowRight size={17} />
            </Button>
          </div>

        </div>

        <div className="historical-document-grid">

          {documentTypes.map((item) => {
            const Icon = item.icon;

            return (
              <article
                className="historical-document-type"
                key={item.title}
              >

                <Icon size={26} />

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

                <div>
                  Browse collection
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