import React, { useState } from 'react';

/**
 * Filter / sort pill. Two skins: `chip` (cream fill, static label — the
 * result profile chips) and `toggle` (hairline outline, teal fill when
 * selected — the Court Finder sort row).
 */
export function Chip({ children, kind = 'toggle', selected = false, iconLeft, onClick, style, ...rest }) {
  const [hover, setHover] = useState(false);
  const isStatic = kind === 'chip';
  const interactive = !isStatic && typeof onClick === 'function';

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    borderRadius: 'var(--radius-full)',
    padding: isStatic ? '6px 12px' : '8px 12px',
    font: `var(--fw-semibold) var(--fs-sm)/var(--lh-label) var(--font-sans)`,
    whiteSpace: 'nowrap',
    cursor: interactive ? 'pointer' : 'default',
    transition: 'background-color var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)',
  };

  const skin = isStatic
    ? { background: 'var(--surface-sunken)', color: 'var(--text-brand)', border: '1px solid transparent', font: `var(--fw-semibold) 12px/var(--lh-label) var(--font-sans)` }
    : selected
      ? { background: 'var(--surface-brand)', color: 'var(--text-on-brand)', border: '1px solid var(--surface-brand)' }
      : { background: hover ? 'var(--surface-sunken)' : 'transparent', color: 'var(--text-label)', border: '1px solid var(--border-subtle)', fontWeight: 'var(--fw-medium)' };

  const Tag = interactive ? 'button' : 'span';
  return (
    <Tag
      type={interactive ? 'button' : undefined}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-pressed={interactive ? selected : undefined}
      style={{ ...base, ...skin, ...style }}
      {...rest}
    >
      {iconLeft}
      {children}
    </Tag>
  );
}
