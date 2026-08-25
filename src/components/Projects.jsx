import { useState } from "react";
import { useInView } from "../hooks/useInView";
import projects from "../data/projects";
import "./Projects.css";

export default function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.05 });
  const [selectedProject, setSelectedProject] = useState(null);
  const [expandedCaseStudy, setExpandedCaseStudy] = useState(null);

  const openModal = (project) => {
    if (project.isCaseStudy) {
      setExpandedCaseStudy(project);
      document.body.style.overflow = "hidden";
    } else {
      setSelectedProject(project);
      document.body.style.overflow = "hidden";
    }
  };

  const closeModal = () => {
    setSelectedProject(null);
    setExpandedCaseStudy(null);
    document.body.style.overflow = "";
  };

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="section__container">
        <div className={`section__header ${isInView ? "section__header--visible" : ""}`}>
          <span className="section__label">Projects</span>
          <h2 className="section__title">Featured Work</h2>
        </div>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`projects__card ${
                project.isCaseStudy ? "projects__card--featured" : ""
              } ${isInView ? "projects__card--visible" : ""}`}
              style={{ transitionDelay: `${0.1 * index}s` }}
              onClick={() => openModal(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openModal(project);
                }
              }}
              aria-label={`View details for ${project.title}`}
            >
              {project.isCaseStudy && (
                <div className="projects__card-badge">Case Study</div>
              )}

              <div className="projects__card-header">
                <div className="projects__card-icon">
                  {project.isCaseStudy ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                    </svg>
                  ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
                    </svg>
                  )}
                </div>
                <div className="projects__card-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projects__card-link"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`GitHub - ${project.title}`}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projects__card-link"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`Live Demo - ${project.title}`}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              <h3 className="projects__card-title">{project.title}</h3>
              <p className="projects__card-description">
                {project.shortDescription || project.description}
              </p>

              <div className="projects__card-tech">
                {project.technologies.slice(0, project.isCaseStudy ? 6 : undefined).map((tech) => (
                  <span key={tech} className="projects__tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              {project.isCaseStudy && (
                <div className="projects__card-cta">
                  <span className="projects__card-view-btn">
                    Read Case Study
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Regular Project Modal */}
      {selectedProject && (
        <div className="projects__modal-overlay" onClick={closeModal}>
          <div
            className="projects__modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-label={selectedProject.title}
          >
            <button
              className="projects__modal-close"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="projects__modal-header">
              <h3 className="projects__modal-title">{selectedProject.title}</h3>
              <div className="projects__modal-links">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--secondary btn--sm"
                  >
                    GitHub
                  </a>
                )}
                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--primary btn--sm"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>

            <p className="projects__modal-description">{selectedProject.description}</p>

            <div className="projects__modal-section">
              <h4>Technologies Used</h4>
              <div className="projects__modal-tech">
                {selectedProject.technologies.map((tech) => (
                  <span key={tech} className="projects__tech-tag projects__tech-tag--lg">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="projects__modal-section">
              <h4>Key Features</h4>
              <ul className="projects__modal-features">
                {selectedProject.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Case Study Modal */}
      {expandedCaseStudy && expandedCaseStudy.caseStudy && (
        <div className="projects__casestudy-overlay" onClick={closeModal}>
          <div
            className="projects__casestudy"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-label={`${expandedCaseStudy.title} - Case Study`}
          >
            <button
              className="projects__casestudy-close"
              onClick={closeModal}
              aria-label="Close case study"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Header */}
            <div className="projects__casestudy-header">
              <span className="projects__casestudy-badge">Case Study</span>
              <h2 className="projects__casestudy-title">{expandedCaseStudy.title}</h2>
              <p className="projects__casestudy-subtitle">{expandedCaseStudy.shortDescription}</p>
              <div className="projects__casestudy-tech-row">
                {expandedCaseStudy.technologies.map((tech) => (
                  <span key={tech} className="projects__tech-tag projects__tech-tag--lg">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="projects__casestudy-body">
              {/* 1. The Problem */}
              <section className="projects__casestudy-section">
                <div className="projects__casestudy-section-header">
                  <span className="projects__casestudy-section-num">01</span>
                  <h3>The Problem</h3>
                </div>
                <p>{expandedCaseStudy.caseStudy.problem}</p>
              </section>

              {/* 2. Why I Built It */}
              <section className="projects__casestudy-section">
                <div className="projects__casestudy-section-header">
                  <span className="projects__casestudy-section-num">02</span>
                  <h3>Why I Built It</h3>
                </div>
                <p>{expandedCaseStudy.caseStudy.whyBuilt}</p>
              </section>

              {/* 3. The Solution */}
              <section className="projects__casestudy-section">
                <div className="projects__casestudy-section-header">
                  <span className="projects__casestudy-section-num">03</span>
                  <h3>The Solution</h3>
                </div>
                {expandedCaseStudy.caseStudy.solution.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </section>

              {/* 4. Challenges */}
              <section className="projects__casestudy-section">
                <div className="projects__casestudy-section-header">
                  <span className="projects__casestudy-section-num">04</span>
                  <h3>Challenges I Faced</h3>
                </div>
                <ul className="projects__casestudy-list">
                  {expandedCaseStudy.caseStudy.challenges.map((challenge, i) => (
                    <li key={i}>{challenge}</li>
                  ))}
                </ul>
              </section>

              {/* 5. How I Solved Them */}
              <section className="projects__casestudy-section">
                <div className="projects__casestudy-section-header">
                  <span className="projects__casestudy-section-num">05</span>
                  <h3>How I Solved Them</h3>
                </div>
                <div className="projects__casestudy-solutions">
                  {expandedCaseStudy.caseStudy.challenges.map((challenge, i) => (
                    <div key={i} className="projects__casestudy-solution">
                      <div className="projects__casestudy-solution-challenge">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
                          <path d="M8 5v3.5M8 10.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        <span>{challenge}</span>
                      </div>
                      <div className="projects__casestudy-solution-answer">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
                          <path d="M5.5 8l2 2 3.5-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>{expandedCaseStudy.caseStudy.solutions[i]}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* 6. Technologies */}
              <section className="projects__casestudy-section">
                <div className="projects__casestudy-section-header">
                  <span className="projects__casestudy-section-num">06</span>
                  <h3>Technologies Used</h3>
                </div>
                <div className="projects__casestudy-tech-grid">
                  {expandedCaseStudy.caseStudy.technologies_detail.map((tech) => (
                    <div key={tech.name} className="projects__casestudy-tech-card">
                      <h4>{tech.name}</h4>
                      <p>{tech.role}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 7. Key Learnings */}
              <section className="projects__casestudy-section">
                <div className="projects__casestudy-section-header">
                  <span className="projects__casestudy-section-num">07</span>
                  <h3>Key Learnings</h3>
                </div>
                <p>{expandedCaseStudy.caseStudy.learnings}</p>
              </section>

              {/* 8. Outcome */}
              <section className="projects__casestudy-section projects__casestudy-outcome">
                <div className="projects__casestudy-section-header">
                  <span className="projects__casestudy-section-num">08</span>
                  <h3>Outcome</h3>
                </div>
                <p>{expandedCaseStudy.caseStudy.outcome}</p>
              </section>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
