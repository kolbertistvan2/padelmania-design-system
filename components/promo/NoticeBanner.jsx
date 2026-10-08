import React from 'react';

/** Sky-tint permission / info banner with accept + dismiss actions. */
export function NoticeBanner({ icon, children, onAccept, onDeny, acceptLabel = 'Engedélyezem', denyLabel = 'Most nem', onClose, style, ...rest }) {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', background: 'var(--surface-accent)', border: '1px solid var(--border-accent)', borderRadius: 'var(--radius-card-lg)', padding: 12, ...style }} {...rest}>
      {icon && <span style={{ width: 38, height: 38, borderRadius: 12, background: 'var(--pm-white)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--text-action)' }}>{icon}</span>}
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <span style={{ font: 'var(--fw-medium) var(--fs-sm)/18px var(--font-sans)', color: 'var(--text-heading)' }}>{children}</span>
        {(onAccept || onDeny) && (
          <div style={{ display: 'flex', gap: 8 }}>
            {onAccept && <button type="button" onClick={onAccept} style={{ background: 'var(--action-primary)', color: 'var(--text-on-action)', border: 0, borderRadius: 8, padding: '8px 14px', font: 'var(--fw-semibold) 12px/1.3 var(--font-sans)', cursor: 'pointer' }}>{acceptLabel}</button>}
            {onDeny && <button type="button" onClick={onDeny} style={{ background: 'transparent', color: 'var(--text-brand)', border: '1px solid var(--border-brand)', borderRadius: 8, padding: '8px 14px', font: 'var(--fw-semibold) 12px/1.3 var(--font-sans)', cursor: 'pointer' }}>{denyLabel}</button>}
          </div>
        )}
      </div>
      {onClose && (
        <button type="button" aria-label="Bezárás" onClick={onClose} style={{ background: 'transparent', border: 0, padding: 4, margin: '-4px -4px 0 0', cursor: 'pointer', color: 'var(--text-muted)', display: 'inline-flex' }}>
          <i className="ph-bold ph-x" style={{ fontSize: 16 }} />
        </button>
      )}
    </div>
  );
}
