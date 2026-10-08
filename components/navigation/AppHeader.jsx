import React from 'react';

/**
 * Teal app header: logo (or title) on the left, icon actions on the right,
 * optional search row underneath. Full-bleed teal, no shadow — the colour
 * change is the separation.
 */
export function AppHeader({ logoSrc, title, actions, search, children, style, ...rest }) {
  return (
    <header style={{ background: 'var(--surface-brand)', ...style }} {...rest}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px var(--gutter) 10px' }}>
        {logoSrc
          ? <img src={logoSrc} alt="Padel Mánia" style={{ width: 150, height: 40, objectFit: 'contain', objectPosition: 'left center' }} />
          : <span style={{ font: 'var(--fw-bold) 18px/1.2 var(--font-sans)', color: 'var(--text-on-brand)' }}>{title}</span>}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>{actions}</div>
      </div>
      {search && <div style={{ padding: '0 var(--gutter) var(--gutter)' }}>{search}</div>}
      {children}
    </header>
  );
}

/** Icon action inside the teal header, with optional coral count badge. */
export function HeaderAction({ children, count, onClick, label, style, ...rest }) {
  return (
    <button type="button" aria-label={label} onClick={onClick} style={{ position: 'relative', padding: 8, background: 'transparent', border: 0, cursor: 'pointer', display: 'inline-flex', color: 'var(--text-on-brand)', ...style }} {...rest}>
      {children}
      {count > 0 && (
        <span style={{ position: 'absolute', top: 4, right: 4, background: 'var(--action-primary)', color: 'var(--text-on-action)', borderRadius: 9, minWidth: 16, height: 16, padding: '0 3px', font: 'var(--fw-bold) 9px/16px var(--font-sans)', textAlign: 'center' }}>
          {count > 99 ? '99+' : count}
        </span>
      )}
    </button>
  );
}
