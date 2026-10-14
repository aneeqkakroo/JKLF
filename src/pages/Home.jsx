import Hero from "../components/home/Hero";
import WhoWeAre from "../components/home/WhoWeAre";
import Vision from "../components/home/Vision";
import KashmirMap from "../components/home/KashmirMap";
import LeadershipPreview from "../components/home/LeadershipPreview";
import FeaturedIssue from "../components/home/FeaturedIssue";
import HistoryPreview from "../components/home/HistoryPreview";
import InternationalPresence from "../components/home/InternationalPresence";
import LatestNews from "../components/home/LatestNews";
import ResourcePreview from "../components/home/ResourcePreview";
import FollowUs from "../components/home/FollowUs";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Vision />
      <KashmirMap />
      <LeadershipPreview />
      <FeaturedIssue />
      <InternationalPresence />
      <HistoryPreview />
      <LatestNews />
      <ResourcePreview />
      <FollowUs />
    </>
  );
}
