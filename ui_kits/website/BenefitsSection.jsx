import React from 'react';
import { Card } from '../../components/content/Card.jsx';
const benefits = [
  { title: 'Clarity and focus', body: 'You know what matters, what does not, and where to invest next.' },
  { title: 'Accountable execution', body: 'Agencies and vendors perform better when someone senior is leading them. You stop babysitting.' },
  { title: 'Lower stress. Better decisions.', body: 'Marketing stops being noise. You regain time and confidence as an owner.' },
];
export function BenefitsSection() {
  return React.createElement('section', { style: { padding: '90px 48px', background: 'var(--color-surface-sunken)' } },
    React.createElement('div', { style: { maxWidth: 980, margin: '0 auto' } },
      React.createElement('div', { style: { textAlign: 'center', marginBottom: 48 } },
        React.createElement('div', { style: { color: 'var(--color-accent)', fontSize: 'var(--fs-eyebrow)', letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', fontWeight: 'var(--fw-semibold)' } }, 'Benefits'),
        React.createElement('h2', { style: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--fs-heading-lg)', margin: '16px 0 0' } }, 'So, what are the benefits?')
      ),
      React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 } },
        benefits.map((b, i) => React.createElement(Card, { key: i, title: b.title }, b.body))
      ),
      React.createElement('div', { style: { marginTop: 48, background: 'var(--color-primary)', color: 'var(--color-ink-on-dark)', borderRadius: 'var(--radius-md)', padding: '32px 40px', display: 'flex', alignItems: 'center', gap: 24 } },
        React.createElement('div', { style: { width: 96, height: 96, flexShrink: 0, background: 'var(--navy-600)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: 'var(--color-ink-on-dark-muted)' } }, 'Photo'),
        React.createElement('p', { style: { fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'var(--fs-heading-sm)', margin: 0 } },
          'Senior leadership, not another vendor. One person who owns the outcome.')
      )
    )
  );
}
