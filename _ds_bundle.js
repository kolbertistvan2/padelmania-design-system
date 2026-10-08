/* @ds-bundle: {"format":4,"namespace":"PadelMNiaDesignSystem_b97c58","components":[{"name":"CartLineItem","sourcePath":"components/commerce/CartLineItem.jsx"},{"name":"CategoryCard","sourcePath":"components/commerce/CategoryCard.jsx"},{"name":"ManiaPriceBox","sourcePath":"components/commerce/ManiaPriceBox.jsx"},{"name":"PriceBlock","sourcePath":"components/commerce/PriceBlock.jsx"},{"name":"ProductCard","sourcePath":"components/commerce/ProductCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"ProgressBar","sourcePath":"components/core/ProgressBar.jsx"},{"name":"QtyStepper","sourcePath":"components/core/QtyStepper.jsx"},{"name":"Skeleton","sourcePath":"components/core/Skeleton.jsx"},{"name":"CourtCard","sourcePath":"components/finder/CourtCard.jsx"},{"name":"AppHeader","sourcePath":"components/navigation/AppHeader.jsx"},{"name":"HeaderAction","sourcePath":"components/navigation/AppHeader.jsx"},{"name":"MenuRow","sourcePath":"components/navigation/MenuRow.jsx"},{"name":"MenuSection","sourcePath":"components/navigation/MenuRow.jsx"},{"name":"ScreenHeader","sourcePath":"components/navigation/ScreenHeader.jsx"},{"name":"SectionHeader","sourcePath":"components/navigation/SectionHeader.jsx"},{"name":"SegmentControl","sourcePath":"components/navigation/SegmentControl.jsx"},{"name":"TabBar","sourcePath":"components/navigation/TabBar.jsx"},{"name":"FeatureCta","sourcePath":"components/promo/FeatureCta.jsx"},{"name":"ManiaPlusBanner","sourcePath":"components/promo/ManiaPlusBanner.jsx"},{"name":"NoticeBanner","sourcePath":"components/promo/NoticeBanner.jsx"},{"name":"StatCard","sourcePath":"components/promo/StatCard.jsx"},{"name":"BenefitRow","sourcePath":"components/promo/StatCard.jsx"},{"name":"QuizOptionCard","sourcePath":"components/quiz/QuizOptionCard.jsx"}],"sourceHashes":{"components/commerce/CartLineItem.jsx":"c3000bff1e11","components/commerce/CategoryCard.jsx":"dedd6df88f1f","components/commerce/ManiaPriceBox.jsx":"60ef96db5d96","components/commerce/PriceBlock.jsx":"696f1aed3680","components/commerce/ProductCard.jsx":"a9add39ada74","components/core/Badge.jsx":"ef7f371dff14","components/core/Button.jsx":"969b22579c91","components/core/Chip.jsx":"9feb6d487b5f","components/core/Icon.jsx":"5b3cc8883919","components/core/Input.jsx":"0411412227d7","components/core/ProgressBar.jsx":"cc12b633f705","components/core/QtyStepper.jsx":"8e2899c1b9d1","components/core/Skeleton.jsx":"6c2ee2decf19","components/finder/CourtCard.jsx":"239edf379eab","components/navigation/AppHeader.jsx":"cd705807cb15","components/navigation/MenuRow.jsx":"554901114b3d","components/navigation/ScreenHeader.jsx":"61520941ba39","components/navigation/SectionHeader.jsx":"0208a120e5f6","components/navigation/SegmentControl.jsx":"d5f72549a314","components/navigation/TabBar.jsx":"dcd847474d84","components/promo/FeatureCta.jsx":"b071e44524ca","components/promo/ManiaPlusBanner.jsx":"9fc7bbf4039d","components/promo/NoticeBanner.jsx":"d3f9b068653c","components/promo/StatCard.jsx":"471a7401c9ed","components/quiz/QuizOptionCard.jsx":"efd2a94e7f7f","export-buttons.js":"7a0ac884a05d","sablonkeszlet/bright.js":"28d1606f7ec3","sablonkeszlet/export-buttons-standalone.js":"034616312b17","sablonkeszlet/gen.js":"2fd9201241fe","ui_kits/mobile-app/App.jsx":"c8bb81226422","ui_kits/mobile-app/CartScreen.jsx":"59f9d0d3065e","ui_kits/mobile-app/FinderScreen.jsx":"83a31233a00e","ui_kits/mobile-app/HomeScreen.jsx":"3f186d7a4481","ui_kits/mobile-app/ManiaPlusScreen.jsx":"89b6b62df8f7","ui_kits/mobile-app/ProductScreen.jsx":"f0115336064c","ui_kits/mobile-app/ProfileScreen.jsx":"d6338eaf299d","ui_kits/mobile-app/RacketSelector.jsx":"d3e96809c0fa","ui_kits/mobile-app/data.jsx":"f94a83f1a9b1","video-download.js":"c17ea5fa12a9"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PadelMNiaDesignSystem_b97c58 = window.PadelMNiaDesignSystem_b97c58 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/commerce/CartLineItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const fmt = n => typeof n === 'number' ? n.toLocaleString('hu-HU').replace(/,/g, ' ') + ' Ft' : n;

/** Cart line: 90px thumbnail, name/variant/price stack, stepper, line total. */
function CartLineItem({
  name,
  variant,
  image,
  price,
  quantity = 1,
  onQuantityChange,
  onRemove,
  stepper,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      gap: 12,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      padding: 12,
      boxShadow: 'var(--shadow-sm)',
      ...style
    }
  }, rest), image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: 90,
      height: 90,
      borderRadius: 'var(--radius-md)',
      objectFit: 'contain',
      background: 'var(--pm-gray-100)',
      flexShrink: 0
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: 90,
      height: 90,
      borderRadius: 'var(--radius-md)',
      background: 'var(--pm-gray-100)',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: 'var(--type-label)',
      color: 'var(--text-heading)'
    }
  }, name), onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "T\xF6rl\xE9s",
    onClick: onRemove,
    style: {
      background: 'transparent',
      border: 0,
      padding: 4,
      cursor: 'pointer',
      color: 'var(--text-disabled)',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-trash",
    style: {
      fontSize: 16
    }
  }))), variant && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, variant), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-bold) var(--fs-sm)/1.4 var(--font-sans)',
      color: 'var(--text-price)'
    }
  }, fmt(price)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 4
    }
  }, stepper, /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      font: 'var(--type-label)',
      color: 'var(--text-body)'
    }
  }, fmt(typeof price === 'number' ? price * quantity : price)))));
}
Object.assign(__ds_scope, { CartLineItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/CartLineItem.jsx", error: String((e && e.message) || e) }); }

// components/commerce/CategoryCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/** Category tile — 52px thumbnail beside a two-line label, teal-tinted shadow. */
function CategoryCard({
  label,
  image,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      textAlign: 'left',
      background: 'var(--surface-card)',
      border: 0,
      borderRadius: 'var(--radius-card)',
      padding: 10,
      boxShadow: 'var(--shadow-card)',
      cursor: 'pointer',
      opacity: hover ? 0.9 : 1,
      transition: 'opacity var(--dur-fast) var(--ease-standard)',
      ...style
    }
  }, rest), image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: 52,
      height: 52,
      borderRadius: 8,
      objectFit: 'contain',
      background: 'var(--pm-gray-100)',
      flexShrink: 0
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 8,
      background: 'var(--pm-gray-100)',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: 'var(--fw-semibold) 12px/16px var(--font-sans)',
      color: 'var(--text-heading)'
    }
  }, label));
}
Object.assign(__ds_scope, { CategoryCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/CategoryCard.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ManiaPriceBox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const fmt = n => typeof n === 'number' ? n.toLocaleString('hu-HU').replace(/,/g, ' ') + ' Ft' : n;

/**
 * The Mánia+ member-price box on product detail. Sky-tint ground with a
 * sky border for non-members plus a "Csatlakozz" CTA; success-green for
 * active members, where the CTA is replaced by the free-shipping note.
 */
function ManiaPriceBox({
  memberPrice,
  savings,
  isMember = false,
  markSrc,
  onJoin,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: isMember ? 'var(--mania-active-surface)' : 'var(--mania-surface)',
      border: `1px solid ${isMember ? 'var(--mania-active-border)' : 'var(--mania-border)'}`,
      borderRadius: 'var(--radius-md)',
      padding: 12,
      ...style
    }
  }, rest), markSrc && /*#__PURE__*/React.createElement("img", {
    src: markSrc,
    alt: "",
    style: {
      width: 40,
      height: 40,
      borderRadius: 8,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-medium) 11px/1.4 var(--font-sans)',
      color: isMember ? 'var(--mania-active-text)' : 'var(--mania-text)'
    }
  }, isMember ? 'A te Mánia+ árad:' : 'Mánia Plusz ár:'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      marginTop: 1,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-bold) 18px/1.2 var(--font-sans)',
      color: isMember ? 'var(--mania-active-text)' : 'var(--mania-text)'
    }
  }, fmt(memberPrice)), isMember ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-medium) 11px/1.4 var(--font-sans)',
      color: 'var(--mania-active-text)'
    }
  }, "+ingyenes sz\xE1ll\xEDt\xE1s") : savings != null && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-regular) 11px/1.4 var(--font-sans)',
      color: 'var(--pm-warm-gray)'
    }
  }, "sp\xF3rolj ", fmt(savings), "-t"))), !isMember && onJoin && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onJoin,
    style: {
      flexShrink: 0,
      background: 'var(--action-primary)',
      color: 'var(--text-on-action)',
      border: 0,
      borderRadius: 8,
      padding: '8px 12px',
      font: 'var(--fw-semibold) 11px/1.3 var(--font-sans)',
      cursor: 'pointer'
    }
  }, "Csatlakozz"));
}
Object.assign(__ds_scope, { ManiaPriceBox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ManiaPriceBox.jsx", error: String((e && e.message) || e) }); }

// components/commerce/PriceBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const fmt = n => typeof n === 'number' ? n.toLocaleString('hu-HU').replace(/,/g, ' ') + ' Ft' : n;

/**
 * Product-detail price row: current price in teal (coral when discounted),
 * struck-through retail beside it. Sits on a hairline top rule.
 */
function PriceBlock({
  price,
  regularPrice,
  size = 'lg',
  onSale = false,
  rule = true,
  style,
  ...rest
}) {
  const big = size === 'lg';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flexWrap: 'wrap',
      paddingTop: rule ? 12 : 0,
      borderTop: rule ? '1px solid var(--border-subtle)' : 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      font: big ? 'var(--type-price-lg)' : 'var(--type-price)',
      color: onSale ? 'var(--text-price-sale)' : 'var(--text-price)'
    }
  }, fmt(price)), regularPrice != null && /*#__PURE__*/React.createElement("span", {
    style: {
      font: big ? 'var(--type-price)' : 'var(--fw-bold) var(--fs-base)/1.2 var(--font-sans)',
      color: 'var(--text-disabled)',
      textDecoration: 'line-through'
    }
  }, fmt(regularPrice)));
}
Object.assign(__ds_scope, { PriceBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/PriceBlock.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ProductCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Product card from the home rails. Fixed 152px in a horizontal rail;
 * pass `width="100%"` for grid use. 4:3 contained image, sale/demo badges
 * pinned to the image corners, then name → price → Mánia+ line.
 */
function ProductCard({
  name,
  image,
  price,
  regularPrice,
  memberPrice,
  onSale = false,
  demo = false,
  memberMarkSrc,
  width = 152,
  onClick,
  style,
  ...rest
}) {
  const [pressed, setPressed] = useState(false);
  const fmt = n => typeof n === 'number' ? n.toLocaleString('hu-HU').replace(/,/g, ' ') + ' Ft' : n;
  return /*#__PURE__*/React.createElement("article", _extends({
    onClick: onClick,
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    onMouseLeave: () => setPressed(false),
    style: {
      width,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-card-lg)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-card-raised)',
      cursor: onClick ? 'pointer' : 'default',
      opacity: pressed ? 0.88 : 1,
      transform: pressed ? 'scale(var(--press-scale))' : 'none',
      transition: 'opacity var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)',
      flexShrink: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      aspectRatio: '4 / 3',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: '100%',
      height: '100%',
      background: 'var(--pm-gray-100)'
    }
  })), onSale && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 8,
      left: 8,
      background: 'var(--surface-brand)',
      color: 'var(--text-on-brand)',
      borderRadius: 5,
      padding: '3px 7px',
      font: 'var(--fw-bold) 9px/1.3 var(--font-sans)',
      letterSpacing: 'var(--tracking-caps)'
    }
  }, "AKCI\xD3"), demo && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 8,
      left: 8,
      background: 'var(--feedback-success)',
      color: 'var(--pm-white)',
      borderRadius: 4,
      padding: '3px 6px',
      font: 'var(--fw-bold) 9px/1.3 var(--font-sans)'
    }
  }, "Kipr\xF3b\xE1lhat\xF3")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-medium) 12px/17px var(--font-sans)',
      color: '#1A1A1A',
      marginBottom: 6,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, name), onSale && regularPrice ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-bold) var(--fs-base)/1.2 var(--font-sans)',
      color: 'var(--text-price-sale)'
    }
  }, fmt(price)), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-regular) 11px/1.2 var(--font-sans)',
      color: 'var(--text-disabled)',
      textDecoration: 'line-through'
    }
  }, fmt(regularPrice))) : /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-bold) var(--fs-base)/1.2 var(--font-sans)',
      color: 'var(--text-price)'
    }
  }, fmt(price)), memberPrice != null && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      marginTop: 3
    }
  }, memberMarkSrc && /*#__PURE__*/React.createElement("img", {
    src: memberMarkSrc,
    alt: "",
    style: {
      width: 14,
      height: 14,
      borderRadius: 3
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-medium) 11px/1.3 var(--font-sans)',
      color: 'var(--text-brand)'
    }
  }, "M\xE1nia+ \xE1r ", fmt(memberPrice)))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  brand: {
    bg: 'var(--surface-brand)',
    fg: 'var(--text-on-brand)',
    border: 'transparent'
  },
  action: {
    bg: 'var(--action-primary)',
    fg: 'var(--text-on-action)',
    border: 'transparent'
  },
  success: {
    bg: 'var(--feedback-success)',
    fg: 'var(--pm-white)',
    border: 'transparent'
  },
  accent: {
    bg: 'var(--surface-accent)',
    fg: 'var(--text-brand)',
    border: 'transparent'
  },
  outline: {
    bg: 'var(--surface-card)',
    fg: 'var(--text-heading)',
    border: 'var(--border-subtle)'
  },
  open: {
    bg: 'rgba(52,199,89,.15)',
    fg: 'var(--pm-open)',
    border: 'transparent'
  },
  closed: {
    bg: 'rgba(255,59,48,.15)',
    fg: 'var(--pm-closed)',
    border: 'transparent'
  },
  onBrand: {
    bg: 'var(--surface-on-brand-soft-2)',
    fg: 'var(--action-primary)',
    border: 'transparent'
  }
};

/**
 * Small status/label chip. `caps` is the AKCIÓ treatment: 9–10px bold with
 * 0.6px tracking.
 */
function Badge({
  children,
  tone = 'brand',
  caps = false,
  size = 'md',
  iconLeft,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.brand;
  const small = size === 'sm';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 3,
      background: t.bg,
      color: t.fg,
      border: `1px solid ${t.border}`,
      borderRadius: caps ? 5 : 'var(--radius-sm)',
      padding: small ? '2px 5px' : caps ? '3px 8px' : '3px 6px',
      font: `var(--fw-${caps ? 'bold' : 'semibold'}) ${caps ? small ? 9 : 10 : small ? 10 : 11}px/1.35 var(--font-sans)`,
      letterSpacing: caps ? 'var(--tracking-caps)' : 'normal',
      textTransform: caps ? 'uppercase' : 'none',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), iconLeft, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const SIZES = {
  sm: {
    font: 'var(--fs-sm)',
    py: 8,
    px: 14,
    radius: 'var(--radius-md)',
    icon: 14,
    weight: 'var(--fw-semibold)'
  },
  md: {
    font: 'var(--fs-base)',
    py: 12,
    px: 20,
    radius: 'var(--radius-md)',
    icon: 16,
    weight: 'var(--fw-semibold)'
  },
  lg: {
    font: 16,
    py: 14,
    px: 24,
    radius: 'var(--radius-lg)',
    icon: 18,
    weight: 'var(--fw-bold)'
  }
};
function skin(variant) {
  switch (variant) {
    case 'secondary':
      return {
        background: 'var(--action-secondary)',
        color: 'var(--action-secondary-text)',
        border: '0'
      };
    case 'outline':
      return {
        background: 'transparent',
        color: 'var(--action-outline-text)',
        border: 'var(--border-emphasis) solid var(--action-outline-border)'
      };
    case 'ghost':
      return {
        background: 'transparent',
        color: 'var(--text-action)',
        border: '0'
      };
    case 'danger':
      return {
        background: 'var(--feedback-error-bg)',
        color: 'var(--feedback-error)',
        border: '0'
      };
    case 'primary':
    default:
      return {
        background: 'var(--action-primary)',
        color: 'var(--action-primary-text)',
        border: '0'
      };
  }
}

/**
 * The Padel Mánia button. Coral is the commit action, teal the secondary,
 * outlined teal the low-commitment alternative.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  pill = false,
  fullWidth = false,
  disabled = false,
  iconLeft,
  iconRight,
  onClick,
  type = 'button',
  style,
  ...rest
}) {
  const [pressed, setPressed] = useState(false);
  const [hover, setHover] = useState(false);
  const s = SIZES[size] || SIZES.md;
  const sk = skin(variant);
  const isSolid = variant === 'primary' || variant === 'secondary';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPressed(false);
    },
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      width: fullWidth ? '100%' : undefined,
      minHeight: size === 'sm' ? 36 : 'var(--tap-min)',
      padding: `${s.py}px ${s.px}px`,
      borderRadius: pill ? 'var(--radius-full)' : s.radius,
      font: `${s.weight} ${typeof s.font === 'number' ? s.font + 'px' : s.font}/var(--lh-label) var(--font-sans)`,
      letterSpacing: pill ? 'var(--tracking-caps)' : size === 'lg' ? '0.3px' : 'normal',
      background: sk.background,
      color: sk.color,
      border: sk.border,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.6 : pressed ? 'var(--press-opacity)' : 1,
      transform: pressed && !disabled ? 'scale(var(--press-scale))' : 'none',
      filter: hover && !disabled && !pressed && isSolid ? 'brightness(0.96)' : 'none',
      backgroundColor: hover && !disabled && !isSolid && variant !== 'danger' ? 'var(--surface-sunken)' : undefined,
      transition: 'opacity var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard), filter var(--dur-fast) var(--ease-standard), background-color var(--dur-fast) var(--ease-standard)',
      textAlign: 'center',
      WebkitTapHighlightColor: 'transparent',
      ...style
    }
  }, rest), iconLeft, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block'
    }
  }, children), iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Filter / sort pill. Two skins: `chip` (cream fill, static label — the
 * result profile chips) and `toggle` (hairline outline, teal fill when
 * selected — the Court Finder sort row).
 */
function Chip({
  children,
  kind = 'toggle',
  selected = false,
  iconLeft,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const isStatic = kind === 'chip';
  const interactive = !isStatic && typeof onClick === 'function';
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    borderRadius: 'var(--radius-full)',
    padding: isStatic ? '6px 12px' : '8px 12px',
    font: `var(--fw-semibold) var(--fs-sm)/var(--lh-label) var(--font-sans)`,
    whiteSpace: 'nowrap',
    cursor: interactive ? 'pointer' : 'default',
    transition: 'background-color var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)'
  };
  const skin = isStatic ? {
    background: 'var(--surface-sunken)',
    color: 'var(--text-brand)',
    border: '1px solid transparent',
    font: `var(--fw-semibold) 12px/var(--lh-label) var(--font-sans)`
  } : selected ? {
    background: 'var(--surface-brand)',
    color: 'var(--text-on-brand)',
    border: '1px solid var(--surface-brand)'
  } : {
    background: hover ? 'var(--surface-sunken)' : 'transparent',
    color: 'var(--text-label)',
    border: '1px solid var(--border-subtle)',
    fontWeight: 'var(--fw-medium)'
  };
  const Tag = interactive ? 'button' : 'span';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    type: interactive ? 'button' : undefined,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    "aria-pressed": interactive ? selected : undefined,
    style: {
      ...base,
      ...skin,
      ...style
    }
  }, rest), iconLeft, children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const WEIGHTS = {
  thin: 'ph-thin',
  light: 'ph-light',
  regular: 'ph',
  bold: 'ph-bold',
  fill: 'ph-fill',
  duotone: 'ph-duotone'
};

/**
 * Phosphor glyph wrapper. Padel Mánia uses Phosphor Icons and nothing else —
 * no emoji, no Unicode symbols, no second icon family.
 */
function Icon({
  name,
  size = 20,
  weight = 'regular',
  color = 'currentColor',
  title,
  style,
  className = '',
  ...rest
}) {
  const base = WEIGHTS[weight] || WEIGHTS.regular;
  return /*#__PURE__*/React.createElement("i", _extends({
    className: `${base} ph-${name} ${className}`.trim(),
    "aria-hidden": title ? undefined : true,
    "aria-label": title,
    style: {
      fontSize: size,
      width: size,
      height: size,
      lineHeight: 1,
      color,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Form field. 1.5px hairline border on a cream-100 fill; teal border on
 * focus. `onDark` is the translucent variant that sits on the teal header.
 */
function Input({
  label,
  hint,
  error,
  value,
  onChange,
  placeholder,
  type = 'text',
  iconLeft,
  iconRight,
  onDark = false,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  const fieldId = id || (label ? `f-${String(label).replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const shellStyle = onDark ? {
    background: 'var(--surface-on-brand-soft)',
    border: '1px solid rgba(255,255,255,.12)',
    borderRadius: 'var(--radius-md)',
    padding: '9px 12px'
  } : {
    background: 'var(--pm-gray-100)',
    border: `var(--border-emphasis) solid ${error ? 'var(--feedback-error)' : focus ? 'var(--border-brand)' : 'var(--border-subtle)'}`,
    borderRadius: 'var(--radius-md)',
    padding: '12px 16px'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-body)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      transition: 'border-color var(--dur-fast) var(--ease-standard)',
      opacity: disabled ? 0.6 : 1,
      ...shellStyle
    }
  }, iconLeft, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      background: 'transparent',
      border: 0,
      outline: 'none',
      font: onDark ? 'var(--fw-regular) 14px/1.4 var(--font-sans)' : 'var(--fw-regular) 16px/1.4 var(--font-sans)',
      color: onDark ? 'var(--text-on-brand)' : 'var(--text-primary)'
    }
  }, rest)), iconRight), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: error ? 'var(--feedback-error)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** 4px rail, coral fill. Sits directly under the quiz header, edge to edge. */
function ProgressBar({
  value = 0,
  total = 1,
  style,
  ...rest
}) {
  const pct = Math.max(0, Math.min(1, total ? value / total : 0)) * 100;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "progressbar",
    "aria-valuenow": value,
    "aria-valuemin": 0,
    "aria-valuemax": total,
    style: {
      height: 4,
      background: 'var(--border-strong)',
      overflow: 'hidden',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: `${pct}%`,
      background: 'var(--action-primary)',
      transition: 'width var(--dur-base) var(--ease-standard)'
    }
  }));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/core/QtyStepper.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** −/count/+ stepper from the cart line item. */
function QtyStepper({
  value = 1,
  min = 1,
  max = 99,
  onChange,
  style,
  ...rest
}) {
  const btn = {
    width: 34,
    height: 34,
    borderRadius: 'var(--radius-sm)',
    background: 'var(--pm-gray-100)',
    border: 0,
    color: 'var(--text-primary)',
    fontSize: 18,
    lineHeight: '20px',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Kevesebb",
    style: {
      ...btn,
      opacity: value <= min ? 0.4 : 1
    },
    disabled: value <= min,
    onClick: () => onChange && onChange(value - 1)
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-primary)',
      minWidth: 20,
      textAlign: 'center'
    }
  }, value), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "T\xF6bb",
    style: {
      ...btn,
      opacity: value >= max ? 0.4 : 1
    },
    disabled: value >= max,
    onClick: () => onChange && onChange(value + 1)
  }, "+"));
}
Object.assign(__ds_scope, { QtyStepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/QtyStepper.jsx", error: String((e && e.message) || e) }); }

// components/core/Skeleton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Loading placeholder — cream block with a slow shimmer. */
function Skeleton({
  width = '100%',
  height = 16,
  radius = 'var(--radius-sm)',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    "aria-hidden": "true",
    style: {
      width,
      height,
      borderRadius: radius,
      background: 'linear-gradient(90deg, var(--pm-border) 0%, var(--pm-gray-200) 50%, var(--pm-border) 100%)',
      backgroundSize: '200% 100%',
      animation: 'pmSkeleton 1.4s var(--ease-standard) infinite',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("style", null, '@keyframes pmSkeleton{0%{background-position:150% 0}100%{background-position:-50% 0}}'));
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/finder/CourtCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const fmtDistance = km => km == null ? null : km < 1 ? `${Math.round(km * 1000)} m` : `${km.toFixed(1).replace('.', ',')} km`;

/**
 * Court Finder accordion card. Collapsed: name, open/closed badge, distance,
 * rating, favourite heart, address. Expanded: hairline rule + three action
 * buttons (two coral, one teal).
 */
function CourtCard({
  name,
  address,
  isOpen,
  distanceKm,
  rating,
  reviewCount,
  favorite = false,
  expanded = false,
  onToggle,
  onFavorite,
  onNavigate,
  onCall,
  onDetail,
  style,
  ...rest
}) {
  const [pressed, setPressed] = useState(false);
  const dist = fmtDistance(distanceKm);
  const action = (icon, label, bg, handler) => /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: e => {
      e.stopPropagation();
      handler && handler();
    },
    style: {
      flex: 1,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 4,
      padding: '12px 8px',
      borderRadius: 'var(--radius-md)',
      border: 0,
      background: bg,
      color: 'var(--pm-white)',
      font: 'var(--fw-bold) var(--fs-sm)/1.3 var(--font-sans)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: `ph-bold ph-${icon}`,
    style: {
      fontSize: 18
    }
  }), label);
  return /*#__PURE__*/React.createElement("article", _extends({
    onClick: onToggle,
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    onMouseLeave: () => setPressed(false),
    style: {
      background: expanded ? 'var(--surface-sunken)' : favorite ? 'rgba(255,59,92,.05)' : 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      border: `var(--border-emphasis) solid ${expanded ? 'var(--action-primary)' : favorite ? 'rgba(255,59,92,.3)' : 'transparent'}`,
      padding: 12,
      boxShadow: 'var(--shadow-sm)',
      cursor: onToggle ? 'pointer' : 'default',
      transform: pressed ? 'scale(0.99)' : 'none',
      transition: 'background-color var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 8,
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-semibold) var(--fs-base)/20px var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 6
    }
  }, isOpen != null && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '3px 6px',
      borderRadius: 4,
      background: isOpen ? 'rgba(52,199,89,.15)' : 'rgba(255,59,48,.15)',
      color: isOpen ? 'var(--pm-open)' : 'var(--pm-closed)',
      font: 'var(--fw-semibold) 11px/1.3 var(--font-sans)'
    }
  }, isOpen ? 'Nyitva' : 'Zárva'), dist && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      font: 'var(--fw-semibold) 12px/1.3 var(--font-sans)',
      color: 'var(--text-brand)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-bold ph-navigation-arrow",
    style: {
      fontSize: 12
    }
  }), dist))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flexShrink: 0
    }
  }, rating != null && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 3,
      background: 'rgba(0,0,0,.04)',
      padding: '4px 8px',
      borderRadius: 'var(--radius-sm)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-fill ph-star",
    style: {
      fontSize: 14,
      color: 'var(--action-primary)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-bold) var(--fs-sm)/1.3 var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, rating.toFixed(1).replace('.', ',')), reviewCount != null && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-regular) 11px/1.3 var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, "(", reviewCount, ")")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Kedvenc",
    onClick: e => {
      e.stopPropagation();
      onFavorite && onFavorite();
    },
    style: {
      background: 'transparent',
      border: 0,
      padding: 4,
      cursor: 'pointer',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: favorite ? 'ph-fill ph-heart' : 'ph ph-heart',
    style: {
      fontSize: 18,
      color: favorite ? 'var(--pm-favorite)' : 'var(--text-disabled)'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-map-pin",
    style: {
      fontSize: 14,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: 'var(--type-body-sm)',
      color: 'var(--text-label)',
      lineHeight: '18px'
    }
  }, address)), /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden',
      height: expanded ? 120 : 0,
      opacity: expanded ? 1 : 0,
      transition: 'height var(--dur-base) var(--ease-standard), opacity var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-subtle)',
      margin: '8px 0 12px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, action('navigation-arrow', 'Navigáció', 'var(--action-primary)', onNavigate), action('phone', 'Hívás', 'var(--action-primary)', onCall), action('caret-right', 'Részletek', 'var(--action-secondary)', onDetail))));
}
Object.assign(__ds_scope, { CourtCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/finder/CourtCard.jsx", error: String((e && e.message) || e) }); }

// components/navigation/AppHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Teal app header: logo (or title) on the left, icon actions on the right,
 * optional search row underneath. Full-bleed teal, no shadow — the colour
 * change is the separation.
 */
function AppHeader({
  logoSrc,
  title,
  actions,
  search,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      background: 'var(--surface-brand)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px var(--gutter) 10px'
    }
  }, logoSrc ? /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Padel M\xE1nia",
    style: {
      width: 150,
      height: 40,
      objectFit: 'contain',
      objectPosition: 'left center'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-bold) 18px/1.2 var(--font-sans)',
      color: 'var(--text-on-brand)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, actions)), search && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--gutter) var(--gutter)'
    }
  }, search), children);
}

/** Icon action inside the teal header, with optional coral count badge. */
function HeaderAction({
  children,
  count,
  onClick,
  label,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    onClick: onClick,
    style: {
      position: 'relative',
      padding: 8,
      background: 'transparent',
      border: 0,
      cursor: 'pointer',
      display: 'inline-flex',
      color: 'var(--text-on-brand)',
      ...style
    }
  }, rest), children, count > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 4,
      right: 4,
      background: 'var(--action-primary)',
      color: 'var(--text-on-action)',
      borderRadius: 9,
      minWidth: 16,
      height: 16,
      padding: '0 3px',
      font: 'var(--fw-bold) 9px/16px var(--font-sans)',
      textAlign: 'center'
    }
  }, count > 99 ? '99+' : count));
}
Object.assign(__ds_scope, { AppHeader, HeaderAction });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/AppHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/MenuRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/** One row inside a MenuSection card. */
function MenuRow({
  icon,
  iconImage,
  label,
  hint,
  highlight = false,
  disabled = false,
  last = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      width: '100%',
      padding: 'var(--gutter)',
      background: hover && !disabled ? 'var(--surface-sunken)' : 'transparent',
      border: 0,
      borderBottom: last ? 'none' : '1px solid var(--border-subtle)',
      textAlign: 'left',
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 0.7 : 1,
      transition: 'background-color var(--dur-fast) var(--ease-standard)',
      ...style
    }
  }, rest), iconImage ? /*#__PURE__*/React.createElement("img", {
    src: iconImage,
    alt: "",
    style: {
      width: 36,
      height: 36,
      borderRadius: 10,
      objectFit: 'contain',
      flexShrink: 0
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 10,
      background: disabled ? 'var(--pm-gray-100)' : highlight ? 'var(--pm-coral-tint-2)' : 'var(--surface-sunken)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      color: highlight ? 'var(--text-action)' : 'var(--text-brand)'
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: 'var(--type-body)',
      color: disabled ? 'var(--text-muted)' : 'var(--text-primary)'
    }
  }, label), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-medium) 12px/1.4 var(--font-sans)',
      color: highlight ? 'var(--text-action)' : 'var(--text-muted)',
      marginRight: 4
    }
  }, hint), /*#__PURE__*/React.createElement("i", {
    className: "ph-bold ph-caret-right",
    style: {
      fontSize: 16,
      color: 'var(--text-disabled)'
    }
  }));
}

/** Uppercase caption + white rounded card wrapping a stack of MenuRows. */
function MenuSection({
  title,
  children,
  style,
  ...rest
}) {
  const rows = React.Children.toArray(children);
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, rest), title && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-semibold) 12px/1.4 var(--font-sans)',
      color: 'var(--text-label)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-caps)',
      padding: '0 8px'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-sm)'
    }
  }, rows.map((child, i) => React.isValidElement(child) ? React.cloneElement(child, {
    last: i === rows.length - 1
  }) : child)));
}
Object.assign(__ds_scope, { MenuRow, MenuSection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/MenuRow.jsx", error: String((e && e.message) || e) }); }

// components/navigation/ScreenHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Light 56px screen header used by the quiz, results and modal stacks:
 * back on the left, a step counter or title in the middle, close on the right.
 */
function ScreenHeader({
  title,
  onBack,
  onClose,
  right,
  style,
  ...rest
}) {
  const btn = {
    width: 32,
    height: 32,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'transparent',
    border: 0,
    cursor: 'pointer',
    color: 'var(--text-primary)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 'var(--header-h)',
      padding: '0 var(--gutter-wide)',
      background: 'var(--surface-page)',
      ...style
    }
  }, rest), onBack ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Vissza",
    onClick: onBack,
    style: btn
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-arrow-left",
    style: {
      fontSize: 22
    }
  })) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: title && /^\d/.test(String(title)) ? 'var(--fw-semibold) var(--fs-sm)/1.3 var(--font-sans)' : 'var(--type-screen-title)',
      color: title && /^\d/.test(String(title)) ? 'var(--text-muted)' : 'var(--text-primary)',
      letterSpacing: title && /^\d/.test(String(title)) ? '0.5px' : 'normal'
    }
  }, title), right || (onClose ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Bez\xE1r\xE1s",
    onClick: onClose,
    style: btn
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-x",
    style: {
      fontSize: 22
    }
  })) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32
    }
  })));
}
Object.assign(__ds_scope, { ScreenHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/ScreenHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SectionHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** List section header: title, optional caps badge, optional "Összes ›" link. */
function SectionHeader({
  title,
  badge,
  onSeeAll,
  seeAllLabel = 'Összes',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: '0 var(--gutter) 12px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: 'var(--fw-semibold) var(--fs-md)/var(--lh-heading) var(--font-sans)',
      color: 'var(--text-primary)',
      letterSpacing: 'var(--tracking-title)'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginLeft: 12,
      flexShrink: 0
    }
  }, badge && /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--surface-brand)',
      color: 'var(--text-on-brand)',
      borderRadius: 5,
      padding: '3px 8px',
      font: 'var(--fw-bold) 10px/1.35 var(--font-sans)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase'
    }
  }, badge), onSeeAll && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onSeeAll,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 2,
      background: 'transparent',
      border: 0,
      padding: 0,
      cursor: 'pointer',
      font: 'var(--fw-medium) var(--fs-sm)/var(--lh-label) var(--font-sans)',
      color: 'var(--text-action)'
    }
  }, seeAllLabel, /*#__PURE__*/React.createElement("i", {
    className: "ph-bold ph-caret-right",
    style: {
      fontSize: 13
    }
  }))));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SegmentControl.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Segment switcher that lives inside the teal header (Pályák / Edzők /
 * Meccsek). Inactive = 30% white outline, active = solid white with teal ink.
 */
function SegmentControl({
  items = [],
  activeId,
  onSelect,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      gap: 8,
      padding: '0 var(--gutter) 12px',
      ...style
    }
  }, rest), items.map(it => {
    const active = it.id === activeId;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      type: "button",
      "aria-pressed": active,
      onClick: () => onSelect && onSelect(it.id),
      style: {
        flex: 1,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
        padding: '8px 4px',
        borderRadius: 'var(--radius-md)',
        border: `1px solid ${active ? 'var(--pm-white)' : 'var(--border-on-brand)'}`,
        background: active ? 'var(--pm-white)' : 'transparent',
        color: active ? 'var(--text-brand)' : 'var(--text-on-brand-muted)',
        font: 'var(--fw-semibold) var(--fs-sm)/var(--lh-label) var(--font-sans)',
        cursor: 'pointer',
        transition: 'background-color var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)'
      }
    }, it.icon && /*#__PURE__*/React.createElement("i", {
      className: `ph-bold ph-${it.icon}`,
      style: {
        fontSize: 14
      }
    }), it.label);
  }));
}
Object.assign(__ds_scope, { SegmentControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SegmentControl.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TabBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Bottom tab bar. Translucent white chrome; the active tab is a coral
 * capsule wrapping icon + label.
 */
function TabBar({
  items = [],
  activeId,
  onSelect,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      position: 'relative',
      paddingTop: 8,
      paddingBottom: 6,
      background: 'var(--scrim-chrome)',
      backdropFilter: 'var(--blur-chrome)',
      WebkitBackdropFilter: 'var(--blur-chrome)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 1,
      background: 'rgba(0,0,0,.12)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, items.map(it => {
    const active = it.id === activeId;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      type: "button",
      "aria-current": active ? 'page' : undefined,
      onClick: () => onSelect && onSelect(it.id),
      style: {
        flex: 1,
        background: 'transparent',
        border: 0,
        padding: '2px',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        padding: '6px',
        borderRadius: 'var(--radius-full)',
        background: active ? 'var(--action-primary)' : 'transparent',
        transition: 'background-color var(--dur-fast) var(--ease-standard)'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: `${active ? 'ph-fill' : 'ph'} ph-${it.icon}`,
      style: {
        fontSize: 22,
        color: active ? 'var(--text-on-action)' : 'var(--pm-gray-700)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: `var(--fw-${active ? 'semibold' : 'medium'}) 11px/1.2 var(--font-sans)`,
        color: active ? 'var(--text-on-action)' : 'var(--pm-gray-700)',
        textAlign: 'center',
        whiteSpace: 'nowrap'
      }
    }, it.label)));
  })));
}
Object.assign(__ds_scope, { TabBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TabBar.jsx", error: String((e && e.message) || e) }); }

// components/promo/FeatureCta.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Full-width teal CTA card: translucent icon tile, title + sky subtitle,
 * coral arrow. Used for the Ütőválasztó entry point on the home feed.
 */
function FeatureCta({
  title,
  subtitle,
  icon,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      background: 'var(--surface-brand)',
      borderRadius: 'var(--radius-card-lg)',
      padding: 'var(--gutter)',
      cursor: onClick ? 'pointer' : 'default',
      opacity: hover && onClick ? 0.9 : 1,
      transition: 'opacity var(--dur-fast) var(--ease-standard)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-card-lg)',
      background: 'rgba(255,255,255,.08)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      color: 'var(--action-primary)'
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-bold) var(--fs-base)/1.35 var(--font-sans)',
      color: 'var(--text-on-brand)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-regular) 12px/1.45 var(--font-sans)',
      color: 'var(--text-on-brand-soft)'
    }
  }, subtitle)), /*#__PURE__*/React.createElement("i", {
    className: "ph-bold ph-arrow-right",
    style: {
      fontSize: 20,
      color: 'var(--action-primary)',
      flexShrink: 0
    }
  }));
}
Object.assign(__ds_scope, { FeatureCta });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/promo/FeatureCta.jsx", error: String((e && e.message) || e) }); }

// components/promo/ManiaPlusBanner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Dark-teal membership banner from the home screen: app icon, two-line copy,
 * coral capsule CTA.
 */
function ManiaPlusBanner({
  title,
  subtitle,
  ctaLabel = 'Csatlakozz',
  markSrc,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: 'var(--surface-brand-deep)',
      borderRadius: 'var(--radius-md)',
      padding: '10px 14px',
      cursor: onClick ? 'pointer' : 'default',
      opacity: hover && onClick ? 0.9 : 1,
      transition: 'opacity var(--dur-fast) var(--ease-standard)',
      ...style
    }
  }, rest), markSrc && /*#__PURE__*/React.createElement("img", {
    src: markSrc,
    alt: "",
    style: {
      width: 32,
      height: 32,
      borderRadius: 8,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-bold) var(--fs-sm)/1.35 var(--font-sans)',
      color: 'var(--text-on-brand)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-semibold) 11px/1.4 var(--font-sans)',
      color: 'var(--text-on-brand-soft)'
    }
  }, subtitle)), /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      background: 'var(--action-primary)',
      color: 'var(--text-on-action)',
      borderRadius: 20,
      padding: '7px 14px',
      font: 'var(--fw-bold) 10px/1.3 var(--font-sans)',
      letterSpacing: 'var(--tracking-caps)'
    }
  }, ctaLabel, /*#__PURE__*/React.createElement("i", {
    className: "ph-bold ph-arrow-right",
    style: {
      fontSize: 11
    }
  })));
}
Object.assign(__ds_scope, { ManiaPlusBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/promo/ManiaPlusBanner.jsx", error: String((e && e.message) || e) }); }

// components/promo/NoticeBanner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Sky-tint permission / info banner with accept + dismiss actions. */
function NoticeBanner({
  icon,
  children,
  onAccept,
  onDeny,
  acceptLabel = 'Engedélyezem',
  denyLabel = 'Most nem',
  onClose,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      background: 'var(--surface-accent)',
      border: '1px solid var(--border-accent)',
      borderRadius: 'var(--radius-card-lg)',
      padding: 12,
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 12,
      background: 'var(--pm-white)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      color: 'var(--text-action)'
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-medium) var(--fs-sm)/18px var(--font-sans)',
      color: 'var(--text-heading)'
    }
  }, children), (onAccept || onDeny) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, onAccept && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onAccept,
    style: {
      background: 'var(--action-primary)',
      color: 'var(--text-on-action)',
      border: 0,
      borderRadius: 8,
      padding: '8px 14px',
      font: 'var(--fw-semibold) 12px/1.3 var(--font-sans)',
      cursor: 'pointer'
    }
  }, acceptLabel), onDeny && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onDeny,
    style: {
      background: 'transparent',
      color: 'var(--text-brand)',
      border: '1px solid var(--border-brand)',
      borderRadius: 8,
      padding: '8px 14px',
      font: 'var(--fw-semibold) 12px/1.3 var(--font-sans)',
      cursor: 'pointer'
    }
  }, denyLabel))), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Bez\xE1r\xE1s",
    onClick: onClose,
    style: {
      background: 'transparent',
      border: 0,
      padding: 4,
      margin: '-4px -4px 0 0',
      cursor: 'pointer',
      color: 'var(--text-muted)',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-bold ph-x",
    style: {
      fontSize: 16
    }
  })));
}
Object.assign(__ds_scope, { NoticeBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/promo/NoticeBanner.jsx", error: String((e && e.message) || e) }); }

// components/promo/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Cream stat tile — big teal figure over a warm-gray caption. */
function StatCard({
  value,
  label,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      flex: 1,
      background: 'var(--surface-sunken)',
      borderRadius: 'var(--radius-card-lg)',
      padding: '12px 8px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 4,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-bold) var(--fs-lg)/24px var(--font-sans)',
      color: 'var(--text-brand)'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-medium) 11px/1.3 var(--font-sans)',
      color: 'var(--pm-warm-gray)'
    }
  }, label));
}

/** Icon-disc row: coral glyph in a tinted circle, teal title, gray sub. */
function BenefitRow({
  icon,
  title,
  subtitle,
  tone = 'coral',
  divider = false,
  style,
  ...rest
}) {
  const disc = tone === 'cream' ? 'var(--surface-sunken)' : 'var(--pm-coral-tint)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      paddingBottom: divider ? 12 : 0,
      marginBottom: divider ? 12 : 0,
      borderBottom: divider ? '1px solid var(--border-subtle)' : 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: tone === 'cream' ? 40 : 36,
      height: tone === 'cream' ? 40 : 36,
      borderRadius: tone === 'cream' ? 'var(--radius-md)' : 'var(--radius-full)',
      background: disc,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      color: 'var(--text-action)'
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-semibold) var(--fs-sm)/17px var(--font-sans)',
      color: 'var(--text-brand)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-regular) 12px/16px var(--font-sans)',
      color: 'var(--pm-warm-gray)'
    }
  }, subtitle)));
}
Object.assign(__ds_scope, { StatCard, BenefitRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/promo/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/quiz/QuizOptionCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const LEVEL_BG = ['var(--pm-sky-tint)', 'var(--pm-sky)', 'var(--pm-teal)', 'var(--pm-coral-light)', 'var(--pm-coral)'];
const LEVEL_FG = ['var(--pm-teal)', 'var(--pm-white)', 'var(--pm-white)', 'var(--pm-white)', 'var(--pm-white)'];

/**
 * Answer card for the Ütőválasztó quiz. Four leading treatments —
 * `level` (numbered disc + level badge), `image` (80px racket shot),
 * `icon` (44px cream tile) and `budget` (105px price column).
 */
function QuizOptionCard({
  variant = 'icon',
  index = 0,
  label,
  description,
  details,
  levelBadge,
  icon,
  image,
  priceLabel,
  onSelect,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  let lead = null;
  if (variant === 'level') {
    lead = /*#__PURE__*/React.createElement("span", {
      style: {
        width: 44,
        height: 44,
        borderRadius: 22,
        background: LEVEL_BG[index] || LEVEL_BG[0],
        color: LEVEL_FG[index] || LEVEL_FG[0],
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        font: 'var(--fw-bold) 18px/1 var(--font-sans)',
        flexShrink: 0
      }
    }, index + 1);
  } else if (variant === 'image') {
    lead = /*#__PURE__*/React.createElement("img", {
      src: image,
      alt: "",
      style: {
        width: 80,
        height: 80,
        objectFit: 'contain',
        flexShrink: 0
      }
    });
  } else if (variant === 'budget') {
    lead = /*#__PURE__*/React.createElement("span", {
      style: {
        width: 105,
        flexShrink: 0,
        font: 'var(--fw-bold) var(--fs-base)/19px var(--font-sans)',
        color: 'var(--text-brand)'
      }
    }, priceLabel);
  } else {
    lead = /*#__PURE__*/React.createElement("span", {
      style: {
        width: 44,
        height: 44,
        borderRadius: 12,
        background: 'var(--surface-sunken)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        color: 'var(--text-brand)'
      }
    }, icon);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onSelect,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      width: '100%',
      textAlign: 'left',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-quiz)',
      border: `var(--border-emphasis) solid ${hover ? 'var(--action-primary)' : 'var(--border-strong)'}`,
      padding: 'var(--gutter)',
      cursor: 'pointer',
      transition: 'border-color var(--dur-fast) var(--ease-standard)',
      ...style
    }
  }, rest), lead, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-semibold) var(--fs-md)/1.3 var(--font-sans)',
      color: 'var(--text-brand)'
    }
  }, label), levelBadge && /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--surface-accent)',
      color: 'var(--text-brand)',
      borderRadius: 8,
      padding: '3px 8px',
      font: 'var(--fw-semibold) 11px/1.3 var(--font-sans)',
      flexShrink: 0
    }
  }, levelBadge)), description && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-regular) var(--fs-sm)/18px var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, description), details && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-medium) 11px/1.4 var(--font-sans)',
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, details)));
}
Object.assign(__ds_scope, { QuizOptionCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/quiz/QuizOptionCard.jsx", error: String((e && e.message) || e) }); }

// export-buttons.js
try { (() => {
/* PNG-letöltő gomb minden .ad artboard alá. A böngészőben rendereli a
   kreatívot, így előre exportált fájl nélkül is működik — bármelyik
   verzió-fájlban. */
(function () {
  var LIB = 'https://unpkg.com/html-to-image@1.11.13/dist/html-to-image.js';
  function css() {
    if (document.getElementById('pm-dl-css')) return;
    var s = document.createElement('style');
    s.id = 'pm-dl-css';
    s.textContent = '.pm-dl{display:inline-flex;align-items:center;gap:7px;align-self:flex-start;background:var(--action-primary,#FF6B4A);color:#fff;border:0;cursor:pointer;font:600 14px/1 var(--font-sans,Inter,sans-serif);border-radius:var(--radius-md,10px);padding:11px 16px;margin-top:4px}.pm-dl:hover{filter:brightness(.96)}.pm-dl:disabled{opacity:.6;cursor:default}';
    document.head.appendChild(s);
  }
  function label(ad, i) {
    if (!ad.id) return 'kreativ-' + (i + 1);
    if (/^ad-/.test(ad.id)) return ad.id.replace(/^ad-/, 'labda-990-').replace(/-dl$/, '-keszlet');
    return 'padelmania-' + ad.id;
  }
  function init() {
    css();
    var ads = document.querySelectorAll('.ad');
    Array.prototype.forEach.call(ads, function (ad, i) {
      if (ad.parentElement.querySelector('.pm-dl')) return;
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'pm-dl';
      b.textContent = 'PNG letöltése';
      b.addEventListener('click', function () {
        b.disabled = true;
        b.textContent = 'Készül…';
        window.htmlToImage.toPng(ad, {
          width: ad.offsetWidth,
          height: ad.offsetHeight,
          pixelRatio: 1,
          cacheBust: true
        }).then(function (url) {
          var l = document.createElement('a');
          l.href = url;
          l.download = label(ad, i) + '.png';
          document.body.appendChild(l);
          l.click();
          l.remove();
        }).catch(function (e) {
          alert('A letöltés nem sikerült: ' + (e && e.message ? e.message : e));
        }).then(function () {
          b.disabled = false;
          b.textContent = 'PNG letöltése';
        });
      });
      ad.parentElement.appendChild(b);
    });
  }
  function load() {
    if (window.htmlToImage) return init();
    var s = document.createElement('script');
    s.src = LIB;
    s.onload = init;
    s.onerror = function () {
      console.error('export-buttons.js: html-to-image nem töltődött be');
    };
    document.head.appendChild(s);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', load);else load();
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "export-buttons.js", error: String((e && e.message) || e) }); }

// sablonkeszlet/bright.js
try { (() => {
/* ── bright board: coral panel with a tilted lower edge on white, centred type, the cut-out product hanging over the edge.
   Loaded after gen.js; registers itself as a variant. Landscape: coral left column, product right. */
function brightBoard(g, p, {
  eyebrow,
  kicker,
  title,
  big,
  bigOld,
  unit,
  unitAbove,
  panelFirst,
  panelLabel,
  panelValue,
  foot,
  cut,
  cut2
}) {
  const w = g.w,
    h = g.h,
    land = g.land,
    cx = land ? g.pad + Math.round(w * .27) : w / 2;
  const panelW = land ? Math.round(w * .56) : w,
    panelH = land ? h : Math.round(h * (g.id === 's916' ? .62 : .7)),
    tilt = land ? 0 : Math.round(w * .035);
  const colW = land ? panelW - 2 * g.pad : w - 2 * g.pad,
    sq = g.id === 's11' ? .8 : 1;
  const T2 = (slot, text, fs, color, o = {}) => {
    const wd = Math.min(colW, Math.ceil(tw(text, fs, {
        w: o.w || 800,
        ls: o.ls || 0,
        up: o.up
      })) + 8),
      hh = Math.ceil(fs * (o.lh || 1));
    return {
      slot,
      h: hh,
      w: wd,
      fs,
      html: (x, y) => box(slot, x - wd / 2, y, wd, hh, `font:${o.w || 800} ${fs}px/${o.lh || 1} var(--font-sans);color:${color};letter-spacing:${o.ls || 0}em;${o.up ? 'text-transform:uppercase;' : ''}white-space:nowrap;text-align:center`, text)
    };
  };
  const eyeFs = g.minFs,
    titleFs = fit(title, Math.round((land ? 72 : 150 * sq) * g.k), colW, {
      w: 800,
      ls: .02,
      up: true
    }, g.minFs),
    unitW = unit ? tw(strip(unit), Math.round(g.minFs * 1.1), {
      w: 600
    }) + g.minFs : 0,
    bigFs = panelFirst ? titleFs : fit(big, Math.round((land ? 112 : 250 * sq) * g.k), colW * .86 - unitW, {
      w: 800,
      ls: -.03
    }, 60);
  const items = [];
  const stamp = panelFirst && eyebrow ? eyebrow : null;
  if (eyebrow && !stamp) items.push(T2('deadline', eyebrow, eyeFs, C.deep, {
    ls: .12,
    up: true,
    w: 700
  }));
  if (kicker) items.push(T2('kicker', kicker, Math.round(titleFs * .55), C.deep, {
    ls: .06,
    up: true,
    lh: 1
  }));
  items.push(T2('headline', title, titleFs, C.white, {
    ls: .02,
    up: true,
    lh: 1.02
  }));
  if (bigOld && !unit) unit = '<s>' + bigOld + '</s>';
  const unitFs = Math.max(g.minFs, Math.round(bigFs * .18)),
    bigItem = T2('price', big, bigFs, C.cream, {
      ls: -.03,
      lh: .9
    });
  items.push({
    ...bigItem,
    html: (x, y) => bigItem.html(x, y) + (unit ? box('price-unit', x + bigItem.w / 2 + 8, y + Math.round(bigFs * .52), Math.ceil(tw(unit, unitFs, {
      w: 600
    })) + 6, Math.ceil(unitFs * 1.2), `font:600 ${unitFs}px/1.2 var(--font-sans);color:${C.deep};white-space:nowrap`, unit) : '')
  });
  const plFs = Math.round(g.minFs * .95 * sq),
    pvFs = Math.round(g.minFs * 1.15 * sq),
    plW = Math.round(Math.max(tw(panelLabel, plFs, {
      w: 800,
      ls: .06,
      up: true
    }), tw(panelValue, pvFs, {
      w: 800
    })) + plFs * 2.6),
    plH = Math.round(plFs + pvFs + plFs * 1.6);
  const panelItem = {
    slot: 'code',
    h: plH,
    w: plW,
    html: (x, y) => box('code', x - plW / 2, y, plW, plH, `background:${C.deep};border-radius:${Math.round(plH * .3)}px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(plFs * .25)}px`, `<span style="font:800 ${plFs}px/1 var(--font-sans);color:${C.coral};letter-spacing:.06em;text-transform:uppercase">${panelLabel}</span><span style="font:800 ${pvFs}px/1 var(--font-sans);color:#fff;letter-spacing:.01em;white-space:nowrap"> ${panelValue}</span>`)
  };
  if (panelFirst) {
    const pi = items.findIndex(x => x.slot === 'price');
    items.splice(pi < 0 ? items.length : pi, 0, panelItem);
  } else items.push(panelItem);
  if (unitAbove) {
    const pi = items.findIndex(x => x.slot === 'price');
    items.splice(pi + 1, 0, T2('price-unit', unitAbove, g.minFs, C.deep, {
      ls: .12,
      up: true,
      w: 700
    }));
  }
  const gaps = [Math.round(16 * g.k), Math.round(4 * g.k), Math.round(8 * g.k), Math.round(26 * g.k)];
  const gapAt = k => {
    const names = items.map(i => i.slot);
    const tight = g.id === 's11' ? .55 : 1;
    const map = {
      deadline: 16,
      kicker: 4,
      headline: (panelFirst ? 18 : 8) * tight,
      code: (panelFirst ? 22 : 0) * tight,
      'price-unit': 26 * tight,
      price: panelFirst ? 18 : 8
    };
    return Math.round((map[names[k]] || 0) * g.k * (land ? .6 : 1));
  };
  const total = items.reduce((s, i, k) => s + i.h + (k < items.length - 1 ? gapAt(k) : 0), 0);
  const footFs = Math.max(Math.ceil(g.minFs * .9), 26),
    footH = Math.ceil(footFs * 1.35 * (land ? 1 : 2)),
    footTop = h - footH - Math.round((land ? 16 : g.id === 's11' ? 14 : 22) * g.k);
  const topY = land ? Math.round((h - total - (foot ? footH + Math.round(16 * g.k) : 0)) / 2) : g.top + Math.round(g.logoH * .72) + Math.round((g.id === 's11' ? 8 : 22) * g.k);
  // sunburst: three white strokes fanning out on each side of the price
  /* sunburst from the post: three strokes per side, all leaning outward, longest on top, shortest (near-horizontal) at the bottom */
  const burst = (y, bigW) => {
    const s = Math.max(6, bigFs * .07),
      out = [];
    const cy = y + bigFs * .44,
      ox0 = bigW / 2 + bigFs * .12;
    const strokes = [[-.30, -.46, .08, .12], [-.10, -.20, .12, .08], [.10, .06, .14, .04]]; // shorter, chunkier — the post's marks are stubs, not rays
    for (const dir of [-1, 1]) for (const [y0, y1, x0, x1] of strokes) {
      const x1p = cx + dir * (ox0 + bigFs * x0),
        x2p = cx + dir * (ox0 + bigFs * (x0 + x1)),
        y1p = cy + bigFs * y0,
        y2p = cy + bigFs * y1;
      out.push(`<line x1="${x1p.toFixed(1)}" y1="${y1p.toFixed(1)}" x2="${x2p.toFixed(1)}" y2="${y2p.toFixed(1)}" stroke="#fff" stroke-width="${s.toFixed(1)}" stroke-linecap="round"/>`);
    }
    return `<svg data-slot="burst" style="position:absolute;left:0;top:0" width="${w}" height="${h}">${out.join('')}</svg>`;
  };
  let y = topY,
    text = '';
  items.forEach((it, k) => {
    /* burst temporarily off */text += it.html(cx, y);
    y += it.h + (k < items.length - 1 ? gapAt(k) : 0);
  });
  // product: over the panel edge (portrait) / right column (landscape). Two cut-outs fan out like the post when cut2 is given.
  const pw = land ? Math.round(w * .38) : Math.round(w * .86),
    pTop = land ? Math.round(h * .04) : y - Math.round(4 * g.k),
    ph = land ? h - 2 * pTop : footTop - Math.round(6 * g.k) - pTop;
  const px = land ? w - g.pad - pw : Math.round(w / 2 - pw / 2),
    sh = `filter:drop-shadow(0 ${Math.round(24 * g.k)}px ${Math.round(40 * g.k)}px rgba(2,30,37,.35))`;
  const img = (src, style) => `<img src="${src}" alt="" style="position:absolute;object-fit:contain;display:block;${sh};${style}">`;
  const prod = box('product-image', px, pTop, pw, ph, '', cut2 ? img(cut || p.cut, `left:6%;top:4%;width:48%;height:92%;transform:rotate(-9deg);transform-origin:50% 90%`) + img(cut2, `left:46%;top:0;width:48%;height:92%;transform:rotate(8deg);transform-origin:50% 90%`) : img(cut || p.cut, `left:0;top:0;width:100%;height:100%`));
  // tilted stamp on the product's upper-right shoulder (product boards only): teal-deep pill, coral caps
  let stampEl = '';
  if (stamp) {
    const sFs = Math.round(g.minFs * 1.35 * sq),
      sW = Math.ceil(tw(stamp, sFs, {
        w: 800,
        ls: .08,
        up: true
      })) + Math.round(sFs * 1.9),
      sH = Math.round(sFs * 2.2);
    // portrait: on the white ground just below the coral edge, on the product's right shoulder; landscape: right column, upper right, clamped inside
    const sx = land ? Math.min(px + pw - sW + Math.round(sW * .1), w - g.pad - sW) : Math.min(Math.round(px + pw * .64), w - g.pad - sW + Math.round(sW * .04)),
      sy = land ? pTop + Math.round(ph * .08) : Math.max(pTop + Math.round(ph * .06), panelH - tilt + Math.round(18 * g.k));
    stampEl = box('sticker', sx, sy, sW, sH, `background:${C.deep};color:${C.coral};border-radius:9999px;display:flex;align-items:center;justify-content:center;font:800 ${sFs}px/1 var(--font-sans);letter-spacing:.08em;text-transform:uppercase;white-space:nowrap;transform:rotate(-10deg);box-shadow:0 ${Math.round(10 * g.k)}px ${Math.round(24 * g.k)}px rgba(2,30,37,.28)`, stamp);
  }
  const footEl = foot ? box('footnote', g.pad, footTop, land ? colW : w - 2 * g.pad, footH, `font:700 ${footFs}px/1.35 var(--font-sans);text-align:${land ? 'left' : 'center'};text-transform:uppercase;letter-spacing:.03em;color:${C.deep};overflow:hidden`, foot) : '';
  const panel = land ? box('background', 0, 0, panelW, h, `background:${C.coral}`) : `<svg data-slot="background" style="position:absolute;left:0;top:0" width="${w}" height="${h}"><polygon points="0,0 ${w},0 ${w},${panelH - tilt} 0,${panelH}" fill="${C.coral}"/></svg>`;
  const lh = Math.round(g.logoH * (g.id === 's11' ? .58 : .72)),
    lg = land ? box('logo', w - g.pad - lh * 2, g.top, lh * 2, lh, '', `<img src="${A}logos/padel-mania-logo-1-colour.svg" alt="Padel Mánia" style="height:100%;width:auto;display:block">`) : box('logo', Math.round(w / 2 - lh), g.top, lh * 2, lh, '', `<img src="${A}logos/padel-mania-logo-white.svg" alt="Padel Mánia" style="height:100%;width:auto;display:block">`);
  return box('page', 0, 0, w, h, 'background:#fff') + panel + lg + text + prod + stampEl + footEl;
}

/* bright recipes per template: which product, what the panel says */
globalThis.BRIGHT = {
  /* product templates: name → teal-deep panel with the NORMAL price → big cream Mánia+ price with its caps label. The panel separates name from figure. */
  promo: g => brightBoard(g, PRODUCTS.coello, {
    eyebrow: 'Új szezon',
    title: 'Head Coello Pro',
    panelFirst: true,
    panelLabel: 'Normál ár',
    panelValue: ft(PRODUCTS.coello.price),
    unitAbove: 'Mánia+ tagoknak',
    big: ft(PRODUCTS.coello.member),
    foot: '<span style="color:' + C.coral + '">Mánia+ tagság</span> 1500 Ft / hó, hűségidő nélkül'
  }),
  highlight: g => brightBoard(g, PRODUCTS.vertex, {
    eyebrow: 'Bestseller',
    title: 'Siux Electra Pro',
    panelFirst: true,
    panelLabel: 'Normál ár',
    panelValue: ft(PRODUCTS.vertex.price),
    unitAbove: 'Mánia+ tagoknak',
    big: ft(PRODUCTS.vertex.member),
    foot: '<span style="color:' + C.coral + '">A legtöbbet vásárolt</span> ütőnk ebben a hónapban'
  }),
  anchor: g => brightBoard(g, PRODUCTS.coello, {
    eyebrow: 'Csak október 5-ig',
    title: 'Head Coello Pro',
    panelFirst: true,
    panelLabel: 'Eredeti ár',
    panelValue: '<s>' + ft(PRODUCTS.coello.orig) + '</s>',
    unitAbove: 'Mánia+ tagoknak',
    big: ft(PRODUCTS.coello.member),
    foot: '<span style="color:' + C.coral + '">Mánia+ tagság</span> 1500 Ft / hó, hűségidő nélkül'
  }),
  news: g => brightBoard(g, PRODUCTS.metalbone, {
    eyebrow: 'Új',
    title: 'Xcalion Unum M1',
    panelFirst: true,
    panelLabel: 'Normál ár',
    panelValue: ft(PRODUCTS.metalbone.price),
    unitAbove: 'Mánia+ tagoknak',
    big: ft(PRODUCTS.metalbone.member),
    foot: '<span style="color:' + C.coral + '">Most érkezett</span> a webshopba'
  }),
  coupon: g => brightBoard(g, null, {
    eyebrow: 'Szeptember 9–20',
    kicker: 'Minden',
    title: 'Padel labda',
    big: '990 Ft',
    unit: '/ tubus',
    panelLabel: 'Kuponkód',
    panelValue: '„LABDA”',
    foot: '<span style="color:' + C.coral + '">Váltsd be</span> első vásárlásod során!<br>Max. 3 tubus labdára használható fel.',
    cut: IMG + 'cut/wilson-premier-padel-labda.png',
    cut2: IMG + 'cut/head-pro-labda.png'
  })
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "sablonkeszlet/bright.js", error: String((e && e.message) || e) }); }

// sablonkeszlet/export-buttons-standalone.js
try { (() => {
/* PNG-letöltő gomb minden .ad artboard alá. A böngészőben rendereli a
   kreatívot, így előre exportált fájl nélkül is működik — bármelyik
   verzió-fájlban. */
(function () {
  var LIB = window.__resources && window.__resources.htmlToImage || 'https://unpkg.com/html-to-image@1.11.13/dist/html-to-image.js';
  function css() {
    if (document.getElementById('pm-dl-css')) return;
    var s = document.createElement('style');
    s.id = 'pm-dl-css';
    s.textContent = '.pm-dl{display:inline-flex;align-items:center;gap:7px;align-self:flex-start;background:var(--action-primary,#FF6B4A);color:#fff;border:0;cursor:pointer;font:600 14px/1 var(--font-sans,Inter,sans-serif);border-radius:var(--radius-md,10px);padding:11px 16px;margin-top:4px}.pm-dl:hover{filter:brightness(.96)}.pm-dl:disabled{opacity:.6;cursor:default}';
    document.head.appendChild(s);
  }
  function label(ad, i) {
    if (!ad.id) return 'kreativ-' + (i + 1);
    if (/^ad-/.test(ad.id)) return ad.id.replace(/^ad-/, 'labda-990-').replace(/-dl$/, '-keszlet');
    return 'padelmania-' + ad.id;
  }
  function init() {
    css();
    var ads = document.querySelectorAll('.ad');
    Array.prototype.forEach.call(ads, function (ad, i) {
      if (ad.parentElement.querySelector('.pm-dl')) return;
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'pm-dl';
      b.textContent = 'PNG letöltése';
      b.addEventListener('click', function () {
        b.disabled = true;
        b.textContent = 'Készül…';
        window.htmlToImage.toPng(ad, {
          width: ad.offsetWidth,
          height: ad.offsetHeight,
          pixelRatio: 1,
          cacheBust: true
        }).then(function (url) {
          var l = document.createElement('a');
          l.href = url;
          l.download = label(ad, i) + '.png';
          document.body.appendChild(l);
          l.click();
          l.remove();
        }).catch(function (e) {
          alert('A letöltés nem sikerült: ' + (e && e.message ? e.message : e));
        }).then(function () {
          b.disabled = false;
          b.textContent = 'PNG letöltése';
        });
      });
      ad.parentElement.appendChild(b);
    });
  }
  function load() {
    if (window.htmlToImage) return init();
    var s = document.createElement('script');
    s.src = LIB;
    s.onload = init;
    s.onerror = function () {
      console.error('export-buttons.js: html-to-image nem töltődött be');
    };
    document.head.appendChild(s);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', load);else load();
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "sablonkeszlet/export-buttons-standalone.js", error: String((e && e.message) || e) }); }

// sablonkeszlet/gen.js
try { (() => {
/* Padel Mánia sablonkészlet — generátor. run_script-ből: eval(await readFile('sablonkeszlet/gen.js')); await build();
   Minden elem abszolút px; méretosztály (.s11 .s45 .s34 .s916 .s191) + data-slot minden mezőn. */
const A = 'assets/',
  IMG = 'sablonkeszlet/img/';
/* Omnibus-sor („Elmúlt 30 nap legalacsonyabb ára”) — kapcsoló, alapból KI. Csak árcsökkentésnél kell. */
const OMNIBUS = false;
const C = {
  teal: '#0B3C49',
  deep: '#021E25',
  sky: '#9CC9D5',
  coral: '#FF6B4A',
  cream: '#F5F1E8',
  sand: '#E5DCC5',
  white: '#FFFFFF'
};
const SIZES = {
  s11: {
    w: 1080,
    h: 1080,
    pad: 60,
    top: 60,
    safeB: 1020,
    lab: '1:1 · 1080×1080',
    minPb: .40
  },
  s45: {
    w: 1080,
    h: 1350,
    pad: 60,
    top: 60,
    safeB: 1290,
    lab: '4:5 · 1080×1350',
    minPb: .45
  },
  s34: {
    w: 1080,
    h: 1440,
    pad: 60,
    top: 60,
    safeB: 1380,
    lab: '3:4 · 1080×1440',
    minPb: .45
  },
  s916: {
    w: 1080,
    h: 1920,
    pad: 64,
    top: 250,
    safeB: 1585,
    lab: '9:16 · 1080×1920',
    minPb: .45
  },
  s191: {
    w: 1200,
    h: 628,
    pad: 48,
    top: 48,
    safeB: 580,
    lab: '1.91:1 · 1200×628',
    minPb: .42
  }
};
const PRODUCTS = {
  coello: {
    name: 'Head Coello Pro 2026',
    price: 79990,
    member: 67992,
    low30: 84990,
    orig: 89990,
    img: IMG + 'studio-racket-ball.jpg',
    cut: IMG + 'cut/head-coello-pro-2026.png'
  },
  vertex: {
    name: 'Bullpadel Vertex 04',
    price: 94990,
    member: 80742,
    img: IMG + 'studio-racket.jpg',
    cut: IMG + 'cut/siux-electra-pro-2026.png'
  },
  metalbone: {
    name: 'Adidas Metalbone 3.4',
    price: 119990,
    member: 101992,
    img: IMG + 'studio-bag-racket-balls.jpg',
    cut: IMG + 'cut/xcalion-unum-m1.png'
  },
  balls: {
    name: 'Head Padel Pro S+ labda (3 db)',
    price: 2990,
    member: 2542,
    img: IMG + 'studio-balls.jpg',
    cut: IMG + 'cut/head-pro-labda.png'
  },
  grip: {
    name: 'Wilson Pro Padel overgrip',
    price: 6990,
    member: 5942,
    img: IMG + 'studio-racket.jpg',
    cut: IMG + 'cut/wilson-pro-padel-overgrip.png'
  }
};
const SCENE = [IMG + 'tactile-arms-racket-ball.jpg', IMG + 'tactile-hand-racket.jpg', IMG + 'campaign-male.jpg', IMG + 'tactile-ball-net.jpg'];
const ft = n => n.toLocaleString('hu-HU').replace(/\u00a0|,/g, ' ') + ' Ft';
const strip = s => s.replace(/<[^>]+>/g, '');

/* ── text measure (Inter estimate) ─────────────────────────── */
function em(ch, bold) {
  if (ch === ' ') return .26;
  if (ch === '%') return bold ? .9 : .86;
  if (/[iljtfr.,:;'!|]/.test(ch)) return bold ? .33 : .3;
  if (/[mwMW]/.test(ch)) return bold ? .9 : .84;
  if (/[0-9]/.test(ch)) return bold ? .64 : .6;
  if (ch !== ch.toLowerCase()) return bold ? .7 : .66;
  return bold ? .6 : .56;
}
function tw(t, fs, o = {}) {
  const s = strip(o.up ? t.toUpperCase() : t);
  let e = 0;
  for (const ch of s) e += em(ch, (o.w || 700) >= 600) + (o.ls || 0);
  return e * fs * 1.05;
}
function wrap(t, fs, W, o) {
  const out = [];
  for (const p of t.split('\n')) {
    let cur = '';
    for (const wd of p.split(' ')) {
      const c = cur ? cur + ' ' + wd : wd;
      if (tw(c, fs, o) <= W || !cur) cur = c;else {
        out.push(cur);
        cur = wd;
      }
    }
    out.push(cur);
  }
  return out;
}
function fit(t, fs, W, o, min = 8) {
  const w = tw(t, fs, o);
  return w <= W ? fs : Math.max(min, Math.floor(fs * W / w));
}

/* ── geometry ──────────────────────────────────────────────── */
function G(id) {
  const s = SIZES[id],
    k = s.w / 1080,
    land = id === 's191';
  const g = {
    id,
    ...s,
    k,
    land,
    minFs: Math.ceil(30 * k),
    ctaH: Math.ceil(110 * k),
    ctaFs: Math.ceil(44 * k),
    logoH: id === 's916' ? 120 : land ? 84 : Math.round(104 * k)
  };
  g.dead = {
    x: 0.7 * s.w,
    y: id === 's916' ? s.safeB - 0.15 * (s.safeB - s.top) : 0.85 * s.h
  };
  g.ctaY = s.safeB - g.ctaH;
  g.gap = Math.round(30 * k);
  g.colW = land ? 600 - s.pad : s.w - 2 * s.pad;
  g.pb = land ? {
    x: 640,
    y: 48,
    w: 512,
    h: 532
  } : {
    x: s.pad,
    y: s.top + g.logoH + g.gap,
    w: s.w - 2 * s.pad,
    h: 0
  };
  return g;
}

/* ── emitters ──────────────────────────────────────────────── */
const box = (slot, x, y, w, h, extra = '', inner = '') => `<div${slot ? ` data-slot="${slot}"` : ''} style="position:absolute;left:${Math.round(x)}px;top:${Math.round(y)}px;width:${Math.round(w)}px;height:${Math.round(h)}px;${extra}">${inner}</div>`;
/* text item: {h,w,html(x,y),re(W)} — re() re-wraps to a narrower column (dead zone) */
function T(slot, text, g, o, W) {
  W = W || o.W || g.colW;
  const fs = Math.max(o.min === false ? 0 : g.minFs, Math.round(o.fs)),
    lh = o.lh || 1.1,
    opts = {
      w: o.w || 700,
      ls: o.ls || 0,
      up: o.up
    };
  const lines = o.nowrap ? text.split('\n') : wrap(text, fs, W, opts),
    h = Math.ceil(lines.length * fs * lh) + Math.ceil(fs * (o.pad || .08)),
    wid = lines.length === 1 ? Math.min(W, Math.ceil(tw(text, fs, opts)) + 6) : o.nowrap ? Math.min(W, Math.ceil(Math.max(...lines.map(l => tw(l, fs, opts)))) + 6) : W;
  const css = `font:${o.w || 700} ${fs}px/${lh} var(--font-sans);color:${o.color || C.white};letter-spacing:${o.ls ? o.ls + 'em' : '-.02em'};${o.up ? 'text-transform:uppercase;' : ''}white-space:nowrap;${o.extra || ''}`;
  return {
    slot,
    h,
    w: wid,
    fs,
    opt: o.opt,
    keep: o.keep,
    tight: o.tight,
    html: (x, y) => box(slot, x, y, wid, h, css, lines.join('<br>')),
    re: W2 => T(slot, text, g, o, W2)
  };
}
const big = (slot, text, g, fs, W) => {
  const f = fit(text, Math.max(90, fs), W || g.colW, {
    w: 700,
    ls: -.05
  }, 40);
  return T(slot, text, g, {
    fs: f,
    lh: 1.0,
    ls: -.05,
    color: C.coral,
    nowrap: true,
    pad: 0,
    keep: true,
    tight: true
  });
};
const caps = (slot, text, g, color = C.sky, fs, opt, keep, tight) => T(slot, text, g, {
  fs: fs || g.minFs,
  lh: 1,
  ls: .15,
  up: true,
  w: 700,
  color,
  opt,
  keep,
  tight
});
const pname = (g, p, f = 1) => T('product-name', p.name, g, {
  fs: Math.round((g.land ? 40 : 54) * g.k * f),
  lh: 1.05,
  w: 700,
  ls: -.02,
  color: C.white,
  keep: true
});
const line = (slot, text, g, color = C.white, o = {}) => T(slot, text, g, {
  fs: o.fs || g.minFs,
  lh: 1.25,
  w: o.w || 600,
  color,
  opt: o.opt,
  keep: o.keep,
  nowrap: o.nowrap,
  tight: o.tight
});
const omni = (g, p) => OMNIBUS && p.low30 ? line('omnibus', `Elmúlt 30 nap legalacsonyabb ára: ${ft(p.low30)}`, g, C.sky, {
  opt: true
}) : null;
function memberBlock(g, p, f, {
  omnibus = true,
  normal = true,
  orig = false,
  name = true,
  keepFoot = false,
  bigFs
} = {}) {
  /* three emphasised levels: white product name · coral Mánia+ price (with the small sky tag glued on top) · CTA. Everything else is a faint footnote. */
  const nm = name ? pname(g, p, f) : null,
    tag = caps('member-qualifier', 'Mánia+ tagoknak', g, C.sky, g.minFs, false, true);
  const bigP = big('member-price', ft(p.member), g, (bigFs || (g.land ? 120 : 190)) * f),
    tgap = Math.round(6 * g.k);
  const price = {
    slot: 'member-price',
    keep: true,
    tight: false,
    h: tag.h + tgap + bigP.h,
    w: Math.max(tag.w, bigP.w),
    html: (x, y) => tag.html(x, y) + bigP.html(x, y + tag.h + tgap),
    re: W2 => {
      const b2 = bigP.re ? bigP.re(W2) : bigP;
      return {
        ...price,
        h: tag.h + tgap + b2.h,
        w: Math.max(tag.w, b2.w),
        html: (x, y) => tag.html(x, y) + b2.html(x, y + tag.h + tgap)
      };
    }
  };
  const head = nm;
  const parts = [];
  const prices = [];
  if (normal) prices.push(`Normál ár ${ft(p.price)}`);
  if (orig) prices.push(`eredeti ár <s>${ft(p.orig)}</s>`);
  /* the two prices share a line only when the line fits the column; a narrow (two-column) board stacks them */
  if (prices.length) {
    prices[0] = prices[0][0].toUpperCase() + prices[0].slice(1);
    const one = prices.join(', ');
    parts.push(g.land && orig ? `Eredeti ár <s>${ft(p.orig)}</s>` : tw(one.replace(/<\/?s>/g, ''), g.minFs, {
      w: 500
    }) <= g.colW ? one : prices.map((s, i) => i ? s[0].toUpperCase() + s.slice(1) : s).join('\n'));
  }
  if (!(g.land && orig)) parts.push('Mánia+ tagság 1500 Ft / hó');
  const foot = T('member-condition', parts.join('\n'), g, {
    fs: g.minFs,
    lh: 1.3,
    w: 500,
    color: 'rgba(255,255,255,.72)',
    keep: keepFoot,
    nowrap: true
  });
  if (keepFoot) foot.slot = 'anchor-foot';
  const it = [head, price, foot];
  if (omnibus) it.push(omni(g, p));
  return it.filter(Boolean);
}

/* stack: bottom-anchored above CTA; items touching the dead zone are re-wrapped to its left edge */
function stack(items, g, x, bottom, gap) {
  const gp = (i, idx) => idx === 0 ? 0 : items[idx].tight ? Math.round(6 * g.k) : Math.round(gap * (g.land ? 1 : 1.6));
  const total = () => items.reduce((s, i, idx) => s + i.h + gp(i, idx), 0);
  for (let pass = 0; pass < 3; pass++) {
    let y = bottom - total(),
      changed = false;
    items = items.map((i, idx) => {
      y += gp(i, idx);
      const hit = y + i.h > g.dead.y && x + i.w > g.dead.x;
      const out = hit && i.re ? i.re(Math.floor(g.dead.x - x - 8)) : i;
      if (out !== i) changed = true;
      y += i.h;
      return out;
    });
    if (!changed) break;
  }
  const h = total();
  let y = bottom - h,
    html = '';
  items.forEach((i, idx) => {
    y += gp(i, idx);
    html += i.html(x, y);
    y += i.h;
  });
  return {
    html,
    top: bottom - h,
    h
  };
}

/* fit the stack: shrink type (f) then drop optional lines until the product box keeps its minimum */
/* hard constraint: type never shrinks below .85; then optional lines drop (last first), then non-essential lines, then keep lines footnote → headline → name. Price and stats never drop. */
function fitStack(g, makeItems, bottom, minTop) {
  const dropped = new Set(),
    gap = Math.round(14 * g.k),
    mk = f => makeItems(f, g).filter(Boolean).filter(i => !dropped.has(i.slot));
  let f = 1,
    items = mk(f),
    s = stack(items, g, g.pad, bottom, gap);
  const ORDER = ['member-condition', 'omnibus', 'subline', 'headline', 'author', 'product-name', 'anchor-foot'];
  for (let n = 0; n < 40 && s.top < minTop; n++) {
    const optIdx = items.map(x => x.opt).lastIndexOf(true),
      freeIdx = items.findIndex(x => !x.keep && !x.opt);
    if (f > .85) f -= .05;else if (optIdx >= 0) dropped.add(items[optIdx].slot);else if (freeIdx >= 0) dropped.add(items[freeIdx].slot);else {
      const k = ORDER.find(sl => items.some(x => x.slot === sl));
      if (k) dropped.add(k);else break;
    }
    items = mk(f);
    s = stack(items, g, g.pad, bottom, gap);
  }
  return s;
}
function ground(g, scene, photo, bandBottom) {
  const {
    w,
    h
  } = g;
  let o = `<div data-slot="background" style="position:absolute;inset:0;background:linear-gradient(180deg,${C.teal} 0%,${C.deep} 100%)"></div>`;
  if (scene === 'full') {
    o += box('background-photo', 0, 0, w, h, 'overflow:hidden', `<img src="${photo}" alt="" style="width:100%;height:100%;object-fit:cover;object-position:${g.land ? '70% center' : 'center 30%'}">`) + box('', 0, 0, w, h, 'background:rgba(2,30,37,.28)');
    o += g.land ? box('', 0, 0, w * .7, h, 'background:linear-gradient(90deg,rgba(2,30,37,.97) 0%,rgba(2,30,37,.93) 55%,rgba(2,30,37,0) 100%)') : box('', 0, Math.round(h * .3), w, Math.round(h * .7), 'background:linear-gradient(0deg,rgba(2,30,37,.97) 0%,rgba(2,30,37,.93) 40%,rgba(2,30,37,.6) 70%,rgba(2,30,37,0) 100%)');
    return o;
  }
  if (scene === 'scene') {
    const bh = g.land ? h : bandBottom;
    o += box('scene-photo', 0, 0, w, bh, 'overflow:hidden', `<img src="${photo}" alt="" style="width:100%;height:100%;object-fit:cover;filter:blur(14px) saturate(.9);transform:scale(1.08)">`) + box('', 0, 0, w, bh, 'background:rgba(2,30,37,.45)');
    o += g.land ? box('', 0, 0, w * .62, h, 'background:linear-gradient(90deg,rgba(2,30,37,.97) 0%,rgba(2,30,37,.93) 70%,rgba(2,30,37,0) 100%)') : box('', 0, bh - Math.round(220 * g.k), w, h - bh + Math.round(220 * g.k), 'background:linear-gradient(0deg,rgba(2,30,37,.97) 0%,rgba(2,30,37,.97) 45%,rgba(2,30,37,0) 100%)');
  } else if (g.land) o += box('', 0, 0, w * .62, h, 'background:linear-gradient(90deg,rgba(2,30,37,.85) 60%,rgba(2,30,37,0) 100%)');
  return o;
}
const logo = (g, plus) => box('logo', g.pad, g.top, g.logoH * 2, g.logoH, '', `<img src="${A}logos/${plus ? 'padel-mania-plus-white' : 'padel-mania-logo-white'}.svg" alt="Padel Mánia" style="height:100%;width:auto;display:block;filter:drop-shadow(0 3px 16px rgba(2,30,37,.6))">`);
const tile = (g, p, b, scene) => box('product-image', b.x, b.y, b.w, b.h, `border-radius:${Math.round(28 * g.k)}px;overflow:hidden;background:#fff;box-shadow:${scene ? '0 40px 80px rgba(2,30,37,.65)' : '0 24px 60px rgba(2,30,37,.5)'}`, `<img src="${p.img}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;display:block">`);
function sticker(g, text, slot = 'sticker') {
  const fs = Math.max(g.minFs, Math.round(34 * g.k)),
    w = Math.ceil(tw(text, fs, {
      w: 700,
      ls: .06,
      up: true
    })) + fs * 1.4,
    h = Math.round(fs * 1.75);
  const right = g.land ? g.pb.x - g.gap : g.w - g.pad;
  let x = right - w,
    y = g.top + (g.logoH - h) / 2;
  if (x < g.pad + g.logoH * 2 + g.gap) {
    x = g.pad;
    y = g.top + g.logoH + Math.round(12 * g.k);
  }
  return box(slot, x, y, w, h, `background:${C.coral};border-radius:9999px;box-shadow:0 12px 44px rgba(2,30,37,.5);display:flex;align-items:center;justify-content:center;font:700 ${fs}px/1 var(--font-sans);letter-spacing:.06em;text-transform:uppercase;color:${C.deep}`, text);
}
const ARROW = '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
function cta(g, label) {
  const fs = g.ctaFs,
    maxW = Math.floor(g.w * .62),
    w = Math.min(maxW, Math.ceil(tw(label, fs, {
      w: 700
    })) + fs * 2.7);
  return box('cta', g.pad, g.ctaY, w, g.ctaH, `background:${C.coral};border-radius:${Math.round(18 * g.k)}px;display:flex;align-items:center;justify-content:space-between;gap:.5em;padding:0 ${Math.round(fs * .8)}px;box-sizing:border-box;font:700 ${fs}px/1 var(--font-sans);letter-spacing:-.01em;color:${C.deep};white-space:nowrap`, `<span>${label}</span>${ARROW}`);
}

/* product board: logo → tile → text stack → CTA. The tile takes the space the stack leaves, never less than the size minimum.
   variant: 'tile' (teal alap, álló csempe jobbra) · 'scene' (elmosott fotó a csempe mögött) · 'full' (a termékfotó az egész banner háttere, 990-es nyelv) */
function productBoard(g, scene, p, photo, {
  stickerText,
  items,
  ctaLabel = 'Megnézem a webshopban',
  plus = false,
  tileHtml
}) {
  const bottom = g.ctaY - g.gap,
    full = scene === 'full',
    twoCol = !full && (g.id === 's11' || g.land),
    stickerSlot = arguments[4].stickerSlot;
  /* every size but 9:16: text column left, portrait tile right (rackets are tall); the tile runs from the logo row to the CTA */
  const tileW = twoCol && !g.land ? Math.round(g.w * .42) : 0;
  if (twoCol && !g.land) g = {
    ...g,
    colW: g.w - 2 * g.pad - tileW - g.gap
  };
  const pbMin0 = g.id === 's916' ? Math.ceil(g.minPb * (g.safeB - g.top)) : Math.ceil(g.minPb * g.h);
  /* portrait: the tile may give up to 5 points of its minimum height if the stack cannot otherwise keep the product name */
  const pbMin = !g.land && !twoCol && !full ? Math.ceil((g.minPb - .05) * (g.id === 's916' ? g.safeB - g.top : g.h)) : pbMin0;
  const stickerBelow = stickerText && g.land && g.pb.x - g.gap - (Math.ceil(tw(stickerText, Math.max(g.minFs, Math.round(34 * g.k)), {
    w: 700,
    ls: .06,
    up: true
  })) + Math.max(g.minFs, Math.round(34 * g.k)) * 1.4) < g.pad + g.logoH * 2 + g.gap;
  const headerH = g.logoH + (stickerBelow ? Math.round(12 * g.k) + Math.round(Math.max(g.minFs, Math.round(34 * g.k)) * 1.75) : 0);
  const minTop = g.land || full || twoCol ? g.top + headerH + g.gap : g.pb.y + pbMin + g.gap;
  const s = fitStack(g, items, bottom, minTop);
  let pb = g.land ? g.pb : twoCol ? {
    x: g.w - g.pad - tileW,
    y: g.pb.y,
    w: tileW,
    h: bottom - g.pb.y
  } : {
    ...g.pb,
    h: Math.max(pbMin, s.top - g.gap - g.pb.y)
  };
  const overlap = !full && !twoCol && !g.land && s.top < pb.y + pb.h;
  const bandBottom = g.land ? g.h : pb.y + pb.h + Math.round(60 * g.k);
  return ground(g, scene, full ? p ? p.img : photo : photo, bandBottom) + (full ? '' : tileHtml ? tileHtml(pb) : tile(g, p, pb, scene)) + (overlap ? box('', 0, s.top - Math.round(140 * g.k), g.w, g.h - s.top + Math.round(140 * g.k), 'background:linear-gradient(0deg,rgba(2,30,37,.97) 0%,rgba(2,30,37,.95) 55%,rgba(2,30,37,0) 100%)') : '') + logo(g, plus) + (stickerText ? sticker(g, stickerText, stickerSlot) : '') + s.html + cta(g, ctaLabel);
}
const H = (g, t, f = 1) => T('headline', t, g, {
  fs: Math.max(g.land ? g.minFs : 44 * g.k, (g.land ? 40 : 54) * f),
  lh: 1.06,
  ls: -.025,
  tight: true,
  keep: !g.land
});
const TPL = {
  promo: {
    name: 'Termékpromó',
    dom: 'Mánia+ ár',
    build: (g, sc) => {
      const p = PRODUCTS.coello;
      return productBoard(g, sc, p, SCENE[0], {
        items: (f, g) => {
          const [e, pr, fo] = memberBlock(g, p, f);
          return [e, pr, H(g, 'Kontroll, ami versenyt nyer', f), fo];
        }
      });
    }
  },
  highlight: {
    name: 'Termékkiemelés',
    dom: 'Mánia+ ár',
    build: (g, sc) => {
      const p = PRODUCTS.vertex;
      return productBoard(g, sc, p, SCENE[1], {
        stickerText: 'Bestseller',
        items: (f, g) => {
          const [e, pr, fo] = memberBlock(g, p, f, {
            omnibus: false
          });
          return [e, pr, H(g, 'A hónap legkeresettebb ütője', f), fo];
        }
      });
    }
  },
  anchor: {
    name: 'Árhorgony',
    dom: 'Mánia+ ár',
    build: (g, sc) => {
      const p = PRODUCTS.coello;
      /* landscape has no room for a pill above the stack: the deadline becomes the first (coral) footnote line instead */
      return productBoard(g, sc, p, SCENE[2], {
        stickerText: g.land ? undefined : 'Csak október 5-ig',
        stickerSlot: 'deadline',
        items: (f, g) => {
          const [e, pr, fo] = memberBlock(g, p, f, {
            orig: true,
            keepFoot: true,
            normal: false,
            bigFs: g.land ? 92 : 160
          });
          return g.land ? [e, pr, {
            ...fo,
            html: (x, y) => T('deadline', 'Csak október 5-ig', g, {
              fs: g.minFs,
              lh: 1.3,
              w: 700,
              color: C.coral,
              nowrap: true
            }).html(x, y) + fo.html(x, y + Math.ceil(g.minFs * 1.3)),
            h: fo.h + Math.ceil(g.minFs * 1.3)
          }] : [e, pr, fo];
        },
        ctaLabel: 'Kérem az akciós áron'
      });
    }
  },
  news: {
    name: 'Újdonság',
    dom: 'Mánia+ ár',
    build: (g, sc) => {
      const p = PRODUCTS.metalbone;
      return productBoard(g, sc, p, SCENE[0], {
        stickerText: 'Új',
        items: (f, g) => {
          const [e, pr, fo] = memberBlock(g, p, f, {
            omnibus: false
          });
          return [e, pr, H(g, 'Megérkezett a 2026-os Metalbone', f), fo];
        },
        ctaLabel: 'Megnézem az újdonságot'
      });
    }
  },
  numbers: {
    name: 'Számokban',
    dom: '3 statisztika',
    build: (g, sc) => {
      const p = PRODUCTS.vertex,
        stats = [['370 g', 'súly'], ['12K', 'karbon'], ['+18%', 'ütőerő']];
      const statRow = (W, f) => {
        if (g.land || W < 600) {
          const vf = g.land ? Math.ceil(44 * g.k) : Math.round(56 * g.k),
            rh = Math.round(vf * (g.land ? 1.4 : 1.55));
          return {
            slot: 'stats',
            keep: true,
            h: rh * 3,
            w: W,
            html: (x, y) => stats.map(([v, l], i) => box('stat-' + (i + 1), x, y + i * rh, W, rh, `display:flex;align-items:center;gap:.5em;white-space:nowrap`, `<span style="font:700 ${vf}px/1 var(--font-sans);letter-spacing:-.04em;color:${C.coral};min-width:4.2em">${v}</span><span style="font:600 ${g.minFs}px/1 var(--font-sans);color:${C.sky};text-transform:uppercase;letter-spacing:.1em">${l}</span>`)).join('')
          };
        }
        const n = 3,
          gp = Math.round(16 * g.k),
          bw = Math.floor((W - gp * (n - 1)) / n),
          padX = Math.round(22 * g.k),
          bh = Math.round(118 * g.k);
        return {
          slot: 'stats',
          keep: true,
          h: bh,
          w: W,
          html: (x, y) => stats.map(([v, l], i) => {
            const vf = fit(v, Math.round(64 * g.k * f), bw - 2 * padX, {
              w: 700,
              ls: -.04
            }, g.minFs);
            return box('stat-' + (i + 1), x + i * (bw + gp), y, bw, bh, `background:rgba(255,255,255,.06);border:2px solid rgba(156,201,213,.35);border-radius:${Math.round(20 * g.k)}px;box-sizing:border-box;padding:${Math.round(16 * g.k)}px ${padX}px;display:flex;flex-direction:column;justify-content:flex-end;gap:.12em`, `<span style="font:700 ${vf}px/.95 var(--font-sans);letter-spacing:-.04em;color:${C.coral}">${v}</span><span style="font:600 ${g.minFs}px/1.1 var(--font-sans);color:${C.sky};text-transform:uppercase;letter-spacing:.12em">${l}</span>`);
          }).join(''),
          re: W2 => statRow(W2, f)
        };
      };
      return productBoard(g, sc, p, SCENE[3], {
        items: (f, g) => {
          const [e, pr, fo] = memberBlock(g, p, f, {
            omnibus: false,
            bigFs: g.land ? undefined : 140
          });
          /* landscape: the stats are the declared hero — the Mánia+ price becomes one small line so the three figures survive */
          if (g.land) return [e, statRow(g.colW, f), T('member-price', `Mánia+ tagoknak ${ft(p.member)}`, g, {
            fs: g.minFs,
            lh: 1.3,
            w: 600,
            color: C.coral,
            keep: true
          })];
          return [e, statRow(g.colW, f), pr, fo];
        }
      });
    }
  },
  review: {
    name: 'Vélemény',
    dom: 'Idézet',
    build: (g, sc) => {
      const p = PRODUCTS.coello,
        sf = Math.round(40 * g.k),
        star = `<svg viewBox="0 0 24 24" width="${sf}" height="${sf}" fill="${C.coral}"><path d="M12 2l3.1 6.6 7.1.9-5.2 5 1.4 7.1L12 18.2 5.6 21.6 7 14.5l-5.2-5 7.1-.9z"/></svg>`;
      const stars = {
        slot: 'stars',
        keep: true,
        h: sf,
        w: sf * 5.4,
        html: (x, y) => box('stars', x, y, sf * 5.4, sf, 'display:flex;gap:.1em', star.repeat(5))
      };
      return productBoard(g, sc, p, SCENE[1], {
        items: (f, g) => [stars, T('quote', g.land ? '„Két hét után már nem tudom letenni. Pontos és könnyű.”' : '„Két hét után már nem tudom letenni. Pontos, könnyű, és a hátsó üvegről is visszahozza.”', g, {
          fs: (g.land ? 38 : 50) * f,
          lh: 1.1,
          ls: -.02,
          w: 600,
          keep: true
        }), T('author', `Kovács Bence, ellenőrzött vásárló\n${p.name}`, g, {
          fs: g.minFs,
          lh: 1.3,
          w: 500,
          color: C.sky,
          nowrap: true
        })],
        ctaLabel: 'Megnézem az ütőt'
      });
    }
  },
  beforeafter: {
    name: 'Előtte–utána',
    dom: 'Két fotó',
    noFull: true,
    build: (g, sc) => {
      const panes = pb => {
        const gp = Math.round(16 * g.k),
          hw = g.land ? pb.w : (pb.w - gp) / 2,
          hh = g.land ? (pb.h - gp) / 2 : pb.h;
        const pane = (slot, img, lab, x, y) => {
          const fs = g.minFs,
            lw = Math.ceil(tw(lab, fs, {
              w: 700,
              ls: .1,
              up: true
            })) + fs * 1.2;
          return box(slot, x, y, hw, hh, `border-radius:${Math.round(24 * g.k)}px;overflow:hidden;box-shadow:0 24px 60px rgba(2,30,37,.5)`, `<img src="${img}" alt="" style="width:100%;height:100%;object-fit:cover;display:block">`) + box(slot + '-label', x + gp, y + gp, lw, fs * 1.7, `background:${C.coral};color:${C.deep};border-radius:9999px;display:flex;align-items:center;justify-content:center;font:700 ${fs}px/1 var(--font-sans);letter-spacing:.1em;text-transform:uppercase`, lab);
        };
        return g.land ? pane('before', IMG + 'tactile-hand-racket.jpg', 'Előtte', pb.x, pb.y) + pane('after', IMG + 'tactile-arms-racket-ball.jpg', 'Utána', pb.x, pb.y + hh + gp) : pane('before', IMG + 'tactile-hand-racket.jpg', 'Előtte', pb.x, pb.y) + pane('after', IMG + 'tactile-arms-racket-ball.jpg', 'Utána', pb.x + hw + gp, pb.y);
      };
      const p = PRODUCTS.grip;
      return productBoard(g, sc, p, SCENE[2], {
        tileHtml: panes,
        items: (f, g) => {
          const [e, pr, fo] = memberBlock(g, p, f, {
            omnibus: false
          });
          return [e, pr, line('subline', 'Hexagon markolat 30 perc játék után, a vásárlónk saját fotója', g, C.sky, {
            opt: true
          }), fo];
        },
        ctaLabel: 'Megnézem a gripeket'
      });
    }
  }
};

/* ── page ──────────────────────────────────────────────────── */
async function build() {
  const ids = Object.keys(SIZES);
  let css = `html,body{margin:0}body{background:var(--surface-sunken);font-family:var(--font-sans);padding:40px;color:var(--text-primary)}h1{font:700 24px/1.2 var(--font-sans);color:var(--text-brand);margin:0 0 6px}.lead{font:400 15px/1.5 var(--font-sans);color:var(--text-label);margin:0 0 24px;max-width:900px}table{border-collapse:collapse;font:500 13px/1.4 var(--font-sans);margin:0 0 36px}td,th{border:1px solid var(--border-subtle);padding:6px 10px;text-align:left}th{background:#fff;color:var(--text-brand)}h2{font:700 14px/1 var(--font-sans);letter-spacing:.1em;text-transform:uppercase;color:var(--text-brand);margin:34px 0 4px}.sub{font:400 13px/1.4 var(--font-sans);color:var(--text-muted);margin:0 0 12px}.row{display:flex;gap:36px;align-items:flex-start;overflow-x:auto;padding-bottom:10px}.wrap{display:flex;flex-direction:column;gap:8px;flex-shrink:0}.tag{font:600 12px/1 var(--font-sans);letter-spacing:.08em;text-transform:uppercase;color:var(--text-muted)}.ad{position:relative;overflow:hidden;background:${C.teal}}.ad s{text-decoration-thickness:.09em}a{color:var(--text-action)}\n`;
  for (const id of ids) {
    const s = SIZES[id],
      g = G(id);
    css += `.ad.${id}{width:${s.w}px;height:${s.h}px;--pad:${s.pad}px;--min-fs:${g.minFs}px;--cta-h:${g.ctaH}px;--cta-fs:${g.ctaFs}px;--logo-h:${g.logoH}px;--safe-top:${s.top}px;--safe-bottom:${s.safeB}px;--dead-x:${Math.round(g.dead.x)}px;--dead-y:${Math.round(g.dead.y)}px}\n`;
  }
  let table = `<table><tr><th>Sablon</th><th>Domináns elem</th>${ids.map(i => `<th>${SIZES[i].lab.split(' ')[0]} termékdoboz min.</th>`).join('')}</tr>`;
  for (const [k, t] of Object.entries(TPL)) table += `<tr><td>${t.name}</td><td>${t.dom}</td>${ids.map(i => {
    const g = G(i);
    return `<td>${g.land ? '≥ 42% szél. (43%)' : i === 's916' ? '≥ 40% a biztonságos zónából' : i === 's11' ? '≥ 40% mag.' : '≥ 40% mag. (cél 45%)'}</td>`;
  }).join('')}</tr>`;
  table += '</table>';
  const VAR = [['full', '— teljes fotó', 'A termékfotó az egész banner háttere, sötét teal átmenettel — a 990-es kampány nyelve.'], ['tile', '— egyszínű alap', 'Teal alap, a kivágott termék fehér csempén, a szöveg egy bal élen (1:1 és 1.91:1 kéthasábos, álló méreteken a csempe felül). Terméknév, eyebrow, ár, mondat, plusz egy apró lábjegyzet.']];
  let body = '';
  const hasBright = typeof globalThis.BRIGHT !== 'undefined',
    BRIGHT = globalThis.BRIGHT;
  for (const [k, t] of Object.entries(TPL)) {
    for (const [sc, lab, sub] of VAR) {
      if (sc === 'full' && t.noFull) continue;
      body += `<h2>${t.name} ${lab}</h2><p class="sub">${sub}</p><div class="row">`;
      for (const id of ids) {
        const g = G(id);
        body += `<div class="wrap"><span class="tag">${SIZES[id].lab}</span><div class="ad ${id} tpl-${k} v-${sc}" id="${k}-${sc}-${id}">${t.build(g, sc)}</div></div>`;
      }
      body += '</div>';
    }
    if (hasBright && BRIGHT[k]) {
      body += `<h2>${t.name} — bright</h2><p class="sub">Coral panel döntött alsó éllel fehér alapon, középre zárt, a kivágott termék kilóg a panelből — az Instagram-poszt nyelve.</p><div class="row">`;
      for (const id of ids) {
        const g = G(id);
        body += `<div class="wrap"><span class="tag">${SIZES[id].lab}</span><div class="ad ${id} tpl-${k} v-bright" id="${k}-bright-${id}">${BRIGHT[k](g)}</div></div>`;
      }
      body += '</div>';
    }
  }
  if (hasBright && BRIGHT.coupon) {
    body += `<h2>Kupon/akció — bright</h2><p class="sub">A 990 Ft-os poszt újraépítve a rendszerben: dátumsor, kétszintű cím, cream óriás ár sunbursttel, teal-deep kódpanel, a tubus kilóg a panelből.</p><div class="row">`;
    for (const id of ids) {
      const g = G(id);
      body += `<div class="wrap"><span class="tag">${SIZES[id].lab}</span><div class="ad ${id} tpl-coupon v-bright" id="coupon-bright-${id}">${BRIGHT.coupon(g)}</div></div>`;
    }
    body += '</div>';
  }
  const html = `<!doctype html><html lang="hu"><head><meta charset="utf-8"><title>Padel Mánia sablonkészlet v1</title><link rel="stylesheet" href="styles.css"><style>${css}</style></head><body>
<h1>Padel Mánia sablonkészlet v1</h1>
<p class="lead">Minden sablon 5 fő méretben, két változatban (teljes fotó / egyszínű alap). Szövegszín csak fehér, coral, sky. Minden elem abszolút px, <code>data-slot</code> a mező nevével. Az Omnibus-sor (<code>OMNIBUS</code> kapcsoló a generátorban) alapból ki van kapcsolva. A fotók a <code>sablonkeszlet/img/</code> könnyített másolatai.</p>
${table}${body}
<script src="export-buttons.js"></script></body></html>`;
  await saveFile('Padel Mania sablonkeszlet v1.html', html);
  return Object.keys(TPL).length + ' sablon × 2 × ' + ids.length + ' méret';
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "sablonkeszlet/gen.js", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/App.jsx
try { (() => {
const {
  TabBar,
  ScreenHeader,
  Input,
  Button,
  Icon,
  Badge
} = window.PadelMNiaDesignSystem_b97c58;
function LoginScreen({
  onBack,
  onSubmit
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement(ScreenHeader, {
    title: "Bejelentkez\xE9s",
    onBack: onBack
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px var(--gutter-widest) 48px',
      maxWidth: 480,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--type-h2)',
      color: 'var(--text-primary)',
      margin: '0 0 8px'
    }
  }, "\xDCdv \xFAjra!"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-label)',
      margin: '0 0 32px'
    }
  }, "Jelentkezz be a rendel\xE9seidhez \xE9s a M\xE1nia+ \xE1rakhoz."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "E-mail",
    type: "email",
    placeholder: "nev@pelda.hu",
    defaultValue: "bence@pelda.hu"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Jelsz\xF3",
    type: "password",
    defaultValue: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "eye",
      size: 20,
      color: "var(--text-muted)"
    })
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      alignSelf: 'flex-end',
      font: 'var(--type-label)',
      textDecoration: 'none'
    }
  }, "Elfelejtett jelsz\xF3"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    fullWidth: true,
    onClick: onSubmit
  }, "Bejelentkez\xE9s"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    fullWidth: true,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "scan-smiley",
      size: 18,
      weight: "bold"
    }),
    onClick: onSubmit
  }, "Bel\xE9p\xE9s Face ID-val")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 6,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-label)'
    }
  }, "M\xE9g nincs fi\xF3kod?"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      font: 'var(--fw-semibold) var(--fs-base)/1.5 var(--font-sans)',
      color: 'var(--text-brand)',
      textDecoration: 'none'
    }
  }, "Regisztr\xE1ci\xF3"))));
}
function OrdersScreen({
  onBack
}) {
  const orders = [{
    id: '38412',
    date: '2026. augusztus 29.',
    total: 134990,
    status: 'Teljesítve',
    tone: 'success'
  }, {
    id: '37865',
    date: '2026. július 14.',
    total: 130000,
    status: 'Teljesítve',
    tone: 'success'
  }, {
    id: '37102',
    date: '2026. június 2.',
    total: 28900,
    status: 'Visszaküldve',
    tone: 'outline'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page-alt)',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement(ScreenHeader, {
    title: "Rendel\xE9seim",
    onBack: onBack
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--gutter)',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, orders.map(o => /*#__PURE__*/React.createElement("div", {
    key: o.id,
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--gutter)',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-semibold) var(--fs-base)/1.4 var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, "#", o.id), /*#__PURE__*/React.createElement(Badge, {
    tone: o.tone
  }, o.status)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, o.date), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
      paddingTop: 10,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-label)'
    }
  }, "V\xE9g\xF6sszeg"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-price)',
      color: 'var(--text-price)'
    }
  }, fmtHUF(o.total)))))));
}
const TABS = [{
  id: 'webshop',
  label: 'Webshop',
  icon: 'shopping-cart'
}, {
  id: 'racket',
  label: 'Ütőválasztó',
  icon: 'crosshair'
}, {
  id: 'finder',
  label: 'Pályák',
  icon: 'map-pin'
}, {
  id: 'profile',
  label: 'Több',
  icon: 'list'
}];
function App() {
  const [tab, setTab] = React.useState('webshop');
  const [route, setRoute] = React.useState(null);
  const [product, setProduct] = React.useState(PRODUCTS[0]);
  const [lines, setLines] = React.useState([]);
  const [signedIn, setSignedIn] = React.useState(false);
  const [isMember, setIsMember] = React.useState(false);
  const [quiz, setQuiz] = React.useState({
    phase: 'intro',
    step: 0
  });
  const scroller = React.useRef(null);
  const cartCount = lines.reduce((a, l) => a + l.quantity, 0);
  const go = r => {
    setRoute(r);
    if (scroller.current) scroller.current.scrollTop = 0;
  };
  const switchTab = t => {
    setTab(t);
    setRoute(null);
    if (t === 'racket') setQuiz({
      phase: 'intro',
      step: 0
    });
    if (scroller.current) scroller.current.scrollTop = 0;
  };
  const openProduct = p => {
    setProduct(p);
    go('product');
  };
  const addToCart = () => {
    setLines(ls => ls.some(l => l.id === product.id) ? ls.map(l => l.id === product.id ? {
      ...l,
      quantity: l.quantity + 1
    } : l) : [...ls, {
      ...product,
      quantity: 1
    }]);
    go('cart');
  };
  let screen;
  if (route === 'product') {
    screen = /*#__PURE__*/React.createElement(ProductScreen, {
      product: product,
      isMember: isMember,
      cartCount: cartCount,
      onBack: () => go(null),
      onOpenCart: () => go('cart'),
      onAdd: addToCart,
      onOpenMania: () => go('mania'),
      onOpenProduct: openProduct
    });
  } else if (route === 'cart') {
    screen = /*#__PURE__*/React.createElement(CartScreen, {
      lines: lines,
      isMember: isMember,
      onBack: () => go(null),
      onQty: (id, n) => setLines(ls => ls.map(l => l.id === id ? {
        ...l,
        quantity: n
      } : l)),
      onRemove: id => setLines(ls => ls.filter(l => l.id !== id)),
      onCheckout: () => go('cart'),
      onShop: () => {
        switchTab('webshop');
      }
    });
  } else if (route === 'mania') {
    screen = /*#__PURE__*/React.createElement(ManiaPlusScreen, {
      isMember: isMember,
      onBack: () => go(null),
      onJoin: () => setIsMember(true),
      onCancel: () => setIsMember(false)
    });
  } else if (route === 'login') {
    screen = /*#__PURE__*/React.createElement(LoginScreen, {
      onBack: () => go(null),
      onSubmit: () => {
        setSignedIn(true);
        go(null);
      }
    });
  } else if (route === 'orders') {
    screen = /*#__PURE__*/React.createElement(OrdersScreen, {
      onBack: () => go(null)
    });
  } else if (tab === 'webshop') {
    screen = /*#__PURE__*/React.createElement(HomeScreen, {
      cartCount: cartCount,
      onOpenProduct: openProduct,
      onOpenCart: () => go('cart'),
      onOpenQuiz: () => switchTab('racket'),
      onOpenMania: () => go('mania'),
      onOpenSearch: () => {}
    });
  } else if (tab === 'racket') {
    screen = quiz.phase === 'intro' ? /*#__PURE__*/React.createElement(QuizIntro, {
      onStart: () => setQuiz({
        phase: 'q',
        step: 0
      })
    }) : quiz.phase === 'q' ? /*#__PURE__*/React.createElement(QuizQuestion, {
      step: quiz.step,
      onBack: () => setQuiz(quiz.step === 0 ? {
        phase: 'intro',
        step: 0
      } : {
        phase: 'q',
        step: quiz.step - 1
      }),
      onExit: () => setQuiz({
        phase: 'intro',
        step: 0
      }),
      onAnswer: () => {
        if (scroller.current) scroller.current.scrollTop = 0;
        setQuiz(quiz.step + 1 >= QUESTIONS.length ? {
          phase: 'results',
          step: 0
        } : {
          phase: 'q',
          step: quiz.step + 1
        });
      }
    }) : /*#__PURE__*/React.createElement(QuizResults, {
      onBack: () => setQuiz({
        phase: 'q',
        step: QUESTIONS.length - 1
      }),
      onExit: () => setQuiz({
        phase: 'intro',
        step: 0
      }),
      onOpenProduct: openProduct
    });
  } else if (tab === 'finder') {
    screen = /*#__PURE__*/React.createElement(FinderScreen, {
      cartCount: cartCount,
      onOpenCart: () => go('cart')
    });
  } else {
    screen = /*#__PURE__*/React.createElement(ProfileScreen, {
      signedIn: signedIn,
      isMember: isMember,
      onSignIn: () => go('login'),
      onSignOut: () => setSignedIn(false),
      onOpenMania: () => go('mania'),
      onOpenOrders: () => go('orders')
    });
  }
  const hideTabs = route === 'login';
  return /*#__PURE__*/React.createElement("div", {
    className: "pm-phone"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pm-status"
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 5,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-fill ph-cell-signal-full"
  }), /*#__PURE__*/React.createElement("i", {
    className: "ph-fill ph-wifi-high"
  }), /*#__PURE__*/React.createElement("i", {
    className: "ph-fill ph-battery-full"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "pm-scroll",
    ref: scroller
  }, screen), !hideTabs && /*#__PURE__*/React.createElement(TabBar, {
    items: TABS,
    activeId: tab,
    onSelect: switchTab
  }));
}
Object.assign(window, {
  App,
  LoginScreen,
  OrdersScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/CartScreen.jsx
try { (() => {
const {
  ScreenHeader,
  CartLineItem,
  QtyStepper,
  Button,
  Icon
} = window.PadelMNiaDesignSystem_b97c58;
function CartScreen({
  lines,
  isMember,
  onBack,
  onQty,
  onRemove,
  onCheckout,
  onShop
}) {
  const subtotal = lines.reduce((a, l) => a + l.price * l.quantity, 0);
  const memberDiscount = isMember ? Math.round(subtotal * 0.15) : 0;
  const shipping = isMember ? 0 : 1900;
  const total = subtotal - memberDiscount + shipping;
  if (lines.length === 0) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--surface-page-alt)',
        minHeight: '100%'
      }
    }, /*#__PURE__*/React.createElement(ScreenHeader, {
      title: "Kos\xE1r",
      onBack: onBack
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
        padding: 32,
        paddingTop: 80
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 88,
        height: 88,
        borderRadius: 44,
        background: 'var(--surface-sunken)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "shopping-cart",
      size: 34,
      color: "var(--text-brand)"
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-h3)',
        color: 'var(--text-primary)'
      }
    }, "A kosarad \xFCres"), /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-body)',
        color: 'var(--text-muted)',
        textAlign: 'center'
      }
    }, "N\xE9zd meg az \xFCt\u0151ket \u2014 a M\xE1nia+ \xE1rakkal m\xE9g jobban j\xE1rsz."), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: onShop
    }, "V\xE1s\xE1rl\xE1s")));
  }
  const Row = ({
    label,
    value,
    muted,
    free
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-label)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: free ? 'var(--fw-semibold) var(--fs-sm)/1.4 var(--font-sans)' : 'var(--type-label)',
      color: free ? 'var(--feedback-success)' : muted ? 'var(--text-muted)' : 'var(--text-primary)'
    }
  }, value));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page-alt)',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement(ScreenHeader, {
    title: "Kos\xE1r",
    onBack: onBack
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--gutter)',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, lines.map(l => /*#__PURE__*/React.createElement(CartLineItem, {
    key: l.id,
    name: l.name,
    variant: "Grip: L2",
    image: l.image,
    price: l.price,
    quantity: l.quantity,
    stepper: /*#__PURE__*/React.createElement(QtyStepper, {
      value: l.quantity,
      onChange: n => onQty(l.id, n)
    }),
    onRemove: () => onRemove(l.id)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--gutter)',
      boxShadow: 'var(--shadow-sm)',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-h4)',
      color: 'var(--text-primary)'
    }
  }, "\xD6sszegz\xE9s"), /*#__PURE__*/React.createElement(Row, {
    label: "R\xE9sz\xF6sszeg",
    value: fmtHUF(subtotal)
  }), isMember && /*#__PURE__*/React.createElement(Row, {
    label: "M\xE1nia+ kedvezm\xE9ny (15%)",
    value: `−${fmtHUF(memberDiscount)}`,
    free: true
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Sz\xE1ll\xEDt\xE1s",
    value: shipping === 0 ? 'Ingyenes' : fmtHUF(shipping),
    free: shipping === 0
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTop: '1px solid var(--border-subtle)',
      paddingTop: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-h4)',
      color: 'var(--text-primary)'
    }
  }, "\xD6sszesen"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-price-lg)',
      color: 'var(--text-price)'
    }
  }, fmtHUF(total))), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-disabled)',
      textAlign: 'center'
    }
  }, "Az \xE1rak az \xE1f\xE1t tartalmazz\xE1k"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      bottom: 0,
      background: 'var(--surface-card)',
      padding: 'var(--gutter)',
      borderTop: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: onCheckout
  }, "Megrendel\xE9s \xB7 ", fmtHUF(total))));
}
Object.assign(window, {
  CartScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/CartScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/FinderScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  AppHeader,
  HeaderAction,
  SegmentControl,
  Input,
  Chip,
  CourtCard,
  Icon
} = window.PadelMNiaDesignSystem_b97c58;
const SORTS = [{
  label: 'Ajánlott',
  icon: 'star'
}, {
  label: 'Távolság',
  icon: 'map-trifold'
}, {
  label: 'Értékelés',
  icon: 'star'
}, {
  label: 'Vélemények',
  icon: 'chat-dots'
}];
function FinderScreen({
  cartCount,
  onOpenCart
}) {
  const [seg, setSeg] = React.useState('courts');
  const [sort, setSort] = React.useState('Ajánlott');
  const [openId, setOpenId] = React.useState('c1');
  const [favs, setFavs] = React.useState(['c3']);
  const toggleFav = id => setFavs(f => f.includes(id) ? f.filter(x => x !== id) : [...f, id]);
  const ordered = [...COURTS].sort((a, b) => (favs.includes(b.id) ? 1 : 0) - (favs.includes(a.id) ? 1 : 0));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement(AppHeader, {
    title: "P\xE1ly\xE1k & Edz\u0151k",
    actions: /*#__PURE__*/React.createElement(HeaderAction, {
      label: "Kos\xE1r",
      count: cartCount,
      onClick: onOpenCart
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "shopping-cart",
      size: 22,
      weight: "bold"
    }))
  }, /*#__PURE__*/React.createElement(SegmentControl, {
    activeId: seg,
    onSelect: setSeg,
    items: [{
      id: 'courts',
      label: 'Pályák',
      icon: 'map-pin'
    }, {
      id: 'coaches',
      label: 'Edzők',
      icon: 'users'
    }, {
      id: 'matches',
      label: 'Meccsek',
      icon: 'tennis-ball'
    }]
  })), seg !== 'courts' ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 12,
      padding: '64px 32px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 80,
      height: 80,
      borderRadius: 24,
      background: 'var(--surface-sunken)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: seg === 'coaches' ? 'users' : 'tennis-ball',
    size: 32,
    color: "var(--text-brand)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-h4)',
      color: 'var(--text-primary)',
      textAlign: 'center'
    }
  }, seg === 'coaches' ? 'Edzőkereső' : 'Meccskereső'), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)',
      textAlign: 'center'
    }
  }, "A funkci\xF3 k\xE9szen van, de a v1 kiad\xE1sban ki van kapcsolva (FeatureFlags). Ez a k\xE9perny\u0151 sz\xE1nd\xE9kosan \xFCres \u2014 nincs hozz\xE1 j\xF3v\xE1hagyott terv.")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-brand)',
      padding: '0 var(--gutter) 12px'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    onDark: true,
    placeholder: "P\xE1lya vagy v\xE1ros keres\xE9se...",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "magnifying-glass",
      size: 16,
      color: "rgba(255,255,255,.55)"
    }),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "crosshair",
      size: 16,
      color: "rgba(255,255,255,.55)"
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 135,
      margin: '8px var(--gutter) 0',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      border: '1px solid var(--border-subtle)',
      position: 'relative',
      background: 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${PM_ASSETS}/imagery/social-cover-1.png`,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.35
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-trifold",
    size: 22,
    color: "var(--text-brand)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-label)'
    }
  }, "Google Maps \xB7 4 p\xE1lya a k\xF6zelben")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 46,
      left: 92,
      width: 26,
      height: 26,
      borderRadius: 13,
      background: 'var(--action-primary)',
      border: '2px solid #fff',
      boxShadow: 'var(--shadow-md)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 74,
      left: 178,
      width: 20,
      height: 20,
      borderRadius: 10,
      background: 'var(--surface-brand)',
      border: '2px solid #fff'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 34,
      left: 246,
      width: 20,
      height: 20,
      borderRadius: 10,
      background: 'var(--surface-brand)',
      border: '2px solid #fff'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px var(--gutter) 8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sliders-horizontal",
    size: 14,
    color: "var(--text-muted)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-muted)'
    }
  }, "Rendez\xE9s")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      overflowX: 'auto',
      paddingBottom: 8,
      scrollbarWidth: 'none'
    }
  }, SORTS.map(s => /*#__PURE__*/React.createElement(Chip, {
    key: s.label,
    selected: sort === s.label,
    onClick: () => setSort(s.label),
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: s.icon,
      size: 13,
      weight: "bold"
    })
  }, s.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, "4 p\xE1lya \xB7 30 km-en bel\xFCl")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      padding: '0 var(--gutter) 24px'
    }
  }, ordered.map(c => /*#__PURE__*/React.createElement(CourtCard, _extends({
    key: c.id
  }, c, {
    favorite: favs.includes(c.id),
    expanded: openId === c.id,
    onToggle: () => setOpenId(openId === c.id ? null : c.id),
    onFavorite: () => toggleFav(c.id),
    onNavigate: () => {},
    onCall: () => {},
    onDetail: () => {}
  }))))));
}
Object.assign(window, {
  FinderScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/FinderScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/HomeScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  AppHeader,
  HeaderAction,
  SectionHeader,
  ProductCard,
  CategoryCard,
  ManiaPlusBanner,
  FeatureCta,
  NoticeBanner,
  Input,
  Icon
} = window.PadelMNiaDesignSystem_b97c58;
function HeroSlide({
  onOpen
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px var(--gutter) 4px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onOpen,
    style: {
      position: 'relative',
      height: 150,
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'var(--surface-brand)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${PM_ASSETS}/imagery/tactile-arms-racket-ball.png`,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg, rgba(11,60,73,.92) 0%, rgba(11,60,73,.55) 55%, rgba(11,60,73,.15) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      right: 120,
      bottom: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-bold) 10px/1.3 var(--font-sans)',
      letterSpacing: 'var(--tracking-caps)',
      color: 'var(--action-primary)'
    }
  }, "\xDAJ SZEZON"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-bold) var(--fs-lg)/1.2 var(--font-sans)',
      letterSpacing: 'var(--tracking-title)',
      color: 'var(--text-on-brand)'
    }
  }, "Pr\xF3b\xE1ld ki, azt\xE1n vedd meg"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-regular) 12px/1.4 var(--font-sans)',
      color: 'var(--text-on-brand-soft)'
    }
  }, "Demo \xFCt\u0151k a partnerp\xE1ly\xE1kon")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 10,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center',
      gap: 6
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: i === 0 ? 16 : 6,
      height: 6,
      borderRadius: 3,
      background: i === 0 ? 'var(--pm-white)' : 'rgba(255,255,255,.45)'
    }
  })))));
}
function Rail({
  items,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      overflowX: 'auto',
      padding: '4px var(--gutter)',
      scrollbarWidth: 'none'
    }
  }, items.map(p => /*#__PURE__*/React.createElement(ProductCard, _extends({
    key: p.id
  }, p, {
    memberMarkSrc: `${PM_ASSETS}/logos/app-icon-mania.png`,
    onClick: () => onOpen(p)
  }))));
}
function HomeScreen({
  cartCount,
  onOpenProduct,
  onOpenCart,
  onOpenQuiz,
  onOpenMania,
  onOpenSearch
}) {
  const [notice, setNotice] = React.useState(true);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement(AppHeader, {
    logoSrc: `${PM_ASSETS}/logos/padel-mania-logo-white.svg`,
    actions: /*#__PURE__*/React.createElement(HeaderAction, {
      label: "Kos\xE1r",
      count: cartCount,
      onClick: onOpenCart
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "shopping-cart",
      size: 22,
      weight: "bold"
    })),
    search: /*#__PURE__*/React.createElement("div", {
      onClick: onOpenSearch
    }, /*#__PURE__*/React.createElement(Input, {
      onDark: true,
      readOnly: true,
      placeholder: "Term\xE9k keres\xE9se...",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "magnifying-glass",
        size: 16,
        color: "rgba(255,255,255,.55)"
      })
    }))
  }), /*#__PURE__*/React.createElement(HeroSlide, {
    onOpen: () => onOpenProduct(PRODUCTS[0])
  }), notice && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(NoticeBanner, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "bell-ringing",
      size: 22
    }),
    onAccept: () => setNotice(false),
    onDeny: () => setNotice(false),
    onClose: () => setNotice(false),
    acceptLabel: "K\xE9rem",
    denyLabel: "Most nem"
  }, "Sz\xF3lunk, ha megj\xF6n a rendel\xE9sed vagy akci\xF3ba ker\xFCl a kiszemelt \xFCt\u0151d.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Kateg\xF3ri\xE1k",
    onSeeAll: () => {}
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10,
      padding: '0 var(--gutter)'
    }
  }, CATEGORIES.map(c => /*#__PURE__*/React.createElement(CategoryCard, {
    key: c.id,
    label: c.name,
    image: c.image
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(ManiaPlusBanner, {
    title: "M\xE1nia Plusz",
    subtitle: "15% kedvezm\xE9ny minden term\xE9kre",
    markSrc: `${PM_ASSETS}/logos/app-icon-mania.png`,
    onClick: onOpenMania
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Kiemelt term\xE9kek"
  }), /*#__PURE__*/React.createElement(Rail, {
    items: PRODUCTS.slice(0, 4),
    onOpen: onOpenProduct
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Akci\xF3s term\xE9kek",
    badge: "Akci\xF3"
  }), /*#__PURE__*/React.createElement(Rail, {
    items: PRODUCTS.filter(p => p.onSale),
    onOpen: onOpenProduct
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px var(--gutter) 24px'
    }
  }, /*#__PURE__*/React.createElement(FeatureCta, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "crosshair",
      size: 24
    }),
    title: "Nem tudod, melyik \xFCt\u0151 a ti\xE9d?",
    subtitle: "5 k\xE9rd\xE9s, \xE9s megvan az \xFCt\u0151d",
    onClick: onOpenQuiz
  })));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/ManiaPlusScreen.jsx
try { (() => {
const {
  ScreenHeader,
  BenefitRow,
  Button,
  Badge,
  Icon
} = window.PadelMNiaDesignSystem_b97c58;
function ManiaPlusScreen({
  isMember,
  onBack,
  onJoin,
  onCancel
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page-alt)',
      minHeight: '100%',
      paddingBottom: 32
    }
  }, /*#__PURE__*/React.createElement(ScreenHeader, {
    title: "M\xE1nia Plusz",
    onBack: onBack
  }), isMember ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--action-primary)',
      padding: '40px 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${PM_ASSETS}/logos/mania-plus-logo-white.png`,
    alt: "",
    style: {
      width: 80,
      height: 80,
      objectFit: 'contain'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-h3)',
      color: '#fff',
      marginTop: 12,
      textAlign: 'center'
    }
  }, "Akt\xEDv M\xE1nia+ tag vagy"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body)',
      color: 'rgba(255,255,255,.85)'
    }
  }, "K\xF6vetkez\u0151 meg\xFAjul\xE1s: 2026. okt\xF3ber 8.")) : /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-brand)',
      padding: '40px 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${PM_ASSETS}/logos/app-icon-mania.png`,
    alt: "",
    style: {
      width: 80,
      height: 80,
      objectFit: 'contain',
      borderRadius: 16
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-h2)',
      color: '#fff',
      marginTop: 12,
      textAlign: 'center'
    }
  }, "Padel Mania Plusz"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-lg)',
      color: 'var(--text-on-brand-soft)'
    }
  }, "havi 1 500 Ft")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-xl)',
      margin: isMember ? '16px var(--gutter) 0' : '-24px var(--gutter) 0',
      padding: 20,
      boxShadow: 'var(--shadow-md)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--type-h4)',
      color: 'var(--text-primary)',
      marginBottom: 12
    }
  }, isMember ? 'A tagságod tartalma' : 'Mit kapsz?'), /*#__PURE__*/React.createElement(BenefitRow, {
    tone: "cream",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "check-circle",
      size: 22,
      weight: "fill"
    }),
    title: "Minimum 15% kedvezm\xE9ny minden term\xE9kre",
    divider: true
  }), /*#__PURE__*/React.createElement(BenefitRow, {
    tone: "cream",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "truck",
      size: 22,
      weight: "fill"
    }),
    title: "Ingyenes sz\xE1ll\xEDt\xE1s minden rendel\xE9shez"
  })), isMember && /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-xl)',
      margin: '16px var(--gutter) 0',
      padding: 20,
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "crown",
    size: 20,
    weight: "fill",
    color: "var(--action-primary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-h4)',
      color: 'var(--text-primary)'
    }
  }, "Eddigi megtakar\xEDt\xE1sod")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-sunken)',
      borderRadius: 'var(--radius-md)',
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-label)'
    }
  }, "\xD6sszesen"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-bold) 28px/1.2 var(--font-sans)',
      color: 'var(--action-primary)'
    }
  }, fmtHUF(42300))), [['Termék kedvezmény (15%)', 36600], ['Ingyenes szállítás', 5700]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '8px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: 'var(--type-body)',
      color: 'var(--text-label)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-semibold) var(--fs-base)/1.4 var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, fmtHUF(v))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-xl)',
      margin: '16px var(--gutter) 0',
      padding: 20,
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-h4)',
      color: 'var(--text-primary)'
    }
  }, "El\u0151fizet\xE9s"), /*#__PURE__*/React.createElement(Badge, {
    tone: isMember ? 'success' : 'accent'
  }, isMember ? 'Aktív' : 'Nincs')), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-bold) 22px/1.2 var(--font-sans)',
      color: 'var(--text-brand)'
    }
  }, "1 500 Ft"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-regular) 14px/1.4 var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, " / h\xF3nap"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-subtle)',
      margin: '12px 0'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-label)'
    }
  }, "B\xE1rmikor lemondhat\xF3, a lemond\xE1s a k\xF6vetkez\u0151 fordul\xF3napon l\xE9p \xE9letbe.")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px var(--gutter) 0'
    }
  }, isMember ? /*#__PURE__*/React.createElement(Button, {
    variant: "danger",
    fullWidth: true,
    onClick: onCancel
  }, "Tags\xE1g lemond\xE1sa") : /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18,
      weight: "bold"
    }),
    onClick: onJoin
  }, "Csatlakozz \u2014 1 500 Ft / h\xF3")));
}
Object.assign(window, {
  ManiaPlusScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/ManiaPlusScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/ProductScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  HeaderAction,
  PriceBlock,
  ManiaPriceBox,
  Badge,
  Button,
  ProductCard,
  Icon
} = window.PadelMNiaDesignSystem_b97c58;
const SPECS = [['Szint', 'Haladó / Silver'], ['Forma', 'Csepp'], ['Mag', 'Kemény EVA'], ['Egyensúly', 'Fejnehéz'], ['Sweet spot', 'Közepes'], ['Súlycsoport', '365-375 g'], ['Textúra', 'Érdesített'], ['Keret anyag', '12K karbon']];
function ProductScreen({
  product,
  isMember,
  cartCount,
  onBack,
  onOpenCart,
  onAdd,
  onOpenMania,
  onOpenProduct
}) {
  const [slide, setSlide] = React.useState(0);
  const [fav, setFav] = React.useState(false);
  const gallery = [product.image, `${PM_ASSETS}/imagery/racket-hero-detail.jpg`, `${PM_ASSETS}/imagery/racket-product-hero.jpg`];
  const related = PRODUCTS.filter(p => p.id !== product.id).slice(0, 3);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)',
      minHeight: '100%',
      paddingBottom: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-brand)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 8px 8px'
    }
  }, /*#__PURE__*/React.createElement(HeaderAction, {
    label: "Vissza",
    onClick: onBack
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "caret-left",
    size: 22,
    weight: "bold"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement(HeaderAction, {
    label: "Kedvenc",
    onClick: () => setFav(!fav)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    size: 22,
    weight: fav ? 'fill' : 'bold',
    color: fav ? 'var(--pm-favorite)' : undefined
  })), /*#__PURE__*/React.createElement(HeaderAction, {
    label: "Kos\xE1r",
    count: cartCount,
    onClick: onOpenCart
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shopping-cart",
    size: 22,
    weight: "bold"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--gutter) var(--gutter) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 3',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'var(--surface-card)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: gallery[slide],
    alt: product.name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain'
    }
  }), product.demo && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 8,
      right: 8,
      background: 'var(--feedback-success)',
      color: '#fff',
      borderRadius: 4,
      padding: '2px 6px',
      font: 'var(--fw-bold) 10px/1.4 var(--font-sans)'
    }
  }, "Kipr\xF3b\xE1lhat\xF3")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 6,
      marginTop: 8
    }
  }, gallery.map((_, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    "aria-label": `Kép ${i + 1}`,
    onClick: () => setSlide(i),
    style: {
      width: i === slide ? 18 : 6,
      height: 6,
      borderRadius: 3,
      border: 0,
      padding: 0,
      cursor: 'pointer',
      background: i === slide ? 'var(--surface-brand)' : 'var(--pm-gray-300)'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 12
    }
  }, product.onSale && /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, "\u2212", Math.round((1 - product.price / product.regularPrice) * 100), "%"), /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-sm)',
      padding: '6px 10px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--fw-semibold) 12px/1.3 var(--font-sans)',
      color: 'var(--text-heading)'
    }
  }, "K\xE9szleten"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, "N\xE1lad holnap"))), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--type-h3)',
      color: 'var(--text-primary)',
      margin: '0 0 12px'
    }
  }, product.name), /*#__PURE__*/React.createElement(PriceBlock, {
    price: product.price,
    regularPrice: product.regularPrice,
    onSale: product.onSale
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(ManiaPriceBox, {
    memberPrice: product.memberPrice,
    savings: product.price - product.memberPrice,
    isMember: isMember,
    markSrc: `${PM_ASSETS}/logos/app-icon-mania.png`,
    onJoin: isMember ? undefined : onOpenMania
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-label)',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      fontSize: 11,
      marginBottom: 8
    }
  }, "Le\xEDr\xE1s"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: '#424242',
      margin: 0
    }
  }, "T\xE1mad\xF3 j\xE1t\xE9khoz k\xE9sz\xFClt csepp forma, kem\xE9ny EVA maggal \xE9s \xE9rdes\xEDtett fel\xFClettel. A 12K karbon keret gyors labdakimenetet ad, a fejneh\xE9z egyens\xFAly pedig extra er\u0151t a smash-ekn\xE9l.")), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-label)',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      fontSize: 11,
      marginBottom: 8
    }
  }, "Specifik\xE1ci\xF3k"), SPECS.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '8px 0',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-label)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-heading)'
    }
  }, v)))), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-label)',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      fontSize: 11,
      marginBottom: 8
    }
  }, "Kapcsol\xF3d\xF3 term\xE9kek"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      overflowX: 'auto',
      scrollbarWidth: 'none'
    }
  }, related.map(p => /*#__PURE__*/React.createElement(ProductCard, _extends({
    key: p.id
  }, p, {
    width: 132,
    memberMarkSrc: `${PM_ASSETS}/logos/app-icon-mania.png`,
    onClick: () => onOpenProduct(p)
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-label)',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      fontSize: 11,
      marginBottom: 8
    }
  }, "V\xE1s\xE1rl\xF3i v\xE9lem\xE9nyek (1)"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page-alt)',
      borderRadius: 'var(--radius-md)',
      padding: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 17,
      background: 'var(--surface-brand)',
      color: '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: 'var(--fw-bold) 14px/1 var(--font-sans)'
    }
  }, "G"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-semibold) var(--fs-sm)/1.3 var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, "G\xE1bor K."), /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "check-circle",
      size: 10,
      weight: "fill"
    })
  }, "Igazolt")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 3,
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "star",
    size: 11,
    weight: "fill",
    color: "var(--pm-star)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-medium) 11px/1.3 var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, "5/5"))), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-disabled)'
    }
  }, "m\xE1rc. 4.")), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-body)',
      margin: 0
    }
  }, "Kipr\xF3b\xE1ltam a demo \xFCt\u0151t a p\xE1ly\xE1n, k\xE9t nap m\xFAlva megrendeltem. Pont az az er\u0151, amit kerestem.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      bottom: 0,
      padding: '8px var(--gutter) 12px',
      background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, var(--surface-page) 40%)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "shopping-cart",
      size: 18,
      weight: "bold"
    }),
    onClick: onAdd
  }, "Kos\xE1rba")));
}
Object.assign(window, {
  ProductScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/ProductScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/ProfileScreen.jsx
try { (() => {
const {
  MenuRow,
  MenuSection,
  Button,
  Badge,
  Icon
} = window.PadelMNiaDesignSystem_b97c58;
function ProfileScreen({
  signedIn,
  isMember,
  onSignIn,
  onSignOut,
  onOpenMania,
  onOpenOrders
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--gutter)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--gutter)',
      paddingBottom: 32
    }
  }, signedIn ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-brand)',
      borderRadius: 'var(--radius-xl)',
      padding: 20,
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 60,
      height: 60,
      borderRadius: 30,
      background: 'rgba(255,255,255,.2)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: 'var(--fw-bold) 28px/1 var(--font-sans)',
      color: '#fff'
    }
  }, "K"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-h4)',
      color: 'var(--text-on-brand)'
    }
  }, "Kov\xE1cs Bence"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-on-brand-muted)'
    }
  }, "bence@pelda.hu"), isMember && /*#__PURE__*/React.createElement("span", {
    style: {
      alignSelf: 'flex-start',
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "onBrand",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "crown",
      size: 11,
      weight: "fill"
    })
  }, "M\xE1nia+ tag")))) : /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-xl)',
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 12,
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 72,
      height: 72,
      borderRadius: 36,
      background: 'var(--surface-sunken)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "user",
    size: 32,
    color: "var(--text-brand)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-h4)',
      color: 'var(--text-primary)'
    }
  }, "Nincs bejelentkezve"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-label)',
      textAlign: 'center',
      lineHeight: '20px'
    }
  }, "Jelentkezz be, hogy kezeld a rendel\xE9seidet, tags\xE1godat \xE9s kedvenceidet."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      width: '100%',
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true,
    onClick: onSignIn
  }, "Bejelentkez\xE9s"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    fullWidth: true,
    onClick: onSignIn
  }, "Regisztr\xE1ci\xF3"))), /*#__PURE__*/React.createElement(MenuSection, {
    title: isMember ? 'Tagságom · 15% kedvezményem minden termékre' : '15% kedvezmény minden termékre'
  }, /*#__PURE__*/React.createElement(MenuRow, {
    iconImage: `${PM_ASSETS}/logos/app-icon-mania.png`,
    label: "M\xE1nia Plusz",
    hint: isMember ? 'Aktív tag' : 'Csatlakozz!',
    highlight: !isMember,
    onClick: onOpenMania
  })), signedIn && /*#__PURE__*/React.createElement(MenuSection, {
    title: "Fi\xF3k"
  }, /*#__PURE__*/React.createElement(MenuRow, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "package",
      size: 18
    }),
    label: "Rendel\xE9seim",
    onClick: onOpenOrders
  }), /*#__PURE__*/React.createElement(MenuRow, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "heart",
      size: 18
    }),
    label: "Kedvenceim",
    hint: "4"
  }), /*#__PURE__*/React.createElement(MenuRow, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "user",
      size: 18
    }),
    label: "Adataim"
  }), /*#__PURE__*/React.createElement(MenuRow, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "gear",
      size: 18
    }),
    label: "Be\xE1ll\xEDt\xE1sok"
  })), /*#__PURE__*/React.createElement(MenuSection, {
    title: "Szolg\xE1ltat\xE1sok"
  }, /*#__PURE__*/React.createElement(MenuRow, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "tennis-ball",
      size: 18
    }),
    label: "\xDCt\u0151teszt"
  }), /*#__PURE__*/React.createElement(MenuRow, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "calendar-blank",
      size: 18
    }),
    label: "Meccskeres\u0151",
    hint: "Hamarosan",
    disabled: true
  }), /*#__PURE__*/React.createElement(MenuRow, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "handshake",
      size: 18
    }),
    label: "Edz\u0151keres\u0151",
    hint: "Hamarosan",
    disabled: true
  }), /*#__PURE__*/React.createElement(MenuRow, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "newspaper",
      size: 18
    }),
    label: "H\xEDrek"
  })), /*#__PURE__*/React.createElement(MenuSection, {
    title: "Jogi tudnival\xF3k"
  }, /*#__PURE__*/React.createElement(MenuRow, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "file-text",
      size: 18
    }),
    label: "\xC1ltal\xE1nos szerz\u0151d\xE9si felt\xE9telek"
  }), /*#__PURE__*/React.createElement(MenuRow, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "shield-check",
      size: 18
    }),
    label: "Adatkezel\xE9si t\xE1j\xE9koztat\xF3"
  }), /*#__PURE__*/React.createElement(MenuRow, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "truck",
      size: 18
    }),
    label: "Sz\xE1ll\xEDt\xE1s \xE9s fizet\xE9s"
  }), /*#__PURE__*/React.createElement(MenuRow, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 18
    }),
    label: "Kapcsolat"
  })), signedIn && /*#__PURE__*/React.createElement(Button, {
    variant: "danger",
    fullWidth: true,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "sign-out",
      size: 18,
      weight: "bold"
    }),
    onClick: onSignOut,
    style: {
      background: 'var(--surface-card)',
      boxShadow: 'var(--shadow-sm)',
      borderRadius: 'var(--radius-lg)',
      paddingTop: 16,
      paddingBottom: 16
    }
  }, "Kijelentkez\xE9s"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)',
      textAlign: 'center'
    }
  }, "v1.3.2 \xB7 build 17")));
}
Object.assign(window, {
  ProfileScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/ProfileScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/RacketSelector.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  ScreenHeader,
  ProgressBar,
  QuizOptionCard,
  StatCard,
  BenefitRow,
  Button,
  Chip,
  ProductCard,
  Badge,
  Icon
} = window.PadelMNiaDesignSystem_b97c58;
function QuizIntro({
  onStart
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)',
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(ScreenHeader, {
    title: "\xDCt\u0151v\xE1laszt\xF3"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '4px var(--gutter-widest) 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 150,
      height: 150
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 75,
      background: 'var(--surface-accent)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 18,
      left: 18,
      width: 114,
      height: 114,
      borderRadius: 57,
      background: 'var(--surface-card)',
      border: '1.5px solid var(--border-accent)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${PM_ASSETS}/imagery/studio-racket.png`,
    alt: "",
    style: {
      width: 108,
      height: 108,
      objectFit: 'contain'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 38,
      left: 28,
      width: 8,
      height: 8,
      borderRadius: 4,
      background: 'var(--pm-coral)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 46,
      left: 124,
      width: 8,
      height: 8,
      borderRadius: 4,
      background: 'var(--pm-sky)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 114,
      left: 130,
      width: 10,
      height: 10,
      borderRadius: 5,
      background: 'var(--pm-teal)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 130,
      left: 32,
      width: 6,
      height: 6,
      borderRadius: 3,
      background: 'var(--pm-coral)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      alignItems: 'center',
      alignSelf: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-bold) 22px/28px var(--font-sans)',
      color: 'var(--text-brand)',
      textAlign: 'center',
      letterSpacing: 'var(--tracking-display)'
    }
  }, "Tal\xE1ld meg a t\xF6k\xE9letes \xFCt\u0151d"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-regular) var(--fs-sm)/18px var(--font-sans)',
      color: 'var(--pm-warm-gray)',
      textAlign: 'center'
    }
  }, "5 k\xE9rd\xE9s. N\xE9h\xE1ny perc. Az \xFCt\u0151, ami passzol hozz\xE1d.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignSelf: 'stretch'
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    value: "5",
    label: "k\xE9rd\xE9s"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "2 perc",
    label: "v\xE1laszra"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "3",
    label: "aj\xE1nl\xE1s"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      alignSelf: 'stretch'
    }
  }, /*#__PURE__*/React.createElement(BenefitRow, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "crosshair",
      size: 16
    }),
    title: "Szem\xE9lyre szabott tal\xE1latok",
    subtitle: "A te szintedhez, st\xEDlusodhoz, kerethez"
  }), /*#__PURE__*/React.createElement(BenefitRow, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "sliders-horizontal",
      size: 16
    }),
    title: "R\xE9szletes elemz\xE9s",
    subtitle: "S\xFAly, mag, egyens\xFAly, sweet spot \xE9s m\xE9g 4 szempont"
  }), /*#__PURE__*/React.createElement(BenefitRow, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "package",
      size: 16
    }),
    title: "Val\xF3s k\xE9szlet",
    subtitle: "Csak amit t\xE9nyleg meg tudsz rendelni"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px var(--gutter-widest) 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 20,
      weight: "bold"
    }),
    onClick: onStart
  }, "Ind\xEDtsd el"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, "Ingyenes, regisztr\xE1ci\xF3 nem kell")));
}
function QuizQuestion({
  step,
  onAnswer,
  onBack,
  onExit
}) {
  const q = QUESTIONS[step];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement(ScreenHeader, {
    title: `${step + 1} / ${QUESTIONS.length}`,
    onBack: onBack,
    onClose: onExit
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    value: step + 1,
    total: QUESTIONS.length
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--gutter-wide) var(--gutter-wide) 32px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--fw-bold) 22px/28px var(--font-sans)',
      color: 'var(--text-brand)',
      letterSpacing: 'var(--tracking-title)',
      margin: '0 0 6px'
    }
  }, q.question), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-regular) 14px/20px var(--font-sans)',
      color: 'var(--pm-warm-gray)',
      margin: '0 0 20px'
    }
  }, q.subtitle), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, q.options.map((o, i) => /*#__PURE__*/React.createElement(QuizOptionCard, {
    key: o.label,
    variant: q.variant,
    index: i,
    label: o.label,
    description: o.description,
    details: o.details,
    levelBadge: o.levelBadge,
    priceLabel: o.priceLabel,
    image: o.image,
    icon: o.icon ? /*#__PURE__*/React.createElement(Icon, {
      name: o.icon,
      size: 20
    }) : undefined,
    onSelect: onAnswer
  })))));
}
function QuizResults({
  onBack,
  onExit,
  onOpenProduct
}) {
  const best = PRODUCTS.slice(0, 3);
  const invest = PRODUCTS.slice(1, 4);
  const Caption = ({
    children
  }) => /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-bold) 12px/1.3 var(--font-sans)',
      color: 'var(--text-brand)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase'
    }
  }, children);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement(ScreenHeader, {
    title: "Az aj\xE1nlatod",
    onBack: onBack,
    onClose: onExit
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--gutter-wide)',
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-semibold) 11px/1.3 var(--font-sans)',
      color: 'var(--text-muted)',
      letterSpacing: 'var(--tracking-caps-wide)',
      textTransform: 'uppercase'
    }
  }, "A te profilod"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-primary)'
    }
  }, "Bronz szint\u0171 univerz\xE1lis j\xE1t\xE9kos"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, ['Csepp forma', 'Hybrid mag', 'Közepes sweet spot', '365-375 g', 'Középre tolt egyensúly'].map(t => /*#__PURE__*/React.createElement(Chip, {
    key: t,
    kind: "chip"
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      background: 'var(--feedback-success-bg)',
      borderRadius: 'var(--radius-md)',
      padding: 12
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${PM_ASSETS}/logos/app-icon-mania.png`,
    alt: "",
    style: {
      width: 16,
      height: 16,
      borderRadius: 3
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: 'var(--fw-medium) 12px/1.4 var(--font-sans)',
      color: 'var(--text-body)'
    }
  }, "M\xE1nia+ tagk\xE9nt ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--feedback-success)'
    }
  }, "19 500 Ft-ot"), " sp\xF3roln\xE1l ezen az \xFCt\u0151n.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement(Caption, null, "Legjobb neked most")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--type-caption)',
      color: 'var(--text-muted)',
      marginBottom: 10
    }
  }, "A profilod alapj\xE1n rangsorolva"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      overflowX: 'auto',
      scrollbarWidth: 'none'
    }
  }, best.map(p => /*#__PURE__*/React.createElement(ProductCard, _extends({
    key: p.id
  }, p, {
    memberMarkSrc: `${PM_ASSETS}/logos/app-icon-mania.png`,
    onClick: () => onOpenProduct(p)
  }))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement(Caption, null, "N\xF6vekedj vele"), /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    size: "sm"
  }, "Befektet\xE9s")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--type-caption)',
      color: 'var(--text-muted)',
      marginBottom: 10
    }
  }, "Egy szinttel feljebb \u2014 ezek a k\xF6vetkez\u0151 szintedre is t\xF6k\xE9letesek"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      overflowX: 'auto',
      scrollbarWidth: 'none'
    }
  }, invest.map(p => /*#__PURE__*/React.createElement(ProductCard, _extends({
    key: p.id
  }, p, {
    memberMarkSrc: `${PM_ASSETS}/logos/app-icon-mania.png`,
    onClick: () => onOpenProduct(p)
  }))))), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    fullWidth: true,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16,
      weight: "bold"
    })
  }, "Pontosabb aj\xE1nl\xE1st k\xE9rek")));
}
Object.assign(window, {
  QuizIntro,
  QuizQuestion,
  QuizResults
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/RacketSelector.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/data.jsx
try { (() => {
/* Illustrative content for the UI kit. Product names and brands are ones that
   appear in the repository; prices are representative. The real app takes all
   of this from the WooCommerce REST API — never hard-code it in production. */
const A = '../../assets';
const PRODUCTS = [{
  id: 1,
  name: 'Siux Electra Pro 2026 Shadow',
  brand: 'Siux',
  image: `${A}/imagery/studio-racket.png`,
  price: 130000,
  regularPrice: 140000,
  memberPrice: 110500,
  onSale: true,
  demo: true
}, {
  id: 2,
  name: 'Xcalion Unum H1',
  brand: 'Xcalion',
  image: `${A}/imagery/studio-racket-ball.png`,
  price: 96900,
  memberPrice: 82365,
  demo: true
}, {
  id: 3,
  name: 'Royal Padel 36 Aniv Light',
  brand: 'Royal Padel',
  image: `${A}/imagery/studio-racket.png`,
  price: 74900,
  memberPrice: 63665
}, {
  id: 4,
  name: 'Padel Mánia labdaszett (3 db)',
  brand: 'Padel Mánia',
  image: `${A}/imagery/studio-balls.png`,
  price: 4990,
  memberPrice: 4242
}, {
  id: 5,
  name: 'Padel Mánia táska + törölköző',
  brand: 'Padel Mánia',
  image: `${A}/imagery/studio-bag-racket-balls.png`,
  price: 28900,
  regularPrice: 34900,
  memberPrice: 24565,
  onSale: true
}];
const CATEGORIES = [{
  id: 23,
  name: 'Padel ütők',
  image: `${A}/imagery/studio-racket.png`
}, {
  id: 31,
  name: 'Labdák',
  image: `${A}/imagery/studio-balls.png`
}, {
  id: 44,
  name: 'Táskák',
  image: `${A}/imagery/studio-bag-racket-balls.png`
}, {
  id: 52,
  name: 'Kiegészítők',
  image: `${A}/imagery/studio-racket-ball.png`
}];
const COURTS = [{
  id: 'c1',
  name: 'Padel Arena Budapest',
  address: '1117 Budapest, Hunyadi János út 12.',
  isOpen: true,
  distanceKm: 4.2,
  rating: 4.8,
  reviewCount: 126
}, {
  id: 'c2',
  name: 'Városmajor Padel Club',
  address: '1122 Budapest, Városmajor utca 74.',
  isOpen: true,
  distanceKm: 6.9,
  rating: 4.6,
  reviewCount: 41
}, {
  id: 'c3',
  name: 'Tök Padel Center',
  address: '2073 Tök, Fő utca 2.',
  isOpen: false,
  distanceKm: 28.3,
  rating: 5,
  reviewCount: 9
}, {
  id: 'c4',
  name: 'Duna Padel Park',
  address: '2000 Szentendre, Dunakanyar körút 4.',
  isOpen: true,
  distanceKm: 31.7,
  rating: 4.4,
  reviewCount: 63
}];
const QUESTIONS = [{
  id: 'experience',
  question: 'Milyen szinten játszol?',
  subtitle: 'Akkor tartozol egy kategóriába, ha az alábbi állítások többsége igaz rád',
  variant: 'level',
  options: [{
    label: 'Kezdő',
    levelBadge: '1.0-2.0',
    description: 'Elsősorban arra törekszem, hogy pályán tartsam a labdát. Tenyeressel van valami eredmény, de a fonák és az adogatás ingadozós.',
    details: 'Általában fél évnél kevesebb tapasztalattal'
  }, {
    label: 'Réz',
    levelBadge: '2.0-3.0',
    description: 'A tenyeresem megbízható, a hátsó üvegről lassú labdákat visszajátszok. Bandajám még nincs, smash helyett inkább lobozok.',
    details: 'Általában fél-2 év tapasztalattal'
  }, {
    label: 'Bronz',
    levelBadge: '3.0-4.0',
    description: 'Tenyeres-fonák középtempón megvan, a hátsó üveg kényelmes. A bandajám megbízható, a vibora tanulása elkezdődött.',
    details: 'Általában 1-3 év, heti 1-2x, alkalmi versenyző'
  }, {
    label: 'Silver',
    levelBadge: '4.0-5.0',
    description: 'Bandajám magabiztos, a vibora meccsekben is megjelenik. Taktikusan, partneremmel összehangolva építem a pontokat.',
    details: 'Általában 3-5 év, heti 3-4x, rendszeres versenyző'
  }, {
    label: 'Gold',
    levelBadge: '5.0+',
    description: 'Bandaja, vibora, rulo, bajada mind megbízhatóan megy, a falakat fegyverként kezelem.',
    details: 'Általában 5+ év, edzésszerű program'
  }]
}, {
  id: 'style',
  question: 'Milyen a játékstílusod?',
  subtitle: 'Hogy érzed magad a pályán? Ez határozza meg leginkább, milyen ütő passzol hozzád.',
  variant: 'image',
  options: [{
    label: 'Védekező',
    image: `${A}/imagery/studio-racket.png`,
    description: 'Türelmes, hibákat csökkentesz, hosszú labdameneteket játszol',
    details: 'Hosszú nyél, középre tolt egyensúly, puha mag'
  }, {
    label: 'Univerzális',
    image: `${A}/imagery/studio-racket-ball.png`,
    description: 'Mindenhez kezdesz, ráérzel a pillanatra, kontroll és erő egyensúlyban',
    details: 'Hybrid mag, közepes sweet spot, ajánlott a többségnek'
  }, {
    label: 'Támadó',
    image: `${A}/imagery/studio-racket.png`,
    description: 'Robbanékony, kemény ütésekkel pontot szerzel, gyors reakció',
    details: 'Fejnehéz egyensúly, kemény mag, magas pop'
  }]
}, {
  id: 'priority',
  question: 'Mi a legfontosabb számodra?',
  subtitle: 'Válaszd ki az elsődleges prioritásodat',
  variant: 'icon',
  options: [{
    label: 'Kontroll',
    icon: 'target',
    description: 'Pontosság és megbízhatóság',
    details: 'Minden ütés oda megy, ahova akarom'
  }, {
    label: 'Erő',
    icon: 'sword',
    description: 'Maximális labdakimenet',
    details: 'Erős ütések, nyomásgyakorlás'
  }, {
    label: 'Kényelem',
    icon: 'heart',
    description: 'Kímélő a kézre',
    details: 'Rezgéselnyelés, hosszú játék'
  }]
}, {
  id: 'physical',
  question: 'Van fizikai korlátozásod?',
  subtitle: 'Ez befolyásolja az ajánlott súlyt és keménységet',
  variant: 'icon',
  options: [{
    label: 'Nincs korlátozás',
    icon: 'check',
    description: 'Fizikailag fit vagyok',
    details: 'Bármilyen súlyú ütőt használhatok'
  }, {
    label: 'Könnyű ütőt preferálok',
    icon: 'feather',
    description: 'Gyorsabb reakciók kellenek',
    details: 'Kevesebb erőkifejtés'
  }, {
    label: 'Könyök/csukló probléma',
    icon: 'warning',
    description: 'Sérülésmegelőző ütőt keresek',
    details: 'Maximális rezgéscsillapítás kell'
  }]
}, {
  id: 'budget',
  question: 'Mekkora a kereted?',
  subtitle: 'Az ár csak iránymutató — ennek függvényében szűkítjük a választékot.',
  variant: 'budget',
  options: [{
    label: 'Belépő',
    priceLabel: '0 – 50 000 Ft',
    description: 'Tanulóknak, alkalmi játékhoz'
  }, {
    label: 'Középszint',
    priceLabel: '50 – 75 000 Ft',
    description: 'Heti 1-2x játszóknak, jó ár-érték'
  }, {
    label: 'Haladó',
    priceLabel: '75 – 100 000 Ft',
    description: 'Komoly játékosoknak, prémium technológia'
  }, {
    label: 'Prémium',
    priceLabel: '100 000 Ft felett',
    description: 'Versenyzőknek, csúcskategória'
  }, {
    label: 'Top találatok',
    priceLabel: 'Nem az ár számít',
    description: 'A legjobb ütők, ár nem szempont'
  }]
}];
const fmtHUF = n => typeof n === 'number' ? n.toLocaleString('hu-HU').replace(/,/g, ' ') + ' Ft' : n;
Object.assign(window, {
  PM_ASSETS: A,
  PRODUCTS,
  CATEGORIES,
  COURTS,
  QUESTIONS,
  fmtHUF
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/data.jsx", error: String((e && e.message) || e) }); }

// video-download.js
try { (() => {
/* Közvetlen MP4-letöltés. A böngésző a download attribútumot külső
   domainen figyelmen kívül hagyja, ezért blobként hívjuk le a fájlt és
   úgy mentjük. Ha a lehívás elhasal (CORS/hálózat), visszaesik új lapra. */
document.addEventListener('click', async function (e) {
  var a = e.target.closest && e.target.closest('a.dl');
  if (!a) return;
  var href = a.getAttribute('href') || '';
  if (!/\.mp4(\?|$)/i.test(href)) return;
  e.preventDefault();
  var old = a.textContent;
  a.textContent = 'Letöltés…';
  a.style.pointerEvents = 'none';
  try {
    var r = await fetch(href);
    if (!r.ok) throw new Error('HTTP ' + r.status);
    var blob = await r.blob();
    var url = URL.createObjectURL(blob);
    var l = document.createElement('a');
    l.href = url;
    l.download = a.getAttribute('download') || 'video.mp4';
    document.body.appendChild(l);
    l.click();
    l.remove();
    setTimeout(function () {
      URL.revokeObjectURL(url);
    }, 5000);
  } catch (err) {
    console.error('video-download.js', err);
    window.open(href, '_blank', 'noopener');
  }
  a.textContent = old;
  a.style.pointerEvents = '';
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "video-download.js", error: String((e && e.message) || e) }); }

__ds_ns.CartLineItem = __ds_scope.CartLineItem;

__ds_ns.CategoryCard = __ds_scope.CategoryCard;

__ds_ns.ManiaPriceBox = __ds_scope.ManiaPriceBox;

__ds_ns.PriceBlock = __ds_scope.PriceBlock;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.QtyStepper = __ds_scope.QtyStepper;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.CourtCard = __ds_scope.CourtCard;

__ds_ns.AppHeader = __ds_scope.AppHeader;

__ds_ns.HeaderAction = __ds_scope.HeaderAction;

__ds_ns.MenuRow = __ds_scope.MenuRow;

__ds_ns.MenuSection = __ds_scope.MenuSection;

__ds_ns.ScreenHeader = __ds_scope.ScreenHeader;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.SegmentControl = __ds_scope.SegmentControl;

__ds_ns.TabBar = __ds_scope.TabBar;

__ds_ns.FeatureCta = __ds_scope.FeatureCta;

__ds_ns.ManiaPlusBanner = __ds_scope.ManiaPlusBanner;

__ds_ns.NoticeBanner = __ds_scope.NoticeBanner;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.BenefitRow = __ds_scope.BenefitRow;

__ds_ns.QuizOptionCard = __ds_scope.QuizOptionCard;

})();
