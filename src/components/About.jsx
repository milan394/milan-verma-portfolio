import { useInView } from "../hooks/useInView";
import config from "../data/config";
import "./About.css";

export default function About() {
  const [ref, isInView] = useInView({ threshold: 0.15 });

  return (
    <section id="about" className="about" ref={ref}>
      <div className="section__container">
        <div className={`section__header ${isInView ? "section__header--visible" : ""}`}>
          <span className="section__label">About Me</span>
          <h2 className="section__title">
            Get to know me
          </h2>
        </div>

        <div className={`about__content ${isInView ? "about__content--visible" : ""}`}>
          <div className="about__text">
            <p className="about__description">{config.aboutDescription}</p>

            <div className="about__facts">
              {config.quickFacts.map((fact, index) => (
                <div
                  key={fact.label}
                  className="about__fact"
                  style={{ transitionDelay: `${0.1 * (index + 1)}s` }}
                >
                  <span className="about__fact-label">{fact.label}</span>
                  <span className="about__fact-value">{fact.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about__visual">
            <div className="about__stats">
              <div className="about__stat">
                <span className="about__stat-number">3+</span>
                <span className="about__stat-label">Projects Completed</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number">10+</span>
                <span className="about__stat-label">Skills Learned</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
