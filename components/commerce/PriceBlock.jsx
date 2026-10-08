import React from 'react';

const fmt = (n) => (typeof n === 'number' ? n.toLocaleString('hu-HU').replace(/,/g, ' ') + ' Ft' : n);

/**
 * Product-detail price row: current price in teal (coral when discounted),
 * struck-through retail beside it. Sits on a hairline top rule.
 */
export function PriceBlock({ price, regularPrice, size = 'lg', onSale = false, rule = true, style, ...rest }) {
  const big = size === 'lg';
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        flexWrap: 'wrap',
        paddingTop: rule ? 12 : 0,
        borderTop: rule ? '1px solid var(--border-subtle)' : 'none',
        ...style,
      }}
      {...rest}
    >
      <span style={{ font: big ? 'var(--type-price-lg)' : 'var(--type-price)', color: onSale ? 'var(--text-price-sale)' : 'var(--text-price)' }}>{fmt(price)}</span>
      {regularPrice != null && (
        <span style={{ font: big ? 'var(--type-price)' : 'var(--fw-bold) var(--fs-base)/1.2 var(--font-sans)', color: 'var(--text-disabled)', textDecoration: 'line-through' }}>{fmt(regularPrice)}</span>
      )}
    </div>
  );
}
