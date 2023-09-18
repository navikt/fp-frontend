import{r as s,R as c}from"./index-1b03fe98.js";import{r as K}from"./index-6fd5a17b.js";import{n as $,c as y,p as E,f as V,q,r as X,s as U}from"./nb_NO-91e99ecf.js";import{D as Y}from"./Detail-a958125f.js";import{H as Z}from"./Heading-39bd052b.js";var W=globalThis&&globalThis.__rest||function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)o.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(n[t[r]]=e[t[r]]);return n};const G=s.forwardRef((e,o)=>{var{title:n,titleId:t}=e,r=W(e,["title","titleId"]);let i=$();return i=n?t||"title-"+i:void 0,s.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:o,"aria-labelledby":i},r),n?s.createElement("title",{id:i},n):null,s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94 6.53 5.47Z",fill:"currentColor"}))}),J=G,v=typeof window<"u"&&(window.HTMLDialogElement===void 0||navigator.userAgent.includes("jsdom"));function N(e,o){var n="on"+o.type.toLowerCase();return typeof e[n]=="function"&&e[n](o),e.dispatchEvent(o)}function b(e){for(;e;){if(e.localName==="dialog")return e;e.parentElement?e=e.parentElement:e.parentNode?e=e.parentNode.host:e=null}return null}function L(e){for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;e&&e.blur&&e!==document.body&&e.blur()}function Q(e,o){for(var n=0;n<e.length;++n)if(e[n]===o)return!0;return!1}function w(e){return!e||!e.hasAttribute("method")?!1:e.getAttribute("method").toLowerCase()==="dialog"}function j(e){var o=["button","input","keygen","select","textarea"],n=o.map(function(l){return l+":not([disabled])"});n.push('[tabindex]:not([disabled]):not([tabindex=""])');var t=e.querySelector(n.join(", "));if(!t&&"attachShadow"in Element.prototype)for(var r=e.querySelectorAll("*"),i=0;i<r.length&&!(r[i].tagName&&r[i].shadowRoot&&(t=j(r[i].shadowRoot),t));i++);return t}function P(e){return e.isConnected||document.body.contains(e)}function I(e){if(e.submitter)return e.submitter;var o=e.target;if(!(o instanceof HTMLFormElement))return null;var n=a.formSubmitter;if(!n){var t=e.target,r="getRootNode"in t&&t.getRootNode()||document;n=r.activeElement}return!n||n.form!==o?null:n}function ee(e){if(!e.defaultPrevented){var o=e.target,n=a.imagemapUseValue,t=I(e);n===null&&t&&(n=t.value);var r=b(o);if(r){var i=t&&t.getAttribute("formmethod")||o.getAttribute("method");i==="dialog"&&(e.preventDefault(),n!=null?r.close(n):r.close())}}}function C(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),e.addEventListener("submit",ee,!1),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){var o=new MutationObserver(this.maybeHideModal.bind(this));o.observe(e,{attributes:!0,attributeFilter:["open"]})}else{var n=!1,t=(function(){n?this.downgradeModal():this.maybeHideModal(),n=!1}).bind(this),r,i=function(l){if(l.target===e){var u="DOMNodeRemoved";n|=l.type.substr(0,u.length)===u,window.clearTimeout(r),r=window.setTimeout(t,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(l){e.addEventListener(l,i)})}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}C.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&P(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),a.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropMouseEvent_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var o=document.createElement("div");this.dialog_.insertBefore(o,this.dialog_.firstChild),o.tabIndex=-1,o.focus(),this.dialog_.removeChild(o)}var n=document.createEvent("MouseEvents");n.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(n),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),e||(e=j(this.dialog_)),L(document.activeElement),e&&e.focus()},updateZIndex:function(e,o){if(e<o)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=o},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!P(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!a.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");this.setOpen(!0),this.openAsModal_=!0,a.needsCentering(this.dialog_)?(a.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),e!==void 0&&(this.dialog_.returnValue=e);var o=new window.CustomEvent("close",{bubbles:!1,cancelable:!1});N(this.dialog_,o)}};var a={};a.reposition=function(e){var o=document.body.scrollTop||document.documentElement.scrollTop,n=o+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(o,n)+"px"};a.isInlinePositionSetByStylesheet=function(e){for(var o=0;o<document.styleSheets.length;++o){var n=document.styleSheets[o],t=null;try{t=n.cssRules}catch{}if(t)for(var r=0;r<t.length;++r){var i=t[r],l=null;try{l=document.querySelectorAll(i.selectorText)}catch{}if(!(!l||!Q(l,e))){var u=i.style.getPropertyValue("top"),p=i.style.getPropertyValue("bottom");if(u&&u!=="auto"||p&&p!=="auto")return!0}}}return!1};a.needsCentering=function(e){var o=window.getComputedStyle(e);return o.position!=="absolute"||e.style.top!=="auto"&&e.style.top!==""||e.style.bottom!=="auto"&&e.style.bottom!==""?!1:!a.isInlinePositionSetByStylesheet(e)};a.forceRegisterDialog=function(e){if(e.showModal&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),e.localName!=="dialog")throw new Error("Failed to register dialog: The element is not a dialog.");new C(e)};a.registerDialog=function(e){e.showModal||a.forceRegisterDialog(e)};a.DialogManager=function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",(function(o){this.forwardTab_=void 0,o.stopPropagation(),e([])}).bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=1e5+150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(o){var n=[];o.forEach(function(t){for(var r=0,i;i=t.removedNodes[r];++r){if(i instanceof Element)i.localName==="dialog"&&n.push(i);else continue;n=n.concat(i.querySelectorAll("dialog"))}}),n.length&&e(n)}))};a.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})};a.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()};a.DialogManager.prototype.updateStacking=function(){for(var e=this.zIndexHigh_,o=0,n;n=this.pendingDialogStack[o];++o)n.updateZIndex(--e,--e),o===0&&(this.overlay.style.zIndex=--e);var t=this.pendingDialogStack[0];if(t){var r=t.dialog.parentNode||document.body;r.appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)};a.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=b(e);){for(var o=0,n;n=this.pendingDialogStack[o];++o)if(n.dialog===e)return o===0;e=e.parentElement}return!1};a.DialogManager.prototype.handleFocus_=function(e){var o=e.composedPath?e.composedPath()[0]:e.target;if(!this.containedByTopDialog_(o)&&document.activeElement!==document.documentElement&&(e.preventDefault(),e.stopPropagation(),L(o),this.forwardTab_!==void 0)){var n=this.pendingDialogStack[0],t=n.dialog,r=t.compareDocumentPosition(o);return r&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?n.focus_():o!==document.documentElement&&document.documentElement.focus()),!1}};a.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,e.keyCode===27){e.preventDefault(),e.stopPropagation();var o=new window.CustomEvent("cancel",{bubbles:!1,cancelable:!0}),n=this.pendingDialogStack[0];n&&N(n.dialog,o)&&n.dialog.close()}else e.keyCode===9&&(this.forwardTab_=!e.shiftKey)};a.DialogManager.prototype.checkDOM_=function(e){var o=this.pendingDialogStack.slice();o.forEach(function(n){e.indexOf(n.dialog)!==-1?n.downgradeModal():n.maybeHideModal()})};a.DialogManager.prototype.pushDialog=function(e){var o=(this.zIndexHigh_-this.zIndexLow_)/2-1;return this.pendingDialogStack.length>=o?!1:(this.pendingDialogStack.unshift(e)===1&&this.blockDocument(),this.updateStacking(),!0)};a.DialogManager.prototype.removeDialog=function(e){var o=this.pendingDialogStack.indexOf(e);o!==-1&&(this.pendingDialogStack.splice(o,1),this.pendingDialogStack.length===0&&this.unblockDocument(),this.updateStacking())};v&&(a.dm=new a.DialogManager,a.formSubmitter=null,a.imagemapUseValue=null);if(v){var T=document.createElement("form");if(T.setAttribute("method","dialog"),T.method!=="dialog"){var m=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(m){var te=m.get;m.get=function(){return w(this)?"dialog":te.call(this)};var oe=m.set;m.set=function(e){return typeof e=="string"&&e.toLowerCase()==="dialog"?this.setAttribute("method",e):oe.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",m)}}document.addEventListener("click",function(e){if(a.formSubmitter=null,a.imagemapUseValue=null,!e.defaultPrevented){var o=e.target;if("composedPath"in e){var n=e.composedPath();o=n.shift()||o}if(!(!o||!w(o.form))){var t=o.type==="submit"&&["button","input"].indexOf(o.localName)>-1;if(!t){if(!(o.localName==="input"&&o.type==="image"))return;a.imagemapUseValue=e.offsetX+","+e.offsetY}var r=b(o);r&&(a.formSubmitter=o)}}},!1),document.addEventListener("submit",function(e){var o=e.target,n=b(o);if(!n){var t=I(e),r=t&&t.getAttribute("formmethod")||o.getAttribute("method");r==="dialog"&&e.preventDefault()}});var ne=HTMLFormElement.prototype.submit,re=function(){if(!w(this))return ne.call(this);var e=b(this);e&&e.close()};HTMLFormElement.prototype.submit=re}const ae=a;var ie=globalThis&&globalThis.__rest||function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)o.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(n[t[r]]=e[t[r]]);return n};const le=s.forwardRef((e,o)=>{var{className:n}=e,t=ie(e,["className"]);return c.createElement("div",Object.assign({},t,{ref:o,className:y("navds-modal__body",n)}))}),se=le;var de=globalThis&&globalThis.__rest||function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)o.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(n[t[r]]=e[t[r]]);return n};const ce=s.forwardRef((e,o)=>{var{children:n,className:t,closeButton:r=!0}=e,i=de(e,["children","className","closeButton"]);const l=s.useContext(E);return l===null?(console.error("<Modal.Header> has to be used within a <Modal>"),null):c.createElement("div",Object.assign({},i,{ref:o,className:y("navds-modal__header",t)}),l.closeHandler&&r&&c.createElement(V,{type:"button",className:"navds-modal__button",size:"small",variant:"tertiary-neutral",onClick:l.closeHandler,icon:c.createElement(J,{title:"Lukk modalvindu"})}),n)}),A=ce;var ue=globalThis&&globalThis.__rest||function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)o.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(n[t[r]]=e[t[r]]);return n};const fe=s.forwardRef((e,o)=>{var{className:n}=e,t=ue(e,["className"]);return c.createElement("div",Object.assign({},t,{ref:o,className:y("navds-modal__footer",n)}))}),he=fe;function me(e,o,n){if(!(o&&o.closeButton===!1))return n?()=>{var t;return n()!==!1&&((t=e.current)===null||t===void 0?void 0:t.close())}:()=>{var t;return(t=e.current)===null||t===void 0?void 0:t.close()}}const g="navds-modal__document-body";function pe(e,o){c.useEffect(()=>{if(!e.current||!o)return;e.current.open&&document.body.classList.add(g);const n=new MutationObserver(()=>{var t;!((t=e.current)===null||t===void 0)&&t.open?document.body.classList.add(g):document.body.classList.remove(g)});return n.observe(e.current,{attributes:!0,attributeFilter:["open"]}),()=>{n.disconnect(),document.body.classList.remove(g)}},[e,o])}var be=globalThis&&globalThis.__rest||function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)o.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(n[t[r]]=e[t[r]]);return n};const _=s.forwardRef((e,o)=>{var n,t,{header:r,children:i,open:l,onBeforeClose:u,onCancel:p,width:f,portal:H,className:F,"aria-labelledby":O,style:R}=e,M=be(e,["header","children","open","onBeforeClose","onCancel","width","portal","className","aria-labelledby","style"]);const d=s.useRef(null),B=s.useMemo(()=>q([d,o]),[o]),D=X(),z=(n=ve())===null||n===void 0?void 0:n.rootElement,h=U({root:z});s.useContext(E)&&console.error("Modals should not be nested"),s.useEffect(()=>{v&&d.current&&h&&ae.registerDialog(d.current)},[d,h]),s.useEffect(()=>{d.current&&h&&l!==void 0&&(l&&!d.current.open?d.current.showModal():!l&&d.current.open&&d.current.close())},[d,h,l]),pe(d,h);const S=typeof f=="string"&&["small","medium"].includes(f),x=c.createElement("dialog",Object.assign({},M,{ref:B,className:y("navds-modal",F,{"navds-modal--polyfilled":v,"navds-modal--autowidth":!f,[`navds-modal--${f}`]:S}),style:Object.assign(Object.assign({},R),S?{}:{width:f}),onCancel:k=>{u&&u()===!1?k.preventDefault():p&&p(k)},"aria-labelledby":!O&&!M["aria-label"]&&r?D:O}),c.createElement(E.Provider,{value:{closeHandler:me(d,r,u)}},r&&c.createElement(A,null,r.label&&c.createElement(Y,{className:"navds-modal__label"},r.label),c.createElement(Z,{size:(t=r.size)!==null&&t!==void 0?t:"medium",level:"1",id:D},c.createElement("span",{className:"navds-modal__header-icon"},r.icon),r.heading)),i));return H?h?K.createPortal(x,h):null:x});_.Header=A;_.Body=se;_.Footer=he;const Me=_;globalThis&&globalThis.__rest;const ge=s.createContext(void 0),ve=()=>s.useContext(ge);export{Me as N,J as X};
//# sourceMappingURL=Provider-c82db7e7.js.map
