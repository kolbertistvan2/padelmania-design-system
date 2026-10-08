The membership price callout that sits directly under the product price.

```jsx
<ManiaPriceBox memberPrice={110500} savings={19500} markSrc="assets/logos/app-icon-mania.png" onJoin={openManiaPlus} />
<ManiaPriceBox memberPrice={110500} isMember markSrc="assets/logos/app-icon-mania.png" />
```

Two states, both load-bearing: non-member gets the sky-tint box, the savings line and the coral CTA; active member gets the green box, "A te Mánia+ árad:" and "+ingyenes szállítás" with no CTA. Never render it for the membership subscription product itself — that would be self-discounting.
