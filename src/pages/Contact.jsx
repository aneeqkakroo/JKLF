import {
  Clock3,
  Newspaper,
  ShieldCheck,
} from "lucide-react";

import { Container } from "../components/ui";
import ContactForm from "../components/contact/ContactForm";
import FollowUs from "../components/home/FollowUs";
import useDocumentTitle from "../lib/useDocumentTitle";

import "../components/contact/contact.css";

const PRIVACY_URL = "https://app.jklf.org/privacy";

export default function Contact() {
  useDocumentTitle("Contact");

  return (
    <>
      <section className="contact-page">
        <Container className="contact-page__inner">

          <div className="contact-page__intro">
            <span className="ui-eyebrow">
              Contact
            </span>

            <h1>
              Contact JKLF
            </h1>

            <p className="contact-page__lead">
              Send a message to the Jammu Kashmir Liberation Front. It goes
              straight to the organisation, and we reply by email.
            </p>
          </div>

          <ContactForm />

          <div className="contact-page__details">
            <ul className="contact-facts">
              <li>
                <Clock3 size={19} />
                <span>
                  Replies usually take a few days.
                </span>
              </li>

              <li>
                <Newspaper size={19} />
                <span>
                  Media enquiry with a deadline? Say so in the first line.
                </span>
              </li>

              <li>
                <ShieldCheck size={19} />
                <span>
                  Your details are used only to reply.{" "}
                  <a
                    href={PRIVACY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy policy
                  </a>
                </span>
              </li>
            </ul>
          </div>

        </Container>
      </section>

      <FollowUs />
    </>
  );
}
