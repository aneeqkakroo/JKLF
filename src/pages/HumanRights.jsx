import PageHero from "../components/shared/PageHero";
import HumanRightsIntro from "../components/human-rights/HumanRightsIntro";
import HumanRightsAreas from "../components/human-rights/HumanRightsAreas";
import FeaturedCase from "../components/human-rights/FeaturedCase";
import HumanRightsCases from "../components/human-rights/HumanRightsCases";
import SourceStandards from "../components/human-rights/SourceStandards";
import HumanRightsCTA from "../components/human-rights/HumanRightsCTA";
import humanRightsHero from "../assets/images/human-rights-hero.png";

export default function HumanRights() {
  return (
    <>
      <PageHero eyebrow="Human Rights" title="Human Rights & Documentation" description="Evidence-led reports, case files, legal records and source material concerning human rights and civil liberties in Jammu Kashmir." backgroundImage={humanRightsHero} />
      <HumanRightsIntro />
      <HumanRightsAreas />
      <FeaturedCase />
      <HumanRightsCases />
      <SourceStandards />
      <HumanRightsCTA />
    </>
  );
}
