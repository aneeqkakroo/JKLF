// Builds public/sitemap.xml from the routes in src/App.jsx and the data
// files that back the detail pages. Runs automatically before `npm run build`.

import { writeFileSync } from "node:fs";

import { positionTopics } from "../src/data/positions.js";
import { allLeadershipProfiles } from "../src/data/leadership.js";
import { documents } from "../src/data/documents.js";

const SITE_URL = "https://jklf.org";

// /verify-membership is left out on purpose: it is served with noindex.
const staticPages = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/about", priority: "0.9", changefreq: "monthly" },
  { path: "/position", priority: "0.9", changefreq: "monthly" },
  { path: "/history", priority: "0.8", changefreq: "monthly" },
  { path: "/leadership", priority: "0.8", changefreq: "monthly" },
  { path: "/news", priority: "0.8", changefreq: "weekly" },
  { path: "/documents", priority: "0.8", changefreq: "monthly" },
  { path: "/human-rights", priority: "0.7", changefreq: "monthly" },
  { path: "/media", priority: "0.6", changefreq: "monthly" },
  { path: "/contact", priority: "0.5", changefreq: "yearly" },
];

// Placeholder entries (e.g. "memorandum-example") are not real pages yet.
const isPlaceholder = (id) => id.endsWith("-example");

const detailPages = [
  ...positionTopics.map((item) => ({
    path: `/position/${item.id}`,
    priority: "0.7",
    changefreq: "monthly",
  })),
  ...allLeadershipProfiles.map((item) => ({
    path: `/leadership/${item.id}`,
    priority: "0.6",
    changefreq: "monthly",
  })),
  ...documents
    .filter((item) => !isPlaceholder(item.id))
    .map((item) => ({
      path: `/documents/${item.id}`,
      priority: "0.6",
      changefreq: "yearly",
    })),
];

const lastmod = new Date().toISOString().slice(0, 10);

const urls = [...staticPages, ...detailPages]
  .map(
    ({ path, priority, changefreq }) => `  <url>
    <loc>${SITE_URL}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

writeFileSync(new URL("../public/sitemap.xml", import.meta.url), xml);

console.log(`sitemap.xml written with ${staticPages.length + detailPages.length} URLs`);
