import"../sb-preview/runtime.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const E="modulepreload",p=function(i,n){return new URL(i,n).href},O={},o=function(n,s,c){if(!s||s.length===0)return n();const t=document.getElementsByTagName("link");return Promise.all(s.map(e=>{if(e=p(e,c),e in O)return;O[e]=!0;const r=e.endsWith(".css"),m=r?'[rel="stylesheet"]':"";if(!!c)for(let l=t.length-1;l>=0;l--){const a=t[l];if(a.href===e&&(!r||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${m}`))return;const _=document.createElement("link");if(_.rel=r?"stylesheet":E,r||(_.as="script",_.crossOrigin=""),_.href=e,document.head.appendChild(_),r)return new Promise((l,a)=>{_.addEventListener("load",l),_.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>n()).catch(e=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=e,window.dispatchEvent(r),!r.defaultPrevented)throw e})},{createBrowserChannel:f}=__STORYBOOK_MODULE_CHANNELS__,{addons:R}=__STORYBOOK_MODULE_PREVIEW_API__,u=f({page:"preview"});R.setChannel(u);window.__STORYBOOK_ADDONS_CHANNEL__=u;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=u);const w={"./src/OppgaveJournalføringIndex.stories.tsx":async()=>o(()=>import("./OppgaveJournalføringIndex.stories-3ad27fcb.js"),["./OppgaveJournalføringIndex.stories-3ad27fcb.js","./jsx-runtime-9c4ae004.js","./index-1b03fe98.js","./oppgavePrioritet-9211ff7a.js","./oppgavePrioritet-03482163.css","./extends-98964cd2.js","./index-6fd5a17b.js","./OppgaveJournalføringIndex.stories-5653ccf3.css"],import.meta.url),"./src/components/journalpost/JournalpostDetaljer.stories.tsx":async()=>o(()=>import("./JournalpostDetaljer.stories-773bbaf9.js"),["./JournalpostDetaljer.stories-773bbaf9.js","./jsx-runtime-9c4ae004.js","./index-1b03fe98.js","./chunk-AY7I2SME-c7b6cf8a.js","./oppgavePrioritet-9211ff7a.js","./oppgavePrioritet-03482163.css"],import.meta.url)};async function d(i){return w[i]()}d.__docgenInfo={description:"",methods:[],displayName:"importFn"};const{composeConfigs:P,PreviewWeb:T,ClientApi:L}=__STORYBOOK_MODULE_PREVIEW_API__,S=async()=>{const i=await Promise.all([o(()=>import("./config-22232caf.js"),["./config-22232caf.js","./index-1b03fe98.js","./_getPrototype-fbb216ba.js","./index-6fd5a17b.js","./index-356e4a49.js"],import.meta.url),o(()=>import("./preview-87eac49b.js"),["./preview-87eac49b.js","./index-d37d4223.js"],import.meta.url),o(()=>import("./preview-58f5a41f.js"),[],import.meta.url),o(()=>import("./preview-980d6faf.js"),["./preview-980d6faf.js","./chunk-AY7I2SME-c7b6cf8a.js"],import.meta.url),o(()=>import("./preview-15309724.js"),["./preview-15309724.js","./index-356e4a49.js"],import.meta.url),o(()=>import("./preview-2059b184.js"),[],import.meta.url),o(()=>import("./preview-b8d6c68d.js"),["./preview-b8d6c68d.js","./index-356e4a49.js"],import.meta.url),o(()=>import("./preview-b3c37142.js"),[],import.meta.url),o(()=>import("./preview-3d4f685e.js"),["./preview-3d4f685e.js","./jsx-runtime-9c4ae004.js","./index-1b03fe98.js","./preview-da8c1275.css"],import.meta.url)]);return P(i)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new T;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new L({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:d,getProjectAnnotations:S});export{o as _};
//# sourceMappingURL=iframe-19699d7f.js.map
