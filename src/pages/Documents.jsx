import PageHero from "../components/shared/PageHero";

import DocumentsIntro from "../components/documents/DocumentsIntro";
import FeaturedDocuments from "../components/documents/FeaturedDocuments";
import DocumentsArchive from "../components/documents/DocumentsArchive";
import DocumentCollections from "../components/documents/DocumentCollections";
import DocumentsCTA from "../components/documents/DocumentsCTA";

import documentsHero from "../assets/images/documents-hero.png";

export default function Documents() {
  return (
    <>
      <PageHero
        eyebrow="Research & Documents"
        title="Digital Document Archive"
        description="Search political documents, constitutions, resolutions, legal material, reports, correspondence and historical records."
        backgroundImage={documentsHero}
      />

      <DocumentsIntro />

      <FeaturedDocuments />

      <DocumentsArchive />

      <DocumentCollections />

      <DocumentsCTA />
    </>
  );
}
