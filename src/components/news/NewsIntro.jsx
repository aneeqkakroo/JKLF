import {
  ArrowRight,
  CalendarDays,
} from "lucide-react";

import { Link } from "react-router-dom";

import { Container } from "../ui";

import "./news.css";

export default function NewsIntro({ latest }) {
  return (
    <header className="news-header">
      <Container className="news-header__inner">

        <div className="news-header__text">
          <span className="ui-eyebrow">
            Newsroom
          </span>

          <h1>
            News & Statements
          </h1>

          <p>
            Official statements, press releases and notices from the
            Jammu Kashmir Liberation Front.
          </p>
        </div>

        <div className="news-header__meta">
          {latest && (
            <span>
              <CalendarDays size={15} />
              Latest update: {latest.date}
            </span>
          )}

          <Link to="/contact">
            Press enquiries
            <ArrowRight size={15} />
          </Link>
        </div>

      </Container>
    </header>
  );
}
