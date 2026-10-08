import React from 'react';

const fmt = (n) => (typeof n === 'number' ? n.toLocaleString('hu-HU').replace(/,/g, ' ') + ' Ft' : n);

/**
 * The Mánia+ member-price box on product detail. Sky-tint ground with a
 * sky border for non-members plus a "Csatlakozz" CTA; success-green for
 * active members, where the CTA is replaced by the free-shipping note.
 */
export function ManiaPriceBox({ memberPrice, savings, isMember = false, markSrc, onJoin, style, ...rest }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        background: isMember ? 'var(--mania-active-surface)' : 'var(--mania-surface)',
        border: `1px solid ${isMember ? 'var(--mania-active-border)' : 'var(--mania-border)'}`,
        borderRadius: 'var(--radius-md)',
        padding: 12,
        ...style,
      }}
      {...rest}
    >
      {markSrc && <img src={markSrc} alt="" style={{ width: 40, height: 40, borderRadius: 8, flexShrink: 0 }} />}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ font: 'var(--fw-medium) 11px/1.4 var(--font-sans)', color: isMember ? 'var(--mania-active-text)' : 'var(--mania-text)' }}>
          {isMember ? 'A te Mánia+ árad:' : 'Mánia Plusz ár:'}
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 1, flexWrap: 'wrap' }}>
          <span style={{ font: 'var(--fw-bold) 18px/1.2 var(--font-sans)', color: isMember ? 'var(--mania-active-text)' : 'var(--mania-text)' }}>{fmt(memberPrice)}</span>
          {isMember
            ? <span style={{ font: 'var(--fw-medium) 11px/1.4 var(--font-sans)', color: 'var(--mania-active-text)' }}>+ingyenes szállítás</span>
            : savings != null && <span style={{ font: 'var(--fw-regular) 11px/1.4 var(--font-sans)', color: 'var(--pm-warm-gray)' }}>spórolj {fmt(savings)}-t</span>}
        </div>
      </div>
      {!isMember && onJoin && (
        <button type="button" onClick={onJoin} style={{ flexShrink: 0, background: 'var(--action-primary)', color: 'var(--text-on-action)', border: 0, borderRadius: 8, padding: '8px 12px', font: 'var(--fw-semibold) 11px/1.3 var(--font-sans)', cursor: 'pointer' }}>Csatlakozz</button>
      )}
    </div>
  );
}
