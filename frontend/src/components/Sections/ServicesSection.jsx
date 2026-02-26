import { Link } from 'react-router-dom';

const SERVICES = [
  {
    id: 'keyholding',
    title: 'Keyholding Services',
    copy: 'Secure keyholding with rapid response to alarm activations — ensuring your premises are protected at all times.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    imageAlt: 'Commercial building at dusk with lights on',
    href: '/services/keyholding',
  },
  {
    id: 'alarm-response',
    title: 'Alarm Response',
    copy: 'Fast, reliable attendance to alarm triggers, minimising risk and disruption to your operations.',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
    imageAlt: 'Vehicle at night with subtle lighting',
    href: '/services/alarm-response',
  },
  {
    id: 'surveys',
    title: 'Security Surveys & Risk Assessments',
    copy: 'Comprehensive security evaluations designed to identify vulnerabilities and implement effective solutions.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
    imageAlt: 'Professional reviewing documents',
    href: '/services/surveys',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="services-section" aria-labelledby="services-heading">
      <div className="services-inner">
        <p className="services-label">OUR SERVICES</p>
        <h2 id="services-heading" className="services-headline">
          Professional Security Services Tailored to Your Business
        </h2>
        <div className="services-grid">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="services-card"
            >
              <div className="services-card-image-wrap">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="services-card-image"
                />
              </div>
              <div className="services-card-content">
                <h3 className="services-card-title">{service.title}</h3>
                <p className="services-card-copy">{service.copy}</p>
                <Link to={service.href} className="services-card-link">
                  Learn more
                  <svg className="services-card-link-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
