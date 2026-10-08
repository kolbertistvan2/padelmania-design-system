Four-tab bottom navigation. The active tab is a coral capsule around icon + label; inactive glyphs are regular-weight gray-700 on the translucent chrome.

```jsx
<TabBar
  activeId="webshop"
  onSelect={setTab}
  items={[
    { id: 'webshop', label: 'Webshop', icon: 'shopping-cart' },
    { id: 'racket',  label: 'Ütőválasztó', icon: 'crosshair' },
    { id: 'finder',  label: 'Pályák', icon: 'map-pin' },
    { id: 'more',    label: 'Több', icon: 'list' },
  ]}
/>
```

Labels always sit below the icon (never beside it) and never wrap. Active icons switch to Phosphor `fill`, inactive stay `regular`.
