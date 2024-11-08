import{j as f}from"./jsx-runtime-DR9Q75dM.js";import{c as T,u as we,B as ne,S as Ee,a as Me,b as xe,d as L,D as Oe,H as ke,e as Ce,W as Se,f as De,L as R,g as Ne,h as Pe,M as je,t as Ie,P as Te,m as Le,i as Re}from"./nb_NO-D8IO9Kof.js";import{r as i,R as p,a as Ae}from"./index-DRjF_FHU.js";import{r as He}from"./index-rX-Bn4lm.js";import"./v4-CQkTLCs1.js";import"./dayjs.min-DN4LN79F.js";const Fe=i.createContext(void 0),Be=()=>i.useContext(Fe);var ze=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};function qe(e,t){return`${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`}function Ke(e={}){const{name:t,hookName:n="useContext",providerName:o="Provider",errorMessage:r,defaultValue:a}=e,l=i.createContext(a),d=i.forwardRef((g,h)=>{var{children:y}=g,b=ze(g,["children"]);const w=p.useMemo(()=>b,Object.values(b));return p.createElement(l.Provider,{value:h?Object.assign(Object.assign({},w),{ref:h}):w},y)});function m(g=!0){var h;const y=i.useContext(l);if(!y&&g){const b=new Error(r??qe(n,o));throw b.name="ContextError",(h=Error.captureStackTrace)===null||h===void 0||h.call(Error,b,m),b}return y}return l.displayName=t,[d,m]}const[Ve,re]=Ke({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"});var D=function(){return D=Object.assign||function(t){for(var n,o=1,r=arguments.length;o<r;o++){n=arguments[o];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},D.apply(this,arguments)};var $e=i.createContext(void 0);function We(){var e=i.useContext($e);if(!e)throw new Error("useDayPicker must be used within a DayPickerProvider.");return e}i.createContext(void 0);i.forwardRef(function(e,t){var n=We(),o=n.classNames,r=n.styles,a=[o.button_reset,o.button];e.className&&a.push(e.className);var l=a.join(" "),d=D(D({},r.button_reset),r.button);return e.style&&Object.assign(d,e.style),f.jsx("button",D({},e,{ref:t,type:"button",className:l,style:d}))});i.createContext(void 0);i.createContext(void 0);var v;(function(e){e.Outside="outside",e.Disabled="disabled",e.Selected="selected",e.Hidden="hidden",e.Today="today",e.RangeStart="range_start",e.RangeEnd="range_end",e.RangeMiddle="range_middle"})(v||(v={}));v.Selected;v.Disabled;v.Hidden;v.Today;v.RangeEnd;v.RangeMiddle;v.RangeStart;v.Outside;i.createContext(void 0);i.createContext(void 0);i.createContext(void 0);const Ue=i.createContext(null);i.createContext({hasDropdown:!1,year:new Date,toYear:()=>null,disabled:[],onSelect:()=>null});function Ye(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Xe(e){return e instanceof Element||e instanceof Ye(e).Element}var F=typeof document<"u"?i.useLayoutEffect:i.useEffect;let A=!1,Ze=0;const X=()=>"floating-ui-"+Ze++;function Ge(){const[e,t]=i.useState(()=>A?X():void 0);return F(()=>{e==null&&t(X())},[]),i.useEffect(()=>{A||(A=!0)},[]),e}const Je=Ae.useId,Qe=Je||Ge;function et(e){return"data-floating-ui-"+e}const tt=i.createContext(null);function ot(e){let{id:t,root:n}=e===void 0?{}:e;const[o,r]=i.useState(null),a=Qe(),l=nt(),d=i.useMemo(()=>({id:t,root:n,portalContext:l,uniqueId:a}),[t,n,l,a]),m=i.useRef();return F(()=>()=>{o==null||o.remove()},[o,d]),F(()=>{if(m.current===d)return;m.current=d;const{id:g,root:h,portalContext:y,uniqueId:b}=d,w=g?document.getElementById(g):null,C=et("portal");if(w){const c=document.createElement("div");c.id=b,c.setAttribute(C,""),w.appendChild(c),r(c)}else{let c=h||(y==null?void 0:y.portalNode);c&&!Xe(c)&&(c=c.current),c=c||document.body;let E=null;g&&(E=document.createElement("div"),E.id=g,c.appendChild(E));const M=document.createElement("div");M.id=b,M.setAttribute(C,""),c=E||c,c.appendChild(M),r(M)}},[d]),o}const nt=()=>i.useContext(tt);var rt=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};const at=i.forwardRef((e,t)=>{var{className:n}=e,o=rt(e,["className"]);return p.createElement("div",Object.assign({},o,{ref:t,className:T("navds-modal__body",n)}))});var it=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};const st=i.forwardRef((e,t)=>{var{className:n}=e,o=it(e,["className"]);return p.createElement("div",Object.assign({},o,{ref:t,className:T("navds-modal__footer",n)}))});var lt=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};const ae=i.forwardRef((e,t)=>{var{children:n,className:o,closeButton:r=!0}=e,a=lt(e,["children","className","closeButton"]);const l=re(),d=we("Modal");return p.createElement("div",Object.assign({},a,{ref:t,className:T("navds-modal__header",o)}),l.closeHandler&&r&&p.createElement(ne,{type:"button",className:"navds-modal__button",size:"small",variant:"tertiary-neutral",onKeyDown:m=>{["Enter"," "].includes(m.key)&&m.repeat&&m.preventDefault()},onClick:l.closeHandler,icon:p.createElement(Ee,{title:d("close")})}),n)}),Z=({clientX:e,clientY:t},{left:n,top:o,right:r,bottom:a})=>!(e<n||t<o||e>r||t>a);function dt(e,t,n){if(!(t&&t.closeButton===!1))return n?()=>{var o;return n()!==!1&&((o=e.current)===null||o===void 0?void 0:o.close())}:()=>{var o;return(o=e.current)===null||o===void 0?void 0:o.close()}}const j="navds-modal__document-body";function ct(e,t,n){p.useEffect(()=>{if(n||!e.current||!t)return;e.current.open&&document.body.classList.add(j);const o=new MutationObserver(()=>{var r;!((r=e.current)===null||r===void 0)&&r.open?document.body.classList.add(j):document.body.classList.remove(j)});return o.observe(e.current,{attributes:!0,attributeFilter:["open"]}),()=>{o.disconnect(),document.body.classList.remove(j)}},[e,t,n])}const k=typeof window<"u"&&(window.HTMLDialogElement===void 0||navigator.userAgent.includes("jsdom"));function ie(e,t){var n="on"+t.type.toLowerCase();return typeof e[n]=="function"&&e[n](t),e.dispatchEvent(t)}function N(e){for(;e;){if(e.localName==="dialog")return e;e.parentElement?e=e.parentElement:e.parentNode?e=e.parentNode.host:e=null}return null}function se(e){for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;e&&e.blur&&e!==document.body&&e.blur()}function ut(e,t){for(var n=0;n<e.length;++n)if(e[n]===t)return!0;return!1}function H(e){return!e||!e.hasAttribute("method")?!1:e.getAttribute("method").toLowerCase()==="dialog"}function le(e){var t=["button","input","keygen","select","textarea"],n=t.map(function(l){return l+":not([disabled])"});n.push('[tabindex]:not([disabled]):not([tabindex=""])');var o=e.querySelector(n.join(", "));if(!o&&"attachShadow"in Element.prototype)for(var r=e.querySelectorAll("*"),a=0;a<r.length&&!(r[a].tagName&&r[a].shadowRoot&&(o=le(r[a].shadowRoot),o));a++);return o}function G(e){return e.isConnected||document.body.contains(e)}function de(e){if(e.submitter)return e.submitter;var t=e.target;if(!(t instanceof HTMLFormElement))return null;var n=s.formSubmitter;if(!n){var o=e.target,r="getRootNode"in o&&o.getRootNode()||document;n=r.activeElement}return!n||n.form!==t?null:n}function ft(e){if(!e.defaultPrevented){var t=e.target,n=s.imagemapUseValue,o=de(e);n===null&&o&&(n=o.value);var r=N(t);if(r){var a=o&&o.getAttribute("formmethod")||t.getAttribute("method");a==="dialog"&&(e.preventDefault(),n!=null?r.close(n):r.close())}}}function ce(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),e.addEventListener("submit",ft,!1),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){var t=new MutationObserver(this.maybeHideModal.bind(this));t.observe(e,{attributes:!0,attributeFilter:["open"]})}else{var n=!1,o=(function(){n?this.downgradeModal():this.maybeHideModal(),n=!1}).bind(this),r,a=function(l){if(l.target===e){var d="DOMNodeRemoved";n|=l.type.substr(0,d.length)===d,window.clearTimeout(r),r=window.setTimeout(o,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(l){e.addEventListener(l,a)})}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}ce.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&G(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),s.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropMouseEvent_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var t=document.createElement("div");this.dialog_.insertBefore(t,this.dialog_.firstChild),t.tabIndex=-1,t.focus(),this.dialog_.removeChild(t)}var n=document.createEvent("MouseEvents");n.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(n),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),e||(e=le(this.dialog_)),se(document.activeElement),e&&e.focus()},updateZIndex:function(e,t){if(e<t)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=t},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!G(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!s.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");this.setOpen(!0),this.openAsModal_=!0,s.needsCentering(this.dialog_)?(s.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),e!==void 0&&(this.dialog_.returnValue=e);var t=new window.CustomEvent("close",{bubbles:!1,cancelable:!1});ie(this.dialog_,t)}};var s={};s.reposition=function(e){var t=document.body.scrollTop||document.documentElement.scrollTop,n=t+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(t,n)+"px"};s.isInlinePositionSetByStylesheet=function(e){for(var t=0;t<document.styleSheets.length;++t){var n=document.styleSheets[t],o=null;try{o=n.cssRules}catch{}if(o)for(var r=0;r<o.length;++r){var a=o[r],l=null;try{l=document.querySelectorAll(a.selectorText)}catch{}if(!(!l||!ut(l,e))){var d=a.style.getPropertyValue("top"),m=a.style.getPropertyValue("bottom");if(d&&d!=="auto"||m&&m!=="auto")return!0}}}return!1};s.needsCentering=function(e){var t=window.getComputedStyle(e);return t.position!=="absolute"||e.style.top!=="auto"&&e.style.top!==""||e.style.bottom!=="auto"&&e.style.bottom!==""?!1:!s.isInlinePositionSetByStylesheet(e)};s.forceRegisterDialog=function(e){if(e.showModal&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),e.localName!=="dialog")throw new Error("Failed to register dialog: The element is not a dialog.");new ce(e)};s.registerDialog=function(e){e.showModal||s.forceRegisterDialog(e)};s.DialogManager=function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",(function(t){this.forwardTab_=void 0,t.stopPropagation(),e([])}).bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(t){var n=[];t.forEach(function(o){for(var r=0,a;a=o.removedNodes[r];++r)a instanceof Element&&(a.localName==="dialog"&&n.push(a),n=n.concat(a.querySelectorAll("dialog")))}),n.length&&e(n)}))};s.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})};s.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()};s.DialogManager.prototype.updateStacking=function(){for(var e=this.zIndexHigh_,t=0,n;n=this.pendingDialogStack[t];++t)n.updateZIndex(--e,--e),t===0&&(this.overlay.style.zIndex=--e);var o=this.pendingDialogStack[0];if(o){var r=o.dialog.parentNode||document.body;r.appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)};s.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=N(e);){for(var t=0,n;n=this.pendingDialogStack[t];++t)if(n.dialog===e)return t===0;e=e.parentElement}return!1};s.DialogManager.prototype.handleFocus_=function(e){var t=e.composedPath?e.composedPath()[0]:e.target;if(!this.containedByTopDialog_(t)&&document.activeElement!==document.documentElement&&(e.preventDefault(),e.stopPropagation(),se(t),this.forwardTab_!==void 0)){var n=this.pendingDialogStack[0],o=n.dialog,r=o.compareDocumentPosition(t);return r&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?n.focus_():t!==document.documentElement&&document.documentElement.focus()),!1}};s.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,e.keyCode===27){e.preventDefault(),e.stopPropagation();var t=new window.CustomEvent("cancel",{bubbles:!1,cancelable:!0}),n=this.pendingDialogStack[0];n&&ie(n.dialog,t)&&n.dialog.close()}else e.keyCode===9&&(this.forwardTab_=!e.shiftKey)};s.DialogManager.prototype.checkDOM_=function(e){var t=this.pendingDialogStack.slice();t.forEach(function(n){e.indexOf(n.dialog)!==-1?n.downgradeModal():n.maybeHideModal()})};s.DialogManager.prototype.pushDialog=function(e){var t=(this.zIndexHigh_-this.zIndexLow_)/2-1;return this.pendingDialogStack.length>=t?!1:(this.pendingDialogStack.unshift(e)===1&&this.blockDocument(),this.updateStacking(),!0)};s.DialogManager.prototype.removeDialog=function(e){var t=this.pendingDialogStack.indexOf(e);t!==-1&&(this.pendingDialogStack.splice(t,1),this.pendingDialogStack.length===0&&this.unblockDocument(),this.updateStacking())};k&&(s.dm=new s.DialogManager,s.formSubmitter=null,s.imagemapUseValue=null);if(k){var J=document.createElement("form");if(J.setAttribute("method","dialog"),J.method!=="dialog"){var O=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(O){var mt=O.get;O.get=function(){return H(this)?"dialog":mt.call(this)};var ht=O.set;O.set=function(e){return typeof e=="string"&&e.toLowerCase()==="dialog"?this.setAttribute("method",e):ht.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",O)}}document.addEventListener("click",function(e){if(s.formSubmitter=null,s.imagemapUseValue=null,!e.defaultPrevented){var t=e.target;if("composedPath"in e){var n=e.composedPath();t=n.shift()||t}if(!(!t||!H(t.form))){var o=t.type==="submit"&&["button","input"].indexOf(t.localName)>-1;if(!o){if(!(t.localName==="input"&&t.type==="image"))return;s.imagemapUseValue=e.offsetX+","+e.offsetY}var r=N(t);r&&(s.formSubmitter=t)}}},!1),document.addEventListener("submit",function(e){var t=e.target,n=N(t);if(!n){var o=de(e),r=o&&o.getAttribute("formmethod")||t.getAttribute("method");r==="dialog"&&e.preventDefault()}});var pt=HTMLFormElement.prototype.submit,gt=function(){if(!H(this))return pt.call(this);var e=N(this);e&&e.close()};HTMLFormElement.prototype.submit=gt}var bt=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};const Q="navds-modal--polyfilled",P=i.forwardRef((e,t)=>{var n,o,{header:r,children:a,open:l,onBeforeClose:d,onCancel:m,closeOnBackdropClick:g,width:h,placement:y,portal:b,className:w,"aria-labelledby":C,style:c,onClick:E,onMouseDown:M}=e,z=bt(e,["header","children","open","onBeforeClose","onCancel","closeOnBackdropClick","width","placement","portal","className","aria-labelledby","style","onClick","onMouseDown"]);const u=i.useRef(null),fe=Me(u,t),q=xe(),me=(n=Be())===null||n===void 0?void 0:n.rootElement,_=ot({root:me}),he=i.useContext(Ue),K=re(!1)!==void 0;K&&!he&&console.error("Modals should not be nested"),i.useEffect(()=>{k&&u.current&&_&&(s.registerDialog(u.current),u.current.classList.add(Q)),u.current&&_&&(u.current.autofocus=!0)},[_]),i.useEffect(()=>{u.current&&_&&l!==void 0&&(l&&!u.current.open?u.current.showModal():!l&&u.current.open&&u.current.close())},[_,l]),ct(u,_,K);const V=typeof h=="string"&&["small","medium"].includes(h),pe=T("navds-modal",w,{[Q]:k,"navds-modal--autowidth":!h,[`navds-modal--${h}`]:V,"navds-modal--top":y==="top"&&!k}),ge=Object.assign(Object.assign({},c),V?{}:{width:h}),$=i.useRef({clientX:0,clientY:0}),be=x=>{$.current=x},W=g&&!k,ve=x=>{if(x.target!==u.current)return;const Y=u.current.getBoundingClientRect();Z($.current,Y)||Z(x,Y)||d!==void 0&&d()===!1||u.current.close()},ye=x=>{d&&d()===!1&&x.preventDefault()},_e=!C&&!z["aria-label"]&&r?q:C,U=p.createElement("dialog",Object.assign({},z,{ref:fe,className:pe,style:ge,onCancel:L(m,ye),onClick:W?L(E,ve):E,onMouseDown:W?L(M,be):M,"aria-labelledby":_e}),p.createElement(Ve,{closeHandler:dt(u,r,d),ref:u},r&&p.createElement(ae,null,r.label&&p.createElement(Oe,{className:"navds-modal__label"},r.label),p.createElement(ke,{size:(o=r.size)!==null&&o!==void 0?o:"medium",level:"1",id:q},r.icon&&p.createElement("span",{className:"navds-modal__header-icon"},r.icon),r.heading)),a));return b?_?He.createPortal(U,_):null:U});P.Header=ae;P.Body=at;P.Footer=st;const vt="_button_kam5b_1",yt="_image_kam5b_5",_t="_text_kam5b_12",wt="_modal_kam5b_17",I={button:vt,image:yt,text:_t,modal:wt},ue=({showModal:e,closeEvent:t})=>{const n=Ce();return f.jsx(P,{className:I.modal,open:e,"aria-label":n.formatMessage({id:"MessagesModal.description"}),onClose:t,children:f.jsx(P.Body,{children:f.jsx(Se,{children:f.jsxs(De,{children:[f.jsx(R,{children:f.jsx(Ne,{className:I.image,title:n.formatMessage({id:"MessagesModal.description"})})}),f.jsx(R,{className:I.text,children:f.jsx(Pe,{size:"small",children:f.jsx(je,{id:"MessagesModal.text"})})}),f.jsx(R,{className:I.button,children:f.jsx(ne,{size:"small",variant:"primary",onClick:t,autoFocus:!0,type:"button",children:n.formatMessage({id:"MessagesModal.OK"})})})]})})})})};ue.__docgenInfo={description:`MessagesModal

Denne modalen vises etter at et brev har blitt bestilt.
Ved å trykke på knapp blir fritekst-feltet tømt.`,methods:[],displayName:"MessagesModal",props:{showModal:{required:!0,tsType:{name:"boolean"},description:""},closeEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Et=Ie(Le),B=({showModal:e,closeEvent:t})=>f.jsx(Te,{value:Et,children:f.jsx(ue,{showModal:e,closeEvent:t})});B.__docgenInfo={description:"",methods:[],displayName:"MessagesModalSakIndex",props:{showModal:{required:!0,tsType:{name:"boolean"},description:""},closeEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Nt={title:"sak/sak-meldinger/modal",component:B},Mt=({closeEvent:e})=>f.jsx(B,{showModal:!0,closeEvent:e}),S=Mt.bind({});S.args={closeEvent:Re("button-click")};var ee,te,oe;S.parameters={...S.parameters,docs:{...(ee=S.parameters)==null?void 0:ee.docs,source:{originalSource:`({
  closeEvent
}) => <MessagesModalSakIndex showModal closeEvent={closeEvent} />`,...(oe=(te=S.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};const Pt=["Default"];export{S as Default,Pt as __namedExportsOrder,Nt as default};
