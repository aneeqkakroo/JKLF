import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

import { Container } from "./ui";

import "./Header.css";

const navigation = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Our Position", path: "/position" },
  { label: "History", path: "/history" },
  { label: "Leadership", path: "/leadership" },
  { label: "News", path: "/news" },
  { label: "Documents", path: "/documents" },
  { label: "Human Rights", path: "/human-rights" },
  { label: "Media", path: "/media" },
  { label: "Contact", path: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <Container className="header-container">

        <NavLink to="/" className="site-logo">
          <div className="site-logo-mark">
            JKLF
          </div>

          <div className="site-logo-text">
            <strong>Jammu Kashmir</strong>
            <span>Liberation Front</span>
          </div>
        </NavLink>

        <nav
          className={`site-navigation ${
            menuOpen ? "site-navigation--open" : ""
          }`}
        >
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "nav-link nav-link--active" : "nav-link"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <Menu size={25} />
        </button>

      </Container>
    </header>
  );
}