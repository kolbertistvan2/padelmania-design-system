Soft in-feed prompt — the app uses it to ask for push permission after the third cold start, never at launch.

```jsx
<NoticeBanner
  icon={<Icon name="bell-ringing" size={22} />}
  onAccept={enablePush} onDeny={dismiss} onClose={dismiss}
  acceptLabel="Kérem" denyLabel="Most nem"
>
  Szólunk, ha megjön a rendelésed vagy akcióba kerül a kiszemelt ütőd.
</NoticeBanner>
```

Sky-tint ground, sky border, white icon disc with a coral glyph. Accept is a small coral button, deny is a teal outline — never two equal-weight buttons.
