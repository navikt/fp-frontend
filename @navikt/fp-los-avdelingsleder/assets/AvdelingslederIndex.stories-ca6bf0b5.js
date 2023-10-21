import{j as c}from"./jsx-runtime-9c4ae004.js";import{k as Xe}from"./index.es-3a17af17.js";import{o as Ke,c as C,a as en,q as nn,z as tn,A as an,E as rn,I as ce,b as O,J as sn,k as on,P as ln,Q as dn,F as j,x as cn,m as un,U as fn,V as En,j as pn}from"./nb_NO-05becbd9.js";import{b as y,R,a as B,r as Ve}from"./fplosRestApi-812c551e.js";import{r as s,R as _,b as An}from"./index-1b03fe98.js";import{a as mn,y as Y}from"./index.es-5c2532e8.js";import{I as Rn}from"./IkkeTilgangTilAvdelingslederPanel-3e77a21e.js";import{g as $,s as _n,r as bn}from"./StoreValuesInLocalStorage-6ed602ef.js";import{F as vn}from"./FordelingAvBehandlingstypePanel-11ca6bd5.js";import{T as gn}from"./TilBehandlingPanel-5a76e2dd.js";import{M as Sn}from"./ManueltPaVentPanel-7228dca0.js";import{O as yn}from"./OppgaverPerForsteStonadsdagPanel-51ea6bfe.js";import{O as Pn}from"./OppgaverSomErApneEllerPaVentPanel-81ac3181.js";import{V as hn}from"./VentefristUtløperPanel-643f3c98.js";import{L as Tn}from"./LeggTilSaksbehandlerForm-03109fc2.js";import{S as Nn}from"./SaksbehandlereTabell-5343a613.js";import{E as In}from"./EndreSakslisterPanel-ffa8dff6.js";import{R as Ln}from"./ReservasjonerTabell-63b66194.js";import{_ as P}from"./extends-98964cd2.js";import{r as On}from"./index-6fd5a17b.js";import{H as w}from"./Heading-d0e6bb7b.js";import{P as kn}from"./Panel-76c4732c.js";import"./index.es-657e045f.js";import"./index.es-dbe55641.js";import"./index.es-5900b098.js";import"./Provider-29253648.js";import"./useLosKodeverk-a2b371c1.js";import"./isSameOrAfter-48a89950.js";import"./isSameOrBefore-ea99da6c.js";import"./SletteSaksbehandlerModal-cd86428c.js";import"./GjeldendeSakslisterTabell-42ca4e55.js";import"./SletteSakslisteModal-deb13d78.js";import"./SaksbehandlereForSakslisteForm-def6e636.js";import"./VStack-e154cc78.js";import"./UtvalgskriterierForSakslisteForm-66eea698.js";import"./BehandlingstypeVelger-bd14d16f.js";import"./AndreKriterierVelger-3ec0b886.js";import"./FagsakYtelseTypeVelger-3db725d5.js";import"./SorteringVelger-56da3380.js";var $n=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};const Kn=s.forwardRef((e,t)=>{var{title:a,titleId:n}=e,r=$n(e,["title","titleId"]);let o=Ke();return o=a?n||"title-"+o:void 0,s.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:t,"aria-labelledby":o},r),a?s.createElement("title",{id:o},a):null,s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.53 5.97a.75.75 0 0 1 0 1.06L9.56 12l4.97 4.97a.75.75 0 1 1-1.06 1.06l-5.5-5.5a.75.75 0 0 1 0-1.06l5.5-5.5a.75.75 0 0 1 1.06 0Z",fill:"currentColor"}))}),Vn=Kn;var xn=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};const Gn=s.forwardRef((e,t)=>{var{title:a,titleId:n}=e,r=xn(e,["title","titleId"]);let o=Ke();return o=a?n||"title-"+o:void 0,s.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:t,"aria-labelledby":o},r),a?s.createElement("title",{id:o},a):null,s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.47 5.97a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 0 1 0 1.06l-5.5 5.5a.75.75 0 1 1-1.06-1.06L14.44 12 9.47 7.03a.75.75 0 0 1 0-1.06Z",fill:"currentColor"}))}),Dn=Gn;function N(e,t,{checkForDefaultPrevented:a=!0}={}){return function(r){if(e==null||e(r),a===!1||!r.defaultPrevented)return t==null?void 0:t(r)}}function ue(e,t=[]){let a=[];function n(o,l){const i=s.createContext(l),E=a.length;a=[...a,l];function d(u){const{scope:m,children:A,...p}=u,g=(m==null?void 0:m[e][E])||i,v=s.useMemo(()=>p,Object.values(p));return s.createElement(g.Provider,{value:v},A)}function f(u,m){const A=(m==null?void 0:m[e][E])||i,p=s.useContext(A);if(p)return p;if(l!==void 0)return l;throw new Error(`\`${u}\` must be used within \`${o}\``)}return d.displayName=o+"Provider",[d,f]}const r=()=>{const o=a.map(l=>s.createContext(l));return function(i){const E=(i==null?void 0:i[e])||o;return s.useMemo(()=>({[`__scope${e}`]:{...i,[e]:E}}),[i,E])}};return r.scopeName=e,[n,Cn(r,...t)]}function Cn(...e){const t=e[0];if(e.length===1)return t;const a=()=>{const n=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(o){const l=n.reduce((i,{useScope:E,scopeName:d})=>{const u=E(o)[`__scope${d}`];return{...i,...u}},{});return s.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])}};return a.scopeName=t.scopeName,a}function Fn(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function xe(...e){return t=>e.forEach(a=>Fn(a,t))}function W(...e){return s.useCallback(xe(...e),e)}const U=s.forwardRef((e,t)=>{const{children:a,...n}=e,r=s.Children.toArray(a),o=r.find(wn);if(o){const l=o.props.children,i=r.map(E=>E===o?s.Children.count(l)>1?s.Children.only(null):s.isValidElement(l)?l.props.children:null:E);return s.createElement(Z,P({},n,{ref:t}),s.isValidElement(l)?s.cloneElement(l,void 0,i):null)}return s.createElement(Z,P({},n,{ref:t}),a)});U.displayName="Slot";const Z=s.forwardRef((e,t)=>{const{children:a,...n}=e;return s.isValidElement(a)?s.cloneElement(a,{...Mn(n,a.props),ref:xe(t,a.ref)}):s.Children.count(a)>1?s.Children.only(null):null});Z.displayName="SlotClone";const jn=({children:e})=>s.createElement(s.Fragment,null,e);function wn(e){return s.isValidElement(e)&&e.type===jn}function Mn(e,t){const a={...t};for(const n in t){const r=e[n],o=t[n];/^on[A-Z]/.test(n)?a[n]=(...i)=>{o==null||o(...i),r==null||r(...i)}:n==="style"?a[n]={...r,...o}:n==="className"&&(a[n]=[r,o].filter(Boolean).join(" "))}return{...e,...a}}function Hn(e){const t=e+"CollectionProvider",[a,n]=ue(t),[r,o]=a(t,{collectionRef:{current:null},itemMap:new Map}),l=A=>{const{scope:p,children:g}=A,v=_.useRef(null),b=_.useRef(new Map).current;return _.createElement(r,{scope:p,itemMap:b,collectionRef:v},g)},i=e+"CollectionSlot",E=_.forwardRef((A,p)=>{const{scope:g,children:v}=A,b=o(i,g),h=W(p,b.collectionRef);return _.createElement(U,{ref:h},v)}),d=e+"CollectionItemSlot",f="data-radix-collection-item",u=_.forwardRef((A,p)=>{const{scope:g,children:v,...b}=A,h=_.useRef(null),F=W(p,h),I=o(d,g);return _.useEffect(()=>(I.itemMap.set(h,{ref:h,...b}),()=>void I.itemMap.delete(h))),_.createElement(U,{[f]:"",ref:F},v)});function m(A){const p=o(e+"CollectionConsumer",A);return _.useCallback(()=>{const v=p.collectionRef.current;if(!v)return[];const b=Array.from(v.querySelectorAll(`[${f}]`));return Array.from(p.itemMap.values()).sort((I,T)=>b.indexOf(I.ref.current)-b.indexOf(T.ref.current))},[p.collectionRef,p.itemMap])}return[{Provider:l,Slot:E,ItemSlot:u},m,n]}const Bn=globalThis!=null&&globalThis.document?s.useLayoutEffect:()=>{},Yn=An["useId".toString()]||(()=>{});let Un=0;function Ge(e){const[t,a]=s.useState(Yn());return Bn(()=>{e||a(n=>n??String(Un++))},[e]),e||(t?`radix-${t}`:"")}const qn=["a","button","div","h2","h3","img","li","nav","ol","p","span","svg","ul"],K=qn.reduce((e,t)=>{const a=s.forwardRef((n,r)=>{const{asChild:o,...l}=n,i=o?U:t;return s.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),s.createElement(i,P({},l,{ref:r}))});return a.displayName=`Primitive.${t}`,{...e,[t]:a}},{});function fe(e){const t=s.useRef(e);return s.useEffect(()=>{t.current=e}),s.useMemo(()=>(...a)=>{var n;return(n=t.current)===null||n===void 0?void 0:n.call(t,...a)},[])}function De({prop:e,defaultProp:t,onChange:a=()=>{}}){const[n,r]=zn({defaultProp:t,onChange:a}),o=e!==void 0,l=o?e:n,i=fe(a),E=s.useCallback(d=>{if(o){const u=typeof d=="function"?d(e):d;u!==e&&i(u)}else r(d)},[o,e,r,i]);return[l,E]}function zn({defaultProp:e,onChange:t}){const a=s.useState(e),[n]=a,r=s.useRef(n),o=fe(t);return s.useEffect(()=>{r.current!==n&&(o(n),r.current=n)},[n,r,o]),a}const Jn=s.createContext(void 0);function Ce(e){const t=s.useContext(Jn);return e||t||"ltr"}const Q="rovingFocusGroup.onEntryFocus",Qn={bubbles:!1,cancelable:!0},Ee="RovingFocusGroup",[X,Fe,Wn]=Hn(Ee),[Zn,je]=ue(Ee,[Wn]),[Xn,et]=Zn(Ee),nt=s.forwardRef((e,t)=>s.createElement(X.Provider,{scope:e.__scopeRovingFocusGroup},s.createElement(X.Slot,{scope:e.__scopeRovingFocusGroup},s.createElement(tt,P({},e,{ref:t}))))),tt=s.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:a,orientation:n,loop:r=!1,dir:o,currentTabStopId:l,defaultCurrentTabStopId:i,onCurrentTabStopIdChange:E,onEntryFocus:d,...f}=e,u=s.useRef(null),m=W(t,u),A=Ce(o),[p=null,g]=De({prop:l,defaultProp:i,onChange:E}),[v,b]=s.useState(!1),h=fe(d),F=Fe(a),I=s.useRef(!1);return s.useEffect(()=>{const T=u.current;if(T)return T.addEventListener(Q,h),()=>T.removeEventListener(Q,h)},[h]),s.createElement(Xn,{scope:a,orientation:n,dir:A,loop:r,currentTabStopId:p,onItemFocus:s.useCallback(T=>g(T),[g]),onItemShiftTab:s.useCallback(()=>b(!0),[])},s.createElement(K.div,P({tabIndex:v?-1:0,"data-orientation":n},f,{ref:m,style:{outline:"none",...e.style},onMouseDown:N(e.onMouseDown,()=>{I.current=!0}),onFocus:N(e.onFocus,T=>{const Je=!I.current;if(T.target===T.currentTarget&&Je&&!v){const me=new CustomEvent(Q,Qn);if(T.currentTarget.dispatchEvent(me),!me.defaultPrevented){const J=F().filter(L=>L.focusable),Qe=J.find(L=>L.active),We=J.find(L=>L.id===p),Ze=[Qe,We,...J].filter(Boolean).map(L=>L.ref.current);we(Ze)}}I.current=!1}),onBlur:N(e.onBlur,()=>b(!1))})))}),at="RovingFocusGroupItem",rt=s.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:a,focusable:n=!0,active:r=!1,...o}=e,l=Ge(),i=et(at,a),E=i.currentTabStopId===l,d=Fe(a);return s.createElement(X.ItemSlot,{scope:a,id:l,focusable:n,active:r},s.createElement(K.span,P({tabIndex:E?0:-1,"data-orientation":i.orientation},o,{ref:t,onMouseDown:N(e.onMouseDown,f=>{n?i.onItemFocus(l):f.preventDefault()}),onFocus:N(e.onFocus,()=>i.onItemFocus(l)),onKeyDown:N(e.onKeyDown,f=>{if(f.key==="Tab"&&f.shiftKey){i.onItemShiftTab();return}if(f.target!==f.currentTarget)return;const u=lt(f,i.orientation,i.dir);if(u!==void 0){f.preventDefault();let A=d().filter(p=>p.focusable).map(p=>p.ref.current);if(u==="last")A.reverse();else if(u==="prev"||u==="next"){u==="prev"&&A.reverse();const p=A.indexOf(f.currentTarget);A=i.loop?it(A,p+1):A.slice(p+1)}setTimeout(()=>we(A))}})})))}),st={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function ot(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function lt(e,t,a){const n=ot(e.key,a);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(n))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(n)))return st[n]}function we(e){const t=document.activeElement;for(const a of e)if(a===t||(a.focus(),document.activeElement!==t))return}function it(e,t){return e.map((a,n)=>e[(t+n)%e.length])}const dt=nt,ct=rt;function ut(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function ft(...e){return t=>e.forEach(a=>ut(a,t))}function Et(...e){return s.useCallback(ft(...e),e)}const Re=globalThis!=null&&globalThis.document?s.useLayoutEffect:()=>{};function pt(e,t){return s.useReducer((a,n)=>{const r=t[a][n];return r??a},e)}const Me=e=>{const{present:t,children:a}=e,n=At(t),r=typeof a=="function"?a({present:n.isPresent}):s.Children.only(a),o=Et(n.ref,r.ref);return typeof a=="function"||n.isPresent?s.cloneElement(r,{ref:o}):null};Me.displayName="Presence";function At(e){const[t,a]=s.useState(),n=s.useRef({}),r=s.useRef(e),o=s.useRef("none"),l=e?"mounted":"unmounted",[i,E]=pt(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return s.useEffect(()=>{const d=M(n.current);o.current=i==="mounted"?d:"none"},[i]),Re(()=>{const d=n.current,f=r.current;if(f!==e){const m=o.current,A=M(d);e?E("MOUNT"):A==="none"||(d==null?void 0:d.display)==="none"?E("UNMOUNT"):E(f&&m!==A?"ANIMATION_OUT":"UNMOUNT"),r.current=e}},[e,E]),Re(()=>{if(t){const d=u=>{const A=M(n.current).includes(u.animationName);u.target===t&&A&&On.flushSync(()=>E("ANIMATION_END"))},f=u=>{u.target===t&&(o.current=M(n.current))};return t.addEventListener("animationstart",f),t.addEventListener("animationcancel",d),t.addEventListener("animationend",d),()=>{t.removeEventListener("animationstart",f),t.removeEventListener("animationcancel",d),t.removeEventListener("animationend",d)}}else E("ANIMATION_END")},[t,E]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:s.useCallback(d=>{d&&(n.current=getComputedStyle(d)),a(d)},[])}}function M(e){return(e==null?void 0:e.animationName)||"none"}const He="Tabs",[mt,qa]=ue(He,[je]),Be=je(),[Rt,pe]=mt(He),_t=s.forwardRef((e,t)=>{const{__scopeTabs:a,value:n,onValueChange:r,defaultValue:o,orientation:l="horizontal",dir:i,activationMode:E="automatic",...d}=e,f=Ce(i),[u,m]=De({prop:n,onChange:r,defaultProp:o});return s.createElement(Rt,{scope:a,baseId:Ge(),value:u,onValueChange:m,orientation:l,dir:f,activationMode:E},s.createElement(K.div,P({dir:f,"data-orientation":l},d,{ref:t})))}),bt="TabsList",vt=s.forwardRef((e,t)=>{const{__scopeTabs:a,loop:n=!0,...r}=e,o=pe(bt,a),l=Be(a);return s.createElement(dt,P({asChild:!0},l,{orientation:o.orientation,dir:o.dir,loop:n}),s.createElement(K.div,P({role:"tablist","aria-orientation":o.orientation},r,{ref:t})))}),gt="TabsTrigger",St=s.forwardRef((e,t)=>{const{__scopeTabs:a,value:n,disabled:r=!1,...o}=e,l=pe(gt,a),i=Be(a),E=Ye(l.baseId,n),d=Ue(l.baseId,n),f=n===l.value;return s.createElement(ct,P({asChild:!0},i,{focusable:!r,active:f}),s.createElement(K.button,P({type:"button",role:"tab","aria-selected":f,"aria-controls":d,"data-state":f?"active":"inactive","data-disabled":r?"":void 0,disabled:r,id:E},o,{ref:t,onMouseDown:N(e.onMouseDown,u=>{!r&&u.button===0&&u.ctrlKey===!1?l.onValueChange(n):u.preventDefault()}),onKeyDown:N(e.onKeyDown,u=>{[" ","Enter"].includes(u.key)&&l.onValueChange(n)}),onFocus:N(e.onFocus,()=>{const u=l.activationMode!=="manual";!f&&!r&&u&&l.onValueChange(n)})})))}),yt="TabsContent",Pt=s.forwardRef((e,t)=>{const{__scopeTabs:a,value:n,forceMount:r,children:o,...l}=e,i=pe(yt,a),E=Ye(i.baseId,n),d=Ue(i.baseId,n),f=n===i.value,u=s.useRef(f);return s.useEffect(()=>{const m=requestAnimationFrame(()=>u.current=!1);return()=>cancelAnimationFrame(m)},[]),s.createElement(Me,{present:r||f},({present:m})=>s.createElement(K.div,P({"data-state":f?"active":"inactive","data-orientation":i.orientation,role:"tabpanel","aria-labelledby":E,hidden:!m,id:d,tabIndex:0},l,{ref:t,style:{...e.style,animationDuration:u.current?"0s":void 0}}),m&&o))});function Ye(e,t){return`${e}-trigger-${t}`}function Ue(e,t){return`${e}-content-${t}`}const ht=_t,Tt=St;var Nt=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};const It=s.forwardRef((e,t)=>{var a,{className:n,as:r="button",label:o,icon:l,value:i}=e,E=Nt(e,["className","as","label","icon","value"]);const d=s.useContext(Ae);return!o&&!l?(console.error("<Tabs.Tab/> needs label/icon"),null):_.createElement(Tt,{value:i,asChild:!0},_.createElement(r,Object.assign({ref:t,className:C("navds-tabs__tab",`navds-tabs__tab--${(a=d==null?void 0:d.size)!==null&&a!==void 0?a:"medium"}`,`navds-tabs__tab-icon--${d==null?void 0:d.iconPosition}`,n,{"navds-tabs__tab--icon-only":l&&!o})},E),_.createElement(en,{as:"span",className:"navds-tabs__tab-inner",size:d==null?void 0:d.size},l,o)))}),Lt=It;var Ot=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};const kt=s.forwardRef((e,t)=>{var{className:a}=e,n=Ot(e,["className"]);const r=s.useContext(Ae),o=s.useRef(null),l=s.useMemo(()=>nn([o,t]),[t]),[i,E]=s.useState({start:!1,end:!1}),d=s.useMemo(()=>tn(()=>{if(!(o!=null&&o.current))return;const{scrollWidth:m,clientWidth:A}=o.current,p=o.current.scrollLeft,g=p>1,v=p<m-A-1;E(b=>g===b.start&&v===b.end?b:{start:g,end:v})}),[]);s.useEffect(()=>{var m,A,p;const g=()=>d(),v=(p=(A=(m=o.current)===null||m===void 0?void 0:m.ownerDocument)!==null&&A!==void 0?A:document)!==null&&p!==void 0?p:window;v.addEventListener("resize",g);let b;return typeof ResizeObserver<"u"&&(b=new ResizeObserver(g),b.observe(o.current)),()=>{v.removeEventListener("resize",g),b&&b.disconnect()}},[d]),s.useEffect(()=>{d()}),s.useEffect(()=>()=>{d.clear()},[d]);const f=({dir:m,hidden:A})=>_.createElement("div",{className:C("navds-tabs__scroll-button",{"navds-tabs__scroll-button--hidden":A}),onClick:()=>{o.current&&(o.current.scrollLeft+=m*100)}},m===-1?_.createElement(Vn,{title:"scroll tilbake"}):_.createElement(Dn,{title:"scroll neste"})),u=i.end||i.start;return _.createElement("div",{className:"navds-tabs__tablist-wrapper"},u&&_.createElement(f,{dir:-1,hidden:!i.start}),_.createElement(vt,Object.assign({},n,{ref:l,onScroll:d,loop:r==null?void 0:r.loop,className:C("navds-tabs__tablist",a)})),u&&_.createElement(f,{dir:1,hidden:!i.end}))}),$t=kt;var Kt=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};const Vt=s.forwardRef((e,t)=>{var{className:a}=e,n=Kt(e,["className"]);return _.createElement(Pt,Object.assign({},n,{ref:t,className:C("navds-tabs__tabpanel",a)}))}),xt=Vt;var Gt=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};const Ae=s.createContext(null),q=s.forwardRef((e,t)=>{var{className:a,children:n,onChange:r,size:o="medium",selectionFollowsFocus:l=!1,loop:i=!1,iconPosition:E="left"}=e,d=Gt(e,["className","children","onChange","size","selectionFollowsFocus","loop","iconPosition"]);return _.createElement(ht,Object.assign({},d,{ref:t,className:C("navds-tabs",a,`navds-tabs--${o}`),activationMode:l?"automatic":"manual",onValueChange:r}),_.createElement(Ae.Provider,{value:{size:o,loop:i,iconPosition:E}},n))});q.Tab=Lt;q.List=$t;q.Panel=xt;const k=q,Dt={paramName:"",parse:e=>e,isQueryParam:!1},Ct=(e,t,a)=>{const n=a.isQueryParam?ce(t.search):e;return a.parse(n[a.paramName])};function ee(e){const t={...Dt,...e},a=an(),n=rn(),r=Ct(n,a,t);return{location:a,selected:r}}try{ee.displayName="useTrackRouteParam",ee.__docgenInfo={description:"",displayName:"useTrackRouteParam",props:{paramName:{defaultValue:null,description:"",name:"paramName",required:!1,type:{name:"string"}},parse:{defaultValue:null,description:"",name:"parse",required:!1,type:{name:"((a: any) => any)"}},isQueryParam:{defaultValue:null,description:"",name:"isQueryParam",required:!1,type:{name:"boolean"}}}}}catch{}const Ft="_container_1sikf_1",jt={container:Ft},ne=({children:e})=>c.jsx("div",{className:jt.container,children:e});try{ne.displayName="AvdelingslederDashboard",ne.__docgenInfo={description:"AvdelingslederDashboard",displayName:"AvdelingslederDashboard",props:{}}}catch{}const S={BEHANDLINGSKOER:"behandlingskoer",SAKSBEHANDLERE:"saksbehandlere",NOKKELTALL:"nokkeltall",RESERVASJONER:"reservasjoner"},te=({oppgaverForAvdeling:e,oppgaverPerDato:t,oppgaverManueltPaVent:a,behandlingerPaVent:n,oppgaverPerForsteStonadsdag:r,oppgaverApneEllerPaVent:o})=>{const i=s.useRef(null);return c.jsxs("div",{ref:i,children:[c.jsx(gn,{height:300,oppgaverPerDato:t,getValueFromLocalStorage:$}),c.jsx(O,{twentyPx:!0}),c.jsx(vn,{height:300,oppgaverForAvdeling:e,getValueFromLocalStorage:$}),c.jsx(O,{twentyPx:!0}),c.jsx(Sn,{height:300,oppgaverManueltPaVent:a,getValueFromLocalStorage:$}),c.jsx(O,{twentyPx:!0}),c.jsx(hn,{height:300,behandlingerPaVent:n,getValueFromLocalStorage:$}),c.jsx(O,{twentyPx:!0}),c.jsx(yn,{height:300,oppgaverPerForsteStonadsdag:r}),c.jsx(O,{twentyPx:!0}),c.jsx(Pn,{height:300,oppgaverApneEllerPaVent:o,getValueFromLocalStorage:$})]})};try{te.displayName="NokkeltallPanel",te.__docgenInfo={description:"NokkeltallPanel.",displayName:"NokkeltallPanel",props:{oppgaverForAvdeling:{defaultValue:null,description:"",name:"oppgaverForAvdeling",required:!0,type:{name:"Readonly<{ fagsakYtelseType: string; behandlingType: string; tilBehandling: boolean; antall: number; }>[]"}},oppgaverPerDato:{defaultValue:null,description:"",name:"oppgaverPerDato",required:!0,type:{name:"Readonly<{ fagsakYtelseType: string; behandlingType: string; opprettetDato: string; antall: number; }>[]"}},oppgaverManueltPaVent:{defaultValue:null,description:"",name:"oppgaverManueltPaVent",required:!0,type:{name:"Readonly<{ fagsakYtelseType: string; behandlingFrist: string; antall: number; }>[]"}},behandlingerPaVent:{defaultValue:null,description:"",name:"behandlingerPaVent",required:!0,type:{name:"Readonly<{ fagsakYtelseType: string; behandlingFrist: string; antall: number; }>[]"}},oppgaverPerForsteStonadsdag:{defaultValue:null,description:"",name:"oppgaverPerForsteStonadsdag",required:!0,type:{name:"Readonly<{ forsteStonadsdag: string; antall: number; }>[]"}},oppgaverApneEllerPaVent:{defaultValue:null,description:"",name:"oppgaverApneEllerPaVent",required:!0,type:{name:"Readonly<{ antall: number; behandlingType: string; behandlingVenteStatus: string; førsteUttakMåned?: string | undefined; }>[]"}}}}}catch{}const wt=[],Mt=[],Ht=[],Bt=[],Yt=[],Ut=[],ae=({valgtAvdelingEnhet:e})=>{const{data:t=wt}=y.useRestApi(R.HENT_OPPGAVER_FOR_AVDELING,{avdelingEnhet:e}),{data:a=Mt}=y.useRestApi(R.HENT_OPPGAVER_PER_DATO,{avdelingEnhet:e}),{data:n=Ht}=y.useRestApi(R.HENT_OPPGAVER_MANUELT_PA_VENT,{avdelingEnhet:e}),{data:r=Bt}=y.useRestApi(R.HENT_BEHANDLINGER_FRISTUTLOP,{avdelingEnhet:e}),{data:o=Yt}=y.useRestApi(R.HENT_OPPGAVER_PER_FORSTE_STONADSDAG,{avdelingEnhet:e}),{data:l=Ut}=y.useRestApi(R.HENT_OPPGAVER_APNE_ELLER_PA_VENT,{avdelingEnhet:e});return c.jsx(te,{oppgaverForAvdeling:t,oppgaverPerDato:a,oppgaverManueltPaVent:n,behandlingerPaVent:r,oppgaverPerForsteStonadsdag:o,oppgaverApneEllerPaVent:l})};try{ae.displayName="NokkeltallIndex",ae.__docgenInfo={description:"NokkeltallIndex",displayName:"NokkeltallIndex",props:{valgtAvdelingEnhet:{defaultValue:null,description:"",name:"valgtAvdelingEnhet",required:!0,type:{name:"string"}}}}}catch{}const re=({saksbehandlere:e,valgtAvdelingEnhet:t,avdelingensSaksbehandlere:a,hentAvdelingensSaksbehandlere:n})=>c.jsxs(c.Fragment,{children:[c.jsx(Nn,{saksbehandlere:e,valgtAvdelingEnhet:t,hentAvdelingensSaksbehandlere:n}),c.jsx(O,{sixteenPx:!0}),c.jsx(Tn,{valgtAvdelingEnhet:t,avdelingensSaksbehandlere:a,hentAvdelingensSaksbehandlere:n})]});try{re.displayName="SaksbehandlerePanel",re.__docgenInfo={description:"SaksbehandlerePanel",displayName:"SaksbehandlerePanel",props:{saksbehandlere:{defaultValue:null,description:"",name:"saksbehandlere",required:!0,type:{name:"Readonly<{ brukerIdent: string; navn: string; avdelingsnavn: string[]; }>[]"}},valgtAvdelingEnhet:{defaultValue:null,description:"",name:"valgtAvdelingEnhet",required:!0,type:{name:"string"}},avdelingensSaksbehandlere:{defaultValue:null,description:"",name:"avdelingensSaksbehandlere",required:!0,type:{name:"Readonly<{ brukerIdent: string; navn: string; avdelingsnavn: string[]; }>[]"}},hentAvdelingensSaksbehandlere:{defaultValue:null,description:"",name:"hentAvdelingensSaksbehandlere",required:!0,type:{name:"(params: { avdelingEnhet: string; }) => void"}}}}}catch{}const se=({valgtAvdelingEnhet:e,avdelingensSaksbehandlere:t,hentAvdelingensSaksbehandlere:a})=>c.jsx(re,{saksbehandlere:t,valgtAvdelingEnhet:e,avdelingensSaksbehandlere:t,hentAvdelingensSaksbehandlere:a});try{se.displayName="EndreSaksbehandlereIndex",se.__docgenInfo={description:"EndreSaksbehandlereIndex",displayName:"EndreSaksbehandlereIndex",props:{avdelingensSaksbehandlere:{defaultValue:null,description:"",name:"avdelingensSaksbehandlere",required:!0,type:{name:"Readonly<{ brukerIdent: string; navn: string; avdelingsnavn: string[]; }>[]"}},valgtAvdelingEnhet:{defaultValue:null,description:"",name:"valgtAvdelingEnhet",required:!0,type:{name:"string"}},hentAvdelingensSaksbehandlere:{defaultValue:null,description:"",name:"hentAvdelingensSaksbehandlere",required:!0,type:{name:"(params: { avdelingEnhet: string; }) => void"}}}}}catch{}const oe=({valgtAvdelingEnhet:e,avdelingensSaksbehandlere:t})=>{const[a,n]=s.useState(),r=s.useCallback(()=>n(void 0),[]);return c.jsx(In,{setValgtSakslisteId:n,valgtSakslisteId:a,valgtAvdelingEnhet:e,avdelingensSaksbehandlere:t,resetValgtSakslisteId:r})};try{oe.displayName="EndreBehandlingskoerIndex",oe.__docgenInfo={description:"EndreBehandlingskoerIndex",displayName:"EndreBehandlingskoerIndex",props:{valgtAvdelingEnhet:{defaultValue:null,description:"",name:"valgtAvdelingEnhet",required:!0,type:{name:"string"}},avdelingensSaksbehandlere:{defaultValue:null,description:"",name:"avdelingensSaksbehandlere",required:!0,type:{name:"Readonly<{ brukerIdent: string; navn: string; avdelingsnavn: string[]; }>[]"}}}}}catch{}const qt=[],le=({valgtAvdelingEnhet:e})=>{const{data:t=qt,startRequest:a}=y.useRestApiRunner(R.RESERVASJONER_FOR_AVDELING),{startRequest:n}=y.useRestApiRunner(R.AVDELINGSLEDER_OPPHEVER_RESERVASJON),r=y.useGlobalStateRestApiData(B.KODEVERK_LOS);s.useEffect(()=>{a({avdelingEnhet:e})},[]);const o=s.useCallback(i=>n({oppgaveId:i}).then(()=>a({avdelingEnhet:e})),[e]),l=s.useCallback(()=>a({avdelingEnhet:e}),[e]);return c.jsx(Ln,{opphevReservasjon:o,reservasjoner:t,hentAvdelingensReservasjoner:l,alleKodeverk:r})};try{le.displayName="ReservasjonerIndex",le.__docgenInfo={description:"",displayName:"ReservasjonerIndex",props:{valgtAvdelingEnhet:{defaultValue:null,description:"",name:"valgtAvdelingEnhet",required:!0,type:{name:"string"}}}}}catch{}const zt="_padding_eb62i_1",_e={padding:zt},ie=({setValgtAvdelingEnhet:e,valgtAvdelingEnhet:t,avdelinger:a})=>{const n=s.useCallback(r=>{const o=r.target.value;_n("avdelingEnhet",o),e(o)},[a]);return a?c.jsx("div",{className:_e.padding,children:c.jsx(sn,{size:"small",hideLabel:!0,label:"",onChange:n,value:t,className:_e.padding,children:a.map(r=>c.jsx("option",{value:r.avdelingEnhet,children:`${r.avdelingEnhet} ${r.navn}`},r.avdelingEnhet))})}):null};try{ie.displayName="Avdelingsvelger",ie.__docgenInfo={description:"",displayName:"Avdelingsvelger",props:{setValgtAvdelingEnhet:{defaultValue:null,description:"",name:"setValgtAvdelingEnhet",required:!0,type:{name:"(avdelingEnhet: string) => void"}},valgtAvdelingEnhet:{defaultValue:null,description:"",name:"valgtAvdelingEnhet",required:!1,type:{name:"string"}},avdelinger:{defaultValue:null,description:"",name:"avdelinger",required:!1,type:{name:"Readonly<{ avdelingEnhet: string; navn: string; kreverKode6: boolean; }>[]"}}}}}catch{}const Jt="_paddingHeader_yllsv_1",Qt="_padding_yllsv_1",be={paddingHeader:Jt,padding:Qt},Wt=on(un),ve="4867",Zt=[],Xt=(e,t,a)=>{if(t.length>0&&!a){let n=t.some(o=>o.avdelingEnhet===ve)?ve:t[0].avdelingEnhet;const r=$("avdelingEnhet");r&&(t.some(o=>o.avdelingEnhet===r)?n=r:bn("avdelingEnhet")),e(n)}},ea=e=>e==="?"||!e,na=(e,t)=>{const a=ea(e)?{}:ce(e);return fn({...a,...t})},ta=(e,t)=>({...e,search:na(e.search,t)}),aa=e=>t=>ta(e,{fane:t}),ra=(e,t,a,n)=>{switch(e){case S.BEHANDLINGSKOER:return c.jsx(oe,{valgtAvdelingEnhet:t,avdelingensSaksbehandlere:n});case S.SAKSBEHANDLERE:return c.jsx(se,{valgtAvdelingEnhet:t,hentAvdelingensSaksbehandlere:a,avdelingensSaksbehandlere:n});case S.NOKKELTALL:return c.jsx(ae,{valgtAvdelingEnhet:t});case S.RESERVASJONER:return c.jsx(le,{valgtAvdelingEnhet:t});default:return null}},H={[S.BEHANDLINGSKOER]:"AvdelingslederIndex.Behandlingskoer",[S.SAKSBEHANDLERE]:"AvdelingslederIndex.Saksbehandlere",[S.NOKKELTALL]:"AvdelingslederIndex.Nokkeltall",[S.RESERVASJONER]:"AvdelingslederIndex.Reservasjoner"},sa=e=>{const t=ce(e.search);return t.avdelingsleder?t.avdelingsleder:S.BEHANDLINGSKOER},de=({navAnsatt:e})=>{const[t,a]=s.useState(),{selected:n,location:r}=ee({paramName:"fane",isQueryParam:!0}),o=y.useRestApi(R.AVDELINGER,void 0,{isCachingOn:!0,suspendRequest:!(e!=null&&e.kanOppgavestyre)}),l=o==null?void 0:o.data,i=l?l.filter(p=>!!(e!=null&&e.kanBehandleKode6)||!p.kreverKode6):[];s.useEffect(()=>{o.state===Y.SUCCESS&&Xt(a,i,t)},[o]);const{startRequest:E,data:d=Zt}=y.useRestApiRunner(R.SAKSBEHANDLERE_FOR_AVDELING),f=s.useCallback(p=>E(p,!0),[]);s.useEffect(()=>{t&&f({avdelingEnhet:t})},[t]);const u=aa(r),m=n||sa(r),A=dn();return e!=null&&e.kanOppgavestyre?o.state!==Y.SUCCESS?null:t?c.jsxs(ne,{children:[c.jsx(ie,{valgtAvdelingEnhet:t,avdelinger:i,setValgtAvdelingEnhet:a}),c.jsx(O,{sixteenPx:!0}),c.jsx(k,{size:"small",value:m,onChange:p=>{A(u(p))},className:be.paddingHeader,children:c.jsxs(k.List,{children:[c.jsx(k.Tab,{value:S.BEHANDLINGSKOER,label:c.jsx(w,{size:"small",children:c.jsx(j,{id:H[S.BEHANDLINGSKOER]})})}),c.jsx(k.Tab,{value:S.NOKKELTALL,label:c.jsx(w,{size:"small",children:c.jsx(j,{id:H[S.NOKKELTALL]})})}),c.jsx(k.Tab,{value:S.SAKSBEHANDLERE,label:c.jsx(w,{size:"small",children:c.jsx(j,{id:H[S.SAKSBEHANDLERE]})})}),c.jsx(k.Tab,{value:S.RESERVASJONER,label:c.jsx(w,{size:"small",children:c.jsx(j,{id:H[S.RESERVASJONER]})})})]})}),c.jsx(kn,{className:be.padding,children:ra(m,t,f,d)})]},t):c.jsx(cn,{}):c.jsx(Rn,{})},oa=({setLosErIkkeTilgjengelig:e,navAnsatt:t})=>{const{addErrorMessage:a}=mn();Ve.setAddErrorMessageHandler(a);const n=y.useGlobalStateRestApiData(B.KODEVERK_LOS),r=y.useGlobalStateRestApi(B.KODEVERK_LOS,void 0,{suspendRequest:!!n});return s.useEffect(()=>{!n&&r.state===Y.ERROR&&e()},[r.state]),!n&&r.state!==Y.SUCCESS?null:c.jsx(ln,{value:Wt,children:c.jsx(de,{navAnsatt:t})})},qe=oa;try{de.displayName="AvdelingslederIndex",de.__docgenInfo={description:"",displayName:"AvdelingslederIndex",props:{setLosErIkkeTilgjengelig:{defaultValue:null,description:"",name:"setLosErIkkeTilgjengelig",required:!0,type:{name:"() => void"}},navAnsatt:{defaultValue:null,description:"",name:"navAnsatt",required:!1,type:{name:"Readonly<{ brukernavn: string; funksjonellTid?: string; kanBehandleKode6: boolean; kanBehandleKode7: boolean; kanBehandleKodeEgenAnsatt: boolean; kanBeslutte: boolean; kanOppgavestyre: boolean; ... 4 more ...; skalViseDetaljerteFeilmeldinger: boolean; }>"}}}}}catch{}const za={title:"los/avdelingsleder/AvdelingslederIndex",component:qe,decorators:[En]},ze={kanOppgavestyre:!0,kanBehandleKode6:!0},z=({avdelinger:e,navAnsatt:t})=>{const a=[{key:B.KODEVERK_LOS.name,data:pn,global:!0},{key:R.AVDELINGER.name,data:e},{key:R.SAKSBEHANDLERE_FOR_AVDELING.name,data:[]},{key:R.OPPGAVE_ANTALL.name,data:1},{key:R.LAGRE_SAKSLISTE_NAVN.name,data:void 0},{key:R.LAGRE_SAKSLISTE_SORTERING.name,data:void 0},{key:R.LAGRE_SAKSLISTE_SORTERING_INTERVALL.name,data:void 0},{key:R.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE.name,data:void 0},{key:R.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO.name,data:void 0},{key:R.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE.name,data:void 0},{key:R.LAGRE_SAKSLISTE_BEHANDLINGSTYPE.name,data:void 0},{key:R.LAGRE_SAKSLISTE_ANDRE_KRITERIER.name,data:void 0},{key:R.OPPGAVE_AVDELING_ANTALL.name,data:1},{key:R.SAKSLISTER_FOR_AVDELING.name,data:[]},{key:R.HENT_OPPGAVER_FOR_AVDELING.name,data:[]},{key:R.HENT_OPPGAVER_PER_DATO.name,data:[]},{key:R.HENT_OPPGAVER_APNE_ELLER_PA_VENT.name,data:[]},{key:R.HENT_BEHANDLINGER_FRISTUTLOP.name,data:[]},{key:R.HENT_OPPGAVER_MANUELT_PA_VENT.name,data:[]},{key:R.HENT_OPPGAVER_PER_FORSTE_STONADSDAG.name,data:[]},{key:R.RESERVASJONER_FOR_AVDELING.name,data:[]}];return c.jsx(Xe,{data:a,requestApi:Ve,children:c.jsx(qe,{setLosErIkkeTilgjengelig:()=>{},navAnsatt:t})})},V=z.bind({});V.args={avdelinger:[{avdelingEnhet:"1234",navn:"NAV Oslo",kreverKode6:!0},{avdelingEnhet:"123",navn:"NAV Viken",kreverKode6:!1}],navAnsatt:ze};const x=z.bind({});x.args={avdelinger:[],navAnsatt:ze};const G=z.bind({});G.args={avdelinger:[],navAnsatt:{kanOppgavestyre:!1,kanBehandleKode6:!1}};const D=z.bind({});D.args={avdelinger:[{avdelingEnhet:"1234",navn:"NAV Oslo",kreverKode6:!0},{avdelingEnhet:"123",navn:"NAV Viken",kreverKode6:!1}],navAnsatt:{kanOppgavestyre:!0,kanBehandleKode6:!1}};var ge,Se,ye;V.parameters={...V.parameters,docs:{...(ge=V.parameters)==null?void 0:ge.docs,source:{originalSource:`({
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
}`,...(ye=(Se=V.parameters)==null?void 0:Se.docs)==null?void 0:ye.source}}};var Pe,he,Te;x.parameters={...x.parameters,docs:{...(Pe=x.parameters)==null?void 0:Pe.docs,source:{originalSource:`({
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
}`,...(Te=(he=x.parameters)==null?void 0:he.docs)==null?void 0:Te.source}}};var Ne,Ie,Le;G.parameters={...G.parameters,docs:{...(Ne=G.parameters)==null?void 0:Ne.docs,source:{originalSource:`({
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
}`,...(Le=(Ie=G.parameters)==null?void 0:Ie.docs)==null?void 0:Le.source}}};var Oe,ke,$e;D.parameters={...D.parameters,docs:{...(Oe=D.parameters)==null?void 0:Oe.docs,source:{originalSource:`({
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
}`,...($e=(ke=D.parameters)==null?void 0:ke.docs)==null?void 0:$e.source}}};const Ja=["Default","LasteIkonFørValgtAvdelingErSatt","HarIkkeTilgang","SkalFiltrereBortAvdelingerSomKreverKode6"];export{V as Default,G as HarIkkeTilgang,x as LasteIkonFørValgtAvdelingErSatt,D as SkalFiltrereBortAvdelingerSomKreverKode6,Ja as __namedExportsOrder,za as default};
//# sourceMappingURL=AvdelingslederIndex.stories-ca6bf0b5.js.map
