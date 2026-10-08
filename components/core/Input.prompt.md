Text field for auth and checkout forms.

```jsx
<Input label="E-mail" type="email" placeholder="nev@pelda.hu" value={email} onChange={e => setEmail(e.target.value)} />
<Input label="Jelszó" type="password" error="Hibás jelszó" iconRight={<Icon name="eye" size={20} color="var(--text-muted)" />} />
<Input onDark placeholder="Pálya keresése..." iconLeft={<Icon name="magnifying-glass" size={16} color="rgba(255,255,255,.55)" />} />
```

Idle border is a 1.5px hairline on a cream fill; focus goes teal; error goes red. `onDark` is the variant that lives inside the teal header — 10% white fill, 12% white border, 14px text.
