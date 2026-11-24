// Loads public news from the JKLF app (Nazm) Supabase project.
// Admins write updates in the app; those marked Public and Published appear
// on jklf.org/news. Used by the website and by the Vercel functions in api/,
// so it uses plain fetch and no browser- or Vite-only features.
//
// Database side: Nazm migration "public_website_news" (public.public_news and
// public.public_news_image), which expose only public, published updates.

import config from "../data/membership-public.json" with { type: "json" };

// The app's update categories, as shown on the website
export const NEWS_CATEGORY_LABELS = {
  press_release: "Press Release",
  notice: "Notice",
  organisation: "Organisation",
};

export const NEWS_CATEGORIES = Object.values(NEWS_CATEGORY_LABELS);

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export function supabaseConfig(env = {}) {
  return {
    url: (env.VITE_SUPABASE_URL || config.url).replace(/\/$/, ""),
    key: env.VITE_SUPABASE_PUBLISHABLE_KEY || config.publishableKey,
  };
}

function rpc({ url, key }, name, args, request = fetch) {
  return request(`${url}/rest/v1/rpc/${name}`, {
    method: "POST",
    headers: { apikey: key, "Content-Type": "application/json" },
    body: JSON.stringify(args),
  });
}

function slugify(text) {
  return String(text)
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 70)
    .replace(/-+$/, "");
}

// Plain-text summary from the start of the article
function summarise(body, limit = 200) {
  const firstParagraph =
    String(body)
      .split(/\n\s*\n/)
      .map((part) => part.trim())
      .find(Boolean) || "";

  const plain = firstParagraph
    .replace(/[#>*_`[\]]/g, "")
    .replace(/\s+/g, " ")
    .trim();

  if (plain.length <= limit) {
    return plain;
  }

  const cut = plain.slice(0, limit);

  return `${cut.slice(0, cut.lastIndexOf(" ") > 120 ? cut.lastIndexOf(" ") : limit)}…`;
}

function formatDate(iso) {
  const date = new Date(iso);

  return `${date.getUTCDate()} ${MONTHS[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}

// The web address ends with the first 8 characters of the update's id, so the
// link keeps working if the title is edited later.
export function articleSlug(item) {
  const base = slugify(item.title) || "update";

  return `${base}-${String(item.id).slice(0, 8)}`;
}

export function idPrefixFromSlug(slug) {
  const match = String(slug).match(/([0-9a-f]{8})$/i);

  return match ? match[1].toLowerCase() : null;
}

export function toArticle(item) {
  return {
    id: item.id,
    slug: articleSlug(item),
    title: item.title,
    isoDate: String(item.published_at).slice(0, 10),
    date: formatDate(item.published_at),
    year: new Date(item.published_at).getUTCFullYear(),
    updatedAt: item.updated_at,
    category: NEWS_CATEGORY_LABELS[item.category] || "Organisation",
    excerpt: summarise(item.body),
    author: "JKLF",
    image: item.has_image ? `/api/news-image?id=${item.id}` : null,
    imageAlt: item.image_alt || "",
    featured: Boolean(item.important),
    body: item.body,
  };
}

export async function fetchPublicNews(options = {}) {
  const { request = fetch, maxItems = 100 } = options;
  const response = await rpc(
    supabaseConfig(options.env),
    "public_news",
    { max_items: maxItems },
    request
  );

  if (!response.ok) {
    throw new Error(`News could not be loaded (${response.status}).`);
  }

  const items = await response.json();

  return Array.isArray(items) ? items.map(toArticle) : [];
}

export function findArticle(articles, slug) {
  const prefix = idPrefixFromSlug(slug);

  return prefix
    ? articles.find((article) => article.id.toLowerCase().startsWith(prefix)) || null
    : null;
}

// Storage path of a public update's photo (null if it has none or isn't public)
export async function fetchNewsImagePath(id, options = {}) {
  const { request = fetch } = options;
  const response = await rpc(
    supabaseConfig(options.env),
    "public_news_image",
    { target: id },
    request
  );

  if (!response.ok) {
    return null;
  }

  const path = await response.json();

  return typeof path === "string" && path ? path : null;
}
