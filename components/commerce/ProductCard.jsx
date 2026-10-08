import React, { useState } from 'react';

/**
 * Product card from the home rails. Fixed 152px in a horizontal rail;
 * pass `width="100%"` for grid use. 4:3 contained image, sale/demo badges
 * pinned to the image corners, then name → price → Mánia+ line.
 */
export function ProductCard({
  name,
  image,
  price,
  regularPrice,
  memberPrice,
  onSale = false,
  demo = false,
  memberMarkSrc,
  width = 152,
  onClick,
  style,
  ...rest
}) {
  const [pressed, setPressed] = useState(false);
  const fmt = (n) => (typeof n === 'number' ? n.toLocaleString('hu-HU').replace(/,/g, ' ') + ' Ft' : n);

  return (
    <article
      onClick={onClick}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      style={{
        width,
        background: 'var(--surface-card)',
        borderRadius: 'var(--radius-card-lg)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-card-raised)',
        cursor: onClick ? 'pointer' : 'default',
        opacity: pressed ? 0.88 : 1,
        transform: pressed ? 'scale(var(--press-scale))' : 'none',
        transition: 'opacity var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)',
        flexShrink: 0,
        ...style,
      }}
      {...rest}
    >
      <div style={{ position: 'relative', background: 'var(--surface-card)' }}>
        <div style={{ width: '100%', aspectRatio: '4 / 3', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
          {image
            ? <img src={image} alt={name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            : <span style={{ width: '100%', height: '100%', background: 'var(--pm-gray-100)' }} />}
        </div>
        {onSale && (
          <span style={{ position: 'absolute', top: 8, left: 8, background: 'var(--surface-brand)', color: 'var(--text-on-brand)', borderRadius: 5, padding: '3px 7px', font: 'var(--fw-bold) 9px/1.3 var(--font-sans)', letterSpacing: 'var(--tracking-caps)' }}>AKCIÓ</span>
        )}
        {demo && (
          <span style={{ position: 'absolute', bottom: 8, left: 8, background: 'var(--feedback-success)', color: 'var(--pm-white)', borderRadius: 4, padding: '3px 6px', font: 'var(--fw-bold) 9px/1.3 var(--font-sans)' }}>Kipróbálható</span>
        )}
      </div>
      <div style={{ padding: 10 }}>
        <div style={{ font: 'var(--fw-medium) 12px/17px var(--font-sans)', color: '#1A1A1A', marginBottom: 6, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{name}</div>
        {onSale && regularPrice ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
            <span style={{ font: 'var(--fw-bold) var(--fs-base)/1.2 var(--font-sans)', color: 'var(--text-price-sale)' }}>{fmt(price)}</span>
            <span style={{ font: 'var(--fw-regular) 11px/1.2 var(--font-sans)', color: 'var(--text-disabled)', textDecoration: 'line-through' }}>{fmt(regularPrice)}</span>
          </div>
        ) : (
          <span style={{ font: 'var(--fw-bold) var(--fs-base)/1.2 var(--font-sans)', color: 'var(--text-price)' }}>{fmt(price)}</span>
        )}
        {memberPrice != null && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 3 }}>
            {memberMarkSrc && <img src={memberMarkSrc} alt="" style={{ width: 14, height: 14, borderRadius: 3 }} />}
            <span style={{ font: 'var(--fw-medium) 11px/1.3 var(--font-sans)', color: 'var(--text-brand)' }}>Mánia+ ár {fmt(memberPrice)}</span>
          </div>
        )}
      </div>
    </article>
  );
}
