import{j as f}from"./jsx-runtime-d079401a.js";import{a as ne}from"./chunk-AY7I2SME-c7b6cf8a.js";import{c as y,u as ae,B as Y,m as re,a as ie,b as le,o as se,s as de,D as P,K as ce,k as ue,d as fe,t as me,P as he,e as pe}from"./nb_NO-4c7f06af.js";import{r as s,R as u,a as ge}from"./index-f1f2c4b1.js";import{r as be}from"./index-c74c9f7f.js";var ve=globalThis&&globalThis.__rest||function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)o.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const ye=s.forwardRef((e,o)=>{var{level:n="1",size:t,spacing:a=!1,className:r,as:l}=e,c=ve(e,["level","size","spacing","className","as"]);let h=l??`h${n}`;return u.createElement(h,Object.assign({},c,{ref:o,className:y(r,"navds-heading",`navds-heading--${t}`,{"navds-typo--spacing":a})}))}),_e=ye;var we=globalThis&&globalThis.__rest||function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)o.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Me=s.forwardRef((e,o)=>{var{title:n,titleId:t}=e,a=we(e,["title","titleId"]);let r=ae();return r=n?t||"title-"+r:void 0,s.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:o,"aria-labelledby":r},a),n?s.createElement("title",{id:r},n):null,s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94 6.53 5.47Z",fill:"currentColor"}))}),Ee=Me;var Oe=globalThis&&globalThis.__rest||function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)o.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const xe=s.forwardRef((e,o)=>{var{className:n,size:t="medium",spacing:a,uppercase:r,as:l="p"}=e,c=Oe(e,["className","size","spacing","uppercase","as"]);return u.createElement(l,Object.assign({},c,{ref:o,className:y(n,"navds-detail",{"navds-detail--small":t==="small","navds-typo--spacing":!!a,"navds-typo--uppercase":!!r})}))}),Se=xe;var C=typeof document<"u"?s.useLayoutEffect:s.useEffect;let I=!1,ke=0;const z=()=>"floating-ui-"+ke++;function De(){const[e,o]=s.useState(()=>I?z():void 0);return C(()=>{e==null&&o(z())},[]),s.useEffect(()=>{I||(I=!0)},[]),e}const je=ge["useId".toString()],Ne=je||De,Pe=s.createContext(null);function Ie(e){let{id:o,root:n}=e===void 0?{}:e;const[t,a]=s.useState(null),r=Ne(),l=Te(),c=s.useMemo(()=>({id:o,root:n,portalContext:l,uniqueId:r}),[o,n,l,r]),h=s.useRef();return C(()=>()=>{t==null||t.remove()},[t,c]),C(()=>{if(h.current===c)return;h.current=c;const{id:m,root:N,portalContext:O,uniqueId:_}=c,x=m?document.getElementById(m):null,w="data-floating-ui-portal";if(x){const d=document.createElement("div");d.id=_,d.setAttribute(w,""),x.appendChild(d),a(d)}else{let d=(O==null?void 0:O.portalNode)||N||document.body,b=null;m&&(b=document.createElement("div"),b.id=m,d.appendChild(b));const p=document.createElement("div");p.id=_,p.setAttribute(w,""),d=b||d,d.appendChild(p),a(p)}},[c]),t}const Te=()=>s.useContext(Pe),L=u.createContext(null),D=typeof window<"u"&&(window.HTMLDialogElement===void 0||navigator.userAgent.includes("jsdom"));function W(e,o){var n="on"+o.type.toLowerCase();return typeof e[n]=="function"&&e[n](o),e.dispatchEvent(o)}function E(e){for(;e;){if(e.localName==="dialog")return e;e.parentElement?e=e.parentElement:e.parentNode?e=e.parentNode.host:e=null}return null}function Z(e){for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;e&&e.blur&&e!==document.body&&e.blur()}function Ce(e,o){for(var n=0;n<e.length;++n)if(e[n]===o)return!0;return!1}function T(e){return!e||!e.hasAttribute("method")?!1:e.getAttribute("method").toLowerCase()==="dialog"}function G(e){var o=["button","input","keygen","select","textarea"],n=o.map(function(l){return l+":not([disabled])"});n.push('[tabindex]:not([disabled]):not([tabindex=""])');var t=e.querySelector(n.join(", "));if(!t&&"attachShadow"in Element.prototype)for(var a=e.querySelectorAll("*"),r=0;r<a.length&&!(a[r].tagName&&a[r].shadowRoot&&(t=G(a[r].shadowRoot),t));r++);return t}function $(e){return e.isConnected||document.body.contains(e)}function J(e){if(e.submitter)return e.submitter;var o=e.target;if(!(o instanceof HTMLFormElement))return null;var n=i.formSubmitter;if(!n){var t=e.target,a="getRootNode"in t&&t.getRootNode()||document;n=a.activeElement}return!n||n.form!==o?null:n}function Le(e){if(!e.defaultPrevented){var o=e.target,n=i.imagemapUseValue,t=J(e);n===null&&t&&(n=t.value);var a=E(o);if(a){var r=t&&t.getAttribute("formmethod")||o.getAttribute("method");r==="dialog"&&(e.preventDefault(),n!=null?a.close(n):a.close())}}}function Q(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),e.addEventListener("submit",Le,!1),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){var o=new MutationObserver(this.maybeHideModal.bind(this));o.observe(e,{attributes:!0,attributeFilter:["open"]})}else{var n=!1,t=(function(){n?this.downgradeModal():this.maybeHideModal(),n=!1}).bind(this),a,r=function(l){if(l.target===e){var c="DOMNodeRemoved";n|=l.type.substr(0,c.length)===c,window.clearTimeout(a),a=window.setTimeout(t,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(l){e.addEventListener(l,r)})}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}Q.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&$(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),i.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropMouseEvent_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var o=document.createElement("div");this.dialog_.insertBefore(o,this.dialog_.firstChild),o.tabIndex=-1,o.focus(),this.dialog_.removeChild(o)}var n=document.createEvent("MouseEvents");n.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(n),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),e||(e=G(this.dialog_)),Z(document.activeElement),e&&e.focus()},updateZIndex:function(e,o){if(e<o)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=o},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!$(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!i.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");this.setOpen(!0),this.openAsModal_=!0,i.needsCentering(this.dialog_)?(i.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),e!==void 0&&(this.dialog_.returnValue=e);var o=new window.CustomEvent("close",{bubbles:!1,cancelable:!1});W(this.dialog_,o)}};var i={};i.reposition=function(e){var o=document.body.scrollTop||document.documentElement.scrollTop,n=o+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(o,n)+"px"};i.isInlinePositionSetByStylesheet=function(e){for(var o=0;o<document.styleSheets.length;++o){var n=document.styleSheets[o],t=null;try{t=n.cssRules}catch{}if(t)for(var a=0;a<t.length;++a){var r=t[a],l=null;try{l=document.querySelectorAll(r.selectorText)}catch{}if(!(!l||!Ce(l,e))){var c=r.style.getPropertyValue("top"),h=r.style.getPropertyValue("bottom");if(c&&c!=="auto"||h&&h!=="auto")return!0}}}return!1};i.needsCentering=function(e){var o=window.getComputedStyle(e);return o.position!=="absolute"||e.style.top!=="auto"&&e.style.top!==""||e.style.bottom!=="auto"&&e.style.bottom!==""?!1:!i.isInlinePositionSetByStylesheet(e)};i.forceRegisterDialog=function(e){if(e.showModal&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),e.localName!=="dialog")throw new Error("Failed to register dialog: The element is not a dialog.");new Q(e)};i.registerDialog=function(e){e.showModal||i.forceRegisterDialog(e)};i.DialogManager=function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",(function(o){this.forwardTab_=void 0,o.stopPropagation(),e([])}).bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=1e5+150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(o){var n=[];o.forEach(function(t){for(var a=0,r;r=t.removedNodes[a];++a){if(r instanceof Element)r.localName==="dialog"&&n.push(r);else continue;n=n.concat(r.querySelectorAll("dialog"))}}),n.length&&e(n)}))};i.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})};i.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()};i.DialogManager.prototype.updateStacking=function(){for(var e=this.zIndexHigh_,o=0,n;n=this.pendingDialogStack[o];++o)n.updateZIndex(--e,--e),o===0&&(this.overlay.style.zIndex=--e);var t=this.pendingDialogStack[0];if(t){var a=t.dialog.parentNode||document.body;a.appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)};i.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=E(e);){for(var o=0,n;n=this.pendingDialogStack[o];++o)if(n.dialog===e)return o===0;e=e.parentElement}return!1};i.DialogManager.prototype.handleFocus_=function(e){var o=e.composedPath?e.composedPath()[0]:e.target;if(!this.containedByTopDialog_(o)&&document.activeElement!==document.documentElement&&(e.preventDefault(),e.stopPropagation(),Z(o),this.forwardTab_!==void 0)){var n=this.pendingDialogStack[0],t=n.dialog,a=t.compareDocumentPosition(o);return a&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?n.focus_():o!==document.documentElement&&document.documentElement.focus()),!1}};i.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,e.keyCode===27){e.preventDefault(),e.stopPropagation();var o=new window.CustomEvent("cancel",{bubbles:!1,cancelable:!0}),n=this.pendingDialogStack[0];n&&W(n.dialog,o)&&n.dialog.close()}else e.keyCode===9&&(this.forwardTab_=!e.shiftKey)};i.DialogManager.prototype.checkDOM_=function(e){var o=this.pendingDialogStack.slice();o.forEach(function(n){e.indexOf(n.dialog)!==-1?n.downgradeModal():n.maybeHideModal()})};i.DialogManager.prototype.pushDialog=function(e){var o=(this.zIndexHigh_-this.zIndexLow_)/2-1;return this.pendingDialogStack.length>=o?!1:(this.pendingDialogStack.unshift(e)===1&&this.blockDocument(),this.updateStacking(),!0)};i.DialogManager.prototype.removeDialog=function(e){var o=this.pendingDialogStack.indexOf(e);o!==-1&&(this.pendingDialogStack.splice(o,1),this.pendingDialogStack.length===0&&this.unblockDocument(),this.updateStacking())};D&&(i.dm=new i.DialogManager,i.formSubmitter=null,i.imagemapUseValue=null);if(D){var V=document.createElement("form");if(V.setAttribute("method","dialog"),V.method!=="dialog"){var v=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(v){var Ae=v.get;v.get=function(){return T(this)?"dialog":Ae.call(this)};var Re=v.set;v.set=function(e){return typeof e=="string"&&e.toLowerCase()==="dialog"?this.setAttribute("method",e):Re.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",v)}}document.addEventListener("click",function(e){if(i.formSubmitter=null,i.imagemapUseValue=null,!e.defaultPrevented){var o=e.target;if("composedPath"in e){var n=e.composedPath();o=n.shift()||o}if(!(!o||!T(o.form))){var t=o.type==="submit"&&["button","input"].indexOf(o.localName)>-1;if(!t){if(!(o.localName==="input"&&o.type==="image"))return;i.imagemapUseValue=e.offsetX+","+e.offsetY}var a=E(o);a&&(i.formSubmitter=o)}}},!1),document.addEventListener("submit",function(e){var o=e.target,n=E(o);if(!n){var t=J(e),a=t&&t.getAttribute("formmethod")||o.getAttribute("method");a==="dialog"&&e.preventDefault()}});var He=HTMLFormElement.prototype.submit,Fe=function(){if(!T(this))return He.call(this);var e=E(this);e&&e.close()};HTMLFormElement.prototype.submit=Fe}const Be=i;var ze=globalThis&&globalThis.__rest||function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)o.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const $e=s.forwardRef((e,o)=>{var{className:n}=e,t=ze(e,["className"]);return u.createElement("div",Object.assign({},t,{ref:o,className:y("navds-modal__body",n)}))}),Ve=$e;var Ke=globalThis&&globalThis.__rest||function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)o.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const qe=s.forwardRef((e,o)=>{var{children:n,className:t,closeButton:a=!0}=e,r=Ke(e,["children","className","closeButton"]);const l=s.useContext(L);return l===null?(console.error("<Modal.Header> has to be used within a <Modal>"),null):u.createElement("div",Object.assign({},r,{ref:o,className:y("navds-modal__header",t)}),l.closeHandler&&a&&u.createElement(Y,{type:"button",className:"navds-modal__button",size:"small",variant:"tertiary-neutral",onClick:l.closeHandler,icon:u.createElement(Ee,{title:"Lukk modalvindu"})}),n)}),ee=qe;var Ue=globalThis&&globalThis.__rest||function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)o.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const Xe=s.forwardRef((e,o)=>{var{className:n}=e,t=Ue(e,["className"]);return u.createElement("div",Object.assign({},t,{ref:o,className:y("navds-modal__footer",n)}))}),Ye=Xe;function We(e,o,n){if(!(o&&o.closeButton===!1))return n?()=>{var t;return n()!==!1&&((t=e.current)===null||t===void 0?void 0:t.close())}:()=>{var t;return(t=e.current)===null||t===void 0?void 0:t.close()}}const S="navds-modal__document-body";function Ze(e,o){u.useEffect(()=>{if(!e.current||!o)return;e.current.open&&document.body.classList.add(S);const n=new MutationObserver(()=>{var t;!((t=e.current)===null||t===void 0)&&t.open?document.body.classList.add(S):document.body.classList.remove(S)});return n.observe(e.current,{attributes:!0,attributeFilter:["open"]}),()=>{n.disconnect(),document.body.classList.remove(S)}},[e,o])}var Ge=globalThis&&globalThis.__rest||function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)o.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const j=s.forwardRef((e,o)=>{var n,t,{header:a,children:r,open:l,onBeforeClose:c,onCancel:h,width:m,portal:N,className:O,"aria-labelledby":_,style:x}=e,w=Ge(e,["header","children","open","onBeforeClose","onCancel","width","portal","className","aria-labelledby","style"]);const d=s.useRef(null),b=s.useMemo(()=>re([d,o]),[o]),p=ie(),oe=(n=Qe())===null||n===void 0?void 0:n.rootElement,g=Ie({root:oe});s.useContext(L)&&console.error("Modals should not be nested"),s.useEffect(()=>{D&&d.current&&g&&Be.registerDialog(d.current)},[d,g]),s.useEffect(()=>{d.current&&g&&l!==void 0&&(l&&!d.current.open?d.current.showModal():!l&&d.current.open&&d.current.close())},[d,g,l]),Ze(d,g);const H=typeof m=="string"&&["small","medium"].includes(m),F=u.createElement("dialog",Object.assign({ref:b,className:y("navds-modal",O,{"navds-modal--polyfilled":D,"navds-modal--autowidth":!m,[`navds-modal--${m}`]:H}),style:Object.assign(Object.assign({},x),H?{}:{width:m}),onCancel:B=>{c&&c()===!1?B.preventDefault():h&&h(B)},"aria-labelledby":!_&&!w["aria-label"]&&a?p:_},w),u.createElement(L.Provider,{value:{closeHandler:We(d,a,c)}},a&&u.createElement(ee,null,a.label&&u.createElement(Se,{className:"navds-modal__label"},a.label),u.createElement(_e,{size:(t=a.size)!==null&&t!==void 0?t:"medium",level:"1",id:p},u.createElement("span",{className:"navds-modal__header-icon"},a.icon),a.heading)),r));return N?g?be.createPortal(F,g):null:F});j.Header=ee;j.Body=Ve;j.Footer=Ye;const K=j;globalThis&&globalThis.__rest;const Je=s.createContext(void 0),Qe=()=>s.useContext(Je),et=""+new URL("innvilget_valgt-ced6d173.svg",import.meta.url).href,tt="_button_1aa16_1",ot="_image_1aa16_5",nt="_text_1aa16_11",at="_modal_1aa16_16",k={button:tt,image:ot,text:nt,modal:at},A=({showModal:e,closeEvent:o})=>{const n=le();return f.jsx(K,{className:k.modal,open:e,"aria-label":n.formatMessage({id:"MessagesModal.description"}),onClose:o,children:f.jsx(K.Body,{children:f.jsx(se,{children:f.jsxs(de,{children:[f.jsx(P,{children:f.jsx(ce,{className:k.image,alt:n.formatMessage({id:"MessagesModal.description"}),src:et})}),f.jsx(P,{className:k.text,children:f.jsx(ue,{size:"small",children:f.jsx(fe,{id:"MessagesModal.text"})})}),f.jsx(P,{className:k.button,children:f.jsx(Y,{size:"small",variant:"primary",onClick:o,autoFocus:!0,type:"button",children:n.formatMessage({id:"MessagesModal.OK"})})})]})})})})};try{A.displayName="MessagesModal",A.__docgenInfo={description:`MessagesModal

Denne modalen vises etter at et brev har blitt bestilt.
Ved å trykke på knapp blir fritekst-feltet tømt.`,displayName:"MessagesModal",props:{showModal:{defaultValue:null,description:"",name:"showModal",required:!0,type:{name:"boolean"}},closeEvent:{defaultValue:null,description:"",name:"closeEvent",required:!0,type:{name:"() => void"}}}}}catch{}const rt=me(pe),R=({showModal:e,closeEvent:o})=>f.jsx(he,{value:rt,children:f.jsx(A,{showModal:e,closeEvent:o})}),te=R;try{R.displayName="MessagesModalSakIndex",R.__docgenInfo={description:"",displayName:"MessagesModalSakIndex",props:{showModal:{defaultValue:null,description:"",name:"showModal",required:!0,type:{name:"boolean"}},closeEvent:{defaultValue:null,description:"",name:"closeEvent",required:!0,type:{name:"() => void"}}}}}catch{}const ft={title:"sak/sak-meldinger/modal",component:te},it=({closeEvent:e})=>f.jsx(te,{showModal:!0,closeEvent:e}),M=it.bind({});M.args={closeEvent:ne("button-click")};var q,U,X;M.parameters={...M.parameters,docs:{...(q=M.parameters)==null?void 0:q.docs,source:{originalSource:`({
  closeEvent
}) => <MessagesModalSakIndex showModal closeEvent={closeEvent} />`,...(X=(U=M.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};const mt=["Default"];export{M as Default,mt as __namedExportsOrder,ft as default};
//# sourceMappingURL=MessagesModalSakIndex.stories-8b74cf9c.js.map
