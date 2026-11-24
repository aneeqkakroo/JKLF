// Serves the photo of a public news update: /api/news-image?id=<update id>.
// Photos live in the app's private "update-images" bucket. The database only
// lets the public sign links for photos of public, published updates, so
// this works for those and nothing else. The address stays the same forever,
// which link previews need, while the signed link behind it is short-lived.

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
        body: JSON.stringify({ expiresIn: 300 }),
      }
    );

    const { signedURL } = signed.ok ? await signed.json() : {};

    if (!signedURL) {
      res.status(404).send("Image not found.");
      return;
    }

    const image = await fetch(`${url}/storage/v1${signedURL}`);

    if (!image.ok) {
      res.status(502).send("Image could not be loaded.");
      return;
    }

    res.setHeader("Content-Type", image.headers.get("content-type") || "image/jpeg");
    // Browsers keep it for an hour, Vercel's edge for a day
    res.setHeader("Cache-Control", "public, max-age=3600, s-maxage=86400");
    res.status(200).send(Buffer.from(await image.arrayBuffer()));
  } catch {
    res.status(502).send("Image could not be loaded.");
  }
}
