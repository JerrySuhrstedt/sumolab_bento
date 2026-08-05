import React from 'react';
export function Accordion({ items }) {
  const [open, setOpen] = React.useState(0);
  return React.createElement('div', { style: { display: 'flex', flexDirection: 'column' } },
    items.map((it, i) => React.createElement('div', { key: i, style: { borderBottom: '1px solid var(--color-border)' } },
      React.createElement('button', {
        onClick: () => setOpen(open === i ? -1 : i),
        style: {
          width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer',
          padding: '20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16,
          fontFamily: 'var(--font-body)', fontWeight: 'var(--fw-semibold)', fontSize: 'var(--fs-body)', color: 'var(--color-ink)',
        },
      }, it.q, React.createElement('span', { style: { color: 'var(--color-accent)', fontSize: 20, flexShrink: 0, transform: open === i ? 'rotate(45deg)' : 'none', transition: 'transform var(--duration-base) var(--ease-standard)' } }, '+')),
      open === i ? React.createElement('p', { style: { margin: '0 0 20px', fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body-sm)', lineHeight: 'var(--lh-body)', color: 'var(--color-ink-muted)' } }, it.a) : null
    ))
  );
}
