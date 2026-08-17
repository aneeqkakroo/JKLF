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
    question:
      "Where does the political position presented on this website come from?",
    answer:
      "The final version should be based primarily on JKLF's constitution, political programme, formal resolutions and attributable public statements.",
  },
  {
    question:
      "Does the website present JKLF's position as undisputed fact?",
    answer:
      "No. Political positions should be attributed clearly. Historical or legal claims should be supported by appropriate independent or primary sources.",
  },
  {
    question:
      "Why are political issues divided into separate pages?",
    answer:
      "Separating major issues allows visitors to explore each question in greater depth and makes it easier to link relevant documents, historical material and sources.",
  },
  {
    question:
      "Where will constitutional proposals be explained?",
    answer:
      "Topics concerning governance, regional autonomy, elections, citizenship and institutional design will each have dedicated political-position pages.",
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
            title="Understanding the Political Section"
            description="How political claims, source material and organisational positions are presented."
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