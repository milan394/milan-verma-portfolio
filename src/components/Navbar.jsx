import { useState, useEffect } from "react";
import { useScrollDirection } from "../hooks/useScrollDirection";
import config from "../data/config";
import "./Navbar.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollDirection, scrollY } = useScrollDirection();

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`navbar ${scrollY > 50 ? "navbar--scrolled" : ""} ${
        scrollDirection === "down" && scrollY > 300 ? "navbar--hidden" : ""
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="navbar__container">
        <a
          href="#home"
          className="navbar__logo"
          onClick={(e) => handleNavClick(e, "#home")}
          aria-label={`${config.name} - Home`}
        >
          <span className="navbar__logo-text">{config.name.split(" ")[0]}</span>
          <span className="navbar__logo-dot">.</span>
        </a>

        <ul className={`navbar__links ${isOpen ? "navbar__links--open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`navbar__link ${
                  activeSection === link.href.replace("#", "")
                    ? "navbar__link--active"
                    : ""
                }`}
                onClick={(e) => handleNavClick(e, link.href)}
                aria-current={
                  activeSection === link.href.replace("#", "") ? "true" : undefined
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`navbar__hamburger ${isOpen ? "navbar__hamburger--open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
