import React, { useState } from 'react';

/** Category tile — 52px thumbnail beside a two-line label, teal-tinted shadow. */
export function CategoryCard({ label, image, onClick, style, ...rest }) {
  const [hover, setHover] = useState(false);
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        textAlign: 'left',
        background: 'var(--surface-card)',
        border: 0,
        borderRadius: 'var(--radius-card)',
        padding: 10,
        boxShadow: 'var(--shadow-card)',
        cursor: 'pointer',
        opacity: hover ? 0.9 : 1,
        transition: 'opacity var(--dur-fast) var(--ease-standard)',
        ...style,
      }}
      {...rest}
    >
      {image
        ? <img src={image} alt="" style={{ width: 52, height: 52, borderRadius: 8, objectFit: 'contain', background: 'var(--pm-gray-100)', flexShrink: 0 }} />
        : <span style={{ width: 52, height: 52, borderRadius: 8, background: 'var(--pm-gray-100)', flexShrink: 0 }} />}
      <span style={{ flex: 1, font: 'var(--fw-semibold) 12px/16px var(--font-sans)', color: 'var(--text-heading)' }}>{label}</span>
    </button>
  );
}
