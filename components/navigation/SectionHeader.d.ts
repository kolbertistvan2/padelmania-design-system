import React from 'react';

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 17px semibold, near-black, −0.2px tracking. Hungarian: "Kategóriák", "Újdonságok". */
  title: string;
  /** Optional teal caps badge to the right of the title, e.g. "AKCIÓ". */
  badge?: string;
  /** Renders the coral "Összes ›" link when provided. */
  onSeeAll?: () => void;
  /** Overrides the link label. */
  seeAllLabel?: string;
}

/** Header row above a product rail or list section. */
export declare function SectionHeader(props: SectionHeaderProps): JSX.Element;
