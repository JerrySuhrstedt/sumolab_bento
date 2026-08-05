import React from 'react';
export function SectionHeading({ eyebrow, title, align = 'left', onDark = false }) {
  return React.createElement('div', { style: { textAlign: align, maxWidth: 720, margin: align === 'center' ? '0 auto' : 0 } },
    eyebrow ? React.createElement('div', { style: { color: onDark ? 'var(--color-ink-on-dark-muted)' : 'var(--color-accent)', fontSize: 'var(--fs-eyebrow)', letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', fontWeight: 'var(--fw-semibold)', marginBottom: 14 } }, eyebrow) : null,
    React.createElement('h2', { style: { fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-medium)', fontSize: 'var(--fs-heading-lg)', lineHeight: 'var(--lh-heading)', color: onDark ? 'var(--color-ink-on-dark)' : 'var(--color-ink)', margin: 0 } }, title)
  );
}
