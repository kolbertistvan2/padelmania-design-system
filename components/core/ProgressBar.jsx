import React from 'react';

/** 4px rail, coral fill. Sits directly under the quiz header, edge to edge. */
export function ProgressBar({ value = 0, total = 1, style, ...rest }) {
  const pct = Math.max(0, Math.min(1, total ? value / total : 0)) * 100;
  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={total}
      style={{ height: 4, background: 'var(--border-strong)', overflow: 'hidden', ...style }}
      {...rest}
    >
      <div style={{ height: '100%', width: `${pct}%`, background: 'var(--action-primary)', transition: 'width var(--dur-base) var(--ease-standard)' }} />
    </div>
  );
}
