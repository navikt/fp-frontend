const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./FatterVedtakApprovalModalSakIndex.stories-DilOGclM.js","./jsx-runtime-DR9Q75dM.js","./index-DRjF_FHU.js","./nb_NO-DSvdMnA7.js","./v4-CQkTLCs1.js","./dayjs.min-DN4LN79F.js","./index-rX-Bn4lm.js","./FatterVedtakApprovalModalSakIndex-BTqpV8wp.css","./TotrinnskontrollSakIndex.stories-BzkwDB_w.js","./TotrinnskontrollSakIndex-Cc-0SZeD.css","./entry-preview-CqhKz-2I.js","./chunk-XP5HYGXS-BGCqD1aY.js","./entry-preview-docs-CL0gtcRG.js","./index-CzpEL4_8.js","./preview-BhhEZcNS.js","./index-D-8MO0q_.js","./preview-D0N1Y6iQ.js","./preview-D77C14du.js","./index-DrFu-skq.js","./preview-BWzBA1C2.js","./preview-BVOXnNc8.js","./preview-8oR_WQSz.css"])))=>i.map(i=>d[i]);
import"../sb-preview/runtime.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const R="modulepreload",T=function(t,n){return new URL(t,n).href},p={},_=function(n,l,a){let e=Promise.resolve();if(l&&l.length>0){const i=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),d=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));e=Promise.allSettled(l.map(s=>{if(s=T(s,a),s in p)return;p[s]=!0;const u=s.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(!!a)for(let m=i.length-1;m>=0;m--){const E=i[m];if(E.href===s&&(!u||E.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${f}`))return;const c=document.createElement("link");if(c.rel=u?"stylesheet":R,u||(c.as="script"),c.crossOrigin="",c.href=s,d&&c.setAttribute("nonce",d),document.head.appendChild(c),u)return new Promise((m,E)=>{c.addEventListener("load",m),c.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${s}`)))})}))}function r(i){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i}return e.then(i=>{for(const o of i||[])o.status==="rejected"&&r(o.reason);return n().catch(r)})},{createBrowserChannel:L}=__STORYBOOK_MODULE_CHANNELS__,{addons:S}=__STORYBOOK_MODULE_PREVIEW_API__,O=L({page:"preview"});S.setChannel(O);window.__STORYBOOK_ADDONS_CHANNEL__=O;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=O);const P={"./src/FatterVedtakApprovalModalSakIndex.stories.tsx":async()=>_(()=>import("./FatterVedtakApprovalModalSakIndex.stories-DilOGclM.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url),"./src/TotrinnskontrollSakIndex.stories.tsx":async()=>_(()=>import("./TotrinnskontrollSakIndex.stories-BzkwDB_w.js"),__vite__mapDeps([8,1,2,3,4,5,6,9]),import.meta.url)};async function I(t){return P[t]()}const{composeConfigs:y,PreviewWeb:V,ClientApi:v}=__STORYBOOK_MODULE_PREVIEW_API__,w=async(t=[])=>{const n=await Promise.all([t[0]??_(()=>import("./entry-preview-CqhKz-2I.js"),__vite__mapDeps([10,11,2,6]),import.meta.url),t[1]??_(()=>import("./entry-preview-docs-CL0gtcRG.js"),__vite__mapDeps([12,11,13,2]),import.meta.url),t[2]??_(()=>import("./preview-BhhEZcNS.js"),__vite__mapDeps([14,15]),import.meta.url),t[3]??_(()=>import("./preview-CyYGpfkq.js"),[],import.meta.url),t[4]??_(()=>import("./preview-D0N1Y6iQ.js"),__vite__mapDeps([16,4]),import.meta.url),t[5]??_(()=>import("./preview-D77C14du.js"),__vite__mapDeps([17,18]),import.meta.url),t[6]??_(()=>import("./preview-DFmD0pui.js"),[],import.meta.url),t[7]??_(()=>import("./preview-CFgKly6U.js"),[],import.meta.url),t[8]??_(()=>import("./preview-BWzBA1C2.js"),__vite__mapDeps([19,18]),import.meta.url),t[9]??_(()=>import("./preview-DGUiP6tS.js"),[],import.meta.url),t[10]??_(()=>import("./preview-BVOXnNc8.js"),__vite__mapDeps([20,1,2,5,21]),import.meta.url)]);return y(n)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new V(I,w);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{_};
