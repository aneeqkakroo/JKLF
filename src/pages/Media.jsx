import PageHero from "../components/shared/PageHero";

import MediaIntro from "../components/media/MediaIntro";
import MediaArchive from "../components/media/MediaArchive";
import PressResources from "../components/media/PressResources";
import MediaCTA from "../components/media/MediaCTA";

import mediaHero from "../assets/images/media-hero.png";

export default function Media() {
  return (
    <>
      <PageHero
        eyebrow="Media Centre"
        title="Media"
        description="Photographs, video, speeches, interviews, press coverage and downloadable media resources."
        backgroundImage={mediaHero}
      />

      <MediaIntro />

      <MediaArchive />

      <PressResources />

      <MediaCTA />
    </>
  );
}
