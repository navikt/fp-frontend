const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./axe-BDja2gqP.js","./_commonjsHelpers-Cpj98o6Y.js"])))=>i.map(i=>d[i]);
import{_ as v}from"./iframe-BYrkkrE5.js";import{expect as m}from"./index-D1pa-M5k.js";const{addons:w}=__STORYBOOK_MODULE_PREVIEW_API__,{global:x}=__STORYBOOK_MODULE_GLOBAL__;var l="storybook/a11y",L=`${l}/result`,S=`${l}/request`,A=`${l}/running`,V=`${l}/error`,D=`${l}/manual`,c={RESULT:L,REQUEST:S,RUNNING:A,ERROR:V,MANUAL:D},{document:E}=x,_=w.getChannel(),O={config:{},options:{}},I=["region"],p=[],R=!1,N=async()=>{if(p.length===0){R=!1;return}R=!0;let a=p.shift();a&&await a(),N()},g=async(a=O)=>{let{default:n}=await v(async()=>{const{default:t}=await import("./axe-BDja2gqP.js").then(s=>s.a);return{default:t}},__vite__mapDeps([0,1]),import.meta.url),{element:r="body",config:e={},options:o={}}=a,u=E.querySelector(r)??E.body;if(!u)return;n.reset();let d={...e,rules:[...I.map(t=>({id:t,enabled:!1})),...(e==null?void 0:e.rules)??[]]};return n.configure(d),new Promise((t,s)=>{let f=async()=>{try{let i=await n.run(u,o);t(i)}catch(i){s(i)}};p.push(f),R||N()})};_.on(c.MANUAL,async(a,n=O)=>{try{let r=await g(n),e=JSON.parse(JSON.stringify(r));_.emit(c.RESULT,e,a)}catch(r){_.emit(c.ERROR,r)}});function h(){try{return!1}catch{return!1}}var y=!1,b=async({reporting:a,parameters:n,globals:r})=>{let e=n.a11y,o=r.a11y,u=(e==null?void 0:e.manual)!==!0&&(e==null?void 0:e.disable)!==!0&&(e==null?void 0:e.test)!=="off"&&(o==null?void 0:o.manual)!==!0,d=()=>{switch(e==null?void 0:e.test){case"todo":return"warning";case"error":default:return"failed"}};if(u)try{let t=await g(e);if(t){let s=((t==null?void 0:t.violations.length)??0)>0;if(a.addReport({type:"a11y",version:1,result:t,status:s?d():"passed"}),h()&&s&&d()==="failed"){if(!y){let{toHaveNoViolations:f}=await v(async()=>{const{toHaveNoViolations:i}=await import("./matchers-57EZJSQE-oeXCqs4p.js");return{toHaveNoViolations:i}},[],import.meta.url);m.extend({toHaveNoViolations:f}),y=!0}m(t).toHaveNoViolations()}}}catch(t){if(a.addReport({type:"a11y",version:1,result:{error:t},status:"failed"}),h())throw t}},M={a11y:{manual:!1}},$={a11y:{test:"todo"}};export{b as experimental_afterEach,M as initialGlobals,$ as parameters};
