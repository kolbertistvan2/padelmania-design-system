The answer card for the five-question Ütőválasztó. One tap selects and advances — there is no confirm step and no visible selected state.

```jsx
<QuizOptionCard variant="level" index={2} label="Bronz" levelBadge="3.0-4.0"
  description="Tenyeres-fonák középtempón megvan, a hátsó üveg kényelmes."
  details="Általában 1-3 év, heti 1-2x, alkalmi versenyző" onSelect={pick} />

<QuizOptionCard variant="image" image="assets/imagery/studio-racket.png" label="Univerzális"
  description="Mindenhez kezdesz, ráérzel a pillanatra" details="Hybrid mag, közepes sweet spot" />

<QuizOptionCard variant="icon" icon={<Icon name="target" size={20} />} label="Kontroll"
  description="Pontosság és megbízhatóság" details="Minden ütés oda megy, ahova akarom" />

<QuizOptionCard variant="budget" priceLabel="50 – 75 000 Ft" label="Középszint"
  description="Heti 1-2x játszóknak, jó ár-érték" />
```

The level ramp is fixed: index 0 sky-tint on teal ink, 1 sky, 2 teal, 3 light coral, 4 coral. Cards stack with 12px gaps inside a 20px gutter.
