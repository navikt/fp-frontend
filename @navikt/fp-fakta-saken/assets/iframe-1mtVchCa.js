const __vite__fileDeps=["./SakenFaktaIndex.stories-DMgWOHMB.js","./index-DVXBtNgz.js","./v4-CQkTLCs1.js","./tslib.es6-CMwweBXX.js","./index-Cbx7Fas8.js","./SakenFaktaIndex-DiYxf3iK.css","./entry-preview-D5o9XUf4.js","./client-DWUO8fVt.js","./entry-preview-docs-CYGZiZ6e.js","./_getPrototype-DX4bYm8U.js","./index-DrFu-skq.js","./preview-TCN6m6T-.js","./index-DXimoRZY.js","./preview-CJTK1H4D.js","./preview-CwqMn10d.js","./preview-BAz7FMXc.js","./preview-Q_apYLSZ.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import"../sb-preview/runtime.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function c(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=c(t);fetch(t.href,r)}})();const f="modulepreload",R=function(e,i){return new URL(e,i).href},d={},_=function(i,c,a){let t=Promise.resolve();if(c&&c.length>0){const r=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),E=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));t=Promise.all(c.map(n=>{if(n=R(n,a),n in d)return;d[n]=!0;const l=n.endsWith(".css"),p=l?'[rel="stylesheet"]':"";if(!!a)for(let u=r.length-1;u>=0;u--){const O=r[u];if(O.href===n&&(!l||O.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${p}`))return;const s=document.createElement("link");if(s.rel=l?"stylesheet":f,l||(s.as="script",s.crossOrigin=""),s.href=n,E&&s.setAttribute("nonce",E),document.head.appendChild(s),l)return new Promise((u,O)=>{s.addEventListener("load",u),s.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${n}`)))})}))}return t.then(()=>i()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})},{createBrowserChannel:T}=__STORYBOOK_MODULE_CHANNELS__,{addons:L}=__STORYBOOK_MODULE_PREVIEW_API__,m=T({page:"preview"});L.setChannel(m);window.__STORYBOOK_ADDONS_CHANNEL__=m;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=m);const S={"./src/SakenFaktaIndex.stories.tsx":async()=>_(()=>import("./SakenFaktaIndex.stories-DMgWOHMB.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url)};async function P(e){return S[e]()}const{composeConfigs:y,PreviewWeb:I,ClientApi:D}=__STORYBOOK_MODULE_PREVIEW_API__,w=async(e=[])=>{const i=await Promise.all([e.at(0)??_(()=>import("./entry-preview-D5o9XUf4.js"),__vite__mapDeps([6,1,7,4]),import.meta.url),e.at(1)??_(()=>import("./entry-preview-docs-CYGZiZ6e.js"),__vite__mapDeps([8,9,1,10]),import.meta.url),e.at(2)??_(()=>import("./preview-TCN6m6T-.js"),__vite__mapDeps([11,12]),import.meta.url),e.at(3)??_(()=>import("./preview-B56BknHZ.js"),[],import.meta.url),e.at(4)??_(()=>import("./preview-CJTK1H4D.js"),__vite__mapDeps([13,2]),import.meta.url),e.at(5)??_(()=>import("./preview-CwqMn10d.js"),__vite__mapDeps([14,10]),import.meta.url),e.at(6)??_(()=>import("./preview-B4GcaC1c.js"),[],import.meta.url),e.at(7)??_(()=>import("./preview-Db4Idchh.js"),[],import.meta.url),e.at(8)??_(()=>import("./preview-BAz7FMXc.js"),__vite__mapDeps([15,10]),import.meta.url),e.at(9)??_(()=>import("./preview-BpcF_O6y.js"),[],import.meta.url),e.at(10)??_(()=>import("./preview-Q_apYLSZ.js"),__vite__mapDeps([16,1]),import.meta.url)]);return y(i)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new I(P,w);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{_};
