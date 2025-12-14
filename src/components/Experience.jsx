import React from 'react';
import styles from './Experience.module.css';
import { ExternalLink } from 'lucide-react';

import outlandersSurviveImg from '../assets/outlanders-survive.jpg';
import outlandersMmoImg from '../assets/outlanders-mmo.png';
import fallRaceImg from '../assets/fall-race.jpg';
import superBounceImg from '../assets/super-bounce.jpg';

const experiences = [
  {
    role: "Game Developer",
    company: "KOS Design",
    period: "May 2022 – May 2025",
    description: "Developed and maintained core systems for multiple titles including MMOs and Survival games.",
    projects: [
      {
        name: "Outlanders Survive",
        desc: "Survival Multiplayer Game",
        image: outlandersSurviveImg,
        link: "https://outlanders.com/",
        details: [
          "Developed and maintained core movement, combat, and animation systems",
          "Implemented player–server synchronization for multiplayer gameplay"
        ]
      },
      {
        name: "Outlanders MMO",
        desc: "Massively Multiplayer Online Project",
        image: outlandersMmoImg,
        links: [
          { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.outlanders.outlanders" },
          { label: "App Store", url: "https://apps.apple.com/us/app/outlanders-mmo/id6746841661" }
        ],
        details: [
          "Developed core movement, combat, and animation systems",
          "Integrated Vivox service for in-game chat system",
          "Designed and implemented chat system with UI, emoji support, and chat filtering",
          "Developed Friend System including Friend UI for player interactions",
          "Implemented player skill system (active & passive abilities)",
          "Implemented player–server synchronization for multiplayer gameplay"
        ]
      },
      {
        name: "Fall Race",
        desc: "Casual Party Game",
        image: fallRaceImg,
        link: "https://fallrace.com/",
        details: [
          "Developed character movement and animation systems",
          "Implemented API controller to connect with backend for player data"
        ]
      },
      {
        name: "Super Bounce",
        desc: "Mobile Arcade Game",
        image: superBounceImg,
        link: "https://www.nakamoto.games/play-to-earn/super-bounce",
        details: [
          "Adapted assets from Unity Asset Store to enhance and develop the game",
          "Implemented save score system connected to backend for persistent player data"
        ]
      }
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className={styles.experienceSection}>
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.header}>
                <h3 className={styles.role}>{exp.role}</h3>
                <span className={styles.company}>{exp.company}</span>
                <span className={styles.period}>{exp.period}</span>
              </div>
              <p className={styles.description}>{exp.description}</p>
              
              <div className={styles.projects}>
                <h4 className={styles.projectsTitle}>Key Projects:</h4>
                <div className={styles.projectGrid}>
                  {exp.projects.map((project, idx) => (
                    <div key={idx} className={styles.projectCard}>
                      
                      {project.image && (
                         <div className={styles.imageContainer}>
                           {project.link ? (
                             <a href={project.link} target="_blank" rel="noopener noreferrer">
                               <img src={project.image} alt={project.name} className={styles.projectImage} />
                             </a>
                           ) : (
                             <img src={project.image} alt={project.name} className={styles.projectImage} />
                           )}
                         </div>
                      )}

                      <div className={styles.cardContent}>
                        <div className={styles.cardHeader}>
                          <h5 className={styles.projectName}>
                            {project.links ? (
                              <div className={styles.multiLinks}>
                                <span className={styles.projectTitleText}>{project.name}</span>
                                <div className={styles.linkGroup}>
                                  {project.links.map((link, lIdx) => (
                                    <a key={lIdx} href={link.url} target="_blank" rel="noopener noreferrer" className={styles.storeLink}>
                                      {link.label} <ExternalLink size={14} />
                                    </a>
                                  ))}
                                </div>
                              </div>
                            ) : project.link ? (
                              <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                                {project.name} <ExternalLink size={16} className={styles.linkIcon} />
                              </a>
                            ) : (
                              project.name
                            )}
                          </h5>
                        </div>
                        <span className={styles.projectSubtitle}>{project.desc}</span>
                        <ul className={styles.projectDetails}>
                          {project.details.map((detail, dIdx) => (
                            <li key={dIdx}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
