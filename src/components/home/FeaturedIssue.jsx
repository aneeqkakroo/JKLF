import {
  ArrowRight,
  User,
  Clock3,
  Scale,
  FileText,
  Newspaper,
} from "lucide-react";

import {
  Button,
  Container,
  Section,
} from "../ui";

import "./home.css";

const links = [
  {
    label: "Biography",
    icon: User,
  },
  {
    label: "Case Timeline",
    icon: Clock3,
  },
  {
    label: "Legal Documents",
    icon: Scale,
  },
  {
    label: "Statements",
    icon: FileText,
  },
  {
    label: "Media Coverage",
    icon: Newspaper,
  },
];

export default function FeaturedIssue() {
  return (
    <Section>
      <Container>

        <div className="featured-issue">

          <div className="featured-issue__content">

            <span className="ui-eyebrow">
              Featured Case File
            </span>

            <h2>The Case of Yasin Malik</h2>

            <p className="featured-issue__lead">
              A structured archive can bring together biographical
              material, case chronology, court records, public
              statements and independent reporting in one place.
            </p>

            <div className="featured-issue__links">
              {links.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label}>
                    <Icon size={18} />
                    {item.label}
                  </div>
                );
              })}
            </div>

            <Button
              to="/documents"
              variant="primary"
            >
              View Case File
              <ArrowRight size={17} />
            </Button>

          </div>

          <div className="featured-issue__visual">
            <img
              src="/src/assets/images/featured-yasin-malik.jpg"
              alt=""
            />

            <div className="featured-issue__visual-overlay">
              <span>
                DOCUMENTATION
              </span>

              <strong>
                Biography · Timeline · Legal Records
              </strong>
            </div>
          </div>

        </div>

      </Container>
    </Section>
  );
}