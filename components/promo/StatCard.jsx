import React from 'react';

/** Cream stat tile — big teal figure over a warm-gray caption. */
export function StatCard({ value, label, style, ...rest }) {
  return (
    <div style={{ flex: 1, background: 'var(--surface-sunken)', borderRadius: 'var(--radius-card-lg)', padding: '12px 8px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, ...style }} {...rest}>
      <span style={{ font: 'var(--fw-bold) var(--fs-lg)/24px var(--font-sans)', color: 'var(--text-brand)' }}>{value}</span>
      <span style={{ font: 'var(--fw-medium) 11px/1.3 var(--font-sans)', color: 'var(--pm-warm-gray)' }}>{label}</span>
    </div>
  );
}

/** Icon-disc row: coral glyph in a tinted circle, teal title, gray sub. */
export function BenefitRow({ icon, title, subtitle, tone = 'coral', divider = false, style, ...rest }) {
  const disc = tone === 'cream' ? 'var(--surface-sunken)' : 'var(--pm-coral-tint)';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingBottom: divider ? 12 : 0, marginBottom: divider ? 12 : 0, borderBottom: divider ? '1px solid var(--border-subtle)' : 'none', ...style }} {...rest}>
      <span style={{ width: tone === 'cream' ? 40 : 36, height: tone === 'cream' ? 40 : 36, borderRadius: tone === 'cream' ? 'var(--radius-md)' : 'var(--radius-full)', background: disc, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--text-action)' }}>{icon}</span>
      <span style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 1 }}>
        <span style={{ font: 'var(--fw-semibold) var(--fs-sm)/17px var(--font-sans)', color: 'var(--text-brand)' }}>{title}</span>
        {subtitle && <span style={{ font: 'var(--fw-regular) 12px/16px var(--font-sans)', color: 'var(--pm-warm-gray)' }}>{subtitle}</span>}
      </span>
    </div>
  );
}
