import React from 'react';
import { StarRating } from './StarRating.jsx';
export function Testimonial({ photo, name, role, quote }) {
  return React.createElement('div', {
    style: {
      background: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-md)',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      boxShadow: 'var(--shadow-sm)',
    },
  },
    React.createElement(StarRating, { count: 5 }),
    React.createElement('p', { style: { fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body)', lineHeight: 'var(--lh-body)', color: 'var(--color-ink)', margin: 0 } }, '“' + quote + '”'),
    React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 12, marginTop: 4 } },
      photo ? React.createElement('img', { src: photo, alt: name, style: { width: 40, height: 40, borderRadius: '50%', objectFit: 'cover' } }) :
        React.createElement('div', { style: { width: 40, height: 40, borderRadius: '50%', background: 'var(--color-surface-sunken)', border: '1px solid var(--color-border)' } }),
      React.createElement('div', null,
        React.createElement('div', { style: { fontFamily: 'var(--font-body)', fontWeight: 'var(--fw-semibold)', fontSize: 'var(--fs-body-sm)', color: 'var(--color-ink)' } }, name),
        React.createElement('div', { style: { fontFamily: 'var(--font-body)', fontSize: 'var(--fs-caption)', color: 'var(--color-ink-muted)' } }, role)
      )
    )
  );
}
