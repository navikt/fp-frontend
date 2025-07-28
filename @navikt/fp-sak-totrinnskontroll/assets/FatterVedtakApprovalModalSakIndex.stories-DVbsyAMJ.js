import{r as u,c as z,R as Ve,u as O,a as c,b as Be,d as De,j as k,B as v,e as V,P as Me,f as Ke}from"./iframe-DhHPGAjs.js";import{u as qe,a as Ie,L as se,R as xe,B as de,o as Fe,E as Pe,b as Ge,c as ue,S as Ce,d as Le,e as He,f as C,D as ze,H as Ue,r as Ye,g as B,h as ee,i as $e,V as We,M as L,m as Je}from"./nb_NO-BZ8Zvr5R.js";import"./index-DPAdzaxO.js";var Xe=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const Ze=u.forwardRef((e,n)=>{var{title:r,titleId:t}=e,a=Xe(e,["title","titleId"]);let o=qe();return o=r?t||"title-"+o:void 0,u.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":o},a),r?u.createElement("title",{id:o},r):null,u.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9 2.25a.75.75 0 0 1 .75.75v1.25h4.5V3a.75.75 0 0 1 1.5 0v1.25h3.75c.69 0 1.25.56 1.25 1.25v13c0 .69-.56 1.25-1.25 1.25h-15c-.69 0-1.25-.56-1.25-1.25v-13c0-.69.56-1.25 1.25-1.25h3.75V3A.75.75 0 0 1 9 2.25M15.75 7a.75.75 0 0 1-1.5 0V5.75h-4.5V7a.75.75 0 0 1-1.5 0V5.75h-3.5v3.5h14.5v-3.5h-3.5zm-11 11.25v-7.5h14.5v7.5zm2-5.25a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM10.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM6.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))}),[Qe,ge]=z({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"});function en(){return typeof window<"u"}function nn(e){var n;return(e==null||(n=e.ownerDocument)==null?void 0:n.defaultView)||window}function tn(e){return en()?e instanceof Element||e instanceof nn(e).Element:!1}var G=typeof document<"u"?u.useLayoutEffect:u.useEffect;const rn={...Ve};let ne=!1,an=0;const te=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+an++;function on(){const[e,n]=u.useState(()=>ne?te():void 0);return G(()=>{e==null&&n(te())},[]),u.useEffect(()=>{ne=!0},[]),e}const ln=rn.useId,sn=ln||on;function dn(e){return"data-floating-ui-"+e}const un=u.createContext(null),re=dn("portal");function gn(e){e===void 0&&(e={});const{id:n,root:r}=e,t=sn(),a=cn(),[o,s]=u.useState(null),i=u.useRef(null);return G(()=>()=>{o?.remove(),queueMicrotask(()=>{i.current=null})},[o]),G(()=>{if(!t||i.current)return;const g=n?document.getElementById(n):null;if(!g)return;const p=document.createElement("div");p.id=t,p.setAttribute(re,""),g.appendChild(p),i.current=p,s(p)},[n,t]),G(()=>{if(r===null||!t||i.current)return;let g=r||a?.portalNode;g&&!tn(g)&&(g=g.current),g=g||document.body;let p=null;n&&(p=document.createElement("div"),p.id=n,g.appendChild(p));const f=document.createElement("div");f.id=t,f.setAttribute(re,""),g=p||g,g.appendChild(f),i.current=f,s(f)},[n,r,t,a]),o}const cn=()=>u.useContext(un),[Gn,pn]=z();var mn=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const[Cn,ce]=z({errorMessage:"useDateInputContext must be used with DateInputContext"}),pe=u.forwardRef((e,n)=>{const{className:r,hideLabel:t=!1,label:a,description:o,variant:s="datepicker",setAnchorRef:i}=e,g=mn(e,["className","hideLabel","label","description","variant","setAnchorRef"]),p=u.useRef(null),f=pn().translate,{cn:b}=O(),A=s==="datepicker",D={prefix:A?"datepicker-input":"monthpicker-input",iconTitle:{open:A?"openDatePicker":"openMonthPicker",close:A?"closeDatePicker":"closeMonthPicker"}},m=ce(),{inputProps:E,size:h="medium",inputDescriptionId:M,errorId:K,showErrorMsg:_,hasError:N,readOnly:d}=Ie(e,D.prefix);return c.createElement("div",{className:b(r,"navds-form-field",`navds-form-field--${h}`,"navds-date__field",{"navds-text-field--error":N,"navds-date__field--error":N,"navds-form-field--disabled":!!E.disabled,"navds-text-field--disabled":!!E.disabled,"navds-form-field--readonly":d,"navds-text-field--readonly":d,"navds-date__field--readonly":d})},c.createElement(se,{htmlFor:E.id,size:h,className:b("navds-form-field__label",{"navds-sr-only":t})},d&&c.createElement(xe,null),a),!!o&&c.createElement(de,{as:"div",className:b("navds-form-field__description",{"navds-sr-only":t}),id:M,size:h},o),c.createElement("div",{className:b("navds-date__field-wrapper")},c.createElement("input",Object.assign({ref:n},Fe(g,["error","errorId","size"]),E,{autoComplete:"off","aria-controls":m?.open?m.ariaId:void 0,readOnly:d,className:b("navds-date__field-input","navds-text-field__input","navds-body-short",`navds-body-short--${h}`),size:A?11:14})),c.createElement("button",{disabled:E.disabled||d,tabIndex:d||m?.open?-1:0,onClick:()=>{m?.onOpen(),i?.(p.current)},type:"button",className:b("navds-date__field-button"),ref:p},c.createElement(Ze,{title:f(D.iconTitle[m?.open?"close":"open"])}))),c.createElement("div",{className:b("navds-form-field__error"),id:K,"aria-relevant":"additions removals","aria-live":"polite"},_&&c.createElement(Pe,{size:h,showIcon:!0},e.error)))});u.forwardRef((e,n)=>c.createElement(pe,Object.assign({},e,{ref:n})));u.forwardRef((e,n)=>c.createElement(pe,Object.assign({},e,{variant:"monthpicker",ref:n})));var fn=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const kn=u.forwardRef((e,n)=>{var{className:r}=e,t=fn(e,["className"]);const{cn:a}=O();return c.createElement("div",Object.assign({},t,{ref:n,className:a("navds-modal__body",r)}))});var vn=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const bn=u.forwardRef((e,n)=>{var{className:r}=e,t=vn(e,["className"]);const{cn:a}=O();return c.createElement("div",Object.assign({},t,{ref:n,className:a("navds-modal__footer",r)}))});var hn=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const me=u.forwardRef((e,n)=>{var{children:r,className:t,closeButton:a=!0}=e,o=hn(e,["children","className","closeButton"]);const{cn:s}=O(),i=ge(),g=Ge("global");return c.createElement("div",Object.assign({},o,{ref:n,className:s("navds-modal__header",t)}),i.closeHandler&&a&&c.createElement(ue,{type:"button",className:s("navds-modal__button"),size:"small",variant:"tertiary-neutral",onKeyDown:p=>{["Enter"," "].includes(p.key)&&p.repeat&&p.preventDefault()},onClick:i.closeHandler,icon:c.createElement(Ce,{title:g("close")})}),r)}),ae=({clientX:e,clientY:n},{left:r,top:t,right:a,bottom:o})=>!(e<r||n<t||e>a||n>o);function yn(e,n,r){if(!(n&&n.closeButton===!1))return r?()=>{var t;return r()!==!1&&((t=e.current)===null||t===void 0?void 0:t.close())}:()=>{var t;return(t=e.current)===null||t===void 0?void 0:t.close()}}const q="navds-modal__document-body";function En(e,n,r){c.useEffect(()=>{if(r||!e.current||!n)return;e.current.open&&document.body.classList.add(q);const t=new MutationObserver(()=>{var a;!((a=e.current)===null||a===void 0)&&a.open?document.body.classList.add(q):document.body.classList.remove(q)});return t.observe(e.current,{attributes:!0,attributeFilter:["open"]}),()=>{t.disconnect(),document.body.classList.remove(q)}},[e,n,r])}const S=typeof window<"u"&&(window.HTMLDialogElement===void 0||navigator.userAgent.includes("jsdom"));function fe(e,n){var r="on"+n.type.toLowerCase();return typeof e[r]=="function"&&e[r](n),e.dispatchEvent(n)}function R(e){for(;e;){if(e.localName==="dialog")return e;e.parentElement?e=e.parentElement:e.parentNode?e=e.parentNode.host:e=null}return null}function ke(e){for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;e&&e.blur&&e!==document.body&&e.blur()}function An(e,n){for(var r=0;r<e.length;++r)if(e[r]===n)return!0;return!1}function H(e){return!e||!e.hasAttribute("method")?!1:e.getAttribute("method").toLowerCase()==="dialog"}function ve(e){var n=["button","input","keygen","select","textarea"],r=n.map(function(s){return s+":not([disabled])"});r.push('[tabindex]:not([disabled]):not([tabindex=""])');var t=e.querySelector(r.join(", "));if(!t&&"attachShadow"in Element.prototype)for(var a=e.querySelectorAll("*"),o=0;o<a.length&&!(a[o].tagName&&a[o].shadowRoot&&(t=ve(a[o].shadowRoot),t));o++);return t}function oe(e){return e.isConnected||document.body.contains(e)}function be(e){if(e.submitter)return e.submitter;var n=e.target;if(!(n instanceof HTMLFormElement))return null;var r=l.formSubmitter;if(!r){var t=e.target,a="getRootNode"in t&&t.getRootNode()||document;r=a.activeElement}return!r||r.form!==n?null:r}function _n(e){if(!e.defaultPrevented){var n=e.target,r=l.imagemapUseValue,t=be(e);r===null&&t&&(r=t.value);var a=R(n);if(a){var o=t&&t.getAttribute("formmethod")||n.getAttribute("method");o==="dialog"&&(e.preventDefault(),r!=null?a.close(r):a.close())}}}function he(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),e.addEventListener("submit",_n,!1),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){var n=new MutationObserver(this.maybeHideModal.bind(this));n.observe(e,{attributes:!0,attributeFilter:["open"]})}else{var r=!1,t=(function(){r?this.downgradeModal():this.maybeHideModal(),r=!1}).bind(this),a,o=function(s){if(s.target===e){var i="DOMNodeRemoved";r|=s.type.substr(0,i.length)===i,window.clearTimeout(a),a=window.setTimeout(t,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(s){e.addEventListener(s,o)})}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}he.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&oe(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),l.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropMouseEvent_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var n=document.createElement("div");this.dialog_.insertBefore(n,this.dialog_.firstChild),n.tabIndex=-1,n.focus(),this.dialog_.removeChild(n)}var r=document.createEvent("MouseEvents");r.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(r),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),e||(e=ve(this.dialog_)),ke(document.activeElement),e&&e.focus()},updateZIndex:function(e,n){if(e<n)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=n},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!oe(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!l.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");this.setOpen(!0),this.openAsModal_=!0,l.needsCentering(this.dialog_)?(l.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),e!==void 0&&(this.dialog_.returnValue=e);var n=new window.CustomEvent("close",{bubbles:!1,cancelable:!1});fe(this.dialog_,n)}};var l={};l.reposition=function(e){var n=document.body.scrollTop||document.documentElement.scrollTop,r=n+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(n,r)+"px"};l.isInlinePositionSetByStylesheet=function(e){for(var n=0;n<document.styleSheets.length;++n){var r=document.styleSheets[n],t=null;try{t=r.cssRules}catch{}if(t)for(var a=0;a<t.length;++a){var o=t[a],s=null;try{s=document.querySelectorAll(o.selectorText)}catch{}if(!(!s||!An(s,e))){var i=o.style.getPropertyValue("top"),g=o.style.getPropertyValue("bottom");if(i&&i!=="auto"||g&&g!=="auto")return!0}}}return!1};l.needsCentering=function(e){var n=window.getComputedStyle(e);return n.position!=="absolute"||e.style.top!=="auto"&&e.style.top!==""||e.style.bottom!=="auto"&&e.style.bottom!==""?!1:!l.isInlinePositionSetByStylesheet(e)};l.forceRegisterDialog=function(e){if(e.showModal&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),e.localName!=="dialog")throw new Error("Failed to register dialog: The element is not a dialog.");new he(e)};l.registerDialog=function(e){e.showModal||l.forceRegisterDialog(e)};l.DialogManager=function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",(function(n){this.forwardTab_=void 0,n.stopPropagation(),e([])}).bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(n){var r=[];n.forEach(function(t){for(var a=0,o;o=t.removedNodes[a];++a)o instanceof Element&&(o.localName==="dialog"&&r.push(o),r=r.concat(o.querySelectorAll("dialog")))}),r.length&&e(r)}))};l.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})};l.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()};l.DialogManager.prototype.updateStacking=function(){for(var e=this.zIndexHigh_,n=0,r;r=this.pendingDialogStack[n];++n)r.updateZIndex(--e,--e),n===0&&(this.overlay.style.zIndex=--e);var t=this.pendingDialogStack[0];if(t){var a=t.dialog.parentNode||document.body;a.appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)};l.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=R(e);){for(var n=0,r;r=this.pendingDialogStack[n];++n)if(r.dialog===e)return n===0;e=e.parentElement}return!1};l.DialogManager.prototype.handleFocus_=function(e){var n=e.composedPath?e.composedPath()[0]:e.target;if(!this.containedByTopDialog_(n)&&document.activeElement!==document.documentElement&&(e.preventDefault(),e.stopPropagation(),ke(n),this.forwardTab_!==void 0)){var r=this.pendingDialogStack[0],t=r.dialog,a=t.compareDocumentPosition(n);return a&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?r.focus_():n!==document.documentElement&&document.documentElement.focus()),!1}};l.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,e.keyCode===27){e.preventDefault(),e.stopPropagation();var n=new window.CustomEvent("cancel",{bubbles:!1,cancelable:!0}),r=this.pendingDialogStack[0];r&&fe(r.dialog,n)&&r.dialog.close()}else e.keyCode===9&&(this.forwardTab_=!e.shiftKey)};l.DialogManager.prototype.checkDOM_=function(e){var n=this.pendingDialogStack.slice();n.forEach(function(r){e.indexOf(r.dialog)!==-1?r.downgradeModal():r.maybeHideModal()})};l.DialogManager.prototype.pushDialog=function(e){var n=(this.zIndexHigh_-this.zIndexLow_)/2-1;return this.pendingDialogStack.length>=n?!1:(this.pendingDialogStack.unshift(e)===1&&this.blockDocument(),this.updateStacking(),!0)};l.DialogManager.prototype.removeDialog=function(e){var n=this.pendingDialogStack.indexOf(e);n!==-1&&(this.pendingDialogStack.splice(n,1),this.pendingDialogStack.length===0&&this.unblockDocument(),this.updateStacking())};S&&(l.dm=new l.DialogManager,l.formSubmitter=null,l.imagemapUseValue=null);if(S){var le=document.createElement("form");if(le.setAttribute("method","dialog"),le.method!=="dialog"){var w=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(w){var Tn=w.get;w.get=function(){return H(this)?"dialog":Tn.call(this)};var wn=w.set;w.set=function(e){return typeof e=="string"&&e.toLowerCase()==="dialog"?this.setAttribute("method",e):wn.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",w)}}document.addEventListener("click",function(e){if(l.formSubmitter=null,l.imagemapUseValue=null,!e.defaultPrevented){var n=e.target;if("composedPath"in e){var r=e.composedPath();n=r.shift()||n}if(!(!n||!H(n.form))){var t=n.type==="submit"&&["button","input"].indexOf(n.localName)>-1;if(!t){if(!(n.localName==="input"&&n.type==="image"))return;l.imagemapUseValue=e.offsetX+","+e.offsetY}var a=R(n);a&&(l.formSubmitter=n)}}},!1),document.addEventListener("submit",function(e){var n=e.target,r=R(n);if(!r){var t=be(e),a=t&&t.getAttribute("formmethod")||n.getAttribute("method");a==="dialog"&&e.preventDefault()}});var Sn=HTMLFormElement.prototype.submit,Nn=function(){if(!H(this))return Sn.call(this);var e=R(this);e&&e.close()};HTMLFormElement.prototype.submit=Nn}var Rn=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const j=u.forwardRef((e,n)=>{var r,t,{header:a,children:o,open:s,onBeforeClose:i,onCancel:g,closeOnBackdropClick:p,width:f,placement:b,portal:A,className:D,"aria-labelledby":m,style:E,onClick:h,onMouseDown:M}=e,K=Rn(e,["header","children","open","onBeforeClose","onCancel","closeOnBackdropClick","width","placement","portal","className","aria-labelledby","style","onClick","onMouseDown"]);const{cn:_}=O(),N=u.useRef(_("navds-modal--polyfilled")),d=u.useRef(null),Ae=Be(d,n),Y=Le(),_e=(r=He())===null||r===void 0?void 0:r.rootElement,y=gn({root:_e}),Te=ce(!1),$=ge(!1)!==void 0;$&&!Te&&console.error("Modals should not be nested"),u.useEffect(()=>{S&&d.current&&y&&(l.registerDialog(d.current),d.current.classList.add(N.current)),d.current&&y&&(d.current.autofocus=!0)},[y]),u.useEffect(()=>{d.current&&y&&s!==void 0&&(s&&!d.current.open?d.current.showModal():!s&&d.current.open&&d.current.close())},[y,s]),En(d,y,$);const W=typeof f=="string"&&["small","medium"].includes(f),we=_("navds-modal",D,{[N.current]:S,"navds-modal--autowidth":!f,[`navds-modal--${f}`]:W,"navds-modal--top":b==="top"&&!S}),Se=Object.assign(Object.assign({},E),W?{}:{width:f}),J=u.useRef({clientX:0,clientY:0}),Ne=T=>{J.current=T},X=p&&!S,Re=T=>{if(T.target!==d.current)return;const Q=d.current.getBoundingClientRect();ae(J.current,Q)||ae(T,Q)||i!==void 0&&i()===!1||d.current.close()},je=T=>{i&&i()===!1&&T.preventDefault()},Oe=!m&&!K["aria-label"]&&a?Y:m,Z=c.createElement("dialog",Object.assign({},K,{ref:Ae,className:we,style:Se,onCancel:C(g,je),onClick:X?C(h,Re):h,onMouseDown:X?C(M,Ne):M,"aria-labelledby":Oe}),c.createElement(Qe,{closeHandler:yn(d,a,i),ref:d},a&&c.createElement(me,null,a.label&&c.createElement(ze,{className:_("navds-modal__label")},a.label),c.createElement(Ue,{size:(t=a.size)!==null&&t!==void 0?t:"medium",level:"1",id:Y},a.icon&&c.createElement("span",{className:_("navds-modal__header-icon")},a.icon),a.heading)),o));return A?y?Ye.createPortal(Z,y):null:Z});j.Header=me;j.Body=kn;j.Footer=bn;const jn="_image_ouewb_1",On="_modal_ouewb_9",ie={image:jn,modal:On},Vn=(e,n,r,t)=>e===v.TILBAKEKREVING?"FatterVedtakApprovalModal.Tilbakekreving":e===v.TILBAKEKREVING_REVURDERING?"FatterVedtakApprovalModal.TilbakekrevingRevurdering":e===v.KLAGE?"FatterVedtakApprovalModal.ModalDescriptionKlage":e===v.ANKE?"FatterVedtakApprovalModal.ModalDescriptionAnke":t?"FatterVedtakApprovalModal.UendretUtfall":n&&n.type===B.AVSLATT?"FatterVedtakApprovalModal.IkkeInnvilget":r?"FatterVedtakApprovalModal.OpphortVedtak":"FatterVedtakApprovalModal.InnvilgetVedtak",Bn=(e,n)=>n===v.KLAGE?"FatterVedtakApprovalModal.ModalDescriptionKlage":n===v.ANKE?"FatterVedtakApprovalModal.ModalDescriptionAnke":e?"FatterVedtakApprovalModal.ModalDescriptionOpphort":"FatterVedtakApprovalModal.ModalDescriptionApproval",U=e=>e===V.FATTER_VEDTAK,Dn=(e,n,r,t,a,o)=>e?U(n)?Vn(r,t,a,o):"":"FatterVedtakApprovalModal.VedtakReturneresTilSaksbehandler",Mn=e=>U(e)?"FatterVedtakApprovalModal.Innvilget":"",Kn=(e,n,r)=>U(e)?Bn(r,n):"FatterVedtakApprovalModal.ModalDescription",ye=({closeEvent:e,allAksjonspunktApproved:n,behandlingStatusKode:r,behandlingTypeKode:t,behandlingsresultat:a,harSammeResultatSomOriginalBehandling:o})=>{const s=De(),i=!!a&&a.type===B.OPPHOR,g=Dn(n,r,t,a,i,o),p=Mn(r),f=Kn(r,t,i);return k.jsx(j,{className:ie.modal,open:!0,"aria-label":s.formatMessage({id:f}),onClose:e,children:k.jsx(j.Body,{children:k.jsxs(ee,{justify:"space-between",align:"center",wrap:!1,children:[k.jsxs(ee,{gap:"2",children:[k.jsx($e,{className:ie.image,title:s.formatMessage({id:p})}),k.jsxs(We,{gap:"1",children:[k.jsx(se,{size:"small",children:k.jsx(L,{id:g})}),k.jsx(de,{size:"small",children:k.jsx(L,{id:"FatterVedtakApprovalModal.GoToSearchPage"})})]})]}),k.jsx(ue,{size:"small",variant:"primary",onClick:e,autoFocus:!0,type:"button",children:k.jsx(L,{id:"FatterVedtakApprovalModal.Ok"})})]})})})};ye.__docgenInfo={description:`FatterVedtakApprovalModal

Denne modalen vises en lightbox etter at en beslutter har godkjent alle aksjonspunkter
med totrinnskontroll. Ved å trykke på knapp blir beslutter tatt tilbake til sokesiden.`,methods:[],displayName:"FatterVedtakApprovalModal",props:{closeEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},allAksjonspunktApproved:{required:!0,tsType:{name:"boolean"},description:""},behandlingsresultat:{required:!1,tsType:{name:"intersection['behandlingsresultat']",raw:"Behandling['behandlingsresultat']"},description:""},behandlingStatusKode:{required:!0,tsType:{name:"BehandlingStatus"},description:""},behandlingTypeKode:{required:!0,tsType:{name:"BehandlingType"},description:""},harSammeResultatSomOriginalBehandling:{required:!1,tsType:{name:"boolean"},description:""}}};const qn=Ke(Je),Ee=({behandling:e,closeEvent:n,allAksjonspunktApproved:r})=>k.jsx(Me,{value:qn,children:k.jsx(ye,{closeEvent:n,allAksjonspunktApproved:r,behandlingsresultat:e.behandlingsresultat,behandlingStatusKode:e.status,behandlingTypeKode:e.type,harSammeResultatSomOriginalBehandling:e.behandlingsresultat?.erRevurderingMedUendretUtfall||!1})});Ee.__docgenInfo={description:"",methods:[],displayName:"FatterVedtakTotrinnskontrollModalSakIndex",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
  status: BehandlingStatus;
  type: BehandlingType;
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
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"BehandlingStatus",required:!0}},{key:"type",value:{name:"BehandlingType",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:"BehandlingResultatType | BehandlingResultatTypeTilbakekreving",elements:[{name:"BehandlingResultatType"},{name:"BehandlingResultatTypeTilbakekreving"}],required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"Avslagsarsak | null",elements:[{name:"Avslagsarsak"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"KonsekvensForYtelsen"}],raw:"KonsekvensForYtelsen[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
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
  behandlingKanMerkesHaster: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}`,signature:{properties:[{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"behandlingKanMerkesHaster",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"VergeBehandlingmenyValg",required:!0}}]}}],raw:`Readonly<{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  behandlingKanMerkesHaster: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}>`,required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig: boolean;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"boolean",required:!0}}]}}],raw:"Brevmal[]",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: SkjermlenkeType;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: VurderÅrsak[];
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
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"boolean",required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]",required:!1}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
  vurderPaNyttArsaker?: VurderÅrsak[];
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
  skjermlenkeType: SkjermlenkeType;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"union",raw:"Aksjonspunkt | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"AksjonspunktKode",required:!0}},{key:"status",value:{name:"AksjonspunktStatus",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"VilkarType",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"VurderÅrsak[] | null",elements:[{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"AksjonspunktType",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
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
}>`}]},description:""},closeEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},allAksjonspunktApproved:{required:!0,tsType:{name:"boolean"},description:""}}};const{action:In}=__STORYBOOK_MODULE_ACTIONS__,Ln={title:"sak/sak-totrinnskontroll-fatter-vedtak-modal",component:Ee,args:{closeEvent:In("button-click")}},I={args:{behandling:{uuid:"1",status:V.FATTER_VEDTAK,type:v.FORSTEGANGSSOKNAD},allAksjonspunktApproved:!0}},x={args:{behandling:{uuid:"1",status:V.FATTER_VEDTAK,type:v.FORSTEGANGSSOKNAD,behandlingsresultat:{type:B.OPPHOR}},allAksjonspunktApproved:!0}},F={args:{behandling:{uuid:"1",status:V.FATTER_VEDTAK,type:v.KLAGE,behandlingsresultat:{type:B.OPPHOR}},allAksjonspunktApproved:!0}},P={args:{behandling:{uuid:"1",status:V.FATTER_VEDTAK,type:v.FORSTEGANGSSOKNAD,behandlingsresultat:{type:B.OPPHOR}},allAksjonspunktApproved:!1}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    behandling: {
      uuid: '1',
      status: BehandlingStatus.FATTER_VEDTAK,
      type: BehandlingType.FORSTEGANGSSOKNAD
    } as BehandlingAppKontekst,
    allAksjonspunktApproved: true
  }
}`,...I.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}};const Hn=["EtterFatterVedtakOgGodkjent","EtterGodkjenning","EtterGodkjenningAvKlage","EtterTilbakesendingTilSaksbehandler"];export{I as EtterFatterVedtakOgGodkjent,x as EtterGodkjenning,F as EtterGodkjenningAvKlage,P as EtterTilbakesendingTilSaksbehandler,Hn as __namedExportsOrder,Ln as default};
