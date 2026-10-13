import { useState } from "react";

import {
  Landmark,
  MapPin,
  UserRound,
} from "lucide-react";

import {
  centralCommittee,
  organisationalZones,
} from "../../data/leadership";

import {
  Container,
  Section,
  SectionHeader,
} from "../ui";

import "./leadership.css";

function OfficeGrid({ office }) {
  return (
    <div className="zone-office-grid">

      {office.map((person, index) => (
        <article
          className={
            index === 0
              ? "zone-office-card zone-office-card--lead"
              : "zone-office-card"
          }
          key={person.id}
        >

          <div className="zone-office-card__image">

            {person.image ? (
              <img
                src={person.image}
                alt={person.name}
              />
            ) : (
              <UserRound size={24} />
            )}

          </div>

          <div className="zone-office-card__content">
            <span>
              {person.role}
            </span>

            <strong>
              {person.name || "To be announced"}
            </strong>

            {person.location && (
              <small>
                <MapPin size={12} />
                {person.location}
              </small>
            )}

            {person.description && (
              <p>
                {person.description}
              </p>
            )}
          </div>

        </article>
      ))}

    </div>
  );
}

export default function OrganisationalLeadership() {
  const [activeZoneId, setActiveZoneId] = useState(
    organisationalZones[0].id
  );

  const activeZone = organisationalZones.find(
    (zone) => zone.id === activeZoneId
  );

  return (
    <Section
      variant="soft"
      id="organisational-leadership"
    >

      <Container>

        <SectionHeader
          eyebrow="Organisation"
          title="Current Organisational Leadership"
          description="JKLF is led by its Central Committee, with six zones organising the movement across Kashmir and the diaspora."
        />

        <div className="central-committee">

          <div className="central-committee__icon">
            <Landmark size={26} />
          </div>

          <div>
            <h3>
              {centralCommittee.title}
            </h3>

            <p>
              {centralCommittee.description}
            </p>
          </div>

        </div>

        <div className="central-committee-office">
          <OfficeGrid office={centralCommittee.office} />
        </div>

        <div className="zone-panel__heading">
          <span>
            Zonal Organisation
          </span>

          <h3>
            Zones
          </h3>
        </div>

        <div
          className="zone-tabs"
          role="tablist"
          aria-label="Organisational zones"
        >

          {organisationalZones.map((zone) => (
            <button
              type="button"
              role="tab"
              key={zone.id}
              id={`zone-tab-${zone.id}`}
              aria-selected={zone.id === activeZoneId}
              aria-controls="zone-panel"
              className={
                zone.id === activeZoneId
                  ? "zone-tab zone-tab--active"
                  : "zone-tab"
              }
              onClick={() => setActiveZoneId(zone.id)}
            >
              {zone.code}
            </button>
          ))}

        </div>

        <div
          id="zone-panel"
          role="tabpanel"
          aria-labelledby={`zone-tab-${activeZone.id}`}
          className="zone-panel"
        >

          <h4 className="zone-panel__name">
            {activeZone.name}
          </h4>

          <OfficeGrid office={activeZone.office} />

        </div>

      </Container>
    </Section>
  );
}
