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
      "JKLF is a Kashmiri national liberation movement founded in 1977. We struggle to reunite the whole State of Jammu Kashmir, as it existed on 14 August 1947, as a single independent, sovereign and democratic country.",
  },
  {
    question: "What political position does JKLF advocate?",
    answer:
      "We believe the people of Jammu Kashmir have the right to self-determination, and that their homeland should be neither part of India nor part of Pakistan, but a sovereign state of its own. Our Political Position section explains this in detail.",
  },
  {
    question: "Who can join JKLF?",
    answer:
      "Any state subject of Jammu Kashmir aged over 18, man or woman, wherever they were born or now live, who accepts our constitution and ideology. Members may not belong to another Kashmiri, Pakistani or Indian political party.",
  },
  {
    question: "Where can I read JKLF's constitution?",
    answer:
      "The full English translation of our constitution is linked on this page and available in our Documents archive.",
  },
  {
    question: "Who leads JKLF?",
    answer:
      "JKLF is led by Chairman Mohammad Yasin Malik and the central officers elected by our Supreme Council, the 60-member body representing every zone. A Diplomatic Bureau represents us internationally.",
  },
  {
    question: "Is JKLF a religious party?",
    answer:
      "No. Our constitution guarantees every citizen of a free Jammu Kashmir complete freedom to choose and practise their religion, and calls sectarian, racial, linguistic and regional division a deadly poison to the national cause.",
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
            description="Answers to the questions we are asked most often."
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