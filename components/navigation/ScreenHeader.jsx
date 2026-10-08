import React from 'react';

/**
 * Light 56px screen header used by the quiz, results and modal stacks:
 * back on the left, a step counter or title in the middle, close on the right.
 */
export function ScreenHeader({ title, onBack, onClose, right, style, ...rest }) {
  const btn = { width: 32, height: 32, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', border: 0, cursor: 'pointer', color: 'var(--text-primary)' };
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 'var(--header-h)', padding: '0 var(--gutter-wide)', background: 'var(--surface-page)', ...style }} {...rest}>
      {onBack
        ? <button type="button" aria-label="Vissza" onClick={onBack} style={btn}><i className="ph ph-arrow-left" style={{ fontSize: 22 }} /></button>
        : <span style={{ width: 32 }} />}
      <span style={{ font: title && /^\d/.test(String(title)) ? 'var(--fw-semibold) var(--fs-sm)/1.3 var(--font-sans)' : 'var(--type-screen-title)', color: title && /^\d/.test(String(title)) ? 'var(--text-muted)' : 'var(--text-primary)', letterSpacing: title && /^\d/.test(String(title)) ? '0.5px' : 'normal' }}>{title}</span>
      {right || (onClose
        ? <button type="button" aria-label="Bezárás" onClick={onClose} style={btn}><i className="ph ph-x" style={{ fontSize: 22 }} /></button>
        : <span style={{ width: 32 }} />)}
    </div>
  );
}
