import { Link } from 'react-router-dom';

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

const CheckIcon = () => (
  <svg className="hero-trust-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ExperienceIcon = () => (
  <svg className="hero-trust-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
);

const AlarmIcon = () => (
  <svg className="hero-trust-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    <path d="M4 2C2.8 3.7 2 5.7 2 8" />
    <path d="M22 8c0-2.3-.8-4.3-2-6" />
  </svg>
);

const AssessmentIcon = () => (
  <svg className="hero-trust-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
    <path d="M10 9H8" />
  </svg>
);

const PartnersIcon = () => (
  <svg className="hero-trust-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const TRUST_ITEMS = [
  { icon: ExperienceIcon, text: '25+ Years Industry Experience' },
  { icon: AlarmIcon, text: 'Rapid Alarm Response' },
  { icon: AssessmentIcon, text: 'Professional Risk Assessments' },
  { icon: PartnersIcon, text: 'Trusted Supply Chain Partners' },
];

export function HeroTrustCards() {
  return (
    <section className="trust-cards-section" aria-label="Trust indicators">
      <div className="hero-trust-wrap">
        <div className="hero-trust-bar">
          <div className="hero-trust-cards">
            {TRUST_ITEMS.map(({ icon: Icon, text }) => (
              <div key={text} className="hero-trust-card">
                <span className="hero-trust-card-icon-wrap">
                  <Icon />
                </span>
                <span className="hero-trust-card-text">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content">
        <p className="hero-micro">PROFESSIONAL KEYHOLDING & ALARM RESPONSE</p>
        <h1 className="hero-headline">Protecting Your Business When It Matters Most</h1>
        <p className="hero-subheadline">
          With over 25 years of security industry experience, Green Shield Consultancy provides trusted keyholding, alarm response and security surveys — delivering rapid, reliable protection during high-risk periods and beyond.
        </p>
        <div className="hero-ctas">
          <Link to="/request" className="hero-cta-primary">
            <LockIcon />
            Request a Security Survey
          </Link>
          <Link to="/request" className="hero-cta-secondary">
            <PhoneIcon />
            Speak to a Security Consultant
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
