import { Navigate, Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { humanRightsCases } from "../data/humanRights";
import { Badge, Container, Section } from "../components/ui";
import "../components/human-rights/human-rights.css";

export default function HumanRightsDetail() {
  const { slug } = useParams();
  const caseFile = humanRightsCases.find((item) => item.id === slug);
  if (!caseFile) return <Navigate to="/human-rights" replace />;
  return (
    <>
      <section className="human-rights-detail-hero">
        <Container>
          <Link to="/human-rights" className="human-rights-detail-back"><ArrowLeft size={16} />Human Rights</Link>
          <Badge>{caseFile.category}</Badge>
          <h1>{caseFile.title}</h1>
          <p>{caseFile.description}</p>
        </Container>
      </section>
      <Section>
        <Container>
          <div className="human-rights-detail-layout">
            <article className="human-rights-detail-main">
              <span className="ui-eyebrow">Case Summary</span>
              <h2>Documentation Overview</h2>
              <p>{caseFile.summary}</p>
              <div className="human-rights-detail-note"><strong>Editorial standard</strong><p>Replace placeholder material with verified facts, clearly attributed claims and identifiable source material before publication.</p></div>
            </article>
            <aside className="human-rights-detail-sidebar">
              <div className="human-rights-detail-sidebar__item"><span>Category</span><strong>{caseFile.category}</strong></div>
              <div className="human-rights-detail-sidebar__item"><span>Status</span><strong>{caseFile.status}</strong></div>
              <div className="human-rights-detail-sidebar__item"><span>Date / Period</span><strong>{caseFile.date}</strong></div>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}
