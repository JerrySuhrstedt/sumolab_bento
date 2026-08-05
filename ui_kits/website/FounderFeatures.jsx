import React from 'react';
export function FounderSection() {
  return React.createElement('section', { style: { padding: '90px 48px', background: 'var(--color-surface-sunken)', textAlign: 'center' } },
    React.createElement('div', { style: { maxWidth: 640, margin: '0 auto' } },
      React.createElement('div', { style: { width: 88, height: 88, borderRadius: '50%', background: 'var(--color-border-strong)', margin: '0 auto 24px' } }),
      React.createElement('div', { style: { color: 'var(--color-accent)', fontSize: 'var(--fs-eyebrow)', letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', fontWeight: 'var(--fw-semibold)' } }, 'About'),
      React.createElement('h2', { style: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--fs-heading-md)', margin: '16px 0' } }, "Hi, I'm Jerry Suhrstedt."),
      React.createElement('p', { style: { fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body)', lineHeight: 'var(--lh-body)', color: 'var(--color-ink-muted)', margin: '0 0 24px' } },
        '26 years of experience as an entrepreneur, marketing leader, and business consultant, helping established businesses develop and execute high-impact marketing strategies without the commitment of a full-time hire.'),
      React.createElement('a', { href: '#', style: { fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--color-link)' } }, 'About Jerry→')
    )
  );
}
export function FeaturesSection() {
  const left = ['Fractional CMO Leadership', 'Marketing Strategy And Roadmap', 'Brand And Messaging Alignment', 'Agency And Vendor Oversight', 'KPI Definition And Reporting'];
  const right = ['Funnel And Conversion Review', 'CRM And Marketing System Optimization', 'AI And Automation Opportunity Mapping', 'Weekly Or Biweekly Leadership Cadence'];
  const row = (items) => React.createElement('ul', { style: { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 } },
    items.map((t, i) => React.createElement('li', { key: i, style: { fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body)', color: 'var(--color-ink)', display: 'flex', gap: 10 } },
      React.createElement('span', { style: { color: 'var(--color-accent)' } }, '✓'), t)));
  return React.createElement('section', { style: { padding: '90px 48px', background: 'var(--color-bg)' } },
    React.createElement('div', { style: { maxWidth: 900, margin: '0 auto' } },
      React.createElement('div', { style: { color: 'var(--color-accent)', fontSize: 'var(--fs-eyebrow)', letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', fontWeight: 'var(--fw-semibold)', textAlign: 'center' } }, 'Features'),
      React.createElement('h2', { style: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--fs-heading-lg)', margin: '16px 0 8px', textAlign: 'center' } }, 'We feature.'),
      React.createElement('p', { style: { textAlign: 'center', fontFamily: 'var(--font-body)', color: 'var(--color-ink-muted)', margin: '0 0 40px' } }, 'Simple. Logical.'),
      React.createElement('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 } }, row(left), row(right))
    )
  );
}
