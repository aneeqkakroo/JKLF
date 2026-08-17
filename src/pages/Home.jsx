// src/pages/Home.jsx

import Hero from "../components/home/Hero";
import Priorities from "../components/home/Priorities";
import WhoWeAre from "../components/home/WhoWeAre";
import Vision from "../components/home/Vision";
import KashmirMap from "../components/home/KashmirMap";
import LatestNews from "../components/home/LatestNews";
import FeaturedIssue from "../components/home/FeaturedIssue";
import HistoryPreview from "../components/home/HistoryPreview";
import ResourcePreview from "../components/home/ResourcePreview";
import InternationalPresence from "../components/home/InternationalPresence";
import Newsletter from "../components/home/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <Priorities />
      <WhoWeAre />
      <Vision />
      <KashmirMap />
      <LatestNews />
      <FeaturedIssue />
      <HistoryPreview />
      <ResourcePreview />
      <InternationalPresence />
      <Newsletter />
    </>
  );
}