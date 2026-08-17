import { Link } from "react-router-dom";

import { Container } from "./ui";

import "./Footer.css";

const footerLinks = {
  Organisation: [
    ["About JKLF", "/about"],
    ["Our Position", "/position"],
    ["Leadership", "/leadership"],
    ["History", "/history"],
  ],

  Resources: [
    ["News & Statements", "/news"],
    ["Documents", "/documents"],
    ["Human Rights", "/human-rights"],
    ["Media Centre", "/media"],
  ],

  Information: [
    ["Contact", "/contact"],
    ["Privacy Policy", "/privacy"],
    ["Cookie Policy", "/cookies"],
    ["Corrections Policy", "/corrections"],
  ],
};

export default function Footer() {
  return (
    <footer className="site-footer">
      <Container>

        <div className="footer-main">

          <div className="footer-brand">
            <div className="footer-logo">
              JKLF
            </div>

            <h3>Jammu Kashmir Liberation Front</h3>

            <p>
              Information, history, documentation and political
              publications relating to Jammu Kashmir and JKLF.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div className="footer-links" key={title}>
              <h4>{title}</h4>

              {links.map(([label, url]) => (
                <Link key={url} to={url}>
                  {label}
                </Link>
              ))}
            </div>
          ))}

        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Jammu Kashmir Liberation Front
          </span>

          <div className="footer-languages">
            <span>English</span>
            <span>اردو</span>
            <span>کشمیری</span>
          </div>
        </div>

      </Container>
    </footer>
  );
}