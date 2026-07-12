import { describe, expect, it } from 'vitest';
import { getProjectBySlug, projects, validateProject } from './projects';

describe('project registry', () => {
  it('finds a project by slug', () => {
    expect(getProjectBySlug('outlanders-mmo')?.title).toBe('Outlanders MMO');
  });

  it('returns undefined for an unknown slug', () => {
    expect(getProjectBySlug('missing-project')).toBeUndefined();
  });

  it('contains only valid project entries', () => {
    expect(projects.every(validateProject)).toBe(true);
  });

  it('rejects entries without required accessible media fields', () => {
    expect(() => validateProject({ slug: 'test', title: 'Test' })).toThrow(
      /missing required field/i,
    );
  });
});

