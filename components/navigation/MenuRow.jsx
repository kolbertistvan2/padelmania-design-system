import React, { useState } from 'react';

/** One row inside a MenuSection card. */
export function MenuRow({ icon, iconImage, label, hint, highlight = false, disabled = false, last = false, onClick, style, ...rest }) {
  const [hover, setHover] = useState(false);
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        width: '100%',
        padding: 'var(--gutter)',
        background: hover && !disabled ? 'var(--surface-sunken)' : 'transparent',
        border: 0,
        borderBottom: last ? 'none' : '1px solid var(--border-subtle)',
        textAlign: 'left',
        cursor: disabled ? 'default' : 'pointer',
        opacity: disabled ? 0.7 : 1,
        transition: 'background-color var(--dur-fast) var(--ease-standard)',
        ...style,
      }}
      {...rest}
    >
      {iconImage
        ? <img src={iconImage} alt="" style={{ width: 36, height: 36, borderRadius: 10, objectFit: 'contain', flexShrink: 0 }} />
        : <span style={{ width: 36, height: 36, borderRadius: 10, background: disabled ? 'var(--pm-gray-100)' : highlight ? 'var(--pm-coral-tint-2)' : 'var(--surface-sunken)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: highlight ? 'var(--text-action)' : 'var(--text-brand)' }}>{icon}</span>}
      <span style={{ flex: 1, font: 'var(--type-body)', color: disabled ? 'var(--text-muted)' : 'var(--text-primary)' }}>{label}</span>
      {hint && <span style={{ font: 'var(--fw-medium) 12px/1.4 var(--font-sans)', color: highlight ? 'var(--text-action)' : 'var(--text-muted)', marginRight: 4 }}>{hint}</span>}
      <i className="ph-bold ph-caret-right" style={{ fontSize: 16, color: 'var(--text-disabled)' }} />
    </button>
  );
}

/** Uppercase caption + white rounded card wrapping a stack of MenuRows. */
export function MenuSection({ title, children, style, ...rest }) {
  const rows = React.Children.toArray(children);
  return (
    <section style={{ display: 'flex', flexDirection: 'column', gap: 8, ...style }} {...rest}>
      {title && (
        <span style={{ font: 'var(--fw-semibold) 12px/1.4 var(--font-sans)', color: 'var(--text-label)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-caps)', padding: '0 8px' }}>{title}</span>
      )}
      <div style={{ background: 'var(--surface-card)', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
        {rows.map((child, i) => React.isValidElement(child) ? React.cloneElement(child, { last: i === rows.length - 1 }) : child)}
      </div>
    </section>
  );
}
