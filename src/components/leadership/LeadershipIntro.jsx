import {
  UsersRound,
  Network,
  History,
  FileUser,
} from "lucide-react";

import {
  Container,
  Section,
} from "../ui";

import "./leadership.css";

const features = [
  {
    icon: UsersRound,
    title: "Current Leadership",
    text:
      "Clearly identified current office holders and their organisational responsibilities.",
  },
  {
    icon: Network,
    title: "Office Bearers",
    text:
      "A directory of publicly listed organisational and regional positions.",
  },
  {
    icon: History,
    title: "Historical Leadership",
    text:
      "Separate profiles for founders, former leaders and other significant historical figures.",
  },
  {
    icon: FileUser,
    title: "Biographical Archive",
    text:
      "Profiles linked with speeches, documents, interviews and historical events.",
  },
];

export default function LeadershipIntro() {
  return (
    <Section>
      <Container>

        <div className="leadership-intro">

          <div className="leadership-intro__heading">
            <span className="ui-eyebrow">
              Organisation & People
            </span>

            <h2>
              A Clear Leadership Directory
            </h2>
          </div>

          <div className="leadership-intro__content">

            <p className="leadership-large-copy">
              Current organisational positions should always be
              clearly distinguished from historical leadership and
              former office holders.
            </p>

            <p>
              Individual profiles can provide biographies,
              responsibilities, speeches, interviews and links to
              relevant organisational material.
            </p>

            <p>
              Historical profiles can additionally connect people
              to events, documents and periods elsewhere in the
              archive.
            </p>

          </div>

        </div>

        <div className="leadership-feature-grid">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                className="leadership-feature"
                key={feature.title}
              >
                <Icon size={24} />

                <h3>
                  {feature.title}
                </h3>

                <p>
                  {feature.text}
                </p>
              </article>
            );
          })}

        </div>

      </Container>
    </Section>
  );
}