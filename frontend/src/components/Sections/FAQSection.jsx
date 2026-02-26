import { useState } from 'react';

const FAQ_ITEMS = [
  {
    id: 'keyholding',
    question: 'What is keyholding?',
    answer: 'Keyholding is a service where we securely hold keys to your premises and attend when your alarm is activated, or when access is required for emergency services or contractors. This reduces risk and ensures a professional response 24/7.',
  },
  {
    id: 'response-time',
    question: 'How quickly can you respond to an alarm?',
    answer: 'We aim to attend alarm activations within the timeframe agreed in your contract, typically within 45–60 minutes depending on location. Response times are agreed upfront so you know what to expect.',
  },
  {
    id: 'survey',
    question: 'What does a security survey involve?',
    answer: 'A security survey assesses your premises for vulnerabilities, reviews existing measures, and recommends practical improvements. We provide a clear report with prioritised actions and commercially sensible options.',
  },
  {
    id: 'areas',
    question: 'What areas do you cover?',
    answer: 'We operate across the UK. Coverage for keyholding and alarm response depends on your postcode — get in touch and we’ll confirm availability and response times for your area.',
  },
];

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="faq-item">
      <button
        type="button"
        className="faq-question"
        onClick={() => onToggle(item.id)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
        id={`faq-question-${item.id}`}
      >
        <span>{item.question}</span>
        <span className="faq-icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
      </button>
      <div
        id={`faq-answer-${item.id}`}
        className="faq-answer-wrap"
        role="region"
        aria-labelledby={`faq-question-${item.id}`}
        hidden={!isOpen}
      >
        <p className="faq-answer">{item.answer}</p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openId, setOpenId] = useState(null);

  function toggle(id) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  return (
    <section id="faq" className="faq-section" aria-labelledby="faq-heading">
      <div className="faq-inner">
        <h2 id="faq-heading" className="faq-headline">Frequently Asked Questions</h2>
        <div className="faq-list">
          {FAQ_ITEMS.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={toggle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
