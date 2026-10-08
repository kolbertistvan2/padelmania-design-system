import React, { useState } from 'react';

const fmtDistance = (km) => (km == null ? null : km < 1 ? `${Math.round(km * 1000)} m` : `${km.toFixed(1).replace('.', ',')} km`);

/**
 * Court Finder accordion card. Collapsed: name, open/closed badge, distance,
 * rating, favourite heart, address. Expanded: hairline rule + three action
 * buttons (two coral, one teal).
 */
export function CourtCard({
  name,
  address,
  isOpen,
  distanceKm,
  rating,
  reviewCount,
  favorite = false,
  expanded = false,
  onToggle,
  onFavorite,
  onNavigate,
  onCall,
  onDetail,
  style,
  ...rest
}) {
  const [pressed, setPressed] = useState(false);
  const dist = fmtDistance(distanceKm);

  const action = (icon, label, bg, handler) => (
    <button type="button" onClick={(e) => { e.stopPropagation(); handler && handler(); }} style={{ flex: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 4, padding: '12px 8px', borderRadius: 'var(--radius-md)', border: 0, background: bg, color: 'var(--pm-white)', font: 'var(--fw-bold) var(--fs-sm)/1.3 var(--font-sans)', cursor: 'pointer' }}>
        <i className={`ph-bold ph-${icon}`} style={{ fontSize: 18 }} />
        {label}
      </button>
  );

  return (
    <article
      onClick={onToggle}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      style={{
        background: expanded ? 'var(--surface-sunken)' : favorite ? 'rgba(255,59,92,.05)' : 'var(--surface-card)',
        borderRadius: 'var(--radius-lg)',
        border: `var(--border-emphasis) solid ${expanded ? 'var(--action-primary)' : favorite ? 'rgba(255,59,92,.3)' : 'transparent'}`,
        padding: 12,
        boxShadow: 'var(--shadow-sm)',
        cursor: onToggle ? 'pointer' : 'default',
        transform: pressed ? 'scale(0.99)' : 'none',
        transition: 'background-color var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)',
        ...style,
      }}
      {...rest}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8, gap: 12 }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ font: 'var(--fw-semibold) var(--fs-base)/20px var(--font-sans)', color: 'var(--text-primary)' }}>{name}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6 }}>
            {isOpen != null && (
              <span style={{ padding: '3px 6px', borderRadius: 4, background: isOpen ? 'rgba(52,199,89,.15)' : 'rgba(255,59,48,.15)', color: isOpen ? 'var(--pm-open)' : 'var(--pm-closed)', font: 'var(--fw-semibold) 11px/1.3 var(--font-sans)' }}>{isOpen ? 'Nyitva' : 'Zárva'}</span>
            )}
            {dist && (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, font: 'var(--fw-semibold) 12px/1.3 var(--font-sans)', color: 'var(--text-brand)' }}>
                <i className="ph-bold ph-navigation-arrow" style={{ fontSize: 12 }} />{dist}
              </span>
            )}
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
          {rating != null && (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, background: 'rgba(0,0,0,.04)', padding: '4px 8px', borderRadius: 'var(--radius-sm)' }}>
              <i className="ph-fill ph-star" style={{ fontSize: 14, color: 'var(--action-primary)' }} />
              <span style={{ font: 'var(--fw-bold) var(--fs-sm)/1.3 var(--font-sans)', color: 'var(--text-primary)' }}>{rating.toFixed(1).replace('.', ',')}</span>
              {reviewCount != null && <span style={{ font: 'var(--fw-regular) 11px/1.3 var(--font-sans)', color: 'var(--text-muted)' }}>({reviewCount})</span>}
            </span>
          )}
          <button type="button" aria-label="Kedvenc" onClick={(e) => { e.stopPropagation(); onFavorite && onFavorite(); }} style={{ background: 'transparent', border: 0, padding: 4, cursor: 'pointer', display: 'inline-flex' }}>
            <i className={favorite ? 'ph-fill ph-heart' : 'ph ph-heart'} style={{ fontSize: 18, color: favorite ? 'var(--pm-favorite)' : 'var(--text-disabled)' }} />
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
        <i className="ph ph-map-pin" style={{ fontSize: 14, color: 'var(--text-muted)', marginTop: 2 }} />
        <span style={{ flex: 1, font: 'var(--type-body-sm)', color: 'var(--text-label)', lineHeight: '18px' }}>{address}</span>
      </div>

      <div style={{ overflow: 'hidden', height: expanded ? 120 : 0, opacity: expanded ? 1 : 0, transition: 'height var(--dur-base) var(--ease-standard), opacity var(--dur-base) var(--ease-standard)' }}>
        <div style={{ height: 1, background: 'var(--border-subtle)', margin: '8px 0 12px' }} />
        <div style={{ display: 'flex', gap: 8 }}>
          {action('navigation-arrow', 'Navigáció', 'var(--action-primary)', onNavigate)}
          {action('phone', 'Hívás', 'var(--action-primary)', onCall)}
          {action('caret-right', 'Részletek', 'var(--action-secondary)', onDetail)}
        </div>
      </div>
    </article>
  );
}
