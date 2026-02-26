import { Link } from 'react-router-dom';

export default function CtaStrip() {
  return (
    <section className="cta-strip" aria-labelledby="cta-strip-heading">
      <div className="cta-strip-overlay" aria-hidden="true" />
      <div className="cta-strip-content">
        <h2 id="cta-strip-heading" className="cta-strip-headline">
          Ready to Secure Your Business?
        </h2>
        <p className="cta-strip-copy">
          Get in touch for a no-obligation conversation about keyholding, alarm response, or a full security survey.
        </p>
        <div className="cta-strip-actions">
          <Link to="/request" className="cta-strip-btn cta-strip-btn-primary">
            Request a Security Survey
          </Link>
          <a href="tel:+440000000000" className="cta-strip-btn cta-strip-btn-secondary">
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
