import {
  BookOpen,
  Library,
  Clock3,
  Search,
} from "lucide-react";

import {
  Container,
  Section,
} from "../ui";

import "./history.css";

const features = [
  {
    icon: Clock3,
    title: "Chronology",
    text:
      "Move through major historical periods and political developments in chronological order.",
  },
  {
    icon: Library,
    title: "Primary Sources",
    text:
      "Connect historical claims with documents, correspondence, resolutions and archival material.",
  },
  {
    icon: BookOpen,
    title: "Historical Context",
    text:
      "Provide wider political and regional context rather than presenting events in isolation.",
  },
  {
    icon: Search,
    title: "Source Transparency",
    text:
      "Clearly distinguish organisational interpretation from independently documented historical material.",
  },
];

export default function HistoryIntro() {
  return (
    <Section>
      <Container>

        <div className="history-intro">

          <div className="history-intro__heading">
            <span className="ui-eyebrow">
              Historical Archive
            </span>

            <h2>
              More Than a Timeline
            </h2>
          </div>

          <div className="history-intro__text">

            <p className="history-large-copy">
              The history section should function as a researchable
              archive rather than simply a chronological list of dates.
            </p>

            <p>
              Visitors can explore the wider history of Jammu Kashmir
              separately from the organisational history of JKLF while
              moving between events, people and original documents.
            </p>

            <p>
              Where historical interpretations differ, the archive can
              provide attribution and sources rather than presenting
              contested interpretations as undisputed facts.
            </p>

          </div>

        </div>

        <div className="history-feature-grid">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                className="history-feature"
                key={feature.title}
              >
                <Icon size={24} />

                <h3>{feature.title}</h3>

                <p>{feature.text}</p>
              </article>
            );
          })}

        </div>

      </Container>
    </Section>
  );
}