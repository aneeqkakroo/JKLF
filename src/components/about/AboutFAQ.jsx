import { useState } from "react";
import {
  Plus,
  Minus,
} from "lucide-react";

import {
  Container,
  Section,
  SectionHeader,
} from "../ui";

import "./about.css";

const questions = [
  {
    question: "What is the Jammu Kashmir Liberation Front?",
    answer:
      "This section will provide a concise description of the organisation, its history and its published political objectives.",
  },
  {
    question: "What political position does JKLF advocate?",
    answer:
      "The website's Political Position section will explain the organisation's published position in detail and provide links to relevant primary documents.",
  },
  {
    question: "Where can I read JKLF's constitution and political programme?",
    answer:
      "Primary organisational documents will be available through the searchable Documents archive.",
  },
  {
    question: "Where can I find information about JKLF's history?",
    answer:
      "The History section will contain a chronological archive covering both the wider political history of Jammu Kashmir and the organisational history of JKLF.",
  },
  {
    question: "How does the website handle disputed historical claims?",
    answer:
      "Where an issue is contested, the website should clearly distinguish JKLF's stated position from government positions, independent reporting and historical scholarship, with sources provided wherever possible.",
  },
];

export default function AboutFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  function toggle(index) {
    setOpenIndex(
      openIndex === index ? null : index
    );
  }

  return (
    <Section id="faq">

      <Container>

        <div className="faq-layout">

          <SectionHeader
            eyebrow="Frequently Asked Questions"
            title="About JKLF"
            description="Straightforward answers to common questions, with links to more detailed sections of the website."
          />

          <div className="faq-list">

            {questions.map((item, index) => {
              const isOpen =
                openIndex === index;

              return (
                <article
                  className={`faq-item ${
                    isOpen
                      ? "faq-item--open"
                      : ""
                  }`}
                  key={item.question}
                >

                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                  >

                    <span>
                      {item.question}
                    </span>

                    {isOpen ? (
                      <Minus size={19} />
                    ) : (
                      <Plus size={19} />
                    )}

                  </button>

                  {isOpen && (
                    <div className="faq-item__answer">
                      <p>
                        {item.answer}
                      </p>
                    </div>
                  )}

                </article>
              );
            })}

          </div>

        </div>

      </Container>

    </Section>
  );
}