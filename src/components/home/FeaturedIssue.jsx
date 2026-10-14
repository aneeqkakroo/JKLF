import {
  ArrowRight,
  Landmark,
  MapPin,
  Scale,
} from "lucide-react";

import {
  Button,
  Container,
  Section,
} from "../ui";

import "./home.css";

const facts = [
  {
    label: "Role",
    value: "Chairman, JKLF",
    icon: Landmark,
  },
  {
    label: "Status",
    value: "Serving a life sentence",
    icon: Scale,
  },
  {
    label: "Held in",
    value: "Tihar Jail, New Delhi",
    icon: MapPin,
  },
];

export default function FeaturedIssue() {
  return (
    <Section
      variant="dark"
      className="featured-issue-section"
    >
      <Container>

        <div className="featured-issue">

          <div className="featured-issue__visual">
            <img
              src="/images/yasinmalik.jpg"
              alt="JKLF Chairman Mohammad Yasin Malik"
            />
          </div>

          <div className="featured-issue__content">

            <span className="ui-eyebrow">
              Our Chairman
            </span>

            <h2>
              Mohammad Yasin Malik
            </h2>

            <p className="featured-issue__lead">
              The Chairman of the Jammu Kashmir Liberation Front is
              imprisoned in Tihar Jail, New Delhi, where he is
              serving a life sentence. In his absence, Senior Vice
              Chairman Raja Haq Nawaz leads the Front.
            </p>

            <dl className="featured-issue__facts">
              {facts.map((fact) => {
                const Icon = fact.icon;

                return (
                  <div key={fact.label}>
                    <dt>
                      <Icon size={16} />
                      {fact.label}
                    </dt>

                    <dd>
                      {fact.value}
                    </dd>
                  </div>
                );
              })}
            </dl>

            <Button
              to="/leadership/current-leader-1"
              variant="white"
            >
              Read his profile
              <ArrowRight size={17} />
            </Button>

          </div>

        </div>

      </Container>
    </Section>
  );
}
