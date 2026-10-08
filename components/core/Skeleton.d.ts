import React from 'react';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: number | string;
  height?: number | string;
  /** Defaults to --radius-sm. Use --radius-lg for card-shaped blocks. */
  radius?: number | string;
}

/** Loading placeholder block. */
export declare function Skeleton(props: SkeletonProps): JSX.Element;
