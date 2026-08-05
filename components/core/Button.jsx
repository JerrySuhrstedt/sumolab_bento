import React from 'react';
const sizes = {
  sm: { padding: '8px 16px', fontSize: 'var(--fs-caption)' },
  md: { padding: '12px 22px', fontSize: 'var(--fs-body-sm)' },
  lg: { padding: '15px 28px', fontSize: 'var(--fs-body)' },
};
const base = {
  fontFamily: 'var(--font-body)',
  fontWeight: 'var(--fw-semibold)',
  borderRadius: 'var(--radius-sm)',
  border: '1px solid transparent',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  transition: 'background var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)',
  lineHeight: 1,
};
const variants = {
  primary: { background: 'var(--color-primary)', color: 'var(--color-primary-ink)', borderColor: 'var(--color-primary)' },
  accent: { background: 'var(--color-accent)', color: 'var(--color-accent-ink)', borderColor: 'var(--color-accent)' },
  secondary: { background: 'transparent', color: 'var(--color-ink)', borderColor: 'var(--color-border-strong)' },
  ghost: { background: 'transparent', color: 'var(--color-link)', borderColor: 'transparent', padding: 0 },
};
const hoverVariants = {
  primary: { background: 'var(--color-primary-hover)' },
  accent: { background: 'var(--color-accent-hover)' },
  secondary: { background: 'var(--color-surface-sunken)' },
  ghost: { color: 'var(--color-link-hover)', textDecoration: 'underline' },
};

export function Button({ variant = 'primary', size = 'md', arrow = false, disabled = false, children, onClick, style }) {
  const [hover, setHover] = React.useState(false);
  const v = variants[variant] || variants.primary;
  const hv = hoverVariants[variant] || {};
  const s = variant === 'ghost' ? {} : sizes[size] || sizes.md;
  return React.createElement('button', {
    onClick,
    disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base, ...s, ...v,
      ...(hover && !disabled ? hv : {}),
      opacity: disabled ? 0.5 : 1,
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style,
    },
  }, children, arrow ? '→' : null);
}
