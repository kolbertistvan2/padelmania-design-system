/* Padel Mánia sablonkészlet — generátor. run_script-ből: eval(await readFile('sablonkeszlet/gen.js')); await build();
   Minden elem abszolút px; méretosztály (.s11 .s45 .s34 .s916 .s191) + data-slot minden mezőn. */
const A='assets/', IMG='sablonkeszlet/img/';
/* Omnibus-sor („Elmúlt 30 nap legalacsonyabb ára”) — kapcsoló, alapból KI. Csak árcsökkentésnél kell. */
const OMNIBUS=false;
const C={teal:'#0B3C49',deep:'#021E25',sky:'#9CC9D5',coral:'#FF6B4A',cream:'#F5F1E8',sand:'#E5DCC5',white:'#FFFFFF'};
const SIZES={
 s11:{w:1080,h:1080,pad:60,top:60,safeB:1020,lab:'1:1 · 1080×1080',minPb:.40},
 s45:{w:1080,h:1350,pad:60,top:60,safeB:1290,lab:'4:5 · 1080×1350',minPb:.45},
 s34:{w:1080,h:1440,pad:60,top:60,safeB:1380,lab:'3:4 · 1080×1440',minPb:.45},
 s916:{w:1080,h:1920,pad:64,top:250,safeB:1585,lab:'9:16 · 1080×1920',minPb:.45},
 s191:{w:1200,h:628,pad:48,top:48,safeB:580,lab:'1.91:1 · 1200×628',minPb:.42}};
const PRODUCTS={
 coello:{name:'Head Coello Pro 2026',price:79990,member:67992,low30:84990,orig:89990,img:IMG+'studio-racket-ball.jpg',cut:IMG+'cut/head-coello-pro-2026.png'},
 vertex:{name:'Bullpadel Vertex 04',price:94990,member:80742,img:IMG+'studio-racket.jpg',cut:IMG+'cut/siux-electra-pro-2026.png'},
 metalbone:{name:'Adidas Metalbone 3.4',price:119990,member:101992,img:IMG+'studio-bag-racket-balls.jpg',cut:IMG+'cut/xcalion-unum-m1.png'},
 balls:{name:'Head Padel Pro S+ labda (3 db)',price:2990,member:2542,img:IMG+'studio-balls.jpg',cut:IMG+'cut/head-pro-labda.png'},
 grip:{name:'Wilson Pro Padel overgrip',price:6990,member:5942,img:IMG+'studio-racket.jpg',cut:IMG+'cut/wilson-pro-padel-overgrip.png'}};
const SCENE=[IMG+'tactile-arms-racket-ball.jpg',IMG+'tactile-hand-racket.jpg',IMG+'campaign-male.jpg',IMG+'tactile-ball-net.jpg'];
const ft=n=>n.toLocaleString('hu-HU').replace(/\u00a0|,/g,' ')+' Ft';
const strip=s=>s.replace(/<[^>]+>/g,'');

/* ── text measure (Inter estimate) ─────────────────────────── */
function em(ch,bold){if(ch===' ')return .26;if(ch==='%')return bold?.9:.86;if(/[iljtfr.,:;'!|]/.test(ch))return bold?.33:.3;if(/[mwMW]/.test(ch))return bold?.9:.84;if(/[0-9]/.test(ch))return bold?.64:.6;if(ch!==ch.toLowerCase())return bold?.7:.66;return bold?.6:.56;}
function tw(t,fs,o={}){const s=strip(o.up?t.toUpperCase():t);let e=0;for(const ch of s)e+=em(ch,(o.w||700)>=600)+(o.ls||0);return e*fs*1.05;}
function wrap(t,fs,W,o){const out=[];for(const p of t.split('\n')){let cur='';for(const wd of p.split(' ')){const c=cur?cur+' '+wd:wd;if(tw(c,fs,o)<=W||!cur)cur=c;else{out.push(cur);cur=wd;}}out.push(cur);}return out;}
function fit(t,fs,W,o,min=8){const w=tw(t,fs,o);return w<=W?fs:Math.max(min,Math.floor(fs*W/w));}

/* ── geometry ──────────────────────────────────────────────── */
function G(id){const s=SIZES[id],k=s.w/1080,land=id==='s191';
 const g={id,...s,k,land,minFs:Math.ceil(30*k),ctaH:Math.ceil(110*k),ctaFs:Math.ceil(44*k),logoH:id==='s916'?120:land?84:Math.round(104*k)};
 g.dead={x:0.7*s.w,y:id==='s916'?s.safeB-0.15*(s.safeB-s.top):0.85*s.h};
 g.ctaY=s.safeB-g.ctaH; g.gap=Math.round(30*k); g.colW=land?600-s.pad:s.w-2*s.pad;
 g.pb=land?{x:640,y:48,w:512,h:532}:{x:s.pad,y:s.top+g.logoH+g.gap,w:s.w-2*s.pad,h:0};
 return g;}

/* ── emitters ──────────────────────────────────────────────── */
const box=(slot,x,y,w,h,extra='',inner='')=>`<div${slot?` data-slot="${slot}"`:''} style="position:absolute;left:${Math.round(x)}px;top:${Math.round(y)}px;width:${Math.round(w)}px;height:${Math.round(h)}px;${extra}">${inner}</div>`;
/* text item: {h,w,html(x,y),re(W)} — re() re-wraps to a narrower column (dead zone) */
function T(slot,text,g,o,W){W=W||o.W||g.colW;const fs=Math.max(o.min===false?0:g.minFs,Math.round(o.fs)),lh=o.lh||1.1,opts={w:o.w||700,ls:o.ls||0,up:o.up};
 const lines=o.nowrap?text.split('\n'):wrap(text,fs,W,opts),h=Math.ceil(lines.length*fs*lh)+Math.ceil(fs*(o.pad||.08)),wid=lines.length===1?Math.min(W,Math.ceil(tw(text,fs,opts))+6):(o.nowrap?Math.min(W,Math.ceil(Math.max(...lines.map(l=>tw(l,fs,opts))))+6):W);
 const css=`font:${o.w||700} ${fs}px/${lh} var(--font-sans);color:${o.color||C.white};letter-spacing:${o.ls?o.ls+'em':'-.02em'};${o.up?'text-transform:uppercase;':''}white-space:nowrap;${o.extra||''}`;
 return {slot,h,w:wid,fs,opt:o.opt,keep:o.keep,tight:o.tight,html:(x,y)=>box(slot,x,y,wid,h,css,lines.join('<br>')),re:W2=>T(slot,text,g,o,W2)};}
const big=(slot,text,g,fs,W)=>{const f=fit(text,Math.max(90,fs),W||g.colW,{w:700,ls:-.05},40);return T(slot,text,g,{fs:f,lh:1.0,ls:-.05,color:C.coral,nowrap:true,pad:0,keep:true,tight:true});};
const caps=(slot,text,g,color=C.sky,fs,opt,keep,tight)=>T(slot,text,g,{fs:fs||g.minFs,lh:1,ls:.15,up:true,w:700,color,opt,keep,tight});
const pname=(g,p,f=1)=>T('product-name',p.name,g,{fs:Math.round((g.land?40:54)*g.k*f),lh:1.05,w:700,ls:-.02,color:C.white,keep:true});
const line=(slot,text,g,color=C.white,o={})=>T(slot,text,g,{fs:o.fs||g.minFs,lh:1.25,w:o.w||600,color,opt:o.opt,keep:o.keep,nowrap:o.nowrap,tight:o.tight});
const omni=(g,p)=>OMNIBUS&&p.low30?line('omnibus',`Elmúlt 30 nap legalacsonyabb ára: ${ft(p.low30)}`,g,C.sky,{opt:true}):null;
function memberBlock(g,p,f,{omnibus=true,normal=true,orig=false,name=true,keepFoot=false,bigFs}={}){
 /* three emphasised levels: white product name · coral Mánia+ price (with the small sky tag glued on top) · CTA. Everything else is a faint footnote. */
 const nm=name?pname(g,p,f):null,tag=caps('member-qualifier','Mánia+ tagoknak',g,C.sky,g.minFs,false,true);
 const bigP=big('member-price',ft(p.member),g,(bigFs||(g.land?120:190))*f),tgap=Math.round(6*g.k);
 const price={slot:'member-price',keep:true,tight:false,h:tag.h+tgap+bigP.h,w:Math.max(tag.w,bigP.w),html:(x,y)=>tag.html(x,y)+bigP.html(x,y+tag.h+tgap),re:W2=>{const b2=bigP.re?bigP.re(W2):bigP;return {...price,h:tag.h+tgap+b2.h,w:Math.max(tag.w,b2.w),html:(x,y)=>tag.html(x,y)+b2.html(x,y+tag.h+tgap)};}};
 const head=nm;
 const parts=[];const prices=[];if(normal)prices.push(`Normál ár ${ft(p.price)}`);if(orig)prices.push(`eredeti ár <s>${ft(p.orig)}</s>`);
 /* the two prices share a line only when the line fits the column; a narrow (two-column) board stacks them */
 if(prices.length){prices[0]=prices[0][0].toUpperCase()+prices[0].slice(1);const one=prices.join(', ');parts.push(g.land&&orig?`Eredeti ár <s>${ft(p.orig)}</s>`:tw(one.replace(/<\/?s>/g,''),g.minFs,{w:500})<=g.colW?one:prices.map((s,i)=>i?s[0].toUpperCase()+s.slice(1):s).join('\n'));}
 if(!(g.land&&orig))parts.push('Mánia+ tagság 1500 Ft / hó');
 const foot=T('member-condition',parts.join('\n'),g,{fs:g.minFs,lh:1.3,w:500,color:'rgba(255,255,255,.72)',keep:keepFoot,nowrap:true});if(keepFoot)foot.slot='anchor-foot';
 const it=[head,price,foot];if(omnibus)it.push(omni(g,p));return it.filter(Boolean);}

/* stack: bottom-anchored above CTA; items touching the dead zone are re-wrapped to its left edge */
function stack(items,g,x,bottom,gap){const gp=(i,idx)=>idx===0?0:(items[idx].tight?Math.round(6*g.k):Math.round(gap*(g.land?1:1.6)));const total=()=>items.reduce((s,i,idx)=>s+i.h+gp(i,idx),0);
 for(let pass=0;pass<3;pass++){let y=bottom-total(),changed=false;
  items=items.map((i,idx)=>{y+=gp(i,idx);const hit=y+i.h>g.dead.y&&x+i.w>g.dead.x;const out=hit&&i.re?i.re(Math.floor(g.dead.x-x-8)):i;if(out!==i)changed=true;y+=i.h;return out;});if(!changed)break;}
 const h=total();let y=bottom-h,html='';items.forEach((i,idx)=>{y+=gp(i,idx);html+=i.html(x,y);y+=i.h;});return {html,top:bottom-h,h};}

/* fit the stack: shrink type (f) then drop optional lines until the product box keeps its minimum */
/* hard constraint: type never shrinks below .85; then optional lines drop (last first), then non-essential lines, then keep lines footnote → headline → name. Price and stats never drop. */
function fitStack(g,makeItems,bottom,minTop){const dropped=new Set(),gap=Math.round(14*g.k),mk=f=>makeItems(f,g).filter(Boolean).filter(i=>!dropped.has(i.slot));
 let f=1,items=mk(f),s=stack(items,g,g.pad,bottom,gap);
 const ORDER=['member-condition','omnibus','subline','headline','author','product-name','anchor-foot'];
 for(let n=0;n<40&&s.top<minTop;n++){
  const optIdx=items.map(x=>x.opt).lastIndexOf(true),freeIdx=items.findIndex(x=>!x.keep&&!x.opt);
  if(f>.85)f-=.05;else if(optIdx>=0)dropped.add(items[optIdx].slot);else if(freeIdx>=0)dropped.add(items[freeIdx].slot);else{const k=ORDER.find(sl=>items.some(x=>x.slot===sl));if(k)dropped.add(k);else break;}
  items=mk(f);s=stack(items,g,g.pad,bottom,gap);}
 return s;}

function ground(g,scene,photo,bandBottom){const {w,h}=g;let o=`<div data-slot="background" style="position:absolute;inset:0;background:linear-gradient(180deg,${C.teal} 0%,${C.deep} 100%)"></div>`;
 if(scene==='full'){o+=box('background-photo',0,0,w,h,'overflow:hidden',`<img src="${photo}" alt="" style="width:100%;height:100%;object-fit:cover;object-position:${g.land?'70% center':'center 30%'}">`)+box('',0,0,w,h,'background:rgba(2,30,37,.28)');
  o+=g.land?box('',0,0,w*.7,h,'background:linear-gradient(90deg,rgba(2,30,37,.97) 0%,rgba(2,30,37,.93) 55%,rgba(2,30,37,0) 100%)'):box('',0,Math.round(h*.3),w,Math.round(h*.7),'background:linear-gradient(0deg,rgba(2,30,37,.97) 0%,rgba(2,30,37,.93) 40%,rgba(2,30,37,.6) 70%,rgba(2,30,37,0) 100%)');return o;}
 if(scene==='scene'){const bh=g.land?h:bandBottom;o+=box('scene-photo',0,0,w,bh,'overflow:hidden',`<img src="${photo}" alt="" style="width:100%;height:100%;object-fit:cover;filter:blur(14px) saturate(.9);transform:scale(1.08)">`)+box('',0,0,w,bh,'background:rgba(2,30,37,.45)');
  o+=g.land?box('',0,0,w*.62,h,'background:linear-gradient(90deg,rgba(2,30,37,.97) 0%,rgba(2,30,37,.93) 70%,rgba(2,30,37,0) 100%)'):box('',0,bh-Math.round(220*g.k),w,h-bh+Math.round(220*g.k),'background:linear-gradient(0deg,rgba(2,30,37,.97) 0%,rgba(2,30,37,.97) 45%,rgba(2,30,37,0) 100%)');}
 else if(g.land)o+=box('',0,0,w*.62,h,'background:linear-gradient(90deg,rgba(2,30,37,.85) 60%,rgba(2,30,37,0) 100%)');
 return o;}
const logo=(g,plus)=>box('logo',g.pad,g.top,g.logoH*2,g.logoH,'',`<img src="${A}logos/${plus?'padel-mania-plus-white':'padel-mania-logo-white'}.svg" alt="Padel Mánia" style="height:100%;width:auto;display:block;filter:drop-shadow(0 3px 16px rgba(2,30,37,.6))">`);
const tile=(g,p,b,scene)=>box('product-image',b.x,b.y,b.w,b.h,`border-radius:${Math.round(28*g.k)}px;overflow:hidden;background:#fff;box-shadow:${scene?'0 40px 80px rgba(2,30,37,.65)':'0 24px 60px rgba(2,30,37,.5)'}`,`<img src="${p.img}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;display:block">`);
function sticker(g,text,slot='sticker'){const fs=Math.max(g.minFs,Math.round(34*g.k)),w=Math.ceil(tw(text,fs,{w:700,ls:.06,up:true}))+fs*1.4,h=Math.round(fs*1.75);const right=g.land?g.pb.x-g.gap:g.w-g.pad;let x=right-w,y=g.top+(g.logoH-h)/2;if(x<g.pad+g.logoH*2+g.gap){x=g.pad;y=g.top+g.logoH+Math.round(12*g.k);}
 return box(slot,x,y,w,h,`background:${C.coral};border-radius:9999px;box-shadow:0 12px 44px rgba(2,30,37,.5);display:flex;align-items:center;justify-content:center;font:700 ${fs}px/1 var(--font-sans);letter-spacing:.06em;text-transform:uppercase;color:${C.deep}`,text);}
const ARROW='<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
function cta(g,label){const fs=g.ctaFs,maxW=Math.floor(g.w*.62),w=Math.min(maxW,Math.ceil(tw(label,fs,{w:700}))+fs*2.7);
 return box('cta',g.pad,g.ctaY,w,g.ctaH,`background:${C.coral};border-radius:${Math.round(18*g.k)}px;display:flex;align-items:center;justify-content:space-between;gap:.5em;padding:0 ${Math.round(fs*.8)}px;box-sizing:border-box;font:700 ${fs}px/1 var(--font-sans);letter-spacing:-.01em;color:${C.deep};white-space:nowrap`,`<span>${label}</span>${ARROW}`);}

/* product board: logo → tile → text stack → CTA. The tile takes the space the stack leaves, never less than the size minimum.
   variant: 'tile' (teal alap, álló csempe jobbra) · 'scene' (elmosott fotó a csempe mögött) · 'full' (a termékfotó az egész banner háttere, 990-es nyelv) */
function productBoard(g,scene,p,photo,{stickerText,items,ctaLabel='Megnézem a webshopban',plus=false,tileHtml}){
 const bottom=g.ctaY-g.gap,full=scene==='full',twoCol=!full&&(g.id==='s11'||g.land),stickerSlot=arguments[4].stickerSlot;
 /* every size but 9:16: text column left, portrait tile right (rackets are tall); the tile runs from the logo row to the CTA */
 const tileW=twoCol&&!g.land?Math.round(g.w*.42):0;
 if(twoCol&&!g.land)g={...g,colW:g.w-2*g.pad-tileW-g.gap};
 const pbMin0=g.id==='s916'?Math.ceil(g.minPb*(g.safeB-g.top)):Math.ceil(g.minPb*g.h);
 /* portrait: the tile may give up to 5 points of its minimum height if the stack cannot otherwise keep the product name */
 const pbMin=(!g.land&&!twoCol&&!full)?Math.ceil((g.minPb-.05)*(g.id==='s916'?(g.safeB-g.top):g.h)):pbMin0;
 const stickerBelow=stickerText&&g.land&&(g.pb.x-g.gap-(Math.ceil(tw(stickerText,Math.max(g.minFs,Math.round(34*g.k)),{w:700,ls:.06,up:true}))+Math.max(g.minFs,Math.round(34*g.k))*1.4))<g.pad+g.logoH*2+g.gap;
 const headerH=g.logoH+(stickerBelow?Math.round(12*g.k)+Math.round(Math.max(g.minFs,Math.round(34*g.k))*1.75):0);
 const minTop=(g.land||full||twoCol)?g.top+headerH+g.gap:g.pb.y+pbMin+g.gap;
 const s=fitStack(g,items,bottom,minTop);
 let pb=g.land?g.pb:twoCol?{x:g.w-g.pad-tileW,y:g.pb.y,w:tileW,h:bottom-g.pb.y}:{...g.pb,h:Math.max(pbMin,s.top-g.gap-g.pb.y)};
 const overlap=!full&&!twoCol&&!g.land&&s.top<pb.y+pb.h;
 const bandBottom=g.land?g.h:pb.y+pb.h+Math.round(60*g.k);
 return ground(g,scene,full?(p?p.img:photo):photo,bandBottom)+(full?'':(tileHtml?tileHtml(pb):tile(g,p,pb,scene)))+(overlap?box('',0,s.top-Math.round(140*g.k),g.w,g.h-s.top+Math.round(140*g.k),'background:linear-gradient(0deg,rgba(2,30,37,.97) 0%,rgba(2,30,37,.95) 55%,rgba(2,30,37,0) 100%)'):'')+logo(g,plus)+(stickerText?sticker(g,stickerText,stickerSlot):'')+s.html+cta(g,ctaLabel);}

const H=(g,t,f=1)=>T('headline',t,g,{fs:Math.max(g.land?g.minFs:44*g.k,(g.land?40:54)*f),lh:1.06,ls:-.025,tight:true,keep:!g.land});

const TPL={
 promo:{name:'Termékpromó',dom:'Mánia+ ár',build:(g,sc)=>{const p=PRODUCTS.coello;return productBoard(g,sc,p,SCENE[0],{items:(f,g)=>{const [e,pr,fo]=memberBlock(g,p,f);return [e,pr,H(g,'Kontroll, ami versenyt nyer',f),fo];}});}},
 highlight:{name:'Termékkiemelés',dom:'Mánia+ ár',build:(g,sc)=>{const p=PRODUCTS.vertex;return productBoard(g,sc,p,SCENE[1],{stickerText:'Bestseller',items:(f,g)=>{const [e,pr,fo]=memberBlock(g,p,f,{omnibus:false});return [e,pr,H(g,'A hónap legkeresettebb ütője',f),fo];}});}},
 anchor:{name:'Árhorgony',dom:'Mánia+ ár',build:(g,sc)=>{const p=PRODUCTS.coello;
  /* landscape has no room for a pill above the stack: the deadline becomes the first (coral) footnote line instead */
  return productBoard(g,sc,p,SCENE[2],{stickerText:g.land?undefined:'Csak október 5-ig',stickerSlot:'deadline',items:(f,g)=>{const [e,pr,fo]=memberBlock(g,p,f,{orig:true,keepFoot:true,normal:false,bigFs:g.land?92:160});return g.land?[e,pr,{...fo,html:(x,y)=>T('deadline','Csak október 5-ig',g,{fs:g.minFs,lh:1.3,w:700,color:C.coral,nowrap:true}).html(x,y)+fo.html(x,y+Math.ceil(g.minFs*1.3)),h:fo.h+Math.ceil(g.minFs*1.3)}]:[e,pr,fo];},ctaLabel:'Kérem az akciós áron'});}},
 news:{name:'Újdonság',dom:'Mánia+ ár',build:(g,sc)=>{const p=PRODUCTS.metalbone;return productBoard(g,sc,p,SCENE[0],{stickerText:'Új',items:(f,g)=>{const [e,pr,fo]=memberBlock(g,p,f,{omnibus:false});return [e,pr,H(g,'Megérkezett a 2026-os Metalbone',f),fo];},ctaLabel:'Megnézem az újdonságot'});}},
 numbers:{name:'Számokban',dom:'3 statisztika',build:(g,sc)=>{const p=PRODUCTS.vertex,stats=[['370 g','súly'],['12K','karbon'],['+18%','ütőerő']];
  const statRow=(W,f)=>{if(g.land||W<600){const vf=g.land?Math.ceil(44*g.k):Math.round(56*g.k),rh=Math.round(vf*(g.land?1.4:1.55));return {slot:'stats',keep:true,h:rh*3,w:W,html:(x,y)=>stats.map(([v,l],i)=>box('stat-'+(i+1),x,y+i*rh,W,rh,`display:flex;align-items:center;gap:.5em;white-space:nowrap`,`<span style="font:700 ${vf}px/1 var(--font-sans);letter-spacing:-.04em;color:${C.coral};min-width:4.2em">${v}</span><span style="font:600 ${g.minFs}px/1 var(--font-sans);color:${C.sky};text-transform:uppercase;letter-spacing:.1em">${l}</span>`)).join('')};}
   const n=3,gp=Math.round(16*g.k),bw=Math.floor((W-gp*(n-1))/n),padX=Math.round(22*g.k),bh=Math.round(118*g.k);
   return {slot:'stats',keep:true,h:bh,w:W,html:(x,y)=>stats.map(([v,l],i)=>{const vf=fit(v,Math.round(64*g.k*f),bw-2*padX,{w:700,ls:-.04},g.minFs);return box('stat-'+(i+1),x+i*(bw+gp),y,bw,bh,`background:rgba(255,255,255,.06);border:2px solid rgba(156,201,213,.35);border-radius:${Math.round(20*g.k)}px;box-sizing:border-box;padding:${Math.round(16*g.k)}px ${padX}px;display:flex;flex-direction:column;justify-content:flex-end;gap:.12em`,`<span style="font:700 ${vf}px/.95 var(--font-sans);letter-spacing:-.04em;color:${C.coral}">${v}</span><span style="font:600 ${g.minFs}px/1.1 var(--font-sans);color:${C.sky};text-transform:uppercase;letter-spacing:.12em">${l}</span>`);}).join(''),re:W2=>statRow(W2,f)};};
  return productBoard(g,sc,p,SCENE[3],{items:(f,g)=>{const [e,pr,fo]=memberBlock(g,p,f,{omnibus:false,bigFs:g.land?undefined:140});
   /* landscape: the stats are the declared hero — the Mánia+ price becomes one small line so the three figures survive */
   if(g.land)return [e,statRow(g.colW,f),T('member-price',`Mánia+ tagoknak ${ft(p.member)}`,g,{fs:g.minFs,lh:1.3,w:600,color:C.coral,keep:true})];
   return [e,statRow(g.colW,f),pr,fo];}});}},
 review:{name:'Vélemény',dom:'Idézet',build:(g,sc)=>{const p=PRODUCTS.coello,sf=Math.round(40*g.k),star=`<svg viewBox="0 0 24 24" width="${sf}" height="${sf}" fill="${C.coral}"><path d="M12 2l3.1 6.6 7.1.9-5.2 5 1.4 7.1L12 18.2 5.6 21.6 7 14.5l-5.2-5 7.1-.9z"/></svg>`;
  const stars={slot:'stars',keep:true,h:sf,w:sf*5.4,html:(x,y)=>box('stars',x,y,sf*5.4,sf,'display:flex;gap:.1em',star.repeat(5))};
  return productBoard(g,sc,p,SCENE[1],{items:(f,g)=>[stars,T('quote',g.land?'„Két hét után már nem tudom letenni. Pontos és könnyű.”':'„Két hét után már nem tudom letenni. Pontos, könnyű, és a hátsó üvegről is visszahozza.”',g,{fs:(g.land?38:50)*f,lh:1.1,ls:-.02,w:600,keep:true}),T('author',`Kovács Bence, ellenőrzött vásárló\n${p.name}`,g,{fs:g.minFs,lh:1.3,w:500,color:C.sky,nowrap:true})],ctaLabel:'Megnézem az ütőt'});}},
 beforeafter:{name:'Előtte–utána',dom:'Két fotó',noFull:true,build:(g,sc)=>{
  const panes=pb=>{const gp=Math.round(16*g.k),hw=g.land?pb.w:(pb.w-gp)/2,hh=g.land?(pb.h-gp)/2:pb.h;
   const pane=(slot,img,lab,x,y)=>{const fs=g.minFs,lw=Math.ceil(tw(lab,fs,{w:700,ls:.1,up:true}))+fs*1.2;return box(slot,x,y,hw,hh,`border-radius:${Math.round(24*g.k)}px;overflow:hidden;box-shadow:0 24px 60px rgba(2,30,37,.5)`,`<img src="${img}" alt="" style="width:100%;height:100%;object-fit:cover;display:block">`)+box(slot+'-label',x+gp,y+gp,lw,fs*1.7,`background:${C.coral};color:${C.deep};border-radius:9999px;display:flex;align-items:center;justify-content:center;font:700 ${fs}px/1 var(--font-sans);letter-spacing:.1em;text-transform:uppercase`,lab);};
   return g.land?pane('before',IMG+'tactile-hand-racket.jpg','Előtte',pb.x,pb.y)+pane('after',IMG+'tactile-arms-racket-ball.jpg','Utána',pb.x,pb.y+hh+gp):pane('before',IMG+'tactile-hand-racket.jpg','Előtte',pb.x,pb.y)+pane('after',IMG+'tactile-arms-racket-ball.jpg','Utána',pb.x+hw+gp,pb.y);};
  const p=PRODUCTS.grip;return productBoard(g,sc,p,SCENE[2],{tileHtml:panes,items:(f,g)=>{const [e,pr,fo]=memberBlock(g,p,f,{omnibus:false});return [e,pr,line('subline','Hexagon markolat 30 perc játék után, a vásárlónk saját fotója',g,C.sky,{opt:true}),fo];},ctaLabel:'Megnézem a gripeket'});}},
};

/* ── page ──────────────────────────────────────────────────── */
async function build(){
 const ids=Object.keys(SIZES);
 let css=`html,body{margin:0}body{background:var(--surface-sunken);font-family:var(--font-sans);padding:40px;color:var(--text-primary)}h1{font:700 24px/1.2 var(--font-sans);color:var(--text-brand);margin:0 0 6px}.lead{font:400 15px/1.5 var(--font-sans);color:var(--text-label);margin:0 0 24px;max-width:900px}table{border-collapse:collapse;font:500 13px/1.4 var(--font-sans);margin:0 0 36px}td,th{border:1px solid var(--border-subtle);padding:6px 10px;text-align:left}th{background:#fff;color:var(--text-brand)}h2{font:700 14px/1 var(--font-sans);letter-spacing:.1em;text-transform:uppercase;color:var(--text-brand);margin:34px 0 4px}.sub{font:400 13px/1.4 var(--font-sans);color:var(--text-muted);margin:0 0 12px}.row{display:flex;gap:36px;align-items:flex-start;overflow-x:auto;padding-bottom:10px}.wrap{display:flex;flex-direction:column;gap:8px;flex-shrink:0}.tag{font:600 12px/1 var(--font-sans);letter-spacing:.08em;text-transform:uppercase;color:var(--text-muted)}.ad{position:relative;overflow:hidden;background:${C.teal}}.ad s{text-decoration-thickness:.09em}a{color:var(--text-action)}\n`;
 for(const id of ids){const s=SIZES[id],g=G(id);css+=`.ad.${id}{width:${s.w}px;height:${s.h}px;--pad:${s.pad}px;--min-fs:${g.minFs}px;--cta-h:${g.ctaH}px;--cta-fs:${g.ctaFs}px;--logo-h:${g.logoH}px;--safe-top:${s.top}px;--safe-bottom:${s.safeB}px;--dead-x:${Math.round(g.dead.x)}px;--dead-y:${Math.round(g.dead.y)}px}\n`;}
 let table=`<table><tr><th>Sablon</th><th>Domináns elem</th>${ids.map(i=>`<th>${SIZES[i].lab.split(' ')[0]} termékdoboz min.</th>`).join('')}</tr>`;
 for(const [k,t] of Object.entries(TPL))table+=`<tr><td>${t.name}</td><td>${t.dom}</td>${ids.map(i=>{const g=G(i);return `<td>${g.land?'≥ 42% szél. (43%)':i==='s916'?'≥ 40% a biztonságos zónából':i==='s11'?'≥ 40% mag.':'≥ 40% mag. (cél 45%)'}</td>`;}).join('')}</tr>`;
 table+='</table>';
 const VAR=[['full','— teljes fotó','A termékfotó az egész banner háttere, sötét teal átmenettel — a 990-es kampány nyelve.'],['tile','— egyszínű alap','Teal alap, a kivágott termék fehér csempén, a szöveg egy bal élen (1:1 és 1.91:1 kéthasábos, álló méreteken a csempe felül). Terméknév, eyebrow, ár, mondat, plusz egy apró lábjegyzet.']];
 let body='';
 const hasBright=typeof globalThis.BRIGHT!=='undefined',BRIGHT=globalThis.BRIGHT;
 for(const [k,t] of Object.entries(TPL)){for(const [sc,lab,sub] of VAR){if(sc==='full'&&t.noFull)continue;
  body+=`<h2>${t.name} ${lab}</h2><p class="sub">${sub}</p><div class="row">`;
  for(const id of ids){const g=G(id);body+=`<div class="wrap"><span class="tag">${SIZES[id].lab}</span><div class="ad ${id} tpl-${k} v-${sc}" id="${k}-${sc}-${id}">${t.build(g,sc)}</div></div>`;}
  body+='</div>';}
  if(hasBright&&BRIGHT[k]){body+=`<h2>${t.name} — bright</h2><p class="sub">Coral panel döntött alsó éllel fehér alapon, középre zárt, a kivágott termék kilóg a panelből — az Instagram-poszt nyelve.</p><div class="row">`;
   for(const id of ids){const g=G(id);body+=`<div class="wrap"><span class="tag">${SIZES[id].lab}</span><div class="ad ${id} tpl-${k} v-bright" id="${k}-bright-${id}">${BRIGHT[k](g)}</div></div>`;}
   body+='</div>';}}
 if(hasBright&&BRIGHT.coupon){body+=`<h2>Kupon/akció — bright</h2><p class="sub">A 990 Ft-os poszt újraépítve a rendszerben: dátumsor, kétszintű cím, cream óriás ár sunbursttel, teal-deep kódpanel, a tubus kilóg a panelből.</p><div class="row">`;
  for(const id of ids){const g=G(id);body+=`<div class="wrap"><span class="tag">${SIZES[id].lab}</span><div class="ad ${id} tpl-coupon v-bright" id="coupon-bright-${id}">${BRIGHT.coupon(g)}</div></div>`;}
  body+='</div>';}
 const html=`<!doctype html><html lang="hu"><head><meta charset="utf-8"><title>Padel Mánia sablonkészlet v1</title><link rel="stylesheet" href="styles.css"><style>${css}</style></head><body>
<h1>Padel Mánia sablonkészlet v1</h1>
<p class="lead">Minden sablon 5 fő méretben, két változatban (teljes fotó / egyszínű alap). Szövegszín csak fehér, coral, sky. Minden elem abszolút px, <code>data-slot</code> a mező nevével. Az Omnibus-sor (<code>OMNIBUS</code> kapcsoló a generátorban) alapból ki van kapcsolva. A fotók a <code>sablonkeszlet/img/</code> könnyített másolatai.</p>
${table}${body}
<script src="export-buttons.js"></script></body></html>`;
 await saveFile('Padel Mania sablonkeszlet v1.html',html);
 return Object.keys(TPL).length+' sablon × 2 × '+ids.length+' méret';
}
