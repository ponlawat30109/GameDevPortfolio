import image from '../assets/fall-race.jpg';

export default {
  slug: 'fall-race', title: 'Fall Race',
  summary: 'A casual party game with character systems connected to backend player data.',
  role: 'Game Developer', dates: '2022–2025',
  technologies: ['Unity', 'C#', 'REST API'],
  thumbnail: { src: image, alt: 'Fall Race game artwork' },
  heroMedia: { src: image, alt: 'Fall Race game artwork' },
  featured: false, order: 3,
  overview: 'Worked on player movement and the application boundary between the game and backend data.',
  decisions: ['Separated character behavior from the API controller responsible for player data.'],
  implementation: ['Developed character movement and animation systems.', 'Implemented an API controller connecting the game to backend player data.'],
  results: ['Delivered the character and backend integration responsibilities assigned to the project.'],
  links: [{ label: 'Visit website', url: 'https://fallrace.com/' }],
};
