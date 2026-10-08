const { ScreenHeader, CartLineItem, QtyStepper, Button, Icon } = window.PadelMNiaDesignSystem_b97c58;

function CartScreen({ lines, isMember, onBack, onQty, onRemove, onCheckout, onShop }) {
  const subtotal = lines.reduce((a, l) => a + l.price * l.quantity, 0);
  const memberDiscount = isMember ? Math.round(subtotal * 0.15) : 0;
  const shipping = isMember ? 0 : 1900;
  const total = subtotal - memberDiscount + shipping;

  if (lines.length === 0) {
    return (
      <div style={{ background: 'var(--surface-page-alt)', minHeight: '100%' }}>
        <ScreenHeader title="Kosár" onBack={onBack} />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16, padding: 32, paddingTop: 80 }}>
          <span style={{ width: 88, height: 88, borderRadius: 44, background: 'var(--surface-sunken)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="shopping-cart" size={34} color="var(--text-brand)" />
          </span>
          <span style={{ font: 'var(--type-h3)', color: 'var(--text-primary)' }}>A kosarad üres</span>
          <span style={{ font: 'var(--type-body)', color: 'var(--text-muted)', textAlign: 'center' }}>Nézd meg az ütőket — a Mánia+ árakkal még jobban jársz.</span>
          <Button variant="secondary" onClick={onShop}>Vásárlás</Button>
        </div>
      </div>
    );
  }

  const Row = ({ label, value, muted, free }) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ font: 'var(--type-body)', color: 'var(--text-label)' }}>{label}</span>
      <span style={{ font: free ? 'var(--fw-semibold) var(--fs-sm)/1.4 var(--font-sans)' : 'var(--type-label)', color: free ? 'var(--feedback-success)' : muted ? 'var(--text-muted)' : 'var(--text-primary)' }}>{value}</span>
    </div>
  );

  return (
    <div style={{ background: 'var(--surface-page-alt)', minHeight: '100%' }}>
      <ScreenHeader title="Kosár" onBack={onBack} />
      <div style={{ padding: 'var(--gutter)', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {lines.map((l) => (
          <CartLineItem key={l.id} name={l.name} variant="Grip: L2" image={l.image} price={l.price} quantity={l.quantity}
            stepper={<QtyStepper value={l.quantity} onChange={(n) => onQty(l.id, n)} />} onRemove={() => onRemove(l.id)} />
        ))}

        <div style={{ background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)', padding: 'var(--gutter)', boxShadow: 'var(--shadow-sm)', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <span style={{ font: 'var(--type-h4)', color: 'var(--text-primary)' }}>Összegzés</span>
          <Row label="Részösszeg" value={fmtHUF(subtotal)} />
          {isMember && <Row label="Mánia+ kedvezmény (15%)" value={`−${fmtHUF(memberDiscount)}`} free />}
          <Row label="Szállítás" value={shipping === 0 ? 'Ingyenes' : fmtHUF(shipping)} free={shipping === 0} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-subtle)', paddingTop: 12 }}>
            <span style={{ font: 'var(--type-h4)', color: 'var(--text-primary)' }}>Összesen</span>
            <span style={{ font: 'var(--type-price-lg)', color: 'var(--text-price)' }}>{fmtHUF(total)}</span>
          </div>
          <span style={{ font: 'var(--type-caption)', color: 'var(--text-disabled)', textAlign: 'center' }}>Az árak az áfát tartalmazzák</span>
        </div>
      </div>

      <div style={{ position: 'sticky', bottom: 0, background: 'var(--surface-card)', padding: 'var(--gutter)', borderTop: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-lg)' }}>
        <Button variant="primary" size="lg" fullWidth onClick={onCheckout}>Megrendelés · {fmtHUF(total)}</Button>
      </div>
    </div>
  );
}

Object.assign(window, { CartScreen });
