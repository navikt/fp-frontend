import"../sb-preview/runtime.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const E="modulepreload",p=function(n,i){return new URL(n,i).href},u={},o=function(i,s,l){if(!s||s.length===0)return i();const t=document.getElementsByTagName("link");return Promise.all(s.map(e=>{if(e=p(e,l),e in u)return;u[e]=!0;const r=e.endsWith(".css"),m=r?'[rel="stylesheet"]':"";if(!!l)for(let c=t.length-1;c>=0;c--){const a=t[c];if(a.href===e&&(!r||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${m}`))return;const _=document.createElement("link");if(_.rel=r?"stylesheet":E,r||(_.as="script",_.crossOrigin=""),_.href=e,document.head.appendChild(_),r)return new Promise((c,a)=>{_.addEventListener("load",c),_.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>i()).catch(e=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=e,window.dispatchEvent(r),!r.defaultPrevented)throw e})},{createBrowserChannel:f}=__STORYBOOK_MODULE_CHANNELS__,{addons:R}=__STORYBOOK_MODULE_PREVIEW_API__,O=f({page:"preview"});R.setChannel(O);window.__STORYBOOK_ADDONS_CHANNEL__=O;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=O);const w={"./src/TotrinnskontrollSakIndex.stories.tsx":async()=>o(()=>import("./TotrinnskontrollSakIndex.stories-84294198.js"),["./TotrinnskontrollSakIndex.stories-84294198.js","./jsx-runtime-d079401a.js","./index-f1f2c4b1.js","./chunk-AY7I2SME-c7b6cf8a.js","./nb_NO-236838ac.js","./index-c74c9f7f.js","./TotrinnskontrollSakIndex.stories-85e37e8c.css"],import.meta.url),"./src/FatterVedtakApprovalModalSakIndex.stories.tsx":async()=>o(()=>import("./FatterVedtakApprovalModalSakIndex.stories-ddb6e441.js"),["./FatterVedtakApprovalModalSakIndex.stories-ddb6e441.js","./jsx-runtime-d079401a.js","./index-f1f2c4b1.js","./chunk-AY7I2SME-c7b6cf8a.js","./nb_NO-236838ac.js","./index-c74c9f7f.js","./FatterVedtakApprovalModalSakIndex.stories-0cb86657.css"],import.meta.url)};async function d(n){return w[n]()}d.__docgenInfo={description:"",methods:[],displayName:"importFn"};const{composeConfigs:P,PreviewWeb:T,ClientApi:S}=__STORYBOOK_MODULE_PREVIEW_API__,I=async()=>{const n=await Promise.all([o(()=>import("./config-8b01d46a.js"),["./config-8b01d46a.js","./index-f1f2c4b1.js","./_getPrototype-27fad0b8.js","./index-c74c9f7f.js","./index-356e4a49.js"],import.meta.url),o(()=>import("./preview-87eac49b.js"),["./preview-87eac49b.js","./index-d37d4223.js"],import.meta.url),o(()=>import("./preview-031e416a.js"),[],import.meta.url),o(()=>import("./preview-980d6faf.js"),["./preview-980d6faf.js","./chunk-AY7I2SME-c7b6cf8a.js"],import.meta.url),o(()=>import("./preview-15309724.js"),["./preview-15309724.js","./index-356e4a49.js"],import.meta.url),o(()=>import("./preview-2059b184.js"),[],import.meta.url),o(()=>import("./preview-b8d6c68d.js"),["./preview-b8d6c68d.js","./index-356e4a49.js"],import.meta.url),o(()=>import("./preview-b3c37142.js"),[],import.meta.url),o(()=>import("./preview-cb7c91b7.js"),["./preview-cb7c91b7.js","./jsx-runtime-d079401a.js","./index-f1f2c4b1.js","./preview-bd5906a4.css"],import.meta.url)]);return P(n)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new T;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new S({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:d,getProjectAnnotations:I});export{o as _};
//# sourceMappingURL=iframe-237d3917.js.map
