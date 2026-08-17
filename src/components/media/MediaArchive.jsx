import {
  useMemo,
  useState,
} from "react";

import {
  Search,
  ArrowRight,
  Image as ImageIcon,
} from "lucide-react";

import {
  mediaItems,
  mediaCategories,
} from "../../data/media";

import {
  Container,
  Section,
  SectionHeader,
  Badge,
} from "../ui";

import "./media.css";

export default function MediaArchive() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filteredItems = useMemo(() => {
    const search = query.trim().toLowerCase();

    return mediaItems.filter((item) => {
      const matchesCategory =
        category === "All" ||
        item.category === category ||
        item.type === category;

      const matchesSearch =
        !search ||
        item.title.toLowerCase().includes(search) ||
        item.description.toLowerCase().includes(search) ||
        item.category.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    });
  }, [query, category]);

  return (
    <Section variant="soft">

      <Container>

        <SectionHeader
          eyebrow="Media Archive"
          title="Browse Photos, Video & Interviews"
          description="Search the media archive by title, category or keyword."
        />

        <div className="media-search">

          <Search size={19} />

          <input
            type="search"
            value={query}
            onChange={(event) =>
              setQuery(event.target.value)
            }
            placeholder="Search media..."
            aria-label="Search media archive"
          />

        </div>

        <div className="media-category-tabs">

          {mediaCategories.map((item) => (
            <button
              type="button"
              key={item}
              className={
                item === category
                  ? "media-category-tab media-category-tab--active"
                  : "media-category-tab"
              }
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}

        </div>

        {filteredItems.length > 0 ? (

          <div className="media-grid">

            {filteredItems.map((item) => (
              <article
                className="media-card"
                key={item.id}
              >

                <div className="media-card__visual">

                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                    />
                  ) : (
                    <div className="media-card__placeholder">
                      <ImageIcon size={42} />
                      <span>{item.type}</span>
                    </div>
                  )}

                  <Badge>
                    {item.category}
                  </Badge>

                </div>

                <div className="media-card__content">

                  <span>
                    {item.date}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                  <button type="button">
                    Open media
                    <ArrowRight size={16} />
                  </button>

                </div>

              </article>
            ))}

          </div>

        ) : (

          <div className="media-empty">
            <strong>No media found</strong>
            <p>Try another search term or category.</p>
          </div>

        )}

      </Container>
    </Section>
  );
}
