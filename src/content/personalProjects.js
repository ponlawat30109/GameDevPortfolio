const entries = [
  { title: 'Collection Dashboard', summary: 'A private web library for organizing and searching saved websites, with account-scoped cloud data and a browser-only guest mode.', technologies: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Cloudflare Pages'], githubUrl: 'https://github.com/ponlawat30109/collection-dashboard', liveUrl: 'https://collection-dashboard-9dh.pages.dev' },
  { title: 'Tank Battle 2D', summary: 'A two-player Unity sample demonstrating internet multiplayer with Relay join codes and FishNet networking.', technologies: ['Unity 6.3', 'FishNet', 'Unity Relay', 'UI Toolkit', 'Input System'], githubUrl: 'https://github.com/ponlawat30109/SampleTankBattle2D' },
  { title: 'GachaSim', summary: 'The Unity client for the GachaSim project.', technologies: ['Unity', 'C#'], githubUrl: 'https://github.com/ponlawat30109/GachaSim' },
  { title: 'GachaSimServer', summary: 'A microservice backend with an API gateway, real-time communication, user and gacha services, and persistent data.', technologies: ['Node.js', 'Socket.IO', 'MySQL', 'Docker Compose', 'Microservices'], githubUrl: 'https://github.com/ponlawat30109/GachaSimServer' },
];

export function validatePersonalProject(project) {
  if (!project.title || !project.summary || !project.technologies?.length) throw new Error('Personal project is missing required content');
  if (!project.githubUrl?.startsWith('https://github.com/')) throw new Error('Personal project requires a valid GitHub URL');
  return true;
}
export const personalProjects = entries.filter(validatePersonalProject);
