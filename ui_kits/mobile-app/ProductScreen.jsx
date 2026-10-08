const { HeaderAction, PriceBlock, ManiaPriceBox, Badge, Button, ProductCard, Icon } = window.PadelMNiaDesignSystem_b97c58;

const SPECS = [
  ['Szint', 'Haladó / Silver'],
  ['Forma', 'Csepp'],
  ['Mag', 'Kemény EVA'],
  ['Egyensúly', 'Fejnehéz'],
  ['Sweet spot', 'Közepes'],
  ['Súlycsoport', '365-375 g'],
  ['Textúra', 'Érdesített'],
  ['Keret anyag', '12K karbon'],
];

function ProductScreen({ product, isMember, cartCount, onBack, onOpenCart, onAdd, onOpenMania, onOpenProduct }) {
  const [slide, setSlide] = React.useState(0);
  const [fav, setFav] = React.useState(false);
  const gallery = [product.image, `${PM_ASSETS}/imagery/racket-hero-detail.jpg`, `${PM_ASSETS}/imagery/racket-product-hero.jpg`];
  const related = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div style={{ background: 'var(--surface-page)', minHeight: '100%', paddingBottom: 96 }}>
      <div style={{ background: 'var(--surface-brand)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 8px 8px' }}>
        <HeaderAction label="Vissza" onClick={onBack}><Icon name="caret-left" size={22} weight="bold" /></HeaderAction>
        <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <HeaderAction label="Kedvenc" onClick={() => setFav(!fav)}><Icon name="heart" size={22} weight={fav ? 'fill' : 'bold'} color={fav ? 'var(--pm-favorite)' : undefined} /></HeaderAction>
          <HeaderAction label="Kosár" count={cartCount} onClick={onOpenCart}><Icon name="shopping-cart" size={22} weight="bold" /></HeaderAction>
        </div>
      </div>

      <div style={{ padding: 'var(--gutter) var(--gutter) 0' }}>
        <div style={{ aspectRatio: '4 / 3', borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'var(--surface-card)', position: 'relative' }}>
          <img src={gallery[slide]} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          {product.demo && <span style={{ position: 'absolute', top: 8, right: 8, background: 'var(--feedback-success)', color: '#fff', borderRadius: 4, padding: '2px 6px', font: 'var(--fw-bold) 10px/1.4 var(--font-sans)' }}>Kipróbálható</span>}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 8 }}>
          {gallery.map((_, i) => (
            <button key={i} type="button" aria-label={`Kép ${i + 1}`} onClick={() => setSlide(i)} style={{ width: i === slide ? 18 : 6, height: 6, borderRadius: 3, border: 0, padding: 0, cursor: 'pointer', background: i === slide ? 'var(--surface-brand)' : 'var(--pm-gray-300)' }} />
          ))}
        </div>
      </div>

      <div style={{ padding: 'var(--gutter)' }}>
        <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
          {product.onSale && <Badge tone="brand">−{Math.round((1 - product.price / product.regularPrice) * 100)}%</Badge>}
          <span style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', padding: '6px 10px' }}>
            <span style={{ display: 'block', font: 'var(--fw-semibold) 12px/1.3 var(--font-sans)', color: 'var(--text-heading)' }}>Készleten</span>
            <span style={{ display: 'block', font: 'var(--type-caption)', color: 'var(--text-muted)' }}>Nálad holnap</span>
          </span>
        </div>

        <h1 style={{ font: 'var(--type-h3)', color: 'var(--text-primary)', margin: '0 0 12px' }}>{product.name}</h1>
        <PriceBlock price={product.price} regularPrice={product.regularPrice} onSale={product.onSale} />
        <div style={{ marginTop: 8 }}>
          <ManiaPriceBox memberPrice={product.memberPrice} savings={product.price - product.memberPrice} isMember={isMember} markSrc={`${PM_ASSETS}/logos/app-icon-mania.png`} onJoin={isMember ? undefined : onOpenMania} />
        </div>

        <section style={{ marginTop: 24 }}>
          <div style={{ font: 'var(--type-label)', color: 'var(--text-label)', textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: 11, marginBottom: 8 }}>Leírás</div>
          <p style={{ font: 'var(--type-body)', color: '#424242', margin: 0 }}>
            Támadó játékhoz készült csepp forma, kemény EVA maggal és érdesített felülettel. A 12K karbon keret gyors labdakimenetet ad, a fejnehéz egyensúly pedig extra erőt a smash-eknél.
          </p>
        </section>

        <section style={{ marginTop: 24 }}>
          <div style={{ font: 'var(--type-label)', color: 'var(--text-label)', textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: 11, marginBottom: 8 }}>Specifikációk</div>
          {SPECS.map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--border-subtle)' }}>
              <span style={{ font: 'var(--type-label)', color: 'var(--text-label)' }}>{k}</span>
              <span style={{ font: 'var(--type-label)', color: 'var(--text-heading)' }}>{v}</span>
            </div>
          ))}
        </section>

        <section style={{ marginTop: 24 }}>
          <div style={{ font: 'var(--type-label)', color: 'var(--text-label)', textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: 11, marginBottom: 8 }}>Kapcsolódó termékek</div>
          <div style={{ display: 'flex', gap: 12, overflowX: 'auto', scrollbarWidth: 'none' }}>
            {related.map((p) => <ProductCard key={p.id} {...p} width={132} memberMarkSrc={`${PM_ASSETS}/logos/app-icon-mania.png`} onClick={() => onOpenProduct(p)} />)}
          </div>
        </section>

        <section style={{ marginTop: 24 }}>
          <div style={{ font: 'var(--type-label)', color: 'var(--text-label)', textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: 11, marginBottom: 8 }}>Vásárlói vélemények (1)</div>
          <div style={{ background: 'var(--surface-page-alt)', borderRadius: 'var(--radius-md)', padding: 12 }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 8 }}>
              <span style={{ width: 34, height: 34, borderRadius: 17, background: 'var(--surface-brand)', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', font: 'var(--fw-bold) 14px/1 var(--font-sans)' }}>G</span>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ font: 'var(--fw-semibold) var(--fs-sm)/1.3 var(--font-sans)', color: 'var(--text-primary)' }}>Gábor K.</span>
                  <Badge tone="success" size="sm" iconLeft={<Icon name="check-circle" size={10} weight="fill" />}>Igazolt</Badge>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 3, marginTop: 2 }}>
                  <Icon name="star" size={11} weight="fill" color="var(--pm-star)" />
                  <span style={{ font: 'var(--fw-medium) 11px/1.3 var(--font-sans)', color: 'var(--text-muted)' }}>5/5</span>
                </div>
              </div>
              <span style={{ font: 'var(--type-caption)', color: 'var(--text-disabled)' }}>márc. 4.</span>
            </div>
            <p style={{ font: 'var(--type-body-sm)', color: 'var(--text-body)', margin: 0 }}>Kipróbáltam a demo ütőt a pályán, két nap múlva megrendeltem. Pont az az erő, amit kerestem.</p>
          </div>
        </section>
      </div>

      <div style={{ position: 'sticky', bottom: 0, padding: '8px var(--gutter) 12px', background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, var(--surface-page) 40%)' }}>
        <Button variant="primary" size="lg" fullWidth iconLeft={<Icon name="shopping-cart" size={18} weight="bold" />} onClick={onAdd}>Kosárba</Button>
      </div>
    </div>
  );
}

Object.assign(window, { ProductScreen });
