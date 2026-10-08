Switches sub-views inside one tab. Designed to sit in the teal `AppHeader`, not on white.

```jsx
<AppHeader title="Pályák & Edzők" actions={cartAction}>
  <SegmentControl
    activeId="courts" onSelect={setSegment}
    items={[
      { id: 'courts',  label: 'Pályák',  icon: 'map-pin' },
      { id: 'coaches', label: 'Edzők',   icon: 'users' },
      { id: 'matches', label: 'Meccsek', icon: 'tennis-ball' },
    ]}
  />
</AppHeader>
```

Segments are equal width and always ≥2. When only one segment would ship, drop the control entirely and retitle the screen (the app renames "Pályák & Edzők" to "Pályakereső") — a lone segment reads as broken.
