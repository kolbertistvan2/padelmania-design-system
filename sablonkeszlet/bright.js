/* ── bright board: coral panel with a tilted lower edge on white, centred type, the cut-out product hanging over the edge.
   Loaded after gen.js; registers itself as a variant. Landscape: coral left column, product right. */
function brightBoard(g,p,{eyebrow,kicker,title,big,bigOld,unit,unitAbove,panelFirst,panelLabel,panelValue,foot,cut,cut2}){
 const w=g.w,h=g.h,land=g.land,cx=land?g.pad+Math.round(w*.27):w/2;
 const panelW=land?Math.round(w*.56):w,panelH=land?h:Math.round(h*(g.id==='s916'?.62:.7)),tilt=land?0:Math.round(w*.035);
 const colW=land?panelW-2*g.pad:w-2*g.pad,sq=g.id==='s11'?.8:1;
 const T2=(slot,text,fs,color,o={})=>{const wd=Math.min(colW,Math.ceil(tw(text,fs,{w:o.w||800,ls:o.ls||0,up:o.up}))+8),hh=Math.ceil(fs*(o.lh||1));return {slot,h:hh,w:wd,fs,html:(x,y)=>box(slot,x-wd/2,y,wd,hh,`font:${o.w||800} ${fs}px/${o.lh||1} var(--font-sans);color:${color};letter-spacing:${o.ls||0}em;${o.up?'text-transform:uppercase;':''}white-space:nowrap;text-align:center`,text)};};
 const eyeFs=g.minFs,titleFs=fit(title,Math.round((land?72:150*sq)*g.k),colW,{w:800,ls:.02,up:true},g.minFs),unitW=unit?tw(strip(unit),Math.round(g.minFs*1.1),{w:600})+g.minFs:0,bigFs=panelFirst?titleFs:fit(big,Math.round((land?112:250*sq)*g.k),colW*.86-unitW,{w:800,ls:-.03},60);
 const items=[];
 const stamp=panelFirst&&eyebrow?eyebrow:null;
 if(eyebrow&&!stamp)items.push(T2('deadline',eyebrow,eyeFs,C.deep,{ls:.12,up:true,w:700}));
 if(kicker)items.push(T2('kicker',kicker,Math.round(titleFs*.55),C.deep,{ls:.06,up:true,lh:1}));
 items.push(T2('headline',title,titleFs,C.white,{ls:.02,up:true,lh:1.02}));
 if(bigOld&&!unit)unit='<s>'+bigOld+'</s>';
 const unitFs=Math.max(g.minFs,Math.round(bigFs*.18)),bigItem=T2('price',big,bigFs,C.cream,{ls:-.03,lh:.9});
 items.push({...bigItem,html:(x,y)=>bigItem.html(x,y)+(unit?box('price-unit',x+bigItem.w/2+8,y+Math.round(bigFs*.52),Math.ceil(tw(unit,unitFs,{w:600}))+6,Math.ceil(unitFs*1.2),`font:600 ${unitFs}px/1.2 var(--font-sans);color:${C.deep};white-space:nowrap`,unit):'')});
 const plFs=Math.round(g.minFs*.95*sq),pvFs=Math.round(g.minFs*1.15*sq),plW=Math.round(Math.max(tw(panelLabel,plFs,{w:800,ls:.06,up:true}),tw(panelValue,pvFs,{w:800}))+plFs*2.6),plH=Math.round(plFs+pvFs+plFs*1.6);
 const panelItem={slot:'code',h:plH,w:plW,html:(x,y)=>box('code',x-plW/2,y,plW,plH,`background:${C.deep};border-radius:${Math.round(plH*.3)}px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${Math.round(plFs*.25)}px`,`<span style="font:800 ${plFs}px/1 var(--font-sans);color:${C.coral};letter-spacing:.06em;text-transform:uppercase">${panelLabel}</span><span style="font:800 ${pvFs}px/1 var(--font-sans);color:#fff;letter-spacing:.01em;white-space:nowrap"> ${panelValue}</span>`)};
 if(panelFirst){const pi=items.findIndex(x=>x.slot==='price');items.splice(pi<0?items.length:pi,0,panelItem);}else items.push(panelItem);
 if(unitAbove){const pi=items.findIndex(x=>x.slot==='price');items.splice(pi+1,0,T2('price-unit',unitAbove,g.minFs,C.deep,{ls:.12,up:true,w:700}));}
 const gaps=[Math.round(16*g.k),Math.round(4*g.k),Math.round(8*g.k),Math.round(26*g.k)];
 const gapAt=k=>{const names=items.map(i=>i.slot);const tight=g.id==='s11'?.55:1;const map={deadline:16,kicker:4,headline:(panelFirst?18:8)*tight,code:(panelFirst?22:0)*tight,'price-unit':26*tight,price:panelFirst?18:8};return Math.round((map[names[k]]||0)*g.k*(land?.6:1));};
 const total=items.reduce((s,i,k)=>s+i.h+(k<items.length-1?gapAt(k):0),0);
 const footFs=Math.max(Math.ceil(g.minFs*.9),26),footH=Math.ceil(footFs*1.35*(land?1:2)),footTop=h-footH-Math.round((land?16:g.id==='s11'?14:22)*g.k);
 const topY=land?Math.round((h-total-(foot?footH+Math.round(16*g.k):0))/2):g.top+Math.round(g.logoH*.72)+Math.round((g.id==='s11'?8:22)*g.k);
 // sunburst: three white strokes fanning out on each side of the price
 /* sunburst from the post: three strokes per side, all leaning outward, longest on top, shortest (near-horizontal) at the bottom */
 const burst=(y,bigW)=>{const s=Math.max(6,bigFs*.07),out=[];const cy=y+bigFs*.44,ox0=bigW/2+bigFs*.12;
  const strokes=[[-.30,-.46,.08,.12],[-.10,-.20,.12,.08],[.10,.06,.14,.04]]; // shorter, chunkier — the post's marks are stubs, not rays
  for(const dir of[-1,1])for(const[y0,y1,x0,x1]of strokes){const x1p=cx+dir*(ox0+bigFs*x0),x2p=cx+dir*(ox0+bigFs*(x0+x1)),y1p=cy+bigFs*y0,y2p=cy+bigFs*y1;
   out.push(`<line x1="${x1p.toFixed(1)}" y1="${y1p.toFixed(1)}" x2="${x2p.toFixed(1)}" y2="${y2p.toFixed(1)}" stroke="#fff" stroke-width="${s.toFixed(1)}" stroke-linecap="round"/>`);}
  return `<svg data-slot="burst" style="position:absolute;left:0;top:0" width="${w}" height="${h}">${out.join('')}</svg>`;};
 let y=topY,text='';items.forEach((it,k)=>{/* burst temporarily off */text+=it.html(cx,y);y+=it.h+(k<items.length-1?gapAt(k):0);});
 // product: over the panel edge (portrait) / right column (landscape). Two cut-outs fan out like the post when cut2 is given.
 const pw=land?Math.round(w*.38):Math.round(w*.86),pTop=land?Math.round(h*.04):y-Math.round(4*g.k),ph=land?h-2*pTop:footTop-Math.round(6*g.k)-pTop;
 const px=land?w-g.pad-pw:Math.round(w/2-pw/2),sh=`filter:drop-shadow(0 ${Math.round(24*g.k)}px ${Math.round(40*g.k)}px rgba(2,30,37,.35))`;
 const img=(src,style)=>`<img src="${src}" alt="" style="position:absolute;object-fit:contain;display:block;${sh};${style}">`;
 const prod=box('product-image',px,pTop,pw,ph,'',cut2?img(cut||p.cut,`left:6%;top:4%;width:48%;height:92%;transform:rotate(-9deg);transform-origin:50% 90%`)+img(cut2,`left:46%;top:0;width:48%;height:92%;transform:rotate(8deg);transform-origin:50% 90%`):img(cut||p.cut,`left:0;top:0;width:100%;height:100%`));
 // tilted stamp on the product's upper-right shoulder (product boards only): teal-deep pill, coral caps
 let stampEl='';if(stamp){const sFs=Math.round(g.minFs*1.35*sq),sW=Math.ceil(tw(stamp,sFs,{w:800,ls:.08,up:true}))+Math.round(sFs*1.9),sH=Math.round(sFs*2.2);
  // portrait: on the white ground just below the coral edge, on the product's right shoulder; landscape: right column, upper right, clamped inside
  const sx=land?Math.min(px+pw-sW+Math.round(sW*.1),w-g.pad-sW):Math.min(Math.round(px+pw*.64),w-g.pad-sW+Math.round(sW*.04)),sy=land?pTop+Math.round(ph*.08):Math.max(pTop+Math.round(ph*.06),panelH-tilt+Math.round(18*g.k));
  stampEl=box('sticker',sx,sy,sW,sH,`background:${C.deep};color:${C.coral};border-radius:9999px;display:flex;align-items:center;justify-content:center;font:800 ${sFs}px/1 var(--font-sans);letter-spacing:.08em;text-transform:uppercase;white-space:nowrap;transform:rotate(-10deg);box-shadow:0 ${Math.round(10*g.k)}px ${Math.round(24*g.k)}px rgba(2,30,37,.28)`,stamp);}
 const footEl=foot?box('footnote',g.pad,footTop,land?colW:w-2*g.pad,footH,`font:700 ${footFs}px/1.35 var(--font-sans);text-align:${land?'left':'center'};text-transform:uppercase;letter-spacing:.03em;color:${C.deep};overflow:hidden`,foot):'';
 const panel=land?box('background',0,0,panelW,h,`background:${C.coral}`):`<svg data-slot="background" style="position:absolute;left:0;top:0" width="${w}" height="${h}"><polygon points="0,0 ${w},0 ${w},${panelH-tilt} 0,${panelH}" fill="${C.coral}"/></svg>`;
 const lh=Math.round(g.logoH*(g.id==='s11'?.58:.72)),lg=land?box('logo',w-g.pad-lh*2,g.top,lh*2,lh,'',`<img src="${A}logos/padel-mania-logo-1-colour.svg" alt="Padel Mánia" style="height:100%;width:auto;display:block">`):box('logo',Math.round(w/2-lh),g.top,lh*2,lh,'',`<img src="${A}logos/padel-mania-logo-white.svg" alt="Padel Mánia" style="height:100%;width:auto;display:block">`);
 return box('page',0,0,w,h,'background:#fff')+panel+lg+text+prod+stampEl+footEl;}

/* bright recipes per template: which product, what the panel says */
globalThis.BRIGHT={
 /* product templates: name → teal-deep panel with the NORMAL price → big cream Mánia+ price with its caps label. The panel separates name from figure. */
 promo:g=>brightBoard(g,PRODUCTS.coello,{eyebrow:'Új szezon',title:'Head Coello Pro',panelFirst:true,panelLabel:'Normál ár',panelValue:ft(PRODUCTS.coello.price),unitAbove:'Mánia+ tagoknak',big:ft(PRODUCTS.coello.member),foot:'<span style="color:'+C.coral+'">Mánia+ tagság</span> 1500 Ft / hó, hűségidő nélkül'}),
 highlight:g=>brightBoard(g,PRODUCTS.vertex,{eyebrow:'Bestseller',title:'Siux Electra Pro',panelFirst:true,panelLabel:'Normál ár',panelValue:ft(PRODUCTS.vertex.price),unitAbove:'Mánia+ tagoknak',big:ft(PRODUCTS.vertex.member),foot:'<span style="color:'+C.coral+'">A legtöbbet vásárolt</span> ütőnk ebben a hónapban'}),
 anchor:g=>brightBoard(g,PRODUCTS.coello,{eyebrow:'Csak október 5-ig',title:'Head Coello Pro',panelFirst:true,panelLabel:'Eredeti ár',panelValue:'<s>'+ft(PRODUCTS.coello.orig)+'</s>',unitAbove:'Mánia+ tagoknak',big:ft(PRODUCTS.coello.member),foot:'<span style="color:'+C.coral+'">Mánia+ tagság</span> 1500 Ft / hó, hűségidő nélkül'}),
 news:g=>brightBoard(g,PRODUCTS.metalbone,{eyebrow:'Új',title:'Xcalion Unum M1',panelFirst:true,panelLabel:'Normál ár',panelValue:ft(PRODUCTS.metalbone.price),unitAbove:'Mánia+ tagoknak',big:ft(PRODUCTS.metalbone.member),foot:'<span style="color:'+C.coral+'">Most érkezett</span> a webshopba'}),
 coupon:g=>brightBoard(g,null,{eyebrow:'Szeptember 9–20',kicker:'Minden',title:'Padel labda',big:'990 Ft',unit:'/ tubus',panelLabel:'Kuponkód',panelValue:'„LABDA”',foot:'<span style="color:'+C.coral+'">Váltsd be</span> első vásárlásod során!<br>Max. 3 tubus labdára használható fel.',cut:IMG+'cut/wilson-premier-padel-labda.png',cut2:IMG+'cut/head-pro-labda.png'}),
};
