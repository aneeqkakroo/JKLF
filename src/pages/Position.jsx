import { ExternalLink } from "lucide-react";

import PageHero from "../components/shared/PageHero";
import { Button } from "../components/ui";

import PositionIntro from "../components/position/PositionIntro";
import CorePrinciples from "../components/position/CorePrinciples";
import PoliticalFramework from "../components/position/PoliticalFramework";
import GovernancePrinciples from "../components/position/GovernancePrinciples";
import PositionTopics from "../components/position/PositionTopics";
import PositionDocuments from "../components/position/PositionDocuments";
import PositionFAQ from "../components/position/PositionFAQ";
import PositionCTA from "../components/position/PositionCTA";

import { constitution } from "../data/constitution";

export default function Position() {
  return (
    <>
      <PageHero
        eyebrow="Our Position"
        title="Our Objective: National Independence"
        description="The Kashmir issue is not a territorial dispute between India and Pakistan. It is the question of the national freedom and reunification of a forcibly divided nation."
        backgroundImage="/heros/ourpositionhero.jpg"
      >
        <Button
          href="#ideology"
          variant="white"
        >
          Our ideology
        </Button>

        <Button
          href={constitution.url}
          target="_blank"
          rel="noreferrer"
          variant="hero-outline"
        >
          Read the Constitution
          <ExternalLink size={16} />
        </Button>
      </PageHero>

      <PositionIntro />

      <CorePrinciples />

      <PoliticalFramework />

      <GovernancePrinciples />

      <PositionTopics />

      <PositionDocuments />

      <PositionFAQ />

      <PositionCTA />
    </>
  );
}
