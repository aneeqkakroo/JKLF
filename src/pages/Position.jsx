import PageHero from "../components/shared/PageHero";

import PositionIntro from "../components/position/PositionIntro";
import CorePrinciples from "../components/position/CorePrinciples";
import PositionTopics from "../components/position/PositionTopics";
import PoliticalFramework from "../components/position/PoliticalFramework";
import GovernancePrinciples from "../components/position/GovernancePrinciples";
import PositionDocuments from "../components/position/PositionDocuments";
import PositionFAQ from "../components/position/PositionFAQ";
import PositionCTA from "../components/position/PositionCTA";

import positionHero from "../assets/images/position-hero.png";

export default function Position() {
  return (
    <>
      <PageHero
        eyebrow="Our Position"
        title="Political Position & Programme"
        description="Explore JKLF's published political principles, constitutional ideas and positions concerning the future of Jammu Kashmir."
        backgroundImage={positionHero}
      />

      <PositionIntro />

      <CorePrinciples />

      <PositionTopics />

      <PoliticalFramework />

      <GovernancePrinciples />

      <PositionDocuments />

      <PositionFAQ />

      <PositionCTA />
    </>
  );
}