import {
  ArrowRight,
  Globe2,
  Landmark,
  MapPin,
} from "lucide-react";

import {
  diplomaticBureau,
  organisationalZones,
} from "../../data/leadership";

import {
  Button,
  Container,
  Section,
} from "../ui";

import "./home.css";

export default function InternationalPresence() {
  return (
    <Section variant="soft">
      <Container>

        <div className="international">

          <div className="international__content">

            <span className="ui-eyebrow">
              Organisation
            </span>

            <h2>
              One Movement, Around the World
            </h2>

            <p>
              Wherever Kashmiris live, the struggle for freedom is
              their duty. Our zones organise that struggle in every
              part of the state and across the diaspora, under one
              constitution and one leadership.
            </p>

            <Button
              to="/leadership"
              variant="outline"
            >
              Explore our organisation
              <ArrowRight size={17} />
            </Button>

          </div>

          <div className="international__structure">

            <article className="international__card international__card--lead">
              <Landmark size={24} />

              <div>
                <h3>
                  Supreme Council
                </h3>

                <p>
                  60 representatives from every zone: our highest
                  policy-making body.
                </p>
              </div>
            </article>

            <article className="international__card">
              <Globe2 size={24} />

              <div>
                <h3>
                  {diplomaticBureau.title}
                </h3>

                <p>
                  Representing the Kashmiri nation to governments
                  and international organisations.
                </p>
              </div>
            </article>

            <ul className="international__zones">
              {organisationalZones.map((zone) => (
                <li key={zone.id}>
                  <MapPin size={16} />

                  <div>
                    <strong>
                      {zone.code}
                    </strong>

                    {zone.code !== zone.name && (
                      <span>
                        {zone.name}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>

          </div>

        </div>

      </Container>
    </Section>
  );
}
