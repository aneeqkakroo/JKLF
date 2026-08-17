import {
  Navigate,
  Link,
  useParams,
} from "react-router-dom";

import {
  ArrowLeft,
  CalendarDays,
} from "lucide-react";

import {
  news,
} from "../data/news";

import {
  Badge,
  Container,
  Section,
} from "../components/ui";

import "../components/news/news.css";

export default function NewsDetail() {
  const { slug } = useParams();

  const article = news.find(
    (item) => item.slug === slug
  );

  if (!article) {
    return (
      <Navigate
        to="/news"
        replace
      />
    );
  }

  const related = news
    .filter(
      (item) =>
        item.id !== article.id
    )
    .slice(0, 2);

  return (
    <>
      <section className="news-article-hero">
        <Container>

          <Link
            to="/news"
            className="news-article-back"
          >
            <ArrowLeft size={16} />
            News & Statements
          </Link>

          <div className="news-article-meta">
            <Badge>
              {article.category}
            </Badge>

            <span className="news-article-date">
              <CalendarDays size={15} />
              {article.date}
            </span>
          </div>

          <h1>
            {article.title}
          </h1>

          <p className="news-article-hero__excerpt">
            {article.excerpt}
          </p>

        </Container>
      </section>

      <Section>
        <Container>

          <div className="news-article-layout">

            <article className="news-article-main">
              {article.body.map(
                (paragraph, index) => (
                  <p key={index}>
                    {paragraph}
                  </p>
                )
              )}

              {related.length > 0 && (
                <div className="news-related">

                  <span className="ui-eyebrow">
                    Related Publications
                  </span>

                  <h2>
                    Continue Reading
                  </h2>

                  <div className="news-related-grid">

                    {related.map(
                      (item) => (
                        <Link
                          key={item.id}
                          to={`/news/${item.slug}`}
                          className="news-related-card"
                        >
                          <span>
                            {item.category}
                          </span>

                          <h3>
                            {item.title}
                          </h3>

                          <p>
                            {item.excerpt}
                          </p>
                        </Link>
                      )
                    )}

                  </div>

                </div>
              )}
            </article>

            <aside className="news-article-sidebar">

              <div className="news-article-sidebar__section">
                <span>
                  Published
                </span>

                <strong>
                  {article.date}
                </strong>
              </div>

              <div className="news-article-sidebar__section">
                <span>
                  Category
                </span>

                <strong>
                  {article.category}
                </strong>
              </div>

              <div className="news-article-sidebar__section">
                <span>
                  Publisher
                </span>

                <strong>
                  {article.author}
                </strong>
              </div>

            </aside>

          </div>

        </Container>
      </Section>
    </>
  );
}
