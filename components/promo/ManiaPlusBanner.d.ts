import React from 'react';

export interface ManiaPlusBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Bold white line, e.g. "Mánia Plusz". */
  title: string;
  /** Sky-teal support line, e.g. "15% kedvezmény minden termékre". */
  subtitle?: string;
  /** Capsule label. Defaults to "Csatlakozz". */
  ctaLabel?: string;
  /** Path to the Mánia+ app icon (32px). */
  markSrc?: string;
}

/** Dark-teal membership banner for the home feed. */
export declare function ManiaPlusBanner(props: ManiaPlusBannerProps): JSX.Element;
