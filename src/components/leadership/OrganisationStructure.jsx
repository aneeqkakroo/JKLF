import {
  ArrowRight,
  Globe2,
  Landmark,
  MapPinned,
} from "lucide-react";

import {
  centralCommittee,
  diplomaticBureau,
  organisationalZones,
} from "../../data/leadership";

import {
  Container,
  Section,
  SectionHeader,
} from "../ui";

import "./leadership.css";

// Collapses repeated roles, e.g. three "Vice Chairman" entries → "Vice Chairman ×3".
function summariseRoles(office) {
  const counts = new Map();

  office.forEach(({ role }) => {
    counts.set(role, (counts.get(role) || 0) + 1);
  });

  return [...counts].map(([role, count]) =>
    count > 1 ? `${role} ×${count}` : role
  );
}

export default function OrganisationStructure() {
  const committeeRoles = summariseRoles(centralCommittee.office);
  const zoneRoles = summariseRoles(organisationalZones[0].office);
  const bureauRoles = summariseRoles(diplomaticBureau.office);

  return (
    <Section
      variant="dark"
      className="leadership-structure"
    >

      <Container>

        <SectionHeader
          eyebrow="Organisation"
          title="Organisational Structure"
          description="One Central Committee directing six zones, each with the same set of office holders."
        />

        <div className="org-chart">

          <div className="org-chart__top">

            <article className="org-node org-node--central">

              <Landmark size={28} />

              <span>
                Tier 01
              </span>

              <h3>
                {centralCommittee.title}
              </h3>

              <ul className="org-roles">
                {committeeRoles.map((role) => (
                  <li key={role}>
                    {role}
                  </li>
                ))}
              </ul>

            </article>

            <article className="org-node org-node--bureau">

              <Globe2 size={24} />

              <span>
                Diplomatic Affairs
              </span>

              <h3>
                {diplomaticBureau.title}
              </h3>

              <ul className="org-roles">
                {bureauRoles.map((role) => (
                  <li key={role}>
                    {role}
                  </li>
                ))}
              </ul>

            </article>

          </div>

          <div className="org-chart__zones">

            {organisationalZones.map((zone) => (
              <a
                href="#organisational-leadership"
                className="org-node org-node--zone"
                key={zone.id}
              >

                <MapPinned size={20} />

                <strong>
                  {zone.code}
                </strong>

                <small>
                  {zone.name}
                </small>

              </a>
            ))}

          </div>

          <div className="org-chart__zone-office">

            <span>
              Tier 02 · Every zone
            </span>

            <ul className="org-roles">
              {zoneRoles.map((role) => (
                <li key={role}>
                  {role}
                </li>
              ))}
            </ul>

            <a href="#organisational-leadership">
              View office holders
              <ArrowRight size={16} />
            </a>

          </div>

        </div>

      </Container>
    </Section>
  );
}
