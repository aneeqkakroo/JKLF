import {
  Navigate,
  Link,
  useParams,
} from "react-router-dom";

import { useMemo } from "react";

import {
  ArrowLeft,
  CalendarDays,
} from "lucide-react";

import { marked } from "marked";

import useNews from "../data/useNews";
import { findArticle } from "../lib/publicNews.js";

import {
  Badge,
  Container,
  Section,
} from "../components/ui";

import { NewsMessage } from "../components/news/NewsCards";
import ShareArticle from "../components/news/ShareArticle";
import useDocumentTitle from "../lib/useDocumentTitle";

import "../components/news/news.css";

// App updates are plain text. Escape any HTML, then let Markdown handle
// paragraphs, line breaks, links, bold text and lists.
function renderBody(text) {
  const escaped = String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  return marked.parse(escaped, { breaks: true });
}

export default function NewsDetail() {
  const { slug } = useParams();
  const { news, status } = useNews();

  const article = findArticle(news, slug);

  useDocumentTitle(article?.title);

  const bodyHtml = useMemo(
    () => (article ? renderBody(article.body) : ""),
    [article]
  );

  if (status !== "ready") {
    return (
      <Section>
        <Container>
          {status === "loading" ? (
            <div
              className="news-article-loading"
              aria-busy="true"
              aria-label="Loading article"
            />
          ) : (
            <NewsMessage status="error" />
          )}
        </Container>
      </Section>
    );
  }

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
    .sort(
      (a, b) =>
        Number(b.category === article.category) -
        Number(a.category === article.category)
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

        </Container>
      </section>

      <Section>
        <Container>

          <div className="news-article-layout">

            <article className="news-article-main">
              {article.image && (
                <img
                  className="news-article-image"
                  src={article.image}
                  alt={article.imageAlt}
                />
              )}

              <div
                className="news-article-body"
                dangerouslySetInnerHTML={{ __html: bodyHtml }}
              />

              <ShareArticle
                title={article.title}
                slug={article.slug}
              />

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
