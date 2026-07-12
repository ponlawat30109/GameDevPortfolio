import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const contacts = [
  [Mail, 'Email', 'ponlawat.suwa@gmail.com', 'mailto:ponlawat.suwa@gmail.com'],
  [Github, 'GitHub', 'ponlawat30109', 'https://github.com/ponlawat30109'],
  [
    Linkedin,
    'LinkedIn',
    'Ponlawat Suwanyukabordin',
    'https://www.linkedin.com/in/ponlawat-suwanyukabordin-780011229/',
  ],
];

export default function ContactPage() {
  return (
    <section className="page section">
      <div className="container narrow">
        <header className="page-header">
          <p className="eyebrow">Contact</p>
          <h1>Let’s build reliable multiplayer experiences.</h1>
          <p>
            I’m interested in game development opportunities involving
            gameplay, multiplayer systems, and backend integration.
          </p>
        </header>

        <div className="contact-list">
          {contacts.map(([Icon, label, text, href]) => {
            const isExternal = href.startsWith('http');
            return (
              <a
                key={label}
                href={href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noreferrer' : undefined}
              >
                <Icon aria-hidden="true" />
                <span>
                  <small>{label}</small>
                  {text}
                </span>
              </a>
            );
          })}

          <div>
            <Phone aria-hidden="true" />
            <span>
              <small>Phone</small>
              +66 98 272 7210
            </span>
          </div>
          <div>
            <MapPin aria-hidden="true" />
            <span>
              <small>Location</small>
              Ratchathewi, Bangkok
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
