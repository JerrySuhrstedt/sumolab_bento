import React from 'react';
export function Footer() {
  return React.createElement('footer', { style: { background: 'var(--navy-900)', color: 'var(--color-ink-on-dark-muted)', padding: '64px 48px 32px' } },
    React.createElement('div', { style: { maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 32 } },
      React.createElement('div', null,
        React.createElement('span', { style: { fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 500, fontSize: 20, color: 'var(--color-ink-on-dark)' } }, 'SumoLab'),
        React.createElement('p', { style: { fontFamily: 'var(--font-body)', fontSize: 13, lineHeight: 1.6, marginTop: 14, maxWidth: 260 } },
          'Senior marketing leadership for established businesses ready to turn scattered activity into focused growth.')
      ),
      [
        { h: 'Company', items: ['About', 'Approach', "Who It's For", 'Case Studies', 'Insights', 'Contact'] },
        { h: 'Services', items: ['Fractional CMO', 'Fractional Marketing Director'] },
        { h: 'Connect', items: ['Book a Strategy Call→', 'jerry@sumolab.co', '(480) 826-9400', 'Chandler, Arizona', 'LinkedIn'] },
      ].map((col, i) => React.createElement('div', { key: i },
        React.createElement('div', { style: { fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 13, color: 'var(--color-ink-on-dark)', marginBottom: 12 } }, col.h),
        React.createElement('ul', { style: { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 } },
          col.items.map((t, j) => React.createElement('li', { key: j, style: { fontFamily: 'var(--font-body)', fontSize: 13 } }, t)))
      ))
    ),
    React.createElement('div', { style: { maxWidth: 1080, margin: '48px auto 0', paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-body)', fontSize: 12 } },
      React.createElement('span', null, '© 2026 SumoLab LLC. All rights reserved.'),
      React.createElement('div', { style: { display: 'flex', gap: 16 } }, React.createElement('span', null, 'Privacy Policy'), React.createElement('span', null, 'Terms'))
    )
  );
}
