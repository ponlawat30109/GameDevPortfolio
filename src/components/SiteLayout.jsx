import { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { getInitialTheme, persistTheme } from '../theme/theme';

const navItems = [['Projects', '/projects'], ['About', '/about'], ['Contact', '/contact']];

export default function SiteLayout() {
  const [theme, setTheme] = useState(getInitialTheme);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => persistTheme(theme), [theme]);
  useEffect(() => { setMenuOpen(false); window.scrollTo?.(0, 0); }, [location.pathname]);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <div className="container nav-row">
          <NavLink className="wordmark" to="/" aria-label="Ponlawat, home">PONLAWAT<span>.DEV</span></NavLink>
          <button className="icon-button menu-button" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
          <nav className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Main navigation">
            {navItems.map(([label, path]) => <NavLink key={path} to={path}>{label}</NavLink>)}
          </nav>
          <button className="icon-button theme-button" type="button" aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
          </button>
        </div>
      </header>
      <main id="main-content"><Outlet /></main>
      <footer className="site-footer"><div className="container footer-row"><span>© {new Date().getFullYear()} Ponlawat Suwanyukabordin</span><span>Game developer · Bangkok</span></div></footer>
    </div>
  );
}
