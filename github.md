repo: kolbertistvan2/padelmania-mobilapp
branch: main
path: (whole repo — brand identity, app screens, constants)

## Last sync

date: 2026-09-08
source: attached local codebase folder `padelmania-mobilapp/` (same tree as the repo above). No commit sha was resolved — the read went through the mounted folder, not the GitHub API, so no honest commit is recorded.

### Updated in this project

- Built the token layer (`styles.css` + `tokens/`) from `src/constants/{colors,spacing,typography}.ts` and the brand colour sheet.
- Copied the official logo, brand-mark and Mánia+ lockups, Inter font files, the brand image bank and the repo's padel icon pack into `assets/`.
- Authored 28 components in six groups from the app's real screen inventory.
- Recreated seven app surfaces as the `ui_kits/mobile-app` click-through kit.

## Screen map

| Project screen | Repo files it was built from |
|---|---|
| `ui_kits/mobile-app/HomeScreen.jsx` | `app/(tabs)/webshop/index.tsx`, `src/components/webshop/HeroSlider.tsx` |
| `ui_kits/mobile-app/ProductScreen.jsx` | `app/(tabs)/webshop/products/[id].tsx` |
| `ui_kits/mobile-app/CartScreen.jsx` | `app/(tabs)/webshop/cart.tsx` |
| `ui_kits/mobile-app/RacketSelector.jsx` | `app/(tabs)/racket-selector/{index,quiz,results}.tsx`, `src/data/questions.ts`, `src/data/strings.ts` |
| `ui_kits/mobile-app/FinderScreen.jsx` | `app/(tabs)/finder/index.tsx`, `src/components/CourtFinderScreen.tsx` |
| `ui_kits/mobile-app/ProfileScreen.jsx` | `app/(tabs)/profile/index.tsx` |
| `ui_kits/mobile-app/ManiaPlusScreen.jsx` | `app/profile/mania-plus.tsx` |
| `ui_kits/mobile-app/App.jsx` (login, orders, tabs) | `app/(auth)/login.tsx`, `src/components/ui/CustomTabBar.tsx`, `app/(tabs)/_layout.tsx` |
| `components/navigation/*` | `src/components/ui/{CustomTabBar,IconText}.tsx`, screen headers across `app/` |
| `components/core/*`, `components/commerce/*`, `components/promo/*` | `src/constants/*`, inline `StyleSheet` blocks in the screens above |
| `components/finder/CourtCard.jsx` | `src/components/CourtFinderScreen.tsx` |
| `components/quiz/QuizOptionCard.jsx` | `app/(tabs)/racket-selector/quiz.tsx` |
| `tokens/*.css`, `guidelines/*.card.html` | `src/constants/{colors,spacing,typography}.ts`, `Padel-Mánia-Brand-identity/Colours/` |
