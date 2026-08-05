import React from 'react';
import { Accordion } from '../../components/content/Accordion.jsx';
const faqs = [
  { q: 'How is this different from hiring a full-time Director of Marketing or CMO?', a: 'You get senior-level leadership without salary, benefits, onboarding time, or long-term risk. You gain experience and perspective immediately, with flexibility to scale up or down as your business needs change.' },
  { q: 'Who is this for?', a: 'Established businesses that want growth, clarity, and accountability. Typical clients we work with generate $5M+ in revenue.' },
  { q: 'Is this the same as hiring an agency?', a: 'No. Agencies execute tasks. I own the strategy and hold execution accountable.' },
  { q: 'Is this more like a CMO or a marketing manager?', a: 'It is senior leadership focused on results. Strategy plus execution ownership, without full-time overhead.' },
  { q: 'How long do clients typically work with you?', a: 'Most engagements start at six months and continue as long as growth and clarity are priorities.' },
  { q: 'Will you do the work or just advise?', a: 'I lead, guide, and step in where needed. The goal is progress, not busywork.' },
  { q: 'Is AI actually practical for my business?', a: 'Yes, when applied correctly. I focus on real automation that saves time and money, not hype.' },
];
export function FAQSection() {
  return React.createElement('section', { style: { padding: '90px 48px', background: 'var(--color-surface-sunken)' } },
    React.createElement('div', { style: { maxWidth: 720, margin: '0 auto' } },
      React.createElement('div', { style: { textAlign: 'center', marginBottom: 32 } },
        React.createElement('div', { style: { color: 'var(--color-accent)', fontSize: 'var(--fs-eyebrow)', letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', fontWeight: 'var(--fw-semibold)' } }, 'FAQs'),
        React.createElement('h2', { style: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--fs-heading-lg)', margin: '16px 0 0' } }, 'Questions answered.')
      ),
      React.createElement(Accordion, { items: faqs })
    )
  );
}
export function FinalCTA() {
  return React.createElement('section', { style: { padding: '90px 48px', background: 'var(--color-primary)', color: 'var(--color-ink-on-dark)', textAlign: 'center' } },
    React.createElement('h2', { style: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--fs-heading-lg)', margin: '0 0 28px', maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' } },
      'Ready to stop guessing and start owning your marketing?'),
    React.createElement('a', { href: '#', style: { display: 'inline-block', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15, color: 'var(--color-primary)', background: 'var(--color-ink-on-dark)', padding: '15px 28px', borderRadius: 'var(--radius-sm)', textDecoration: 'none' } }, 'Book a Strategy Call→')
  );
}
