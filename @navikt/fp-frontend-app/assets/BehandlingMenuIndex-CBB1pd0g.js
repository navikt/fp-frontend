var If=Object.defineProperty;var Mf=(i,d,a)=>d in i?If(i,d,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[d]=a;var Yt=(i,d,a)=>Mf(i,typeof d!="symbol"?d+"":d,a);import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{r as N,$ as eo,R as Fe}from"./index-DjhIdADd.js";import{aK as Lf,aL as Ni,ab as Uf,ad as Hf,ac as Gf,ae as Df,aa as Cf,P as ze,n as Ye,H as Dn,V as tr,L as ia,h as Qt,a3 as Hi,ak as Ku,k as Tr,al as $f,ai as Wf,l as ke,m as Xr,B as $,F as ea,a2 as no,J as Wi,u as ro,d as Yf}from"./withPanelData-BSiA-GBU.js";import{u as We,j as zf,n as On,b as Yi,a as sa,c as Gi,l as Jf,k as Zf}from"./initFetch-ptyfupaN.js";import{n as Be,G as zi,c as Xf,M as te,F as Di,I as Qf,B as na,v as eb,s as Vu,L as nb,t as rb,a as zr,l as tb,j as ab}from"./index.es-XsLg3G4w.js";import{K as ra,b as Ve,c as ib,o as Ji,N as ta,E as sb,J as lb,Z as Jr,X as Pi,a2 as ub,a3 as ob,a4 as db,G as Fu,O as Iu,a as Ar,e as jr,a5 as gb,U as kb,u as rr}from"./index.es-BSB2SumM.js";import{c as zt}from"./_commonjsHelpers-Cpj98o6Y.js";import{A as to}from"./aksjonspunktCodes-BLM-Fgv6.js";import{K as ln}from"./alleKodeverk-BFmIlMu4.js";import{c as mb}from"./bind-oYjWB_aQ.js";import{g as vb,W as Oi}from"./index.es-COQ0VKF5.js";import{K as Mu}from"./Kjonnkode-C-fkzSiP.js";import{T as vn}from"./Table-Cf-fQozT.js";import{S as yb}from"./CheckmarkCircleFill-BCLuRWcX.js";import{B as ge}from"./behandlingResultatType-DHbqkXMl.js";import{D as pb}from"./dokumentMalType-uHvYWaNM.js";import{L as fb}from"./Link-BMZI6dW5.js";import{B as ee}from"./behandlingArsakType-CTXggz2Y.js";import{S as bb}from"./SettPaVentModalIndex-CtcJo0x8.js";import{V as Zr}from"./FagsakData-4_VgJz8T.js";import{u as Zi,a as hb,b as cb,d as qb}from"./useBehandlingPollingOperasjoner-CVEyKLwU.js";import{u as la,h as Lu,d as Uu}from"./behandlingApi-DiOzRUPy.js";import{u as Tb,a as Ab}from"./useKodeverk-CfKKSKNE.js";import{u as jb}from"./useVisForhandsvisningAvMelding-CgYYs8vM.js";import{k as ao,g as io}from"./paths-BX7weVoC.js";import"./index-B-V1qRBx.js";var Xi=(i=>(i.BARN="BARN",i.FBARN="FBARN",i.VOKSEN="VOKSEN",i.ADVOKAT="ADVOKAT",i.ANNEN_F="ANNEN_F",i))(Xi||{}),aa=(i=>(i.FPSAK="FPSAK",i.FPTILBAKE="FPTILBAKE",i))(aa||{});const wb=()=>{const i=[aa.FPSAK],{status:d}=We(zf());return d!=="error"&&i.push(aa.FPTILBAKE),i};function so(i){var d,a,u="";if(typeof i=="string"||typeof i=="number")u+=i;else if(typeof i=="object")if(Array.isArray(i))for(d=0;d<i.length;d++)i[d]&&(a=so(i[d]))&&(u&&(u+=" "),u+=a);else for(d in i)i[d]&&(u&&(u+=" "),u+=d);return u}function qn(){for(var i,d,a=0,u="";a<arguments.length;)(i=arguments[a++])&&(d=so(i))&&(u&&(u+=" "),u+=d);return u}function Rb(i){return d=>{i.forEach(a=>{typeof a=="function"?a(d):a!=null&&(a.current=d)})}}const Bb=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Hu=Bb()?N.useLayoutEffect:()=>{},Eb=(i,d,a=typeof window<"u"?window:null)=>{N.useEffect(()=>{if(a)return a==null||a.addEventListener(i,d),()=>{a==null||a.removeEventListener(i,d)}},[i,d,a])};var lo=typeof document<"u"?N.useLayoutEffect:N.useEffect;let xi=!1,_b=0;const Gu=()=>"floating-ui-"+_b++;function Sb(){const[i,d]=N.useState(()=>xi?Gu():void 0);return lo(()=>{i==null&&d(Gu())},[]),N.useEffect(()=>{xi||(xi=!0)},[]),i}const Nb=eo.useId,Pb=Nb||Sb;function Ob(){const i=new Map;return{emit(d,a){var u;(u=i.get(d))==null||u.forEach(g=>g(a))},on(d,a){i.set(d,[...i.get(d)||[],a])},off(d,a){var u;i.set(d,((u=i.get(d))==null?void 0:u.filter(g=>g!==a))||[])}}}const xb=N.createContext(null),Kb=N.createContext(null),Vb=()=>{var i;return((i=N.useContext(xb))==null?void 0:i.id)||null},uo=()=>N.useContext(Kb);function oo(i){return(i==null?void 0:i.ownerDocument)||document}function Fb(){const i=navigator.userAgentData;return i!=null&&i.platform?i.platform:navigator.platform}function Ib(){const i=navigator.userAgentData;return i&&Array.isArray(i.brands)?i.brands.map(d=>{let{brand:a,version:u}=d;return a+"/"+u}).join(" "):navigator.userAgent}function Qi(i){return oo(i).defaultView||window}function nr(i){return i?i instanceof Qi(i).Element:!1}function es(i){return i?i instanceof Qi(i).HTMLElement:!1}function Mb(i){if(i.mozInputSource===0&&i.isTrusted)return!0;const d=/Android/i;return(d.test(Fb())||d.test(Ib()))&&i.pointerType?i.type==="click"&&i.buttons===1:i.detail===0&&!i.pointerType}function Lb(i){return i.width===0&&i.height===0||i.width===1&&i.height===1&&i.pressure===0&&i.detail===0&&i.pointerType!=="mouse"||i.width<1&&i.height<1&&i.pressure===0&&i.detail===0}function Du(i,d){return["mouse","pen"].includes(i)}function Ki(i,d){let a=i.filter(g=>{var f;return g.parentId===d&&((f=g.context)==null?void 0:f.open)}),u=a;for(;u.length;)u=i.filter(g=>{var f;return(f=u)==null?void 0:f.some(h=>{var q;return g.parentId===h.id&&((q=g.context)==null?void 0:q.open)})}),a=a.concat(u);return a}function Ub(i){return"composedPath"in i?i.composedPath()[0]:i.target}const Hb="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function Gb(i){return es(i)&&i.matches(Hb)}function Cu(i){return es(i.target)&&i.target.tagName==="BUTTON"}function $u(i){return Gb(i)}function Db(i,d){d===void 0&&(d={});const{open:a,onOpenChange:u,dataRef:g,elements:{domReference:f}}=i,{enabled:h=!0,event:q="click",toggle:j=!0,ignoreMouse:R=!1,keyboardHandlers:E=!0}=d,S=N.useRef(),I=N.useRef(!1);return N.useMemo(()=>h?{reference:{onPointerDown(P){S.current=P.pointerType},onMouseDown(P){P.button===0&&(Du(S.current)&&R||q!=="click"&&(a?j&&(!g.current.openEvent||g.current.openEvent.type==="mousedown")&&u(!1):(P.preventDefault(),u(!0)),g.current.openEvent=P.nativeEvent))},onClick(P){if(q==="mousedown"&&S.current){S.current=void 0;return}Du(S.current)&&R||(a?j&&(!g.current.openEvent||g.current.openEvent.type==="click")&&u(!1):u(!0),g.current.openEvent=P.nativeEvent)},onKeyDown(P){S.current=void 0,!(P.defaultPrevented||!E||Cu(P))&&(P.key===" "&&!$u(f)&&(P.preventDefault(),I.current=!0),P.key==="Enter"&&(a?j&&u(!1):u(!0)))},onKeyUp(P){P.defaultPrevented||!E||Cu(P)||$u(f)||P.key===" "&&I.current&&(I.current=!1,a?j&&u(!1):u(!0))}}}:{},[h,g,q,R,E,f,j,a,u])}const Cb=eo.useInsertionEffect,$b=Cb||(i=>i());function Zt(i){const d=N.useRef(()=>{});return $b(()=>{d.current=i}),N.useCallback(function(){for(var a=arguments.length,u=new Array(a),g=0;g<a;g++)u[g]=arguments[g];return d.current==null?void 0:d.current(...u)},[])}function Vi(i,d){if(d==null)return!1;if("composedPath"in i)return i.composedPath().includes(d);const a=i;return a.target!=null&&d.contains(a.target)}const Wb={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},Yb={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},zb=i=>{var d,a;return{escapeKeyBubbles:typeof i=="boolean"?i:(d=i==null?void 0:i.escapeKey)!=null?d:!1,outsidePressBubbles:typeof i=="boolean"?i:(a=i==null?void 0:i.outsidePress)!=null?a:!0}};function Jb(i,d){d===void 0&&(d={});const{open:a,onOpenChange:u,events:g,nodeId:f,elements:{reference:h,domReference:q,floating:j},dataRef:R}=i,{enabled:E=!0,escapeKey:S=!0,outsidePress:I=!0,outsidePressEvent:P="pointerdown",referencePress:J=!1,referencePressEvent:me="pointerdown",ancestorScroll:W=!1,bubbles:ce}=d,Y=uo(),pe=Vb()!=null,Q=Zt(typeof I=="function"?I:()=>!1),ie=typeof I=="function"?Q:I,Ne=N.useRef(!1),{escapeKeyBubbles:fe,outsidePressBubbles:Ie}=zb(ce),je=Zt(oe=>{if(!a||!E||!S||oe.key!=="Escape")return;const Je=Y?Ki(Y.nodesRef.current,f):[];if(!fe&&(oe.stopPropagation(),Je.length>0)){let ne=!0;if(Je.forEach(Me=>{var yn;if((yn=Me.context)!=null&&yn.open&&!Me.context.dataRef.current.__escapeKeyBubbles){ne=!1;return}}),!ne)return}g.emit("dismiss",{type:"escapeKey",data:{returnFocus:{preventScroll:!1}}}),u(!1)}),Tn=Zt(oe=>{const Je=Ne.current;if(Ne.current=!1,Je||typeof ie=="function"&&!ie(oe))return;const ne=Ub(oe);if(es(ne)&&j){const xn=ne.clientWidth>0&&ne.scrollWidth>ne.clientWidth,Le=ne.clientHeight>0&&ne.scrollHeight>ne.clientHeight;let Ze=Le&&oe.offsetX>ne.clientWidth;if(Le&&Qi(j).getComputedStyle(ne).direction==="rtl"&&(Ze=oe.offsetX<=ne.offsetWidth-ne.clientWidth),Ze||xn&&oe.offsetY>ne.clientHeight)return}const Me=Y&&Ki(Y.nodesRef.current,f).some(xn=>{var Le;return Vi(oe,(Le=xn.context)==null?void 0:Le.elements.floating)});if(Vi(oe,j)||Vi(oe,q)||Me)return;const yn=Y?Ki(Y.nodesRef.current,f):[];if(yn.length>0){let xn=!0;if(yn.forEach(Le=>{var Ze;if((Ze=Le.context)!=null&&Ze.open&&!Le.context.dataRef.current.__outsidePressBubbles){xn=!1;return}}),!xn)return}g.emit("dismiss",{type:"outsidePress",data:{returnFocus:pe?{preventScroll:!0}:Mb(oe)||Lb(oe)}}),u(!1)});return N.useEffect(()=>{if(!a||!E)return;R.current.__escapeKeyBubbles=fe,R.current.__outsidePressBubbles=Ie;function oe(){u(!1)}const Je=oo(j);S&&Je.addEventListener("keydown",je),ie&&Je.addEventListener(P,Tn);let ne=[];return W&&(nr(q)&&(ne=Ni(q)),nr(j)&&(ne=ne.concat(Ni(j))),!nr(h)&&h&&h.contextElement&&(ne=ne.concat(Ni(h.contextElement)))),ne=ne.filter(Me=>{var yn;return Me!==((yn=Je.defaultView)==null?void 0:yn.visualViewport)}),ne.forEach(Me=>{Me.addEventListener("scroll",oe,{passive:!0})}),()=>{S&&Je.removeEventListener("keydown",je),ie&&Je.removeEventListener(P,Tn),ne.forEach(Me=>{Me.removeEventListener("scroll",oe)})}},[R,j,q,h,S,ie,P,a,u,W,E,fe,Ie,je,Tn]),N.useEffect(()=>{Ne.current=!1},[ie,P]),N.useMemo(()=>E?{reference:{onKeyDown:je,[Wb[me]]:()=>{J&&(g.emit("dismiss",{type:"referencePress",data:{returnFocus:!1}}),u(!1))}},floating:{onKeyDown:je,[Yb[P]]:()=>{Ne.current=!0}}}:{},[E,g,J,P,me,u,je])}function Zb(i){var d;i===void 0&&(i={});const{open:a=!1,onOpenChange:u,nodeId:g}=i,[f,h]=N.useState(null),q=((d=i.elements)==null?void 0:d.reference)||f,j=Lf(i),R=uo(),E=Zt(u),S=N.useRef(null),I=N.useRef({}),P=N.useState(()=>Ob())[0],J=Pb(),me=N.useCallback(Q=>{const ie=nr(Q)?{getBoundingClientRect:()=>Q.getBoundingClientRect(),contextElement:Q}:Q;j.refs.setReference(ie)},[j.refs]),W=N.useCallback(Q=>{(nr(Q)||Q===null)&&(S.current=Q,h(Q)),(nr(j.refs.reference.current)||j.refs.reference.current===null||Q!==null&&!nr(Q))&&j.refs.setReference(Q)},[j.refs]),ce=N.useMemo(()=>({...j.refs,setReference:W,setPositionReference:me,domReference:S}),[j.refs,W,me]),Y=N.useMemo(()=>({...j.elements,domReference:q}),[j.elements,q]),pe=N.useMemo(()=>({...j,refs:ce,elements:Y,dataRef:I,nodeId:g,floatingId:J,events:P,open:a,onOpenChange:E}),[j,g,J,P,a,E,ce,Y]);return lo(()=>{const Q=R==null?void 0:R.nodesRef.current.find(ie=>ie.id===g);Q&&(Q.context=pe)}),N.useMemo(()=>({...j,context:pe,refs:ce,elements:Y}),[j,ce,Y,pe])}function Fi(i,d,a){const u=new Map;return{...a==="floating"&&{tabIndex:-1},...i,...d.map(g=>g?g[a]:null).concat(i).reduce((g,f)=>(f&&Object.entries(f).forEach(h=>{let[q,j]=h;if(q.indexOf("on")===0){if(u.has(q)||u.set(q,[]),typeof j=="function"){var R;(R=u.get(q))==null||R.push(j),g[q]=function(){for(var E,S=arguments.length,I=new Array(S),P=0;P<S;P++)I[P]=arguments[P];return(E=u.get(q))==null?void 0:E.map(J=>J(...I)).find(J=>J!==void 0)}}}else g[q]=j}),g),{})}}function Xb(i){i===void 0&&(i=[]);const d=i,a=N.useCallback(f=>Fi(f,i,"reference"),d),u=N.useCallback(f=>Fi(f,i,"floating"),d),g=N.useCallback(f=>Fi(f,i,"item"),i.map(f=>f==null?void 0:f.item));return N.useMemo(()=>({getReferenceProps:a,getFloatingProps:u,getItemProps:g}),[a,u,g])}var Qb=function(i,d){var a={};for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&d.indexOf(u)<0&&(a[u]=i[u]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var g=0,u=Object.getOwnPropertySymbols(i);g<u.length;g++)d.indexOf(u[g])<0&&Object.prototype.propertyIsEnumerable.call(i,u[g])&&(a[u[g]]=i[u[g]]);return a};const eh=N.forwardRef((i,d)=>{var{className:a}=i,u=Qb(i,["className"]);return Fe.createElement("div",Object.assign({},u,{ref:d,className:qn("navds-popover__content",a)}))});var nh=function(i,d){var a={};for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&d.indexOf(u)<0&&(a[u]=i[u]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var g=0,u=Object.getOwnPropertySymbols(i);g<u.length;g++)d.indexOf(u[g])<0&&Object.prototype.propertyIsEnumerable.call(i,u[g])&&(a[u[g]]=i[u[g]]);return a};const go=N.forwardRef((i,d)=>{var{className:a,children:u,anchorEl:g,arrow:f=!0,open:h,onClose:q,placement:j="top",offset:R,strategy:E="absolute"}=i,S=nh(i,["className","children","anchorEl","arrow","open","onClose","placement","offset","strategy"]);const I=N.useRef(null),{x:P,y:J,strategy:me,context:W,update:ce,refs:Y,placement:pe,middlewareData:{arrow:{x:Q,y:ie}={}}}=Zb({strategy:E,placement:j,open:h,onOpenChange:q,middleware:[Uf(R??(f?16:4)),Hf(),Gf({padding:5,fallbackPlacements:["bottom","top"]}),Df({element:I,padding:8})]}),{getFloatingProps:Ne}=Xb([Db(W),Jb(W)]);Hu(()=>{Y.setReference(g)},[g]);const fe=N.useMemo(()=>Rb([Y.setFloating,d]),[Y.setFloating,d]);Hu(()=>{if(!Y.reference.current||!Y.floating.current||!h)return;const je=Cf(Y.reference.current,Y.floating.current,ce);return()=>je()},[Y.floating,Y.reference,ce,h,g]),Eb("focusin",N.useCallback(je=>{var Tn;[g,(Tn=Y==null?void 0:Y.floating)===null||Tn===void 0?void 0:Tn.current].some(oe=>oe==null?void 0:oe.contains(je.target))||h&&q()},[g,Y,h,q]));const Ie={top:"bottom",right:"left",bottom:"top",left:"right"}[pe.split("-")[0]];return Fe.createElement("div",Object.assign({className:qn("navds-popover",a,{"navds-popover--hidden":!h||!g}),"data-placement":pe,"aria-hidden":!h||!g,tabIndex:-1},Ne({ref:fe,style:{position:me,top:J??0,left:P??0}}),S),u,f&&Fe.createElement("div",{ref:je=>{I.current=je},style:Object.assign(Object.assign(Object.assign({},Q!=null?{left:Q}:{}),ie!=null?{top:ie}:{}),Ie?{[Ie]:"-0.5rem"}:{}),className:"navds-popover__arrow"}))});go.Content=eh;var rh=function(i,d){var a={};for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&d.indexOf(u)<0&&(a[u]=i[u]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var g=0,u=Object.getOwnPropertySymbols(i);g<u.length;g++)d.indexOf(u[g])<0&&Object.prototype.propertyIsEnumerable.call(i,u[g])&&(a[u[g]]=i[u[g]]);return a};const th=N.forwardRef((i,d)=>{var{className:a,onClick:u}=i,g=rh(i,["className","onClick"]);const f=N.useContext(Qr);if(!f)return console.warn("Dropdown.Toggle has to be wrapped in <Dropdown />"),null;const{setAnchorEl:h,handleToggle:q,isOpen:j}=f;return Fe.createElement("button",Object.assign({},g,{ref:R=>{h(R),typeof d=="function"?d(R):d!=null&&(d.current=R)},onClick:R=>{h(R.currentTarget),q(!j),u&&u(R)},"aria-expanded":j,className:qn("navdsi-dropdown__toggle",a)}))});var ah=function(i,d){var a={};for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&d.indexOf(u)<0&&(a[u]=i[u]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var g=0,u=Object.getOwnPropertySymbols(i);g<u.length;g++)d.indexOf(u[g])<0&&Object.prototype.propertyIsEnumerable.call(i,u[g])&&(a[u[g]]=i[u[g]]);return a};const ih=N.forwardRef((i,d)=>{var{className:a}=i,u=ah(i,["className"]);return Fe.createElement("hr",Object.assign({},u,{ref:d,className:qn("navdsi-dropdown__divider",a)}))});var sh=function(i,d){var a={};for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&d.indexOf(u)<0&&(a[u]=i[u]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var g=0,u=Object.getOwnPropertySymbols(i);g<u.length;g++)d.indexOf(u[g])<0&&Object.prototype.propertyIsEnumerable.call(i,u[g])&&(a[u[g]]=i[u[g]]);return a};const lh=N.forwardRef((i,d)=>{var{className:a}=i,u=sh(i,["className"]);return Fe.createElement("dt",Object.assign({},u,{ref:d,className:qn("navdsi-dropdown__list-heading","navds-heading","navds-heading--xsmall",a)}))});var uh=function(i,d){var a={};for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&d.indexOf(u)<0&&(a[u]=i[u]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var g=0,u=Object.getOwnPropertySymbols(i);g<u.length;g++)d.indexOf(u[g])<0&&Object.prototype.propertyIsEnumerable.call(i,u[g])&&(a[u[g]]=i[u[g]]);return a};const oh=N.forwardRef((i,d)=>{var{as:a="button",className:u}=i,g=uh(i,["as","className"]);const f=N.useContext(Qr);return Fe.createElement("dd",{className:"navdsi-dropdown__list-item"},Fe.createElement(a,Object.assign({},g,{value:g.children,onClick:h=>{var q,j;(q=f==null?void 0:f.onSelect)===null||q===void 0||q.call(f,h),(j=g==null?void 0:g.onClick)===null||j===void 0||j.call(g,h)},ref:d,className:qn("navdsi-dropdown__item","navds-body-short","navds-body-short--small",u)})))});var dh=function(i,d){var a={};for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&d.indexOf(u)<0&&(a[u]=i[u]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var g=0,u=Object.getOwnPropertySymbols(i);g<u.length;g++)d.indexOf(u[g])<0&&Object.prototype.propertyIsEnumerable.call(i,u[g])&&(a[u[g]]=i[u[g]]);return a};const ns=N.forwardRef((i,d)=>{var{className:a,children:u}=i,g=dh(i,["className","children"]);return Fe.createElement("dl",Object.assign({},g,{ref:d,className:qn("navdsi-dropdown__list",a)}),u)});ns.Heading=lh;ns.Item=oh;var gh=function(i,d){var a={};for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&d.indexOf(u)<0&&(a[u]=i[u]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var g=0,u=Object.getOwnPropertySymbols(i);g<u.length;g++)d.indexOf(u[g])<0&&Object.prototype.propertyIsEnumerable.call(i,u[g])&&(a[u[g]]=i[u[g]]);return a};const kh=N.forwardRef((i,d)=>{var{as:a="button",className:u}=i,g=gh(i,["as","className"]);const f=N.useContext(Qr);return Fe.createElement("li",{className:"navdsi-dropdown__list-item"},Fe.createElement(a,Object.assign({},g,{value:g.children,onClick:h=>{var q,j;(q=f==null?void 0:f.onSelect)===null||q===void 0||q.call(f,h),(j=g==null?void 0:g.onClick)===null||j===void 0||j.call(g,h)},ref:d,className:qn("navdsi-dropdown__item","navds-body-short","navds-body-short--small",u)})))});var mh=function(i,d){var a={};for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&d.indexOf(u)<0&&(a[u]=i[u]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var g=0,u=Object.getOwnPropertySymbols(i);g<u.length;g++)d.indexOf(u[g])<0&&Object.prototype.propertyIsEnumerable.call(i,u[g])&&(a[u[g]]=i[u[g]]);return a};const ko=N.forwardRef((i,d)=>{var{className:a,children:u}=i,g=mh(i,["className","children"]);return Fe.createElement("ul",Object.assign({},g,{ref:d,className:qn("navdsi-dropdown__list",a)}),u)});ko.Item=kh;var vh=function(i,d){var a={};for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&d.indexOf(u)<0&&(a[u]=i[u]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var g=0,u=Object.getOwnPropertySymbols(i);g<u.length;g++)d.indexOf(u[g])<0&&Object.prototype.propertyIsEnumerable.call(i,u[g])&&(a[u[g]]=i[u[g]]);return a};const ua=N.forwardRef((i,d)=>{var{className:a,onClose:u,placement:g="bottom-end"}=i,f=vh(i,["className","onClose","placement"]);const h=N.useContext(Qr);if(!h)return console.warn("Dropdown.Menu has to be wrapped in <Dropdown />"),null;const{isOpen:q,anchorEl:j,handleToggle:R}=h;return Fe.createElement(go,Object.assign({},f,{placement:g,ref:d,arrow:!1,className:qn("navdsi-dropdown__menu",a),offset:-4,anchorEl:j,open:q,onClose:()=>{R(!1),u&&u()}}))});ua.List=ko;ua.GroupedList=ns;ua.Divider=ih;const Qr=N.createContext(null),er=({children:i,onSelect:d,closeOnSelect:a=!0,defaultOpen:u=!1,open:g})=>{const[f,h]=N.useState(u),[q,j]=N.useState(null),R=E=>{g===void 0&&h(E)};return Fe.createElement(Qr.Provider,{value:{isOpen:g??f,handleToggle:R,anchorEl:q,setAnchorEl:j,onSelect:E=>{d==null||d(E),a&&g===void 0&&h(!1)}}},i)};er.Toggle=th;er.Menu=ua;const oa={"MenySakIndex.Behandlingsmeny":"Behandlingsmeny","MenyVergeIndex.OpprettVerge":"Opprett verge/fullmektig","MenyVergeIndex.FjernVerge":"Fjern verge/fullmektig","MenyVergeIndex.OpprettVergeSporsmal":"Opprett verge/fullmektig?","MenyVergeIndex.FjernVergeSporsmal":"Fjern verge/fullmektig?","MenyVergeIndex.Opprett":"Opprett","MenyVergeIndex.Fjern":"Fjern","MenyVergeIndex.Avbryt":"Avbryt","MenyTaAvVentIndex.ResumeBehandling":"Fortsett behandlingen","MenyTaAvVentIndex.TaAvVent":"Ta behandlingen av vent?","MenyEndreBehandlendeEnhetIndex.ByttBehandlendeEnhet":"Endre behandlende enhet","EndreBehandlendeEnhetModal.ModalDescription":"Endre behandlende enhet","EndreBehandlendeEnhetModal.Endre":"Endre enhet","EndreBehandlendeEnhetModal.EndreEnhet":"Endre behandlende enhet for valgt behandling","EndreBehandlendeEnhetModal.NyEnhetField":"Ny enhet","EndreBehandlendeEnhetModal.BegrunnelseField":"Begrunnelse","EndreBehandlendeEnhetModal.Ok":"OK","EndreBehandlendeEnhetModal.Avbryt":"Avbryt"},Wu=Be(oa),mo=({fjernVerge:i,opprettVerge:d,lukkModal:a})=>{const u=()=>{a();const g=d||i;if(!g)throw Error("Skal alltid ha enten opprettVerge eller fjernVerge");g()};return m.jsx(ze,{value:Wu,children:m.jsx(zi,{text:Wu.formatMessage({id:d?"MenyVergeIndex.OpprettVergeSporsmal":"MenyVergeIndex.FjernVergeSporsmal"}),showModal:!0,submit:u,cancel:a})})};mo.__docgenInfo={description:"",methods:[],displayName:"MenyVergeIndex",props:{fjernVerge:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},opprettVerge:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const et={"AdresseVisning.Adresse":"Adresse","ForelderPanel.Soker":"Søker","ForelderPanel.AnnenForelder":"Annen forelder","AlleBarnPanel.Barn":"Barn","AlleBarnPanel.BarnNr":"Barn {nummer}","AlleBarnPanel.Fodt":"Født","AlleBarnPanel.Dod":"Død","PersonPanel.RolleOgNavn":"{rolle, select, BRUKER {Søker, } ANNEN_PART {Den andre forelderen, } BARN {Barnet, } other {} }{navn}","PersonPanel.Beskrivelse.Bruker":"Adresser for søker registrert i folkeregisteret gyldige for de siste 12 månedene","PersonPanel.Beskrivelse.Barn":"Adresser for barnet registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Beskrivelse.Annenpart":"Adresser for den andre forelderen registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Fodt":"Født {dato}","PersonPanel.Dod":"Død {dato}","AdresseTabell.IngenAdresse":"Ingen adresser funnet for {erAnnenpart, select, true {den andre forelderen} other {søker} }.","AdresseTabell.SammeAdresse":"Den andre forelderen har samme adresse som søker på skjæringstidspunktet","AdresseTabell.PeriodeLabel":"Periode","AdresseTabell.AdresseLabel":"Adresse","AdresseTabell.TypeLabel":"Type","MerkePanel.Dod":"DØD","MerkePanel.DodTittel":"Personen er død","MerkePanel.DodFodt":"DØDFØDT","MerkePanel.Diskresjon6":"Kode 6","MerkePanel.Diskresjon7":"Kode 7","MerkePanel.EgenAnsatt":"Nav","MerkePanel.Verge":"Verge","MerkePanel.Diskresjon6Tittel":"Personen har diskresjonsmerking kode 6","MerkePanel.Diskresjon7Tittel":"Personen har diskresjonsmerking kode 7","MerkePanel.EgenAnsattTittel":"Personen er ansatt i Nav","MerkePanel.VergeTittel":"Personen har verge","SubmitButton.ConfirmInformation":"Bekreft og fortsett","FaktaBegrunnelseTextField.BegrunnEndringene":"Begrunn endringene","FaktaBegrunnelseTextField.Vurdering":"Vurdering","FaktaBegrunnelseTextField.Begrunnelse":"Begrunnelse","TrueFalseInput.True":"Ja","TrueFalseInput.False":"Nei","FaktaKilde.Soknad":"FRA SØKNADEN","FaktaKilde.FREG":"FRA FOLKEREGISTERET","FaktaKilde.MEDL":"FRA MEDLEMSKAPSREGISTERET"},Ii=Be(et),yh=ib(3),ph=Ji(1500),wr=({isReadOnly:i,isSubmittable:d,hasBegrunnelse:a,label:u,hasReadOnlyLabel:g=!1,hasVurderingText:f=!1,name:h="begrunnelse"})=>{const q=f?"FaktaBegrunnelseTextField.Vurdering":"FaktaBegrunnelseTextField.BegrunnEndringene",j=()=>i?g?Ii.formatMessage({id:"FaktaBegrunnelseTextField.Begrunnelse"}):"":u??Ii.formatMessage({id:q});return m.jsx(ze,{value:Ii,children:(d||a)&&m.jsx(ra,{name:h,label:j(),validate:[Ve,yh,ph,ta],maxLength:1500,readOnly:i})})},fh=i=>{var d;return i&&Array.isArray(i)?((d=i[0])==null?void 0:d.begrunnelse)??"":i&&!Array.isArray(i)&&i.begrunnelse?i.begrunnelse:""};wr.initialValues=(i,d="begrunnelse")=>({[d]:Xf(fh(i))});wr.transformValues=(i,d="begrunnelse")=>({begrunnelse:i[d]});wr.__docgenInfo={description:"FaktaBegrunnelseTextField",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[{name:"aksjonspunkt",optional:!0,type:{name:"union",raw:"Aksjonspunkt[] | Aksjonspunkt",elements:[{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`}],raw:"Aksjonspunkt[]"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`}]}},{name:"begrunnelseFieldName",optional:!0,type:null}],returns:{type:{name:"signature",type:"object",raw:`{
  [key: string]: any;
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"signature",type:"object",raw:`{
  [key: string]: any;
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}}]},alias:"FormValues"}},{name:"name",optional:!0,type:null}],returns:{type:{name:"signature",type:"object",raw:`{
  begrunnelse: string;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!0}}]}}}}],displayName:"FaktaBegrunnelseTextField",props:{isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},hasBegrunnelse:{required:!0,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:""},hasReadOnlyLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hasVurderingText:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'begrunnelse'",computed:!1}}}};const bh=Be(et),hh=(i,d,a)=>!a||d?!0:!i,vo=({isReadOnly:i,isSubmittable:d,buttonText:a,onClick:u,isSubmitting:g,isDirty:f})=>m.jsx(ze,{value:bh,children:!i&&m.jsx("div",{children:m.jsxs(Ye,{size:"small",variant:"primary",loading:g,disabled:hh(f,g,d),onClick:u||sb,type:u?"button":"submit",children:[!!a&&a,!a&&m.jsx(te,{id:"SubmitButton.ConfirmInformation"})]})})});vo.__docgenInfo={description:"FaktaSubmitButton",methods:[],displayName:"FaktaSubmitButton",props:{buttonText:{required:!1,tsType:{name:"string"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!0,tsType:{name:"boolean"},description:""}}};const Yu=Be(et),ch=({name:i,label:d,readOnly:a,trueLabel:u,trueContent:g,falseLabel:f,falseContent:h})=>m.jsx(lb,{name:i,label:d,validate:[Ve],isReadOnly:a,isTrueOrFalseSelection:!0,radios:[{label:u??Yu.formatMessage({id:"TrueFalseInput.True"}),value:"true",element:g},{label:f??Yu.formatMessage({id:"TrueFalseInput.False"}),value:"false",element:h}]});ch.__docgenInfo={description:"",methods:[],displayName:"TrueFalseInput",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},trueLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},trueContent:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},falseLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},falseContent:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""}}};const yo=(i,d)=>{const a=new Date(i.tom??Di),u=new Date(d.tom??Di);if(a>u)return-1;if(a<u)return 1;if(i.fom&&!d.fom)return-1;if(!i.fom&&d.fom)return 1;if(i.fom&&d.fom){const g=new Date(i.fom),f=new Date(d.fom);if(g>f)return-1;if(g<f)return 1}return 0};var Yr={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var qh=Yr.exports,zu;function Th(){return zu||(zu=1,function(i,d){(function(){var a,u="4.17.21",g=200,f="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",h="Expected a function",q="Invalid `variable` option passed into `_.template`",j="__lodash_hash_undefined__",R=500,E="__lodash_placeholder__",S=1,I=2,P=4,J=1,me=2,W=1,ce=2,Y=4,pe=8,Q=16,ie=32,Ne=64,fe=128,Ie=256,je=512,Tn=30,oe="...",Je=800,ne=16,Me=1,yn=2,xn=3,Le=1/0,Ze=9007199254740991,ts=17976931348623157e292,nt=NaN,pn=4294967295,zo=pn-1,Jo=pn>>>1,Zo=[["ary",fe],["bind",W],["bindKey",ce],["curry",pe],["curryRight",Q],["flip",je],["partial",ie],["partialRight",Ne],["rearg",Ie]],ar="[object Arguments]",rt="[object Array]",Xo="[object AsyncFunction]",Rr="[object Boolean]",Br="[object Date]",Qo="[object DOMException]",tt="[object Error]",at="[object Function]",as="[object GeneratorFunction]",un="[object Map]",Er="[object Number]",ed="[object Null]",An="[object Object]",is="[object Promise]",nd="[object Proxy]",_r="[object RegExp]",on="[object Set]",Sr="[object String]",it="[object Symbol]",rd="[object Undefined]",Nr="[object WeakMap]",td="[object WeakSet]",Pr="[object ArrayBuffer]",ir="[object DataView]",da="[object Float32Array]",ga="[object Float64Array]",ka="[object Int8Array]",ma="[object Int16Array]",va="[object Int32Array]",ya="[object Uint8Array]",pa="[object Uint8ClampedArray]",fa="[object Uint16Array]",ba="[object Uint32Array]",ad=/\b__p \+= '';/g,id=/\b(__p \+=) '' \+/g,sd=/(__e\(.*?\)|\b__t\)) \+\n'';/g,ss=/&(?:amp|lt|gt|quot|#39);/g,ls=/[&<>"']/g,ld=RegExp(ss.source),ud=RegExp(ls.source),od=/<%-([\s\S]+?)%>/g,dd=/<%([\s\S]+?)%>/g,us=/<%=([\s\S]+?)%>/g,gd=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,kd=/^\w*$/,md=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ha=/[\\^$.*+?()[\]{}|]/g,vd=RegExp(ha.source),ca=/^\s+/,yd=/\s/,pd=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,fd=/\{\n\/\* \[wrapped with (.+)\] \*/,bd=/,? & /,hd=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,cd=/[()=,{}\[\]\/\s]/,qd=/\\(\\)?/g,Td=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,os=/\w*$/,Ad=/^[-+]0x[0-9a-f]+$/i,jd=/^0b[01]+$/i,wd=/^\[object .+?Constructor\]$/,Rd=/^0o[0-7]+$/i,Bd=/^(?:0|[1-9]\d*)$/,Ed=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,st=/($^)/,_d=/['\n\r\u2028\u2029\\]/g,lt="\\ud800-\\udfff",Sd="\\u0300-\\u036f",Nd="\\ufe20-\\ufe2f",Pd="\\u20d0-\\u20ff",ds=Sd+Nd+Pd,gs="\\u2700-\\u27bf",ks="a-z\\xdf-\\xf6\\xf8-\\xff",Od="\\xac\\xb1\\xd7\\xf7",xd="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Kd="\\u2000-\\u206f",Vd=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ms="A-Z\\xc0-\\xd6\\xd8-\\xde",vs="\\ufe0e\\ufe0f",ys=Od+xd+Kd+Vd,qa="['’]",Fd="["+lt+"]",ps="["+ys+"]",ut="["+ds+"]",fs="\\d+",Id="["+gs+"]",bs="["+ks+"]",hs="[^"+lt+ys+fs+gs+ks+ms+"]",Ta="\\ud83c[\\udffb-\\udfff]",Md="(?:"+ut+"|"+Ta+")",cs="[^"+lt+"]",Aa="(?:\\ud83c[\\udde6-\\uddff]){2}",ja="[\\ud800-\\udbff][\\udc00-\\udfff]",sr="["+ms+"]",qs="\\u200d",Ts="(?:"+bs+"|"+hs+")",Ld="(?:"+sr+"|"+hs+")",As="(?:"+qa+"(?:d|ll|m|re|s|t|ve))?",js="(?:"+qa+"(?:D|LL|M|RE|S|T|VE))?",ws=Md+"?",Rs="["+vs+"]?",Ud="(?:"+qs+"(?:"+[cs,Aa,ja].join("|")+")"+Rs+ws+")*",Hd="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Gd="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Bs=Rs+ws+Ud,Dd="(?:"+[Id,Aa,ja].join("|")+")"+Bs,Cd="(?:"+[cs+ut+"?",ut,Aa,ja,Fd].join("|")+")",$d=RegExp(qa,"g"),Wd=RegExp(ut,"g"),wa=RegExp(Ta+"(?="+Ta+")|"+Cd+Bs,"g"),Yd=RegExp([sr+"?"+bs+"+"+As+"(?="+[ps,sr,"$"].join("|")+")",Ld+"+"+js+"(?="+[ps,sr+Ts,"$"].join("|")+")",sr+"?"+Ts+"+"+As,sr+"+"+js,Gd,Hd,fs,Dd].join("|"),"g"),zd=RegExp("["+qs+lt+ds+vs+"]"),Jd=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Zd=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Xd=-1,se={};se[da]=se[ga]=se[ka]=se[ma]=se[va]=se[ya]=se[pa]=se[fa]=se[ba]=!0,se[ar]=se[rt]=se[Pr]=se[Rr]=se[ir]=se[Br]=se[tt]=se[at]=se[un]=se[Er]=se[An]=se[_r]=se[on]=se[Sr]=se[Nr]=!1;var ae={};ae[ar]=ae[rt]=ae[Pr]=ae[ir]=ae[Rr]=ae[Br]=ae[da]=ae[ga]=ae[ka]=ae[ma]=ae[va]=ae[un]=ae[Er]=ae[An]=ae[_r]=ae[on]=ae[Sr]=ae[it]=ae[ya]=ae[pa]=ae[fa]=ae[ba]=!0,ae[tt]=ae[at]=ae[Nr]=!1;var Qd={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},eg={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ng={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},rg={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},tg=parseFloat,ag=parseInt,Es=typeof zt=="object"&&zt&&zt.Object===Object&&zt,ig=typeof self=="object"&&self&&self.Object===Object&&self,Te=Es||ig||Function("return this")(),Ra=d&&!d.nodeType&&d,Cn=Ra&&!0&&i&&!i.nodeType&&i,_s=Cn&&Cn.exports===Ra,Ba=_s&&Es.process,Xe=function(){try{var y=Cn&&Cn.require&&Cn.require("util").types;return y||Ba&&Ba.binding&&Ba.binding("util")}catch{}}(),Ss=Xe&&Xe.isArrayBuffer,Ns=Xe&&Xe.isDate,Ps=Xe&&Xe.isMap,Os=Xe&&Xe.isRegExp,xs=Xe&&Xe.isSet,Ks=Xe&&Xe.isTypedArray;function Ue(y,c,b){switch(b.length){case 0:return y.call(c);case 1:return y.call(c,b[0]);case 2:return y.call(c,b[0],b[1]);case 3:return y.call(c,b[0],b[1],b[2])}return y.apply(c,b)}function sg(y,c,b,_){for(var F=-1,z=y==null?0:y.length;++F<z;){var be=y[F];c(_,be,b(be),y)}return _}function Qe(y,c){for(var b=-1,_=y==null?0:y.length;++b<_&&c(y[b],b,y)!==!1;);return y}function lg(y,c){for(var b=y==null?0:y.length;b--&&c(y[b],b,y)!==!1;);return y}function Vs(y,c){for(var b=-1,_=y==null?0:y.length;++b<_;)if(!c(y[b],b,y))return!1;return!0}function Kn(y,c){for(var b=-1,_=y==null?0:y.length,F=0,z=[];++b<_;){var be=y[b];c(be,b,y)&&(z[F++]=be)}return z}function ot(y,c){var b=y==null?0:y.length;return!!b&&lr(y,c,0)>-1}function Ea(y,c,b){for(var _=-1,F=y==null?0:y.length;++_<F;)if(b(c,y[_]))return!0;return!1}function le(y,c){for(var b=-1,_=y==null?0:y.length,F=Array(_);++b<_;)F[b]=c(y[b],b,y);return F}function Vn(y,c){for(var b=-1,_=c.length,F=y.length;++b<_;)y[F+b]=c[b];return y}function _a(y,c,b,_){var F=-1,z=y==null?0:y.length;for(_&&z&&(b=y[++F]);++F<z;)b=c(b,y[F],F,y);return b}function ug(y,c,b,_){var F=y==null?0:y.length;for(_&&F&&(b=y[--F]);F--;)b=c(b,y[F],F,y);return b}function Sa(y,c){for(var b=-1,_=y==null?0:y.length;++b<_;)if(c(y[b],b,y))return!0;return!1}var og=Na("length");function dg(y){return y.split("")}function gg(y){return y.match(hd)||[]}function Fs(y,c,b){var _;return b(y,function(F,z,be){if(c(F,z,be))return _=z,!1}),_}function dt(y,c,b,_){for(var F=y.length,z=b+(_?1:-1);_?z--:++z<F;)if(c(y[z],z,y))return z;return-1}function lr(y,c,b){return c===c?Ag(y,c,b):dt(y,Is,b)}function kg(y,c,b,_){for(var F=b-1,z=y.length;++F<z;)if(_(y[F],c))return F;return-1}function Is(y){return y!==y}function Ms(y,c){var b=y==null?0:y.length;return b?Oa(y,c)/b:nt}function Na(y){return function(c){return c==null?a:c[y]}}function Pa(y){return function(c){return y==null?a:y[c]}}function Ls(y,c,b,_,F){return F(y,function(z,be,re){b=_?(_=!1,z):c(b,z,be,re)}),b}function mg(y,c){var b=y.length;for(y.sort(c);b--;)y[b]=y[b].value;return y}function Oa(y,c){for(var b,_=-1,F=y.length;++_<F;){var z=c(y[_]);z!==a&&(b=b===a?z:b+z)}return b}function xa(y,c){for(var b=-1,_=Array(y);++b<y;)_[b]=c(b);return _}function vg(y,c){return le(c,function(b){return[b,y[b]]})}function Us(y){return y&&y.slice(0,Cs(y)+1).replace(ca,"")}function He(y){return function(c){return y(c)}}function Ka(y,c){return le(c,function(b){return y[b]})}function Or(y,c){return y.has(c)}function Hs(y,c){for(var b=-1,_=y.length;++b<_&&lr(c,y[b],0)>-1;);return b}function Gs(y,c){for(var b=y.length;b--&&lr(c,y[b],0)>-1;);return b}function yg(y,c){for(var b=y.length,_=0;b--;)y[b]===c&&++_;return _}var pg=Pa(Qd),fg=Pa(eg);function bg(y){return"\\"+rg[y]}function hg(y,c){return y==null?a:y[c]}function ur(y){return zd.test(y)}function cg(y){return Jd.test(y)}function qg(y){for(var c,b=[];!(c=y.next()).done;)b.push(c.value);return b}function Va(y){var c=-1,b=Array(y.size);return y.forEach(function(_,F){b[++c]=[F,_]}),b}function Ds(y,c){return function(b){return y(c(b))}}function Fn(y,c){for(var b=-1,_=y.length,F=0,z=[];++b<_;){var be=y[b];(be===c||be===E)&&(y[b]=E,z[F++]=b)}return z}function gt(y){var c=-1,b=Array(y.size);return y.forEach(function(_){b[++c]=_}),b}function Tg(y){var c=-1,b=Array(y.size);return y.forEach(function(_){b[++c]=[_,_]}),b}function Ag(y,c,b){for(var _=b-1,F=y.length;++_<F;)if(y[_]===c)return _;return-1}function jg(y,c,b){for(var _=b+1;_--;)if(y[_]===c)return _;return _}function or(y){return ur(y)?Rg(y):og(y)}function dn(y){return ur(y)?Bg(y):dg(y)}function Cs(y){for(var c=y.length;c--&&yd.test(y.charAt(c)););return c}var wg=Pa(ng);function Rg(y){for(var c=wa.lastIndex=0;wa.test(y);)++c;return c}function Bg(y){return y.match(wa)||[]}function Eg(y){return y.match(Yd)||[]}var _g=function y(c){c=c==null?Te:dr.defaults(Te.Object(),c,dr.pick(Te,Zd));var b=c.Array,_=c.Date,F=c.Error,z=c.Function,be=c.Math,re=c.Object,Fa=c.RegExp,Sg=c.String,en=c.TypeError,kt=b.prototype,Ng=z.prototype,gr=re.prototype,mt=c["__core-js_shared__"],vt=Ng.toString,X=gr.hasOwnProperty,Pg=0,$s=function(){var e=/[^.]+$/.exec(mt&&mt.keys&&mt.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),yt=gr.toString,Og=vt.call(re),xg=Te._,Kg=Fa("^"+vt.call(X).replace(ha,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),pt=_s?c.Buffer:a,In=c.Symbol,ft=c.Uint8Array,Ws=pt?pt.allocUnsafe:a,bt=Ds(re.getPrototypeOf,re),Ys=re.create,zs=gr.propertyIsEnumerable,ht=kt.splice,Js=In?In.isConcatSpreadable:a,xr=In?In.iterator:a,$n=In?In.toStringTag:a,ct=function(){try{var e=Zn(re,"defineProperty");return e({},"",{}),e}catch{}}(),Vg=c.clearTimeout!==Te.clearTimeout&&c.clearTimeout,Fg=_&&_.now!==Te.Date.now&&_.now,Ig=c.setTimeout!==Te.setTimeout&&c.setTimeout,qt=be.ceil,Tt=be.floor,Ia=re.getOwnPropertySymbols,Mg=pt?pt.isBuffer:a,Zs=c.isFinite,Lg=kt.join,Ug=Ds(re.keys,re),he=be.max,we=be.min,Hg=_.now,Gg=c.parseInt,Xs=be.random,Dg=kt.reverse,Ma=Zn(c,"DataView"),Kr=Zn(c,"Map"),La=Zn(c,"Promise"),kr=Zn(c,"Set"),Vr=Zn(c,"WeakMap"),Fr=Zn(re,"create"),At=Vr&&new Vr,mr={},Cg=Xn(Ma),$g=Xn(Kr),Wg=Xn(La),Yg=Xn(kr),zg=Xn(Vr),jt=In?In.prototype:a,Ir=jt?jt.valueOf:a,Qs=jt?jt.toString:a;function l(e){if(de(e)&&!M(e)&&!(e instanceof D)){if(e instanceof nn)return e;if(X.call(e,"__wrapped__"))return eu(e)}return new nn(e)}var vr=function(){function e(){}return function(n){if(!ue(n))return{};if(Ys)return Ys(n);e.prototype=n;var r=new e;return e.prototype=a,r}}();function wt(){}function nn(e,n){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!n,this.__index__=0,this.__values__=a}l.templateSettings={escape:od,evaluate:dd,interpolate:us,variable:"",imports:{_:l}},l.prototype=wt.prototype,l.prototype.constructor=l,nn.prototype=vr(wt.prototype),nn.prototype.constructor=nn;function D(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=pn,this.__views__=[]}function Jg(){var e=new D(this.__wrapped__);return e.__actions__=Pe(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Pe(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Pe(this.__views__),e}function Zg(){if(this.__filtered__){var e=new D(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function Xg(){var e=this.__wrapped__.value(),n=this.__dir__,r=M(e),t=n<0,s=r?e.length:0,o=dm(0,s,this.__views__),k=o.start,v=o.end,p=v-k,T=t?v:k-1,A=this.__iteratees__,w=A.length,B=0,O=we(p,this.__takeCount__);if(!r||!t&&s==p&&O==p)return Al(e,this.__actions__);var K=[];e:for(;p--&&B<O;){T+=n;for(var U=-1,V=e[T];++U<w;){var G=A[U],C=G.iteratee,Ce=G.type,Se=C(V);if(Ce==yn)V=Se;else if(!Se){if(Ce==Me)continue e;break e}}K[B++]=V}return K}D.prototype=vr(wt.prototype),D.prototype.constructor=D;function Wn(e){var n=-1,r=e==null?0:e.length;for(this.clear();++n<r;){var t=e[n];this.set(t[0],t[1])}}function Qg(){this.__data__=Fr?Fr(null):{},this.size=0}function ek(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n}function nk(e){var n=this.__data__;if(Fr){var r=n[e];return r===j?a:r}return X.call(n,e)?n[e]:a}function rk(e){var n=this.__data__;return Fr?n[e]!==a:X.call(n,e)}function tk(e,n){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Fr&&n===a?j:n,this}Wn.prototype.clear=Qg,Wn.prototype.delete=ek,Wn.prototype.get=nk,Wn.prototype.has=rk,Wn.prototype.set=tk;function jn(e){var n=-1,r=e==null?0:e.length;for(this.clear();++n<r;){var t=e[n];this.set(t[0],t[1])}}function ak(){this.__data__=[],this.size=0}function ik(e){var n=this.__data__,r=Rt(n,e);if(r<0)return!1;var t=n.length-1;return r==t?n.pop():ht.call(n,r,1),--this.size,!0}function sk(e){var n=this.__data__,r=Rt(n,e);return r<0?a:n[r][1]}function lk(e){return Rt(this.__data__,e)>-1}function uk(e,n){var r=this.__data__,t=Rt(r,e);return t<0?(++this.size,r.push([e,n])):r[t][1]=n,this}jn.prototype.clear=ak,jn.prototype.delete=ik,jn.prototype.get=sk,jn.prototype.has=lk,jn.prototype.set=uk;function wn(e){var n=-1,r=e==null?0:e.length;for(this.clear();++n<r;){var t=e[n];this.set(t[0],t[1])}}function ok(){this.size=0,this.__data__={hash:new Wn,map:new(Kr||jn),string:new Wn}}function dk(e){var n=It(this,e).delete(e);return this.size-=n?1:0,n}function gk(e){return It(this,e).get(e)}function kk(e){return It(this,e).has(e)}function mk(e,n){var r=It(this,e),t=r.size;return r.set(e,n),this.size+=r.size==t?0:1,this}wn.prototype.clear=ok,wn.prototype.delete=dk,wn.prototype.get=gk,wn.prototype.has=kk,wn.prototype.set=mk;function Yn(e){var n=-1,r=e==null?0:e.length;for(this.__data__=new wn;++n<r;)this.add(e[n])}function vk(e){return this.__data__.set(e,j),this}function yk(e){return this.__data__.has(e)}Yn.prototype.add=Yn.prototype.push=vk,Yn.prototype.has=yk;function gn(e){var n=this.__data__=new jn(e);this.size=n.size}function pk(){this.__data__=new jn,this.size=0}function fk(e){var n=this.__data__,r=n.delete(e);return this.size=n.size,r}function bk(e){return this.__data__.get(e)}function hk(e){return this.__data__.has(e)}function ck(e,n){var r=this.__data__;if(r instanceof jn){var t=r.__data__;if(!Kr||t.length<g-1)return t.push([e,n]),this.size=++r.size,this;r=this.__data__=new wn(t)}return r.set(e,n),this.size=r.size,this}gn.prototype.clear=pk,gn.prototype.delete=fk,gn.prototype.get=bk,gn.prototype.has=hk,gn.prototype.set=ck;function el(e,n){var r=M(e),t=!r&&Qn(e),s=!r&&!t&&Gn(e),o=!r&&!t&&!s&&br(e),k=r||t||s||o,v=k?xa(e.length,Sg):[],p=v.length;for(var T in e)(n||X.call(e,T))&&!(k&&(T=="length"||s&&(T=="offset"||T=="parent")||o&&(T=="buffer"||T=="byteLength"||T=="byteOffset")||_n(T,p)))&&v.push(T);return v}function nl(e){var n=e.length;return n?e[Za(0,n-1)]:a}function qk(e,n){return Mt(Pe(e),zn(n,0,e.length))}function Tk(e){return Mt(Pe(e))}function Ua(e,n,r){(r!==a&&!kn(e[n],r)||r===a&&!(n in e))&&Rn(e,n,r)}function Mr(e,n,r){var t=e[n];(!(X.call(e,n)&&kn(t,r))||r===a&&!(n in e))&&Rn(e,n,r)}function Rt(e,n){for(var r=e.length;r--;)if(kn(e[r][0],n))return r;return-1}function Ak(e,n,r,t){return Mn(e,function(s,o,k){n(t,s,r(s),k)}),t}function rl(e,n){return e&&bn(n,qe(n),e)}function jk(e,n){return e&&bn(n,xe(n),e)}function Rn(e,n,r){n=="__proto__"&&ct?ct(e,n,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[n]=r}function Ha(e,n){for(var r=-1,t=n.length,s=b(t),o=e==null;++r<t;)s[r]=o?a:Ti(e,n[r]);return s}function zn(e,n,r){return e===e&&(r!==a&&(e=e<=r?e:r),n!==a&&(e=e>=n?e:n)),e}function rn(e,n,r,t,s,o){var k,v=n&S,p=n&I,T=n&P;if(r&&(k=s?r(e,t,s,o):r(e)),k!==a)return k;if(!ue(e))return e;var A=M(e);if(A){if(k=km(e),!v)return Pe(e,k)}else{var w=Re(e),B=w==at||w==as;if(Gn(e))return Rl(e,v);if(w==An||w==ar||B&&!s){if(k=p||B?{}:Cl(e),!v)return p?nm(e,jk(k,e)):em(e,rl(k,e))}else{if(!ae[w])return s?e:{};k=mm(e,w,v)}}o||(o=new gn);var O=o.get(e);if(O)return O;o.set(e,k),cu(e)?e.forEach(function(V){k.add(rn(V,n,r,V,e,o))}):bu(e)&&e.forEach(function(V,G){k.set(G,rn(V,n,r,G,e,o))});var K=T?p?ui:li:p?xe:qe,U=A?a:K(e);return Qe(U||e,function(V,G){U&&(G=V,V=e[G]),Mr(k,G,rn(V,n,r,G,e,o))}),k}function wk(e){var n=qe(e);return function(r){return tl(r,e,n)}}function tl(e,n,r){var t=r.length;if(e==null)return!t;for(e=re(e);t--;){var s=r[t],o=n[s],k=e[s];if(k===a&&!(s in e)||!o(k))return!1}return!0}function al(e,n,r){if(typeof e!="function")throw new en(h);return $r(function(){e.apply(a,r)},n)}function Lr(e,n,r,t){var s=-1,o=ot,k=!0,v=e.length,p=[],T=n.length;if(!v)return p;r&&(n=le(n,He(r))),t?(o=Ea,k=!1):n.length>=g&&(o=Or,k=!1,n=new Yn(n));e:for(;++s<v;){var A=e[s],w=r==null?A:r(A);if(A=t||A!==0?A:0,k&&w===w){for(var B=T;B--;)if(n[B]===w)continue e;p.push(A)}else o(n,w,t)||p.push(A)}return p}var Mn=Nl(fn),il=Nl(Da,!0);function Rk(e,n){var r=!0;return Mn(e,function(t,s,o){return r=!!n(t,s,o),r}),r}function Bt(e,n,r){for(var t=-1,s=e.length;++t<s;){var o=e[t],k=n(o);if(k!=null&&(v===a?k===k&&!De(k):r(k,v)))var v=k,p=o}return p}function Bk(e,n,r,t){var s=e.length;for(r=L(r),r<0&&(r=-r>s?0:s+r),t=t===a||t>s?s:L(t),t<0&&(t+=s),t=r>t?0:Tu(t);r<t;)e[r++]=n;return e}function sl(e,n){var r=[];return Mn(e,function(t,s,o){n(t,s,o)&&r.push(t)}),r}function Ae(e,n,r,t,s){var o=-1,k=e.length;for(r||(r=ym),s||(s=[]);++o<k;){var v=e[o];n>0&&r(v)?n>1?Ae(v,n-1,r,t,s):Vn(s,v):t||(s[s.length]=v)}return s}var Ga=Pl(),ll=Pl(!0);function fn(e,n){return e&&Ga(e,n,qe)}function Da(e,n){return e&&ll(e,n,qe)}function Et(e,n){return Kn(n,function(r){return Sn(e[r])})}function Jn(e,n){n=Un(n,e);for(var r=0,t=n.length;e!=null&&r<t;)e=e[hn(n[r++])];return r&&r==t?e:a}function ul(e,n,r){var t=n(e);return M(e)?t:Vn(t,r(e))}function Ee(e){return e==null?e===a?rd:ed:$n&&$n in re(e)?om(e):Tm(e)}function Ca(e,n){return e>n}function Ek(e,n){return e!=null&&X.call(e,n)}function _k(e,n){return e!=null&&n in re(e)}function Sk(e,n,r){return e>=we(n,r)&&e<he(n,r)}function $a(e,n,r){for(var t=r?Ea:ot,s=e[0].length,o=e.length,k=o,v=b(o),p=1/0,T=[];k--;){var A=e[k];k&&n&&(A=le(A,He(n))),p=we(A.length,p),v[k]=!r&&(n||s>=120&&A.length>=120)?new Yn(k&&A):a}A=e[0];var w=-1,B=v[0];e:for(;++w<s&&T.length<p;){var O=A[w],K=n?n(O):O;if(O=r||O!==0?O:0,!(B?Or(B,K):t(T,K,r))){for(k=o;--k;){var U=v[k];if(!(U?Or(U,K):t(e[k],K,r)))continue e}B&&B.push(K),T.push(O)}}return T}function Nk(e,n,r,t){return fn(e,function(s,o,k){n(t,r(s),o,k)}),t}function Ur(e,n,r){n=Un(n,e),e=zl(e,n);var t=e==null?e:e[hn(an(n))];return t==null?a:Ue(t,e,r)}function ol(e){return de(e)&&Ee(e)==ar}function Pk(e){return de(e)&&Ee(e)==Pr}function Ok(e){return de(e)&&Ee(e)==Br}function Hr(e,n,r,t,s){return e===n?!0:e==null||n==null||!de(e)&&!de(n)?e!==e&&n!==n:xk(e,n,r,t,Hr,s)}function xk(e,n,r,t,s,o){var k=M(e),v=M(n),p=k?rt:Re(e),T=v?rt:Re(n);p=p==ar?An:p,T=T==ar?An:T;var A=p==An,w=T==An,B=p==T;if(B&&Gn(e)){if(!Gn(n))return!1;k=!0,A=!1}if(B&&!A)return o||(o=new gn),k||br(e)?Hl(e,n,r,t,s,o):lm(e,n,p,r,t,s,o);if(!(r&J)){var O=A&&X.call(e,"__wrapped__"),K=w&&X.call(n,"__wrapped__");if(O||K){var U=O?e.value():e,V=K?n.value():n;return o||(o=new gn),s(U,V,r,t,o)}}return B?(o||(o=new gn),um(e,n,r,t,s,o)):!1}function Kk(e){return de(e)&&Re(e)==un}function Wa(e,n,r,t){var s=r.length,o=s,k=!t;if(e==null)return!o;for(e=re(e);s--;){var v=r[s];if(k&&v[2]?v[1]!==e[v[0]]:!(v[0]in e))return!1}for(;++s<o;){v=r[s];var p=v[0],T=e[p],A=v[1];if(k&&v[2]){if(T===a&&!(p in e))return!1}else{var w=new gn;if(t)var B=t(T,A,p,e,n,w);if(!(B===a?Hr(A,T,J|me,t,w):B))return!1}}return!0}function dl(e){if(!ue(e)||fm(e))return!1;var n=Sn(e)?Kg:wd;return n.test(Xn(e))}function Vk(e){return de(e)&&Ee(e)==_r}function Fk(e){return de(e)&&Re(e)==on}function Ik(e){return de(e)&&Ct(e.length)&&!!se[Ee(e)]}function gl(e){return typeof e=="function"?e:e==null?Ke:typeof e=="object"?M(e)?vl(e[0],e[1]):ml(e):Ou(e)}function Ya(e){if(!Cr(e))return Ug(e);var n=[];for(var r in re(e))X.call(e,r)&&r!="constructor"&&n.push(r);return n}function Mk(e){if(!ue(e))return qm(e);var n=Cr(e),r=[];for(var t in e)t=="constructor"&&(n||!X.call(e,t))||r.push(t);return r}function za(e,n){return e<n}function kl(e,n){var r=-1,t=Oe(e)?b(e.length):[];return Mn(e,function(s,o,k){t[++r]=n(s,o,k)}),t}function ml(e){var n=di(e);return n.length==1&&n[0][2]?Wl(n[0][0],n[0][1]):function(r){return r===e||Wa(r,e,n)}}function vl(e,n){return ki(e)&&$l(n)?Wl(hn(e),n):function(r){var t=Ti(r,e);return t===a&&t===n?Ai(r,e):Hr(n,t,J|me)}}function _t(e,n,r,t,s){e!==n&&Ga(n,function(o,k){if(s||(s=new gn),ue(o))Lk(e,n,k,r,_t,t,s);else{var v=t?t(vi(e,k),o,k+"",e,n,s):a;v===a&&(v=o),Ua(e,k,v)}},xe)}function Lk(e,n,r,t,s,o,k){var v=vi(e,r),p=vi(n,r),T=k.get(p);if(T){Ua(e,r,T);return}var A=o?o(v,p,r+"",e,n,k):a,w=A===a;if(w){var B=M(p),O=!B&&Gn(p),K=!B&&!O&&br(p);A=p,B||O||K?M(v)?A=v:ve(v)?A=Pe(v):O?(w=!1,A=Rl(p,!0)):K?(w=!1,A=Bl(p,!0)):A=[]:Wr(p)||Qn(p)?(A=v,Qn(v)?A=Au(v):(!ue(v)||Sn(v))&&(A=Cl(p))):w=!1}w&&(k.set(p,A),s(A,p,t,o,k),k.delete(p)),Ua(e,r,A)}function yl(e,n){var r=e.length;if(r)return n+=n<0?r:0,_n(n,r)?e[n]:a}function pl(e,n,r){n.length?n=le(n,function(o){return M(o)?function(k){return Jn(k,o.length===1?o[0]:o)}:o}):n=[Ke];var t=-1;n=le(n,He(x()));var s=kl(e,function(o,k,v){var p=le(n,function(T){return T(o)});return{criteria:p,index:++t,value:o}});return mg(s,function(o,k){return Qk(o,k,r)})}function Uk(e,n){return fl(e,n,function(r,t){return Ai(e,t)})}function fl(e,n,r){for(var t=-1,s=n.length,o={};++t<s;){var k=n[t],v=Jn(e,k);r(v,k)&&Gr(o,Un(k,e),v)}return o}function Hk(e){return function(n){return Jn(n,e)}}function Ja(e,n,r,t){var s=t?kg:lr,o=-1,k=n.length,v=e;for(e===n&&(n=Pe(n)),r&&(v=le(e,He(r)));++o<k;)for(var p=0,T=n[o],A=r?r(T):T;(p=s(v,A,p,t))>-1;)v!==e&&ht.call(v,p,1),ht.call(e,p,1);return e}function bl(e,n){for(var r=e?n.length:0,t=r-1;r--;){var s=n[r];if(r==t||s!==o){var o=s;_n(s)?ht.call(e,s,1):ei(e,s)}}return e}function Za(e,n){return e+Tt(Xs()*(n-e+1))}function Gk(e,n,r,t){for(var s=-1,o=he(qt((n-e)/(r||1)),0),k=b(o);o--;)k[t?o:++s]=e,e+=r;return k}function Xa(e,n){var r="";if(!e||n<1||n>Ze)return r;do n%2&&(r+=e),n=Tt(n/2),n&&(e+=e);while(n);return r}function H(e,n){return yi(Yl(e,n,Ke),e+"")}function Dk(e){return nl(hr(e))}function Ck(e,n){var r=hr(e);return Mt(r,zn(n,0,r.length))}function Gr(e,n,r,t){if(!ue(e))return e;n=Un(n,e);for(var s=-1,o=n.length,k=o-1,v=e;v!=null&&++s<o;){var p=hn(n[s]),T=r;if(p==="__proto__"||p==="constructor"||p==="prototype")return e;if(s!=k){var A=v[p];T=t?t(A,p,v):a,T===a&&(T=ue(A)?A:_n(n[s+1])?[]:{})}Mr(v,p,T),v=v[p]}return e}var hl=At?function(e,n){return At.set(e,n),e}:Ke,$k=ct?function(e,n){return ct(e,"toString",{configurable:!0,enumerable:!1,value:wi(n),writable:!0})}:Ke;function Wk(e){return Mt(hr(e))}function tn(e,n,r){var t=-1,s=e.length;n<0&&(n=-n>s?0:s+n),r=r>s?s:r,r<0&&(r+=s),s=n>r?0:r-n>>>0,n>>>=0;for(var o=b(s);++t<s;)o[t]=e[t+n];return o}function Yk(e,n){var r;return Mn(e,function(t,s,o){return r=n(t,s,o),!r}),!!r}function St(e,n,r){var t=0,s=e==null?t:e.length;if(typeof n=="number"&&n===n&&s<=Jo){for(;t<s;){var o=t+s>>>1,k=e[o];k!==null&&!De(k)&&(r?k<=n:k<n)?t=o+1:s=o}return s}return Qa(e,n,Ke,r)}function Qa(e,n,r,t){var s=0,o=e==null?0:e.length;if(o===0)return 0;n=r(n);for(var k=n!==n,v=n===null,p=De(n),T=n===a;s<o;){var A=Tt((s+o)/2),w=r(e[A]),B=w!==a,O=w===null,K=w===w,U=De(w);if(k)var V=t||K;else T?V=K&&(t||B):v?V=K&&B&&(t||!O):p?V=K&&B&&!O&&(t||!U):O||U?V=!1:V=t?w<=n:w<n;V?s=A+1:o=A}return we(o,zo)}function cl(e,n){for(var r=-1,t=e.length,s=0,o=[];++r<t;){var k=e[r],v=n?n(k):k;if(!r||!kn(v,p)){var p=v;o[s++]=k===0?0:k}}return o}function ql(e){return typeof e=="number"?e:De(e)?nt:+e}function Ge(e){if(typeof e=="string")return e;if(M(e))return le(e,Ge)+"";if(De(e))return Qs?Qs.call(e):"";var n=e+"";return n=="0"&&1/e==-1/0?"-0":n}function Ln(e,n,r){var t=-1,s=ot,o=e.length,k=!0,v=[],p=v;if(r)k=!1,s=Ea;else if(o>=g){var T=n?null:im(e);if(T)return gt(T);k=!1,s=Or,p=new Yn}else p=n?[]:v;e:for(;++t<o;){var A=e[t],w=n?n(A):A;if(A=r||A!==0?A:0,k&&w===w){for(var B=p.length;B--;)if(p[B]===w)continue e;n&&p.push(w),v.push(A)}else s(p,w,r)||(p!==v&&p.push(w),v.push(A))}return v}function ei(e,n){return n=Un(n,e),e=zl(e,n),e==null||delete e[hn(an(n))]}function Tl(e,n,r,t){return Gr(e,n,r(Jn(e,n)),t)}function Nt(e,n,r,t){for(var s=e.length,o=t?s:-1;(t?o--:++o<s)&&n(e[o],o,e););return r?tn(e,t?0:o,t?o+1:s):tn(e,t?o+1:0,t?s:o)}function Al(e,n){var r=e;return r instanceof D&&(r=r.value()),_a(n,function(t,s){return s.func.apply(s.thisArg,Vn([t],s.args))},r)}function ni(e,n,r){var t=e.length;if(t<2)return t?Ln(e[0]):[];for(var s=-1,o=b(t);++s<t;)for(var k=e[s],v=-1;++v<t;)v!=s&&(o[s]=Lr(o[s]||k,e[v],n,r));return Ln(Ae(o,1),n,r)}function jl(e,n,r){for(var t=-1,s=e.length,o=n.length,k={};++t<s;){var v=t<o?n[t]:a;r(k,e[t],v)}return k}function ri(e){return ve(e)?e:[]}function ti(e){return typeof e=="function"?e:Ke}function Un(e,n){return M(e)?e:ki(e,n)?[e]:Ql(Z(e))}var zk=H;function Hn(e,n,r){var t=e.length;return r=r===a?t:r,!n&&r>=t?e:tn(e,n,r)}var wl=Vg||function(e){return Te.clearTimeout(e)};function Rl(e,n){if(n)return e.slice();var r=e.length,t=Ws?Ws(r):new e.constructor(r);return e.copy(t),t}function ai(e){var n=new e.constructor(e.byteLength);return new ft(n).set(new ft(e)),n}function Jk(e,n){var r=n?ai(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}function Zk(e){var n=new e.constructor(e.source,os.exec(e));return n.lastIndex=e.lastIndex,n}function Xk(e){return Ir?re(Ir.call(e)):{}}function Bl(e,n){var r=n?ai(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function El(e,n){if(e!==n){var r=e!==a,t=e===null,s=e===e,o=De(e),k=n!==a,v=n===null,p=n===n,T=De(n);if(!v&&!T&&!o&&e>n||o&&k&&p&&!v&&!T||t&&k&&p||!r&&p||!s)return 1;if(!t&&!o&&!T&&e<n||T&&r&&s&&!t&&!o||v&&r&&s||!k&&s||!p)return-1}return 0}function Qk(e,n,r){for(var t=-1,s=e.criteria,o=n.criteria,k=s.length,v=r.length;++t<k;){var p=El(s[t],o[t]);if(p){if(t>=v)return p;var T=r[t];return p*(T=="desc"?-1:1)}}return e.index-n.index}function _l(e,n,r,t){for(var s=-1,o=e.length,k=r.length,v=-1,p=n.length,T=he(o-k,0),A=b(p+T),w=!t;++v<p;)A[v]=n[v];for(;++s<k;)(w||s<o)&&(A[r[s]]=e[s]);for(;T--;)A[v++]=e[s++];return A}function Sl(e,n,r,t){for(var s=-1,o=e.length,k=-1,v=r.length,p=-1,T=n.length,A=he(o-v,0),w=b(A+T),B=!t;++s<A;)w[s]=e[s];for(var O=s;++p<T;)w[O+p]=n[p];for(;++k<v;)(B||s<o)&&(w[O+r[k]]=e[s++]);return w}function Pe(e,n){var r=-1,t=e.length;for(n||(n=b(t));++r<t;)n[r]=e[r];return n}function bn(e,n,r,t){var s=!r;r||(r={});for(var o=-1,k=n.length;++o<k;){var v=n[o],p=t?t(r[v],e[v],v,r,e):a;p===a&&(p=e[v]),s?Rn(r,v,p):Mr(r,v,p)}return r}function em(e,n){return bn(e,gi(e),n)}function nm(e,n){return bn(e,Gl(e),n)}function Pt(e,n){return function(r,t){var s=M(r)?sg:Ak,o=n?n():{};return s(r,e,x(t,2),o)}}function yr(e){return H(function(n,r){var t=-1,s=r.length,o=s>1?r[s-1]:a,k=s>2?r[2]:a;for(o=e.length>3&&typeof o=="function"?(s--,o):a,k&&_e(r[0],r[1],k)&&(o=s<3?a:o,s=1),n=re(n);++t<s;){var v=r[t];v&&e(n,v,t,o)}return n})}function Nl(e,n){return function(r,t){if(r==null)return r;if(!Oe(r))return e(r,t);for(var s=r.length,o=n?s:-1,k=re(r);(n?o--:++o<s)&&t(k[o],o,k)!==!1;);return r}}function Pl(e){return function(n,r,t){for(var s=-1,o=re(n),k=t(n),v=k.length;v--;){var p=k[e?v:++s];if(r(o[p],p,o)===!1)break}return n}}function rm(e,n,r){var t=n&W,s=Dr(e);function o(){var k=this&&this!==Te&&this instanceof o?s:e;return k.apply(t?r:this,arguments)}return o}function Ol(e){return function(n){n=Z(n);var r=ur(n)?dn(n):a,t=r?r[0]:n.charAt(0),s=r?Hn(r,1).join(""):n.slice(1);return t[e]()+s}}function pr(e){return function(n){return _a(Nu(Su(n).replace($d,"")),e,"")}}function Dr(e){return function(){var n=arguments;switch(n.length){case 0:return new e;case 1:return new e(n[0]);case 2:return new e(n[0],n[1]);case 3:return new e(n[0],n[1],n[2]);case 4:return new e(n[0],n[1],n[2],n[3]);case 5:return new e(n[0],n[1],n[2],n[3],n[4]);case 6:return new e(n[0],n[1],n[2],n[3],n[4],n[5]);case 7:return new e(n[0],n[1],n[2],n[3],n[4],n[5],n[6])}var r=vr(e.prototype),t=e.apply(r,n);return ue(t)?t:r}}function tm(e,n,r){var t=Dr(e);function s(){for(var o=arguments.length,k=b(o),v=o,p=fr(s);v--;)k[v]=arguments[v];var T=o<3&&k[0]!==p&&k[o-1]!==p?[]:Fn(k,p);if(o-=T.length,o<r)return Il(e,n,Ot,s.placeholder,a,k,T,a,a,r-o);var A=this&&this!==Te&&this instanceof s?t:e;return Ue(A,this,k)}return s}function xl(e){return function(n,r,t){var s=re(n);if(!Oe(n)){var o=x(r,3);n=qe(n),r=function(v){return o(s[v],v,s)}}var k=e(n,r,t);return k>-1?s[o?n[k]:k]:a}}function Kl(e){return En(function(n){var r=n.length,t=r,s=nn.prototype.thru;for(e&&n.reverse();t--;){var o=n[t];if(typeof o!="function")throw new en(h);if(s&&!k&&Ft(o)=="wrapper")var k=new nn([],!0)}for(t=k?t:r;++t<r;){o=n[t];var v=Ft(o),p=v=="wrapper"?oi(o):a;p&&mi(p[0])&&p[1]==(fe|pe|ie|Ie)&&!p[4].length&&p[9]==1?k=k[Ft(p[0])].apply(k,p[3]):k=o.length==1&&mi(o)?k[v]():k.thru(o)}return function(){var T=arguments,A=T[0];if(k&&T.length==1&&M(A))return k.plant(A).value();for(var w=0,B=r?n[w].apply(this,T):A;++w<r;)B=n[w].call(this,B);return B}})}function Ot(e,n,r,t,s,o,k,v,p,T){var A=n&fe,w=n&W,B=n&ce,O=n&(pe|Q),K=n&je,U=B?a:Dr(e);function V(){for(var G=arguments.length,C=b(G),Ce=G;Ce--;)C[Ce]=arguments[Ce];if(O)var Se=fr(V),$e=yg(C,Se);if(t&&(C=_l(C,t,s,O)),o&&(C=Sl(C,o,k,O)),G-=$e,O&&G<T){var ye=Fn(C,Se);return Il(e,n,Ot,V.placeholder,r,C,ye,v,p,T-G)}var mn=w?r:this,Pn=B?mn[e]:e;return G=C.length,v?C=Am(C,v):K&&G>1&&C.reverse(),A&&p<G&&(C.length=p),this&&this!==Te&&this instanceof V&&(Pn=U||Dr(Pn)),Pn.apply(mn,C)}return V}function Vl(e,n){return function(r,t){return Nk(r,e,n(t),{})}}function xt(e,n){return function(r,t){var s;if(r===a&&t===a)return n;if(r!==a&&(s=r),t!==a){if(s===a)return t;typeof r=="string"||typeof t=="string"?(r=Ge(r),t=Ge(t)):(r=ql(r),t=ql(t)),s=e(r,t)}return s}}function ii(e){return En(function(n){return n=le(n,He(x())),H(function(r){var t=this;return e(n,function(s){return Ue(s,t,r)})})})}function Kt(e,n){n=n===a?" ":Ge(n);var r=n.length;if(r<2)return r?Xa(n,e):n;var t=Xa(n,qt(e/or(n)));return ur(n)?Hn(dn(t),0,e).join(""):t.slice(0,e)}function am(e,n,r,t){var s=n&W,o=Dr(e);function k(){for(var v=-1,p=arguments.length,T=-1,A=t.length,w=b(A+p),B=this&&this!==Te&&this instanceof k?o:e;++T<A;)w[T]=t[T];for(;p--;)w[T++]=arguments[++v];return Ue(B,s?r:this,w)}return k}function Fl(e){return function(n,r,t){return t&&typeof t!="number"&&_e(n,r,t)&&(r=t=a),n=Nn(n),r===a?(r=n,n=0):r=Nn(r),t=t===a?n<r?1:-1:Nn(t),Gk(n,r,t,e)}}function Vt(e){return function(n,r){return typeof n=="string"&&typeof r=="string"||(n=sn(n),r=sn(r)),e(n,r)}}function Il(e,n,r,t,s,o,k,v,p,T){var A=n&pe,w=A?k:a,B=A?a:k,O=A?o:a,K=A?a:o;n|=A?ie:Ne,n&=~(A?Ne:ie),n&Y||(n&=-4);var U=[e,n,s,O,w,K,B,v,p,T],V=r.apply(a,U);return mi(e)&&Jl(V,U),V.placeholder=t,Zl(V,e,n)}function si(e){var n=be[e];return function(r,t){if(r=sn(r),t=t==null?0:we(L(t),292),t&&Zs(r)){var s=(Z(r)+"e").split("e"),o=n(s[0]+"e"+(+s[1]+t));return s=(Z(o)+"e").split("e"),+(s[0]+"e"+(+s[1]-t))}return n(r)}}var im=kr&&1/gt(new kr([,-0]))[1]==Le?function(e){return new kr(e)}:Ei;function Ml(e){return function(n){var r=Re(n);return r==un?Va(n):r==on?Tg(n):vg(n,e(n))}}function Bn(e,n,r,t,s,o,k,v){var p=n&ce;if(!p&&typeof e!="function")throw new en(h);var T=t?t.length:0;if(T||(n&=-97,t=s=a),k=k===a?k:he(L(k),0),v=v===a?v:L(v),T-=s?s.length:0,n&Ne){var A=t,w=s;t=s=a}var B=p?a:oi(e),O=[e,n,r,t,s,A,w,o,k,v];if(B&&cm(O,B),e=O[0],n=O[1],r=O[2],t=O[3],s=O[4],v=O[9]=O[9]===a?p?0:e.length:he(O[9]-T,0),!v&&n&(pe|Q)&&(n&=-25),!n||n==W)var K=rm(e,n,r);else n==pe||n==Q?K=tm(e,n,v):(n==ie||n==(W|ie))&&!s.length?K=am(e,n,r,t):K=Ot.apply(a,O);var U=B?hl:Jl;return Zl(U(K,O),e,n)}function Ll(e,n,r,t){return e===a||kn(e,gr[r])&&!X.call(t,r)?n:e}function Ul(e,n,r,t,s,o){return ue(e)&&ue(n)&&(o.set(n,e),_t(e,n,a,Ul,o),o.delete(n)),e}function sm(e){return Wr(e)?a:e}function Hl(e,n,r,t,s,o){var k=r&J,v=e.length,p=n.length;if(v!=p&&!(k&&p>v))return!1;var T=o.get(e),A=o.get(n);if(T&&A)return T==n&&A==e;var w=-1,B=!0,O=r&me?new Yn:a;for(o.set(e,n),o.set(n,e);++w<v;){var K=e[w],U=n[w];if(t)var V=k?t(U,K,w,n,e,o):t(K,U,w,e,n,o);if(V!==a){if(V)continue;B=!1;break}if(O){if(!Sa(n,function(G,C){if(!Or(O,C)&&(K===G||s(K,G,r,t,o)))return O.push(C)})){B=!1;break}}else if(!(K===U||s(K,U,r,t,o))){B=!1;break}}return o.delete(e),o.delete(n),B}function lm(e,n,r,t,s,o,k){switch(r){case ir:if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case Pr:return!(e.byteLength!=n.byteLength||!o(new ft(e),new ft(n)));case Rr:case Br:case Er:return kn(+e,+n);case tt:return e.name==n.name&&e.message==n.message;case _r:case Sr:return e==n+"";case un:var v=Va;case on:var p=t&J;if(v||(v=gt),e.size!=n.size&&!p)return!1;var T=k.get(e);if(T)return T==n;t|=me,k.set(e,n);var A=Hl(v(e),v(n),t,s,o,k);return k.delete(e),A;case it:if(Ir)return Ir.call(e)==Ir.call(n)}return!1}function um(e,n,r,t,s,o){var k=r&J,v=li(e),p=v.length,T=li(n),A=T.length;if(p!=A&&!k)return!1;for(var w=p;w--;){var B=v[w];if(!(k?B in n:X.call(n,B)))return!1}var O=o.get(e),K=o.get(n);if(O&&K)return O==n&&K==e;var U=!0;o.set(e,n),o.set(n,e);for(var V=k;++w<p;){B=v[w];var G=e[B],C=n[B];if(t)var Ce=k?t(C,G,B,n,e,o):t(G,C,B,e,n,o);if(!(Ce===a?G===C||s(G,C,r,t,o):Ce)){U=!1;break}V||(V=B=="constructor")}if(U&&!V){var Se=e.constructor,$e=n.constructor;Se!=$e&&"constructor"in e&&"constructor"in n&&!(typeof Se=="function"&&Se instanceof Se&&typeof $e=="function"&&$e instanceof $e)&&(U=!1)}return o.delete(e),o.delete(n),U}function En(e){return yi(Yl(e,a,tu),e+"")}function li(e){return ul(e,qe,gi)}function ui(e){return ul(e,xe,Gl)}var oi=At?function(e){return At.get(e)}:Ei;function Ft(e){for(var n=e.name+"",r=mr[n],t=X.call(mr,n)?r.length:0;t--;){var s=r[t],o=s.func;if(o==null||o==e)return s.name}return n}function fr(e){var n=X.call(l,"placeholder")?l:e;return n.placeholder}function x(){var e=l.iteratee||Ri;return e=e===Ri?gl:e,arguments.length?e(arguments[0],arguments[1]):e}function It(e,n){var r=e.__data__;return pm(n)?r[typeof n=="string"?"string":"hash"]:r.map}function di(e){for(var n=qe(e),r=n.length;r--;){var t=n[r],s=e[t];n[r]=[t,s,$l(s)]}return n}function Zn(e,n){var r=hg(e,n);return dl(r)?r:a}function om(e){var n=X.call(e,$n),r=e[$n];try{e[$n]=a;var t=!0}catch{}var s=yt.call(e);return t&&(n?e[$n]=r:delete e[$n]),s}var gi=Ia?function(e){return e==null?[]:(e=re(e),Kn(Ia(e),function(n){return zs.call(e,n)}))}:_i,Gl=Ia?function(e){for(var n=[];e;)Vn(n,gi(e)),e=bt(e);return n}:_i,Re=Ee;(Ma&&Re(new Ma(new ArrayBuffer(1)))!=ir||Kr&&Re(new Kr)!=un||La&&Re(La.resolve())!=is||kr&&Re(new kr)!=on||Vr&&Re(new Vr)!=Nr)&&(Re=function(e){var n=Ee(e),r=n==An?e.constructor:a,t=r?Xn(r):"";if(t)switch(t){case Cg:return ir;case $g:return un;case Wg:return is;case Yg:return on;case zg:return Nr}return n});function dm(e,n,r){for(var t=-1,s=r.length;++t<s;){var o=r[t],k=o.size;switch(o.type){case"drop":e+=k;break;case"dropRight":n-=k;break;case"take":n=we(n,e+k);break;case"takeRight":e=he(e,n-k);break}}return{start:e,end:n}}function gm(e){var n=e.match(fd);return n?n[1].split(bd):[]}function Dl(e,n,r){n=Un(n,e);for(var t=-1,s=n.length,o=!1;++t<s;){var k=hn(n[t]);if(!(o=e!=null&&r(e,k)))break;e=e[k]}return o||++t!=s?o:(s=e==null?0:e.length,!!s&&Ct(s)&&_n(k,s)&&(M(e)||Qn(e)))}function km(e){var n=e.length,r=new e.constructor(n);return n&&typeof e[0]=="string"&&X.call(e,"index")&&(r.index=e.index,r.input=e.input),r}function Cl(e){return typeof e.constructor=="function"&&!Cr(e)?vr(bt(e)):{}}function mm(e,n,r){var t=e.constructor;switch(n){case Pr:return ai(e);case Rr:case Br:return new t(+e);case ir:return Jk(e,r);case da:case ga:case ka:case ma:case va:case ya:case pa:case fa:case ba:return Bl(e,r);case un:return new t;case Er:case Sr:return new t(e);case _r:return Zk(e);case on:return new t;case it:return Xk(e)}}function vm(e,n){var r=n.length;if(!r)return e;var t=r-1;return n[t]=(r>1?"& ":"")+n[t],n=n.join(r>2?", ":" "),e.replace(pd,`{
/* [wrapped with `+n+`] */
`)}function ym(e){return M(e)||Qn(e)||!!(Js&&e&&e[Js])}function _n(e,n){var r=typeof e;return n=n??Ze,!!n&&(r=="number"||r!="symbol"&&Bd.test(e))&&e>-1&&e%1==0&&e<n}function _e(e,n,r){if(!ue(r))return!1;var t=typeof n;return(t=="number"?Oe(r)&&_n(n,r.length):t=="string"&&n in r)?kn(r[n],e):!1}function ki(e,n){if(M(e))return!1;var r=typeof e;return r=="number"||r=="symbol"||r=="boolean"||e==null||De(e)?!0:kd.test(e)||!gd.test(e)||n!=null&&e in re(n)}function pm(e){var n=typeof e;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?e!=="__proto__":e===null}function mi(e){var n=Ft(e),r=l[n];if(typeof r!="function"||!(n in D.prototype))return!1;if(e===r)return!0;var t=oi(r);return!!t&&e===t[0]}function fm(e){return!!$s&&$s in e}var bm=mt?Sn:Si;function Cr(e){var n=e&&e.constructor,r=typeof n=="function"&&n.prototype||gr;return e===r}function $l(e){return e===e&&!ue(e)}function Wl(e,n){return function(r){return r==null?!1:r[e]===n&&(n!==a||e in re(r))}}function hm(e){var n=Gt(e,function(t){return r.size===R&&r.clear(),t}),r=n.cache;return n}function cm(e,n){var r=e[1],t=n[1],s=r|t,o=s<(W|ce|fe),k=t==fe&&r==pe||t==fe&&r==Ie&&e[7].length<=n[8]||t==(fe|Ie)&&n[7].length<=n[8]&&r==pe;if(!(o||k))return e;t&W&&(e[2]=n[2],s|=r&W?0:Y);var v=n[3];if(v){var p=e[3];e[3]=p?_l(p,v,n[4]):v,e[4]=p?Fn(e[3],E):n[4]}return v=n[5],v&&(p=e[5],e[5]=p?Sl(p,v,n[6]):v,e[6]=p?Fn(e[5],E):n[6]),v=n[7],v&&(e[7]=v),t&fe&&(e[8]=e[8]==null?n[8]:we(e[8],n[8])),e[9]==null&&(e[9]=n[9]),e[0]=n[0],e[1]=s,e}function qm(e){var n=[];if(e!=null)for(var r in re(e))n.push(r);return n}function Tm(e){return yt.call(e)}function Yl(e,n,r){return n=he(n===a?e.length-1:n,0),function(){for(var t=arguments,s=-1,o=he(t.length-n,0),k=b(o);++s<o;)k[s]=t[n+s];s=-1;for(var v=b(n+1);++s<n;)v[s]=t[s];return v[n]=r(k),Ue(e,this,v)}}function zl(e,n){return n.length<2?e:Jn(e,tn(n,0,-1))}function Am(e,n){for(var r=e.length,t=we(n.length,r),s=Pe(e);t--;){var o=n[t];e[t]=_n(o,r)?s[o]:a}return e}function vi(e,n){if(!(n==="constructor"&&typeof e[n]=="function")&&n!="__proto__")return e[n]}var Jl=Xl(hl),$r=Ig||function(e,n){return Te.setTimeout(e,n)},yi=Xl($k);function Zl(e,n,r){var t=n+"";return yi(e,vm(t,jm(gm(t),r)))}function Xl(e){var n=0,r=0;return function(){var t=Hg(),s=ne-(t-r);if(r=t,s>0){if(++n>=Je)return arguments[0]}else n=0;return e.apply(a,arguments)}}function Mt(e,n){var r=-1,t=e.length,s=t-1;for(n=n===a?t:n;++r<n;){var o=Za(r,s),k=e[o];e[o]=e[r],e[r]=k}return e.length=n,e}var Ql=hm(function(e){var n=[];return e.charCodeAt(0)===46&&n.push(""),e.replace(md,function(r,t,s,o){n.push(s?o.replace(qd,"$1"):t||r)}),n});function hn(e){if(typeof e=="string"||De(e))return e;var n=e+"";return n=="0"&&1/e==-1/0?"-0":n}function Xn(e){if(e!=null){try{return vt.call(e)}catch{}try{return e+""}catch{}}return""}function jm(e,n){return Qe(Zo,function(r){var t="_."+r[0];n&r[1]&&!ot(e,t)&&e.push(t)}),e.sort()}function eu(e){if(e instanceof D)return e.clone();var n=new nn(e.__wrapped__,e.__chain__);return n.__actions__=Pe(e.__actions__),n.__index__=e.__index__,n.__values__=e.__values__,n}function wm(e,n,r){(r?_e(e,n,r):n===a)?n=1:n=he(L(n),0);var t=e==null?0:e.length;if(!t||n<1)return[];for(var s=0,o=0,k=b(qt(t/n));s<t;)k[o++]=tn(e,s,s+=n);return k}function Rm(e){for(var n=-1,r=e==null?0:e.length,t=0,s=[];++n<r;){var o=e[n];o&&(s[t++]=o)}return s}function Bm(){var e=arguments.length;if(!e)return[];for(var n=b(e-1),r=arguments[0],t=e;t--;)n[t-1]=arguments[t];return Vn(M(r)?Pe(r):[r],Ae(n,1))}var Em=H(function(e,n){return ve(e)?Lr(e,Ae(n,1,ve,!0)):[]}),_m=H(function(e,n){var r=an(n);return ve(r)&&(r=a),ve(e)?Lr(e,Ae(n,1,ve,!0),x(r,2)):[]}),Sm=H(function(e,n){var r=an(n);return ve(r)&&(r=a),ve(e)?Lr(e,Ae(n,1,ve,!0),a,r):[]});function Nm(e,n,r){var t=e==null?0:e.length;return t?(n=r||n===a?1:L(n),tn(e,n<0?0:n,t)):[]}function Pm(e,n,r){var t=e==null?0:e.length;return t?(n=r||n===a?1:L(n),n=t-n,tn(e,0,n<0?0:n)):[]}function Om(e,n){return e&&e.length?Nt(e,x(n,3),!0,!0):[]}function xm(e,n){return e&&e.length?Nt(e,x(n,3),!0):[]}function Km(e,n,r,t){var s=e==null?0:e.length;return s?(r&&typeof r!="number"&&_e(e,n,r)&&(r=0,t=s),Bk(e,n,r,t)):[]}function nu(e,n,r){var t=e==null?0:e.length;if(!t)return-1;var s=r==null?0:L(r);return s<0&&(s=he(t+s,0)),dt(e,x(n,3),s)}function ru(e,n,r){var t=e==null?0:e.length;if(!t)return-1;var s=t-1;return r!==a&&(s=L(r),s=r<0?he(t+s,0):we(s,t-1)),dt(e,x(n,3),s,!0)}function tu(e){var n=e==null?0:e.length;return n?Ae(e,1):[]}function Vm(e){var n=e==null?0:e.length;return n?Ae(e,Le):[]}function Fm(e,n){var r=e==null?0:e.length;return r?(n=n===a?1:L(n),Ae(e,n)):[]}function Im(e){for(var n=-1,r=e==null?0:e.length,t={};++n<r;){var s=e[n];t[s[0]]=s[1]}return t}function au(e){return e&&e.length?e[0]:a}function Mm(e,n,r){var t=e==null?0:e.length;if(!t)return-1;var s=r==null?0:L(r);return s<0&&(s=he(t+s,0)),lr(e,n,s)}function Lm(e){var n=e==null?0:e.length;return n?tn(e,0,-1):[]}var Um=H(function(e){var n=le(e,ri);return n.length&&n[0]===e[0]?$a(n):[]}),Hm=H(function(e){var n=an(e),r=le(e,ri);return n===an(r)?n=a:r.pop(),r.length&&r[0]===e[0]?$a(r,x(n,2)):[]}),Gm=H(function(e){var n=an(e),r=le(e,ri);return n=typeof n=="function"?n:a,n&&r.pop(),r.length&&r[0]===e[0]?$a(r,a,n):[]});function Dm(e,n){return e==null?"":Lg.call(e,n)}function an(e){var n=e==null?0:e.length;return n?e[n-1]:a}function Cm(e,n,r){var t=e==null?0:e.length;if(!t)return-1;var s=t;return r!==a&&(s=L(r),s=s<0?he(t+s,0):we(s,t-1)),n===n?jg(e,n,s):dt(e,Is,s,!0)}function $m(e,n){return e&&e.length?yl(e,L(n)):a}var Wm=H(iu);function iu(e,n){return e&&e.length&&n&&n.length?Ja(e,n):e}function Ym(e,n,r){return e&&e.length&&n&&n.length?Ja(e,n,x(r,2)):e}function zm(e,n,r){return e&&e.length&&n&&n.length?Ja(e,n,a,r):e}var Jm=En(function(e,n){var r=e==null?0:e.length,t=Ha(e,n);return bl(e,le(n,function(s){return _n(s,r)?+s:s}).sort(El)),t});function Zm(e,n){var r=[];if(!(e&&e.length))return r;var t=-1,s=[],o=e.length;for(n=x(n,3);++t<o;){var k=e[t];n(k,t,e)&&(r.push(k),s.push(t))}return bl(e,s),r}function pi(e){return e==null?e:Dg.call(e)}function Xm(e,n,r){var t=e==null?0:e.length;return t?(r&&typeof r!="number"&&_e(e,n,r)?(n=0,r=t):(n=n==null?0:L(n),r=r===a?t:L(r)),tn(e,n,r)):[]}function Qm(e,n){return St(e,n)}function ev(e,n,r){return Qa(e,n,x(r,2))}function nv(e,n){var r=e==null?0:e.length;if(r){var t=St(e,n);if(t<r&&kn(e[t],n))return t}return-1}function rv(e,n){return St(e,n,!0)}function tv(e,n,r){return Qa(e,n,x(r,2),!0)}function av(e,n){var r=e==null?0:e.length;if(r){var t=St(e,n,!0)-1;if(kn(e[t],n))return t}return-1}function iv(e){return e&&e.length?cl(e):[]}function sv(e,n){return e&&e.length?cl(e,x(n,2)):[]}function lv(e){var n=e==null?0:e.length;return n?tn(e,1,n):[]}function uv(e,n,r){return e&&e.length?(n=r||n===a?1:L(n),tn(e,0,n<0?0:n)):[]}function ov(e,n,r){var t=e==null?0:e.length;return t?(n=r||n===a?1:L(n),n=t-n,tn(e,n<0?0:n,t)):[]}function dv(e,n){return e&&e.length?Nt(e,x(n,3),!1,!0):[]}function gv(e,n){return e&&e.length?Nt(e,x(n,3)):[]}var kv=H(function(e){return Ln(Ae(e,1,ve,!0))}),mv=H(function(e){var n=an(e);return ve(n)&&(n=a),Ln(Ae(e,1,ve,!0),x(n,2))}),vv=H(function(e){var n=an(e);return n=typeof n=="function"?n:a,Ln(Ae(e,1,ve,!0),a,n)});function yv(e){return e&&e.length?Ln(e):[]}function pv(e,n){return e&&e.length?Ln(e,x(n,2)):[]}function fv(e,n){return n=typeof n=="function"?n:a,e&&e.length?Ln(e,a,n):[]}function fi(e){if(!(e&&e.length))return[];var n=0;return e=Kn(e,function(r){if(ve(r))return n=he(r.length,n),!0}),xa(n,function(r){return le(e,Na(r))})}function su(e,n){if(!(e&&e.length))return[];var r=fi(e);return n==null?r:le(r,function(t){return Ue(n,a,t)})}var bv=H(function(e,n){return ve(e)?Lr(e,n):[]}),hv=H(function(e){return ni(Kn(e,ve))}),cv=H(function(e){var n=an(e);return ve(n)&&(n=a),ni(Kn(e,ve),x(n,2))}),qv=H(function(e){var n=an(e);return n=typeof n=="function"?n:a,ni(Kn(e,ve),a,n)}),Tv=H(fi);function Av(e,n){return jl(e||[],n||[],Mr)}function jv(e,n){return jl(e||[],n||[],Gr)}var wv=H(function(e){var n=e.length,r=n>1?e[n-1]:a;return r=typeof r=="function"?(e.pop(),r):a,su(e,r)});function lu(e){var n=l(e);return n.__chain__=!0,n}function Rv(e,n){return n(e),e}function Lt(e,n){return n(e)}var Bv=En(function(e){var n=e.length,r=n?e[0]:0,t=this.__wrapped__,s=function(o){return Ha(o,e)};return n>1||this.__actions__.length||!(t instanceof D)||!_n(r)?this.thru(s):(t=t.slice(r,+r+(n?1:0)),t.__actions__.push({func:Lt,args:[s],thisArg:a}),new nn(t,this.__chain__).thru(function(o){return n&&!o.length&&o.push(a),o}))});function Ev(){return lu(this)}function _v(){return new nn(this.value(),this.__chain__)}function Sv(){this.__values__===a&&(this.__values__=qu(this.value()));var e=this.__index__>=this.__values__.length,n=e?a:this.__values__[this.__index__++];return{done:e,value:n}}function Nv(){return this}function Pv(e){for(var n,r=this;r instanceof wt;){var t=eu(r);t.__index__=0,t.__values__=a,n?s.__wrapped__=t:n=t;var s=t;r=r.__wrapped__}return s.__wrapped__=e,n}function Ov(){var e=this.__wrapped__;if(e instanceof D){var n=e;return this.__actions__.length&&(n=new D(this)),n=n.reverse(),n.__actions__.push({func:Lt,args:[pi],thisArg:a}),new nn(n,this.__chain__)}return this.thru(pi)}function xv(){return Al(this.__wrapped__,this.__actions__)}var Kv=Pt(function(e,n,r){X.call(e,r)?++e[r]:Rn(e,r,1)});function Vv(e,n,r){var t=M(e)?Vs:Rk;return r&&_e(e,n,r)&&(n=a),t(e,x(n,3))}function Fv(e,n){var r=M(e)?Kn:sl;return r(e,x(n,3))}var Iv=xl(nu),Mv=xl(ru);function Lv(e,n){return Ae(Ut(e,n),1)}function Uv(e,n){return Ae(Ut(e,n),Le)}function Hv(e,n,r){return r=r===a?1:L(r),Ae(Ut(e,n),r)}function uu(e,n){var r=M(e)?Qe:Mn;return r(e,x(n,3))}function ou(e,n){var r=M(e)?lg:il;return r(e,x(n,3))}var Gv=Pt(function(e,n,r){X.call(e,r)?e[r].push(n):Rn(e,r,[n])});function Dv(e,n,r,t){e=Oe(e)?e:hr(e),r=r&&!t?L(r):0;var s=e.length;return r<0&&(r=he(s+r,0)),$t(e)?r<=s&&e.indexOf(n,r)>-1:!!s&&lr(e,n,r)>-1}var Cv=H(function(e,n,r){var t=-1,s=typeof n=="function",o=Oe(e)?b(e.length):[];return Mn(e,function(k){o[++t]=s?Ue(n,k,r):Ur(k,n,r)}),o}),$v=Pt(function(e,n,r){Rn(e,r,n)});function Ut(e,n){var r=M(e)?le:kl;return r(e,x(n,3))}function Wv(e,n,r,t){return e==null?[]:(M(n)||(n=n==null?[]:[n]),r=t?a:r,M(r)||(r=r==null?[]:[r]),pl(e,n,r))}var Yv=Pt(function(e,n,r){e[r?0:1].push(n)},function(){return[[],[]]});function zv(e,n,r){var t=M(e)?_a:Ls,s=arguments.length<3;return t(e,x(n,4),r,s,Mn)}function Jv(e,n,r){var t=M(e)?ug:Ls,s=arguments.length<3;return t(e,x(n,4),r,s,il)}function Zv(e,n){var r=M(e)?Kn:sl;return r(e,Dt(x(n,3)))}function Xv(e){var n=M(e)?nl:Dk;return n(e)}function Qv(e,n,r){(r?_e(e,n,r):n===a)?n=1:n=L(n);var t=M(e)?qk:Ck;return t(e,n)}function ey(e){var n=M(e)?Tk:Wk;return n(e)}function ny(e){if(e==null)return 0;if(Oe(e))return $t(e)?or(e):e.length;var n=Re(e);return n==un||n==on?e.size:Ya(e).length}function ry(e,n,r){var t=M(e)?Sa:Yk;return r&&_e(e,n,r)&&(n=a),t(e,x(n,3))}var ty=H(function(e,n){if(e==null)return[];var r=n.length;return r>1&&_e(e,n[0],n[1])?n=[]:r>2&&_e(n[0],n[1],n[2])&&(n=[n[0]]),pl(e,Ae(n,1),[])}),Ht=Fg||function(){return Te.Date.now()};function ay(e,n){if(typeof n!="function")throw new en(h);return e=L(e),function(){if(--e<1)return n.apply(this,arguments)}}function du(e,n,r){return n=r?a:n,n=e&&n==null?e.length:n,Bn(e,fe,a,a,a,a,n)}function gu(e,n){var r;if(typeof n!="function")throw new en(h);return e=L(e),function(){return--e>0&&(r=n.apply(this,arguments)),e<=1&&(n=a),r}}var bi=H(function(e,n,r){var t=W;if(r.length){var s=Fn(r,fr(bi));t|=ie}return Bn(e,t,n,r,s)}),ku=H(function(e,n,r){var t=W|ce;if(r.length){var s=Fn(r,fr(ku));t|=ie}return Bn(n,t,e,r,s)});function mu(e,n,r){n=r?a:n;var t=Bn(e,pe,a,a,a,a,a,n);return t.placeholder=mu.placeholder,t}function vu(e,n,r){n=r?a:n;var t=Bn(e,Q,a,a,a,a,a,n);return t.placeholder=vu.placeholder,t}function yu(e,n,r){var t,s,o,k,v,p,T=0,A=!1,w=!1,B=!0;if(typeof e!="function")throw new en(h);n=sn(n)||0,ue(r)&&(A=!!r.leading,w="maxWait"in r,o=w?he(sn(r.maxWait)||0,n):o,B="trailing"in r?!!r.trailing:B);function O(ye){var mn=t,Pn=s;return t=s=a,T=ye,k=e.apply(Pn,mn),k}function K(ye){return T=ye,v=$r(G,n),A?O(ye):k}function U(ye){var mn=ye-p,Pn=ye-T,xu=n-mn;return w?we(xu,o-Pn):xu}function V(ye){var mn=ye-p,Pn=ye-T;return p===a||mn>=n||mn<0||w&&Pn>=o}function G(){var ye=Ht();if(V(ye))return C(ye);v=$r(G,U(ye))}function C(ye){return v=a,B&&t?O(ye):(t=s=a,k)}function Ce(){v!==a&&wl(v),T=0,t=p=s=v=a}function Se(){return v===a?k:C(Ht())}function $e(){var ye=Ht(),mn=V(ye);if(t=arguments,s=this,p=ye,mn){if(v===a)return K(p);if(w)return wl(v),v=$r(G,n),O(p)}return v===a&&(v=$r(G,n)),k}return $e.cancel=Ce,$e.flush=Se,$e}var iy=H(function(e,n){return al(e,1,n)}),sy=H(function(e,n,r){return al(e,sn(n)||0,r)});function ly(e){return Bn(e,je)}function Gt(e,n){if(typeof e!="function"||n!=null&&typeof n!="function")throw new en(h);var r=function(){var t=arguments,s=n?n.apply(this,t):t[0],o=r.cache;if(o.has(s))return o.get(s);var k=e.apply(this,t);return r.cache=o.set(s,k)||o,k};return r.cache=new(Gt.Cache||wn),r}Gt.Cache=wn;function Dt(e){if(typeof e!="function")throw new en(h);return function(){var n=arguments;switch(n.length){case 0:return!e.call(this);case 1:return!e.call(this,n[0]);case 2:return!e.call(this,n[0],n[1]);case 3:return!e.call(this,n[0],n[1],n[2])}return!e.apply(this,n)}}function uy(e){return gu(2,e)}var oy=zk(function(e,n){n=n.length==1&&M(n[0])?le(n[0],He(x())):le(Ae(n,1),He(x()));var r=n.length;return H(function(t){for(var s=-1,o=we(t.length,r);++s<o;)t[s]=n[s].call(this,t[s]);return Ue(e,this,t)})}),hi=H(function(e,n){var r=Fn(n,fr(hi));return Bn(e,ie,a,n,r)}),pu=H(function(e,n){var r=Fn(n,fr(pu));return Bn(e,Ne,a,n,r)}),dy=En(function(e,n){return Bn(e,Ie,a,a,a,n)});function gy(e,n){if(typeof e!="function")throw new en(h);return n=n===a?n:L(n),H(e,n)}function ky(e,n){if(typeof e!="function")throw new en(h);return n=n==null?0:he(L(n),0),H(function(r){var t=r[n],s=Hn(r,0,n);return t&&Vn(s,t),Ue(e,this,s)})}function my(e,n,r){var t=!0,s=!0;if(typeof e!="function")throw new en(h);return ue(r)&&(t="leading"in r?!!r.leading:t,s="trailing"in r?!!r.trailing:s),yu(e,n,{leading:t,maxWait:n,trailing:s})}function vy(e){return du(e,1)}function yy(e,n){return hi(ti(n),e)}function py(){if(!arguments.length)return[];var e=arguments[0];return M(e)?e:[e]}function fy(e){return rn(e,P)}function by(e,n){return n=typeof n=="function"?n:a,rn(e,P,n)}function hy(e){return rn(e,S|P)}function cy(e,n){return n=typeof n=="function"?n:a,rn(e,S|P,n)}function qy(e,n){return n==null||tl(e,n,qe(n))}function kn(e,n){return e===n||e!==e&&n!==n}var Ty=Vt(Ca),Ay=Vt(function(e,n){return e>=n}),Qn=ol(function(){return arguments}())?ol:function(e){return de(e)&&X.call(e,"callee")&&!zs.call(e,"callee")},M=b.isArray,jy=Ss?He(Ss):Pk;function Oe(e){return e!=null&&Ct(e.length)&&!Sn(e)}function ve(e){return de(e)&&Oe(e)}function wy(e){return e===!0||e===!1||de(e)&&Ee(e)==Rr}var Gn=Mg||Si,Ry=Ns?He(Ns):Ok;function By(e){return de(e)&&e.nodeType===1&&!Wr(e)}function Ey(e){if(e==null)return!0;if(Oe(e)&&(M(e)||typeof e=="string"||typeof e.splice=="function"||Gn(e)||br(e)||Qn(e)))return!e.length;var n=Re(e);if(n==un||n==on)return!e.size;if(Cr(e))return!Ya(e).length;for(var r in e)if(X.call(e,r))return!1;return!0}function _y(e,n){return Hr(e,n)}function Sy(e,n,r){r=typeof r=="function"?r:a;var t=r?r(e,n):a;return t===a?Hr(e,n,a,r):!!t}function ci(e){if(!de(e))return!1;var n=Ee(e);return n==tt||n==Qo||typeof e.message=="string"&&typeof e.name=="string"&&!Wr(e)}function Ny(e){return typeof e=="number"&&Zs(e)}function Sn(e){if(!ue(e))return!1;var n=Ee(e);return n==at||n==as||n==Xo||n==nd}function fu(e){return typeof e=="number"&&e==L(e)}function Ct(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Ze}function ue(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}function de(e){return e!=null&&typeof e=="object"}var bu=Ps?He(Ps):Kk;function Py(e,n){return e===n||Wa(e,n,di(n))}function Oy(e,n,r){return r=typeof r=="function"?r:a,Wa(e,n,di(n),r)}function xy(e){return hu(e)&&e!=+e}function Ky(e){if(bm(e))throw new F(f);return dl(e)}function Vy(e){return e===null}function Fy(e){return e==null}function hu(e){return typeof e=="number"||de(e)&&Ee(e)==Er}function Wr(e){if(!de(e)||Ee(e)!=An)return!1;var n=bt(e);if(n===null)return!0;var r=X.call(n,"constructor")&&n.constructor;return typeof r=="function"&&r instanceof r&&vt.call(r)==Og}var qi=Os?He(Os):Vk;function Iy(e){return fu(e)&&e>=-9007199254740991&&e<=Ze}var cu=xs?He(xs):Fk;function $t(e){return typeof e=="string"||!M(e)&&de(e)&&Ee(e)==Sr}function De(e){return typeof e=="symbol"||de(e)&&Ee(e)==it}var br=Ks?He(Ks):Ik;function My(e){return e===a}function Ly(e){return de(e)&&Re(e)==Nr}function Uy(e){return de(e)&&Ee(e)==td}var Hy=Vt(za),Gy=Vt(function(e,n){return e<=n});function qu(e){if(!e)return[];if(Oe(e))return $t(e)?dn(e):Pe(e);if(xr&&e[xr])return qg(e[xr]());var n=Re(e),r=n==un?Va:n==on?gt:hr;return r(e)}function Nn(e){if(!e)return e===0?e:0;if(e=sn(e),e===Le||e===-1/0){var n=e<0?-1:1;return n*ts}return e===e?e:0}function L(e){var n=Nn(e),r=n%1;return n===n?r?n-r:n:0}function Tu(e){return e?zn(L(e),0,pn):0}function sn(e){if(typeof e=="number")return e;if(De(e))return nt;if(ue(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=ue(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=Us(e);var r=jd.test(e);return r||Rd.test(e)?ag(e.slice(2),r?2:8):Ad.test(e)?nt:+e}function Au(e){return bn(e,xe(e))}function Dy(e){return e?zn(L(e),-9007199254740991,Ze):e===0?e:0}function Z(e){return e==null?"":Ge(e)}var Cy=yr(function(e,n){if(Cr(n)||Oe(n)){bn(n,qe(n),e);return}for(var r in n)X.call(n,r)&&Mr(e,r,n[r])}),ju=yr(function(e,n){bn(n,xe(n),e)}),Wt=yr(function(e,n,r,t){bn(n,xe(n),e,t)}),$y=yr(function(e,n,r,t){bn(n,qe(n),e,t)}),Wy=En(Ha);function Yy(e,n){var r=vr(e);return n==null?r:rl(r,n)}var zy=H(function(e,n){e=re(e);var r=-1,t=n.length,s=t>2?n[2]:a;for(s&&_e(n[0],n[1],s)&&(t=1);++r<t;)for(var o=n[r],k=xe(o),v=-1,p=k.length;++v<p;){var T=k[v],A=e[T];(A===a||kn(A,gr[T])&&!X.call(e,T))&&(e[T]=o[T])}return e}),Jy=H(function(e){return e.push(a,Ul),Ue(wu,a,e)});function Zy(e,n){return Fs(e,x(n,3),fn)}function Xy(e,n){return Fs(e,x(n,3),Da)}function Qy(e,n){return e==null?e:Ga(e,x(n,3),xe)}function ep(e,n){return e==null?e:ll(e,x(n,3),xe)}function np(e,n){return e&&fn(e,x(n,3))}function rp(e,n){return e&&Da(e,x(n,3))}function tp(e){return e==null?[]:Et(e,qe(e))}function ap(e){return e==null?[]:Et(e,xe(e))}function Ti(e,n,r){var t=e==null?a:Jn(e,n);return t===a?r:t}function ip(e,n){return e!=null&&Dl(e,n,Ek)}function Ai(e,n){return e!=null&&Dl(e,n,_k)}var sp=Vl(function(e,n,r){n!=null&&typeof n.toString!="function"&&(n=yt.call(n)),e[n]=r},wi(Ke)),lp=Vl(function(e,n,r){n!=null&&typeof n.toString!="function"&&(n=yt.call(n)),X.call(e,n)?e[n].push(r):e[n]=[r]},x),up=H(Ur);function qe(e){return Oe(e)?el(e):Ya(e)}function xe(e){return Oe(e)?el(e,!0):Mk(e)}function op(e,n){var r={};return n=x(n,3),fn(e,function(t,s,o){Rn(r,n(t,s,o),t)}),r}function dp(e,n){var r={};return n=x(n,3),fn(e,function(t,s,o){Rn(r,s,n(t,s,o))}),r}var gp=yr(function(e,n,r){_t(e,n,r)}),wu=yr(function(e,n,r,t){_t(e,n,r,t)}),kp=En(function(e,n){var r={};if(e==null)return r;var t=!1;n=le(n,function(o){return o=Un(o,e),t||(t=o.length>1),o}),bn(e,ui(e),r),t&&(r=rn(r,S|I|P,sm));for(var s=n.length;s--;)ei(r,n[s]);return r});function mp(e,n){return Ru(e,Dt(x(n)))}var vp=En(function(e,n){return e==null?{}:Uk(e,n)});function Ru(e,n){if(e==null)return{};var r=le(ui(e),function(t){return[t]});return n=x(n),fl(e,r,function(t,s){return n(t,s[0])})}function yp(e,n,r){n=Un(n,e);var t=-1,s=n.length;for(s||(s=1,e=a);++t<s;){var o=e==null?a:e[hn(n[t])];o===a&&(t=s,o=r),e=Sn(o)?o.call(e):o}return e}function pp(e,n,r){return e==null?e:Gr(e,n,r)}function fp(e,n,r,t){return t=typeof t=="function"?t:a,e==null?e:Gr(e,n,r,t)}var Bu=Ml(qe),Eu=Ml(xe);function bp(e,n,r){var t=M(e),s=t||Gn(e)||br(e);if(n=x(n,4),r==null){var o=e&&e.constructor;s?r=t?new o:[]:ue(e)?r=Sn(o)?vr(bt(e)):{}:r={}}return(s?Qe:fn)(e,function(k,v,p){return n(r,k,v,p)}),r}function hp(e,n){return e==null?!0:ei(e,n)}function cp(e,n,r){return e==null?e:Tl(e,n,ti(r))}function qp(e,n,r,t){return t=typeof t=="function"?t:a,e==null?e:Tl(e,n,ti(r),t)}function hr(e){return e==null?[]:Ka(e,qe(e))}function Tp(e){return e==null?[]:Ka(e,xe(e))}function Ap(e,n,r){return r===a&&(r=n,n=a),r!==a&&(r=sn(r),r=r===r?r:0),n!==a&&(n=sn(n),n=n===n?n:0),zn(sn(e),n,r)}function jp(e,n,r){return n=Nn(n),r===a?(r=n,n=0):r=Nn(r),e=sn(e),Sk(e,n,r)}function wp(e,n,r){if(r&&typeof r!="boolean"&&_e(e,n,r)&&(n=r=a),r===a&&(typeof n=="boolean"?(r=n,n=a):typeof e=="boolean"&&(r=e,e=a)),e===a&&n===a?(e=0,n=1):(e=Nn(e),n===a?(n=e,e=0):n=Nn(n)),e>n){var t=e;e=n,n=t}if(r||e%1||n%1){var s=Xs();return we(e+s*(n-e+tg("1e-"+((s+"").length-1))),n)}return Za(e,n)}var Rp=pr(function(e,n,r){return n=n.toLowerCase(),e+(r?_u(n):n)});function _u(e){return ji(Z(e).toLowerCase())}function Su(e){return e=Z(e),e&&e.replace(Ed,pg).replace(Wd,"")}function Bp(e,n,r){e=Z(e),n=Ge(n);var t=e.length;r=r===a?t:zn(L(r),0,t);var s=r;return r-=n.length,r>=0&&e.slice(r,s)==n}function Ep(e){return e=Z(e),e&&ud.test(e)?e.replace(ls,fg):e}function _p(e){return e=Z(e),e&&vd.test(e)?e.replace(ha,"\\$&"):e}var Sp=pr(function(e,n,r){return e+(r?"-":"")+n.toLowerCase()}),Np=pr(function(e,n,r){return e+(r?" ":"")+n.toLowerCase()}),Pp=Ol("toLowerCase");function Op(e,n,r){e=Z(e),n=L(n);var t=n?or(e):0;if(!n||t>=n)return e;var s=(n-t)/2;return Kt(Tt(s),r)+e+Kt(qt(s),r)}function xp(e,n,r){e=Z(e),n=L(n);var t=n?or(e):0;return n&&t<n?e+Kt(n-t,r):e}function Kp(e,n,r){e=Z(e),n=L(n);var t=n?or(e):0;return n&&t<n?Kt(n-t,r)+e:e}function Vp(e,n,r){return r||n==null?n=0:n&&(n=+n),Gg(Z(e).replace(ca,""),n||0)}function Fp(e,n,r){return(r?_e(e,n,r):n===a)?n=1:n=L(n),Xa(Z(e),n)}function Ip(){var e=arguments,n=Z(e[0]);return e.length<3?n:n.replace(e[1],e[2])}var Mp=pr(function(e,n,r){return e+(r?"_":"")+n.toLowerCase()});function Lp(e,n,r){return r&&typeof r!="number"&&_e(e,n,r)&&(n=r=a),r=r===a?pn:r>>>0,r?(e=Z(e),e&&(typeof n=="string"||n!=null&&!qi(n))&&(n=Ge(n),!n&&ur(e))?Hn(dn(e),0,r):e.split(n,r)):[]}var Up=pr(function(e,n,r){return e+(r?" ":"")+ji(n)});function Hp(e,n,r){return e=Z(e),r=r==null?0:zn(L(r),0,e.length),n=Ge(n),e.slice(r,r+n.length)==n}function Gp(e,n,r){var t=l.templateSettings;r&&_e(e,n,r)&&(n=a),e=Z(e),n=Wt({},n,t,Ll);var s=Wt({},n.imports,t.imports,Ll),o=qe(s),k=Ka(s,o),v,p,T=0,A=n.interpolate||st,w="__p += '",B=Fa((n.escape||st).source+"|"+A.source+"|"+(A===us?Td:st).source+"|"+(n.evaluate||st).source+"|$","g"),O="//# sourceURL="+(X.call(n,"sourceURL")?(n.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Xd+"]")+`
`;e.replace(B,function(V,G,C,Ce,Se,$e){return C||(C=Ce),w+=e.slice(T,$e).replace(_d,bg),G&&(v=!0,w+=`' +
__e(`+G+`) +
'`),Se&&(p=!0,w+=`';
`+Se+`;
__p += '`),C&&(w+=`' +
((__t = (`+C+`)) == null ? '' : __t) +
'`),T=$e+V.length,V}),w+=`';
`;var K=X.call(n,"variable")&&n.variable;if(!K)w=`with (obj) {
`+w+`
}
`;else if(cd.test(K))throw new F(q);w=(p?w.replace(ad,""):w).replace(id,"$1").replace(sd,"$1;"),w="function("+(K||"obj")+`) {
`+(K?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(v?", __e = _.escape":"")+(p?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+w+`return __p
}`;var U=Pu(function(){return z(o,O+"return "+w).apply(a,k)});if(U.source=w,ci(U))throw U;return U}function Dp(e){return Z(e).toLowerCase()}function Cp(e){return Z(e).toUpperCase()}function $p(e,n,r){if(e=Z(e),e&&(r||n===a))return Us(e);if(!e||!(n=Ge(n)))return e;var t=dn(e),s=dn(n),o=Hs(t,s),k=Gs(t,s)+1;return Hn(t,o,k).join("")}function Wp(e,n,r){if(e=Z(e),e&&(r||n===a))return e.slice(0,Cs(e)+1);if(!e||!(n=Ge(n)))return e;var t=dn(e),s=Gs(t,dn(n))+1;return Hn(t,0,s).join("")}function Yp(e,n,r){if(e=Z(e),e&&(r||n===a))return e.replace(ca,"");if(!e||!(n=Ge(n)))return e;var t=dn(e),s=Hs(t,dn(n));return Hn(t,s).join("")}function zp(e,n){var r=Tn,t=oe;if(ue(n)){var s="separator"in n?n.separator:s;r="length"in n?L(n.length):r,t="omission"in n?Ge(n.omission):t}e=Z(e);var o=e.length;if(ur(e)){var k=dn(e);o=k.length}if(r>=o)return e;var v=r-or(t);if(v<1)return t;var p=k?Hn(k,0,v).join(""):e.slice(0,v);if(s===a)return p+t;if(k&&(v+=p.length-v),qi(s)){if(e.slice(v).search(s)){var T,A=p;for(s.global||(s=Fa(s.source,Z(os.exec(s))+"g")),s.lastIndex=0;T=s.exec(A);)var w=T.index;p=p.slice(0,w===a?v:w)}}else if(e.indexOf(Ge(s),v)!=v){var B=p.lastIndexOf(s);B>-1&&(p=p.slice(0,B))}return p+t}function Jp(e){return e=Z(e),e&&ld.test(e)?e.replace(ss,wg):e}var Zp=pr(function(e,n,r){return e+(r?" ":"")+n.toUpperCase()}),ji=Ol("toUpperCase");function Nu(e,n,r){return e=Z(e),n=r?a:n,n===a?cg(e)?Eg(e):gg(e):e.match(n)||[]}var Pu=H(function(e,n){try{return Ue(e,a,n)}catch(r){return ci(r)?r:new F(r)}}),Xp=En(function(e,n){return Qe(n,function(r){r=hn(r),Rn(e,r,bi(e[r],e))}),e});function Qp(e){var n=e==null?0:e.length,r=x();return e=n?le(e,function(t){if(typeof t[1]!="function")throw new en(h);return[r(t[0]),t[1]]}):[],H(function(t){for(var s=-1;++s<n;){var o=e[s];if(Ue(o[0],this,t))return Ue(o[1],this,t)}})}function ef(e){return wk(rn(e,S))}function wi(e){return function(){return e}}function nf(e,n){return e==null||e!==e?n:e}var rf=Kl(),tf=Kl(!0);function Ke(e){return e}function Ri(e){return gl(typeof e=="function"?e:rn(e,S))}function af(e){return ml(rn(e,S))}function sf(e,n){return vl(e,rn(n,S))}var lf=H(function(e,n){return function(r){return Ur(r,e,n)}}),uf=H(function(e,n){return function(r){return Ur(e,r,n)}});function Bi(e,n,r){var t=qe(n),s=Et(n,t);r==null&&!(ue(n)&&(s.length||!t.length))&&(r=n,n=e,e=this,s=Et(n,qe(n)));var o=!(ue(r)&&"chain"in r)||!!r.chain,k=Sn(e);return Qe(s,function(v){var p=n[v];e[v]=p,k&&(e.prototype[v]=function(){var T=this.__chain__;if(o||T){var A=e(this.__wrapped__),w=A.__actions__=Pe(this.__actions__);return w.push({func:p,args:arguments,thisArg:e}),A.__chain__=T,A}return p.apply(e,Vn([this.value()],arguments))})}),e}function of(){return Te._===this&&(Te._=xg),this}function Ei(){}function df(e){return e=L(e),H(function(n){return yl(n,e)})}var gf=ii(le),kf=ii(Vs),mf=ii(Sa);function Ou(e){return ki(e)?Na(hn(e)):Hk(e)}function vf(e){return function(n){return e==null?a:Jn(e,n)}}var yf=Fl(),pf=Fl(!0);function _i(){return[]}function Si(){return!1}function ff(){return{}}function bf(){return""}function hf(){return!0}function cf(e,n){if(e=L(e),e<1||e>Ze)return[];var r=pn,t=we(e,pn);n=x(n),e-=pn;for(var s=xa(t,n);++r<e;)n(r);return s}function qf(e){return M(e)?le(e,hn):De(e)?[e]:Pe(Ql(Z(e)))}function Tf(e){var n=++Pg;return Z(e)+n}var Af=xt(function(e,n){return e+n},0),jf=si("ceil"),wf=xt(function(e,n){return e/n},1),Rf=si("floor");function Bf(e){return e&&e.length?Bt(e,Ke,Ca):a}function Ef(e,n){return e&&e.length?Bt(e,x(n,2),Ca):a}function _f(e){return Ms(e,Ke)}function Sf(e,n){return Ms(e,x(n,2))}function Nf(e){return e&&e.length?Bt(e,Ke,za):a}function Pf(e,n){return e&&e.length?Bt(e,x(n,2),za):a}var Of=xt(function(e,n){return e*n},1),xf=si("round"),Kf=xt(function(e,n){return e-n},0);function Vf(e){return e&&e.length?Oa(e,Ke):0}function Ff(e,n){return e&&e.length?Oa(e,x(n,2)):0}return l.after=ay,l.ary=du,l.assign=Cy,l.assignIn=ju,l.assignInWith=Wt,l.assignWith=$y,l.at=Wy,l.before=gu,l.bind=bi,l.bindAll=Xp,l.bindKey=ku,l.castArray=py,l.chain=lu,l.chunk=wm,l.compact=Rm,l.concat=Bm,l.cond=Qp,l.conforms=ef,l.constant=wi,l.countBy=Kv,l.create=Yy,l.curry=mu,l.curryRight=vu,l.debounce=yu,l.defaults=zy,l.defaultsDeep=Jy,l.defer=iy,l.delay=sy,l.difference=Em,l.differenceBy=_m,l.differenceWith=Sm,l.drop=Nm,l.dropRight=Pm,l.dropRightWhile=Om,l.dropWhile=xm,l.fill=Km,l.filter=Fv,l.flatMap=Lv,l.flatMapDeep=Uv,l.flatMapDepth=Hv,l.flatten=tu,l.flattenDeep=Vm,l.flattenDepth=Fm,l.flip=ly,l.flow=rf,l.flowRight=tf,l.fromPairs=Im,l.functions=tp,l.functionsIn=ap,l.groupBy=Gv,l.initial=Lm,l.intersection=Um,l.intersectionBy=Hm,l.intersectionWith=Gm,l.invert=sp,l.invertBy=lp,l.invokeMap=Cv,l.iteratee=Ri,l.keyBy=$v,l.keys=qe,l.keysIn=xe,l.map=Ut,l.mapKeys=op,l.mapValues=dp,l.matches=af,l.matchesProperty=sf,l.memoize=Gt,l.merge=gp,l.mergeWith=wu,l.method=lf,l.methodOf=uf,l.mixin=Bi,l.negate=Dt,l.nthArg=df,l.omit=kp,l.omitBy=mp,l.once=uy,l.orderBy=Wv,l.over=gf,l.overArgs=oy,l.overEvery=kf,l.overSome=mf,l.partial=hi,l.partialRight=pu,l.partition=Yv,l.pick=vp,l.pickBy=Ru,l.property=Ou,l.propertyOf=vf,l.pull=Wm,l.pullAll=iu,l.pullAllBy=Ym,l.pullAllWith=zm,l.pullAt=Jm,l.range=yf,l.rangeRight=pf,l.rearg=dy,l.reject=Zv,l.remove=Zm,l.rest=gy,l.reverse=pi,l.sampleSize=Qv,l.set=pp,l.setWith=fp,l.shuffle=ey,l.slice=Xm,l.sortBy=ty,l.sortedUniq=iv,l.sortedUniqBy=sv,l.split=Lp,l.spread=ky,l.tail=lv,l.take=uv,l.takeRight=ov,l.takeRightWhile=dv,l.takeWhile=gv,l.tap=Rv,l.throttle=my,l.thru=Lt,l.toArray=qu,l.toPairs=Bu,l.toPairsIn=Eu,l.toPath=qf,l.toPlainObject=Au,l.transform=bp,l.unary=vy,l.union=kv,l.unionBy=mv,l.unionWith=vv,l.uniq=yv,l.uniqBy=pv,l.uniqWith=fv,l.unset=hp,l.unzip=fi,l.unzipWith=su,l.update=cp,l.updateWith=qp,l.values=hr,l.valuesIn=Tp,l.without=bv,l.words=Nu,l.wrap=yy,l.xor=hv,l.xorBy=cv,l.xorWith=qv,l.zip=Tv,l.zipObject=Av,l.zipObjectDeep=jv,l.zipWith=wv,l.entries=Bu,l.entriesIn=Eu,l.extend=ju,l.extendWith=Wt,Bi(l,l),l.add=Af,l.attempt=Pu,l.camelCase=Rp,l.capitalize=_u,l.ceil=jf,l.clamp=Ap,l.clone=fy,l.cloneDeep=hy,l.cloneDeepWith=cy,l.cloneWith=by,l.conformsTo=qy,l.deburr=Su,l.defaultTo=nf,l.divide=wf,l.endsWith=Bp,l.eq=kn,l.escape=Ep,l.escapeRegExp=_p,l.every=Vv,l.find=Iv,l.findIndex=nu,l.findKey=Zy,l.findLast=Mv,l.findLastIndex=ru,l.findLastKey=Xy,l.floor=Rf,l.forEach=uu,l.forEachRight=ou,l.forIn=Qy,l.forInRight=ep,l.forOwn=np,l.forOwnRight=rp,l.get=Ti,l.gt=Ty,l.gte=Ay,l.has=ip,l.hasIn=Ai,l.head=au,l.identity=Ke,l.includes=Dv,l.indexOf=Mm,l.inRange=jp,l.invoke=up,l.isArguments=Qn,l.isArray=M,l.isArrayBuffer=jy,l.isArrayLike=Oe,l.isArrayLikeObject=ve,l.isBoolean=wy,l.isBuffer=Gn,l.isDate=Ry,l.isElement=By,l.isEmpty=Ey,l.isEqual=_y,l.isEqualWith=Sy,l.isError=ci,l.isFinite=Ny,l.isFunction=Sn,l.isInteger=fu,l.isLength=Ct,l.isMap=bu,l.isMatch=Py,l.isMatchWith=Oy,l.isNaN=xy,l.isNative=Ky,l.isNil=Fy,l.isNull=Vy,l.isNumber=hu,l.isObject=ue,l.isObjectLike=de,l.isPlainObject=Wr,l.isRegExp=qi,l.isSafeInteger=Iy,l.isSet=cu,l.isString=$t,l.isSymbol=De,l.isTypedArray=br,l.isUndefined=My,l.isWeakMap=Ly,l.isWeakSet=Uy,l.join=Dm,l.kebabCase=Sp,l.last=an,l.lastIndexOf=Cm,l.lowerCase=Np,l.lowerFirst=Pp,l.lt=Hy,l.lte=Gy,l.max=Bf,l.maxBy=Ef,l.mean=_f,l.meanBy=Sf,l.min=Nf,l.minBy=Pf,l.stubArray=_i,l.stubFalse=Si,l.stubObject=ff,l.stubString=bf,l.stubTrue=hf,l.multiply=Of,l.nth=$m,l.noConflict=of,l.noop=Ei,l.now=Ht,l.pad=Op,l.padEnd=xp,l.padStart=Kp,l.parseInt=Vp,l.random=wp,l.reduce=zv,l.reduceRight=Jv,l.repeat=Fp,l.replace=Ip,l.result=yp,l.round=xf,l.runInContext=y,l.sample=Xv,l.size=ny,l.snakeCase=Mp,l.some=ry,l.sortedIndex=Qm,l.sortedIndexBy=ev,l.sortedIndexOf=nv,l.sortedLastIndex=rv,l.sortedLastIndexBy=tv,l.sortedLastIndexOf=av,l.startCase=Up,l.startsWith=Hp,l.subtract=Kf,l.sum=Vf,l.sumBy=Ff,l.template=Gp,l.times=cf,l.toFinite=Nn,l.toInteger=L,l.toLength=Tu,l.toLower=Dp,l.toNumber=sn,l.toSafeInteger=Dy,l.toString=Z,l.toUpper=Cp,l.trim=$p,l.trimEnd=Wp,l.trimStart=Yp,l.truncate=zp,l.unescape=Jp,l.uniqueId=Tf,l.upperCase=Zp,l.upperFirst=ji,l.each=uu,l.eachRight=ou,l.first=au,Bi(l,function(){var e={};return fn(l,function(n,r){X.call(l.prototype,r)||(e[r]=n)}),e}(),{chain:!1}),l.VERSION=u,Qe(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){l[e].placeholder=l}),Qe(["drop","take"],function(e,n){D.prototype[e]=function(r){r=r===a?1:he(L(r),0);var t=this.__filtered__&&!n?new D(this):this.clone();return t.__filtered__?t.__takeCount__=we(r,t.__takeCount__):t.__views__.push({size:we(r,pn),type:e+(t.__dir__<0?"Right":"")}),t},D.prototype[e+"Right"]=function(r){return this.reverse()[e](r).reverse()}}),Qe(["filter","map","takeWhile"],function(e,n){var r=n+1,t=r==Me||r==xn;D.prototype[e]=function(s){var o=this.clone();return o.__iteratees__.push({iteratee:x(s,3),type:r}),o.__filtered__=o.__filtered__||t,o}}),Qe(["head","last"],function(e,n){var r="take"+(n?"Right":"");D.prototype[e]=function(){return this[r](1).value()[0]}}),Qe(["initial","tail"],function(e,n){var r="drop"+(n?"":"Right");D.prototype[e]=function(){return this.__filtered__?new D(this):this[r](1)}}),D.prototype.compact=function(){return this.filter(Ke)},D.prototype.find=function(e){return this.filter(e).head()},D.prototype.findLast=function(e){return this.reverse().find(e)},D.prototype.invokeMap=H(function(e,n){return typeof e=="function"?new D(this):this.map(function(r){return Ur(r,e,n)})}),D.prototype.reject=function(e){return this.filter(Dt(x(e)))},D.prototype.slice=function(e,n){e=L(e);var r=this;return r.__filtered__&&(e>0||n<0)?new D(r):(e<0?r=r.takeRight(-e):e&&(r=r.drop(e)),n!==a&&(n=L(n),r=n<0?r.dropRight(-n):r.take(n-e)),r)},D.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},D.prototype.toArray=function(){return this.take(pn)},fn(D.prototype,function(e,n){var r=/^(?:filter|find|map|reject)|While$/.test(n),t=/^(?:head|last)$/.test(n),s=l[t?"take"+(n=="last"?"Right":""):n],o=t||/^find/.test(n);s&&(l.prototype[n]=function(){var k=this.__wrapped__,v=t?[1]:arguments,p=k instanceof D,T=v[0],A=p||M(k),w=function(G){var C=s.apply(l,Vn([G],v));return t&&B?C[0]:C};A&&r&&typeof T=="function"&&T.length!=1&&(p=A=!1);var B=this.__chain__,O=!!this.__actions__.length,K=o&&!B,U=p&&!O;if(!o&&A){k=U?k:new D(this);var V=e.apply(k,v);return V.__actions__.push({func:Lt,args:[w],thisArg:a}),new nn(V,B)}return K&&U?e.apply(this,v):(V=this.thru(w),K?t?V.value()[0]:V.value():V)})}),Qe(["pop","push","shift","sort","splice","unshift"],function(e){var n=kt[e],r=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",t=/^(?:pop|shift)$/.test(e);l.prototype[e]=function(){var s=arguments;if(t&&!this.__chain__){var o=this.value();return n.apply(M(o)?o:[],s)}return this[r](function(k){return n.apply(M(k)?k:[],s)})}}),fn(D.prototype,function(e,n){var r=l[n];if(r){var t=r.name+"";X.call(mr,t)||(mr[t]=[]),mr[t].push({name:n,func:r})}}),mr[Ot(a,ce).name]=[{name:"wrapper",func:a}],D.prototype.clone=Jg,D.prototype.reverse=Zg,D.prototype.value=Xg,l.prototype.at=Bv,l.prototype.chain=Ev,l.prototype.commit=_v,l.prototype.next=Sv,l.prototype.plant=Pv,l.prototype.reverse=Ov,l.prototype.toJSON=l.prototype.valueOf=l.prototype.value=xv,l.prototype.first=l.prototype.head,xr&&(l.prototype[xr]=Nv),l},dr=_g();Cn?((Cn.exports=dr)._=dr,Ra._=dr):Te._=dr}).call(qh)}(Yr,Yr.exports)),Yr.exports}var Ju=Th();const Ah="NORGE",Zu=i=>i??"",jh=i=>{const{adresselinje1:d,adresselinje2:a,adresselinje3:u,postNummer:g,poststed:f,land:h}=i,q=[d,a,u].filter(E=>!!E).join(", "),j=`${Zu(g)} ${Zu(f)}`,R=(h==null?void 0:h.toUpperCase())!==Ah?h:void 0;return[q,j,R].map(E=>E==null?void 0:E.trim()).filter(E=>!!E).join(", ").trim()},dq=(i,d)=>[...i].sort(yo).find(a=>a.adresseType===d),gq=(i,d)=>i.length!==d.length?!1:i.every(a=>d.some(u=>Ju.isEqual(a,u)))&&d.every(a=>i.some(u=>Ju.isEqual(u,a))),Mi=Be(et);var wh=(i=>(i[i.SOKNAD=0]="SOKNAD",i[i.FREG=1]="FREG",i[i.MEDL=2]="MEDL",i))(wh||{});const Rh=i=>{switch(i){case 0:return Mi.formatMessage({id:"FaktaKilde.Soknad"});case 1:return Mi.formatMessage({id:"FaktaKilde.FREG"});case 2:return Mi.formatMessage({id:"FaktaKilde.MEDL"});default:return Qf(i)}},po=N.forwardRef((i,d)=>m.jsx(Dn,{gap:"2",style:{display:"flex"},...i,ref:d}));po.displayName="FaktaGruppe";const Bh=({label:i,value:d,kilde:a})=>m.jsx(na,{background:"bg-subtle",flexGrow:"1",paddingBlock:"2",paddingInline:"4",borderRadius:"medium",children:m.jsxs(tr,{gap:"6",children:[m.jsxs("div",{children:[m.jsx(ia,{size:"small",children:i}),m.jsx(Qt,{size:"large",children:d})]}),m.jsx(Hi,{uppercase:!0,children:Rh(a)})]})});po.__docgenInfo={description:"",methods:[],displayName:"FaktaGruppe"};Bh.__docgenInfo={description:"",methods:[],displayName:"FaktaBox",props:{label:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},value:{required:!0,tsType:{name:"string"},description:""},kilde:{required:!0,tsType:{name:"FaktaKilde"},description:""}}};const Eh="_boks_c3bfh_1",_h="_harBorderLeft_c3bfh_8",Sh="_harBorderTop_c3bfh_12",fo={boks:Eh,harBorderLeft:_h,harBorderTop:Sh},Nh=mb.bind(fo),Ph=({harBorderTop:i=!1,harBorderLeft:d=!0,children:a})=>m.jsx("div",{className:Nh(fo.boks,{harBorderLeft:d,harBorderTop:i}),children:a});Ph.__docgenInfo={description:"",methods:[],displayName:"Boks",props:{harBorderTop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},harBorderLeft:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const bo=({adresser:i,erAnnenpart:d=!1,harSammeAdresser:a=!1,adresseKodeverk:u})=>{if(a)return m.jsx(na,{padding:"4",children:m.jsx(Ku,{textColor:"subtle",children:m.jsx(te,{id:"AdresseTabell.SammeAdresse"})})});const g=f=>f+1===i.length?{border:"0px"}:{};return m.jsxs(m.Fragment,{children:[i.length===0&&m.jsx(na,{padding:"4",children:m.jsx(Ku,{textColor:"subtle",children:m.jsx(te,{id:"AdresseTabell.IngenAdresse",values:{erAnnenpart:d}})})}),i.length>0&&m.jsxs(vn,{style:{tableLayout:"fixed"},children:[m.jsx(vn.Header,{children:m.jsxs(vn.Row,{children:[m.jsx(vn.HeaderCell,{children:m.jsx(te,{id:"AdresseTabell.PeriodeLabel"})}),m.jsx(vn.HeaderCell,{children:m.jsx(te,{id:"AdresseTabell.AdresseLabel"})}),m.jsx(vn.HeaderCell,{children:m.jsx(te,{id:"AdresseTabell.TypeLabel"})})]})}),m.jsx(vn.Body,{children:i.toSorted(yo).map((f,h)=>{var q;return m.jsxs(vn.Row,{children:[m.jsx(vn.DataCell,{style:g(h),children:m.jsx(eb,{dateStringFom:f.fom,dateStringTom:f.tom===Di?void 0:f.tom})}),m.jsx(vn.DataCell,{style:g(h),children:jh(f)}),m.jsx(vn.DataCell,{style:g(h),children:(q=u.find(j=>j.kode===f.adresseType))==null?void 0:q.navn})]},f.adresseType+f.fom+f.tom)})})]})]})};bo.__docgenInfo={description:"",methods:[],displayName:"AdresseTabell",props:{adresser:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"},description:""}}};const Oh=Be(et),xh=i=>{switch(i){case Mu.KVINNE:return Oi.female;case Mu.MANN:return Oi.male;default:return Oi.unknown}},Xt=({rolle:i="BRUKER",alleKodeverk:d,harSammeAdresser:a,navn:u,kjønn:g,sivilstand:f,fødselsdato:h,dødsdato:q,adresser:j,showIcon:R=!0})=>{var S;const E=i==="BARN";return m.jsx(ze,{value:Oh,children:m.jsx(na,{background:"bg-subtle",padding:"4",borderRadius:"large","aria-label":u,children:m.jsxs(tr,{gap:"1",children:[m.jsxs(Dn,{gap:"5",children:[R&&m.jsx("div",{children:m.jsx(vb,{gender:xh(g),isChild:E})}),m.jsxs("div",{children:[m.jsxs(Dn,{gap:"4",children:[m.jsx(ia,{children:m.jsx(te,{id:"PersonPanel.RolleOgNavn",values:{rolle:i,navn:u}})}),E&&h&&!q&&m.jsx(Qt,{children:m.jsx(te,{id:"PersonPanel.Fodt",values:{dato:Vu(h)}})}),q&&m.jsx(Qt,{children:m.jsx(te,{id:"PersonPanel.Dod",values:{dato:Vu(q)}})})]}),!E&&f&&m.jsx(Hi,{"aria-label":"Sivilstand",children:(S=d[ln.SIVILSTAND_TYPE].find(I=>I.kode===f))==null?void 0:S.navn})]})]}),m.jsxs(Hi,{children:[i==="BARN"&&m.jsx(te,{id:"PersonPanel.Beskrivelse.Barn",values:{rolle:i}}),i==="BRUKER"&&m.jsx(te,{id:"PersonPanel.Beskrivelse.Bruker",values:{rolle:i}}),i==="ANNEN_PART"&&m.jsx(te,{id:"PersonPanel.Beskrivelse.Annenpart",values:{rolle:i}})]}),m.jsx(bo,{harSammeAdresser:a,adresser:j,adresseKodeverk:d[ln.ADRESSE_TYPE],erAnnenpart:i==="ANNEN_PART"})]})})})};Xt.__docgenInfo={description:"",methods:[],displayName:"Personopplysninger",props:{rolle:{required:!1,tsType:{name:"union",raw:"'BARN' | 'BRUKER' | 'ANNEN_PART'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'BRUKER'"},{name:"literal",value:"'ANNEN_PART'"}]},description:"",defaultValue:{value:"'BRUKER'",computed:!1}},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Personadresse[]"},description:""},kjønn:{required:!1,tsType:{name:"string"},description:""},showIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const Kh=({personoversikt:{barn:i,bruker:d,annenPart:a},alleKodeverk:u})=>m.jsxs(tr,{gap:"2",children:[i.map(g=>m.jsx(Xt,{...g,alleKodeverk:u,rolle:"BARN"},g.aktoerId)),m.jsx(Xt,{rolle:"BRUKER",alleKodeverk:u,...d}),a&&m.jsx(Xt,{...a,rolle:"ANNEN_PART",alleKodeverk:u})]});Kh.__docgenInfo={description:"",methods:[],displayName:"PersonopplysningerForFamilie",props:{alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const ho={"RegistrereVergeInfoPanel.CheckInformation":"Fyll ut og kontroller vergeopplysninger","Verge.KontaktPerson":"Kontaktperson","Verge.Navn":"Navn","Verge.Mandat":"Mandat","Verge.FodselsNummer":"Fødselsnummer","Verge.PeriodeFOM":"Periode f.o.m.","Verge.PeriodeTOM":"Periode t.o.m.","Verge.TypeVerge":"Type verge","Verge.VergeFullmektig":"Verge/fullmektig","Verge.Soker":"Søker","Verge.BrukerErUnderTvungenForvaltning":"Søker er under tvungen forvaltning","Verge.Organisasjonsnummer":"Organisasjonsnummer"},cr=Be(ho),cn=({readOnly:i,vergetyper:d=[],valgtVergeType:a})=>m.jsxs(tr,{gap:"4",children:[m.jsx(Jr,{name:"vergeType",label:cr.formatMessage({id:"Verge.TypeVerge"}),validate:[Ve],selectValues:d.map(u=>m.jsx("option",{value:u.kode,children:u.navn},u.kode)),readOnly:i}),a&&m.jsxs(m.Fragment,{children:[m.jsxs(Dn,{gap:"4",children:[m.jsx(Pi,{name:"navn",label:cr.formatMessage({id:"Verge.Navn"}),validate:[Ve,ub],readOnly:i}),a===Xi.ADVOKAT?m.jsx(Pi,{name:"organisasjonsnummer",label:cr.formatMessage({id:"Verge.Organisasjonsnummer"}),validate:[Ve,ob],readOnly:i}):m.jsx(Pi,{name:"fnr",label:cr.formatMessage({id:"Verge.FodselsNummer"}),validate:[Ve,db],readOnly:i})]}),m.jsxs(Dn,{gap:"4",children:[m.jsx(Fu,{name:"gyldigFom",label:cr.formatMessage({id:"Verge.PeriodeFOM"}),validate:[Ve,Iu],isReadOnly:i}),m.jsx(Fu,{name:"gyldigTom",label:cr.formatMessage({id:"Verge.PeriodeTOM"}),validate:[Iu],isReadOnly:i})]})]})]});cn.buildInitialValues=i=>({...i,gyldigTom:(i==null?void 0:i.gyldigTom)??void 0});cn.transformValues=i=>({vergeType:i.vergeType,navn:i.navn,gyldigFom:i.gyldigFom,gyldigTom:i.gyldigTom,...i.vergeType===Xi.ADVOKAT?{organisasjonsnummer:i.organisasjonsnummer}:{fnr:i.fnr}});cn.__docgenInfo={description:`RegistrereVergeFaktaForm

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
}>`}],raw:"KodeverkMedNavn[]"},description:"",defaultValue:{value:"[]",computed:!1}},valgtVergeType:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""}}};const Vh=(i,d)=>({...wr.initialValues(d),...cn.buildInitialValues(i)}),Fh=i=>({kode:to.AVKLAR_VERGE,...cn.transformValues(i),...wr.transformValues(i)}),co=({submittable:i,verge:d,alleKodeverk:a})=>{const u=Tr(),{aksjonspunkterForPanel:g,submitCallback:f,alleMerknaderFraBeslutter:h,harÅpneAksjonspunkter:q,isReadOnly:j}=$f(),{mellomlagretFormData:R,setMellomlagretFormData:E}=Wf(),S=Ar({defaultValues:R||Vh(d,g),shouldUnregister:!0}),I=S.watch("vergeType"),P=S.watch("begrunnelse"),J=N.useMemo(()=>a[ln.VERGE_TYPE].sort((me,W)=>me.navn.localeCompare(W.navn)),[a[ln.VERGE_TYPE]]);return m.jsxs(m.Fragment,{children:[q&&m.jsx(nb,{children:u.formatMessage({id:"RegistrereVergeInfoPanel.CheckInformation"})}),m.jsx(jr,{formMethods:S,onSubmit:me=>f(Fh(me)),setDataOnUnmount:E,children:m.jsxs(tr,{gap:"6",children:[m.jsx(rb,{merknaderFraBeslutter:h[to.AVKLAR_VERGE],children:m.jsx(cn,{readOnly:j||g.length===0,vergetyper:J,valgtVergeType:I})}),g.length!==0&&m.jsxs(m.Fragment,{children:[m.jsx(wr,{isSubmittable:i,isReadOnly:j,hasBegrunnelse:!!P}),m.jsx(vo,{isSubmittable:i&&!!I,isReadOnly:j,isSubmitting:S.formState.isSubmitting,isDirty:S.formState.isDirty})]})]})})]})};co.__docgenInfo={description:`RegistrereVergeInfoPanel

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
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"gyldigFom",value:{name:"string",required:!0}},{key:"gyldigTom",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vergeType",value:{name:"string",required:!0}}]}},{name:"union",raw:"(T & { [K in keyof U]?: never }) | (U & { [K in keyof T]?: never })",elements:[{name:"unknown"},{name:"unknown"}]}]},{name:"undefined"}]},description:""},submittable:{required:!0,tsType:{name:"boolean"},description:""}}};const Ih=Be(ho),Mh=({verge:i,alleKodeverk:d,submittable:a})=>m.jsx(ze,{value:Ih,children:m.jsx(co,{verge:i,alleKodeverk:d,submittable:a})});Mh.__docgenInfo={description:"",methods:[],displayName:"VergeFaktaIndex",props:{verge:{required:!0,tsType:{name:"union",raw:"Verge | undefined",elements:[{name:"intersection",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<TilbakekrevingKodeverkType, KodeverkMedNavn[]>"}]},description:""},submittable:{required:!0,tsType:{name:"boolean"},description:""}}};const qr=Be(oa),Lh=i=>qr.formatMessage({id:i?"MenyVergeIndex.OpprettVerge":"MenyVergeIndex.FjernVerge"}),qo=({verge:i,type:d,fjernVerge:a,opprettVerge:u,lukkModal:g,alleKodeverk:f})=>{const h=d==="FJERN",q=Ar({defaultValues:cn.buildInitialValues(i)}),j=E=>{h?a():u(cn.transformValues(E)),g()},R=q.watch("vergeType");return N.useEffect(()=>{i&&q.reset(cn.buildInitialValues(i))},[i]),m.jsx(ze,{value:qr,children:m.jsx(jr,{formMethods:q,onSubmit:j,children:m.jsxs(ke,{open:!0,width:"small",onClose:g,"aria-label":qr.formatMessage({id:h?"MenyVergeIndex.FjernVergeSporsmal":"MenyVergeIndex.OpprettVergeSporsmal"}),children:[m.jsx(ke.Header,{closeButton:!0,children:m.jsx(Xr,{size:"medium",children:qr.formatMessage({id:h?"MenyVergeIndex.FjernVergeSporsmal":"MenyVergeIndex.OpprettVergeSporsmal"})})}),m.jsx(ke.Body,{children:m.jsx(cn,{readOnly:h,vergetyper:f[ln.VERGE_TYPE],valgtVergeType:R})}),m.jsxs(ke.Footer,{children:[m.jsx(Ye,{variant:"primary",size:"small",autoFocus:!0,type:"submit",children:qr.formatMessage({id:h?"MenyVergeIndex.Fjern":"MenyVergeIndex.Opprett"})}),m.jsx(Ye,{variant:"secondary",size:"small",onClick:g,type:"button",children:qr.formatMessage({id:"MenyVergeIndex.Avbryt"})})]})]})})})};qo.__docgenInfo={description:"",methods:[],displayName:"MenyVergeIndex",props:{verge:{required:!0,tsType:{name:"union",raw:"Verge | undefined",elements:[{name:"intersection",raw:`{
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
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"gyldigFom",value:{name:"string",required:!0}},{key:"gyldigTom",value:{name:"string",required:!1}},{key:"vergeType",value:{name:"string",required:!0}}]}},{name:"union",raw:"(T & { [K in keyof U]?: never }) | (U & { [K in keyof T]?: never })",elements:[{name:"unknown"},{name:"unknown"}]}]},name:"values"}],return:{name:"void"}}},description:""}}};const Ci=Be(oa),Uh=()=>Ci.formatMessage({id:"MenyTaAvVentIndex.ResumeBehandling"}),To=({behandlingVersjon:i,taBehandlingAvVent:d,lukkModal:a})=>{const u=N.useCallback(()=>{d(),a()},[i]);return m.jsx(ze,{value:Ci,children:m.jsx(zi,{text:Ci.formatMessage({id:"MenyTaAvVentIndex.TaAvVent"}),showModal:!0,submit:u,cancel:a})})};To.__docgenInfo={description:"",methods:[],displayName:"MenyTaAvVentIndex",props:{behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},taBehandlingAvVent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Hh="_modal_tyvxs_1",Gh="_selectWidth_tyvxs_6",Li={modal:Hh,selectWidth:Gh},Dh=Ji(400),Ao=({handleSubmit:i,lukkModal:d,behandlendeEnheter:a,gjeldendeBehandlendeEnhetId:u,gjeldendeBehandlendeEnhetNavn:g})=>{const f=a.map((S,I)=>m.jsx("option",{value:`${I}`,children:`${S.enhetId} ${S.enhetNavn}`},S.enhetId)),h=[m.jsx("option",{disabled:!0,children:`${u} ${g}`},u)].concat(f),q=Tr(),j=Ar(),R=j.watch("nyEnhet"),E=j.watch("begrunnelse");return m.jsx(jr,{formMethods:j,onSubmit:i,children:m.jsxs(ke,{className:Li.modal,open:!0,"aria-label":q.formatMessage({id:"EndreBehandlendeEnhetModal.ModalDescription"}),onClose:d,children:[m.jsx(ke.Header,{children:m.jsx(Xr,{size:"small",children:m.jsx(te,{id:"EndreBehandlendeEnhetModal.EndreEnhet"})})}),m.jsxs(ke.Body,{children:[m.jsx(zr,{sixteenPx:!0}),m.jsx(Jr,{name:"nyEnhet",label:q.formatMessage({id:"EndreBehandlendeEnhetModal.NyEnhetField"}),validate:[Ve],selectValues:h,className:Li.selectWidth}),m.jsx(zr,{sixteenPx:!0}),m.jsx(ra,{name:"begrunnelse",label:q.formatMessage({id:"EndreBehandlendeEnhetModal.BegrunnelseField"}),validate:[Ve,Dh,ta],maxLength:400}),m.jsx(zr,{sixteenPx:!0})]}),m.jsxs(ke.Footer,{children:[m.jsx(Ye,{size:"small",variant:"primary",className:Li.button,disabled:!(R&&E),children:q.formatMessage({id:"EndreBehandlendeEnhetModal.Ok"})}),m.jsx(Ye,{size:"small",variant:"secondary",onClick:d,type:"button",children:q.formatMessage({id:"EndreBehandlendeEnhetModal.Avbryt"})})]})]})})};Ao.__docgenInfo={description:`EndreBehandlendeEnhetModal

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
}`,signature:{properties:[{key:"nyEnhet",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}}]}},name:"formValues"}],return:{name:"void"}}},description:""}}};const jo=Be(oa),Ch=()=>jo.formatMessage({id:"MenyEndreBehandlendeEnhetIndex.ByttBehandlendeEnhet"}),wo=({behandlingVersjon:i,behandlendeEnhetId:d,behandlendeEnhetNavn:a,nyBehandlendeEnhet:u,behandlendeEnheter:g,lukkModal:f})=>{const h=N.useMemo(()=>g.filter(j=>j.enhetId!==d),[g]),q=N.useCallback(j=>{const R=h[parseInt(j.nyEnhet,10)],E={enhetNavn:R.enhetNavn,enhetId:R.enhetId,begrunnelse:j.begrunnelse};u(E),f()},[i,u]);return m.jsx(ze,{value:jo,children:m.jsx(Ao,{lukkModal:f,behandlendeEnheter:h,gjeldendeBehandlendeEnhetId:d,gjeldendeBehandlendeEnhetNavn:a,handleSubmit:q})})};wo.__docgenInfo={description:"",methods:[],displayName:"MenyEndreBehandlendeEnhetIndex",props:{behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},behandlendeEnhetId:{required:!0,tsType:{name:"string"},description:""},behandlendeEnhetNavn:{required:!0,tsType:{name:"string"},description:""},nyBehandlendeEnhet:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { enhetNavn: string; enhetId: string; begrunnelse: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ enhetNavn: string; enhetId: string; begrunnelse: string }",signature:{properties:[{key:"enhetNavn",value:{name:"string",required:!0}},{key:"enhetId",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},behandlendeEnheter:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  enhetId: string;
  enhetNavn: string;
}`,signature:{properties:[{key:"enhetId",value:{name:"string",required:!0}},{key:"enhetNavn",value:{name:"string",required:!0}}]}}],raw:`{
  enhetId: string;
  enhetNavn: string;
}[]`},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const $h={"MenyApneForEndringerIndex.ReopenBehandling":"Åpne behandling for endringer","MenyApneForEndringerIndex.OpenBehandling":"Åpne behandling for endringer?"},$i=Be($h),Wh=()=>$i.formatMessage({id:"MenyApneForEndringerIndex.ReopenBehandling"}),Ro=({apneBehandlingForEndringer:i,lukkModal:d})=>{const a=()=>{i(),d()};return m.jsx(ze,{value:$i,children:m.jsx(zi,{text:$i.formatMessage({id:"MenyApneForEndringerIndex.OpenBehandling"}),showModal:!0,submit:a,cancel:d})})};Ro.__docgenInfo={description:"",methods:[],displayName:"MenyApneForEndringerIndex",props:{apneBehandlingForEndringer:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Yh="_modal_mgzc2_1",zh={modal:Yh},Bo=({submitCallback:i,cancelEvent:d,saksnummer:a,fagsakMarkeringer:u,fagsakMarkeringerKodeverk:g})=>{const f=Tr(),h=Ar({defaultValues:{saksnummer:a,fagsakMarkeringer:u?u.map(q=>q.fagsakMarkering):[]}});return m.jsx(jr,{formMethods:h,onSubmit:i,children:m.jsxs(ke,{className:zh.modal,open:!0,"aria-label":f.formatMessage({id:"MenyEndreUtlandIndex.UtlandTittel"}),onClose:d,children:[m.jsx(ke.Header,{children:m.jsx(Xr,{size:"small",children:m.jsx(te,{id:"MenyEndreUtlandIndex.UtlandTittel"})})}),m.jsx(ke.Body,{children:m.jsx(gb,{name:"fagsakMarkeringer",hideLegend:!0,checkboxes:g.map(q=>({label:q.navn,value:q.kode}))})}),m.jsxs(ke.Footer,{children:[m.jsx(Ye,{size:"small",variant:"primary",children:m.jsx(te,{id:"MenyEndreUtlandIndex.Ok"})}),m.jsx(Ye,{size:"small",variant:"secondary",onClick:d,type:"button",children:m.jsx(te,{id:"MenyEndreUtlandIndex.Avbryt"})})]})]})})};Bo.__docgenInfo={description:`EndreUtlandModal

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
}>`}],raw:"KodeverkMedNavn[]"},description:""}}};const Jh={"MenyEndreUtlandIndex.MenyTittel":"Endre saksmerking","MenyEndreUtlandIndex.UtlandTittel":"Saksmarkering","MenyEndreUtlandIndex.Ok":"OK","MenyEndreUtlandIndex.Avbryt":"Avbryt"},Eo=Be(Jh),Zh=()=>Eo.formatMessage({id:"MenyEndreUtlandIndex.MenyTittel"}),_o=({endreFagsakMarkering:i,lukkModal:d,...a})=>{const u=g=>{i(g),d()};return m.jsx(ze,{value:Eo,children:m.jsx(Bo,{cancelEvent:d,submitCallback:u,...a})})};_o.__docgenInfo={description:"",methods:[],displayName:"MenyEndreUtlandIndex",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},fagsakMarkeringer:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"},description:""}}};const Xh="_image_yu5bn_1",Qh="_modal_yu5bn_8",Xu={image:Xh,modal:Qh},So=({showModal:i,closeEvent:d})=>{const a=Tr();return m.jsx(ke,{className:Xu.modal,open:i,"aria-label":a.formatMessage({id:"HenlagtBehandlingModal.ModalDescription"}),onClose:d,children:m.jsx(ke.Body,{children:m.jsxs(Dn,{justify:"space-between",children:[m.jsxs(Dn,{gap:"3",children:[m.jsx(yb,{className:Xu.image,title:a.formatMessage({id:"HenlagtBehandlingModal.Henlagt"})}),m.jsxs(tr,{gap:"1",children:[m.jsx(ia,{size:"small",children:m.jsx(te,{id:"HenlagtBehandlingModal.BehandlingenErHenlagt"})}),m.jsx(Qt,{size:"small",children:m.jsx(te,{id:"HenlagtBehandlingModal.RutetTilForsiden"})})]})]}),m.jsx(Ye,{variant:"primary",size:"small",onClick:d,autoFocus:!0,type:"button",children:m.jsx(te,{id:"HenlagtBehandlingModal.Ok"})})]})})})};So.__docgenInfo={description:`HenlagtBehandlingModal

Denne modalen vises etter en vilkarsvurdering der behandlingsstatusen
er satt til Iverksetter vedtak. Ved å trykke på knapp blir saksbehandler tatt tilbake til sokesiden.`,methods:[],displayName:"HenlagtBehandlingModal",props:{showModal:{required:!0,tsType:{name:"boolean"},description:""},closeEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const ec="_modal_osiwa_1",nc="_button_osiwa_5",rc="_selectWidth_osiwa_9",Jt={modal:ec,button:nc,selectWidth:rc},tc=Ji(1500),Qu=(i,d,a,u)=>g=>{const f={behandlingUuid:a,fagsakYtelseType:d,dokumentMal:pb.INFO_OM_HENLEGGELSE,fritekst:u,mottaker:"Søker"};i(!0,f),g.preventDefault()},No=(i,d)=>$.TILBAKEKREVING_REVURDERING===i&&ge.HENLAGT_FEILOPPRETTET_MED_BREV===d,ac=(i,d,a,u)=>No(i,d)?!(d&&a&&u):!(d&&a),ic=(i,d,a)=>i===$.TILBAKEKREVING?ge.HENLAGT_FEILOPPRETTET===d:i===$.TILBAKEKREVING_REVURDERING?ge.HENLAGT_FEILOPPRETTET_MED_BREV===d&&!!a:[ge.HENLAGT_SOKNAD_TRUKKET,ge.HENLAGT_KLAGE_TRUKKET,ge.HENLAGT_INNSYN_TRUKKET].some(u=>u===d),sc={[$.KLAGE]:[ge.HENLAGT_KLAGE_TRUKKET,ge.HENLAGT_FEILOPPRETTET],[$.ANKE]:[ge.HENLAGT_ANKE_TRUKKET,ge.HENLAGT_FEILOPPRETTET],[$.DOKUMENTINNSYN]:[ge.HENLAGT_INNSYN_TRUKKET,ge.HENLAGT_FEILOPPRETTET],[$.TILBAKEKREVING]:[ge.HENLAGT_FEILOPPRETTET],[$.TILBAKEKREVING_REVURDERING]:[ge.HENLAGT_FEILOPPRETTET_MED_BREV,ge.HENLAGT_FEILOPPRETTET_UTEN_BREV],[$.REVURDERING]:[ge.HENLAGT_SOKNAD_TRUKKET,ge.HENLAGT_FEILOPPRETTET,ge.HENLAGT_SOKNAD_MANGLER],[$.FORSTEGANGSSOKNAD]:[ge.HENLAGT_SOKNAD_TRUKKET,ge.HENLAGT_FEILOPPRETTET,ge.HENLAGT_SOKNAD_MANGLER]},lc=(i,d,a)=>sc[d].filter(g=>a!==ea.ENGANGSSTONAD||a===ea.ENGANGSSTONAD&&g!==ge.HENLAGT_SOKNAD_MANGLER).flatMap(g=>{const f=i.find(h=>h.kode===g);return f?[f]:[]}),Po=({handleSubmit:i,cancelEvent:d,previewHenleggBehandling:a,behandlingUuid:u,ytelseType:g,behandlingType:f,behandlingResultatTyper:h})=>{const q=Tr(),j=Ar(),R=j.watch("årsakKode"),E=j.watch("begrunnelse"),S=j.watch("fritekst"),I=ic(f,R,S),P=N.useMemo(()=>lc(h,f,g),[h,f,g]);return m.jsx(jr,{formMethods:j,onSubmit:i,children:m.jsxs(ke,{className:Jt.modal,open:!0,"aria-label":q.formatMessage({id:"HenleggBehandlingModal.ModalDescription"}),onClose:d,children:[m.jsx(ke.Header,{children:m.jsx(Xr,{size:"small",children:m.jsx(te,{id:"HenleggBehandlingModal.HenleggBehandling"})})}),m.jsx(ke.Body,{children:m.jsxs(tr,{gap:"4",children:[m.jsx(Jr,{name:"årsakKode",className:Jt.selectWidth,label:q.formatMessage({id:"HenleggBehandlingModal.ArsakField"}),validate:[Ve],selectValues:P.map(J=>m.jsx("option",{value:J.kode,children:q.formatMessage({id:J.kode})},J.kode))}),m.jsx(ra,{name:"begrunnelse",label:q.formatMessage({id:"HenleggBehandlingModal.BegrunnelseField"}),validate:[Ve,tc,ta],maxLength:1500}),No(f,R)&&m.jsx("div",{className:Jt.fritekstTilBrevTextArea,children:m.jsx(ra,{name:"fritekst",label:q.formatMessage({id:"HenleggBehandlingModal.Fritekst"}),validate:[Ve,ta],maxLength:2e3,parse:tb})}),I&&m.jsxs(Dn,{justify:"space-between",children:[m.jsx(ia,{size:"small",children:q.formatMessage({id:"HenleggBehandlingModal.SokerInformeres"})}),m.jsx(fb,{href:"#",onClick:Qu(a,g,u,S),onKeyDown:Qu(a,g,u,S),children:m.jsx(te,{id:"HenleggBehandlingModal.ForhandsvisBrev"})})]})]})}),m.jsxs(ke.Footer,{children:[m.jsx(Ye,{variant:"primary",size:"small",className:Jt.button,disabled:ac(f,R,E,S),children:m.jsx(te,{id:"HenleggBehandlingModal.HenleggBehandlingSubmit"})}),m.jsx(Ye,{variant:"secondary",size:"small",onClick:d,type:"button",children:m.jsx(te,{id:"HenleggBehandlingModal.Avbryt"})})]})]})})};Po.__docgenInfo={description:`HenleggBehandlingModal

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
}>`}],raw:"KodeverkMedNavn[]"},description:""},behandlingType:{required:!0,tsType:{name:"string"},description:""}}};const uc="Behandlingen er feilaktig opprettet",oc="Feilaktig opprettet - med henleggelsesbrev",dc="Feilaktig opprettet - uten henleggelsesbrev",gc="Klagen er trukket",kc="Innsynskrav er trukket",mc={"MenyHenleggIndex.HenleggBehandling":"Henlegg behandlingen og avslutt","HenleggBehandlingModal.ModalDescription":"Behandlingen henlegges","HenleggBehandlingModal.HenleggBehandling":"Henlegg behandling","HenleggBehandlingModal.ArsakField":"Velg årsak","HenleggBehandlingModal.BegrunnelseField":"Begrunnelse","HenleggBehandlingModal.Fritekst":"Fritekst til brev","HenleggBehandlingModal.HenleggBehandlingSubmit":"Henlegg behandling","HenleggBehandlingModal.Avbryt":"Avbryt","HenleggBehandlingModal.SokerInformeres":"Informer søker","HenleggBehandlingModal.ForhandsvisBrev":"Forhåndsvis brev","HenlagtBehandlingModal.ModalDescription":"Behandlingen er henlagt","HenlagtBehandlingModal.Henlagt":"Henlagt","HenlagtBehandlingModal.BehandlingenErHenlagt":"Behandlingen er henlagt","HenlagtBehandlingModal.RutetTilForsiden":"Du kommer nå til forsiden","HenlagtBehandlingModal.Ok":"OK",HENLAGT_SØKNAD_TRUKKET:"Søknaden er trukket",HENLAGT_FEILOPPRETTET:uc,HENLAGT_FEILOPPRETTET_MED_BREV:oc,HENLAGT_FEILOPPRETTET_UTEN_BREV:dc,HENLAGT_KLAGE_TRUKKET:gc,HENLAGT_INNSYN_TRUKKET:kc,HENLAGT_SØKNAD_MANGLER:"Søknad mangler"},Oo=Be(mc),vc=()=>Oo.formatMessage({id:"MenyHenleggIndex.HenleggBehandling"}),xo=({valgtBehandling:i,henleggBehandling:d,forhandsvisHenleggBehandling:a,ytelseType:u,behandlingResultatTyper:g,gaaTilSokeside:f,lukkModal:h})=>{const[q,j]=N.useState(!1),R=E=>{const S={årsakKode:E.årsakKode??"",begrunnelse:E.begrunnelse??"",fritekst:E.fritekst};d(S).then(()=>{j(!0)})};return m.jsxs(ze,{value:Oo,children:[!q&&m.jsx(Po,{handleSubmit:R,cancelEvent:h,previewHenleggBehandling:a,ytelseType:u,behandlingType:i.type,behandlingUuid:i.uuid,behandlingResultatTyper:g}),q&&m.jsx(So,{showModal:!0,closeEvent:f})]})};xo.__docgenInfo={description:"",methods:[],displayName:"MenyHenleggIndex",props:{valgtBehandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]},required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"string",required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
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
  };
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
}>`}],raw:"KodeverkMedNavn[]"},description:""},gaaTilSokeside:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const yc="_modal_1awdg_11",pc="_typeBredde_1awdg_29",fc="_arsakBredde_1awdg_33",Ui={modal:yc,typeBredde:pc,arsakBredde:fc},bc=(i,d)=>{const a=d.some(u=>u.kode===i.kode);return m.jsx("option",{value:i.kode,disabled:!a,children:` ${i.navn} `},i.kode)},hc=[ee.ANNET,ee.FEIL_I_LOVANDVENDELSE,ee.FEIL_ELLER_ENDRET_FAKTA,ee.FEIL_REGELVERKSFORSTAELSE,ee.FEIL_PROSESSUELL],cc=[ee.BEREEGNINGSGRUNNLAG,ee.MEDLEMSKAP,ee.OPPTJENING,ee.FORDELING,ee.INNTEKT,ee.DØD,ee.SØKERS_RELASJON,ee.SØKNADSFRIST,ee.KLAGE_U_INNTK,ee.KLAGE_M_INNTK],qc=[ee.KLAGE_U_INNTK,ee.KLAGE_M_INNTK,ee.RE_ENDRET_INNTEKTSMELDING,ee.RE_ENDRING_FRA_BRUKER,ee.FØDSEL,ee.DØD,ee.ANNET,ee.INNTEKT],Tc=[ee.RE_FORELDELSE,ee.RE_VILKÅR,ee.RE_KLAGE_KA,ee.RE_KLAGE_NFP,ee.RE_FEILUTBETALT_BELØP_REDUSERT],Ac=(i,d,a,u)=>{if(u===$.TILBAKEKREVING_REVURDERING)return Tc.flatMap(g=>{const f=a.find(h=>h.kode===g);return f?[f]:[]});if(u===$.REVURDERING){const g=i===ea.FORELDREPENGER,f=i===ea.SVANGERSKAPSPENGER;let h=g?cc:hc;return f&&(h=qc),d.filter(q=>h.some(j=>j===q.kode)).sort((q,j)=>q.navn.localeCompare(j.navn))}return[]},jc=i=>[...i].sort((d,a)=>d.navn.localeCompare(a.navn)),wc=(i,d,a={kanBehandlingOpprettes:!1,kanRevurderingOpprettes:!1})=>i.filter(u=>u.kode===$.TILBAKEKREVING?a.kanBehandlingOpprettes:u.kode===$.TILBAKEKREVING_REVURDERING?a.kanRevurderingOpprettes:d.some(g=>g.behandlingType===u.kode&&g.kanOppretteBehandling)),Ko=({submitCallback:i,cancelEvent:d,behandlingstyper:a,uuidForSistLukkede:u,ytelseType:g,behandlingOppretting:f,kanTilbakekrevingOpprettes:h,revurderingArsaker:q,tilbakekrevingRevurderingArsaker:j})=>{const R=Tr(),E=Ar(),S=W=>i({...W,eksternUuid:u,fagsakYtelseType:g}),I=E.watch("behandlingType"),P=jc(a),J=wc(P,f,h),me=Ac(g,q,j,I);return m.jsx(jr,{formMethods:E,onSubmit:S,children:m.jsxs(ke,{className:Ui.modal,open:!0,"aria-label":R.formatMessage({id:"MenyNyBehandlingIndex.ModalDescription"}),onClose:d,children:[m.jsx(ke.Header,{children:m.jsx(Xr,{size:"small",children:m.jsx(te,{id:"MenyNyBehandlingIndex.OpprettNyForstegangsbehandling"})})}),m.jsxs(ke.Body,{children:[m.jsx(Jr,{name:"behandlingType",label:"",validate:[Ve],selectValues:P.map(W=>bc(W,J)),className:Ui.typeBredde}),m.jsx(zr,{sixteenPx:!0}),I===$.FORSTEGANGSSOKNAD&&m.jsxs(m.Fragment,{children:[m.jsx(kb,{name:"nyBehandlingEtterKlage",label:R.formatMessage({id:"MenyNyBehandlingIndex.NyBehandlingEtterKlage"})}),m.jsx(zr,{sixteenPx:!0})]}),me.length>0&&m.jsx(Jr,{name:"behandlingArsakType",label:"",hideLabel:!0,validate:[Ve],className:Ui.arsakBredde,selectValues:me.map(W=>m.jsx("option",{value:W.kode,children:W.navn},W.kode))})]}),m.jsxs(ke.Footer,{children:[m.jsx(Ye,{size:"small",variant:"primary",children:m.jsx(te,{id:"MenyNyBehandlingIndex.Ok"})}),m.jsx(Ye,{size:"small",variant:"secondary",onClick:d,type:"button",children:m.jsx(te,{id:"MenyNyBehandlingIndex.Avbryt"})})]})]})})};Ko.__docgenInfo={description:`NyBehandlingModal

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
}`,signature:{properties:[{key:"kanBehandlingOpprettes",value:{name:"boolean",required:!0}},{key:"kanRevurderingOpprettes",value:{name:"boolean",required:!0}}]}},description:""},uuidForSistLukkede:{required:!1,tsType:{name:"string"},description:""}}};const Rc={"MenyNyBehandlingIndex.NyForstegangsbehandling":"Opprett ny behandling","MenyNyBehandlingIndex.ModalDescription":"Ny behandling","MenyNyBehandlingIndex.OpprettNyForstegangsbehandling":"Opprett ny behandling","MenyNyBehandlingIndex.NyBehandlingEtterKlage":"Behandlingen opprettes som et resultat av klagebehandling","MenyNyBehandlingIndex.Ok":"OK","MenyNyBehandlingIndex.Avbryt":"Avbryt"},Bc=[$.TILBAKEKREVING,$.TILBAKEKREVING_REVURDERING],Vo=Be(Rc),Ec=()=>Vo.formatMessage({id:"MenyNyBehandlingIndex.NyForstegangsbehandling"}),Fo=({saksnummer:i,behandlingUuid:d,lagNyBehandling:a,lukkModal:u,...g})=>{const f=h=>{const q=!!h.behandlingType&&Bc.some(E=>E===h.behandlingType),R={saksnummer:i,...d&&q?{behandlingUuid:d}:{},...h};a({isTilbakekreving:q,params:R}),u()};return m.jsx(ze,{value:Vo,children:m.jsx(Ko,{cancelEvent:u,submitCallback:f,...g})})};Fo.__docgenInfo={description:"",methods:[],displayName:"MenyNyBehandlingIndex",props:{ytelseType:{required:!0,tsType:{name:"string"},description:""},saksnummer:{required:!0,tsType:{name:"string"},description:""},behandlingUuid:{required:!1,tsType:{name:"string"},description:""},lagNyBehandling:{required:!0,tsType:{name:"signature",type:"function",raw:`(values: {
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
}`,signature:{properties:[{key:"kanBehandlingOpprettes",value:{name:"boolean",required:!0}},{key:"kanRevurderingOpprettes",value:{name:"boolean",required:!0}}]}},description:""},uuidForSistLukkede:{required:!1,tsType:{name:"string"},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const _c={"MenySettPaVentIndex.BehandlingOnHold":"Sett behandlingen på vent"},Io=Be(_c),Sc=()=>Io.formatMessage({id:"MenySettPaVentIndex.BehandlingOnHold"}),Mo=({settBehandlingPaVent:i,ventearsaker:d,lukkModal:a,erTilbakekreving:u})=>{const g=f=>{if(f.frist===void 0||f.ventearsak===void 0)throw new Error("Frist eller venteårsak skal være satt");const h={frist:f.frist,ventearsak:f.ventearsak};i(h),a()};return m.jsx(ze,{value:Io,children:m.jsx(bb,{showModal:!0,submitCallback:g,cancelEvent:a,ventearsaker:d,erTilbakekreving:u,hasManualPaVent:!0})})};Mo.__docgenInfo={description:"",methods:[],displayName:"MenySettPaVentIndex",props:{settBehandlingPaVent:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { frist: string; ventearsak: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ frist: string; ventearsak: string }",signature:{properties:[{key:"frist",value:{name:"string",required:!0}},{key:"ventearsak",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},ventearsaker:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},erTilbakekreving:{required:!0,tsType:{name:"boolean"},description:""}}};const Lo=({behandling:i,setBehandling:d,lukkModal:a})=>{const u=Zi(i,d);return m.jsx(Ro,{apneBehandlingForEndringer:u.åpneForEndringer,lukkModal:a})};Lo.__docgenInfo={description:"",methods:[],displayName:"ApneForEndringerMenyModal",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]},required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"string",required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
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
  };
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]},required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"string",required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},name:"behandling"}],return:{name:"void"}}},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Uo=({behandling:i,hentOgSettBehandling:d,lukkModal:a})=>{const u=We(Yi()),g=la(i),{mutate:f}=rr({mutationFn:h=>g.endreBehandlendeEnhet({...h,behandlingUuid:i.uuid,behandlingVersjon:i.versjon}),onSuccess:()=>d()});return m.jsx(wo,{behandlingVersjon:i.versjon,behandlendeEnhetId:i.behandlendeEnhetId,behandlendeEnhetNavn:i.behandlendeEnhetNavn,nyBehandlendeEnhet:f,behandlendeEnheter:On(u.data).behandlendeEnheter,lukkModal:a})};Uo.__docgenInfo={description:"",methods:[],displayName:"EndreBehandlendeEnhetMenyModal",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]},required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"string",required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},hentOgSettBehandling:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Ho=({saksnummer:i,fagsakMarkeringer:d,hentOgSettBehandling:a,lukkModal:u})=>{const g=no(),f=sa(),h=Tb(ln.FAGSAK_MARKERING).toSorted((j,R)=>j.navn.localeCompare(R.navn)),{mutate:q}=rr({mutationFn:j=>f.endreSakMarkering(j),onSuccess:()=>{a(),g.invalidateQueries({queryKey:[Gi.FETCH_FAGSAK]})}});return m.jsx(_o,{saksnummer:i,fagsakMarkeringer:d,endreFagsakMarkering:q,lukkModal:u,fagsakMarkeringerKodeverk:h})};Ho.__docgenInfo={description:"",methods:[],displayName:"EndreFagsakMarkeringMenyModal",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},fagsakMarkeringer:{required:!0,tsType:{name:"union",raw:"Saksmarkering[] | undefined",elements:[{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fagsakMarkering: string;
  kortNavn?: string;
}`,signature:{properties:[{key:"fagsakMarkering",value:{name:"string",required:!0}},{key:"kortNavn",value:{name:"string",required:!1}}]}}],raw:"Saksmarkering[]"},{name:"undefined"}]},description:""},hentOgSettBehandling:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};class rs{constructor(d){Yt(this,"$$behandlingType");Yt(this,"$$fpSakKodeverk");Yt(this,"$$fpTilbakeKodeverk");this.$$behandlingType=d}medFpSakKodeverk(d){return this.$$fpSakKodeverk=d,this}medFpTilbakeKodeverk(d){return this.$$fpTilbakeKodeverk=d,this}getKodeverkForBehandlingstype(d,a){if(a===$.TILBAKEKREVING||a===$.TILBAKEKREVING_REVURDERING)return this.$$fpTilbakeKodeverk?this.$$fpTilbakeKodeverk[d]:void 0;if(d!==ln.AVSLAGSARSAK)return this.$$fpSakKodeverk[d];throw new Error("Avslagsårsak ikke støttet")}getKodeverkForValgtBehandling(d){return this.getKodeverkForBehandlingstype(d,this.$$behandlingType)}getKodeverkForBehandlingstyper(d,a){return d.reduce((u,g)=>{const f=this.getKodeverkForBehandlingstype(a,g);if(f){const h=f.find(q=>q.kode===g);return h?u.concat([h]):u}return u},[])}}const Go=({behandling:i,behandlingAppKontekst:d,fagsakYtelseType:a,lukkModal:u})=>{const g=sa(),f=la(i),{data:h}=We(g.kodeverkOptions()),{data:q}=We(g.fptilbake.kodeverkOptions()),{mutateAsync:j}=rr({mutationFn:P=>f.henleggBehandling({...P,behandlingUuid:i.uuid,behandlingVersjon:i.versjon})}),R=new rs(i.type).medFpSakKodeverk(On(h)).medFpTilbakeKodeverk(On(q)),E=Wi(),S=()=>E("/"),I=jb(d);return m.jsx(xo,{valgtBehandling:i,forhandsvisHenleggBehandling:I,henleggBehandling:j,ytelseType:a,behandlingResultatTyper:R.getKodeverkForValgtBehandling(ln.BEHANDLING_RESULTAT_TYPE),lukkModal:u,gaaTilSokeside:S})};Go.__docgenInfo={description:"",methods:[],displayName:"HenleggMenyModal",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]},required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"string",required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},behandlingAppKontekst:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
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
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`,required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"string",required:!1}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}>`}]},description:""},fagsakYtelseType:{required:!0,tsType:{name:"string"},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Nc=i=>{const{setIsRequestPending:d}=hb(),{onBehandlingSuccess:a}=cb(i),{mutate:u}=rr({mutationFn:async g=>{const f=g.isTilbakekreving?await Jf(g.params):await Zf(g.params);return qb(f,d)},onSuccess:a});return{lagNyBehandling:u}},Pc=[$.FORSTEGANGSSOKNAD,$.KLAGE,$.REVURDERING,$.DOKUMENTINNSYN,$.TILBAKEKREVING,$.TILBAKEKREVING_REVURDERING],Oc=(i=[])=>{const d=i.find(a=>a.gjeldendeVedtak&&a.status===Yf.AVSLUTTET&&(a.type===$.FORSTEGANGSSOKNAD||a.type===$.REVURDERING));return d?d.uuid:void 0},Do=({fagsakData:i,behandlingUuid:d,lukkModal:a})=>{const u=i.getFagsak(),g=i.getAlleBehandlinger(),f=i.getBehandling(d),h=Oc(g),q=wb().includes(aa.FPTILBAKE),j=sa(),{data:R}=We(j.kodeverkOptions()),{data:E}=We(j.fptilbake.kodeverkOptions()),S=We(Yi()),{innloggetBruker:I}=On(S.data),P=q&&!I.kanVeilede&&h!==void 0,{data:J=!1}=We(j.fptilbake.kanTilbakekrevingOpprettesOptions(P,u.saksnummer,h)),me=(f==null?void 0:f.type)===$.TILBAKEKREVING||(f==null?void 0:f.type)===$.TILBAKEKREVING_REVURDERING,W=q&&!I.kanVeilede&&me&&!!d,{data:ce=!1}=We(j.fptilbake.kanTilbakekrevingRevurderingOpprettesOptions(W,d)),Y=new rs(f==null?void 0:f.type).medFpSakKodeverk(On(R)).medFpTilbakeKodeverk(On(E)),pe=Wi(),Q=ro(),ie=fe=>{const Ie=ao(u.saksnummer,fe==null?void 0:fe.uuid);pe(io({...Q,pathname:Ie}))},{lagNyBehandling:Ne}=Nc(ie);return m.jsx(Fo,{saksnummer:u.saksnummer,behandlingUuid:f==null?void 0:f.uuid,uuidForSistLukkede:h,behandlingOppretting:i.getBehandlingOppretting(),kanTilbakekrevingOpprettes:{kanBehandlingOpprettes:J,kanRevurderingOpprettes:ce},behandlingstyper:Y.getKodeverkForBehandlingstyper(Pc,ln.BEHANDLING_TYPE),tilbakekrevingRevurderingArsaker:Y.getKodeverkForBehandlingstype(ln.BEHANDLING_AARSAK,$.TILBAKEKREVING_REVURDERING),revurderingArsaker:Y.getKodeverkForBehandlingstype(ln.BEHANDLING_AARSAK,$.REVURDERING),ytelseType:u.fagsakYtelseType,lagNyBehandling:Ne,lukkModal:a})};Do.__docgenInfo={description:"",methods:[],displayName:"NyBehandlingMenyModal",props:{fagsakData:{required:!0,tsType:{name:"FagsakData"},description:""},behandlingUuid:{required:!1,tsType:{name:"string"},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Co=({behandling:i,hentOgSettBehandling:d,lukkModal:a})=>{const u=sa(),g=la(i),{data:f}=We(u.kodeverkOptions()),{data:h}=We(u.fptilbake.kodeverkOptions()),{mutate:q}=rr({mutationFn:R=>g.settBehandlingPåVent({frist:R.frist,ventearsak:R.ventearsak,behandlingUuid:i.uuid,behandlingVersjon:i.versjon}),onSuccess:()=>d()}),j=new rs(i.type).medFpSakKodeverk(On(f)).medFpTilbakeKodeverk(On(h));return m.jsx(Mo,{settBehandlingPaVent:q,ventearsaker:j.getKodeverkForValgtBehandling(ln.VENT_AARSAK),lukkModal:a,erTilbakekreving:i.type===$.TILBAKEKREVING||i.type===$.TILBAKEKREVING_REVURDERING})};Co.__docgenInfo={description:"",methods:[],displayName:"SettPaVentMenyModal",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]},required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"string",required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},hentOgSettBehandling:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const $o=({behandling:i,setBehandling:d,lukkModal:a})=>{const u=Zi(i,d);return m.jsx(To,{behandlingVersjon:i.versjon,taBehandlingAvVent:u.gjenopptaBehandling,lukkModal:a})};$o.__docgenInfo={description:"",methods:[],displayName:"TaAvVentMenyModal",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]},required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"string",required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
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
  };
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]},required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"string",required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},{name:"undefined"}]},name:"behandling"}],return:{name:"void"}}},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Wo=i=>Lu(i.behandling,"VERGE_FJERN_V2")||Lu(i.behandling,"VERGE_OPPRETT_V2")?m.jsx(Yo,{...i}):m.jsx(xc,{...i}),xc=({fagsak:i,behandlingAppKontekst:d,behandling:a,setBehandling:u,lukkModal:g})=>{var E;const f=(E=d.behandlingTillatteOperasjoner)==null?void 0:E.vergeBehandlingsmeny,h=Wi(),q=ro(),j=()=>{h(io({...q,pathname:ao(i.saksnummer,a.uuid)}))},R=Zi(a,S=>{u(S),j()});return m.jsx(mo,{fjernVerge:Zr.FJERN===f?R.fjernVergeV1:void 0,opprettVerge:Zr.OPPRETT===f?R.opprettVergeV1:void 0,lukkModal:g})},Yo=({behandlingAppKontekst:i,behandling:d,hentOgSettBehandling:a,lukkModal:u})=>{var I;const g=(I=i.behandlingTillatteOperasjoner)==null?void 0:I.vergeBehandlingsmeny,f=Ab(d.type),h=no(),q=()=>{a(),h.invalidateQueries({queryKey:[Gi.FETCH_FAGSAK]}),h.invalidateQueries({queryKey:[Gi.FETCH_FAGSAKDATA_FPTILBAKE]}),h.invalidateQueries({queryKey:[Uu.VERGE]}),h.invalidateQueries({queryKey:[Uu.VERGE_HENT]})},j=la(d),{mutate:R}=rr({mutationFn:j.verge.opprettVergeV2,onSuccess:q}),{mutate:E}=rr({mutationFn:j.verge.fjernVergeV2,onSuccess:q}),{data:S}=We(j.verge.hent(d));return m.jsx(qo,{type:Zr.OPPRETT===g?"OPPRETT":"FJERN",verge:S,opprettVerge:R,fjernVerge:E,lukkModal:u,alleKodeverk:f})};Wo.__docgenInfo={description:"",methods:[],displayName:"VergeMenyModal",props:{fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  fagsakYtelseType: string;
  relasjonsRolleType: string;
  status: string;
  dekningsgrad: number;
  aktørId: string;
  harIkkeRegistrertAdresse: boolean;
  harVergeIÅpenBehandling: boolean;
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  bruker: Person;
  fagsakMarkeringer?: Saksmarkering[];
  annenPart?: Person;
  familiehendelse?: FagsakHendelse;
  annenpartBehandling: AnnenPartBehandling;
  behandlinger: BehandlingAppKontekst[];
  brukerManglerAdresse: boolean;
  historikkinnslag: Historikkinnslag[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"relasjonsRolleType",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}},{key:"aktørId",value:{name:"string",required:!0}},{key:"harIkkeRegistrertAdresse",value:{name:"boolean",required:!0}},{key:"harVergeIÅpenBehandling",value:{name:"boolean",required:!0}},{key:"sakSkalTilInfotrygd",value:{name:"boolean",required:!0}},{key:"behandlingTypeKanOpprettes",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!1}},{key:"fagsakMarkeringer",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fagsakMarkering: string;
  kortNavn?: string;
}`,signature:{properties:[{key:"fagsakMarkering",value:{name:"string",required:!0}},{key:"kortNavn",value:{name:"string",required:!1}}]}}],raw:"Saksmarkering[]",required:!1}},{key:"annenPart",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!1}},{key:"familiehendelse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}`,signature:{properties:[{key:"hendelseType",value:{name:"string",required:!0}},{key:"hendelseDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}>`,required:!1}},{key:"annenpartBehandling",value:{name:"signature",type:"object",raw:`{
  saksnummer: string;
  behandlingUuid: string;
  relasjonsRolleType: string;
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"relasjonsRolleType",value:{name:"string",required:!0}}]},required:!0}},{key:"behandlinger",value:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
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
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`,required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"string",required:!1}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
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
  dokumentId?: string;
  journalpostId?: string;
  tag: string;
  url?: string;
  utgått: boolean;
}`,signature:{properties:[{key:"dokumentId",value:{name:"string",required:!1}},{key:"journalpostId",value:{name:"string",required:!1}},{key:"tag",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}},{key:"utgått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  dokumentId?: string;
  journalpostId?: string;
  tag: string;
  url?: string;
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
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"string",required:!1}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
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
  harIkkeRegistrertAdresse: boolean;
  harVergeIÅpenBehandling: boolean;
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  bruker: Person;
  fagsakMarkeringer?: Saksmarkering[];
  annenPart?: Person;
  familiehendelse?: FagsakHendelse;
  annenpartBehandling: AnnenPartBehandling;
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
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
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
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`,required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"string",required:!1}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]},required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"string",required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
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
  };
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]},required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"string",required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},{name:"undefined"}]},name:"behandling"}],return:{name:"void"}}},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},hentOgSettBehandling:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};Yo.__docgenInfo={description:"",methods:[],displayName:"VergeModal",props:{fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  fagsakYtelseType: string;
  relasjonsRolleType: string;
  status: string;
  dekningsgrad: number;
  aktørId: string;
  harIkkeRegistrertAdresse: boolean;
  harVergeIÅpenBehandling: boolean;
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  bruker: Person;
  fagsakMarkeringer?: Saksmarkering[];
  annenPart?: Person;
  familiehendelse?: FagsakHendelse;
  annenpartBehandling: AnnenPartBehandling;
  behandlinger: BehandlingAppKontekst[];
  brukerManglerAdresse: boolean;
  historikkinnslag: Historikkinnslag[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"relasjonsRolleType",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}},{key:"aktørId",value:{name:"string",required:!0}},{key:"harIkkeRegistrertAdresse",value:{name:"boolean",required:!0}},{key:"harVergeIÅpenBehandling",value:{name:"boolean",required:!0}},{key:"sakSkalTilInfotrygd",value:{name:"boolean",required:!0}},{key:"behandlingTypeKanOpprettes",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!1}},{key:"fagsakMarkeringer",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fagsakMarkering: string;
  kortNavn?: string;
}`,signature:{properties:[{key:"fagsakMarkering",value:{name:"string",required:!0}},{key:"kortNavn",value:{name:"string",required:!1}}]}}],raw:"Saksmarkering[]",required:!1}},{key:"annenPart",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`,required:!1}},{key:"familiehendelse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}`,signature:{properties:[{key:"hendelseType",value:{name:"string",required:!0}},{key:"hendelseDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}>`,required:!1}},{key:"annenpartBehandling",value:{name:"signature",type:"object",raw:`{
  saksnummer: string;
  behandlingUuid: string;
  relasjonsRolleType: string;
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"relasjonsRolleType",value:{name:"string",required:!0}}]},required:!0}},{key:"behandlinger",value:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
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
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`,required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"string",required:!1}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
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
  dokumentId?: string;
  journalpostId?: string;
  tag: string;
  url?: string;
  utgått: boolean;
}`,signature:{properties:[{key:"dokumentId",value:{name:"string",required:!1}},{key:"journalpostId",value:{name:"string",required:!1}},{key:"tag",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}},{key:"utgått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  dokumentId?: string;
  journalpostId?: string;
  tag: string;
  url?: string;
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
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"string",required:!1}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
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
  harIkkeRegistrertAdresse: boolean;
  harVergeIÅpenBehandling: boolean;
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  bruker: Person;
  fagsakMarkeringer?: Saksmarkering[];
  annenPart?: Person;
  familiehendelse?: FagsakHendelse;
  annenpartBehandling: AnnenPartBehandling;
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
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
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
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`,required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"string",required:!1}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]},required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"string",required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
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
  };
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]},required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"string",required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},{name:"undefined"}]},name:"behandling"}],return:{name:"void"}}},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},hentOgSettBehandling:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Kc=({fagsakData:i,behandlingUuid:d,behandling:a,setBehandling:u,hentOgSettBehandling:g})=>{const f=We(Yi()),{innloggetBruker:h}=On(f.data),[q,j]=N.useState(),R=()=>j(void 0),E=i.getFagsak(),S=i.getBehandling(d),I=Vc(S,E);return h.kanVeilede?null:m.jsxs(m.Fragment,{children:[m.jsxs(er,{children:[m.jsx(Ye,{size:"small",as:er.Toggle,iconPosition:"right",variant:"secondary",icon:m.jsx(ab,{"aria-hidden":!0}),children:m.jsx(te,{id:"BehandlingMenuIndex.Behandlingsmeny"})}),m.jsx(er.Menu,{children:m.jsx(er.Menu.List,{children:Object.keys(I).filter(P=>!I[P].disabled).map(P=>m.jsx(er.Menu.List.Item,{onClick:()=>{j(P)},children:I[P].text},P))})})]}),q==="NY_BEHANDLING"&&m.jsx(Do,{fagsakData:i,behandlingUuid:d,lukkModal:R}),q==="ENDRE_FAGSAK_MARKERING"&&m.jsx(Ho,{saksnummer:E.saksnummer,fagsakMarkeringer:E.fagsakMarkeringer,hentOgSettBehandling:g,lukkModal:R}),q==="VERGE"&&S&&a&&m.jsx(Wo,{fagsak:E,behandlingAppKontekst:S,behandling:a,setBehandling:u,lukkModal:R,hentOgSettBehandling:g}),q==="ÅPNE_FOR_ENDRINGER"&&a&&m.jsx(Lo,{behandling:a,setBehandling:u,lukkModal:R}),q==="ENDRE_BEHANDLENDE_ENHET"&&a&&m.jsx(Uo,{behandling:a,hentOgSettBehandling:g,lukkModal:R}),q==="HENLEGG"&&S&&a&&m.jsx(Go,{behandlingAppKontekst:S,behandling:a,fagsakYtelseType:E.fagsakYtelseType,lukkModal:R}),q==="SETT_PÅ_VENT"&&a&&m.jsx(Co,{behandling:a,hentOgSettBehandling:g,lukkModal:R}),q==="TA_AV_VENT"&&a&&m.jsx($o,{behandling:a,setBehandling:u,lukkModal:R})]})},Vc=(i,d)=>{const a=i?i.behandlingPaaVent:!1,u=i==null?void 0:i.behandlingTillatteOperasjoner,g=u==null?void 0:u.vergeBehandlingsmeny,f=g===Zr.FJERN&&!!(i!=null&&i.uuid)&&!!(i!=null&&i.versjon),h=g===Zr.OPPRETT&&!!(i!=null&&i.uuid)&&!!(i!=null&&i.versjon);return{TA_AV_VENT:{disabled:!(u!=null&&u.behandlingKanGjenopptas),text:Uh()},SETT_PÅ_VENT:{disabled:!(u!=null&&u.behandlingKanSettesPaVent),text:Sc()},HENLEGG:{disabled:!(u!=null&&u.behandlingKanHenlegges),text:vc()},ENDRE_BEHANDLENDE_ENHET:{disabled:!(u!=null&&u.behandlingKanBytteEnhet),text:Ch()},ÅPNE_FOR_ENDRINGER:{disabled:!(u!=null&&u.behandlingKanOpnesForEndringer),text:Wh()},NY_BEHANDLING:{disabled:d.sakSkalTilInfotrygd,text:Ec()},ENDRE_FAGSAK_MARKERING:{disabled:d.sakSkalTilInfotrygd,text:Zh()},VERGE:{disabled:!(!a&&(h||f)),text:Lh(h)}}};Kc.__docgenInfo={description:"",methods:[],displayName:"BehandlingMenuIndex",props:{fagsakData:{required:!0,tsType:{name:"FagsakData"},description:""},behandlingUuid:{required:!1,tsType:{name:"string"},description:""},behandling:{required:!1,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]},required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"string",required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
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
  };
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
  type: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse: string | null;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]},required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"string",required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
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
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},{name:"undefined"}]},name:"behandling"}],return:{name:"void"}}},description:""},hentOgSettBehandling:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{aa as A,Kc as B,vo as F,Kh as P,ch as T,Mh as V,wr as a,Rh as b,wh as c,Xt as d,Ph as e,jh as f,dq as g,gq as h,po as i,Bh as j,yo as s,wb as u};
