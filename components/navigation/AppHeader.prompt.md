The teal top bar every commerce and finder surface starts with.

```jsx
<AppHeader
  logoSrc="assets/logos/padel-mania-logo-white.svg"
  actions={<HeaderAction label="Kosár" count={3}><Icon name="shopping-cart" size={22} weight="bold" /></HeaderAction>}
  search={<Input onDark placeholder="Termék keresése..." iconLeft={<Icon name="magnifying-glass" size={16} color="rgba(255,255,255,.55)" />} />}
/>
```

Use `title` instead of `logoSrc` on secondary surfaces (Pályakereső, Ütőválasztó results). No border, no shadow — the teal-to-white edge is the separation. `children` is where the segment switcher goes so it stays inside the teal block.
