import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { getProjectBySlug } from '../content/projects';
import NotFoundPage from './NotFoundPage';

function ListSection({ title, items }) {
  if (!items?.length) return null;

  return (
    <section className="case-section">
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default function ProjectPage() {
  const project = getProjectBySlug(useParams().slug);

  if (!project) return <NotFoundPage />;

  return (
    <article className="page project-detail">
      <div className="container">
        <Link className="back-link" to="/projects">
          <ArrowLeft aria-hidden="true" />
          All projects
        </Link>

        <header className="case-header">
          <div>
            <p className="eyebrow">Case study · {project.role}</p>
            <h1>{project.title}</h1>
            <p>{project.summary}</p>
          </div>

          <dl>
            <div>
              <dt>Role</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>Period</dt>
              <dd>{project.dates}</dd>
            </div>
            <div>
              <dt>Stack</dt>
              <dd>{project.technologies.join(' · ')}</dd>
            </div>
          </dl>
        </header>

        <img
          className="case-hero"
          src={project.heroMedia.src}
          alt={project.heroMedia.alt}
        />

        <div className="case-layout">
          <aside>
            <p className="eyebrow">On this project</p>
            {project.links?.map((link) => (
              <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
                {link.label}
                <ExternalLink aria-hidden="true" />
              </a>
            ))}
          </aside>

          <div className="case-content">
            <section className="case-section">
              <h2>Overview</h2>
              <p>{project.overview}</p>
            </section>
            <ListSection title="Constraints" items={project.constraints} />
            <ListSection title="Engineering decisions" items={project.decisions} />
            <ListSection title="Implementation" items={project.implementation} />
            <ListSection title="Results" items={project.results} />
          </div>
        </div>
      </div>
    </article>
  );
}
