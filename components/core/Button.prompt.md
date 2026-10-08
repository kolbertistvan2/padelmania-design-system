The action control — coral for the one thing you want the user to do, teal for the secondary route, outlined teal for the alternative.

```jsx
<Button variant="primary" size="lg" fullWidth iconRight={<Icon name="arrow-right" size={20} weight="bold" />}>
  Indítsd el
</Button>
<Button variant="secondary">Vásárlás</Button>
<Button variant="outline">Regisztráció</Button>
<Button variant="primary" size="sm" pill>Csatlakozz</Button>
```

Rules from the app: exactly one coral button per screen region; the sticky "Kosárba" bar and the quiz "Indítsd el" CTA are always `size="lg" fullWidth`; disabled state is `opacity .6` (never a grey repaint) except the out-of-stock cart button, which goes grey. Labels are Hungarian informal (tegező) imperatives — "Indítsd el", "Csatlakozz", "Kosárba".
