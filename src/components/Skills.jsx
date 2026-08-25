import { useInView } from "../hooks/useInView";
import { skillCategories } from "../data/skills";
import SkillIcons from "./SkillIcons";
import "./Skills.css";

export default function Skills() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="section__container">
        <div className={`section__header ${isInView ? "section__header--visible" : ""}`}>
          <span className="section__label">Skills</span>
          <h2 className="section__title">My Technical Toolkit</h2>
        </div>

        <div className="skills__grid">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className={`skills__category ${
                isInView ? "skills__category--visible" : ""
              }`}
              style={{ transitionDelay: `${0.15 * catIndex}s` }}
            >
              <h3 className="skills__category-title">{category.title}</h3>
              <div className="skills__list">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="skills__item"
                    style={{
                      transitionDelay: `${0.05 * (catIndex * 4 + skillIndex)}s`,
                    }}
                  >
                    <div className="skills__icon">
                      {SkillIcons[skill.icon] || (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 8v8M8 12h8" />
                        </svg>
                      )}
                    </div>
                    <span className="skills__name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
