import fallRace from './fallRace';
import outlandersMmo from './outlandersMmo';
import outlandersSurvive from './outlandersSurvive';
import superBounce from './superBounce';

const requiredFields = ['slug', 'title', 'summary', 'role', 'dates', 'technologies', 'thumbnail', 'heroMedia', 'overview'];

export function validateProject(project) {
  const missing = requiredFields.find((field) => !project[field]);
  if (missing) throw new Error(`Project is missing required field: ${missing}`);
  if (!project.thumbnail.src || !project.thumbnail.alt || !project.heroMedia.src || !project.heroMedia.alt) {
    throw new Error('Project is missing required field: accessible media');
  }
  return true;
}

export const projects = [outlandersMmo, outlandersSurvive, fallRace, superBounce]
  .filter(validateProject)
  .sort((a, b) => a.order - b.order);

export const featuredProjects = projects.filter((project) => project.featured);
export const getProjectBySlug = (slug) => projects.find((project) => project.slug === slug);

