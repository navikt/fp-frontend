function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./FodselVilkarProsessIndex.stories-JMOvlDO_.js","./index-DogsOklH.js","./v4-yQnnJER4.js","./index-MroJ3egt.js","./FodselVilkarProsessIndex-hCZWLmbO.css","./entry-preview-Z7f2DmCU.js","./react-18-Zjprz-m4.js","./entry-preview-docs-Av-n_qsg.js","./_getPrototype-iZw6p92V.js","./index-PPLHz8o0.js","./preview-VI2eoWmp.js","./index-ogXoivrg.js","./preview-53UZ0Y3r.js","./preview-6iG64ELu.js","./preview-u8M_OEO2.js","./preview-LHIT72tb.js","./preview-6f0aLJeG.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import"../sb-preview/runtime.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const E="modulepreload",p=function(i,n){return new URL(i,n).href},d={},o=function(n,s,l){let e=Promise.resolve();if(s&&s.length>0){const t=document.getElementsByTagName("link");e=Promise.all(s.map(r=>{if(r=p(r,l),r in d)return;d[r]=!0;const c=r.endsWith(".css"),O=c?'[rel="stylesheet"]':"";if(!!l)for(let a=t.length-1;a>=0;a--){const u=t[a];if(u.href===r&&(!c||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${O}`))return;const _=document.createElement("link");if(_.rel=c?"stylesheet":E,c||(_.as="script",_.crossOrigin=""),_.href=r,document.head.appendChild(_),c)return new Promise((a,u)=>{_.addEventListener("load",a),_.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${r}`)))})}))}return e.then(()=>n()).catch(t=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=t,window.dispatchEvent(r),!r.defaultPrevented)throw t})},{createBrowserChannel:f}=__STORYBOOK_MODULE_CHANNELS__,{addons:R}=__STORYBOOK_MODULE_PREVIEW_API__,m=f({page:"preview"});R.setChannel(m);window.__STORYBOOK_ADDONS_CHANNEL__=m;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=m);const P={"./src/FodselVilkarProsessIndex.stories.tsx":async()=>o(()=>import("./FodselVilkarProsessIndex.stories-JMOvlDO_.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url)};async function w(i){return P[i]()}const{composeConfigs:T,PreviewWeb:L,ClientApi:I}=__STORYBOOK_MODULE_PREVIEW_API__,h=async()=>{const i=await Promise.all([o(()=>import("./entry-preview-Z7f2DmCU.js"),__vite__mapDeps([5,1,6,3]),import.meta.url),o(()=>import("./entry-preview-docs-Av-n_qsg.js"),__vite__mapDeps([7,8,1,9]),import.meta.url),o(()=>import("./preview-VI2eoWmp.js"),__vite__mapDeps([10,11]),import.meta.url),o(()=>import("./preview-AdoQjRuK.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-53UZ0Y3r.js"),__vite__mapDeps([12,2]),import.meta.url),o(()=>import("./preview-6iG64ELu.js"),__vite__mapDeps([13,9]),import.meta.url),o(()=>import("./preview-zZA4w0lH.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-MdQXpms2.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-u8M_OEO2.js"),__vite__mapDeps([14,9]),import.meta.url),o(()=>import("./preview-bEa2SesL.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-LHIT72tb.js"),__vite__mapDeps([15,1,16]),import.meta.url)]);return T(i)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new L(w,h);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{o as _};
