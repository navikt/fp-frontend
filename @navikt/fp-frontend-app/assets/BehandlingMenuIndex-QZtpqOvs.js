var If=Object.defineProperty;var Vf=(i,g,a)=>g in i?If(i,g,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[g]=a;var Wt=(i,g,a)=>Vf(i,typeof g!="symbol"?g+"":g,a);import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{r as N,$ as Qu,R as Ie}from"./index-DjhIdADd.js";import{aI as Mf,aJ as Si,E as Lf,G as Uf,I as Hf,J as Df,K as Gf,P as ze,h as Ye,f as Cn,V as Kn,L as aa,g as Xt,D as Ui,ar as Ku,u as wr,au as Cf,av as $f,e as ke,H as Zr,B as $,F as Qt,ak as eo,a5 as $i,i as no,d as Wf}from"./withPanelData-uKl3GsGR.js";import{u as We,j as Yf,n as xn,b as Wi,a as ia,c as Hi,l as zf,k as Jf}from"./fagsakApi-wAaVcobe.js";import{f as Be,I as Yi,c as Zf,K as Di,L as Xf,p as ea,x as Qf,B as Pu,a as eb,s as nb,l as rb,k as tb}from"./index.es-n0vZVEve.js";import{K as na,b as Fe,c as ab,o as zi,N as ra,E as ib,J as sb,Z as zr,X as Ni,a2 as lb,a3 as ub,a4 as ob,G as Fu,O as Iu,a as Tr,e as Ar,a5 as gb,U as db,u as tr}from"./index.es-BQggd8eJ.js";import{M as te}from"./message-BSePpvHj.js";import{c as Yt}from"./_commonjsHelpers-Cpj98o6Y.js";import{A as ro}from"./aksjonspunktCodes-BLM-Fgv6.js";import{K as ln}from"./alleKodeverk-Dm9joGL5.js";import{c as kb}from"./bind-oYjWB_aQ.js";import{L as mb,Y as Oi}from"./index.es-B7iJIGF7.js";import{K as Vu}from"./Kjonnkode-C-fkzSiP.js";import{T as vn}from"./Table-B7WopgUx.js";import{S as vb}from"./CheckmarkCircleFill-DYdilZYC.js";import{B as de}from"./behandlingResultatType-DHbqkXMl.js";import{D as pb}from"./dokumentMalType-B-Xou3xH.js";import{L as yb}from"./Link-Cdhxfmj8.js";import{B as ee}from"./behandlingArsakType-CTXggz2Y.js";import{S as fb}from"./SettPaVentModalIndex-DSvE0vPA.js";import{V as Jr}from"./FagsakData-4_VgJz8T.js";import{u as Ji,a as bb,b as hb,d as cb}from"./useBehandlingPollingOperasjoner-CSvRewt7.js";import{u as sa,h as Mu,d as Lu}from"./behandlingApi-DVwnSWx7.js";import{u as qb,a as wb}from"./useKodeverk-DulOeY5L.js";import{u as Tb}from"./useVisForhandsvisningAvMelding-DmIYSeU3.js";import{k as to,g as ao}from"./paths-DnrC1Mf4.js";import"./index-B-V1qRBx.js";var Zi=(i=>(i.BARN="BARN",i.FBARN="FBARN",i.VOKSEN="VOKSEN",i.ADVOKAT="ADVOKAT",i.ANNEN_F="ANNEN_F",i))(Zi||{}),ta=(i=>(i.FPSAK="FPSAK",i.FPTILBAKE="FPTILBAKE",i))(ta||{});const Ab=()=>{const i=[ta.FPSAK],{status:g}=We(Yf());return g!=="error"&&i.push(ta.FPTILBAKE),i};function io(i){var g,a,u="";if(typeof i=="string"||typeof i=="number")u+=i;else if(typeof i=="object")if(Array.isArray(i))for(g=0;g<i.length;g++)i[g]&&(a=io(i[g]))&&(u&&(u+=" "),u+=a);else for(g in i)i[g]&&(u&&(u+=" "),u+=g);return u}function qn(){for(var i,g,a=0,u="";a<arguments.length;)(i=arguments[a++])&&(g=io(i))&&(u&&(u+=" "),u+=g);return u}function jb(i){return g=>{i.forEach(a=>{typeof a=="function"?a(g):a!=null&&(a.current=g)})}}const Rb=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Uu=Rb()?N.useLayoutEffect:()=>{},Bb=(i,g,a=typeof window<"u"?window:null)=>{N.useEffect(()=>{if(a)return a==null||a.addEventListener(i,g),()=>{a==null||a.removeEventListener(i,g)}},[i,g,a])};var so=typeof document<"u"?N.useLayoutEffect:N.useEffect;let xi=!1,Eb=0;const Hu=()=>"floating-ui-"+Eb++;function _b(){const[i,g]=N.useState(()=>xi?Hu():void 0);return so(()=>{i==null&&g(Hu())},[]),N.useEffect(()=>{xi||(xi=!0)},[]),i}const Sb=Qu.useId,Nb=Sb||_b;function Ob(){const i=new Map;return{emit(g,a){var u;(u=i.get(g))==null||u.forEach(d=>d(a))},on(g,a){i.set(g,[...i.get(g)||[],a])},off(g,a){var u;i.set(g,((u=i.get(g))==null?void 0:u.filter(d=>d!==a))||[])}}}const xb=N.createContext(null),Kb=N.createContext(null),Pb=()=>{var i;return((i=N.useContext(xb))==null?void 0:i.id)||null},lo=()=>N.useContext(Kb);function uo(i){return(i==null?void 0:i.ownerDocument)||document}function Fb(){const i=navigator.userAgentData;return i!=null&&i.platform?i.platform:navigator.platform}function Ib(){const i=navigator.userAgentData;return i&&Array.isArray(i.brands)?i.brands.map(g=>{let{brand:a,version:u}=g;return a+"/"+u}).join(" "):navigator.userAgent}function Xi(i){return uo(i).defaultView||window}function rr(i){return i?i instanceof Xi(i).Element:!1}function Qi(i){return i?i instanceof Xi(i).HTMLElement:!1}function Vb(i){if(i.mozInputSource===0&&i.isTrusted)return!0;const g=/Android/i;return(g.test(Fb())||g.test(Ib()))&&i.pointerType?i.type==="click"&&i.buttons===1:i.detail===0&&!i.pointerType}function Mb(i){return i.width===0&&i.height===0||i.width===1&&i.height===1&&i.pressure===0&&i.detail===0&&i.pointerType!=="mouse"||i.width<1&&i.height<1&&i.pressure===0&&i.detail===0}function Du(i,g){return["mouse","pen"].includes(i)}function Ki(i,g){let a=i.filter(d=>{var f;return d.parentId===g&&((f=d.context)==null?void 0:f.open)}),u=a;for(;u.length;)u=i.filter(d=>{var f;return(f=u)==null?void 0:f.some(h=>{var q;return d.parentId===h.id&&((q=d.context)==null?void 0:q.open)})}),a=a.concat(u);return a}function Lb(i){return"composedPath"in i?i.composedPath()[0]:i.target}const Ub="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function Hb(i){return Qi(i)&&i.matches(Ub)}function Gu(i){return Qi(i.target)&&i.target.tagName==="BUTTON"}function Cu(i){return Hb(i)}function Db(i,g){g===void 0&&(g={});const{open:a,onOpenChange:u,dataRef:d,elements:{domReference:f}}=i,{enabled:h=!0,event:q="click",toggle:A=!0,ignoreMouse:R=!1,keyboardHandlers:E=!0}=g,S=N.useRef(),V=N.useRef(!1);return N.useMemo(()=>h?{reference:{onPointerDown(O){S.current=O.pointerType},onMouseDown(O){O.button===0&&(Du(S.current)&&R||q!=="click"&&(a?A&&(!d.current.openEvent||d.current.openEvent.type==="mousedown")&&u(!1):(O.preventDefault(),u(!0)),d.current.openEvent=O.nativeEvent))},onClick(O){if(q==="mousedown"&&S.current){S.current=void 0;return}Du(S.current)&&R||(a?A&&(!d.current.openEvent||d.current.openEvent.type==="click")&&u(!1):u(!0),d.current.openEvent=O.nativeEvent)},onKeyDown(O){S.current=void 0,!(O.defaultPrevented||!E||Gu(O))&&(O.key===" "&&!Cu(f)&&(O.preventDefault(),V.current=!0),O.key==="Enter"&&(a?A&&u(!1):u(!0)))},onKeyUp(O){O.defaultPrevented||!E||Gu(O)||Cu(f)||O.key===" "&&V.current&&(V.current=!1,a?A&&u(!1):u(!0))}}}:{},[h,d,q,R,E,f,A,a,u])}const Gb=Qu.useInsertionEffect,Cb=Gb||(i=>i());function Jt(i){const g=N.useRef(()=>{});return Cb(()=>{g.current=i}),N.useCallback(function(){for(var a=arguments.length,u=new Array(a),d=0;d<a;d++)u[d]=arguments[d];return g.current==null?void 0:g.current(...u)},[])}function Pi(i,g){if(g==null)return!1;if("composedPath"in i)return i.composedPath().includes(g);const a=i;return a.target!=null&&g.contains(a.target)}const $b={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},Wb={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},Yb=i=>{var g,a;return{escapeKeyBubbles:typeof i=="boolean"?i:(g=i==null?void 0:i.escapeKey)!=null?g:!1,outsidePressBubbles:typeof i=="boolean"?i:(a=i==null?void 0:i.outsidePress)!=null?a:!0}};function zb(i,g){g===void 0&&(g={});const{open:a,onOpenChange:u,events:d,nodeId:f,elements:{reference:h,domReference:q,floating:A},dataRef:R}=i,{enabled:E=!0,escapeKey:S=!0,outsidePress:V=!0,outsidePressEvent:O="pointerdown",referencePress:J=!1,referencePressEvent:me="pointerdown",ancestorScroll:W=!1,bubbles:ce}=g,Y=lo(),ye=Pb()!=null,Q=Jt(typeof V=="function"?V:()=>!1),ie=typeof V=="function"?Q:V,Ne=N.useRef(!1),{escapeKeyBubbles:fe,outsidePressBubbles:Ve}=Yb(ce),Ae=Jt(oe=>{if(!a||!E||!S||oe.key!=="Escape")return;const Je=Y?Ki(Y.nodesRef.current,f):[];if(!fe&&(oe.stopPropagation(),Je.length>0)){let ne=!0;if(Je.forEach(Me=>{var pn;if((pn=Me.context)!=null&&pn.open&&!Me.context.dataRef.current.__escapeKeyBubbles){ne=!1;return}}),!ne)return}d.emit("dismiss",{type:"escapeKey",data:{returnFocus:{preventScroll:!1}}}),u(!1)}),wn=Jt(oe=>{const Je=Ne.current;if(Ne.current=!1,Je||typeof ie=="function"&&!ie(oe))return;const ne=Lb(oe);if(Qi(ne)&&A){const Pn=ne.clientWidth>0&&ne.scrollWidth>ne.clientWidth,Le=ne.clientHeight>0&&ne.scrollHeight>ne.clientHeight;let Ze=Le&&oe.offsetX>ne.clientWidth;if(Le&&Xi(A).getComputedStyle(ne).direction==="rtl"&&(Ze=oe.offsetX<=ne.offsetWidth-ne.clientWidth),Ze||Pn&&oe.offsetY>ne.clientHeight)return}const Me=Y&&Ki(Y.nodesRef.current,f).some(Pn=>{var Le;return Pi(oe,(Le=Pn.context)==null?void 0:Le.elements.floating)});if(Pi(oe,A)||Pi(oe,q)||Me)return;const pn=Y?Ki(Y.nodesRef.current,f):[];if(pn.length>0){let Pn=!0;if(pn.forEach(Le=>{var Ze;if((Ze=Le.context)!=null&&Ze.open&&!Le.context.dataRef.current.__outsidePressBubbles){Pn=!1;return}}),!Pn)return}d.emit("dismiss",{type:"outsidePress",data:{returnFocus:ye?{preventScroll:!0}:Vb(oe)||Mb(oe)}}),u(!1)});return N.useEffect(()=>{if(!a||!E)return;R.current.__escapeKeyBubbles=fe,R.current.__outsidePressBubbles=Ve;function oe(){u(!1)}const Je=uo(A);S&&Je.addEventListener("keydown",Ae),ie&&Je.addEventListener(O,wn);let ne=[];return W&&(rr(q)&&(ne=Si(q)),rr(A)&&(ne=ne.concat(Si(A))),!rr(h)&&h&&h.contextElement&&(ne=ne.concat(Si(h.contextElement)))),ne=ne.filter(Me=>{var pn;return Me!==((pn=Je.defaultView)==null?void 0:pn.visualViewport)}),ne.forEach(Me=>{Me.addEventListener("scroll",oe,{passive:!0})}),()=>{S&&Je.removeEventListener("keydown",Ae),ie&&Je.removeEventListener(O,wn),ne.forEach(Me=>{Me.removeEventListener("scroll",oe)})}},[R,A,q,h,S,ie,O,a,u,W,E,fe,Ve,Ae,wn]),N.useEffect(()=>{Ne.current=!1},[ie,O]),N.useMemo(()=>E?{reference:{onKeyDown:Ae,[$b[me]]:()=>{J&&(d.emit("dismiss",{type:"referencePress",data:{returnFocus:!1}}),u(!1))}},floating:{onKeyDown:Ae,[Wb[O]]:()=>{Ne.current=!0}}}:{},[E,d,J,O,me,u,Ae])}function Jb(i){var g;i===void 0&&(i={});const{open:a=!1,onOpenChange:u,nodeId:d}=i,[f,h]=N.useState(null),q=((g=i.elements)==null?void 0:g.reference)||f,A=Mf(i),R=lo(),E=Jt(u),S=N.useRef(null),V=N.useRef({}),O=N.useState(()=>Ob())[0],J=Nb(),me=N.useCallback(Q=>{const ie=rr(Q)?{getBoundingClientRect:()=>Q.getBoundingClientRect(),contextElement:Q}:Q;A.refs.setReference(ie)},[A.refs]),W=N.useCallback(Q=>{(rr(Q)||Q===null)&&(S.current=Q,h(Q)),(rr(A.refs.reference.current)||A.refs.reference.current===null||Q!==null&&!rr(Q))&&A.refs.setReference(Q)},[A.refs]),ce=N.useMemo(()=>({...A.refs,setReference:W,setPositionReference:me,domReference:S}),[A.refs,W,me]),Y=N.useMemo(()=>({...A.elements,domReference:q}),[A.elements,q]),ye=N.useMemo(()=>({...A,refs:ce,elements:Y,dataRef:V,nodeId:d,floatingId:J,events:O,open:a,onOpenChange:E}),[A,d,J,O,a,E,ce,Y]);return so(()=>{const Q=R==null?void 0:R.nodesRef.current.find(ie=>ie.id===d);Q&&(Q.context=ye)}),N.useMemo(()=>({...A,context:ye,refs:ce,elements:Y}),[A,ce,Y,ye])}function Fi(i,g,a){const u=new Map;return{...a==="floating"&&{tabIndex:-1},...i,...g.map(d=>d?d[a]:null).concat(i).reduce((d,f)=>(f&&Object.entries(f).forEach(h=>{let[q,A]=h;if(q.indexOf("on")===0){if(u.has(q)||u.set(q,[]),typeof A=="function"){var R;(R=u.get(q))==null||R.push(A),d[q]=function(){for(var E,S=arguments.length,V=new Array(S),O=0;O<S;O++)V[O]=arguments[O];return(E=u.get(q))==null?void 0:E.map(J=>J(...V)).find(J=>J!==void 0)}}}else d[q]=A}),d),{})}}function Zb(i){i===void 0&&(i=[]);const g=i,a=N.useCallback(f=>Fi(f,i,"reference"),g),u=N.useCallback(f=>Fi(f,i,"floating"),g),d=N.useCallback(f=>Fi(f,i,"item"),i.map(f=>f==null?void 0:f.item));return N.useMemo(()=>({getReferenceProps:a,getFloatingProps:u,getItemProps:d}),[a,u,d])}var Xb=function(i,g){var a={};for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&g.indexOf(u)<0&&(a[u]=i[u]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,u=Object.getOwnPropertySymbols(i);d<u.length;d++)g.indexOf(u[d])<0&&Object.prototype.propertyIsEnumerable.call(i,u[d])&&(a[u[d]]=i[u[d]]);return a};const Qb=N.forwardRef((i,g)=>{var{className:a}=i,u=Xb(i,["className"]);return Ie.createElement("div",Object.assign({},u,{ref:g,className:qn("navds-popover__content",a)}))});var eh=function(i,g){var a={};for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&g.indexOf(u)<0&&(a[u]=i[u]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,u=Object.getOwnPropertySymbols(i);d<u.length;d++)g.indexOf(u[d])<0&&Object.prototype.propertyIsEnumerable.call(i,u[d])&&(a[u[d]]=i[u[d]]);return a};const oo=N.forwardRef((i,g)=>{var{className:a,children:u,anchorEl:d,arrow:f=!0,open:h,onClose:q,placement:A="top",offset:R,strategy:E="absolute"}=i,S=eh(i,["className","children","anchorEl","arrow","open","onClose","placement","offset","strategy"]);const V=N.useRef(null),{x:O,y:J,strategy:me,context:W,update:ce,refs:Y,placement:ye,middlewareData:{arrow:{x:Q,y:ie}={}}}=Jb({strategy:E,placement:A,open:h,onOpenChange:q,middleware:[Lf(R??(f?16:4)),Uf(),Hf({padding:5,fallbackPlacements:["bottom","top"]}),Df({element:V,padding:8})]}),{getFloatingProps:Ne}=Zb([Db(W),zb(W)]);Uu(()=>{Y.setReference(d)},[d]);const fe=N.useMemo(()=>jb([Y.setFloating,g]),[Y.setFloating,g]);Uu(()=>{if(!Y.reference.current||!Y.floating.current||!h)return;const Ae=Gf(Y.reference.current,Y.floating.current,ce);return()=>Ae()},[Y.floating,Y.reference,ce,h,d]),Bb("focusin",N.useCallback(Ae=>{var wn;[d,(wn=Y==null?void 0:Y.floating)===null||wn===void 0?void 0:wn.current].some(oe=>oe==null?void 0:oe.contains(Ae.target))||h&&q()},[d,Y,h,q]));const Ve={top:"bottom",right:"left",bottom:"top",left:"right"}[ye.split("-")[0]];return Ie.createElement("div",Object.assign({className:qn("navds-popover",a,{"navds-popover--hidden":!h||!d}),"data-placement":ye,"aria-hidden":!h||!d,tabIndex:-1},Ne({ref:fe,style:{position:me,top:J??0,left:O??0}}),S),u,f&&Ie.createElement("div",{ref:Ae=>{V.current=Ae},style:Object.assign(Object.assign(Object.assign({},Q!=null?{left:Q}:{}),ie!=null?{top:ie}:{}),Ve?{[Ve]:"-0.5rem"}:{}),className:"navds-popover__arrow"}))});oo.Content=Qb;var nh=function(i,g){var a={};for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&g.indexOf(u)<0&&(a[u]=i[u]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,u=Object.getOwnPropertySymbols(i);d<u.length;d++)g.indexOf(u[d])<0&&Object.prototype.propertyIsEnumerable.call(i,u[d])&&(a[u[d]]=i[u[d]]);return a};const rh=N.forwardRef((i,g)=>{var{className:a,onClick:u}=i,d=nh(i,["className","onClick"]);const f=N.useContext(Xr);if(!f)return console.warn("Dropdown.Toggle has to be wrapped in <Dropdown />"),null;const{setAnchorEl:h,handleToggle:q,isOpen:A}=f;return Ie.createElement("button",Object.assign({},d,{ref:R=>{h(R),typeof g=="function"?g(R):g!=null&&(g.current=R)},onClick:R=>{h(R.currentTarget),q(!A),u&&u(R)},"aria-expanded":A,className:qn("navdsi-dropdown__toggle",a)}))});var th=function(i,g){var a={};for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&g.indexOf(u)<0&&(a[u]=i[u]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,u=Object.getOwnPropertySymbols(i);d<u.length;d++)g.indexOf(u[d])<0&&Object.prototype.propertyIsEnumerable.call(i,u[d])&&(a[u[d]]=i[u[d]]);return a};const ah=N.forwardRef((i,g)=>{var{className:a}=i,u=th(i,["className"]);return Ie.createElement("hr",Object.assign({},u,{ref:g,className:qn("navdsi-dropdown__divider",a)}))});var ih=function(i,g){var a={};for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&g.indexOf(u)<0&&(a[u]=i[u]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,u=Object.getOwnPropertySymbols(i);d<u.length;d++)g.indexOf(u[d])<0&&Object.prototype.propertyIsEnumerable.call(i,u[d])&&(a[u[d]]=i[u[d]]);return a};const sh=N.forwardRef((i,g)=>{var{className:a}=i,u=ih(i,["className"]);return Ie.createElement("dt",Object.assign({},u,{ref:g,className:qn("navdsi-dropdown__list-heading","navds-heading","navds-heading--xsmall",a)}))});var lh=function(i,g){var a={};for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&g.indexOf(u)<0&&(a[u]=i[u]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,u=Object.getOwnPropertySymbols(i);d<u.length;d++)g.indexOf(u[d])<0&&Object.prototype.propertyIsEnumerable.call(i,u[d])&&(a[u[d]]=i[u[d]]);return a};const uh=N.forwardRef((i,g)=>{var{as:a="button",className:u}=i,d=lh(i,["as","className"]);const f=N.useContext(Xr);return Ie.createElement("dd",{className:"navdsi-dropdown__list-item"},Ie.createElement(a,Object.assign({},d,{value:d.children,onClick:h=>{var q,A;(q=f==null?void 0:f.onSelect)===null||q===void 0||q.call(f,h),(A=d==null?void 0:d.onClick)===null||A===void 0||A.call(d,h)},ref:g,className:qn("navdsi-dropdown__item","navds-body-short","navds-body-short--small",u)})))});var oh=function(i,g){var a={};for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&g.indexOf(u)<0&&(a[u]=i[u]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,u=Object.getOwnPropertySymbols(i);d<u.length;d++)g.indexOf(u[d])<0&&Object.prototype.propertyIsEnumerable.call(i,u[d])&&(a[u[d]]=i[u[d]]);return a};const es=N.forwardRef((i,g)=>{var{className:a,children:u}=i,d=oh(i,["className","children"]);return Ie.createElement("dl",Object.assign({},d,{ref:g,className:qn("navdsi-dropdown__list",a)}),u)});es.Heading=sh;es.Item=uh;var gh=function(i,g){var a={};for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&g.indexOf(u)<0&&(a[u]=i[u]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,u=Object.getOwnPropertySymbols(i);d<u.length;d++)g.indexOf(u[d])<0&&Object.prototype.propertyIsEnumerable.call(i,u[d])&&(a[u[d]]=i[u[d]]);return a};const dh=N.forwardRef((i,g)=>{var{as:a="button",className:u}=i,d=gh(i,["as","className"]);const f=N.useContext(Xr);return Ie.createElement("li",{className:"navdsi-dropdown__list-item"},Ie.createElement(a,Object.assign({},d,{value:d.children,onClick:h=>{var q,A;(q=f==null?void 0:f.onSelect)===null||q===void 0||q.call(f,h),(A=d==null?void 0:d.onClick)===null||A===void 0||A.call(d,h)},ref:g,className:qn("navdsi-dropdown__item","navds-body-short","navds-body-short--small",u)})))});var kh=function(i,g){var a={};for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&g.indexOf(u)<0&&(a[u]=i[u]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,u=Object.getOwnPropertySymbols(i);d<u.length;d++)g.indexOf(u[d])<0&&Object.prototype.propertyIsEnumerable.call(i,u[d])&&(a[u[d]]=i[u[d]]);return a};const go=N.forwardRef((i,g)=>{var{className:a,children:u}=i,d=kh(i,["className","children"]);return Ie.createElement("ul",Object.assign({},d,{ref:g,className:qn("navdsi-dropdown__list",a)}),u)});go.Item=dh;var mh=function(i,g){var a={};for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&g.indexOf(u)<0&&(a[u]=i[u]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,u=Object.getOwnPropertySymbols(i);d<u.length;d++)g.indexOf(u[d])<0&&Object.prototype.propertyIsEnumerable.call(i,u[d])&&(a[u[d]]=i[u[d]]);return a};const la=N.forwardRef((i,g)=>{var{className:a,onClose:u,placement:d="bottom-end"}=i,f=mh(i,["className","onClose","placement"]);const h=N.useContext(Xr);if(!h)return console.warn("Dropdown.Menu has to be wrapped in <Dropdown />"),null;const{isOpen:q,anchorEl:A,handleToggle:R}=h;return Ie.createElement(oo,Object.assign({},f,{placement:d,ref:g,arrow:!1,className:qn("navdsi-dropdown__menu",a),offset:-4,anchorEl:A,open:q,onClose:()=>{R(!1),u&&u()}}))});la.List=go;la.GroupedList=es;la.Divider=ah;const Xr=N.createContext(null),nr=({children:i,onSelect:g,closeOnSelect:a=!0,defaultOpen:u=!1,open:d})=>{const[f,h]=N.useState(u),[q,A]=N.useState(null),R=E=>{d===void 0&&h(E)};return Ie.createElement(Xr.Provider,{value:{isOpen:d??f,handleToggle:R,anchorEl:q,setAnchorEl:A,onSelect:E=>{g==null||g(E),a&&d===void 0&&h(!1)}}},i)};nr.Toggle=rh;nr.Menu=la;const ua={"MenySakIndex.Behandlingsmeny":"Behandlingsmeny","MenyVergeIndex.OpprettVerge":"Opprett verge/fullmektig","MenyVergeIndex.FjernVerge":"Fjern verge/fullmektig","MenyVergeIndex.OpprettVergeSporsmal":"Opprett verge/fullmektig?","MenyVergeIndex.FjernVergeSporsmal":"Fjern verge/fullmektig?","MenyVergeIndex.Opprett":"Opprett","MenyVergeIndex.Fjern":"Fjern","MenyVergeIndex.Avbryt":"Avbryt","MenyTaAvVentIndex.ResumeBehandling":"Fortsett behandlingen","MenyTaAvVentIndex.TaAvVent":"Ta behandlingen av vent?","MenyEndreBehandlendeEnhetIndex.ByttBehandlendeEnhet":"Endre behandlende enhet","EndreBehandlendeEnhetModal.ModalDescription":"Endre behandlende enhet","EndreBehandlendeEnhetModal.Endre":"Endre enhet","EndreBehandlendeEnhetModal.EndreEnhet":"Endre behandlende enhet for valgt behandling","EndreBehandlendeEnhetModal.NyEnhetField":"Ny enhet","EndreBehandlendeEnhetModal.BegrunnelseField":"Begrunnelse","EndreBehandlendeEnhetModal.Ok":"OK","EndreBehandlendeEnhetModal.Avbryt":"Avbryt"},$u=Be(ua),ko=({fjernVerge:i,opprettVerge:g,lukkModal:a})=>{const u=()=>{a();const d=g||i;if(!d)throw Error("Skal alltid ha enten opprettVerge eller fjernVerge");d()};return m.jsx(ze,{value:$u,children:m.jsx(Yi,{text:$u.formatMessage({id:g?"MenyVergeIndex.OpprettVergeSporsmal":"MenyVergeIndex.FjernVergeSporsmal"}),showModal:!0,submit:u,cancel:a})})};ko.__docgenInfo={description:"",methods:[],displayName:"MenyVergeIndex",props:{fjernVerge:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},opprettVerge:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Qr={"AdresseVisning.Adresse":"Adresse","ForelderPanel.Soker":"Søker","ForelderPanel.AnnenForelder":"Annen forelder","AlleBarnPanel.Barn":"Barn","AlleBarnPanel.BarnNr":"Barn {nummer}","AlleBarnPanel.Fodt":"Født","AlleBarnPanel.Dod":"Død","PersonPanel.RolleOgNavn":"{rolle, select, BRUKER {Søker, } ANNEN_PART {Den andre forelderen, } BARN {Barnet, } other {} }{navn}","PersonPanel.Beskrivelse.Bruker":"Adresser for søker registrert i folkeregisteret gyldige for de siste 12 månedene","PersonPanel.Beskrivelse.Barn":"Adresser for barnet registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Beskrivelse.Annenpart":"Adresser for den andre forelderen registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Fodt":"Født {dato}","PersonPanel.Dod":"Død {dato}","AdresseTabell.IngenAdresse":"Ingen adresser funnet for {erAnnenpart, select, true {den andre forelderen} other {søker} }.","AdresseTabell.SammeAdresse":"Den andre forelderen har samme adresse som søker på skjæringstidspunktet","AdresseTabell.PeriodeLabel":"Periode","AdresseTabell.AdresseLabel":"Adresse","AdresseTabell.TypeLabel":"Type","MerkePanel.Dod":"DØD","MerkePanel.DodTittel":"Personen er død","MerkePanel.DodFodt":"DØDFØDT","MerkePanel.Diskresjon6":"Kode 6","MerkePanel.Diskresjon7":"Kode 7","MerkePanel.EgenAnsatt":"Nav","MerkePanel.Verge":"Verge","MerkePanel.Diskresjon6Tittel":"Personen har diskresjonsmerking kode 6","MerkePanel.Diskresjon7Tittel":"Personen har diskresjonsmerking kode 7","MerkePanel.EgenAnsattTittel":"Personen er ansatt i Nav","MerkePanel.VergeTittel":"Personen har verge","SubmitButton.ConfirmInformation":"Bekreft og fortsett","FaktaBegrunnelseTextField.BegrunnEndringene":"Begrunn endringene","FaktaBegrunnelseTextField.Vurdering":"Vurdering","FaktaBegrunnelseTextField.Begrunnelse":"Begrunnelse","TrueFalseInput.True":"Ja","TrueFalseInput.False":"Nei","FaktaKilde.Soknad":"FRA SØKNADEN","FaktaKilde.FREG":"FRA FOLKEREGISTERET","FaktaKilde.MEDL":"FRA MEDLEMSKAPSREGISTERET"},Ii=Be(Qr),vh=ab(3),ph=zi(1500),jr=({isReadOnly:i,isSubmittable:g,hasBegrunnelse:a,label:u,hasReadOnlyLabel:d=!1,hasVurderingText:f=!1,name:h="begrunnelse"})=>{const q=f?"FaktaBegrunnelseTextField.Vurdering":"FaktaBegrunnelseTextField.BegrunnEndringene",A=()=>i?d?Ii.formatMessage({id:"FaktaBegrunnelseTextField.Begrunnelse"}):"":u??Ii.formatMessage({id:q});return m.jsx(ze,{value:Ii,children:(g||a)&&m.jsx(na,{name:h,label:A(),validate:[Fe,vh,ph,ra],maxLength:1500,readOnly:i})})},yh=i=>{var g;return i&&Array.isArray(i)?((g=i[0])==null?void 0:g.begrunnelse)??"":i&&!Array.isArray(i)&&i.begrunnelse?i.begrunnelse:""};jr.initialValues=(i,g="begrunnelse")=>({[g]:Zf(yh(i)??void 0)});jr.transformValues=(i,g="begrunnelse")=>({begrunnelse:i[g]});jr.__docgenInfo={description:"FaktaBegrunnelseTextField",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[{name:"aksjonspunkt",optional:!0,type:{name:"union",raw:"Aksjonspunkt[] | Aksjonspunkt",elements:[{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`}],raw:"Aksjonspunkt[]"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`}]}},{name:"begrunnelseFieldName",optional:!0,type:null}],returns:{type:{name:"signature",type:"object",raw:`{
  [key: string]: any;
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"signature",type:"object",raw:`{
  [key: string]: any;
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}}]},alias:"FormValues"}},{name:"name",optional:!0,type:null}],returns:{type:{name:"signature",type:"object",raw:`{
  begrunnelse: string;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!0}}]}}}}],displayName:"FaktaBegrunnelseTextField",props:{isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},hasBegrunnelse:{required:!0,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:""},hasReadOnlyLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hasVurderingText:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'begrunnelse'",computed:!1}}}};const fh=Be(Qr),bh=(i,g,a)=>!a||g?!0:!i,mo=({isReadOnly:i,isSubmittable:g,buttonText:a,onClick:u,isSubmitting:d,isDirty:f})=>m.jsx(ze,{value:fh,children:!i&&m.jsx("div",{children:m.jsxs(Ye,{size:"small",variant:"primary",loading:d,disabled:bh(f,d,g),onClick:u||ib,type:u?"button":"submit",children:[!!a&&a,!a&&m.jsx(te,{id:"SubmitButton.ConfirmInformation"})]})})});mo.__docgenInfo={description:"FaktaSubmitButton",methods:[],displayName:"FaktaSubmitButton",props:{buttonText:{required:!1,tsType:{name:"string"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!0,tsType:{name:"boolean"},description:""}}};const Wu=Be(Qr),hh=({name:i,label:g,readOnly:a,trueLabel:u,trueContent:d,falseLabel:f,falseContent:h})=>m.jsx(sb,{name:i,label:g,validate:[Fe],isReadOnly:a,isTrueOrFalseSelection:!0,radios:[{label:u??Wu.formatMessage({id:"TrueFalseInput.True"}),value:"true",element:d},{label:f??Wu.formatMessage({id:"TrueFalseInput.False"}),value:"false",element:h}]});hh.__docgenInfo={description:"",methods:[],displayName:"TrueFalseInput",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},trueLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},trueContent:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},falseLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},falseContent:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""}}};const vo=(i,g)=>{const a=new Date(i.tom??Di),u=new Date(g.tom??Di);if(a>u)return-1;if(a<u)return 1;if(i.fom&&!g.fom)return-1;if(!i.fom&&g.fom)return 1;if(i.fom&&g.fom){const d=new Date(i.fom),f=new Date(g.fom);if(d>f)return-1;if(d<f)return 1}return 0};var Yr={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var ch=Yr.exports,Yu;function qh(){return Yu||(Yu=1,function(i,g){(function(){var a,u="4.17.21",d=200,f="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",h="Expected a function",q="Invalid `variable` option passed into `_.template`",A="__lodash_hash_undefined__",R=500,E="__lodash_placeholder__",S=1,V=2,O=4,J=1,me=2,W=1,ce=2,Y=4,ye=8,Q=16,ie=32,Ne=64,fe=128,Ve=256,Ae=512,wn=30,oe="...",Je=800,ne=16,Me=1,pn=2,Pn=3,Le=1/0,Ze=9007199254740991,rs=17976931348623157e292,et=NaN,yn=4294967295,Yo=yn-1,zo=yn>>>1,Jo=[["ary",fe],["bind",W],["bindKey",ce],["curry",ye],["curryRight",Q],["flip",Ae],["partial",ie],["partialRight",Ne],["rearg",Ve]],ar="[object Arguments]",nt="[object Array]",Zo="[object AsyncFunction]",Rr="[object Boolean]",Br="[object Date]",Xo="[object DOMException]",rt="[object Error]",tt="[object Function]",ts="[object GeneratorFunction]",un="[object Map]",Er="[object Number]",Qo="[object Null]",Tn="[object Object]",as="[object Promise]",eg="[object Proxy]",_r="[object RegExp]",on="[object Set]",Sr="[object String]",at="[object Symbol]",ng="[object Undefined]",Nr="[object WeakMap]",rg="[object WeakSet]",Or="[object ArrayBuffer]",ir="[object DataView]",oa="[object Float32Array]",ga="[object Float64Array]",da="[object Int8Array]",ka="[object Int16Array]",ma="[object Int32Array]",va="[object Uint8Array]",pa="[object Uint8ClampedArray]",ya="[object Uint16Array]",fa="[object Uint32Array]",tg=/\b__p \+= '';/g,ag=/\b(__p \+=) '' \+/g,ig=/(__e\(.*?\)|\b__t\)) \+\n'';/g,is=/&(?:amp|lt|gt|quot|#39);/g,ss=/[&<>"']/g,sg=RegExp(is.source),lg=RegExp(ss.source),ug=/<%-([\s\S]+?)%>/g,og=/<%([\s\S]+?)%>/g,ls=/<%=([\s\S]+?)%>/g,gg=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,dg=/^\w*$/,kg=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ba=/[\\^$.*+?()[\]{}|]/g,mg=RegExp(ba.source),ha=/^\s+/,vg=/\s/,pg=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,yg=/\{\n\/\* \[wrapped with (.+)\] \*/,fg=/,? & /,bg=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,hg=/[()=,{}\[\]\/\s]/,cg=/\\(\\)?/g,qg=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,us=/\w*$/,wg=/^[-+]0x[0-9a-f]+$/i,Tg=/^0b[01]+$/i,Ag=/^\[object .+?Constructor\]$/,jg=/^0o[0-7]+$/i,Rg=/^(?:0|[1-9]\d*)$/,Bg=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,it=/($^)/,Eg=/['\n\r\u2028\u2029\\]/g,st="\\ud800-\\udfff",_g="\\u0300-\\u036f",Sg="\\ufe20-\\ufe2f",Ng="\\u20d0-\\u20ff",os=_g+Sg+Ng,gs="\\u2700-\\u27bf",ds="a-z\\xdf-\\xf6\\xf8-\\xff",Og="\\xac\\xb1\\xd7\\xf7",xg="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Kg="\\u2000-\\u206f",Pg=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ks="A-Z\\xc0-\\xd6\\xd8-\\xde",ms="\\ufe0e\\ufe0f",vs=Og+xg+Kg+Pg,ca="['’]",Fg="["+st+"]",ps="["+vs+"]",lt="["+os+"]",ys="\\d+",Ig="["+gs+"]",fs="["+ds+"]",bs="[^"+st+vs+ys+gs+ds+ks+"]",qa="\\ud83c[\\udffb-\\udfff]",Vg="(?:"+lt+"|"+qa+")",hs="[^"+st+"]",wa="(?:\\ud83c[\\udde6-\\uddff]){2}",Ta="[\\ud800-\\udbff][\\udc00-\\udfff]",sr="["+ks+"]",cs="\\u200d",qs="(?:"+fs+"|"+bs+")",Mg="(?:"+sr+"|"+bs+")",ws="(?:"+ca+"(?:d|ll|m|re|s|t|ve))?",Ts="(?:"+ca+"(?:D|LL|M|RE|S|T|VE))?",As=Vg+"?",js="["+ms+"]?",Lg="(?:"+cs+"(?:"+[hs,wa,Ta].join("|")+")"+js+As+")*",Ug="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Hg="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Rs=js+As+Lg,Dg="(?:"+[Ig,wa,Ta].join("|")+")"+Rs,Gg="(?:"+[hs+lt+"?",lt,wa,Ta,Fg].join("|")+")",Cg=RegExp(ca,"g"),$g=RegExp(lt,"g"),Aa=RegExp(qa+"(?="+qa+")|"+Gg+Rs,"g"),Wg=RegExp([sr+"?"+fs+"+"+ws+"(?="+[ps,sr,"$"].join("|")+")",Mg+"+"+Ts+"(?="+[ps,sr+qs,"$"].join("|")+")",sr+"?"+qs+"+"+ws,sr+"+"+Ts,Hg,Ug,ys,Dg].join("|"),"g"),Yg=RegExp("["+cs+st+os+ms+"]"),zg=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Jg=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Zg=-1,se={};se[oa]=se[ga]=se[da]=se[ka]=se[ma]=se[va]=se[pa]=se[ya]=se[fa]=!0,se[ar]=se[nt]=se[Or]=se[Rr]=se[ir]=se[Br]=se[rt]=se[tt]=se[un]=se[Er]=se[Tn]=se[_r]=se[on]=se[Sr]=se[Nr]=!1;var ae={};ae[ar]=ae[nt]=ae[Or]=ae[ir]=ae[Rr]=ae[Br]=ae[oa]=ae[ga]=ae[da]=ae[ka]=ae[ma]=ae[un]=ae[Er]=ae[Tn]=ae[_r]=ae[on]=ae[Sr]=ae[at]=ae[va]=ae[pa]=ae[ya]=ae[fa]=!0,ae[rt]=ae[tt]=ae[Nr]=!1;var Xg={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Qg={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ed={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},nd={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},rd=parseFloat,td=parseInt,Bs=typeof Yt=="object"&&Yt&&Yt.Object===Object&&Yt,ad=typeof self=="object"&&self&&self.Object===Object&&self,we=Bs||ad||Function("return this")(),ja=g&&!g.nodeType&&g,$n=ja&&!0&&i&&!i.nodeType&&i,Es=$n&&$n.exports===ja,Ra=Es&&Bs.process,Xe=function(){try{var p=$n&&$n.require&&$n.require("util").types;return p||Ra&&Ra.binding&&Ra.binding("util")}catch{}}(),_s=Xe&&Xe.isArrayBuffer,Ss=Xe&&Xe.isDate,Ns=Xe&&Xe.isMap,Os=Xe&&Xe.isRegExp,xs=Xe&&Xe.isSet,Ks=Xe&&Xe.isTypedArray;function Ue(p,c,b){switch(b.length){case 0:return p.call(c);case 1:return p.call(c,b[0]);case 2:return p.call(c,b[0],b[1]);case 3:return p.call(c,b[0],b[1],b[2])}return p.apply(c,b)}function id(p,c,b,_){for(var I=-1,z=p==null?0:p.length;++I<z;){var be=p[I];c(_,be,b(be),p)}return _}function Qe(p,c){for(var b=-1,_=p==null?0:p.length;++b<_&&c(p[b],b,p)!==!1;);return p}function sd(p,c){for(var b=p==null?0:p.length;b--&&c(p[b],b,p)!==!1;);return p}function Ps(p,c){for(var b=-1,_=p==null?0:p.length;++b<_;)if(!c(p[b],b,p))return!1;return!0}function Fn(p,c){for(var b=-1,_=p==null?0:p.length,I=0,z=[];++b<_;){var be=p[b];c(be,b,p)&&(z[I++]=be)}return z}function ut(p,c){var b=p==null?0:p.length;return!!b&&lr(p,c,0)>-1}function Ba(p,c,b){for(var _=-1,I=p==null?0:p.length;++_<I;)if(b(c,p[_]))return!0;return!1}function le(p,c){for(var b=-1,_=p==null?0:p.length,I=Array(_);++b<_;)I[b]=c(p[b],b,p);return I}function In(p,c){for(var b=-1,_=c.length,I=p.length;++b<_;)p[I+b]=c[b];return p}function Ea(p,c,b,_){var I=-1,z=p==null?0:p.length;for(_&&z&&(b=p[++I]);++I<z;)b=c(b,p[I],I,p);return b}function ld(p,c,b,_){var I=p==null?0:p.length;for(_&&I&&(b=p[--I]);I--;)b=c(b,p[I],I,p);return b}function _a(p,c){for(var b=-1,_=p==null?0:p.length;++b<_;)if(c(p[b],b,p))return!0;return!1}var ud=Sa("length");function od(p){return p.split("")}function gd(p){return p.match(bg)||[]}function Fs(p,c,b){var _;return b(p,function(I,z,be){if(c(I,z,be))return _=z,!1}),_}function ot(p,c,b,_){for(var I=p.length,z=b+(_?1:-1);_?z--:++z<I;)if(c(p[z],z,p))return z;return-1}function lr(p,c,b){return c===c?wd(p,c,b):ot(p,Is,b)}function dd(p,c,b,_){for(var I=b-1,z=p.length;++I<z;)if(_(p[I],c))return I;return-1}function Is(p){return p!==p}function Vs(p,c){var b=p==null?0:p.length;return b?Oa(p,c)/b:et}function Sa(p){return function(c){return c==null?a:c[p]}}function Na(p){return function(c){return p==null?a:p[c]}}function Ms(p,c,b,_,I){return I(p,function(z,be,re){b=_?(_=!1,z):c(b,z,be,re)}),b}function kd(p,c){var b=p.length;for(p.sort(c);b--;)p[b]=p[b].value;return p}function Oa(p,c){for(var b,_=-1,I=p.length;++_<I;){var z=c(p[_]);z!==a&&(b=b===a?z:b+z)}return b}function xa(p,c){for(var b=-1,_=Array(p);++b<p;)_[b]=c(b);return _}function md(p,c){return le(c,function(b){return[b,p[b]]})}function Ls(p){return p&&p.slice(0,Gs(p)+1).replace(ha,"")}function He(p){return function(c){return p(c)}}function Ka(p,c){return le(c,function(b){return p[b]})}function xr(p,c){return p.has(c)}function Us(p,c){for(var b=-1,_=p.length;++b<_&&lr(c,p[b],0)>-1;);return b}function Hs(p,c){for(var b=p.length;b--&&lr(c,p[b],0)>-1;);return b}function vd(p,c){for(var b=p.length,_=0;b--;)p[b]===c&&++_;return _}var pd=Na(Xg),yd=Na(Qg);function fd(p){return"\\"+nd[p]}function bd(p,c){return p==null?a:p[c]}function ur(p){return Yg.test(p)}function hd(p){return zg.test(p)}function cd(p){for(var c,b=[];!(c=p.next()).done;)b.push(c.value);return b}function Pa(p){var c=-1,b=Array(p.size);return p.forEach(function(_,I){b[++c]=[I,_]}),b}function Ds(p,c){return function(b){return p(c(b))}}function Vn(p,c){for(var b=-1,_=p.length,I=0,z=[];++b<_;){var be=p[b];(be===c||be===E)&&(p[b]=E,z[I++]=b)}return z}function gt(p){var c=-1,b=Array(p.size);return p.forEach(function(_){b[++c]=_}),b}function qd(p){var c=-1,b=Array(p.size);return p.forEach(function(_){b[++c]=[_,_]}),b}function wd(p,c,b){for(var _=b-1,I=p.length;++_<I;)if(p[_]===c)return _;return-1}function Td(p,c,b){for(var _=b+1;_--;)if(p[_]===c)return _;return _}function or(p){return ur(p)?jd(p):ud(p)}function gn(p){return ur(p)?Rd(p):od(p)}function Gs(p){for(var c=p.length;c--&&vg.test(p.charAt(c)););return c}var Ad=Na(ed);function jd(p){for(var c=Aa.lastIndex=0;Aa.test(p);)++c;return c}function Rd(p){return p.match(Aa)||[]}function Bd(p){return p.match(Wg)||[]}var Ed=function p(c){c=c==null?we:gr.defaults(we.Object(),c,gr.pick(we,Jg));var b=c.Array,_=c.Date,I=c.Error,z=c.Function,be=c.Math,re=c.Object,Fa=c.RegExp,_d=c.String,en=c.TypeError,dt=b.prototype,Sd=z.prototype,dr=re.prototype,kt=c["__core-js_shared__"],mt=Sd.toString,X=dr.hasOwnProperty,Nd=0,Cs=function(){var e=/[^.]+$/.exec(kt&&kt.keys&&kt.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),vt=dr.toString,Od=mt.call(re),xd=we._,Kd=Fa("^"+mt.call(X).replace(ba,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),pt=Es?c.Buffer:a,Mn=c.Symbol,yt=c.Uint8Array,$s=pt?pt.allocUnsafe:a,ft=Ds(re.getPrototypeOf,re),Ws=re.create,Ys=dr.propertyIsEnumerable,bt=dt.splice,zs=Mn?Mn.isConcatSpreadable:a,Kr=Mn?Mn.iterator:a,Wn=Mn?Mn.toStringTag:a,ht=function(){try{var e=Xn(re,"defineProperty");return e({},"",{}),e}catch{}}(),Pd=c.clearTimeout!==we.clearTimeout&&c.clearTimeout,Fd=_&&_.now!==we.Date.now&&_.now,Id=c.setTimeout!==we.setTimeout&&c.setTimeout,ct=be.ceil,qt=be.floor,Ia=re.getOwnPropertySymbols,Vd=pt?pt.isBuffer:a,Js=c.isFinite,Md=dt.join,Ld=Ds(re.keys,re),he=be.max,je=be.min,Ud=_.now,Hd=c.parseInt,Zs=be.random,Dd=dt.reverse,Va=Xn(c,"DataView"),Pr=Xn(c,"Map"),Ma=Xn(c,"Promise"),kr=Xn(c,"Set"),Fr=Xn(c,"WeakMap"),Ir=Xn(re,"create"),wt=Fr&&new Fr,mr={},Gd=Qn(Va),Cd=Qn(Pr),$d=Qn(Ma),Wd=Qn(kr),Yd=Qn(Fr),Tt=Mn?Mn.prototype:a,Vr=Tt?Tt.valueOf:a,Xs=Tt?Tt.toString:a;function l(e){if(ge(e)&&!M(e)&&!(e instanceof G)){if(e instanceof nn)return e;if(X.call(e,"__wrapped__"))return Ql(e)}return new nn(e)}var vr=function(){function e(){}return function(n){if(!ue(n))return{};if(Ws)return Ws(n);e.prototype=n;var r=new e;return e.prototype=a,r}}();function At(){}function nn(e,n){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!n,this.__index__=0,this.__values__=a}l.templateSettings={escape:ug,evaluate:og,interpolate:ls,variable:"",imports:{_:l}},l.prototype=At.prototype,l.prototype.constructor=l,nn.prototype=vr(At.prototype),nn.prototype.constructor=nn;function G(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=yn,this.__views__=[]}function zd(){var e=new G(this.__wrapped__);return e.__actions__=Oe(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Oe(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Oe(this.__views__),e}function Jd(){if(this.__filtered__){var e=new G(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function Zd(){var e=this.__wrapped__.value(),n=this.__dir__,r=M(e),t=n<0,s=r?e.length:0,o=om(0,s,this.__views__),k=o.start,v=o.end,y=v-k,w=t?v:k-1,T=this.__iteratees__,j=T.length,B=0,x=je(y,this.__takeCount__);if(!r||!t&&s==y&&x==y)return wl(e,this.__actions__);var P=[];e:for(;y--&&B<x;){w+=n;for(var U=-1,F=e[w];++U<j;){var D=T[U],C=D.iteratee,Ce=D.type,Se=C(F);if(Ce==pn)F=Se;else if(!Se){if(Ce==Me)continue e;break e}}P[B++]=F}return P}G.prototype=vr(At.prototype),G.prototype.constructor=G;function Yn(e){var n=-1,r=e==null?0:e.length;for(this.clear();++n<r;){var t=e[n];this.set(t[0],t[1])}}function Xd(){this.__data__=Ir?Ir(null):{},this.size=0}function Qd(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n}function ek(e){var n=this.__data__;if(Ir){var r=n[e];return r===A?a:r}return X.call(n,e)?n[e]:a}function nk(e){var n=this.__data__;return Ir?n[e]!==a:X.call(n,e)}function rk(e,n){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Ir&&n===a?A:n,this}Yn.prototype.clear=Xd,Yn.prototype.delete=Qd,Yn.prototype.get=ek,Yn.prototype.has=nk,Yn.prototype.set=rk;function An(e){var n=-1,r=e==null?0:e.length;for(this.clear();++n<r;){var t=e[n];this.set(t[0],t[1])}}function tk(){this.__data__=[],this.size=0}function ak(e){var n=this.__data__,r=jt(n,e);if(r<0)return!1;var t=n.length-1;return r==t?n.pop():bt.call(n,r,1),--this.size,!0}function ik(e){var n=this.__data__,r=jt(n,e);return r<0?a:n[r][1]}function sk(e){return jt(this.__data__,e)>-1}function lk(e,n){var r=this.__data__,t=jt(r,e);return t<0?(++this.size,r.push([e,n])):r[t][1]=n,this}An.prototype.clear=tk,An.prototype.delete=ak,An.prototype.get=ik,An.prototype.has=sk,An.prototype.set=lk;function jn(e){var n=-1,r=e==null?0:e.length;for(this.clear();++n<r;){var t=e[n];this.set(t[0],t[1])}}function uk(){this.size=0,this.__data__={hash:new Yn,map:new(Pr||An),string:new Yn}}function ok(e){var n=It(this,e).delete(e);return this.size-=n?1:0,n}function gk(e){return It(this,e).get(e)}function dk(e){return It(this,e).has(e)}function kk(e,n){var r=It(this,e),t=r.size;return r.set(e,n),this.size+=r.size==t?0:1,this}jn.prototype.clear=uk,jn.prototype.delete=ok,jn.prototype.get=gk,jn.prototype.has=dk,jn.prototype.set=kk;function zn(e){var n=-1,r=e==null?0:e.length;for(this.__data__=new jn;++n<r;)this.add(e[n])}function mk(e){return this.__data__.set(e,A),this}function vk(e){return this.__data__.has(e)}zn.prototype.add=zn.prototype.push=mk,zn.prototype.has=vk;function dn(e){var n=this.__data__=new An(e);this.size=n.size}function pk(){this.__data__=new An,this.size=0}function yk(e){var n=this.__data__,r=n.delete(e);return this.size=n.size,r}function fk(e){return this.__data__.get(e)}function bk(e){return this.__data__.has(e)}function hk(e,n){var r=this.__data__;if(r instanceof An){var t=r.__data__;if(!Pr||t.length<d-1)return t.push([e,n]),this.size=++r.size,this;r=this.__data__=new jn(t)}return r.set(e,n),this.size=r.size,this}dn.prototype.clear=pk,dn.prototype.delete=yk,dn.prototype.get=fk,dn.prototype.has=bk,dn.prototype.set=hk;function Qs(e,n){var r=M(e),t=!r&&er(e),s=!r&&!t&&Gn(e),o=!r&&!t&&!s&&br(e),k=r||t||s||o,v=k?xa(e.length,_d):[],y=v.length;for(var w in e)(n||X.call(e,w))&&!(k&&(w=="length"||s&&(w=="offset"||w=="parent")||o&&(w=="buffer"||w=="byteLength"||w=="byteOffset")||_n(w,y)))&&v.push(w);return v}function el(e){var n=e.length;return n?e[Ja(0,n-1)]:a}function ck(e,n){return Vt(Oe(e),Jn(n,0,e.length))}function qk(e){return Vt(Oe(e))}function La(e,n,r){(r!==a&&!kn(e[n],r)||r===a&&!(n in e))&&Rn(e,n,r)}function Mr(e,n,r){var t=e[n];(!(X.call(e,n)&&kn(t,r))||r===a&&!(n in e))&&Rn(e,n,r)}function jt(e,n){for(var r=e.length;r--;)if(kn(e[r][0],n))return r;return-1}function wk(e,n,r,t){return Ln(e,function(s,o,k){n(t,s,r(s),k)}),t}function nl(e,n){return e&&bn(n,qe(n),e)}function Tk(e,n){return e&&bn(n,Ke(n),e)}function Rn(e,n,r){n=="__proto__"&&ht?ht(e,n,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[n]=r}function Ua(e,n){for(var r=-1,t=n.length,s=b(t),o=e==null;++r<t;)s[r]=o?a:qi(e,n[r]);return s}function Jn(e,n,r){return e===e&&(r!==a&&(e=e<=r?e:r),n!==a&&(e=e>=n?e:n)),e}function rn(e,n,r,t,s,o){var k,v=n&S,y=n&V,w=n&O;if(r&&(k=s?r(e,t,s,o):r(e)),k!==a)return k;if(!ue(e))return e;var T=M(e);if(T){if(k=dm(e),!v)return Oe(e,k)}else{var j=Re(e),B=j==tt||j==ts;if(Gn(e))return jl(e,v);if(j==Tn||j==ar||B&&!s){if(k=y||B?{}:Gl(e),!v)return y?em(e,Tk(k,e)):Qk(e,nl(k,e))}else{if(!ae[j])return s?e:{};k=km(e,j,v)}}o||(o=new dn);var x=o.get(e);if(x)return x;o.set(e,k),hu(e)?e.forEach(function(F){k.add(rn(F,n,r,F,e,o))}):fu(e)&&e.forEach(function(F,D){k.set(D,rn(F,n,r,D,e,o))});var P=w?y?li:si:y?Ke:qe,U=T?a:P(e);return Qe(U||e,function(F,D){U&&(D=F,F=e[D]),Mr(k,D,rn(F,n,r,D,e,o))}),k}function Ak(e){var n=qe(e);return function(r){return rl(r,e,n)}}function rl(e,n,r){var t=r.length;if(e==null)return!t;for(e=re(e);t--;){var s=r[t],o=n[s],k=e[s];if(k===a&&!(s in e)||!o(k))return!1}return!0}function tl(e,n,r){if(typeof e!="function")throw new en(h);return $r(function(){e.apply(a,r)},n)}function Lr(e,n,r,t){var s=-1,o=ut,k=!0,v=e.length,y=[],w=n.length;if(!v)return y;r&&(n=le(n,He(r))),t?(o=Ba,k=!1):n.length>=d&&(o=xr,k=!1,n=new zn(n));e:for(;++s<v;){var T=e[s],j=r==null?T:r(T);if(T=t||T!==0?T:0,k&&j===j){for(var B=w;B--;)if(n[B]===j)continue e;y.push(T)}else o(n,j,t)||y.push(T)}return y}var Ln=Sl(fn),al=Sl(Da,!0);function jk(e,n){var r=!0;return Ln(e,function(t,s,o){return r=!!n(t,s,o),r}),r}function Rt(e,n,r){for(var t=-1,s=e.length;++t<s;){var o=e[t],k=n(o);if(k!=null&&(v===a?k===k&&!Ge(k):r(k,v)))var v=k,y=o}return y}function Rk(e,n,r,t){var s=e.length;for(r=L(r),r<0&&(r=-r>s?0:s+r),t=t===a||t>s?s:L(t),t<0&&(t+=s),t=r>t?0:qu(t);r<t;)e[r++]=n;return e}function il(e,n){var r=[];return Ln(e,function(t,s,o){n(t,s,o)&&r.push(t)}),r}function Te(e,n,r,t,s){var o=-1,k=e.length;for(r||(r=vm),s||(s=[]);++o<k;){var v=e[o];n>0&&r(v)?n>1?Te(v,n-1,r,t,s):In(s,v):t||(s[s.length]=v)}return s}var Ha=Nl(),sl=Nl(!0);function fn(e,n){return e&&Ha(e,n,qe)}function Da(e,n){return e&&sl(e,n,qe)}function Bt(e,n){return Fn(n,function(r){return Sn(e[r])})}function Zn(e,n){n=Hn(n,e);for(var r=0,t=n.length;e!=null&&r<t;)e=e[hn(n[r++])];return r&&r==t?e:a}function ll(e,n,r){var t=n(e);return M(e)?t:In(t,r(e))}function Ee(e){return e==null?e===a?ng:Qo:Wn&&Wn in re(e)?um(e):qm(e)}function Ga(e,n){return e>n}function Bk(e,n){return e!=null&&X.call(e,n)}function Ek(e,n){return e!=null&&n in re(e)}function _k(e,n,r){return e>=je(n,r)&&e<he(n,r)}function Ca(e,n,r){for(var t=r?Ba:ut,s=e[0].length,o=e.length,k=o,v=b(o),y=1/0,w=[];k--;){var T=e[k];k&&n&&(T=le(T,He(n))),y=je(T.length,y),v[k]=!r&&(n||s>=120&&T.length>=120)?new zn(k&&T):a}T=e[0];var j=-1,B=v[0];e:for(;++j<s&&w.length<y;){var x=T[j],P=n?n(x):x;if(x=r||x!==0?x:0,!(B?xr(B,P):t(w,P,r))){for(k=o;--k;){var U=v[k];if(!(U?xr(U,P):t(e[k],P,r)))continue e}B&&B.push(P),w.push(x)}}return w}function Sk(e,n,r,t){return fn(e,function(s,o,k){n(t,r(s),o,k)}),t}function Ur(e,n,r){n=Hn(n,e),e=Yl(e,n);var t=e==null?e:e[hn(an(n))];return t==null?a:Ue(t,e,r)}function ul(e){return ge(e)&&Ee(e)==ar}function Nk(e){return ge(e)&&Ee(e)==Or}function Ok(e){return ge(e)&&Ee(e)==Br}function Hr(e,n,r,t,s){return e===n?!0:e==null||n==null||!ge(e)&&!ge(n)?e!==e&&n!==n:xk(e,n,r,t,Hr,s)}function xk(e,n,r,t,s,o){var k=M(e),v=M(n),y=k?nt:Re(e),w=v?nt:Re(n);y=y==ar?Tn:y,w=w==ar?Tn:w;var T=y==Tn,j=w==Tn,B=y==w;if(B&&Gn(e)){if(!Gn(n))return!1;k=!0,T=!1}if(B&&!T)return o||(o=new dn),k||br(e)?Ul(e,n,r,t,s,o):sm(e,n,y,r,t,s,o);if(!(r&J)){var x=T&&X.call(e,"__wrapped__"),P=j&&X.call(n,"__wrapped__");if(x||P){var U=x?e.value():e,F=P?n.value():n;return o||(o=new dn),s(U,F,r,t,o)}}return B?(o||(o=new dn),lm(e,n,r,t,s,o)):!1}function Kk(e){return ge(e)&&Re(e)==un}function $a(e,n,r,t){var s=r.length,o=s,k=!t;if(e==null)return!o;for(e=re(e);s--;){var v=r[s];if(k&&v[2]?v[1]!==e[v[0]]:!(v[0]in e))return!1}for(;++s<o;){v=r[s];var y=v[0],w=e[y],T=v[1];if(k&&v[2]){if(w===a&&!(y in e))return!1}else{var j=new dn;if(t)var B=t(w,T,y,e,n,j);if(!(B===a?Hr(T,w,J|me,t,j):B))return!1}}return!0}function ol(e){if(!ue(e)||ym(e))return!1;var n=Sn(e)?Kd:Ag;return n.test(Qn(e))}function Pk(e){return ge(e)&&Ee(e)==_r}function Fk(e){return ge(e)&&Re(e)==on}function Ik(e){return ge(e)&&Gt(e.length)&&!!se[Ee(e)]}function gl(e){return typeof e=="function"?e:e==null?Pe:typeof e=="object"?M(e)?ml(e[0],e[1]):kl(e):Ou(e)}function Wa(e){if(!Cr(e))return Ld(e);var n=[];for(var r in re(e))X.call(e,r)&&r!="constructor"&&n.push(r);return n}function Vk(e){if(!ue(e))return cm(e);var n=Cr(e),r=[];for(var t in e)t=="constructor"&&(n||!X.call(e,t))||r.push(t);return r}function Ya(e,n){return e<n}function dl(e,n){var r=-1,t=xe(e)?b(e.length):[];return Ln(e,function(s,o,k){t[++r]=n(s,o,k)}),t}function kl(e){var n=oi(e);return n.length==1&&n[0][2]?$l(n[0][0],n[0][1]):function(r){return r===e||$a(r,e,n)}}function ml(e,n){return di(e)&&Cl(n)?$l(hn(e),n):function(r){var t=qi(r,e);return t===a&&t===n?wi(r,e):Hr(n,t,J|me)}}function Et(e,n,r,t,s){e!==n&&Ha(n,function(o,k){if(s||(s=new dn),ue(o))Mk(e,n,k,r,Et,t,s);else{var v=t?t(mi(e,k),o,k+"",e,n,s):a;v===a&&(v=o),La(e,k,v)}},Ke)}function Mk(e,n,r,t,s,o,k){var v=mi(e,r),y=mi(n,r),w=k.get(y);if(w){La(e,r,w);return}var T=o?o(v,y,r+"",e,n,k):a,j=T===a;if(j){var B=M(y),x=!B&&Gn(y),P=!B&&!x&&br(y);T=y,B||x||P?M(v)?T=v:ve(v)?T=Oe(v):x?(j=!1,T=jl(y,!0)):P?(j=!1,T=Rl(y,!0)):T=[]:Wr(y)||er(y)?(T=v,er(v)?T=wu(v):(!ue(v)||Sn(v))&&(T=Gl(y))):j=!1}j&&(k.set(y,T),s(T,y,t,o,k),k.delete(y)),La(e,r,T)}function vl(e,n){var r=e.length;if(r)return n+=n<0?r:0,_n(n,r)?e[n]:a}function pl(e,n,r){n.length?n=le(n,function(o){return M(o)?function(k){return Zn(k,o.length===1?o[0]:o)}:o}):n=[Pe];var t=-1;n=le(n,He(K()));var s=dl(e,function(o,k,v){var y=le(n,function(w){return w(o)});return{criteria:y,index:++t,value:o}});return kd(s,function(o,k){return Xk(o,k,r)})}function Lk(e,n){return yl(e,n,function(r,t){return wi(e,t)})}function yl(e,n,r){for(var t=-1,s=n.length,o={};++t<s;){var k=n[t],v=Zn(e,k);r(v,k)&&Dr(o,Hn(k,e),v)}return o}function Uk(e){return function(n){return Zn(n,e)}}function za(e,n,r,t){var s=t?dd:lr,o=-1,k=n.length,v=e;for(e===n&&(n=Oe(n)),r&&(v=le(e,He(r)));++o<k;)for(var y=0,w=n[o],T=r?r(w):w;(y=s(v,T,y,t))>-1;)v!==e&&bt.call(v,y,1),bt.call(e,y,1);return e}function fl(e,n){for(var r=e?n.length:0,t=r-1;r--;){var s=n[r];if(r==t||s!==o){var o=s;_n(s)?bt.call(e,s,1):Qa(e,s)}}return e}function Ja(e,n){return e+qt(Zs()*(n-e+1))}function Hk(e,n,r,t){for(var s=-1,o=he(ct((n-e)/(r||1)),0),k=b(o);o--;)k[t?o:++s]=e,e+=r;return k}function Za(e,n){var r="";if(!e||n<1||n>Ze)return r;do n%2&&(r+=e),n=qt(n/2),n&&(e+=e);while(n);return r}function H(e,n){return vi(Wl(e,n,Pe),e+"")}function Dk(e){return el(hr(e))}function Gk(e,n){var r=hr(e);return Vt(r,Jn(n,0,r.length))}function Dr(e,n,r,t){if(!ue(e))return e;n=Hn(n,e);for(var s=-1,o=n.length,k=o-1,v=e;v!=null&&++s<o;){var y=hn(n[s]),w=r;if(y==="__proto__"||y==="constructor"||y==="prototype")return e;if(s!=k){var T=v[y];w=t?t(T,y,v):a,w===a&&(w=ue(T)?T:_n(n[s+1])?[]:{})}Mr(v,y,w),v=v[y]}return e}var bl=wt?function(e,n){return wt.set(e,n),e}:Pe,Ck=ht?function(e,n){return ht(e,"toString",{configurable:!0,enumerable:!1,value:Ai(n),writable:!0})}:Pe;function $k(e){return Vt(hr(e))}function tn(e,n,r){var t=-1,s=e.length;n<0&&(n=-n>s?0:s+n),r=r>s?s:r,r<0&&(r+=s),s=n>r?0:r-n>>>0,n>>>=0;for(var o=b(s);++t<s;)o[t]=e[t+n];return o}function Wk(e,n){var r;return Ln(e,function(t,s,o){return r=n(t,s,o),!r}),!!r}function _t(e,n,r){var t=0,s=e==null?t:e.length;if(typeof n=="number"&&n===n&&s<=zo){for(;t<s;){var o=t+s>>>1,k=e[o];k!==null&&!Ge(k)&&(r?k<=n:k<n)?t=o+1:s=o}return s}return Xa(e,n,Pe,r)}function Xa(e,n,r,t){var s=0,o=e==null?0:e.length;if(o===0)return 0;n=r(n);for(var k=n!==n,v=n===null,y=Ge(n),w=n===a;s<o;){var T=qt((s+o)/2),j=r(e[T]),B=j!==a,x=j===null,P=j===j,U=Ge(j);if(k)var F=t||P;else w?F=P&&(t||B):v?F=P&&B&&(t||!x):y?F=P&&B&&!x&&(t||!U):x||U?F=!1:F=t?j<=n:j<n;F?s=T+1:o=T}return je(o,Yo)}function hl(e,n){for(var r=-1,t=e.length,s=0,o=[];++r<t;){var k=e[r],v=n?n(k):k;if(!r||!kn(v,y)){var y=v;o[s++]=k===0?0:k}}return o}function cl(e){return typeof e=="number"?e:Ge(e)?et:+e}function De(e){if(typeof e=="string")return e;if(M(e))return le(e,De)+"";if(Ge(e))return Xs?Xs.call(e):"";var n=e+"";return n=="0"&&1/e==-1/0?"-0":n}function Un(e,n,r){var t=-1,s=ut,o=e.length,k=!0,v=[],y=v;if(r)k=!1,s=Ba;else if(o>=d){var w=n?null:am(e);if(w)return gt(w);k=!1,s=xr,y=new zn}else y=n?[]:v;e:for(;++t<o;){var T=e[t],j=n?n(T):T;if(T=r||T!==0?T:0,k&&j===j){for(var B=y.length;B--;)if(y[B]===j)continue e;n&&y.push(j),v.push(T)}else s(y,j,r)||(y!==v&&y.push(j),v.push(T))}return v}function Qa(e,n){return n=Hn(n,e),e=Yl(e,n),e==null||delete e[hn(an(n))]}function ql(e,n,r,t){return Dr(e,n,r(Zn(e,n)),t)}function St(e,n,r,t){for(var s=e.length,o=t?s:-1;(t?o--:++o<s)&&n(e[o],o,e););return r?tn(e,t?0:o,t?o+1:s):tn(e,t?o+1:0,t?s:o)}function wl(e,n){var r=e;return r instanceof G&&(r=r.value()),Ea(n,function(t,s){return s.func.apply(s.thisArg,In([t],s.args))},r)}function ei(e,n,r){var t=e.length;if(t<2)return t?Un(e[0]):[];for(var s=-1,o=b(t);++s<t;)for(var k=e[s],v=-1;++v<t;)v!=s&&(o[s]=Lr(o[s]||k,e[v],n,r));return Un(Te(o,1),n,r)}function Tl(e,n,r){for(var t=-1,s=e.length,o=n.length,k={};++t<s;){var v=t<o?n[t]:a;r(k,e[t],v)}return k}function ni(e){return ve(e)?e:[]}function ri(e){return typeof e=="function"?e:Pe}function Hn(e,n){return M(e)?e:di(e,n)?[e]:Xl(Z(e))}var Yk=H;function Dn(e,n,r){var t=e.length;return r=r===a?t:r,!n&&r>=t?e:tn(e,n,r)}var Al=Pd||function(e){return we.clearTimeout(e)};function jl(e,n){if(n)return e.slice();var r=e.length,t=$s?$s(r):new e.constructor(r);return e.copy(t),t}function ti(e){var n=new e.constructor(e.byteLength);return new yt(n).set(new yt(e)),n}function zk(e,n){var r=n?ti(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}function Jk(e){var n=new e.constructor(e.source,us.exec(e));return n.lastIndex=e.lastIndex,n}function Zk(e){return Vr?re(Vr.call(e)):{}}function Rl(e,n){var r=n?ti(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function Bl(e,n){if(e!==n){var r=e!==a,t=e===null,s=e===e,o=Ge(e),k=n!==a,v=n===null,y=n===n,w=Ge(n);if(!v&&!w&&!o&&e>n||o&&k&&y&&!v&&!w||t&&k&&y||!r&&y||!s)return 1;if(!t&&!o&&!w&&e<n||w&&r&&s&&!t&&!o||v&&r&&s||!k&&s||!y)return-1}return 0}function Xk(e,n,r){for(var t=-1,s=e.criteria,o=n.criteria,k=s.length,v=r.length;++t<k;){var y=Bl(s[t],o[t]);if(y){if(t>=v)return y;var w=r[t];return y*(w=="desc"?-1:1)}}return e.index-n.index}function El(e,n,r,t){for(var s=-1,o=e.length,k=r.length,v=-1,y=n.length,w=he(o-k,0),T=b(y+w),j=!t;++v<y;)T[v]=n[v];for(;++s<k;)(j||s<o)&&(T[r[s]]=e[s]);for(;w--;)T[v++]=e[s++];return T}function _l(e,n,r,t){for(var s=-1,o=e.length,k=-1,v=r.length,y=-1,w=n.length,T=he(o-v,0),j=b(T+w),B=!t;++s<T;)j[s]=e[s];for(var x=s;++y<w;)j[x+y]=n[y];for(;++k<v;)(B||s<o)&&(j[x+r[k]]=e[s++]);return j}function Oe(e,n){var r=-1,t=e.length;for(n||(n=b(t));++r<t;)n[r]=e[r];return n}function bn(e,n,r,t){var s=!r;r||(r={});for(var o=-1,k=n.length;++o<k;){var v=n[o],y=t?t(r[v],e[v],v,r,e):a;y===a&&(y=e[v]),s?Rn(r,v,y):Mr(r,v,y)}return r}function Qk(e,n){return bn(e,gi(e),n)}function em(e,n){return bn(e,Hl(e),n)}function Nt(e,n){return function(r,t){var s=M(r)?id:wk,o=n?n():{};return s(r,e,K(t,2),o)}}function pr(e){return H(function(n,r){var t=-1,s=r.length,o=s>1?r[s-1]:a,k=s>2?r[2]:a;for(o=e.length>3&&typeof o=="function"?(s--,o):a,k&&_e(r[0],r[1],k)&&(o=s<3?a:o,s=1),n=re(n);++t<s;){var v=r[t];v&&e(n,v,t,o)}return n})}function Sl(e,n){return function(r,t){if(r==null)return r;if(!xe(r))return e(r,t);for(var s=r.length,o=n?s:-1,k=re(r);(n?o--:++o<s)&&t(k[o],o,k)!==!1;);return r}}function Nl(e){return function(n,r,t){for(var s=-1,o=re(n),k=t(n),v=k.length;v--;){var y=k[e?v:++s];if(r(o[y],y,o)===!1)break}return n}}function nm(e,n,r){var t=n&W,s=Gr(e);function o(){var k=this&&this!==we&&this instanceof o?s:e;return k.apply(t?r:this,arguments)}return o}function Ol(e){return function(n){n=Z(n);var r=ur(n)?gn(n):a,t=r?r[0]:n.charAt(0),s=r?Dn(r,1).join(""):n.slice(1);return t[e]()+s}}function yr(e){return function(n){return Ea(Su(_u(n).replace(Cg,"")),e,"")}}function Gr(e){return function(){var n=arguments;switch(n.length){case 0:return new e;case 1:return new e(n[0]);case 2:return new e(n[0],n[1]);case 3:return new e(n[0],n[1],n[2]);case 4:return new e(n[0],n[1],n[2],n[3]);case 5:return new e(n[0],n[1],n[2],n[3],n[4]);case 6:return new e(n[0],n[1],n[2],n[3],n[4],n[5]);case 7:return new e(n[0],n[1],n[2],n[3],n[4],n[5],n[6])}var r=vr(e.prototype),t=e.apply(r,n);return ue(t)?t:r}}function rm(e,n,r){var t=Gr(e);function s(){for(var o=arguments.length,k=b(o),v=o,y=fr(s);v--;)k[v]=arguments[v];var w=o<3&&k[0]!==y&&k[o-1]!==y?[]:Vn(k,y);if(o-=w.length,o<r)return Il(e,n,Ot,s.placeholder,a,k,w,a,a,r-o);var T=this&&this!==we&&this instanceof s?t:e;return Ue(T,this,k)}return s}function xl(e){return function(n,r,t){var s=re(n);if(!xe(n)){var o=K(r,3);n=qe(n),r=function(v){return o(s[v],v,s)}}var k=e(n,r,t);return k>-1?s[o?n[k]:k]:a}}function Kl(e){return En(function(n){var r=n.length,t=r,s=nn.prototype.thru;for(e&&n.reverse();t--;){var o=n[t];if(typeof o!="function")throw new en(h);if(s&&!k&&Ft(o)=="wrapper")var k=new nn([],!0)}for(t=k?t:r;++t<r;){o=n[t];var v=Ft(o),y=v=="wrapper"?ui(o):a;y&&ki(y[0])&&y[1]==(fe|ye|ie|Ve)&&!y[4].length&&y[9]==1?k=k[Ft(y[0])].apply(k,y[3]):k=o.length==1&&ki(o)?k[v]():k.thru(o)}return function(){var w=arguments,T=w[0];if(k&&w.length==1&&M(T))return k.plant(T).value();for(var j=0,B=r?n[j].apply(this,w):T;++j<r;)B=n[j].call(this,B);return B}})}function Ot(e,n,r,t,s,o,k,v,y,w){var T=n&fe,j=n&W,B=n&ce,x=n&(ye|Q),P=n&Ae,U=B?a:Gr(e);function F(){for(var D=arguments.length,C=b(D),Ce=D;Ce--;)C[Ce]=arguments[Ce];if(x)var Se=fr(F),$e=vd(C,Se);if(t&&(C=El(C,t,s,x)),o&&(C=_l(C,o,k,x)),D-=$e,x&&D<w){var pe=Vn(C,Se);return Il(e,n,Ot,F.placeholder,r,C,pe,v,y,w-D)}var mn=j?r:this,On=B?mn[e]:e;return D=C.length,v?C=wm(C,v):P&&D>1&&C.reverse(),T&&y<D&&(C.length=y),this&&this!==we&&this instanceof F&&(On=U||Gr(On)),On.apply(mn,C)}return F}function Pl(e,n){return function(r,t){return Sk(r,e,n(t),{})}}function xt(e,n){return function(r,t){var s;if(r===a&&t===a)return n;if(r!==a&&(s=r),t!==a){if(s===a)return t;typeof r=="string"||typeof t=="string"?(r=De(r),t=De(t)):(r=cl(r),t=cl(t)),s=e(r,t)}return s}}function ai(e){return En(function(n){return n=le(n,He(K())),H(function(r){var t=this;return e(n,function(s){return Ue(s,t,r)})})})}function Kt(e,n){n=n===a?" ":De(n);var r=n.length;if(r<2)return r?Za(n,e):n;var t=Za(n,ct(e/or(n)));return ur(n)?Dn(gn(t),0,e).join(""):t.slice(0,e)}function tm(e,n,r,t){var s=n&W,o=Gr(e);function k(){for(var v=-1,y=arguments.length,w=-1,T=t.length,j=b(T+y),B=this&&this!==we&&this instanceof k?o:e;++w<T;)j[w]=t[w];for(;y--;)j[w++]=arguments[++v];return Ue(B,s?r:this,j)}return k}function Fl(e){return function(n,r,t){return t&&typeof t!="number"&&_e(n,r,t)&&(r=t=a),n=Nn(n),r===a?(r=n,n=0):r=Nn(r),t=t===a?n<r?1:-1:Nn(t),Hk(n,r,t,e)}}function Pt(e){return function(n,r){return typeof n=="string"&&typeof r=="string"||(n=sn(n),r=sn(r)),e(n,r)}}function Il(e,n,r,t,s,o,k,v,y,w){var T=n&ye,j=T?k:a,B=T?a:k,x=T?o:a,P=T?a:o;n|=T?ie:Ne,n&=~(T?Ne:ie),n&Y||(n&=-4);var U=[e,n,s,x,j,P,B,v,y,w],F=r.apply(a,U);return ki(e)&&zl(F,U),F.placeholder=t,Jl(F,e,n)}function ii(e){var n=be[e];return function(r,t){if(r=sn(r),t=t==null?0:je(L(t),292),t&&Js(r)){var s=(Z(r)+"e").split("e"),o=n(s[0]+"e"+(+s[1]+t));return s=(Z(o)+"e").split("e"),+(s[0]+"e"+(+s[1]-t))}return n(r)}}var am=kr&&1/gt(new kr([,-0]))[1]==Le?function(e){return new kr(e)}:Bi;function Vl(e){return function(n){var r=Re(n);return r==un?Pa(n):r==on?qd(n):md(n,e(n))}}function Bn(e,n,r,t,s,o,k,v){var y=n&ce;if(!y&&typeof e!="function")throw new en(h);var w=t?t.length:0;if(w||(n&=-97,t=s=a),k=k===a?k:he(L(k),0),v=v===a?v:L(v),w-=s?s.length:0,n&Ne){var T=t,j=s;t=s=a}var B=y?a:ui(e),x=[e,n,r,t,s,T,j,o,k,v];if(B&&hm(x,B),e=x[0],n=x[1],r=x[2],t=x[3],s=x[4],v=x[9]=x[9]===a?y?0:e.length:he(x[9]-w,0),!v&&n&(ye|Q)&&(n&=-25),!n||n==W)var P=nm(e,n,r);else n==ye||n==Q?P=rm(e,n,v):(n==ie||n==(W|ie))&&!s.length?P=tm(e,n,r,t):P=Ot.apply(a,x);var U=B?bl:zl;return Jl(U(P,x),e,n)}function Ml(e,n,r,t){return e===a||kn(e,dr[r])&&!X.call(t,r)?n:e}function Ll(e,n,r,t,s,o){return ue(e)&&ue(n)&&(o.set(n,e),Et(e,n,a,Ll,o),o.delete(n)),e}function im(e){return Wr(e)?a:e}function Ul(e,n,r,t,s,o){var k=r&J,v=e.length,y=n.length;if(v!=y&&!(k&&y>v))return!1;var w=o.get(e),T=o.get(n);if(w&&T)return w==n&&T==e;var j=-1,B=!0,x=r&me?new zn:a;for(o.set(e,n),o.set(n,e);++j<v;){var P=e[j],U=n[j];if(t)var F=k?t(U,P,j,n,e,o):t(P,U,j,e,n,o);if(F!==a){if(F)continue;B=!1;break}if(x){if(!_a(n,function(D,C){if(!xr(x,C)&&(P===D||s(P,D,r,t,o)))return x.push(C)})){B=!1;break}}else if(!(P===U||s(P,U,r,t,o))){B=!1;break}}return o.delete(e),o.delete(n),B}function sm(e,n,r,t,s,o,k){switch(r){case ir:if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case Or:return!(e.byteLength!=n.byteLength||!o(new yt(e),new yt(n)));case Rr:case Br:case Er:return kn(+e,+n);case rt:return e.name==n.name&&e.message==n.message;case _r:case Sr:return e==n+"";case un:var v=Pa;case on:var y=t&J;if(v||(v=gt),e.size!=n.size&&!y)return!1;var w=k.get(e);if(w)return w==n;t|=me,k.set(e,n);var T=Ul(v(e),v(n),t,s,o,k);return k.delete(e),T;case at:if(Vr)return Vr.call(e)==Vr.call(n)}return!1}function lm(e,n,r,t,s,o){var k=r&J,v=si(e),y=v.length,w=si(n),T=w.length;if(y!=T&&!k)return!1;for(var j=y;j--;){var B=v[j];if(!(k?B in n:X.call(n,B)))return!1}var x=o.get(e),P=o.get(n);if(x&&P)return x==n&&P==e;var U=!0;o.set(e,n),o.set(n,e);for(var F=k;++j<y;){B=v[j];var D=e[B],C=n[B];if(t)var Ce=k?t(C,D,B,n,e,o):t(D,C,B,e,n,o);if(!(Ce===a?D===C||s(D,C,r,t,o):Ce)){U=!1;break}F||(F=B=="constructor")}if(U&&!F){var Se=e.constructor,$e=n.constructor;Se!=$e&&"constructor"in e&&"constructor"in n&&!(typeof Se=="function"&&Se instanceof Se&&typeof $e=="function"&&$e instanceof $e)&&(U=!1)}return o.delete(e),o.delete(n),U}function En(e){return vi(Wl(e,a,ru),e+"")}function si(e){return ll(e,qe,gi)}function li(e){return ll(e,Ke,Hl)}var ui=wt?function(e){return wt.get(e)}:Bi;function Ft(e){for(var n=e.name+"",r=mr[n],t=X.call(mr,n)?r.length:0;t--;){var s=r[t],o=s.func;if(o==null||o==e)return s.name}return n}function fr(e){var n=X.call(l,"placeholder")?l:e;return n.placeholder}function K(){var e=l.iteratee||ji;return e=e===ji?gl:e,arguments.length?e(arguments[0],arguments[1]):e}function It(e,n){var r=e.__data__;return pm(n)?r[typeof n=="string"?"string":"hash"]:r.map}function oi(e){for(var n=qe(e),r=n.length;r--;){var t=n[r],s=e[t];n[r]=[t,s,Cl(s)]}return n}function Xn(e,n){var r=bd(e,n);return ol(r)?r:a}function um(e){var n=X.call(e,Wn),r=e[Wn];try{e[Wn]=a;var t=!0}catch{}var s=vt.call(e);return t&&(n?e[Wn]=r:delete e[Wn]),s}var gi=Ia?function(e){return e==null?[]:(e=re(e),Fn(Ia(e),function(n){return Ys.call(e,n)}))}:Ei,Hl=Ia?function(e){for(var n=[];e;)In(n,gi(e)),e=ft(e);return n}:Ei,Re=Ee;(Va&&Re(new Va(new ArrayBuffer(1)))!=ir||Pr&&Re(new Pr)!=un||Ma&&Re(Ma.resolve())!=as||kr&&Re(new kr)!=on||Fr&&Re(new Fr)!=Nr)&&(Re=function(e){var n=Ee(e),r=n==Tn?e.constructor:a,t=r?Qn(r):"";if(t)switch(t){case Gd:return ir;case Cd:return un;case $d:return as;case Wd:return on;case Yd:return Nr}return n});function om(e,n,r){for(var t=-1,s=r.length;++t<s;){var o=r[t],k=o.size;switch(o.type){case"drop":e+=k;break;case"dropRight":n-=k;break;case"take":n=je(n,e+k);break;case"takeRight":e=he(e,n-k);break}}return{start:e,end:n}}function gm(e){var n=e.match(yg);return n?n[1].split(fg):[]}function Dl(e,n,r){n=Hn(n,e);for(var t=-1,s=n.length,o=!1;++t<s;){var k=hn(n[t]);if(!(o=e!=null&&r(e,k)))break;e=e[k]}return o||++t!=s?o:(s=e==null?0:e.length,!!s&&Gt(s)&&_n(k,s)&&(M(e)||er(e)))}function dm(e){var n=e.length,r=new e.constructor(n);return n&&typeof e[0]=="string"&&X.call(e,"index")&&(r.index=e.index,r.input=e.input),r}function Gl(e){return typeof e.constructor=="function"&&!Cr(e)?vr(ft(e)):{}}function km(e,n,r){var t=e.constructor;switch(n){case Or:return ti(e);case Rr:case Br:return new t(+e);case ir:return zk(e,r);case oa:case ga:case da:case ka:case ma:case va:case pa:case ya:case fa:return Rl(e,r);case un:return new t;case Er:case Sr:return new t(e);case _r:return Jk(e);case on:return new t;case at:return Zk(e)}}function mm(e,n){var r=n.length;if(!r)return e;var t=r-1;return n[t]=(r>1?"& ":"")+n[t],n=n.join(r>2?", ":" "),e.replace(pg,`{
/* [wrapped with `+n+`] */
`)}function vm(e){return M(e)||er(e)||!!(zs&&e&&e[zs])}function _n(e,n){var r=typeof e;return n=n??Ze,!!n&&(r=="number"||r!="symbol"&&Rg.test(e))&&e>-1&&e%1==0&&e<n}function _e(e,n,r){if(!ue(r))return!1;var t=typeof n;return(t=="number"?xe(r)&&_n(n,r.length):t=="string"&&n in r)?kn(r[n],e):!1}function di(e,n){if(M(e))return!1;var r=typeof e;return r=="number"||r=="symbol"||r=="boolean"||e==null||Ge(e)?!0:dg.test(e)||!gg.test(e)||n!=null&&e in re(n)}function pm(e){var n=typeof e;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?e!=="__proto__":e===null}function ki(e){var n=Ft(e),r=l[n];if(typeof r!="function"||!(n in G.prototype))return!1;if(e===r)return!0;var t=ui(r);return!!t&&e===t[0]}function ym(e){return!!Cs&&Cs in e}var fm=kt?Sn:_i;function Cr(e){var n=e&&e.constructor,r=typeof n=="function"&&n.prototype||dr;return e===r}function Cl(e){return e===e&&!ue(e)}function $l(e,n){return function(r){return r==null?!1:r[e]===n&&(n!==a||e in re(r))}}function bm(e){var n=Ht(e,function(t){return r.size===R&&r.clear(),t}),r=n.cache;return n}function hm(e,n){var r=e[1],t=n[1],s=r|t,o=s<(W|ce|fe),k=t==fe&&r==ye||t==fe&&r==Ve&&e[7].length<=n[8]||t==(fe|Ve)&&n[7].length<=n[8]&&r==ye;if(!(o||k))return e;t&W&&(e[2]=n[2],s|=r&W?0:Y);var v=n[3];if(v){var y=e[3];e[3]=y?El(y,v,n[4]):v,e[4]=y?Vn(e[3],E):n[4]}return v=n[5],v&&(y=e[5],e[5]=y?_l(y,v,n[6]):v,e[6]=y?Vn(e[5],E):n[6]),v=n[7],v&&(e[7]=v),t&fe&&(e[8]=e[8]==null?n[8]:je(e[8],n[8])),e[9]==null&&(e[9]=n[9]),e[0]=n[0],e[1]=s,e}function cm(e){var n=[];if(e!=null)for(var r in re(e))n.push(r);return n}function qm(e){return vt.call(e)}function Wl(e,n,r){return n=he(n===a?e.length-1:n,0),function(){for(var t=arguments,s=-1,o=he(t.length-n,0),k=b(o);++s<o;)k[s]=t[n+s];s=-1;for(var v=b(n+1);++s<n;)v[s]=t[s];return v[n]=r(k),Ue(e,this,v)}}function Yl(e,n){return n.length<2?e:Zn(e,tn(n,0,-1))}function wm(e,n){for(var r=e.length,t=je(n.length,r),s=Oe(e);t--;){var o=n[t];e[t]=_n(o,r)?s[o]:a}return e}function mi(e,n){if(!(n==="constructor"&&typeof e[n]=="function")&&n!="__proto__")return e[n]}var zl=Zl(bl),$r=Id||function(e,n){return we.setTimeout(e,n)},vi=Zl(Ck);function Jl(e,n,r){var t=n+"";return vi(e,mm(t,Tm(gm(t),r)))}function Zl(e){var n=0,r=0;return function(){var t=Ud(),s=ne-(t-r);if(r=t,s>0){if(++n>=Je)return arguments[0]}else n=0;return e.apply(a,arguments)}}function Vt(e,n){var r=-1,t=e.length,s=t-1;for(n=n===a?t:n;++r<n;){var o=Ja(r,s),k=e[o];e[o]=e[r],e[r]=k}return e.length=n,e}var Xl=bm(function(e){var n=[];return e.charCodeAt(0)===46&&n.push(""),e.replace(kg,function(r,t,s,o){n.push(s?o.replace(cg,"$1"):t||r)}),n});function hn(e){if(typeof e=="string"||Ge(e))return e;var n=e+"";return n=="0"&&1/e==-1/0?"-0":n}function Qn(e){if(e!=null){try{return mt.call(e)}catch{}try{return e+""}catch{}}return""}function Tm(e,n){return Qe(Jo,function(r){var t="_."+r[0];n&r[1]&&!ut(e,t)&&e.push(t)}),e.sort()}function Ql(e){if(e instanceof G)return e.clone();var n=new nn(e.__wrapped__,e.__chain__);return n.__actions__=Oe(e.__actions__),n.__index__=e.__index__,n.__values__=e.__values__,n}function Am(e,n,r){(r?_e(e,n,r):n===a)?n=1:n=he(L(n),0);var t=e==null?0:e.length;if(!t||n<1)return[];for(var s=0,o=0,k=b(ct(t/n));s<t;)k[o++]=tn(e,s,s+=n);return k}function jm(e){for(var n=-1,r=e==null?0:e.length,t=0,s=[];++n<r;){var o=e[n];o&&(s[t++]=o)}return s}function Rm(){var e=arguments.length;if(!e)return[];for(var n=b(e-1),r=arguments[0],t=e;t--;)n[t-1]=arguments[t];return In(M(r)?Oe(r):[r],Te(n,1))}var Bm=H(function(e,n){return ve(e)?Lr(e,Te(n,1,ve,!0)):[]}),Em=H(function(e,n){var r=an(n);return ve(r)&&(r=a),ve(e)?Lr(e,Te(n,1,ve,!0),K(r,2)):[]}),_m=H(function(e,n){var r=an(n);return ve(r)&&(r=a),ve(e)?Lr(e,Te(n,1,ve,!0),a,r):[]});function Sm(e,n,r){var t=e==null?0:e.length;return t?(n=r||n===a?1:L(n),tn(e,n<0?0:n,t)):[]}function Nm(e,n,r){var t=e==null?0:e.length;return t?(n=r||n===a?1:L(n),n=t-n,tn(e,0,n<0?0:n)):[]}function Om(e,n){return e&&e.length?St(e,K(n,3),!0,!0):[]}function xm(e,n){return e&&e.length?St(e,K(n,3),!0):[]}function Km(e,n,r,t){var s=e==null?0:e.length;return s?(r&&typeof r!="number"&&_e(e,n,r)&&(r=0,t=s),Rk(e,n,r,t)):[]}function eu(e,n,r){var t=e==null?0:e.length;if(!t)return-1;var s=r==null?0:L(r);return s<0&&(s=he(t+s,0)),ot(e,K(n,3),s)}function nu(e,n,r){var t=e==null?0:e.length;if(!t)return-1;var s=t-1;return r!==a&&(s=L(r),s=r<0?he(t+s,0):je(s,t-1)),ot(e,K(n,3),s,!0)}function ru(e){var n=e==null?0:e.length;return n?Te(e,1):[]}function Pm(e){var n=e==null?0:e.length;return n?Te(e,Le):[]}function Fm(e,n){var r=e==null?0:e.length;return r?(n=n===a?1:L(n),Te(e,n)):[]}function Im(e){for(var n=-1,r=e==null?0:e.length,t={};++n<r;){var s=e[n];t[s[0]]=s[1]}return t}function tu(e){return e&&e.length?e[0]:a}function Vm(e,n,r){var t=e==null?0:e.length;if(!t)return-1;var s=r==null?0:L(r);return s<0&&(s=he(t+s,0)),lr(e,n,s)}function Mm(e){var n=e==null?0:e.length;return n?tn(e,0,-1):[]}var Lm=H(function(e){var n=le(e,ni);return n.length&&n[0]===e[0]?Ca(n):[]}),Um=H(function(e){var n=an(e),r=le(e,ni);return n===an(r)?n=a:r.pop(),r.length&&r[0]===e[0]?Ca(r,K(n,2)):[]}),Hm=H(function(e){var n=an(e),r=le(e,ni);return n=typeof n=="function"?n:a,n&&r.pop(),r.length&&r[0]===e[0]?Ca(r,a,n):[]});function Dm(e,n){return e==null?"":Md.call(e,n)}function an(e){var n=e==null?0:e.length;return n?e[n-1]:a}function Gm(e,n,r){var t=e==null?0:e.length;if(!t)return-1;var s=t;return r!==a&&(s=L(r),s=s<0?he(t+s,0):je(s,t-1)),n===n?Td(e,n,s):ot(e,Is,s,!0)}function Cm(e,n){return e&&e.length?vl(e,L(n)):a}var $m=H(au);function au(e,n){return e&&e.length&&n&&n.length?za(e,n):e}function Wm(e,n,r){return e&&e.length&&n&&n.length?za(e,n,K(r,2)):e}function Ym(e,n,r){return e&&e.length&&n&&n.length?za(e,n,a,r):e}var zm=En(function(e,n){var r=e==null?0:e.length,t=Ua(e,n);return fl(e,le(n,function(s){return _n(s,r)?+s:s}).sort(Bl)),t});function Jm(e,n){var r=[];if(!(e&&e.length))return r;var t=-1,s=[],o=e.length;for(n=K(n,3);++t<o;){var k=e[t];n(k,t,e)&&(r.push(k),s.push(t))}return fl(e,s),r}function pi(e){return e==null?e:Dd.call(e)}function Zm(e,n,r){var t=e==null?0:e.length;return t?(r&&typeof r!="number"&&_e(e,n,r)?(n=0,r=t):(n=n==null?0:L(n),r=r===a?t:L(r)),tn(e,n,r)):[]}function Xm(e,n){return _t(e,n)}function Qm(e,n,r){return Xa(e,n,K(r,2))}function ev(e,n){var r=e==null?0:e.length;if(r){var t=_t(e,n);if(t<r&&kn(e[t],n))return t}return-1}function nv(e,n){return _t(e,n,!0)}function rv(e,n,r){return Xa(e,n,K(r,2),!0)}function tv(e,n){var r=e==null?0:e.length;if(r){var t=_t(e,n,!0)-1;if(kn(e[t],n))return t}return-1}function av(e){return e&&e.length?hl(e):[]}function iv(e,n){return e&&e.length?hl(e,K(n,2)):[]}function sv(e){var n=e==null?0:e.length;return n?tn(e,1,n):[]}function lv(e,n,r){return e&&e.length?(n=r||n===a?1:L(n),tn(e,0,n<0?0:n)):[]}function uv(e,n,r){var t=e==null?0:e.length;return t?(n=r||n===a?1:L(n),n=t-n,tn(e,n<0?0:n,t)):[]}function ov(e,n){return e&&e.length?St(e,K(n,3),!1,!0):[]}function gv(e,n){return e&&e.length?St(e,K(n,3)):[]}var dv=H(function(e){return Un(Te(e,1,ve,!0))}),kv=H(function(e){var n=an(e);return ve(n)&&(n=a),Un(Te(e,1,ve,!0),K(n,2))}),mv=H(function(e){var n=an(e);return n=typeof n=="function"?n:a,Un(Te(e,1,ve,!0),a,n)});function vv(e){return e&&e.length?Un(e):[]}function pv(e,n){return e&&e.length?Un(e,K(n,2)):[]}function yv(e,n){return n=typeof n=="function"?n:a,e&&e.length?Un(e,a,n):[]}function yi(e){if(!(e&&e.length))return[];var n=0;return e=Fn(e,function(r){if(ve(r))return n=he(r.length,n),!0}),xa(n,function(r){return le(e,Sa(r))})}function iu(e,n){if(!(e&&e.length))return[];var r=yi(e);return n==null?r:le(r,function(t){return Ue(n,a,t)})}var fv=H(function(e,n){return ve(e)?Lr(e,n):[]}),bv=H(function(e){return ei(Fn(e,ve))}),hv=H(function(e){var n=an(e);return ve(n)&&(n=a),ei(Fn(e,ve),K(n,2))}),cv=H(function(e){var n=an(e);return n=typeof n=="function"?n:a,ei(Fn(e,ve),a,n)}),qv=H(yi);function wv(e,n){return Tl(e||[],n||[],Mr)}function Tv(e,n){return Tl(e||[],n||[],Dr)}var Av=H(function(e){var n=e.length,r=n>1?e[n-1]:a;return r=typeof r=="function"?(e.pop(),r):a,iu(e,r)});function su(e){var n=l(e);return n.__chain__=!0,n}function jv(e,n){return n(e),e}function Mt(e,n){return n(e)}var Rv=En(function(e){var n=e.length,r=n?e[0]:0,t=this.__wrapped__,s=function(o){return Ua(o,e)};return n>1||this.__actions__.length||!(t instanceof G)||!_n(r)?this.thru(s):(t=t.slice(r,+r+(n?1:0)),t.__actions__.push({func:Mt,args:[s],thisArg:a}),new nn(t,this.__chain__).thru(function(o){return n&&!o.length&&o.push(a),o}))});function Bv(){return su(this)}function Ev(){return new nn(this.value(),this.__chain__)}function _v(){this.__values__===a&&(this.__values__=cu(this.value()));var e=this.__index__>=this.__values__.length,n=e?a:this.__values__[this.__index__++];return{done:e,value:n}}function Sv(){return this}function Nv(e){for(var n,r=this;r instanceof At;){var t=Ql(r);t.__index__=0,t.__values__=a,n?s.__wrapped__=t:n=t;var s=t;r=r.__wrapped__}return s.__wrapped__=e,n}function Ov(){var e=this.__wrapped__;if(e instanceof G){var n=e;return this.__actions__.length&&(n=new G(this)),n=n.reverse(),n.__actions__.push({func:Mt,args:[pi],thisArg:a}),new nn(n,this.__chain__)}return this.thru(pi)}function xv(){return wl(this.__wrapped__,this.__actions__)}var Kv=Nt(function(e,n,r){X.call(e,r)?++e[r]:Rn(e,r,1)});function Pv(e,n,r){var t=M(e)?Ps:jk;return r&&_e(e,n,r)&&(n=a),t(e,K(n,3))}function Fv(e,n){var r=M(e)?Fn:il;return r(e,K(n,3))}var Iv=xl(eu),Vv=xl(nu);function Mv(e,n){return Te(Lt(e,n),1)}function Lv(e,n){return Te(Lt(e,n),Le)}function Uv(e,n,r){return r=r===a?1:L(r),Te(Lt(e,n),r)}function lu(e,n){var r=M(e)?Qe:Ln;return r(e,K(n,3))}function uu(e,n){var r=M(e)?sd:al;return r(e,K(n,3))}var Hv=Nt(function(e,n,r){X.call(e,r)?e[r].push(n):Rn(e,r,[n])});function Dv(e,n,r,t){e=xe(e)?e:hr(e),r=r&&!t?L(r):0;var s=e.length;return r<0&&(r=he(s+r,0)),Ct(e)?r<=s&&e.indexOf(n,r)>-1:!!s&&lr(e,n,r)>-1}var Gv=H(function(e,n,r){var t=-1,s=typeof n=="function",o=xe(e)?b(e.length):[];return Ln(e,function(k){o[++t]=s?Ue(n,k,r):Ur(k,n,r)}),o}),Cv=Nt(function(e,n,r){Rn(e,r,n)});function Lt(e,n){var r=M(e)?le:dl;return r(e,K(n,3))}function $v(e,n,r,t){return e==null?[]:(M(n)||(n=n==null?[]:[n]),r=t?a:r,M(r)||(r=r==null?[]:[r]),pl(e,n,r))}var Wv=Nt(function(e,n,r){e[r?0:1].push(n)},function(){return[[],[]]});function Yv(e,n,r){var t=M(e)?Ea:Ms,s=arguments.length<3;return t(e,K(n,4),r,s,Ln)}function zv(e,n,r){var t=M(e)?ld:Ms,s=arguments.length<3;return t(e,K(n,4),r,s,al)}function Jv(e,n){var r=M(e)?Fn:il;return r(e,Dt(K(n,3)))}function Zv(e){var n=M(e)?el:Dk;return n(e)}function Xv(e,n,r){(r?_e(e,n,r):n===a)?n=1:n=L(n);var t=M(e)?ck:Gk;return t(e,n)}function Qv(e){var n=M(e)?qk:$k;return n(e)}function ep(e){if(e==null)return 0;if(xe(e))return Ct(e)?or(e):e.length;var n=Re(e);return n==un||n==on?e.size:Wa(e).length}function np(e,n,r){var t=M(e)?_a:Wk;return r&&_e(e,n,r)&&(n=a),t(e,K(n,3))}var rp=H(function(e,n){if(e==null)return[];var r=n.length;return r>1&&_e(e,n[0],n[1])?n=[]:r>2&&_e(n[0],n[1],n[2])&&(n=[n[0]]),pl(e,Te(n,1),[])}),Ut=Fd||function(){return we.Date.now()};function tp(e,n){if(typeof n!="function")throw new en(h);return e=L(e),function(){if(--e<1)return n.apply(this,arguments)}}function ou(e,n,r){return n=r?a:n,n=e&&n==null?e.length:n,Bn(e,fe,a,a,a,a,n)}function gu(e,n){var r;if(typeof n!="function")throw new en(h);return e=L(e),function(){return--e>0&&(r=n.apply(this,arguments)),e<=1&&(n=a),r}}var fi=H(function(e,n,r){var t=W;if(r.length){var s=Vn(r,fr(fi));t|=ie}return Bn(e,t,n,r,s)}),du=H(function(e,n,r){var t=W|ce;if(r.length){var s=Vn(r,fr(du));t|=ie}return Bn(n,t,e,r,s)});function ku(e,n,r){n=r?a:n;var t=Bn(e,ye,a,a,a,a,a,n);return t.placeholder=ku.placeholder,t}function mu(e,n,r){n=r?a:n;var t=Bn(e,Q,a,a,a,a,a,n);return t.placeholder=mu.placeholder,t}function vu(e,n,r){var t,s,o,k,v,y,w=0,T=!1,j=!1,B=!0;if(typeof e!="function")throw new en(h);n=sn(n)||0,ue(r)&&(T=!!r.leading,j="maxWait"in r,o=j?he(sn(r.maxWait)||0,n):o,B="trailing"in r?!!r.trailing:B);function x(pe){var mn=t,On=s;return t=s=a,w=pe,k=e.apply(On,mn),k}function P(pe){return w=pe,v=$r(D,n),T?x(pe):k}function U(pe){var mn=pe-y,On=pe-w,xu=n-mn;return j?je(xu,o-On):xu}function F(pe){var mn=pe-y,On=pe-w;return y===a||mn>=n||mn<0||j&&On>=o}function D(){var pe=Ut();if(F(pe))return C(pe);v=$r(D,U(pe))}function C(pe){return v=a,B&&t?x(pe):(t=s=a,k)}function Ce(){v!==a&&Al(v),w=0,t=y=s=v=a}function Se(){return v===a?k:C(Ut())}function $e(){var pe=Ut(),mn=F(pe);if(t=arguments,s=this,y=pe,mn){if(v===a)return P(y);if(j)return Al(v),v=$r(D,n),x(y)}return v===a&&(v=$r(D,n)),k}return $e.cancel=Ce,$e.flush=Se,$e}var ap=H(function(e,n){return tl(e,1,n)}),ip=H(function(e,n,r){return tl(e,sn(n)||0,r)});function sp(e){return Bn(e,Ae)}function Ht(e,n){if(typeof e!="function"||n!=null&&typeof n!="function")throw new en(h);var r=function(){var t=arguments,s=n?n.apply(this,t):t[0],o=r.cache;if(o.has(s))return o.get(s);var k=e.apply(this,t);return r.cache=o.set(s,k)||o,k};return r.cache=new(Ht.Cache||jn),r}Ht.Cache=jn;function Dt(e){if(typeof e!="function")throw new en(h);return function(){var n=arguments;switch(n.length){case 0:return!e.call(this);case 1:return!e.call(this,n[0]);case 2:return!e.call(this,n[0],n[1]);case 3:return!e.call(this,n[0],n[1],n[2])}return!e.apply(this,n)}}function lp(e){return gu(2,e)}var up=Yk(function(e,n){n=n.length==1&&M(n[0])?le(n[0],He(K())):le(Te(n,1),He(K()));var r=n.length;return H(function(t){for(var s=-1,o=je(t.length,r);++s<o;)t[s]=n[s].call(this,t[s]);return Ue(e,this,t)})}),bi=H(function(e,n){var r=Vn(n,fr(bi));return Bn(e,ie,a,n,r)}),pu=H(function(e,n){var r=Vn(n,fr(pu));return Bn(e,Ne,a,n,r)}),op=En(function(e,n){return Bn(e,Ve,a,a,a,n)});function gp(e,n){if(typeof e!="function")throw new en(h);return n=n===a?n:L(n),H(e,n)}function dp(e,n){if(typeof e!="function")throw new en(h);return n=n==null?0:he(L(n),0),H(function(r){var t=r[n],s=Dn(r,0,n);return t&&In(s,t),Ue(e,this,s)})}function kp(e,n,r){var t=!0,s=!0;if(typeof e!="function")throw new en(h);return ue(r)&&(t="leading"in r?!!r.leading:t,s="trailing"in r?!!r.trailing:s),vu(e,n,{leading:t,maxWait:n,trailing:s})}function mp(e){return ou(e,1)}function vp(e,n){return bi(ri(n),e)}function pp(){if(!arguments.length)return[];var e=arguments[0];return M(e)?e:[e]}function yp(e){return rn(e,O)}function fp(e,n){return n=typeof n=="function"?n:a,rn(e,O,n)}function bp(e){return rn(e,S|O)}function hp(e,n){return n=typeof n=="function"?n:a,rn(e,S|O,n)}function cp(e,n){return n==null||rl(e,n,qe(n))}function kn(e,n){return e===n||e!==e&&n!==n}var qp=Pt(Ga),wp=Pt(function(e,n){return e>=n}),er=ul(function(){return arguments}())?ul:function(e){return ge(e)&&X.call(e,"callee")&&!Ys.call(e,"callee")},M=b.isArray,Tp=_s?He(_s):Nk;function xe(e){return e!=null&&Gt(e.length)&&!Sn(e)}function ve(e){return ge(e)&&xe(e)}function Ap(e){return e===!0||e===!1||ge(e)&&Ee(e)==Rr}var Gn=Vd||_i,jp=Ss?He(Ss):Ok;function Rp(e){return ge(e)&&e.nodeType===1&&!Wr(e)}function Bp(e){if(e==null)return!0;if(xe(e)&&(M(e)||typeof e=="string"||typeof e.splice=="function"||Gn(e)||br(e)||er(e)))return!e.length;var n=Re(e);if(n==un||n==on)return!e.size;if(Cr(e))return!Wa(e).length;for(var r in e)if(X.call(e,r))return!1;return!0}function Ep(e,n){return Hr(e,n)}function _p(e,n,r){r=typeof r=="function"?r:a;var t=r?r(e,n):a;return t===a?Hr(e,n,a,r):!!t}function hi(e){if(!ge(e))return!1;var n=Ee(e);return n==rt||n==Xo||typeof e.message=="string"&&typeof e.name=="string"&&!Wr(e)}function Sp(e){return typeof e=="number"&&Js(e)}function Sn(e){if(!ue(e))return!1;var n=Ee(e);return n==tt||n==ts||n==Zo||n==eg}function yu(e){return typeof e=="number"&&e==L(e)}function Gt(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Ze}function ue(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}function ge(e){return e!=null&&typeof e=="object"}var fu=Ns?He(Ns):Kk;function Np(e,n){return e===n||$a(e,n,oi(n))}function Op(e,n,r){return r=typeof r=="function"?r:a,$a(e,n,oi(n),r)}function xp(e){return bu(e)&&e!=+e}function Kp(e){if(fm(e))throw new I(f);return ol(e)}function Pp(e){return e===null}function Fp(e){return e==null}function bu(e){return typeof e=="number"||ge(e)&&Ee(e)==Er}function Wr(e){if(!ge(e)||Ee(e)!=Tn)return!1;var n=ft(e);if(n===null)return!0;var r=X.call(n,"constructor")&&n.constructor;return typeof r=="function"&&r instanceof r&&mt.call(r)==Od}var ci=Os?He(Os):Pk;function Ip(e){return yu(e)&&e>=-9007199254740991&&e<=Ze}var hu=xs?He(xs):Fk;function Ct(e){return typeof e=="string"||!M(e)&&ge(e)&&Ee(e)==Sr}function Ge(e){return typeof e=="symbol"||ge(e)&&Ee(e)==at}var br=Ks?He(Ks):Ik;function Vp(e){return e===a}function Mp(e){return ge(e)&&Re(e)==Nr}function Lp(e){return ge(e)&&Ee(e)==rg}var Up=Pt(Ya),Hp=Pt(function(e,n){return e<=n});function cu(e){if(!e)return[];if(xe(e))return Ct(e)?gn(e):Oe(e);if(Kr&&e[Kr])return cd(e[Kr]());var n=Re(e),r=n==un?Pa:n==on?gt:hr;return r(e)}function Nn(e){if(!e)return e===0?e:0;if(e=sn(e),e===Le||e===-1/0){var n=e<0?-1:1;return n*rs}return e===e?e:0}function L(e){var n=Nn(e),r=n%1;return n===n?r?n-r:n:0}function qu(e){return e?Jn(L(e),0,yn):0}function sn(e){if(typeof e=="number")return e;if(Ge(e))return et;if(ue(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=ue(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=Ls(e);var r=Tg.test(e);return r||jg.test(e)?td(e.slice(2),r?2:8):wg.test(e)?et:+e}function wu(e){return bn(e,Ke(e))}function Dp(e){return e?Jn(L(e),-9007199254740991,Ze):e===0?e:0}function Z(e){return e==null?"":De(e)}var Gp=pr(function(e,n){if(Cr(n)||xe(n)){bn(n,qe(n),e);return}for(var r in n)X.call(n,r)&&Mr(e,r,n[r])}),Tu=pr(function(e,n){bn(n,Ke(n),e)}),$t=pr(function(e,n,r,t){bn(n,Ke(n),e,t)}),Cp=pr(function(e,n,r,t){bn(n,qe(n),e,t)}),$p=En(Ua);function Wp(e,n){var r=vr(e);return n==null?r:nl(r,n)}var Yp=H(function(e,n){e=re(e);var r=-1,t=n.length,s=t>2?n[2]:a;for(s&&_e(n[0],n[1],s)&&(t=1);++r<t;)for(var o=n[r],k=Ke(o),v=-1,y=k.length;++v<y;){var w=k[v],T=e[w];(T===a||kn(T,dr[w])&&!X.call(e,w))&&(e[w]=o[w])}return e}),zp=H(function(e){return e.push(a,Ll),Ue(Au,a,e)});function Jp(e,n){return Fs(e,K(n,3),fn)}function Zp(e,n){return Fs(e,K(n,3),Da)}function Xp(e,n){return e==null?e:Ha(e,K(n,3),Ke)}function Qp(e,n){return e==null?e:sl(e,K(n,3),Ke)}function ey(e,n){return e&&fn(e,K(n,3))}function ny(e,n){return e&&Da(e,K(n,3))}function ry(e){return e==null?[]:Bt(e,qe(e))}function ty(e){return e==null?[]:Bt(e,Ke(e))}function qi(e,n,r){var t=e==null?a:Zn(e,n);return t===a?r:t}function ay(e,n){return e!=null&&Dl(e,n,Bk)}function wi(e,n){return e!=null&&Dl(e,n,Ek)}var iy=Pl(function(e,n,r){n!=null&&typeof n.toString!="function"&&(n=vt.call(n)),e[n]=r},Ai(Pe)),sy=Pl(function(e,n,r){n!=null&&typeof n.toString!="function"&&(n=vt.call(n)),X.call(e,n)?e[n].push(r):e[n]=[r]},K),ly=H(Ur);function qe(e){return xe(e)?Qs(e):Wa(e)}function Ke(e){return xe(e)?Qs(e,!0):Vk(e)}function uy(e,n){var r={};return n=K(n,3),fn(e,function(t,s,o){Rn(r,n(t,s,o),t)}),r}function oy(e,n){var r={};return n=K(n,3),fn(e,function(t,s,o){Rn(r,s,n(t,s,o))}),r}var gy=pr(function(e,n,r){Et(e,n,r)}),Au=pr(function(e,n,r,t){Et(e,n,r,t)}),dy=En(function(e,n){var r={};if(e==null)return r;var t=!1;n=le(n,function(o){return o=Hn(o,e),t||(t=o.length>1),o}),bn(e,li(e),r),t&&(r=rn(r,S|V|O,im));for(var s=n.length;s--;)Qa(r,n[s]);return r});function ky(e,n){return ju(e,Dt(K(n)))}var my=En(function(e,n){return e==null?{}:Lk(e,n)});function ju(e,n){if(e==null)return{};var r=le(li(e),function(t){return[t]});return n=K(n),yl(e,r,function(t,s){return n(t,s[0])})}function vy(e,n,r){n=Hn(n,e);var t=-1,s=n.length;for(s||(s=1,e=a);++t<s;){var o=e==null?a:e[hn(n[t])];o===a&&(t=s,o=r),e=Sn(o)?o.call(e):o}return e}function py(e,n,r){return e==null?e:Dr(e,n,r)}function yy(e,n,r,t){return t=typeof t=="function"?t:a,e==null?e:Dr(e,n,r,t)}var Ru=Vl(qe),Bu=Vl(Ke);function fy(e,n,r){var t=M(e),s=t||Gn(e)||br(e);if(n=K(n,4),r==null){var o=e&&e.constructor;s?r=t?new o:[]:ue(e)?r=Sn(o)?vr(ft(e)):{}:r={}}return(s?Qe:fn)(e,function(k,v,y){return n(r,k,v,y)}),r}function by(e,n){return e==null?!0:Qa(e,n)}function hy(e,n,r){return e==null?e:ql(e,n,ri(r))}function cy(e,n,r,t){return t=typeof t=="function"?t:a,e==null?e:ql(e,n,ri(r),t)}function hr(e){return e==null?[]:Ka(e,qe(e))}function qy(e){return e==null?[]:Ka(e,Ke(e))}function wy(e,n,r){return r===a&&(r=n,n=a),r!==a&&(r=sn(r),r=r===r?r:0),n!==a&&(n=sn(n),n=n===n?n:0),Jn(sn(e),n,r)}function Ty(e,n,r){return n=Nn(n),r===a?(r=n,n=0):r=Nn(r),e=sn(e),_k(e,n,r)}function Ay(e,n,r){if(r&&typeof r!="boolean"&&_e(e,n,r)&&(n=r=a),r===a&&(typeof n=="boolean"?(r=n,n=a):typeof e=="boolean"&&(r=e,e=a)),e===a&&n===a?(e=0,n=1):(e=Nn(e),n===a?(n=e,e=0):n=Nn(n)),e>n){var t=e;e=n,n=t}if(r||e%1||n%1){var s=Zs();return je(e+s*(n-e+rd("1e-"+((s+"").length-1))),n)}return Ja(e,n)}var jy=yr(function(e,n,r){return n=n.toLowerCase(),e+(r?Eu(n):n)});function Eu(e){return Ti(Z(e).toLowerCase())}function _u(e){return e=Z(e),e&&e.replace(Bg,pd).replace($g,"")}function Ry(e,n,r){e=Z(e),n=De(n);var t=e.length;r=r===a?t:Jn(L(r),0,t);var s=r;return r-=n.length,r>=0&&e.slice(r,s)==n}function By(e){return e=Z(e),e&&lg.test(e)?e.replace(ss,yd):e}function Ey(e){return e=Z(e),e&&mg.test(e)?e.replace(ba,"\\$&"):e}var _y=yr(function(e,n,r){return e+(r?"-":"")+n.toLowerCase()}),Sy=yr(function(e,n,r){return e+(r?" ":"")+n.toLowerCase()}),Ny=Ol("toLowerCase");function Oy(e,n,r){e=Z(e),n=L(n);var t=n?or(e):0;if(!n||t>=n)return e;var s=(n-t)/2;return Kt(qt(s),r)+e+Kt(ct(s),r)}function xy(e,n,r){e=Z(e),n=L(n);var t=n?or(e):0;return n&&t<n?e+Kt(n-t,r):e}function Ky(e,n,r){e=Z(e),n=L(n);var t=n?or(e):0;return n&&t<n?Kt(n-t,r)+e:e}function Py(e,n,r){return r||n==null?n=0:n&&(n=+n),Hd(Z(e).replace(ha,""),n||0)}function Fy(e,n,r){return(r?_e(e,n,r):n===a)?n=1:n=L(n),Za(Z(e),n)}function Iy(){var e=arguments,n=Z(e[0]);return e.length<3?n:n.replace(e[1],e[2])}var Vy=yr(function(e,n,r){return e+(r?"_":"")+n.toLowerCase()});function My(e,n,r){return r&&typeof r!="number"&&_e(e,n,r)&&(n=r=a),r=r===a?yn:r>>>0,r?(e=Z(e),e&&(typeof n=="string"||n!=null&&!ci(n))&&(n=De(n),!n&&ur(e))?Dn(gn(e),0,r):e.split(n,r)):[]}var Ly=yr(function(e,n,r){return e+(r?" ":"")+Ti(n)});function Uy(e,n,r){return e=Z(e),r=r==null?0:Jn(L(r),0,e.length),n=De(n),e.slice(r,r+n.length)==n}function Hy(e,n,r){var t=l.templateSettings;r&&_e(e,n,r)&&(n=a),e=Z(e),n=$t({},n,t,Ml);var s=$t({},n.imports,t.imports,Ml),o=qe(s),k=Ka(s,o),v,y,w=0,T=n.interpolate||it,j="__p += '",B=Fa((n.escape||it).source+"|"+T.source+"|"+(T===ls?qg:it).source+"|"+(n.evaluate||it).source+"|$","g"),x="//# sourceURL="+(X.call(n,"sourceURL")?(n.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Zg+"]")+`
`;e.replace(B,function(F,D,C,Ce,Se,$e){return C||(C=Ce),j+=e.slice(w,$e).replace(Eg,fd),D&&(v=!0,j+=`' +
__e(`+D+`) +
'`),Se&&(y=!0,j+=`';
`+Se+`;
__p += '`),C&&(j+=`' +
((__t = (`+C+`)) == null ? '' : __t) +
'`),w=$e+F.length,F}),j+=`';
`;var P=X.call(n,"variable")&&n.variable;if(!P)j=`with (obj) {
`+j+`
}
`;else if(hg.test(P))throw new I(q);j=(y?j.replace(tg,""):j).replace(ag,"$1").replace(ig,"$1;"),j="function("+(P||"obj")+`) {
`+(P?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(v?", __e = _.escape":"")+(y?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+j+`return __p
}`;var U=Nu(function(){return z(o,x+"return "+j).apply(a,k)});if(U.source=j,hi(U))throw U;return U}function Dy(e){return Z(e).toLowerCase()}function Gy(e){return Z(e).toUpperCase()}function Cy(e,n,r){if(e=Z(e),e&&(r||n===a))return Ls(e);if(!e||!(n=De(n)))return e;var t=gn(e),s=gn(n),o=Us(t,s),k=Hs(t,s)+1;return Dn(t,o,k).join("")}function $y(e,n,r){if(e=Z(e),e&&(r||n===a))return e.slice(0,Gs(e)+1);if(!e||!(n=De(n)))return e;var t=gn(e),s=Hs(t,gn(n))+1;return Dn(t,0,s).join("")}function Wy(e,n,r){if(e=Z(e),e&&(r||n===a))return e.replace(ha,"");if(!e||!(n=De(n)))return e;var t=gn(e),s=Us(t,gn(n));return Dn(t,s).join("")}function Yy(e,n){var r=wn,t=oe;if(ue(n)){var s="separator"in n?n.separator:s;r="length"in n?L(n.length):r,t="omission"in n?De(n.omission):t}e=Z(e);var o=e.length;if(ur(e)){var k=gn(e);o=k.length}if(r>=o)return e;var v=r-or(t);if(v<1)return t;var y=k?Dn(k,0,v).join(""):e.slice(0,v);if(s===a)return y+t;if(k&&(v+=y.length-v),ci(s)){if(e.slice(v).search(s)){var w,T=y;for(s.global||(s=Fa(s.source,Z(us.exec(s))+"g")),s.lastIndex=0;w=s.exec(T);)var j=w.index;y=y.slice(0,j===a?v:j)}}else if(e.indexOf(De(s),v)!=v){var B=y.lastIndexOf(s);B>-1&&(y=y.slice(0,B))}return y+t}function zy(e){return e=Z(e),e&&sg.test(e)?e.replace(is,Ad):e}var Jy=yr(function(e,n,r){return e+(r?" ":"")+n.toUpperCase()}),Ti=Ol("toUpperCase");function Su(e,n,r){return e=Z(e),n=r?a:n,n===a?hd(e)?Bd(e):gd(e):e.match(n)||[]}var Nu=H(function(e,n){try{return Ue(e,a,n)}catch(r){return hi(r)?r:new I(r)}}),Zy=En(function(e,n){return Qe(n,function(r){r=hn(r),Rn(e,r,fi(e[r],e))}),e});function Xy(e){var n=e==null?0:e.length,r=K();return e=n?le(e,function(t){if(typeof t[1]!="function")throw new en(h);return[r(t[0]),t[1]]}):[],H(function(t){for(var s=-1;++s<n;){var o=e[s];if(Ue(o[0],this,t))return Ue(o[1],this,t)}})}function Qy(e){return Ak(rn(e,S))}function Ai(e){return function(){return e}}function ef(e,n){return e==null||e!==e?n:e}var nf=Kl(),rf=Kl(!0);function Pe(e){return e}function ji(e){return gl(typeof e=="function"?e:rn(e,S))}function tf(e){return kl(rn(e,S))}function af(e,n){return ml(e,rn(n,S))}var sf=H(function(e,n){return function(r){return Ur(r,e,n)}}),lf=H(function(e,n){return function(r){return Ur(e,r,n)}});function Ri(e,n,r){var t=qe(n),s=Bt(n,t);r==null&&!(ue(n)&&(s.length||!t.length))&&(r=n,n=e,e=this,s=Bt(n,qe(n)));var o=!(ue(r)&&"chain"in r)||!!r.chain,k=Sn(e);return Qe(s,function(v){var y=n[v];e[v]=y,k&&(e.prototype[v]=function(){var w=this.__chain__;if(o||w){var T=e(this.__wrapped__),j=T.__actions__=Oe(this.__actions__);return j.push({func:y,args:arguments,thisArg:e}),T.__chain__=w,T}return y.apply(e,In([this.value()],arguments))})}),e}function uf(){return we._===this&&(we._=xd),this}function Bi(){}function of(e){return e=L(e),H(function(n){return vl(n,e)})}var gf=ai(le),df=ai(Ps),kf=ai(_a);function Ou(e){return di(e)?Sa(hn(e)):Uk(e)}function mf(e){return function(n){return e==null?a:Zn(e,n)}}var vf=Fl(),pf=Fl(!0);function Ei(){return[]}function _i(){return!1}function yf(){return{}}function ff(){return""}function bf(){return!0}function hf(e,n){if(e=L(e),e<1||e>Ze)return[];var r=yn,t=je(e,yn);n=K(n),e-=yn;for(var s=xa(t,n);++r<e;)n(r);return s}function cf(e){return M(e)?le(e,hn):Ge(e)?[e]:Oe(Xl(Z(e)))}function qf(e){var n=++Nd;return Z(e)+n}var wf=xt(function(e,n){return e+n},0),Tf=ii("ceil"),Af=xt(function(e,n){return e/n},1),jf=ii("floor");function Rf(e){return e&&e.length?Rt(e,Pe,Ga):a}function Bf(e,n){return e&&e.length?Rt(e,K(n,2),Ga):a}function Ef(e){return Vs(e,Pe)}function _f(e,n){return Vs(e,K(n,2))}function Sf(e){return e&&e.length?Rt(e,Pe,Ya):a}function Nf(e,n){return e&&e.length?Rt(e,K(n,2),Ya):a}var Of=xt(function(e,n){return e*n},1),xf=ii("round"),Kf=xt(function(e,n){return e-n},0);function Pf(e){return e&&e.length?Oa(e,Pe):0}function Ff(e,n){return e&&e.length?Oa(e,K(n,2)):0}return l.after=tp,l.ary=ou,l.assign=Gp,l.assignIn=Tu,l.assignInWith=$t,l.assignWith=Cp,l.at=$p,l.before=gu,l.bind=fi,l.bindAll=Zy,l.bindKey=du,l.castArray=pp,l.chain=su,l.chunk=Am,l.compact=jm,l.concat=Rm,l.cond=Xy,l.conforms=Qy,l.constant=Ai,l.countBy=Kv,l.create=Wp,l.curry=ku,l.curryRight=mu,l.debounce=vu,l.defaults=Yp,l.defaultsDeep=zp,l.defer=ap,l.delay=ip,l.difference=Bm,l.differenceBy=Em,l.differenceWith=_m,l.drop=Sm,l.dropRight=Nm,l.dropRightWhile=Om,l.dropWhile=xm,l.fill=Km,l.filter=Fv,l.flatMap=Mv,l.flatMapDeep=Lv,l.flatMapDepth=Uv,l.flatten=ru,l.flattenDeep=Pm,l.flattenDepth=Fm,l.flip=sp,l.flow=nf,l.flowRight=rf,l.fromPairs=Im,l.functions=ry,l.functionsIn=ty,l.groupBy=Hv,l.initial=Mm,l.intersection=Lm,l.intersectionBy=Um,l.intersectionWith=Hm,l.invert=iy,l.invertBy=sy,l.invokeMap=Gv,l.iteratee=ji,l.keyBy=Cv,l.keys=qe,l.keysIn=Ke,l.map=Lt,l.mapKeys=uy,l.mapValues=oy,l.matches=tf,l.matchesProperty=af,l.memoize=Ht,l.merge=gy,l.mergeWith=Au,l.method=sf,l.methodOf=lf,l.mixin=Ri,l.negate=Dt,l.nthArg=of,l.omit=dy,l.omitBy=ky,l.once=lp,l.orderBy=$v,l.over=gf,l.overArgs=up,l.overEvery=df,l.overSome=kf,l.partial=bi,l.partialRight=pu,l.partition=Wv,l.pick=my,l.pickBy=ju,l.property=Ou,l.propertyOf=mf,l.pull=$m,l.pullAll=au,l.pullAllBy=Wm,l.pullAllWith=Ym,l.pullAt=zm,l.range=vf,l.rangeRight=pf,l.rearg=op,l.reject=Jv,l.remove=Jm,l.rest=gp,l.reverse=pi,l.sampleSize=Xv,l.set=py,l.setWith=yy,l.shuffle=Qv,l.slice=Zm,l.sortBy=rp,l.sortedUniq=av,l.sortedUniqBy=iv,l.split=My,l.spread=dp,l.tail=sv,l.take=lv,l.takeRight=uv,l.takeRightWhile=ov,l.takeWhile=gv,l.tap=jv,l.throttle=kp,l.thru=Mt,l.toArray=cu,l.toPairs=Ru,l.toPairsIn=Bu,l.toPath=cf,l.toPlainObject=wu,l.transform=fy,l.unary=mp,l.union=dv,l.unionBy=kv,l.unionWith=mv,l.uniq=vv,l.uniqBy=pv,l.uniqWith=yv,l.unset=by,l.unzip=yi,l.unzipWith=iu,l.update=hy,l.updateWith=cy,l.values=hr,l.valuesIn=qy,l.without=fv,l.words=Su,l.wrap=vp,l.xor=bv,l.xorBy=hv,l.xorWith=cv,l.zip=qv,l.zipObject=wv,l.zipObjectDeep=Tv,l.zipWith=Av,l.entries=Ru,l.entriesIn=Bu,l.extend=Tu,l.extendWith=$t,Ri(l,l),l.add=wf,l.attempt=Nu,l.camelCase=jy,l.capitalize=Eu,l.ceil=Tf,l.clamp=wy,l.clone=yp,l.cloneDeep=bp,l.cloneDeepWith=hp,l.cloneWith=fp,l.conformsTo=cp,l.deburr=_u,l.defaultTo=ef,l.divide=Af,l.endsWith=Ry,l.eq=kn,l.escape=By,l.escapeRegExp=Ey,l.every=Pv,l.find=Iv,l.findIndex=eu,l.findKey=Jp,l.findLast=Vv,l.findLastIndex=nu,l.findLastKey=Zp,l.floor=jf,l.forEach=lu,l.forEachRight=uu,l.forIn=Xp,l.forInRight=Qp,l.forOwn=ey,l.forOwnRight=ny,l.get=qi,l.gt=qp,l.gte=wp,l.has=ay,l.hasIn=wi,l.head=tu,l.identity=Pe,l.includes=Dv,l.indexOf=Vm,l.inRange=Ty,l.invoke=ly,l.isArguments=er,l.isArray=M,l.isArrayBuffer=Tp,l.isArrayLike=xe,l.isArrayLikeObject=ve,l.isBoolean=Ap,l.isBuffer=Gn,l.isDate=jp,l.isElement=Rp,l.isEmpty=Bp,l.isEqual=Ep,l.isEqualWith=_p,l.isError=hi,l.isFinite=Sp,l.isFunction=Sn,l.isInteger=yu,l.isLength=Gt,l.isMap=fu,l.isMatch=Np,l.isMatchWith=Op,l.isNaN=xp,l.isNative=Kp,l.isNil=Fp,l.isNull=Pp,l.isNumber=bu,l.isObject=ue,l.isObjectLike=ge,l.isPlainObject=Wr,l.isRegExp=ci,l.isSafeInteger=Ip,l.isSet=hu,l.isString=Ct,l.isSymbol=Ge,l.isTypedArray=br,l.isUndefined=Vp,l.isWeakMap=Mp,l.isWeakSet=Lp,l.join=Dm,l.kebabCase=_y,l.last=an,l.lastIndexOf=Gm,l.lowerCase=Sy,l.lowerFirst=Ny,l.lt=Up,l.lte=Hp,l.max=Rf,l.maxBy=Bf,l.mean=Ef,l.meanBy=_f,l.min=Sf,l.minBy=Nf,l.stubArray=Ei,l.stubFalse=_i,l.stubObject=yf,l.stubString=ff,l.stubTrue=bf,l.multiply=Of,l.nth=Cm,l.noConflict=uf,l.noop=Bi,l.now=Ut,l.pad=Oy,l.padEnd=xy,l.padStart=Ky,l.parseInt=Py,l.random=Ay,l.reduce=Yv,l.reduceRight=zv,l.repeat=Fy,l.replace=Iy,l.result=vy,l.round=xf,l.runInContext=p,l.sample=Zv,l.size=ep,l.snakeCase=Vy,l.some=np,l.sortedIndex=Xm,l.sortedIndexBy=Qm,l.sortedIndexOf=ev,l.sortedLastIndex=nv,l.sortedLastIndexBy=rv,l.sortedLastIndexOf=tv,l.startCase=Ly,l.startsWith=Uy,l.subtract=Kf,l.sum=Pf,l.sumBy=Ff,l.template=Hy,l.times=hf,l.toFinite=Nn,l.toInteger=L,l.toLength=qu,l.toLower=Dy,l.toNumber=sn,l.toSafeInteger=Dp,l.toString=Z,l.toUpper=Gy,l.trim=Cy,l.trimEnd=$y,l.trimStart=Wy,l.truncate=Yy,l.unescape=zy,l.uniqueId=qf,l.upperCase=Jy,l.upperFirst=Ti,l.each=lu,l.eachRight=uu,l.first=tu,Ri(l,function(){var e={};return fn(l,function(n,r){X.call(l.prototype,r)||(e[r]=n)}),e}(),{chain:!1}),l.VERSION=u,Qe(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){l[e].placeholder=l}),Qe(["drop","take"],function(e,n){G.prototype[e]=function(r){r=r===a?1:he(L(r),0);var t=this.__filtered__&&!n?new G(this):this.clone();return t.__filtered__?t.__takeCount__=je(r,t.__takeCount__):t.__views__.push({size:je(r,yn),type:e+(t.__dir__<0?"Right":"")}),t},G.prototype[e+"Right"]=function(r){return this.reverse()[e](r).reverse()}}),Qe(["filter","map","takeWhile"],function(e,n){var r=n+1,t=r==Me||r==Pn;G.prototype[e]=function(s){var o=this.clone();return o.__iteratees__.push({iteratee:K(s,3),type:r}),o.__filtered__=o.__filtered__||t,o}}),Qe(["head","last"],function(e,n){var r="take"+(n?"Right":"");G.prototype[e]=function(){return this[r](1).value()[0]}}),Qe(["initial","tail"],function(e,n){var r="drop"+(n?"":"Right");G.prototype[e]=function(){return this.__filtered__?new G(this):this[r](1)}}),G.prototype.compact=function(){return this.filter(Pe)},G.prototype.find=function(e){return this.filter(e).head()},G.prototype.findLast=function(e){return this.reverse().find(e)},G.prototype.invokeMap=H(function(e,n){return typeof e=="function"?new G(this):this.map(function(r){return Ur(r,e,n)})}),G.prototype.reject=function(e){return this.filter(Dt(K(e)))},G.prototype.slice=function(e,n){e=L(e);var r=this;return r.__filtered__&&(e>0||n<0)?new G(r):(e<0?r=r.takeRight(-e):e&&(r=r.drop(e)),n!==a&&(n=L(n),r=n<0?r.dropRight(-n):r.take(n-e)),r)},G.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},G.prototype.toArray=function(){return this.take(yn)},fn(G.prototype,function(e,n){var r=/^(?:filter|find|map|reject)|While$/.test(n),t=/^(?:head|last)$/.test(n),s=l[t?"take"+(n=="last"?"Right":""):n],o=t||/^find/.test(n);s&&(l.prototype[n]=function(){var k=this.__wrapped__,v=t?[1]:arguments,y=k instanceof G,w=v[0],T=y||M(k),j=function(D){var C=s.apply(l,In([D],v));return t&&B?C[0]:C};T&&r&&typeof w=="function"&&w.length!=1&&(y=T=!1);var B=this.__chain__,x=!!this.__actions__.length,P=o&&!B,U=y&&!x;if(!o&&T){k=U?k:new G(this);var F=e.apply(k,v);return F.__actions__.push({func:Mt,args:[j],thisArg:a}),new nn(F,B)}return P&&U?e.apply(this,v):(F=this.thru(j),P?t?F.value()[0]:F.value():F)})}),Qe(["pop","push","shift","sort","splice","unshift"],function(e){var n=dt[e],r=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",t=/^(?:pop|shift)$/.test(e);l.prototype[e]=function(){var s=arguments;if(t&&!this.__chain__){var o=this.value();return n.apply(M(o)?o:[],s)}return this[r](function(k){return n.apply(M(k)?k:[],s)})}}),fn(G.prototype,function(e,n){var r=l[n];if(r){var t=r.name+"";X.call(mr,t)||(mr[t]=[]),mr[t].push({name:n,func:r})}}),mr[Ot(a,ce).name]=[{name:"wrapper",func:a}],G.prototype.clone=zd,G.prototype.reverse=Jd,G.prototype.value=Zd,l.prototype.at=Rv,l.prototype.chain=Bv,l.prototype.commit=Ev,l.prototype.next=_v,l.prototype.plant=Nv,l.prototype.reverse=Ov,l.prototype.toJSON=l.prototype.valueOf=l.prototype.value=xv,l.prototype.first=l.prototype.head,Kr&&(l.prototype[Kr]=Sv),l},gr=Ed();$n?(($n.exports=gr)._=gr,ja._=gr):we._=gr}).call(ch)}(Yr,Yr.exports)),Yr.exports}var zu=qh();const wh="NORGE",Ju=i=>i??"",Th=i=>{const{adresselinje1:g,adresselinje2:a,adresselinje3:u,postNummer:d,poststed:f,land:h}=i,q=[g,a,u].filter(E=>!!E).join(", "),A=`${Ju(d)} ${Ju(f)}`,R=(h==null?void 0:h.toUpperCase())!==wh?h:void 0;return[q,A,R].map(E=>E==null?void 0:E.trim()).filter(E=>!!E).join(", ").trim()},gq=(i,g)=>[...i].sort(vo).find(a=>a.adresseType===g),dq=(i,g)=>i.length!==g.length?!1:i.every(a=>g.some(u=>zu.isEqual(a,u)))&&g.every(a=>i.some(u=>zu.isEqual(u,a))),Vi=Be(Qr);var Ah=(i=>(i[i.SOKNAD=0]="SOKNAD",i[i.FREG=1]="FREG",i[i.MEDL=2]="MEDL",i))(Ah||{});const jh=i=>{switch(i){case 0:return Vi.formatMessage({id:"FaktaKilde.Soknad"});case 1:return Vi.formatMessage({id:"FaktaKilde.FREG"});case 2:return Vi.formatMessage({id:"FaktaKilde.MEDL"});default:return Xf(i)}},po=N.forwardRef((i,g)=>m.jsx(Cn,{gap:"2",style:{display:"flex"},...i,ref:g}));po.displayName="FaktaGruppe";const Rh=({label:i,value:g,kilde:a})=>m.jsx(ea,{background:"bg-subtle",flexGrow:"1",paddingBlock:"2",paddingInline:"4",borderRadius:"medium",children:m.jsxs(Kn,{gap:"6",children:[m.jsxs("div",{children:[m.jsx(aa,{size:"small",children:i}),m.jsx(Xt,{size:"large",children:g})]}),m.jsx(Ui,{uppercase:!0,children:jh(a)})]})});po.__docgenInfo={description:"",methods:[],displayName:"FaktaGruppe"};Rh.__docgenInfo={description:"",methods:[],displayName:"FaktaBox",props:{label:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},value:{required:!0,tsType:{name:"string"},description:""},kilde:{required:!0,tsType:{name:"FaktaKilde"},description:""}}};const Bh="_boks_c3bfh_1",Eh="_harBorderLeft_c3bfh_8",_h="_harBorderTop_c3bfh_12",yo={boks:Bh,harBorderLeft:Eh,harBorderTop:_h},Sh=kb.bind(yo),Nh=({harBorderTop:i=!1,harBorderLeft:g=!0,children:a})=>m.jsx("div",{className:Sh(yo.boks,{harBorderLeft:g,harBorderTop:i}),children:a});Nh.__docgenInfo={description:"",methods:[],displayName:"Boks",props:{harBorderTop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},harBorderLeft:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const fo=({adresser:i,erAnnenpart:g=!1,harSammeAdresser:a=!1,adresseKodeverk:u})=>{if(a)return m.jsx(ea,{padding:"4",children:m.jsx(Ku,{textColor:"subtle",children:m.jsx(te,{id:"AdresseTabell.SammeAdresse"})})});const d=f=>f+1===i.length?{border:"0px"}:{};return m.jsxs(m.Fragment,{children:[i.length===0&&m.jsx(ea,{padding:"4",children:m.jsx(Ku,{textColor:"subtle",children:m.jsx(te,{id:"AdresseTabell.IngenAdresse",values:{erAnnenpart:g}})})}),i.length>0&&m.jsxs(vn,{style:{tableLayout:"fixed"},children:[m.jsx(vn.Header,{children:m.jsxs(vn.Row,{children:[m.jsx(vn.HeaderCell,{children:m.jsx(te,{id:"AdresseTabell.PeriodeLabel"})}),m.jsx(vn.HeaderCell,{children:m.jsx(te,{id:"AdresseTabell.AdresseLabel"})}),m.jsx(vn.HeaderCell,{children:m.jsx(te,{id:"AdresseTabell.TypeLabel"})})]})}),m.jsx(vn.Body,{children:i.toSorted(vo).map((f,h)=>{var q;return m.jsxs(vn.Row,{children:[m.jsx(vn.DataCell,{style:d(h),children:m.jsx(Qf,{dateStringFom:f.fom,dateStringTom:f.tom===Di?void 0:f.tom})}),m.jsx(vn.DataCell,{style:d(h),children:Th(f)}),m.jsx(vn.DataCell,{style:d(h),children:(q=u.find(A=>A.kode===f.adresseType))==null?void 0:q.navn})]},f.adresseType+f.fom+f.tom)})})]})]})};fo.__docgenInfo={description:"",methods:[],displayName:"AdresseTabell",props:{adresser:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]"},description:""},erAnnenpart:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},harSammeAdresser:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},adresseKodeverk:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""}}};const Oh=Be(Qr),xh=i=>{switch(i){case Vu.KVINNE:return Oi.female;case Vu.MANN:return Oi.male;default:return Oi.unknown}},Zt=({rolle:i="BRUKER",alleKodeverk:g,harSammeAdresser:a,navn:u,kjønn:d,sivilstand:f,fødselsdato:h,dødsdato:q,adresser:A,showIcon:R=!0})=>{var S;const E=i==="BARN";return m.jsx(ze,{value:Oh,children:m.jsx(ea,{background:"bg-subtle",padding:"4",borderRadius:"large","aria-label":u,children:m.jsxs(Kn,{gap:"1",children:[m.jsxs(Cn,{gap:"5",children:[R&&m.jsx("div",{children:m.jsx(mb,{gender:xh(d),isChild:E})}),m.jsxs("div",{children:[m.jsxs(Cn,{gap:"4",children:[m.jsx(aa,{children:m.jsx(te,{id:"PersonPanel.RolleOgNavn",values:{rolle:i,navn:u}})}),E&&h&&!q&&m.jsx(Xt,{children:m.jsx(te,{id:"PersonPanel.Fodt",values:{dato:Pu(h)}})}),q&&m.jsx(Xt,{children:m.jsx(te,{id:"PersonPanel.Dod",values:{dato:Pu(q)}})})]}),!E&&f&&m.jsx(Ui,{"aria-label":"Sivilstand",children:(S=g[ln.SIVILSTAND_TYPE].find(V=>V.kode===f))==null?void 0:S.navn})]})]}),m.jsxs(Ui,{children:[i==="BARN"&&m.jsx(te,{id:"PersonPanel.Beskrivelse.Barn",values:{rolle:i}}),i==="BRUKER"&&m.jsx(te,{id:"PersonPanel.Beskrivelse.Bruker",values:{rolle:i}}),i==="ANNEN_PART"&&m.jsx(te,{id:"PersonPanel.Beskrivelse.Annenpart",values:{rolle:i}})]}),m.jsx(fo,{harSammeAdresser:a,adresser:A,adresseKodeverk:g[ln.ADRESSE_TYPE],erAnnenpart:i==="ANNEN_PART"})]})})})};Zt.__docgenInfo={description:"",methods:[],displayName:"Personopplysninger",props:{rolle:{required:!1,tsType:{name:"union",raw:"'BARN' | 'BRUKER' | 'ANNEN_PART'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'BRUKER'"},{name:"literal",value:"'ANNEN_PART'"}]},description:"",defaultValue:{value:"'BRUKER'",computed:!1}},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},harSammeAdresser:{required:!1,tsType:{name:"boolean"},description:""},navn:{required:!1,tsType:{name:"string"},description:""},sivilstand:{required:!1,tsType:{name:"string"},description:""},dødsdato:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},fødselsdato:{required:!1,tsType:{name:"string"},description:""},adresser:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]"},description:""},kjønn:{required:!1,tsType:{name:"string"},description:""},showIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const Kh=({personoversikt:{barn:i,bruker:g,annenPart:a},alleKodeverk:u})=>m.jsxs(Kn,{gap:"2",children:[i.map(d=>m.jsx(Zt,{...d,alleKodeverk:u,rolle:"BARN"},d.aktoerId)),m.jsx(Zt,{rolle:"BRUKER",alleKodeverk:u,...g}),a&&m.jsx(Zt,{...a,rolle:"ANNEN_PART",alleKodeverk:u})]});Kh.__docgenInfo={description:"",methods:[],displayName:"PersonopplysningerForFamilie",props:{alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},personoversikt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  bruker: PersonopplysningerBasis;
  annenPart?: PersonopplysningerBasis;
  barn: PersonopplysningerBasis[];
}`,signature:{properties:[{key:"bruker",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"annenPart",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"barn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}],raw:"PersonopplysningerBasis[]",required:!0}}]}}],raw:`Readonly<{
  bruker: PersonopplysningerBasis;
  annenPart?: PersonopplysningerBasis;
  barn: PersonopplysningerBasis[];
}>`},description:""}}};const bo={"RegistrereVergeInfoPanel.CheckInformation":"Fyll ut og kontroller vergeopplysninger","Verge.KontaktPerson":"Kontaktperson","Verge.Navn":"Navn","Verge.Mandat":"Mandat","Verge.FodselsNummer":"Fødselsnummer","Verge.PeriodeFOM":"Periode f.o.m.","Verge.PeriodeTOM":"Periode t.o.m.","Verge.TypeVerge":"Type verge","Verge.VergeFullmektig":"Verge/fullmektig","Verge.Soker":"Søker","Verge.BrukerErUnderTvungenForvaltning":"Søker er under tvungen forvaltning","Verge.Organisasjonsnummer":"Organisasjonsnummer"},cr=Be(bo),cn=({readOnly:i,vergetyper:g=[],valgtVergeType:a})=>m.jsxs(Kn,{gap:"4",children:[m.jsx(zr,{name:"vergeType",label:cr.formatMessage({id:"Verge.TypeVerge"}),validate:[Fe],selectValues:g.map(u=>m.jsx("option",{value:u.kode,children:u.navn},u.kode)),readOnly:i}),a&&m.jsxs(m.Fragment,{children:[m.jsxs(Cn,{gap:"4",children:[m.jsx(Ni,{name:"navn",label:cr.formatMessage({id:"Verge.Navn"}),validate:[Fe,lb],readOnly:i}),a===Zi.ADVOKAT?m.jsx(Ni,{name:"organisasjonsnummer",label:cr.formatMessage({id:"Verge.Organisasjonsnummer"}),validate:[Fe,ub],readOnly:i}):m.jsx(Ni,{name:"fnr",label:cr.formatMessage({id:"Verge.FodselsNummer"}),validate:[Fe,ob],readOnly:i})]}),m.jsxs(Cn,{gap:"4",children:[m.jsx(Fu,{name:"gyldigFom",label:cr.formatMessage({id:"Verge.PeriodeFOM"}),validate:[Fe,Iu],isReadOnly:i}),m.jsx(Fu,{name:"gyldigTom",label:cr.formatMessage({id:"Verge.PeriodeTOM"}),validate:[Iu],isReadOnly:i})]})]})]});cn.buildInitialValues=i=>({...i,gyldigTom:(i==null?void 0:i.gyldigTom)??void 0});cn.transformValues=i=>({vergeType:i.vergeType,navn:i.navn,gyldigFom:i.gyldigFom,gyldigTom:i.gyldigTom,...i.vergeType===Zi.ADVOKAT?{organisasjonsnummer:i.organisasjonsnummer}:{fnr:i.fnr}});cn.__docgenInfo={description:`RegistrereVergeFaktaForm

Formkomponent. Registrering og oppdatering av verge.`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"verge",optional:!1,type:{name:"union",raw:"Verge | undefined",elements:[{name:"intersection",raw:`{
  navn: string;
  gyldigFom: string;
  gyldigTom: string | null;
  vergeType: string;
} & OneOf<{ fnr: string }, { organisasjonsnummer: string }>`,elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  gyldigFom: string;
  gyldigTom: string | null;
  vergeType: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"gyldigFom",value:{name:"string",required:!0}},{key:"gyldigTom",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vergeType",value:{name:"string",required:!0}}]}},{name:"union",raw:"(T & { [K in keyof U]?: never }) | (U & { [K in keyof T]?: never })",elements:[{name:"unknown"},{name:"unknown"}]}]},{name:"undefined"}]}}],returns:{type:{name:"signature",type:"object",raw:`{
  navn?: string;
  gyldigFom?: string;
  gyldigTom?: string;
  fnr?: string;
  organisasjonsnummer?: string;
  vergeType?: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!1}},{key:"gyldigFom",value:{name:"string",required:!1}},{key:"gyldigTom",value:{name:"string",required:!1}},{key:"fnr",value:{name:"string",required:!1}},{key:"organisasjonsnummer",value:{name:"string",required:!1}},{key:"vergeType",value:{name:"string",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"signature",type:"object",raw:`{
  navn?: string;
  gyldigFom?: string;
  gyldigTom?: string;
  fnr?: string;
  organisasjonsnummer?: string;
  vergeType?: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!1}},{key:"gyldigFom",value:{name:"string",required:!1}},{key:"gyldigTom",value:{name:"string",required:!1}},{key:"fnr",value:{name:"string",required:!1}},{key:"organisasjonsnummer",value:{name:"string",required:!1}},{key:"vergeType",value:{name:"string",required:!1}}]},alias:"VergeFormValues"}}],returns:{type:{name:"intersection",raw:`{
  navn: string;
  gyldigFom: string;
  gyldigTom?: string;
  vergeType: string;
} & OneOf<{ fnr: string }, { organisasjonsnummer: string }>`,elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  gyldigFom: string;
  gyldigTom?: string;
  vergeType: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"gyldigFom",value:{name:"string",required:!0}},{key:"gyldigTom",value:{name:"string",required:!1}},{key:"vergeType",value:{name:"string",required:!0}}]}},{name:"union",raw:"(T & { [K in keyof U]?: never }) | (U & { [K in keyof T]?: never })",elements:[{name:"unknown"},{name:"unknown"}]}]}}}],displayName:"RegistrereVergeForm",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},vergetyper:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:"",defaultValue:{value:"[]",computed:!1}},valgtVergeType:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""}}};const Ph=(i,g)=>({...jr.initialValues(g),...cn.buildInitialValues(i)}),Fh=i=>({kode:ro.AVKLAR_VERGE,...cn.transformValues(i),...jr.transformValues(i)}),ho=({submittable:i,verge:g,alleKodeverk:a})=>{const u=wr(),{aksjonspunkterForPanel:d,submitCallback:f,alleMerknaderFraBeslutter:h,harÅpneAksjonspunkter:q,isReadOnly:A}=Cf(),{mellomlagretFormData:R,setMellomlagretFormData:E}=$f(),S=Tr({defaultValues:R||Ph(g,d),shouldUnregister:!0}),V=S.watch("vergeType"),O=S.watch("begrunnelse"),J=N.useMemo(()=>a[ln.VERGE_TYPE].sort((me,W)=>me.navn.localeCompare(W.navn)),[a[ln.VERGE_TYPE]]);return m.jsxs(m.Fragment,{children:[q&&m.jsx(eb,{children:u.formatMessage({id:"RegistrereVergeInfoPanel.CheckInformation"})}),m.jsx(Ar,{formMethods:S,onSubmit:me=>f(Fh(me)),setDataOnUnmount:E,children:m.jsxs(Kn,{gap:"6",children:[m.jsx(nb,{merknaderFraBeslutter:h[ro.AVKLAR_VERGE],children:m.jsx(cn,{readOnly:A||d.length===0,vergetyper:J,valgtVergeType:V})}),d.length!==0&&m.jsxs(m.Fragment,{children:[m.jsx(jr,{isSubmittable:i,isReadOnly:A,hasBegrunnelse:!!O}),m.jsx(mo,{isSubmittable:i&&!!V,isReadOnly:A,isSubmitting:S.formState.isSubmitting,isDirty:S.formState.isDirty})]})]})})]})};ho.__docgenInfo={description:`RegistrereVergeInfoPanel

Presentasjonskomponent. Har ansvar for å sette opp formen for att registrere verge.`,methods:[],displayName:"RegistrereVergeInfoPanel",props:{alleKodeverk:{required:!0,tsType:{name:"union",raw:"AlleKodeverk | AlleKodeverkTilbakekreving",elements:[{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},{name:"Record",elements:[{name:"TilbakekrevingKodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<TilbakekrevingKodeverkType, KodeverkMedNavn[]>"}]},description:""},verge:{required:!0,tsType:{name:"union",raw:"Verge | undefined",elements:[{name:"intersection",raw:`{
  navn: string;
  gyldigFom: string;
  gyldigTom: string | null;
  vergeType: string;
} & OneOf<{ fnr: string }, { organisasjonsnummer: string }>`,elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  gyldigFom: string;
  gyldigTom: string | null;
  vergeType: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"gyldigFom",value:{name:"string",required:!0}},{key:"gyldigTom",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vergeType",value:{name:"string",required:!0}}]}},{name:"union",raw:"(T & { [K in keyof U]?: never }) | (U & { [K in keyof T]?: never })",elements:[{name:"unknown"},{name:"unknown"}]}]},{name:"undefined"}]},description:""},submittable:{required:!0,tsType:{name:"boolean"},description:""}}};const Ih=Be(bo),Vh=({verge:i,alleKodeverk:g,submittable:a})=>m.jsx(ze,{value:Ih,children:m.jsx(ho,{verge:i,alleKodeverk:g,submittable:a})});Vh.__docgenInfo={description:"",methods:[],displayName:"VergeFaktaIndex",props:{verge:{required:!0,tsType:{name:"union",raw:"Verge | undefined",elements:[{name:"intersection",raw:`{
  navn: string;
  gyldigFom: string;
  gyldigTom: string | null;
  vergeType: string;
} & OneOf<{ fnr: string }, { organisasjonsnummer: string }>`,elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  gyldigFom: string;
  gyldigTom: string | null;
  vergeType: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"gyldigFom",value:{name:"string",required:!0}},{key:"gyldigTom",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vergeType",value:{name:"string",required:!0}}]}},{name:"union",raw:"(T & { [K in keyof U]?: never }) | (U & { [K in keyof T]?: never })",elements:[{name:"unknown"},{name:"unknown"}]}]},{name:"undefined"}]},description:""},alleKodeverk:{required:!0,tsType:{name:"union",raw:"AlleKodeverk | AlleKodeverkTilbakekreving",elements:[{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},{name:"Record",elements:[{name:"TilbakekrevingKodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<TilbakekrevingKodeverkType, KodeverkMedNavn[]>"}]},description:""},submittable:{required:!0,tsType:{name:"boolean"},description:""}}};const qr=Be(ua),Mh=i=>qr.formatMessage({id:i?"MenyVergeIndex.OpprettVerge":"MenyVergeIndex.FjernVerge"}),co=({verge:i,type:g,fjernVerge:a,opprettVerge:u,lukkModal:d,alleKodeverk:f})=>{const h=g==="FJERN",q=Tr({defaultValues:cn.buildInitialValues(i)}),A=E=>{h?a():u(cn.transformValues(E)),d()},R=q.watch("vergeType");return N.useEffect(()=>{i&&q.reset(cn.buildInitialValues(i))},[i]),m.jsx(ze,{value:qr,children:m.jsx(Ar,{formMethods:q,onSubmit:A,children:m.jsxs(ke,{open:!0,width:"small",onClose:d,"aria-label":qr.formatMessage({id:h?"MenyVergeIndex.FjernVergeSporsmal":"MenyVergeIndex.OpprettVergeSporsmal"}),children:[m.jsx(ke.Header,{closeButton:!0,children:m.jsx(Zr,{size:"medium",children:qr.formatMessage({id:h?"MenyVergeIndex.FjernVergeSporsmal":"MenyVergeIndex.OpprettVergeSporsmal"})})}),m.jsx(ke.Body,{children:m.jsx(cn,{readOnly:h,vergetyper:f[ln.VERGE_TYPE],valgtVergeType:R})}),m.jsxs(ke.Footer,{children:[m.jsx(Ye,{variant:"primary",size:"small",autoFocus:!0,type:"submit",children:qr.formatMessage({id:h?"MenyVergeIndex.Fjern":"MenyVergeIndex.Opprett"})}),m.jsx(Ye,{variant:"secondary",size:"small",onClick:d,type:"button",children:qr.formatMessage({id:"MenyVergeIndex.Avbryt"})})]})]})})})};co.__docgenInfo={description:"",methods:[],displayName:"MenyVergeIndex",props:{verge:{required:!0,tsType:{name:"union",raw:"Verge | undefined",elements:[{name:"intersection",raw:`{
  navn: string;
  gyldigFom: string;
  gyldigTom: string | null;
  vergeType: string;
} & OneOf<{ fnr: string }, { organisasjonsnummer: string }>`,elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  gyldigFom: string;
  gyldigTom: string | null;
  vergeType: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"gyldigFom",value:{name:"string",required:!0}},{key:"gyldigTom",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vergeType",value:{name:"string",required:!0}}]}},{name:"union",raw:"(T & { [K in keyof U]?: never }) | (U & { [K in keyof T]?: never })",elements:[{name:"unknown"},{name:"unknown"}]}]},{name:"undefined"}]},description:""},alleKodeverk:{required:!0,tsType:{name:"union",raw:"AlleKodeverk | AlleKodeverkTilbakekreving",elements:[{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},{name:"Record",elements:[{name:"TilbakekrevingKodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<TilbakekrevingKodeverkType, KodeverkMedNavn[]>"}]},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},type:{required:!0,tsType:{name:"union",raw:"'OPPRETT' | 'FJERN'",elements:[{name:"literal",value:"'OPPRETT'"},{name:"literal",value:"'FJERN'"}]},description:""},fjernVerge:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},opprettVerge:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: OpprettVergeParams) => void",signature:{arguments:[{type:{name:"intersection",raw:`{
  navn: string;
  gyldigFom: string;
  gyldigTom?: string;
  vergeType: string;
} & OneOf<{ fnr: string }, { organisasjonsnummer: string }>`,elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  gyldigFom: string;
  gyldigTom?: string;
  vergeType: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"gyldigFom",value:{name:"string",required:!0}},{key:"gyldigTom",value:{name:"string",required:!1}},{key:"vergeType",value:{name:"string",required:!0}}]}},{name:"union",raw:"(T & { [K in keyof U]?: never }) | (U & { [K in keyof T]?: never })",elements:[{name:"unknown"},{name:"unknown"}]}]},name:"values"}],return:{name:"void"}}},description:""}}};const Gi=Be(ua),Lh=()=>Gi.formatMessage({id:"MenyTaAvVentIndex.ResumeBehandling"}),qo=({behandlingVersjon:i,taBehandlingAvVent:g,lukkModal:a})=>{const u=N.useCallback(()=>{g(),a()},[i]);return m.jsx(ze,{value:Gi,children:m.jsx(Yi,{text:Gi.formatMessage({id:"MenyTaAvVentIndex.TaAvVent"}),showModal:!0,submit:u,cancel:a})})};qo.__docgenInfo={description:"",methods:[],displayName:"MenyTaAvVentIndex",props:{behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},taBehandlingAvVent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Uh="_modal_tyvxs_1",Hh="_selectWidth_tyvxs_6",Mi={modal:Uh,selectWidth:Hh},Dh=zi(400),wo=({handleSubmit:i,lukkModal:g,behandlendeEnheter:a,gjeldendeBehandlendeEnhetId:u,gjeldendeBehandlendeEnhetNavn:d})=>{const f=a.map((S,V)=>m.jsx("option",{value:`${V}`,children:`${S.enhetId} ${S.enhetNavn}`},S.enhetId)),h=[m.jsx("option",{disabled:!0,children:`${u} ${d}`},u)].concat(f),q=wr(),A=Tr(),R=A.watch("nyEnhet"),E=A.watch("begrunnelse");return m.jsx(Ar,{formMethods:A,onSubmit:i,children:m.jsxs(ke,{className:Mi.modal,open:!0,"aria-label":q.formatMessage({id:"EndreBehandlendeEnhetModal.ModalDescription"}),onClose:g,children:[m.jsx(ke.Header,{children:m.jsx(Zr,{size:"small",children:m.jsx(te,{id:"EndreBehandlendeEnhetModal.EndreEnhet"})})}),m.jsx(ke.Body,{children:m.jsxs(Kn,{gap:"4",children:[m.jsx(zr,{name:"nyEnhet",label:q.formatMessage({id:"EndreBehandlendeEnhetModal.NyEnhetField"}),validate:[Fe],selectValues:h,className:Mi.selectWidth}),m.jsx(na,{name:"begrunnelse",label:q.formatMessage({id:"EndreBehandlendeEnhetModal.BegrunnelseField"}),validate:[Fe,Dh,ra],maxLength:400})]})}),m.jsxs(ke.Footer,{children:[m.jsx(Ye,{size:"small",variant:"primary",className:Mi.button,disabled:!(R&&E),children:q.formatMessage({id:"EndreBehandlendeEnhetModal.Ok"})}),m.jsx(Ye,{size:"small",variant:"secondary",onClick:g,type:"button",children:q.formatMessage({id:"EndreBehandlendeEnhetModal.Avbryt"})})]})]})})};wo.__docgenInfo={description:`EndreBehandlendeEnhetModal

Denne modalen vises når saksbehandler valger 'Bytt behandlende enhet'.
Ved å angi ny enhet og begrunnelse og trykke på 'OK' blir behandlende enhet endret.`,methods:[],displayName:"EndreBehandlendeEnhetModal",props:{lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},behandlendeEnheter:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  enhetId: string;
  enhetNavn: string;
}`,signature:{properties:[{key:"enhetId",value:{name:"string",required:!0}},{key:"enhetNavn",value:{name:"string",required:!0}}]}}],raw:`{
  enhetId: string;
  enhetNavn: string;
}[]`},description:""},gjeldendeBehandlendeEnhetId:{required:!0,tsType:{name:"string"},description:""},gjeldendeBehandlendeEnhetNavn:{required:!0,tsType:{name:"string"},description:""},handleSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(formValues: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  nyEnhet: string;
  begrunnelse: string;
}`,signature:{properties:[{key:"nyEnhet",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}}]}},name:"formValues"}],return:{name:"void"}}},description:""}}};const To=Be(ua),Gh=()=>To.formatMessage({id:"MenyEndreBehandlendeEnhetIndex.ByttBehandlendeEnhet"}),Ao=({behandlingVersjon:i,behandlendeEnhetId:g,behandlendeEnhetNavn:a,nyBehandlendeEnhet:u,behandlendeEnheter:d,lukkModal:f})=>{const h=N.useMemo(()=>d.filter(A=>A.enhetId!==g),[d]),q=N.useCallback(A=>{const R=h[parseInt(A.nyEnhet,10)],E={enhetNavn:R.enhetNavn,enhetId:R.enhetId,begrunnelse:A.begrunnelse};u(E),f()},[i,u]);return m.jsx(ze,{value:To,children:m.jsx(wo,{lukkModal:f,behandlendeEnheter:h,gjeldendeBehandlendeEnhetId:g,gjeldendeBehandlendeEnhetNavn:a,handleSubmit:q})})};Ao.__docgenInfo={description:"",methods:[],displayName:"MenyEndreBehandlendeEnhetIndex",props:{behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},behandlendeEnhetId:{required:!0,tsType:{name:"string"},description:""},behandlendeEnhetNavn:{required:!0,tsType:{name:"string"},description:""},nyBehandlendeEnhet:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { enhetNavn: string; enhetId: string; begrunnelse: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ enhetNavn: string; enhetId: string; begrunnelse: string }",signature:{properties:[{key:"enhetNavn",value:{name:"string",required:!0}},{key:"enhetId",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},behandlendeEnheter:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  enhetId: string;
  enhetNavn: string;
}`,signature:{properties:[{key:"enhetId",value:{name:"string",required:!0}},{key:"enhetNavn",value:{name:"string",required:!0}}]}}],raw:`{
  enhetId: string;
  enhetNavn: string;
}[]`},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Ch={"MenyApneForEndringerIndex.ReopenBehandling":"Åpne behandling for endringer","MenyApneForEndringerIndex.OpenBehandling":"Åpne behandling for endringer?"},Ci=Be(Ch),$h=()=>Ci.formatMessage({id:"MenyApneForEndringerIndex.ReopenBehandling"}),jo=({apneBehandlingForEndringer:i,lukkModal:g})=>{const a=()=>{i(),g()};return m.jsx(ze,{value:Ci,children:m.jsx(Yi,{text:Ci.formatMessage({id:"MenyApneForEndringerIndex.OpenBehandling"}),showModal:!0,submit:a,cancel:g})})};jo.__docgenInfo={description:"",methods:[],displayName:"MenyApneForEndringerIndex",props:{apneBehandlingForEndringer:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Wh="_modal_mgzc2_1",Yh={modal:Wh},Ro=({submitCallback:i,cancelEvent:g,saksnummer:a,fagsakMarkeringer:u,fagsakMarkeringerKodeverk:d})=>{const f=wr(),h=Tr({defaultValues:{saksnummer:a,fagsakMarkeringer:u?u.map(q=>q.fagsakMarkering):[]}});return m.jsx(Ar,{formMethods:h,onSubmit:i,children:m.jsxs(ke,{className:Yh.modal,open:!0,"aria-label":f.formatMessage({id:"MenyEndreUtlandIndex.UtlandTittel"}),onClose:g,children:[m.jsx(ke.Header,{children:m.jsx(Zr,{size:"small",children:m.jsx(te,{id:"MenyEndreUtlandIndex.UtlandTittel"})})}),m.jsx(ke.Body,{children:m.jsx(gb,{name:"fagsakMarkeringer",hideLegend:!0,checkboxes:d.map(q=>({label:q.navn,value:q.kode}))})}),m.jsxs(ke.Footer,{children:[m.jsx(Ye,{size:"small",variant:"primary",children:m.jsx(te,{id:"MenyEndreUtlandIndex.Ok"})}),m.jsx(Ye,{size:"small",variant:"secondary",onClick:g,type:"button",children:m.jsx(te,{id:"MenyEndreUtlandIndex.Avbryt"})})]})]})})};Ro.__docgenInfo={description:`EndreUtlandModal

Denne modalen vises etter at en saksbehandler har valgt opprett ny 1.gangsbehandling i behandlingsmenyen.
Ved å trykke på ok skal ny behandling(1.gangsbehandling) av sak opprettes.`,methods:[],displayName:"EndreUtlandModal",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},fagsakMarkeringer:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fagsakMarkering: string;
  kortNavn?: string;
}`,signature:{properties:[{key:"fagsakMarkering",value:{name:"string",required:!0}},{key:"kortNavn",value:{name:"string",required:!1}}]}}],raw:"Saksmarkering[]"},description:""},cancelEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(formData: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  saksnummer: string;
  fagsakMarkeringer: string[];
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"fagsakMarkeringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},name:"formData"}],return:{name:"void"}}},description:""},fagsakMarkeringerKodeverk:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""}}};const zh={"MenyEndreUtlandIndex.MenyTittel":"Endre saksmerking","MenyEndreUtlandIndex.UtlandTittel":"Saksmarkering","MenyEndreUtlandIndex.Ok":"OK","MenyEndreUtlandIndex.Avbryt":"Avbryt"},Bo=Be(zh),Jh=()=>Bo.formatMessage({id:"MenyEndreUtlandIndex.MenyTittel"}),Eo=({endreFagsakMarkering:i,lukkModal:g,...a})=>{const u=d=>{i(d),g()};return m.jsx(ze,{value:Bo,children:m.jsx(Ro,{cancelEvent:g,submitCallback:u,...a})})};Eo.__docgenInfo={description:"",methods:[],displayName:"MenyEndreUtlandIndex",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},fagsakMarkeringer:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fagsakMarkering: string;
  kortNavn?: string;
}`,signature:{properties:[{key:"fagsakMarkering",value:{name:"string",required:!0}},{key:"kortNavn",value:{name:"string",required:!1}}]}}],raw:"Saksmarkering[]"},description:""},endreFagsakMarkering:{required:!0,tsType:{name:"signature",type:"function",raw:"(formData: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  saksnummer: string;
  fagsakMarkeringer: string[];
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"fagsakMarkeringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},name:"formData"}],return:{name:"void"}}},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},fagsakMarkeringerKodeverk:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""}}};const Zh="_image_yu5bn_1",Xh="_modal_yu5bn_8",Zu={image:Zh,modal:Xh},_o=({showModal:i,closeEvent:g})=>{const a=wr();return m.jsx(ke,{className:Zu.modal,open:i,"aria-label":a.formatMessage({id:"HenlagtBehandlingModal.ModalDescription"}),onClose:g,children:m.jsx(ke.Body,{children:m.jsxs(Cn,{justify:"space-between",children:[m.jsxs(Cn,{gap:"3",children:[m.jsx(vb,{className:Zu.image,title:a.formatMessage({id:"HenlagtBehandlingModal.Henlagt"})}),m.jsxs(Kn,{gap:"1",children:[m.jsx(aa,{size:"small",children:m.jsx(te,{id:"HenlagtBehandlingModal.BehandlingenErHenlagt"})}),m.jsx(Xt,{size:"small",children:m.jsx(te,{id:"HenlagtBehandlingModal.RutetTilForsiden"})})]})]}),m.jsx(Ye,{variant:"primary",size:"small",onClick:g,autoFocus:!0,type:"button",children:m.jsx(te,{id:"HenlagtBehandlingModal.Ok"})})]})})})};_o.__docgenInfo={description:`HenlagtBehandlingModal

Denne modalen vises etter en vilkarsvurdering der behandlingsstatusen
er satt til Iverksetter vedtak. Ved å trykke på knapp blir saksbehandler tatt tilbake til sokesiden.`,methods:[],displayName:"HenlagtBehandlingModal",props:{showModal:{required:!0,tsType:{name:"boolean"},description:""},closeEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Qh="_modal_osiwa_1",ec="_button_osiwa_5",nc="_selectWidth_osiwa_9",zt={modal:Qh,button:ec,selectWidth:nc},rc=zi(1500),Xu=(i,g,a,u)=>d=>{const f={behandlingUuid:a,fagsakYtelseType:g,dokumentMal:pb.INFO_OM_HENLEGGELSE,fritekst:u,mottaker:"Søker"};i(!0,f),d.preventDefault()},So=(i,g)=>$.TILBAKEKREVING_REVURDERING===i&&de.HENLAGT_FEILOPPRETTET_MED_BREV===g,tc=(i,g,a,u)=>So(i,g)?!(g&&a&&u):!(g&&a),ac=(i,g,a)=>i===$.TILBAKEKREVING?de.HENLAGT_FEILOPPRETTET===g:i===$.TILBAKEKREVING_REVURDERING?de.HENLAGT_FEILOPPRETTET_MED_BREV===g&&!!a:[de.HENLAGT_SOKNAD_TRUKKET,de.HENLAGT_KLAGE_TRUKKET,de.HENLAGT_INNSYN_TRUKKET].some(u=>u===g),ic={[$.KLAGE]:[de.HENLAGT_KLAGE_TRUKKET,de.HENLAGT_FEILOPPRETTET],[$.ANKE]:[de.HENLAGT_ANKE_TRUKKET,de.HENLAGT_FEILOPPRETTET],[$.DOKUMENTINNSYN]:[de.HENLAGT_INNSYN_TRUKKET,de.HENLAGT_FEILOPPRETTET],[$.TILBAKEKREVING]:[de.HENLAGT_FEILOPPRETTET],[$.TILBAKEKREVING_REVURDERING]:[de.HENLAGT_FEILOPPRETTET_MED_BREV,de.HENLAGT_FEILOPPRETTET_UTEN_BREV],[$.REVURDERING]:[de.HENLAGT_SOKNAD_TRUKKET,de.HENLAGT_FEILOPPRETTET,de.HENLAGT_SOKNAD_MANGLER],[$.FORSTEGANGSSOKNAD]:[de.HENLAGT_SOKNAD_TRUKKET,de.HENLAGT_FEILOPPRETTET,de.HENLAGT_SOKNAD_MANGLER]},sc=(i,g,a)=>ic[g].filter(d=>a!==Qt.ENGANGSSTONAD||a===Qt.ENGANGSSTONAD&&d!==de.HENLAGT_SOKNAD_MANGLER).flatMap(d=>{const f=i.find(h=>h.kode===d);return f?[f]:[]}),No=({handleSubmit:i,cancelEvent:g,previewHenleggBehandling:a,behandlingUuid:u,ytelseType:d,behandlingType:f,behandlingResultatTyper:h})=>{const q=wr(),A=Tr(),R=A.watch("årsakKode"),E=A.watch("begrunnelse"),S=A.watch("fritekst"),V=ac(f,R,S),O=N.useMemo(()=>sc(h,f,d),[h,f,d]);return m.jsx(Ar,{formMethods:A,onSubmit:i,children:m.jsxs(ke,{className:zt.modal,open:!0,"aria-label":q.formatMessage({id:"HenleggBehandlingModal.ModalDescription"}),onClose:g,children:[m.jsx(ke.Header,{children:m.jsx(Zr,{size:"small",children:m.jsx(te,{id:"HenleggBehandlingModal.HenleggBehandling"})})}),m.jsx(ke.Body,{children:m.jsxs(Kn,{gap:"4",children:[m.jsx(zr,{name:"årsakKode",className:zt.selectWidth,label:q.formatMessage({id:"HenleggBehandlingModal.ArsakField"}),validate:[Fe],selectValues:O.map(J=>m.jsx("option",{value:J.kode,children:q.formatMessage({id:J.kode})},J.kode))}),m.jsx(na,{name:"begrunnelse",label:q.formatMessage({id:"HenleggBehandlingModal.BegrunnelseField"}),validate:[Fe,rc,ra],maxLength:1500}),So(f,R)&&m.jsx("div",{className:zt.fritekstTilBrevTextArea,children:m.jsx(na,{name:"fritekst",label:q.formatMessage({id:"HenleggBehandlingModal.Fritekst"}),validate:[Fe,ra],maxLength:2e3,parse:rb})}),V&&m.jsxs(Cn,{justify:"space-between",children:[m.jsx(aa,{size:"small",children:q.formatMessage({id:"HenleggBehandlingModal.SokerInformeres"})}),m.jsx(yb,{href:"#",onClick:Xu(a,d,u,S),onKeyDown:Xu(a,d,u,S),children:m.jsx(te,{id:"HenleggBehandlingModal.ForhandsvisBrev"})})]})]})}),m.jsxs(ke.Footer,{children:[m.jsx(Ye,{variant:"primary",size:"small",className:zt.button,disabled:tc(f,R,E,S),children:m.jsx(te,{id:"HenleggBehandlingModal.HenleggBehandlingSubmit"})}),m.jsx(Ye,{variant:"secondary",size:"small",onClick:g,type:"button",children:m.jsx(te,{id:"HenleggBehandlingModal.Avbryt"})})]})]})})};No.__docgenInfo={description:`HenleggBehandlingModal

Presentasjonskomponent. Denne modalen vises når saksbehandler valger 'Henlegg behandling og avslutt'.
Ved å angi årsak og begrunnelse og trykke på 'Henlegg behandling' blir behandlingen henlagt og avsluttet.`,methods:[],displayName:"HenleggBehandlingModal",props:{handleSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  årsakKode?: string;
  begrunnelse?: string;
  fritekst?: string;
}`,signature:{properties:[{key:"årsakKode",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"fritekst",value:{name:"string",required:!1}}]}},name:"values"}],return:{name:"void"}}},description:""},cancelEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},previewHenleggBehandling:{required:!0,tsType:{name:"signature",type:"function",raw:"(erHenleggelse: boolean, data: any) => void",signature:{arguments:[{type:{name:"boolean"},name:"erHenleggelse"},{type:{name:"any"},name:"data"}],return:{name:"void"}}},description:""},behandlingUuid:{required:!0,tsType:{name:"string"},description:""},ytelseType:{required:!0,tsType:{name:"string"},description:""},behandlingResultatTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},behandlingType:{required:!0,tsType:{name:"string"},description:""}}};const lc="Behandlingen er feilaktig opprettet",uc="Feilaktig opprettet - med henleggelsesbrev",oc="Feilaktig opprettet - uten henleggelsesbrev",gc="Klagen er trukket",dc="Innsynskrav er trukket",kc={"MenyHenleggIndex.HenleggBehandling":"Henlegg behandlingen og avslutt","HenleggBehandlingModal.ModalDescription":"Behandlingen henlegges","HenleggBehandlingModal.HenleggBehandling":"Henlegg behandling","HenleggBehandlingModal.ArsakField":"Velg årsak","HenleggBehandlingModal.BegrunnelseField":"Begrunnelse","HenleggBehandlingModal.Fritekst":"Fritekst til brev","HenleggBehandlingModal.HenleggBehandlingSubmit":"Henlegg behandling","HenleggBehandlingModal.Avbryt":"Avbryt","HenleggBehandlingModal.SokerInformeres":"Informer søker","HenleggBehandlingModal.ForhandsvisBrev":"Forhåndsvis brev","HenlagtBehandlingModal.ModalDescription":"Behandlingen er henlagt","HenlagtBehandlingModal.Henlagt":"Henlagt","HenlagtBehandlingModal.BehandlingenErHenlagt":"Behandlingen er henlagt","HenlagtBehandlingModal.RutetTilForsiden":"Du kommer nå til forsiden","HenlagtBehandlingModal.Ok":"OK",HENLAGT_SØKNAD_TRUKKET:"Søknaden er trukket",HENLAGT_FEILOPPRETTET:lc,HENLAGT_FEILOPPRETTET_MED_BREV:uc,HENLAGT_FEILOPPRETTET_UTEN_BREV:oc,HENLAGT_KLAGE_TRUKKET:gc,HENLAGT_INNSYN_TRUKKET:dc,HENLAGT_SØKNAD_MANGLER:"Søknad mangler"},Oo=Be(kc),mc=()=>Oo.formatMessage({id:"MenyHenleggIndex.HenleggBehandling"}),xo=({valgtBehandling:i,henleggBehandling:g,forhandsvisHenleggBehandling:a,ytelseType:u,behandlingResultatTyper:d,gaaTilSokeside:f,lukkModal:h})=>{const[q,A]=N.useState(!1),R=E=>{const S={årsakKode:E.årsakKode??"",begrunnelse:E.begrunnelse??"",fritekst:E.fritekst};g(S).then(()=>{A(!0)})};return m.jsxs(ze,{value:Oo,children:[!q&&m.jsx(No,{handleSubmit:R,cancelEvent:h,previewHenleggBehandling:a,ytelseType:u,behandlingType:i.type,behandlingUuid:i.uuid,behandlingResultatTyper:d}),q&&m.jsx(_o,{showModal:!0,closeEvent:f})]})};xo.__docgenInfo={description:"",methods:[],displayName:"MenyHenleggIndex",props:{valgtBehandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"union",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]}},{name:"null"}],required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},henleggBehandling:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { årsakKode: string; begrunnelse: string; fritekst?: string }) => Promise<any>",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ årsakKode: string; begrunnelse: string; fritekst?: string }",signature:{properties:[{key:"årsakKode",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"fritekst",value:{name:"string",required:!1}}]}},name:"params"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},forhandsvisHenleggBehandling:{required:!0,tsType:{name:"signature",type:"function",raw:"(erHenleggelse: boolean, data: any) => void",signature:{arguments:[{type:{name:"boolean"},name:"erHenleggelse"},{type:{name:"any"},name:"data"}],return:{name:"void"}}},description:""},ytelseType:{required:!0,tsType:{name:"string"},description:""},behandlingResultatTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},gaaTilSokeside:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const vc="_modal_1awdg_11",pc="_typeBredde_1awdg_29",yc="_arsakBredde_1awdg_33",Li={modal:vc,typeBredde:pc,arsakBredde:yc},fc=(i,g)=>{const a=g.some(u=>u.kode===i.kode);return m.jsx("option",{value:i.kode,disabled:!a,children:` ${i.navn} `},i.kode)},bc=[ee.ANNET,ee.FEIL_I_LOVANDVENDELSE,ee.FEIL_ELLER_ENDRET_FAKTA,ee.FEIL_REGELVERKSFORSTAELSE,ee.FEIL_PROSESSUELL],hc=[ee.BEREEGNINGSGRUNNLAG,ee.MEDLEMSKAP,ee.OPPTJENING,ee.FORDELING,ee.INNTEKT,ee.DØD,ee.SØKERS_RELASJON,ee.SØKNADSFRIST,ee.KLAGE_U_INNTK,ee.KLAGE_M_INNTK],cc=[ee.KLAGE_U_INNTK,ee.KLAGE_M_INNTK,ee.RE_ENDRET_INNTEKTSMELDING,ee.RE_ENDRING_FRA_BRUKER,ee.FØDSEL,ee.DØD,ee.ANNET,ee.INNTEKT],qc=[ee.RE_FORELDELSE,ee.RE_VILKÅR,ee.RE_KLAGE_KA,ee.RE_KLAGE_NFP,ee.RE_FEILUTBETALT_BELØP_REDUSERT],wc=(i,g,a,u)=>{if(u===$.TILBAKEKREVING_REVURDERING)return qc.flatMap(d=>{const f=a.find(h=>h.kode===d);return f?[f]:[]});if(u===$.REVURDERING){const d=i===Qt.FORELDREPENGER,f=i===Qt.SVANGERSKAPSPENGER;let h=d?hc:bc;return f&&(h=cc),g.filter(q=>h.some(A=>A===q.kode)).sort((q,A)=>q.navn.localeCompare(A.navn))}return[]},Tc=i=>[...i].sort((g,a)=>g.navn.localeCompare(a.navn)),Ac=(i,g,a={kanBehandlingOpprettes:!1,kanRevurderingOpprettes:!1})=>i.filter(u=>u.kode===$.TILBAKEKREVING?a.kanBehandlingOpprettes:u.kode===$.TILBAKEKREVING_REVURDERING?a.kanRevurderingOpprettes:g.some(d=>d.behandlingType===u.kode&&d.kanOppretteBehandling)),Ko=({submitCallback:i,cancelEvent:g,behandlingstyper:a,uuidForSistLukkede:u,ytelseType:d,behandlingOppretting:f,kanTilbakekrevingOpprettes:h,revurderingArsaker:q,tilbakekrevingRevurderingArsaker:A})=>{const R=wr(),E=Tr(),S=W=>i({...W,eksternUuid:u,fagsakYtelseType:d}),V=E.watch("behandlingType"),O=Tc(a),J=Ac(O,f,h),me=wc(d,q,A,V);return m.jsx(Ar,{formMethods:E,onSubmit:S,children:m.jsxs(ke,{className:Li.modal,open:!0,"aria-label":R.formatMessage({id:"MenyNyBehandlingIndex.ModalDescription"}),onClose:g,children:[m.jsx(ke.Header,{children:m.jsx(Zr,{size:"small",children:m.jsx(te,{id:"MenyNyBehandlingIndex.OpprettNyForstegangsbehandling"})})}),m.jsx(ke.Body,{children:m.jsxs(Kn,{gap:"4",children:[m.jsx(zr,{name:"behandlingType",label:"",validate:[Fe],selectValues:O.map(W=>fc(W,J)),className:Li.typeBredde}),V===$.FORSTEGANGSSOKNAD&&m.jsx(db,{name:"nyBehandlingEtterKlage",label:R.formatMessage({id:"MenyNyBehandlingIndex.NyBehandlingEtterKlage"})}),me.length>0&&m.jsx(zr,{name:"behandlingArsakType",label:"",hideLabel:!0,validate:[Fe],className:Li.arsakBredde,selectValues:me.map(W=>m.jsx("option",{value:W.kode,children:W.navn},W.kode))})]})}),m.jsxs(ke.Footer,{children:[m.jsx(Ye,{size:"small",variant:"primary",children:m.jsx(te,{id:"MenyNyBehandlingIndex.Ok"})}),m.jsx(Ye,{size:"small",variant:"secondary",onClick:g,type:"button",children:m.jsx(te,{id:"MenyNyBehandlingIndex.Avbryt"})})]})]})})};Ko.__docgenInfo={description:`NyBehandlingModal

Denne modalen vises etter at en saksbehandler har valgt opprett ny 1.gangsbehandling i behandlingsmenyen.
Ved å trykke på ok skal ny behandling(1.gangsbehandling) av sak opprettes.`,methods:[],displayName:"NyBehandlingModal",props:{ytelseType:{required:!0,tsType:{name:"string"},description:""},cancelEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:`(
  data: {
    eksternUuid?: string;
    fagsakYtelseType: string;
  } & FormValues,
) => void`,signature:{arguments:[{type:{name:"intersection",raw:`{
  eksternUuid?: string;
  fagsakYtelseType: string;
} & FormValues`,elements:[{name:"signature",type:"object",raw:`{
  eksternUuid?: string;
  fagsakYtelseType: string;
}`,signature:{properties:[{key:"eksternUuid",value:{name:"string",required:!1}},{key:"fagsakYtelseType",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  behandlingType?: string;
  nyBehandlingEtterKlage?: string;
  behandlingArsakType?: string;
}`,signature:{properties:[{key:"behandlingType",value:{name:"string",required:!1}},{key:"nyBehandlingEtterKlage",value:{name:"string",required:!1}},{key:"behandlingArsakType",value:{name:"string",required:!1}}]}}]},name:"data"}],return:{name:"void"}}},description:""},behandlingOppretting:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: string;
  kanOppretteBehandling: boolean;
}`,signature:{properties:[{key:"behandlingType",value:{name:"string",required:!0}},{key:"kanOppretteBehandling",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingType: string;
  kanOppretteBehandling: boolean;
}>`}],raw:"BehandlingOppretting[]"},description:""},behandlingstyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},tilbakekrevingRevurderingArsaker:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},revurderingArsaker:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},kanTilbakekrevingOpprettes:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  kanBehandlingOpprettes: boolean;
  kanRevurderingOpprettes: boolean;
}`,signature:{properties:[{key:"kanBehandlingOpprettes",value:{name:"boolean",required:!0}},{key:"kanRevurderingOpprettes",value:{name:"boolean",required:!0}}]}},description:""},uuidForSistLukkede:{required:!1,tsType:{name:"string"},description:""}}};const jc={"MenyNyBehandlingIndex.NyForstegangsbehandling":"Opprett ny behandling","MenyNyBehandlingIndex.ModalDescription":"Ny behandling","MenyNyBehandlingIndex.OpprettNyForstegangsbehandling":"Opprett ny behandling","MenyNyBehandlingIndex.NyBehandlingEtterKlage":"Behandlingen opprettes som et resultat av klagebehandling","MenyNyBehandlingIndex.Ok":"OK","MenyNyBehandlingIndex.Avbryt":"Avbryt"},Rc=[$.TILBAKEKREVING,$.TILBAKEKREVING_REVURDERING],Po=Be(jc),Bc=()=>Po.formatMessage({id:"MenyNyBehandlingIndex.NyForstegangsbehandling"}),Fo=({saksnummer:i,behandlingUuid:g,lagNyBehandling:a,lukkModal:u,...d})=>{const f=h=>{const q=!!h.behandlingType&&Rc.some(E=>E===h.behandlingType),R={saksnummer:i,...g&&q?{behandlingUuid:g}:{},...h};a({isTilbakekreving:q,params:R}),u()};return m.jsx(ze,{value:Po,children:m.jsx(Ko,{cancelEvent:u,submitCallback:f,...d})})};Fo.__docgenInfo={description:"",methods:[],displayName:"MenyNyBehandlingIndex",props:{ytelseType:{required:!0,tsType:{name:"string"},description:""},saksnummer:{required:!0,tsType:{name:"string"},description:""},behandlingUuid:{required:!1,tsType:{name:"string"},description:""},lagNyBehandling:{required:!0,tsType:{name:"signature",type:"function",raw:`(values: {
  isTilbakekreving: boolean;
  params: {
    saksnummer: string;
    behandlingUuid?: string;
  } & FormValues;
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  isTilbakekreving: boolean;
  params: {
    saksnummer: string;
    behandlingUuid?: string;
  } & FormValues;
}`,signature:{properties:[{key:"isTilbakekreving",value:{name:"boolean",required:!0}},{key:"params",value:{name:"intersection",raw:`{
  saksnummer: string;
  behandlingUuid?: string;
} & FormValues`,elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  behandlingUuid?: string;
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  behandlingType?: string;
  nyBehandlingEtterKlage?: string;
  behandlingArsakType?: string;
}`,signature:{properties:[{key:"behandlingType",value:{name:"string",required:!1}},{key:"nyBehandlingEtterKlage",value:{name:"string",required:!1}},{key:"behandlingArsakType",value:{name:"string",required:!1}}]}}],required:!0}}]}},name:"values"}],return:{name:"void"}}},description:""},behandlingstyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},tilbakekrevingRevurderingArsaker:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},revurderingArsaker:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},behandlingOppretting:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: string;
  kanOppretteBehandling: boolean;
}`,signature:{properties:[{key:"behandlingType",value:{name:"string",required:!0}},{key:"kanOppretteBehandling",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingType: string;
  kanOppretteBehandling: boolean;
}>`}],raw:"BehandlingOppretting[]"},description:""},kanTilbakekrevingOpprettes:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  kanBehandlingOpprettes: boolean;
  kanRevurderingOpprettes: boolean;
}`,signature:{properties:[{key:"kanBehandlingOpprettes",value:{name:"boolean",required:!0}},{key:"kanRevurderingOpprettes",value:{name:"boolean",required:!0}}]}},description:""},uuidForSistLukkede:{required:!1,tsType:{name:"string"},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Ec={"MenySettPaVentIndex.BehandlingOnHold":"Sett behandlingen på vent"},Io=Be(Ec),_c=()=>Io.formatMessage({id:"MenySettPaVentIndex.BehandlingOnHold"}),Vo=({settBehandlingPaVent:i,ventearsaker:g,lukkModal:a,erTilbakekreving:u})=>{const d=f=>{if(f.frist===void 0||f.ventearsak===void 0)throw new Error("Frist eller venteårsak skal være satt");const h={frist:f.frist,ventearsak:f.ventearsak};i(h),a()};return m.jsx(ze,{value:Io,children:m.jsx(fb,{showModal:!0,submitCallback:d,cancelEvent:a,ventearsaker:g,erTilbakekreving:u,hasManualPaVent:!0,frist:null,ventearsak:null})})};Vo.__docgenInfo={description:"",methods:[],displayName:"MenySettPaVentIndex",props:{settBehandlingPaVent:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { frist: string; ventearsak: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ frist: string; ventearsak: string }",signature:{properties:[{key:"frist",value:{name:"string",required:!0}},{key:"ventearsak",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},ventearsaker:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},erTilbakekreving:{required:!0,tsType:{name:"boolean"},description:""}}};const Mo=({behandling:i,setBehandling:g,lukkModal:a})=>{const u=Ji(i,g);return m.jsx(jo,{apneBehandlingForEndringer:u.åpneForEndringer,lukkModal:a})};Mo.__docgenInfo={description:"",methods:[],displayName:"ApneForEndringerMenyModal",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"union",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]}},{name:"null"}],required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},setBehandling:{required:!0,tsType:{name:"signature",type:"function",raw:"(behandling?: Behandling) => void",signature:{arguments:[{type:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"union",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]}},{name:"null"}],required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},name:"behandling"}],return:{name:"void"}}},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Lo=({behandling:i,hentOgSettBehandling:g,lukkModal:a})=>{const u=We(Wi()),d=sa(i),{mutate:f}=tr({mutationFn:h=>d.endreBehandlendeEnhet({...h,behandlingUuid:i.uuid,behandlingVersjon:i.versjon}),onSuccess:()=>g()});return m.jsx(Ao,{behandlingVersjon:i.versjon,behandlendeEnhetId:i.behandlendeEnhetId,behandlendeEnhetNavn:i.behandlendeEnhetNavn,nyBehandlendeEnhet:f,behandlendeEnheter:xn(u.data).behandlendeEnheter,lukkModal:a})};Lo.__docgenInfo={description:"",methods:[],displayName:"EndreBehandlendeEnhetMenyModal",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"union",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]}},{name:"null"}],required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},hentOgSettBehandling:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Uo=({saksnummer:i,fagsakMarkeringer:g,hentOgSettBehandling:a,lukkModal:u})=>{const d=eo(),f=ia(),h=qb(ln.FAGSAK_MARKERING).toSorted((A,R)=>A.navn.localeCompare(R.navn)),{mutate:q}=tr({mutationFn:A=>f.endreSakMarkering(A),onSuccess:()=>{a(),d.invalidateQueries({queryKey:[Hi.FETCH_FAGSAK]})}});return m.jsx(Eo,{saksnummer:i,fagsakMarkeringer:g,endreFagsakMarkering:q,lukkModal:u,fagsakMarkeringerKodeverk:h})};Uo.__docgenInfo={description:"",methods:[],displayName:"EndreFagsakMarkeringMenyModal",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},fagsakMarkeringer:{required:!0,tsType:{name:"union",raw:"Saksmarkering[] | undefined",elements:[{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fagsakMarkering: string;
  kortNavn?: string;
}`,signature:{properties:[{key:"fagsakMarkering",value:{name:"string",required:!0}},{key:"kortNavn",value:{name:"string",required:!1}}]}}],raw:"Saksmarkering[]"},{name:"undefined"}]},description:""},hentOgSettBehandling:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};class ns{constructor(g){Wt(this,"$$behandlingType");Wt(this,"$$fpSakKodeverk");Wt(this,"$$fpTilbakeKodeverk");this.$$behandlingType=g}medFpSakKodeverk(g){return this.$$fpSakKodeverk=g,this}medFpTilbakeKodeverk(g){return this.$$fpTilbakeKodeverk=g,this}getKodeverkForBehandlingstype(g,a){if(a===$.TILBAKEKREVING||a===$.TILBAKEKREVING_REVURDERING)return this.$$fpTilbakeKodeverk?this.$$fpTilbakeKodeverk[g]:void 0;if(g!==ln.AVSLAGSARSAK)return this.$$fpSakKodeverk[g];throw new Error("Avslagsårsak ikke støttet")}getKodeverkForValgtBehandling(g){return this.getKodeverkForBehandlingstype(g,this.$$behandlingType)}getKodeverkForBehandlingstyper(g,a){return g.reduce((u,d)=>{const f=this.getKodeverkForBehandlingstype(a,d);if(f){const h=f.find(q=>q.kode===d);return h?u.concat([h]):u}return u},[])}}const Ho=({behandling:i,behandlingAppKontekst:g,fagsakYtelseType:a,lukkModal:u})=>{const d=ia(),f=sa(i),{data:h}=We(d.kodeverkOptions()),{data:q}=We(d.fptilbake.kodeverkOptions()),{mutateAsync:A}=tr({mutationFn:O=>f.henleggBehandling({...O,behandlingUuid:i.uuid,behandlingVersjon:i.versjon})}),R=new ns(i.type).medFpSakKodeverk(xn(h)).medFpTilbakeKodeverk(xn(q)),E=$i(),S=()=>E("/"),V=Tb(g);return m.jsx(xo,{valgtBehandling:i,forhandsvisHenleggBehandling:V,henleggBehandling:A,ytelseType:a,behandlingResultatTyper:R.getKodeverkForValgtBehandling(ln.BEHANDLING_RESULTAT_TYPE),lukkModal:u,gaaTilSokeside:S})};Ho.__docgenInfo={description:"",methods:[],displayName:"HenleggMenyModal",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"union",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]}},{name:"null"}],required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},behandlingAppKontekst:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}`,signature:{properties:[{key:"behandlingTillatteOperasjoner",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}`,signature:{properties:[{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"VergeBehandlingmenyValg",required:!0}}]}}],raw:`Readonly<{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}>`,required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig: boolean;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"boolean",required:!0}}]}}],raw:"Brevmal[]",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"string",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"opptjeningAktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}`,signature:{properties:[{key:"aktivitetType",value:{name:"string",required:!0}},{key:"erEndring",value:{name:"boolean",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"orgnr",value:{name:"string",required:!1}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"privatpersonFødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}>`}],raw:"OpptjeningAktiviteter[]",required:!1}},{key:"beregningDto",value:{name:"signature",type:"object",raw:`{
  fastsattVarigEndringNaering: boolean;
  faktaOmBeregningTilfeller: string[];
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"boolean",required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"typeEndring",value:{name:"TypeEndring",required:!0}},{key:"erSlettet",value:{name:"boolean",required:!0}},{key:"erAvklart",value:{name:"boolean",required:!0}},{key:"erLagtTil",value:{name:"boolean",required:!0}},{key:"erEndret",value:{name:"boolean",required:!0}}]}}],raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}[]`,required:!1}}]}}],raw:`Readonly<{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}>`}],raw:"TotrinnskontrollAksjonspunkt[]",required:!0}}]}}],raw:`Readonly<{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"union",raw:"Aksjonspunkt | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`},{name:"null"}],required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"iayFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}},{key:"medlFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}>`}]},description:""},fagsakYtelseType:{required:!0,tsType:{name:"string"},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Sc=i=>{const{setIsRequestPending:g}=bb(),{onBehandlingSuccess:a}=hb(i),{mutate:u}=tr({mutationFn:async d=>{const f=d.isTilbakekreving?await zf(d.params):await Jf(d.params);return cb(f,g)},onSuccess:a});return{lagNyBehandling:u}},Nc=[$.FORSTEGANGSSOKNAD,$.KLAGE,$.REVURDERING,$.DOKUMENTINNSYN,$.TILBAKEKREVING,$.TILBAKEKREVING_REVURDERING],Oc=(i=[])=>{const g=i.find(a=>a.gjeldendeVedtak&&a.status===Wf.AVSLUTTET&&(a.type===$.FORSTEGANGSSOKNAD||a.type===$.REVURDERING));return g?g.uuid:void 0},Do=({fagsakData:i,behandlingUuid:g,lukkModal:a})=>{const u=i.getFagsak(),d=i.getAlleBehandlinger(),f=i.getBehandling(g),h=Oc(d),q=Ab().includes(ta.FPTILBAKE),A=ia(),{data:R}=We(A.kodeverkOptions()),{data:E}=We(A.fptilbake.kodeverkOptions()),S=We(Wi()),{innloggetBruker:V}=xn(S.data),O=q&&!V.kanVeilede&&h!==void 0,{data:J=!1}=We(A.fptilbake.kanTilbakekrevingOpprettesOptions(O,u.saksnummer,h)),me=(f==null?void 0:f.type)===$.TILBAKEKREVING||(f==null?void 0:f.type)===$.TILBAKEKREVING_REVURDERING,W=q&&!V.kanVeilede&&me&&!!g,{data:ce=!1}=We(A.fptilbake.kanTilbakekrevingRevurderingOpprettesOptions(W,g)),Y=new ns(f==null?void 0:f.type).medFpSakKodeverk(xn(R)).medFpTilbakeKodeverk(xn(E)),ye=$i(),Q=no(),ie=fe=>{const Ve=to(u.saksnummer,fe==null?void 0:fe.uuid);ye(ao({...Q,pathname:Ve}))},{lagNyBehandling:Ne}=Sc(ie);return m.jsx(Fo,{saksnummer:u.saksnummer,behandlingUuid:f==null?void 0:f.uuid,uuidForSistLukkede:h,behandlingOppretting:i.getBehandlingOppretting(),kanTilbakekrevingOpprettes:{kanBehandlingOpprettes:J,kanRevurderingOpprettes:ce},behandlingstyper:Y.getKodeverkForBehandlingstyper(Nc,ln.BEHANDLING_TYPE),tilbakekrevingRevurderingArsaker:Y.getKodeverkForBehandlingstype(ln.BEHANDLING_AARSAK,$.TILBAKEKREVING_REVURDERING),revurderingArsaker:Y.getKodeverkForBehandlingstype(ln.BEHANDLING_AARSAK,$.REVURDERING),ytelseType:u.fagsakYtelseType,lagNyBehandling:Ne,lukkModal:a})};Do.__docgenInfo={description:"",methods:[],displayName:"NyBehandlingMenyModal",props:{fagsakData:{required:!0,tsType:{name:"FagsakData"},description:""},behandlingUuid:{required:!1,tsType:{name:"string"},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Go=({behandling:i,hentOgSettBehandling:g,lukkModal:a})=>{const u=ia(),d=sa(i),{data:f}=We(u.kodeverkOptions()),{data:h}=We(u.fptilbake.kodeverkOptions()),{mutate:q}=tr({mutationFn:R=>d.settBehandlingPåVent({frist:R.frist,ventearsak:R.ventearsak,behandlingUuid:i.uuid,behandlingVersjon:i.versjon}),onSuccess:()=>g()}),A=new ns(i.type).medFpSakKodeverk(xn(f)).medFpTilbakeKodeverk(xn(h));return m.jsx(Vo,{settBehandlingPaVent:q,ventearsaker:A.getKodeverkForValgtBehandling(ln.VENT_AARSAK),lukkModal:a,erTilbakekreving:i.type===$.TILBAKEKREVING||i.type===$.TILBAKEKREVING_REVURDERING})};Go.__docgenInfo={description:"",methods:[],displayName:"SettPaVentMenyModal",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"union",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]}},{name:"null"}],required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},hentOgSettBehandling:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Co=({behandling:i,setBehandling:g,lukkModal:a})=>{const u=Ji(i,g);return m.jsx(qo,{behandlingVersjon:i.versjon,taBehandlingAvVent:u.gjenopptaBehandling,lukkModal:a})};Co.__docgenInfo={description:"",methods:[],displayName:"TaAvVentMenyModal",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"union",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]}},{name:"null"}],required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},setBehandling:{required:!0,tsType:{name:"signature",type:"function",raw:"(behandling: Behandling | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"Behandling | undefined",elements:[{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"union",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]}},{name:"null"}],required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},{name:"undefined"}]},name:"behandling"}],return:{name:"void"}}},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const $o=i=>Mu(i.behandling,"VERGE_FJERN_V2")||Mu(i.behandling,"VERGE_OPPRETT_V2")?m.jsx(Wo,{...i}):m.jsx(xc,{...i}),xc=({fagsak:i,behandlingAppKontekst:g,behandling:a,setBehandling:u,lukkModal:d})=>{var E;const f=(E=g.behandlingTillatteOperasjoner)==null?void 0:E.vergeBehandlingsmeny,h=$i(),q=no(),A=()=>{h(ao({...q,pathname:to(i.saksnummer,a.uuid)}))},R=Ji(a,S=>{u(S),A()});return m.jsx(ko,{fjernVerge:Jr.FJERN===f?R.fjernVergeV1:void 0,opprettVerge:Jr.OPPRETT===f?R.opprettVergeV1:void 0,lukkModal:d})},Wo=({behandlingAppKontekst:i,behandling:g,hentOgSettBehandling:a,lukkModal:u})=>{var V;const d=(V=i.behandlingTillatteOperasjoner)==null?void 0:V.vergeBehandlingsmeny,f=wb(g.type),h=eo(),q=()=>{a(),h.invalidateQueries({queryKey:[Hi.FETCH_FAGSAK]}),h.invalidateQueries({queryKey:[Hi.FETCH_FAGSAKDATA_FPTILBAKE]}),h.invalidateQueries({queryKey:[Lu.VERGE]}),h.invalidateQueries({queryKey:[Lu.VERGE_HENT]})},A=sa(g),{mutate:R}=tr({mutationFn:A.verge.opprettVergeV2,onSuccess:q}),{mutate:E}=tr({mutationFn:A.verge.fjernVergeV2,onSuccess:q}),{data:S}=We(A.verge.hent(g));return m.jsx(co,{type:Jr.OPPRETT===d?"OPPRETT":"FJERN",verge:S,opprettVerge:R,fjernVerge:E,lukkModal:u,alleKodeverk:f})};$o.__docgenInfo={description:"",methods:[],displayName:"VergeMenyModal",props:{fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  fagsakYtelseType: string;
  relasjonsRolleType: string;
  status: string;
  dekningsgrad: number;
  aktørId: string;
  harVergeIÅpenBehandling: boolean;
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  bruker: Person;
  annenPart: Person | null;
  annenpartBehandling: AnnenPartBehandling | null;
  fagsakMarkeringer?: Saksmarkering[];
  familiehendelse?: FagsakHendelse;
  behandlinger: BehandlingAppKontekst[];
  brukerManglerAdresse: boolean;
  historikkinnslag: Historikkinnslag[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"relasjonsRolleType",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}},{key:"aktørId",value:{name:"string",required:!0}},{key:"harVergeIÅpenBehandling",value:{name:"boolean",required:!0}},{key:"sakSkalTilInfotrygd",value:{name:"boolean",required:!0}},{key:"behandlingTypeKanOpprettes",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: string;
  kanOppretteBehandling: boolean;
}`,signature:{properties:[{key:"behandlingType",value:{name:"string",required:!0}},{key:"kanOppretteBehandling",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingType: string;
  kanOppretteBehandling: boolean;
}>`}],raw:"BehandlingOppretting[]",required:!0}},{key:"bruker",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  fødselsnummer: string;
  kjønn: Kjønnkode;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato: string | null;
  aktørId: string | null;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"unknown[unknown]",raw:"(typeof KjønnkodeEnum)[keyof typeof KjønnkodeEnum]",required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aktørId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  navn: string;
  fødselsnummer: string;
  kjønn: Kjønnkode;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato: string | null;
  aktørId: string | null;
}>`,required:!0}},{key:"annenPart",value:{name:"union",raw:"Person | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  fødselsnummer: string;
  kjønn: Kjønnkode;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato: string | null;
  aktørId: string | null;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"unknown[unknown]",raw:"(typeof KjønnkodeEnum)[keyof typeof KjønnkodeEnum]",required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aktørId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  navn: string;
  fødselsnummer: string;
  kjønn: Kjønnkode;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato: string | null;
  aktørId: string | null;
}>`,required:!0},{name:"null"}],required:!0}},{key:"annenpartBehandling",value:{name:"union",raw:"AnnenPartBehandling | null",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  behandlingUuid: string;
  relasjonsRolleType: string;
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"relasjonsRolleType",value:{name:"string",required:!0}}]}},{name:"null"}],required:!0}},{key:"fagsakMarkeringer",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fagsakMarkering: string;
  kortNavn?: string;
}`,signature:{properties:[{key:"fagsakMarkering",value:{name:"string",required:!0}},{key:"kortNavn",value:{name:"string",required:!1}}]}}],raw:"Saksmarkering[]",required:!1}},{key:"familiehendelse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}`,signature:{properties:[{key:"hendelseType",value:{name:"string",required:!0}},{key:"hendelseDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}>`,required:!1}},{key:"behandlinger",value:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}`,signature:{properties:[{key:"behandlingTillatteOperasjoner",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}`,signature:{properties:[{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"VergeBehandlingmenyValg",required:!0}}]}}],raw:`Readonly<{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}>`,required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig: boolean;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"boolean",required:!0}}]}}],raw:"Brevmal[]",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"string",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"opptjeningAktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}`,signature:{properties:[{key:"aktivitetType",value:{name:"string",required:!0}},{key:"erEndring",value:{name:"boolean",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"orgnr",value:{name:"string",required:!1}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"privatpersonFødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}>`}],raw:"OpptjeningAktiviteter[]",required:!1}},{key:"beregningDto",value:{name:"signature",type:"object",raw:`{
  fastsattVarigEndringNaering: boolean;
  faktaOmBeregningTilfeller: string[];
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"boolean",required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"typeEndring",value:{name:"TypeEndring",required:!0}},{key:"erSlettet",value:{name:"boolean",required:!0}},{key:"erAvklart",value:{name:"boolean",required:!0}},{key:"erLagtTil",value:{name:"boolean",required:!0}},{key:"erEndret",value:{name:"boolean",required:!0}}]}}],raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}[]`,required:!1}}]}}],raw:`Readonly<{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}>`}],raw:"TotrinnskontrollAksjonspunkt[]",required:!0}}]}}],raw:`Readonly<{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"union",raw:"Aksjonspunkt | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`},{name:"null"}],required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"iayFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}},{key:"medlFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}>`}]}],raw:"BehandlingAppKontekst[]",required:!0}},{key:"brukerManglerAdresse",value:{name:"boolean",required:!0}},{key:"historikkinnslag",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string | null;
  skjermlenke: string | null;
  dokumenter: HistorikkInnslagDokumentLink[] | null;
  tittel: string | null;
  linjer: Linje[];
}`,signature:{properties:[{key:"aktør",value:{name:"signature",type:"object",raw:`{
  type: HistorikkAktor;
  ident: string | null;
}`,signature:{properties:[{key:"type",value:{name:"HistorikkAktor",required:!0}},{key:"ident",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]},required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"skjermlenke",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"dokumenter",value:{name:"union",raw:"HistorikkInnslagDokumentLink[] | null",elements:[{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  dokumentId: string;
  journalpostId: string;
  tag: string;
  utgått: boolean;
}`,signature:{properties:[{key:"dokumentId",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"tag",value:{name:"string",required:!0}},{key:"utgått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  dokumentId: string;
  journalpostId: string;
  tag: string;
  utgått: boolean;
}>`}],raw:"HistorikkInnslagDokumentLink[]"},{name:"null"}],required:!0}},{key:"tittel",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"linjer",value:{name:"Array",elements:[{name:"union",raw:`| {
    type: 'TEKST';
    tekst: string;
  }
| { type: 'LINJESKIFT' }`,elements:[{name:"signature",type:"object",raw:`{
  type: 'TEKST';
  tekst: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:"'TEKST'",required:!0}},{key:"tekst",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:"{ type: 'LINJESKIFT' }",signature:{properties:[{key:"type",value:{name:"literal",value:"'LINJESKIFT'",required:!0}}]}}]}],raw:"Linje[]",required:!0}}]}}],raw:`Readonly<{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string | null;
  skjermlenke: string | null;
  dokumenter: HistorikkInnslagDokumentLink[] | null;
  tittel: string | null;
  linjer: Linje[];
}>`}],raw:"Historikkinnslag[]",required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"iayFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}},{key:"medlFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}>`,required:!0}},{key:"notater",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  opprettetTidspunkt: string;
  opprettetAv: string;
  notat: string;
}`,signature:{properties:[{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"opprettetAv",value:{name:"string",required:!0}},{key:"notat",value:{name:"string",required:!0}}]}}],raw:"Saksnotat[]",required:!0}}]}}],raw:`Readonly<{
  saksnummer: string;
  fagsakYtelseType: string;
  relasjonsRolleType: string;
  status: string;
  dekningsgrad: number;
  aktørId: string;
  harVergeIÅpenBehandling: boolean;
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  bruker: Person;
  annenPart: Person | null;
  annenpartBehandling: AnnenPartBehandling | null;
  fagsakMarkeringer?: Saksmarkering[];
  familiehendelse?: FagsakHendelse;
  behandlinger: BehandlingAppKontekst[];
  brukerManglerAdresse: boolean;
  historikkinnslag: Historikkinnslag[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
}>`},description:""},behandlingAppKontekst:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}`,signature:{properties:[{key:"behandlingTillatteOperasjoner",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}`,signature:{properties:[{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"VergeBehandlingmenyValg",required:!0}}]}}],raw:`Readonly<{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}>`,required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig: boolean;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"boolean",required:!0}}]}}],raw:"Brevmal[]",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"string",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"opptjeningAktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}`,signature:{properties:[{key:"aktivitetType",value:{name:"string",required:!0}},{key:"erEndring",value:{name:"boolean",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"orgnr",value:{name:"string",required:!1}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"privatpersonFødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}>`}],raw:"OpptjeningAktiviteter[]",required:!1}},{key:"beregningDto",value:{name:"signature",type:"object",raw:`{
  fastsattVarigEndringNaering: boolean;
  faktaOmBeregningTilfeller: string[];
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"boolean",required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"typeEndring",value:{name:"TypeEndring",required:!0}},{key:"erSlettet",value:{name:"boolean",required:!0}},{key:"erAvklart",value:{name:"boolean",required:!0}},{key:"erLagtTil",value:{name:"boolean",required:!0}},{key:"erEndret",value:{name:"boolean",required:!0}}]}}],raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}[]`,required:!1}}]}}],raw:`Readonly<{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}>`}],raw:"TotrinnskontrollAksjonspunkt[]",required:!0}}]}}],raw:`Readonly<{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"union",raw:"Aksjonspunkt | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`},{name:"null"}],required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"iayFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}},{key:"medlFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}>`}]},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"union",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]}},{name:"null"}],required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},setBehandling:{required:!0,tsType:{name:"signature",type:"function",raw:"(behandling: Behandling | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"Behandling | undefined",elements:[{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"union",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]}},{name:"null"}],required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},{name:"undefined"}]},name:"behandling"}],return:{name:"void"}}},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},hentOgSettBehandling:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};Wo.__docgenInfo={description:"",methods:[],displayName:"VergeModal",props:{fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  fagsakYtelseType: string;
  relasjonsRolleType: string;
  status: string;
  dekningsgrad: number;
  aktørId: string;
  harVergeIÅpenBehandling: boolean;
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  bruker: Person;
  annenPart: Person | null;
  annenpartBehandling: AnnenPartBehandling | null;
  fagsakMarkeringer?: Saksmarkering[];
  familiehendelse?: FagsakHendelse;
  behandlinger: BehandlingAppKontekst[];
  brukerManglerAdresse: boolean;
  historikkinnslag: Historikkinnslag[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"relasjonsRolleType",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}},{key:"aktørId",value:{name:"string",required:!0}},{key:"harVergeIÅpenBehandling",value:{name:"boolean",required:!0}},{key:"sakSkalTilInfotrygd",value:{name:"boolean",required:!0}},{key:"behandlingTypeKanOpprettes",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: string;
  kanOppretteBehandling: boolean;
}`,signature:{properties:[{key:"behandlingType",value:{name:"string",required:!0}},{key:"kanOppretteBehandling",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingType: string;
  kanOppretteBehandling: boolean;
}>`}],raw:"BehandlingOppretting[]",required:!0}},{key:"bruker",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  fødselsnummer: string;
  kjønn: Kjønnkode;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato: string | null;
  aktørId: string | null;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"unknown[unknown]",raw:"(typeof KjønnkodeEnum)[keyof typeof KjønnkodeEnum]",required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aktørId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  navn: string;
  fødselsnummer: string;
  kjønn: Kjønnkode;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato: string | null;
  aktørId: string | null;
}>`,required:!0}},{key:"annenPart",value:{name:"union",raw:"Person | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  fødselsnummer: string;
  kjønn: Kjønnkode;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato: string | null;
  aktørId: string | null;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"unknown[unknown]",raw:"(typeof KjønnkodeEnum)[keyof typeof KjønnkodeEnum]",required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aktørId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  navn: string;
  fødselsnummer: string;
  kjønn: Kjønnkode;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato: string | null;
  aktørId: string | null;
}>`,required:!0},{name:"null"}],required:!0}},{key:"annenpartBehandling",value:{name:"union",raw:"AnnenPartBehandling | null",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  behandlingUuid: string;
  relasjonsRolleType: string;
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"relasjonsRolleType",value:{name:"string",required:!0}}]}},{name:"null"}],required:!0}},{key:"fagsakMarkeringer",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fagsakMarkering: string;
  kortNavn?: string;
}`,signature:{properties:[{key:"fagsakMarkering",value:{name:"string",required:!0}},{key:"kortNavn",value:{name:"string",required:!1}}]}}],raw:"Saksmarkering[]",required:!1}},{key:"familiehendelse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}`,signature:{properties:[{key:"hendelseType",value:{name:"string",required:!0}},{key:"hendelseDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}>`,required:!1}},{key:"behandlinger",value:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}`,signature:{properties:[{key:"behandlingTillatteOperasjoner",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}`,signature:{properties:[{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"VergeBehandlingmenyValg",required:!0}}]}}],raw:`Readonly<{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}>`,required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig: boolean;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"boolean",required:!0}}]}}],raw:"Brevmal[]",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"string",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"opptjeningAktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}`,signature:{properties:[{key:"aktivitetType",value:{name:"string",required:!0}},{key:"erEndring",value:{name:"boolean",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"orgnr",value:{name:"string",required:!1}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"privatpersonFødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}>`}],raw:"OpptjeningAktiviteter[]",required:!1}},{key:"beregningDto",value:{name:"signature",type:"object",raw:`{
  fastsattVarigEndringNaering: boolean;
  faktaOmBeregningTilfeller: string[];
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"boolean",required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"typeEndring",value:{name:"TypeEndring",required:!0}},{key:"erSlettet",value:{name:"boolean",required:!0}},{key:"erAvklart",value:{name:"boolean",required:!0}},{key:"erLagtTil",value:{name:"boolean",required:!0}},{key:"erEndret",value:{name:"boolean",required:!0}}]}}],raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}[]`,required:!1}}]}}],raw:`Readonly<{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}>`}],raw:"TotrinnskontrollAksjonspunkt[]",required:!0}}]}}],raw:`Readonly<{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"union",raw:"Aksjonspunkt | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`},{name:"null"}],required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"iayFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}},{key:"medlFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}>`}]}],raw:"BehandlingAppKontekst[]",required:!0}},{key:"brukerManglerAdresse",value:{name:"boolean",required:!0}},{key:"historikkinnslag",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string | null;
  skjermlenke: string | null;
  dokumenter: HistorikkInnslagDokumentLink[] | null;
  tittel: string | null;
  linjer: Linje[];
}`,signature:{properties:[{key:"aktør",value:{name:"signature",type:"object",raw:`{
  type: HistorikkAktor;
  ident: string | null;
}`,signature:{properties:[{key:"type",value:{name:"HistorikkAktor",required:!0}},{key:"ident",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]},required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"skjermlenke",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"dokumenter",value:{name:"union",raw:"HistorikkInnslagDokumentLink[] | null",elements:[{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  dokumentId: string;
  journalpostId: string;
  tag: string;
  utgått: boolean;
}`,signature:{properties:[{key:"dokumentId",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"tag",value:{name:"string",required:!0}},{key:"utgått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  dokumentId: string;
  journalpostId: string;
  tag: string;
  utgått: boolean;
}>`}],raw:"HistorikkInnslagDokumentLink[]"},{name:"null"}],required:!0}},{key:"tittel",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"linjer",value:{name:"Array",elements:[{name:"union",raw:`| {
    type: 'TEKST';
    tekst: string;
  }
| { type: 'LINJESKIFT' }`,elements:[{name:"signature",type:"object",raw:`{
  type: 'TEKST';
  tekst: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:"'TEKST'",required:!0}},{key:"tekst",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:"{ type: 'LINJESKIFT' }",signature:{properties:[{key:"type",value:{name:"literal",value:"'LINJESKIFT'",required:!0}}]}}]}],raw:"Linje[]",required:!0}}]}}],raw:`Readonly<{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string | null;
  skjermlenke: string | null;
  dokumenter: HistorikkInnslagDokumentLink[] | null;
  tittel: string | null;
  linjer: Linje[];
}>`}],raw:"Historikkinnslag[]",required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"iayFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}},{key:"medlFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}>`,required:!0}},{key:"notater",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  opprettetTidspunkt: string;
  opprettetAv: string;
  notat: string;
}`,signature:{properties:[{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"opprettetAv",value:{name:"string",required:!0}},{key:"notat",value:{name:"string",required:!0}}]}}],raw:"Saksnotat[]",required:!0}}]}}],raw:`Readonly<{
  saksnummer: string;
  fagsakYtelseType: string;
  relasjonsRolleType: string;
  status: string;
  dekningsgrad: number;
  aktørId: string;
  harVergeIÅpenBehandling: boolean;
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  bruker: Person;
  annenPart: Person | null;
  annenpartBehandling: AnnenPartBehandling | null;
  fagsakMarkeringer?: Saksmarkering[];
  familiehendelse?: FagsakHendelse;
  behandlinger: BehandlingAppKontekst[];
  brukerManglerAdresse: boolean;
  historikkinnslag: Historikkinnslag[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
}>`},description:""},behandlingAppKontekst:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}`,signature:{properties:[{key:"behandlingTillatteOperasjoner",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}`,signature:{properties:[{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"VergeBehandlingmenyValg",required:!0}}]}}],raw:`Readonly<{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}>`,required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig: boolean;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"boolean",required:!0}}]}}],raw:"Brevmal[]",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"string",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"opptjeningAktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}`,signature:{properties:[{key:"aktivitetType",value:{name:"string",required:!0}},{key:"erEndring",value:{name:"boolean",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"orgnr",value:{name:"string",required:!1}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"privatpersonFødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}>`}],raw:"OpptjeningAktiviteter[]",required:!1}},{key:"beregningDto",value:{name:"signature",type:"object",raw:`{
  fastsattVarigEndringNaering: boolean;
  faktaOmBeregningTilfeller: string[];
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"boolean",required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"typeEndring",value:{name:"TypeEndring",required:!0}},{key:"erSlettet",value:{name:"boolean",required:!0}},{key:"erAvklart",value:{name:"boolean",required:!0}},{key:"erLagtTil",value:{name:"boolean",required:!0}},{key:"erEndret",value:{name:"boolean",required:!0}}]}}],raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}[]`,required:!1}}]}}],raw:`Readonly<{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}>`}],raw:"TotrinnskontrollAksjonspunkt[]",required:!0}}]}}],raw:`Readonly<{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"union",raw:"Aksjonspunkt | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`},{name:"null"}],required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"iayFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}},{key:"medlFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}>`}]},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"union",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]}},{name:"null"}],required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},setBehandling:{required:!0,tsType:{name:"signature",type:"function",raw:"(behandling: Behandling | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"Behandling | undefined",elements:[{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"union",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]}},{name:"null"}],required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},{name:"undefined"}]},name:"behandling"}],return:{name:"void"}}},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},hentOgSettBehandling:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Kc=({fagsakData:i,behandlingUuid:g,behandling:a,setBehandling:u,hentOgSettBehandling:d})=>{const f=We(Wi()),{innloggetBruker:h}=xn(f.data),[q,A]=N.useState(),R=()=>A(void 0),E=i.getFagsak(),S=i.getBehandling(g),V=Pc(S,E);return h.kanVeilede?null:m.jsxs(m.Fragment,{children:[m.jsxs(nr,{children:[m.jsx(Ye,{size:"small",as:nr.Toggle,iconPosition:"right",variant:"secondary",icon:m.jsx(tb,{"aria-hidden":!0}),children:m.jsx(te,{id:"BehandlingMenuIndex.Behandlingsmeny"})}),m.jsx(nr.Menu,{children:m.jsx(nr.Menu.List,{children:Object.keys(V).filter(O=>!V[O].disabled).map(O=>m.jsx(nr.Menu.List.Item,{onClick:()=>{A(O)},children:V[O].text},O))})})]}),q==="NY_BEHANDLING"&&m.jsx(Do,{fagsakData:i,behandlingUuid:g,lukkModal:R}),q==="ENDRE_FAGSAK_MARKERING"&&m.jsx(Uo,{saksnummer:E.saksnummer,fagsakMarkeringer:E.fagsakMarkeringer,hentOgSettBehandling:d,lukkModal:R}),q==="VERGE"&&S&&a&&m.jsx($o,{fagsak:E,behandlingAppKontekst:S,behandling:a,setBehandling:u,lukkModal:R,hentOgSettBehandling:d}),q==="ÅPNE_FOR_ENDRINGER"&&a&&m.jsx(Mo,{behandling:a,setBehandling:u,lukkModal:R}),q==="ENDRE_BEHANDLENDE_ENHET"&&a&&m.jsx(Lo,{behandling:a,hentOgSettBehandling:d,lukkModal:R}),q==="HENLEGG"&&S&&a&&m.jsx(Ho,{behandlingAppKontekst:S,behandling:a,fagsakYtelseType:E.fagsakYtelseType,lukkModal:R}),q==="SETT_PÅ_VENT"&&a&&m.jsx(Go,{behandling:a,hentOgSettBehandling:d,lukkModal:R}),q==="TA_AV_VENT"&&a&&m.jsx(Co,{behandling:a,setBehandling:u,lukkModal:R})]})},Pc=(i,g)=>{const a=i?i.behandlingPåVent:!1,u=i==null?void 0:i.behandlingTillatteOperasjoner,d=u==null?void 0:u.vergeBehandlingsmeny,f=d===Jr.FJERN&&!!(i!=null&&i.uuid)&&!!(i!=null&&i.versjon),h=d===Jr.OPPRETT&&!!(i!=null&&i.uuid)&&!!(i!=null&&i.versjon);return{TA_AV_VENT:{disabled:!(u!=null&&u.behandlingKanGjenopptas),text:Lh()},SETT_PÅ_VENT:{disabled:!(u!=null&&u.behandlingKanSettesPaVent),text:_c()},HENLEGG:{disabled:!(u!=null&&u.behandlingKanHenlegges),text:mc()},ENDRE_BEHANDLENDE_ENHET:{disabled:!(u!=null&&u.behandlingKanBytteEnhet),text:Gh()},ÅPNE_FOR_ENDRINGER:{disabled:!(u!=null&&u.behandlingKanOpnesForEndringer),text:$h()},NY_BEHANDLING:{disabled:g.sakSkalTilInfotrygd,text:Bc()},ENDRE_FAGSAK_MARKERING:{disabled:g.sakSkalTilInfotrygd,text:Jh()},VERGE:{disabled:!(!a&&(h||f)),text:Mh(h)}}};Kc.__docgenInfo={description:"",methods:[],displayName:"BehandlingMenuIndex",props:{fagsakData:{required:!0,tsType:{name:"FagsakData"},description:""},behandlingUuid:{required:!1,tsType:{name:"string"},description:""},behandling:{required:!1,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"union",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]}},{name:"null"}],required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},setBehandling:{required:!0,tsType:{name:"signature",type:"function",raw:"(behandling: Behandling | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"Behandling | undefined",elements:[{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak: string | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: string[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"union",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]}},{name:"null"}],required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},{name:"undefined"}]},name:"behandling"}],return:{name:"void"}}},description:""},hentOgSettBehandling:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{ta as A,Kc as B,mo as F,Kh as P,hh as T,Vh as V,jr as a,jh as b,Ah as c,Zt as d,Nh as e,Th as f,gq as g,dq as h,po as i,Rh as j,vo as s,Ab as u};
