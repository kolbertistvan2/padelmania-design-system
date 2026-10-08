import React, { useState } from 'react';

const SIZES = {
  sm: { font: 'var(--fs-sm)', py: 8, px: 14, radius: 'var(--radius-md)', icon: 14, weight: 'var(--fw-semibold)' },
  md: { font: 'var(--fs-base)', py: 12, px: 20, radius: 'var(--radius-md)', icon: 16, weight: 'var(--fw-semibold)' },
  lg: { font: 16, py: 14, px: 24, radius: 'var(--radius-lg)', icon: 18, weight: 'var(--fw-bold)' },
};

function skin(variant) {
  switch (variant) {
    case 'secondary':
      return { background: 'var(--action-secondary)', color: 'var(--action-secondary-text)', border: '0' };
    case 'outline':
      return { background: 'transparent', color: 'var(--action-outline-text)', border: 'var(--border-emphasis) solid var(--action-outline-border)' };
    case 'ghost':
      return { background: 'transparent', color: 'var(--text-action)', border: '0' };
    case 'danger':
      return { background: 'var(--feedback-error-bg)', color: 'var(--feedback-error)', border: '0' };
    case 'primary':
    default:
      return { background: 'var(--action-primary)', color: 'var(--action-primary-text)', border: '0' };
  }
}

/**
 * The Padel Mánia button. Coral is the commit action, teal the secondary,
 * outlined teal the low-commitment alternative.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  pill = false,
  fullWidth = false,
  disabled = false,
  iconLeft,
  iconRight,
  onClick,
  type = 'button',
  style,
  ...rest
}) {
  const [pressed, setPressed] = useState(false);
  const [hover, setHover] = useState(false);
  const s = SIZES[size] || SIZES.md;
  const sk = skin(variant);
  const isSolid = variant === 'primary' || variant === 'secondary';

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPressed(false); }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        width: fullWidth ? '100%' : undefined,
        minHeight: size === 'sm' ? 36 : 'var(--tap-min)',
        padding: `${s.py}px ${s.px}px`,
        borderRadius: pill ? 'var(--radius-full)' : s.radius,
        font: `${s.weight} ${typeof s.font === 'number' ? s.font + 'px' : s.font}/var(--lh-label) var(--font-sans)`,
        letterSpacing: pill ? 'var(--tracking-caps)' : size === 'lg' ? '0.3px' : 'normal',
        background: sk.background,
        color: sk.color,
        border: sk.border,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : pressed ? 'var(--press-opacity)' : 1,
        transform: pressed && !disabled ? 'scale(var(--press-scale))' : 'none',
        filter: hover && !disabled && !pressed && isSolid ? 'brightness(0.96)' : 'none',
        backgroundColor: hover && !disabled && !isSolid && variant !== 'danger' ? 'var(--surface-sunken)' : undefined,
        transition: 'opacity var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard), filter var(--dur-fast) var(--ease-standard), background-color var(--dur-fast) var(--ease-standard)',
        textAlign: 'center',
        WebkitTapHighlightColor: 'transparent',
        ...style,
      }}
      {...rest}
    >
      {iconLeft}
      <span style={{ display: 'inline-block' }}>{children}</span>
      {iconRight}
    </button>
  );
}
