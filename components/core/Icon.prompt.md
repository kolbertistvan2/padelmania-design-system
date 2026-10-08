Renders one Phosphor glyph — the only icon family in the Padel Mánia system (no emoji, no Unicode arrows, no second icon set).

```jsx
<Icon name="shopping-cart" size={22} weight="bold" color="var(--text-on-brand)" />
<Icon name="map-pin" size={14} color="var(--text-muted)" />
<Icon name="star" size={14} weight="fill" color="var(--pm-coral)" />
```

Weights follow the app's convention: `regular` for idle state, `bold` for arrows and emphasis, `fill` for active/selected (tab bar, favourited heart, rating star). The host page must load the Phosphor web fonts:

```html
<link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css">
<link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/bold/style.css">
<link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/fill/style.css">
```
