import {
  ArrowRight,
  CalendarDays,
} from "lucide-react";
import { Link } from "react-router-dom";

import { news } from "../../data/News";

import {
  Button,
  Container,
  Section,
  SectionHeader,
  Badge,
} from "../ui";

import "./home.css";

export default function LatestNews() {
  return (
    <Section variant="soft">
      <Container>

        <div className="latest-heading">

          <SectionHeader
            eyebrow="Newsroom"
            title="Latest News & Statements"
            description="Latest public statements, announcements, speeches and organisational updates."
          />

          <Button
            to="/news"
            variant="outline"
          >
            View All
            <ArrowRight size={17} />
          </Button>

        </div>

        <div className="news-grid">

          {news.slice(0, 3).map((article) => (
            <article
              className="news-card"
              key={article.id}
            >

              <div className="news-card__image">
                {article.image ? (
                  <img
                    src={article.image}
                    alt=""
                  />
                ) : (
                  <div className="news-card__placeholder">
                    JKLF
                  </div>
                )}

                <Badge>
                  {article.category}
                </Badge>
              </div>

              <div className="news-card__content">

                <div className="news-card__date">
                  <CalendarDays size={15} />
                  {article.date}
                </div>

                <h3>
                  <Link
                    to={`/news/${article.slug}`}
                  >
                    {article.title}
                  </Link>
                </h3>

                <p>{article.excerpt}</p>

                <Link
                  className="news-card__link"
                  to={`/news/${article.slug}`}
                >
                  Read more
                  <ArrowRight size={16} />
                </Link>

              </div>

            </article>
          ))}

        </div>

      </Container>
    </Section>
  );
}