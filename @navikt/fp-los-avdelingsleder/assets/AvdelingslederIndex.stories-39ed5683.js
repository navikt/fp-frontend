import{j as c}from"./jsx-runtime-9c4ae004.js";import{k as Ze}from"./index.es-352655e9.js";import{l as $e,c as C,b as Xe,q as en,y as nn,z as tn,A as an,E as ce,G as k,S as rn,t as sn,P as on,J as ln,a as F,U as dn,m as cn,K as un,Q as fn,j as En}from"./nb_NO-d1625de4.js";import{b as h,R as _,a as B,r as Ke}from"./fplosRestApi-beda4f04.js";import{r as s,R,b as pn}from"./index-1b03fe98.js";import{a as An,y as Y}from"./index.es-dcafba10.js";import{I as mn}from"./IkkeTilgangTilAvdelingslederPanel-2b3853f5.js";import{g as K,s as _n,r as Rn}from"./StoreValuesInLocalStorage-6ed602ef.js";import{F as vn}from"./FordelingAvBehandlingstypePanel-a2c5e147.js";import{T as bn}from"./TilBehandlingPanel-504a31ad.js";import{M as gn}from"./ManueltPaVentPanel-394a2393.js";import{O as Sn}from"./OppgaverPerForsteStonadsdagPanel-23c5bc22.js";import{O as yn}from"./OppgaverSomErApneEllerPaVentPanel-1e7853ca.js";import{L as hn}from"./LeggTilSaksbehandlerForm-6b015192.js";import{S as Pn}from"./SaksbehandlereTabell-9f8ff84c.js";import{E as Nn}from"./EndreSakslisterPanel-a381a432.js";import{R as Tn}from"./ReservasjonerTabell-325973c6.js";import{_ as P}from"./extends-98964cd2.js";import{r as In}from"./index-6fd5a17b.js";import{H as w}from"./Heading-603274ab.js";import{P as Ln}from"./Panel-add0b43c.js";import"./index.es-657e045f.js";import"./index.es-189ffba3.js";import"./index.es-eb6186af.js";import"./Provider-dbd6cb80.js";import"./Detail-ac630136.js";import"./useLosKodeverk-3c749e2b.js";import"./isSameOrAfter-48a89950.js";import"./isSameOrBefore-ea99da6c.js";import"./SletteSaksbehandlerModal-87985fdb.js";import"./GjeldendeSakslisterTabell-9d7d63f6.js";import"./SletteSakslisteModal-e1a0513d.js";import"./SaksbehandlereForSakslisteForm-00094b2c.js";import"./UtvalgskriterierForSakslisteForm-72b1b0b3.js";import"./BehandlingstypeVelger-a0bc7597.js";import"./AndreKriterierVelger-f1528b7c.js";import"./FagsakYtelseTypeVelger-476b292d.js";import"./SorteringVelger-ec7dc1e2.js";var On=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};const kn=s.forwardRef((e,t)=>{var{title:a,titleId:n}=e,r=On(e,["title","titleId"]);let o=$e();return o=a?n||"title-"+o:void 0,s.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:t,"aria-labelledby":o},r),a?s.createElement("title",{id:o},a):null,s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.53 5.97a.75.75 0 0 1 0 1.06L9.56 12l4.97 4.97a.75.75 0 1 1-1.06 1.06l-5.5-5.5a.75.75 0 0 1 0-1.06l5.5-5.5a.75.75 0 0 1 1.06 0Z",fill:"currentColor"}))}),$n=kn;var Kn=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};const Vn=s.forwardRef((e,t)=>{var{title:a,titleId:n}=e,r=Kn(e,["title","titleId"]);let o=$e();return o=a?n||"title-"+o:void 0,s.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:t,"aria-labelledby":o},r),a?s.createElement("title",{id:o},a):null,s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.47 5.97a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 0 1 0 1.06l-5.5 5.5a.75.75 0 1 1-1.06-1.06L14.44 12 9.47 7.03a.75.75 0 0 1 0-1.06Z",fill:"currentColor"}))}),xn=Vn;function T(e,t,{checkForDefaultPrevented:a=!0}={}){return function(r){if(e==null||e(r),a===!1||!r.defaultPrevented)return t==null?void 0:t(r)}}function ue(e,t=[]){let a=[];function n(o,l){const i=s.createContext(l),E=a.length;a=[...a,l];function d(u){const{scope:A,children:m,...p}=u,b=(A==null?void 0:A[e][E])||i,v=s.useMemo(()=>p,Object.values(p));return s.createElement(b.Provider,{value:v},m)}function f(u,A){const m=(A==null?void 0:A[e][E])||i,p=s.useContext(m);if(p)return p;if(l!==void 0)return l;throw new Error(`\`${u}\` must be used within \`${o}\``)}return d.displayName=o+"Provider",[d,f]}const r=()=>{const o=a.map(l=>s.createContext(l));return function(i){const E=(i==null?void 0:i[e])||o;return s.useMemo(()=>({[`__scope${e}`]:{...i,[e]:E}}),[i,E])}};return r.scopeName=e,[n,Gn(r,...t)]}function Gn(...e){const t=e[0];if(e.length===1)return t;const a=()=>{const n=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(o){const l=n.reduce((i,{useScope:E,scopeName:d})=>{const u=E(o)[`__scope${d}`];return{...i,...u}},{});return s.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])}};return a.scopeName=t.scopeName,a}function Dn(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function Ve(...e){return t=>e.forEach(a=>Dn(a,t))}function W(...e){return s.useCallback(Ve(...e),e)}const q=s.forwardRef((e,t)=>{const{children:a,...n}=e,r=s.Children.toArray(a),o=r.find(jn);if(o){const l=o.props.children,i=r.map(E=>E===o?s.Children.count(l)>1?s.Children.only(null):s.isValidElement(l)?l.props.children:null:E);return s.createElement(Z,P({},n,{ref:t}),s.isValidElement(l)?s.cloneElement(l,void 0,i):null)}return s.createElement(Z,P({},n,{ref:t}),a)});q.displayName="Slot";const Z=s.forwardRef((e,t)=>{const{children:a,...n}=e;return s.isValidElement(a)?s.cloneElement(a,{...Fn(n,a.props),ref:Ve(t,a.ref)}):s.Children.count(a)>1?s.Children.only(null):null});Z.displayName="SlotClone";const Cn=({children:e})=>s.createElement(s.Fragment,null,e);function jn(e){return s.isValidElement(e)&&e.type===Cn}function Fn(e,t){const a={...t};for(const n in t){const r=e[n],o=t[n];/^on[A-Z]/.test(n)?a[n]=(...i)=>{o==null||o(...i),r==null||r(...i)}:n==="style"?a[n]={...r,...o}:n==="className"&&(a[n]=[r,o].filter(Boolean).join(" "))}return{...e,...a}}function wn(e){const t=e+"CollectionProvider",[a,n]=ue(t),[r,o]=a(t,{collectionRef:{current:null},itemMap:new Map}),l=m=>{const{scope:p,children:b}=m,v=R.useRef(null),g=R.useRef(new Map).current;return R.createElement(r,{scope:p,itemMap:g,collectionRef:v},b)},i=e+"CollectionSlot",E=R.forwardRef((m,p)=>{const{scope:b,children:v}=m,g=o(i,b),y=W(p,g.collectionRef);return R.createElement(q,{ref:y},v)}),d=e+"CollectionItemSlot",f="data-radix-collection-item",u=R.forwardRef((m,p)=>{const{scope:b,children:v,...g}=m,y=R.useRef(null),j=W(p,y),I=o(d,b);return R.useEffect(()=>(I.itemMap.set(y,{ref:y,...g}),()=>void I.itemMap.delete(y))),R.createElement(q,{[f]:"",ref:j},v)});function A(m){const p=o(e+"CollectionConsumer",m);return R.useCallback(()=>{const v=p.collectionRef.current;if(!v)return[];const g=Array.from(v.querySelectorAll(`[${f}]`));return Array.from(p.itemMap.values()).sort((I,N)=>g.indexOf(I.ref.current)-g.indexOf(N.ref.current))},[p.collectionRef,p.itemMap])}return[{Provider:l,Slot:E,ItemSlot:u},A,n]}const Mn=globalThis!=null&&globalThis.document?s.useLayoutEffect:()=>{},Hn=pn["useId".toString()]||(()=>{});let Bn=0;function xe(e){const[t,a]=s.useState(Hn());return Mn(()=>{e||a(n=>n??String(Bn++))},[e]),e||(t?`radix-${t}`:"")}const Yn=["a","button","div","h2","h3","img","li","nav","ol","p","span","svg","ul"],$=Yn.reduce((e,t)=>{const a=s.forwardRef((n,r)=>{const{asChild:o,...l}=n,i=o?q:t;return s.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),s.createElement(i,P({},l,{ref:r}))});return a.displayName=`Primitive.${t}`,{...e,[t]:a}},{});function fe(e){const t=s.useRef(e);return s.useEffect(()=>{t.current=e}),s.useMemo(()=>(...a)=>{var n;return(n=t.current)===null||n===void 0?void 0:n.call(t,...a)},[])}function Ge({prop:e,defaultProp:t,onChange:a=()=>{}}){const[n,r]=qn({defaultProp:t,onChange:a}),o=e!==void 0,l=o?e:n,i=fe(a),E=s.useCallback(d=>{if(o){const u=typeof d=="function"?d(e):d;u!==e&&i(u)}else r(d)},[o,e,r,i]);return[l,E]}function qn({defaultProp:e,onChange:t}){const a=s.useState(e),[n]=a,r=s.useRef(n),o=fe(t);return s.useEffect(()=>{r.current!==n&&(o(n),r.current=n)},[n,r,o]),a}const Un=s.createContext(void 0);function De(e){const t=s.useContext(Un);return e||t||"ltr"}const Q="rovingFocusGroup.onEntryFocus",zn={bubbles:!1,cancelable:!0},Ee="RovingFocusGroup",[X,Ce,Jn]=wn(Ee),[Qn,je]=ue(Ee,[Jn]),[Wn,Zn]=Qn(Ee),Xn=s.forwardRef((e,t)=>s.createElement(X.Provider,{scope:e.__scopeRovingFocusGroup},s.createElement(X.Slot,{scope:e.__scopeRovingFocusGroup},s.createElement(et,P({},e,{ref:t}))))),et=s.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:a,orientation:n,loop:r=!1,dir:o,currentTabStopId:l,defaultCurrentTabStopId:i,onCurrentTabStopIdChange:E,onEntryFocus:d,...f}=e,u=s.useRef(null),A=W(t,u),m=De(o),[p=null,b]=Ge({prop:l,defaultProp:i,onChange:E}),[v,g]=s.useState(!1),y=fe(d),j=Ce(a),I=s.useRef(!1);return s.useEffect(()=>{const N=u.current;if(N)return N.addEventListener(Q,y),()=>N.removeEventListener(Q,y)},[y]),s.createElement(Wn,{scope:a,orientation:n,dir:m,loop:r,currentTabStopId:p,onItemFocus:s.useCallback(N=>b(N),[b]),onItemShiftTab:s.useCallback(()=>g(!0),[])},s.createElement($.div,P({tabIndex:v?-1:0,"data-orientation":n},f,{ref:A,style:{outline:"none",...e.style},onMouseDown:T(e.onMouseDown,()=>{I.current=!0}),onFocus:T(e.onFocus,N=>{const ze=!I.current;if(N.target===N.currentTarget&&ze&&!v){const me=new CustomEvent(Q,zn);if(N.currentTarget.dispatchEvent(me),!me.defaultPrevented){const J=j().filter(L=>L.focusable),Je=J.find(L=>L.active),Qe=J.find(L=>L.id===p),We=[Je,Qe,...J].filter(Boolean).map(L=>L.ref.current);Fe(We)}}I.current=!1}),onBlur:T(e.onBlur,()=>g(!1))})))}),nt="RovingFocusGroupItem",tt=s.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:a,focusable:n=!0,active:r=!1,...o}=e,l=xe(),i=Zn(nt,a),E=i.currentTabStopId===l,d=Ce(a);return s.createElement(X.ItemSlot,{scope:a,id:l,focusable:n,active:r},s.createElement($.span,P({tabIndex:E?0:-1,"data-orientation":i.orientation},o,{ref:t,onMouseDown:T(e.onMouseDown,f=>{n?i.onItemFocus(l):f.preventDefault()}),onFocus:T(e.onFocus,()=>i.onItemFocus(l)),onKeyDown:T(e.onKeyDown,f=>{if(f.key==="Tab"&&f.shiftKey){i.onItemShiftTab();return}if(f.target!==f.currentTarget)return;const u=st(f,i.orientation,i.dir);if(u!==void 0){f.preventDefault();let m=d().filter(p=>p.focusable).map(p=>p.ref.current);if(u==="last")m.reverse();else if(u==="prev"||u==="next"){u==="prev"&&m.reverse();const p=m.indexOf(f.currentTarget);m=i.loop?ot(m,p+1):m.slice(p+1)}setTimeout(()=>Fe(m))}})})))}),at={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function rt(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function st(e,t,a){const n=rt(e.key,a);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(n))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(n)))return at[n]}function Fe(e){const t=document.activeElement;for(const a of e)if(a===t||(a.focus(),document.activeElement!==t))return}function ot(e,t){return e.map((a,n)=>e[(t+n)%e.length])}const lt=Xn,it=tt;function dt(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function ct(...e){return t=>e.forEach(a=>dt(a,t))}function ut(...e){return s.useCallback(ct(...e),e)}const _e=globalThis!=null&&globalThis.document?s.useLayoutEffect:()=>{};function ft(e,t){return s.useReducer((a,n)=>{const r=t[a][n];return r??a},e)}const we=e=>{const{present:t,children:a}=e,n=Et(t),r=typeof a=="function"?a({present:n.isPresent}):s.Children.only(a),o=ut(n.ref,r.ref);return typeof a=="function"||n.isPresent?s.cloneElement(r,{ref:o}):null};we.displayName="Presence";function Et(e){const[t,a]=s.useState(),n=s.useRef({}),r=s.useRef(e),o=s.useRef("none"),l=e?"mounted":"unmounted",[i,E]=ft(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return s.useEffect(()=>{const d=M(n.current);o.current=i==="mounted"?d:"none"},[i]),_e(()=>{const d=n.current,f=r.current;if(f!==e){const A=o.current,m=M(d);e?E("MOUNT"):m==="none"||(d==null?void 0:d.display)==="none"?E("UNMOUNT"):E(f&&A!==m?"ANIMATION_OUT":"UNMOUNT"),r.current=e}},[e,E]),_e(()=>{if(t){const d=u=>{const m=M(n.current).includes(u.animationName);u.target===t&&m&&In.flushSync(()=>E("ANIMATION_END"))},f=u=>{u.target===t&&(o.current=M(n.current))};return t.addEventListener("animationstart",f),t.addEventListener("animationcancel",d),t.addEventListener("animationend",d),()=>{t.removeEventListener("animationstart",f),t.removeEventListener("animationcancel",d),t.removeEventListener("animationend",d)}}else E("ANIMATION_END")},[t,E]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:s.useCallback(d=>{d&&(n.current=getComputedStyle(d)),a(d)},[])}}function M(e){return(e==null?void 0:e.animationName)||"none"}const Me="Tabs",[pt,Ha]=ue(Me,[je]),He=je(),[At,pe]=pt(Me),mt=s.forwardRef((e,t)=>{const{__scopeTabs:a,value:n,onValueChange:r,defaultValue:o,orientation:l="horizontal",dir:i,activationMode:E="automatic",...d}=e,f=De(i),[u,A]=Ge({prop:n,onChange:r,defaultProp:o});return s.createElement(At,{scope:a,baseId:xe(),value:u,onValueChange:A,orientation:l,dir:f,activationMode:E},s.createElement($.div,P({dir:f,"data-orientation":l},d,{ref:t})))}),_t="TabsList",Rt=s.forwardRef((e,t)=>{const{__scopeTabs:a,loop:n=!0,...r}=e,o=pe(_t,a),l=He(a);return s.createElement(lt,P({asChild:!0},l,{orientation:o.orientation,dir:o.dir,loop:n}),s.createElement($.div,P({role:"tablist","aria-orientation":o.orientation},r,{ref:t})))}),vt="TabsTrigger",bt=s.forwardRef((e,t)=>{const{__scopeTabs:a,value:n,disabled:r=!1,...o}=e,l=pe(vt,a),i=He(a),E=Be(l.baseId,n),d=Ye(l.baseId,n),f=n===l.value;return s.createElement(it,P({asChild:!0},i,{focusable:!r,active:f}),s.createElement($.button,P({type:"button",role:"tab","aria-selected":f,"aria-controls":d,"data-state":f?"active":"inactive","data-disabled":r?"":void 0,disabled:r,id:E},o,{ref:t,onMouseDown:T(e.onMouseDown,u=>{!r&&u.button===0&&u.ctrlKey===!1?l.onValueChange(n):u.preventDefault()}),onKeyDown:T(e.onKeyDown,u=>{[" ","Enter"].includes(u.key)&&l.onValueChange(n)}),onFocus:T(e.onFocus,()=>{const u=l.activationMode!=="manual";!f&&!r&&u&&l.onValueChange(n)})})))}),gt="TabsContent",St=s.forwardRef((e,t)=>{const{__scopeTabs:a,value:n,forceMount:r,children:o,...l}=e,i=pe(gt,a),E=Be(i.baseId,n),d=Ye(i.baseId,n),f=n===i.value,u=s.useRef(f);return s.useEffect(()=>{const A=requestAnimationFrame(()=>u.current=!1);return()=>cancelAnimationFrame(A)},[]),s.createElement(we,{present:r||f},({present:A})=>s.createElement($.div,P({"data-state":f?"active":"inactive","data-orientation":i.orientation,role:"tabpanel","aria-labelledby":E,hidden:!A,id:d,tabIndex:0},l,{ref:t,style:{...e.style,animationDuration:u.current?"0s":void 0}}),A&&o))});function Be(e,t){return`${e}-trigger-${t}`}function Ye(e,t){return`${e}-content-${t}`}const yt=mt,ht=bt;var Pt=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};const Nt=s.forwardRef((e,t)=>{var a,{className:n,as:r="button",label:o,icon:l,value:i}=e,E=Pt(e,["className","as","label","icon","value"]);const d=s.useContext(Ae);return!o&&!l?(console.error("<Tabs.Tab/> needs label/icon"),null):R.createElement(ht,{value:i,asChild:!0},R.createElement(r,Object.assign({ref:t,className:C("navds-tabs__tab",`navds-tabs__tab--${(a=d==null?void 0:d.size)!==null&&a!==void 0?a:"medium"}`,`navds-tabs__tab-icon--${d==null?void 0:d.iconPosition}`,n,{"navds-tabs__tab--icon-only":l&&!o})},E),R.createElement(Xe,{as:"span",className:"navds-tabs__tab-inner",size:d==null?void 0:d.size},l,o)))}),Tt=Nt;var It=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};const Lt=s.forwardRef((e,t)=>{var{className:a}=e,n=It(e,["className"]);const r=s.useContext(Ae),o=s.useRef(null),l=s.useMemo(()=>en([o,t]),[t]),[i,E]=s.useState({start:!1,end:!1}),d=s.useMemo(()=>nn(()=>{var A;if(!(o!=null&&o.current))return;const{scrollWidth:m,clientWidth:p}=o.current;let b,v;const g=(A=o==null?void 0:o.current)===null||A===void 0?void 0:A.scrollLeft;b=g>1,v=g<m-p-1,E(y=>b===y.start&&v===y.end?y:{start:b,end:v})}),[]);s.useEffect(()=>{var A,m,p;const b=()=>d(),v=(p=(m=(A=o.current)===null||A===void 0?void 0:A.ownerDocument)!==null&&m!==void 0?m:document)!==null&&p!==void 0?p:window;v.addEventListener("resize",b);let g;return typeof ResizeObserver<"u"&&(g=new ResizeObserver(b),g.observe(o.current)),()=>{v.removeEventListener("resize",b),g&&g.disconnect()}},[d]),s.useEffect(()=>{d()}),s.useEffect(()=>()=>{d.clear()},[d]);const f=({dir:A,hidden:m})=>R.createElement("div",{className:C("navds-tabs__scroll-button",{"navds-tabs__scroll-button--hidden":m}),onClick:()=>{o.current&&(o.current.scrollLeft+=A*100)}},A===-1?R.createElement($n,{title:"scroll tilbake"}):R.createElement(xn,{title:"scroll neste"})),u=i.end||i.start;return R.createElement("div",{className:"navds-tabs__tablist-wrapper"},u&&R.createElement(f,{dir:-1,hidden:!i.start}),R.createElement(Rt,Object.assign({},n,{ref:l,onScroll:d,loop:r==null?void 0:r.loop,className:C("navds-tabs__tablist",a)})),u&&R.createElement(f,{dir:1,hidden:!i.end}))}),Ot=Lt;var kt=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};const $t=s.forwardRef((e,t)=>{var{className:a}=e,n=kt(e,["className"]);return R.createElement(St,Object.assign({},n,{ref:t,className:C("navds-tabs__tabpanel",a)}))}),Kt=$t;var Vt=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};const Ae=s.createContext(null),U=s.forwardRef((e,t)=>{var{className:a,children:n,onChange:r,size:o="medium",selectionFollowsFocus:l=!1,loop:i=!1,iconPosition:E="left"}=e,d=Vt(e,["className","children","onChange","size","selectionFollowsFocus","loop","iconPosition"]);return R.createElement(yt,Object.assign({},d,{ref:t,className:C("navds-tabs",a,`navds-tabs--${o}`),activationMode:l?"automatic":"manual",onValueChange:r}),R.createElement(Ae.Provider,{value:{size:o,loop:i,iconPosition:E}},n))});U.Tab=Tt;U.List=Ot;U.Panel=Kt;const O=U,xt={paramName:"",parse:e=>e,isQueryParam:!1},Gt=(e,t,a)=>{const n=a.isQueryParam?ce(t.search):e;return a.parse(n[a.paramName])};function ee(e){const t={...xt,...e},a=tn(),n=an(),r=Gt(n,a,t);return{location:a,selected:r}}try{ee.displayName="useTrackRouteParam",ee.__docgenInfo={description:"",displayName:"useTrackRouteParam",props:{paramName:{defaultValue:null,description:"",name:"paramName",required:!1,type:{name:"string"}},parse:{defaultValue:null,description:"",name:"parse",required:!1,type:{name:"((a: any) => any)"}},isQueryParam:{defaultValue:null,description:"",name:"isQueryParam",required:!1,type:{name:"boolean"}}}}}catch{}const Dt="_container_1sikf_1",Ct={container:Dt},ne=({children:e})=>c.jsx("div",{className:Ct.container,children:e});try{ne.displayName="AvdelingslederDashboard",ne.__docgenInfo={description:"AvdelingslederDashboard",displayName:"AvdelingslederDashboard",props:{}}}catch{}const S={BEHANDLINGSKOER:"behandlingskoer",SAKSBEHANDLERE:"saksbehandlere",NOKKELTALL:"nokkeltall",RESERVASJONER:"reservasjoner"},te=({oppgaverForAvdeling:e,oppgaverPerDato:t,oppgaverManueltPaVent:a,oppgaverPerForsteStonadsdag:n,oppgaverApneEllerPaVent:r})=>{const l=s.useRef(null);return c.jsxs("div",{ref:l,children:[c.jsx(bn,{height:300,oppgaverPerDato:t,getValueFromLocalStorage:K}),c.jsx(k,{twentyPx:!0}),c.jsx(vn,{height:300,oppgaverForAvdeling:e,getValueFromLocalStorage:K}),c.jsx(k,{twentyPx:!0}),c.jsx(gn,{height:300,oppgaverManueltPaVent:a,getValueFromLocalStorage:K}),c.jsx(k,{twentyPx:!0}),c.jsx(Sn,{height:300,oppgaverPerForsteStonadsdag:n}),c.jsx(k,{twentyPx:!0}),c.jsx(yn,{height:300,oppgaverApneEllerPaVent:r,getValueFromLocalStorage:K})]})};try{te.displayName="NokkeltallPanel",te.__docgenInfo={description:"NokkeltallPanel.",displayName:"NokkeltallPanel",props:{oppgaverForAvdeling:{defaultValue:null,description:"",name:"oppgaverForAvdeling",required:!0,type:{name:"Readonly<{ fagsakYtelseType: string; behandlingType: string; tilBehandling: boolean; antall: number; }>[]"}},oppgaverPerDato:{defaultValue:null,description:"",name:"oppgaverPerDato",required:!0,type:{name:"Readonly<{ fagsakYtelseType: string; behandlingType: string; opprettetDato: string; antall: number; }>[]"}},oppgaverManueltPaVent:{defaultValue:null,description:"",name:"oppgaverManueltPaVent",required:!0,type:{name:"Readonly<{ fagsakYtelseType: string; behandlingFrist: string; antall: number; }>[]"}},oppgaverPerForsteStonadsdag:{defaultValue:null,description:"",name:"oppgaverPerForsteStonadsdag",required:!0,type:{name:"Readonly<{ forsteStonadsdag: string; antall: number; }>[]"}},oppgaverApneEllerPaVent:{defaultValue:null,description:"",name:"oppgaverApneEllerPaVent",required:!0,type:{name:"Readonly<{ antall: number; behandlingType: string; behandlingVenteStatus: string; førsteUttakMåned?: string | undefined; }>[]"}}}}}catch{}const jt=[],Ft=[],wt=[],Mt=[],Ht=[],ae=({valgtAvdelingEnhet:e})=>{const{data:t=jt}=h.useRestApi(_.HENT_OPPGAVER_FOR_AVDELING,{avdelingEnhet:e}),{data:a=Ft}=h.useRestApi(_.HENT_OPPGAVER_PER_DATO,{avdelingEnhet:e}),{data:n=wt}=h.useRestApi(_.HENT_OPPGAVER_MANUELT_PA_VENT,{avdelingEnhet:e}),{data:r=Mt}=h.useRestApi(_.HENT_OPPGAVER_PER_FORSTE_STONADSDAG,{avdelingEnhet:e}),{data:o=Ht}=h.useRestApi(_.HENT_OPPGAVER_APNE_ELLER_PA_VENT,{avdelingEnhet:e});return c.jsx(te,{oppgaverForAvdeling:t,oppgaverPerDato:a,oppgaverManueltPaVent:n,oppgaverPerForsteStonadsdag:r,oppgaverApneEllerPaVent:o})};try{ae.displayName="NokkeltallIndex",ae.__docgenInfo={description:"NokkeltallIndex",displayName:"NokkeltallIndex",props:{valgtAvdelingEnhet:{defaultValue:null,description:"",name:"valgtAvdelingEnhet",required:!0,type:{name:"string"}}}}}catch{}const re=({saksbehandlere:e,valgtAvdelingEnhet:t,avdelingensSaksbehandlere:a,hentAvdelingensSaksbehandlere:n})=>c.jsxs(c.Fragment,{children:[c.jsx(Pn,{saksbehandlere:e,valgtAvdelingEnhet:t,hentAvdelingensSaksbehandlere:n}),c.jsx(k,{sixteenPx:!0}),c.jsx(hn,{valgtAvdelingEnhet:t,avdelingensSaksbehandlere:a,hentAvdelingensSaksbehandlere:n})]});try{re.displayName="SaksbehandlerePanel",re.__docgenInfo={description:"SaksbehandlerePanel",displayName:"SaksbehandlerePanel",props:{saksbehandlere:{defaultValue:null,description:"",name:"saksbehandlere",required:!0,type:{name:"Readonly<{ brukerIdent: string; navn: string; avdelingsnavn: string[]; }>[]"}},valgtAvdelingEnhet:{defaultValue:null,description:"",name:"valgtAvdelingEnhet",required:!0,type:{name:"string"}},avdelingensSaksbehandlere:{defaultValue:null,description:"",name:"avdelingensSaksbehandlere",required:!0,type:{name:"Readonly<{ brukerIdent: string; navn: string; avdelingsnavn: string[]; }>[]"}},hentAvdelingensSaksbehandlere:{defaultValue:null,description:"",name:"hentAvdelingensSaksbehandlere",required:!0,type:{name:"(params: { avdelingEnhet: string; }) => void"}}}}}catch{}const se=({valgtAvdelingEnhet:e,avdelingensSaksbehandlere:t,hentAvdelingensSaksbehandlere:a})=>c.jsx(re,{saksbehandlere:t,valgtAvdelingEnhet:e,avdelingensSaksbehandlere:t,hentAvdelingensSaksbehandlere:a});try{se.displayName="EndreSaksbehandlereIndex",se.__docgenInfo={description:"EndreSaksbehandlereIndex",displayName:"EndreSaksbehandlereIndex",props:{avdelingensSaksbehandlere:{defaultValue:null,description:"",name:"avdelingensSaksbehandlere",required:!0,type:{name:"Readonly<{ brukerIdent: string; navn: string; avdelingsnavn: string[]; }>[]"}},valgtAvdelingEnhet:{defaultValue:null,description:"",name:"valgtAvdelingEnhet",required:!0,type:{name:"string"}},hentAvdelingensSaksbehandlere:{defaultValue:null,description:"",name:"hentAvdelingensSaksbehandlere",required:!0,type:{name:"(params: { avdelingEnhet: string; }) => void"}}}}}catch{}const oe=({valgtAvdelingEnhet:e,avdelingensSaksbehandlere:t})=>{const[a,n]=s.useState(),r=s.useCallback(()=>n(void 0),[]);return c.jsx(Nn,{setValgtSakslisteId:n,valgtSakslisteId:a,valgtAvdelingEnhet:e,avdelingensSaksbehandlere:t,resetValgtSakslisteId:r})};try{oe.displayName="EndreBehandlingskoerIndex",oe.__docgenInfo={description:"EndreBehandlingskoerIndex",displayName:"EndreBehandlingskoerIndex",props:{valgtAvdelingEnhet:{defaultValue:null,description:"",name:"valgtAvdelingEnhet",required:!0,type:{name:"string"}},avdelingensSaksbehandlere:{defaultValue:null,description:"",name:"avdelingensSaksbehandlere",required:!0,type:{name:"Readonly<{ brukerIdent: string; navn: string; avdelingsnavn: string[]; }>[]"}}}}}catch{}const Bt=[],le=({valgtAvdelingEnhet:e})=>{const{data:t=Bt,startRequest:a}=h.useRestApiRunner(_.RESERVASJONER_FOR_AVDELING),{startRequest:n}=h.useRestApiRunner(_.AVDELINGSLEDER_OPPHEVER_RESERVASJON),r=h.useGlobalStateRestApiData(B.KODEVERK_LOS);s.useEffect(()=>{a({avdelingEnhet:e})},[]);const o=s.useCallback(i=>n({oppgaveId:i}).then(()=>a({avdelingEnhet:e})),[e]),l=s.useCallback(()=>a({avdelingEnhet:e}),[e]);return c.jsx(Tn,{opphevReservasjon:o,reservasjoner:t,hentAvdelingensReservasjoner:l,alleKodeverk:r})};try{le.displayName="ReservasjonerIndex",le.__docgenInfo={description:"",displayName:"ReservasjonerIndex",props:{valgtAvdelingEnhet:{defaultValue:null,description:"",name:"valgtAvdelingEnhet",required:!0,type:{name:"string"}}}}}catch{}const Yt="_padding_eb62i_1",Re={padding:Yt},ie=({setValgtAvdelingEnhet:e,valgtAvdelingEnhet:t,avdelinger:a})=>{const n=s.useCallback(r=>{const o=r.target.value;_n("avdelingEnhet",o),e(o)},[a]);return a?c.jsx("div",{className:Re.padding,children:c.jsx(rn,{size:"small",hideLabel:!0,label:"",onChange:n,value:t,className:Re.padding,children:a.map(r=>c.jsx("option",{value:r.avdelingEnhet,children:`${r.avdelingEnhet} ${r.navn}`},r.avdelingEnhet))})}):null};try{ie.displayName="Avdelingsvelger",ie.__docgenInfo={description:"",displayName:"Avdelingsvelger",props:{setValgtAvdelingEnhet:{defaultValue:null,description:"",name:"setValgtAvdelingEnhet",required:!0,type:{name:"(avdelingEnhet: string) => void"}},valgtAvdelingEnhet:{defaultValue:null,description:"",name:"valgtAvdelingEnhet",required:!1,type:{name:"string"}},avdelinger:{defaultValue:null,description:"",name:"avdelinger",required:!1,type:{name:"Readonly<{ avdelingEnhet: string; navn: string; kreverKode6: boolean; }>[]"}}}}}catch{}const qt="_paddingHeader_yllsv_1",Ut="_padding_yllsv_1",ve={paddingHeader:qt,padding:Ut},zt=sn(cn),Jt=[],Qt=(e,t,a)=>{if(t.length>0&&!a){let n=t[0].avdelingEnhet;const r=K("avdelingEnhet");r&&(t.some(o=>o.avdelingEnhet===r)?n=r:Rn("avdelingEnhet")),e(n)}},Wt=e=>e==="?"||!e,Zt=(e,t)=>{const a=Wt(e)?{}:ce(e);return un({...a,...t})},Xt=(e,t)=>({...e,search:Zt(e.search,t)}),ea=e=>t=>Xt(e,{fane:t}),na=(e,t,a,n)=>{switch(e){case S.BEHANDLINGSKOER:return c.jsx(oe,{valgtAvdelingEnhet:t,avdelingensSaksbehandlere:n});case S.SAKSBEHANDLERE:return c.jsx(se,{valgtAvdelingEnhet:t,hentAvdelingensSaksbehandlere:a,avdelingensSaksbehandlere:n});case S.NOKKELTALL:return c.jsx(ae,{valgtAvdelingEnhet:t});case S.RESERVASJONER:return c.jsx(le,{valgtAvdelingEnhet:t});default:return null}},H={[S.BEHANDLINGSKOER]:"AvdelingslederIndex.Behandlingskoer",[S.SAKSBEHANDLERE]:"AvdelingslederIndex.Saksbehandlere",[S.NOKKELTALL]:"AvdelingslederIndex.Nokkeltall",[S.RESERVASJONER]:"AvdelingslederIndex.Reservasjoner"},ta=e=>{const t=ce(e.search);return t.avdelingsleder?t.avdelingsleder:S.BEHANDLINGSKOER},de=({navAnsatt:e})=>{const[t,a]=s.useState(),{selected:n,location:r}=ee({paramName:"fane",isQueryParam:!0}),o=h.useRestApi(_.AVDELINGER,void 0,{isCachingOn:!0,suspendRequest:!(e!=null&&e.kanOppgavestyre)}),l=o==null?void 0:o.data,i=l?l.filter(p=>!!(e!=null&&e.kanBehandleKode6)||!p.kreverKode6):[];s.useEffect(()=>{o.state===Y.SUCCESS&&Qt(a,i,t)},[o]);const{startRequest:E,data:d=Jt}=h.useRestApiRunner(_.SAKSBEHANDLERE_FOR_AVDELING),f=s.useCallback(p=>E(p,!0),[]);s.useEffect(()=>{t&&f({avdelingEnhet:t})},[t]);const u=ea(r),A=n||ta(r),m=ln();return e!=null&&e.kanOppgavestyre?o.state!==Y.SUCCESS?null:t?c.jsxs(ne,{children:[c.jsx(ie,{valgtAvdelingEnhet:t,avdelinger:i,setValgtAvdelingEnhet:a}),c.jsx(k,{sixteenPx:!0}),c.jsx(O,{size:"small",value:A,onChange:p=>{m(u(p))},className:ve.paddingHeader,children:c.jsxs(O.List,{children:[c.jsx(O.Tab,{value:S.BEHANDLINGSKOER,label:c.jsx(w,{size:"small",children:c.jsx(F,{id:H[S.BEHANDLINGSKOER]})})}),c.jsx(O.Tab,{value:S.NOKKELTALL,label:c.jsx(w,{size:"small",children:c.jsx(F,{id:H[S.NOKKELTALL]})})}),c.jsx(O.Tab,{value:S.SAKSBEHANDLERE,label:c.jsx(w,{size:"small",children:c.jsx(F,{id:H[S.SAKSBEHANDLERE]})})}),c.jsx(O.Tab,{value:S.RESERVASJONER,label:c.jsx(w,{size:"small",children:c.jsx(F,{id:H[S.RESERVASJONER]})})})]})}),c.jsx(Ln,{className:ve.padding,children:na(A,t,f,d)})]},t):c.jsx(dn,{}):c.jsx(mn,{})},aa=({setLosErIkkeTilgjengelig:e,navAnsatt:t})=>{const{addErrorMessage:a}=An();Ke.setAddErrorMessageHandler(a);const n=h.useGlobalStateRestApiData(B.KODEVERK_LOS),r=h.useGlobalStateRestApi(B.KODEVERK_LOS,void 0,{suspendRequest:!!n});return s.useEffect(()=>{!n&&r.state===Y.ERROR&&e()},[r.state]),!n&&r.state!==Y.SUCCESS?null:c.jsx(on,{value:zt,children:c.jsx(de,{navAnsatt:t})})},qe=aa;try{de.displayName="AvdelingslederIndex",de.__docgenInfo={description:"",displayName:"AvdelingslederIndex",props:{setLosErIkkeTilgjengelig:{defaultValue:null,description:"",name:"setLosErIkkeTilgjengelig",required:!0,type:{name:"() => void"}},navAnsatt:{defaultValue:null,description:"",name:"navAnsatt",required:!1,type:{name:"Readonly<{ brukernavn: string; funksjonellTid?: string; kanBehandleKode6: boolean; kanBehandleKode7: boolean; kanBehandleKodeEgenAnsatt: boolean; kanBeslutte: boolean; kanOppgavestyre: boolean; ... 4 more ...; skalViseDetaljerteFeilmeldinger: boolean; }>"}}}}}catch{}const Ba={title:"los/avdelingsleder/AvdelingslederIndex",component:qe,decorators:[fn]},Ue={kanOppgavestyre:!0,kanBehandleKode6:!0},z=({avdelinger:e,navAnsatt:t})=>{const a=[{key:B.KODEVERK_LOS.name,data:En,global:!0},{key:_.AVDELINGER.name,data:e},{key:_.SAKSBEHANDLERE_FOR_AVDELING.name,data:[]},{key:_.OPPGAVE_ANTALL.name,data:1},{key:_.LAGRE_SAKSLISTE_NAVN.name,data:void 0},{key:_.LAGRE_SAKSLISTE_SORTERING.name,data:void 0},{key:_.LAGRE_SAKSLISTE_SORTERING_INTERVALL.name,data:void 0},{key:_.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE.name,data:void 0},{key:_.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO.name,data:void 0},{key:_.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE.name,data:void 0},{key:_.LAGRE_SAKSLISTE_BEHANDLINGSTYPE.name,data:void 0},{key:_.LAGRE_SAKSLISTE_ANDRE_KRITERIER.name,data:void 0},{key:_.OPPGAVE_AVDELING_ANTALL.name,data:1},{key:_.SAKSLISTER_FOR_AVDELING.name,data:[]},{key:_.HENT_OPPGAVER_FOR_AVDELING.name,data:[]},{key:_.HENT_OPPGAVER_PER_DATO.name,data:[]},{key:_.HENT_OPPGAVER_APNE_ELLER_PA_VENT.name,data:[]},{key:_.HENT_OPPGAVER_MANUELT_PA_VENT.name,data:[]},{key:_.HENT_OPPGAVER_PER_FORSTE_STONADSDAG.name,data:[]},{key:_.RESERVASJONER_FOR_AVDELING.name,data:[]}];return c.jsx(Ze,{data:a,requestApi:Ke,children:c.jsx(qe,{setLosErIkkeTilgjengelig:()=>{},navAnsatt:t})})},V=z.bind({});V.args={avdelinger:[{avdelingEnhet:"1234",navn:"NAV Oslo",kreverKode6:!0},{avdelingEnhet:"123",navn:"NAV Viken",kreverKode6:!1}],navAnsatt:Ue};const x=z.bind({});x.args={avdelinger:[],navAnsatt:Ue};const G=z.bind({});G.args={avdelinger:[],navAnsatt:{kanOppgavestyre:!1,kanBehandleKode6:!1}};const D=z.bind({});D.args={avdelinger:[{avdelingEnhet:"1234",navn:"NAV Oslo",kreverKode6:!0},{avdelingEnhet:"123",navn:"NAV Viken",kreverKode6:!1}],navAnsatt:{kanOppgavestyre:!0,kanBehandleKode6:!1}};var be,ge,Se;V.parameters={...V.parameters,docs:{...(be=V.parameters)==null?void 0:be.docs,source:{originalSource:`({
  avdelinger,
  navAnsatt
}) => {
  const data = [{
    key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name,
    data: alleKodeverkLos,
    global: true
  }, {
    key: RestApiPathsKeys.AVDELINGER.name,
    data: avdelinger
  }, {
    key: RestApiPathsKeys.SAKSBEHANDLERE_FOR_AVDELING.name,
    data: []
  }, {
    key: RestApiPathsKeys.OPPGAVE_ANTALL.name,
    data: 1
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_NAVN.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_INTERVALL.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_BEHANDLINGSTYPE.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_ANDRE_KRITERIER.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.OPPGAVE_AVDELING_ANTALL.name,
    data: 1
  }, {
    key: RestApiPathsKeys.SAKSLISTER_FOR_AVDELING.name,
    data: []
  }, {
    key: RestApiPathsKeys.HENT_OPPGAVER_FOR_AVDELING.name,
    data: []
  }, {
    key: RestApiPathsKeys.HENT_OPPGAVER_PER_DATO.name,
    data: []
  }, {
    key: RestApiPathsKeys.HENT_OPPGAVER_APNE_ELLER_PA_VENT.name,
    data: []
  }, {
    key: RestApiPathsKeys.HENT_OPPGAVER_MANUELT_PA_VENT.name,
    data: []
  }, {
    key: RestApiPathsKeys.HENT_OPPGAVER_PER_FORSTE_STONADSDAG.name,
    data: []
  }, {
    key: RestApiPathsKeys.RESERVASJONER_FOR_AVDELING.name,
    data: []
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <AvdelingslederIndex setLosErIkkeTilgjengelig={() => undefined} navAnsatt={navAnsatt} />
    </RestApiMock>;
}`,...(Se=(ge=V.parameters)==null?void 0:ge.docs)==null?void 0:Se.source}}};var ye,he,Pe;x.parameters={...x.parameters,docs:{...(ye=x.parameters)==null?void 0:ye.docs,source:{originalSource:`({
  avdelinger,
  navAnsatt
}) => {
  const data = [{
    key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name,
    data: alleKodeverkLos,
    global: true
  }, {
    key: RestApiPathsKeys.AVDELINGER.name,
    data: avdelinger
  }, {
    key: RestApiPathsKeys.SAKSBEHANDLERE_FOR_AVDELING.name,
    data: []
  }, {
    key: RestApiPathsKeys.OPPGAVE_ANTALL.name,
    data: 1
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_NAVN.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_INTERVALL.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_BEHANDLINGSTYPE.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_ANDRE_KRITERIER.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.OPPGAVE_AVDELING_ANTALL.name,
    data: 1
  }, {
    key: RestApiPathsKeys.SAKSLISTER_FOR_AVDELING.name,
    data: []
  }, {
    key: RestApiPathsKeys.HENT_OPPGAVER_FOR_AVDELING.name,
    data: []
  }, {
    key: RestApiPathsKeys.HENT_OPPGAVER_PER_DATO.name,
    data: []
  }, {
    key: RestApiPathsKeys.HENT_OPPGAVER_APNE_ELLER_PA_VENT.name,
    data: []
  }, {
    key: RestApiPathsKeys.HENT_OPPGAVER_MANUELT_PA_VENT.name,
    data: []
  }, {
    key: RestApiPathsKeys.HENT_OPPGAVER_PER_FORSTE_STONADSDAG.name,
    data: []
  }, {
    key: RestApiPathsKeys.RESERVASJONER_FOR_AVDELING.name,
    data: []
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <AvdelingslederIndex setLosErIkkeTilgjengelig={() => undefined} navAnsatt={navAnsatt} />
    </RestApiMock>;
}`,...(Pe=(he=x.parameters)==null?void 0:he.docs)==null?void 0:Pe.source}}};var Ne,Te,Ie;G.parameters={...G.parameters,docs:{...(Ne=G.parameters)==null?void 0:Ne.docs,source:{originalSource:`({
  avdelinger,
  navAnsatt
}) => {
  const data = [{
    key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name,
    data: alleKodeverkLos,
    global: true
  }, {
    key: RestApiPathsKeys.AVDELINGER.name,
    data: avdelinger
  }, {
    key: RestApiPathsKeys.SAKSBEHANDLERE_FOR_AVDELING.name,
    data: []
  }, {
    key: RestApiPathsKeys.OPPGAVE_ANTALL.name,
    data: 1
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_NAVN.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_INTERVALL.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_BEHANDLINGSTYPE.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_ANDRE_KRITERIER.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.OPPGAVE_AVDELING_ANTALL.name,
    data: 1
  }, {
    key: RestApiPathsKeys.SAKSLISTER_FOR_AVDELING.name,
    data: []
  }, {
    key: RestApiPathsKeys.HENT_OPPGAVER_FOR_AVDELING.name,
    data: []
  }, {
    key: RestApiPathsKeys.HENT_OPPGAVER_PER_DATO.name,
    data: []
  }, {
    key: RestApiPathsKeys.HENT_OPPGAVER_APNE_ELLER_PA_VENT.name,
    data: []
  }, {
    key: RestApiPathsKeys.HENT_OPPGAVER_MANUELT_PA_VENT.name,
    data: []
  }, {
    key: RestApiPathsKeys.HENT_OPPGAVER_PER_FORSTE_STONADSDAG.name,
    data: []
  }, {
    key: RestApiPathsKeys.RESERVASJONER_FOR_AVDELING.name,
    data: []
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <AvdelingslederIndex setLosErIkkeTilgjengelig={() => undefined} navAnsatt={navAnsatt} />
    </RestApiMock>;
}`,...(Ie=(Te=G.parameters)==null?void 0:Te.docs)==null?void 0:Ie.source}}};var Le,Oe,ke;D.parameters={...D.parameters,docs:{...(Le=D.parameters)==null?void 0:Le.docs,source:{originalSource:`({
  avdelinger,
  navAnsatt
}) => {
  const data = [{
    key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name,
    data: alleKodeverkLos,
    global: true
  }, {
    key: RestApiPathsKeys.AVDELINGER.name,
    data: avdelinger
  }, {
    key: RestApiPathsKeys.SAKSBEHANDLERE_FOR_AVDELING.name,
    data: []
  }, {
    key: RestApiPathsKeys.OPPGAVE_ANTALL.name,
    data: 1
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_NAVN.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_INTERVALL.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_BEHANDLINGSTYPE.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_ANDRE_KRITERIER.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.OPPGAVE_AVDELING_ANTALL.name,
    data: 1
  }, {
    key: RestApiPathsKeys.SAKSLISTER_FOR_AVDELING.name,
    data: []
  }, {
    key: RestApiPathsKeys.HENT_OPPGAVER_FOR_AVDELING.name,
    data: []
  }, {
    key: RestApiPathsKeys.HENT_OPPGAVER_PER_DATO.name,
    data: []
  }, {
    key: RestApiPathsKeys.HENT_OPPGAVER_APNE_ELLER_PA_VENT.name,
    data: []
  }, {
    key: RestApiPathsKeys.HENT_OPPGAVER_MANUELT_PA_VENT.name,
    data: []
  }, {
    key: RestApiPathsKeys.HENT_OPPGAVER_PER_FORSTE_STONADSDAG.name,
    data: []
  }, {
    key: RestApiPathsKeys.RESERVASJONER_FOR_AVDELING.name,
    data: []
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <AvdelingslederIndex setLosErIkkeTilgjengelig={() => undefined} navAnsatt={navAnsatt} />
    </RestApiMock>;
}`,...(ke=(Oe=D.parameters)==null?void 0:Oe.docs)==null?void 0:ke.source}}};const Ya=["Default","LasteIkonFørValgtAvdelingErSatt","HarIkkeTilgang","SkalFiltrereBortAvdelingerSomKreverKode6"];export{V as Default,G as HarIkkeTilgang,x as LasteIkonFørValgtAvdelingErSatt,D as SkalFiltrereBortAvdelingerSomKreverKode6,Ya as __namedExportsOrder,Ba as default};
//# sourceMappingURL=AvdelingslederIndex.stories-39ed5683.js.map
