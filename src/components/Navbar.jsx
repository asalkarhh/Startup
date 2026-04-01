import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const links = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`nav-main ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container">
        <div className="nav-inner">
          <Link to="/" className="nav-logo" onClick={() => setOpen(false)}>
            <span className="logo-sym">&lt;</span>
            <span className="logo-n">Nexa</span>
            <span className="logo-b">Byte</span>
            <span className="logo-sym">/&gt;</span>
          </Link>

          <ul className="nav-links">
            {links.map(l => (
              <li key={l.path}>
                <NavLink
                  to={l.path}
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  end={l.path === '/'}
                >
                  {l.label}
                  <span className="nav-link-line" />
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <button className="theme-btn hoverable" onClick={toggleDarkMode} aria-label="Theme toggle">
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
            <Link to="/contact" className="nav-cta hoverable">
              <span>Get Free Quote</span>
              <div className="nav-cta-shine" />
            </Link>
            <button className="nav-hamburger hoverable" onClick={() => setOpen(!open)} aria-label="Menu">
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        <div className={`nav-mobile ${open ? 'open' : ''}`}>
          <div className="nav-mobile-inner">
            {links.map((l, i) => (
              <NavLink
                key={l.path}
                to={l.path}
                className={({ isActive }) => `nav-mobile-link ${isActive ? 'active' : ''}`}
                onClick={() => setOpen(false)}
                style={{ animationDelay: `${i * 0.08}s` }}
                end={l.path === '/'}
              >
                <span className="nml-num">0{i + 1}</span>
                <span className="nml-text">{l.label}</span>
                <span className="nml-arrow">→</span>
              </NavLink>
            ))}
            <Link to="/contact" className="nav-mobile-cta" onClick={() => setOpen(false)}>
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;