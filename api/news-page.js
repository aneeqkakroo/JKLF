// Serves /news and /news/:slug (see vercel.json). WhatsApp, Facebook and X
// read a page's <head> without running JavaScript, so this fills in the
// article's title, summary and photo before sending the normal site page.
// New articles from the app get correct link previews immediately.

import {
  fetchPublicNews,
  findArticle,
} from "../src/lib/publicNews.js";

const SITE_URL = "https://www.jklf.org";
const DEFAULT_IMAGE = `${SITE_URL}/favicon-512.png`;

let template = null;

const escape = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

async function loadTemplate(host) {
  if (!template) {
    const response = await fetch(`https://${host}/index.html`);

    if (!response.ok) {
      throw new Error(`index.html returned ${response.status}`);
    }

    template = await response.text();
  }

  return template;
}

function headTags({ title, description, path, image, type }) {
  return [
    `<title>${escape(`${title} | JKLF`)}</title>`,
    `<meta name="description" content="${escape(description)}" />`,
    `<link rel="canonical" href="${SITE_URL}${path}" />`,
    `<meta property="og:site_name" content="Jammu Kashmir Liberation Front" />`,
    `<meta property="og:type" content="${type}" />`,
    `<meta property="og:title" content="${escape(title)}" />`,
    `<meta property="og:description" content="${escape(description)}" />`,
    `<meta property="og:url" content="${SITE_URL}${path}" />`,
    `<meta property="og:image" content="${escape(image)}" />`,
    `<meta name="twitter:card" content="${image === DEFAULT_IMAGE ? "summary" : "summary_large_image"}" />`,
  ].join("\n    ");
}

export default async function handler(req, res) {
  const slug = typeof req.query.slug === "string" ? req.query.slug : "";

  let page = {
    title: "News & Statements",
    description:
      "Official statements, press releases and notices from the Jammu Kashmir Liberation Front.",
    path: "/news",
    image: DEFAULT_IMAGE,
    type: "website",
  };

  try {
    const html = await loadTemplate(req.headers.host);

    if (slug) {
      const article = findArticle(await fetchPublicNews(), slug);

      if (article) {
        page = {
          title: article.title,
          description: article.excerpt || article.title,
          path: `/news/${article.slug}`,
          image: article.image ? `${SITE_URL}${article.image}` : DEFAULT_IMAGE,
          type: "article",
        };
      }
    }

    res.setHeader("Content-Type", "text/html; charset=utf-8");
    // Edge cache for 5 minutes so new or edited articles show up quickly
    res.setHeader("Cache-Control", "public, s-maxage=300, stale-while-revalidate=600");
    res.status(200).send(html.replace(/<title>[\s\S]*?<\/title>/, headTags(page)));
  } catch {
    // Fall back to the plain site page; the browser app still loads the article.
    try {
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.setHeader("Cache-Control", "no-store");
      res.status(200).send(await loadTemplate(req.headers.host));
    } catch {
      res.status(502).send("The page could not be loaded. Please refresh.");
    }
  }
}
