import React from 'react';
export function Hero() {
  return React.createElement('section', { style: { position: 'relative', background: 'var(--color-primary)', color: 'var(--color-ink-on-dark)', padding: '90px 48px 110px', textAlign: 'center', overflow: 'hidden' } },
    React.createElement('div', { style: {
      position: 'absolute', inset: 0, background: 'var(--navy-900)', opacity: 0.35,
    } }),
    React.createElement('div', { style: { position: 'relative', maxWidth: 760, margin: '0 auto' } },
      React.createElement('h1', { style: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--fs-display-lg)', lineHeight: 'var(--lh-tight)', margin: 0 } }, 'Turn Fragmented Marketing Into Predictable Growth.'),
      React.createElement('p', { style: { fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body-lg)', lineHeight: 'var(--lh-body)', color: 'var(--color-ink-on-dark-muted)', margin: '24px 0 0' } },
        'Fractional CMO for established businesses ($5M+ revenue) that need clear strategy, accountable execution, and modern automation, without hiring full-time.'),
      React.createElement('ul', { style: { listStyle: 'none', padding: 0, margin: '28px 0 0', display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' } },
        ['Replace Agency Chaos With Leadership', 'Align Marketing To Revenue Goals', 'Reduce Waste With Smarter Systems And AI'].map((t, i) =>
          React.createElement('li', { key: i, style: { fontFamily: 'var(--font-body)', fontSize: 15 } }, '— ' + t))),
      React.createElement('a', { href: '#', style: {
        display: 'inline-block', marginTop: 32, fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15, color: 'var(--color-primary)',
        background: 'var(--color-ink-on-dark)', padding: '15px 28px', borderRadius: 'var(--radius-sm)', textDecoration: 'none',
      } }, 'Book a Strategy Call→')
    )
  );
}
