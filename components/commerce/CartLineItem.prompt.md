One row in the cart.

```jsx
<CartLineItem
  name="Siux Electra Pro 2026" variant="Grip: L2"
  image="assets/imagery/studio-racket.png"
  price={130000} quantity={qty}
  stepper={<QtyStepper value={qty} onChange={setQty} />}
  onRemove={remove}
/>
```

The line total on the right is unit price × quantity; the price under the name is the unit price. Cart sits on the `--surface-page-alt` grey so the white cards read as cards.
