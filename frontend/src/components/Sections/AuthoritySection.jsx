const PillarPlanningIcon = () => (
  <svg className="authority-pillar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const PillarAdviceIcon = () => (
  <svg className="authority-pillar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2v20" />
    <path d="M4 7h16" />
    <path d="M6 7v5M5 13h2" />
    <path d="M18 7v5M17 13h2" />
  </svg>
);

const PillarKnowledgeIcon = () => (
  <svg className="authority-pillar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const PILLARS = [
  {
    icon: PillarPlanningIcon,
    title: 'Strategic Security Planning',
    text: 'We assess vulnerabilities and design tailored protection strategies suited to your operational requirements.',
  },
  {
    icon: PillarAdviceIcon,
    title: 'Neutral & Budget-Conscious Advice',
    text: 'Independent guidance aligned to your accredited requirements and financial framework.',
  },
  {
    icon: PillarKnowledgeIcon,
    title: 'Practical Industry Knowledge',
    text: 'Real-world experience in procurement and frontline operations ensures realistic, actionable solutions.',
  },
];

export default function AuthoritySection() {
  return (
    <section id="who-we-are" className="section-below-hero authority-section" aria-labelledby="authority-heading">
      <div className="authority-inner">
        <div className="authority-left">
          <p className="authority-label">WHO WE ARE</p>
          <h2 id="authority-heading" className="authority-headline">
            Experienced Security Professionals. Strategic Protection Solutions.
          </h2>
          <p className="authority-paragraph">
            Green Shield Consultancy is led by security professionals with over two decades of operational and procurement experience within the industry. We understand risk from both a strategic and practical perspective — allowing us to deliver solutions that are effective, compliant and commercially sensible.
          </p>
        </div>
        <div className="authority-right">
          {PILLARS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="authority-pillar">
              <span className="authority-pillar-icon-wrap">
                <Icon />
              </span>
              <div className="authority-pillar-content">
                <h3 className="authority-pillar-title">{title}</h3>
                <p className="authority-pillar-text">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
