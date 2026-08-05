import React from 'react';
export function Badge({ children, tone = 'accent' }) {
  const tones = {
    accent: { color: 'var(--color-accent)' },
    ink: { color: 'var(--color-ink-muted)' },
    onDark: { color: 'var(--color-ink-on-dark-muted)' },
  };
  return React.createElement('span', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      fontWeight: 'var(--fw-semibold)',
      ...(tones[tone] || tones.accent),
    },
  }, children);
}
