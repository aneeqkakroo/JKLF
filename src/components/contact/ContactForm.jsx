import { useState } from "react";

import {
  CheckCircle2,
  Send,
} from "lucide-react";

import {
  CONTACT_SUBJECTS,
  sendContactMessage,
} from "../../lib/contactMessage.js";

import {
  Container,
  Section,
} from "../ui";

import "./contact.css";

const PRIVACY_URL = "https://app.jklf.org/privacy";

const emptyForm = {
  name: "",
  email: "",
  country: "",
  subject: "",
  message: "",
  website: "", // hidden from people; only bots fill it in
};

export default function ContactForm() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");
  // When the form was opened; forms sent within seconds are from bots
  const [openedAt, setOpenedAt] = useState(() => Date.now());

  function update(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const result = await sendContactMessage(
      { ...form, elapsed_ms: Date.now() - openedAt },
      { env: import.meta.env }
    );

    if (result.ok) {
      setStatus("sent");
      setForm(emptyForm);
    } else {
      setStatus("error");
      setError(result.error);
    }
  }

  return (
    <Section variant="soft">

      <Container>

        <div className="contact-layout">

          <div className="contact-layout__intro">

            <span className="ui-eyebrow">
              Send a Message
            </span>

            <h2>
              Contact Form
            </h2>

            <p>
              Write to the Jammu Kashmir Liberation Front. Your message
              goes directly to the organisation, and we reply by email.
            </p>

            <div className="contact-layout__note">

              <strong>
                Your details
              </strong>

              <p>
                We use your name and email only to reply to your
                message. Read the{" "}
                <a
                  href={PRIVACY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  privacy policy
                </a>
                .
              </p>

            </div>

          </div>

          {status === "sent" ? (
            <div
              className="contact-form contact-form--sent"
              role="status"
            >
              <CheckCircle2 size={40} />

              <h3>
                Thank you. Your message has been sent.
              </h3>

              <p>
                We will reply to the email address you gave. Replies can
                take a few days.
              </p>

              <button
                type="button"
                onClick={() => {
                  setOpenedAt(Date.now());
                  setStatus("idle");
                }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="contact-form__row">

                <label>
                  Name

                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    maxLength={120}
                    required
                    value={form.name}
                    onChange={update}
                  />
                </label>

                <label>
                  Email

                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    maxLength={320}
                    required
                    value={form.email}
                    onChange={update}
                  />
                </label>

              </div>

              <div className="contact-form__row">

                <label>
                  Country

                  <input
                    type="text"
                    name="country"
                    autoComplete="country-name"
                    maxLength={80}
                    value={form.country}
                    onChange={update}
                  />
                </label>

                <label>
                  Subject

                  <select
                    name="subject"
                    required
                    value={form.subject}
                    onChange={update}
                  >
                    <option
                      value=""
                      disabled
                    >
                      Select enquiry type
                    </option>

                    {CONTACT_SUBJECTS.map((subject) => (
                      <option
                        key={subject.value}
                        value={subject.value}
                      >
                        {subject.label}
                      </option>
                    ))}
                  </select>
                </label>

              </div>

              <label>
                Message

                <textarea
                  name="message"
                  rows="8"
                  minLength={10}
                  maxLength={5000}
                  required
                  value={form.message}
                  onChange={update}
                />
              </label>

              {/* Hidden from people and screen readers; bots fill it in */}
              <label
                className="contact-form__trap"
                aria-hidden="true"
              >
                Website
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.website}
                  onChange={update}
                />
              </label>

              {status === "error" && (
                <p
                  className="contact-form__error"
                  role="alert"
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending…" : "Send Message"}
                <Send size={17} />
              </button>

            </form>
          )}

        </div>

      </Container>

    </Section>
  );
}
