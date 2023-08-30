import{j as i}from"./jsx-runtime-9c4ae004.js";import{k as nn}from"./index.es-bf1c6c02.js";import{n as Ve,c as j,b as tn,p as an,x as sn,y as rn,z as on,A as fe,G as k,f as ln,o as dn,s as cn,D as Q,K as un,a as K,S as fn,t as pn,P as En,E as An,U as mn,m as _n,J as Rn,Q as vn,j as bn}from"./nb_NO-7fc4d3fe.js";import{b as h,R as _,a as B,r as Ge}from"./fplosRestApi-beda4f04.js";import{r,R as b,b as gn}from"./index-1b03fe98.js";import{a as Sn,y as q}from"./index.es-dcafba10.js";import{I as yn}from"./IkkeTilgangTilAvdelingslederPanel-f24d811e.js";import{g as x,s as hn,r as Pn}from"./StoreValuesInLocalStorage-6ed602ef.js";import{F as Nn}from"./FordelingAvBehandlingstypePanel-d90c2901.js";import{T as Tn}from"./TilBehandlingPanel-ff2db346.js";import{M as In}from"./ManueltPaVentPanel-5b99237e.js";import{O as Ln}from"./OppgaverPerForsteStonadsdagPanel-aebeccfd.js";import{O as kn}from"./OppgaverSomErApneEllerPaVentPanel-75092482.js";import{L as On}from"./LeggTilSaksbehandlerForm-8d3a6de4.js";import{S as $n}from"./SaksbehandlereTabell-5c4855d4.js";import{G as Kn}from"./GjeldendeSakslisterTabell-9ec6795e.js";import{S as xn}from"./SaksbehandlereForSakslisteForm-7aaec98c.js";import{U as Vn}from"./UtvalgskriterierForSakslisteForm-56a3df28.js";import{R as Gn}from"./ReservasjonerTabell-33e34c3d.js";import{_ as P}from"./extends-98964cd2.js";import{r as Dn}from"./index-6fd5a17b.js";import{H as w}from"./Heading-87cc8cdf.js";import{P as Cn}from"./Panel-44dfe287.js";import"./index.es-657e045f.js";import"./index.es-0ce23978.js";import"./index.es-d67466a8.js";import"./Provider-862e7645.js";import"./Detail-95eaaf87.js";import"./useLosKodeverk-3c749e2b.js";import"./isSameOrAfter-48a89950.js";import"./isSameOrBefore-ea99da6c.js";import"./remove-2f21eb3e.js";import"./SletteSaksbehandlerModal-af2f488f.js";import"./SletteSakslisteModal-34930dcd.js";import"./BehandlingstypeVelger-20009d8f.js";import"./AndreKriterierVelger-5eafca79.js";import"./FagsakYtelseTypeVelger-4db3e803.js";import"./SorteringVelger-14a0c5f5.js";var jn=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(a[n[s]]=e[n[s]]);return a};const Fn=r.forwardRef((e,t)=>{var{title:a,titleId:n}=e,s=jn(e,["title","titleId"]);let o=Ve();return o=a?n||"title-"+o:void 0,r.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:t,"aria-labelledby":o},s),a?r.createElement("title",{id:o},a):null,r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.53 5.97a.75.75 0 0 1 0 1.06L9.56 12l4.97 4.97a.75.75 0 1 1-1.06 1.06l-5.5-5.5a.75.75 0 0 1 0-1.06l5.5-5.5a.75.75 0 0 1 1.06 0Z",fill:"currentColor"}))}),wn=Fn;var Mn=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(a[n[s]]=e[n[s]]);return a};const Hn=r.forwardRef((e,t)=>{var{title:a,titleId:n}=e,s=Mn(e,["title","titleId"]);let o=Ve();return o=a?n||"title-"+o:void 0,r.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:t,"aria-labelledby":o},s),a?r.createElement("title",{id:o},a):null,r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.47 5.97a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 0 1 0 1.06l-5.5 5.5a.75.75 0 1 1-1.06-1.06L14.44 12 9.47 7.03a.75.75 0 0 1 0-1.06Z",fill:"currentColor"}))}),Bn=Hn;function T(e,t,{checkForDefaultPrevented:a=!0}={}){return function(s){if(e==null||e(s),a===!1||!s.defaultPrevented)return t==null?void 0:t(s)}}function pe(e,t=[]){let a=[];function n(o,l){const d=r.createContext(l),p=a.length;a=[...a,l];function c(f){const{scope:A,children:m,...E}=f,g=(A==null?void 0:A[e][p])||d,v=r.useMemo(()=>E,Object.values(E));return r.createElement(g.Provider,{value:v},m)}function u(f,A){const m=(A==null?void 0:A[e][p])||d,E=r.useContext(m);if(E)return E;if(l!==void 0)return l;throw new Error(`\`${f}\` must be used within \`${o}\``)}return c.displayName=o+"Provider",[c,u]}const s=()=>{const o=a.map(l=>r.createContext(l));return function(d){const p=(d==null?void 0:d[e])||o;return r.useMemo(()=>({[`__scope${e}`]:{...d,[e]:p}}),[d,p])}};return s.scopeName=e,[n,qn(s,...t)]}function qn(...e){const t=e[0];if(e.length===1)return t;const a=()=>{const n=e.map(s=>({useScope:s(),scopeName:s.scopeName}));return function(o){const l=n.reduce((d,{useScope:p,scopeName:c})=>{const f=p(o)[`__scope${c}`];return{...d,...f}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])}};return a.scopeName=t.scopeName,a}function Yn(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function De(...e){return t=>e.forEach(a=>Yn(a,t))}function Z(...e){return r.useCallback(De(...e),e)}const Y=r.forwardRef((e,t)=>{const{children:a,...n}=e,s=r.Children.toArray(a),o=s.find(zn);if(o){const l=o.props.children,d=s.map(p=>p===o?r.Children.count(l)>1?r.Children.only(null):r.isValidElement(l)?l.props.children:null:p);return r.createElement(X,P({},n,{ref:t}),r.isValidElement(l)?r.cloneElement(l,void 0,d):null)}return r.createElement(X,P({},n,{ref:t}),a)});Y.displayName="Slot";const X=r.forwardRef((e,t)=>{const{children:a,...n}=e;return r.isValidElement(a)?r.cloneElement(a,{...Jn(n,a.props),ref:De(t,a.ref)}):r.Children.count(a)>1?r.Children.only(null):null});X.displayName="SlotClone";const Un=({children:e})=>r.createElement(r.Fragment,null,e);function zn(e){return r.isValidElement(e)&&e.type===Un}function Jn(e,t){const a={...t};for(const n in t){const s=e[n],o=t[n];/^on[A-Z]/.test(n)?a[n]=(...d)=>{o==null||o(...d),s==null||s(...d)}:n==="style"?a[n]={...s,...o}:n==="className"&&(a[n]=[s,o].filter(Boolean).join(" "))}return{...e,...a}}function Qn(e){const t=e+"CollectionProvider",[a,n]=pe(t),[s,o]=a(t,{collectionRef:{current:null},itemMap:new Map}),l=m=>{const{scope:E,children:g}=m,v=b.useRef(null),R=b.useRef(new Map).current;return b.createElement(s,{scope:E,itemMap:R,collectionRef:v},g)},d=e+"CollectionSlot",p=b.forwardRef((m,E)=>{const{scope:g,children:v}=m,R=o(d,g),y=Z(E,R.collectionRef);return b.createElement(Y,{ref:y},v)}),c=e+"CollectionItemSlot",u="data-radix-collection-item",f=b.forwardRef((m,E)=>{const{scope:g,children:v,...R}=m,y=b.useRef(null),F=Z(E,y),I=o(c,g);return b.useEffect(()=>(I.itemMap.set(y,{ref:y,...R}),()=>void I.itemMap.delete(y))),b.createElement(Y,{[u]:"",ref:F},v)});function A(m){const E=o(e+"CollectionConsumer",m);return b.useCallback(()=>{const v=E.collectionRef.current;if(!v)return[];const R=Array.from(v.querySelectorAll(`[${u}]`));return Array.from(E.itemMap.values()).sort((I,N)=>R.indexOf(I.ref.current)-R.indexOf(N.ref.current))},[E.collectionRef,E.itemMap])}return[{Provider:l,Slot:p,ItemSlot:f},A,n]}const Wn=globalThis!=null&&globalThis.document?r.useLayoutEffect:()=>{},Zn=gn["useId".toString()]||(()=>{});let Xn=0;function Ce(e){const[t,a]=r.useState(Zn());return Wn(()=>{e||a(n=>n??String(Xn++))},[e]),e||(t?`radix-${t}`:"")}const et=["a","button","div","h2","h3","img","li","nav","ol","p","span","svg","ul"],$=et.reduce((e,t)=>{const a=r.forwardRef((n,s)=>{const{asChild:o,...l}=n,d=o?Y:t;return r.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),r.createElement(d,P({},l,{ref:s}))});return a.displayName=`Primitive.${t}`,{...e,[t]:a}},{});function Ee(e){const t=r.useRef(e);return r.useEffect(()=>{t.current=e}),r.useMemo(()=>(...a)=>{var n;return(n=t.current)===null||n===void 0?void 0:n.call(t,...a)},[])}function je({prop:e,defaultProp:t,onChange:a=()=>{}}){const[n,s]=nt({defaultProp:t,onChange:a}),o=e!==void 0,l=o?e:n,d=Ee(a),p=r.useCallback(c=>{if(o){const f=typeof c=="function"?c(e):c;f!==e&&d(f)}else s(c)},[o,e,s,d]);return[l,p]}function nt({defaultProp:e,onChange:t}){const a=r.useState(e),[n]=a,s=r.useRef(n),o=Ee(t);return r.useEffect(()=>{s.current!==n&&(o(n),s.current=n)},[n,s,o]),a}const tt=r.createContext(void 0);function Fe(e){const t=r.useContext(tt);return e||t||"ltr"}const W="rovingFocusGroup.onEntryFocus",at={bubbles:!1,cancelable:!0},Ae="RovingFocusGroup",[ee,we,st]=Qn(Ae),[rt,Me]=pe(Ae,[st]),[ot,lt]=rt(Ae),it=r.forwardRef((e,t)=>r.createElement(ee.Provider,{scope:e.__scopeRovingFocusGroup},r.createElement(ee.Slot,{scope:e.__scopeRovingFocusGroup},r.createElement(dt,P({},e,{ref:t}))))),dt=r.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:a,orientation:n,loop:s=!1,dir:o,currentTabStopId:l,defaultCurrentTabStopId:d,onCurrentTabStopIdChange:p,onEntryFocus:c,...u}=e,f=r.useRef(null),A=Z(t,f),m=Fe(o),[E=null,g]=je({prop:l,defaultProp:d,onChange:p}),[v,R]=r.useState(!1),y=Ee(c),F=we(a),I=r.useRef(!1);return r.useEffect(()=>{const N=f.current;if(N)return N.addEventListener(W,y),()=>N.removeEventListener(W,y)},[y]),r.createElement(ot,{scope:a,orientation:n,dir:m,loop:s,currentTabStopId:E,onItemFocus:r.useCallback(N=>g(N),[g]),onItemShiftTab:r.useCallback(()=>R(!0),[])},r.createElement($.div,P({tabIndex:v?-1:0,"data-orientation":n},u,{ref:A,style:{outline:"none",...e.style},onMouseDown:T(e.onMouseDown,()=>{I.current=!0}),onFocus:T(e.onFocus,N=>{const We=!I.current;if(N.target===N.currentTarget&&We&&!v){const Re=new CustomEvent(W,at);if(N.currentTarget.dispatchEvent(Re),!Re.defaultPrevented){const J=F().filter(L=>L.focusable),Ze=J.find(L=>L.active),Xe=J.find(L=>L.id===E),en=[Ze,Xe,...J].filter(Boolean).map(L=>L.ref.current);He(en)}}I.current=!1}),onBlur:T(e.onBlur,()=>R(!1))})))}),ct="RovingFocusGroupItem",ut=r.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:a,focusable:n=!0,active:s=!1,...o}=e,l=Ce(),d=lt(ct,a),p=d.currentTabStopId===l,c=we(a);return r.createElement(ee.ItemSlot,{scope:a,id:l,focusable:n,active:s},r.createElement($.span,P({tabIndex:p?0:-1,"data-orientation":d.orientation},o,{ref:t,onMouseDown:T(e.onMouseDown,u=>{n?d.onItemFocus(l):u.preventDefault()}),onFocus:T(e.onFocus,()=>d.onItemFocus(l)),onKeyDown:T(e.onKeyDown,u=>{if(u.key==="Tab"&&u.shiftKey){d.onItemShiftTab();return}if(u.target!==u.currentTarget)return;const f=Et(u,d.orientation,d.dir);if(f!==void 0){u.preventDefault();let m=c().filter(E=>E.focusable).map(E=>E.ref.current);if(f==="last")m.reverse();else if(f==="prev"||f==="next"){f==="prev"&&m.reverse();const E=m.indexOf(u.currentTarget);m=d.loop?At(m,E+1):m.slice(E+1)}setTimeout(()=>He(m))}})})))}),ft={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function pt(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function Et(e,t,a){const n=pt(e.key,a);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(n))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(n)))return ft[n]}function He(e){const t=document.activeElement;for(const a of e)if(a===t||(a.focus(),document.activeElement!==t))return}function At(e,t){return e.map((a,n)=>e[(t+n)%e.length])}const mt=it,_t=ut;function Rt(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function vt(...e){return t=>e.forEach(a=>Rt(a,t))}function bt(...e){return r.useCallback(vt(...e),e)}const ve=globalThis!=null&&globalThis.document?r.useLayoutEffect:()=>{};function gt(e,t){return r.useReducer((a,n)=>{const s=t[a][n];return s??a},e)}const Be=e=>{const{present:t,children:a}=e,n=St(t),s=typeof a=="function"?a({present:n.isPresent}):r.Children.only(a),o=bt(n.ref,s.ref);return typeof a=="function"||n.isPresent?r.cloneElement(s,{ref:o}):null};Be.displayName="Presence";function St(e){const[t,a]=r.useState(),n=r.useRef({}),s=r.useRef(e),o=r.useRef("none"),l=e?"mounted":"unmounted",[d,p]=gt(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return r.useEffect(()=>{const c=M(n.current);o.current=d==="mounted"?c:"none"},[d]),ve(()=>{const c=n.current,u=s.current;if(u!==e){const A=o.current,m=M(c);e?p("MOUNT"):m==="none"||(c==null?void 0:c.display)==="none"?p("UNMOUNT"):p(u&&A!==m?"ANIMATION_OUT":"UNMOUNT"),s.current=e}},[e,p]),ve(()=>{if(t){const c=f=>{const m=M(n.current).includes(f.animationName);f.target===t&&m&&Dn.flushSync(()=>p("ANIMATION_END"))},u=f=>{f.target===t&&(o.current=M(n.current))};return t.addEventListener("animationstart",u),t.addEventListener("animationcancel",c),t.addEventListener("animationend",c),()=>{t.removeEventListener("animationstart",u),t.removeEventListener("animationcancel",c),t.removeEventListener("animationend",c)}}else p("ANIMATION_END")},[t,p]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:r.useCallback(c=>{c&&(n.current=getComputedStyle(c)),a(c)},[])}}function M(e){return(e==null?void 0:e.animationName)||"none"}const qe="Tabs",[yt,ts]=pe(qe,[Me]),Ye=Me(),[ht,me]=yt(qe),Pt=r.forwardRef((e,t)=>{const{__scopeTabs:a,value:n,onValueChange:s,defaultValue:o,orientation:l="horizontal",dir:d,activationMode:p="automatic",...c}=e,u=Fe(d),[f,A]=je({prop:n,onChange:s,defaultProp:o});return r.createElement(ht,{scope:a,baseId:Ce(),value:f,onValueChange:A,orientation:l,dir:u,activationMode:p},r.createElement($.div,P({dir:u,"data-orientation":l},c,{ref:t})))}),Nt="TabsList",Tt=r.forwardRef((e,t)=>{const{__scopeTabs:a,loop:n=!0,...s}=e,o=me(Nt,a),l=Ye(a);return r.createElement(mt,P({asChild:!0},l,{orientation:o.orientation,dir:o.dir,loop:n}),r.createElement($.div,P({role:"tablist","aria-orientation":o.orientation},s,{ref:t})))}),It="TabsTrigger",Lt=r.forwardRef((e,t)=>{const{__scopeTabs:a,value:n,disabled:s=!1,...o}=e,l=me(It,a),d=Ye(a),p=Ue(l.baseId,n),c=ze(l.baseId,n),u=n===l.value;return r.createElement(_t,P({asChild:!0},d,{focusable:!s,active:u}),r.createElement($.button,P({type:"button",role:"tab","aria-selected":u,"aria-controls":c,"data-state":u?"active":"inactive","data-disabled":s?"":void 0,disabled:s,id:p},o,{ref:t,onMouseDown:T(e.onMouseDown,f=>{!s&&f.button===0&&f.ctrlKey===!1?l.onValueChange(n):f.preventDefault()}),onKeyDown:T(e.onKeyDown,f=>{[" ","Enter"].includes(f.key)&&l.onValueChange(n)}),onFocus:T(e.onFocus,()=>{const f=l.activationMode!=="manual";!u&&!s&&f&&l.onValueChange(n)})})))}),kt="TabsContent",Ot=r.forwardRef((e,t)=>{const{__scopeTabs:a,value:n,forceMount:s,children:o,...l}=e,d=me(kt,a),p=Ue(d.baseId,n),c=ze(d.baseId,n),u=n===d.value,f=r.useRef(u);return r.useEffect(()=>{const A=requestAnimationFrame(()=>f.current=!1);return()=>cancelAnimationFrame(A)},[]),r.createElement(Be,{present:s||u},({present:A})=>r.createElement($.div,P({"data-state":u?"active":"inactive","data-orientation":d.orientation,role:"tabpanel","aria-labelledby":p,hidden:!A,id:c,tabIndex:0},l,{ref:t,style:{...e.style,animationDuration:f.current?"0s":void 0}}),A&&o))});function Ue(e,t){return`${e}-trigger-${t}`}function ze(e,t){return`${e}-content-${t}`}const $t=Pt,Kt=Lt;var xt=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(a[n[s]]=e[n[s]]);return a};const Vt=r.forwardRef((e,t)=>{var a,{className:n,as:s="button",label:o,icon:l,value:d}=e,p=xt(e,["className","as","label","icon","value"]);const c=r.useContext(_e);return!o&&!l?(console.error("<Tabs.Tab/> needs label/icon"),null):b.createElement(Kt,{value:d,asChild:!0},b.createElement(s,Object.assign({ref:t,className:j("navds-tabs__tab",`navds-tabs__tab--${(a=c==null?void 0:c.size)!==null&&a!==void 0?a:"medium"}`,`navds-tabs__tab-icon--${c==null?void 0:c.iconPosition}`,n,{"navds-tabs__tab--icon-only":l&&!o})},p),b.createElement(tn,{as:"span",className:"navds-tabs__tab-inner",size:c==null?void 0:c.size},l,o)))}),Gt=Vt;var Dt=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(a[n[s]]=e[n[s]]);return a};const Ct=r.forwardRef((e,t)=>{var{className:a}=e,n=Dt(e,["className"]);const s=r.useContext(_e),o=r.useRef(null),l=r.useMemo(()=>an([o,t]),[t]),[d,p]=r.useState({start:!1,end:!1}),c=r.useMemo(()=>sn(()=>{var A;if(!(o!=null&&o.current))return;const{scrollWidth:m,clientWidth:E}=o.current;let g,v;const R=(A=o==null?void 0:o.current)===null||A===void 0?void 0:A.scrollLeft;g=R>1,v=R<m-E-1,p(y=>g===y.start&&v===y.end?y:{start:g,end:v})}),[]);r.useEffect(()=>{var A,m,E;const g=()=>c(),v=(E=(m=(A=o.current)===null||A===void 0?void 0:A.ownerDocument)!==null&&m!==void 0?m:document)!==null&&E!==void 0?E:window;v.addEventListener("resize",g);let R;return typeof ResizeObserver<"u"&&(R=new ResizeObserver(g),R.observe(o.current)),()=>{v.removeEventListener("resize",g),R&&R.disconnect()}},[c]),r.useEffect(()=>{c()}),r.useEffect(()=>()=>{c.clear()},[c]);const u=({dir:A,hidden:m})=>b.createElement("div",{className:j("navds-tabs__scroll-button",{"navds-tabs__scroll-button--hidden":m}),onClick:()=>{o.current&&(o.current.scrollLeft+=A*100)}},A===-1?b.createElement(wn,{title:"scroll tilbake"}):b.createElement(Bn,{title:"scroll neste"})),f=d.end||d.start;return b.createElement("div",{className:"navds-tabs__tablist-wrapper"},f&&b.createElement(u,{dir:-1,hidden:!d.start}),b.createElement(Tt,Object.assign({},n,{ref:l,onScroll:c,loop:s==null?void 0:s.loop,className:j("navds-tabs__tablist",a)})),f&&b.createElement(u,{dir:1,hidden:!d.end}))}),jt=Ct;var Ft=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(a[n[s]]=e[n[s]]);return a};const wt=r.forwardRef((e,t)=>{var{className:a}=e,n=Ft(e,["className"]);return b.createElement(Ot,Object.assign({},n,{ref:t,className:j("navds-tabs__tabpanel",a)}))}),Mt=wt;var Ht=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(a[n[s]]=e[n[s]]);return a};const _e=r.createContext(null),U=r.forwardRef((e,t)=>{var{className:a,children:n,onChange:s,size:o="medium",selectionFollowsFocus:l=!1,loop:d=!1,iconPosition:p="left"}=e,c=Ht(e,["className","children","onChange","size","selectionFollowsFocus","loop","iconPosition"]);return b.createElement($t,Object.assign({},c,{ref:t,className:j("navds-tabs",a,`navds-tabs--${o}`),activationMode:l?"automatic":"manual",onValueChange:s}),b.createElement(_e.Provider,{value:{size:o,loop:d,iconPosition:p}},n))});U.Tab=Gt;U.List=jt;U.Panel=Mt;const O=U,Bt={paramName:"",parse:e=>e,isQueryParam:!1},qt=(e,t,a)=>{const n=a.isQueryParam?fe(t.search):e;return a.parse(n[a.paramName])};function ne(e){const t={...Bt,...e},a=rn(),n=on(),s=qt(n,a,t);return{location:a,selected:s}}try{ne.displayName="useTrackRouteParam",ne.__docgenInfo={description:"",displayName:"useTrackRouteParam",props:{paramName:{defaultValue:null,description:"",name:"paramName",required:!1,type:{name:"string"}},parse:{defaultValue:null,description:"",name:"parse",required:!1,type:{name:"((a: any) => any)"}},isQueryParam:{defaultValue:null,description:"",name:"isQueryParam",required:!1,type:{name:"boolean"}}}}}catch{}const Yt="_container_1sikf_1",Ut={container:Yt},te=({children:e})=>i.jsx("div",{className:Ut.container,children:e});try{te.displayName="AvdelingslederDashboard",te.__docgenInfo={description:"AvdelingslederDashboard",displayName:"AvdelingslederDashboard",props:{}}}catch{}const S={BEHANDLINGSKOER:"behandlingskoer",SAKSBEHANDLERE:"saksbehandlere",NOKKELTALL:"nokkeltall",RESERVASJONER:"reservasjoner"},ae=({oppgaverForAvdeling:e,oppgaverPerDato:t,oppgaverManueltPaVent:a,oppgaverPerForsteStonadsdag:n,oppgaverApneEllerPaVent:s})=>{const l=r.useRef(null);return i.jsxs("div",{ref:l,children:[i.jsx(Tn,{height:300,oppgaverPerDato:t,getValueFromLocalStorage:x}),i.jsx(k,{twentyPx:!0}),i.jsx(Nn,{height:300,oppgaverForAvdeling:e,getValueFromLocalStorage:x}),i.jsx(k,{twentyPx:!0}),i.jsx(In,{height:300,oppgaverManueltPaVent:a,getValueFromLocalStorage:x}),i.jsx(k,{twentyPx:!0}),i.jsx(Ln,{height:300,oppgaverPerForsteStonadsdag:n}),i.jsx(k,{twentyPx:!0}),i.jsx(kn,{height:300,oppgaverApneEllerPaVent:s,getValueFromLocalStorage:x})]})};try{ae.displayName="NokkeltallPanel",ae.__docgenInfo={description:"NokkeltallPanel.",displayName:"NokkeltallPanel",props:{oppgaverForAvdeling:{defaultValue:null,description:"",name:"oppgaverForAvdeling",required:!0,type:{name:"Readonly<{ fagsakYtelseType: string; behandlingType: string; tilBehandling: boolean; antall: number; }>[]"}},oppgaverPerDato:{defaultValue:null,description:"",name:"oppgaverPerDato",required:!0,type:{name:"Readonly<{ fagsakYtelseType: string; behandlingType: string; opprettetDato: string; antall: number; }>[]"}},oppgaverManueltPaVent:{defaultValue:null,description:"",name:"oppgaverManueltPaVent",required:!0,type:{name:"Readonly<{ fagsakYtelseType: string; behandlingFrist: string; antall: number; }>[]"}},oppgaverPerForsteStonadsdag:{defaultValue:null,description:"",name:"oppgaverPerForsteStonadsdag",required:!0,type:{name:"Readonly<{ forsteStonadsdag: string; antall: number; }>[]"}},oppgaverApneEllerPaVent:{defaultValue:null,description:"",name:"oppgaverApneEllerPaVent",required:!0,type:{name:"Readonly<{ antall: number; behandlingType: string; behandlingVenteStatus: string; førsteUttakMåned?: string | undefined; }>[]"}}}}}catch{}const zt=[],Jt=[],Qt=[],Wt=[],Zt=[],se=({valgtAvdelingEnhet:e})=>{const{data:t=zt}=h.useRestApi(_.HENT_OPPGAVER_FOR_AVDELING,{avdelingEnhet:e}),{data:a=Jt}=h.useRestApi(_.HENT_OPPGAVER_PER_DATO,{avdelingEnhet:e}),{data:n=Qt}=h.useRestApi(_.HENT_OPPGAVER_MANUELT_PA_VENT,{avdelingEnhet:e}),{data:s=Wt}=h.useRestApi(_.HENT_OPPGAVER_PER_FORSTE_STONADSDAG,{avdelingEnhet:e}),{data:o=Zt}=h.useRestApi(_.HENT_OPPGAVER_APNE_ELLER_PA_VENT,{avdelingEnhet:e});return i.jsx(ae,{oppgaverForAvdeling:t,oppgaverPerDato:a,oppgaverManueltPaVent:n,oppgaverPerForsteStonadsdag:s,oppgaverApneEllerPaVent:o})};try{se.displayName="NokkeltallIndex",se.__docgenInfo={description:"NokkeltallIndex",displayName:"NokkeltallIndex",props:{valgtAvdelingEnhet:{defaultValue:null,description:"",name:"valgtAvdelingEnhet",required:!0,type:{name:"string"}}}}}catch{}const re=({saksbehandlere:e,valgtAvdelingEnhet:t,avdelingensSaksbehandlere:a,hentAvdelingensSaksbehandlere:n})=>i.jsxs(i.Fragment,{children:[i.jsx($n,{saksbehandlere:e,valgtAvdelingEnhet:t,hentAvdelingensSaksbehandlere:n}),i.jsx(k,{sixteenPx:!0}),i.jsx(On,{valgtAvdelingEnhet:t,avdelingensSaksbehandlere:a,hentAvdelingensSaksbehandlere:n})]});try{re.displayName="SaksbehandlerePanel",re.__docgenInfo={description:"SaksbehandlerePanel",displayName:"SaksbehandlerePanel",props:{saksbehandlere:{defaultValue:null,description:"",name:"saksbehandlere",required:!0,type:{name:"Readonly<{ brukerIdent: string; navn: string; avdelingsnavn: string[]; }>[]"}},valgtAvdelingEnhet:{defaultValue:null,description:"",name:"valgtAvdelingEnhet",required:!0,type:{name:"string"}},avdelingensSaksbehandlere:{defaultValue:null,description:"",name:"avdelingensSaksbehandlere",required:!0,type:{name:"Readonly<{ brukerIdent: string; navn: string; avdelingsnavn: string[]; }>[]"}},hentAvdelingensSaksbehandlere:{defaultValue:null,description:"",name:"hentAvdelingensSaksbehandlere",required:!0,type:{name:"(params: { avdelingEnhet: string; }) => void"}}}}}catch{}const oe=({valgtAvdelingEnhet:e,avdelingensSaksbehandlere:t,hentAvdelingensSaksbehandlere:a})=>i.jsx(re,{saksbehandlere:t,valgtAvdelingEnhet:e,avdelingensSaksbehandlere:t,hentAvdelingensSaksbehandlere:a});try{oe.displayName="EndreSaksbehandlereIndex",oe.__docgenInfo={description:"EndreSaksbehandlereIndex",displayName:"EndreSaksbehandlereIndex",props:{avdelingensSaksbehandlere:{defaultValue:null,description:"",name:"avdelingensSaksbehandlere",required:!0,type:{name:"Readonly<{ brukerIdent: string; navn: string; avdelingsnavn: string[]; }>[]"}},valgtAvdelingEnhet:{defaultValue:null,description:"",name:"valgtAvdelingEnhet",required:!0,type:{name:"string"}},hentAvdelingensSaksbehandlere:{defaultValue:null,description:"",name:"hentAvdelingensSaksbehandlere",required:!0,type:{name:"(params: { avdelingEnhet: string; }) => void"}}}}}catch{}const Xt=""+new URL("pil_ned2-c83893f5.svg",import.meta.url).href,ea="_text_4pv8m_1",na="_leftCol_4pv8m_5",be={text:ea,leftCol:na},ta=[],le=({setValgtSakslisteId:e,valgtSakslisteId:t,valgtAvdelingEnhet:a,avdelingensSaksbehandlere:n,resetValgtSakslisteId:s})=>{const o=ln(),{data:l,startRequest:d}=h.useRestApiRunner(_.OPPGAVE_AVDELING_ANTALL),{data:p=ta,startRequest:c}=h.useRestApiRunner(_.SAKSLISTER_FOR_AVDELING),u=r.useCallback(R=>c(R,!0),[]);r.useEffect(()=>{d({avdelingEnhet:a}),u({avdelingEnhet:a})},[a]);const{data:f,startRequest:A}=h.useRestApiRunner(_.OPPRETT_NY_SAKSLISTE),m=r.useCallback(R=>{A({avdelingEnhet:R}).then(()=>{s(),u({avdelingEnhet:R})})},[]),E=f?parseInt(f.sakslisteId,10):void 0,g=t!==void 0?t:E,v=p.find(R=>R.sakslisteId===g);return i.jsxs(i.Fragment,{children:[i.jsx(Kn,{sakslister:p,setValgtSakslisteId:e,valgtSakslisteId:g,valgtAvdelingEnhet:a,oppgaverForAvdelingAntall:l,lagNySaksliste:m,resetValgtSakslisteId:s,hentAvdelingensSakslister:u}),i.jsx(k,{sixteenPx:!0}),g&&v&&i.jsxs(b.Fragment,{children:[i.jsx(Vn,{valgtSaksliste:v,valgtAvdelingEnhet:a,hentAvdelingensSakslister:u,hentOppgaverForAvdelingAntall:d}),i.jsx(dn,{children:i.jsxs(cn,{children:[i.jsx(Q,{className:be.leftCol}),i.jsx(Q,{children:i.jsx(un,{alt:o.formatMessage({id:"EndreSakslisterPanel.Saksbehandlere"}),src:Xt})}),i.jsx(Q,{className:be.text,children:i.jsx(K,{id:"EndreSakslisterPanel.KnyttetMotSaksbehandlere"})})]})}),i.jsx(xn,{valgtSaksliste:v,valgtAvdelingEnhet:a,avdelingensSaksbehandlere:n,hentAvdelingensSakslister:u})]},v.sakslisteId)]})};try{le.displayName="EndreSakslisterPanel",le.__docgenInfo={description:"EndreSakslisterPanel",displayName:"EndreSakslisterPanel",props:{setValgtSakslisteId:{defaultValue:null,description:"",name:"setValgtSakslisteId",required:!0,type:{name:"(sakslisteId: number) => void"}},valgtSakslisteId:{defaultValue:null,description:"",name:"valgtSakslisteId",required:!1,type:{name:"number"}},valgtAvdelingEnhet:{defaultValue:null,description:"",name:"valgtAvdelingEnhet",required:!0,type:{name:"string"}},avdelingensSaksbehandlere:{defaultValue:null,description:"",name:"avdelingensSaksbehandlere",required:!0,type:{name:"Readonly<{ brukerIdent: string; navn: string; avdelingsnavn: string[]; }>[]"}},resetValgtSakslisteId:{defaultValue:null,description:"",name:"resetValgtSakslisteId",required:!0,type:{name:"() => void"}}}}}catch{}const ie=({valgtAvdelingEnhet:e,avdelingensSaksbehandlere:t})=>{const[a,n]=r.useState(),s=r.useCallback(()=>n(void 0),[]);return i.jsx(le,{setValgtSakslisteId:n,valgtSakslisteId:a,valgtAvdelingEnhet:e,avdelingensSaksbehandlere:t,resetValgtSakslisteId:s})};try{ie.displayName="EndreBehandlingskoerIndex",ie.__docgenInfo={description:"EndreBehandlingskoerIndex",displayName:"EndreBehandlingskoerIndex",props:{valgtAvdelingEnhet:{defaultValue:null,description:"",name:"valgtAvdelingEnhet",required:!0,type:{name:"string"}},avdelingensSaksbehandlere:{defaultValue:null,description:"",name:"avdelingensSaksbehandlere",required:!0,type:{name:"Readonly<{ brukerIdent: string; navn: string; avdelingsnavn: string[]; }>[]"}}}}}catch{}const aa=[],de=({valgtAvdelingEnhet:e})=>{const{data:t=aa,startRequest:a}=h.useRestApiRunner(_.RESERVASJONER_FOR_AVDELING),{startRequest:n}=h.useRestApiRunner(_.AVDELINGSLEDER_OPPHEVER_RESERVASJON),s=h.useGlobalStateRestApiData(B.KODEVERK_LOS);r.useEffect(()=>{a({avdelingEnhet:e})},[]);const o=r.useCallback(d=>n({oppgaveId:d}).then(()=>a({avdelingEnhet:e})),[e]),l=r.useCallback(()=>a({avdelingEnhet:e}),[e]);return i.jsx(Gn,{opphevReservasjon:o,reservasjoner:t,hentAvdelingensReservasjoner:l,alleKodeverk:s})};try{de.displayName="ReservasjonerIndex",de.__docgenInfo={description:"",displayName:"ReservasjonerIndex",props:{valgtAvdelingEnhet:{defaultValue:null,description:"",name:"valgtAvdelingEnhet",required:!0,type:{name:"string"}}}}}catch{}const sa="_padding_eb62i_1",ge={padding:sa},ce=({setValgtAvdelingEnhet:e,valgtAvdelingEnhet:t,avdelinger:a})=>{const n=r.useCallback(s=>{const o=s.target.value;hn("avdelingEnhet",o),e(o)},[a]);return a?i.jsx("div",{className:ge.padding,children:i.jsx(fn,{size:"small",hideLabel:!0,label:"",onChange:n,value:t,className:ge.padding,children:a.map(s=>i.jsx("option",{value:s.avdelingEnhet,children:`${s.avdelingEnhet} ${s.navn}`},s.avdelingEnhet))})}):null};try{ce.displayName="Avdelingsvelger",ce.__docgenInfo={description:"",displayName:"Avdelingsvelger",props:{setValgtAvdelingEnhet:{defaultValue:null,description:"",name:"setValgtAvdelingEnhet",required:!0,type:{name:"(avdelingEnhet: string) => void"}},valgtAvdelingEnhet:{defaultValue:null,description:"",name:"valgtAvdelingEnhet",required:!1,type:{name:"string"}},avdelinger:{defaultValue:null,description:"",name:"avdelinger",required:!1,type:{name:"Readonly<{ avdelingEnhet: string; navn: string; kreverKode6: boolean; }>[]"}}}}}catch{}const ra="_paddingHeader_yllsv_1",oa="_padding_yllsv_1",Se={paddingHeader:ra,padding:oa},la=pn(_n),ia=[],da=(e,t,a)=>{if(t.length>0&&!a){let n=t[0].avdelingEnhet;const s=x("avdelingEnhet");s&&(t.some(o=>o.avdelingEnhet===s)?n=s:Pn("avdelingEnhet")),e(n)}},ca=e=>e==="?"||!e,ua=(e,t)=>{const a=ca(e)?{}:fe(e);return Rn({...a,...t})},fa=(e,t)=>({...e,search:ua(e.search,t)}),pa=e=>t=>fa(e,{fane:t}),Ea=(e,t,a,n)=>{switch(e){case S.BEHANDLINGSKOER:return i.jsx(ie,{valgtAvdelingEnhet:t,avdelingensSaksbehandlere:n});case S.SAKSBEHANDLERE:return i.jsx(oe,{valgtAvdelingEnhet:t,hentAvdelingensSaksbehandlere:a,avdelingensSaksbehandlere:n});case S.NOKKELTALL:return i.jsx(se,{valgtAvdelingEnhet:t});case S.RESERVASJONER:return i.jsx(de,{valgtAvdelingEnhet:t});default:return null}},H={[S.BEHANDLINGSKOER]:"AvdelingslederIndex.Behandlingskoer",[S.SAKSBEHANDLERE]:"AvdelingslederIndex.Saksbehandlere",[S.NOKKELTALL]:"AvdelingslederIndex.Nokkeltall",[S.RESERVASJONER]:"AvdelingslederIndex.Reservasjoner"},Aa=e=>{const t=fe(e.search);return t.avdelingsleder?t.avdelingsleder:S.BEHANDLINGSKOER},ue=({navAnsatt:e})=>{const[t,a]=r.useState(),{selected:n,location:s}=ne({paramName:"fane",isQueryParam:!0}),o=h.useRestApi(_.AVDELINGER,void 0,{isCachingOn:!0,suspendRequest:!(e!=null&&e.kanOppgavestyre)}),l=o==null?void 0:o.data,d=l?l.filter(E=>!!(e!=null&&e.kanBehandleKode6)||!E.kreverKode6):[];r.useEffect(()=>{o.state===q.SUCCESS&&da(a,d,t)},[o]);const{startRequest:p,data:c=ia}=h.useRestApiRunner(_.SAKSBEHANDLERE_FOR_AVDELING),u=r.useCallback(E=>p(E,!0),[]);r.useEffect(()=>{t&&u({avdelingEnhet:t})},[t]);const f=pa(s),A=n||Aa(s),m=An();return e!=null&&e.kanOppgavestyre?o.state!==q.SUCCESS?null:t?i.jsxs(te,{children:[i.jsx(ce,{valgtAvdelingEnhet:t,avdelinger:d,setValgtAvdelingEnhet:a}),i.jsx(k,{sixteenPx:!0}),i.jsx(O,{size:"small",value:A,onChange:E=>{m(f(E))},className:Se.paddingHeader,children:i.jsxs(O.List,{children:[i.jsx(O.Tab,{value:S.BEHANDLINGSKOER,label:i.jsx(w,{size:"small",children:i.jsx(K,{id:H[S.BEHANDLINGSKOER]})})}),i.jsx(O.Tab,{value:S.NOKKELTALL,label:i.jsx(w,{size:"small",children:i.jsx(K,{id:H[S.NOKKELTALL]})})}),i.jsx(O.Tab,{value:S.SAKSBEHANDLERE,label:i.jsx(w,{size:"small",children:i.jsx(K,{id:H[S.SAKSBEHANDLERE]})})}),i.jsx(O.Tab,{value:S.RESERVASJONER,label:i.jsx(w,{size:"small",children:i.jsx(K,{id:H[S.RESERVASJONER]})})})]})}),i.jsx(Cn,{className:Se.padding,children:Ea(A,t,u,c)})]},t):i.jsx(mn,{}):i.jsx(yn,{})},ma=({setLosErIkkeTilgjengelig:e,navAnsatt:t})=>{const{addErrorMessage:a}=Sn();Ge.setAddErrorMessageHandler(a);const n=h.useGlobalStateRestApiData(B.KODEVERK_LOS),s=h.useGlobalStateRestApi(B.KODEVERK_LOS,void 0,{suspendRequest:!!n});return r.useEffect(()=>{!n&&s.state===q.ERROR&&e()},[s.state]),!n&&s.state!==q.SUCCESS?null:i.jsx(En,{value:la,children:i.jsx(ue,{navAnsatt:t})})},Je=ma;try{ue.displayName="AvdelingslederIndex",ue.__docgenInfo={description:"",displayName:"AvdelingslederIndex",props:{setLosErIkkeTilgjengelig:{defaultValue:null,description:"",name:"setLosErIkkeTilgjengelig",required:!0,type:{name:"() => void"}},navAnsatt:{defaultValue:null,description:"",name:"navAnsatt",required:!1,type:{name:"Readonly<{ brukernavn: string; funksjonellTid?: string; kanBehandleKode6: boolean; kanBehandleKode7: boolean; kanBehandleKodeEgenAnsatt: boolean; kanBeslutte: boolean; kanOppgavestyre: boolean; ... 4 more ...; skalViseDetaljerteFeilmeldinger: boolean; }>"}}}}}catch{}const as={title:"los/avdelingsleder/AvdelingslederIndex",component:Je,decorators:[vn]},Qe={kanOppgavestyre:!0,kanBehandleKode6:!0},z=({avdelinger:e,navAnsatt:t})=>{const a=[{key:B.KODEVERK_LOS.name,data:bn,global:!0},{key:_.AVDELINGER.name,data:e},{key:_.SAKSBEHANDLERE_FOR_AVDELING.name,data:[]},{key:_.OPPGAVE_ANTALL.name,data:1},{key:_.LAGRE_SAKSLISTE_NAVN.name,data:void 0},{key:_.LAGRE_SAKSLISTE_SORTERING.name,data:void 0},{key:_.LAGRE_SAKSLISTE_SORTERING_INTERVALL.name,data:void 0},{key:_.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE.name,data:void 0},{key:_.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO.name,data:void 0},{key:_.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE.name,data:void 0},{key:_.LAGRE_SAKSLISTE_BEHANDLINGSTYPE.name,data:void 0},{key:_.LAGRE_SAKSLISTE_ANDRE_KRITERIER.name,data:void 0},{key:_.OPPGAVE_AVDELING_ANTALL.name,data:1},{key:_.SAKSLISTER_FOR_AVDELING.name,data:[]},{key:_.HENT_OPPGAVER_FOR_AVDELING.name,data:[]},{key:_.HENT_OPPGAVER_PER_DATO.name,data:[]},{key:_.HENT_OPPGAVER_APNE_ELLER_PA_VENT.name,data:[]},{key:_.HENT_OPPGAVER_MANUELT_PA_VENT.name,data:[]},{key:_.HENT_OPPGAVER_PER_FORSTE_STONADSDAG.name,data:[]},{key:_.RESERVASJONER_FOR_AVDELING.name,data:[]}];return i.jsx(nn,{data:a,requestApi:Ge,children:i.jsx(Je,{setLosErIkkeTilgjengelig:()=>{},navAnsatt:t})})},V=z.bind({});V.args={avdelinger:[{avdelingEnhet:"1234",navn:"NAV Oslo",kreverKode6:!0},{avdelingEnhet:"123",navn:"NAV Viken",kreverKode6:!1}],navAnsatt:Qe};const G=z.bind({});G.args={avdelinger:[],navAnsatt:Qe};const D=z.bind({});D.args={avdelinger:[],navAnsatt:{kanOppgavestyre:!1,kanBehandleKode6:!1}};const C=z.bind({});C.args={avdelinger:[{avdelingEnhet:"1234",navn:"NAV Oslo",kreverKode6:!0},{avdelingEnhet:"123",navn:"NAV Viken",kreverKode6:!1}],navAnsatt:{kanOppgavestyre:!0,kanBehandleKode6:!1}};var ye,he,Pe;V.parameters={...V.parameters,docs:{...(ye=V.parameters)==null?void 0:ye.docs,source:{originalSource:`({
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
}`,...(Pe=(he=V.parameters)==null?void 0:he.docs)==null?void 0:Pe.source}}};var Ne,Te,Ie;G.parameters={...G.parameters,docs:{...(Ne=G.parameters)==null?void 0:Ne.docs,source:{originalSource:`({
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
}`,...(Ie=(Te=G.parameters)==null?void 0:Te.docs)==null?void 0:Ie.source}}};var Le,ke,Oe;D.parameters={...D.parameters,docs:{...(Le=D.parameters)==null?void 0:Le.docs,source:{originalSource:`({
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
}`,...(Oe=(ke=D.parameters)==null?void 0:ke.docs)==null?void 0:Oe.source}}};var $e,Ke,xe;C.parameters={...C.parameters,docs:{...($e=C.parameters)==null?void 0:$e.docs,source:{originalSource:`({
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
}`,...(xe=(Ke=C.parameters)==null?void 0:Ke.docs)==null?void 0:xe.source}}};const ss=["Default","LasteIkonFørValgtAvdelingErSatt","HarIkkeTilgang","SkalFiltrereBortAvdelingerSomKreverKode6"];export{V as Default,D as HarIkkeTilgang,G as LasteIkonFørValgtAvdelingErSatt,C as SkalFiltrereBortAvdelingerSomKreverKode6,ss as __namedExportsOrder,as as default};
//# sourceMappingURL=AvdelingslederIndex.stories-c156814e.js.map
