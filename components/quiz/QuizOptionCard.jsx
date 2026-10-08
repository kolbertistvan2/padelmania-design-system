import React, { useState } from 'react';

const LEVEL_BG = ['var(--pm-sky-tint)', 'var(--pm-sky)', 'var(--pm-teal)', 'var(--pm-coral-light)', 'var(--pm-coral)'];
const LEVEL_FG = ['var(--pm-teal)', 'var(--pm-white)', 'var(--pm-white)', 'var(--pm-white)', 'var(--pm-white)'];

/**
 * Answer card for the Ütőválasztó quiz. Four leading treatments —
 * `level` (numbered disc + level badge), `image` (80px racket shot),
 * `icon` (44px cream tile) and `budget` (105px price column).
 */
export function QuizOptionCard({
  variant = 'icon',
  index = 0,
  label,
  description,
  details,
  levelBadge,
  icon,
  image,
  priceLabel,
  onSelect,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);

  let lead = null;
  if (variant === 'level') {
    lead = (
      <span style={{ width: 44, height: 44, borderRadius: 22, background: LEVEL_BG[index] || LEVEL_BG[0], color: LEVEL_FG[index] || LEVEL_FG[0], display: 'inline-flex', alignItems: 'center', justifyContent: 'center', font: 'var(--fw-bold) 18px/1 var(--font-sans)', flexShrink: 0 }}>{index + 1}</span>
    );
  } else if (variant === 'image') {
    lead = <img src={image} alt="" style={{ width: 80, height: 80, objectFit: 'contain', flexShrink: 0 }} />;
  } else if (variant === 'budget') {
    lead = <span style={{ width: 105, flexShrink: 0, font: 'var(--fw-bold) var(--fs-base)/19px var(--font-sans)', color: 'var(--text-brand)' }}>{priceLabel}</span>;
  } else {
    lead = <span style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--surface-sunken)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--text-brand)' }}>{icon}</span>;
  }

  return (
    <button
      type="button"
      onClick={onSelect}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        width: '100%',
        textAlign: 'left',
        background: 'var(--surface-card)',
        borderRadius: 'var(--radius-quiz)',
        border: `var(--border-emphasis) solid ${hover ? 'var(--action-primary)' : 'var(--border-strong)'}`,
        padding: 'var(--gutter)',
        cursor: 'pointer',
        transition: 'border-color var(--dur-fast) var(--ease-standard)',
        ...style,
      }}
      {...rest}
    >
      {lead}
      <span style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 4 }}>
        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
          <span style={{ font: 'var(--fw-semibold) var(--fs-md)/1.3 var(--font-sans)', color: 'var(--text-brand)' }}>{label}</span>
          {levelBadge && (
            <span style={{ background: 'var(--surface-accent)', color: 'var(--text-brand)', borderRadius: 8, padding: '3px 8px', font: 'var(--fw-semibold) 11px/1.3 var(--font-sans)', flexShrink: 0 }}>{levelBadge}</span>
          )}
        </span>
        {description && <span style={{ font: 'var(--fw-regular) var(--fs-sm)/18px var(--font-sans)', color: 'var(--text-primary)' }}>{description}</span>}
        {details && <span style={{ font: 'var(--fw-medium) 11px/1.4 var(--font-sans)', color: 'var(--text-muted)', marginTop: 2 }}>{details}</span>}
      </span>
    </button>
  );
}
