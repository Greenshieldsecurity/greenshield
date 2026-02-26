import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CONTACT_INFO = [
  { label: 'Phone', value: '+44 (0) 0000 000000', href: 'tel:+440000000000' },
  { label: 'Email', value: 'enquiries@greenshieldconsultancy.com', href: 'mailto:enquiries@greenshieldconsultancy.com' },
  { label: 'Address', value: 'Your address here', href: null },
];

export default function ContactSection() {
  const navigate = useNavigate();
  const [attachment, setAttachment] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const fd = new FormData(form);
    navigate('/request', {
      state: {
        fromContact: {
          name: (fd.get('name') || '').toString().trim(),
          email: (fd.get('email') || '').toString().trim(),
          phone: (fd.get('phone') || '').toString().trim(),
          message: (fd.get('message') || '').toString().trim(),
        },
      },
    });
  }

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-heading">
      <div className="contact-inner">
        <div className="contact-intro">
          <h2 id="contact-heading" className="contact-headline">Get in Touch</h2>
          <p className="contact-tagline">
            Discuss your security requirements with our team. We’ll respond as soon as possible.
          </p>
          <div className="contact-info-list">
            {CONTACT_INFO.map((item) => (
              <div key={item.label} className="contact-info-card">
                <span className="contact-info-label">{item.label}</span>
                {item.href ? (
                  <a href={item.href} className="contact-info-value">{item.value}</a>
                ) : (
                  <span className="contact-info-value">{item.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="contact-form-row">
            <label htmlFor="contact-name" className="contact-label">Name</label>
            <input id="contact-name" name="name" type="text" className="contact-input" required placeholder="Your name" />
          </div>
          <div className="contact-form-row">
            <label htmlFor="contact-email" className="contact-label">Email</label>
            <input id="contact-email" name="email" type="email" className="contact-input" required placeholder="you@example.com" />
          </div>
          <div className="contact-form-row">
            <label htmlFor="contact-phone" className="contact-label">Phone</label>
            <input id="contact-phone" name="phone" type="tel" className="contact-input" placeholder="Optional" />
          </div>
          <div className="contact-form-row">
            <label htmlFor="contact-message" className="contact-label">Message</label>
            <textarea id="contact-message" name="message" className="contact-textarea" rows={5} required placeholder="How can we help?" />
          </div>
          <div className="contact-form-row">
            <label htmlFor="contact-file" className="contact-label">Attach a file (optional)</label>
            <input
              id="contact-file"
              name="attachment"
              type="file"
              className="contact-file-input"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              onChange={(e) => setAttachment(e.target.files?.[0] ?? null)}
              aria-describedby="contact-file-hint"
            />
            <span id="contact-file-hint" className="contact-file-hint">
              {attachment ? attachment.name : 'PDF, Word or images. Max 10MB.'}
            </span>
          </div>
          <button type="submit" className="contact-submit">
            Next
          </button>
        </form>
      </div>
    </section>
  );
}
