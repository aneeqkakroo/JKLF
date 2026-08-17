import PageHero from "../components/shared/PageHero";

import NewsIntro from "../components/news/NewsIntro";
import FeaturedNews from "../components/news/FeaturedNews";
import NewsArchive from "../components/news/NewsArchive";
import NewsArchiveCTA from "../components/news/NewsArchiveCTA";

import {
  news,
} from "../data/News";

import newsHero from "../assets/images/news-hero.png";

export default function News() {
  const featuredArticle =
    news.find(
      (article) => article.featured
    ) || news[0];

  return (
    <>
      <PageHero
        eyebrow="Newsroom"
        title="News & Statements"
        description="Official statements, press releases, speeches, announcements and organisational publications."
        backgroundImage={newsHero}
      />

      <NewsIntro />

      <FeaturedNews
        article={featuredArticle}
      />

      <NewsArchive />

      <NewsArchiveCTA />
    </>
  );
}
