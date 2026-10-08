const { TabBar, ScreenHeader, Input, Button, Icon, Badge } = window.PadelMNiaDesignSystem_b97c58;

function LoginScreen({ onBack, onSubmit }) {
  return (
    <div style={{ background: 'var(--surface-page)', minHeight: '100%' }}>
      <ScreenHeader title="Bejelentkezés" onBack={onBack} />
      <div style={{ padding: '32px var(--gutter-widest) 48px', maxWidth: 480, margin: '0 auto' }}>
        <h1 style={{ font: 'var(--type-h2)', color: 'var(--text-primary)', margin: '0 0 8px' }}>Üdv újra!</h1>
        <p style={{ font: 'var(--type-body)', color: 'var(--text-label)', margin: '0 0 32px' }}>Jelentkezz be a rendeléseidhez és a Mánia+ árakhoz.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Input label="E-mail" type="email" placeholder="nev@pelda.hu" defaultValue="bence@pelda.hu" />
          <Input label="Jelszó" type="password" defaultValue="········" iconRight={<Icon name="eye" size={20} color="var(--text-muted)" />} />
          <a href="#" style={{ alignSelf: 'flex-end', font: 'var(--type-label)', textDecoration: 'none' }}>Elfelejtett jelszó</a>
          <Button variant="secondary" size="lg" fullWidth onClick={onSubmit}>Bejelentkezés</Button>
          <Button variant="outline" fullWidth iconLeft={<Icon name="scan-smiley" size={18} weight="bold" />} onClick={onSubmit}>Belépés Face ID-val</Button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 32 }}>
          <span style={{ font: 'var(--type-body)', color: 'var(--text-label)' }}>Még nincs fiókod?</span>
          <a href="#" style={{ font: 'var(--fw-semibold) var(--fs-base)/1.5 var(--font-sans)', color: 'var(--text-brand)', textDecoration: 'none' }}>Regisztráció</a>
        </div>
      </div>
    </div>
  );
}

function OrdersScreen({ onBack }) {
  const orders = [
    { id: '38412', date: '2026. augusztus 29.', total: 134990, status: 'Teljesítve', tone: 'success' },
    { id: '37865', date: '2026. július 14.', total: 130000, status: 'Teljesítve', tone: 'success' },
    { id: '37102', date: '2026. június 2.', total: 28900, status: 'Visszaküldve', tone: 'outline' },
  ];
  return (
    <div style={{ background: 'var(--surface-page-alt)', minHeight: '100%' }}>
      <ScreenHeader title="Rendeléseim" onBack={onBack} />
      <div style={{ padding: 'var(--gutter)', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {orders.map((o) => (
          <div key={o.id} style={{ background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)', padding: 'var(--gutter)', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
              <span style={{ font: 'var(--fw-semibold) var(--fs-base)/1.4 var(--font-sans)', color: 'var(--text-primary)' }}>#{o.id}</span>
              <Badge tone={o.tone}>{o.status}</Badge>
            </div>
            <span style={{ display: 'block', font: 'var(--type-body-sm)', color: 'var(--text-muted)' }}>{o.date}</span>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10, paddingTop: 10, borderTop: '1px solid var(--border-subtle)' }}>
              <span style={{ font: 'var(--type-label)', color: 'var(--text-label)' }}>Végösszeg</span>
              <span style={{ font: 'var(--type-price)', color: 'var(--text-price)' }}>{fmtHUF(o.total)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const TABS = [
  { id: 'webshop', label: 'Webshop', icon: 'shopping-cart' },
  { id: 'racket', label: 'Ütőválasztó', icon: 'crosshair' },
  { id: 'finder', label: 'Pályák', icon: 'map-pin' },
  { id: 'profile', label: 'Több', icon: 'list' },
];

function App() {
  const [tab, setTab] = React.useState('webshop');
  const [route, setRoute] = React.useState(null);
  const [product, setProduct] = React.useState(PRODUCTS[0]);
  const [lines, setLines] = React.useState([]);
  const [signedIn, setSignedIn] = React.useState(false);
  const [isMember, setIsMember] = React.useState(false);
  const [quiz, setQuiz] = React.useState({ phase: 'intro', step: 0 });
  const scroller = React.useRef(null);

  const cartCount = lines.reduce((a, l) => a + l.quantity, 0);
  const go = (r) => { setRoute(r); if (scroller.current) scroller.current.scrollTop = 0; };
  const switchTab = (t) => { setTab(t); setRoute(null); if (t === 'racket') setQuiz({ phase: 'intro', step: 0 }); if (scroller.current) scroller.current.scrollTop = 0; };

  const openProduct = (p) => { setProduct(p); go('product'); };
  const addToCart = () => {
    setLines((ls) => ls.some((l) => l.id === product.id)
      ? ls.map((l) => (l.id === product.id ? { ...l, quantity: l.quantity + 1 } : l))
      : [...ls, { ...product, quantity: 1 }]);
    go('cart');
  };

  let screen;
  if (route === 'product') {
    screen = <ProductScreen product={product} isMember={isMember} cartCount={cartCount} onBack={() => go(null)} onOpenCart={() => go('cart')} onAdd={addToCart} onOpenMania={() => go('mania')} onOpenProduct={openProduct} />;
  } else if (route === 'cart') {
    screen = <CartScreen lines={lines} isMember={isMember} onBack={() => go(null)}
      onQty={(id, n) => setLines((ls) => ls.map((l) => (l.id === id ? { ...l, quantity: n } : l)))}
      onRemove={(id) => setLines((ls) => ls.filter((l) => l.id !== id))}
      onCheckout={() => go('cart')} onShop={() => { switchTab('webshop'); }} />;
  } else if (route === 'mania') {
    screen = <ManiaPlusScreen isMember={isMember} onBack={() => go(null)} onJoin={() => setIsMember(true)} onCancel={() => setIsMember(false)} />;
  } else if (route === 'login') {
    screen = <LoginScreen onBack={() => go(null)} onSubmit={() => { setSignedIn(true); go(null); }} />;
  } else if (route === 'orders') {
    screen = <OrdersScreen onBack={() => go(null)} />;
  } else if (tab === 'webshop') {
    screen = <HomeScreen cartCount={cartCount} onOpenProduct={openProduct} onOpenCart={() => go('cart')} onOpenQuiz={() => switchTab('racket')} onOpenMania={() => go('mania')} onOpenSearch={() => {}} />;
  } else if (tab === 'racket') {
    screen = quiz.phase === 'intro'
      ? <QuizIntro onStart={() => setQuiz({ phase: 'q', step: 0 })} />
      : quiz.phase === 'q'
        ? <QuizQuestion step={quiz.step} onBack={() => setQuiz(quiz.step === 0 ? { phase: 'intro', step: 0 } : { phase: 'q', step: quiz.step - 1 })}
            onExit={() => setQuiz({ phase: 'intro', step: 0 })}
            onAnswer={() => { if (scroller.current) scroller.current.scrollTop = 0; setQuiz(quiz.step + 1 >= QUESTIONS.length ? { phase: 'results', step: 0 } : { phase: 'q', step: quiz.step + 1 }); }} />
        : <QuizResults onBack={() => setQuiz({ phase: 'q', step: QUESTIONS.length - 1 })} onExit={() => setQuiz({ phase: 'intro', step: 0 })} onOpenProduct={openProduct} />;
  } else if (tab === 'finder') {
    screen = <FinderScreen cartCount={cartCount} onOpenCart={() => go('cart')} />;
  } else {
    screen = <ProfileScreen signedIn={signedIn} isMember={isMember} onSignIn={() => go('login')} onSignOut={() => setSignedIn(false)} onOpenMania={() => go('mania')} onOpenOrders={() => go('orders')} />;
  }

  const hideTabs = route === 'login';

  return (
    <div className="pm-phone">
      <div className="pm-status">
        <span>9:41</span>
        <span style={{ display: 'inline-flex', gap: 5, alignItems: 'center' }}>
          <i className="ph-fill ph-cell-signal-full" /><i className="ph-fill ph-wifi-high" /><i className="ph-fill ph-battery-full" />
        </span>
      </div>
      <div className="pm-scroll" ref={scroller}>{screen}</div>
      {!hideTabs && <TabBar items={TABS} activeId={tab} onSelect={switchTab} />}
    </div>
  );
}

Object.assign(window, { App, LoginScreen, OrdersScreen });
