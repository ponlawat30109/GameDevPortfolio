import image from '../assets/outlanders-mmo.png';

export default {
  slug: 'outlanders-mmo',
  title: 'Outlanders MMO',
  summary: 'A massively multiplayer online project with connected gameplay and social systems.',
  role: 'Game Developer',
  dates: '2022–2025',
  technologies: ['Unity', 'C#', 'Multiplayer Networking', 'Vivox'],
  thumbnail: { src: image, alt: 'Outlanders MMO game artwork' },
  heroMedia: { src: image, alt: 'Outlanders MMO game artwork' },
  featured: true,
  order: 1,
  overview: 'Developed gameplay and player-facing systems for an MMO project at KOS Design.',
  constraints: ['Keep gameplay responsive while synchronizing player state with the server.', 'Integrate social features into the existing game experience.'],
  decisions: ['Developed core movement, combat, and animation systems.', 'Integrated Vivox for in-game chat and built chat UI, emoji support, and filtering.', 'Developed friend and player skill systems for active and passive abilities.'],
  implementation: ['Implemented player–server synchronization for multiplayer gameplay at MMO scale.', 'Connected social and skill features to the surrounding player interfaces.'],
  results: ['Delivered connected gameplay, chat, friends, and skill systems as part of the project.'],
  links: [
    { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.outlanders.outlanders' },
    { label: 'App Store', url: 'https://apps.apple.com/us/app/outlanders-mmo/id6746841661' },
  ],
};
