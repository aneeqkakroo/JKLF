import { Shield, Users, Scale, FileText, Gavel, Globe2 } from "lucide-react";
import { Container, Section, SectionHeader } from "../ui";
import "./human-rights.css";

const areas = [
  { icon: Shield, title: "Civil Liberties", description: "Documentation relating to freedom of expression, assembly, association and other civil liberties." },
  { icon: Users, title: "Political Prisoners", description: "Structured case files and documented information concerning political detention." },
  { icon: Scale, title: "Due Process", description: "Legal and human-rights material concerning detention, trial and procedural rights." },
  { icon: FileText, title: "Reports", description: "Reports from recognised institutions, organisations and independent sources." },
  { icon: Gavel, title: "Legal Documents", description: "Court documents and publicly available legal records connected with relevant cases." },
  { icon: Globe2, title: "International Sources", description: "UN and other international documentation relevant to Jammu Kashmir." },
];

export default function HumanRightsAreas() {
  return (
    <Section variant="soft">
      <Container>
        <SectionHeader eyebrow="Areas of Documentation" title="Human Rights & Civil Liberties" description="The archive can be organised around clearly defined areas of documentation." align="center" />
        <div className="human-rights-area-grid">
          {areas.map((area) => {
            const Icon = area.icon;
            return (
              <article className="human-rights-area-card" key={area.title}>
                <div className="human-rights-area-card__icon"><Icon size={25} /></div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
