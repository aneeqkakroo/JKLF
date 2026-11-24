import NewsIntro from "../components/news/NewsIntro";
import NewsMagazine from "../components/news/NewsMagazine";
import NewsArchiveCTA from "../components/news/NewsArchiveCTA";

import useNews from "../data/useNews";
import useDocumentTitle from "../lib/useDocumentTitle";

export default function News() {
  useDocumentTitle("News & Statements");

  const { news, status } = useNews();

  return (
    <>
      <NewsIntro latest={news[0]} />

      <NewsMagazine
        news={news}
        status={status}
      />

      <NewsArchiveCTA />
    </>
  );
}
