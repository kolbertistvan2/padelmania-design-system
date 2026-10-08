import React from 'react';

export interface NoticeBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** <Icon /> at ~22px, rendered coral inside a white disc. */
  icon?: React.ReactNode;
  /** The message. One or two lines of Hungarian, informal. */
  children?: React.ReactNode;
  onAccept?: () => void;
  onDeny?: () => void;
  acceptLabel?: string;
  denyLabel?: string;
  /** Adds the top-right dismiss X. */
  onClose?: () => void;
}

/** In-feed notice / permission prompt on the sky-tint ground. */
export declare function NoticeBanner(props: NoticeBannerProps): JSX.Element;
