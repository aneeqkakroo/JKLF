import {
  ArrowRight,
  CalendarDays,
} from "lucide-react";

import { Link } from "react-router-dom";

import {
  Badge,
  Container,
  Section,
} from "../ui";

import "./news.css";

export default function FeaturedNews({
  article,
}) {
  if (!article) {
    return null;
  }

  return (
    <Section
      variant="soft"
      className="featured-news-section"
    >
      <Container>
        <div className="featured-news">
          <div className="featured-news__visual">
            {article.image ? (
              <img
                src={article.image}
                alt=""
              />
            ) : (
              <div className="featured-news__placeholder">
                <span>JKLF</span>
                <strong>Newsroom</strong>
              </div>
            )}
          </div>

          <div className="featured-news__content">
            <Badge>
              Featured {article.category}
            </Badge>

            <div className="featured-news__date">
              <CalendarDays size={16} />
              {article.date}
            </div>

            <h2>
              {article.title}
            </h2>

            <p>
              {article.excerpt}
            </p>

            <Link
              to={`/news/${article.slug}`}
              className="featured-news__link"
            >
              Read publication
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
