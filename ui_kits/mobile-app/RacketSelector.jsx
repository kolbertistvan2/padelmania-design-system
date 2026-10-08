const { ScreenHeader, ProgressBar, QuizOptionCard, StatCard, BenefitRow, Button, Chip, ProductCard, Badge, Icon } = window.PadelMNiaDesignSystem_b97c58;

function QuizIntro({ onStart }) {
  return (
    <div style={{ background: 'var(--surface-page)', minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <ScreenHeader title="Ütőválasztó" />
      <div style={{ flex: 1, padding: '4px var(--gutter-widest) 0', display: 'flex', flexDirection: 'column', gap: 18, alignItems: 'center' }}>
        <div style={{ position: 'relative', width: 150, height: 150 }}>
          <span style={{ position: 'absolute', inset: 0, borderRadius: 75, background: 'var(--surface-accent)' }} />
          <span style={{ position: 'absolute', top: 18, left: 18, width: 114, height: 114, borderRadius: 57, background: 'var(--surface-card)', border: '1.5px solid var(--border-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            <img src={`${PM_ASSETS}/imagery/studio-racket.png`} alt="" style={{ width: 108, height: 108, objectFit: 'contain' }} />
          </span>
          <span style={{ position: 'absolute', top: 38, left: 28, width: 8, height: 8, borderRadius: 4, background: 'var(--pm-coral)' }} />
          <span style={{ position: 'absolute', top: 46, left: 124, width: 8, height: 8, borderRadius: 4, background: 'var(--pm-sky)' }} />
          <span style={{ position: 'absolute', top: 114, left: 130, width: 10, height: 10, borderRadius: 5, background: 'var(--pm-teal)' }} />
          <span style={{ position: 'absolute', top: 130, left: 32, width: 6, height: 6, borderRadius: 3, background: 'var(--pm-coral)' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center', alignSelf: 'stretch' }}>
          <span style={{ font: 'var(--fw-bold) 22px/28px var(--font-sans)', color: 'var(--text-brand)', textAlign: 'center', letterSpacing: 'var(--tracking-display)' }}>Találd meg a tökéletes ütőd</span>
          <span style={{ font: 'var(--fw-regular) var(--fs-sm)/18px var(--font-sans)', color: 'var(--pm-warm-gray)', textAlign: 'center' }}>5 kérdés. Néhány perc. Az ütő, ami passzol hozzád.</span>
        </div>

        <div style={{ display: 'flex', gap: 10, alignSelf: 'stretch' }}>
          <StatCard value="5" label="kérdés" />
          <StatCard value="2 perc" label="válaszra" />
          <StatCard value="3" label="ajánlás" />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignSelf: 'stretch' }}>
          <BenefitRow icon={<Icon name="crosshair" size={16} />} title="Személyre szabott találatok" subtitle="A te szintedhez, stílusodhoz, kerethez" />
          <BenefitRow icon={<Icon name="sliders-horizontal" size={16} />} title="Részletes elemzés" subtitle="Súly, mag, egyensúly, sweet spot és még 4 szempont" />
          <BenefitRow icon={<Icon name="package" size={16} />} title="Valós készlet" subtitle="Csak amit tényleg meg tudsz rendelni" />
        </div>
      </div>
      <div style={{ padding: '12px var(--gutter-widest) 24px', display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center' }}>
        <Button variant="primary" size="lg" fullWidth iconRight={<Icon name="arrow-right" size={20} weight="bold" />} onClick={onStart}>Indítsd el</Button>
        <span style={{ font: 'var(--type-caption)', color: 'var(--text-muted)' }}>Ingyenes, regisztráció nem kell</span>
      </div>
    </div>
  );
}

function QuizQuestion({ step, onAnswer, onBack, onExit }) {
  const q = QUESTIONS[step];
  return (
    <div style={{ background: 'var(--surface-page)', minHeight: '100%' }}>
      <ScreenHeader title={`${step + 1} / ${QUESTIONS.length}`} onBack={onBack} onClose={onExit} />
      <ProgressBar value={step + 1} total={QUESTIONS.length} />
      <div style={{ padding: 'var(--gutter-wide) var(--gutter-wide) 32px' }}>
        <h2 style={{ font: 'var(--fw-bold) 22px/28px var(--font-sans)', color: 'var(--text-brand)', letterSpacing: 'var(--tracking-title)', margin: '0 0 6px' }}>{q.question}</h2>
        <p style={{ font: 'var(--fw-regular) 14px/20px var(--font-sans)', color: 'var(--pm-warm-gray)', margin: '0 0 20px' }}>{q.subtitle}</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {q.options.map((o, i) => (
            <QuizOptionCard key={o.label} variant={q.variant} index={i} label={o.label} description={o.description} details={o.details}
              levelBadge={o.levelBadge} priceLabel={o.priceLabel} image={o.image}
              icon={o.icon ? <Icon name={o.icon} size={20} /> : undefined} onSelect={onAnswer} />
          ))}
        </div>
      </div>
    </div>
  );
}

function QuizResults({ onBack, onExit, onOpenProduct }) {
  const best = PRODUCTS.slice(0, 3);
  const invest = PRODUCTS.slice(1, 4);
  const Caption = ({ children }) => (
    <span style={{ font: 'var(--fw-bold) 12px/1.3 var(--font-sans)', color: 'var(--text-brand)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase' }}>{children}</span>
  );
  return (
    <div style={{ background: 'var(--surface-page)', minHeight: '100%' }}>
      <ScreenHeader title="Az ajánlatod" onBack={onBack} onClose={onExit} />
      <div style={{ padding: 'var(--gutter-wide)', display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <span style={{ font: 'var(--fw-semibold) 11px/1.3 var(--font-sans)', color: 'var(--text-muted)', letterSpacing: 'var(--tracking-caps-wide)', textTransform: 'uppercase' }}>A te profilod</span>
          <span style={{ font: 'var(--type-body)', color: 'var(--text-primary)' }}>Bronz szintű univerzális játékos</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {['Csepp forma', 'Hybrid mag', 'Közepes sweet spot', '365-375 g', 'Középre tolt egyensúly'].map((t) => <Chip key={t} kind="chip">{t}</Chip>)}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'var(--feedback-success-bg)', borderRadius: 'var(--radius-md)', padding: 12 }}>
          <img src={`${PM_ASSETS}/logos/app-icon-mania.png`} alt="" style={{ width: 16, height: 16, borderRadius: 3 }} />
          <span style={{ flex: 1, font: 'var(--fw-medium) 12px/1.4 var(--font-sans)', color: 'var(--text-body)' }}>Mánia+ tagként <b style={{ color: 'var(--feedback-success)' }}>19 500 Ft-ot</b> spórolnál ezen az ütőn.</span>
        </div>

        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
            <Caption>Legjobb neked most</Caption>
          </div>
          <span style={{ display: 'block', font: 'var(--type-caption)', color: 'var(--text-muted)', marginBottom: 10 }}>A profilod alapján rangsorolva</span>
          <div style={{ display: 'flex', gap: 10, overflowX: 'auto', scrollbarWidth: 'none' }}>
            {best.map((p) => <ProductCard key={p.id} {...p} memberMarkSrc={`${PM_ASSETS}/logos/app-icon-mania.png`} onClick={() => onOpenProduct(p)} />)}
          </div>
        </div>

        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
            <Caption>Növekedj vele</Caption>
            <Badge tone="accent" size="sm">Befektetés</Badge>
          </div>
          <span style={{ display: 'block', font: 'var(--type-caption)', color: 'var(--text-muted)', marginBottom: 10 }}>Egy szinttel feljebb — ezek a következő szintedre is tökéletesek</span>
          <div style={{ display: 'flex', gap: 10, overflowX: 'auto', scrollbarWidth: 'none' }}>
            {invest.map((p) => <ProductCard key={p.id} {...p} memberMarkSrc={`${PM_ASSETS}/logos/app-icon-mania.png`} onClick={() => onOpenProduct(p)} />)}
          </div>
        </div>

        <Button variant="outline" fullWidth iconRight={<Icon name="arrow-right" size={16} weight="bold" />}>Pontosabb ajánlást kérek</Button>
      </div>
    </div>
  );
}

Object.assign(window, { QuizIntro, QuizQuestion, QuizResults });
