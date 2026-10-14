import { Container } from "../ui";

import "./about.css";

const links = [
  {
    label: "Who We Are",
    id: "who-we-are",
  },
  {
    label: "What We Stand For",
    id: "philosophy",
  },
  {
    label: "Our Story",
    id: "origins",
  },
  {
    label: "Organisation",
    id: "organisation",
  },
  {
    label: "Our Flag",
    id: "flag",
  },
  {
    label: "Key Figures",
    id: "key-figures",
  },
  {
    label: "Constitution",
    id: "constitution",
  },
  {
    label: "FAQ",
    id: "faq",
  },
];

export default function AboutNav() {
  return (
    <div className="about-nav">

      <Container>
        <nav
          className="about-nav__inner"
          aria-label="About page navigation"
        >
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </Container>

    </div>
  );
}
