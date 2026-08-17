import PageHero from "../components/shared/PageHero";

import LeadershipIntro from "../components/leadership/LeadershipIntro";
import CurrentLeadership from "../components/leadership/CurrentLeadership";
import OfficeBearers from "../components/leadership/OfficeBearers";
import OrganisationStructure from "../components/leadership/OrganisationStructure";
import HistoricalLeadership from "../components/leadership/HistoricalLeadership";
import FormerLeadership from "../components/leadership/FormerLeadership";
import LeadershipArchive from "../components/leadership/LeadershipArchive";
import LeadershipCTA from "../components/leadership/LeadershipCTA";

import leadershipHero from "../assets/images/leadership-hero.png";

export default function Leadership() {
  return (
    <>
      <PageHero
        eyebrow="Leadership & People"
        title="Leadership of JKLF"
        description="Explore current organisational leadership, office bearers, historical figures and the wider leadership archive."
        backgroundImage={leadershipHero}
      />

      <LeadershipIntro />

      <CurrentLeadership />

      <OfficeBearers />

      <OrganisationStructure />

      <HistoricalLeadership />

      <FormerLeadership />

      <LeadershipArchive />

      <LeadershipCTA />
    </>
  );
}