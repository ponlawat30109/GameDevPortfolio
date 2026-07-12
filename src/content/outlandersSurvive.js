import image from '../assets/outlanders-survive.jpg';

export default {
  slug: 'outlanders-survive', title: 'Outlanders Survive',
  summary: 'A multiplayer survival game centered on responsive movement and combat.',
  role: 'Game Developer', dates: '2022–2025',
  technologies: ['Unity', 'C#', 'Multiplayer Networking'],
  thumbnail: { src: image, alt: 'Outlanders Survive game artwork' },
  heroMedia: { src: image, alt: 'Outlanders Survive game artwork' },
  featured: true, order: 2,
  overview: 'Developed and maintained core gameplay systems for the multiplayer survival title at KOS Design.',
  constraints: ['Coordinate movement, combat, and animation with multiplayer state.'],
  decisions: ['Kept the movement, combat, and animation responsibilities focused as core gameplay systems.'],
  implementation: ['Developed and maintained movement, combat, and animation.', 'Implemented player–server synchronization for multiplayer gameplay.'],
  results: ['Contributed the core player systems used by the multiplayer experience.'],
  links: [{ label: 'Visit website', url: 'https://outlanders.com/' }],
};
