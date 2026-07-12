import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import App from './App';

describe('portfolio routes and shell', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.stubGlobal('matchMedia', vi.fn(() => ({ matches: false })));
  });

  it('navigates from the homepage to the project index', async () => {
    const user = userEvent.setup();
    render(<MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}><App /></MemoryRouter>);
    await user.click(screen.getByRole('link', { name: 'Projects' }));
    expect(screen.getByRole('heading', { name: 'Selected projects' })).toBeInTheDocument();
  });

  it('renders a project case study from its slug', () => {
    render(<MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }} initialEntries={['/projects/outlanders-mmo']}><App /></MemoryRouter>);
    expect(screen.getByRole('heading', { level: 1, name: 'Outlanders MMO' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Engineering decisions' })).toBeInTheDocument();
  });

  it('renders a useful not-found page for an unknown project', () => {
    render(<MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }} initialEntries={['/projects/unknown']}><App /></MemoryRouter>);
    expect(screen.getByRole('heading', { name: 'Page not found' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Back to projects' })).toHaveAttribute('href', '/projects');
  });

  it('toggles and persists the color theme', async () => {
    const user = userEvent.setup();
    render(<MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}><App /></MemoryRouter>);
    await user.click(screen.getByRole('button', { name: 'Switch to dark theme' }));
    expect(document.documentElement.dataset.theme).toBe('dark');
    expect(localStorage.getItem('portfolio-theme')).toBe('dark');
  });

  it('keeps professional work internal and personal projects external', () => {
    render(<MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }} initialEntries={['/projects']}><App /></MemoryRouter>);
    expect(screen.getByRole('heading', { name: 'Professional work' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Personal systems' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Read Outlanders MMO case study' })).toHaveAttribute('href', '/projects/outlanders-mmo');
    expect(screen.getByRole('link', { name: 'Collection Dashboard source' })).toHaveAttribute('href', 'https://github.com/ponlawat30109/collection-dashboard');
  });

  it('renders the expanded skills and learning focus', () => {
    render(<MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }} initialEntries={['/about']}><App /></MemoryRouter>);
    expect(screen.getByText(/Unreal Engine/)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Currently learning' })).toBeInTheDocument();
    expect(screen.getByText(/MMO architecture/)).toBeInTheDocument();
  });
});
