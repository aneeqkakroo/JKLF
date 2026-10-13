import {
  UsersRound,
  Landmark,
  Globe2,
  History,
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
      "The Chairman, Senior Vice Chairman and Spokesperson who lead and represent JKLF today.",
  },
  {
    icon: Landmark,
    title: "Central Committee",
    text:
      "The highest organisational body, setting policy and directing the work of every zone.",
  },
  {
    icon: Globe2,
    title: "Six Zones",
    text:
      "AJKGB, IOK, UK, Europe, North America and the Gulf, each with its own office holders.",
  },
  {
    icon: History,
    title: "Historical Figures",
    text:
      "Founders and leaders whose sacrifice and vision shaped the movement for an independent Kashmir.",
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
              Who Leads JKLF
            </h2>
          </div>

          <div className="leadership-intro__content">

            <p className="leadership-large-copy">
              JKLF is led by its Central Committee under the
              Chairman, with six zones organising the movement in
              Kashmir and across the diaspora.
            </p>

            <p>
              Each zone has its own President, Vice Presidents,
              Chief Organiser, General Secretary, Publication
              Secretary and Finance Secretary, working under the
              direction of the Central Committee.
            </p>

            <p>
              Alongside today's leadership, this page honours the
              founders and historical figures whose struggle laid the
              foundations of the movement.
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
