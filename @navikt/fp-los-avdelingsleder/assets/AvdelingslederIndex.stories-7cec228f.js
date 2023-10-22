import{j as c}from"./jsx-runtime-9c4ae004.js";import{k as Xe}from"./index.es-590f2202.js";import{o as Ke,c as C,a as en,q as nn,z as tn,A as an,E as rn,I as ce,b as k,J as sn,k as on,P as ln,Q as dn,F as j,x as cn,m as un,U as fn,V as En,j as pn}from"./nb_NO-8e3f1330.js";import{b as y,R,a as B,r as xe}from"./fplosRestApi-d59e5073.js";import{r as s,R as _,b as An}from"./index-1b03fe98.js";import{a as mn,y as Y}from"./index.es-5c2532e8.js";import{I as Rn}from"./IkkeTilgangTilAvdelingslederPanel-9d7c83bc.js";import{g as K,s as _n,r as bn}from"./StoreValuesInLocalStorage-6ed602ef.js";import{F as vn}from"./FordelingAvBehandlingstypePanel-a76790fb.js";import{T as gn}from"./TilBehandlingPanel-a68706e0.js";import{O as Sn}from"./OppgaverPerForsteStonadsdagPanel-e3111819.js";import{O as yn}from"./OppgaverSomErApneEllerPaVentPanel-61809ef4.js";import{V as hn}from"./VentefristUtløperPanel-b80871f5.js";import{L as Pn}from"./LeggTilSaksbehandlerForm-8ee52664.js";import{S as Tn}from"./SaksbehandlereTabell-fbc38d85.js";import{E as Nn}from"./EndreSakslisterPanel-2998421d.js";import{R as In}from"./ReservasjonerTabell-7332c3e7.js";import{_ as h}from"./extends-98964cd2.js";import{r as Ln}from"./index-6fd5a17b.js";import{H as w}from"./Heading-5b0d475a.js";import{P as On}from"./Panel-c67c7e2e.js";import"./index.es-657e045f.js";import"./index.es-baa469aa.js";import"./index.es-44bebe60.js";import"./Provider-8782cb72.js";import"./useLosKodeverk-52bc8ef8.js";import"./isSameOrAfter-48a89950.js";import"./isSameOrBefore-ea99da6c.js";import"./SletteSaksbehandlerModal-10a3bb1e.js";import"./GjeldendeSakslisterTabell-176f6182.js";import"./SletteSakslisteModal-245b82a6.js";import"./SaksbehandlereForSakslisteForm-bbbcb9ca.js";import"./VStack-ca5ae48c.js";import"./UtvalgskriterierForSakslisteForm-5c189ac7.js";import"./BehandlingstypeVelger-2368e842.js";import"./AndreKriterierVelger-3c3dea15.js";import"./FagsakYtelseTypeVelger-3ae68fd3.js";import"./SorteringVelger-c5d0739c.js";var kn=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};const $n=s.forwardRef((e,t)=>{var{title:a,titleId:n}=e,r=kn(e,["title","titleId"]);let o=Ke();return o=a?n||"title-"+o:void 0,s.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:t,"aria-labelledby":o},r),a?s.createElement("title",{id:o},a):null,s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.53 5.97a.75.75 0 0 1 0 1.06L9.56 12l4.97 4.97a.75.75 0 1 1-1.06 1.06l-5.5-5.5a.75.75 0 0 1 0-1.06l5.5-5.5a.75.75 0 0 1 1.06 0Z",fill:"currentColor"}))}),Kn=$n;var xn=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};const Gn=s.forwardRef((e,t)=>{var{title:a,titleId:n}=e,r=xn(e,["title","titleId"]);let o=Ke();return o=a?n||"title-"+o:void 0,s.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:t,"aria-labelledby":o},r),a?s.createElement("title",{id:o},a):null,s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.47 5.97a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 0 1 0 1.06l-5.5 5.5a.75.75 0 1 1-1.06-1.06L14.44 12 9.47 7.03a.75.75 0 0 1 0-1.06Z",fill:"currentColor"}))}),Vn=Gn;function N(e,t,{checkForDefaultPrevented:a=!0}={}){return function(r){if(e==null||e(r),a===!1||!r.defaultPrevented)return t==null?void 0:t(r)}}function ue(e,t=[]){let a=[];function n(o,l){const i=s.createContext(l),E=a.length;a=[...a,l];function d(u){const{scope:m,children:A,...p}=u,g=(m==null?void 0:m[e][E])||i,v=s.useMemo(()=>p,Object.values(p));return s.createElement(g.Provider,{value:v},A)}function f(u,m){const A=(m==null?void 0:m[e][E])||i,p=s.useContext(A);if(p)return p;if(l!==void 0)return l;throw new Error(`\`${u}\` must be used within \`${o}\``)}return d.displayName=o+"Provider",[d,f]}const r=()=>{const o=a.map(l=>s.createContext(l));return function(i){const E=(i==null?void 0:i[e])||o;return s.useMemo(()=>({[`__scope${e}`]:{...i,[e]:E}}),[i,E])}};return r.scopeName=e,[n,Dn(r,...t)]}function Dn(...e){const t=e[0];if(e.length===1)return t;const a=()=>{const n=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(o){const l=n.reduce((i,{useScope:E,scopeName:d})=>{const u=E(o)[`__scope${d}`];return{...i,...u}},{});return s.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])}};return a.scopeName=t.scopeName,a}function Cn(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function Ge(...e){return t=>e.forEach(a=>Cn(a,t))}function W(...e){return s.useCallback(Ge(...e),e)}const q=s.forwardRef((e,t)=>{const{children:a,...n}=e,r=s.Children.toArray(a),o=r.find(jn);if(o){const l=o.props.children,i=r.map(E=>E===o?s.Children.count(l)>1?s.Children.only(null):s.isValidElement(l)?l.props.children:null:E);return s.createElement(Z,h({},n,{ref:t}),s.isValidElement(l)?s.cloneElement(l,void 0,i):null)}return s.createElement(Z,h({},n,{ref:t}),a)});q.displayName="Slot";const Z=s.forwardRef((e,t)=>{const{children:a,...n}=e;return s.isValidElement(a)?s.cloneElement(a,{...wn(n,a.props),ref:Ge(t,a.ref)}):s.Children.count(a)>1?s.Children.only(null):null});Z.displayName="SlotClone";const Fn=({children:e})=>s.createElement(s.Fragment,null,e);function jn(e){return s.isValidElement(e)&&e.type===Fn}function wn(e,t){const a={...t};for(const n in t){const r=e[n],o=t[n];/^on[A-Z]/.test(n)?a[n]=(...i)=>{o==null||o(...i),r==null||r(...i)}:n==="style"?a[n]={...r,...o}:n==="className"&&(a[n]=[r,o].filter(Boolean).join(" "))}return{...e,...a}}function Mn(e){const t=e+"CollectionProvider",[a,n]=ue(t),[r,o]=a(t,{collectionRef:{current:null},itemMap:new Map}),l=A=>{const{scope:p,children:g}=A,v=_.useRef(null),b=_.useRef(new Map).current;return _.createElement(r,{scope:p,itemMap:b,collectionRef:v},g)},i=e+"CollectionSlot",E=_.forwardRef((A,p)=>{const{scope:g,children:v}=A,b=o(i,g),P=W(p,b.collectionRef);return _.createElement(q,{ref:P},v)}),d=e+"CollectionItemSlot",f="data-radix-collection-item",u=_.forwardRef((A,p)=>{const{scope:g,children:v,...b}=A,P=_.useRef(null),F=W(p,P),I=o(d,g);return _.useEffect(()=>(I.itemMap.set(P,{ref:P,...b}),()=>void I.itemMap.delete(P))),_.createElement(q,{[f]:"",ref:F},v)});function m(A){const p=o(e+"CollectionConsumer",A);return _.useCallback(()=>{const v=p.collectionRef.current;if(!v)return[];const b=Array.from(v.querySelectorAll(`[${f}]`));return Array.from(p.itemMap.values()).sort((I,T)=>b.indexOf(I.ref.current)-b.indexOf(T.ref.current))},[p.collectionRef,p.itemMap])}return[{Provider:l,Slot:E,ItemSlot:u},m,n]}const Hn=globalThis!=null&&globalThis.document?s.useLayoutEffect:()=>{},Bn=An["useId".toString()]||(()=>{});let Yn=0;function Ve(e){const[t,a]=s.useState(Bn());return Hn(()=>{e||a(n=>n??String(Yn++))},[e]),e||(t?`radix-${t}`:"")}const qn=["a","button","div","h2","h3","img","li","nav","ol","p","span","svg","ul"],$=qn.reduce((e,t)=>{const a=s.forwardRef((n,r)=>{const{asChild:o,...l}=n,i=o?q:t;return s.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),s.createElement(i,h({},l,{ref:r}))});return a.displayName=`Primitive.${t}`,{...e,[t]:a}},{});function fe(e){const t=s.useRef(e);return s.useEffect(()=>{t.current=e}),s.useMemo(()=>(...a)=>{var n;return(n=t.current)===null||n===void 0?void 0:n.call(t,...a)},[])}function De({prop:e,defaultProp:t,onChange:a=()=>{}}){const[n,r]=Un({defaultProp:t,onChange:a}),o=e!==void 0,l=o?e:n,i=fe(a),E=s.useCallback(d=>{if(o){const u=typeof d=="function"?d(e):d;u!==e&&i(u)}else r(d)},[o,e,r,i]);return[l,E]}function Un({defaultProp:e,onChange:t}){const a=s.useState(e),[n]=a,r=s.useRef(n),o=fe(t);return s.useEffect(()=>{r.current!==n&&(o(n),r.current=n)},[n,r,o]),a}const zn=s.createContext(void 0);function Ce(e){const t=s.useContext(zn);return e||t||"ltr"}const Q="rovingFocusGroup.onEntryFocus",Jn={bubbles:!1,cancelable:!0},Ee="RovingFocusGroup",[X,Fe,Qn]=Mn(Ee),[Wn,je]=ue(Ee,[Qn]),[Zn,Xn]=Wn(Ee),et=s.forwardRef((e,t)=>s.createElement(X.Provider,{scope:e.__scopeRovingFocusGroup},s.createElement(X.Slot,{scope:e.__scopeRovingFocusGroup},s.createElement(nt,h({},e,{ref:t}))))),nt=s.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:a,orientation:n,loop:r=!1,dir:o,currentTabStopId:l,defaultCurrentTabStopId:i,onCurrentTabStopIdChange:E,onEntryFocus:d,...f}=e,u=s.useRef(null),m=W(t,u),A=Ce(o),[p=null,g]=De({prop:l,defaultProp:i,onChange:E}),[v,b]=s.useState(!1),P=fe(d),F=Fe(a),I=s.useRef(!1);return s.useEffect(()=>{const T=u.current;if(T)return T.addEventListener(Q,P),()=>T.removeEventListener(Q,P)},[P]),s.createElement(Zn,{scope:a,orientation:n,dir:A,loop:r,currentTabStopId:p,onItemFocus:s.useCallback(T=>g(T),[g]),onItemShiftTab:s.useCallback(()=>b(!0),[])},s.createElement($.div,h({tabIndex:v?-1:0,"data-orientation":n},f,{ref:m,style:{outline:"none",...e.style},onMouseDown:N(e.onMouseDown,()=>{I.current=!0}),onFocus:N(e.onFocus,T=>{const Je=!I.current;if(T.target===T.currentTarget&&Je&&!v){const me=new CustomEvent(Q,Jn);if(T.currentTarget.dispatchEvent(me),!me.defaultPrevented){const J=F().filter(L=>L.focusable),Qe=J.find(L=>L.active),We=J.find(L=>L.id===p),Ze=[Qe,We,...J].filter(Boolean).map(L=>L.ref.current);we(Ze)}}I.current=!1}),onBlur:N(e.onBlur,()=>b(!1))})))}),tt="RovingFocusGroupItem",at=s.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:a,focusable:n=!0,active:r=!1,...o}=e,l=Ve(),i=Xn(tt,a),E=i.currentTabStopId===l,d=Fe(a);return s.createElement(X.ItemSlot,{scope:a,id:l,focusable:n,active:r},s.createElement($.span,h({tabIndex:E?0:-1,"data-orientation":i.orientation},o,{ref:t,onMouseDown:N(e.onMouseDown,f=>{n?i.onItemFocus(l):f.preventDefault()}),onFocus:N(e.onFocus,()=>i.onItemFocus(l)),onKeyDown:N(e.onKeyDown,f=>{if(f.key==="Tab"&&f.shiftKey){i.onItemShiftTab();return}if(f.target!==f.currentTarget)return;const u=ot(f,i.orientation,i.dir);if(u!==void 0){f.preventDefault();let A=d().filter(p=>p.focusable).map(p=>p.ref.current);if(u==="last")A.reverse();else if(u==="prev"||u==="next"){u==="prev"&&A.reverse();const p=A.indexOf(f.currentTarget);A=i.loop?lt(A,p+1):A.slice(p+1)}setTimeout(()=>we(A))}})})))}),rt={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function st(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function ot(e,t,a){const n=st(e.key,a);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(n))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(n)))return rt[n]}function we(e){const t=document.activeElement;for(const a of e)if(a===t||(a.focus(),document.activeElement!==t))return}function lt(e,t){return e.map((a,n)=>e[(t+n)%e.length])}const it=et,dt=at;function ct(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function ut(...e){return t=>e.forEach(a=>ct(a,t))}function ft(...e){return s.useCallback(ut(...e),e)}const Re=globalThis!=null&&globalThis.document?s.useLayoutEffect:()=>{};function Et(e,t){return s.useReducer((a,n)=>{const r=t[a][n];return r??a},e)}const Me=e=>{const{present:t,children:a}=e,n=pt(t),r=typeof a=="function"?a({present:n.isPresent}):s.Children.only(a),o=ft(n.ref,r.ref);return typeof a=="function"||n.isPresent?s.cloneElement(r,{ref:o}):null};Me.displayName="Presence";function pt(e){const[t,a]=s.useState(),n=s.useRef({}),r=s.useRef(e),o=s.useRef("none"),l=e?"mounted":"unmounted",[i,E]=Et(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return s.useEffect(()=>{const d=M(n.current);o.current=i==="mounted"?d:"none"},[i]),Re(()=>{const d=n.current,f=r.current;if(f!==e){const m=o.current,A=M(d);e?E("MOUNT"):A==="none"||(d==null?void 0:d.display)==="none"?E("UNMOUNT"):E(f&&m!==A?"ANIMATION_OUT":"UNMOUNT"),r.current=e}},[e,E]),Re(()=>{if(t){const d=u=>{const A=M(n.current).includes(u.animationName);u.target===t&&A&&Ln.flushSync(()=>E("ANIMATION_END"))},f=u=>{u.target===t&&(o.current=M(n.current))};return t.addEventListener("animationstart",f),t.addEventListener("animationcancel",d),t.addEventListener("animationend",d),()=>{t.removeEventListener("animationstart",f),t.removeEventListener("animationcancel",d),t.removeEventListener("animationend",d)}}else E("ANIMATION_END")},[t,E]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:s.useCallback(d=>{d&&(n.current=getComputedStyle(d)),a(d)},[])}}function M(e){return(e==null?void 0:e.animationName)||"none"}const He="Tabs",[At,Ba]=ue(He,[je]),Be=je(),[mt,pe]=At(He),Rt=s.forwardRef((e,t)=>{const{__scopeTabs:a,value:n,onValueChange:r,defaultValue:o,orientation:l="horizontal",dir:i,activationMode:E="automatic",...d}=e,f=Ce(i),[u,m]=De({prop:n,onChange:r,defaultProp:o});return s.createElement(mt,{scope:a,baseId:Ve(),value:u,onValueChange:m,orientation:l,dir:f,activationMode:E},s.createElement($.div,h({dir:f,"data-orientation":l},d,{ref:t})))}),_t="TabsList",bt=s.forwardRef((e,t)=>{const{__scopeTabs:a,loop:n=!0,...r}=e,o=pe(_t,a),l=Be(a);return s.createElement(it,h({asChild:!0},l,{orientation:o.orientation,dir:o.dir,loop:n}),s.createElement($.div,h({role:"tablist","aria-orientation":o.orientation},r,{ref:t})))}),vt="TabsTrigger",gt=s.forwardRef((e,t)=>{const{__scopeTabs:a,value:n,disabled:r=!1,...o}=e,l=pe(vt,a),i=Be(a),E=Ye(l.baseId,n),d=qe(l.baseId,n),f=n===l.value;return s.createElement(dt,h({asChild:!0},i,{focusable:!r,active:f}),s.createElement($.button,h({type:"button",role:"tab","aria-selected":f,"aria-controls":d,"data-state":f?"active":"inactive","data-disabled":r?"":void 0,disabled:r,id:E},o,{ref:t,onMouseDown:N(e.onMouseDown,u=>{!r&&u.button===0&&u.ctrlKey===!1?l.onValueChange(n):u.preventDefault()}),onKeyDown:N(e.onKeyDown,u=>{[" ","Enter"].includes(u.key)&&l.onValueChange(n)}),onFocus:N(e.onFocus,()=>{const u=l.activationMode!=="manual";!f&&!r&&u&&l.onValueChange(n)})})))}),St="TabsContent",yt=s.forwardRef((e,t)=>{const{__scopeTabs:a,value:n,forceMount:r,children:o,...l}=e,i=pe(St,a),E=Ye(i.baseId,n),d=qe(i.baseId,n),f=n===i.value,u=s.useRef(f);return s.useEffect(()=>{const m=requestAnimationFrame(()=>u.current=!1);return()=>cancelAnimationFrame(m)},[]),s.createElement(Me,{present:r||f},({present:m})=>s.createElement($.div,h({"data-state":f?"active":"inactive","data-orientation":i.orientation,role:"tabpanel","aria-labelledby":E,hidden:!m,id:d,tabIndex:0},l,{ref:t,style:{...e.style,animationDuration:u.current?"0s":void 0}}),m&&o))});function Ye(e,t){return`${e}-trigger-${t}`}function qe(e,t){return`${e}-content-${t}`}const ht=Rt,Pt=gt;var Tt=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};const Nt=s.forwardRef((e,t)=>{var a,{className:n,as:r="button",label:o,icon:l,value:i}=e,E=Tt(e,["className","as","label","icon","value"]);const d=s.useContext(Ae);return!o&&!l?(console.error("<Tabs.Tab/> needs label/icon"),null):_.createElement(Pt,{value:i,asChild:!0},_.createElement(r,Object.assign({ref:t,className:C("navds-tabs__tab",`navds-tabs__tab--${(a=d==null?void 0:d.size)!==null&&a!==void 0?a:"medium"}`,`navds-tabs__tab-icon--${d==null?void 0:d.iconPosition}`,n,{"navds-tabs__tab--icon-only":l&&!o})},E),_.createElement(en,{as:"span",className:"navds-tabs__tab-inner",size:d==null?void 0:d.size},l,o)))}),It=Nt;var Lt=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};const Ot=s.forwardRef((e,t)=>{var{className:a}=e,n=Lt(e,["className"]);const r=s.useContext(Ae),o=s.useRef(null),l=s.useMemo(()=>nn([o,t]),[t]),[i,E]=s.useState({start:!1,end:!1}),d=s.useMemo(()=>tn(()=>{if(!(o!=null&&o.current))return;const{scrollWidth:m,clientWidth:A}=o.current,p=o.current.scrollLeft,g=p>1,v=p<m-A-1;E(b=>g===b.start&&v===b.end?b:{start:g,end:v})}),[]);s.useEffect(()=>{var m,A,p;const g=()=>d(),v=(p=(A=(m=o.current)===null||m===void 0?void 0:m.ownerDocument)!==null&&A!==void 0?A:document)!==null&&p!==void 0?p:window;v.addEventListener("resize",g);let b;return typeof ResizeObserver<"u"&&(b=new ResizeObserver(g),b.observe(o.current)),()=>{v.removeEventListener("resize",g),b&&b.disconnect()}},[d]),s.useEffect(()=>{d()}),s.useEffect(()=>()=>{d.clear()},[d]);const f=({dir:m,hidden:A})=>_.createElement("div",{className:C("navds-tabs__scroll-button",{"navds-tabs__scroll-button--hidden":A}),onClick:()=>{o.current&&(o.current.scrollLeft+=m*100)}},m===-1?_.createElement(Kn,{title:"scroll tilbake"}):_.createElement(Vn,{title:"scroll neste"})),u=i.end||i.start;return _.createElement("div",{className:"navds-tabs__tablist-wrapper"},u&&_.createElement(f,{dir:-1,hidden:!i.start}),_.createElement(bt,Object.assign({},n,{ref:l,onScroll:d,loop:r==null?void 0:r.loop,className:C("navds-tabs__tablist",a)})),u&&_.createElement(f,{dir:1,hidden:!i.end}))}),kt=Ot;var $t=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};const Kt=s.forwardRef((e,t)=>{var{className:a}=e,n=$t(e,["className"]);return _.createElement(yt,Object.assign({},n,{ref:t,className:C("navds-tabs__tabpanel",a)}))}),xt=Kt;var Gt=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};const Ae=s.createContext(null),U=s.forwardRef((e,t)=>{var{className:a,children:n,onChange:r,size:o="medium",selectionFollowsFocus:l=!1,loop:i=!1,iconPosition:E="left"}=e,d=Gt(e,["className","children","onChange","size","selectionFollowsFocus","loop","iconPosition"]);return _.createElement(ht,Object.assign({},d,{ref:t,className:C("navds-tabs",a,`navds-tabs--${o}`),activationMode:l?"automatic":"manual",onValueChange:r}),_.createElement(Ae.Provider,{value:{size:o,loop:i,iconPosition:E}},n))});U.Tab=It;U.List=kt;U.Panel=xt;const O=U,Vt={paramName:"",parse:e=>e,isQueryParam:!1},Dt=(e,t,a)=>{const n=a.isQueryParam?ce(t.search):e;return a.parse(n[a.paramName])};function ee(e){const t={...Vt,...e},a=an(),n=rn(),r=Dt(n,a,t);return{location:a,selected:r}}try{ee.displayName="useTrackRouteParam",ee.__docgenInfo={description:"",displayName:"useTrackRouteParam",props:{paramName:{defaultValue:null,description:"",name:"paramName",required:!1,type:{name:"string"}},parse:{defaultValue:null,description:"",name:"parse",required:!1,type:{name:"((a: any) => any)"}},isQueryParam:{defaultValue:null,description:"",name:"isQueryParam",required:!1,type:{name:"boolean"}}}}}catch{}const Ct="_container_1sikf_1",Ft={container:Ct},ne=({children:e})=>c.jsx("div",{className:Ft.container,children:e});try{ne.displayName="AvdelingslederDashboard",ne.__docgenInfo={description:"AvdelingslederDashboard",displayName:"AvdelingslederDashboard",props:{}}}catch{}const S={BEHANDLINGSKOER:"behandlingskoer",SAKSBEHANDLERE:"saksbehandlere",NOKKELTALL:"nokkeltall",RESERVASJONER:"reservasjoner"},te=({oppgaverForAvdeling:e,oppgaverPerDato:t,behandlingerPaVent:a,oppgaverPerForsteStonadsdag:n,oppgaverApneEllerPaVent:r})=>{const l=s.useRef(null);return c.jsxs("div",{ref:l,children:[c.jsx(gn,{height:300,oppgaverPerDato:t,getValueFromLocalStorage:K}),c.jsx(k,{twentyPx:!0}),c.jsx(vn,{height:300,oppgaverForAvdeling:e,getValueFromLocalStorage:K}),c.jsx(k,{twentyPx:!0}),c.jsx(hn,{height:300,behandlingerPaVent:a,getValueFromLocalStorage:K}),c.jsx(k,{twentyPx:!0}),c.jsx(Sn,{height:300,oppgaverPerForsteStonadsdag:n}),c.jsx(k,{twentyPx:!0}),c.jsx(yn,{height:300,oppgaverApneEllerPaVent:r,getValueFromLocalStorage:K})]})};try{te.displayName="NokkeltallPanel",te.__docgenInfo={description:"NokkeltallPanel.",displayName:"NokkeltallPanel",props:{oppgaverForAvdeling:{defaultValue:null,description:"",name:"oppgaverForAvdeling",required:!0,type:{name:"Readonly<{ fagsakYtelseType: string; behandlingType: string; tilBehandling: boolean; antall: number; }>[]"}},oppgaverPerDato:{defaultValue:null,description:"",name:"oppgaverPerDato",required:!0,type:{name:"Readonly<{ fagsakYtelseType: string; behandlingType: string; opprettetDato: string; antall: number; }>[]"}},behandlingerPaVent:{defaultValue:null,description:"",name:"behandlingerPaVent",required:!0,type:{name:"Readonly<{ fagsakYtelseType: string; behandlingFrist: string; antall: number; }>[]"}},oppgaverPerForsteStonadsdag:{defaultValue:null,description:"",name:"oppgaverPerForsteStonadsdag",required:!0,type:{name:"Readonly<{ forsteStonadsdag: string; antall: number; }>[]"}},oppgaverApneEllerPaVent:{defaultValue:null,description:"",name:"oppgaverApneEllerPaVent",required:!0,type:{name:"Readonly<{ antall: number; behandlingType: string; behandlingVenteStatus: string; førsteUttakMåned?: string | undefined; }>[]"}}}}}catch{}const jt=[],wt=[],Mt=[],Ht=[],Bt=[],ae=({valgtAvdelingEnhet:e})=>{const{data:t=jt}=y.useRestApi(R.HENT_OPPGAVER_FOR_AVDELING,{avdelingEnhet:e}),{data:a=wt}=y.useRestApi(R.HENT_OPPGAVER_PER_DATO,{avdelingEnhet:e}),{data:n=Mt}=y.useRestApi(R.HENT_BEHANDLINGER_FRISTUTLOP,{avdelingEnhet:e}),{data:r=Ht}=y.useRestApi(R.HENT_OPPGAVER_PER_FORSTE_STONADSDAG,{avdelingEnhet:e}),{data:o=Bt}=y.useRestApi(R.HENT_OPPGAVER_APNE_ELLER_PA_VENT,{avdelingEnhet:e});return c.jsx(te,{oppgaverForAvdeling:t,oppgaverPerDato:a,behandlingerPaVent:n,oppgaverPerForsteStonadsdag:r,oppgaverApneEllerPaVent:o})};try{ae.displayName="NokkeltallIndex",ae.__docgenInfo={description:"NokkeltallIndex",displayName:"NokkeltallIndex",props:{valgtAvdelingEnhet:{defaultValue:null,description:"",name:"valgtAvdelingEnhet",required:!0,type:{name:"string"}}}}}catch{}const re=({saksbehandlere:e,valgtAvdelingEnhet:t,avdelingensSaksbehandlere:a,hentAvdelingensSaksbehandlere:n})=>c.jsxs(c.Fragment,{children:[c.jsx(Tn,{saksbehandlere:e,valgtAvdelingEnhet:t,hentAvdelingensSaksbehandlere:n}),c.jsx(k,{sixteenPx:!0}),c.jsx(Pn,{valgtAvdelingEnhet:t,avdelingensSaksbehandlere:a,hentAvdelingensSaksbehandlere:n})]});try{re.displayName="SaksbehandlerePanel",re.__docgenInfo={description:"SaksbehandlerePanel",displayName:"SaksbehandlerePanel",props:{saksbehandlere:{defaultValue:null,description:"",name:"saksbehandlere",required:!0,type:{name:"Readonly<{ brukerIdent: string; navn: string; avdelingsnavn: string[]; }>[]"}},valgtAvdelingEnhet:{defaultValue:null,description:"",name:"valgtAvdelingEnhet",required:!0,type:{name:"string"}},avdelingensSaksbehandlere:{defaultValue:null,description:"",name:"avdelingensSaksbehandlere",required:!0,type:{name:"Readonly<{ brukerIdent: string; navn: string; avdelingsnavn: string[]; }>[]"}},hentAvdelingensSaksbehandlere:{defaultValue:null,description:"",name:"hentAvdelingensSaksbehandlere",required:!0,type:{name:"(params: { avdelingEnhet: string; }) => void"}}}}}catch{}const se=({valgtAvdelingEnhet:e,avdelingensSaksbehandlere:t,hentAvdelingensSaksbehandlere:a})=>c.jsx(re,{saksbehandlere:t,valgtAvdelingEnhet:e,avdelingensSaksbehandlere:t,hentAvdelingensSaksbehandlere:a});try{se.displayName="EndreSaksbehandlereIndex",se.__docgenInfo={description:"EndreSaksbehandlereIndex",displayName:"EndreSaksbehandlereIndex",props:{avdelingensSaksbehandlere:{defaultValue:null,description:"",name:"avdelingensSaksbehandlere",required:!0,type:{name:"Readonly<{ brukerIdent: string; navn: string; avdelingsnavn: string[]; }>[]"}},valgtAvdelingEnhet:{defaultValue:null,description:"",name:"valgtAvdelingEnhet",required:!0,type:{name:"string"}},hentAvdelingensSaksbehandlere:{defaultValue:null,description:"",name:"hentAvdelingensSaksbehandlere",required:!0,type:{name:"(params: { avdelingEnhet: string; }) => void"}}}}}catch{}const oe=({valgtAvdelingEnhet:e,avdelingensSaksbehandlere:t})=>{const[a,n]=s.useState(),r=s.useCallback(()=>n(void 0),[]);return c.jsx(Nn,{setValgtSakslisteId:n,valgtSakslisteId:a,valgtAvdelingEnhet:e,avdelingensSaksbehandlere:t,resetValgtSakslisteId:r})};try{oe.displayName="EndreBehandlingskoerIndex",oe.__docgenInfo={description:"EndreBehandlingskoerIndex",displayName:"EndreBehandlingskoerIndex",props:{valgtAvdelingEnhet:{defaultValue:null,description:"",name:"valgtAvdelingEnhet",required:!0,type:{name:"string"}},avdelingensSaksbehandlere:{defaultValue:null,description:"",name:"avdelingensSaksbehandlere",required:!0,type:{name:"Readonly<{ brukerIdent: string; navn: string; avdelingsnavn: string[]; }>[]"}}}}}catch{}const Yt=[],le=({valgtAvdelingEnhet:e})=>{const{data:t=Yt,startRequest:a}=y.useRestApiRunner(R.RESERVASJONER_FOR_AVDELING),{startRequest:n}=y.useRestApiRunner(R.AVDELINGSLEDER_OPPHEVER_RESERVASJON),r=y.useGlobalStateRestApiData(B.KODEVERK_LOS);s.useEffect(()=>{a({avdelingEnhet:e})},[]);const o=s.useCallback(i=>n({oppgaveId:i}).then(()=>a({avdelingEnhet:e})),[e]),l=s.useCallback(()=>a({avdelingEnhet:e}),[e]);return c.jsx(In,{opphevReservasjon:o,reservasjoner:t,hentAvdelingensReservasjoner:l,alleKodeverk:r})};try{le.displayName="ReservasjonerIndex",le.__docgenInfo={description:"",displayName:"ReservasjonerIndex",props:{valgtAvdelingEnhet:{defaultValue:null,description:"",name:"valgtAvdelingEnhet",required:!0,type:{name:"string"}}}}}catch{}const qt="_padding_eb62i_1",_e={padding:qt},ie=({setValgtAvdelingEnhet:e,valgtAvdelingEnhet:t,avdelinger:a})=>{const n=s.useCallback(r=>{const o=r.target.value;_n("avdelingEnhet",o),e(o)},[a]);return a?c.jsx("div",{className:_e.padding,children:c.jsx(sn,{size:"small",hideLabel:!0,label:"",onChange:n,value:t,className:_e.padding,children:a.map(r=>c.jsx("option",{value:r.avdelingEnhet,children:`${r.avdelingEnhet} ${r.navn}`},r.avdelingEnhet))})}):null};try{ie.displayName="Avdelingsvelger",ie.__docgenInfo={description:"",displayName:"Avdelingsvelger",props:{setValgtAvdelingEnhet:{defaultValue:null,description:"",name:"setValgtAvdelingEnhet",required:!0,type:{name:"(avdelingEnhet: string) => void"}},valgtAvdelingEnhet:{defaultValue:null,description:"",name:"valgtAvdelingEnhet",required:!1,type:{name:"string"}},avdelinger:{defaultValue:null,description:"",name:"avdelinger",required:!1,type:{name:"Readonly<{ avdelingEnhet: string; navn: string; kreverKode6: boolean; }>[]"}}}}}catch{}const Ut="_paddingHeader_yllsv_1",zt="_padding_yllsv_1",be={paddingHeader:Ut,padding:zt},Jt=on(un),ve="4867",Qt=[],Wt=(e,t,a)=>{if(t.length>0&&!a){let n=t.some(o=>o.avdelingEnhet===ve)?ve:t[0].avdelingEnhet;const r=K("avdelingEnhet");r&&(t.some(o=>o.avdelingEnhet===r)?n=r:bn("avdelingEnhet")),e(n)}},Zt=e=>e==="?"||!e,Xt=(e,t)=>{const a=Zt(e)?{}:ce(e);return fn({...a,...t})},ea=(e,t)=>({...e,search:Xt(e.search,t)}),na=e=>t=>ea(e,{fane:t}),ta=(e,t,a,n)=>{switch(e){case S.BEHANDLINGSKOER:return c.jsx(oe,{valgtAvdelingEnhet:t,avdelingensSaksbehandlere:n});case S.SAKSBEHANDLERE:return c.jsx(se,{valgtAvdelingEnhet:t,hentAvdelingensSaksbehandlere:a,avdelingensSaksbehandlere:n});case S.NOKKELTALL:return c.jsx(ae,{valgtAvdelingEnhet:t});case S.RESERVASJONER:return c.jsx(le,{valgtAvdelingEnhet:t});default:return null}},H={[S.BEHANDLINGSKOER]:"AvdelingslederIndex.Behandlingskoer",[S.SAKSBEHANDLERE]:"AvdelingslederIndex.Saksbehandlere",[S.NOKKELTALL]:"AvdelingslederIndex.Nokkeltall",[S.RESERVASJONER]:"AvdelingslederIndex.Reservasjoner"},aa=e=>{const t=ce(e.search);return t.avdelingsleder?t.avdelingsleder:S.BEHANDLINGSKOER},de=({navAnsatt:e})=>{const[t,a]=s.useState(),{selected:n,location:r}=ee({paramName:"fane",isQueryParam:!0}),o=y.useRestApi(R.AVDELINGER,void 0,{isCachingOn:!0,suspendRequest:!(e!=null&&e.kanOppgavestyre)}),l=o==null?void 0:o.data,i=l?l.filter(p=>!!(e!=null&&e.kanBehandleKode6)||!p.kreverKode6):[];s.useEffect(()=>{o.state===Y.SUCCESS&&Wt(a,i,t)},[o]);const{startRequest:E,data:d=Qt}=y.useRestApiRunner(R.SAKSBEHANDLERE_FOR_AVDELING),f=s.useCallback(p=>E(p,!0),[]);s.useEffect(()=>{t&&f({avdelingEnhet:t})},[t]);const u=na(r),m=n||aa(r),A=dn();return e!=null&&e.kanOppgavestyre?o.state!==Y.SUCCESS?null:t?c.jsxs(ne,{children:[c.jsx(ie,{valgtAvdelingEnhet:t,avdelinger:i,setValgtAvdelingEnhet:a}),c.jsx(k,{sixteenPx:!0}),c.jsx(O,{size:"small",value:m,onChange:p=>{A(u(p))},className:be.paddingHeader,children:c.jsxs(O.List,{children:[c.jsx(O.Tab,{value:S.BEHANDLINGSKOER,label:c.jsx(w,{size:"small",children:c.jsx(j,{id:H[S.BEHANDLINGSKOER]})})}),c.jsx(O.Tab,{value:S.NOKKELTALL,label:c.jsx(w,{size:"small",children:c.jsx(j,{id:H[S.NOKKELTALL]})})}),c.jsx(O.Tab,{value:S.SAKSBEHANDLERE,label:c.jsx(w,{size:"small",children:c.jsx(j,{id:H[S.SAKSBEHANDLERE]})})}),c.jsx(O.Tab,{value:S.RESERVASJONER,label:c.jsx(w,{size:"small",children:c.jsx(j,{id:H[S.RESERVASJONER]})})})]})}),c.jsx(On,{className:be.padding,children:ta(m,t,f,d)})]},t):c.jsx(cn,{}):c.jsx(Rn,{})},ra=({setLosErIkkeTilgjengelig:e,navAnsatt:t})=>{const{addErrorMessage:a}=mn();xe.setAddErrorMessageHandler(a);const n=y.useGlobalStateRestApiData(B.KODEVERK_LOS),r=y.useGlobalStateRestApi(B.KODEVERK_LOS,void 0,{suspendRequest:!!n});return s.useEffect(()=>{!n&&r.state===Y.ERROR&&e()},[r.state]),!n&&r.state!==Y.SUCCESS?null:c.jsx(ln,{value:Jt,children:c.jsx(de,{navAnsatt:t})})},Ue=ra;try{de.displayName="AvdelingslederIndex",de.__docgenInfo={description:"",displayName:"AvdelingslederIndex",props:{setLosErIkkeTilgjengelig:{defaultValue:null,description:"",name:"setLosErIkkeTilgjengelig",required:!0,type:{name:"() => void"}},navAnsatt:{defaultValue:null,description:"",name:"navAnsatt",required:!1,type:{name:"Readonly<{ brukernavn: string; funksjonellTid?: string; kanBehandleKode6: boolean; kanBehandleKode7: boolean; kanBehandleKodeEgenAnsatt: boolean; kanBeslutte: boolean; kanOppgavestyre: boolean; ... 4 more ...; skalViseDetaljerteFeilmeldinger: boolean; }>"}}}}}catch{}const Ya={title:"los/avdelingsleder/AvdelingslederIndex",component:Ue,decorators:[En]},ze={kanOppgavestyre:!0,kanBehandleKode6:!0},z=({avdelinger:e,navAnsatt:t})=>{const a=[{key:B.KODEVERK_LOS.name,data:pn,global:!0},{key:R.AVDELINGER.name,data:e},{key:R.SAKSBEHANDLERE_FOR_AVDELING.name,data:[]},{key:R.OPPGAVE_ANTALL.name,data:1},{key:R.LAGRE_SAKSLISTE_NAVN.name,data:void 0},{key:R.LAGRE_SAKSLISTE_SORTERING.name,data:void 0},{key:R.LAGRE_SAKSLISTE_SORTERING_INTERVALL.name,data:void 0},{key:R.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE.name,data:void 0},{key:R.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO.name,data:void 0},{key:R.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE.name,data:void 0},{key:R.LAGRE_SAKSLISTE_BEHANDLINGSTYPE.name,data:void 0},{key:R.LAGRE_SAKSLISTE_ANDRE_KRITERIER.name,data:void 0},{key:R.OPPGAVE_AVDELING_ANTALL.name,data:1},{key:R.SAKSLISTER_FOR_AVDELING.name,data:[]},{key:R.HENT_OPPGAVER_FOR_AVDELING.name,data:[]},{key:R.HENT_OPPGAVER_PER_DATO.name,data:[]},{key:R.HENT_OPPGAVER_APNE_ELLER_PA_VENT.name,data:[]},{key:R.HENT_BEHANDLINGER_FRISTUTLOP.name,data:[]},{key:R.HENT_OPPGAVER_PER_FORSTE_STONADSDAG.name,data:[]},{key:R.RESERVASJONER_FOR_AVDELING.name,data:[]}];return c.jsx(Xe,{data:a,requestApi:xe,children:c.jsx(Ue,{setLosErIkkeTilgjengelig:()=>{},navAnsatt:t})})},x=z.bind({});x.args={avdelinger:[{avdelingEnhet:"1234",navn:"NAV Oslo",kreverKode6:!0},{avdelingEnhet:"123",navn:"NAV Viken",kreverKode6:!1}],navAnsatt:ze};const G=z.bind({});G.args={avdelinger:[],navAnsatt:ze};const V=z.bind({});V.args={avdelinger:[],navAnsatt:{kanOppgavestyre:!1,kanBehandleKode6:!1}};const D=z.bind({});D.args={avdelinger:[{avdelingEnhet:"1234",navn:"NAV Oslo",kreverKode6:!0},{avdelingEnhet:"123",navn:"NAV Viken",kreverKode6:!1}],navAnsatt:{kanOppgavestyre:!0,kanBehandleKode6:!1}};var ge,Se,ye;x.parameters={...x.parameters,docs:{...(ge=x.parameters)==null?void 0:ge.docs,source:{originalSource:`({
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
}`,...(ye=(Se=x.parameters)==null?void 0:Se.docs)==null?void 0:ye.source}}};var he,Pe,Te;G.parameters={...G.parameters,docs:{...(he=G.parameters)==null?void 0:he.docs,source:{originalSource:`({
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
}`,...(Te=(Pe=G.parameters)==null?void 0:Pe.docs)==null?void 0:Te.source}}};var Ne,Ie,Le;V.parameters={...V.parameters,docs:{...(Ne=V.parameters)==null?void 0:Ne.docs,source:{originalSource:`({
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
}`,...(Le=(Ie=V.parameters)==null?void 0:Ie.docs)==null?void 0:Le.source}}};var Oe,ke,$e;D.parameters={...D.parameters,docs:{...(Oe=D.parameters)==null?void 0:Oe.docs,source:{originalSource:`({
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
}`,...($e=(ke=D.parameters)==null?void 0:ke.docs)==null?void 0:$e.source}}};const qa=["Default","LasteIkonFørValgtAvdelingErSatt","HarIkkeTilgang","SkalFiltrereBortAvdelingerSomKreverKode6"];export{x as Default,V as HarIkkeTilgang,G as LasteIkonFørValgtAvdelingErSatt,D as SkalFiltrereBortAvdelingerSomKreverKode6,qa as __namedExportsOrder,Ya as default};
//# sourceMappingURL=AvdelingslederIndex.stories-7cec228f.js.map
