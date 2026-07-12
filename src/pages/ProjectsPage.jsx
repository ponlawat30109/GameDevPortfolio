import PersonalProjectCard from "../components/PersonalProjectCard";
import ProjectCard from "../components/ProjectCard";
import { personalProjects } from "../content/personalProjects";
import { projects } from "../content/projects";

export default function ProjectsPage() {
  return (
    <section className="page section">
      <div className="container">
        <header className="page-header">
          <p className="eyebrow">Work archive</p>
          <h1>Selected projects</h1>
          <p>
            Gameplay, multiplayer, and backend-connected systems built across
            professional and personal work.
          </p>
        </header>

        <div className="section-heading">
          <div>
            <p className="eyebrow">Production projects</p>
            <h2>Professional work</h2>
          </div>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="personal-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Independent projects</p>
              <h2>Personal work</h2>
            </div>
          </div>

          <div className="personal-grid">
            {personalProjects.map((project) => (
              <PersonalProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
