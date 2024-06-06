import{r as o,$ as te,R as W}from"./index-DVXBtNgz.js";import"./index-Cbx7Fas8.js";/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function U(){return U=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},U.apply(this,arguments)}var b;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(b||(b={}));const A="popstate";function ne(e){e===void 0&&(e={});function t(n,r){let{pathname:l,search:i,hash:c}=n.location;return _("",{pathname:l,search:i,hash:c},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function a(n,r){return typeof r=="string"?r:E(r)}return re(t,a,null,e)}function w(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ae(){return Math.random().toString(36).substr(2,8)}function k(e,t){return{usr:e.state,key:e.key,idx:t}}function _(e,t,a,n){return a===void 0&&(a=null),U({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?O(t):t,{state:a,key:t&&t.key||n||ae()})}function E(e){let{pathname:t="/",search:a="",hash:n=""}=e;return a&&a!=="?"&&(t+=a.charAt(0)==="?"?a:"?"+a),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function O(e){let t={};if(e){let a=e.indexOf("#");a>=0&&(t.hash=e.substr(a),e=e.substr(0,a));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function re(e,t,a,n){n===void 0&&(n={});let{window:r=document.defaultView,v5Compat:l=!1}=n,i=r.history,c=b.Pop,u=null,s=h();s==null&&(s=0,i.replaceState(U({},i.state,{idx:s}),""));function h(){return(i.state||{idx:null}).idx}function d(){c=b.Pop;let f=h(),v=f==null?null:f-s;s=f,u&&u({action:c,location:p.location,delta:v})}function m(f,v){c=b.Push;let g=_(p.location,f,v);s=h()+1;let y=k(g,s),x=p.createHref(g);try{i.pushState(y,"",x)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;r.location.assign(x)}l&&u&&u({action:c,location:p.location,delta:1})}function R(f,v){c=b.Replace;let g=_(p.location,f,v);s=h();let y=k(g,s),x=p.createHref(g);i.replaceState(y,"",x),l&&u&&u({action:c,location:p.location,delta:0})}function C(f){let v=r.location.origin!=="null"?r.location.origin:r.location.href,g=typeof f=="string"?f:E(f);return g=g.replace(/ $/,"%20"),w(v,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,v)}let p={get action(){return c},get location(){return e(r,i)},listen(f){if(u)throw new Error("A history only accepts one active listener");return r.addEventListener(A,d),u=f,()=>{r.removeEventListener(A,d),u=null}},createHref(f){return t(r,f)},createURL:C,encodeLocation(f){let v=C(f);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:m,replace:R,go(f){return i.go(f)}};return p}var $;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})($||($={}));function V(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let a=t.endsWith("/")?t.length-1:t.length,n=e.charAt(a);return n&&n!=="/"?null:e.slice(a)||"/"}function ie(e,t){t===void 0&&(t="/");let{pathname:a,search:n="",hash:r=""}=typeof e=="string"?O(e):e;return{pathname:a?a.startsWith("/")?a:le(a,t):t,search:se(n),hash:ue(r)}}function le(e,t){let a=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?a.length>1&&a.pop():r!=="."&&a.push(r)}),a.length>1?a.join("/"):"/"}function I(e,t,a,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+a+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function oe(e){return e.filter((t,a)=>a===0||t.route.path&&t.route.path.length>0)}function z(e,t){let a=oe(e);return t?a.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase):a.map(n=>n.pathnameBase)}function q(e,t,a,n){n===void 0&&(n=!1);let r;typeof e=="string"?r=O(e):(r=U({},e),w(!r.pathname||!r.pathname.includes("?"),I("?","pathname","search",r)),w(!r.pathname||!r.pathname.includes("#"),I("#","pathname","hash",r)),w(!r.search||!r.search.includes("#"),I("#","search","hash",r)));let l=e===""||r.pathname==="",i=l?"/":r.pathname,c;if(i==null)c=a;else{let d=t.length-1;if(!n&&i.startsWith("..")){let m=i.split("/");for(;m[0]==="..";)m.shift(),d-=1;r.pathname=m.join("/")}c=d>=0?t[d]:"/"}let u=ie(r,c),s=i&&i!=="/"&&i.endsWith("/"),h=(l||i===".")&&a.endsWith("/");return!u.pathname.endsWith("/")&&(s||h)&&(u.pathname+="/"),u}const D=e=>e.join("/").replace(/\/\/+/g,"/"),se=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ue=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,G=["post","put","patch","delete"];new Set(G);const ce=["get",...G];new Set(ce);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},L.apply(this,arguments)}const X=o.createContext(null),S=o.createContext(null),B=o.createContext(null),N=o.createContext({outlet:null,matches:[],isDataRoute:!1});function fe(e,t){let{relative:a}=t===void 0?{}:t;T()||w(!1);let{basename:n,navigator:r}=o.useContext(S),{hash:l,pathname:i,search:c}=Y(e,{relative:a}),u=i;return n!=="/"&&(u=i==="/"?n:D([n,i])),r.createHref({pathname:u,search:c,hash:l})}function T(){return o.useContext(B)!=null}function M(){return T()||w(!1),o.useContext(B).location}function Q(e){o.useContext(S).static||o.useLayoutEffect(e)}function he(){let{isDataRoute:e}=o.useContext(N);return e?ge():de()}function de(){T()||w(!1);let e=o.useContext(X),{basename:t,future:a,navigator:n}=o.useContext(S),{matches:r}=o.useContext(N),{pathname:l}=M(),i=JSON.stringify(z(r,a.v7_relativeSplatPath)),c=o.useRef(!1);return Q(()=>{c.current=!0}),o.useCallback(function(s,h){if(h===void 0&&(h={}),!c.current)return;if(typeof s=="number"){n.go(s);return}let d=q(s,JSON.parse(i),l,h.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:D([t,d.pathname])),(h.replace?n.replace:n.push)(d,h.state,h)},[t,n,i,l,e])}function Y(e,t){let{relative:a}=t===void 0?{}:t,{future:n}=o.useContext(S),{matches:r}=o.useContext(N),{pathname:l}=M(),i=JSON.stringify(z(r,n.v7_relativeSplatPath));return o.useMemo(()=>q(e,JSON.parse(i),l,a==="path"),[e,i,l,a])}var Z=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Z||{}),H=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(H||{});function pe(e){let t=o.useContext(X);return t||w(!1),t}function ve(e){let t=o.useContext(N);return t||w(!1),t}function me(e){let t=ve(),a=t.matches[t.matches.length-1];return a.route.id||w(!1),a.route.id}function ge(){let{router:e}=pe(Z.UseNavigateStable),t=me(H.UseNavigateStable),a=o.useRef(!1);return Q(()=>{a.current=!0}),o.useCallback(function(r,l){l===void 0&&(l={}),a.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,L({fromRouteId:t},l)))},[e,t])}function ye(e){let{basename:t="/",children:a=null,location:n,navigationType:r=b.Pop,navigator:l,static:i=!1,future:c}=e;T()&&w(!1);let u=t.replace(/^\/*/,"/"),s=o.useMemo(()=>({basename:u,navigator:l,static:i,future:L({v7_relativeSplatPath:!1},c)}),[u,c,l,i]);typeof n=="string"&&(n=O(n));let{pathname:h="/",search:d="",hash:m="",state:R=null,key:C="default"}=n,p=o.useMemo(()=>{let f=V(h,u);return f==null?null:{location:{pathname:f,search:d,hash:m,state:R,key:C},navigationType:r}},[u,h,d,m,R,C,r]);return p==null?null:o.createElement(S.Provider,{value:s},o.createElement(B.Provider,{children:a,value:p}))}new Promise(()=>{});/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},j.apply(this,arguments)}function we(e,t){if(e==null)return{};var a={},n=Object.keys(e),r,l;for(l=0;l<n.length;l++)r=n[l],!(t.indexOf(r)>=0)&&(a[r]=e[r]);return a}function xe(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ce(e,t){return e.button===0&&(!t||t==="_self")&&!xe(e)}const be=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Re="6";try{window.__reactRouterVersion=Re}catch{}const Pe="startTransition",F=te[Pe];function Se(e){let{basename:t,children:a,future:n,window:r}=e,l=o.useRef();l.current==null&&(l.current=ne({window:r,v5Compat:!0}));let i=l.current,[c,u]=o.useState({action:i.action,location:i.location}),{v7_startTransition:s}=n||{},h=o.useCallback(d=>{s&&F?F(()=>u(d)):u(d)},[u,s]);return o.useLayoutEffect(()=>i.listen(h),[i,h]),o.createElement(ye,{basename:t,children:a,location:c.location,navigationType:c.action,navigator:i,future:n})}const Ue=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ee=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Te=o.forwardRef(function(t,a){let{onClick:n,relative:r,reloadDocument:l,replace:i,state:c,target:u,to:s,preventScrollReset:h,unstable_viewTransition:d}=t,m=we(t,be),{basename:R}=o.useContext(S),C,p=!1;if(typeof s=="string"&&Ee.test(s)&&(C=s,Ue))try{let y=new URL(window.location.href),x=s.startsWith("//")?new URL(y.protocol+s):new URL(s),P=V(x.pathname,R);x.origin===y.origin&&P!=null?s=P+x.search+x.hash:p=!0}catch{}let f=fe(s,{relative:r}),v=Le(s,{replace:i,state:c,target:u,preventScrollReset:h,relative:r,unstable_viewTransition:d});function g(y){n&&n(y),y.defaultPrevented||v(y)}return o.createElement("a",j({},m,{href:C||f,onClick:p||l?n:g,ref:a,target:u}))});var J;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(J||(J={}));var K;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(K||(K={}));function Le(e,t){let{target:a,replace:n,state:r,preventScrollReset:l,relative:i,unstable_viewTransition:c}=t===void 0?{}:t,u=he(),s=M(),h=Y(e,{relative:i});return o.useCallback(d=>{if(Ce(d,a)){d.preventDefault();let m=n!==void 0?n:E(s)===E(h);u(e,{replace:m,state:r,preventScrollReset:l,relative:i,unstable_viewTransition:c})}},[s,u,h,n,r,a,e,l,i,c])}const ee=e=>W.createElement(Se,{basename:"/"},W.createElement(e,null)),Ie=ee;ee.__docgenInfo={description:"",methods:[],displayName:"withRouter"};export{Te as L,Ie as w};
