import{B as m,e as u}from"./withQueryClient-BhxeJHbr.js";import{r as p,R as l}from"./index-B5OHeJSP.js";var v=function(t,r){var a={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&r.indexOf(n)<0&&(a[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var e=0,n=Object.getOwnPropertySymbols(t);e<n.length;e++)r.indexOf(n[e])<0&&Object.prototype.propertyIsEnumerable.call(t,n[e])&&(a[n[e]]=t[n[e]]);return a};const O=p.forwardRef((t,r)=>{var{children:a,className:n,variant:e,size:d="medium",icon:o}=t,s=v(t,["children","className","variant","size","icon"]);const i=(e==null?void 0:e.endsWith("-filled"))&&"strong",c=(e==null?void 0:e.endsWith("-moderate"))&&"moderate",f=e==null?void 0:e.replace("-filled","").replace("-moderate","");return l.createElement(m,Object.assign({},s,{ref:r,as:"span",size:d==="medium"?"medium":"small",className:u("navds-tag",n,`navds-tag--${e}`,`navds-tag--${d}`,`navds-tag--${i||c||"outline"}`,`navds-tag--${f}`)}),o&&l.createElement("span",{className:"navds-tag__icon--left"},o),a)});export{O as T};
