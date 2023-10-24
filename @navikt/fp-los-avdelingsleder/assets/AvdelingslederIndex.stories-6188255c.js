import{j as c,a as j,F as en}from"./jsx-runtime-86dfebf6.js";import{R as nn}from"./RestApiMock-492f57af.js";import{o as Ge,c as C,B as tn,q as an,z as rn,A as sn,E as on,I as ue,a as k,J as ln,k as dn,P as cn,K as un,F as w,$ as fn,m as pn,Q as En,U as An}from"./nb_NO-632fc4c8.js";import{a as mn}from"./alleKodeverkLos-5ac5bd02.js";import{b as y,R,a as Y,r as Ve}from"./fplosRestApi-fe4a3ae6.js";import{r as s,R as _,b as Rn}from"./index-1b03fe98.js";import{u as _n,R as q}from"./useGlobalStateRestApiData-20592075.js";import{I as bn}from"./IkkeTilgangTilAvdelingslederPanel-36854ffc.js";import{g as K,s as vn,r as gn}from"./StoreValuesInLocalStorage-6ed602ef.js";import{F as Sn}from"./FordelingAvBehandlingstypePanel-8a23c14e.js";import{T as yn}from"./TilBehandlingPanel-5a4b07db.js";import{O as hn}from"./OppgaverPerForsteStonadsdagPanel-bb485dba.js";import{O as Pn}from"./OppgaverSomErApneEllerPaVentPanel-e7bbc1cc.js";import{V as Tn}from"./VentefristUtløperPanel-c3b41272.js";import{L as Nn}from"./LeggTilSaksbehandlerForm-08765710.js";import{S as In}from"./SaksbehandlereTabell-b4063775.js";import{E as Ln}from"./EndreSakslisterPanel-095698ee.js";import{R as On}from"./ReservasjonerTabell-8eb47bd5.js";import{_ as h}from"./extends-98964cd2.js";import{r as kn}from"./index-6fd5a17b.js";import{H as M}from"./Heading-c434b717.js";import{P as $n}from"./Panel-384158e1.js";import"./index.es-657e045f.js";import"./FlyttReservasjonModal-ffb422e9.js";import"./index.es-47c36ed4.js";import"./Modal-f8c23473.js";import"./useLosKodeverk-c901f2b0.js";import"./isSameOrAfter-48a89950.js";import"./isSameOrBefore-ea99da6c.js";import"./SletteSaksbehandlerModal-b4325f8f.js";import"./GjeldendeSakslisterTabell-93c5bd9d.js";import"./SletteSakslisteModal-68f923d2.js";import"./SaksbehandlereForSakslisteForm-b559e9b9.js";import"./VStack-ef9060f0.js";import"./UtvalgskriterierForSakslisteForm-2e7f79a4.js";import"./BehandlingstypeVelger-c1781486.js";import"./AndreKriterierVelger-7b0500e2.js";import"./FagsakYtelseTypeVelger-63a94605.js";import"./SorteringVelger-c4abb005.js";var Kn=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};const Gn=s.forwardRef((e,t)=>{var{title:a,titleId:n}=e,r=Kn(e,["title","titleId"]);let o=Ge();return o=a?n||"title-"+o:void 0,s.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:t,"aria-labelledby":o},r),a?s.createElement("title",{id:o},a):null,s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.53 5.97a.75.75 0 0 1 0 1.06L9.56 12l4.97 4.97a.75.75 0 1 1-1.06 1.06l-5.5-5.5a.75.75 0 0 1 0-1.06l5.5-5.5a.75.75 0 0 1 1.06 0Z",fill:"currentColor"}))}),Vn=Gn;var Dn=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};const xn=s.forwardRef((e,t)=>{var{title:a,titleId:n}=e,r=Dn(e,["title","titleId"]);let o=Ge();return o=a?n||"title-"+o:void 0,s.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:t,"aria-labelledby":o},r),a?s.createElement("title",{id:o},a):null,s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.47 5.97a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 0 1 0 1.06l-5.5 5.5a.75.75 0 1 1-1.06-1.06L14.44 12 9.47 7.03a.75.75 0 0 1 0-1.06Z",fill:"currentColor"}))}),Cn=xn;function N(e,t,{checkForDefaultPrevented:a=!0}={}){return function(r){if(e==null||e(r),a===!1||!r.defaultPrevented)return t==null?void 0:t(r)}}function fe(e,t=[]){let a=[];function n(o,l){const i=s.createContext(l),p=a.length;a=[...a,l];function d(u){const{scope:m,children:A,...E}=u,g=(m==null?void 0:m[e][p])||i,v=s.useMemo(()=>E,Object.values(E));return s.createElement(g.Provider,{value:v},A)}function f(u,m){const A=(m==null?void 0:m[e][p])||i,E=s.useContext(A);if(E)return E;if(l!==void 0)return l;throw new Error(`\`${u}\` must be used within \`${o}\``)}return d.displayName=o+"Provider",[d,f]}const r=()=>{const o=a.map(l=>s.createContext(l));return function(i){const p=(i==null?void 0:i[e])||o;return s.useMemo(()=>({[`__scope${e}`]:{...i,[e]:p}}),[i,p])}};return r.scopeName=e,[n,Fn(r,...t)]}function Fn(...e){const t=e[0];if(e.length===1)return t;const a=()=>{const n=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(o){const l=n.reduce((i,{useScope:p,scopeName:d})=>{const u=p(o)[`__scope${d}`];return{...i,...u}},{});return s.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])}};return a.scopeName=t.scopeName,a}function wn(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function De(...e){return t=>e.forEach(a=>wn(a,t))}function Z(...e){return s.useCallback(De(...e),e)}const U=s.forwardRef((e,t)=>{const{children:a,...n}=e,r=s.Children.toArray(a),o=r.find(Hn);if(o){const l=o.props.children,i=r.map(p=>p===o?s.Children.count(l)>1?s.Children.only(null):s.isValidElement(l)?l.props.children:null:p);return s.createElement(X,h({},n,{ref:t}),s.isValidElement(l)?s.cloneElement(l,void 0,i):null)}return s.createElement(X,h({},n,{ref:t}),a)});U.displayName="Slot";const X=s.forwardRef((e,t)=>{const{children:a,...n}=e;return s.isValidElement(a)?s.cloneElement(a,{...Bn(n,a.props),ref:De(t,a.ref)}):s.Children.count(a)>1?s.Children.only(null):null});X.displayName="SlotClone";const Mn=({children:e})=>s.createElement(s.Fragment,null,e);function Hn(e){return s.isValidElement(e)&&e.type===Mn}function Bn(e,t){const a={...t};for(const n in t){const r=e[n],o=t[n];/^on[A-Z]/.test(n)?a[n]=(...i)=>{o==null||o(...i),r==null||r(...i)}:n==="style"?a[n]={...r,...o}:n==="className"&&(a[n]=[r,o].filter(Boolean).join(" "))}return{...e,...a}}function jn(e){const t=e+"CollectionProvider",[a,n]=fe(t),[r,o]=a(t,{collectionRef:{current:null},itemMap:new Map}),l=A=>{const{scope:E,children:g}=A,v=_.useRef(null),b=_.useRef(new Map).current;return _.createElement(r,{scope:E,itemMap:b,collectionRef:v},g)},i=e+"CollectionSlot",p=_.forwardRef((A,E)=>{const{scope:g,children:v}=A,b=o(i,g),P=Z(E,b.collectionRef);return _.createElement(U,{ref:P},v)}),d=e+"CollectionItemSlot",f="data-radix-collection-item",u=_.forwardRef((A,E)=>{const{scope:g,children:v,...b}=A,P=_.useRef(null),F=Z(E,P),I=o(d,g);return _.useEffect(()=>(I.itemMap.set(P,{ref:P,...b}),()=>void I.itemMap.delete(P))),_.createElement(U,{[f]:"",ref:F},v)});function m(A){const E=o(e+"CollectionConsumer",A);return _.useCallback(()=>{const v=E.collectionRef.current;if(!v)return[];const b=Array.from(v.querySelectorAll(`[${f}]`));return Array.from(E.itemMap.values()).sort((I,T)=>b.indexOf(I.ref.current)-b.indexOf(T.ref.current))},[E.collectionRef,E.itemMap])}return[{Provider:l,Slot:p,ItemSlot:u},m,n]}const Yn=globalThis!=null&&globalThis.document?s.useLayoutEffect:()=>{},qn=Rn["useId".toString()]||(()=>{});let Un=0;function xe(e){const[t,a]=s.useState(qn());return Yn(()=>{e||a(n=>n??String(Un++))},[e]),e||(t?`radix-${t}`:"")}const zn=["a","button","div","h2","h3","img","li","nav","ol","p","span","svg","ul"],$=zn.reduce((e,t)=>{const a=s.forwardRef((n,r)=>{const{asChild:o,...l}=n,i=o?U:t;return s.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),s.createElement(i,h({},l,{ref:r}))});return a.displayName=`Primitive.${t}`,{...e,[t]:a}},{});function pe(e){const t=s.useRef(e);return s.useEffect(()=>{t.current=e}),s.useMemo(()=>(...a)=>{var n;return(n=t.current)===null||n===void 0?void 0:n.call(t,...a)},[])}function Ce({prop:e,defaultProp:t,onChange:a=()=>{}}){const[n,r]=Jn({defaultProp:t,onChange:a}),o=e!==void 0,l=o?e:n,i=pe(a),p=s.useCallback(d=>{if(o){const u=typeof d=="function"?d(e):d;u!==e&&i(u)}else r(d)},[o,e,r,i]);return[l,p]}function Jn({defaultProp:e,onChange:t}){const a=s.useState(e),[n]=a,r=s.useRef(n),o=pe(t);return s.useEffect(()=>{r.current!==n&&(o(n),r.current=n)},[n,r,o]),a}const Qn=s.createContext(void 0);function Fe(e){const t=s.useContext(Qn);return e||t||"ltr"}const W="rovingFocusGroup.onEntryFocus",Wn={bubbles:!1,cancelable:!0},Ee="RovingFocusGroup",[ee,we,Zn]=jn(Ee),[Xn,Me]=fe(Ee,[Zn]),[et,nt]=Xn(Ee),tt=s.forwardRef((e,t)=>s.createElement(ee.Provider,{scope:e.__scopeRovingFocusGroup},s.createElement(ee.Slot,{scope:e.__scopeRovingFocusGroup},s.createElement(at,h({},e,{ref:t}))))),at=s.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:a,orientation:n,loop:r=!1,dir:o,currentTabStopId:l,defaultCurrentTabStopId:i,onCurrentTabStopIdChange:p,onEntryFocus:d,...f}=e,u=s.useRef(null),m=Z(t,u),A=Fe(o),[E=null,g]=Ce({prop:l,defaultProp:i,onChange:p}),[v,b]=s.useState(!1),P=pe(d),F=we(a),I=s.useRef(!1);return s.useEffect(()=>{const T=u.current;if(T)return T.addEventListener(W,P),()=>T.removeEventListener(W,P)},[P]),s.createElement(et,{scope:a,orientation:n,dir:A,loop:r,currentTabStopId:E,onItemFocus:s.useCallback(T=>g(T),[g]),onItemShiftTab:s.useCallback(()=>b(!0),[])},s.createElement($.div,h({tabIndex:v?-1:0,"data-orientation":n},f,{ref:m,style:{outline:"none",...e.style},onMouseDown:N(e.onMouseDown,()=>{I.current=!0}),onFocus:N(e.onFocus,T=>{const Qe=!I.current;if(T.target===T.currentTarget&&Qe&&!v){const Re=new CustomEvent(W,Wn);if(T.currentTarget.dispatchEvent(Re),!Re.defaultPrevented){const Q=F().filter(L=>L.focusable),We=Q.find(L=>L.active),Ze=Q.find(L=>L.id===E),Xe=[We,Ze,...Q].filter(Boolean).map(L=>L.ref.current);He(Xe)}}I.current=!1}),onBlur:N(e.onBlur,()=>b(!1))})))}),rt="RovingFocusGroupItem",st=s.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:a,focusable:n=!0,active:r=!1,...o}=e,l=xe(),i=nt(rt,a),p=i.currentTabStopId===l,d=we(a);return s.createElement(ee.ItemSlot,{scope:a,id:l,focusable:n,active:r},s.createElement($.span,h({tabIndex:p?0:-1,"data-orientation":i.orientation},o,{ref:t,onMouseDown:N(e.onMouseDown,f=>{n?i.onItemFocus(l):f.preventDefault()}),onFocus:N(e.onFocus,()=>i.onItemFocus(l)),onKeyDown:N(e.onKeyDown,f=>{if(f.key==="Tab"&&f.shiftKey){i.onItemShiftTab();return}if(f.target!==f.currentTarget)return;const u=it(f,i.orientation,i.dir);if(u!==void 0){f.preventDefault();let A=d().filter(E=>E.focusable).map(E=>E.ref.current);if(u==="last")A.reverse();else if(u==="prev"||u==="next"){u==="prev"&&A.reverse();const E=A.indexOf(f.currentTarget);A=i.loop?dt(A,E+1):A.slice(E+1)}setTimeout(()=>He(A))}})})))}),ot={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function lt(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function it(e,t,a){const n=lt(e.key,a);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(n))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(n)))return ot[n]}function He(e){const t=document.activeElement;for(const a of e)if(a===t||(a.focus(),document.activeElement!==t))return}function dt(e,t){return e.map((a,n)=>e[(t+n)%e.length])}const ct=tt,ut=st;function ft(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function pt(...e){return t=>e.forEach(a=>ft(a,t))}function Et(...e){return s.useCallback(pt(...e),e)}const _e=globalThis!=null&&globalThis.document?s.useLayoutEffect:()=>{};function At(e,t){return s.useReducer((a,n)=>{const r=t[a][n];return r??a},e)}const Be=e=>{const{present:t,children:a}=e,n=mt(t),r=typeof a=="function"?a({present:n.isPresent}):s.Children.only(a),o=Et(n.ref,r.ref);return typeof a=="function"||n.isPresent?s.cloneElement(r,{ref:o}):null};Be.displayName="Presence";function mt(e){const[t,a]=s.useState(),n=s.useRef({}),r=s.useRef(e),o=s.useRef("none"),l=e?"mounted":"unmounted",[i,p]=At(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return s.useEffect(()=>{const d=H(n.current);o.current=i==="mounted"?d:"none"},[i]),_e(()=>{const d=n.current,f=r.current;if(f!==e){const m=o.current,A=H(d);e?p("MOUNT"):A==="none"||(d==null?void 0:d.display)==="none"?p("UNMOUNT"):p(f&&m!==A?"ANIMATION_OUT":"UNMOUNT"),r.current=e}},[e,p]),_e(()=>{if(t){const d=u=>{const A=H(n.current).includes(u.animationName);u.target===t&&A&&kn.flushSync(()=>p("ANIMATION_END"))},f=u=>{u.target===t&&(o.current=H(n.current))};return t.addEventListener("animationstart",f),t.addEventListener("animationcancel",d),t.addEventListener("animationend",d),()=>{t.removeEventListener("animationstart",f),t.removeEventListener("animationcancel",d),t.removeEventListener("animationend",d)}}else p("ANIMATION_END")},[t,p]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:s.useCallback(d=>{d&&(n.current=getComputedStyle(d)),a(d)},[])}}function H(e){return(e==null?void 0:e.animationName)||"none"}const je="Tabs",[Rt,Ua]=fe(je,[Me]),Ye=Me(),[_t,Ae]=Rt(je),bt=s.forwardRef((e,t)=>{const{__scopeTabs:a,value:n,onValueChange:r,defaultValue:o,orientation:l="horizontal",dir:i,activationMode:p="automatic",...d}=e,f=Fe(i),[u,m]=Ce({prop:n,onChange:r,defaultProp:o});return s.createElement(_t,{scope:a,baseId:xe(),value:u,onValueChange:m,orientation:l,dir:f,activationMode:p},s.createElement($.div,h({dir:f,"data-orientation":l},d,{ref:t})))}),vt="TabsList",gt=s.forwardRef((e,t)=>{const{__scopeTabs:a,loop:n=!0,...r}=e,o=Ae(vt,a),l=Ye(a);return s.createElement(ct,h({asChild:!0},l,{orientation:o.orientation,dir:o.dir,loop:n}),s.createElement($.div,h({role:"tablist","aria-orientation":o.orientation},r,{ref:t})))}),St="TabsTrigger",yt=s.forwardRef((e,t)=>{const{__scopeTabs:a,value:n,disabled:r=!1,...o}=e,l=Ae(St,a),i=Ye(a),p=qe(l.baseId,n),d=Ue(l.baseId,n),f=n===l.value;return s.createElement(ut,h({asChild:!0},i,{focusable:!r,active:f}),s.createElement($.button,h({type:"button",role:"tab","aria-selected":f,"aria-controls":d,"data-state":f?"active":"inactive","data-disabled":r?"":void 0,disabled:r,id:p},o,{ref:t,onMouseDown:N(e.onMouseDown,u=>{!r&&u.button===0&&u.ctrlKey===!1?l.onValueChange(n):u.preventDefault()}),onKeyDown:N(e.onKeyDown,u=>{[" ","Enter"].includes(u.key)&&l.onValueChange(n)}),onFocus:N(e.onFocus,()=>{const u=l.activationMode!=="manual";!f&&!r&&u&&l.onValueChange(n)})})))}),ht="TabsContent",Pt=s.forwardRef((e,t)=>{const{__scopeTabs:a,value:n,forceMount:r,children:o,...l}=e,i=Ae(ht,a),p=qe(i.baseId,n),d=Ue(i.baseId,n),f=n===i.value,u=s.useRef(f);return s.useEffect(()=>{const m=requestAnimationFrame(()=>u.current=!1);return()=>cancelAnimationFrame(m)},[]),s.createElement(Be,{present:r||f},({present:m})=>s.createElement($.div,h({"data-state":f?"active":"inactive","data-orientation":i.orientation,role:"tabpanel","aria-labelledby":p,hidden:!m,id:d,tabIndex:0},l,{ref:t,style:{...e.style,animationDuration:u.current?"0s":void 0}}),m&&o))});function qe(e,t){return`${e}-trigger-${t}`}function Ue(e,t){return`${e}-content-${t}`}const Tt=bt,Nt=yt,me=s.createContext(null);var It=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};const Lt=s.forwardRef((e,t)=>{var a,{className:n,as:r="button",label:o,icon:l,value:i}=e,p=It(e,["className","as","label","icon","value"]);const d=s.useContext(me);return!o&&!l?(console.error("<Tabs.Tab/> needs label/icon"),null):_.createElement(Nt,{value:i,asChild:!0},_.createElement(r,Object.assign({ref:t,className:C("navds-tabs__tab",`navds-tabs__tab--${(a=d==null?void 0:d.size)!==null&&a!==void 0?a:"medium"}`,`navds-tabs__tab-icon--${d==null?void 0:d.iconPosition}`,n,{"navds-tabs__tab--icon-only":l&&!o})},p),_.createElement(tn,{as:"span",className:"navds-tabs__tab-inner",size:d==null?void 0:d.size},l,o)))}),Ot=Lt;var kt=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};const $t=s.forwardRef((e,t)=>{var{className:a}=e,n=kt(e,["className"]);const r=s.useContext(me),o=s.useRef(null),l=s.useMemo(()=>an([o,t]),[t]),[i,p]=s.useState({start:!1,end:!1}),d=s.useMemo(()=>rn(()=>{if(!(o!=null&&o.current))return;const{scrollWidth:m,clientWidth:A}=o.current,E=o.current.scrollLeft,g=E>1,v=E<m-A-1;p(b=>g===b.start&&v===b.end?b:{start:g,end:v})}),[]);s.useEffect(()=>{var m,A,E;const g=()=>d(),v=(E=(A=(m=o.current)===null||m===void 0?void 0:m.ownerDocument)!==null&&A!==void 0?A:document)!==null&&E!==void 0?E:window;v.addEventListener("resize",g);let b;return typeof ResizeObserver<"u"&&(b=new ResizeObserver(g),b.observe(o.current)),()=>{v.removeEventListener("resize",g),b&&b.disconnect()}},[d]),s.useEffect(()=>{d()}),s.useEffect(()=>()=>{d.clear()},[d]);const f=({dir:m,hidden:A})=>_.createElement("div",{className:C("navds-tabs__scroll-button",{"navds-tabs__scroll-button--hidden":A}),onClick:()=>{o.current&&(o.current.scrollLeft+=m*100)}},m===-1?_.createElement(Vn,{title:"scroll tilbake"}):_.createElement(Cn,{title:"scroll neste"})),u=i.end||i.start;return _.createElement("div",{className:"navds-tabs__tablist-wrapper"},u&&_.createElement(f,{dir:-1,hidden:!i.start}),_.createElement(gt,Object.assign({},n,{ref:l,onScroll:d,loop:r==null?void 0:r.loop,className:C("navds-tabs__tablist",a)})),u&&_.createElement(f,{dir:1,hidden:!i.end}))}),Kt=$t;var Gt=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};const Vt=s.forwardRef((e,t)=>{var{className:a}=e,n=Gt(e,["className"]);return _.createElement(Pt,Object.assign({},n,{ref:t,className:C("navds-tabs__tabpanel",a)}))}),Dt=Vt;var xt=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};const z=s.forwardRef((e,t)=>{var{className:a,children:n,onChange:r,size:o="medium",selectionFollowsFocus:l=!1,loop:i=!1,iconPosition:p="left"}=e,d=xt(e,["className","children","onChange","size","selectionFollowsFocus","loop","iconPosition"]);return _.createElement(Tt,Object.assign({},d,{ref:t,className:C("navds-tabs",a,`navds-tabs--${o}`),activationMode:l?"automatic":"manual",onValueChange:r}),_.createElement(me.Provider,{value:{size:o,loop:i,iconPosition:p}},n))});z.Tab=Ot;z.List=Kt;z.Panel=Dt;const O=z,Ct={paramName:"",parse:e=>e,isQueryParam:!1},Ft=(e,t,a)=>{const n=a.isQueryParam?ue(t.search):e;return a.parse(n[a.paramName])};function ne(e){const t={...Ct,...e},a=sn(),n=on(),r=Ft(n,a,t);return{location:a,selected:r}}try{ne.displayName="useTrackRouteParam",ne.__docgenInfo={description:"",displayName:"useTrackRouteParam",props:{paramName:{defaultValue:null,description:"",name:"paramName",required:!1,type:{name:"string"}},parse:{defaultValue:null,description:"",name:"parse",required:!1,type:{name:"((a: any) => any)"}},isQueryParam:{defaultValue:null,description:"",name:"isQueryParam",required:!1,type:{name:"boolean"}}}}}catch{}const wt="_container_1sikf_1",Mt={container:wt},te=({children:e})=>c("div",{className:Mt.container,children:e});try{te.displayName="AvdelingslederDashboard",te.__docgenInfo={description:"AvdelingslederDashboard",displayName:"AvdelingslederDashboard",props:{}}}catch{}const S={BEHANDLINGSKOER:"behandlingskoer",SAKSBEHANDLERE:"saksbehandlere",NOKKELTALL:"nokkeltall",RESERVASJONER:"reservasjoner"},ae=({oppgaverForAvdeling:e,oppgaverPerDato:t,behandlingerPaVent:a,oppgaverPerForsteStonadsdag:n,oppgaverApneEllerPaVent:r})=>{const l=s.useRef(null);return j("div",{ref:l,children:[c(yn,{height:300,oppgaverPerDato:t,getValueFromLocalStorage:K}),c(k,{twentyPx:!0}),c(Sn,{height:300,oppgaverForAvdeling:e,getValueFromLocalStorage:K}),c(k,{twentyPx:!0}),c(Tn,{height:300,behandlingerPaVent:a,getValueFromLocalStorage:K}),c(k,{twentyPx:!0}),c(hn,{height:300,oppgaverPerForsteStonadsdag:n}),c(k,{twentyPx:!0}),c(Pn,{height:300,oppgaverApneEllerPaVent:r,getValueFromLocalStorage:K})]})};try{ae.displayName="NokkeltallPanel",ae.__docgenInfo={description:"NokkeltallPanel.",displayName:"NokkeltallPanel",props:{oppgaverForAvdeling:{defaultValue:null,description:"",name:"oppgaverForAvdeling",required:!0,type:{name:"Readonly<{ fagsakYtelseType: string; behandlingType: string; tilBehandling: boolean; antall: number; }>[]"}},oppgaverPerDato:{defaultValue:null,description:"",name:"oppgaverPerDato",required:!0,type:{name:"Readonly<{ fagsakYtelseType: string; behandlingType: string; opprettetDato: string; antall: number; }>[]"}},behandlingerPaVent:{defaultValue:null,description:"",name:"behandlingerPaVent",required:!0,type:{name:"Readonly<{ fagsakYtelseType: string; behandlingFrist: string; antall: number; }>[]"}},oppgaverPerForsteStonadsdag:{defaultValue:null,description:"",name:"oppgaverPerForsteStonadsdag",required:!0,type:{name:"Readonly<{ forsteStonadsdag: string; antall: number; }>[]"}},oppgaverApneEllerPaVent:{defaultValue:null,description:"",name:"oppgaverApneEllerPaVent",required:!0,type:{name:"Readonly<{ antall: number; behandlingType: string; behandlingVenteStatus: string; førsteUttakMåned?: string | undefined; }>[]"}}}}}catch{}const Ht=[],Bt=[],jt=[],Yt=[],qt=[],re=({valgtAvdelingEnhet:e})=>{const{data:t=Ht}=y.useRestApi(R.HENT_OPPGAVER_FOR_AVDELING,{avdelingEnhet:e}),{data:a=Bt}=y.useRestApi(R.HENT_OPPGAVER_PER_DATO,{avdelingEnhet:e}),{data:n=jt}=y.useRestApi(R.HENT_BEHANDLINGER_FRISTUTLOP,{avdelingEnhet:e}),{data:r=Yt}=y.useRestApi(R.HENT_OPPGAVER_PER_FORSTE_STONADSDAG,{avdelingEnhet:e}),{data:o=qt}=y.useRestApi(R.HENT_OPPGAVER_APNE_ELLER_PA_VENT,{avdelingEnhet:e});return c(ae,{oppgaverForAvdeling:t,oppgaverPerDato:a,behandlingerPaVent:n,oppgaverPerForsteStonadsdag:r,oppgaverApneEllerPaVent:o})};try{re.displayName="NokkeltallIndex",re.__docgenInfo={description:"NokkeltallIndex",displayName:"NokkeltallIndex",props:{valgtAvdelingEnhet:{defaultValue:null,description:"",name:"valgtAvdelingEnhet",required:!0,type:{name:"string"}}}}}catch{}const se=({saksbehandlere:e,valgtAvdelingEnhet:t,avdelingensSaksbehandlere:a,hentAvdelingensSaksbehandlere:n})=>j(en,{children:[c(In,{saksbehandlere:e,valgtAvdelingEnhet:t,hentAvdelingensSaksbehandlere:n}),c(k,{sixteenPx:!0}),c(Nn,{valgtAvdelingEnhet:t,avdelingensSaksbehandlere:a,hentAvdelingensSaksbehandlere:n})]});try{se.displayName="SaksbehandlerePanel",se.__docgenInfo={description:"SaksbehandlerePanel",displayName:"SaksbehandlerePanel",props:{saksbehandlere:{defaultValue:null,description:"",name:"saksbehandlere",required:!0,type:{name:"Readonly<{ brukerIdent: string; navn: string; avdelingsnavn: string[]; }>[]"}},valgtAvdelingEnhet:{defaultValue:null,description:"",name:"valgtAvdelingEnhet",required:!0,type:{name:"string"}},avdelingensSaksbehandlere:{defaultValue:null,description:"",name:"avdelingensSaksbehandlere",required:!0,type:{name:"Readonly<{ brukerIdent: string; navn: string; avdelingsnavn: string[]; }>[]"}},hentAvdelingensSaksbehandlere:{defaultValue:null,description:"",name:"hentAvdelingensSaksbehandlere",required:!0,type:{name:"(params: { avdelingEnhet: string; }) => void"}}}}}catch{}const oe=({valgtAvdelingEnhet:e,avdelingensSaksbehandlere:t,hentAvdelingensSaksbehandlere:a})=>c(se,{saksbehandlere:t,valgtAvdelingEnhet:e,avdelingensSaksbehandlere:t,hentAvdelingensSaksbehandlere:a});try{oe.displayName="EndreSaksbehandlereIndex",oe.__docgenInfo={description:"EndreSaksbehandlereIndex",displayName:"EndreSaksbehandlereIndex",props:{avdelingensSaksbehandlere:{defaultValue:null,description:"",name:"avdelingensSaksbehandlere",required:!0,type:{name:"Readonly<{ brukerIdent: string; navn: string; avdelingsnavn: string[]; }>[]"}},valgtAvdelingEnhet:{defaultValue:null,description:"",name:"valgtAvdelingEnhet",required:!0,type:{name:"string"}},hentAvdelingensSaksbehandlere:{defaultValue:null,description:"",name:"hentAvdelingensSaksbehandlere",required:!0,type:{name:"(params: { avdelingEnhet: string; }) => void"}}}}}catch{}const le=({valgtAvdelingEnhet:e,avdelingensSaksbehandlere:t})=>{const[a,n]=s.useState(),r=s.useCallback(()=>n(void 0),[]);return c(Ln,{setValgtSakslisteId:n,valgtSakslisteId:a,valgtAvdelingEnhet:e,avdelingensSaksbehandlere:t,resetValgtSakslisteId:r})};try{le.displayName="EndreBehandlingskoerIndex",le.__docgenInfo={description:"EndreBehandlingskoerIndex",displayName:"EndreBehandlingskoerIndex",props:{valgtAvdelingEnhet:{defaultValue:null,description:"",name:"valgtAvdelingEnhet",required:!0,type:{name:"string"}},avdelingensSaksbehandlere:{defaultValue:null,description:"",name:"avdelingensSaksbehandlere",required:!0,type:{name:"Readonly<{ brukerIdent: string; navn: string; avdelingsnavn: string[]; }>[]"}}}}}catch{}const Ut=[],ie=({valgtAvdelingEnhet:e})=>{const{data:t=Ut,startRequest:a}=y.useRestApiRunner(R.RESERVASJONER_FOR_AVDELING),{startRequest:n}=y.useRestApiRunner(R.AVDELINGSLEDER_OPPHEVER_RESERVASJON),r=y.useGlobalStateRestApiData(Y.KODEVERK_LOS);s.useEffect(()=>{a({avdelingEnhet:e})},[]);const o=s.useCallback(i=>n({oppgaveId:i}).then(()=>a({avdelingEnhet:e})),[e]),l=s.useCallback(()=>a({avdelingEnhet:e}),[e]);return c(On,{opphevReservasjon:o,reservasjoner:t,hentAvdelingensReservasjoner:l,alleKodeverk:r})};try{ie.displayName="ReservasjonerIndex",ie.__docgenInfo={description:"",displayName:"ReservasjonerIndex",props:{valgtAvdelingEnhet:{defaultValue:null,description:"",name:"valgtAvdelingEnhet",required:!0,type:{name:"string"}}}}}catch{}const zt="_padding_eb62i_1",be={padding:zt},de=({setValgtAvdelingEnhet:e,valgtAvdelingEnhet:t,avdelinger:a})=>{const n=s.useCallback(r=>{const o=r.target.value;vn("avdelingEnhet",o),e(o)},[a]);return a?c("div",{className:be.padding,children:c(ln,{size:"small",hideLabel:!0,label:"",onChange:n,value:t,className:be.padding,children:a.map(r=>c("option",{value:r.avdelingEnhet,children:`${r.avdelingEnhet} ${r.navn}`},r.avdelingEnhet))})}):null};try{de.displayName="Avdelingsvelger",de.__docgenInfo={description:"",displayName:"Avdelingsvelger",props:{setValgtAvdelingEnhet:{defaultValue:null,description:"",name:"setValgtAvdelingEnhet",required:!0,type:{name:"(avdelingEnhet: string) => void"}},valgtAvdelingEnhet:{defaultValue:null,description:"",name:"valgtAvdelingEnhet",required:!1,type:{name:"string"}},avdelinger:{defaultValue:null,description:"",name:"avdelinger",required:!1,type:{name:"Readonly<{ avdelingEnhet: string; navn: string; kreverKode6: boolean; }>[]"}}}}}catch{}const Jt="_paddingHeader_yllsv_1",Qt="_padding_yllsv_1",ve={paddingHeader:Jt,padding:Qt},Wt=dn(pn),ge="4867",Zt=[],Xt=(e,t,a)=>{if(t.length>0&&!a){let n=t.some(o=>o.avdelingEnhet===ge)?ge:t[0].avdelingEnhet;const r=K("avdelingEnhet");r&&(t.some(o=>o.avdelingEnhet===r)?n=r:gn("avdelingEnhet")),e(n)}},ea=e=>e==="?"||!e,na=(e,t)=>{const a=ea(e)?{}:ue(e);return En({...a,...t})},ta=(e,t)=>({...e,search:na(e.search,t)}),aa=e=>t=>ta(e,{fane:t}),ra=(e,t,a,n)=>{switch(e){case S.BEHANDLINGSKOER:return c(le,{valgtAvdelingEnhet:t,avdelingensSaksbehandlere:n});case S.SAKSBEHANDLERE:return c(oe,{valgtAvdelingEnhet:t,hentAvdelingensSaksbehandlere:a,avdelingensSaksbehandlere:n});case S.NOKKELTALL:return c(re,{valgtAvdelingEnhet:t});case S.RESERVASJONER:return c(ie,{valgtAvdelingEnhet:t});default:return null}},B={[S.BEHANDLINGSKOER]:"AvdelingslederIndex.Behandlingskoer",[S.SAKSBEHANDLERE]:"AvdelingslederIndex.Saksbehandlere",[S.NOKKELTALL]:"AvdelingslederIndex.Nokkeltall",[S.RESERVASJONER]:"AvdelingslederIndex.Reservasjoner"},sa=e=>{const t=ue(e.search);return t.avdelingsleder?t.avdelingsleder:S.BEHANDLINGSKOER},ce=({navAnsatt:e})=>{const[t,a]=s.useState(),{selected:n,location:r}=ne({paramName:"fane",isQueryParam:!0}),o=y.useRestApi(R.AVDELINGER,void 0,{isCachingOn:!0,suspendRequest:!(e!=null&&e.kanOppgavestyre)}),l=o==null?void 0:o.data,i=l?l.filter(E=>!!(e!=null&&e.kanBehandleKode6)||!E.kreverKode6):[];s.useEffect(()=>{o.state===q.SUCCESS&&Xt(a,i,t)},[o]);const{startRequest:p,data:d=Zt}=y.useRestApiRunner(R.SAKSBEHANDLERE_FOR_AVDELING),f=s.useCallback(E=>p(E,!0),[]);s.useEffect(()=>{t&&f({avdelingEnhet:t})},[t]);const u=aa(r),m=n||sa(r),A=un();return e!=null&&e.kanOppgavestyre?o.state!==q.SUCCESS?null:t?j(te,{children:[c(de,{valgtAvdelingEnhet:t,avdelinger:i,setValgtAvdelingEnhet:a}),c(k,{sixteenPx:!0}),c(O,{size:"small",value:m,onChange:E=>{A(u(E))},className:ve.paddingHeader,children:j(O.List,{children:[c(O.Tab,{value:S.BEHANDLINGSKOER,label:c(M,{size:"small",children:c(w,{id:B[S.BEHANDLINGSKOER]})})}),c(O.Tab,{value:S.NOKKELTALL,label:c(M,{size:"small",children:c(w,{id:B[S.NOKKELTALL]})})}),c(O.Tab,{value:S.SAKSBEHANDLERE,label:c(M,{size:"small",children:c(w,{id:B[S.SAKSBEHANDLERE]})})}),c(O.Tab,{value:S.RESERVASJONER,label:c(M,{size:"small",children:c(w,{id:B[S.RESERVASJONER]})})})]})}),c($n,{className:ve.padding,children:ra(m,t,f,d)})]},t):c(fn,{}):c(bn,{})},oa=({setLosErIkkeTilgjengelig:e,navAnsatt:t})=>{const{addErrorMessage:a}=_n();Ve.setAddErrorMessageHandler(a);const n=y.useGlobalStateRestApiData(Y.KODEVERK_LOS),r=y.useGlobalStateRestApi(Y.KODEVERK_LOS,void 0,{suspendRequest:!!n});return s.useEffect(()=>{!n&&r.state===q.ERROR&&e()},[r.state]),!n&&r.state!==q.SUCCESS?null:c(cn,{value:Wt,children:c(ce,{navAnsatt:t})})},ze=oa;try{ce.displayName="AvdelingslederIndex",ce.__docgenInfo={description:"",displayName:"AvdelingslederIndex",props:{setLosErIkkeTilgjengelig:{defaultValue:null,description:"",name:"setLosErIkkeTilgjengelig",required:!0,type:{name:"() => void"}},navAnsatt:{defaultValue:null,description:"",name:"navAnsatt",required:!1,type:{name:"Readonly<{ brukernavn: string; funksjonellTid?: string; kanBehandleKode6: boolean; kanBehandleKode7: boolean; kanBehandleKodeEgenAnsatt: boolean; kanBeslutte: boolean; kanOppgavestyre: boolean; ... 4 more ...; skalViseDetaljerteFeilmeldinger: boolean; }>"}}}}}catch{}const za={title:"los/avdelingsleder/AvdelingslederIndex",component:ze,decorators:[An]},Je={kanOppgavestyre:!0,kanBehandleKode6:!0},J=({avdelinger:e,navAnsatt:t})=>{const a=[{key:Y.KODEVERK_LOS.name,data:mn,global:!0},{key:R.AVDELINGER.name,data:e},{key:R.SAKSBEHANDLERE_FOR_AVDELING.name,data:[]},{key:R.OPPGAVE_ANTALL.name,data:1},{key:R.LAGRE_SAKSLISTE_NAVN.name,data:void 0},{key:R.LAGRE_SAKSLISTE_SORTERING.name,data:void 0},{key:R.LAGRE_SAKSLISTE_SORTERING_INTERVALL.name,data:void 0},{key:R.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE.name,data:void 0},{key:R.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO.name,data:void 0},{key:R.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE.name,data:void 0},{key:R.LAGRE_SAKSLISTE_BEHANDLINGSTYPE.name,data:void 0},{key:R.LAGRE_SAKSLISTE_ANDRE_KRITERIER.name,data:void 0},{key:R.OPPGAVE_AVDELING_ANTALL.name,data:1},{key:R.SAKSLISTER_FOR_AVDELING.name,data:[]},{key:R.HENT_OPPGAVER_FOR_AVDELING.name,data:[]},{key:R.HENT_OPPGAVER_PER_DATO.name,data:[]},{key:R.HENT_OPPGAVER_APNE_ELLER_PA_VENT.name,data:[]},{key:R.HENT_BEHANDLINGER_FRISTUTLOP.name,data:[]},{key:R.HENT_OPPGAVER_PER_FORSTE_STONADSDAG.name,data:[]},{key:R.RESERVASJONER_FOR_AVDELING.name,data:[]}];return c(nn,{data:a,requestApi:Ve,children:c(ze,{setLosErIkkeTilgjengelig:()=>{},navAnsatt:t})})},G=J.bind({});G.args={avdelinger:[{avdelingEnhet:"1234",navn:"NAV Oslo",kreverKode6:!0},{avdelingEnhet:"123",navn:"NAV Viken",kreverKode6:!1}],navAnsatt:Je};const V=J.bind({});V.args={avdelinger:[],navAnsatt:Je};const D=J.bind({});D.args={avdelinger:[],navAnsatt:{kanOppgavestyre:!1,kanBehandleKode6:!1}};const x=J.bind({});x.args={avdelinger:[{avdelingEnhet:"1234",navn:"NAV Oslo",kreverKode6:!0},{avdelingEnhet:"123",navn:"NAV Viken",kreverKode6:!1}],navAnsatt:{kanOppgavestyre:!0,kanBehandleKode6:!1}};var Se,ye,he;G.parameters={...G.parameters,docs:{...(Se=G.parameters)==null?void 0:Se.docs,source:{originalSource:`({
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
}`,...(he=(ye=G.parameters)==null?void 0:ye.docs)==null?void 0:he.source}}};var Pe,Te,Ne;V.parameters={...V.parameters,docs:{...(Pe=V.parameters)==null?void 0:Pe.docs,source:{originalSource:`({
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
}`,...(Ne=(Te=V.parameters)==null?void 0:Te.docs)==null?void 0:Ne.source}}};var Ie,Le,Oe;D.parameters={...D.parameters,docs:{...(Ie=D.parameters)==null?void 0:Ie.docs,source:{originalSource:`({
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
}`,...(Oe=(Le=D.parameters)==null?void 0:Le.docs)==null?void 0:Oe.source}}};var ke,$e,Ke;x.parameters={...x.parameters,docs:{...(ke=x.parameters)==null?void 0:ke.docs,source:{originalSource:`({
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
}`,...(Ke=($e=x.parameters)==null?void 0:$e.docs)==null?void 0:Ke.source}}};const Ja=["Default","LasteIkonFørValgtAvdelingErSatt","HarIkkeTilgang","SkalFiltrereBortAvdelingerSomKreverKode6"];export{G as Default,D as HarIkkeTilgang,V as LasteIkonFørValgtAvdelingErSatt,x as SkalFiltrereBortAvdelingerSomKreverKode6,Ja as __namedExportsOrder,za as default};
//# sourceMappingURL=AvdelingslederIndex.stories-6188255c.js.map
