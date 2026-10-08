import React from 'react';

/**
 * Teal top bar for a product surface.
 */
export interface AppHeaderProps extends React.HTMLAttributes<HTMLElement> {
  /** Path to the white logo lockup. Renders at 150×40, left-aligned. */
  logoSrc?: string;
  /** Plain screen title (18px bold white) — used when there is no logo, e.g. "Pályakereső". */
  title?: string;
  /** Right-hand icon actions — pass <HeaderAction> children. */
  actions?: React.ReactNode;
  /** Search row rendered below the logo row — pass an <Input onDark />. */
  search?: React.ReactNode;
  /** Extra rows inside the teal block (e.g. a <SegmentControl />). */
  children?: React.ReactNode;
}

export interface HeaderActionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  /** Coral count badge; hidden when 0/undefined. Caps at "99+". */
  count?: number;
  /** Accessible label — the glyph carries no text. */
  label?: string;
}

export declare function AppHeader(props: AppHeaderProps): JSX.Element;
export declare function HeaderAction(props: HeaderActionProps): JSX.Element;
