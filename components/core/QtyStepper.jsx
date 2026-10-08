import React from 'react';

/** −/count/+ stepper from the cart line item. */
export function QtyStepper({ value = 1, min = 1, max = 99, onChange, style, ...rest }) {
  const btn = {
    width: 34,
    height: 34,
    borderRadius: 'var(--radius-sm)',
    background: 'var(--pm-gray-100)',
    border: 0,
    color: 'var(--text-primary)',
    fontSize: 18,
    lineHeight: '20px',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, ...style }} {...rest}>
      <button type="button" aria-label="Kevesebb" style={{ ...btn, opacity: value <= min ? 0.4 : 1 }} disabled={value <= min} onClick={() => onChange && onChange(value - 1)}>−</button>
      <span style={{ font: 'var(--type-label)', color: 'var(--text-primary)', minWidth: 20, textAlign: 'center' }}>{value}</span>
      <button type="button" aria-label="Több" style={{ ...btn, opacity: value >= max ? 0.4 : 1 }} disabled={value >= max} onClick={() => onChange && onChange(value + 1)}>+</button>
    </div>
  );
}
