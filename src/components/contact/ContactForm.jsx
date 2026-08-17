import {
  Send,
} from "lucide-react";

import {
  Container,
  Section,
} from "../ui";

import "./contact.css";

export default function ContactForm() {
  function handleSubmit(event) {
    event.preventDefault();
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
              This frontend form is ready to connect to your preferred
              backend, API or form service when the website goes live.
            </p>

            <div className="contact-layout__note">

              <strong>
                Before launch
              </strong>

              <p>
                Add your real organisational email addresses and connect
                this form to your email/API backend.
              </p>

            </div>

          </div>

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
                  required
                />
              </label>

              <label>
                Email

                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
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
                />
              </label>

              <label>
                Subject

                <select
                  name="subject"
                  defaultValue=""
                  required
                >
                  <option
                    value=""
                    disabled
                  >
                    Select enquiry type
                  </option>

                  <option value="general">
                    General Enquiry
                  </option>

                  <option value="media">
                    Media Enquiry
                  </option>

                  <option value="research">
                    Research & Archive
                  </option>

                  <option value="international">
                    International Relations
                  </option>

                  <option value="technical">
                    Website / Technical
                  </option>
                </select>
              </label>

            </div>

            <label>
              Message

              <textarea
                name="message"
                rows="8"
                required
              />
            </label>

            <button type="submit">
              Send Message
              <Send size={17} />
            </button>

          </form>

        </div>

      </Container>

    </Section>
  );
}
