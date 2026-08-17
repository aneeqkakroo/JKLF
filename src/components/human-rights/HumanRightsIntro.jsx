import { ShieldCheck, Search, Scale, FileText } from "lucide-react";
import { Container, Section } from "../ui";
import "./human-rights.css";

const principles = [
  { icon: ShieldCheck, title: "Evidence-Led", text: "Human-rights material should be based on verifiable records, attributable reporting and recognised sources." },
  { icon: Search, title: "Source Transparency", text: "Claims, allegations, official responses and independent reporting should be clearly distinguished." },
  { icon: Scale, title: "Legal Context", text: "Where relevant, cases can include publicly available court records, legal documents and procedural history." },
  { icon: FileText, title: "Structured Case Files", text: "Each case can bring together chronology, documents, statements, reports and independent sources." },
];

export default function HumanRightsIntro() {
  return (
    <Section>
      <Container>
        <div className="human-rights-intro">
          <div className="human-rights-intro__heading">
            <span className="ui-eyebrow">Documentation</span>
            <h2>Evidence-Led Human Rights Archive</h2>
          </div>
          <div className="human-rights-intro__content">
            <p className="human-rights-large-copy">The Human Rights section should prioritise verifiable documentation, clear attribution and source transparency.</p>
            <p>Where allegations, official accounts or independent reporting differ, each should be identified clearly so readers can distinguish claims from verified facts.</p>
          </div>
        </div>
        <div className="human-rights-principle-grid">
          {principles.map((principle) => {
            const Icon = principle.icon;
            return (
              <article className="human-rights-principle" key={principle.title}>
                <Icon size={24} />
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
