import {
  Library,
  CalendarRange,
  Scale,
  ScrollText,
  ArrowRight,
} from "lucide-react";

import {
  Container,
  Section,
  SectionHeader,
} from "../ui";

import {
  Link,
} from "react-router-dom";

import "./documents.css";

const collections = [
  {
    icon: ScrollText,
    title: "Political Documents",
    description:
      "Political programmes, constitutions, formal resolutions and organisational records.",
  },
  {
    icon: CalendarRange,
    title: "Historical Archive",
    description:
      "Documents organised around historical periods, events and political developments.",
  },
  {
    icon: Scale,
    title: "Legal Records",
    description:
      "Publicly available legal documents, court records and case-related material.",
  },
  {
    icon: Library,
    title: "Research Collections",
    description:
      "Reports, memoranda, correspondence and other research material.",
  },
];

export default function DocumentCollections() {
  return (
    <Section
      variant="dark"
      className="document-collections"
    >

      <Container>

        <SectionHeader
          eyebrow="Collections"
          title="Browse the Archive by Collection"
          description="Documents can be grouped into thematic and historical collections as the archive grows."
        />

        <div className="document-collection-grid">

          {collections.map((collection) => {
            const Icon = collection.icon;

            return (
              <Link
                to="/documents"
                className="document-collection-card"
                key={collection.title}
              >

                <Icon size={27} />

                <h3>
                  {collection.title}
                </h3>

                <p>
                  {collection.description}
                </p>

                <div>
                  Browse collection
                  <ArrowRight size={16} />
                </div>

              </Link>
            );
          })}

        </div>

      </Container>
    </Section>
  );
}
