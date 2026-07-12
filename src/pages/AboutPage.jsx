const skills = [
  [
    'Game development',
    'Unity, C#, Unreal Engine, C++, Cinemachine, Addressables, mobile optimization, UI Toolkit',
  ],
  ['Multiplayer networking', 'Photon PUN2, Mirror, FishNet, Unity Relay, Vivox'],
  [
    'Backend & database',
    'Node.js, Express.js, REST APIs, MySQL, PostgreSQL, MongoDB, Supabase',
  ],
  ['Tools & workflow', 'Docker, Postman, Git, GitHub, Plastic SCM, Jira, Figma, Agile'],
  ['Currently learning', '.NET, backend engineering, system design, MMO architecture'],
];

export default function AboutPage() {
  return (
    <section className="page section">
      <div className="container narrow">
        <header className="page-header">
          <p className="eyebrow">About</p>
          <h1>Game developer working between gameplay and server architecture.</h1>
        </header>

        <div className="prose">
          <p>
            I’m Ponlawat Suwanyukabordin, a Bangkok-based game developer with
            more than three years of professional experience and a growing
            focus on backend engineering.
          </p>
          <p>
            At KOS Design, I developed and maintained systems across MMO,
            survival, party, and mobile arcade projects. My work includes
            gameplay systems, UI architecture, custom tools, player
            synchronization, social features, API integration, and persistent
            player data.
          </p>
        </div>

        <div className="skill-rows">
          {skills.map(([title, list]) => (
            <div key={title}>
              <h2>{title}</h2>
              <p>{list}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
