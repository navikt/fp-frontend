const __vite__fileDeps=["./DocsRenderer-K4EAMTCU-D_yNdkax.js","./iframe-DZvAkTCc.js","./index-DVXBtNgz.js","./client-DWUO8fVt.js","./index-Cbx7Fas8.js","./_commonjs-dynamic-modules-TDtrdbi3.js","./tslib.es6-CMwweBXX.js","./index-DXimoRZY.js","./_getPrototype-DX4bYm8U.js","./index-DrFu-skq.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as a}from"./iframe-DZvAkTCc.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),n={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-K4EAMTCU-D_yNdkax.js").then(r=>r.D),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>_[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{n as parameters};
