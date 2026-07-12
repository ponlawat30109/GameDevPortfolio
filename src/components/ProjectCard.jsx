import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <Link className="project-image-link" to={`/projects/${project.slug}`} aria-label={`Read ${project.title} case study`}>
        <img src={project.thumbnail.src} alt={project.thumbnail.alt} loading="lazy" />
      </Link>
      <div className="project-card-body">
        <div className="project-meta"><span>{project.role}</span><span>{project.dates}</span></div>
        <h3><Link to={`/projects/${project.slug}`}>{project.title} <ArrowUpRight aria-hidden="true" /></Link></h3>
        <p>{project.summary}</p>
        <ul className="tech-list" aria-label="Technologies">{project.technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul>
      </div>
    </article>
  );
}
