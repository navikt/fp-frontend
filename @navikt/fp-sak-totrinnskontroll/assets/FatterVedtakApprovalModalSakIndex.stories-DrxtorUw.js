import{u as Ke,c as U,a as x,b as Le,L as be,R as He,B as he,o as Ge,E as ze,d as Ue,e as ye,S as $e,f as Ye,g as We,h as Xe,i as K,D as Ze,H as Je,j as Qe,k as D,l as ne,m as en,V as nn,M as L,n as y,p as B,P as tn,q as rn,r as an,s as on}from"./nb_NO-Bam_bfQ4.js";import{j as f}from"./jsx-runtime-D_zvdyIk.js";import{r as d,b as ln,R as g}from"./index-_2TAQcTa.js";import{r as sn}from"./index-0bQSHhiP.js";import"./v4-CtRu48qb.js";import"./dayjs.min-DkLNzaWO.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CQwh6Daz.js";var dn=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const un=d.forwardRef((e,t)=>{var{title:r,titleId:n}=e,a=dn(e,["title","titleId"]);let o=Ke();return o=r?n||"title-"+o:void 0,d.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:t,"aria-labelledby":o},a),r?d.createElement("title",{id:o},r):null,d.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9 2.25a.75.75 0 0 1 .75.75v1.25h4.5V3a.75.75 0 0 1 1.5 0v1.25h3.75c.69 0 1.25.56 1.25 1.25v13c0 .69-.56 1.25-1.25 1.25h-15c-.69 0-1.25-.56-1.25-1.25v-13c0-.69.56-1.25 1.25-1.25h3.75V3A.75.75 0 0 1 9 2.25M15.75 7a.75.75 0 0 1-1.5 0V5.75h-4.5V7a.75.75 0 0 1-1.5 0V5.75h-3.5v3.5h14.5v-3.5h-3.5zm-11 11.25v-7.5h14.5v7.5zm2-5.25a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM10.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM6.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))}),[gn,we]=U({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"});function cn(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function mn(e){return e instanceof Element||e instanceof cn(e).Element}var z=typeof document<"u"?d.useLayoutEffect:d.useEffect;let H=!1,pn=0;const te=()=>"floating-ui-"+pn++;function fn(){const[e,t]=d.useState(()=>H?te():void 0);return z(()=>{e==null&&t(te())},[]),d.useEffect(()=>{H||(H=!0)},[]),e}const kn=ln.useId,vn=kn||fn;function bn(e){return"data-floating-ui-"+e}const hn=d.createContext(null);function yn(e){let{id:t,root:r}=e===void 0?{}:e;const[n,a]=d.useState(null),o=vn(),s=wn(),i=d.useMemo(()=>({id:t,root:r,portalContext:s,uniqueId:o}),[t,r,s,o]),k=d.useRef();return z(()=>()=>{n==null||n.remove()},[n,i]),z(()=>{if(k.current===i)return;k.current=i;const{id:p,root:h,portalContext:b,uniqueId:w}=i,T=p?document.getElementById(p):null,m=bn("portal");if(T){const c=document.createElement("div");c.id=w,c.setAttribute(m,""),T.appendChild(c),a(c)}else{let c=h||(b==null?void 0:b.portalNode);c&&!mn(c)&&(c=c.current),c=c||document.body;let v=null;p&&(v=document.createElement("div"),v.id=p,c.appendChild(v));const E=document.createElement("div");E.id=w,E.setAttribute(m,""),c=v||c,c.appendChild(E),a(E)}},[i]),n}const wn=()=>d.useContext(hn),[et,En]=U();var An=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const[nt,Ee]=U({errorMessage:"useDateInputContext must be used with DateInputContext"}),Ae=d.forwardRef((e,t)=>{const{className:r,hideLabel:n=!1,label:a,description:o,variant:s="datepicker",setAnchorRef:i}=e,k=An(e,["className","hideLabel","label","description","variant","setAnchorRef"]),p=d.useRef(null),h=En().translate,{cn:b}=x(),w=s==="datepicker",T={prefix:w?"datepicker-input":"monthpicker-input",iconTitle:{open:w?"openDatePicker":"openMonthPicker",close:w?"closeDatePicker":"closeMonthPicker"}},m=Ee(),{inputProps:c,size:v="medium",inputDescriptionId:E,errorId:P,showErrorMsg:_,hasError:S,readOnly:u}=Le(e,T.prefix);return g.createElement("div",{className:b(r,"navds-form-field",`navds-form-field--${v}`,"navds-date__field",{"navds-text-field--error":S,"navds-date__field--error":S,"navds-form-field--disabled":!!c.disabled,"navds-text-field--disabled":!!c.disabled,"navds-form-field--readonly":u,"navds-text-field--readonly":u,"navds-date__field--readonly":u})},g.createElement(be,{htmlFor:c.id,size:v,className:b("navds-form-field__label",{"navds-sr-only":n})},u&&g.createElement(He,null),a),!!o&&g.createElement(he,{as:"div",className:b("navds-form-field__description",{"navds-sr-only":n}),id:E,size:v},o),g.createElement("div",{className:b("navds-date__field-wrapper")},g.createElement("input",Object.assign({ref:t},Ge(k,["error","errorId","size"]),c,{autoComplete:"off","aria-controls":m!=null&&m.open?m.ariaId:void 0,readOnly:u,className:b("navds-date__field-input","navds-text-field__input","navds-body-short",`navds-body-short--${v}`),size:w?11:14})),g.createElement("button",{disabled:c.disabled||u,tabIndex:u||m!=null&&m.open?-1:0,onClick:()=>{m==null||m.onOpen(),i==null||i(p.current)},type:"button",className:b("navds-date__field-button"),ref:p},g.createElement(un,{title:h(T.iconTitle[m!=null&&m.open?"close":"open"])}))),g.createElement("div",{className:b("navds-form-field__error"),id:P,"aria-relevant":"additions removals","aria-live":"polite"},_&&g.createElement(ze,{size:v,showIcon:!0},e.error)))});d.forwardRef((e,t)=>g.createElement(Ae,Object.assign({},e,{ref:t})));d.forwardRef((e,t)=>g.createElement(Ae,Object.assign({},e,{variant:"monthpicker",ref:t})));var Tn=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const _n=d.forwardRef((e,t)=>{var{className:r}=e,n=Tn(e,["className"]);const{cn:a}=x();return g.createElement("div",Object.assign({},n,{ref:t,className:a("navds-modal__body",r)}))});var jn=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const On=d.forwardRef((e,t)=>{var{className:r}=e,n=jn(e,["className"]);const{cn:a}=x();return g.createElement("div",Object.assign({},n,{ref:t,className:a("navds-modal__footer",r)}))});var Mn=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const Te=d.forwardRef((e,t)=>{var{children:r,className:n,closeButton:a=!0}=e,o=Mn(e,["children","className","closeButton"]);const{cn:s}=x(),i=we(),k=Ue("global");return g.createElement("div",Object.assign({},o,{ref:t,className:s("navds-modal__header",n)}),i.closeHandler&&a&&g.createElement(ye,{type:"button",className:s("navds-modal__button"),size:"small",variant:"tertiary-neutral",onKeyDown:p=>{["Enter"," "].includes(p.key)&&p.repeat&&p.preventDefault()},onClick:i.closeHandler,icon:g.createElement($e,{title:k("close")})}),r)}),re=({clientX:e,clientY:t},{left:r,top:n,right:a,bottom:o})=>!(e<r||t<n||e>a||t>o);function Sn(e,t,r){if(!(t&&t.closeButton===!1))return r?()=>{var n;return r()!==!1&&((n=e.current)===null||n===void 0?void 0:n.close())}:()=>{var n;return(n=e.current)===null||n===void 0?void 0:n.close()}}const F="navds-modal__document-body";function qn(e,t,r){g.useEffect(()=>{if(r||!e.current||!t)return;e.current.open&&document.body.classList.add(F);const n=new MutationObserver(()=>{var a;!((a=e.current)===null||a===void 0)&&a.open?document.body.classList.add(F):document.body.classList.remove(F)});return n.observe(e.current,{attributes:!0,attributeFilter:["open"]}),()=>{n.disconnect(),document.body.classList.remove(F)}},[e,t,r])}const M=typeof window<"u"&&(window.HTMLDialogElement===void 0||navigator.userAgent.includes("jsdom"));function _e(e,t){var r="on"+t.type.toLowerCase();return typeof e[r]=="function"&&e[r](t),e.dispatchEvent(t)}function q(e){for(;e;){if(e.localName==="dialog")return e;e.parentElement?e=e.parentElement:e.parentNode?e=e.parentNode.host:e=null}return null}function je(e){for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;e&&e.blur&&e!==document.body&&e.blur()}function Rn(e,t){for(var r=0;r<e.length;++r)if(e[r]===t)return!0;return!1}function G(e){return!e||!e.hasAttribute("method")?!1:e.getAttribute("method").toLowerCase()==="dialog"}function Oe(e){var t=["button","input","keygen","select","textarea"],r=t.map(function(s){return s+":not([disabled])"});r.push('[tabindex]:not([disabled]):not([tabindex=""])');var n=e.querySelector(r.join(", "));if(!n&&"attachShadow"in Element.prototype)for(var a=e.querySelectorAll("*"),o=0;o<a.length&&!(a[o].tagName&&a[o].shadowRoot&&(n=Oe(a[o].shadowRoot),n));o++);return n}function ae(e){return e.isConnected||document.body.contains(e)}function Me(e){if(e.submitter)return e.submitter;var t=e.target;if(!(t instanceof HTMLFormElement))return null;var r=l.formSubmitter;if(!r){var n=e.target,a="getRootNode"in n&&n.getRootNode()||document;r=a.activeElement}return!r||r.form!==t?null:r}function xn(e){if(!e.defaultPrevented){var t=e.target,r=l.imagemapUseValue,n=Me(e);r===null&&n&&(r=n.value);var a=q(t);if(a){var o=n&&n.getAttribute("formmethod")||t.getAttribute("method");o==="dialog"&&(e.preventDefault(),r!=null?a.close(r):a.close())}}}function Se(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),e.addEventListener("submit",xn,!1),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){var t=new MutationObserver(this.maybeHideModal.bind(this));t.observe(e,{attributes:!0,attributeFilter:["open"]})}else{var r=!1,n=(function(){r?this.downgradeModal():this.maybeHideModal(),r=!1}).bind(this),a,o=function(s){if(s.target===e){var i="DOMNodeRemoved";r|=s.type.substr(0,i.length)===i,window.clearTimeout(a),a=window.setTimeout(n,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(s){e.addEventListener(s,o)})}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}Se.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&ae(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),l.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropMouseEvent_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var t=document.createElement("div");this.dialog_.insertBefore(t,this.dialog_.firstChild),t.tabIndex=-1,t.focus(),this.dialog_.removeChild(t)}var r=document.createEvent("MouseEvents");r.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(r),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),e||(e=Oe(this.dialog_)),je(document.activeElement),e&&e.focus()},updateZIndex:function(e,t){if(e<t)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=t},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!ae(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!l.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");this.setOpen(!0),this.openAsModal_=!0,l.needsCentering(this.dialog_)?(l.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),e!==void 0&&(this.dialog_.returnValue=e);var t=new window.CustomEvent("close",{bubbles:!1,cancelable:!1});_e(this.dialog_,t)}};var l={};l.reposition=function(e){var t=document.body.scrollTop||document.documentElement.scrollTop,r=t+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(t,r)+"px"};l.isInlinePositionSetByStylesheet=function(e){for(var t=0;t<document.styleSheets.length;++t){var r=document.styleSheets[t],n=null;try{n=r.cssRules}catch{}if(n)for(var a=0;a<n.length;++a){var o=n[a],s=null;try{s=document.querySelectorAll(o.selectorText)}catch{}if(!(!s||!Rn(s,e))){var i=o.style.getPropertyValue("top"),k=o.style.getPropertyValue("bottom");if(i&&i!=="auto"||k&&k!=="auto")return!0}}}return!1};l.needsCentering=function(e){var t=window.getComputedStyle(e);return t.position!=="absolute"||e.style.top!=="auto"&&e.style.top!==""||e.style.bottom!=="auto"&&e.style.bottom!==""?!1:!l.isInlinePositionSetByStylesheet(e)};l.forceRegisterDialog=function(e){if(e.showModal&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),e.localName!=="dialog")throw new Error("Failed to register dialog: The element is not a dialog.");new Se(e)};l.registerDialog=function(e){e.showModal||l.forceRegisterDialog(e)};l.DialogManager=function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",(function(t){this.forwardTab_=void 0,t.stopPropagation(),e([])}).bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(t){var r=[];t.forEach(function(n){for(var a=0,o;o=n.removedNodes[a];++a)o instanceof Element&&(o.localName==="dialog"&&r.push(o),r=r.concat(o.querySelectorAll("dialog")))}),r.length&&e(r)}))};l.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})};l.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()};l.DialogManager.prototype.updateStacking=function(){for(var e=this.zIndexHigh_,t=0,r;r=this.pendingDialogStack[t];++t)r.updateZIndex(--e,--e),t===0&&(this.overlay.style.zIndex=--e);var n=this.pendingDialogStack[0];if(n){var a=n.dialog.parentNode||document.body;a.appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)};l.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=q(e);){for(var t=0,r;r=this.pendingDialogStack[t];++t)if(r.dialog===e)return t===0;e=e.parentElement}return!1};l.DialogManager.prototype.handleFocus_=function(e){var t=e.composedPath?e.composedPath()[0]:e.target;if(!this.containedByTopDialog_(t)&&document.activeElement!==document.documentElement&&(e.preventDefault(),e.stopPropagation(),je(t),this.forwardTab_!==void 0)){var r=this.pendingDialogStack[0],n=r.dialog,a=n.compareDocumentPosition(t);return a&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?r.focus_():t!==document.documentElement&&document.documentElement.focus()),!1}};l.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,e.keyCode===27){e.preventDefault(),e.stopPropagation();var t=new window.CustomEvent("cancel",{bubbles:!1,cancelable:!0}),r=this.pendingDialogStack[0];r&&_e(r.dialog,t)&&r.dialog.close()}else e.keyCode===9&&(this.forwardTab_=!e.shiftKey)};l.DialogManager.prototype.checkDOM_=function(e){var t=this.pendingDialogStack.slice();t.forEach(function(r){e.indexOf(r.dialog)!==-1?r.downgradeModal():r.maybeHideModal()})};l.DialogManager.prototype.pushDialog=function(e){var t=(this.zIndexHigh_-this.zIndexLow_)/2-1;return this.pendingDialogStack.length>=t?!1:(this.pendingDialogStack.unshift(e)===1&&this.blockDocument(),this.updateStacking(),!0)};l.DialogManager.prototype.removeDialog=function(e){var t=this.pendingDialogStack.indexOf(e);t!==-1&&(this.pendingDialogStack.splice(t,1),this.pendingDialogStack.length===0&&this.unblockDocument(),this.updateStacking())};M&&(l.dm=new l.DialogManager,l.formSubmitter=null,l.imagemapUseValue=null);if(M){var oe=document.createElement("form");if(oe.setAttribute("method","dialog"),oe.method!=="dialog"){var O=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(O){var Dn=O.get;O.get=function(){return G(this)?"dialog":Dn.call(this)};var Bn=O.set;O.set=function(e){return typeof e=="string"&&e.toLowerCase()==="dialog"?this.setAttribute("method",e):Bn.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",O)}}document.addEventListener("click",function(e){if(l.formSubmitter=null,l.imagemapUseValue=null,!e.defaultPrevented){var t=e.target;if("composedPath"in e){var r=e.composedPath();t=r.shift()||t}if(!(!t||!G(t.form))){var n=t.type==="submit"&&["button","input"].indexOf(t.localName)>-1;if(!n){if(!(t.localName==="input"&&t.type==="image"))return;l.imagemapUseValue=e.offsetX+","+e.offsetY}var a=q(t);a&&(l.formSubmitter=t)}}},!1),document.addEventListener("submit",function(e){var t=e.target,r=q(t);if(!r){var n=Me(e),a=n&&n.getAttribute("formmethod")||t.getAttribute("method");a==="dialog"&&e.preventDefault()}});var Pn=HTMLFormElement.prototype.submit,Fn=function(){if(!G(this))return Pn.call(this);var e=q(this);e&&e.close()};HTMLFormElement.prototype.submit=Fn}var Nn=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};const R=d.forwardRef((e,t)=>{var r,n,{header:a,children:o,open:s,onBeforeClose:i,onCancel:k,closeOnBackdropClick:p,width:h,placement:b,portal:w,className:T,"aria-labelledby":m,style:c,onClick:v,onMouseDown:E}=e,P=Nn(e,["header","children","open","onBeforeClose","onCancel","closeOnBackdropClick","width","placement","portal","className","aria-labelledby","style","onClick","onMouseDown"]);const{cn:_}=x(),S=d.useRef(_("navds-modal--polyfilled")),u=d.useRef(null),xe=Ye(u,t),Y=We(),De=(r=Xe())===null||r===void 0?void 0:r.rootElement,A=yn({root:De}),Be=Ee(!1),W=we(!1)!==void 0;W&&!Be&&console.error("Modals should not be nested"),d.useEffect(()=>{M&&u.current&&A&&(l.registerDialog(u.current),u.current.classList.add(S.current)),u.current&&A&&(u.current.autofocus=!0)},[A]),d.useEffect(()=>{u.current&&A&&s!==void 0&&(s&&!u.current.open?u.current.showModal():!s&&u.current.open&&u.current.close())},[A,s]),qn(u,A,W);const X=typeof h=="string"&&["small","medium"].includes(h),Pe=_("navds-modal",T,{[S.current]:M,"navds-modal--autowidth":!h,[`navds-modal--${h}`]:X,"navds-modal--top":b==="top"&&!M}),Fe=Object.assign(Object.assign({},c),X?{}:{width:h}),Z=d.useRef({clientX:0,clientY:0}),Ne=j=>{Z.current=j},J=p&&!M,Ve=j=>{if(j.target!==u.current)return;const ee=u.current.getBoundingClientRect();re(Z.current,ee)||re(j,ee)||i!==void 0&&i()===!1||u.current.close()},Ce=j=>{i&&i()===!1&&j.preventDefault()},Ie=!m&&!P["aria-label"]&&a?Y:m,Q=g.createElement("dialog",Object.assign({},P,{ref:xe,className:Pe,style:Fe,onCancel:K(k,Ce),onClick:J?K(v,Ve):v,onMouseDown:J?K(E,Ne):E,"aria-labelledby":Ie}),g.createElement(gn,{closeHandler:Sn(u,a,i),ref:u},a&&g.createElement(Te,null,a.label&&g.createElement(Ze,{className:_("navds-modal__label")},a.label),g.createElement(Je,{size:(n=a.size)!==null&&n!==void 0?n:"medium",level:"1",id:Y},a.icon&&g.createElement("span",{className:_("navds-modal__header-icon")},a.icon),a.heading)),o));return w?A?sn.createPortal(Q,A):null:Q});R.Header=Te;R.Body=_n;R.Footer=On;const Vn="_image_1vkl5_1",Cn={image:Vn},In=(e,t,r,n)=>e===y.TILBAKEKREVING?"FatterVedtakApprovalModal.Tilbakekreving":e===y.TILBAKEKREVING_REVURDERING?"FatterVedtakApprovalModal.TilbakekrevingRevurdering":e===y.KLAGE?"FatterVedtakApprovalModal.ModalDescriptionKlage":e===y.ANKE?"FatterVedtakApprovalModal.ModalDescriptionAnke":n?"FatterVedtakApprovalModal.UendretUtfall":t&&t.type===D.AVSLATT?"FatterVedtakApprovalModal.IkkeInnvilget":r?"FatterVedtakApprovalModal.OpphortVedtak":"FatterVedtakApprovalModal.InnvilgetVedtak",Kn=(e,t)=>t===y.KLAGE?"FatterVedtakApprovalModal.ModalDescriptionKlage":t===y.ANKE?"FatterVedtakApprovalModal.ModalDescriptionAnke":e?"FatterVedtakApprovalModal.ModalDescriptionOpphort":"FatterVedtakApprovalModal.ModalDescriptionApproval",$=e=>e===B.FATTER_VEDTAK,Ln=(e,t,r,n,a,o)=>e?$(t)?In(r,n,a,o):"":"FatterVedtakApprovalModal.VedtakReturneresTilSaksbehandler",Hn=e=>$(e)?"FatterVedtakApprovalModal.Innvilget":"",Gn=(e,t,r)=>$(e)?Kn(r,t):"FatterVedtakApprovalModal.ModalDescription",qe=({closeEvent:e,allAksjonspunktApproved:t,behandlingStatusKode:r,behandlingTypeKode:n,behandlingsresultat:a,harSammeResultatSomOriginalBehandling:o})=>{const s=Qe(),i=!!a&&a.type===D.OPPHOR,k=Ln(t,r,n,a,i,o),p=Hn(r),h=Gn(r,n,i);return f.jsx(R,{width:"small",open:!0,"aria-label":s.formatMessage({id:h}),onClose:e,children:f.jsx(R.Body,{children:f.jsxs(ne,{justify:"space-between",align:"center",children:[f.jsxs(ne,{gap:"2",children:[f.jsx(en,{className:Cn.image,title:s.formatMessage({id:p})}),f.jsxs(nn,{gap:"1",children:[f.jsx(be,{size:"small",children:f.jsx(L,{id:k})}),f.jsx(he,{size:"small",children:f.jsx(L,{id:"FatterVedtakApprovalModal.GoToSearchPage"})})]})]}),f.jsx(ye,{size:"small",variant:"primary",onClick:e,autoFocus:!0,type:"button",children:f.jsx(L,{id:"FatterVedtakApprovalModal.Ok"})})]})})})};qe.__docgenInfo={description:`FatterVedtakApprovalModal

Denne modalen vises en lightbox etter at en beslutter har godkjent alle aksjonspunkter
med totrinnskontroll. Ved å trykke på knapp blir beslutter tatt tilbake til sokesiden.`,methods:[],displayName:"FatterVedtakApprovalModal",props:{closeEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},allAksjonspunktApproved:{required:!0,tsType:{name:"boolean"},description:""},behandlingsresultat:{required:!1,tsType:{name:"intersection['behandlingsresultat']",raw:"Behandling['behandlingsresultat']"},description:""},behandlingStatusKode:{required:!0,tsType:{name:"string"},description:""},behandlingTypeKode:{required:!0,tsType:{name:"string"},description:""},harSammeResultatSomOriginalBehandling:{required:!1,tsType:{name:"boolean"},description:""}}};const zn=rn(an),Re=({behandling:e,closeEvent:t,allAksjonspunktApproved:r})=>{var n;return f.jsx(tn,{value:zn,children:f.jsx(qe,{closeEvent:t,allAksjonspunktApproved:r,behandlingsresultat:e.behandlingsresultat,behandlingStatusKode:e.status,behandlingTypeKode:e.type,harSammeResultatSomOriginalBehandling:((n=e.behandlingsresultat)==null?void 0:n.erRevurderingMedUendretUtfall)||!1})})};Re.__docgenInfo={description:"",methods:[],displayName:"FatterVedtakTotrinnskontrollModalSakIndex",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
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
  harRedigertVedtaksbrev: boolean;
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
}>`}]},description:""},closeEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},allAksjonspunktApproved:{required:!0,tsType:{name:"boolean"},description:""}}};const tt={title:"sak/sak-totrinnskontroll-fatter-vedtak-modal",component:Re,args:{closeEvent:on("button-click")}},N={args:{behandling:{uuid:"1",status:B.FATTER_VEDTAK,type:y.FORSTEGANGSSOKNAD},allAksjonspunktApproved:!0}},V={args:{behandling:{uuid:"1",status:B.FATTER_VEDTAK,type:y.FORSTEGANGSSOKNAD,behandlingsresultat:{type:D.OPPHOR}},allAksjonspunktApproved:!0}},C={args:{behandling:{uuid:"1",status:B.FATTER_VEDTAK,type:y.KLAGE,behandlingsresultat:{type:D.OPPHOR}},allAksjonspunktApproved:!0}},I={args:{behandling:{uuid:"1",status:B.FATTER_VEDTAK,type:y.FORSTEGANGSSOKNAD,behandlingsresultat:{type:D.OPPHOR}},allAksjonspunktApproved:!1}};var le,ie,se;N.parameters={...N.parameters,docs:{...(le=N.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    behandling: {
      uuid: '1',
      status: BehandlingStatus.FATTER_VEDTAK,
      type: BehandlingType.FORSTEGANGSSOKNAD
    } as BehandlingAppKontekst,
    allAksjonspunktApproved: true
  }
}`,...(se=(ie=N.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var de,ue,ge;V.parameters={...V.parameters,docs:{...(de=V.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ge=(ue=V.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};var ce,me,pe;C.parameters={...C.parameters,docs:{...(ce=C.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(pe=(me=C.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var fe,ke,ve;I.parameters={...I.parameters,docs:{...(fe=I.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(ve=(ke=I.parameters)==null?void 0:ke.docs)==null?void 0:ve.source}}};const rt=["EtterFatterVedtakOgGodkjent","EtterGodkjenning","EtterGodkjenningAvKlage","EtterTilbakesendingTilSaksbehandler"];export{N as EtterFatterVedtakOgGodkjent,V as EtterGodkjenning,C as EtterGodkjenningAvKlage,I as EtterTilbakesendingTilSaksbehandler,rt as __namedExportsOrder,tt as default};
