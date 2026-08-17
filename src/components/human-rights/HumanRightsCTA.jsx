import { Library, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Container, Section } from "../ui";
import "./human-rights.css";

export default function HumanRightsCTA() {
  return (
    <Section variant="dark" className="human-rights-cta">
      <Container>
        <div className="human-rights-cta__heading"><span className="ui-eyebrow">Research & Enquiries</span><h2>Continue Exploring</h2></div>
        <div className="human-rights-cta__grid">
          <Link to="/documents" className="human-rights-cta-card"><Library size={28} /><div><span>Source Material</span><h3>Search Documents</h3><p>Browse legal records, reports, statements and other archival material.</p></div><ArrowRight size={22} /></Link>
          <Link to="/contact" className="human-rights-cta-card"><Mail size={28} /><div><span>Research Enquiries</span><h3>Contact the Archive</h3><p>Contact information for research, documentation and archive enquiries.</p></div><ArrowRight size={22} /></Link>
        </div>
      </Container>
    </Section>
  );
}
