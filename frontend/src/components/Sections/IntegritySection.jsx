const CheckIcon = () => (
  <svg className="integrity-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const DIFFERENTIATORS = [
  {
    id: 'independent',
    title: 'Independent & Impartial Advice',
    text: 'No ties to specific suppliers; recommendations based solely on your needs.',
  },
  {
    id: 'commercial',
    title: 'Commercially Sensible Security Solutions',
    text: 'Security that fits your budget and operational reality.',
  },
  {
    id: 'rapid',
    title: 'Rapid, Decisive Response',
    text: 'When an alarm activates, we attend quickly and resolve with minimal fuss.',
  },
  {
    id: 'communication',
    title: 'Professional Communication & Reporting',
    text: 'Clear documentation and updates so you’re always informed.',
  },
];

export default function IntegritySection() {
  return (
    <section className="integrity-section" aria-labelledby="integrity-heading">
      <div className="integrity-inner">
        <div className="integrity-left">
          <h2 id="integrity-heading" className="integrity-headline">
            Security Delivered with Professional Integrity
          </h2>
          <p className="integrity-intro">
            We don’t just provide security services — we deliver them in a way that protects your interests and your peace of mind.
          </p>
        </div>
        <div className="integrity-right">
          {DIFFERENTIATORS.map((item) => (
            <div key={item.id} className="integrity-block">
              <span className="integrity-block-check">
                <CheckIcon />
              </span>
              <div className="integrity-block-content">
                <h3 className="integrity-block-title">{item.title}</h3>
                <p className="integrity-block-text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
