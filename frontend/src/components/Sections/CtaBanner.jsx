import { Link } from 'react-router-dom';

export default function CtaBanner() {
  return (
    <section className="cta-banner" aria-labelledby="cta-banner-heading">
      <div className="cta-banner-accent" aria-hidden="true" />
      <div className="cta-banner-inner">
        <p className="cta-banner-label">Secure your business</p>
        <h2 id="cta-banner-heading" className="cta-banner-headline">
          Don’t Be an Easy Target
        </h2>
        <p className="cta-banner-copy">
          Criminals look for the path of least resistance. Secure your premises with a professional security survey and tailored keyholding or alarm response — so your business isn’t the one they choose.
        </p>
        <div className="cta-banner-actions">
          <Link to="/request" className="cta-banner-btn cta-banner-btn-primary">
            Request a Security Survey
            <span className="cta-banner-btn-arrow" aria-hidden="true">→</span>
          </Link>
          <Link to="/request" className="cta-banner-btn cta-banner-btn-secondary">
            Speak to a Consultant
          </Link>
        </div>
      </div>
    </section>
  );
}
