import config from "../data/config";
import "./Footer.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const handleClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__brand">
            <a
              href="#home"
              className="footer__logo"
              onClick={(e) => handleClick(e, "#home")}
            >
              <span className="footer__logo-text">{config.name.split(" ")[0]}</span>
              <span className="footer__logo-dot">.</span>
            </a>
            <p className="footer__tagline">{config.tagline}</p>
          </div>

          <nav className="footer__nav" aria-label="Footer navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="footer__nav-link"
                onClick={(e) => handleClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="footer__bottom">
          <div className="footer__bottom-left">
            <a
              href={`mailto:${config.email}`}
              className="footer__email"
              aria-label={`Email ${config.email}`}
            >
              {config.email}
            </a>
          </div>

          <div className="footer__bottom-right">
            <a
              href={config.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social"
              aria-label="LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer__copyright">
          <p>&copy; {new Date().getFullYear()} {config.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
