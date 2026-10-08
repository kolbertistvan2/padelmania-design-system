import React from 'react';

export interface TabBarItem {
  id: string;
  /** Hungarian label — the app ships Webshop / Ütőválasztó / Pályák / Több. */
  label: string;
  /** Phosphor icon name in kebab-case: shopping-cart, crosshair, map-pin, list. */
  icon: string;
}

export interface TabBarProps extends React.HTMLAttributes<HTMLElement> {
  items?: TabBarItem[];
  activeId?: string;
  onSelect?: (id: string) => void;
}

/** Bottom tab bar — coral capsule marks the active tab. */
export declare function TabBar(props: TabBarProps): JSX.Element;
