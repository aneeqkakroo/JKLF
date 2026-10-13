import PageHero from "../components/shared/PageHero";

import LeadershipIntro from "../components/leadership/LeadershipIntro";
import CurrentLeadership from "../components/leadership/CurrentLeadership";
import OrganisationStructure from "../components/leadership/OrganisationStructure";
import HistoricalLeadership from "../components/leadership/HistoricalLeadership";
import OrganisationalLeadership from "../components/leadership/OrganisationalLeadership";
import LeadershipArchive from "../components/leadership/LeadershipArchive";
import LeadershipCTA from "../components/leadership/LeadershipCTA";

import leadershipHero from "../assets/images/leadership-hero.png";

export default function Leadership() {
  return (
    <>
      <PageHero
        eyebrow="Leadership & People"
        title="Leadership of JKLF"
        description="Explore JKLF's current leadership, its Central Committee and six zones, historical figures and the wider leadership archive."
        backgroundImage={leadershipHero}
      />

      <LeadershipIntro />

      <CurrentLeadership />

      <OrganisationStructure />

      <OrganisationalLeadership />

      <HistoricalLeadership />

      <LeadershipArchive />

      <LeadershipCTA />
    </>
  );
}