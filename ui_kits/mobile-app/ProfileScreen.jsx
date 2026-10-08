const { MenuRow, MenuSection, Button, Badge, Icon } = window.PadelMNiaDesignSystem_b97c58;

function ProfileScreen({ signedIn, isMember, onSignIn, onSignOut, onOpenMania, onOpenOrders }) {
  return (
    <div style={{ background: 'var(--surface-page)', minHeight: '100%' }}>
      <div style={{ padding: 'var(--gutter)', display: 'flex', flexDirection: 'column', gap: 'var(--gutter)', paddingBottom: 32 }}>
        {signedIn ? (
          <div style={{ background: 'var(--surface-brand)', borderRadius: 'var(--radius-xl)', padding: 20, display: 'flex', alignItems: 'center', gap: 16, boxShadow: 'var(--shadow-sm)' }}>
            <span style={{ width: 60, height: 60, borderRadius: 30, background: 'rgba(255,255,255,.2)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', font: 'var(--fw-bold) 28px/1 var(--font-sans)', color: '#fff' }}>K</span>
            <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>
              <span style={{ font: 'var(--type-h4)', color: 'var(--text-on-brand)' }}>Kovács Bence</span>
              <span style={{ font: 'var(--type-body-sm)', color: 'var(--text-on-brand-muted)' }}>bence@pelda.hu</span>
              {isMember && (
                <span style={{ alignSelf: 'flex-start', marginTop: 4 }}>
                  <Badge tone="onBrand" iconLeft={<Icon name="crown" size={11} weight="fill" />}>Mánia+ tag</Badge>
                </span>
              )}
            </div>
          </div>
        ) : (
          <div style={{ background: 'var(--surface-card)', borderRadius: 'var(--radius-xl)', padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, boxShadow: 'var(--shadow-sm)' }}>
            <span style={{ width: 72, height: 72, borderRadius: 36, background: 'var(--surface-sunken)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="user" size={32} color="var(--text-brand)" />
            </span>
            <span style={{ font: 'var(--type-h4)', color: 'var(--text-primary)' }}>Nincs bejelentkezve</span>
            <span style={{ font: 'var(--type-body-sm)', color: 'var(--text-label)', textAlign: 'center', lineHeight: '20px' }}>Jelentkezz be, hogy kezeld a rendeléseidet, tagságodat és kedvenceidet.</span>
            <div style={{ display: 'flex', gap: 12, width: '100%', marginTop: 8 }}>
              <Button variant="primary" fullWidth onClick={onSignIn}>Bejelentkezés</Button>
              <Button variant="outline" fullWidth onClick={onSignIn}>Regisztráció</Button>
            </div>
          </div>
        )}

        <MenuSection title={isMember ? 'Tagságom · 15% kedvezményem minden termékre' : '15% kedvezmény minden termékre'}>
          <MenuRow iconImage={`${PM_ASSETS}/logos/app-icon-mania.png`} label="Mánia Plusz" hint={isMember ? 'Aktív tag' : 'Csatlakozz!'} highlight={!isMember} onClick={onOpenMania} />
        </MenuSection>

        {signedIn && (
          <MenuSection title="Fiók">
            <MenuRow icon={<Icon name="package" size={18} />} label="Rendeléseim" onClick={onOpenOrders} />
            <MenuRow icon={<Icon name="heart" size={18} />} label="Kedvenceim" hint="4" />
            <MenuRow icon={<Icon name="user" size={18} />} label="Adataim" />
            <MenuRow icon={<Icon name="gear" size={18} />} label="Beállítások" />
          </MenuSection>
        )}

        <MenuSection title="Szolgáltatások">
          <MenuRow icon={<Icon name="tennis-ball" size={18} />} label="Ütőteszt" />
          <MenuRow icon={<Icon name="calendar-blank" size={18} />} label="Meccskereső" hint="Hamarosan" disabled />
          <MenuRow icon={<Icon name="handshake" size={18} />} label="Edzőkereső" hint="Hamarosan" disabled />
          <MenuRow icon={<Icon name="newspaper" size={18} />} label="Hírek" />
        </MenuSection>

        <MenuSection title="Jogi tudnivalók">
          <MenuRow icon={<Icon name="file-text" size={18} />} label="Általános szerződési feltételek" />
          <MenuRow icon={<Icon name="shield-check" size={18} />} label="Adatkezelési tájékoztató" />
          <MenuRow icon={<Icon name="truck" size={18} />} label="Szállítás és fizetés" />
          <MenuRow icon={<Icon name="phone" size={18} />} label="Kapcsolat" />
        </MenuSection>

        {signedIn && (
          <Button variant="danger" fullWidth iconLeft={<Icon name="sign-out" size={18} weight="bold" />} onClick={onSignOut} style={{ background: 'var(--surface-card)', boxShadow: 'var(--shadow-sm)', borderRadius: 'var(--radius-lg)', paddingTop: 16, paddingBottom: 16 }}>Kijelentkezés</Button>
        )}

        <span style={{ font: 'var(--type-caption)', color: 'var(--text-muted)', textAlign: 'center' }}>v1.3.2 · build 17</span>
      </div>
    </div>
  );
}

Object.assign(window, { ProfileScreen });
