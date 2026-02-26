const LockIcon = () => (
  <svg className="hero-cta-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="hero-cta-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export default function ServiceHero({ micro, headline, subheadline, showCtas = true }) {
  return (
    <section className="hero service-page-hero" aria-labelledby="service-hero-heading">
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content">
        {micro && <p className="hero-micro">{micro}</p>}
        <h1 id="service-hero-heading" className="hero-headline">
          {headline}
        </h1>
        {subheadline && (
          <p className="hero-subheadline">
            {subheadline}
          </p>
        )}
        {showCtas && (
          <div className="hero-ctas">
            <a href="/request" className="hero-cta-primary">
              <LockIcon />
              Request a security survey
            </a>
            <a href="/request" className="hero-cta-secondary">
              <PhoneIcon />
              Speak to a consultant
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
