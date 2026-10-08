Large price row for product detail and order summaries.

```jsx
<PriceBlock price={130000} regularPrice={140000} onSale />
<PriceBlock price={45900} rule={false} size="md" />
```

Money is always Hungarian-formatted with thin-space grouping and a trailing " Ft" (`130 000 Ft`), never a decimal. Teal at full price, coral when discounted; the struck-through figure is the regular retail price.
