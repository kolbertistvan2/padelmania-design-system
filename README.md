# Padel Mánia Design System

A Padel Mánia (padelmania.hu webshop és mobilapp) design systemje, a Claude Designban készült projekt exportja.

**Böngészőben:** https://kolbertistvan2.github.io/padelmania-design-system/

## Mi van benne

- `styles.css` és `tokens/`: színek, tipográfia, spacing, árnyékok, motion, szemantikus tokenek CSS változókként
- `components/`: 28 React komponens hat csoportban, mindegyikhez `.d.ts` props szerződés és `.prompt.md` használati jegyzet
- `ui_kits/mobile-app/`: a mobilapp hét képernyője kattintható prototípusként
- `guidelines/`: szín, típus, spacing, márka és ikon bemutató oldalak
- `assets/`: logók, brand mark, Mánia+ logók, Inter fontok, fotók, padel ikoncsomag
- `Padel Mania sablonkeszlet*.html`, `sablonkeszlet/`: közösségi és hirdetési sablonok
- `Padel labda akcio*.html`: a „Minden padel labda 990 Ft” kampány kreatívjai
- `SKILL.md`: Agent Skill leíró, ha Claude-dal akarsz a márkához illő felületet generálni

## Helyi futtatás

Az oldalak relatív útvonalakkal töltik be a `styles.css`-t és a `_ds_bundle.js`-t, ezért statikus szerverről nyisd meg őket (a `file://` megnyitás egyes böngészőkben blokkolja a betöltést):

```bash
npx serve .
# vagy
python3 -m http.server 8000
```

Utána: http://localhost:8000 (vagy amit a `serve` kiír).

## Jogok

A kód és a tokenek szabadon megnézhetők és tanulmányozhatók. A Padel Mánia név, a logók, a brand mark, a Mánia+ jelölés és a fotók a Padel Mania Kft. tulajdonát képezik, engedély nélkül nem használhatók fel. A termékfotók a márkák (Babolat, Head, Wilson, Siux, Xcalion stb.) anyagai. Az Inter font SIL Open Font License alatt érhető el.

---

## Design system leírás (Claude Design)

Padel Mánia is a Hungarian padel retailer: the **padelmania.hu** WooCommerce webshop plus a React Native mobile app that wraps the shop in three padel-specific tools. It sells rackets, balls, bags and apparel from ~30 brands, runs a paid membership (**Mánia Plusz**, 1 500 Ft/month, 15% off everything + free shipping), and operates from Tök, Hungary (Padel Mania Kft.).

The brand's voice is a knowledgeable club-mate: informal Hungarian, specific about equipment, never salesy. The look is warm teal and coral on cream — closer to a considered sports-retail identity than to a generic e-commerce blue.

## Products in this system

| Surface | Status here | Notes |
|---|---|---|
| **Padelmania mobile app** (iOS + Android, Expo / React Native) | Fully recreated → `ui_kits/mobile-app/` | v1 ships Webshop, Ütőválasztó (racket selector), Pályakereső (court finder), Profil. Edzőkereső + Meccskereső are built but feature-flagged off. |
| **padelmania.hu website** (WordPress + WooCommerce, WoodMart theme) | **Not recreated** | No design source was provided — only WP plugins that inject Mánia+ price displays into a third-party theme. Recreating it would mean inventing a design. |
| **WP admin surfaces** (push campaigns, warranty certificates, Mánia+ pricing) | Not recreated | Native WP admin chrome, not Padel Mánia design. |

### Sources this system was built from

- **Codebase** (attached as a local folder, read directly): `padelmania-mobilapp/` — GitHub `kolbertistvan2/padelmania-mobilapp`, branch `main` (private). `CLAUDE.md` in that repo is the authoritative engineering brief; `src/constants/{colors,spacing,typography}.ts` are the token source of truth.
- **Brand identity package** inside that repo: `Padel-Mánia-Brand-identity/` — logo suites (AI/EPS/SVG/PDF/PNG), `Colours/Padel_Mania_Colours.pdf`, the Inter font files, the corner-fold-out graphic device, and a three-set image bank (studio product, dynamic campaign, tactile product+body).
- **Uploaded logo files**: the same official lockups, in `uploads/`.
- **Related repo, not read for this system**: `kolbertistvan2/padel-uto-valaszto` (an earlier standalone racket selector). Worth exploring if you need more detail on the scoring UI.

Explore those repositories directly if you have access — they carry the live values, and the app's `CLAUDE.md` documents dozens of hard-won constraints that will make any design work against this product more accurate.

---

## Index

| Path | What's there |
|---|---|
| `styles.css` | The single entry point. `@import`s everything below. Consumers link this. |
| `tokens/colors.css` | Base palette — four families × three steps, plus neutrals, semantics, status colours. |
| `tokens/typography.css` | Inter scale, weights, tracking, named type roles (`--type-h2`, `--type-price`…). |
| `tokens/spacing.css` | 4px spacing scale, gutters, content max-widths, radii, hit targets. |
| `tokens/elevation.css` | Two shadow families + border weights + chrome blur. |
| `tokens/motion.css` | Durations, easings, press feedback. |
| `tokens/semantic.css` | Role aliases (`--text-body`, `--surface-brand`, `--action-primary`…). Reach for these first. |
| `tokens/fonts.css` | `@font-face` for the four Inter statics. |
| `assets/logos/` | Official logo + brand-mark + Mánia+ lockups (SVG), app icons (PNG). |
| `assets/brand/` | Colour sheet, corner-fold-out device. |
| `assets/imagery/` | Studio product, tactile, campaign and delivery imagery. |
| `assets/icons/padel/` | The repo's 30-icon padel line pack (supplementary — see Iconography). |
| `assets/fonts/` | Inter Regular / Medium / SemiBold / Bold TTFs. |
| `components/` | 28 React primitives in six groups (below). |
| `ui_kits/mobile-app/` | Click-through recreation of seven app screens. Start at `index.html`. |
| `guidelines/` | Foundation specimen cards (colour, type, spacing, brand, icons). |
| `SKILL.md` | Agent-Skills front matter for use outside this project. |
| `github.md` | Source-repo association + screen map for upstream sync. |

### Components

**core** — `Icon`, `Button`, `Badge`, `Chip`, `Input`, `ProgressBar`, `Skeleton`, `QtyStepper`
**navigation** — `AppHeader`, `HeaderAction`, `ScreenHeader`, `TabBar`, `SegmentControl`, `SectionHeader`, `MenuRow`, `MenuSection`
**commerce** — `ProductCard`, `CategoryCard`, `PriceBlock`, `ManiaPriceBox`, `CartLineItem`
**promo** — `ManiaPlusBanner`, `FeatureCta`, `NoticeBanner`, `StatCard`, `BenefitRow`
**finder** — `CourtCard`
**quiz** — `QuizOptionCard`

Each component directory carries a `.d.ts` props contract, a `.prompt.md` usage note, and one `@dsCard` showcase.

**Intentional additions** — every component above maps to a real pattern in the app, with three exceptions:
- `Icon` — a thin Phosphor wrapper. The app imports glyphs directly from `phosphor-react-native`; on the web a wrapper is the equivalent.
- `HeaderAction` / `MenuSection` — extracted from inline markup in `webshop/index.tsx` and `profile/index.tsx` because they are repeated verbatim across several screens.

---

## Content fundamentals

**Language is Hungarian, always, and always informal (*tegező*).** This is a hard rule in the codebase: "rendelhetsz", "spórolj", "Indítsd el" — never the formal "rendelhet". Hungarian name order throughout: *Vezetéknév Keresztnév*.

**Second person singular, addressed to one player.** Copy talks *to* you about *your* game: "Találd meg a tökéletes ütőd", "A te Mánia+ árad:", "Csak amit tényleg meg tudsz rendelni", "Milyen szinten játszol?". The brand almost never says "we" — there is no "our expert team".

**Sentence case everywhere except micro-badges.** Headings and buttons are sentence case ("Kiemelt termékek", "Kosárba"). Uppercase is reserved for two things: commerce flags (`AKCIÓ`) and section captions in the profile/results screens (`SZOLGÁLTATÁSOK`, `LEGJOBB NEKED MOST`) — both with 0.6px tracking.

**Specific over enthusiastic.** Product and advice copy names the attribute and the consequence:

> *"A kerek forma nagy sweet spot-ot biztosít — megbocsátóbb a nem tökéletes találatoknál."*
> *"Hosszú nyél, középre tolt egyensúly, puha mag"*
> *"Csak amit tényleg meg tudsz rendelni"*

Padel jargon is used unglossed because the audience knows it — *bandeja, vibora, bajada, sweet spot, mag, egyensúly*. Skill tiers have brand names (Kezdő / Réz / Bronz / Silver / Gold) paired with numeric ratings (1.0-2.0 … 5.0+).

**Three-line copy pattern.** Most cards stack: **label** (17px semibold), **description** (13px regular — what it means for you), **details** (11px medium gray — the spec or the caveat). Write all three or write one; never write a label plus a vague sentence.

**Money and numbers.** HUF with thin-space grouping and a trailing " Ft": `130 000 Ft`, `1 500 Ft`. Never decimals, never "HUF". Discounts are stated as amounts saved, not just percentages: "spórolj 19 500 Ft-t". Hungarian decimal comma in ratings and distances: `4,8` · `12,4 km`.

**Empty and error states are helpful, not cute.** "A kosarad üres" + a reason to keep going. "Lejárt a bejelentkezés" on session expiry. No apologising, no exclamation marks except on the one genuine call to action ("Csatlakozz!").

**No emoji. Ever.** `CLAUDE.md`: *"Icons: phosphor-react-native — the only icon library. No Feather, no emoji, no Unicode symbols."* That applies to copy too — no ✅, no 🎾, no arrows typed as characters.

**Hungarian typography is load-bearing.** Long accents (ő, ű, Ő, Ű) appear in the brand name itself (Mánia) and in core nav labels (Ütőválasztó, Pályakereső). Any font substitution must carry the full Hungarian set. The app also ships a documented workaround for Android clipping Hungarian trailing glyphs — labels adjacent to icons get a trailing non-breaking space (`IconText`). On the web this is not needed, but it explains the generous 10px icon gaps you'll see in the source.

---

## Visual foundations

### Colour

The palette is a **four-family, three-step grid**, taken verbatim from `Padel_Mania_Colours.pdf`:

| Family | Tint | Base | Shade |
|---|---|---|---|
| Warm neutral | `#F5F1E8` cream | `#E5DCC5` sand | `#736E63` warm gray |
| Coral | `#FFC4B7` blush | `#FF6B4A` **coral** | `#591E11` deep terracotta |
| Mauve | `#D8C2C9` | `#523D44` burgundy | `#281A1E` |
| Teal | `#9CC9D5` sky | `#0B3C49` **teal** | `#021E25` |

Two of the twelve carry the brand: **teal `#0B3C49`** is chrome, price ink and the dark ground; **coral `#FF6B4A`** is the single action colour. Sky `#9CC9D5` is support ink on teal. Cream `#F5F1E8` is the sunken surface — it doubles as `gray-100`, which is why the neutral scale is warm rather than blue-gray.

The **mauve family is editorial** — it appears on the brand sheet and in print/campaign material, not in product UI. Don't introduce it into app screens.

Rules that hold across the product:
- **One coral element per screen region.** Two coral buttons in view means one of them is wrong.
- Coral on teal is the attention pairing (active tab, icon tiles inside teal cards, CTA capsules on the dark banner).
- Prices are teal; discounted prices are coral; the struck-through figure is always the **regular** retail price, never the sale price.
- Success green (`#388E3C`) is not a brand colour but is load-bearing: it marks demo-available rackets and active Mánia+ membership.
- Max two background colours per surface. Screens are white or `#F8F8F8`; teal is chrome; cream is for inset tiles.

### Type

**Inter, four static weights, no italics in product UI.** 400 body, 500 labels, 600 titles, 700 display and price. The scale is mobile-first: 11 / 13 / 15 / 17 / 20 / 24 / 28 / 34 px. Line-height ratios: 1.2 display, 1.3 heading, 1.5 body, 1.4 label. Display sizes tighten by −0.2 to −0.3px; uppercase micro-labels open up to +0.6px.

Screen titles are 17px semibold. Quiz and hero headlines are 22px bold in **teal**, not black — headline colour is a brand cue. Body copy is gray-700; secondary copy is warm gray `#736E63`.

### Space, radius, shape

4px base step. **16px is the screen gutter** on every commerce and finder surface; quiz/auth/results open to 20px and intro screens to 24px. Cards in a list sit 12px apart, 8px in the court list. Inside a product or category card, padding is 10px.

Radii are assigned, not decorative: 6px badges · 10px inputs and compact buttons · 12px category tile · 14px product card and feature CTA · 16px big CTAs and quiz cards · 24px menu/profile cards · full for chips and the tab pill. Tablet clamps content to 480px (auth), 700px (lists, profile, quiz), 900px (product detail).

### Cards

Three card recipes, and they don't mix:
1. **Content card** — white, 12–14px radius, **no border**, teal-tinted shadow (`0 2px 6px rgba(11,60,73,.06)` for category tiles, `0 2px 8px rgba(11,60,73,.08)` for product cards).
2. **Choice card** — white, 16px radius, **1.5px `#E5E0D5` border, no shadow** (quiz options, filter surfaces). Border goes coral on hover/press.
3. **Chrome card** — white, 24px radius, neutral `--shadow-sm`, dividers between rows (profile menus, membership cards).

Nothing gets a coloured left border. Nothing gets a gradient fill except the two photographic scrims described below.

### Backgrounds and imagery

Screens are flat white or `#F8F8F8` — no patterns, no textures, no decorative gradients. Colour arrives as flat teal blocks (headers, hero cards, feature CTAs) and cream tiles.

The image bank has three registers, and they are used differently:
- **Set A — studio product**: transparent-ground shots of rackets, balls, bags. These are `object-fit: contain` on white in a 4:3 box, never cropped. Every product card uses this register.
- **Set B — dynamic campaign**: full-body player portraits, warm daylight, shallow depth. Marketing and hero use.
- **Set C — tactile product + body**: hands on grips, arms mid-swing, ball hitting the net. Cropped close, warm, coral often present in-frame. This is the hero-slider register.

Photography is warm and naturally lit — no black-and-white, no grain, no cool colour grade. When type sits on a photo, it gets a **horizontal teal scrim** (`linear-gradient(90deg, rgba(11,60,73,.92) → transparent)`), not a full-frame dim and not a blur panel.

The one graphic device is the **corner fold-out**: a folded page corner carrying the brand mark, laid over imagery. Light and dark versions ship in `assets/brand/`. Use it instead of inventing a badge or ribbon.

### Elevation, transparency, blur

Two shadow families: neutral (`--shadow-sm/md/lg`) for chrome — menus, sheets, the checkout bar — and teal-tinted (`--shadow-card`, `--shadow-card-raised`) for content cards on white. No inner shadows anywhere. No glassmorphism.

Transparency is used in exactly three places: white at 8–15% for fills **inside** the teal header (search field, icon tiles), white at 30% for outlines on teal (inactive segments), and 15% colour washes for the Nyitva/Zárva status badges. Blur appears once — the bottom tab bar is a translucent chrome material over scrolling content.

### Motion

Timings: 150ms instant · 200ms state change · 280ms accordion and pulse · 320ms exit · 380ms staged reveal · 420ms entry. Standard easing is `cubic-bezier(.4,0,.2,1)`. Nothing bounces except the splash brand mark, which springs in once (`tension 55, friction 7`).

The launch sequence is the brand's one piece of choreography: brand mark springs up → white logo rises 12px and fades in → three dots pulse in sequence → the whole thing fades out over 320ms after a 1.8s minimum.

Elsewhere motion is restrained: images cross-fade in at 200ms, the court card accordion animates height + opacity over 280ms, chips and badges cross-fade colour. No parallax, no scroll-driven animation, no skeleton→content morph.

### Interaction states

- **Press** (the primary feedback, since this is a touch product): opacity to 0.85 — or 0.7 for text-only targets — and cards additionally scale to 0.97. Court cards scale to 0.99. Action buttons spring-scale.
- **Hover** (web only): solid buttons darken ~4%; outline and ghost buttons pick up a cream fill; cards drop to 0.9 opacity; menu rows fill cream.
- **Selected**: teal fill with white ink (sort chips, segments, variant buttons), or a coral capsule (tab bar). Never an outline-only selected state.
- **Disabled**: `opacity: .6`. The one exception is an out-of-stock cart button, which repaints to `gray-400` — a stronger signal for a hard stop.
- **Focus**: input borders go teal at 1.5px. Error borders go red and the hint slot becomes the message.
- **Favourited / destructive**: rose `#FF3B5C` for saved courts (filled heart + card wash), red `#D32F2F` on a tinted ground for destructive actions.
- Minimum hit target 44px; icon buttons carry 8px padding plus hit-slop.

### Layout rules

Fixed elements, in order of appearance: the teal header (never scrolls away, no shadow — the colour edge is the separation), the 4px quiz progress rail directly under the header, the sticky bottom CTA on product detail and cart (transparent-to-white gradient, sits above the tab bar), and the translucent tab bar. Everything else scrolls.

Horizontal product rails run edge-to-edge with a 16px content inset and no visible scrollbar. Category grids are two-up. Section headers are always title-left / action-right.

---

## Iconography

**Phosphor Icons is the only icon family** — `phosphor-react-native` in the app, and the CDN web font here:

```html
<link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css">
<link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/bold/style.css">
<link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/fill/style.css">
```

This is the codebase's own choice, not a substitution — no icon font or SVG sprite ships in the repo for app UI, so the CDN font is the faithful equivalent. Use the `Icon` component.

Weight convention:
- **regular** — idle glyphs, informational icons (map pin, address, search)
- **bold** — arrows, carets, emphasis, anything on a coloured button
- **fill** — active or committed state: selected tab, favourited heart, rating star, membership crown, benefit checkmarks

Sizes in use: 11–14px inline with text · 16–18px in buttons and rows · 20–24px in headers and icon tiles · 32–34px in empty states.

Glyphs the product actually uses: `shopping-cart`, `crosshair`, `map-pin`, `list`, `magnifying-glass`, `caret-right`, `caret-left`, `arrow-right`, `arrow-left`, `x`, `heart`, `star`, `package`, `truck`, `bell-ringing`, `user`, `users`, `gear`, `sign-out`, `check-circle`, `sliders-horizontal`, `navigation-arrow`, `map-trifold`, `chat-dots`, `phone`, `tennis-ball`, `calendar-blank`, `shield-check`, `file-text`, `newspaper`, `handshake`, `crown`, `target`, `sword`, `feather`, `warning`, `flame`, `trend-up`, `eye`, `trash`.

**Supplementary padel pack.** The repo contains a self-generated 30-icon sport pack (`padel-icon-pack/`, three styles: line, solid, "dypta"). The line set is copied to `assets/icons/padel/` — Racket, Ball, Court, Grip, Trophy, Scoreboard, Sneakers and so on. Two caveats: it is **not wired into the app** (nothing imports it), and it is drawn in `#2D3436` + `#F97316`, which are **off-palette**. Recolour to `--pm-teal` / `--pm-coral` before using it, and prefer Phosphor for anything the app itself covers.

**No emoji, no Unicode symbols as icons.** Arrows are Phosphor glyphs, not `→`. Checkmarks are `check-circle`, not `✓`.

**Brand marks are not icons.** The Mánia+ app icon appears at 14–40px next to member prices — it is an image asset (`assets/logos/app-icon-mania.png`), never redrawn as a glyph.

---

## Using this system

```html
<link rel="stylesheet" href="styles.css">
<link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css">
<script src="_ds_bundle.js"></script>
```

```jsx
const { AppHeader, HeaderAction, ProductCard, Button, Icon } = window.PadelMNiaDesignSystem_b97c58;
```

Style with the semantic tokens (`var(--action-primary)`, `var(--surface-brand)`, `var(--type-h3)`) rather than raw hexes, so a palette change propagates. When a value in the app's source differs from what a framework would default to, the app wins — 1.5px borders, 5px badge radius, 152px rail cards are all deliberate.
