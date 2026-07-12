import { describe, expect, it } from 'vitest';
import { personalProjects, validatePersonalProject } from './personalProjects';

describe('personal project registry', () => {
  it('contains only valid external project entries', () => {
    expect(personalProjects.every(validatePersonalProject)).toBe(true);
  });

  it('requires a valid GitHub URL', () => {
    expect(() => validatePersonalProject({
      title: 'Invalid', summary: 'Invalid source URL.', technologies: ['JavaScript'], githubUrl: 'invalid',
    })).toThrow(/github url/i);
  });

  it('provides source and live links for Collection Dashboard', () => {
    const dashboard = personalProjects.find((project) => project.title === 'Collection Dashboard');
    expect(dashboard.githubUrl).toBe('https://github.com/ponlawat30109/collection-dashboard');
    expect(dashboard.liveUrl).toBe('https://collection-dashboard-9dh.pages.dev');
  });
});
