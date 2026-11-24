// Serves the photo of a public news update: /api/news-image?id=<update id>.
// Photos live in the app's private "update-images" bucket. The database only
// lets the public sign links for photos of public, published updates, so
// this works for those and nothing else. The address stays the same forever,
// which link previews need; it redirects to a signed link valid for one day.

import {
  fetchNewsImagePath,
  supabaseConfig,
} from "../src/lib/publicNews.js";

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export default async function handler(req, res) {
  const id = typeof req.query.id === "string" ? req.query.id : "";

  if (!UUID.test(id)) {
    res.status(400).send("Invalid image id.");
    return;
  }

  try {
    const path = await fetchNewsImagePath(id);

    if (!path) {
      res.setHeader("Cache-Control", "public, s-maxage=300");
      res.status(404).send("Image not found.");
      return;
    }

    const { url, key } = supabaseConfig();
    const encodedPath = path.split("/").map(encodeURIComponent).join("/");

    const signed = await fetch(
      `${url}/storage/v1/object/sign/update-images/${encodedPath}`,
      {
        method: "POST",
        headers: { apikey: key, "Content-Type": "application/json" },
        // Valid for a day; caches below expire well before the link does
        body: JSON.stringify({ expiresIn: 86400 }),
      }
    );

    const { signedURL } = signed.ok ? await signed.json() : {};

    if (!signedURL) {
      res.status(404).send("Image not found.");
      return;
    }

    // Redirect rather than pass the photo through: app photos can be up to
    // 8 MB, above Vercel's response size limit.
    res.setHeader("Cache-Control", "public, max-age=3600, s-maxage=43200");
    res.redirect(302, `${url}/storage/v1${signedURL}`);
  } catch {
    res.status(502).send("Image could not be loaded.");
  }
}
