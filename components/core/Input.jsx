import React, { useState } from 'react';

/**
 * Form field. 1.5px hairline border on a cream-100 fill; teal border on
 * focus. `onDark` is the translucent variant that sits on the teal header.
 */
export function Input({
  label,
  hint,
  error,
  value,
  onChange,
  placeholder,
  type = 'text',
  iconLeft,
  iconRight,
  onDark = false,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  const fieldId = id || (label ? `f-${String(label).replace(/\s+/g, '-').toLowerCase()}` : undefined);

  const shellStyle = onDark
    ? {
        background: 'var(--surface-on-brand-soft)',
        border: '1px solid rgba(255,255,255,.12)',
        borderRadius: 'var(--radius-md)',
        padding: '9px 12px',
      }
    : {
        background: 'var(--pm-gray-100)',
        border: `var(--border-emphasis) solid ${error ? 'var(--feedback-error)' : focus ? 'var(--border-brand)' : 'var(--border-subtle)'}`,
        borderRadius: 'var(--radius-md)',
        padding: '12px 16px',
      };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4, ...style }}>
      {label && (
        <label htmlFor={fieldId} style={{ font: 'var(--type-label)', color: 'var(--text-body)' }}>{label}</label>
      )}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, transition: 'border-color var(--dur-fast) var(--ease-standard)', opacity: disabled ? 0.6 : 1, ...shellStyle }}>
        {iconLeft}
        <input
          id={fieldId}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            flex: 1,
            minWidth: 0,
            background: 'transparent',
            border: 0,
            outline: 'none',
            font: onDark ? 'var(--fw-regular) 14px/1.4 var(--font-sans)' : 'var(--fw-regular) 16px/1.4 var(--font-sans)',
            color: onDark ? 'var(--text-on-brand)' : 'var(--text-primary)',
          }}
          {...rest}
        />
        {iconRight}
      </div>
      {(error || hint) && (
        <span style={{ font: 'var(--type-caption)', color: error ? 'var(--feedback-error)' : 'var(--text-muted)' }}>{error || hint}</span>
      )}
    </div>
  );
}
