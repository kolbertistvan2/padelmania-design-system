import React from 'react';

/** Loading placeholder — cream block with a slow shimmer. */
export function Skeleton({ width = '100%', height = 16, radius = 'var(--radius-sm)', style, ...rest }) {
  return (
    <div
      aria-hidden="true"
      style={{
        width,
        height,
        borderRadius: radius,
        background: 'linear-gradient(90deg, var(--pm-border) 0%, var(--pm-gray-200) 50%, var(--pm-border) 100%)',
        backgroundSize: '200% 100%',
        animation: 'pmSkeleton 1.4s var(--ease-standard) infinite',
        ...style,
      }}
      {...rest}
    >
      <style>{'@keyframes pmSkeleton{0%{background-position:150% 0}100%{background-position:-50% 0}}'}</style>
    </div>
  );
}
