Category tile — horizontal, thumbnail-left, label-right. The home screen lays these out two-up.

```jsx
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, padding: '0 16px' }}>
  <CategoryCard label="Padel ütők" image="assets/imagery/studio-racket.png" />
  <CategoryCard label="Labdák" image="assets/imagery/studio-balls.png" />
</div>
```

Not a square image tile — the horizontal 52px-thumbnail layout is what makes the grid scannable at two columns. Shadow is the teal-tinted `--shadow-card`, radius 12px.
