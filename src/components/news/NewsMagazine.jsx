import {
  useMemo,
  useState,
} from "react";

import { Search } from "lucide-react";

import { NEWS_CATEGORIES } from "../../lib/publicNews.js";

import { Container } from "../ui";

import {
  LeadStory,
  NewsMessage,
  StoryCard,
  StoryCardSkeleton,
} from "./NewsCards";

import "./news.css";

const categories = ["All", ...NEWS_CATEGORIES];

export default function NewsMagazine({ news, status }) {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const search = query.trim().toLowerCase();
  const isFiltering = category !== "All" || search !== "";

  const lead =
    news.find((article) => article.featured) || news[0];

  const sideStories = news
    .filter((article) => article !== lead)
    .slice(0, 2);

  const matches = useMemo(
    () =>
      news.filter((article) => {
        const inCategory =
          category === "All" || article.category === category;

        const inSearch =
          !search ||
          [article.title, article.body, article.category]
            .join(" ")
            .toLowerCase()
            .includes(search);

        return inCategory && inSearch;
      }),
    [news, category, search]
  );

  // Without filters the top three stories sit in the lead block.
  const gridStories = isFiltering
    ? matches
    : matches.filter(
        (article) =>
          article !== lead && !sideStories.includes(article)
      );

  if (status !== "ready" || news.length === 0) {
    return (
      <section className="news-magazine">
        <Container>
          {status === "loading" ? (
            <div
              className="news-grid"
              aria-busy="true"
              aria-label="Loading news"
            >
              <StoryCardSkeleton />
              <StoryCardSkeleton />
              <StoryCardSkeleton />
            </div>
          ) : (
            <NewsMessage status={status} />
          )}
        </Container>
      </section>
    );
  }

  return (
    <section className="news-magazine">
      <Container>

        {!isFiltering && lead && (
          <div
            className={
              sideStories.length > 0
                ? "news-top"
                : "news-top news-top--single"
            }
          >
            <LeadStory article={lead} />

            {sideStories.length > 0 && (
              <div className="news-top__side">
                {sideStories.map((article) => (
                  <StoryCard
                    key={article.id}
                    article={article}
                    compact
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {news.length > 3 && (
          <div className="news-filter-bar">
            <div
              className="news-filter-bar__tabs"
              role="group"
              aria-label="Filter by category"
            >
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={
                    item === category
                      ? "news-chip news-chip--active"
                      : "news-chip"
                  }
                  aria-pressed={item === category}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <label className="news-filter-bar__search">
              <Search size={17} />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search news"
                aria-label="Search news"
              />
            </label>
          </div>
        )}

        {isFiltering && (
          <p className="news-results-count" aria-live="polite">
            {matches.length === 1
              ? "1 article"
              : `${matches.length} articles`}
          </p>
        )}

        {gridStories.length > 0 ? (
          <div className="news-grid">
            {gridStories.map((article) => (
              <StoryCard
                key={article.id}
                article={article}
              />
            ))}
          </div>
        ) : (
          isFiltering && (
            <div className="news-empty">
              <strong>
                No articles found
              </strong>
              <p>
                Try another word or category.
              </p>
            </div>
          )
        )}

      </Container>
    </section>
  );
}
