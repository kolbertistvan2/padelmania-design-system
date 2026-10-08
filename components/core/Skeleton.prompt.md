Loading placeholder — the app shows skeletons, never spinners, for list and detail content.

```jsx
<div style={{ background: 'var(--surface-sunken)', borderRadius: 'var(--radius-lg)', padding: 20 }}>
  <Skeleton width="60%" height={20} />
  <Skeleton width="80%" height={16} style={{ marginTop: 8 }} />
  <Skeleton width="40%" height={16} style={{ marginTop: 8 }} />
</div>
```

Skeleton cards sit on a cream ground with border-coloured bars — that pairing is the app's loading signature (see `CourtFinderScreen`'s skeleton list).
