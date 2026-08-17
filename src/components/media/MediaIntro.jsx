import {
  Camera,
  Video,
  Mic2,
  Newspaper,
} from "lucide-react";

import {
  Container,
  Section,
} from "../ui";

import "./media.css";

const features = [
  {
    icon: Camera,
    title: "Photo Archive",
    text:
      "Historical and contemporary photographs with captions, dates and source information.",
  },
  {
    icon: Video,
    title: "Video Archive",
    text:
      "Speeches, public events, interviews and other video material.",
  },
  {
    icon: Mic2,
    title: "Speeches & Interviews",
    text:
      "Recorded interviews, speeches and transcripts in one structured archive.",
  },
  {
    icon: Newspaper,
    title: "Press Coverage",
    text:
      "Selected media coverage indexed by publication, date and subject.",
  },
];

export default function MediaIntro() {
  return (
    <Section>
      <Container>

        <div className="media-intro">

          <div className="media-intro__heading">

            <span className="ui-eyebrow">
              Media Centre
            </span>

            <h2>
              A Structured Multimedia Archive
            </h2>

          </div>

          <div className="media-intro__content">

            <p className="media-large-copy">
              The Media Centre brings together photographs, video,
              speeches, interviews and press material in one place.
            </p>

            <p>
              Each media record can later include a caption, date,
              source, transcript and related documents.
            </p>

          </div>

        </div>

        <div className="media-feature-grid">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                className="media-feature"
                key={feature.title}
              >

                <Icon size={24} />

                <h3>
                  {feature.title}
                </h3>

                <p>
                  {feature.text}
                </p>

              </article>
            );
          })}

        </div>

      </Container>
    </Section>
  );
}
