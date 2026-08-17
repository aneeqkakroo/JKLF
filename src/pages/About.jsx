import PageHero from "../components/shared/PageHero";

import AboutNav from "../components/about/AboutNav";
import WhoWeAre from "../components/about/WhoWeAre";
import Origins from "../components/about/Origins";
import PoliticalPhilosophy from "../components/about/PoliticalPhilosophy";
import PoliticalTransition from "../components/about/PoliticalTransition";
import Organisation from "../components/about/Organisation";
import KeyFigures from "../components/about/KeyFigures";
import Constitution from "../components/about/Constitution";
import AboutFAQ from "../components/about/AboutFAQ";
import AboutCTA from "../components/about/AboutCTA";

import aboutHero from "../assets/images/about-hero.png";

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About JKLF"
        title="Jammu Kashmir Liberation Front"
        description="Explore the organisation's history, political philosophy, development, structure and published constitutional and political material."
        backgroundImage={aboutHero}
      />

      <AboutNav />

      <WhoWeAre />

      <Origins />

      <PoliticalPhilosophy />

      <PoliticalTransition />

      <Organisation />

      <KeyFigures />

      <Constitution />

      <AboutFAQ />

      <AboutCTA />
    </>
  );
}