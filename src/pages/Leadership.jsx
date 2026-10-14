import LeadershipHero from "../components/leadership/LeadershipHero";
import LeadershipIntro from "../components/leadership/LeadershipIntro";
import CurrentLeadership from "../components/leadership/CurrentLeadership";
import OrganisationStructure from "../components/leadership/OrganisationStructure";
import HistoricalLeadership from "../components/leadership/HistoricalLeadership";
import OrganisationalLeadership from "../components/leadership/OrganisationalLeadership";
import LeadershipArchive from "../components/leadership/LeadershipArchive";
import LeadershipCTA from "../components/leadership/LeadershipCTA";

export default function Leadership() {
  return (
    <>
      <LeadershipHero />

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