import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../../config/nav';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <Link to="/" className="footer-logo-link">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Green Shield Consultancy" className="footer-logo" />
          </Link>
          <nav className="footer-nav" aria-label="Footer navigation">
            <ul className="footer-nav-list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  {link.href === '/' ? (
                    <Link to="/" className="footer-nav-link">{link.label}</Link>
                  ) : (
                    <a href={link.href} className="footer-nav-link">{link.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <Link to="/request" className="footer-cta">Request Security Services</Link>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">
            © {currentYear} Green Shield Consultancy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
