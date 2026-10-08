import React from 'react';

/**
 * Segment switcher that lives inside the teal header (Pályák / Edzők /
 * Meccsek). Inactive = 30% white outline, active = solid white with teal ink.
 */
export function SegmentControl({ items = [], activeId, onSelect, style, ...rest }) {
  return (
    <div style={{ display: 'flex', gap: 8, padding: '0 var(--gutter) 12px', ...style }} {...rest}>
      {items.map((it) => {
        const active = it.id === activeId;
        return (
          <button
            key={it.id}
            type="button"
            aria-pressed={active}
            onClick={() => onSelect && onSelect(it.id)}
            style={{
              flex: 1,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6,
              padding: '8px 4px',
              borderRadius: 'var(--radius-md)',
              border: `1px solid ${active ? 'var(--pm-white)' : 'var(--border-on-brand)'}`,
              background: active ? 'var(--pm-white)' : 'transparent',
              color: active ? 'var(--text-brand)' : 'var(--text-on-brand-muted)',
              font: 'var(--fw-semibold) var(--fs-sm)/var(--lh-label) var(--font-sans)',
              cursor: 'pointer',
              transition: 'background-color var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)',
            }}
          >
            {it.icon && <i className={`ph-bold ph-${it.icon}`} style={{ fontSize: 14 }} />}
            {it.label}
          </button>
        );
      })}
    </div>
  );
}
