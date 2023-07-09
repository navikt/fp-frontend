import{r as C,a as ze,g as Ve,R as re}from"./index-ebeaab24.js";import{r as Ye,c as ae,v as Xe,e as Ze}from"./nb_NO-80ad4d83.js";import{r as Ge}from"./index-9c09ad76.js";import{p as Te}from"./index-f50b85d6.js";var Je=globalThis&&globalThis.__rest||function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,o=Object.getOwnPropertySymbols(t);a<o.length;a++)e.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(t,o[a])&&(n[o[a]]=t[o[a]]);return n};const Qe=C.forwardRef((t,e)=>{var{title:n,titleId:o}=t,a=Je(t,["title","titleId"]);let d=Ye();return d=n?o||"title-"+d:void 0,C.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:e,"aria-labelledby":d},a),n?C.createElement("title",{id:d},n):null,C.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94 6.53 5.47Z",fill:"currentColor"}))}),et=Qe;var ve={exports:{}},W={},me={exports:{}},M={},he={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=l;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var n=/input|select|textarea|button|object|iframe/;function o(f){var s=f.offsetWidth<=0&&f.offsetHeight<=0;if(s&&!f.innerHTML)return!0;try{var p=window.getComputedStyle(f);return s?p.getPropertyValue("overflow")!=="visible"||f.scrollWidth<=0&&f.scrollHeight<=0:p.getPropertyValue("display")=="none"}catch{return console.warn("Failed to inspect element style"),!1}}function a(f){for(var s=f,p=f.getRootNode&&f.getRootNode();s&&s!==document.body;){if(p&&s===p&&(s=p.host.parentNode),o(s))return!1;s=s.parentNode}return!0}function d(f,s){var p=f.nodeName.toLowerCase(),h=n.test(p)&&!f.disabled||p==="a"&&f.href||s;return h&&a(f)}function m(f){var s=f.getAttribute("tabindex");s===null&&(s=void 0);var p=isNaN(s);return(p||s>=0)&&d(f,!p)}function l(f){var s=[].slice.call(f.querySelectorAll("*"),0).reduce(function(p,h){return p.concat(h.shadowRoot?l(h.shadowRoot):[h])},[]);return s.filter(m)}t.exports=e.default})(he,he.exports);var Ae=he.exports;Object.defineProperty(M,"__esModule",{value:!0});M.resetState=rt;M.log=at;M.handleBlur=X;M.handleFocus=Z;M.markForFocusLater=lt;M.returnFocus=st;M.popWithoutFocus=it;M.setupScopedFocus=ut;M.teardownScopedFocus=ft;var tt=Ae,nt=ot(tt);function ot(t){return t&&t.__esModule?t:{default:t}}var H=[],I=null,ye=!1;function rt(){H=[]}function at(){}function X(){ye=!0}function Z(){if(ye){if(ye=!1,!I)return;setTimeout(function(){if(!I.contains(document.activeElement)){var t=(0,nt.default)(I)[0]||I;t.focus()}},0)}}function lt(){H.push(document.activeElement)}function st(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=null;try{H.length!==0&&(e=H.pop(),e.focus({preventScroll:t}));return}catch{console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}}function it(){H.length>0&&H.pop()}function ut(t){I=t,window.addEventListener?(window.addEventListener("blur",X,!1),document.addEventListener("focus",Z,!0)):(window.attachEvent("onBlur",X),document.attachEvent("onFocus",Z))}function ft(){I=null,window.addEventListener?(window.removeEventListener("blur",X),document.removeEventListener("focus",Z)):(window.detachEvent("onBlur",X),document.detachEvent("onFocus",Z))}var be={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=m;var n=Ae,o=a(n);function a(l){return l&&l.__esModule?l:{default:l}}function d(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return l.activeElement.shadowRoot?d(l.activeElement.shadowRoot):l.activeElement}function m(l,f){var s=(0,o.default)(l);if(!s.length){f.preventDefault();return}var p=void 0,h=f.shiftKey,N=s[0],P=s[s.length-1],x=d();if(l===x){if(!h)return;p=P}if(P===x&&!h&&(p=N),N===x&&h&&(p=P),p){f.preventDefault(),p.focus();return}var T=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),F=T!=null&&T[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(F){var A=s.indexOf(x);if(A>-1&&(A+=h?-1:1),p=s[A],typeof p>"u"){f.preventDefault(),p=h?P:N,p.focus();return}f.preventDefault(),p.focus()}}t.exports=e.default})(be,be.exports);var ct=be.exports,R={},dt=function(){},pt=dt,S={},xe={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(t){(function(){var e=!!(typeof window<"u"&&window.document&&window.document.createElement),n={canUseDOM:e,canUseWorkers:typeof Worker<"u",canUseEventListeners:e&&!!(window.addEventListener||window.attachEvent),canUseViewport:e&&!!window.screen};t.exports?t.exports=n:window.ExecutionEnvironment=n})()})(xe);var vt=xe.exports;Object.defineProperty(S,"__esModule",{value:!0});S.canUseDOM=S.SafeNodeList=S.SafeHTMLCollection=void 0;var mt=vt,ht=yt(mt);function yt(t){return t&&t.__esModule?t:{default:t}}var ue=ht.default,bt=ue.canUseDOM?window.HTMLElement:{};S.SafeHTMLCollection=ue.canUseDOM?window.HTMLCollection:{};S.SafeNodeList=ue.canUseDOM?window.NodeList:{};S.canUseDOM=ue.canUseDOM;S.default=bt;Object.defineProperty(R,"__esModule",{value:!0});R.resetState=Et;R.log=wt;R.assertNodeList=De;R.setElement=St;R.validateElement=Oe;R.hide=Mt;R.show=Rt;R.documentNotReadyOrSSRTesting=Nt;var Ot=pt,gt=Ct(Ot),_t=S;function Ct(t){return t&&t.__esModule?t:{default:t}}var E=null;function Et(){E&&(E.removeAttribute?E.removeAttribute("aria-hidden"):E.length!=null?E.forEach(function(t){return t.removeAttribute("aria-hidden")}):document.querySelectorAll(E).forEach(function(t){return t.removeAttribute("aria-hidden")})),E=null}function wt(){}function De(t,e){if(!t||!t.length)throw new Error("react-modal: No elements were found for selector "+e+".")}function St(t){var e=t;if(typeof e=="string"&&_t.canUseDOM){var n=document.querySelectorAll(e);De(n,e),e=n}return E=e||E,E}function Oe(t){var e=t||E;return e?Array.isArray(e)||e instanceof HTMLCollection||e instanceof NodeList?e:[e]:((0,gt.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function Mt(t){var e=!0,n=!1,o=void 0;try{for(var a=Oe(t)[Symbol.iterator](),d;!(e=(d=a.next()).done);e=!0){var m=d.value;m.setAttribute("aria-hidden","true")}}catch(l){n=!0,o=l}finally{try{!e&&a.return&&a.return()}finally{if(n)throw o}}}function Rt(t){var e=!0,n=!1,o=void 0;try{for(var a=Oe(t)[Symbol.iterator](),d;!(e=(d=a.next()).done);e=!0){var m=d.value;m.removeAttribute("aria-hidden")}}catch(l){n=!0,o=l}finally{try{!e&&a.return&&a.return()}finally{if(n)throw o}}}function Nt(){E=null}var q={};Object.defineProperty(q,"__esModule",{value:!0});q.resetState=Pt;q.log=Tt;var V={},Y={};function _e(t,e){t.classList.remove(e)}function Pt(){var t=document.getElementsByTagName("html")[0];for(var e in V)_e(t,V[e]);var n=document.body;for(var o in Y)_e(n,Y[o]);V={},Y={}}function Tt(){}var At=function(e,n){return e[n]||(e[n]=0),e[n]+=1,n},xt=function(e,n){return e[n]&&(e[n]-=1),n},Dt=function(e,n,o){o.forEach(function(a){At(n,a),e.add(a)})},Lt=function(e,n,o){o.forEach(function(a){xt(n,a),n[a]===0&&e.remove(a)})};q.add=function(e,n){return Dt(e.classList,e.nodeName.toLowerCase()=="html"?V:Y,n.split(" "))};q.remove=function(e,n){return Lt(e.classList,e.nodeName.toLowerCase()=="html"?V:Y,n.split(" "))};var $={};Object.defineProperty($,"__esModule",{value:!0});$.log=Ut;$.resetState=kt;function Ft(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var Le=function t(){var e=this;Ft(this,t),this.register=function(n){e.openInstances.indexOf(n)===-1&&(e.openInstances.push(n),e.emit("register"))},this.deregister=function(n){var o=e.openInstances.indexOf(n);o!==-1&&(e.openInstances.splice(o,1),e.emit("deregister"))},this.subscribe=function(n){e.subscribers.push(n)},this.emit=function(n){e.subscribers.forEach(function(o){return o(n,e.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},le=new Le;function Ut(){console.log("portalOpenInstances ----------"),console.log(le.openInstances.length),le.openInstances.forEach(function(t){return console.log(t)}),console.log("end portalOpenInstances ----------")}function kt(){le=new Le}$.default=le;var ge={};Object.defineProperty(ge,"__esModule",{value:!0});ge.resetState=qt;ge.log=$t;var Wt=$,It=Ht(Wt);function Ht(t){return t&&t.__esModule?t:{default:t}}var g=void 0,w=void 0,k=[];function qt(){for(var t=[g,w],e=0;e<t.length;e++){var n=t[e];n&&n.parentNode&&n.parentNode.removeChild(n)}g=w=null,k=[]}function $t(){console.log("bodyTrap ----------"),console.log(k.length);for(var t=[g,w],e=0;e<t.length;e++){var n=t[e],o=n||{};console.log(o.nodeName,o.className,o.id)}console.log("edn bodyTrap ----------")}function Ce(){k.length!==0&&k[k.length-1].focusContent()}function jt(t,e){!g&&!w&&(g=document.createElement("div"),g.setAttribute("data-react-modal-body-trap",""),g.style.position="absolute",g.style.opacity="0",g.setAttribute("tabindex","0"),g.addEventListener("focus",Ce),w=g.cloneNode(),w.addEventListener("focus",Ce)),k=e,k.length>0?(document.body.firstChild!==g&&document.body.insertBefore(g,document.body.firstChild),document.body.lastChild!==w&&document.body.appendChild(w)):(g.parentElement&&g.parentElement.removeChild(g),w.parentElement&&w.parentElement.removeChild(w))}It.default.subscribe(jt);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(c){for(var v=1;v<arguments.length;v++){var y=arguments[v];for(var r in y)Object.prototype.hasOwnProperty.call(y,r)&&(c[r]=y[r])}return c},o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},a=function(){function c(v,y){for(var r=0;r<y.length;r++){var i=y[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(v,i.key,i)}}return function(v,y,r){return y&&c(v.prototype,y),r&&c(v,r),v}}(),d=C,m=Te,l=D(m),f=M,s=j(f),p=ct,h=D(p),N=R,P=j(N),x=q,T=j(x),F=S,A=D(F),ce=$,Q=D(ce);function j(c){if(c&&c.__esModule)return c;var v={};if(c!=null)for(var y in c)Object.prototype.hasOwnProperty.call(c,y)&&(v[y]=c[y]);return v.default=c,v}function D(c){return c&&c.__esModule?c:{default:c}}function ee(c,v){if(!(c instanceof v))throw new TypeError("Cannot call a class as a function")}function B(c,v){if(!c)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return v&&(typeof v=="object"||typeof v=="function")?v:c}function de(c,v){if(typeof v!="function"&&v!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof v);c.prototype=Object.create(v&&v.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),v&&(Object.setPrototypeOf?Object.setPrototypeOf(c,v):c.__proto__=v)}var K={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},z=9,He=27,te=0,pe=function(c){de(v,c);function v(y){ee(this,v);var r=B(this,(v.__proto__||Object.getPrototypeOf(v)).call(this,y));return r.setOverlayRef=function(i){r.overlay=i,r.props.overlayRef&&r.props.overlayRef(i)},r.setContentRef=function(i){r.content=i,r.props.contentRef&&r.props.contentRef(i)},r.afterClose=function(){var i=r.props,O=i.appElement,_=i.ariaHideApp,b=i.htmlOpenClassName,ne=i.bodyOpenClassName;ne&&T.remove(document.body,ne),b&&T.remove(document.getElementsByTagName("html")[0],b),_&&te>0&&(te-=1,te===0&&P.show(O)),r.props.shouldFocusAfterRender&&(r.props.shouldReturnFocusAfterClose?(s.returnFocus(r.props.preventScroll),s.teardownScopedFocus()):s.popWithoutFocus()),r.props.onAfterClose&&r.props.onAfterClose(),Q.default.deregister(r)},r.open=function(){r.beforeOpen(),r.state.afterOpen&&r.state.beforeClose?(clearTimeout(r.closeTimer),r.setState({beforeClose:!1})):(r.props.shouldFocusAfterRender&&(s.setupScopedFocus(r.node),s.markForFocusLater()),r.setState({isOpen:!0},function(){r.openAnimationFrame=requestAnimationFrame(function(){r.setState({afterOpen:!0}),r.props.isOpen&&r.props.onAfterOpen&&r.props.onAfterOpen({overlayEl:r.overlay,contentEl:r.content})})}))},r.close=function(){r.props.closeTimeoutMS>0?r.closeWithTimeout():r.closeWithoutTimeout()},r.focusContent=function(){return r.content&&!r.contentHasFocus()&&r.content.focus({preventScroll:!0})},r.closeWithTimeout=function(){var i=Date.now()+r.props.closeTimeoutMS;r.setState({beforeClose:!0,closesAt:i},function(){r.closeTimer=setTimeout(r.closeWithoutTimeout,r.state.closesAt-Date.now())})},r.closeWithoutTimeout=function(){r.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},r.afterClose)},r.handleKeyDown=function(i){i.keyCode===z&&(0,h.default)(r.content,i),r.props.shouldCloseOnEsc&&i.keyCode===He&&(i.stopPropagation(),r.requestClose(i))},r.handleOverlayOnClick=function(i){r.shouldClose===null&&(r.shouldClose=!0),r.shouldClose&&r.props.shouldCloseOnOverlayClick&&(r.ownerHandlesClose()?r.requestClose(i):r.focusContent()),r.shouldClose=null},r.handleContentOnMouseUp=function(){r.shouldClose=!1},r.handleOverlayOnMouseDown=function(i){!r.props.shouldCloseOnOverlayClick&&i.target==r.overlay&&i.preventDefault()},r.handleContentOnClick=function(){r.shouldClose=!1},r.handleContentOnMouseDown=function(){r.shouldClose=!1},r.requestClose=function(i){return r.ownerHandlesClose()&&r.props.onRequestClose(i)},r.ownerHandlesClose=function(){return r.props.onRequestClose},r.shouldBeClosed=function(){return!r.state.isOpen&&!r.state.beforeClose},r.contentHasFocus=function(){return document.activeElement===r.content||r.content.contains(document.activeElement)},r.buildClassName=function(i,O){var _=(typeof O>"u"?"undefined":o(O))==="object"?O:{base:K[i],afterOpen:K[i]+"--after-open",beforeClose:K[i]+"--before-close"},b=_.base;return r.state.afterOpen&&(b=b+" "+_.afterOpen),r.state.beforeClose&&(b=b+" "+_.beforeClose),typeof O=="string"&&O?b+" "+O:b},r.attributesFromObject=function(i,O){return Object.keys(O).reduce(function(_,b){return _[i+"-"+b]=O[b],_},{})},r.state={afterOpen:!1,beforeClose:!1},r.shouldClose=null,r.moveFromContentToOverlay=null,r}return a(v,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(r,i){this.props.isOpen&&!r.isOpen?this.open():!this.props.isOpen&&r.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!i.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var r=this.props,i=r.appElement,O=r.ariaHideApp,_=r.htmlOpenClassName,b=r.bodyOpenClassName;b&&T.add(document.body,b),_&&T.add(document.getElementsByTagName("html")[0],_),O&&(te+=1,P.hide(i)),Q.default.register(this)}},{key:"render",value:function(){var r=this.props,i=r.id,O=r.className,_=r.overlayClassName,b=r.defaultStyles,ne=r.children,qe=O?{}:b.content,$e=_?{}:b.overlay;if(this.shouldBeClosed())return null;var je={ref:this.setOverlayRef,className:this.buildClassName("overlay",_),style:n({},$e,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},Be=n({id:i,ref:this.setContentRef,style:n({},qe,this.props.style.content),className:this.buildClassName("content",O),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",n({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),Ke=this.props.contentElement(Be,ne);return this.props.overlayElement(je,Ke)}}]),v}(d.Component);pe.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},pe.propTypes={isOpen:l.default.bool.isRequired,defaultStyles:l.default.shape({content:l.default.object,overlay:l.default.object}),style:l.default.shape({content:l.default.object,overlay:l.default.object}),className:l.default.oneOfType([l.default.string,l.default.object]),overlayClassName:l.default.oneOfType([l.default.string,l.default.object]),bodyOpenClassName:l.default.string,htmlOpenClassName:l.default.string,ariaHideApp:l.default.bool,appElement:l.default.oneOfType([l.default.instanceOf(A.default),l.default.instanceOf(F.SafeHTMLCollection),l.default.instanceOf(F.SafeNodeList),l.default.arrayOf(l.default.instanceOf(A.default))]),onAfterOpen:l.default.func,onAfterClose:l.default.func,onRequestClose:l.default.func,closeTimeoutMS:l.default.number,shouldFocusAfterRender:l.default.bool,shouldCloseOnOverlayClick:l.default.bool,shouldReturnFocusAfterClose:l.default.bool,preventScroll:l.default.bool,role:l.default.string,contentLabel:l.default.string,aria:l.default.object,data:l.default.object,children:l.default.node,shouldCloseOnEsc:l.default.bool,overlayRef:l.default.func,contentRef:l.default.func,id:l.default.string,overlayElement:l.default.func,contentElement:l.default.func,testId:l.default.string},e.default=pe,t.exports=e.default})(me,me.exports);var Bt=me.exports;function Fe(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);t!=null&&this.setState(t)}function Ue(t){function e(n){var o=this.constructor.getDerivedStateFromProps(t,n);return o??null}this.setState(e.bind(this))}function ke(t,e){try{var n=this.props,o=this.state;this.props=t,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,o)}finally{this.props=n,this.state=o}}Fe.__suppressDeprecationWarning=!0;Ue.__suppressDeprecationWarning=!0;ke.__suppressDeprecationWarning=!0;function Kt(t){var e=t.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if(typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function")return t;var n=null,o=null,a=null;if(typeof e.componentWillMount=="function"?n="componentWillMount":typeof e.UNSAFE_componentWillMount=="function"&&(n="UNSAFE_componentWillMount"),typeof e.componentWillReceiveProps=="function"?o="componentWillReceiveProps":typeof e.UNSAFE_componentWillReceiveProps=="function"&&(o="UNSAFE_componentWillReceiveProps"),typeof e.componentWillUpdate=="function"?a="componentWillUpdate":typeof e.UNSAFE_componentWillUpdate=="function"&&(a="UNSAFE_componentWillUpdate"),n!==null||o!==null||a!==null){var d=t.displayName||t.name,m=typeof t.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+d+" uses "+m+" but also contains the following legacy lifecycles:"+(n!==null?`
  `+n:"")+(o!==null?`
  `+o:"")+(a!==null?`
  `+a:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof t.getDerivedStateFromProps=="function"&&(e.componentWillMount=Fe,e.componentWillReceiveProps=Ue),typeof e.getSnapshotBeforeUpdate=="function"){if(typeof e.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=ke;var l=e.componentDidUpdate;e.componentDidUpdate=function(s,p,h){var N=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:h;l.call(this,s,p,N)}}return t}const zt=Object.freeze(Object.defineProperty({__proto__:null,polyfill:Kt},Symbol.toStringTag,{value:"Module"})),Vt=ze(zt);Object.defineProperty(W,"__esModule",{value:!0});W.bodyOpenClassName=W.portalClassName=void 0;var Ee=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Yt=function(){function t(e,n){for(var o=0;o<n.length;o++){var a=n[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),We=C,se=G(We),Xt=Ge,ie=G(Xt),Zt=Te,u=G(Zt),Gt=Bt,we=G(Gt),Jt=R,Qt=tn(Jt),L=S,Se=G(L),en=Vt;function tn(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function G(t){return t&&t.__esModule?t:{default:t}}function nn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Me(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function on(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var rn=W.portalClassName="ReactModalPortal",an=W.bodyOpenClassName="ReactModal__Body--open",U=L.canUseDOM&&ie.default.createPortal!==void 0,Re=function(e){return document.createElement(e)},Ne=function(){return U?ie.default.createPortal:ie.default.unstable_renderSubtreeIntoContainer};function oe(t){return t()}var J=function(t){on(e,t);function e(){var n,o,a,d;nn(this,e);for(var m=arguments.length,l=Array(m),f=0;f<m;f++)l[f]=arguments[f];return d=(o=(a=Me(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(l))),a),a.removePortal=function(){!U&&ie.default.unmountComponentAtNode(a.node);var s=oe(a.props.parentSelector);s&&s.contains(a.node)?s.removeChild(a.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},a.portalRef=function(s){a.portal=s},a.renderPortal=function(s){var p=Ne(),h=p(a,se.default.createElement(we.default,Ee({defaultStyles:e.defaultStyles},s)),a.node);a.portalRef(h)},o),Me(a,d)}return Yt(e,[{key:"componentDidMount",value:function(){if(L.canUseDOM){U||(this.node=Re("div")),this.node.className=this.props.portalClassName;var o=oe(this.props.parentSelector);o.appendChild(this.node),!U&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(o){var a=oe(o.parentSelector),d=oe(this.props.parentSelector);return{prevParent:a,nextParent:d}}},{key:"componentDidUpdate",value:function(o,a,d){if(L.canUseDOM){var m=this.props,l=m.isOpen,f=m.portalClassName;o.portalClassName!==f&&(this.node.className=f);var s=d.prevParent,p=d.nextParent;p!==s&&(s.removeChild(this.node),p.appendChild(this.node)),!(!o.isOpen&&!l)&&!U&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!L.canUseDOM||!this.node||!this.portal)){var o=this.portal.state,a=Date.now(),d=o.isOpen&&this.props.closeTimeoutMS&&(o.closesAt||a+this.props.closeTimeoutMS);d?(o.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,d-a)):this.removePortal()}}},{key:"render",value:function(){if(!L.canUseDOM||!U)return null;!this.node&&U&&(this.node=Re("div"));var o=Ne();return o(se.default.createElement(we.default,Ee({ref:this.portalRef,defaultStyles:e.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(o){Qt.setElement(o)}}]),e}(We.Component);J.propTypes={isOpen:u.default.bool.isRequired,style:u.default.shape({content:u.default.object,overlay:u.default.object}),portalClassName:u.default.string,bodyOpenClassName:u.default.string,htmlOpenClassName:u.default.string,className:u.default.oneOfType([u.default.string,u.default.shape({base:u.default.string.isRequired,afterOpen:u.default.string.isRequired,beforeClose:u.default.string.isRequired})]),overlayClassName:u.default.oneOfType([u.default.string,u.default.shape({base:u.default.string.isRequired,afterOpen:u.default.string.isRequired,beforeClose:u.default.string.isRequired})]),appElement:u.default.oneOfType([u.default.instanceOf(Se.default),u.default.instanceOf(L.SafeHTMLCollection),u.default.instanceOf(L.SafeNodeList),u.default.arrayOf(u.default.instanceOf(Se.default))]),onAfterOpen:u.default.func,onRequestClose:u.default.func,closeTimeoutMS:u.default.number,ariaHideApp:u.default.bool,shouldFocusAfterRender:u.default.bool,shouldCloseOnOverlayClick:u.default.bool,shouldReturnFocusAfterClose:u.default.bool,preventScroll:u.default.bool,parentSelector:u.default.func,aria:u.default.object,data:u.default.object,role:u.default.string,contentLabel:u.default.string,shouldCloseOnEsc:u.default.bool,overlayRef:u.default.func,contentRef:u.default.func,id:u.default.string,overlayElement:u.default.func,contentElement:u.default.func};J.defaultProps={isOpen:!1,portalClassName:rn,bodyOpenClassName:an,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,n){return se.default.createElement("div",e,n)},contentElement:function(e,n){return se.default.createElement("div",e,n)}};J.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,en.polyfill)(J);W.default=J;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=W,o=a(n);function a(d){return d&&d.__esModule?d:{default:d}}e.default=o.default,t.exports=e.default})(ve,ve.exports);var ln=ve.exports;const Ie=Ve(ln);var sn=globalThis&&globalThis.__rest||function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,o=Object.getOwnPropertySymbols(t);a<o.length;a++)e.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(t,o[a])&&(n[o[a]]=t[o[a]]);return n};const un=C.forwardRef((t,e)=>{var{className:n}=t,o=sn(t,["className"]);return re.createElement("div",Object.assign({},o,{ref:e,className:ae("navds-modal__content",n)}))}),fn=un;var cn=globalThis&&globalThis.__rest||function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,o=Object.getOwnPropertySymbols(t);a<o.length;a++)e.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(t,o[a])&&(n[o[a]]=t[o[a]]);return n};const fe=C.forwardRef((t,e)=>{var n,o,{children:a,open:d,onClose:m,className:l,overlayClassName:f,shouldCloseOnOverlayClick:s=!0,shouldCloseOnEsc:p=!0,closeButton:h=!0,"aria-describedby":N,"aria-labelledby":P,"aria-modal":x,"aria-label":T,style:F,parentSelector:A}=t,ce=cn(t,["children","open","onClose","className","overlayClassName","shouldCloseOnOverlayClick","shouldCloseOnEsc","closeButton","aria-describedby","aria-labelledby","aria-modal","aria-label","style","parentSelector"]);const Q=C.useRef(null),j=C.useMemo(()=>Xe([Q,e]),[e]),D=C.useRef(null),ee=(n=Pe())===null||n===void 0?void 0:n.rootElement,B=(o=Pe())===null||o===void 0?void 0:o.appElement;C.useEffect(()=>{B&&fe.setAppElement(B)},[B]);const de=z=>{s||z.type==="keydown"?m():D.current&&D.current.focus()},K=()=>A||(ee!==void 0?()=>ee:void 0);return re.createElement(Ie,Object.assign({},ce,{parentSelector:K(),style:F,isOpen:d,ref:j,className:ae("navds-modal",l),overlayClassName:ae("navds-modal__overlay",f),shouldCloseOnOverlayClick:s,shouldCloseOnEsc:p,onRequestClose:z=>de(z),aria:{describedby:N,labelledby:P,modal:x},contentLabel:T}),a,h&&re.createElement(Ze,{className:ae("navds-modal__button",{"navds-modal__button--shake":s}),size:"small",variant:"tertiary-neutral",ref:D,onClick:m,icon:re.createElement(et,{title:"Lukk modalvindu"})}))});fe.setAppElement=t=>Ie.setAppElement(t);fe.Content=fn;const yn=fe;globalThis&&globalThis.__rest;const dn=C.createContext(void 0),Pe=()=>C.useContext(dn);export{yn as M};
//# sourceMappingURL=Provider-e02157b4.js.map
