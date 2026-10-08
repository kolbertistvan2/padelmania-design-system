import React from 'react';

const TONES = {
  brand: { bg: 'var(--surface-brand)', fg: 'var(--text-on-brand)', border: 'transparent' },
  action: { bg: 'var(--action-primary)', fg: 'var(--text-on-action)', border: 'transparent' },
  success: { bg: 'var(--feedback-success)', fg: 'var(--pm-white)', border: 'transparent' },
  accent: { bg: 'var(--surface-accent)', fg: 'var(--text-brand)', border: 'transparent' },
  outline: { bg: 'var(--surface-card)', fg: 'var(--text-heading)', border: 'var(--border-subtle)' },
  open: { bg: 'rgba(52,199,89,.15)', fg: 'var(--pm-open)', border: 'transparent' },
  closed: { bg: 'rgba(255,59,48,.15)', fg: 'var(--pm-closed)', border: 'transparent' },
  onBrand: { bg: 'var(--surface-on-brand-soft-2)', fg: 'var(--action-primary)', border: 'transparent' },
};

/**
 * Small status/label chip. `caps` is the AKCIÓ treatment: 9–10px bold with
 * 0.6px tracking.
 */
export function Badge({ children, tone = 'brand', caps = false, size = 'md', iconLeft, style, ...rest }) {
  const t = TONES[tone] || TONES.brand;
  const small = size === 'sm';
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 3,
        background: t.bg,
        color: t.fg,
        border: `1px solid ${t.border}`,
        borderRadius: caps ? 5 : 'var(--radius-sm)',
        padding: small ? '2px 5px' : caps ? '3px 8px' : '3px 6px',
        font: `var(--fw-${caps ? 'bold' : 'semibold'}) ${caps ? (small ? 9 : 10) : small ? 10 : 11}px/1.35 var(--font-sans)`,
        letterSpacing: caps ? 'var(--tracking-caps)' : 'normal',
        textTransform: caps ? 'uppercase' : 'none',
        whiteSpace: 'nowrap',
        ...style,
      }}
      {...rest}
    >
      {iconLeft}
      {children}
    </span>
  );
}
