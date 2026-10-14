import {
  CircleDot,
  ExternalLink,
} from "lucide-react";

import { constitution } from "../../data/constitution";

import {
  Button,
  Container,
  Section,
} from "../ui";

import "./position.css";

// A selection from Article 5 (Aims and Objectives) of the constitution.
const aims = [
  {
    number: "01",
    title: "End the Forcible Division",
    text:
      "Free the State of Jammu Kashmir from external domination and make it a sovereign country, with a dignified place among the nations of the world.",
  },
  {
    number: "02",
    title: "Reunite a Divided People",
    text:
      "Build practical links between patriotic Kashmiris in every part of the state, separated by its present division, and unite them in one struggle.",
  },
  {
    number: "03",
    title: "An Interim Government of the Whole State",
    text:
      "Until the whole state is free, establish in the liberated territories — Azad Kashmir and Gilgit-Baltistan — an independent, sovereign and democratic interim government, in the spirit of the Azad Government of 4 October 1947.",
  },
  {
    number: "04",
    title: "Take Our Case to the World",
    text:
      "Present the Kashmir issue internationally as the national liberation struggle of the Kashmiri people, and win global support for the sovereignty of the whole state.",
  },
  {
    number: "05",
    title: "Protect Our Identity",
    text:
      "Safeguard the cultural and civilisational values and the Kashmiri identity of the people of the state, and teach its true history.",
  },
];

export default function PoliticalFramework() {
  return (
    <Section
      variant="soft"
      className="political-framework-section"
    >

      <Container>

        <div className="political-framework">

          <div className="political-framework__intro">

            <span className="ui-eyebrow">
              Aims & Objectives
            </span>

            <h2>
              What We Are Working Towards
            </h2>

            <p>
              Our constitution sets out the aims of the Liberation
              Front: to free the whole state and establish within it
              a government and society based on individual freedom,
              democracy, equality, human brotherhood and social
              justice.
            </p>

            <Button
              href={constitution.url}
              target="_blank"
              rel="noreferrer"
              variant="outline"
            >
              Read Article 5 in full
              <ExternalLink size={16} />
            </Button>

          </div>

          <div className="political-framework__steps">

            {aims.map((aim) => (
              <article
                className="framework-step"
                key={aim.number}
              >

                <div className="framework-step__marker">
                  <CircleDot size={19} />
                </div>

                <div className="framework-step__content">

                  <span>
                    {aim.number}
                  </span>

                  <h3>
                    {aim.title}
                  </h3>

                  <p>
                    {aim.text}
                  </p>

                </div>

              </article>
            ))}

          </div>

        </div>

      </Container>

    </Section>
  );
}
