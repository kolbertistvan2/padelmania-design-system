The webshop product card — used in every home rail, category grid and racket-selector result list.

```jsx
<ProductCard
  name="Siux Electra Pro 2026"
  image="assets/imagery/studio-racket.png"
  price={130000} regularPrice={140000} onSale demo
  memberPrice={110500}
  memberMarkSrc="assets/logos/app-icon-mania.png"
  onClick={openProduct}
/>
```

Non-negotiables carried over from the app: the image box is `aspect-ratio: 4/3` with `object-fit: contain` on white (never `1/1`, never a fixed height — rackets get cropped); the sale price is coral with the **regular** price struck through, not the sale price; the Mánia+ line is always the member price beside the app icon at 14px.
