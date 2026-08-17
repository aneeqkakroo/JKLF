import {
  Newspaper,
  Search,
  FileText,
  Archive,
} from "lucide-react";

import {
  Container,
  Section,
} from "../ui";

import "./news.css";

const features = [
  {
    icon: Newspaper,
    title: "Official Publications",
    text:
      "Statements, press releases, speeches and organisational announcements in one newsroom.",
  },
  {
    icon: Search,
    title: "Searchable",
    text:
      "Visitors can search publications by title, category, year or keyword.",
  },
  {
    icon: FileText,
    title: "Permanent Records",
    text:
      "Every publication receives a permanent URL suitable for citation and sharing.",
  },
  {
    icon: Archive,
    title: "Archive",
    text:
      "Older statements remain available through a structured year and category archive.",
  },
];

export default function NewsIntro() {
  return (
    <Section>
      <Container>
        <div className="news-intro">
          <div className="news-intro__heading">
            <span className="ui-eyebrow">
              Newsroom
            </span>

            <h2>
              Official News, Statements & Publications
            </h2>
          </div>

          <div className="news-intro__content">
            <p className="news-large-copy">
              A professional newsroom gives journalists, researchers
              and visitors one reliable place to find published
              organisational material.
            </p>

            <p>
              Publications can be categorised, dated, searched and
              permanently archived rather than being lost in social
              media feeds.
            </p>
          </div>
        </div>

        <div className="news-feature-grid">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                className="news-feature"
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
