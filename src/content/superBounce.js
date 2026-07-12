import image from '../assets/super-bounce.jpg';

export default {
  slug: 'super-bounce', title: 'Super Bounce',
  summary: 'A mobile arcade game with persistent score data connected to a backend.',
  role: 'Game Developer', dates: '2022–2025',
  technologies: ['Unity', 'C#', 'Backend Integration'],
  thumbnail: { src: image, alt: 'Super Bounce game artwork' },
  heroMedia: { src: image, alt: 'Super Bounce game artwork' },
  featured: false, order: 4,
  overview: 'Adapted existing assets and implemented the persistence boundary for player scores.',
  decisions: ['Reused and adapted suitable Unity Asset Store assets for the game.'],
  implementation: ['Implemented a score saving system connected to the backend for persistent player data.'],
  results: ['Delivered persistent scoring and supported the game build through adapted assets.'],
  links: [{ label: 'View game', url: 'https://www.nakamoto.games/play-to-earn/super-bounce' }],
};
