const __vite__fileDeps=["./DocsRenderer-K4EAMTCU-qbE5X-e9.js","./iframe--4qaTQ7l.js","./index-DVXBtNgz.js","./client-DWUO8fVt.js","./index-Cbx7Fas8.js","./tslib.es6-pJfR_DrR.js","./index-DXimoRZY.js","./_getPrototype-DX4bYm8U.js","./index-DrFu-skq.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as a}from"./iframe--4qaTQ7l.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),n={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-K4EAMTCU-qbE5X-e9.js").then(r=>r.D),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>_[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{n as parameters};
