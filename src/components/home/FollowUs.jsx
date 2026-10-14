import { ArrowUpRight } from "lucide-react";

import { socialLinks } from "../../data/social";

import SocialIcon from "../SocialIcon";

import { Container } from "../ui";

import "./home.css";

export default function FollowUs() {
  return (
    <section className="follow-us">
      <Container>

        <div className="follow-us__heading">
          <span>
            Stay connected
          </span>

          <h2>
            Follow JKLF
          </h2>

          <p>
            Statements, speeches, protests and news from the
            Liberation Front, as they happen.
          </p>
        </div>

        <ul className="follow-us__grid">
          {socialLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`follow-card follow-card--${link.id}`}
              >
                <SocialIcon
                  id={link.id}
                  size={26}
                />

                <div>
                  <strong>
                    {link.name}
                  </strong>

                  <span>
                    {link.handle}
                  </span>
                </div>

                <ArrowUpRight
                  className="follow-card__arrow"
                  size={18}
                />
              </a>
            </li>
          ))}
        </ul>

      </Container>
    </section>
  );
}
