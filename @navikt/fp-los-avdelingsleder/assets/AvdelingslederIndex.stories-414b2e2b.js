import{j as c,a as j,F as en}from"./jsx-runtime-86dfebf6.js";import{R as nn}from"./intl-test-helper-4315b879.js";import{p as Ge,c as F,B as tn,y as an,z as rn,A as sn,E as on,F as ue,a as k,G as ln,t as dn,l as K,m as cn,I as un,H as M,$ as fn,J as En,K as pn}from"./nb_NO-7d7a9a16.js";import{a as An}from"./alleKodeverkLos-5ac5bd02.js";import{b as y,R,a as Y,r as Ve}from"./fplosRestApi-e273a6f1.js";import{r as s,R as _,b as mn}from"./index-1b03fe98.js";import{u as Rn,R as q}from"./useGlobalStateRestApiData-20592075.js";import{I as _n}from"./IkkeTilgangTilAvdelingslederPanel-17282c70.js";import{g as G,s as bn,r as vn}from"./StoreValuesInLocalStorage-6ed602ef.js";import{F as gn}from"./FordelingAvBehandlingstypePanel-44399d70.js";import{T as Sn}from"./TilBehandlingPanel-afb1b350.js";import{O as yn}from"./OppgaverPerForsteStonadsdagPanel-cb23bf35.js";import{O as hn}from"./OppgaverSomErApneEllerPaVentPanel-a3ef0f7f.js";import{V as Pn}from"./VentefristUtløperPanel-7eb59629.js";import{L as Tn}from"./LeggTilSaksbehandlerForm-62d8bacb.js";import{S as Nn}from"./SaksbehandlereTabell-78c2f971.js";import{E as In}from"./EndreSakslisterPanel-a6ea6629.js";import{R as Ln}from"./ReservasjonerTabell-f91869ae.js";import{_ as h}from"./extends-98964cd2.js";import{r as On}from"./index-6fd5a17b.js";import{P as kn}from"./Panel-ccb95562.js";import"./index.es-657e045f.js";import"./FlyttReservasjonModal-bd269abd.js";import"./index.es-6bc5cfcb.js";import"./useLosKodeverk-ac1cee0a.js";import"./isSameOrAfter-48a89950.js";import"./isSameOrBefore-ea99da6c.js";import"./SletteSaksbehandlerModal-efba4ff5.js";import"./GjeldendeSakslisterTabell-97060e51.js";import"./SletteSakslisteModal-151f31e8.js";import"./SaksbehandlereForSakslisteForm-c0332bfe.js";import"./VStack-a54df971.js";import"./UtvalgskriterierForSakslisteForm-6db0d810.js";import"./BehandlingstypeVelger-75a8a07c.js";import"./AndreKriterierVelger-3608edc0.js";import"./FagsakYtelseTypeVelger-1dafc6bf.js";import"./SorteringVelger-6686e612.js";var $n=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};const Kn=s.forwardRef((e,t)=>{var{title:a,titleId:n}=e,r=$n(e,["title","titleId"]);let o=Ge();return o=a?n||"title-"+o:void 0,s.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:t,"aria-labelledby":o},r),a?s.createElement("title",{id:o},a):null,s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.53 5.97a.75.75 0 0 1 0 1.06L9.56 12l4.97 4.97a.75.75 0 1 1-1.06 1.06l-5.5-5.5a.75.75 0 0 1 0-1.06l5.5-5.5a.75.75 0 0 1 1.06 0Z",fill:"currentColor"}))}),Gn=Kn;var Vn=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};const Dn=s.forwardRef((e,t)=>{var{title:a,titleId:n}=e,r=Vn(e,["title","titleId"]);let o=Ge();return o=a?n||"title-"+o:void 0,s.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:t,"aria-labelledby":o},r),a?s.createElement("title",{id:o},a):null,s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.47 5.97a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 0 1 0 1.06l-5.5 5.5a.75.75 0 1 1-1.06-1.06L14.44 12 9.47 7.03a.75.75 0 0 1 0-1.06Z",fill:"currentColor"}))}),xn=Dn;function N(e,t,{checkForDefaultPrevented:a=!0}={}){return function(r){if(e==null||e(r),a===!1||!r.defaultPrevented)return t==null?void 0:t(r)}}function fe(e,t=[]){let a=[];function n(o,l){const i=s.createContext(l),E=a.length;a=[...a,l];function d(u){const{scope:m,children:A,...p}=u,g=(m==null?void 0:m[e][E])||i,v=s.useMemo(()=>p,Object.values(p));return s.createElement(g.Provider,{value:v},A)}function f(u,m){const A=(m==null?void 0:m[e][E])||i,p=s.useContext(A);if(p)return p;if(l!==void 0)return l;throw new Error(`\`${u}\` must be used within \`${o}\``)}return d.displayName=o+"Provider",[d,f]}const r=()=>{const o=a.map(l=>s.createContext(l));return function(i){const E=(i==null?void 0:i[e])||o;return s.useMemo(()=>({[`__scope${e}`]:{...i,[e]:E}}),[i,E])}};return r.scopeName=e,[n,Cn(r,...t)]}function Cn(...e){const t=e[0];if(e.length===1)return t;const a=()=>{const n=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(o){const l=n.reduce((i,{useScope:E,scopeName:d})=>{const u=E(o)[`__scope${d}`];return{...i,...u}},{});return s.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])}};return a.scopeName=t.scopeName,a}function Fn(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function De(...e){return t=>e.forEach(a=>Fn(a,t))}function Z(...e){return s.useCallback(De(...e),e)}const U=s.forwardRef((e,t)=>{const{children:a,...n}=e,r=s.Children.toArray(a),o=r.find(Mn);if(o){const l=o.props.children,i=r.map(E=>E===o?s.Children.count(l)>1?s.Children.only(null):s.isValidElement(l)?l.props.children:null:E);return s.createElement(X,h({},n,{ref:t}),s.isValidElement(l)?s.cloneElement(l,void 0,i):null)}return s.createElement(X,h({},n,{ref:t}),a)});U.displayName="Slot";const X=s.forwardRef((e,t)=>{const{children:a,...n}=e;return s.isValidElement(a)?s.cloneElement(a,{...Hn(n,a.props),ref:De(t,a.ref)}):s.Children.count(a)>1?s.Children.only(null):null});X.displayName="SlotClone";const wn=({children:e})=>s.createElement(s.Fragment,null,e);function Mn(e){return s.isValidElement(e)&&e.type===wn}function Hn(e,t){const a={...t};for(const n in t){const r=e[n],o=t[n];/^on[A-Z]/.test(n)?a[n]=(...i)=>{o==null||o(...i),r==null||r(...i)}:n==="style"?a[n]={...r,...o}:n==="className"&&(a[n]=[r,o].filter(Boolean).join(" "))}return{...e,...a}}function Bn(e){const t=e+"CollectionProvider",[a,n]=fe(t),[r,o]=a(t,{collectionRef:{current:null},itemMap:new Map}),l=A=>{const{scope:p,children:g}=A,v=_.useRef(null),b=_.useRef(new Map).current;return _.createElement(r,{scope:p,itemMap:b,collectionRef:v},g)},i=e+"CollectionSlot",E=_.forwardRef((A,p)=>{const{scope:g,children:v}=A,b=o(i,g),P=Z(p,b.collectionRef);return _.createElement(U,{ref:P},v)}),d=e+"CollectionItemSlot",f="data-radix-collection-item",u=_.forwardRef((A,p)=>{const{scope:g,children:v,...b}=A,P=_.useRef(null),w=Z(p,P),I=o(d,g);return _.useEffect(()=>(I.itemMap.set(P,{ref:P,...b}),()=>void I.itemMap.delete(P))),_.createElement(U,{[f]:"",ref:w},v)});function m(A){const p=o(e+"CollectionConsumer",A);return _.useCallback(()=>{const v=p.collectionRef.current;if(!v)return[];const b=Array.from(v.querySelectorAll(`[${f}]`));return Array.from(p.itemMap.values()).sort((I,T)=>b.indexOf(I.ref.current)-b.indexOf(T.ref.current))},[p.collectionRef,p.itemMap])}return[{Provider:l,Slot:E,ItemSlot:u},m,n]}const jn=globalThis!=null&&globalThis.document?s.useLayoutEffect:()=>{},Yn=mn["useId".toString()]||(()=>{});let qn=0;function xe(e){const[t,a]=s.useState(Yn());return jn(()=>{e||a(n=>n??String(qn++))},[e]),e||(t?`radix-${t}`:"")}const Un=["a","button","div","h2","h3","img","li","nav","ol","p","span","svg","ul"],$=Un.reduce((e,t)=>{const a=s.forwardRef((n,r)=>{const{asChild:o,...l}=n,i=o?U:t;return s.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),s.createElement(i,h({},l,{ref:r}))});return a.displayName=`Primitive.${t}`,{...e,[t]:a}},{});function Ee(e){const t=s.useRef(e);return s.useEffect(()=>{t.current=e}),s.useMemo(()=>(...a)=>{var n;return(n=t.current)===null||n===void 0?void 0:n.call(t,...a)},[])}function Ce({prop:e,defaultProp:t,onChange:a=()=>{}}){const[n,r]=zn({defaultProp:t,onChange:a}),o=e!==void 0,l=o?e:n,i=Ee(a),E=s.useCallback(d=>{if(o){const u=typeof d=="function"?d(e):d;u!==e&&i(u)}else r(d)},[o,e,r,i]);return[l,E]}function zn({defaultProp:e,onChange:t}){const a=s.useState(e),[n]=a,r=s.useRef(n),o=Ee(t);return s.useEffect(()=>{r.current!==n&&(o(n),r.current=n)},[n,r,o]),a}const Jn=s.createContext(void 0);function Fe(e){const t=s.useContext(Jn);return e||t||"ltr"}const W="rovingFocusGroup.onEntryFocus",Qn={bubbles:!1,cancelable:!0},pe="RovingFocusGroup",[ee,we,Wn]=Bn(pe),[Zn,Me]=fe(pe,[Wn]),[Xn,et]=Zn(pe),nt=s.forwardRef((e,t)=>s.createElement(ee.Provider,{scope:e.__scopeRovingFocusGroup},s.createElement(ee.Slot,{scope:e.__scopeRovingFocusGroup},s.createElement(tt,h({},e,{ref:t}))))),tt=s.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:a,orientation:n,loop:r=!1,dir:o,currentTabStopId:l,defaultCurrentTabStopId:i,onCurrentTabStopIdChange:E,onEntryFocus:d,...f}=e,u=s.useRef(null),m=Z(t,u),A=Fe(o),[p=null,g]=Ce({prop:l,defaultProp:i,onChange:E}),[v,b]=s.useState(!1),P=Ee(d),w=we(a),I=s.useRef(!1);return s.useEffect(()=>{const T=u.current;if(T)return T.addEventListener(W,P),()=>T.removeEventListener(W,P)},[P]),s.createElement(Xn,{scope:a,orientation:n,dir:A,loop:r,currentTabStopId:p,onItemFocus:s.useCallback(T=>g(T),[g]),onItemShiftTab:s.useCallback(()=>b(!0),[])},s.createElement($.div,h({tabIndex:v?-1:0,"data-orientation":n},f,{ref:m,style:{outline:"none",...e.style},onMouseDown:N(e.onMouseDown,()=>{I.current=!0}),onFocus:N(e.onFocus,T=>{const Qe=!I.current;if(T.target===T.currentTarget&&Qe&&!v){const Re=new CustomEvent(W,Qn);if(T.currentTarget.dispatchEvent(Re),!Re.defaultPrevented){const Q=w().filter(L=>L.focusable),We=Q.find(L=>L.active),Ze=Q.find(L=>L.id===p),Xe=[We,Ze,...Q].filter(Boolean).map(L=>L.ref.current);He(Xe)}}I.current=!1}),onBlur:N(e.onBlur,()=>b(!1))})))}),at="RovingFocusGroupItem",rt=s.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:a,focusable:n=!0,active:r=!1,...o}=e,l=xe(),i=et(at,a),E=i.currentTabStopId===l,d=we(a);return s.createElement(ee.ItemSlot,{scope:a,id:l,focusable:n,active:r},s.createElement($.span,h({tabIndex:E?0:-1,"data-orientation":i.orientation},o,{ref:t,onMouseDown:N(e.onMouseDown,f=>{n?i.onItemFocus(l):f.preventDefault()}),onFocus:N(e.onFocus,()=>i.onItemFocus(l)),onKeyDown:N(e.onKeyDown,f=>{if(f.key==="Tab"&&f.shiftKey){i.onItemShiftTab();return}if(f.target!==f.currentTarget)return;const u=lt(f,i.orientation,i.dir);if(u!==void 0){f.preventDefault();let A=d().filter(p=>p.focusable).map(p=>p.ref.current);if(u==="last")A.reverse();else if(u==="prev"||u==="next"){u==="prev"&&A.reverse();const p=A.indexOf(f.currentTarget);A=i.loop?it(A,p+1):A.slice(p+1)}setTimeout(()=>He(A))}})})))}),st={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function ot(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function lt(e,t,a){const n=ot(e.key,a);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(n))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(n)))return st[n]}function He(e){const t=document.activeElement;for(const a of e)if(a===t||(a.focus(),document.activeElement!==t))return}function it(e,t){return e.map((a,n)=>e[(t+n)%e.length])}const dt=nt,ct=rt;function ut(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function ft(...e){return t=>e.forEach(a=>ut(a,t))}function Et(...e){return s.useCallback(ft(...e),e)}const _e=globalThis!=null&&globalThis.document?s.useLayoutEffect:()=>{};function pt(e,t){return s.useReducer((a,n)=>{const r=t[a][n];return r??a},e)}const Be=e=>{const{present:t,children:a}=e,n=At(t),r=typeof a=="function"?a({present:n.isPresent}):s.Children.only(a),o=Et(n.ref,r.ref);return typeof a=="function"||n.isPresent?s.cloneElement(r,{ref:o}):null};Be.displayName="Presence";function At(e){const[t,a]=s.useState(),n=s.useRef({}),r=s.useRef(e),o=s.useRef("none"),l=e?"mounted":"unmounted",[i,E]=pt(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return s.useEffect(()=>{const d=H(n.current);o.current=i==="mounted"?d:"none"},[i]),_e(()=>{const d=n.current,f=r.current;if(f!==e){const m=o.current,A=H(d);e?E("MOUNT"):A==="none"||(d==null?void 0:d.display)==="none"?E("UNMOUNT"):E(f&&m!==A?"ANIMATION_OUT":"UNMOUNT"),r.current=e}},[e,E]),_e(()=>{if(t){const d=u=>{const A=H(n.current).includes(u.animationName);u.target===t&&A&&On.flushSync(()=>E("ANIMATION_END"))},f=u=>{u.target===t&&(o.current=H(n.current))};return t.addEventListener("animationstart",f),t.addEventListener("animationcancel",d),t.addEventListener("animationend",d),()=>{t.removeEventListener("animationstart",f),t.removeEventListener("animationcancel",d),t.removeEventListener("animationend",d)}}else E("ANIMATION_END")},[t,E]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:s.useCallback(d=>{d&&(n.current=getComputedStyle(d)),a(d)},[])}}function H(e){return(e==null?void 0:e.animationName)||"none"}const je="Tabs",[mt,ja]=fe(je,[Me]),Ye=Me(),[Rt,Ae]=mt(je),_t=s.forwardRef((e,t)=>{const{__scopeTabs:a,value:n,onValueChange:r,defaultValue:o,orientation:l="horizontal",dir:i,activationMode:E="automatic",...d}=e,f=Fe(i),[u,m]=Ce({prop:n,onChange:r,defaultProp:o});return s.createElement(Rt,{scope:a,baseId:xe(),value:u,onValueChange:m,orientation:l,dir:f,activationMode:E},s.createElement($.div,h({dir:f,"data-orientation":l},d,{ref:t})))}),bt="TabsList",vt=s.forwardRef((e,t)=>{const{__scopeTabs:a,loop:n=!0,...r}=e,o=Ae(bt,a),l=Ye(a);return s.createElement(dt,h({asChild:!0},l,{orientation:o.orientation,dir:o.dir,loop:n}),s.createElement($.div,h({role:"tablist","aria-orientation":o.orientation},r,{ref:t})))}),gt="TabsTrigger",St=s.forwardRef((e,t)=>{const{__scopeTabs:a,value:n,disabled:r=!1,...o}=e,l=Ae(gt,a),i=Ye(a),E=qe(l.baseId,n),d=Ue(l.baseId,n),f=n===l.value;return s.createElement(ct,h({asChild:!0},i,{focusable:!r,active:f}),s.createElement($.button,h({type:"button",role:"tab","aria-selected":f,"aria-controls":d,"data-state":f?"active":"inactive","data-disabled":r?"":void 0,disabled:r,id:E},o,{ref:t,onMouseDown:N(e.onMouseDown,u=>{!r&&u.button===0&&u.ctrlKey===!1?l.onValueChange(n):u.preventDefault()}),onKeyDown:N(e.onKeyDown,u=>{[" ","Enter"].includes(u.key)&&l.onValueChange(n)}),onFocus:N(e.onFocus,()=>{const u=l.activationMode!=="manual";!f&&!r&&u&&l.onValueChange(n)})})))}),yt="TabsContent",ht=s.forwardRef((e,t)=>{const{__scopeTabs:a,value:n,forceMount:r,children:o,...l}=e,i=Ae(yt,a),E=qe(i.baseId,n),d=Ue(i.baseId,n),f=n===i.value,u=s.useRef(f);return s.useEffect(()=>{const m=requestAnimationFrame(()=>u.current=!1);return()=>cancelAnimationFrame(m)},[]),s.createElement(Be,{present:r||f},({present:m})=>s.createElement($.div,h({"data-state":f?"active":"inactive","data-orientation":i.orientation,role:"tabpanel","aria-labelledby":E,hidden:!m,id:d,tabIndex:0},l,{ref:t,style:{...e.style,animationDuration:u.current?"0s":void 0}}),m&&o))});function qe(e,t){return`${e}-trigger-${t}`}function Ue(e,t){return`${e}-content-${t}`}const Pt=_t,Tt=St,me=s.createContext(null);var Nt=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};const It=s.forwardRef((e,t)=>{var a,{className:n,as:r="button",label:o,icon:l,value:i}=e,E=Nt(e,["className","as","label","icon","value"]);const d=s.useContext(me);return!o&&!l?(console.error("<Tabs.Tab/> needs label/icon"),null):_.createElement(Tt,{value:i,asChild:!0},_.createElement(r,Object.assign({ref:t,className:F("navds-tabs__tab",`navds-tabs__tab--${(a=d==null?void 0:d.size)!==null&&a!==void 0?a:"medium"}`,`navds-tabs__tab-icon--${d==null?void 0:d.iconPosition}`,n,{"navds-tabs__tab--icon-only":l&&!o})},E),_.createElement(tn,{as:"span",className:"navds-tabs__tab-inner",size:d==null?void 0:d.size},l,o)))}),Lt=It;var Ot=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};const kt=s.forwardRef((e,t)=>{var{className:a}=e,n=Ot(e,["className"]);const r=s.useContext(me),o=s.useRef(null),l=s.useMemo(()=>an([o,t]),[t]),[i,E]=s.useState({start:!1,end:!1}),d=s.useMemo(()=>rn(()=>{if(!(o!=null&&o.current))return;const{scrollWidth:m,clientWidth:A}=o.current,p=o.current.scrollLeft,g=p>1,v=p<m-A-1;E(b=>g===b.start&&v===b.end?b:{start:g,end:v})}),[]);s.useEffect(()=>{var m,A,p;const g=()=>d(),v=(p=(A=(m=o.current)===null||m===void 0?void 0:m.ownerDocument)!==null&&A!==void 0?A:document)!==null&&p!==void 0?p:window;v.addEventListener("resize",g);let b;return typeof ResizeObserver<"u"&&(b=new ResizeObserver(g),b.observe(o.current)),()=>{v.removeEventListener("resize",g),b&&b.disconnect()}},[d]),s.useEffect(()=>{d()}),s.useEffect(()=>()=>{d.clear()},[d]);const f=({dir:m,hidden:A})=>_.createElement("div",{className:F("navds-tabs__scroll-button",{"navds-tabs__scroll-button--hidden":A}),onClick:()=>{o.current&&(o.current.scrollLeft+=m*100)}},m===-1?_.createElement(Gn,{title:"scroll tilbake"}):_.createElement(xn,{title:"scroll neste"})),u=i.end||i.start;return _.createElement("div",{className:"navds-tabs__tablist-wrapper"},u&&_.createElement(f,{dir:-1,hidden:!i.start}),_.createElement(vt,Object.assign({},n,{ref:l,onScroll:d,loop:r==null?void 0:r.loop,className:F("navds-tabs__tablist",a)})),u&&_.createElement(f,{dir:1,hidden:!i.end}))}),$t=kt;var Kt=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};const Gt=s.forwardRef((e,t)=>{var{className:a}=e,n=Kt(e,["className"]);return _.createElement(ht,Object.assign({},n,{ref:t,className:F("navds-tabs__tabpanel",a)}))}),Vt=Gt;var Dt=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};const z=s.forwardRef((e,t)=>{var{className:a,children:n,onChange:r,size:o="medium",selectionFollowsFocus:l=!1,loop:i=!1,iconPosition:E="left"}=e,d=Dt(e,["className","children","onChange","size","selectionFollowsFocus","loop","iconPosition"]);return _.createElement(Pt,Object.assign({},d,{ref:t,className:F("navds-tabs",a,`navds-tabs--${o}`),activationMode:l?"automatic":"manual",onValueChange:r}),_.createElement(me.Provider,{value:{size:o,loop:i,iconPosition:E}},n))});z.Tab=Lt;z.List=$t;z.Panel=Vt;const O=z,xt={paramName:"",parse:e=>e,isQueryParam:!1},Ct=(e,t,a)=>{const n=a.isQueryParam?ue(t.search):e;return a.parse(n[a.paramName])};function ne(e){const t={...xt,...e},a=sn(),n=on(),r=Ct(n,a,t);return{location:a,selected:r}}try{ne.displayName="useTrackRouteParam",ne.__docgenInfo={description:"",displayName:"useTrackRouteParam",props:{paramName:{defaultValue:null,description:"",name:"paramName",required:!1,type:{name:"string"}},parse:{defaultValue:null,description:"",name:"parse",required:!1,type:{name:"((a: any) => any)"}},isQueryParam:{defaultValue:null,description:"",name:"isQueryParam",required:!1,type:{name:"boolean"}}}}}catch{}const Ft="_container_1sikf_1",wt={container:Ft},te=({children:e})=>c("div",{className:wt.container,children:e});try{te.displayName="AvdelingslederDashboard",te.__docgenInfo={description:"AvdelingslederDashboard",displayName:"AvdelingslederDashboard",props:{}}}catch{}const S={BEHANDLINGSKOER:"behandlingskoer",SAKSBEHANDLERE:"saksbehandlere",NOKKELTALL:"nokkeltall",RESERVASJONER:"reservasjoner"},ae=({oppgaverForAvdeling:e,oppgaverPerDato:t,behandlingerPaVent:a,oppgaverPerForsteStonadsdag:n,oppgaverApneEllerPaVent:r})=>{const l=s.useRef(null);return j("div",{ref:l,children:[c(Sn,{height:300,oppgaverPerDato:t,getValueFromLocalStorage:G}),c(k,{twentyPx:!0}),c(gn,{height:300,oppgaverForAvdeling:e,getValueFromLocalStorage:G}),c(k,{twentyPx:!0}),c(Pn,{height:300,behandlingerPaVent:a,getValueFromLocalStorage:G}),c(k,{twentyPx:!0}),c(yn,{height:300,oppgaverPerForsteStonadsdag:n}),c(k,{twentyPx:!0}),c(hn,{height:300,oppgaverApneEllerPaVent:r,getValueFromLocalStorage:G})]})};try{ae.displayName="NokkeltallPanel",ae.__docgenInfo={description:"NokkeltallPanel.",displayName:"NokkeltallPanel",props:{oppgaverForAvdeling:{defaultValue:null,description:"",name:"oppgaverForAvdeling",required:!0,type:{name:"Readonly<{ fagsakYtelseType: string; behandlingType: string; tilBehandling: boolean; antall: number; }>[]"}},oppgaverPerDato:{defaultValue:null,description:"",name:"oppgaverPerDato",required:!0,type:{name:"Readonly<{ fagsakYtelseType: string; behandlingType: string; opprettetDato: string; antall: number; }>[]"}},behandlingerPaVent:{defaultValue:null,description:"",name:"behandlingerPaVent",required:!0,type:{name:"Readonly<{ fagsakYtelseType: string; behandlingFrist: string; antall: number; }>[]"}},oppgaverPerForsteStonadsdag:{defaultValue:null,description:"",name:"oppgaverPerForsteStonadsdag",required:!0,type:{name:"Readonly<{ forsteStonadsdag: string; antall: number; }>[]"}},oppgaverApneEllerPaVent:{defaultValue:null,description:"",name:"oppgaverApneEllerPaVent",required:!0,type:{name:"Readonly<{ antall: number; behandlingType: string; behandlingVenteStatus: string; førsteUttakMåned?: string | undefined; }>[]"}}}}}catch{}const Mt=[],Ht=[],Bt=[],jt=[],Yt=[],re=({valgtAvdelingEnhet:e})=>{const{data:t=Mt}=y.useRestApi(R.HENT_OPPGAVER_FOR_AVDELING,{avdelingEnhet:e}),{data:a=Ht}=y.useRestApi(R.HENT_OPPGAVER_PER_DATO,{avdelingEnhet:e}),{data:n=Bt}=y.useRestApi(R.HENT_BEHANDLINGER_FRISTUTLOP,{avdelingEnhet:e}),{data:r=jt}=y.useRestApi(R.HENT_OPPGAVER_PER_FORSTE_STONADSDAG,{avdelingEnhet:e}),{data:o=Yt}=y.useRestApi(R.HENT_OPPGAVER_APNE_ELLER_PA_VENT,{avdelingEnhet:e});return c(ae,{oppgaverForAvdeling:t,oppgaverPerDato:a,behandlingerPaVent:n,oppgaverPerForsteStonadsdag:r,oppgaverApneEllerPaVent:o})};try{re.displayName="NokkeltallIndex",re.__docgenInfo={description:"NokkeltallIndex",displayName:"NokkeltallIndex",props:{valgtAvdelingEnhet:{defaultValue:null,description:"",name:"valgtAvdelingEnhet",required:!0,type:{name:"string"}}}}}catch{}const se=({saksbehandlere:e,valgtAvdelingEnhet:t,avdelingensSaksbehandlere:a,hentAvdelingensSaksbehandlere:n})=>j(en,{children:[c(Nn,{saksbehandlere:e,valgtAvdelingEnhet:t,hentAvdelingensSaksbehandlere:n}),c(k,{sixteenPx:!0}),c(Tn,{valgtAvdelingEnhet:t,avdelingensSaksbehandlere:a,hentAvdelingensSaksbehandlere:n})]});try{se.displayName="SaksbehandlerePanel",se.__docgenInfo={description:"SaksbehandlerePanel",displayName:"SaksbehandlerePanel",props:{saksbehandlere:{defaultValue:null,description:"",name:"saksbehandlere",required:!0,type:{name:"Readonly<{ brukerIdent: string; navn: string; avdelingsnavn: string[]; }>[]"}},valgtAvdelingEnhet:{defaultValue:null,description:"",name:"valgtAvdelingEnhet",required:!0,type:{name:"string"}},avdelingensSaksbehandlere:{defaultValue:null,description:"",name:"avdelingensSaksbehandlere",required:!0,type:{name:"Readonly<{ brukerIdent: string; navn: string; avdelingsnavn: string[]; }>[]"}},hentAvdelingensSaksbehandlere:{defaultValue:null,description:"",name:"hentAvdelingensSaksbehandlere",required:!0,type:{name:"(params: { avdelingEnhet: string; }) => void"}}}}}catch{}const oe=({valgtAvdelingEnhet:e,avdelingensSaksbehandlere:t,hentAvdelingensSaksbehandlere:a})=>c(se,{saksbehandlere:t,valgtAvdelingEnhet:e,avdelingensSaksbehandlere:t,hentAvdelingensSaksbehandlere:a});try{oe.displayName="EndreSaksbehandlereIndex",oe.__docgenInfo={description:"EndreSaksbehandlereIndex",displayName:"EndreSaksbehandlereIndex",props:{avdelingensSaksbehandlere:{defaultValue:null,description:"",name:"avdelingensSaksbehandlere",required:!0,type:{name:"Readonly<{ brukerIdent: string; navn: string; avdelingsnavn: string[]; }>[]"}},valgtAvdelingEnhet:{defaultValue:null,description:"",name:"valgtAvdelingEnhet",required:!0,type:{name:"string"}},hentAvdelingensSaksbehandlere:{defaultValue:null,description:"",name:"hentAvdelingensSaksbehandlere",required:!0,type:{name:"(params: { avdelingEnhet: string; }) => void"}}}}}catch{}const le=({valgtAvdelingEnhet:e,avdelingensSaksbehandlere:t})=>{const[a,n]=s.useState(),r=s.useCallback(()=>n(void 0),[]);return c(In,{setValgtSakslisteId:n,valgtSakslisteId:a,valgtAvdelingEnhet:e,avdelingensSaksbehandlere:t,resetValgtSakslisteId:r})};try{le.displayName="EndreBehandlingskoerIndex",le.__docgenInfo={description:"EndreBehandlingskoerIndex",displayName:"EndreBehandlingskoerIndex",props:{valgtAvdelingEnhet:{defaultValue:null,description:"",name:"valgtAvdelingEnhet",required:!0,type:{name:"string"}},avdelingensSaksbehandlere:{defaultValue:null,description:"",name:"avdelingensSaksbehandlere",required:!0,type:{name:"Readonly<{ brukerIdent: string; navn: string; avdelingsnavn: string[]; }>[]"}}}}}catch{}const qt=[],ie=({valgtAvdelingEnhet:e})=>{const{data:t=qt,startRequest:a}=y.useRestApiRunner(R.RESERVASJONER_FOR_AVDELING),{startRequest:n}=y.useRestApiRunner(R.AVDELINGSLEDER_OPPHEVER_RESERVASJON),r=y.useGlobalStateRestApiData(Y.KODEVERK_LOS);s.useEffect(()=>{a({avdelingEnhet:e})},[]);const o=s.useCallback(i=>n({oppgaveId:i}).then(()=>a({avdelingEnhet:e})),[e]),l=s.useCallback(()=>a({avdelingEnhet:e}),[e]);return c(Ln,{opphevReservasjon:o,reservasjoner:t,hentAvdelingensReservasjoner:l,alleKodeverk:r})};try{ie.displayName="ReservasjonerIndex",ie.__docgenInfo={description:"",displayName:"ReservasjonerIndex",props:{valgtAvdelingEnhet:{defaultValue:null,description:"",name:"valgtAvdelingEnhet",required:!0,type:{name:"string"}}}}}catch{}const Ut="_padding_eb62i_1",be={padding:Ut},de=({setValgtAvdelingEnhet:e,valgtAvdelingEnhet:t,avdelinger:a})=>{const n=s.useCallback(r=>{const o=r.target.value;bn("avdelingEnhet",o),e(o)},[a]);return a?c("div",{className:be.padding,children:c(ln,{size:"small",hideLabel:!0,label:"",onChange:n,value:t,className:be.padding,children:a.map(r=>c("option",{value:r.avdelingEnhet,children:`${r.avdelingEnhet} ${r.navn}`},r.avdelingEnhet))})}):null};try{de.displayName="Avdelingsvelger",de.__docgenInfo={description:"",displayName:"Avdelingsvelger",props:{setValgtAvdelingEnhet:{defaultValue:null,description:"",name:"setValgtAvdelingEnhet",required:!0,type:{name:"(avdelingEnhet: string) => void"}},valgtAvdelingEnhet:{defaultValue:null,description:"",name:"valgtAvdelingEnhet",required:!1,type:{name:"string"}},avdelinger:{defaultValue:null,description:"",name:"avdelinger",required:!1,type:{name:"Readonly<{ avdelingEnhet: string; navn: string; kreverKode6: boolean; }>[]"}}}}}catch{}const zt="_paddingHeader_yllsv_1",Jt="_padding_yllsv_1",ve={paddingHeader:zt,padding:Jt},Qt=dn(cn),ge="4867",Wt=[],Zt=(e,t,a)=>{if(t.length>0&&!a){let n=t.some(o=>o.avdelingEnhet===ge)?ge:t[0].avdelingEnhet;const r=G("avdelingEnhet");r&&(t.some(o=>o.avdelingEnhet===r)?n=r:vn("avdelingEnhet")),e(n)}},Xt=e=>e==="?"||!e,ea=(e,t)=>{const a=Xt(e)?{}:ue(e);return En({...a,...t})},na=(e,t)=>({...e,search:ea(e.search,t)}),ta=e=>t=>na(e,{fane:t}),aa=(e,t,a,n)=>{switch(e){case S.BEHANDLINGSKOER:return c(le,{valgtAvdelingEnhet:t,avdelingensSaksbehandlere:n});case S.SAKSBEHANDLERE:return c(oe,{valgtAvdelingEnhet:t,hentAvdelingensSaksbehandlere:a,avdelingensSaksbehandlere:n});case S.NOKKELTALL:return c(re,{valgtAvdelingEnhet:t});case S.RESERVASJONER:return c(ie,{valgtAvdelingEnhet:t});default:return null}},B={[S.BEHANDLINGSKOER]:"AvdelingslederIndex.Behandlingskoer",[S.SAKSBEHANDLERE]:"AvdelingslederIndex.Saksbehandlere",[S.NOKKELTALL]:"AvdelingslederIndex.Nokkeltall",[S.RESERVASJONER]:"AvdelingslederIndex.Reservasjoner"},ra=e=>{const t=ue(e.search);return t.avdelingsleder?t.avdelingsleder:S.BEHANDLINGSKOER},ce=({navAnsatt:e})=>{const[t,a]=s.useState(),{selected:n,location:r}=ne({paramName:"fane",isQueryParam:!0}),o=y.useRestApi(R.AVDELINGER,void 0,{isCachingOn:!0,suspendRequest:!(e!=null&&e.kanOppgavestyre)}),l=o==null?void 0:o.data,i=l?l.filter(p=>!!(e!=null&&e.kanBehandleKode6)||!p.kreverKode6):[];s.useEffect(()=>{o.state===q.SUCCESS&&Zt(a,i,t)},[o]);const{startRequest:E,data:d=Wt}=y.useRestApiRunner(R.SAKSBEHANDLERE_FOR_AVDELING),f=s.useCallback(p=>E(p,!0),[]);s.useEffect(()=>{t&&f({avdelingEnhet:t})},[t]);const u=ta(r),m=n||ra(r),A=un();return e!=null&&e.kanOppgavestyre?o.state!==q.SUCCESS?null:t?j(te,{children:[c(de,{valgtAvdelingEnhet:t,avdelinger:i,setValgtAvdelingEnhet:a}),c(k,{sixteenPx:!0}),c(O,{size:"small",value:m,onChange:p=>{A(u(p))},className:ve.paddingHeader,children:j(O.List,{children:[c(O.Tab,{value:S.BEHANDLINGSKOER,label:c(M,{size:"small",children:c(K.FormattedMessage,{id:B[S.BEHANDLINGSKOER]})})}),c(O.Tab,{value:S.NOKKELTALL,label:c(M,{size:"small",children:c(K.FormattedMessage,{id:B[S.NOKKELTALL]})})}),c(O.Tab,{value:S.SAKSBEHANDLERE,label:c(M,{size:"small",children:c(K.FormattedMessage,{id:B[S.SAKSBEHANDLERE]})})}),c(O.Tab,{value:S.RESERVASJONER,label:c(M,{size:"small",children:c(K.FormattedMessage,{id:B[S.RESERVASJONER]})})})]})}),c(kn,{className:ve.padding,children:aa(m,t,f,d)})]},t):c(fn,{}):c(_n,{})},sa=({setLosErIkkeTilgjengelig:e,navAnsatt:t})=>{const{addErrorMessage:a}=Rn();Ve.setAddErrorMessageHandler(a);const n=y.useGlobalStateRestApiData(Y.KODEVERK_LOS),r=y.useGlobalStateRestApi(Y.KODEVERK_LOS,void 0,{suspendRequest:!!n});return s.useEffect(()=>{!n&&r.state===q.ERROR&&e()},[r.state]),!n&&r.state!==q.SUCCESS?null:c(K.RawIntlProvider,{value:Qt,children:c(ce,{navAnsatt:t})})},ze=sa;try{ce.displayName="AvdelingslederIndex",ce.__docgenInfo={description:"",displayName:"AvdelingslederIndex",props:{setLosErIkkeTilgjengelig:{defaultValue:null,description:"",name:"setLosErIkkeTilgjengelig",required:!0,type:{name:"() => void"}},navAnsatt:{defaultValue:null,description:"",name:"navAnsatt",required:!1,type:{name:"Readonly<{ brukernavn: string; funksjonellTid?: string; kanBehandleKode6: boolean; kanBehandleKode7: boolean; kanBehandleKodeEgenAnsatt: boolean; kanBeslutte: boolean; kanOppgavestyre: boolean; ... 4 more ...; skalViseDetaljerteFeilmeldinger: boolean; }>"}}}}}catch{}const Ya={title:"los/avdelingsleder/AvdelingslederIndex",component:ze,decorators:[pn]},Je={kanOppgavestyre:!0,kanBehandleKode6:!0},J=({avdelinger:e,navAnsatt:t})=>{const a=[{key:Y.KODEVERK_LOS.name,data:An,global:!0},{key:R.AVDELINGER.name,data:e},{key:R.SAKSBEHANDLERE_FOR_AVDELING.name,data:[]},{key:R.OPPGAVE_ANTALL.name,data:1},{key:R.LAGRE_SAKSLISTE_NAVN.name,data:void 0},{key:R.LAGRE_SAKSLISTE_SORTERING.name,data:void 0},{key:R.LAGRE_SAKSLISTE_SORTERING_INTERVALL.name,data:void 0},{key:R.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE.name,data:void 0},{key:R.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO.name,data:void 0},{key:R.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE.name,data:void 0},{key:R.LAGRE_SAKSLISTE_BEHANDLINGSTYPE.name,data:void 0},{key:R.LAGRE_SAKSLISTE_ANDRE_KRITERIER.name,data:void 0},{key:R.OPPGAVE_AVDELING_ANTALL.name,data:1},{key:R.SAKSLISTER_FOR_AVDELING.name,data:[]},{key:R.HENT_OPPGAVER_FOR_AVDELING.name,data:[]},{key:R.HENT_OPPGAVER_PER_DATO.name,data:[]},{key:R.HENT_OPPGAVER_APNE_ELLER_PA_VENT.name,data:[]},{key:R.HENT_BEHANDLINGER_FRISTUTLOP.name,data:[]},{key:R.HENT_OPPGAVER_PER_FORSTE_STONADSDAG.name,data:[]},{key:R.RESERVASJONER_FOR_AVDELING.name,data:[]}];return c(nn,{data:a,requestApi:Ve,children:c(ze,{setLosErIkkeTilgjengelig:()=>{},navAnsatt:t})})},V=J.bind({});V.args={avdelinger:[{avdelingEnhet:"1234",navn:"NAV Oslo",kreverKode6:!0},{avdelingEnhet:"123",navn:"NAV Viken",kreverKode6:!1}],navAnsatt:Je};const D=J.bind({});D.args={avdelinger:[],navAnsatt:Je};const x=J.bind({});x.args={avdelinger:[],navAnsatt:{kanOppgavestyre:!1,kanBehandleKode6:!1}};const C=J.bind({});C.args={avdelinger:[{avdelingEnhet:"1234",navn:"NAV Oslo",kreverKode6:!0},{avdelingEnhet:"123",navn:"NAV Viken",kreverKode6:!1}],navAnsatt:{kanOppgavestyre:!0,kanBehandleKode6:!1}};var Se,ye,he;V.parameters={...V.parameters,docs:{...(Se=V.parameters)==null?void 0:Se.docs,source:{originalSource:`({
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
    key: RestApiPathsKeys.HENT_BEHANDLINGER_FRISTUTLOP.name,
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
}`,...(he=(ye=V.parameters)==null?void 0:ye.docs)==null?void 0:he.source}}};var Pe,Te,Ne;D.parameters={...D.parameters,docs:{...(Pe=D.parameters)==null?void 0:Pe.docs,source:{originalSource:`({
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
    key: RestApiPathsKeys.HENT_BEHANDLINGER_FRISTUTLOP.name,
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
}`,...(Ne=(Te=D.parameters)==null?void 0:Te.docs)==null?void 0:Ne.source}}};var Ie,Le,Oe;x.parameters={...x.parameters,docs:{...(Ie=x.parameters)==null?void 0:Ie.docs,source:{originalSource:`({
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
    key: RestApiPathsKeys.HENT_BEHANDLINGER_FRISTUTLOP.name,
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
}`,...(Oe=(Le=x.parameters)==null?void 0:Le.docs)==null?void 0:Oe.source}}};var ke,$e,Ke;C.parameters={...C.parameters,docs:{...(ke=C.parameters)==null?void 0:ke.docs,source:{originalSource:`({
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
    key: RestApiPathsKeys.HENT_BEHANDLINGER_FRISTUTLOP.name,
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
}`,...(Ke=($e=C.parameters)==null?void 0:$e.docs)==null?void 0:Ke.source}}};const qa=["Default","LasteIkonFørValgtAvdelingErSatt","HarIkkeTilgang","SkalFiltrereBortAvdelingerSomKreverKode6"];export{V as Default,x as HarIkkeTilgang,D as LasteIkonFørValgtAvdelingErSatt,C as SkalFiltrereBortAvdelingerSomKreverKode6,qa as __namedExportsOrder,Ya as default};
//# sourceMappingURL=AvdelingslederIndex.stories-414b2e2b.js.map
