# Hirdetéstervezés — kutatási jegyzet (2026. szept.)

Források: ATTN Agency „12 Rules for Higher Converting Visual Ads" (2026-03, 5000+ statikus hirdetés tesztje), Adrio „7 best Meta ad formats for static ads" (2026-05), Sovran „8 High-Converting Static Ad Examples" (2026-04), Billo Meta ads best practices (2026), adgpt „Ecommerce Ads in 2026", Stackmatix Meta ads examples (2026-09).

## Ami mérhetően számít

1. **Egy ígéret, egy termék/bizonyíték, egy akció.** A legnagyobb hiba a túl sok mondanivaló; a jó statikus egy hookot ad, a részleteket a poszt szövege viszi. → A sablonkészletben: eyebrow · ár · mondat, ennyi. Részletsorok, második ár, feltételek egy apró lábjegyzetbe.
2. **Egy hero elem ≥60% területen**, a támogató elemek ≤30%. Egyfókuszú hirdetés +34% CTR, +28% felidézés a több-elemeshez képest. → A termékdoboz vagy az óriás ár a hero, a kettő nem lehet egyforma súlyú.
3. **Bal oldali vizuális dominancia (F-minta).** Termék a bal harmadban: +23% engagement, +18% CTR a középre igazítotthoz képest; egy beauty márka 0,8% → 2,4% CTR-t mért a termék balra tolásával. → Tesztelendő: tükrözött változat, termék balra, szöveg jobbra. A brief a szöveget teszi bal élre — ez A/B kérdés, nem szabály.
4. **Termék a hajtás fölött.** Ahol a terméket lifestyle-címsor alá temetik, átlag 18%-kal kevesebb kosárba tétel. → A termék soha nem kerül a szöveg alá; álló méreteken felül, 1:1-en és fekvőben oldalt.
5. **Fehér tér 20–30%.** A zsúfoltság csökkenti az értést; mobilon még inkább. → A stack nem tölti ki a hasábot, a csoportok közt 1,6× hézag.
6. **Social proof a termék mellett.** Csillagos értékelés átlag +15% CTR, vásárlói fotó +22% engagement, idézet +18% konverzió. → A Vélemény sablon ezért van; a Termékpromóra opcionális `rating` slot ajánlott („4,8 · 126 értékelés").
7. **Előtte–utána** osztott képpel, vizuális irányjelzéssel (nyíl / haladás) — a kontraszt maga az érv.
8. **Emberi arc +38% engagement**, a tekintet irányítsa a szemet a CTA-ra. → Campaign-fotós (Set B) változat a full-bleed sablonokra.
9. **Formátum:** 4:5 feedben akár 15%-kal jobb a négyzetesnél; carousel a legjobban teljesítő e-commerce formátum 2026-ban (katalógus, több termék). → A 4:5 az elsődleges export, a Kollekció carouselnek prioritás.
10. **Kreatív-frissítés hetente**: 7–10 nap után esik a CTR; heti frissítéssel 20–30% alacsonyabb cost-per-purchase. → A sablonkészlet célja a gyors variánsgyártás, nem az egyedi remekmű; 4–7 formátum egy ajánlat körül.
11. **Kontraszt ≥70%** szöveg és háttér közt; szöveg csak egyszínű felületen vagy ≥90%-os átmeneten. Sötét mód-kompatibilitás. → A teal-deep scrim ezért .93–.97.
12. **Tesztsorrend hatás szerint:** elrendezés > szín/kontraszt > tipográfia > háttér. → Az A/B/C sorrendváltozatok a legértékesebb tesztek.

## Amit a Padel Mánia készletben ebből következetesen alkalmazunk

- Három szövegszint + egy lábjegyzet; szövegszín csak fehér, coral, sky.
- Az ár a hero: coral, Inter Bold, −0,05em, a hasáb teljes szélességére illesztve.
- CTA mindig bal alul, egy szín, egy nyíl.
- Termék soha nem a szöveg alatt.

## Nyitott tesztek (döntést kér)

- **Tükrözött elrendezés** (termék bal harmad, szöveg jobbra) a csempés változatra — a kutatás szerint ez a legnagyobb potenciál.
- **Rating slot** a Termékpromón — egy sor, de mérhető hatás.
- **Arcos full-bleed** változat a Set B campaign-fotókkal.
