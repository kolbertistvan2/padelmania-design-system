# Padelmania mobile app — UI kit

High-fidelity recreation of the Padelmania React Native app (iOS + Android, Expo). Every screen composes the design-system primitives from `components/` — nothing is re-implemented locally except screen-level layout.

Open `index.html`. The frame is 390 × 780 (iPhone-class); the status bar is decorative.

## What's clickable

| From | Action | Goes to |
|---|---|---|
| Bottom tabs | Webshop / Ütőválasztó / Pályák / Több | tab root |
| Home | any product card, hero | product detail |
| Home | Mánia Plusz banner | membership screen |
| Home | "Nem tudod, melyik ütő a tiéd?" | Ütőválasztó |
| Product detail | Kosárba | cart (line added) |
| Product detail | Csatlakozz | membership screen |
| Membership | Csatlakozz / Tagság lemondása | toggles member state app-wide (prices + shipping change) |
| Ütőválasztó | Indítsd el → 5 questions | recommendation results |
| Pályák | segment switcher, sort chips, card tap, heart | expanded court card / favourites |
| Több | Bejelentkezés | login → signed-in profile |
| Több | Rendeléseim | order history |

Toggling Mánia+ membership is the most useful thing to try: it flips the `ManiaPriceBox` from sky-tint-with-CTA to green-with-free-shipping, adds the 15% line to the cart summary, and zeroes the shipping fee.

## Files

| File | Screens |
|---|---|
| `App.jsx` | tab shell, routing, cart/member/quiz state, `LoginScreen`, `OrdersScreen` |
| `HomeScreen.jsx` | webshop home — hero, categories, rails, banners |
| `ProductScreen.jsx` | product detail — gallery, price, specs, related, reviews, sticky CTA |
| `CartScreen.jsx` | cart + empty state + order summary |
| `RacketSelector.jsx` | `QuizIntro`, `QuizQuestion`, `QuizResults` |
| `FinderScreen.jsx` | Pályakereső — map, sort, court list; flagged-off segments |
| `ProfileScreen.jsx` | profile / more — guest and signed-in |
| `ManiaPlusScreen.jsx` | membership — member and non-member states |
| `data.jsx` | illustrative content |

## Deliberate gaps

- **Checkout, parcel-point picker, Stripe / Apple Pay sheets** — payment surfaces are native SDK sheets in the real app; there is no Padel Mánia-designed screen to recreate. "Megrendelés" is a dead end here.
- **Edzőkereső and Meccskereső** are behind `FeatureFlags` in v1. The segments render an explicit "not in this release" state rather than an invented design.
- **The map** is a static stand-in. The app renders native Google Maps with memoised markers.
- **Content is illustrative.** The production app hard-fails on dummy data — everything comes from the WooCommerce REST API through the Cloudflare Worker. Names here are brands that appear in the repo; prices are representative, not live.

## Source

Recreated from `padelmania-mobilapp/`:
`app/(tabs)/webshop/index.tsx`, `app/(tabs)/webshop/products/[id].tsx`, `app/(tabs)/webshop/cart.tsx`, `app/(tabs)/racket-selector/{index,quiz,results}.tsx`, `app/(tabs)/finder/index.tsx`, `src/components/CourtFinderScreen.tsx`, `app/(tabs)/profile/index.tsx`, `app/profile/mania-plus.tsx`, `app/(auth)/login.tsx`, `src/components/ui/CustomTabBar.tsx`, `src/constants/{colors,spacing,typography}.ts`.
