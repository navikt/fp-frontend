const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DocsRenderer-PKQXORMH-BF9Oz35f.js","./iframe-0RUUStef.js","./index-uubelm5h.js","./client-C806kASE.js","./index-BdzLX9oW.js","./index-D-8MO0q_.js","./isArray-Bj2hUI6y.js","./index-DrFu-skq.js"])))=>i.map(i=>d[i]);
import{_ as a}from"./iframe-0RUUStef.js";import"../sb-preview/runtime.js";const{global:i}=__STORYBOOK_MODULE_GLOBAL__;var s=Object.entries(i.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),n={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-PKQXORMH-BF9Oz35f.js").then(r=>r.ai),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>s[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{n as parameters};
