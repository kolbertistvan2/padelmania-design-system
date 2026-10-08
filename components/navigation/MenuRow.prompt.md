The profile / settings list pattern: an uppercase caption over a white 24px-radius card of divider-separated rows.

```jsx
<MenuSection title="Fiók">
  <MenuRow icon={<Icon name="package" size={18} />} label="Rendeléseim" />
  <MenuRow icon={<Icon name="heart" size={18} />} label="Kedvenceim" hint="4" />
  <MenuRow icon={<Icon name="gear" size={18} />} label="Beállítások" />
</MenuSection>

<MenuSection title="15% kedvezmény minden termékre">
  <MenuRow iconImage="assets/logos/app-icon-mania.png" label="Mánia Plusz" hint="Csatlakozz!" highlight />
</MenuSection>
```

`MenuSection` sets `last` on its final child, so never pass it yourself. Section captions are sentence-content but rendered uppercase with 0.6px tracking.
