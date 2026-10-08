import React from 'react';

const fmt = (n) => (typeof n === 'number' ? n.toLocaleString('hu-HU').replace(/,/g, ' ') + ' Ft' : n);

/** Cart line: 90px thumbnail, name/variant/price stack, stepper, line total. */
export function CartLineItem({ name, variant, image, price, quantity = 1, onQuantityChange, onRemove, stepper, style, ...rest }) {
  return (
    <div style={{ display: 'flex', gap: 12, background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)', padding: 12, boxShadow: 'var(--shadow-sm)', ...style }} {...rest}>
      {image
        ? <img src={image} alt="" style={{ width: 90, height: 90, borderRadius: 'var(--radius-md)', objectFit: 'contain', background: 'var(--pm-gray-100)', flexShrink: 0 }} />
        : <span style={{ width: 90, height: 90, borderRadius: 'var(--radius-md)', background: 'var(--pm-gray-100)', flexShrink: 0 }} />}
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 3 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
          <span style={{ flex: 1, font: 'var(--type-label)', color: 'var(--text-heading)' }}>{name}</span>
          {onRemove && (
            <button type="button" aria-label="Törlés" onClick={onRemove} style={{ background: 'transparent', border: 0, padding: 4, cursor: 'pointer', color: 'var(--text-disabled)', display: 'inline-flex' }}>
              <i className="ph ph-trash" style={{ fontSize: 16 }} />
            </button>
          )}
        </div>
        {variant && <span style={{ font: 'var(--type-caption)', color: 'var(--text-muted)' }}>{variant}</span>}
        <span style={{ font: 'var(--fw-bold) var(--fs-sm)/1.4 var(--font-sans)', color: 'var(--text-price)' }}>{fmt(price)}</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 }}>
          {stepper}
          <span style={{ marginLeft: 'auto', font: 'var(--type-label)', color: 'var(--text-body)' }}>{fmt(typeof price === 'number' ? price * quantity : price)}</span>
        </div>
      </div>
    </div>
  );
}
