import { ArrowRight, Clock3, Scale, FileText, Newspaper } from "lucide-react";
import { Button, Container, Section } from "../ui";
import "./human-rights.css";

const materials = [
  { icon: Clock3, label: "Case Timeline" },
  { icon: Scale, label: "Legal Records" },
  { icon: FileText, label: "Statements" },
  { icon: Newspaper, label: "Independent Reporting" },
];

export default function FeaturedCase() {
  return (
    <Section variant="dark" className="featured-human-rights-case">
      <Container>
        <div className="featured-case-layout">
          <div className="featured-case-content">
            <span className="ui-eyebrow">Featured Case File</span>
            <h2>Structured Case Documentation</h2>
            <p className="featured-case-lead">Significant cases can combine chronology, legal records, public statements, recognised reports and independent reporting in one structured archive.</p>
            <div className="featured-case-materials">
              {materials.map((item) => { const Icon = item.icon; return <div key={item.label}><Icon size={18} />{item.label}</div>; })}
            </div>
            <Button to="/human-rights/case-example-1" variant="hero-outline">View Case File <ArrowRight size={17} /></Button>
          </div>
          <div className="featured-case-visual">
            <span>Case Archive</span>
            <strong>Timeline · Legal Records · Reports · Sources</strong>
          </div>
        </div>
      </Container>
    </Section>
  );
}
