import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';

const SERVICES = [
  { id: 'keyholding', label: 'Keyholding', icon: 'Key' },
  { id: 'alarm-response', label: 'Alarm Response', icon: 'Bell' },
  { id: 'survey', label: 'Security Survey', icon: 'Clipboard' },
  { id: 'multiple', label: 'Multiple / Not sure', icon: 'Help' },
];

const BUILDING_TYPES = [
  'Office', 'Warehouse', 'Retail', 'Industrial', 'Mixed use', 'Other',
];

const BUDGET_OPTIONS = [
  { id: 'exploring', label: 'Just exploring' },
  { id: 'under-5k', label: 'Under £5k' },
  { id: '5k-15k', label: '£5k – £15k' },
  { id: '15k-30k', label: '£15k – £30k' },
  { id: '30k-plus', label: '£30k+' },
];

const HOW_SOON_OPTIONS = [
  { id: 'asap', label: 'As soon as possible' },
  { id: 'month', label: 'This month' },
  { id: '1-3', label: '1–3 months' },
  { id: 'exploring', label: 'Just exploring' },
];

function KeyIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}

function ClipboardIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      <path d="M9 14h6M9 18h6" />
    </svg>
  );
}

function HelpIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </svg>
  );
}

const ICON_MAP = { Key: KeyIcon, Bell: BellIcon, Clipboard: ClipboardIcon, Help: HelpIcon };

const STEPS = ['Service', 'Building', 'Budget', 'Timeline', 'Your details'];
const TOTAL_STEPS = 5;

const initialRequestData = {
  service: '',
  buildingType: '',
  budget: '',
  howSoon: '',
  name: '',
  email: '',
  phone: '',
  address: '',
  company: '',
  specialRequirements: '',
  attachment: null,
};

export default function RequestPage() {
  const location = useLocation();
  const fromContact = location.state?.fromContact;
  const [step, setStep] = useState(1);
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState(() => ({
    ...initialRequestData,
    ...(fromContact && {
      name: fromContact.name ?? '',
      email: fromContact.email ?? '',
      phone: fromContact.phone ?? '',
      specialRequirements: fromContact.message ?? '',
    }),
  }));

  const update = (key, value) => setData((prev) => ({ ...prev, [key]: value }));

  const next = () => {
    if (step < TOTAL_STEPS) setStep((s) => s + 1);
    else {
      setSuccess(true);
      window.scrollTo(0, 0);
    }
  };

  const back = () => setStep((s) => Math.max(1, s - 1));

  const canNext = () => {
    if (step === 1) return !!data.service;
    if (step === 2) return !!data.buildingType;
    if (step === 3) return !!data.budget;
    if (step === 4) return !!data.howSoon;
    if (step === 5) return !!(data.name && data.email && data.phone && data.address);
    return false;
  };

  return (
    <>
      <Navbar />
      <main className="request-page">
        <div className="request-page-inner">
          {!success ? (
            <>
              <h1 className="request-page-title">Request Security Services</h1>
              <div className="request-progress">
                {STEPS.map((label, i) => (
                  <span
                    key={label}
                    className={`request-progress-dot ${i + 1 <= step ? 'request-progress-dot-active' : ''}`}
                    aria-hidden
                  />
                ))}
              </div>

              {step === 1 && (
                <div className="request-step">
                  <p className="request-step-label">What service do you need?</p>
                  <div className="request-service-grid">
                    {SERVICES.map((s) => {
                      const Icon = ICON_MAP[s.icon];
                      return (
                        <button
                          key={s.id}
                          type="button"
                          className={`request-service-card ${data.service === s.id ? 'request-service-card-selected' : ''}`}
                          onClick={() => update('service', s.id)}
                        >
                          <span className="request-service-icon"><Icon /></span>
                          <span>{s.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="request-step">
                  <p className="request-step-label">What type of building?</p>
                  <div className="request-options">
                    {BUILDING_TYPES.map((b) => (
                      <button
                        key={b}
                        type="button"
                        className={`request-option-btn ${data.buildingType === b ? 'request-option-btn-selected' : ''}`}
                        onClick={() => update('buildingType', b)}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="request-step">
                  <p className="request-step-label">Rough budget (optional but helps us)</p>
                  <div className="request-options request-options-stack">
                    {BUDGET_OPTIONS.map((o) => (
                      <button
                        key={o.id}
                        type="button"
                        className={`request-option-btn ${data.budget === o.id ? 'request-option-btn-selected' : ''}`}
                        onClick={() => update('budget', o.id)}
                      >
                        {o.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="request-step">
                  <p className="request-step-label">How soon do you need this?</p>
                  <div className="request-options request-options-stack">
                    {HOW_SOON_OPTIONS.map((o) => (
                      <button
                        key={o.id}
                        type="button"
                        className={`request-option-btn ${data.howSoon === o.id ? 'request-option-btn-selected' : ''}`}
                        onClick={() => update('howSoon', o.id)}
                      >
                        {o.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 5 && (
                <div className="request-step request-step-form">
                  <p className="request-step-label">Your details</p>
                  <div className="request-fields">
                    <label className="request-field">
                      <span>Name *</span>
                      <input type="text" value={data.name} onChange={(e) => update('name', e.target.value)} required />
                    </label>
                    <label className="request-field">
                      <span>Email *</span>
                      <input type="email" value={data.email} onChange={(e) => update('email', e.target.value)} required />
                    </label>
                    <label className="request-field">
                      <span>Phone *</span>
                      <input type="tel" value={data.phone} onChange={(e) => update('phone', e.target.value)} required />
                    </label>
                    <label className="request-field">
                      <span>Address *</span>
                      <input type="text" value={data.address} onChange={(e) => update('address', e.target.value)} placeholder="Full address" required />
                    </label>
                    <label className="request-field">
                      <span>Company (optional)</span>
                      <input type="text" value={data.company} onChange={(e) => update('company', e.target.value)} />
                    </label>
                    <label className="request-field">
                      <span>Special requirements (optional)</span>
                      <textarea
                        value={data.specialRequirements}
                        onChange={(e) => update('specialRequirements', e.target.value)}
                        placeholder="e.g. access codes, site-specific notes"
                        rows={3}
                        className="request-field-textarea"
                      />
                    </label>
                    <label className="request-field request-field-file">
                      <span>Attach a file (optional)</span>
                      <input
                        type="file"
                        onChange={(e) => update('attachment', e.target.files?.[0] ?? null)}
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                        className="request-file-input"
                        aria-describedby="request-file-hint"
                      />
                      <span id="request-file-hint" className="request-file-hint">
                        {data.attachment ? data.attachment.name : 'PDF, Word or images. Max 10MB.'}
                      </span>
                    </label>
                  </div>
                </div>
              )}

              <div className="request-actions">
                <button type="button" className="request-btn request-btn-back" onClick={back} style={{ visibility: step === 1 ? 'hidden' : 'visible' }}>
                  Back
                </button>
                <button type="button" className="request-btn request-btn-next" onClick={next} disabled={!canNext()}>
                  {step === TOTAL_STEPS ? 'Submit' : 'Next'}
                </button>
              </div>
            </>
          ) : null}
        </div>
      </main>

      {success && (
        <div className="request-success-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="request-success-title">
          <div className="request-success-modal">
            <div className="request-success">
              <div className="request-success-confetti" aria-hidden="true">
                {[...Array(24)].map((_, i) => (
                  <span key={i} className="request-confetti-dot" style={{ '--i': i }} />
                ))}
              </div>
              <div className="request-success-check-wrap">
                <span className="request-success-check">✓</span>
              </div>
              <h2 id="request-success-title" className="request-success-title">Thank you!</h2>
              <p className="request-success-text">
                We’ve received your request and will be in touch within 24 hours.
              </p>
              <Link to="/" className="request-btn request-btn-done">
                Back to home
              </Link>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
