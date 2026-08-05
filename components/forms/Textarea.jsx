import React from 'react';
export function Textarea({ label, placeholder, rows = 4 }) {
  const [focus, setFocus] = React.useState(false);
  return React.createElement('label', { style: { display: 'flex', flexDirection: 'column', gap: 6 } },
    label ? React.createElement('span', { style: { fontFamily: 'var(--font-body)', fontSize: 'var(--fs-caption)', fontWeight: 'var(--fw-medium)', color: 'var(--color-ink-muted)' } }, label) : null,
    React.createElement('textarea', {
      placeholder, rows,
      onFocus: () => setFocus(true), onBlur: () => setFocus(false),
      style: {
        fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body-sm)', color: 'var(--color-ink)',
        background: 'var(--color-surface)', border: '1px solid ' + (focus ? 'var(--color-focus-ring)' : 'var(--color-border-strong)'),
        borderRadius: 'var(--radius-sm)', padding: '12px 14px', width: '100%', outline: 'none', resize: 'vertical',
        boxShadow: focus ? '0 0 0 3px var(--color-accent-surface)' : 'none',
      },
    })
  );
}
