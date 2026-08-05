import React from 'react';
export function Tag({ children }) {
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-caption)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--color-ink)',
      background: 'var(--color-surface-sunken)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-pill)',
      padding: '6px 14px',
    },
  }, children);
}
