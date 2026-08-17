import {
  Search,
  CalendarRange,
  Files,
  Users,
  Tag,
} from "lucide-react";

import {
  Container,
  Section,
  SectionHeader,
} from "../ui";

import "./history.css";

const filters = [
  {
    icon: CalendarRange,
    label: "Period",
    value: "All periods",
  },
  {
    icon: Files,
    label: "Material",
    value: "All material",
  },
  {
    icon: Users,
    label: "People",
    value: "All people",
  },
  {
    icon: Tag,
    label: "Topic",
    value: "All topics",
  },
];

export default function ArchiveExplorer() {
  return (
    <Section>

      <Container>

        <SectionHeader
          eyebrow="Research the Archive"
          title="Find Historical Material"
          description="The archive will eventually allow visitors to search historical events, documents, people and periods from one interface."
          align="center"
        />

        <div className="archive-search">

          <div className="archive-search__input">

            <Search size={20} />

            <input
              type="search"
              placeholder="Search history, events, people or documents..."
            />

            <button type="button">
              Search
            </button>

          </div>

          <div className="archive-search__filters">

            {filters.map((filter) => {
              const Icon = filter.icon;

              return (
                <button
                  type="button"
                  key={filter.label}
                >

                  <Icon size={17} />

                  <div>
                    <span>
                      {filter.label}
                    </span>

                    <strong>
                      {filter.value}
                    </strong>
                  </div>

                </button>
              );
            })}

          </div>

        </div>

        <p className="archive-search__note">
          Search functionality will be connected when the document
          and history datasets are populated.
        </p>

      </Container>
    </Section>
  );
}