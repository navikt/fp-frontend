const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DocsRenderer-CFRXHY34-AjBXO1Ua.js","./iframe-CwRQ8Aq_.js","./index-RYns6xqu.js","./jsx-runtime-DEdD30eg.js","./index-DAfSkmQi.js","./index-D-8MO0q_.js","./index-ar2LJKLv.js","./index-DrFu-skq.js","./client-BMs2U4dO.js"])))=>i.map(i=>d[i]);
import{_ as a}from"./iframe-CwRQ8Aq_.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),n={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-CFRXHY34-AjBXO1Ua.js").then(r=>r.ak),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>_[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{n as parameters};
