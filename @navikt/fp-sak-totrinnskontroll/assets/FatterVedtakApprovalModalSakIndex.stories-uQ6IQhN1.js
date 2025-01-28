import{c as Me,a as K,u as Xe,B as Pe,S as Ze,b as Je,d as Qe,e as en,f as C,D as nn,H as tn,g as rn,h as P,i as te,j as an,V as sn,L as on,M as I,k as ln,l as b,m as V,n as dn,P as un,o as gn,p as pn}from"./nb_NO-VZEaG_ar.js";import{j as p}from"./jsx-runtime-CLpGMVip.js";import{r as o,b as kn,R as m}from"./index-CYQpqK1Q.js";import{r as mn}from"./index-4Uuc9FQs.js";import"./v4-CtRu48qb.js";import"./dayjs.min-DPY8FYmS.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CjktTq3Q.js";const[yn,Ve]=Me({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"});var _=function(){return _=Object.assign||function(n){for(var r,t=1,a=arguments.length;t<a;t++){r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])}return n},_.apply(this,arguments)};var bn=o.createContext(void 0);function cn(){var e=o.useContext(bn);if(!e)throw new Error("useDayPicker must be used within a DayPickerProvider.");return e}o.createContext(void 0);o.forwardRef(function(e,n){var r=cn(),t=r.classNames,a=r.styles,i=[t.button_reset,t.button];e.className&&i.push(e.className);var l=i.join(" "),d=_(_({},a.button_reset),a.button);return e.style&&Object.assign(d,e.style),p.jsx("button",_({},e,{ref:n,type:"button",className:l,style:d}))});o.createContext(void 0);o.createContext(void 0);var c;(function(e){e.Outside="outside",e.Disabled="disabled",e.Selected="selected",e.Hidden="hidden",e.Today="today",e.RangeStart="range_start",e.RangeEnd="range_end",e.RangeMiddle="range_middle"})(c||(c={}));c.Selected;c.Disabled;c.Hidden;c.Today;c.RangeEnd;c.RangeMiddle;c.RangeStart;c.Outside;o.createContext(void 0);o.createContext(void 0);o.createContext(void 0);const vn=o.createContext(null);o.createContext({hasDropdown:!1,year:new Date,toYear:()=>null,disabled:[],onSelect:()=>null});Me();function fn(e){var n;return(e==null||(n=e.ownerDocument)==null?void 0:n.defaultView)||window}function hn(e){return e instanceof Element||e instanceof fn(e).Element}var G=typeof document<"u"?o.useLayoutEffect:o.useEffect;let L=!1,An=0;const re=()=>"floating-ui-"+An++;function Tn(){const[e,n]=o.useState(()=>L?re():void 0);return G(()=>{e==null&&n(re())},[]),o.useEffect(()=>{L||(L=!0)},[]),e}const qn=kn.useId,jn=qn||Tn;function En(e){return"data-floating-ui-"+e}const wn=o.createContext(null);function Bn(e){let{id:n,root:r}=e===void 0?{}:e;const[t,a]=o.useState(null),i=jn(),l=On(),d=o.useMemo(()=>({id:n,root:r,portalContext:l,uniqueId:i}),[n,r,l,i]),k=o.useRef();return G(()=>()=>{t==null||t.remove()},[t,d]),G(()=>{if(k.current===d)return;k.current=d;const{id:y,root:v,portalContext:F,uniqueId:D}=d,N=y?document.getElementById(y):null,S=En("portal");if(N){const u=document.createElement("div");u.id=D,u.setAttribute(S,""),N.appendChild(u),a(u)}else{let u=v||(F==null?void 0:F.portalNode);u&&!hn(u)&&(u=u.current),u=u||document.body;let j=null;y&&(j=document.createElement("div"),j.id=y,u.appendChild(j));const E=document.createElement("div");E.id=D,E.setAttribute(S,""),u=j||u,u.appendChild(E),a(E)}},[d]),t}const On=()=>o.useContext(wn);var Sn=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const _n=o.forwardRef((e,n)=>{var{className:r}=e,t=Sn(e,["className"]);return m.createElement("div",Object.assign({},t,{ref:n,className:K("navds-modal__body",r)}))});var Rn=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Mn=o.forwardRef((e,n)=>{var{className:r}=e,t=Rn(e,["className"]);return m.createElement("div",Object.assign({},t,{ref:n,className:K("navds-modal__footer",r)}))});var Pn=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Fe=o.forwardRef((e,n)=>{var{children:r,className:t,closeButton:a=!0}=e,i=Pn(e,["children","className","closeButton"]);const l=Ve(),d=Xe("global");return m.createElement("div",Object.assign({},i,{ref:n,className:K("navds-modal__header",t)}),l.closeHandler&&a&&m.createElement(Pe,{type:"button",className:"navds-modal__button",size:"small",variant:"tertiary-neutral",onKeyDown:k=>{["Enter"," "].includes(k.key)&&k.repeat&&k.preventDefault()},onClick:l.closeHandler,icon:m.createElement(Ze,{title:d("close")})}),r)}),ae=({clientX:e,clientY:n},{left:r,top:t,right:a,bottom:i})=>!(e<r||n<t||e>a||n>i);function Vn(e,n,r){if(!(n&&n.closeButton===!1))return r?()=>{var t;return r()!==!1&&((t=e.current)===null||t===void 0?void 0:t.close())}:()=>{var t;return(t=e.current)===null||t===void 0?void 0:t.close()}}const x="navds-modal__document-body";function Fn(e,n,r){m.useEffect(()=>{if(r||!e.current||!n)return;e.current.open&&document.body.classList.add(x);const t=new MutationObserver(()=>{var a;!((a=e.current)===null||a===void 0)&&a.open?document.body.classList.add(x):document.body.classList.remove(x)});return t.observe(e.current,{attributes:!0,attributeFilter:["open"]}),()=>{t.disconnect(),document.body.classList.remove(x)}},[e,n,r])}const O=typeof window<"u"&&(window.HTMLDialogElement===void 0||navigator.userAgent.includes("jsdom"));function De(e,n){var r="on"+n.type.toLowerCase();return typeof e[r]=="function"&&e[r](n),e.dispatchEvent(n)}function R(e){for(;e;){if(e.localName==="dialog")return e;e.parentElement?e=e.parentElement:e.parentNode?e=e.parentNode.host:e=null}return null}function Ne(e){for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;e&&e.blur&&e!==document.body&&e.blur()}function Dn(e,n){for(var r=0;r<e.length;++r)if(e[r]===n)return!0;return!1}function H(e){return!e||!e.hasAttribute("method")?!1:e.getAttribute("method").toLowerCase()==="dialog"}function xe(e){var n=["button","input","keygen","select","textarea"],r=n.map(function(l){return l+":not([disabled])"});r.push('[tabindex]:not([disabled]):not([tabindex=""])');var t=e.querySelector(r.join(", "));if(!t&&"attachShadow"in Element.prototype)for(var a=e.querySelectorAll("*"),i=0;i<a.length&&!(a[i].tagName&&a[i].shadowRoot&&(t=xe(a[i].shadowRoot),t));i++);return t}function ie(e){return e.isConnected||document.body.contains(e)}function Ke(e){if(e.submitter)return e.submitter;var n=e.target;if(!(n instanceof HTMLFormElement))return null;var r=s.formSubmitter;if(!r){var t=e.target,a="getRootNode"in t&&t.getRootNode()||document;r=a.activeElement}return!r||r.form!==n?null:r}function Nn(e){if(!e.defaultPrevented){var n=e.target,r=s.imagemapUseValue,t=Ke(e);r===null&&t&&(r=t.value);var a=R(n);if(a){var i=t&&t.getAttribute("formmethod")||n.getAttribute("method");i==="dialog"&&(e.preventDefault(),r!=null?a.close(r):a.close())}}}function Ce(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),e.addEventListener("submit",Nn,!1),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){var n=new MutationObserver(this.maybeHideModal.bind(this));n.observe(e,{attributes:!0,attributeFilter:["open"]})}else{var r=!1,t=(function(){r?this.downgradeModal():this.maybeHideModal(),r=!1}).bind(this),a,i=function(l){if(l.target===e){var d="DOMNodeRemoved";r|=l.type.substr(0,d.length)===d,window.clearTimeout(a),a=window.setTimeout(t,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(l){e.addEventListener(l,i)})}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}Ce.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&ie(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),s.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropMouseEvent_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var n=document.createElement("div");this.dialog_.insertBefore(n,this.dialog_.firstChild),n.tabIndex=-1,n.focus(),this.dialog_.removeChild(n)}var r=document.createEvent("MouseEvents");r.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(r),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),e||(e=xe(this.dialog_)),Ne(document.activeElement),e&&e.focus()},updateZIndex:function(e,n){if(e<n)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=n},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!ie(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!s.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");this.setOpen(!0),this.openAsModal_=!0,s.needsCentering(this.dialog_)?(s.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),e!==void 0&&(this.dialog_.returnValue=e);var n=new window.CustomEvent("close",{bubbles:!1,cancelable:!1});De(this.dialog_,n)}};var s={};s.reposition=function(e){var n=document.body.scrollTop||document.documentElement.scrollTop,r=n+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(n,r)+"px"};s.isInlinePositionSetByStylesheet=function(e){for(var n=0;n<document.styleSheets.length;++n){var r=document.styleSheets[n],t=null;try{t=r.cssRules}catch{}if(t)for(var a=0;a<t.length;++a){var i=t[a],l=null;try{l=document.querySelectorAll(i.selectorText)}catch{}if(!(!l||!Dn(l,e))){var d=i.style.getPropertyValue("top"),k=i.style.getPropertyValue("bottom");if(d&&d!=="auto"||k&&k!=="auto")return!0}}}return!1};s.needsCentering=function(e){var n=window.getComputedStyle(e);return n.position!=="absolute"||e.style.top!=="auto"&&e.style.top!==""||e.style.bottom!=="auto"&&e.style.bottom!==""?!1:!s.isInlinePositionSetByStylesheet(e)};s.forceRegisterDialog=function(e){if(e.showModal&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),e.localName!=="dialog")throw new Error("Failed to register dialog: The element is not a dialog.");new Ce(e)};s.registerDialog=function(e){e.showModal||s.forceRegisterDialog(e)};s.DialogManager=function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",(function(n){this.forwardTab_=void 0,n.stopPropagation(),e([])}).bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(n){var r=[];n.forEach(function(t){for(var a=0,i;i=t.removedNodes[a];++a)i instanceof Element&&(i.localName==="dialog"&&r.push(i),r=r.concat(i.querySelectorAll("dialog")))}),r.length&&e(r)}))};s.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})};s.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()};s.DialogManager.prototype.updateStacking=function(){for(var e=this.zIndexHigh_,n=0,r;r=this.pendingDialogStack[n];++n)r.updateZIndex(--e,--e),n===0&&(this.overlay.style.zIndex=--e);var t=this.pendingDialogStack[0];if(t){var a=t.dialog.parentNode||document.body;a.appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)};s.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=R(e);){for(var n=0,r;r=this.pendingDialogStack[n];++n)if(r.dialog===e)return n===0;e=e.parentElement}return!1};s.DialogManager.prototype.handleFocus_=function(e){var n=e.composedPath?e.composedPath()[0]:e.target;if(!this.containedByTopDialog_(n)&&document.activeElement!==document.documentElement&&(e.preventDefault(),e.stopPropagation(),Ne(n),this.forwardTab_!==void 0)){var r=this.pendingDialogStack[0],t=r.dialog,a=t.compareDocumentPosition(n);return a&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?r.focus_():n!==document.documentElement&&document.documentElement.focus()),!1}};s.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,e.keyCode===27){e.preventDefault(),e.stopPropagation();var n=new window.CustomEvent("cancel",{bubbles:!1,cancelable:!0}),r=this.pendingDialogStack[0];r&&De(r.dialog,n)&&r.dialog.close()}else e.keyCode===9&&(this.forwardTab_=!e.shiftKey)};s.DialogManager.prototype.checkDOM_=function(e){var n=this.pendingDialogStack.slice();n.forEach(function(r){e.indexOf(r.dialog)!==-1?r.downgradeModal():r.maybeHideModal()})};s.DialogManager.prototype.pushDialog=function(e){var n=(this.zIndexHigh_-this.zIndexLow_)/2-1;return this.pendingDialogStack.length>=n?!1:(this.pendingDialogStack.unshift(e)===1&&this.blockDocument(),this.updateStacking(),!0)};s.DialogManager.prototype.removeDialog=function(e){var n=this.pendingDialogStack.indexOf(e);n!==-1&&(this.pendingDialogStack.splice(n,1),this.pendingDialogStack.length===0&&this.unblockDocument(),this.updateStacking())};O&&(s.dm=new s.DialogManager,s.formSubmitter=null,s.imagemapUseValue=null);if(O){var se=document.createElement("form");if(se.setAttribute("method","dialog"),se.method!=="dialog"){var B=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(B){var xn=B.get;B.get=function(){return H(this)?"dialog":xn.call(this)};var Kn=B.set;B.set=function(e){return typeof e=="string"&&e.toLowerCase()==="dialog"?this.setAttribute("method",e):Kn.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",B)}}document.addEventListener("click",function(e){if(s.formSubmitter=null,s.imagemapUseValue=null,!e.defaultPrevented){var n=e.target;if("composedPath"in e){var r=e.composedPath();n=r.shift()||n}if(!(!n||!H(n.form))){var t=n.type==="submit"&&["button","input"].indexOf(n.localName)>-1;if(!t){if(!(n.localName==="input"&&n.type==="image"))return;s.imagemapUseValue=e.offsetX+","+e.offsetY}var a=R(n);a&&(s.formSubmitter=n)}}},!1),document.addEventListener("submit",function(e){var n=e.target,r=R(n);if(!r){var t=Ke(e),a=t&&t.getAttribute("formmethod")||n.getAttribute("method");a==="dialog"&&e.preventDefault()}});var Cn=HTMLFormElement.prototype.submit,In=function(){if(!H(this))return Cn.call(this);var e=R(this);e&&e.close()};HTMLFormElement.prototype.submit=In}var Ln=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const oe="navds-modal--polyfilled",M=o.forwardRef((e,n)=>{var r,t,{header:a,children:i,open:l,onBeforeClose:d,onCancel:k,closeOnBackdropClick:y,width:v,placement:F,portal:D,className:N,"aria-labelledby":S,style:u,onClick:j,onMouseDown:E}=e,$=Ln(e,["header","children","open","onBeforeClose","onCancel","closeOnBackdropClick","width","placement","portal","className","aria-labelledby","style","onClick","onMouseDown"]);const g=o.useRef(null),Ie=Je(g,n),W=Qe(),Le=(r=en())===null||r===void 0?void 0:r.rootElement,f=Bn({root:Le}),He=o.useContext(vn),X=Ve(!1)!==void 0;X&&!He&&console.error("Modals should not be nested"),o.useEffect(()=>{O&&g.current&&f&&(s.registerDialog(g.current),g.current.classList.add(oe)),g.current&&f&&(g.current.autofocus=!0)},[f]),o.useEffect(()=>{g.current&&f&&l!==void 0&&(l&&!g.current.open?g.current.showModal():!l&&g.current.open&&g.current.close())},[f,l]),Fn(g,f,X);const Z=typeof v=="string"&&["small","medium"].includes(v),Ge=K("navds-modal",N,{[oe]:O,"navds-modal--autowidth":!v,[`navds-modal--${v}`]:Z,"navds-modal--top":F==="top"&&!O}),Ue=Object.assign(Object.assign({},u),Z?{}:{width:v}),J=o.useRef({clientX:0,clientY:0}),ze=w=>{J.current=w},Q=y&&!O,Ye=w=>{if(w.target!==g.current)return;const ne=g.current.getBoundingClientRect();ae(J.current,ne)||ae(w,ne)||d!==void 0&&d()===!1||g.current.close()},$e=w=>{d&&d()===!1&&w.preventDefault()},We=!S&&!$["aria-label"]&&a?W:S,ee=m.createElement("dialog",Object.assign({},$,{ref:Ie,className:Ge,style:Ue,onCancel:C(k,$e),onClick:Q?C(j,Ye):j,onMouseDown:Q?C(E,ze):E,"aria-labelledby":We}),m.createElement(yn,{closeHandler:Vn(g,a,d),ref:g},a&&m.createElement(Fe,null,a.label&&m.createElement(nn,{className:"navds-modal__label"},a.label),m.createElement(tn,{size:(t=a.size)!==null&&t!==void 0?t:"medium",level:"1",id:W},a.icon&&m.createElement("span",{className:"navds-modal__header-icon"},a.icon),a.heading)),i));return D?f?mn.createPortal(ee,f):null:ee});M.Header=Fe;M.Body=_n;M.Footer=Mn;const Hn="_image_1vkl5_1",Gn={image:Hn},Un=(e,n,r,t)=>e===b.TILBAKEKREVING?"FatterVedtakApprovalModal.Tilbakekreving":e===b.TILBAKEKREVING_REVURDERING?"FatterVedtakApprovalModal.TilbakekrevingRevurdering":e===b.KLAGE?"FatterVedtakApprovalModal.ModalDescriptionKlage":e===b.ANKE?"FatterVedtakApprovalModal.ModalDescriptionAnke":t?"FatterVedtakApprovalModal.UendretUtfall":n&&n.type===P.AVSLATT?"FatterVedtakApprovalModal.IkkeInnvilget":r?"FatterVedtakApprovalModal.OpphortVedtak":"FatterVedtakApprovalModal.InnvilgetVedtak",zn=(e,n)=>n===b.KLAGE?"FatterVedtakApprovalModal.ModalDescriptionKlage":n===b.ANKE?"FatterVedtakApprovalModal.ModalDescriptionAnke":e?"FatterVedtakApprovalModal.ModalDescriptionOpphort":"FatterVedtakApprovalModal.ModalDescriptionApproval",U=e=>e===V.FATTER_VEDTAK,Yn=(e,n,r,t,a,i)=>e?U(n)?Un(r,t,a,i):"":"FatterVedtakApprovalModal.VedtakReturneresTilSaksbehandler",$n=e=>U(e)?"FatterVedtakApprovalModal.Innvilget":"",Wn=(e,n,r)=>U(e)?zn(r,n):"FatterVedtakApprovalModal.ModalDescription",z=({closeEvent:e,allAksjonspunktApproved:n,behandlingStatusKode:r,behandlingTypeKode:t,behandlingsresultat:a,harSammeResultatSomOriginalBehandling:i})=>{const l=rn(),d=!!a&&a.type===P.OPPHOR,k=Yn(n,r,t,a,d,i),y=$n(r),v=Wn(r,t,d);return p.jsx(M,{width:"small",open:!0,"aria-label":l.formatMessage({id:v}),onClose:e,children:p.jsx(M.Body,{children:p.jsxs(te,{justify:"space-between",align:"center",children:[p.jsxs(te,{gap:"2",children:[p.jsx(an,{className:Gn.image,title:l.formatMessage({id:y})}),p.jsxs(sn,{gap:"1",children:[p.jsx(on,{size:"small",children:p.jsx(I,{id:k})}),p.jsx(ln,{size:"small",children:p.jsx(I,{id:"FatterVedtakApprovalModal.GoToSearchPage"})})]})]}),p.jsx(Pe,{size:"small",variant:"primary",onClick:e,autoFocus:!0,type:"button",children:p.jsx(I,{id:"FatterVedtakApprovalModal.Ok"})})]})})})};z.__docgenInfo={description:`FatterVedtakApprovalModal

Denne modalen vises en lightbox etter at en beslutter har godkjent alle aksjonspunkter
med totrinnskontroll. Ved å trykke på knapp blir beslutter tatt tilbake til sokesiden.`,methods:[],displayName:"FatterVedtakApprovalModal",props:{closeEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},allAksjonspunktApproved:{required:!0,tsType:{name:"boolean"},description:""},behandlingsresultat:{required:!1,tsType:{name:"intersection['behandlingsresultat']",raw:"Behandling['behandlingsresultat']"},description:""},behandlingStatusKode:{required:!0,tsType:{name:"string"},description:""},behandlingTypeKode:{required:!0,tsType:{name:"string"},description:""},harSammeResultatSomOriginalBehandling:{required:!1,tsType:{name:"boolean"},description:""}}};z.__docgenInfo={description:`FatterVedtakApprovalModal

Denne modalen vises en lightbox etter at en beslutter har godkjent alle aksjonspunkter
med totrinnskontroll. Ved å trykke på knapp blir beslutter tatt tilbake til sokesiden.`,methods:[],displayName:"FatterVedtakApprovalModal",props:{closeEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},allAksjonspunktApproved:{required:!0,tsType:{name:"boolean"},description:""},behandlingsresultat:{required:!1,tsType:{name:"intersection['behandlingsresultat']",raw:"Behandling['behandlingsresultat']"},description:""},behandlingStatusKode:{required:!0,tsType:{name:"string"},description:""},behandlingTypeKode:{required:!0,tsType:{name:"string"},description:""},harSammeResultatSomOriginalBehandling:{required:!1,tsType:{name:"boolean"},description:""}}};const Xn=dn(gn),Y=({behandling:e,closeEvent:n,allAksjonspunktApproved:r})=>{var t;return p.jsx(un,{value:Xn,children:p.jsx(z,{closeEvent:n,allAksjonspunktApproved:r,behandlingsresultat:e.behandlingsresultat,behandlingStatusKode:e.status,behandlingTypeKode:e.type,harSammeResultatSomOriginalBehandling:((t=e.behandlingsresultat)==null?void 0:t.erRevurderingMedUendretUtfall)||!1})})};Y.__docgenInfo={description:"",methods:[],displayName:"FatterVedtakTotrinnskontrollModalSakIndex",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}>`}]},description:""},closeEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},allAksjonspunktApproved:{required:!0,tsType:{name:"boolean"},description:""}}};Y.__docgenInfo={description:"",methods:[],displayName:"FatterVedtakTotrinnskontrollModalSakIndex",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}>`}]},description:""},closeEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},allAksjonspunktApproved:{required:!0,tsType:{name:"boolean"},description:""}}};const it={title:"sak/sak-totrinnskontroll-fatter-vedtak-modal",component:Y,args:{closeEvent:pn("button-click")}},h={args:{behandling:{uuid:"1",status:V.FATTER_VEDTAK,type:b.FORSTEGANGSSOKNAD},allAksjonspunktApproved:!0}},A={args:{behandling:{uuid:"1",status:V.FATTER_VEDTAK,type:b.FORSTEGANGSSOKNAD,behandlingsresultat:{type:P.OPPHOR}},allAksjonspunktApproved:!0}},T={args:{behandling:{uuid:"1",status:V.FATTER_VEDTAK,type:b.KLAGE,behandlingsresultat:{type:P.OPPHOR}},allAksjonspunktApproved:!0}},q={args:{behandling:{uuid:"1",status:V.FATTER_VEDTAK,type:b.FORSTEGANGSSOKNAD,behandlingsresultat:{type:P.OPPHOR}},allAksjonspunktApproved:!1}};var le,de,ue;h.parameters={...h.parameters,docs:{...(le=h.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    behandling: {
      uuid: '1',
      status: BehandlingStatus.FATTER_VEDTAK,
      type: BehandlingType.FORSTEGANGSSOKNAD
    } as BehandlingAppKontekst,
    allAksjonspunktApproved: true
  }
}`,...(ue=(de=h.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var ge,pe,ke;A.parameters={...A.parameters,docs:{...(ge=A.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    behandling: {
      uuid: '1',
      status: BehandlingStatus.FATTER_VEDTAK,
      type: BehandlingType.FORSTEGANGSSOKNAD,
      behandlingsresultat: {
        type: BehandlingResultatType.OPPHOR
      }
    } as BehandlingAppKontekst,
    allAksjonspunktApproved: true
  }
}`,...(ke=(pe=A.parameters)==null?void 0:pe.docs)==null?void 0:ke.source}}};var me,ye,be;T.parameters={...T.parameters,docs:{...(me=T.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    behandling: {
      uuid: '1',
      status: BehandlingStatus.FATTER_VEDTAK,
      type: BehandlingType.KLAGE,
      behandlingsresultat: {
        type: BehandlingResultatType.OPPHOR
      }
    } as BehandlingAppKontekst,
    allAksjonspunktApproved: true
  }
}`,...(be=(ye=T.parameters)==null?void 0:ye.docs)==null?void 0:be.source}}};var ce,ve,fe;q.parameters={...q.parameters,docs:{...(ce=q.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    behandling: {
      uuid: '1',
      status: BehandlingStatus.FATTER_VEDTAK,
      type: BehandlingType.FORSTEGANGSSOKNAD,
      behandlingsresultat: {
        type: BehandlingResultatType.OPPHOR
      }
    } as BehandlingAppKontekst,
    allAksjonspunktApproved: false
  }
}`,...(fe=(ve=q.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};var he,Ae,Te;h.parameters={...h.parameters,docs:{...(he=h.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    behandling: {
      uuid: '1',
      status: BehandlingStatus.FATTER_VEDTAK,
      type: BehandlingType.FORSTEGANGSSOKNAD
    } as BehandlingAppKontekst,
    allAksjonspunktApproved: true
  }
}`,...(Te=(Ae=h.parameters)==null?void 0:Ae.docs)==null?void 0:Te.source}}};var qe,je,Ee;A.parameters={...A.parameters,docs:{...(qe=A.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  args: {
    behandling: {
      uuid: '1',
      status: BehandlingStatus.FATTER_VEDTAK,
      type: BehandlingType.FORSTEGANGSSOKNAD,
      behandlingsresultat: {
        type: BehandlingResultatType.OPPHOR
      }
    } as BehandlingAppKontekst,
    allAksjonspunktApproved: true
  }
}`,...(Ee=(je=A.parameters)==null?void 0:je.docs)==null?void 0:Ee.source}}};var we,Be,Oe;T.parameters={...T.parameters,docs:{...(we=T.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    behandling: {
      uuid: '1',
      status: BehandlingStatus.FATTER_VEDTAK,
      type: BehandlingType.KLAGE,
      behandlingsresultat: {
        type: BehandlingResultatType.OPPHOR
      }
    } as BehandlingAppKontekst,
    allAksjonspunktApproved: true
  }
}`,...(Oe=(Be=T.parameters)==null?void 0:Be.docs)==null?void 0:Oe.source}}};var Se,_e,Re;q.parameters={...q.parameters,docs:{...(Se=q.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    behandling: {
      uuid: '1',
      status: BehandlingStatus.FATTER_VEDTAK,
      type: BehandlingType.FORSTEGANGSSOKNAD,
      behandlingsresultat: {
        type: BehandlingResultatType.OPPHOR
      }
    } as BehandlingAppKontekst,
    allAksjonspunktApproved: false
  }
}`,...(Re=(_e=q.parameters)==null?void 0:_e.docs)==null?void 0:Re.source}}};const st=["EtterFatterVedtakOgGodkjent","EtterGodkjenning","EtterGodkjenningAvKlage","EtterTilbakesendingTilSaksbehandler"];export{h as EtterFatterVedtakOgGodkjent,A as EtterGodkjenning,T as EtterGodkjenningAvKlage,q as EtterTilbakesendingTilSaksbehandler,st as __namedExportsOrder,it as default};
