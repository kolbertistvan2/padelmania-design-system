import React from 'react';

export interface SegmentItem {
  id: string;
  label: string;
  /** Phosphor icon name in kebab-case, rendered bold at 14px. */
  icon?: string;
}

export interface SegmentControlProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: SegmentItem[];
  activeId?: string;
  onSelect?: (id: string) => void;
}

/** In-header segment switcher — equal-width outlined buttons on teal. */
export declare function SegmentControl(props: SegmentControlProps): JSX.Element;
