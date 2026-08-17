import PageHero from "../components/shared/PageHero";

import ContactIntro from "../components/contact/ContactIntro";
import ContactForm from "../components/contact/ContactForm";
import ContactInformation from "../components/contact/ContactInformation";
import ContactCTA from "../components/contact/ContactCTA";

import contactHero from "../assets/images/contact-hero.png";

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact JKLF"
        description="General, media, research, archive, international and website enquiries."
        backgroundImage={contactHero}
      />

      <ContactIntro />

      <ContactForm />

      <ContactInformation />

      <ContactCTA />
    </>
  );
}
