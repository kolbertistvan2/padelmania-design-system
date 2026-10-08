import React, { useState } from 'react';

/**
 * Dark-teal membership banner from the home screen: app icon, two-line copy,
 * coral capsule CTA.
 */
export function ManiaPlusBanner({ title, subtitle, ctaLabel = 'Csatlakozz', markSrc, onClick, style, ...rest }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        background: 'var(--surface-brand-deep)',
        borderRadius: 'var(--radius-md)',
        padding: '10px 14px',
        cursor: onClick ? 'pointer' : 'default',
        opacity: hover && onClick ? 0.9 : 1,
        transition: 'opacity var(--dur-fast) var(--ease-standard)',
        ...style,
      }}
      {...rest}
    >
      {markSrc && <img src={markSrc} alt="" style={{ width: 32, height: 32, borderRadius: 8, flexShrink: 0 }} />}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ font: 'var(--fw-bold) var(--fs-sm)/1.35 var(--font-sans)', color: 'var(--text-on-brand)' }}>{title}</div>
        {subtitle && <div style={{ font: 'var(--fw-semibold) 11px/1.4 var(--font-sans)', color: 'var(--text-on-brand-soft)' }}>{subtitle}</div>}
      </div>
      <span style={{ flexShrink: 0, display: 'inline-flex', alignItems: 'center', gap: 4, background: 'var(--action-primary)', color: 'var(--text-on-action)', borderRadius: 20, padding: '7px 14px', font: 'var(--fw-bold) 10px/1.3 var(--font-sans)', letterSpacing: 'var(--tracking-caps)' }}>
        {ctaLabel}
        <i className="ph-bold ph-arrow-right" style={{ fontSize: 11 }} />
      </span>
    </div>
  );
}
