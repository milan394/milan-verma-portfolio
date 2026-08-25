import { useInView } from "../hooks/useInView";
import config from "../data/config";
import "./Hero.css";

export default function Hero() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const handleScrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero" ref={ref}>
      <div className="hero__container">
        <div className={`hero__content ${isInView ? "hero__content--visible" : ""}`}>
          <span className="hero__greeting">Hello, I'm</span>
          <h1 className="hero__name">{config.name}</h1>
          <h2 className="hero__title">{config.tagline}</h2>
          <p className="hero__description">{config.heroDescription}</p>

          <div className="hero__cta">
            <button
              className="btn btn--primary"
              onClick={() => handleScrollTo("#projects")}
            >
              View My Projects
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10m0 0L9 4m4 4L9 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <a
              href={config.resumePath}
              download="Milan_Verma_Resume.pdf"
              className="btn btn--secondary"
            >
              Download Resume
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 2v9m0 0L5 8m3 3l3-3M3 13h10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          <div className="hero__social">
            <a
              href={config.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="LinkedIn Profile"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

        <div className={`hero__image-wrapper ${isInView ? "hero__image-wrapper--visible" : ""}`}>
          <div className="hero__image-frame">
            <img
              src={config.profileImage}
              alt={`${config.name} - Frontend Web Developer`}
              className="hero__image"
              loading="eager"
            />
            <div className="hero__image-decoration"></div>
          </div>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <span>Scroll Down</span>
        <div className="hero__scroll-line"></div>
      </div>
    </section>
  );
}
