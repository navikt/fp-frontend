const __vite__fileDeps=["./TilkjentYtelseProsessIndex.stories-BjtY4ysr.js","./index-DVXBtNgz.js","./v4-CQkTLCs1.js","./tslib.es6-CMwweBXX.js","./index-Cbx7Fas8.js","./TilkjentYtelseProsessIndex-C-JjXI-Y.css","./entry-preview-D5o9XUf4.js","./client-DWUO8fVt.js","./entry-preview-docs-CYGZiZ6e.js","./_getPrototype-DX4bYm8U.js","./index-DrFu-skq.js","./preview-TCN6m6T-.js","./index-DXimoRZY.js","./preview-CJTK1H4D.js","./preview-CwqMn10d.js","./preview-BAz7FMXc.js","./preview-nehbdcj9.js","./preview-CP8qkfKT.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import"../sb-preview/runtime.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();const f="modulepreload",R=function(t,i){return new URL(t,i).href},d={},_=function(i,c,l){let e=Promise.resolve();if(c&&c.length>0){const r=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),E=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));e=Promise.all(c.map(n=>{if(n=R(n,l),n in d)return;d[n]=!0;const a=n.endsWith(".css"),p=a?'[rel="stylesheet"]':"";if(!!l)for(let u=r.length-1;u>=0;u--){const O=r[u];if(O.href===n&&(!a||O.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${p}`))return;const s=document.createElement("link");if(s.rel=a?"stylesheet":f,a||(s.as="script",s.crossOrigin=""),s.href=n,E&&s.setAttribute("nonce",E),document.head.appendChild(s),a)return new Promise((u,O)=>{s.addEventListener("load",u),s.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${n}`)))})}))}return e.then(()=>i()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})},{createBrowserChannel:T}=__STORYBOOK_MODULE_CHANNELS__,{addons:L}=__STORYBOOK_MODULE_PREVIEW_API__,m=T({page:"preview"});L.setChannel(m);window.__STORYBOOK_ADDONS_CHANNEL__=m;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=m);const P={"./src/TilkjentYtelseProsessIndex.stories.tsx":async()=>_(()=>import("./TilkjentYtelseProsessIndex.stories-BjtY4ysr.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url)};async function S(t){return P[t]()}const{composeConfigs:y,PreviewWeb:I,ClientApi:D}=__STORYBOOK_MODULE_PREVIEW_API__,w=async(t=[])=>{const i=await Promise.all([t.at(0)??_(()=>import("./entry-preview-D5o9XUf4.js"),__vite__mapDeps([6,1,7,4]),import.meta.url),t.at(1)??_(()=>import("./entry-preview-docs-CYGZiZ6e.js"),__vite__mapDeps([8,9,1,10]),import.meta.url),t.at(2)??_(()=>import("./preview-TCN6m6T-.js"),__vite__mapDeps([11,12]),import.meta.url),t.at(3)??_(()=>import("./preview-D-mfUlz1.js"),[],import.meta.url),t.at(4)??_(()=>import("./preview-CJTK1H4D.js"),__vite__mapDeps([13,2]),import.meta.url),t.at(5)??_(()=>import("./preview-CwqMn10d.js"),__vite__mapDeps([14,10]),import.meta.url),t.at(6)??_(()=>import("./preview-B4GcaC1c.js"),[],import.meta.url),t.at(7)??_(()=>import("./preview-Db4Idchh.js"),[],import.meta.url),t.at(8)??_(()=>import("./preview-BAz7FMXc.js"),__vite__mapDeps([15,10]),import.meta.url),t.at(9)??_(()=>import("./preview-BpcF_O6y.js"),[],import.meta.url),t.at(10)??_(()=>import("./preview-nehbdcj9.js"),__vite__mapDeps([16,1,17]),import.meta.url)]);return y(i)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new I(S,w);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{_};
