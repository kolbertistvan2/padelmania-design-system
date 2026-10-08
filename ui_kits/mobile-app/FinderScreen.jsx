const { AppHeader, HeaderAction, SegmentControl, Input, Chip, CourtCard, Icon } = window.PadelMNiaDesignSystem_b97c58;

const SORTS = [
  { label: 'Ajánlott', icon: 'star' },
  { label: 'Távolság', icon: 'map-trifold' },
  { label: 'Értékelés', icon: 'star' },
  { label: 'Vélemények', icon: 'chat-dots' },
];

function FinderScreen({ cartCount, onOpenCart }) {
  const [seg, setSeg] = React.useState('courts');
  const [sort, setSort] = React.useState('Ajánlott');
  const [openId, setOpenId] = React.useState('c1');
  const [favs, setFavs] = React.useState(['c3']);
  const toggleFav = (id) => setFavs((f) => (f.includes(id) ? f.filter((x) => x !== id) : [...f, id]));
  const ordered = [...COURTS].sort((a, b) => (favs.includes(b.id) ? 1 : 0) - (favs.includes(a.id) ? 1 : 0));

  return (
    <div style={{ background: 'var(--surface-page)', minHeight: '100%' }}>
      <AppHeader title="Pályák &amp; Edzők" actions={<HeaderAction label="Kosár" count={cartCount} onClick={onOpenCart}><Icon name="shopping-cart" size={22} weight="bold" /></HeaderAction>}>
        <SegmentControl activeId={seg} onSelect={setSeg} items={[
          { id: 'courts', label: 'Pályák', icon: 'map-pin' },
          { id: 'coaches', label: 'Edzők', icon: 'users' },
          { id: 'matches', label: 'Meccsek', icon: 'tennis-ball' },
        ]} />
      </AppHeader>

      {seg !== 'courts' ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, padding: '64px 32px' }}>
          <span style={{ width: 80, height: 80, borderRadius: 24, background: 'var(--surface-sunken)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name={seg === 'coaches' ? 'users' : 'tennis-ball'} size={32} color="var(--text-brand)" />
          </span>
          <span style={{ font: 'var(--type-h4)', color: 'var(--text-primary)', textAlign: 'center' }}>{seg === 'coaches' ? 'Edzőkereső' : 'Meccskereső'}</span>
          <span style={{ font: 'var(--type-body-sm)', color: 'var(--text-muted)', textAlign: 'center' }}>
            A funkció készen van, de a v1 kiadásban ki van kapcsolva (FeatureFlags). Ez a képernyő szándékosan üres — nincs hozzá jóváhagyott terv.
          </span>
        </div>
      ) : (
        <>
          <div style={{ background: 'var(--surface-brand)', padding: '0 var(--gutter) 12px' }}>
            <Input onDark placeholder="Pálya vagy város keresése..." iconLeft={<Icon name="magnifying-glass" size={16} color="rgba(255,255,255,.55)" />} iconRight={<Icon name="crosshair" size={16} color="rgba(255,255,255,.55)" />} />
          </div>

          <div style={{ height: 135, margin: '8px var(--gutter) 0', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--border-subtle)', position: 'relative', background: 'var(--surface-sunken)' }}>
            <img src={`${PM_ASSETS}/imagery/social-cover-1.png`} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.35 }} />
            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
              <Icon name="map-trifold" size={22} color="var(--text-brand)" />
              <span style={{ font: 'var(--type-body-sm)', color: 'var(--text-label)' }}>Google Maps · 4 pálya a közelben</span>
            </div>
            <span style={{ position: 'absolute', top: 46, left: 92, width: 26, height: 26, borderRadius: 13, background: 'var(--action-primary)', border: '2px solid #fff', boxShadow: 'var(--shadow-md)' }} />
            <span style={{ position: 'absolute', top: 74, left: 178, width: 20, height: 20, borderRadius: 10, background: 'var(--surface-brand)', border: '2px solid #fff' }} />
            <span style={{ position: 'absolute', top: 34, left: 246, width: 20, height: 20, borderRadius: 10, background: 'var(--surface-brand)', border: '2px solid #fff' }} />
          </div>

          <div style={{ padding: '12px var(--gutter) 8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
              <Icon name="sliders-horizontal" size={14} color="var(--text-muted)" />
              <span style={{ font: 'var(--type-label)', color: 'var(--text-muted)' }}>Rendezés</span>
            </div>
            <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 8, scrollbarWidth: 'none' }}>
              {SORTS.map((s) => (
                <Chip key={s.label} selected={sort === s.label} onClick={() => setSort(s.label)} iconLeft={<Icon name={s.icon} size={13} weight="bold" />}>{s.label}</Chip>
              ))}
            </div>
            <span style={{ font: 'var(--type-body-sm)', color: 'var(--text-muted)' }}>4 pálya · 30 km-en belül</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: '0 var(--gutter) 24px' }}>
            {ordered.map((c) => (
              <CourtCard key={c.id} {...c} favorite={favs.includes(c.id)} expanded={openId === c.id}
                onToggle={() => setOpenId(openId === c.id ? null : c.id)} onFavorite={() => toggleFav(c.id)}
                onNavigate={() => {}} onCall={() => {}} onDetail={() => {}} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

Object.assign(window, { FinderScreen });
