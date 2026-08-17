import { Mail, ArrowRight } from "lucide-react";

import { Container } from "../ui";

import "./home.css";

export default function Newsletter() {
  function handleSubmit(event) {
    event.preventDefault();

    // Backend / mailing provider will be connected later.
  }

  return (
    <section className="newsletter">
      <Container>

        <div className="newsletter__inner">

          <div className="newsletter__content">
            <div className="newsletter__icon">
              <Mail size={25} />
            </div>

            <div>
              <span>Stay informed</span>

              <h2>Follow Developments</h2>

              <p>
                Receive published statements, reports and
                organisational updates.
              </p>
            </div>
          </div>

          <form
            className="newsletter__form"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              placeholder="Your email address"
              aria-label="Email address"
              required
            />

            <button type="submit">
              Subscribe
              <ArrowRight size={17} />
            </button>
          </form>

        </div>

      </Container>
    </section>
  );
}