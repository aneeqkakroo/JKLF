import { ArrowRight } from "lucide-react";

import {
  centralCommittee,
  organisationalZones,
} from "../../data/leadership";

import {
  Button,
  Container,
} from "../ui";

import leadershipNetwork from "../../assets/images/leadership-network.svg";

import "./leadership.css";

const stats = [
  {
    value: "1",
    label: centralCommittee.title,
  },
  {
    value: String(organisationalZones.length),
    label: "Zones worldwide",
  },
  {
    value: "1",
    label: "Diplomatic Bureau",
  },
];

export default function LeadershipHero() {
  return (
    <section className="leadership-hero">

      <Container className="leadership-hero__grid">

        <div className="leadership-hero__content">

          <span className="leadership-hero__eyebrow">
            Leadership & People
          </span>

          <h1>
            Leadership of JKLF
          </h1>

          <p>
            A Central Committee under the Chairman, a Diplomatic
            Bureau representing the movement abroad, and six zones
            organising from Kashmir to the diaspora.
          </p>

          <div className="leadership-hero__actions">

            <Button
              href="#organisational-leadership"
              variant="white"
            >
              Meet the leadership
              <ArrowRight size={17} />
            </Button>

            <Button
              href="#current-leadership"
              variant="ghost-light"
            >
              Current leaders
            </Button>

          </div>

          <dl className="leadership-hero__stats">

            {stats.map((stat) => (
              <div key={stat.label}>
                <dt>
                  {stat.label}
                </dt>

                <dd>
                  {stat.value}
                </dd>
              </div>
            ))}

          </dl>

        </div>

        <figure className="leadership-hero__visual">
          <img
            src={leadershipNetwork}
            alt="The Central Committee linked to the Diplomatic Bureau and JKLF's six zones, over the mountains of Kashmir"
          />
        </figure>

      </Container>

    </section>
  );
}
