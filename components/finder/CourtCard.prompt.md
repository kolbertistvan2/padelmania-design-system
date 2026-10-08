The Pályakereső result card — tap to expand, then act.

```jsx
<CourtCard
  name="Padel Arena Budapest" address="1117 Budapest, Hunyadi János út 12."
  isOpen distanceKm={4.2} rating={4.8} reviewCount={126}
  expanded={openId === id} onToggle={() => setOpenId(id)}
  favorite={fav} onFavorite={toggleFav}
  onNavigate={openMaps} onCall={call} onDetail={openDetail}
/>
```

Three states stack: default white, favourited rose wash with a rose border, expanded cream with a coral border. Action row is two coral buttons (Navigáció, Hívás) and one teal (Részletek) — coral for the thing you do outside the app, teal for staying inside it.
