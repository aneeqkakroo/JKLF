import { Container } from "../ui";

import "./about.css";

const links = [
  {
    label: "Who We Are",
    id: "who-we-are",
  },
  {
    label: "Origins",
    id: "origins",
  },
  {
    label: "Political Philosophy",
    id: "philosophy",
  },
  {
    label: "Political Transition",
    id: "political-transition",
  },
  {
    label: "Organisation",
    id: "organisation",
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