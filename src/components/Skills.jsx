import React from 'react';
import styles from './Skills.module.css';

const skillCategories = [
  {
    title: "Game Development",
    skills: ["Unity", "C#", "JavaScript", "Node.js"]
  },
  {
    title: "Multiplayer Networking",
    skills: ["PUN2", "Mirror", "FishNet"]
  },
  {
    title: "Backend & Database",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "RESTful API"]
  },
  {
    title: "Tools & Workflow",
    skills: ["Git / GitHub", "Plastic SCM", "Jira", "Figma", "Agile"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className={styles.skillsSection}>
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className={styles.grid}>
          {skillCategories.map((category, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <div className={styles.skillList}>
                {category.skills.map((skill, idx) => (
                  <span key={idx} className={styles.skillTag}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
