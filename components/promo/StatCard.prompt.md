The two pieces that carry the Ütőválasztó intro and the Mánia Plusz benefits list.

```jsx
<div style={{ display: 'flex', gap: 10 }}>
  <StatCard value="5" label="kérdés" />
  <StatCard value="2 perc" label="válaszra" />
  <StatCard value="3" label="ajánlás" />
</div>

<BenefitRow icon={<Icon name="crosshair" size={16} />} title="Személyre szabott találatok" subtitle="A te szintedhez, stílusodhoz, kerethez" />
<BenefitRow tone="cream" icon={<Icon name="truck" size={22} weight="fill" />} title="Ingyenes szállítás minden rendeléshez" divider />
```

Stat figures are short — a number or a duration, never a sentence. Benefit rows come in threes on intro screens and twos on the membership card.
