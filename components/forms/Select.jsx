import React from 'react';
export function Select({ label, options = [] }) {
  return React.createElement('label', { style: { display: 'flex', flexDirection: 'column', gap: 6 } },
    label ? React.createElement('span', { style: { fontFamily: 'var(--font-body)', fontSize: 'var(--fs-caption)', fontWeight: 'var(--fw-medium)', color: 'var(--color-ink-muted)' } }, label) : null,
    React.createElement('select', {
      style: {
        fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body-sm)', color: 'var(--color-ink)',
        background: 'var(--color-surface)', border: '1px solid var(--color-border-strong)',
        borderRadius: 'var(--radius-sm)', padding: '12px 14px', width: '100%', outline: 'none',
      },
    }, options.map((o, i) => React.createElement('option', { key: i, value: o }, o)))
  );
}
