import { useInView } from "../hooks/useInView";
import "./Education.css";

export default function Education() {
  const [ref, isInView] = useInView({ threshold: 0.15 });

  return (
    <section id="education" className="education" ref={ref}>
      <div className="section__container">
        <div className={`section__header ${isInView ? "section__header--visible" : ""}`}>
          <span className="section__label">Education</span>
          <h2 className="section__title">Academic Background</h2>
        </div>

        <div className={`education__timeline ${isInView ? "education__timeline--visible" : ""}`}>
          <div className="education__item">
            <div className="education__marker">
              <div className="education__dot"></div>
              <div className="education__line"></div>
            </div>
            <div className="education__content">
              <div className="education__badge">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <div className="education__details">
                <span className="education__status education__status--current">
                  Currently Pursuing
                </span>
                <h3 className="education__degree">B.Sc. Statistics</h3>
                <p className="education__school">
                  Maharishi Dayanand University, Rohtak
                </p>
                <p className="education__year">3rd Year</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
