import {
  useState,
} from "react";

import {
  Plus,
  Minus,
} from "lucide-react";

import {
  Container,
  Section,
  SectionHeader,
} from "../ui";

import "./position.css";

const questions = [
  {
    question: "What does JKLF mean by Kashmir?",
    answer:
      "The whole State of Jammu Kashmir as it existed on 14 August 1947: the Kashmir Valley, Jammu and Ladakh, Azad Kashmir and Gilgit-Baltistan. We regard it as one indivisible political entity.",
  },
  {
    question: "Does JKLF want Kashmir to join India or Pakistan?",
    answer:
      "Neither. Our constitution states that no part of the state is constitutionally or legally part of another country, and that the best solution is to reunite the whole state as an independent, sovereign country.",
  },
  {
    question: "What kind of country would a free Jammu Kashmir be?",
    answer:
      "A democracy built on equality, social justice and human brotherhood, where every citizen is free to practise their religion, fundamental rights are protected, and the state provides for basic needs, healthcare, education and employment.",
  },
  {
    question: "How would minorities be protected?",
    answer:
      "No citizen may face injustice because of sex, residence, race, language or religion, and no group may dominate another. Our constitution calls the protection of minorities the centuries-old tradition and moral responsibility of all Kashmiris.",
  },
  {
    question: "Who decides the future of Jammu Kashmir?",
    answer:
      "Only its people. No individual, party or government has the right to decide the state's political future on their behalf, and any arrangement imposed against their collective will has no standing.",
  },
];

export default function PositionFAQ() {
  const [openIndex, setOpenIndex] =
    useState(0);

  function toggle(index) {
    setOpenIndex(
      openIndex === index
        ? null
        : index
    );
  }

  return (
    <Section>

      <Container>

        <div className="position-faq">

          <SectionHeader
            eyebrow="Questions"
            title="Our Position, Simply Put"
            description="Short answers to the questions we are asked most often about what we stand for."
          />

          <div className="position-faq__list">

            {questions.map((item, index) => {
              const isOpen =
                openIndex === index;

              return (
                <article
                  key={item.question}
                  className={`position-faq__item ${
                    isOpen
                      ? "position-faq__item--open"
                      : ""
                  }`}
                >

                  <button
                    type="button"
                    onClick={() =>
                      toggle(index)
                    }
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
                    <div className="position-faq__answer">
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