import {
  ArrowRight,
  Globe2,
  Landmark,
  MapPinned,
  UsersRound,
} from "lucide-react";

import {
  centralCommittee,
  diplomaticBureau,
  organisationalZones,
} from "../../data/leadership";

import {
  Button,
  Container,
  Section,
  SectionHeader,
} from "../ui";

import "./about.css";

// Seat allocation from Article 8(1)(a) of the constitution.
const supremeCouncilSeats = [
  {
    zone: "Occupied Kashmir",
    seats: 31,
  },
  {
    zone: "Azad Kashmir & Gilgit-Baltistan",
    seats: 19,
  },
  {
    zone: "Overseas",
    seats: 10,
  },
];

export default function Organisation() {
  return (
    <Section id="organisation">

      <Container>

        <div className="key-figures__heading">

          <SectionHeader
            eyebrow="Organisation"
            title="How JKLF Is Organised"
            description="One constitution and one leadership, with elections at every level held every three years."
          />

          <Button
            to="/leadership"
            variant="outline"
          >
            Meet our leadership
            <ArrowRight size={17} />
          </Button>

        </div>

        <div className="organisation-grid">

          <article className="organisation-card organisation-card--lead">

            <div className="organisation-card__icon">
              <UsersRound size={25} />
            </div>

            <h3>
              Supreme Council
            </h3>

            <p>
              Our highest policy-making body: 60 representatives
              from every zone, who elect the central officers and
              set the Front's policy and strategy.
            </p>

            <ul className="organisation-seats">
              {supremeCouncilSeats.map((item) => (
                <li key={item.zone}>
                  <strong>
                    {item.seats}
                  </strong>

                  {item.zone}
                </li>
              ))}
            </ul>

          </article>

          <article className="organisation-card">

            <div className="organisation-card__icon">
              <Landmark size={25} />
            </div>

            <h3>
              {centralCommittee.title}
            </h3>

            <p>
              {centralCommittee.description}
            </p>

          </article>

          <article className="organisation-card">

            <div className="organisation-card__icon">
              <Globe2 size={25} />
            </div>

            <h3>
              {diplomaticBureau.title}
            </h3>

            <p>
              {diplomaticBureau.description}
            </p>

          </article>

          <article className="organisation-card">

            <div className="organisation-card__icon">
              <MapPinned size={25} />
            </div>

            <h3>
              {organisationalZones.length} Zones
            </h3>

            <p>
              Each zone elects its own office holders and organises
              our work locally.
            </p>

            <ul className="organisation-zones">
              {organisationalZones.map((zone) => (
                <li key={zone.id}>
                  {zone.code}
                </li>
              ))}
            </ul>

          </article>

        </div>

      </Container>
    </Section>
  );
}
