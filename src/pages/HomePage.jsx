import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import PersonalProjectCard from '../components/PersonalProjectCard';
import ProjectCard from '../components/ProjectCard';
import { personalProjects } from '../content/personalProjects';
import { featuredProjects } from '../content/projects';

const capabilities = [
  [
    '01',
    'Gameplay & UI systems',
    'Movement, combat, animation, skills, UI architecture, and custom Unity tools.',
  ],
  [
    '02',
    'Multiplayer networking',
    'Player–server synchronization and connected gameplay using PUN2, Mirror, and FishNet.',
  ],
  [
    '03',
    'Backend systems',
    'REST APIs, real-time services, persistent data, and scalable system design.',
  ],
];

export default function HomePage() {
  return (
    <>
      <section className="hero section">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Game developer · Multiplayer systems</p>
            <h1>Gameplay that holds together when everyone joins.</h1>
            <p className="hero-copy">
              I’m Ponlawat, a game developer with 3+ years of experience
              connecting responsive gameplay with server architecture—and
              expanding deeper into backend engineering.
            </p>
            <div className="actions">
              <Link className="button primary" to="/projects">
                View projects
                <ArrowRight aria-hidden="true" />
              </Link>
              <Link className="button secondary" to="/contact">
                Contact me
                <Mail aria-hidden="true" />
              </Link>
            </div>
          </div>

          <aside className="status-panel" aria-label="Professional summary">
            <p className="eyebrow">Current profile</p>
            <dl>
              <div><dt>Role</dt><dd>Game Developer</dd></div>
              <div><dt>Focus</dt><dd>Multiplayer gameplay</dd></div>
              <div><dt>Experience</dt><dd>3+ years</dd></div>
              <div><dt>Location</dt><dd>Bangkok, Thailand</dd></div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="section ruled">
        <div className="container">
          <div className="section-heading">
            <div><p className="eyebrow">Selected work</p><h2>Production projects</h2></div>
            <Link className="text-link" to="/projects">
              All projects
              <ArrowRight aria-hidden="true" />
            </Link>
          </div>
          <div className="project-grid">
            {featuredProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div><p className="eyebrow">Independent work</p><h2>Personal systems</h2></div>
            <Link className="text-link" to="/projects">All projects <ArrowRight aria-hidden="true" /></Link>
          </div>
          <div className="personal-grid compact">
            {personalProjects.slice(0, 2).map((project) => (
              <PersonalProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section ruled">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Capabilities</p>
              <h2>Across the game stack</h2>
            </div>
          </div>
          <div className="capability-list">
            {capabilities.map(([number, title, copy]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section experience-strip">
        <div className="container experience-row">
          <div>
            <p className="eyebrow">Experience</p>
            <h2>Game Developer</h2>
            <p>KOS Design · May 2022–May 2025</p>
          </div>
          <p>
            Developed and maintained gameplay, multiplayer, social, and
            backend-connected systems across MMO, survival, party, and arcade
            titles.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-cta">
          <p className="eyebrow">Start a conversation</p>
          <h2>
            Looking for a developer who works across gameplay and server
            boundaries?
          </h2>
          <Link className="button primary" to="/contact">
            Get in touch
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
