import{c as V,u as Ce,B as ye,S as Fe,a as Ve,b as Ke,d as K,D as Ie,H as Le,e as He,f as R,g as ee,h as Ge,V as ze,L as Ue,M as I,i as $e,j as y,k as D,t as Ye,P as We,m as Xe,l as Ze}from"./nb_NO-B60Uud3e.js";import{j as f}from"./jsx-runtime-DR9Q75dM.js";import{r as i,R as k,a as Je}from"./index-DRjF_FHU.js";import{r as Qe}from"./index-rX-Bn4lm.js";import"./v4-CQkTLCs1.js";import"./dayjs.min-DN4LN79F.js";const en=i.createContext(void 0),nn=()=>i.useContext(en);var tn=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};function rn(e,n){return`${e} returned \`undefined\`. Seems you forgot to wrap component within ${n}`}function an(e={}){const{name:n,hookName:r="useContext",providerName:t="Provider",errorMessage:a,defaultValue:o}=e,l=i.createContext(o),d=i.forwardRef((m,p)=>{var{children:h}=m,b=tn(m,["children"]);const A=k.useMemo(()=>b,Object.values(b));return k.createElement(l.Provider,{value:p?Object.assign(Object.assign({},A),{ref:p}):A},h)});function c(m=!0){var p;const h=i.useContext(l);if(!h&&m){const b=new Error(a??rn(r,t));throw b.name="ContextError",(p=Error.captureStackTrace)===null||p===void 0||p.call(Error,b,c),b}return h}return l.displayName=n,[d,c]}const[on,ve]=an({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"});var q=function(){return q=Object.assign||function(n){for(var r,t=1,a=arguments.length;t<a;t++){r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])}return n},q.apply(this,arguments)};var sn=i.createContext(void 0);function ln(){var e=i.useContext(sn);if(!e)throw new Error("useDayPicker must be used within a DayPickerProvider.");return e}i.createContext(void 0);i.forwardRef(function(e,n){var r=ln(),t=r.classNames,a=r.styles,o=[t.button_reset,t.button];e.className&&o.push(e.className);var l=o.join(" "),d=q(q({},a.button_reset),a.button);return e.style&&Object.assign(d,e.style),f.jsx("button",q({},e,{ref:n,type:"button",className:l,style:d}))});i.createContext(void 0);i.createContext(void 0);var v;(function(e){e.Outside="outside",e.Disabled="disabled",e.Selected="selected",e.Hidden="hidden",e.Today="today",e.RangeStart="range_start",e.RangeEnd="range_end",e.RangeMiddle="range_middle"})(v||(v={}));v.Selected;v.Disabled;v.Hidden;v.Today;v.RangeEnd;v.RangeMiddle;v.RangeStart;v.Outside;i.createContext(void 0);i.createContext(void 0);i.createContext(void 0);const dn=i.createContext(null);i.createContext({hasDropdown:!1,year:new Date,toYear:()=>null,disabled:[],onSelect:()=>null});function un(e){var n;return(e==null||(n=e.ownerDocument)==null?void 0:n.defaultView)||window}function gn(e){return e instanceof Element||e instanceof un(e).Element}var G=typeof document<"u"?i.useLayoutEffect:i.useEffect;let L=!1,cn=0;const ne=()=>"floating-ui-"+cn++;function pn(){const[e,n]=i.useState(()=>L?ne():void 0);return G(()=>{e==null&&n(ne())},[]),i.useEffect(()=>{L||(L=!0)},[]),e}const mn=Je.useId,fn=mn||pn;function kn(e){return"data-floating-ui-"+e}const bn=i.createContext(null);function yn(e){let{id:n,root:r}=e===void 0?{}:e;const[t,a]=i.useState(null),o=fn(),l=vn(),d=i.useMemo(()=>({id:n,root:r,portalContext:l,uniqueId:o}),[n,r,l,o]),c=i.useRef();return G(()=>()=>{t==null||t.remove()},[t,d]),G(()=>{if(c.current===d)return;c.current=d;const{id:m,root:p,portalContext:h,uniqueId:b}=d,A=m?document.getElementById(m):null,S=kn("portal");if(A){const u=document.createElement("div");u.id=b,u.setAttribute(S,""),A.appendChild(u),a(u)}else{let u=p||(h==null?void 0:h.portalNode);u&&!gn(u)&&(u=u.current),u=u||document.body;let w=null;m&&(w=document.createElement("div"),w.id=m,u.appendChild(w));const T=document.createElement("div");T.id=b,T.setAttribute(S,""),u=w||u,u.appendChild(T),a(T)}},[d]),t}const vn=()=>i.useContext(bn);var hn=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const En=i.forwardRef((e,n)=>{var{className:r}=e,t=hn(e,["className"]);return k.createElement("div",Object.assign({},t,{ref:n,className:V("navds-modal__body",r)}))});var An=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const wn=i.forwardRef((e,n)=>{var{className:r}=e,t=An(e,["className"]);return k.createElement("div",Object.assign({},t,{ref:n,className:V("navds-modal__footer",r)}))});var Tn=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const he=i.forwardRef((e,n)=>{var{children:r,className:t,closeButton:a=!0}=e,o=Tn(e,["children","className","closeButton"]);const l=ve(),d=Ce("Modal");return k.createElement("div",Object.assign({},o,{ref:n,className:V("navds-modal__header",t)}),l.closeHandler&&a&&k.createElement(ye,{type:"button",className:"navds-modal__button",size:"small",variant:"tertiary-neutral",onKeyDown:c=>{["Enter"," "].includes(c.key)&&c.repeat&&c.preventDefault()},onClick:l.closeHandler,icon:k.createElement(Fe,{title:d("close")})}),r)}),te=({clientX:e,clientY:n},{left:r,top:t,right:a,bottom:o})=>!(e<r||n<t||e>a||n>o);function jn(e,n,r){if(!(n&&n.closeButton===!1))return r?()=>{var t;return r()!==!1&&((t=e.current)===null||t===void 0?void 0:t.close())}:()=>{var t;return(t=e.current)===null||t===void 0?void 0:t.close()}}const P="navds-modal__document-body";function _n(e,n,r){k.useEffect(()=>{if(r||!e.current||!n)return;e.current.open&&document.body.classList.add(P);const t=new MutationObserver(()=>{var a;!((a=e.current)===null||a===void 0)&&a.open?document.body.classList.add(P):document.body.classList.remove(P)});return t.observe(e.current,{attributes:!0,attributeFilter:["open"]}),()=>{t.disconnect(),document.body.classList.remove(P)}},[e,n,r])}const O=typeof window<"u"&&(window.HTMLDialogElement===void 0||navigator.userAgent.includes("jsdom"));function Ee(e,n){var r="on"+n.type.toLowerCase();return typeof e[r]=="function"&&e[r](n),e.dispatchEvent(n)}function M(e){for(;e;){if(e.localName==="dialog")return e;e.parentElement?e=e.parentElement:e.parentNode?e=e.parentNode.host:e=null}return null}function Ae(e){for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;e&&e.blur&&e!==document.body&&e.blur()}function On(e,n){for(var r=0;r<e.length;++r)if(e[r]===n)return!0;return!1}function H(e){return!e||!e.hasAttribute("method")?!1:e.getAttribute("method").toLowerCase()==="dialog"}function we(e){var n=["button","input","keygen","select","textarea"],r=n.map(function(l){return l+":not([disabled])"});r.push('[tabindex]:not([disabled]):not([tabindex=""])');var t=e.querySelector(r.join(", "));if(!t&&"attachShadow"in Element.prototype)for(var a=e.querySelectorAll("*"),o=0;o<a.length&&!(a[o].tagName&&a[o].shadowRoot&&(t=we(a[o].shadowRoot),t));o++);return t}function re(e){return e.isConnected||document.body.contains(e)}function Te(e){if(e.submitter)return e.submitter;var n=e.target;if(!(n instanceof HTMLFormElement))return null;var r=s.formSubmitter;if(!r){var t=e.target,a="getRootNode"in t&&t.getRootNode()||document;r=a.activeElement}return!r||r.form!==n?null:r}function Sn(e){if(!e.defaultPrevented){var n=e.target,r=s.imagemapUseValue,t=Te(e);r===null&&t&&(r=t.value);var a=M(n);if(a){var o=t&&t.getAttribute("formmethod")||n.getAttribute("method");o==="dialog"&&(e.preventDefault(),r!=null?a.close(r):a.close())}}}function je(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),e.addEventListener("submit",Sn,!1),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){var n=new MutationObserver(this.maybeHideModal.bind(this));n.observe(e,{attributes:!0,attributeFilter:["open"]})}else{var r=!1,t=(function(){r?this.downgradeModal():this.maybeHideModal(),r=!1}).bind(this),a,o=function(l){if(l.target===e){var d="DOMNodeRemoved";r|=l.type.substr(0,d.length)===d,window.clearTimeout(a),a=window.setTimeout(t,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(l){e.addEventListener(l,o)})}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}je.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&re(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),s.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropMouseEvent_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var n=document.createElement("div");this.dialog_.insertBefore(n,this.dialog_.firstChild),n.tabIndex=-1,n.focus(),this.dialog_.removeChild(n)}var r=document.createEvent("MouseEvents");r.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(r),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),e||(e=we(this.dialog_)),Ae(document.activeElement),e&&e.focus()},updateZIndex:function(e,n){if(e<n)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=n},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!re(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!s.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");this.setOpen(!0),this.openAsModal_=!0,s.needsCentering(this.dialog_)?(s.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),e!==void 0&&(this.dialog_.returnValue=e);var n=new window.CustomEvent("close",{bubbles:!1,cancelable:!1});Ee(this.dialog_,n)}};var s={};s.reposition=function(e){var n=document.body.scrollTop||document.documentElement.scrollTop,r=n+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(n,r)+"px"};s.isInlinePositionSetByStylesheet=function(e){for(var n=0;n<document.styleSheets.length;++n){var r=document.styleSheets[n],t=null;try{t=r.cssRules}catch{}if(t)for(var a=0;a<t.length;++a){var o=t[a],l=null;try{l=document.querySelectorAll(o.selectorText)}catch{}if(!(!l||!On(l,e))){var d=o.style.getPropertyValue("top"),c=o.style.getPropertyValue("bottom");if(d&&d!=="auto"||c&&c!=="auto")return!0}}}return!1};s.needsCentering=function(e){var n=window.getComputedStyle(e);return n.position!=="absolute"||e.style.top!=="auto"&&e.style.top!==""||e.style.bottom!=="auto"&&e.style.bottom!==""?!1:!s.isInlinePositionSetByStylesheet(e)};s.forceRegisterDialog=function(e){if(e.showModal&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),e.localName!=="dialog")throw new Error("Failed to register dialog: The element is not a dialog.");new je(e)};s.registerDialog=function(e){e.showModal||s.forceRegisterDialog(e)};s.DialogManager=function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",(function(n){this.forwardTab_=void 0,n.stopPropagation(),e([])}).bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(n){var r=[];n.forEach(function(t){for(var a=0,o;o=t.removedNodes[a];++a)o instanceof Element&&(o.localName==="dialog"&&r.push(o),r=r.concat(o.querySelectorAll("dialog")))}),r.length&&e(r)}))};s.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})};s.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()};s.DialogManager.prototype.updateStacking=function(){for(var e=this.zIndexHigh_,n=0,r;r=this.pendingDialogStack[n];++n)r.updateZIndex(--e,--e),n===0&&(this.overlay.style.zIndex=--e);var t=this.pendingDialogStack[0];if(t){var a=t.dialog.parentNode||document.body;a.appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)};s.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=M(e);){for(var n=0,r;r=this.pendingDialogStack[n];++n)if(r.dialog===e)return n===0;e=e.parentElement}return!1};s.DialogManager.prototype.handleFocus_=function(e){var n=e.composedPath?e.composedPath()[0]:e.target;if(!this.containedByTopDialog_(n)&&document.activeElement!==document.documentElement&&(e.preventDefault(),e.stopPropagation(),Ae(n),this.forwardTab_!==void 0)){var r=this.pendingDialogStack[0],t=r.dialog,a=t.compareDocumentPosition(n);return a&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?r.focus_():n!==document.documentElement&&document.documentElement.focus()),!1}};s.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,e.keyCode===27){e.preventDefault(),e.stopPropagation();var n=new window.CustomEvent("cancel",{bubbles:!1,cancelable:!0}),r=this.pendingDialogStack[0];r&&Ee(r.dialog,n)&&r.dialog.close()}else e.keyCode===9&&(this.forwardTab_=!e.shiftKey)};s.DialogManager.prototype.checkDOM_=function(e){var n=this.pendingDialogStack.slice();n.forEach(function(r){e.indexOf(r.dialog)!==-1?r.downgradeModal():r.maybeHideModal()})};s.DialogManager.prototype.pushDialog=function(e){var n=(this.zIndexHigh_-this.zIndexLow_)/2-1;return this.pendingDialogStack.length>=n?!1:(this.pendingDialogStack.unshift(e)===1&&this.blockDocument(),this.updateStacking(),!0)};s.DialogManager.prototype.removeDialog=function(e){var n=this.pendingDialogStack.indexOf(e);n!==-1&&(this.pendingDialogStack.splice(n,1),this.pendingDialogStack.length===0&&this.unblockDocument(),this.updateStacking())};O&&(s.dm=new s.DialogManager,s.formSubmitter=null,s.imagemapUseValue=null);if(O){var ae=document.createElement("form");if(ae.setAttribute("method","dialog"),ae.method!=="dialog"){var _=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(_){var qn=_.get;_.get=function(){return H(this)?"dialog":qn.call(this)};var Mn=_.set;_.set=function(e){return typeof e=="string"&&e.toLowerCase()==="dialog"?this.setAttribute("method",e):Mn.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",_)}}document.addEventListener("click",function(e){if(s.formSubmitter=null,s.imagemapUseValue=null,!e.defaultPrevented){var n=e.target;if("composedPath"in e){var r=e.composedPath();n=r.shift()||n}if(!(!n||!H(n.form))){var t=n.type==="submit"&&["button","input"].indexOf(n.localName)>-1;if(!t){if(!(n.localName==="input"&&n.type==="image"))return;s.imagemapUseValue=e.offsetX+","+e.offsetY}var a=M(n);a&&(s.formSubmitter=n)}}},!1),document.addEventListener("submit",function(e){var n=e.target,r=M(n);if(!r){var t=Te(e),a=t&&t.getAttribute("formmethod")||n.getAttribute("method");a==="dialog"&&e.preventDefault()}});var xn=HTMLFormElement.prototype.submit,Rn=function(){if(!H(this))return xn.call(this);var e=M(this);e&&e.close()};HTMLFormElement.prototype.submit=Rn}var Dn=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const oe="navds-modal--polyfilled",x=i.forwardRef((e,n)=>{var r,t,{header:a,children:o,open:l,onBeforeClose:d,onCancel:c,closeOnBackdropClick:m,width:p,placement:h,portal:b,className:A,"aria-labelledby":S,style:u,onClick:w,onMouseDown:T}=e,U=Dn(e,["header","children","open","onBeforeClose","onCancel","closeOnBackdropClick","width","placement","portal","className","aria-labelledby","style","onClick","onMouseDown"]);const g=i.useRef(null),Se=Ve(g,n),$=Ke(),qe=(r=nn())===null||r===void 0?void 0:r.rootElement,E=yn({root:qe}),Me=i.useContext(dn),Y=ve(!1)!==void 0;Y&&!Me&&console.error("Modals should not be nested"),i.useEffect(()=>{O&&g.current&&E&&(s.registerDialog(g.current),g.current.classList.add(oe)),g.current&&E&&(g.current.autofocus=!0)},[E]),i.useEffect(()=>{g.current&&E&&l!==void 0&&(l&&!g.current.open?g.current.showModal():!l&&g.current.open&&g.current.close())},[E,l]),_n(g,E,Y);const W=typeof p=="string"&&["small","medium"].includes(p),xe=V("navds-modal",A,{[oe]:O,"navds-modal--autowidth":!p,[`navds-modal--${p}`]:W,"navds-modal--top":h==="top"&&!O}),Re=Object.assign(Object.assign({},u),W?{}:{width:p}),X=i.useRef({clientX:0,clientY:0}),De=j=>{X.current=j},Z=m&&!O,Pe=j=>{if(j.target!==g.current)return;const Q=g.current.getBoundingClientRect();te(X.current,Q)||te(j,Q)||d!==void 0&&d()===!1||g.current.close()},Be=j=>{d&&d()===!1&&j.preventDefault()},Ne=!S&&!U["aria-label"]&&a?$:S,J=k.createElement("dialog",Object.assign({},U,{ref:Se,className:xe,style:Re,onCancel:K(c,Be),onClick:Z?K(w,Pe):w,onMouseDown:Z?K(T,De):T,"aria-labelledby":Ne}),k.createElement(on,{closeHandler:jn(g,a,d),ref:g},a&&k.createElement(he,null,a.label&&k.createElement(Ie,{className:"navds-modal__label"},a.label),k.createElement(Le,{size:(t=a.size)!==null&&t!==void 0?t:"medium",level:"1",id:$},a.icon&&k.createElement("span",{className:"navds-modal__header-icon"},a.icon),a.heading)),o));return b?E?Qe.createPortal(J,E):null:J});x.Header=he;x.Body=En;x.Footer=wn;const Pn="_image_1vkl5_1",Bn={image:Pn},Nn=(e,n,r,t)=>e===y.TILBAKEKREVING?"FatterVedtakApprovalModal.Tilbakekreving":e===y.TILBAKEKREVING_REVURDERING?"FatterVedtakApprovalModal.TilbakekrevingRevurdering":e===y.KLAGE?"FatterVedtakApprovalModal.ModalDescriptionKlage":e===y.ANKE?"FatterVedtakApprovalModal.ModalDescriptionAnke":t?"FatterVedtakApprovalModal.UendretUtfall":n&&n.type===R.AVSLATT?"FatterVedtakApprovalModal.IkkeInnvilget":r?"FatterVedtakApprovalModal.OpphortVedtak":"FatterVedtakApprovalModal.InnvilgetVedtak",Cn=(e,n)=>n===y.KLAGE?"FatterVedtakApprovalModal.ModalDescriptionKlage":n===y.ANKE?"FatterVedtakApprovalModal.ModalDescriptionAnke":e?"FatterVedtakApprovalModal.ModalDescriptionOpphort":"FatterVedtakApprovalModal.ModalDescriptionApproval",z=e=>e===D.FATTER_VEDTAK,Fn=(e,n,r,t,a,o)=>e?z(n)?Nn(r,t,a,o):"":"FatterVedtakApprovalModal.VedtakReturneresTilSaksbehandler",Vn=e=>z(e)?"FatterVedtakApprovalModal.Innvilget":"",Kn=(e,n,r)=>z(e)?Cn(r,n):"FatterVedtakApprovalModal.ModalDescription",_e=({closeEvent:e,allAksjonspunktApproved:n,behandlingStatusKode:r,behandlingTypeKode:t,behandlingsresultat:a,harSammeResultatSomOriginalBehandling:o})=>{const l=He(),d=!!a&&a.type===R.OPPHOR,c=Fn(n,r,t,a,d,o),m=Vn(r),p=Kn(r,t,d);return f.jsx(x,{width:"small",open:!0,"aria-label":l.formatMessage({id:p}),onClose:e,children:f.jsx(x.Body,{children:f.jsxs(ee,{justify:"space-between",align:"center",children:[f.jsxs(ee,{gap:"2",children:[f.jsx(Ge,{className:Bn.image,title:l.formatMessage({id:m})}),f.jsxs(ze,{gap:"1",children:[f.jsx(Ue,{size:"small",children:f.jsx(I,{id:c})}),f.jsx($e,{size:"small",children:f.jsx(I,{id:"FatterVedtakApprovalModal.GoToSearchPage"})})]})]}),f.jsx(ye,{size:"small",variant:"primary",onClick:e,autoFocus:!0,type:"button",children:f.jsx(I,{id:"FatterVedtakApprovalModal.Ok"})})]})})})};_e.__docgenInfo={description:`FatterVedtakApprovalModal

Denne modalen vises en lightbox etter at en beslutter har godkjent alle aksjonspunkter
med totrinnskontroll. Ved å trykke på knapp blir beslutter tatt tilbake til sokesiden.`,methods:[],displayName:"FatterVedtakApprovalModal",props:{closeEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},allAksjonspunktApproved:{required:!0,tsType:{name:"boolean"},description:""},behandlingsresultat:{required:!1,tsType:{name:"intersection['behandlingsresultat']",raw:"Behandling['behandlingsresultat']"},description:""},behandlingStatusKode:{required:!0,tsType:{name:"string"},description:""},behandlingTypeKode:{required:!0,tsType:{name:"string"},description:""},harSammeResultatSomOriginalBehandling:{required:!1,tsType:{name:"boolean"},description:""}}};const In=Ye(Xe),Oe=({behandling:e,closeEvent:n,allAksjonspunktApproved:r})=>{var t;return f.jsx(We,{value:In,children:f.jsx(_e,{closeEvent:n,allAksjonspunktApproved:r,behandlingsresultat:e.behandlingsresultat,behandlingStatusKode:e.status,behandlingTypeKode:e.type,harSammeResultatSomOriginalBehandling:((t=e.behandlingsresultat)==null?void 0:t.erRevurderingMedUendretUtfall)||!1})})};Oe.__docgenInfo={description:"",methods:[],displayName:"FatterVedtakTotrinnskontrollModalSakIndex",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}>`}]},description:""},closeEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},allAksjonspunktApproved:{required:!0,tsType:{name:"boolean"},description:""}}};const Yn={title:"sak/sak-totrinnskontroll-fatter-vedtak-modal",component:Oe,args:{closeEvent:Ze("button-click")}},B={args:{behandling:{uuid:"1",status:D.FATTER_VEDTAK,type:y.FORSTEGANGSSOKNAD},allAksjonspunktApproved:!0}},N={args:{behandling:{uuid:"1",status:D.FATTER_VEDTAK,type:y.FORSTEGANGSSOKNAD,behandlingsresultat:{type:R.OPPHOR}},allAksjonspunktApproved:!0}},C={args:{behandling:{uuid:"1",status:D.FATTER_VEDTAK,type:y.KLAGE,behandlingsresultat:{type:R.OPPHOR}},allAksjonspunktApproved:!0}},F={args:{behandling:{uuid:"1",status:D.FATTER_VEDTAK,type:y.FORSTEGANGSSOKNAD,behandlingsresultat:{type:R.OPPHOR}},allAksjonspunktApproved:!1}};var ie,se,le;B.parameters={...B.parameters,docs:{...(ie=B.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    behandling: {
      uuid: '1',
      status: BehandlingStatus.FATTER_VEDTAK,
      type: BehandlingType.FORSTEGANGSSOKNAD
    } as BehandlingAppKontekst,
    allAksjonspunktApproved: true
  }
}`,...(le=(se=B.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var de,ue,ge;N.parameters={...N.parameters,docs:{...(de=N.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ge=(ue=N.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};var ce,pe,me;C.parameters={...C.parameters,docs:{...(ce=C.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(me=(pe=C.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var fe,ke,be;F.parameters={...F.parameters,docs:{...(fe=F.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(be=(ke=F.parameters)==null?void 0:ke.docs)==null?void 0:be.source}}};const Wn=["EtterFatterVedtakOgGodkjent","EtterGodkjenning","EtterGodkjenningAvKlage","EtterTilbakesendingTilSaksbehandler"];export{B as EtterFatterVedtakOgGodkjent,N as EtterGodkjenning,C as EtterGodkjenningAvKlage,F as EtterTilbakesendingTilSaksbehandler,Wn as __namedExportsOrder,Yn as default};
