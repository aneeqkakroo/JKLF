import {
  useMemo,
  useState,
} from "react";

import {
  ArrowRight,
  CalendarDays,
  Search,
} from "lucide-react";

import { Link } from "react-router-dom";

import {
  news,
  newsCategories,
} from "./../data/news.js";

import {
  Badge,
  Container,
  Section,
  SectionHeader,
} from "../ui";

import "./news.css";

export default function NewsArchive() {
  const [category, setCategory] =
    useState("All");

  const [query, setQuery] =
    useState("");

  const [year, setYear] =
    useState("All");

  const years = [
    "All",
    ...Array.from(
      new Set(
        news.map((article) =>
          String(article.year)
        )
      )
    ),
  ];

  const filteredNews = useMemo(() => {
    const search =
      query.trim().toLowerCase();

    return news.filter((article) => {
      const matchesCategory =
        category === "All" ||
        article.category === category;

      const matchesYear =
        year === "All" ||
        String(article.year) === year;

      const matchesSearch =
        !search ||
        article.title
          .toLowerCase()
          .includes(search) ||
        article.excerpt
          .toLowerCase()
          .includes(search) ||
        article.category
          .toLowerCase()
          .includes(search);

      return (
        matchesCategory &&
        matchesYear &&
        matchesSearch
      );
    });
  }, [category, query, year]);

  return (
    <Section>
      <Container>

        <SectionHeader
          eyebrow="Publication Archive"
          title="News & Statements"
          description="Browse official publications by category, date or keyword."
        />

        <div className="news-tools">

          <div className="news-search-box">
            <Search size={19} />

            <input
              type="search"
              value={query}
              onChange={(event) =>
                setQuery(event.target.value)
              }
              placeholder="Search publications..."
              aria-label="Search publications"
            />
          </div>

          <select
            value={year}
            onChange={(event) =>
              setYear(event.target.value)
            }
            className="news-year-select"
            aria-label="Filter by year"
          >
            {years.map((item) => (
              <option
                key={item}
                value={item}
              >
                {item === "All"
                  ? "All years"
                  : item}
              </option>
            ))}
          </select>

        </div>

        <div className="news-category-tabs">

          {newsCategories.map((item) => (
            <button
              key={item}
              type="button"
              className={
                item === category
                  ? "news-category-tab news-category-tab--active"
                  : "news-category-tab"
              }
              onClick={() =>
                setCategory(item)
              }
            >
              {item}
            </button>
          ))}

        </div>

        {filteredNews.length > 0 ? (
          <div className="news-archive-grid">

            {filteredNews.map((article) => (
              <article
                className="news-archive-card"
                key={article.id}
              >

                <div className="news-archive-card__visual">
                  {article.image ? (
                    <img
                      src={article.image}
                      alt=""
                    />
                  ) : (
                    <div className="news-archive-card__placeholder">
                      JKLF
                    </div>
                  )}

                  <Badge>
                    {article.category}
                  </Badge>
                </div>

                <div className="news-archive-card__content">

                  <div className="news-archive-card__date">
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

                  <p>
                    {article.excerpt}
                  </p>

                  <Link
                    to={`/news/${article.slug}`}
                    className="news-archive-card__link"
                  >
                    Read publication
                    <ArrowRight size={16} />
                  </Link>

                </div>

              </article>
            ))}

          </div>
        ) : (
          <div className="news-empty">
            <strong>
              No publications found
            </strong>

            <p>
              Try another search term,
              category or year.
            </p>
          </div>
        )}

      </Container>
    </Section>
  );
}
