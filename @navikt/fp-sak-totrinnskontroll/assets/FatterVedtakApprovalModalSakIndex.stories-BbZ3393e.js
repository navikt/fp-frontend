import{u as Fe,a as Ve,L as se,R as Pe,B as de,o as Ge,E as Oe,b as we,c as me,S as Be,d as Me,e as je,f as q,D as Ue,H as He,r as qe,g as I,h as ne,i as xe,V as Ce,M as x,m as Ye}from"./nb_NO-BqZiVEVF.js";import{r as v,R as o,c as Y,a as Je,u as K,b as ze,d as $e,j as T,B as c,e as F,P as We,f as Xe}from"./iframe-376Cs1ep.js";import"./index-BS2dqdRK.js";import"./preload-helper-PPVm8Dsz.js";var Ze=function(e,n){var l={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(l[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(l[a[t]]=e[a[t]]);return l};const Qe=v.forwardRef((e,n)=>{var{title:l,titleId:a}=e,t=Ze(e,["title","titleId"]);let r=Fe();return r=l?a||"title-"+r:void 0,o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":r},t),l?o.createElement("title",{id:r},l):null,o.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9 2.25a.75.75 0 0 1 .75.75v1.25h4.5V3a.75.75 0 0 1 1.5 0v1.25h3.75c.69 0 1.25.56 1.25 1.25v13c0 .69-.56 1.25-1.25 1.25h-15c-.69 0-1.25-.56-1.25-1.25v-13c0-.69.56-1.25 1.25-1.25h3.75V3A.75.75 0 0 1 9 2.25M15.75 7a.75.75 0 0 1-1.5 0V5.75h-4.5V7a.75.75 0 0 1-1.5 0V5.75h-3.5v3.5h14.5v-3.5h-3.5zm-11 11.25v-7.5h14.5v7.5zm2-5.25a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM10.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM6.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))}),[en,Ee]=Y({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"});function nn(){return typeof window<"u"}function an(e){var n;return(e==null||(n=e.ownerDocument)==null?void 0:n.defaultView)||window}function ln(e){return nn()?e instanceof Element||e instanceof an(e).Element:!1}var H=typeof document<"u"?v.useLayoutEffect:v.useEffect;const tn={...Je};let ae=!1,rn=0;const le=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+rn++;function un(){const[e,n]=v.useState(()=>ae?le():void 0);return H(()=>{e==null&&n(le())},[]),v.useEffect(()=>{ae=!0},[]),e}const on=tn.useId,sn=on||un;function dn(e){return"data-floating-ui-"+e}const mn=v.createContext(null),te=dn("portal");function En(e){e===void 0&&(e={});const{id:n,root:l}=e,a=sn(),t=vn(),[r,s]=v.useState(null),u=v.useRef(null);return H(()=>()=>{r?.remove(),queueMicrotask(()=>{u.current=null})},[r]),H(()=>{if(!a||u.current)return;const m=n?document.getElementById(n):null;if(!m)return;const E=document.createElement("div");E.id=a,E.setAttribute(te,""),m.appendChild(E),u.current=E,s(E)},[n,a]),H(()=>{if(l===null||!a||u.current)return;let m=l||t?.portalNode;m&&!ln(m)&&(m=m.current),m=m||document.body;let E=null;n&&(E=document.createElement("div"),E.id=n,m.appendChild(E));const g=document.createElement("div");g.id=a,g.setAttribute(te,""),m=E||m,m.appendChild(g),u.current=g,s(g)},[n,l,a,t]),r}const vn=()=>v.useContext(mn),[qn,_n]=Y();var gn=function(e,n){var l={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(l[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(l[a[t]]=e[a[t]]);return l};const[xn,ve]=Y({errorMessage:"useDateInputContext must be used with DateInputContext"}),_e=v.forwardRef((e,n)=>{const{className:l,hideLabel:a=!1,label:t,description:r,variant:s="datepicker",setAnchorRef:u}=e,m=gn(e,["className","hideLabel","label","description","variant","setAnchorRef"]),E=v.useRef(null),g=_n().translate,{cn:p}=K(),f=s==="datepicker",V={prefix:f?"datepicker-input":"monthpicker-input",iconTitle:{open:f?"openDatePicker":"openMonthPicker",close:f?"closeDatePicker":"closeMonthPicker"}},_=ve(),{inputProps:A,size:N="medium",inputDescriptionId:P,errorId:G,showErrorMsg:k,hasError:y,readOnly:d}=Ve(e,V.prefix);return o.createElement("div",{className:p(l,"navds-form-field",`navds-form-field--${N}`,"navds-date__field",{"navds-text-field--error":y,"navds-date__field--error":y,"navds-form-field--disabled":!!A.disabled,"navds-text-field--disabled":!!A.disabled,"navds-form-field--readonly":d,"navds-text-field--readonly":d,"navds-date__field--readonly":d})},o.createElement(se,{htmlFor:A.id,size:N,className:p("navds-form-field__label",{"navds-sr-only":a})},d&&o.createElement(Pe,null),t),!!r&&o.createElement(de,{as:"div",className:p("navds-form-field__description",{"navds-sr-only":a}),id:P,size:N},r),o.createElement("div",{className:p("navds-date__field-wrapper")},o.createElement("input",Object.assign({ref:n},Ge(m,["error","errorId","size"]),A,{autoComplete:"off","aria-controls":_?.open?_.ariaId:void 0,readOnly:d,className:p("navds-date__field-input","navds-text-field__input","navds-body-short",`navds-body-short--${N}`),size:f?11:14})),o.createElement("button",{disabled:A.disabled||d,tabIndex:d||_?.open?-1:0,onClick:()=>{_?.onOpen(),u?.(E.current)},type:"button",className:p("navds-date__field-button"),ref:E},o.createElement(Qe,{title:g(V.iconTitle[_?.open?"close":"open"])}))),o.createElement("div",{className:p("navds-form-field__error"),id:G,"aria-relevant":"additions removals","aria-live":"polite"},k&&o.createElement(Oe,{size:N,showIcon:!0},e.error)))});v.forwardRef((e,n)=>o.createElement(_e,Object.assign({},e,{ref:n})));v.forwardRef((e,n)=>o.createElement(_e,Object.assign({},e,{variant:"monthpicker",ref:n})));var Tn=function(e,n){var l={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(l[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(l[a[t]]=e[a[t]]);return l};const cn=v.forwardRef((e,n)=>{var{className:l}=e,a=Tn(e,["className"]);const{cn:t}=K();return o.createElement("div",Object.assign({},a,{ref:n,className:t("navds-modal__body",l)}))});var pn=function(e,n){var l={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(l[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(l[a[t]]=e[a[t]]);return l};const Nn=v.forwardRef((e,n)=>{var{className:l}=e,a=pn(e,["className"]);const{cn:t}=K();return o.createElement("div",Object.assign({},a,{ref:n,className:t("navds-modal__footer",l)}))});var Rn=function(e,n){var l={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(l[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(l[a[t]]=e[a[t]]);return l};const ge=v.forwardRef((e,n)=>{var{children:l,className:a,closeButton:t=!0}=e,r=Rn(e,["children","className","closeButton"]);const{cn:s}=K(),u=Ee(),m=we("global");return o.createElement("div",Object.assign({},r,{ref:n,className:s("navds-modal__header",a)}),u.closeHandler&&t&&o.createElement(me,{type:"button",className:s("navds-modal__button"),size:"small",variant:"tertiary-neutral",onKeyDown:E=>{["Enter"," "].includes(E.key)&&E.repeat&&E.preventDefault()},onClick:u.closeHandler,icon:o.createElement(Be,{title:m("close")})}),l)}),re=({clientX:e,clientY:n},{left:l,top:a,right:t,bottom:r})=>!(e<l||n<a||e>t||n>r);function An(e,n,l){if(!(n&&n.closeButton===!1))return l?()=>{var a;return l()!==!1&&((a=e.current)===null||a===void 0?void 0:a.close())}:()=>{var a;return(a=e.current)===null||a===void 0?void 0:a.close()}}const O="navds-modal__document-body",w="aksel-modal__document-body";function fn(e,n,l){o.useEffect(()=>{if(l||!e.current||!n)return;e.current.open&&document.body.classList.add(w,O);const a=new MutationObserver(()=>{var t;!((t=e.current)===null||t===void 0)&&t.open?document.body.classList.add(w,O):document.body.classList.remove(w,O)});return a.observe(e.current,{attributes:!0,attributeFilter:["open"]}),()=>{a.disconnect(),document.body.classList.remove(w,O)}},[e,n,l])}const S=typeof window<"u"&&(window.HTMLDialogElement===void 0||navigator.userAgent.includes("jsdom"));function Te(e,n){var l="on"+n.type.toLowerCase();return typeof e[l]=="function"&&e[l](n),e.dispatchEvent(n)}function L(e){for(;e;){if(e.localName==="dialog")return e;e.parentElement?e=e.parentElement:e.parentNode?e=e.parentNode.host:e=null}return null}function ce(e){for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;e&&e.blur&&e!==document.body&&e.blur()}function kn(e,n){for(var l=0;l<e.length;++l)if(e[l]===n)return!0;return!1}function C(e){return!e||!e.hasAttribute("method")?!1:e.getAttribute("method").toLowerCase()==="dialog"}function pe(e){var n=["button","input","keygen","select","textarea"],l=n.map(function(s){return s+":not([disabled])"});l.push('[tabindex]:not([disabled]):not([tabindex=""])');var a=e.querySelector(l.join(", "));if(!a&&"attachShadow"in Element.prototype)for(var t=e.querySelectorAll("*"),r=0;r<t.length&&!(t[r].tagName&&t[r].shadowRoot&&(a=pe(t[r].shadowRoot),a));r++);return a}function ie(e){return e.isConnected||document.body.contains(e)}function Ne(e){if(e.submitter)return e.submitter;var n=e.target;if(!(n instanceof HTMLFormElement))return null;var l=i.formSubmitter;if(!l){var a=e.target,t="getRootNode"in a&&a.getRootNode()||document;l=t.activeElement}return!l||l.form!==n?null:l}function bn(e){if(!e.defaultPrevented){var n=e.target,l=i.imagemapUseValue,a=Ne(e);l===null&&a&&(l=a.value);var t=L(n);if(t){var r=a&&a.getAttribute("formmethod")||n.getAttribute("method");r==="dialog"&&(e.preventDefault(),l!=null?t.close(l):t.close())}}}function Re(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),e.addEventListener("submit",bn,!1),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){var n=new MutationObserver(this.maybeHideModal.bind(this));n.observe(e,{attributes:!0,attributeFilter:["open"]})}else{var l=!1,a=(function(){l?this.downgradeModal():this.maybeHideModal(),l=!1}).bind(this),t,r=function(s){if(s.target===e){var u="DOMNodeRemoved";l|=s.type.substr(0,u.length)===u,window.clearTimeout(t),t=window.setTimeout(a,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(s){e.addEventListener(s,r)})}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}Re.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&ie(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),i.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropMouseEvent_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var n=document.createElement("div");this.dialog_.insertBefore(n,this.dialog_.firstChild),n.tabIndex=-1,n.focus(),this.dialog_.removeChild(n)}var l=document.createEvent("MouseEvents");l.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(l),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),e||(e=pe(this.dialog_)),ce(document.activeElement),e&&e.focus()},updateZIndex:function(e,n){if(e<n)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=n},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!ie(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!i.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");this.setOpen(!0),this.openAsModal_=!0,i.needsCentering(this.dialog_)?(i.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),e!==void 0&&(this.dialog_.returnValue=e);var n=new window.CustomEvent("close",{bubbles:!1,cancelable:!1});Te(this.dialog_,n)}};var i={};i.reposition=function(e){var n=document.body.scrollTop||document.documentElement.scrollTop,l=n+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(n,l)+"px"};i.isInlinePositionSetByStylesheet=function(e){for(var n=0;n<document.styleSheets.length;++n){var l=document.styleSheets[n],a=null;try{a=l.cssRules}catch{}if(a)for(var t=0;t<a.length;++t){var r=a[t],s=null;try{s=document.querySelectorAll(r.selectorText)}catch{}if(!(!s||!kn(s,e))){var u=r.style.getPropertyValue("top"),m=r.style.getPropertyValue("bottom");if(u&&u!=="auto"||m&&m!=="auto")return!0}}}return!1};i.needsCentering=function(e){var n=window.getComputedStyle(e);return n.position!=="absolute"||e.style.top!=="auto"&&e.style.top!==""||e.style.bottom!=="auto"&&e.style.bottom!==""?!1:!i.isInlinePositionSetByStylesheet(e)};i.forceRegisterDialog=function(e){if(e.showModal&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),e.localName!=="dialog")throw new Error("Failed to register dialog: The element is not a dialog.");new Re(e)};i.registerDialog=function(e){e.showModal||i.forceRegisterDialog(e)};i.DialogManager=function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",(function(n){this.forwardTab_=void 0,n.stopPropagation(),e([])}).bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(n){var l=[];n.forEach(function(a){for(var t=0,r;r=a.removedNodes[t];++t)r instanceof Element&&(r.localName==="dialog"&&l.push(r),l=l.concat(r.querySelectorAll("dialog")))}),l.length&&e(l)}))};i.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})};i.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()};i.DialogManager.prototype.updateStacking=function(){for(var e=this.zIndexHigh_,n=0,l;l=this.pendingDialogStack[n];++n)l.updateZIndex(--e,--e),n===0&&(this.overlay.style.zIndex=--e);var a=this.pendingDialogStack[0];if(a){var t=a.dialog.parentNode||document.body;t.appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)};i.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=L(e);){for(var n=0,l;l=this.pendingDialogStack[n];++n)if(l.dialog===e)return n===0;e=e.parentElement}return!1};i.DialogManager.prototype.handleFocus_=function(e){var n=e.composedPath?e.composedPath()[0]:e.target;if(!this.containedByTopDialog_(n)&&document.activeElement!==document.documentElement&&(e.preventDefault(),e.stopPropagation(),ce(n),this.forwardTab_!==void 0)){var l=this.pendingDialogStack[0],a=l.dialog,t=a.compareDocumentPosition(n);return t&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?l.focus_():n!==document.documentElement&&document.documentElement.focus()),!1}};i.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,e.keyCode===27){e.preventDefault(),e.stopPropagation();var n=new window.CustomEvent("cancel",{bubbles:!1,cancelable:!0}),l=this.pendingDialogStack[0];l&&Te(l.dialog,n)&&l.dialog.close()}else e.keyCode===9&&(this.forwardTab_=!e.shiftKey)};i.DialogManager.prototype.checkDOM_=function(e){var n=this.pendingDialogStack.slice();n.forEach(function(l){e.indexOf(l.dialog)!==-1?l.downgradeModal():l.maybeHideModal()})};i.DialogManager.prototype.pushDialog=function(e){var n=(this.zIndexHigh_-this.zIndexLow_)/2-1;return this.pendingDialogStack.length>=n?!1:(this.pendingDialogStack.unshift(e)===1&&this.blockDocument(),this.updateStacking(),!0)};i.DialogManager.prototype.removeDialog=function(e){var n=this.pendingDialogStack.indexOf(e);n!==-1&&(this.pendingDialogStack.splice(n,1),this.pendingDialogStack.length===0&&this.unblockDocument(),this.updateStacking())};S&&(i.dm=new i.DialogManager,i.formSubmitter=null,i.imagemapUseValue=null);if(S){var ue=document.createElement("form");if(ue.setAttribute("method","dialog"),ue.method!=="dialog"){var h=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(h){var hn=h.get;h.get=function(){return C(this)?"dialog":hn.call(this)};var Sn=h.set;h.set=function(e){return typeof e=="string"&&e.toLowerCase()==="dialog"?this.setAttribute("method",e):Sn.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",h)}}document.addEventListener("click",function(e){if(i.formSubmitter=null,i.imagemapUseValue=null,!e.defaultPrevented){var n=e.target;if("composedPath"in e){var l=e.composedPath();n=l.shift()||n}if(!(!n||!C(n.form))){var a=n.type==="submit"&&["button","input"].indexOf(n.localName)>-1;if(!a){if(!(n.localName==="input"&&n.type==="image"))return;i.imagemapUseValue=e.offsetX+","+e.offsetY}var t=L(n);t&&(i.formSubmitter=n)}}},!1),document.addEventListener("submit",function(e){var n=e.target,l=L(n);if(!l){var a=Ne(e),t=a&&a.getAttribute("formmethod")||n.getAttribute("method");t==="dialog"&&e.preventDefault()}});var yn=HTMLFormElement.prototype.submit,Ln=function(){if(!C(this))return yn.call(this);var e=L(this);e&&e.close()};HTMLFormElement.prototype.submit=Ln}var Dn=function(e,n){var l={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(l[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(l[a[t]]=e[a[t]]);return l};const D=v.forwardRef((e,n)=>{var l,a,{header:t,children:r,open:s,onBeforeClose:u,onCancel:m,closeOnBackdropClick:E,width:g,placement:p,portal:f,className:V,"aria-labelledby":_,style:A,onClick:N,onMouseDown:P}=e,G=Dn(e,["header","children","open","onBeforeClose","onCancel","closeOnBackdropClick","width","placement","portal","className","aria-labelledby","style","onClick","onMouseDown"]);const{cn:k}=K(),y=v.useRef(k("navds-modal--polyfilled")),d=v.useRef(null),ke=ze(d,n),z=Me(),be=(l=je())===null||l===void 0?void 0:l.rootElement,R=En({root:be}),he=ve(!1),$=Ee(!1)!==void 0;$&&!he&&console.error("Modals should not be nested"),v.useEffect(()=>{S&&d.current&&R&&(i.registerDialog(d.current),d.current.classList.add(y.current)),d.current&&R&&(d.current.autofocus=!0)},[R]),v.useEffect(()=>{d.current&&R&&s!==void 0&&(s&&!d.current.open?d.current.showModal():!s&&d.current.open&&d.current.close())},[R,s]),fn(d,R,$);const W=typeof g=="string"&&["small","medium"].includes(g),Se=k("navds-modal",V,{[y.current]:S,"navds-modal--autowidth":!g,[`navds-modal--${g}`]:W,"navds-modal--top":p==="top"&&!S}),ye=Object.assign(Object.assign({},A),W?{}:{width:g}),X=v.useRef({clientX:0,clientY:0}),Le=b=>{X.current=b},Z=E&&!S,De=b=>{if(b.target!==d.current)return;const ee=d.current.getBoundingClientRect();re(X.current,ee)||re(b,ee)||u!==void 0&&u()===!1||d.current.close()},Ie=b=>{u&&u()===!1&&b.preventDefault()},Ke=!_&&!G["aria-label"]&&t?z:_,Q=o.createElement("dialog",Object.assign({},G,{ref:ke,className:Se,style:ye,onCancel:q(m,Ie),onClick:Z?q(N,De):N,onMouseDown:Z?q(P,Le):P,"aria-labelledby":Ke}),o.createElement(en,{closeHandler:An(d,t,u),ref:d},t&&o.createElement(ge,null,t.label&&o.createElement(Ue,{className:k("navds-modal__label")},t.label),o.createElement(He,{size:(a=t.size)!==null&&a!==void 0?a:"medium",level:"1",id:z},t.icon&&o.createElement("span",{className:k("navds-modal__header-icon")},t.icon),t.heading)),r));return f?R?qe.createPortal(Q,R):null:Q});D.Header=ge;D.Body=cn;D.Footer=Nn;const In="_image_1t1ka_1",Kn="_modal_1t1ka_9",oe={image:In,modal:Kn},Fn=(e,n,l,a)=>e===c.TILBAKEKREVING?"FatterVedtakApprovalModal.Tilbakekreving":e===c.TILBAKEKREVING_REVURDERING?"FatterVedtakApprovalModal.TilbakekrevingRevurdering":e===c.KLAGE?"FatterVedtakApprovalModal.ModalDescriptionKlage":e===c.ANKE?"FatterVedtakApprovalModal.ModalDescriptionAnke":a?"FatterVedtakApprovalModal.UendretUtfall":n&&n.type===I.AVSLATT?"FatterVedtakApprovalModal.IkkeInnvilget":l?"FatterVedtakApprovalModal.OpphortVedtak":"FatterVedtakApprovalModal.InnvilgetVedtak",Vn=(e,n)=>n===c.KLAGE?"FatterVedtakApprovalModal.ModalDescriptionKlage":n===c.ANKE?"FatterVedtakApprovalModal.ModalDescriptionAnke":e?"FatterVedtakApprovalModal.ModalDescriptionOpphort":"FatterVedtakApprovalModal.ModalDescriptionApproval",J=e=>e===F.FATTER_VEDTAK,Pn=(e,n,l,a,t,r)=>e?J(n)?Fn(l,a,t,r):"":"FatterVedtakApprovalModal.VedtakReturneresTilSaksbehandler",Gn=e=>J(e)?"FatterVedtakApprovalModal.Innvilget":"",On=(e,n,l)=>J(e)?Vn(l,n):"FatterVedtakApprovalModal.ModalDescription",Ae=({closeEvent:e,allAksjonspunktApproved:n,behandlingStatusKode:l,behandlingTypeKode:a,behandlingsresultat:t,harSammeResultatSomOriginalBehandling:r})=>{const s=$e(),u=!!t&&t.type===I.OPPHOR,m=Pn(n,l,a,t,u,r),E=Gn(l),g=On(l,a,u);return T.jsx(D,{className:oe.modal,open:!0,"aria-label":s.formatMessage({id:g}),onClose:e,children:T.jsx(D.Body,{children:T.jsxs(ne,{justify:"space-between",align:"center",wrap:!1,children:[T.jsxs(ne,{gap:"space-8",children:[T.jsx(xe,{className:oe.image,title:s.formatMessage({id:E})}),T.jsxs(Ce,{gap:"space-4",children:[T.jsx(se,{size:"small",children:T.jsx(x,{id:m})}),T.jsx(de,{size:"small",children:T.jsx(x,{id:"FatterVedtakApprovalModal.GoToSearchPage"})})]})]}),T.jsx(me,{size:"small",variant:"primary",onClick:e,autoFocus:!0,type:"button",children:T.jsx(x,{id:"FatterVedtakApprovalModal.Ok"})})]})})})};Ae.__docgenInfo={description:`FatterVedtakApprovalModal

Denne modalen vises en lightbox etter at en beslutter har godkjent alle aksjonspunkter
med totrinnskontroll. Ved å trykke på knapp blir beslutter tatt tilbake til sokesiden.`,methods:[],displayName:"FatterVedtakApprovalModal",props:{closeEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},allAksjonspunktApproved:{required:!0,tsType:{name:"boolean"},description:""},behandlingsresultat:{required:!1,tsType:{name:"signature",raw:"Behandling['behandlingsresultat']"},description:""},behandlingStatusKode:{required:!0,tsType:{name:"union",raw:"'AVSLU' | 'FVED' | 'IVED' | 'OPPRE' | 'UTRED'",elements:[{name:"literal",value:"'AVSLU'"},{name:"literal",value:"'FVED'"},{name:"literal",value:"'IVED'"},{name:"literal",value:"'OPPRE'"},{name:"literal",value:"'UTRED'"}]},description:""},behandlingTypeKode:{required:!0,tsType:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}]},description:""},harSammeResultatSomOriginalBehandling:{required:!1,tsType:{name:"boolean"},description:""}}};const wn=Xe(Ye),fe=({behandling:e,closeEvent:n,allAksjonspunktApproved:l})=>T.jsx(We,{value:wn,children:T.jsx(Ae,{closeEvent:n,allAksjonspunktApproved:l,behandlingsresultat:e.behandlingsresultat??void 0,behandlingStatusKode:e.status,behandlingTypeKode:e.type,harSammeResultatSomOriginalBehandling:e.behandlingsresultat?.erRevurderingMedUendretUtfall||!1})});fe.__docgenInfo={description:"",methods:[],displayName:"FatterVedtakTotrinnskontrollModalSakIndex",props:{behandling:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  id: number | null;
  uuid: string;
  versjon: number;
  type: foreldrepenger_behandlingslager_behandling_BehandlingType;
  status: foreldrepenger_behandlingslager_behandling_BehandlingStatus;
  fagsakId: number | null;
  opprettet: string;
  avsluttet: string | null;
  endret: string | null;
  endretAvBrukernavn: string | null;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  erAktivPapirsoknad: boolean;
  førsteÅrsak: tjenester_behandling_dto_behandling_BehandlingÅrsakDto | null;
  behandlingsfristTid: string | null;
  gjeldendeVedtak: boolean;
  erPaaVent: boolean | null;
  originalVedtaksDato: string | null;
  behandlingHenlagt: boolean;
  behandlingPaaVent: boolean | null;
  behandlingPåVent: boolean;
  fristBehandlingPåVent: string | null;
  fristBehandlingPaaVent: string | null;
  venteArsakKode: string | null;
  venteÅrsakKode: string | null;
  sprakkode: foreldrepenger_behandlingslager_geografisk_Språkkode | null;
  språkkode: foreldrepenger_behandlingslager_geografisk_Språkkode;
  behandlingKøet: boolean;
  ansvarligSaksbehandler: string | null;
  toTrinnsBehandling: boolean;
  behandlingsresultat: tjenester_behandling_dto_behandling_BehandlingsresultatDto | null;
  behandlingÅrsaker: Array<tjenester_behandling_dto_behandling_BehandlingÅrsakDto>;
  vilkår: Array<tjenester_behandling_vilkår_VilkårDto>;
  links: Array<rest_ResourceLink>;
  behandlingTillatteOperasjoner: tjenester_behandling_dto_BehandlingOperasjonerDto | null;
  brevmaler: Array<foreldrepenger_kontrakter_formidling_v3_BrevmalDto>;
  totrinnskontrollÅrsaker: Array<tjenester_behandling_vedtak_dto_TotrinnskontrollSkjermlenkeContextDto>;
  totrinnskontrollReadonly: boolean | null;
  risikoAksjonspunkt: tjenester_behandling_aksjonspunkt_AksjonspunktDto | null;
  kontrollResultat: tjenester_behandling_kontroll_dto_KontrollresultatDto | null;
  ugunstAksjonspunkt: boolean | null;
  behandlingKoet: boolean | null;
}`,signature:{properties:[{key:"id",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"versjon",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVSLU' | 'FVED' | 'IVED' | 'OPPRE' | 'UTRED'",elements:[{name:"literal",value:"'AVSLU'"},{name:"literal",value:"'FVED'"},{name:"literal",value:"'IVED'"},{name:"literal",value:"'OPPRE'"},{name:"literal",value:"'UTRED'"}],required:!0}},{key:"fagsakId",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endret",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAvBrukernavn",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"førsteÅrsak",value:{name:"union",raw:"tjenester_behandling_dto_behandling_BehandlingÅrsakDto | null",elements:[{name:"signature",type:"object",raw:`{
  erAutomatiskRevurdering: boolean | null;
  behandlingArsakType: foreldrepenger_behandlingslager_behandling_BehandlingÅrsakType;
  manueltOpprettet: boolean;
}`,signature:{properties:[{key:"erAutomatiskRevurdering",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"behandlingArsakType",value:{name:"union",raw:`| TEMP_FRA_FP_TILBAKE_ÅRSAK
| 'RE-LOV'
| 'RE-RGLF'
| 'RE-FEFAKTA'
| 'RE-PRSSL'
| 'RE-ANNET'
| 'RE-MDL'
| 'RE-OPTJ'
| 'RE-FRDLING'
| 'RE-INNTK'
| 'RE-FØDSEL'
| 'RE-DØD'
| 'RE-SRTB'
| 'RE-FRIST'
| 'RE-BER-GRUN'
| 'RE-KLAG-U-INNTK'
| 'RE-KLAG-M-INNTK'
| 'ETTER_KLAGE'
| 'RE-MF'
| 'RE-MFIP'
| 'RE-AVAB'
| 'RE-END-FRA-BRUKER'
| 'RE-END-INNTEKTSMELD'
| 'BERØRT-BEHANDLING'
| 'REBEREGN-FERIEPENGER'
| 'RE-UTSATT-START'
| 'RE-SATS-REGULERING'
| 'ENDRE-DEKNINGSGRAD'
| 'INFOBREV_BEHANDLING'
| 'INFOBREV_OPPHOLD'
| 'INFOBREV_PÅMINNELSE'
| 'OPPHØR-NYTT-BARN'
| 'RE-HENDELSE-FØDSEL'
| 'RE-HENDELSE-DØD-F'
| 'RE-HENDELSE-DØD-B'
| 'RE-HENDELSE-DØDFØD'
| 'RE-HENDELSE-UTFLYTTING'
| 'RE-VEDTAK-PSB'
| 'FEIL_PRAKSIS_UTSETTELSE'
| 'FEIL_PRAKSIS_IVERKS_UTSET'
| 'KLAGE_TILBAKE'
| 'RE-YTELSE'
| 'RE-REGISTEROPPL'
| 'KØET-BEHANDLING'
| 'RE-TILST-YT-INNVIL'
| 'RE-TILST-YT-OPPH'
| '-'`,elements:[{name:"union",raw:`| 'RE_KLAGE_NFP'
| 'RE_KLAGE_KA'
| 'RE_VILKÅR'
| 'RE_FORELDELSE'
| 'RE_FEILUTBETALT_BELØP_REDUSERT'
| 'FATTET_AV_ANNEN_INSTANS'`,elements:[{name:"literal",value:"'RE_KLAGE_NFP'"},{name:"literal",value:"'RE_KLAGE_KA'"},{name:"literal",value:"'RE_VILKÅR'"},{name:"literal",value:"'RE_FORELDELSE'"},{name:"literal",value:"'RE_FEILUTBETALT_BELØP_REDUSERT'"},{name:"literal",value:"'FATTET_AV_ANNEN_INSTANS'"}]},{name:"literal",value:"'RE-LOV'"},{name:"literal",value:"'RE-RGLF'"},{name:"literal",value:"'RE-FEFAKTA'"},{name:"literal",value:"'RE-PRSSL'"},{name:"literal",value:"'RE-ANNET'"},{name:"literal",value:"'RE-MDL'"},{name:"literal",value:"'RE-OPTJ'"},{name:"literal",value:"'RE-FRDLING'"},{name:"literal",value:"'RE-INNTK'"},{name:"literal",value:"'RE-FØDSEL'"},{name:"literal",value:"'RE-DØD'"},{name:"literal",value:"'RE-SRTB'"},{name:"literal",value:"'RE-FRIST'"},{name:"literal",value:"'RE-BER-GRUN'"},{name:"literal",value:"'RE-KLAG-U-INNTK'"},{name:"literal",value:"'RE-KLAG-M-INNTK'"},{name:"literal",value:"'ETTER_KLAGE'"},{name:"literal",value:"'RE-MF'"},{name:"literal",value:"'RE-MFIP'"},{name:"literal",value:"'RE-AVAB'"},{name:"literal",value:"'RE-END-FRA-BRUKER'"},{name:"literal",value:"'RE-END-INNTEKTSMELD'"},{name:"literal",value:"'BERØRT-BEHANDLING'"},{name:"literal",value:"'REBEREGN-FERIEPENGER'"},{name:"literal",value:"'RE-UTSATT-START'"},{name:"literal",value:"'RE-SATS-REGULERING'"},{name:"literal",value:"'ENDRE-DEKNINGSGRAD'"},{name:"literal",value:"'INFOBREV_BEHANDLING'"},{name:"literal",value:"'INFOBREV_OPPHOLD'"},{name:"literal",value:"'INFOBREV_PÅMINNELSE'"},{name:"literal",value:"'OPPHØR-NYTT-BARN'"},{name:"literal",value:"'RE-HENDELSE-FØDSEL'"},{name:"literal",value:"'RE-HENDELSE-DØD-F'"},{name:"literal",value:"'RE-HENDELSE-DØD-B'"},{name:"literal",value:"'RE-HENDELSE-DØDFØD'"},{name:"literal",value:"'RE-HENDELSE-UTFLYTTING'"},{name:"literal",value:"'RE-VEDTAK-PSB'"},{name:"literal",value:"'FEIL_PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'FEIL_PRAKSIS_IVERKS_UTSET'"},{name:"literal",value:"'KLAGE_TILBAKE'"},{name:"literal",value:"'RE-YTELSE'"},{name:"literal",value:"'RE-REGISTEROPPL'"},{name:"literal",value:"'KØET-BEHANDLING'"},{name:"literal",value:"'RE-TILST-YT-INNVIL'"},{name:"literal",value:"'RE-TILST-YT-OPPH'"},{name:"literal",value:"'-'"}],required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}}]}},{name:"null"}],required:!0}},{key:"behandlingsfristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"erPaaVent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"originalVedtaksDato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingPaaVent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fristBehandlingPaaVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteArsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"sprakkode",value:{name:"union",raw:"foreldrepenger_behandlingslager_geografisk_Språkkode | null",elements:[{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0},{name:"null"}],required:!0}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"union",raw:"tjenester_behandling_dto_behandling_BehandlingsresultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: foreldrepenger_behandlingslager_behandling_BehandlingResultatType;
  avslagsarsak: foreldrepenger_behandlingslager_behandling_vilkår_Avslagsårsak | null;
  avslagsarsakFritekst: string | null;
  rettenTil: foreldrepenger_behandlingslager_behandling_RettenTil | null;
  konsekvenserForYtelsen: Array<foreldrepenger_behandlingslager_behandling_KonsekvensForYtelsen> | null;
  vedtaksbrev: foreldrepenger_behandlingslager_behandling_vedtak_Vedtaksbrev | null;
  vedtaksbrevStatus: foreldrepenger_domene_vedtak_intern_VedtaksbrevStatus;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall: boolean | null;
  skjæringstidspunkt: tjenester_behandling_dto_behandling_SkjæringstidspunktDto | null;
  endretDekningsgrad: boolean | null;
  opphørsdato: string | null;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:`| TEMP_FP_TILBAKE_BEHANDLINGRESULTATTYPE
| 'IKKE_FASTSATT'
| 'INNVILGET'
| 'AVSLÅTT'
| 'OPPHØR'
| 'HENLAGT_SØKNAD_TRUKKET'
| 'HENLAGT_FEILOPPRETTET'
| 'HENLAGT_BRUKER_DØD'
| 'MERGET_OG_HENLAGT'
| 'HENLAGT_SØKNAD_MANGLER'
| 'FORELDREPENGER_ENDRET'
| 'FORELDREPENGER_SENERE'
| 'INGEN_ENDRING'
| 'MANGLER_BEREGNINGSREGLER'
| 'KLAGE_AVVIST'
| 'KLAGE_MEDHOLD'
| 'KLAGE_DELVIS_MEDHOLD'
| 'KLAGE_OMGJORT_UGUNST'
| 'KLAGE_YTELSESVEDTAK_OPPHEVET'
| 'KLAGE_YTELSESVEDTAK_STADFESTET'
| 'KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET'
| 'HENLAGT_KLAGE_TRUKKET'
| 'HJEMSENDE_UTEN_OPPHEVE'
| 'ANKE_AVVIST'
| 'ANKE_MEDHOLD'
| 'ANKE_DELVIS_MEDHOLD'
| 'ANKE_OMGJORT_UGUNST'
| 'ANKE_OPPHEVE_OG_HJEMSENDE'
| 'ANKE_HJEMSENDE_UTEN_OPPHEV'
| 'ANKE_YTELSESVEDTAK_STADFESTET'
| 'HENLAGT_ANKE_TRUKKET'
| 'INNSYN_INNVILGET'
| 'INNSYN_DELVIS_INNVILGET'
| 'INNSYN_AVVIST'
| 'HENLAGT_INNSYN_TRUKKET'`,elements:[{name:"union",raw:`| 'IKKE_FASTSATT'
| 'FASTSATT'
| 'HENLAGT_FEILOPPRETTET'
| 'HENLAGT_FEILOPPRETTET_MED_BREV'
| 'HENLAGT_FEILOPPRETTET_UTEN_BREV'
| 'HENLAGT_KRAVGRUNNLAG_NULLSTILT'
| 'HENLAGT_TEKNISK_VEDLIKEHOLD'
| 'HENLAGT'
| 'INGEN_TILBAKEBETALING'
| 'DELVIS_TILBAKEBETALING'
| 'FULL_TILBAKEBETALING'`,elements:[{name:"literal",value:"'IKKE_FASTSATT'"},{name:"literal",value:"'FASTSATT'"},{name:"literal",value:"'HENLAGT_FEILOPPRETTET'"},{name:"literal",value:"'HENLAGT_FEILOPPRETTET_MED_BREV'"},{name:"literal",value:"'HENLAGT_FEILOPPRETTET_UTEN_BREV'"},{name:"literal",value:"'HENLAGT_KRAVGRUNNLAG_NULLSTILT'"},{name:"literal",value:"'HENLAGT_TEKNISK_VEDLIKEHOLD'"},{name:"literal",value:"'HENLAGT'"},{name:"literal",value:"'INGEN_TILBAKEBETALING'"},{name:"literal",value:"'DELVIS_TILBAKEBETALING'"},{name:"literal",value:"'FULL_TILBAKEBETALING'"}]},{name:"literal",value:"'IKKE_FASTSATT'"},{name:"literal",value:"'INNVILGET'"},{name:"literal",value:"'AVSLÅTT'"},{name:"literal",value:"'OPPHØR'"},{name:"literal",value:"'HENLAGT_SØKNAD_TRUKKET'"},{name:"literal",value:"'HENLAGT_FEILOPPRETTET'"},{name:"literal",value:"'HENLAGT_BRUKER_DØD'"},{name:"literal",value:"'MERGET_OG_HENLAGT'"},{name:"literal",value:"'HENLAGT_SØKNAD_MANGLER'"},{name:"literal",value:"'FORELDREPENGER_ENDRET'"},{name:"literal",value:"'FORELDREPENGER_SENERE'"},{name:"literal",value:"'INGEN_ENDRING'"},{name:"literal",value:"'MANGLER_BEREGNINGSREGLER'"},{name:"literal",value:"'KLAGE_AVVIST'"},{name:"literal",value:"'KLAGE_MEDHOLD'"},{name:"literal",value:"'KLAGE_DELVIS_MEDHOLD'"},{name:"literal",value:"'KLAGE_OMGJORT_UGUNST'"},{name:"literal",value:"'KLAGE_YTELSESVEDTAK_OPPHEVET'"},{name:"literal",value:"'KLAGE_YTELSESVEDTAK_STADFESTET'"},{name:"literal",value:"'KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET'"},{name:"literal",value:"'HENLAGT_KLAGE_TRUKKET'"},{name:"literal",value:"'HJEMSENDE_UTEN_OPPHEVE'"},{name:"literal",value:"'ANKE_AVVIST'"},{name:"literal",value:"'ANKE_MEDHOLD'"},{name:"literal",value:"'ANKE_DELVIS_MEDHOLD'"},{name:"literal",value:"'ANKE_OMGJORT_UGUNST'"},{name:"literal",value:"'ANKE_OPPHEVE_OG_HJEMSENDE'"},{name:"literal",value:"'ANKE_HJEMSENDE_UTEN_OPPHEV'"},{name:"literal",value:"'ANKE_YTELSESVEDTAK_STADFESTET'"},{name:"literal",value:"'HENLAGT_ANKE_TRUKKET'"},{name:"literal",value:"'INNSYN_INNVILGET'"},{name:"literal",value:"'INNSYN_DELVIS_INNVILGET'"},{name:"literal",value:"'INNSYN_AVVIST'"},{name:"literal",value:"'HENLAGT_INNSYN_TRUKKET'"}],required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_vilkår_Avslagsårsak | null",elements:[{name:"union",raw:`| '1001'
| '1002'
| '1003'
| '1004'
| '1005'
| '1006'
| '1007'
| '1008'
| '1009'
| '1010'
| '1011'
| '1012'
| '1013'
| '1014'
| '1015'
| '1016'
| '1017'
| '1018'
| '1019'
| '1020'
| '1021'
| '1023'
| '1024'
| '1025'
| '1026'
| '1027'
| '1028'
| '1029'
| '1031'
| '1032'
| '1033'
| '1034'
| '1035'
| '1041'
| '1051'
| '1052'
| '1060'
| '1061'
| '1062'
| '1063'
| '1064'
| '1065'
| '1066'
| '1099'
| '-'`,elements:[{name:"literal",value:"'1001'"},{name:"literal",value:"'1002'"},{name:"literal",value:"'1003'"},{name:"literal",value:"'1004'"},{name:"literal",value:"'1005'"},{name:"literal",value:"'1006'"},{name:"literal",value:"'1007'"},{name:"literal",value:"'1008'"},{name:"literal",value:"'1009'"},{name:"literal",value:"'1010'"},{name:"literal",value:"'1011'"},{name:"literal",value:"'1012'"},{name:"literal",value:"'1013'"},{name:"literal",value:"'1014'"},{name:"literal",value:"'1015'"},{name:"literal",value:"'1016'"},{name:"literal",value:"'1017'"},{name:"literal",value:"'1018'"},{name:"literal",value:"'1019'"},{name:"literal",value:"'1020'"},{name:"literal",value:"'1021'"},{name:"literal",value:"'1023'"},{name:"literal",value:"'1024'"},{name:"literal",value:"'1025'"},{name:"literal",value:"'1026'"},{name:"literal",value:"'1027'"},{name:"literal",value:"'1028'"},{name:"literal",value:"'1029'"},{name:"literal",value:"'1031'"},{name:"literal",value:"'1032'"},{name:"literal",value:"'1033'"},{name:"literal",value:"'1034'"},{name:"literal",value:"'1035'"},{name:"literal",value:"'1041'"},{name:"literal",value:"'1051'"},{name:"literal",value:"'1052'"},{name:"literal",value:"'1060'"},{name:"literal",value:"'1061'"},{name:"literal",value:"'1062'"},{name:"literal",value:"'1063'"},{name:"literal",value:"'1064'"},{name:"literal",value:"'1065'"},{name:"literal",value:"'1066'"},{name:"literal",value:"'1099'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"rettenTil",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_RettenTil | null",elements:[{name:"union",raw:"'HAR_RETT_TIL_FP' | 'HAR_IKKE_RETT_TIL_FP' | '-'",elements:[{name:"literal",value:"'HAR_RETT_TIL_FP'"},{name:"literal",value:"'HAR_IKKE_RETT_TIL_FP'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"konsekvenserForYtelsen",value:{name:"union",raw:"Array<foreldrepenger_behandlingslager_behandling_KonsekvensForYtelsen> | null",elements:[{name:"Array",elements:[{name:"union",raw:`| 'FORELDREPENGER_OPPHØRER'
| 'ENDRING_I_BEREGNING'
| 'ENDRING_I_UTTAK'
| 'ENDRING_I_FORDELING_AV_YTELSEN'
| 'INGEN_ENDRING'
| '-'`,elements:[{name:"literal",value:"'FORELDREPENGER_OPPHØRER'"},{name:"literal",value:"'ENDRING_I_BEREGNING'"},{name:"literal",value:"'ENDRING_I_UTTAK'"},{name:"literal",value:"'ENDRING_I_FORDELING_AV_YTELSEN'"},{name:"literal",value:"'INGEN_ENDRING'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_KonsekvensForYtelsen>"},{name:"null"}],required:!0}},{key:"vedtaksbrev",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_vedtak_Vedtaksbrev | null",elements:[{name:"union",raw:"'AUTOMATISK' | 'FRITEKST' | 'INGEN' | '-'",elements:[{name:"literal",value:"'AUTOMATISK'"},{name:"literal",value:"'FRITEKST'"},{name:"literal",value:"'INGEN'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"skjæringstidspunkt",value:{name:"union",raw:"tjenester_behandling_dto_behandling_SkjæringstidspunktDto | null",elements:[{name:"signature",type:"object",raw:`{
  dato: string | null;
  utenMinsterett: boolean | null;
}`,signature:{properties:[{key:"dato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"utenMinsterett",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"endretDekningsgrad",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  erAutomatiskRevurdering: boolean | null;
  behandlingArsakType: foreldrepenger_behandlingslager_behandling_BehandlingÅrsakType;
  manueltOpprettet: boolean;
}`,signature:{properties:[{key:"erAutomatiskRevurdering",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"behandlingArsakType",value:{name:"union",raw:`| TEMP_FRA_FP_TILBAKE_ÅRSAK
| 'RE-LOV'
| 'RE-RGLF'
| 'RE-FEFAKTA'
| 'RE-PRSSL'
| 'RE-ANNET'
| 'RE-MDL'
| 'RE-OPTJ'
| 'RE-FRDLING'
| 'RE-INNTK'
| 'RE-FØDSEL'
| 'RE-DØD'
| 'RE-SRTB'
| 'RE-FRIST'
| 'RE-BER-GRUN'
| 'RE-KLAG-U-INNTK'
| 'RE-KLAG-M-INNTK'
| 'ETTER_KLAGE'
| 'RE-MF'
| 'RE-MFIP'
| 'RE-AVAB'
| 'RE-END-FRA-BRUKER'
| 'RE-END-INNTEKTSMELD'
| 'BERØRT-BEHANDLING'
| 'REBEREGN-FERIEPENGER'
| 'RE-UTSATT-START'
| 'RE-SATS-REGULERING'
| 'ENDRE-DEKNINGSGRAD'
| 'INFOBREV_BEHANDLING'
| 'INFOBREV_OPPHOLD'
| 'INFOBREV_PÅMINNELSE'
| 'OPPHØR-NYTT-BARN'
| 'RE-HENDELSE-FØDSEL'
| 'RE-HENDELSE-DØD-F'
| 'RE-HENDELSE-DØD-B'
| 'RE-HENDELSE-DØDFØD'
| 'RE-HENDELSE-UTFLYTTING'
| 'RE-VEDTAK-PSB'
| 'FEIL_PRAKSIS_UTSETTELSE'
| 'FEIL_PRAKSIS_IVERKS_UTSET'
| 'KLAGE_TILBAKE'
| 'RE-YTELSE'
| 'RE-REGISTEROPPL'
| 'KØET-BEHANDLING'
| 'RE-TILST-YT-INNVIL'
| 'RE-TILST-YT-OPPH'
| '-'`,elements:[{name:"union",raw:`| 'RE_KLAGE_NFP'
| 'RE_KLAGE_KA'
| 'RE_VILKÅR'
| 'RE_FORELDELSE'
| 'RE_FEILUTBETALT_BELØP_REDUSERT'
| 'FATTET_AV_ANNEN_INSTANS'`,elements:[{name:"literal",value:"'RE_KLAGE_NFP'"},{name:"literal",value:"'RE_KLAGE_KA'"},{name:"literal",value:"'RE_VILKÅR'"},{name:"literal",value:"'RE_FORELDELSE'"},{name:"literal",value:"'RE_FEILUTBETALT_BELØP_REDUSERT'"},{name:"literal",value:"'FATTET_AV_ANNEN_INSTANS'"}]},{name:"literal",value:"'RE-LOV'"},{name:"literal",value:"'RE-RGLF'"},{name:"literal",value:"'RE-FEFAKTA'"},{name:"literal",value:"'RE-PRSSL'"},{name:"literal",value:"'RE-ANNET'"},{name:"literal",value:"'RE-MDL'"},{name:"literal",value:"'RE-OPTJ'"},{name:"literal",value:"'RE-FRDLING'"},{name:"literal",value:"'RE-INNTK'"},{name:"literal",value:"'RE-FØDSEL'"},{name:"literal",value:"'RE-DØD'"},{name:"literal",value:"'RE-SRTB'"},{name:"literal",value:"'RE-FRIST'"},{name:"literal",value:"'RE-BER-GRUN'"},{name:"literal",value:"'RE-KLAG-U-INNTK'"},{name:"literal",value:"'RE-KLAG-M-INNTK'"},{name:"literal",value:"'ETTER_KLAGE'"},{name:"literal",value:"'RE-MF'"},{name:"literal",value:"'RE-MFIP'"},{name:"literal",value:"'RE-AVAB'"},{name:"literal",value:"'RE-END-FRA-BRUKER'"},{name:"literal",value:"'RE-END-INNTEKTSMELD'"},{name:"literal",value:"'BERØRT-BEHANDLING'"},{name:"literal",value:"'REBEREGN-FERIEPENGER'"},{name:"literal",value:"'RE-UTSATT-START'"},{name:"literal",value:"'RE-SATS-REGULERING'"},{name:"literal",value:"'ENDRE-DEKNINGSGRAD'"},{name:"literal",value:"'INFOBREV_BEHANDLING'"},{name:"literal",value:"'INFOBREV_OPPHOLD'"},{name:"literal",value:"'INFOBREV_PÅMINNELSE'"},{name:"literal",value:"'OPPHØR-NYTT-BARN'"},{name:"literal",value:"'RE-HENDELSE-FØDSEL'"},{name:"literal",value:"'RE-HENDELSE-DØD-F'"},{name:"literal",value:"'RE-HENDELSE-DØD-B'"},{name:"literal",value:"'RE-HENDELSE-DØDFØD'"},{name:"literal",value:"'RE-HENDELSE-UTFLYTTING'"},{name:"literal",value:"'RE-VEDTAK-PSB'"},{name:"literal",value:"'FEIL_PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'FEIL_PRAKSIS_IVERKS_UTSET'"},{name:"literal",value:"'KLAGE_TILBAKE'"},{name:"literal",value:"'RE-YTELSE'"},{name:"literal",value:"'RE-REGISTEROPPL'"},{name:"literal",value:"'KØET-BEHANDLING'"},{name:"literal",value:"'RE-TILST-YT-INNVIL'"},{name:"literal",value:"'RE-TILST-YT-OPPH'"},{name:"literal",value:"'-'"}],required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}}]}}],raw:"Array<tjenester_behandling_dto_behandling_BehandlingÅrsakDto>",required:!0}},{key:"vilkår",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: foreldrepenger_behandlingslager_behandling_vilkår_VilkårType;
  vilkarStatus: foreldrepenger_behandlingslager_behandling_vilkår_VilkårUtfallType;
  avslagKode: string | null;
  lovReferanse: string | null;
  overstyrbar: boolean;
  evaluering: string | null;
  input: string | null;
}`,signature:{properties:[{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
| 'FP_VK_11'
| 'FP_VK_16'
| 'FP_VK_2'
| 'FP_VK_2_F'
| 'FP_VK_2_L'
| 'FP_VK_3'
| 'FP_VK_4'
| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| 'FP_VK_34'
| 'FP_VK_21'
| 'FP_VK_23'
| 'FP_VK_41'
| 'SVP_VK_1'
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0}},{key:"vilkarStatus",value:{name:"union",raw:`| 'OPPFYLT'
| 'IKKE_OPPFYLT'
| 'IKKE_VURDERT'
| '-'`,elements:[{name:"literal",value:"'OPPFYLT'"},{name:"literal",value:"'IKKE_OPPFYLT'"},{name:"literal",value:"'IKKE_VURDERT'"},{name:"literal",value:"'-'"}],required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"lovReferanse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"overstyrbar",value:{name:"boolean",required:!0}},{key:"evaluering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"input",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:"Array<tjenester_behandling_vilkår_VilkårDto>",required:!0}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: {
    [key: string]: unknown;
  };
  type: rest_ResourceLink_HttpMethod;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"signature",type:"object",raw:`{
  [key: string]: unknown;
}`,signature:{properties:[{key:{name:"string"},value:{name:"unknown",required:!0}}]},required:!1}},{key:"type",value:{name:"union",raw:"'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT'",elements:[{name:"literal",value:"'DELETE'"},{name:"literal",value:"'GET'"},{name:"literal",value:"'PATCH'"},{name:"literal",value:"'POST'"},{name:"literal",value:"'PUT'"}],required:!0}}]}}],raw:"Array<rest_ResourceLink>",required:!0}},{key:"behandlingTillatteOperasjoner",value:{name:"union",raw:"tjenester_behandling_dto_BehandlingOperasjonerDto | null",elements:[{name:"signature",type:"object",raw:`{
  uuid: string | null;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanMerkesHaster: boolean;
  behandlingKanSettesPaVent: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingFraBeslutter: boolean;
  behandlingTilGodkjenning: boolean;
  vergeBehandlingsmeny: foreldrepenger_domene_person_verge_dto_VergeBehandlingsmenyEnum;
}`,signature:{properties:[{key:"uuid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanMerkesHaster",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"union",raw:"'SKJUL' | 'OPPRETT' | 'FJERN'",elements:[{name:"literal",value:"'SKJUL'"},{name:"literal",value:"'OPPRETT'"},{name:"literal",value:"'FJERN'"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig: boolean | null;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}],raw:"Array<foreldrepenger_kontrakter_formidling_v3_BrevmalDto>",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: Array<tjenester_behandling_vedtak_dto_TotrinnskontrollAksjonspunkterDto>;
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"string",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter: Array<tjenester_behandling_vedtak_dto_TotrinnskontrollAktivitetDto>;
  beregningDto: tjenester_behandling_vedtak_dto_TotrinnsBeregningDto | null;
  besluttersBegrunnelse: string | null;
  totrinnskontrollGodkjent: boolean;
  vurderPaNyttArsaker: Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>;
  uttakPerioder: Array<foreldrepenger_domene_uttak_UttakPeriodeEndringDto>;
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"opptjeningAktiviteter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktivitetType: string;
  erEndring: boolean;
  godkjent: boolean;
  arbeidsgiverReferanse: string | null;
  arbeidsgiverNavn: string | null;
  orgnr: string | null;
  privatpersonFødselsdato: string | null;
}`,signature:{properties:[{key:"aktivitetType",value:{name:"string",required:!0}},{key:"erEndring",value:{name:"boolean",required:!0}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"arbeidsgiverNavn",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"orgnr",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"privatpersonFødselsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:"Array<tjenester_behandling_vedtak_dto_TotrinnskontrollAktivitetDto>",required:!0}},{key:"beregningDto",value:{name:"union",raw:"tjenester_behandling_vedtak_dto_TotrinnsBeregningDto | null",elements:[{name:"signature",type:"object",raw:`{
  fastsattVarigEndringNaering: boolean | null;
  faktaOmBeregningTilfeller: Array<foreldrepenger_domene_modell_kodeverk_FaktaOmBeregningTilfelle> | null;
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"union",raw:"Array<foreldrepenger_domene_modell_kodeverk_FaktaOmBeregningTilfelle> | null",elements:[{name:"Array",elements:[{name:"union",raw:`| 'VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD'
| 'VURDER_SN_NY_I_ARBEIDSLIVET'
| 'VURDER_NYOPPSTARTET_FL'
| 'FASTSETT_MAANEDSINNTEKT_FL'
| 'FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'
| 'VURDER_LØNNSENDRING'
| 'FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'
| 'VURDER_AT_OG_FL_I_SAMME_ORGANISASJON'
| 'FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE'
| 'VURDER_ETTERLØNN_SLUTTPAKKE'
| 'FASTSETT_ETTERLØNN_SLUTTPAKKE'
| 'VURDER_MOTTAR_YTELSE'
| 'VURDER_BESTEBEREGNING'
| 'VURDER_MILITÆR_SIVILTJENESTE'
| 'VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT'
| 'FASTSETT_BG_KUN_YTELSE'
| 'TILSTØTENDE_YTELSE'
| 'FASTSETT_ENDRET_BEREGNINGSGRUNNLAG'
| '-'`,elements:[{name:"literal",value:"'VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD'"},{name:"literal",value:"'VURDER_SN_NY_I_ARBEIDSLIVET'"},{name:"literal",value:"'VURDER_NYOPPSTARTET_FL'"},{name:"literal",value:"'FASTSETT_MAANEDSINNTEKT_FL'"},{name:"literal",value:"'FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'VURDER_LØNNSENDRING'"},{name:"literal",value:"'FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'VURDER_AT_OG_FL_I_SAMME_ORGANISASJON'"},{name:"literal",value:"'FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE'"},{name:"literal",value:"'VURDER_ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'FASTSETT_ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'VURDER_MOTTAR_YTELSE'"},{name:"literal",value:"'VURDER_BESTEBEREGNING'"},{name:"literal",value:"'VURDER_MILITÆR_SIVILTJENESTE'"},{name:"literal",value:"'VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT'"},{name:"literal",value:"'FASTSETT_BG_KUN_YTELSE'"},{name:"literal",value:"'TILSTØTENDE_YTELSE'"},{name:"literal",value:"'FASTSETT_ENDRET_BEREGNINGSGRUNNLAG'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_domene_modell_kodeverk_FaktaOmBeregningTilfelle>"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!0}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>",required:!0}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  erSlettet: boolean | null;
  erEndret: boolean | null;
  erLagtTil: boolean | null;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"erSlettet",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"erEndret",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"erLagtTil",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}],raw:"Array<foreldrepenger_domene_uttak_UttakPeriodeEndringDto>",required:!0}}]}}],raw:"Array<tjenester_behandling_vedtak_dto_TotrinnskontrollAksjonspunkterDto>",required:!0}}]}}],raw:"Array<tjenester_behandling_vedtak_dto_TotrinnskontrollSkjermlenkeContextDto>",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"risikoAksjonspunkt",value:{name:"union",raw:"tjenester_behandling_aksjonspunkt_AksjonspunktDto | null",elements:[{name:"signature",type:"object",raw:`{
  definisjon: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktDefinisjon;
  status: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType: foreldrepenger_behandlingslager_behandling_vilkår_VilkårType | null;
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent: boolean | null;
  vurderPaNyttArsaker: Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak> | null;
  besluttersBegrunnelse: string | null;
  aksjonspunktType: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktType;
  kanLoses: boolean;
  erAktivt: boolean;
  fristTid: string | null;
  endretTidspunkt: string | null;
  endretAv: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"union",raw:`| '5001'
| '5027'
| '5004'
| '5005'
| '5006'
| '5007'
| '5008'
| '5011'
| '5012'
| '5013'
| '5014'
| '5015'
| '5016'
| '5017'
| '5002'
| '5026'
| '5028'
| '5030'
| '5031'
| '5033'
| '5034'
| '5003'
| '5035'
| '5037'
| '5038'
| '5039'
| '5040'
| '5043'
| '5046'
| '5047'
| '5049'
| '5051'
| '5052'
| '5054'
| '5055'
| '5057'
| '5058'
| '5059'
| '5060'
| '5061'
| '5068'
| '5064'
| '5065'
| '5063'
| '5066'
| '5071'
| '5072'
| '5069'
| '5073'
| '5076'
| '5077'
| '5085'
| '5082'
| '5084'
| '5029'
| '5086'
| '5089'
| '5041'
| '5062'
| '5091'
| '5092'
| '5095'
| '5096'
| '5074'
| '5101'
| '5102'
| '5103'
| '6002'
| '6003'
| '6004'
| '6005'
| '6006'
| '6008'
| '6009'
| '6010'
| '6011'
| '6065'
| '6014'
| '6015'
| '6045'
| '6016'
| '6018'
| '6017'
| '6103'
| '7001'
| '7002'
| '7003'
| '7005'
| '7007'
| '7008'
| '7011'
| '7013'
| '7014'
| '7020'
| '7030'
| '7033'
| '7037'
| '7039'
| '7040'
| "UNDEFINED('null')"
| '5009'
| '5019'
| '5020'
| '5021'
| '5022'
| '5023'
| '5024'
| '5025'
| '5032'
| '5036'
| '5042'
| '5044'
| '5045'
| '5048'
| '5050'
| '5053'
| '5056'
| '5067'
| '5070'
| '5075'
| '5078'
| '5079'
| '5080'
| '5081'
| '5083'
| '5087'
| '5088'
| '5090'
| '5093'
| '5094'
| '5097'
| '5098'
| '5099'
| '6007'
| '6012'
| '6013'
| '6068'
| '6070'
| '7004'
| '7006'
| '7009'
| '7015'
| '7016'
| '7017'
| '7018'
| '7019'
| '7021'
| '7022'
| '7023'
| '7024'
| '7025'
| '7026'
| '7027'
| '7028'
| '7029'
| '7032'
| '7034'
| '7035'
| '7036'
| '7038'
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_vilkår_VilkårType | null",elements:[{name:"union",raw:`| 'FP_VK_1'
| 'FP_VK_11'
| 'FP_VK_16'
| 'FP_VK_2'
| 'FP_VK_2_F'
| 'FP_VK_2_L'
| 'FP_VK_3'
| 'FP_VK_4'
| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| 'FP_VK_34'
| 'FP_VK_21'
| 'FP_VK_23'
| 'FP_VK_41'
| 'SVP_VK_1'
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0},{name:"null"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak> | null",elements:[{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>"},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:`| 'AUTO'
| 'MANU'
| 'OVST'
| 'SAOV'
| '-'`,elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"kontrollResultat",value:{name:"union",raw:"tjenester_behandling_kontroll_dto_KontrollresultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: foreldrepenger_behandlingslager_risikoklassifisering_Kontrollresultat;
  iayFaresignaler: tjenester_behandling_kontroll_dto_KontrollresultatDto_FaresignalgruppeDto | null;
  medlFaresignaler: tjenester_behandling_kontroll_dto_KontrollresultatDto_FaresignalgruppeDto | null;
  faresignalVurdering: foreldrepenger_behandlingslager_risikoklassifisering_FaresignalVurdering | null;
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"union",raw:`| 'HOY'
| 'IKKE_HOY'
| 'IKKE_KLASSIFISERT'
| '-'`,elements:[{name:"literal",value:"'HOY'"},{name:"literal",value:"'IKKE_HOY'"},{name:"literal",value:"'IKKE_KLASSIFISERT'"},{name:"literal",value:"'-'"}],required:!0}},{key:"iayFaresignaler",value:{name:"union",raw:"tjenester_behandling_kontroll_dto_KontrollresultatDto_FaresignalgruppeDto | null",elements:[{name:"signature",type:"object",raw:`{
  faresignaler: Array<string>;
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]}},{name:"null"}],required:!0}},{key:"medlFaresignaler",value:{name:"union",raw:"tjenester_behandling_kontroll_dto_KontrollresultatDto_FaresignalgruppeDto | null",elements:[{name:"signature",type:"object",raw:`{
  faresignaler: Array<string>;
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]}},{name:"null"}],required:!0}},{key:"faresignalVurdering",value:{name:"union",raw:"foreldrepenger_behandlingslager_risikoklassifisering_FaresignalVurdering | null",elements:[{name:"union",raw:`| 'INNVIRKNING'
| 'INNVILGET_REDUSERT'
| 'INNVILGET_UENDRET'
| 'AVSLAG_FARESIGNAL'
| 'AVSLAG_ANNET'
| 'INGEN_INNVIRKNING'
| '-'`,elements:[{name:"literal",value:"'INNVIRKNING'"},{name:"literal",value:"'INNVILGET_REDUSERT'"},{name:"literal",value:"'INNVILGET_UENDRET'"},{name:"literal",value:"'AVSLAG_FARESIGNAL'"},{name:"literal",value:"'AVSLAG_ANNET'"},{name:"literal",value:"'INGEN_INNVIRKNING'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"ugunstAksjonspunkt",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"behandlingKoet",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}},description:""},closeEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},allAksjonspunktApproved:{required:!0,tsType:{name:"boolean"},description:""}}};const{action:Bn}=__STORYBOOK_MODULE_ACTIONS__,Cn={title:"sak/sak-totrinnskontroll-fatter-vedtak-modal",component:fe,args:{closeEvent:Bn("button-click")}},B={args:{behandling:{uuid:"1",status:F.FATTER_VEDTAK,type:c.FORSTEGANGSSOKNAD},allAksjonspunktApproved:!0}},M={args:{behandling:{uuid:"1",status:F.FATTER_VEDTAK,type:c.FORSTEGANGSSOKNAD,behandlingsresultat:{type:I.OPPHOR}},allAksjonspunktApproved:!0}},j={args:{behandling:{uuid:"1",status:F.FATTER_VEDTAK,type:c.KLAGE,behandlingsresultat:{type:I.OPPHOR}},allAksjonspunktApproved:!0}},U={args:{behandling:{uuid:"1",status:F.FATTER_VEDTAK,type:c.FORSTEGANGSSOKNAD,behandlingsresultat:{type:I.OPPHOR}},allAksjonspunktApproved:!1}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    behandling: {
      uuid: '1',
      status: BehandlingStatusEnum.FATTER_VEDTAK,
      type: BehandlingTypeEnum.FORSTEGANGSSOKNAD
    } as BehandlingAppKontekst,
    allAksjonspunktApproved: true
  }
}`,...B.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    behandling: {
      uuid: '1',
      status: BehandlingStatusEnum.FATTER_VEDTAK,
      type: BehandlingTypeEnum.FORSTEGANGSSOKNAD,
      behandlingsresultat: {
        type: BehandlingResultatType.OPPHOR
      }
    } as BehandlingAppKontekst,
    allAksjonspunktApproved: true
  }
}`,...M.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    behandling: {
      uuid: '1',
      status: BehandlingStatusEnum.FATTER_VEDTAK,
      type: BehandlingTypeEnum.KLAGE,
      behandlingsresultat: {
        type: BehandlingResultatType.OPPHOR
      }
    } as BehandlingAppKontekst,
    allAksjonspunktApproved: true
  }
}`,...j.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    behandling: {
      uuid: '1',
      status: BehandlingStatusEnum.FATTER_VEDTAK,
      type: BehandlingTypeEnum.FORSTEGANGSSOKNAD,
      behandlingsresultat: {
        type: BehandlingResultatType.OPPHOR
      }
    } as BehandlingAppKontekst,
    allAksjonspunktApproved: false
  }
}`,...U.parameters?.docs?.source}}};const Yn=["EtterFatterVedtakOgGodkjent","EtterGodkjenning","EtterGodkjenningAvKlage","EtterTilbakesendingTilSaksbehandler"];export{B as EtterFatterVedtakOgGodkjent,M as EtterGodkjenning,j as EtterGodkjenningAvKlage,U as EtterTilbakesendingTilSaksbehandler,Yn as __namedExportsOrder,Cn as default};
