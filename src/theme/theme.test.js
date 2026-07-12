import { beforeEach, describe, expect, it, vi } from 'vitest';
import { getInitialTheme, persistTheme } from './theme';

describe('theme preference', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.stubGlobal('matchMedia', vi.fn(() => ({ matches: false })));
  });

  it('uses a saved preference first', () => {
    localStorage.setItem('portfolio-theme', 'dark');
    expect(getInitialTheme()).toBe('dark');
  });

  it('falls back to the system preference', () => {
    vi.stubGlobal('matchMedia', vi.fn(() => ({ matches: true })));
    expect(getInitialTheme()).toBe('dark');
  });

  it('persists and applies a theme', () => {
    persistTheme('light');
    expect(localStorage.getItem('portfolio-theme')).toBe('light');
    expect(document.documentElement.dataset.theme).toBe('light');
  });
});

