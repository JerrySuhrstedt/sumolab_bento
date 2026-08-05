import React from 'react';
export function Header() {
  const links = ['Services', 'Approach', "Who It's For", 'Case Studies', 'About', 'Insights', 'Contact'];
  return React.createElement('header', {
    style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 48px', background: 'var(--color-primary)' },
  },
    React.createElement('span', { style: { fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 500, fontSize: 22, color: 'var(--color-ink-on-dark)' } }, 'SumoLab'),
    React.createElement('nav', { style: { display: 'flex', gap: 26 } },
      links.map((l, i) => React.createElement('a', { key: i, href: '#', style: { fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--color-ink-on-dark-muted)' } }, l))
    ),
    React.createElement('a', { href: '#', style: {
      fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14, color: 'var(--color-primary)', background: 'var(--color-ink-on-dark)',
      padding: '10px 18px', borderRadius: 'var(--radius-sm)', textDecoration: 'none',
    } }, 'Book a Strategy Call→')
  );
}
