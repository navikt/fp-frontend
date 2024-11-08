import{j as M}from"./jsx-runtime-CkxqCPlQ.js";import{r as P,R as Y,c as Vt,g as lg}from"./index-DJO9vBfz.js";import{a as Nr}from"./dayjs.min-Bhlr18jM.js";function ug(e){var i,t,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(i=0;i<s;i++)e[i]&&(t=ug(e[i]))&&(a&&(a+=" "),a+=t)}else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function Oe(){for(var e,i,t=0,a="",s=arguments.length;t<s;t++)(e=arguments[t])&&(i=ug(e))&&(a&&(a+=" "),a+=i);return a}const Tt=e=>Oe({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var ZA=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const dg=P.forwardRef((e,i)=>{var{className:t,size:a="medium",as:s="p",spacing:l,truncate:d,weight:g="regular",align:v,visuallyHidden:T,textColor:f}=e,h=ZA(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);return Y.createElement(s,Object.assign({},h,{ref:i,className:Oe(t,"navds-body-long",`navds-body-long--${a}`,Tt({spacing:l,truncate:d,weight:g,align:v,visuallyHidden:T,textColor:f}))}))});var XA=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Wt=P.forwardRef((e,i)=>{var{className:t,size:a="medium",as:s="p",spacing:l,truncate:d,weight:g="regular",align:v,visuallyHidden:T,textColor:f}=e,h=XA(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);return Y.createElement(s,Object.assign({},h,{ref:i,className:Oe(t,"navds-body-short",`navds-body-short--${a}`,Tt({spacing:l,truncate:d,weight:g,align:v,visuallyHidden:T,textColor:f}))}))});var QA=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};P.forwardRef((e,i)=>{var{className:t,size:a="medium",spacing:s,uppercase:l,as:d="p",truncate:g,weight:v="regular",align:T,visuallyHidden:f,textColor:h}=e,y=QA(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);return Y.createElement(d,Object.assign({},y,{ref:i,className:Oe(t,"navds-detail",Tt({spacing:s,truncate:g,weight:v,align:T,visuallyHidden:f,textColor:h,uppercase:l}),{"navds-detail--small":a==="small"})}))});var ey=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const ny=P.forwardRef((e,i)=>{var{className:t,size:a,spacing:s,as:l="p"}=e,d=ey(e,["className","size","spacing","as"]);return Y.createElement(l,Object.assign({},d,{ref:i,className:Oe("navds-error-message","navds-label",t,Tt({spacing:s}),{"navds-label--small":a==="small"})}))});var ry=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const gg=P.forwardRef((e,i)=>{var{level:t="1",size:a,className:s,as:l,spacing:d,align:g,visuallyHidden:v,textColor:T}=e,f=ry(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const h=l??`h${t}`;return Y.createElement(h,Object.assign({},f,{ref:i,className:Oe(s,"navds-heading",`navds-heading--${a}`,Tt({spacing:d,align:g,visuallyHidden:v,textColor:T}))}))});var ty=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};P.forwardRef((e,i)=>{var{className:t,spacing:a,as:s="p"}=e,l=ty(e,["className","spacing","as"]);return Y.createElement(s,Object.assign({},l,{ref:i,className:Oe(t,"navds-ingress",{"navds-typo--spacing":!!a})}))});var ay=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const To=P.forwardRef((e,i)=>{var{className:t,size:a="medium",as:s="label",spacing:l,visuallyHidden:d,textColor:g}=e,v=ay(e,["className","size","as","spacing","visuallyHidden","textColor"]);return Y.createElement(s,Object.assign({},v,{ref:i,className:Oe(t,"navds-label",Tt({spacing:l,visuallyHidden:d,textColor:g}),{"navds-label--small":a==="small"})}))});function zt(e,i){const t=Object.entries(e).filter(([a])=>!i.includes(a));return Object.fromEntries(t)}const iy=globalThis!=null&&globalThis.document?P.useLayoutEffect:()=>{};let ud=0;function sy(e){const[i,t]=P.useState(e),a=e||i;return P.useEffect(()=>{i==null&&(ud+=1,t(`aksel-id-${ud}`))},[i]),a}const dd=Y.useId;function po(e){var i;return dd!==void 0?dd().replace(/(:)/g,""):(i=sy(e))!==null&&i!==void 0?i:""}function gd(e,i=[]){const t=P.useRef(e);return P.useEffect(()=>{t.current=e}),P.useCallback((...a)=>{var s;return(s=t.current)===null||s===void 0?void 0:s.call(t,...a)},i)}function oy({value:e,defaultValue:i,onChange:t}){const a=gd(t),[s,l]=P.useState(i),d=e!==void 0,g=d?e:s,v=gd(T=>{const h=typeof T=="function"?T(g):T;d||l(h),a(h)},[d,a,g]);return[g,v]}let kd=0;function ly(e){const[i,t]=P.useState(e),a=e||i;return P.useEffect(()=>{i==null&&(kd+=1,t(`aksel-icon-${kd}`))},[i]),a}const vd=Y.useId;function fr(e){var i;return vd!==void 0?vd().replace(/(:)/g,""):(i=ly(e))!==null&&i!==void 0?i:""}var uy=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const dy=P.forwardRef((e,i)=>{var{title:t,titleId:a}=e,s=uy(e,["title","titleId"]);let l=fr();return l=t?a||"title-"+l:void 0,P.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),t?P.createElement("title",{id:l},t):null,P.createElement("path",{fill:"currentColor",d:"M12.75 5a.75.75 0 0 0-1.5 0v12.19l-3.22-3.22a.75.75 0 0 0-1.06 1.06l4.5 4.5a.75.75 0 0 0 1.06 0l4.5-4.5a.75.75 0 1 0-1.06-1.06l-3.22 3.22z"}))});var gy=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const ky=P.forwardRef((e,i)=>{var{title:t,titleId:a}=e,s=gy(e,["title","titleId"]);let l=fr();return l=t?a||"title-"+l:void 0,P.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),t?P.createElement("title",{id:l},t):null,P.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13.672 3.825a.75.75 0 0 1 .791.085l7 5.5a.75.75 0 0 1 0 1.18l-7 5.5a.75.75 0 0 1-1.213-.59v-2.724a9.1 9.1 0 0 0-2.63.565c-2.284.87-3.759 2.562-4.671 4.077a12.4 12.4 0 0 0-.957 1.965 10 10 0 0 0-.263.792l-.001.007A.75.75 0 0 1 3.25 20c0-1.654.322-3.941 1.224-6.123.903-2.184 2.413-4.32 4.823-5.558 1.133-.581 2.445-.954 3.953-1.046V4.5a.75.75 0 0 1 .422-.675M5.505 15.412c1.038-1.344 2.519-2.688 4.582-3.473 1.136-.432 2.435-.689 3.913-.689a.75.75 0 0 1 .75.75v1.957L19.786 10 14.75 6.043V8a.75.75 0 0 1-.75.75c-1.606 0-2.927.344-4.018.904-1.996 1.025-3.306 2.824-4.121 4.796q-.197.479-.356.962",clipRule:"evenodd"}))});var vy=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Ey=P.forwardRef((e,i)=>{var{title:t,titleId:a}=e,s=vy(e,["title","titleId"]);let l=fr();return l=t?a||"title-"+l:void 0,P.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),t?P.createElement("title",{id:l},t):null,P.createElement("path",{fill:"currentColor",d:"M12.53 4.47a.75.75 0 0 0-1.06 0l-4.5 4.5a.75.75 0 0 0 1.06 1.06l3.22-3.22V19a.75.75 0 0 0 1.5 0V6.81l3.22 3.22a.75.75 0 1 0 1.06-1.06z"}))});var fy=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const my=P.forwardRef((e,i)=>{var{title:t,titleId:a}=e,s=fy(e,["title","titleId"]);let l=fr();return l=t?a||"title-"+l:void 0,P.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),t?P.createElement("title",{id:l},t):null,P.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.47 21.03a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22V9.5a.75.75 0 0 0-1.5 0v9.19l-2.22-2.22a.75.75 0 1 0-1.06 1.06zM4.03 7.53l2.22-2.22v9.19a.75.75 0 0 0 1.5 0V5.31l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06",clipRule:"evenodd"}))});var Ty=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const py=P.forwardRef((e,i)=>{var{title:t,titleId:a}=e,s=Ty(e,["title","titleId"]);let l=fr();return l=t?a||"title-"+l:void 0,P.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),t?P.createElement("title",{id:l},t):null,P.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var hy=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Os=P.forwardRef((e,i)=>{var{title:t,titleId:a}=e,s=hy(e,["title","titleId"]);let l=fr();return l=t?a||"title-"+l:void 0,P.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),t?P.createElement("title",{id:l},t):null,P.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.5 12C1.5 6.201 6.201 1.5 12 1.5S22.5 6.201 22.5 12 17.799 22.5 12 22.5 1.5 17.799 1.5 12",clipRule:"evenodd"}))});var Ay=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const yy=P.forwardRef((e,i)=>{var{title:t,titleId:a}=e,s=Ay(e,["title","titleId"]);let l=fr();return l=t?a||"title-"+l:void 0,P.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),t?P.createElement("title",{id:l},t):null,P.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.1 2.05a.75.75 0 1 0-1.2.9l.98 1.306a.25.25 0 0 1-.024.327l-.773.773a1.75 1.75 0 0 0-.163 2.288l.98 1.306a.75.75 0 0 0 1.2-.9l-.98-1.306a.25.25 0 0 1 .024-.327l.773-.773a1.75 1.75 0 0 0 .163-2.288zm1.75 5.007a.75.75 0 0 1 .83-.66c1.33.152 2.506.417 3.372.776.431.178.826.396 1.125.666.298.269.573.659.573 1.161q0 .404-.032.8.224-.065.446-.092c.556-.069 1.177.037 1.634.494.553.552.592 1.332.43 1.98-.166.665-.57 1.341-1.137 1.91-.568.567-1.244.97-1.909 1.136q-.241.06-.497.078.401.165.733.358c.657.38 1.332.977 1.332 1.836 0 .695-.45 1.219-.933 1.576-.498.369-1.172.669-1.936.907-1.539.481-3.618.767-5.881.767s-4.342-.286-5.88-.767c-.765-.238-1.439-.538-1.937-.907-.484-.357-.933-.881-.933-1.576 0-.859.675-1.457 1.332-1.836.476-.276 1.068-.512 1.739-.709C5.028 13.38 4.25 11.272 4.25 9c0-.467.238-.838.51-1.102.269-.262.624-.474 1.007-.647.771-.35 1.817-.614 3.004-.784a.75.75 0 0 1 .211 1.485c-1.112.159-2.004.397-2.596.665-.299.135-.482.26-.58.356L5.779 9c.06.066.194.178.462.314.333.168.795.332 1.374.474 1.155.284 2.688.462 4.385.462s3.23-.178 4.385-.462c.579-.142 1.04-.306 1.374-.474.268-.136.402-.248.462-.314l-.049-.048c-.123-.11-.345-.25-.693-.393-.69-.286-1.716-.529-2.969-.672a.75.75 0 0 1-.66-.83m4.623 6.754a9.3 9.3 0 0 0 .925-2.204c.355-.251.693-.379.95-.41.26-.033.36.036.39.066.033.033.129.18.035.555-.09.36-.334.804-.742 1.212-.409.409-.854.653-1.213.743a1.1 1.1 0 0 1-.345.038m-.422-2.983c-.387.16-.829.299-1.308.417-1.296.319-2.953.505-4.743.505s-3.447-.186-4.743-.505a9 9 0 0 1-1.308-.417c.707 3.173 3.21 5.422 6.051 5.422 2.84 0 5.344-2.25 6.051-5.422M12 17.75c1.665 0 3.186-.582 4.43-1.565.976.214 1.736.487 2.237.777.565.326.583.538.583.538 0 .003 0 .031-.04.093-.044.068-.13.163-.284.277-.311.23-.81.468-1.493.682-1.357.424-3.278.698-5.433.698s-4.076-.274-5.433-.698c-.683-.214-1.181-.452-1.493-.682a1.2 1.2 0 0 1-.284-.277c-.04-.062-.04-.09-.04-.093 0 0 .018-.212.583-.538.501-.29 1.262-.563 2.236-.777 1.245.983 2.766 1.565 4.431 1.565",clipRule:"evenodd"}))});var cy=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const kg=P.forwardRef((e,i)=>{var{title:t,titleId:a}=e,s=cy(e,["title","titleId"]);let l=fr();return l=t?a||"title-"+l:void 0,P.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),t?P.createElement("title",{id:l},t):null,P.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10.5 3.25a7.25 7.25 0 1 0 4.569 12.88l5.411 5.41a.75.75 0 1 0 1.06-1.06l-5.41-5.411A7.25 7.25 0 0 0 10.5 3.25M4.75 10.5a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0",clipRule:"evenodd"}))});var Ry=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const _y=P.forwardRef((e,i)=>{var{title:t,titleId:a}=e,s=Ry(e,["title","titleId"]);let l=fr();return l=t?a||"title-"+l:void 0,P.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),t?P.createElement("title",{id:l},t):null,P.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});function ho(e,i,{checkForDefaultPrevented:t=!0}={}){return function(s){if(e==null||e(s),t===!1||!s.defaultPrevented)return i==null?void 0:i(s)}}function vg(e){return i=>{e.forEach(t=>{typeof t=="function"?t(i):t!=null&&(t.current=i)})}}function Eg(...e){return Y.useCallback(vg(e),e)}function by(e,i){const t=Object.assign({},i);for(const a in i){const s=e[a],l=i[a];/^on[A-Z]/.test(a)?s&&l?t[a]=(...g)=>{l(...g),s(...g)}:s&&(t[a]=s):a==="style"?t[a]=Object.assign(Object.assign({},s),l):a==="className"&&(t[a]=[s,l].filter(Boolean).join(" "))}return Object.assign(Object.assign({},e),t)}var Ny=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Qa=P.forwardRef((e,i)=>{var t;const{children:a}=e,s=Ny(e,["children"]);if(P.isValidElement(a)){const l=Object.prototype.propertyIsEnumerable.call(a.props,"ref")?a.props.ref:a.ref;return P.cloneElement(a,Object.assign(Object.assign({},by(s,a.props)),{ref:i?vg([i,l]):l}))}if(P.Children.count(a)>1){const l=new Error("Aksel: Components using 'asChild' expects to recieve a single React element child.");throw l.name="SlotError",(t=Error.captureStackTrace)===null||t===void 0||t.call(Error,l,Qa),l}return null}),Sy={global:{showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},Loader:{title:"Venter…"},Modal:{close:"Lukk"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"}},Iy=P.createContext({translations:Sy}),Ed=/(\w+)/g;function Oy(e,...i){const t=Array.isArray(e)?e:Ly(e);for(const a of i){if(!a)continue;let s=a;for(let l=0;l<t.length;l++){const d=s[t[l]];d!==void 0&&(s=d)}if(typeof s=="string")return s}throw new Error("Error translating key. The keypath does not resolve to a string.")}function Ly(e){const i=[];let t=Ed.exec(e);for(;t;){const[,a,s]=t;i.push(a||s),t=Ed.exec(e)}return i}const Ky=/{[^}]*}/g;function ei(e,...i){const a=P.useContext(Iy).translations;return(l,d)=>{const g=Oy(l,...i,...Array.isArray(a)?a.map(v=>v[e]):[a[e]]);return d?g.replace(Ky,v=>{const T=v.substring(1,v.length-1);if(d[T]===void 0){const f=JSON.stringify(d);throw new Error(`Error translating key '${l}'. No replacement syntax ({}) found for key '${T}'. The following replacements were passed: '${f}'`)}return d[T]}):g}}var Dy=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Py=P.forwardRef((e,i)=>{var{className:t,size:a="medium",title:s,transparent:l=!1,variant:d="neutral",id:g}=e,v=Dy(e,["className","size","title","transparent","variant","id"]);const T=po(),f=ei("Loader");return Y.createElement("svg",Object.assign({"aria-labelledby":g??`loader-${T}`,ref:i,className:Oe("navds-loader",t,`navds-loader--${a}`,`navds-loader--${d}`,{"navds-loader--transparent":l}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid"},zt(v,["children"])),Y.createElement("title",{id:g??`loader-${T}`},s||f("title")),Y.createElement("circle",{className:"navds-loader__background",xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),Y.createElement("circle",{className:"navds-loader__foreground",cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});var Fy=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const fg=P.forwardRef((e,i)=>{var{as:t="button",variant:a="primary",className:s,children:l,size:d="medium",loading:g=!1,disabled:v,style:T,icon:f,iconPosition:h="left"}=e,y=Fy(e,["as","variant","className","children","size","loading","disabled","style","icon","iconPosition"]);const K=P.useRef(null),[j,R]=P.useState(),N=Eg(K,i);iy(()=>{if(g){const L=window.requestAnimationFrame(()=>{var Q,O;R((O=(Q=K==null?void 0:K.current)===null||Q===void 0?void 0:Q.getBoundingClientRect())===null||O===void 0?void 0:O.width)});return()=>{R(void 0),cancelAnimationFrame(L)}}},[g,l]);const D=v??j?zt(y,["href"]):y,q=L=>{L.key===" "&&!v&&!j&&L.currentTarget.click()};return Y.createElement(t,Object.assign({},t!=="button"?{role:"button"}:{},D,{ref:N,onKeyUp:ho(D.onKeyUp,q),className:Oe(s,"navds-button",`navds-button--${a}`,`navds-button--${d}`,{"navds-button--loading":j,"navds-button--icon-only":!!f&&!l,"navds-button--disabled":v??j}),style:Object.assign(Object.assign({},T),{width:j}),disabled:v??j?!0:void 0}),j?Y.createElement(Py,{size:d}):Y.createElement(Y.Fragment,null,f&&h==="left"&&Y.createElement("span",{className:"navds-button__icon"},f),l&&Y.createElement(To,{as:"span",size:d==="medium"?"medium":"small"},l),f&&h==="right"&&Y.createElement("span",{className:"navds-button__icon"},f)))}),My=P.createContext(null),jy=(e,i)=>{var t,a,s;const{size:l,error:d,errorId:g}=e,v=P.useContext(My),T=po(),f=(t=e.id)!==null&&t!==void 0?t:`${i}-${T}`,h=g??`${i}-error-${T}`,y=`${i}-description-${T}`,K=(v==null?void 0:v.disabled)||e.disabled,j=((v==null?void 0:v.readOnly)||e.readOnly)&&!K||void 0,R=!K&&!j&&!!(d||v!=null&&v.error),N=!K&&!j&&!!d&&typeof d!="boolean",D=Object.assign({},R?{"aria-invalid":!0}:{});return e!=null&&e.required,{showErrorMsg:N,hasError:R,errorId:h,inputDescriptionId:y,size:(a=l??(v==null?void 0:v.size))!==null&&a!==void 0?a:"medium",readOnly:j,inputProps:Object.assign(Object.assign({id:f},D),{"aria-describedby":Oe(e["aria-describedby"],{[y]:!!(e!=null&&e.description)&&typeof(e==null?void 0:e.description)=="string",[h]:N,[(s=v==null?void 0:v.errorId)!==null&&s!==void 0?s:""]:R&&!!(v!=null&&v.error)})||void 0,disabled:K})}};function Qe(e,i,t){return t?typeof t=="string"?{[`--__ac-${e}-${i}-xs`]:t}:Object.fromEntries(Object.entries(t).map(([a,s])=>[`--__ac-${e}-${i}-${a}`,s])):{}}const Gy=e=>{switch(e){case"px":return"1px"}return e},fd=(e,i,t,a,s)=>i.split(" ").map((l,d,g)=>{if(e==="margin-inline"&&l==="full")return`calc((100vw - ${100/g.length}%)/-2)`;if(e==="padding-inline"&&l==="full")return`calc((100vw - ${100/g.length}%)/2)`;if(["mi","mb"].includes(e)&&l==="auto")return"auto";let v=`var(--a-${t}-${l})`;return a.includes(l)&&(v=Gy(l)),s?l==="0"?"0":`calc(-1 * ${v})`:v}).join(" ");function Kn(e,i,t,a,s=!1,l=[]){if(!a)return{};if(typeof a=="string")return{[`--__ac-${e}-${i}-xs`]:fd(i,a,t,l,s)};const d={};return Object.entries(a).forEach(([g,v])=>{d[`--__ac-${e}-${i}-${g}`]=fd(i,v,t,l,s)}),d}const mg=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],Tg=({children:e,className:i,padding:t,paddingInline:a,paddingBlock:s,margin:l,marginInline:d,marginBlock:g,width:v,minWidth:T,maxWidth:f,height:h,minHeight:y,maxHeight:K,position:j,inset:R,top:N,right:D,left:q,bottom:L,overflow:Q,overflowX:O,overflowY:w,flexBasis:I,flexGrow:b,flexShrink:$,gridColumn:W})=>{const x=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},Kn("r","p","spacing",t)),Kn("r","pi","spacing",a)),Kn("r","pb","spacing",s)),Kn("r","m","spacing",l)),Kn("r","mi","spacing",d)),Kn("r","mb","spacing",g)),Qe("r","w",v)),Qe("r","minw",T)),Qe("r","maxw",f)),Qe("r","h",h)),Qe("r","minh",y)),Qe("r","maxh",K)),Qe("r","position",j)),Kn("r","inset","spacing",R)),Kn("r","top","spacing",N)),Kn("r","right","spacing",D)),Kn("r","bottom","spacing",L)),Kn("r","left","spacing",q)),Qe("r","overflow",Q)),Qe("r","overflowx",O)),Qe("r","overflowy",w)),Qe("r","flex-basis",I)),Qe("r","flex-grow",b)),Qe("r","flex-shrink",$)),Qe("r","grid-column",W));return Y.createElement(Qa,{className:Oe({className:i,"navds-r-p":t,"navds-r-pi":a,"navds-r-pb":s,"navds-r-m":l,"navds-r-mi":d,"navds-r-mb":g,"navds-r-w":v,"navds-r-minw":T,"navds-r-maxw":f,"navds-r-h":h,"navds-r-minh":y,"navds-r-maxh":K,"navds-r-position":j,"navds-r-inset":R,"navds-r-top":N,"navds-r-right":D,"navds-r-bottom":L,"navds-r-left":q,"navds-r-overflow":Q,"navds-r-overflowx":O,"navds-r-overflowy":w,"navds-r-flex-basis":I,"navds-r-flex-grow":b,"navds-r-flex-shrink":$,"navds-r-grid-column":W}),style:x},e)};var By=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Vy=P.forwardRef((e,i)=>{var{children:t,className:a,as:s="div",columns:l,gap:d,style:g,align:v,asChild:T}=e,f=By(e,["children","className","as","columns","gap","style","align","asChild"]);const h=Object.assign(Object.assign(Object.assign(Object.assign({},g),{"--__ac-hgrid-align":v}),Kn("hgrid","gap","spacing",d)),Qe("hgrid","columns",wy(l))),y=T?Qa:s;return Y.createElement(Tg,Object.assign({},f),Y.createElement(y,Object.assign({},zt(f,mg),{ref:i,className:Oe("navds-hgrid",a,{"navds-hgrid-gap":d,"navds-hgrid-align":v}),style:h}),t))});function wy(e){return e?typeof e=="string"||typeof e=="number"?md(e):Object.fromEntries(Object.entries(e).map(([i,t])=>[i,md(t)])):{}}const md=e=>typeof e=="number"?`repeat(${e}, minmax(0, 1fr))`:e;var Hy=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const pg=P.forwardRef((e,i)=>{var{children:t,className:a,as:s="div",align:l,justify:d,wrap:g=!0,gap:v,style:T,direction:f="row",asChild:h}=e,y=Hy(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const K=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},T),Kn("stack","gap","spacing",v)),Qe("stack","direction",f)),Qe("stack","align",l)),Qe("stack","justify",d)),j=h?Qa:s;return Y.createElement(Tg,Object.assign({},y),Y.createElement(j,Object.assign({},zt(y,mg),{ref:i,style:K,className:Oe("navds-stack",a,{"navds-vstack":f==="column","navds-hstack":f==="row","navds-stack-gap":v,"navds-stack-align":l,"navds-stack-justify":d,"navds-stack-direction":f,"navds-stack-wrap":g})}),t))});var Uy=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const dt=P.forwardRef((e,i)=>{var{as:t="div"}=e,a=Uy(e,["as"]);return Y.createElement(pg,Object.assign({as:t},a,{ref:i,direction:"row"}))});var qy=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const kt=P.forwardRef((e,i)=>{var{as:t="div"}=e,a=qy(e,["as"]);return Y.createElement(pg,Object.assign({as:t},a,{ref:i,direction:"column",wrap:!1}))}),qs=P.createContext({listType:"ul",size:"medium"});var xy=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const hg=P.forwardRef((e,i)=>{var{className:t,children:a,title:s,icon:l}=e,d=xy(e,["className","children","title","icon"]);const{listType:g,size:v}=P.useContext(qs);return g==="ol"&&l&&console.warn("<List />: Icon prop is not supported for ordered lists. Please remove the icon prop."),Y.createElement("li",Object.assign({},d,{ref:i,className:Oe("navds-list__item",t)}),g==="ul"&&Y.createElement("div",{className:Oe("navds-list__item-marker",{"navds-list__item-marker--icon":l,"navds-list__item-marker--bullet":!l})},l||Y.createElement("svg",{width:"0.375rem",height:"0.375rem",viewBox:"0 0 6 6",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,focusable:!1,role:"img"},Y.createElement("rect",{width:"6",height:"6",rx:"3",fill:"currentColor"}))),Y.createElement("div",null,s&&Y.createElement(dg,{as:"p",size:v,weight:"semibold"},s),a))});hg.displayName="List.Item";var Yy=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Cy={small:"xsmall",medium:"small",large:"medium"},xs=P.forwardRef((e,i)=>{var{children:t,className:a,as:s="ul",title:l,description:d,headingTag:g="h3",size:v}=e,T=Yy(e,["children","className","as","title","description","headingTag","size"]);const{size:f}=P.useContext(qs),h=v??f;return Y.createElement(qs.Provider,{value:{listType:s,size:h}},Y.createElement(dg,Object.assign({as:"div"},T,{size:h,ref:i,className:Oe("navds-list",`navds-list--${h}`,a)}),l&&Y.createElement(gg,{size:Cy[h],as:g},l),d&&Y.createElement(Wt,{size:h},d),Y.createElement(s,{role:"list"},t)))});xs.Item=hg;var $y=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Jy=P.forwardRef((e,i)=>{var{className:t}=e,a=$y(e,["className"]);return Y.createElement("tbody",Object.assign({},a,{ref:i,className:Oe("navds-table__body",t)}))});var Wy=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Ag=P.forwardRef((e,i)=>{var{className:t,children:a,align:s,textSize:l}=e,d=Wy(e,["className","children","align","textSize"]);return Y.createElement("th",Object.assign({ref:i,className:Oe("navds-table__header-cell","navds-label",t,{[`navds-table__header-cell--align-${s}`]:s,"navds-label--small":l==="small"})},d),a)}),yg=P.createContext(null);var zy=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Zy=P.forwardRef((e,i)=>{var t,a,s,l,{className:d,children:g,sortable:v=!1,sortKey:T}=e,f=zy(e,["className","children","sortable","sortKey"]);const h=P.useContext(yg);return v&&!T&&console.warn("ColumnHeader with `sortable=true` must have a sortKey."),Y.createElement(Ag,Object.assign({scope:"col",ref:i,className:d,"aria-sort":v?((t=h==null?void 0:h.sort)===null||t===void 0?void 0:t.orderBy)===T?(a=h==null?void 0:h.sort)===null||a===void 0?void 0:a.direction:"none":void 0},f),v?Y.createElement("button",{type:"button",className:"navds-table__sort-button",onClick:v&&T?()=>{var y;return(y=h==null?void 0:h.onSortChange)===null||y===void 0?void 0:y.call(h,T)}:void 0},g,((s=h==null?void 0:h.sort)===null||s===void 0?void 0:s.orderBy)===T?((l=h==null?void 0:h.sort)===null||l===void 0?void 0:l.direction)==="descending"?Y.createElement(dy,{"aria-hidden":!0}):Y.createElement(Ey,{"aria-hidden":!0}):Y.createElement(my,{"aria-hidden":!0})):g)});var Xy=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const cg=P.forwardRef((e,i)=>{var{className:t,children:a="",align:s,textSize:l}=e,d=Xy(e,["className","children","align","textSize"]);return Y.createElement(Wt,Object.assign({as:"td",ref:i,className:Oe("navds-table__data-cell",t,{[`navds-table__data-cell--align-${s}`]:s}),size:l},d),a)});var Qy=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const ec=globalThis!=null&&globalThis.matchMedia?globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches:!1;function nc(e){const i=parseFloat(e);return!Number.isNaN(i)&&Number.isFinite(i)}function Td(e){return typeof e=="string"&&e[e.length-1]==="%"&&nc(e.substring(0,e.length-1))}function Ls(e,i){i===0&&(e!=null&&e.style)&&(e.style.display="none")}function rc(e,i){i===0&&(e!=null&&e.style)&&(e.style.display="")}const tc=e=>{var{children:i,className:t,innerClassName:a,duration:s=250,easing:l="ease",height:d}=e,g=Qy(e,["children","className","innerClassName","duration","easing","height"]);const v=P.useRef(d),T=P.useRef(null),f=P.useRef(),h=P.useRef(),y=P.useRef(d),K=P.useRef("visible"),j=ec?0:s;typeof y.current=="number"?(typeof d!="string"&&(y.current=d<0?0:d),K.current="hidden"):Td(y.current)&&(y.current=d==="0%"?0:d,K.current="hidden");const[R,N]=P.useState(y.current),[D,q]=P.useState(K.current),[L,Q]=P.useState(!1);P.useEffect(()=>{Ls(T.current,y.current)},[]),P.useEffect(()=>{if(d!==v.current&&T.current){rc(T.current,v.current),T.current.style.overflow="hidden";const b=T.current.offsetHeight;T.current.style.overflow="";const $=j;let W,x,te="hidden",le;const J=v.current==="auto";typeof d=="number"?(W=d<0?0:d,x=W):Td(d)?(W=d==="0%"?0:d,x=W):(W=b,x="auto",te=void 0),J&&(x=W,W=b),N(W),q("hidden"),Q(!J),clearTimeout(h.current),clearTimeout(f.current),J?(le=!0,h.current=setTimeout(()=>{N(x),q(te),Q(le)},50),f.current=setTimeout(()=>{Q(!1),Ls(T.current,x)},$)):h.current=setTimeout(()=>{N(x),q(te),Q(!1),d!=="auto"&&Ls(T.current,W)},$)}return v.current=d,()=>{clearTimeout(h.current),clearTimeout(f.current)}},[d]);const O={height:R,overflow:D};L&&(O.transition=`height ${j}ms ${l} 0ms`,O.WebkitTransition=O.transition);const I=typeof g["aria-hidden"]<"u"?g["aria-hidden"]:d===0;return Y.createElement("div",Object.assign({},g,{className:t,style:O}),Y.createElement("div",{"aria-hidden":I,className:a,ref:T},i))};var ac=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Rg=P.forwardRef((e,i)=>{var{className:t,selected:a=!1,shadeOnHover:s=!0}=e,l=ac(e,["className","selected","shadeOnHover"]);return Y.createElement("tr",Object.assign({},l,{ref:i,className:Oe("navds-table__row",t,{"navds-table__row--selected":a,"navds-table__row--shade-on-hover":s})}))});var ic=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const sc=P.forwardRef((e,i)=>{var{className:t,children:a,content:s,togglePlacement:l="left",defaultOpen:d=!1,open:g,onOpenChange:v,expansionDisabled:T=!1,expandOnRowClick:f=!1,colSpan:h=999,onClick:y}=e,K=ic(e,["className","children","content","togglePlacement","defaultOpen","open","onOpenChange","expansionDisabled","expandOnRowClick","colSpan","onClick"]);const[j,R]=oy({defaultValue:d,value:g,onChange:v}),N=ei("global"),D=po(),q=Q=>{R(O=>!O),Q.stopPropagation()},L=Q=>{f&&!T&&!_g(Q.target)&&q(Q)};return Y.createElement(Y.Fragment,null,Y.createElement(Rg,Object.assign({},K,{ref:i,className:Oe("navds-table__expandable-row",t,{"navds-table__expandable-row--open":j,"navds-table__expandable-row--expansion-disabled":T,"navds-table__expandable-row--clickable":f}),onClick:ho(y,L)}),l==="right"&&a,Y.createElement(cg,{className:Oe("navds-table__toggle-expand-cell",{"navds-table__toggle-expand-cell--open":j}),onClick:q},!T&&Y.createElement("button",{className:"navds-table__toggle-expand-button",type:"button","aria-controls":D,"aria-expanded":j,onClick:q},Y.createElement(py,{className:"navds-table__expandable-icon",title:N(j?"showLess":"showMore")}))),l==="left"&&a),Y.createElement("tr",{className:"navds-table__expanded-row","aria-hidden":!j,id:D},Y.createElement("td",{colSpan:h,className:"navds-table__expanded-row-cell"},Y.createElement(tc,{className:"navds-table__expanded-row-collapse",innerClassName:"navds-table__expanded-row-content",height:j?"auto":0,duration:250},s))))});function _g(e){return e.nodeName==="TD"||e.nodeName==="TH"||!e.parentElement?!1:["BUTTON","DETAILS","LABEL","SELECT","TEXTAREA","INPUT","A"].includes(e.nodeName)?!0:_g(e.parentElement)}var oc=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const lc=P.forwardRef((e,i)=>{var{className:t}=e,a=oc(e,["className"]);return Y.createElement("thead",Object.assign({},a,{ref:i,className:Oe("navds-table__header",t)}))});var uc=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const He=P.forwardRef((e,i)=>{var{className:t,zebraStripes:a=!1,size:s="medium",onSortChange:l,sort:d}=e,g=uc(e,["className","zebraStripes","size","onSortChange","sort"]);return Y.createElement(yg.Provider,{value:{onSortChange:l,sort:d}},Y.createElement("table",Object.assign({},g,{ref:i,className:Oe("navds-table",`navds-table--${s}`,t,{"navds-table--zebra-stripes":a})})))});He.Header=lc;He.Body=Jy;He.Row=Rg;He.ColumnHeader=Zy;He.HeaderCell=Ag;He.DataCell=cg;He.ExpandableRow=sc;const bg=P.createContext(null);var dc=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Ng=P.forwardRef((e,i)=>{var t,{className:a,children:s,disabled:l,onClick:d}=e,g=dc(e,["className","children","disabled","onClick"]);const v=ei("Search"),T=P.useContext(bg);if(T===null)return console.warn("<Search.Button> has to be wrapped in <Search />"),null;const{size:f,variant:h,handleClick:y}=T;return Y.createElement(fg,Object.assign({type:"submit"},g,{ref:i,size:f,variant:h==="secondary"?"secondary":"primary",className:Oe("navds-search__button-search",a),disabled:(t=T==null?void 0:T.disabled)!==null&&t!==void 0?t:l,onClick:ho(d,y),icon:Y.createElement(kg,Object.assign({},s?{"aria-hidden":!0}:{title:v("search")}))}),s)});var gc=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Ys=P.forwardRef((e,i)=>{const{inputProps:t,size:a="medium",inputDescriptionId:s,errorId:l,showErrorMsg:d,hasError:g}=jy(e,"searchfield"),{className:v,hideLabel:T=!0,label:f,description:h,value:y,clearButtonLabel:K,onClear:j,clearButton:R=!0,children:N,variant:D="primary",defaultValue:q,onChange:L,onSearchClick:Q,htmlSize:O}=e,w=gc(e,["className","hideLabel","label","description","value","clearButtonLabel","onClear","clearButton","children","variant","defaultValue","onChange","onSearchClick","htmlSize"]),I=P.useRef(null),b=Eg(I,i),$=ei("Search"),[W,x]=P.useState(q??""),te=H=>{y===void 0&&x(H),L==null||L(H)},le=H=>{var U,Z;j==null||j(H),te(""),(Z=(U=I.current)===null||U===void 0?void 0:U.focus)===null||Z===void 0||Z.call(U)},J=()=>{Q==null||Q(`${y??W}`)};return Y.createElement("div",{onKeyDown:H=>{var U;H.key==="Escape"&&(!((U=I.current)===null||U===void 0)&&U.value&&H.preventDefault(),le({trigger:"Escape",event:H}))},className:Oe(v,"navds-form-field",`navds-form-field--${a}`,"navds-search",{"navds-search--error":g,"navds-search--disabled":t.disabled,"navds-search--with-size":O})},Y.createElement(To,{htmlFor:t.id,size:a,className:Oe("navds-form-field__label",{"navds-sr-only":T})},f),!!h&&Y.createElement(Wt,{className:Oe("navds-form-field__description",{"navds-sr-only":T}),id:s,size:a,as:"div"},h),Y.createElement("div",{className:"navds-search__wrapper"},Y.createElement("div",{className:"navds-search__wrapper-inner"},D==="simple"&&Y.createElement(kg,{"aria-hidden":!0,className:"navds-search__search-icon"}),Y.createElement("input",Object.assign({ref:b},zt(w,["error","errorId","size","readOnly"]),t,{value:y??W,onChange:H=>te(H.target.value),type:"search",className:Oe(v,"navds-search__input",`navds-search__input--${D}`,"navds-text-field__input","navds-body-short",`navds-body-short--${a}`)},O?{size:Number(O)}:{})),(y??W)&&R&&Y.createElement("button",{type:"button",onClick:H=>le({trigger:"Click",event:H}),className:"navds-search__button-clear"},Y.createElement("span",{className:"navds-sr-only"},K||$("clear")),Y.createElement(_y,{"aria-hidden":!0}))),Y.createElement(bg.Provider,{value:{size:a,disabled:t.disabled,variant:D,handleClick:J}},N||D!=="simple"&&Y.createElement(Ng,null))),Y.createElement("div",{className:"navds-form-field__error",id:l,"aria-relevant":"additions removals","aria-live":"polite"},d&&Y.createElement(ny,{size:a},e.error)))});Ys.Button=Ng;var Cs=function(e,i){return Cs=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s])},Cs(e,i)};function zn(e,i){if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");Cs(e,i);function t(){this.constructor=e}e.prototype=i===null?Object.create(i):(t.prototype=i.prototype,new t)}var ee=function(){return ee=Object.assign||function(i){for(var t,a=1,s=arguments.length;a<s;a++){t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(i[l]=t[l])}return i},ee.apply(this,arguments)};function vt(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t}function tr(e,i,t){if(t||arguments.length===2)for(var a=0,s=i.length,l;a<s;a++)(l||!(a in i))&&(l||(l=Array.prototype.slice.call(i,0,a)),l[a]=i[a]);return e.concat(l||Array.prototype.slice.call(i))}function kc(e,i,t){if(t===void 0&&(t=Error),!e)throw new t(i)}var ye;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(ye||(ye={}));var Ve;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(Ve||(Ve={}));var Et;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(Et||(Et={}));function pd(e){return e.type===Ve.literal}function vc(e){return e.type===Ve.argument}function Sg(e){return e.type===Ve.number}function Ig(e){return e.type===Ve.date}function Og(e){return e.type===Ve.time}function Lg(e){return e.type===Ve.select}function Kg(e){return e.type===Ve.plural}function Ec(e){return e.type===Ve.pound}function Dg(e){return e.type===Ve.tag}function Pg(e){return!!(e&&typeof e=="object"&&e.type===Et.number)}function $s(e){return!!(e&&typeof e=="object"&&e.type===Et.dateTime)}var Fg=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,fc=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function mc(e){var i={};return e.replace(fc,function(t){var a=t.length;switch(t[0]){case"G":i.era=a===4?"long":a===5?"narrow":"short";break;case"y":i.year=a===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":i.month=["numeric","2-digit","short","long","narrow"][a-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":i.day=["numeric","2-digit"][a-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":i.weekday=a===4?"long":a===5?"narrow":"short";break;case"e":if(a<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");i.weekday=["short","long","narrow","short"][a-4];break;case"c":if(a<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");i.weekday=["short","long","narrow","short"][a-4];break;case"a":i.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":i.hourCycle="h12",i.hour=["numeric","2-digit"][a-1];break;case"H":i.hourCycle="h23",i.hour=["numeric","2-digit"][a-1];break;case"K":i.hourCycle="h11",i.hour=["numeric","2-digit"][a-1];break;case"k":i.hourCycle="h24",i.hour=["numeric","2-digit"][a-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":i.minute=["numeric","2-digit"][a-1];break;case"s":i.second=["numeric","2-digit"][a-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":i.timeZoneName=a<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),i}var Tc=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function pc(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var i=e.split(Tc).filter(function(y){return y.length>0}),t=[],a=0,s=i;a<s.length;a++){var l=s[a],d=l.split("/");if(d.length===0)throw new Error("Invalid number skeleton");for(var g=d[0],v=d.slice(1),T=0,f=v;T<f.length;T++){var h=f[T];if(h.length===0)throw new Error("Invalid number skeleton")}t.push({stem:g,options:v})}return t}function hc(e){return e.replace(/^(.*?)-/,"")}var hd=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,Mg=/^(@+)?(\+|#+)?[rs]?$/g,Ac=/(\*)(0+)|(#+)(0+)|(0+)/g,jg=/^(0+)$/;function Ad(e){var i={};return e[e.length-1]==="r"?i.roundingPriority="morePrecision":e[e.length-1]==="s"&&(i.roundingPriority="lessPrecision"),e.replace(Mg,function(t,a,s){return typeof s!="string"?(i.minimumSignificantDigits=a.length,i.maximumSignificantDigits=a.length):s==="+"?i.minimumSignificantDigits=a.length:a[0]==="#"?i.maximumSignificantDigits=a.length:(i.minimumSignificantDigits=a.length,i.maximumSignificantDigits=a.length+(typeof s=="string"?s.length:0)),""}),i}function Gg(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function yc(e){var i;if(e[0]==="E"&&e[1]==="E"?(i={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(i={notation:"scientific"},e=e.slice(1)),i){var t=e.slice(0,2);if(t==="+!"?(i.signDisplay="always",e=e.slice(2)):t==="+?"&&(i.signDisplay="exceptZero",e=e.slice(2)),!jg.test(e))throw new Error("Malformed concise eng/scientific notation");i.minimumIntegerDigits=e.length}return i}function yd(e){var i={},t=Gg(e);return t||i}function cc(e){for(var i={},t=0,a=e;t<a.length;t++){var s=a[t];switch(s.stem){case"percent":case"%":i.style="percent";continue;case"%x100":i.style="percent",i.scale=100;continue;case"currency":i.style="currency",i.currency=s.options[0];continue;case"group-off":case",_":i.useGrouping=!1;continue;case"precision-integer":case".":i.maximumFractionDigits=0;continue;case"measure-unit":case"unit":i.style="unit",i.unit=hc(s.options[0]);continue;case"compact-short":case"K":i.notation="compact",i.compactDisplay="short";continue;case"compact-long":case"KK":i.notation="compact",i.compactDisplay="long";continue;case"scientific":i=ee(ee(ee({},i),{notation:"scientific"}),s.options.reduce(function(v,T){return ee(ee({},v),yd(T))},{}));continue;case"engineering":i=ee(ee(ee({},i),{notation:"engineering"}),s.options.reduce(function(v,T){return ee(ee({},v),yd(T))},{}));continue;case"notation-simple":i.notation="standard";continue;case"unit-width-narrow":i.currencyDisplay="narrowSymbol",i.unitDisplay="narrow";continue;case"unit-width-short":i.currencyDisplay="code",i.unitDisplay="short";continue;case"unit-width-full-name":i.currencyDisplay="name",i.unitDisplay="long";continue;case"unit-width-iso-code":i.currencyDisplay="symbol";continue;case"scale":i.scale=parseFloat(s.options[0]);continue;case"rounding-mode-floor":i.roundingMode="floor";continue;case"rounding-mode-ceiling":i.roundingMode="ceil";continue;case"rounding-mode-down":i.roundingMode="trunc";continue;case"rounding-mode-up":i.roundingMode="expand";continue;case"rounding-mode-half-even":i.roundingMode="halfEven";continue;case"rounding-mode-half-down":i.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":i.roundingMode="halfExpand";continue;case"integer-width":if(s.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");s.options[0].replace(Ac,function(v,T,f,h,y,K){if(T)i.minimumIntegerDigits=f.length;else{if(h&&y)throw new Error("We currently do not support maximum integer digits");if(K)throw new Error("We currently do not support exact integer digits")}return""});continue}if(jg.test(s.stem)){i.minimumIntegerDigits=s.stem.length;continue}if(hd.test(s.stem)){if(s.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");s.stem.replace(hd,function(v,T,f,h,y,K){return f==="*"?i.minimumFractionDigits=T.length:h&&h[0]==="#"?i.maximumFractionDigits=h.length:y&&K?(i.minimumFractionDigits=y.length,i.maximumFractionDigits=y.length+K.length):(i.minimumFractionDigits=T.length,i.maximumFractionDigits=T.length),""});var l=s.options[0];l==="w"?i=ee(ee({},i),{trailingZeroDisplay:"stripIfInteger"}):l&&(i=ee(ee({},i),Ad(l)));continue}if(Mg.test(s.stem)){i=ee(ee({},i),Ad(s.stem));continue}var d=Gg(s.stem);d&&(i=ee(ee({},i),d));var g=yc(s.stem);g&&(i=ee(ee({},i),g))}return i}var xa={"001":["H","h"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["H","h","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["H","hB","h","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["H","h","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["H","h","hB","hb"],CU:["H","h","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["H","hB","h","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["H","h","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["H","h","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["H","h","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["H","h","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["H","hB","h","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["H","h","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["H","h","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["H","h","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"es-BO":["H","h","hB","hb"],"es-BR":["H","h","hB","hb"],"es-EC":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"es-PE":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function Rc(e,i){for(var t="",a=0;a<e.length;a++){var s=e.charAt(a);if(s==="j"){for(var l=0;a+1<e.length&&e.charAt(a+1)===s;)l++,a++;var d=1+(l&1),g=l<2?1:3+(l>>1),v="a",T=_c(i);for((T=="H"||T=="k")&&(g=0);g-- >0;)t+=v;for(;d-- >0;)t=T+t}else s==="J"?t+="H":t+=s}return t}function _c(e){var i=e.hourCycle;if(i===void 0&&e.hourCycles&&e.hourCycles.length&&(i=e.hourCycles[0]),i)switch(i){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var t=e.language,a;t!=="root"&&(a=e.maximize().region);var s=xa[a||""]||xa[t||""]||xa["".concat(t,"-001")]||xa["001"];return s[0]}var Ks,bc=new RegExp("^".concat(Fg.source,"*")),Nc=new RegExp("".concat(Fg.source,"*$"));function Re(e,i){return{start:e,end:i}}var Sc=!!String.prototype.startsWith&&"_a".startsWith("a",1),Ic=!!String.fromCodePoint,Oc=!!Object.fromEntries,Lc=!!String.prototype.codePointAt,Kc=!!String.prototype.trimStart,Dc=!!String.prototype.trimEnd,Pc=!!Number.isSafeInteger,Fc=Pc?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},Js=!0;try{var Mc=Vg("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Js=((Ks=Mc.exec("a"))===null||Ks===void 0?void 0:Ks[0])==="a"}catch{Js=!1}var cd=Sc?function(i,t,a){return i.startsWith(t,a)}:function(i,t,a){return i.slice(a,a+t.length)===t},Ws=Ic?String.fromCodePoint:function(){for(var i=[],t=0;t<arguments.length;t++)i[t]=arguments[t];for(var a="",s=i.length,l=0,d;s>l;){if(d=i[l++],d>1114111)throw RangeError(d+" is not a valid code point");a+=d<65536?String.fromCharCode(d):String.fromCharCode(((d-=65536)>>10)+55296,d%1024+56320)}return a},Rd=Oc?Object.fromEntries:function(i){for(var t={},a=0,s=i;a<s.length;a++){var l=s[a],d=l[0],g=l[1];t[d]=g}return t},Bg=Lc?function(i,t){return i.codePointAt(t)}:function(i,t){var a=i.length;if(!(t<0||t>=a)){var s=i.charCodeAt(t),l;return s<55296||s>56319||t+1===a||(l=i.charCodeAt(t+1))<56320||l>57343?s:(s-55296<<10)+(l-56320)+65536}},jc=Kc?function(i){return i.trimStart()}:function(i){return i.replace(bc,"")},Gc=Dc?function(i){return i.trimEnd()}:function(i){return i.replace(Nc,"")};function Vg(e,i){return new RegExp(e,i)}var zs;if(Js){var _d=Vg("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");zs=function(i,t){var a;_d.lastIndex=t;var s=_d.exec(i);return(a=s[1])!==null&&a!==void 0?a:""}}else zs=function(i,t){for(var a=[];;){var s=Bg(i,t);if(s===void 0||wg(s)||Hc(s))break;a.push(s),t+=s>=65536?2:1}return Ws.apply(void 0,a)};var Bc=function(){function e(i,t){t===void 0&&(t={}),this.message=i,this.position={offset:0,line:1,column:1},this.ignoreTag=!!t.ignoreTag,this.locale=t.locale,this.requiresOtherClause=!!t.requiresOtherClause,this.shouldParseSkeletons=!!t.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(i,t,a){for(var s=[];!this.isEOF();){var l=this.char();if(l===123){var d=this.parseArgument(i,a);if(d.err)return d;s.push(d.val)}else{if(l===125&&i>0)break;if(l===35&&(t==="plural"||t==="selectordinal")){var g=this.clonePosition();this.bump(),s.push({type:Ve.pound,location:Re(g,this.clonePosition())})}else if(l===60&&!this.ignoreTag&&this.peek()===47){if(a)break;return this.error(ye.UNMATCHED_CLOSING_TAG,Re(this.clonePosition(),this.clonePosition()))}else if(l===60&&!this.ignoreTag&&Zs(this.peek()||0)){var d=this.parseTag(i,t);if(d.err)return d;s.push(d.val)}else{var d=this.parseLiteral(i,t);if(d.err)return d;s.push(d.val)}}}return{val:s,err:null}},e.prototype.parseTag=function(i,t){var a=this.clonePosition();this.bump();var s=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:Ve.literal,value:"<".concat(s,"/>"),location:Re(a,this.clonePosition())},err:null};if(this.bumpIf(">")){var l=this.parseMessage(i+1,t,!0);if(l.err)return l;var d=l.val,g=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!Zs(this.char()))return this.error(ye.INVALID_TAG,Re(g,this.clonePosition()));var v=this.clonePosition(),T=this.parseTagName();return s!==T?this.error(ye.UNMATCHED_CLOSING_TAG,Re(v,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:Ve.tag,value:s,children:d,location:Re(a,this.clonePosition())},err:null}:this.error(ye.INVALID_TAG,Re(g,this.clonePosition())))}else return this.error(ye.UNCLOSED_TAG,Re(a,this.clonePosition()))}else return this.error(ye.INVALID_TAG,Re(a,this.clonePosition()))},e.prototype.parseTagName=function(){var i=this.offset();for(this.bump();!this.isEOF()&&wc(this.char());)this.bump();return this.message.slice(i,this.offset())},e.prototype.parseLiteral=function(i,t){for(var a=this.clonePosition(),s="";;){var l=this.tryParseQuote(t);if(l){s+=l;continue}var d=this.tryParseUnquoted(i,t);if(d){s+=d;continue}var g=this.tryParseLeftAngleBracket();if(g){s+=g;continue}break}var v=Re(a,this.clonePosition());return{val:{type:Ve.literal,value:s,location:v},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!Vc(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(i){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(i==="plural"||i==="selectordinal")break;return null;default:return null}this.bump();var t=[this.char()];for(this.bump();!this.isEOF();){var a=this.char();if(a===39)if(this.peek()===39)t.push(39),this.bump();else{this.bump();break}else t.push(a);this.bump()}return Ws.apply(void 0,t)},e.prototype.tryParseUnquoted=function(i,t){if(this.isEOF())return null;var a=this.char();return a===60||a===123||a===35&&(t==="plural"||t==="selectordinal")||a===125&&i>0?null:(this.bump(),Ws(a))},e.prototype.parseArgument=function(i,t){var a=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(ye.EXPECT_ARGUMENT_CLOSING_BRACE,Re(a,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(ye.EMPTY_ARGUMENT,Re(a,this.clonePosition()));var s=this.parseIdentifierIfPossible().value;if(!s)return this.error(ye.MALFORMED_ARGUMENT,Re(a,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(ye.EXPECT_ARGUMENT_CLOSING_BRACE,Re(a,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:Ve.argument,value:s,location:Re(a,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(ye.EXPECT_ARGUMENT_CLOSING_BRACE,Re(a,this.clonePosition())):this.parseArgumentOptions(i,t,s,a);default:return this.error(ye.MALFORMED_ARGUMENT,Re(a,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var i=this.clonePosition(),t=this.offset(),a=zs(this.message,t),s=t+a.length;this.bumpTo(s);var l=this.clonePosition(),d=Re(i,l);return{value:a,location:d}},e.prototype.parseArgumentOptions=function(i,t,a,s){var l,d=this.clonePosition(),g=this.parseIdentifierIfPossible().value,v=this.clonePosition();switch(g){case"":return this.error(ye.EXPECT_ARGUMENT_TYPE,Re(d,v));case"number":case"date":case"time":{this.bumpSpace();var T=null;if(this.bumpIf(",")){this.bumpSpace();var f=this.clonePosition(),h=this.parseSimpleArgStyleIfPossible();if(h.err)return h;var y=Gc(h.val);if(y.length===0)return this.error(ye.EXPECT_ARGUMENT_STYLE,Re(this.clonePosition(),this.clonePosition()));var K=Re(f,this.clonePosition());T={style:y,styleLocation:K}}var j=this.tryParseArgumentClose(s);if(j.err)return j;var R=Re(s,this.clonePosition());if(T&&cd(T==null?void 0:T.style,"::",0)){var N=jc(T.style.slice(2));if(g==="number"){var h=this.parseNumberSkeletonFromString(N,T.styleLocation);return h.err?h:{val:{type:Ve.number,value:a,location:R,style:h.val},err:null}}else{if(N.length===0)return this.error(ye.EXPECT_DATE_TIME_SKELETON,R);var D=N;this.locale&&(D=Rc(N,this.locale));var y={type:Et.dateTime,pattern:D,location:T.styleLocation,parsedOptions:this.shouldParseSkeletons?mc(D):{}},q=g==="date"?Ve.date:Ve.time;return{val:{type:q,value:a,location:R,style:y},err:null}}}return{val:{type:g==="number"?Ve.number:g==="date"?Ve.date:Ve.time,value:a,location:R,style:(l=T==null?void 0:T.style)!==null&&l!==void 0?l:null},err:null}}case"plural":case"selectordinal":case"select":{var L=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(ye.EXPECT_SELECT_ARGUMENT_OPTIONS,Re(L,ee({},L)));this.bumpSpace();var Q=this.parseIdentifierIfPossible(),O=0;if(g!=="select"&&Q.value==="offset"){if(!this.bumpIf(":"))return this.error(ye.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Re(this.clonePosition(),this.clonePosition()));this.bumpSpace();var h=this.tryParseDecimalInteger(ye.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,ye.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(h.err)return h;this.bumpSpace(),Q=this.parseIdentifierIfPossible(),O=h.val}var w=this.tryParsePluralOrSelectOptions(i,g,t,Q);if(w.err)return w;var j=this.tryParseArgumentClose(s);if(j.err)return j;var I=Re(s,this.clonePosition());return g==="select"?{val:{type:Ve.select,value:a,options:Rd(w.val),location:I},err:null}:{val:{type:Ve.plural,value:a,options:Rd(w.val),offset:O,pluralType:g==="plural"?"cardinal":"ordinal",location:I},err:null}}default:return this.error(ye.INVALID_ARGUMENT_TYPE,Re(d,v))}},e.prototype.tryParseArgumentClose=function(i){return this.isEOF()||this.char()!==125?this.error(ye.EXPECT_ARGUMENT_CLOSING_BRACE,Re(i,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var i=0,t=this.clonePosition();!this.isEOF();){var a=this.char();switch(a){case 39:{this.bump();var s=this.clonePosition();if(!this.bumpUntil("'"))return this.error(ye.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,Re(s,this.clonePosition()));this.bump();break}case 123:{i+=1,this.bump();break}case 125:{if(i>0)i-=1;else return{val:this.message.slice(t.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(t.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(i,t){var a=[];try{a=pc(i)}catch{return this.error(ye.INVALID_NUMBER_SKELETON,t)}return{val:{type:Et.number,tokens:a,location:t,parsedOptions:this.shouldParseSkeletons?cc(a):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(i,t,a,s){for(var l,d=!1,g=[],v=new Set,T=s.value,f=s.location;;){if(T.length===0){var h=this.clonePosition();if(t!=="select"&&this.bumpIf("=")){var y=this.tryParseDecimalInteger(ye.EXPECT_PLURAL_ARGUMENT_SELECTOR,ye.INVALID_PLURAL_ARGUMENT_SELECTOR);if(y.err)return y;f=Re(h,this.clonePosition()),T=this.message.slice(h.offset,this.offset())}else break}if(v.has(T))return this.error(t==="select"?ye.DUPLICATE_SELECT_ARGUMENT_SELECTOR:ye.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,f);T==="other"&&(d=!0),this.bumpSpace();var K=this.clonePosition();if(!this.bumpIf("{"))return this.error(t==="select"?ye.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:ye.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,Re(this.clonePosition(),this.clonePosition()));var j=this.parseMessage(i+1,t,a);if(j.err)return j;var R=this.tryParseArgumentClose(K);if(R.err)return R;g.push([T,{value:j.val,location:Re(K,this.clonePosition())}]),v.add(T),this.bumpSpace(),l=this.parseIdentifierIfPossible(),T=l.value,f=l.location}return g.length===0?this.error(t==="select"?ye.EXPECT_SELECT_ARGUMENT_SELECTOR:ye.EXPECT_PLURAL_ARGUMENT_SELECTOR,Re(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!d?this.error(ye.MISSING_OTHER_CLAUSE,Re(this.clonePosition(),this.clonePosition())):{val:g,err:null}},e.prototype.tryParseDecimalInteger=function(i,t){var a=1,s=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(a=-1);for(var l=!1,d=0;!this.isEOF();){var g=this.char();if(g>=48&&g<=57)l=!0,d=d*10+(g-48),this.bump();else break}var v=Re(s,this.clonePosition());return l?(d*=a,Fc(d)?{val:d,err:null}:this.error(t,v)):this.error(i,v)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var i=this.position.offset;if(i>=this.message.length)throw Error("out of bound");var t=Bg(this.message,i);if(t===void 0)throw Error("Offset ".concat(i," is at invalid UTF-16 code unit boundary"));return t},e.prototype.error=function(i,t){return{val:null,err:{kind:i,message:this.message,location:t}}},e.prototype.bump=function(){if(!this.isEOF()){var i=this.char();i===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=i<65536?1:2)}},e.prototype.bumpIf=function(i){if(cd(this.message,i,this.offset())){for(var t=0;t<i.length;t++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(i){var t=this.offset(),a=this.message.indexOf(i,t);return a>=0?(this.bumpTo(a),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(i){if(this.offset()>i)throw Error("targetOffset ".concat(i," must be greater than or equal to the current offset ").concat(this.offset()));for(i=Math.min(i,this.message.length);;){var t=this.offset();if(t===i)break;if(t>i)throw Error("targetOffset ".concat(i," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&wg(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var i=this.char(),t=this.offset(),a=this.message.charCodeAt(t+(i>=65536?2:1));return a??null},e}();function Zs(e){return e>=97&&e<=122||e>=65&&e<=90}function Vc(e){return Zs(e)||e===47}function wc(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function wg(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function Hc(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function Xs(e){e.forEach(function(i){if(delete i.location,Lg(i)||Kg(i))for(var t in i.options)delete i.options[t].location,Xs(i.options[t].value);else Sg(i)&&Pg(i.style)||(Ig(i)||Og(i))&&$s(i.style)?delete i.style.location:Dg(i)&&Xs(i.children)})}function Uc(e,i){i===void 0&&(i={}),i=ee({shouldParseSkeletons:!0,requiresOtherClause:!0},i);var t=new Bc(e,i).parse();if(t.err){var a=SyntaxError(ye[t.err.kind]);throw a.location=t.err.location,a.originalMessage=t.err.message,a}return i!=null&&i.captureLocation||Xs(t.val),t.val}function Ds(e,i){var t=i&&i.cache?i.cache:Jc,a=i&&i.serializer?i.serializer:$c,s=i&&i.strategy?i.strategy:xc;return s(e,{cache:t,serializer:a})}function qc(e){return e==null||typeof e=="number"||typeof e=="boolean"}function Hg(e,i,t,a){var s=qc(a)?a:t(a),l=i.get(s);return typeof l>"u"&&(l=e.call(this,a),i.set(s,l)),l}function Ug(e,i,t){var a=Array.prototype.slice.call(arguments,3),s=t(a),l=i.get(s);return typeof l>"u"&&(l=e.apply(this,a),i.set(s,l)),l}function Ao(e,i,t,a,s){return t.bind(i,e,a,s)}function xc(e,i){var t=e.length===1?Hg:Ug;return Ao(e,this,t,i.cache.create(),i.serializer)}function Yc(e,i){return Ao(e,this,Ug,i.cache.create(),i.serializer)}function Cc(e,i){return Ao(e,this,Hg,i.cache.create(),i.serializer)}var $c=function(){return JSON.stringify(arguments)};function yo(){this.cache=Object.create(null)}yo.prototype.get=function(e){return this.cache[e]};yo.prototype.set=function(e,i){this.cache[e]=i};var Jc={create:function(){return new yo}},Ps={variadic:Yc,monadic:Cc},ar;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(ar||(ar={}));var Sr=function(e){zn(i,e);function i(t,a,s){var l=e.call(this,t)||this;return l.code=a,l.originalMessage=s,l}return i.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},i}(Error),bd=function(e){zn(i,e);function i(t,a,s,l){return e.call(this,'Invalid values for "'.concat(t,'": "').concat(a,'". Options are "').concat(Object.keys(s).join('", "'),'"'),ar.INVALID_VALUE,l)||this}return i}(Sr),Wc=function(e){zn(i,e);function i(t,a,s){return e.call(this,'Value for "'.concat(t,'" must be of type ').concat(a),ar.INVALID_VALUE,s)||this}return i}(Sr),zc=function(e){zn(i,e);function i(t,a){return e.call(this,'The intl string context variable "'.concat(t,'" was not provided to the string "').concat(a,'"'),ar.MISSING_VALUE,a)||this}return i}(Sr),gn;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(gn||(gn={}));function Zc(e){return e.length<2?e:e.reduce(function(i,t){var a=i[i.length-1];return!a||a.type!==gn.literal||t.type!==gn.literal?i.push(t):a.value+=t.value,i},[])}function qg(e){return typeof e=="function"}function Ja(e,i,t,a,s,l,d){if(e.length===1&&pd(e[0]))return[{type:gn.literal,value:e[0].value}];for(var g=[],v=0,T=e;v<T.length;v++){var f=T[v];if(pd(f)){g.push({type:gn.literal,value:f.value});continue}if(Ec(f)){typeof l=="number"&&g.push({type:gn.literal,value:t.getNumberFormat(i).format(l)});continue}var h=f.value;if(!(s&&h in s))throw new zc(h,d);var y=s[h];if(vc(f)){(!y||typeof y=="string"||typeof y=="number")&&(y=typeof y=="string"||typeof y=="number"?String(y):""),g.push({type:typeof y=="string"?gn.literal:gn.object,value:y});continue}if(Ig(f)){var K=typeof f.style=="string"?a.date[f.style]:$s(f.style)?f.style.parsedOptions:void 0;g.push({type:gn.literal,value:t.getDateTimeFormat(i,K).format(y)});continue}if(Og(f)){var K=typeof f.style=="string"?a.time[f.style]:$s(f.style)?f.style.parsedOptions:a.time.medium;g.push({type:gn.literal,value:t.getDateTimeFormat(i,K).format(y)});continue}if(Sg(f)){var K=typeof f.style=="string"?a.number[f.style]:Pg(f.style)?f.style.parsedOptions:void 0;K&&K.scale&&(y=y*(K.scale||1)),g.push({type:gn.literal,value:t.getNumberFormat(i,K).format(y)});continue}if(Dg(f)){var j=f.children,R=f.value,N=s[R];if(!qg(N))throw new Wc(R,"function",d);var D=Ja(j,i,t,a,s,l),q=N(D.map(function(O){return O.value}));Array.isArray(q)||(q=[q]),g.push.apply(g,q.map(function(O){return{type:typeof O=="string"?gn.literal:gn.object,value:O}}))}if(Lg(f)){var L=f.options[y]||f.options.other;if(!L)throw new bd(f.value,y,Object.keys(f.options),d);g.push.apply(g,Ja(L.value,i,t,a,s));continue}if(Kg(f)){var L=f.options["=".concat(y)];if(!L){if(!Intl.PluralRules)throw new Sr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,ar.MISSING_INTL_API,d);var Q=t.getPluralRules(i,{type:f.pluralType}).select(y-(f.offset||0));L=f.options[Q]||f.options.other}if(!L)throw new bd(f.value,y,Object.keys(f.options),d);g.push.apply(g,Ja(L.value,i,t,a,s,y-(f.offset||0)));continue}}return Zc(g)}function Xc(e,i){return i?ee(ee(ee({},e||{}),i||{}),Object.keys(e).reduce(function(t,a){return t[a]=ee(ee({},e[a]),i[a]||{}),t},{})):e}function Qc(e,i){return i?Object.keys(e).reduce(function(t,a){return t[a]=Xc(e[a],i[a]),t},ee({},e)):e}function Fs(e){return{create:function(){return{get:function(i){return e[i]},set:function(i,t){e[i]=t}}}}}function eR(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:Ds(function(){for(var i,t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return new((i=Intl.NumberFormat).bind.apply(i,tr([void 0],t,!1)))},{cache:Fs(e.number),strategy:Ps.variadic}),getDateTimeFormat:Ds(function(){for(var i,t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return new((i=Intl.DateTimeFormat).bind.apply(i,tr([void 0],t,!1)))},{cache:Fs(e.dateTime),strategy:Ps.variadic}),getPluralRules:Ds(function(){for(var i,t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return new((i=Intl.PluralRules).bind.apply(i,tr([void 0],t,!1)))},{cache:Fs(e.pluralRules),strategy:Ps.variadic})}}var xg=function(){function e(i,t,a,s){var l=this;if(t===void 0&&(t=e.defaultLocale),this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(v){var T=l.formatToParts(v);if(T.length===1)return T[0].value;var f=T.reduce(function(h,y){return!h.length||y.type!==gn.literal||typeof h[h.length-1]!="string"?h.push(y.value):h[h.length-1]+=y.value,h},[]);return f.length<=1?f[0]||"":f},this.formatToParts=function(v){return Ja(l.ast,l.locales,l.formatters,l.formats,v,void 0,l.message)},this.resolvedOptions=function(){var v;return{locale:((v=l.resolvedLocale)===null||v===void 0?void 0:v.toString())||Intl.NumberFormat.supportedLocalesOf(l.locales)[0]}},this.getAst=function(){return l.ast},this.locales=t,this.resolvedLocale=e.resolveLocale(t),typeof i=="string"){if(this.message=i,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var d=s||{};d.formatters;var g=vt(d,["formatters"]);this.ast=e.__parse(i,ee(ee({},g),{locale:this.resolvedLocale}))}else this.ast=i;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=Qc(e.formats,a),this.formatters=s&&s.formatters||eR(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(i){if(!(typeof Intl.Locale>"u")){var t=Intl.NumberFormat.supportedLocalesOf(i);return t.length>0?new Intl.Locale(t[0]):new Intl.Locale(typeof i=="string"?i:i[0])}},e.__parse=Uc,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}();function Br(e,i){var t=i&&i.cache?i.cache:sR,a=i&&i.serializer?i.serializer:iR,s=i&&i.strategy?i.strategy:rR;return s(e,{cache:t,serializer:a})}function nR(e){return e==null||typeof e=="number"||typeof e=="boolean"}function Yg(e,i,t,a){var s=nR(a)?a:t(a),l=i.get(s);return typeof l>"u"&&(l=e.call(this,a),i.set(s,l)),l}function Cg(e,i,t){var a=Array.prototype.slice.call(arguments,3),s=t(a),l=i.get(s);return typeof l>"u"&&(l=e.apply(this,a),i.set(s,l)),l}function co(e,i,t,a,s){return t.bind(i,e,a,s)}function rR(e,i){var t=e.length===1?Yg:Cg;return co(e,this,t,i.cache.create(),i.serializer)}function tR(e,i){return co(e,this,Cg,i.cache.create(),i.serializer)}function aR(e,i){return co(e,this,Yg,i.cache.create(),i.serializer)}var iR=function(){return JSON.stringify(arguments)};function Ro(){this.cache=Object.create(null)}Ro.prototype.get=function(e){return this.cache[e]};Ro.prototype.set=function(e,i){this.cache[e]=i};var sR={create:function(){return new Ro}},Vr={variadic:tR,monadic:aR},Ur;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(Ur||(Ur={}));var Zt=function(e){zn(i,e);function i(t,a,s){var l=this,d=s?s instanceof Error?s:new Error(String(s)):void 0;return l=e.call(this,"[@formatjs/intl Error ".concat(t,"] ").concat(a,`
`).concat(d?`
`.concat(d.message,`
`).concat(d.stack):""))||this,l.code=t,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(l,i),l}return i}(Error),oR=function(e){zn(i,e);function i(t,a){return e.call(this,Ur.UNSUPPORTED_FORMATTER,t,a)||this}return i}(Zt),lR=function(e){zn(i,e);function i(t,a){return e.call(this,Ur.INVALID_CONFIG,t,a)||this}return i}(Zt),Nd=function(e){zn(i,e);function i(t,a){return e.call(this,Ur.MISSING_DATA,t,a)||this}return i}(Zt),Hn=function(e){zn(i,e);function i(t,a,s){var l=e.call(this,Ur.FORMAT_ERROR,"".concat(t,`
Locale: `).concat(a,`
`),s)||this;return l.locale=a,l}return i}(Zt),Ms=function(e){zn(i,e);function i(t,a,s,l){var d=e.call(this,"".concat(t,`
MessageID: `).concat(s==null?void 0:s.id,`
Default Message: `).concat(s==null?void 0:s.defaultMessage,`
Description: `).concat(s==null?void 0:s.description,`
`),a,l)||this;return d.descriptor=s,d.locale=a,d}return i}(Hn),uR=function(e){zn(i,e);function i(t,a){var s=e.call(this,Ur.MISSING_TRANSLATION,'Missing message: "'.concat(t.id,'" for locale "').concat(a,'", using ').concat(t.defaultMessage?"default message (".concat(typeof t.defaultMessage=="string"?t.defaultMessage:t.defaultMessage.map(function(l){var d;return(d=l.value)!==null&&d!==void 0?d:JSON.stringify(l)}).join(),")"):"id"," as fallback."))||this;return s.descriptor=t,s}return i}(Zt);function xr(e,i,t){return t===void 0&&(t={}),i.reduce(function(a,s){return s in e?a[s]=e[s]:s in t&&(a[s]=t[s]),a},{})}var dR=function(e){},gR=function(e){},$g={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:dR,onWarn:gR};function Jg(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function wr(e){return{create:function(){return{get:function(i){return e[i]},set:function(i,t){e[i]=t}}}}}function kR(e){e===void 0&&(e=Jg());var i=Intl.RelativeTimeFormat,t=Intl.ListFormat,a=Intl.DisplayNames,s=Br(function(){for(var g,v=[],T=0;T<arguments.length;T++)v[T]=arguments[T];return new((g=Intl.DateTimeFormat).bind.apply(g,tr([void 0],v,!1)))},{cache:wr(e.dateTime),strategy:Vr.variadic}),l=Br(function(){for(var g,v=[],T=0;T<arguments.length;T++)v[T]=arguments[T];return new((g=Intl.NumberFormat).bind.apply(g,tr([void 0],v,!1)))},{cache:wr(e.number),strategy:Vr.variadic}),d=Br(function(){for(var g,v=[],T=0;T<arguments.length;T++)v[T]=arguments[T];return new((g=Intl.PluralRules).bind.apply(g,tr([void 0],v,!1)))},{cache:wr(e.pluralRules),strategy:Vr.variadic});return{getDateTimeFormat:s,getNumberFormat:l,getMessageFormat:Br(function(g,v,T,f){return new xg(g,v,T,ee({formatters:{getNumberFormat:l,getDateTimeFormat:s,getPluralRules:d}},f||{}))},{cache:wr(e.message),strategy:Vr.variadic}),getRelativeTimeFormat:Br(function(){for(var g=[],v=0;v<arguments.length;v++)g[v]=arguments[v];return new(i.bind.apply(i,tr([void 0],g,!1)))},{cache:wr(e.relativeTime),strategy:Vr.variadic}),getPluralRules:d,getListFormat:Br(function(){for(var g=[],v=0;v<arguments.length;v++)g[v]=arguments[v];return new(t.bind.apply(t,tr([void 0],g,!1)))},{cache:wr(e.list),strategy:Vr.variadic}),getDisplayNames:Br(function(){for(var g=[],v=0;v<arguments.length;v++)g[v]=arguments[v];return new(a.bind.apply(a,tr([void 0],g,!1)))},{cache:wr(e.displayNames),strategy:Vr.variadic})}}function _o(e,i,t,a){var s=e&&e[i],l;if(s&&(l=s[t]),l)return l;a(new oR("No ".concat(i," format named: ").concat(t)))}function vR(e,i,t){if(t===void 0&&(t=Error),!e)throw new t(i)}var Qs;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(Qs||(Qs={}));var Sd;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(Sd||(Sd={}));function Ya(e,i){return Object.keys(e).reduce(function(t,a){return t[a]=ee({timeZone:i},e[a]),t},{})}function Id(e,i){var t=Object.keys(ee(ee({},e),i));return t.reduce(function(a,s){return a[s]=ee(ee({},e[s]||{}),i[s]||{}),a},{})}function Od(e,i){if(!i)return e;var t=xg.formats;return ee(ee(ee({},t),e),{date:Id(Ya(t.date,i),Ya(e.date||{},i)),time:Id(Ya(t.time,i),Ya(e.time||{},i))})}var eo=function(e,i,t,a,s){var l=e.locale,d=e.formats,g=e.messages,v=e.defaultLocale,T=e.defaultFormats,f=e.fallbackOnEmptyString,h=e.onError,y=e.timeZone,K=e.defaultRichTextElements;t===void 0&&(t={id:""});var j=t.id,R=t.defaultMessage;vR(!!j,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var N=String(j),D=g&&Object.prototype.hasOwnProperty.call(g,N)&&g[N];if(Array.isArray(D)&&D.length===1&&D[0].type===Qs.literal)return D[0].value;if(!a&&D&&typeof D=="string"&&!K)return D.replace(/'\{(.*?)\}'/gi,"{$1}");if(a=ee(ee({},K),a||{}),d=Od(d,y),T=Od(T,y),!D){if(f===!1&&D==="")return D;if((!R||l&&l.toLowerCase()!==v.toLowerCase())&&h(new uR(t,l)),R)try{var q=i.getMessageFormat(R,v,T,s);return q.format(a)}catch(L){return h(new Ms('Error formatting default message for: "'.concat(N,'", rendering default message verbatim'),l,t,L)),typeof R=="string"?R:N}return N}try{var q=i.getMessageFormat(D,l,d,ee({formatters:i},s||{}));return q.format(a)}catch(L){h(new Ms('Error formatting message: "'.concat(N,'", using ').concat(R?"default message":"id"," as fallback."),l,t,L))}if(R)try{var q=i.getMessageFormat(R,v,T,s);return q.format(a)}catch(L){h(new Ms('Error formatting the default message for: "'.concat(N,'", rendering message verbatim'),l,t,L))}return typeof D=="string"?D:typeof R=="string"?R:N},Wg=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function ni(e,i,t,a){var s=e.locale,l=e.formats,d=e.onError,g=e.timeZone;a===void 0&&(a={});var v=a.format,T=ee(ee({},g&&{timeZone:g}),v&&_o(l,i,v,d)),f=xr(a,Wg,T);return i==="time"&&!f.hour&&!f.minute&&!f.second&&!f.timeStyle&&!f.dateStyle&&(f=ee(ee({},f),{hour:"numeric",minute:"numeric"})),t(s,f)}function ER(e,i){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var s=t[0],l=t[1],d=l===void 0?{}:l,g=typeof s=="string"?new Date(s||0):s;try{return ni(e,"date",i,d).format(g)}catch(v){e.onError(new Hn("Error formatting date.",e.locale,v))}return String(g)}function fR(e,i){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var s=t[0],l=t[1],d=l===void 0?{}:l,g=typeof s=="string"?new Date(s||0):s;try{return ni(e,"time",i,d).format(g)}catch(v){e.onError(new Hn("Error formatting time.",e.locale,v))}return String(g)}function mR(e,i){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var s=t[0],l=t[1],d=t[2],g=d===void 0?{}:d,v=e.timeZone,T=e.locale,f=e.onError,h=xr(g,Wg,v?{timeZone:v}:{});try{return i(T,h).formatRange(s,l)}catch(y){f(new Hn("Error formatting date time range.",e.locale,y))}return String(s)}function TR(e,i){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var s=t[0],l=t[1],d=l===void 0?{}:l,g=typeof s=="string"?new Date(s||0):s;try{return ni(e,"date",i,d).formatToParts(g)}catch(v){e.onError(new Hn("Error formatting date.",e.locale,v))}return[]}function pR(e,i){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var s=t[0],l=t[1],d=l===void 0?{}:l,g=typeof s=="string"?new Date(s||0):s;try{return ni(e,"time",i,d).formatToParts(g)}catch(v){e.onError(new Hn("Error formatting time.",e.locale,v))}return[]}var hR=["style","type","fallback","languageDisplay"];function AR(e,i,t,a){var s=e.locale,l=e.onError,d=Intl.DisplayNames;d||l(new Sr(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,ar.MISSING_INTL_API));var g=xr(a,hR);try{return i(s,g).of(t)}catch(v){l(new Hn("Error formatting display name.",s,v))}}var yR=["type","style"],Ld=Date.now();function cR(e){return"".concat(Ld,"_").concat(e,"_").concat(Ld)}function RR(e,i,t,a){a===void 0&&(a={});var s=zg(e,i,t,a).reduce(function(l,d){var g=d.value;return typeof g!="string"?l.push(g):typeof l[l.length-1]=="string"?l[l.length-1]+=g:l.push(g),l},[]);return s.length===1?s[0]:s.length===0?"":s}function zg(e,i,t,a){var s=e.locale,l=e.onError;a===void 0&&(a={});var d=Intl.ListFormat;d||l(new Sr(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,ar.MISSING_INTL_API));var g=xr(a,yR);try{var v={},T=t.map(function(f,h){if(typeof f=="object"){var y=cR(h);return v[y]=f,y}return String(f)});return i(s,g).formatToParts(T).map(function(f){return f.type==="literal"?f:ee(ee({},f),{value:v[f.value]||f.value})})}catch(f){l(new Hn("Error formatting list.",s,f))}return t}var _R=["type"];function bR(e,i,t,a){var s=e.locale,l=e.onError;a===void 0&&(a={}),Intl.PluralRules||l(new Sr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,ar.MISSING_INTL_API));var d=xr(a,_R);try{return i(s,d).select(t)}catch(g){l(new Hn("Error formatting plural.",s,g))}return"other"}var NR=["numeric","style"];function SR(e,i,t){var a=e.locale,s=e.formats,l=e.onError;t===void 0&&(t={});var d=t.format,g=!!d&&_o(s,"relative",d,l)||{},v=xr(t,NR,g);return i(a,v)}function IR(e,i,t,a,s){s===void 0&&(s={}),a||(a="second");var l=Intl.RelativeTimeFormat;l||e.onError(new Sr(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,ar.MISSING_INTL_API));try{return SR(e,i,s).format(t,a)}catch(d){e.onError(new Hn("Error formatting relative time.",e.locale,d))}return String(t)}var OR=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function Zg(e,i,t){var a=e.locale,s=e.formats,l=e.onError;t===void 0&&(t={});var d=t.format,g=d&&_o(s,"number",d,l)||{},v=xr(t,OR,g);return i(a,v)}function LR(e,i,t,a){a===void 0&&(a={});try{return Zg(e,i,a).format(t)}catch(s){e.onError(new Hn("Error formatting number.",e.locale,s))}return String(t)}function KR(e,i,t,a){a===void 0&&(a={});try{return Zg(e,i,a).formatToParts(t)}catch(s){e.onError(new Hn("Error formatting number.",e.locale,s))}return[]}function DR(e){var i=e?e[Object.keys(e)[0]]:void 0;return typeof i=="string"}function PR(e){e.onWarn&&e.defaultRichTextElements&&DR(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`)}function FR(e,i){var t=kR(i),a=ee(ee({},$g),e),s=a.locale,l=a.defaultLocale,d=a.onError;return s?!Intl.NumberFormat.supportedLocalesOf(s).length&&d?d(new Nd('Missing locale data for locale: "'.concat(s,'" in Intl.NumberFormat. Using default locale: "').concat(l,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(s).length&&d&&d(new Nd('Missing locale data for locale: "'.concat(s,'" in Intl.DateTimeFormat. Using default locale: "').concat(l,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):(d&&d(new lR('"locale" was not configured, using "'.concat(l,'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))),a.locale=a.defaultLocale||"en"),PR(a),ee(ee({},a),{formatters:t,formatNumber:LR.bind(null,a,t.getNumberFormat),formatNumberToParts:KR.bind(null,a,t.getNumberFormat),formatRelativeTime:IR.bind(null,a,t.getRelativeTimeFormat),formatDate:ER.bind(null,a,t.getDateTimeFormat),formatDateToParts:TR.bind(null,a,t.getDateTimeFormat),formatTime:fR.bind(null,a,t.getDateTimeFormat),formatDateTimeRange:mR.bind(null,a,t.getDateTimeFormat),formatTimeToParts:pR.bind(null,a,t.getDateTimeFormat),formatPlural:bR.bind(null,a,t.getPluralRules),formatMessage:eo.bind(null,a,t),$t:eo.bind(null,a,t),formatList:RR.bind(null,a,t.getListFormat),formatListToParts:zg.bind(null,a,t.getListFormat),formatDisplayName:AR.bind(null,a,t.getDisplayNames)})}function MR(e){kc(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var jR=ee(ee({},$g),{textComponent:P.Fragment});function GR(e){return function(i){return e(P.Children.toArray(i))}}function Kd(e,i){if(e===i)return!0;if(!e||!i)return!1;var t=Object.keys(e),a=Object.keys(i),s=t.length;if(a.length!==s)return!1;for(var l=0;l<s;l++){var d=t[l];if(e[d]!==i[d]||!Object.prototype.hasOwnProperty.call(i,d))return!1}return!0}var bo=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=P.createContext(null)):P.createContext(null);bo.Consumer;var BR=bo.Provider,Dd=BR,VR=bo;function Zn(){var e=P.useContext(VR);return MR(e),e}var no;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(no||(no={}));var ro;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(ro||(ro={}));function Xg(e){var i=function(t){var a=Zn(),s=t.value,l=t.children,d=vt(t,["value","children"]),g=typeof s=="string"?new Date(s||0):s,v=e==="formatDate"?a.formatDateToParts(g,d):a.formatTimeToParts(g,d);return l(v)};return i.displayName=ro[e],i}function Xt(e){var i=function(t){var a=Zn(),s=t.value,l=t.children,d=vt(t,["value","children"]),g=a[e](s,d);if(typeof l=="function")return l(g);var v=a.textComponent||P.Fragment;return P.createElement(v,null,g)};return i.displayName=no[e],i}function Qg(e){return e&&Object.keys(e).reduce(function(i,t){var a=e[t];return i[t]=qg(a)?GR(a):a,i},{})}var Pd=function(e,i,t,a){for(var s=[],l=4;l<arguments.length;l++)s[l-4]=arguments[l];var d=Qg(a),g=eo.apply(void 0,tr([e,i,t,d],s,!1));return Array.isArray(g)?P.Children.toArray(g):g},wR=function(e,i){var t=e.defaultRichTextElements,a=vt(e,["defaultRichTextElements"]),s=Qg(t),l=FR(ee(ee(ee({},jR),a),{defaultRichTextElements:s}),i),d={locale:l.locale,timeZone:l.timeZone,fallbackOnEmptyString:l.fallbackOnEmptyString,formats:l.formats,defaultLocale:l.defaultLocale,defaultFormats:l.defaultFormats,messages:l.messages,onError:l.onError,defaultRichTextElements:s};return ee(ee({},l),{formatMessage:Pd.bind(null,d,l.formatters),$t:Pd.bind(null,d,l.formatters)})};function HR(e,i){var t=e.values,a=vt(e,["values"]),s=i.values,l=vt(i,["values"]);return Kd(s,t)&&Kd(a,l)}function ek(e){var i=Zn(),t=i.formatMessage,a=i.textComponent,s=a===void 0?P.Fragment:a,l=e.id,d=e.description,g=e.defaultMessage,v=e.values,T=e.children,f=e.tagName,h=f===void 0?s:f,y=e.ignoreTag,K={id:l,description:d,defaultMessage:g},j=t(K,v,{ignoreTag:y});return typeof T=="function"?T(Array.isArray(j)?j:[j]):h?P.createElement(h,null,P.Children.toArray(j)):P.createElement(P.Fragment,null,j)}ek.displayName="FormattedMessage";var Ie=P.memo(ek,HR);Ie.displayName="MemoizedFormattedMessage";var nk=Xt("formatDate"),UR=Xt("formatTime");Xt("formatNumber");Xt("formatList");Xt("formatDisplayName");Xg("formatDate");Xg("formatTime");const gt=e=>{if(e==null)return;const i=e.toString().replace(/\s/g,"");if(!Number.isNaN(i))return Number(Math.round(parseFloat(i))).toLocaleString("nb-NO").replace(/,|\s/g," ")};var ri=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function No(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var rk={exports:{}};(function(e,i){(function(t,a){e.exports=a()})(ri,function(){var t="minute",a=/[+-]\d\d(?::?\d\d)?/g,s=/([+-]|\d\d)/g;return function(l,d,g){var v=d.prototype;g.utc=function(R){var N={date:R,utc:!0,args:arguments};return new d(N)},v.utc=function(R){var N=g(this.toDate(),{locale:this.$L,utc:!0});return R?N.add(this.utcOffset(),t):N},v.local=function(){return g(this.toDate(),{locale:this.$L,utc:!1})};var T=v.parse;v.parse=function(R){R.utc&&(this.$u=!0),this.$utils().u(R.$offset)||(this.$offset=R.$offset),T.call(this,R)};var f=v.init;v.init=function(){if(this.$u){var R=this.$d;this.$y=R.getUTCFullYear(),this.$M=R.getUTCMonth(),this.$D=R.getUTCDate(),this.$W=R.getUTCDay(),this.$H=R.getUTCHours(),this.$m=R.getUTCMinutes(),this.$s=R.getUTCSeconds(),this.$ms=R.getUTCMilliseconds()}else f.call(this)};var h=v.utcOffset;v.utcOffset=function(R,N){var D=this.$utils().u;if(D(R))return this.$u?0:D(this.$offset)?h.call(this):this.$offset;if(typeof R=="string"&&(R=function(O){O===void 0&&(O="");var w=O.match(a);if(!w)return null;var I=(""+w[0]).match(s)||["-",0,0],b=I[0],$=60*+I[1]+ +I[2];return $===0?0:b==="+"?$:-$}(R),R===null))return this;var q=Math.abs(R)<=16?60*R:R,L=this;if(N)return L.$offset=q,L.$u=R===0,L;if(R!==0){var Q=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(L=this.local().add(q+Q,t)).$offset=q,L.$x.$localOffset=Q}else L=this.utc();return L};var y=v.format;v.format=function(R){var N=R||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return y.call(this,N)},v.valueOf=function(){var R=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*R},v.isUTC=function(){return!!this.$u},v.toISOString=function(){return this.toDate().toISOString()},v.toString=function(){return this.toDate().toUTCString()};var K=v.toDate;v.toDate=function(R){return R==="s"&&this.$offset?g(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():K.call(this)};var j=v.diff;v.diff=function(R,N,D){if(R&&this.$u===R.$u)return j.call(this,R,N,D);var q=this.local(),L=g(R).local();return j.call(q,L,N,D)}}})})(rk);var qR=rk.exports;const xR=No(qR);var tk={exports:{}};(function(e,i){(function(t,a){e.exports=a()})(ri,function(){var t,a,s=1e3,l=6e4,d=36e5,g=864e5,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,T=31536e6,f=2628e6,h=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,y={years:T,months:f,days:g,hours:d,minutes:l,seconds:s,milliseconds:1,weeks:6048e5},K=function(w){return w instanceof Q},j=function(w,I,b){return new Q(w,b,I.$l)},R=function(w){return a.p(w)+"s"},N=function(w){return w<0},D=function(w){return N(w)?Math.ceil(w):Math.floor(w)},q=function(w){return Math.abs(w)},L=function(w,I){return w?N(w)?{negative:!0,format:""+q(w)+I}:{negative:!1,format:""+w+I}:{negative:!1,format:""}},Q=function(){function w(b,$,W){var x=this;if(this.$d={},this.$l=W,b===void 0&&(this.$ms=0,this.parseFromMilliseconds()),$)return j(b*y[R($)],this);if(typeof b=="number")return this.$ms=b,this.parseFromMilliseconds(),this;if(typeof b=="object")return Object.keys(b).forEach(function(J){x.$d[R(J)]=b[J]}),this.calMilliseconds(),this;if(typeof b=="string"){var te=b.match(h);if(te){var le=te.slice(2).map(function(J){return J!=null?Number(J):0});return this.$d.years=le[0],this.$d.months=le[1],this.$d.weeks=le[2],this.$d.days=le[3],this.$d.hours=le[4],this.$d.minutes=le[5],this.$d.seconds=le[6],this.calMilliseconds(),this}}return this}var I=w.prototype;return I.calMilliseconds=function(){var b=this;this.$ms=Object.keys(this.$d).reduce(function($,W){return $+(b.$d[W]||0)*y[W]},0)},I.parseFromMilliseconds=function(){var b=this.$ms;this.$d.years=D(b/T),b%=T,this.$d.months=D(b/f),b%=f,this.$d.days=D(b/g),b%=g,this.$d.hours=D(b/d),b%=d,this.$d.minutes=D(b/l),b%=l,this.$d.seconds=D(b/s),b%=s,this.$d.milliseconds=b},I.toISOString=function(){var b=L(this.$d.years,"Y"),$=L(this.$d.months,"M"),W=+this.$d.days||0;this.$d.weeks&&(W+=7*this.$d.weeks);var x=L(W,"D"),te=L(this.$d.hours,"H"),le=L(this.$d.minutes,"M"),J=this.$d.seconds||0;this.$d.milliseconds&&(J+=this.$d.milliseconds/1e3,J=Math.round(1e3*J)/1e3);var H=L(J,"S"),U=b.negative||$.negative||x.negative||te.negative||le.negative||H.negative,Z=te.format||le.format||H.format?"T":"",C=(U?"-":"")+"P"+b.format+$.format+x.format+Z+te.format+le.format+H.format;return C==="P"||C==="-P"?"P0D":C},I.toJSON=function(){return this.toISOString()},I.format=function(b){var $=b||"YYYY-MM-DDTHH:mm:ss",W={Y:this.$d.years,YY:a.s(this.$d.years,2,"0"),YYYY:a.s(this.$d.years,4,"0"),M:this.$d.months,MM:a.s(this.$d.months,2,"0"),D:this.$d.days,DD:a.s(this.$d.days,2,"0"),H:this.$d.hours,HH:a.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:a.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:a.s(this.$d.seconds,2,"0"),SSS:a.s(this.$d.milliseconds,3,"0")};return $.replace(v,function(x,te){return te||String(W[x])})},I.as=function(b){return this.$ms/y[R(b)]},I.get=function(b){var $=this.$ms,W=R(b);return W==="milliseconds"?$%=1e3:$=W==="weeks"?D($/y[W]):this.$d[W],$||0},I.add=function(b,$,W){var x;return x=$?b*y[R($)]:K(b)?b.$ms:j(b,this).$ms,j(this.$ms+x*(W?-1:1),this)},I.subtract=function(b,$){return this.add(b,$,!0)},I.locale=function(b){var $=this.clone();return $.$l=b,$},I.clone=function(){return j(this.$ms,this)},I.humanize=function(b){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!b)},I.valueOf=function(){return this.asMilliseconds()},I.milliseconds=function(){return this.get("milliseconds")},I.asMilliseconds=function(){return this.as("milliseconds")},I.seconds=function(){return this.get("seconds")},I.asSeconds=function(){return this.as("seconds")},I.minutes=function(){return this.get("minutes")},I.asMinutes=function(){return this.as("minutes")},I.hours=function(){return this.get("hours")},I.asHours=function(){return this.as("hours")},I.days=function(){return this.get("days")},I.asDays=function(){return this.as("days")},I.weeks=function(){return this.get("weeks")},I.asWeeks=function(){return this.as("weeks")},I.months=function(){return this.get("months")},I.asMonths=function(){return this.as("months")},I.years=function(){return this.get("years")},I.asYears=function(){return this.as("years")},w}(),O=function(w,I,b){return w.add(I.years()*b,"y").add(I.months()*b,"M").add(I.days()*b,"d").add(I.hours()*b,"h").add(I.minutes()*b,"m").add(I.seconds()*b,"s").add(I.milliseconds()*b,"ms")};return function(w,I,b){t=b,a=b().$utils(),b.duration=function(x,te){var le=b.locale();return j(x,{$l:le},te)},b.isDuration=K;var $=I.prototype.add,W=I.prototype.subtract;I.prototype.add=function(x,te){return K(x)?O(this,x,1):$.bind(this)(x,te)},I.prototype.subtract=function(x,te){return K(x)?O(this,x,-1):W.bind(this)(x,te)}}})})(tk);var YR=tk.exports;const CR=No(YR);var ak={exports:{}};(function(e,i){(function(t,a){e.exports=a()})(ri,function(){var t="day";return function(a,s,l){var d=function(T){return T.add(4-T.isoWeekday(),t)},g=s.prototype;g.isoWeekYear=function(){return d(this).year()},g.isoWeek=function(T){if(!this.$utils().u(T))return this.add(7*(T-this.isoWeek()),t);var f,h,y,K,j=d(this),R=(f=this.isoWeekYear(),h=this.$u,y=(h?l.utc:l)().year(f).startOf("year"),K=4-y.isoWeekday(),y.isoWeekday()>4&&(K+=7),y.add(K,t));return j.diff(R,"week")+1},g.isoWeekday=function(T){return this.$utils().u(T)?this.day()||7:this.day(this.day()%7?T:T-7)};var v=g.startOf;g.startOf=function(T,f){var h=this.$utils(),y=!!h.u(f)||f;return h.p(T)==="isoweek"?y?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):v.bind(this)(T,f)}}})})(ak);var $R=ak.exports;const JR=No($R);var WR={exports:{}};(function(e,i){(function(t,a){e.exports=a(Nr)})(ri,function(t){function a(d){return d&&typeof d=="object"&&"default"in d?d:{default:d}}var s=a(t),l={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(d){return d+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return s.default.locale(l,null,!0),l})})(WR);const zR=Jg(),mn=e=>wR({locale:"nb-NO",messages:e},zR),ik={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"},Fd="YYYY-MM-DD";Nr.extend(xR);Nr.extend(JR);Nr.extend(CR);mn(ik);const ft="9999-12-31",ZR=(e,i,t)=>Nr(e,i,t).utc(!0).startOf("day"),Md=(e,i)=>e===ft?e:ZR(e,Fd).add(i,"days").format(Fd);mn(ik);function XR(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var sk={exports:{}},wt={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jd;function QR(){if(jd)return wt;jd=1;var e=Y,i=Symbol.for("react.element"),t=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(g,v,T){var f,h={},y=null,K=null;T!==void 0&&(y=""+T),v.key!==void 0&&(y=""+v.key),v.ref!==void 0&&(K=v.ref);for(f in v)a.call(v,f)&&!l.hasOwnProperty(f)&&(h[f]=v[f]);if(g&&g.defaultProps)for(f in v=g.defaultProps,v)h[f]===void 0&&(h[f]=v[f]);return{$$typeof:i,type:g,key:y,ref:K,props:h,_owner:s.current}}return wt.Fragment=t,wt.jsx=d,wt.jsxs=d,wt}sk.exports=QR();var Ze=sk.exports;const Yr={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodLabel.DateToday":"d.d.","PeriodFieldArray.LeggTilPeriode":"Legg til periode","DateTimeLabel.Kl":" kl.","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember"};mn(Yr);mn(Yr);var ok={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var i={}.hasOwnProperty;function t(){for(var l="",d=0;d<arguments.length;d++){var g=arguments[d];g&&(l=s(l,a.call(this,g)))}return l}function a(l){if(typeof l=="string"||typeof l=="number")return this&&this[l]||l;if(typeof l!="object")return"";if(Array.isArray(l))return t.apply(this,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var d="";for(var g in l)i.call(l,g)&&l[g]&&(d=s(d,this&&this[g]||g));return d}function s(l,d){return d?l?l+" "+d:l+d:l}e.exports?(t.default=t,e.exports=t):window.classNames=t})()})(ok);var e_=ok.exports;const Dn=XR(e_),n_="_borderbox_hicl4_1",r_="_error_hicl4_4",t_="_warning_hicl4_7",a_={borderbox:n_,error:r_,warning:t_};Dn.bind(a_);const i_="_aksjonspunkt_kn1hn_1",s_="_erAksjonspunktApent_kn1hn_4",o_="_erIkkeGodkjentAvBeslutter_kn1hn_8",l_={aksjonspunkt:i_,erAksjonspunktApent:s_,erIkkeGodkjentAvBeslutter:o_};Dn.bind(l_);const Jt=({dateString:e})=>Ze.jsx(nk,{day:"2-digit",month:"2-digit",year:"numeric",value:new Date(e)}),u_=mn(Yr),za=({dateTimeString:e,separator:i="dash",year:t="numeric",month:a="2-digit",day:s="2-digit",hour:l="numeric",minute:d="numeric",second:g=void 0})=>{const v=()=>{switch(i){case"dash":return" - ";case"kl":return u_.formatMessage({id:"DateTimeLabel.Kl"})}};return Ze.jsxs(Ze.Fragment,{children:[Ze.jsx(nk,{value:new Date(e),day:s,month:a,year:t}),v(),Ze.jsx(UR,{value:new Date(e),hour:l,minute:d,second:g})]})};mn(Yr);const d_="_tooltip_h8akz_1",g_="_tooltiptext_h8akz_5",k_="_left_h8akz_22",v_="_top_h8akz_27",E_="_right_h8akz_30",f_="_bottom_h8akz_34",m_="_showTooltip_h8akz_1",to={tooltip:d_,tooltiptext:g_,left:k_,top:v_,right:E_,bottom:f_,showTooltip:m_},T_=Dn.bind(to),p_=({children:e,content:i,alignRight:t=!1,alignLeft:a=!1,alignTop:s=!1,alignBottom:l=!1})=>Ze.jsxs("div",{className:to.tooltip,children:[Ze.jsx("span",{className:T_(to.tooltiptext,{right:t||!a&&!s&&!l,left:a,top:s,bottom:l}),children:i}),e]}),h_=Y.forwardRef(({onClick:e=()=>{},onMouseDown:i,tabIndex:t=-1,className:a="",src:s,srcHover:l,alt:d,onKeyDown:g,tooltip:v,alignTooltipLeft:T=!1},f)=>{const[h,y]=P.useState(!1),K=P.useCallback(()=>{y(!0)},[]),j=P.useCallback(()=>{y(!1)},[]),R=P.useCallback(q=>{(q.key==="Enter"||q.key===" ")&&(g&&g(q),q.preventDefault())},[]),N=l&&h?l:s,D=Ze.jsx("img",{ref:f,className:a,src:N,alt:d,tabIndex:t,onMouseOver:K,onMouseOut:j,onFocus:K,onBlur:j,onKeyDown:R,onMouseDown:i,onClick:e});return v?Ze.jsx(p_,{content:v,alignLeft:T,children:D}):D});h_.displayName="Image";const A_="_flexColumnNew_1vdv1_1",y_={flexColumnNew:A_};Dn.bind(y_);const c_="_flexRow_1yf0y_1",R_="_spaceBetween_1yf0y_9",__="_alignItemsToBaseline_1yf0y_12",b_="_alignItemsToFlexEnd_1yf0y_15",N_="_justifyItemsToFlexEnd_1yf0y_18",S_="_wrap_1yf0y_21",I_={flexRow:c_,spaceBetween:R_,alignItemsToBaseline:__,alignItemsToFlexEnd:b_,justifyItemsToFlexEnd:N_,wrap:S_};Dn.bind(I_);const O_="_flexContainer_1dk1o_1",L_="_fluid_1dk1o_6",K_="_fullHeight_1dk1o_9",D_="_flexWrap_1dk1o_17",P_={flexContainer:O_,fluid:L_,fullHeight:K_,flexWrap:D_};Dn.bind(P_);mn(Yr);const F_="_row_1lxv9_1",M_="_harHover_1lxv9_4",j_="_rowHeader_1lxv9_7",G_="_grayHeader_1lxv9_12",B_="_rowContent_1lxv9_15",V_="_selected_1lxv9_18",w_="_bold_1lxv9_22",H_="_dashedBottomBorder_1lxv9_25",U_="_solidBottomBorder_1lxv9_28",q_="_apLeftBorder_1lxv9_31",x_="_noBottomBorder_1lxv9_34",lk={row:F_,harHover:M_,rowHeader:j_,grayHeader:G_,rowContent:B_,selected:V_,bold:w_,dashedBottomBorder:H_,solidBottomBorder:U_,apLeftBorder:q_,noBottomBorder:x_},Y_=Dn.bind(lk),C_=(e,i,t)=>a=>{e&&a.button===0&&e(a,i,t)},uk=e=>e.tagName==="TR"?e:uk(e.parentElement),Gd=(e,i)=>{const t=uk(e.target),a=(i?t.nextSibling:t.previousSibling)||t;a&&(a.focus(),e.preventDefault())},$_=(e,i,t,a)=>s=>{s.key==="ArrowDown"?Gd(s,!0):s.key==="ArrowUp"?Gd(s,!1):i&&s.target.tagName!=="TD"&&(s.key==="Enter"||s.key===" ")?(i(s,t,a),s.preventDefault()):e&&i&&s.target.tagName!=="TD"&&s.key==="Shift"&&(i(s),s.preventDefault())},J_=e=>i=>{e&&i.target.tagName!=="TD"&&i.key==="Shift"&&(e(i),i.preventDefault())},W_=({id:e,model:i,isHeader:t=!1,hasGrayHeader:a=!1,onMouseDown:s,onKeyDown:l,children:d,noHover:g=!1,isSelected:v=!1,isBold:T=!1,isDashedBottomBorder:f=!1,isSolidBottomBorder:h=!1,isApLeftBorder:y=!1,className:K,useMultiselect:j=!1,hasNoBottomBorder:R=!1})=>Ze.jsx("tr",{className:Y_(K,lk.row,{rowHeader:t,grayHeader:a,rowContent:!t&&!g,selected:v,harHover:!g,bold:T,dashedBottomBorder:f,solidBottomBorder:h,noBottomBorder:R,apLeftBorder:y}),onMouseDown:C_(s,e,i),onKeyDown:$_(j,l,e,i),onKeyUp:j?J_(l):void 0,tabIndex:0,children:d}),z_="_columnStyle_1f13u_1",dk={columnStyle:z_},Z_=Dn.bind(dk),js=({children:e="",className:i,hidden:t=!1,colspanAll:a=!1})=>t?null:Ze.jsx("td",{className:Z_(dk.columnStyle,i),colSpan:a?100:void 0,children:e}),X_="_table_2cnpl_1",Q_="_rowHover_2cnpl_25",eb={table:X_,rowHover:Q_},nb=Dn.bind(eb),rb="EMPTY",tb=Y.forwardRef(({headerTextCodes:e=[],headerColumnContent:i=[],classNameTable:t="",noHover:a=!1,hasGrayHeader:s=!1,children:l},d)=>Ze.jsxs("table",{ref:d,className:nb("table",{[t]:t,rowHover:!a}),children:[Ze.jsx("thead",{children:Ze.jsxs(W_,{isHeader:!0,noHover:a,hasGrayHeader:s,children:[e.map(g=>typeof g=="string"&&g.startsWith(rb)?Ze.jsx(js,{children:" "},g):Ze.jsx(js,{children:Ze.jsx(Ie,{id:g})},g)),i.map(g=>Ze.jsx(js,{children:g},g.key))]})}),Ze.jsx("tbody",{children:Array.isArray(l)?Y.Children.map(l,g=>Y.cloneElement(g,{noHover:a})):Y.cloneElement(l,{noHover:a})})]}));tb.displayName="Table";const ab="_hidden_1pb4f_1",ib="_active_1pb4f_8",sb="_activeRow_1pb4f_15 _active_1pb4f_8",ob="_toggleIcon_1pb4f_19",lb="_colTopPadding_1pb4f_22",ub={hidden:ab,active:ib,activeRow:sb,toggleIcon:ob,colTopPadding:lb};Dn.bind(ub);mn(Yr);const db="_fourPx_qda5k_1",gb="_eightPx_qda5k_4",kb="_sixteenPx_qda5k_7",vb="_twentyPx_qda5k_10",Eb="_thirtyTwoPx_qda5k_13",fb="_fourtyPx_qda5k_16",mb={fourPx:db,eightPx:gb,sixteenPx:kb,twentyPx:vb,thirtyTwoPx:Eb,fourtyPx:fb};Dn.bind(mb);mn(Yr);const Tb="_divider_1t980_1",pb="_dividerParagraf_1t980_8",hb="_leftPanel_1t980_11",Ab="_rightPanel_1t980_14",yb={divider:Tb,dividerParagraf:pb,leftPanel:hb,rightPanel:Ab};Dn.bind(yb);const cb="_editedIcon_ulrjl_1",Rb={editedIcon:cb};Dn.bind(Rb);const _b={"InntektsmeldingFaktaPanel.ingen":"Ingen inntektsmeldinger er registrert","InntektsmeldingFaktaPanel.tabell.header.innsendt":"Innsendt","InntektsmeldingFaktaPanel.tabell.header.arbeidsgiver":"Arbeidsgiver","InntektsmeldingFaktaPanel.tabell.header.skjæringstidspunkt":"Startdato","InntektsmeldingFaktaPanel.tabell.header.månedsinntekt":"Månedsi.","InntektsmeldingFaktaPanel.tabell.header.behandling":"Behandling","InntektsmeldingFaktaPanel.tabell.cell.behandling.denne":"Denne","InntektsmeldingFaktaPanel.tabell.cell.behandling.andre":"Andre","InntektsmeldingFaktaPanel.tabell.cell.behandling.ingen":"Ingen","InntektsmeldingFaktaPanel.modal.heading":"All informasjon fra PDF’en er tilgjengelig i faktapanelet","InntektsmeldingFaktaPanel.modal.trigger":"Åpne PDF","InntektsmeldingFaktaPanel.modal.body":"PDF’en du skal åpne inneholder ikke noe annet enn det som står i faktapanelet. Du kan likevel åpne den hvis du ønsker det.","InntektsmeldingFaktaPanel.modal.button.primary":"Last ned som PDF","InntektsmeldingFaktaPanel.modal.button.secondary":"Avbryt","InntektsmeldingFaktaPanel.behandling.heading":"Behandling","InntektsmeldingFaktaPanel.behandling.bruktKunIDenne":"Brukt i denne behandlingen","InntektsmeldingFaktaPanel.behandling.ikkeBruktINoen":"Ikke brukt i noen behandlinger","InntektsmeldingFaktaPanel.behandling.bruktIAndre":"Brukt i andre behandlinger","InntektsmeldingFaktaPanel.behandling.bruktIDenneOgFlere":"Brukt i denne og andre behandlinger","InntektsmeldingFaktaPanel.behandling.opprettet":"Opprettet","InntektsmeldingFaktaPanel.behandling.avsluttet":"Avsluttet","InntektsmeldingFaktaPanel.innsendingstidspunkt":"Inntektsmelding sendt","InntektsmeldingFaktaPanel.arbeidsgiver.heading":"Arbeidsgiver","InntektsmeldingFaktaPanel.arbeidsgiver.navn":"Virksomhetsnavn","InntektsmeldingFaktaPanel.arbeidsgiver.underenhet":"Org.nr. for underenhet","InntektsmeldingFaktaPanel.kontaktperson.heading":"Kontaktperson fra arbeidsgiver","InntektsmeldingFaktaPanel.kontaktperson.navn":"Navn","InntektsmeldingFaktaPanel.kontaktperson.telefon":"Telefonnummer","InntektsmeldingFaktaPanel.månedsinntekt.heading":"Månedsinntekt","InntektsmeldingFaktaPanel.startDato.heading":"Første dag med {ytelse}","InntektsmeldingFaktaPanel.startDato.fraArbeidsgiver":"Oppgitt av arbeidsgiver","InntektsmeldingFaktaPanel.kilde.heading":"Kilde","InntektsmeldingFaktaPanel.kilde.nav":"Nav","InntektsmeldingFaktaPanel.kilde.altinn":"Altinn","InntektsmeldingFaktaPanel.kilde.lps":"Arbeidsgiver sitt lønns- og personalsystem(LPS)","InntektsmeldingFaktaPanel.refusjon.heading":"Refusjon","InntektsmeldingFaktaPanel.refusjon.ingen":"Ingen refusjon","InntektsmeldingFaktaPanel.refusjon.endring.periode":"Refusjonsbeløp på {kroner} fra {fom}","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.heading":"Naturalytelser som faller bort","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.ingen":"Ingen","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.fom":"Fra og med","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.tom":"Til og med","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.verdi":"Verdi pr måned"};var So=(e=>(e.ARBEID_TYPE="ArbeidType",e.AVSLAGSARSAK="Avslagsårsak",e.VENT_AARSAK="Venteårsak",e.BEHANDLING_AARSAK="BehandlingÅrsakType",e.KLAGE_AVVIST_AARSAK="KlageAvvistÅrsak",e.KLAGE_MEDHOLD_ARSAK="KlageMedholdÅrsak",e.KLAGE_HJEMMEL="KlageHjemmel",e.OMSORGSOVERTAKELSE_VILKAR_TYPE="OmsorgsovertakelseVilkårType",e.MEDLEMSKAP_MANUELL_VURDERING_TYPE="MedlemskapManuellVurderingType",e.VERGE_TYPE="VergeType",e.LANDKODER="Landkoder",e.MORS_AKTIVITET="MorsAktivitet",e.VIRKSOMHET_TYPE="VirksomhetType",e.OVERFOERING_AARSAK_TYPE="OverføringÅrsak",e.PERSONSTATUS_TYPE="PersonstatusType",e.FAGSAK_STATUS="FagsakStatus",e.FAGSAK_YTELSE="FagsakYtelseType",e.FORELDRE_TYPE="ForeldreType",e.FAMILIE_HENDELSE_TYPE="FamilieHendelseType",e.INNSYN_RESULTAT_TYPE="InnsynResultatType",e.BEHANDLING_TYPE="BehandlingType",e.OPPHOLD_ARSAK="OppholdÅrsak",e.UTSETTELSE_AARSAK_TYPE="UtsettelseÅrsak",e.OPPTJENING_AKTIVITET_TYPE="OpptjeningAktivitetType",e.UTTAK_PERIODE_TYPE="UttakPeriodeType",e.REVURDERING_VARSLING_ÅRSAK="RevurderingVarslingÅrsak",e.MANUELL_BEHANDLING_AARSAK="ManuellBehandlingÅrsak",e.PERIODE_RESULTAT_AARSAK="PeriodeResultatÅrsak",e.INNTEKTSKATEGORI="Inntektskategori",e.BEREGNINGSGRUNNLAG_ANDELTYPER="BeregningsgrunnlagAndeltype",e.AKTIVITET_STATUS="AktivitetStatus",e.ARBEIDSKATEGORI="Arbeidskategori",e.FAGSYSTEM="Fagsystem",e.REGION="Region",e.SIVILSTAND_TYPE="SivilstandType",e.FAKTA_OM_BEREGNING_TILFELLE="FaktaOmBeregningTilfelle",e.GRADERING_AVSLAG_AARSAK="GraderingAvslagÅrsak",e.SKJERMLENKE_TYPE="SkjermlenkeType",e.BEHANDLING_RESULTAT_TYPE="BehandlingResultatType",e.ARBEIDSFORHOLD_HANDLING_TYPE="ArbeidsforholdHandlingType",e.HISTORIKK_OPPLYSNING_TYPE="HistorikkOpplysningType",e.HISTORIKK_ENDRET_FELT_TYPE="HistorikkEndretFeltType",e.HISTORIKKINNSLAG_TYPE="HistorikkinnslagType",e.HISTORIKK_AKTOER="HistorikkAktør",e.BEHANDLING_STATUS="BehandlingStatus",e.FAR_SOEKER_TYPE="FarSøkerType",e.MEDLEMSKAP_DEKNING="MedlemskapDekningType",e.MEDLEMSKAP_TYPE="MedlemskapType",e.STOENADSKONTOTYPE="StønadskontoType",e.KONSEKVENS_FOR_YTELSEN="KonsekvensForYtelsen",e.UTTAK_ARBEID_TYPE="UttakArbeidType",e.UTTAK_UTSETTELSE_TYPE="UttakUtsettelseType",e.VILKAR_TYPE="VilkårType",e.AKTSOMHET="Aktsomhet",e.VURDERING="AnnenVurdering",e.VEDTAK_RESULTAT_TYPE="VedtakResultatType",e.PERMISJONSBESKRIVELSE_TYPE="PermisjonsbeskrivelseType",e.VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG="VurderArbeidsforholdHistorikkinnslag",e.TILBAKEKR_VIDERE_BEH="VidereBehandling",e.VURDER_AARSAK="VurderÅrsak",e.ANKE_OMGJOER_AARSAK="AnkeOmgjørÅrsak",e.AKTIVITETSKRAV_AVKLARING="KontrollerAktivitetskravAvklaring",e.OPPHOLDSTILLATELSE_TYPE="OppholdstillatelseType",e.FARESIGNAL_VURDERING="FaresignalVurdering",e.FORDELING_PERIODE_KILDE="FordelingPeriodeKilde",e.RELASJONSROLLE_TYPE="RelasjonsRolleType",e.FAGSAK_MARKERING="FagsakMarkering",e.ADRESSE_TYPE="AdresseType",e.NATURAL_YTELSE_TYPE="NaturalYtelseType",e))(So||{});const bb=(e,i,t,a)=>{let s=e[i];if(!s||s.length===0)return"";const l=s.find(d=>d.kode===t);return l?l.navn:""},Nb="_behandlingCircleIngen_giqi4_1",Sb="_behandlingCircleDenne_giqi4_5",Ib="_behandlingCircleAndre_giqi4_9",Ob="_container_giqi4_13",Lb="_ingenInntektsmeldinger_giqi4_20",$t={behandlingCircleIngen:Nb,behandlingCircleDenne:Sb,behandlingCircleAndre:Ib,container:Ob,ingenInntektsmeldinger:Lb},mr=({tittel:e,children:i})=>M.jsxs(kt,{children:[M.jsx(To,{size:"medium",children:e}),i]});mr.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingInfoBlokk",props:{tittel:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const gk=({inntektsmelding:e,behandling:i,alleBehandlinger:t,alleKodeverk:a})=>{const s=Zn(),l=e.tilknyttedeBehandlingIder.includes(i.uuid),d=t.filter(T=>e.tilknyttedeBehandlingIder.includes(T.uuid)),g=(()=>{const T=d.length;return l&&T>1?M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.behandling.bruktIDenneOgFlere"}):l?M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.behandling.bruktKunIDenne"}):T===0?M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.behandling.ikkeBruktINoen"}):M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.behandling.bruktIAndre"})})(),v=[...d].sort((T,f)=>new Date(T.opprettet).getTime()-new Date(f.opprettet).getTime());return M.jsxs(mr,{tittel:s.formatMessage({id:"InntektsmeldingFaktaPanel.behandling.heading"}),children:[g,M.jsx(xs,{children:v.map(T=>{var f;return M.jsx(xs.Item,{children:M.jsxs(kt,{children:[M.jsx("span",{children:(f=a.BehandlingType.find(({kode:h})=>h===T.type))==null?void 0:f.navn}),M.jsxs("span",{children:[M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.behandling.opprettet"})," ",M.jsx(za,{dateTimeString:T.opprettet,separator:"kl"})]}),T.avsluttet?M.jsxs("span",{children:[M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.behandling.avsluttet"})," ",M.jsx(za,{dateTimeString:T.avsluttet,separator:"kl"})]}):null]})},T.uuid)})})]})};gk.__docgenInfo={description:"",methods:[],displayName:"BehandlingsOversikt",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"any",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}[]`,required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"harVerge",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}}]},required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"string",required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},alleBehandlinger:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"any",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}[]`,required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"harVerge",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}`,signature:{properties:[{key:"behandlingTillatteOperasjoner",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}`,signature:{properties:[{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"VergeBehandlingmenyValg",required:!0}}]}}],raw:`Readonly<{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}>`,required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig: boolean;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"boolean",required:!0}}]}}],raw:"Brevmal[]",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"string",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"opptjeningAktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}`,signature:{properties:[{key:"aktivitetType",value:{name:"string",required:!0}},{key:"erEndring",value:{name:"boolean",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"orgnr",value:{name:"string",required:!1}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"privatpersonFødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}>`}],raw:"OpptjeningAktiviteter[]",required:!1}},{key:"beregningDto",value:{name:"signature",type:"object",raw:`{
  fastsattVarigEndringNaering: boolean;
  faktaOmBeregningTilfeller: string[];
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"boolean",required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"typeEndring",value:{name:"TypeEndring",required:!0}},{key:"erSlettet",value:{name:"boolean",required:!0}},{key:"erAvklart",value:{name:"boolean",required:!0}},{key:"erLagtTil",value:{name:"boolean",required:!0}},{key:"erEndret",value:{name:"boolean",required:!0}}]}}],raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}[]`,required:!1}}]}}],raw:`Readonly<{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}>`}],raw:"TotrinnskontrollAksjonspunkt[]",required:!0}}]}}],raw:`Readonly<{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`,required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"string",required:!1}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const Kb={"ValidationMessage.NotEmpty":"Feltet må fylles ut","ValidationMessage.MinLength":"Du må skrive minst {length} tegn","ValidationMessage.MaxLength":"Du kan skrive maksimalt {length} tegn","ValidationMessage.MinValue":"Feltet må være større eller lik {length}","ValidationMessage.MaxValue":"Feltet må være mindre eller lik {length}","ValidationMessage.InvalidDate":"Dato må skrives slik : dd.mm.åååå","ValidationMessage.DateNotBeforeOrEqual":"Dato må være før eller lik {limit}","ValidationMessage.DateNotAfterOrEqual":"Dato må være etter eller lik {limit}","ValidationMessage.DateRangesOverlapping":"Perioder kan ikke overlappe i tid","ValidationMessage.DateRangesOverlappingPeriodTypes":"Perioder kan ikke overlappe i tid (uttak, utsettelse, gradering, overforing, opphold)","ValidationMessage.DatesNotEqual":"Dato må være lik {value}","ValidationMessage.InvalidInteger":"Tallet kan ikke ha desimaler","ValidationMessage.InvalidDecimal":"Tallet kan ikke inneholde mer enn to desimaler","ValidationMessage.InvalidDatesInPeriod":"Periode må skrives slik : dd.mm.åååå - dd.mm.åååå","ValidationMessage.InvalidPeriod":"Startdato må være før eller lik sluttdato","ValidationMessage.InvalidPeriodRange":"Periode er utenfor opptjeningsperioden","ValidationMessage.InvalidNumber":"Feltet kan kun inneholde tall","ValidationMessage.maxLengthOrFodselsnr":"Du kan skrive maksimalt {length} tegn eller et fødselsnummer (11 siffer)","ValidationMessage.Registrering.TerminEllerFoedselMessage":"Fyll ut informasjon om termindato eller fødselsdato","ValidationMessage.InvalidFodselsnummerFormat":"Feltet må være et fødselsnummer (11 siffer)","ValidationMessage.InvalidFodselsnummer":"Ugyldig fødselsnummer","ValidationMessage.SammeFodselsnummerSomSoker":"Fødselsnummer til den andre forelderen kan ikke være det samme som søker.","ValidationMessage.InvalidText":"Feltet inneholder ugyldige tegn: {text}","ValidationMessage.InvalidValue":"Feltet inneholder en ugyldig verdi: {value}","ValidationMessage.ArrayMinLength":"Listen må ha lengde større enn: {length}","ValidationMessage.InvalidSaksnummerOrFodselsnummerFormat":"Ugyldig saksnummer eller fødselsnummer","ValidationMessage.InvalidOrganisasjonsnummer":"Ugyldig organisasjonsnummer.","ValidationMessage.InvalidOrganisasjonsnummerOrFodselsnr":"Ugyldig organisasjonsnummer eller fødselsnummer.","ValidationMessage.NoWhiteSpace":"Feltet kan ikke inneholde mellomrom."};mn(Kb);var kk=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function vk(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ek={exports:{}};(function(e,i){(function(t,a){e.exports=a()})(kk,function(){return function(t,a){a.prototype.isSameOrAfter=function(s,l){return this.isSame(s,l)||this.isAfter(s,l)}}})})(Ek);var Db=Ek.exports;const Pb=vk(Db);var fk={exports:{}};(function(e,i){(function(t,a){e.exports=a()})(kk,function(){return function(t,a){a.prototype.isSameOrBefore=function(s,l){return this.isSame(s,l)||this.isBefore(s,l)}}})})(fk);var Fb=fk.exports;const Mb=vk(Fb);Nr.extend(Pb);Nr.extend(Mb);var jb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Gb(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ht={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bd;function Bb(){if(Bd)return Ht;Bd=1;var e=Y,i=Symbol.for("react.element"),t=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(g,v,T){var f,h={},y=null,K=null;T!==void 0&&(y=""+T),v.key!==void 0&&(y=""+v.key),v.ref!==void 0&&(K=v.ref);for(f in v)a.call(v,f)&&!l.hasOwnProperty(f)&&(h[f]=v[f]);if(g&&g.defaultProps)for(f in v=g.defaultProps,v)h[f]===void 0&&(h[f]=v[f]);return{$$typeof:i,type:g,key:y,ref:K,props:h,_owner:s.current}}return Ht.Fragment=t,Ht.jsx=d,Ht.jsxs=d,Ht}Bb();var mk={exports:{}};(function(e,i){(function(t,a){e.exports=a()})(jb,function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},a=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,s=/\d/,l=/\d\d/,d=/\d\d?/,g=/\d*[^-_:/,()\s\d]+/,v={},T=function(N){return(N=+N)+(N>68?1900:2e3)},f=function(N){return function(D){this[N]=+D}},h=[/[+-]\d\d:?(\d\d)?|Z/,function(N){(this.zone||(this.zone={})).offset=function(D){if(!D||D==="Z")return 0;var q=D.match(/([+-]|\d\d)/g),L=60*q[1]+(+q[2]||0);return L===0?0:q[0]==="+"?-L:L}(N)}],y=function(N){var D=v[N];return D&&(D.indexOf?D:D.s.concat(D.f))},K=function(N,D){var q,L=v.meridiem;if(L){for(var Q=1;Q<=24;Q+=1)if(N.indexOf(L(Q,0,D))>-1){q=Q>12;break}}else q=N===(D?"pm":"PM");return q},j={A:[g,function(N){this.afternoon=K(N,!1)}],a:[g,function(N){this.afternoon=K(N,!0)}],Q:[s,function(N){this.month=3*(N-1)+1}],S:[s,function(N){this.milliseconds=100*+N}],SS:[l,function(N){this.milliseconds=10*+N}],SSS:[/\d{3}/,function(N){this.milliseconds=+N}],s:[d,f("seconds")],ss:[d,f("seconds")],m:[d,f("minutes")],mm:[d,f("minutes")],H:[d,f("hours")],h:[d,f("hours")],HH:[d,f("hours")],hh:[d,f("hours")],D:[d,f("day")],DD:[l,f("day")],Do:[g,function(N){var D=v.ordinal,q=N.match(/\d+/);if(this.day=q[0],D)for(var L=1;L<=31;L+=1)D(L).replace(/\[|\]/g,"")===N&&(this.day=L)}],w:[d,f("week")],ww:[l,f("week")],M:[d,f("month")],MM:[l,f("month")],MMM:[g,function(N){var D=y("months"),q=(y("monthsShort")||D.map(function(L){return L.slice(0,3)})).indexOf(N)+1;if(q<1)throw new Error;this.month=q%12||q}],MMMM:[g,function(N){var D=y("months").indexOf(N)+1;if(D<1)throw new Error;this.month=D%12||D}],Y:[/[+-]?\d+/,f("year")],YY:[l,function(N){this.year=T(N)}],YYYY:[/\d{4}/,f("year")],Z:h,ZZ:h};function R(N){var D,q;D=N,q=v&&v.formats;for(var L=(N=D.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(W,x,te){var le=te&&te.toUpperCase();return x||q[te]||t[te]||q[le].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(J,H,U){return H||U.slice(1)})})).match(a),Q=L.length,O=0;O<Q;O+=1){var w=L[O],I=j[w],b=I&&I[0],$=I&&I[1];L[O]=$?{regex:b,parser:$}:w.replace(/^\[|\]$/g,"")}return function(W){for(var x={},te=0,le=0;te<Q;te+=1){var J=L[te];if(typeof J=="string")le+=J.length;else{var H=J.regex,U=J.parser,Z=W.slice(le),C=H.exec(Z)[0];U.call(x,C),W=W.replace(C,"")}}return function(ie){var se=ie.afternoon;if(se!==void 0){var ue=ie.hours;se?ue<12&&(ie.hours+=12):ue===12&&(ie.hours=0),delete ie.afternoon}}(x),x}}return function(N,D,q){q.p.customParseFormat=!0,N&&N.parseTwoDigitYear&&(T=N.parseTwoDigitYear);var L=D.prototype,Q=L.parse;L.parse=function(O){var w=O.date,I=O.utc,b=O.args;this.$u=I;var $=b[1];if(typeof $=="string"){var W=b[2]===!0,x=b[3]===!0,te=W||x,le=b[2];x&&(le=b[2]),v=this.$locale(),!W&&le&&(v=q.Ls[le]),this.$d=function(Z,C,ie,se){try{if(["x","X"].indexOf(C)>-1)return new Date((C==="X"?1e3:1)*Z);var ue=R(C)(Z),De=ue.year,Me=ue.month,$e=ue.day,qe=ue.hours,cn=ue.minutes,qn=ue.seconds,Rn=ue.milliseconds,tn=ue.zone,Je=ue.week,en=new Date,Tn=$e||(De||Me?1:en.getDate()),xn=De||en.getFullYear(),an=0;De&&!Me||(an=Me>0?Me-1:en.getMonth());var Qn,pt=qe||0,_n=cn||0,$r=qn||0,ht=Rn||0;return tn?new Date(Date.UTC(xn,an,Tn,pt,_n,$r,ht+60*tn.offset*1e3)):ie?new Date(Date.UTC(xn,an,Tn,pt,_n,$r,ht)):(Qn=new Date(xn,an,Tn,pt,_n,$r,ht),Je&&(Qn=se(Qn).week(Je).toDate()),Qn)}catch{return new Date("")}}(w,$,I,q),this.init(),le&&le!==!0&&(this.$L=this.locale(le).$L),te&&w!=this.format($)&&(this.$d=new Date("")),v={}}else if($ instanceof Array)for(var J=$.length,H=1;H<=J;H+=1){b[1]=$[H-1];var U=q.apply(this,b);if(U.isValid()){this.$d=U.$d,this.$L=U.$L,this.init();break}H===J&&(this.$d=new Date(""))}else Q.call(this,O)}}})})(mk);var Vb=mk.exports;const wb=Gb(Vb);Nr.extend(wb);const ti={"AdresseVisning.Adresse":"Adresse","ForelderPanel.Soker":"Søker","ForelderPanel.AnnenForelder":"Annen forelder","AlleBarnPanel.Barn":"Barn","AlleBarnPanel.BarnNr":"Barn {nummer}","AlleBarnPanel.Fodt":"Født","AlleBarnPanel.Dod":"Død","PersonPanel.RolleOgNavn":"{rolle, select, BRUKER {Søker, } ANNEN_PART {Den andre forelderen, } BARN {Barnet, } other {} }{navn}","PersonPanel.Beskrivelse.Bruker":"Adresser for søker registrert i folkeregisteret gyldige for de siste 12 månedene","PersonPanel.Beskrivelse.Barn":"Adresser for barnet registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Beskrivelse.Annenpart":"Adresser for den andre forelderen registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Fodt":"Født {dato}","PersonPanel.Dod":"Død {dato}","AdresseTabell.IngenAdresse":"Ingen adresser funnet for {erAnnenpart, select, true {den andre forelderen} other {søker} }.","AdresseTabell.SammeAdresse":"Den andre forelderen har samme adresse som søker på skjæringstidspunktet","AdresseTabell.PeriodeLabel":"Periode","AdresseTabell.AdresseLabel":"Adresse","AdresseTabell.TypeLabel":"Type","MerkePanel.Dod":"DØD","MerkePanel.DodTittel":"Personen er død","MerkePanel.DodFodt":"DØDFØDT","MerkePanel.Diskresjon6":"Kode 6","MerkePanel.Diskresjon7":"Kode 7","MerkePanel.EgenAnsatt":"Nav","MerkePanel.Verge":"Verge","MerkePanel.Diskresjon6Tittel":"Personen har diskresjonsmerking kode 6","MerkePanel.Diskresjon7Tittel":"Personen har diskresjonsmerking kode 7","MerkePanel.EgenAnsattTittel":"Personen er ansatt i Nav","MerkePanel.VergeTittel":"Personen har verge","SubmitButton.ConfirmInformation":"Bekreft og fortsett","FaktaBegrunnelseTextField.BegrunnEndringene":"Begrunn endringene","FaktaBegrunnelseTextField.Vurdering":"Vurdering","FaktaBegrunnelseTextField.Begrunnelse":"Begrunnelse","FaktaKilde.Soknad":"FRA SØKNADEN","FaktaKilde.FREG":"FRA FOLKEREGISTERET","FaktaKilde.MEDL":"FRA MEDLEMSKAPSREGISTERET"};mn(ti);mn(ti);const Hb=(e,i)=>{const t=new Date(e.tom??ft),a=new Date(i.tom??ft);if(t>a)return-1;if(t<a)return 1;if(e.fom&&!i.fom)return-1;if(!e.fom&&i.fom)return 1;if(e.fom&&i.fom){const s=new Date(e.fom),l=new Date(i.fom);if(s>l)return-1;if(s<l)return 1}return 0};var Za={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Za.exports;(function(e,i){(function(){var t,a="4.17.21",s=200,l="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",d="Expected a function",g="Invalid `variable` option passed into `_.template`",v="__lodash_hash_undefined__",T=500,f="__lodash_placeholder__",h=1,y=2,K=4,j=1,R=2,N=1,D=2,q=4,L=8,Q=16,O=32,w=64,I=128,b=256,$=512,W=30,x="...",te=800,le=16,J=1,H=2,U=3,Z=1/0,C=9007199254740991,ie=17976931348623157e292,se=NaN,ue=4294967295,De=ue-1,Me=ue>>>1,$e=[["ary",I],["bind",N],["bindKey",D],["curry",L],["curryRight",Q],["flip",$],["partial",O],["partialRight",w],["rearg",b]],qe="[object Arguments]",cn="[object Array]",qn="[object AsyncFunction]",Rn="[object Boolean]",tn="[object Date]",Je="[object DOMException]",en="[object Error]",Tn="[object Function]",xn="[object GeneratorFunction]",an="[object Map]",Qn="[object Number]",pt="[object Null]",_n="[object Object]",$r="[object Promise]",ht="[object Proxy]",At="[object RegExp]",Yn="[object Set]",yt="[object String]",na="[object Symbol]",fv="[object Undefined]",ct="[object WeakMap]",mv="[object WeakSet]",Rt="[object ArrayBuffer]",Jr="[object DataView]",li="[object Float32Array]",ui="[object Float64Array]",di="[object Int8Array]",gi="[object Int16Array]",ki="[object Int32Array]",vi="[object Uint8Array]",Ei="[object Uint8ClampedArray]",fi="[object Uint16Array]",mi="[object Uint32Array]",Tv=/\b__p \+= '';/g,pv=/\b(__p \+=) '' \+/g,hv=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Fo=/&(?:amp|lt|gt|quot|#39);/g,Mo=/[&<>"']/g,Av=RegExp(Fo.source),yv=RegExp(Mo.source),cv=/<%-([\s\S]+?)%>/g,Rv=/<%([\s\S]+?)%>/g,jo=/<%=([\s\S]+?)%>/g,_v=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,bv=/^\w*$/,Nv=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ti=/[\\^$.*+?()[\]{}|]/g,Sv=RegExp(Ti.source),pi=/^\s+/,Iv=/\s/,Ov=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Lv=/\{\n\/\* \[wrapped with (.+)\] \*/,Kv=/,? & /,Dv=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Pv=/[()=,{}\[\]\/\s]/,Fv=/\\(\\)?/g,Mv=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Go=/\w*$/,jv=/^[-+]0x[0-9a-f]+$/i,Gv=/^0b[01]+$/i,Bv=/^\[object .+?Constructor\]$/,Vv=/^0o[0-7]+$/i,wv=/^(?:0|[1-9]\d*)$/,Hv=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ra=/($^)/,Uv=/['\n\r\u2028\u2029\\]/g,ta="\\ud800-\\udfff",qv="\\u0300-\\u036f",xv="\\ufe20-\\ufe2f",Yv="\\u20d0-\\u20ff",Bo=qv+xv+Yv,Vo="\\u2700-\\u27bf",wo="a-z\\xdf-\\xf6\\xf8-\\xff",Cv="\\xac\\xb1\\xd7\\xf7",$v="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Jv="\\u2000-\\u206f",Wv=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ho="A-Z\\xc0-\\xd6\\xd8-\\xde",Uo="\\ufe0e\\ufe0f",qo=Cv+$v+Jv+Wv,hi="['’]",zv="["+ta+"]",xo="["+qo+"]",aa="["+Bo+"]",Yo="\\d+",Zv="["+Vo+"]",Co="["+wo+"]",$o="[^"+ta+qo+Yo+Vo+wo+Ho+"]",Ai="\\ud83c[\\udffb-\\udfff]",Xv="(?:"+aa+"|"+Ai+")",Jo="[^"+ta+"]",yi="(?:\\ud83c[\\udde6-\\uddff]){2}",ci="[\\ud800-\\udbff][\\udc00-\\udfff]",Wr="["+Ho+"]",Wo="\\u200d",zo="(?:"+Co+"|"+$o+")",Qv="(?:"+Wr+"|"+$o+")",Zo="(?:"+hi+"(?:d|ll|m|re|s|t|ve))?",Xo="(?:"+hi+"(?:D|LL|M|RE|S|T|VE))?",Qo=Xv+"?",el="["+Uo+"]?",eE="(?:"+Wo+"(?:"+[Jo,yi,ci].join("|")+")"+el+Qo+")*",nE="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",rE="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",nl=el+Qo+eE,tE="(?:"+[Zv,yi,ci].join("|")+")"+nl,aE="(?:"+[Jo+aa+"?",aa,yi,ci,zv].join("|")+")",iE=RegExp(hi,"g"),sE=RegExp(aa,"g"),Ri=RegExp(Ai+"(?="+Ai+")|"+aE+nl,"g"),oE=RegExp([Wr+"?"+Co+"+"+Zo+"(?="+[xo,Wr,"$"].join("|")+")",Qv+"+"+Xo+"(?="+[xo,Wr+zo,"$"].join("|")+")",Wr+"?"+zo+"+"+Zo,Wr+"+"+Xo,rE,nE,Yo,tE].join("|"),"g"),lE=RegExp("["+Wo+ta+Bo+Uo+"]"),uE=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,dE=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],gE=-1,je={};je[li]=je[ui]=je[di]=je[gi]=je[ki]=je[vi]=je[Ei]=je[fi]=je[mi]=!0,je[qe]=je[cn]=je[Rt]=je[Rn]=je[Jr]=je[tn]=je[en]=je[Tn]=je[an]=je[Qn]=je[_n]=je[At]=je[Yn]=je[yt]=je[ct]=!1;var Fe={};Fe[qe]=Fe[cn]=Fe[Rt]=Fe[Jr]=Fe[Rn]=Fe[tn]=Fe[li]=Fe[ui]=Fe[di]=Fe[gi]=Fe[ki]=Fe[an]=Fe[Qn]=Fe[_n]=Fe[At]=Fe[Yn]=Fe[yt]=Fe[na]=Fe[vi]=Fe[Ei]=Fe[fi]=Fe[mi]=!0,Fe[en]=Fe[Tn]=Fe[ct]=!1;var kE={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},vE={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},EE={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},fE={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},mE=parseFloat,TE=parseInt,rl=typeof Vt=="object"&&Vt&&Vt.Object===Object&&Vt,pE=typeof self=="object"&&self&&self.Object===Object&&self,nn=rl||pE||Function("return this")(),_i=i&&!i.nodeType&&i,Or=_i&&!0&&e&&!e.nodeType&&e,tl=Or&&Or.exports===_i,bi=tl&&rl.process,Pn=function(){try{var c=Or&&Or.require&&Or.require("util").types;return c||bi&&bi.binding&&bi.binding("util")}catch{}}(),al=Pn&&Pn.isArrayBuffer,il=Pn&&Pn.isDate,sl=Pn&&Pn.isMap,ol=Pn&&Pn.isRegExp,ll=Pn&&Pn.isSet,ul=Pn&&Pn.isTypedArray;function bn(c,F,S){switch(S.length){case 0:return c.call(F);case 1:return c.call(F,S[0]);case 2:return c.call(F,S[0],S[1]);case 3:return c.call(F,S[0],S[1],S[2])}return c.apply(F,S)}function hE(c,F,S,X){for(var ke=-1,be=c==null?0:c.length;++ke<be;){var We=c[ke];F(X,We,S(We),c)}return X}function Fn(c,F){for(var S=-1,X=c==null?0:c.length;++S<X&&F(c[S],S,c)!==!1;);return c}function AE(c,F){for(var S=c==null?0:c.length;S--&&F(c[S],S,c)!==!1;);return c}function dl(c,F){for(var S=-1,X=c==null?0:c.length;++S<X;)if(!F(c[S],S,c))return!1;return!0}function Tr(c,F){for(var S=-1,X=c==null?0:c.length,ke=0,be=[];++S<X;){var We=c[S];F(We,S,c)&&(be[ke++]=We)}return be}function ia(c,F){var S=c==null?0:c.length;return!!S&&zr(c,F,0)>-1}function Ni(c,F,S){for(var X=-1,ke=c==null?0:c.length;++X<ke;)if(S(F,c[X]))return!0;return!1}function Be(c,F){for(var S=-1,X=c==null?0:c.length,ke=Array(X);++S<X;)ke[S]=F(c[S],S,c);return ke}function pr(c,F){for(var S=-1,X=F.length,ke=c.length;++S<X;)c[ke+S]=F[S];return c}function Si(c,F,S,X){var ke=-1,be=c==null?0:c.length;for(X&&be&&(S=c[++ke]);++ke<be;)S=F(S,c[ke],ke,c);return S}function yE(c,F,S,X){var ke=c==null?0:c.length;for(X&&ke&&(S=c[--ke]);ke--;)S=F(S,c[ke],ke,c);return S}function Ii(c,F){for(var S=-1,X=c==null?0:c.length;++S<X;)if(F(c[S],S,c))return!0;return!1}var cE=Oi("length");function RE(c){return c.split("")}function _E(c){return c.match(Dv)||[]}function gl(c,F,S){var X;return S(c,function(ke,be,We){if(F(ke,be,We))return X=be,!1}),X}function sa(c,F,S,X){for(var ke=c.length,be=S+(X?1:-1);X?be--:++be<ke;)if(F(c[be],be,c))return be;return-1}function zr(c,F,S){return F===F?jE(c,F,S):sa(c,kl,S)}function bE(c,F,S,X){for(var ke=S-1,be=c.length;++ke<be;)if(X(c[ke],F))return ke;return-1}function kl(c){return c!==c}function vl(c,F){var S=c==null?0:c.length;return S?Ki(c,F)/S:se}function Oi(c){return function(F){return F==null?t:F[c]}}function Li(c){return function(F){return c==null?t:c[F]}}function El(c,F,S,X,ke){return ke(c,function(be,We,Pe){S=X?(X=!1,be):F(S,be,We,Pe)}),S}function NE(c,F){var S=c.length;for(c.sort(F);S--;)c[S]=c[S].value;return c}function Ki(c,F){for(var S,X=-1,ke=c.length;++X<ke;){var be=F(c[X]);be!==t&&(S=S===t?be:S+be)}return S}function Di(c,F){for(var S=-1,X=Array(c);++S<c;)X[S]=F(S);return X}function SE(c,F){return Be(F,function(S){return[S,c[S]]})}function fl(c){return c&&c.slice(0,hl(c)+1).replace(pi,"")}function Nn(c){return function(F){return c(F)}}function Pi(c,F){return Be(F,function(S){return c[S]})}function _t(c,F){return c.has(F)}function ml(c,F){for(var S=-1,X=c.length;++S<X&&zr(F,c[S],0)>-1;);return S}function Tl(c,F){for(var S=c.length;S--&&zr(F,c[S],0)>-1;);return S}function IE(c,F){for(var S=c.length,X=0;S--;)c[S]===F&&++X;return X}var OE=Li(kE),LE=Li(vE);function KE(c){return"\\"+fE[c]}function DE(c,F){return c==null?t:c[F]}function Zr(c){return lE.test(c)}function PE(c){return uE.test(c)}function FE(c){for(var F,S=[];!(F=c.next()).done;)S.push(F.value);return S}function Fi(c){var F=-1,S=Array(c.size);return c.forEach(function(X,ke){S[++F]=[ke,X]}),S}function pl(c,F){return function(S){return c(F(S))}}function hr(c,F){for(var S=-1,X=c.length,ke=0,be=[];++S<X;){var We=c[S];(We===F||We===f)&&(c[S]=f,be[ke++]=S)}return be}function oa(c){var F=-1,S=Array(c.size);return c.forEach(function(X){S[++F]=X}),S}function ME(c){var F=-1,S=Array(c.size);return c.forEach(function(X){S[++F]=[X,X]}),S}function jE(c,F,S){for(var X=S-1,ke=c.length;++X<ke;)if(c[X]===F)return X;return-1}function GE(c,F,S){for(var X=S+1;X--;)if(c[X]===F)return X;return X}function Xr(c){return Zr(c)?VE(c):cE(c)}function Cn(c){return Zr(c)?wE(c):RE(c)}function hl(c){for(var F=c.length;F--&&Iv.test(c.charAt(F)););return F}var BE=Li(EE);function VE(c){for(var F=Ri.lastIndex=0;Ri.test(c);)++F;return F}function wE(c){return c.match(Ri)||[]}function HE(c){return c.match(oE)||[]}var UE=function c(F){F=F==null?nn:Qr.defaults(nn.Object(),F,Qr.pick(nn,dE));var S=F.Array,X=F.Date,ke=F.Error,be=F.Function,We=F.Math,Pe=F.Object,Mi=F.RegExp,qE=F.String,Mn=F.TypeError,la=S.prototype,xE=be.prototype,et=Pe.prototype,ua=F["__core-js_shared__"],da=xE.toString,Le=et.hasOwnProperty,YE=0,Al=function(){var n=/[^.]+$/.exec(ua&&ua.keys&&ua.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),ga=et.toString,CE=da.call(Pe),$E=nn._,JE=Mi("^"+da.call(Le).replace(Ti,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ka=tl?F.Buffer:t,Ar=F.Symbol,va=F.Uint8Array,yl=ka?ka.allocUnsafe:t,Ea=pl(Pe.getPrototypeOf,Pe),cl=Pe.create,Rl=et.propertyIsEnumerable,fa=la.splice,_l=Ar?Ar.isConcatSpreadable:t,bt=Ar?Ar.iterator:t,Lr=Ar?Ar.toStringTag:t,ma=function(){try{var n=Mr(Pe,"defineProperty");return n({},"",{}),n}catch{}}(),WE=F.clearTimeout!==nn.clearTimeout&&F.clearTimeout,zE=X&&X.now!==nn.Date.now&&X.now,ZE=F.setTimeout!==nn.setTimeout&&F.setTimeout,Ta=We.ceil,pa=We.floor,ji=Pe.getOwnPropertySymbols,XE=ka?ka.isBuffer:t,bl=F.isFinite,QE=la.join,ef=pl(Pe.keys,Pe),ze=We.max,sn=We.min,nf=X.now,rf=F.parseInt,Nl=We.random,tf=la.reverse,Gi=Mr(F,"DataView"),Nt=Mr(F,"Map"),Bi=Mr(F,"Promise"),nt=Mr(F,"Set"),St=Mr(F,"WeakMap"),It=Mr(Pe,"create"),ha=St&&new St,rt={},af=jr(Gi),sf=jr(Nt),of=jr(Bi),lf=jr(nt),uf=jr(St),Aa=Ar?Ar.prototype:t,Ot=Aa?Aa.valueOf:t,Sl=Aa?Aa.toString:t;function E(n){if(Ue(n)&&!ve(n)&&!(n instanceof he)){if(n instanceof jn)return n;if(Le.call(n,"__wrapped__"))return Iu(n)}return new jn(n)}var tt=function(){function n(){}return function(r){if(!we(r))return{};if(cl)return cl(r);n.prototype=r;var o=new n;return n.prototype=t,o}}();function ya(){}function jn(n,r){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=t}E.templateSettings={escape:cv,evaluate:Rv,interpolate:jo,variable:"",imports:{_:E}},E.prototype=ya.prototype,E.prototype.constructor=E,jn.prototype=tt(ya.prototype),jn.prototype.constructor=jn;function he(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ue,this.__views__=[]}function df(){var n=new he(this.__wrapped__);return n.__actions__=pn(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=pn(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=pn(this.__views__),n}function gf(){if(this.__filtered__){var n=new he(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function kf(){var n=this.__wrapped__.value(),r=this.__dir__,o=ve(n),u=r<0,k=o?n.length:0,m=_m(0,k,this.__views__),p=m.start,A=m.end,_=A-p,G=u?A:p-1,B=this.__iteratees__,V=B.length,z=0,re=sn(_,this.__takeCount__);if(!o||!u&&k==_&&re==_)return Zl(n,this.__actions__);var de=[];e:for(;_--&&z<re;){G+=r;for(var fe=-1,ge=n[G];++fe<V;){var Te=B[fe],Ae=Te.iteratee,On=Te.type,dn=Ae(ge);if(On==H)ge=dn;else if(!dn){if(On==J)continue e;break e}}de[z++]=ge}return de}he.prototype=tt(ya.prototype),he.prototype.constructor=he;function Kr(n){var r=-1,o=n==null?0:n.length;for(this.clear();++r<o;){var u=n[r];this.set(u[0],u[1])}}function vf(){this.__data__=It?It(null):{},this.size=0}function Ef(n){var r=this.has(n)&&delete this.__data__[n];return this.size-=r?1:0,r}function ff(n){var r=this.__data__;if(It){var o=r[n];return o===v?t:o}return Le.call(r,n)?r[n]:t}function mf(n){var r=this.__data__;return It?r[n]!==t:Le.call(r,n)}function Tf(n,r){var o=this.__data__;return this.size+=this.has(n)?0:1,o[n]=It&&r===t?v:r,this}Kr.prototype.clear=vf,Kr.prototype.delete=Ef,Kr.prototype.get=ff,Kr.prototype.has=mf,Kr.prototype.set=Tf;function sr(n){var r=-1,o=n==null?0:n.length;for(this.clear();++r<o;){var u=n[r];this.set(u[0],u[1])}}function pf(){this.__data__=[],this.size=0}function hf(n){var r=this.__data__,o=ca(r,n);if(o<0)return!1;var u=r.length-1;return o==u?r.pop():fa.call(r,o,1),--this.size,!0}function Af(n){var r=this.__data__,o=ca(r,n);return o<0?t:r[o][1]}function yf(n){return ca(this.__data__,n)>-1}function cf(n,r){var o=this.__data__,u=ca(o,n);return u<0?(++this.size,o.push([n,r])):o[u][1]=r,this}sr.prototype.clear=pf,sr.prototype.delete=hf,sr.prototype.get=Af,sr.prototype.has=yf,sr.prototype.set=cf;function or(n){var r=-1,o=n==null?0:n.length;for(this.clear();++r<o;){var u=n[r];this.set(u[0],u[1])}}function Rf(){this.size=0,this.__data__={hash:new Kr,map:new(Nt||sr),string:new Kr}}function _f(n){var r=Fa(this,n).delete(n);return this.size-=r?1:0,r}function bf(n){return Fa(this,n).get(n)}function Nf(n){return Fa(this,n).has(n)}function Sf(n,r){var o=Fa(this,n),u=o.size;return o.set(n,r),this.size+=o.size==u?0:1,this}or.prototype.clear=Rf,or.prototype.delete=_f,or.prototype.get=bf,or.prototype.has=Nf,or.prototype.set=Sf;function Dr(n){var r=-1,o=n==null?0:n.length;for(this.__data__=new or;++r<o;)this.add(n[r])}function If(n){return this.__data__.set(n,v),this}function Of(n){return this.__data__.has(n)}Dr.prototype.add=Dr.prototype.push=If,Dr.prototype.has=Of;function $n(n){var r=this.__data__=new sr(n);this.size=r.size}function Lf(){this.__data__=new sr,this.size=0}function Kf(n){var r=this.__data__,o=r.delete(n);return this.size=r.size,o}function Df(n){return this.__data__.get(n)}function Pf(n){return this.__data__.has(n)}function Ff(n,r){var o=this.__data__;if(o instanceof sr){var u=o.__data__;if(!Nt||u.length<s-1)return u.push([n,r]),this.size=++o.size,this;o=this.__data__=new or(u)}return o.set(n,r),this.size=o.size,this}$n.prototype.clear=Lf,$n.prototype.delete=Kf,$n.prototype.get=Df,$n.prototype.has=Pf,$n.prototype.set=Ff;function Il(n,r){var o=ve(n),u=!o&&Gr(n),k=!o&&!u&&br(n),m=!o&&!u&&!k&&ot(n),p=o||u||k||m,A=p?Di(n.length,qE):[],_=A.length;for(var G in n)(r||Le.call(n,G))&&!(p&&(G=="length"||k&&(G=="offset"||G=="parent")||m&&(G=="buffer"||G=="byteLength"||G=="byteOffset")||gr(G,_)))&&A.push(G);return A}function Ol(n){var r=n.length;return r?n[Wi(0,r-1)]:t}function Mf(n,r){return Ma(pn(n),Pr(r,0,n.length))}function jf(n){return Ma(pn(n))}function Vi(n,r,o){(o!==t&&!Jn(n[r],o)||o===t&&!(r in n))&&lr(n,r,o)}function Lt(n,r,o){var u=n[r];(!(Le.call(n,r)&&Jn(u,o))||o===t&&!(r in n))&&lr(n,r,o)}function ca(n,r){for(var o=n.length;o--;)if(Jn(n[o][0],r))return o;return-1}function Gf(n,r,o,u){return yr(n,function(k,m,p){r(u,k,o(k),p)}),u}function Ll(n,r){return n&&nr(r,Xe(r),n)}function Bf(n,r){return n&&nr(r,An(r),n)}function lr(n,r,o){r=="__proto__"&&ma?ma(n,r,{configurable:!0,enumerable:!0,value:o,writable:!0}):n[r]=o}function wi(n,r){for(var o=-1,u=r.length,k=S(u),m=n==null;++o<u;)k[o]=m?t:As(n,r[o]);return k}function Pr(n,r,o){return n===n&&(o!==t&&(n=n<=o?n:o),r!==t&&(n=n>=r?n:r)),n}function Gn(n,r,o,u,k,m){var p,A=r&h,_=r&y,G=r&K;if(o&&(p=k?o(n,u,k,m):o(n)),p!==t)return p;if(!we(n))return n;var B=ve(n);if(B){if(p=Nm(n),!A)return pn(n,p)}else{var V=on(n),z=V==Tn||V==xn;if(br(n))return eu(n,A);if(V==_n||V==qe||z&&!k){if(p=_||z?{}:hu(n),!A)return _?fm(n,Bf(p,n)):Em(n,Ll(p,n))}else{if(!Fe[V])return k?n:{};p=Sm(n,V,A)}}m||(m=new $n);var re=m.get(n);if(re)return re;m.set(n,p),Ju(n)?n.forEach(function(ge){p.add(Gn(ge,r,o,ge,n,m))}):Cu(n)&&n.forEach(function(ge,Te){p.set(Te,Gn(ge,r,o,Te,n,m))});var de=G?_?ss:is:_?An:Xe,fe=B?t:de(n);return Fn(fe||n,function(ge,Te){fe&&(Te=ge,ge=n[Te]),Lt(p,Te,Gn(ge,r,o,Te,n,m))}),p}function Vf(n){var r=Xe(n);return function(o){return Kl(o,n,r)}}function Kl(n,r,o){var u=o.length;if(n==null)return!u;for(n=Pe(n);u--;){var k=o[u],m=r[k],p=n[k];if(p===t&&!(k in n)||!m(p))return!1}return!0}function Dl(n,r,o){if(typeof n!="function")throw new Mn(d);return Gt(function(){n.apply(t,o)},r)}function Kt(n,r,o,u){var k=-1,m=ia,p=!0,A=n.length,_=[],G=r.length;if(!A)return _;o&&(r=Be(r,Nn(o))),u?(m=Ni,p=!1):r.length>=s&&(m=_t,p=!1,r=new Dr(r));e:for(;++k<A;){var B=n[k],V=o==null?B:o(B);if(B=u||B!==0?B:0,p&&V===V){for(var z=G;z--;)if(r[z]===V)continue e;_.push(B)}else m(r,V,u)||_.push(B)}return _}var yr=iu(er),Pl=iu(Ui,!0);function wf(n,r){var o=!0;return yr(n,function(u,k,m){return o=!!r(u,k,m),o}),o}function Ra(n,r,o){for(var u=-1,k=n.length;++u<k;){var m=n[u],p=r(m);if(p!=null&&(A===t?p===p&&!In(p):o(p,A)))var A=p,_=m}return _}function Hf(n,r,o,u){var k=n.length;for(o=Ee(o),o<0&&(o=-o>k?0:k+o),u=u===t||u>k?k:Ee(u),u<0&&(u+=k),u=o>u?0:zu(u);o<u;)n[o++]=r;return n}function Fl(n,r){var o=[];return yr(n,function(u,k,m){r(u,k,m)&&o.push(u)}),o}function rn(n,r,o,u,k){var m=-1,p=n.length;for(o||(o=Om),k||(k=[]);++m<p;){var A=n[m];r>0&&o(A)?r>1?rn(A,r-1,o,u,k):pr(k,A):u||(k[k.length]=A)}return k}var Hi=su(),Ml=su(!0);function er(n,r){return n&&Hi(n,r,Xe)}function Ui(n,r){return n&&Ml(n,r,Xe)}function _a(n,r){return Tr(r,function(o){return kr(n[o])})}function Fr(n,r){r=Rr(r,n);for(var o=0,u=r.length;n!=null&&o<u;)n=n[rr(r[o++])];return o&&o==u?n:t}function jl(n,r,o){var u=r(n);return ve(n)?u:pr(u,o(n))}function ln(n){return n==null?n===t?fv:pt:Lr&&Lr in Pe(n)?Rm(n):jm(n)}function qi(n,r){return n>r}function Uf(n,r){return n!=null&&Le.call(n,r)}function qf(n,r){return n!=null&&r in Pe(n)}function xf(n,r,o){return n>=sn(r,o)&&n<ze(r,o)}function xi(n,r,o){for(var u=o?Ni:ia,k=n[0].length,m=n.length,p=m,A=S(m),_=1/0,G=[];p--;){var B=n[p];p&&r&&(B=Be(B,Nn(r))),_=sn(B.length,_),A[p]=!o&&(r||k>=120&&B.length>=120)?new Dr(p&&B):t}B=n[0];var V=-1,z=A[0];e:for(;++V<k&&G.length<_;){var re=B[V],de=r?r(re):re;if(re=o||re!==0?re:0,!(z?_t(z,de):u(G,de,o))){for(p=m;--p;){var fe=A[p];if(!(fe?_t(fe,de):u(n[p],de,o)))continue e}z&&z.push(de),G.push(re)}}return G}function Yf(n,r,o,u){return er(n,function(k,m,p){r(u,o(k),m,p)}),u}function Dt(n,r,o){r=Rr(r,n),n=Ru(n,r);var u=n==null?n:n[rr(Vn(r))];return u==null?t:bn(u,n,o)}function Gl(n){return Ue(n)&&ln(n)==qe}function Cf(n){return Ue(n)&&ln(n)==Rt}function $f(n){return Ue(n)&&ln(n)==tn}function Pt(n,r,o,u,k){return n===r?!0:n==null||r==null||!Ue(n)&&!Ue(r)?n!==n&&r!==r:Jf(n,r,o,u,Pt,k)}function Jf(n,r,o,u,k,m){var p=ve(n),A=ve(r),_=p?cn:on(n),G=A?cn:on(r);_=_==qe?_n:_,G=G==qe?_n:G;var B=_==_n,V=G==_n,z=_==G;if(z&&br(n)){if(!br(r))return!1;p=!0,B=!1}if(z&&!B)return m||(m=new $n),p||ot(n)?mu(n,r,o,u,k,m):ym(n,r,_,o,u,k,m);if(!(o&j)){var re=B&&Le.call(n,"__wrapped__"),de=V&&Le.call(r,"__wrapped__");if(re||de){var fe=re?n.value():n,ge=de?r.value():r;return m||(m=new $n),k(fe,ge,o,u,m)}}return z?(m||(m=new $n),cm(n,r,o,u,k,m)):!1}function Wf(n){return Ue(n)&&on(n)==an}function Yi(n,r,o,u){var k=o.length,m=k,p=!u;if(n==null)return!m;for(n=Pe(n);k--;){var A=o[k];if(p&&A[2]?A[1]!==n[A[0]]:!(A[0]in n))return!1}for(;++k<m;){A=o[k];var _=A[0],G=n[_],B=A[1];if(p&&A[2]){if(G===t&&!(_ in n))return!1}else{var V=new $n;if(u)var z=u(G,B,_,n,r,V);if(!(z===t?Pt(B,G,j|R,u,V):z))return!1}}return!0}function Bl(n){if(!we(n)||Km(n))return!1;var r=kr(n)?JE:Bv;return r.test(jr(n))}function zf(n){return Ue(n)&&ln(n)==At}function Zf(n){return Ue(n)&&on(n)==Yn}function Xf(n){return Ue(n)&&Ha(n.length)&&!!je[ln(n)]}function Vl(n){return typeof n=="function"?n:n==null?yn:typeof n=="object"?ve(n)?Ul(n[0],n[1]):Hl(n):od(n)}function Ci(n){if(!jt(n))return ef(n);var r=[];for(var o in Pe(n))Le.call(n,o)&&o!="constructor"&&r.push(o);return r}function Qf(n){if(!we(n))return Mm(n);var r=jt(n),o=[];for(var u in n)u=="constructor"&&(r||!Le.call(n,u))||o.push(u);return o}function $i(n,r){return n<r}function wl(n,r){var o=-1,u=hn(n)?S(n.length):[];return yr(n,function(k,m,p){u[++o]=r(k,m,p)}),u}function Hl(n){var r=ls(n);return r.length==1&&r[0][2]?yu(r[0][0],r[0][1]):function(o){return o===n||Yi(o,n,r)}}function Ul(n,r){return ds(n)&&Au(r)?yu(rr(n),r):function(o){var u=As(o,n);return u===t&&u===r?ys(o,n):Pt(r,u,j|R)}}function ba(n,r,o,u,k){n!==r&&Hi(r,function(m,p){if(k||(k=new $n),we(m))em(n,r,p,o,ba,u,k);else{var A=u?u(ks(n,p),m,p+"",n,r,k):t;A===t&&(A=m),Vi(n,p,A)}},An)}function em(n,r,o,u,k,m,p){var A=ks(n,o),_=ks(r,o),G=p.get(_);if(G){Vi(n,o,G);return}var B=m?m(A,_,o+"",n,r,p):t,V=B===t;if(V){var z=ve(_),re=!z&&br(_),de=!z&&!re&&ot(_);B=_,z||re||de?ve(A)?B=A:xe(A)?B=pn(A):re?(V=!1,B=eu(_,!0)):de?(V=!1,B=nu(_,!0)):B=[]:Bt(_)||Gr(_)?(B=A,Gr(A)?B=Zu(A):(!we(A)||kr(A))&&(B=hu(_))):V=!1}V&&(p.set(_,B),k(B,_,u,m,p),p.delete(_)),Vi(n,o,B)}function ql(n,r){var o=n.length;if(o)return r+=r<0?o:0,gr(r,o)?n[r]:t}function xl(n,r,o){r.length?r=Be(r,function(m){return ve(m)?function(p){return Fr(p,m.length===1?m[0]:m)}:m}):r=[yn];var u=-1;r=Be(r,Nn(oe()));var k=wl(n,function(m,p,A){var _=Be(r,function(G){return G(m)});return{criteria:_,index:++u,value:m}});return NE(k,function(m,p){return vm(m,p,o)})}function nm(n,r){return Yl(n,r,function(o,u){return ys(n,u)})}function Yl(n,r,o){for(var u=-1,k=r.length,m={};++u<k;){var p=r[u],A=Fr(n,p);o(A,p)&&Ft(m,Rr(p,n),A)}return m}function rm(n){return function(r){return Fr(r,n)}}function Ji(n,r,o,u){var k=u?bE:zr,m=-1,p=r.length,A=n;for(n===r&&(r=pn(r)),o&&(A=Be(n,Nn(o)));++m<p;)for(var _=0,G=r[m],B=o?o(G):G;(_=k(A,B,_,u))>-1;)A!==n&&fa.call(A,_,1),fa.call(n,_,1);return n}function Cl(n,r){for(var o=n?r.length:0,u=o-1;o--;){var k=r[o];if(o==u||k!==m){var m=k;gr(k)?fa.call(n,k,1):Xi(n,k)}}return n}function Wi(n,r){return n+pa(Nl()*(r-n+1))}function tm(n,r,o,u){for(var k=-1,m=ze(Ta((r-n)/(o||1)),0),p=S(m);m--;)p[u?m:++k]=n,n+=o;return p}function zi(n,r){var o="";if(!n||r<1||r>C)return o;do r%2&&(o+=n),r=pa(r/2),r&&(n+=n);while(r);return o}function me(n,r){return vs(cu(n,r,yn),n+"")}function am(n){return Ol(lt(n))}function im(n,r){var o=lt(n);return Ma(o,Pr(r,0,o.length))}function Ft(n,r,o,u){if(!we(n))return n;r=Rr(r,n);for(var k=-1,m=r.length,p=m-1,A=n;A!=null&&++k<m;){var _=rr(r[k]),G=o;if(_==="__proto__"||_==="constructor"||_==="prototype")return n;if(k!=p){var B=A[_];G=u?u(B,_,A):t,G===t&&(G=we(B)?B:gr(r[k+1])?[]:{})}Lt(A,_,G),A=A[_]}return n}var $l=ha?function(n,r){return ha.set(n,r),n}:yn,sm=ma?function(n,r){return ma(n,"toString",{configurable:!0,enumerable:!1,value:Rs(r),writable:!0})}:yn;function om(n){return Ma(lt(n))}function Bn(n,r,o){var u=-1,k=n.length;r<0&&(r=-r>k?0:k+r),o=o>k?k:o,o<0&&(o+=k),k=r>o?0:o-r>>>0,r>>>=0;for(var m=S(k);++u<k;)m[u]=n[u+r];return m}function lm(n,r){var o;return yr(n,function(u,k,m){return o=r(u,k,m),!o}),!!o}function Na(n,r,o){var u=0,k=n==null?u:n.length;if(typeof r=="number"&&r===r&&k<=Me){for(;u<k;){var m=u+k>>>1,p=n[m];p!==null&&!In(p)&&(o?p<=r:p<r)?u=m+1:k=m}return k}return Zi(n,r,yn,o)}function Zi(n,r,o,u){var k=0,m=n==null?0:n.length;if(m===0)return 0;r=o(r);for(var p=r!==r,A=r===null,_=In(r),G=r===t;k<m;){var B=pa((k+m)/2),V=o(n[B]),z=V!==t,re=V===null,de=V===V,fe=In(V);if(p)var ge=u||de;else G?ge=de&&(u||z):A?ge=de&&z&&(u||!re):_?ge=de&&z&&!re&&(u||!fe):re||fe?ge=!1:ge=u?V<=r:V<r;ge?k=B+1:m=B}return sn(m,De)}function Jl(n,r){for(var o=-1,u=n.length,k=0,m=[];++o<u;){var p=n[o],A=r?r(p):p;if(!o||!Jn(A,_)){var _=A;m[k++]=p===0?0:p}}return m}function Wl(n){return typeof n=="number"?n:In(n)?se:+n}function Sn(n){if(typeof n=="string")return n;if(ve(n))return Be(n,Sn)+"";if(In(n))return Sl?Sl.call(n):"";var r=n+"";return r=="0"&&1/n==-Z?"-0":r}function cr(n,r,o){var u=-1,k=ia,m=n.length,p=!0,A=[],_=A;if(o)p=!1,k=Ni;else if(m>=s){var G=r?null:hm(n);if(G)return oa(G);p=!1,k=_t,_=new Dr}else _=r?[]:A;e:for(;++u<m;){var B=n[u],V=r?r(B):B;if(B=o||B!==0?B:0,p&&V===V){for(var z=_.length;z--;)if(_[z]===V)continue e;r&&_.push(V),A.push(B)}else k(_,V,o)||(_!==A&&_.push(V),A.push(B))}return A}function Xi(n,r){return r=Rr(r,n),n=Ru(n,r),n==null||delete n[rr(Vn(r))]}function zl(n,r,o,u){return Ft(n,r,o(Fr(n,r)),u)}function Sa(n,r,o,u){for(var k=n.length,m=u?k:-1;(u?m--:++m<k)&&r(n[m],m,n););return o?Bn(n,u?0:m,u?m+1:k):Bn(n,u?m+1:0,u?k:m)}function Zl(n,r){var o=n;return o instanceof he&&(o=o.value()),Si(r,function(u,k){return k.func.apply(k.thisArg,pr([u],k.args))},o)}function Qi(n,r,o){var u=n.length;if(u<2)return u?cr(n[0]):[];for(var k=-1,m=S(u);++k<u;)for(var p=n[k],A=-1;++A<u;)A!=k&&(m[k]=Kt(m[k]||p,n[A],r,o));return cr(rn(m,1),r,o)}function Xl(n,r,o){for(var u=-1,k=n.length,m=r.length,p={};++u<k;){var A=u<m?r[u]:t;o(p,n[u],A)}return p}function es(n){return xe(n)?n:[]}function ns(n){return typeof n=="function"?n:yn}function Rr(n,r){return ve(n)?n:ds(n,r)?[n]:Su(Ne(n))}var um=me;function _r(n,r,o){var u=n.length;return o=o===t?u:o,!r&&o>=u?n:Bn(n,r,o)}var Ql=WE||function(n){return nn.clearTimeout(n)};function eu(n,r){if(r)return n.slice();var o=n.length,u=yl?yl(o):new n.constructor(o);return n.copy(u),u}function rs(n){var r=new n.constructor(n.byteLength);return new va(r).set(new va(n)),r}function dm(n,r){var o=r?rs(n.buffer):n.buffer;return new n.constructor(o,n.byteOffset,n.byteLength)}function gm(n){var r=new n.constructor(n.source,Go.exec(n));return r.lastIndex=n.lastIndex,r}function km(n){return Ot?Pe(Ot.call(n)):{}}function nu(n,r){var o=r?rs(n.buffer):n.buffer;return new n.constructor(o,n.byteOffset,n.length)}function ru(n,r){if(n!==r){var o=n!==t,u=n===null,k=n===n,m=In(n),p=r!==t,A=r===null,_=r===r,G=In(r);if(!A&&!G&&!m&&n>r||m&&p&&_&&!A&&!G||u&&p&&_||!o&&_||!k)return 1;if(!u&&!m&&!G&&n<r||G&&o&&k&&!u&&!m||A&&o&&k||!p&&k||!_)return-1}return 0}function vm(n,r,o){for(var u=-1,k=n.criteria,m=r.criteria,p=k.length,A=o.length;++u<p;){var _=ru(k[u],m[u]);if(_){if(u>=A)return _;var G=o[u];return _*(G=="desc"?-1:1)}}return n.index-r.index}function tu(n,r,o,u){for(var k=-1,m=n.length,p=o.length,A=-1,_=r.length,G=ze(m-p,0),B=S(_+G),V=!u;++A<_;)B[A]=r[A];for(;++k<p;)(V||k<m)&&(B[o[k]]=n[k]);for(;G--;)B[A++]=n[k++];return B}function au(n,r,o,u){for(var k=-1,m=n.length,p=-1,A=o.length,_=-1,G=r.length,B=ze(m-A,0),V=S(B+G),z=!u;++k<B;)V[k]=n[k];for(var re=k;++_<G;)V[re+_]=r[_];for(;++p<A;)(z||k<m)&&(V[re+o[p]]=n[k++]);return V}function pn(n,r){var o=-1,u=n.length;for(r||(r=S(u));++o<u;)r[o]=n[o];return r}function nr(n,r,o,u){var k=!o;o||(o={});for(var m=-1,p=r.length;++m<p;){var A=r[m],_=u?u(o[A],n[A],A,o,n):t;_===t&&(_=n[A]),k?lr(o,A,_):Lt(o,A,_)}return o}function Em(n,r){return nr(n,us(n),r)}function fm(n,r){return nr(n,Tu(n),r)}function Ia(n,r){return function(o,u){var k=ve(o)?hE:Gf,m=r?r():{};return k(o,n,oe(u,2),m)}}function at(n){return me(function(r,o){var u=-1,k=o.length,m=k>1?o[k-1]:t,p=k>2?o[2]:t;for(m=n.length>3&&typeof m=="function"?(k--,m):t,p&&un(o[0],o[1],p)&&(m=k<3?t:m,k=1),r=Pe(r);++u<k;){var A=o[u];A&&n(r,A,u,m)}return r})}function iu(n,r){return function(o,u){if(o==null)return o;if(!hn(o))return n(o,u);for(var k=o.length,m=r?k:-1,p=Pe(o);(r?m--:++m<k)&&u(p[m],m,p)!==!1;);return o}}function su(n){return function(r,o,u){for(var k=-1,m=Pe(r),p=u(r),A=p.length;A--;){var _=p[n?A:++k];if(o(m[_],_,m)===!1)break}return r}}function mm(n,r,o){var u=r&N,k=Mt(n);function m(){var p=this&&this!==nn&&this instanceof m?k:n;return p.apply(u?o:this,arguments)}return m}function ou(n){return function(r){r=Ne(r);var o=Zr(r)?Cn(r):t,u=o?o[0]:r.charAt(0),k=o?_r(o,1).join(""):r.slice(1);return u[n]()+k}}function it(n){return function(r){return Si(id(ad(r).replace(iE,"")),n,"")}}function Mt(n){return function(){var r=arguments;switch(r.length){case 0:return new n;case 1:return new n(r[0]);case 2:return new n(r[0],r[1]);case 3:return new n(r[0],r[1],r[2]);case 4:return new n(r[0],r[1],r[2],r[3]);case 5:return new n(r[0],r[1],r[2],r[3],r[4]);case 6:return new n(r[0],r[1],r[2],r[3],r[4],r[5]);case 7:return new n(r[0],r[1],r[2],r[3],r[4],r[5],r[6])}var o=tt(n.prototype),u=n.apply(o,r);return we(u)?u:o}}function Tm(n,r,o){var u=Mt(n);function k(){for(var m=arguments.length,p=S(m),A=m,_=st(k);A--;)p[A]=arguments[A];var G=m<3&&p[0]!==_&&p[m-1]!==_?[]:hr(p,_);if(m-=G.length,m<o)return ku(n,r,Oa,k.placeholder,t,p,G,t,t,o-m);var B=this&&this!==nn&&this instanceof k?u:n;return bn(B,this,p)}return k}function lu(n){return function(r,o,u){var k=Pe(r);if(!hn(r)){var m=oe(o,3);r=Xe(r),o=function(A){return m(k[A],A,k)}}var p=n(r,o,u);return p>-1?k[m?r[p]:p]:t}}function uu(n){return dr(function(r){var o=r.length,u=o,k=jn.prototype.thru;for(n&&r.reverse();u--;){var m=r[u];if(typeof m!="function")throw new Mn(d);if(k&&!p&&Pa(m)=="wrapper")var p=new jn([],!0)}for(u=p?u:o;++u<o;){m=r[u];var A=Pa(m),_=A=="wrapper"?os(m):t;_&&gs(_[0])&&_[1]==(I|L|O|b)&&!_[4].length&&_[9]==1?p=p[Pa(_[0])].apply(p,_[3]):p=m.length==1&&gs(m)?p[A]():p.thru(m)}return function(){var G=arguments,B=G[0];if(p&&G.length==1&&ve(B))return p.plant(B).value();for(var V=0,z=o?r[V].apply(this,G):B;++V<o;)z=r[V].call(this,z);return z}})}function Oa(n,r,o,u,k,m,p,A,_,G){var B=r&I,V=r&N,z=r&D,re=r&(L|Q),de=r&$,fe=z?t:Mt(n);function ge(){for(var Te=arguments.length,Ae=S(Te),On=Te;On--;)Ae[On]=arguments[On];if(re)var dn=st(ge),Ln=IE(Ae,dn);if(u&&(Ae=tu(Ae,u,k,re)),m&&(Ae=au(Ae,m,p,re)),Te-=Ln,re&&Te<G){var Ye=hr(Ae,dn);return ku(n,r,Oa,ge.placeholder,o,Ae,Ye,A,_,G-Te)}var Wn=V?o:this,Er=z?Wn[n]:n;return Te=Ae.length,A?Ae=Gm(Ae,A):de&&Te>1&&Ae.reverse(),B&&_<Te&&(Ae.length=_),this&&this!==nn&&this instanceof ge&&(Er=fe||Mt(Er)),Er.apply(Wn,Ae)}return ge}function du(n,r){return function(o,u){return Yf(o,n,r(u),{})}}function La(n,r){return function(o,u){var k;if(o===t&&u===t)return r;if(o!==t&&(k=o),u!==t){if(k===t)return u;typeof o=="string"||typeof u=="string"?(o=Sn(o),u=Sn(u)):(o=Wl(o),u=Wl(u)),k=n(o,u)}return k}}function ts(n){return dr(function(r){return r=Be(r,Nn(oe())),me(function(o){var u=this;return n(r,function(k){return bn(k,u,o)})})})}function Ka(n,r){r=r===t?" ":Sn(r);var o=r.length;if(o<2)return o?zi(r,n):r;var u=zi(r,Ta(n/Xr(r)));return Zr(r)?_r(Cn(u),0,n).join(""):u.slice(0,n)}function pm(n,r,o,u){var k=r&N,m=Mt(n);function p(){for(var A=-1,_=arguments.length,G=-1,B=u.length,V=S(B+_),z=this&&this!==nn&&this instanceof p?m:n;++G<B;)V[G]=u[G];for(;_--;)V[G++]=arguments[++A];return bn(z,k?o:this,V)}return p}function gu(n){return function(r,o,u){return u&&typeof u!="number"&&un(r,o,u)&&(o=u=t),r=vr(r),o===t?(o=r,r=0):o=vr(o),u=u===t?r<o?1:-1:vr(u),tm(r,o,u,n)}}function Da(n){return function(r,o){return typeof r=="string"&&typeof o=="string"||(r=wn(r),o=wn(o)),n(r,o)}}function ku(n,r,o,u,k,m,p,A,_,G){var B=r&L,V=B?p:t,z=B?t:p,re=B?m:t,de=B?t:m;r|=B?O:w,r&=~(B?w:O),r&q||(r&=~(N|D));var fe=[n,r,k,re,V,de,z,A,_,G],ge=o.apply(t,fe);return gs(n)&&_u(ge,fe),ge.placeholder=u,bu(ge,n,r)}function as(n){var r=We[n];return function(o,u){if(o=wn(o),u=u==null?0:sn(Ee(u),292),u&&bl(o)){var k=(Ne(o)+"e").split("e"),m=r(k[0]+"e"+(+k[1]+u));return k=(Ne(m)+"e").split("e"),+(k[0]+"e"+(+k[1]-u))}return r(o)}}var hm=nt&&1/oa(new nt([,-0]))[1]==Z?function(n){return new nt(n)}:Ns;function vu(n){return function(r){var o=on(r);return o==an?Fi(r):o==Yn?ME(r):SE(r,n(r))}}function ur(n,r,o,u,k,m,p,A){var _=r&D;if(!_&&typeof n!="function")throw new Mn(d);var G=u?u.length:0;if(G||(r&=~(O|w),u=k=t),p=p===t?p:ze(Ee(p),0),A=A===t?A:Ee(A),G-=k?k.length:0,r&w){var B=u,V=k;u=k=t}var z=_?t:os(n),re=[n,r,o,u,k,B,V,m,p,A];if(z&&Fm(re,z),n=re[0],r=re[1],o=re[2],u=re[3],k=re[4],A=re[9]=re[9]===t?_?0:n.length:ze(re[9]-G,0),!A&&r&(L|Q)&&(r&=~(L|Q)),!r||r==N)var de=mm(n,r,o);else r==L||r==Q?de=Tm(n,r,A):(r==O||r==(N|O))&&!k.length?de=pm(n,r,o,u):de=Oa.apply(t,re);var fe=z?$l:_u;return bu(fe(de,re),n,r)}function Eu(n,r,o,u){return n===t||Jn(n,et[o])&&!Le.call(u,o)?r:n}function fu(n,r,o,u,k,m){return we(n)&&we(r)&&(m.set(r,n),ba(n,r,t,fu,m),m.delete(r)),n}function Am(n){return Bt(n)?t:n}function mu(n,r,o,u,k,m){var p=o&j,A=n.length,_=r.length;if(A!=_&&!(p&&_>A))return!1;var G=m.get(n),B=m.get(r);if(G&&B)return G==r&&B==n;var V=-1,z=!0,re=o&R?new Dr:t;for(m.set(n,r),m.set(r,n);++V<A;){var de=n[V],fe=r[V];if(u)var ge=p?u(fe,de,V,r,n,m):u(de,fe,V,n,r,m);if(ge!==t){if(ge)continue;z=!1;break}if(re){if(!Ii(r,function(Te,Ae){if(!_t(re,Ae)&&(de===Te||k(de,Te,o,u,m)))return re.push(Ae)})){z=!1;break}}else if(!(de===fe||k(de,fe,o,u,m))){z=!1;break}}return m.delete(n),m.delete(r),z}function ym(n,r,o,u,k,m,p){switch(o){case Jr:if(n.byteLength!=r.byteLength||n.byteOffset!=r.byteOffset)return!1;n=n.buffer,r=r.buffer;case Rt:return!(n.byteLength!=r.byteLength||!m(new va(n),new va(r)));case Rn:case tn:case Qn:return Jn(+n,+r);case en:return n.name==r.name&&n.message==r.message;case At:case yt:return n==r+"";case an:var A=Fi;case Yn:var _=u&j;if(A||(A=oa),n.size!=r.size&&!_)return!1;var G=p.get(n);if(G)return G==r;u|=R,p.set(n,r);var B=mu(A(n),A(r),u,k,m,p);return p.delete(n),B;case na:if(Ot)return Ot.call(n)==Ot.call(r)}return!1}function cm(n,r,o,u,k,m){var p=o&j,A=is(n),_=A.length,G=is(r),B=G.length;if(_!=B&&!p)return!1;for(var V=_;V--;){var z=A[V];if(!(p?z in r:Le.call(r,z)))return!1}var re=m.get(n),de=m.get(r);if(re&&de)return re==r&&de==n;var fe=!0;m.set(n,r),m.set(r,n);for(var ge=p;++V<_;){z=A[V];var Te=n[z],Ae=r[z];if(u)var On=p?u(Ae,Te,z,r,n,m):u(Te,Ae,z,n,r,m);if(!(On===t?Te===Ae||k(Te,Ae,o,u,m):On)){fe=!1;break}ge||(ge=z=="constructor")}if(fe&&!ge){var dn=n.constructor,Ln=r.constructor;dn!=Ln&&"constructor"in n&&"constructor"in r&&!(typeof dn=="function"&&dn instanceof dn&&typeof Ln=="function"&&Ln instanceof Ln)&&(fe=!1)}return m.delete(n),m.delete(r),fe}function dr(n){return vs(cu(n,t,Ku),n+"")}function is(n){return jl(n,Xe,us)}function ss(n){return jl(n,An,Tu)}var os=ha?function(n){return ha.get(n)}:Ns;function Pa(n){for(var r=n.name+"",o=rt[r],u=Le.call(rt,r)?o.length:0;u--;){var k=o[u],m=k.func;if(m==null||m==n)return k.name}return r}function st(n){var r=Le.call(E,"placeholder")?E:n;return r.placeholder}function oe(){var n=E.iteratee||_s;return n=n===_s?Vl:n,arguments.length?n(arguments[0],arguments[1]):n}function Fa(n,r){var o=n.__data__;return Lm(r)?o[typeof r=="string"?"string":"hash"]:o.map}function ls(n){for(var r=Xe(n),o=r.length;o--;){var u=r[o],k=n[u];r[o]=[u,k,Au(k)]}return r}function Mr(n,r){var o=DE(n,r);return Bl(o)?o:t}function Rm(n){var r=Le.call(n,Lr),o=n[Lr];try{n[Lr]=t;var u=!0}catch{}var k=ga.call(n);return u&&(r?n[Lr]=o:delete n[Lr]),k}var us=ji?function(n){return n==null?[]:(n=Pe(n),Tr(ji(n),function(r){return Rl.call(n,r)}))}:Ss,Tu=ji?function(n){for(var r=[];n;)pr(r,us(n)),n=Ea(n);return r}:Ss,on=ln;(Gi&&on(new Gi(new ArrayBuffer(1)))!=Jr||Nt&&on(new Nt)!=an||Bi&&on(Bi.resolve())!=$r||nt&&on(new nt)!=Yn||St&&on(new St)!=ct)&&(on=function(n){var r=ln(n),o=r==_n?n.constructor:t,u=o?jr(o):"";if(u)switch(u){case af:return Jr;case sf:return an;case of:return $r;case lf:return Yn;case uf:return ct}return r});function _m(n,r,o){for(var u=-1,k=o.length;++u<k;){var m=o[u],p=m.size;switch(m.type){case"drop":n+=p;break;case"dropRight":r-=p;break;case"take":r=sn(r,n+p);break;case"takeRight":n=ze(n,r-p);break}}return{start:n,end:r}}function bm(n){var r=n.match(Lv);return r?r[1].split(Kv):[]}function pu(n,r,o){r=Rr(r,n);for(var u=-1,k=r.length,m=!1;++u<k;){var p=rr(r[u]);if(!(m=n!=null&&o(n,p)))break;n=n[p]}return m||++u!=k?m:(k=n==null?0:n.length,!!k&&Ha(k)&&gr(p,k)&&(ve(n)||Gr(n)))}function Nm(n){var r=n.length,o=new n.constructor(r);return r&&typeof n[0]=="string"&&Le.call(n,"index")&&(o.index=n.index,o.input=n.input),o}function hu(n){return typeof n.constructor=="function"&&!jt(n)?tt(Ea(n)):{}}function Sm(n,r,o){var u=n.constructor;switch(r){case Rt:return rs(n);case Rn:case tn:return new u(+n);case Jr:return dm(n,o);case li:case ui:case di:case gi:case ki:case vi:case Ei:case fi:case mi:return nu(n,o);case an:return new u;case Qn:case yt:return new u(n);case At:return gm(n);case Yn:return new u;case na:return km(n)}}function Im(n,r){var o=r.length;if(!o)return n;var u=o-1;return r[u]=(o>1?"& ":"")+r[u],r=r.join(o>2?", ":" "),n.replace(Ov,`{
/* [wrapped with `+r+`] */
`)}function Om(n){return ve(n)||Gr(n)||!!(_l&&n&&n[_l])}function gr(n,r){var o=typeof n;return r=r??C,!!r&&(o=="number"||o!="symbol"&&wv.test(n))&&n>-1&&n%1==0&&n<r}function un(n,r,o){if(!we(o))return!1;var u=typeof r;return(u=="number"?hn(o)&&gr(r,o.length):u=="string"&&r in o)?Jn(o[r],n):!1}function ds(n,r){if(ve(n))return!1;var o=typeof n;return o=="number"||o=="symbol"||o=="boolean"||n==null||In(n)?!0:bv.test(n)||!_v.test(n)||r!=null&&n in Pe(r)}function Lm(n){var r=typeof n;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?n!=="__proto__":n===null}function gs(n){var r=Pa(n),o=E[r];if(typeof o!="function"||!(r in he.prototype))return!1;if(n===o)return!0;var u=os(o);return!!u&&n===u[0]}function Km(n){return!!Al&&Al in n}var Dm=ua?kr:Is;function jt(n){var r=n&&n.constructor,o=typeof r=="function"&&r.prototype||et;return n===o}function Au(n){return n===n&&!we(n)}function yu(n,r){return function(o){return o==null?!1:o[n]===r&&(r!==t||n in Pe(o))}}function Pm(n){var r=Va(n,function(u){return o.size===T&&o.clear(),u}),o=r.cache;return r}function Fm(n,r){var o=n[1],u=r[1],k=o|u,m=k<(N|D|I),p=u==I&&o==L||u==I&&o==b&&n[7].length<=r[8]||u==(I|b)&&r[7].length<=r[8]&&o==L;if(!(m||p))return n;u&N&&(n[2]=r[2],k|=o&N?0:q);var A=r[3];if(A){var _=n[3];n[3]=_?tu(_,A,r[4]):A,n[4]=_?hr(n[3],f):r[4]}return A=r[5],A&&(_=n[5],n[5]=_?au(_,A,r[6]):A,n[6]=_?hr(n[5],f):r[6]),A=r[7],A&&(n[7]=A),u&I&&(n[8]=n[8]==null?r[8]:sn(n[8],r[8])),n[9]==null&&(n[9]=r[9]),n[0]=r[0],n[1]=k,n}function Mm(n){var r=[];if(n!=null)for(var o in Pe(n))r.push(o);return r}function jm(n){return ga.call(n)}function cu(n,r,o){return r=ze(r===t?n.length-1:r,0),function(){for(var u=arguments,k=-1,m=ze(u.length-r,0),p=S(m);++k<m;)p[k]=u[r+k];k=-1;for(var A=S(r+1);++k<r;)A[k]=u[k];return A[r]=o(p),bn(n,this,A)}}function Ru(n,r){return r.length<2?n:Fr(n,Bn(r,0,-1))}function Gm(n,r){for(var o=n.length,u=sn(r.length,o),k=pn(n);u--;){var m=r[u];n[u]=gr(m,o)?k[m]:t}return n}function ks(n,r){if(!(r==="constructor"&&typeof n[r]=="function")&&r!="__proto__")return n[r]}var _u=Nu($l),Gt=ZE||function(n,r){return nn.setTimeout(n,r)},vs=Nu(sm);function bu(n,r,o){var u=r+"";return vs(n,Im(u,Bm(bm(u),o)))}function Nu(n){var r=0,o=0;return function(){var u=nf(),k=le-(u-o);if(o=u,k>0){if(++r>=te)return arguments[0]}else r=0;return n.apply(t,arguments)}}function Ma(n,r){var o=-1,u=n.length,k=u-1;for(r=r===t?u:r;++o<r;){var m=Wi(o,k),p=n[m];n[m]=n[o],n[o]=p}return n.length=r,n}var Su=Pm(function(n){var r=[];return n.charCodeAt(0)===46&&r.push(""),n.replace(Nv,function(o,u,k,m){r.push(k?m.replace(Fv,"$1"):u||o)}),r});function rr(n){if(typeof n=="string"||In(n))return n;var r=n+"";return r=="0"&&1/n==-Z?"-0":r}function jr(n){if(n!=null){try{return da.call(n)}catch{}try{return n+""}catch{}}return""}function Bm(n,r){return Fn($e,function(o){var u="_."+o[0];r&o[1]&&!ia(n,u)&&n.push(u)}),n.sort()}function Iu(n){if(n instanceof he)return n.clone();var r=new jn(n.__wrapped__,n.__chain__);return r.__actions__=pn(n.__actions__),r.__index__=n.__index__,r.__values__=n.__values__,r}function Vm(n,r,o){(o?un(n,r,o):r===t)?r=1:r=ze(Ee(r),0);var u=n==null?0:n.length;if(!u||r<1)return[];for(var k=0,m=0,p=S(Ta(u/r));k<u;)p[m++]=Bn(n,k,k+=r);return p}function wm(n){for(var r=-1,o=n==null?0:n.length,u=0,k=[];++r<o;){var m=n[r];m&&(k[u++]=m)}return k}function Hm(){var n=arguments.length;if(!n)return[];for(var r=S(n-1),o=arguments[0],u=n;u--;)r[u-1]=arguments[u];return pr(ve(o)?pn(o):[o],rn(r,1))}var Um=me(function(n,r){return xe(n)?Kt(n,rn(r,1,xe,!0)):[]}),qm=me(function(n,r){var o=Vn(r);return xe(o)&&(o=t),xe(n)?Kt(n,rn(r,1,xe,!0),oe(o,2)):[]}),xm=me(function(n,r){var o=Vn(r);return xe(o)&&(o=t),xe(n)?Kt(n,rn(r,1,xe,!0),t,o):[]});function Ym(n,r,o){var u=n==null?0:n.length;return u?(r=o||r===t?1:Ee(r),Bn(n,r<0?0:r,u)):[]}function Cm(n,r,o){var u=n==null?0:n.length;return u?(r=o||r===t?1:Ee(r),r=u-r,Bn(n,0,r<0?0:r)):[]}function $m(n,r){return n&&n.length?Sa(n,oe(r,3),!0,!0):[]}function Jm(n,r){return n&&n.length?Sa(n,oe(r,3),!0):[]}function Wm(n,r,o,u){var k=n==null?0:n.length;return k?(o&&typeof o!="number"&&un(n,r,o)&&(o=0,u=k),Hf(n,r,o,u)):[]}function Ou(n,r,o){var u=n==null?0:n.length;if(!u)return-1;var k=o==null?0:Ee(o);return k<0&&(k=ze(u+k,0)),sa(n,oe(r,3),k)}function Lu(n,r,o){var u=n==null?0:n.length;if(!u)return-1;var k=u-1;return o!==t&&(k=Ee(o),k=o<0?ze(u+k,0):sn(k,u-1)),sa(n,oe(r,3),k,!0)}function Ku(n){var r=n==null?0:n.length;return r?rn(n,1):[]}function zm(n){var r=n==null?0:n.length;return r?rn(n,Z):[]}function Zm(n,r){var o=n==null?0:n.length;return o?(r=r===t?1:Ee(r),rn(n,r)):[]}function Xm(n){for(var r=-1,o=n==null?0:n.length,u={};++r<o;){var k=n[r];u[k[0]]=k[1]}return u}function Du(n){return n&&n.length?n[0]:t}function Qm(n,r,o){var u=n==null?0:n.length;if(!u)return-1;var k=o==null?0:Ee(o);return k<0&&(k=ze(u+k,0)),zr(n,r,k)}function eT(n){var r=n==null?0:n.length;return r?Bn(n,0,-1):[]}var nT=me(function(n){var r=Be(n,es);return r.length&&r[0]===n[0]?xi(r):[]}),rT=me(function(n){var r=Vn(n),o=Be(n,es);return r===Vn(o)?r=t:o.pop(),o.length&&o[0]===n[0]?xi(o,oe(r,2)):[]}),tT=me(function(n){var r=Vn(n),o=Be(n,es);return r=typeof r=="function"?r:t,r&&o.pop(),o.length&&o[0]===n[0]?xi(o,t,r):[]});function aT(n,r){return n==null?"":QE.call(n,r)}function Vn(n){var r=n==null?0:n.length;return r?n[r-1]:t}function iT(n,r,o){var u=n==null?0:n.length;if(!u)return-1;var k=u;return o!==t&&(k=Ee(o),k=k<0?ze(u+k,0):sn(k,u-1)),r===r?GE(n,r,k):sa(n,kl,k,!0)}function sT(n,r){return n&&n.length?ql(n,Ee(r)):t}var oT=me(Pu);function Pu(n,r){return n&&n.length&&r&&r.length?Ji(n,r):n}function lT(n,r,o){return n&&n.length&&r&&r.length?Ji(n,r,oe(o,2)):n}function uT(n,r,o){return n&&n.length&&r&&r.length?Ji(n,r,t,o):n}var dT=dr(function(n,r){var o=n==null?0:n.length,u=wi(n,r);return Cl(n,Be(r,function(k){return gr(k,o)?+k:k}).sort(ru)),u});function gT(n,r){var o=[];if(!(n&&n.length))return o;var u=-1,k=[],m=n.length;for(r=oe(r,3);++u<m;){var p=n[u];r(p,u,n)&&(o.push(p),k.push(u))}return Cl(n,k),o}function Es(n){return n==null?n:tf.call(n)}function kT(n,r,o){var u=n==null?0:n.length;return u?(o&&typeof o!="number"&&un(n,r,o)?(r=0,o=u):(r=r==null?0:Ee(r),o=o===t?u:Ee(o)),Bn(n,r,o)):[]}function vT(n,r){return Na(n,r)}function ET(n,r,o){return Zi(n,r,oe(o,2))}function fT(n,r){var o=n==null?0:n.length;if(o){var u=Na(n,r);if(u<o&&Jn(n[u],r))return u}return-1}function mT(n,r){return Na(n,r,!0)}function TT(n,r,o){return Zi(n,r,oe(o,2),!0)}function pT(n,r){var o=n==null?0:n.length;if(o){var u=Na(n,r,!0)-1;if(Jn(n[u],r))return u}return-1}function hT(n){return n&&n.length?Jl(n):[]}function AT(n,r){return n&&n.length?Jl(n,oe(r,2)):[]}function yT(n){var r=n==null?0:n.length;return r?Bn(n,1,r):[]}function cT(n,r,o){return n&&n.length?(r=o||r===t?1:Ee(r),Bn(n,0,r<0?0:r)):[]}function RT(n,r,o){var u=n==null?0:n.length;return u?(r=o||r===t?1:Ee(r),r=u-r,Bn(n,r<0?0:r,u)):[]}function _T(n,r){return n&&n.length?Sa(n,oe(r,3),!1,!0):[]}function bT(n,r){return n&&n.length?Sa(n,oe(r,3)):[]}var NT=me(function(n){return cr(rn(n,1,xe,!0))}),ST=me(function(n){var r=Vn(n);return xe(r)&&(r=t),cr(rn(n,1,xe,!0),oe(r,2))}),IT=me(function(n){var r=Vn(n);return r=typeof r=="function"?r:t,cr(rn(n,1,xe,!0),t,r)});function OT(n){return n&&n.length?cr(n):[]}function LT(n,r){return n&&n.length?cr(n,oe(r,2)):[]}function KT(n,r){return r=typeof r=="function"?r:t,n&&n.length?cr(n,t,r):[]}function fs(n){if(!(n&&n.length))return[];var r=0;return n=Tr(n,function(o){if(xe(o))return r=ze(o.length,r),!0}),Di(r,function(o){return Be(n,Oi(o))})}function Fu(n,r){if(!(n&&n.length))return[];var o=fs(n);return r==null?o:Be(o,function(u){return bn(r,t,u)})}var DT=me(function(n,r){return xe(n)?Kt(n,r):[]}),PT=me(function(n){return Qi(Tr(n,xe))}),FT=me(function(n){var r=Vn(n);return xe(r)&&(r=t),Qi(Tr(n,xe),oe(r,2))}),MT=me(function(n){var r=Vn(n);return r=typeof r=="function"?r:t,Qi(Tr(n,xe),t,r)}),jT=me(fs);function GT(n,r){return Xl(n||[],r||[],Lt)}function BT(n,r){return Xl(n||[],r||[],Ft)}var VT=me(function(n){var r=n.length,o=r>1?n[r-1]:t;return o=typeof o=="function"?(n.pop(),o):t,Fu(n,o)});function Mu(n){var r=E(n);return r.__chain__=!0,r}function wT(n,r){return r(n),n}function ja(n,r){return r(n)}var HT=dr(function(n){var r=n.length,o=r?n[0]:0,u=this.__wrapped__,k=function(m){return wi(m,n)};return r>1||this.__actions__.length||!(u instanceof he)||!gr(o)?this.thru(k):(u=u.slice(o,+o+(r?1:0)),u.__actions__.push({func:ja,args:[k],thisArg:t}),new jn(u,this.__chain__).thru(function(m){return r&&!m.length&&m.push(t),m}))});function UT(){return Mu(this)}function qT(){return new jn(this.value(),this.__chain__)}function xT(){this.__values__===t&&(this.__values__=Wu(this.value()));var n=this.__index__>=this.__values__.length,r=n?t:this.__values__[this.__index__++];return{done:n,value:r}}function YT(){return this}function CT(n){for(var r,o=this;o instanceof ya;){var u=Iu(o);u.__index__=0,u.__values__=t,r?k.__wrapped__=u:r=u;var k=u;o=o.__wrapped__}return k.__wrapped__=n,r}function $T(){var n=this.__wrapped__;if(n instanceof he){var r=n;return this.__actions__.length&&(r=new he(this)),r=r.reverse(),r.__actions__.push({func:ja,args:[Es],thisArg:t}),new jn(r,this.__chain__)}return this.thru(Es)}function JT(){return Zl(this.__wrapped__,this.__actions__)}var WT=Ia(function(n,r,o){Le.call(n,o)?++n[o]:lr(n,o,1)});function zT(n,r,o){var u=ve(n)?dl:wf;return o&&un(n,r,o)&&(r=t),u(n,oe(r,3))}function ZT(n,r){var o=ve(n)?Tr:Fl;return o(n,oe(r,3))}var XT=lu(Ou),QT=lu(Lu);function ep(n,r){return rn(Ga(n,r),1)}function np(n,r){return rn(Ga(n,r),Z)}function rp(n,r,o){return o=o===t?1:Ee(o),rn(Ga(n,r),o)}function ju(n,r){var o=ve(n)?Fn:yr;return o(n,oe(r,3))}function Gu(n,r){var o=ve(n)?AE:Pl;return o(n,oe(r,3))}var tp=Ia(function(n,r,o){Le.call(n,o)?n[o].push(r):lr(n,o,[r])});function ap(n,r,o,u){n=hn(n)?n:lt(n),o=o&&!u?Ee(o):0;var k=n.length;return o<0&&(o=ze(k+o,0)),Ua(n)?o<=k&&n.indexOf(r,o)>-1:!!k&&zr(n,r,o)>-1}var ip=me(function(n,r,o){var u=-1,k=typeof r=="function",m=hn(n)?S(n.length):[];return yr(n,function(p){m[++u]=k?bn(r,p,o):Dt(p,r,o)}),m}),sp=Ia(function(n,r,o){lr(n,o,r)});function Ga(n,r){var o=ve(n)?Be:wl;return o(n,oe(r,3))}function op(n,r,o,u){return n==null?[]:(ve(r)||(r=r==null?[]:[r]),o=u?t:o,ve(o)||(o=o==null?[]:[o]),xl(n,r,o))}var lp=Ia(function(n,r,o){n[o?0:1].push(r)},function(){return[[],[]]});function up(n,r,o){var u=ve(n)?Si:El,k=arguments.length<3;return u(n,oe(r,4),o,k,yr)}function dp(n,r,o){var u=ve(n)?yE:El,k=arguments.length<3;return u(n,oe(r,4),o,k,Pl)}function gp(n,r){var o=ve(n)?Tr:Fl;return o(n,wa(oe(r,3)))}function kp(n){var r=ve(n)?Ol:am;return r(n)}function vp(n,r,o){(o?un(n,r,o):r===t)?r=1:r=Ee(r);var u=ve(n)?Mf:im;return u(n,r)}function Ep(n){var r=ve(n)?jf:om;return r(n)}function fp(n){if(n==null)return 0;if(hn(n))return Ua(n)?Xr(n):n.length;var r=on(n);return r==an||r==Yn?n.size:Ci(n).length}function mp(n,r,o){var u=ve(n)?Ii:lm;return o&&un(n,r,o)&&(r=t),u(n,oe(r,3))}var Tp=me(function(n,r){if(n==null)return[];var o=r.length;return o>1&&un(n,r[0],r[1])?r=[]:o>2&&un(r[0],r[1],r[2])&&(r=[r[0]]),xl(n,rn(r,1),[])}),Ba=zE||function(){return nn.Date.now()};function pp(n,r){if(typeof r!="function")throw new Mn(d);return n=Ee(n),function(){if(--n<1)return r.apply(this,arguments)}}function Bu(n,r,o){return r=o?t:r,r=n&&r==null?n.length:r,ur(n,I,t,t,t,t,r)}function Vu(n,r){var o;if(typeof r!="function")throw new Mn(d);return n=Ee(n),function(){return--n>0&&(o=r.apply(this,arguments)),n<=1&&(r=t),o}}var ms=me(function(n,r,o){var u=N;if(o.length){var k=hr(o,st(ms));u|=O}return ur(n,u,r,o,k)}),wu=me(function(n,r,o){var u=N|D;if(o.length){var k=hr(o,st(wu));u|=O}return ur(r,u,n,o,k)});function Hu(n,r,o){r=o?t:r;var u=ur(n,L,t,t,t,t,t,r);return u.placeholder=Hu.placeholder,u}function Uu(n,r,o){r=o?t:r;var u=ur(n,Q,t,t,t,t,t,r);return u.placeholder=Uu.placeholder,u}function qu(n,r,o){var u,k,m,p,A,_,G=0,B=!1,V=!1,z=!0;if(typeof n!="function")throw new Mn(d);r=wn(r)||0,we(o)&&(B=!!o.leading,V="maxWait"in o,m=V?ze(wn(o.maxWait)||0,r):m,z="trailing"in o?!!o.trailing:z);function re(Ye){var Wn=u,Er=k;return u=k=t,G=Ye,p=n.apply(Er,Wn),p}function de(Ye){return G=Ye,A=Gt(Te,r),B?re(Ye):p}function fe(Ye){var Wn=Ye-_,Er=Ye-G,ld=r-Wn;return V?sn(ld,m-Er):ld}function ge(Ye){var Wn=Ye-_,Er=Ye-G;return _===t||Wn>=r||Wn<0||V&&Er>=m}function Te(){var Ye=Ba();if(ge(Ye))return Ae(Ye);A=Gt(Te,fe(Ye))}function Ae(Ye){return A=t,z&&u?re(Ye):(u=k=t,p)}function On(){A!==t&&Ql(A),G=0,u=_=k=A=t}function dn(){return A===t?p:Ae(Ba())}function Ln(){var Ye=Ba(),Wn=ge(Ye);if(u=arguments,k=this,_=Ye,Wn){if(A===t)return de(_);if(V)return Ql(A),A=Gt(Te,r),re(_)}return A===t&&(A=Gt(Te,r)),p}return Ln.cancel=On,Ln.flush=dn,Ln}var hp=me(function(n,r){return Dl(n,1,r)}),Ap=me(function(n,r,o){return Dl(n,wn(r)||0,o)});function yp(n){return ur(n,$)}function Va(n,r){if(typeof n!="function"||r!=null&&typeof r!="function")throw new Mn(d);var o=function(){var u=arguments,k=r?r.apply(this,u):u[0],m=o.cache;if(m.has(k))return m.get(k);var p=n.apply(this,u);return o.cache=m.set(k,p)||m,p};return o.cache=new(Va.Cache||or),o}Va.Cache=or;function wa(n){if(typeof n!="function")throw new Mn(d);return function(){var r=arguments;switch(r.length){case 0:return!n.call(this);case 1:return!n.call(this,r[0]);case 2:return!n.call(this,r[0],r[1]);case 3:return!n.call(this,r[0],r[1],r[2])}return!n.apply(this,r)}}function cp(n){return Vu(2,n)}var Rp=um(function(n,r){r=r.length==1&&ve(r[0])?Be(r[0],Nn(oe())):Be(rn(r,1),Nn(oe()));var o=r.length;return me(function(u){for(var k=-1,m=sn(u.length,o);++k<m;)u[k]=r[k].call(this,u[k]);return bn(n,this,u)})}),Ts=me(function(n,r){var o=hr(r,st(Ts));return ur(n,O,t,r,o)}),xu=me(function(n,r){var o=hr(r,st(xu));return ur(n,w,t,r,o)}),_p=dr(function(n,r){return ur(n,b,t,t,t,r)});function bp(n,r){if(typeof n!="function")throw new Mn(d);return r=r===t?r:Ee(r),me(n,r)}function Np(n,r){if(typeof n!="function")throw new Mn(d);return r=r==null?0:ze(Ee(r),0),me(function(o){var u=o[r],k=_r(o,0,r);return u&&pr(k,u),bn(n,this,k)})}function Sp(n,r,o){var u=!0,k=!0;if(typeof n!="function")throw new Mn(d);return we(o)&&(u="leading"in o?!!o.leading:u,k="trailing"in o?!!o.trailing:k),qu(n,r,{leading:u,maxWait:r,trailing:k})}function Ip(n){return Bu(n,1)}function Op(n,r){return Ts(ns(r),n)}function Lp(){if(!arguments.length)return[];var n=arguments[0];return ve(n)?n:[n]}function Kp(n){return Gn(n,K)}function Dp(n,r){return r=typeof r=="function"?r:t,Gn(n,K,r)}function Pp(n){return Gn(n,h|K)}function Fp(n,r){return r=typeof r=="function"?r:t,Gn(n,h|K,r)}function Mp(n,r){return r==null||Kl(n,r,Xe(r))}function Jn(n,r){return n===r||n!==n&&r!==r}var jp=Da(qi),Gp=Da(function(n,r){return n>=r}),Gr=Gl(function(){return arguments}())?Gl:function(n){return Ue(n)&&Le.call(n,"callee")&&!Rl.call(n,"callee")},ve=S.isArray,Bp=al?Nn(al):Cf;function hn(n){return n!=null&&Ha(n.length)&&!kr(n)}function xe(n){return Ue(n)&&hn(n)}function Vp(n){return n===!0||n===!1||Ue(n)&&ln(n)==Rn}var br=XE||Is,wp=il?Nn(il):$f;function Hp(n){return Ue(n)&&n.nodeType===1&&!Bt(n)}function Up(n){if(n==null)return!0;if(hn(n)&&(ve(n)||typeof n=="string"||typeof n.splice=="function"||br(n)||ot(n)||Gr(n)))return!n.length;var r=on(n);if(r==an||r==Yn)return!n.size;if(jt(n))return!Ci(n).length;for(var o in n)if(Le.call(n,o))return!1;return!0}function qp(n,r){return Pt(n,r)}function xp(n,r,o){o=typeof o=="function"?o:t;var u=o?o(n,r):t;return u===t?Pt(n,r,t,o):!!u}function ps(n){if(!Ue(n))return!1;var r=ln(n);return r==en||r==Je||typeof n.message=="string"&&typeof n.name=="string"&&!Bt(n)}function Yp(n){return typeof n=="number"&&bl(n)}function kr(n){if(!we(n))return!1;var r=ln(n);return r==Tn||r==xn||r==qn||r==ht}function Yu(n){return typeof n=="number"&&n==Ee(n)}function Ha(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=C}function we(n){var r=typeof n;return n!=null&&(r=="object"||r=="function")}function Ue(n){return n!=null&&typeof n=="object"}var Cu=sl?Nn(sl):Wf;function Cp(n,r){return n===r||Yi(n,r,ls(r))}function $p(n,r,o){return o=typeof o=="function"?o:t,Yi(n,r,ls(r),o)}function Jp(n){return $u(n)&&n!=+n}function Wp(n){if(Dm(n))throw new ke(l);return Bl(n)}function zp(n){return n===null}function Zp(n){return n==null}function $u(n){return typeof n=="number"||Ue(n)&&ln(n)==Qn}function Bt(n){if(!Ue(n)||ln(n)!=_n)return!1;var r=Ea(n);if(r===null)return!0;var o=Le.call(r,"constructor")&&r.constructor;return typeof o=="function"&&o instanceof o&&da.call(o)==CE}var hs=ol?Nn(ol):zf;function Xp(n){return Yu(n)&&n>=-C&&n<=C}var Ju=ll?Nn(ll):Zf;function Ua(n){return typeof n=="string"||!ve(n)&&Ue(n)&&ln(n)==yt}function In(n){return typeof n=="symbol"||Ue(n)&&ln(n)==na}var ot=ul?Nn(ul):Xf;function Qp(n){return n===t}function eh(n){return Ue(n)&&on(n)==ct}function nh(n){return Ue(n)&&ln(n)==mv}var rh=Da($i),th=Da(function(n,r){return n<=r});function Wu(n){if(!n)return[];if(hn(n))return Ua(n)?Cn(n):pn(n);if(bt&&n[bt])return FE(n[bt]());var r=on(n),o=r==an?Fi:r==Yn?oa:lt;return o(n)}function vr(n){if(!n)return n===0?n:0;if(n=wn(n),n===Z||n===-Z){var r=n<0?-1:1;return r*ie}return n===n?n:0}function Ee(n){var r=vr(n),o=r%1;return r===r?o?r-o:r:0}function zu(n){return n?Pr(Ee(n),0,ue):0}function wn(n){if(typeof n=="number")return n;if(In(n))return se;if(we(n)){var r=typeof n.valueOf=="function"?n.valueOf():n;n=we(r)?r+"":r}if(typeof n!="string")return n===0?n:+n;n=fl(n);var o=Gv.test(n);return o||Vv.test(n)?TE(n.slice(2),o?2:8):jv.test(n)?se:+n}function Zu(n){return nr(n,An(n))}function ah(n){return n?Pr(Ee(n),-C,C):n===0?n:0}function Ne(n){return n==null?"":Sn(n)}var ih=at(function(n,r){if(jt(r)||hn(r)){nr(r,Xe(r),n);return}for(var o in r)Le.call(r,o)&&Lt(n,o,r[o])}),Xu=at(function(n,r){nr(r,An(r),n)}),qa=at(function(n,r,o,u){nr(r,An(r),n,u)}),sh=at(function(n,r,o,u){nr(r,Xe(r),n,u)}),oh=dr(wi);function lh(n,r){var o=tt(n);return r==null?o:Ll(o,r)}var uh=me(function(n,r){n=Pe(n);var o=-1,u=r.length,k=u>2?r[2]:t;for(k&&un(r[0],r[1],k)&&(u=1);++o<u;)for(var m=r[o],p=An(m),A=-1,_=p.length;++A<_;){var G=p[A],B=n[G];(B===t||Jn(B,et[G])&&!Le.call(n,G))&&(n[G]=m[G])}return n}),dh=me(function(n){return n.push(t,fu),bn(Qu,t,n)});function gh(n,r){return gl(n,oe(r,3),er)}function kh(n,r){return gl(n,oe(r,3),Ui)}function vh(n,r){return n==null?n:Hi(n,oe(r,3),An)}function Eh(n,r){return n==null?n:Ml(n,oe(r,3),An)}function fh(n,r){return n&&er(n,oe(r,3))}function mh(n,r){return n&&Ui(n,oe(r,3))}function Th(n){return n==null?[]:_a(n,Xe(n))}function ph(n){return n==null?[]:_a(n,An(n))}function As(n,r,o){var u=n==null?t:Fr(n,r);return u===t?o:u}function hh(n,r){return n!=null&&pu(n,r,Uf)}function ys(n,r){return n!=null&&pu(n,r,qf)}var Ah=du(function(n,r,o){r!=null&&typeof r.toString!="function"&&(r=ga.call(r)),n[r]=o},Rs(yn)),yh=du(function(n,r,o){r!=null&&typeof r.toString!="function"&&(r=ga.call(r)),Le.call(n,r)?n[r].push(o):n[r]=[o]},oe),ch=me(Dt);function Xe(n){return hn(n)?Il(n):Ci(n)}function An(n){return hn(n)?Il(n,!0):Qf(n)}function Rh(n,r){var o={};return r=oe(r,3),er(n,function(u,k,m){lr(o,r(u,k,m),u)}),o}function _h(n,r){var o={};return r=oe(r,3),er(n,function(u,k,m){lr(o,k,r(u,k,m))}),o}var bh=at(function(n,r,o){ba(n,r,o)}),Qu=at(function(n,r,o,u){ba(n,r,o,u)}),Nh=dr(function(n,r){var o={};if(n==null)return o;var u=!1;r=Be(r,function(m){return m=Rr(m,n),u||(u=m.length>1),m}),nr(n,ss(n),o),u&&(o=Gn(o,h|y|K,Am));for(var k=r.length;k--;)Xi(o,r[k]);return o});function Sh(n,r){return ed(n,wa(oe(r)))}var Ih=dr(function(n,r){return n==null?{}:nm(n,r)});function ed(n,r){if(n==null)return{};var o=Be(ss(n),function(u){return[u]});return r=oe(r),Yl(n,o,function(u,k){return r(u,k[0])})}function Oh(n,r,o){r=Rr(r,n);var u=-1,k=r.length;for(k||(k=1,n=t);++u<k;){var m=n==null?t:n[rr(r[u])];m===t&&(u=k,m=o),n=kr(m)?m.call(n):m}return n}function Lh(n,r,o){return n==null?n:Ft(n,r,o)}function Kh(n,r,o,u){return u=typeof u=="function"?u:t,n==null?n:Ft(n,r,o,u)}var nd=vu(Xe),rd=vu(An);function Dh(n,r,o){var u=ve(n),k=u||br(n)||ot(n);if(r=oe(r,4),o==null){var m=n&&n.constructor;k?o=u?new m:[]:we(n)?o=kr(m)?tt(Ea(n)):{}:o={}}return(k?Fn:er)(n,function(p,A,_){return r(o,p,A,_)}),o}function Ph(n,r){return n==null?!0:Xi(n,r)}function Fh(n,r,o){return n==null?n:zl(n,r,ns(o))}function Mh(n,r,o,u){return u=typeof u=="function"?u:t,n==null?n:zl(n,r,ns(o),u)}function lt(n){return n==null?[]:Pi(n,Xe(n))}function jh(n){return n==null?[]:Pi(n,An(n))}function Gh(n,r,o){return o===t&&(o=r,r=t),o!==t&&(o=wn(o),o=o===o?o:0),r!==t&&(r=wn(r),r=r===r?r:0),Pr(wn(n),r,o)}function Bh(n,r,o){return r=vr(r),o===t?(o=r,r=0):o=vr(o),n=wn(n),xf(n,r,o)}function Vh(n,r,o){if(o&&typeof o!="boolean"&&un(n,r,o)&&(r=o=t),o===t&&(typeof r=="boolean"?(o=r,r=t):typeof n=="boolean"&&(o=n,n=t)),n===t&&r===t?(n=0,r=1):(n=vr(n),r===t?(r=n,n=0):r=vr(r)),n>r){var u=n;n=r,r=u}if(o||n%1||r%1){var k=Nl();return sn(n+k*(r-n+mE("1e-"+((k+"").length-1))),r)}return Wi(n,r)}var wh=it(function(n,r,o){return r=r.toLowerCase(),n+(o?td(r):r)});function td(n){return cs(Ne(n).toLowerCase())}function ad(n){return n=Ne(n),n&&n.replace(Hv,OE).replace(sE,"")}function Hh(n,r,o){n=Ne(n),r=Sn(r);var u=n.length;o=o===t?u:Pr(Ee(o),0,u);var k=o;return o-=r.length,o>=0&&n.slice(o,k)==r}function Uh(n){return n=Ne(n),n&&yv.test(n)?n.replace(Mo,LE):n}function qh(n){return n=Ne(n),n&&Sv.test(n)?n.replace(Ti,"\\$&"):n}var xh=it(function(n,r,o){return n+(o?"-":"")+r.toLowerCase()}),Yh=it(function(n,r,o){return n+(o?" ":"")+r.toLowerCase()}),Ch=ou("toLowerCase");function $h(n,r,o){n=Ne(n),r=Ee(r);var u=r?Xr(n):0;if(!r||u>=r)return n;var k=(r-u)/2;return Ka(pa(k),o)+n+Ka(Ta(k),o)}function Jh(n,r,o){n=Ne(n),r=Ee(r);var u=r?Xr(n):0;return r&&u<r?n+Ka(r-u,o):n}function Wh(n,r,o){n=Ne(n),r=Ee(r);var u=r?Xr(n):0;return r&&u<r?Ka(r-u,o)+n:n}function zh(n,r,o){return o||r==null?r=0:r&&(r=+r),rf(Ne(n).replace(pi,""),r||0)}function Zh(n,r,o){return(o?un(n,r,o):r===t)?r=1:r=Ee(r),zi(Ne(n),r)}function Xh(){var n=arguments,r=Ne(n[0]);return n.length<3?r:r.replace(n[1],n[2])}var Qh=it(function(n,r,o){return n+(o?"_":"")+r.toLowerCase()});function eA(n,r,o){return o&&typeof o!="number"&&un(n,r,o)&&(r=o=t),o=o===t?ue:o>>>0,o?(n=Ne(n),n&&(typeof r=="string"||r!=null&&!hs(r))&&(r=Sn(r),!r&&Zr(n))?_r(Cn(n),0,o):n.split(r,o)):[]}var nA=it(function(n,r,o){return n+(o?" ":"")+cs(r)});function rA(n,r,o){return n=Ne(n),o=o==null?0:Pr(Ee(o),0,n.length),r=Sn(r),n.slice(o,o+r.length)==r}function tA(n,r,o){var u=E.templateSettings;o&&un(n,r,o)&&(r=t),n=Ne(n),r=qa({},r,u,Eu);var k=qa({},r.imports,u.imports,Eu),m=Xe(k),p=Pi(k,m),A,_,G=0,B=r.interpolate||ra,V="__p += '",z=Mi((r.escape||ra).source+"|"+B.source+"|"+(B===jo?Mv:ra).source+"|"+(r.evaluate||ra).source+"|$","g"),re="//# sourceURL="+(Le.call(r,"sourceURL")?(r.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++gE+"]")+`
`;n.replace(z,function(ge,Te,Ae,On,dn,Ln){return Ae||(Ae=On),V+=n.slice(G,Ln).replace(Uv,KE),Te&&(A=!0,V+=`' +
__e(`+Te+`) +
'`),dn&&(_=!0,V+=`';
`+dn+`;
__p += '`),Ae&&(V+=`' +
((__t = (`+Ae+`)) == null ? '' : __t) +
'`),G=Ln+ge.length,ge}),V+=`';
`;var de=Le.call(r,"variable")&&r.variable;if(!de)V=`with (obj) {
`+V+`
}
`;else if(Pv.test(de))throw new ke(g);V=(_?V.replace(Tv,""):V).replace(pv,"$1").replace(hv,"$1;"),V="function("+(de||"obj")+`) {
`+(de?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(A?", __e = _.escape":"")+(_?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+V+`return __p
}`;var fe=sd(function(){return be(m,re+"return "+V).apply(t,p)});if(fe.source=V,ps(fe))throw fe;return fe}function aA(n){return Ne(n).toLowerCase()}function iA(n){return Ne(n).toUpperCase()}function sA(n,r,o){if(n=Ne(n),n&&(o||r===t))return fl(n);if(!n||!(r=Sn(r)))return n;var u=Cn(n),k=Cn(r),m=ml(u,k),p=Tl(u,k)+1;return _r(u,m,p).join("")}function oA(n,r,o){if(n=Ne(n),n&&(o||r===t))return n.slice(0,hl(n)+1);if(!n||!(r=Sn(r)))return n;var u=Cn(n),k=Tl(u,Cn(r))+1;return _r(u,0,k).join("")}function lA(n,r,o){if(n=Ne(n),n&&(o||r===t))return n.replace(pi,"");if(!n||!(r=Sn(r)))return n;var u=Cn(n),k=ml(u,Cn(r));return _r(u,k).join("")}function uA(n,r){var o=W,u=x;if(we(r)){var k="separator"in r?r.separator:k;o="length"in r?Ee(r.length):o,u="omission"in r?Sn(r.omission):u}n=Ne(n);var m=n.length;if(Zr(n)){var p=Cn(n);m=p.length}if(o>=m)return n;var A=o-Xr(u);if(A<1)return u;var _=p?_r(p,0,A).join(""):n.slice(0,A);if(k===t)return _+u;if(p&&(A+=_.length-A),hs(k)){if(n.slice(A).search(k)){var G,B=_;for(k.global||(k=Mi(k.source,Ne(Go.exec(k))+"g")),k.lastIndex=0;G=k.exec(B);)var V=G.index;_=_.slice(0,V===t?A:V)}}else if(n.indexOf(Sn(k),A)!=A){var z=_.lastIndexOf(k);z>-1&&(_=_.slice(0,z))}return _+u}function dA(n){return n=Ne(n),n&&Av.test(n)?n.replace(Fo,BE):n}var gA=it(function(n,r,o){return n+(o?" ":"")+r.toUpperCase()}),cs=ou("toUpperCase");function id(n,r,o){return n=Ne(n),r=o?t:r,r===t?PE(n)?HE(n):_E(n):n.match(r)||[]}var sd=me(function(n,r){try{return bn(n,t,r)}catch(o){return ps(o)?o:new ke(o)}}),kA=dr(function(n,r){return Fn(r,function(o){o=rr(o),lr(n,o,ms(n[o],n))}),n});function vA(n){var r=n==null?0:n.length,o=oe();return n=r?Be(n,function(u){if(typeof u[1]!="function")throw new Mn(d);return[o(u[0]),u[1]]}):[],me(function(u){for(var k=-1;++k<r;){var m=n[k];if(bn(m[0],this,u))return bn(m[1],this,u)}})}function EA(n){return Vf(Gn(n,h))}function Rs(n){return function(){return n}}function fA(n,r){return n==null||n!==n?r:n}var mA=uu(),TA=uu(!0);function yn(n){return n}function _s(n){return Vl(typeof n=="function"?n:Gn(n,h))}function pA(n){return Hl(Gn(n,h))}function hA(n,r){return Ul(n,Gn(r,h))}var AA=me(function(n,r){return function(o){return Dt(o,n,r)}}),yA=me(function(n,r){return function(o){return Dt(n,o,r)}});function bs(n,r,o){var u=Xe(r),k=_a(r,u);o==null&&!(we(r)&&(k.length||!u.length))&&(o=r,r=n,n=this,k=_a(r,Xe(r)));var m=!(we(o)&&"chain"in o)||!!o.chain,p=kr(n);return Fn(k,function(A){var _=r[A];n[A]=_,p&&(n.prototype[A]=function(){var G=this.__chain__;if(m||G){var B=n(this.__wrapped__),V=B.__actions__=pn(this.__actions__);return V.push({func:_,args:arguments,thisArg:n}),B.__chain__=G,B}return _.apply(n,pr([this.value()],arguments))})}),n}function cA(){return nn._===this&&(nn._=$E),this}function Ns(){}function RA(n){return n=Ee(n),me(function(r){return ql(r,n)})}var _A=ts(Be),bA=ts(dl),NA=ts(Ii);function od(n){return ds(n)?Oi(rr(n)):rm(n)}function SA(n){return function(r){return n==null?t:Fr(n,r)}}var IA=gu(),OA=gu(!0);function Ss(){return[]}function Is(){return!1}function LA(){return{}}function KA(){return""}function DA(){return!0}function PA(n,r){if(n=Ee(n),n<1||n>C)return[];var o=ue,u=sn(n,ue);r=oe(r),n-=ue;for(var k=Di(u,r);++o<n;)r(o);return k}function FA(n){return ve(n)?Be(n,rr):In(n)?[n]:pn(Su(Ne(n)))}function MA(n){var r=++YE;return Ne(n)+r}var jA=La(function(n,r){return n+r},0),GA=as("ceil"),BA=La(function(n,r){return n/r},1),VA=as("floor");function wA(n){return n&&n.length?Ra(n,yn,qi):t}function HA(n,r){return n&&n.length?Ra(n,oe(r,2),qi):t}function UA(n){return vl(n,yn)}function qA(n,r){return vl(n,oe(r,2))}function xA(n){return n&&n.length?Ra(n,yn,$i):t}function YA(n,r){return n&&n.length?Ra(n,oe(r,2),$i):t}var CA=La(function(n,r){return n*r},1),$A=as("round"),JA=La(function(n,r){return n-r},0);function WA(n){return n&&n.length?Ki(n,yn):0}function zA(n,r){return n&&n.length?Ki(n,oe(r,2)):0}return E.after=pp,E.ary=Bu,E.assign=ih,E.assignIn=Xu,E.assignInWith=qa,E.assignWith=sh,E.at=oh,E.before=Vu,E.bind=ms,E.bindAll=kA,E.bindKey=wu,E.castArray=Lp,E.chain=Mu,E.chunk=Vm,E.compact=wm,E.concat=Hm,E.cond=vA,E.conforms=EA,E.constant=Rs,E.countBy=WT,E.create=lh,E.curry=Hu,E.curryRight=Uu,E.debounce=qu,E.defaults=uh,E.defaultsDeep=dh,E.defer=hp,E.delay=Ap,E.difference=Um,E.differenceBy=qm,E.differenceWith=xm,E.drop=Ym,E.dropRight=Cm,E.dropRightWhile=$m,E.dropWhile=Jm,E.fill=Wm,E.filter=ZT,E.flatMap=ep,E.flatMapDeep=np,E.flatMapDepth=rp,E.flatten=Ku,E.flattenDeep=zm,E.flattenDepth=Zm,E.flip=yp,E.flow=mA,E.flowRight=TA,E.fromPairs=Xm,E.functions=Th,E.functionsIn=ph,E.groupBy=tp,E.initial=eT,E.intersection=nT,E.intersectionBy=rT,E.intersectionWith=tT,E.invert=Ah,E.invertBy=yh,E.invokeMap=ip,E.iteratee=_s,E.keyBy=sp,E.keys=Xe,E.keysIn=An,E.map=Ga,E.mapKeys=Rh,E.mapValues=_h,E.matches=pA,E.matchesProperty=hA,E.memoize=Va,E.merge=bh,E.mergeWith=Qu,E.method=AA,E.methodOf=yA,E.mixin=bs,E.negate=wa,E.nthArg=RA,E.omit=Nh,E.omitBy=Sh,E.once=cp,E.orderBy=op,E.over=_A,E.overArgs=Rp,E.overEvery=bA,E.overSome=NA,E.partial=Ts,E.partialRight=xu,E.partition=lp,E.pick=Ih,E.pickBy=ed,E.property=od,E.propertyOf=SA,E.pull=oT,E.pullAll=Pu,E.pullAllBy=lT,E.pullAllWith=uT,E.pullAt=dT,E.range=IA,E.rangeRight=OA,E.rearg=_p,E.reject=gp,E.remove=gT,E.rest=bp,E.reverse=Es,E.sampleSize=vp,E.set=Lh,E.setWith=Kh,E.shuffle=Ep,E.slice=kT,E.sortBy=Tp,E.sortedUniq=hT,E.sortedUniqBy=AT,E.split=eA,E.spread=Np,E.tail=yT,E.take=cT,E.takeRight=RT,E.takeRightWhile=_T,E.takeWhile=bT,E.tap=wT,E.throttle=Sp,E.thru=ja,E.toArray=Wu,E.toPairs=nd,E.toPairsIn=rd,E.toPath=FA,E.toPlainObject=Zu,E.transform=Dh,E.unary=Ip,E.union=NT,E.unionBy=ST,E.unionWith=IT,E.uniq=OT,E.uniqBy=LT,E.uniqWith=KT,E.unset=Ph,E.unzip=fs,E.unzipWith=Fu,E.update=Fh,E.updateWith=Mh,E.values=lt,E.valuesIn=jh,E.without=DT,E.words=id,E.wrap=Op,E.xor=PT,E.xorBy=FT,E.xorWith=MT,E.zip=jT,E.zipObject=GT,E.zipObjectDeep=BT,E.zipWith=VT,E.entries=nd,E.entriesIn=rd,E.extend=Xu,E.extendWith=qa,bs(E,E),E.add=jA,E.attempt=sd,E.camelCase=wh,E.capitalize=td,E.ceil=GA,E.clamp=Gh,E.clone=Kp,E.cloneDeep=Pp,E.cloneDeepWith=Fp,E.cloneWith=Dp,E.conformsTo=Mp,E.deburr=ad,E.defaultTo=fA,E.divide=BA,E.endsWith=Hh,E.eq=Jn,E.escape=Uh,E.escapeRegExp=qh,E.every=zT,E.find=XT,E.findIndex=Ou,E.findKey=gh,E.findLast=QT,E.findLastIndex=Lu,E.findLastKey=kh,E.floor=VA,E.forEach=ju,E.forEachRight=Gu,E.forIn=vh,E.forInRight=Eh,E.forOwn=fh,E.forOwnRight=mh,E.get=As,E.gt=jp,E.gte=Gp,E.has=hh,E.hasIn=ys,E.head=Du,E.identity=yn,E.includes=ap,E.indexOf=Qm,E.inRange=Bh,E.invoke=ch,E.isArguments=Gr,E.isArray=ve,E.isArrayBuffer=Bp,E.isArrayLike=hn,E.isArrayLikeObject=xe,E.isBoolean=Vp,E.isBuffer=br,E.isDate=wp,E.isElement=Hp,E.isEmpty=Up,E.isEqual=qp,E.isEqualWith=xp,E.isError=ps,E.isFinite=Yp,E.isFunction=kr,E.isInteger=Yu,E.isLength=Ha,E.isMap=Cu,E.isMatch=Cp,E.isMatchWith=$p,E.isNaN=Jp,E.isNative=Wp,E.isNil=Zp,E.isNull=zp,E.isNumber=$u,E.isObject=we,E.isObjectLike=Ue,E.isPlainObject=Bt,E.isRegExp=hs,E.isSafeInteger=Xp,E.isSet=Ju,E.isString=Ua,E.isSymbol=In,E.isTypedArray=ot,E.isUndefined=Qp,E.isWeakMap=eh,E.isWeakSet=nh,E.join=aT,E.kebabCase=xh,E.last=Vn,E.lastIndexOf=iT,E.lowerCase=Yh,E.lowerFirst=Ch,E.lt=rh,E.lte=th,E.max=wA,E.maxBy=HA,E.mean=UA,E.meanBy=qA,E.min=xA,E.minBy=YA,E.stubArray=Ss,E.stubFalse=Is,E.stubObject=LA,E.stubString=KA,E.stubTrue=DA,E.multiply=CA,E.nth=sT,E.noConflict=cA,E.noop=Ns,E.now=Ba,E.pad=$h,E.padEnd=Jh,E.padStart=Wh,E.parseInt=zh,E.random=Vh,E.reduce=up,E.reduceRight=dp,E.repeat=Zh,E.replace=Xh,E.result=Oh,E.round=$A,E.runInContext=c,E.sample=kp,E.size=fp,E.snakeCase=Qh,E.some=mp,E.sortedIndex=vT,E.sortedIndexBy=ET,E.sortedIndexOf=fT,E.sortedLastIndex=mT,E.sortedLastIndexBy=TT,E.sortedLastIndexOf=pT,E.startCase=nA,E.startsWith=rA,E.subtract=JA,E.sum=WA,E.sumBy=zA,E.template=tA,E.times=PA,E.toFinite=vr,E.toInteger=Ee,E.toLength=zu,E.toLower=aA,E.toNumber=wn,E.toSafeInteger=ah,E.toString=Ne,E.toUpper=iA,E.trim=sA,E.trimEnd=oA,E.trimStart=lA,E.truncate=uA,E.unescape=dA,E.uniqueId=MA,E.upperCase=gA,E.upperFirst=cs,E.each=ju,E.eachRight=Gu,E.first=Du,bs(E,function(){var n={};return er(E,function(r,o){Le.call(E.prototype,o)||(n[o]=r)}),n}(),{chain:!1}),E.VERSION=a,Fn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){E[n].placeholder=E}),Fn(["drop","take"],function(n,r){he.prototype[n]=function(o){o=o===t?1:ze(Ee(o),0);var u=this.__filtered__&&!r?new he(this):this.clone();return u.__filtered__?u.__takeCount__=sn(o,u.__takeCount__):u.__views__.push({size:sn(o,ue),type:n+(u.__dir__<0?"Right":"")}),u},he.prototype[n+"Right"]=function(o){return this.reverse()[n](o).reverse()}}),Fn(["filter","map","takeWhile"],function(n,r){var o=r+1,u=o==J||o==U;he.prototype[n]=function(k){var m=this.clone();return m.__iteratees__.push({iteratee:oe(k,3),type:o}),m.__filtered__=m.__filtered__||u,m}}),Fn(["head","last"],function(n,r){var o="take"+(r?"Right":"");he.prototype[n]=function(){return this[o](1).value()[0]}}),Fn(["initial","tail"],function(n,r){var o="drop"+(r?"":"Right");he.prototype[n]=function(){return this.__filtered__?new he(this):this[o](1)}}),he.prototype.compact=function(){return this.filter(yn)},he.prototype.find=function(n){return this.filter(n).head()},he.prototype.findLast=function(n){return this.reverse().find(n)},he.prototype.invokeMap=me(function(n,r){return typeof n=="function"?new he(this):this.map(function(o){return Dt(o,n,r)})}),he.prototype.reject=function(n){return this.filter(wa(oe(n)))},he.prototype.slice=function(n,r){n=Ee(n);var o=this;return o.__filtered__&&(n>0||r<0)?new he(o):(n<0?o=o.takeRight(-n):n&&(o=o.drop(n)),r!==t&&(r=Ee(r),o=r<0?o.dropRight(-r):o.take(r-n)),o)},he.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},he.prototype.toArray=function(){return this.take(ue)},er(he.prototype,function(n,r){var o=/^(?:filter|find|map|reject)|While$/.test(r),u=/^(?:head|last)$/.test(r),k=E[u?"take"+(r=="last"?"Right":""):r],m=u||/^find/.test(r);k&&(E.prototype[r]=function(){var p=this.__wrapped__,A=u?[1]:arguments,_=p instanceof he,G=A[0],B=_||ve(p),V=function(Te){var Ae=k.apply(E,pr([Te],A));return u&&z?Ae[0]:Ae};B&&o&&typeof G=="function"&&G.length!=1&&(_=B=!1);var z=this.__chain__,re=!!this.__actions__.length,de=m&&!z,fe=_&&!re;if(!m&&B){p=fe?p:new he(this);var ge=n.apply(p,A);return ge.__actions__.push({func:ja,args:[V],thisArg:t}),new jn(ge,z)}return de&&fe?n.apply(this,A):(ge=this.thru(V),de?u?ge.value()[0]:ge.value():ge)})}),Fn(["pop","push","shift","sort","splice","unshift"],function(n){var r=la[n],o=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",u=/^(?:pop|shift)$/.test(n);E.prototype[n]=function(){var k=arguments;if(u&&!this.__chain__){var m=this.value();return r.apply(ve(m)?m:[],k)}return this[o](function(p){return r.apply(ve(p)?p:[],k)})}}),er(he.prototype,function(n,r){var o=E[r];if(o){var u=o.name+"";Le.call(rt,u)||(rt[u]=[]),rt[u].push({name:r,func:o})}}),rt[Oa(t,D).name]=[{name:"wrapper",func:t}],he.prototype.clone=df,he.prototype.reverse=gf,he.prototype.value=kf,E.prototype.at=HT,E.prototype.chain=UT,E.prototype.commit=qT,E.prototype.next=xT,E.prototype.plant=CT,E.prototype.reverse=$T,E.prototype.toJSON=E.prototype.valueOf=E.prototype.value=JT,E.prototype.first=E.prototype.head,bt&&(E.prototype[bt]=YT),E},Qr=UE();Or?((Or.exports=Qr)._=Qr,_i._=Qr):nn._=Qr}).call(Vt)})(Za,Za.exports);Za.exports;mn(ti);const Tk=P.forwardRef((e,i)=>M.jsx(dt,{gap:"2",style:{display:"flex"},...e,ref:i}));Tk.displayName="FaktaGruppe";Tk.__docgenInfo={description:"",methods:[],displayName:"FaktaGruppe"};var pk={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var i={}.hasOwnProperty;function t(){for(var l="",d=0;d<arguments.length;d++){var g=arguments[d];g&&(l=s(l,a(g)))}return l}function a(l){if(typeof l=="string"||typeof l=="number")return l;if(typeof l!="object")return"";if(Array.isArray(l))return t.apply(null,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var d="";for(var g in l)i.call(l,g)&&l[g]&&(d=s(d,g));return d}function s(l,d){return d?l?l+" "+d:l+d:l}e.exports?(t.default=t,e.exports=t):window.classNames=t})()})(pk);var Ub=pk.exports;const ao=lg(Ub);var qb=Object.defineProperty,xb=(e,i,t)=>i in e?qb(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t,Vd=(e,i,t)=>xb(e,typeof i!="symbol"?i+"":i,t),Yb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function hk(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ak={exports:{}},Ut={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wd;function Cb(){if(wd)return Ut;wd=1;var e=Y,i=Symbol.for("react.element"),t=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(g,v,T){var f,h={},y=null,K=null;T!==void 0&&(y=""+T),v.key!==void 0&&(y=""+v.key),v.ref!==void 0&&(K=v.ref);for(f in v)a.call(v,f)&&!l.hasOwnProperty(f)&&(h[f]=v[f]);if(g&&g.defaultProps)for(f in v=g.defaultProps,v)h[f]===void 0&&(h[f]=v[f]);return{$$typeof:i,type:g,key:y,ref:K,props:h,_owner:s.current}}return Ut.Fragment=t,Ut.jsx=d,Ut.jsxs=d,Ut}Ak.exports=Cb();var pe=Ak.exports,yk={exports:{}};(function(e,i){(function(t,a){e.exports=a()})(Yb,function(){var t=1e3,a=6e4,s=36e5,l="millisecond",d="second",g="minute",v="hour",T="day",f="week",h="month",y="quarter",K="year",j="date",R="Invalid Date",N=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,D=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,q={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(J){var H=["th","st","nd","rd"],U=J%100;return"["+J+(H[(U-20)%10]||H[U]||H[0])+"]"}},L=function(J,H,U){var Z=String(J);return!Z||Z.length>=H?J:""+Array(H+1-Z.length).join(U)+J},Q={s:L,z:function(J){var H=-J.utcOffset(),U=Math.abs(H),Z=Math.floor(U/60),C=U%60;return(H<=0?"+":"-")+L(Z,2,"0")+":"+L(C,2,"0")},m:function J(H,U){if(H.date()<U.date())return-J(U,H);var Z=12*(U.year()-H.year())+(U.month()-H.month()),C=H.clone().add(Z,h),ie=U-C<0,se=H.clone().add(Z+(ie?-1:1),h);return+(-(Z+(U-C)/(ie?C-se:se-C))||0)},a:function(J){return J<0?Math.ceil(J)||0:Math.floor(J)},p:function(J){return{M:h,y:K,w:f,d:T,D:j,h:v,m:g,s:d,ms:l,Q:y}[J]||String(J||"").toLowerCase().replace(/s$/,"")},u:function(J){return J===void 0}},O="en",w={};w[O]=q;var I="$isDayjsObject",b=function(J){return J instanceof te||!(!J||!J[I])},$=function J(H,U,Z){var C;if(!H)return O;if(typeof H=="string"){var ie=H.toLowerCase();w[ie]&&(C=ie),U&&(w[ie]=U,C=ie);var se=H.split("-");if(!C&&se.length>1)return J(se[0])}else{var ue=H.name;w[ue]=H,C=ue}return!Z&&C&&(O=C),C||!Z&&O},W=function(J,H){if(b(J))return J.clone();var U=typeof H=="object"?H:{};return U.date=J,U.args=arguments,new te(U)},x=Q;x.l=$,x.i=b,x.w=function(J,H){return W(J,{locale:H.$L,utc:H.$u,x:H.$x,$offset:H.$offset})};var te=function(){function J(U){this.$L=$(U.locale,null,!0),this.parse(U),this.$x=this.$x||U.x||{},this[I]=!0}var H=J.prototype;return H.parse=function(U){this.$d=function(Z){var C=Z.date,ie=Z.utc;if(C===null)return new Date(NaN);if(x.u(C))return new Date;if(C instanceof Date)return new Date(C);if(typeof C=="string"&&!/Z$/i.test(C)){var se=C.match(N);if(se){var ue=se[2]-1||0,De=(se[7]||"0").substring(0,3);return ie?new Date(Date.UTC(se[1],ue,se[3]||1,se[4]||0,se[5]||0,se[6]||0,De)):new Date(se[1],ue,se[3]||1,se[4]||0,se[5]||0,se[6]||0,De)}}return new Date(C)}(U),this.init()},H.init=function(){var U=this.$d;this.$y=U.getFullYear(),this.$M=U.getMonth(),this.$D=U.getDate(),this.$W=U.getDay(),this.$H=U.getHours(),this.$m=U.getMinutes(),this.$s=U.getSeconds(),this.$ms=U.getMilliseconds()},H.$utils=function(){return x},H.isValid=function(){return this.$d.toString()!==R},H.isSame=function(U,Z){var C=W(U);return this.startOf(Z)<=C&&C<=this.endOf(Z)},H.isAfter=function(U,Z){return W(U)<this.startOf(Z)},H.isBefore=function(U,Z){return this.endOf(Z)<W(U)},H.$g=function(U,Z,C){return x.u(U)?this[Z]:this.set(C,U)},H.unix=function(){return Math.floor(this.valueOf()/1e3)},H.valueOf=function(){return this.$d.getTime()},H.startOf=function(U,Z){var C=this,ie=!!x.u(Z)||Z,se=x.p(U),ue=function(tn,Je){var en=x.w(C.$u?Date.UTC(C.$y,Je,tn):new Date(C.$y,Je,tn),C);return ie?en:en.endOf(T)},De=function(tn,Je){return x.w(C.toDate()[tn].apply(C.toDate("s"),(ie?[0,0,0,0]:[23,59,59,999]).slice(Je)),C)},Me=this.$W,$e=this.$M,qe=this.$D,cn="set"+(this.$u?"UTC":"");switch(se){case K:return ie?ue(1,0):ue(31,11);case h:return ie?ue(1,$e):ue(0,$e+1);case f:var qn=this.$locale().weekStart||0,Rn=(Me<qn?Me+7:Me)-qn;return ue(ie?qe-Rn:qe+(6-Rn),$e);case T:case j:return De(cn+"Hours",0);case v:return De(cn+"Minutes",1);case g:return De(cn+"Seconds",2);case d:return De(cn+"Milliseconds",3);default:return this.clone()}},H.endOf=function(U){return this.startOf(U,!1)},H.$set=function(U,Z){var C,ie=x.p(U),se="set"+(this.$u?"UTC":""),ue=(C={},C[T]=se+"Date",C[j]=se+"Date",C[h]=se+"Month",C[K]=se+"FullYear",C[v]=se+"Hours",C[g]=se+"Minutes",C[d]=se+"Seconds",C[l]=se+"Milliseconds",C)[ie],De=ie===T?this.$D+(Z-this.$W):Z;if(ie===h||ie===K){var Me=this.clone().set(j,1);Me.$d[ue](De),Me.init(),this.$d=Me.set(j,Math.min(this.$D,Me.daysInMonth())).$d}else ue&&this.$d[ue](De);return this.init(),this},H.set=function(U,Z){return this.clone().$set(U,Z)},H.get=function(U){return this[x.p(U)]()},H.add=function(U,Z){var C,ie=this;U=Number(U);var se=x.p(Z),ue=function($e){var qe=W(ie);return x.w(qe.date(qe.date()+Math.round($e*U)),ie)};if(se===h)return this.set(h,this.$M+U);if(se===K)return this.set(K,this.$y+U);if(se===T)return ue(1);if(se===f)return ue(7);var De=(C={},C[g]=a,C[v]=s,C[d]=t,C)[se]||1,Me=this.$d.getTime()+U*De;return x.w(Me,this)},H.subtract=function(U,Z){return this.add(-1*U,Z)},H.format=function(U){var Z=this,C=this.$locale();if(!this.isValid())return C.invalidDate||R;var ie=U||"YYYY-MM-DDTHH:mm:ssZ",se=x.z(this),ue=this.$H,De=this.$m,Me=this.$M,$e=C.weekdays,qe=C.months,cn=C.meridiem,qn=function(Je,en,Tn,xn){return Je&&(Je[en]||Je(Z,ie))||Tn[en].slice(0,xn)},Rn=function(Je){return x.s(ue%12||12,Je,"0")},tn=cn||function(Je,en,Tn){var xn=Je<12?"AM":"PM";return Tn?xn.toLowerCase():xn};return ie.replace(D,function(Je,en){return en||function(Tn){switch(Tn){case"YY":return String(Z.$y).slice(-2);case"YYYY":return x.s(Z.$y,4,"0");case"M":return Me+1;case"MM":return x.s(Me+1,2,"0");case"MMM":return qn(C.monthsShort,Me,qe,3);case"MMMM":return qn(qe,Me);case"D":return Z.$D;case"DD":return x.s(Z.$D,2,"0");case"d":return String(Z.$W);case"dd":return qn(C.weekdaysMin,Z.$W,$e,2);case"ddd":return qn(C.weekdaysShort,Z.$W,$e,3);case"dddd":return $e[Z.$W];case"H":return String(ue);case"HH":return x.s(ue,2,"0");case"h":return Rn(1);case"hh":return Rn(2);case"a":return tn(ue,De,!0);case"A":return tn(ue,De,!1);case"m":return String(De);case"mm":return x.s(De,2,"0");case"s":return String(Z.$s);case"ss":return x.s(Z.$s,2,"0");case"SSS":return x.s(Z.$ms,3,"0");case"Z":return se}return null}(Je)||se.replace(":","")})},H.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},H.diff=function(U,Z,C){var ie,se=this,ue=x.p(Z),De=W(U),Me=(De.utcOffset()-this.utcOffset())*a,$e=this-De,qe=function(){return x.m(se,De)};switch(ue){case K:ie=qe()/12;break;case h:ie=qe();break;case y:ie=qe()/3;break;case f:ie=($e-Me)/6048e5;break;case T:ie=($e-Me)/864e5;break;case v:ie=$e/s;break;case g:ie=$e/a;break;case d:ie=$e/t;break;default:ie=$e}return C?ie:x.a(ie)},H.daysInMonth=function(){return this.endOf(h).$D},H.$locale=function(){return w[this.$L]},H.locale=function(U,Z){if(!U)return this.$L;var C=this.clone(),ie=$(U,Z,!0);return ie&&(C.$L=ie),C},H.clone=function(){return x.w(this.$d,this)},H.toDate=function(){return new Date(this.valueOf())},H.toJSON=function(){return this.isValid()?this.toISOString():null},H.toISOString=function(){return this.$d.toISOString()},H.toString=function(){return this.$d.toUTCString()},J}(),le=te.prototype;return W.prototype=le,[["$ms",l],["$s",d],["$m",g],["$H",v],["$W",T],["$M",h],["$y",K],["$D",j]].forEach(function(J){le[J[1]]=function(H){return this.$g(H,J[0],J[1])}}),W.extend=function(J,H){return J.$i||(J(H,te,W),J.$i=!0),W},W.locale=$,W.isDayjs=b,W.unix=function(J){return W(1e3*J)},W.en=w[O],W.Ls=w,W.p={},W})})(yk);var $b=yk.exports;const ai=hk($b);var io=function(e,i){return io=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s])},io(e,i)};function Xn(e,i){if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");io(e,i);function t(){this.constructor=e}e.prototype=i===null?Object.create(i):(t.prototype=i.prototype,new t)}var ne=function(){return ne=Object.assign||function(e){for(var i,t=1,a=arguments.length;t<a;t++){i=arguments[t];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e},ne.apply(this,arguments)};function ii(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t}function fn(e,i,t){if(arguments.length===2)for(var a=0,s=i.length,l;a<s;a++)(l||!(a in i))&&(l||(l=Array.prototype.slice.call(i,0,a)),l[a]=i[a]);return e.concat(l||Array.prototype.slice.call(i))}function vn(e,i){var t=i&&i.cache?i.cache:Qb,a=i&&i.serializer?i.serializer:Xb,s=i&&i.strategy?i.strategy:Wb;return s(e,{cache:t,serializer:a})}function Jb(e){return e==null||typeof e=="number"||typeof e=="boolean"}function ck(e,i,t,a){var s=Jb(a)?a:t(a),l=i.get(s);return typeof l>"u"&&(l=e.call(this,a),i.set(s,l)),l}function Rk(e,i,t){var a=Array.prototype.slice.call(arguments,3),s=t(a),l=i.get(s);return typeof l>"u"&&(l=e.apply(this,a),i.set(s,l)),l}function Io(e,i,t,a,s){return t.bind(i,e,a,s)}function Wb(e,i){var t=e.length===1?ck:Rk;return Io(e,this,t,i.cache.create(),i.serializer)}function zb(e,i){return Io(e,this,Rk,i.cache.create(),i.serializer)}function Zb(e,i){return Io(e,this,ck,i.cache.create(),i.serializer)}var Xb=function(){return JSON.stringify(arguments)};function Oo(){this.cache=Object.create(null)}Oo.prototype.get=function(e){return this.cache[e]};Oo.prototype.set=function(e,i){this.cache[e]=i};var Qb={create:function(){return new Oo}},En={variadic:zb,monadic:Zb};function _k(e,i,t){if(t===void 0&&(t=Error),!e)throw new t(i)}vn(function(){for(var e,i=[],t=0;t<arguments.length;t++)i[t]=arguments[t];return new((e=Intl.NumberFormat).bind.apply(e,fn([void 0],i,!1)))},{strategy:En.variadic});vn(function(){for(var e,i=[],t=0;t<arguments.length;t++)i[t]=arguments[t];return new((e=Intl.DateTimeFormat).bind.apply(e,fn([void 0],i,!1)))},{strategy:En.variadic});vn(function(){for(var e,i=[],t=0;t<arguments.length;t++)i[t]=arguments[t];return new((e=Intl.PluralRules).bind.apply(e,fn([void 0],i,!1)))},{strategy:En.variadic});vn(function(){for(var e,i=[],t=0;t<arguments.length;t++)i[t]=arguments[t];return new((e=Intl.Locale).bind.apply(e,fn([void 0],i,!1)))},{strategy:En.variadic});vn(function(){for(var e,i=[],t=0;t<arguments.length;t++)i[t]=arguments[t];return new((e=Intl.ListFormat).bind.apply(e,fn([void 0],i,!1)))},{strategy:En.variadic});var ce;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(ce||(ce={}));var Ge;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(Ge||(Ge={}));var mt;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(mt||(mt={}));function Hd(e){return e.type===Ge.literal}function eN(e){return e.type===Ge.argument}function bk(e){return e.type===Ge.number}function Nk(e){return e.type===Ge.date}function Sk(e){return e.type===Ge.time}function Ik(e){return e.type===Ge.select}function Ok(e){return e.type===Ge.plural}function nN(e){return e.type===Ge.pound}function Lk(e){return e.type===Ge.tag}function Kk(e){return!!(e&&typeof e=="object"&&e.type===mt.number)}function so(e){return!!(e&&typeof e=="object"&&e.type===mt.dateTime)}var Dk=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,rN=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function tN(e){var i={};return e.replace(rN,function(t){var a=t.length;switch(t[0]){case"G":i.era=a===4?"long":a===5?"narrow":"short";break;case"y":i.year=a===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":i.month=["numeric","2-digit","short","long","narrow"][a-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":i.day=["numeric","2-digit"][a-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":i.weekday=a===4?"long":a===5?"narrow":"short";break;case"e":if(a<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");i.weekday=["short","long","narrow","short"][a-4];break;case"c":if(a<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");i.weekday=["short","long","narrow","short"][a-4];break;case"a":i.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":i.hourCycle="h12",i.hour=["numeric","2-digit"][a-1];break;case"H":i.hourCycle="h23",i.hour=["numeric","2-digit"][a-1];break;case"K":i.hourCycle="h11",i.hour=["numeric","2-digit"][a-1];break;case"k":i.hourCycle="h24",i.hour=["numeric","2-digit"][a-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":i.minute=["numeric","2-digit"][a-1];break;case"s":i.second=["numeric","2-digit"][a-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":i.timeZoneName=a<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),i}var aN=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function iN(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var i=e.split(aN).filter(function(y){return y.length>0}),t=[],a=0,s=i;a<s.length;a++){var l=s[a],d=l.split("/");if(d.length===0)throw new Error("Invalid number skeleton");for(var g=d[0],v=d.slice(1),T=0,f=v;T<f.length;T++){var h=f[T];if(h.length===0)throw new Error("Invalid number skeleton")}t.push({stem:g,options:v})}return t}function sN(e){return e.replace(/^(.*?)-/,"")}var Ud=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,Pk=/^(@+)?(\+|#+)?[rs]?$/g,oN=/(\*)(0+)|(#+)(0+)|(0+)/g,Fk=/^(0+)$/;function qd(e){var i={};return e[e.length-1]==="r"?i.roundingPriority="morePrecision":e[e.length-1]==="s"&&(i.roundingPriority="lessPrecision"),e.replace(Pk,function(t,a,s){return typeof s!="string"?(i.minimumSignificantDigits=a.length,i.maximumSignificantDigits=a.length):s==="+"?i.minimumSignificantDigits=a.length:a[0]==="#"?i.maximumSignificantDigits=a.length:(i.minimumSignificantDigits=a.length,i.maximumSignificantDigits=a.length+(typeof s=="string"?s.length:0)),""}),i}function Mk(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function lN(e){var i;if(e[0]==="E"&&e[1]==="E"?(i={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(i={notation:"scientific"},e=e.slice(1)),i){var t=e.slice(0,2);if(t==="+!"?(i.signDisplay="always",e=e.slice(2)):t==="+?"&&(i.signDisplay="exceptZero",e=e.slice(2)),!Fk.test(e))throw new Error("Malformed concise eng/scientific notation");i.minimumIntegerDigits=e.length}return i}function xd(e){var i={},t=Mk(e);return t||i}function uN(e){for(var i={},t=0,a=e;t<a.length;t++){var s=a[t];switch(s.stem){case"percent":case"%":i.style="percent";continue;case"%x100":i.style="percent",i.scale=100;continue;case"currency":i.style="currency",i.currency=s.options[0];continue;case"group-off":case",_":i.useGrouping=!1;continue;case"precision-integer":case".":i.maximumFractionDigits=0;continue;case"measure-unit":case"unit":i.style="unit",i.unit=sN(s.options[0]);continue;case"compact-short":case"K":i.notation="compact",i.compactDisplay="short";continue;case"compact-long":case"KK":i.notation="compact",i.compactDisplay="long";continue;case"scientific":i=ne(ne(ne({},i),{notation:"scientific"}),s.options.reduce(function(v,T){return ne(ne({},v),xd(T))},{}));continue;case"engineering":i=ne(ne(ne({},i),{notation:"engineering"}),s.options.reduce(function(v,T){return ne(ne({},v),xd(T))},{}));continue;case"notation-simple":i.notation="standard";continue;case"unit-width-narrow":i.currencyDisplay="narrowSymbol",i.unitDisplay="narrow";continue;case"unit-width-short":i.currencyDisplay="code",i.unitDisplay="short";continue;case"unit-width-full-name":i.currencyDisplay="name",i.unitDisplay="long";continue;case"unit-width-iso-code":i.currencyDisplay="symbol";continue;case"scale":i.scale=parseFloat(s.options[0]);continue;case"rounding-mode-floor":i.roundingMode="floor";continue;case"rounding-mode-ceiling":i.roundingMode="ceil";continue;case"rounding-mode-down":i.roundingMode="trunc";continue;case"rounding-mode-up":i.roundingMode="expand";continue;case"rounding-mode-half-even":i.roundingMode="halfEven";continue;case"rounding-mode-half-down":i.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":i.roundingMode="halfExpand";continue;case"integer-width":if(s.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");s.options[0].replace(oN,function(v,T,f,h,y,K){if(T)i.minimumIntegerDigits=f.length;else{if(h&&y)throw new Error("We currently do not support maximum integer digits");if(K)throw new Error("We currently do not support exact integer digits")}return""});continue}if(Fk.test(s.stem)){i.minimumIntegerDigits=s.stem.length;continue}if(Ud.test(s.stem)){if(s.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");s.stem.replace(Ud,function(v,T,f,h,y,K){return f==="*"?i.minimumFractionDigits=T.length:h&&h[0]==="#"?i.maximumFractionDigits=h.length:y&&K?(i.minimumFractionDigits=y.length,i.maximumFractionDigits=y.length+K.length):(i.minimumFractionDigits=T.length,i.maximumFractionDigits=T.length),""});var l=s.options[0];l==="w"?i=ne(ne({},i),{trailingZeroDisplay:"stripIfInteger"}):l&&(i=ne(ne({},i),qd(l)));continue}if(Pk.test(s.stem)){i=ne(ne({},i),qd(s.stem));continue}var d=Mk(s.stem);d&&(i=ne(ne({},i),d));var g=lN(s.stem);g&&(i=ne(ne({},i),g))}return i}var Ca={"001":["H","h"],419:["h","H","hB","hb"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["h","H","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["h","H","hB","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["h","H","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["h","H","hB","hb"],CU:["h","H","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["h","H","hB","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["h","H","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["h","H","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["h","H","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["h","H","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["h","H","hB","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["h","H","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["h","H","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["h","H","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"en-HK":["h","hb","H","hB"],"en-IL":["H","h","hb","hB"],"en-MY":["h","hb","H","hB"],"es-BR":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function dN(e,i){for(var t="",a=0;a<e.length;a++){var s=e.charAt(a);if(s==="j"){for(var l=0;a+1<e.length&&e.charAt(a+1)===s;)l++,a++;var d=1+(l&1),g=l<2?1:3+(l>>1),v="a",T=gN(i);for((T=="H"||T=="k")&&(g=0);g-- >0;)t+=v;for(;d-- >0;)t=T+t}else s==="J"?t+="H":t+=s}return t}function gN(e){var i=e.hourCycle;if(i===void 0&&e.hourCycles&&e.hourCycles.length&&(i=e.hourCycles[0]),i)switch(i){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var t=e.language,a;t!=="root"&&(a=e.maximize().region);var s=Ca[a||""]||Ca[t||""]||Ca["".concat(t,"-001")]||Ca["001"];return s[0]}var Gs,kN=new RegExp("^".concat(Dk.source,"*")),vN=new RegExp("".concat(Dk.source,"*$"));function _e(e,i){return{start:e,end:i}}var EN=!!String.prototype.startsWith&&"_a".startsWith("a",1),fN=!!String.fromCodePoint,mN=!!Object.fromEntries,TN=!!String.prototype.codePointAt,pN=!!String.prototype.trimStart,hN=!!String.prototype.trimEnd,AN=!!Number.isSafeInteger,yN=AN?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},oo=!0;try{var cN=Gk("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");oo=((Gs=cN.exec("a"))===null||Gs===void 0?void 0:Gs[0])==="a"}catch{oo=!1}var Yd=EN?function(e,i,t){return e.startsWith(i,t)}:function(e,i,t){return e.slice(t,t+i.length)===i},lo=fN?String.fromCodePoint:function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];for(var t="",a=e.length,s=0,l;a>s;){if(l=e[s++],l>1114111)throw RangeError(l+" is not a valid code point");t+=l<65536?String.fromCharCode(l):String.fromCharCode(((l-=65536)>>10)+55296,l%1024+56320)}return t},Cd=mN?Object.fromEntries:function(e){for(var i={},t=0,a=e;t<a.length;t++){var s=a[t],l=s[0],d=s[1];i[l]=d}return i},jk=TN?function(e,i){return e.codePointAt(i)}:function(e,i){var t=e.length;if(!(i<0||i>=t)){var a=e.charCodeAt(i),s;return a<55296||a>56319||i+1===t||(s=e.charCodeAt(i+1))<56320||s>57343?a:(a-55296<<10)+(s-56320)+65536}},RN=pN?function(e){return e.trimStart()}:function(e){return e.replace(kN,"")},_N=hN?function(e){return e.trimEnd()}:function(e){return e.replace(vN,"")};function Gk(e,i){return new RegExp(e,i)}var uo;if(oo){var $d=Gk("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");uo=function(e,i){var t;$d.lastIndex=i;var a=$d.exec(e);return(t=a[1])!==null&&t!==void 0?t:""}}else uo=function(e,i){for(var t=[];;){var a=jk(e,i);if(a===void 0||Bk(a)||IN(a))break;t.push(a),i+=a>=65536?2:1}return lo.apply(void 0,t)};var bN=function(){function e(i,t){t===void 0&&(t={}),this.message=i,this.position={offset:0,line:1,column:1},this.ignoreTag=!!t.ignoreTag,this.locale=t.locale,this.requiresOtherClause=!!t.requiresOtherClause,this.shouldParseSkeletons=!!t.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(i,t,a){for(var s=[];!this.isEOF();){var l=this.char();if(l===123){var d=this.parseArgument(i,a);if(d.err)return d;s.push(d.val)}else{if(l===125&&i>0)break;if(l===35&&(t==="plural"||t==="selectordinal")){var g=this.clonePosition();this.bump(),s.push({type:Ge.pound,location:_e(g,this.clonePosition())})}else if(l===60&&!this.ignoreTag&&this.peek()===47){if(a)break;return this.error(ce.UNMATCHED_CLOSING_TAG,_e(this.clonePosition(),this.clonePosition()))}else if(l===60&&!this.ignoreTag&&go(this.peek()||0)){var d=this.parseTag(i,t);if(d.err)return d;s.push(d.val)}else{var d=this.parseLiteral(i,t);if(d.err)return d;s.push(d.val)}}}return{val:s,err:null}},e.prototype.parseTag=function(i,t){var a=this.clonePosition();this.bump();var s=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:Ge.literal,value:"<".concat(s,"/>"),location:_e(a,this.clonePosition())},err:null};if(this.bumpIf(">")){var l=this.parseMessage(i+1,t,!0);if(l.err)return l;var d=l.val,g=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!go(this.char()))return this.error(ce.INVALID_TAG,_e(g,this.clonePosition()));var v=this.clonePosition(),T=this.parseTagName();return s!==T?this.error(ce.UNMATCHED_CLOSING_TAG,_e(v,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:Ge.tag,value:s,children:d,location:_e(a,this.clonePosition())},err:null}:this.error(ce.INVALID_TAG,_e(g,this.clonePosition())))}else return this.error(ce.UNCLOSED_TAG,_e(a,this.clonePosition()))}else return this.error(ce.INVALID_TAG,_e(a,this.clonePosition()))},e.prototype.parseTagName=function(){var i=this.offset();for(this.bump();!this.isEOF()&&SN(this.char());)this.bump();return this.message.slice(i,this.offset())},e.prototype.parseLiteral=function(i,t){for(var a=this.clonePosition(),s="";;){var l=this.tryParseQuote(t);if(l){s+=l;continue}var d=this.tryParseUnquoted(i,t);if(d){s+=d;continue}var g=this.tryParseLeftAngleBracket();if(g){s+=g;continue}break}var v=_e(a,this.clonePosition());return{val:{type:Ge.literal,value:s,location:v},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!NN(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(i){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(i==="plural"||i==="selectordinal")break;return null;default:return null}this.bump();var t=[this.char()];for(this.bump();!this.isEOF();){var a=this.char();if(a===39)if(this.peek()===39)t.push(39),this.bump();else{this.bump();break}else t.push(a);this.bump()}return lo.apply(void 0,t)},e.prototype.tryParseUnquoted=function(i,t){if(this.isEOF())return null;var a=this.char();return a===60||a===123||a===35&&(t==="plural"||t==="selectordinal")||a===125&&i>0?null:(this.bump(),lo(a))},e.prototype.parseArgument=function(i,t){var a=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(ce.EXPECT_ARGUMENT_CLOSING_BRACE,_e(a,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(ce.EMPTY_ARGUMENT,_e(a,this.clonePosition()));var s=this.parseIdentifierIfPossible().value;if(!s)return this.error(ce.MALFORMED_ARGUMENT,_e(a,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(ce.EXPECT_ARGUMENT_CLOSING_BRACE,_e(a,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:Ge.argument,value:s,location:_e(a,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(ce.EXPECT_ARGUMENT_CLOSING_BRACE,_e(a,this.clonePosition())):this.parseArgumentOptions(i,t,s,a);default:return this.error(ce.MALFORMED_ARGUMENT,_e(a,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var i=this.clonePosition(),t=this.offset(),a=uo(this.message,t),s=t+a.length;this.bumpTo(s);var l=this.clonePosition(),d=_e(i,l);return{value:a,location:d}},e.prototype.parseArgumentOptions=function(i,t,a,s){var l,d=this.clonePosition(),g=this.parseIdentifierIfPossible().value,v=this.clonePosition();switch(g){case"":return this.error(ce.EXPECT_ARGUMENT_TYPE,_e(d,v));case"number":case"date":case"time":{this.bumpSpace();var T=null;if(this.bumpIf(",")){this.bumpSpace();var f=this.clonePosition(),h=this.parseSimpleArgStyleIfPossible();if(h.err)return h;var y=_N(h.val);if(y.length===0)return this.error(ce.EXPECT_ARGUMENT_STYLE,_e(this.clonePosition(),this.clonePosition()));var K=_e(f,this.clonePosition());T={style:y,styleLocation:K}}var j=this.tryParseArgumentClose(s);if(j.err)return j;var R=_e(s,this.clonePosition());if(T&&Yd(T==null?void 0:T.style,"::",0)){var N=RN(T.style.slice(2));if(g==="number"){var h=this.parseNumberSkeletonFromString(N,T.styleLocation);return h.err?h:{val:{type:Ge.number,value:a,location:R,style:h.val},err:null}}else{if(N.length===0)return this.error(ce.EXPECT_DATE_TIME_SKELETON,R);var D=N;this.locale&&(D=dN(N,this.locale));var y={type:mt.dateTime,pattern:D,location:T.styleLocation,parsedOptions:this.shouldParseSkeletons?tN(D):{}},q=g==="date"?Ge.date:Ge.time;return{val:{type:q,value:a,location:R,style:y},err:null}}}return{val:{type:g==="number"?Ge.number:g==="date"?Ge.date:Ge.time,value:a,location:R,style:(l=T==null?void 0:T.style)!==null&&l!==void 0?l:null},err:null}}case"plural":case"selectordinal":case"select":{var L=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(ce.EXPECT_SELECT_ARGUMENT_OPTIONS,_e(L,ne({},L)));this.bumpSpace();var Q=this.parseIdentifierIfPossible(),O=0;if(g!=="select"&&Q.value==="offset"){if(!this.bumpIf(":"))return this.error(ce.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,_e(this.clonePosition(),this.clonePosition()));this.bumpSpace();var h=this.tryParseDecimalInteger(ce.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,ce.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(h.err)return h;this.bumpSpace(),Q=this.parseIdentifierIfPossible(),O=h.val}var w=this.tryParsePluralOrSelectOptions(i,g,t,Q);if(w.err)return w;var j=this.tryParseArgumentClose(s);if(j.err)return j;var I=_e(s,this.clonePosition());return g==="select"?{val:{type:Ge.select,value:a,options:Cd(w.val),location:I},err:null}:{val:{type:Ge.plural,value:a,options:Cd(w.val),offset:O,pluralType:g==="plural"?"cardinal":"ordinal",location:I},err:null}}default:return this.error(ce.INVALID_ARGUMENT_TYPE,_e(d,v))}},e.prototype.tryParseArgumentClose=function(i){return this.isEOF()||this.char()!==125?this.error(ce.EXPECT_ARGUMENT_CLOSING_BRACE,_e(i,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var i=0,t=this.clonePosition();!this.isEOF();){var a=this.char();switch(a){case 39:{this.bump();var s=this.clonePosition();if(!this.bumpUntil("'"))return this.error(ce.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,_e(s,this.clonePosition()));this.bump();break}case 123:{i+=1,this.bump();break}case 125:{if(i>0)i-=1;else return{val:this.message.slice(t.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(t.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(i,t){var a=[];try{a=iN(i)}catch{return this.error(ce.INVALID_NUMBER_SKELETON,t)}return{val:{type:mt.number,tokens:a,location:t,parsedOptions:this.shouldParseSkeletons?uN(a):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(i,t,a,s){for(var l,d=!1,g=[],v=new Set,T=s.value,f=s.location;;){if(T.length===0){var h=this.clonePosition();if(t!=="select"&&this.bumpIf("=")){var y=this.tryParseDecimalInteger(ce.EXPECT_PLURAL_ARGUMENT_SELECTOR,ce.INVALID_PLURAL_ARGUMENT_SELECTOR);if(y.err)return y;f=_e(h,this.clonePosition()),T=this.message.slice(h.offset,this.offset())}else break}if(v.has(T))return this.error(t==="select"?ce.DUPLICATE_SELECT_ARGUMENT_SELECTOR:ce.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,f);T==="other"&&(d=!0),this.bumpSpace();var K=this.clonePosition();if(!this.bumpIf("{"))return this.error(t==="select"?ce.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:ce.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,_e(this.clonePosition(),this.clonePosition()));var j=this.parseMessage(i+1,t,a);if(j.err)return j;var R=this.tryParseArgumentClose(K);if(R.err)return R;g.push([T,{value:j.val,location:_e(K,this.clonePosition())}]),v.add(T),this.bumpSpace(),l=this.parseIdentifierIfPossible(),T=l.value,f=l.location}return g.length===0?this.error(t==="select"?ce.EXPECT_SELECT_ARGUMENT_SELECTOR:ce.EXPECT_PLURAL_ARGUMENT_SELECTOR,_e(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!d?this.error(ce.MISSING_OTHER_CLAUSE,_e(this.clonePosition(),this.clonePosition())):{val:g,err:null}},e.prototype.tryParseDecimalInteger=function(i,t){var a=1,s=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(a=-1);for(var l=!1,d=0;!this.isEOF();){var g=this.char();if(g>=48&&g<=57)l=!0,d=d*10+(g-48),this.bump();else break}var v=_e(s,this.clonePosition());return l?(d*=a,yN(d)?{val:d,err:null}:this.error(t,v)):this.error(i,v)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var i=this.position.offset;if(i>=this.message.length)throw Error("out of bound");var t=jk(this.message,i);if(t===void 0)throw Error("Offset ".concat(i," is at invalid UTF-16 code unit boundary"));return t},e.prototype.error=function(i,t){return{val:null,err:{kind:i,message:this.message,location:t}}},e.prototype.bump=function(){if(!this.isEOF()){var i=this.char();i===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=i<65536?1:2)}},e.prototype.bumpIf=function(i){if(Yd(this.message,i,this.offset())){for(var t=0;t<i.length;t++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(i){var t=this.offset(),a=this.message.indexOf(i,t);return a>=0?(this.bumpTo(a),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(i){if(this.offset()>i)throw Error("targetOffset ".concat(i," must be greater than or equal to the current offset ").concat(this.offset()));for(i=Math.min(i,this.message.length);;){var t=this.offset();if(t===i)break;if(t>i)throw Error("targetOffset ".concat(i," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&Bk(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var i=this.char(),t=this.offset(),a=this.message.charCodeAt(t+(i>=65536?2:1));return a??null},e}();function go(e){return e>=97&&e<=122||e>=65&&e<=90}function NN(e){return go(e)||e===47}function SN(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function Bk(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function IN(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function ko(e){e.forEach(function(i){if(delete i.location,Ik(i)||Ok(i))for(var t in i.options)delete i.options[t].location,ko(i.options[t].value);else bk(i)&&Kk(i.style)||(Nk(i)||Sk(i))&&so(i.style)?delete i.style.location:Lk(i)&&ko(i.children)})}function ON(e,i){i===void 0&&(i={}),i=ne({shouldParseSkeletons:!0,requiresOtherClause:!0},i);var t=new bN(e,i).parse();if(t.err){var a=SyntaxError(ce[t.err.kind]);throw a.location=t.err.location,a.originalMessage=t.err.message,a}return i!=null&&i.captureLocation||ko(t.val),t.val}var ir;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(ir||(ir={}));var Ir=function(e){Xn(i,e);function i(t,a,s){var l=e.call(this,t)||this;return l.code=a,l.originalMessage=s,l}return i.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},i}(Error),Jd=function(e){Xn(i,e);function i(t,a,s,l){return e.call(this,'Invalid values for "'.concat(t,'": "').concat(a,'". Options are "').concat(Object.keys(s).join('", "'),'"'),ir.INVALID_VALUE,l)||this}return i}(Ir),LN=function(e){Xn(i,e);function i(t,a,s){return e.call(this,'Value for "'.concat(t,'" must be of type ').concat(a),ir.INVALID_VALUE,s)||this}return i}(Ir),KN=function(e){Xn(i,e);function i(t,a){return e.call(this,'The intl string context variable "'.concat(t,'" was not provided to the string "').concat(a,'"'),ir.MISSING_VALUE,a)||this}return i}(Ir),kn;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(kn||(kn={}));function DN(e){return e.length<2?e:e.reduce(function(i,t){var a=i[i.length-1];return!a||a.type!==kn.literal||t.type!==kn.literal?i.push(t):a.value+=t.value,i},[])}function Vk(e){return typeof e=="function"}function Wa(e,i,t,a,s,l,d){if(e.length===1&&Hd(e[0]))return[{type:kn.literal,value:e[0].value}];for(var g=[],v=0,T=e;v<T.length;v++){var f=T[v];if(Hd(f)){g.push({type:kn.literal,value:f.value});continue}if(nN(f)){typeof l=="number"&&g.push({type:kn.literal,value:t.getNumberFormat(i).format(l)});continue}var h=f.value;if(!(s&&h in s))throw new KN(h,d);var y=s[h];if(eN(f)){(!y||typeof y=="string"||typeof y=="number")&&(y=typeof y=="string"||typeof y=="number"?String(y):""),g.push({type:typeof y=="string"?kn.literal:kn.object,value:y});continue}if(Nk(f)){var K=typeof f.style=="string"?a.date[f.style]:so(f.style)?f.style.parsedOptions:void 0;g.push({type:kn.literal,value:t.getDateTimeFormat(i,K).format(y)});continue}if(Sk(f)){var K=typeof f.style=="string"?a.time[f.style]:so(f.style)?f.style.parsedOptions:a.time.medium;g.push({type:kn.literal,value:t.getDateTimeFormat(i,K).format(y)});continue}if(bk(f)){var K=typeof f.style=="string"?a.number[f.style]:Kk(f.style)?f.style.parsedOptions:void 0;K&&K.scale&&(y=y*(K.scale||1)),g.push({type:kn.literal,value:t.getNumberFormat(i,K).format(y)});continue}if(Lk(f)){var j=f.children,R=f.value,N=s[R];if(!Vk(N))throw new LN(R,"function",d);var D=Wa(j,i,t,a,s,l),q=N(D.map(function(O){return O.value}));Array.isArray(q)||(q=[q]),g.push.apply(g,q.map(function(O){return{type:typeof O=="string"?kn.literal:kn.object,value:O}}))}if(Ik(f)){var L=f.options[y]||f.options.other;if(!L)throw new Jd(f.value,y,Object.keys(f.options),d);g.push.apply(g,Wa(L.value,i,t,a,s));continue}if(Ok(f)){var L=f.options["=".concat(y)];if(!L){if(!Intl.PluralRules)throw new Ir(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,ir.MISSING_INTL_API,d);var Q=t.getPluralRules(i,{type:f.pluralType}).select(y-(f.offset||0));L=f.options[Q]||f.options.other}if(!L)throw new Jd(f.value,y,Object.keys(f.options),d);g.push.apply(g,Wa(L.value,i,t,a,s,y-(f.offset||0)));continue}}return DN(g)}function PN(e,i){return i?ne(ne(ne({},e||{}),i||{}),Object.keys(e).reduce(function(t,a){return t[a]=ne(ne({},e[a]),i[a]||{}),t},{})):e}function FN(e,i){return i?Object.keys(e).reduce(function(t,a){return t[a]=PN(e[a],i[a]),t},ne({},e)):e}function Bs(e){return{create:function(){return{get:function(i){return e[i]},set:function(i,t){e[i]=t}}}}}function MN(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:vn(function(){for(var i,t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return new((i=Intl.NumberFormat).bind.apply(i,fn([void 0],t,!1)))},{cache:Bs(e.number),strategy:En.variadic}),getDateTimeFormat:vn(function(){for(var i,t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return new((i=Intl.DateTimeFormat).bind.apply(i,fn([void 0],t,!1)))},{cache:Bs(e.dateTime),strategy:En.variadic}),getPluralRules:vn(function(){for(var i,t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return new((i=Intl.PluralRules).bind.apply(i,fn([void 0],t,!1)))},{cache:Bs(e.pluralRules),strategy:En.variadic})}}var wk=function(){function e(i,t,a,s){t===void 0&&(t=e.defaultLocale);var l=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(v){var T=l.formatToParts(v);if(T.length===1)return T[0].value;var f=T.reduce(function(h,y){return!h.length||y.type!==kn.literal||typeof h[h.length-1]!="string"?h.push(y.value):h[h.length-1]+=y.value,h},[]);return f.length<=1?f[0]||"":f},this.formatToParts=function(v){return Wa(l.ast,l.locales,l.formatters,l.formats,v,void 0,l.message)},this.resolvedOptions=function(){var v;return{locale:((v=l.resolvedLocale)===null||v===void 0?void 0:v.toString())||Intl.NumberFormat.supportedLocalesOf(l.locales)[0]}},this.getAst=function(){return l.ast},this.locales=t,this.resolvedLocale=e.resolveLocale(t),typeof i=="string"){if(this.message=i,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var d=s||{};d.formatters;var g=ii(d,["formatters"]);this.ast=e.__parse(i,ne(ne({},g),{locale:this.resolvedLocale}))}else this.ast=i;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=FN(e.formats,a),this.formatters=s&&s.formatters||MN(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(i){if(!(typeof Intl.Locale>"u")){var t=Intl.NumberFormat.supportedLocalesOf(i);return t.length>0?new Intl.Locale(t[0]):new Intl.Locale(typeof i=="string"?i:i[0])}},e.__parse=ON,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}(),qr;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(qr||(qr={}));var Qt=function(e){Xn(i,e);function i(t,a,s){var l=this,d=s?s instanceof Error?s:new Error(String(s)):void 0;return l=e.call(this,"[@formatjs/intl Error ".concat(t,"] ").concat(a,`
`).concat(d?`
`.concat(d.message,`
`).concat(d.stack):""))||this,l.code=t,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(l,i),l}return i}(Error),jN=function(e){Xn(i,e);function i(t,a){return e.call(this,qr.UNSUPPORTED_FORMATTER,t,a)||this}return i}(Qt),GN=function(e){Xn(i,e);function i(t,a){return e.call(this,qr.INVALID_CONFIG,t,a)||this}return i}(Qt),Wd=function(e){Xn(i,e);function i(t,a){return e.call(this,qr.MISSING_DATA,t,a)||this}return i}(Qt),Un=function(e){Xn(i,e);function i(t,a,s){var l=e.call(this,qr.FORMAT_ERROR,"".concat(t,`
Locale: `).concat(a,`
`),s)||this;return l.locale=a,l}return i}(Qt),Vs=function(e){Xn(i,e);function i(t,a,s,l){var d=e.call(this,"".concat(t,`
MessageID: `).concat(s==null?void 0:s.id,`
Default Message: `).concat(s==null?void 0:s.defaultMessage,`
Description: `).concat(s==null?void 0:s.description,`
`),a,l)||this;return d.descriptor=s,d.locale=a,d}return i}(Un),BN=function(e){Xn(i,e);function i(t,a){var s=e.call(this,qr.MISSING_TRANSLATION,'Missing message: "'.concat(t.id,'" for locale "').concat(a,'", using ').concat(t.defaultMessage?"default message (".concat(typeof t.defaultMessage=="string"?t.defaultMessage:t.defaultMessage.map(function(l){var d;return(d=l.value)!==null&&d!==void 0?d:JSON.stringify(l)}).join(),")"):"id"," as fallback."))||this;return s.descriptor=t,s}return i}(Qt);function Cr(e,i,t){return t===void 0&&(t={}),i.reduce(function(a,s){return s in e?a[s]=e[s]:s in t&&(a[s]=t[s]),a},{})}var VN=function(e){},wN=function(e){},Hk={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:VN,onWarn:wN};function Uk(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function Hr(e){return{create:function(){return{get:function(i){return e[i]},set:function(i,t){e[i]=t}}}}}function HN(e){e===void 0&&(e=Uk());var i=Intl.RelativeTimeFormat,t=Intl.ListFormat,a=Intl.DisplayNames,s=vn(function(){for(var g,v=[],T=0;T<arguments.length;T++)v[T]=arguments[T];return new((g=Intl.DateTimeFormat).bind.apply(g,fn([void 0],v,!1)))},{cache:Hr(e.dateTime),strategy:En.variadic}),l=vn(function(){for(var g,v=[],T=0;T<arguments.length;T++)v[T]=arguments[T];return new((g=Intl.NumberFormat).bind.apply(g,fn([void 0],v,!1)))},{cache:Hr(e.number),strategy:En.variadic}),d=vn(function(){for(var g,v=[],T=0;T<arguments.length;T++)v[T]=arguments[T];return new((g=Intl.PluralRules).bind.apply(g,fn([void 0],v,!1)))},{cache:Hr(e.pluralRules),strategy:En.variadic});return{getDateTimeFormat:s,getNumberFormat:l,getMessageFormat:vn(function(g,v,T,f){return new wk(g,v,T,ne({formatters:{getNumberFormat:l,getDateTimeFormat:s,getPluralRules:d}},f||{}))},{cache:Hr(e.message),strategy:En.variadic}),getRelativeTimeFormat:vn(function(){for(var g=[],v=0;v<arguments.length;v++)g[v]=arguments[v];return new(i.bind.apply(i,fn([void 0],g,!1)))},{cache:Hr(e.relativeTime),strategy:En.variadic}),getPluralRules:d,getListFormat:vn(function(){for(var g=[],v=0;v<arguments.length;v++)g[v]=arguments[v];return new(t.bind.apply(t,fn([void 0],g,!1)))},{cache:Hr(e.list),strategy:En.variadic}),getDisplayNames:vn(function(){for(var g=[],v=0;v<arguments.length;v++)g[v]=arguments[v];return new(a.bind.apply(a,fn([void 0],g,!1)))},{cache:Hr(e.displayNames),strategy:En.variadic})}}function Lo(e,i,t,a){var s=e&&e[i],l;if(s&&(l=s[t]),l)return l;a(new jN("No ".concat(i," format named: ").concat(t)))}function $a(e,i){return Object.keys(e).reduce(function(t,a){return t[a]=ne({timeZone:i},e[a]),t},{})}function zd(e,i){var t=Object.keys(ne(ne({},e),i));return t.reduce(function(a,s){return a[s]=ne(ne({},e[s]||{}),i[s]||{}),a},{})}function Zd(e,i){if(!i)return e;var t=wk.formats;return ne(ne(ne({},t),e),{date:zd($a(t.date,i),$a(e.date||{},i)),time:zd($a(t.time,i),$a(e.time||{},i))})}var vo=function(e,i,t,a,s){var l=e.locale,d=e.formats,g=e.messages,v=e.defaultLocale,T=e.defaultFormats,f=e.fallbackOnEmptyString,h=e.onError,y=e.timeZone,K=e.defaultRichTextElements;t===void 0&&(t={id:""});var j=t.id,R=t.defaultMessage;_k(!!j,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var N=String(j),D=g&&Object.prototype.hasOwnProperty.call(g,N)&&g[N];if(Array.isArray(D)&&D.length===1&&D[0].type===Ge.literal)return D[0].value;if(!a&&D&&typeof D=="string"&&!K)return D.replace(/'\{(.*?)\}'/gi,"{$1}");if(a=ne(ne({},K),a||{}),d=Zd(d,y),T=Zd(T,y),!D){if(f===!1&&D==="")return D;if((!R||l&&l.toLowerCase()!==v.toLowerCase())&&h(new BN(t,l)),R)try{var q=i.getMessageFormat(R,v,T,s);return q.format(a)}catch(L){return h(new Vs('Error formatting default message for: "'.concat(N,'", rendering default message verbatim'),l,t,L)),typeof R=="string"?R:N}return N}try{var q=i.getMessageFormat(D,l,d,ne({formatters:i},s||{}));return q.format(a)}catch(L){h(new Vs('Error formatting message: "'.concat(N,'", using ').concat(R?"default message":"id"," as fallback."),l,t,L))}if(R)try{var q=i.getMessageFormat(R,v,T,s);return q.format(a)}catch(L){h(new Vs('Error formatting the default message for: "'.concat(N,'", rendering message verbatim'),l,t,L))}return typeof D=="string"?D:typeof R=="string"?R:N},qk=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function si(e,i,t,a){var s=e.locale,l=e.formats,d=e.onError,g=e.timeZone;a===void 0&&(a={});var v=a.format,T=ne(ne({},g&&{timeZone:g}),v&&Lo(l,i,v,d)),f=Cr(a,qk,T);return i==="time"&&!f.hour&&!f.minute&&!f.second&&!f.timeStyle&&!f.dateStyle&&(f=ne(ne({},f),{hour:"numeric",minute:"numeric"})),t(s,f)}function UN(e,i){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var s=t[0],l=t[1],d=l===void 0?{}:l,g=typeof s=="string"?new Date(s||0):s;try{return si(e,"date",i,d).format(g)}catch(v){e.onError(new Un("Error formatting date.",e.locale,v))}return String(g)}function qN(e,i){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var s=t[0],l=t[1],d=l===void 0?{}:l,g=typeof s=="string"?new Date(s||0):s;try{return si(e,"time",i,d).format(g)}catch(v){e.onError(new Un("Error formatting time.",e.locale,v))}return String(g)}function xN(e,i){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var s=t[0],l=t[1],d=t[2],g=d===void 0?{}:d,v=e.timeZone,T=e.locale,f=e.onError,h=Cr(g,qk,v?{timeZone:v}:{});try{return i(T,h).formatRange(s,l)}catch(y){f(new Un("Error formatting date time range.",e.locale,y))}return String(s)}function YN(e,i){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var s=t[0],l=t[1],d=l===void 0?{}:l,g=typeof s=="string"?new Date(s||0):s;try{return si(e,"date",i,d).formatToParts(g)}catch(v){e.onError(new Un("Error formatting date.",e.locale,v))}return[]}function CN(e,i){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var s=t[0],l=t[1],d=l===void 0?{}:l,g=typeof s=="string"?new Date(s||0):s;try{return si(e,"time",i,d).formatToParts(g)}catch(v){e.onError(new Un("Error formatting time.",e.locale,v))}return[]}var $N=["style","type","fallback","languageDisplay"];function JN(e,i,t,a){var s=e.locale,l=e.onError,d=Intl.DisplayNames;d||l(new Ir(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,ir.MISSING_INTL_API));var g=Cr(a,$N);try{return i(s,g).of(t)}catch(v){l(new Un("Error formatting display name.",s,v))}}var WN=["type","style"],Xd=Date.now();function zN(e){return"".concat(Xd,"_").concat(e,"_").concat(Xd)}function ZN(e,i,t,a){a===void 0&&(a={});var s=xk(e,i,t,a).reduce(function(l,d){var g=d.value;return typeof g!="string"?l.push(g):typeof l[l.length-1]=="string"?l[l.length-1]+=g:l.push(g),l},[]);return s.length===1?s[0]:s.length===0?"":s}function xk(e,i,t,a){var s=e.locale,l=e.onError;a===void 0&&(a={});var d=Intl.ListFormat;d||l(new Ir(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,ir.MISSING_INTL_API));var g=Cr(a,WN);try{var v={},T=t.map(function(f,h){if(typeof f=="object"){var y=zN(h);return v[y]=f,y}return String(f)});return i(s,g).formatToParts(T).map(function(f){return f.type==="literal"?f:ne(ne({},f),{value:v[f.value]||f.value})})}catch(f){l(new Un("Error formatting list.",s,f))}return t}var XN=["type"];function QN(e,i,t,a){var s=e.locale,l=e.onError;a===void 0&&(a={}),Intl.PluralRules||l(new Ir(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,ir.MISSING_INTL_API));var d=Cr(a,XN);try{return i(s,d).select(t)}catch(g){l(new Un("Error formatting plural.",s,g))}return"other"}var eS=["numeric","style"];function nS(e,i,t){var a=e.locale,s=e.formats,l=e.onError;t===void 0&&(t={});var d=t.format,g=!!d&&Lo(s,"relative",d,l)||{},v=Cr(t,eS,g);return i(a,v)}function rS(e,i,t,a,s){s===void 0&&(s={}),a||(a="second");var l=Intl.RelativeTimeFormat;l||e.onError(new Ir(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,ir.MISSING_INTL_API));try{return nS(e,i,s).format(t,a)}catch(d){e.onError(new Un("Error formatting relative time.",e.locale,d))}return String(t)}var tS=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function Yk(e,i,t){var a=e.locale,s=e.formats,l=e.onError;t===void 0&&(t={});var d=t.format,g=d&&Lo(s,"number",d,l)||{},v=Cr(t,tS,g);return i(a,v)}function aS(e,i,t,a){a===void 0&&(a={});try{return Yk(e,i,a).format(t)}catch(s){e.onError(new Un("Error formatting number.",e.locale,s))}return String(t)}function iS(e,i,t,a){a===void 0&&(a={});try{return Yk(e,i,a).formatToParts(t)}catch(s){e.onError(new Un("Error formatting number.",e.locale,s))}return[]}function sS(e){var i=e?e[Object.keys(e)[0]]:void 0;return typeof i=="string"}function oS(e){e.onWarn&&e.defaultRichTextElements&&sS(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`)}function lS(e,i){var t=HN(i),a=ne(ne({},Hk),e),s=a.locale,l=a.defaultLocale,d=a.onError;return s?!Intl.NumberFormat.supportedLocalesOf(s).length&&d?d(new Wd('Missing locale data for locale: "'.concat(s,'" in Intl.NumberFormat. Using default locale: "').concat(l,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(s).length&&d&&d(new Wd('Missing locale data for locale: "'.concat(s,'" in Intl.DateTimeFormat. Using default locale: "').concat(l,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):(d&&d(new GN('"locale" was not configured, using "'.concat(l,'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))),a.locale=a.defaultLocale||"en"),oS(a),ne(ne({},a),{formatters:t,formatNumber:aS.bind(null,a,t.getNumberFormat),formatNumberToParts:iS.bind(null,a,t.getNumberFormat),formatRelativeTime:rS.bind(null,a,t.getRelativeTimeFormat),formatDate:UN.bind(null,a,t.getDateTimeFormat),formatDateToParts:YN.bind(null,a,t.getDateTimeFormat),formatTime:qN.bind(null,a,t.getDateTimeFormat),formatDateTimeRange:xN.bind(null,a,t.getDateTimeFormat),formatTimeToParts:CN.bind(null,a,t.getDateTimeFormat),formatPlural:QN.bind(null,a,t.getPluralRules),formatMessage:vo.bind(null,a,t),$t:vo.bind(null,a,t),formatList:ZN.bind(null,a,t.getListFormat),formatListToParts:xk.bind(null,a,t.getListFormat),formatDisplayName:JN.bind(null,a,t.getDisplayNames)})}function uS(e){_k(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var dS=ne(ne({},Hk),{textComponent:P.Fragment});function gS(e){return function(i){return e(P.Children.toArray(i))}}var Ck={exports:{}},Se={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qd;function kS(){if(Qd)return Se;Qd=1;var e=typeof Symbol=="function"&&Symbol.for,i=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,a=e?Symbol.for("react.fragment"):60107,s=e?Symbol.for("react.strict_mode"):60108,l=e?Symbol.for("react.profiler"):60114,d=e?Symbol.for("react.provider"):60109,g=e?Symbol.for("react.context"):60110,v=e?Symbol.for("react.async_mode"):60111,T=e?Symbol.for("react.concurrent_mode"):60111,f=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,y=e?Symbol.for("react.suspense_list"):60120,K=e?Symbol.for("react.memo"):60115,j=e?Symbol.for("react.lazy"):60116,R=e?Symbol.for("react.block"):60121,N=e?Symbol.for("react.fundamental"):60117,D=e?Symbol.for("react.responder"):60118,q=e?Symbol.for("react.scope"):60119;function L(O){if(typeof O=="object"&&O!==null){var w=O.$$typeof;switch(w){case i:switch(O=O.type,O){case v:case T:case a:case l:case s:case h:return O;default:switch(O=O&&O.$$typeof,O){case g:case f:case j:case K:case d:return O;default:return w}}case t:return w}}}function Q(O){return L(O)===T}return Se.AsyncMode=v,Se.ConcurrentMode=T,Se.ContextConsumer=g,Se.ContextProvider=d,Se.Element=i,Se.ForwardRef=f,Se.Fragment=a,Se.Lazy=j,Se.Memo=K,Se.Portal=t,Se.Profiler=l,Se.StrictMode=s,Se.Suspense=h,Se.isAsyncMode=function(O){return Q(O)||L(O)===v},Se.isConcurrentMode=Q,Se.isContextConsumer=function(O){return L(O)===g},Se.isContextProvider=function(O){return L(O)===d},Se.isElement=function(O){return typeof O=="object"&&O!==null&&O.$$typeof===i},Se.isForwardRef=function(O){return L(O)===f},Se.isFragment=function(O){return L(O)===a},Se.isLazy=function(O){return L(O)===j},Se.isMemo=function(O){return L(O)===K},Se.isPortal=function(O){return L(O)===t},Se.isProfiler=function(O){return L(O)===l},Se.isStrictMode=function(O){return L(O)===s},Se.isSuspense=function(O){return L(O)===h},Se.isValidElementType=function(O){return typeof O=="string"||typeof O=="function"||O===a||O===T||O===l||O===s||O===h||O===y||typeof O=="object"&&O!==null&&(O.$$typeof===j||O.$$typeof===K||O.$$typeof===d||O.$$typeof===g||O.$$typeof===f||O.$$typeof===N||O.$$typeof===D||O.$$typeof===q||O.$$typeof===R)},Se.typeOf=L,Se}Ck.exports=kS();var vS=Ck.exports,$k=vS,ES={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},fS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Jk={};Jk[$k.ForwardRef]=ES;Jk[$k.Memo]=fS;var Ko=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=P.createContext(null)):P.createContext(null);Ko.Consumer;Ko.Provider;var mS=Ko;function Wk(){var e=P.useContext(mS);return uS(e),e}var Eo;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(Eo||(Eo={}));var fo;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(fo||(fo={}));function zk(e){var i=function(t){var a=Wk(),s=t.value,l=t.children,d=ii(t,["value","children"]),g=typeof s=="string"?new Date(s||0):s,v=e==="formatDate"?a.formatDateToParts(g,d):a.formatTimeToParts(g,d);return l(v)};return i.displayName=fo[e],i}function ea(e){var i=function(t){var a=Wk(),s=t.value,l=t.children,d=ii(t,["value","children"]),g=a[e](s,d);if(typeof l=="function")return l(g);var v=a.textComponent||P.Fragment;return P.createElement(v,null,g)};return i.displayName=Eo[e],i}function Zk(e){return e&&Object.keys(e).reduce(function(i,t){var a=e[t];return i[t]=Vk(a)?gS(a):a,i},{})}var eg=function(e,i,t,a){for(var s=[],l=4;l<arguments.length;l++)s[l-4]=arguments[l];var d=Zk(a),g=vo.apply(void 0,fn([e,i,t,d],s,!1));return Array.isArray(g)?P.Children.toArray(g):g},TS=function(e,i){var t=e.defaultRichTextElements,a=ii(e,["defaultRichTextElements"]),s=Zk(t),l=lS(ne(ne(ne({},dS),a),{defaultRichTextElements:s}),i),d={locale:l.locale,timeZone:l.timeZone,fallbackOnEmptyString:l.fallbackOnEmptyString,formats:l.formats,defaultLocale:l.defaultLocale,defaultFormats:l.defaultFormats,messages:l.messages,onError:l.onError,defaultRichTextElements:s};return ne(ne({},l),{formatMessage:eg.bind(null,d,l.formatters),$t:eg.bind(null,d,l.formatters)})};ea("formatDate");ea("formatTime");ea("formatNumber");ea("formatList");ea("formatDisplayName");zk("formatDate");zk("formatTime");var oi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Do(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Xk={exports:{}};(function(e,i){(function(t,a){e.exports=a()})(oi,function(){var t="minute",a=/[+-]\d\d(?::?\d\d)?/g,s=/([+-]|\d\d)/g;return function(l,d,g){var v=d.prototype;g.utc=function(R){var N={date:R,utc:!0,args:arguments};return new d(N)},v.utc=function(R){var N=g(this.toDate(),{locale:this.$L,utc:!0});return R?N.add(this.utcOffset(),t):N},v.local=function(){return g(this.toDate(),{locale:this.$L,utc:!1})};var T=v.parse;v.parse=function(R){R.utc&&(this.$u=!0),this.$utils().u(R.$offset)||(this.$offset=R.$offset),T.call(this,R)};var f=v.init;v.init=function(){if(this.$u){var R=this.$d;this.$y=R.getUTCFullYear(),this.$M=R.getUTCMonth(),this.$D=R.getUTCDate(),this.$W=R.getUTCDay(),this.$H=R.getUTCHours(),this.$m=R.getUTCMinutes(),this.$s=R.getUTCSeconds(),this.$ms=R.getUTCMilliseconds()}else f.call(this)};var h=v.utcOffset;v.utcOffset=function(R,N){var D=this.$utils().u;if(D(R))return this.$u?0:D(this.$offset)?h.call(this):this.$offset;if(typeof R=="string"&&(R=function(O){O===void 0&&(O="");var w=O.match(a);if(!w)return null;var I=(""+w[0]).match(s)||["-",0,0],b=I[0],$=60*+I[1]+ +I[2];return $===0?0:b==="+"?$:-$}(R),R===null))return this;var q=Math.abs(R)<=16?60*R:R,L=this;if(N)return L.$offset=q,L.$u=R===0,L;if(R!==0){var Q=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(L=this.local().add(q+Q,t)).$offset=q,L.$x.$localOffset=Q}else L=this.utc();return L};var y=v.format;v.format=function(R){var N=R||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return y.call(this,N)},v.valueOf=function(){var R=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*R},v.isUTC=function(){return!!this.$u},v.toISOString=function(){return this.toDate().toISOString()},v.toString=function(){return this.toDate().toUTCString()};var K=v.toDate;v.toDate=function(R){return R==="s"&&this.$offset?g(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():K.call(this)};var j=v.diff;v.diff=function(R,N,D){if(R&&this.$u===R.$u)return j.call(this,R,N,D);var q=this.local(),L=g(R).local();return j.call(q,L,N,D)}}})})(Xk);var pS=Xk.exports;const hS=Do(pS);var Qk={exports:{}};(function(e,i){(function(t,a){e.exports=a()})(oi,function(){var t,a,s=1e3,l=6e4,d=36e5,g=864e5,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,T=31536e6,f=2628e6,h=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,y={years:T,months:f,days:g,hours:d,minutes:l,seconds:s,milliseconds:1,weeks:6048e5},K=function(w){return w instanceof Q},j=function(w,I,b){return new Q(w,b,I.$l)},R=function(w){return a.p(w)+"s"},N=function(w){return w<0},D=function(w){return N(w)?Math.ceil(w):Math.floor(w)},q=function(w){return Math.abs(w)},L=function(w,I){return w?N(w)?{negative:!0,format:""+q(w)+I}:{negative:!1,format:""+w+I}:{negative:!1,format:""}},Q=function(){function w(b,$,W){var x=this;if(this.$d={},this.$l=W,b===void 0&&(this.$ms=0,this.parseFromMilliseconds()),$)return j(b*y[R($)],this);if(typeof b=="number")return this.$ms=b,this.parseFromMilliseconds(),this;if(typeof b=="object")return Object.keys(b).forEach(function(J){x.$d[R(J)]=b[J]}),this.calMilliseconds(),this;if(typeof b=="string"){var te=b.match(h);if(te){var le=te.slice(2).map(function(J){return J!=null?Number(J):0});return this.$d.years=le[0],this.$d.months=le[1],this.$d.weeks=le[2],this.$d.days=le[3],this.$d.hours=le[4],this.$d.minutes=le[5],this.$d.seconds=le[6],this.calMilliseconds(),this}}return this}var I=w.prototype;return I.calMilliseconds=function(){var b=this;this.$ms=Object.keys(this.$d).reduce(function($,W){return $+(b.$d[W]||0)*y[W]},0)},I.parseFromMilliseconds=function(){var b=this.$ms;this.$d.years=D(b/T),b%=T,this.$d.months=D(b/f),b%=f,this.$d.days=D(b/g),b%=g,this.$d.hours=D(b/d),b%=d,this.$d.minutes=D(b/l),b%=l,this.$d.seconds=D(b/s),b%=s,this.$d.milliseconds=b},I.toISOString=function(){var b=L(this.$d.years,"Y"),$=L(this.$d.months,"M"),W=+this.$d.days||0;this.$d.weeks&&(W+=7*this.$d.weeks);var x=L(W,"D"),te=L(this.$d.hours,"H"),le=L(this.$d.minutes,"M"),J=this.$d.seconds||0;this.$d.milliseconds&&(J+=this.$d.milliseconds/1e3,J=Math.round(1e3*J)/1e3);var H=L(J,"S"),U=b.negative||$.negative||x.negative||te.negative||le.negative||H.negative,Z=te.format||le.format||H.format?"T":"",C=(U?"-":"")+"P"+b.format+$.format+x.format+Z+te.format+le.format+H.format;return C==="P"||C==="-P"?"P0D":C},I.toJSON=function(){return this.toISOString()},I.format=function(b){var $=b||"YYYY-MM-DDTHH:mm:ss",W={Y:this.$d.years,YY:a.s(this.$d.years,2,"0"),YYYY:a.s(this.$d.years,4,"0"),M:this.$d.months,MM:a.s(this.$d.months,2,"0"),D:this.$d.days,DD:a.s(this.$d.days,2,"0"),H:this.$d.hours,HH:a.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:a.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:a.s(this.$d.seconds,2,"0"),SSS:a.s(this.$d.milliseconds,3,"0")};return $.replace(v,function(x,te){return te||String(W[x])})},I.as=function(b){return this.$ms/y[R(b)]},I.get=function(b){var $=this.$ms,W=R(b);return W==="milliseconds"?$%=1e3:$=W==="weeks"?D($/y[W]):this.$d[W],$||0},I.add=function(b,$,W){var x;return x=$?b*y[R($)]:K(b)?b.$ms:j(b,this).$ms,j(this.$ms+x*(W?-1:1),this)},I.subtract=function(b,$){return this.add(b,$,!0)},I.locale=function(b){var $=this.clone();return $.$l=b,$},I.clone=function(){return j(this.$ms,this)},I.humanize=function(b){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!b)},I.valueOf=function(){return this.asMilliseconds()},I.milliseconds=function(){return this.get("milliseconds")},I.asMilliseconds=function(){return this.as("milliseconds")},I.seconds=function(){return this.get("seconds")},I.asSeconds=function(){return this.as("seconds")},I.minutes=function(){return this.get("minutes")},I.asMinutes=function(){return this.as("minutes")},I.hours=function(){return this.get("hours")},I.asHours=function(){return this.as("hours")},I.days=function(){return this.get("days")},I.asDays=function(){return this.as("days")},I.weeks=function(){return this.get("weeks")},I.asWeeks=function(){return this.as("weeks")},I.months=function(){return this.get("months")},I.asMonths=function(){return this.as("months")},I.years=function(){return this.get("years")},I.asYears=function(){return this.as("years")},w}(),O=function(w,I,b){return w.add(I.years()*b,"y").add(I.months()*b,"M").add(I.days()*b,"d").add(I.hours()*b,"h").add(I.minutes()*b,"m").add(I.seconds()*b,"s").add(I.milliseconds()*b,"ms")};return function(w,I,b){t=b,a=b().$utils(),b.duration=function(x,te){var le=b.locale();return j(x,{$l:le},te)},b.isDuration=K;var $=I.prototype.add,W=I.prototype.subtract;I.prototype.add=function(x,te){return K(x)?O(this,x,1):$.bind(this)(x,te)},I.prototype.subtract=function(x,te){return K(x)?O(this,x,-1):W.bind(this)(x,te)}}})})(Qk);var AS=Qk.exports;const yS=Do(AS);var ev={exports:{}};(function(e,i){(function(t,a){e.exports=a()})(oi,function(){var t="day";return function(a,s,l){var d=function(T){return T.add(4-T.isoWeekday(),t)},g=s.prototype;g.isoWeekYear=function(){return d(this).year()},g.isoWeek=function(T){if(!this.$utils().u(T))return this.add(7*(T-this.isoWeek()),t);var f,h,y,K,j=d(this),R=(f=this.isoWeekYear(),h=this.$u,y=(h?l.utc:l)().year(f).startOf("year"),K=4-y.isoWeekday(),y.isoWeekday()>4&&(K+=7),y.add(K,t));return j.diff(R,"week")+1},g.isoWeekday=function(T){return this.$utils().u(T)?this.day()||7:this.day(this.day()%7?T:T-7)};var v=g.startOf;g.startOf=function(T,f){var h=this.$utils(),y=!!h.u(f)||f;return h.p(T)==="isoweek"?y?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):v.bind(this)(T,f)}}})})(ev);var cS=ev.exports;const RS=Do(cS);var _S={exports:{}};(function(e,i){(function(t,a){e.exports=a(ai)})(oi,function(t){function a(d){return d&&typeof d=="object"&&"default"in d?d:{default:d}}var s=a(t),l={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(d){return d+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return s.default.locale(l,null,!0),l})})(_S);const bS=Uk(),nv=e=>TS({locale:"nb-NO",messages:e},bS),rv={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"};ai.extend(hS);ai.extend(RS);ai.extend(yS);nv(rv);nv(rv);const tv=e=>({block:e,element:i=>`${e}__${i}`,modifier:i=>`${e}--${i}`,elementWithModifier:(i,t)=>`${e}__${i} ${e}__${i}--${t}`});var av={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var i={}.hasOwnProperty;function t(){for(var l="",d=0;d<arguments.length;d++){var g=arguments[d];g&&(l=s(l,a.call(this,g)))}return l}function a(l){if(typeof l=="string"||typeof l=="number")return this&&this[l]||l;if(typeof l!="object")return"";if(Array.isArray(l))return t.apply(this,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var d="";for(var g in l)i.call(l,g)&&l[g]&&(d=s(d,this&&this[g]||g));return d}function s(l,d){return d?l?l+" "+d:l+d:l}e.exports?(t.default=t,e.exports=t):window.classNames=t})()})(av);var NS=av.exports;const SS=hk(NS),IS="_clipboard_1lghs_1",OS="_clipboard__button_1lghs_6",LS="_clipboard__button_1lghs_6",KS="_showTooltip_1lghs_1",DS="_clipboard__kopiert_1lghs_48",PS="_clipboard__kopiert_1lghs_48",FS="_clipboard__animationContainer_1lghs_57",MS="_clipboard__animationContainer_1lghs_57",jS="_clipboard__animate_1lghs_60",GS="_clipboard__animate_1lghs_60",BS="_fadeInOut_1lghs_1",VS={clipboard:IS,clipboard__button:OS,clipboardButton:LS,showTooltip:KS,clipboard__kopiert:DS,clipboardKopiert:PS,clipboard__animationContainer:FS,clipboardAnimationContainer:MS,clipboard__animate:jS,clipboardAnimate:GS,fadeInOut:BS};SS.bind(VS);const wS="_autocompleteSuggestion__substring_mf7v0_1",HS="_autocompleteSuggestion__substring_mf7v0_1",US="_autocompleteSuggestion__inner_mf7v0_4",qS="_autocompleteSuggestion__inner_mf7v0_4",xS="_autocompleteSuggestion--active_mf7v0_12",qt={autocompleteSuggestion__substring:wS,autocompleteSuggestionSubstring:HS,autocompleteSuggestion__inner:US,autocompleteSuggestionInner:qS,"autocompleteSuggestion--active":"_autocompleteSuggestion--active_mf7v0_12",autocompleteSuggestionActive:xS};class YS extends Y.Component{constructor(i){super(i),this.state={value:i.value},this.onClick=this.onClick.bind(this),this.onMouseMove=this.onMouseMove.bind(this)}onClick(){const{onClick:i}=this.props,{value:t}=this.state;i(t)}onMouseMove(){const{setSuggestionIndex:i,index:t}=this.props;i(t)}render(){const{match:i,active:t,avoidBlur:a,id:s}=this.props,{value:l}=this.state.value,d=l.toLowerCase().startsWith(i.toLowerCase());return pe.jsx("li",{id:s,role:"option","aria-selected":t,onClick:this.onClick,onMouseMove:this.onMouseMove,onFocus:a,onMouseDown:a,onKeyDown:a,className:"autocompleteSuggestion typo-normal",children:d?pe.jsxs("span",{className:`${qt.autocompleteSuggestion__inner} ${t?qt["autocompleteSuggestion--active"]:""}`,children:[l.substring(0,i.length),pe.jsx("span",{className:qt.autocompleteSuggestion__substring,children:l.substring(i.length)})]}):pe.jsx("span",{className:`${qt.autocompleteSuggestion__inner} ${t?qt["autocompleteSuggestion--active"]:""}`,children:l})})}}const CS="_autocomplete_9dlnp_1",$S="_autocomplete__suggestions_9dlnp_27",JS="_autocomplete__suggestions_9dlnp_27",WS="_autocomplete__suggestions--hidden_9dlnp_31",ws={autocomplete:CS,autocomplete__suggestions:$S,autocompleteSuggestions:JS,"autocomplete__suggestions--hidden":"_autocomplete__suggestions--hidden_9dlnp_31",autocompleteSuggestionsHidden:WS};class KO extends Y.Component{constructor(i){super(i),Vd(this,"input"),Vd(this,"inputRef"),this.state={activeSuggestionIndex:-1,hasFocus:!1,shouldShowSuggestions:!0,setAriaActiveDescendant:!1,shouldBlur:!0,blurDelay:null},this.inputRef=t=>{this.input=t},this.onChange=this.onChange.bind(this),this.onBlur=this.onBlur.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.onFocus=this.onFocus.bind(this),this.setValue=this.setValue.bind(this),this.setSuggestionIndex=this.setSuggestionIndex.bind(this),this.avoidBlur=this.avoidBlur.bind(this),this.clearBlurDelay=this.clearBlurDelay.bind(this),this.onSearchButtonClick=this.onSearchButtonClick.bind(this)}componentWillUnmount(){const{blurDelay:i}=this.state;i&&(clearTimeout(i),this.setState({blurDelay:null}))}onChange(i){const{onChange:t}=this.props;this.setState({activeSuggestionIndex:-1,shouldShowSuggestions:!0}),t(i)}onSearchButtonClick(i){const{onSearchButtonClick:t}=this.props;i.preventDefault(),t&&t()}onKeyDown(i){const{shouldShowSuggestions:t}=this.state;let{activeSuggestionIndex:a}=this.state;const{suggestions:s}=this.props,l=a>-1;switch(this.setState({setAriaActiveDescendant:i.keyCode===38||i.keyCode===40}),i.keyCode){case 9:l&&t&&this.setValue(s[a]);break;case 13:l&&t?(i.preventDefault(),this.setValue(s[a])):t&&s.length===1?this.setValue(s[0]):this.setState({shouldShowSuggestions:!1});break;case 27:t&&s.length>0&&(i.preventDefault(),this.setState({shouldShowSuggestions:!1}));break;case 38:t&&(i.preventDefault(),a=a-1===-2?-1:a-1,this.setState({activeSuggestionIndex:a}));break;case 40:t&&(i.preventDefault(),a=a+1===s.length?s.length-1:a+1,this.setState({activeSuggestionIndex:a}));break}}onFocus(){this.setState({hasFocus:!0,activeSuggestionIndex:-1})}onBlur(){const i=setTimeout(()=>{const{shouldBlur:a}=this.state;a&&this.setState({hasFocus:!1})},10);this.setState({blurDelay:i});const{onBlur:t}=this.props;t&&t()}setSuggestionIndex(i){this.setState({activeSuggestionIndex:i}),this.clearBlurDelay()}setValue(i){this.setState({shouldShowSuggestions:!1,activeSuggestionIndex:-1},()=>{this.inputRef.focus()}),this.clearBlurDelay();const{onSelect:t}=this.props;t(i)}avoidBlur(){this.setState({shouldBlur:!1})}clearBlurDelay(){const{blurDelay:i}=this.state;i&&(clearTimeout(i),this.setState({blurDelay:null})),this.setState({shouldBlur:!0})}render(){const{suggestions:i,id:t,ariaLabel:a,placeholder:s,value:l,name:d,shouldFocusOnMount:g,isLoading:v}=this.props,{activeSuggestionIndex:T,setAriaActiveDescendant:f,hasFocus:h,shouldShowSuggestions:y}=this.state,K=h&&y&&i.length>0,j=f&&T>-1?`${t}-item-${T}`:void 0;return pe.jsxs("div",{className:`${ws.autocomplete} autocomplete`,"aria-expanded":K,"aria-owns":`${t}-suggestions`,"aria-haspopup":"listbox",children:[pe.jsx(Ys,{variant:"primary",id:t,name:d,"aria-label":a,"aria-autocomplete":"list","aria-controls":`${t}-suggestions`,"aria-activedescendant":j,placeholder:s,value:l,autoComplete:"off",onChange:this.onChange,onBlur:this.onBlur,onKeyDown:this.onKeyDown,onFocus:this.onFocus,ref:R=>{this.inputRef=R},className:"typo-normal",autoFocus:g,label:a,hideLabel:!0,children:pe.jsx(Ys.Button,{loading:v,onClick:this.onSearchButtonClick})}),pe.jsx("ul",{id:`${t}-suggestions`,role:"listbox",className:K?ws.autocomplete__suggestions:ws["autocomplete__suggestions--hidden"],children:K&&i.map((R,N)=>pe.jsx(YS,{id:`${t}-item-${N}`,index:N,value:R,match:l,active:N===T,onClick:this.setValue,setSuggestionIndex:this.setSuggestionIndex,avoidBlur:this.avoidBlur},R.key))})]})}}var Xa=(e=>(e.warning="warning",e.success="success",e.danger="danger",e.default="default",e))(Xa||{});const zS=({className:e})=>pe.jsxs("svg",{width:"28px",height:"28px",viewBox:"0 0 28 28",xmlns:"http://www.w3.org/2000/svg",className:e,children:[pe.jsx("title",{children:"Oppgave løst/avslått"}),pe.jsx("defs",{}),pe.jsx("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:pe.jsx("g",{fill:"#BA3A26",children:pe.jsx("path",{d:"M13.998761,0 C6.29390605,0 0.0146135764,6.26713043 4.90835943e-06,13.972 C-0.00729942565,17.7118261 1.44139349,21.230087 4.08069284,23.8803478 C6.7199922,26.5293913 10.2333769,27.9926957 13.9731959,28 L13.9999784,28 C21.703616,28 27.9841259,21.7316522 27.9999519,14.0255652 C28.0145606,6.30730435 21.7462246,0.0146086957 13.998761,0 Z M19.5853592,18.7453913 C19.8215326,18.9827826 19.8203152,19.3686957 19.5829244,19.606087 C19.4636203,19.7253913 19.3090119,19.7838261 19.1531861,19.7838261 C18.9985777,19.7838261 18.8415345,19.7241739 18.7222304,19.606087 L13.9963263,14.8606957 L9.25337871,19.5866087 C9.13407459,19.705913 8.97824879,19.7643478 8.822423,19.7643478 C8.66659721,19.7643478 8.51198881,19.7046957 8.39268468,19.5866087 C8.15529383,19.348 8.15529383,18.962087 8.39390207,18.725913 L13.138067,14 L8.41216291,9.2546087 C8.17477205,9.016 8.17598944,8.63130435 8.41459769,8.39513043 C8.65198854,8.15530435 9.03790085,8.15652174 9.27529171,8.39634783 L13.9999784,13.1405217 L18.742926,8.41582609 C18.9803168,8.17843478 19.3674465,8.17843478 19.60362,8.41704348 C19.8410109,8.65443478 19.8410109,9.04034783 19.6024026,9.27773913 L14.8594551,14.0036522 L19.5853592,18.7453913 Z"})})})]}),ZS=({className:e})=>pe.jsxs("svg",{width:"16px",height:"16px",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",className:e,children:[pe.jsx("title",{children:"Behandlet - Oppgave løst/godkjent"}),pe.jsx("defs",{}),pe.jsx("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:pe.jsx("g",{fillRule:"nonzero",fill:"#06893A",children:pe.jsx("g",{children:pe.jsx("g",{id:"Filled_Version",children:pe.jsx("path",{d:"M15.7173333,0.122 C15.416,-0.0906666667 15.0006667,-0.0186666667 14.7886667,0.282666667 L4.91133333,14.302 L1.138,10.5293333 C0.878,10.2686667 0.455333333,10.2686667 0.195333333,10.5293333 C-0.0653333333,10.7906667 -0.0653333333,11.212 0.195333333,11.472 L4.52866667,15.8053333 C4.654,15.9306667 4.824,16 5,16 C5.212,16 5.418,15.898 5.54466667,15.7173333 L15.878,1.05066667 C16.09,0.75 16.018,0.333333333 15.7173333,0.122 Z"})})})})})]}),XS=({className:e})=>pe.jsx("svg",{width:"1.25rem",height:"1.25em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:"false",role:"img",style:{color:"var(--ac-alert-icon-warning-color,var(--a-icon-warning))"},className:e,children:pe.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25ZM12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Zm-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z",fill:"currentColor"})}),QS="_step_1k8mj_1",eI="_step__button_1k8mj_9",nI="_step__button_1k8mj_9",rI="_step__indicator--default_1k8mj_25",tI="_step__indicator--success_1k8mj_29",aI="_step__indicator--partial_1k8mj_33",iI="_step__indicator--warning_1k8mj_36",sI="_step__indicator--danger_1k8mj_44",oI="_step__button--active_1k8mj_56",lI="_step__text-icon-container_1k8mj_62",uI="_step__indicator_1k8mj_25",dI="_step__indicator_1k8mj_25",gI="_step__indicator--active_1k8mj_80",kI="_step__icon_1k8mj_128",vI="_step__icon_1k8mj_128",EI="_step__icon--warning_1k8mj_136",fI="_step__icon--partial_1k8mj_148",mI="_step__icon--success_1k8mj_162",TI="_step__icon--danger_1k8mj_166",pI="_step__icon-placeholder_1k8mj_172",hI="_step__arrow-container_1k8mj_179",AI="_showTooltip_1k8mj_1",Ce={step:QS,step__button:eI,stepButton:nI,"step__indicator--default":"_step__indicator--default_1k8mj_25",stepIndicatorDefault:rI,"step__indicator--success":"_step__indicator--success_1k8mj_29",stepIndicatorSuccess:tI,"step__indicator--partial":"_step__indicator--partial_1k8mj_33",stepIndicatorPartial:aI,"step__indicator--warning":"_step__indicator--warning_1k8mj_36",stepIndicatorWarning:iI,"step__indicator--danger":"_step__indicator--danger_1k8mj_44",stepIndicatorDanger:sI,"step__button--active":"_step__button--active_1k8mj_56",stepButtonActive:oI,"step__text-icon-container":"_step__text-icon-container_1k8mj_62",stepTextIconContainer:lI,step__indicator:uI,stepIndicator:dI,"step__indicator--active":"_step__indicator--active_1k8mj_80",stepIndicatorActive:gI,step__icon:kI,stepIcon:vI,"step__icon--warning":"_step__icon--warning_1k8mj_136",stepIconWarning:EI,"step__icon--partial":"_step__icon--partial_1k8mj_148",stepIconPartial:fI,"step__icon--success":"_step__icon--success_1k8mj_162",stepIconSuccess:mI,"step__icon--danger":"_step__icon--danger_1k8mj_166",stepIconDanger:TI,"step__icon-placeholder":"_step__icon-placeholder_1k8mj_172",stepIconPlaceholder:pI,"step__arrow-container":"_step__arrow-container_1k8mj_179",stepArrowContainer:hI,showTooltip:AI},xt=tv("step"),yI=({type:e,isFinished:i,usePartialStatus:t})=>{const a=e===Xa.warning,s=e===Xa.danger;return t&&!a?pe.jsx("div",{className:ao(`${Ce[xt.element("icon")]} ${Ce["step__icon--partial"]}`,{[Ce["step__icon--success"]]:!s,[Ce["step__icon--danger"]]:s})}):i?pe.jsx(ZS,{className:`${Ce[xt.element("icon")]} ${Ce["step__icon--success"]}`}):a?pe.jsx(XS,{className:`${Ce[xt.element("icon")]} ${Ce["step__icon--warning"]} `}):s?pe.jsx(zS,{className:`${Ce[xt.element("icon")]} ${Ce["step__icon--danger"]}`}):pe.jsx("span",{className:Ce[xt.element("icon-placeholder")]})},ut=tv("step");Y.memo(({label:e,index:i,isActive:t,onClick:a,isFinished:s,type:l=Xa.default,usePartialStatus:d,stepArrowContainerStyle:g})=>{const v=f=>{f.preventDefault(),a&&a(i)},T=ao(`${Ce[ut.element("indicator")]} ${Ce[`step__indicator--${l}`]}`,{[Ce["step__indicator--active"]]:t,[Ce["step__indicator--partial"]]:d});return pe.jsxs("li",{className:Ce[ut.block],"aria-current":t?"step":void 0,children:[pe.jsxs("button",{className:t?`${Ce[ut.element("button")]} ${Ce["step__button--active"]}`:Ce[ut.element("button")],type:"button",onClick:v,"data-tooltip":e,children:[pe.jsxs("span",{className:Ce[ut.element("text-icon-container")],children:[pe.jsx(yI,{type:l,isFinished:s,usePartialStatus:d}),pe.jsx(Wt,{size:"small",as:"span",children:e})]}),pe.jsx("span",{className:T})]}),t&&pe.jsx("div",{className:ao(g,`${Ce[ut.element("arrow-container")]} step__arrow-container`)})]},e.split(" ").join(""))});Y.createContext({});mn(ti);var iv={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var i={}.hasOwnProperty;function t(){for(var l="",d=0;d<arguments.length;d++){var g=arguments[d];g&&(l=s(l,a.call(this,g)))}return l}function a(l){if(typeof l=="string"||typeof l=="number")return this&&this[l]||l;if(typeof l!="object")return"";if(Array.isArray(l))return t.apply(this,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var d="";for(var g in l)i.call(l,g)&&l[g]&&(d=s(d,this&&this[g]||g));return d}function s(l,d){return d?l?l+" "+d:l+d:l}e.exports?(t.default=t,e.exports=t):window.classNames=t})()})(iv);var cI=iv.exports;const RI=lg(cI),_I="_boks_c3bfh_1",bI="_harBorderLeft_c3bfh_8",NI="_harBorderTop_c3bfh_12",SI={boks:_I,harBorderLeft:bI,harBorderTop:NI};RI.bind(SI);const II=e=>{const i=e.aktiveNaturalytelser.reduce((a,s)=>{const l=s.type;return l in a?{...a,[l]:[...a[l],s]}:{...a,[l]:[s]}},{}),t={};return Object.entries(i).forEach(([a,s])=>{const l=s.sort((d,g)=>Hb({fom:d.periode.fomDato,tom:d.periode.tomDato},{fom:g.periode.fomDato,tom:g.periode.tomDato})).reverse();t[a]=l.flatMap((d,g,v)=>{const T=v[g+1],f=d.periode.tomDato,h=T==null?void 0:T.periode.fomDato;return f===ft?[]:[{...d,periode:{fomDato:Md(f,1),tomDato:h?Md(h,-1):ft}}]})}),t},sv=({inntektsmelding:e,alleKodeverk:i})=>{const t=Zn(),a=II(e);return M.jsx(mr,{tittel:t.formatMessage({id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.heading"}),children:e.aktiveNaturalytelser.length===0?M.jsx("span",{children:M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.ingen"})}):M.jsx(kt,{children:Object.entries(a).map(([s,l])=>{var d;return M.jsxs(kt,{children:[M.jsx("span",{children:(d=i[So.NATURAL_YTELSE_TYPE].find(g=>g.kode===s))==null?void 0:d.navn}),M.jsx("ul",{children:l.map(g=>M.jsxs(Y.Fragment,{children:[M.jsxs("li",{children:[M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.fom"})," ",M.jsx(Jt,{dateString:g.periode.fomDato})]}),g.periode.tomDato!==ft&&M.jsxs("li",{children:[M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.tom"})," ",M.jsx(Jt,{dateString:g.periode.tomDato})]}),M.jsxs("li",{children:[M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.verdi"}),":"," ",gt(g.beloepPerMnd.verdi)]})]},g.indexKey))})]},s)})})})};sv.__docgenInfo={description:"",methods:[],displayName:"BortfalteNaturalYtelser",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const ov=({kildeSystem:e})=>{const i=Zn(),t=P.useMemo(()=>{switch(e.toUpperCase()){case"NAV_NO":return i.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.nav"});case"ALTINN":return i.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.altinn"});default:return i.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.lps"})}},[i,e]);return M.jsx(mr,{tittel:i.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.heading"}),children:t})};ov.__docgenInfo={description:"",methods:[],displayName:"KildeSystem",props:{kildeSystem:{required:!0,tsType:{name:"string"},description:""}}};var Ke=(e=>(e.DEFAULT="default",e.INNGANGSVILKAR="inngangsvilkar",e.BEHANDLE_INNSYN="behandle_innsyn",e.BEREGNING="beregning",e.BEREGNINGSGRUNNLAG="beregningsgrunnlag",e.KLAGE_NAV_FAMILIE_OG_PENSJON="klage_nav_familie_og_pensjon",e.KLAGE_NAV_KLAGEINSTANS="klage_nav_klageinstans",e.FORMKRAV_KLAGE_NAV_KLAGEINSTANS="formkrav_klage_nav_klageinstans",e.FORMKRAV_KLAGE_NAV_FAMILIE_OG_PENSJON="formkrav_klage_nav_familie_og_pensjon",e.FORTSATTMEDLEMSKAP="fortsattmedlemskap",e.OPPLYSNINGSPLIKT="opplysningsplikt",e.SOEKNADSFRIST="soeknadsfrist",e.TILBAKEKREVING="tilbakekreving",e.FORELDELSE="foreldelse",e.TILKJENT_YTELSE="tilkjent_ytelse",e.VARSEL="varsel",e.VEDTAK="vedtak",e.UTTAK="uttak",e.SIMULERING="simulering",e.KLAGE_RESULTAT="resultat",e.ANKEBEHANDLING="ankebehandling",e.ANKE_MERKNADER="ankemerknader",e.ANKE_RESULTAT="ankeresultat",e))(Ke||{}),ae=(e=>(e.ADOPSJONSVILKARET="adopsjonsvilkaaret",e.ARBEIDSFORHOLD="arbeidsforhold",e.ARBEID_OG_INNTEKT="arbeidoginntekt",e.BEREGNING="beregning",e.BESTEBEREGNING="besteberegning",e.DEFAULT="default",e.FORDELING="fordeling",e.INNTEKTSMELDINGER="inntektsmeldinger",e.FEILUTBETALING="feilutbetaling",e.FODSELSVILKARET="foedselsvilkaaret",e.FODSELTILRETTELEGGING="fodseltilrettelegging",e.MEDLEMSKAPSVILKARET="medlemskapsvilkaaret",e.OMSORG="omsorg",e.OMSORG_OG_RETT="omsorgogrett",e.OMSORGSVILKARET="omsorgsvilkaaret",e.OPPTJENINGSVILKARET="opptjeningsvilkaaret",e.PERMISJON="permisjon",e.SAKEN="saken",e.UTTAK="uttak",e.VERGE="verge",e.YTELSER="ytelser",e.UTTAK_DOKUMENTASJON="uttakdokumentasjon",e))(ae||{});ae.DEFAULT,Ke.BEREGNING,ae.DEFAULT,Ke.BEREGNINGSGRUNNLAG,ae.BESTEBEREGNING,Ke.DEFAULT,ae.ADOPSJONSVILKARET,ae.ARBEIDSFORHOLD,ae.BEREGNING,ae.FODSELSVILKARET,ae.FORDELING,ae.MEDLEMSKAPSVILKARET,ae.OMSORG,ae.OPPTJENINGSVILKARET,ae.OPPTJENINGSVILKARET,ae.OMSORGSVILKARET,ae.ARBEIDSFORHOLD,ae.UTTAK_DOKUMENTASJON,ae.DEFAULT,Ke.INNGANGSVILKAR,ae.DEFAULT,Ke.KLAGE_NAV_FAMILIE_OG_PENSJON,ae.DEFAULT,Ke.KLAGE_NAV_KLAGEINSTANS,ae.DEFAULT,Ke.FORMKRAV_KLAGE_NAV_FAMILIE_OG_PENSJON,ae.DEFAULT,Ke.FORMKRAV_KLAGE_NAV_KLAGEINSTANS,ae.DEFAULT,Ke.ANKEBEHANDLING,ae.DEFAULT,Ke.ANKE_MERKNADER,ae.DEFAULT,Ke.OPPLYSNINGSPLIKT,ae.DEFAULT,Ke.INNGANGSVILKAR,ae.DEFAULT,Ke.INNGANGSVILKAR,ae.MEDLEMSKAPSVILKARET,Ke.INNGANGSVILKAR,ae.DEFAULT,Ke.INNGANGSVILKAR,ae.DEFAULT,Ke.INNGANGSVILKAR,ae.DEFAULT,Ke.SOEKNADSFRIST,ae.DEFAULT,Ke.VEDTAK,ae.UTTAK,ae.UTTAK,ae.UTTAK_DOKUMENTASJON,ae.SAKEN,ae.DEFAULT,Ke.UTTAK,ae.VERGE,ae.DEFAULT,Ke.TILKJENT_YTELSE,ae.DEFAULT,Ke.SIMULERING,ae.SAKEN,ae.FODSELTILRETTELEGGING,ae.DEFAULT,Ke.INNGANGSVILKAR,ae.DEFAULT,ae.UTTAK_DOKUMENTASJON,ae.DEFAULT,Ke.FORTSATTMEDLEMSKAP,ae.ARBEID_OG_INNTEKT,Ke.DEFAULT,ae.OMSORG_OG_RETT;ae.FEILUTBETALING,ae.DEFAULT,Ke.TILBAKEKREVING,ae.DEFAULT,Ke.FORELDELSE,ae.DEFAULT,Ke.VEDTAK,ae.VERGE;const OI=(e,i,t)=>`/fpsak/api/dokument/hent-dokument?saksnummer=${e}&journalpostId=${i}&dokumentId=${t}`,lv=({inntektsmelding:e,fagsak:i})=>M.jsx(fg,{type:"button",onClick:()=>{window.open(OI(i.saksnummer,e.journalpostId,e.dokumentId),"_blank")},variant:"secondary",size:"small",icon:M.jsx(ky,{}),children:M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.modal.trigger"})});lv.__docgenInfo={description:"",methods:[],displayName:"LastNedPdfKnapp",props:{fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  fagsakYtelseType: string;
  relasjonsRolleType: string;
  status: string;
  dekningsgrad: number;
  aktørId: string;
  harIkkeRegistrertAdresse: boolean;
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  bruker: FagsakPerson;
  fagsakMarkeringer?: Saksmarkering[];
  annenPart?: FagsakPerson;
  familiehendelse?: FagsakHendelse;
  annenpartBehandling: AnnenPartBehandling;
  behandlinger: BehandlingAppKontekst[];
  brukerManglerAdresse: boolean;
  historikkinnslag: Historikkinnslag[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"relasjonsRolleType",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}},{key:"aktørId",value:{name:"string",required:!0}},{key:"harIkkeRegistrertAdresse",value:{name:"boolean",required:!0}},{key:"sakSkalTilInfotrygd",value:{name:"boolean",required:!0}},{key:"behandlingTypeKanOpprettes",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: string;
  kanOppretteBehandling: boolean;
}`,signature:{properties:[{key:"behandlingType",value:{name:"string",required:!0}},{key:"kanOppretteBehandling",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingType: string;
  kanOppretteBehandling: boolean;
}>`}],raw:"BehandlingOppretting[]",required:!0}},{key:"bruker",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"aktørId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}>`,required:!1}},{key:"fagsakMarkeringer",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fagsakMarkering: string;
  kortNavn?: string;
}`,signature:{properties:[{key:"fagsakMarkering",value:{name:"string",required:!0}},{key:"kortNavn",value:{name:"string",required:!1}}]}}],raw:"Saksmarkering[]",required:!1}},{key:"annenPart",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"aktørId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}>`,required:!1}},{key:"familiehendelse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}`,signature:{properties:[{key:"hendelseType",value:{name:"string",required:!0}},{key:"hendelseDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}>`,required:!1}},{key:"annenpartBehandling",value:{name:"signature",type:"object",raw:`{
  saksnummer: string;
  behandlingUuid: string;
  relasjonsRolleType: string;
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"relasjonsRolleType",value:{name:"string",required:!0}}]},required:!0}},{key:"behandlinger",value:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"any",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}[]`,required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"harVerge",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}`,signature:{properties:[{key:"behandlingTillatteOperasjoner",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}`,signature:{properties:[{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"VergeBehandlingmenyValg",required:!0}}]}}],raw:`Readonly<{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}>`,required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig: boolean;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"boolean",required:!0}}]}}],raw:"Brevmal[]",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"string",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"opptjeningAktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}`,signature:{properties:[{key:"aktivitetType",value:{name:"string",required:!0}},{key:"erEndring",value:{name:"boolean",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"orgnr",value:{name:"string",required:!1}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"privatpersonFødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}>`}],raw:"OpptjeningAktiviteter[]",required:!1}},{key:"beregningDto",value:{name:"signature",type:"object",raw:`{
  fastsattVarigEndringNaering: boolean;
  faktaOmBeregningTilfeller: string[];
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"boolean",required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"typeEndring",value:{name:"TypeEndring",required:!0}},{key:"erSlettet",value:{name:"boolean",required:!0}},{key:"erAvklart",value:{name:"boolean",required:!0}},{key:"erLagtTil",value:{name:"boolean",required:!0}},{key:"erEndret",value:{name:"boolean",required:!0}}]}}],raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}[]`,required:!1}}]}}],raw:`Readonly<{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}>`}],raw:"TotrinnskontrollAksjonspunkt[]",required:!0}}]}}],raw:`Readonly<{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`,required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"string",required:!1}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}>`}]}],raw:"BehandlingAppKontekst[]",required:!0}},{key:"brukerManglerAdresse",value:{name:"boolean",required:!0}},{key:"historikkinnslag",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  opprettetAv?: string;
  opprettetTidspunkt: string;
  type: string;
  behandlingUuid: string;
  aktoer: string;
  dokumentLinks?: HistorikkInnslagDokumentLink[];
  historikkinnslagDeler: HistorikkinnslagDel[];
}`,signature:{properties:[{key:"opprettetAv",value:{name:"string",required:!1}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"aktoer",value:{name:"string",required:!0}},{key:"dokumentLinks",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  dokumentId?: string;
  journalpostId?: string;
  tag: string;
  url?: string;
  utgått: boolean;
}`,signature:{properties:[{key:"dokumentId",value:{name:"string",required:!1}},{key:"journalpostId",value:{name:"string",required:!1}},{key:"tag",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}},{key:"utgått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  dokumentId?: string;
  journalpostId?: string;
  tag: string;
  url?: string;
  utgått: boolean;
}>`}],raw:"HistorikkInnslagDokumentLink[]",required:!1}},{key:"historikkinnslagDeler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  begrunnelsetekst?: string;
  begrunnelseFritekst?: string;
  hendelse?: {
    navn?: string;
    verdi?: string;
  };
  opplysninger: HistorikkInnslagOpplysning[];
  soeknadsperiode?: {
    soeknadsperiodeType?: string;
    navnVerdi?: string;
    tilVerdi?: string;
  };
  skjermlenke?: string;
  årsaktekst?: string;
  tema?: {
    endretFeltNavn: string;
    klNavn: string;
    navnVerdi: string;
  };
  gjeldendeFra?: {
    fra?: string;
    navn?: string;
    verdi?: string;
  };
  resultat?: string;
  endredeFelter: HistorikkinnslagEndretFelt[];
  aksjonspunkter?: HistorikkInnslagAksjonspunkt[];
}`,signature:{properties:[{key:"begrunnelsetekst",value:{name:"string",required:!1}},{key:"begrunnelseFritekst",value:{name:"string",required:!1}},{key:"hendelse",value:{name:"signature",type:"object",raw:`{
  navn?: string;
  verdi?: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!1}},{key:"verdi",value:{name:"string",required:!1}}]},required:!1}},{key:"opplysninger",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  opplysningType: string;
  tilVerdi?: string;
}`,signature:{properties:[{key:"opplysningType",value:{name:"string",required:!0}},{key:"tilVerdi",value:{name:"string",required:!1}}]}}],raw:"HistorikkInnslagOpplysning[]",required:!0}},{key:"soeknadsperiode",value:{name:"signature",type:"object",raw:`{
  soeknadsperiodeType?: string;
  navnVerdi?: string;
  tilVerdi?: string;
}`,signature:{properties:[{key:"soeknadsperiodeType",value:{name:"string",required:!1}},{key:"navnVerdi",value:{name:"string",required:!1}},{key:"tilVerdi",value:{name:"string",required:!1}}]},required:!1}},{key:"skjermlenke",value:{name:"string",required:!1}},{key:"årsaktekst",value:{name:"string",required:!1}},{key:"tema",value:{name:"signature",type:"object",raw:`{
  endretFeltNavn: string;
  klNavn: string;
  navnVerdi: string;
}`,signature:{properties:[{key:"endretFeltNavn",value:{name:"string",required:!0}},{key:"klNavn",value:{name:"string",required:!0}},{key:"navnVerdi",value:{name:"string",required:!0}}]},required:!1}},{key:"gjeldendeFra",value:{name:"signature",type:"object",raw:`{
  fra?: string;
  navn?: string;
  verdi?: string;
}`,signature:{properties:[{key:"fra",value:{name:"string",required:!1}},{key:"navn",value:{name:"string",required:!1}},{key:"verdi",value:{name:"string",required:!1}}]},required:!1}},{key:"resultat",value:{name:"string",required:!1}},{key:"endredeFelter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  endretFeltNavn: string;
  navnVerdi?: string;
  klNavn?: string;
  fraVerdi?: string | number | boolean;
  tilVerdi?: string | number | boolean;
  klFraVerdi?: string;
  klTilVerdi?: string;
}`,signature:{properties:[{key:"endretFeltNavn",value:{name:"string",required:!0}},{key:"navnVerdi",value:{name:"string",required:!1}},{key:"klNavn",value:{name:"string",required:!1}},{key:"fraVerdi",value:{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}],required:!1}},{key:"tilVerdi",value:{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}],required:!1}},{key:"klFraVerdi",value:{name:"string",required:!1}},{key:"klTilVerdi",value:{name:"string",required:!1}}]}}],raw:"HistorikkinnslagEndretFelt[]",required:!0}},{key:"aksjonspunkter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  godkjent: boolean;
  aksjonspunktBegrunnelse?: string;
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"aksjonspunktBegrunnelse",value:{name:"string",required:!1}}]}}],raw:"HistorikkInnslagAksjonspunkt[]",required:!1}}]}}],raw:"HistorikkinnslagDel[]",required:!0}}]}}],raw:`Readonly<{
  opprettetAv?: string;
  opprettetTidspunkt: string;
  type: string;
  behandlingUuid: string;
  aktoer: string;
  dokumentLinks?: HistorikkInnslagDokumentLink[];
  historikkinnslagDeler: HistorikkinnslagDel[];
}>`}],raw:"Historikkinnslag[]",required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"string",required:!1}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}>`,required:!0}},{key:"notater",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  opprettetTidspunkt: string;
  opprettetAv: string;
  notat: string;
}`,signature:{properties:[{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"opprettetAv",value:{name:"string",required:!0}},{key:"notat",value:{name:"string",required:!0}}]}}],raw:"Saksnotat[]",required:!0}}]}}],raw:`Readonly<{
  saksnummer: string;
  fagsakYtelseType: string;
  relasjonsRolleType: string;
  status: string;
  dekningsgrad: number;
  aktørId: string;
  harIkkeRegistrertAdresse: boolean;
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  bruker: FagsakPerson;
  fagsakMarkeringer?: Saksmarkering[];
  annenPart?: FagsakPerson;
  familiehendelse?: FagsakHendelse;
  annenpartBehandling: AnnenPartBehandling;
  behandlinger: BehandlingAppKontekst[];
  brukerManglerAdresse: boolean;
  historikkinnslag: Historikkinnslag[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
}>`},description:""},inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`},description:""}}};const uv=({inntektsmelding:e})=>{const i=Zn();if(e.refusjonsperioder.length===0)return M.jsx(mr,{tittel:i.formatMessage({id:"InntektsmeldingFaktaPanel.refusjon.heading"}),children:M.jsx("span",{children:e.refusjonPrMnd?gt(e.refusjonPrMnd):M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.refusjon.ingen"})})});const t=[...e.refusjonsperioder].sort((a,s)=>new Date(a.fom).getTime()-new Date(s.fom).getTime());return M.jsxs(kt,{gap:"0",children:[M.jsx("span",{children:"Krever refusjon"}),M.jsx("span",{children:gt(e.refusjonPrMnd??0)}),M.jsx("span",{children:"Endringer i perioden:"}),M.jsx("ul",{children:t.map(a=>M.jsx("li",{children:M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.refusjon.endring.periode",values:{kroner:gt(a.refusjonsbeløp.verdi),fom:M.jsx(Jt,{dateString:a.fom})}})},a.indexKey))})]})};uv.__docgenInfo={description:"",methods:[],displayName:"Refusjon",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`},description:""}}};const dv=({startDatoPermisjon:e,ytelse:i})=>{const t=Zn();return e?M.jsxs(mr,{tittel:t.formatMessage({id:"InntektsmeldingFaktaPanel.startDato.heading"},{ytelse:i.toLowerCase()}),children:[M.jsx("span",{children:e?M.jsx(Jt,{dateString:e}):"-"}),M.jsx("span",{children:M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.startDato.fraArbeidsgiver"})})]}):null};dv.__docgenInfo={description:"",methods:[],displayName:"Startdato",props:{startDatoPermisjon:{required:!1,tsType:{name:"string"},description:""},ytelse:{required:!0,tsType:{name:"string"},description:""}}};const gv=({inntektsmelding:e})=>{const i=Zn();return M.jsxs(mr,{tittel:i.formatMessage({id:"InntektsmeldingFaktaPanel.kontaktperson.heading"}),children:[M.jsxs("span",{children:[M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.kontaktperson.navn"}),": ",e.kontaktpersonNavn]}),M.jsxs("span",{children:[M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.kontaktperson.telefon"}),": ",e.kontaktpersonNummer]})]})};gv.__docgenInfo={description:"",methods:[],displayName:"KontaktPerson",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`},description:""}}};const kv=({arbeidsgiverOpplysningerPerId:e,arbeidsgiverIdent:i})=>{var a;const t=Zn();return M.jsxs(mr,{tittel:t.formatMessage({id:"InntektsmeldingFaktaPanel.arbeidsgiver.heading"}),children:[M.jsxs("span",{children:[M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.arbeidsgiver.navn"}),":"," ",((a=e[i])==null?void 0:a.navn)??"-"]}),M.jsxs("span",{children:[M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.arbeidsgiver.underenhet"}),": ",i]})]})};kv.__docgenInfo={description:"",methods:[],displayName:"Arbeidsgiver",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"boolean",required:!0}},{key:"referanse",value:{name:"string",required:!1}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},arbeidsgiverIdent:{required:!0,tsType:{name:"string"},description:""}}};const vv=({inntektsmelding:e,arbeidsgiverOpplysningerPerId:i,fagsak:t,alleBehandlinger:a,behandling:s,alleKodeverk:l})=>{const d=Zn();return M.jsxs(kt,{gap:"4",className:$t.container,children:[M.jsxs(dt,{gap:"4",justify:"space-between",align:"start",children:[M.jsxs(gg,{level:"3",size:"small",children:[M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.innsendingstidspunkt"})," ",M.jsx(za,{dateTimeString:e.innsendingstidspunkt,separator:"kl"})]}),M.jsx(lv,{fagsak:t,inntektsmelding:e})]}),M.jsxs(Vy,{columns:3,gap:"8",children:[M.jsx(kv,{arbeidsgiverOpplysningerPerId:i,arbeidsgiverIdent:e.arbeidsgiverIdent}),M.jsx(mr,{tittel:d.formatMessage({id:"InntektsmeldingFaktaPanel.månedsinntekt.heading"}),children:M.jsx("span",{children:gt(e.inntektPrMnd)})}),M.jsx(gk,{alleKodeverk:l,inntektsmelding:e,alleBehandlinger:a,behandling:s}),M.jsx(gv,{inntektsmelding:e}),M.jsx(dv,{ytelse:bb(l,So.FAGSAK_YTELSE,t.fagsakYtelseType),startDatoPermisjon:e.startDatoPermisjon}),M.jsx(ov,{kildeSystem:e.kildeSystem}),M.jsx(sv,{inntektsmelding:e,alleKodeverk:l}),M.jsx(uv,{inntektsmelding:e})]})]})};vv.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingInnhold",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"boolean",required:!0}},{key:"referanse",value:{name:"string",required:!1}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"any",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}[]`,required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"harVerge",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}}]},required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"string",required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},alleBehandlinger:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"any",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}[]`,required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"harVerge",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}`,signature:{properties:[{key:"behandlingTillatteOperasjoner",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}`,signature:{properties:[{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"VergeBehandlingmenyValg",required:!0}}]}}],raw:`Readonly<{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}>`,required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig: boolean;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"boolean",required:!0}}]}}],raw:"Brevmal[]",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"string",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"opptjeningAktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}`,signature:{properties:[{key:"aktivitetType",value:{name:"string",required:!0}},{key:"erEndring",value:{name:"boolean",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"orgnr",value:{name:"string",required:!1}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"privatpersonFødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}>`}],raw:"OpptjeningAktiviteter[]",required:!1}},{key:"beregningDto",value:{name:"signature",type:"object",raw:`{
  fastsattVarigEndringNaering: boolean;
  faktaOmBeregningTilfeller: string[];
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"boolean",required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"typeEndring",value:{name:"TypeEndring",required:!0}},{key:"erSlettet",value:{name:"boolean",required:!0}},{key:"erAvklart",value:{name:"boolean",required:!0}},{key:"erLagtTil",value:{name:"boolean",required:!0}},{key:"erEndret",value:{name:"boolean",required:!0}}]}}],raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}[]`,required:!1}}]}}],raw:`Readonly<{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}>`}],raw:"TotrinnskontrollAksjonspunkt[]",required:!0}}]}}],raw:`Readonly<{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`,required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"string",required:!1}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""},fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  fagsakYtelseType: string;
  relasjonsRolleType: string;
  status: string;
  dekningsgrad: number;
  aktørId: string;
  harIkkeRegistrertAdresse: boolean;
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  bruker: FagsakPerson;
  fagsakMarkeringer?: Saksmarkering[];
  annenPart?: FagsakPerson;
  familiehendelse?: FagsakHendelse;
  annenpartBehandling: AnnenPartBehandling;
  behandlinger: BehandlingAppKontekst[];
  brukerManglerAdresse: boolean;
  historikkinnslag: Historikkinnslag[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"relasjonsRolleType",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}},{key:"aktørId",value:{name:"string",required:!0}},{key:"harIkkeRegistrertAdresse",value:{name:"boolean",required:!0}},{key:"sakSkalTilInfotrygd",value:{name:"boolean",required:!0}},{key:"behandlingTypeKanOpprettes",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: string;
  kanOppretteBehandling: boolean;
}`,signature:{properties:[{key:"behandlingType",value:{name:"string",required:!0}},{key:"kanOppretteBehandling",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingType: string;
  kanOppretteBehandling: boolean;
}>`}],raw:"BehandlingOppretting[]",required:!0}},{key:"bruker",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"aktørId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}>`,required:!1}},{key:"fagsakMarkeringer",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fagsakMarkering: string;
  kortNavn?: string;
}`,signature:{properties:[{key:"fagsakMarkering",value:{name:"string",required:!0}},{key:"kortNavn",value:{name:"string",required:!1}}]}}],raw:"Saksmarkering[]",required:!1}},{key:"annenPart",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"aktørId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}>`,required:!1}},{key:"familiehendelse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}`,signature:{properties:[{key:"hendelseType",value:{name:"string",required:!0}},{key:"hendelseDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}>`,required:!1}},{key:"annenpartBehandling",value:{name:"signature",type:"object",raw:`{
  saksnummer: string;
  behandlingUuid: string;
  relasjonsRolleType: string;
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"relasjonsRolleType",value:{name:"string",required:!0}}]},required:!0}},{key:"behandlinger",value:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"any",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}[]`,required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"harVerge",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}`,signature:{properties:[{key:"behandlingTillatteOperasjoner",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}`,signature:{properties:[{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"VergeBehandlingmenyValg",required:!0}}]}}],raw:`Readonly<{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}>`,required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig: boolean;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"boolean",required:!0}}]}}],raw:"Brevmal[]",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"string",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"opptjeningAktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}`,signature:{properties:[{key:"aktivitetType",value:{name:"string",required:!0}},{key:"erEndring",value:{name:"boolean",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"orgnr",value:{name:"string",required:!1}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"privatpersonFødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}>`}],raw:"OpptjeningAktiviteter[]",required:!1}},{key:"beregningDto",value:{name:"signature",type:"object",raw:`{
  fastsattVarigEndringNaering: boolean;
  faktaOmBeregningTilfeller: string[];
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"boolean",required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"typeEndring",value:{name:"TypeEndring",required:!0}},{key:"erSlettet",value:{name:"boolean",required:!0}},{key:"erAvklart",value:{name:"boolean",required:!0}},{key:"erLagtTil",value:{name:"boolean",required:!0}},{key:"erEndret",value:{name:"boolean",required:!0}}]}}],raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}[]`,required:!1}}]}}],raw:`Readonly<{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}>`}],raw:"TotrinnskontrollAksjonspunkt[]",required:!0}}]}}],raw:`Readonly<{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`,required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"string",required:!1}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}>`}]}],raw:"BehandlingAppKontekst[]",required:!0}},{key:"brukerManglerAdresse",value:{name:"boolean",required:!0}},{key:"historikkinnslag",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  opprettetAv?: string;
  opprettetTidspunkt: string;
  type: string;
  behandlingUuid: string;
  aktoer: string;
  dokumentLinks?: HistorikkInnslagDokumentLink[];
  historikkinnslagDeler: HistorikkinnslagDel[];
}`,signature:{properties:[{key:"opprettetAv",value:{name:"string",required:!1}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"aktoer",value:{name:"string",required:!0}},{key:"dokumentLinks",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  dokumentId?: string;
  journalpostId?: string;
  tag: string;
  url?: string;
  utgått: boolean;
}`,signature:{properties:[{key:"dokumentId",value:{name:"string",required:!1}},{key:"journalpostId",value:{name:"string",required:!1}},{key:"tag",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}},{key:"utgått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  dokumentId?: string;
  journalpostId?: string;
  tag: string;
  url?: string;
  utgått: boolean;
}>`}],raw:"HistorikkInnslagDokumentLink[]",required:!1}},{key:"historikkinnslagDeler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  begrunnelsetekst?: string;
  begrunnelseFritekst?: string;
  hendelse?: {
    navn?: string;
    verdi?: string;
  };
  opplysninger: HistorikkInnslagOpplysning[];
  soeknadsperiode?: {
    soeknadsperiodeType?: string;
    navnVerdi?: string;
    tilVerdi?: string;
  };
  skjermlenke?: string;
  årsaktekst?: string;
  tema?: {
    endretFeltNavn: string;
    klNavn: string;
    navnVerdi: string;
  };
  gjeldendeFra?: {
    fra?: string;
    navn?: string;
    verdi?: string;
  };
  resultat?: string;
  endredeFelter: HistorikkinnslagEndretFelt[];
  aksjonspunkter?: HistorikkInnslagAksjonspunkt[];
}`,signature:{properties:[{key:"begrunnelsetekst",value:{name:"string",required:!1}},{key:"begrunnelseFritekst",value:{name:"string",required:!1}},{key:"hendelse",value:{name:"signature",type:"object",raw:`{
  navn?: string;
  verdi?: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!1}},{key:"verdi",value:{name:"string",required:!1}}]},required:!1}},{key:"opplysninger",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  opplysningType: string;
  tilVerdi?: string;
}`,signature:{properties:[{key:"opplysningType",value:{name:"string",required:!0}},{key:"tilVerdi",value:{name:"string",required:!1}}]}}],raw:"HistorikkInnslagOpplysning[]",required:!0}},{key:"soeknadsperiode",value:{name:"signature",type:"object",raw:`{
  soeknadsperiodeType?: string;
  navnVerdi?: string;
  tilVerdi?: string;
}`,signature:{properties:[{key:"soeknadsperiodeType",value:{name:"string",required:!1}},{key:"navnVerdi",value:{name:"string",required:!1}},{key:"tilVerdi",value:{name:"string",required:!1}}]},required:!1}},{key:"skjermlenke",value:{name:"string",required:!1}},{key:"årsaktekst",value:{name:"string",required:!1}},{key:"tema",value:{name:"signature",type:"object",raw:`{
  endretFeltNavn: string;
  klNavn: string;
  navnVerdi: string;
}`,signature:{properties:[{key:"endretFeltNavn",value:{name:"string",required:!0}},{key:"klNavn",value:{name:"string",required:!0}},{key:"navnVerdi",value:{name:"string",required:!0}}]},required:!1}},{key:"gjeldendeFra",value:{name:"signature",type:"object",raw:`{
  fra?: string;
  navn?: string;
  verdi?: string;
}`,signature:{properties:[{key:"fra",value:{name:"string",required:!1}},{key:"navn",value:{name:"string",required:!1}},{key:"verdi",value:{name:"string",required:!1}}]},required:!1}},{key:"resultat",value:{name:"string",required:!1}},{key:"endredeFelter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  endretFeltNavn: string;
  navnVerdi?: string;
  klNavn?: string;
  fraVerdi?: string | number | boolean;
  tilVerdi?: string | number | boolean;
  klFraVerdi?: string;
  klTilVerdi?: string;
}`,signature:{properties:[{key:"endretFeltNavn",value:{name:"string",required:!0}},{key:"navnVerdi",value:{name:"string",required:!1}},{key:"klNavn",value:{name:"string",required:!1}},{key:"fraVerdi",value:{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}],required:!1}},{key:"tilVerdi",value:{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}],required:!1}},{key:"klFraVerdi",value:{name:"string",required:!1}},{key:"klTilVerdi",value:{name:"string",required:!1}}]}}],raw:"HistorikkinnslagEndretFelt[]",required:!0}},{key:"aksjonspunkter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  godkjent: boolean;
  aksjonspunktBegrunnelse?: string;
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"aksjonspunktBegrunnelse",value:{name:"string",required:!1}}]}}],raw:"HistorikkInnslagAksjonspunkt[]",required:!1}}]}}],raw:"HistorikkinnslagDel[]",required:!0}}]}}],raw:`Readonly<{
  opprettetAv?: string;
  opprettetTidspunkt: string;
  type: string;
  behandlingUuid: string;
  aktoer: string;
  dokumentLinks?: HistorikkInnslagDokumentLink[];
  historikkinnslagDeler: HistorikkinnslagDel[];
}>`}],raw:"Historikkinnslag[]",required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"string",required:!1}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}>`,required:!0}},{key:"notater",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  opprettetTidspunkt: string;
  opprettetAv: string;
  notat: string;
}`,signature:{properties:[{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"opprettetAv",value:{name:"string",required:!0}},{key:"notat",value:{name:"string",required:!0}}]}}],raw:"Saksnotat[]",required:!0}}]}}],raw:`Readonly<{
  saksnummer: string;
  fagsakYtelseType: string;
  relasjonsRolleType: string;
  status: string;
  dekningsgrad: number;
  aktørId: string;
  harIkkeRegistrertAdresse: boolean;
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  bruker: FagsakPerson;
  fagsakMarkeringer?: Saksmarkering[];
  annenPart?: FagsakPerson;
  familiehendelse?: FagsakHendelse;
  annenpartBehandling: AnnenPartBehandling;
  behandlinger: BehandlingAppKontekst[];
  brukerManglerAdresse: boolean;
  historikkinnslag: Historikkinnslag[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
}>`},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const ng=mn(_b),Po=({arbeidsgiverOpplysningerPerId:e,fagsak:i,alleBehandlinger:t,behandling:a,alleKodeverk:s,inntektsmeldinger:l})=>{const[d,g]=P.useState({orderBy:"innsendingstidspunkt",direction:"descending"}),v=h=>{g(d&&h===d.orderBy&&d.direction==="descending"?void 0:{orderBy:h,direction:d&&h===d.orderBy&&d.direction==="ascending"?"descending":"ascending"})},T=d?LI({inntektsmeldinger:l,arbeidsgiverOpplysningerPerId:e,sortKey:d.orderBy,behandling:a}):l,f=(d==null?void 0:d.direction)==="ascending"?T:T.toReversed();return f.length===0?M.jsx(Dd,{value:ng,children:M.jsxs(dt,{gap:"2",justify:"center",align:"center",className:$t.ingenInntektsmeldinger,children:[M.jsx(Wt,{children:M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.ingen"})}),M.jsx(yy,{})]})}):M.jsx(Dd,{value:ng,children:M.jsxs(He,{sort:d,onSortChange:h=>v(h),children:[M.jsx(He.Header,{children:M.jsxs(He.Row,{children:[M.jsx(He.ColumnHeader,{sortKey:"innsendingstidspunkt",sortable:!0,children:M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.tabell.header.innsendt"})}),M.jsx(He.ColumnHeader,{sortKey:"arbeidsgiverIdent",sortable:!0,children:M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.tabell.header.arbeidsgiver"})}),M.jsx(He.ColumnHeader,{sortKey:"startDatoPermisjon",sortable:!0,children:M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.tabell.header.skjæringstidspunkt"})}),M.jsx(He.ColumnHeader,{sortKey:"inntektPrMnd",sortable:!0,children:M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.tabell.header.månedsinntekt"})}),M.jsx(He.ColumnHeader,{sortKey:"tilknyttedeBehandlingIder",sortable:!0,children:M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.tabell.header.behandling"})}),M.jsx(He.HeaderCell,{})]})}),M.jsx(He.Body,{children:f.map(h=>{var y;return M.jsxs(He.ExpandableRow,{expandOnRowClick:!0,togglePlacement:"right",content:M.jsx(vv,{alleKodeverk:s,fagsak:i,behandling:a,alleBehandlinger:t,arbeidsgiverOpplysningerPerId:e,inntektsmelding:h}),children:[M.jsx(He.DataCell,{children:M.jsx(za,{dateTimeString:h.innsendingstidspunkt,separator:"kl"})}),M.jsx(He.DataCell,{children:((y=e[h.arbeidsgiverIdent])==null?void 0:y.navn)??"-"}),M.jsx(He.DataCell,{children:h.startDatoPermisjon?M.jsx(Jt,{dateString:h.startDatoPermisjon}):"-"}),M.jsx(He.DataCell,{children:gt(h.inntektPrMnd)}),M.jsx(He.DataCell,{children:M.jsx(KI,{behandling:a,inntektsmelding:h})})]},`${h.journalpostId}-${h.internArbeidsforholdId}`)})})]})})},LI=({inntektsmeldinger:e,arbeidsgiverOpplysningerPerId:i,sortKey:t,behandling:a})=>t==="arbeidsgiverIdent"?e.slice().sort((s,l)=>{var v,T;const d=(v=i[s.arbeidsgiverIdent])==null?void 0:v.navn,g=(T=i[l.arbeidsgiverIdent])==null?void 0:T.navn;return Hs(d,g)}):t==="tilknyttedeBehandlingIder"?e.slice().sort((s,l)=>{const d=mo({behandling:a,inntektsmelding:s}),g=mo({behandling:a,inntektsmelding:l});return Hs(d,g)}):e.slice().sort((s,l)=>{const d=s[t],g=l[t];return Hs(d,g)}),Hs=(e,i)=>e===void 0?-1:i===void 0?1:e<i?-1:e>i?1:0,KI=({behandling:e,inntektsmelding:i})=>{const t=mo({behandling:e,inntektsmelding:i});return t==="DENNE"?M.jsxs(dt,{gap:"1",align:"center",children:[M.jsx(Os,{className:$t.behandlingCircleDenne}),M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.denne"})]}):t==="ANDRE"?M.jsxs(dt,{gap:"1",align:"center",children:[M.jsx(Os,{className:$t.behandlingCircleAndre}),M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.andre"})]}):M.jsxs(dt,{gap:"1",align:"center",children:[M.jsx(Os,{className:$t.behandlingCircleIngen}),M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.ingen"})]})},mo=({behandling:e,inntektsmelding:i})=>i.tilknyttedeBehandlingIder.includes(e.uuid)?"DENNE":i.tilknyttedeBehandlingIder.length>0?"ANDRE":"INGEN";Po.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingFaktaIndex",props:{inntektsmeldinger:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"AksjonspunktÅrsak",required:!1}},{key:"saksbehandlersVurdering",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:"{ fomDato: string; tomDato: string }",signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  periode: { fomDato: string; tomDato: string };
  beloepPerMnd: Beløp;
  type: string;
  indexKey: string;
}>`}],raw:"AktivNaturalYtelse[]",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  refusjonsbeløp: Beløp;
  indexKey: string;
  fom: string;
}`,signature:{properties:[{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi: number;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!0}}]},required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}}]}}],raw:"Refusjonsperiode[]",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"keyof typeof InntektsmeldingInnsendingsårsak",elements:[{name:"literal",value:"NY"},{name:"literal",value:"ENDRING"},{name:"literal",value:"UDEFINERT"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]"},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"boolean",required:!0}},{key:"referanse",value:{name:"string",required:!1}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"any",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}[]`,required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"harVerge",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}}]},required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"string",required:!0}},{key:"vilkarStatus",value:{name:"string",required:!0}},{key:"avslagKode",value:{name:"string",required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: string;
  vilkarStatus: string;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
}>`}],raw:"Vilkar[]",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},alleBehandlinger:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"any",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}[]`,required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"harVerge",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}`,signature:{properties:[{key:"behandlingTillatteOperasjoner",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}`,signature:{properties:[{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"VergeBehandlingmenyValg",required:!0}}]}}],raw:`Readonly<{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}>`,required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig: boolean;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"boolean",required:!0}}]}}],raw:"Brevmal[]",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"string",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"opptjeningAktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}`,signature:{properties:[{key:"aktivitetType",value:{name:"string",required:!0}},{key:"erEndring",value:{name:"boolean",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"orgnr",value:{name:"string",required:!1}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"privatpersonFødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}>`}],raw:"OpptjeningAktiviteter[]",required:!1}},{key:"beregningDto",value:{name:"signature",type:"object",raw:`{
  fastsattVarigEndringNaering: boolean;
  faktaOmBeregningTilfeller: string[];
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"boolean",required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"typeEndring",value:{name:"TypeEndring",required:!0}},{key:"erSlettet",value:{name:"boolean",required:!0}},{key:"erAvklart",value:{name:"boolean",required:!0}},{key:"erLagtTil",value:{name:"boolean",required:!0}},{key:"erEndret",value:{name:"boolean",required:!0}}]}}],raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}[]`,required:!1}}]}}],raw:`Readonly<{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}>`}],raw:"TotrinnskontrollAksjonspunkt[]",required:!0}}]}}],raw:`Readonly<{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`,required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"string",required:!1}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""},fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  fagsakYtelseType: string;
  relasjonsRolleType: string;
  status: string;
  dekningsgrad: number;
  aktørId: string;
  harIkkeRegistrertAdresse: boolean;
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  bruker: FagsakPerson;
  fagsakMarkeringer?: Saksmarkering[];
  annenPart?: FagsakPerson;
  familiehendelse?: FagsakHendelse;
  annenpartBehandling: AnnenPartBehandling;
  behandlinger: BehandlingAppKontekst[];
  brukerManglerAdresse: boolean;
  historikkinnslag: Historikkinnslag[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"relasjonsRolleType",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}},{key:"aktørId",value:{name:"string",required:!0}},{key:"harIkkeRegistrertAdresse",value:{name:"boolean",required:!0}},{key:"sakSkalTilInfotrygd",value:{name:"boolean",required:!0}},{key:"behandlingTypeKanOpprettes",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: string;
  kanOppretteBehandling: boolean;
}`,signature:{properties:[{key:"behandlingType",value:{name:"string",required:!0}},{key:"kanOppretteBehandling",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingType: string;
  kanOppretteBehandling: boolean;
}>`}],raw:"BehandlingOppretting[]",required:!0}},{key:"bruker",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"aktørId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}>`,required:!1}},{key:"fagsakMarkeringer",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fagsakMarkering: string;
  kortNavn?: string;
}`,signature:{properties:[{key:"fagsakMarkering",value:{name:"string",required:!0}},{key:"kortNavn",value:{name:"string",required:!1}}]}}],raw:"Saksmarkering[]",required:!1}},{key:"annenPart",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"aktørId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  navn: string;
  fødselsnummer: string;
  kjønn: string;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato?: string;
  aktørId?: string;
}>`,required:!1}},{key:"familiehendelse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}`,signature:{properties:[{key:"hendelseType",value:{name:"string",required:!0}},{key:"hendelseDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}>`,required:!1}},{key:"annenpartBehandling",value:{name:"signature",type:"object",raw:`{
  saksnummer: string;
  behandlingUuid: string;
  relasjonsRolleType: string;
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"relasjonsRolleType",value:{name:"string",required:!0}}]},required:!0}},{key:"behandlinger",value:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato?: string;
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"any",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}[]`,required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"harVerge",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  fristBehandlingPaaVent?: string;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}`,signature:{properties:[{key:"behandlingTillatteOperasjoner",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}`,signature:{properties:[{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"VergeBehandlingmenyValg",required:!0}}]}}],raw:`Readonly<{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}>`,required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig: boolean;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"boolean",required:!0}}]}}],raw:"Brevmal[]",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"string",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"opptjeningAktiviteter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}`,signature:{properties:[{key:"aktivitetType",value:{name:"string",required:!0}},{key:"erEndring",value:{name:"boolean",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"orgnr",value:{name:"string",required:!1}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"privatpersonFødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetType: string;
  erEndring: boolean;
  arbeidsgiverNavn?: string;
  orgnr?: string;
  godkjent: boolean;
  privatpersonFødselsdato?: string;
}>`}],raw:"OpptjeningAktiviteter[]",required:!1}},{key:"beregningDto",value:{name:"signature",type:"object",raw:`{
  fastsattVarigEndringNaering: boolean;
  faktaOmBeregningTilfeller: string[];
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"boolean",required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"typeEndring",value:{name:"TypeEndring",required:!0}},{key:"erSlettet",value:{name:"boolean",required:!0}},{key:"erAvklart",value:{name:"boolean",required:!0}},{key:"erLagtTil",value:{name:"boolean",required:!0}},{key:"erEndret",value:{name:"boolean",required:!0}}]}}],raw:`{
  fom: string;
  tom: string;
  typeEndring: TypeEndring;
  erSlettet: boolean;
  erAvklart: boolean;
  erLagtTil: boolean;
  erEndret: boolean;
}[]`,required:!1}}]}}],raw:`Readonly<{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  uttakPerioder?: {
    fom: string;
    tom: string;
    typeEndring: TypeEndring;
    erSlettet: boolean;
    erAvklart: boolean;
    erLagtTil: boolean;
    erEndret: boolean;
  }[];
}>`}],raw:"TotrinnskontrollAksjonspunkt[]",required:!0}}]}}],raw:`Readonly<{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`,required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"string",required:!1}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean;
}>`}]}],raw:"BehandlingAppKontekst[]",required:!0}},{key:"brukerManglerAdresse",value:{name:"boolean",required:!0}},{key:"historikkinnslag",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  opprettetAv?: string;
  opprettetTidspunkt: string;
  type: string;
  behandlingUuid: string;
  aktoer: string;
  dokumentLinks?: HistorikkInnslagDokumentLink[];
  historikkinnslagDeler: HistorikkinnslagDel[];
}`,signature:{properties:[{key:"opprettetAv",value:{name:"string",required:!1}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"aktoer",value:{name:"string",required:!0}},{key:"dokumentLinks",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  dokumentId?: string;
  journalpostId?: string;
  tag: string;
  url?: string;
  utgått: boolean;
}`,signature:{properties:[{key:"dokumentId",value:{name:"string",required:!1}},{key:"journalpostId",value:{name:"string",required:!1}},{key:"tag",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}},{key:"utgått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  dokumentId?: string;
  journalpostId?: string;
  tag: string;
  url?: string;
  utgått: boolean;
}>`}],raw:"HistorikkInnslagDokumentLink[]",required:!1}},{key:"historikkinnslagDeler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  begrunnelsetekst?: string;
  begrunnelseFritekst?: string;
  hendelse?: {
    navn?: string;
    verdi?: string;
  };
  opplysninger: HistorikkInnslagOpplysning[];
  soeknadsperiode?: {
    soeknadsperiodeType?: string;
    navnVerdi?: string;
    tilVerdi?: string;
  };
  skjermlenke?: string;
  årsaktekst?: string;
  tema?: {
    endretFeltNavn: string;
    klNavn: string;
    navnVerdi: string;
  };
  gjeldendeFra?: {
    fra?: string;
    navn?: string;
    verdi?: string;
  };
  resultat?: string;
  endredeFelter: HistorikkinnslagEndretFelt[];
  aksjonspunkter?: HistorikkInnslagAksjonspunkt[];
}`,signature:{properties:[{key:"begrunnelsetekst",value:{name:"string",required:!1}},{key:"begrunnelseFritekst",value:{name:"string",required:!1}},{key:"hendelse",value:{name:"signature",type:"object",raw:`{
  navn?: string;
  verdi?: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!1}},{key:"verdi",value:{name:"string",required:!1}}]},required:!1}},{key:"opplysninger",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  opplysningType: string;
  tilVerdi?: string;
}`,signature:{properties:[{key:"opplysningType",value:{name:"string",required:!0}},{key:"tilVerdi",value:{name:"string",required:!1}}]}}],raw:"HistorikkInnslagOpplysning[]",required:!0}},{key:"soeknadsperiode",value:{name:"signature",type:"object",raw:`{
  soeknadsperiodeType?: string;
  navnVerdi?: string;
  tilVerdi?: string;
}`,signature:{properties:[{key:"soeknadsperiodeType",value:{name:"string",required:!1}},{key:"navnVerdi",value:{name:"string",required:!1}},{key:"tilVerdi",value:{name:"string",required:!1}}]},required:!1}},{key:"skjermlenke",value:{name:"string",required:!1}},{key:"årsaktekst",value:{name:"string",required:!1}},{key:"tema",value:{name:"signature",type:"object",raw:`{
  endretFeltNavn: string;
  klNavn: string;
  navnVerdi: string;
}`,signature:{properties:[{key:"endretFeltNavn",value:{name:"string",required:!0}},{key:"klNavn",value:{name:"string",required:!0}},{key:"navnVerdi",value:{name:"string",required:!0}}]},required:!1}},{key:"gjeldendeFra",value:{name:"signature",type:"object",raw:`{
  fra?: string;
  navn?: string;
  verdi?: string;
}`,signature:{properties:[{key:"fra",value:{name:"string",required:!1}},{key:"navn",value:{name:"string",required:!1}},{key:"verdi",value:{name:"string",required:!1}}]},required:!1}},{key:"resultat",value:{name:"string",required:!1}},{key:"endredeFelter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  endretFeltNavn: string;
  navnVerdi?: string;
  klNavn?: string;
  fraVerdi?: string | number | boolean;
  tilVerdi?: string | number | boolean;
  klFraVerdi?: string;
  klTilVerdi?: string;
}`,signature:{properties:[{key:"endretFeltNavn",value:{name:"string",required:!0}},{key:"navnVerdi",value:{name:"string",required:!1}},{key:"klNavn",value:{name:"string",required:!1}},{key:"fraVerdi",value:{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}],required:!1}},{key:"tilVerdi",value:{name:"union",raw:"string | number | boolean",elements:[{name:"string"},{name:"number"},{name:"boolean"}],required:!1}},{key:"klFraVerdi",value:{name:"string",required:!1}},{key:"klTilVerdi",value:{name:"string",required:!1}}]}}],raw:"HistorikkinnslagEndretFelt[]",required:!0}},{key:"aksjonspunkter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  godkjent: boolean;
  aksjonspunktBegrunnelse?: string;
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"aksjonspunktBegrunnelse",value:{name:"string",required:!1}}]}}],raw:"HistorikkInnslagAksjonspunkt[]",required:!1}}]}}],raw:"HistorikkinnslagDel[]",required:!0}}]}}],raw:`Readonly<{
  opprettetAv?: string;
  opprettetTidspunkt: string;
  type: string;
  behandlingUuid: string;
  aktoer: string;
  dokumentLinks?: HistorikkInnslagDokumentLink[];
  historikkinnslagDeler: HistorikkinnslagDel[];
}>`}],raw:"Historikkinnslag[]",required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"string",required:!1}},{key:"iayFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"medlFaresignaler",value:{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string;
  iayFaresignaler?: {
    faresignaler: string[];
  };
  medlFaresignaler?: {
    faresignaler: string[];
  };
}>`,required:!0}},{key:"notater",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  opprettetTidspunkt: string;
  opprettetAv: string;
  notat: string;
}`,signature:{properties:[{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"opprettetAv",value:{name:"string",required:!0}},{key:"notat",value:{name:"string",required:!0}}]}}],raw:"Saksnotat[]",required:!0}}]}}],raw:`Readonly<{
  saksnummer: string;
  fagsakYtelseType: string;
  relasjonsRolleType: string;
  status: string;
  dekningsgrad: number;
  aktørId: string;
  harIkkeRegistrertAdresse: boolean;
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  bruker: FagsakPerson;
  fagsakMarkeringer?: Saksmarkering[];
  annenPart?: FagsakPerson;
  familiehendelse?: FagsakHendelse;
  annenpartBehandling: AnnenPartBehandling;
  behandlinger: BehandlingAppKontekst[];
  brukerManglerAdresse: boolean;
  historikkinnslag: Historikkinnslag[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
}>`},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const DI=[{kode:"FARA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Far"},{kode:"MORA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Mor"},{kode:"MMOR",kodeverk:"RELASJONSROLLE_TYPE",navn:"Medmor"}],PI=[{kode:"REGISTRER_OM_VERGE",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Registrering av opplysninger om verge/fullmektig"},{kode:"MANGELFULL_SØKNAD",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Mangelfull søknad"},{kode:"FASTSATT_UTTAK_SPLITT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt fastsetting av uttak - splitting av periode"},{kode:"BEH_STARTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling startet"},{kode:"REGISTRER_PAPIRSØK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Registrer papirsøknad"},{kode:"BEH_STARTET_PÅ_NYTT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling startet på nytt"},{kode:"MIGRERT_FRA_INFOTRYGD",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling gjelder flytting av sak fra Infotrygd"},{kode:"FORSLAG_VEDTAK_UTEN_TOTRINN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedtak foreslått"},{kode:"BEH_GJEN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling gjenopptatt"},{kode:"AVBRUTT_BEH",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling er henlagt"},{kode:"ANKE_BEH",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Ankebehandling"},{kode:"BREV_BESTILT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Brev bestilt"},{kode:"ENDRET_DEKNINGSGRAD",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Dekningsgrad er endret"},{kode:"OPPGAVE_VEDTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Oppgave før vedtak"},{kode:"IVERKSETTELSE_VENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen venter på iverksettelse"},{kode:"FASTSATT_UTTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt fastsetting av uttak"},{kode:"OVST_UTTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt overstyring av uttak"},{kode:"INNSYN_OPPR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Innsynsbehandling opprettet"},{kode:"TILBAKEKR_VIDEREBEHANDLING",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Metode for å håndtere tilbakekreving av feilutbetailng er valgt."},{kode:"SAK_GODKJENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Sak godkjent"},{kode:"BEH_KØET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen er satt på vent"},{kode:"NYE_REGOPPLYSNINGER",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Nye registeropplysninger"},{kode:"BEH_VENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling på vent"},{kode:"TERMINBEKREFTELSE_UGYLDIG",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Terminbekreftelsens utstedt dato er før 22. svangerskapsuke. Behandlingen fortsatt uten ny terminbekreftelse"},{kode:"FAKTA_ENDRET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Fakta endret"},{kode:"MIGRERT_FRA_INFOTRYGD_FJERNET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling gjelder ikke lenger flytting av sak fra Infotrygd"},{kode:"BYTT_ENHET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Bytt enhet"},{kode:"REVURD_OPPR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Revurdering opprettet"},{kode:"KLAGE_BEH_NFP",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Klagebehandling NFP"},{kode:"KØET_BEH_GJEN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Køet behandling er gjenopptatt"},{kode:"OVST_UTTAK_SPLITT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt overstyring av uttak - splitting av periode"},{kode:"ANKEBEH_STARTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Anke mottatt"},{kode:"UTTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlet soknadsperiode"},{kode:"KLAGE_BEH_NK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Klagebehandling KA"},{kode:"AVKLART_AKTIVITETSKRAV",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Avklart aktivitetskrav"},{kode:"NY_INFO_FRA_TPS",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Ny info fra TPS"},{kode:"KLAGEBEH_STARTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Klage mottatt"},{kode:"VEDTAK_FATTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedtak fattet"},{kode:"BEH_AVBRUTT_VUR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vurdering før vedtak"},{kode:"UENDRET_UTFALL",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Uendret utfall"},{kode:"VRS_REV_IKKE_SNDT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Varsel om revurdering ikke sendt"},{kode:"SPOLT_TILBAKE",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen er flyttet"},{kode:"OPPTJENING",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlet opptjeningsperiode"},{kode:"SAK_RETUR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Sak retur"},{kode:"FJERNET_VERGE",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Opplysninger om verge/fullmektig fjernet"},{kode:"BEH_MAN_GJEN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Gjenoppta behandling"},{kode:"BEH_OPPDATERT_NYE_OPPL",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen oppdatert med nye opplysninger"},{kode:"VEDLEGG_MOTTATT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedlegg mottatt"},{kode:"OVERSTYRT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Overstyrt"},{kode:"BREV_SENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Brev sendt"},{kode:"FORSLAG_VEDTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedtak foreslått og sendt til beslutter"}],FI=[{kode:"FRI",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Fri utsettelse fom høst 2021"},{kode:"SYKDOM_SKADE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Avhengig av hjelp grunnet sykdom"},{kode:"BARN_INNLAGT",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Barn er innlagt i helseinstitusjon"},{kode:"FERIE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Lovbestemt ferie"},{kode:"SØKER_INNLAGT",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Søker er innlagt i helseinstitusjon"},{kode:"ARBEID",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Arbeid"},{kode:"HV_OVELSE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Heimevernet"},{kode:"NAV_TILTAK",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Tiltak i regi av Nav"}],MI=[{kode:"ES",kodeverk:"FAGSAK_YTELSE",navn:"Engangsstønad"},{kode:"FP",kodeverk:"FAGSAK_YTELSE",navn:"Foreldrepenger"},{kode:"SVP",kodeverk:"FAGSAK_YTELSE",navn:"Svangerskapspenger"}],jI=[{kode:"OPPR",kodeverk:"FAGSAK_STATUS",navn:"Opprettet"},{kode:"UBEH",kodeverk:"FAGSAK_STATUS",navn:"Under behandling"},{kode:"LOP",kodeverk:"FAGSAK_STATUS",navn:"Løpende"},{kode:"AVSLU",kodeverk:"FAGSAK_STATUS",navn:"Avsluttet"}],GI=[{kode:"MS",kodeverk:"AKTIVITET_STATUS",navn:"Militær eller sivil"},{kode:"FL_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert frilanser og selvstendig næringsdrivende"},{kode:"SN",kodeverk:"AKTIVITET_STATUS",navn:"Selvstendig næringsdrivende"},{kode:"AT_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker og selvstendig næringsdrivende"},{kode:"AAP",kodeverk:"AKTIVITET_STATUS",navn:"Arbeidsavklaringspenger"},{kode:"KUN_YTELSE",kodeverk:"AKTIVITET_STATUS",navn:"Kun ytelse"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"AKTIVITET_STATUS",navn:"Ventelønn/Vartpenger"},{kode:"FL",kodeverk:"AKTIVITET_STATUS",navn:"Frilanser"},{kode:"AT_FL",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker og frilanser"},{kode:"TY",kodeverk:"AKTIVITET_STATUS",navn:"Tilstøtende ytelse"},{kode:"BA",kodeverk:"AKTIVITET_STATUS",navn:"Brukers andel"},{kode:"AT",kodeverk:"AKTIVITET_STATUS",navn:"Arbeidstaker"},{kode:"DP",kodeverk:"AKTIVITET_STATUS",navn:"Dagpenger"},{kode:"AT_FL_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker, frilanser og selvstendig næringsdrivende"}],BI=[{kode:"EGEN_NÆRING",kodeverk:"BEREGNINGSGRUNNLAG_ANDELTYPE",navn:"Egen næring"},{kode:"BRUKERS_ANDEL",kodeverk:"BEREGNINGSGRUNNLAG_ANDELTYPE",navn:"Brukers andel"},{kode:"FRILANS",kodeverk:"BEREGNINGSGRUNNLAG_ANDELTYPE",navn:"Frilans"}],VI=[{kode:"ANNET",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Annet"},{kode:"FRILANS",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Frilans"},{kode:"ORDINÆRT_ARBEID",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Ordinært arbeid"},{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Selvstendig næringsdrivende"}],wI=[{kode:"FORELDREPENGER_OPPHØRER",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Foreldrepenger opphører"},{kode:"ENDRING_I_UTTAK",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i uttak"},{kode:"INGEN_ENDRING",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Ingen endring"},{kode:"ENDRING_I_BEREGNING",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i beregning"},{kode:"ENDRING_I_BEREGNING_OG_UTTAK",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i beregning og uttak"},{kode:"ENDRING_I_FORDELING_AV_YTELSEN",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i fordeling av ytelsen"}],HI=[{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende"},{kode:"ARBEIDSTAKER_UTEN_FERIEPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker uten feriepenger"},{kode:"FRILANSER",kodeverk:"INNTEKTSKATEGORI",navn:"Frilans"},{kode:"DAGPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Dagpenger"},{kode:"SJØMANN",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker - Sjømann"},{kode:"FISKER",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende (fisker)"},{kode:"DAGMAMMA",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende (dagmamma)"},{kode:"JORDBRUKER",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende - Jordbruker"},{kode:"ARBEIDSTAKER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker"},{kode:"ARBEIDSAVKLARINGSPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidsavklaringspenger"}],UI=[{kode:"SAMB",kodeverk:"SIVILSTAND_TYPE",navn:"Samboer"},{kode:"GJPA",kodeverk:"SIVILSTAND_TYPE",navn:"Gjenlevende partner"},{kode:"GIFT",kodeverk:"SIVILSTAND_TYPE",navn:"Gift"},{kode:"REPA",kodeverk:"SIVILSTAND_TYPE",navn:"Registrert partner"},{kode:"SKPA",kodeverk:"SIVILSTAND_TYPE",navn:"Skilt partner"},{kode:"GLAD",kodeverk:"SIVILSTAND_TYPE",navn:"Gift, lever adskilt"},{kode:"SEPA",kodeverk:"SIVILSTAND_TYPE",navn:"Separert partner"},{kode:"ENKE",kodeverk:"SIVILSTAND_TYPE",navn:"Enke/-mann"},{kode:"NULL",kodeverk:"SIVILSTAND_TYPE",navn:"Uoppgitt"},{kode:"UGIF",kodeverk:"SIVILSTAND_TYPE",navn:"Ugift"},{kode:"SEPR",kodeverk:"SIVILSTAND_TYPE",navn:"Separert"},{kode:"SKIL",kodeverk:"SIVILSTAND_TYPE",navn:"Skilt"}],qI=[{kode:"FAKTA_OM_MEDLEMSKAP",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om medlemskap"},{kode:"KLAGE_BEH_NFP",kodeverk:"SKJERMLENKE_TYPE",navn:"Klageresultat Vedtaksinstans"},{kode:"PUNKT_FOR_ADOPSJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Adopsjon"},{kode:"PUNKT_FOR_SVANGERSKAPSPENGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Svangerskapspenger"},{kode:"UTLAND",kodeverk:"SKJERMLENKE_TYPE",navn:"Endret utland"},{kode:"FAKTA_OMSORG_OG_RETT",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om aleneomsorg og annenpart rett"},{kode:"PUNKT_FOR_MEDLEMSKAP_LØPENDE",kodeverk:"SKJERMLENKE_TYPE",navn:"Løpende medlemskap"},{kode:"FAKTA_OM_FORDELING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fordeling"},{kode:"BEREGNING_FORELDREPENGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Beregning"},{kode:"BESTEBEREGNING",kodeverk:"SKJERMLENKE_TYPE",navn:"Besteberegning"},{kode:"FAKTA_OM_AKTIVITETSKRAV",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om aktivitetskrav"},{kode:"FORMKRAV_KLAGE_NFP",kodeverk:"SKJERMLENKE_TYPE",navn:"Formkrav klage NFP"},{kode:"FAKTA_OM_ADOPSJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om adopsjon"},{kode:"KLAGE_BEH_NK",kodeverk:"SKJERMLENKE_TYPE",navn:"Klageresultat Klageinstans"},{kode:"FAKTA_OM_ARBEIDSFORHOLD_INNTEKTSMELDING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeid og inntekt"},{kode:"FAKTA_UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta uttak"},{kode:"PUNKT_FOR_FORELDREANSVAR",kodeverk:"SKJERMLENKE_TYPE",navn:"Foreldreansvar"},{kode:"UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Uttak"},{kode:"BEREGNING_ENGANGSSTOENAD",kodeverk:"SKJERMLENKE_TYPE",navn:"Beregning"},{kode:"FAKTA_OM_FOEDSEL",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fødsel"},{kode:"FAKTA_OM_OMSORG_OG_FORELDREANSVAR",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om omsorg og foreldreansvar"},{kode:"FORMKRAV_KLAGE_KA",kodeverk:"SKJERMLENKE_TYPE",navn:"Formkrav klage KA"},{kode:"PUNKT_FOR_FOEDSEL",kodeverk:"SKJERMLENKE_TYPE",navn:"Fødsel"},{kode:"FAKTA_OM_BEREGNING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om beregning"},{kode:"FAKTA_OM_ARBEIDSFORHOLD_PERMISJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeidsforhold med permisjon uten sluttdato"},{kode:"KONTROLL_AV_SAKSOPPLYSNINGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om saken"},{kode:"FAKTA_OM_VERGE",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om verge/fullmektig"},{kode:"TILKJENT_YTELSE",kodeverk:"SKJERMLENKE_TYPE",navn:"Tilkjent ytelse"},{kode:"PUNKT_FOR_MEDLEMSKAP",kodeverk:"SKJERMLENKE_TYPE",navn:"Medlemskap"},{kode:"ANKE_MERKNADER",kodeverk:"SKJERMLENKE_TYPE",navn:"Anke merknader"},{kode:"FAKTA_OM_ARBEIDSFORHOLD",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeidsforhold"},{kode:"FAKTA_OM_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om opptjening"},{kode:"FAKTA_OM_UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om uttak"},{kode:"PUNKT_FOR_OMSORG",kodeverk:"SKJERMLENKE_TYPE",navn:"Omsorg"},{kode:"VURDER_FARESIGNALER",kodeverk:"SKJERMLENKE_TYPE",navn:"Vurder faresignaler"},{kode:"ANKE_VURDERING",kodeverk:"SKJERMLENKE_TYPE",navn:"Anke vurdering"},{kode:"PUNKT_FOR_SVP_INNGANG",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fødsel og tilrettelegging"},{kode:"FAKTA_OM_SIMULERING",kodeverk:"SKJERMLENKE_TYPE",navn:"Simulering"},{kode:"SOEKNADSFRIST",kodeverk:"SKJERMLENKE_TYPE",navn:"Søknadsfrist"},{kode:"FAKTA_FOR_OMSORG",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om omsorg"},{kode:"FAKTA_OM_UTTAK_DOKUMENTASJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Vurder dokumentasjon"},{kode:"VEDTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Vedtak"},{kode:"FAKTA_FOR_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om opptjening"},{kode:"OPPLYSNINGSPLIKT",kodeverk:"SKJERMLENKE_TYPE",navn:"Opplysningsplikt"},{kode:"PUNKT_FOR_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Opptjening"}],xI=[{kode:"VURDER_BESTEBEREGNING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker skal ha besteberegning"},{kode:"VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder refusjonskrav fremsatt for sent skal være med i beregning."},{kode:"VURDER_NYOPPSTARTET_FL",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder nyoppstartet frilans"},{kode:"VURDER_LØNNSENDRING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder lønnsendring"},{kode:"FASTSETT_MAANEDSINNTEKT_FL",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett månedsinntekt frilans"},{kode:"VURDER_MOTTAR_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker mottar ytelse for aktivitet."},{kode:"FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsette beregningsgrunnlag for arbeidstaker uten inntektsmelding"},{kode:"VURDER_MILITÆR_SIVILTJENESTE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker har hatt militær- eller siviltjeneste i opptjeningsperioden."},{kode:"VURDER_ETTERLØNN_SLUTTPAKKE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker har etterlønn og/eller sluttpakke"},{kode:"FASTSETT_ETTERLØNN_SLUTTPAKKE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett søkers beregningsgrunnlag for etterlønn og/eller sluttpakke andel"},{kode:"FASTSETT_BG_KUN_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett beregningsgrunnlag for kun ytelse uten arbeidsforhold"},{kode:"VURDER_AT_OG_FL_I_SAMME_ORGANISASJON",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om bruker er arbeidstaker og frilanser i samme organisasjon"},{kode:"FASTSETT_ENDRET_BEREGNINGSGRUNNLAG",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsette endring i beregningsgrunnlag"},{kode:"FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett besteberegning fødende kvinne"},{kode:"VURDER_SN_NY_I_ARBEIDSLIVET",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker er SN og ny i arbeidslivet"},{kode:"FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett månedslønn arbeidstaker uten inntektsmelding"},{kode:"TILSTØTENDE_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Avklar beregningsgrunnlag og inntektskategori for tilstøtende ytelse"},{kode:"VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder tidsbegrenset arbeidsforhold"}],YI=[{kode:"HJEMSENDE_UTEN_Å_OPPHEVE",kodeverk:"KLAGEVURDERING",navn:"Hjemsende uten å oppheve"},{kode:"OPPHEVE_YTELSESVEDTAK",kodeverk:"KLAGEVURDERING",navn:"Ytelsesvedtaket oppheves"},{kode:"MEDHOLD_I_KLAGE",kodeverk:"KLAGEVURDERING",navn:"Medhold"},{kode:"STADFESTE_YTELSESVEDTAK",kodeverk:"KLAGEVURDERING",navn:"Ytelsesvedtaket stadfestes"},{kode:"AVVIS_KLAGE",kodeverk:"KLAGEVURDERING",navn:"Klagen avvises"}],CI=[{kode:"BEH_STARTET_PA_NYTT",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Behandling startet på nytt"},{kode:"BERORT_BEH_OPPHOR",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Den andre forelderens vedtak er opphørt"},{kode:"SAKSBEH_START_PA_NYTT",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Saksbehandling starter på nytt"},{kode:"BERORT_BEH_ENDRING_DEKNINGSGRAD",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Den andre forelderens behandling har endret antall disponible stønadsdager"}],$I=[{kode:"FEDREKVOTE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Fedrekvoten"},{kode:"FELLESPERIODE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Fellesperioden"},{kode:"FORELDREPENGER",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Foreldrepenger"},{kode:"MØDREKVOTE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Mødrekvoten"},{kode:"ANNET",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Andre typer som f.eks utsettelse"},{kode:"FORELDREPENGER_FØR_FØDSEL",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Foreldrepenger før fødsel"}],JI=[{kode:"HJEMSENDE_UTEN_OPPHEVE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Behandlingen er hjemsendt"},{kode:"HENLAGT_SØKNAD_MANGLER",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt søknad mangler"},{kode:"KLAGE_YTELSESVEDTAK_OPPHEVET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ytelsesvedtak opphevet"},{kode:"AVSLÅTT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Avslått"},{kode:"ANKE_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Anke er avvist"},{kode:"HENLAGT_ANKE_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, anken er trukket"},{kode:"ANKE_YTELSESVEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Vedtak stadfestet"},{kode:"FORELDREPENGER_SENERE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Sak er endret"},{kode:"ANKE_HJEMSENDE_UTEN_OPPHEV",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Behandlingen er hjemsendt"},{kode:"INNSYN_INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er innvilget"},{kode:"ANKE_OPPHEVE_OG_HJEMSENDE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Vedtak opphevet"},{kode:"INGEN_ENDRING",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ingen endring"},{kode:"HENLAGT_INNSYN_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, innsynskrav er trukket"},{kode:"FORELDREPENGER_ENDRET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Sak er endret"},{kode:"HENLAGT_KLAGE_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, klagen er trukket"},{kode:"ANKE_OMGJORT_UGUNST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Omgjort til ugunst"},{kode:"INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innvilget"},{kode:"ANKE_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Medhold"},{kode:"KLAGE_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Medhold"},{kode:"INNSYN_DELVIS_INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er delvis innvilget"},{kode:"IKKE_FASTSATT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ikke fastsatt"},{kode:"MANGLER_BEREGNINGSREGLER",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Mangler beregningsregler"},{kode:"INNSYN_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er avvist"},{kode:"HENLAGT_SØKNAD_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, søknaden er trukket"},{kode:"HENLAGT_BRUKER_DØD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, brukeren er død"},{kode:"KLAGE_YTELSESVEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ytelsesvedtak stadfestet"},{kode:"KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Tilbakekrevingsvedtak stadfestet"},{kode:"ANKE_DELVIS_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Delvis medhold"},{kode:"KLAGE_DELVIS_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Delvis medhold"},{kode:"KLAGE_OMGJORT_UGUNST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Omgjort til ugunst"},{kode:"OPPHØR",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Opphør"},{kode:"KLAGE_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Klage er avvist"},{kode:"HENLAGT_FEILOPPRETTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, søknaden er feilopprettet"},{kode:"MERGET_OG_HENLAGT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Mottatt ny søknad"}],WI=[{kode:"FBARN",kodeverk:"VERGE_TYPE",navn:"Verge for foreldreløst barn under 18 år"},{kode:"ADVOKAT",kodeverk:"VERGE_TYPE",navn:"Advokat/advokatfullmektig"},{kode:"ANNEN_F",kodeverk:"VERGE_TYPE",navn:"Annen fullmektig"},{kode:"BARN",kodeverk:"VERGE_TYPE",navn:"Verge for barn under 18 år"},{kode:"VOKSEN",kodeverk:"VERGE_TYPE",navn:"Verge for voksen"}],zI=[{kode:"TILBAKEKR_IGNORER",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Feilutbetaling, avvent samordning"},{kode:"TILBAKEKR_INNTREKK",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Feilutbetaling hvor inntrekk dekker hele beløpet"},{kode:"TILBAKEKR_OPPRETT",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Feilutbetaling med tilbakekreving"},{kode:"TILBAKEKR_OPPDATER",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Endringer vil oppdatere eksisterende feilutbetalte perioder og beløp."}],ZI=[{kode:"TERM",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Termin"},{kode:"ADPSJN",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Adopsjon"},{kode:"OMSRGO",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Omsorgoverdragelse"},{kode:"FODSL",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Fødsel"}],XI=[{kode:"14-04",kodeverk:"KLAGE_HJEMMEL",navn:"14-4 Svangerskapspenger"},{kode:"14-13",kodeverk:"KLAGE_HJEMMEL",navn:"14-13 Fars uttak"},{kode:"14-12",kodeverk:"KLAGE_HJEMMEL",navn:"14-12 Uttak av kvoter"},{kode:"14-11",kodeverk:"KLAGE_HJEMMEL",navn:"14-11 Utsettelse"},{kode:"883-6",kodeverk:"KLAGE_HJEMMEL",navn:"EØS 883/2004 artikkel 6"},{kode:"14-09",kodeverk:"KLAGE_HJEMMEL",navn:"14-9 Stønadsperioden"},{kode:"14-05",kodeverk:"KLAGE_HJEMMEL",navn:"14-5 Rett på foreldrepenger"},{kode:"14-02",kodeverk:"KLAGE_HJEMMEL",navn:"14-2 Medlemskap"},{kode:"14-14",kodeverk:"KLAGE_HJEMMEL",navn:"14-14 Bare far har rett"},{kode:"14-15",kodeverk:"KLAGE_HJEMMEL",navn:"14-15 Far aleneomsorg"},{kode:"14-17",kodeverk:"KLAGE_HJEMMEL",navn:"14-17 Rett på engangsstønad"},{kode:"14-07",kodeverk:"KLAGE_HJEMMEL",navn:"14-7 Beregning"},{kode:"22-15",kodeverk:"KLAGE_HJEMMEL",navn:"22-15 Tilbakekreving"},{kode:"14-10",kodeverk:"KLAGE_HJEMMEL",navn:"14-10 Uttaksperiodene"},{kode:"14-16",kodeverk:"KLAGE_HJEMMEL",navn:"14-16 Gradert uttak"},{kode:"8-2",kodeverk:"KLAGE_HJEMMEL",navn:"8-2 Opptjeningstid"},{kode:"21-3",kodeverk:"KLAGE_HJEMMEL",navn:"21-3 Opplysningsplikt"},{kode:"14-06",kodeverk:"KLAGE_HJEMMEL",navn:"14-6 Opptjening"},{kode:"22-13",kodeverk:"KLAGE_HJEMMEL",navn:"22-13 Fremsetning av krav"}],QI=[{kode:"INNVILGET_REDUSERT",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er innvilget med redusert beregningsgrunnlag"},{kode:"AVSLAG_ANNET",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er avslått av andre årsaker"},{kode:"INNVIRKNING",kodeverk:"FARESIGNAL_VURDERING",navn:"Faresignalene vurderes som reelle"},{kode:"INGEN_INNVIRKNING",kodeverk:"FARESIGNAL_VURDERING",navn:"Faresignalene vurderes ikke som reelle"},{kode:"INNVILGET_UENDRET",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er innvilget uten at faresignalene påvirket utfallet"},{kode:"AVSLAG_FARESIGNAL",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er avslått på grunn av faresignalene"}],eO=[{kode:"ETTERLØNN_SLUTTPAKKE",kodeverk:"ARBEID_TYPE",navn:"Etterlønn eller sluttpakke"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"ARBEID_TYPE",navn:"Ventelønn eller vartpenger"},{kode:"MILITÆR_ELLER_SIVILTJENESTE",kodeverk:"ARBEID_TYPE",navn:"Militær eller siviltjeneste"},{kode:"UTENLANDSK_ARBEIDSFORHOLD",kodeverk:"ARBEID_TYPE",navn:"Arbeid i utlandet"},{kode:"LØNN_UNDER_UTDANNING",kodeverk:"ARBEID_TYPE",navn:"Lønn under utdanning"},{kode:"FRILANSER",kodeverk:"ARBEID_TYPE",navn:"Frilanser, samlet aktivitet"}],nO=[{kode:"EOS",kodeverk:"REGION",navn:"EU/EØS"},{kode:"ANNET",kodeverk:"REGION",navn:"3.landsborger"},{kode:"NORDEN",kodeverk:"REGION",navn:"Nordisk"}],rO=[{kode:"UTTAK_PERIODE_FOM",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Fradato uttaksperiode"},{kode:"TPS_ANTALL_BARN",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Antall barn"},{kode:"UTTAK_PERIODE_TOM",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Tildato uttaksperiode"},{kode:"ANTALL_BARN",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Antall barn"},{kode:"FODSELSDATO",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Fødselsdato"}],tO=[{kode:"SØKNAD",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Søknad"},{kode:"SAKSBEHANDLER",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Saksbehandler"},{kode:"TIDLIGERE_VEDTAK",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Vedtak"},{kode:"ANDRE_NAV_VEDTAK",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Vedtak andre ytelser"}],aO=[{kode:"MANGLENDE_OPPLYSNINGER",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Benytt i behandlingen, men har manglende opplysninger"},{kode:"SØKER_ER_I_PERMISJON",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Søker er i permisjon"},{kode:"INNTEKT_IKKE_MED_I_BG",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Benytt i behandlingen. Inntekten er ikke med i beregningsgrunnlaget"},{kode:"IKKE_BRUK",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Ikke bruk"},{kode:"NYTT_ARBEIDSFORHOLD",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Arbeidsforholdet er ansett som nytt"},{kode:"BRUK_MED_OVERSTYRTE_PERIODER",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Bruk arbeidsforholdet med overstyrt periode"},{kode:"BENYTT_A_INNTEKT_I_BG",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Benytt i behandlingen. Inntekt fra A-inntekt benyttes i beregningsgrunnlaget"},{kode:"SØKER_ER_IKKE_I_PERMISJON",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Søker er ikke i permisjon"},{kode:"LAGT_TIL_AV_SAKSBEHANDLER",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Arbeidsforholdet er lagt til av saksbehandler beregningsgrunnlaget"},{kode:"SLÅTT_SAMMEN_MED_ANNET",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Arbeidsforholdet er slått sammen med annet"}],iO=[{kode:"FISKER",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Fisker"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_FISKER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende - fisker"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende"},{kode:"SJØMANN",kodeverk:"ARBEIDSKATEGORI",navn:"Arbeidstaker - sjømann"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og frilanser"},{kode:"ARBEIDSTAKER",kodeverk:"ARBEIDSKATEGORI",navn:"Arbeidstaker"},{kode:"DAGPENGER",kodeverk:"ARBEIDSKATEGORI",navn:"Tilstøtende ytelse - dagpenger"},{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende - jordbruker"},{kode:"JORDBRUKER",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Jordbruker"},{kode:"DAGMAMMA",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Dagmamma"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og dagpenger"},{kode:"FRILANSER",kodeverk:"ARBEIDSKATEGORI",navn:"Frilanser"},{kode:"INAKTIV",kodeverk:"ARBEIDSKATEGORI",navn:"Inaktiv"},{kode:"UGYLDIG",kodeverk:"ARBEIDSKATEGORI",navn:"Ugyldig"}],sO=[{kode:"CAF",kodeverk:"LANDKODER",navn:"SENTRALAFRIKA. REP."},{kode:"ARG",kodeverk:"LANDKODER",navn:"ARGENTINA"},{kode:"IOT",kodeverk:"LANDKODER",navn:"BRITISK-INDISKE HAV"},{kode:"CCK",kodeverk:"LANDKODER",navn:"KOKOSØYENE"},{kode:"MEX",kodeverk:"LANDKODER",navn:"MEXICO"},{kode:"CHN",kodeverk:"LANDKODER",navn:"REPUBLIKKEN KINA"},{kode:"RUS",kodeverk:"LANDKODER",navn:"RUSSLAND"},{kode:"BHS",kodeverk:"LANDKODER",navn:"BAHAMAS"},{kode:"SYC",kodeverk:"LANDKODER",navn:"SEYCHELLENE"},{kode:"CYP",kodeverk:"LANDKODER",navn:"KYPROS"},{kode:"AUT",kodeverk:"LANDKODER",navn:"ØSTERRIKE"},{kode:"QAT",kodeverk:"LANDKODER",navn:"QATAR"},{kode:"VNM",kodeverk:"LANDKODER",navn:"VIETNAM"},{kode:"HMD",kodeverk:"LANDKODER",navn:"HEARD OG MCDONALD ØYENE"},{kode:"KEN",kodeverk:"LANDKODER",navn:"KENYA"},{kode:"ASM",kodeverk:"LANDKODER",navn:"AM. SAMOA"},{kode:"PAK",kodeverk:"LANDKODER",navn:"PAKISTAN"},{kode:"ATG",kodeverk:"LANDKODER",navn:"ANTIGUA OG BARBUDA"},{kode:"TZA",kodeverk:"LANDKODER",navn:"TANZANIA"},{kode:"ZAF",kodeverk:"LANDKODER",navn:"SØR-AFRIKA"},{kode:"CMR",kodeverk:"LANDKODER",navn:"KAMERUN"},{kode:"MLI",kodeverk:"LANDKODER",navn:"MALI"},{kode:"SLV",kodeverk:"LANDKODER",navn:"EL SALVADOR"},{kode:"MAF",kodeverk:"LANDKODER",navn:"SAINT MARTIN"},{kode:"KGZ",kodeverk:"LANDKODER",navn:"KIRGISISTAN"},{kode:"FJI",kodeverk:"LANDKODER",navn:"FIJI"},{kode:"RWA",kodeverk:"LANDKODER",navn:"RWANDA"},{kode:"GEO",kodeverk:"LANDKODER",navn:"GEORGIA"},{kode:"REU",kodeverk:"LANDKODER",navn:"REUNION"},{kode:"MTQ",kodeverk:"LANDKODER",navn:"MARTINIQUE"},{kode:"SDN",kodeverk:"LANDKODER",navn:"SUDAN"},{kode:"AND",kodeverk:"LANDKODER",navn:"ANDORRA"},{kode:"COK",kodeverk:"LANDKODER",navn:"COOKØYENE"},{kode:"SHN",kodeverk:"LANDKODER",navn:"ST. HELENA"},{kode:"COL",kodeverk:"LANDKODER",navn:"COLOMBIA"},{kode:"PER",kodeverk:"LANDKODER",navn:"PERU"},{kode:"STP",kodeverk:"LANDKODER",navn:"SAO TOME OG PRINCIPE"},{kode:"COM",kodeverk:"LANDKODER",navn:"KOMORENE"},{kode:"LUX",kodeverk:"LANDKODER",navn:"LUXEMBOURG"},{kode:"PNG",kodeverk:"LANDKODER",navn:"PAPUA NY-GUINEA"},{kode:"MKD",kodeverk:"LANDKODER",navn:"MAKEDONIA"},{kode:"GIN",kodeverk:"LANDKODER",navn:"GUINEA"},{kode:"CYM",kodeverk:"LANDKODER",navn:"CAYMANØYENE"},{kode:"VGB",kodeverk:"LANDKODER",navn:"JOMFRUØYENE BRIT."},{kode:"IRL",kodeverk:"LANDKODER",navn:"IRLAND"},{kode:"XXX",kodeverk:"LANDKODER",navn:"STATSLØS"},{kode:"HTI",kodeverk:"LANDKODER",navn:"HAITI"},{kode:"LBN",kodeverk:"LANDKODER",navn:"LIBANON"},{kode:"BRN",kodeverk:"LANDKODER",navn:"BRUNEI"},{kode:"GMB",kodeverk:"LANDKODER",navn:"GAMBIA"},{kode:"MLT",kodeverk:"LANDKODER",navn:"MALTA"},{kode:"CRI",kodeverk:"LANDKODER",navn:"COSTA RICA"},{kode:"UZB",kodeverk:"LANDKODER",navn:"UZBEKISTAN"},{kode:"CXR",kodeverk:"LANDKODER",navn:"CHRISTMASØYA"},{kode:"TUR",kodeverk:"LANDKODER",navn:"TYRKIA"},{kode:"UKR",kodeverk:"LANDKODER",navn:"UKRAINA"},{kode:"SUN",kodeverk:"LANDKODER",navn:"SOVJETUNIONEN"},{kode:"PYF",kodeverk:"LANDKODER",navn:"FRANSK POLYNESIA"},{kode:"MNE",kodeverk:"LANDKODER",navn:"MONTENEGRO"},{kode:"BIH",kodeverk:"LANDKODER",navn:"BOSNIA-HERCEGOVINA"},{kode:"PAN",kodeverk:"LANDKODER",navn:"PANAMA"},{kode:"SJM",kodeverk:"LANDKODER",navn:"SVALBARD OG JAN MAYEN"},{kode:"NIU",kodeverk:"LANDKODER",navn:"NIUE"},{kode:"SUR",kodeverk:"LANDKODER",navn:"SURINAM"},{kode:"MUS",kodeverk:"LANDKODER",navn:"MAURITIUS"},{kode:"CHE",kodeverk:"LANDKODER",navn:"SVEITS"},{kode:"BEL",kodeverk:"LANDKODER",navn:"BELGIA"},{kode:"TTO",kodeverk:"LANDKODER",navn:"TRINIDAD OG TOBAGO"},{kode:"SWZ",kodeverk:"LANDKODER",navn:"SWAZILAND"},{kode:"TUN",kodeverk:"LANDKODER",navn:"TUNISIA"},{kode:"GLP",kodeverk:"LANDKODER",navn:"GUADELOUPE"},{kode:"KWT",kodeverk:"LANDKODER",navn:"KUWAIT"},{kode:"DMA",kodeverk:"LANDKODER",navn:"DOMINICA"},{kode:"BGR",kodeverk:"LANDKODER",navn:"BULGARIA"},{kode:"ISL",kodeverk:"LANDKODER",navn:"ISLAND"},{kode:"SVN",kodeverk:"LANDKODER",navn:"SLOVENIA"},{kode:"PLW",kodeverk:"LANDKODER",navn:"PALAU"},{kode:"GBR",kodeverk:"LANDKODER",navn:"STORBRITANNIA"},{kode:"NAM",kodeverk:"LANDKODER",navn:"NAMIBIA"},{kode:"FSM",kodeverk:"LANDKODER",navn:"MIKRONESIAFØD."},{kode:"GNB",kodeverk:"LANDKODER",navn:"GUINEA-BISSAU"},{kode:"UMI",kodeverk:"LANDKODER",navn:"MINDRE STILLEHAVSØYER"},{kode:"MDA",kodeverk:"LANDKODER",navn:"MOLDOVA"},{kode:"MMR",kodeverk:"LANDKODER",navn:"MYANMAR (BURMA)"},{kode:"MOZ",kodeverk:"LANDKODER",navn:"MOSAMBIK"},{kode:"SGS",kodeverk:"LANDKODER",navn:"SØR-GEORGIA OG SØR-SANDWICHØYE"},{kode:"NPL",kodeverk:"LANDKODER",navn:"NEPAL"},{kode:"BES",kodeverk:"LANDKODER",navn:"BONAIRE, SINT EUSTATIUS, SABA"},{kode:"LBR",kodeverk:"LANDKODER",navn:"LIBERIA"},{kode:"MDG",kodeverk:"LANDKODER",navn:"MADAGASKAR"},{kode:"VIR",kodeverk:"LANDKODER",navn:"JOMFRUØYENE AM."},{kode:"ARE",kodeverk:"LANDKODER",navn:"DE ARABISKE EMIRATER"},{kode:"USA",kodeverk:"LANDKODER",navn:"USA"},{kode:"NFK",kodeverk:"LANDKODER",navn:"NORFOLKØYA"},{kode:"HKG",kodeverk:"LANDKODER",navn:"HONGKONG"},{kode:"DEU",kodeverk:"LANDKODER",navn:"TYSKLAND"},{kode:"LIE",kodeverk:"LANDKODER",navn:"LIECHTENSTEIN"},{kode:"ECU",kodeverk:"LANDKODER",navn:"ECUADOR"},{kode:"POL",kodeverk:"LANDKODER",navn:"POLEN"},{kode:"PRK",kodeverk:"LANDKODER",navn:"NORD-KOREA"},{kode:"GGY",kodeverk:"LANDKODER",navn:"GUERNSEY"},{kode:"NZL",kodeverk:"LANDKODER",navn:"NEW ZEALAND"},{kode:"MAR",kodeverk:"LANDKODER",navn:"MAROKKO"},{kode:"BWA",kodeverk:"LANDKODER",navn:"BOTSWANA"},{kode:"GUM",kodeverk:"LANDKODER",navn:"GUAM"},{kode:"YUG",kodeverk:"LANDKODER",navn:"JUGOSLAVIA"},{kode:"SEN",kodeverk:"LANDKODER",navn:"SENEGAL"},{kode:"MWI",kodeverk:"LANDKODER",navn:"MALAWI"},{kode:"TKM",kodeverk:"LANDKODER",navn:"TURKMENISTAN"},{kode:"GAB",kodeverk:"LANDKODER",navn:"GABON"},{kode:"FIN",kodeverk:"LANDKODER",navn:"FINLAND"},{kode:"PRY",kodeverk:"LANDKODER",navn:"PARAGUAY"},{kode:"PSE",kodeverk:"LANDKODER",navn:"DET PALESTINSKE OMRÅDET"},{kode:"FRA",kodeverk:"LANDKODER",navn:"FRANKRIKE"},{kode:"ZWE",kodeverk:"LANDKODER",navn:"ZIMBABWE"},{kode:"AZE",kodeverk:"LANDKODER",navn:"AZERBAJDZJAN"},{kode:"SXM",kodeverk:"LANDKODER",navn:"SINT MAARTEN"},{kode:"NIC",kodeverk:"LANDKODER",navn:"NICARAGUA"},{kode:"CAN",kodeverk:"LANDKODER",navn:"CANADA"},{kode:"COG",kodeverk:"LANDKODER",navn:"KONGO, REPUBLIKKEN"},{kode:"JPN",kodeverk:"LANDKODER",navn:"JAPAN"},{kode:"KOR",kodeverk:"LANDKODER",navn:"SØR-KOREA"},{kode:"HUN",kodeverk:"LANDKODER",navn:"UNGARN"},{kode:"YEM",kodeverk:"LANDKODER",navn:"JEMEN"},{kode:"CHL",kodeverk:"LANDKODER",navn:"CHILE"},{kode:"BRB",kodeverk:"LANDKODER",navn:"BARBADOS"},{kode:"DNK",kodeverk:"LANDKODER",navn:"DANMARK"},{kode:"NRU",kodeverk:"LANDKODER",navn:"NAURU"},{kode:"VCT",kodeverk:"LANDKODER",navn:"ST. VINCENT"},{kode:"BEN",kodeverk:"LANDKODER",navn:"BENIN"},{kode:"SMR",kodeverk:"LANDKODER",navn:"SAN MARINO"},{kode:"TCD",kodeverk:"LANDKODER",navn:"TSJAD"},{kode:"CUW",kodeverk:"LANDKODER",navn:"CURACAO"},{kode:"IRN",kodeverk:"LANDKODER",navn:"IRAN"},{kode:"SWE",kodeverk:"LANDKODER",navn:"SVERIGE"},{kode:"ERI",kodeverk:"LANDKODER",navn:"ERITREA"},{kode:"XUK",kodeverk:"LANDKODER",navn:"UKJENT"},{kode:"MDV",kodeverk:"LANDKODER",navn:"MALDIVENE"},{kode:"CSK",kodeverk:"LANDKODER",navn:"TSJEKKOSLOVAKIA"},{kode:"GRD",kodeverk:"LANDKODER",navn:"GRENADA"},{kode:"HND",kodeverk:"LANDKODER",navn:"HONDURAS"},{kode:"FRO",kodeverk:"LANDKODER",navn:"FÆRØYENE"},{kode:"COD",kodeverk:"LANDKODER",navn:"KONGO, DEN DEMOKR. REPUBL"},{kode:"SRB",kodeverk:"LANDKODER",navn:"SERBIA"},{kode:"AGO",kodeverk:"LANDKODER",navn:"ANGOLA"},{kode:"NCL",kodeverk:"LANDKODER",navn:"NY-KALEDONIA"},{kode:"SCG",kodeverk:"LANDKODER",navn:"SERBIA OG MONTENEGRO"},{kode:"GTM",kodeverk:"LANDKODER",navn:"GUATEMALA"},{kode:"AFG",kodeverk:"LANDKODER",navn:"AFGHANISTAN"},{kode:"JAM",kodeverk:"LANDKODER",navn:"JAMAICA"},{kode:"UGA",kodeverk:"LANDKODER",navn:"UGANDA"},{kode:"IMN",kodeverk:"LANDKODER",navn:"ISLE OF MAN"},{kode:"ISR",kodeverk:"LANDKODER",navn:"ISRAEL"},{kode:"SOM",kodeverk:"LANDKODER",navn:"SOMALIA"},{kode:"MNP",kodeverk:"LANDKODER",navn:"NORD-MARIANENE"},{kode:"XXK",kodeverk:"LANDKODER",navn:"KOSOVO"},{kode:"BLR",kodeverk:"LANDKODER",navn:"HVITERUSSLAND"},{kode:"LSO",kodeverk:"LANDKODER",navn:"LESOTHO"},{kode:"NER",kodeverk:"LANDKODER",navn:"NIGER"},{kode:"IDN",kodeverk:"LANDKODER",navn:"INDONESIA"},{kode:"CZE",kodeverk:"LANDKODER",navn:"DEN TSJEKKISKE REP."},{kode:"URY",kodeverk:"LANDKODER",navn:"URUGUAY"},{kode:"BGD",kodeverk:"LANDKODER",navn:"BANGLADESH"},{kode:"WLF",kodeverk:"LANDKODER",navn:"WALLIS/FUTUNAØYENE"},{kode:"CIV",kodeverk:"LANDKODER",navn:"ELFENBEINSKYSTEN"},{kode:"ABW",kodeverk:"LANDKODER",navn:"ARUBA"},{kode:"SLB",kodeverk:"LANDKODER",navn:"SALOMONØYENE"},{kode:"TWN",kodeverk:"LANDKODER",navn:"TAIWAN"},{kode:"SLE",kodeverk:"LANDKODER",navn:"SIERRA LEONE"},{kode:"BRA",kodeverk:"LANDKODER",navn:"BRASIL"},{kode:"DJI",kodeverk:"LANDKODER",navn:"DJIBOUTI"},{kode:"PRI",kodeverk:"LANDKODER",navn:"PUERTO RICO"},{kode:"PRT",kodeverk:"LANDKODER",navn:"PORTUGAL"},{kode:"ANT",kodeverk:"LANDKODER",navn:"DE NEDERLANDSKE ANTILLENE"},{kode:"THA",kodeverk:"LANDKODER",navn:"THAILAND"},{kode:"TLS",kodeverk:"LANDKODER",navn:"ØST-TIMOR"},{kode:"SPM",kodeverk:"LANDKODER",navn:"ST-PIERRE OG MIQUELON"},{kode:"ALB",kodeverk:"LANDKODER",navn:"ALBANIA"},{kode:"EGY",kodeverk:"LANDKODER",navn:"EGYPT"},{kode:"GRC",kodeverk:"LANDKODER",navn:"HELLAS"},{kode:"BFA",kodeverk:"LANDKODER",navn:"BURKINA FASO"},{kode:"ALA",kodeverk:"LANDKODER",navn:"ÅLAND"},{kode:"BOL",kodeverk:"LANDKODER",navn:"BOLIVIA"},{kode:"DDR",kodeverk:"LANDKODER",navn:"TYSKLAND (ØST)"},{kode:"HRV",kodeverk:"LANDKODER",navn:"KROATIA"},{kode:"AUS",kodeverk:"LANDKODER",navn:"AUSTRALIA"},{kode:"NGA",kodeverk:"LANDKODER",navn:"NIGERIA"},{kode:"LBY",kodeverk:"LANDKODER",navn:"LIBYA"},{kode:"MYT",kodeverk:"LANDKODER",navn:"MAYOTTE"},{kode:"LVA",kodeverk:"LANDKODER",navn:"LATVIA"},{kode:"BTN",kodeverk:"LANDKODER",navn:"BHUTAN"},{kode:"MSR",kodeverk:"LANDKODER",navn:"MONSERRAT"},{kode:"???",kodeverk:"LANDKODER",navn:"UOPPGITT/UKJENT"},{kode:"OMN",kodeverk:"LANDKODER",navn:"OMAN"},{kode:"SVK",kodeverk:"LANDKODER",navn:"SLOVAKIA"},{kode:"TUV",kodeverk:"LANDKODER",navn:"TUVALU"},{kode:"VEN",kodeverk:"LANDKODER",navn:"VENEZUELA"},{kode:"ITA",kodeverk:"LANDKODER",navn:"ITALIA"},{kode:"KHM",kodeverk:"LANDKODER",navn:"KAMBODSJA"},{kode:"ARM",kodeverk:"LANDKODER",navn:"ARMENIA"},{kode:"LCA",kodeverk:"LANDKODER",navn:"ST. LUCIA"},{kode:"GIB",kodeverk:"LANDKODER",navn:"GIBRALTAR"},{kode:"JEY",kodeverk:"LANDKODER",navn:"JERSEY"},{kode:"LAO",kodeverk:"LANDKODER",navn:"LAOS"},{kode:"BHR",kodeverk:"LANDKODER",navn:"BAHRAIN"},{kode:"ESH",kodeverk:"LANDKODER",navn:"VEST-SAHARA"},{kode:"TKL",kodeverk:"LANDKODER",navn:"TOKELAU"},{kode:"MNG",kodeverk:"LANDKODER",navn:"MONGOLIA"},{kode:"BLZ",kodeverk:"LANDKODER",navn:"BELIZE"},{kode:"GUF",kodeverk:"LANDKODER",navn:"FRANSK GUYANA"},{kode:"TCA",kodeverk:"LANDKODER",navn:"TURKS/CAICOSØYENE"},{kode:"WSM",kodeverk:"LANDKODER",navn:"SAMOA"},{kode:"JOR",kodeverk:"LANDKODER",navn:"JORDAN"},{kode:"MRT",kodeverk:"LANDKODER",navn:"MAURITANIA"},{kode:"CUB",kodeverk:"LANDKODER",navn:"CUBA"},{kode:"BDI",kodeverk:"LANDKODER",navn:"BURUNDI"},{kode:"GHA",kodeverk:"LANDKODER",navn:"GHANA"},{kode:"KNA",kodeverk:"LANDKODER",navn:"ST.KITTS OG NEVIS"},{kode:"ETH",kodeverk:"LANDKODER",navn:"ETIOPIA"},{kode:"SSD",kodeverk:"LANDKODER",navn:"SØR-SUDAN"},{kode:"VAT",kodeverk:"LANDKODER",navn:"VATIKANSTATEN"},{kode:"CPV",kodeverk:"LANDKODER",navn:"KAPP VERDE"},{kode:"PCN",kodeverk:"LANDKODER",navn:"PITCAIRN"},{kode:"SGP",kodeverk:"LANDKODER",navn:"SINGAPORE"},{kode:"KAZ",kodeverk:"LANDKODER",navn:"KAZAKHSTAN"},{kode:"MYS",kodeverk:"LANDKODER",navn:"MALAYSIA"},{kode:"PHL",kodeverk:"LANDKODER",navn:"FILIPPINENE"},{kode:"EST",kodeverk:"LANDKODER",navn:"ESTLAND"},{kode:"NOR",kodeverk:"LANDKODER",navn:"NORGE"},{kode:"BMU",kodeverk:"LANDKODER",navn:"BERMUDA"},{kode:"LTU",kodeverk:"LANDKODER",navn:"LITAUEN"},{kode:"MAC",kodeverk:"LANDKODER",navn:"MACAO"},{kode:"TON",kodeverk:"LANDKODER",navn:"TONGA"},{kode:"ROU",kodeverk:"LANDKODER",navn:"ROMANIA"},{kode:"BLM",kodeverk:"LANDKODER",navn:"SAINT BARTHELEMY"},{kode:"SAU",kodeverk:"LANDKODER",navn:"SAUDI-ARABIA"},{kode:"GNQ",kodeverk:"LANDKODER",navn:"EKVATORIAL-GUINEA"},{kode:"TGO",kodeverk:"LANDKODER",navn:"TOGO"},{kode:"ZMB",kodeverk:"LANDKODER",navn:"ZAMBIA"},{kode:"VUT",kodeverk:"LANDKODER",navn:"VANUATU"},{kode:"DZA",kodeverk:"LANDKODER",navn:"ALGERIE"},{kode:"TJK",kodeverk:"LANDKODER",navn:"TADZJIKISTAN"},{kode:"NLD",kodeverk:"LANDKODER",navn:"NEDERLAND"},{kode:"KIR",kodeverk:"LANDKODER",navn:"KIRIBATI"},{kode:"GUY",kodeverk:"LANDKODER",navn:"GUYANA"},{kode:"BVT",kodeverk:"LANDKODER",navn:"BOUVETØYA"},{kode:"IND",kodeverk:"LANDKODER",navn:"INDIA"},{kode:"LKA",kodeverk:"LANDKODER",navn:"SRI LANKA"},{kode:"SYR",kodeverk:"LANDKODER",navn:"SYRIA"},{kode:"ESP",kodeverk:"LANDKODER",navn:"SPANIA"},{kode:"GRL",kodeverk:"LANDKODER",navn:"GRØNLAND"},{kode:"AIA",kodeverk:"LANDKODER",navn:"ANGUILLA"},{kode:"IRQ",kodeverk:"LANDKODER",navn:"IRAK"},{kode:"MCO",kodeverk:"LANDKODER",navn:"MONACO"},{kode:"MHL",kodeverk:"LANDKODER",navn:"MARSHALLØYENE"},{kode:"DOM",kodeverk:"LANDKODER",navn:"DEN DOMINIKANSKE REP"},{kode:"FLK",kodeverk:"LANDKODER",navn:"FALKLANDSØYENE"}],oO=[{kode:"BT-009",kodeverk:"BEHANDLING_TYPE",navn:"Revurdering tilbakekreving"},{kode:"BT-006",kodeverk:"BEHANDLING_TYPE",navn:"Dokumentinnsyn"},{kode:"BT-007",kodeverk:"BEHANDLING_TYPE",navn:"Tilbakekreving"},{kode:"BT-002",kodeverk:"BEHANDLING_TYPE",navn:"Førstegangsbehandling"},{kode:"BT-005",kodeverk:"BEHANDLING_TYPE",navn:"Tilbakebetaling endring"},{kode:"BT-008",kodeverk:"BEHANDLING_TYPE",navn:"Anke"},{kode:"BT-003",kodeverk:"BEHANDLING_TYPE",navn:"Klage"},{kode:"BT-004",kodeverk:"BEHANDLING_TYPE",navn:"Revurdering"}],lO=[{kode:"IKKE_I_AKTIVITET_IKKE_DOKUMENTERT",kodeverk:"AKTIVITETSKRAV_AVKLARING",navn:"Aktiviteten er ikke dokumentert"},{kode:"I_AKTIVITET",kodeverk:"AKTIVITETSKRAV_AVKLARING",navn:"Mor er i aktivitet"},{kode:"IKKE_I_AKTIVITET_DOKUMENTERT",kodeverk:"AKTIVITETSKRAV_AVKLARING",navn:"Mor er ikke i aktivitet"}],uO=[{kode:"INNV",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Innvilget innsyn"},{kode:"AVVIST",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Avslått innsyn"},{kode:"DELV",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Delvis innvilget innsyn"}],dO=[{kode:"AVKLARES",kodeverk:"MEDLEMSKAP_TYPE",navn:"Under avklaring"},{kode:"FORELOPIG",kodeverk:"MEDLEMSKAP_TYPE",navn:"Foreløpig"},{kode:"ENDELIG",kodeverk:"MEDLEMSKAP_TYPE",navn:"Endelig"}],gO=[{kode:"FODSELSDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fødselsdato"},{kode:"TILBAKETREKK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Tilbaketrekk"},{kode:"ER_ANKEFRIST_IKKE_OVERHOLDT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er ankefrist ikke overholdt"},{kode:"FNR",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fødselsnummer"},{kode:"TERMINBEKREFTELSE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Terminbekreftelse"},{kode:"TERMINDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Termindato"},{kode:"ANKE_RESULTAT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Anke resultat"},{kode:"UTTAK_SPLITT_TIDSPERIODE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Resulterende periode ved splitting"},{kode:"UTTAK_TREKKDAGER_FLERBARN_KVOTE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Trekkdager flerbarn kvote"},{kode:"OPPHOLDSRETT_IKKE_EOS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruker har ikke oppholdsrett i EØS"},{kode:"TILRETTELEGGING_SKAL_BRUKES",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Avgjør om tilrettelegging skal brukes"},{kode:"ER_ANKE_IKKE_KONKRET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er anke ikke konkret."},{kode:"BEHANDLING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Behandling"},{kode:"UTTAK_GRADERING_ARBEIDSFORHOLD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Gradering av arbeidsforhold"},{kode:"ANKE_AVVIST_ÅRSAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Årsak til avvist anke"},{kode:"INNTEKT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Inntekt"},{kode:"SOKNADSFRISTVILKARET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Søknadsfristvilkåret"},{kode:"DAGPENGER_INNTEKT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Dagpenger"},{kode:"ARBEIDSFORHOLD_BEKREFTET_TOM_DATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Til og med dato fastsatt av saksbehandler"},{kode:"SOKNADSFRIST",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Søknadsfrist"},{kode:"VILKAR_SOM_ANVENDES",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Vilkår som anvendes"},{kode:"PERIODE_FOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Periode f.o.m."},{kode:"UTTAK_PROSENT_UTBETALING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Utbetalingsgrad"},{kode:"NYTT_REFUSJONSKRAV",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Nytt refusjonskrav"},{kode:"DODSDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Dødsdato"},{kode:"DOKUMENTASJON_FORELIGGER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Dokumentasjon foreligger"},{kode:"LØNNSENDRING_I_PERIODEN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Lønnsendring i beregningsperioden"},{kode:"AVKLART_PERIODE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Avklart periode"},{kode:"SVANGERSKAPSPENGERVILKÅRET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Svangerskapsvilkåret"},{kode:"KLAGE_OMGJØR_ÅRSAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Årsak til omgjøring"},{kode:"AKTIVITET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Aktivitet"},{kode:"UTTAK_STØNADSKONTOTYPE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Stønadskontotype"},{kode:"ALENEOMSORG",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Aleneomsorg"},{kode:"OMSORG",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Omsorg"},{kode:"KONTAKTPERSON",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Kontaktperson"},{kode:"ER_KLAGE_KONKRET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er klagefrist overholdt"},{kode:"TILRETTELEGGING_BEHOV_FOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Tilrettelegging behov FOM"},{kode:"ANNEN_FORELDER_RETT_EØS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Annen forelder har opptjent rett fra land i EØS"},{kode:"AKTIVITETSKRAV_AVKLARING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Avklaring om mor er i aktivitet"},{kode:"FASTSETT_RESULTAT_PERIODEN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fastsett resultat for perioden"},{kode:"FRILANSVIRKSOMHET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Frilansvirksomhet"},{kode:"MANN_ADOPTERER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mann adopterer"},{kode:"ANDEL_ARBEID",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Andel i arbeid"},{kode:"DELVIS_TILRETTELEGGING_FOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Delvis tilrettelegging FOM"},{kode:"OPPTJENINGSVILKARET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Opptjeningsvilkåret"},{kode:"ER_KLAGER_PART",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er klagefrist overholdt"},{kode:"UTTAK_PERIODE_RESULTAT_TYPE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Resultattype for periode"},{kode:"UTLAND",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Utland"},{kode:"BRUK_ANTALL_I_TPS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruk antall fra folkeregisteret"},{kode:"AKTIVITET_PERIODE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Perioden med aktivitet"},{kode:"FASTSETT_ETTERLØNN_SLUTTPAKKE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fastsett søkers månedsinntekt fra etterlønn eller sluttpakke"},{kode:"IKKE_OMSORG_PERIODEN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Perioden Søker har ikke omsorg for barnet"},{kode:"DEKNINGSGRAD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Dekningsgrad"},{kode:"ER_ANKEN_IKKE_SIGNERT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"er anken ikke signert."},{kode:"SYKDOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Sykdom"},{kode:"UTSTEDTDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Utstedtdato"},{kode:"FODSELSVILKARET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fødsel"},{kode:"NAVN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Navn"},{kode:"UTTAK_TREKKDAGER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Trekkdager"},{kode:"PA_KLAGD_BEHANDLINGID",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Påklagd behandlingId"},{kode:"VURDER_ETTERLØNN_SLUTTPAKKE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Har søker inntekt fra etterlønn eller sluttpakke"},{kode:"OPPHOLDSRETT_EOS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruker har oppholdsrett i EØS"},{kode:"RETT_TIL_FORELDREPENGER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Rett til foreldrepenger"},{kode:"INNTEKTSKATEGORI",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Inntektskategori"},{kode:"ADOPTERER_ALENE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Adopterer alene"},{kode:"ARBEIDSFORHOLD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Arbeidsforhold"},{kode:"BRUKER_TVUNGEN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruker er under tvungen forvaltning"},{kode:"DELVIS_REFUSJON_FØR_STARTDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Delvis refusjon som utbetales før startdato for full refusjon"},{kode:"ENDRING_TIDSBEGRENSET_ARBEIDSFORHOLD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Endring tidsbegrenset arbeidsforhold"},{kode:"VURDER_GRADERING_PÅ_ANDEL_UTEN_BG",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Vurder om søker har gradering på en andel uten beregningsgrunnlag"},{kode:"MANDAT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mandat"},{kode:"MOR_MOTTAR_UFØRETRYGD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mor mottar uføretrygd"},{kode:"HEL_TILRETTELEGGING_FOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Hel tilrettelegging FOM"},{kode:"ORGANISASJONSNUMMER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Organisasjonsnummer"},{kode:"UTTAK_GRADERING_AVSLAG_ÅRSAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Årsak avslag gradering"},{kode:"ER_KLAGEN_SIGNERT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er klagefrist overholdt"},{kode:"ER_KLAGEFRIST_OVERHOLDT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er klagefrist overholdt"},{kode:"OMSORGSVILKAR",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Foreldreansvar"},{kode:"PA_ANKET_BEHANDLINGID",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"på anket behandlingsId."},{kode:"SLUTTE_ARBEID_FOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Slutte arbeid FOM"},{kode:"BRUK_ANTALL_I_SOKNAD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruk antall fra søknad"},{kode:"KLAGE_RESULTAT_NFP",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Resultat"},{kode:"FORDELING_FOR_ANDEL",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fordeling for arbeidsforhold"},{kode:"UTTAK_SAMTIDIG_UTTAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Samtidig uttak"},{kode:"ER_SOKER_BOSATT_I_NORGE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er søker bosatt i Norge?"},{kode:"FRILANS_INNTEKT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Frilans inntekt"},{kode:"FASTSETT_VIDERE_BEHANDLING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fastsett videre behandling"},{kode:"BRUK_ANTALL_I_VEDTAKET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruk antall fra vedtaket"},{kode:"OMSORGSOVERTAKELSESDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Omsorgsovertakelsesdato"},{kode:"UTTAK_PERIODE_RESULTAT_ÅRSAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Resultat årsak"},{kode:"ENDRING_NAERING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Endring i næring"},{kode:"FORDELING_FOR_NY_ANDEL",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ny andel med fordeling"},{kode:"BEHANDLENDE_ENHET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Behandlende enhet"},{kode:"BRUTTO_NAERINGSINNTEKT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Brutto næringsinntekt"},{kode:"FORDELING_ETTER_BESTEBEREGNING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fordeling etter besteberegning"},{kode:"STARTDATO_FRA_SOKNAD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Startdato fra søknad"},{kode:"NY_STARTDATO_REFUSJON",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ny startdato for refusjon"},{kode:"OVERSTYRT_VURDERING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Overstyrt vurdering"},{kode:"KLAGE_RESULTAT_KA",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ytelsesvedtak"},{kode:"FARESIGNALER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Faresignaler"},{kode:"NY_AKTIVITET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Det er lagt til ny aktivitet for"},{kode:"MOTTAR_YTELSE_FRILANS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mottar søker ytelse for frilansaktiviteten"},{kode:"NY_REFUSJONSFRIST",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ny refusjonsfrist"},{kode:"OVERSTYRT_BEREGNING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Overstyrt beregning"},{kode:"AVKLARSAKSOPPLYSNINGER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Avklar saksopplysninger"},{kode:"INNTEKT_FRA_ARBEIDSFORHOLD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Inntekt fra arbeidsforhold"},{kode:"SOKERSOPPLYSNINGSPLIKT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Søkers opplysningsplikt"},{kode:"SELVSTENDIG_NAERINGSDRIVENDE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Selvstendig næringsdrivende"},{kode:"GYLDIG_MEDLEM_FOLKETRYGDEN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Gyldig medlem i folketrygden"},{kode:"MOTTATT_DATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mottatt dato"},{kode:"ANTALL_BARN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Antall barn"},{kode:"EKTEFELLES_BARN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ektefelles barn"},{kode:"MILITÆR_ELLER_SIVIL",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Militær- eller siviltjeneste"},{kode:"PERIODE_TOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Periode t.o.m."},{kode:"FORELDREANSVARSVILKARET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Foreldreansvar"},{kode:"STILLINGSPROSENT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Stillingsprosent"},{kode:"ADOPSJONSVILKARET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Adopsjon"},{kode:"ANKE_OMGJØR_ÅRSAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Årsak til omgjøring"},{kode:"INNTEKTSKATEGORI_FOR_ANDEL",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Inntektskategori for andel"},{kode:"KONTROLL_AV_BESTEBEREGNING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Kontroll av besteberegning"},{kode:"MOR_MOTTAR_STØNAD_EØS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mor mottar foreldrepenger fra land i EØS"},{kode:"ER_ANKER_IKKE_PART",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Angir om anker ikke er part i saken."},{kode:"ER_VILKÅRENE_TILBAKEKREVING_OPPFYLT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er vilkårene for tilbakekreving oppfylt"},{kode:"NY_FORDELING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ny fordeling for"},{kode:"ER_SÆRLIGE_GRUNNER_TIL_REDUKSJON",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er det særlige grunner til reduksjon"},{kode:"MOTTAR_YTELSE_ARBEID",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mottar søker ytelse for arbeid i {value}"},{kode:"TYPE_VERGE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Type verge"}],kO=[{kode:"UTPE",kodeverk:"PERSONSTATUS_TYPE",navn:"Utgått person"},{kode:"BOSA",kodeverk:"PERSONSTATUS_TYPE",navn:"Bosatt"},{kode:"DØD",kodeverk:"PERSONSTATUS_TYPE",navn:"Død"},{kode:"FØDR",kodeverk:"PERSONSTATUS_TYPE",navn:"Fødselregistrert"},{kode:"FOSV",kodeverk:"PERSONSTATUS_TYPE",navn:"Forsvunnet/savnet"},{kode:"UREG",kodeverk:"PERSONSTATUS_TYPE",navn:"Uregistrert person"},{kode:"ADNR",kodeverk:"PERSONSTATUS_TYPE",navn:"D-nummer"},{kode:"UTAN",kodeverk:"PERSONSTATUS_TYPE",navn:"Utgått person annullert tilgang Fnr"},{kode:"UTVA",kodeverk:"PERSONSTATUS_TYPE",navn:"Utvandret"}],vO=[{kode:"ENHETSREGISTERET",kodeverk:"FAGSYSTEM",navn:"Enhetsregisteret"},{kode:"INFOTRYGD",kodeverk:"FAGSYSTEM",navn:"Infotrygd"},{kode:"INNTEKT",kodeverk:"FAGSYSTEM",navn:"INNTEKT"},{kode:"ARENA",kodeverk:"FAGSYSTEM",navn:"Arena"},{kode:"GOSYS",kodeverk:"FAGSYSTEM",navn:"Gosys"},{kode:"JOARK",kodeverk:"FAGSYSTEM",navn:"Joark"},{kode:"K9SAK",kodeverk:"FAGSYSTEM",navn:"Vedtaksløsning Folketrygdloven Kapittel 9"},{kode:"FPSAK",kodeverk:"FAGSYSTEM",navn:"Vedtaksløsning Foreldrepenger"},{kode:"AAREGISTERET",kodeverk:"FAGSYSTEM",navn:"AAregisteret"},{kode:"MEDL",kodeverk:"FAGSYSTEM",navn:"MEDL"},{kode:"TPS",kodeverk:"FAGSYSTEM",navn:"TPS"},{kode:"VLSP",kodeverk:"FAGSYSTEM",navn:"Vedtaksløsning Sykepenger"}],EO=[{kode:"ANKE_STADFESTE_YTELSESVEDTAK",kodeverk:"ANKEVURDERING",navn:"Ytelsesvedtaket stadfestes"},{kode:"ANKE_HJEMSENDE_UTEN_OPPHEV",kodeverk:"ANKEVURDERING",navn:"Hjemsende uten å oppheve"},{kode:"ANKE_AVVIS",kodeverk:"ANKEVURDERING",navn:"Anken avvises"},{kode:"ANKE_OMGJOER",kodeverk:"ANKEVURDERING",navn:"Anken omgjøres"},{kode:"ANKE_OPPHEVE_OG_HJEMSENDE",kodeverk:"ANKEVURDERING",navn:"Ytelsesvedtaket oppheves og hjemsendes"}],fO=[{kode:"AVSLU",kodeverk:"BEHANDLING_STATUS",navn:"Avsluttet"},{kode:"IVED",kodeverk:"BEHANDLING_STATUS",navn:"Iverksetter vedtak"},{kode:"UTRED",kodeverk:"BEHANDLING_STATUS",navn:"Behandling utredes"},{kode:"OPPRE",kodeverk:"BEHANDLING_STATUS",navn:"Opprettet"},{kode:"FVED",kodeverk:"BEHANDLING_STATUS",navn:"Fatter vedtak"}],mO=[{kode:"FRILANSER",kodeverk:"VIRKSOMHET_TYPE",navn:"Frilanser"},{kode:"FISKE",kodeverk:"VIRKSOMHET_TYPE",navn:"Fiske"},{kode:"ANNEN",kodeverk:"VIRKSOMHET_TYPE",navn:"Annen næringsvirksomhet"},{kode:"JORDBRUK_SKOGBRUK",kodeverk:"VIRKSOMHET_TYPE",navn:"Jordbruk"},{kode:"DAGMAMMA",kodeverk:"VIRKSOMHET_TYPE",navn:"Dagmamma i eget hjem/familiebarnehage"}],TO=[{kode:"FTL_2_9_2_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, annet ledd, jfr. 1.ledd bokstav a"},{kode:"FTL_2_7_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-7, 3.ledd bokstav a"},{kode:"IHT_AVTALE",kodeverk:"MEDLEMSKAP_DEKNING",navn:"I henhold til avtale"},{kode:"FTL_2_7_b",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-7, 3. ledd bokstav b"},{kode:"FTL_2_9_1_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav a"},{kode:"FTL_2_6",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-6"},{kode:"UNNTATT",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Unntatt"},{kode:"OPPHOR",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Opphør"},{kode:"FTL_2_9_2_c",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, annet ledd, jf. 1. ledd bokstav c"},{kode:"FULL",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Full"},{kode:"FTL_2_9_1_b",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav b"},{kode:"FTL_2_9_1_c",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav c"}],pO=[{kode:"NYTT_ARBEIDSFORHOLD",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforholdet er ansett som nytt"},{kode:"BRUK",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Bruk"},{kode:"SLÅTT_SAMMEN_MED_ANNET",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforholdet er slått sammen med et annet"},{kode:"LAGT_TIL_AV_SAKSBEHANDLER",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforhold lagt til av saksbehandler"},{kode:"BRUK_UTEN_INNTEKTSMELDING",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Bruk, men ikke benytt inntektsmelding"},{kode:"IKKE_BRUK",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Ikke bruk"},{kode:"BASERT_PÅ_INNTEKTSMELDING",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforholdet som ikke ligger i AA-reg er basert på inntektsmelding"},{kode:"BRUK_MED_OVERSTYRT_PERIODE",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Bruk arbeidsforholdet med overstyrt periode"},{kode:"INNTEKT_IKKE_MED_I_BG",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Inntekten til arbeidsforholdet skal ikke være med i beregningsgrunnlaget"}],hO=[{kode:"ARBEID",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeid"},{kode:"FRILANS",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Frilans"},{kode:"ETTERLØNN_SLUTTPAKKE",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Etterlønn eller sluttpakke"},{kode:"SYKEPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Sykepenger"},{kode:"AAP",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeidsavklaringspenger"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Ventelønn eller vartpenger"},{kode:"OMSORGSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Omsorgspenger"},{kode:"UTDANNINGSPERMISJON",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Utdanningspermisjon"},{kode:"FRILOPP",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Frilansoppdrag"},{kode:"OPPLÆRINGSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Opplæringspenger"},{kode:"DAGPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Dagpenger"},{kode:"NÆRING",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Næring"},{kode:"VIDERE_ETTERUTDANNING",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Videre- og etterutdanning"},{kode:"PLEIEPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Pleiepenger"},{kode:"MILITÆR_ELLER_SIVILTJENESTE",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Militær- eller siviltjeneste"},{kode:"FORELDREPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Foreldrepenger"},{kode:"SVANGERSKAPSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Svangerskapspenger"},{kode:"FRISINN",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"FRISINN"},{kode:"UTENLANDSK_ARBEIDSFORHOLD",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeid i utlandet"}],AO=[{kode:"VELFERDSPERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Velferdspermisjon"},{kode:"PERMISJON_MED_FORELDREPENGER",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon med foreldrepenger"},{kode:"ANNEN_PERMISJON_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Andre lovfestede permisjoner"},{kode:"UTDANNINGSPERMISJON_IKKE_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon (Ikke lovfestet)"},{kode:"UTDANNINGSPERMISJON_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon (Lovfestet)"},{kode:"UTDANNINGSPERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon"},{kode:"PERMISJON_VED_MILITÆRTJENESTE",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon ved militærtjeneste"},{kode:"PERMITTERING",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permittering"},{kode:"PERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon"},{kode:"ANNEN_PERMISJON_IKKE_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Andre ikke-lovfestede permisjoner"}],yO=[{kode:"MIDLERTIDIG",kodeverk:"OPPHOLDSTILLATELSE_TYPE",navn:"Midlertidig oppholdstillatelse"},{kode:"PERMANENT",kodeverk:"OPPHOLDSTILLATELSE_TYPE",navn:"Permanent oppholdstillatelse"}],cO=[{kode:"MEDLEM",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Periode med medlemskap"},{kode:"UNNTAK",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Periode med unntak fra medlemskap"},{kode:"IKKE_RELEVANT",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Ikke relevant periode"}],RO=[{kode:"INTROPROG",kodeverk:"MORS_AKTIVITET",navn:"Deltar i introduksjonsprogram for nykomne innvandrere"},{kode:"INNLAGT",kodeverk:"MORS_AKTIVITET",navn:"Er innlagt på institusjon"},{kode:"UFØRE",kodeverk:"MORS_AKTIVITET",navn:"Mor mottar uføretrygd"},{kode:"UTDANNING",kodeverk:"MORS_AKTIVITET",navn:"Tar utdanning på heltid"},{kode:"IKKE_OPPGITT",kodeverk:"MORS_AKTIVITET",navn:"Periode uten oppgitt aktivitetskrav"},{kode:"ARBEID_OG_UTDANNING",kodeverk:"MORS_AKTIVITET",navn:"Er i arbeid og utdanning"},{kode:"TRENGER_HJELP",kodeverk:"MORS_AKTIVITET",navn:"Er avhengig av hjelp til å ta seg av barnet"},{kode:"ARBEID",kodeverk:"MORS_AKTIVITET",navn:"Er i arbeid"},{kode:"KVALPROG",kodeverk:"MORS_AKTIVITET",navn:"Deltar i kvalifiseringsprogrammet"}],_O=[{kode:"KOSTBESPARELSE_HJEM",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostbesparelser i hjemmet"},{kode:"FORSIKRINGER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Skattepliktig del forsikringer"},{kode:"BEDRIFTSBARNEHAGE",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bedriftsbarnehageplass"},{kode:"KOST_DAGER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostpenger dager"},{kode:"KOST_DOEGN",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostpenger døgnsats"},{kode:"YRKESBIL_KILOMETER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Yrkesbil tjenesteligbehov kilometer"},{kode:"RENTEFORDEL_LAAN",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Rentefordel lån"},{kode:"YRKESBIL_LISTEPRIS",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Yrkesbil tjenesteligbehov listepris"},{kode:"BESOEKSREISER_HJEM",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Besøksreiser hjemmet annet"},{kode:"UTENLANDSK_PENSJONSORDNING",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Innbetaling utenlandsk pensjonsordning"},{kode:"ELEKTRISK_KOMMUNIKASJON",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Elektrisk kommunikasjon"},{kode:"BOLIG",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bolig"},{kode:"OPSJONER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Opsjoner"},{kode:"FRI_TRANSPORT",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Fri transport"},{kode:"TILSKUDD_BARNEHAGE",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Tilskudd barnehageplass"},{kode:"AKSJER_UNDERKURS",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Aksjer grunnfondsbevis til underkurs"},{kode:"ANNET",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Annet"},{kode:"BIL",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bil"},{kode:"LOSJI",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Losji"}],bO=[{kode:"MEDMOR",kodeverk:"FORELDRE_TYPE",navn:"Medmor"},{kode:"FAR",kodeverk:"FORELDRE_TYPE",navn:"Far"},{kode:"MOR",kodeverk:"FORELDRE_TYPE",navn:"Mor"},{kode:"ANDRE",kodeverk:"FORELDRE_TYPE",navn:"Andre"}],NO=[{kode:"BOSTEDSADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Bostedsadresse"},{kode:"BOSTEDSADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Bostedsadresse utland"},{kode:"POSTADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Kontaktadresse"},{kode:"POSTADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Kontaktadresse utland"},{kode:"MIDLERTIDIG_POSTADRESSE_NORGE",kodeverk:"ADRESSE_TYPE",navn:"Oppholdsadresse"},{kode:"MIDLERTIDIG_POSTADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Oppholdsadresse utland"},{kode:"UKJENT_ADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Ukjent adresse"}],SO={RelasjonsRolleType:DI,HistorikkinnslagType:PI,UttakUtsettelseType:FI,FagsakYtelseType:MI,StønadskontoType:[{kode:"FELLESPERIODE",kodeverk:"STOENADSKONTOTYPE",navn:"Fellesperiode"},{kode:"FEDREKVOTE",kodeverk:"STOENADSKONTOTYPE",navn:"Fedrekvote"},{kode:"FORELDREPENGER_FØR_FØDSEL",kodeverk:"STOENADSKONTOTYPE",navn:"Foreldrepenger før fødsel"},{kode:"MØDREKVOTE",kodeverk:"STOENADSKONTOTYPE",navn:"Mødrekvote"},{kode:"FLERBARNSDAGER",kodeverk:"STOENADSKONTOTYPE",navn:"Flerbarnsdager"},{kode:"FORELDREPENGER",kodeverk:"STOENADSKONTOTYPE",navn:"Foreldrepenger"}],FagsakStatus:jI,Venteårsak:[{kode:"FOR_TIDLIG_SOKNAD",kodeverk:"VENT_AARSAK",navn:"Venter pga for tidlig søknad"},{kode:"VENT_ØKONOMI",kodeverk:"VENT_AARSAK",navn:"Venter på økonomiløsningen"},{kode:"AVV_RESPONS_REVURDERING",kodeverk:"VENT_AARSAK",navn:"Avventer respons på varsel om revurdering"},{kode:"UTV_FRIST",kodeverk:"VENT_AARSAK",navn:"Utvidet frist"},{kode:"OPPD_ÅPEN_BEH",kodeverk:"VENT_AARSAK",navn:"Venter på oppdatering av åpen behandling"},{kode:"VENT_MANGLENDE_ARBEIDSFORHOLD",kodeverk:"VENT_AARSAK",navn:"Sak settes på vent pga kommune- og fylkesammenslåing. Meld saken i Porten."},{kode:"VENT_OPDT_INNTEKTSMELDING",kodeverk:"VENT_AARSAK",navn:"Venter på inntektsmelding"},{kode:"DELVIS_TILRETTELEGGING_OG_REFUSJON_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"AAP_DP_ENESTE_AKTIVITET_SVP",kodeverk:"VENT_AARSAK",navn:"Bruker har ikke rett til svangerskapspenger når eneste aktivitet er AAP/DP"},{kode:"VENT_BEREGNING_TILBAKE_I_TID",kodeverk:"VENT_AARSAK",navn:"Endring i tilkjent ytelse bakover i tid. Dette håndteres ikke i løsningen enda."},{kode:"VENT_PÅ_KORRIGERT_BESTEBEREGNING",kodeverk:"VENT_AARSAK",navn:"Besteberegningen er feil. Feilen må meldes og korrigeres."},{kode:"VENT_PÅ_SISTE_AAP_MELDEKORT",kodeverk:"VENT_AARSAK",navn:"Venter på siste meldekort for AAP eller dagpenger før første uttaksdag."},{kode:"VENT_MANGLENDE_SYKEMELDING",kodeverk:"VENT_AARSAK",navn:"Venter på siste sykemelding for sykepenger basert på dagpenger"},{kode:"VENT_DØDFØDSEL_80P_DEKNINGSGRAD",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt 80% dekningsgrad med dødfødsel"},{kode:"VENT_INFOTRYGD",kodeverk:"VENT_AARSAK",navn:"Venter på en ytelse i Infotrygd"},{kode:"VENT_PÅ_NY_INNTEKTSMELDING_MED_GYLDIG_ARB_ID",kodeverk:"VENT_AARSAK",navn:"Venter på ny inntektsmelding med arbeidsforholdId som stemmer med Aareg"},{kode:"ANKE_OVERSENDT_TIL_TRYGDERETTEN",kodeverk:"VENT_AARSAK",navn:"Venter på at saken blir behandlet hos Trygderetten"},{kode:"VENTELØNN_ELLER_MILITÆR_MED_FLERE_AKTIVITETER",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt ventelønn og/eller militær i kombinasjon med andre statuser"},{kode:"VENT_TIDLIGERE_BEHANDLING",kodeverk:"VENT_AARSAK",navn:"Venter på iverksettelse av en tidligere behandling i denne saken"},{kode:"VENT_OPPTJENING_OPPLYSNINGER",kodeverk:"VENT_AARSAK",navn:"Venter på opptjeningsopplysninger"},{kode:"FLERE_ARBEIDSFORHOLD_SAMME_ORG_SVP",kodeverk:"VENT_AARSAK",navn:"Håndterer foreløpig ikke flere arbeidsforhold i samme virksomhet for SVP"},{kode:"SCANN",kodeverk:"VENT_AARSAK",navn:"Venter på scanning"},{kode:"VENT_ÅPEN_BEHANDLING",kodeverk:"VENT_AARSAK",navn:"Søker eller den andre forelderen har en åpen behandling"},{kode:"VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt gradering der utbetaling ikke finnes"},{kode:"AVV_DOK",kodeverk:"VENT_AARSAK",navn:"Avventer dokumentasjon"},{kode:"AVV_FODSEL",kodeverk:"VENT_AARSAK",navn:"Avventer fødsel"},{kode:"VENT_MILITÆR_OG_BG_UNDER_3G",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_KABAL",kodeverk:"VENT_AARSAK",navn:"Klage / anke behandles av Klageinstans i egen løsning"},{kode:"VENT_REGISTERINNHENTING",kodeverk:"VENT_AARSAK",navn:"Venter på registerinformasjon"},{kode:"VENT_INNTEKT_RAPPORTERINGSFRIST",kodeverk:"VENT_AARSAK",navn:"Inntekt rapporteringsfrist"},{kode:"FL_SN_IKKE_STOTTET_FOR_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_DEKGRAD_REGEL",kodeverk:"VENT_AARSAK",navn:"Venter på 80% dekningsgrad-regel"},{kode:"VENT_FEIL_ENDRINGSSØKNAD",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av potensielt feil i endringssøknad"},{kode:"VENT_SØKNAD_SENDT_INFORMASJONSBREV",kodeverk:"VENT_AARSAK",navn:"Sendt informasjonsbrev venter søknad."},{kode:"GRADERING_FLERE_ARBEIDSFORHOLD",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER",kodeverk:"VENT_AARSAK",navn:"Venter på merknader fra bruker"},{kode:"AAP_DP_SISTE_10_MND_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"ULIKE_STARTDATOER_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"REFUSJON_3_MÅNEDER",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."}],AnkeVurderingOmgjør:[{kode:"ANKE_TIL_GUNST",kodeverk:"ANKE_VURDERING_OMGJOER",navn:"Gunst omgjør i anke"},{kode:"ANKE_TIL_UGUNST",kodeverk:"ANKE_VURDERING_OMGJOER",navn:"Ugunst omgjør i anke"},{kode:"ANKE_DELVIS_OMGJOERING_TIL_GUNST",kodeverk:"ANKE_VURDERING_OMGJOER",navn:"Delvis omgjøring, til gunst i anke"}],BehandlingÅrsakType:[{kode:"INFOBREV_OPPHOLD",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev opphold"},{kode:"RE-FEFAKTA",kodeverk:"BEHANDLING_AARSAK",navn:"Endrede opplysninger"},{kode:"RE-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger inntekt"},{kode:"RE-SATS-REGULERING",kodeverk:"BEHANDLING_AARSAK",navn:"Regulering grunnbeløp"},{kode:"RE-END-INNTEKTSMELD",kodeverk:"BEHANDLING_AARSAK",navn:"Inntektsmelding"},{kode:"RE-PRSSL",kodeverk:"BEHANDLING_AARSAK",navn:"Prosessuell feil"},{kode:"RE-KLAG-M-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke endret inntekt"},{kode:"RE-KLAG-U-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke uendret inntekt"},{kode:"RE-HENDELSE-FØDSEL",kodeverk:"BEHANDLING_AARSAK",navn:"Fødselsmelding"},{kode:"RE-VEDTAK-PSB",kodeverk:"BEHANDLING_AARSAK",navn:"Pleiepenger"},{kode:"RE-TILST-YT-INNVIL",kodeverk:"BEHANDLING_AARSAK",navn:"Annen ytelse innvilget"},{kode:"RE-YTELSE",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger annen ytelse"},{kode:"RE-FRDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger uttak"},{kode:"RE-SRTB",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger relasjon/barn"},{kode:"RE-FRIST",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger søknadsfrist"},{kode:"RE-MF",kodeverk:"BEHANDLING_AARSAK",navn:"Mangler fødselsregistrering"},{kode:"RE-UTSATT-START",kodeverk:"BEHANDLING_AARSAK",navn:"Senere startdato"},{kode:"RE-OPTJ",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger opptjening"},{kode:"BERØRT-BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Berørt behandling"},{kode:"RE-ANNET",kodeverk:"BEHANDLING_AARSAK",navn:"Annet"},{kode:"RE-REGISTEROPPL",kodeverk:"BEHANDLING_AARSAK",navn:"Nye registeropplysninger"},{kode:"ETTER_KLAGE",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke"},{kode:"RE-HENDELSE-DØDFØD",kodeverk:"BEHANDLING_AARSAK",navn:"Dødfødsel"},{kode:"RE-FØDSEL",kodeverk:"BEHANDLING_AARSAK",navn:"Fødsel"},{kode:"RE-END-FRA-BRUKER",kodeverk:"BEHANDLING_AARSAK",navn:"Søknad"},{kode:"RE-RGLF",kodeverk:"BEHANDLING_AARSAK",navn:"Regelverksforståelse"},{kode:"RE-BER-GRUN",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger beregning"},{kode:"KØET-BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Køet behandling"},{kode:"INFOBREV_PÅMINNELSE",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev påminnelse"},{kode:"RE-LOV",kodeverk:"BEHANDLING_AARSAK",navn:"Lovanvendelse"},{kode:"RE-HENDELSE-UTFLYTTING",kodeverk:"BEHANDLING_AARSAK",navn:"Utflytting"},{kode:"RE-HENDELSE-DØD-F",kodeverk:"BEHANDLING_AARSAK",navn:"Forelder død"},{kode:"RE-HENDELSE-DØD-B",kodeverk:"BEHANDLING_AARSAK",navn:"Barn død"},{kode:"RE-DØD",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger død"},{kode:"RE-TILST-YT-OPPH",kodeverk:"BEHANDLING_AARSAK",navn:"Annen ytelse opphørt"},{kode:"RE-MFIP",kodeverk:"BEHANDLING_AARSAK",navn:"Mangler fødselsreg. u26-29"},{kode:"OPPHØR-NYTT-BARN",kodeverk:"BEHANDLING_AARSAK",navn:"Nytt barn/stønadsperiode"},{kode:"RE-MDL",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger medlemskap"},{kode:"RE-AVAB",kodeverk:"BEHANDLING_AARSAK",navn:"Avvik antall barn"},{kode:"REBEREGN-FERIEPENGER",kodeverk:"BEHANDLING_AARSAK",navn:"Omfordel feriepenger"},{kode:"INFOBREV_BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev uttak"}],GraderingAvslagÅrsak:[{kode:"4501",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16: Ikke gradering pga. for sen søknad",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4504",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 andre ledd: Avslag gradering - gradering før uke 7",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4502",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 femte ledd, jf §21-3: Avslag graderingsavtale mangler - ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16,21-3"}}}'},{kode:"4503",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 fjerde ledd: Avslag gradering – ikke rett til gradert uttak pga. redusert oppfylt aktivitetskrav på mor",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4523",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"Avslag gradering - arbeid 100% eller mer",lovHjemmel:null}],AktivitetStatus:GI,BeregningsgrunnlagAndeltype:BI,RevurderingVarslingÅrsak:[{kode:"JOBBUTLAND",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Arbeid i utlandet"},{kode:"JOBBFULLTID",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Arbeid i stønadsperioden"},{kode:"AKTIVITET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Mors aktivitetskrav er ikke oppfylt"},{kode:"JOBB6MND",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Opptjeningsvilkår ikke oppfylt"},{kode:"BARNIKKEREG",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Barn er ikke registrert i folkeregisteret"},{kode:"UTVANDRET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Bruker er registrert utvandret"},{kode:"IKKEOPPTJENT",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Beregningsgrunnlaget er under 1/2 G"},{kode:"ANNET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Annet"},{kode:"IKKEOPPHOLD",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Ikke lovlig opphold"}],UttakArbeidType:VI,KonsekvensForYtelsen:wI,Inntektskategori:HI,SivilstandType:UI,SkjermlenkeType:qI,FaktaOmBeregningTilfelle:xI,KlageVurdering:YI,HistorikkBegrunnelseType:CI,OppholdÅrsak:[{kode:"UTTAK_FEDREKVOTE_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Fedrekvote"},{kode:"UTTAK_FELLESP_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Fellesperiode"},{kode:"UTTAK_MØDREKVOTE_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Mødrekvote"},{kode:"UTTAK_FORELDREPENGER_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Foreldrepenger"}],UttakPeriodeType:$I,KlageAvvistÅrsak:[{kode:"IKKE_SIGNERT",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klagen er ikke signert",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["31", "33"]},"KA": {"lovreferanser": ["31", "34"]}}}'},{kode:"KLAGET_FOR_SENT",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Bruker har klaget for sent",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["31", "33"]},"KA": {"lovreferanser": ["31", "34"]}}}'},{kode:"KLAGER_IKKE_PART",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klager er ikke part",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["28", "33"]},"KA": {"lovreferanser": ["28", "34"]}}}'},{kode:"IKKE_PAKLAGD_VEDTAK",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Ikke påklagd et vedtak",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["28", "33"]},"KA": {"lovreferanser": ["28", "34"]}}}'},{kode:"IKKE_KONKRET",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klagen er ikke konkret",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["32", "33"]},"KA": {"lovreferanser": ["32", "34"]}}}'},{kode:"KLAGE_UGYLDIG",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klage er ugyldig",lovHjemmel:null}],BehandlingResultatType:JI,VergeType:WI,TilbakekrevingVidereBehandling:zI,OverføringÅrsak:[{kode:"IKKE_RETT_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren har ikke rett på foreldrepenger"},{kode:"SYKDOM_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren er pga sykdom avhengig av hjelp for å ta seg av barnet/barna"},{kode:"INSTITUSJONSOPPHOLD_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren er innlagt i helseinstitusjon"},{kode:"ALENEOMSORG",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Aleneomsorg for barnet/barna"}],FamilieHendelseType:ZI,KlageHjemmel:XI,VilkårType:[{kode:"FP_VK_2_L",kodeverk:"VILKAR_TYPE",navn:"Løpende medlemskapsvilkår"},{kode:"FP_VK_8",kodeverk:"VILKAR_TYPE",navn:"Foreldreansvarsvilkåret 2.ledd"},{kode:"FP_VK_5",kodeverk:"VILKAR_TYPE",navn:"Omsorgsvilkåret"},{kode:"FP_VK_16",kodeverk:"VILKAR_TYPE",navn:"Adopsjonsvilkåret Foreldrepenger"},{kode:"FP_VK_1",kodeverk:"VILKAR_TYPE",navn:"Fødselsvilkår Mor"},{kode:"FP_VK_3",kodeverk:"VILKAR_TYPE",navn:"Søknadsfristvilkåret"},{kode:"FP_VK_33",kodeverk:"VILKAR_TYPE",navn:"Foreldreansvarsvilkåret 4.ledd"},{kode:"FP_VK_11",kodeverk:"VILKAR_TYPE",navn:"Fødselsvilkår for far/medmor"},{kode:"FP_VK_4",kodeverk:"VILKAR_TYPE",navn:"Adopsjonsvilkåret"},{kode:"FP_VK_23",kodeverk:"VILKAR_TYPE",navn:"Opptjeningsvilkåret"},{kode:"FP_VK_21",kodeverk:"VILKAR_TYPE",navn:"Opptjeningsperiode"},{kode:"FP_VK_2",kodeverk:"VILKAR_TYPE",navn:"Medlemskapsvilkåret"},{kode:"SVP_VK_1",kodeverk:"VILKAR_TYPE",navn:"Svangerskapspengervilkåret"},{kode:"FP_VK_34",kodeverk:"VILKAR_TYPE",navn:"Søkers opplysningsplikt"},{kode:"FP_VK_41",kodeverk:"VILKAR_TYPE",navn:"Beregning"}],FarSøkerType:[{kode:"ANDRE_FORELD_DØD_F",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg ifm. død ved fødsel"},{kode:"ANDRE_FORELDER_DØD",kodeverk:"FAR_SOEKER_TYPE",navn:"Den andre forelderen er død"},{kode:"OVERTATT_OMSORG",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg < 56 uker"},{kode:"ADOPTERER_ALENE",kodeverk:"FAR_SOEKER_TYPE",navn:"Adopterer barnet eller barna alene"},{kode:"OVERTATT_OMSORG_F",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg fødsel"}],FaresignalVurdering:QI,ArbeidType:eO,KlageMedholdÅrsak:[{kode:"ULIK_VURDERING",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Ulik skjønnsvurdering"},{kode:"PROSESSUELL_FEIL",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Saksbehandlingsfeil"},{kode:"NYE_OPPLYSNINGER",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Nytt faktum"},{kode:"ULIK_REGELVERKSTOLKNING",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Feil lovanvendelse"}],Region:nO,OppgaveÅrsak:[{kode:"BEH_SAK_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Behandle sak i VL"},{kode:"BEH_SAK_FOR",kodeverk:"OPPGAVE_AARSAK",navn:"Behandle sak i Infotrygd"},{kode:"INNHENT_DOK",kodeverk:"OPPGAVE_AARSAK",navn:"Innhent dokumentasjon"},{kode:"VUR_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Vurder dokument i VL"},{kode:"REG_SOK_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Registrere søknad i VL"},{kode:"SETTVENT_STO",kodeverk:"OPPGAVE_AARSAK",navn:"Sett Arena utbetaling på vent"},{kode:"RV_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Revurdere i VL"},{kode:"VUR_KONS_YTE_FOR",kodeverk:"OPPGAVE_AARSAK",navn:"Vurder konsekvens for ytelse foreldrepenger"},{kode:"GOD_VED_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Godkjenne vedtak i VL"}],OmsorgsovertakelseVilkårType:[{kode:"FP_VK_5",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Omsorgsvilkår §14-17 tredje ledd"},{kode:"FP_VK_8",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Foreldreansvarsvilkåret §14-17 andre ledd"},{kode:"FP_VK_33",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Foreldreansvarsvilkåret §14-17 fjerde ledd"}],HistorikkOpplysningType:rO,FordelingPeriodeKilde:tO,KlageVurderingOmgjør:[{kode:"DELVIS_MEDHOLD_I_KLAGE",kodeverk:"KLAGE_VURDERING_OMGJOER",navn:"Delvis medhold i klage"},{kode:"UGUNST_MEDHOLD_I_KLAGE",kodeverk:"KLAGE_VURDERING_OMGJOER",navn:"Ugunst medhold i klage"},{kode:"GUNST_MEDHOLD_I_KLAGE",kodeverk:"KLAGE_VURDERING_OMGJOER",navn:"Gunst medhold i klage"}],VurderArbeidsforholdHistorikkinnslag:aO,Arbeidskategori:iO,VurderÅrsak:[{kode:"FEIL_LOV",kodeverk:"VURDER_AARSAK",navn:"Regel-/lovanvendelse"},{kode:"FEIL_REGEL",kodeverk:"VURDER_AARSAK",navn:"Feil regelforståelse"},{kode:"ANNET",kodeverk:"VURDER_AARSAK",navn:"Annet"},{kode:"FEIL_FAKTA",kodeverk:"VURDER_AARSAK",navn:"Fakta"},{kode:"SKJØNN",kodeverk:"VURDER_AARSAK",navn:"Skjønn"},{kode:"UTREDNING",kodeverk:"VURDER_AARSAK",navn:"Utredning"}],Landkoder:sO,BehandlingType:oO,KontrollerAktivitetskravAvklaring:lO,InnsynResultatType:uO,MedlemskapType:dO,HistorikkEndretFeltType:gO,PersonstatusType:kO,Fagsystem:vO,AnkeVurdering:EO,UtsettelseÅrsak:[{kode:"ARBEID",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Arbeid"},{kode:"LOVBESTEMT_FERIE",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Lovbestemt ferie"},{kode:"INSTITUSJONSOPPHOLD_SØKER",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Søker er innlagt i helseinstitusjon"},{kode:"NAV_TILTAK",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Tiltak i regi av Nav"},{kode:"HV_OVELSE",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Heimevernet"},{kode:"SYKDOM",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Avhengig av hjelp grunnet sykdom"},{kode:"INSTITUSJONSOPPHOLD_BARNET",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Barn er innlagt i helseinstitusjon"}],BehandlingStatus:fO,VirksomhetType:mO,MedlemskapDekningType:TO,ArbeidsforholdHandlingType:pO,HistorikkAktør:[{kode:"SBH",kodeverk:"HISTORIKK_AKTOER",navn:"Saksbehandler"},{kode:"BESL",kodeverk:"HISTORIKK_AKTOER",navn:"Beslutter"},{kode:"ARBEIDSGIVER",kodeverk:"HISTORIKK_AKTOER",navn:"Arbeidsgiver"},{kode:"VL",kodeverk:"HISTORIKK_AKTOER",navn:"Vedtaksløsningen"},{kode:"SOKER",kodeverk:"HISTORIKK_AKTOER",navn:"Søker"}],Avslagsårsak:{FP_VK_3:[{kode:"1007",kodeverk:"AVSLAGSARSAK",navn:"Søkt for sent",lovHjemmel:null}],FP_VK_4:[{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'},{kode:"1005",kodeverk:"AVSLAGSARSAK",navn:"Ektefelles/samboers barn",lovHjemmel:null},{kode:"1011",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK11", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK16", "lovreferanse": "§ 14-5 2. ledd"}]}]}'},{kode:"1006",kodeverk:"AVSLAGSARSAK",navn:"Mann adopterer ikke alene",lovHjemmel:null},{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1032",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1004",kodeverk:"AVSLAGSARSAK",navn:"Barn over 15 år",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_16_1", "lovreferanse": "14-5"}]}]}'}],FP_VK_1:[{kode:"1002",kodeverk:"AVSLAGSARSAK",navn:"Søker er medmor",lovHjemmel:null},{kode:"1031",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}'},{kode:"1003",kodeverk:"AVSLAGSARSAK",navn:"Søker er far",lovHjemmel:null},{kode:"1032",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1001",kodeverk:"AVSLAGSARSAK",navn:"Søkt for tidlig",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_1", "lovreferanse": "14-5"}]}]}'},{kode:"1026",kodeverk:"AVSLAGSARSAK",navn:"Fødselsdato ikke oppgitt eller registrert",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_1", "lovreferanse": "14-5"}]}]}'}],FP_VK_2:[{kode:"1025",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke bosatt",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1020",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke medlem",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1024",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke oppholdsrett (EØS)",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1023",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke lovlig opphold",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1021",kodeverk:"AVSLAGSARSAK",navn:"Søker er utvandret",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'}],"-":[],FP_VK_41:[{kode:"1041",kodeverk:"AVSLAGSARSAK",navn:"For lavt brutto beregningsgrunnlag",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_41", "lovreferanse": "14-7"}]}]}'}],FP_VK_21:[{kode:"1035",kodeverk:"AVSLAGSARSAK",navn:"Ikke tilstrekkelig opptjening",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_23", "lovreferanse": "14-6"}]}]}'}],FP_VK_11:[{kode:"1027",kodeverk:"AVSLAGSARSAK",navn:"Ingen barn dokumentert på far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_11", "lovreferanse": "14-5"}]}]}'},{kode:"1028",kodeverk:"AVSLAGSARSAK",navn:"Mor fyller ikke vilkåret for sykdom",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_11", "lovreferanse": "14-5"}]}]}'},{kode:"1029",kodeverk:"AVSLAGSARSAK",navn:"Bruker er ikke registrert som far/medmor til barnet",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_11", "lovreferanse": "14-5"}]}]}'}],FP_VK_33:[{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1017",kodeverk:"AVSLAGSARSAK",navn:"Omsorgsovertakelse etter 56 uker",lovHjemmel:null},{kode:"1016",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke barnets far",lovHjemmel:null},{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'},{kode:"1018",kodeverk:"AVSLAGSARSAK",navn:"Ikke foreldreansvar alene etter barnelova",lovHjemmel:null}],FP_VK_34:[{kode:"1019",kodeverk:"AVSLAGSARSAK",navn:"Manglende dokumentasjon",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_34", "lovreferanse": "21-3"}]}]}'}],FP_VK_23:[{kode:"1035",kodeverk:"AVSLAGSARSAK",navn:"Ikke tilstrekkelig opptjening",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_23", "lovreferanse": "14-6"}]}]}'}],FP_VK_8:[{kode:"1014",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke foreldreansvar",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1013",kodeverk:"AVSLAGSARSAK",navn:"Barn ikke under 15 år",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1015",kodeverk:"AVSLAGSARSAK",navn:"Søker har hatt vanlig samvær med barnet",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'}],SVP_VK_1:[{kode:"1065",kodeverk:"AVSLAGSARSAK",navn:"§14-4 andre ledd: Næringsdrivende/frilanser har ikke dokumentert risikofaktorer",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 2. ledd"}]}]}'},{kode:"1062",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Søker har mottatt sykepenger",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'},{kode:"1066",kodeverk:"AVSLAGSARSAK",navn:"§14-4 andre ledd: Næringsdrivende/frilanser har mulighet til å tilrettelegge sitt virke",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 2. ledd"}]}]}'},{kode:"1064",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Arbeidstaker kan omplasseres til annet høvelig arbeid",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'},{kode:"1063",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Arbeidstaker har ikke dokumentert risikofaktorer",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'},{kode:"1061",kodeverk:"AVSLAGSARSAK",navn:"§14-4 tredje ledd: Søker er ikke i arbeid/har ikke tap av pensjonsgivende inntekt",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 3. ledd"}]}]}'},{kode:"1060",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Søker er ikke gravid kvinne",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'}],FP_VK_16:[{kode:"1004",kodeverk:"AVSLAGSARSAK",navn:"Barn over 15 år",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_16_1", "lovreferanse": "14-5"}]}]}'},{kode:"1051",kodeverk:"AVSLAGSARSAK",navn:"Stebarnsadopsjon ikke flere dager igjen",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_16", "lovreferanse": "14-5"}]}]}'}],FP_VK_5:[{kode:"1009",kodeverk:"AVSLAGSARSAK",navn:"Mor ikke død",lovHjemmel:null},{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1032",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1008",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke barnets far",lovHjemmel:null},{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'},{kode:"1011",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK11", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK16", "lovreferanse": "§ 14-5 2. ledd"}]}]}'},{kode:"1012",kodeverk:"AVSLAGSARSAK",navn:"Far har ikke omsorg for barnet",lovHjemmel:null},{kode:"1010",kodeverk:"AVSLAGSARSAK",navn:"Mor ikke død ved fødsel/omsorg",lovHjemmel:null}],FP_VK_2_L:[{kode:"1025",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke bosatt",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1020",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke medlem",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1024",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke oppholdsrett (EØS)",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1023",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke lovlig opphold",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1021",kodeverk:"AVSLAGSARSAK",navn:"Søker er utvandret",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'}],FP_VK_2_F:[{kode:"1025",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke bosatt",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1020",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke medlem",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1024",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke oppholdsrett (EØS)",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1023",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke lovlig opphold",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1021",kodeverk:"AVSLAGSARSAK",navn:"Søker er utvandret",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1052",kodeverk:"AVSLAGSARSAK",navn:"Innflyttet for mindre enn ett år siden",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK_2_F", "lovreferanse": "14-17 5. ledd"}]}]}'}]},OpptjeningAktivitetType:hO,PermisjonsbeskrivelseType:AO,Språkkode:[{kode:"NB",kodeverk:"SPRAAK_KODE",navn:"Norsk"},{kode:"NN",kodeverk:"SPRAAK_KODE",navn:"Nynorsk"},{kode:"EN",kodeverk:"SPRAAK_KODE",navn:"Engelsk"}],AnkeOmgjørÅrsak:[{kode:"PROSESSUELL_FEIL",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Saksbehandlingsfeil"},{kode:"NYE_OPPLYSNINGER",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Nye opplysninger"},{kode:"ULIK_REGELVERKSTOLKNING",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Ulik regelverkstolkning"},{kode:"ULIK_VURDERING",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Ulik skjønnsvurdering"}],OppholdstillatelseType:yO,MedlemskapManuellVurderingType:cO,ManuellBehandlingÅrsak:[{kode:"5006",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker er i arbeid i perioden. Vurder konsekvens for arbeid i perioden."},{kode:"5002",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for uttak av denne stønadskontoen. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5025",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker er ikke registrert med en heltidsstilling i Aa-registeret. Avklar om søker jobber 100 % og dermed har rett til utsettelse"},{kode:"5027",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder fars/medmors rett til uttak på grunn av mors uføretrygd"},{kode:"5024",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Opphold større enn tilgjengelige dager"},{kode:"5031",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder om det skal være utsettelse i perioden"},{kode:"5003",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for overføring av kvote. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5004",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Kontroller mors krav til aktivitet."},{kode:"5029",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Innvilget pleiepenger uten innleggelse, vurder riktig ytelse"},{kode:"5011",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for utsettelse av perioden, avslå utsettelsen, og sett riktig stønadskonto som skal benyttes."},{kode:"5016",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder søknad om overføring av kvote."},{kode:"5009",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker har ikke omsorg for barnet. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5005",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Manglende søkt periode. Fastsett hvilken stønadskonto perioden skal trekkes fra."},{kode:"5014",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder samtidig uttak av foreldrepenger."},{kode:"5007",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Støtte for automatisk behandling av adopsjon er ikke implementert i saksbehandlingsløsningen."},{kode:"5012",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Perioden er uavklart. Vurder trekkdager og sett utbetalingsgrad."},{kode:"5018",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Opphør av foreldrepenger fordi inngangsvilkår ikke oppfylt, avslå stønadsperiode"},{kode:"5026",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder uttak med hensyn på dødsfall"},{kode:"5028",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Innvilget pleiepenger med innleggelse, vurder riktig ytelse"},{kode:"5019",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Stebarnsadopsjon - sjekk uttak med tanke på aktivitetskravet"},{kode:"5010",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"For sent fremsatt søknad. Vurder om uttak i perioden er gyldig."},{kode:"5030",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Far/medmor søker før fødsel/omsorg"},{kode:"5001",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Stønadskonto tom for stønadsdager. Vurder bruk av annen stønadskonto eller avslå perioden."}],MorsAktivitet:RO,NaturalYtelseType:_O,PeriodeResultatÅrsak:[{kode:"2010",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Gyldig utsettelse pga. ferie",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4072",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjuende ledd: Barnet er dødt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-7",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4037",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b: Ikke heltidsarbeid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4085",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Det er ikke samtykke mellom partene",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2035",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd, jf. §14-16: Gradering foreldrepenger, kun far har rett - dager uten aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-16"}}}',sortering:"14-14-3",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4052",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav c: Aktivitetskravet offentlig godkjent utdanning i kombinasjon med arbeid ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4032",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Ferie - selvstendig næringsdrivende/frilanser",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4013",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 første ledd: Mor søker uttak før 12 uker før termin/fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4084",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Annen part har overlappende uttak, det er ikke søkt/innvilget samtidig uttak",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4097",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5: Adopsjonsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4104",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 tredje ledd: Stønadsperiode for nytt barn",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4086",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd og §14-11: Annen part har overlappende uttaksperioder som er innvilget utsettelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10,14-11"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4002",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Ikke stønadsdager igjen på stønadskonto",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2012",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Gyldig utsettelse pga. innleggelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4023",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 femte ledd: Arbeider i uttaksperioden mer enn 0%",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-5",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4031",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Ferie/arbeid innenfor de første 6 ukene",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4112",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Barnets innleggelse første 6 uker ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"2017",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c, jf. §14-14, jf. §14-13: Utsettelse pga. sykdom, skade, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2036",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd: Innvilget foreldrepenger, kun far har rett - dager uten aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14"}}}',sortering:"14-14-3",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4071",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10: Bruker er død",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4098",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5: Foreldreansvarsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4067",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav b, jf §21-3: Aktivitetskrav – utdanning ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4066",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav a, jf §21-3: Aktivitetskrav - arbeid ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2032",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-15, jf. §14-16: Gradering foreldrepenger ved aleneomsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-15,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2026",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse første 6 uker pga. barn innlagt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"2031",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12, jf. §14-16: Gradering av kvote/overført kvote",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4081",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Avslag utsettelse pga ferie tilbake i tid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4053",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav d: Aktivitetskravet mors sykdom/skade ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2007",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10: Innvilget foreldrepenger, kun mor har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"2014",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Gyldig utsettelse pga. sykdom",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4007",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 tredje ledd: Den andre part syk/skadet ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2023",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-15 første ledd: Overføring oppfylt, søker har aleneomsorg for barnet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-15"}}}',sortering:"14-15-1",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4056",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav g: Aktivitetskravet mors deltakelse på kvalifiseringsprogram ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-g",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2016",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b, jf. §14-14, jf. §14-13: Utsettelse pga. 100% arbeid, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-b",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2004",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf. §14-13 : Innvilget foreldrepenger, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13"}}}',sortering:"14-14",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2018",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c, jf. §14-14, jf. §14-13: Utsettelse pga. egen innleggelse på helseinstiusjon, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2024",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4068",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav c, jf §21-3: Aktivitetskrav – arbeid i komb utdanning ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4087",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-2: Opphør medlemskap",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-2"}}}',sortering:"14-02",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4110",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Søkers sykdom/skade første 6 uker ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4115",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §21-3: Søkers sykdom/skade første 6 uker ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4096",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5: Fødselsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4035",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b, jf. §14-14: Bare far har rett, mor fyller ikke aktivitetskravet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4073",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 første ledd: Ikke rett til kvote fordi mor ikke har rett til foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER","FEDREKVOTE"],synligForRolle:["IKKE_MOR"]},{kode:"4069",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav d og femte ledd, jf §21-3: Aktivitetskrav – sykdom/skade ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4062",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b, jf §21-3: Utsettelse arbeid ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4089",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav g, jf §21-3: Aktivitetskrav – KVP ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-g",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4034",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §14-9: Avslag utsettelse - ingen stønadsdager igjen",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-9"}}}',sortering:"14-11-0",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2038",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Samtidig uttak",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4075",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 første ledd: Ikke rett til fellesperiode fordi mor ikke har rett til foreldrepenger",lovHjemmel:"",sortering:"14-09-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4005",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjuende ledd: Ikke sammenhengende perioder",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-7",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2034",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10, jf. §14-16: Gradering foreldrepenger, kun mor har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"2028",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf. 14-13: Bare far rett, aktivitetskravet oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13"}}}',sortering:"14-14",utfallType:"INNVILGET",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4060",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Samtidig uttak - ikke gyldig kombinasjon",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2006",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10: Innvilget foreldrepenger før fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4105",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjette ledd: Far/medmor søker uttak før fødsel/omsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4058",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5 tredje ledd: Unntak for Aktivitetskravet, stebarnsadopsjon - ikke nok dager",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2002",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Innvilget fellesperiode/foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4095",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 første ledd: Mor tar ikke alle 3 ukene før termin",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL"],synligForRolle:["MOR"]},{kode:"4116",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §21-3: Søkers innleggelse første 6 uker ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4092",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Avslag overføring - har ikke aleneomsorg for barnet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4038",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Søkers sykdom/skade ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2022",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Overføring oppfylt, annen part er innlagt i helseinstitusjon",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4008",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 tredje ledd: Den andre part innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4064",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c og tredje ledd, jf §21-3: Utsettelse søkers innleggelse ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4111",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Søkers innleggelse første 6 uker ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4054",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav e: Aktivitetskravet mors innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-e",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2020",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 første ledd: Overføring oppfylt, annen part har ikke rett til foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-09-1",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4077",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 a: Innvilget prematuruker, med fratrekk pleiepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10 a"}}}',sortering:"14-10-0-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2019",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d, jf. §14-14, jf. §14-13: Utsettelse pga. barnets innleggelse på helseinstitusjon, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-d",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2025",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse første 6 uker pga. innleggelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4030",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Avslag utsettelse før termin/fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4050",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav a: Aktivitetskravet arbeid ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2003",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Innvilget uttak av kvote",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4082",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b: Avslag utsettelse pga arbeid tilbake i tid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2013",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d: Gyldig utsettelse pga. barn innlagt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-d",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2027",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse første 6 uker pga. sykdom",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4088",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav f, jf §21-3: Aktivitetskrav – introprogram ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-f",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4063",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c og tredje ledd, jf §21-3: Utsettelse søkers sykdom/skade ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4099",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-6: Opptjeningsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-6"}}}',sortering:"14-06",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2039",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjette ledd: Innvilget første 6 uker etter fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-6",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4103",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjette ledd: Mangler søknad for første 6 uker etter fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4039",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Søkers innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2037",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9, jf. §14-13: Innvilget fellesperiode til far",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4003",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 fjerde ledd: Mor har ikke omsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-4",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4107",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd: Ikke nok dager uten aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14"}}}',sortering:"14-14-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4022",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 tredje ledd: Barnet er over 3 år",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4033",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Ikke lovbestemt ferie",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4059",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 sjette ledd, jf. §14-9 fjerde ledd: Unntak for Aktivitetskravet, flerbarnsfødsel - ikke nok dager",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13, 14-9"}}}',sortering:"14-13-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4025",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-16 første ledd: Avslag gradering - arbeid 100% eller mer",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}',sortering:"14-16-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2021",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Overføring oppfylt, annen part er helt avhengig av hjelp til å ta seg av barnet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4070",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav e og femte ledd, jf §21-3: Aktivitetskrav – innleggelse ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-e",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4074",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 tredje ledd, jf §21-3: Avslag overføring kvote pga. sykdom/skade/innleggelse ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12,21-3"}}}',sortering:"14-12-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2011",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b: Gyldig utsettelse pga. 100% arbeid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-b",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2030",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9, jf. §14-16: Gradering av fellesperiode/foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4065",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d, jf §21-3: Utsettelse barnets innleggelse - ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4057",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd: Unntak for aktivitetskravet, mors mottak av uføretrygd ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14"}}}',sortering:"14-14-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2033",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf. §14-13, jf. §14-16: Gradering foreldrepenger, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13,14-16"}}}',sortering:"14-14",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4076",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 femte ledd: Avslag overføring - annen forelder har rett til foreldrepenger",lovHjemmel:"",sortering:"14-09-5",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4040",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d: Barnets innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4061",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a, jf §21-3: Utsettelse ferie ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4041",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Avslag utsettelse ferie på bevegelig helligdag",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4020",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§22-13 tredje ledd: Brudd på søknadsfrist",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "22-13"}}}',sortering:"22-13-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4106",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 første ledd: Far/medmor søker mer enn 10 dager ifm fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE"],synligForRolle:["IKKE_MOR"]},{kode:"2005",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-15: Innvilget foreldrepenger ved aleneomsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-15"}}}',sortering:"14-15",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4055",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav f: Aktivitetskravet mors deltakelse på introduksjonsprogram ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-f",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4093",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-16: Avslag gradering - søker er ikke i arbeid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}',sortering:"14-16",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4102",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf 14-13: Bare far har rett, mangler søknad uttak/aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13"}}}',sortering:"14-14",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4051",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav b: Aktivitetskravet offentlig godkjent utdanning ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2015",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a, jf. §14-14, jf. §14-13: Utsettelse pga. ferie, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-a",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4100",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 andre ledd: Uttak før omsorgsovertakelse",lovHjemmel:"",sortering:"14-10-2",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4012",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 fjerde ledd: Far/medmor har ikke omsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-4",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["IKKE_MOR"]},{kode:"4117",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §21-3: Barnets innleggelse første 6 uker ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]}],ForeldreType:bO,AdresseType:NO},DO={title:"fakta/fakta-inntektsmelding",component:Po},Ev=e=>M.jsx(Po,{...e}),Us={innsendingstidspunkt:"2024-08-08T00:00:00",kildeSystem:"Altinn",aktiveNaturalytelser:[],refusjonsperioder:[],innsendingsårsak:"NY",arbeidsgiverIdent:"1",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"},Yt=Ev.bind({});Yt.args={alleKodeverk:SO,fagsak:{saksnummer:"123",fagsakYtelseType:"FP"},alleBehandlinger:[{uuid:"UUID1",type:"BT-002",opprettet:"2024-07-13",avsluttet:"2024-08-13"},{uuid:"UUID2",type:"BT-003",opprettet:"2024-07-14",avsluttet:"2024-08-14"},{uuid:"UUID3",type:"BT-004",opprettet:"2024-07-15",avsluttet:"2024-08-15"}],arbeidsgiverOpplysningerPerId:{1:{navn:"Rema 1000"},2:{navn:"Kiwi"},3:{navn:"Meny"}},behandling:{uuid:"UUID2"},inntektsmeldinger:[{...Us,tilknyttedeBehandlingIder:["UUID1"],inntektPrMnd:10000.5,innsendingstidspunkt:"2024-07-20T00:00:00",startDatoPermisjon:"2024-10-10",refusjonPrMnd:void 0,journalpostId:"1",refusjonsperioder:[{refusjonsbeløp:{verdi:5e3},indexKey:"1",fom:"2024-01-10"},{refusjonsbeløp:{verdi:3e3},indexKey:"2",fom:"2024-01-09"}]},{...Us,tilknyttedeBehandlingIder:["UUID1","UUID2"],inntektPrMnd:2e4,innsendingstidspunkt:"2024-08-01T00:00:00",kildeSystem:"FS22",refusjonPrMnd:void 0,arbeidsgiverIdent:"2",journalpostId:"2"},{...Us,tilknyttedeBehandlingIder:[],inntektPrMnd:3e4,innsendingstidspunkt:"2024-09-10T00:00:00",innsendingsårsak:"ENDRING",kildeSystem:"NAV_NO",startDatoPermisjon:"2024-11-11",arbeidsgiverIdent:"3",journalpostId:"3",aktiveNaturalytelser:[{periode:{fomDato:"2024-01-09",tomDato:"2024-10-09"},type:"ELEKTRISK_KOMMUNIKASJON",beloepPerMnd:{verdi:999},indexKey:"1"},{periode:{fomDato:"2024-01-11",tomDato:"2024-10-11"},type:"LOSJI",beloepPerMnd:{verdi:10},indexKey:"2"}]}]};const Ct=Ev.bind({});Ct.args={inntektsmeldinger:[]};var rg,tg,ag;Yt.parameters={...Yt.parameters,docs:{...(rg=Yt.parameters)==null?void 0:rg.docs,source:{originalSource:"props => <InntektsmeldingFaktaIndex {...props} />",...(ag=(tg=Yt.parameters)==null?void 0:tg.docs)==null?void 0:ag.source}}};var ig,sg,og;Ct.parameters={...Ct.parameters,docs:{...(ig=Ct.parameters)==null?void 0:ig.docs,source:{originalSource:"props => <InntektsmeldingFaktaIndex {...props} />",...(og=(sg=Ct.parameters)==null?void 0:sg.docs)==null?void 0:og.source}}};const PO=["InntektsmeldingDefault","IngenInntektsmeldinger"];export{Ct as IngenInntektsmeldinger,Yt as InntektsmeldingDefault,PO as __namedExportsOrder,DO as default};
