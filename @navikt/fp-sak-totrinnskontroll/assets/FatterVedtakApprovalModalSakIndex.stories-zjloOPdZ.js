import{j as f}from"./dayjs.min-D0F5fy79.js";import{c as I,B as we,S as Ge,u as ze,a as Ue,b as H,D as $e,H as Ye,d as We,e as N,W as Xe,f as Je,L as G,g as Ze,h as Qe,M as z,i as en,j as h,k as V,t as nn,P as tn,m as rn,l as L}from"./nb_NO-B6YaHLje.js";import{r as i,R as v,a as an}from"./index-CTjT7uj6.js";import{r as on}from"./index-CYM-y3Gt.js";import"./v4-CQkTLCs1.js";var D=function(){return D=Object.assign||function(n){for(var r,t=1,a=arguments.length;t<a;t++){r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])}return n},D.apply(this,arguments)};var je={exports:{}},q={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ae;function sn(){if(ae)return q;ae=1;var e=v,n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function s(d,g,p){var u,b={},k=null,y=null;p!==void 0&&(k=""+p),g.key!==void 0&&(k=""+g.key),g.ref!==void 0&&(y=g.ref);for(u in g)t.call(g,u)&&!o.hasOwnProperty(u)&&(b[u]=g[u]);if(d&&d.defaultProps)for(u in g=d.defaultProps,g)b[u]===void 0&&(b[u]=g[u]);return{$$typeof:n,type:d,key:k,ref:y,props:b,_owner:a.current}}return q.Fragment=r,q.jsx=s,q.jsxs=s,q}je.exports=sn();var ln=je.exports,dn=i.createContext(void 0);function un(){var e=i.useContext(dn);if(!e)throw new Error("useDayPicker must be used within a DayPickerProvider.");return e}i.createContext(void 0);i.forwardRef(function(e,n){var r=un(),t=r.classNames,a=r.styles,o=[t.button_reset,t.button];e.className&&o.push(e.className);var s=o.join(" "),d=D(D({},a.button_reset),a.button);return e.style&&Object.assign(d,e.style),ln.jsx("button",D({},e,{ref:n,type:"button",className:s,style:d}))});i.createContext(void 0);i.createContext(void 0);var E;(function(e){e.Outside="outside",e.Disabled="disabled",e.Selected="selected",e.Hidden="hidden",e.Today="today",e.RangeStart="range_start",e.RangeEnd="range_end",e.RangeMiddle="range_middle"})(E||(E={}));E.Selected;E.Disabled;E.Hidden;E.Today;E.RangeEnd;E.RangeMiddle;E.RangeStart;E.Outside;i.createContext(void 0);i.createContext(void 0);i.createContext(void 0);const gn=i.createContext(null);i.createContext({hasDropdown:!1,year:new Date,toYear:()=>null,disabled:[],onSelect:()=>null});function cn(e){var n;return(e==null||(n=e.ownerDocument)==null?void 0:n.defaultView)||window}function pn(e){return e instanceof Element||e instanceof cn(e).Element}var Y=typeof document<"u"?i.useLayoutEffect:i.useEffect;let U=!1,mn=0;const oe=()=>"floating-ui-"+mn++;function fn(){const[e,n]=i.useState(()=>U?oe():void 0);return Y(()=>{e==null&&n(oe())},[]),i.useEffect(()=>{U||(U=!0)},[]),e}const kn=an.useId,vn=kn||fn;function bn(e){return"data-floating-ui-"+e}const yn=i.createContext(null);function hn(e){let{id:n,root:r}=e===void 0?{}:e;const[t,a]=i.useState(null),o=vn(),s=En(),d=i.useMemo(()=>({id:n,root:r,portalContext:s,uniqueId:o}),[n,r,s,o]),g=i.useRef();return Y(()=>()=>{t==null||t.remove()},[t,d]),Y(()=>{if(g.current===d)return;g.current=d;const{id:p,root:u,portalContext:b,uniqueId:k}=d,y=p?document.getElementById(p):null,x=bn("portal");if(y){const m=document.createElement("div");m.id=k,m.setAttribute(x,""),y.appendChild(m),a(m)}else{let m=u||(b==null?void 0:b.portalNode);m&&!pn(m)&&(m=m.current),m=m||document.body;let w=null;p&&(w=document.createElement("div"),w.id=p,m.appendChild(w));const j=document.createElement("div");j.id=k,j.setAttribute(x,""),m=w||m,m.appendChild(j),a(j)}},[d]),t}const En=()=>i.useContext(yn),An=i.createContext(void 0),wn=()=>i.useContext(An);var jn=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};function _n(e,n){return`${e} returned \`undefined\`. Seems you forgot to wrap component within ${n}`}function Tn(e={}){const{name:n,hookName:r="useContext",providerName:t="Provider",errorMessage:a,defaultValue:o}=e,s=i.createContext(o),d=i.forwardRef((p,u)=>{var{children:b}=p,k=jn(p,["children"]);const y=v.useMemo(()=>k,Object.values(k));return v.createElement(s.Provider,{value:u?Object.assign(Object.assign({},y),{ref:u}):y},b)});function g(p=!0){var u;const b=i.useContext(s);if(!b&&p){const k=new Error(a??_n(r,t));throw k.name="ContextError",(u=Error.captureStackTrace)===null||u===void 0||u.call(Error,k,g),k}return b}return s.displayName=n,[d,g]}const[On,_e]=Tn({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"});var xn=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const qn=i.forwardRef((e,n)=>{var{className:r}=e,t=xn(e,["className"]);return v.createElement("div",Object.assign({},t,{ref:n,className:I("navds-modal__body",r)}))});var Mn=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Sn=i.forwardRef((e,n)=>{var{className:r}=e,t=Mn(e,["className"]);return v.createElement("div",Object.assign({},t,{ref:n,className:I("navds-modal__footer",r)}))});var Rn=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Te=i.forwardRef((e,n)=>{var{children:r,className:t,closeButton:a=!0}=e,o=Rn(e,["children","className","closeButton"]);const s=_e();return v.createElement("div",Object.assign({},o,{ref:n,className:I("navds-modal__header",t)}),s.closeHandler&&a&&v.createElement(we,{type:"button",className:"navds-modal__button",size:"small",variant:"tertiary-neutral",onClick:s.closeHandler,icon:v.createElement(Ge,{title:"Lukk"})}),r)}),ie=({clientX:e,clientY:n},{left:r,top:t,right:a,bottom:o})=>!(e<r||n<t||e>a||n>o);function Pn(e,n,r){if(!(n&&n.closeButton===!1))return r?()=>{var t;return r()!==!1&&((t=e.current)===null||t===void 0?void 0:t.close())}:()=>{var t;return(t=e.current)===null||t===void 0?void 0:t.close()}}const B="navds-modal__document-body";function Dn(e,n,r){v.useEffect(()=>{if(r||!e.current||!n)return;e.current.open&&document.body.classList.add(B);const t=new MutationObserver(()=>{var a;!((a=e.current)===null||a===void 0)&&a.open?document.body.classList.add(B):document.body.classList.remove(B)});return t.observe(e.current,{attributes:!0,attributeFilter:["open"]}),()=>{t.disconnect(),document.body.classList.remove(B)}},[e,n,r])}const O=typeof window<"u"&&(window.HTMLDialogElement===void 0||navigator.userAgent.includes("jsdom"));function Oe(e,n){var r="on"+n.type.toLowerCase();return typeof e[r]=="function"&&e[r](n),e.dispatchEvent(n)}function C(e){for(;e;){if(e.localName==="dialog")return e;e.parentElement?e=e.parentElement:e.parentNode?e=e.parentNode.host:e=null}return null}function xe(e){for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;e&&e.blur&&e!==document.body&&e.blur()}function Cn(e,n){for(var r=0;r<e.length;++r)if(e[r]===n)return!0;return!1}function $(e){return!e||!e.hasAttribute("method")?!1:e.getAttribute("method").toLowerCase()==="dialog"}function qe(e){var n=["button","input","keygen","select","textarea"],r=n.map(function(s){return s+":not([disabled])"});r.push('[tabindex]:not([disabled]):not([tabindex=""])');var t=e.querySelector(r.join(", "));if(!t&&"attachShadow"in Element.prototype)for(var a=e.querySelectorAll("*"),o=0;o<a.length&&!(a[o].tagName&&a[o].shadowRoot&&(t=qe(a[o].shadowRoot),t));o++);return t}function se(e){return e.isConnected||document.body.contains(e)}function Me(e){if(e.submitter)return e.submitter;var n=e.target;if(!(n instanceof HTMLFormElement))return null;var r=l.formSubmitter;if(!r){var t=e.target,a="getRootNode"in t&&t.getRootNode()||document;r=a.activeElement}return!r||r.form!==n?null:r}function Fn(e){if(!e.defaultPrevented){var n=e.target,r=l.imagemapUseValue,t=Me(e);r===null&&t&&(r=t.value);var a=C(n);if(a){var o=t&&t.getAttribute("formmethod")||n.getAttribute("method");o==="dialog"&&(e.preventDefault(),r!=null?a.close(r):a.close())}}}function Se(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),e.addEventListener("submit",Fn,!1),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){var n=new MutationObserver(this.maybeHideModal.bind(this));n.observe(e,{attributes:!0,attributeFilter:["open"]})}else{var r=!1,t=(function(){r?this.downgradeModal():this.maybeHideModal(),r=!1}).bind(this),a,o=function(s){if(s.target===e){var d="DOMNodeRemoved";r|=s.type.substr(0,d.length)===d,window.clearTimeout(a),a=window.setTimeout(t,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(s){e.addEventListener(s,o)})}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}Se.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&se(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),l.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropMouseEvent_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var n=document.createElement("div");this.dialog_.insertBefore(n,this.dialog_.firstChild),n.tabIndex=-1,n.focus(),this.dialog_.removeChild(n)}var r=document.createEvent("MouseEvents");r.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(r),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),e||(e=qe(this.dialog_)),xe(document.activeElement),e&&e.focus()},updateZIndex:function(e,n){if(e<n)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=n},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!se(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!l.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");this.setOpen(!0),this.openAsModal_=!0,l.needsCentering(this.dialog_)?(l.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),e!==void 0&&(this.dialog_.returnValue=e);var n=new window.CustomEvent("close",{bubbles:!1,cancelable:!1});Oe(this.dialog_,n)}};var l={};l.reposition=function(e){var n=document.body.scrollTop||document.documentElement.scrollTop,r=n+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(n,r)+"px"};l.isInlinePositionSetByStylesheet=function(e){for(var n=0;n<document.styleSheets.length;++n){var r=document.styleSheets[n],t=null;try{t=r.cssRules}catch{}if(t)for(var a=0;a<t.length;++a){var o=t[a],s=null;try{s=document.querySelectorAll(o.selectorText)}catch{}if(!(!s||!Cn(s,e))){var d=o.style.getPropertyValue("top"),g=o.style.getPropertyValue("bottom");if(d&&d!=="auto"||g&&g!=="auto")return!0}}}return!1};l.needsCentering=function(e){var n=window.getComputedStyle(e);return n.position!=="absolute"||e.style.top!=="auto"&&e.style.top!==""||e.style.bottom!=="auto"&&e.style.bottom!==""?!1:!l.isInlinePositionSetByStylesheet(e)};l.forceRegisterDialog=function(e){if(e.showModal&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),e.localName!=="dialog")throw new Error("Failed to register dialog: The element is not a dialog.");new Se(e)};l.registerDialog=function(e){e.showModal||l.forceRegisterDialog(e)};l.DialogManager=function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",(function(n){this.forwardTab_=void 0,n.stopPropagation(),e([])}).bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(n){var r=[];n.forEach(function(t){for(var a=0,o;o=t.removedNodes[a];++a)o instanceof Element&&(o.localName==="dialog"&&r.push(o),r=r.concat(o.querySelectorAll("dialog")))}),r.length&&e(r)}))};l.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})};l.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()};l.DialogManager.prototype.updateStacking=function(){for(var e=this.zIndexHigh_,n=0,r;r=this.pendingDialogStack[n];++n)r.updateZIndex(--e,--e),n===0&&(this.overlay.style.zIndex=--e);var t=this.pendingDialogStack[0];if(t){var a=t.dialog.parentNode||document.body;a.appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)};l.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=C(e);){for(var n=0,r;r=this.pendingDialogStack[n];++n)if(r.dialog===e)return n===0;e=e.parentElement}return!1};l.DialogManager.prototype.handleFocus_=function(e){var n=e.composedPath?e.composedPath()[0]:e.target;if(!this.containedByTopDialog_(n)&&document.activeElement!==document.documentElement&&(e.preventDefault(),e.stopPropagation(),xe(n),this.forwardTab_!==void 0)){var r=this.pendingDialogStack[0],t=r.dialog,a=t.compareDocumentPosition(n);return a&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?r.focus_():n!==document.documentElement&&document.documentElement.focus()),!1}};l.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,e.keyCode===27){e.preventDefault(),e.stopPropagation();var n=new window.CustomEvent("cancel",{bubbles:!1,cancelable:!0}),r=this.pendingDialogStack[0];r&&Oe(r.dialog,n)&&r.dialog.close()}else e.keyCode===9&&(this.forwardTab_=!e.shiftKey)};l.DialogManager.prototype.checkDOM_=function(e){var n=this.pendingDialogStack.slice();n.forEach(function(r){e.indexOf(r.dialog)!==-1?r.downgradeModal():r.maybeHideModal()})};l.DialogManager.prototype.pushDialog=function(e){var n=(this.zIndexHigh_-this.zIndexLow_)/2-1;return this.pendingDialogStack.length>=n?!1:(this.pendingDialogStack.unshift(e)===1&&this.blockDocument(),this.updateStacking(),!0)};l.DialogManager.prototype.removeDialog=function(e){var n=this.pendingDialogStack.indexOf(e);n!==-1&&(this.pendingDialogStack.splice(n,1),this.pendingDialogStack.length===0&&this.unblockDocument(),this.updateStacking())};O&&(l.dm=new l.DialogManager,l.formSubmitter=null,l.imagemapUseValue=null);if(O){var le=document.createElement("form");if(le.setAttribute("method","dialog"),le.method!=="dialog"){var T=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(T){var Nn=T.get;T.get=function(){return $(this)?"dialog":Nn.call(this)};var Vn=T.set;T.set=function(e){return typeof e=="string"&&e.toLowerCase()==="dialog"?this.setAttribute("method",e):Vn.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",T)}}document.addEventListener("click",function(e){if(l.formSubmitter=null,l.imagemapUseValue=null,!e.defaultPrevented){var n=e.target;if("composedPath"in e){var r=e.composedPath();n=r.shift()||n}if(!(!n||!$(n.form))){var t=n.type==="submit"&&["button","input"].indexOf(n.localName)>-1;if(!t){if(!(n.localName==="input"&&n.type==="image"))return;l.imagemapUseValue=e.offsetX+","+e.offsetY}var a=C(n);a&&(l.formSubmitter=n)}}},!1),document.addEventListener("submit",function(e){var n=e.target,r=C(n);if(!r){var t=Me(e),a=t&&t.getAttribute("formmethod")||n.getAttribute("method");a==="dialog"&&e.preventDefault()}});var Bn=HTMLFormElement.prototype.submit,In=function(){if(!$(this))return Bn.call(this);var e=C(this);e&&e.close()};HTMLFormElement.prototype.submit=In}var Ln=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const de="navds-modal--polyfilled",F=i.forwardRef((e,n)=>{var r,t,{header:a,children:o,open:s,onBeforeClose:d,onCancel:g,closeOnBackdropClick:p,width:u,placement:b,portal:k,className:y,"aria-labelledby":x,style:m,onClick:w,onMouseDown:j}=e,X=Ln(e,["header","children","open","onBeforeClose","onCancel","closeOnBackdropClick","width","placement","portal","className","aria-labelledby","style","onClick","onMouseDown"]);const c=i.useRef(null),Ce=ze(c,n),J=Ue(),Fe=(r=wn())===null||r===void 0?void 0:r.rootElement,A=hn({root:Fe}),Ne=i.useContext(gn),Z=_e(!1)!==void 0;Z&&!Ne&&console.error("Modals should not be nested"),i.useEffect(()=>{O&&c.current&&A&&(l.registerDialog(c.current),c.current.classList.add(de)),c.current&&A&&(c.current.autofocus=!0)},[c,A]),i.useEffect(()=>{c.current&&A&&s!==void 0&&(s&&!c.current.open?c.current.showModal():!s&&c.current.open&&c.current.close())},[c,A,s]),Dn(c,A,Z);const Q=typeof u=="string"&&["small","medium"].includes(u),Ve=I("navds-modal",y,{[de]:O,"navds-modal--autowidth":!u,[`navds-modal--${u}`]:Q,"navds-modal--top":b==="top"&&!O}),Be=Object.assign(Object.assign({},m),Q?{}:{width:u}),ee=i.useRef({clientX:0,clientY:0}),Ie=_=>{ee.current=_},ne=p&&!O,Le=_=>{if(_.target!==c.current)return;const re=c.current.getBoundingClientRect();ie(ee.current,re)||ie(_,re)||d!==void 0&&d()===!1||c.current.close()},Ke=_=>{d&&d()===!1&&_.preventDefault()},He=!x&&!X["aria-label"]&&a?J:x,te=v.createElement("dialog",Object.assign({},X,{ref:Ce,className:Ve,style:Be,onCancel:H(g,Ke),onClick:ne?H(w,Le):w,onMouseDown:ne?H(j,Ie):j,"aria-labelledby":He}),v.createElement(On,{closeHandler:Pn(c,a,d),ref:c},a&&v.createElement(Te,null,a.label&&v.createElement($e,{className:"navds-modal__label"},a.label),v.createElement(Ye,{size:(t=a.size)!==null&&t!==void 0?t:"medium",level:"1",id:J},a.icon&&v.createElement("span",{className:"navds-modal__header-icon"},a.icon),a.heading)),o));return k?A?on.createPortal(te,A):null:te});F.Header=Te;F.Body=qn;F.Footer=Sn;const Kn="_button_1tsoz_1",Hn="_image_1tsoz_6",ue={button:Kn,image:Hn},Gn=(e,n,r,t)=>e===h.TILBAKEKREVING?"FatterVedtakApprovalModal.Tilbakekreving":e===h.TILBAKEKREVING_REVURDERING?"FatterVedtakApprovalModal.TilbakekrevingRevurdering":e===h.KLAGE?"FatterVedtakApprovalModal.ModalDescriptionKlage":e===h.ANKE?"FatterVedtakApprovalModal.ModalDescriptionAnke":t?"FatterVedtakApprovalModal.UendretUtfall":n&&n.type===N.AVSLATT?"FatterVedtakApprovalModal.IkkeInnvilget":r?"FatterVedtakApprovalModal.OpphortVedtak":"FatterVedtakApprovalModal.InnvilgetVedtak",zn=(e,n)=>n===h.KLAGE?"FatterVedtakApprovalModal.ModalDescriptionKlage":n===h.ANKE?"FatterVedtakApprovalModal.ModalDescriptionAnke":e?"FatterVedtakApprovalModal.ModalDescriptionOpphort":"FatterVedtakApprovalModal.ModalDescriptionApproval",W=e=>e===V.FATTER_VEDTAK,Un=(e,n,r,t,a,o)=>e?W(n)?Gn(r,t,a,o):"":"FatterVedtakApprovalModal.VedtakReturneresTilSaksbehandler",$n=e=>W(e)?"FatterVedtakApprovalModal.Innvilget":"",Yn=(e,n,r)=>W(e)?zn(r,n):"FatterVedtakApprovalModal.ModalDescription",Re=({closeEvent:e,allAksjonspunktApproved:n,behandlingStatusKode:r,behandlingTypeKode:t,behandlingsresultat:a,harSammeResultatSomOriginalBehandling:o})=>{const s=We(),d=!!a&&a.type===N.OPPHOR,g=Un(n,r,t,a,d,o),p=$n(r),u=Yn(r,t,d);return f.jsx(F,{width:"small",open:!0,"aria-label":s.formatMessage({id:u}),onClose:e,children:f.jsx(F.Body,{children:f.jsx(Xe,{children:f.jsxs(Je,{children:[f.jsx(G,{children:f.jsx(Ze,{className:ue.image,title:s.formatMessage({id:p})})}),f.jsxs(G,{children:[f.jsx(Qe,{size:"small",children:f.jsx(z,{id:g})}),f.jsx(en,{size:"small",children:f.jsx(z,{id:"FatterVedtakApprovalModal.GoToSearchPage"})})]}),f.jsx(G,{className:ue.button,children:f.jsx(we,{size:"small",variant:"primary",onClick:e,autoFocus:!0,type:"button",children:f.jsx(z,{id:"FatterVedtakApprovalModal.Ok"})})})]})})})})};Re.__docgenInfo={description:`FatterVedtakApprovalModal

Denne modalen vises en lightbox etter at en beslutter har godkjent alle aksjonspunkter
med totrinnskontroll. Ved å trykke på knapp blir beslutter tatt tilbake til sokesiden.`,methods:[],displayName:"FatterVedtakApprovalModal",props:{closeEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},allAksjonspunktApproved:{required:!0,tsType:{name:"boolean"},description:""},behandlingsresultat:{required:!1,tsType:{name:"Readonly",raw:"Behandling['behandlingsresultat']"},description:""},behandlingStatusKode:{required:!0,tsType:{name:"string"},description:""},behandlingTypeKode:{required:!0,tsType:{name:"string"},description:""},harSammeResultatSomOriginalBehandling:{required:!1,tsType:{name:"boolean"},description:""}}};const Wn=nn(rn),Pe=({behandling:e,closeEvent:n,allAksjonspunktApproved:r})=>{var t;return f.jsx(tn,{value:Wn,children:f.jsx(Re,{closeEvent:n,allAksjonspunktApproved:r,behandlingsresultat:e.behandlingsresultat,behandlingStatusKode:e.status,behandlingTypeKode:e.type,harSammeResultatSomOriginalBehandling:((t=e.behandlingsresultat)==null?void 0:t.erRevurderingMedUendretUtfall)||!1})})},De=Pe;Pe.__docgenInfo={description:"",methods:[],displayName:"FatterVedtakTotrinnskontrollModalSakIndex",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}>`}]},description:""},closeEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},allAksjonspunktApproved:{required:!0,tsType:{name:"boolean"},description:""}}};const nt={title:"sak/sak-totrinnskontroll-fatter-vedtak-modal",component:De},K=({closeEvent:e,behandling:n,allAksjonspunktApproved:r})=>f.jsx(De,{behandling:n,closeEvent:e,allAksjonspunktApproved:r}),M=K.bind({});M.args={closeEvent:L("button-click"),behandling:{uuid:"1",status:V.FATTER_VEDTAK,type:h.FORSTEGANGSSOKNAD},allAksjonspunktApproved:!0};const S=K.bind({});S.args={closeEvent:L("button-click"),behandling:{uuid:"1",status:V.FATTER_VEDTAK,type:h.FORSTEGANGSSOKNAD,behandlingsresultat:{type:N.OPPHOR}},allAksjonspunktApproved:!0};const R=K.bind({});R.args={closeEvent:L("button-click"),behandling:{uuid:"1",status:V.FATTER_VEDTAK,type:h.KLAGE,behandlingsresultat:{type:N.OPPHOR}},allAksjonspunktApproved:!0};const P=K.bind({});P.args={closeEvent:L("button-click"),behandling:{uuid:"1",status:V.FATTER_VEDTAK,type:h.FORSTEGANGSSOKNAD,behandlingsresultat:{type:N.OPPHOR}},allAksjonspunktApproved:!1};var ge,ce,pe;M.parameters={...M.parameters,docs:{...(ge=M.parameters)==null?void 0:ge.docs,source:{originalSource:`({
  closeEvent,
  behandling,
  allAksjonspunktApproved
}) => <FatterVedtakTotrinnskontrollModalSakIndex behandling={behandling} closeEvent={closeEvent} allAksjonspunktApproved={allAksjonspunktApproved} />`,...(pe=(ce=M.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var me,fe,ke;S.parameters={...S.parameters,docs:{...(me=S.parameters)==null?void 0:me.docs,source:{originalSource:`({
  closeEvent,
  behandling,
  allAksjonspunktApproved
}) => <FatterVedtakTotrinnskontrollModalSakIndex behandling={behandling} closeEvent={closeEvent} allAksjonspunktApproved={allAksjonspunktApproved} />`,...(ke=(fe=S.parameters)==null?void 0:fe.docs)==null?void 0:ke.source}}};var ve,be,ye;R.parameters={...R.parameters,docs:{...(ve=R.parameters)==null?void 0:ve.docs,source:{originalSource:`({
  closeEvent,
  behandling,
  allAksjonspunktApproved
}) => <FatterVedtakTotrinnskontrollModalSakIndex behandling={behandling} closeEvent={closeEvent} allAksjonspunktApproved={allAksjonspunktApproved} />`,...(ye=(be=R.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var he,Ee,Ae;P.parameters={...P.parameters,docs:{...(he=P.parameters)==null?void 0:he.docs,source:{originalSource:`({
  closeEvent,
  behandling,
  allAksjonspunktApproved
}) => <FatterVedtakTotrinnskontrollModalSakIndex behandling={behandling} closeEvent={closeEvent} allAksjonspunktApproved={allAksjonspunktApproved} />`,...(Ae=(Ee=P.parameters)==null?void 0:Ee.docs)==null?void 0:Ae.source}}};const tt=["EtterFatterVedtakOgGodkjent","EtterGodkjenning","EtterGodkjenningAvKlage","EtterTilbakesendingTilSaksbehandler"];export{M as EtterFatterVedtakOgGodkjent,S as EtterGodkjenning,R as EtterGodkjenningAvKlage,P as EtterTilbakesendingTilSaksbehandler,tt as __namedExportsOrder,nt as default};
