import"../sb-preview/runtime.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const E="modulepreload",f=function(_,i){return new URL(_,i).href},d={},o=function(i,s,l){let e=Promise.resolve();if(s&&s.length>0){const t=document.getElementsByTagName("link");e=Promise.all(s.map(r=>{if(r=f(r,l),r in d)return;d[r]=!0;const c=r.endsWith(".css"),m=c?'[rel="stylesheet"]':"";if(!!l)for(let a=t.length-1;a>=0;a--){const O=t[a];if(O.href===r&&(!c||O.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${m}`))return;const n=document.createElement("link");if(n.rel=c?"stylesheet":E,c||(n.as="script",n.crossOrigin=""),n.href=r,document.head.appendChild(n),c)return new Promise((a,O)=>{n.addEventListener("load",a),n.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${r}`)))})}))}return e.then(()=>i()).catch(t=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=t,window.dispatchEvent(r),!r.defaultPrevented)throw t})},{createBrowserChannel:p}=__STORYBOOK_MODULE_CHANNELS__,{addons:R}=__STORYBOOK_MODULE_PREVIEW_API__,u=p({page:"preview"});R.setChannel(u);window.__STORYBOOK_ADDONS_CHANNEL__=u;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=u);const w={"./src/NotatSakIndex.stories.tsx":async()=>o(()=>import("./NotatSakIndex.stories-lOvD-BjM.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url)};async function P(_){return w[_]()}const{composeConfigs:T,PreviewWeb:S,ClientApi:L}=__STORYBOOK_MODULE_PREVIEW_API__,I=async()=>{const _=await Promise.all([o(()=>import("./entry-preview-2FNvS3aK.js"),__vite__mapDeps([7,2,8,5]),import.meta.url),o(()=>import("./entry-preview-docs-D8aCJcK0.js"),__vite__mapDeps([9,10,2,4]),import.meta.url),o(()=>import("./preview-VI2eoWmp.js"),__vite__mapDeps([11,12]),import.meta.url),o(()=>import("./preview-aMWRrZcH.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-98732p1V.js"),__vite__mapDeps([13,3,4]),import.meta.url),o(()=>import("./preview-wm7zCcxo.js"),__vite__mapDeps([14,4]),import.meta.url),o(()=>import("./preview-MdQXpms2.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-u8M_OEO2.js"),__vite__mapDeps([15,4]),import.meta.url),o(()=>import("./preview-bEa2SesL.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-9-qY8grZ.js"),__vite__mapDeps([16,1,2,17]),import.meta.url)]);return T(_)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new S;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new L({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:P,getProjectAnnotations:I});export{o as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./NotatSakIndex.stories-lOvD-BjM.js","./jsx-runtime-5gPUkPQy.js","./index-DogsOklH.js","./preview-errors-7FWlPnjy.js","./index-PPLHz8o0.js","./index-MroJ3egt.js","./NotatSakIndex-HOMMs-xR.css","./entry-preview-2FNvS3aK.js","./react-18-Zjprz-m4.js","./entry-preview-docs-D8aCJcK0.js","./_getPrototype-KztV_HEV.js","./preview-VI2eoWmp.js","./index-ogXoivrg.js","./preview-98732p1V.js","./preview-wm7zCcxo.js","./preview-u8M_OEO2.js","./preview-9-qY8grZ.js","./preview-rvsNoP4e.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}