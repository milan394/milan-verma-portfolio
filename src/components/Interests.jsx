import { useInView } from "../hooks/useInView";
import config from "../data/config";
import "./Interests.css";

export default function Interests() {
  const [ref, isInView] = useInView({ threshold: 0.15 });

  return (
    <section id="interests" className="interests" ref={ref}>
      <div className="section__container">
        <div className={`section__header ${isInView ? "section__header--visible" : ""}`}>
          <span className="section__label">Interests</span>
          <h2 className="section__title">What Drives Me</h2>
        </div>

        <div className={`interests__grid ${isInView ? "interests__grid--visible" : ""}`}>
          {config.interests.map((interest, index) => (
            <div
              key={interest}
              className="interests__item"
              style={{ transitionDelay: `${0.06 * index}s` }}
            >
              <div className="interests__dot"></div>
              <span>{interest}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
