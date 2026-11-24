import {
  Megaphone,
  Newspaper,
  Users,
} from "lucide-react";

const categoryIcons = {
  "Press Release": Newspaper,
  Notice: Megaphone,
  Organisation: Users,
};

const categoryKey = (category) =>
  String(category).toLowerCase().replace(/[^a-z]+/g, "-");

// The article's photo, or a branded panel in the category's colour.
export default function NewsVisual({ article, iconSize = 40 }) {
  if (article.image) {
    return (
      <img
        className="news-visual news-visual--photo"
        src={article.image}
        alt={article.imageAlt || ""}
        loading="lazy"
      />
    );
  }

  const Icon = categoryIcons[article.category] || Megaphone;

  return (
    <div
      className={`news-visual news-visual--panel news-visual--${categoryKey(article.category)}`}
      aria-hidden="true"
    >
      <Icon
        className="news-visual__icon"
        size={iconSize}
        strokeWidth={1.4}
      />
    </div>
  );
}
