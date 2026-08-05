import React from 'react';
export function Card({ eyebrow, title, children, style }) {
  return React.createElement('div', {
    style: {
      background: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-md)',
      padding: '28px',
      boxShadow: 'var(--shadow-sm)',
      ...style,
    },
  },
    eyebrow ? React.createElement('div', { style: { color: 'var(--color-accent)', fontSize: 'var(--fs-eyebrow)', letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', fontWeight: 'var(--fw-semibold)', marginBottom: 10 } }, eyebrow) : null,
    title ? React.createElement('h3', { style: { fontFamily: 'var(--font-display)', fontSize: 'var(--fs-heading-sm)', margin: '0 0 10px', color: 'var(--color-ink)', fontWeight: 'var(--fw-medium)' } }, title) : null,
    React.createElement('div', { style: { fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body)', lineHeight: 'var(--lh-body)', color: 'var(--color-ink-muted)' } }, children)
  );
}
