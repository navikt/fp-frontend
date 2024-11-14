import{j as M}from"./jsx-runtime-CkxqCPlQ.js";import{r as P,R as Y,c as Ut,g as pk}from"./index-DJO9vBfz.js";import{a as Kr}from"./dayjs.min-Bhlr18jM.js";function hk(e){var i,t,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(i=0;i<s;i++)e[i]&&(t=hk(e[i]))&&(a&&(a+=" "),a+=t)}else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function Oe(){for(var e,i,t=0,a="",s=arguments.length;t<s;t++)(e=arguments[t])&&(i=hk(e))&&(a&&(a+=" "),a+=i);return a}const At=e=>Oe({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var dy=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Ak=P.forwardRef((e,i)=>{var{className:t,size:a="medium",as:s="p",spacing:l,truncate:d,weight:k="regular",align:v,visuallyHidden:T,textColor:f}=e,h=dy(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);return Y.createElement(s,Object.assign({},h,{ref:i,className:Oe(t,"navds-body-long",`navds-body-long--${a}`,At({spacing:l,truncate:d,weight:k,align:v,visuallyHidden:T,textColor:f}))}))});var ky=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Xt=P.forwardRef((e,i)=>{var{className:t,size:a="medium",as:s="p",spacing:l,truncate:d,weight:k="regular",align:v,visuallyHidden:T,textColor:f}=e,h=ky(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);return Y.createElement(s,Object.assign({},h,{ref:i,className:Oe(t,"navds-body-short",`navds-body-short--${a}`,At({spacing:l,truncate:d,weight:k,align:v,visuallyHidden:T,textColor:f}))}))});var gy=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};P.forwardRef((e,i)=>{var{className:t,size:a="medium",spacing:s,uppercase:l,as:d="p",truncate:k,weight:v="regular",align:T,visuallyHidden:f,textColor:h}=e,y=gy(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);return Y.createElement(d,Object.assign({},y,{ref:i,className:Oe(t,"navds-detail",At({spacing:s,truncate:k,weight:v,align:T,visuallyHidden:f,textColor:h,uppercase:l}),{"navds-detail--small":a==="small"})}))});var vy=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Ey=P.forwardRef((e,i)=>{var{className:t,size:a,spacing:s,as:l="p"}=e,d=vy(e,["className","size","spacing","as"]);return Y.createElement(l,Object.assign({},d,{ref:i,className:Oe("navds-error-message","navds-label",t,At({spacing:s}),{"navds-label--small":a==="small"})}))});var fy=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const yk=P.forwardRef((e,i)=>{var{level:t="1",size:a,className:s,as:l,spacing:d,align:k,visuallyHidden:v,textColor:T}=e,f=fy(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const h=l??`h${t}`;return Y.createElement(h,Object.assign({},f,{ref:i,className:Oe(s,"navds-heading",`navds-heading--${a}`,At({spacing:d,align:k,visuallyHidden:v,textColor:T}))}))});var my=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};P.forwardRef((e,i)=>{var{className:t,spacing:a,as:s="p"}=e,l=my(e,["className","spacing","as"]);return Y.createElement(s,Object.assign({},l,{ref:i,className:Oe(t,"navds-ingress",{"navds-typo--spacing":!!a})}))});var Ty=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const So=P.forwardRef((e,i)=>{var{className:t,size:a="medium",as:s="label",spacing:l,visuallyHidden:d,textColor:k}=e,v=Ty(e,["className","size","as","spacing","visuallyHidden","textColor"]);return Y.createElement(s,Object.assign({},v,{ref:i,className:Oe(t,"navds-label",At({spacing:l,visuallyHidden:d,textColor:k}),{"navds-label--small":a==="small"})}))});function Qt(e,i){const t=Object.entries(e).filter(([a])=>!i.includes(a));return Object.fromEntries(t)}const py=globalThis!=null&&globalThis.document?P.useLayoutEffect:()=>{};let Ad=0;function hy(e){const[i,t]=P.useState(e),a=e||i;return P.useEffect(()=>{i==null&&(Ad+=1,t(`aksel-id-${Ad}`))},[i]),a}const yd=Y.useId;function Io(e){var i;return yd!==void 0?yd().replace(/(:)/g,""):(i=hy(e))!==null&&i!==void 0?i:""}function cd(e,i=[]){const t=P.useRef(e);return P.useEffect(()=>{t.current=e}),P.useCallback((...a)=>{var s;return(s=t.current)===null||s===void 0?void 0:s.call(t,...a)},i)}function Ay({value:e,defaultValue:i,onChange:t}){const a=cd(t),[s,l]=P.useState(i),d=e!==void 0,k=d?e:s,v=cd(T=>{const h=typeof T=="function"?T(k):T;d||l(h),a(h)},[d,a,k]);return[k,v]}let Rd=0;function yy(e){const[i,t]=P.useState(e),a=e||i;return P.useEffect(()=>{i==null&&(Rd+=1,t(`aksel-icon-${Rd}`))},[i]),a}const _d=Y.useId;function Ar(e){var i;return _d!==void 0?_d().replace(/(:)/g,""):(i=yy(e))!==null&&i!==void 0?i:""}var cy=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Ry=P.forwardRef((e,i)=>{var{title:t,titleId:a}=e,s=cy(e,["title","titleId"]);let l=Ar();return l=t?a||"title-"+l:void 0,P.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),t?P.createElement("title",{id:l},t):null,P.createElement("path",{fill:"currentColor",d:"M12.75 5a.75.75 0 0 0-1.5 0v12.19l-3.22-3.22a.75.75 0 0 0-1.06 1.06l4.5 4.5a.75.75 0 0 0 1.06 0l4.5-4.5a.75.75 0 1 0-1.06-1.06l-3.22 3.22z"}))});var _y=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const by=P.forwardRef((e,i)=>{var{title:t,titleId:a}=e,s=_y(e,["title","titleId"]);let l=Ar();return l=t?a||"title-"+l:void 0,P.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),t?P.createElement("title",{id:l},t):null,P.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13.672 3.825a.75.75 0 0 1 .791.085l7 5.5a.75.75 0 0 1 0 1.18l-7 5.5a.75.75 0 0 1-1.213-.59v-2.724a9.1 9.1 0 0 0-2.63.565c-2.284.87-3.759 2.562-4.671 4.077a12.4 12.4 0 0 0-.957 1.965 10 10 0 0 0-.263.792l-.001.007A.75.75 0 0 1 3.25 20c0-1.654.322-3.941 1.224-6.123.903-2.184 2.413-4.32 4.823-5.558 1.133-.581 2.445-.954 3.953-1.046V4.5a.75.75 0 0 1 .422-.675M5.505 15.412c1.038-1.344 2.519-2.688 4.582-3.473 1.136-.432 2.435-.689 3.913-.689a.75.75 0 0 1 .75.75v1.957L19.786 10 14.75 6.043V8a.75.75 0 0 1-.75.75c-1.606 0-2.927.344-4.018.904-1.996 1.025-3.306 2.824-4.121 4.796q-.197.479-.356.962",clipRule:"evenodd"}))});var Ny=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Sy=P.forwardRef((e,i)=>{var{title:t,titleId:a}=e,s=Ny(e,["title","titleId"]);let l=Ar();return l=t?a||"title-"+l:void 0,P.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),t?P.createElement("title",{id:l},t):null,P.createElement("path",{fill:"currentColor",d:"M12.53 4.47a.75.75 0 0 0-1.06 0l-4.5 4.5a.75.75 0 0 0 1.06 1.06l3.22-3.22V19a.75.75 0 0 0 1.5 0V6.81l3.22 3.22a.75.75 0 1 0 1.06-1.06z"}))});var Iy=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Oy=P.forwardRef((e,i)=>{var{title:t,titleId:a}=e,s=Iy(e,["title","titleId"]);let l=Ar();return l=t?a||"title-"+l:void 0,P.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),t?P.createElement("title",{id:l},t):null,P.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.47 21.03a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22V9.5a.75.75 0 0 0-1.5 0v9.19l-2.22-2.22a.75.75 0 1 0-1.06 1.06zM4.03 7.53l2.22-2.22v9.19a.75.75 0 0 0 1.5 0V5.31l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06",clipRule:"evenodd"}))});var Ly=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Ky=P.forwardRef((e,i)=>{var{title:t,titleId:a}=e,s=Ly(e,["title","titleId"]);let l=Ar();return l=t?a||"title-"+l:void 0,P.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),t?P.createElement("title",{id:l},t):null,P.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var Dy=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Us=P.forwardRef((e,i)=>{var{title:t,titleId:a}=e,s=Dy(e,["title","titleId"]);let l=Ar();return l=t?a||"title-"+l:void 0,P.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),t?P.createElement("title",{id:l},t):null,P.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.5 12C1.5 6.201 6.201 1.5 12 1.5S22.5 6.201 22.5 12 17.799 22.5 12 22.5 1.5 17.799 1.5 12",clipRule:"evenodd"}))});var Py=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Fy=P.forwardRef((e,i)=>{var{title:t,titleId:a}=e,s=Py(e,["title","titleId"]);let l=Ar();return l=t?a||"title-"+l:void 0,P.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),t?P.createElement("title",{id:l},t):null,P.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.1 2.05a.75.75 0 1 0-1.2.9l.98 1.306a.25.25 0 0 1-.024.327l-.773.773a1.75 1.75 0 0 0-.163 2.288l.98 1.306a.75.75 0 0 0 1.2-.9l-.98-1.306a.25.25 0 0 1 .024-.327l.773-.773a1.75 1.75 0 0 0 .163-2.288zm1.75 5.007a.75.75 0 0 1 .83-.66c1.33.152 2.506.417 3.372.776.431.178.826.396 1.125.666.298.269.573.659.573 1.161q0 .404-.032.8.224-.065.446-.092c.556-.069 1.177.037 1.634.494.553.552.592 1.332.43 1.98-.166.665-.57 1.341-1.137 1.91-.568.567-1.244.97-1.909 1.136q-.241.06-.497.078.401.165.733.358c.657.38 1.332.977 1.332 1.836 0 .695-.45 1.219-.933 1.576-.498.369-1.172.669-1.936.907-1.539.481-3.618.767-5.881.767s-4.342-.286-5.88-.767c-.765-.238-1.439-.538-1.937-.907-.484-.357-.933-.881-.933-1.576 0-.859.675-1.457 1.332-1.836.476-.276 1.068-.512 1.739-.709C5.028 13.38 4.25 11.272 4.25 9c0-.467.238-.838.51-1.102.269-.262.624-.474 1.007-.647.771-.35 1.817-.614 3.004-.784a.75.75 0 0 1 .211 1.485c-1.112.159-2.004.397-2.596.665-.299.135-.482.26-.58.356L5.779 9c.06.066.194.178.462.314.333.168.795.332 1.374.474 1.155.284 2.688.462 4.385.462s3.23-.178 4.385-.462c.579-.142 1.04-.306 1.374-.474.268-.136.402-.248.462-.314l-.049-.048c-.123-.11-.345-.25-.693-.393-.69-.286-1.716-.529-2.969-.672a.75.75 0 0 1-.66-.83m4.623 6.754a9.3 9.3 0 0 0 .925-2.204c.355-.251.693-.379.95-.41.26-.033.36.036.39.066.033.033.129.18.035.555-.09.36-.334.804-.742 1.212-.409.409-.854.653-1.213.743a1.1 1.1 0 0 1-.345.038m-.422-2.983c-.387.16-.829.299-1.308.417-1.296.319-2.953.505-4.743.505s-3.447-.186-4.743-.505a9 9 0 0 1-1.308-.417c.707 3.173 3.21 5.422 6.051 5.422 2.84 0 5.344-2.25 6.051-5.422M12 17.75c1.665 0 3.186-.582 4.43-1.565.976.214 1.736.487 2.237.777.565.326.583.538.583.538 0 .003 0 .031-.04.093-.044.068-.13.163-.284.277-.311.23-.81.468-1.493.682-1.357.424-3.278.698-5.433.698s-4.076-.274-5.433-.698c-.683-.214-1.181-.452-1.493-.682a1.2 1.2 0 0 1-.284-.277c-.04-.062-.04-.09-.04-.093 0 0 .018-.212.583-.538.501-.29 1.262-.563 2.236-.777 1.245.983 2.766 1.565 4.431 1.565",clipRule:"evenodd"}))});var My=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const ck=P.forwardRef((e,i)=>{var{title:t,titleId:a}=e,s=My(e,["title","titleId"]);let l=Ar();return l=t?a||"title-"+l:void 0,P.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),t?P.createElement("title",{id:l},t):null,P.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10.5 3.25a7.25 7.25 0 1 0 4.569 12.88l5.411 5.41a.75.75 0 1 0 1.06-1.06l-5.41-5.411A7.25 7.25 0 0 0 10.5 3.25M4.75 10.5a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0",clipRule:"evenodd"}))});var jy=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Gy=P.forwardRef((e,i)=>{var{title:t,titleId:a}=e,s=jy(e,["title","titleId"]);let l=Ar();return l=t?a||"title-"+l:void 0,P.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":l},s),t?P.createElement("title",{id:l},t):null,P.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});function Oo(e,i,{checkForDefaultPrevented:t=!0}={}){return function(s){if(e==null||e(s),t===!1||!s.defaultPrevented)return i==null?void 0:i(s)}}function Rk(e){return i=>{e.forEach(t=>{typeof t=="function"?t(i):t!=null&&(t.current=i)})}}function _k(...e){return Y.useCallback(Rk(e),e)}function By(e,i){const t=Object.assign({},i);for(const a in i){const s=e[a],l=i[a];/^on[A-Z]/.test(a)?s&&l?t[a]=(...k)=>{l(...k),s(...k)}:s&&(t[a]=s):a==="style"?t[a]=Object.assign(Object.assign({},s),l):a==="className"&&(t[a]=[s,l].filter(Boolean).join(" "))}return Object.assign(Object.assign({},e),t)}var wy=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const ri=P.forwardRef((e,i)=>{var t;const{children:a}=e,s=wy(e,["children"]);if(P.isValidElement(a)){const l=Object.prototype.propertyIsEnumerable.call(a.props,"ref")?a.props.ref:a.ref;return P.cloneElement(a,Object.assign(Object.assign({},By(s,a.props)),{ref:i?Rk([i,l]):l}))}if(P.Children.count(a)>1){const l=new Error("Aksel: Components using 'asChild' expects to recieve a single React element child.");throw l.name="SlotError",(t=Error.captureStackTrace)===null||t===void 0||t.call(Error,l,ri),l}return null}),Vy={global:{showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},Loader:{title:"Venter…"},Modal:{close:"Lukk"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"}},Hy=P.createContext({translations:Vy}),bd=/(\w+)/g;function Uy(e,...i){const t=Array.isArray(e)?e:qy(e);for(const a of i){if(!a)continue;let s=a;for(let l=0;l<t.length;l++){const d=s[t[l]];d!==void 0&&(s=d)}if(typeof s=="string")return s}throw new Error("Error translating key. The keypath does not resolve to a string.")}function qy(e){const i=[];let t=bd.exec(e);for(;t;){const[,a,s]=t;i.push(a||s),t=bd.exec(e)}return i}const xy=/{[^}]*}/g;function ti(e,...i){const a=P.useContext(Hy).translations;return(l,d)=>{const k=Uy(l,...i,...Array.isArray(a)?a.map(v=>v[e]):[a[e]]);return d?k.replace(xy,v=>{const T=v.substring(1,v.length-1);if(d[T]===void 0){const f=JSON.stringify(d);throw new Error(`Error translating key '${l}'. No replacement syntax ({}) found for key '${T}'. The following replacements were passed: '${f}'`)}return d[T]}):k}}var Yy=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Cy=P.forwardRef((e,i)=>{var{className:t,size:a="medium",title:s,transparent:l=!1,variant:d="neutral",id:k}=e,v=Yy(e,["className","size","title","transparent","variant","id"]);const T=Io(),f=ti("Loader");return Y.createElement("svg",Object.assign({"aria-labelledby":k??`loader-${T}`,ref:i,className:Oe("navds-loader",t,`navds-loader--${a}`,`navds-loader--${d}`,{"navds-loader--transparent":l}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid"},Qt(v,["children"])),Y.createElement("title",{id:k??`loader-${T}`},s||f("title")),Y.createElement("circle",{className:"navds-loader__background",xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),Y.createElement("circle",{className:"navds-loader__foreground",cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});var $y=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const bk=P.forwardRef((e,i)=>{var{as:t="button",variant:a="primary",className:s,children:l,size:d="medium",loading:k=!1,disabled:v,style:T,icon:f,iconPosition:h="left"}=e,y=$y(e,["as","variant","className","children","size","loading","disabled","style","icon","iconPosition"]);const K=P.useRef(null),[j,R]=P.useState(),N=_k(K,i);py(()=>{if(k){const L=window.requestAnimationFrame(()=>{var Q,O;R((O=(Q=K==null?void 0:K.current)===null||Q===void 0?void 0:Q.getBoundingClientRect())===null||O===void 0?void 0:O.width)});return()=>{R(void 0),cancelAnimationFrame(L)}}},[k,l]);const D=v??j?Qt(y,["href"]):y,q=L=>{L.key===" "&&!v&&!j&&L.currentTarget.click()};return Y.createElement(t,Object.assign({},t!=="button"?{role:"button"}:{},D,{ref:N,onKeyUp:Oo(D.onKeyUp,q),className:Oe(s,"navds-button",`navds-button--${a}`,`navds-button--${d}`,{"navds-button--loading":j,"navds-button--icon-only":!!f&&!l,"navds-button--disabled":v??j}),style:Object.assign(Object.assign({},T),{width:j}),disabled:v??j?!0:void 0}),j?Y.createElement(Cy,{size:d}):Y.createElement(Y.Fragment,null,f&&h==="left"&&Y.createElement("span",{className:"navds-button__icon"},f),l&&Y.createElement(So,{as:"span",size:d==="medium"?"medium":"small"},l),f&&h==="right"&&Y.createElement("span",{className:"navds-button__icon"},f)))}),Jy=P.createContext(null),Wy=(e,i)=>{var t,a,s;const{size:l,error:d,errorId:k}=e,v=P.useContext(Jy),T=Io(),f=(t=e.id)!==null&&t!==void 0?t:`${i}-${T}`,h=k??`${i}-error-${T}`,y=`${i}-description-${T}`,K=(v==null?void 0:v.disabled)||e.disabled,j=((v==null?void 0:v.readOnly)||e.readOnly)&&!K||void 0,R=!K&&!j&&!!(d||v!=null&&v.error),N=!K&&!j&&!!d&&typeof d!="boolean",D=Object.assign({},R?{"aria-invalid":!0}:{});return e!=null&&e.required,{showErrorMsg:N,hasError:R,errorId:h,inputDescriptionId:y,size:(a=l??(v==null?void 0:v.size))!==null&&a!==void 0?a:"medium",readOnly:j,inputProps:Object.assign(Object.assign({id:f},D),{"aria-describedby":Oe(e["aria-describedby"],{[y]:!!(e!=null&&e.description)&&typeof(e==null?void 0:e.description)=="string",[h]:N,[(s=v==null?void 0:v.errorId)!==null&&s!==void 0?s:""]:R&&!!(v!=null&&v.error)})||void 0,disabled:K})}};function en(e,i,t){return t?typeof t=="string"?{[`--__ac-${e}-${i}-xs`]:t}:Object.fromEntries(Object.entries(t).map(([a,s])=>[`--__ac-${e}-${i}-${a}`,s])):{}}const zy=e=>{switch(e){case"px":return"1px"}return e},Nd=(e,i,t,a,s)=>i.split(" ").map((l,d,k)=>{if(e==="margin-inline"&&l==="full")return`calc((100vw - ${100/k.length}%)/-2)`;if(e==="padding-inline"&&l==="full")return`calc((100vw - ${100/k.length}%)/2)`;if(["mi","mb"].includes(e)&&l==="auto")return"auto";let v=`var(--a-${t}-${l})`;return a.includes(l)&&(v=zy(l)),s?l==="0"?"0":`calc(-1 * ${v})`:v}).join(" ");function Pn(e,i,t,a,s=!1,l=[]){if(!a)return{};if(typeof a=="string")return{[`--__ac-${e}-${i}-xs`]:Nd(i,a,t,l,s)};const d={};return Object.entries(a).forEach(([k,v])=>{d[`--__ac-${e}-${i}-${k}`]=Nd(i,v,t,l,s)}),d}const Nk=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],Sk=({children:e,className:i,padding:t,paddingInline:a,paddingBlock:s,margin:l,marginInline:d,marginBlock:k,width:v,minWidth:T,maxWidth:f,height:h,minHeight:y,maxHeight:K,position:j,inset:R,top:N,right:D,left:q,bottom:L,overflow:Q,overflowX:O,overflowY:V,flexBasis:I,flexGrow:b,flexShrink:$,gridColumn:W})=>{const x=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},Pn("r","p","spacing",t)),Pn("r","pi","spacing",a)),Pn("r","pb","spacing",s)),Pn("r","m","spacing",l)),Pn("r","mi","spacing",d)),Pn("r","mb","spacing",k)),en("r","w",v)),en("r","minw",T)),en("r","maxw",f)),en("r","h",h)),en("r","minh",y)),en("r","maxh",K)),en("r","position",j)),Pn("r","inset","spacing",R)),Pn("r","top","spacing",N)),Pn("r","right","spacing",D)),Pn("r","bottom","spacing",L)),Pn("r","left","spacing",q)),en("r","overflow",Q)),en("r","overflowx",O)),en("r","overflowy",V)),en("r","flex-basis",I)),en("r","flex-grow",b)),en("r","flex-shrink",$)),en("r","grid-column",W));return Y.createElement(ri,{className:Oe({className:i,"navds-r-p":t,"navds-r-pi":a,"navds-r-pb":s,"navds-r-m":l,"navds-r-mi":d,"navds-r-mb":k,"navds-r-w":v,"navds-r-minw":T,"navds-r-maxw":f,"navds-r-h":h,"navds-r-minh":y,"navds-r-maxh":K,"navds-r-position":j,"navds-r-inset":R,"navds-r-top":N,"navds-r-right":D,"navds-r-bottom":L,"navds-r-left":q,"navds-r-overflow":Q,"navds-r-overflowx":O,"navds-r-overflowy":V,"navds-r-flex-basis":I,"navds-r-flex-grow":b,"navds-r-flex-shrink":$,"navds-r-grid-column":W}),style:x},e)};var Zy=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Xy=P.forwardRef((e,i)=>{var{children:t,className:a,as:s="div",columns:l,gap:d,style:k,align:v,asChild:T}=e,f=Zy(e,["children","className","as","columns","gap","style","align","asChild"]);const h=Object.assign(Object.assign(Object.assign(Object.assign({},k),{"--__ac-hgrid-align":v}),Pn("hgrid","gap","spacing",d)),en("hgrid","columns",Qy(l))),y=T?ri:s;return Y.createElement(Sk,Object.assign({},f),Y.createElement(y,Object.assign({},Qt(f,Nk),{ref:i,className:Oe("navds-hgrid",a,{"navds-hgrid-gap":d,"navds-hgrid-align":v}),style:h}),t))});function Qy(e){return e?typeof e=="string"||typeof e=="number"?Sd(e):Object.fromEntries(Object.entries(e).map(([i,t])=>[i,Sd(t)])):{}}const Sd=e=>typeof e=="number"?`repeat(${e}, minmax(0, 1fr))`:e;var ec=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Ik=P.forwardRef((e,i)=>{var{children:t,className:a,as:s="div",align:l,justify:d,wrap:k=!0,gap:v,style:T,direction:f="row",asChild:h}=e,y=ec(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const K=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},T),Pn("stack","gap","spacing",v)),en("stack","direction",f)),en("stack","align",l)),en("stack","justify",d)),j=h?ri:s;return Y.createElement(Sk,Object.assign({},y),Y.createElement(j,Object.assign({},Qt(y,Nk),{ref:i,style:K,className:Oe("navds-stack",a,{"navds-vstack":f==="column","navds-hstack":f==="row","navds-stack-gap":v,"navds-stack-align":l,"navds-stack-justify":d,"navds-stack-direction":f,"navds-stack-wrap":k})}),t))});var nc=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const vt=P.forwardRef((e,i)=>{var{as:t="div"}=e,a=nc(e,["as"]);return Y.createElement(Ik,Object.assign({as:t},a,{ref:i,direction:"row"}))});var rc=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const ft=P.forwardRef((e,i)=>{var{as:t="div"}=e,a=rc(e,["as"]);return Y.createElement(Ik,Object.assign({as:t},a,{ref:i,direction:"column",wrap:!1}))}),eo=P.createContext({listType:"ul",size:"medium"});var tc=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Ok=P.forwardRef((e,i)=>{var{className:t,children:a,title:s,icon:l}=e,d=tc(e,["className","children","title","icon"]);const{listType:k,size:v}=P.useContext(eo);return k==="ol"&&l&&console.warn("<List />: Icon prop is not supported for ordered lists. Please remove the icon prop."),Y.createElement("li",Object.assign({},d,{ref:i,className:Oe("navds-list__item",t)}),k==="ul"&&Y.createElement("div",{className:Oe("navds-list__item-marker",{"navds-list__item-marker--icon":l,"navds-list__item-marker--bullet":!l})},l||Y.createElement("svg",{width:"0.375rem",height:"0.375rem",viewBox:"0 0 6 6",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,focusable:!1,role:"img"},Y.createElement("rect",{width:"6",height:"6",rx:"3",fill:"currentColor"}))),Y.createElement("div",null,s&&Y.createElement(Ak,{as:"p",size:v,weight:"semibold"},s),a))});Ok.displayName="List.Item";var ac=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const ic={small:"xsmall",medium:"small",large:"medium"},no=P.forwardRef((e,i)=>{var{children:t,className:a,as:s="ul",title:l,description:d,headingTag:k="h3",size:v}=e,T=ac(e,["children","className","as","title","description","headingTag","size"]);const{size:f}=P.useContext(eo),h=v??f;return Y.createElement(eo.Provider,{value:{listType:s,size:h}},Y.createElement(Ak,Object.assign({as:"div"},T,{size:h,ref:i,className:Oe("navds-list",`navds-list--${h}`,a)}),l&&Y.createElement(yk,{size:ic[h],as:k},l),d&&Y.createElement(Xt,{size:h},d),Y.createElement(s,{role:"list"},t)))});no.Item=Ok;var sc=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const oc=P.forwardRef((e,i)=>{var{className:t}=e,a=sc(e,["className"]);return Y.createElement("tbody",Object.assign({},a,{ref:i,className:Oe("navds-table__body",t)}))});var lc=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Lk=P.forwardRef((e,i)=>{var{className:t,children:a,align:s,textSize:l}=e,d=lc(e,["className","children","align","textSize"]);return Y.createElement("th",Object.assign({ref:i,className:Oe("navds-table__header-cell","navds-label",t,{[`navds-table__header-cell--align-${s}`]:s,"navds-label--small":l==="small"})},d),a)}),Kk=P.createContext(null);var uc=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const dc=P.forwardRef((e,i)=>{var t,a,s,l,{className:d,children:k,sortable:v=!1,sortKey:T}=e,f=uc(e,["className","children","sortable","sortKey"]);const h=P.useContext(Kk);return v&&!T&&console.warn("ColumnHeader with `sortable=true` must have a sortKey."),Y.createElement(Lk,Object.assign({scope:"col",ref:i,className:d,"aria-sort":v?((t=h==null?void 0:h.sort)===null||t===void 0?void 0:t.orderBy)===T?(a=h==null?void 0:h.sort)===null||a===void 0?void 0:a.direction:"none":void 0},f),v?Y.createElement("button",{type:"button",className:"navds-table__sort-button",onClick:v&&T?()=>{var y;return(y=h==null?void 0:h.onSortChange)===null||y===void 0?void 0:y.call(h,T)}:void 0},k,((s=h==null?void 0:h.sort)===null||s===void 0?void 0:s.orderBy)===T?((l=h==null?void 0:h.sort)===null||l===void 0?void 0:l.direction)==="descending"?Y.createElement(Ry,{"aria-hidden":!0}):Y.createElement(Sy,{"aria-hidden":!0}):Y.createElement(Oy,{"aria-hidden":!0})):k)});var kc=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Dk=P.forwardRef((e,i)=>{var{className:t,children:a="",align:s,textSize:l}=e,d=kc(e,["className","children","align","textSize"]);return Y.createElement(Xt,Object.assign({as:"td",ref:i,className:Oe("navds-table__data-cell",t,{[`navds-table__data-cell--align-${s}`]:s}),size:l},d),a)});var gc=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const vc=globalThis!=null&&globalThis.matchMedia?globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches:!1;function Ec(e){const i=parseFloat(e);return!Number.isNaN(i)&&Number.isFinite(i)}function Id(e){return typeof e=="string"&&e[e.length-1]==="%"&&Ec(e.substring(0,e.length-1))}function qs(e,i){i===0&&(e!=null&&e.style)&&(e.style.display="none")}function fc(e,i){i===0&&(e!=null&&e.style)&&(e.style.display="")}const mc=e=>{var{children:i,className:t,innerClassName:a,duration:s=250,easing:l="ease",height:d}=e,k=gc(e,["children","className","innerClassName","duration","easing","height"]);const v=P.useRef(d),T=P.useRef(null),f=P.useRef(),h=P.useRef(),y=P.useRef(d),K=P.useRef("visible"),j=vc?0:s;typeof y.current=="number"?(typeof d!="string"&&(y.current=d<0?0:d),K.current="hidden"):Id(y.current)&&(y.current=d==="0%"?0:d,K.current="hidden");const[R,N]=P.useState(y.current),[D,q]=P.useState(K.current),[L,Q]=P.useState(!1);P.useEffect(()=>{qs(T.current,y.current)},[]),P.useEffect(()=>{if(d!==v.current&&T.current){fc(T.current,v.current),T.current.style.overflow="hidden";const b=T.current.offsetHeight;T.current.style.overflow="";const $=j;let W,x,te="hidden",le;const J=v.current==="auto";typeof d=="number"?(W=d<0?0:d,x=W):Id(d)?(W=d==="0%"?0:d,x=W):(W=b,x="auto",te=void 0),J&&(x=W,W=b),N(W),q("hidden"),Q(!J),clearTimeout(h.current),clearTimeout(f.current),J?(le=!0,h.current=setTimeout(()=>{N(x),q(te),Q(le)},50),f.current=setTimeout(()=>{Q(!1),qs(T.current,x)},$)):h.current=setTimeout(()=>{N(x),q(te),Q(!1),d!=="auto"&&qs(T.current,W)},$)}return v.current=d,()=>{clearTimeout(h.current),clearTimeout(f.current)}},[d]);const O={height:R,overflow:D};L&&(O.transition=`height ${j}ms ${l} 0ms`,O.WebkitTransition=O.transition);const I=typeof k["aria-hidden"]<"u"?k["aria-hidden"]:d===0;return Y.createElement("div",Object.assign({},k,{className:t,style:O}),Y.createElement("div",{"aria-hidden":I,className:a,ref:T},i))};var Tc=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Pk=P.forwardRef((e,i)=>{var{className:t,selected:a=!1,shadeOnHover:s=!0}=e,l=Tc(e,["className","selected","shadeOnHover"]);return Y.createElement("tr",Object.assign({},l,{ref:i,className:Oe("navds-table__row",t,{"navds-table__row--selected":a,"navds-table__row--shade-on-hover":s})}))});var pc=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const hc=P.forwardRef((e,i)=>{var{className:t,children:a,content:s,togglePlacement:l="left",defaultOpen:d=!1,open:k,onOpenChange:v,expansionDisabled:T=!1,expandOnRowClick:f=!1,colSpan:h=999,onClick:y}=e,K=pc(e,["className","children","content","togglePlacement","defaultOpen","open","onOpenChange","expansionDisabled","expandOnRowClick","colSpan","onClick"]);const[j,R]=Ay({defaultValue:d,value:k,onChange:v}),N=ti("global"),D=Io(),q=Q=>{R(O=>!O),Q.stopPropagation()},L=Q=>{f&&!T&&!Fk(Q.target)&&q(Q)};return Y.createElement(Y.Fragment,null,Y.createElement(Pk,Object.assign({},K,{ref:i,className:Oe("navds-table__expandable-row",t,{"navds-table__expandable-row--open":j,"navds-table__expandable-row--expansion-disabled":T,"navds-table__expandable-row--clickable":f}),onClick:Oo(y,L)}),l==="right"&&a,Y.createElement(Dk,{className:Oe("navds-table__toggle-expand-cell",{"navds-table__toggle-expand-cell--open":j}),onClick:q},!T&&Y.createElement("button",{className:"navds-table__toggle-expand-button",type:"button","aria-controls":D,"aria-expanded":j,onClick:q},Y.createElement(Ky,{className:"navds-table__expandable-icon",title:N(j?"showLess":"showMore")}))),l==="left"&&a),Y.createElement("tr",{className:"navds-table__expanded-row","aria-hidden":!j,id:D},Y.createElement("td",{colSpan:h,className:"navds-table__expanded-row-cell"},Y.createElement(mc,{className:"navds-table__expanded-row-collapse",innerClassName:"navds-table__expanded-row-content",height:j?"auto":0,duration:250},s))))});function Fk(e){return e.nodeName==="TD"||e.nodeName==="TH"||!e.parentElement?!1:["BUTTON","DETAILS","LABEL","SELECT","TEXTAREA","INPUT","A"].includes(e.nodeName)?!0:Fk(e.parentElement)}var Ac=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const yc=P.forwardRef((e,i)=>{var{className:t}=e,a=Ac(e,["className"]);return Y.createElement("thead",Object.assign({},a,{ref:i,className:Oe("navds-table__header",t)}))});var cc=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const Ue=P.forwardRef((e,i)=>{var{className:t,zebraStripes:a=!1,size:s="medium",onSortChange:l,sort:d}=e,k=cc(e,["className","zebraStripes","size","onSortChange","sort"]);return Y.createElement(Kk.Provider,{value:{onSortChange:l,sort:d}},Y.createElement("table",Object.assign({},k,{ref:i,className:Oe("navds-table",`navds-table--${s}`,t,{"navds-table--zebra-stripes":a})})))});Ue.Header=yc;Ue.Body=oc;Ue.Row=Pk;Ue.ColumnHeader=dc;Ue.HeaderCell=Lk;Ue.DataCell=Dk;Ue.ExpandableRow=hc;const Mk=P.createContext(null);var Rc=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const jk=P.forwardRef((e,i)=>{var t,{className:a,children:s,disabled:l,onClick:d}=e,k=Rc(e,["className","children","disabled","onClick"]);const v=ti("Search"),T=P.useContext(Mk);if(T===null)return console.warn("<Search.Button> has to be wrapped in <Search />"),null;const{size:f,variant:h,handleClick:y}=T;return Y.createElement(bk,Object.assign({type:"submit"},k,{ref:i,size:f,variant:h==="secondary"?"secondary":"primary",className:Oe("navds-search__button-search",a),disabled:(t=T==null?void 0:T.disabled)!==null&&t!==void 0?t:l,onClick:Oo(d,y),icon:Y.createElement(ck,Object.assign({},s?{"aria-hidden":!0}:{title:v("search")}))}),s)});var _c=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t};const ro=P.forwardRef((e,i)=>{const{inputProps:t,size:a="medium",inputDescriptionId:s,errorId:l,showErrorMsg:d,hasError:k}=Wy(e,"searchfield"),{className:v,hideLabel:T=!0,label:f,description:h,value:y,clearButtonLabel:K,onClear:j,clearButton:R=!0,children:N,variant:D="primary",defaultValue:q,onChange:L,onSearchClick:Q,htmlSize:O}=e,V=_c(e,["className","hideLabel","label","description","value","clearButtonLabel","onClear","clearButton","children","variant","defaultValue","onChange","onSearchClick","htmlSize"]),I=P.useRef(null),b=_k(I,i),$=ti("Search"),[W,x]=P.useState(q??""),te=H=>{y===void 0&&x(H),L==null||L(H)},le=H=>{var U,Z;j==null||j(H),te(""),(Z=(U=I.current)===null||U===void 0?void 0:U.focus)===null||Z===void 0||Z.call(U)},J=()=>{Q==null||Q(`${y??W}`)};return Y.createElement("div",{onKeyDown:H=>{var U;H.key==="Escape"&&(!((U=I.current)===null||U===void 0)&&U.value&&H.preventDefault(),le({trigger:"Escape",event:H}))},className:Oe(v,"navds-form-field",`navds-form-field--${a}`,"navds-search",{"navds-search--error":k,"navds-search--disabled":t.disabled,"navds-search--with-size":O})},Y.createElement(So,{htmlFor:t.id,size:a,className:Oe("navds-form-field__label",{"navds-sr-only":T})},f),!!h&&Y.createElement(Xt,{className:Oe("navds-form-field__description",{"navds-sr-only":T}),id:s,size:a,as:"div"},h),Y.createElement("div",{className:"navds-search__wrapper"},Y.createElement("div",{className:"navds-search__wrapper-inner"},D==="simple"&&Y.createElement(ck,{"aria-hidden":!0,className:"navds-search__search-icon"}),Y.createElement("input",Object.assign({ref:b},Qt(V,["error","errorId","size","readOnly"]),t,{value:y??W,onChange:H=>te(H.target.value),type:"search",className:Oe(v,"navds-search__input",`navds-search__input--${D}`,"navds-text-field__input","navds-body-short",`navds-body-short--${a}`)},O?{size:Number(O)}:{})),(y??W)&&R&&Y.createElement("button",{type:"button",onClick:H=>le({trigger:"Click",event:H}),className:"navds-search__button-clear"},Y.createElement("span",{className:"navds-sr-only"},K||$("clear")),Y.createElement(Gy,{"aria-hidden":!0}))),Y.createElement(Mk.Provider,{value:{size:a,disabled:t.disabled,variant:D,handleClick:J}},N||D!=="simple"&&Y.createElement(jk,null))),Y.createElement("div",{className:"navds-form-field__error",id:l,"aria-relevant":"additions removals","aria-live":"polite"},d&&Y.createElement(Ey,{size:a},e.error)))});ro.Button=jk;var to=function(e,i){return to=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s])},to(e,i)};function Qn(e,i){if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");to(e,i);function t(){this.constructor=e}e.prototype=i===null?Object.create(i):(t.prototype=i.prototype,new t)}var ee=function(){return ee=Object.assign||function(i){for(var t,a=1,s=arguments.length;a<s;a++){t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(i[l]=t[l])}return i},ee.apply(this,arguments)};function mt(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t}function lr(e,i,t){if(t||arguments.length===2)for(var a=0,s=i.length,l;a<s;a++)(l||!(a in i))&&(l||(l=Array.prototype.slice.call(i,0,a)),l[a]=i[a]);return e.concat(l||Array.prototype.slice.call(i))}var Gk={exports:{}},Ke={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nn=typeof Symbol=="function"&&Symbol.for,Lo=nn?Symbol.for("react.element"):60103,Ko=nn?Symbol.for("react.portal"):60106,ai=nn?Symbol.for("react.fragment"):60107,ii=nn?Symbol.for("react.strict_mode"):60108,si=nn?Symbol.for("react.profiler"):60114,oi=nn?Symbol.for("react.provider"):60109,li=nn?Symbol.for("react.context"):60110,Do=nn?Symbol.for("react.async_mode"):60111,ui=nn?Symbol.for("react.concurrent_mode"):60111,di=nn?Symbol.for("react.forward_ref"):60112,ki=nn?Symbol.for("react.suspense"):60113,bc=nn?Symbol.for("react.suspense_list"):60120,gi=nn?Symbol.for("react.memo"):60115,vi=nn?Symbol.for("react.lazy"):60116,Nc=nn?Symbol.for("react.block"):60121,Sc=nn?Symbol.for("react.fundamental"):60117,Ic=nn?Symbol.for("react.responder"):60118,Oc=nn?Symbol.for("react.scope"):60119;function Fn(e){if(typeof e=="object"&&e!==null){var i=e.$$typeof;switch(i){case Lo:switch(e=e.type,e){case Do:case ui:case ai:case si:case ii:case ki:return e;default:switch(e=e&&e.$$typeof,e){case li:case di:case vi:case gi:case oi:return e;default:return i}}case Ko:return i}}}function Bk(e){return Fn(e)===ui}Ke.AsyncMode=Do;Ke.ConcurrentMode=ui;Ke.ContextConsumer=li;Ke.ContextProvider=oi;Ke.Element=Lo;Ke.ForwardRef=di;Ke.Fragment=ai;Ke.Lazy=vi;Ke.Memo=gi;Ke.Portal=Ko;Ke.Profiler=si;Ke.StrictMode=ii;Ke.Suspense=ki;Ke.isAsyncMode=function(e){return Bk(e)||Fn(e)===Do};Ke.isConcurrentMode=Bk;Ke.isContextConsumer=function(e){return Fn(e)===li};Ke.isContextProvider=function(e){return Fn(e)===oi};Ke.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Lo};Ke.isForwardRef=function(e){return Fn(e)===di};Ke.isFragment=function(e){return Fn(e)===ai};Ke.isLazy=function(e){return Fn(e)===vi};Ke.isMemo=function(e){return Fn(e)===gi};Ke.isPortal=function(e){return Fn(e)===Ko};Ke.isProfiler=function(e){return Fn(e)===si};Ke.isStrictMode=function(e){return Fn(e)===ii};Ke.isSuspense=function(e){return Fn(e)===ki};Ke.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ai||e===ui||e===si||e===ii||e===ki||e===bc||typeof e=="object"&&e!==null&&(e.$$typeof===vi||e.$$typeof===gi||e.$$typeof===oi||e.$$typeof===li||e.$$typeof===di||e.$$typeof===Sc||e.$$typeof===Ic||e.$$typeof===Oc||e.$$typeof===Nc)};Ke.typeOf=Fn;Gk.exports=Ke;var Lc=Gk.exports,wk=Lc,Kc={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Dc={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Vk={};Vk[wk.ForwardRef]=Kc;Vk[wk.Memo]=Dc;function Hk(e,i,t){if(t===void 0&&(t=Error),!e)throw new t(i)}var ye;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(ye||(ye={}));var Be;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(Be||(Be={}));var Tt;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(Tt||(Tt={}));function Od(e){return e.type===Be.literal}function Pc(e){return e.type===Be.argument}function Uk(e){return e.type===Be.number}function qk(e){return e.type===Be.date}function xk(e){return e.type===Be.time}function Yk(e){return e.type===Be.select}function Ck(e){return e.type===Be.plural}function Fc(e){return e.type===Be.pound}function $k(e){return e.type===Be.tag}function Jk(e){return!!(e&&typeof e=="object"&&e.type===Tt.number)}function ao(e){return!!(e&&typeof e=="object"&&e.type===Tt.dateTime)}var Wk=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,Mc=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function jc(e){var i={};return e.replace(Mc,function(t){var a=t.length;switch(t[0]){case"G":i.era=a===4?"long":a===5?"narrow":"short";break;case"y":i.year=a===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":i.month=["numeric","2-digit","short","long","narrow"][a-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":i.day=["numeric","2-digit"][a-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":i.weekday=a===4?"long":a===5?"narrow":"short";break;case"e":if(a<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");i.weekday=["short","long","narrow","short"][a-4];break;case"c":if(a<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");i.weekday=["short","long","narrow","short"][a-4];break;case"a":i.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":i.hourCycle="h12",i.hour=["numeric","2-digit"][a-1];break;case"H":i.hourCycle="h23",i.hour=["numeric","2-digit"][a-1];break;case"K":i.hourCycle="h11",i.hour=["numeric","2-digit"][a-1];break;case"k":i.hourCycle="h24",i.hour=["numeric","2-digit"][a-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":i.minute=["numeric","2-digit"][a-1];break;case"s":i.second=["numeric","2-digit"][a-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":i.timeZoneName=a<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),i}var Gc=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function Bc(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var i=e.split(Gc).filter(function(y){return y.length>0}),t=[],a=0,s=i;a<s.length;a++){var l=s[a],d=l.split("/");if(d.length===0)throw new Error("Invalid number skeleton");for(var k=d[0],v=d.slice(1),T=0,f=v;T<f.length;T++){var h=f[T];if(h.length===0)throw new Error("Invalid number skeleton")}t.push({stem:k,options:v})}return t}function wc(e){return e.replace(/^(.*?)-/,"")}var Ld=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,zk=/^(@+)?(\+|#+)?[rs]?$/g,Vc=/(\*)(0+)|(#+)(0+)|(0+)/g,Zk=/^(0+)$/;function Kd(e){var i={};return e[e.length-1]==="r"?i.roundingPriority="morePrecision":e[e.length-1]==="s"&&(i.roundingPriority="lessPrecision"),e.replace(zk,function(t,a,s){return typeof s!="string"?(i.minimumSignificantDigits=a.length,i.maximumSignificantDigits=a.length):s==="+"?i.minimumSignificantDigits=a.length:a[0]==="#"?i.maximumSignificantDigits=a.length:(i.minimumSignificantDigits=a.length,i.maximumSignificantDigits=a.length+(typeof s=="string"?s.length:0)),""}),i}function Xk(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function Hc(e){var i;if(e[0]==="E"&&e[1]==="E"?(i={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(i={notation:"scientific"},e=e.slice(1)),i){var t=e.slice(0,2);if(t==="+!"?(i.signDisplay="always",e=e.slice(2)):t==="+?"&&(i.signDisplay="exceptZero",e=e.slice(2)),!Zk.test(e))throw new Error("Malformed concise eng/scientific notation");i.minimumIntegerDigits=e.length}return i}function Dd(e){var i={},t=Xk(e);return t||i}function Uc(e){for(var i={},t=0,a=e;t<a.length;t++){var s=a[t];switch(s.stem){case"percent":case"%":i.style="percent";continue;case"%x100":i.style="percent",i.scale=100;continue;case"currency":i.style="currency",i.currency=s.options[0];continue;case"group-off":case",_":i.useGrouping=!1;continue;case"precision-integer":case".":i.maximumFractionDigits=0;continue;case"measure-unit":case"unit":i.style="unit",i.unit=wc(s.options[0]);continue;case"compact-short":case"K":i.notation="compact",i.compactDisplay="short";continue;case"compact-long":case"KK":i.notation="compact",i.compactDisplay="long";continue;case"scientific":i=ee(ee(ee({},i),{notation:"scientific"}),s.options.reduce(function(v,T){return ee(ee({},v),Dd(T))},{}));continue;case"engineering":i=ee(ee(ee({},i),{notation:"engineering"}),s.options.reduce(function(v,T){return ee(ee({},v),Dd(T))},{}));continue;case"notation-simple":i.notation="standard";continue;case"unit-width-narrow":i.currencyDisplay="narrowSymbol",i.unitDisplay="narrow";continue;case"unit-width-short":i.currencyDisplay="code",i.unitDisplay="short";continue;case"unit-width-full-name":i.currencyDisplay="name",i.unitDisplay="long";continue;case"unit-width-iso-code":i.currencyDisplay="symbol";continue;case"scale":i.scale=parseFloat(s.options[0]);continue;case"rounding-mode-floor":i.roundingMode="floor";continue;case"rounding-mode-ceiling":i.roundingMode="ceil";continue;case"rounding-mode-down":i.roundingMode="trunc";continue;case"rounding-mode-up":i.roundingMode="expand";continue;case"rounding-mode-half-even":i.roundingMode="halfEven";continue;case"rounding-mode-half-down":i.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":i.roundingMode="halfExpand";continue;case"integer-width":if(s.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");s.options[0].replace(Vc,function(v,T,f,h,y,K){if(T)i.minimumIntegerDigits=f.length;else{if(h&&y)throw new Error("We currently do not support maximum integer digits");if(K)throw new Error("We currently do not support exact integer digits")}return""});continue}if(Zk.test(s.stem)){i.minimumIntegerDigits=s.stem.length;continue}if(Ld.test(s.stem)){if(s.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");s.stem.replace(Ld,function(v,T,f,h,y,K){return f==="*"?i.minimumFractionDigits=T.length:h&&h[0]==="#"?i.maximumFractionDigits=h.length:y&&K?(i.minimumFractionDigits=y.length,i.maximumFractionDigits=y.length+K.length):(i.minimumFractionDigits=T.length,i.maximumFractionDigits=T.length),""});var l=s.options[0];l==="w"?i=ee(ee({},i),{trailingZeroDisplay:"stripIfInteger"}):l&&(i=ee(ee({},i),Kd(l)));continue}if(zk.test(s.stem)){i=ee(ee({},i),Kd(s.stem));continue}var d=Xk(s.stem);d&&(i=ee(ee({},i),d));var k=Hc(s.stem);k&&(i=ee(ee({},i),k))}return i}var $a={"001":["H","h"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["H","h","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["H","hB","h","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["H","h","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["H","h","hB","hb"],CU:["H","h","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["H","hB","h","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["H","h","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["H","h","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["H","h","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["H","h","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["H","hB","h","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["H","h","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["H","h","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["H","h","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"es-BO":["H","h","hB","hb"],"es-BR":["H","h","hB","hb"],"es-EC":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"es-PE":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function qc(e,i){for(var t="",a=0;a<e.length;a++){var s=e.charAt(a);if(s==="j"){for(var l=0;a+1<e.length&&e.charAt(a+1)===s;)l++,a++;var d=1+(l&1),k=l<2?1:3+(l>>1),v="a",T=xc(i);for((T=="H"||T=="k")&&(k=0);k-- >0;)t+=v;for(;d-- >0;)t=T+t}else s==="J"?t+="H":t+=s}return t}function xc(e){var i=e.hourCycle;if(i===void 0&&e.hourCycles&&e.hourCycles.length&&(i=e.hourCycles[0]),i)switch(i){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var t=e.language,a;t!=="root"&&(a=e.maximize().region);var s=$a[a||""]||$a[t||""]||$a["".concat(t,"-001")]||$a["001"];return s[0]}var xs,Yc=new RegExp("^".concat(Wk.source,"*")),Cc=new RegExp("".concat(Wk.source,"*$"));function Re(e,i){return{start:e,end:i}}var $c=!!String.prototype.startsWith&&"_a".startsWith("a",1),Jc=!!String.fromCodePoint,Wc=!!Object.fromEntries,zc=!!String.prototype.codePointAt,Zc=!!String.prototype.trimStart,Xc=!!String.prototype.trimEnd,Qc=!!Number.isSafeInteger,eR=Qc?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},io=!0;try{var nR=eg("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");io=((xs=nR.exec("a"))===null||xs===void 0?void 0:xs[0])==="a"}catch{io=!1}var Pd=$c?function(i,t,a){return i.startsWith(t,a)}:function(i,t,a){return i.slice(a,a+t.length)===t},so=Jc?String.fromCodePoint:function(){for(var i=[],t=0;t<arguments.length;t++)i[t]=arguments[t];for(var a="",s=i.length,l=0,d;s>l;){if(d=i[l++],d>1114111)throw RangeError(d+" is not a valid code point");a+=d<65536?String.fromCharCode(d):String.fromCharCode(((d-=65536)>>10)+55296,d%1024+56320)}return a},Fd=Wc?Object.fromEntries:function(i){for(var t={},a=0,s=i;a<s.length;a++){var l=s[a],d=l[0],k=l[1];t[d]=k}return t},Qk=zc?function(i,t){return i.codePointAt(t)}:function(i,t){var a=i.length;if(!(t<0||t>=a)){var s=i.charCodeAt(t),l;return s<55296||s>56319||t+1===a||(l=i.charCodeAt(t+1))<56320||l>57343?s:(s-55296<<10)+(l-56320)+65536}},rR=Zc?function(i){return i.trimStart()}:function(i){return i.replace(Yc,"")},tR=Xc?function(i){return i.trimEnd()}:function(i){return i.replace(Cc,"")};function eg(e,i){return new RegExp(e,i)}var oo;if(io){var Md=eg("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");oo=function(i,t){var a;Md.lastIndex=t;var s=Md.exec(i);return(a=s[1])!==null&&a!==void 0?a:""}}else oo=function(i,t){for(var a=[];;){var s=Qk(i,t);if(s===void 0||ng(s)||oR(s))break;a.push(s),t+=s>=65536?2:1}return so.apply(void 0,a)};var aR=function(){function e(i,t){t===void 0&&(t={}),this.message=i,this.position={offset:0,line:1,column:1},this.ignoreTag=!!t.ignoreTag,this.locale=t.locale,this.requiresOtherClause=!!t.requiresOtherClause,this.shouldParseSkeletons=!!t.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(i,t,a){for(var s=[];!this.isEOF();){var l=this.char();if(l===123){var d=this.parseArgument(i,a);if(d.err)return d;s.push(d.val)}else{if(l===125&&i>0)break;if(l===35&&(t==="plural"||t==="selectordinal")){var k=this.clonePosition();this.bump(),s.push({type:Be.pound,location:Re(k,this.clonePosition())})}else if(l===60&&!this.ignoreTag&&this.peek()===47){if(a)break;return this.error(ye.UNMATCHED_CLOSING_TAG,Re(this.clonePosition(),this.clonePosition()))}else if(l===60&&!this.ignoreTag&&lo(this.peek()||0)){var d=this.parseTag(i,t);if(d.err)return d;s.push(d.val)}else{var d=this.parseLiteral(i,t);if(d.err)return d;s.push(d.val)}}}return{val:s,err:null}},e.prototype.parseTag=function(i,t){var a=this.clonePosition();this.bump();var s=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:Be.literal,value:"<".concat(s,"/>"),location:Re(a,this.clonePosition())},err:null};if(this.bumpIf(">")){var l=this.parseMessage(i+1,t,!0);if(l.err)return l;var d=l.val,k=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!lo(this.char()))return this.error(ye.INVALID_TAG,Re(k,this.clonePosition()));var v=this.clonePosition(),T=this.parseTagName();return s!==T?this.error(ye.UNMATCHED_CLOSING_TAG,Re(v,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:Be.tag,value:s,children:d,location:Re(a,this.clonePosition())},err:null}:this.error(ye.INVALID_TAG,Re(k,this.clonePosition())))}else return this.error(ye.UNCLOSED_TAG,Re(a,this.clonePosition()))}else return this.error(ye.INVALID_TAG,Re(a,this.clonePosition()))},e.prototype.parseTagName=function(){var i=this.offset();for(this.bump();!this.isEOF()&&sR(this.char());)this.bump();return this.message.slice(i,this.offset())},e.prototype.parseLiteral=function(i,t){for(var a=this.clonePosition(),s="";;){var l=this.tryParseQuote(t);if(l){s+=l;continue}var d=this.tryParseUnquoted(i,t);if(d){s+=d;continue}var k=this.tryParseLeftAngleBracket();if(k){s+=k;continue}break}var v=Re(a,this.clonePosition());return{val:{type:Be.literal,value:s,location:v},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!iR(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(i){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(i==="plural"||i==="selectordinal")break;return null;default:return null}this.bump();var t=[this.char()];for(this.bump();!this.isEOF();){var a=this.char();if(a===39)if(this.peek()===39)t.push(39),this.bump();else{this.bump();break}else t.push(a);this.bump()}return so.apply(void 0,t)},e.prototype.tryParseUnquoted=function(i,t){if(this.isEOF())return null;var a=this.char();return a===60||a===123||a===35&&(t==="plural"||t==="selectordinal")||a===125&&i>0?null:(this.bump(),so(a))},e.prototype.parseArgument=function(i,t){var a=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(ye.EXPECT_ARGUMENT_CLOSING_BRACE,Re(a,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(ye.EMPTY_ARGUMENT,Re(a,this.clonePosition()));var s=this.parseIdentifierIfPossible().value;if(!s)return this.error(ye.MALFORMED_ARGUMENT,Re(a,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(ye.EXPECT_ARGUMENT_CLOSING_BRACE,Re(a,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:Be.argument,value:s,location:Re(a,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(ye.EXPECT_ARGUMENT_CLOSING_BRACE,Re(a,this.clonePosition())):this.parseArgumentOptions(i,t,s,a);default:return this.error(ye.MALFORMED_ARGUMENT,Re(a,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var i=this.clonePosition(),t=this.offset(),a=oo(this.message,t),s=t+a.length;this.bumpTo(s);var l=this.clonePosition(),d=Re(i,l);return{value:a,location:d}},e.prototype.parseArgumentOptions=function(i,t,a,s){var l,d=this.clonePosition(),k=this.parseIdentifierIfPossible().value,v=this.clonePosition();switch(k){case"":return this.error(ye.EXPECT_ARGUMENT_TYPE,Re(d,v));case"number":case"date":case"time":{this.bumpSpace();var T=null;if(this.bumpIf(",")){this.bumpSpace();var f=this.clonePosition(),h=this.parseSimpleArgStyleIfPossible();if(h.err)return h;var y=tR(h.val);if(y.length===0)return this.error(ye.EXPECT_ARGUMENT_STYLE,Re(this.clonePosition(),this.clonePosition()));var K=Re(f,this.clonePosition());T={style:y,styleLocation:K}}var j=this.tryParseArgumentClose(s);if(j.err)return j;var R=Re(s,this.clonePosition());if(T&&Pd(T==null?void 0:T.style,"::",0)){var N=rR(T.style.slice(2));if(k==="number"){var h=this.parseNumberSkeletonFromString(N,T.styleLocation);return h.err?h:{val:{type:Be.number,value:a,location:R,style:h.val},err:null}}else{if(N.length===0)return this.error(ye.EXPECT_DATE_TIME_SKELETON,R);var D=N;this.locale&&(D=qc(N,this.locale));var y={type:Tt.dateTime,pattern:D,location:T.styleLocation,parsedOptions:this.shouldParseSkeletons?jc(D):{}},q=k==="date"?Be.date:Be.time;return{val:{type:q,value:a,location:R,style:y},err:null}}}return{val:{type:k==="number"?Be.number:k==="date"?Be.date:Be.time,value:a,location:R,style:(l=T==null?void 0:T.style)!==null&&l!==void 0?l:null},err:null}}case"plural":case"selectordinal":case"select":{var L=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(ye.EXPECT_SELECT_ARGUMENT_OPTIONS,Re(L,ee({},L)));this.bumpSpace();var Q=this.parseIdentifierIfPossible(),O=0;if(k!=="select"&&Q.value==="offset"){if(!this.bumpIf(":"))return this.error(ye.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Re(this.clonePosition(),this.clonePosition()));this.bumpSpace();var h=this.tryParseDecimalInteger(ye.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,ye.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(h.err)return h;this.bumpSpace(),Q=this.parseIdentifierIfPossible(),O=h.val}var V=this.tryParsePluralOrSelectOptions(i,k,t,Q);if(V.err)return V;var j=this.tryParseArgumentClose(s);if(j.err)return j;var I=Re(s,this.clonePosition());return k==="select"?{val:{type:Be.select,value:a,options:Fd(V.val),location:I},err:null}:{val:{type:Be.plural,value:a,options:Fd(V.val),offset:O,pluralType:k==="plural"?"cardinal":"ordinal",location:I},err:null}}default:return this.error(ye.INVALID_ARGUMENT_TYPE,Re(d,v))}},e.prototype.tryParseArgumentClose=function(i){return this.isEOF()||this.char()!==125?this.error(ye.EXPECT_ARGUMENT_CLOSING_BRACE,Re(i,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var i=0,t=this.clonePosition();!this.isEOF();){var a=this.char();switch(a){case 39:{this.bump();var s=this.clonePosition();if(!this.bumpUntil("'"))return this.error(ye.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,Re(s,this.clonePosition()));this.bump();break}case 123:{i+=1,this.bump();break}case 125:{if(i>0)i-=1;else return{val:this.message.slice(t.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(t.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(i,t){var a=[];try{a=Bc(i)}catch{return this.error(ye.INVALID_NUMBER_SKELETON,t)}return{val:{type:Tt.number,tokens:a,location:t,parsedOptions:this.shouldParseSkeletons?Uc(a):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(i,t,a,s){for(var l,d=!1,k=[],v=new Set,T=s.value,f=s.location;;){if(T.length===0){var h=this.clonePosition();if(t!=="select"&&this.bumpIf("=")){var y=this.tryParseDecimalInteger(ye.EXPECT_PLURAL_ARGUMENT_SELECTOR,ye.INVALID_PLURAL_ARGUMENT_SELECTOR);if(y.err)return y;f=Re(h,this.clonePosition()),T=this.message.slice(h.offset,this.offset())}else break}if(v.has(T))return this.error(t==="select"?ye.DUPLICATE_SELECT_ARGUMENT_SELECTOR:ye.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,f);T==="other"&&(d=!0),this.bumpSpace();var K=this.clonePosition();if(!this.bumpIf("{"))return this.error(t==="select"?ye.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:ye.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,Re(this.clonePosition(),this.clonePosition()));var j=this.parseMessage(i+1,t,a);if(j.err)return j;var R=this.tryParseArgumentClose(K);if(R.err)return R;k.push([T,{value:j.val,location:Re(K,this.clonePosition())}]),v.add(T),this.bumpSpace(),l=this.parseIdentifierIfPossible(),T=l.value,f=l.location}return k.length===0?this.error(t==="select"?ye.EXPECT_SELECT_ARGUMENT_SELECTOR:ye.EXPECT_PLURAL_ARGUMENT_SELECTOR,Re(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!d?this.error(ye.MISSING_OTHER_CLAUSE,Re(this.clonePosition(),this.clonePosition())):{val:k,err:null}},e.prototype.tryParseDecimalInteger=function(i,t){var a=1,s=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(a=-1);for(var l=!1,d=0;!this.isEOF();){var k=this.char();if(k>=48&&k<=57)l=!0,d=d*10+(k-48),this.bump();else break}var v=Re(s,this.clonePosition());return l?(d*=a,eR(d)?{val:d,err:null}:this.error(t,v)):this.error(i,v)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var i=this.position.offset;if(i>=this.message.length)throw Error("out of bound");var t=Qk(this.message,i);if(t===void 0)throw Error("Offset ".concat(i," is at invalid UTF-16 code unit boundary"));return t},e.prototype.error=function(i,t){return{val:null,err:{kind:i,message:this.message,location:t}}},e.prototype.bump=function(){if(!this.isEOF()){var i=this.char();i===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=i<65536?1:2)}},e.prototype.bumpIf=function(i){if(Pd(this.message,i,this.offset())){for(var t=0;t<i.length;t++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(i){var t=this.offset(),a=this.message.indexOf(i,t);return a>=0?(this.bumpTo(a),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(i){if(this.offset()>i)throw Error("targetOffset ".concat(i," must be greater than or equal to the current offset ").concat(this.offset()));for(i=Math.min(i,this.message.length);;){var t=this.offset();if(t===i)break;if(t>i)throw Error("targetOffset ".concat(i," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&ng(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var i=this.char(),t=this.offset(),a=this.message.charCodeAt(t+(i>=65536?2:1));return a??null},e}();function lo(e){return e>=97&&e<=122||e>=65&&e<=90}function iR(e){return lo(e)||e===47}function sR(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function ng(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function oR(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function uo(e){e.forEach(function(i){if(delete i.location,Yk(i)||Ck(i))for(var t in i.options)delete i.options[t].location,uo(i.options[t].value);else Uk(i)&&Jk(i.style)||(qk(i)||xk(i))&&ao(i.style)?delete i.style.location:$k(i)&&uo(i.children)})}function lR(e,i){i===void 0&&(i={}),i=ee({shouldParseSkeletons:!0,requiresOtherClause:!0},i);var t=new aR(e,i).parse();if(t.err){var a=SyntaxError(ye[t.err.kind]);throw a.location=t.err.location,a.originalMessage=t.err.message,a}return i!=null&&i.captureLocation||uo(t.val),t.val}function sr(e,i){var t=i&&i.cache?i.cache:ER,a=i&&i.serializer?i.serializer:vR,s=i&&i.strategy?i.strategy:dR;return s(e,{cache:t,serializer:a})}function uR(e){return e==null||typeof e=="number"||typeof e=="boolean"}function rg(e,i,t,a){var s=uR(a)?a:t(a),l=i.get(s);return typeof l>"u"&&(l=e.call(this,a),i.set(s,l)),l}function tg(e,i,t){var a=Array.prototype.slice.call(arguments,3),s=t(a),l=i.get(s);return typeof l>"u"&&(l=e.apply(this,a),i.set(s,l)),l}function Po(e,i,t,a,s){return t.bind(i,e,a,s)}function dR(e,i){var t=e.length===1?rg:tg;return Po(e,this,t,i.cache.create(),i.serializer)}function kR(e,i){return Po(e,this,tg,i.cache.create(),i.serializer)}function gR(e,i){return Po(e,this,rg,i.cache.create(),i.serializer)}var vR=function(){return JSON.stringify(arguments)};function Fo(){this.cache=Object.create(null)}Fo.prototype.get=function(e){return this.cache[e]};Fo.prototype.set=function(e,i){this.cache[e]=i};var ER={create:function(){return new Fo}},or={variadic:kR,monadic:gR},ur;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(ur||(ur={}));var Dr=function(e){Qn(i,e);function i(t,a,s){var l=e.call(this,t)||this;return l.code=a,l.originalMessage=s,l}return i.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},i}(Error),jd=function(e){Qn(i,e);function i(t,a,s,l){return e.call(this,'Invalid values for "'.concat(t,'": "').concat(a,'". Options are "').concat(Object.keys(s).join('", "'),'"'),ur.INVALID_VALUE,l)||this}return i}(Dr),fR=function(e){Qn(i,e);function i(t,a,s){return e.call(this,'Value for "'.concat(t,'" must be of type ').concat(a),ur.INVALID_VALUE,s)||this}return i}(Dr),mR=function(e){Qn(i,e);function i(t,a){return e.call(this,'The intl string context variable "'.concat(t,'" was not provided to the string "').concat(a,'"'),ur.MISSING_VALUE,a)||this}return i}(Dr),vn;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(vn||(vn={}));function TR(e){return e.length<2?e:e.reduce(function(i,t){var a=i[i.length-1];return!a||a.type!==vn.literal||t.type!==vn.literal?i.push(t):a.value+=t.value,i},[])}function ag(e){return typeof e=="function"}function Za(e,i,t,a,s,l,d){if(e.length===1&&Od(e[0]))return[{type:vn.literal,value:e[0].value}];for(var k=[],v=0,T=e;v<T.length;v++){var f=T[v];if(Od(f)){k.push({type:vn.literal,value:f.value});continue}if(Fc(f)){typeof l=="number"&&k.push({type:vn.literal,value:t.getNumberFormat(i).format(l)});continue}var h=f.value;if(!(s&&h in s))throw new mR(h,d);var y=s[h];if(Pc(f)){(!y||typeof y=="string"||typeof y=="number")&&(y=typeof y=="string"||typeof y=="number"?String(y):""),k.push({type:typeof y=="string"?vn.literal:vn.object,value:y});continue}if(qk(f)){var K=typeof f.style=="string"?a.date[f.style]:ao(f.style)?f.style.parsedOptions:void 0;k.push({type:vn.literal,value:t.getDateTimeFormat(i,K).format(y)});continue}if(xk(f)){var K=typeof f.style=="string"?a.time[f.style]:ao(f.style)?f.style.parsedOptions:a.time.medium;k.push({type:vn.literal,value:t.getDateTimeFormat(i,K).format(y)});continue}if(Uk(f)){var K=typeof f.style=="string"?a.number[f.style]:Jk(f.style)?f.style.parsedOptions:void 0;K&&K.scale&&(y=y*(K.scale||1)),k.push({type:vn.literal,value:t.getNumberFormat(i,K).format(y)});continue}if($k(f)){var j=f.children,R=f.value,N=s[R];if(!ag(N))throw new fR(R,"function",d);var D=Za(j,i,t,a,s,l),q=N(D.map(function(O){return O.value}));Array.isArray(q)||(q=[q]),k.push.apply(k,q.map(function(O){return{type:typeof O=="string"?vn.literal:vn.object,value:O}}))}if(Yk(f)){var L=f.options[y]||f.options.other;if(!L)throw new jd(f.value,y,Object.keys(f.options),d);k.push.apply(k,Za(L.value,i,t,a,s));continue}if(Ck(f)){var L=f.options["=".concat(y)];if(!L){if(!Intl.PluralRules)throw new Dr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,ur.MISSING_INTL_API,d);var Q=t.getPluralRules(i,{type:f.pluralType}).select(y-(f.offset||0));L=f.options[Q]||f.options.other}if(!L)throw new jd(f.value,y,Object.keys(f.options),d);k.push.apply(k,Za(L.value,i,t,a,s,y-(f.offset||0)));continue}}return TR(k)}function pR(e,i){return i?ee(ee(ee({},e||{}),i||{}),Object.keys(e).reduce(function(t,a){return t[a]=ee(ee({},e[a]),i[a]||{}),t},{})):e}function hR(e,i){return i?Object.keys(e).reduce(function(t,a){return t[a]=pR(e[a],i[a]),t},ee({},e)):e}function Ys(e){return{create:function(){return{get:function(i){return e[i]},set:function(i,t){e[i]=t}}}}}function AR(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:sr(function(){for(var i,t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return new((i=Intl.NumberFormat).bind.apply(i,lr([void 0],t,!1)))},{cache:Ys(e.number),strategy:or.variadic}),getDateTimeFormat:sr(function(){for(var i,t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return new((i=Intl.DateTimeFormat).bind.apply(i,lr([void 0],t,!1)))},{cache:Ys(e.dateTime),strategy:or.variadic}),getPluralRules:sr(function(){for(var i,t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return new((i=Intl.PluralRules).bind.apply(i,lr([void 0],t,!1)))},{cache:Ys(e.pluralRules),strategy:or.variadic})}}var ig=function(){function e(i,t,a,s){var l=this;if(t===void 0&&(t=e.defaultLocale),this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(v){var T=l.formatToParts(v);if(T.length===1)return T[0].value;var f=T.reduce(function(h,y){return!h.length||y.type!==vn.literal||typeof h[h.length-1]!="string"?h.push(y.value):h[h.length-1]+=y.value,h},[]);return f.length<=1?f[0]||"":f},this.formatToParts=function(v){return Za(l.ast,l.locales,l.formatters,l.formats,v,void 0,l.message)},this.resolvedOptions=function(){var v;return{locale:((v=l.resolvedLocale)===null||v===void 0?void 0:v.toString())||Intl.NumberFormat.supportedLocalesOf(l.locales)[0]}},this.getAst=function(){return l.ast},this.locales=t,this.resolvedLocale=e.resolveLocale(t),typeof i=="string"){if(this.message=i,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var d=s||{};d.formatters;var k=mt(d,["formatters"]);this.ast=e.__parse(i,ee(ee({},k),{locale:this.resolvedLocale}))}else this.ast=i;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=hR(e.formats,a),this.formatters=s&&s.formatters||AR(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(i){if(!(typeof Intl.Locale>"u")){var t=Intl.NumberFormat.supportedLocalesOf(i);return t.length>0?new Intl.Locale(t[0]):new Intl.Locale(typeof i=="string"?i:i[0])}},e.__parse=lR,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}(),Yr;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(Yr||(Yr={}));var ea=function(e){Qn(i,e);function i(t,a,s){var l=this,d=s?s instanceof Error?s:new Error(String(s)):void 0;return l=e.call(this,"[@formatjs/intl Error ".concat(t,"] ").concat(a,`
`).concat(d?`
`.concat(d.message,`
`).concat(d.stack):""))||this,l.code=t,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(l,i),l}return i}(Error),yR=function(e){Qn(i,e);function i(t,a){return e.call(this,Yr.UNSUPPORTED_FORMATTER,t,a)||this}return i}(ea),cR=function(e){Qn(i,e);function i(t,a){return e.call(this,Yr.INVALID_CONFIG,t,a)||this}return i}(ea),Gd=function(e){Qn(i,e);function i(t,a){return e.call(this,Yr.MISSING_DATA,t,a)||this}return i}(ea),xn=function(e){Qn(i,e);function i(t,a,s){var l=e.call(this,Yr.FORMAT_ERROR,"".concat(t,`
Locale: `).concat(a,`
`),s)||this;return l.locale=a,l}return i}(ea),Cs=function(e){Qn(i,e);function i(t,a,s,l){var d=e.call(this,"".concat(t,`
MessageID: `).concat(s==null?void 0:s.id,`
Default Message: `).concat(s==null?void 0:s.defaultMessage,`
Description: `).concat(s==null?void 0:s.description,`
`),a,l)||this;return d.descriptor=s,d.locale=a,d}return i}(xn),RR=function(e){Qn(i,e);function i(t,a){var s=e.call(this,Yr.MISSING_TRANSLATION,'Missing message: "'.concat(t.id,'" for locale "').concat(a,'", using ').concat(t.defaultMessage?"default message (".concat(typeof t.defaultMessage=="string"?t.defaultMessage:t.defaultMessage.map(function(l){var d;return(d=l.value)!==null&&d!==void 0?d:JSON.stringify(l)}).join(),")"):"id"," as fallback."))||this;return s.descriptor=t,s}return i}(ea);function $r(e,i,t){return t===void 0&&(t={}),i.reduce(function(a,s){return s in e?a[s]=e[s]:s in t&&(a[s]=t[s]),a},{})}var _R=function(e){},bR=function(e){},sg={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:_R,onWarn:bR};function og(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function qr(e){return{create:function(){return{get:function(i){return e[i]},set:function(i,t){e[i]=t}}}}}function NR(e){e===void 0&&(e=og());var i=Intl.RelativeTimeFormat,t=Intl.ListFormat,a=Intl.DisplayNames,s=sr(function(){for(var k,v=[],T=0;T<arguments.length;T++)v[T]=arguments[T];return new((k=Intl.DateTimeFormat).bind.apply(k,lr([void 0],v,!1)))},{cache:qr(e.dateTime),strategy:or.variadic}),l=sr(function(){for(var k,v=[],T=0;T<arguments.length;T++)v[T]=arguments[T];return new((k=Intl.NumberFormat).bind.apply(k,lr([void 0],v,!1)))},{cache:qr(e.number),strategy:or.variadic}),d=sr(function(){for(var k,v=[],T=0;T<arguments.length;T++)v[T]=arguments[T];return new((k=Intl.PluralRules).bind.apply(k,lr([void 0],v,!1)))},{cache:qr(e.pluralRules),strategy:or.variadic});return{getDateTimeFormat:s,getNumberFormat:l,getMessageFormat:sr(function(k,v,T,f){return new ig(k,v,T,ee({formatters:{getNumberFormat:l,getDateTimeFormat:s,getPluralRules:d}},f||{}))},{cache:qr(e.message),strategy:or.variadic}),getRelativeTimeFormat:sr(function(){for(var k=[],v=0;v<arguments.length;v++)k[v]=arguments[v];return new(i.bind.apply(i,lr([void 0],k,!1)))},{cache:qr(e.relativeTime),strategy:or.variadic}),getPluralRules:d,getListFormat:sr(function(){for(var k=[],v=0;v<arguments.length;v++)k[v]=arguments[v];return new(t.bind.apply(t,lr([void 0],k,!1)))},{cache:qr(e.list),strategy:or.variadic}),getDisplayNames:sr(function(){for(var k=[],v=0;v<arguments.length;v++)k[v]=arguments[v];return new(a.bind.apply(a,lr([void 0],k,!1)))},{cache:qr(e.displayNames),strategy:or.variadic})}}function Mo(e,i,t,a){var s=e&&e[i],l;if(s&&(l=s[t]),l)return l;a(new yR("No ".concat(i," format named: ").concat(t)))}function Ja(e,i){return Object.keys(e).reduce(function(t,a){return t[a]=ee({timeZone:i},e[a]),t},{})}function Bd(e,i){var t=Object.keys(ee(ee({},e),i));return t.reduce(function(a,s){return a[s]=ee(ee({},e[s]||{}),i[s]||{}),a},{})}function wd(e,i){if(!i)return e;var t=ig.formats;return ee(ee(ee({},t),e),{date:Bd(Ja(t.date,i),Ja(e.date||{},i)),time:Bd(Ja(t.time,i),Ja(e.time||{},i))})}var ko=function(e,i,t,a,s){var l=e.locale,d=e.formats,k=e.messages,v=e.defaultLocale,T=e.defaultFormats,f=e.fallbackOnEmptyString,h=e.onError,y=e.timeZone,K=e.defaultRichTextElements;t===void 0&&(t={id:""});var j=t.id,R=t.defaultMessage;Hk(!!j,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var N=String(j),D=k&&Object.prototype.hasOwnProperty.call(k,N)&&k[N];if(Array.isArray(D)&&D.length===1&&D[0].type===Be.literal)return D[0].value;if(!a&&D&&typeof D=="string"&&!K)return D.replace(/'\{(.*?)\}'/gi,"{$1}");if(a=ee(ee({},K),a||{}),d=wd(d,y),T=wd(T,y),!D){if(f===!1&&D==="")return D;if((!R||l&&l.toLowerCase()!==v.toLowerCase())&&h(new RR(t,l)),R)try{var q=i.getMessageFormat(R,v,T,s);return q.format(a)}catch(L){return h(new Cs('Error formatting default message for: "'.concat(N,'", rendering default message verbatim'),l,t,L)),typeof R=="string"?R:N}return N}try{var q=i.getMessageFormat(D,l,d,ee({formatters:i},s||{}));return q.format(a)}catch(L){h(new Cs('Error formatting message: "'.concat(N,'", using ').concat(R?"default message":"id"," as fallback."),l,t,L))}if(R)try{var q=i.getMessageFormat(R,v,T,s);return q.format(a)}catch(L){h(new Cs('Error formatting the default message for: "'.concat(N,'", rendering message verbatim'),l,t,L))}return typeof D=="string"?D:typeof R=="string"?R:N},lg=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function Ei(e,i,t,a){var s=e.locale,l=e.formats,d=e.onError,k=e.timeZone;a===void 0&&(a={});var v=a.format,T=ee(ee({},k&&{timeZone:k}),v&&Mo(l,i,v,d)),f=$r(a,lg,T);return i==="time"&&!f.hour&&!f.minute&&!f.second&&!f.timeStyle&&!f.dateStyle&&(f=ee(ee({},f),{hour:"numeric",minute:"numeric"})),t(s,f)}function SR(e,i){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var s=t[0],l=t[1],d=l===void 0?{}:l,k=typeof s=="string"?new Date(s||0):s;try{return Ei(e,"date",i,d).format(k)}catch(v){e.onError(new xn("Error formatting date.",e.locale,v))}return String(k)}function IR(e,i){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var s=t[0],l=t[1],d=l===void 0?{}:l,k=typeof s=="string"?new Date(s||0):s;try{return Ei(e,"time",i,d).format(k)}catch(v){e.onError(new xn("Error formatting time.",e.locale,v))}return String(k)}function OR(e,i){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var s=t[0],l=t[1],d=t[2],k=d===void 0?{}:d,v=e.timeZone,T=e.locale,f=e.onError,h=$r(k,lg,v?{timeZone:v}:{});try{return i(T,h).formatRange(s,l)}catch(y){f(new xn("Error formatting date time range.",e.locale,y))}return String(s)}function LR(e,i){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var s=t[0],l=t[1],d=l===void 0?{}:l,k=typeof s=="string"?new Date(s||0):s;try{return Ei(e,"date",i,d).formatToParts(k)}catch(v){e.onError(new xn("Error formatting date.",e.locale,v))}return[]}function KR(e,i){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var s=t[0],l=t[1],d=l===void 0?{}:l,k=typeof s=="string"?new Date(s||0):s;try{return Ei(e,"time",i,d).formatToParts(k)}catch(v){e.onError(new xn("Error formatting time.",e.locale,v))}return[]}var DR=["style","type","fallback","languageDisplay"];function PR(e,i,t,a){var s=e.locale,l=e.onError,d=Intl.DisplayNames;d||l(new Dr(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,ur.MISSING_INTL_API));var k=$r(a,DR);try{return i(s,k).of(t)}catch(v){l(new xn("Error formatting display name.",s,v))}}var FR=["type","style"],Vd=Date.now();function MR(e){return"".concat(Vd,"_").concat(e,"_").concat(Vd)}function jR(e,i,t,a){a===void 0&&(a={});var s=ug(e,i,t,a).reduce(function(l,d){var k=d.value;return typeof k!="string"?l.push(k):typeof l[l.length-1]=="string"?l[l.length-1]+=k:l.push(k),l},[]);return s.length===1?s[0]:s.length===0?"":s}function ug(e,i,t,a){var s=e.locale,l=e.onError;a===void 0&&(a={});var d=Intl.ListFormat;d||l(new Dr(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,ur.MISSING_INTL_API));var k=$r(a,FR);try{var v={},T=t.map(function(f,h){if(typeof f=="object"){var y=MR(h);return v[y]=f,y}return String(f)});return i(s,k).formatToParts(T).map(function(f){return f.type==="literal"?f:ee(ee({},f),{value:v[f.value]||f.value})})}catch(f){l(new xn("Error formatting list.",s,f))}return t}var GR=["type"];function BR(e,i,t,a){var s=e.locale,l=e.onError;a===void 0&&(a={}),Intl.PluralRules||l(new Dr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,ur.MISSING_INTL_API));var d=$r(a,GR);try{return i(s,d).select(t)}catch(k){l(new xn("Error formatting plural.",s,k))}return"other"}var wR=["numeric","style"];function VR(e,i,t){var a=e.locale,s=e.formats,l=e.onError;t===void 0&&(t={});var d=t.format,k=!!d&&Mo(s,"relative",d,l)||{},v=$r(t,wR,k);return i(a,v)}function HR(e,i,t,a,s){s===void 0&&(s={}),a||(a="second");var l=Intl.RelativeTimeFormat;l||e.onError(new Dr(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,ur.MISSING_INTL_API));try{return VR(e,i,s).format(t,a)}catch(d){e.onError(new xn("Error formatting relative time.",e.locale,d))}return String(t)}var UR=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function dg(e,i,t){var a=e.locale,s=e.formats,l=e.onError;t===void 0&&(t={});var d=t.format,k=d&&Mo(s,"number",d,l)||{},v=$r(t,UR,k);return i(a,v)}function qR(e,i,t,a){a===void 0&&(a={});try{return dg(e,i,a).format(t)}catch(s){e.onError(new xn("Error formatting number.",e.locale,s))}return String(t)}function xR(e,i,t,a){a===void 0&&(a={});try{return dg(e,i,a).formatToParts(t)}catch(s){e.onError(new xn("Error formatting number.",e.locale,s))}return[]}function YR(e){var i=e?e[Object.keys(e)[0]]:void 0;return typeof i=="string"}function CR(e){e.onWarn&&e.defaultRichTextElements&&YR(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`)}function $R(e,i){var t=NR(i),a=ee(ee({},sg),e),s=a.locale,l=a.defaultLocale,d=a.onError;return s?!Intl.NumberFormat.supportedLocalesOf(s).length&&d?d(new Gd('Missing locale data for locale: "'.concat(s,'" in Intl.NumberFormat. Using default locale: "').concat(l,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(s).length&&d&&d(new Gd('Missing locale data for locale: "'.concat(s,'" in Intl.DateTimeFormat. Using default locale: "').concat(l,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):(d&&d(new cR('"locale" was not configured, using "'.concat(l,'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))),a.locale=a.defaultLocale||"en"),CR(a),ee(ee({},a),{formatters:t,formatNumber:qR.bind(null,a,t.getNumberFormat),formatNumberToParts:xR.bind(null,a,t.getNumberFormat),formatRelativeTime:HR.bind(null,a,t.getRelativeTimeFormat),formatDate:SR.bind(null,a,t.getDateTimeFormat),formatDateToParts:LR.bind(null,a,t.getDateTimeFormat),formatTime:IR.bind(null,a,t.getDateTimeFormat),formatDateTimeRange:OR.bind(null,a,t.getDateTimeFormat),formatTimeToParts:KR.bind(null,a,t.getDateTimeFormat),formatPlural:BR.bind(null,a,t.getPluralRules),formatMessage:ko.bind(null,a,t),$t:ko.bind(null,a,t),formatList:jR.bind(null,a,t.getListFormat),formatListToParts:ug.bind(null,a,t.getListFormat),formatDisplayName:PR.bind(null,a,t.getDisplayNames)})}function JR(e){Hk(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var WR=ee(ee({},sg),{textComponent:P.Fragment});function zR(e){return function(i){return e(P.Children.toArray(i))}}function Hd(e,i){if(e===i)return!0;if(!e||!i)return!1;var t=Object.keys(e),a=Object.keys(i),s=t.length;if(a.length!==s)return!1;for(var l=0;l<s;l++){var d=t[l];if(e[d]!==i[d]||!Object.prototype.hasOwnProperty.call(i,d))return!1}return!0}var jo=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=P.createContext(null)):P.createContext(null);jo.Consumer;var ZR=jo.Provider,Ud=ZR,XR=jo;function er(){var e=P.useContext(XR);return JR(e),e}var go;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(go||(go={}));var vo;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(vo||(vo={}));function kg(e){var i=function(t){var a=er(),s=t.value,l=t.children,d=mt(t,["value","children"]),k=typeof s=="string"?new Date(s||0):s,v=e==="formatDate"?a.formatDateToParts(k,d):a.formatTimeToParts(k,d);return l(v)};return i.displayName=vo[e],i}function na(e){var i=function(t){var a=er(),s=t.value,l=t.children,d=mt(t,["value","children"]),k=a[e](s,d);if(typeof l=="function")return l(k);var v=a.textComponent||P.Fragment;return P.createElement(v,null,k)};return i.displayName=go[e],i}function gg(e){return e&&Object.keys(e).reduce(function(i,t){var a=e[t];return i[t]=ag(a)?zR(a):a,i},{})}var qd=function(e,i,t,a){for(var s=[],l=4;l<arguments.length;l++)s[l-4]=arguments[l];var d=gg(a),k=ko.apply(void 0,lr([e,i,t,d],s,!1));return Array.isArray(k)?P.Children.toArray(k):k},QR=function(e,i){var t=e.defaultRichTextElements,a=mt(e,["defaultRichTextElements"]),s=gg(t),l=$R(ee(ee(ee({},WR),a),{defaultRichTextElements:s}),i),d={locale:l.locale,timeZone:l.timeZone,fallbackOnEmptyString:l.fallbackOnEmptyString,formats:l.formats,defaultLocale:l.defaultLocale,defaultFormats:l.defaultFormats,messages:l.messages,onError:l.onError,defaultRichTextElements:s};return ee(ee({},l),{formatMessage:qd.bind(null,d,l.formatters),$t:qd.bind(null,d,l.formatters)})};function e_(e,i){var t=e.values,a=mt(e,["values"]),s=i.values,l=mt(i,["values"]);return Hd(s,t)&&Hd(a,l)}function vg(e){var i=er(),t=i.formatMessage,a=i.textComponent,s=a===void 0?P.Fragment:a,l=e.id,d=e.description,k=e.defaultMessage,v=e.values,T=e.children,f=e.tagName,h=f===void 0?s:f,y=e.ignoreTag,K={id:l,description:d,defaultMessage:k},j=t(K,v,{ignoreTag:y});return typeof T=="function"?T(Array.isArray(j)?j:[j]):h?P.createElement(h,null,P.Children.toArray(j)):P.createElement(P.Fragment,null,j)}vg.displayName="FormattedMessage";var Ie=P.memo(vg,e_);Ie.displayName="MemoizedFormattedMessage";var Eg=na("formatDate"),n_=na("formatTime");na("formatNumber");na("formatList");na("formatDisplayName");kg("formatDate");kg("formatTime");const Et=e=>{if(e==null)return;const i=e.toString().replace(/\s/g,"");if(!Number.isNaN(i))return Number(Math.round(parseFloat(i))).toLocaleString("nb-NO").replace(/,|\s/g," ")};var fi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Go(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var fg={exports:{}};(function(e,i){(function(t,a){e.exports=a()})(fi,function(){var t="minute",a=/[+-]\d\d(?::?\d\d)?/g,s=/([+-]|\d\d)/g;return function(l,d,k){var v=d.prototype;k.utc=function(R){var N={date:R,utc:!0,args:arguments};return new d(N)},v.utc=function(R){var N=k(this.toDate(),{locale:this.$L,utc:!0});return R?N.add(this.utcOffset(),t):N},v.local=function(){return k(this.toDate(),{locale:this.$L,utc:!1})};var T=v.parse;v.parse=function(R){R.utc&&(this.$u=!0),this.$utils().u(R.$offset)||(this.$offset=R.$offset),T.call(this,R)};var f=v.init;v.init=function(){if(this.$u){var R=this.$d;this.$y=R.getUTCFullYear(),this.$M=R.getUTCMonth(),this.$D=R.getUTCDate(),this.$W=R.getUTCDay(),this.$H=R.getUTCHours(),this.$m=R.getUTCMinutes(),this.$s=R.getUTCSeconds(),this.$ms=R.getUTCMilliseconds()}else f.call(this)};var h=v.utcOffset;v.utcOffset=function(R,N){var D=this.$utils().u;if(D(R))return this.$u?0:D(this.$offset)?h.call(this):this.$offset;if(typeof R=="string"&&(R=function(O){O===void 0&&(O="");var V=O.match(a);if(!V)return null;var I=(""+V[0]).match(s)||["-",0,0],b=I[0],$=60*+I[1]+ +I[2];return $===0?0:b==="+"?$:-$}(R),R===null))return this;var q=Math.abs(R)<=16?60*R:R,L=this;if(N)return L.$offset=q,L.$u=R===0,L;if(R!==0){var Q=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(L=this.local().add(q+Q,t)).$offset=q,L.$x.$localOffset=Q}else L=this.utc();return L};var y=v.format;v.format=function(R){var N=R||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return y.call(this,N)},v.valueOf=function(){var R=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*R},v.isUTC=function(){return!!this.$u},v.toISOString=function(){return this.toDate().toISOString()},v.toString=function(){return this.toDate().toUTCString()};var K=v.toDate;v.toDate=function(R){return R==="s"&&this.$offset?k(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():K.call(this)};var j=v.diff;v.diff=function(R,N,D){if(R&&this.$u===R.$u)return j.call(this,R,N,D);var q=this.local(),L=k(R).local();return j.call(q,L,N,D)}}})})(fg);var r_=fg.exports;const t_=Go(r_);var mg={exports:{}};(function(e,i){(function(t,a){e.exports=a()})(fi,function(){var t,a,s=1e3,l=6e4,d=36e5,k=864e5,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,T=31536e6,f=2628e6,h=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,y={years:T,months:f,days:k,hours:d,minutes:l,seconds:s,milliseconds:1,weeks:6048e5},K=function(V){return V instanceof Q},j=function(V,I,b){return new Q(V,b,I.$l)},R=function(V){return a.p(V)+"s"},N=function(V){return V<0},D=function(V){return N(V)?Math.ceil(V):Math.floor(V)},q=function(V){return Math.abs(V)},L=function(V,I){return V?N(V)?{negative:!0,format:""+q(V)+I}:{negative:!1,format:""+V+I}:{negative:!1,format:""}},Q=function(){function V(b,$,W){var x=this;if(this.$d={},this.$l=W,b===void 0&&(this.$ms=0,this.parseFromMilliseconds()),$)return j(b*y[R($)],this);if(typeof b=="number")return this.$ms=b,this.parseFromMilliseconds(),this;if(typeof b=="object")return Object.keys(b).forEach(function(J){x.$d[R(J)]=b[J]}),this.calMilliseconds(),this;if(typeof b=="string"){var te=b.match(h);if(te){var le=te.slice(2).map(function(J){return J!=null?Number(J):0});return this.$d.years=le[0],this.$d.months=le[1],this.$d.weeks=le[2],this.$d.days=le[3],this.$d.hours=le[4],this.$d.minutes=le[5],this.$d.seconds=le[6],this.calMilliseconds(),this}}return this}var I=V.prototype;return I.calMilliseconds=function(){var b=this;this.$ms=Object.keys(this.$d).reduce(function($,W){return $+(b.$d[W]||0)*y[W]},0)},I.parseFromMilliseconds=function(){var b=this.$ms;this.$d.years=D(b/T),b%=T,this.$d.months=D(b/f),b%=f,this.$d.days=D(b/k),b%=k,this.$d.hours=D(b/d),b%=d,this.$d.minutes=D(b/l),b%=l,this.$d.seconds=D(b/s),b%=s,this.$d.milliseconds=b},I.toISOString=function(){var b=L(this.$d.years,"Y"),$=L(this.$d.months,"M"),W=+this.$d.days||0;this.$d.weeks&&(W+=7*this.$d.weeks);var x=L(W,"D"),te=L(this.$d.hours,"H"),le=L(this.$d.minutes,"M"),J=this.$d.seconds||0;this.$d.milliseconds&&(J+=this.$d.milliseconds/1e3,J=Math.round(1e3*J)/1e3);var H=L(J,"S"),U=b.negative||$.negative||x.negative||te.negative||le.negative||H.negative,Z=te.format||le.format||H.format?"T":"",C=(U?"-":"")+"P"+b.format+$.format+x.format+Z+te.format+le.format+H.format;return C==="P"||C==="-P"?"P0D":C},I.toJSON=function(){return this.toISOString()},I.format=function(b){var $=b||"YYYY-MM-DDTHH:mm:ss",W={Y:this.$d.years,YY:a.s(this.$d.years,2,"0"),YYYY:a.s(this.$d.years,4,"0"),M:this.$d.months,MM:a.s(this.$d.months,2,"0"),D:this.$d.days,DD:a.s(this.$d.days,2,"0"),H:this.$d.hours,HH:a.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:a.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:a.s(this.$d.seconds,2,"0"),SSS:a.s(this.$d.milliseconds,3,"0")};return $.replace(v,function(x,te){return te||String(W[x])})},I.as=function(b){return this.$ms/y[R(b)]},I.get=function(b){var $=this.$ms,W=R(b);return W==="milliseconds"?$%=1e3:$=W==="weeks"?D($/y[W]):this.$d[W],$||0},I.add=function(b,$,W){var x;return x=$?b*y[R($)]:K(b)?b.$ms:j(b,this).$ms,j(this.$ms+x*(W?-1:1),this)},I.subtract=function(b,$){return this.add(b,$,!0)},I.locale=function(b){var $=this.clone();return $.$l=b,$},I.clone=function(){return j(this.$ms,this)},I.humanize=function(b){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!b)},I.valueOf=function(){return this.asMilliseconds()},I.milliseconds=function(){return this.get("milliseconds")},I.asMilliseconds=function(){return this.as("milliseconds")},I.seconds=function(){return this.get("seconds")},I.asSeconds=function(){return this.as("seconds")},I.minutes=function(){return this.get("minutes")},I.asMinutes=function(){return this.as("minutes")},I.hours=function(){return this.get("hours")},I.asHours=function(){return this.as("hours")},I.days=function(){return this.get("days")},I.asDays=function(){return this.as("days")},I.weeks=function(){return this.get("weeks")},I.asWeeks=function(){return this.as("weeks")},I.months=function(){return this.get("months")},I.asMonths=function(){return this.as("months")},I.years=function(){return this.get("years")},I.asYears=function(){return this.as("years")},V}(),O=function(V,I,b){return V.add(I.years()*b,"y").add(I.months()*b,"M").add(I.days()*b,"d").add(I.hours()*b,"h").add(I.minutes()*b,"m").add(I.seconds()*b,"s").add(I.milliseconds()*b,"ms")};return function(V,I,b){t=b,a=b().$utils(),b.duration=function(x,te){var le=b.locale();return j(x,{$l:le},te)},b.isDuration=K;var $=I.prototype.add,W=I.prototype.subtract;I.prototype.add=function(x,te){return K(x)?O(this,x,1):$.bind(this)(x,te)},I.prototype.subtract=function(x,te){return K(x)?O(this,x,-1):W.bind(this)(x,te)}}})})(mg);var a_=mg.exports;const i_=Go(a_);var Tg={exports:{}};(function(e,i){(function(t,a){e.exports=a()})(fi,function(){var t="day";return function(a,s,l){var d=function(T){return T.add(4-T.isoWeekday(),t)},k=s.prototype;k.isoWeekYear=function(){return d(this).year()},k.isoWeek=function(T){if(!this.$utils().u(T))return this.add(7*(T-this.isoWeek()),t);var f,h,y,K,j=d(this),R=(f=this.isoWeekYear(),h=this.$u,y=(h?l.utc:l)().year(f).startOf("year"),K=4-y.isoWeekday(),y.isoWeekday()>4&&(K+=7),y.add(K,t));return j.diff(R,"week")+1},k.isoWeekday=function(T){return this.$utils().u(T)?this.day()||7:this.day(this.day()%7?T:T-7)};var v=k.startOf;k.startOf=function(T,f){var h=this.$utils(),y=!!h.u(f)||f;return h.p(T)==="isoweek"?y?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):v.bind(this)(T,f)}}})})(Tg);var s_=Tg.exports;const o_=Go(s_);var l_={exports:{}};(function(e,i){(function(t,a){e.exports=a(Kr)})(fi,function(t){function a(d){return d&&typeof d=="object"&&"default"in d?d:{default:d}}var s=a(t),l={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(d){return d+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return s.default.locale(l,null,!0),l})})(l_);const u_=og(),pn=e=>QR({locale:"nb-NO",messages:e},u_),pg={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"},xd="YYYY-MM-DD";Kr.extend(t_);Kr.extend(o_);Kr.extend(i_);pn(pg);const pt="9999-12-31",d_=(e,i,t)=>Kr(e,i,t).utc(!0).startOf("day"),Yd=(e,i)=>e===pt?e:d_(e,xd).add(i,"days").format(xd);pn(pg);function k_(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var hg={exports:{}},qt={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cd;function g_(){if(Cd)return qt;Cd=1;var e=Y,i=Symbol.for("react.element"),t=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(k,v,T){var f,h={},y=null,K=null;T!==void 0&&(y=""+T),v.key!==void 0&&(y=""+v.key),v.ref!==void 0&&(K=v.ref);for(f in v)a.call(v,f)&&!l.hasOwnProperty(f)&&(h[f]=v[f]);if(k&&k.defaultProps)for(f in v=k.defaultProps,v)h[f]===void 0&&(h[f]=v[f]);return{$$typeof:i,type:k,key:y,ref:K,props:h,_owner:s.current}}return qt.Fragment=t,qt.jsx=d,qt.jsxs=d,qt}hg.exports=g_();var Xe=hg.exports;const Jr={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodLabel.DateToday":"d.d.","PeriodFieldArray.LeggTilPeriode":"Legg til periode","DateTimeLabel.Kl":" kl.","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember"};pn(Jr);pn(Jr);var Ag={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var i={}.hasOwnProperty;function t(){for(var l="",d=0;d<arguments.length;d++){var k=arguments[d];k&&(l=s(l,a.call(this,k)))}return l}function a(l){if(typeof l=="string"||typeof l=="number")return this&&this[l]||l;if(typeof l!="object")return"";if(Array.isArray(l))return t.apply(this,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var d="";for(var k in l)i.call(l,k)&&l[k]&&(d=s(d,this&&this[k]||k));return d}function s(l,d){return d?l?l+" "+d:l+d:l}e.exports?(t.default=t,e.exports=t):window.classNames=t})()})(Ag);var v_=Ag.exports;const Mn=k_(v_),E_="_borderbox_hicl4_1",f_="_error_hicl4_4",m_="_warning_hicl4_7",T_={borderbox:E_,error:f_,warning:m_};Mn.bind(T_);const p_="_aksjonspunkt_kn1hn_1",h_="_erAksjonspunktApent_kn1hn_4",A_="_erIkkeGodkjentAvBeslutter_kn1hn_8",y_={aksjonspunkt:p_,erAksjonspunktApent:h_,erIkkeGodkjentAvBeslutter:A_};Mn.bind(y_);const Zt=({dateString:e})=>Xe.jsx(Eg,{day:"2-digit",month:"2-digit",year:"numeric",value:new Date(e)}),c_=pn(Jr),Qa=({dateTimeString:e,separator:i="dash",year:t="numeric",month:a="2-digit",day:s="2-digit",hour:l="numeric",minute:d="numeric",second:k=void 0})=>{const v=()=>{switch(i){case"dash":return" - ";case"kl":return c_.formatMessage({id:"DateTimeLabel.Kl"})}};return Xe.jsxs(Xe.Fragment,{children:[Xe.jsx(Eg,{value:new Date(e),day:s,month:a,year:t}),v(),Xe.jsx(n_,{value:new Date(e),hour:l,minute:d,second:k})]})};pn(Jr);const R_="_tooltip_h8akz_1",__="_tooltiptext_h8akz_5",b_="_left_h8akz_22",N_="_top_h8akz_27",S_="_right_h8akz_30",I_="_bottom_h8akz_34",O_="_showTooltip_h8akz_1",Eo={tooltip:R_,tooltiptext:__,left:b_,top:N_,right:S_,bottom:I_,showTooltip:O_},L_=Mn.bind(Eo),K_=({children:e,content:i,alignRight:t=!1,alignLeft:a=!1,alignTop:s=!1,alignBottom:l=!1})=>Xe.jsxs("div",{className:Eo.tooltip,children:[Xe.jsx("span",{className:L_(Eo.tooltiptext,{right:t||!a&&!s&&!l,left:a,top:s,bottom:l}),children:i}),e]}),D_=Y.forwardRef(({onClick:e=()=>{},onMouseDown:i,tabIndex:t=-1,className:a="",src:s,srcHover:l,alt:d,onKeyDown:k,tooltip:v,alignTooltipLeft:T=!1},f)=>{const[h,y]=P.useState(!1),K=P.useCallback(()=>{y(!0)},[]),j=P.useCallback(()=>{y(!1)},[]),R=P.useCallback(q=>{(q.key==="Enter"||q.key===" ")&&(k&&k(q),q.preventDefault())},[]),N=l&&h?l:s,D=Xe.jsx("img",{ref:f,className:a,src:N,alt:d,tabIndex:t,onMouseOver:K,onMouseOut:j,onFocus:K,onBlur:j,onKeyDown:R,onMouseDown:i,onClick:e});return v?Xe.jsx(K_,{content:v,alignLeft:T,children:D}):D});D_.displayName="Image";const P_="_flexColumnNew_1vdv1_1",F_={flexColumnNew:P_};Mn.bind(F_);const M_="_flexRow_1yf0y_1",j_="_spaceBetween_1yf0y_9",G_="_alignItemsToBaseline_1yf0y_12",B_="_alignItemsToFlexEnd_1yf0y_15",w_="_justifyItemsToFlexEnd_1yf0y_18",V_="_wrap_1yf0y_21",H_={flexRow:M_,spaceBetween:j_,alignItemsToBaseline:G_,alignItemsToFlexEnd:B_,justifyItemsToFlexEnd:w_,wrap:V_};Mn.bind(H_);const U_="_flexContainer_1dk1o_1",q_="_fluid_1dk1o_6",x_="_fullHeight_1dk1o_9",Y_="_flexWrap_1dk1o_17",C_={flexContainer:U_,fluid:q_,fullHeight:x_,flexWrap:Y_};Mn.bind(C_);pn(Jr);const $_="_row_1lxv9_1",J_="_harHover_1lxv9_4",W_="_rowHeader_1lxv9_7",z_="_grayHeader_1lxv9_12",Z_="_rowContent_1lxv9_15",X_="_selected_1lxv9_18",Q_="_bold_1lxv9_22",eb="_dashedBottomBorder_1lxv9_25",nb="_solidBottomBorder_1lxv9_28",rb="_apLeftBorder_1lxv9_31",tb="_noBottomBorder_1lxv9_34",yg={row:$_,harHover:J_,rowHeader:W_,grayHeader:z_,rowContent:Z_,selected:X_,bold:Q_,dashedBottomBorder:eb,solidBottomBorder:nb,apLeftBorder:rb,noBottomBorder:tb},ab=Mn.bind(yg),ib=(e,i,t)=>a=>{e&&a.button===0&&e(a,i,t)},cg=e=>e.tagName==="TR"?e:cg(e.parentElement),$d=(e,i)=>{const t=cg(e.target),a=(i?t.nextSibling:t.previousSibling)||t;a&&(a.focus(),e.preventDefault())},sb=(e,i,t,a)=>s=>{s.key==="ArrowDown"?$d(s,!0):s.key==="ArrowUp"?$d(s,!1):i&&s.target.tagName!=="TD"&&(s.key==="Enter"||s.key===" ")?(i(s,t,a),s.preventDefault()):e&&i&&s.target.tagName!=="TD"&&s.key==="Shift"&&(i(s),s.preventDefault())},ob=e=>i=>{e&&i.target.tagName!=="TD"&&i.key==="Shift"&&(e(i),i.preventDefault())},lb=({id:e,model:i,isHeader:t=!1,hasGrayHeader:a=!1,onMouseDown:s,onKeyDown:l,children:d,noHover:k=!1,isSelected:v=!1,isBold:T=!1,isDashedBottomBorder:f=!1,isSolidBottomBorder:h=!1,isApLeftBorder:y=!1,className:K,useMultiselect:j=!1,hasNoBottomBorder:R=!1})=>Xe.jsx("tr",{className:ab(K,yg.row,{rowHeader:t,grayHeader:a,rowContent:!t&&!k,selected:v,harHover:!k,bold:T,dashedBottomBorder:f,solidBottomBorder:h,noBottomBorder:R,apLeftBorder:y}),onMouseDown:ib(s,e,i),onKeyDown:sb(j,l,e,i),onKeyUp:j?ob(l):void 0,tabIndex:0,children:d}),ub="_columnStyle_1f13u_1",Rg={columnStyle:ub},db=Mn.bind(Rg),$s=({children:e="",className:i,hidden:t=!1,colspanAll:a=!1})=>t?null:Xe.jsx("td",{className:db(Rg.columnStyle,i),colSpan:a?100:void 0,children:e}),kb="_table_2cnpl_1",gb="_rowHover_2cnpl_25",vb={table:kb,rowHover:gb},Eb=Mn.bind(vb),fb="EMPTY",mb=Y.forwardRef(({headerTextCodes:e=[],headerColumnContent:i=[],classNameTable:t="",noHover:a=!1,hasGrayHeader:s=!1,children:l},d)=>Xe.jsxs("table",{ref:d,className:Eb("table",{[t]:t,rowHover:!a}),children:[Xe.jsx("thead",{children:Xe.jsxs(lb,{isHeader:!0,noHover:a,hasGrayHeader:s,children:[e.map(k=>typeof k=="string"&&k.startsWith(fb)?Xe.jsx($s,{children:" "},k):Xe.jsx($s,{children:Xe.jsx(Ie,{id:k})},k)),i.map(k=>Xe.jsx($s,{children:k},k.key))]})}),Xe.jsx("tbody",{children:Array.isArray(l)?Y.Children.map(l,k=>Y.cloneElement(k,{noHover:a})):Y.cloneElement(l,{noHover:a})})]}));mb.displayName="Table";const Tb="_hidden_1pb4f_1",pb="_active_1pb4f_8",hb="_activeRow_1pb4f_15 _active_1pb4f_8",Ab="_toggleIcon_1pb4f_19",yb="_colTopPadding_1pb4f_22",cb={hidden:Tb,active:pb,activeRow:hb,toggleIcon:Ab,colTopPadding:yb};Mn.bind(cb);pn(Jr);const Rb="_fourPx_qda5k_1",_b="_eightPx_qda5k_4",bb="_sixteenPx_qda5k_7",Nb="_twentyPx_qda5k_10",Sb="_thirtyTwoPx_qda5k_13",Ib="_fourtyPx_qda5k_16",Ob={fourPx:Rb,eightPx:_b,sixteenPx:bb,twentyPx:Nb,thirtyTwoPx:Sb,fourtyPx:Ib};Mn.bind(Ob);pn(Jr);const Lb="_divider_1t980_1",Kb="_dividerParagraf_1t980_8",Db="_leftPanel_1t980_11",Pb="_rightPanel_1t980_14",Fb={divider:Lb,dividerParagraf:Kb,leftPanel:Db,rightPanel:Pb};Mn.bind(Fb);const Mb="_editedIcon_ulrjl_1",jb={editedIcon:Mb};Mn.bind(jb);const Gb={"InntektsmeldingFaktaPanel.ingen":"Ingen inntektsmeldinger er registrert","InntektsmeldingFaktaPanel.tabell.header.innsendt":"Innsendt","InntektsmeldingFaktaPanel.tabell.header.arbeidsgiver":"Arbeidsgiver","InntektsmeldingFaktaPanel.tabell.header.skjæringstidspunkt":"Startdato","InntektsmeldingFaktaPanel.tabell.header.månedsinntekt":"Månedsi.","InntektsmeldingFaktaPanel.tabell.header.behandling":"Behandling","InntektsmeldingFaktaPanel.tabell.cell.behandling.denne":"Denne","InntektsmeldingFaktaPanel.tabell.cell.behandling.andre":"Andre","InntektsmeldingFaktaPanel.tabell.cell.behandling.ingen":"Ingen","InntektsmeldingFaktaPanel.modal.heading":"All informasjon fra PDF’en er tilgjengelig i faktapanelet","InntektsmeldingFaktaPanel.modal.trigger":"Åpne PDF","InntektsmeldingFaktaPanel.modal.body":"PDF’en du skal åpne inneholder ikke noe annet enn det som står i faktapanelet. Du kan likevel åpne den hvis du ønsker det.","InntektsmeldingFaktaPanel.modal.button.primary":"Last ned som PDF","InntektsmeldingFaktaPanel.modal.button.secondary":"Avbryt","InntektsmeldingFaktaPanel.behandling.heading":"Behandling","InntektsmeldingFaktaPanel.behandling.bruktKunIDenne":"Brukt i denne behandlingen","InntektsmeldingFaktaPanel.behandling.ikkeBruktINoen":"Ikke brukt i noen behandlinger","InntektsmeldingFaktaPanel.behandling.bruktIAndre":"Brukt i andre behandlinger","InntektsmeldingFaktaPanel.behandling.bruktIDenneOgFlere":"Brukt i denne og andre behandlinger","InntektsmeldingFaktaPanel.behandling.opprettet":"Opprettet","InntektsmeldingFaktaPanel.behandling.avsluttet":"Avsluttet","InntektsmeldingFaktaPanel.innsendingstidspunkt":"Inntektsmelding sendt","InntektsmeldingFaktaPanel.arbeidsgiver.heading":"Arbeidsgiver","InntektsmeldingFaktaPanel.arbeidsgiver.navn":"Virksomhetsnavn","InntektsmeldingFaktaPanel.arbeidsgiver.underenhet":"Org.nr. for underenhet","InntektsmeldingFaktaPanel.kontaktperson.heading":"Kontaktperson fra arbeidsgiver","InntektsmeldingFaktaPanel.kontaktperson.navn":"Navn","InntektsmeldingFaktaPanel.kontaktperson.telefon":"Telefonnummer","InntektsmeldingFaktaPanel.månedsinntekt.heading":"Månedsinntekt","InntektsmeldingFaktaPanel.startDato.heading":"Første dag med {ytelse}","InntektsmeldingFaktaPanel.startDato.fraArbeidsgiver":"Oppgitt av arbeidsgiver","InntektsmeldingFaktaPanel.kilde.heading":"Kilde","InntektsmeldingFaktaPanel.kilde.nav":"Nav","InntektsmeldingFaktaPanel.kilde.altinn":"Altinn","InntektsmeldingFaktaPanel.kilde.lps":"Arbeidsgiver sitt lønns- og personalsystem(LPS)","InntektsmeldingFaktaPanel.refusjon.heading":"Refusjon","InntektsmeldingFaktaPanel.refusjon.ingen":"Ingen refusjon","InntektsmeldingFaktaPanel.refusjon.endring.periode":"Refusjonsbeløp på {kroner} fra {fom}","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.heading":"Naturalytelser som faller bort","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.ingen":"Ingen","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.fom":"Fra og med","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.tom":"Til og med","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.verdi":"Verdi pr måned"};var Bo=(e=>(e.ARBEID_TYPE="ArbeidType",e.AVSLAGSARSAK="Avslagsårsak",e.VENT_AARSAK="Venteårsak",e.BEHANDLING_AARSAK="BehandlingÅrsakType",e.KLAGE_AVVIST_AARSAK="KlageAvvistÅrsak",e.KLAGE_MEDHOLD_ARSAK="KlageMedholdÅrsak",e.KLAGE_HJEMMEL="KlageHjemmel",e.OMSORGSOVERTAKELSE_VILKAR_TYPE="OmsorgsovertakelseVilkårType",e.MEDLEMSKAP_MANUELL_VURDERING_TYPE="MedlemskapManuellVurderingType",e.VERGE_TYPE="VergeType",e.LANDKODER="Landkoder",e.MORS_AKTIVITET="MorsAktivitet",e.VIRKSOMHET_TYPE="VirksomhetType",e.OVERFOERING_AARSAK_TYPE="OverføringÅrsak",e.PERSONSTATUS_TYPE="PersonstatusType",e.FAGSAK_STATUS="FagsakStatus",e.FAGSAK_YTELSE="FagsakYtelseType",e.FORELDRE_TYPE="ForeldreType",e.FAMILIE_HENDELSE_TYPE="FamilieHendelseType",e.INNSYN_RESULTAT_TYPE="InnsynResultatType",e.BEHANDLING_TYPE="BehandlingType",e.OPPHOLD_ARSAK="OppholdÅrsak",e.UTSETTELSE_AARSAK_TYPE="UtsettelseÅrsak",e.OPPTJENING_AKTIVITET_TYPE="OpptjeningAktivitetType",e.UTTAK_PERIODE_TYPE="UttakPeriodeType",e.REVURDERING_VARSLING_ÅRSAK="RevurderingVarslingÅrsak",e.MANUELL_BEHANDLING_AARSAK="ManuellBehandlingÅrsak",e.PERIODE_RESULTAT_AARSAK="PeriodeResultatÅrsak",e.INNTEKTSKATEGORI="Inntektskategori",e.BEREGNINGSGRUNNLAG_ANDELTYPER="BeregningsgrunnlagAndeltype",e.AKTIVITET_STATUS="AktivitetStatus",e.ARBEIDSKATEGORI="Arbeidskategori",e.FAGSYSTEM="Fagsystem",e.REGION="Region",e.SIVILSTAND_TYPE="SivilstandType",e.FAKTA_OM_BEREGNING_TILFELLE="FaktaOmBeregningTilfelle",e.GRADERING_AVSLAG_AARSAK="GraderingAvslagÅrsak",e.SKJERMLENKE_TYPE="SkjermlenkeType",e.BEHANDLING_RESULTAT_TYPE="BehandlingResultatType",e.ARBEIDSFORHOLD_HANDLING_TYPE="ArbeidsforholdHandlingType",e.HISTORIKK_OPPLYSNING_TYPE="HistorikkOpplysningType",e.HISTORIKK_ENDRET_FELT_TYPE="HistorikkEndretFeltType",e.HISTORIKKINNSLAG_TYPE="HistorikkinnslagType",e.HISTORIKK_AKTOER="HistorikkAktør",e.BEHANDLING_STATUS="BehandlingStatus",e.FAR_SOEKER_TYPE="FarSøkerType",e.MEDLEMSKAP_DEKNING="MedlemskapDekningType",e.MEDLEMSKAP_TYPE="MedlemskapType",e.STOENADSKONTOTYPE="StønadskontoType",e.KONSEKVENS_FOR_YTELSEN="KonsekvensForYtelsen",e.UTTAK_ARBEID_TYPE="UttakArbeidType",e.UTTAK_UTSETTELSE_TYPE="UttakUtsettelseType",e.VILKAR_TYPE="VilkårType",e.AKTSOMHET="Aktsomhet",e.VURDERING="AnnenVurdering",e.VEDTAK_RESULTAT_TYPE="VedtakResultatType",e.PERMISJONSBESKRIVELSE_TYPE="PermisjonsbeskrivelseType",e.VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG="VurderArbeidsforholdHistorikkinnslag",e.TILBAKEKR_VIDERE_BEH="VidereBehandling",e.VURDER_AARSAK="VurderÅrsak",e.ANKE_OMGJOER_AARSAK="AnkeOmgjørÅrsak",e.AKTIVITETSKRAV_AVKLARING="KontrollerAktivitetskravAvklaring",e.OPPHOLDSTILLATELSE_TYPE="OppholdstillatelseType",e.FARESIGNAL_VURDERING="FaresignalVurdering",e.FORDELING_PERIODE_KILDE="FordelingPeriodeKilde",e.RELASJONSROLLE_TYPE="RelasjonsRolleType",e.FAGSAK_MARKERING="FagsakMarkering",e.ADRESSE_TYPE="AdresseType",e.NATURAL_YTELSE_TYPE="NaturalYtelseType",e))(Bo||{});const Bb=(e,i,t,a)=>{let s=e[i];if(!s||s.length===0)return"";const l=s.find(d=>d.kode===t);return l?l.navn:""},wb="_behandlingCircleIngen_giqi4_1",Vb="_behandlingCircleDenne_giqi4_5",Hb="_behandlingCircleAndre_giqi4_9",Ub="_container_giqi4_13",qb="_ingenInntektsmeldinger_giqi4_20",zt={behandlingCircleIngen:wb,behandlingCircleDenne:Vb,behandlingCircleAndre:Hb,container:Ub,ingenInntektsmeldinger:qb},yr=({tittel:e,children:i})=>M.jsxs(ft,{children:[M.jsx(So,{size:"medium",children:e}),i]});yr.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingInfoBlokk",props:{tittel:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const _g=({inntektsmelding:e,behandling:i,alleBehandlinger:t,alleKodeverk:a})=>{const s=er(),l=e.tilknyttedeBehandlingIder.includes(i.uuid),d=t.filter(T=>e.tilknyttedeBehandlingIder.includes(T.uuid)),k=(()=>{const T=d.length;return l&&T>1?M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.behandling.bruktIDenneOgFlere"}):l?M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.behandling.bruktKunIDenne"}):T===0?M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.behandling.ikkeBruktINoen"}):M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.behandling.bruktIAndre"})})(),v=[...d].sort((T,f)=>new Date(T.opprettet).getTime()-new Date(f.opprettet).getTime());return M.jsxs(yr,{tittel:s.formatMessage({id:"InntektsmeldingFaktaPanel.behandling.heading"}),children:[k,M.jsx(no,{children:v.map(T=>{var f;return M.jsx(no.Item,{children:M.jsxs(ft,{children:[M.jsx("span",{children:(f=a.BehandlingType.find(({kode:h})=>h===T.type))==null?void 0:f.navn}),M.jsxs("span",{children:[M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.behandling.opprettet"})," ",M.jsx(Qa,{dateTimeString:T.opprettet,separator:"kl"})]}),T.avsluttet?M.jsxs("span",{children:[M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.behandling.avsluttet"})," ",M.jsx(Qa,{dateTimeString:T.avsluttet,separator:"kl"})]}):null]})},T.uuid)})})]})};_g.__docgenInfo={description:"",methods:[],displayName:"BehandlingsOversikt",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const xb="Dato må være før eller lik {limit}",Yb="Dato må være etter eller lik {limit}",Cb="Perioder kan ikke overlappe i tid",$b="Perioder kan ikke overlappe i tid (uttak, utsettelse, gradering, overforing, opphold)",Jb="Dato må være lik {value}",Wb="Dato må skrives slik: dd.mm.åååå",zb="Periode må skrives slik: dd.mm.åååå - dd.mm.åååå",Zb="Tallet kan ikke inneholde mer enn to desimaler",Xb="Tallet kan ikke ha desimaler",Qb="Feltet kan kun inneholde tall",eN="Ugyldig fødselsnummer",nN="Feltet må være et fødselsnummer (11 siffer)",rN="Ugyldig organisasjonsnummer.",tN="Ugyldig organisasjonsnummer eller fødselsnummer",aN="Startdato må være før eller lik sluttdato",iN="Periode er utenfor opptjeningsperioden",sN="Ugyldig saksnummer eller fødselsnummer",oN="Feltet inneholder ugyldige tegn: {text}",lN="Feltet inneholder en ugyldig verdi: {value}",uN="Feltet kan ikke inneholde mellomrom",dN="Feltet må fylles ut",kN="Du kan skrive maksimalt {length} tegn",gN="Du må skrive minst {length} tegn",vN="Du kan skrive maksimalt {length} tegn eller et fødselsnummer (11 siffer)",EN="Feltet må være mindre eller lik {length}",fN="Feltet må være større eller lik {length}",mN="Fødselsnummer til den andre forelderen kan ikke være det samme som søker",TN={DateNotBeforeOrEqual:xb,DateNotAfterOrEqual:Yb,DateRangesOverlapping:Cb,DateRangesOverlappingPeriodTypes:$b,DatesNotEqual:Jb,InvalidDate:Wb,InvalidDatesInPeriod:zb,InvalidDecimal:Zb,InvalidInteger:Xb,InvalidNumber:Qb,InvalidFodselsnr:eN,InvalidFodselsnrFormat:nN,InvalidOrgnr:rN,InvalidOrgnrOrFodselsnr:tN,InvalidPeriod:aN,InvalidPeriodRange:iN,InvalidSaksnrOrFodselsnrFormat:sN,InvalidText:oN,InvalidValue:lN,IllegalWhiteSpace:uN,IsRequired:dN,MaxLength:kN,MinLength:gN,MaxLengthOrFodselsnr:vN,MaxValue:EN,MinValue:fN,SammeFodselsnrSomSoker:mN};pn(TN);var bg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ng(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Sg={exports:{}};(function(e,i){(function(t,a){e.exports=a()})(bg,function(){return function(t,a){a.prototype.isSameOrAfter=function(s,l){return this.isSame(s,l)||this.isAfter(s,l)}}})})(Sg);var pN=Sg.exports;const hN=Ng(pN);var Ig={exports:{}};(function(e,i){(function(t,a){e.exports=a()})(bg,function(){return function(t,a){a.prototype.isSameOrBefore=function(s,l){return this.isSame(s,l)||this.isBefore(s,l)}}})})(Ig);var AN=Ig.exports;const yN=Ng(AN);Kr.extend(hN);Kr.extend(yN);var cN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function RN(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var xt={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jd;function _N(){if(Jd)return xt;Jd=1;var e=Y,i=Symbol.for("react.element"),t=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(k,v,T){var f,h={},y=null,K=null;T!==void 0&&(y=""+T),v.key!==void 0&&(y=""+v.key),v.ref!==void 0&&(K=v.ref);for(f in v)a.call(v,f)&&!l.hasOwnProperty(f)&&(h[f]=v[f]);if(k&&k.defaultProps)for(f in v=k.defaultProps,v)h[f]===void 0&&(h[f]=v[f]);return{$$typeof:i,type:k,key:y,ref:K,props:h,_owner:s.current}}return xt.Fragment=t,xt.jsx=d,xt.jsxs=d,xt}_N();var Og={exports:{}};(function(e,i){(function(t,a){e.exports=a()})(cN,function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},a=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,s=/\d/,l=/\d\d/,d=/\d\d?/,k=/\d*[^-_:/,()\s\d]+/,v={},T=function(N){return(N=+N)+(N>68?1900:2e3)},f=function(N){return function(D){this[N]=+D}},h=[/[+-]\d\d:?(\d\d)?|Z/,function(N){(this.zone||(this.zone={})).offset=function(D){if(!D||D==="Z")return 0;var q=D.match(/([+-]|\d\d)/g),L=60*q[1]+(+q[2]||0);return L===0?0:q[0]==="+"?-L:L}(N)}],y=function(N){var D=v[N];return D&&(D.indexOf?D:D.s.concat(D.f))},K=function(N,D){var q,L=v.meridiem;if(L){for(var Q=1;Q<=24;Q+=1)if(N.indexOf(L(Q,0,D))>-1){q=Q>12;break}}else q=N===(D?"pm":"PM");return q},j={A:[k,function(N){this.afternoon=K(N,!1)}],a:[k,function(N){this.afternoon=K(N,!0)}],Q:[s,function(N){this.month=3*(N-1)+1}],S:[s,function(N){this.milliseconds=100*+N}],SS:[l,function(N){this.milliseconds=10*+N}],SSS:[/\d{3}/,function(N){this.milliseconds=+N}],s:[d,f("seconds")],ss:[d,f("seconds")],m:[d,f("minutes")],mm:[d,f("minutes")],H:[d,f("hours")],h:[d,f("hours")],HH:[d,f("hours")],hh:[d,f("hours")],D:[d,f("day")],DD:[l,f("day")],Do:[k,function(N){var D=v.ordinal,q=N.match(/\d+/);if(this.day=q[0],D)for(var L=1;L<=31;L+=1)D(L).replace(/\[|\]/g,"")===N&&(this.day=L)}],w:[d,f("week")],ww:[l,f("week")],M:[d,f("month")],MM:[l,f("month")],MMM:[k,function(N){var D=y("months"),q=(y("monthsShort")||D.map(function(L){return L.slice(0,3)})).indexOf(N)+1;if(q<1)throw new Error;this.month=q%12||q}],MMMM:[k,function(N){var D=y("months").indexOf(N)+1;if(D<1)throw new Error;this.month=D%12||D}],Y:[/[+-]?\d+/,f("year")],YY:[l,function(N){this.year=T(N)}],YYYY:[/\d{4}/,f("year")],Z:h,ZZ:h};function R(N){var D,q;D=N,q=v&&v.formats;for(var L=(N=D.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(W,x,te){var le=te&&te.toUpperCase();return x||q[te]||t[te]||q[le].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(J,H,U){return H||U.slice(1)})})).match(a),Q=L.length,O=0;O<Q;O+=1){var V=L[O],I=j[V],b=I&&I[0],$=I&&I[1];L[O]=$?{regex:b,parser:$}:V.replace(/^\[|\]$/g,"")}return function(W){for(var x={},te=0,le=0;te<Q;te+=1){var J=L[te];if(typeof J=="string")le+=J.length;else{var H=J.regex,U=J.parser,Z=W.slice(le),C=H.exec(Z)[0];U.call(x,C),W=W.replace(C,"")}}return function(ie){var se=ie.afternoon;if(se!==void 0){var ue=ie.hours;se?ue<12&&(ie.hours+=12):ue===12&&(ie.hours=0),delete ie.afternoon}}(x),x}}return function(N,D,q){q.p.customParseFormat=!0,N&&N.parseTwoDigitYear&&(T=N.parseTwoDigitYear);var L=D.prototype,Q=L.parse;L.parse=function(O){var V=O.date,I=O.utc,b=O.args;this.$u=I;var $=b[1];if(typeof $=="string"){var W=b[2]===!0,x=b[3]===!0,te=W||x,le=b[2];x&&(le=b[2]),v=this.$locale(),!W&&le&&(v=q.Ls[le]),this.$d=function(Z,C,ie,se){try{if(["x","X"].indexOf(C)>-1)return new Date((C==="X"?1e3:1)*Z);var ue=R(C)(Z),Pe=ue.year,je=ue.month,Je=ue.day,xe=ue.hours,_n=ue.minutes,Cn=ue.seconds,bn=ue.milliseconds,sn=ue.zone,We=ue.week,rn=new Date,hn=Je||(Pe||je?1:rn.getDate()),$n=Pe||rn.getFullYear(),on=0;Pe&&!je||(on=je>0?je-1:rn.getMonth());var rr,yt=xe||0,Nn=_n||0,zr=Cn||0,ct=bn||0;return sn?new Date(Date.UTC($n,on,hn,yt,Nn,zr,ct+60*sn.offset*1e3)):ie?new Date(Date.UTC($n,on,hn,yt,Nn,zr,ct)):(rr=new Date($n,on,hn,yt,Nn,zr,ct),We&&(rr=se(rr).week(We).toDate()),rr)}catch{return new Date("")}}(V,$,I,q),this.init(),le&&le!==!0&&(this.$L=this.locale(le).$L),te&&V!=this.format($)&&(this.$d=new Date("")),v={}}else if($ instanceof Array)for(var J=$.length,H=1;H<=J;H+=1){b[1]=$[H-1];var U=q.apply(this,b);if(U.isValid()){this.$d=U.$d,this.$L=U.$L,this.init();break}H===J&&(this.$d=new Date(""))}else Q.call(this,O)}}})})(Og);var bN=Og.exports;const NN=RN(bN);Kr.extend(NN);const mi={"AdresseVisning.Adresse":"Adresse","ForelderPanel.Soker":"Søker","ForelderPanel.AnnenForelder":"Annen forelder","AlleBarnPanel.Barn":"Barn","AlleBarnPanel.BarnNr":"Barn {nummer}","AlleBarnPanel.Fodt":"Født","AlleBarnPanel.Dod":"Død","PersonPanel.RolleOgNavn":"{rolle, select, BRUKER {Søker, } ANNEN_PART {Den andre forelderen, } BARN {Barnet, } other {} }{navn}","PersonPanel.Beskrivelse.Bruker":"Adresser for søker registrert i folkeregisteret gyldige for de siste 12 månedene","PersonPanel.Beskrivelse.Barn":"Adresser for barnet registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Beskrivelse.Annenpart":"Adresser for den andre forelderen registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Fodt":"Født {dato}","PersonPanel.Dod":"Død {dato}","AdresseTabell.IngenAdresse":"Ingen adresser funnet for {erAnnenpart, select, true {den andre forelderen} other {søker} }.","AdresseTabell.SammeAdresse":"Den andre forelderen har samme adresse som søker på skjæringstidspunktet","AdresseTabell.PeriodeLabel":"Periode","AdresseTabell.AdresseLabel":"Adresse","AdresseTabell.TypeLabel":"Type","MerkePanel.Dod":"DØD","MerkePanel.DodTittel":"Personen er død","MerkePanel.DodFodt":"DØDFØDT","MerkePanel.Diskresjon6":"Kode 6","MerkePanel.Diskresjon7":"Kode 7","MerkePanel.EgenAnsatt":"Nav","MerkePanel.Verge":"Verge","MerkePanel.Diskresjon6Tittel":"Personen har diskresjonsmerking kode 6","MerkePanel.Diskresjon7Tittel":"Personen har diskresjonsmerking kode 7","MerkePanel.EgenAnsattTittel":"Personen er ansatt i Nav","MerkePanel.VergeTittel":"Personen har verge","SubmitButton.ConfirmInformation":"Bekreft og fortsett","FaktaBegrunnelseTextField.BegrunnEndringene":"Begrunn endringene","FaktaBegrunnelseTextField.Vurdering":"Vurdering","FaktaBegrunnelseTextField.Begrunnelse":"Begrunnelse","FaktaKilde.Soknad":"FRA SØKNADEN","FaktaKilde.FREG":"FRA FOLKEREGISTERET","FaktaKilde.MEDL":"FRA MEDLEMSKAPSREGISTERET"};pn(mi);pn(mi);const SN=(e,i)=>{const t=new Date(e.tom??pt),a=new Date(i.tom??pt);if(t>a)return-1;if(t<a)return 1;if(e.fom&&!i.fom)return-1;if(!e.fom&&i.fom)return 1;if(e.fom&&i.fom){const s=new Date(e.fom),l=new Date(i.fom);if(s>l)return-1;if(s<l)return 1}return 0};var ei={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ei.exports;(function(e,i){(function(){var t,a="4.17.21",s=200,l="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",d="Expected a function",k="Invalid `variable` option passed into `_.template`",v="__lodash_hash_undefined__",T=500,f="__lodash_placeholder__",h=1,y=2,K=4,j=1,R=2,N=1,D=2,q=4,L=8,Q=16,O=32,V=64,I=128,b=256,$=512,W=30,x="...",te=800,le=16,J=1,H=2,U=3,Z=1/0,C=9007199254740991,ie=17976931348623157e292,se=NaN,ue=4294967295,Pe=ue-1,je=ue>>>1,Je=[["ary",I],["bind",N],["bindKey",D],["curry",L],["curryRight",Q],["flip",$],["partial",O],["partialRight",V],["rearg",b]],xe="[object Arguments]",_n="[object Array]",Cn="[object AsyncFunction]",bn="[object Boolean]",sn="[object Date]",We="[object DOMException]",rn="[object Error]",hn="[object Function]",$n="[object GeneratorFunction]",on="[object Map]",rr="[object Number]",yt="[object Null]",Nn="[object Object]",zr="[object Promise]",ct="[object Proxy]",Rt="[object RegExp]",Jn="[object Set]",_t="[object String]",aa="[object Symbol]",Iv="[object Undefined]",bt="[object WeakMap]",Ov="[object WeakSet]",Nt="[object ArrayBuffer]",Zr="[object DataView]",yi="[object Float32Array]",ci="[object Float64Array]",Ri="[object Int8Array]",_i="[object Int16Array]",bi="[object Int32Array]",Ni="[object Uint8Array]",Si="[object Uint8ClampedArray]",Ii="[object Uint16Array]",Oi="[object Uint32Array]",Lv=/\b__p \+= '';/g,Kv=/\b(__p \+=) '' \+/g,Dv=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Yo=/&(?:amp|lt|gt|quot|#39);/g,Co=/[&<>"']/g,Pv=RegExp(Yo.source),Fv=RegExp(Co.source),Mv=/<%-([\s\S]+?)%>/g,jv=/<%([\s\S]+?)%>/g,$o=/<%=([\s\S]+?)%>/g,Gv=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Bv=/^\w*$/,wv=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Li=/[\\^$.*+?()[\]{}|]/g,Vv=RegExp(Li.source),Ki=/^\s+/,Hv=/\s/,Uv=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,qv=/\{\n\/\* \[wrapped with (.+)\] \*/,xv=/,? & /,Yv=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Cv=/[()=,{}\[\]\/\s]/,$v=/\\(\\)?/g,Jv=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Jo=/\w*$/,Wv=/^[-+]0x[0-9a-f]+$/i,zv=/^0b[01]+$/i,Zv=/^\[object .+?Constructor\]$/,Xv=/^0o[0-7]+$/i,Qv=/^(?:0|[1-9]\d*)$/,eE=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ia=/($^)/,nE=/['\n\r\u2028\u2029\\]/g,sa="\\ud800-\\udfff",rE="\\u0300-\\u036f",tE="\\ufe20-\\ufe2f",aE="\\u20d0-\\u20ff",Wo=rE+tE+aE,zo="\\u2700-\\u27bf",Zo="a-z\\xdf-\\xf6\\xf8-\\xff",iE="\\xac\\xb1\\xd7\\xf7",sE="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",oE="\\u2000-\\u206f",lE=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Xo="A-Z\\xc0-\\xd6\\xd8-\\xde",Qo="\\ufe0e\\ufe0f",el=iE+sE+oE+lE,Di="['’]",uE="["+sa+"]",nl="["+el+"]",oa="["+Wo+"]",rl="\\d+",dE="["+zo+"]",tl="["+Zo+"]",al="[^"+sa+el+rl+zo+Zo+Xo+"]",Pi="\\ud83c[\\udffb-\\udfff]",kE="(?:"+oa+"|"+Pi+")",il="[^"+sa+"]",Fi="(?:\\ud83c[\\udde6-\\uddff]){2}",Mi="[\\ud800-\\udbff][\\udc00-\\udfff]",Xr="["+Xo+"]",sl="\\u200d",ol="(?:"+tl+"|"+al+")",gE="(?:"+Xr+"|"+al+")",ll="(?:"+Di+"(?:d|ll|m|re|s|t|ve))?",ul="(?:"+Di+"(?:D|LL|M|RE|S|T|VE))?",dl=kE+"?",kl="["+Qo+"]?",vE="(?:"+sl+"(?:"+[il,Fi,Mi].join("|")+")"+kl+dl+")*",EE="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",fE="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",gl=kl+dl+vE,mE="(?:"+[dE,Fi,Mi].join("|")+")"+gl,TE="(?:"+[il+oa+"?",oa,Fi,Mi,uE].join("|")+")",pE=RegExp(Di,"g"),hE=RegExp(oa,"g"),ji=RegExp(Pi+"(?="+Pi+")|"+TE+gl,"g"),AE=RegExp([Xr+"?"+tl+"+"+ll+"(?="+[nl,Xr,"$"].join("|")+")",gE+"+"+ul+"(?="+[nl,Xr+ol,"$"].join("|")+")",Xr+"?"+ol+"+"+ll,Xr+"+"+ul,fE,EE,rl,mE].join("|"),"g"),yE=RegExp("["+sl+sa+Wo+Qo+"]"),cE=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,RE=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],_E=-1,Ge={};Ge[yi]=Ge[ci]=Ge[Ri]=Ge[_i]=Ge[bi]=Ge[Ni]=Ge[Si]=Ge[Ii]=Ge[Oi]=!0,Ge[xe]=Ge[_n]=Ge[Nt]=Ge[bn]=Ge[Zr]=Ge[sn]=Ge[rn]=Ge[hn]=Ge[on]=Ge[rr]=Ge[Nn]=Ge[Rt]=Ge[Jn]=Ge[_t]=Ge[bt]=!1;var Me={};Me[xe]=Me[_n]=Me[Nt]=Me[Zr]=Me[bn]=Me[sn]=Me[yi]=Me[ci]=Me[Ri]=Me[_i]=Me[bi]=Me[on]=Me[rr]=Me[Nn]=Me[Rt]=Me[Jn]=Me[_t]=Me[aa]=Me[Ni]=Me[Si]=Me[Ii]=Me[Oi]=!0,Me[rn]=Me[hn]=Me[bt]=!1;var bE={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},NE={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},SE={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},IE={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},OE=parseFloat,LE=parseInt,vl=typeof Ut=="object"&&Ut&&Ut.Object===Object&&Ut,KE=typeof self=="object"&&self&&self.Object===Object&&self,tn=vl||KE||Function("return this")(),Gi=i&&!i.nodeType&&i,Fr=Gi&&!0&&e&&!e.nodeType&&e,El=Fr&&Fr.exports===Gi,Bi=El&&vl.process,jn=function(){try{var c=Fr&&Fr.require&&Fr.require("util").types;return c||Bi&&Bi.binding&&Bi.binding("util")}catch{}}(),fl=jn&&jn.isArrayBuffer,ml=jn&&jn.isDate,Tl=jn&&jn.isMap,pl=jn&&jn.isRegExp,hl=jn&&jn.isSet,Al=jn&&jn.isTypedArray;function Sn(c,F,S){switch(S.length){case 0:return c.call(F);case 1:return c.call(F,S[0]);case 2:return c.call(F,S[0],S[1]);case 3:return c.call(F,S[0],S[1],S[2])}return c.apply(F,S)}function DE(c,F,S,X){for(var ge=-1,be=c==null?0:c.length;++ge<be;){var ze=c[ge];F(X,ze,S(ze),c)}return X}function Gn(c,F){for(var S=-1,X=c==null?0:c.length;++S<X&&F(c[S],S,c)!==!1;);return c}function PE(c,F){for(var S=c==null?0:c.length;S--&&F(c[S],S,c)!==!1;);return c}function yl(c,F){for(var S=-1,X=c==null?0:c.length;++S<X;)if(!F(c[S],S,c))return!1;return!0}function cr(c,F){for(var S=-1,X=c==null?0:c.length,ge=0,be=[];++S<X;){var ze=c[S];F(ze,S,c)&&(be[ge++]=ze)}return be}function la(c,F){var S=c==null?0:c.length;return!!S&&Qr(c,F,0)>-1}function wi(c,F,S){for(var X=-1,ge=c==null?0:c.length;++X<ge;)if(S(F,c[X]))return!0;return!1}function Ve(c,F){for(var S=-1,X=c==null?0:c.length,ge=Array(X);++S<X;)ge[S]=F(c[S],S,c);return ge}function Rr(c,F){for(var S=-1,X=F.length,ge=c.length;++S<X;)c[ge+S]=F[S];return c}function Vi(c,F,S,X){var ge=-1,be=c==null?0:c.length;for(X&&be&&(S=c[++ge]);++ge<be;)S=F(S,c[ge],ge,c);return S}function FE(c,F,S,X){var ge=c==null?0:c.length;for(X&&ge&&(S=c[--ge]);ge--;)S=F(S,c[ge],ge,c);return S}function Hi(c,F){for(var S=-1,X=c==null?0:c.length;++S<X;)if(F(c[S],S,c))return!0;return!1}var ME=Ui("length");function jE(c){return c.split("")}function GE(c){return c.match(Yv)||[]}function cl(c,F,S){var X;return S(c,function(ge,be,ze){if(F(ge,be,ze))return X=be,!1}),X}function ua(c,F,S,X){for(var ge=c.length,be=S+(X?1:-1);X?be--:++be<ge;)if(F(c[be],be,c))return be;return-1}function Qr(c,F,S){return F===F?WE(c,F,S):ua(c,Rl,S)}function BE(c,F,S,X){for(var ge=S-1,be=c.length;++ge<be;)if(X(c[ge],F))return ge;return-1}function Rl(c){return c!==c}function _l(c,F){var S=c==null?0:c.length;return S?xi(c,F)/S:se}function Ui(c){return function(F){return F==null?t:F[c]}}function qi(c){return function(F){return c==null?t:c[F]}}function bl(c,F,S,X,ge){return ge(c,function(be,ze,Fe){S=X?(X=!1,be):F(S,be,ze,Fe)}),S}function wE(c,F){var S=c.length;for(c.sort(F);S--;)c[S]=c[S].value;return c}function xi(c,F){for(var S,X=-1,ge=c.length;++X<ge;){var be=F(c[X]);be!==t&&(S=S===t?be:S+be)}return S}function Yi(c,F){for(var S=-1,X=Array(c);++S<c;)X[S]=F(S);return X}function VE(c,F){return Ve(F,function(S){return[S,c[S]]})}function Nl(c){return c&&c.slice(0,Ll(c)+1).replace(Ki,"")}function In(c){return function(F){return c(F)}}function Ci(c,F){return Ve(F,function(S){return c[S]})}function St(c,F){return c.has(F)}function Sl(c,F){for(var S=-1,X=c.length;++S<X&&Qr(F,c[S],0)>-1;);return S}function Il(c,F){for(var S=c.length;S--&&Qr(F,c[S],0)>-1;);return S}function HE(c,F){for(var S=c.length,X=0;S--;)c[S]===F&&++X;return X}var UE=qi(bE),qE=qi(NE);function xE(c){return"\\"+IE[c]}function YE(c,F){return c==null?t:c[F]}function et(c){return yE.test(c)}function CE(c){return cE.test(c)}function $E(c){for(var F,S=[];!(F=c.next()).done;)S.push(F.value);return S}function $i(c){var F=-1,S=Array(c.size);return c.forEach(function(X,ge){S[++F]=[ge,X]}),S}function Ol(c,F){return function(S){return c(F(S))}}function _r(c,F){for(var S=-1,X=c.length,ge=0,be=[];++S<X;){var ze=c[S];(ze===F||ze===f)&&(c[S]=f,be[ge++]=S)}return be}function da(c){var F=-1,S=Array(c.size);return c.forEach(function(X){S[++F]=X}),S}function JE(c){var F=-1,S=Array(c.size);return c.forEach(function(X){S[++F]=[X,X]}),S}function WE(c,F,S){for(var X=S-1,ge=c.length;++X<ge;)if(c[X]===F)return X;return-1}function zE(c,F,S){for(var X=S+1;X--;)if(c[X]===F)return X;return X}function nt(c){return et(c)?XE(c):ME(c)}function Wn(c){return et(c)?QE(c):jE(c)}function Ll(c){for(var F=c.length;F--&&Hv.test(c.charAt(F)););return F}var ZE=qi(SE);function XE(c){for(var F=ji.lastIndex=0;ji.test(c);)++F;return F}function QE(c){return c.match(ji)||[]}function ef(c){return c.match(AE)||[]}var nf=function c(F){F=F==null?tn:rt.defaults(tn.Object(),F,rt.pick(tn,RE));var S=F.Array,X=F.Date,ge=F.Error,be=F.Function,ze=F.Math,Fe=F.Object,Ji=F.RegExp,rf=F.String,Bn=F.TypeError,ka=S.prototype,tf=be.prototype,tt=Fe.prototype,ga=F["__core-js_shared__"],va=tf.toString,Le=tt.hasOwnProperty,af=0,Kl=function(){var n=/[^.]+$/.exec(ga&&ga.keys&&ga.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),Ea=tt.toString,sf=va.call(Fe),of=tn._,lf=Ji("^"+va.call(Le).replace(Li,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),fa=El?F.Buffer:t,br=F.Symbol,ma=F.Uint8Array,Dl=fa?fa.allocUnsafe:t,Ta=Ol(Fe.getPrototypeOf,Fe),Pl=Fe.create,Fl=tt.propertyIsEnumerable,pa=ka.splice,Ml=br?br.isConcatSpreadable:t,It=br?br.iterator:t,Mr=br?br.toStringTag:t,ha=function(){try{var n=Vr(Fe,"defineProperty");return n({},"",{}),n}catch{}}(),uf=F.clearTimeout!==tn.clearTimeout&&F.clearTimeout,df=X&&X.now!==tn.Date.now&&X.now,kf=F.setTimeout!==tn.setTimeout&&F.setTimeout,Aa=ze.ceil,ya=ze.floor,Wi=Fe.getOwnPropertySymbols,gf=fa?fa.isBuffer:t,jl=F.isFinite,vf=ka.join,Ef=Ol(Fe.keys,Fe),Ze=ze.max,ln=ze.min,ff=X.now,mf=F.parseInt,Gl=ze.random,Tf=ka.reverse,zi=Vr(F,"DataView"),Ot=Vr(F,"Map"),Zi=Vr(F,"Promise"),at=Vr(F,"Set"),Lt=Vr(F,"WeakMap"),Kt=Vr(Fe,"create"),ca=Lt&&new Lt,it={},pf=Hr(zi),hf=Hr(Ot),Af=Hr(Zi),yf=Hr(at),cf=Hr(Lt),Ra=br?br.prototype:t,Dt=Ra?Ra.valueOf:t,Bl=Ra?Ra.toString:t;function E(n){if(qe(n)&&!ve(n)&&!(n instanceof he)){if(n instanceof wn)return n;if(Le.call(n,"__wrapped__"))return wu(n)}return new wn(n)}var st=function(){function n(){}return function(r){if(!He(r))return{};if(Pl)return Pl(r);n.prototype=r;var o=new n;return n.prototype=t,o}}();function _a(){}function wn(n,r){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=t}E.templateSettings={escape:Mv,evaluate:jv,interpolate:$o,variable:"",imports:{_:E}},E.prototype=_a.prototype,E.prototype.constructor=E,wn.prototype=st(_a.prototype),wn.prototype.constructor=wn;function he(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ue,this.__views__=[]}function Rf(){var n=new he(this.__wrapped__);return n.__actions__=An(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=An(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=An(this.__views__),n}function _f(){if(this.__filtered__){var n=new he(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function bf(){var n=this.__wrapped__.value(),r=this.__dir__,o=ve(n),u=r<0,g=o?n.length:0,m=Gm(0,g,this.__views__),p=m.start,A=m.end,_=A-p,G=u?A:p-1,B=this.__iteratees__,w=B.length,z=0,re=ln(_,this.__takeCount__);if(!o||!u&&g==_&&re==_)return lu(n,this.__actions__);var de=[];e:for(;_--&&z<re;){G+=r;for(var fe=-1,ke=n[G];++fe<w;){var Te=B[fe],Ae=Te.iteratee,Kn=Te.type,gn=Ae(ke);if(Kn==H)ke=gn;else if(!gn){if(Kn==J)continue e;break e}}de[z++]=ke}return de}he.prototype=st(_a.prototype),he.prototype.constructor=he;function jr(n){var r=-1,o=n==null?0:n.length;for(this.clear();++r<o;){var u=n[r];this.set(u[0],u[1])}}function Nf(){this.__data__=Kt?Kt(null):{},this.size=0}function Sf(n){var r=this.has(n)&&delete this.__data__[n];return this.size-=r?1:0,r}function If(n){var r=this.__data__;if(Kt){var o=r[n];return o===v?t:o}return Le.call(r,n)?r[n]:t}function Of(n){var r=this.__data__;return Kt?r[n]!==t:Le.call(r,n)}function Lf(n,r){var o=this.__data__;return this.size+=this.has(n)?0:1,o[n]=Kt&&r===t?v:r,this}jr.prototype.clear=Nf,jr.prototype.delete=Sf,jr.prototype.get=If,jr.prototype.has=Of,jr.prototype.set=Lf;function kr(n){var r=-1,o=n==null?0:n.length;for(this.clear();++r<o;){var u=n[r];this.set(u[0],u[1])}}function Kf(){this.__data__=[],this.size=0}function Df(n){var r=this.__data__,o=ba(r,n);if(o<0)return!1;var u=r.length-1;return o==u?r.pop():pa.call(r,o,1),--this.size,!0}function Pf(n){var r=this.__data__,o=ba(r,n);return o<0?t:r[o][1]}function Ff(n){return ba(this.__data__,n)>-1}function Mf(n,r){var o=this.__data__,u=ba(o,n);return u<0?(++this.size,o.push([n,r])):o[u][1]=r,this}kr.prototype.clear=Kf,kr.prototype.delete=Df,kr.prototype.get=Pf,kr.prototype.has=Ff,kr.prototype.set=Mf;function gr(n){var r=-1,o=n==null?0:n.length;for(this.clear();++r<o;){var u=n[r];this.set(u[0],u[1])}}function jf(){this.size=0,this.__data__={hash:new jr,map:new(Ot||kr),string:new jr}}function Gf(n){var r=Ga(this,n).delete(n);return this.size-=r?1:0,r}function Bf(n){return Ga(this,n).get(n)}function wf(n){return Ga(this,n).has(n)}function Vf(n,r){var o=Ga(this,n),u=o.size;return o.set(n,r),this.size+=o.size==u?0:1,this}gr.prototype.clear=jf,gr.prototype.delete=Gf,gr.prototype.get=Bf,gr.prototype.has=wf,gr.prototype.set=Vf;function Gr(n){var r=-1,o=n==null?0:n.length;for(this.__data__=new gr;++r<o;)this.add(n[r])}function Hf(n){return this.__data__.set(n,v),this}function Uf(n){return this.__data__.has(n)}Gr.prototype.add=Gr.prototype.push=Hf,Gr.prototype.has=Uf;function zn(n){var r=this.__data__=new kr(n);this.size=r.size}function qf(){this.__data__=new kr,this.size=0}function xf(n){var r=this.__data__,o=r.delete(n);return this.size=r.size,o}function Yf(n){return this.__data__.get(n)}function Cf(n){return this.__data__.has(n)}function $f(n,r){var o=this.__data__;if(o instanceof kr){var u=o.__data__;if(!Ot||u.length<s-1)return u.push([n,r]),this.size=++o.size,this;o=this.__data__=new gr(u)}return o.set(n,r),this.size=o.size,this}zn.prototype.clear=qf,zn.prototype.delete=xf,zn.prototype.get=Yf,zn.prototype.has=Cf,zn.prototype.set=$f;function wl(n,r){var o=ve(n),u=!o&&Ur(n),g=!o&&!u&&Lr(n),m=!o&&!u&&!g&&dt(n),p=o||u||g||m,A=p?Yi(n.length,rf):[],_=A.length;for(var G in n)(r||Le.call(n,G))&&!(p&&(G=="length"||g&&(G=="offset"||G=="parent")||m&&(G=="buffer"||G=="byteLength"||G=="byteOffset")||mr(G,_)))&&A.push(G);return A}function Vl(n){var r=n.length;return r?n[ls(0,r-1)]:t}function Jf(n,r){return Ba(An(n),Br(r,0,n.length))}function Wf(n){return Ba(An(n))}function Xi(n,r,o){(o!==t&&!Zn(n[r],o)||o===t&&!(r in n))&&vr(n,r,o)}function Pt(n,r,o){var u=n[r];(!(Le.call(n,r)&&Zn(u,o))||o===t&&!(r in n))&&vr(n,r,o)}function ba(n,r){for(var o=n.length;o--;)if(Zn(n[o][0],r))return o;return-1}function zf(n,r,o,u){return Nr(n,function(g,m,p){r(u,g,o(g),p)}),u}function Hl(n,r){return n&&ar(r,Qe(r),n)}function Zf(n,r){return n&&ar(r,cn(r),n)}function vr(n,r,o){r=="__proto__"&&ha?ha(n,r,{configurable:!0,enumerable:!0,value:o,writable:!0}):n[r]=o}function Qi(n,r){for(var o=-1,u=r.length,g=S(u),m=n==null;++o<u;)g[o]=m?t:Ps(n,r[o]);return g}function Br(n,r,o){return n===n&&(o!==t&&(n=n<=o?n:o),r!==t&&(n=n>=r?n:r)),n}function Vn(n,r,o,u,g,m){var p,A=r&h,_=r&y,G=r&K;if(o&&(p=g?o(n,u,g,m):o(n)),p!==t)return p;if(!He(n))return n;var B=ve(n);if(B){if(p=wm(n),!A)return An(n,p)}else{var w=un(n),z=w==hn||w==$n;if(Lr(n))return ku(n,A);if(w==Nn||w==xe||z&&!g){if(p=_||z?{}:Lu(n),!A)return _?Im(n,Zf(p,n)):Sm(n,Hl(p,n))}else{if(!Me[w])return g?n:{};p=Vm(n,w,A)}}m||(m=new zn);var re=m.get(n);if(re)return re;m.set(n,p),id(n)?n.forEach(function(ke){p.add(Vn(ke,r,o,ke,n,m))}):td(n)&&n.forEach(function(ke,Te){p.set(Te,Vn(ke,r,o,Te,n,m))});var de=G?_?hs:ps:_?cn:Qe,fe=B?t:de(n);return Gn(fe||n,function(ke,Te){fe&&(Te=ke,ke=n[Te]),Pt(p,Te,Vn(ke,r,o,Te,n,m))}),p}function Xf(n){var r=Qe(n);return function(o){return Ul(o,n,r)}}function Ul(n,r,o){var u=o.length;if(n==null)return!u;for(n=Fe(n);u--;){var g=o[u],m=r[g],p=n[g];if(p===t&&!(g in n)||!m(p))return!1}return!0}function ql(n,r,o){if(typeof n!="function")throw new Bn(d);return Vt(function(){n.apply(t,o)},r)}function Ft(n,r,o,u){var g=-1,m=la,p=!0,A=n.length,_=[],G=r.length;if(!A)return _;o&&(r=Ve(r,In(o))),u?(m=wi,p=!1):r.length>=s&&(m=St,p=!1,r=new Gr(r));e:for(;++g<A;){var B=n[g],w=o==null?B:o(B);if(B=u||B!==0?B:0,p&&w===w){for(var z=G;z--;)if(r[z]===w)continue e;_.push(B)}else m(r,w,u)||_.push(B)}return _}var Nr=mu(tr),xl=mu(ns,!0);function Qf(n,r){var o=!0;return Nr(n,function(u,g,m){return o=!!r(u,g,m),o}),o}function Na(n,r,o){for(var u=-1,g=n.length;++u<g;){var m=n[u],p=r(m);if(p!=null&&(A===t?p===p&&!Ln(p):o(p,A)))var A=p,_=m}return _}function em(n,r,o,u){var g=n.length;for(o=Ee(o),o<0&&(o=-o>g?0:g+o),u=u===t||u>g?g:Ee(u),u<0&&(u+=g),u=o>u?0:od(u);o<u;)n[o++]=r;return n}function Yl(n,r){var o=[];return Nr(n,function(u,g,m){r(u,g,m)&&o.push(u)}),o}function an(n,r,o,u,g){var m=-1,p=n.length;for(o||(o=Um),g||(g=[]);++m<p;){var A=n[m];r>0&&o(A)?r>1?an(A,r-1,o,u,g):Rr(g,A):u||(g[g.length]=A)}return g}var es=Tu(),Cl=Tu(!0);function tr(n,r){return n&&es(n,r,Qe)}function ns(n,r){return n&&Cl(n,r,Qe)}function Sa(n,r){return cr(r,function(o){return Tr(n[o])})}function wr(n,r){r=Ir(r,n);for(var o=0,u=r.length;n!=null&&o<u;)n=n[ir(r[o++])];return o&&o==u?n:t}function $l(n,r,o){var u=r(n);return ve(n)?u:Rr(u,o(n))}function dn(n){return n==null?n===t?Iv:yt:Mr&&Mr in Fe(n)?jm(n):Wm(n)}function rs(n,r){return n>r}function nm(n,r){return n!=null&&Le.call(n,r)}function rm(n,r){return n!=null&&r in Fe(n)}function tm(n,r,o){return n>=ln(r,o)&&n<Ze(r,o)}function ts(n,r,o){for(var u=o?wi:la,g=n[0].length,m=n.length,p=m,A=S(m),_=1/0,G=[];p--;){var B=n[p];p&&r&&(B=Ve(B,In(r))),_=ln(B.length,_),A[p]=!o&&(r||g>=120&&B.length>=120)?new Gr(p&&B):t}B=n[0];var w=-1,z=A[0];e:for(;++w<g&&G.length<_;){var re=B[w],de=r?r(re):re;if(re=o||re!==0?re:0,!(z?St(z,de):u(G,de,o))){for(p=m;--p;){var fe=A[p];if(!(fe?St(fe,de):u(n[p],de,o)))continue e}z&&z.push(de),G.push(re)}}return G}function am(n,r,o,u){return tr(n,function(g,m,p){r(u,o(g),m,p)}),u}function Mt(n,r,o){r=Ir(r,n),n=Fu(n,r);var u=n==null?n:n[ir(Un(r))];return u==null?t:Sn(u,n,o)}function Jl(n){return qe(n)&&dn(n)==xe}function im(n){return qe(n)&&dn(n)==Nt}function sm(n){return qe(n)&&dn(n)==sn}function jt(n,r,o,u,g){return n===r?!0:n==null||r==null||!qe(n)&&!qe(r)?n!==n&&r!==r:om(n,r,o,u,jt,g)}function om(n,r,o,u,g,m){var p=ve(n),A=ve(r),_=p?_n:un(n),G=A?_n:un(r);_=_==xe?Nn:_,G=G==xe?Nn:G;var B=_==Nn,w=G==Nn,z=_==G;if(z&&Lr(n)){if(!Lr(r))return!1;p=!0,B=!1}if(z&&!B)return m||(m=new zn),p||dt(n)?Su(n,r,o,u,g,m):Fm(n,r,_,o,u,g,m);if(!(o&j)){var re=B&&Le.call(n,"__wrapped__"),de=w&&Le.call(r,"__wrapped__");if(re||de){var fe=re?n.value():n,ke=de?r.value():r;return m||(m=new zn),g(fe,ke,o,u,m)}}return z?(m||(m=new zn),Mm(n,r,o,u,g,m)):!1}function lm(n){return qe(n)&&un(n)==on}function as(n,r,o,u){var g=o.length,m=g,p=!u;if(n==null)return!m;for(n=Fe(n);g--;){var A=o[g];if(p&&A[2]?A[1]!==n[A[0]]:!(A[0]in n))return!1}for(;++g<m;){A=o[g];var _=A[0],G=n[_],B=A[1];if(p&&A[2]){if(G===t&&!(_ in n))return!1}else{var w=new zn;if(u)var z=u(G,B,_,n,r,w);if(!(z===t?jt(B,G,j|R,u,w):z))return!1}}return!0}function Wl(n){if(!He(n)||xm(n))return!1;var r=Tr(n)?lf:Zv;return r.test(Hr(n))}function um(n){return qe(n)&&dn(n)==Rt}function dm(n){return qe(n)&&un(n)==Jn}function km(n){return qe(n)&&xa(n.length)&&!!Ge[dn(n)]}function zl(n){return typeof n=="function"?n:n==null?Rn:typeof n=="object"?ve(n)?Ql(n[0],n[1]):Xl(n):pd(n)}function is(n){if(!wt(n))return Ef(n);var r=[];for(var o in Fe(n))Le.call(n,o)&&o!="constructor"&&r.push(o);return r}function gm(n){if(!He(n))return Jm(n);var r=wt(n),o=[];for(var u in n)u=="constructor"&&(r||!Le.call(n,u))||o.push(u);return o}function ss(n,r){return n<r}function Zl(n,r){var o=-1,u=yn(n)?S(n.length):[];return Nr(n,function(g,m,p){u[++o]=r(g,m,p)}),u}function Xl(n){var r=ys(n);return r.length==1&&r[0][2]?Du(r[0][0],r[0][1]):function(o){return o===n||as(o,n,r)}}function Ql(n,r){return Rs(n)&&Ku(r)?Du(ir(n),r):function(o){var u=Ps(o,n);return u===t&&u===r?Fs(o,n):jt(r,u,j|R)}}function Ia(n,r,o,u,g){n!==r&&es(r,function(m,p){if(g||(g=new zn),He(m))vm(n,r,p,o,Ia,u,g);else{var A=u?u(bs(n,p),m,p+"",n,r,g):t;A===t&&(A=m),Xi(n,p,A)}},cn)}function vm(n,r,o,u,g,m,p){var A=bs(n,o),_=bs(r,o),G=p.get(_);if(G){Xi(n,o,G);return}var B=m?m(A,_,o+"",n,r,p):t,w=B===t;if(w){var z=ve(_),re=!z&&Lr(_),de=!z&&!re&&dt(_);B=_,z||re||de?ve(A)?B=A:Ye(A)?B=An(A):re?(w=!1,B=ku(_,!0)):de?(w=!1,B=gu(_,!0)):B=[]:Ht(_)||Ur(_)?(B=A,Ur(A)?B=ld(A):(!He(A)||Tr(A))&&(B=Lu(_))):w=!1}w&&(p.set(_,B),g(B,_,u,m,p),p.delete(_)),Xi(n,o,B)}function eu(n,r){var o=n.length;if(o)return r+=r<0?o:0,mr(r,o)?n[r]:t}function nu(n,r,o){r.length?r=Ve(r,function(m){return ve(m)?function(p){return wr(p,m.length===1?m[0]:m)}:m}):r=[Rn];var u=-1;r=Ve(r,In(oe()));var g=Zl(n,function(m,p,A){var _=Ve(r,function(G){return G(m)});return{criteria:_,index:++u,value:m}});return wE(g,function(m,p){return Nm(m,p,o)})}function Em(n,r){return ru(n,r,function(o,u){return Fs(n,u)})}function ru(n,r,o){for(var u=-1,g=r.length,m={};++u<g;){var p=r[u],A=wr(n,p);o(A,p)&&Gt(m,Ir(p,n),A)}return m}function fm(n){return function(r){return wr(r,n)}}function os(n,r,o,u){var g=u?BE:Qr,m=-1,p=r.length,A=n;for(n===r&&(r=An(r)),o&&(A=Ve(n,In(o)));++m<p;)for(var _=0,G=r[m],B=o?o(G):G;(_=g(A,B,_,u))>-1;)A!==n&&pa.call(A,_,1),pa.call(n,_,1);return n}function tu(n,r){for(var o=n?r.length:0,u=o-1;o--;){var g=r[o];if(o==u||g!==m){var m=g;mr(g)?pa.call(n,g,1):ks(n,g)}}return n}function ls(n,r){return n+ya(Gl()*(r-n+1))}function mm(n,r,o,u){for(var g=-1,m=Ze(Aa((r-n)/(o||1)),0),p=S(m);m--;)p[u?m:++g]=n,n+=o;return p}function us(n,r){var o="";if(!n||r<1||r>C)return o;do r%2&&(o+=n),r=ya(r/2),r&&(n+=n);while(r);return o}function me(n,r){return Ns(Pu(n,r,Rn),n+"")}function Tm(n){return Vl(kt(n))}function pm(n,r){var o=kt(n);return Ba(o,Br(r,0,o.length))}function Gt(n,r,o,u){if(!He(n))return n;r=Ir(r,n);for(var g=-1,m=r.length,p=m-1,A=n;A!=null&&++g<m;){var _=ir(r[g]),G=o;if(_==="__proto__"||_==="constructor"||_==="prototype")return n;if(g!=p){var B=A[_];G=u?u(B,_,A):t,G===t&&(G=He(B)?B:mr(r[g+1])?[]:{})}Pt(A,_,G),A=A[_]}return n}var au=ca?function(n,r){return ca.set(n,r),n}:Rn,hm=ha?function(n,r){return ha(n,"toString",{configurable:!0,enumerable:!1,value:js(r),writable:!0})}:Rn;function Am(n){return Ba(kt(n))}function Hn(n,r,o){var u=-1,g=n.length;r<0&&(r=-r>g?0:g+r),o=o>g?g:o,o<0&&(o+=g),g=r>o?0:o-r>>>0,r>>>=0;for(var m=S(g);++u<g;)m[u]=n[u+r];return m}function ym(n,r){var o;return Nr(n,function(u,g,m){return o=r(u,g,m),!o}),!!o}function Oa(n,r,o){var u=0,g=n==null?u:n.length;if(typeof r=="number"&&r===r&&g<=je){for(;u<g;){var m=u+g>>>1,p=n[m];p!==null&&!Ln(p)&&(o?p<=r:p<r)?u=m+1:g=m}return g}return ds(n,r,Rn,o)}function ds(n,r,o,u){var g=0,m=n==null?0:n.length;if(m===0)return 0;r=o(r);for(var p=r!==r,A=r===null,_=Ln(r),G=r===t;g<m;){var B=ya((g+m)/2),w=o(n[B]),z=w!==t,re=w===null,de=w===w,fe=Ln(w);if(p)var ke=u||de;else G?ke=de&&(u||z):A?ke=de&&z&&(u||!re):_?ke=de&&z&&!re&&(u||!fe):re||fe?ke=!1:ke=u?w<=r:w<r;ke?g=B+1:m=B}return ln(m,Pe)}function iu(n,r){for(var o=-1,u=n.length,g=0,m=[];++o<u;){var p=n[o],A=r?r(p):p;if(!o||!Zn(A,_)){var _=A;m[g++]=p===0?0:p}}return m}function su(n){return typeof n=="number"?n:Ln(n)?se:+n}function On(n){if(typeof n=="string")return n;if(ve(n))return Ve(n,On)+"";if(Ln(n))return Bl?Bl.call(n):"";var r=n+"";return r=="0"&&1/n==-Z?"-0":r}function Sr(n,r,o){var u=-1,g=la,m=n.length,p=!0,A=[],_=A;if(o)p=!1,g=wi;else if(m>=s){var G=r?null:Dm(n);if(G)return da(G);p=!1,g=St,_=new Gr}else _=r?[]:A;e:for(;++u<m;){var B=n[u],w=r?r(B):B;if(B=o||B!==0?B:0,p&&w===w){for(var z=_.length;z--;)if(_[z]===w)continue e;r&&_.push(w),A.push(B)}else g(_,w,o)||(_!==A&&_.push(w),A.push(B))}return A}function ks(n,r){return r=Ir(r,n),n=Fu(n,r),n==null||delete n[ir(Un(r))]}function ou(n,r,o,u){return Gt(n,r,o(wr(n,r)),u)}function La(n,r,o,u){for(var g=n.length,m=u?g:-1;(u?m--:++m<g)&&r(n[m],m,n););return o?Hn(n,u?0:m,u?m+1:g):Hn(n,u?m+1:0,u?g:m)}function lu(n,r){var o=n;return o instanceof he&&(o=o.value()),Vi(r,function(u,g){return g.func.apply(g.thisArg,Rr([u],g.args))},o)}function gs(n,r,o){var u=n.length;if(u<2)return u?Sr(n[0]):[];for(var g=-1,m=S(u);++g<u;)for(var p=n[g],A=-1;++A<u;)A!=g&&(m[g]=Ft(m[g]||p,n[A],r,o));return Sr(an(m,1),r,o)}function uu(n,r,o){for(var u=-1,g=n.length,m=r.length,p={};++u<g;){var A=u<m?r[u]:t;o(p,n[u],A)}return p}function vs(n){return Ye(n)?n:[]}function Es(n){return typeof n=="function"?n:Rn}function Ir(n,r){return ve(n)?n:Rs(n,r)?[n]:Bu(Ne(n))}var cm=me;function Or(n,r,o){var u=n.length;return o=o===t?u:o,!r&&o>=u?n:Hn(n,r,o)}var du=uf||function(n){return tn.clearTimeout(n)};function ku(n,r){if(r)return n.slice();var o=n.length,u=Dl?Dl(o):new n.constructor(o);return n.copy(u),u}function fs(n){var r=new n.constructor(n.byteLength);return new ma(r).set(new ma(n)),r}function Rm(n,r){var o=r?fs(n.buffer):n.buffer;return new n.constructor(o,n.byteOffset,n.byteLength)}function _m(n){var r=new n.constructor(n.source,Jo.exec(n));return r.lastIndex=n.lastIndex,r}function bm(n){return Dt?Fe(Dt.call(n)):{}}function gu(n,r){var o=r?fs(n.buffer):n.buffer;return new n.constructor(o,n.byteOffset,n.length)}function vu(n,r){if(n!==r){var o=n!==t,u=n===null,g=n===n,m=Ln(n),p=r!==t,A=r===null,_=r===r,G=Ln(r);if(!A&&!G&&!m&&n>r||m&&p&&_&&!A&&!G||u&&p&&_||!o&&_||!g)return 1;if(!u&&!m&&!G&&n<r||G&&o&&g&&!u&&!m||A&&o&&g||!p&&g||!_)return-1}return 0}function Nm(n,r,o){for(var u=-1,g=n.criteria,m=r.criteria,p=g.length,A=o.length;++u<p;){var _=vu(g[u],m[u]);if(_){if(u>=A)return _;var G=o[u];return _*(G=="desc"?-1:1)}}return n.index-r.index}function Eu(n,r,o,u){for(var g=-1,m=n.length,p=o.length,A=-1,_=r.length,G=Ze(m-p,0),B=S(_+G),w=!u;++A<_;)B[A]=r[A];for(;++g<p;)(w||g<m)&&(B[o[g]]=n[g]);for(;G--;)B[A++]=n[g++];return B}function fu(n,r,o,u){for(var g=-1,m=n.length,p=-1,A=o.length,_=-1,G=r.length,B=Ze(m-A,0),w=S(B+G),z=!u;++g<B;)w[g]=n[g];for(var re=g;++_<G;)w[re+_]=r[_];for(;++p<A;)(z||g<m)&&(w[re+o[p]]=n[g++]);return w}function An(n,r){var o=-1,u=n.length;for(r||(r=S(u));++o<u;)r[o]=n[o];return r}function ar(n,r,o,u){var g=!o;o||(o={});for(var m=-1,p=r.length;++m<p;){var A=r[m],_=u?u(o[A],n[A],A,o,n):t;_===t&&(_=n[A]),g?vr(o,A,_):Pt(o,A,_)}return o}function Sm(n,r){return ar(n,cs(n),r)}function Im(n,r){return ar(n,Iu(n),r)}function Ka(n,r){return function(o,u){var g=ve(o)?DE:zf,m=r?r():{};return g(o,n,oe(u,2),m)}}function ot(n){return me(function(r,o){var u=-1,g=o.length,m=g>1?o[g-1]:t,p=g>2?o[2]:t;for(m=n.length>3&&typeof m=="function"?(g--,m):t,p&&kn(o[0],o[1],p)&&(m=g<3?t:m,g=1),r=Fe(r);++u<g;){var A=o[u];A&&n(r,A,u,m)}return r})}function mu(n,r){return function(o,u){if(o==null)return o;if(!yn(o))return n(o,u);for(var g=o.length,m=r?g:-1,p=Fe(o);(r?m--:++m<g)&&u(p[m],m,p)!==!1;);return o}}function Tu(n){return function(r,o,u){for(var g=-1,m=Fe(r),p=u(r),A=p.length;A--;){var _=p[n?A:++g];if(o(m[_],_,m)===!1)break}return r}}function Om(n,r,o){var u=r&N,g=Bt(n);function m(){var p=this&&this!==tn&&this instanceof m?g:n;return p.apply(u?o:this,arguments)}return m}function pu(n){return function(r){r=Ne(r);var o=et(r)?Wn(r):t,u=o?o[0]:r.charAt(0),g=o?Or(o,1).join(""):r.slice(1);return u[n]()+g}}function lt(n){return function(r){return Vi(md(fd(r).replace(pE,"")),n,"")}}function Bt(n){return function(){var r=arguments;switch(r.length){case 0:return new n;case 1:return new n(r[0]);case 2:return new n(r[0],r[1]);case 3:return new n(r[0],r[1],r[2]);case 4:return new n(r[0],r[1],r[2],r[3]);case 5:return new n(r[0],r[1],r[2],r[3],r[4]);case 6:return new n(r[0],r[1],r[2],r[3],r[4],r[5]);case 7:return new n(r[0],r[1],r[2],r[3],r[4],r[5],r[6])}var o=st(n.prototype),u=n.apply(o,r);return He(u)?u:o}}function Lm(n,r,o){var u=Bt(n);function g(){for(var m=arguments.length,p=S(m),A=m,_=ut(g);A--;)p[A]=arguments[A];var G=m<3&&p[0]!==_&&p[m-1]!==_?[]:_r(p,_);if(m-=G.length,m<o)return Ru(n,r,Da,g.placeholder,t,p,G,t,t,o-m);var B=this&&this!==tn&&this instanceof g?u:n;return Sn(B,this,p)}return g}function hu(n){return function(r,o,u){var g=Fe(r);if(!yn(r)){var m=oe(o,3);r=Qe(r),o=function(A){return m(g[A],A,g)}}var p=n(r,o,u);return p>-1?g[m?r[p]:p]:t}}function Au(n){return fr(function(r){var o=r.length,u=o,g=wn.prototype.thru;for(n&&r.reverse();u--;){var m=r[u];if(typeof m!="function")throw new Bn(d);if(g&&!p&&ja(m)=="wrapper")var p=new wn([],!0)}for(u=p?u:o;++u<o;){m=r[u];var A=ja(m),_=A=="wrapper"?As(m):t;_&&_s(_[0])&&_[1]==(I|L|O|b)&&!_[4].length&&_[9]==1?p=p[ja(_[0])].apply(p,_[3]):p=m.length==1&&_s(m)?p[A]():p.thru(m)}return function(){var G=arguments,B=G[0];if(p&&G.length==1&&ve(B))return p.plant(B).value();for(var w=0,z=o?r[w].apply(this,G):B;++w<o;)z=r[w].call(this,z);return z}})}function Da(n,r,o,u,g,m,p,A,_,G){var B=r&I,w=r&N,z=r&D,re=r&(L|Q),de=r&$,fe=z?t:Bt(n);function ke(){for(var Te=arguments.length,Ae=S(Te),Kn=Te;Kn--;)Ae[Kn]=arguments[Kn];if(re)var gn=ut(ke),Dn=HE(Ae,gn);if(u&&(Ae=Eu(Ae,u,g,re)),m&&(Ae=fu(Ae,m,p,re)),Te-=Dn,re&&Te<G){var Ce=_r(Ae,gn);return Ru(n,r,Da,ke.placeholder,o,Ae,Ce,A,_,G-Te)}var Xn=w?o:this,hr=z?Xn[n]:n;return Te=Ae.length,A?Ae=zm(Ae,A):de&&Te>1&&Ae.reverse(),B&&_<Te&&(Ae.length=_),this&&this!==tn&&this instanceof ke&&(hr=fe||Bt(hr)),hr.apply(Xn,Ae)}return ke}function yu(n,r){return function(o,u){return am(o,n,r(u),{})}}function Pa(n,r){return function(o,u){var g;if(o===t&&u===t)return r;if(o!==t&&(g=o),u!==t){if(g===t)return u;typeof o=="string"||typeof u=="string"?(o=On(o),u=On(u)):(o=su(o),u=su(u)),g=n(o,u)}return g}}function ms(n){return fr(function(r){return r=Ve(r,In(oe())),me(function(o){var u=this;return n(r,function(g){return Sn(g,u,o)})})})}function Fa(n,r){r=r===t?" ":On(r);var o=r.length;if(o<2)return o?us(r,n):r;var u=us(r,Aa(n/nt(r)));return et(r)?Or(Wn(u),0,n).join(""):u.slice(0,n)}function Km(n,r,o,u){var g=r&N,m=Bt(n);function p(){for(var A=-1,_=arguments.length,G=-1,B=u.length,w=S(B+_),z=this&&this!==tn&&this instanceof p?m:n;++G<B;)w[G]=u[G];for(;_--;)w[G++]=arguments[++A];return Sn(z,g?o:this,w)}return p}function cu(n){return function(r,o,u){return u&&typeof u!="number"&&kn(r,o,u)&&(o=u=t),r=pr(r),o===t?(o=r,r=0):o=pr(o),u=u===t?r<o?1:-1:pr(u),mm(r,o,u,n)}}function Ma(n){return function(r,o){return typeof r=="string"&&typeof o=="string"||(r=qn(r),o=qn(o)),n(r,o)}}function Ru(n,r,o,u,g,m,p,A,_,G){var B=r&L,w=B?p:t,z=B?t:p,re=B?m:t,de=B?t:m;r|=B?O:V,r&=~(B?V:O),r&q||(r&=~(N|D));var fe=[n,r,g,re,w,de,z,A,_,G],ke=o.apply(t,fe);return _s(n)&&Mu(ke,fe),ke.placeholder=u,ju(ke,n,r)}function Ts(n){var r=ze[n];return function(o,u){if(o=qn(o),u=u==null?0:ln(Ee(u),292),u&&jl(o)){var g=(Ne(o)+"e").split("e"),m=r(g[0]+"e"+(+g[1]+u));return g=(Ne(m)+"e").split("e"),+(g[0]+"e"+(+g[1]-u))}return r(o)}}var Dm=at&&1/da(new at([,-0]))[1]==Z?function(n){return new at(n)}:ws;function _u(n){return function(r){var o=un(r);return o==on?$i(r):o==Jn?JE(r):VE(r,n(r))}}function Er(n,r,o,u,g,m,p,A){var _=r&D;if(!_&&typeof n!="function")throw new Bn(d);var G=u?u.length:0;if(G||(r&=~(O|V),u=g=t),p=p===t?p:Ze(Ee(p),0),A=A===t?A:Ee(A),G-=g?g.length:0,r&V){var B=u,w=g;u=g=t}var z=_?t:As(n),re=[n,r,o,u,g,B,w,m,p,A];if(z&&$m(re,z),n=re[0],r=re[1],o=re[2],u=re[3],g=re[4],A=re[9]=re[9]===t?_?0:n.length:Ze(re[9]-G,0),!A&&r&(L|Q)&&(r&=~(L|Q)),!r||r==N)var de=Om(n,r,o);else r==L||r==Q?de=Lm(n,r,A):(r==O||r==(N|O))&&!g.length?de=Km(n,r,o,u):de=Da.apply(t,re);var fe=z?au:Mu;return ju(fe(de,re),n,r)}function bu(n,r,o,u){return n===t||Zn(n,tt[o])&&!Le.call(u,o)?r:n}function Nu(n,r,o,u,g,m){return He(n)&&He(r)&&(m.set(r,n),Ia(n,r,t,Nu,m),m.delete(r)),n}function Pm(n){return Ht(n)?t:n}function Su(n,r,o,u,g,m){var p=o&j,A=n.length,_=r.length;if(A!=_&&!(p&&_>A))return!1;var G=m.get(n),B=m.get(r);if(G&&B)return G==r&&B==n;var w=-1,z=!0,re=o&R?new Gr:t;for(m.set(n,r),m.set(r,n);++w<A;){var de=n[w],fe=r[w];if(u)var ke=p?u(fe,de,w,r,n,m):u(de,fe,w,n,r,m);if(ke!==t){if(ke)continue;z=!1;break}if(re){if(!Hi(r,function(Te,Ae){if(!St(re,Ae)&&(de===Te||g(de,Te,o,u,m)))return re.push(Ae)})){z=!1;break}}else if(!(de===fe||g(de,fe,o,u,m))){z=!1;break}}return m.delete(n),m.delete(r),z}function Fm(n,r,o,u,g,m,p){switch(o){case Zr:if(n.byteLength!=r.byteLength||n.byteOffset!=r.byteOffset)return!1;n=n.buffer,r=r.buffer;case Nt:return!(n.byteLength!=r.byteLength||!m(new ma(n),new ma(r)));case bn:case sn:case rr:return Zn(+n,+r);case rn:return n.name==r.name&&n.message==r.message;case Rt:case _t:return n==r+"";case on:var A=$i;case Jn:var _=u&j;if(A||(A=da),n.size!=r.size&&!_)return!1;var G=p.get(n);if(G)return G==r;u|=R,p.set(n,r);var B=Su(A(n),A(r),u,g,m,p);return p.delete(n),B;case aa:if(Dt)return Dt.call(n)==Dt.call(r)}return!1}function Mm(n,r,o,u,g,m){var p=o&j,A=ps(n),_=A.length,G=ps(r),B=G.length;if(_!=B&&!p)return!1;for(var w=_;w--;){var z=A[w];if(!(p?z in r:Le.call(r,z)))return!1}var re=m.get(n),de=m.get(r);if(re&&de)return re==r&&de==n;var fe=!0;m.set(n,r),m.set(r,n);for(var ke=p;++w<_;){z=A[w];var Te=n[z],Ae=r[z];if(u)var Kn=p?u(Ae,Te,z,r,n,m):u(Te,Ae,z,n,r,m);if(!(Kn===t?Te===Ae||g(Te,Ae,o,u,m):Kn)){fe=!1;break}ke||(ke=z=="constructor")}if(fe&&!ke){var gn=n.constructor,Dn=r.constructor;gn!=Dn&&"constructor"in n&&"constructor"in r&&!(typeof gn=="function"&&gn instanceof gn&&typeof Dn=="function"&&Dn instanceof Dn)&&(fe=!1)}return m.delete(n),m.delete(r),fe}function fr(n){return Ns(Pu(n,t,Uu),n+"")}function ps(n){return $l(n,Qe,cs)}function hs(n){return $l(n,cn,Iu)}var As=ca?function(n){return ca.get(n)}:ws;function ja(n){for(var r=n.name+"",o=it[r],u=Le.call(it,r)?o.length:0;u--;){var g=o[u],m=g.func;if(m==null||m==n)return g.name}return r}function ut(n){var r=Le.call(E,"placeholder")?E:n;return r.placeholder}function oe(){var n=E.iteratee||Gs;return n=n===Gs?zl:n,arguments.length?n(arguments[0],arguments[1]):n}function Ga(n,r){var o=n.__data__;return qm(r)?o[typeof r=="string"?"string":"hash"]:o.map}function ys(n){for(var r=Qe(n),o=r.length;o--;){var u=r[o],g=n[u];r[o]=[u,g,Ku(g)]}return r}function Vr(n,r){var o=YE(n,r);return Wl(o)?o:t}function jm(n){var r=Le.call(n,Mr),o=n[Mr];try{n[Mr]=t;var u=!0}catch{}var g=Ea.call(n);return u&&(r?n[Mr]=o:delete n[Mr]),g}var cs=Wi?function(n){return n==null?[]:(n=Fe(n),cr(Wi(n),function(r){return Fl.call(n,r)}))}:Vs,Iu=Wi?function(n){for(var r=[];n;)Rr(r,cs(n)),n=Ta(n);return r}:Vs,un=dn;(zi&&un(new zi(new ArrayBuffer(1)))!=Zr||Ot&&un(new Ot)!=on||Zi&&un(Zi.resolve())!=zr||at&&un(new at)!=Jn||Lt&&un(new Lt)!=bt)&&(un=function(n){var r=dn(n),o=r==Nn?n.constructor:t,u=o?Hr(o):"";if(u)switch(u){case pf:return Zr;case hf:return on;case Af:return zr;case yf:return Jn;case cf:return bt}return r});function Gm(n,r,o){for(var u=-1,g=o.length;++u<g;){var m=o[u],p=m.size;switch(m.type){case"drop":n+=p;break;case"dropRight":r-=p;break;case"take":r=ln(r,n+p);break;case"takeRight":n=Ze(n,r-p);break}}return{start:n,end:r}}function Bm(n){var r=n.match(qv);return r?r[1].split(xv):[]}function Ou(n,r,o){r=Ir(r,n);for(var u=-1,g=r.length,m=!1;++u<g;){var p=ir(r[u]);if(!(m=n!=null&&o(n,p)))break;n=n[p]}return m||++u!=g?m:(g=n==null?0:n.length,!!g&&xa(g)&&mr(p,g)&&(ve(n)||Ur(n)))}function wm(n){var r=n.length,o=new n.constructor(r);return r&&typeof n[0]=="string"&&Le.call(n,"index")&&(o.index=n.index,o.input=n.input),o}function Lu(n){return typeof n.constructor=="function"&&!wt(n)?st(Ta(n)):{}}function Vm(n,r,o){var u=n.constructor;switch(r){case Nt:return fs(n);case bn:case sn:return new u(+n);case Zr:return Rm(n,o);case yi:case ci:case Ri:case _i:case bi:case Ni:case Si:case Ii:case Oi:return gu(n,o);case on:return new u;case rr:case _t:return new u(n);case Rt:return _m(n);case Jn:return new u;case aa:return bm(n)}}function Hm(n,r){var o=r.length;if(!o)return n;var u=o-1;return r[u]=(o>1?"& ":"")+r[u],r=r.join(o>2?", ":" "),n.replace(Uv,`{
/* [wrapped with `+r+`] */
`)}function Um(n){return ve(n)||Ur(n)||!!(Ml&&n&&n[Ml])}function mr(n,r){var o=typeof n;return r=r??C,!!r&&(o=="number"||o!="symbol"&&Qv.test(n))&&n>-1&&n%1==0&&n<r}function kn(n,r,o){if(!He(o))return!1;var u=typeof r;return(u=="number"?yn(o)&&mr(r,o.length):u=="string"&&r in o)?Zn(o[r],n):!1}function Rs(n,r){if(ve(n))return!1;var o=typeof n;return o=="number"||o=="symbol"||o=="boolean"||n==null||Ln(n)?!0:Bv.test(n)||!Gv.test(n)||r!=null&&n in Fe(r)}function qm(n){var r=typeof n;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?n!=="__proto__":n===null}function _s(n){var r=ja(n),o=E[r];if(typeof o!="function"||!(r in he.prototype))return!1;if(n===o)return!0;var u=As(o);return!!u&&n===u[0]}function xm(n){return!!Kl&&Kl in n}var Ym=ga?Tr:Hs;function wt(n){var r=n&&n.constructor,o=typeof r=="function"&&r.prototype||tt;return n===o}function Ku(n){return n===n&&!He(n)}function Du(n,r){return function(o){return o==null?!1:o[n]===r&&(r!==t||n in Fe(o))}}function Cm(n){var r=Ua(n,function(u){return o.size===T&&o.clear(),u}),o=r.cache;return r}function $m(n,r){var o=n[1],u=r[1],g=o|u,m=g<(N|D|I),p=u==I&&o==L||u==I&&o==b&&n[7].length<=r[8]||u==(I|b)&&r[7].length<=r[8]&&o==L;if(!(m||p))return n;u&N&&(n[2]=r[2],g|=o&N?0:q);var A=r[3];if(A){var _=n[3];n[3]=_?Eu(_,A,r[4]):A,n[4]=_?_r(n[3],f):r[4]}return A=r[5],A&&(_=n[5],n[5]=_?fu(_,A,r[6]):A,n[6]=_?_r(n[5],f):r[6]),A=r[7],A&&(n[7]=A),u&I&&(n[8]=n[8]==null?r[8]:ln(n[8],r[8])),n[9]==null&&(n[9]=r[9]),n[0]=r[0],n[1]=g,n}function Jm(n){var r=[];if(n!=null)for(var o in Fe(n))r.push(o);return r}function Wm(n){return Ea.call(n)}function Pu(n,r,o){return r=Ze(r===t?n.length-1:r,0),function(){for(var u=arguments,g=-1,m=Ze(u.length-r,0),p=S(m);++g<m;)p[g]=u[r+g];g=-1;for(var A=S(r+1);++g<r;)A[g]=u[g];return A[r]=o(p),Sn(n,this,A)}}function Fu(n,r){return r.length<2?n:wr(n,Hn(r,0,-1))}function zm(n,r){for(var o=n.length,u=ln(r.length,o),g=An(n);u--;){var m=r[u];n[u]=mr(m,o)?g[m]:t}return n}function bs(n,r){if(!(r==="constructor"&&typeof n[r]=="function")&&r!="__proto__")return n[r]}var Mu=Gu(au),Vt=kf||function(n,r){return tn.setTimeout(n,r)},Ns=Gu(hm);function ju(n,r,o){var u=r+"";return Ns(n,Hm(u,Zm(Bm(u),o)))}function Gu(n){var r=0,o=0;return function(){var u=ff(),g=le-(u-o);if(o=u,g>0){if(++r>=te)return arguments[0]}else r=0;return n.apply(t,arguments)}}function Ba(n,r){var o=-1,u=n.length,g=u-1;for(r=r===t?u:r;++o<r;){var m=ls(o,g),p=n[m];n[m]=n[o],n[o]=p}return n.length=r,n}var Bu=Cm(function(n){var r=[];return n.charCodeAt(0)===46&&r.push(""),n.replace(wv,function(o,u,g,m){r.push(g?m.replace($v,"$1"):u||o)}),r});function ir(n){if(typeof n=="string"||Ln(n))return n;var r=n+"";return r=="0"&&1/n==-Z?"-0":r}function Hr(n){if(n!=null){try{return va.call(n)}catch{}try{return n+""}catch{}}return""}function Zm(n,r){return Gn(Je,function(o){var u="_."+o[0];r&o[1]&&!la(n,u)&&n.push(u)}),n.sort()}function wu(n){if(n instanceof he)return n.clone();var r=new wn(n.__wrapped__,n.__chain__);return r.__actions__=An(n.__actions__),r.__index__=n.__index__,r.__values__=n.__values__,r}function Xm(n,r,o){(o?kn(n,r,o):r===t)?r=1:r=Ze(Ee(r),0);var u=n==null?0:n.length;if(!u||r<1)return[];for(var g=0,m=0,p=S(Aa(u/r));g<u;)p[m++]=Hn(n,g,g+=r);return p}function Qm(n){for(var r=-1,o=n==null?0:n.length,u=0,g=[];++r<o;){var m=n[r];m&&(g[u++]=m)}return g}function eT(){var n=arguments.length;if(!n)return[];for(var r=S(n-1),o=arguments[0],u=n;u--;)r[u-1]=arguments[u];return Rr(ve(o)?An(o):[o],an(r,1))}var nT=me(function(n,r){return Ye(n)?Ft(n,an(r,1,Ye,!0)):[]}),rT=me(function(n,r){var o=Un(r);return Ye(o)&&(o=t),Ye(n)?Ft(n,an(r,1,Ye,!0),oe(o,2)):[]}),tT=me(function(n,r){var o=Un(r);return Ye(o)&&(o=t),Ye(n)?Ft(n,an(r,1,Ye,!0),t,o):[]});function aT(n,r,o){var u=n==null?0:n.length;return u?(r=o||r===t?1:Ee(r),Hn(n,r<0?0:r,u)):[]}function iT(n,r,o){var u=n==null?0:n.length;return u?(r=o||r===t?1:Ee(r),r=u-r,Hn(n,0,r<0?0:r)):[]}function sT(n,r){return n&&n.length?La(n,oe(r,3),!0,!0):[]}function oT(n,r){return n&&n.length?La(n,oe(r,3),!0):[]}function lT(n,r,o,u){var g=n==null?0:n.length;return g?(o&&typeof o!="number"&&kn(n,r,o)&&(o=0,u=g),em(n,r,o,u)):[]}function Vu(n,r,o){var u=n==null?0:n.length;if(!u)return-1;var g=o==null?0:Ee(o);return g<0&&(g=Ze(u+g,0)),ua(n,oe(r,3),g)}function Hu(n,r,o){var u=n==null?0:n.length;if(!u)return-1;var g=u-1;return o!==t&&(g=Ee(o),g=o<0?Ze(u+g,0):ln(g,u-1)),ua(n,oe(r,3),g,!0)}function Uu(n){var r=n==null?0:n.length;return r?an(n,1):[]}function uT(n){var r=n==null?0:n.length;return r?an(n,Z):[]}function dT(n,r){var o=n==null?0:n.length;return o?(r=r===t?1:Ee(r),an(n,r)):[]}function kT(n){for(var r=-1,o=n==null?0:n.length,u={};++r<o;){var g=n[r];u[g[0]]=g[1]}return u}function qu(n){return n&&n.length?n[0]:t}function gT(n,r,o){var u=n==null?0:n.length;if(!u)return-1;var g=o==null?0:Ee(o);return g<0&&(g=Ze(u+g,0)),Qr(n,r,g)}function vT(n){var r=n==null?0:n.length;return r?Hn(n,0,-1):[]}var ET=me(function(n){var r=Ve(n,vs);return r.length&&r[0]===n[0]?ts(r):[]}),fT=me(function(n){var r=Un(n),o=Ve(n,vs);return r===Un(o)?r=t:o.pop(),o.length&&o[0]===n[0]?ts(o,oe(r,2)):[]}),mT=me(function(n){var r=Un(n),o=Ve(n,vs);return r=typeof r=="function"?r:t,r&&o.pop(),o.length&&o[0]===n[0]?ts(o,t,r):[]});function TT(n,r){return n==null?"":vf.call(n,r)}function Un(n){var r=n==null?0:n.length;return r?n[r-1]:t}function pT(n,r,o){var u=n==null?0:n.length;if(!u)return-1;var g=u;return o!==t&&(g=Ee(o),g=g<0?Ze(u+g,0):ln(g,u-1)),r===r?zE(n,r,g):ua(n,Rl,g,!0)}function hT(n,r){return n&&n.length?eu(n,Ee(r)):t}var AT=me(xu);function xu(n,r){return n&&n.length&&r&&r.length?os(n,r):n}function yT(n,r,o){return n&&n.length&&r&&r.length?os(n,r,oe(o,2)):n}function cT(n,r,o){return n&&n.length&&r&&r.length?os(n,r,t,o):n}var RT=fr(function(n,r){var o=n==null?0:n.length,u=Qi(n,r);return tu(n,Ve(r,function(g){return mr(g,o)?+g:g}).sort(vu)),u});function _T(n,r){var o=[];if(!(n&&n.length))return o;var u=-1,g=[],m=n.length;for(r=oe(r,3);++u<m;){var p=n[u];r(p,u,n)&&(o.push(p),g.push(u))}return tu(n,g),o}function Ss(n){return n==null?n:Tf.call(n)}function bT(n,r,o){var u=n==null?0:n.length;return u?(o&&typeof o!="number"&&kn(n,r,o)?(r=0,o=u):(r=r==null?0:Ee(r),o=o===t?u:Ee(o)),Hn(n,r,o)):[]}function NT(n,r){return Oa(n,r)}function ST(n,r,o){return ds(n,r,oe(o,2))}function IT(n,r){var o=n==null?0:n.length;if(o){var u=Oa(n,r);if(u<o&&Zn(n[u],r))return u}return-1}function OT(n,r){return Oa(n,r,!0)}function LT(n,r,o){return ds(n,r,oe(o,2),!0)}function KT(n,r){var o=n==null?0:n.length;if(o){var u=Oa(n,r,!0)-1;if(Zn(n[u],r))return u}return-1}function DT(n){return n&&n.length?iu(n):[]}function PT(n,r){return n&&n.length?iu(n,oe(r,2)):[]}function FT(n){var r=n==null?0:n.length;return r?Hn(n,1,r):[]}function MT(n,r,o){return n&&n.length?(r=o||r===t?1:Ee(r),Hn(n,0,r<0?0:r)):[]}function jT(n,r,o){var u=n==null?0:n.length;return u?(r=o||r===t?1:Ee(r),r=u-r,Hn(n,r<0?0:r,u)):[]}function GT(n,r){return n&&n.length?La(n,oe(r,3),!1,!0):[]}function BT(n,r){return n&&n.length?La(n,oe(r,3)):[]}var wT=me(function(n){return Sr(an(n,1,Ye,!0))}),VT=me(function(n){var r=Un(n);return Ye(r)&&(r=t),Sr(an(n,1,Ye,!0),oe(r,2))}),HT=me(function(n){var r=Un(n);return r=typeof r=="function"?r:t,Sr(an(n,1,Ye,!0),t,r)});function UT(n){return n&&n.length?Sr(n):[]}function qT(n,r){return n&&n.length?Sr(n,oe(r,2)):[]}function xT(n,r){return r=typeof r=="function"?r:t,n&&n.length?Sr(n,t,r):[]}function Is(n){if(!(n&&n.length))return[];var r=0;return n=cr(n,function(o){if(Ye(o))return r=Ze(o.length,r),!0}),Yi(r,function(o){return Ve(n,Ui(o))})}function Yu(n,r){if(!(n&&n.length))return[];var o=Is(n);return r==null?o:Ve(o,function(u){return Sn(r,t,u)})}var YT=me(function(n,r){return Ye(n)?Ft(n,r):[]}),CT=me(function(n){return gs(cr(n,Ye))}),$T=me(function(n){var r=Un(n);return Ye(r)&&(r=t),gs(cr(n,Ye),oe(r,2))}),JT=me(function(n){var r=Un(n);return r=typeof r=="function"?r:t,gs(cr(n,Ye),t,r)}),WT=me(Is);function zT(n,r){return uu(n||[],r||[],Pt)}function ZT(n,r){return uu(n||[],r||[],Gt)}var XT=me(function(n){var r=n.length,o=r>1?n[r-1]:t;return o=typeof o=="function"?(n.pop(),o):t,Yu(n,o)});function Cu(n){var r=E(n);return r.__chain__=!0,r}function QT(n,r){return r(n),n}function wa(n,r){return r(n)}var ep=fr(function(n){var r=n.length,o=r?n[0]:0,u=this.__wrapped__,g=function(m){return Qi(m,n)};return r>1||this.__actions__.length||!(u instanceof he)||!mr(o)?this.thru(g):(u=u.slice(o,+o+(r?1:0)),u.__actions__.push({func:wa,args:[g],thisArg:t}),new wn(u,this.__chain__).thru(function(m){return r&&!m.length&&m.push(t),m}))});function np(){return Cu(this)}function rp(){return new wn(this.value(),this.__chain__)}function tp(){this.__values__===t&&(this.__values__=sd(this.value()));var n=this.__index__>=this.__values__.length,r=n?t:this.__values__[this.__index__++];return{done:n,value:r}}function ap(){return this}function ip(n){for(var r,o=this;o instanceof _a;){var u=wu(o);u.__index__=0,u.__values__=t,r?g.__wrapped__=u:r=u;var g=u;o=o.__wrapped__}return g.__wrapped__=n,r}function sp(){var n=this.__wrapped__;if(n instanceof he){var r=n;return this.__actions__.length&&(r=new he(this)),r=r.reverse(),r.__actions__.push({func:wa,args:[Ss],thisArg:t}),new wn(r,this.__chain__)}return this.thru(Ss)}function op(){return lu(this.__wrapped__,this.__actions__)}var lp=Ka(function(n,r,o){Le.call(n,o)?++n[o]:vr(n,o,1)});function up(n,r,o){var u=ve(n)?yl:Qf;return o&&kn(n,r,o)&&(r=t),u(n,oe(r,3))}function dp(n,r){var o=ve(n)?cr:Yl;return o(n,oe(r,3))}var kp=hu(Vu),gp=hu(Hu);function vp(n,r){return an(Va(n,r),1)}function Ep(n,r){return an(Va(n,r),Z)}function fp(n,r,o){return o=o===t?1:Ee(o),an(Va(n,r),o)}function $u(n,r){var o=ve(n)?Gn:Nr;return o(n,oe(r,3))}function Ju(n,r){var o=ve(n)?PE:xl;return o(n,oe(r,3))}var mp=Ka(function(n,r,o){Le.call(n,o)?n[o].push(r):vr(n,o,[r])});function Tp(n,r,o,u){n=yn(n)?n:kt(n),o=o&&!u?Ee(o):0;var g=n.length;return o<0&&(o=Ze(g+o,0)),Ya(n)?o<=g&&n.indexOf(r,o)>-1:!!g&&Qr(n,r,o)>-1}var pp=me(function(n,r,o){var u=-1,g=typeof r=="function",m=yn(n)?S(n.length):[];return Nr(n,function(p){m[++u]=g?Sn(r,p,o):Mt(p,r,o)}),m}),hp=Ka(function(n,r,o){vr(n,o,r)});function Va(n,r){var o=ve(n)?Ve:Zl;return o(n,oe(r,3))}function Ap(n,r,o,u){return n==null?[]:(ve(r)||(r=r==null?[]:[r]),o=u?t:o,ve(o)||(o=o==null?[]:[o]),nu(n,r,o))}var yp=Ka(function(n,r,o){n[o?0:1].push(r)},function(){return[[],[]]});function cp(n,r,o){var u=ve(n)?Vi:bl,g=arguments.length<3;return u(n,oe(r,4),o,g,Nr)}function Rp(n,r,o){var u=ve(n)?FE:bl,g=arguments.length<3;return u(n,oe(r,4),o,g,xl)}function _p(n,r){var o=ve(n)?cr:Yl;return o(n,qa(oe(r,3)))}function bp(n){var r=ve(n)?Vl:Tm;return r(n)}function Np(n,r,o){(o?kn(n,r,o):r===t)?r=1:r=Ee(r);var u=ve(n)?Jf:pm;return u(n,r)}function Sp(n){var r=ve(n)?Wf:Am;return r(n)}function Ip(n){if(n==null)return 0;if(yn(n))return Ya(n)?nt(n):n.length;var r=un(n);return r==on||r==Jn?n.size:is(n).length}function Op(n,r,o){var u=ve(n)?Hi:ym;return o&&kn(n,r,o)&&(r=t),u(n,oe(r,3))}var Lp=me(function(n,r){if(n==null)return[];var o=r.length;return o>1&&kn(n,r[0],r[1])?r=[]:o>2&&kn(r[0],r[1],r[2])&&(r=[r[0]]),nu(n,an(r,1),[])}),Ha=df||function(){return tn.Date.now()};function Kp(n,r){if(typeof r!="function")throw new Bn(d);return n=Ee(n),function(){if(--n<1)return r.apply(this,arguments)}}function Wu(n,r,o){return r=o?t:r,r=n&&r==null?n.length:r,Er(n,I,t,t,t,t,r)}function zu(n,r){var o;if(typeof r!="function")throw new Bn(d);return n=Ee(n),function(){return--n>0&&(o=r.apply(this,arguments)),n<=1&&(r=t),o}}var Os=me(function(n,r,o){var u=N;if(o.length){var g=_r(o,ut(Os));u|=O}return Er(n,u,r,o,g)}),Zu=me(function(n,r,o){var u=N|D;if(o.length){var g=_r(o,ut(Zu));u|=O}return Er(r,u,n,o,g)});function Xu(n,r,o){r=o?t:r;var u=Er(n,L,t,t,t,t,t,r);return u.placeholder=Xu.placeholder,u}function Qu(n,r,o){r=o?t:r;var u=Er(n,Q,t,t,t,t,t,r);return u.placeholder=Qu.placeholder,u}function ed(n,r,o){var u,g,m,p,A,_,G=0,B=!1,w=!1,z=!0;if(typeof n!="function")throw new Bn(d);r=qn(r)||0,He(o)&&(B=!!o.leading,w="maxWait"in o,m=w?Ze(qn(o.maxWait)||0,r):m,z="trailing"in o?!!o.trailing:z);function re(Ce){var Xn=u,hr=g;return u=g=t,G=Ce,p=n.apply(hr,Xn),p}function de(Ce){return G=Ce,A=Vt(Te,r),B?re(Ce):p}function fe(Ce){var Xn=Ce-_,hr=Ce-G,hd=r-Xn;return w?ln(hd,m-hr):hd}function ke(Ce){var Xn=Ce-_,hr=Ce-G;return _===t||Xn>=r||Xn<0||w&&hr>=m}function Te(){var Ce=Ha();if(ke(Ce))return Ae(Ce);A=Vt(Te,fe(Ce))}function Ae(Ce){return A=t,z&&u?re(Ce):(u=g=t,p)}function Kn(){A!==t&&du(A),G=0,u=_=g=A=t}function gn(){return A===t?p:Ae(Ha())}function Dn(){var Ce=Ha(),Xn=ke(Ce);if(u=arguments,g=this,_=Ce,Xn){if(A===t)return de(_);if(w)return du(A),A=Vt(Te,r),re(_)}return A===t&&(A=Vt(Te,r)),p}return Dn.cancel=Kn,Dn.flush=gn,Dn}var Dp=me(function(n,r){return ql(n,1,r)}),Pp=me(function(n,r,o){return ql(n,qn(r)||0,o)});function Fp(n){return Er(n,$)}function Ua(n,r){if(typeof n!="function"||r!=null&&typeof r!="function")throw new Bn(d);var o=function(){var u=arguments,g=r?r.apply(this,u):u[0],m=o.cache;if(m.has(g))return m.get(g);var p=n.apply(this,u);return o.cache=m.set(g,p)||m,p};return o.cache=new(Ua.Cache||gr),o}Ua.Cache=gr;function qa(n){if(typeof n!="function")throw new Bn(d);return function(){var r=arguments;switch(r.length){case 0:return!n.call(this);case 1:return!n.call(this,r[0]);case 2:return!n.call(this,r[0],r[1]);case 3:return!n.call(this,r[0],r[1],r[2])}return!n.apply(this,r)}}function Mp(n){return zu(2,n)}var jp=cm(function(n,r){r=r.length==1&&ve(r[0])?Ve(r[0],In(oe())):Ve(an(r,1),In(oe()));var o=r.length;return me(function(u){for(var g=-1,m=ln(u.length,o);++g<m;)u[g]=r[g].call(this,u[g]);return Sn(n,this,u)})}),Ls=me(function(n,r){var o=_r(r,ut(Ls));return Er(n,O,t,r,o)}),nd=me(function(n,r){var o=_r(r,ut(nd));return Er(n,V,t,r,o)}),Gp=fr(function(n,r){return Er(n,b,t,t,t,r)});function Bp(n,r){if(typeof n!="function")throw new Bn(d);return r=r===t?r:Ee(r),me(n,r)}function wp(n,r){if(typeof n!="function")throw new Bn(d);return r=r==null?0:Ze(Ee(r),0),me(function(o){var u=o[r],g=Or(o,0,r);return u&&Rr(g,u),Sn(n,this,g)})}function Vp(n,r,o){var u=!0,g=!0;if(typeof n!="function")throw new Bn(d);return He(o)&&(u="leading"in o?!!o.leading:u,g="trailing"in o?!!o.trailing:g),ed(n,r,{leading:u,maxWait:r,trailing:g})}function Hp(n){return Wu(n,1)}function Up(n,r){return Ls(Es(r),n)}function qp(){if(!arguments.length)return[];var n=arguments[0];return ve(n)?n:[n]}function xp(n){return Vn(n,K)}function Yp(n,r){return r=typeof r=="function"?r:t,Vn(n,K,r)}function Cp(n){return Vn(n,h|K)}function $p(n,r){return r=typeof r=="function"?r:t,Vn(n,h|K,r)}function Jp(n,r){return r==null||Ul(n,r,Qe(r))}function Zn(n,r){return n===r||n!==n&&r!==r}var Wp=Ma(rs),zp=Ma(function(n,r){return n>=r}),Ur=Jl(function(){return arguments}())?Jl:function(n){return qe(n)&&Le.call(n,"callee")&&!Fl.call(n,"callee")},ve=S.isArray,Zp=fl?In(fl):im;function yn(n){return n!=null&&xa(n.length)&&!Tr(n)}function Ye(n){return qe(n)&&yn(n)}function Xp(n){return n===!0||n===!1||qe(n)&&dn(n)==bn}var Lr=gf||Hs,Qp=ml?In(ml):sm;function eh(n){return qe(n)&&n.nodeType===1&&!Ht(n)}function nh(n){if(n==null)return!0;if(yn(n)&&(ve(n)||typeof n=="string"||typeof n.splice=="function"||Lr(n)||dt(n)||Ur(n)))return!n.length;var r=un(n);if(r==on||r==Jn)return!n.size;if(wt(n))return!is(n).length;for(var o in n)if(Le.call(n,o))return!1;return!0}function rh(n,r){return jt(n,r)}function th(n,r,o){o=typeof o=="function"?o:t;var u=o?o(n,r):t;return u===t?jt(n,r,t,o):!!u}function Ks(n){if(!qe(n))return!1;var r=dn(n);return r==rn||r==We||typeof n.message=="string"&&typeof n.name=="string"&&!Ht(n)}function ah(n){return typeof n=="number"&&jl(n)}function Tr(n){if(!He(n))return!1;var r=dn(n);return r==hn||r==$n||r==Cn||r==ct}function rd(n){return typeof n=="number"&&n==Ee(n)}function xa(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=C}function He(n){var r=typeof n;return n!=null&&(r=="object"||r=="function")}function qe(n){return n!=null&&typeof n=="object"}var td=Tl?In(Tl):lm;function ih(n,r){return n===r||as(n,r,ys(r))}function sh(n,r,o){return o=typeof o=="function"?o:t,as(n,r,ys(r),o)}function oh(n){return ad(n)&&n!=+n}function lh(n){if(Ym(n))throw new ge(l);return Wl(n)}function uh(n){return n===null}function dh(n){return n==null}function ad(n){return typeof n=="number"||qe(n)&&dn(n)==rr}function Ht(n){if(!qe(n)||dn(n)!=Nn)return!1;var r=Ta(n);if(r===null)return!0;var o=Le.call(r,"constructor")&&r.constructor;return typeof o=="function"&&o instanceof o&&va.call(o)==sf}var Ds=pl?In(pl):um;function kh(n){return rd(n)&&n>=-C&&n<=C}var id=hl?In(hl):dm;function Ya(n){return typeof n=="string"||!ve(n)&&qe(n)&&dn(n)==_t}function Ln(n){return typeof n=="symbol"||qe(n)&&dn(n)==aa}var dt=Al?In(Al):km;function gh(n){return n===t}function vh(n){return qe(n)&&un(n)==bt}function Eh(n){return qe(n)&&dn(n)==Ov}var fh=Ma(ss),mh=Ma(function(n,r){return n<=r});function sd(n){if(!n)return[];if(yn(n))return Ya(n)?Wn(n):An(n);if(It&&n[It])return $E(n[It]());var r=un(n),o=r==on?$i:r==Jn?da:kt;return o(n)}function pr(n){if(!n)return n===0?n:0;if(n=qn(n),n===Z||n===-Z){var r=n<0?-1:1;return r*ie}return n===n?n:0}function Ee(n){var r=pr(n),o=r%1;return r===r?o?r-o:r:0}function od(n){return n?Br(Ee(n),0,ue):0}function qn(n){if(typeof n=="number")return n;if(Ln(n))return se;if(He(n)){var r=typeof n.valueOf=="function"?n.valueOf():n;n=He(r)?r+"":r}if(typeof n!="string")return n===0?n:+n;n=Nl(n);var o=zv.test(n);return o||Xv.test(n)?LE(n.slice(2),o?2:8):Wv.test(n)?se:+n}function ld(n){return ar(n,cn(n))}function Th(n){return n?Br(Ee(n),-C,C):n===0?n:0}function Ne(n){return n==null?"":On(n)}var ph=ot(function(n,r){if(wt(r)||yn(r)){ar(r,Qe(r),n);return}for(var o in r)Le.call(r,o)&&Pt(n,o,r[o])}),ud=ot(function(n,r){ar(r,cn(r),n)}),Ca=ot(function(n,r,o,u){ar(r,cn(r),n,u)}),hh=ot(function(n,r,o,u){ar(r,Qe(r),n,u)}),Ah=fr(Qi);function yh(n,r){var o=st(n);return r==null?o:Hl(o,r)}var ch=me(function(n,r){n=Fe(n);var o=-1,u=r.length,g=u>2?r[2]:t;for(g&&kn(r[0],r[1],g)&&(u=1);++o<u;)for(var m=r[o],p=cn(m),A=-1,_=p.length;++A<_;){var G=p[A],B=n[G];(B===t||Zn(B,tt[G])&&!Le.call(n,G))&&(n[G]=m[G])}return n}),Rh=me(function(n){return n.push(t,Nu),Sn(dd,t,n)});function _h(n,r){return cl(n,oe(r,3),tr)}function bh(n,r){return cl(n,oe(r,3),ns)}function Nh(n,r){return n==null?n:es(n,oe(r,3),cn)}function Sh(n,r){return n==null?n:Cl(n,oe(r,3),cn)}function Ih(n,r){return n&&tr(n,oe(r,3))}function Oh(n,r){return n&&ns(n,oe(r,3))}function Lh(n){return n==null?[]:Sa(n,Qe(n))}function Kh(n){return n==null?[]:Sa(n,cn(n))}function Ps(n,r,o){var u=n==null?t:wr(n,r);return u===t?o:u}function Dh(n,r){return n!=null&&Ou(n,r,nm)}function Fs(n,r){return n!=null&&Ou(n,r,rm)}var Ph=yu(function(n,r,o){r!=null&&typeof r.toString!="function"&&(r=Ea.call(r)),n[r]=o},js(Rn)),Fh=yu(function(n,r,o){r!=null&&typeof r.toString!="function"&&(r=Ea.call(r)),Le.call(n,r)?n[r].push(o):n[r]=[o]},oe),Mh=me(Mt);function Qe(n){return yn(n)?wl(n):is(n)}function cn(n){return yn(n)?wl(n,!0):gm(n)}function jh(n,r){var o={};return r=oe(r,3),tr(n,function(u,g,m){vr(o,r(u,g,m),u)}),o}function Gh(n,r){var o={};return r=oe(r,3),tr(n,function(u,g,m){vr(o,g,r(u,g,m))}),o}var Bh=ot(function(n,r,o){Ia(n,r,o)}),dd=ot(function(n,r,o,u){Ia(n,r,o,u)}),wh=fr(function(n,r){var o={};if(n==null)return o;var u=!1;r=Ve(r,function(m){return m=Ir(m,n),u||(u=m.length>1),m}),ar(n,hs(n),o),u&&(o=Vn(o,h|y|K,Pm));for(var g=r.length;g--;)ks(o,r[g]);return o});function Vh(n,r){return kd(n,qa(oe(r)))}var Hh=fr(function(n,r){return n==null?{}:Em(n,r)});function kd(n,r){if(n==null)return{};var o=Ve(hs(n),function(u){return[u]});return r=oe(r),ru(n,o,function(u,g){return r(u,g[0])})}function Uh(n,r,o){r=Ir(r,n);var u=-1,g=r.length;for(g||(g=1,n=t);++u<g;){var m=n==null?t:n[ir(r[u])];m===t&&(u=g,m=o),n=Tr(m)?m.call(n):m}return n}function qh(n,r,o){return n==null?n:Gt(n,r,o)}function xh(n,r,o,u){return u=typeof u=="function"?u:t,n==null?n:Gt(n,r,o,u)}var gd=_u(Qe),vd=_u(cn);function Yh(n,r,o){var u=ve(n),g=u||Lr(n)||dt(n);if(r=oe(r,4),o==null){var m=n&&n.constructor;g?o=u?new m:[]:He(n)?o=Tr(m)?st(Ta(n)):{}:o={}}return(g?Gn:tr)(n,function(p,A,_){return r(o,p,A,_)}),o}function Ch(n,r){return n==null?!0:ks(n,r)}function $h(n,r,o){return n==null?n:ou(n,r,Es(o))}function Jh(n,r,o,u){return u=typeof u=="function"?u:t,n==null?n:ou(n,r,Es(o),u)}function kt(n){return n==null?[]:Ci(n,Qe(n))}function Wh(n){return n==null?[]:Ci(n,cn(n))}function zh(n,r,o){return o===t&&(o=r,r=t),o!==t&&(o=qn(o),o=o===o?o:0),r!==t&&(r=qn(r),r=r===r?r:0),Br(qn(n),r,o)}function Zh(n,r,o){return r=pr(r),o===t?(o=r,r=0):o=pr(o),n=qn(n),tm(n,r,o)}function Xh(n,r,o){if(o&&typeof o!="boolean"&&kn(n,r,o)&&(r=o=t),o===t&&(typeof r=="boolean"?(o=r,r=t):typeof n=="boolean"&&(o=n,n=t)),n===t&&r===t?(n=0,r=1):(n=pr(n),r===t?(r=n,n=0):r=pr(r)),n>r){var u=n;n=r,r=u}if(o||n%1||r%1){var g=Gl();return ln(n+g*(r-n+OE("1e-"+((g+"").length-1))),r)}return ls(n,r)}var Qh=lt(function(n,r,o){return r=r.toLowerCase(),n+(o?Ed(r):r)});function Ed(n){return Ms(Ne(n).toLowerCase())}function fd(n){return n=Ne(n),n&&n.replace(eE,UE).replace(hE,"")}function eA(n,r,o){n=Ne(n),r=On(r);var u=n.length;o=o===t?u:Br(Ee(o),0,u);var g=o;return o-=r.length,o>=0&&n.slice(o,g)==r}function nA(n){return n=Ne(n),n&&Fv.test(n)?n.replace(Co,qE):n}function rA(n){return n=Ne(n),n&&Vv.test(n)?n.replace(Li,"\\$&"):n}var tA=lt(function(n,r,o){return n+(o?"-":"")+r.toLowerCase()}),aA=lt(function(n,r,o){return n+(o?" ":"")+r.toLowerCase()}),iA=pu("toLowerCase");function sA(n,r,o){n=Ne(n),r=Ee(r);var u=r?nt(n):0;if(!r||u>=r)return n;var g=(r-u)/2;return Fa(ya(g),o)+n+Fa(Aa(g),o)}function oA(n,r,o){n=Ne(n),r=Ee(r);var u=r?nt(n):0;return r&&u<r?n+Fa(r-u,o):n}function lA(n,r,o){n=Ne(n),r=Ee(r);var u=r?nt(n):0;return r&&u<r?Fa(r-u,o)+n:n}function uA(n,r,o){return o||r==null?r=0:r&&(r=+r),mf(Ne(n).replace(Ki,""),r||0)}function dA(n,r,o){return(o?kn(n,r,o):r===t)?r=1:r=Ee(r),us(Ne(n),r)}function kA(){var n=arguments,r=Ne(n[0]);return n.length<3?r:r.replace(n[1],n[2])}var gA=lt(function(n,r,o){return n+(o?"_":"")+r.toLowerCase()});function vA(n,r,o){return o&&typeof o!="number"&&kn(n,r,o)&&(r=o=t),o=o===t?ue:o>>>0,o?(n=Ne(n),n&&(typeof r=="string"||r!=null&&!Ds(r))&&(r=On(r),!r&&et(n))?Or(Wn(n),0,o):n.split(r,o)):[]}var EA=lt(function(n,r,o){return n+(o?" ":"")+Ms(r)});function fA(n,r,o){return n=Ne(n),o=o==null?0:Br(Ee(o),0,n.length),r=On(r),n.slice(o,o+r.length)==r}function mA(n,r,o){var u=E.templateSettings;o&&kn(n,r,o)&&(r=t),n=Ne(n),r=Ca({},r,u,bu);var g=Ca({},r.imports,u.imports,bu),m=Qe(g),p=Ci(g,m),A,_,G=0,B=r.interpolate||ia,w="__p += '",z=Ji((r.escape||ia).source+"|"+B.source+"|"+(B===$o?Jv:ia).source+"|"+(r.evaluate||ia).source+"|$","g"),re="//# sourceURL="+(Le.call(r,"sourceURL")?(r.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++_E+"]")+`
`;n.replace(z,function(ke,Te,Ae,Kn,gn,Dn){return Ae||(Ae=Kn),w+=n.slice(G,Dn).replace(nE,xE),Te&&(A=!0,w+=`' +
__e(`+Te+`) +
'`),gn&&(_=!0,w+=`';
`+gn+`;
__p += '`),Ae&&(w+=`' +
((__t = (`+Ae+`)) == null ? '' : __t) +
'`),G=Dn+ke.length,ke}),w+=`';
`;var de=Le.call(r,"variable")&&r.variable;if(!de)w=`with (obj) {
`+w+`
}
`;else if(Cv.test(de))throw new ge(k);w=(_?w.replace(Lv,""):w).replace(Kv,"$1").replace(Dv,"$1;"),w="function("+(de||"obj")+`) {
`+(de?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(A?", __e = _.escape":"")+(_?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+w+`return __p
}`;var fe=Td(function(){return be(m,re+"return "+w).apply(t,p)});if(fe.source=w,Ks(fe))throw fe;return fe}function TA(n){return Ne(n).toLowerCase()}function pA(n){return Ne(n).toUpperCase()}function hA(n,r,o){if(n=Ne(n),n&&(o||r===t))return Nl(n);if(!n||!(r=On(r)))return n;var u=Wn(n),g=Wn(r),m=Sl(u,g),p=Il(u,g)+1;return Or(u,m,p).join("")}function AA(n,r,o){if(n=Ne(n),n&&(o||r===t))return n.slice(0,Ll(n)+1);if(!n||!(r=On(r)))return n;var u=Wn(n),g=Il(u,Wn(r))+1;return Or(u,0,g).join("")}function yA(n,r,o){if(n=Ne(n),n&&(o||r===t))return n.replace(Ki,"");if(!n||!(r=On(r)))return n;var u=Wn(n),g=Sl(u,Wn(r));return Or(u,g).join("")}function cA(n,r){var o=W,u=x;if(He(r)){var g="separator"in r?r.separator:g;o="length"in r?Ee(r.length):o,u="omission"in r?On(r.omission):u}n=Ne(n);var m=n.length;if(et(n)){var p=Wn(n);m=p.length}if(o>=m)return n;var A=o-nt(u);if(A<1)return u;var _=p?Or(p,0,A).join(""):n.slice(0,A);if(g===t)return _+u;if(p&&(A+=_.length-A),Ds(g)){if(n.slice(A).search(g)){var G,B=_;for(g.global||(g=Ji(g.source,Ne(Jo.exec(g))+"g")),g.lastIndex=0;G=g.exec(B);)var w=G.index;_=_.slice(0,w===t?A:w)}}else if(n.indexOf(On(g),A)!=A){var z=_.lastIndexOf(g);z>-1&&(_=_.slice(0,z))}return _+u}function RA(n){return n=Ne(n),n&&Pv.test(n)?n.replace(Yo,ZE):n}var _A=lt(function(n,r,o){return n+(o?" ":"")+r.toUpperCase()}),Ms=pu("toUpperCase");function md(n,r,o){return n=Ne(n),r=o?t:r,r===t?CE(n)?ef(n):GE(n):n.match(r)||[]}var Td=me(function(n,r){try{return Sn(n,t,r)}catch(o){return Ks(o)?o:new ge(o)}}),bA=fr(function(n,r){return Gn(r,function(o){o=ir(o),vr(n,o,Os(n[o],n))}),n});function NA(n){var r=n==null?0:n.length,o=oe();return n=r?Ve(n,function(u){if(typeof u[1]!="function")throw new Bn(d);return[o(u[0]),u[1]]}):[],me(function(u){for(var g=-1;++g<r;){var m=n[g];if(Sn(m[0],this,u))return Sn(m[1],this,u)}})}function SA(n){return Xf(Vn(n,h))}function js(n){return function(){return n}}function IA(n,r){return n==null||n!==n?r:n}var OA=Au(),LA=Au(!0);function Rn(n){return n}function Gs(n){return zl(typeof n=="function"?n:Vn(n,h))}function KA(n){return Xl(Vn(n,h))}function DA(n,r){return Ql(n,Vn(r,h))}var PA=me(function(n,r){return function(o){return Mt(o,n,r)}}),FA=me(function(n,r){return function(o){return Mt(n,o,r)}});function Bs(n,r,o){var u=Qe(r),g=Sa(r,u);o==null&&!(He(r)&&(g.length||!u.length))&&(o=r,r=n,n=this,g=Sa(r,Qe(r)));var m=!(He(o)&&"chain"in o)||!!o.chain,p=Tr(n);return Gn(g,function(A){var _=r[A];n[A]=_,p&&(n.prototype[A]=function(){var G=this.__chain__;if(m||G){var B=n(this.__wrapped__),w=B.__actions__=An(this.__actions__);return w.push({func:_,args:arguments,thisArg:n}),B.__chain__=G,B}return _.apply(n,Rr([this.value()],arguments))})}),n}function MA(){return tn._===this&&(tn._=of),this}function ws(){}function jA(n){return n=Ee(n),me(function(r){return eu(r,n)})}var GA=ms(Ve),BA=ms(yl),wA=ms(Hi);function pd(n){return Rs(n)?Ui(ir(n)):fm(n)}function VA(n){return function(r){return n==null?t:wr(n,r)}}var HA=cu(),UA=cu(!0);function Vs(){return[]}function Hs(){return!1}function qA(){return{}}function xA(){return""}function YA(){return!0}function CA(n,r){if(n=Ee(n),n<1||n>C)return[];var o=ue,u=ln(n,ue);r=oe(r),n-=ue;for(var g=Yi(u,r);++o<n;)r(o);return g}function $A(n){return ve(n)?Ve(n,ir):Ln(n)?[n]:An(Bu(Ne(n)))}function JA(n){var r=++af;return Ne(n)+r}var WA=Pa(function(n,r){return n+r},0),zA=Ts("ceil"),ZA=Pa(function(n,r){return n/r},1),XA=Ts("floor");function QA(n){return n&&n.length?Na(n,Rn,rs):t}function ey(n,r){return n&&n.length?Na(n,oe(r,2),rs):t}function ny(n){return _l(n,Rn)}function ry(n,r){return _l(n,oe(r,2))}function ty(n){return n&&n.length?Na(n,Rn,ss):t}function ay(n,r){return n&&n.length?Na(n,oe(r,2),ss):t}var iy=Pa(function(n,r){return n*r},1),sy=Ts("round"),oy=Pa(function(n,r){return n-r},0);function ly(n){return n&&n.length?xi(n,Rn):0}function uy(n,r){return n&&n.length?xi(n,oe(r,2)):0}return E.after=Kp,E.ary=Wu,E.assign=ph,E.assignIn=ud,E.assignInWith=Ca,E.assignWith=hh,E.at=Ah,E.before=zu,E.bind=Os,E.bindAll=bA,E.bindKey=Zu,E.castArray=qp,E.chain=Cu,E.chunk=Xm,E.compact=Qm,E.concat=eT,E.cond=NA,E.conforms=SA,E.constant=js,E.countBy=lp,E.create=yh,E.curry=Xu,E.curryRight=Qu,E.debounce=ed,E.defaults=ch,E.defaultsDeep=Rh,E.defer=Dp,E.delay=Pp,E.difference=nT,E.differenceBy=rT,E.differenceWith=tT,E.drop=aT,E.dropRight=iT,E.dropRightWhile=sT,E.dropWhile=oT,E.fill=lT,E.filter=dp,E.flatMap=vp,E.flatMapDeep=Ep,E.flatMapDepth=fp,E.flatten=Uu,E.flattenDeep=uT,E.flattenDepth=dT,E.flip=Fp,E.flow=OA,E.flowRight=LA,E.fromPairs=kT,E.functions=Lh,E.functionsIn=Kh,E.groupBy=mp,E.initial=vT,E.intersection=ET,E.intersectionBy=fT,E.intersectionWith=mT,E.invert=Ph,E.invertBy=Fh,E.invokeMap=pp,E.iteratee=Gs,E.keyBy=hp,E.keys=Qe,E.keysIn=cn,E.map=Va,E.mapKeys=jh,E.mapValues=Gh,E.matches=KA,E.matchesProperty=DA,E.memoize=Ua,E.merge=Bh,E.mergeWith=dd,E.method=PA,E.methodOf=FA,E.mixin=Bs,E.negate=qa,E.nthArg=jA,E.omit=wh,E.omitBy=Vh,E.once=Mp,E.orderBy=Ap,E.over=GA,E.overArgs=jp,E.overEvery=BA,E.overSome=wA,E.partial=Ls,E.partialRight=nd,E.partition=yp,E.pick=Hh,E.pickBy=kd,E.property=pd,E.propertyOf=VA,E.pull=AT,E.pullAll=xu,E.pullAllBy=yT,E.pullAllWith=cT,E.pullAt=RT,E.range=HA,E.rangeRight=UA,E.rearg=Gp,E.reject=_p,E.remove=_T,E.rest=Bp,E.reverse=Ss,E.sampleSize=Np,E.set=qh,E.setWith=xh,E.shuffle=Sp,E.slice=bT,E.sortBy=Lp,E.sortedUniq=DT,E.sortedUniqBy=PT,E.split=vA,E.spread=wp,E.tail=FT,E.take=MT,E.takeRight=jT,E.takeRightWhile=GT,E.takeWhile=BT,E.tap=QT,E.throttle=Vp,E.thru=wa,E.toArray=sd,E.toPairs=gd,E.toPairsIn=vd,E.toPath=$A,E.toPlainObject=ld,E.transform=Yh,E.unary=Hp,E.union=wT,E.unionBy=VT,E.unionWith=HT,E.uniq=UT,E.uniqBy=qT,E.uniqWith=xT,E.unset=Ch,E.unzip=Is,E.unzipWith=Yu,E.update=$h,E.updateWith=Jh,E.values=kt,E.valuesIn=Wh,E.without=YT,E.words=md,E.wrap=Up,E.xor=CT,E.xorBy=$T,E.xorWith=JT,E.zip=WT,E.zipObject=zT,E.zipObjectDeep=ZT,E.zipWith=XT,E.entries=gd,E.entriesIn=vd,E.extend=ud,E.extendWith=Ca,Bs(E,E),E.add=WA,E.attempt=Td,E.camelCase=Qh,E.capitalize=Ed,E.ceil=zA,E.clamp=zh,E.clone=xp,E.cloneDeep=Cp,E.cloneDeepWith=$p,E.cloneWith=Yp,E.conformsTo=Jp,E.deburr=fd,E.defaultTo=IA,E.divide=ZA,E.endsWith=eA,E.eq=Zn,E.escape=nA,E.escapeRegExp=rA,E.every=up,E.find=kp,E.findIndex=Vu,E.findKey=_h,E.findLast=gp,E.findLastIndex=Hu,E.findLastKey=bh,E.floor=XA,E.forEach=$u,E.forEachRight=Ju,E.forIn=Nh,E.forInRight=Sh,E.forOwn=Ih,E.forOwnRight=Oh,E.get=Ps,E.gt=Wp,E.gte=zp,E.has=Dh,E.hasIn=Fs,E.head=qu,E.identity=Rn,E.includes=Tp,E.indexOf=gT,E.inRange=Zh,E.invoke=Mh,E.isArguments=Ur,E.isArray=ve,E.isArrayBuffer=Zp,E.isArrayLike=yn,E.isArrayLikeObject=Ye,E.isBoolean=Xp,E.isBuffer=Lr,E.isDate=Qp,E.isElement=eh,E.isEmpty=nh,E.isEqual=rh,E.isEqualWith=th,E.isError=Ks,E.isFinite=ah,E.isFunction=Tr,E.isInteger=rd,E.isLength=xa,E.isMap=td,E.isMatch=ih,E.isMatchWith=sh,E.isNaN=oh,E.isNative=lh,E.isNil=dh,E.isNull=uh,E.isNumber=ad,E.isObject=He,E.isObjectLike=qe,E.isPlainObject=Ht,E.isRegExp=Ds,E.isSafeInteger=kh,E.isSet=id,E.isString=Ya,E.isSymbol=Ln,E.isTypedArray=dt,E.isUndefined=gh,E.isWeakMap=vh,E.isWeakSet=Eh,E.join=TT,E.kebabCase=tA,E.last=Un,E.lastIndexOf=pT,E.lowerCase=aA,E.lowerFirst=iA,E.lt=fh,E.lte=mh,E.max=QA,E.maxBy=ey,E.mean=ny,E.meanBy=ry,E.min=ty,E.minBy=ay,E.stubArray=Vs,E.stubFalse=Hs,E.stubObject=qA,E.stubString=xA,E.stubTrue=YA,E.multiply=iy,E.nth=hT,E.noConflict=MA,E.noop=ws,E.now=Ha,E.pad=sA,E.padEnd=oA,E.padStart=lA,E.parseInt=uA,E.random=Xh,E.reduce=cp,E.reduceRight=Rp,E.repeat=dA,E.replace=kA,E.result=Uh,E.round=sy,E.runInContext=c,E.sample=bp,E.size=Ip,E.snakeCase=gA,E.some=Op,E.sortedIndex=NT,E.sortedIndexBy=ST,E.sortedIndexOf=IT,E.sortedLastIndex=OT,E.sortedLastIndexBy=LT,E.sortedLastIndexOf=KT,E.startCase=EA,E.startsWith=fA,E.subtract=oy,E.sum=ly,E.sumBy=uy,E.template=mA,E.times=CA,E.toFinite=pr,E.toInteger=Ee,E.toLength=od,E.toLower=TA,E.toNumber=qn,E.toSafeInteger=Th,E.toString=Ne,E.toUpper=pA,E.trim=hA,E.trimEnd=AA,E.trimStart=yA,E.truncate=cA,E.unescape=RA,E.uniqueId=JA,E.upperCase=_A,E.upperFirst=Ms,E.each=$u,E.eachRight=Ju,E.first=qu,Bs(E,function(){var n={};return tr(E,function(r,o){Le.call(E.prototype,o)||(n[o]=r)}),n}(),{chain:!1}),E.VERSION=a,Gn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){E[n].placeholder=E}),Gn(["drop","take"],function(n,r){he.prototype[n]=function(o){o=o===t?1:Ze(Ee(o),0);var u=this.__filtered__&&!r?new he(this):this.clone();return u.__filtered__?u.__takeCount__=ln(o,u.__takeCount__):u.__views__.push({size:ln(o,ue),type:n+(u.__dir__<0?"Right":"")}),u},he.prototype[n+"Right"]=function(o){return this.reverse()[n](o).reverse()}}),Gn(["filter","map","takeWhile"],function(n,r){var o=r+1,u=o==J||o==U;he.prototype[n]=function(g){var m=this.clone();return m.__iteratees__.push({iteratee:oe(g,3),type:o}),m.__filtered__=m.__filtered__||u,m}}),Gn(["head","last"],function(n,r){var o="take"+(r?"Right":"");he.prototype[n]=function(){return this[o](1).value()[0]}}),Gn(["initial","tail"],function(n,r){var o="drop"+(r?"":"Right");he.prototype[n]=function(){return this.__filtered__?new he(this):this[o](1)}}),he.prototype.compact=function(){return this.filter(Rn)},he.prototype.find=function(n){return this.filter(n).head()},he.prototype.findLast=function(n){return this.reverse().find(n)},he.prototype.invokeMap=me(function(n,r){return typeof n=="function"?new he(this):this.map(function(o){return Mt(o,n,r)})}),he.prototype.reject=function(n){return this.filter(qa(oe(n)))},he.prototype.slice=function(n,r){n=Ee(n);var o=this;return o.__filtered__&&(n>0||r<0)?new he(o):(n<0?o=o.takeRight(-n):n&&(o=o.drop(n)),r!==t&&(r=Ee(r),o=r<0?o.dropRight(-r):o.take(r-n)),o)},he.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},he.prototype.toArray=function(){return this.take(ue)},tr(he.prototype,function(n,r){var o=/^(?:filter|find|map|reject)|While$/.test(r),u=/^(?:head|last)$/.test(r),g=E[u?"take"+(r=="last"?"Right":""):r],m=u||/^find/.test(r);g&&(E.prototype[r]=function(){var p=this.__wrapped__,A=u?[1]:arguments,_=p instanceof he,G=A[0],B=_||ve(p),w=function(Te){var Ae=g.apply(E,Rr([Te],A));return u&&z?Ae[0]:Ae};B&&o&&typeof G=="function"&&G.length!=1&&(_=B=!1);var z=this.__chain__,re=!!this.__actions__.length,de=m&&!z,fe=_&&!re;if(!m&&B){p=fe?p:new he(this);var ke=n.apply(p,A);return ke.__actions__.push({func:wa,args:[w],thisArg:t}),new wn(ke,z)}return de&&fe?n.apply(this,A):(ke=this.thru(w),de?u?ke.value()[0]:ke.value():ke)})}),Gn(["pop","push","shift","sort","splice","unshift"],function(n){var r=ka[n],o=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",u=/^(?:pop|shift)$/.test(n);E.prototype[n]=function(){var g=arguments;if(u&&!this.__chain__){var m=this.value();return r.apply(ve(m)?m:[],g)}return this[o](function(p){return r.apply(ve(p)?p:[],g)})}}),tr(he.prototype,function(n,r){var o=E[r];if(o){var u=o.name+"";Le.call(it,u)||(it[u]=[]),it[u].push({name:r,func:o})}}),it[Da(t,D).name]=[{name:"wrapper",func:t}],he.prototype.clone=Rf,he.prototype.reverse=_f,he.prototype.value=bf,E.prototype.at=ep,E.prototype.chain=np,E.prototype.commit=rp,E.prototype.next=tp,E.prototype.plant=ip,E.prototype.reverse=sp,E.prototype.toJSON=E.prototype.valueOf=E.prototype.value=op,E.prototype.first=E.prototype.head,It&&(E.prototype[It]=ap),E},rt=nf();Fr?((Fr.exports=rt)._=rt,Gi._=rt):tn._=rt}).call(Ut)})(ei,ei.exports);ei.exports;pn(mi);const Lg=P.forwardRef((e,i)=>M.jsx(vt,{gap:"2",style:{display:"flex"},...e,ref:i}));Lg.displayName="FaktaGruppe";Lg.__docgenInfo={description:"",methods:[],displayName:"FaktaGruppe"};var Kg={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var i={}.hasOwnProperty;function t(){for(var l="",d=0;d<arguments.length;d++){var k=arguments[d];k&&(l=s(l,a(k)))}return l}function a(l){if(typeof l=="string"||typeof l=="number")return l;if(typeof l!="object")return"";if(Array.isArray(l))return t.apply(null,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var d="";for(var k in l)i.call(l,k)&&l[k]&&(d=s(d,k));return d}function s(l,d){return d?l?l+" "+d:l+d:l}e.exports?(t.default=t,e.exports=t):window.classNames=t})()})(Kg);var IN=Kg.exports;const fo=pk(IN);var ON=Object.defineProperty,LN=(e,i,t)=>i in e?ON(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t,Wd=(e,i,t)=>LN(e,typeof i!="symbol"?i+"":i,t),KN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Dg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Pg={exports:{}},Yt={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zd;function DN(){if(zd)return Yt;zd=1;var e=Y,i=Symbol.for("react.element"),t=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(k,v,T){var f,h={},y=null,K=null;T!==void 0&&(y=""+T),v.key!==void 0&&(y=""+v.key),v.ref!==void 0&&(K=v.ref);for(f in v)a.call(v,f)&&!l.hasOwnProperty(f)&&(h[f]=v[f]);if(k&&k.defaultProps)for(f in v=k.defaultProps,v)h[f]===void 0&&(h[f]=v[f]);return{$$typeof:i,type:k,key:y,ref:K,props:h,_owner:s.current}}return Yt.Fragment=t,Yt.jsx=d,Yt.jsxs=d,Yt}Pg.exports=DN();var pe=Pg.exports,Fg={exports:{}};(function(e,i){(function(t,a){e.exports=a()})(KN,function(){var t=1e3,a=6e4,s=36e5,l="millisecond",d="second",k="minute",v="hour",T="day",f="week",h="month",y="quarter",K="year",j="date",R="Invalid Date",N=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,D=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,q={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(J){var H=["th","st","nd","rd"],U=J%100;return"["+J+(H[(U-20)%10]||H[U]||H[0])+"]"}},L=function(J,H,U){var Z=String(J);return!Z||Z.length>=H?J:""+Array(H+1-Z.length).join(U)+J},Q={s:L,z:function(J){var H=-J.utcOffset(),U=Math.abs(H),Z=Math.floor(U/60),C=U%60;return(H<=0?"+":"-")+L(Z,2,"0")+":"+L(C,2,"0")},m:function J(H,U){if(H.date()<U.date())return-J(U,H);var Z=12*(U.year()-H.year())+(U.month()-H.month()),C=H.clone().add(Z,h),ie=U-C<0,se=H.clone().add(Z+(ie?-1:1),h);return+(-(Z+(U-C)/(ie?C-se:se-C))||0)},a:function(J){return J<0?Math.ceil(J)||0:Math.floor(J)},p:function(J){return{M:h,y:K,w:f,d:T,D:j,h:v,m:k,s:d,ms:l,Q:y}[J]||String(J||"").toLowerCase().replace(/s$/,"")},u:function(J){return J===void 0}},O="en",V={};V[O]=q;var I="$isDayjsObject",b=function(J){return J instanceof te||!(!J||!J[I])},$=function J(H,U,Z){var C;if(!H)return O;if(typeof H=="string"){var ie=H.toLowerCase();V[ie]&&(C=ie),U&&(V[ie]=U,C=ie);var se=H.split("-");if(!C&&se.length>1)return J(se[0])}else{var ue=H.name;V[ue]=H,C=ue}return!Z&&C&&(O=C),C||!Z&&O},W=function(J,H){if(b(J))return J.clone();var U=typeof H=="object"?H:{};return U.date=J,U.args=arguments,new te(U)},x=Q;x.l=$,x.i=b,x.w=function(J,H){return W(J,{locale:H.$L,utc:H.$u,x:H.$x,$offset:H.$offset})};var te=function(){function J(U){this.$L=$(U.locale,null,!0),this.parse(U),this.$x=this.$x||U.x||{},this[I]=!0}var H=J.prototype;return H.parse=function(U){this.$d=function(Z){var C=Z.date,ie=Z.utc;if(C===null)return new Date(NaN);if(x.u(C))return new Date;if(C instanceof Date)return new Date(C);if(typeof C=="string"&&!/Z$/i.test(C)){var se=C.match(N);if(se){var ue=se[2]-1||0,Pe=(se[7]||"0").substring(0,3);return ie?new Date(Date.UTC(se[1],ue,se[3]||1,se[4]||0,se[5]||0,se[6]||0,Pe)):new Date(se[1],ue,se[3]||1,se[4]||0,se[5]||0,se[6]||0,Pe)}}return new Date(C)}(U),this.init()},H.init=function(){var U=this.$d;this.$y=U.getFullYear(),this.$M=U.getMonth(),this.$D=U.getDate(),this.$W=U.getDay(),this.$H=U.getHours(),this.$m=U.getMinutes(),this.$s=U.getSeconds(),this.$ms=U.getMilliseconds()},H.$utils=function(){return x},H.isValid=function(){return this.$d.toString()!==R},H.isSame=function(U,Z){var C=W(U);return this.startOf(Z)<=C&&C<=this.endOf(Z)},H.isAfter=function(U,Z){return W(U)<this.startOf(Z)},H.isBefore=function(U,Z){return this.endOf(Z)<W(U)},H.$g=function(U,Z,C){return x.u(U)?this[Z]:this.set(C,U)},H.unix=function(){return Math.floor(this.valueOf()/1e3)},H.valueOf=function(){return this.$d.getTime()},H.startOf=function(U,Z){var C=this,ie=!!x.u(Z)||Z,se=x.p(U),ue=function(sn,We){var rn=x.w(C.$u?Date.UTC(C.$y,We,sn):new Date(C.$y,We,sn),C);return ie?rn:rn.endOf(T)},Pe=function(sn,We){return x.w(C.toDate()[sn].apply(C.toDate("s"),(ie?[0,0,0,0]:[23,59,59,999]).slice(We)),C)},je=this.$W,Je=this.$M,xe=this.$D,_n="set"+(this.$u?"UTC":"");switch(se){case K:return ie?ue(1,0):ue(31,11);case h:return ie?ue(1,Je):ue(0,Je+1);case f:var Cn=this.$locale().weekStart||0,bn=(je<Cn?je+7:je)-Cn;return ue(ie?xe-bn:xe+(6-bn),Je);case T:case j:return Pe(_n+"Hours",0);case v:return Pe(_n+"Minutes",1);case k:return Pe(_n+"Seconds",2);case d:return Pe(_n+"Milliseconds",3);default:return this.clone()}},H.endOf=function(U){return this.startOf(U,!1)},H.$set=function(U,Z){var C,ie=x.p(U),se="set"+(this.$u?"UTC":""),ue=(C={},C[T]=se+"Date",C[j]=se+"Date",C[h]=se+"Month",C[K]=se+"FullYear",C[v]=se+"Hours",C[k]=se+"Minutes",C[d]=se+"Seconds",C[l]=se+"Milliseconds",C)[ie],Pe=ie===T?this.$D+(Z-this.$W):Z;if(ie===h||ie===K){var je=this.clone().set(j,1);je.$d[ue](Pe),je.init(),this.$d=je.set(j,Math.min(this.$D,je.daysInMonth())).$d}else ue&&this.$d[ue](Pe);return this.init(),this},H.set=function(U,Z){return this.clone().$set(U,Z)},H.get=function(U){return this[x.p(U)]()},H.add=function(U,Z){var C,ie=this;U=Number(U);var se=x.p(Z),ue=function(Je){var xe=W(ie);return x.w(xe.date(xe.date()+Math.round(Je*U)),ie)};if(se===h)return this.set(h,this.$M+U);if(se===K)return this.set(K,this.$y+U);if(se===T)return ue(1);if(se===f)return ue(7);var Pe=(C={},C[k]=a,C[v]=s,C[d]=t,C)[se]||1,je=this.$d.getTime()+U*Pe;return x.w(je,this)},H.subtract=function(U,Z){return this.add(-1*U,Z)},H.format=function(U){var Z=this,C=this.$locale();if(!this.isValid())return C.invalidDate||R;var ie=U||"YYYY-MM-DDTHH:mm:ssZ",se=x.z(this),ue=this.$H,Pe=this.$m,je=this.$M,Je=C.weekdays,xe=C.months,_n=C.meridiem,Cn=function(We,rn,hn,$n){return We&&(We[rn]||We(Z,ie))||hn[rn].slice(0,$n)},bn=function(We){return x.s(ue%12||12,We,"0")},sn=_n||function(We,rn,hn){var $n=We<12?"AM":"PM";return hn?$n.toLowerCase():$n};return ie.replace(D,function(We,rn){return rn||function(hn){switch(hn){case"YY":return String(Z.$y).slice(-2);case"YYYY":return x.s(Z.$y,4,"0");case"M":return je+1;case"MM":return x.s(je+1,2,"0");case"MMM":return Cn(C.monthsShort,je,xe,3);case"MMMM":return Cn(xe,je);case"D":return Z.$D;case"DD":return x.s(Z.$D,2,"0");case"d":return String(Z.$W);case"dd":return Cn(C.weekdaysMin,Z.$W,Je,2);case"ddd":return Cn(C.weekdaysShort,Z.$W,Je,3);case"dddd":return Je[Z.$W];case"H":return String(ue);case"HH":return x.s(ue,2,"0");case"h":return bn(1);case"hh":return bn(2);case"a":return sn(ue,Pe,!0);case"A":return sn(ue,Pe,!1);case"m":return String(Pe);case"mm":return x.s(Pe,2,"0");case"s":return String(Z.$s);case"ss":return x.s(Z.$s,2,"0");case"SSS":return x.s(Z.$ms,3,"0");case"Z":return se}return null}(We)||se.replace(":","")})},H.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},H.diff=function(U,Z,C){var ie,se=this,ue=x.p(Z),Pe=W(U),je=(Pe.utcOffset()-this.utcOffset())*a,Je=this-Pe,xe=function(){return x.m(se,Pe)};switch(ue){case K:ie=xe()/12;break;case h:ie=xe();break;case y:ie=xe()/3;break;case f:ie=(Je-je)/6048e5;break;case T:ie=(Je-je)/864e5;break;case v:ie=Je/s;break;case k:ie=Je/a;break;case d:ie=Je/t;break;default:ie=Je}return C?ie:x.a(ie)},H.daysInMonth=function(){return this.endOf(h).$D},H.$locale=function(){return V[this.$L]},H.locale=function(U,Z){if(!U)return this.$L;var C=this.clone(),ie=$(U,Z,!0);return ie&&(C.$L=ie),C},H.clone=function(){return x.w(this.$d,this)},H.toDate=function(){return new Date(this.valueOf())},H.toJSON=function(){return this.isValid()?this.toISOString():null},H.toISOString=function(){return this.$d.toISOString()},H.toString=function(){return this.$d.toUTCString()},J}(),le=te.prototype;return W.prototype=le,[["$ms",l],["$s",d],["$m",k],["$H",v],["$W",T],["$M",h],["$y",K],["$D",j]].forEach(function(J){le[J[1]]=function(H){return this.$g(H,J[0],J[1])}}),W.extend=function(J,H){return J.$i||(J(H,te,W),J.$i=!0),W},W.locale=$,W.isDayjs=b,W.unix=function(J){return W(1e3*J)},W.en=V[O],W.Ls=V,W.p={},W})})(Fg);var PN=Fg.exports;const Ti=Dg(PN);var mo=function(e,i){return mo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s])},mo(e,i)};function nr(e,i){if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");mo(e,i);function t(){this.constructor=e}e.prototype=i===null?Object.create(i):(t.prototype=i.prototype,new t)}var ne=function(){return ne=Object.assign||function(e){for(var i,t=1,a=arguments.length;t<a;t++){i=arguments[t];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e},ne.apply(this,arguments)};function pi(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t}function Tn(e,i,t){if(arguments.length===2)for(var a=0,s=i.length,l;a<s;a++)(l||!(a in i))&&(l||(l=Array.prototype.slice.call(i,0,a)),l[a]=i[a]);return e.concat(l||Array.prototype.slice.call(i))}function fn(e,i){var t=i&&i.cache?i.cache:wN,a=i&&i.serializer?i.serializer:BN,s=i&&i.strategy?i.strategy:MN;return s(e,{cache:t,serializer:a})}function FN(e){return e==null||typeof e=="number"||typeof e=="boolean"}function Mg(e,i,t,a){var s=FN(a)?a:t(a),l=i.get(s);return typeof l>"u"&&(l=e.call(this,a),i.set(s,l)),l}function jg(e,i,t){var a=Array.prototype.slice.call(arguments,3),s=t(a),l=i.get(s);return typeof l>"u"&&(l=e.apply(this,a),i.set(s,l)),l}function wo(e,i,t,a,s){return t.bind(i,e,a,s)}function MN(e,i){var t=e.length===1?Mg:jg;return wo(e,this,t,i.cache.create(),i.serializer)}function jN(e,i){return wo(e,this,jg,i.cache.create(),i.serializer)}function GN(e,i){return wo(e,this,Mg,i.cache.create(),i.serializer)}var BN=function(){return JSON.stringify(arguments)};function Vo(){this.cache=Object.create(null)}Vo.prototype.get=function(e){return this.cache[e]};Vo.prototype.set=function(e,i){this.cache[e]=i};var wN={create:function(){return new Vo}},mn={variadic:jN,monadic:GN};function Gg(e,i,t){if(t===void 0&&(t=Error),!e)throw new t(i)}fn(function(){for(var e,i=[],t=0;t<arguments.length;t++)i[t]=arguments[t];return new((e=Intl.NumberFormat).bind.apply(e,Tn([void 0],i,!1)))},{strategy:mn.variadic});fn(function(){for(var e,i=[],t=0;t<arguments.length;t++)i[t]=arguments[t];return new((e=Intl.DateTimeFormat).bind.apply(e,Tn([void 0],i,!1)))},{strategy:mn.variadic});fn(function(){for(var e,i=[],t=0;t<arguments.length;t++)i[t]=arguments[t];return new((e=Intl.PluralRules).bind.apply(e,Tn([void 0],i,!1)))},{strategy:mn.variadic});fn(function(){for(var e,i=[],t=0;t<arguments.length;t++)i[t]=arguments[t];return new((e=Intl.Locale).bind.apply(e,Tn([void 0],i,!1)))},{strategy:mn.variadic});fn(function(){for(var e,i=[],t=0;t<arguments.length;t++)i[t]=arguments[t];return new((e=Intl.ListFormat).bind.apply(e,Tn([void 0],i,!1)))},{strategy:mn.variadic});var ce;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(ce||(ce={}));var we;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(we||(we={}));var ht;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(ht||(ht={}));function Zd(e){return e.type===we.literal}function VN(e){return e.type===we.argument}function Bg(e){return e.type===we.number}function wg(e){return e.type===we.date}function Vg(e){return e.type===we.time}function Hg(e){return e.type===we.select}function Ug(e){return e.type===we.plural}function HN(e){return e.type===we.pound}function qg(e){return e.type===we.tag}function xg(e){return!!(e&&typeof e=="object"&&e.type===ht.number)}function To(e){return!!(e&&typeof e=="object"&&e.type===ht.dateTime)}var Yg=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,UN=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function qN(e){var i={};return e.replace(UN,function(t){var a=t.length;switch(t[0]){case"G":i.era=a===4?"long":a===5?"narrow":"short";break;case"y":i.year=a===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":i.month=["numeric","2-digit","short","long","narrow"][a-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":i.day=["numeric","2-digit"][a-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":i.weekday=a===4?"long":a===5?"narrow":"short";break;case"e":if(a<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");i.weekday=["short","long","narrow","short"][a-4];break;case"c":if(a<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");i.weekday=["short","long","narrow","short"][a-4];break;case"a":i.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":i.hourCycle="h12",i.hour=["numeric","2-digit"][a-1];break;case"H":i.hourCycle="h23",i.hour=["numeric","2-digit"][a-1];break;case"K":i.hourCycle="h11",i.hour=["numeric","2-digit"][a-1];break;case"k":i.hourCycle="h24",i.hour=["numeric","2-digit"][a-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":i.minute=["numeric","2-digit"][a-1];break;case"s":i.second=["numeric","2-digit"][a-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":i.timeZoneName=a<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),i}var xN=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function YN(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var i=e.split(xN).filter(function(y){return y.length>0}),t=[],a=0,s=i;a<s.length;a++){var l=s[a],d=l.split("/");if(d.length===0)throw new Error("Invalid number skeleton");for(var k=d[0],v=d.slice(1),T=0,f=v;T<f.length;T++){var h=f[T];if(h.length===0)throw new Error("Invalid number skeleton")}t.push({stem:k,options:v})}return t}function CN(e){return e.replace(/^(.*?)-/,"")}var Xd=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,Cg=/^(@+)?(\+|#+)?[rs]?$/g,$N=/(\*)(0+)|(#+)(0+)|(0+)/g,$g=/^(0+)$/;function Qd(e){var i={};return e[e.length-1]==="r"?i.roundingPriority="morePrecision":e[e.length-1]==="s"&&(i.roundingPriority="lessPrecision"),e.replace(Cg,function(t,a,s){return typeof s!="string"?(i.minimumSignificantDigits=a.length,i.maximumSignificantDigits=a.length):s==="+"?i.minimumSignificantDigits=a.length:a[0]==="#"?i.maximumSignificantDigits=a.length:(i.minimumSignificantDigits=a.length,i.maximumSignificantDigits=a.length+(typeof s=="string"?s.length:0)),""}),i}function Jg(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function JN(e){var i;if(e[0]==="E"&&e[1]==="E"?(i={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(i={notation:"scientific"},e=e.slice(1)),i){var t=e.slice(0,2);if(t==="+!"?(i.signDisplay="always",e=e.slice(2)):t==="+?"&&(i.signDisplay="exceptZero",e=e.slice(2)),!$g.test(e))throw new Error("Malformed concise eng/scientific notation");i.minimumIntegerDigits=e.length}return i}function ek(e){var i={},t=Jg(e);return t||i}function WN(e){for(var i={},t=0,a=e;t<a.length;t++){var s=a[t];switch(s.stem){case"percent":case"%":i.style="percent";continue;case"%x100":i.style="percent",i.scale=100;continue;case"currency":i.style="currency",i.currency=s.options[0];continue;case"group-off":case",_":i.useGrouping=!1;continue;case"precision-integer":case".":i.maximumFractionDigits=0;continue;case"measure-unit":case"unit":i.style="unit",i.unit=CN(s.options[0]);continue;case"compact-short":case"K":i.notation="compact",i.compactDisplay="short";continue;case"compact-long":case"KK":i.notation="compact",i.compactDisplay="long";continue;case"scientific":i=ne(ne(ne({},i),{notation:"scientific"}),s.options.reduce(function(v,T){return ne(ne({},v),ek(T))},{}));continue;case"engineering":i=ne(ne(ne({},i),{notation:"engineering"}),s.options.reduce(function(v,T){return ne(ne({},v),ek(T))},{}));continue;case"notation-simple":i.notation="standard";continue;case"unit-width-narrow":i.currencyDisplay="narrowSymbol",i.unitDisplay="narrow";continue;case"unit-width-short":i.currencyDisplay="code",i.unitDisplay="short";continue;case"unit-width-full-name":i.currencyDisplay="name",i.unitDisplay="long";continue;case"unit-width-iso-code":i.currencyDisplay="symbol";continue;case"scale":i.scale=parseFloat(s.options[0]);continue;case"rounding-mode-floor":i.roundingMode="floor";continue;case"rounding-mode-ceiling":i.roundingMode="ceil";continue;case"rounding-mode-down":i.roundingMode="trunc";continue;case"rounding-mode-up":i.roundingMode="expand";continue;case"rounding-mode-half-even":i.roundingMode="halfEven";continue;case"rounding-mode-half-down":i.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":i.roundingMode="halfExpand";continue;case"integer-width":if(s.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");s.options[0].replace($N,function(v,T,f,h,y,K){if(T)i.minimumIntegerDigits=f.length;else{if(h&&y)throw new Error("We currently do not support maximum integer digits");if(K)throw new Error("We currently do not support exact integer digits")}return""});continue}if($g.test(s.stem)){i.minimumIntegerDigits=s.stem.length;continue}if(Xd.test(s.stem)){if(s.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");s.stem.replace(Xd,function(v,T,f,h,y,K){return f==="*"?i.minimumFractionDigits=T.length:h&&h[0]==="#"?i.maximumFractionDigits=h.length:y&&K?(i.minimumFractionDigits=y.length,i.maximumFractionDigits=y.length+K.length):(i.minimumFractionDigits=T.length,i.maximumFractionDigits=T.length),""});var l=s.options[0];l==="w"?i=ne(ne({},i),{trailingZeroDisplay:"stripIfInteger"}):l&&(i=ne(ne({},i),Qd(l)));continue}if(Cg.test(s.stem)){i=ne(ne({},i),Qd(s.stem));continue}var d=Jg(s.stem);d&&(i=ne(ne({},i),d));var k=JN(s.stem);k&&(i=ne(ne({},i),k))}return i}var Wa={"001":["H","h"],419:["h","H","hB","hb"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["h","H","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["h","H","hB","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["h","H","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["h","H","hB","hb"],CU:["h","H","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["h","H","hB","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["h","H","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["h","H","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["h","H","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["h","H","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["h","H","hB","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["h","H","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["h","H","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["h","H","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"en-HK":["h","hb","H","hB"],"en-IL":["H","h","hb","hB"],"en-MY":["h","hb","H","hB"],"es-BR":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function zN(e,i){for(var t="",a=0;a<e.length;a++){var s=e.charAt(a);if(s==="j"){for(var l=0;a+1<e.length&&e.charAt(a+1)===s;)l++,a++;var d=1+(l&1),k=l<2?1:3+(l>>1),v="a",T=ZN(i);for((T=="H"||T=="k")&&(k=0);k-- >0;)t+=v;for(;d-- >0;)t=T+t}else s==="J"?t+="H":t+=s}return t}function ZN(e){var i=e.hourCycle;if(i===void 0&&e.hourCycles&&e.hourCycles.length&&(i=e.hourCycles[0]),i)switch(i){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var t=e.language,a;t!=="root"&&(a=e.maximize().region);var s=Wa[a||""]||Wa[t||""]||Wa["".concat(t,"-001")]||Wa["001"];return s[0]}var Js,XN=new RegExp("^".concat(Yg.source,"*")),QN=new RegExp("".concat(Yg.source,"*$"));function _e(e,i){return{start:e,end:i}}var eS=!!String.prototype.startsWith&&"_a".startsWith("a",1),nS=!!String.fromCodePoint,rS=!!Object.fromEntries,tS=!!String.prototype.codePointAt,aS=!!String.prototype.trimStart,iS=!!String.prototype.trimEnd,sS=!!Number.isSafeInteger,oS=sS?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},po=!0;try{var lS=zg("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");po=((Js=lS.exec("a"))===null||Js===void 0?void 0:Js[0])==="a"}catch{po=!1}var nk=eS?function(e,i,t){return e.startsWith(i,t)}:function(e,i,t){return e.slice(t,t+i.length)===i},ho=nS?String.fromCodePoint:function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];for(var t="",a=e.length,s=0,l;a>s;){if(l=e[s++],l>1114111)throw RangeError(l+" is not a valid code point");t+=l<65536?String.fromCharCode(l):String.fromCharCode(((l-=65536)>>10)+55296,l%1024+56320)}return t},rk=rS?Object.fromEntries:function(e){for(var i={},t=0,a=e;t<a.length;t++){var s=a[t],l=s[0],d=s[1];i[l]=d}return i},Wg=tS?function(e,i){return e.codePointAt(i)}:function(e,i){var t=e.length;if(!(i<0||i>=t)){var a=e.charCodeAt(i),s;return a<55296||a>56319||i+1===t||(s=e.charCodeAt(i+1))<56320||s>57343?a:(a-55296<<10)+(s-56320)+65536}},uS=aS?function(e){return e.trimStart()}:function(e){return e.replace(XN,"")},dS=iS?function(e){return e.trimEnd()}:function(e){return e.replace(QN,"")};function zg(e,i){return new RegExp(e,i)}var Ao;if(po){var tk=zg("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Ao=function(e,i){var t;tk.lastIndex=i;var a=tk.exec(e);return(t=a[1])!==null&&t!==void 0?t:""}}else Ao=function(e,i){for(var t=[];;){var a=Wg(e,i);if(a===void 0||Zg(a)||ES(a))break;t.push(a),i+=a>=65536?2:1}return ho.apply(void 0,t)};var kS=function(){function e(i,t){t===void 0&&(t={}),this.message=i,this.position={offset:0,line:1,column:1},this.ignoreTag=!!t.ignoreTag,this.locale=t.locale,this.requiresOtherClause=!!t.requiresOtherClause,this.shouldParseSkeletons=!!t.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(i,t,a){for(var s=[];!this.isEOF();){var l=this.char();if(l===123){var d=this.parseArgument(i,a);if(d.err)return d;s.push(d.val)}else{if(l===125&&i>0)break;if(l===35&&(t==="plural"||t==="selectordinal")){var k=this.clonePosition();this.bump(),s.push({type:we.pound,location:_e(k,this.clonePosition())})}else if(l===60&&!this.ignoreTag&&this.peek()===47){if(a)break;return this.error(ce.UNMATCHED_CLOSING_TAG,_e(this.clonePosition(),this.clonePosition()))}else if(l===60&&!this.ignoreTag&&yo(this.peek()||0)){var d=this.parseTag(i,t);if(d.err)return d;s.push(d.val)}else{var d=this.parseLiteral(i,t);if(d.err)return d;s.push(d.val)}}}return{val:s,err:null}},e.prototype.parseTag=function(i,t){var a=this.clonePosition();this.bump();var s=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:we.literal,value:"<".concat(s,"/>"),location:_e(a,this.clonePosition())},err:null};if(this.bumpIf(">")){var l=this.parseMessage(i+1,t,!0);if(l.err)return l;var d=l.val,k=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!yo(this.char()))return this.error(ce.INVALID_TAG,_e(k,this.clonePosition()));var v=this.clonePosition(),T=this.parseTagName();return s!==T?this.error(ce.UNMATCHED_CLOSING_TAG,_e(v,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:we.tag,value:s,children:d,location:_e(a,this.clonePosition())},err:null}:this.error(ce.INVALID_TAG,_e(k,this.clonePosition())))}else return this.error(ce.UNCLOSED_TAG,_e(a,this.clonePosition()))}else return this.error(ce.INVALID_TAG,_e(a,this.clonePosition()))},e.prototype.parseTagName=function(){var i=this.offset();for(this.bump();!this.isEOF()&&vS(this.char());)this.bump();return this.message.slice(i,this.offset())},e.prototype.parseLiteral=function(i,t){for(var a=this.clonePosition(),s="";;){var l=this.tryParseQuote(t);if(l){s+=l;continue}var d=this.tryParseUnquoted(i,t);if(d){s+=d;continue}var k=this.tryParseLeftAngleBracket();if(k){s+=k;continue}break}var v=_e(a,this.clonePosition());return{val:{type:we.literal,value:s,location:v},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!gS(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(i){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(i==="plural"||i==="selectordinal")break;return null;default:return null}this.bump();var t=[this.char()];for(this.bump();!this.isEOF();){var a=this.char();if(a===39)if(this.peek()===39)t.push(39),this.bump();else{this.bump();break}else t.push(a);this.bump()}return ho.apply(void 0,t)},e.prototype.tryParseUnquoted=function(i,t){if(this.isEOF())return null;var a=this.char();return a===60||a===123||a===35&&(t==="plural"||t==="selectordinal")||a===125&&i>0?null:(this.bump(),ho(a))},e.prototype.parseArgument=function(i,t){var a=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(ce.EXPECT_ARGUMENT_CLOSING_BRACE,_e(a,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(ce.EMPTY_ARGUMENT,_e(a,this.clonePosition()));var s=this.parseIdentifierIfPossible().value;if(!s)return this.error(ce.MALFORMED_ARGUMENT,_e(a,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(ce.EXPECT_ARGUMENT_CLOSING_BRACE,_e(a,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:we.argument,value:s,location:_e(a,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(ce.EXPECT_ARGUMENT_CLOSING_BRACE,_e(a,this.clonePosition())):this.parseArgumentOptions(i,t,s,a);default:return this.error(ce.MALFORMED_ARGUMENT,_e(a,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var i=this.clonePosition(),t=this.offset(),a=Ao(this.message,t),s=t+a.length;this.bumpTo(s);var l=this.clonePosition(),d=_e(i,l);return{value:a,location:d}},e.prototype.parseArgumentOptions=function(i,t,a,s){var l,d=this.clonePosition(),k=this.parseIdentifierIfPossible().value,v=this.clonePosition();switch(k){case"":return this.error(ce.EXPECT_ARGUMENT_TYPE,_e(d,v));case"number":case"date":case"time":{this.bumpSpace();var T=null;if(this.bumpIf(",")){this.bumpSpace();var f=this.clonePosition(),h=this.parseSimpleArgStyleIfPossible();if(h.err)return h;var y=dS(h.val);if(y.length===0)return this.error(ce.EXPECT_ARGUMENT_STYLE,_e(this.clonePosition(),this.clonePosition()));var K=_e(f,this.clonePosition());T={style:y,styleLocation:K}}var j=this.tryParseArgumentClose(s);if(j.err)return j;var R=_e(s,this.clonePosition());if(T&&nk(T==null?void 0:T.style,"::",0)){var N=uS(T.style.slice(2));if(k==="number"){var h=this.parseNumberSkeletonFromString(N,T.styleLocation);return h.err?h:{val:{type:we.number,value:a,location:R,style:h.val},err:null}}else{if(N.length===0)return this.error(ce.EXPECT_DATE_TIME_SKELETON,R);var D=N;this.locale&&(D=zN(N,this.locale));var y={type:ht.dateTime,pattern:D,location:T.styleLocation,parsedOptions:this.shouldParseSkeletons?qN(D):{}},q=k==="date"?we.date:we.time;return{val:{type:q,value:a,location:R,style:y},err:null}}}return{val:{type:k==="number"?we.number:k==="date"?we.date:we.time,value:a,location:R,style:(l=T==null?void 0:T.style)!==null&&l!==void 0?l:null},err:null}}case"plural":case"selectordinal":case"select":{var L=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(ce.EXPECT_SELECT_ARGUMENT_OPTIONS,_e(L,ne({},L)));this.bumpSpace();var Q=this.parseIdentifierIfPossible(),O=0;if(k!=="select"&&Q.value==="offset"){if(!this.bumpIf(":"))return this.error(ce.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,_e(this.clonePosition(),this.clonePosition()));this.bumpSpace();var h=this.tryParseDecimalInteger(ce.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,ce.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(h.err)return h;this.bumpSpace(),Q=this.parseIdentifierIfPossible(),O=h.val}var V=this.tryParsePluralOrSelectOptions(i,k,t,Q);if(V.err)return V;var j=this.tryParseArgumentClose(s);if(j.err)return j;var I=_e(s,this.clonePosition());return k==="select"?{val:{type:we.select,value:a,options:rk(V.val),location:I},err:null}:{val:{type:we.plural,value:a,options:rk(V.val),offset:O,pluralType:k==="plural"?"cardinal":"ordinal",location:I},err:null}}default:return this.error(ce.INVALID_ARGUMENT_TYPE,_e(d,v))}},e.prototype.tryParseArgumentClose=function(i){return this.isEOF()||this.char()!==125?this.error(ce.EXPECT_ARGUMENT_CLOSING_BRACE,_e(i,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var i=0,t=this.clonePosition();!this.isEOF();){var a=this.char();switch(a){case 39:{this.bump();var s=this.clonePosition();if(!this.bumpUntil("'"))return this.error(ce.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,_e(s,this.clonePosition()));this.bump();break}case 123:{i+=1,this.bump();break}case 125:{if(i>0)i-=1;else return{val:this.message.slice(t.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(t.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(i,t){var a=[];try{a=YN(i)}catch{return this.error(ce.INVALID_NUMBER_SKELETON,t)}return{val:{type:ht.number,tokens:a,location:t,parsedOptions:this.shouldParseSkeletons?WN(a):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(i,t,a,s){for(var l,d=!1,k=[],v=new Set,T=s.value,f=s.location;;){if(T.length===0){var h=this.clonePosition();if(t!=="select"&&this.bumpIf("=")){var y=this.tryParseDecimalInteger(ce.EXPECT_PLURAL_ARGUMENT_SELECTOR,ce.INVALID_PLURAL_ARGUMENT_SELECTOR);if(y.err)return y;f=_e(h,this.clonePosition()),T=this.message.slice(h.offset,this.offset())}else break}if(v.has(T))return this.error(t==="select"?ce.DUPLICATE_SELECT_ARGUMENT_SELECTOR:ce.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,f);T==="other"&&(d=!0),this.bumpSpace();var K=this.clonePosition();if(!this.bumpIf("{"))return this.error(t==="select"?ce.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:ce.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,_e(this.clonePosition(),this.clonePosition()));var j=this.parseMessage(i+1,t,a);if(j.err)return j;var R=this.tryParseArgumentClose(K);if(R.err)return R;k.push([T,{value:j.val,location:_e(K,this.clonePosition())}]),v.add(T),this.bumpSpace(),l=this.parseIdentifierIfPossible(),T=l.value,f=l.location}return k.length===0?this.error(t==="select"?ce.EXPECT_SELECT_ARGUMENT_SELECTOR:ce.EXPECT_PLURAL_ARGUMENT_SELECTOR,_e(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!d?this.error(ce.MISSING_OTHER_CLAUSE,_e(this.clonePosition(),this.clonePosition())):{val:k,err:null}},e.prototype.tryParseDecimalInteger=function(i,t){var a=1,s=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(a=-1);for(var l=!1,d=0;!this.isEOF();){var k=this.char();if(k>=48&&k<=57)l=!0,d=d*10+(k-48),this.bump();else break}var v=_e(s,this.clonePosition());return l?(d*=a,oS(d)?{val:d,err:null}:this.error(t,v)):this.error(i,v)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var i=this.position.offset;if(i>=this.message.length)throw Error("out of bound");var t=Wg(this.message,i);if(t===void 0)throw Error("Offset ".concat(i," is at invalid UTF-16 code unit boundary"));return t},e.prototype.error=function(i,t){return{val:null,err:{kind:i,message:this.message,location:t}}},e.prototype.bump=function(){if(!this.isEOF()){var i=this.char();i===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=i<65536?1:2)}},e.prototype.bumpIf=function(i){if(nk(this.message,i,this.offset())){for(var t=0;t<i.length;t++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(i){var t=this.offset(),a=this.message.indexOf(i,t);return a>=0?(this.bumpTo(a),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(i){if(this.offset()>i)throw Error("targetOffset ".concat(i," must be greater than or equal to the current offset ").concat(this.offset()));for(i=Math.min(i,this.message.length);;){var t=this.offset();if(t===i)break;if(t>i)throw Error("targetOffset ".concat(i," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&Zg(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var i=this.char(),t=this.offset(),a=this.message.charCodeAt(t+(i>=65536?2:1));return a??null},e}();function yo(e){return e>=97&&e<=122||e>=65&&e<=90}function gS(e){return yo(e)||e===47}function vS(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function Zg(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function ES(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function co(e){e.forEach(function(i){if(delete i.location,Hg(i)||Ug(i))for(var t in i.options)delete i.options[t].location,co(i.options[t].value);else Bg(i)&&xg(i.style)||(wg(i)||Vg(i))&&To(i.style)?delete i.style.location:qg(i)&&co(i.children)})}function fS(e,i){i===void 0&&(i={}),i=ne({shouldParseSkeletons:!0,requiresOtherClause:!0},i);var t=new kS(e,i).parse();if(t.err){var a=SyntaxError(ce[t.err.kind]);throw a.location=t.err.location,a.originalMessage=t.err.message,a}return i!=null&&i.captureLocation||co(t.val),t.val}var dr;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(dr||(dr={}));var Pr=function(e){nr(i,e);function i(t,a,s){var l=e.call(this,t)||this;return l.code=a,l.originalMessage=s,l}return i.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},i}(Error),ak=function(e){nr(i,e);function i(t,a,s,l){return e.call(this,'Invalid values for "'.concat(t,'": "').concat(a,'". Options are "').concat(Object.keys(s).join('", "'),'"'),dr.INVALID_VALUE,l)||this}return i}(Pr),mS=function(e){nr(i,e);function i(t,a,s){return e.call(this,'Value for "'.concat(t,'" must be of type ').concat(a),dr.INVALID_VALUE,s)||this}return i}(Pr),TS=function(e){nr(i,e);function i(t,a){return e.call(this,'The intl string context variable "'.concat(t,'" was not provided to the string "').concat(a,'"'),dr.MISSING_VALUE,a)||this}return i}(Pr),En;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(En||(En={}));function pS(e){return e.length<2?e:e.reduce(function(i,t){var a=i[i.length-1];return!a||a.type!==En.literal||t.type!==En.literal?i.push(t):a.value+=t.value,i},[])}function Xg(e){return typeof e=="function"}function Xa(e,i,t,a,s,l,d){if(e.length===1&&Zd(e[0]))return[{type:En.literal,value:e[0].value}];for(var k=[],v=0,T=e;v<T.length;v++){var f=T[v];if(Zd(f)){k.push({type:En.literal,value:f.value});continue}if(HN(f)){typeof l=="number"&&k.push({type:En.literal,value:t.getNumberFormat(i).format(l)});continue}var h=f.value;if(!(s&&h in s))throw new TS(h,d);var y=s[h];if(VN(f)){(!y||typeof y=="string"||typeof y=="number")&&(y=typeof y=="string"||typeof y=="number"?String(y):""),k.push({type:typeof y=="string"?En.literal:En.object,value:y});continue}if(wg(f)){var K=typeof f.style=="string"?a.date[f.style]:To(f.style)?f.style.parsedOptions:void 0;k.push({type:En.literal,value:t.getDateTimeFormat(i,K).format(y)});continue}if(Vg(f)){var K=typeof f.style=="string"?a.time[f.style]:To(f.style)?f.style.parsedOptions:a.time.medium;k.push({type:En.literal,value:t.getDateTimeFormat(i,K).format(y)});continue}if(Bg(f)){var K=typeof f.style=="string"?a.number[f.style]:xg(f.style)?f.style.parsedOptions:void 0;K&&K.scale&&(y=y*(K.scale||1)),k.push({type:En.literal,value:t.getNumberFormat(i,K).format(y)});continue}if(qg(f)){var j=f.children,R=f.value,N=s[R];if(!Xg(N))throw new mS(R,"function",d);var D=Xa(j,i,t,a,s,l),q=N(D.map(function(O){return O.value}));Array.isArray(q)||(q=[q]),k.push.apply(k,q.map(function(O){return{type:typeof O=="string"?En.literal:En.object,value:O}}))}if(Hg(f)){var L=f.options[y]||f.options.other;if(!L)throw new ak(f.value,y,Object.keys(f.options),d);k.push.apply(k,Xa(L.value,i,t,a,s));continue}if(Ug(f)){var L=f.options["=".concat(y)];if(!L){if(!Intl.PluralRules)throw new Pr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,dr.MISSING_INTL_API,d);var Q=t.getPluralRules(i,{type:f.pluralType}).select(y-(f.offset||0));L=f.options[Q]||f.options.other}if(!L)throw new ak(f.value,y,Object.keys(f.options),d);k.push.apply(k,Xa(L.value,i,t,a,s,y-(f.offset||0)));continue}}return pS(k)}function hS(e,i){return i?ne(ne(ne({},e||{}),i||{}),Object.keys(e).reduce(function(t,a){return t[a]=ne(ne({},e[a]),i[a]||{}),t},{})):e}function AS(e,i){return i?Object.keys(e).reduce(function(t,a){return t[a]=hS(e[a],i[a]),t},ne({},e)):e}function Ws(e){return{create:function(){return{get:function(i){return e[i]},set:function(i,t){e[i]=t}}}}}function yS(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:fn(function(){for(var i,t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return new((i=Intl.NumberFormat).bind.apply(i,Tn([void 0],t,!1)))},{cache:Ws(e.number),strategy:mn.variadic}),getDateTimeFormat:fn(function(){for(var i,t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return new((i=Intl.DateTimeFormat).bind.apply(i,Tn([void 0],t,!1)))},{cache:Ws(e.dateTime),strategy:mn.variadic}),getPluralRules:fn(function(){for(var i,t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return new((i=Intl.PluralRules).bind.apply(i,Tn([void 0],t,!1)))},{cache:Ws(e.pluralRules),strategy:mn.variadic})}}var Qg=function(){function e(i,t,a,s){t===void 0&&(t=e.defaultLocale);var l=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(v){var T=l.formatToParts(v);if(T.length===1)return T[0].value;var f=T.reduce(function(h,y){return!h.length||y.type!==En.literal||typeof h[h.length-1]!="string"?h.push(y.value):h[h.length-1]+=y.value,h},[]);return f.length<=1?f[0]||"":f},this.formatToParts=function(v){return Xa(l.ast,l.locales,l.formatters,l.formats,v,void 0,l.message)},this.resolvedOptions=function(){var v;return{locale:((v=l.resolvedLocale)===null||v===void 0?void 0:v.toString())||Intl.NumberFormat.supportedLocalesOf(l.locales)[0]}},this.getAst=function(){return l.ast},this.locales=t,this.resolvedLocale=e.resolveLocale(t),typeof i=="string"){if(this.message=i,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var d=s||{};d.formatters;var k=pi(d,["formatters"]);this.ast=e.__parse(i,ne(ne({},k),{locale:this.resolvedLocale}))}else this.ast=i;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=AS(e.formats,a),this.formatters=s&&s.formatters||yS(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(i){if(!(typeof Intl.Locale>"u")){var t=Intl.NumberFormat.supportedLocalesOf(i);return t.length>0?new Intl.Locale(t[0]):new Intl.Locale(typeof i=="string"?i:i[0])}},e.__parse=fS,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}(),Cr;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(Cr||(Cr={}));var ra=function(e){nr(i,e);function i(t,a,s){var l=this,d=s?s instanceof Error?s:new Error(String(s)):void 0;return l=e.call(this,"[@formatjs/intl Error ".concat(t,"] ").concat(a,`
`).concat(d?`
`.concat(d.message,`
`).concat(d.stack):""))||this,l.code=t,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(l,i),l}return i}(Error),cS=function(e){nr(i,e);function i(t,a){return e.call(this,Cr.UNSUPPORTED_FORMATTER,t,a)||this}return i}(ra),RS=function(e){nr(i,e);function i(t,a){return e.call(this,Cr.INVALID_CONFIG,t,a)||this}return i}(ra),ik=function(e){nr(i,e);function i(t,a){return e.call(this,Cr.MISSING_DATA,t,a)||this}return i}(ra),Yn=function(e){nr(i,e);function i(t,a,s){var l=e.call(this,Cr.FORMAT_ERROR,"".concat(t,`
Locale: `).concat(a,`
`),s)||this;return l.locale=a,l}return i}(ra),zs=function(e){nr(i,e);function i(t,a,s,l){var d=e.call(this,"".concat(t,`
MessageID: `).concat(s==null?void 0:s.id,`
Default Message: `).concat(s==null?void 0:s.defaultMessage,`
Description: `).concat(s==null?void 0:s.description,`
`),a,l)||this;return d.descriptor=s,d.locale=a,d}return i}(Yn),_S=function(e){nr(i,e);function i(t,a){var s=e.call(this,Cr.MISSING_TRANSLATION,'Missing message: "'.concat(t.id,'" for locale "').concat(a,'", using ').concat(t.defaultMessage?"default message (".concat(typeof t.defaultMessage=="string"?t.defaultMessage:t.defaultMessage.map(function(l){var d;return(d=l.value)!==null&&d!==void 0?d:JSON.stringify(l)}).join(),")"):"id"," as fallback."))||this;return s.descriptor=t,s}return i}(ra);function Wr(e,i,t){return t===void 0&&(t={}),i.reduce(function(a,s){return s in e?a[s]=e[s]:s in t&&(a[s]=t[s]),a},{})}var bS=function(e){},NS=function(e){},ev={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:bS,onWarn:NS};function nv(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function xr(e){return{create:function(){return{get:function(i){return e[i]},set:function(i,t){e[i]=t}}}}}function SS(e){e===void 0&&(e=nv());var i=Intl.RelativeTimeFormat,t=Intl.ListFormat,a=Intl.DisplayNames,s=fn(function(){for(var k,v=[],T=0;T<arguments.length;T++)v[T]=arguments[T];return new((k=Intl.DateTimeFormat).bind.apply(k,Tn([void 0],v,!1)))},{cache:xr(e.dateTime),strategy:mn.variadic}),l=fn(function(){for(var k,v=[],T=0;T<arguments.length;T++)v[T]=arguments[T];return new((k=Intl.NumberFormat).bind.apply(k,Tn([void 0],v,!1)))},{cache:xr(e.number),strategy:mn.variadic}),d=fn(function(){for(var k,v=[],T=0;T<arguments.length;T++)v[T]=arguments[T];return new((k=Intl.PluralRules).bind.apply(k,Tn([void 0],v,!1)))},{cache:xr(e.pluralRules),strategy:mn.variadic});return{getDateTimeFormat:s,getNumberFormat:l,getMessageFormat:fn(function(k,v,T,f){return new Qg(k,v,T,ne({formatters:{getNumberFormat:l,getDateTimeFormat:s,getPluralRules:d}},f||{}))},{cache:xr(e.message),strategy:mn.variadic}),getRelativeTimeFormat:fn(function(){for(var k=[],v=0;v<arguments.length;v++)k[v]=arguments[v];return new(i.bind.apply(i,Tn([void 0],k,!1)))},{cache:xr(e.relativeTime),strategy:mn.variadic}),getPluralRules:d,getListFormat:fn(function(){for(var k=[],v=0;v<arguments.length;v++)k[v]=arguments[v];return new(t.bind.apply(t,Tn([void 0],k,!1)))},{cache:xr(e.list),strategy:mn.variadic}),getDisplayNames:fn(function(){for(var k=[],v=0;v<arguments.length;v++)k[v]=arguments[v];return new(a.bind.apply(a,Tn([void 0],k,!1)))},{cache:xr(e.displayNames),strategy:mn.variadic})}}function Ho(e,i,t,a){var s=e&&e[i],l;if(s&&(l=s[t]),l)return l;a(new cS("No ".concat(i," format named: ").concat(t)))}function za(e,i){return Object.keys(e).reduce(function(t,a){return t[a]=ne({timeZone:i},e[a]),t},{})}function sk(e,i){var t=Object.keys(ne(ne({},e),i));return t.reduce(function(a,s){return a[s]=ne(ne({},e[s]||{}),i[s]||{}),a},{})}function ok(e,i){if(!i)return e;var t=Qg.formats;return ne(ne(ne({},t),e),{date:sk(za(t.date,i),za(e.date||{},i)),time:sk(za(t.time,i),za(e.time||{},i))})}var Ro=function(e,i,t,a,s){var l=e.locale,d=e.formats,k=e.messages,v=e.defaultLocale,T=e.defaultFormats,f=e.fallbackOnEmptyString,h=e.onError,y=e.timeZone,K=e.defaultRichTextElements;t===void 0&&(t={id:""});var j=t.id,R=t.defaultMessage;Gg(!!j,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var N=String(j),D=k&&Object.prototype.hasOwnProperty.call(k,N)&&k[N];if(Array.isArray(D)&&D.length===1&&D[0].type===we.literal)return D[0].value;if(!a&&D&&typeof D=="string"&&!K)return D.replace(/'\{(.*?)\}'/gi,"{$1}");if(a=ne(ne({},K),a||{}),d=ok(d,y),T=ok(T,y),!D){if(f===!1&&D==="")return D;if((!R||l&&l.toLowerCase()!==v.toLowerCase())&&h(new _S(t,l)),R)try{var q=i.getMessageFormat(R,v,T,s);return q.format(a)}catch(L){return h(new zs('Error formatting default message for: "'.concat(N,'", rendering default message verbatim'),l,t,L)),typeof R=="string"?R:N}return N}try{var q=i.getMessageFormat(D,l,d,ne({formatters:i},s||{}));return q.format(a)}catch(L){h(new zs('Error formatting message: "'.concat(N,'", using ').concat(R?"default message":"id"," as fallback."),l,t,L))}if(R)try{var q=i.getMessageFormat(R,v,T,s);return q.format(a)}catch(L){h(new zs('Error formatting the default message for: "'.concat(N,'", rendering message verbatim'),l,t,L))}return typeof D=="string"?D:typeof R=="string"?R:N},rv=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function hi(e,i,t,a){var s=e.locale,l=e.formats,d=e.onError,k=e.timeZone;a===void 0&&(a={});var v=a.format,T=ne(ne({},k&&{timeZone:k}),v&&Ho(l,i,v,d)),f=Wr(a,rv,T);return i==="time"&&!f.hour&&!f.minute&&!f.second&&!f.timeStyle&&!f.dateStyle&&(f=ne(ne({},f),{hour:"numeric",minute:"numeric"})),t(s,f)}function IS(e,i){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var s=t[0],l=t[1],d=l===void 0?{}:l,k=typeof s=="string"?new Date(s||0):s;try{return hi(e,"date",i,d).format(k)}catch(v){e.onError(new Yn("Error formatting date.",e.locale,v))}return String(k)}function OS(e,i){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var s=t[0],l=t[1],d=l===void 0?{}:l,k=typeof s=="string"?new Date(s||0):s;try{return hi(e,"time",i,d).format(k)}catch(v){e.onError(new Yn("Error formatting time.",e.locale,v))}return String(k)}function LS(e,i){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var s=t[0],l=t[1],d=t[2],k=d===void 0?{}:d,v=e.timeZone,T=e.locale,f=e.onError,h=Wr(k,rv,v?{timeZone:v}:{});try{return i(T,h).formatRange(s,l)}catch(y){f(new Yn("Error formatting date time range.",e.locale,y))}return String(s)}function KS(e,i){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var s=t[0],l=t[1],d=l===void 0?{}:l,k=typeof s=="string"?new Date(s||0):s;try{return hi(e,"date",i,d).formatToParts(k)}catch(v){e.onError(new Yn("Error formatting date.",e.locale,v))}return[]}function DS(e,i){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var s=t[0],l=t[1],d=l===void 0?{}:l,k=typeof s=="string"?new Date(s||0):s;try{return hi(e,"time",i,d).formatToParts(k)}catch(v){e.onError(new Yn("Error formatting time.",e.locale,v))}return[]}var PS=["style","type","fallback","languageDisplay"];function FS(e,i,t,a){var s=e.locale,l=e.onError,d=Intl.DisplayNames;d||l(new Pr(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,dr.MISSING_INTL_API));var k=Wr(a,PS);try{return i(s,k).of(t)}catch(v){l(new Yn("Error formatting display name.",s,v))}}var MS=["type","style"],lk=Date.now();function jS(e){return"".concat(lk,"_").concat(e,"_").concat(lk)}function GS(e,i,t,a){a===void 0&&(a={});var s=tv(e,i,t,a).reduce(function(l,d){var k=d.value;return typeof k!="string"?l.push(k):typeof l[l.length-1]=="string"?l[l.length-1]+=k:l.push(k),l},[]);return s.length===1?s[0]:s.length===0?"":s}function tv(e,i,t,a){var s=e.locale,l=e.onError;a===void 0&&(a={});var d=Intl.ListFormat;d||l(new Pr(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,dr.MISSING_INTL_API));var k=Wr(a,MS);try{var v={},T=t.map(function(f,h){if(typeof f=="object"){var y=jS(h);return v[y]=f,y}return String(f)});return i(s,k).formatToParts(T).map(function(f){return f.type==="literal"?f:ne(ne({},f),{value:v[f.value]||f.value})})}catch(f){l(new Yn("Error formatting list.",s,f))}return t}var BS=["type"];function wS(e,i,t,a){var s=e.locale,l=e.onError;a===void 0&&(a={}),Intl.PluralRules||l(new Pr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,dr.MISSING_INTL_API));var d=Wr(a,BS);try{return i(s,d).select(t)}catch(k){l(new Yn("Error formatting plural.",s,k))}return"other"}var VS=["numeric","style"];function HS(e,i,t){var a=e.locale,s=e.formats,l=e.onError;t===void 0&&(t={});var d=t.format,k=!!d&&Ho(s,"relative",d,l)||{},v=Wr(t,VS,k);return i(a,v)}function US(e,i,t,a,s){s===void 0&&(s={}),a||(a="second");var l=Intl.RelativeTimeFormat;l||e.onError(new Pr(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,dr.MISSING_INTL_API));try{return HS(e,i,s).format(t,a)}catch(d){e.onError(new Yn("Error formatting relative time.",e.locale,d))}return String(t)}var qS=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function av(e,i,t){var a=e.locale,s=e.formats,l=e.onError;t===void 0&&(t={});var d=t.format,k=d&&Ho(s,"number",d,l)||{},v=Wr(t,qS,k);return i(a,v)}function xS(e,i,t,a){a===void 0&&(a={});try{return av(e,i,a).format(t)}catch(s){e.onError(new Yn("Error formatting number.",e.locale,s))}return String(t)}function YS(e,i,t,a){a===void 0&&(a={});try{return av(e,i,a).formatToParts(t)}catch(s){e.onError(new Yn("Error formatting number.",e.locale,s))}return[]}function CS(e){var i=e?e[Object.keys(e)[0]]:void 0;return typeof i=="string"}function $S(e){e.onWarn&&e.defaultRichTextElements&&CS(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`)}function JS(e,i){var t=SS(i),a=ne(ne({},ev),e),s=a.locale,l=a.defaultLocale,d=a.onError;return s?!Intl.NumberFormat.supportedLocalesOf(s).length&&d?d(new ik('Missing locale data for locale: "'.concat(s,'" in Intl.NumberFormat. Using default locale: "').concat(l,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(s).length&&d&&d(new ik('Missing locale data for locale: "'.concat(s,'" in Intl.DateTimeFormat. Using default locale: "').concat(l,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):(d&&d(new RS('"locale" was not configured, using "'.concat(l,'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))),a.locale=a.defaultLocale||"en"),$S(a),ne(ne({},a),{formatters:t,formatNumber:xS.bind(null,a,t.getNumberFormat),formatNumberToParts:YS.bind(null,a,t.getNumberFormat),formatRelativeTime:US.bind(null,a,t.getRelativeTimeFormat),formatDate:IS.bind(null,a,t.getDateTimeFormat),formatDateToParts:KS.bind(null,a,t.getDateTimeFormat),formatTime:OS.bind(null,a,t.getDateTimeFormat),formatDateTimeRange:LS.bind(null,a,t.getDateTimeFormat),formatTimeToParts:DS.bind(null,a,t.getDateTimeFormat),formatPlural:wS.bind(null,a,t.getPluralRules),formatMessage:Ro.bind(null,a,t),$t:Ro.bind(null,a,t),formatList:GS.bind(null,a,t.getListFormat),formatListToParts:tv.bind(null,a,t.getListFormat),formatDisplayName:FS.bind(null,a,t.getDisplayNames)})}function WS(e){Gg(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var zS=ne(ne({},ev),{textComponent:P.Fragment});function ZS(e){return function(i){return e(P.Children.toArray(i))}}var iv={exports:{}},Se={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uk;function XS(){if(uk)return Se;uk=1;var e=typeof Symbol=="function"&&Symbol.for,i=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,a=e?Symbol.for("react.fragment"):60107,s=e?Symbol.for("react.strict_mode"):60108,l=e?Symbol.for("react.profiler"):60114,d=e?Symbol.for("react.provider"):60109,k=e?Symbol.for("react.context"):60110,v=e?Symbol.for("react.async_mode"):60111,T=e?Symbol.for("react.concurrent_mode"):60111,f=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,y=e?Symbol.for("react.suspense_list"):60120,K=e?Symbol.for("react.memo"):60115,j=e?Symbol.for("react.lazy"):60116,R=e?Symbol.for("react.block"):60121,N=e?Symbol.for("react.fundamental"):60117,D=e?Symbol.for("react.responder"):60118,q=e?Symbol.for("react.scope"):60119;function L(O){if(typeof O=="object"&&O!==null){var V=O.$$typeof;switch(V){case i:switch(O=O.type,O){case v:case T:case a:case l:case s:case h:return O;default:switch(O=O&&O.$$typeof,O){case k:case f:case j:case K:case d:return O;default:return V}}case t:return V}}}function Q(O){return L(O)===T}return Se.AsyncMode=v,Se.ConcurrentMode=T,Se.ContextConsumer=k,Se.ContextProvider=d,Se.Element=i,Se.ForwardRef=f,Se.Fragment=a,Se.Lazy=j,Se.Memo=K,Se.Portal=t,Se.Profiler=l,Se.StrictMode=s,Se.Suspense=h,Se.isAsyncMode=function(O){return Q(O)||L(O)===v},Se.isConcurrentMode=Q,Se.isContextConsumer=function(O){return L(O)===k},Se.isContextProvider=function(O){return L(O)===d},Se.isElement=function(O){return typeof O=="object"&&O!==null&&O.$$typeof===i},Se.isForwardRef=function(O){return L(O)===f},Se.isFragment=function(O){return L(O)===a},Se.isLazy=function(O){return L(O)===j},Se.isMemo=function(O){return L(O)===K},Se.isPortal=function(O){return L(O)===t},Se.isProfiler=function(O){return L(O)===l},Se.isStrictMode=function(O){return L(O)===s},Se.isSuspense=function(O){return L(O)===h},Se.isValidElementType=function(O){return typeof O=="string"||typeof O=="function"||O===a||O===T||O===l||O===s||O===h||O===y||typeof O=="object"&&O!==null&&(O.$$typeof===j||O.$$typeof===K||O.$$typeof===d||O.$$typeof===k||O.$$typeof===f||O.$$typeof===N||O.$$typeof===D||O.$$typeof===q||O.$$typeof===R)},Se.typeOf=L,Se}iv.exports=XS();var QS=iv.exports,sv=QS,eI={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},nI={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ov={};ov[sv.ForwardRef]=eI;ov[sv.Memo]=nI;var Uo=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=P.createContext(null)):P.createContext(null);Uo.Consumer;Uo.Provider;var rI=Uo;function lv(){var e=P.useContext(rI);return WS(e),e}var _o;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(_o||(_o={}));var bo;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(bo||(bo={}));function uv(e){var i=function(t){var a=lv(),s=t.value,l=t.children,d=pi(t,["value","children"]),k=typeof s=="string"?new Date(s||0):s,v=e==="formatDate"?a.formatDateToParts(k,d):a.formatTimeToParts(k,d);return l(v)};return i.displayName=bo[e],i}function ta(e){var i=function(t){var a=lv(),s=t.value,l=t.children,d=pi(t,["value","children"]),k=a[e](s,d);if(typeof l=="function")return l(k);var v=a.textComponent||P.Fragment;return P.createElement(v,null,k)};return i.displayName=_o[e],i}function dv(e){return e&&Object.keys(e).reduce(function(i,t){var a=e[t];return i[t]=Xg(a)?ZS(a):a,i},{})}var dk=function(e,i,t,a){for(var s=[],l=4;l<arguments.length;l++)s[l-4]=arguments[l];var d=dv(a),k=Ro.apply(void 0,Tn([e,i,t,d],s,!1));return Array.isArray(k)?P.Children.toArray(k):k},tI=function(e,i){var t=e.defaultRichTextElements,a=pi(e,["defaultRichTextElements"]),s=dv(t),l=JS(ne(ne(ne({},zS),a),{defaultRichTextElements:s}),i),d={locale:l.locale,timeZone:l.timeZone,fallbackOnEmptyString:l.fallbackOnEmptyString,formats:l.formats,defaultLocale:l.defaultLocale,defaultFormats:l.defaultFormats,messages:l.messages,onError:l.onError,defaultRichTextElements:s};return ne(ne({},l),{formatMessage:dk.bind(null,d,l.formatters),$t:dk.bind(null,d,l.formatters)})};ta("formatDate");ta("formatTime");ta("formatNumber");ta("formatList");ta("formatDisplayName");uv("formatDate");uv("formatTime");var Ai=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function qo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var kv={exports:{}};(function(e,i){(function(t,a){e.exports=a()})(Ai,function(){var t="minute",a=/[+-]\d\d(?::?\d\d)?/g,s=/([+-]|\d\d)/g;return function(l,d,k){var v=d.prototype;k.utc=function(R){var N={date:R,utc:!0,args:arguments};return new d(N)},v.utc=function(R){var N=k(this.toDate(),{locale:this.$L,utc:!0});return R?N.add(this.utcOffset(),t):N},v.local=function(){return k(this.toDate(),{locale:this.$L,utc:!1})};var T=v.parse;v.parse=function(R){R.utc&&(this.$u=!0),this.$utils().u(R.$offset)||(this.$offset=R.$offset),T.call(this,R)};var f=v.init;v.init=function(){if(this.$u){var R=this.$d;this.$y=R.getUTCFullYear(),this.$M=R.getUTCMonth(),this.$D=R.getUTCDate(),this.$W=R.getUTCDay(),this.$H=R.getUTCHours(),this.$m=R.getUTCMinutes(),this.$s=R.getUTCSeconds(),this.$ms=R.getUTCMilliseconds()}else f.call(this)};var h=v.utcOffset;v.utcOffset=function(R,N){var D=this.$utils().u;if(D(R))return this.$u?0:D(this.$offset)?h.call(this):this.$offset;if(typeof R=="string"&&(R=function(O){O===void 0&&(O="");var V=O.match(a);if(!V)return null;var I=(""+V[0]).match(s)||["-",0,0],b=I[0],$=60*+I[1]+ +I[2];return $===0?0:b==="+"?$:-$}(R),R===null))return this;var q=Math.abs(R)<=16?60*R:R,L=this;if(N)return L.$offset=q,L.$u=R===0,L;if(R!==0){var Q=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(L=this.local().add(q+Q,t)).$offset=q,L.$x.$localOffset=Q}else L=this.utc();return L};var y=v.format;v.format=function(R){var N=R||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return y.call(this,N)},v.valueOf=function(){var R=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*R},v.isUTC=function(){return!!this.$u},v.toISOString=function(){return this.toDate().toISOString()},v.toString=function(){return this.toDate().toUTCString()};var K=v.toDate;v.toDate=function(R){return R==="s"&&this.$offset?k(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():K.call(this)};var j=v.diff;v.diff=function(R,N,D){if(R&&this.$u===R.$u)return j.call(this,R,N,D);var q=this.local(),L=k(R).local();return j.call(q,L,N,D)}}})})(kv);var aI=kv.exports;const iI=qo(aI);var gv={exports:{}};(function(e,i){(function(t,a){e.exports=a()})(Ai,function(){var t,a,s=1e3,l=6e4,d=36e5,k=864e5,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,T=31536e6,f=2628e6,h=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,y={years:T,months:f,days:k,hours:d,minutes:l,seconds:s,milliseconds:1,weeks:6048e5},K=function(V){return V instanceof Q},j=function(V,I,b){return new Q(V,b,I.$l)},R=function(V){return a.p(V)+"s"},N=function(V){return V<0},D=function(V){return N(V)?Math.ceil(V):Math.floor(V)},q=function(V){return Math.abs(V)},L=function(V,I){return V?N(V)?{negative:!0,format:""+q(V)+I}:{negative:!1,format:""+V+I}:{negative:!1,format:""}},Q=function(){function V(b,$,W){var x=this;if(this.$d={},this.$l=W,b===void 0&&(this.$ms=0,this.parseFromMilliseconds()),$)return j(b*y[R($)],this);if(typeof b=="number")return this.$ms=b,this.parseFromMilliseconds(),this;if(typeof b=="object")return Object.keys(b).forEach(function(J){x.$d[R(J)]=b[J]}),this.calMilliseconds(),this;if(typeof b=="string"){var te=b.match(h);if(te){var le=te.slice(2).map(function(J){return J!=null?Number(J):0});return this.$d.years=le[0],this.$d.months=le[1],this.$d.weeks=le[2],this.$d.days=le[3],this.$d.hours=le[4],this.$d.minutes=le[5],this.$d.seconds=le[6],this.calMilliseconds(),this}}return this}var I=V.prototype;return I.calMilliseconds=function(){var b=this;this.$ms=Object.keys(this.$d).reduce(function($,W){return $+(b.$d[W]||0)*y[W]},0)},I.parseFromMilliseconds=function(){var b=this.$ms;this.$d.years=D(b/T),b%=T,this.$d.months=D(b/f),b%=f,this.$d.days=D(b/k),b%=k,this.$d.hours=D(b/d),b%=d,this.$d.minutes=D(b/l),b%=l,this.$d.seconds=D(b/s),b%=s,this.$d.milliseconds=b},I.toISOString=function(){var b=L(this.$d.years,"Y"),$=L(this.$d.months,"M"),W=+this.$d.days||0;this.$d.weeks&&(W+=7*this.$d.weeks);var x=L(W,"D"),te=L(this.$d.hours,"H"),le=L(this.$d.minutes,"M"),J=this.$d.seconds||0;this.$d.milliseconds&&(J+=this.$d.milliseconds/1e3,J=Math.round(1e3*J)/1e3);var H=L(J,"S"),U=b.negative||$.negative||x.negative||te.negative||le.negative||H.negative,Z=te.format||le.format||H.format?"T":"",C=(U?"-":"")+"P"+b.format+$.format+x.format+Z+te.format+le.format+H.format;return C==="P"||C==="-P"?"P0D":C},I.toJSON=function(){return this.toISOString()},I.format=function(b){var $=b||"YYYY-MM-DDTHH:mm:ss",W={Y:this.$d.years,YY:a.s(this.$d.years,2,"0"),YYYY:a.s(this.$d.years,4,"0"),M:this.$d.months,MM:a.s(this.$d.months,2,"0"),D:this.$d.days,DD:a.s(this.$d.days,2,"0"),H:this.$d.hours,HH:a.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:a.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:a.s(this.$d.seconds,2,"0"),SSS:a.s(this.$d.milliseconds,3,"0")};return $.replace(v,function(x,te){return te||String(W[x])})},I.as=function(b){return this.$ms/y[R(b)]},I.get=function(b){var $=this.$ms,W=R(b);return W==="milliseconds"?$%=1e3:$=W==="weeks"?D($/y[W]):this.$d[W],$||0},I.add=function(b,$,W){var x;return x=$?b*y[R($)]:K(b)?b.$ms:j(b,this).$ms,j(this.$ms+x*(W?-1:1),this)},I.subtract=function(b,$){return this.add(b,$,!0)},I.locale=function(b){var $=this.clone();return $.$l=b,$},I.clone=function(){return j(this.$ms,this)},I.humanize=function(b){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!b)},I.valueOf=function(){return this.asMilliseconds()},I.milliseconds=function(){return this.get("milliseconds")},I.asMilliseconds=function(){return this.as("milliseconds")},I.seconds=function(){return this.get("seconds")},I.asSeconds=function(){return this.as("seconds")},I.minutes=function(){return this.get("minutes")},I.asMinutes=function(){return this.as("minutes")},I.hours=function(){return this.get("hours")},I.asHours=function(){return this.as("hours")},I.days=function(){return this.get("days")},I.asDays=function(){return this.as("days")},I.weeks=function(){return this.get("weeks")},I.asWeeks=function(){return this.as("weeks")},I.months=function(){return this.get("months")},I.asMonths=function(){return this.as("months")},I.years=function(){return this.get("years")},I.asYears=function(){return this.as("years")},V}(),O=function(V,I,b){return V.add(I.years()*b,"y").add(I.months()*b,"M").add(I.days()*b,"d").add(I.hours()*b,"h").add(I.minutes()*b,"m").add(I.seconds()*b,"s").add(I.milliseconds()*b,"ms")};return function(V,I,b){t=b,a=b().$utils(),b.duration=function(x,te){var le=b.locale();return j(x,{$l:le},te)},b.isDuration=K;var $=I.prototype.add,W=I.prototype.subtract;I.prototype.add=function(x,te){return K(x)?O(this,x,1):$.bind(this)(x,te)},I.prototype.subtract=function(x,te){return K(x)?O(this,x,-1):W.bind(this)(x,te)}}})})(gv);var sI=gv.exports;const oI=qo(sI);var vv={exports:{}};(function(e,i){(function(t,a){e.exports=a()})(Ai,function(){var t="day";return function(a,s,l){var d=function(T){return T.add(4-T.isoWeekday(),t)},k=s.prototype;k.isoWeekYear=function(){return d(this).year()},k.isoWeek=function(T){if(!this.$utils().u(T))return this.add(7*(T-this.isoWeek()),t);var f,h,y,K,j=d(this),R=(f=this.isoWeekYear(),h=this.$u,y=(h?l.utc:l)().year(f).startOf("year"),K=4-y.isoWeekday(),y.isoWeekday()>4&&(K+=7),y.add(K,t));return j.diff(R,"week")+1},k.isoWeekday=function(T){return this.$utils().u(T)?this.day()||7:this.day(this.day()%7?T:T-7)};var v=k.startOf;k.startOf=function(T,f){var h=this.$utils(),y=!!h.u(f)||f;return h.p(T)==="isoweek"?y?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):v.bind(this)(T,f)}}})})(vv);var lI=vv.exports;const uI=qo(lI);var dI={exports:{}};(function(e,i){(function(t,a){e.exports=a(Ti)})(Ai,function(t){function a(d){return d&&typeof d=="object"&&"default"in d?d:{default:d}}var s=a(t),l={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(d){return d+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return s.default.locale(l,null,!0),l})})(dI);const kI=nv(),Ev=e=>tI({locale:"nb-NO",messages:e},kI),fv={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"};Ti.extend(iI);Ti.extend(uI);Ti.extend(oI);Ev(fv);Ev(fv);const mv=e=>({block:e,element:i=>`${e}__${i}`,modifier:i=>`${e}--${i}`,elementWithModifier:(i,t)=>`${e}__${i} ${e}__${i}--${t}`});var Tv={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var i={}.hasOwnProperty;function t(){for(var l="",d=0;d<arguments.length;d++){var k=arguments[d];k&&(l=s(l,a.call(this,k)))}return l}function a(l){if(typeof l=="string"||typeof l=="number")return this&&this[l]||l;if(typeof l!="object")return"";if(Array.isArray(l))return t.apply(this,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var d="";for(var k in l)i.call(l,k)&&l[k]&&(d=s(d,this&&this[k]||k));return d}function s(l,d){return d?l?l+" "+d:l+d:l}e.exports?(t.default=t,e.exports=t):window.classNames=t})()})(Tv);var gI=Tv.exports;const vI=Dg(gI),EI="_clipboard_1lghs_1",fI="_clipboard__button_1lghs_6",mI="_clipboard__button_1lghs_6",TI="_showTooltip_1lghs_1",pI="_clipboard__kopiert_1lghs_48",hI="_clipboard__kopiert_1lghs_48",AI="_clipboard__animationContainer_1lghs_57",yI="_clipboard__animationContainer_1lghs_57",cI="_clipboard__animate_1lghs_60",RI="_clipboard__animate_1lghs_60",_I="_fadeInOut_1lghs_1",bI={clipboard:EI,clipboard__button:fI,clipboardButton:mI,showTooltip:TI,clipboard__kopiert:pI,clipboardKopiert:hI,clipboard__animationContainer:AI,clipboardAnimationContainer:yI,clipboard__animate:cI,clipboardAnimate:RI,fadeInOut:_I};vI.bind(bI);const NI="_autocompleteSuggestion__substring_mf7v0_1",SI="_autocompleteSuggestion__substring_mf7v0_1",II="_autocompleteSuggestion__inner_mf7v0_4",OI="_autocompleteSuggestion__inner_mf7v0_4",LI="_autocompleteSuggestion--active_mf7v0_12",Ct={autocompleteSuggestion__substring:NI,autocompleteSuggestionSubstring:SI,autocompleteSuggestion__inner:II,autocompleteSuggestionInner:OI,"autocompleteSuggestion--active":"_autocompleteSuggestion--active_mf7v0_12",autocompleteSuggestionActive:LI};class KI extends Y.Component{constructor(i){super(i),this.state={value:i.value},this.onClick=this.onClick.bind(this),this.onMouseMove=this.onMouseMove.bind(this)}onClick(){const{onClick:i}=this.props,{value:t}=this.state;i(t)}onMouseMove(){const{setSuggestionIndex:i,index:t}=this.props;i(t)}render(){const{match:i,active:t,avoidBlur:a,id:s}=this.props,{value:l}=this.state.value,d=l.toLowerCase().startsWith(i.toLowerCase());return pe.jsx("li",{id:s,role:"option","aria-selected":t,onClick:this.onClick,onMouseMove:this.onMouseMove,onFocus:a,onMouseDown:a,onKeyDown:a,className:"autocompleteSuggestion typo-normal",children:d?pe.jsxs("span",{className:`${Ct.autocompleteSuggestion__inner} ${t?Ct["autocompleteSuggestion--active"]:""}`,children:[l.substring(0,i.length),pe.jsx("span",{className:Ct.autocompleteSuggestion__substring,children:l.substring(i.length)})]}):pe.jsx("span",{className:`${Ct.autocompleteSuggestion__inner} ${t?Ct["autocompleteSuggestion--active"]:""}`,children:l})})}}const DI="_autocomplete_9dlnp_1",PI="_autocomplete__suggestions_9dlnp_27",FI="_autocomplete__suggestions_9dlnp_27",MI="_autocomplete__suggestions--hidden_9dlnp_31",Zs={autocomplete:DI,autocomplete__suggestions:PI,autocompleteSuggestions:FI,"autocomplete__suggestions--hidden":"_autocomplete__suggestions--hidden_9dlnp_31",autocompleteSuggestionsHidden:MI};class T1 extends Y.Component{constructor(i){super(i),Wd(this,"input"),Wd(this,"inputRef"),this.state={activeSuggestionIndex:-1,hasFocus:!1,shouldShowSuggestions:!0,setAriaActiveDescendant:!1,shouldBlur:!0,blurDelay:null},this.inputRef=t=>{this.input=t},this.onChange=this.onChange.bind(this),this.onBlur=this.onBlur.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.onFocus=this.onFocus.bind(this),this.setValue=this.setValue.bind(this),this.setSuggestionIndex=this.setSuggestionIndex.bind(this),this.avoidBlur=this.avoidBlur.bind(this),this.clearBlurDelay=this.clearBlurDelay.bind(this),this.onSearchButtonClick=this.onSearchButtonClick.bind(this)}componentWillUnmount(){const{blurDelay:i}=this.state;i&&(clearTimeout(i),this.setState({blurDelay:null}))}onChange(i){const{onChange:t}=this.props;this.setState({activeSuggestionIndex:-1,shouldShowSuggestions:!0}),t(i)}onSearchButtonClick(i){const{onSearchButtonClick:t}=this.props;i.preventDefault(),t&&t()}onKeyDown(i){const{shouldShowSuggestions:t}=this.state;let{activeSuggestionIndex:a}=this.state;const{suggestions:s}=this.props,l=a>-1;switch(this.setState({setAriaActiveDescendant:i.keyCode===38||i.keyCode===40}),i.keyCode){case 9:l&&t&&this.setValue(s[a]);break;case 13:l&&t?(i.preventDefault(),this.setValue(s[a])):t&&s.length===1?this.setValue(s[0]):this.setState({shouldShowSuggestions:!1});break;case 27:t&&s.length>0&&(i.preventDefault(),this.setState({shouldShowSuggestions:!1}));break;case 38:t&&(i.preventDefault(),a=a-1===-2?-1:a-1,this.setState({activeSuggestionIndex:a}));break;case 40:t&&(i.preventDefault(),a=a+1===s.length?s.length-1:a+1,this.setState({activeSuggestionIndex:a}));break}}onFocus(){this.setState({hasFocus:!0,activeSuggestionIndex:-1})}onBlur(){const i=setTimeout(()=>{const{shouldBlur:a}=this.state;a&&this.setState({hasFocus:!1})},10);this.setState({blurDelay:i});const{onBlur:t}=this.props;t&&t()}setSuggestionIndex(i){this.setState({activeSuggestionIndex:i}),this.clearBlurDelay()}setValue(i){this.setState({shouldShowSuggestions:!1,activeSuggestionIndex:-1},()=>{this.inputRef.focus()}),this.clearBlurDelay();const{onSelect:t}=this.props;t(i)}avoidBlur(){this.setState({shouldBlur:!1})}clearBlurDelay(){const{blurDelay:i}=this.state;i&&(clearTimeout(i),this.setState({blurDelay:null})),this.setState({shouldBlur:!0})}render(){const{suggestions:i,id:t,ariaLabel:a,placeholder:s,value:l,name:d,shouldFocusOnMount:k,isLoading:v}=this.props,{activeSuggestionIndex:T,setAriaActiveDescendant:f,hasFocus:h,shouldShowSuggestions:y}=this.state,K=h&&y&&i.length>0,j=f&&T>-1?`${t}-item-${T}`:void 0;return pe.jsxs("div",{className:`${Zs.autocomplete} autocomplete`,"aria-expanded":K,"aria-owns":`${t}-suggestions`,"aria-haspopup":"listbox",children:[pe.jsx(ro,{variant:"primary",id:t,name:d,"aria-label":a,"aria-autocomplete":"list","aria-controls":`${t}-suggestions`,"aria-activedescendant":j,placeholder:s,value:l,autoComplete:"off",onChange:this.onChange,onBlur:this.onBlur,onKeyDown:this.onKeyDown,onFocus:this.onFocus,ref:R=>{this.inputRef=R},className:"typo-normal",autoFocus:k,label:a,hideLabel:!0,children:pe.jsx(ro.Button,{loading:v,onClick:this.onSearchButtonClick})}),pe.jsx("ul",{id:`${t}-suggestions`,role:"listbox",className:K?Zs.autocomplete__suggestions:Zs["autocomplete__suggestions--hidden"],children:K&&i.map((R,N)=>pe.jsx(KI,{id:`${t}-item-${N}`,index:N,value:R,match:l,active:N===T,onClick:this.setValue,setSuggestionIndex:this.setSuggestionIndex,avoidBlur:this.avoidBlur},R.key))})]})}}var ni=(e=>(e.warning="warning",e.success="success",e.danger="danger",e.default="default",e))(ni||{});const jI=({className:e})=>pe.jsxs("svg",{width:"28px",height:"28px",viewBox:"0 0 28 28",xmlns:"http://www.w3.org/2000/svg",className:e,children:[pe.jsx("title",{children:"Oppgave løst/avslått"}),pe.jsx("defs",{}),pe.jsx("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:pe.jsx("g",{fill:"#BA3A26",children:pe.jsx("path",{d:"M13.998761,0 C6.29390605,0 0.0146135764,6.26713043 4.90835943e-06,13.972 C-0.00729942565,17.7118261 1.44139349,21.230087 4.08069284,23.8803478 C6.7199922,26.5293913 10.2333769,27.9926957 13.9731959,28 L13.9999784,28 C21.703616,28 27.9841259,21.7316522 27.9999519,14.0255652 C28.0145606,6.30730435 21.7462246,0.0146086957 13.998761,0 Z M19.5853592,18.7453913 C19.8215326,18.9827826 19.8203152,19.3686957 19.5829244,19.606087 C19.4636203,19.7253913 19.3090119,19.7838261 19.1531861,19.7838261 C18.9985777,19.7838261 18.8415345,19.7241739 18.7222304,19.606087 L13.9963263,14.8606957 L9.25337871,19.5866087 C9.13407459,19.705913 8.97824879,19.7643478 8.822423,19.7643478 C8.66659721,19.7643478 8.51198881,19.7046957 8.39268468,19.5866087 C8.15529383,19.348 8.15529383,18.962087 8.39390207,18.725913 L13.138067,14 L8.41216291,9.2546087 C8.17477205,9.016 8.17598944,8.63130435 8.41459769,8.39513043 C8.65198854,8.15530435 9.03790085,8.15652174 9.27529171,8.39634783 L13.9999784,13.1405217 L18.742926,8.41582609 C18.9803168,8.17843478 19.3674465,8.17843478 19.60362,8.41704348 C19.8410109,8.65443478 19.8410109,9.04034783 19.6024026,9.27773913 L14.8594551,14.0036522 L19.5853592,18.7453913 Z"})})})]}),GI=({className:e})=>pe.jsxs("svg",{width:"16px",height:"16px",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",className:e,children:[pe.jsx("title",{children:"Behandlet - Oppgave løst/godkjent"}),pe.jsx("defs",{}),pe.jsx("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:pe.jsx("g",{fillRule:"nonzero",fill:"#06893A",children:pe.jsx("g",{children:pe.jsx("g",{id:"Filled_Version",children:pe.jsx("path",{d:"M15.7173333,0.122 C15.416,-0.0906666667 15.0006667,-0.0186666667 14.7886667,0.282666667 L4.91133333,14.302 L1.138,10.5293333 C0.878,10.2686667 0.455333333,10.2686667 0.195333333,10.5293333 C-0.0653333333,10.7906667 -0.0653333333,11.212 0.195333333,11.472 L4.52866667,15.8053333 C4.654,15.9306667 4.824,16 5,16 C5.212,16 5.418,15.898 5.54466667,15.7173333 L15.878,1.05066667 C16.09,0.75 16.018,0.333333333 15.7173333,0.122 Z"})})})})})]}),BI=({className:e})=>pe.jsx("svg",{width:"1.25rem",height:"1.25em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:"false",role:"img",style:{color:"var(--ac-alert-icon-warning-color,var(--a-icon-warning))"},className:e,children:pe.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25ZM12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Zm-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z",fill:"currentColor"})}),wI="_step_1k8mj_1",VI="_step__button_1k8mj_9",HI="_step__button_1k8mj_9",UI="_step__indicator--default_1k8mj_25",qI="_step__indicator--success_1k8mj_29",xI="_step__indicator--partial_1k8mj_33",YI="_step__indicator--warning_1k8mj_36",CI="_step__indicator--danger_1k8mj_44",$I="_step__button--active_1k8mj_56",JI="_step__text-icon-container_1k8mj_62",WI="_step__indicator_1k8mj_25",zI="_step__indicator_1k8mj_25",ZI="_step__indicator--active_1k8mj_80",XI="_step__icon_1k8mj_128",QI="_step__icon_1k8mj_128",eO="_step__icon--warning_1k8mj_136",nO="_step__icon--partial_1k8mj_148",rO="_step__icon--success_1k8mj_162",tO="_step__icon--danger_1k8mj_166",aO="_step__icon-placeholder_1k8mj_172",iO="_step__arrow-container_1k8mj_179",sO="_showTooltip_1k8mj_1",$e={step:wI,step__button:VI,stepButton:HI,"step__indicator--default":"_step__indicator--default_1k8mj_25",stepIndicatorDefault:UI,"step__indicator--success":"_step__indicator--success_1k8mj_29",stepIndicatorSuccess:qI,"step__indicator--partial":"_step__indicator--partial_1k8mj_33",stepIndicatorPartial:xI,"step__indicator--warning":"_step__indicator--warning_1k8mj_36",stepIndicatorWarning:YI,"step__indicator--danger":"_step__indicator--danger_1k8mj_44",stepIndicatorDanger:CI,"step__button--active":"_step__button--active_1k8mj_56",stepButtonActive:$I,"step__text-icon-container":"_step__text-icon-container_1k8mj_62",stepTextIconContainer:JI,step__indicator:WI,stepIndicator:zI,"step__indicator--active":"_step__indicator--active_1k8mj_80",stepIndicatorActive:ZI,step__icon:XI,stepIcon:QI,"step__icon--warning":"_step__icon--warning_1k8mj_136",stepIconWarning:eO,"step__icon--partial":"_step__icon--partial_1k8mj_148",stepIconPartial:nO,"step__icon--success":"_step__icon--success_1k8mj_162",stepIconSuccess:rO,"step__icon--danger":"_step__icon--danger_1k8mj_166",stepIconDanger:tO,"step__icon-placeholder":"_step__icon-placeholder_1k8mj_172",stepIconPlaceholder:aO,"step__arrow-container":"_step__arrow-container_1k8mj_179",stepArrowContainer:iO,showTooltip:sO},$t=mv("step"),oO=({type:e,isFinished:i,usePartialStatus:t})=>{const a=e===ni.warning,s=e===ni.danger;return t&&!a?pe.jsx("div",{className:fo(`${$e[$t.element("icon")]} ${$e["step__icon--partial"]}`,{[$e["step__icon--success"]]:!s,[$e["step__icon--danger"]]:s})}):i?pe.jsx(GI,{className:`${$e[$t.element("icon")]} ${$e["step__icon--success"]}`}):a?pe.jsx(BI,{className:`${$e[$t.element("icon")]} ${$e["step__icon--warning"]} `}):s?pe.jsx(jI,{className:`${$e[$t.element("icon")]} ${$e["step__icon--danger"]}`}):pe.jsx("span",{className:$e[$t.element("icon-placeholder")]})},gt=mv("step");Y.memo(({label:e,index:i,isActive:t,onClick:a,isFinished:s,type:l=ni.default,usePartialStatus:d,stepArrowContainerStyle:k})=>{const v=f=>{f.preventDefault(),a&&a(i)},T=fo(`${$e[gt.element("indicator")]} ${$e[`step__indicator--${l}`]}`,{[$e["step__indicator--active"]]:t,[$e["step__indicator--partial"]]:d});return pe.jsxs("li",{className:$e[gt.block],"aria-current":t?"step":void 0,children:[pe.jsxs("button",{className:t?`${$e[gt.element("button")]} ${$e["step__button--active"]}`:$e[gt.element("button")],type:"button",onClick:v,"data-tooltip":e,children:[pe.jsxs("span",{className:$e[gt.element("text-icon-container")],children:[pe.jsx(oO,{type:l,isFinished:s,usePartialStatus:d}),pe.jsx(Xt,{size:"small",as:"span",children:e})]}),pe.jsx("span",{className:T})]}),t&&pe.jsx("div",{className:fo(k,`${$e[gt.element("arrow-container")]} step__arrow-container`)})]},e.split(" ").join(""))});Y.createContext({});pn(mi);var pv={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var i={}.hasOwnProperty;function t(){for(var l="",d=0;d<arguments.length;d++){var k=arguments[d];k&&(l=s(l,a.call(this,k)))}return l}function a(l){if(typeof l=="string"||typeof l=="number")return this&&this[l]||l;if(typeof l!="object")return"";if(Array.isArray(l))return t.apply(this,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var d="";for(var k in l)i.call(l,k)&&l[k]&&(d=s(d,this&&this[k]||k));return d}function s(l,d){return d?l?l+" "+d:l+d:l}e.exports?(t.default=t,e.exports=t):window.classNames=t})()})(pv);var lO=pv.exports;const uO=pk(lO),dO="_boks_c3bfh_1",kO="_harBorderLeft_c3bfh_8",gO="_harBorderTop_c3bfh_12",vO={boks:dO,harBorderLeft:kO,harBorderTop:gO};uO.bind(vO);const EO=e=>{const i=e.aktiveNaturalytelser.reduce((a,s)=>{const l=s.type;return l in a?{...a,[l]:[...a[l],s]}:{...a,[l]:[s]}},{}),t={};return Object.entries(i).forEach(([a,s])=>{const l=s.sort((d,k)=>SN({fom:d.periode.fomDato,tom:d.periode.tomDato},{fom:k.periode.fomDato,tom:k.periode.tomDato})).reverse();t[a]=l.flatMap((d,k,v)=>{const T=v[k+1],f=d.periode.tomDato,h=T==null?void 0:T.periode.fomDato;return f===pt?[]:[{...d,periode:{fomDato:Yd(f,1),tomDato:h?Yd(h,-1):pt}}]})}),t},hv=({inntektsmelding:e,alleKodeverk:i})=>{const t=er(),a=EO(e);return M.jsx(yr,{tittel:t.formatMessage({id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.heading"}),children:e.aktiveNaturalytelser.length===0?M.jsx("span",{children:M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.ingen"})}):M.jsx(ft,{children:Object.entries(a).map(([s,l])=>{var d;return M.jsxs(ft,{children:[M.jsx("span",{children:(d=i[Bo.NATURAL_YTELSE_TYPE].find(k=>k.kode===s))==null?void 0:d.navn}),M.jsx("ul",{children:l.map(k=>M.jsxs(Y.Fragment,{children:[M.jsxs("li",{children:[M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.fom"})," ",M.jsx(Zt,{dateString:k.periode.fomDato})]}),k.periode.tomDato!==pt&&M.jsxs("li",{children:[M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.tom"})," ",M.jsx(Zt,{dateString:k.periode.tomDato})]}),M.jsxs("li",{children:[M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.verdi"}),":"," ",Et(k.beloepPerMnd.verdi)]})]},k.indexKey))})]},s)})})})};hv.__docgenInfo={description:"",methods:[],displayName:"BortfalteNaturalYtelser",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const Av=({kildeSystem:e})=>{const i=er(),t=P.useMemo(()=>{switch(e.toUpperCase()){case"NAV_NO":return i.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.nav"});case"ALTINN":return i.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.altinn"});default:return i.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.lps"})}},[i,e]);return M.jsx(yr,{tittel:i.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.heading"}),children:t})};Av.__docgenInfo={description:"",methods:[],displayName:"KildeSystem",props:{kildeSystem:{required:!0,tsType:{name:"string"},description:""}}};var De=(e=>(e.DEFAULT="default",e.INNGANGSVILKAR="inngangsvilkar",e.BEHANDLE_INNSYN="behandle_innsyn",e.BEREGNING="beregning",e.BEREGNINGSGRUNNLAG="beregningsgrunnlag",e.KLAGE_NAV_FAMILIE_OG_PENSJON="klage_nav_familie_og_pensjon",e.KLAGE_NAV_KLAGEINSTANS="klage_nav_klageinstans",e.FORMKRAV_KLAGE_NAV_KLAGEINSTANS="formkrav_klage_nav_klageinstans",e.FORMKRAV_KLAGE_NAV_FAMILIE_OG_PENSJON="formkrav_klage_nav_familie_og_pensjon",e.FORTSATTMEDLEMSKAP="fortsattmedlemskap",e.OPPLYSNINGSPLIKT="opplysningsplikt",e.SOEKNADSFRIST="soeknadsfrist",e.TILBAKEKREVING="tilbakekreving",e.FORELDELSE="foreldelse",e.TILKJENT_YTELSE="tilkjent_ytelse",e.VARSEL="varsel",e.VEDTAK="vedtak",e.UTTAK="uttak",e.SIMULERING="simulering",e.KLAGE_RESULTAT="resultat",e.ANKEBEHANDLING="ankebehandling",e.ANKE_MERKNADER="ankemerknader",e.ANKE_RESULTAT="ankeresultat",e))(De||{}),ae=(e=>(e.ADOPSJONSVILKARET="adopsjonsvilkaaret",e.ARBEIDSFORHOLD="arbeidsforhold",e.ARBEID_OG_INNTEKT="arbeidoginntekt",e.BEREGNING="beregning",e.BESTEBEREGNING="besteberegning",e.DEFAULT="default",e.FORDELING="fordeling",e.INNTEKTSMELDINGER="inntektsmeldinger",e.FEILUTBETALING="feilutbetaling",e.FODSELSVILKARET="foedselsvilkaaret",e.FODSELTILRETTELEGGING="fodseltilrettelegging",e.MEDLEMSKAPSVILKARET="medlemskapsvilkaaret",e.OMSORG="omsorg",e.OMSORG_OG_RETT="omsorgogrett",e.OMSORGSVILKARET="omsorgsvilkaaret",e.OPPTJENINGSVILKARET="opptjeningsvilkaaret",e.PERMISJON="permisjon",e.SAKEN="saken",e.UTTAK="uttak",e.VERGE="verge",e.YTELSER="ytelser",e.UTTAK_DOKUMENTASJON="uttakdokumentasjon",e))(ae||{});ae.DEFAULT,De.BEREGNING,ae.DEFAULT,De.BEREGNINGSGRUNNLAG,ae.BESTEBEREGNING,De.DEFAULT,ae.ADOPSJONSVILKARET,ae.ARBEIDSFORHOLD,ae.BEREGNING,ae.FODSELSVILKARET,ae.FORDELING,ae.MEDLEMSKAPSVILKARET,ae.OMSORG,ae.OPPTJENINGSVILKARET,ae.OPPTJENINGSVILKARET,ae.OMSORGSVILKARET,ae.ARBEIDSFORHOLD,ae.UTTAK_DOKUMENTASJON,ae.DEFAULT,De.INNGANGSVILKAR,ae.DEFAULT,De.KLAGE_NAV_FAMILIE_OG_PENSJON,ae.DEFAULT,De.KLAGE_NAV_KLAGEINSTANS,ae.DEFAULT,De.FORMKRAV_KLAGE_NAV_FAMILIE_OG_PENSJON,ae.DEFAULT,De.FORMKRAV_KLAGE_NAV_KLAGEINSTANS,ae.DEFAULT,De.ANKEBEHANDLING,ae.DEFAULT,De.ANKE_MERKNADER,ae.DEFAULT,De.OPPLYSNINGSPLIKT,ae.DEFAULT,De.INNGANGSVILKAR,ae.DEFAULT,De.INNGANGSVILKAR,ae.MEDLEMSKAPSVILKARET,De.INNGANGSVILKAR,ae.DEFAULT,De.INNGANGSVILKAR,ae.DEFAULT,De.INNGANGSVILKAR,ae.DEFAULT,De.SOEKNADSFRIST,ae.DEFAULT,De.VEDTAK,ae.UTTAK,ae.UTTAK,ae.UTTAK_DOKUMENTASJON,ae.SAKEN,ae.DEFAULT,De.UTTAK,ae.VERGE,ae.DEFAULT,De.TILKJENT_YTELSE,ae.DEFAULT,De.SIMULERING,ae.SAKEN,ae.FODSELTILRETTELEGGING,ae.DEFAULT,De.INNGANGSVILKAR,ae.DEFAULT,ae.UTTAK_DOKUMENTASJON,ae.DEFAULT,De.FORTSATTMEDLEMSKAP,ae.ARBEID_OG_INNTEKT,De.DEFAULT,ae.OMSORG_OG_RETT;ae.FEILUTBETALING,ae.DEFAULT,De.TILBAKEKREVING,ae.DEFAULT,De.FORELDELSE,ae.DEFAULT,De.VEDTAK,ae.VERGE;const fO=(e,i,t)=>`/fpsak/api/dokument/hent-dokument?saksnummer=${e}&journalpostId=${i}&dokumentId=${t}`,yv=({inntektsmelding:e,fagsak:i})=>M.jsx(bk,{type:"button",onClick:()=>{window.open(fO(i.saksnummer,e.journalpostId,e.dokumentId),"_blank")},variant:"secondary",size:"small",icon:M.jsx(by,{}),children:M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.modal.trigger"})});yv.__docgenInfo={description:"",methods:[],displayName:"LastNedPdfKnapp",props:{fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  historikkinnslagV2: HistorikkinnslagV2[];
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
}>`}],raw:"Historikkinnslag[]",required:!0}},{key:"historikkinnslagV2",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string;
  skjermlenke?: string;
  dokumenter?: HistorikkInnslagDokumentLink[];
  tittel: string;
  body: string[];
}`,signature:{properties:[{key:"aktør",value:{name:"signature",type:"object",raw:`{
  type: HistorikkAktor;
  ident: string;
}`,signature:{properties:[{key:"type",value:{name:"HistorikkAktor",required:!0}},{key:"ident",value:{name:"string",required:!0}}]},required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"skjermlenke",value:{name:"string",required:!1}},{key:"dokumenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"HistorikkInnslagDokumentLink[]",required:!1}},{key:"tittel",value:{name:"string",required:!0}},{key:"body",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string;
  skjermlenke?: string;
  dokumenter?: HistorikkInnslagDokumentLink[];
  tittel: string;
  body: string[];
}>`}],raw:"HistorikkinnslagV2[]",required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  historikkinnslagV2: HistorikkinnslagV2[];
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
}>`},description:""}}};const cv=({inntektsmelding:e})=>{const i=er();if(e.refusjonsperioder.length===0)return M.jsx(yr,{tittel:i.formatMessage({id:"InntektsmeldingFaktaPanel.refusjon.heading"}),children:M.jsx("span",{children:e.refusjonPrMnd?Et(e.refusjonPrMnd):M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.refusjon.ingen"})})});const t=[...e.refusjonsperioder].sort((a,s)=>new Date(a.fom).getTime()-new Date(s.fom).getTime());return M.jsxs(ft,{gap:"0",children:[M.jsx("span",{children:"Krever refusjon"}),M.jsx("span",{children:Et(e.refusjonPrMnd??0)}),M.jsx("span",{children:"Endringer i perioden:"}),M.jsx("ul",{children:t.map(a=>M.jsx("li",{children:M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.refusjon.endring.periode",values:{kroner:Et(a.refusjonsbeløp.verdi),fom:M.jsx(Zt,{dateString:a.fom})}})},a.indexKey))})]})};cv.__docgenInfo={description:"",methods:[],displayName:"Refusjon",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Rv=({startDatoPermisjon:e,ytelse:i})=>{const t=er();return e?M.jsxs(yr,{tittel:t.formatMessage({id:"InntektsmeldingFaktaPanel.startDato.heading"},{ytelse:i.toLowerCase()}),children:[M.jsx("span",{children:e?M.jsx(Zt,{dateString:e}):"-"}),M.jsx("span",{children:M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.startDato.fraArbeidsgiver"})})]}):null};Rv.__docgenInfo={description:"",methods:[],displayName:"Startdato",props:{startDatoPermisjon:{required:!1,tsType:{name:"string"},description:""},ytelse:{required:!0,tsType:{name:"string"},description:""}}};const _v=({inntektsmelding:e})=>{const i=er();return M.jsxs(yr,{tittel:i.formatMessage({id:"InntektsmeldingFaktaPanel.kontaktperson.heading"}),children:[M.jsxs("span",{children:[M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.kontaktperson.navn"}),": ",e.kontaktpersonNavn]}),M.jsxs("span",{children:[M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.kontaktperson.telefon"}),": ",e.kontaktpersonNummer]})]})};_v.__docgenInfo={description:"",methods:[],displayName:"KontaktPerson",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const bv=({arbeidsgiverOpplysningerPerId:e,arbeidsgiverIdent:i})=>{var a;const t=er();return M.jsxs(yr,{tittel:t.formatMessage({id:"InntektsmeldingFaktaPanel.arbeidsgiver.heading"}),children:[M.jsxs("span",{children:[M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.arbeidsgiver.navn"}),":"," ",((a=e[i])==null?void 0:a.navn)??"-"]}),M.jsxs("span",{children:[M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.arbeidsgiver.underenhet"}),": ",i]})]})};bv.__docgenInfo={description:"",methods:[],displayName:"Arbeidsgiver",props:{arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},arbeidsgiverIdent:{required:!0,tsType:{name:"string"},description:""}}};const Nv=({inntektsmelding:e,arbeidsgiverOpplysningerPerId:i,fagsak:t,alleBehandlinger:a,behandling:s,alleKodeverk:l})=>{const d=er();return M.jsxs(ft,{gap:"4",className:zt.container,children:[M.jsxs(vt,{gap:"4",justify:"space-between",align:"start",children:[M.jsxs(yk,{level:"3",size:"small",children:[M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.innsendingstidspunkt"})," ",M.jsx(Qa,{dateTimeString:e.innsendingstidspunkt,separator:"kl"})]}),M.jsx(yv,{fagsak:t,inntektsmelding:e})]}),M.jsxs(Xy,{columns:3,gap:"8",children:[M.jsx(bv,{arbeidsgiverOpplysningerPerId:i,arbeidsgiverIdent:e.arbeidsgiverIdent}),M.jsx(yr,{tittel:d.formatMessage({id:"InntektsmeldingFaktaPanel.månedsinntekt.heading"}),children:M.jsx("span",{children:Et(e.inntektPrMnd)})}),M.jsx(_g,{alleKodeverk:l,inntektsmelding:e,alleBehandlinger:a,behandling:s}),M.jsx(_v,{inntektsmelding:e}),M.jsx(Rv,{ytelse:Bb(l,Bo.FAGSAK_YTELSE,t.fagsakYtelseType),startDatoPermisjon:e.startDatoPermisjon}),M.jsx(Av,{kildeSystem:e.kildeSystem}),M.jsx(hv,{inntektsmelding:e,alleKodeverk:l}),M.jsx(cv,{inntektsmelding:e})]})]})};Nv.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingInnhold",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  historikkinnslagV2: HistorikkinnslagV2[];
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
}>`}],raw:"Historikkinnslag[]",required:!0}},{key:"historikkinnslagV2",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string;
  skjermlenke?: string;
  dokumenter?: HistorikkInnslagDokumentLink[];
  tittel: string;
  body: string[];
}`,signature:{properties:[{key:"aktør",value:{name:"signature",type:"object",raw:`{
  type: HistorikkAktor;
  ident: string;
}`,signature:{properties:[{key:"type",value:{name:"HistorikkAktor",required:!0}},{key:"ident",value:{name:"string",required:!0}}]},required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"skjermlenke",value:{name:"string",required:!1}},{key:"dokumenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"HistorikkInnslagDokumentLink[]",required:!1}},{key:"tittel",value:{name:"string",required:!0}},{key:"body",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string;
  skjermlenke?: string;
  dokumenter?: HistorikkInnslagDokumentLink[];
  tittel: string;
  body: string[];
}>`}],raw:"HistorikkinnslagV2[]",required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  historikkinnslagV2: HistorikkinnslagV2[];
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const kk=pn(Gb),xo=({arbeidsgiverOpplysningerPerId:e,fagsak:i,alleBehandlinger:t,behandling:a,alleKodeverk:s,inntektsmeldinger:l})=>{const[d,k]=P.useState({orderBy:"innsendingstidspunkt",direction:"descending"}),v=h=>{k(d&&h===d.orderBy&&d.direction==="descending"?void 0:{orderBy:h,direction:d&&h===d.orderBy&&d.direction==="ascending"?"descending":"ascending"})},T=d?mO({inntektsmeldinger:l,arbeidsgiverOpplysningerPerId:e,sortKey:d.orderBy,behandling:a}):l,f=(d==null?void 0:d.direction)==="ascending"?T:T.toReversed();return f.length===0?M.jsx(Ud,{value:kk,children:M.jsxs(vt,{gap:"2",justify:"center",align:"center",className:zt.ingenInntektsmeldinger,children:[M.jsx(Xt,{children:M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.ingen"})}),M.jsx(Fy,{})]})}):M.jsx(Ud,{value:kk,children:M.jsxs(Ue,{sort:d,onSortChange:h=>v(h),children:[M.jsx(Ue.Header,{children:M.jsxs(Ue.Row,{children:[M.jsx(Ue.ColumnHeader,{sortKey:"innsendingstidspunkt",sortable:!0,children:M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.tabell.header.innsendt"})}),M.jsx(Ue.ColumnHeader,{sortKey:"arbeidsgiverIdent",sortable:!0,children:M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.tabell.header.arbeidsgiver"})}),M.jsx(Ue.ColumnHeader,{sortKey:"startDatoPermisjon",sortable:!0,children:M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.tabell.header.skjæringstidspunkt"})}),M.jsx(Ue.ColumnHeader,{sortKey:"inntektPrMnd",sortable:!0,children:M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.tabell.header.månedsinntekt"})}),M.jsx(Ue.ColumnHeader,{sortKey:"tilknyttedeBehandlingIder",sortable:!0,children:M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.tabell.header.behandling"})}),M.jsx(Ue.HeaderCell,{})]})}),M.jsx(Ue.Body,{children:f.map(h=>{var y;return M.jsxs(Ue.ExpandableRow,{expandOnRowClick:!0,togglePlacement:"right",content:M.jsx(Nv,{alleKodeverk:s,fagsak:i,behandling:a,alleBehandlinger:t,arbeidsgiverOpplysningerPerId:e,inntektsmelding:h}),children:[M.jsx(Ue.DataCell,{children:M.jsx(Qa,{dateTimeString:h.innsendingstidspunkt,separator:"kl"})}),M.jsx(Ue.DataCell,{children:((y=e[h.arbeidsgiverIdent])==null?void 0:y.navn)??"-"}),M.jsx(Ue.DataCell,{children:h.startDatoPermisjon?M.jsx(Zt,{dateString:h.startDatoPermisjon}):"-"}),M.jsx(Ue.DataCell,{children:Et(h.inntektPrMnd)}),M.jsx(Ue.DataCell,{children:M.jsx(TO,{behandling:a,inntektsmelding:h})})]},`${h.journalpostId}-${h.internArbeidsforholdId}`)})})]})})},mO=({inntektsmeldinger:e,arbeidsgiverOpplysningerPerId:i,sortKey:t,behandling:a})=>t==="arbeidsgiverIdent"?e.slice().sort((s,l)=>{var v,T;const d=(v=i[s.arbeidsgiverIdent])==null?void 0:v.navn,k=(T=i[l.arbeidsgiverIdent])==null?void 0:T.navn;return Xs(d,k)}):t==="tilknyttedeBehandlingIder"?e.slice().sort((s,l)=>{const d=No({behandling:a,inntektsmelding:s}),k=No({behandling:a,inntektsmelding:l});return Xs(d,k)}):e.slice().sort((s,l)=>{const d=s[t],k=l[t];return Xs(d,k)}),Xs=(e,i)=>e===void 0?-1:i===void 0?1:e<i?-1:e>i?1:0,TO=({behandling:e,inntektsmelding:i})=>{const t=No({behandling:e,inntektsmelding:i});return t==="DENNE"?M.jsxs(vt,{gap:"1",align:"center",children:[M.jsx(Us,{className:zt.behandlingCircleDenne}),M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.denne"})]}):t==="ANDRE"?M.jsxs(vt,{gap:"1",align:"center",children:[M.jsx(Us,{className:zt.behandlingCircleAndre}),M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.andre"})]}):M.jsxs(vt,{gap:"1",align:"center",children:[M.jsx(Us,{className:zt.behandlingCircleIngen}),M.jsx(Ie,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.ingen"})]})},No=({behandling:e,inntektsmelding:i})=>i.tilknyttedeBehandlingIder.includes(e.uuid)?"DENNE":i.tilknyttedeBehandlingIder.length>0?"ANDRE":"INGEN";xo.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingFaktaIndex",props:{inntektsmeldinger:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  historikkinnslagV2: HistorikkinnslagV2[];
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
}>`}],raw:"Historikkinnslag[]",required:!0}},{key:"historikkinnslagV2",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string;
  skjermlenke?: string;
  dokumenter?: HistorikkInnslagDokumentLink[];
  tittel: string;
  body: string[];
}`,signature:{properties:[{key:"aktør",value:{name:"signature",type:"object",raw:`{
  type: HistorikkAktor;
  ident: string;
}`,signature:{properties:[{key:"type",value:{name:"HistorikkAktor",required:!0}},{key:"ident",value:{name:"string",required:!0}}]},required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"skjermlenke",value:{name:"string",required:!1}},{key:"dokumenter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"HistorikkInnslagDokumentLink[]",required:!1}},{key:"tittel",value:{name:"string",required:!0}},{key:"body",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string;
  skjermlenke?: string;
  dokumenter?: HistorikkInnslagDokumentLink[];
  tittel: string;
  body: string[];
}>`}],raw:"HistorikkinnslagV2[]",required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  historikkinnslagV2: HistorikkinnslagV2[];
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const pO=[{kode:"FARA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Far"},{kode:"MORA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Mor"},{kode:"MMOR",kodeverk:"RELASJONSROLLE_TYPE",navn:"Medmor"}],hO=[{kode:"REGISTRER_OM_VERGE",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Registrering av opplysninger om verge/fullmektig"},{kode:"MANGELFULL_SØKNAD",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Mangelfull søknad"},{kode:"FASTSATT_UTTAK_SPLITT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt fastsetting av uttak - splitting av periode"},{kode:"BEH_STARTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling startet"},{kode:"REGISTRER_PAPIRSØK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Registrer papirsøknad"},{kode:"BEH_STARTET_PÅ_NYTT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling startet på nytt"},{kode:"MIGRERT_FRA_INFOTRYGD",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling gjelder flytting av sak fra Infotrygd"},{kode:"FORSLAG_VEDTAK_UTEN_TOTRINN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedtak foreslått"},{kode:"BEH_GJEN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling gjenopptatt"},{kode:"AVBRUTT_BEH",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling er henlagt"},{kode:"ANKE_BEH",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Ankebehandling"},{kode:"BREV_BESTILT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Brev bestilt"},{kode:"ENDRET_DEKNINGSGRAD",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Dekningsgrad er endret"},{kode:"OPPGAVE_VEDTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Oppgave før vedtak"},{kode:"IVERKSETTELSE_VENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen venter på iverksettelse"},{kode:"FASTSATT_UTTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt fastsetting av uttak"},{kode:"OVST_UTTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt overstyring av uttak"},{kode:"INNSYN_OPPR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Innsynsbehandling opprettet"},{kode:"TILBAKEKR_VIDEREBEHANDLING",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Metode for å håndtere tilbakekreving av feilutbetailng er valgt."},{kode:"SAK_GODKJENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Sak godkjent"},{kode:"BEH_KØET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen er satt på vent"},{kode:"NYE_REGOPPLYSNINGER",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Nye registeropplysninger"},{kode:"BEH_VENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling på vent"},{kode:"TERMINBEKREFTELSE_UGYLDIG",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Terminbekreftelsens utstedt dato er før 22. svangerskapsuke. Behandlingen fortsatt uten ny terminbekreftelse"},{kode:"FAKTA_ENDRET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Fakta endret"},{kode:"MIGRERT_FRA_INFOTRYGD_FJERNET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandling gjelder ikke lenger flytting av sak fra Infotrygd"},{kode:"BYTT_ENHET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Bytt enhet"},{kode:"REVURD_OPPR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Revurdering opprettet"},{kode:"KLAGE_BEH_NFP",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Klagebehandling NFP"},{kode:"KØET_BEH_GJEN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Køet behandling er gjenopptatt"},{kode:"OVST_UTTAK_SPLITT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Manuelt overstyring av uttak - splitting av periode"},{kode:"ANKEBEH_STARTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Anke mottatt"},{kode:"UTTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlet soknadsperiode"},{kode:"KLAGE_BEH_NK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Klagebehandling KA"},{kode:"AVKLART_AKTIVITETSKRAV",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Avklart aktivitetskrav"},{kode:"NY_INFO_FRA_TPS",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Ny info fra TPS"},{kode:"KLAGEBEH_STARTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Klage mottatt"},{kode:"VEDTAK_FATTET",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedtak fattet"},{kode:"BEH_AVBRUTT_VUR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vurdering før vedtak"},{kode:"UENDRET_UTFALL",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Uendret utfall"},{kode:"VRS_REV_IKKE_SNDT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Varsel om revurdering ikke sendt"},{kode:"SPOLT_TILBAKE",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen er flyttet"},{kode:"OPPTJENING",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlet opptjeningsperiode"},{kode:"SAK_RETUR",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Sak retur"},{kode:"FJERNET_VERGE",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Opplysninger om verge/fullmektig fjernet"},{kode:"BEH_MAN_GJEN",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Gjenoppta behandling"},{kode:"BEH_OPPDATERT_NYE_OPPL",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Behandlingen oppdatert med nye opplysninger"},{kode:"VEDLEGG_MOTTATT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedlegg mottatt"},{kode:"OVERSTYRT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Overstyrt"},{kode:"BREV_SENT",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Brev sendt"},{kode:"FORSLAG_VEDTAK",kodeverk:"HISTORIKKINNSLAG_TYPE",navn:"Vedtak foreslått og sendt til beslutter"}],AO=[{kode:"FRI",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Fri utsettelse fom høst 2021"},{kode:"SYKDOM_SKADE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Avhengig av hjelp grunnet sykdom"},{kode:"BARN_INNLAGT",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Barn er innlagt i helseinstitusjon"},{kode:"FERIE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Lovbestemt ferie"},{kode:"SØKER_INNLAGT",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Søker er innlagt i helseinstitusjon"},{kode:"ARBEID",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Arbeid"},{kode:"HV_OVELSE",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Heimevernet"},{kode:"NAV_TILTAK",kodeverk:"UTTAK_UTSETTELSE_TYPE",navn:"Tiltak i regi av Nav"}],yO=[{kode:"ES",kodeverk:"FAGSAK_YTELSE",navn:"Engangsstønad"},{kode:"FP",kodeverk:"FAGSAK_YTELSE",navn:"Foreldrepenger"},{kode:"SVP",kodeverk:"FAGSAK_YTELSE",navn:"Svangerskapspenger"}],cO=[{kode:"OPPR",kodeverk:"FAGSAK_STATUS",navn:"Opprettet"},{kode:"UBEH",kodeverk:"FAGSAK_STATUS",navn:"Under behandling"},{kode:"LOP",kodeverk:"FAGSAK_STATUS",navn:"Løpende"},{kode:"AVSLU",kodeverk:"FAGSAK_STATUS",navn:"Avsluttet"}],RO=[{kode:"MS",kodeverk:"AKTIVITET_STATUS",navn:"Militær eller sivil"},{kode:"FL_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert frilanser og selvstendig næringsdrivende"},{kode:"SN",kodeverk:"AKTIVITET_STATUS",navn:"Selvstendig næringsdrivende"},{kode:"AT_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker og selvstendig næringsdrivende"},{kode:"AAP",kodeverk:"AKTIVITET_STATUS",navn:"Arbeidsavklaringspenger"},{kode:"KUN_YTELSE",kodeverk:"AKTIVITET_STATUS",navn:"Kun ytelse"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"AKTIVITET_STATUS",navn:"Ventelønn/Vartpenger"},{kode:"FL",kodeverk:"AKTIVITET_STATUS",navn:"Frilanser"},{kode:"AT_FL",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker og frilanser"},{kode:"TY",kodeverk:"AKTIVITET_STATUS",navn:"Tilstøtende ytelse"},{kode:"BA",kodeverk:"AKTIVITET_STATUS",navn:"Brukers andel"},{kode:"AT",kodeverk:"AKTIVITET_STATUS",navn:"Arbeidstaker"},{kode:"DP",kodeverk:"AKTIVITET_STATUS",navn:"Dagpenger"},{kode:"AT_FL_SN",kodeverk:"AKTIVITET_STATUS",navn:"Kombinert arbeidstaker, frilanser og selvstendig næringsdrivende"}],_O=[{kode:"EGEN_NÆRING",kodeverk:"BEREGNINGSGRUNNLAG_ANDELTYPE",navn:"Egen næring"},{kode:"BRUKERS_ANDEL",kodeverk:"BEREGNINGSGRUNNLAG_ANDELTYPE",navn:"Brukers andel"},{kode:"FRILANS",kodeverk:"BEREGNINGSGRUNNLAG_ANDELTYPE",navn:"Frilans"}],bO=[{kode:"ANNET",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Annet"},{kode:"FRILANS",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Frilans"},{kode:"ORDINÆRT_ARBEID",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Ordinært arbeid"},{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"UTTAK_ARBEID_TYPE",navn:"Selvstendig næringsdrivende"}],NO=[{kode:"FORELDREPENGER_OPPHØRER",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Foreldrepenger opphører"},{kode:"ENDRING_I_UTTAK",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i uttak"},{kode:"INGEN_ENDRING",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Ingen endring"},{kode:"ENDRING_I_BEREGNING",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i beregning"},{kode:"ENDRING_I_BEREGNING_OG_UTTAK",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i beregning og uttak"},{kode:"ENDRING_I_FORDELING_AV_YTELSEN",kodeverk:"KONSEKVENS_FOR_YTELSEN",navn:"Endring i fordeling av ytelsen"}],SO=[{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende"},{kode:"ARBEIDSTAKER_UTEN_FERIEPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker uten feriepenger"},{kode:"FRILANSER",kodeverk:"INNTEKTSKATEGORI",navn:"Frilans"},{kode:"DAGPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Dagpenger"},{kode:"SJØMANN",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker - Sjømann"},{kode:"FISKER",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende (fisker)"},{kode:"DAGMAMMA",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende (dagmamma)"},{kode:"JORDBRUKER",kodeverk:"INNTEKTSKATEGORI",navn:"Selvstendig næringsdrivende - Jordbruker"},{kode:"ARBEIDSTAKER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidstaker"},{kode:"ARBEIDSAVKLARINGSPENGER",kodeverk:"INNTEKTSKATEGORI",navn:"Arbeidsavklaringspenger"}],IO=[{kode:"SAMB",kodeverk:"SIVILSTAND_TYPE",navn:"Samboer"},{kode:"GJPA",kodeverk:"SIVILSTAND_TYPE",navn:"Gjenlevende partner"},{kode:"GIFT",kodeverk:"SIVILSTAND_TYPE",navn:"Gift"},{kode:"REPA",kodeverk:"SIVILSTAND_TYPE",navn:"Registrert partner"},{kode:"SKPA",kodeverk:"SIVILSTAND_TYPE",navn:"Skilt partner"},{kode:"GLAD",kodeverk:"SIVILSTAND_TYPE",navn:"Gift, lever adskilt"},{kode:"SEPA",kodeverk:"SIVILSTAND_TYPE",navn:"Separert partner"},{kode:"ENKE",kodeverk:"SIVILSTAND_TYPE",navn:"Enke/-mann"},{kode:"NULL",kodeverk:"SIVILSTAND_TYPE",navn:"Uoppgitt"},{kode:"UGIF",kodeverk:"SIVILSTAND_TYPE",navn:"Ugift"},{kode:"SEPR",kodeverk:"SIVILSTAND_TYPE",navn:"Separert"},{kode:"SKIL",kodeverk:"SIVILSTAND_TYPE",navn:"Skilt"}],OO=[{kode:"FAKTA_OM_MEDLEMSKAP",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om medlemskap"},{kode:"KLAGE_BEH_NFP",kodeverk:"SKJERMLENKE_TYPE",navn:"Klageresultat Vedtaksinstans"},{kode:"PUNKT_FOR_ADOPSJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Adopsjon"},{kode:"PUNKT_FOR_SVANGERSKAPSPENGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Svangerskapspenger"},{kode:"UTLAND",kodeverk:"SKJERMLENKE_TYPE",navn:"Endret utland"},{kode:"FAKTA_OMSORG_OG_RETT",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om aleneomsorg og annenpart rett"},{kode:"PUNKT_FOR_MEDLEMSKAP_LØPENDE",kodeverk:"SKJERMLENKE_TYPE",navn:"Løpende medlemskap"},{kode:"FAKTA_OM_FORDELING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fordeling"},{kode:"BEREGNING_FORELDREPENGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Beregning"},{kode:"BESTEBEREGNING",kodeverk:"SKJERMLENKE_TYPE",navn:"Besteberegning"},{kode:"FAKTA_OM_AKTIVITETSKRAV",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om aktivitetskrav"},{kode:"FORMKRAV_KLAGE_NFP",kodeverk:"SKJERMLENKE_TYPE",navn:"Formkrav klage NFP"},{kode:"FAKTA_OM_ADOPSJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om adopsjon"},{kode:"KLAGE_BEH_NK",kodeverk:"SKJERMLENKE_TYPE",navn:"Klageresultat Klageinstans"},{kode:"FAKTA_OM_ARBEIDSFORHOLD_INNTEKTSMELDING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeid og inntekt"},{kode:"FAKTA_UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta uttak"},{kode:"PUNKT_FOR_FORELDREANSVAR",kodeverk:"SKJERMLENKE_TYPE",navn:"Foreldreansvar"},{kode:"UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Uttak"},{kode:"BEREGNING_ENGANGSSTOENAD",kodeverk:"SKJERMLENKE_TYPE",navn:"Beregning"},{kode:"FAKTA_OM_FOEDSEL",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fødsel"},{kode:"FAKTA_OM_OMSORG_OG_FORELDREANSVAR",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om omsorg og foreldreansvar"},{kode:"FORMKRAV_KLAGE_KA",kodeverk:"SKJERMLENKE_TYPE",navn:"Formkrav klage KA"},{kode:"PUNKT_FOR_FOEDSEL",kodeverk:"SKJERMLENKE_TYPE",navn:"Fødsel"},{kode:"FAKTA_OM_BEREGNING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om beregning"},{kode:"FAKTA_OM_ARBEIDSFORHOLD_PERMISJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeidsforhold med permisjon uten sluttdato"},{kode:"KONTROLL_AV_SAKSOPPLYSNINGER",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om saken"},{kode:"FAKTA_OM_VERGE",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om verge/fullmektig"},{kode:"TILKJENT_YTELSE",kodeverk:"SKJERMLENKE_TYPE",navn:"Tilkjent ytelse"},{kode:"PUNKT_FOR_MEDLEMSKAP",kodeverk:"SKJERMLENKE_TYPE",navn:"Medlemskap"},{kode:"ANKE_MERKNADER",kodeverk:"SKJERMLENKE_TYPE",navn:"Anke merknader"},{kode:"FAKTA_OM_ARBEIDSFORHOLD",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om arbeidsforhold"},{kode:"FAKTA_OM_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om opptjening"},{kode:"FAKTA_OM_UTTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om uttak"},{kode:"PUNKT_FOR_OMSORG",kodeverk:"SKJERMLENKE_TYPE",navn:"Omsorg"},{kode:"VURDER_FARESIGNALER",kodeverk:"SKJERMLENKE_TYPE",navn:"Vurder faresignaler"},{kode:"ANKE_VURDERING",kodeverk:"SKJERMLENKE_TYPE",navn:"Anke vurdering"},{kode:"PUNKT_FOR_SVP_INNGANG",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om fødsel og tilrettelegging"},{kode:"FAKTA_OM_SIMULERING",kodeverk:"SKJERMLENKE_TYPE",navn:"Simulering"},{kode:"SOEKNADSFRIST",kodeverk:"SKJERMLENKE_TYPE",navn:"Søknadsfrist"},{kode:"FAKTA_FOR_OMSORG",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om omsorg"},{kode:"FAKTA_OM_UTTAK_DOKUMENTASJON",kodeverk:"SKJERMLENKE_TYPE",navn:"Vurder dokumentasjon"},{kode:"VEDTAK",kodeverk:"SKJERMLENKE_TYPE",navn:"Vedtak"},{kode:"FAKTA_FOR_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Fakta om opptjening"},{kode:"OPPLYSNINGSPLIKT",kodeverk:"SKJERMLENKE_TYPE",navn:"Opplysningsplikt"},{kode:"PUNKT_FOR_OPPTJENING",kodeverk:"SKJERMLENKE_TYPE",navn:"Opptjening"}],LO=[{kode:"VURDER_BESTEBEREGNING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker skal ha besteberegning"},{kode:"VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder refusjonskrav fremsatt for sent skal være med i beregning."},{kode:"VURDER_NYOPPSTARTET_FL",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder nyoppstartet frilans"},{kode:"VURDER_LØNNSENDRING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder lønnsendring"},{kode:"FASTSETT_MAANEDSINNTEKT_FL",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett månedsinntekt frilans"},{kode:"VURDER_MOTTAR_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker mottar ytelse for aktivitet."},{kode:"FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsette beregningsgrunnlag for arbeidstaker uten inntektsmelding"},{kode:"VURDER_MILITÆR_SIVILTJENESTE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker har hatt militær- eller siviltjeneste i opptjeningsperioden."},{kode:"VURDER_ETTERLØNN_SLUTTPAKKE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker har etterlønn og/eller sluttpakke"},{kode:"FASTSETT_ETTERLØNN_SLUTTPAKKE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett søkers beregningsgrunnlag for etterlønn og/eller sluttpakke andel"},{kode:"FASTSETT_BG_KUN_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett beregningsgrunnlag for kun ytelse uten arbeidsforhold"},{kode:"VURDER_AT_OG_FL_I_SAMME_ORGANISASJON",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om bruker er arbeidstaker og frilanser i samme organisasjon"},{kode:"FASTSETT_ENDRET_BEREGNINGSGRUNNLAG",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsette endring i beregningsgrunnlag"},{kode:"FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett besteberegning fødende kvinne"},{kode:"VURDER_SN_NY_I_ARBEIDSLIVET",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder om søker er SN og ny i arbeidslivet"},{kode:"FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Fastsett månedslønn arbeidstaker uten inntektsmelding"},{kode:"TILSTØTENDE_YTELSE",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Avklar beregningsgrunnlag og inntektskategori for tilstøtende ytelse"},{kode:"VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD",kodeverk:"FAKTA_OM_BEREGNING_TILFELLE",navn:"Vurder tidsbegrenset arbeidsforhold"}],KO=[{kode:"HJEMSENDE_UTEN_Å_OPPHEVE",kodeverk:"KLAGEVURDERING",navn:"Hjemsende uten å oppheve"},{kode:"OPPHEVE_YTELSESVEDTAK",kodeverk:"KLAGEVURDERING",navn:"Ytelsesvedtaket oppheves"},{kode:"MEDHOLD_I_KLAGE",kodeverk:"KLAGEVURDERING",navn:"Medhold"},{kode:"STADFESTE_YTELSESVEDTAK",kodeverk:"KLAGEVURDERING",navn:"Ytelsesvedtaket stadfestes"},{kode:"AVVIS_KLAGE",kodeverk:"KLAGEVURDERING",navn:"Klagen avvises"}],DO=[{kode:"BEH_STARTET_PA_NYTT",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Behandling startet på nytt"},{kode:"BERORT_BEH_OPPHOR",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Den andre forelderens vedtak er opphørt"},{kode:"SAKSBEH_START_PA_NYTT",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Saksbehandling starter på nytt"},{kode:"BERORT_BEH_ENDRING_DEKNINGSGRAD",kodeverk:"HISTORIKK_BEGRUNNELSE_TYPE",navn:"Den andre forelderens behandling har endret antall disponible stønadsdager"}],PO=[{kode:"FEDREKVOTE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Fedrekvoten"},{kode:"FELLESPERIODE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Fellesperioden"},{kode:"FORELDREPENGER",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Foreldrepenger"},{kode:"MØDREKVOTE",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Mødrekvoten"},{kode:"ANNET",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Andre typer som f.eks utsettelse"},{kode:"FORELDREPENGER_FØR_FØDSEL",kodeverk:"UTTAK_PERIODE_TYPE",navn:"Foreldrepenger før fødsel"}],FO=[{kode:"HJEMSENDE_UTEN_OPPHEVE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Behandlingen er hjemsendt"},{kode:"HENLAGT_SØKNAD_MANGLER",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt søknad mangler"},{kode:"KLAGE_YTELSESVEDTAK_OPPHEVET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ytelsesvedtak opphevet"},{kode:"AVSLÅTT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Avslått"},{kode:"ANKE_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Anke er avvist"},{kode:"HENLAGT_ANKE_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, anken er trukket"},{kode:"ANKE_YTELSESVEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Vedtak stadfestet"},{kode:"FORELDREPENGER_SENERE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Sak er endret"},{kode:"ANKE_HJEMSENDE_UTEN_OPPHEV",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Behandlingen er hjemsendt"},{kode:"INNSYN_INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er innvilget"},{kode:"ANKE_OPPHEVE_OG_HJEMSENDE",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Vedtak opphevet"},{kode:"INGEN_ENDRING",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ingen endring"},{kode:"HENLAGT_INNSYN_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, innsynskrav er trukket"},{kode:"FORELDREPENGER_ENDRET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Sak er endret"},{kode:"HENLAGT_KLAGE_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, klagen er trukket"},{kode:"ANKE_OMGJORT_UGUNST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Omgjort til ugunst"},{kode:"INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innvilget"},{kode:"ANKE_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Medhold"},{kode:"KLAGE_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Medhold"},{kode:"INNSYN_DELVIS_INNVILGET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er delvis innvilget"},{kode:"IKKE_FASTSATT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ikke fastsatt"},{kode:"MANGLER_BEREGNINGSREGLER",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Mangler beregningsregler"},{kode:"INNSYN_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Innsynskrav er avvist"},{kode:"HENLAGT_SØKNAD_TRUKKET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, søknaden er trukket"},{kode:"HENLAGT_BRUKER_DØD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, brukeren er død"},{kode:"KLAGE_YTELSESVEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Ytelsesvedtak stadfestet"},{kode:"KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Tilbakekrevingsvedtak stadfestet"},{kode:"ANKE_DELVIS_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Delvis medhold"},{kode:"KLAGE_DELVIS_MEDHOLD",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Delvis medhold"},{kode:"KLAGE_OMGJORT_UGUNST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Omgjort til ugunst"},{kode:"OPPHØR",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Opphør"},{kode:"KLAGE_AVVIST",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Klage er avvist"},{kode:"HENLAGT_FEILOPPRETTET",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Henlagt, søknaden er feilopprettet"},{kode:"MERGET_OG_HENLAGT",kodeverk:"BEHANDLING_RESULTAT_TYPE",navn:"Mottatt ny søknad"}],MO=[{kode:"FBARN",kodeverk:"VERGE_TYPE",navn:"Verge for foreldreløst barn under 18 år"},{kode:"ADVOKAT",kodeverk:"VERGE_TYPE",navn:"Advokat/advokatfullmektig"},{kode:"ANNEN_F",kodeverk:"VERGE_TYPE",navn:"Annen fullmektig"},{kode:"BARN",kodeverk:"VERGE_TYPE",navn:"Verge for barn under 18 år"},{kode:"VOKSEN",kodeverk:"VERGE_TYPE",navn:"Verge for voksen"}],jO=[{kode:"TILBAKEKR_IGNORER",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Feilutbetaling, avvent samordning"},{kode:"TILBAKEKR_INNTREKK",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Feilutbetaling hvor inntrekk dekker hele beløpet"},{kode:"TILBAKEKR_OPPRETT",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Feilutbetaling med tilbakekreving"},{kode:"TILBAKEKR_OPPDATER",kodeverk:"TILBAKEKR_VIDERE_BEH",navn:"Endringer vil oppdatere eksisterende feilutbetalte perioder og beløp."}],GO=[{kode:"TERM",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Termin"},{kode:"ADPSJN",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Adopsjon"},{kode:"OMSRGO",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Omsorgoverdragelse"},{kode:"FODSL",kodeverk:"FAMILIE_HENDELSE_TYPE",navn:"Fødsel"}],BO=[{kode:"14-04",kodeverk:"KLAGE_HJEMMEL",navn:"14-4 Svangerskapspenger"},{kode:"14-13",kodeverk:"KLAGE_HJEMMEL",navn:"14-13 Fars uttak"},{kode:"14-12",kodeverk:"KLAGE_HJEMMEL",navn:"14-12 Uttak av kvoter"},{kode:"14-11",kodeverk:"KLAGE_HJEMMEL",navn:"14-11 Utsettelse"},{kode:"883-6",kodeverk:"KLAGE_HJEMMEL",navn:"EØS 883/2004 artikkel 6"},{kode:"14-09",kodeverk:"KLAGE_HJEMMEL",navn:"14-9 Stønadsperioden"},{kode:"14-05",kodeverk:"KLAGE_HJEMMEL",navn:"14-5 Rett på foreldrepenger"},{kode:"14-02",kodeverk:"KLAGE_HJEMMEL",navn:"14-2 Medlemskap"},{kode:"14-14",kodeverk:"KLAGE_HJEMMEL",navn:"14-14 Bare far har rett"},{kode:"14-15",kodeverk:"KLAGE_HJEMMEL",navn:"14-15 Far aleneomsorg"},{kode:"14-17",kodeverk:"KLAGE_HJEMMEL",navn:"14-17 Rett på engangsstønad"},{kode:"14-07",kodeverk:"KLAGE_HJEMMEL",navn:"14-7 Beregning"},{kode:"22-15",kodeverk:"KLAGE_HJEMMEL",navn:"22-15 Tilbakekreving"},{kode:"14-10",kodeverk:"KLAGE_HJEMMEL",navn:"14-10 Uttaksperiodene"},{kode:"14-16",kodeverk:"KLAGE_HJEMMEL",navn:"14-16 Gradert uttak"},{kode:"8-2",kodeverk:"KLAGE_HJEMMEL",navn:"8-2 Opptjeningstid"},{kode:"21-3",kodeverk:"KLAGE_HJEMMEL",navn:"21-3 Opplysningsplikt"},{kode:"14-06",kodeverk:"KLAGE_HJEMMEL",navn:"14-6 Opptjening"},{kode:"22-13",kodeverk:"KLAGE_HJEMMEL",navn:"22-13 Fremsetning av krav"}],wO=[{kode:"INNVILGET_REDUSERT",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er innvilget med redusert beregningsgrunnlag"},{kode:"AVSLAG_ANNET",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er avslått av andre årsaker"},{kode:"INNVIRKNING",kodeverk:"FARESIGNAL_VURDERING",navn:"Faresignalene vurderes som reelle"},{kode:"INGEN_INNVIRKNING",kodeverk:"FARESIGNAL_VURDERING",navn:"Faresignalene vurderes ikke som reelle"},{kode:"INNVILGET_UENDRET",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er innvilget uten at faresignalene påvirket utfallet"},{kode:"AVSLAG_FARESIGNAL",kodeverk:"FARESIGNAL_VURDERING",navn:"Saken er avslått på grunn av faresignalene"}],VO=[{kode:"ETTERLØNN_SLUTTPAKKE",kodeverk:"ARBEID_TYPE",navn:"Etterlønn eller sluttpakke"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"ARBEID_TYPE",navn:"Ventelønn eller vartpenger"},{kode:"MILITÆR_ELLER_SIVILTJENESTE",kodeverk:"ARBEID_TYPE",navn:"Militær eller siviltjeneste"},{kode:"UTENLANDSK_ARBEIDSFORHOLD",kodeverk:"ARBEID_TYPE",navn:"Arbeid i utlandet"},{kode:"LØNN_UNDER_UTDANNING",kodeverk:"ARBEID_TYPE",navn:"Lønn under utdanning"},{kode:"FRILANSER",kodeverk:"ARBEID_TYPE",navn:"Frilanser, samlet aktivitet"}],HO=[{kode:"EOS",kodeverk:"REGION",navn:"EU/EØS"},{kode:"ANNET",kodeverk:"REGION",navn:"3.landsborger"},{kode:"NORDEN",kodeverk:"REGION",navn:"Nordisk"}],UO=[{kode:"UTTAK_PERIODE_FOM",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Fradato uttaksperiode"},{kode:"TPS_ANTALL_BARN",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Antall barn"},{kode:"UTTAK_PERIODE_TOM",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Tildato uttaksperiode"},{kode:"ANTALL_BARN",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Antall barn"},{kode:"FODSELSDATO",kodeverk:"HISTORIKK_OPPLYSNING_TYPE",navn:"Fødselsdato"}],qO=[{kode:"SØKNAD",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Søknad"},{kode:"SAKSBEHANDLER",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Saksbehandler"},{kode:"TIDLIGERE_VEDTAK",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Vedtak"},{kode:"ANDRE_NAV_VEDTAK",kodeverk:"FORDELING_PERIODE_KILDE",navn:"Vedtak andre ytelser"}],xO=[{kode:"MANGLENDE_OPPLYSNINGER",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Benytt i behandlingen, men har manglende opplysninger"},{kode:"SØKER_ER_I_PERMISJON",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Søker er i permisjon"},{kode:"INNTEKT_IKKE_MED_I_BG",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Benytt i behandlingen. Inntekten er ikke med i beregningsgrunnlaget"},{kode:"IKKE_BRUK",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Ikke bruk"},{kode:"NYTT_ARBEIDSFORHOLD",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Arbeidsforholdet er ansett som nytt"},{kode:"BRUK_MED_OVERSTYRTE_PERIODER",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Bruk arbeidsforholdet med overstyrt periode"},{kode:"BENYTT_A_INNTEKT_I_BG",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Benytt i behandlingen. Inntekt fra A-inntekt benyttes i beregningsgrunnlaget"},{kode:"SØKER_ER_IKKE_I_PERMISJON",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Søker er ikke i permisjon"},{kode:"LAGT_TIL_AV_SAKSBEHANDLER",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Arbeidsforholdet er lagt til av saksbehandler beregningsgrunnlaget"},{kode:"SLÅTT_SAMMEN_MED_ANNET",kodeverk:"VURDER_ARBEIDSFORHOLD_HISTORIKKINNSLAG",navn:"Arbeidsforholdet er slått sammen med annet"}],YO=[{kode:"FISKER",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Fisker"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_FISKER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende - fisker"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende"},{kode:"SJØMANN",kodeverk:"ARBEIDSKATEGORI",navn:"Arbeidstaker - sjømann"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og frilanser"},{kode:"ARBEIDSTAKER",kodeverk:"ARBEIDSKATEGORI",navn:"Arbeidstaker"},{kode:"DAGPENGER",kodeverk:"ARBEIDSKATEGORI",navn:"Tilstøtende ytelse - dagpenger"},{kode:"SELVSTENDIG_NÆRINGSDRIVENDE",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og selvstendig næringsdrivende - jordbruker"},{kode:"JORDBRUKER",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Jordbruker"},{kode:"DAGMAMMA",kodeverk:"ARBEIDSKATEGORI",navn:"Selvstendig næringsdrivende - Dagmamma"},{kode:"KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER",kodeverk:"ARBEIDSKATEGORI",navn:"Kombinasjon arbeidstaker og dagpenger"},{kode:"FRILANSER",kodeverk:"ARBEIDSKATEGORI",navn:"Frilanser"},{kode:"INAKTIV",kodeverk:"ARBEIDSKATEGORI",navn:"Inaktiv"},{kode:"UGYLDIG",kodeverk:"ARBEIDSKATEGORI",navn:"Ugyldig"}],CO=[{kode:"CAF",kodeverk:"LANDKODER",navn:"SENTRALAFRIKA. REP."},{kode:"ARG",kodeverk:"LANDKODER",navn:"ARGENTINA"},{kode:"IOT",kodeverk:"LANDKODER",navn:"BRITISK-INDISKE HAV"},{kode:"CCK",kodeverk:"LANDKODER",navn:"KOKOSØYENE"},{kode:"MEX",kodeverk:"LANDKODER",navn:"MEXICO"},{kode:"CHN",kodeverk:"LANDKODER",navn:"REPUBLIKKEN KINA"},{kode:"RUS",kodeverk:"LANDKODER",navn:"RUSSLAND"},{kode:"BHS",kodeverk:"LANDKODER",navn:"BAHAMAS"},{kode:"SYC",kodeverk:"LANDKODER",navn:"SEYCHELLENE"},{kode:"CYP",kodeverk:"LANDKODER",navn:"KYPROS"},{kode:"AUT",kodeverk:"LANDKODER",navn:"ØSTERRIKE"},{kode:"QAT",kodeverk:"LANDKODER",navn:"QATAR"},{kode:"VNM",kodeverk:"LANDKODER",navn:"VIETNAM"},{kode:"HMD",kodeverk:"LANDKODER",navn:"HEARD OG MCDONALD ØYENE"},{kode:"KEN",kodeverk:"LANDKODER",navn:"KENYA"},{kode:"ASM",kodeverk:"LANDKODER",navn:"AM. SAMOA"},{kode:"PAK",kodeverk:"LANDKODER",navn:"PAKISTAN"},{kode:"ATG",kodeverk:"LANDKODER",navn:"ANTIGUA OG BARBUDA"},{kode:"TZA",kodeverk:"LANDKODER",navn:"TANZANIA"},{kode:"ZAF",kodeverk:"LANDKODER",navn:"SØR-AFRIKA"},{kode:"CMR",kodeverk:"LANDKODER",navn:"KAMERUN"},{kode:"MLI",kodeverk:"LANDKODER",navn:"MALI"},{kode:"SLV",kodeverk:"LANDKODER",navn:"EL SALVADOR"},{kode:"MAF",kodeverk:"LANDKODER",navn:"SAINT MARTIN"},{kode:"KGZ",kodeverk:"LANDKODER",navn:"KIRGISISTAN"},{kode:"FJI",kodeverk:"LANDKODER",navn:"FIJI"},{kode:"RWA",kodeverk:"LANDKODER",navn:"RWANDA"},{kode:"GEO",kodeverk:"LANDKODER",navn:"GEORGIA"},{kode:"REU",kodeverk:"LANDKODER",navn:"REUNION"},{kode:"MTQ",kodeverk:"LANDKODER",navn:"MARTINIQUE"},{kode:"SDN",kodeverk:"LANDKODER",navn:"SUDAN"},{kode:"AND",kodeverk:"LANDKODER",navn:"ANDORRA"},{kode:"COK",kodeverk:"LANDKODER",navn:"COOKØYENE"},{kode:"SHN",kodeverk:"LANDKODER",navn:"ST. HELENA"},{kode:"COL",kodeverk:"LANDKODER",navn:"COLOMBIA"},{kode:"PER",kodeverk:"LANDKODER",navn:"PERU"},{kode:"STP",kodeverk:"LANDKODER",navn:"SAO TOME OG PRINCIPE"},{kode:"COM",kodeverk:"LANDKODER",navn:"KOMORENE"},{kode:"LUX",kodeverk:"LANDKODER",navn:"LUXEMBOURG"},{kode:"PNG",kodeverk:"LANDKODER",navn:"PAPUA NY-GUINEA"},{kode:"MKD",kodeverk:"LANDKODER",navn:"MAKEDONIA"},{kode:"GIN",kodeverk:"LANDKODER",navn:"GUINEA"},{kode:"CYM",kodeverk:"LANDKODER",navn:"CAYMANØYENE"},{kode:"VGB",kodeverk:"LANDKODER",navn:"JOMFRUØYENE BRIT."},{kode:"IRL",kodeverk:"LANDKODER",navn:"IRLAND"},{kode:"XXX",kodeverk:"LANDKODER",navn:"STATSLØS"},{kode:"HTI",kodeverk:"LANDKODER",navn:"HAITI"},{kode:"LBN",kodeverk:"LANDKODER",navn:"LIBANON"},{kode:"BRN",kodeverk:"LANDKODER",navn:"BRUNEI"},{kode:"GMB",kodeverk:"LANDKODER",navn:"GAMBIA"},{kode:"MLT",kodeverk:"LANDKODER",navn:"MALTA"},{kode:"CRI",kodeverk:"LANDKODER",navn:"COSTA RICA"},{kode:"UZB",kodeverk:"LANDKODER",navn:"UZBEKISTAN"},{kode:"CXR",kodeverk:"LANDKODER",navn:"CHRISTMASØYA"},{kode:"TUR",kodeverk:"LANDKODER",navn:"TYRKIA"},{kode:"UKR",kodeverk:"LANDKODER",navn:"UKRAINA"},{kode:"SUN",kodeverk:"LANDKODER",navn:"SOVJETUNIONEN"},{kode:"PYF",kodeverk:"LANDKODER",navn:"FRANSK POLYNESIA"},{kode:"MNE",kodeverk:"LANDKODER",navn:"MONTENEGRO"},{kode:"BIH",kodeverk:"LANDKODER",navn:"BOSNIA-HERCEGOVINA"},{kode:"PAN",kodeverk:"LANDKODER",navn:"PANAMA"},{kode:"SJM",kodeverk:"LANDKODER",navn:"SVALBARD OG JAN MAYEN"},{kode:"NIU",kodeverk:"LANDKODER",navn:"NIUE"},{kode:"SUR",kodeverk:"LANDKODER",navn:"SURINAM"},{kode:"MUS",kodeverk:"LANDKODER",navn:"MAURITIUS"},{kode:"CHE",kodeverk:"LANDKODER",navn:"SVEITS"},{kode:"BEL",kodeverk:"LANDKODER",navn:"BELGIA"},{kode:"TTO",kodeverk:"LANDKODER",navn:"TRINIDAD OG TOBAGO"},{kode:"SWZ",kodeverk:"LANDKODER",navn:"SWAZILAND"},{kode:"TUN",kodeverk:"LANDKODER",navn:"TUNISIA"},{kode:"GLP",kodeverk:"LANDKODER",navn:"GUADELOUPE"},{kode:"KWT",kodeverk:"LANDKODER",navn:"KUWAIT"},{kode:"DMA",kodeverk:"LANDKODER",navn:"DOMINICA"},{kode:"BGR",kodeverk:"LANDKODER",navn:"BULGARIA"},{kode:"ISL",kodeverk:"LANDKODER",navn:"ISLAND"},{kode:"SVN",kodeverk:"LANDKODER",navn:"SLOVENIA"},{kode:"PLW",kodeverk:"LANDKODER",navn:"PALAU"},{kode:"GBR",kodeverk:"LANDKODER",navn:"STORBRITANNIA"},{kode:"NAM",kodeverk:"LANDKODER",navn:"NAMIBIA"},{kode:"FSM",kodeverk:"LANDKODER",navn:"MIKRONESIAFØD."},{kode:"GNB",kodeverk:"LANDKODER",navn:"GUINEA-BISSAU"},{kode:"UMI",kodeverk:"LANDKODER",navn:"MINDRE STILLEHAVSØYER"},{kode:"MDA",kodeverk:"LANDKODER",navn:"MOLDOVA"},{kode:"MMR",kodeverk:"LANDKODER",navn:"MYANMAR (BURMA)"},{kode:"MOZ",kodeverk:"LANDKODER",navn:"MOSAMBIK"},{kode:"SGS",kodeverk:"LANDKODER",navn:"SØR-GEORGIA OG SØR-SANDWICHØYE"},{kode:"NPL",kodeverk:"LANDKODER",navn:"NEPAL"},{kode:"BES",kodeverk:"LANDKODER",navn:"BONAIRE, SINT EUSTATIUS, SABA"},{kode:"LBR",kodeverk:"LANDKODER",navn:"LIBERIA"},{kode:"MDG",kodeverk:"LANDKODER",navn:"MADAGASKAR"},{kode:"VIR",kodeverk:"LANDKODER",navn:"JOMFRUØYENE AM."},{kode:"ARE",kodeverk:"LANDKODER",navn:"DE ARABISKE EMIRATER"},{kode:"USA",kodeverk:"LANDKODER",navn:"USA"},{kode:"NFK",kodeverk:"LANDKODER",navn:"NORFOLKØYA"},{kode:"HKG",kodeverk:"LANDKODER",navn:"HONGKONG"},{kode:"DEU",kodeverk:"LANDKODER",navn:"TYSKLAND"},{kode:"LIE",kodeverk:"LANDKODER",navn:"LIECHTENSTEIN"},{kode:"ECU",kodeverk:"LANDKODER",navn:"ECUADOR"},{kode:"POL",kodeverk:"LANDKODER",navn:"POLEN"},{kode:"PRK",kodeverk:"LANDKODER",navn:"NORD-KOREA"},{kode:"GGY",kodeverk:"LANDKODER",navn:"GUERNSEY"},{kode:"NZL",kodeverk:"LANDKODER",navn:"NEW ZEALAND"},{kode:"MAR",kodeverk:"LANDKODER",navn:"MAROKKO"},{kode:"BWA",kodeverk:"LANDKODER",navn:"BOTSWANA"},{kode:"GUM",kodeverk:"LANDKODER",navn:"GUAM"},{kode:"YUG",kodeverk:"LANDKODER",navn:"JUGOSLAVIA"},{kode:"SEN",kodeverk:"LANDKODER",navn:"SENEGAL"},{kode:"MWI",kodeverk:"LANDKODER",navn:"MALAWI"},{kode:"TKM",kodeverk:"LANDKODER",navn:"TURKMENISTAN"},{kode:"GAB",kodeverk:"LANDKODER",navn:"GABON"},{kode:"FIN",kodeverk:"LANDKODER",navn:"FINLAND"},{kode:"PRY",kodeverk:"LANDKODER",navn:"PARAGUAY"},{kode:"PSE",kodeverk:"LANDKODER",navn:"DET PALESTINSKE OMRÅDET"},{kode:"FRA",kodeverk:"LANDKODER",navn:"FRANKRIKE"},{kode:"ZWE",kodeverk:"LANDKODER",navn:"ZIMBABWE"},{kode:"AZE",kodeverk:"LANDKODER",navn:"AZERBAJDZJAN"},{kode:"SXM",kodeverk:"LANDKODER",navn:"SINT MAARTEN"},{kode:"NIC",kodeverk:"LANDKODER",navn:"NICARAGUA"},{kode:"CAN",kodeverk:"LANDKODER",navn:"CANADA"},{kode:"COG",kodeverk:"LANDKODER",navn:"KONGO, REPUBLIKKEN"},{kode:"JPN",kodeverk:"LANDKODER",navn:"JAPAN"},{kode:"KOR",kodeverk:"LANDKODER",navn:"SØR-KOREA"},{kode:"HUN",kodeverk:"LANDKODER",navn:"UNGARN"},{kode:"YEM",kodeverk:"LANDKODER",navn:"JEMEN"},{kode:"CHL",kodeverk:"LANDKODER",navn:"CHILE"},{kode:"BRB",kodeverk:"LANDKODER",navn:"BARBADOS"},{kode:"DNK",kodeverk:"LANDKODER",navn:"DANMARK"},{kode:"NRU",kodeverk:"LANDKODER",navn:"NAURU"},{kode:"VCT",kodeverk:"LANDKODER",navn:"ST. VINCENT"},{kode:"BEN",kodeverk:"LANDKODER",navn:"BENIN"},{kode:"SMR",kodeverk:"LANDKODER",navn:"SAN MARINO"},{kode:"TCD",kodeverk:"LANDKODER",navn:"TSJAD"},{kode:"CUW",kodeverk:"LANDKODER",navn:"CURACAO"},{kode:"IRN",kodeverk:"LANDKODER",navn:"IRAN"},{kode:"SWE",kodeverk:"LANDKODER",navn:"SVERIGE"},{kode:"ERI",kodeverk:"LANDKODER",navn:"ERITREA"},{kode:"XUK",kodeverk:"LANDKODER",navn:"UKJENT"},{kode:"MDV",kodeverk:"LANDKODER",navn:"MALDIVENE"},{kode:"CSK",kodeverk:"LANDKODER",navn:"TSJEKKOSLOVAKIA"},{kode:"GRD",kodeverk:"LANDKODER",navn:"GRENADA"},{kode:"HND",kodeverk:"LANDKODER",navn:"HONDURAS"},{kode:"FRO",kodeverk:"LANDKODER",navn:"FÆRØYENE"},{kode:"COD",kodeverk:"LANDKODER",navn:"KONGO, DEN DEMOKR. REPUBL"},{kode:"SRB",kodeverk:"LANDKODER",navn:"SERBIA"},{kode:"AGO",kodeverk:"LANDKODER",navn:"ANGOLA"},{kode:"NCL",kodeverk:"LANDKODER",navn:"NY-KALEDONIA"},{kode:"SCG",kodeverk:"LANDKODER",navn:"SERBIA OG MONTENEGRO"},{kode:"GTM",kodeverk:"LANDKODER",navn:"GUATEMALA"},{kode:"AFG",kodeverk:"LANDKODER",navn:"AFGHANISTAN"},{kode:"JAM",kodeverk:"LANDKODER",navn:"JAMAICA"},{kode:"UGA",kodeverk:"LANDKODER",navn:"UGANDA"},{kode:"IMN",kodeverk:"LANDKODER",navn:"ISLE OF MAN"},{kode:"ISR",kodeverk:"LANDKODER",navn:"ISRAEL"},{kode:"SOM",kodeverk:"LANDKODER",navn:"SOMALIA"},{kode:"MNP",kodeverk:"LANDKODER",navn:"NORD-MARIANENE"},{kode:"XXK",kodeverk:"LANDKODER",navn:"KOSOVO"},{kode:"BLR",kodeverk:"LANDKODER",navn:"HVITERUSSLAND"},{kode:"LSO",kodeverk:"LANDKODER",navn:"LESOTHO"},{kode:"NER",kodeverk:"LANDKODER",navn:"NIGER"},{kode:"IDN",kodeverk:"LANDKODER",navn:"INDONESIA"},{kode:"CZE",kodeverk:"LANDKODER",navn:"DEN TSJEKKISKE REP."},{kode:"URY",kodeverk:"LANDKODER",navn:"URUGUAY"},{kode:"BGD",kodeverk:"LANDKODER",navn:"BANGLADESH"},{kode:"WLF",kodeverk:"LANDKODER",navn:"WALLIS/FUTUNAØYENE"},{kode:"CIV",kodeverk:"LANDKODER",navn:"ELFENBEINSKYSTEN"},{kode:"ABW",kodeverk:"LANDKODER",navn:"ARUBA"},{kode:"SLB",kodeverk:"LANDKODER",navn:"SALOMONØYENE"},{kode:"TWN",kodeverk:"LANDKODER",navn:"TAIWAN"},{kode:"SLE",kodeverk:"LANDKODER",navn:"SIERRA LEONE"},{kode:"BRA",kodeverk:"LANDKODER",navn:"BRASIL"},{kode:"DJI",kodeverk:"LANDKODER",navn:"DJIBOUTI"},{kode:"PRI",kodeverk:"LANDKODER",navn:"PUERTO RICO"},{kode:"PRT",kodeverk:"LANDKODER",navn:"PORTUGAL"},{kode:"ANT",kodeverk:"LANDKODER",navn:"DE NEDERLANDSKE ANTILLENE"},{kode:"THA",kodeverk:"LANDKODER",navn:"THAILAND"},{kode:"TLS",kodeverk:"LANDKODER",navn:"ØST-TIMOR"},{kode:"SPM",kodeverk:"LANDKODER",navn:"ST-PIERRE OG MIQUELON"},{kode:"ALB",kodeverk:"LANDKODER",navn:"ALBANIA"},{kode:"EGY",kodeverk:"LANDKODER",navn:"EGYPT"},{kode:"GRC",kodeverk:"LANDKODER",navn:"HELLAS"},{kode:"BFA",kodeverk:"LANDKODER",navn:"BURKINA FASO"},{kode:"ALA",kodeverk:"LANDKODER",navn:"ÅLAND"},{kode:"BOL",kodeverk:"LANDKODER",navn:"BOLIVIA"},{kode:"DDR",kodeverk:"LANDKODER",navn:"TYSKLAND (ØST)"},{kode:"HRV",kodeverk:"LANDKODER",navn:"KROATIA"},{kode:"AUS",kodeverk:"LANDKODER",navn:"AUSTRALIA"},{kode:"NGA",kodeverk:"LANDKODER",navn:"NIGERIA"},{kode:"LBY",kodeverk:"LANDKODER",navn:"LIBYA"},{kode:"MYT",kodeverk:"LANDKODER",navn:"MAYOTTE"},{kode:"LVA",kodeverk:"LANDKODER",navn:"LATVIA"},{kode:"BTN",kodeverk:"LANDKODER",navn:"BHUTAN"},{kode:"MSR",kodeverk:"LANDKODER",navn:"MONSERRAT"},{kode:"???",kodeverk:"LANDKODER",navn:"UOPPGITT/UKJENT"},{kode:"OMN",kodeverk:"LANDKODER",navn:"OMAN"},{kode:"SVK",kodeverk:"LANDKODER",navn:"SLOVAKIA"},{kode:"TUV",kodeverk:"LANDKODER",navn:"TUVALU"},{kode:"VEN",kodeverk:"LANDKODER",navn:"VENEZUELA"},{kode:"ITA",kodeverk:"LANDKODER",navn:"ITALIA"},{kode:"KHM",kodeverk:"LANDKODER",navn:"KAMBODSJA"},{kode:"ARM",kodeverk:"LANDKODER",navn:"ARMENIA"},{kode:"LCA",kodeverk:"LANDKODER",navn:"ST. LUCIA"},{kode:"GIB",kodeverk:"LANDKODER",navn:"GIBRALTAR"},{kode:"JEY",kodeverk:"LANDKODER",navn:"JERSEY"},{kode:"LAO",kodeverk:"LANDKODER",navn:"LAOS"},{kode:"BHR",kodeverk:"LANDKODER",navn:"BAHRAIN"},{kode:"ESH",kodeverk:"LANDKODER",navn:"VEST-SAHARA"},{kode:"TKL",kodeverk:"LANDKODER",navn:"TOKELAU"},{kode:"MNG",kodeverk:"LANDKODER",navn:"MONGOLIA"},{kode:"BLZ",kodeverk:"LANDKODER",navn:"BELIZE"},{kode:"GUF",kodeverk:"LANDKODER",navn:"FRANSK GUYANA"},{kode:"TCA",kodeverk:"LANDKODER",navn:"TURKS/CAICOSØYENE"},{kode:"WSM",kodeverk:"LANDKODER",navn:"SAMOA"},{kode:"JOR",kodeverk:"LANDKODER",navn:"JORDAN"},{kode:"MRT",kodeverk:"LANDKODER",navn:"MAURITANIA"},{kode:"CUB",kodeverk:"LANDKODER",navn:"CUBA"},{kode:"BDI",kodeverk:"LANDKODER",navn:"BURUNDI"},{kode:"GHA",kodeverk:"LANDKODER",navn:"GHANA"},{kode:"KNA",kodeverk:"LANDKODER",navn:"ST.KITTS OG NEVIS"},{kode:"ETH",kodeverk:"LANDKODER",navn:"ETIOPIA"},{kode:"SSD",kodeverk:"LANDKODER",navn:"SØR-SUDAN"},{kode:"VAT",kodeverk:"LANDKODER",navn:"VATIKANSTATEN"},{kode:"CPV",kodeverk:"LANDKODER",navn:"KAPP VERDE"},{kode:"PCN",kodeverk:"LANDKODER",navn:"PITCAIRN"},{kode:"SGP",kodeverk:"LANDKODER",navn:"SINGAPORE"},{kode:"KAZ",kodeverk:"LANDKODER",navn:"KAZAKHSTAN"},{kode:"MYS",kodeverk:"LANDKODER",navn:"MALAYSIA"},{kode:"PHL",kodeverk:"LANDKODER",navn:"FILIPPINENE"},{kode:"EST",kodeverk:"LANDKODER",navn:"ESTLAND"},{kode:"NOR",kodeverk:"LANDKODER",navn:"NORGE"},{kode:"BMU",kodeverk:"LANDKODER",navn:"BERMUDA"},{kode:"LTU",kodeverk:"LANDKODER",navn:"LITAUEN"},{kode:"MAC",kodeverk:"LANDKODER",navn:"MACAO"},{kode:"TON",kodeverk:"LANDKODER",navn:"TONGA"},{kode:"ROU",kodeverk:"LANDKODER",navn:"ROMANIA"},{kode:"BLM",kodeverk:"LANDKODER",navn:"SAINT BARTHELEMY"},{kode:"SAU",kodeverk:"LANDKODER",navn:"SAUDI-ARABIA"},{kode:"GNQ",kodeverk:"LANDKODER",navn:"EKVATORIAL-GUINEA"},{kode:"TGO",kodeverk:"LANDKODER",navn:"TOGO"},{kode:"ZMB",kodeverk:"LANDKODER",navn:"ZAMBIA"},{kode:"VUT",kodeverk:"LANDKODER",navn:"VANUATU"},{kode:"DZA",kodeverk:"LANDKODER",navn:"ALGERIE"},{kode:"TJK",kodeverk:"LANDKODER",navn:"TADZJIKISTAN"},{kode:"NLD",kodeverk:"LANDKODER",navn:"NEDERLAND"},{kode:"KIR",kodeverk:"LANDKODER",navn:"KIRIBATI"},{kode:"GUY",kodeverk:"LANDKODER",navn:"GUYANA"},{kode:"BVT",kodeverk:"LANDKODER",navn:"BOUVETØYA"},{kode:"IND",kodeverk:"LANDKODER",navn:"INDIA"},{kode:"LKA",kodeverk:"LANDKODER",navn:"SRI LANKA"},{kode:"SYR",kodeverk:"LANDKODER",navn:"SYRIA"},{kode:"ESP",kodeverk:"LANDKODER",navn:"SPANIA"},{kode:"GRL",kodeverk:"LANDKODER",navn:"GRØNLAND"},{kode:"AIA",kodeverk:"LANDKODER",navn:"ANGUILLA"},{kode:"IRQ",kodeverk:"LANDKODER",navn:"IRAK"},{kode:"MCO",kodeverk:"LANDKODER",navn:"MONACO"},{kode:"MHL",kodeverk:"LANDKODER",navn:"MARSHALLØYENE"},{kode:"DOM",kodeverk:"LANDKODER",navn:"DEN DOMINIKANSKE REP"},{kode:"FLK",kodeverk:"LANDKODER",navn:"FALKLANDSØYENE"}],$O=[{kode:"BT-009",kodeverk:"BEHANDLING_TYPE",navn:"Revurdering tilbakekreving"},{kode:"BT-006",kodeverk:"BEHANDLING_TYPE",navn:"Dokumentinnsyn"},{kode:"BT-007",kodeverk:"BEHANDLING_TYPE",navn:"Tilbakekreving"},{kode:"BT-002",kodeverk:"BEHANDLING_TYPE",navn:"Førstegangsbehandling"},{kode:"BT-005",kodeverk:"BEHANDLING_TYPE",navn:"Tilbakebetaling endring"},{kode:"BT-008",kodeverk:"BEHANDLING_TYPE",navn:"Anke"},{kode:"BT-003",kodeverk:"BEHANDLING_TYPE",navn:"Klage"},{kode:"BT-004",kodeverk:"BEHANDLING_TYPE",navn:"Revurdering"}],JO=[{kode:"IKKE_I_AKTIVITET_IKKE_DOKUMENTERT",kodeverk:"AKTIVITETSKRAV_AVKLARING",navn:"Aktiviteten er ikke dokumentert"},{kode:"I_AKTIVITET",kodeverk:"AKTIVITETSKRAV_AVKLARING",navn:"Mor er i aktivitet"},{kode:"IKKE_I_AKTIVITET_DOKUMENTERT",kodeverk:"AKTIVITETSKRAV_AVKLARING",navn:"Mor er ikke i aktivitet"}],WO=[{kode:"INNV",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Innvilget innsyn"},{kode:"AVVIST",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Avslått innsyn"},{kode:"DELV",kodeverk:"INNSYN_RESULTAT_TYPE",navn:"Delvis innvilget innsyn"}],zO=[{kode:"AVKLARES",kodeverk:"MEDLEMSKAP_TYPE",navn:"Under avklaring"},{kode:"FORELOPIG",kodeverk:"MEDLEMSKAP_TYPE",navn:"Foreløpig"},{kode:"ENDELIG",kodeverk:"MEDLEMSKAP_TYPE",navn:"Endelig"}],ZO=[{kode:"FODSELSDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fødselsdato"},{kode:"TILBAKETREKK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Tilbaketrekk"},{kode:"ER_ANKEFRIST_IKKE_OVERHOLDT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er ankefrist ikke overholdt"},{kode:"FNR",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fødselsnummer"},{kode:"TERMINBEKREFTELSE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Terminbekreftelse"},{kode:"TERMINDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Termindato"},{kode:"ANKE_RESULTAT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Anke resultat"},{kode:"UTTAK_SPLITT_TIDSPERIODE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Resulterende periode ved splitting"},{kode:"UTTAK_TREKKDAGER_FLERBARN_KVOTE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Trekkdager flerbarn kvote"},{kode:"OPPHOLDSRETT_IKKE_EOS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruker har ikke oppholdsrett i EØS"},{kode:"TILRETTELEGGING_SKAL_BRUKES",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Avgjør om tilrettelegging skal brukes"},{kode:"ER_ANKE_IKKE_KONKRET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er anke ikke konkret."},{kode:"BEHANDLING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Behandling"},{kode:"UTTAK_GRADERING_ARBEIDSFORHOLD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Gradering av arbeidsforhold"},{kode:"ANKE_AVVIST_ÅRSAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Årsak til avvist anke"},{kode:"INNTEKT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Inntekt"},{kode:"SOKNADSFRISTVILKARET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Søknadsfristvilkåret"},{kode:"DAGPENGER_INNTEKT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Dagpenger"},{kode:"ARBEIDSFORHOLD_BEKREFTET_TOM_DATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Til og med dato fastsatt av saksbehandler"},{kode:"SOKNADSFRIST",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Søknadsfrist"},{kode:"VILKAR_SOM_ANVENDES",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Vilkår som anvendes"},{kode:"PERIODE_FOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Periode f.o.m."},{kode:"UTTAK_PROSENT_UTBETALING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Utbetalingsgrad"},{kode:"NYTT_REFUSJONSKRAV",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Nytt refusjonskrav"},{kode:"DODSDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Dødsdato"},{kode:"DOKUMENTASJON_FORELIGGER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Dokumentasjon foreligger"},{kode:"LØNNSENDRING_I_PERIODEN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Lønnsendring i beregningsperioden"},{kode:"AVKLART_PERIODE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Avklart periode"},{kode:"SVANGERSKAPSPENGERVILKÅRET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Svangerskapsvilkåret"},{kode:"KLAGE_OMGJØR_ÅRSAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Årsak til omgjøring"},{kode:"AKTIVITET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Aktivitet"},{kode:"UTTAK_STØNADSKONTOTYPE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Stønadskontotype"},{kode:"ALENEOMSORG",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Aleneomsorg"},{kode:"OMSORG",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Omsorg"},{kode:"KONTAKTPERSON",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Kontaktperson"},{kode:"ER_KLAGE_KONKRET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er klagefrist overholdt"},{kode:"TILRETTELEGGING_BEHOV_FOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Tilrettelegging behov FOM"},{kode:"ANNEN_FORELDER_RETT_EØS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Annen forelder har opptjent rett fra land i EØS"},{kode:"AKTIVITETSKRAV_AVKLARING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Avklaring om mor er i aktivitet"},{kode:"FASTSETT_RESULTAT_PERIODEN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fastsett resultat for perioden"},{kode:"FRILANSVIRKSOMHET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Frilansvirksomhet"},{kode:"MANN_ADOPTERER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mann adopterer"},{kode:"ANDEL_ARBEID",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Andel i arbeid"},{kode:"DELVIS_TILRETTELEGGING_FOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Delvis tilrettelegging FOM"},{kode:"OPPTJENINGSVILKARET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Opptjeningsvilkåret"},{kode:"ER_KLAGER_PART",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er klagefrist overholdt"},{kode:"UTTAK_PERIODE_RESULTAT_TYPE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Resultattype for periode"},{kode:"UTLAND",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Utland"},{kode:"BRUK_ANTALL_I_TPS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruk antall fra folkeregisteret"},{kode:"AKTIVITET_PERIODE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Perioden med aktivitet"},{kode:"FASTSETT_ETTERLØNN_SLUTTPAKKE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fastsett søkers månedsinntekt fra etterlønn eller sluttpakke"},{kode:"IKKE_OMSORG_PERIODEN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Perioden Søker har ikke omsorg for barnet"},{kode:"DEKNINGSGRAD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Dekningsgrad"},{kode:"ER_ANKEN_IKKE_SIGNERT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"er anken ikke signert."},{kode:"SYKDOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Sykdom"},{kode:"UTSTEDTDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Utstedtdato"},{kode:"FODSELSVILKARET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fødsel"},{kode:"NAVN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Navn"},{kode:"UTTAK_TREKKDAGER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Trekkdager"},{kode:"PA_KLAGD_BEHANDLINGID",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Påklagd behandlingId"},{kode:"VURDER_ETTERLØNN_SLUTTPAKKE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Har søker inntekt fra etterlønn eller sluttpakke"},{kode:"OPPHOLDSRETT_EOS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruker har oppholdsrett i EØS"},{kode:"RETT_TIL_FORELDREPENGER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Rett til foreldrepenger"},{kode:"INNTEKTSKATEGORI",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Inntektskategori"},{kode:"ADOPTERER_ALENE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Adopterer alene"},{kode:"ARBEIDSFORHOLD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Arbeidsforhold"},{kode:"BRUKER_TVUNGEN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruker er under tvungen forvaltning"},{kode:"DELVIS_REFUSJON_FØR_STARTDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Delvis refusjon som utbetales før startdato for full refusjon"},{kode:"ENDRING_TIDSBEGRENSET_ARBEIDSFORHOLD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Endring tidsbegrenset arbeidsforhold"},{kode:"VURDER_GRADERING_PÅ_ANDEL_UTEN_BG",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Vurder om søker har gradering på en andel uten beregningsgrunnlag"},{kode:"MANDAT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mandat"},{kode:"MOR_MOTTAR_UFØRETRYGD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mor mottar uføretrygd"},{kode:"HEL_TILRETTELEGGING_FOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Hel tilrettelegging FOM"},{kode:"ORGANISASJONSNUMMER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Organisasjonsnummer"},{kode:"UTTAK_GRADERING_AVSLAG_ÅRSAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Årsak avslag gradering"},{kode:"ER_KLAGEN_SIGNERT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er klagefrist overholdt"},{kode:"ER_KLAGEFRIST_OVERHOLDT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er klagefrist overholdt"},{kode:"OMSORGSVILKAR",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Foreldreansvar"},{kode:"PA_ANKET_BEHANDLINGID",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"på anket behandlingsId."},{kode:"SLUTTE_ARBEID_FOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Slutte arbeid FOM"},{kode:"BRUK_ANTALL_I_SOKNAD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruk antall fra søknad"},{kode:"KLAGE_RESULTAT_NFP",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Resultat"},{kode:"FORDELING_FOR_ANDEL",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fordeling for arbeidsforhold"},{kode:"UTTAK_SAMTIDIG_UTTAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Samtidig uttak"},{kode:"ER_SOKER_BOSATT_I_NORGE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er søker bosatt i Norge?"},{kode:"FRILANS_INNTEKT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Frilans inntekt"},{kode:"FASTSETT_VIDERE_BEHANDLING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fastsett videre behandling"},{kode:"BRUK_ANTALL_I_VEDTAKET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Bruk antall fra vedtaket"},{kode:"OMSORGSOVERTAKELSESDATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Omsorgsovertakelsesdato"},{kode:"UTTAK_PERIODE_RESULTAT_ÅRSAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Resultat årsak"},{kode:"ENDRING_NAERING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Endring i næring"},{kode:"FORDELING_FOR_NY_ANDEL",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ny andel med fordeling"},{kode:"BEHANDLENDE_ENHET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Behandlende enhet"},{kode:"BRUTTO_NAERINGSINNTEKT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Brutto næringsinntekt"},{kode:"FORDELING_ETTER_BESTEBEREGNING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Fordeling etter besteberegning"},{kode:"STARTDATO_FRA_SOKNAD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Startdato fra søknad"},{kode:"NY_STARTDATO_REFUSJON",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ny startdato for refusjon"},{kode:"OVERSTYRT_VURDERING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Overstyrt vurdering"},{kode:"KLAGE_RESULTAT_KA",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ytelsesvedtak"},{kode:"FARESIGNALER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Faresignaler"},{kode:"NY_AKTIVITET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Det er lagt til ny aktivitet for"},{kode:"MOTTAR_YTELSE_FRILANS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mottar søker ytelse for frilansaktiviteten"},{kode:"NY_REFUSJONSFRIST",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ny refusjonsfrist"},{kode:"OVERSTYRT_BEREGNING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Overstyrt beregning"},{kode:"AVKLARSAKSOPPLYSNINGER",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Avklar saksopplysninger"},{kode:"INNTEKT_FRA_ARBEIDSFORHOLD",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Inntekt fra arbeidsforhold"},{kode:"SOKERSOPPLYSNINGSPLIKT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Søkers opplysningsplikt"},{kode:"SELVSTENDIG_NAERINGSDRIVENDE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Selvstendig næringsdrivende"},{kode:"GYLDIG_MEDLEM_FOLKETRYGDEN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Gyldig medlem i folketrygden"},{kode:"MOTTATT_DATO",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mottatt dato"},{kode:"ANTALL_BARN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Antall barn"},{kode:"EKTEFELLES_BARN",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ektefelles barn"},{kode:"MILITÆR_ELLER_SIVIL",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Militær- eller siviltjeneste"},{kode:"PERIODE_TOM",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Periode t.o.m."},{kode:"FORELDREANSVARSVILKARET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Foreldreansvar"},{kode:"STILLINGSPROSENT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Stillingsprosent"},{kode:"ADOPSJONSVILKARET",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Adopsjon"},{kode:"ANKE_OMGJØR_ÅRSAK",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Årsak til omgjøring"},{kode:"INNTEKTSKATEGORI_FOR_ANDEL",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Inntektskategori for andel"},{kode:"KONTROLL_AV_BESTEBEREGNING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Kontroll av besteberegning"},{kode:"MOR_MOTTAR_STØNAD_EØS",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mor mottar foreldrepenger fra land i EØS"},{kode:"ER_ANKER_IKKE_PART",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Angir om anker ikke er part i saken."},{kode:"ER_VILKÅRENE_TILBAKEKREVING_OPPFYLT",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er vilkårene for tilbakekreving oppfylt"},{kode:"NY_FORDELING",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Ny fordeling for"},{kode:"ER_SÆRLIGE_GRUNNER_TIL_REDUKSJON",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Er det særlige grunner til reduksjon"},{kode:"MOTTAR_YTELSE_ARBEID",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Mottar søker ytelse for arbeid i {value}"},{kode:"TYPE_VERGE",kodeverk:"HISTORIKK_ENDRET_FELT_TYPE",navn:"Type verge"}],XO=[{kode:"UTPE",kodeverk:"PERSONSTATUS_TYPE",navn:"Utgått person"},{kode:"BOSA",kodeverk:"PERSONSTATUS_TYPE",navn:"Bosatt"},{kode:"DØD",kodeverk:"PERSONSTATUS_TYPE",navn:"Død"},{kode:"FØDR",kodeverk:"PERSONSTATUS_TYPE",navn:"Fødselregistrert"},{kode:"FOSV",kodeverk:"PERSONSTATUS_TYPE",navn:"Forsvunnet/savnet"},{kode:"UREG",kodeverk:"PERSONSTATUS_TYPE",navn:"Uregistrert person"},{kode:"ADNR",kodeverk:"PERSONSTATUS_TYPE",navn:"D-nummer"},{kode:"UTAN",kodeverk:"PERSONSTATUS_TYPE",navn:"Utgått person annullert tilgang Fnr"},{kode:"UTVA",kodeverk:"PERSONSTATUS_TYPE",navn:"Utvandret"}],QO=[{kode:"ENHETSREGISTERET",kodeverk:"FAGSYSTEM",navn:"Enhetsregisteret"},{kode:"INFOTRYGD",kodeverk:"FAGSYSTEM",navn:"Infotrygd"},{kode:"INNTEKT",kodeverk:"FAGSYSTEM",navn:"INNTEKT"},{kode:"ARENA",kodeverk:"FAGSYSTEM",navn:"Arena"},{kode:"GOSYS",kodeverk:"FAGSYSTEM",navn:"Gosys"},{kode:"JOARK",kodeverk:"FAGSYSTEM",navn:"Joark"},{kode:"K9SAK",kodeverk:"FAGSYSTEM",navn:"Vedtaksløsning Folketrygdloven Kapittel 9"},{kode:"FPSAK",kodeverk:"FAGSYSTEM",navn:"Vedtaksløsning Foreldrepenger"},{kode:"AAREGISTERET",kodeverk:"FAGSYSTEM",navn:"AAregisteret"},{kode:"MEDL",kodeverk:"FAGSYSTEM",navn:"MEDL"},{kode:"TPS",kodeverk:"FAGSYSTEM",navn:"TPS"},{kode:"VLSP",kodeverk:"FAGSYSTEM",navn:"Vedtaksløsning Sykepenger"}],e1=[{kode:"ANKE_STADFESTE_YTELSESVEDTAK",kodeverk:"ANKEVURDERING",navn:"Ytelsesvedtaket stadfestes"},{kode:"ANKE_HJEMSENDE_UTEN_OPPHEV",kodeverk:"ANKEVURDERING",navn:"Hjemsende uten å oppheve"},{kode:"ANKE_AVVIS",kodeverk:"ANKEVURDERING",navn:"Anken avvises"},{kode:"ANKE_OMGJOER",kodeverk:"ANKEVURDERING",navn:"Anken omgjøres"},{kode:"ANKE_OPPHEVE_OG_HJEMSENDE",kodeverk:"ANKEVURDERING",navn:"Ytelsesvedtaket oppheves og hjemsendes"}],n1=[{kode:"AVSLU",kodeverk:"BEHANDLING_STATUS",navn:"Avsluttet"},{kode:"IVED",kodeverk:"BEHANDLING_STATUS",navn:"Iverksetter vedtak"},{kode:"UTRED",kodeverk:"BEHANDLING_STATUS",navn:"Behandling utredes"},{kode:"OPPRE",kodeverk:"BEHANDLING_STATUS",navn:"Opprettet"},{kode:"FVED",kodeverk:"BEHANDLING_STATUS",navn:"Fatter vedtak"}],r1=[{kode:"FRILANSER",kodeverk:"VIRKSOMHET_TYPE",navn:"Frilanser"},{kode:"FISKE",kodeverk:"VIRKSOMHET_TYPE",navn:"Fiske"},{kode:"ANNEN",kodeverk:"VIRKSOMHET_TYPE",navn:"Annen næringsvirksomhet"},{kode:"JORDBRUK_SKOGBRUK",kodeverk:"VIRKSOMHET_TYPE",navn:"Jordbruk"},{kode:"DAGMAMMA",kodeverk:"VIRKSOMHET_TYPE",navn:"Dagmamma i eget hjem/familiebarnehage"}],t1=[{kode:"FTL_2_9_2_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, annet ledd, jfr. 1.ledd bokstav a"},{kode:"FTL_2_7_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-7, 3.ledd bokstav a"},{kode:"IHT_AVTALE",kodeverk:"MEDLEMSKAP_DEKNING",navn:"I henhold til avtale"},{kode:"FTL_2_7_b",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-7, 3. ledd bokstav b"},{kode:"FTL_2_9_1_a",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav a"},{kode:"FTL_2_6",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-6"},{kode:"UNNTATT",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Unntatt"},{kode:"OPPHOR",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Opphør"},{kode:"FTL_2_9_2_c",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, annet ledd, jf. 1. ledd bokstav c"},{kode:"FULL",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Full"},{kode:"FTL_2_9_1_b",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav b"},{kode:"FTL_2_9_1_c",kodeverk:"MEDLEMSKAP_DEKNING",navn:"Folketrygdloven § 2-9, 1.ledd bokstav c"}],a1=[{kode:"NYTT_ARBEIDSFORHOLD",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforholdet er ansett som nytt"},{kode:"BRUK",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Bruk"},{kode:"SLÅTT_SAMMEN_MED_ANNET",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforholdet er slått sammen med et annet"},{kode:"LAGT_TIL_AV_SAKSBEHANDLER",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforhold lagt til av saksbehandler"},{kode:"BRUK_UTEN_INNTEKTSMELDING",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Bruk, men ikke benytt inntektsmelding"},{kode:"IKKE_BRUK",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Ikke bruk"},{kode:"BASERT_PÅ_INNTEKTSMELDING",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Arbeidsforholdet som ikke ligger i AA-reg er basert på inntektsmelding"},{kode:"BRUK_MED_OVERSTYRT_PERIODE",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Bruk arbeidsforholdet med overstyrt periode"},{kode:"INNTEKT_IKKE_MED_I_BG",kodeverk:"ARBEIDSFORHOLD_HANDLING_TYPE",navn:"Inntekten til arbeidsforholdet skal ikke være med i beregningsgrunnlaget"}],i1=[{kode:"ARBEID",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeid"},{kode:"FRILANS",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Frilans"},{kode:"ETTERLØNN_SLUTTPAKKE",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Etterlønn eller sluttpakke"},{kode:"SYKEPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Sykepenger"},{kode:"AAP",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeidsavklaringspenger"},{kode:"VENTELØNN_VARTPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Ventelønn eller vartpenger"},{kode:"OMSORGSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Omsorgspenger"},{kode:"UTDANNINGSPERMISJON",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Utdanningspermisjon"},{kode:"FRILOPP",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Frilansoppdrag"},{kode:"OPPLÆRINGSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Opplæringspenger"},{kode:"DAGPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Dagpenger"},{kode:"NÆRING",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Næring"},{kode:"VIDERE_ETTERUTDANNING",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Videre- og etterutdanning"},{kode:"PLEIEPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Pleiepenger"},{kode:"MILITÆR_ELLER_SIVILTJENESTE",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Militær- eller siviltjeneste"},{kode:"FORELDREPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Foreldrepenger"},{kode:"SVANGERSKAPSPENGER",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Svangerskapspenger"},{kode:"FRISINN",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"FRISINN"},{kode:"UTENLANDSK_ARBEIDSFORHOLD",kodeverk:"OPPTJENING_AKTIVITET_TYPE",navn:"Arbeid i utlandet"}],s1=[{kode:"VELFERDSPERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Velferdspermisjon"},{kode:"PERMISJON_MED_FORELDREPENGER",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon med foreldrepenger"},{kode:"ANNEN_PERMISJON_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Andre lovfestede permisjoner"},{kode:"UTDANNINGSPERMISJON_IKKE_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon (Ikke lovfestet)"},{kode:"UTDANNINGSPERMISJON_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon (Lovfestet)"},{kode:"UTDANNINGSPERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Utdanningspermisjon"},{kode:"PERMISJON_VED_MILITÆRTJENESTE",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon ved militærtjeneste"},{kode:"PERMITTERING",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permittering"},{kode:"PERMISJON",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Permisjon"},{kode:"ANNEN_PERMISJON_IKKE_LOVFESTET",kodeverk:"PERMISJONSBESKRIVELSE_TYPE",navn:"Andre ikke-lovfestede permisjoner"}],o1=[{kode:"MIDLERTIDIG",kodeverk:"OPPHOLDSTILLATELSE_TYPE",navn:"Midlertidig oppholdstillatelse"},{kode:"PERMANENT",kodeverk:"OPPHOLDSTILLATELSE_TYPE",navn:"Permanent oppholdstillatelse"}],l1=[{kode:"MEDLEM",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Periode med medlemskap"},{kode:"UNNTAK",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Periode med unntak fra medlemskap"},{kode:"IKKE_RELEVANT",kodeverk:"MEDLEMSKAP_MANUELL_VURD",navn:"Ikke relevant periode"}],u1=[{kode:"INTROPROG",kodeverk:"MORS_AKTIVITET",navn:"Deltar i introduksjonsprogram for nykomne innvandrere"},{kode:"INNLAGT",kodeverk:"MORS_AKTIVITET",navn:"Er innlagt på institusjon"},{kode:"UFØRE",kodeverk:"MORS_AKTIVITET",navn:"Mor mottar uføretrygd"},{kode:"UTDANNING",kodeverk:"MORS_AKTIVITET",navn:"Tar utdanning på heltid"},{kode:"IKKE_OPPGITT",kodeverk:"MORS_AKTIVITET",navn:"Periode uten oppgitt aktivitetskrav"},{kode:"ARBEID_OG_UTDANNING",kodeverk:"MORS_AKTIVITET",navn:"Er i arbeid og utdanning"},{kode:"TRENGER_HJELP",kodeverk:"MORS_AKTIVITET",navn:"Er avhengig av hjelp til å ta seg av barnet"},{kode:"ARBEID",kodeverk:"MORS_AKTIVITET",navn:"Er i arbeid"},{kode:"KVALPROG",kodeverk:"MORS_AKTIVITET",navn:"Deltar i kvalifiseringsprogrammet"}],d1=[{kode:"KOSTBESPARELSE_HJEM",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostbesparelser i hjemmet"},{kode:"FORSIKRINGER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Skattepliktig del forsikringer"},{kode:"BEDRIFTSBARNEHAGE",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bedriftsbarnehageplass"},{kode:"KOST_DAGER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostpenger dager"},{kode:"KOST_DOEGN",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Kostpenger døgnsats"},{kode:"YRKESBIL_KILOMETER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Yrkesbil tjenesteligbehov kilometer"},{kode:"RENTEFORDEL_LAAN",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Rentefordel lån"},{kode:"YRKESBIL_LISTEPRIS",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Yrkesbil tjenesteligbehov listepris"},{kode:"BESOEKSREISER_HJEM",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Besøksreiser hjemmet annet"},{kode:"UTENLANDSK_PENSJONSORDNING",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Innbetaling utenlandsk pensjonsordning"},{kode:"ELEKTRISK_KOMMUNIKASJON",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Elektrisk kommunikasjon"},{kode:"BOLIG",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bolig"},{kode:"OPSJONER",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Opsjoner"},{kode:"FRI_TRANSPORT",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Fri transport"},{kode:"TILSKUDD_BARNEHAGE",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Tilskudd barnehageplass"},{kode:"AKSJER_UNDERKURS",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Aksjer grunnfondsbevis til underkurs"},{kode:"ANNET",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Annet"},{kode:"BIL",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Bil"},{kode:"LOSJI",kodeverk:"NATURAL_YTELSE_TYPE",navn:"Losji"}],k1=[{kode:"MEDMOR",kodeverk:"FORELDRE_TYPE",navn:"Medmor"},{kode:"FAR",kodeverk:"FORELDRE_TYPE",navn:"Far"},{kode:"MOR",kodeverk:"FORELDRE_TYPE",navn:"Mor"},{kode:"ANDRE",kodeverk:"FORELDRE_TYPE",navn:"Andre"}],g1=[{kode:"BOSTEDSADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Bostedsadresse"},{kode:"BOSTEDSADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Bostedsadresse utland"},{kode:"POSTADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Kontaktadresse"},{kode:"POSTADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Kontaktadresse utland"},{kode:"MIDLERTIDIG_POSTADRESSE_NORGE",kodeverk:"ADRESSE_TYPE",navn:"Oppholdsadresse"},{kode:"MIDLERTIDIG_POSTADRESSE_UTLAND",kodeverk:"ADRESSE_TYPE",navn:"Oppholdsadresse utland"},{kode:"UKJENT_ADRESSE",kodeverk:"ADRESSE_TYPE",navn:"Ukjent adresse"}],v1={RelasjonsRolleType:pO,HistorikkinnslagType:hO,UttakUtsettelseType:AO,FagsakYtelseType:yO,StønadskontoType:[{kode:"FELLESPERIODE",kodeverk:"STOENADSKONTOTYPE",navn:"Fellesperiode"},{kode:"FEDREKVOTE",kodeverk:"STOENADSKONTOTYPE",navn:"Fedrekvote"},{kode:"FORELDREPENGER_FØR_FØDSEL",kodeverk:"STOENADSKONTOTYPE",navn:"Foreldrepenger før fødsel"},{kode:"MØDREKVOTE",kodeverk:"STOENADSKONTOTYPE",navn:"Mødrekvote"},{kode:"FLERBARNSDAGER",kodeverk:"STOENADSKONTOTYPE",navn:"Flerbarnsdager"},{kode:"FORELDREPENGER",kodeverk:"STOENADSKONTOTYPE",navn:"Foreldrepenger"}],FagsakStatus:cO,Venteårsak:[{kode:"FOR_TIDLIG_SOKNAD",kodeverk:"VENT_AARSAK",navn:"Venter pga for tidlig søknad"},{kode:"VENT_ØKONOMI",kodeverk:"VENT_AARSAK",navn:"Venter på økonomiløsningen"},{kode:"AVV_RESPONS_REVURDERING",kodeverk:"VENT_AARSAK",navn:"Avventer respons på varsel om revurdering"},{kode:"UTV_FRIST",kodeverk:"VENT_AARSAK",navn:"Utvidet frist"},{kode:"OPPD_ÅPEN_BEH",kodeverk:"VENT_AARSAK",navn:"Venter på oppdatering av åpen behandling"},{kode:"VENT_MANGLENDE_ARBEIDSFORHOLD",kodeverk:"VENT_AARSAK",navn:"Sak settes på vent pga kommune- og fylkesammenslåing. Meld saken i Porten."},{kode:"VENT_OPDT_INNTEKTSMELDING",kodeverk:"VENT_AARSAK",navn:"Venter på inntektsmelding"},{kode:"DELVIS_TILRETTELEGGING_OG_REFUSJON_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"AAP_DP_ENESTE_AKTIVITET_SVP",kodeverk:"VENT_AARSAK",navn:"Bruker har ikke rett til svangerskapspenger når eneste aktivitet er AAP/DP"},{kode:"VENT_BEREGNING_TILBAKE_I_TID",kodeverk:"VENT_AARSAK",navn:"Endring i tilkjent ytelse bakover i tid. Dette håndteres ikke i løsningen enda."},{kode:"VENT_PÅ_KORRIGERT_BESTEBEREGNING",kodeverk:"VENT_AARSAK",navn:"Besteberegningen er feil. Feilen må meldes og korrigeres."},{kode:"VENT_PÅ_SISTE_AAP_MELDEKORT",kodeverk:"VENT_AARSAK",navn:"Venter på siste meldekort for AAP eller dagpenger før første uttaksdag."},{kode:"VENT_MANGLENDE_SYKEMELDING",kodeverk:"VENT_AARSAK",navn:"Venter på siste sykemelding for sykepenger basert på dagpenger"},{kode:"VENT_DØDFØDSEL_80P_DEKNINGSGRAD",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt 80% dekningsgrad med dødfødsel"},{kode:"VENT_INFOTRYGD",kodeverk:"VENT_AARSAK",navn:"Venter på en ytelse i Infotrygd"},{kode:"VENT_PÅ_NY_INNTEKTSMELDING_MED_GYLDIG_ARB_ID",kodeverk:"VENT_AARSAK",navn:"Venter på ny inntektsmelding med arbeidsforholdId som stemmer med Aareg"},{kode:"ANKE_OVERSENDT_TIL_TRYGDERETTEN",kodeverk:"VENT_AARSAK",navn:"Venter på at saken blir behandlet hos Trygderetten"},{kode:"VENTELØNN_ELLER_MILITÆR_MED_FLERE_AKTIVITETER",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt ventelønn og/eller militær i kombinasjon med andre statuser"},{kode:"VENT_TIDLIGERE_BEHANDLING",kodeverk:"VENT_AARSAK",navn:"Venter på iverksettelse av en tidligere behandling i denne saken"},{kode:"VENT_OPPTJENING_OPPLYSNINGER",kodeverk:"VENT_AARSAK",navn:"Venter på opptjeningsopplysninger"},{kode:"FLERE_ARBEIDSFORHOLD_SAMME_ORG_SVP",kodeverk:"VENT_AARSAK",navn:"Håndterer foreløpig ikke flere arbeidsforhold i samme virksomhet for SVP"},{kode:"SCANN",kodeverk:"VENT_AARSAK",navn:"Venter på scanning"},{kode:"VENT_ÅPEN_BEHANDLING",kodeverk:"VENT_AARSAK",navn:"Søker eller den andre forelderen har en åpen behandling"},{kode:"VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG",kodeverk:"VENT_AARSAK",navn:"Mangel i løsning for oppgitt gradering der utbetaling ikke finnes"},{kode:"AVV_DOK",kodeverk:"VENT_AARSAK",navn:"Avventer dokumentasjon"},{kode:"AVV_FODSEL",kodeverk:"VENT_AARSAK",navn:"Avventer fødsel"},{kode:"VENT_MILITÆR_OG_BG_UNDER_3G",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_KABAL",kodeverk:"VENT_AARSAK",navn:"Klage / anke behandles av Klageinstans i egen løsning"},{kode:"VENT_REGISTERINNHENTING",kodeverk:"VENT_AARSAK",navn:"Venter på registerinformasjon"},{kode:"VENT_INNTEKT_RAPPORTERINGSFRIST",kodeverk:"VENT_AARSAK",navn:"Inntekt rapporteringsfrist"},{kode:"FL_SN_IKKE_STOTTET_FOR_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"VENT_DEKGRAD_REGEL",kodeverk:"VENT_AARSAK",navn:"Venter på 80% dekningsgrad-regel"},{kode:"VENT_FEIL_ENDRINGSSØKNAD",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av potensielt feil i endringssøknad"},{kode:"VENT_SØKNAD_SENDT_INFORMASJONSBREV",kodeverk:"VENT_AARSAK",navn:"Sendt informasjonsbrev venter søknad."},{kode:"GRADERING_FLERE_ARBEIDSFORHOLD",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER",kodeverk:"VENT_AARSAK",navn:"Venter på merknader fra bruker"},{kode:"AAP_DP_SISTE_10_MND_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"ULIKE_STARTDATOER_SVP",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."},{kode:"REFUSJON_3_MÅNEDER",kodeverk:"VENT_AARSAK",navn:"Behandlingen er satt på vent på grunn av mangel i løsningen. Det jobbes med å løse dette."}],AnkeVurderingOmgjør:[{kode:"ANKE_TIL_GUNST",kodeverk:"ANKE_VURDERING_OMGJOER",navn:"Gunst omgjør i anke"},{kode:"ANKE_TIL_UGUNST",kodeverk:"ANKE_VURDERING_OMGJOER",navn:"Ugunst omgjør i anke"},{kode:"ANKE_DELVIS_OMGJOERING_TIL_GUNST",kodeverk:"ANKE_VURDERING_OMGJOER",navn:"Delvis omgjøring, til gunst i anke"}],BehandlingÅrsakType:[{kode:"INFOBREV_OPPHOLD",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev opphold"},{kode:"RE-FEFAKTA",kodeverk:"BEHANDLING_AARSAK",navn:"Endrede opplysninger"},{kode:"RE-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger inntekt"},{kode:"RE-SATS-REGULERING",kodeverk:"BEHANDLING_AARSAK",navn:"Regulering grunnbeløp"},{kode:"RE-END-INNTEKTSMELD",kodeverk:"BEHANDLING_AARSAK",navn:"Inntektsmelding"},{kode:"RE-PRSSL",kodeverk:"BEHANDLING_AARSAK",navn:"Prosessuell feil"},{kode:"RE-KLAG-M-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke endret inntekt"},{kode:"RE-KLAG-U-INNTK",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke uendret inntekt"},{kode:"RE-HENDELSE-FØDSEL",kodeverk:"BEHANDLING_AARSAK",navn:"Fødselsmelding"},{kode:"RE-VEDTAK-PSB",kodeverk:"BEHANDLING_AARSAK",navn:"Pleiepenger"},{kode:"RE-TILST-YT-INNVIL",kodeverk:"BEHANDLING_AARSAK",navn:"Annen ytelse innvilget"},{kode:"RE-YTELSE",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger annen ytelse"},{kode:"RE-FRDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger uttak"},{kode:"RE-SRTB",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger relasjon/barn"},{kode:"RE-FRIST",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger søknadsfrist"},{kode:"RE-MF",kodeverk:"BEHANDLING_AARSAK",navn:"Mangler fødselsregistrering"},{kode:"RE-UTSATT-START",kodeverk:"BEHANDLING_AARSAK",navn:"Senere startdato"},{kode:"RE-OPTJ",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger opptjening"},{kode:"BERØRT-BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Berørt behandling"},{kode:"RE-ANNET",kodeverk:"BEHANDLING_AARSAK",navn:"Annet"},{kode:"RE-REGISTEROPPL",kodeverk:"BEHANDLING_AARSAK",navn:"Nye registeropplysninger"},{kode:"ETTER_KLAGE",kodeverk:"BEHANDLING_AARSAK",navn:"Klage/Anke"},{kode:"RE-HENDELSE-DØDFØD",kodeverk:"BEHANDLING_AARSAK",navn:"Dødfødsel"},{kode:"RE-FØDSEL",kodeverk:"BEHANDLING_AARSAK",navn:"Fødsel"},{kode:"RE-END-FRA-BRUKER",kodeverk:"BEHANDLING_AARSAK",navn:"Søknad"},{kode:"RE-RGLF",kodeverk:"BEHANDLING_AARSAK",navn:"Regelverksforståelse"},{kode:"RE-BER-GRUN",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger beregning"},{kode:"KØET-BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Køet behandling"},{kode:"INFOBREV_PÅMINNELSE",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev påminnelse"},{kode:"RE-LOV",kodeverk:"BEHANDLING_AARSAK",navn:"Lovanvendelse"},{kode:"RE-HENDELSE-UTFLYTTING",kodeverk:"BEHANDLING_AARSAK",navn:"Utflytting"},{kode:"RE-HENDELSE-DØD-F",kodeverk:"BEHANDLING_AARSAK",navn:"Forelder død"},{kode:"RE-HENDELSE-DØD-B",kodeverk:"BEHANDLING_AARSAK",navn:"Barn død"},{kode:"RE-DØD",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger død"},{kode:"RE-TILST-YT-OPPH",kodeverk:"BEHANDLING_AARSAK",navn:"Annen ytelse opphørt"},{kode:"RE-MFIP",kodeverk:"BEHANDLING_AARSAK",navn:"Mangler fødselsreg. u26-29"},{kode:"OPPHØR-NYTT-BARN",kodeverk:"BEHANDLING_AARSAK",navn:"Nytt barn/stønadsperiode"},{kode:"RE-MDL",kodeverk:"BEHANDLING_AARSAK",navn:"Opplysninger medlemskap"},{kode:"RE-AVAB",kodeverk:"BEHANDLING_AARSAK",navn:"Avvik antall barn"},{kode:"REBEREGN-FERIEPENGER",kodeverk:"BEHANDLING_AARSAK",navn:"Omfordel feriepenger"},{kode:"INFOBREV_BEHANDLING",kodeverk:"BEHANDLING_AARSAK",navn:"Informasjonsbrev uttak"}],GraderingAvslagÅrsak:[{kode:"4501",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16: Ikke gradering pga. for sen søknad",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4504",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 andre ledd: Avslag gradering - gradering før uke 7",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4502",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 femte ledd, jf §21-3: Avslag graderingsavtale mangler - ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16,21-3"}}}'},{kode:"4503",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"§14-16 fjerde ledd: Avslag gradering – ikke rett til gradert uttak pga. redusert oppfylt aktivitetskrav på mor",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}'},{kode:"4523",kodeverk:"GRADERING_AVSLAG_AARSAK",navn:"Avslag gradering - arbeid 100% eller mer",lovHjemmel:null}],AktivitetStatus:RO,BeregningsgrunnlagAndeltype:_O,RevurderingVarslingÅrsak:[{kode:"JOBBUTLAND",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Arbeid i utlandet"},{kode:"JOBBFULLTID",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Arbeid i stønadsperioden"},{kode:"AKTIVITET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Mors aktivitetskrav er ikke oppfylt"},{kode:"JOBB6MND",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Opptjeningsvilkår ikke oppfylt"},{kode:"BARNIKKEREG",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Barn er ikke registrert i folkeregisteret"},{kode:"UTVANDRET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Bruker er registrert utvandret"},{kode:"IKKEOPPTJENT",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Beregningsgrunnlaget er under 1/2 G"},{kode:"ANNET",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Annet"},{kode:"IKKEOPPHOLD",kodeverk:"REVURDERING_VARSLING_AARSAK",navn:"Ikke lovlig opphold"}],UttakArbeidType:bO,KonsekvensForYtelsen:NO,Inntektskategori:SO,SivilstandType:IO,SkjermlenkeType:OO,FaktaOmBeregningTilfelle:LO,KlageVurdering:KO,HistorikkBegrunnelseType:DO,OppholdÅrsak:[{kode:"UTTAK_FEDREKVOTE_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Fedrekvote"},{kode:"UTTAK_FELLESP_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Fellesperiode"},{kode:"UTTAK_MØDREKVOTE_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Mødrekvote"},{kode:"UTTAK_FORELDREPENGER_ANNEN_FORELDER",kodeverk:"OPPHOLD_AARSAK_TYPE",navn:"Annen forelder har uttak av Foreldrepenger"}],UttakPeriodeType:PO,KlageAvvistÅrsak:[{kode:"IKKE_SIGNERT",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klagen er ikke signert",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["31", "33"]},"KA": {"lovreferanser": ["31", "34"]}}}'},{kode:"KLAGET_FOR_SENT",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Bruker har klaget for sent",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["31", "33"]},"KA": {"lovreferanser": ["31", "34"]}}}'},{kode:"KLAGER_IKKE_PART",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klager er ikke part",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["28", "33"]},"KA": {"lovreferanser": ["28", "34"]}}}'},{kode:"IKKE_PAKLAGD_VEDTAK",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Ikke påklagd et vedtak",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["28", "33"]},"KA": {"lovreferanser": ["28", "34"]}}}'},{kode:"IKKE_KONKRET",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klagen er ikke konkret",lovHjemmel:'{"klageAvvistAarsak":{"NFP": {"lovreferanser": ["32", "33"]},"KA": {"lovreferanser": ["32", "34"]}}}'},{kode:"KLAGE_UGYLDIG",kodeverk:"KLAGE_AVVIST_AARSAK",navn:"Klage er ugyldig",lovHjemmel:null}],BehandlingResultatType:FO,VergeType:MO,TilbakekrevingVidereBehandling:jO,OverføringÅrsak:[{kode:"IKKE_RETT_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren har ikke rett på foreldrepenger"},{kode:"SYKDOM_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren er pga sykdom avhengig av hjelp for å ta seg av barnet/barna"},{kode:"INSTITUSJONSOPPHOLD_ANNEN_FORELDER",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Den andre foreldren er innlagt i helseinstitusjon"},{kode:"ALENEOMSORG",kodeverk:"OVERFOERING_AARSAK_TYPE",navn:"Aleneomsorg for barnet/barna"}],FamilieHendelseType:GO,KlageHjemmel:BO,VilkårType:[{kode:"FP_VK_2_L",kodeverk:"VILKAR_TYPE",navn:"Løpende medlemskapsvilkår"},{kode:"FP_VK_8",kodeverk:"VILKAR_TYPE",navn:"Foreldreansvarsvilkåret 2.ledd"},{kode:"FP_VK_5",kodeverk:"VILKAR_TYPE",navn:"Omsorgsvilkåret"},{kode:"FP_VK_16",kodeverk:"VILKAR_TYPE",navn:"Adopsjonsvilkåret Foreldrepenger"},{kode:"FP_VK_1",kodeverk:"VILKAR_TYPE",navn:"Fødselsvilkår Mor"},{kode:"FP_VK_3",kodeverk:"VILKAR_TYPE",navn:"Søknadsfristvilkåret"},{kode:"FP_VK_33",kodeverk:"VILKAR_TYPE",navn:"Foreldreansvarsvilkåret 4.ledd"},{kode:"FP_VK_11",kodeverk:"VILKAR_TYPE",navn:"Fødselsvilkår for far/medmor"},{kode:"FP_VK_4",kodeverk:"VILKAR_TYPE",navn:"Adopsjonsvilkåret"},{kode:"FP_VK_23",kodeverk:"VILKAR_TYPE",navn:"Opptjeningsvilkåret"},{kode:"FP_VK_21",kodeverk:"VILKAR_TYPE",navn:"Opptjeningsperiode"},{kode:"FP_VK_2",kodeverk:"VILKAR_TYPE",navn:"Medlemskapsvilkåret"},{kode:"SVP_VK_1",kodeverk:"VILKAR_TYPE",navn:"Svangerskapspengervilkåret"},{kode:"FP_VK_34",kodeverk:"VILKAR_TYPE",navn:"Søkers opplysningsplikt"},{kode:"FP_VK_41",kodeverk:"VILKAR_TYPE",navn:"Beregning"}],FarSøkerType:[{kode:"ANDRE_FORELD_DØD_F",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg ifm. død ved fødsel"},{kode:"ANDRE_FORELDER_DØD",kodeverk:"FAR_SOEKER_TYPE",navn:"Den andre forelderen er død"},{kode:"OVERTATT_OMSORG",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg < 56 uker"},{kode:"ADOPTERER_ALENE",kodeverk:"FAR_SOEKER_TYPE",navn:"Adopterer barnet eller barna alene"},{kode:"OVERTATT_OMSORG_F",kodeverk:"FAR_SOEKER_TYPE",navn:"Overtatt omsorg fødsel"}],FaresignalVurdering:wO,ArbeidType:VO,KlageMedholdÅrsak:[{kode:"ULIK_VURDERING",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Ulik skjønnsvurdering"},{kode:"PROSESSUELL_FEIL",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Saksbehandlingsfeil"},{kode:"NYE_OPPLYSNINGER",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Nytt faktum"},{kode:"ULIK_REGELVERKSTOLKNING",kodeverk:"KLAGE_MEDHOLD_AARSAK",navn:"Feil lovanvendelse"}],Region:HO,OppgaveÅrsak:[{kode:"BEH_SAK_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Behandle sak i VL"},{kode:"BEH_SAK_FOR",kodeverk:"OPPGAVE_AARSAK",navn:"Behandle sak i Infotrygd"},{kode:"INNHENT_DOK",kodeverk:"OPPGAVE_AARSAK",navn:"Innhent dokumentasjon"},{kode:"VUR_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Vurder dokument i VL"},{kode:"REG_SOK_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Registrere søknad i VL"},{kode:"SETTVENT_STO",kodeverk:"OPPGAVE_AARSAK",navn:"Sett Arena utbetaling på vent"},{kode:"RV_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Revurdere i VL"},{kode:"VUR_KONS_YTE_FOR",kodeverk:"OPPGAVE_AARSAK",navn:"Vurder konsekvens for ytelse foreldrepenger"},{kode:"GOD_VED_VL",kodeverk:"OPPGAVE_AARSAK",navn:"Godkjenne vedtak i VL"}],OmsorgsovertakelseVilkårType:[{kode:"FP_VK_5",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Omsorgsvilkår §14-17 tredje ledd"},{kode:"FP_VK_8",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Foreldreansvarsvilkåret §14-17 andre ledd"},{kode:"FP_VK_33",kodeverk:"OMSORGSOVERTAKELSE_VILKAR",navn:"Foreldreansvarsvilkåret §14-17 fjerde ledd"}],HistorikkOpplysningType:UO,FordelingPeriodeKilde:qO,KlageVurderingOmgjør:[{kode:"DELVIS_MEDHOLD_I_KLAGE",kodeverk:"KLAGE_VURDERING_OMGJOER",navn:"Delvis medhold i klage"},{kode:"UGUNST_MEDHOLD_I_KLAGE",kodeverk:"KLAGE_VURDERING_OMGJOER",navn:"Ugunst medhold i klage"},{kode:"GUNST_MEDHOLD_I_KLAGE",kodeverk:"KLAGE_VURDERING_OMGJOER",navn:"Gunst medhold i klage"}],VurderArbeidsforholdHistorikkinnslag:xO,Arbeidskategori:YO,VurderÅrsak:[{kode:"FEIL_LOV",kodeverk:"VURDER_AARSAK",navn:"Regel-/lovanvendelse"},{kode:"FEIL_REGEL",kodeverk:"VURDER_AARSAK",navn:"Feil regelforståelse"},{kode:"ANNET",kodeverk:"VURDER_AARSAK",navn:"Annet"},{kode:"FEIL_FAKTA",kodeverk:"VURDER_AARSAK",navn:"Fakta"},{kode:"SKJØNN",kodeverk:"VURDER_AARSAK",navn:"Skjønn"},{kode:"UTREDNING",kodeverk:"VURDER_AARSAK",navn:"Utredning"}],Landkoder:CO,BehandlingType:$O,KontrollerAktivitetskravAvklaring:JO,InnsynResultatType:WO,MedlemskapType:zO,HistorikkEndretFeltType:ZO,PersonstatusType:XO,Fagsystem:QO,AnkeVurdering:e1,UtsettelseÅrsak:[{kode:"ARBEID",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Arbeid"},{kode:"LOVBESTEMT_FERIE",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Lovbestemt ferie"},{kode:"INSTITUSJONSOPPHOLD_SØKER",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Søker er innlagt i helseinstitusjon"},{kode:"NAV_TILTAK",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Tiltak i regi av Nav"},{kode:"HV_OVELSE",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Heimevernet"},{kode:"SYKDOM",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Avhengig av hjelp grunnet sykdom"},{kode:"INSTITUSJONSOPPHOLD_BARNET",kodeverk:"UTSETTELSE_AARSAK_TYPE",navn:"Barn er innlagt i helseinstitusjon"}],BehandlingStatus:n1,VirksomhetType:r1,MedlemskapDekningType:t1,ArbeidsforholdHandlingType:a1,HistorikkAktør:[{kode:"SBH",kodeverk:"HISTORIKK_AKTOER",navn:"Saksbehandler"},{kode:"BESL",kodeverk:"HISTORIKK_AKTOER",navn:"Beslutter"},{kode:"ARBEIDSGIVER",kodeverk:"HISTORIKK_AKTOER",navn:"Arbeidsgiver"},{kode:"VL",kodeverk:"HISTORIKK_AKTOER",navn:"Vedtaksløsningen"},{kode:"SOKER",kodeverk:"HISTORIKK_AKTOER",navn:"Søker"}],Avslagsårsak:{FP_VK_3:[{kode:"1007",kodeverk:"AVSLAGSARSAK",navn:"Søkt for sent",lovHjemmel:null}],FP_VK_4:[{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'},{kode:"1005",kodeverk:"AVSLAGSARSAK",navn:"Ektefelles/samboers barn",lovHjemmel:null},{kode:"1011",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK11", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK16", "lovreferanse": "§ 14-5 2. ledd"}]}]}'},{kode:"1006",kodeverk:"AVSLAGSARSAK",navn:"Mann adopterer ikke alene",lovHjemmel:null},{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1032",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1004",kodeverk:"AVSLAGSARSAK",navn:"Barn over 15 år",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_16_1", "lovreferanse": "14-5"}]}]}'}],FP_VK_1:[{kode:"1002",kodeverk:"AVSLAGSARSAK",navn:"Søker er medmor",lovHjemmel:null},{kode:"1031",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}'},{kode:"1003",kodeverk:"AVSLAGSARSAK",navn:"Søker er far",lovHjemmel:null},{kode:"1032",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1001",kodeverk:"AVSLAGSARSAK",navn:"Søkt for tidlig",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_1", "lovreferanse": "14-5"}]}]}'},{kode:"1026",kodeverk:"AVSLAGSARSAK",navn:"Fødselsdato ikke oppgitt eller registrert",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_1", "lovreferanse": "14-5"}]}]}'}],FP_VK_2:[{kode:"1025",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke bosatt",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1020",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke medlem",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1024",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke oppholdsrett (EØS)",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1023",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke lovlig opphold",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1021",kodeverk:"AVSLAGSARSAK",navn:"Søker er utvandret",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'}],"-":[],FP_VK_41:[{kode:"1041",kodeverk:"AVSLAGSARSAK",navn:"For lavt brutto beregningsgrunnlag",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_41", "lovreferanse": "14-7"}]}]}'}],FP_VK_21:[{kode:"1035",kodeverk:"AVSLAGSARSAK",navn:"Ikke tilstrekkelig opptjening",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_23", "lovreferanse": "14-6"}]}]}'}],FP_VK_11:[{kode:"1027",kodeverk:"AVSLAGSARSAK",navn:"Ingen barn dokumentert på far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_11", "lovreferanse": "14-5"}]}]}'},{kode:"1028",kodeverk:"AVSLAGSARSAK",navn:"Mor fyller ikke vilkåret for sykdom",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_11", "lovreferanse": "14-5"}]}]}'},{kode:"1029",kodeverk:"AVSLAGSARSAK",navn:"Bruker er ikke registrert som far/medmor til barnet",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_11", "lovreferanse": "14-5"}]}]}'}],FP_VK_33:[{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1017",kodeverk:"AVSLAGSARSAK",navn:"Omsorgsovertakelse etter 56 uker",lovHjemmel:null},{kode:"1016",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke barnets far",lovHjemmel:null},{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'},{kode:"1018",kodeverk:"AVSLAGSARSAK",navn:"Ikke foreldreansvar alene etter barnelova",lovHjemmel:null}],FP_VK_34:[{kode:"1019",kodeverk:"AVSLAGSARSAK",navn:"Manglende dokumentasjon",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_34", "lovreferanse": "21-3"}]}]}'}],FP_VK_23:[{kode:"1035",kodeverk:"AVSLAGSARSAK",navn:"Ikke tilstrekkelig opptjening",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_23", "lovreferanse": "14-6"}]}]}'}],FP_VK_8:[{kode:"1014",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke foreldreansvar",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1013",kodeverk:"AVSLAGSARSAK",navn:"Barn ikke under 15 år",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1015",kodeverk:"AVSLAGSARSAK",navn:"Søker har hatt vanlig samvær med barnet",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'}],SVP_VK_1:[{kode:"1065",kodeverk:"AVSLAGSARSAK",navn:"§14-4 andre ledd: Næringsdrivende/frilanser har ikke dokumentert risikofaktorer",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 2. ledd"}]}]}'},{kode:"1062",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Søker har mottatt sykepenger",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'},{kode:"1066",kodeverk:"AVSLAGSARSAK",navn:"§14-4 andre ledd: Næringsdrivende/frilanser har mulighet til å tilrettelegge sitt virke",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 2. ledd"}]}]}'},{kode:"1064",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Arbeidstaker kan omplasseres til annet høvelig arbeid",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'},{kode:"1063",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Arbeidstaker har ikke dokumentert risikofaktorer",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'},{kode:"1061",kodeverk:"AVSLAGSARSAK",navn:"§14-4 tredje ledd: Søker er ikke i arbeid/har ikke tap av pensjonsgivende inntekt",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 3. ledd"}]}]}'},{kode:"1060",kodeverk:"AVSLAGSARSAK",navn:"§14-4 første ledd: Søker er ikke gravid kvinne",lovHjemmel:'{"fagsakYtelseType": [{"SVP": [{"kategori": "SVP_VK_1", "lovreferanse": "14-4 1. ledd"}]}]}'}],FP_VK_16:[{kode:"1004",kodeverk:"AVSLAGSARSAK",navn:"Barn over 15 år",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_16_1", "lovreferanse": "14-5"}]}]}'},{kode:"1051",kodeverk:"AVSLAGSARSAK",navn:"Stebarnsadopsjon ikke flere dager igjen",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_16", "lovreferanse": "14-5"}]}]}'}],FP_VK_5:[{kode:"1009",kodeverk:"AVSLAGSARSAK",navn:"Mor ikke død",lovHjemmel:null},{kode:"1034",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til far/medmor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1032",kodeverk:"AVSLAGSARSAK",navn:"Foreldrepenger er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK_8", "lovreferanse": "14-5"}]}]}'},{kode:"1008",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke barnets far",lovHjemmel:null},{kode:"1033",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til far/medmor ",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK4", "lovreferanse": "14-17"}, {"kategori": "FP_VK5", "lovreferanse": "14-17"}, {"kategori": "FP_VK33", "lovreferanse": "14-17"}]}, {"FP": {"lovreferanse": "14-5"}}]}'},{kode:"1011",kodeverk:"AVSLAGSARSAK",navn:"Engangsstønad er allerede utbetalt til mor",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK4", "lovreferanse": "§ 14-17 1. ledd"}, {"kategori": "FP_VK5", "lovreferanse": "§ 14-17 3. ledd"}]}, {"FP": [{"kategori": "FP_VK1", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK11", "lovreferanse": "§ 14-5 1. ledd"}, {"kategori": "FP_VK16", "lovreferanse": "§ 14-5 2. ledd"}]}]}'},{kode:"1012",kodeverk:"AVSLAGSARSAK",navn:"Far har ikke omsorg for barnet",lovHjemmel:null},{kode:"1010",kodeverk:"AVSLAGSARSAK",navn:"Mor ikke død ved fødsel/omsorg",lovHjemmel:null}],FP_VK_2_L:[{kode:"1025",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke bosatt",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1020",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke medlem",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1024",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke oppholdsrett (EØS)",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1023",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke lovlig opphold",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1021",kodeverk:"AVSLAGSARSAK",navn:"Søker er utvandret",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'}],FP_VK_2_F:[{kode:"1025",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke bosatt",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1020",kodeverk:"AVSLAGSARSAK",navn:"Søker er ikke medlem",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1024",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke oppholdsrett (EØS)",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1023",kodeverk:"AVSLAGSARSAK",navn:"Søker har ikke lovlig opphold",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1021",kodeverk:"AVSLAGSARSAK",navn:"Søker er utvandret",lovHjemmel:'{"fagsakYtelseType": [{"FP": [{"kategori": "FP_VK_2", "lovreferanse": "14-2"}]}]}'},{kode:"1052",kodeverk:"AVSLAGSARSAK",navn:"Innflyttet for mindre enn ett år siden",lovHjemmel:'{"fagsakYtelseType": [{"ES": [{"kategori": "FP_VK_2_F", "lovreferanse": "14-17 5. ledd"}]}]}'}]},OpptjeningAktivitetType:i1,PermisjonsbeskrivelseType:s1,Språkkode:[{kode:"NB",kodeverk:"SPRAAK_KODE",navn:"Norsk"},{kode:"NN",kodeverk:"SPRAAK_KODE",navn:"Nynorsk"},{kode:"EN",kodeverk:"SPRAAK_KODE",navn:"Engelsk"}],AnkeOmgjørÅrsak:[{kode:"PROSESSUELL_FEIL",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Saksbehandlingsfeil"},{kode:"NYE_OPPLYSNINGER",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Nye opplysninger"},{kode:"ULIK_REGELVERKSTOLKNING",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Ulik regelverkstolkning"},{kode:"ULIK_VURDERING",kodeverk:"ANKE_OMGJOER_AARSAK",navn:"Ulik skjønnsvurdering"}],OppholdstillatelseType:o1,MedlemskapManuellVurderingType:l1,ManuellBehandlingÅrsak:[{kode:"5006",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker er i arbeid i perioden. Vurder konsekvens for arbeid i perioden."},{kode:"5002",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for uttak av denne stønadskontoen. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5025",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker er ikke registrert med en heltidsstilling i Aa-registeret. Avklar om søker jobber 100 % og dermed har rett til utsettelse"},{kode:"5027",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder fars/medmors rett til uttak på grunn av mors uføretrygd"},{kode:"5024",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Opphold større enn tilgjengelige dager"},{kode:"5031",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder om det skal være utsettelse i perioden"},{kode:"5003",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for overføring av kvote. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5004",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Kontroller mors krav til aktivitet."},{kode:"5029",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Innvilget pleiepenger uten innleggelse, vurder riktig ytelse"},{kode:"5011",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Ikke gyldig grunn for utsettelse av perioden, avslå utsettelsen, og sett riktig stønadskonto som skal benyttes."},{kode:"5016",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder søknad om overføring av kvote."},{kode:"5009",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Søker har ikke omsorg for barnet. Vurder bruk av annen stønadskonto eller avslå perioden."},{kode:"5005",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Manglende søkt periode. Fastsett hvilken stønadskonto perioden skal trekkes fra."},{kode:"5014",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder samtidig uttak av foreldrepenger."},{kode:"5007",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Støtte for automatisk behandling av adopsjon er ikke implementert i saksbehandlingsløsningen."},{kode:"5012",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Perioden er uavklart. Vurder trekkdager og sett utbetalingsgrad."},{kode:"5018",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Opphør av foreldrepenger fordi inngangsvilkår ikke oppfylt, avslå stønadsperiode"},{kode:"5026",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Vurder uttak med hensyn på dødsfall"},{kode:"5028",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Innvilget pleiepenger med innleggelse, vurder riktig ytelse"},{kode:"5019",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Stebarnsadopsjon - sjekk uttak med tanke på aktivitetskravet"},{kode:"5010",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"For sent fremsatt søknad. Vurder om uttak i perioden er gyldig."},{kode:"5030",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Far/medmor søker før fødsel/omsorg"},{kode:"5001",kodeverk:"MANUELL_BEHANDLING_AARSAK",navn:"Stønadskonto tom for stønadsdager. Vurder bruk av annen stønadskonto eller avslå perioden."}],MorsAktivitet:u1,NaturalYtelseType:d1,PeriodeResultatÅrsak:[{kode:"2010",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Gyldig utsettelse pga. ferie",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4072",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjuende ledd: Barnet er dødt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-7",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4037",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b: Ikke heltidsarbeid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4085",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Det er ikke samtykke mellom partene",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2035",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd, jf. §14-16: Gradering foreldrepenger, kun far har rett - dager uten aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-16"}}}',sortering:"14-14-3",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4052",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav c: Aktivitetskravet offentlig godkjent utdanning i kombinasjon med arbeid ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4032",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Ferie - selvstendig næringsdrivende/frilanser",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4013",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 første ledd: Mor søker uttak før 12 uker før termin/fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4084",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Annen part har overlappende uttak, det er ikke søkt/innvilget samtidig uttak",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4097",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5: Adopsjonsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4104",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 tredje ledd: Stønadsperiode for nytt barn",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4086",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd og §14-11: Annen part har overlappende uttaksperioder som er innvilget utsettelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10,14-11"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4002",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Ikke stønadsdager igjen på stønadskonto",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2012",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Gyldig utsettelse pga. innleggelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4023",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 femte ledd: Arbeider i uttaksperioden mer enn 0%",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-5",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4031",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Ferie/arbeid innenfor de første 6 ukene",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4112",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Barnets innleggelse første 6 uker ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"2017",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c, jf. §14-14, jf. §14-13: Utsettelse pga. sykdom, skade, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2036",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd: Innvilget foreldrepenger, kun far har rett - dager uten aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14"}}}',sortering:"14-14-3",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4071",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10: Bruker er død",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4098",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5: Foreldreansvarsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4067",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav b, jf §21-3: Aktivitetskrav – utdanning ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4066",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav a, jf §21-3: Aktivitetskrav - arbeid ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2032",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-15, jf. §14-16: Gradering foreldrepenger ved aleneomsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-15,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2026",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse første 6 uker pga. barn innlagt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"2031",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12, jf. §14-16: Gradering av kvote/overført kvote",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4081",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Avslag utsettelse pga ferie tilbake i tid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4053",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav d: Aktivitetskravet mors sykdom/skade ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2007",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10: Innvilget foreldrepenger, kun mor har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"2014",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Gyldig utsettelse pga. sykdom",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4007",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 tredje ledd: Den andre part syk/skadet ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2023",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-15 første ledd: Overføring oppfylt, søker har aleneomsorg for barnet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-15"}}}',sortering:"14-15-1",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4056",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav g: Aktivitetskravet mors deltakelse på kvalifiseringsprogram ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-g",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2016",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b, jf. §14-14, jf. §14-13: Utsettelse pga. 100% arbeid, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-b",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2004",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf. §14-13 : Innvilget foreldrepenger, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13"}}}',sortering:"14-14",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2018",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c, jf. §14-14, jf. §14-13: Utsettelse pga. egen innleggelse på helseinstiusjon, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-c",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2024",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4068",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav c, jf §21-3: Aktivitetskrav – arbeid i komb utdanning ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4087",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-2: Opphør medlemskap",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-2"}}}',sortering:"14-02",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4110",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Søkers sykdom/skade første 6 uker ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4115",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §21-3: Søkers sykdom/skade første 6 uker ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4096",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5: Fødselsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4035",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b, jf. §14-14: Bare far har rett, mor fyller ikke aktivitetskravet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4073",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 første ledd: Ikke rett til kvote fordi mor ikke har rett til foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER","FEDREKVOTE"],synligForRolle:["IKKE_MOR"]},{kode:"4069",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav d og femte ledd, jf §21-3: Aktivitetskrav – sykdom/skade ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4062",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b, jf §21-3: Utsettelse arbeid ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4089",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav g, jf §21-3: Aktivitetskrav – KVP ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-g",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4034",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §14-9: Avslag utsettelse - ingen stønadsdager igjen",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-9"}}}',sortering:"14-11-0",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2038",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Samtidig uttak",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4075",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 første ledd: Ikke rett til fellesperiode fordi mor ikke har rett til foreldrepenger",lovHjemmel:"",sortering:"14-09-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4005",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjuende ledd: Ikke sammenhengende perioder",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-7",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2034",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10, jf. §14-16: Gradering foreldrepenger, kun mor har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"2028",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf. 14-13: Bare far rett, aktivitetskravet oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13"}}}',sortering:"14-14",utfallType:"INNVILGET",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4060",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 sjette ledd: Samtidig uttak - ikke gyldig kombinasjon",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2006",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10: Innvilget foreldrepenger før fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4105",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjette ledd: Far/medmor søker uttak før fødsel/omsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4058",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-5 tredje ledd: Unntak for Aktivitetskravet, stebarnsadopsjon - ikke nok dager",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-5"}}}',sortering:"14-05-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2002",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Innvilget fellesperiode/foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4095",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 første ledd: Mor tar ikke alle 3 ukene før termin",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER_FØR_FØDSEL"],synligForRolle:["MOR"]},{kode:"4116",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §21-3: Søkers innleggelse første 6 uker ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4092",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Avslag overføring - har ikke aleneomsorg for barnet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4038",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Søkers sykdom/skade ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2022",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Overføring oppfylt, annen part er innlagt i helseinstitusjon",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4008",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 tredje ledd: Den andre part innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4064",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c og tredje ledd, jf §21-3: Utsettelse søkers innleggelse ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4111",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Søkers innleggelse første 6 uker ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4054",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav e: Aktivitetskravet mors innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-e",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2020",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 første ledd: Overføring oppfylt, annen part har ikke rett til foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-09-1",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4077",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 a: Innvilget prematuruker, med fratrekk pleiepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10 a"}}}',sortering:"14-10-0-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2019",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d, jf. §14-14, jf. §14-13: Utsettelse pga. barnets innleggelse på helseinstitusjon, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-d",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2025",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse første 6 uker pga. innleggelse",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4030",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9: Avslag utsettelse før termin/fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4050",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav a: Aktivitetskravet arbeid ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2003",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Innvilget uttak av kvote",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4082",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b: Avslag utsettelse pga arbeid tilbake i tid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2013",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d: Gyldig utsettelse pga. barn innlagt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-d",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2027",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11: Gyldig utsettelse første 6 uker pga. sykdom",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11",utfallType:"INNVILGET",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4088",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav f, jf §21-3: Aktivitetskrav – introprogram ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-f",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4063",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c og tredje ledd, jf §21-3: Utsettelse søkers sykdom/skade ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4099",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-6: Opptjeningsvilkåret er ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-6"}}}',sortering:"14-06",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2039",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjette ledd: Innvilget første 6 uker etter fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-6",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4103",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 sjette ledd: Mangler søknad for første 6 uker etter fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]},{kode:"4039",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav c: Søkers innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-c",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2037",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9, jf. §14-13: Innvilget fellesperiode til far",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9"}}}',sortering:"14-09",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE"],synligForRolle:["IKKE_MOR"]},{kode:"4003",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 fjerde ledd: Mor har ikke omsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-4",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR"]},{kode:"4107",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd: Ikke nok dager uten aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14"}}}',sortering:"14-14-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4022",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 tredje ledd: Barnet er over 3 år",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4033",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Ikke lovbestemt ferie",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4059",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 sjette ledd, jf. §14-9 fjerde ledd: Unntak for Aktivitetskravet, flerbarnsfødsel - ikke nok dager",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13, 14-9"}}}',sortering:"14-13-6",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4025",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-16 første ledd: Avslag gradering - arbeid 100% eller mer",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}',sortering:"14-16-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2021",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12: Overføring oppfylt, annen part er helt avhengig av hjelp til å ta seg av barnet",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12"}}}',sortering:"14-12",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4070",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav e og femte ledd, jf §21-3: Aktivitetskrav – innleggelse ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13,21-3"}}}',sortering:"14-13-1-e",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4074",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-12 tredje ledd, jf §21-3: Avslag overføring kvote pga. sykdom/skade/innleggelse ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-12,21-3"}}}',sortering:"14-12-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2011",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav b: Gyldig utsettelse pga. 100% arbeid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-b",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"2030",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9, jf. §14-16: Gradering av fellesperiode/foreldrepenger",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-9,14-16"}}}',sortering:"14-16",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4065",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d, jf §21-3: Utsettelse barnets innleggelse - ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4057",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14 tredje ledd: Unntak for aktivitetskravet, mors mottak av uføretrygd ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14"}}}',sortering:"14-14-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2033",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf. §14-13, jf. §14-16: Gradering foreldrepenger, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13,14-16"}}}',sortering:"14-14",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4076",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-9 femte ledd: Avslag overføring - annen forelder har rett til foreldrepenger",lovHjemmel:"",sortering:"14-09-5",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["MØDREKVOTE","FEDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4040",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav d: Barnets innleggelse ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-d",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4061",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a, jf §21-3: Utsettelse ferie ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4041",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a: Avslag utsettelse ferie på bevegelig helligdag",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11"}}}',sortering:"14-11-1-a",utfallType:"AVSLÅTT",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4020",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§22-13 tredje ledd: Brudd på søknadsfrist",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "22-13"}}}',sortering:"22-13-3",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4106",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 første ledd: Far/medmor søker mer enn 10 dager ifm fødsel",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-1",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022"],uttakTyper:["UTTAK"],valgbarForKonto:["FEDREKVOTE"],synligForRolle:["IKKE_MOR"]},{kode:"2005",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-15: Innvilget foreldrepenger ved aleneomsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-15"}}}',sortering:"14-15",utfallType:"INNVILGET",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4055",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav f: Aktivitetskravet mors deltakelse på introduksjonsprogram ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-f",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4093",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-16: Avslag gradering - søker er ikke i arbeid",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-16"}}}',sortering:"14-16",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4102",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-14, jf 14-13: Bare far har rett, mangler søknad uttak/aktivitetskrav",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-14,14-13"}}}',sortering:"14-14",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4051",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-13 første ledd bokstav b: Aktivitetskravet offentlig godkjent utdanning ikke oppfylt",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-13"}}}',sortering:"14-13-1-b",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK","UTSETTELSE"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"2015",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11 første ledd bokstav a, jf. §14-14, jf. §14-13: Utsettelse pga. ferie, kun far har rett",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,14-14,14-13"}}}',sortering:"14-11-1-a",utfallType:"INNVILGET",gyldigForLovendringer:["KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["FORELDREPENGER"],synligForRolle:["IKKE_MOR"]},{kode:"4100",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 andre ledd: Uttak før omsorgsovertakelse",lovHjemmel:"",sortering:"14-10-2",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["MOR","IKKE_MOR"]},{kode:"4012",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-10 fjerde ledd: Far/medmor har ikke omsorg",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-10"}}}',sortering:"14-10-4",utfallType:"AVSLÅTT",gyldigForLovendringer:["MINSTERETT_2022","FRITT_UTTAK","KREVER_SAMMENHENGENDE_UTTAK"],uttakTyper:["UTTAK"],valgbarForKonto:["FELLESPERIODE","FORELDREPENGER","FEDREKVOTE","FORELDREPENGER_FØR_FØDSEL","MØDREKVOTE"],synligForRolle:["IKKE_MOR"]},{kode:"4117",kodeverk:"PERIODE_RESULTAT_AARSAK",navn:"§14-11, jf §21-3: Barnets innleggelse første 6 uker ikke dokumentert",lovHjemmel:'{"fagsakYtelseType": {"FP": {"lovreferanse": "14-11,21-3"}}}',sortering:"14-11",utfallType:"AVSLÅTT",gyldigForLovendringer:["FRITT_UTTAK","MINSTERETT_2022"],uttakTyper:["UTSETTELSE"],valgbarForKonto:["MØDREKVOTE","FORELDREPENGER"],synligForRolle:["MOR"]}],ForeldreType:k1,AdresseType:g1},p1={title:"fakta/fakta-inntektsmelding",component:xo},Sv=e=>M.jsx(xo,{...e}),Qs={innsendingstidspunkt:"2024-08-08T00:00:00",kildeSystem:"Altinn",aktiveNaturalytelser:[],refusjonsperioder:[],innsendingsårsak:"NY",arbeidsgiverIdent:"1",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"},Jt=Sv.bind({});Jt.args={alleKodeverk:v1,fagsak:{saksnummer:"123",fagsakYtelseType:"FP"},alleBehandlinger:[{uuid:"UUID1",type:"BT-002",opprettet:"2024-07-13",avsluttet:"2024-08-13"},{uuid:"UUID2",type:"BT-003",opprettet:"2024-07-14",avsluttet:"2024-08-14"},{uuid:"UUID3",type:"BT-004",opprettet:"2024-07-15",avsluttet:"2024-08-15"}],arbeidsgiverOpplysningerPerId:{1:{navn:"Rema 1000"},2:{navn:"Kiwi"},3:{navn:"Meny"}},behandling:{uuid:"UUID2"},inntektsmeldinger:[{...Qs,tilknyttedeBehandlingIder:["UUID1"],inntektPrMnd:10000.5,innsendingstidspunkt:"2024-07-20T00:00:00",startDatoPermisjon:"2024-10-10",refusjonPrMnd:void 0,journalpostId:"1",refusjonsperioder:[{refusjonsbeløp:{verdi:5e3},indexKey:"1",fom:"2024-01-10"},{refusjonsbeløp:{verdi:3e3},indexKey:"2",fom:"2024-01-09"}]},{...Qs,tilknyttedeBehandlingIder:["UUID1","UUID2"],inntektPrMnd:2e4,innsendingstidspunkt:"2024-08-01T00:00:00",kildeSystem:"FS22",refusjonPrMnd:void 0,arbeidsgiverIdent:"2",journalpostId:"2"},{...Qs,tilknyttedeBehandlingIder:[],inntektPrMnd:3e4,innsendingstidspunkt:"2024-09-10T00:00:00",innsendingsårsak:"ENDRING",kildeSystem:"NAV_NO",startDatoPermisjon:"2024-11-11",arbeidsgiverIdent:"3",journalpostId:"3",aktiveNaturalytelser:[{periode:{fomDato:"2024-01-09",tomDato:"2024-10-09"},type:"ELEKTRISK_KOMMUNIKASJON",beloepPerMnd:{verdi:999},indexKey:"1"},{periode:{fomDato:"2024-01-11",tomDato:"2024-10-11"},type:"LOSJI",beloepPerMnd:{verdi:10},indexKey:"2"}]}]};const Wt=Sv.bind({});Wt.args={inntektsmeldinger:[]};var gk,vk,Ek;Jt.parameters={...Jt.parameters,docs:{...(gk=Jt.parameters)==null?void 0:gk.docs,source:{originalSource:"props => <InntektsmeldingFaktaIndex {...props} />",...(Ek=(vk=Jt.parameters)==null?void 0:vk.docs)==null?void 0:Ek.source}}};var fk,mk,Tk;Wt.parameters={...Wt.parameters,docs:{...(fk=Wt.parameters)==null?void 0:fk.docs,source:{originalSource:"props => <InntektsmeldingFaktaIndex {...props} />",...(Tk=(mk=Wt.parameters)==null?void 0:mk.docs)==null?void 0:Tk.source}}};const h1=["InntektsmeldingDefault","IngenInntektsmeldinger"];export{Wt as IngenInntektsmeldinger,Jt as InntektsmeldingDefault,h1 as __namedExportsOrder,p1 as default};
