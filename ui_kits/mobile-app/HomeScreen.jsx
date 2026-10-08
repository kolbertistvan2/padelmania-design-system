const { AppHeader, HeaderAction, SectionHeader, ProductCard, CategoryCard, ManiaPlusBanner, FeatureCta, NoticeBanner, Input, Icon } = window.PadelMNiaDesignSystem_b97c58;

function HeroSlide({ onOpen }) {
  return (
    <div style={{ padding: '12px var(--gutter) 4px' }}>
      <div onClick={onOpen} style={{ position: 'relative', height: 150, borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'var(--surface-brand)', cursor: 'pointer' }}>
        <img src={`${PM_ASSETS}/imagery/tactile-arms-racket-ball.png`} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(11,60,73,.92) 0%, rgba(11,60,73,.55) 55%, rgba(11,60,73,.15) 100%)' }} />
        <div style={{ position: 'absolute', left: 16, right: 120, bottom: 16, display: 'flex', flexDirection: 'column', gap: 6 }}>
          <span style={{ font: 'var(--fw-bold) 10px/1.3 var(--font-sans)', letterSpacing: 'var(--tracking-caps)', color: 'var(--action-primary)' }}>ÚJ SZEZON</span>
          <span style={{ font: 'var(--fw-bold) var(--fs-lg)/1.2 var(--font-sans)', letterSpacing: 'var(--tracking-title)', color: 'var(--text-on-brand)' }}>Próbáld ki, aztán vedd meg</span>
          <span style={{ font: 'var(--fw-regular) 12px/1.4 var(--font-sans)', color: 'var(--text-on-brand-soft)' }}>Demo ütők a partnerpályákon</span>
        </div>
        <div style={{ position: 'absolute', bottom: 10, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 6 }}>
          {[0, 1, 2].map((i) => <span key={i} style={{ width: i === 0 ? 16 : 6, height: 6, borderRadius: 3, background: i === 0 ? 'var(--pm-white)' : 'rgba(255,255,255,.45)' }} />)}
        </div>
      </div>
    </div>
  );
}

function Rail({ items, onOpen }) {
  return (
    <div style={{ display: 'flex', gap: 10, overflowX: 'auto', padding: '4px var(--gutter)', scrollbarWidth: 'none' }}>
      {items.map((p) => (
        <ProductCard key={p.id} {...p} memberMarkSrc={`${PM_ASSETS}/logos/app-icon-mania.png`} onClick={() => onOpen(p)} />
      ))}
    </div>
  );
}

function HomeScreen({ cartCount, onOpenProduct, onOpenCart, onOpenQuiz, onOpenMania, onOpenSearch }) {
  const [notice, setNotice] = React.useState(true);
  return (
    <div style={{ background: 'var(--surface-page)', minHeight: '100%' }}>
      <AppHeader
        logoSrc={`${PM_ASSETS}/logos/padel-mania-logo-white.svg`}
        actions={<HeaderAction label="Kosár" count={cartCount} onClick={onOpenCart}><Icon name="shopping-cart" size={22} weight="bold" /></HeaderAction>}
        search={<div onClick={onOpenSearch}><Input onDark readOnly placeholder="Termék keresése..." iconLeft={<Icon name="magnifying-glass" size={16} color="rgba(255,255,255,.55)" />} /></div>}
      />
      <HeroSlide onOpen={() => onOpenProduct(PRODUCTS[0])} />

      {notice && (
        <div style={{ padding: '8px var(--gutter)' }}>
          <NoticeBanner icon={<Icon name="bell-ringing" size={22} />} onAccept={() => setNotice(false)} onDeny={() => setNotice(false)} onClose={() => setNotice(false)} acceptLabel="Kérem" denyLabel="Most nem">
            Szólunk, ha megjön a rendelésed vagy akcióba kerül a kiszemelt ütőd.
          </NoticeBanner>
        </div>
      )}

      <div style={{ marginTop: 8, marginBottom: 8 }}>
        <SectionHeader title="Kategóriák" onSeeAll={() => {}} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, padding: '0 var(--gutter)' }}>
          {CATEGORIES.map((c) => <CategoryCard key={c.id} label={c.name} image={c.image} />)}
        </div>
      </div>

      <div style={{ padding: '8px var(--gutter)' }}>
        <ManiaPlusBanner title="Mánia Plusz" subtitle="15% kedvezmény minden termékre" markSrc={`${PM_ASSETS}/logos/app-icon-mania.png`} onClick={onOpenMania} />
      </div>

      <div style={{ marginTop: 8 }}>
        <SectionHeader title="Kiemelt termékek" />
        <Rail items={PRODUCTS.slice(0, 4)} onOpen={onOpenProduct} />
      </div>

      <div style={{ marginTop: 16 }}>
        <SectionHeader title="Akciós termékek" badge="Akció" />
        <Rail items={PRODUCTS.filter((p) => p.onSale)} onOpen={onOpenProduct} />
      </div>

      <div style={{ padding: '20px var(--gutter) 24px' }}>
        <FeatureCta icon={<Icon name="crosshair" size={24} />} title="Nem tudod, melyik ütő a tiéd?" subtitle="5 kérdés, és megvan az ütőd" onClick={onOpenQuiz} />
      </div>
    </div>
  );
}

Object.assign(window, { HomeScreen });
