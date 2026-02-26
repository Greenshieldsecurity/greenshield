/**
 * Copy and assets for each service page.
 * All copy is generic but accurate — no misleading claims.
 */

export const SERVICES_DATA = {
  keyholding: {
    slug: 'keyholding',
    title: 'Keyholding Services',
    hero: {
      micro: 'KEYHOLDING SERVICES',
      headline: 'Secure Keyholding So Your Premises Are Never Left Exposed',
      subheadline:
        'When your alarm activates out of hours, you need a trusted keyholder who can attend quickly and secure your site. Green Shield provides professional keyholding with agreed response times, so you can focus on running your business instead of being on call.',
    },
    imageCopy: {
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      imageAlt: 'Commercial building at dusk with exterior lighting',
      heading: 'Why Keyholding Matters for Your Business',
      paragraphs: [
        'Many businesses rely on keyholding so that when an alarm is triggered — whether by a genuine incident or a false activation — someone can attend, verify the premises, and hand over to emergency services or contractors if needed. Without a formal keyholding arrangement, site managers or directors often end up attending call-outs themselves, which is disruptive and can create duty-of-care and safety risks.',
        'A professional keyholding service holds your keys securely, operates to agreed response times, and follows clear procedures. That helps you meet insurer and accreditation requirements, reduces the burden on your team, and ensures a consistent, auditable response when it matters.',
      ],
    },
    features: [
      {
        title: 'Agreed response times',
        text: 'Response windows are agreed in advance so you know what to expect and can align with your risk assessment and insurer requirements.',
        icon: 'clock',
      },
      {
        title: 'Secure key storage',
        text: 'Keys are held under strict procedures and only used for authorised attendances, with full audit trail and compliance with best practice.',
        icon: 'lock',
      },
      {
        title: 'Handover to emergency services',
        text: 'When police or fire services are required, our keyholders can attend and facilitate access, helping to minimise delay and disruption.',
        icon: 'shield',
      },
      {
        title: 'Reduced burden on your team',
        text: 'Out-of-hours call-outs are handled by us, so your staff are not routinely expected to attend the premises at night or at weekends.',
        icon: 'users',
      },
    ],
  },

  'alarm-response': {
    slug: 'alarm-response',
    title: 'Alarm Response',
    hero: {
      micro: 'ALARM RESPONSE',
      headline: 'Rapid, Reliable Alarm Response When Every Minute Counts',
      subheadline:
        'An alarm activation demands a swift, professional response — whether to secure the premises, support the police, or confirm a false activation. We provide dedicated alarm response with clear response times and procedures, so you have one less thing to worry about out of hours.',
    },
    imageCopy: {
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
      imageAlt: 'Professional vehicle and lighting at night',
      heading: 'The Role of Professional Alarm Response',
      paragraphs: [
        'Alarm response is the service that bridges the gap between your alarm going off and the site being checked and secured. When an activation occurs, a trained responder attends within the agreed timeframe, assesses the situation, and takes the appropriate steps — from securing the building to liaising with police or keyholders.',
        'For businesses, this means fewer false alarms going unresolved, better support for police when there is an incident, and a clear record of attendance. Many insurers and accreditation schemes expect or recommend a formal alarm response capability; we help you meet those expectations with a transparent, reliable service.',
      ],
    },
    features: [
      {
        title: 'Clear response timeframes',
        text: 'We agree response times with you upfront, so you can plan around them and meet the requirements of insurers and auditors.',
        icon: 'clock',
      },
      {
        title: 'Consistent procedures',
        text: 'Our responders follow set procedures for attendance, site check, and handover, giving you an auditable and reliable process.',
        icon: 'clipboard',
      },
      {
        title: 'Support for police and keyholders',
        text: 'When police attendance is required, our presence can help facilitate access and handover, supporting a faster resolution.',
        icon: 'shield',
      },
      {
        title: 'Reduced false-alarm impact',
        text: 'Quick attendance to confirm false activations can help reduce call-outs for keyholders and improve relations with police and ARC.',
        icon: 'check',
      },
    ],
  },

  surveys: {
    slug: 'surveys',
    title: 'Security Surveys & Risk Assessments',
    hero: {
      micro: 'SECURITY SURVEYS & RISK ASSESSMENTS',
      headline: 'Identify Vulnerabilities and Strengthen Your Security Posture',
      subheadline:
        'A security survey gives you a clear view of how your premises and procedures stack up against best practice and your own risk profile. We assess what you have in place, highlight gaps, and recommend practical, proportionate improvements — so you can prioritise spend and meet compliance expectations.',
    },
    imageCopy: {
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
      imageAlt: 'Professional reviewing documents and plans',
      heading: 'Why a Security Survey Is Worth Your Time',
      paragraphs: [
        'Security surveys and risk assessments are used by businesses to understand where they are exposed and what measures would make the biggest difference. They can support insurance requirements, tender responses, and internal governance — and help you avoid spending on measures that do not address your real risks.',
        'We look at physical security, access control, alarm and keyholding arrangements, and procedures where relevant. The output is a report that sets out findings and prioritised recommendations, so you can take informed decisions and, where you choose, implement changes in a sensible order.',
      ],
    },
    features: [
      {
        title: 'Structured assessment',
        text: 'We follow a clear methodology so that nothing important is missed and the results are consistent and easy to act on.',
        icon: 'clipboard',
      },
      {
        title: 'Prioritised recommendations',
        text: 'Recommendations are ordered by impact and practicality, so you can focus on what matters most within your budget.',
        icon: 'list',
      },
      {
        title: 'Aligned to your risk profile',
        text: 'The survey is tailored to your type of premises, use, and risk appetite — not a one-size-fits-all checklist.',
        icon: 'target',
      },
      {
        title: 'Support for compliance',
        text: 'The report can help you demonstrate due diligence to insurers, auditors, and clients who expect evidence of risk assessment.',
        icon: 'shield',
      },
    ],
  },
};

export const SERVICE_SLUGS = Object.keys(SERVICES_DATA);

export function getServiceBySlug(slug) {
  return SERVICES_DATA[slug] || null;
}
