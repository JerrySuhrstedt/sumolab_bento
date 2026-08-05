import React from 'react';
const fieldStyle = {
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--fs-body-sm)',
  color: 'var(--color-ink)',
  background: 'var(--color-surface)',
  border: '1px solid var(--color-border-strong)',
  borderRadius: 'var(--radius-sm)',
  padding: '12px 14px',
  width: '100%',
  outline: 'none',
};
export function Input({ label, placeholder, type = 'text' }) {
  const [focus, setFocus] = React.useState(false);
  return React.createElement('label', { style: { display: 'flex', flexDirection: 'column', gap: 6 } },
    label ? React.createElement('span', { style: { fontFamily: 'var(--font-body)', fontSize: 'var(--fs-caption)', fontWeight: 'var(--fw-medium)', color: 'var(--color-ink-muted)' } }, label) : null,
    React.createElement('input', {
      type, placeholder,
      onFocus: () => setFocus(true), onBlur: () => setFocus(false),
      style: { ...fieldStyle, borderColor: focus ? 'var(--color-focus-ring)' : 'var(--color-border-strong)', boxShadow: focus ? '0 0 0 3px var(--color-accent-surface)' : 'none' },
    })
  );
}
