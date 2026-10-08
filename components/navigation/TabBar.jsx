import React from 'react';

/**
 * Bottom tab bar. Translucent white chrome; the active tab is a coral
 * capsule wrapping icon + label.
 */
export function TabBar({ items = [], activeId, onSelect, style, ...rest }) {
  return (
    <nav style={{ position: 'relative', paddingTop: 8, paddingBottom: 6, background: 'var(--scrim-chrome)', backdropFilter: 'var(--blur-chrome)', WebkitBackdropFilter: 'var(--blur-chrome)', ...style }} {...rest}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'rgba(0,0,0,.12)' }} />
      <div style={{ display: 'flex', alignItems: 'center', padding: '0 4px' }}>
        {items.map((it) => {
          const active = it.id === activeId;
          return (
            <button
              key={it.id}
              type="button"
              aria-current={active ? 'page' : undefined}
              onClick={() => onSelect && onSelect(it.id)}
              style={{ flex: 1, background: 'transparent', border: 0, padding: '2px', cursor: 'pointer' }}
            >
              <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2, padding: '6px', borderRadius: 'var(--radius-full)', background: active ? 'var(--action-primary)' : 'transparent', transition: 'background-color var(--dur-fast) var(--ease-standard)' }}>
                <i className={`${active ? 'ph-fill' : 'ph'} ph-${it.icon}`} style={{ fontSize: 22, color: active ? 'var(--text-on-action)' : 'var(--pm-gray-700)' }} />
                <span style={{ font: `var(--fw-${active ? 'semibold' : 'medium'}) 11px/1.2 var(--font-sans)`, color: active ? 'var(--text-on-action)' : 'var(--pm-gray-700)', textAlign: 'center', whiteSpace: 'nowrap' }}>{it.label}</span>
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
