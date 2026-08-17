import {
  Globe2,
  MapPin,
  ArrowRight,
} from "lucide-react";

import {
  Button,
  Container,
  Section,
} from "../ui";

import "./home.css";

const regions = [
  "Indian Occupied Jammu & Kashmir",
  "Azad Jammu Kashmir Gilgit Baltistan",
  "United Kingdom",
  "Europe",
  "North America",
  "Gulf",
];

export default function InternationalPresence() {
  return (
    <Section variant="soft">
      <Container>

        <div className="international">

          <div className="international__visual">
            <Globe2 size={88} />

            <div className="international__rings ring-1" />
            <div className="international__rings ring-2" />
            <div className="international__rings ring-3" />
          </div>

          <div className="international__content">

            <span className="ui-eyebrow">
              International
            </span>

            <h2>JKLF Around the World</h2>

            <p>
              This area can document publicly recognised
              organisational history, political engagement,
              conferences and international activity by region.
            </p>

            <div className="international__regions">
              {regions.map((region) => (
                <div key={region}>
                  <MapPin size={16} />
                  {region}
                </div>
              ))}
            </div>

            <Button
              to="/about"
              variant="outline"
            >
              Explore International Presence
              <ArrowRight size={17} />
            </Button>

          </div>

        </div>

      </Container>
    </Section>
  );
}