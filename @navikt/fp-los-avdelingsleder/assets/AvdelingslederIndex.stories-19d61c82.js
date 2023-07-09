import{j as i}from"./jsx-runtime-5926aa06.js";import{k as nn}from"./index.es-f19dba30.js";import{p as Ve,c as j,e as tn,q as an,r as rn,s as sn,v as on,x as pe,J as k,b as ln,E as dn,o as cn,A as Z,Z as un,a as K,S as fn,t as pn,P as En,y as An,n as mn,m as _n,z as Rn,D as vn,j as gn}from"./nb_NO-34c6c3ba.js";import{b as h,a as _,R as B,r as Ge}from"./fplosRestApi-56e2d09a.js";import{r as s,R as g,b as bn}from"./index-ebeaab24.js";import{a as Sn,y as q}from"./index.es-24d105fb.js";import{I as yn}from"./IkkeTilgangTilAvdelingslederPanel-726118c1.js";import{g as x,s as hn,r as Pn}from"./StoreValuesInLocalStorage-28723227.js";import{F as Nn}from"./FordelingAvBehandlingstypePanel-b87a2bea.js";import{T as Tn}from"./TilBehandlingPanel-7c09e82c.js";import{M as In}from"./ManueltPaVentPanel-9ed8cbdb.js";import{O as Ln}from"./OppgaverPerForsteStonadsdagPanel-3eb4a344.js";import{O as kn}from"./OppgaverSomErApneEllerPaVentPanel-5746be35.js";import{L as On}from"./LeggTilSaksbehandlerForm-297587ff.js";import{S as $n}from"./SaksbehandlereTabell-59a16675.js";import{G as Kn}from"./GjeldendeSakslisterTabell-19aad35e.js";import{S as xn}from"./SaksbehandlereForSakslisteForm-87b58bf9.js";import{U as Vn}from"./UtvalgskriterierForSakslisteForm-751df427.js";import{R as Gn}from"./ReservasjonerTabell-a32071b9.js";import{_ as P}from"./extends-98964cd2.js";import{r as Dn}from"./index-9c09ad76.js";import{H as w}from"./Heading-8a34415b.js";import{P as Cn}from"./Panel-e2c29623.js";import"./index.es-657e045f.js";import"./index.es-333191f8.js";import"./index.es-7d65aa9f.js";import"./Provider-26ee741a.js";import"./index-f50b85d6.js";import"./useLosKodeverk-46a11add.js";import"./isSameOrAfter-a26d70f9.js";import"./isSameOrBefore-1b33768e.js";import"./remove-2f21eb3e.js";import"./SletteSaksbehandlerModal-b33389a0.js";import"./advarsel-27b41fd8.js";import"./SletteSakslisteModal-8f8c0886.js";import"./Detail-86c2a14d.js";import"./BehandlingstypeVelger-c0fed183.js";import"./AndreKriterierVelger-8c01a16d.js";import"./FagsakYtelseTypeVelger-79034d73.js";import"./SorteringVelger-10690037.js";var jn=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};const Fn=s.forwardRef((e,t)=>{var{title:a,titleId:n}=e,r=jn(e,["title","titleId"]);let o=Ve();return o=a?n||"title-"+o:void 0,s.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:t,"aria-labelledby":o},r),a?s.createElement("title",{id:o},a):null,s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.53 5.97a.75.75 0 0 1 0 1.06L9.56 12l4.97 4.97a.75.75 0 1 1-1.06 1.06l-5.5-5.5a.75.75 0 0 1 0-1.06l5.5-5.5a.75.75 0 0 1 1.06 0Z",fill:"currentColor"}))}),wn=Fn;var Mn=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};const Hn=s.forwardRef((e,t)=>{var{title:a,titleId:n}=e,r=Mn(e,["title","titleId"]);let o=Ve();return o=a?n||"title-"+o:void 0,s.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:t,"aria-labelledby":o},r),a?s.createElement("title",{id:o},a):null,s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.47 5.97a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 0 1 0 1.06l-5.5 5.5a.75.75 0 1 1-1.06-1.06L14.44 12 9.47 7.03a.75.75 0 0 1 0-1.06Z",fill:"currentColor"}))}),Bn=Hn;function T(e,t,{checkForDefaultPrevented:a=!0}={}){return function(r){if(e==null||e(r),a===!1||!r.defaultPrevented)return t==null?void 0:t(r)}}function Ee(e,t=[]){let a=[];function n(o,l){const d=s.createContext(l),p=a.length;a=[...a,l];function c(f){const{scope:A,children:m,...E}=f,b=(A==null?void 0:A[e][p])||d,v=s.useMemo(()=>E,Object.values(E));return s.createElement(b.Provider,{value:v},m)}function u(f,A){const m=(A==null?void 0:A[e][p])||d,E=s.useContext(m);if(E)return E;if(l!==void 0)return l;throw new Error(`\`${f}\` must be used within \`${o}\``)}return c.displayName=o+"Provider",[c,u]}const r=()=>{const o=a.map(l=>s.createContext(l));return function(d){const p=(d==null?void 0:d[e])||o;return s.useMemo(()=>({[`__scope${e}`]:{...d,[e]:p}}),[d,p])}};return r.scopeName=e,[n,qn(r,...t)]}function qn(...e){const t=e[0];if(e.length===1)return t;const a=()=>{const n=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(o){const l=n.reduce((d,{useScope:p,scopeName:c})=>{const f=p(o)[`__scope${c}`];return{...d,...f}},{});return s.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])}};return a.scopeName=t.scopeName,a}function Yn(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function De(...e){return t=>e.forEach(a=>Yn(a,t))}function Y(...e){return s.useCallback(De(...e),e)}const U=s.forwardRef((e,t)=>{const{children:a,...n}=e,r=s.Children.toArray(a),o=r.find(zn);if(o){const l=o.props.children,d=r.map(p=>p===o?s.Children.count(l)>1?s.Children.only(null):s.isValidElement(l)?l.props.children:null:p);return s.createElement(X,P({},n,{ref:t}),s.isValidElement(l)?s.cloneElement(l,void 0,d):null)}return s.createElement(X,P({},n,{ref:t}),a)});U.displayName="Slot";const X=s.forwardRef((e,t)=>{const{children:a,...n}=e;return s.isValidElement(a)?s.cloneElement(a,{...Jn(n,a.props),ref:De(t,a.ref)}):s.Children.count(a)>1?s.Children.only(null):null});X.displayName="SlotClone";const Un=({children:e})=>s.createElement(s.Fragment,null,e);function zn(e){return s.isValidElement(e)&&e.type===Un}function Jn(e,t){const a={...t};for(const n in t){const r=e[n],o=t[n];/^on[A-Z]/.test(n)?a[n]=(...d)=>{o==null||o(...d),r==null||r(...d)}:n==="style"?a[n]={...r,...o}:n==="className"&&(a[n]=[r,o].filter(Boolean).join(" "))}return{...e,...a}}function Qn(e){const t=e+"CollectionProvider",[a,n]=Ee(t),[r,o]=a(t,{collectionRef:{current:null},itemMap:new Map}),l=m=>{const{scope:E,children:b}=m,v=g.useRef(null),R=g.useRef(new Map).current;return g.createElement(r,{scope:E,itemMap:R,collectionRef:v},b)},d=e+"CollectionSlot",p=g.forwardRef((m,E)=>{const{scope:b,children:v}=m,R=o(d,b),y=Y(E,R.collectionRef);return g.createElement(U,{ref:y},v)}),c=e+"CollectionItemSlot",u="data-radix-collection-item",f=g.forwardRef((m,E)=>{const{scope:b,children:v,...R}=m,y=g.useRef(null),F=Y(E,y),I=o(c,b);return g.useEffect(()=>(I.itemMap.set(y,{ref:y,...R}),()=>void I.itemMap.delete(y))),g.createElement(U,{[u]:"",ref:F},v)});function A(m){const E=o(e+"CollectionConsumer",m);return g.useCallback(()=>{const v=E.collectionRef.current;if(!v)return[];const R=Array.from(v.querySelectorAll(`[${u}]`));return Array.from(E.itemMap.values()).sort((I,N)=>R.indexOf(I.ref.current)-R.indexOf(N.ref.current))},[E.collectionRef,E.itemMap])}return[{Provider:l,Slot:p,ItemSlot:f},A,n]}const ee=globalThis!=null&&globalThis.document?s.useLayoutEffect:()=>{},Zn=bn["useId".toString()]||(()=>{});let Wn=0;function Ce(e){const[t,a]=s.useState(Zn());return ee(()=>{e||a(n=>n??String(Wn++))},[e]),e||(t?`radix-${t}`:"")}const Xn=["a","button","div","h2","h3","img","li","nav","ol","p","span","svg","ul"],$=Xn.reduce((e,t)=>{const a=s.forwardRef((n,r)=>{const{asChild:o,...l}=n,d=o?U:t;return s.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),s.createElement(d,P({},l,{ref:r}))});return a.displayName=`Primitive.${t}`,{...e,[t]:a}},{});function Ae(e){const t=s.useRef(e);return s.useEffect(()=>{t.current=e}),s.useMemo(()=>(...a)=>{var n;return(n=t.current)===null||n===void 0?void 0:n.call(t,...a)},[])}function je({prop:e,defaultProp:t,onChange:a=()=>{}}){const[n,r]=et({defaultProp:t,onChange:a}),o=e!==void 0,l=o?e:n,d=Ae(a),p=s.useCallback(c=>{if(o){const f=typeof c=="function"?c(e):c;f!==e&&d(f)}else r(c)},[o,e,r,d]);return[l,p]}function et({defaultProp:e,onChange:t}){const a=s.useState(e),[n]=a,r=s.useRef(n),o=Ae(t);return s.useEffect(()=>{r.current!==n&&(o(n),r.current=n)},[n,r,o]),a}const nt=s.createContext(void 0);function Fe(e){const t=s.useContext(nt);return e||t||"ltr"}const W="rovingFocusGroup.onEntryFocus",tt={bubbles:!1,cancelable:!0},me="RovingFocusGroup",[ne,we,at]=Qn(me),[rt,Me]=Ee(me,[at]),[st,ot]=rt(me),lt=s.forwardRef((e,t)=>s.createElement(ne.Provider,{scope:e.__scopeRovingFocusGroup},s.createElement(ne.Slot,{scope:e.__scopeRovingFocusGroup},s.createElement(it,P({},e,{ref:t}))))),it=s.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:a,orientation:n,loop:r=!1,dir:o,currentTabStopId:l,defaultCurrentTabStopId:d,onCurrentTabStopIdChange:p,onEntryFocus:c,...u}=e,f=s.useRef(null),A=Y(t,f),m=Fe(o),[E=null,b]=je({prop:l,defaultProp:d,onChange:p}),[v,R]=s.useState(!1),y=Ae(c),F=we(a),I=s.useRef(!1);return s.useEffect(()=>{const N=f.current;if(N)return N.addEventListener(W,y),()=>N.removeEventListener(W,y)},[y]),s.createElement(st,{scope:a,orientation:n,dir:m,loop:r,currentTabStopId:E,onItemFocus:s.useCallback(N=>b(N),[b]),onItemShiftTab:s.useCallback(()=>R(!0),[])},s.createElement($.div,P({tabIndex:v?-1:0,"data-orientation":n},u,{ref:A,style:{outline:"none",...e.style},onMouseDown:T(e.onMouseDown,()=>{I.current=!0}),onFocus:T(e.onFocus,N=>{const Ze=!I.current;if(N.target===N.currentTarget&&Ze&&!v){const ve=new CustomEvent(W,tt);if(N.currentTarget.dispatchEvent(ve),!ve.defaultPrevented){const Q=F().filter(L=>L.focusable),We=Q.find(L=>L.active),Xe=Q.find(L=>L.id===E),en=[We,Xe,...Q].filter(Boolean).map(L=>L.ref.current);He(en)}}I.current=!1}),onBlur:T(e.onBlur,()=>R(!1))})))}),dt="RovingFocusGroupItem",ct=s.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:a,focusable:n=!0,active:r=!1,...o}=e,l=Ce(),d=ot(dt,a),p=d.currentTabStopId===l,c=we(a);return s.createElement(ne.ItemSlot,{scope:a,id:l,focusable:n,active:r},s.createElement($.span,P({tabIndex:p?0:-1,"data-orientation":d.orientation},o,{ref:t,onMouseDown:T(e.onMouseDown,u=>{n?d.onItemFocus(l):u.preventDefault()}),onFocus:T(e.onFocus,()=>d.onItemFocus(l)),onKeyDown:T(e.onKeyDown,u=>{if(u.key==="Tab"&&u.shiftKey){d.onItemShiftTab();return}if(u.target!==u.currentTarget)return;const f=pt(u,d.orientation,d.dir);if(f!==void 0){u.preventDefault();let m=c().filter(E=>E.focusable).map(E=>E.ref.current);if(f==="last")m.reverse();else if(f==="prev"||f==="next"){f==="prev"&&m.reverse();const E=m.indexOf(u.currentTarget);m=d.loop?Et(m,E+1):m.slice(E+1)}setTimeout(()=>He(m))}})})))}),ut={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function ft(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function pt(e,t,a){const n=ft(e.key,a);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(n))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(n)))return ut[n]}function He(e){const t=document.activeElement;for(const a of e)if(a===t||(a.focus(),document.activeElement!==t))return}function Et(e,t){return e.map((a,n)=>e[(t+n)%e.length])}const At=lt,mt=ct;function _t(e,t){return s.useReducer((a,n)=>{const r=t[a][n];return r??a},e)}const Be=e=>{const{present:t,children:a}=e,n=Rt(t),r=typeof a=="function"?a({present:n.isPresent}):s.Children.only(a),o=Y(n.ref,r.ref);return typeof a=="function"||n.isPresent?s.cloneElement(r,{ref:o}):null};Be.displayName="Presence";function Rt(e){const[t,a]=s.useState(),n=s.useRef({}),r=s.useRef(e),o=s.useRef("none"),l=e?"mounted":"unmounted",[d,p]=_t(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return s.useEffect(()=>{const c=M(n.current);o.current=d==="mounted"?c:"none"},[d]),ee(()=>{const c=n.current,u=r.current;if(u!==e){const A=o.current,m=M(c);e?p("MOUNT"):m==="none"||(c==null?void 0:c.display)==="none"?p("UNMOUNT"):p(u&&A!==m?"ANIMATION_OUT":"UNMOUNT"),r.current=e}},[e,p]),ee(()=>{if(t){const c=f=>{const m=M(n.current).includes(f.animationName);f.target===t&&m&&Dn.flushSync(()=>p("ANIMATION_END"))},u=f=>{f.target===t&&(o.current=M(n.current))};return t.addEventListener("animationstart",u),t.addEventListener("animationcancel",c),t.addEventListener("animationend",c),()=>{t.removeEventListener("animationstart",u),t.removeEventListener("animationcancel",c),t.removeEventListener("animationend",c)}}else p("ANIMATION_END")},[t,p]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:s.useCallback(c=>{c&&(n.current=getComputedStyle(c)),a(c)},[])}}function M(e){return(e==null?void 0:e.animationName)||"none"}const qe="Tabs",[vt,er]=Ee(qe,[Me]),Ye=Me(),[gt,_e]=vt(qe),bt=s.forwardRef((e,t)=>{const{__scopeTabs:a,value:n,onValueChange:r,defaultValue:o,orientation:l="horizontal",dir:d,activationMode:p="automatic",...c}=e,u=Fe(d),[f,A]=je({prop:n,onChange:r,defaultProp:o});return s.createElement(gt,{scope:a,baseId:Ce(),value:f,onValueChange:A,orientation:l,dir:u,activationMode:p},s.createElement($.div,P({dir:u,"data-orientation":l},c,{ref:t})))}),St="TabsList",yt=s.forwardRef((e,t)=>{const{__scopeTabs:a,loop:n=!0,...r}=e,o=_e(St,a),l=Ye(a);return s.createElement(At,P({asChild:!0},l,{orientation:o.orientation,dir:o.dir,loop:n}),s.createElement($.div,P({role:"tablist","aria-orientation":o.orientation},r,{ref:t})))}),ht="TabsTrigger",Pt=s.forwardRef((e,t)=>{const{__scopeTabs:a,value:n,disabled:r=!1,...o}=e,l=_e(ht,a),d=Ye(a),p=Ue(l.baseId,n),c=ze(l.baseId,n),u=n===l.value;return s.createElement(mt,P({asChild:!0},d,{focusable:!r,active:u}),s.createElement($.button,P({type:"button",role:"tab","aria-selected":u,"aria-controls":c,"data-state":u?"active":"inactive","data-disabled":r?"":void 0,disabled:r,id:p},o,{ref:t,onMouseDown:T(e.onMouseDown,f=>{!r&&f.button===0&&f.ctrlKey===!1?l.onValueChange(n):f.preventDefault()}),onKeyDown:T(e.onKeyDown,f=>{[" ","Enter"].includes(f.key)&&l.onValueChange(n)}),onFocus:T(e.onFocus,()=>{const f=l.activationMode!=="manual";!u&&!r&&f&&l.onValueChange(n)})})))}),Nt="TabsContent",Tt=s.forwardRef((e,t)=>{const{__scopeTabs:a,value:n,forceMount:r,children:o,...l}=e,d=_e(Nt,a),p=Ue(d.baseId,n),c=ze(d.baseId,n),u=n===d.value,f=s.useRef(u);return s.useEffect(()=>{const A=requestAnimationFrame(()=>f.current=!1);return()=>cancelAnimationFrame(A)},[]),s.createElement(Be,{present:r||u},({present:A})=>s.createElement($.div,P({"data-state":u?"active":"inactive","data-orientation":d.orientation,role:"tabpanel","aria-labelledby":p,hidden:!A,id:c,tabIndex:0},l,{ref:t,style:{...e.style,animationDuration:f.current?"0s":void 0}}),A&&o))});function Ue(e,t){return`${e}-trigger-${t}`}function ze(e,t){return`${e}-content-${t}`}const It=bt,Lt=Pt;var kt=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};const Ot=s.forwardRef((e,t)=>{var a,{className:n,as:r="button",label:o,icon:l,value:d}=e,p=kt(e,["className","as","label","icon","value"]);const c=s.useContext(Re);return!o&&!l?(console.error("<Tabs.Tab/> needs label/icon"),null):g.createElement(Lt,{value:d,asChild:!0},g.createElement(r,Object.assign({ref:t,className:j("navds-tabs__tab",`navds-tabs__tab--${(a=c==null?void 0:c.size)!==null&&a!==void 0?a:"medium"}`,`navds-tabs__tab-icon--${c==null?void 0:c.iconPosition}`,n,{"navds-tabs__tab--icon-only":l&&!o})},p),g.createElement(tn,{as:"span",className:"navds-tabs__tab-inner",size:c==null?void 0:c.size},l,o)))}),$t=Ot;var Kt=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};const xt=s.forwardRef((e,t)=>{var{className:a}=e,n=Kt(e,["className"]);const r=s.useContext(Re),o=s.useRef(null),l=s.useMemo(()=>an([o,t]),[t]),[d,p]=s.useState({start:!1,end:!1}),c=s.useMemo(()=>rn(()=>{var A;if(!(o!=null&&o.current))return;const{scrollWidth:m,clientWidth:E}=o.current;let b,v;const R=(A=o==null?void 0:o.current)===null||A===void 0?void 0:A.scrollLeft;b=R>1,v=R<m-E-1,p(y=>b===y.start&&v===y.end?y:{start:b,end:v})}),[]);s.useEffect(()=>{var A,m,E;const b=()=>c(),v=(E=(m=(A=o.current)===null||A===void 0?void 0:A.ownerDocument)!==null&&m!==void 0?m:document)!==null&&E!==void 0?E:window;v.addEventListener("resize",b);let R;return typeof ResizeObserver<"u"&&(R=new ResizeObserver(b),R.observe(o.current)),()=>{v.removeEventListener("resize",b),R&&R.disconnect()}},[c]),s.useEffect(()=>{c()}),s.useEffect(()=>()=>{c.clear()},[c]);const u=({dir:A,hidden:m})=>g.createElement("div",{className:j("navds-tabs__scroll-button",{"navds-tabs__scroll-button--hidden":m}),onClick:()=>{o.current&&(o.current.scrollLeft+=A*100)}},A===-1?g.createElement(wn,{title:"scroll tilbake"}):g.createElement(Bn,{title:"scroll neste"})),f=d.end||d.start;return g.createElement("div",{className:"navds-tabs__tablist-wrapper"},f&&g.createElement(u,{dir:-1,hidden:!d.start}),g.createElement(yt,Object.assign({},n,{ref:l,onScroll:c,loop:r==null?void 0:r.loop,className:j("navds-tabs__tablist",a)})),f&&g.createElement(u,{dir:1,hidden:!d.end}))}),Vt=xt;var Gt=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};const Dt=s.forwardRef((e,t)=>{var{className:a}=e,n=Gt(e,["className"]);return g.createElement(Tt,Object.assign({},n,{ref:t,className:j("navds-tabs__tabpanel",a)}))}),Ct=Dt;var jt=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a};const Re=s.createContext(null),z=s.forwardRef((e,t)=>{var{className:a,children:n,onChange:r,size:o="medium",selectionFollowsFocus:l=!1,loop:d=!1,iconPosition:p="left"}=e,c=jt(e,["className","children","onChange","size","selectionFollowsFocus","loop","iconPosition"]);return g.createElement(It,Object.assign({},c,{ref:t,className:j("navds-tabs",a,`navds-tabs--${o}`),activationMode:l?"automatic":"manual",onValueChange:r}),g.createElement(Re.Provider,{value:{size:o,loop:d,iconPosition:p}},n))});z.Tab=$t;z.List=Vt;z.Panel=Ct;const O=z,Ft={paramName:"",parse:e=>e,isQueryParam:!1},wt=(e,t,a)=>{const n=a.isQueryParam?pe(t.search):e;return a.parse(n[a.paramName])};function te(e){const t={...Ft,...e},a=sn(),n=on(),r=wt(n,a,t);return{location:a,selected:r}}try{te.displayName="useTrackRouteParam",te.__docgenInfo={description:"",displayName:"useTrackRouteParam",props:{paramName:{defaultValue:null,description:"",name:"paramName",required:!1,type:{name:"string"}},parse:{defaultValue:null,description:"",name:"parse",required:!1,type:{name:"((a: any) => any)"}},isQueryParam:{defaultValue:null,description:"",name:"isQueryParam",required:!1,type:{name:"boolean"}}}}}catch{}const Mt="_container_1sikf_1",Ht={container:Mt},ae=({children:e})=>i.jsx("div",{className:Ht.container,children:e});try{ae.displayName="AvdelingslederDashboard",ae.__docgenInfo={description:"AvdelingslederDashboard",displayName:"AvdelingslederDashboard",props:{}}}catch{}const S={BEHANDLINGSKOER:"behandlingskoer",SAKSBEHANDLERE:"saksbehandlere",NOKKELTALL:"nokkeltall",RESERVASJONER:"reservasjoner"},re=({oppgaverForAvdeling:e,oppgaverPerDato:t,oppgaverManueltPaVent:a,oppgaverPerForsteStonadsdag:n,oppgaverApneEllerPaVent:r})=>{const l=s.useRef(null);return i.jsxs("div",{ref:l,children:[i.jsx(Tn,{height:300,oppgaverPerDato:t,getValueFromLocalStorage:x}),i.jsx(k,{twentyPx:!0}),i.jsx(Nn,{height:300,oppgaverForAvdeling:e,getValueFromLocalStorage:x}),i.jsx(k,{twentyPx:!0}),i.jsx(In,{height:300,oppgaverManueltPaVent:a,getValueFromLocalStorage:x}),i.jsx(k,{twentyPx:!0}),i.jsx(Ln,{height:300,oppgaverPerForsteStonadsdag:n}),i.jsx(k,{twentyPx:!0}),i.jsx(kn,{height:300,oppgaverApneEllerPaVent:r,getValueFromLocalStorage:x})]})};try{re.displayName="NokkeltallPanel",re.__docgenInfo={description:"NokkeltallPanel.",displayName:"NokkeltallPanel",props:{oppgaverForAvdeling:{defaultValue:null,description:"",name:"oppgaverForAvdeling",required:!0,type:{name:"Readonly<{ fagsakYtelseType: string; behandlingType: string; tilBehandling: boolean; antall: number; }>[]"}},oppgaverPerDato:{defaultValue:null,description:"",name:"oppgaverPerDato",required:!0,type:{name:"Readonly<{ fagsakYtelseType: string; behandlingType: string; opprettetDato: string; antall: number; }>[]"}},oppgaverManueltPaVent:{defaultValue:null,description:"",name:"oppgaverManueltPaVent",required:!0,type:{name:"Readonly<{ fagsakYtelseType: string; behandlingFrist: string; antall: number; }>[]"}},oppgaverPerForsteStonadsdag:{defaultValue:null,description:"",name:"oppgaverPerForsteStonadsdag",required:!0,type:{name:"Readonly<{ forsteStonadsdag: string; antall: number; }>[]"}},oppgaverApneEllerPaVent:{defaultValue:null,description:"",name:"oppgaverApneEllerPaVent",required:!0,type:{name:"Readonly<{ antall: number; behandlingType: string; behandlingVenteStatus: string; førsteUttakMåned?: string | undefined; }>[]"}}}}}catch{}const Bt=[],qt=[],Yt=[],Ut=[],zt=[],se=({valgtAvdelingEnhet:e})=>{const{data:t=Bt}=h.useRestApi(_.HENT_OPPGAVER_FOR_AVDELING,{avdelingEnhet:e}),{data:a=qt}=h.useRestApi(_.HENT_OPPGAVER_PER_DATO,{avdelingEnhet:e}),{data:n=Yt}=h.useRestApi(_.HENT_OPPGAVER_MANUELT_PA_VENT,{avdelingEnhet:e}),{data:r=Ut}=h.useRestApi(_.HENT_OPPGAVER_PER_FORSTE_STONADSDAG,{avdelingEnhet:e}),{data:o=zt}=h.useRestApi(_.HENT_OPPGAVER_APNE_ELLER_PA_VENT,{avdelingEnhet:e});return i.jsx(re,{oppgaverForAvdeling:t,oppgaverPerDato:a,oppgaverManueltPaVent:n,oppgaverPerForsteStonadsdag:r,oppgaverApneEllerPaVent:o})};try{se.displayName="NokkeltallIndex",se.__docgenInfo={description:"NokkeltallIndex",displayName:"NokkeltallIndex",props:{valgtAvdelingEnhet:{defaultValue:null,description:"",name:"valgtAvdelingEnhet",required:!0,type:{name:"string"}}}}}catch{}const oe=({saksbehandlere:e,valgtAvdelingEnhet:t,avdelingensSaksbehandlere:a,hentAvdelingensSaksbehandlere:n})=>i.jsxs(i.Fragment,{children:[i.jsx($n,{saksbehandlere:e,valgtAvdelingEnhet:t,hentAvdelingensSaksbehandlere:n}),i.jsx(k,{sixteenPx:!0}),i.jsx(On,{valgtAvdelingEnhet:t,avdelingensSaksbehandlere:a,hentAvdelingensSaksbehandlere:n})]});try{oe.displayName="SaksbehandlerePanel",oe.__docgenInfo={description:"SaksbehandlerePanel",displayName:"SaksbehandlerePanel",props:{saksbehandlere:{defaultValue:null,description:"",name:"saksbehandlere",required:!0,type:{name:"Readonly<{ brukerIdent: string; navn: string; avdelingsnavn: string[]; }>[]"}},valgtAvdelingEnhet:{defaultValue:null,description:"",name:"valgtAvdelingEnhet",required:!0,type:{name:"string"}},avdelingensSaksbehandlere:{defaultValue:null,description:"",name:"avdelingensSaksbehandlere",required:!0,type:{name:"Readonly<{ brukerIdent: string; navn: string; avdelingsnavn: string[]; }>[]"}},hentAvdelingensSaksbehandlere:{defaultValue:null,description:"",name:"hentAvdelingensSaksbehandlere",required:!0,type:{name:"(params: { avdelingEnhet: string; }) => void"}}}}}catch{}const le=({valgtAvdelingEnhet:e,avdelingensSaksbehandlere:t,hentAvdelingensSaksbehandlere:a})=>i.jsx(oe,{saksbehandlere:t,valgtAvdelingEnhet:e,avdelingensSaksbehandlere:t,hentAvdelingensSaksbehandlere:a});try{le.displayName="EndreSaksbehandlereIndex",le.__docgenInfo={description:"EndreSaksbehandlereIndex",displayName:"EndreSaksbehandlereIndex",props:{avdelingensSaksbehandlere:{defaultValue:null,description:"",name:"avdelingensSaksbehandlere",required:!0,type:{name:"Readonly<{ brukerIdent: string; navn: string; avdelingsnavn: string[]; }>[]"}},valgtAvdelingEnhet:{defaultValue:null,description:"",name:"valgtAvdelingEnhet",required:!0,type:{name:"string"}},hentAvdelingensSaksbehandlere:{defaultValue:null,description:"",name:"hentAvdelingensSaksbehandlere",required:!0,type:{name:"(params: { avdelingEnhet: string; }) => void"}}}}}catch{}const Jt=""+new URL("pil_ned2-c83893f5.svg",import.meta.url).href,Qt="_text_4pv8m_1",Zt="_leftCol_4pv8m_5",ge={text:Qt,leftCol:Zt},Wt=[],ie=({setValgtSakslisteId:e,valgtSakslisteId:t,valgtAvdelingEnhet:a,avdelingensSaksbehandlere:n,resetValgtSakslisteId:r})=>{const o=ln(),{data:l,startRequest:d}=h.useRestApiRunner(_.OPPGAVE_AVDELING_ANTALL),{data:p=Wt,startRequest:c}=h.useRestApiRunner(_.SAKSLISTER_FOR_AVDELING),u=s.useCallback(R=>c(R,!0),[]);s.useEffect(()=>{d({avdelingEnhet:a}),u({avdelingEnhet:a})},[a]);const{data:f,startRequest:A}=h.useRestApiRunner(_.OPPRETT_NY_SAKSLISTE),m=s.useCallback(R=>{A({avdelingEnhet:R}).then(()=>{r(),u({avdelingEnhet:R})})},[]),E=f?parseInt(f.sakslisteId,10):void 0,b=t!==void 0?t:E,v=p.find(R=>R.sakslisteId===b);return i.jsxs(i.Fragment,{children:[i.jsx(Kn,{sakslister:p,setValgtSakslisteId:e,valgtSakslisteId:b,valgtAvdelingEnhet:a,oppgaverForAvdelingAntall:l,lagNySaksliste:m,resetValgtSakslisteId:r,hentAvdelingensSakslister:u}),i.jsx(k,{sixteenPx:!0}),b&&v&&i.jsxs(g.Fragment,{children:[i.jsx(Vn,{valgtSaksliste:v,valgtAvdelingEnhet:a,hentAvdelingensSakslister:u,hentOppgaverForAvdelingAntall:d}),i.jsx(dn,{children:i.jsxs(cn,{children:[i.jsx(Z,{className:ge.leftCol}),i.jsx(Z,{children:i.jsx(un,{alt:o.formatMessage({id:"EndreSakslisterPanel.Saksbehandlere"}),src:Jt})}),i.jsx(Z,{className:ge.text,children:i.jsx(K,{id:"EndreSakslisterPanel.KnyttetMotSaksbehandlere"})})]})}),i.jsx(xn,{valgtSaksliste:v,valgtAvdelingEnhet:a,avdelingensSaksbehandlere:n,hentAvdelingensSakslister:u})]},v.sakslisteId)]})};try{ie.displayName="EndreSakslisterPanel",ie.__docgenInfo={description:"EndreSakslisterPanel",displayName:"EndreSakslisterPanel",props:{setValgtSakslisteId:{defaultValue:null,description:"",name:"setValgtSakslisteId",required:!0,type:{name:"(sakslisteId: number) => void"}},valgtSakslisteId:{defaultValue:null,description:"",name:"valgtSakslisteId",required:!1,type:{name:"number"}},valgtAvdelingEnhet:{defaultValue:null,description:"",name:"valgtAvdelingEnhet",required:!0,type:{name:"string"}},avdelingensSaksbehandlere:{defaultValue:null,description:"",name:"avdelingensSaksbehandlere",required:!0,type:{name:"Readonly<{ brukerIdent: string; navn: string; avdelingsnavn: string[]; }>[]"}},resetValgtSakslisteId:{defaultValue:null,description:"",name:"resetValgtSakslisteId",required:!0,type:{name:"() => void"}}}}}catch{}const de=({valgtAvdelingEnhet:e,avdelingensSaksbehandlere:t})=>{const[a,n]=s.useState(),r=s.useCallback(()=>n(void 0),[]);return i.jsx(ie,{setValgtSakslisteId:n,valgtSakslisteId:a,valgtAvdelingEnhet:e,avdelingensSaksbehandlere:t,resetValgtSakslisteId:r})};try{de.displayName="EndreBehandlingskoerIndex",de.__docgenInfo={description:"EndreBehandlingskoerIndex",displayName:"EndreBehandlingskoerIndex",props:{valgtAvdelingEnhet:{defaultValue:null,description:"",name:"valgtAvdelingEnhet",required:!0,type:{name:"string"}},avdelingensSaksbehandlere:{defaultValue:null,description:"",name:"avdelingensSaksbehandlere",required:!0,type:{name:"Readonly<{ brukerIdent: string; navn: string; avdelingsnavn: string[]; }>[]"}}}}}catch{}const Xt=[],ce=({valgtAvdelingEnhet:e})=>{const{data:t=Xt,startRequest:a}=h.useRestApiRunner(_.RESERVASJONER_FOR_AVDELING),{startRequest:n}=h.useRestApiRunner(_.AVDELINGSLEDER_OPPHEVER_RESERVASJON),r=h.useGlobalStateRestApiData(B.KODEVERK_LOS);s.useEffect(()=>{a({avdelingEnhet:e})},[]);const o=s.useCallback(d=>n({oppgaveId:d}).then(()=>a({avdelingEnhet:e})),[e]),l=s.useCallback(()=>a({avdelingEnhet:e}),[e]);return i.jsx(Gn,{opphevReservasjon:o,reservasjoner:t,hentAvdelingensReservasjoner:l,alleKodeverk:r})};try{ce.displayName="ReservasjonerIndex",ce.__docgenInfo={description:"",displayName:"ReservasjonerIndex",props:{valgtAvdelingEnhet:{defaultValue:null,description:"",name:"valgtAvdelingEnhet",required:!0,type:{name:"string"}}}}}catch{}const ea="_padding_eb62i_1",be={padding:ea},ue=({setValgtAvdelingEnhet:e,valgtAvdelingEnhet:t,avdelinger:a})=>{const n=s.useCallback(r=>{const o=r.target.value;hn("avdelingEnhet",o),e(o)},[a]);return a?i.jsx("div",{className:be.padding,children:i.jsx(fn,{size:"small",hideLabel:!0,label:"",onChange:n,value:t,className:be.padding,children:a.map(r=>i.jsx("option",{value:r.avdelingEnhet,children:`${r.avdelingEnhet} ${r.navn}`},r.avdelingEnhet))})}):null};try{ue.displayName="Avdelingsvelger",ue.__docgenInfo={description:"",displayName:"Avdelingsvelger",props:{setValgtAvdelingEnhet:{defaultValue:null,description:"",name:"setValgtAvdelingEnhet",required:!0,type:{name:"(avdelingEnhet: string) => void"}},valgtAvdelingEnhet:{defaultValue:null,description:"",name:"valgtAvdelingEnhet",required:!1,type:{name:"string"}},avdelinger:{defaultValue:null,description:"",name:"avdelinger",required:!1,type:{name:"Readonly<{ avdelingEnhet: string; navn: string; kreverKode6: boolean; }>[]"}}}}}catch{}const na="_paddingHeader_yllsv_1",ta="_padding_yllsv_1",Se={paddingHeader:na,padding:ta},aa=pn(_n),ra=[],sa=(e,t,a)=>{if(t.length>0&&!a){let n=t[0].avdelingEnhet;const r=x("avdelingEnhet");r&&(t.some(o=>o.avdelingEnhet===r)?n=r:Pn("avdelingEnhet")),e(n)}},oa=e=>e==="?"||!e,la=(e,t)=>{const a=oa(e)?{}:pe(e);return Rn({...a,...t})},ia=(e,t)=>({...e,search:la(e.search,t)}),da=e=>t=>ia(e,{fane:t}),ca=(e,t,a,n)=>{switch(e){case S.BEHANDLINGSKOER:return i.jsx(de,{valgtAvdelingEnhet:t,avdelingensSaksbehandlere:n});case S.SAKSBEHANDLERE:return i.jsx(le,{valgtAvdelingEnhet:t,hentAvdelingensSaksbehandlere:a,avdelingensSaksbehandlere:n});case S.NOKKELTALL:return i.jsx(se,{valgtAvdelingEnhet:t});case S.RESERVASJONER:return i.jsx(ce,{valgtAvdelingEnhet:t});default:return null}},H={[S.BEHANDLINGSKOER]:"AvdelingslederIndex.Behandlingskoer",[S.SAKSBEHANDLERE]:"AvdelingslederIndex.Saksbehandlere",[S.NOKKELTALL]:"AvdelingslederIndex.Nokkeltall",[S.RESERVASJONER]:"AvdelingslederIndex.Reservasjoner"},ua=e=>{const t=pe(e.search);return t.avdelingsleder?t.avdelingsleder:S.BEHANDLINGSKOER},fe=({navAnsatt:e})=>{const[t,a]=s.useState(),{selected:n,location:r}=te({paramName:"fane",isQueryParam:!0}),o=h.useRestApi(_.AVDELINGER,void 0,{isCachingOn:!0,suspendRequest:!(e!=null&&e.kanOppgavestyre)}),l=o==null?void 0:o.data,d=l?l.filter(E=>!!(e!=null&&e.kanBehandleKode6)||!E.kreverKode6):[];s.useEffect(()=>{o.state===q.SUCCESS&&sa(a,d,t)},[o]);const{startRequest:p,data:c=ra}=h.useRestApiRunner(_.SAKSBEHANDLERE_FOR_AVDELING),u=s.useCallback(E=>p(E,!0),[]);s.useEffect(()=>{t&&u({avdelingEnhet:t})},[t]);const f=da(r),A=n||ua(r),m=An();return e!=null&&e.kanOppgavestyre?o.state!==q.SUCCESS?null:t?i.jsxs(ae,{children:[i.jsx(ue,{valgtAvdelingEnhet:t,avdelinger:d,setValgtAvdelingEnhet:a}),i.jsx(k,{sixteenPx:!0}),i.jsx(O,{size:"small",value:A,onChange:E=>{m(f(E))},className:Se.paddingHeader,children:i.jsxs(O.List,{children:[i.jsx(O.Tab,{value:S.BEHANDLINGSKOER,label:i.jsx(w,{size:"small",children:i.jsx(K,{id:H[S.BEHANDLINGSKOER]})})}),i.jsx(O.Tab,{value:S.NOKKELTALL,label:i.jsx(w,{size:"small",children:i.jsx(K,{id:H[S.NOKKELTALL]})})}),i.jsx(O.Tab,{value:S.SAKSBEHANDLERE,label:i.jsx(w,{size:"small",children:i.jsx(K,{id:H[S.SAKSBEHANDLERE]})})}),i.jsx(O.Tab,{value:S.RESERVASJONER,label:i.jsx(w,{size:"small",children:i.jsx(K,{id:H[S.RESERVASJONER]})})})]})}),i.jsx(Cn,{className:Se.padding,children:ca(A,t,u,c)})]},t):i.jsx(mn,{}):i.jsx(yn,{})},fa=({setLosErIkkeTilgjengelig:e,navAnsatt:t})=>{const{addErrorMessage:a}=Sn();Ge.setAddErrorMessageHandler(a);const n=h.useGlobalStateRestApiData(B.KODEVERK_LOS),r=h.useGlobalStateRestApi(B.KODEVERK_LOS,void 0,{suspendRequest:!!n});return s.useEffect(()=>{!n&&r.state===q.ERROR&&e()},[r.state]),!n&&r.state!==q.SUCCESS?null:i.jsx(En,{value:aa,children:i.jsx(fe,{navAnsatt:t})})},Je=fa;try{fe.displayName="AvdelingslederIndex",fe.__docgenInfo={description:"",displayName:"AvdelingslederIndex",props:{setLosErIkkeTilgjengelig:{defaultValue:null,description:"",name:"setLosErIkkeTilgjengelig",required:!0,type:{name:"() => void"}},navAnsatt:{defaultValue:null,description:"",name:"navAnsatt",required:!1,type:{name:"Readonly<{ brukernavn: string; funksjonellTid?: string; kanBehandleKode6: boolean; kanBehandleKode7: boolean; kanBehandleKodeEgenAnsatt: boolean; kanBeslutte: boolean; kanOppgavestyre: boolean; ... 4 more ...; skalViseDetaljerteFeilmeldinger: boolean; }>"}}}}}catch{}const nr={title:"los/avdelingsleder/AvdelingslederIndex",component:Je,decorators:[vn]},Qe={kanOppgavestyre:!0,kanBehandleKode6:!0},J=({avdelinger:e,navAnsatt:t})=>{const a=[{key:B.KODEVERK_LOS.name,data:gn,global:!0},{key:_.AVDELINGER.name,data:e},{key:_.SAKSBEHANDLERE_FOR_AVDELING.name,data:[]},{key:_.OPPGAVE_ANTALL.name,data:1},{key:_.LAGRE_SAKSLISTE_NAVN.name,data:void 0},{key:_.LAGRE_SAKSLISTE_SORTERING.name,data:void 0},{key:_.LAGRE_SAKSLISTE_SORTERING_INTERVALL.name,data:void 0},{key:_.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE.name,data:void 0},{key:_.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO.name,data:void 0},{key:_.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE.name,data:void 0},{key:_.LAGRE_SAKSLISTE_BEHANDLINGSTYPE.name,data:void 0},{key:_.LAGRE_SAKSLISTE_ANDRE_KRITERIER.name,data:void 0},{key:_.OPPGAVE_AVDELING_ANTALL.name,data:1},{key:_.SAKSLISTER_FOR_AVDELING.name,data:[]},{key:_.HENT_OPPGAVER_FOR_AVDELING.name,data:[]},{key:_.HENT_OPPGAVER_PER_DATO.name,data:[]},{key:_.HENT_OPPGAVER_APNE_ELLER_PA_VENT.name,data:[]},{key:_.HENT_OPPGAVER_MANUELT_PA_VENT.name,data:[]},{key:_.HENT_OPPGAVER_PER_FORSTE_STONADSDAG.name,data:[]},{key:_.RESERVASJONER_FOR_AVDELING.name,data:[]}];return i.jsx(nn,{data:a,requestApi:Ge,children:i.jsx(Je,{setLosErIkkeTilgjengelig:()=>{},navAnsatt:t})})},V=J.bind({});V.args={avdelinger:[{avdelingEnhet:"1234",navn:"NAV Oslo",kreverKode6:!0},{avdelingEnhet:"123",navn:"NAV Viken",kreverKode6:!1}],navAnsatt:Qe};const G=J.bind({});G.args={avdelinger:[],navAnsatt:Qe};const D=J.bind({});D.args={avdelinger:[],navAnsatt:{kanOppgavestyre:!1,kanBehandleKode6:!1}};const C=J.bind({});C.args={avdelinger:[{avdelingEnhet:"1234",navn:"NAV Oslo",kreverKode6:!0},{avdelingEnhet:"123",navn:"NAV Viken",kreverKode6:!1}],navAnsatt:{kanOppgavestyre:!0,kanBehandleKode6:!1}};var ye,he,Pe;V.parameters={...V.parameters,docs:{...(ye=V.parameters)==null?void 0:ye.docs,source:{originalSource:`({
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
}`,...(xe=(Ke=C.parameters)==null?void 0:Ke.docs)==null?void 0:xe.source}}};const tr=["Default","LasteIkonFørValgtAvdelingErSatt","HarIkkeTilgang","SkalFiltrereBortAvdelingerSomKreverKode6"];export{V as Default,D as HarIkkeTilgang,G as LasteIkonFørValgtAvdelingErSatt,C as SkalFiltrereBortAvdelingerSomKreverKode6,tr as __namedExportsOrder,nr as default};
//# sourceMappingURL=AvdelingslederIndex.stories-19d61c82.js.map
