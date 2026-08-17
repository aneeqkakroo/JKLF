import {
  Search,
  UsersRound,
  MapPin,
  History,
} from "lucide-react";

import {
  Container,
  Section,
  SectionHeader,
} from "../ui";

import "./leadership.css";

const filters = [
  {
    icon: UsersRound,
    label: "Role",
    value: "All roles",
  },
  {
    icon: MapPin,
    label: "Region",
    value: "All regions",
  },
  {
    icon: History,
    label: "Period",
    value: "All periods",
  },
];

export default function LeadershipArchive() {
  return (
    <Section>

      <Container>

        <SectionHeader
          eyebrow="People Archive"
          title="Search Leadership & Biographies"
          description="Later this interface can search current and historical profiles from a single leadership dataset."
          align="center"
        />

        <div className="leadership-search">

          <div className="leadership-search__main">

            <Search size={20} />

            <input
              type="search"
              placeholder="Search by name, office or role..."
            />

            <button type="button">
              Search
            </button>

          </div>

          <div className="leadership-search__filters">

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

        <p className="leadership-search__note">
          Search and filtering will become functional when the final
          leadership dataset is populated.
        </p>

      </Container>
    </Section>
  );
}