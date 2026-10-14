import { socialLinks } from "../data/social";

import SocialIcon from "./SocialIcon";

import "./SocialLinks.css";

// Compact row of social icons, used in the footer, hero and contact page.
export default function SocialLinks({
  className = "",
  size = 18,
}) {
  return (
    <ul className={`social-links ${className}`}>
      {socialLinks.map((link) => (
        <li key={link.id}>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`JKLF on ${link.name}`}
            title={link.name}
          >
            <SocialIcon
              id={link.id}
              size={size}
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
