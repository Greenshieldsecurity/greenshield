import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../../config/nav';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo-link">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Green Shield Consultancy" className="navbar-logo" />
        </Link>

        <div className="navbar-right">
          <ul className="navbar-links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                {link.href === '/' ? (
                  <Link to="/" className="navbar-link" onClick={() => setMenuOpen(false)}>
                    {link.label}
                  </Link>
                ) : (
                  <a href={link.href} className="navbar-link" onClick={() => setMenuOpen(false)}>
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <Link to="/request" className="navbar-cta" onClick={() => setMenuOpen(false)}>
            Request Security Services
          </Link>
        </div>

        <button
          type="button"
          className="navbar-burger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          <span className="navbar-burger-bar" />
          <span className="navbar-burger-bar" />
          <span className="navbar-burger-bar" />
        </button>
      </div>

      <button
        type="button"
        className={`navbar-backdrop ${menuOpen ? 'navbar-backdrop-open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-label="Close menu"
        tabIndex={menuOpen ? 0 : -1}
      />
      <div className={`navbar-drawer ${menuOpen ? 'navbar-drawer-open' : ''}`} aria-hidden={!menuOpen}>
        <div className="navbar-drawer-header">
          <span className="navbar-drawer-title">Menu</span>
          <button
            type="button"
            className="navbar-drawer-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <ul className="navbar-drawer-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              {link.href === '/' ? (
                <Link to="/" className="navbar-drawer-link" onClick={() => setMenuOpen(false)}>
                  {link.label}
                </Link>
              ) : (
                <a href={link.href} className="navbar-drawer-link" onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>
        <Link to="/request" className="navbar-drawer-cta" onClick={() => setMenuOpen(false)}>
          Request Security Services
        </Link>
      </div>
    </nav>
  );
}
