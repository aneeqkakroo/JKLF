import { Building2, Scale, Landmark, Newspaper, ShieldCheck, FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Container, Section, SectionHeader } from "../ui";
import "./human-rights.css";

const sources = [
  { icon: Building2, title: "International Organisations", description: "UN bodies and other recognised international institutions." },
  { icon: Scale, title: "Court & Legal Records", description: "Publicly available legal and judicial material." },
  { icon: Landmark, title: "Government Sources", description: "Official statements, records and public documents." },
  { icon: Newspaper, title: "Independent Journalism", description: "Reporting from attributable and independently identifiable media sources." },
  { icon: ShieldCheck, title: "Human Rights Organisations", description: "Reports and documentation from recognised human-rights organisations." },
  { icon: FileText, title: "Primary Organisational Material", description: "Attributed statements and records clearly identified as organisational material." },
];

export default function SourceStandards() {
  return (
    <Section variant="soft">
      <Container>
        <SectionHeader eyebrow="Source Standards" title="How Evidence Is Presented" description="A human-rights archive is strongest when readers can understand what each source is and who produced it." />
        <div className="human-rights-source-grid">
          {sources.map((source) => { const Icon = source.icon; return (
            <Link to="/documents" className="human-rights-source-card" key={source.title}>
              <Icon size={23} />
              <div><h3>{source.title}</h3><p>{source.description}</p></div>
              <ArrowRight size={17} />
            </Link>
          ); })}
        </div>
      </Container>
    </Section>
  );
}
