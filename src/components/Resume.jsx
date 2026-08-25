import { useInView } from "../hooks/useInView";
import config from "../data/config";
import "./Resume.css";

export default function Resume() {
  const [ref, isInView] = useInView({ threshold: 0.15 });

  return (
    <section id="resume" className="resume" ref={ref}>
      <div className="section__container">
        <div className={`section__header ${isInView ? "section__header--visible" : ""}`}>
          <span className="section__label">Resume</span>
          <h2 className="section__title">My Professional Profile</h2>
        </div>

        <div className={`resume__content ${isInView ? "resume__content--visible" : ""}`}>
          <div className="resume__card">
            <div className="resume__icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>

            <h3 className="resume__title">Download My Resume</h3>
            <p className="resume__description">
              Get a detailed overview of my education, skills, projects, and
              technical expertise. Feel free to reach out for opportunities.
            </p>

            <div className="resume__actions">
              <a
                href={config.resumePath}
                download="Milan_Verma_Resume.pdf"
                className="btn btn--primary"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M8 2v9m0 0L5 8m3 3l3-3M3 13h10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Download Resume
              </a>
              <a
                href={config.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M1 8s3-6 7-6 7 6 7 6-3 6-7 6-7-6-7-6z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
