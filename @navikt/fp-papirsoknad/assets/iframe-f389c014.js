import"../sb-preview/runtime.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const E="modulepreload",p=function(i,n){return new URL(i,n).href},u={},o=function(n,s,a){if(!s||s.length===0)return n();const t=document.getElementsByTagName("link");return Promise.all(s.map(e=>{if(e=p(e,a),e in u)return;u[e]=!0;const r=e.endsWith(".css"),m=r?'[rel="stylesheet"]':"";if(!!a)for(let c=t.length-1;c>=0;c--){const l=t[c];if(l.href===e&&(!r||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${m}`))return;const _=document.createElement("link");if(_.rel=r?"stylesheet":E,r||(_.as="script",_.crossOrigin=""),_.href=e,document.head.appendChild(_),r)return new Promise((c,l)=>{_.addEventListener("load",c),_.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>n()).catch(e=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=e,window.dispatchEvent(r),!r.defaultPrevented)throw e})},{createBrowserChannel:f}=__STORYBOOK_MODULE_CHANNELS__,{addons:R}=__STORYBOOK_MODULE_PREVIEW_API__,d=f({page:"preview"});R.setChannel(d);window.__STORYBOOK_ADDONS_CHANNEL__=d;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=d);const P={"./src/svangerskapspenger/SvangerskapspengerPapirsoknadIndex.stories.tsx":async()=>o(()=>import("./SvangerskapspengerPapirsoknadIndex.stories-a5aabae4.js"),["./SvangerskapspengerPapirsoknadIndex.stories-a5aabae4.js","./jsx-runtime-9c4ae004.js","./index-1b03fe98.js","./chunk-AY7I2SME-c7b6cf8a.js","./index.es-0068e8c7.js","./index-42412fa0.js","./index-6fd5a17b.js","./nb_NO-b2fed865.js"],import.meta.url),"./src/modal/SoknadRegistrertModal.stories.tsx":async()=>o(()=>import("./SoknadRegistrertModal.stories-d3698011.js"),["./SoknadRegistrertModal.stories-d3698011.js","./jsx-runtime-9c4ae004.js","./index-1b03fe98.js","./index-42412fa0.js","./index-6fd5a17b.js","./nb_NO-b2fed865.js","./SoknadRegistrertModal.stories-76356110.css"],import.meta.url),"./src/foreldrepenger/ForeldrepengerPapirsoknadIndex.stories.tsx":async()=>o(()=>import("./ForeldrepengerPapirsoknadIndex.stories-fca030c6.js"),["./ForeldrepengerPapirsoknadIndex.stories-fca030c6.js","./jsx-runtime-9c4ae004.js","./index-1b03fe98.js","./chunk-AY7I2SME-c7b6cf8a.js","./index.es-0068e8c7.js","./index-42412fa0.js","./index-6fd5a17b.js"],import.meta.url),"./src/engangsstonad/EngangsstonadPapirsoknadIndex.stories.tsx":async()=>o(()=>import("./EngangsstonadPapirsoknadIndex.stories-87979ea8.js"),["./EngangsstonadPapirsoknadIndex.stories-87979ea8.js","./jsx-runtime-9c4ae004.js","./index-1b03fe98.js","./chunk-AY7I2SME-c7b6cf8a.js","./index.es-0068e8c7.js","./index-42412fa0.js","./index-6fd5a17b.js","./EngangsstonadPapirsoknadIndex.stories-69b61bd1.css"],import.meta.url)};async function O(i){return P[i]()}O.__docgenInfo={description:"",methods:[],displayName:"importFn"};const{composeConfigs:w,PreviewWeb:T,ClientApi:I}=__STORYBOOK_MODULE_PREVIEW_API__,L=async()=>{const i=await Promise.all([o(()=>import("./config-22232caf.js"),["./config-22232caf.js","./index-1b03fe98.js","./_getPrototype-fbb216ba.js","./index-6fd5a17b.js","./index-356e4a49.js"],import.meta.url),o(()=>import("./preview-87eac49b.js"),["./preview-87eac49b.js","./index-d37d4223.js"],import.meta.url),o(()=>import("./preview-ed1044ee.js"),[],import.meta.url),o(()=>import("./preview-980d6faf.js"),["./preview-980d6faf.js","./chunk-AY7I2SME-c7b6cf8a.js"],import.meta.url),o(()=>import("./preview-15309724.js"),["./preview-15309724.js","./index-356e4a49.js"],import.meta.url),o(()=>import("./preview-2059b184.js"),[],import.meta.url),o(()=>import("./preview-b8d6c68d.js"),["./preview-b8d6c68d.js","./index-356e4a49.js"],import.meta.url),o(()=>import("./preview-b3c37142.js"),[],import.meta.url),o(()=>import("./preview-d3448ce6.js"),["./preview-d3448ce6.js","./jsx-runtime-9c4ae004.js","./index-1b03fe98.js","./preview-3ccbc068.css"],import.meta.url)]);return w(i)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new T;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new I({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:O,getProjectAnnotations:L});export{o as _};
//# sourceMappingURL=iframe-f389c014.js.map
