import React from 'react';
export function GapSection() {
  return React.createElement('section', { style: { padding: '90px 48px', background: 'var(--color-bg)', textAlign: 'center' } },
    React.createElement('div', { style: { maxWidth: 720, margin: '0 auto' } },
      React.createElement('div', { style: { color: 'var(--color-accent)', fontSize: 'var(--fs-eyebrow)', letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', fontWeight: 'var(--fw-semibold)' } }, 'The gap'),
      React.createElement('h2', { style: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--fs-heading-lg)', lineHeight: 'var(--lh-heading)', margin: '16px 0 20px' } },
        'Most growing businesses do not have a marketing problem. They have a leadership gap.'),
      React.createElement('p', { style: { fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body)', lineHeight: 'var(--lh-body)', color: 'var(--color-ink-muted)', margin: 0 } },
        'Marketing tasks are getting done. Ads are running. Vendors are busy. But no one owns the strategy. Messaging changes by channel. Budgets get spent without clear return. Decisions feel reactive. Growth feels harder than it should.'),
      React.createElement('p', { style: { fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body)', lineHeight: 'var(--lh-body)', color: 'var(--color-ink-muted)', margin: '16px 0 0' } },
        'Owners end up managing marketing instead of leading the business. That is expensive. In money. In time. In stress.')
    )
  );
}
export function SolutionSection() {
  return React.createElement('section', { style: { padding: '0 48px 90px', background: 'var(--color-bg)' } },
    React.createElement('div', { style: { maxWidth: 980, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' } },
      React.createElement('div', { style: { aspectRatio: '4/3', background: 'var(--color-surface-sunken)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--color-ink-faint)' } }, 'Photo: entrepreneur in office'),
      React.createElement('div', null,
        React.createElement('div', { style: { color: 'var(--color-accent)', fontSize: 'var(--fs-eyebrow)', letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', fontWeight: 'var(--fw-semibold)' } }, 'Solution'),
        React.createElement('h2', { style: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--fs-heading-md)', lineHeight: 'var(--lh-heading)', margin: '16px 0' } }, 'This is where a Fractional CMO steps in.'),
        React.createElement('p', { style: { fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body)', lineHeight: 'var(--lh-body)', color: 'var(--color-ink-muted)', margin: 0 } },
          "SumoLab's founder acts as the owner of your marketing function, bringing clarity, direction, and accountability across strategy, execution, systems, and performance, so marketing supports growth instead of draining it.")
      )
    )
  );
}
