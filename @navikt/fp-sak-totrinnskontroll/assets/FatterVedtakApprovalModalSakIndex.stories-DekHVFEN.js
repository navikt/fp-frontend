import{r as i,R as s,a as Le}from"./index-OjgoNOWw.js";import{c as B,B as Ee,a as He,u as Ge,b as ze,d as L,D as Ue,H as $e,e as Ye,f as D,F as We,M as Je,g as H,C as Xe,L as Ze,h as G,i as Qe,j as y,k as C,t as en,P as nn,m as tn,l as V}from"./nb_NO-PWZudM2n.js";import{r as rn}from"./index-mQqIOHEI.js";import"./v4-yQnnJER4.js";var x=function(){return x=Object.assign||function(n){for(var r,t=1,a=arguments.length;t<a;t++){r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])}return n},x.apply(this,arguments)};var Ae={exports:{}},T={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var te;function an(){if(te)return T;te=1;var e=s,n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(u,c,p){var g,v={},k=null,b=null;p!==void 0&&(k=""+p),c.key!==void 0&&(k=""+c.key),c.ref!==void 0&&(b=c.ref);for(g in c)t.call(c,g)&&!o.hasOwnProperty(g)&&(v[g]=c[g]);if(u&&u.defaultProps)for(g in c=u.defaultProps,c)v[g]===void 0&&(v[g]=c[g]);return{$$typeof:n,type:u,key:k,ref:b,props:v,_owner:a.current}}return T.Fragment=r,T.jsx=l,T.jsxs=l,T}Ae.exports=an();var on=Ae.exports,ln=i.createContext(void 0);function sn(){var e=i.useContext(ln);if(!e)throw new Error("useDayPicker must be used within a DayPickerProvider.");return e}i.createContext(void 0);i.forwardRef(function(e,n){var r=sn(),t=r.classNames,a=r.styles,o=[t.button_reset,t.button];e.className&&o.push(e.className);var l=o.join(" "),u=x(x({},a.button_reset),a.button);return e.style&&Object.assign(u,e.style),on.jsx("button",x({},e,{ref:n,type:"button",className:l,style:u}))});i.createContext(void 0);i.createContext(void 0);var h;(function(e){e.Outside="outside",e.Disabled="disabled",e.Selected="selected",e.Hidden="hidden",e.Today="today",e.RangeStart="range_start",e.RangeEnd="range_end",e.RangeMiddle="range_middle"})(h||(h={}));h.Selected;h.Disabled;h.Hidden;h.Today;h.RangeEnd;h.RangeMiddle;h.RangeStart;h.Outside;i.createContext(void 0);i.createContext(void 0);i.createContext(void 0);const dn=i.createContext(null);i.createContext({hasDropdown:!1,year:new Date,toYear:()=>null,disabled:[],onSelect:()=>null});function un(e){var n;return(e==null||(n=e.ownerDocument)==null?void 0:n.defaultView)||window}function gn(e){return e instanceof Element||e instanceof un(e).Element}var $=typeof document<"u"?i.useLayoutEffect:i.useEffect;let z=!1,cn=0;const re=()=>"floating-ui-"+cn++;function pn(){const[e,n]=i.useState(()=>z?re():void 0);return $(()=>{e==null&&n(re())},[]),i.useEffect(()=>{z||(z=!0)},[]),e}const mn=Le.useId,fn=mn||pn;function kn(e){return"data-floating-ui-"+e}const vn=i.createContext(null);function bn(e){let{id:n,root:r}=e===void 0?{}:e;const[t,a]=i.useState(null),o=fn(),l=yn(),u=i.useMemo(()=>({id:n,root:r,portalContext:l,uniqueId:o}),[n,r,l,o]),c=i.useRef();return $(()=>()=>{t==null||t.remove()},[t,u]),$(()=>{if(c.current===u)return;c.current=u;const{id:p,root:g,portalContext:v,uniqueId:k}=u,b=p?document.getElementById(p):null,F=kn("portal");if(b){const m=document.createElement("div");m.id=k,m.setAttribute(F,""),b.appendChild(m),a(m)}else{let m=g||(v==null?void 0:v.portalNode);m&&!gn(m)&&(m=m.current),m=m||document.body;let A=null;p&&(A=document.createElement("div"),A.id=p,m.appendChild(A));const w=document.createElement("div");w.id=k,w.setAttribute(F,""),m=A||m,m.appendChild(w),a(w)}},[u]),t}const yn=()=>i.useContext(vn),hn=i.createContext(void 0),En=()=>i.useContext(hn);var An=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};function wn(e,n){return`${e} returned \`undefined\`. Seems you forgot to wrap component within ${n}`}function _n(e={}){const{name:n,hookName:r="useContext",providerName:t="Provider",errorMessage:a,defaultValue:o}=e,l=i.createContext(o),u=i.forwardRef((p,g)=>{var{children:v}=p,k=An(p,["children"]);const b=s.useMemo(()=>k,Object.values(k));return s.createElement(l.Provider,{value:g?Object.assign(Object.assign({},b),{ref:g}):b},v)});function c(p=!0){var g;const v=i.useContext(l);if(!v&&p){const k=new Error(a??wn(r,t));throw k.name="ContextError",(g=Error.captureStackTrace)===null||g===void 0||g.call(Error,k,c),k}return v}return l.displayName=n,[u,c]}const[jn,we]=_n({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"});var Tn=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const On=i.forwardRef((e,n)=>{var{className:r}=e,t=Tn(e,["className"]);return s.createElement("div",Object.assign({},t,{ref:n,className:B("navds-modal__body",r)}))});var qn=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Mn=i.forwardRef((e,n)=>{var{className:r}=e,t=qn(e,["className"]);return s.createElement("div",Object.assign({},t,{ref:n,className:B("navds-modal__footer",r)}))});var Sn=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const _e=i.forwardRef((e,n)=>{var{children:r,className:t,closeButton:a=!0}=e,o=Sn(e,["children","className","closeButton"]);const l=we();return s.createElement("div",Object.assign({},o,{ref:n,className:B("navds-modal__header",t)}),l.closeHandler&&a&&s.createElement(Ee,{type:"button",className:"navds-modal__button",size:"small",variant:"tertiary-neutral",onClick:l.closeHandler,icon:s.createElement(He,{title:"Lukk"})}),r)}),ae=({clientX:e,clientY:n},{left:r,top:t,right:a,bottom:o})=>!(e<r||n<t||e>a||n>o);function xn(e,n,r){if(!(n&&n.closeButton===!1))return r?()=>{var t;return r()!==!1&&((t=e.current)===null||t===void 0?void 0:t.close())}:()=>{var t;return(t=e.current)===null||t===void 0?void 0:t.close()}}const N="navds-modal__document-body";function Rn(e,n,r){s.useEffect(()=>{if(r||!e.current||!n)return;e.current.open&&document.body.classList.add(N);const t=new MutationObserver(()=>{var a;!((a=e.current)===null||a===void 0)&&a.open?document.body.classList.add(N):document.body.classList.remove(N)});return t.observe(e.current,{attributes:!0,attributeFilter:["open"]}),()=>{t.disconnect(),document.body.classList.remove(N)}},[e,n,r])}const R=typeof window<"u"&&(window.HTMLDialogElement===void 0||navigator.userAgent.includes("jsdom"));function je(e,n){var r="on"+n.type.toLowerCase();return typeof e[r]=="function"&&e[r](n),e.dispatchEvent(n)}function P(e){for(;e;){if(e.localName==="dialog")return e;e.parentElement?e=e.parentElement:e.parentNode?e=e.parentNode.host:e=null}return null}function Te(e){for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;e&&e.blur&&e!==document.body&&e.blur()}function Pn(e,n){for(var r=0;r<e.length;++r)if(e[r]===n)return!0;return!1}function U(e){return!e||!e.hasAttribute("method")?!1:e.getAttribute("method").toLowerCase()==="dialog"}function Oe(e){var n=["button","input","keygen","select","textarea"],r=n.map(function(l){return l+":not([disabled])"});r.push('[tabindex]:not([disabled]):not([tabindex=""])');var t=e.querySelector(r.join(", "));if(!t&&"attachShadow"in Element.prototype)for(var a=e.querySelectorAll("*"),o=0;o<a.length&&!(a[o].tagName&&a[o].shadowRoot&&(t=Oe(a[o].shadowRoot),t));o++);return t}function oe(e){return e.isConnected||document.body.contains(e)}function qe(e){if(e.submitter)return e.submitter;var n=e.target;if(!(n instanceof HTMLFormElement))return null;var r=d.formSubmitter;if(!r){var t=e.target,a="getRootNode"in t&&t.getRootNode()||document;r=a.activeElement}return!r||r.form!==n?null:r}function Dn(e){if(!e.defaultPrevented){var n=e.target,r=d.imagemapUseValue,t=qe(e);r===null&&t&&(r=t.value);var a=P(n);if(a){var o=t&&t.getAttribute("formmethod")||n.getAttribute("method");o==="dialog"&&(e.preventDefault(),r!=null?a.close(r):a.close())}}}function Me(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),e.addEventListener("submit",Dn,!1),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){var n=new MutationObserver(this.maybeHideModal.bind(this));n.observe(e,{attributes:!0,attributeFilter:["open"]})}else{var r=!1,t=(function(){r?this.downgradeModal():this.maybeHideModal(),r=!1}).bind(this),a,o=function(l){if(l.target===e){var u="DOMNodeRemoved";r|=l.type.substr(0,u.length)===u,window.clearTimeout(a),a=window.setTimeout(t,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(l){e.addEventListener(l,o)})}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}Me.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&oe(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),d.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropMouseEvent_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var n=document.createElement("div");this.dialog_.insertBefore(n,this.dialog_.firstChild),n.tabIndex=-1,n.focus(),this.dialog_.removeChild(n)}var r=document.createEvent("MouseEvents");r.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(r),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),e||(e=Oe(this.dialog_)),Te(document.activeElement),e&&e.focus()},updateZIndex:function(e,n){if(e<n)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=n},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!oe(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!d.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");this.setOpen(!0),this.openAsModal_=!0,d.needsCentering(this.dialog_)?(d.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),e!==void 0&&(this.dialog_.returnValue=e);var n=new window.CustomEvent("close",{bubbles:!1,cancelable:!1});je(this.dialog_,n)}};var d={};d.reposition=function(e){var n=document.body.scrollTop||document.documentElement.scrollTop,r=n+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(n,r)+"px"};d.isInlinePositionSetByStylesheet=function(e){for(var n=0;n<document.styleSheets.length;++n){var r=document.styleSheets[n],t=null;try{t=r.cssRules}catch{}if(t)for(var a=0;a<t.length;++a){var o=t[a],l=null;try{l=document.querySelectorAll(o.selectorText)}catch{}if(!(!l||!Pn(l,e))){var u=o.style.getPropertyValue("top"),c=o.style.getPropertyValue("bottom");if(u&&u!=="auto"||c&&c!=="auto")return!0}}}return!1};d.needsCentering=function(e){var n=window.getComputedStyle(e);return n.position!=="absolute"||e.style.top!=="auto"&&e.style.top!==""||e.style.bottom!=="auto"&&e.style.bottom!==""?!1:!d.isInlinePositionSetByStylesheet(e)};d.forceRegisterDialog=function(e){if(e.showModal&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),e.localName!=="dialog")throw new Error("Failed to register dialog: The element is not a dialog.");new Me(e)};d.registerDialog=function(e){e.showModal||d.forceRegisterDialog(e)};d.DialogManager=function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",(function(n){this.forwardTab_=void 0,n.stopPropagation(),e([])}).bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(n){var r=[];n.forEach(function(t){for(var a=0,o;o=t.removedNodes[a];++a){if(o instanceof Element)o.localName==="dialog"&&r.push(o);else continue;r=r.concat(o.querySelectorAll("dialog"))}}),r.length&&e(r)}))};d.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})};d.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()};d.DialogManager.prototype.updateStacking=function(){for(var e=this.zIndexHigh_,n=0,r;r=this.pendingDialogStack[n];++n)r.updateZIndex(--e,--e),n===0&&(this.overlay.style.zIndex=--e);var t=this.pendingDialogStack[0];if(t){var a=t.dialog.parentNode||document.body;a.appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)};d.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=P(e);){for(var n=0,r;r=this.pendingDialogStack[n];++n)if(r.dialog===e)return n===0;e=e.parentElement}return!1};d.DialogManager.prototype.handleFocus_=function(e){var n=e.composedPath?e.composedPath()[0]:e.target;if(!this.containedByTopDialog_(n)&&document.activeElement!==document.documentElement&&(e.preventDefault(),e.stopPropagation(),Te(n),this.forwardTab_!==void 0)){var r=this.pendingDialogStack[0],t=r.dialog,a=t.compareDocumentPosition(n);return a&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?r.focus_():n!==document.documentElement&&document.documentElement.focus()),!1}};d.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,e.keyCode===27){e.preventDefault(),e.stopPropagation();var n=new window.CustomEvent("cancel",{bubbles:!1,cancelable:!0}),r=this.pendingDialogStack[0];r&&je(r.dialog,n)&&r.dialog.close()}else e.keyCode===9&&(this.forwardTab_=!e.shiftKey)};d.DialogManager.prototype.checkDOM_=function(e){var n=this.pendingDialogStack.slice();n.forEach(function(r){e.indexOf(r.dialog)!==-1?r.downgradeModal():r.maybeHideModal()})};d.DialogManager.prototype.pushDialog=function(e){var n=(this.zIndexHigh_-this.zIndexLow_)/2-1;return this.pendingDialogStack.length>=n?!1:(this.pendingDialogStack.unshift(e)===1&&this.blockDocument(),this.updateStacking(),!0)};d.DialogManager.prototype.removeDialog=function(e){var n=this.pendingDialogStack.indexOf(e);n!==-1&&(this.pendingDialogStack.splice(n,1),this.pendingDialogStack.length===0&&this.unblockDocument(),this.updateStacking())};R&&(d.dm=new d.DialogManager,d.formSubmitter=null,d.imagemapUseValue=null);if(R){var ie=document.createElement("form");if(ie.setAttribute("method","dialog"),ie.method!=="dialog"){var j=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(j){var Cn=j.get;j.get=function(){return U(this)?"dialog":Cn.call(this)};var Fn=j.set;j.set=function(e){return typeof e=="string"&&e.toLowerCase()==="dialog"?this.setAttribute("method",e):Fn.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",j)}}document.addEventListener("click",function(e){if(d.formSubmitter=null,d.imagemapUseValue=null,!e.defaultPrevented){var n=e.target;if("composedPath"in e){var r=e.composedPath();n=r.shift()||n}if(!(!n||!U(n.form))){var t=n.type==="submit"&&["button","input"].indexOf(n.localName)>-1;if(!t){if(!(n.localName==="input"&&n.type==="image"))return;d.imagemapUseValue=e.offsetX+","+e.offsetY}var a=P(n);a&&(d.formSubmitter=n)}}},!1),document.addEventListener("submit",function(e){var n=e.target,r=P(n);if(!r){var t=qe(e),a=t&&t.getAttribute("formmethod")||n.getAttribute("method");a==="dialog"&&e.preventDefault()}});var Nn=HTMLFormElement.prototype.submit,Bn=function(){if(!U(this))return Nn.call(this);var e=P(this);e&&e.close()};HTMLFormElement.prototype.submit=Bn}var Vn=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const I=i.forwardRef((e,n)=>{var r,t,{header:a,children:o,open:l,onBeforeClose:u,onCancel:c,closeOnBackdropClick:p,width:g,portal:v,className:k,"aria-labelledby":b,style:F,onClick:m,onMouseDown:A}=e,w=Vn(e,["header","children","open","onBeforeClose","onCancel","closeOnBackdropClick","width","portal","className","aria-labelledby","style","onClick","onMouseDown"]);const f=i.useRef(null),Pe=Ge(f,n),W=ze(),De=(r=En())===null||r===void 0?void 0:r.rootElement,E=bn({root:De}),Ce=i.useContext(dn),J=we(!1)!==void 0;J&&!Ce&&console.error("Modals should not be nested"),i.useEffect(()=>{R&&f.current&&E&&d.registerDialog(f.current),f.current&&E&&(f.current.autofocus=!0)},[f,E]),i.useEffect(()=>{f.current&&E&&l!==void 0&&(l&&!f.current.open?f.current.showModal():!l&&f.current.open&&f.current.close())},[f,E,l]),Rn(f,E,J);const X=typeof g=="string"&&["small","medium"].includes(g),Fe=B("navds-modal",k,{"navds-modal--polyfilled":R,"navds-modal--autowidth":!g,[`navds-modal--${g}`]:X}),Ne=Object.assign(Object.assign({},F),X?{}:{width:g}),Z=i.useRef({clientX:0,clientY:0}),Be=_=>{Z.current=_},Q=p&&!R,Ve=_=>{if(_.target!==f.current)return;const ne=f.current.getBoundingClientRect();ae(Z.current,ne)||ae(_,ne)||u!==void 0&&u()===!1||f.current.close()},Ie=_=>{u&&u()===!1&&_.preventDefault()},Ke=!b&&!w["aria-label"]&&a?W:b,ee=s.createElement("dialog",Object.assign({},w,{ref:Pe,className:Fe,style:Ne,onCancel:L(c,Ie),onClick:Q?L(m,Ve):m,onMouseDown:Q?L(A,Be):A,"aria-labelledby":Ke}),s.createElement(jn,{closeHandler:xn(f,a,u),ref:f},a&&s.createElement(_e,null,a.label&&s.createElement(Ue,{className:"navds-modal__label"},a.label),s.createElement($e,{size:(t=a.size)!==null&&t!==void 0?t:"medium",level:"1",id:W},s.createElement("span",{className:"navds-modal__header-icon"},a.icon),a.heading)),o));return v?E?rn.createPortal(ee,E):null:ee});I.Header=_e;I.Body=On;I.Footer=Mn;const le=I,In="_button_1tsoz_1",Kn="_image_1tsoz_6",se={button:In,image:Kn},Ln=(e,n,r,t)=>e===y.TILBAKEKREVING?"FatterVedtakApprovalModal.Tilbakekreving":e===y.TILBAKEKREVING_REVURDERING?"FatterVedtakApprovalModal.TilbakekrevingRevurdering":e===y.KLAGE?"FatterVedtakApprovalModal.ModalDescriptionKlage":e===y.ANKE?"FatterVedtakApprovalModal.ModalDescriptionAnke":t?"FatterVedtakApprovalModal.UendretUtfall":n&&n.type===D.AVSLATT?"FatterVedtakApprovalModal.IkkeInnvilget":r?"FatterVedtakApprovalModal.OpphortVedtak":"FatterVedtakApprovalModal.InnvilgetVedtak",Hn=(e,n)=>n===y.KLAGE?"FatterVedtakApprovalModal.ModalDescriptionKlage":n===y.ANKE?"FatterVedtakApprovalModal.ModalDescriptionAnke":e?"FatterVedtakApprovalModal.ModalDescriptionOpphort":"FatterVedtakApprovalModal.ModalDescriptionApproval",Y=e=>e===C.FATTER_VEDTAK,Gn=(e,n,r,t,a,o)=>e?Y(n)?Ln(r,t,a,o):"":"FatterVedtakApprovalModal.VedtakReturneresTilSaksbehandler",zn=e=>Y(e)?"FatterVedtakApprovalModal.Innvilget":"",Un=(e,n,r)=>Y(e)?Hn(r,n):"FatterVedtakApprovalModal.ModalDescription",Se=({closeEvent:e,allAksjonspunktApproved:n,behandlingStatusKode:r,behandlingTypeKode:t,behandlingsresultat:a,harSammeResultatSomOriginalBehandling:o})=>{const l=Ye(),u=!!a&&a.type===D.OPPHOR,c=Gn(n,r,t,a,u,o),p=zn(r),g=Un(r,t,u);return s.createElement(le,{width:"small",open:!0,"aria-label":l.formatMessage({id:g}),onClose:e},s.createElement(le.Body,null,s.createElement(We,null,s.createElement(Je,null,s.createElement(H,null,s.createElement(Xe,{className:se.image,title:l.formatMessage({id:p})})),s.createElement(H,null,s.createElement(Ze,{size:"small"},s.createElement(G,{id:c})),s.createElement(Qe,{size:"small"},s.createElement(G,{id:"FatterVedtakApprovalModal.GoToSearchPage"}))),s.createElement(H,{className:se.button},s.createElement(Ee,{size:"small",variant:"primary",onClick:e,autoFocus:!0,type:"button"},s.createElement(G,{id:"FatterVedtakApprovalModal.Ok"})))))))};Se.__docgenInfo={description:`FatterVedtakApprovalModal

Denne modalen vises en lightbox etter at en beslutter har godkjent alle aksjonspunkter
med totrinnskontroll. Ved å trykke på knapp blir beslutter tatt tilbake til sokesiden.`,methods:[],displayName:"FatterVedtakApprovalModal",props:{closeEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},allAksjonspunktApproved:{required:!0,tsType:{name:"boolean"},description:""},behandlingsresultat:{required:!1,tsType:{name:"Readonly",raw:"Behandling['behandlingsresultat']"},description:""},behandlingStatusKode:{required:!0,tsType:{name:"string"},description:""},behandlingTypeKode:{required:!0,tsType:{name:"string"},description:""},harSammeResultatSomOriginalBehandling:{required:!1,tsType:{name:"boolean"},description:""}}};const $n=en(tn),xe=({behandling:e,closeEvent:n,allAksjonspunktApproved:r})=>{var t;return s.createElement(nn,{value:$n},s.createElement(Se,{closeEvent:n,allAksjonspunktApproved:r,behandlingsresultat:e.behandlingsresultat,behandlingStatusKode:e.status,behandlingTypeKode:e.type,harSammeResultatSomOriginalBehandling:((t=e.behandlingsresultat)==null?void 0:t.erRevurderingMedUendretUtfall)||!1}))},Re=xe;xe.__docgenInfo={description:"",methods:[],displayName:"FatterVedtakTotrinnskontrollModalSakIndex",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
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
  harVerge?: boolean;
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
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
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
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"any",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}[]`,required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"harVerge",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
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
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
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
  harVerge?: boolean;
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
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse?: string;
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
}>`}]},description:""},closeEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},allAksjonspunktApproved:{required:!0,tsType:{name:"boolean"},description:""}}};const Zn={title:"sak/sak-totrinnskontroll-fatter-vedtak-modal",component:Re},K=({closeEvent:e,behandling:n,allAksjonspunktApproved:r})=>s.createElement(Re,{behandling:n,closeEvent:e,allAksjonspunktApproved:r}),O=K.bind({});O.args={closeEvent:V("button-click"),behandling:{uuid:"1",status:C.FATTER_VEDTAK,type:y.FORSTEGANGSSOKNAD},allAksjonspunktApproved:!0};const q=K.bind({});q.args={closeEvent:V("button-click"),behandling:{uuid:"1",status:C.FATTER_VEDTAK,type:y.FORSTEGANGSSOKNAD,behandlingsresultat:{type:D.OPPHOR}},allAksjonspunktApproved:!0};const M=K.bind({});M.args={closeEvent:V("button-click"),behandling:{uuid:"1",status:C.FATTER_VEDTAK,type:y.KLAGE,behandlingsresultat:{type:D.OPPHOR}},allAksjonspunktApproved:!0};const S=K.bind({});S.args={closeEvent:V("button-click"),behandling:{uuid:"1",status:C.FATTER_VEDTAK,type:y.FORSTEGANGSSOKNAD,behandlingsresultat:{type:D.OPPHOR}},allAksjonspunktApproved:!1};var de,ue,ge;O.parameters={...O.parameters,docs:{...(de=O.parameters)==null?void 0:de.docs,source:{originalSource:`({
  closeEvent,
  behandling,
  allAksjonspunktApproved
}) => <FatterVedtakTotrinnskontrollModalSakIndex behandling={behandling} closeEvent={closeEvent} allAksjonspunktApproved={allAksjonspunktApproved} />`,...(ge=(ue=O.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};var ce,pe,me;q.parameters={...q.parameters,docs:{...(ce=q.parameters)==null?void 0:ce.docs,source:{originalSource:`({
  closeEvent,
  behandling,
  allAksjonspunktApproved
}) => <FatterVedtakTotrinnskontrollModalSakIndex behandling={behandling} closeEvent={closeEvent} allAksjonspunktApproved={allAksjonspunktApproved} />`,...(me=(pe=q.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var fe,ke,ve;M.parameters={...M.parameters,docs:{...(fe=M.parameters)==null?void 0:fe.docs,source:{originalSource:`({
  closeEvent,
  behandling,
  allAksjonspunktApproved
}) => <FatterVedtakTotrinnskontrollModalSakIndex behandling={behandling} closeEvent={closeEvent} allAksjonspunktApproved={allAksjonspunktApproved} />`,...(ve=(ke=M.parameters)==null?void 0:ke.docs)==null?void 0:ve.source}}};var be,ye,he;S.parameters={...S.parameters,docs:{...(be=S.parameters)==null?void 0:be.docs,source:{originalSource:`({
  closeEvent,
  behandling,
  allAksjonspunktApproved
}) => <FatterVedtakTotrinnskontrollModalSakIndex behandling={behandling} closeEvent={closeEvent} allAksjonspunktApproved={allAksjonspunktApproved} />`,...(he=(ye=S.parameters)==null?void 0:ye.docs)==null?void 0:he.source}}};const Qn=["EtterFatterVedtakOgGodkjent","EtterGodkjenning","EtterGodkjenningAvKlage","EtterTilbakesendingTilSaksbehandler"];export{O as EtterFatterVedtakOgGodkjent,q as EtterGodkjenning,M as EtterGodkjenningAvKlage,S as EtterTilbakesendingTilSaksbehandler,Qn as __namedExportsOrder,Zn as default};
