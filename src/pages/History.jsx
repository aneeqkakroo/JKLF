// src/pages/History.jsx

import PageHero from "../components/shared/PageHero";

import HistoryIntro from "../components/history/HistoryIntro";
import HistoryExplorer from "../components/history/HistoryExplorer";
import HistoricalEvents from "../components/history/HistoricalEvents";
import HistoricalDocuments from "../components/history/HistoricalDocuments";
import PeopleInHistory from "../components/history/PeopleInHistory";
import ArchiveExplorer from "../components/history/ArchiveExplorer";
import HistoryCTA from "../components/history/HistoryCTA";

import historyHero from "../assets/images/history-hero.png";

export default function History() {
  return (
    <>
      <PageHero
        eyebrow="History & Archive"
        title="History of Jammu Kashmir & JKLF"
        description="Explore timelines, historical events, political developments, people and primary documents through a structured historical archive."
        backgroundImage={historyHero}
      />

      <HistoryIntro />

      <HistoryExplorer />

      <HistoricalEvents />

      <HistoricalDocuments />

      <PeopleInHistory />

      <ArchiveExplorer />

      <HistoryCTA />
    </>
  );
}