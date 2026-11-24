# News on jklf.org

News is written in the **JKLF app (Nazm)**, not in this repository.

## Publishing

In the app, an admin creates an update and sets:

| In the app | On jklf.org/news |
|---|---|
| Visibility: **Public** | Shown on the website (Members-only updates never are) |
| State: **Published** | Drafts and archived updates are hidden |
| Audience: **everyone** | Updates for one zone, branch or unit are hidden |
| Category | Press Release, Notice or Organisation |
| **Important** | Shown as the large lead story |
| Title, text, photo | The article; its first paragraph is the summary |

The article appears on the website as soon as someone opens the News page.
Deleting it in the app, or making it Members-only, removes it from the website.

Article text can use simple formatting: a blank line between paragraphs,
`**bold**`, `- ` for bullet points, and links written as `[words](https://…)`.

Web addresses look like `jklf.org/news/statement-on-arrests-3f2a1b9c`. The ending
is part of the update's id, so links keep working if the title is edited.

## How it works

- `src/lib/publicNews.js` calls the Supabase functions `public_news` and
  `public_news_image` with the public (publishable) key. They come from the Nazm
  migration `public_website_news` and return only public, published updates.
- `api/news-page.js` serves `/news` and `/news/:slug` with the article's title,
  summary and photo filled in, so links shared on WhatsApp, Facebook and X show
  a proper preview. It caches for 5 minutes.
- `api/news-image.js` serves photos from the app's private `update-images`
  bucket at a permanent address, for public updates only.
- The sitemap picks up articles at each deployment.
