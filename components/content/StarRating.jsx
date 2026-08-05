import React from 'react';
export function StarRating({ count = 5 }) {
  return React.createElement('div', { style: { display: 'flex', gap: 2, color: 'var(--color-star)', fontSize: 15, lineHeight: 1 } },
    Array.from({ length: count }).map((_, i) => React.createElement('span', { key: i }, '★'))
  );
}
