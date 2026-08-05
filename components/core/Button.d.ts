import * as React from 'react';
/**
 */
export interface ButtonProps {
  /** Visual style. primary = solid navy, accent = solid teal, secondary = outlined, ghost = text link. */
  variant?: 'primary' | 'accent' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  /** Appends a trailing arrow, matching the site's "Book a Strategy Call→" CTA style. */
  arrow?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
