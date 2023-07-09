import{j as g}from"./jsx-runtime-5926aa06.js";import{a as ye}from"./chunk-OPEUWD42-a3b45fd8.js";import{c as pe,m as At,B as st,u as St,N as re,E as Mt,o as wt,A as Ce,Z as Tt,L as Rt,F as Ae,a as xt,j as T,e as ae,t as Nt,P as Ft,b as Pt}from"./nb_NO-c215473b.js";import{R as Q,r as E,a as Dt,g as jt}from"./index-ebeaab24.js";import{r as It}from"./index-9c09ad76.js";import{p as it}from"./index-f50b85d6.js";let Ie=0;function Lt(e){const[t,n]=E.useState(e),o=e||t;return E.useEffect(()=>{t==null&&(Ie+=1,n(`aksel-icon-${Ie}`))},[t]),o}const Le=Q["useId"];function Ut(e){var t;if(Le!==void 0){const n=Le();return e??n.replace(/(:)/g,"")}return(t=Lt(e))!==null&&t!==void 0?t:""}var Vt=globalThis&&globalThis.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]]);return n};const Wt=E.forwardRef((e,t)=>{var{title:n,titleId:o}=e,a=Vt(e,["title","titleId"]);let d=Ut();return d=n?o||"title-"+d:void 0,E.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:t,"aria-labelledby":d},a),n?E.createElement("title",{id:d},n):null,E.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94 6.53 5.47Z",fill:"currentColor"}))}),Ht=Wt;var Me={exports:{}},V={},we={exports:{}},M={},Te={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var n=/input|select|textarea|button|object|iframe/;function o(c){var s=c.offsetWidth<=0&&c.offsetHeight<=0;if(s&&!c.innerHTML)return!0;try{var f=window.getComputedStyle(c);return s?f.getPropertyValue("overflow")!=="visible"||c.scrollWidth<=0&&c.scrollHeight<=0:f.getPropertyValue("display")=="none"}catch{return console.warn("Failed to inspect element style"),!1}}function a(c){for(var s=c,f=c.getRootNode&&c.getRootNode();s&&s!==document.body;){if(f&&s===f&&(s=f.host.parentNode),o(s))return!1;s=s.parentNode}return!0}function d(c,s){var f=c.nodeName.toLowerCase(),h=n.test(f)&&!c.disabled||f==="a"&&c.href||s;return h&&a(c)}function m(c){var s=c.getAttribute("tabindex");s===null&&(s=void 0);var f=isNaN(s);return(f||s>=0)&&d(c,!f)}function l(c){var s=[].slice.call(c.querySelectorAll("*"),0).reduce(function(f,h){return f.concat(h.shadowRoot?l(h.shadowRoot):[h])},[]);return s.filter(m)}e.exports=t.default})(Te,Te.exports);var ut=Te.exports;Object.defineProperty(M,"__esModule",{value:!0});M.resetState=Kt;M.log=Gt;M.handleBlur=ne;M.handleFocus=oe;M.markForFocusLater=zt;M.returnFocus=Yt;M.popWithoutFocus=Zt;M.setupScopedFocus=Xt;M.teardownScopedFocus=Jt;var qt=ut,Bt=$t(qt);function $t(e){return e&&e.__esModule?e:{default:e}}var H=[],W=null,Re=!1;function Kt(){H=[]}function Gt(){}function ne(){Re=!0}function oe(){if(Re){if(Re=!1,!W)return;setTimeout(function(){if(!W.contains(document.activeElement)){var e=(0,Bt.default)(W)[0]||W;e.focus()}},0)}}function zt(){H.push(document.activeElement)}function Yt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=null;try{H.length!==0&&(t=H.pop(),t.focus({preventScroll:e}));return}catch{console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}}function Zt(){H.length>0&&H.pop()}function Xt(e){W=e,window.addEventListener?(window.addEventListener("blur",ne,!1),document.addEventListener("focus",oe,!0)):(window.attachEvent("onBlur",ne),document.attachEvent("onFocus",oe))}function Jt(){W=null,window.addEventListener?(window.removeEventListener("blur",ne),document.removeEventListener("focus",oe)):(window.detachEvent("onBlur",ne),document.detachEvent("onFocus",oe))}var xe={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=m;var n=ut,o=a(n);function a(l){return l&&l.__esModule?l:{default:l}}function d(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return l.activeElement.shadowRoot?d(l.activeElement.shadowRoot):l.activeElement}function m(l,c){var s=(0,o.default)(l);if(!s.length){c.preventDefault();return}var f=void 0,h=c.shiftKey,R=s[0],x=s[s.length-1],P=d();if(l===P){if(!h)return;f=x}if(x===P&&!h&&(f=R),R===P&&h&&(f=x),f){c.preventDefault(),f.focus();return}var N=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),I=N!=null&&N[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(I){var F=s.indexOf(P);if(F>-1&&(F+=h?-1:1),f=s[F],typeof f>"u"){c.preventDefault(),f=h?x:R,f.focus();return}c.preventDefault(),f.focus()}}e.exports=t.default})(xe,xe.exports);var Qt=xe.exports,w={},en=function(){},tn=en,S={},dt={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(e){(function(){var t=!!(typeof window<"u"&&window.document&&window.document.createElement),n={canUseDOM:t,canUseWorkers:typeof Worker<"u",canUseEventListeners:t&&!!(window.addEventListener||window.attachEvent),canUseViewport:t&&!!window.screen};e.exports?e.exports=n:window.ExecutionEnvironment=n})()})(dt);var nn=dt.exports;Object.defineProperty(S,"__esModule",{value:!0});S.canUseDOM=S.SafeNodeList=S.SafeHTMLCollection=void 0;var on=nn,rn=an(on);function an(e){return e&&e.__esModule?e:{default:e}}var be=rn.default,ln=be.canUseDOM?window.HTMLElement:{};S.SafeHTMLCollection=be.canUseDOM?window.HTMLCollection:{};S.SafeNodeList=be.canUseDOM?window.NodeList:{};S.canUseDOM=be.canUseDOM;S.default=ln;Object.defineProperty(w,"__esModule",{value:!0});w.resetState=fn;w.log=pn;w.assertNodeList=ct;w.setElement=vn;w.validateElement=Pe;w.hide=mn;w.show=hn;w.documentNotReadyOrSSRTesting=yn;var sn=tn,un=cn(sn),dn=S;function cn(e){return e&&e.__esModule?e:{default:e}}var C=null;function fn(){C&&(C.removeAttribute?C.removeAttribute("aria-hidden"):C.length!=null?C.forEach(function(e){return e.removeAttribute("aria-hidden")}):document.querySelectorAll(C).forEach(function(e){return e.removeAttribute("aria-hidden")})),C=null}function pn(){}function ct(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function vn(e){var t=e;if(typeof t=="string"&&dn.canUseDOM){var n=document.querySelectorAll(t);ct(n,t),t=n}return C=t||C,C}function Pe(e){var t=e||C;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,un.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function mn(e){var t=!0,n=!1,o=void 0;try{for(var a=Pe(e)[Symbol.iterator](),d;!(t=(d=a.next()).done);t=!0){var m=d.value;m.setAttribute("aria-hidden","true")}}catch(l){n=!0,o=l}finally{try{!t&&a.return&&a.return()}finally{if(n)throw o}}}function hn(e){var t=!0,n=!1,o=void 0;try{for(var a=Pe(e)[Symbol.iterator](),d;!(t=(d=a.next()).done);t=!0){var m=d.value;m.removeAttribute("aria-hidden")}}catch(l){n=!0,o=l}finally{try{!t&&a.return&&a.return()}finally{if(n)throw o}}}function yn(){C=null}var q={};Object.defineProperty(q,"__esModule",{value:!0});q.resetState=bn;q.log=gn;var ee={},te={};function Ue(e,t){e.classList.remove(t)}function bn(){var e=document.getElementsByTagName("html")[0];for(var t in ee)Ue(e,ee[t]);var n=document.body;for(var o in te)Ue(n,te[o]);ee={},te={}}function gn(){}var On=function(t,n){return t[n]||(t[n]=0),t[n]+=1,n},_n=function(t,n){return t[n]&&(t[n]-=1),n},En=function(t,n,o){o.forEach(function(a){On(n,a),t.add(a)})},kn=function(t,n,o){o.forEach(function(a){_n(n,a),n[a]===0&&t.remove(a)})};q.add=function(t,n){return En(t.classList,t.nodeName.toLowerCase()=="html"?ee:te,n.split(" "))};q.remove=function(t,n){return kn(t.classList,t.nodeName.toLowerCase()=="html"?ee:te,n.split(" "))};var B={};Object.defineProperty(B,"__esModule",{value:!0});B.log=An;B.resetState=Sn;function Cn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var ft=function e(){var t=this;Cn(this,e),this.register=function(n){t.openInstances.indexOf(n)===-1&&(t.openInstances.push(n),t.emit("register"))},this.deregister=function(n){var o=t.openInstances.indexOf(n);o!==-1&&(t.openInstances.splice(o,1),t.emit("deregister"))},this.subscribe=function(n){t.subscribers.push(n)},this.emit=function(n){t.subscribers.forEach(function(o){return o(n,t.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},ve=new ft;function An(){console.log("portalOpenInstances ----------"),console.log(ve.openInstances.length),ve.openInstances.forEach(function(e){return console.log(e)}),console.log("end portalOpenInstances ----------")}function Sn(){ve=new ft}B.default=ve;var De={};Object.defineProperty(De,"__esModule",{value:!0});De.resetState=Rn;De.log=xn;var Mn=B,wn=Tn(Mn);function Tn(e){return e&&e.__esModule?e:{default:e}}var _=void 0,A=void 0,U=[];function Rn(){for(var e=[_,A],t=0;t<e.length;t++){var n=e[t];n&&n.parentNode&&n.parentNode.removeChild(n)}_=A=null,U=[]}function xn(){console.log("bodyTrap ----------"),console.log(U.length);for(var e=[_,A],t=0;t<e.length;t++){var n=e[t],o=n||{};console.log(o.nodeName,o.className,o.id)}console.log("edn bodyTrap ----------")}function Ve(){U.length!==0&&U[U.length-1].focusContent()}function Nn(e,t){!_&&!A&&(_=document.createElement("div"),_.setAttribute("data-react-modal-body-trap",""),_.style.position="absolute",_.style.opacity="0",_.setAttribute("tabindex","0"),_.addEventListener("focus",Ve),A=_.cloneNode(),A.addEventListener("focus",Ve)),U=t,U.length>0?(document.body.firstChild!==_&&document.body.insertBefore(_,document.body.firstChild),document.body.lastChild!==A&&document.body.appendChild(A)):(_.parentElement&&_.parentElement.removeChild(_),A.parentElement&&A.parentElement.removeChild(A))}wn.default.subscribe(Nn);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(p){for(var v=1;v<arguments.length;v++){var y=arguments[v];for(var r in y)Object.prototype.hasOwnProperty.call(y,r)&&(p[r]=y[r])}return p},o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(p){return typeof p}:function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p},a=function(){function p(v,y){for(var r=0;r<y.length;r++){var i=y[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(v,i.key,i)}}return function(v,y,r){return y&&p(v.prototype,y),r&&p(v,r),v}}(),d=E,m=it,l=D(m),c=M,s=$(c),f=Qt,h=D(f),R=w,x=$(R),P=q,N=$(P),I=S,F=D(I),_e=B,ie=D(_e);function $(p){if(p&&p.__esModule)return p;var v={};if(p!=null)for(var y in p)Object.prototype.hasOwnProperty.call(p,y)&&(v[y]=p[y]);return v.default=p,v}function D(p){return p&&p.__esModule?p:{default:p}}function ue(p,v){if(!(p instanceof v))throw new TypeError("Cannot call a class as a function")}function K(p,v){if(!p)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return v&&(typeof v=="object"||typeof v=="function")?v:p}function Ee(p,v){if(typeof v!="function"&&v!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof v);p.prototype=Object.create(v&&v.prototype,{constructor:{value:p,enumerable:!1,writable:!0,configurable:!0}}),v&&(Object.setPrototypeOf?Object.setPrototypeOf(p,v):p.__proto__=v)}var G={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},z=9,gt=27,de=0,ke=function(p){Ee(v,p);function v(y){ue(this,v);var r=K(this,(v.__proto__||Object.getPrototypeOf(v)).call(this,y));return r.setOverlayRef=function(i){r.overlay=i,r.props.overlayRef&&r.props.overlayRef(i)},r.setContentRef=function(i){r.content=i,r.props.contentRef&&r.props.contentRef(i)},r.afterClose=function(){var i=r.props,O=i.appElement,k=i.ariaHideApp,b=i.htmlOpenClassName,ce=i.bodyOpenClassName;ce&&N.remove(document.body,ce),b&&N.remove(document.getElementsByTagName("html")[0],b),k&&de>0&&(de-=1,de===0&&x.show(O)),r.props.shouldFocusAfterRender&&(r.props.shouldReturnFocusAfterClose?(s.returnFocus(r.props.preventScroll),s.teardownScopedFocus()):s.popWithoutFocus()),r.props.onAfterClose&&r.props.onAfterClose(),ie.default.deregister(r)},r.open=function(){r.beforeOpen(),r.state.afterOpen&&r.state.beforeClose?(clearTimeout(r.closeTimer),r.setState({beforeClose:!1})):(r.props.shouldFocusAfterRender&&(s.setupScopedFocus(r.node),s.markForFocusLater()),r.setState({isOpen:!0},function(){r.openAnimationFrame=requestAnimationFrame(function(){r.setState({afterOpen:!0}),r.props.isOpen&&r.props.onAfterOpen&&r.props.onAfterOpen({overlayEl:r.overlay,contentEl:r.content})})}))},r.close=function(){r.props.closeTimeoutMS>0?r.closeWithTimeout():r.closeWithoutTimeout()},r.focusContent=function(){return r.content&&!r.contentHasFocus()&&r.content.focus({preventScroll:!0})},r.closeWithTimeout=function(){var i=Date.now()+r.props.closeTimeoutMS;r.setState({beforeClose:!0,closesAt:i},function(){r.closeTimer=setTimeout(r.closeWithoutTimeout,r.state.closesAt-Date.now())})},r.closeWithoutTimeout=function(){r.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},r.afterClose)},r.handleKeyDown=function(i){i.keyCode===z&&(0,h.default)(r.content,i),r.props.shouldCloseOnEsc&&i.keyCode===gt&&(i.stopPropagation(),r.requestClose(i))},r.handleOverlayOnClick=function(i){r.shouldClose===null&&(r.shouldClose=!0),r.shouldClose&&r.props.shouldCloseOnOverlayClick&&(r.ownerHandlesClose()?r.requestClose(i):r.focusContent()),r.shouldClose=null},r.handleContentOnMouseUp=function(){r.shouldClose=!1},r.handleOverlayOnMouseDown=function(i){!r.props.shouldCloseOnOverlayClick&&i.target==r.overlay&&i.preventDefault()},r.handleContentOnClick=function(){r.shouldClose=!1},r.handleContentOnMouseDown=function(){r.shouldClose=!1},r.requestClose=function(i){return r.ownerHandlesClose()&&r.props.onRequestClose(i)},r.ownerHandlesClose=function(){return r.props.onRequestClose},r.shouldBeClosed=function(){return!r.state.isOpen&&!r.state.beforeClose},r.contentHasFocus=function(){return document.activeElement===r.content||r.content.contains(document.activeElement)},r.buildClassName=function(i,O){var k=(typeof O>"u"?"undefined":o(O))==="object"?O:{base:G[i],afterOpen:G[i]+"--after-open",beforeClose:G[i]+"--before-close"},b=k.base;return r.state.afterOpen&&(b=b+" "+k.afterOpen),r.state.beforeClose&&(b=b+" "+k.beforeClose),typeof O=="string"&&O?b+" "+O:b},r.attributesFromObject=function(i,O){return Object.keys(O).reduce(function(k,b){return k[i+"-"+b]=O[b],k},{})},r.state={afterOpen:!1,beforeClose:!1},r.shouldClose=null,r.moveFromContentToOverlay=null,r}return a(v,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(r,i){this.props.isOpen&&!r.isOpen?this.open():!this.props.isOpen&&r.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!i.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var r=this.props,i=r.appElement,O=r.ariaHideApp,k=r.htmlOpenClassName,b=r.bodyOpenClassName;b&&N.add(document.body,b),k&&N.add(document.getElementsByTagName("html")[0],k),O&&(de+=1,x.hide(i)),ie.default.register(this)}},{key:"render",value:function(){var r=this.props,i=r.id,O=r.className,k=r.overlayClassName,b=r.defaultStyles,ce=r.children,Ot=O?{}:b.content,_t=k?{}:b.overlay;if(this.shouldBeClosed())return null;var Et={ref:this.setOverlayRef,className:this.buildClassName("overlay",k),style:n({},_t,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},kt=n({id:i,ref:this.setContentRef,style:n({},Ot,this.props.style.content),className:this.buildClassName("content",O),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",n({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),Ct=this.props.contentElement(kt,ce);return this.props.overlayElement(Et,Ct)}}]),v}(d.Component);ke.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},ke.propTypes={isOpen:l.default.bool.isRequired,defaultStyles:l.default.shape({content:l.default.object,overlay:l.default.object}),style:l.default.shape({content:l.default.object,overlay:l.default.object}),className:l.default.oneOfType([l.default.string,l.default.object]),overlayClassName:l.default.oneOfType([l.default.string,l.default.object]),bodyOpenClassName:l.default.string,htmlOpenClassName:l.default.string,ariaHideApp:l.default.bool,appElement:l.default.oneOfType([l.default.instanceOf(F.default),l.default.instanceOf(I.SafeHTMLCollection),l.default.instanceOf(I.SafeNodeList),l.default.arrayOf(l.default.instanceOf(F.default))]),onAfterOpen:l.default.func,onAfterClose:l.default.func,onRequestClose:l.default.func,closeTimeoutMS:l.default.number,shouldFocusAfterRender:l.default.bool,shouldCloseOnOverlayClick:l.default.bool,shouldReturnFocusAfterClose:l.default.bool,preventScroll:l.default.bool,role:l.default.string,contentLabel:l.default.string,aria:l.default.object,data:l.default.object,children:l.default.node,shouldCloseOnEsc:l.default.bool,overlayRef:l.default.func,contentRef:l.default.func,id:l.default.string,overlayElement:l.default.func,contentElement:l.default.func,testId:l.default.string},t.default=ke,e.exports=t.default})(we,we.exports);var Fn=we.exports;function pt(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);e!=null&&this.setState(e)}function vt(e){function t(n){var o=this.constructor.getDerivedStateFromProps(e,n);return o??null}this.setState(t.bind(this))}function mt(e,t){try{var n=this.props,o=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,o)}finally{this.props=n,this.state=o}}pt.__suppressDeprecationWarning=!0;vt.__suppressDeprecationWarning=!0;mt.__suppressDeprecationWarning=!0;function Pn(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if(typeof e.getDerivedStateFromProps!="function"&&typeof t.getSnapshotBeforeUpdate!="function")return e;var n=null,o=null,a=null;if(typeof t.componentWillMount=="function"?n="componentWillMount":typeof t.UNSAFE_componentWillMount=="function"&&(n="UNSAFE_componentWillMount"),typeof t.componentWillReceiveProps=="function"?o="componentWillReceiveProps":typeof t.UNSAFE_componentWillReceiveProps=="function"&&(o="UNSAFE_componentWillReceiveProps"),typeof t.componentWillUpdate=="function"?a="componentWillUpdate":typeof t.UNSAFE_componentWillUpdate=="function"&&(a="UNSAFE_componentWillUpdate"),n!==null||o!==null||a!==null){var d=e.displayName||e.name,m=typeof e.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+d+" uses "+m+" but also contains the following legacy lifecycles:"+(n!==null?`
  `+n:"")+(o!==null?`
  `+o:"")+(a!==null?`
  `+a:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof e.getDerivedStateFromProps=="function"&&(t.componentWillMount=pt,t.componentWillReceiveProps=vt),typeof t.getSnapshotBeforeUpdate=="function"){if(typeof t.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=mt;var l=t.componentDidUpdate;t.componentDidUpdate=function(s,f,h){var R=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:h;l.call(this,s,f,R)}}return e}const Dn=Object.freeze(Object.defineProperty({__proto__:null,polyfill:Pn},Symbol.toStringTag,{value:"Module"})),jn=Dt(Dn);Object.defineProperty(V,"__esModule",{value:!0});V.bodyOpenClassName=V.portalClassName=void 0;var We=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},In=function(){function e(t,n){for(var o=0;o<n.length;o++){var a=n[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),ht=E,me=le(ht),Ln=It,he=le(Ln),Un=it,u=le(Un),Vn=Fn,He=le(Vn),Wn=w,Hn=Bn(Wn),j=S,qe=le(j),qn=jn;function Bn(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function le(e){return e&&e.__esModule?e:{default:e}}function $n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Be(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Kn(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Gn=V.portalClassName="ReactModalPortal",zn=V.bodyOpenClassName="ReactModal__Body--open",L=j.canUseDOM&&he.default.createPortal!==void 0,$e=function(t){return document.createElement(t)},Ke=function(){return L?he.default.createPortal:he.default.unstable_renderSubtreeIntoContainer};function fe(e){return e()}var se=function(e){Kn(t,e);function t(){var n,o,a,d;$n(this,t);for(var m=arguments.length,l=Array(m),c=0;c<m;c++)l[c]=arguments[c];return d=(o=(a=Be(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(l))),a),a.removePortal=function(){!L&&he.default.unmountComponentAtNode(a.node);var s=fe(a.props.parentSelector);s&&s.contains(a.node)?s.removeChild(a.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},a.portalRef=function(s){a.portal=s},a.renderPortal=function(s){var f=Ke(),h=f(a,me.default.createElement(He.default,We({defaultStyles:t.defaultStyles},s)),a.node);a.portalRef(h)},o),Be(a,d)}return In(t,[{key:"componentDidMount",value:function(){if(j.canUseDOM){L||(this.node=$e("div")),this.node.className=this.props.portalClassName;var o=fe(this.props.parentSelector);o.appendChild(this.node),!L&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(o){var a=fe(o.parentSelector),d=fe(this.props.parentSelector);return{prevParent:a,nextParent:d}}},{key:"componentDidUpdate",value:function(o,a,d){if(j.canUseDOM){var m=this.props,l=m.isOpen,c=m.portalClassName;o.portalClassName!==c&&(this.node.className=c);var s=d.prevParent,f=d.nextParent;f!==s&&(s.removeChild(this.node),f.appendChild(this.node)),!(!o.isOpen&&!l)&&!L&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!j.canUseDOM||!this.node||!this.portal)){var o=this.portal.state,a=Date.now(),d=o.isOpen&&this.props.closeTimeoutMS&&(o.closesAt||a+this.props.closeTimeoutMS);d?(o.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,d-a)):this.removePortal()}}},{key:"render",value:function(){if(!j.canUseDOM||!L)return null;!this.node&&L&&(this.node=$e("div"));var o=Ke();return o(me.default.createElement(He.default,We({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(o){Hn.setElement(o)}}]),t}(ht.Component);se.propTypes={isOpen:u.default.bool.isRequired,style:u.default.shape({content:u.default.object,overlay:u.default.object}),portalClassName:u.default.string,bodyOpenClassName:u.default.string,htmlOpenClassName:u.default.string,className:u.default.oneOfType([u.default.string,u.default.shape({base:u.default.string.isRequired,afterOpen:u.default.string.isRequired,beforeClose:u.default.string.isRequired})]),overlayClassName:u.default.oneOfType([u.default.string,u.default.shape({base:u.default.string.isRequired,afterOpen:u.default.string.isRequired,beforeClose:u.default.string.isRequired})]),appElement:u.default.oneOfType([u.default.instanceOf(qe.default),u.default.instanceOf(j.SafeHTMLCollection),u.default.instanceOf(j.SafeNodeList),u.default.arrayOf(u.default.instanceOf(qe.default))]),onAfterOpen:u.default.func,onRequestClose:u.default.func,closeTimeoutMS:u.default.number,ariaHideApp:u.default.bool,shouldFocusAfterRender:u.default.bool,shouldCloseOnOverlayClick:u.default.bool,shouldReturnFocusAfterClose:u.default.bool,preventScroll:u.default.bool,parentSelector:u.default.func,aria:u.default.object,data:u.default.object,role:u.default.string,contentLabel:u.default.string,shouldCloseOnEsc:u.default.bool,overlayRef:u.default.func,contentRef:u.default.func,id:u.default.string,overlayElement:u.default.func,contentElement:u.default.func};se.defaultProps={isOpen:!1,portalClassName:Gn,bodyOpenClassName:zn,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(t,n){return me.default.createElement("div",t,n)},contentElement:function(t,n){return me.default.createElement("div",t,n)}};se.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,qn.polyfill)(se);V.default=se;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=V,o=a(n);function a(d){return d&&d.__esModule?d:{default:d}}t.default=o.default,e.exports=t.default})(Me,Me.exports);var Yn=Me.exports;const yt=jt(Yn);var Zn=globalThis&&globalThis.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]]);return n};const Xn=E.forwardRef((e,t)=>{var{className:n}=e,o=Zn(e,["className"]);return Q.createElement("div",Object.assign({},o,{ref:t,className:pe("navds-modal__content",n)}))}),Jn=Xn;var Qn=globalThis&&globalThis.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]]);return n};const ge=E.forwardRef((e,t)=>{var n,o,{children:a,open:d,onClose:m,className:l,overlayClassName:c,shouldCloseOnOverlayClick:s=!0,shouldCloseOnEsc:f=!0,closeButton:h=!0,"aria-describedby":R,"aria-labelledby":x,"aria-modal":P,"aria-label":N,style:I,parentSelector:F}=e,_e=Qn(e,["children","open","onClose","className","overlayClassName","shouldCloseOnOverlayClick","shouldCloseOnEsc","closeButton","aria-describedby","aria-labelledby","aria-modal","aria-label","style","parentSelector"]);const ie=E.useRef(null),$=E.useMemo(()=>At([ie,t]),[t]),D=E.useRef(null),ue=(n=ze())===null||n===void 0?void 0:n.rootElement,K=(o=ze())===null||o===void 0?void 0:o.appElement;E.useEffect(()=>{K&&ge.setAppElement(K)},[K]);const Ee=z=>{s||z.type==="keydown"?m():D.current&&D.current.focus()},G=()=>F||(ue!==void 0?()=>ue:void 0);return Q.createElement(yt,Object.assign({},_e,{parentSelector:G(),style:I,isOpen:d,ref:$,className:pe("navds-modal",l),overlayClassName:pe("navds-modal__overlay",c),shouldCloseOnOverlayClick:s,shouldCloseOnEsc:f,onRequestClose:z=>Ee(z),aria:{describedby:R,labelledby:x,modal:P},contentLabel:N}),a,h&&Q.createElement(st,{className:pe("navds-modal__button",{"navds-modal__button--shake":s}),size:"small",variant:"tertiary-neutral",ref:D,onClick:m,icon:Q.createElement(Ht,{title:"Lukk modalvindu"})}))});ge.setAppElement=e=>yt.setAppElement(e);ge.Content=Jn;const Ge=ge;globalThis&&globalThis.__rest;const eo=E.createContext(void 0),ze=()=>E.useContext(eo),to=""+new URL("innvilget_valgt-ced6d173.svg",import.meta.url).href,no="_button_w0gwu_1",oo="_image_w0gwu_6",ro="_modal_w0gwu_13",Se={button:no,image:oo,modal:ro},ao=(e,t,n,o)=>e===T.TILBAKEKREVING?"FatterVedtakApprovalModal.Tilbakekreving":e===T.TILBAKEKREVING_REVURDERING?"FatterVedtakApprovalModal.TilbakekrevingRevurdering":e===T.KLAGE?"FatterVedtakApprovalModal.ModalDescriptionKlage":e===T.ANKE?"FatterVedtakApprovalModal.ModalDescriptionAnke":o?"FatterVedtakApprovalModal.UendretUtfall":t&&t.type===re.AVSLATT?"FatterVedtakApprovalModal.IkkeInnvilget":n?"FatterVedtakApprovalModal.OpphortVedtak":"FatterVedtakApprovalModal.InnvilgetVedtak",lo=(e,t)=>t===T.KLAGE?"FatterVedtakApprovalModal.ModalDescriptionKlage":t===T.ANKE?"FatterVedtakApprovalModal.ModalDescriptionAnke":e?"FatterVedtakApprovalModal.ModalDescriptionOpphort":"FatterVedtakApprovalModal.ModalDescriptionApproval",je=e=>e===ae.FATTER_VEDTAK,so=(e,t,n,o,a,d)=>e?je(t)?ao(n,o,a,d):"":"FatterVedtakApprovalModal.VedtakReturneresTilSaksbehandler",io=e=>je(e)?"FatterVedtakApprovalModal.Innvilget":"",uo=(e,t,n)=>je(e)?lo(n,t):"FatterVedtakApprovalModal.ModalDescription",Ne=({closeEvent:e,allAksjonspunktApproved:t,behandlingStatusKode:n,behandlingTypeKode:o,behandlingsresultat:a,harSammeResultatSomOriginalBehandling:d})=>{const m=St(),l=!!a&&a.type===re.OPPHOR,c=so(t,n,o,a,l,d),s=io(n),f=uo(n,o,l);return g.jsx(Ge,{className:Se.modal,open:!0,closeButton:!1,"aria-label":m.formatMessage({id:f}),onClose:e,shouldCloseOnOverlayClick:!1,children:g.jsx(Ge.Content,{children:g.jsx(Mt,{children:g.jsxs(wt,{children:[g.jsx(Ce,{children:g.jsx(Tt,{className:Se.image,alt:m.formatMessage({id:s}),src:to})}),g.jsxs(Ce,{children:[g.jsx(Rt,{size:"small",children:g.jsx(Ae,{id:c})}),g.jsx(xt,{size:"small",children:g.jsx(Ae,{id:"FatterVedtakApprovalModal.GoToSearchPage"})})]}),g.jsx(Ce,{className:Se.button,children:g.jsx(st,{size:"small",variant:"primary",onClick:e,autoFocus:!0,type:"button",children:g.jsx(Ae,{id:"FatterVedtakApprovalModal.Ok"})})})]})})})})};try{Ne.displayName="FatterVedtakApprovalModal",Ne.__docgenInfo={description:`FatterVedtakApprovalModal

Denne modalen vises en lightbox etter at en beslutter har godkjent alle aksjonspunkter
med totrinnskontroll. Ved å trykke på knapp blir beslutter tatt tilbake til sokesiden.`,displayName:"FatterVedtakApprovalModal",props:{closeEvent:{defaultValue:null,description:"",name:"closeEvent",required:!0,type:{name:"() => void"}},allAksjonspunktApproved:{defaultValue:null,description:"",name:"allAksjonspunktApproved",required:!0,type:{name:"boolean"}},behandlingsresultat:{defaultValue:null,description:"",name:"behandlingsresultat",required:!1,type:{name:"Readonly<{ id: number; type: string; avslagsarsak?: string; avslagsarsakFritekst?: string; rettenTil?: string | undefined; konsekvenserForYtelsen?: string[] | undefined; ... 4 more ...; skjæringstidspunkt?: { ...; } | undefined; }> | undefined"}},behandlingStatusKode:{defaultValue:null,description:"",name:"behandlingStatusKode",required:!0,type:{name:"string"}},behandlingTypeKode:{defaultValue:null,description:"",name:"behandlingTypeKode",required:!0,type:{name:"string"}},harSammeResultatSomOriginalBehandling:{defaultValue:null,description:"",name:"harSammeResultatSomOriginalBehandling",required:!1,type:{name:"boolean"}}}}}catch{}const co=Nt(Pt),Fe=({behandling:e,closeEvent:t,allAksjonspunktApproved:n})=>{var o;return g.jsx(Ft,{value:co,children:g.jsx(Ne,{closeEvent:t,allAksjonspunktApproved:n,behandlingsresultat:e.behandlingsresultat,behandlingStatusKode:e.status,behandlingTypeKode:e.type,harSammeResultatSomOriginalBehandling:((o=e.behandlingsresultat)==null?void 0:o.erRevurderingMedUendretUtfall)||!1})})},bt=Fe;try{Fe.displayName="FatterVedtakTotrinnskontrollModalSakIndex",Fe.__docgenInfo={description:"",displayName:"FatterVedtakTotrinnskontrollModalSakIndex",props:{behandling:{defaultValue:null,description:"",name:"behandling",required:!0,type:{name:"BehandlingAppKontekst"}},closeEvent:{defaultValue:null,description:"",name:"closeEvent",required:!0,type:{name:"() => void"}},allAksjonspunktApproved:{defaultValue:null,description:"",name:"allAksjonspunktApproved",required:!0,type:{name:"boolean"}}}}}catch{}const bo={title:"sak/sak-totrinnskontroll-fatter-vedtak-modal",component:bt},Oe=({closeEvent:e,behandling:t,allAksjonspunktApproved:n})=>g.jsx(bt,{behandling:t,closeEvent:e,allAksjonspunktApproved:n}),Y=Oe.bind({});Y.args={closeEvent:ye("button-click"),behandling:{uuid:"1",status:ae.FATTER_VEDTAK,type:T.FORSTEGANGSSOKNAD},allAksjonspunktApproved:!0};const Z=Oe.bind({});Z.args={closeEvent:ye("button-click"),behandling:{uuid:"1",status:ae.FATTER_VEDTAK,type:T.FORSTEGANGSSOKNAD,behandlingsresultat:{type:re.OPPHOR}},allAksjonspunktApproved:!0};const X=Oe.bind({});X.args={closeEvent:ye("button-click"),behandling:{uuid:"1",status:ae.FATTER_VEDTAK,type:T.KLAGE,behandlingsresultat:{type:re.OPPHOR}},allAksjonspunktApproved:!0};const J=Oe.bind({});J.args={closeEvent:ye("button-click"),behandling:{uuid:"1",status:ae.FATTER_VEDTAK,type:T.FORSTEGANGSSOKNAD,behandlingsresultat:{type:re.OPPHOR}},allAksjonspunktApproved:!1};var Ye,Ze,Xe;Y.parameters={...Y.parameters,docs:{...(Ye=Y.parameters)==null?void 0:Ye.docs,source:{originalSource:`({
  closeEvent,
  behandling,
  allAksjonspunktApproved
}) => <FatterVedtakTotrinnskontrollModalSakIndex behandling={behandling} closeEvent={closeEvent} allAksjonspunktApproved={allAksjonspunktApproved} />`,...(Xe=(Ze=Y.parameters)==null?void 0:Ze.docs)==null?void 0:Xe.source}}};var Je,Qe,et;Z.parameters={...Z.parameters,docs:{...(Je=Z.parameters)==null?void 0:Je.docs,source:{originalSource:`({
  closeEvent,
  behandling,
  allAksjonspunktApproved
}) => <FatterVedtakTotrinnskontrollModalSakIndex behandling={behandling} closeEvent={closeEvent} allAksjonspunktApproved={allAksjonspunktApproved} />`,...(et=(Qe=Z.parameters)==null?void 0:Qe.docs)==null?void 0:et.source}}};var tt,nt,ot;X.parameters={...X.parameters,docs:{...(tt=X.parameters)==null?void 0:tt.docs,source:{originalSource:`({
  closeEvent,
  behandling,
  allAksjonspunktApproved
}) => <FatterVedtakTotrinnskontrollModalSakIndex behandling={behandling} closeEvent={closeEvent} allAksjonspunktApproved={allAksjonspunktApproved} />`,...(ot=(nt=X.parameters)==null?void 0:nt.docs)==null?void 0:ot.source}}};var rt,at,lt;J.parameters={...J.parameters,docs:{...(rt=J.parameters)==null?void 0:rt.docs,source:{originalSource:`({
  closeEvent,
  behandling,
  allAksjonspunktApproved
}) => <FatterVedtakTotrinnskontrollModalSakIndex behandling={behandling} closeEvent={closeEvent} allAksjonspunktApproved={allAksjonspunktApproved} />`,...(lt=(at=J.parameters)==null?void 0:at.docs)==null?void 0:lt.source}}};const go=["EtterFatterVedtakOgGodkjent","EtterGodkjenning","EtterGodkjenningAvKlage","EtterTilbakesendingTilSaksbehandler"];export{Y as EtterFatterVedtakOgGodkjent,Z as EtterGodkjenning,X as EtterGodkjenningAvKlage,J as EtterTilbakesendingTilSaksbehandler,go as __namedExportsOrder,bo as default};
//# sourceMappingURL=FatterVedtakApprovalModalSakIndex.stories-2b843b8e.js.map
