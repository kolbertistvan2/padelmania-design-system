import React from 'react';

/** List section header: title, optional caps badge, optional "Összes ›" link. */
export function SectionHeader({ title, badge, onSeeAll, seeAllLabel = 'Összes', style, ...rest }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '0 var(--gutter) 12px', ...style }} {...rest}>
      <span style={{ flex: 1, font: 'var(--fw-semibold) var(--fs-md)/var(--lh-heading) var(--font-sans)', color: 'var(--text-primary)', letterSpacing: 'var(--tracking-title)' }}>{title}</span>
      <span style={{ display: 'flex', alignItems: 'center', gap: 8, marginLeft: 12, flexShrink: 0 }}>
        {badge && (
          <span style={{ background: 'var(--surface-brand)', color: 'var(--text-on-brand)', borderRadius: 5, padding: '3px 8px', font: 'var(--fw-bold) 10px/1.35 var(--font-sans)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase' }}>{badge}</span>
        )}
        {onSeeAll && (
          <button type="button" onClick={onSeeAll} style={{ display: 'inline-flex', alignItems: 'center', gap: 2, background: 'transparent', border: 0, padding: 0, cursor: 'pointer', font: 'var(--fw-medium) var(--fs-sm)/var(--lh-label) var(--font-sans)', color: 'var(--text-action)' }}>
            {seeAllLabel}
            <i className="ph-bold ph-caret-right" style={{ fontSize: 13 }} />
          </button>
        )}
      </span>
    </div>
  );
}
