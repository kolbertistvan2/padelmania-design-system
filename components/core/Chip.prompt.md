Rounded pill used for sorting, filtering, and read-only tags.

```jsx
<Chip iconLeft={<Icon name="star" size={13} weight="bold" />} selected onClick={sortByRecommended}>Ajánlott</Chip>
<Chip onClick={sortByDistance}>Távolság</Chip>
<Chip kind="chip">Kerek forma</Chip>
```

`toggle` is the Court Finder sort row (Ajánlott / Távolság / Értékelés / Vélemények) — one selected at a time, selected fills teal. `kind="chip"` is the cream, non-interactive recommendation tag used under "A TE PROFILOD".
