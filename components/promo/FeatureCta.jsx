import React, { useState } from 'react';

/**
 * Full-width teal CTA card: translucent icon tile, title + sky subtitle,
 * coral arrow. Used for the Ütőválasztó entry point on the home feed.
 */
export function FeatureCta({ title, subtitle, icon, onClick, style, ...rest }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        background: 'var(--surface-brand)',
        borderRadius: 'var(--radius-card-lg)',
        padding: 'var(--gutter)',
        cursor: onClick ? 'pointer' : 'default',
        opacity: hover && onClick ? 0.9 : 1,
        transition: 'opacity var(--dur-fast) var(--ease-standard)',
        ...style,
      }}
      {...rest}
    >
      <span style={{ width: 48, height: 48, borderRadius: 'var(--radius-card-lg)', background: 'rgba(255,255,255,.08)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--action-primary)' }}>{icon}</span>
      <span style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <span style={{ font: 'var(--fw-bold) var(--fs-base)/1.35 var(--font-sans)', color: 'var(--text-on-brand)' }}>{title}</span>
        {subtitle && <span style={{ font: 'var(--fw-regular) 12px/1.45 var(--font-sans)', color: 'var(--text-on-brand-soft)' }}>{subtitle}</span>}
      </span>
      <i className="ph-bold ph-arrow-right" style={{ fontSize: 20, color: 'var(--action-primary)', flexShrink: 0 }} />
    </div>
  );
}
