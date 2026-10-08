/* Illustrative content for the UI kit. Product names and brands are ones that
   appear in the repository; prices are representative. The real app takes all
   of this from the WooCommerce REST API — never hard-code it in production. */
const A = '../../assets';

const PRODUCTS = [
  { id: 1, name: 'Siux Electra Pro 2026 Shadow', brand: 'Siux', image: `${A}/imagery/studio-racket.png`, price: 130000, regularPrice: 140000, memberPrice: 110500, onSale: true, demo: true },
  { id: 2, name: 'Xcalion Unum H1', brand: 'Xcalion', image: `${A}/imagery/studio-racket-ball.png`, price: 96900, memberPrice: 82365, demo: true },
  { id: 3, name: 'Royal Padel 36 Aniv Light', brand: 'Royal Padel', image: `${A}/imagery/studio-racket.png`, price: 74900, memberPrice: 63665 },
  { id: 4, name: 'Padel Mánia labdaszett (3 db)', brand: 'Padel Mánia', image: `${A}/imagery/studio-balls.png`, price: 4990, memberPrice: 4242 },
  { id: 5, name: 'Padel Mánia táska + törölköző', brand: 'Padel Mánia', image: `${A}/imagery/studio-bag-racket-balls.png`, price: 28900, regularPrice: 34900, memberPrice: 24565, onSale: true },
];

const CATEGORIES = [
  { id: 23, name: 'Padel ütők', image: `${A}/imagery/studio-racket.png` },
  { id: 31, name: 'Labdák', image: `${A}/imagery/studio-balls.png` },
  { id: 44, name: 'Táskák', image: `${A}/imagery/studio-bag-racket-balls.png` },
  { id: 52, name: 'Kiegészítők', image: `${A}/imagery/studio-racket-ball.png` },
];

const COURTS = [
  { id: 'c1', name: 'Padel Arena Budapest', address: '1117 Budapest, Hunyadi János út 12.', isOpen: true, distanceKm: 4.2, rating: 4.8, reviewCount: 126 },
  { id: 'c2', name: 'Városmajor Padel Club', address: '1122 Budapest, Városmajor utca 74.', isOpen: true, distanceKm: 6.9, rating: 4.6, reviewCount: 41 },
  { id: 'c3', name: 'Tök Padel Center', address: '2073 Tök, Fő utca 2.', isOpen: false, distanceKm: 28.3, rating: 5, reviewCount: 9 },
  { id: 'c4', name: 'Duna Padel Park', address: '2000 Szentendre, Dunakanyar körút 4.', isOpen: true, distanceKm: 31.7, rating: 4.4, reviewCount: 63 },
];

const QUESTIONS = [
  {
    id: 'experience', question: 'Milyen szinten játszol?',
    subtitle: 'Akkor tartozol egy kategóriába, ha az alábbi állítások többsége igaz rád',
    variant: 'level',
    options: [
      { label: 'Kezdő', levelBadge: '1.0-2.0', description: 'Elsősorban arra törekszem, hogy pályán tartsam a labdát. Tenyeressel van valami eredmény, de a fonák és az adogatás ingadozós.', details: 'Általában fél évnél kevesebb tapasztalattal' },
      { label: 'Réz', levelBadge: '2.0-3.0', description: 'A tenyeresem megbízható, a hátsó üvegről lassú labdákat visszajátszok. Bandajám még nincs, smash helyett inkább lobozok.', details: 'Általában fél-2 év tapasztalattal' },
      { label: 'Bronz', levelBadge: '3.0-4.0', description: 'Tenyeres-fonák középtempón megvan, a hátsó üveg kényelmes. A bandajám megbízható, a vibora tanulása elkezdődött.', details: 'Általában 1-3 év, heti 1-2x, alkalmi versenyző' },
      { label: 'Silver', levelBadge: '4.0-5.0', description: 'Bandajám magabiztos, a vibora meccsekben is megjelenik. Taktikusan, partneremmel összehangolva építem a pontokat.', details: 'Általában 3-5 év, heti 3-4x, rendszeres versenyző' },
      { label: 'Gold', levelBadge: '5.0+', description: 'Bandaja, vibora, rulo, bajada mind megbízhatóan megy, a falakat fegyverként kezelem.', details: 'Általában 5+ év, edzésszerű program' },
    ],
  },
  {
    id: 'style', question: 'Milyen a játékstílusod?',
    subtitle: 'Hogy érzed magad a pályán? Ez határozza meg leginkább, milyen ütő passzol hozzád.',
    variant: 'image',
    options: [
      { label: 'Védekező', image: `${A}/imagery/studio-racket.png`, description: 'Türelmes, hibákat csökkentesz, hosszú labdameneteket játszol', details: 'Hosszú nyél, középre tolt egyensúly, puha mag' },
      { label: 'Univerzális', image: `${A}/imagery/studio-racket-ball.png`, description: 'Mindenhez kezdesz, ráérzel a pillanatra, kontroll és erő egyensúlyban', details: 'Hybrid mag, közepes sweet spot, ajánlott a többségnek' },
      { label: 'Támadó', image: `${A}/imagery/studio-racket.png`, description: 'Robbanékony, kemény ütésekkel pontot szerzel, gyors reakció', details: 'Fejnehéz egyensúly, kemény mag, magas pop' },
    ],
  },
  {
    id: 'priority', question: 'Mi a legfontosabb számodra?',
    subtitle: 'Válaszd ki az elsődleges prioritásodat',
    variant: 'icon',
    options: [
      { label: 'Kontroll', icon: 'target', description: 'Pontosság és megbízhatóság', details: 'Minden ütés oda megy, ahova akarom' },
      { label: 'Erő', icon: 'sword', description: 'Maximális labdakimenet', details: 'Erős ütések, nyomásgyakorlás' },
      { label: 'Kényelem', icon: 'heart', description: 'Kímélő a kézre', details: 'Rezgéselnyelés, hosszú játék' },
    ],
  },
  {
    id: 'physical', question: 'Van fizikai korlátozásod?',
    subtitle: 'Ez befolyásolja az ajánlott súlyt és keménységet',
    variant: 'icon',
    options: [
      { label: 'Nincs korlátozás', icon: 'check', description: 'Fizikailag fit vagyok', details: 'Bármilyen súlyú ütőt használhatok' },
      { label: 'Könnyű ütőt preferálok', icon: 'feather', description: 'Gyorsabb reakciók kellenek', details: 'Kevesebb erőkifejtés' },
      { label: 'Könyök/csukló probléma', icon: 'warning', description: 'Sérülésmegelőző ütőt keresek', details: 'Maximális rezgéscsillapítás kell' },
    ],
  },
  {
    id: 'budget', question: 'Mekkora a kereted?',
    subtitle: 'Az ár csak iránymutató — ennek függvényében szűkítjük a választékot.',
    variant: 'budget',
    options: [
      { label: 'Belépő', priceLabel: '0 – 50 000 Ft', description: 'Tanulóknak, alkalmi játékhoz' },
      { label: 'Középszint', priceLabel: '50 – 75 000 Ft', description: 'Heti 1-2x játszóknak, jó ár-érték' },
      { label: 'Haladó', priceLabel: '75 – 100 000 Ft', description: 'Komoly játékosoknak, prémium technológia' },
      { label: 'Prémium', priceLabel: '100 000 Ft felett', description: 'Versenyzőknek, csúcskategória' },
      { label: 'Top találatok', priceLabel: 'Nem az ár számít', description: 'A legjobb ütők, ár nem szempont' },
    ],
  },
];

const fmtHUF = (n) => (typeof n === 'number' ? n.toLocaleString('hu-HU').replace(/,/g, ' ') + ' Ft' : n);

Object.assign(window, { PM_ASSETS: A, PRODUCTS, CATEGORIES, COURTS, QUESTIONS, fmtHUF });
