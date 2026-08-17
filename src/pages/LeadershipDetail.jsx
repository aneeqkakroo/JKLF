import {
  Navigate,
  Link,
  useParams,
} from "react-router-dom";

import {
  ArrowLeft,
  FileText,
  Mic2,
  Newspaper,
  UserRound,
} from "lucide-react";

import {
  allLeadershipProfiles,
} from "../data/leadership";

import {
  Container,
  Section,
  Badge,
} from "../components/ui";

import "../components/leadership/leadership.css";

export default function LeadershipDetail() {
  const { slug } = useParams();

  const person = allLeadershipProfiles.find(
    (item) => item.id === slug
  );

  if (!person) {
    return (
      <Navigate
        to="/leadership"
        replace
      />
    );
  }

  return (
    <>
      <section className="leadership-profile-hero">

        <Container>

          <Link
            to="/leadership"
            className="leadership-profile-back"
          >
            <ArrowLeft size={16} />
            Leadership
          </Link>

          <div className="leadership-profile-hero__grid">

            <div className="leadership-profile-hero__image">

              {person.image ? (
                <img
                  src={person.image}
                  alt={person.name}
                />
              ) : (
                <UserRound size={80} />
              )}

            </div>

            <div className="leadership-profile-hero__content">

              <Badge>
                {person.category || "Leadership"}
              </Badge>

              <h1>
                {person.name}
              </h1>

              <strong>
                {person.role}
              </strong>

              {person.location && (
                <p>
                  {person.location}
                </p>
              )}

              {person.period && (
                <p>
                  {person.period}
                </p>
              )}

            </div>

          </div>

        </Container>

      </section>

      <Section>

        <Container>

          <div className="leadership-profile-layout">

            <article className="leadership-profile-main">

              <span className="ui-eyebrow">
                Biography
              </span>

              <h2>
                About {person.name}
              </h2>

              <p className="leadership-large-copy">
                {person.description ||
                  "A detailed biography will appear here."}
              </p>

              <p>
                The full profile can later include biographical
                information, organisational responsibilities,
                historical context and references.
              </p>

            </article>

            <aside className="leadership-profile-sidebar">

              <span>
                Related Material
              </span>

              <Link to="/documents">
                <FileText size={18} />

                <div>
                  <strong>
                    Documents
                  </strong>

                  <small>
                    Statements and records
                  </small>
                </div>
              </Link>

              <Link to="/media">
                <Mic2 size={18} />

                <div>
                  <strong>
                    Speeches & Interviews
                  </strong>

                  <small>
                    Media archive
                  </small>
                </div>
              </Link>

              <Link to="/news">
                <Newspaper size={18} />

                <div>
                  <strong>
                    News & Statements
                  </strong>

                  <small>
                    Related publications
                  </small>
                </div>
              </Link>

            </aside>

          </div>

        </Container>

      </Section>
    </>
  );
}