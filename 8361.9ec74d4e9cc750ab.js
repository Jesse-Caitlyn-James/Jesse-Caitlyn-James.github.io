"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8361],{8361:(q,p,y)=>{y.r(p),y.d(p,{startInputShims:()=>Z});var g=y(467),l=y(8476),T=y(909),m=y(4920),R=y(4379);y(8438);const I=new WeakMap,M=(e,t,s,o=0,r=!1)=>{I.has(e)!==s&&(s?k(e,t,o,r):G(e,t))},k=(e,t,s,o=!1)=>{const r=t.parentNode,n=t.cloneNode(!1);n.classList.add("cloned-input"),n.tabIndex=-1,o&&(n.disabled=!0),r.appendChild(n),I.set(e,n);const a="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${a}px,${s}px,0) scale(0)`},G=(e,t)=>{const s=I.get(e);s&&(I.delete(e),s.remove()),e.style.pointerEvents="",t.style.transform=""},C="input, textarea, [no-blur], [contenteditable]",Q=(e,t,s,o)=>{const r=e.top,n=e.bottom,i=t.top,_=i+15,c=Math.min(t.bottom,o-s)-50-n,f=_-r,u=Math.round(c<0?-c:f>0?-f:0),h=Math.min(u,r-i),w=Math.abs(h)/.3;return{scrollAmount:h,scrollDuration:Math.min(400,Math.max(150,w)),scrollPadding:s,inputSafeY:4-(r-_)}},U="$ionPaddingTimer",B=(e,t,s)=>{const o=e[U];o&&clearTimeout(o),t>0?e.style.setProperty("--keyboard-offset",`${t}px`):e[U]=setTimeout(()=>{e.style.setProperty("--keyboard-offset","0px"),s&&s()},120)},j=(e,t,s)=>{e.addEventListener("focusout",()=>{t&&B(t,0,s)},{once:!0})};let A=0;const x="data-ionic-skip-scroll-assist",V=(e,t,s,o,r,n,i,a=!1)=>{const _=n&&(void 0===i||i.mode===R.a.None);let L=!1;const c=void 0!==l.w?l.w.innerHeight:0,f=S=>{!1!==L?F(e,t,s,o,S.detail.keyboardHeight,_,a,c,!1):L=!0},u=()=>{L=!1,null===l.w||void 0===l.w||l.w.removeEventListener("ionKeyboardDidShow",f),e.removeEventListener("focusout",u)},h=function(){var S=(0,g.A)(function*(){t.hasAttribute(x)?t.removeAttribute(x):(F(e,t,s,o,r,_,a,c),null===l.w||void 0===l.w||l.w.addEventListener("ionKeyboardDidShow",f),e.addEventListener("focusout",u))});return function(){return S.apply(this,arguments)}}();return e.addEventListener("focusin",h),()=>{e.removeEventListener("focusin",h),null===l.w||void 0===l.w||l.w.removeEventListener("ionKeyboardDidShow",f),e.removeEventListener("focusout",u)}},K=e=>{document.activeElement!==e&&(e.setAttribute(x,"true"),e.focus())},F=function(){var e=(0,g.A)(function*(t,s,o,r,n,i,a=!1,_=0,L=!0){if(!o&&!r)return;const c=((e,t,s,o)=>{var r;const n=null!==(r=e.closest("ion-item,[ion-item]"))&&void 0!==r?r:e;return Q(n.getBoundingClientRect(),t.getBoundingClientRect(),s,o)})(t,o||r,n,_);if(o&&Math.abs(c.scrollAmount)<4)return K(s),void(i&&null!==o&&(B(o,A),j(s,o,()=>A=0)));if(M(t,s,!0,c.inputSafeY,a),K(s),(0,m.r)(()=>t.click()),i&&o&&(A=c.scrollPadding,B(o,A)),typeof window<"u"){let f;const u=function(){var S=(0,g.A)(function*(){void 0!==f&&clearTimeout(f),window.removeEventListener("ionKeyboardDidShow",h),window.removeEventListener("ionKeyboardDidShow",u),o&&(yield(0,T.c)(o,0,c.scrollAmount,c.scrollDuration)),M(t,s,!1,c.inputSafeY),K(s),i&&j(s,o,()=>A=0)});return function(){return S.apply(this,arguments)}}(),h=()=>{window.removeEventListener("ionKeyboardDidShow",h),window.addEventListener("ionKeyboardDidShow",u)};if(o){const S=yield(0,T.g)(o),w=S.scrollHeight-S.clientHeight;if(L&&c.scrollAmount>w-S.scrollTop)return"password"===s.type?(c.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",h)):window.addEventListener("ionKeyboardDidShow",u),void(f=setTimeout(u,1e3))}u()}});return function(s,o,r,n,i,a){return e.apply(this,arguments)}}(),Z=function(){var e=(0,g.A)(function*(t,s){if(void 0===l.d)return;const o="ios"===s,r="android"===s,n=t.getNumber("keyboardHeight",290),i=t.getBoolean("scrollAssist",!0),a=t.getBoolean("hideCaretOnScroll",o),_=t.getBoolean("inputBlurring",!1),L=t.getBoolean("scrollPadding",!0),c=Array.from(l.d.querySelectorAll("ion-input, ion-textarea")),f=new WeakMap,u=new WeakMap,h=yield R.K.getResizeMode(),S=function(){var v=(0,g.A)(function*(d){yield new Promise(P=>(0,m.c)(d,P));const O=d.shadowRoot||d,D=O.querySelector("input")||O.querySelector("textarea"),b=(0,T.f)(d),W=b?null:d.closest("ion-footer");if(D){if(b&&a&&!f.has(d)){const P=((e,t,s)=>{if(!s||!t)return()=>{};const o=a=>{(e=>e===e.getRootNode().activeElement)(t)&&M(e,t,a)},r=()=>M(e,t,!1),n=()=>o(!0),i=()=>o(!1);return(0,m.a)(s,"ionScrollStart",n),(0,m.a)(s,"ionScrollEnd",i),t.addEventListener("blur",r),()=>{(0,m.b)(s,"ionScrollStart",n),(0,m.b)(s,"ionScrollEnd",i),t.removeEventListener("blur",r)}})(d,D,b);f.set(d,P)}if("date"!==D.type&&"datetime-local"!==D.type&&(b||W)&&i&&!u.has(d)){const P=V(d,D,b,W,n,L,h,r);u.set(d,P)}}});return function(O){return v.apply(this,arguments)}}();_&&(()=>{let e=!0,t=!1;const s=document,o=()=>{t=!0},r=()=>{e=!0},n=i=>{if(t)return void(t=!1);const a=s.activeElement;if(!a||a.matches(C))return;const _=i.target;_!==a&&(_.matches(C)||_.closest(C)||(e=!1,setTimeout(()=>{e||a.blur()},50)))};(0,m.a)(s,"ionScrollStart",o),s.addEventListener("focusin",r,!0),s.addEventListener("touchend",n,!1)})();for(const v of c)S(v);l.d.addEventListener("ionInputDidLoad",v=>{S(v.detail)}),l.d.addEventListener("ionInputDidUnload",v=>{(v=>{if(a){const d=f.get(v);d&&d(),f.delete(v)}if(i){const d=u.get(v);d&&d(),u.delete(v)}})(v.detail)})});return function(s,o){return e.apply(this,arguments)}}()}}]);