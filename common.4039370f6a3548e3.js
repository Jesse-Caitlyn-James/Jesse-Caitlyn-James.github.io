"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2076],{4556:(b,_,a)=>{a.d(_,{c:()=>e});var f=a(4261),l=a(1086),i=a(8607);const e=(t,c)=>{let s,n;const y=(u,E,m)=>{if(typeof document>"u")return;const g=document.elementFromPoint(u,E);g&&c(g)&&!g.disabled?g!==s&&(r(),w(g,m)):r()},w=(u,E)=>{s=u,n||(n=s);const m=s;(0,f.w)(()=>m.classList.add("ion-activated")),E()},r=(u=!1)=>{if(!s)return;const E=s;(0,f.w)(()=>E.classList.remove("ion-activated")),u&&n!==s&&s.click(),s=void 0};return(0,i.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:u=>y(u.currentX,u.currentY,l.a),onMove:u=>y(u.currentX,u.currentY,l.b),onEnd:()=>{r(!0),(0,l.h)(),n=void 0}})}},8438:(b,_,a)=>{a.d(_,{g:()=>l});var f=a(8476);const l=()=>{if(void 0!==f.w)return f.w.Capacitor}},5572:(b,_,a)=>{a.d(_,{c:()=>f,i:()=>l});const f=(i,e,t)=>"function"==typeof t?t(i,e):"string"==typeof t?i[t]===e[t]:Array.isArray(e)?e.includes(i):i===e,l=(i,e,t)=>void 0!==i&&(Array.isArray(i)?i.some(c=>f(c,e,t)):f(i,e,t))},5083:(b,_,a)=>{a.d(_,{i:()=>f});const f=l=>l&&""!==l.dir?"rtl"===l.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},3126:(b,_,a)=>{a.r(_),a.d(_,{startFocusVisible:()=>e});const f="ion-focused",i=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],e=t=>{let c=[],s=!0;const n=t?t.shadowRoot:document,y=t||document.body,w=o=>{c.forEach(d=>d.classList.remove(f)),o.forEach(d=>d.classList.add(f)),c=o},r=()=>{s=!1,w([])},u=o=>{s=i.includes(o.key),s||w([])},E=o=>{if(s&&void 0!==o.composedPath){const d=o.composedPath().filter(v=>!!v.classList&&v.classList.contains("ion-focusable"));w(d)}},m=()=>{n.activeElement===y&&w([])};return n.addEventListener("keydown",u),n.addEventListener("focusin",E),n.addEventListener("focusout",m),n.addEventListener("touchstart",r,{passive:!0}),n.addEventListener("mousedown",r),{destroy:()=>{n.removeEventListener("keydown",u),n.removeEventListener("focusin",E),n.removeEventListener("focusout",m),n.removeEventListener("touchstart",r),n.removeEventListener("mousedown",r)},setFocus:w}}},1086:(b,_,a)=>{a.d(_,{I:()=>l,a:()=>s,b:()=>n,c:()=>c,d:()=>w,h:()=>y});var l,r,i,f=a(8438);(r=l||(l={})).Heavy="HEAVY",r.Medium="MEDIUM",r.Light="LIGHT",function(r){r.Success="SUCCESS",r.Warning="WARNING",r.Error="ERROR"}(i||(i={}));const e={getEngine(){const r=(0,f.g)();if(null!=r&&r.isPluginAvailable("Haptics"))return r.Plugins.Haptics},available(){if(!this.getEngine())return!1;const u=(0,f.g)();return"web"!==(null==u?void 0:u.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},impact(r){const u=this.getEngine();u&&u.impact({style:r.style})},notification(r){const u=this.getEngine();u&&u.notification({type:r.type})},selection(){this.impact({style:l.Light})},selectionStart(){const r=this.getEngine();r&&r.selectionStart()},selectionChanged(){const r=this.getEngine();r&&r.selectionChanged()},selectionEnd(){const r=this.getEngine();r&&r.selectionEnd()}},t=()=>e.available(),c=()=>{t()&&e.selection()},s=()=>{t()&&e.selectionStart()},n=()=>{t()&&e.selectionChanged()},y=()=>{t()&&e.selectionEnd()},w=r=>{t()&&e.impact(r)}},909:(b,_,a)=>{a.d(_,{I:()=>c,a:()=>w,b:()=>t,c:()=>E,d:()=>g,f:()=>r,g:()=>y,i:()=>n,p:()=>m,r:()=>o,s:()=>u});var f=a(467),l=a(4920),i=a(4929);const t="ion-content",c=".ion-content-scroll-host",s=`${t}, ${c}`,n=d=>"ION-CONTENT"===d.tagName,y=function(){var d=(0,f.A)(function*(v){return n(v)?(yield new Promise(p=>(0,l.c)(v,p)),v.getScrollElement()):v});return function(p){return d.apply(this,arguments)}}(),w=d=>d.querySelector(c)||d.querySelector(s),r=d=>d.closest(s),u=(d,v)=>n(d)?d.scrollToTop(v):Promise.resolve(d.scrollTo({top:0,left:0,behavior:v>0?"smooth":"auto"})),E=(d,v,p,P)=>n(d)?d.scrollByPoint(v,p,P):Promise.resolve(d.scrollBy({top:p,left:v,behavior:P>0?"smooth":"auto"})),m=d=>(0,i.b)(d,t),g=d=>{if(n(d)){const v=d,p=v.scrollY;return v.scrollY=!1,p}return d.style.setProperty("overflow","hidden"),!0},o=(d,v)=>{n(d)?d.scrollY=v:d.style.removeProperty("overflow")}},3992:(b,_,a)=>{a.d(_,{a:()=>f,b:()=>E,c:()=>s,d:()=>m,e:()=>j,f:()=>c,g:()=>g,h:()=>i,i:()=>l,j:()=>h,k:()=>M,l:()=>n,m:()=>r,n:()=>o,o:()=>w,p:()=>t,q:()=>e,r:()=>C,s:()=>D,t:()=>u,u:()=>p,v:()=>P,w:()=>y,x:()=>d,y:()=>v});const f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='64'/><path d='M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM248 315.85l-51.79-51.79a2 2 0 00-3.39 1.69 64.11 64.11 0 0053.49 53.49 2 2 0 001.69-3.39zM264 196.15L315.87 248a2 2 0 003.4-1.69 64.13 64.13 0 00-53.55-53.55 2 2 0 00-1.72 3.39z'/><path d='M491 273.36a32.2 32.2 0 00-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.54 226.54 0 00-71.82 11.79 4 4 0 00-1.56 6.63l47.24 47.24a4 4 0 003.82 1.05 96 96 0 01116 116 4 4 0 001.05 3.81l67.95 68a4 4 0 005.4.24 343.81 343.81 0 0067.24-77.4zM256 352a96 96 0 01-93.3-118.63 4 4 0 00-1.05-3.81l-66.84-66.87a4 4 0 00-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.22 238.22 0 0072.64-11.55 4 4 0 001.61-6.64l-47.47-47.46a4 4 0 00-3.81-1.05A96 96 0 01256 352z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",P="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",j="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},243:(b,_,a)=>{a.d(_,{c:()=>e,g:()=>t});var f=a(8476),l=a(4920),i=a(4929);const e=(s,n,y)=>{let w,r;if(void 0!==f.w&&"MutationObserver"in f.w){const g=Array.isArray(n)?n:[n];w=new MutationObserver(o=>{for(const d of o)for(const v of d.addedNodes)if(v.nodeType===Node.ELEMENT_NODE&&g.includes(v.slot))return y(),void(0,l.r)(()=>u(v))}),w.observe(s,{childList:!0,subtree:!0})}const u=g=>{var o;r&&(r.disconnect(),r=void 0),r=new MutationObserver(d=>{y();for(const v of d)for(const p of v.removedNodes)p.nodeType===Node.ELEMENT_NODE&&p.slot===n&&m()}),r.observe(null!==(o=g.parentElement)&&void 0!==o?o:g,{subtree:!0,childList:!0})},m=()=>{r&&(r.disconnect(),r=void 0)};return{destroy:()=>{w&&(w.disconnect(),w=void 0),m()}}},t=(s,n,y)=>{const w=null==s?0:s.toString().length,r=c(w,n);if(void 0===y)return r;try{return y(w,n)}catch(u){return(0,i.a)("Exception in provided `counterFormatter`.",u),r}},c=(s,n)=>`${s} / ${n}`},1622:(b,_,a)=>{a.r(_),a.d(_,{KEYBOARD_DID_CLOSE:()=>t,KEYBOARD_DID_OPEN:()=>e,copyVisualViewport:()=>C,keyboardDidClose:()=>d,keyboardDidOpen:()=>g,keyboardDidResize:()=>o,resetKeyboardAssist:()=>w,setKeyboardClose:()=>m,setKeyboardOpen:()=>E,startKeyboardAssist:()=>r,trackViewportChanges:()=>P});var f=a(4379);a(8438),a(8476);const e="ionKeyboardDidShow",t="ionKeyboardDidHide";let s={},n={},y=!1;const w=()=>{s={},n={},y=!1},r=h=>{if(f.K.getEngine())u(h);else{if(!h.visualViewport)return;n=C(h.visualViewport),h.visualViewport.onresize=()=>{P(h),g()||o(h)?E(h):d(h)&&m(h)}}},u=h=>{h.addEventListener("keyboardDidShow",M=>E(h,M)),h.addEventListener("keyboardDidHide",()=>m(h))},E=(h,M)=>{v(h,M),y=!0},m=h=>{p(h),y=!1},g=()=>{const h=(s.height-n.height)*n.scale;return!y&&s.width===n.width&&h>150},o=h=>y&&!d(h),d=h=>y&&n.height===h.innerHeight,v=(h,M)=>{const D=M?M.keyboardHeight:h.innerHeight-n.height,j=new CustomEvent(e,{detail:{keyboardHeight:D}});h.dispatchEvent(j)},p=h=>{const M=new CustomEvent(t);h.dispatchEvent(M)},P=h=>{s=Object.assign({},n),n=C(h.visualViewport)},C=h=>({width:Math.round(h.width),height:Math.round(h.height),offsetTop:h.offsetTop,offsetLeft:h.offsetLeft,pageTop:h.pageTop,pageLeft:h.pageLeft,scale:h.scale})},4379:(b,_,a)=>{a.d(_,{K:()=>e,a:()=>i});var l,t,i,f=a(8438);(t=l||(l={})).Unimplemented="UNIMPLEMENTED",t.Unavailable="UNAVAILABLE",function(t){t.Body="body",t.Ionic="ionic",t.Native="native",t.None="none"}(i||(i={}));const e={getEngine(){const t=(0,f.g)();if(null!=t&&t.isPluginAvailable("Keyboard"))return t.Plugins.Keyboard},getResizeMode(){const t=this.getEngine();return null!=t&&t.getResizeMode?t.getResizeMode().catch(c=>{if(c.code!==l.Unimplemented)throw c}):Promise.resolve(void 0)}}},4731:(b,_,a)=>{a.d(_,{c:()=>c});var f=a(467),l=a(8476),i=a(4379);const e=s=>{if(void 0===l.d||s===i.a.None||void 0===s)return null;const n=l.d.querySelector("ion-app");return null!=n?n:l.d.body},t=s=>{const n=e(s);return null===n?0:n.clientHeight},c=function(){var s=(0,f.A)(function*(n){let y,w,r,u;const E=function(){var v=(0,f.A)(function*(){const p=yield i.K.getResizeMode(),P=void 0===p?void 0:p.mode;y=()=>{void 0===u&&(u=t(P)),r=!0,m(r,P)},w=()=>{r=!1,m(r,P)},null===l.w||void 0===l.w||l.w.addEventListener("keyboardWillShow",y),null===l.w||void 0===l.w||l.w.addEventListener("keyboardWillHide",w)});return function(){return v.apply(this,arguments)}}(),m=(v,p)=>{n&&n(v,g(p))},g=v=>{if(0===u||u===t(v))return;const p=e(v);return null!==p?new Promise(P=>{const h=new ResizeObserver(()=>{p.clientHeight===u&&(h.disconnect(),P())});h.observe(p)}):void 0};return yield E(),{init:E,destroy:()=>{null===l.w||void 0===l.w||l.w.removeEventListener("keyboardWillShow",y),null===l.w||void 0===l.w||l.w.removeEventListener("keyboardWillHide",w),y=w=void 0},isKeyboardVisible:()=>r}});return function(y){return s.apply(this,arguments)}}()},7838:(b,_,a)=>{a.d(_,{c:()=>l});var f=a(467);const l=()=>{let i;return{lock:function(){var t=(0,f.A)(function*(){const c=i;let s;return i=new Promise(n=>s=n),void 0!==c&&(yield c),s});return function(){return t.apply(this,arguments)}}()}}},9001:(b,_,a)=>{a.d(_,{c:()=>i});var f=a(8476),l=a(4920);const i=(e,t,c)=>{let s;const n=()=>!(void 0===t()||void 0!==e.label||null===c()),w=()=>{const u=t();if(void 0===u)return;if(!n())return void u.style.removeProperty("width");const E=c().scrollWidth;if(0===E&&null===u.offsetParent&&void 0!==f.w&&"IntersectionObserver"in f.w){if(void 0!==s)return;const m=s=new IntersectionObserver(g=>{1===g[0].intersectionRatio&&(w(),m.disconnect(),s=void 0)},{threshold:.01,root:e});m.observe(u)}else u.style.setProperty("width",.75*E+"px")};return{calculateNotchWidth:()=>{n()&&(0,l.r)(()=>{w()})},destroy:()=>{s&&(s.disconnect(),s=void 0)}}}},7895:(b,_,a)=>{a.d(_,{S:()=>l});const l={bubbles:{dur:1e3,circles:9,fn:(i,e,t)=>{const c=i*e/t-i+"ms",s=2*Math.PI*e/t;return{r:5,style:{top:32*Math.sin(s)+"%",left:32*Math.cos(s)+"%","animation-delay":c}}}},circles:{dur:1e3,circles:8,fn:(i,e,t)=>{const c=e/t,s=i*c-i+"ms",n=2*Math.PI*c;return{r:5,style:{top:32*Math.sin(n)+"%",left:32*Math.cos(n)+"%","animation-delay":s}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(i,e)=>({r:6,style:{left:32-32*e+"%","animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:8,fn:(i,e,t)=>({y1:14,y2:26,style:{transform:`rotate(${360/t*e+(e<t/2?180:-180)}deg)`,"animation-delay":i*e/t-i+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(i,e,t)=>({y1:12,y2:20,style:{transform:`rotate(${360/t*e+(e<t/2?180:-180)}deg)`,"animation-delay":i*e/t-i+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(i,e,t)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":i*e/t-i+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(i,e,t)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":i*e/t-i+"ms"}})}}},7166:(b,_,a)=>{a.r(_),a.d(_,{createSwipeBackGesture:()=>t});var f=a(4920),l=a(5083),i=a(8607);a(1970);const t=(c,s,n,y,w)=>{const r=c.ownerDocument.defaultView;let u=(0,l.i)(c);const m=p=>u?-p.deltaX:p.deltaX;return(0,i.createGesture)({el:c,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:p=>(u=(0,l.i)(c),(p=>{const{startX:C}=p;return u?C>=r.innerWidth-50:C<=50})(p)&&s()),onStart:n,onMove:p=>{const C=m(p)/r.innerWidth;y(C)},onEnd:p=>{const P=m(p),C=r.innerWidth,h=P/C,M=(p=>u?-p.velocityX:p.velocityX)(p),j=M>=0&&(M>.2||P>C/2),O=(j?1-h:h)*C;let k=0;if(O>5){const T=O/Math.abs(M);k=Math.min(T,540)}w(j,h<=0?.01:(0,f.j)(0,h,.9999),k)}})}},2935:(b,_,a)=>{a.d(_,{w:()=>f});const f=(e,t,c)=>{if(typeof MutationObserver>"u")return;const s=new MutationObserver(n=>{c(l(n,t))});return s.observe(e,{childList:!0,subtree:!0}),s},l=(e,t)=>{let c;return e.forEach(s=>{for(let n=0;n<s.addedNodes.length;n++)c=i(s.addedNodes[n],t)||c}),c},i=(e,t)=>{if(1!==e.nodeType)return;const c=e;return(c.tagName===t.toUpperCase()?[c]:Array.from(c.querySelectorAll(t))).find(n=>n.value===c.value)}},8495:(b,_,a)=>{a.d(_,{_:()=>E});var t,f=a(177),l=a(4341),i=a(4742),e=a(4438);function c(m,g){if(1&m){const o=e.RV6();e.j41(0,"ion-col",13)(1,"ion-card",4),e.bIt("click",function(){const v=e.eBV(o).$implicit,p=e.XpG(2);return e.Njj(p.projectChange(v))}),e.nrm(2,"img",14),e.j41(3,"ion-card-header")(4,"ion-card-title"),e.EFF(5),e.k0s()(),e.j41(6,"ion-card-content"),e.EFF(7),e.k0s()()()}if(2&m){const o=g.$implicit;e.R7$(2),e.FS9("src",o.img,e.B4B),e.FS9("alt",o.title),e.R7$(3),e.SpI(" ",o.title," "),e.R7$(2),e.SpI(" ",o.desc," ")}}function s(m,g){if(1&m&&(e.j41(0,"ion-row",11),e.DNE(1,c,8,4,"ion-col",12),e.k0s()),2&m){const o=e.XpG();e.R7$(),e.Y8G("ngForOf",o.projects)}}function n(m,g){if(1&m&&(e.j41(0,"ion-card"),e.nrm(1,"img",16),e.k0s()),2&m){const o=e.XpG().$implicit;e.R7$(),e.FS9("src",o,e.B4B)}}function y(m,g){if(1&m&&(e.j41(0,"ion-col",15),e.DNE(1,n,2,1,"ion-card",8),e.k0s()),2&m){const o=e.XpG();e.R7$(),e.Y8G("ngIf",null==o.currentProject?null:o.currentProject.gallery)}}function w(m,g){if(1&m&&(e.j41(0,"div"),e.EFF(1,"Git Repo: "),e.j41(2,"a",17),e.EFF(3),e.k0s()()),2&m){const o=e.XpG();e.R7$(2),e.FS9("href",null==o.currentProject?null:o.currentProject.repo,e.B4B),e.R7$(),e.JRh(null==o.currentProject?null:o.currentProject.desc)}}function r(m,g){if(1&m&&(e.j41(0,"div"),e.EFF(1,"Game Page: "),e.j41(2,"a",17),e.EFF(3),e.k0s()()),2&m){const o=e.XpG();e.R7$(2),e.FS9("href",null==o.currentProject?null:o.currentProject.url,e.B4B),e.R7$(),e.JRh(null==o.currentProject?null:o.currentProject.title)}}function u(m,g){if(1&m&&(e.j41(0,"li")(1,"a",17),e.EFF(2),e.k0s()()),2&m){const o=g.$implicit;e.R7$(),e.FS9("href",o[1],e.B4B),e.R7$(),e.SpI("@",o[0],"")}}class E{constructor(){this.projects=[{title:"Xeno Hunters",id:"0",img:"assets/jam2023.PNG",desc:"Game Jam 2023 - p5.js: Xeno Hunters",url:"https://nickbland.github.io/GameJam2023/",repo:"https://github.com/NickBland/GameJam2023",team:[["NickBland","https://www.github.com/NickBland"],["Alice-Bui","https://www.github.com/Alice-Bui"],["Me","https://github.com/Jesse-Caitlyn-James"]],details:"This is our team's project for the 2023 JamesJam. This year, the theme of the Game Jam was to create a game in similar nature to Homeworld (1999). In the JamesJam, groups are given two weeks to construct a game given the theme using P5.js. This project was my first instance of group development, due to this I quickly adapted my programming styles and communication methods to better work with the team. This was also my first experience with javascript/coding concepts beyond an introductory levle, such as classes and commonly used methods. This experience overall provided me with vital skills that improved my experience with future projects and team-based work."},{title:"Line Racer - WIP",id:"1",img:"assets/lineRacer.PNG",desc:"Game Jam 2024 - TAD: Line Racer",url:"https://jesse-caitlyn-james.github.io/TAD%20lineracer/",repo:"https://github.com/Jesse-Caitlyn-James/Jesse-Caitlyn-James.github.io/tree/main/TAD%20lineracer",team:[["Me","https://github.com/Jesse-Caitlyn-James"]],details:"This was an individual mini-project I worked on for the 2024 game jam. It is still a work in progress but is funtional in a pre-alpha state. The theme of the Jam was idle games. The concept behind this game was that racers move around a track slowly built out by the player while the player manages resources within the pitlane to repair cars. I'm using this project as a way to teach myself different methods of handling data being passed back and forth, as well as handling different events triggering under different circumstances."},{title:"Game Jam 2024",id:"2",img:"assets/jam2024.PNG",desc:"Game Jam 2024 - p5.js: Untitled",url:"https://jesse-caitlyn-james.github.io/Gamejam-Group5-2024/",repo:"https://github.com/Jesse-Caitlyn-James/Jesse-Caitlyn-James.github.io/tree/main/Gamejam-Group5-2024",team:[["PC4SH","https://github.com/PC4SH"],["Riley","https://github.com/Psychicbear"],["Me","https://github.com/Jesse-Caitlyn-James"]],details:"This is our team's project for the 2024 JamesJam. This year, the theme of the Game Jam was to create a game with the mixed themes idle and lanebattler. This year was a real test of our team's conviction as we could not dedicate as much time to the project as we would of liked. Due to this we focused more on handling the game state across different scenarios to preserve the idle aspect while still introducing a degree of strategy."},{title:"Destination Queensland",id:"3",img:"assets/IMS1-1.PNG",desc:"University Assignment 2024 - Rest API: jQuery + Ajax",gallery:["assets/IMS1-1.PNG","assets/IMS1-2.PNG","assets/IMS1-3.PNG"],team:[["Me","https://github.com/Jesse-Caitlyn-James"]],details:"This was a university assignment, the concept was to build a webpage that used the flickr api to display images relevant to tourism in queensland. The marking criteria was based on my ability to obtain the relevant images from flickr and use the correct data returned to display the image information. There was an extended criteria point that required me to add an extra web api that fit the theme. I decided to use the google maps api to convert a user selected location from the interactive map into a gallery of photos from that location received from flickr."},{title:"GameZone",id:"4",img:"assets/WAD1-1.PNG",desc:"University Assignment 2024 - PHP/Laravel",gallery:["assets/WAD1-1.PNG","assets/WAD1-2.PNG"],team:[["Me","https://github.com/Jesse-Caitlyn-James"]],details:"This was a university assignment, the concept was to build a laravel based webpage that allowed users to review products. My product theme I went with was games, this allows unverified users to create a review of the games available in the gallery. The main criteria for this assignment focused on using laravels input validation methods to ensure any inputs adhered to correct standards. The additional criteria for this task was to implement a custom feature that identified fake reviews. My method was to create a trust points system for users and posts, if a user posted too many low reviews their score would be lowered, same with if they failed any input validations."},{title:"Peer Testing Site",id:"5",img:"assets/WAD2-1.PNG",desc:"University Assignment 2024 - PHP/Laravel",gallery:["assets/WAD2-1.PNG","assets/WAD2-2.PNG","assets/WAD2-3.PNG","assets/WAD2-4.PNG","assets/WAD2-5.PNG"],team:[["Me","https://github.com/Jesse-Caitlyn-James"]],details:"This was a univeristy assignment, the concept was to build a laravel based webpage that would allow teachers to create courses and assignments that students would then be able to peer review each other to complete the assignments. The main criteria for this task was to use laravel to the fullest to create a professionally functional webpage that could be used in real world contexts."}],this.currentProject=null}ngOnInit(){}projectChange(g){let o=document.getElementById("projectContainer"),d=document.getElementById("projectFrame");null!==g?null==o||o.setAttribute("style","display: block;"):(null==o||o.setAttribute("style","display: none;"),null==d||d.setAttribute("src","")),null!==d&&(null!=(null==g?void 0:g.url)?(d.setAttribute("src",null==g?void 0:g.url),d.style.display="block"):d.style.display="none"),this.currentProject=g}}(t=E).\u0275fac=function(g){return new(g||t)},t.\u0275cmp=e.VBU({type:t,selectors:[["app-project-component"]],standalone:!0,features:[e.aNF],decls:27,vars:8,consts:[["class","ion-justify-content-center ion-margin",4,"ngIf"],["id","projectContainer",1,"ion-justify-content-center",2,"display","none"],["size","large"],["slot","end"],[3,"click"],["frameborder","0","id","projectFrame",2,"width","100%","height","830px"],[1,"ion-justify-content-center"],["size","10","size-md","6",4,"ngFor","ngForOf"],[4,"ngIf"],[2,"list-style","none"],[4,"ngFor","ngForOf"],[1,"ion-justify-content-center","ion-margin"],["size","9","size-md","3","class","project",4,"ngFor","ngForOf"],["size","9","size-md","3",1,"project"],[3,"src","alt"],["size","10","size-md","6"],[3,"src"],[3,"href"]],template:function(g,o){1&g&&(e.DNE(0,s,2,1,"ion-row",0),e.j41(1,"ion-row",1)(2,"ion-header")(3,"ion-toolbar")(4,"ion-title",2),e.EFF(5),e.k0s(),e.j41(6,"ion-buttons",3)(7,"ion-button",4),e.bIt("click",function(){return o.projectChange(null)}),e.EFF(8," Back "),e.k0s()()()(),e.j41(9,"ion-card"),e.nrm(10,"iframe",5),e.j41(11,"ion-row",6),e.DNE(12,y,2,1,"ion-col",7),e.k0s(),e.j41(13,"ion-card-header")(14,"ion-title"),e.EFF(15),e.k0s()(),e.j41(16,"ion-card-content")(17,"div"),e.DNE(18,w,4,2,"div",8)(19,r,4,2,"div",8),e.k0s(),e.j41(20,"div"),e.EFF(21," Teammates: "),e.j41(22,"ul",9),e.DNE(23,u,3,2,"li",10),e.k0s()(),e.j41(24,"div"),e.EFF(25),e.nrm(26,"br"),e.k0s()()()()),2&g&&(e.Y8G("ngIf",!o.currentProject),e.R7$(5),e.JRh(null==o.currentProject?null:o.currentProject.title),e.R7$(7),e.Y8G("ngForOf",null==o.currentProject?null:o.currentProject.gallery),e.R7$(3),e.JRh(null==o.currentProject?null:o.currentProject.title),e.R7$(3),e.Y8G("ngIf",null==o.currentProject?null:o.currentProject.repo),e.R7$(),e.Y8G("ngIf",null==o.currentProject?null:o.currentProject.url),e.R7$(4),e.Y8G("ngForOf",null==o.currentProject?null:o.currentProject.team),e.R7$(2),e.SpI(" ",null==o.currentProject?null:o.currentProject.details," "))},dependencies:[i.bv,i.Jm,i.QW,i.b_,i.I9,i.ME,i.tN,i.hU,i.eU,i.ln,i.BC,i.ai,f.MD,f.Sq,f.bT,l.YN]})}}]);