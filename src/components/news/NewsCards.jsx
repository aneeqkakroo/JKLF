import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import NewsVisual from "./NewsVisual";

import "./news.css";

export function NewsMeta({ article }) {
  return (
    <div className="news-meta">
      <span className="news-meta__category">
        {article.category}
      </span>
      <time dateTime={article.isoDate}>
        {article.date}
      </time>
    </div>
  );
}

// Big story with the title over its photo.
export function LeadStory({ article }) {
  return (
    <Link
      to={`/news/${article.slug}`}
      className="news-lead"
    >
      <NewsVisual article={article} iconSize={96} />

      <div className="news-lead__content">
        <NewsMeta article={article} />

        <h2>
          {article.title}
        </h2>

        {article.excerpt && (
          <p>
            {article.excerpt}
          </p>
        )}

        <span className="news-lead__more">
          Read the full story
          <ArrowRight size={17} />
        </span>
      </div>
    </Link>
  );
}

export function StoryCard({ article, compact = false }) {
  return (
    <Link
      to={`/news/${article.slug}`}
      className={compact ? "news-card news-card--compact" : "news-card"}
    >
      <div className="news-card__media">
        <NewsVisual article={article} iconSize={compact ? 34 : 44} />
      </div>

      <div className="news-card__body">
        <NewsMeta article={article} />

        <h3>
          {article.title}
        </h3>

        {!compact && article.excerpt && (
          <p>
            {article.excerpt}
          </p>
        )}
      </div>
    </Link>
  );
}

// Grey placeholder cards while news loads
export function StoryCardSkeleton() {
  return (
    <div
      className="news-card news-card--skeleton"
      aria-hidden="true"
    >
      <div className="news-card__media" />
      <div className="news-card__body">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

export function NewsMessage({ status }) {
  return (
    <div
      className="news-empty"
      role="status"
    >
      {status === "error" ? (
        <>
          <strong>News could not be loaded</strong>
          <p>Please check your connection and refresh the page.</p>
        </>
      ) : (
        <>
          <strong>No news yet</strong>
          <p>Statements and press releases will appear here.</p>
        </>
      )}
    </div>
  );
}
