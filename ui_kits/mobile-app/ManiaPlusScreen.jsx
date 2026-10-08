const { ScreenHeader, BenefitRow, Button, Badge, Icon } = window.PadelMNiaDesignSystem_b97c58;

function ManiaPlusScreen({ isMember, onBack, onJoin, onCancel }) {
  return (
    <div style={{ background: 'var(--surface-page-alt)', minHeight: '100%', paddingBottom: 32 }}>
      <ScreenHeader title="Mánia Plusz" onBack={onBack} />

      {isMember ? (
        <div style={{ background: 'var(--action-primary)', padding: '40px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <img src={`${PM_ASSETS}/logos/mania-plus-logo-white.png`} alt="" style={{ width: 80, height: 80, objectFit: 'contain' }} />
          <span style={{ font: 'var(--type-h3)', color: '#fff', marginTop: 12, textAlign: 'center' }}>Aktív Mánia+ tag vagy</span>
          <span style={{ font: 'var(--type-body)', color: 'rgba(255,255,255,.85)' }}>Következő megújulás: 2026. október 8.</span>
        </div>
      ) : (
        <div style={{ background: 'var(--surface-brand)', padding: '40px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <img src={`${PM_ASSETS}/logos/app-icon-mania.png`} alt="" style={{ width: 80, height: 80, objectFit: 'contain', borderRadius: 16 }} />
          <span style={{ font: 'var(--type-h2)', color: '#fff', marginTop: 12, textAlign: 'center' }}>Padel Mania Plusz</span>
          <span style={{ font: 'var(--type-body-lg)', color: 'var(--text-on-brand-soft)' }}>havi 1 500 Ft</span>
        </div>
      )}

      <div style={{ background: 'var(--surface-card)', borderRadius: 'var(--radius-xl)', margin: isMember ? '16px var(--gutter) 0' : '-24px var(--gutter) 0', padding: 20, boxShadow: 'var(--shadow-md)', position: 'relative' }}>
        <span style={{ display: 'block', font: 'var(--type-h4)', color: 'var(--text-primary)', marginBottom: 12 }}>{isMember ? 'A tagságod tartalma' : 'Mit kapsz?'}</span>
        <BenefitRow tone="cream" icon={<Icon name="check-circle" size={22} weight="fill" />} title="Minimum 15% kedvezmény minden termékre" divider />
        <BenefitRow tone="cream" icon={<Icon name="truck" size={22} weight="fill" />} title="Ingyenes szállítás minden rendeléshez" />
      </div>

      {isMember && (
        <div style={{ background: 'var(--surface-card)', borderRadius: 'var(--radius-xl)', margin: '16px var(--gutter) 0', padding: 20, boxShadow: 'var(--shadow-md)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <Icon name="crown" size={20} weight="fill" color="var(--action-primary)" />
            <span style={{ font: 'var(--type-h4)', color: 'var(--text-primary)' }}>Eddigi megtakarításod</span>
          </div>
          <div style={{ background: 'var(--surface-sunken)', borderRadius: 'var(--radius-md)', padding: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <span style={{ font: 'var(--type-label)', color: 'var(--text-label)' }}>Összesen</span>
            <span style={{ font: 'var(--fw-bold) 28px/1.2 var(--font-sans)', color: 'var(--action-primary)' }}>{fmtHUF(42300)}</span>
          </div>
          {[['Termék kedvezmény (15%)', 36600], ['Ingyenes szállítás', 5700]].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 0' }}>
              <span style={{ flex: 1, font: 'var(--type-body)', color: 'var(--text-label)' }}>{k}</span>
              <span style={{ font: 'var(--fw-semibold) var(--fs-base)/1.4 var(--font-sans)', color: 'var(--text-primary)' }}>{fmtHUF(v)}</span>
            </div>
          ))}
        </div>
      )}

      <div style={{ background: 'var(--surface-card)', borderRadius: 'var(--radius-xl)', margin: '16px var(--gutter) 0', padding: 20, boxShadow: 'var(--shadow-sm)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
          <span style={{ font: 'var(--type-h4)', color: 'var(--text-primary)' }}>Előfizetés</span>
          <Badge tone={isMember ? 'success' : 'accent'}>{isMember ? 'Aktív' : 'Nincs'}</Badge>
        </div>
        <span style={{ font: 'var(--fw-bold) 22px/1.2 var(--font-sans)', color: 'var(--text-brand)' }}>1 500 Ft</span>
        <span style={{ font: 'var(--fw-regular) 14px/1.4 var(--font-sans)', color: 'var(--text-muted)' }}> / hónap</span>
        <div style={{ height: 1, background: 'var(--border-subtle)', margin: '12px 0' }} />
        <span style={{ font: 'var(--type-body-sm)', color: 'var(--text-label)' }}>Bármikor lemondható, a lemondás a következő fordulónapon lép életbe.</span>
      </div>

      <div style={{ padding: '24px var(--gutter) 0' }}>
        {isMember
          ? <Button variant="danger" fullWidth onClick={onCancel}>Tagság lemondása</Button>
          : <Button variant="primary" size="lg" fullWidth iconRight={<Icon name="arrow-right" size={18} weight="bold" />} onClick={onJoin}>Csatlakozz — 1 500 Ft / hó</Button>}
      </div>
    </div>
  );
}

Object.assign(window, { ManiaPlusScreen });
