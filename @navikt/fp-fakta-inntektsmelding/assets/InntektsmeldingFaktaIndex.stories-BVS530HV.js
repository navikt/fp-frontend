import{g as xd,r as A,u as Er,_ as bm,s as Sm,c as Ud,a as Le,R as C,b as H0,d as gt,T as x0,S as Wt,e as Cd,f as Yd,h as U0,o as $d,A as C0,i as jn,j as V,k as vt,l as Yt,m as Ja,E as Im,n as Jd,P as Lm,w as Y0}from"./iframe-BFjPTM3W.js";import{r as $0}from"./index-CczfDHKB.js";import"./preload-helper-D9Z9MdNV.js";var Wd=$0();const Dm=xd(Wd);function J0(e,l){var t=e.values,a=bm(e,["values"]),i=l.values,s=bm(l,["values"]);return Sm(i,t)&&Sm(a,s)}function zd(e){var l=Er(),t=l.formatMessage,a=l.textComponent,i=a===void 0?A.Fragment:a,s=e.id,m=e.description,d=e.defaultMessage,v=e.values,f=e.children,_=e.tagName,h=_===void 0?i:_,k=e.ignoreTag,y={id:s,description:m,defaultMessage:d},P=t(y,v,{ignoreTag:k});return typeof f=="function"?f(Array.isArray(P)?P:[P]):h?A.createElement(h,null,P):A.createElement(A.Fragment,null,P)}zd.displayName="FormattedMessage";var Ie=A.memo(zd,J0);Ie.displayName="MemoizedFormattedMessage";var mu=(e=>(e.ELEKTRISK_KOMMUNIKASJON="ELEKTRISK_KOMMUNIKASJON",e.LOSJI="LOSJI",e))(mu||{});const W0=(e,l,t)=>`/fpsak/api/dokument/hent-dokument?saksnummer=${e}&journalpostId=${l}&dokumentId=${t}`,z0=(e,l,t,a)=>{const i=W0(e,l,t),s=`${l}-${t}`;a&&X0(i,s,a)},X0=(e,l,t)=>{const a=window.open(e,l);a&&setTimeout(()=>{a.document.title=t},1e3)},Et=e=>Ud({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var Z0=function(e,l){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&l.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)l.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]]);return t};const tl=A.forwardRef((e,l)=>{var{className:t,size:a="medium",as:i="p",spacing:s,truncate:m,weight:d="regular",align:v,visuallyHidden:f,textColor:_}=e,h=Z0(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:k}=Le();return C.createElement(i,Object.assign({},h,{ref:l,className:k(t,"navds-body-long",`navds-body-long--${a}`,Et({spacing:s,truncate:m,weight:d,align:v,visuallyHidden:f,textColor:_}))}))});var Q0=function(e,l){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&l.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)l.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]]);return t};const ml=A.forwardRef((e,l)=>{var{className:t,size:a="medium",as:i="p",spacing:s,truncate:m,weight:d="regular",align:v,visuallyHidden:f,textColor:_}=e,h=Q0(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:k}=Le();return C.createElement(i,Object.assign({},h,{ref:l,className:k(t,"navds-body-short",`navds-body-short--${a}`,Et({spacing:s,truncate:m,weight:d,align:v,visuallyHidden:f,textColor:_}))}))});var eT=function(e,l){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&l.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)l.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]]);return t};const nT=A.forwardRef((e,l)=>{var{className:t,size:a="medium",spacing:i,uppercase:s,as:m="p",truncate:d,weight:v="regular",align:f,visuallyHidden:_,textColor:h}=e,k=eT(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:y}=Le();return C.createElement(m,Object.assign({},k,{ref:l,className:y(t,"navds-detail",Et({spacing:i,truncate:d,weight:v,align:f,visuallyHidden:_,textColor:h,uppercase:s}),{"navds-detail--small":a==="small"})}))});var rT=function(e,l){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&l.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)l.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]]);return t};const tT=A.forwardRef((e,l)=>{var{children:t,className:a,size:i,spacing:s,as:m="p",showIcon:d=!1}=e,v=rT(e,["children","className","size","spacing","as","showIcon"]);const{cn:f}=Le();return C.createElement(m,Object.assign({},v,{ref:l,className:f("navds-error-message","navds-label",a,Et({spacing:s}),{"navds-label--small":i==="small","navds-error-message--show-icon":d})}),d&&C.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},C.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),t)});var aT=function(e,l){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&l.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)l.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]]);return t};const Xd=A.forwardRef((e,l)=>{var{level:t="1",size:a,className:i,as:s,spacing:m,align:d,visuallyHidden:v,textColor:f}=e,_=aT(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:h}=Le(),k=s??`h${t}`;return C.createElement(k,Object.assign({},_,{ref:l,className:h(i,"navds-heading",`navds-heading--${a}`,Et({spacing:m,align:d,visuallyHidden:v,textColor:f}))}))});var lT=function(e,l){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&l.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)l.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]]);return t};A.forwardRef((e,l)=>{var{className:t,spacing:a,as:i="p"}=e,s=lT(e,["className","spacing","as"]);const{cn:m}=Le();return C.createElement(i,Object.assign({},s,{ref:l,className:m(t,"navds-ingress",{"navds-typo--spacing":!!a})}))});var iT=function(e,l){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&l.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)l.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]]);return t};const Gu=A.forwardRef((e,l)=>{var{className:t,size:a="medium",as:i="label",spacing:s,visuallyHidden:m,textColor:d}=e,v=iT(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:f}=Le();return C.createElement(i,Object.assign({},v,{ref:l,className:f(t,"navds-label",Et({spacing:s,visuallyHidden:m,textColor:d}),{"navds-label--small":a==="small"})}))});function zt(e,l){const t=Object.entries(e).filter(([a])=>!l.includes(a));return Object.fromEntries(t)}let Pm=0;function uT(e){const[l,t]=A.useState(e),a=e||l;return A.useEffect(()=>{l==null&&(Pm+=1,t(`aksel-id-${Pm}`))},[l]),a}const Km=C.useId;function dl(e){var l;if(Km!==void 0){const t=Km();return e??t.replace(/(:)/g,"")}return(l=uT(e))!==null&&l!==void 0?l:""}function Fm(e,l=[]){const t=A.useRef(e);return A.useEffect(()=>{t.current=e}),A.useCallback((...a)=>{var i;return(i=t.current)===null||i===void 0?void 0:i.call(t,...a)},l)}function Bu({value:e,defaultValue:l,onChange:t}){const a=Fm(t),[i,s]=A.useState(l),m=e!==void 0,d=m?e:i,v=Fm(f=>{const h=typeof f=="function"?f(d):f;m||s(h),a(h)},[m,a,d]);return[d,v]}let wm=0;function sT(e){const[l,t]=A.useState(e),a=e||l;return A.useEffect(()=>{l==null&&(wm+=1,t(`aksel-icon-${wm}`))},[l]),a}const Om=C.useId;function fr(e){var l;return Om!==void 0?Om().replace(/(:)/g,""):(l=sT(e))!==null&&l!==void 0?l:""}var oT=function(e,l){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&l.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)l.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]]);return t};const mT=A.forwardRef((e,l)=>{var{title:t,titleId:a}=e,i=oT(e,["title","titleId"]);let s=fr();return s=t?a||"title-"+s:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:l,"aria-labelledby":s},i),t?A.createElement("title",{id:s},t):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13.672 3.825a.75.75 0 0 1 .791.085l7 5.5a.75.75 0 0 1 0 1.18l-7 5.5a.75.75 0 0 1-1.213-.59v-2.724a9.1 9.1 0 0 0-2.63.565c-2.284.87-3.759 2.562-4.671 4.077a12.4 12.4 0 0 0-.957 1.965 10 10 0 0 0-.263.792l-.001.007A.75.75 0 0 1 3.25 20c0-1.654.322-3.941 1.224-6.123.903-2.184 2.413-4.32 4.823-5.558 1.133-.581 2.445-.954 3.953-1.046V4.5a.75.75 0 0 1 .422-.675M5.505 15.412c1.038-1.344 2.519-2.688 4.582-3.473 1.136-.432 2.435-.689 3.913-.689a.75.75 0 0 1 .75.75v1.957L19.786 10 14.75 6.043V8a.75.75 0 0 1-.75.75c-1.606 0-2.927.344-4.018.904-1.996 1.025-3.306 2.824-4.121 4.796q-.197.479-.356.962",clipRule:"evenodd"}))});var dT=function(e,l){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&l.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)l.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]]);return t};const gT=A.forwardRef((e,l)=>{var{title:t,titleId:a}=e,i=dT(e,["title","titleId"]);let s=fr();return s=t?a||"title-"+s:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:l,"aria-labelledby":s},i),t?A.createElement("title",{id:s},t):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.47 21.03a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22V9.5a.75.75 0 0 0-1.5 0v9.19l-2.22-2.22a.75.75 0 1 0-1.06 1.06zM4.03 7.53l2.22-2.22v9.19a.75.75 0 0 0 1.5 0V5.31l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06",clipRule:"evenodd"}))});var vT=function(e,l){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&l.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)l.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]]);return t};const Zd=A.forwardRef((e,l)=>{var{title:t,titleId:a}=e,i=vT(e,["title","titleId"]);let s=fr();return s=t?a||"title-"+s:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:l,"aria-labelledby":s},i),t?A.createElement("title",{id:s},t):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var ET=function(e,l){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&l.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)l.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]]);return t};const xi=A.forwardRef((e,l)=>{var{title:t,titleId:a}=e,i=ET(e,["title","titleId"]);let s=fr();return s=t?a||"title-"+s:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:l,"aria-labelledby":s},i),t?A.createElement("title",{id:s},t):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.5 12C1.5 6.201 6.201 1.5 12 1.5S22.5 6.201 22.5 12 17.799 22.5 12 22.5 1.5 17.799 1.5 12",clipRule:"evenodd"}))});var fT=function(e,l){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&l.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)l.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]]);return t};const cT=A.forwardRef((e,l)=>{var{title:t,titleId:a}=e,i=fT(e,["title","titleId"]);let s=fr();return s=t?a||"title-"+s:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:l,"aria-labelledby":s},i),t?A.createElement("title",{id:s},t):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.1 2.05a.75.75 0 1 0-1.2.9l.98 1.306a.25.25 0 0 1-.024.327l-.773.773a1.75 1.75 0 0 0-.163 2.288l.98 1.306a.75.75 0 0 0 1.2-.9l-.98-1.306a.25.25 0 0 1 .024-.327l.773-.773a1.75 1.75 0 0 0 .163-2.288zm1.75 5.007a.75.75 0 0 1 .83-.66c1.33.152 2.506.417 3.372.776.431.178.826.396 1.125.666.298.269.573.659.573 1.161q0 .404-.032.8.224-.065.446-.092c.556-.069 1.177.037 1.634.494.553.552.592 1.332.43 1.98-.166.665-.57 1.341-1.137 1.91-.568.567-1.244.97-1.909 1.136q-.241.06-.497.078.401.165.733.358c.657.38 1.332.977 1.332 1.836 0 .695-.45 1.219-.933 1.576-.498.369-1.172.669-1.936.907-1.539.481-3.618.767-5.881.767s-4.342-.286-5.88-.767c-.765-.238-1.439-.538-1.937-.907-.484-.357-.933-.881-.933-1.576 0-.859.675-1.457 1.332-1.836.476-.276 1.068-.512 1.739-.709C5.028 13.38 4.25 11.272 4.25 9c0-.467.238-.838.51-1.102.269-.262.624-.474 1.007-.647.771-.35 1.817-.614 3.004-.784a.75.75 0 0 1 .211 1.485c-1.112.159-2.004.397-2.596.665-.299.135-.482.26-.58.356L5.779 9c.06.066.194.178.462.314.333.168.795.332 1.374.474 1.155.284 2.688.462 4.385.462s3.23-.178 4.385-.462c.579-.142 1.04-.306 1.374-.474.268-.136.402-.248.462-.314l-.049-.048c-.123-.11-.345-.25-.693-.393-.69-.286-1.716-.529-2.969-.672a.75.75 0 0 1-.66-.83m4.623 6.754a9.3 9.3 0 0 0 .925-2.204c.355-.251.693-.379.95-.41.26-.033.36.036.39.066.033.033.129.18.035.555-.09.36-.334.804-.742 1.212-.409.409-.854.653-1.213.743a1.1 1.1 0 0 1-.345.038m-.422-2.983c-.387.16-.829.299-1.308.417-1.296.319-2.953.505-4.743.505s-3.447-.186-4.743-.505a9 9 0 0 1-1.308-.417c.707 3.173 3.21 5.422 6.051 5.422 2.84 0 5.344-2.25 6.051-5.422M12 17.75c1.665 0 3.186-.582 4.43-1.565.976.214 1.736.487 2.237.777.565.326.583.538.583.538 0 .003 0 .031-.04.093-.044.068-.13.163-.284.277-.311.23-.81.468-1.493.682-1.357.424-3.278.698-5.433.698s-4.076-.274-5.433-.698c-.683-.214-1.181-.452-1.493-.682a1.2 1.2 0 0 1-.284-.277c-.04-.062-.04-.09-.04-.093 0 0 .018-.212.583-.538.501-.29 1.262-.563 2.236-.777 1.245.983 2.766 1.565 4.431 1.565",clipRule:"evenodd"}))});var _T=function(e,l){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&l.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)l.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]]);return t};const Qd=A.forwardRef((e,l)=>{var{title:t,titleId:a}=e,i=_T(e,["title","titleId"]);let s=fr();return s=t?a||"title-"+s:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:l,"aria-labelledby":s},i),t?A.createElement("title",{id:s},t):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10.5 3.25a7.25 7.25 0 1 0 4.569 12.88l5.411 5.41a.75.75 0 1 0 1.06-1.06l-5.41-5.411A7.25 7.25 0 0 0 10.5 3.25M4.75 10.5a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0",clipRule:"evenodd"}))});var pT=function(e,l){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&l.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)l.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]]);return t};const hT=A.forwardRef((e,l)=>{var{title:t,titleId:a}=e,i=pT(e,["title","titleId"]);let s=fr();return s=t?a||"title-"+s:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:l,"aria-labelledby":s},i),t?A.createElement("title",{id:s},t):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 18.53a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V6a.75.75 0 0 1 1.5 0v10.19l2.22-2.22a.75.75 0 1 1 1.06 1.06zM2.75 6.25a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM2 17a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 2 17",clipRule:"evenodd"}))});var TT=function(e,l){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&l.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)l.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]]);return t};const kT=A.forwardRef((e,l)=>{var{title:t,titleId:a}=e,i=TT(e,["title","titleId"]);let s=fr();return s=t?a||"title-"+s:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:l,"aria-labelledby":s},i),t?A.createElement("title",{id:s},t):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 5.47a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 1 0 1.06 1.06l2.22-2.22V18a.75.75 0 0 0 1.5 0V7.81l2.22 2.22a.75.75 0 1 0 1.06-1.06zM2.75 17.75a.75.75 0 0 1 0-1.5h9.5a.75.75 0 0 1 0 1.5zm0-5a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5zM2 7c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5A.75.75 0 0 0 2 7",clipRule:"evenodd"}))});var yT=function(e,l){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&l.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)l.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]]);return t};const Gm=A.forwardRef((e,l)=>{var{title:t,titleId:a}=e,i=yT(e,["title","titleId"]);let s=fr();return s=t?a||"title-"+s:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:l,"aria-labelledby":s},i),t?A.createElement("title",{id:s},t):null,A.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});function gl(e,l,{checkForDefaultPrevented:t=!0}={}){return function(i){if(e?.(i),t===!1||!i.defaultPrevented)return l?.(i)}}const[hb,RT]=H0({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"});function Ui(e){return(l={})=>{const t=l.width?String(l.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}}function Gt(e){return(l,t)=>{const a=t?.context?String(t.context):"standalone";let i;if(a==="formatting"&&e.formattingValues){const m=e.defaultFormattingWidth||e.defaultWidth,d=t?.width?String(t.width):m;i=e.formattingValues[d]||e.formattingValues[m]}else{const m=e.defaultWidth,d=t?.width?String(t.width):e.defaultWidth;i=e.values[d]||e.values[m]}const s=e.argumentCallback?e.argumentCallback(l):l;return i[s]}}function Bt(e){return(l,t={})=>{const a=t.width,i=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],s=l.match(i);if(!s)return null;const m=s[0],d=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth],v=Array.isArray(d)?AT(d,h=>h.test(m)):NT(d,h=>h.test(m));let f;f=e.valueCallback?e.valueCallback(v):v,f=t.valueCallback?t.valueCallback(f):f;const _=l.slice(m.length);return{value:f,rest:_}}}function NT(e,l){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&l(e[t]))return t}function AT(e,l){for(let t=0;t<e.length;t++)if(l(e[t]))return t}function bT(e){return(l,t={})=>{const a=l.match(e.matchPattern);if(!a)return null;const i=a[0],s=l.match(e.parsePattern);if(!s)return null;let m=e.valueCallback?e.valueCallback(s[0]):s[0];m=t.valueCallback?t.valueCallback(m):m;const d=l.slice(i.length);return{value:m,rest:d}}}const ST={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},IT=(e,l,t)=>{let a;const i=ST[e];return typeof i=="string"?a=i:l===1?a=i.one:a=i.other.replace("{{count}}",String(l)),t?.addSuffix?t.comparison&&t.comparison>0?"om "+a:a+" siden":a},LT={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},DT={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},PT={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},KT={date:Ui({formats:LT,defaultWidth:"full"}),time:Ui({formats:DT,defaultWidth:"full"}),dateTime:Ui({formats:PT,defaultWidth:"full"})},FT={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},wT=(e,l,t,a)=>FT[e],OT={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},GT={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},BT={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},VT={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},MT={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},jT=(e,l)=>Number(e)+".",qT={ordinalNumber:jT,era:Gt({values:OT,defaultWidth:"wide"}),quarter:Gt({values:GT,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Gt({values:BT,defaultWidth:"wide"}),day:Gt({values:VT,defaultWidth:"wide"}),dayPeriod:Gt({values:MT,defaultWidth:"wide"})},HT=/^(\d+)\.?/i,xT=/\d+/i,UT={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},CT={any:[/^f/i,/^e/i]},YT={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},$T={any:[/1/i,/2/i,/3/i,/4/i]},JT={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},WT={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},zT={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},XT={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},ZT={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},QT={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},ek={ordinalNumber:bT({matchPattern:HT,parsePattern:xT,valueCallback:e=>parseInt(e,10)}),era:Bt({matchPatterns:UT,defaultMatchWidth:"wide",parsePatterns:CT,defaultParseWidth:"any"}),quarter:Bt({matchPatterns:YT,defaultMatchWidth:"wide",parsePatterns:$T,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Bt({matchPatterns:JT,defaultMatchWidth:"wide",parsePatterns:WT,defaultParseWidth:"any"}),day:Bt({matchPatterns:zT,defaultMatchWidth:"wide",parsePatterns:XT,defaultParseWidth:"any"}),dayPeriod:Bt({matchPatterns:ZT,defaultMatchWidth:"any",parsePatterns:QT,defaultParseWidth:"any"})},nk={code:"nb",formatDistance:IT,formatLong:KT,formatRelative:wT,localize:qT,match:ek,options:{weekStartsOn:1,firstWeekContainsDate:4}},rk={global:{dateLocale:nk,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},tk=A.createContext({locale:rk}),eg=()=>A.useContext(tk);var ak=function(e,l){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&l.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)l.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]]);return t};const lk=A.forwardRef((e,l)=>{var t,a,i,{rootElement:s,asChild:m}=e,d=ak(e,["rootElement","asChild"]);const v=gt(!1),f=(t=eg())===null||t===void 0?void 0:t.rootElement,_=(a=s??f)!==null&&a!==void 0?a:(i=globalThis?.document)===null||i===void 0?void 0:i.body,h=m?Wt:"div";return v?_?Dm.createPortal(C.createElement(x0,{theme:v.theme,asChild:!0,hasBackground:!1,"data-color":v.color},C.createElement(h,Object.assign({ref:l,"data-aksel-portal":""},d))),_):null:_?Dm.createPortal(C.createElement(h,Object.assign({ref:l,"data-aksel-portal":""},d)),_):null}),st=Math.min,Mr=Math.max,al=Math.round,Wa=Math.floor,Wn=e=>({x:e,y:e}),ik={left:"right",right:"left",bottom:"top",top:"bottom"},uk={start:"end",end:"start"};function du(e,l,t){return Mr(e,st(l,t))}function Xt(e,l){return typeof e=="function"?e(l):e}function jr(e){return e.split("-")[0]}function Zt(e){return e.split("-")[1]}function ng(e){return e==="x"?"y":"x"}function Vu(e){return e==="y"?"height":"width"}function ot(e){return["top","bottom"].includes(jr(e))?"y":"x"}function Mu(e){return ng(ot(e))}function sk(e,l,t){t===void 0&&(t=!1);const a=Zt(e),i=Mu(e),s=Vu(i);let m=i==="x"?a===(t?"end":"start")?"right":"left":a==="start"?"bottom":"top";return l.reference[s]>l.floating[s]&&(m=ll(m)),[m,ll(m)]}function ok(e){const l=ll(e);return[gu(e),l,gu(l)]}function gu(e){return e.replace(/start|end/g,l=>uk[l])}function mk(e,l,t){const a=["left","right"],i=["right","left"],s=["top","bottom"],m=["bottom","top"];switch(e){case"top":case"bottom":return t?l?i:a:l?a:i;case"left":case"right":return l?s:m;default:return[]}}function dk(e,l,t,a){const i=Zt(e);let s=mk(jr(e),t==="start",a);return i&&(s=s.map(m=>m+"-"+i),l&&(s=s.concat(s.map(gu)))),s}function ll(e){return e.replace(/left|right|bottom|top/g,l=>ik[l])}function gk(e){return{top:0,right:0,bottom:0,left:0,...e}}function rg(e){return typeof e!="number"?gk(e):{top:e,right:e,bottom:e,left:e}}function il(e){const{x:l,y:t,width:a,height:i}=e;return{width:a,height:i,top:t,left:l,right:l+a,bottom:t+i,x:l,y:t}}function Bm(e,l,t){let{reference:a,floating:i}=e;const s=ot(l),m=Mu(l),d=Vu(m),v=jr(l),f=s==="y",_=a.x+a.width/2-i.width/2,h=a.y+a.height/2-i.height/2,k=a[d]/2-i[d]/2;let y;switch(v){case"top":y={x:_,y:a.y-i.height};break;case"bottom":y={x:_,y:a.y+a.height};break;case"right":y={x:a.x+a.width,y:h};break;case"left":y={x:a.x-i.width,y:h};break;default:y={x:a.x,y:a.y}}switch(Zt(l)){case"start":y[m]-=k*(t&&f?-1:1);break;case"end":y[m]+=k*(t&&f?-1:1);break}return y}const vk=async(e,l,t)=>{const{placement:a="bottom",strategy:i="absolute",middleware:s=[],platform:m}=t,d=s.filter(Boolean),v=await(m.isRTL==null?void 0:m.isRTL(l));let f=await m.getElementRects({reference:e,floating:l,strategy:i}),{x:_,y:h}=Bm(f,a,v),k=a,y={},P=0;for(let R=0;R<d.length;R++){const{name:T,fn:b}=d[R],{x:K,y:I,data:x,reset:D}=await b({x:_,y:h,initialPlacement:a,placement:k,strategy:i,middlewareData:y,rects:f,platform:m,elements:{reference:e,floating:l}});_=K??_,h=I??h,y={...y,[T]:{...y[T],...x}},D&&P<=50&&(P++,typeof D=="object"&&(D.placement&&(k=D.placement),D.rects&&(f=D.rects===!0?await m.getElementRects({reference:e,floating:l,strategy:i}):D.rects),{x:_,y:h}=Bm(f,k,v)),R=-1)}return{x:_,y:h,placement:k,strategy:i,middlewareData:y}};async function tg(e,l){var t;l===void 0&&(l={});const{x:a,y:i,platform:s,rects:m,elements:d,strategy:v}=e,{boundary:f="clippingAncestors",rootBoundary:_="viewport",elementContext:h="floating",altBoundary:k=!1,padding:y=0}=Xt(l,e),P=rg(y),T=d[k?h==="floating"?"reference":"floating":h],b=il(await s.getClippingRect({element:(t=await(s.isElement==null?void 0:s.isElement(T)))==null||t?T:T.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(d.floating)),boundary:f,rootBoundary:_,strategy:v})),K=h==="floating"?{x:a,y:i,width:m.floating.width,height:m.floating.height}:m.reference,I=await(s.getOffsetParent==null?void 0:s.getOffsetParent(d.floating)),x=await(s.isElement==null?void 0:s.isElement(I))?await(s.getScale==null?void 0:s.getScale(I))||{x:1,y:1}:{x:1,y:1},D=il(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:d,rect:K,offsetParent:I,strategy:v}):K);return{top:(b.top-D.top+P.top)/x.y,bottom:(D.bottom-b.bottom+P.bottom)/x.y,left:(b.left-D.left+P.left)/x.x,right:(D.right-b.right+P.right)/x.x}}const Ek=e=>({name:"arrow",options:e,async fn(l){const{x:t,y:a,placement:i,rects:s,platform:m,elements:d,middlewareData:v}=l,{element:f,padding:_=0}=Xt(e,l)||{};if(f==null)return{};const h=rg(_),k={x:t,y:a},y=Mu(i),P=Vu(y),R=await m.getDimensions(f),T=y==="y",b=T?"top":"left",K=T?"bottom":"right",I=T?"clientHeight":"clientWidth",x=s.reference[P]+s.reference[y]-k[y]-s.floating[P],D=k[y]-s.reference[y],H=await(m.getOffsetParent==null?void 0:m.getOffsetParent(f));let w=H?H[I]:0;(!w||!await(m.isElement==null?void 0:m.isElement(H)))&&(w=d.floating[I]||s.floating[P]);const O=x/2-D/2,W=w/2-R[P]/2-1,Q=st(h[b],W),X=st(h[K],W),Z=Q,M=w-R[P]-X,G=w/2-R[P]/2+O,z=du(Z,G,M),re=!v.arrow&&Zt(i)!=null&&G!==z&&s.reference[P]/2-(G<Z?Q:X)-R[P]/2<0,J=re?G<Z?G-Z:G-M:0;return{[y]:k[y]+J,data:{[y]:z,centerOffset:G-z-J,...re&&{alignmentOffset:J}},reset:re}}}),fk=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(l){var t,a;const{placement:i,middlewareData:s,rects:m,initialPlacement:d,platform:v,elements:f}=l,{mainAxis:_=!0,crossAxis:h=!0,fallbackPlacements:k,fallbackStrategy:y="bestFit",fallbackAxisSideDirection:P="none",flipAlignment:R=!0,...T}=Xt(e,l);if((t=s.arrow)!=null&&t.alignmentOffset)return{};const b=jr(i),K=ot(d),I=jr(d)===d,x=await(v.isRTL==null?void 0:v.isRTL(f.floating)),D=k||(I||!R?[ll(d)]:ok(d)),H=P!=="none";!k&&H&&D.push(...dk(d,R,P,x));const w=[d,...D],O=await tg(l,T),W=[];let Q=((a=s.flip)==null?void 0:a.overflows)||[];if(_&&W.push(O[b]),h){const G=sk(i,m,x);W.push(O[G[0]],O[G[1]])}if(Q=[...Q,{placement:i,overflows:W}],!W.every(G=>G<=0)){var X,Z;const G=(((X=s.flip)==null?void 0:X.index)||0)+1,z=w[G];if(z)return{data:{index:G,overflows:Q},reset:{placement:z}};let re=(Z=Q.filter(J=>J.overflows[0]<=0).sort((J,U)=>J.overflows[1]-U.overflows[1])[0])==null?void 0:Z.placement;if(!re)switch(y){case"bestFit":{var M;const J=(M=Q.filter(U=>{if(H){const $=ot(U.placement);return $===K||$==="y"}return!0}).map(U=>[U.placement,U.overflows.filter($=>$>0).reduce(($,ae)=>$+ae,0)]).sort((U,$)=>U[1]-$[1])[0])==null?void 0:M[0];J&&(re=J);break}case"initialPlacement":re=d;break}if(i!==re)return{reset:{placement:re}}}return{}}}};async function ck(e,l){const{placement:t,platform:a,elements:i}=e,s=await(a.isRTL==null?void 0:a.isRTL(i.floating)),m=jr(t),d=Zt(t),v=ot(t)==="y",f=["left","top"].includes(m)?-1:1,_=s&&v?-1:1,h=Xt(l,e);let{mainAxis:k,crossAxis:y,alignmentAxis:P}=typeof h=="number"?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:h.mainAxis||0,crossAxis:h.crossAxis||0,alignmentAxis:h.alignmentAxis};return d&&typeof P=="number"&&(y=d==="end"?P*-1:P),v?{x:y*_,y:k*f}:{x:k*f,y:y*_}}const _k=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(l){var t,a;const{x:i,y:s,placement:m,middlewareData:d}=l,v=await ck(l,e);return m===((t=d.offset)==null?void 0:t.placement)&&(a=d.arrow)!=null&&a.alignmentOffset?{}:{x:i+v.x,y:s+v.y,data:{...v,placement:m}}}}},pk=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(l){const{x:t,y:a,placement:i}=l,{mainAxis:s=!0,crossAxis:m=!1,limiter:d={fn:T=>{let{x:b,y:K}=T;return{x:b,y:K}}},...v}=Xt(e,l),f={x:t,y:a},_=await tg(l,v),h=ot(jr(i)),k=ng(h);let y=f[k],P=f[h];if(s){const T=k==="y"?"top":"left",b=k==="y"?"bottom":"right",K=y+_[T],I=y-_[b];y=du(K,y,I)}if(m){const T=h==="y"?"top":"left",b=h==="y"?"bottom":"right",K=P+_[T],I=P-_[b];P=du(K,P,I)}const R=d.fn({...l,[k]:y,[h]:P});return{...R,data:{x:R.x-t,y:R.y-a,enabled:{[k]:s,[h]:m}}}}}};function vl(){return typeof window<"u"}function ft(e){return ag(e)?(e.nodeName||"").toLowerCase():"#document"}function vn(e){var l;return(e==null||(l=e.ownerDocument)==null?void 0:l.defaultView)||window}function Zn(e){var l;return(l=(ag(e)?e.ownerDocument:e.document)||window.document)==null?void 0:l.documentElement}function ag(e){return vl()?e instanceof Node||e instanceof vn(e).Node:!1}function Ke(e){return vl()?e instanceof Element||e instanceof vn(e).Element:!1}function yn(e){return vl()?e instanceof HTMLElement||e instanceof vn(e).HTMLElement:!1}function ul(e){return!vl()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof vn(e).ShadowRoot}function Qt(e){const{overflow:l,overflowX:t,overflowY:a,display:i}=Fn(e);return/auto|scroll|overlay|hidden|clip/.test(l+a+t)&&!["inline","contents"].includes(i)}function hk(e){return["table","td","th"].includes(ft(e))}function El(e){return[":popover-open",":modal"].some(l=>{try{return e.matches(l)}catch{return!1}})}function ju(e){const l=fl(),t=Ke(e)?Fn(e):e;return["transform","translate","scale","rotate","perspective"].some(a=>t[a]?t[a]!=="none":!1)||(t.containerType?t.containerType!=="normal":!1)||!l&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!l&&(t.filter?t.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(a=>(t.willChange||"").includes(a))||["paint","layout","strict","content"].some(a=>(t.contain||"").includes(a))}function Tk(e){let l=vr(e);for(;yn(l)&&!gr(l);){if(ju(l))return l;if(El(l))return null;l=vr(l)}return null}function fl(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function gr(e){return["html","body","#document"].includes(ft(e))}function Fn(e){return vn(e).getComputedStyle(e)}function cl(e){return Ke(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function vr(e){if(ft(e)==="html")return e;const l=e.assignedSlot||e.parentNode||ul(e)&&e.host||Zn(e);return ul(l)?l.host:l}function lg(e){const l=vr(e);return gr(l)?e.ownerDocument?e.ownerDocument.body:e.body:yn(l)&&Qt(l)?l:lg(l)}function Ar(e,l,t){var a;l===void 0&&(l=[]),t===void 0&&(t=!0);const i=lg(e),s=i===((a=e.ownerDocument)==null?void 0:a.body),m=vn(i);if(s){const d=vu(m);return l.concat(m,m.visualViewport||[],Qt(i)?i:[],d&&t?Ar(d):[])}return l.concat(i,Ar(i,[],t))}function vu(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function ig(e){const l=Fn(e);let t=parseFloat(l.width)||0,a=parseFloat(l.height)||0;const i=yn(e),s=i?e.offsetWidth:t,m=i?e.offsetHeight:a,d=al(t)!==s||al(a)!==m;return d&&(t=s,a=m),{width:t,height:a,$:d}}function qu(e){return Ke(e)?e:e.contextElement}function lt(e){const l=qu(e);if(!yn(l))return Wn(1);const t=l.getBoundingClientRect(),{width:a,height:i,$:s}=ig(l);let m=(s?al(t.width):t.width)/a,d=(s?al(t.height):t.height)/i;return(!m||!Number.isFinite(m))&&(m=1),(!d||!Number.isFinite(d))&&(d=1),{x:m,y:d}}const kk=Wn(0);function ug(e){const l=vn(e);return!fl()||!l.visualViewport?kk:{x:l.visualViewport.offsetLeft,y:l.visualViewport.offsetTop}}function yk(e,l,t){return l===void 0&&(l=!1),!t||l&&t!==vn(e)?!1:l}function qr(e,l,t,a){l===void 0&&(l=!1),t===void 0&&(t=!1);const i=e.getBoundingClientRect(),s=qu(e);let m=Wn(1);l&&(a?Ke(a)&&(m=lt(a)):m=lt(e));const d=yk(s,t,a)?ug(s):Wn(0);let v=(i.left+d.x)/m.x,f=(i.top+d.y)/m.y,_=i.width/m.x,h=i.height/m.y;if(s){const k=vn(s),y=a&&Ke(a)?vn(a):a;let P=k,R=vu(P);for(;R&&a&&y!==P;){const T=lt(R),b=R.getBoundingClientRect(),K=Fn(R),I=b.left+(R.clientLeft+parseFloat(K.paddingLeft))*T.x,x=b.top+(R.clientTop+parseFloat(K.paddingTop))*T.y;v*=T.x,f*=T.y,_*=T.x,h*=T.y,v+=I,f+=x,P=vn(R),R=vu(P)}}return il({width:_,height:h,x:v,y:f})}function Hu(e,l){const t=cl(e).scrollLeft;return l?l.left+t:qr(Zn(e)).left+t}function sg(e,l,t){t===void 0&&(t=!1);const a=e.getBoundingClientRect(),i=a.left+l.scrollLeft-(t?0:Hu(e,a)),s=a.top+l.scrollTop;return{x:i,y:s}}function Rk(e){let{elements:l,rect:t,offsetParent:a,strategy:i}=e;const s=i==="fixed",m=Zn(a),d=l?El(l.floating):!1;if(a===m||d&&s)return t;let v={scrollLeft:0,scrollTop:0},f=Wn(1);const _=Wn(0),h=yn(a);if((h||!h&&!s)&&((ft(a)!=="body"||Qt(m))&&(v=cl(a)),yn(a))){const y=qr(a);f=lt(a),_.x=y.x+a.clientLeft,_.y=y.y+a.clientTop}const k=m&&!h&&!s?sg(m,v,!0):Wn(0);return{width:t.width*f.x,height:t.height*f.y,x:t.x*f.x-v.scrollLeft*f.x+_.x+k.x,y:t.y*f.y-v.scrollTop*f.y+_.y+k.y}}function Nk(e){return Array.from(e.getClientRects())}function Ak(e){const l=Zn(e),t=cl(e),a=e.ownerDocument.body,i=Mr(l.scrollWidth,l.clientWidth,a.scrollWidth,a.clientWidth),s=Mr(l.scrollHeight,l.clientHeight,a.scrollHeight,a.clientHeight);let m=-t.scrollLeft+Hu(e);const d=-t.scrollTop;return Fn(a).direction==="rtl"&&(m+=Mr(l.clientWidth,a.clientWidth)-i),{width:i,height:s,x:m,y:d}}function bk(e,l){const t=vn(e),a=Zn(e),i=t.visualViewport;let s=a.clientWidth,m=a.clientHeight,d=0,v=0;if(i){s=i.width,m=i.height;const f=fl();(!f||f&&l==="fixed")&&(d=i.offsetLeft,v=i.offsetTop)}return{width:s,height:m,x:d,y:v}}function Sk(e,l){const t=qr(e,!0,l==="fixed"),a=t.top+e.clientTop,i=t.left+e.clientLeft,s=yn(e)?lt(e):Wn(1),m=e.clientWidth*s.x,d=e.clientHeight*s.y,v=i*s.x,f=a*s.y;return{width:m,height:d,x:v,y:f}}function Vm(e,l,t){let a;if(l==="viewport")a=bk(e,t);else if(l==="document")a=Ak(Zn(e));else if(Ke(l))a=Sk(l,t);else{const i=ug(e);a={x:l.x-i.x,y:l.y-i.y,width:l.width,height:l.height}}return il(a)}function og(e,l){const t=vr(e);return t===l||!Ke(t)||gr(t)?!1:Fn(t).position==="fixed"||og(t,l)}function Ik(e,l){const t=l.get(e);if(t)return t;let a=Ar(e,[],!1).filter(d=>Ke(d)&&ft(d)!=="body"),i=null;const s=Fn(e).position==="fixed";let m=s?vr(e):e;for(;Ke(m)&&!gr(m);){const d=Fn(m),v=ju(m);!v&&d.position==="fixed"&&(i=null),(s?!v&&!i:!v&&d.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||Qt(m)&&!v&&og(e,m))?a=a.filter(_=>_!==m):i=d,m=vr(m)}return l.set(e,a),a}function Lk(e){let{element:l,boundary:t,rootBoundary:a,strategy:i}=e;const m=[...t==="clippingAncestors"?El(l)?[]:Ik(l,this._c):[].concat(t),a],d=m[0],v=m.reduce((f,_)=>{const h=Vm(l,_,i);return f.top=Mr(h.top,f.top),f.right=st(h.right,f.right),f.bottom=st(h.bottom,f.bottom),f.left=Mr(h.left,f.left),f},Vm(l,d,i));return{width:v.right-v.left,height:v.bottom-v.top,x:v.left,y:v.top}}function Dk(e){const{width:l,height:t}=ig(e);return{width:l,height:t}}function Pk(e,l,t){const a=yn(l),i=Zn(l),s=t==="fixed",m=qr(e,!0,s,l);let d={scrollLeft:0,scrollTop:0};const v=Wn(0);if(a||!a&&!s)if((ft(l)!=="body"||Qt(i))&&(d=cl(l)),a){const k=qr(l,!0,s,l);v.x=k.x+l.clientLeft,v.y=k.y+l.clientTop}else i&&(v.x=Hu(i));const f=i&&!a&&!s?sg(i,d):Wn(0),_=m.left+d.scrollLeft-v.x-f.x,h=m.top+d.scrollTop-v.y-f.y;return{x:_,y:h,width:m.width,height:m.height}}function Ci(e){return Fn(e).position==="static"}function Mm(e,l){if(!yn(e)||Fn(e).position==="fixed")return null;if(l)return l(e);let t=e.offsetParent;return Zn(e)===t&&(t=t.ownerDocument.body),t}function mg(e,l){const t=vn(e);if(El(e))return t;if(!yn(e)){let i=vr(e);for(;i&&!gr(i);){if(Ke(i)&&!Ci(i))return i;i=vr(i)}return t}let a=Mm(e,l);for(;a&&hk(a)&&Ci(a);)a=Mm(a,l);return a&&gr(a)&&Ci(a)&&!ju(a)?t:a||Tk(e)||t}const Kk=async function(e){const l=this.getOffsetParent||mg,t=this.getDimensions,a=await t(e.floating);return{reference:Pk(e.reference,await l(e.floating),e.strategy),floating:{x:0,y:0,width:a.width,height:a.height}}};function Fk(e){return Fn(e).direction==="rtl"}const wk={convertOffsetParentRelativeRectToViewportRelativeRect:Rk,getDocumentElement:Zn,getClippingRect:Lk,getOffsetParent:mg,getElementRects:Kk,getClientRects:Nk,getDimensions:Dk,getScale:lt,isElement:Ke,isRTL:Fk};function dg(e,l){return e.x===l.x&&e.y===l.y&&e.width===l.width&&e.height===l.height}function Ok(e,l){let t=null,a;const i=Zn(e);function s(){var d;clearTimeout(a),(d=t)==null||d.disconnect(),t=null}function m(d,v){d===void 0&&(d=!1),v===void 0&&(v=1),s();const f=e.getBoundingClientRect(),{left:_,top:h,width:k,height:y}=f;if(d||l(),!k||!y)return;const P=Wa(h),R=Wa(i.clientWidth-(_+k)),T=Wa(i.clientHeight-(h+y)),b=Wa(_),I={rootMargin:-P+"px "+-R+"px "+-T+"px "+-b+"px",threshold:Mr(0,st(1,v))||1};let x=!0;function D(H){const w=H[0].intersectionRatio;if(w!==v){if(!x)return m();w?m(!1,w):a=setTimeout(()=>{m(!1,1e-7)},1e3)}w===1&&!dg(f,e.getBoundingClientRect())&&m(),x=!1}try{t=new IntersectionObserver(D,{...I,root:i.ownerDocument})}catch{t=new IntersectionObserver(D,I)}t.observe(e)}return m(!0),s}function jm(e,l,t,a){a===void 0&&(a={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:m=typeof ResizeObserver=="function",layoutShift:d=typeof IntersectionObserver=="function",animationFrame:v=!1}=a,f=qu(e),_=i||s?[...f?Ar(f):[],...Ar(l)]:[];_.forEach(b=>{i&&b.addEventListener("scroll",t,{passive:!0}),s&&b.addEventListener("resize",t)});const h=f&&d?Ok(f,t):null;let k=-1,y=null;m&&(y=new ResizeObserver(b=>{let[K]=b;K&&K.target===f&&y&&(y.unobserve(l),cancelAnimationFrame(k),k=requestAnimationFrame(()=>{var I;(I=y)==null||I.observe(l)})),t()}),f&&!v&&y.observe(f),y.observe(l));let P,R=v?qr(e):null;v&&T();function T(){const b=qr(e);R&&!dg(R,b)&&t(),R=b,P=requestAnimationFrame(T)}return t(),()=>{var b;_.forEach(K=>{i&&K.removeEventListener("scroll",t),s&&K.removeEventListener("resize",t)}),h?.(),(b=y)==null||b.disconnect(),y=null,v&&cancelAnimationFrame(P)}}const Gk=_k,Bk=pk,Vk=fk,qm=Ek,Mk=(e,l,t)=>{const a=new Map,i={platform:wk,...t},s={...i.platform,_c:a};return vk(e,l,{...i,platform:s})};var el=typeof document<"u"?A.useLayoutEffect:A.useEffect;function sl(e,l){if(e===l)return!0;if(typeof e!=typeof l)return!1;if(typeof e=="function"&&e.toString()===l.toString())return!0;let t,a,i;if(e&&l&&typeof e=="object"){if(Array.isArray(e)){if(t=e.length,t!==l.length)return!1;for(a=t;a--!==0;)if(!sl(e[a],l[a]))return!1;return!0}if(i=Object.keys(e),t=i.length,t!==Object.keys(l).length)return!1;for(a=t;a--!==0;)if(!{}.hasOwnProperty.call(l,i[a]))return!1;for(a=t;a--!==0;){const s=i[a];if(!(s==="_owner"&&e.$$typeof)&&!sl(e[s],l[s]))return!1}return!0}return e!==e&&l!==l}function gg(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Hm(e,l){const t=gg(e);return Math.round(l*t)/t}function Yi(e){const l=A.useRef(e);return el(()=>{l.current=e}),l}function jk(e){e===void 0&&(e={});const{placement:l="bottom",strategy:t="absolute",middleware:a=[],platform:i,elements:{reference:s,floating:m}={},transform:d=!0,whileElementsMounted:v,open:f}=e,[_,h]=A.useState({x:0,y:0,strategy:t,placement:l,middlewareData:{},isPositioned:!1}),[k,y]=A.useState(a);sl(k,a)||y(a);const[P,R]=A.useState(null),[T,b]=A.useState(null),K=A.useCallback(U=>{U!==H.current&&(H.current=U,R(U))},[]),I=A.useCallback(U=>{U!==w.current&&(w.current=U,b(U))},[]),x=s||P,D=m||T,H=A.useRef(null),w=A.useRef(null),O=A.useRef(_),W=v!=null,Q=Yi(v),X=Yi(i),Z=Yi(f),M=A.useCallback(()=>{if(!H.current||!w.current)return;const U={placement:l,strategy:t,middleware:k};X.current&&(U.platform=X.current),Mk(H.current,w.current,U).then($=>{const ae={...$,isPositioned:Z.current!==!1};G.current&&!sl(O.current,ae)&&(O.current=ae,Wd.flushSync(()=>{h(ae)}))})},[k,l,t,X,Z]);el(()=>{f===!1&&O.current.isPositioned&&(O.current.isPositioned=!1,h(U=>({...U,isPositioned:!1})))},[f]);const G=A.useRef(!1);el(()=>(G.current=!0,()=>{G.current=!1}),[]),el(()=>{if(x&&(H.current=x),D&&(w.current=D),x&&D){if(Q.current)return Q.current(x,D,M);M()}},[x,D,M,Q,W]);const z=A.useMemo(()=>({reference:H,floating:w,setReference:K,setFloating:I}),[K,I]),re=A.useMemo(()=>({reference:x,floating:D}),[x,D]),J=A.useMemo(()=>{const U={position:t,left:0,top:0};if(!re.floating)return U;const $=Hm(re.floating,_.x),ae=Hm(re.floating,_.y);return d?{...U,transform:"translate("+$+"px, "+ae+"px)",...gg(re.floating)>=1.5&&{willChange:"transform"}}:{position:t,left:$,top:ae}},[t,d,re.floating,_.x,_.y]);return A.useMemo(()=>({..._,update:M,refs:z,elements:re,floatingStyles:J}),[_,M,z,re,J])}const qk=e=>{function l(t){return{}.hasOwnProperty.call(t,"current")}return{name:"arrow",options:e,fn(t){const{element:a,padding:i}=typeof e=="function"?e(t):e;return a&&l(a)?a.current!=null?qm({element:a.current,padding:i}).fn(t):{}:a?qm({element:a,padding:i}).fn(t):{}}}},Hk=(e,l)=>({...Gk(e),options:[e,l]}),xk=(e,l)=>({...Bk(e),options:[e,l]}),Uk=(e,l)=>({...Vk(e),options:[e,l]}),Ck=(e,l)=>({...qk(e),options:[e,l]}),xm=/(\w+)/g;function Yk(e,l){const t=Array.isArray(e)?e:$k(e);for(const a of l){if(!a)continue;let i=a;for(let s=0;s<t.length;s++){const m=i[t[s]];m!==void 0&&(i=m)}if(typeof i=="string")return i}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function $k(e){const l=[];let t=xm.exec(e);for(;t;){const[,a,i]=t;l.push(a||i),t=xm.exec(e)}return l}const Jk=/{[^}]*}/g;function _l(e,...l){const t=eg(),a=t.translations||[],i=[...l,...Array.isArray(a)?a.map(m=>m[e]):[a[e]],t.locale[e]];return(m,d)=>{const v=Yk(m,i);return d?v.replace(Jk,f=>{const _=f.substring(1,f.length-1);if(d[_]===void 0){const h=JSON.stringify(d);throw new Error(`Error translating key '${m}'. No replacement syntax ({}) found for key '${_}'. The following replacements were passed: '${h}'`)}return d[_]}):v}}var Wk=function(e,l){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&l.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)l.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]]);return t};const zk=A.forwardRef((e,l)=>{var{className:t,size:a="medium",title:i,transparent:s=!1,variant:m="neutral",id:d,"data-color":v}=e,f=Wk(e,["className","size","title","transparent","variant","id","data-color"]);const{cn:_}=Le(),h=dl(),k=_l("Loader");return C.createElement("svg",Object.assign({"aria-labelledby":d??`loader-${h}`,ref:l,className:_("navds-loader",t,`navds-loader--${a}`,`navds-loader--${m}`,{"navds-loader--transparent":s}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid","data-color":v??Xk(m)},zt(f,["children"]),{"data-variant":m}),C.createElement("title",{id:d??`loader-${h}`},i||k("title")),C.createElement("circle",{className:_("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),C.createElement("circle",{className:_("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});function Xk(e){switch(e){case"neutral":return"neutral";case"inverted":return"neutral";case"interaction":return;default:return"neutral"}}var Zk=function(e,l){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&l.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)l.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]]);return t};const xu=A.forwardRef((e,l)=>{var{as:t="button",variant:a="primary",className:i,children:s,size:m="medium",loading:d=!1,disabled:v,icon:f,iconPosition:_="left",onKeyUp:h,"data-color":k}=e,y=Zk(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp","data-color"]);const{cn:P}=Le(),R=v||d?zt(y,["href"]):y,T=b=>{b.key===" "&&!v&&!d&&b.currentTarget.click()};return C.createElement(t,Object.assign({},t!=="button"?{role:"button"}:{},{"data-color":k??Qk(a),"data-variant":ey(a)},R,{ref:l,onKeyUp:gl(h,T),className:P(i,"navds-button",`navds-button--${a}`,`navds-button--${m}`,{"navds-button--loading":d,"navds-button--icon-only":!!f&&!s,"navds-button--disabled":v??d}),disabled:v??d?!0:void 0}),f&&_==="left"&&C.createElement("span",{className:P("navds-button__icon")},f),d&&C.createElement(zk,{size:m}),s&&C.createElement(Gu,{as:"span",size:m==="medium"?"medium":"small"},s),f&&_==="right"&&C.createElement("span",{className:P("navds-button__icon")},f))});function Qk(e){switch(e){case"primary-neutral":case"secondary-neutral":case"tertiary-neutral":return"neutral";case"danger":return"danger";default:return}}function ey(e){switch(e){case"primary":case"primary-neutral":case"danger":return"primary";case"secondary":case"secondary-neutral":return"secondary";case"tertiary":case"tertiary-neutral":return"tertiary";default:return"primary"}}function ny(){const e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function ry(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(l=>{let{brand:t,version:a}=l;return t+"/"+a}).join(" "):navigator.userAgent}function ty(){return/apple/i.test(navigator.vendor)}function ay(){return ny().toLowerCase().startsWith("mac")&&!navigator.maxTouchPoints}function ly(){return ry().includes("jsdom/")}const iy="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function Um(e){let l=e.activeElement;for(;((t=l)==null||(t=t.shadowRoot)==null?void 0:t.activeElement)!=null;){var t;l=l.shadowRoot.activeElement}return l}function $t(e,l){if(!e||!l)return!1;const t=l.getRootNode==null?void 0:l.getRootNode();if(e.contains(l))return!0;if(t&&ul(t)){let a=l;for(;a;){if(e===a)return!0;a=a.parentNode||a.host}}return!1}function at(e){return"composedPath"in e?e.composedPath()[0]:e.target}function $i(e,l){if(l==null)return!1;if("composedPath"in e)return e.composedPath().includes(l);const t=e;return t.target!=null&&l.contains(t.target)}function uy(e){return e.matches("html,body")}function Vr(e){return e?.ownerDocument||document}function sy(e){return yn(e)&&e.matches(iy)}function oy(e){if(!e||ly())return!0;try{return e.matches(":focus-visible")}catch{return!0}}function Ji(e,l,t){t===void 0&&(t=!0);let a=e.filter(s=>{var m;return s.parentId===l&&((m=s.context)==null?void 0:m.open)}),i=a;for(;i.length;)i=t?e.filter(s=>{var m;return(m=i)==null?void 0:m.some(d=>{var v;return s.parentId===d.id&&((v=s.context)==null?void 0:v.open)})}):e,a=a.concat(i);return a}function my(e){return"nativeEvent"in e}function Eu(e,l){const t=["mouse","pen"];return t.push("",void 0),t.includes(e)}var mt=typeof document<"u"?A.useLayoutEffect:A.useEffect;const dy={...Cd};function za(e){const l=A.useRef(e);return mt(()=>{l.current=e}),l}const gy=dy.useInsertionEffect,vy=gy||(e=>e());function mr(e){const l=A.useRef(()=>{});return vy(()=>{l.current=e}),A.useCallback(function(){for(var t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];return l.current==null?void 0:l.current(...a)},[])}const Ey="data-floating-ui-focusable",Cm="active",Ym="selected",fy={...Cd};let $m=!1,cy=0;const Jm=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+cy++;function _y(){const[e,l]=A.useState(()=>$m?Jm():void 0);return mt(()=>{e==null&&l(Jm())},[]),A.useEffect(()=>{$m=!0},[]),e}const py=fy.useId,hy=py||_y;function Ty(){const e=new Map;return{emit(l,t){var a;(a=e.get(l))==null||a.forEach(i=>i(t))},on(l,t){e.has(l)||e.set(l,new Set),e.get(l).add(t)},off(l,t){var a;(a=e.get(l))==null||a.delete(t)}}}const ky=A.createContext(null),yy=A.createContext(null),vg=()=>{var e;return((e=A.useContext(ky))==null?void 0:e.id)||null},Uu=()=>A.useContext(yy);function Cu(e){return"data-floating-ui-"+e}function Kn(e){e.current!==-1&&(clearTimeout(e.current),e.current=-1)}const Wm=Cu("safe-polygon");function Wi(e,l,t){if(t&&!Eu(t))return 0;if(typeof e=="number")return e;if(typeof e=="function"){const a=e();return typeof a=="number"?a:a?.[l]}return e?.[l]}function zi(e){return typeof e=="function"?e():e}function Ry(e,l){l===void 0&&(l={});const{open:t,onOpenChange:a,dataRef:i,events:s,elements:m}=e,{enabled:d=!0,delay:v=0,handleClose:f=null,mouseOnly:_=!1,restMs:h=0,move:k=!0}=l,y=Uu(),P=vg(),R=za(f),T=za(v),b=za(t),K=za(h),I=A.useRef(),x=A.useRef(-1),D=A.useRef(),H=A.useRef(-1),w=A.useRef(!0),O=A.useRef(!1),W=A.useRef(()=>{}),Q=A.useRef(!1),X=A.useCallback(()=>{var J;const U=(J=i.current.openEvent)==null?void 0:J.type;return U?.includes("mouse")&&U!=="mousedown"},[i]);A.useEffect(()=>{if(!d)return;function J(U){let{open:$}=U;$||(Kn(x),Kn(H),w.current=!0,Q.current=!1)}return s.on("openchange",J),()=>{s.off("openchange",J)}},[d,s]),A.useEffect(()=>{if(!d||!R.current||!t)return;function J($){X()&&a(!1,$,"hover")}const U=Vr(m.floating).documentElement;return U.addEventListener("mouseleave",J),()=>{U.removeEventListener("mouseleave",J)}},[m.floating,t,a,d,R,X]);const Z=A.useCallback(function(J,U,$){U===void 0&&(U=!0),$===void 0&&($="hover");const ae=Wi(T.current,"close",I.current);ae&&!D.current?(Kn(x),x.current=window.setTimeout(()=>a(!1,J,$),ae)):U&&(Kn(x),a(!1,J,$))},[T,a]),M=mr(()=>{W.current(),D.current=void 0}),G=mr(()=>{if(O.current){const J=Vr(m.floating).body;J.style.pointerEvents="",J.removeAttribute(Wm),O.current=!1}}),z=mr(()=>i.current.openEvent?["click","mousedown"].includes(i.current.openEvent.type):!1);A.useEffect(()=>{if(!d)return;function J(ue){if(Kn(x),w.current=!1,_&&!Eu(I.current)||zi(K.current)>0&&!Wi(T.current,"open"))return;const ce=Wi(T.current,"open",I.current);ce?x.current=window.setTimeout(()=>{b.current||a(!0,ue,"hover")},ce):t||a(!0,ue,"hover")}function U(ue){if(z()){G();return}W.current();const ce=Vr(m.floating);if(Kn(H),Q.current=!1,R.current&&i.current.floatingContext){t||Kn(x),D.current=R.current({...i.current.floatingContext,tree:y,x:ue.clientX,y:ue.clientY,onClose(){G(),M(),z()||Z(ue,!0,"safe-polygon")}});const je=D.current;ce.addEventListener("mousemove",je),W.current=()=>{ce.removeEventListener("mousemove",je)};return}(I.current==="touch"?!$t(m.floating,ue.relatedTarget):!0)&&Z(ue)}function $(ue){z()||i.current.floatingContext&&(R.current==null||R.current({...i.current.floatingContext,tree:y,x:ue.clientX,y:ue.clientY,onClose(){G(),M(),z()||Z(ue)}})(ue))}function ae(){Kn(x)}function ne(ue){z()||Z(ue,!1)}if(Ke(m.domReference)){const ue=m.domReference,ce=m.floating;return t&&ue.addEventListener("mouseleave",$),k&&ue.addEventListener("mousemove",J,{once:!0}),ue.addEventListener("mouseenter",J),ue.addEventListener("mouseleave",U),ce&&(ce.addEventListener("mouseleave",$),ce.addEventListener("mouseenter",ae),ce.addEventListener("mouseleave",ne)),()=>{t&&ue.removeEventListener("mouseleave",$),k&&ue.removeEventListener("mousemove",J),ue.removeEventListener("mouseenter",J),ue.removeEventListener("mouseleave",U),ce&&(ce.removeEventListener("mouseleave",$),ce.removeEventListener("mouseenter",ae),ce.removeEventListener("mouseleave",ne))}}},[m,d,e,_,k,Z,M,G,a,t,b,y,T,R,i,z,K]),mt(()=>{var J;if(d&&t&&(J=R.current)!=null&&J.__options.blockPointerEvents&&X()){O.current=!0;const $=m.floating;if(Ke(m.domReference)&&$){var U;const ae=Vr(m.floating).body;ae.setAttribute(Wm,"");const ne=m.domReference,ue=y==null||(U=y.nodesRef.current.find(ce=>ce.id===P))==null||(U=U.context)==null?void 0:U.elements.floating;return ue&&(ue.style.pointerEvents=""),ae.style.pointerEvents="none",ne.style.pointerEvents="auto",$.style.pointerEvents="auto",()=>{ae.style.pointerEvents="",ne.style.pointerEvents="",$.style.pointerEvents=""}}}},[d,t,P,m,y,R,X]),mt(()=>{t||(I.current=void 0,Q.current=!1,M(),G())},[t,M,G]),A.useEffect(()=>()=>{M(),Kn(x),Kn(H),G()},[d,m.domReference,M,G]);const re=A.useMemo(()=>{function J(U){I.current=U.pointerType}return{onPointerDown:J,onPointerEnter:J,onMouseMove(U){const{nativeEvent:$}=U;function ae(){!w.current&&!b.current&&a(!0,$,"hover")}_&&!Eu(I.current)||t||zi(K.current)===0||Q.current&&U.movementX**2+U.movementY**2<2||(Kn(H),I.current==="touch"?ae():(Q.current=!0,H.current=window.setTimeout(ae,zi(K.current))))}}},[_,a,t,b,K]);return A.useMemo(()=>d?{reference:re}:{},[d,re])}function Xi(e,l){if(!e||!l)return!1;const t=l.getRootNode==null?void 0:l.getRootNode();if(e.contains(l))return!0;if(t&&ul(t)){let a=l;for(;a;){if(e===a)return!0;a=a.parentNode||a.host}}return!1}function Ny(e){return"composedPath"in e?e.composedPath()[0]:e.target}const Ay={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},by={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},zm=e=>{var l,t;return{escapeKey:typeof e=="boolean"?e:(l=e?.escapeKey)!=null?l:!1,outsidePress:typeof e=="boolean"?e:(t=e?.outsidePress)!=null?t:!0}};function Sy(e,l){l===void 0&&(l={});const{open:t,onOpenChange:a,elements:i,dataRef:s}=e,{enabled:m=!0,escapeKey:d=!0,outsidePress:v=!0,outsidePressEvent:f="pointerdown",referencePress:_=!1,referencePressEvent:h="pointerdown",ancestorScroll:k=!1,bubbles:y,capture:P}=l,R=Uu(),T=mr(typeof v=="function"?v:()=>!1),b=typeof v=="function"?T:v,K=A.useRef(!1),I=A.useRef(!1),{escapeKey:x,outsidePress:D}=zm(y),{escapeKey:H,outsidePress:w}=zm(P),O=A.useRef(!1),W=mr(z=>{var re;if(!t||!m||!d||z.key!=="Escape"||O.current)return;const J=(re=s.current.floatingContext)==null?void 0:re.nodeId,U=R?Ji(R.nodesRef.current,J):[];if(!x&&(z.stopPropagation(),U.length>0)){let $=!0;if(U.forEach(ae=>{var ne;if((ne=ae.context)!=null&&ne.open&&!ae.context.dataRef.current.__escapeKeyBubbles){$=!1;return}}),!$)return}a(!1,my(z)?z.nativeEvent:z,"escape-key")}),Q=mr(z=>{var re;const J=()=>{var U;W(z),(U=at(z))==null||U.removeEventListener("keydown",J)};(re=at(z))==null||re.addEventListener("keydown",J)}),X=mr(z=>{var re;const J=K.current;K.current=!1;const U=I.current;if(I.current=!1,f==="click"&&U||J||typeof b=="function"&&!b(z))return;const $=at(z),ae="["+Cu("inert")+"]",ne=Vr(i.floating).querySelectorAll(ae);let ue=Ke($)?$:null;for(;ue&&!gr(ue);){const Oe=vr(ue);if(gr(Oe)||!Ke(Oe))break;ue=Oe}if(ne.length&&Ke($)&&!uy($)&&!$t($,i.floating)&&Array.from(ne).every(Oe=>!$t(ue,Oe)))return;if(yn($)&&G){const Oe=gr($),qe=Fn($),pe=/auto|scroll/,Ne=Oe||pe.test(qe.overflowX),Xe=Oe||pe.test(qe.overflowY),He=Ne&&$.clientWidth>0&&$.scrollWidth>$.clientWidth,Ue=Xe&&$.clientHeight>0&&$.scrollHeight>$.clientHeight,Rn=qe.direction==="rtl",Be=Ue&&(Rn?z.offsetX<=$.offsetWidth-$.clientWidth:z.offsetX>$.clientWidth),Ze=He&&z.offsetY>$.clientHeight;if(Be||Ze)return}const ce=(re=s.current.floatingContext)==null?void 0:re.nodeId,En=R&&Ji(R.nodesRef.current,ce).some(Oe=>{var qe;return $i(z,(qe=Oe.context)==null?void 0:qe.elements.floating)});if($i(z,i.floating)||$i(z,i.domReference)||En)return;const je=R?Ji(R.nodesRef.current,ce):[];if(je.length>0){let Oe=!0;if(je.forEach(qe=>{var pe;if((pe=qe.context)!=null&&pe.open&&!qe.context.dataRef.current.__outsidePressBubbles){Oe=!1;return}}),!Oe)return}a(!1,z,"outside-press")}),Z=mr(z=>{var re;const J=()=>{var U;X(z),(U=at(z))==null||U.removeEventListener(f,J)};(re=at(z))==null||re.addEventListener(f,J)});A.useEffect(()=>{if(!t||!m)return;s.current.__escapeKeyBubbles=x,s.current.__outsidePressBubbles=D;let z=-1;function re(ne){a(!1,ne,"ancestor-scroll")}function J(){window.clearTimeout(z),O.current=!0}function U(){z=window.setTimeout(()=>{O.current=!1},fl()?5:0)}const $=Vr(i.floating);d&&($.addEventListener("keydown",H?Q:W,H),$.addEventListener("compositionstart",J),$.addEventListener("compositionend",U)),b&&$.addEventListener(f,w?Z:X,w);let ae=[];return k&&(Ke(i.domReference)&&(ae=Ar(i.domReference)),Ke(i.floating)&&(ae=ae.concat(Ar(i.floating))),!Ke(i.reference)&&i.reference&&i.reference.contextElement&&(ae=ae.concat(Ar(i.reference.contextElement)))),ae=ae.filter(ne=>{var ue;return ne!==((ue=$.defaultView)==null?void 0:ue.visualViewport)}),ae.forEach(ne=>{ne.addEventListener("scroll",re,{passive:!0})}),()=>{d&&($.removeEventListener("keydown",H?Q:W,H),$.removeEventListener("compositionstart",J),$.removeEventListener("compositionend",U)),b&&$.removeEventListener(f,w?Z:X,w),ae.forEach(ne=>{ne.removeEventListener("scroll",re)}),window.clearTimeout(z)}},[s,i,d,b,f,t,a,k,m,x,D,W,H,Q,X,w,Z]),A.useEffect(()=>{K.current=!1},[b,f]);const M=A.useMemo(()=>({onKeyDown:W,..._&&{[Ay[h]]:z=>{a(!1,z.nativeEvent,"reference-press")},...h!=="click"&&{onClick(z){a(!1,z.nativeEvent,"reference-press")}}}}),[W,a,_,h]),G=A.useMemo(()=>({onKeyDown:W,onMouseDown(){I.current=!0},onMouseUp(){I.current=!0},[by[f]]:()=>{K.current=!0}}),[W,f]);return A.useMemo(()=>m?{reference:M,floating:G}:{},[m,M,G])}function Iy(e){const{open:l=!1,onOpenChange:t,elements:a}=e,i=hy(),s=A.useRef({}),[m]=A.useState(()=>Ty()),d=vg()!=null,[v,f]=A.useState(a.reference),_=mr((y,P,R)=>{s.current.openEvent=y?P:void 0,m.emit("openchange",{open:y,event:P,reason:R,nested:d}),t?.(y,P,R)}),h=A.useMemo(()=>({setPositionReference:f}),[]),k=A.useMemo(()=>({reference:v||a.reference||null,floating:a.floating||null,domReference:a.reference}),[v,a.reference,a.floating]);return A.useMemo(()=>({dataRef:s,open:l,onOpenChange:_,elements:k,events:m,floatingId:i,refs:h}),[l,_,k,m,i,h])}function Ly(e){e===void 0&&(e={});const{nodeId:l}=e,t=Iy({...e,elements:{reference:null,floating:null,...e.elements}}),a=e.rootContext||t,i=a.elements,[s,m]=A.useState(null),[d,v]=A.useState(null),_=i?.domReference||s,h=A.useRef(null),k=Uu();mt(()=>{_&&(h.current=_)},[_]);const y=jk({...e,elements:{...i,...d&&{reference:d}}}),P=A.useCallback(I=>{const x=Ke(I)?{getBoundingClientRect:()=>I.getBoundingClientRect(),getClientRects:()=>I.getClientRects(),contextElement:I}:I;v(x),y.refs.setReference(x)},[y.refs]),R=A.useCallback(I=>{(Ke(I)||I===null)&&(h.current=I,m(I)),(Ke(y.refs.reference.current)||y.refs.reference.current===null||I!==null&&!Ke(I))&&y.refs.setReference(I)},[y.refs]),T=A.useMemo(()=>({...y.refs,setReference:R,setPositionReference:P,domReference:h}),[y.refs,R,P]),b=A.useMemo(()=>({...y.elements,domReference:_}),[y.elements,_]),K=A.useMemo(()=>({...y,...a,refs:T,elements:b,nodeId:l}),[y,T,b,l,a]);return mt(()=>{a.dataRef.current.floatingContext=K;const I=k?.nodesRef.current.find(x=>x.id===l);I&&(I.context=K)}),A.useMemo(()=>({...y,context:K,refs:T,elements:b}),[y,T,b,K])}function Zi(){return ay()&&ty()}function Dy(e,l){l===void 0&&(l={});const{open:t,onOpenChange:a,events:i,dataRef:s,elements:m}=e,{enabled:d=!0,visibleOnly:v=!0}=l,f=A.useRef(!1),_=A.useRef(-1),h=A.useRef(!0);A.useEffect(()=>{if(!d)return;const y=vn(m.domReference);function P(){!t&&yn(m.domReference)&&m.domReference===Um(Vr(m.domReference))&&(f.current=!0)}function R(){h.current=!0}function T(){h.current=!1}return y.addEventListener("blur",P),Zi()&&(y.addEventListener("keydown",R,!0),y.addEventListener("pointerdown",T,!0)),()=>{y.removeEventListener("blur",P),Zi()&&(y.removeEventListener("keydown",R,!0),y.removeEventListener("pointerdown",T,!0))}},[m.domReference,t,d]),A.useEffect(()=>{if(!d)return;function y(P){let{reason:R}=P;(R==="reference-press"||R==="escape-key")&&(f.current=!0)}return i.on("openchange",y),()=>{i.off("openchange",y)}},[i,d]),A.useEffect(()=>()=>{Kn(_)},[]);const k=A.useMemo(()=>({onMouseLeave(){f.current=!1},onFocus(y){if(f.current)return;const P=at(y.nativeEvent);if(v&&Ke(P)){if(Zi()&&!y.relatedTarget){if(!h.current&&!sy(P))return}else if(!oy(P))return}a(!0,y.nativeEvent,"focus")},onBlur(y){f.current=!1;const P=y.relatedTarget,R=y.nativeEvent,T=Ke(P)&&P.hasAttribute(Cu("focus-guard"))&&P.getAttribute("data-type")==="outside";_.current=window.setTimeout(()=>{var b;const K=Um(m.domReference?m.domReference.ownerDocument:document);!P&&K===m.domReference||$t((b=s.current.floatingContext)==null?void 0:b.refs.floating.current,K)||$t(m.domReference,K)||T||a(!1,R,"focus")})}}),[s,m.domReference,a,v]);return A.useMemo(()=>d?{reference:k}:{},[d,k])}function Qi(e,l,t){const a=new Map,i=t==="item";let s=e;if(i&&e){const{[Cm]:m,[Ym]:d,...v}=e;s=v}return{...t==="floating"&&{tabIndex:-1,[Ey]:""},...s,...l.map(m=>{const d=m?m[t]:null;return typeof d=="function"?e?d(e):null:d}).concat(e).reduce((m,d)=>(d&&Object.entries(d).forEach(v=>{let[f,_]=v;if(!(i&&[Cm,Ym].includes(f)))if(f.indexOf("on")===0){if(a.has(f)||a.set(f,[]),typeof _=="function"){var h;(h=a.get(f))==null||h.push(_),m[f]=function(){for(var k,y=arguments.length,P=new Array(y),R=0;R<y;R++)P[R]=arguments[R];return(k=a.get(f))==null?void 0:k.map(T=>T(...P)).find(T=>T!==void 0)}}}else m[f]=_}),m),{})}}function Py(e){e===void 0&&(e=[]);const l=e.map(d=>d?.reference),t=e.map(d=>d?.floating),a=e.map(d=>d?.item),i=A.useCallback(d=>Qi(d,e,"reference"),l),s=A.useCallback(d=>Qi(d,e,"floating"),t),m=A.useCallback(d=>Qi(d,e,"item"),a);return A.useMemo(()=>({getReferenceProps:i,getFloatingProps:s,getItemProps:m}),[i,s,m])}function Ky(e,l,t){t===void 0&&(t=!0);let a=e.filter(s=>{var m;return s.parentId===l&&((m=s.context)==null?void 0:m.open)}),i=a;for(;i.length;)i=t?e.filter(s=>{var m;return(m=i)==null?void 0:m.some(d=>{var v;return s.parentId===d.id&&((v=s.context)==null?void 0:v.open)})}):e,a=a.concat(i);return a}function Xm(e,l){const[t,a]=e;let i=!1;const s=l.length;for(let m=0,d=s-1;m<s;d=m++){const[v,f]=l[m]||[0,0],[_,h]=l[d]||[0,0];f>=a!=h>=a&&t<=(_-v)*(a-f)/(h-f)+v&&(i=!i)}return i}function Fy(e,l){return e[0]>=l.x&&e[0]<=l.x+l.width&&e[1]>=l.y&&e[1]<=l.y+l.height}function wy(e){e===void 0&&(e={});const{buffer:l=.5,blockPointerEvents:t=!1,requireIntent:a=!0}=e;let i,s=!1,m=null,d=null,v=performance.now();function f(h,k){const y=performance.now(),P=y-v;if(m===null||d===null||P===0)return m=h,d=k,v=y,null;const R=h-m,T=k-d,K=Math.sqrt(R*R+T*T)/P;return m=h,d=k,v=y,K}const _=h=>{let{x:k,y,placement:P,elements:R,onClose:T,nodeId:b,tree:K}=h;return function(x){function D(){clearTimeout(i),T()}if(clearTimeout(i),!R.domReference||!R.floating||P==null||k==null||y==null)return;const{clientX:H,clientY:w}=x,O=[H,w],W=Ny(x),Q=x.type==="mouseleave",X=Xi(R.floating,W),Z=Xi(R.domReference,W),M=R.domReference.getBoundingClientRect(),G=R.floating.getBoundingClientRect(),z=P.split("-")[0],re=k>G.right-G.width/2,J=y>G.bottom-G.height/2,U=Fy(O,M),$=G.width>M.width,ae=G.height>M.height,ne=($?M:G).left,ue=($?M:G).right,ce=(ae?M:G).top,En=(ae?M:G).bottom;if(X&&(s=!0,!Q))return;if(Z&&(s=!1),Z&&!Q){s=!0;return}if(Q&&Ke(x.relatedTarget)&&Xi(R.floating,x.relatedTarget)||K&&Ky(K.nodesRef.current,b).some(qe=>{let{context:pe}=qe;return pe?.open}))return;if(z==="top"&&y>=M.bottom-1||z==="bottom"&&y<=M.top+1||z==="left"&&k>=M.right-1||z==="right"&&k<=M.left+1)return D();let je=[];switch(z){case"top":je=[[ne,M.top+1],[ne,G.bottom-1],[ue,G.bottom-1],[ue,M.top+1]];break;case"bottom":je=[[ne,G.top+1],[ne,M.bottom-1],[ue,M.bottom-1],[ue,G.top+1]];break;case"left":je=[[G.right-1,En],[G.right-1,ce],[M.left+1,ce],[M.left+1,En]];break;case"right":je=[[M.right-1,En],[M.right-1,ce],[G.left+1,ce],[G.left+1,En]];break}function Oe(qe){let[pe,Ne]=qe;switch(z){case"top":{const Xe=[$?pe+l/2:re?pe+l*4:pe-l*4,Ne+l+1],He=[$?pe-l/2:re?pe+l*4:pe-l*4,Ne+l+1],Ue=[[G.left,re||$?G.bottom-l:G.top],[G.right,re?$?G.bottom-l:G.top:G.bottom-l]];return[Xe,He,...Ue]}case"bottom":{const Xe=[$?pe+l/2:re?pe+l*4:pe-l*4,Ne-l],He=[$?pe-l/2:re?pe+l*4:pe-l*4,Ne-l],Ue=[[G.left,re||$?G.top+l:G.bottom],[G.right,re?$?G.top+l:G.bottom:G.top+l]];return[Xe,He,...Ue]}case"left":{const Xe=[pe+l+1,ae?Ne+l/2:J?Ne+l*4:Ne-l*4],He=[pe+l+1,ae?Ne-l/2:J?Ne+l*4:Ne-l*4];return[...[[J||ae?G.right-l:G.left,G.top],[J?ae?G.right-l:G.left:G.right-l,G.bottom]],Xe,He]}case"right":{const Xe=[pe-l,ae?Ne+l/2:J?Ne+l*4:Ne-l*4],He=[pe-l,ae?Ne-l/2:J?Ne+l*4:Ne-l*4],Ue=[[J||ae?G.left+l:G.right,G.top],[J?ae?G.left+l:G.right:G.left+l,G.bottom]];return[Xe,He,...Ue]}}}if(!Xm([H,w],je)){if(s&&!U)return D();if(!Q&&a){const qe=f(x.clientX,x.clientY);if(qe!==null&&qe<.1)return D()}Xm([H,w],Oe([k,y]))?!s&&a&&(i=window.setTimeout(D,40)):D()}}};return _.__options={blockPointerEvents:t},_}var Oy=function(e,l){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&l.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)l.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]]);return t};const Gy=A.forwardRef((e,l)=>{var{className:t,header:a,children:i,open:s,defaultOpen:m=!1,onClick:d,size:v="medium",onOpenChange:f}=e,_=Oy(e,["className","header","children","open","defaultOpen","onClick","size","onOpenChange"]);const{cn:h}=Le(),[k,y]=Bu({defaultValue:m,value:s,onChange:f}),P=v==="small"?"small":"medium";return C.createElement("div",{className:h("navds-read-more",`navds-read-more--${v}`,t,{"navds-read-more--open":k}),"data-volume":"low"},C.createElement("button",Object.assign({},_,{ref:l,type:"button",className:h("navds-read-more__button","navds-body-short",{"navds-body-short--small":v==="small"}),onClick:gl(d,()=>y(R=>!R)),"aria-expanded":k,"data-state":k?"open":"closed"}),C.createElement(Zd,{className:h("navds-read-more__expand-icon"),"aria-hidden":!0}),C.createElement("span",null,a)),C.createElement(tl,{as:"div","aria-hidden":!k,className:h("navds-read-more__content",{"navds-read-more__content--closed":!k}),size:P,"data-state":k?"open":"closed"},i))}),By=A.createContext(null),Vy=(e,l)=>{var t,a,i;const{size:s,error:m,errorId:d}=e,v=A.useContext(By),f=dl(),_=(t=e.id)!==null&&t!==void 0?t:`${l}-${f}`,h=d??`${l}-error-${f}`,k=`${l}-description-${f}`,y=v?.disabled||e.disabled,P=(v?.readOnly||e.readOnly)&&!y||void 0,R=!y&&!P&&!!(m||v?.error),T=!y&&!P&&!!m&&typeof m!="boolean",b=Object.assign({},R?{"aria-invalid":!0}:{});return e?.required,{showErrorMsg:T,hasError:R,errorId:h,inputDescriptionId:k,size:(a=s??v?.size)!==null&&a!==void 0?a:"medium",readOnly:P,inputProps:Object.assign(Object.assign({id:_},b),{"aria-describedby":Ud(e["aria-describedby"],{[k]:e.description&&!fu(e.description),[h]:T,[(i=v?.errorId)!==null&&i!==void 0?i:""]:R&&v?.error})||void 0,disabled:y})}};function fu(e,l=!0){if(C.isValidElement(e)){if(e.type===Gy)return!0;if(e.props.children&&l)return fu(e.props.children,!1)}else if(Array.isArray(e))return e.some(t=>fu(t,l));return!1}function ze(e,l,t,a){return a?typeof a=="string"?{[`--__${e}c-${l}-${t}-xs`]:a}:Object.fromEntries(Object.entries(a).map(([i,s])=>[`--__${e}c-${l}-${t}-${i}`,s])):{}}const My={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},Zm=(e,l,t,a,i,s)=>l.split(" ").map((m,d,v)=>{var f;if(e==="margin-inline"&&m==="full")return`calc((100vw - ${100/v.length}%)/-2)`;if(e==="padding-inline"&&m==="full")return`calc((100vw - ${100/v.length}%)/2)`;if(["mi","mb"].includes(e)&&m==="auto")return"auto";let _=`var(--${s}-${t}-${m})`;if(a.includes(m))_=m==="px"?"1px":m;else if(m.startsWith("space"))_=`var(--${s}-${m})`;else{const h=`--${s}-spacing-${m}`;_=`var(${(f=My[h])!==null&&f!==void 0?f:h})`}return i?m==="0"?"0":`calc(-1 * ${_})`:_}).join(" ");function kn(e,l,t,a,i,s=!1,m=[]){if(!i)return{};if(typeof i=="string")return{[`--__${e}c-${l}-${t}-xs`]:Zm(t,i,a,m,s,e)};const d={};return Object.entries(i).forEach(([v,f])=>{d[`--__${e}c-${l}-${t}-${v}`]=Zm(t,f,a,m,s,e)}),d}const Eg=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],fg=({children:e,className:l,padding:t,paddingInline:a,paddingBlock:i,margin:s,marginInline:m,marginBlock:d,width:v,minWidth:f,maxWidth:_,height:h,minHeight:k,maxHeight:y,position:P,inset:R,top:T,right:b,left:K,bottom:I,overflow:x,overflowX:D,overflowY:H,flexBasis:w,flexGrow:O,flexShrink:W,gridColumn:Q})=>{const X=gt(!1),{cn:Z}=Le(),M=X?"ax":"a",G=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},kn(M,"r","p","spacing",t)),kn(M,"r","pi","spacing",a)),kn(M,"r","pb","spacing",i)),kn(M,"r","m","spacing",s)),kn(M,"r","mi","spacing",m)),kn(M,"r","mb","spacing",d)),ze(M,"r","w",v)),ze(M,"r","minw",f)),ze(M,"r","maxw",_)),ze(M,"r","h",h)),ze(M,"r","minh",k)),ze(M,"r","maxh",y)),ze(M,"r","position",P)),kn(M,"r","inset","spacing",R)),kn(M,"r","top","spacing",T)),kn(M,"r","right","spacing",b)),kn(M,"r","bottom","spacing",I)),kn(M,"r","left","spacing",K)),ze(M,"r","overflow",x)),ze(M,"r","overflowx",D)),ze(M,"r","overflowy",H)),ze(M,"r","flex-basis",w)),ze(M,"r","flex-grow",O)),ze(M,"r","flex-shrink",W)),ze(M,"r","grid-column",Q));return C.createElement(Wt,{className:Z({className:l,"navds-r-p":t,"navds-r-pi":a,"navds-r-pb":i,"navds-r-m":s,"navds-r-mi":m,"navds-r-mb":d,"navds-r-w":v,"navds-r-minw":f,"navds-r-maxw":_,"navds-r-h":h,"navds-r-minh":k,"navds-r-maxh":y,"navds-r-position":P,"navds-r-inset":R,"navds-r-top":T,"navds-r-right":b,"navds-r-bottom":I,"navds-r-left":K,"navds-r-overflow":x,"navds-r-overflowx":D,"navds-r-overflowy":H,"navds-r-flex-basis":w,"navds-r-flex-grow":O,"navds-r-flex-shrink":W,"navds-r-grid-column":Q}),style:G},e)};var jy=function(e,l){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&l.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)l.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]]);return t};const qy=A.forwardRef((e,l)=>{var{children:t,className:a,as:i="div",columns:s,gap:m,style:d,align:v,asChild:f}=e,_=jy(e,["children","className","as","columns","gap","style","align","asChild"]);const k=gt(!1)?"ax":"a",{cn:y}=Le(),P=Object.assign(Object.assign(Object.assign(Object.assign({},d),{[`--__${k}c-hgrid-align`]:v}),kn(k,"hgrid","gap","spacing",m)),ze(k,"hgrid","columns",Hy(s))),R=f?Wt:i;return C.createElement(fg,Object.assign({},_),C.createElement(R,Object.assign({},zt(_,Eg),{ref:l,className:y("navds-hgrid",a,{"navds-hgrid-gap":m,"navds-hgrid-align":v}),style:P}),t))});function Hy(e){return e?typeof e=="string"||typeof e=="number"?Qm(e):Object.fromEntries(Object.entries(e).map(([l,t])=>[l,Qm(t)])):{}}const Qm=e=>typeof e=="number"?`repeat(${e}, minmax(0, 1fr))`:e;var xy=function(e,l){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&l.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)l.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]]);return t};const cg=A.forwardRef((e,l)=>{var{children:t,className:a,as:i="div",align:s,justify:m,wrap:d=!0,gap:v,style:f,direction:_="row",asChild:h}=e,k=xy(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const P=gt(!1)?"ax":"a",{cn:R}=Le(),T=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},f),kn(P,"stack","gap","spacing",v)),ze(P,"stack","direction",_)),ze(P,"stack","align",s)),ze(P,"stack","justify",m)),b=h?Wt:i;return C.createElement(fg,Object.assign({},k),C.createElement(b,Object.assign({},zt(k,Eg),{ref:l,style:T,className:R("navds-stack",a,{"navds-vstack":_==="column","navds-hstack":_==="row","navds-stack-gap":v,"navds-stack-align":s,"navds-stack-justify":m,"navds-stack-direction":_,"navds-stack-wrap":d})}),t))});var Uy=function(e,l){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&l.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)l.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]]);return t};const it=A.forwardRef((e,l)=>{var{as:t="div"}=e,a=Uy(e,["as"]);return C.createElement(cg,Object.assign({as:t},a,{ref:l,direction:"row"}))});var Cy=function(e,l){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&l.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)l.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]]);return t};const pl=A.forwardRef((e,l)=>{var{as:t="div"}=e,a=Cy(e,["as"]);return C.createElement(cg,Object.assign({as:t},a,{ref:l,direction:"column",wrap:!1}))}),nl=A.createContext({listType:"ul",size:"medium"});var Yy=function(e,l){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&l.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)l.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]]);return t};const _g=A.forwardRef((e,l)=>{var{className:t,children:a,title:i,icon:s}=e,m=Yy(e,["className","children","title","icon"]);const{listType:d,size:v}=A.useContext(nl),{cn:f}=Le();return d==="ol"&&s&&console.warn("<List />: Icon prop is not supported for ordered lists. Please remove the icon prop."),C.createElement("li",Object.assign({},m,{ref:l,className:f("navds-list__item",t)}),d==="ul"&&C.createElement("div",{className:f("navds-list__item-marker",{"navds-list__item-marker--icon":s,"navds-list__item-marker--bullet":!s})},s||C.createElement("svg",{width:"0.375rem",height:"0.375rem",viewBox:"0 0 6 6",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,focusable:!1,role:"img"},C.createElement("rect",{width:"6",height:"6",rx:"3",fill:"currentColor"}))),C.createElement("div",null,i&&C.createElement(tl,{as:"p",size:v,weight:"semibold"},i),a))});_g.displayName="List.Item";var $y=function(e,l){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&l.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)l.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]]);return t};const Jy={small:"xsmall",medium:"small",large:"medium"},cu=A.forwardRef((e,l)=>{var{children:t,className:a,as:i="ul",title:s,description:m,headingTag:d,size:v,"aria-label":f,"aria-labelledby":_}=e,h=$y(e,["children","className","as","title","description","headingTag","size","aria-label","aria-labelledby"]);const{size:k}=A.useContext(nl),{cn:y}=Le(),P=gt(!1),R=v??k;return P?C.createElement(nl.Provider,{value:{listType:i,size:R}},C.createElement(tl,Object.assign({as:"div"},h,{size:R,ref:l,className:y("navds-list",`navds-list--${R}`,a)}),C.createElement(i,{role:"list","aria-label":f,"aria-labelledby":_},t))):C.createElement(nl.Provider,{value:{listType:i,size:R}},C.createElement(tl,Object.assign({as:"div"},h,{size:R,ref:l,className:y("navds-list",`navds-list--${R}`,a)}),s&&C.createElement(Xd,{size:Jy[R],as:d??"h3"},s),m&&C.createElement(ml,{size:R},m),C.createElement(i,{role:"list","aria-label":f,"aria-labelledby":_},t)))});cu.Item=_g;var Wy=function(e,l){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&l.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)l.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]]);return t};const zy=A.forwardRef((e,l)=>{var{className:t}=e,a=Wy(e,["className"]);const{cn:i}=Le();return C.createElement("tbody",Object.assign({},a,{ref:l,className:i("navds-table__body",t)}))});var Xy=function(e,l){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&l.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)l.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]]);return t};const pg=A.forwardRef((e,l)=>{var{className:t,children:a,align:i,textSize:s}=e,m=Xy(e,["className","children","align","textSize"]);const{cn:d}=Le();return C.createElement("th",Object.assign({ref:l,className:d("navds-table__header-cell","navds-label",t,{[`navds-table__header-cell--align-${i}`]:i,"navds-label--small":s==="small"})},m),a)}),hg=A.createContext(null);var Zy=function(e,l){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&l.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)l.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]]);return t};const Qy=A.forwardRef((e,l)=>{var t,a,i,s,{className:m,children:d,sortable:v=!1,sortKey:f}=e,_=Zy(e,["className","children","sortable","sortKey"]);const h=A.useContext(hg),{cn:k}=Le();return v&&!f&&console.warn("ColumnHeader with `sortable=true` must have a sortKey."),C.createElement(pg,Object.assign({scope:"col",ref:l,className:k(m),"aria-sort":v?((t=h?.sort)===null||t===void 0?void 0:t.orderBy)===f?(a=h?.sort)===null||a===void 0?void 0:a.direction:"none":void 0},_),v?C.createElement("button",{type:"button",className:k("navds-table__sort-button"),onClick:v&&f?()=>{var y;return(y=h?.onSortChange)===null||y===void 0?void 0:y.call(h,f)}:void 0},d,((i=h?.sort)===null||i===void 0?void 0:i.orderBy)===f?((s=h?.sort)===null||s===void 0?void 0:s.direction)==="descending"?C.createElement(hT,{"aria-hidden":!0}):C.createElement(kT,{"aria-hidden":!0}):C.createElement(gT,{"aria-hidden":!0})):d)});var eR=function(e,l){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&l.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)l.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]]);return t};const Tg=A.forwardRef((e,l)=>{var{className:t,children:a="",align:i,textSize:s}=e,m=eR(e,["className","children","align","textSize"]);const{cn:d}=Le();return C.createElement(ml,Object.assign({as:"td",ref:l,className:d("navds-table__data-cell",t,{[`navds-table__data-cell--align-${i}`]:i}),size:s},m),a)});var nR=function(e,l){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&l.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)l.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]]);return t};const rR=globalThis?.matchMedia?globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches:!1;function tR(e){const l=parseFloat(e);return!Number.isNaN(l)&&Number.isFinite(l)}function ed(e){return typeof e=="string"&&e[e.length-1]==="%"&&tR(e.substring(0,e.length-1))}function eu(e,l){l===0&&e?.style&&(e.style.display="none")}function aR(e,l){l===0&&e?.style&&(e.style.display="")}const lR=e=>{var{children:l,className:t,innerClassName:a,duration:i=250,easing:s="ease",height:m}=e,d=nR(e,["children","className","innerClassName","duration","easing","height"]);const{cn:v}=Le(),f=A.useRef(m),_=A.useRef(null),h=A.useRef(),k=A.useRef(),y=A.useRef(m),P=A.useRef("visible"),R=rR?0:i;typeof y.current=="number"?(typeof m!="string"&&(y.current=m<0?0:m),P.current="hidden"):ed(y.current)&&(y.current=m==="0%"?0:m,P.current="hidden");const[T,b]=A.useState(y.current),[K,I]=A.useState(P.current),[x,D]=A.useState(!1);A.useEffect(()=>{eu(_.current,y.current)},[]),A.useEffect(()=>{if(m!==f.current&&_.current){aR(_.current,f.current),_.current.style.overflow="hidden";const W=_.current.offsetHeight;_.current.style.overflow="";const Q=R;let X,Z,M="hidden",G;const z=f.current==="auto";typeof m=="number"?(X=m<0?0:m,Z=X):ed(m)?(X=m==="0%"?0:m,Z=X):(X=W,Z="auto",M=void 0),z&&(Z=X,X=W),b(X),I("hidden"),D(!z),clearTimeout(k.current),clearTimeout(h.current),z?(G=!0,k.current=setTimeout(()=>{b(Z),I(M),D(G)},50),h.current=setTimeout(()=>{D(!1),eu(_.current,Z)},Q)):k.current=setTimeout(()=>{b(Z),I(M),D(!1),m!=="auto"&&eu(_.current,X)},Q)}return f.current=m,()=>{clearTimeout(k.current),clearTimeout(h.current)}},[m]);const H={height:T,overflow:K};x&&(H.transition=`height ${R}ms ${s} 0ms`,H.WebkitTransition=H.transition);const O=typeof d["aria-hidden"]<"u"?d["aria-hidden"]:m===0;return C.createElement("div",Object.assign({},d,{className:v(t),style:H}),C.createElement("div",{"aria-hidden":O,className:v(a),ref:_},l))};var iR=function(e,l){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&l.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)l.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]]);return t};const kg=A.forwardRef((e,l)=>{var{className:t,selected:a=!1,shadeOnHover:i=!0}=e,s=iR(e,["className","selected","shadeOnHover"]);const{cn:m}=Le();return C.createElement("tr",Object.assign({},s,{ref:l,className:m("navds-table__row",t,{"navds-table__row--selected":a,"navds-table__row--shade-on-hover":i})}))});var uR=function(e,l){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&l.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)l.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]]);return t};const sR=A.forwardRef((e,l)=>{var{className:t,children:a,content:i,togglePlacement:s="left",defaultOpen:m=!1,open:d,onOpenChange:v,expansionDisabled:f=!1,expandOnRowClick:_=!1,colSpan:h=999,contentGutter:k,onClick:y}=e,P=uR(e,["className","children","content","togglePlacement","defaultOpen","open","onOpenChange","expansionDisabled","expandOnRowClick","colSpan","contentGutter","onClick"]);const{cn:R}=Le(),[T,b]=Bu({defaultValue:m,value:d,onChange:v}),K=_l("global"),I=dl(),x=H=>{b(w=>!w),H.stopPropagation()},D=H=>{_&&!f&&!yg(H.target)&&x(H)};return C.createElement(C.Fragment,null,C.createElement(kg,Object.assign({},P,{ref:l,className:R("navds-table__expandable-row",t,{"navds-table__expandable-row--open":T,"navds-table__expandable-row--expansion-disabled":f,"navds-table__expandable-row--clickable":_}),onClick:gl(y,D)}),s==="right"&&a,C.createElement(Tg,{className:R("navds-table__toggle-expand-cell",{"navds-table__toggle-expand-cell--open":T}),onClick:f?()=>null:x},!f&&C.createElement("button",{className:R("navds-table__toggle-expand-button"),type:"button","aria-controls":I,"aria-expanded":T,onClick:x},C.createElement(Zd,{className:R("navds-table__expandable-icon"),title:K(T?"showLess":"showMore")}))),s==="left"&&a),C.createElement("tr",{"data-state":T?"open":"closed",className:R("navds-table__expanded-row"),"aria-hidden":!T,id:I},C.createElement("td",{colSpan:h,className:R("navds-table__expanded-row-cell")},C.createElement(lR,{className:R("navds-table__expanded-row-collapse"),innerClassName:R(`navds-table__expanded-row-content navds-table__expanded-row-content--gutter-${k??s}`),height:T?"auto":0,duration:150,easing:"cubic-bezier(0.39,0.57,0.56,1)"},i))))});function yg(e){return e.nodeName==="TD"||e.nodeName==="TH"||!e.parentElement?!1:["BUTTON","DETAILS","LABEL","SELECT","TEXTAREA","INPUT","A"].includes(e.nodeName)?!0:yg(e.parentElement)}var oR=function(e,l){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&l.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)l.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]]);return t};const mR=A.forwardRef((e,l)=>{var{className:t}=e,a=oR(e,["className"]);const{cn:i}=Le();return C.createElement("thead",Object.assign({},a,{ref:l,className:i("navds-table__header",t)}))});var dR=function(e,l){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&l.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)l.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]]);return t};const Me=A.forwardRef((e,l)=>{var{className:t,zebraStripes:a=!1,size:i="medium",onSortChange:s,sort:m,stickyHeader:d=!1}=e,v=dR(e,["className","zebraStripes","size","onSortChange","sort","stickyHeader"]);const{cn:f}=Le();return C.createElement(hg.Provider,{value:{onSortChange:s,sort:m}},C.createElement("table",Object.assign({},v,{ref:l,className:f("navds-table",`navds-table--${i}`,t,{"navds-table--zebra-stripes":a,"navds-table--sticky-header":d})})))});Me.Header=mR;Me.Body=zy;Me.Row=kg;Me.ColumnHeader=Qy;Me.HeaderCell=pg;Me.DataCell=Tg;Me.ExpandableRow=sR;var gR=function(e,l){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&l.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)l.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]]);return t};const vR=A.forwardRef((e,l)=>{var{children:t,className:a,arrow:i=!0,placement:s="top",open:m,defaultOpen:d=!1,onOpenChange:v,offset:f,content:_,delay:h=150,id:k,keys:y,maxChar:P=80,describesChild:R=!1}=e,T=gR(e,["children","className","arrow","placement","open","defaultOpen","onOpenChange","offset","content","delay","id","keys","maxChar","describesChild"]);const{cn:b}=Le(),[K,I]=Bu({defaultValue:d,value:m,onChange:v}),x=A.useRef(null),D=RT(!1),H=D?D.ref.current:void 0,{x:w,y:O,strategy:W,context:Q,placement:X,middlewareData:{arrow:{x:Z,y:M}={},hide:{referenceHidden:G}={}},refs:z}=Ly({placement:s,open:K,onOpenChange:ne=>I(ne),middleware:[Hk(f??(i?8:4)),xk(),Uk({padding:5,fallbackPlacements:["bottom","top"]}),Ck({element:x,padding:5})],whileElementsMounted:D?(ne,ue,ce)=>jm(ne,ue,ce,{animationFrame:!0}):jm,strategy:D?"fixed":void 0}),{getReferenceProps:re,getFloatingProps:J}=Py([Ry(Q,{handleClose:wy(),restMs:h}),Dy(Q),Sy(Q)]),U=dl(k),$=Yd(l,z.setFloating);if(!t||t?.type===C.Fragment||t===C.Fragment)return console.error("<Tooltip> children needs to be a single ReactElement and not: <React.Fragment/> | <></>"),null;_?.length>P&&K&&console.warn(`Because of strict accessibility concers we encourage all Tooltips to have less than 80 characters. Can be overwritten with the maxChar-prop

Length:${_.length}
Tooltip-content: ${_}`);const ae=R?K?{"aria-describedby":U}:{title:_}:{"aria-label":_};return C.createElement(C.Fragment,null,C.createElement(Wt,Object.assign({ref:z.setReference},re(),ae,{"aria-keyshortcuts":y?y.join("+"):void 0}),t),C.createElement(lk,{rootElement:H,asChild:!0},K&&C.createElement("div",Object.assign({},J(Object.assign(Object.assign({},T),{ref:$,style:{position:W,top:O??0,left:w??0,visibility:G?"hidden":"visible"},role:"tooltip",id:U,className:b("navds-tooltip","navds-detail navds-detail--small",a)})),{"data-side":X,"data-state":"open"}),_,y&&C.createElement("span",{className:b("navds-tooltip__keys"),"aria-hidden":!0},y.map(ne=>C.createElement(nT,{as:"kbd",key:ne,className:b("navds-tooltip__key")},ne))),i&&C.createElement("div",{ref:ne=>{x.current=ne},className:b("navds-tooltip__arrow"),style:{left:Z!=null?`${Z}px`:"",top:M!=null?`${M}px`:"",right:"",bottom:"",[{top:"bottom",right:"left",bottom:"top",left:"right"}[X]]:"-3.5px"}}))))}),Rg=A.createContext(null);var ER=function(e,l){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&l.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)l.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]]);return t};const Ng=A.forwardRef((e,l)=>{var t,{className:a,children:i,disabled:s,onClick:m}=e,d=ER(e,["className","children","disabled","onClick"]);const{cn:v}=Le(),f=_l("Search"),_=A.useContext(Rg);if(_===null)return console.warn("<Search.Button> has to be wrapped in <Search />"),null;const{size:h,variant:k,handleClick:y}=_;return C.createElement(xu,Object.assign({type:"submit"},d,{ref:l,size:h,variant:k==="secondary"?"secondary":"primary",className:v("navds-search__button-search",a),disabled:(t=_?.disabled)!==null&&t!==void 0?t:s,onClick:gl(m,y),icon:C.createElement(Qd,Object.assign({},i?{"aria-hidden":!0}:{title:f("search")}))}),i)});var fR=function(e,l){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&l.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)l.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]]);return t};const _u=A.forwardRef((e,l)=>{const{inputProps:t,size:a="medium",inputDescriptionId:i,errorId:s,showErrorMsg:m,hasError:d}=Vy(e,"searchfield"),{className:v,hideLabel:f=!0,label:_,description:h,value:k,clearButtonLabel:y,onClear:P,clearButton:R=!0,children:T,variant:b="primary",defaultValue:K,onChange:I,onSearchClick:x,htmlSize:D,"data-color":H}=e,w=fR(e,["className","hideLabel","label","description","value","clearButtonLabel","onClear","clearButton","children","variant","defaultValue","onChange","onSearchClick","htmlSize","data-color"]),{cn:O}=Le(),W=A.useRef(null),Q=Yd(W,l),[X,Z]=A.useState(K??""),M=J=>{k===void 0&&Z(J),I?.(J)},G=J=>{var U,$;P?.(J),M(""),($=(U=W.current)===null||U===void 0?void 0:U.focus)===null||$===void 0||$.call(U)},z=()=>{x?.(`${k??X}`)},re=R&&!t.disabled&&(k??X);return C.createElement("div",{onKeyDown:J=>{var U;J.key==="Escape"&&(!((U=W.current)===null||U===void 0)&&U.value&&J.preventDefault(),G({trigger:"Escape",event:J}))},className:O(v,"navds-form-field",`navds-form-field--${a}`,"navds-search",{"navds-search--error":d,"navds-search--disabled":t.disabled,"navds-search--with-size":D}),"data-color":H},C.createElement(Gu,{htmlFor:t.id,size:a,className:O("navds-form-field__label",{"navds-sr-only":f})},_),!!h&&C.createElement(ml,{className:O("navds-form-field__description",{"navds-sr-only":f}),id:i,size:a,as:"div"},h),C.createElement("div",{className:O("navds-search__wrapper")},C.createElement("div",{className:O("navds-search__wrapper-inner")},b==="simple"&&C.createElement(Qd,{"aria-hidden":!0,className:O("navds-search__search-icon")}),C.createElement("input",Object.assign({ref:Q},zt(w,["error","errorId","size","readOnly"]),t,{value:k??X,onChange:J=>M(J.target.value),type:"search",className:O(v,"navds-search__input",`navds-search__input--${b}`,"navds-text-field__input","navds-body-short",`navds-body-short--${a}`)},D?{size:Number(D)}:{})),re&&C.createElement(cR,{handleClear:G,size:a,clearButtonLabel:y})),C.createElement(Rg.Provider,{value:{size:a,disabled:t.disabled,variant:b,handleClick:z}},T||b!=="simple"&&C.createElement(Ng,{"data-color":H}))),C.createElement("div",{className:O("navds-form-field__error"),id:s,"aria-relevant":"additions removals","aria-live":"polite"},m&&C.createElement(tT,{size:a,showIcon:!0},e.error)))});function cR({size:e,clearButtonLabel:l,handleClear:t}){const{cn:a}=Le(),i=gt(!1),s=_l("Search");return i?C.createElement(xu,{className:a("navds-search__button-clear"),variant:"tertiary","data-color":"neutral",size:e==="medium"?"small":"xsmall",icon:C.createElement(Gm,{"aria-hidden":!0}),title:l||s("clear"),onClick:m=>t({trigger:"Click",event:m}),type:"button"}):C.createElement("button",{type:"button",onClick:m=>t({trigger:"Click",event:m}),className:a("navds-search__button-clear")},C.createElement("span",{className:a("navds-sr-only")},l||s("clear")),C.createElement(Gm,{"aria-hidden":!0}))}_u.Button=Ng;function _R(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var nd={exports:{}},Vt={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rd;function pR(){if(rd)return Vt;rd=1;var e=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function t(a,i,s){var m=null;if(s!==void 0&&(m=""+s),i.key!==void 0&&(m=""+i.key),"key"in i){s={};for(var d in i)d!=="key"&&(s[d]=i[d])}else s=i;return i=s.ref,{$$typeof:e,type:a,key:m,ref:i!==void 0?i:null,props:s}}return Vt.Fragment=l,Vt.jsx=t,Vt.jsxs=t,Vt}var td;function hR(){return td||(td=1,nd.exports=pR()),nd.exports}var br=hR();const ea={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"};jn(ea);var ad={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var ld;function TR(){return ld||(ld=1,function(e){(function(){var l={}.hasOwnProperty;function t(){for(var s="",m=0;m<arguments.length;m++){var d=arguments[m];d&&(s=i(s,a.call(this,d)))}return s}function a(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return t.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var m="";for(var d in s)l.call(s,d)&&s[d]&&(m=i(m,this&&this[d]||d));return m}function i(s,m){return m?s?s+" "+m:s+m:s}e.exports?(t.default=t,e.exports=t):window.classNames=t})()}(ad)),ad.exports}var kR=TR();const Yu=_R(kR),yR="_borderbox_1a0x6_1",RR="_error_1a0x6_5",NR="_warning_1a0x6_8",AR={borderbox:yR,error:RR,warning:NR};Yu.bind(AR);const bR="_aksjonspunkt_11wjs_1",SR="_erAksjonspunktApent_11wjs_4",IR="_erIkkeGodkjentAvBeslutter_11wjs_8",LR={aksjonspunkt:bR,erAksjonspunktApent:SR,erIkkeGodkjentAvBeslutter:IR};Yu.bind(LR);const Jt=({dateString:e,year:l,month:t,day:a})=>br.jsx(br.Fragment,{children:$d(e,{year:l,month:t,day:a})}),ol=({dateTimeString:e,...l})=>br.jsx(br.Fragment,{children:U0(e,l)});jn(ea);jn(ea);const DR="_divider_1jpov_1",PR="_dividerParagraf_1jpov_8",KR="_leftPanel_1jpov_11",FR="_rightPanel_1jpov_14",wR={divider:DR,dividerParagraf:PR,leftPanel:KR,rightPanel:FR};Yu.bind(wR);jn(ea);const OR=jn(ea),GR=({tekst:e,children:l})=>{const[t,a]=A.useState(!1);if(!e)return l;const i=async()=>{await navigator.clipboard.writeText(e),a(!0),setTimeout(()=>{a(!1)},1e3)};return br.jsx(vR,{content:OR.formatMessage({id:t?"KopierbarTekst.Kopiert":"KopierbarTekst.Kopier"}),children:br.jsx("span",{"aria-hidden":"true",onClick:i,children:l??e})})},id={default:"_default_af3od_1",rød:"_rød_af3od_5"},ut=({beløp:e,kr:l=!1,rød:t=!1})=>{const a=e?.toString().replace(/\s/g,"");return br.jsx(GR,{tekst:a,children:br.jsxs("span",{className:t?id.rød:id.default,children:[a?C0(a):"-",a&&l&&" kr"]})})},zn=({tittel:e,children:l})=>V.jsxs(pl,{gap:"space-4",children:[V.jsx(Gu,{size:"medium",children:e}),l]});zn.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingInfoBlokk",props:{tittel:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Ag=({arbeidsgiverOpplysninger:e,arbeidsgiverIdent:l})=>{const t=Er();return V.jsxs(zn,{tittel:t.formatMessage({id:"InntektsmeldingFaktaPanel.arbeidsgiver.heading"}),children:[V.jsxs("span",{children:[V.jsx(Ie,{id:"InntektsmeldingFaktaPanel.arbeidsgiver.navn"}),": ",e.navn]}),V.jsxs("span",{children:[V.jsx(Ie,{id:"InntektsmeldingFaktaPanel.arbeidsgiver.underenhet"}),": ",l]})]})};Ag.__docgenInfo={description:"",methods:[],displayName:"Arbeidsgiver",props:{arbeidsgiverOpplysninger:{required:!0,tsType:{name:"union",raw:`| (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: true; fødselsdato: string })
| (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: false })`,elements:[{name:"unknown"},{name:"unknown"}]},description:""},arbeidsgiverIdent:{required:!0,tsType:{name:"string"},description:""}}};const bg=({inntektsmelding:e,behandling:l,alleBehandlinger:t,alleKodeverk:a})=>{const i=Er(),s=e.tilknyttedeBehandlingIder.includes(l.uuid),m=t.filter(f=>e.tilknyttedeBehandlingIder.includes(f.uuid)),d=(()=>{const f=m.length;return s&&f>1?V.jsx(Ie,{id:"InntektsmeldingFaktaPanel.behandling.bruktIDenneOgFlere"}):s?V.jsx(Ie,{id:"InntektsmeldingFaktaPanel.behandling.bruktKunIDenne"}):f===0?V.jsx(Ie,{id:"InntektsmeldingFaktaPanel.behandling.ikkeBruktINoen"}):V.jsx(Ie,{id:"InntektsmeldingFaktaPanel.behandling.bruktIAndre"})})(),v=[...m].sort((f,_)=>new Date(f.opprettet).getTime()-new Date(_.opprettet).getTime());return V.jsxs(zn,{tittel:i.formatMessage({id:"InntektsmeldingFaktaPanel.behandling.heading"}),children:[d,V.jsx(cu,{children:v.map(f=>V.jsx(cu.Item,{children:V.jsxs(pl,{gap:"space-4",children:[V.jsx("span",{children:a.BehandlingType.find(({kode:_})=>_===f.type)?.navn}),V.jsxs("span",{children:[V.jsx(Ie,{id:"InntektsmeldingFaktaPanel.behandling.opprettet"})," ",V.jsx(ol,{dateTimeString:f.opprettet,separator:"kl"})]}),f.avsluttet?V.jsxs("span",{children:[V.jsx(Ie,{id:"InntektsmeldingFaktaPanel.behandling.avsluttet"})," ",V.jsx(ol,{dateTimeString:f.avsluttet,separator:"kl"})]}):null]})},f.uuid))})]})};bg.__docgenInfo={description:"",methods:[],displayName:"BehandlingsOversikt",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`},description:""},behandling:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  id: number | null;
  uuid: string;
  versjon: number;
  type: foreldrepenger_behandlingslager_behandling_BehandlingType;
  status: foreldrepenger_behandlingslager_behandling_BehandlingStatus;
  fagsakId: number | null;
  opprettet: string;
  avsluttet: string | null;
  endret: string | null;
  endretAvBrukernavn: string | null;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  erAktivPapirsoknad: boolean;
  førsteÅrsak: tjenester_behandling_dto_behandling_BehandlingÅrsakDto | null;
  behandlingsfristTid: string | null;
  gjeldendeVedtak: boolean;
  erPaaVent: boolean | null;
  originalVedtaksDato: string | null;
  behandlingHenlagt: boolean;
  behandlingPaaVent: boolean | null;
  behandlingPåVent: boolean;
  fristBehandlingPåVent: string | null;
  fristBehandlingPaaVent: string | null;
  venteArsakKode: string | null;
  venteÅrsakKode: string | null;
  sprakkode: foreldrepenger_behandlingslager_geografisk_Språkkode | null;
  språkkode: foreldrepenger_behandlingslager_geografisk_Språkkode;
  behandlingKøet: boolean;
  ansvarligSaksbehandler: string | null;
  toTrinnsBehandling: boolean;
  behandlingsresultat?: tjenester_behandling_dto_behandling_BehandlingsresultatDto;
  behandlingÅrsaker: Array<tjenester_behandling_dto_behandling_BehandlingÅrsakDto>;
  vilkår: Array<tjenester_behandling_vilkår_VilkårDto>;
  links: Array<rest_ResourceLink>;
  ansvarligBeslutter: string | null;
  aksjonspunkt: Array<tjenester_behandling_aksjonspunkt_AksjonspunktDto>;
  harSøknad: boolean;
  harRegisterdata: boolean | null;
  harSattEndringsdato: boolean;
  alleUttaksperioderAvslått: boolean | null;
  sjekkSimuleringResultat?: boolean;
  taskStatus: tjenester_behandling_dto_AsyncPollingStatus | null;
  behandlingKoet: boolean | null;
}`,signature:{properties:[{key:"id",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"versjon",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVSLU' | 'FVED' | 'IVED' | 'OPPRE' | 'UTRED'",elements:[{name:"literal",value:"'AVSLU'"},{name:"literal",value:"'FVED'"},{name:"literal",value:"'IVED'"},{name:"literal",value:"'OPPRE'"},{name:"literal",value:"'UTRED'"}],required:!0}},{key:"fagsakId",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endret",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAvBrukernavn",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"førsteÅrsak",value:{name:"union",raw:"tjenester_behandling_dto_behandling_BehandlingÅrsakDto | null",elements:[{name:"signature",type:"object",raw:`{
  erAutomatiskRevurdering: boolean | null;
  behandlingArsakType: foreldrepenger_behandlingslager_behandling_BehandlingÅrsakType;
  manueltOpprettet: boolean;
}`,signature:{properties:[{key:"erAutomatiskRevurdering",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"behandlingArsakType",value:{name:"union",raw:`| TEMP_FRA_FP_TILBAKE_ÅRSAK
| 'RE-LOV'
| 'RE-RGLF'
| 'RE-FEFAKTA'
| 'RE-PRSSL'
| 'RE-ANNET'
| 'RE-MDL'
| 'RE-OPTJ'
| 'RE-FRDLING'
| 'RE-INNTK'
| 'RE-FØDSEL'
| 'RE-DØD'
| 'RE-SRTB'
| 'RE-FRIST'
| 'RE-BER-GRUN'
| 'RE-KLAG-U-INNTK'
| 'RE-KLAG-M-INNTK'
| 'ETTER_KLAGE'
| 'RE-MF'
| 'RE-MFIP'
| 'RE-AVAB'
| 'RE-END-FRA-BRUKER'
| 'RE-END-INNTEKTSMELD'
| 'BERØRT-BEHANDLING'
| 'REBEREGN-FERIEPENGER'
| 'RE-UTSATT-START'
| 'RE-SATS-REGULERING'
| 'ENDRE-DEKNINGSGRAD'
| 'INFOBREV_BEHANDLING'
| 'INFOBREV_OPPHOLD'
| 'INFOBREV_PÅMINNELSE'
| 'OPPHØR-NYTT-BARN'
| 'RE-HENDELSE-FØDSEL'
| 'RE-HENDELSE-DØD-F'
| 'RE-HENDELSE-DØD-B'
| 'RE-HENDELSE-DØDFØD'
| 'RE-HENDELSE-UTFLYTTING'
| 'RE-VEDTAK-PSB'
| 'FEIL_PRAKSIS_UTSETTELSE'
| 'FEIL_PRAKSIS_IVERKS_UTSET'
| 'KLAGE_TILBAKE'
| 'RE-YTELSE'
| 'RE-REGISTEROPPL'
| 'KØET-BEHANDLING'
| 'RE-TILST-YT-INNVIL'
| 'RE-TILST-YT-OPPH'
| '-'`,elements:[{name:"union",raw:`| 'RE_KLAGE_NFP'
| 'RE_KLAGE_KA'
| 'RE_VILKÅR'
| 'RE_FORELDELSE'
| 'RE_FEILUTBETALT_BELØP_REDUSERT'
| 'FATTET_AV_ANNEN_INSTANS'`,elements:[{name:"literal",value:"'RE_KLAGE_NFP'"},{name:"literal",value:"'RE_KLAGE_KA'"},{name:"literal",value:"'RE_VILKÅR'"},{name:"literal",value:"'RE_FORELDELSE'"},{name:"literal",value:"'RE_FEILUTBETALT_BELØP_REDUSERT'"},{name:"literal",value:"'FATTET_AV_ANNEN_INSTANS'"}]},{name:"literal",value:"'RE-LOV'"},{name:"literal",value:"'RE-RGLF'"},{name:"literal",value:"'RE-FEFAKTA'"},{name:"literal",value:"'RE-PRSSL'"},{name:"literal",value:"'RE-ANNET'"},{name:"literal",value:"'RE-MDL'"},{name:"literal",value:"'RE-OPTJ'"},{name:"literal",value:"'RE-FRDLING'"},{name:"literal",value:"'RE-INNTK'"},{name:"literal",value:"'RE-FØDSEL'"},{name:"literal",value:"'RE-DØD'"},{name:"literal",value:"'RE-SRTB'"},{name:"literal",value:"'RE-FRIST'"},{name:"literal",value:"'RE-BER-GRUN'"},{name:"literal",value:"'RE-KLAG-U-INNTK'"},{name:"literal",value:"'RE-KLAG-M-INNTK'"},{name:"literal",value:"'ETTER_KLAGE'"},{name:"literal",value:"'RE-MF'"},{name:"literal",value:"'RE-MFIP'"},{name:"literal",value:"'RE-AVAB'"},{name:"literal",value:"'RE-END-FRA-BRUKER'"},{name:"literal",value:"'RE-END-INNTEKTSMELD'"},{name:"literal",value:"'BERØRT-BEHANDLING'"},{name:"literal",value:"'REBEREGN-FERIEPENGER'"},{name:"literal",value:"'RE-UTSATT-START'"},{name:"literal",value:"'RE-SATS-REGULERING'"},{name:"literal",value:"'ENDRE-DEKNINGSGRAD'"},{name:"literal",value:"'INFOBREV_BEHANDLING'"},{name:"literal",value:"'INFOBREV_OPPHOLD'"},{name:"literal",value:"'INFOBREV_PÅMINNELSE'"},{name:"literal",value:"'OPPHØR-NYTT-BARN'"},{name:"literal",value:"'RE-HENDELSE-FØDSEL'"},{name:"literal",value:"'RE-HENDELSE-DØD-F'"},{name:"literal",value:"'RE-HENDELSE-DØD-B'"},{name:"literal",value:"'RE-HENDELSE-DØDFØD'"},{name:"literal",value:"'RE-HENDELSE-UTFLYTTING'"},{name:"literal",value:"'RE-VEDTAK-PSB'"},{name:"literal",value:"'FEIL_PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'FEIL_PRAKSIS_IVERKS_UTSET'"},{name:"literal",value:"'KLAGE_TILBAKE'"},{name:"literal",value:"'RE-YTELSE'"},{name:"literal",value:"'RE-REGISTEROPPL'"},{name:"literal",value:"'KØET-BEHANDLING'"},{name:"literal",value:"'RE-TILST-YT-INNVIL'"},{name:"literal",value:"'RE-TILST-YT-OPPH'"},{name:"literal",value:"'-'"}],required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}}]}},{name:"null"}],required:!0}},{key:"behandlingsfristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"erPaaVent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"originalVedtaksDato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingPaaVent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fristBehandlingPaaVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteArsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"sprakkode",value:{name:"union",raw:"foreldrepenger_behandlingslager_geografisk_Språkkode | null",elements:[{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0},{name:"null"}],required:!0}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"signature",type:"object",raw:`{
  id: number;
  type: foreldrepenger_behandlingslager_behandling_BehandlingResultatType;
  avslagsarsak: foreldrepenger_behandlingslager_behandling_vilkår_Avslagsårsak | null;
  avslagsarsakFritekst: string | null;
  rettenTil: foreldrepenger_behandlingslager_behandling_RettenTil | null;
  konsekvenserForYtelsen: Array<foreldrepenger_behandlingslager_behandling_KonsekvensForYtelsen> | null;
  vedtaksbrev: foreldrepenger_behandlingslager_behandling_vedtak_Vedtaksbrev | null;
  vedtaksbrevStatus: foreldrepenger_domene_vedtak_intern_VedtaksbrevStatus;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall: boolean | null;
  skjæringstidspunkt: tjenester_behandling_dto_behandling_SkjæringstidspunktDto | null;
  endretDekningsgrad: boolean | null;
  opphørsdato: string | null;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:`| TEMP_FP_TILBAKE_BEHANDLINGRESULTATTYPE
| 'IKKE_FASTSATT'
| 'INNVILGET'
| 'AVSLÅTT'
| 'OPPHØR'
| 'HENLAGT_SØKNAD_TRUKKET'
| 'HENLAGT_FEILOPPRETTET'
| 'HENLAGT_BRUKER_DØD'
| 'MERGET_OG_HENLAGT'
| 'HENLAGT_SØKNAD_MANGLER'
| 'FORELDREPENGER_ENDRET'
| 'FORELDREPENGER_SENERE'
| 'INGEN_ENDRING'
| 'MANGLER_BEREGNINGSREGLER'
| 'KLAGE_AVVIST'
| 'KLAGE_MEDHOLD'
| 'KLAGE_DELVIS_MEDHOLD'
| 'KLAGE_OMGJORT_UGUNST'
| 'KLAGE_YTELSESVEDTAK_OPPHEVET'
| 'KLAGE_YTELSESVEDTAK_STADFESTET'
| 'KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET'
| 'HENLAGT_KLAGE_TRUKKET'
| 'HJEMSENDE_UTEN_OPPHEVE'
| 'ANKE_AVVIST'
| 'ANKE_MEDHOLD'
| 'ANKE_DELVIS_MEDHOLD'
| 'ANKE_OMGJORT_UGUNST'
| 'ANKE_OPPHEVE_OG_HJEMSENDE'
| 'ANKE_HJEMSENDE_UTEN_OPPHEV'
| 'ANKE_YTELSESVEDTAK_STADFESTET'
| 'HENLAGT_ANKE_TRUKKET'
| 'INNSYN_INNVILGET'
| 'INNSYN_DELVIS_INNVILGET'
| 'INNSYN_AVVIST'
| 'HENLAGT_INNSYN_TRUKKET'`,elements:[{name:"union",raw:`| 'IKKE_FASTSATT'
| 'FASTSATT'
| 'HENLAGT_FEILOPPRETTET'
| 'HENLAGT_FEILOPPRETTET_MED_BREV'
| 'HENLAGT_FEILOPPRETTET_UTEN_BREV'
| 'HENLAGT_KRAVGRUNNLAG_NULLSTILT'
| 'HENLAGT_TEKNISK_VEDLIKEHOLD'
| 'HENLAGT'
| 'INGEN_TILBAKEBETALING'
| 'DELVIS_TILBAKEBETALING'
| 'FULL_TILBAKEBETALING'`,elements:[{name:"literal",value:"'IKKE_FASTSATT'"},{name:"literal",value:"'FASTSATT'"},{name:"literal",value:"'HENLAGT_FEILOPPRETTET'"},{name:"literal",value:"'HENLAGT_FEILOPPRETTET_MED_BREV'"},{name:"literal",value:"'HENLAGT_FEILOPPRETTET_UTEN_BREV'"},{name:"literal",value:"'HENLAGT_KRAVGRUNNLAG_NULLSTILT'"},{name:"literal",value:"'HENLAGT_TEKNISK_VEDLIKEHOLD'"},{name:"literal",value:"'HENLAGT'"},{name:"literal",value:"'INGEN_TILBAKEBETALING'"},{name:"literal",value:"'DELVIS_TILBAKEBETALING'"},{name:"literal",value:"'FULL_TILBAKEBETALING'"}]},{name:"literal",value:"'IKKE_FASTSATT'"},{name:"literal",value:"'INNVILGET'"},{name:"literal",value:"'AVSLÅTT'"},{name:"literal",value:"'OPPHØR'"},{name:"literal",value:"'HENLAGT_SØKNAD_TRUKKET'"},{name:"literal",value:"'HENLAGT_FEILOPPRETTET'"},{name:"literal",value:"'HENLAGT_BRUKER_DØD'"},{name:"literal",value:"'MERGET_OG_HENLAGT'"},{name:"literal",value:"'HENLAGT_SØKNAD_MANGLER'"},{name:"literal",value:"'FORELDREPENGER_ENDRET'"},{name:"literal",value:"'FORELDREPENGER_SENERE'"},{name:"literal",value:"'INGEN_ENDRING'"},{name:"literal",value:"'MANGLER_BEREGNINGSREGLER'"},{name:"literal",value:"'KLAGE_AVVIST'"},{name:"literal",value:"'KLAGE_MEDHOLD'"},{name:"literal",value:"'KLAGE_DELVIS_MEDHOLD'"},{name:"literal",value:"'KLAGE_OMGJORT_UGUNST'"},{name:"literal",value:"'KLAGE_YTELSESVEDTAK_OPPHEVET'"},{name:"literal",value:"'KLAGE_YTELSESVEDTAK_STADFESTET'"},{name:"literal",value:"'KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET'"},{name:"literal",value:"'HENLAGT_KLAGE_TRUKKET'"},{name:"literal",value:"'HJEMSENDE_UTEN_OPPHEVE'"},{name:"literal",value:"'ANKE_AVVIST'"},{name:"literal",value:"'ANKE_MEDHOLD'"},{name:"literal",value:"'ANKE_DELVIS_MEDHOLD'"},{name:"literal",value:"'ANKE_OMGJORT_UGUNST'"},{name:"literal",value:"'ANKE_OPPHEVE_OG_HJEMSENDE'"},{name:"literal",value:"'ANKE_HJEMSENDE_UTEN_OPPHEV'"},{name:"literal",value:"'ANKE_YTELSESVEDTAK_STADFESTET'"},{name:"literal",value:"'HENLAGT_ANKE_TRUKKET'"},{name:"literal",value:"'INNSYN_INNVILGET'"},{name:"literal",value:"'INNSYN_DELVIS_INNVILGET'"},{name:"literal",value:"'INNSYN_AVVIST'"},{name:"literal",value:"'HENLAGT_INNSYN_TRUKKET'"}],required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_vilkår_Avslagsårsak | null",elements:[{name:"union",raw:`| '1001'
| '1002'
| '1003'
| '1004'
| '1005'
| '1006'
| '1007'
| '1008'
| '1009'
| '1010'
| '1011'
| '1012'
| '1013'
| '1014'
| '1015'
| '1016'
| '1017'
| '1018'
| '1019'
| '1020'
| '1021'
| '1023'
| '1024'
| '1025'
| '1026'
| '1027'
| '1028'
| '1029'
| '1031'
| '1032'
| '1033'
| '1034'
| '1035'
| '1041'
| '1051'
| '1052'
| '1060'
| '1061'
| '1062'
| '1063'
| '1064'
| '1065'
| '1066'
| '1099'
| '-'`,elements:[{name:"literal",value:"'1001'"},{name:"literal",value:"'1002'"},{name:"literal",value:"'1003'"},{name:"literal",value:"'1004'"},{name:"literal",value:"'1005'"},{name:"literal",value:"'1006'"},{name:"literal",value:"'1007'"},{name:"literal",value:"'1008'"},{name:"literal",value:"'1009'"},{name:"literal",value:"'1010'"},{name:"literal",value:"'1011'"},{name:"literal",value:"'1012'"},{name:"literal",value:"'1013'"},{name:"literal",value:"'1014'"},{name:"literal",value:"'1015'"},{name:"literal",value:"'1016'"},{name:"literal",value:"'1017'"},{name:"literal",value:"'1018'"},{name:"literal",value:"'1019'"},{name:"literal",value:"'1020'"},{name:"literal",value:"'1021'"},{name:"literal",value:"'1023'"},{name:"literal",value:"'1024'"},{name:"literal",value:"'1025'"},{name:"literal",value:"'1026'"},{name:"literal",value:"'1027'"},{name:"literal",value:"'1028'"},{name:"literal",value:"'1029'"},{name:"literal",value:"'1031'"},{name:"literal",value:"'1032'"},{name:"literal",value:"'1033'"},{name:"literal",value:"'1034'"},{name:"literal",value:"'1035'"},{name:"literal",value:"'1041'"},{name:"literal",value:"'1051'"},{name:"literal",value:"'1052'"},{name:"literal",value:"'1060'"},{name:"literal",value:"'1061'"},{name:"literal",value:"'1062'"},{name:"literal",value:"'1063'"},{name:"literal",value:"'1064'"},{name:"literal",value:"'1065'"},{name:"literal",value:"'1066'"},{name:"literal",value:"'1099'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"rettenTil",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_RettenTil | null",elements:[{name:"union",raw:"'HAR_RETT_TIL_FP' | 'HAR_IKKE_RETT_TIL_FP' | '-'",elements:[{name:"literal",value:"'HAR_RETT_TIL_FP'"},{name:"literal",value:"'HAR_IKKE_RETT_TIL_FP'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"konsekvenserForYtelsen",value:{name:"union",raw:"Array<foreldrepenger_behandlingslager_behandling_KonsekvensForYtelsen> | null",elements:[{name:"Array",elements:[{name:"union",raw:`| 'FORELDREPENGER_OPPHØRER'
| 'ENDRING_I_BEREGNING'
| 'ENDRING_I_UTTAK'
| 'ENDRING_I_FORDELING_AV_YTELSEN'
| 'INGEN_ENDRING'
| '-'`,elements:[{name:"literal",value:"'FORELDREPENGER_OPPHØRER'"},{name:"literal",value:"'ENDRING_I_BEREGNING'"},{name:"literal",value:"'ENDRING_I_UTTAK'"},{name:"literal",value:"'ENDRING_I_FORDELING_AV_YTELSEN'"},{name:"literal",value:"'INGEN_ENDRING'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_KonsekvensForYtelsen>"},{name:"null"}],required:!0}},{key:"vedtaksbrev",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_vedtak_Vedtaksbrev | null",elements:[{name:"union",raw:"'AUTOMATISK' | 'FRITEKST' | 'INGEN' | '-'",elements:[{name:"literal",value:"'AUTOMATISK'"},{name:"literal",value:"'FRITEKST'"},{name:"literal",value:"'INGEN'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"skjæringstidspunkt",value:{name:"union",raw:"tjenester_behandling_dto_behandling_SkjæringstidspunktDto | null",elements:[{name:"signature",type:"object",raw:`{
  dato: string | null;
  utenMinsterett: boolean | null;
}`,signature:{properties:[{key:"dato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"utenMinsterett",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"endretDekningsgrad",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]},required:!1}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  erAutomatiskRevurdering: boolean | null;
  behandlingArsakType: foreldrepenger_behandlingslager_behandling_BehandlingÅrsakType;
  manueltOpprettet: boolean;
}`,signature:{properties:[{key:"erAutomatiskRevurdering",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"behandlingArsakType",value:{name:"union",raw:`| TEMP_FRA_FP_TILBAKE_ÅRSAK
| 'RE-LOV'
| 'RE-RGLF'
| 'RE-FEFAKTA'
| 'RE-PRSSL'
| 'RE-ANNET'
| 'RE-MDL'
| 'RE-OPTJ'
| 'RE-FRDLING'
| 'RE-INNTK'
| 'RE-FØDSEL'
| 'RE-DØD'
| 'RE-SRTB'
| 'RE-FRIST'
| 'RE-BER-GRUN'
| 'RE-KLAG-U-INNTK'
| 'RE-KLAG-M-INNTK'
| 'ETTER_KLAGE'
| 'RE-MF'
| 'RE-MFIP'
| 'RE-AVAB'
| 'RE-END-FRA-BRUKER'
| 'RE-END-INNTEKTSMELD'
| 'BERØRT-BEHANDLING'
| 'REBEREGN-FERIEPENGER'
| 'RE-UTSATT-START'
| 'RE-SATS-REGULERING'
| 'ENDRE-DEKNINGSGRAD'
| 'INFOBREV_BEHANDLING'
| 'INFOBREV_OPPHOLD'
| 'INFOBREV_PÅMINNELSE'
| 'OPPHØR-NYTT-BARN'
| 'RE-HENDELSE-FØDSEL'
| 'RE-HENDELSE-DØD-F'
| 'RE-HENDELSE-DØD-B'
| 'RE-HENDELSE-DØDFØD'
| 'RE-HENDELSE-UTFLYTTING'
| 'RE-VEDTAK-PSB'
| 'FEIL_PRAKSIS_UTSETTELSE'
| 'FEIL_PRAKSIS_IVERKS_UTSET'
| 'KLAGE_TILBAKE'
| 'RE-YTELSE'
| 'RE-REGISTEROPPL'
| 'KØET-BEHANDLING'
| 'RE-TILST-YT-INNVIL'
| 'RE-TILST-YT-OPPH'
| '-'`,elements:[{name:"union",raw:`| 'RE_KLAGE_NFP'
| 'RE_KLAGE_KA'
| 'RE_VILKÅR'
| 'RE_FORELDELSE'
| 'RE_FEILUTBETALT_BELØP_REDUSERT'
| 'FATTET_AV_ANNEN_INSTANS'`,elements:[{name:"literal",value:"'RE_KLAGE_NFP'"},{name:"literal",value:"'RE_KLAGE_KA'"},{name:"literal",value:"'RE_VILKÅR'"},{name:"literal",value:"'RE_FORELDELSE'"},{name:"literal",value:"'RE_FEILUTBETALT_BELØP_REDUSERT'"},{name:"literal",value:"'FATTET_AV_ANNEN_INSTANS'"}]},{name:"literal",value:"'RE-LOV'"},{name:"literal",value:"'RE-RGLF'"},{name:"literal",value:"'RE-FEFAKTA'"},{name:"literal",value:"'RE-PRSSL'"},{name:"literal",value:"'RE-ANNET'"},{name:"literal",value:"'RE-MDL'"},{name:"literal",value:"'RE-OPTJ'"},{name:"literal",value:"'RE-FRDLING'"},{name:"literal",value:"'RE-INNTK'"},{name:"literal",value:"'RE-FØDSEL'"},{name:"literal",value:"'RE-DØD'"},{name:"literal",value:"'RE-SRTB'"},{name:"literal",value:"'RE-FRIST'"},{name:"literal",value:"'RE-BER-GRUN'"},{name:"literal",value:"'RE-KLAG-U-INNTK'"},{name:"literal",value:"'RE-KLAG-M-INNTK'"},{name:"literal",value:"'ETTER_KLAGE'"},{name:"literal",value:"'RE-MF'"},{name:"literal",value:"'RE-MFIP'"},{name:"literal",value:"'RE-AVAB'"},{name:"literal",value:"'RE-END-FRA-BRUKER'"},{name:"literal",value:"'RE-END-INNTEKTSMELD'"},{name:"literal",value:"'BERØRT-BEHANDLING'"},{name:"literal",value:"'REBEREGN-FERIEPENGER'"},{name:"literal",value:"'RE-UTSATT-START'"},{name:"literal",value:"'RE-SATS-REGULERING'"},{name:"literal",value:"'ENDRE-DEKNINGSGRAD'"},{name:"literal",value:"'INFOBREV_BEHANDLING'"},{name:"literal",value:"'INFOBREV_OPPHOLD'"},{name:"literal",value:"'INFOBREV_PÅMINNELSE'"},{name:"literal",value:"'OPPHØR-NYTT-BARN'"},{name:"literal",value:"'RE-HENDELSE-FØDSEL'"},{name:"literal",value:"'RE-HENDELSE-DØD-F'"},{name:"literal",value:"'RE-HENDELSE-DØD-B'"},{name:"literal",value:"'RE-HENDELSE-DØDFØD'"},{name:"literal",value:"'RE-HENDELSE-UTFLYTTING'"},{name:"literal",value:"'RE-VEDTAK-PSB'"},{name:"literal",value:"'FEIL_PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'FEIL_PRAKSIS_IVERKS_UTSET'"},{name:"literal",value:"'KLAGE_TILBAKE'"},{name:"literal",value:"'RE-YTELSE'"},{name:"literal",value:"'RE-REGISTEROPPL'"},{name:"literal",value:"'KØET-BEHANDLING'"},{name:"literal",value:"'RE-TILST-YT-INNVIL'"},{name:"literal",value:"'RE-TILST-YT-OPPH'"},{name:"literal",value:"'-'"}],required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}}]}}],raw:"Array<tjenester_behandling_dto_behandling_BehandlingÅrsakDto>",required:!0}},{key:"vilkår",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: foreldrepenger_behandlingslager_behandling_vilkår_VilkårType;
  vilkarStatus: foreldrepenger_behandlingslager_behandling_vilkår_VilkårUtfallType;
  avslagKode: string | null;
  lovReferanse: string | null;
  overstyrbar: boolean;
  evaluering: string | null;
  input: string | null;
}`,signature:{properties:[{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
| 'FP_VK_11'
| 'FP_VK_16'
| 'FP_VK_2'
| 'FP_VK_2_F'
| 'FP_VK_2_L'
| 'FP_VK_3'
| 'FP_VK_4'
| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| 'FP_VK_34'
| 'FP_VK_21'
| 'FP_VK_23'
| 'FP_VK_41'
| 'SVP_VK_1'
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0}},{key:"vilkarStatus",value:{name:"union",raw:`| 'OPPFYLT'
| 'IKKE_OPPFYLT'
| 'IKKE_VURDERT'
| '-'`,elements:[{name:"literal",value:"'OPPFYLT'"},{name:"literal",value:"'IKKE_OPPFYLT'"},{name:"literal",value:"'IKKE_VURDERT'"},{name:"literal",value:"'-'"}],required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"lovReferanse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"overstyrbar",value:{name:"boolean",required:!0}},{key:"evaluering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"input",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:"Array<tjenester_behandling_vilkår_VilkårDto>",required:!0}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: {
    [key: string]: unknown;
  };
  type: rest_ResourceLink_HttpMethod;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"signature",type:"object",raw:`{
  [key: string]: unknown;
}`,signature:{properties:[{key:{name:"string"},value:{name:"unknown",required:!0}}]},required:!1}},{key:"type",value:{name:"union",raw:"'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT'",elements:[{name:"literal",value:"'DELETE'"},{name:"literal",value:"'GET'"},{name:"literal",value:"'PATCH'"},{name:"literal",value:"'POST'"},{name:"literal",value:"'PUT'"}],required:!0}}]}}],raw:"Array<rest_ResourceLink>",required:!0}},{key:"ansvarligBeslutter",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  definisjon: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktDefinisjon;
  status: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType: foreldrepenger_behandlingslager_behandling_vilkår_VilkårType | null;
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent: boolean | null;
  vurderPaNyttArsaker: Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak> | null;
  besluttersBegrunnelse: string | null;
  aksjonspunktType: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktType;
  kanLoses: boolean;
  erAktivt: boolean;
  fristTid: string | null;
  endretTidspunkt: string | null;
  endretAv: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"union",raw:`| '5001'
| '5027'
| '5004'
| '5005'
| '5006'
| '5007'
| '5008'
| '5011'
| '5012'
| '5013'
| '5014'
| '5015'
| '5016'
| '5017'
| '5002'
| '5026'
| '5028'
| '5030'
| '5031'
| '5033'
| '5034'
| '5003'
| '5035'
| '5037'
| '5038'
| '5039'
| '5040'
| '5043'
| '5046'
| '5047'
| '5049'
| '5051'
| '5052'
| '5054'
| '5055'
| '5057'
| '5058'
| '5059'
| '5060'
| '5061'
| '5068'
| '5064'
| '5065'
| '5063'
| '5066'
| '5071'
| '5072'
| '5069'
| '5073'
| '5076'
| '5077'
| '5085'
| '5082'
| '5084'
| '5029'
| '5086'
| '5089'
| '5041'
| '5062'
| '5091'
| '5092'
| '5095'
| '5096'
| '5074'
| '5101'
| '5102'
| '5103'
| '6002'
| '6003'
| '6004'
| '6005'
| '6006'
| '6008'
| '6009'
| '6010'
| '6011'
| '6065'
| '6014'
| '6015'
| '6045'
| '6016'
| '6018'
| '6017'
| '6103'
| '7001'
| '7002'
| '7003'
| '7005'
| '7007'
| '7008'
| '7011'
| '7013'
| '7014'
| '7020'
| '7030'
| '7033'
| '7037'
| '7039'
| '7040'
| "UNDEFINED('null')"
| '5009'
| '5019'
| '5020'
| '5021'
| '5022'
| '5023'
| '5024'
| '5025'
| '5032'
| '5036'
| '5042'
| '5044'
| '5045'
| '5048'
| '5050'
| '5053'
| '5056'
| '5067'
| '5070'
| '5075'
| '5078'
| '5079'
| '5080'
| '5081'
| '5083'
| '5087'
| '5088'
| '5090'
| '5093'
| '5094'
| '5097'
| '5098'
| '5099'
| '6007'
| '6012'
| '6013'
| '6068'
| '6070'
| '7004'
| '7006'
| '7009'
| '7015'
| '7016'
| '7017'
| '7018'
| '7019'
| '7021'
| '7022'
| '7023'
| '7024'
| '7025'
| '7026'
| '7027'
| '7028'
| '7029'
| '7032'
| '7034'
| '7035'
| '7036'
| '7038'
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_vilkår_VilkårType | null",elements:[{name:"union",raw:`| 'FP_VK_1'
| 'FP_VK_11'
| 'FP_VK_16'
| 'FP_VK_2'
| 'FP_VK_2_F'
| 'FP_VK_2_L'
| 'FP_VK_3'
| 'FP_VK_4'
| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| 'FP_VK_34'
| 'FP_VK_21'
| 'FP_VK_23'
| 'FP_VK_41'
| 'SVP_VK_1'
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0},{name:"null"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak> | null",elements:[{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>"},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:`| 'AUTO'
| 'MANU'
| 'OVST'
| 'SAOV'
| '-'`,elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:"Array<tjenester_behandling_aksjonspunkt_AksjonspunktDto>",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harRegisterdata",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!1}},{key:"taskStatus",value:{name:"union",raw:"tjenester_behandling_dto_AsyncPollingStatus | null",elements:[{name:"signature",type:"object",raw:`{
  status: tjenester_behandling_dto_AsyncPollingStatus_Status | null;
  eta: string | null;
  message: string;
  pollIntervalMillis: number | null;
  location: string | null;
  cancelUri: string | null;
  readOnly: boolean | null;
  pending: boolean | null;
}`,signature:{properties:[{key:"status",value:{name:"union",raw:"tjenester_behandling_dto_AsyncPollingStatus_Status | null",elements:[{name:"union",raw:`| 'PENDING'
| 'COMPLETE'
| 'DELAYED'
| 'CANCELLED'
| 'HALTED'`,elements:[{name:"literal",value:"'PENDING'"},{name:"literal",value:"'COMPLETE'"},{name:"literal",value:"'DELAYED'"},{name:"literal",value:"'CANCELLED'"},{name:"literal",value:"'HALTED'"}]},{name:"null"}],required:!0}},{key:"eta",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"message",value:{name:"string",required:!0}},{key:"pollIntervalMillis",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"location",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"cancelUri",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"readOnly",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"pending",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"behandlingKoet",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}},description:""},alleBehandlinger:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: number | null;
  uuid: string;
  versjon: number;
  type: foreldrepenger_behandlingslager_behandling_BehandlingType;
  status: foreldrepenger_behandlingslager_behandling_BehandlingStatus;
  fagsakId: number | null;
  opprettet: string;
  avsluttet: string | null;
  endret: string | null;
  endretAvBrukernavn: string | null;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  erAktivPapirsoknad: boolean;
  førsteÅrsak: tjenester_behandling_dto_behandling_BehandlingÅrsakDto | null;
  behandlingsfristTid: string | null;
  gjeldendeVedtak: boolean;
  erPaaVent: boolean | null;
  originalVedtaksDato: string | null;
  behandlingHenlagt: boolean;
  behandlingPaaVent: boolean | null;
  behandlingPåVent: boolean;
  fristBehandlingPåVent: string | null;
  fristBehandlingPaaVent: string | null;
  venteArsakKode: string | null;
  venteÅrsakKode: string | null;
  sprakkode: foreldrepenger_behandlingslager_geografisk_Språkkode | null;
  språkkode: foreldrepenger_behandlingslager_geografisk_Språkkode;
  behandlingKøet: boolean;
  ansvarligSaksbehandler: string | null;
  toTrinnsBehandling: boolean;
  behandlingsresultat: tjenester_behandling_dto_behandling_BehandlingsresultatDto | null;
  behandlingÅrsaker: Array<tjenester_behandling_dto_behandling_BehandlingÅrsakDto>;
  vilkår: Array<tjenester_behandling_vilkår_VilkårDto>;
  links: Array<rest_ResourceLink>;
  behandlingTillatteOperasjoner: tjenester_behandling_dto_BehandlingOperasjonerDto | null;
  brevmaler: Array<foreldrepenger_kontrakter_formidling_v3_BrevmalDto>;
  totrinnskontrollÅrsaker: Array<tjenester_behandling_vedtak_dto_TotrinnskontrollSkjermlenkeContextDto>;
  totrinnskontrollReadonly: boolean | null;
  risikoAksjonspunkt: tjenester_behandling_aksjonspunkt_AksjonspunktDto | null;
  kontrollResultat: tjenester_behandling_kontroll_dto_KontrollresultatDto | null;
  ugunstAksjonspunkt: boolean | null;
  behandlingKoet: boolean | null;
}`,signature:{properties:[{key:"id",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"versjon",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVSLU' | 'FVED' | 'IVED' | 'OPPRE' | 'UTRED'",elements:[{name:"literal",value:"'AVSLU'"},{name:"literal",value:"'FVED'"},{name:"literal",value:"'IVED'"},{name:"literal",value:"'OPPRE'"},{name:"literal",value:"'UTRED'"}],required:!0}},{key:"fagsakId",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endret",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAvBrukernavn",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"førsteÅrsak",value:{name:"union",raw:"tjenester_behandling_dto_behandling_BehandlingÅrsakDto | null",elements:[{name:"signature",type:"object",raw:`{
  erAutomatiskRevurdering: boolean | null;
  behandlingArsakType: foreldrepenger_behandlingslager_behandling_BehandlingÅrsakType;
  manueltOpprettet: boolean;
}`,signature:{properties:[{key:"erAutomatiskRevurdering",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"behandlingArsakType",value:{name:"union",raw:`| TEMP_FRA_FP_TILBAKE_ÅRSAK
| 'RE-LOV'
| 'RE-RGLF'
| 'RE-FEFAKTA'
| 'RE-PRSSL'
| 'RE-ANNET'
| 'RE-MDL'
| 'RE-OPTJ'
| 'RE-FRDLING'
| 'RE-INNTK'
| 'RE-FØDSEL'
| 'RE-DØD'
| 'RE-SRTB'
| 'RE-FRIST'
| 'RE-BER-GRUN'
| 'RE-KLAG-U-INNTK'
| 'RE-KLAG-M-INNTK'
| 'ETTER_KLAGE'
| 'RE-MF'
| 'RE-MFIP'
| 'RE-AVAB'
| 'RE-END-FRA-BRUKER'
| 'RE-END-INNTEKTSMELD'
| 'BERØRT-BEHANDLING'
| 'REBEREGN-FERIEPENGER'
| 'RE-UTSATT-START'
| 'RE-SATS-REGULERING'
| 'ENDRE-DEKNINGSGRAD'
| 'INFOBREV_BEHANDLING'
| 'INFOBREV_OPPHOLD'
| 'INFOBREV_PÅMINNELSE'
| 'OPPHØR-NYTT-BARN'
| 'RE-HENDELSE-FØDSEL'
| 'RE-HENDELSE-DØD-F'
| 'RE-HENDELSE-DØD-B'
| 'RE-HENDELSE-DØDFØD'
| 'RE-HENDELSE-UTFLYTTING'
| 'RE-VEDTAK-PSB'
| 'FEIL_PRAKSIS_UTSETTELSE'
| 'FEIL_PRAKSIS_IVERKS_UTSET'
| 'KLAGE_TILBAKE'
| 'RE-YTELSE'
| 'RE-REGISTEROPPL'
| 'KØET-BEHANDLING'
| 'RE-TILST-YT-INNVIL'
| 'RE-TILST-YT-OPPH'
| '-'`,elements:[{name:"union",raw:`| 'RE_KLAGE_NFP'
| 'RE_KLAGE_KA'
| 'RE_VILKÅR'
| 'RE_FORELDELSE'
| 'RE_FEILUTBETALT_BELØP_REDUSERT'
| 'FATTET_AV_ANNEN_INSTANS'`,elements:[{name:"literal",value:"'RE_KLAGE_NFP'"},{name:"literal",value:"'RE_KLAGE_KA'"},{name:"literal",value:"'RE_VILKÅR'"},{name:"literal",value:"'RE_FORELDELSE'"},{name:"literal",value:"'RE_FEILUTBETALT_BELØP_REDUSERT'"},{name:"literal",value:"'FATTET_AV_ANNEN_INSTANS'"}]},{name:"literal",value:"'RE-LOV'"},{name:"literal",value:"'RE-RGLF'"},{name:"literal",value:"'RE-FEFAKTA'"},{name:"literal",value:"'RE-PRSSL'"},{name:"literal",value:"'RE-ANNET'"},{name:"literal",value:"'RE-MDL'"},{name:"literal",value:"'RE-OPTJ'"},{name:"literal",value:"'RE-FRDLING'"},{name:"literal",value:"'RE-INNTK'"},{name:"literal",value:"'RE-FØDSEL'"},{name:"literal",value:"'RE-DØD'"},{name:"literal",value:"'RE-SRTB'"},{name:"literal",value:"'RE-FRIST'"},{name:"literal",value:"'RE-BER-GRUN'"},{name:"literal",value:"'RE-KLAG-U-INNTK'"},{name:"literal",value:"'RE-KLAG-M-INNTK'"},{name:"literal",value:"'ETTER_KLAGE'"},{name:"literal",value:"'RE-MF'"},{name:"literal",value:"'RE-MFIP'"},{name:"literal",value:"'RE-AVAB'"},{name:"literal",value:"'RE-END-FRA-BRUKER'"},{name:"literal",value:"'RE-END-INNTEKTSMELD'"},{name:"literal",value:"'BERØRT-BEHANDLING'"},{name:"literal",value:"'REBEREGN-FERIEPENGER'"},{name:"literal",value:"'RE-UTSATT-START'"},{name:"literal",value:"'RE-SATS-REGULERING'"},{name:"literal",value:"'ENDRE-DEKNINGSGRAD'"},{name:"literal",value:"'INFOBREV_BEHANDLING'"},{name:"literal",value:"'INFOBREV_OPPHOLD'"},{name:"literal",value:"'INFOBREV_PÅMINNELSE'"},{name:"literal",value:"'OPPHØR-NYTT-BARN'"},{name:"literal",value:"'RE-HENDELSE-FØDSEL'"},{name:"literal",value:"'RE-HENDELSE-DØD-F'"},{name:"literal",value:"'RE-HENDELSE-DØD-B'"},{name:"literal",value:"'RE-HENDELSE-DØDFØD'"},{name:"literal",value:"'RE-HENDELSE-UTFLYTTING'"},{name:"literal",value:"'RE-VEDTAK-PSB'"},{name:"literal",value:"'FEIL_PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'FEIL_PRAKSIS_IVERKS_UTSET'"},{name:"literal",value:"'KLAGE_TILBAKE'"},{name:"literal",value:"'RE-YTELSE'"},{name:"literal",value:"'RE-REGISTEROPPL'"},{name:"literal",value:"'KØET-BEHANDLING'"},{name:"literal",value:"'RE-TILST-YT-INNVIL'"},{name:"literal",value:"'RE-TILST-YT-OPPH'"},{name:"literal",value:"'-'"}],required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}}]}},{name:"null"}],required:!0}},{key:"behandlingsfristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"erPaaVent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"originalVedtaksDato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingPaaVent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fristBehandlingPaaVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteArsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"sprakkode",value:{name:"union",raw:"foreldrepenger_behandlingslager_geografisk_Språkkode | null",elements:[{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0},{name:"null"}],required:!0}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"union",raw:"tjenester_behandling_dto_behandling_BehandlingsresultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: foreldrepenger_behandlingslager_behandling_BehandlingResultatType;
  avslagsarsak: foreldrepenger_behandlingslager_behandling_vilkår_Avslagsårsak | null;
  avslagsarsakFritekst: string | null;
  rettenTil: foreldrepenger_behandlingslager_behandling_RettenTil | null;
  konsekvenserForYtelsen: Array<foreldrepenger_behandlingslager_behandling_KonsekvensForYtelsen> | null;
  vedtaksbrev: foreldrepenger_behandlingslager_behandling_vedtak_Vedtaksbrev | null;
  vedtaksbrevStatus: foreldrepenger_domene_vedtak_intern_VedtaksbrevStatus;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall: boolean | null;
  skjæringstidspunkt: tjenester_behandling_dto_behandling_SkjæringstidspunktDto | null;
  endretDekningsgrad: boolean | null;
  opphørsdato: string | null;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:`| TEMP_FP_TILBAKE_BEHANDLINGRESULTATTYPE
| 'IKKE_FASTSATT'
| 'INNVILGET'
| 'AVSLÅTT'
| 'OPPHØR'
| 'HENLAGT_SØKNAD_TRUKKET'
| 'HENLAGT_FEILOPPRETTET'
| 'HENLAGT_BRUKER_DØD'
| 'MERGET_OG_HENLAGT'
| 'HENLAGT_SØKNAD_MANGLER'
| 'FORELDREPENGER_ENDRET'
| 'FORELDREPENGER_SENERE'
| 'INGEN_ENDRING'
| 'MANGLER_BEREGNINGSREGLER'
| 'KLAGE_AVVIST'
| 'KLAGE_MEDHOLD'
| 'KLAGE_DELVIS_MEDHOLD'
| 'KLAGE_OMGJORT_UGUNST'
| 'KLAGE_YTELSESVEDTAK_OPPHEVET'
| 'KLAGE_YTELSESVEDTAK_STADFESTET'
| 'KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET'
| 'HENLAGT_KLAGE_TRUKKET'
| 'HJEMSENDE_UTEN_OPPHEVE'
| 'ANKE_AVVIST'
| 'ANKE_MEDHOLD'
| 'ANKE_DELVIS_MEDHOLD'
| 'ANKE_OMGJORT_UGUNST'
| 'ANKE_OPPHEVE_OG_HJEMSENDE'
| 'ANKE_HJEMSENDE_UTEN_OPPHEV'
| 'ANKE_YTELSESVEDTAK_STADFESTET'
| 'HENLAGT_ANKE_TRUKKET'
| 'INNSYN_INNVILGET'
| 'INNSYN_DELVIS_INNVILGET'
| 'INNSYN_AVVIST'
| 'HENLAGT_INNSYN_TRUKKET'`,elements:[{name:"union",raw:`| 'IKKE_FASTSATT'
| 'FASTSATT'
| 'HENLAGT_FEILOPPRETTET'
| 'HENLAGT_FEILOPPRETTET_MED_BREV'
| 'HENLAGT_FEILOPPRETTET_UTEN_BREV'
| 'HENLAGT_KRAVGRUNNLAG_NULLSTILT'
| 'HENLAGT_TEKNISK_VEDLIKEHOLD'
| 'HENLAGT'
| 'INGEN_TILBAKEBETALING'
| 'DELVIS_TILBAKEBETALING'
| 'FULL_TILBAKEBETALING'`,elements:[{name:"literal",value:"'IKKE_FASTSATT'"},{name:"literal",value:"'FASTSATT'"},{name:"literal",value:"'HENLAGT_FEILOPPRETTET'"},{name:"literal",value:"'HENLAGT_FEILOPPRETTET_MED_BREV'"},{name:"literal",value:"'HENLAGT_FEILOPPRETTET_UTEN_BREV'"},{name:"literal",value:"'HENLAGT_KRAVGRUNNLAG_NULLSTILT'"},{name:"literal",value:"'HENLAGT_TEKNISK_VEDLIKEHOLD'"},{name:"literal",value:"'HENLAGT'"},{name:"literal",value:"'INGEN_TILBAKEBETALING'"},{name:"literal",value:"'DELVIS_TILBAKEBETALING'"},{name:"literal",value:"'FULL_TILBAKEBETALING'"}]},{name:"literal",value:"'IKKE_FASTSATT'"},{name:"literal",value:"'INNVILGET'"},{name:"literal",value:"'AVSLÅTT'"},{name:"literal",value:"'OPPHØR'"},{name:"literal",value:"'HENLAGT_SØKNAD_TRUKKET'"},{name:"literal",value:"'HENLAGT_FEILOPPRETTET'"},{name:"literal",value:"'HENLAGT_BRUKER_DØD'"},{name:"literal",value:"'MERGET_OG_HENLAGT'"},{name:"literal",value:"'HENLAGT_SØKNAD_MANGLER'"},{name:"literal",value:"'FORELDREPENGER_ENDRET'"},{name:"literal",value:"'FORELDREPENGER_SENERE'"},{name:"literal",value:"'INGEN_ENDRING'"},{name:"literal",value:"'MANGLER_BEREGNINGSREGLER'"},{name:"literal",value:"'KLAGE_AVVIST'"},{name:"literal",value:"'KLAGE_MEDHOLD'"},{name:"literal",value:"'KLAGE_DELVIS_MEDHOLD'"},{name:"literal",value:"'KLAGE_OMGJORT_UGUNST'"},{name:"literal",value:"'KLAGE_YTELSESVEDTAK_OPPHEVET'"},{name:"literal",value:"'KLAGE_YTELSESVEDTAK_STADFESTET'"},{name:"literal",value:"'KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET'"},{name:"literal",value:"'HENLAGT_KLAGE_TRUKKET'"},{name:"literal",value:"'HJEMSENDE_UTEN_OPPHEVE'"},{name:"literal",value:"'ANKE_AVVIST'"},{name:"literal",value:"'ANKE_MEDHOLD'"},{name:"literal",value:"'ANKE_DELVIS_MEDHOLD'"},{name:"literal",value:"'ANKE_OMGJORT_UGUNST'"},{name:"literal",value:"'ANKE_OPPHEVE_OG_HJEMSENDE'"},{name:"literal",value:"'ANKE_HJEMSENDE_UTEN_OPPHEV'"},{name:"literal",value:"'ANKE_YTELSESVEDTAK_STADFESTET'"},{name:"literal",value:"'HENLAGT_ANKE_TRUKKET'"},{name:"literal",value:"'INNSYN_INNVILGET'"},{name:"literal",value:"'INNSYN_DELVIS_INNVILGET'"},{name:"literal",value:"'INNSYN_AVVIST'"},{name:"literal",value:"'HENLAGT_INNSYN_TRUKKET'"}],required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_vilkår_Avslagsårsak | null",elements:[{name:"union",raw:`| '1001'
| '1002'
| '1003'
| '1004'
| '1005'
| '1006'
| '1007'
| '1008'
| '1009'
| '1010'
| '1011'
| '1012'
| '1013'
| '1014'
| '1015'
| '1016'
| '1017'
| '1018'
| '1019'
| '1020'
| '1021'
| '1023'
| '1024'
| '1025'
| '1026'
| '1027'
| '1028'
| '1029'
| '1031'
| '1032'
| '1033'
| '1034'
| '1035'
| '1041'
| '1051'
| '1052'
| '1060'
| '1061'
| '1062'
| '1063'
| '1064'
| '1065'
| '1066'
| '1099'
| '-'`,elements:[{name:"literal",value:"'1001'"},{name:"literal",value:"'1002'"},{name:"literal",value:"'1003'"},{name:"literal",value:"'1004'"},{name:"literal",value:"'1005'"},{name:"literal",value:"'1006'"},{name:"literal",value:"'1007'"},{name:"literal",value:"'1008'"},{name:"literal",value:"'1009'"},{name:"literal",value:"'1010'"},{name:"literal",value:"'1011'"},{name:"literal",value:"'1012'"},{name:"literal",value:"'1013'"},{name:"literal",value:"'1014'"},{name:"literal",value:"'1015'"},{name:"literal",value:"'1016'"},{name:"literal",value:"'1017'"},{name:"literal",value:"'1018'"},{name:"literal",value:"'1019'"},{name:"literal",value:"'1020'"},{name:"literal",value:"'1021'"},{name:"literal",value:"'1023'"},{name:"literal",value:"'1024'"},{name:"literal",value:"'1025'"},{name:"literal",value:"'1026'"},{name:"literal",value:"'1027'"},{name:"literal",value:"'1028'"},{name:"literal",value:"'1029'"},{name:"literal",value:"'1031'"},{name:"literal",value:"'1032'"},{name:"literal",value:"'1033'"},{name:"literal",value:"'1034'"},{name:"literal",value:"'1035'"},{name:"literal",value:"'1041'"},{name:"literal",value:"'1051'"},{name:"literal",value:"'1052'"},{name:"literal",value:"'1060'"},{name:"literal",value:"'1061'"},{name:"literal",value:"'1062'"},{name:"literal",value:"'1063'"},{name:"literal",value:"'1064'"},{name:"literal",value:"'1065'"},{name:"literal",value:"'1066'"},{name:"literal",value:"'1099'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"rettenTil",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_RettenTil | null",elements:[{name:"union",raw:"'HAR_RETT_TIL_FP' | 'HAR_IKKE_RETT_TIL_FP' | '-'",elements:[{name:"literal",value:"'HAR_RETT_TIL_FP'"},{name:"literal",value:"'HAR_IKKE_RETT_TIL_FP'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"konsekvenserForYtelsen",value:{name:"union",raw:"Array<foreldrepenger_behandlingslager_behandling_KonsekvensForYtelsen> | null",elements:[{name:"Array",elements:[{name:"union",raw:`| 'FORELDREPENGER_OPPHØRER'
| 'ENDRING_I_BEREGNING'
| 'ENDRING_I_UTTAK'
| 'ENDRING_I_FORDELING_AV_YTELSEN'
| 'INGEN_ENDRING'
| '-'`,elements:[{name:"literal",value:"'FORELDREPENGER_OPPHØRER'"},{name:"literal",value:"'ENDRING_I_BEREGNING'"},{name:"literal",value:"'ENDRING_I_UTTAK'"},{name:"literal",value:"'ENDRING_I_FORDELING_AV_YTELSEN'"},{name:"literal",value:"'INGEN_ENDRING'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_KonsekvensForYtelsen>"},{name:"null"}],required:!0}},{key:"vedtaksbrev",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_vedtak_Vedtaksbrev | null",elements:[{name:"union",raw:"'AUTOMATISK' | 'FRITEKST' | 'INGEN' | '-'",elements:[{name:"literal",value:"'AUTOMATISK'"},{name:"literal",value:"'FRITEKST'"},{name:"literal",value:"'INGEN'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"skjæringstidspunkt",value:{name:"union",raw:"tjenester_behandling_dto_behandling_SkjæringstidspunktDto | null",elements:[{name:"signature",type:"object",raw:`{
  dato: string | null;
  utenMinsterett: boolean | null;
}`,signature:{properties:[{key:"dato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"utenMinsterett",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"endretDekningsgrad",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  erAutomatiskRevurdering: boolean | null;
  behandlingArsakType: foreldrepenger_behandlingslager_behandling_BehandlingÅrsakType;
  manueltOpprettet: boolean;
}`,signature:{properties:[{key:"erAutomatiskRevurdering",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"behandlingArsakType",value:{name:"union",raw:`| TEMP_FRA_FP_TILBAKE_ÅRSAK
| 'RE-LOV'
| 'RE-RGLF'
| 'RE-FEFAKTA'
| 'RE-PRSSL'
| 'RE-ANNET'
| 'RE-MDL'
| 'RE-OPTJ'
| 'RE-FRDLING'
| 'RE-INNTK'
| 'RE-FØDSEL'
| 'RE-DØD'
| 'RE-SRTB'
| 'RE-FRIST'
| 'RE-BER-GRUN'
| 'RE-KLAG-U-INNTK'
| 'RE-KLAG-M-INNTK'
| 'ETTER_KLAGE'
| 'RE-MF'
| 'RE-MFIP'
| 'RE-AVAB'
| 'RE-END-FRA-BRUKER'
| 'RE-END-INNTEKTSMELD'
| 'BERØRT-BEHANDLING'
| 'REBEREGN-FERIEPENGER'
| 'RE-UTSATT-START'
| 'RE-SATS-REGULERING'
| 'ENDRE-DEKNINGSGRAD'
| 'INFOBREV_BEHANDLING'
| 'INFOBREV_OPPHOLD'
| 'INFOBREV_PÅMINNELSE'
| 'OPPHØR-NYTT-BARN'
| 'RE-HENDELSE-FØDSEL'
| 'RE-HENDELSE-DØD-F'
| 'RE-HENDELSE-DØD-B'
| 'RE-HENDELSE-DØDFØD'
| 'RE-HENDELSE-UTFLYTTING'
| 'RE-VEDTAK-PSB'
| 'FEIL_PRAKSIS_UTSETTELSE'
| 'FEIL_PRAKSIS_IVERKS_UTSET'
| 'KLAGE_TILBAKE'
| 'RE-YTELSE'
| 'RE-REGISTEROPPL'
| 'KØET-BEHANDLING'
| 'RE-TILST-YT-INNVIL'
| 'RE-TILST-YT-OPPH'
| '-'`,elements:[{name:"union",raw:`| 'RE_KLAGE_NFP'
| 'RE_KLAGE_KA'
| 'RE_VILKÅR'
| 'RE_FORELDELSE'
| 'RE_FEILUTBETALT_BELØP_REDUSERT'
| 'FATTET_AV_ANNEN_INSTANS'`,elements:[{name:"literal",value:"'RE_KLAGE_NFP'"},{name:"literal",value:"'RE_KLAGE_KA'"},{name:"literal",value:"'RE_VILKÅR'"},{name:"literal",value:"'RE_FORELDELSE'"},{name:"literal",value:"'RE_FEILUTBETALT_BELØP_REDUSERT'"},{name:"literal",value:"'FATTET_AV_ANNEN_INSTANS'"}]},{name:"literal",value:"'RE-LOV'"},{name:"literal",value:"'RE-RGLF'"},{name:"literal",value:"'RE-FEFAKTA'"},{name:"literal",value:"'RE-PRSSL'"},{name:"literal",value:"'RE-ANNET'"},{name:"literal",value:"'RE-MDL'"},{name:"literal",value:"'RE-OPTJ'"},{name:"literal",value:"'RE-FRDLING'"},{name:"literal",value:"'RE-INNTK'"},{name:"literal",value:"'RE-FØDSEL'"},{name:"literal",value:"'RE-DØD'"},{name:"literal",value:"'RE-SRTB'"},{name:"literal",value:"'RE-FRIST'"},{name:"literal",value:"'RE-BER-GRUN'"},{name:"literal",value:"'RE-KLAG-U-INNTK'"},{name:"literal",value:"'RE-KLAG-M-INNTK'"},{name:"literal",value:"'ETTER_KLAGE'"},{name:"literal",value:"'RE-MF'"},{name:"literal",value:"'RE-MFIP'"},{name:"literal",value:"'RE-AVAB'"},{name:"literal",value:"'RE-END-FRA-BRUKER'"},{name:"literal",value:"'RE-END-INNTEKTSMELD'"},{name:"literal",value:"'BERØRT-BEHANDLING'"},{name:"literal",value:"'REBEREGN-FERIEPENGER'"},{name:"literal",value:"'RE-UTSATT-START'"},{name:"literal",value:"'RE-SATS-REGULERING'"},{name:"literal",value:"'ENDRE-DEKNINGSGRAD'"},{name:"literal",value:"'INFOBREV_BEHANDLING'"},{name:"literal",value:"'INFOBREV_OPPHOLD'"},{name:"literal",value:"'INFOBREV_PÅMINNELSE'"},{name:"literal",value:"'OPPHØR-NYTT-BARN'"},{name:"literal",value:"'RE-HENDELSE-FØDSEL'"},{name:"literal",value:"'RE-HENDELSE-DØD-F'"},{name:"literal",value:"'RE-HENDELSE-DØD-B'"},{name:"literal",value:"'RE-HENDELSE-DØDFØD'"},{name:"literal",value:"'RE-HENDELSE-UTFLYTTING'"},{name:"literal",value:"'RE-VEDTAK-PSB'"},{name:"literal",value:"'FEIL_PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'FEIL_PRAKSIS_IVERKS_UTSET'"},{name:"literal",value:"'KLAGE_TILBAKE'"},{name:"literal",value:"'RE-YTELSE'"},{name:"literal",value:"'RE-REGISTEROPPL'"},{name:"literal",value:"'KØET-BEHANDLING'"},{name:"literal",value:"'RE-TILST-YT-INNVIL'"},{name:"literal",value:"'RE-TILST-YT-OPPH'"},{name:"literal",value:"'-'"}],required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}}]}}],raw:"Array<tjenester_behandling_dto_behandling_BehandlingÅrsakDto>",required:!0}},{key:"vilkår",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: foreldrepenger_behandlingslager_behandling_vilkår_VilkårType;
  vilkarStatus: foreldrepenger_behandlingslager_behandling_vilkår_VilkårUtfallType;
  avslagKode: string | null;
  lovReferanse: string | null;
  overstyrbar: boolean;
  evaluering: string | null;
  input: string | null;
}`,signature:{properties:[{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
| 'FP_VK_11'
| 'FP_VK_16'
| 'FP_VK_2'
| 'FP_VK_2_F'
| 'FP_VK_2_L'
| 'FP_VK_3'
| 'FP_VK_4'
| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| 'FP_VK_34'
| 'FP_VK_21'
| 'FP_VK_23'
| 'FP_VK_41'
| 'SVP_VK_1'
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0}},{key:"vilkarStatus",value:{name:"union",raw:`| 'OPPFYLT'
| 'IKKE_OPPFYLT'
| 'IKKE_VURDERT'
| '-'`,elements:[{name:"literal",value:"'OPPFYLT'"},{name:"literal",value:"'IKKE_OPPFYLT'"},{name:"literal",value:"'IKKE_VURDERT'"},{name:"literal",value:"'-'"}],required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"lovReferanse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"overstyrbar",value:{name:"boolean",required:!0}},{key:"evaluering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"input",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:"Array<tjenester_behandling_vilkår_VilkårDto>",required:!0}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: {
    [key: string]: unknown;
  };
  type: rest_ResourceLink_HttpMethod;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"signature",type:"object",raw:`{
  [key: string]: unknown;
}`,signature:{properties:[{key:{name:"string"},value:{name:"unknown",required:!0}}]},required:!1}},{key:"type",value:{name:"union",raw:"'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT'",elements:[{name:"literal",value:"'DELETE'"},{name:"literal",value:"'GET'"},{name:"literal",value:"'PATCH'"},{name:"literal",value:"'POST'"},{name:"literal",value:"'PUT'"}],required:!0}}]}}],raw:"Array<rest_ResourceLink>",required:!0}},{key:"behandlingTillatteOperasjoner",value:{name:"union",raw:"tjenester_behandling_dto_BehandlingOperasjonerDto | null",elements:[{name:"signature",type:"object",raw:`{
  uuid: string | null;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanMerkesHaster: boolean;
  behandlingKanSettesPaVent: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingFraBeslutter: boolean;
  behandlingTilGodkjenning: boolean;
  vergeBehandlingsmeny: foreldrepenger_domene_person_verge_dto_VergeBehandlingsmenyEnum;
}`,signature:{properties:[{key:"uuid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanMerkesHaster",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"union",raw:"'SKJUL' | 'OPPRETT' | 'FJERN'",elements:[{name:"literal",value:"'SKJUL'"},{name:"literal",value:"'OPPRETT'"},{name:"literal",value:"'FJERN'"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig: boolean | null;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}],raw:"Array<foreldrepenger_kontrakter_formidling_v3_BrevmalDto>",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: Array<tjenester_behandling_vedtak_dto_TotrinnskontrollAksjonspunkterDto>;
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"string",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter: Array<tjenester_behandling_vedtak_dto_TotrinnskontrollAktivitetDto>;
  beregningDto: tjenester_behandling_vedtak_dto_TotrinnsBeregningDto | null;
  besluttersBegrunnelse: string | null;
  totrinnskontrollGodkjent: boolean;
  vurderPaNyttArsaker: Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>;
  uttakPerioder: Array<foreldrepenger_domene_uttak_UttakPeriodeEndringDto>;
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"opptjeningAktiviteter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktivitetType: string;
  erEndring: boolean;
  godkjent: boolean;
  arbeidsgiverReferanse: string | null;
  arbeidsgiverNavn: string | null;
  orgnr: string | null;
  privatpersonFødselsdato: string | null;
}`,signature:{properties:[{key:"aktivitetType",value:{name:"string",required:!0}},{key:"erEndring",value:{name:"boolean",required:!0}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"arbeidsgiverNavn",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"orgnr",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"privatpersonFødselsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:"Array<tjenester_behandling_vedtak_dto_TotrinnskontrollAktivitetDto>",required:!0}},{key:"beregningDto",value:{name:"union",raw:"tjenester_behandling_vedtak_dto_TotrinnsBeregningDto | null",elements:[{name:"signature",type:"object",raw:`{
  fastsattVarigEndringNaering: boolean | null;
  faktaOmBeregningTilfeller: Array<foreldrepenger_domene_modell_kodeverk_FaktaOmBeregningTilfelle> | null;
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"union",raw:"Array<foreldrepenger_domene_modell_kodeverk_FaktaOmBeregningTilfelle> | null",elements:[{name:"Array",elements:[{name:"union",raw:`| 'VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD'
| 'VURDER_SN_NY_I_ARBEIDSLIVET'
| 'VURDER_NYOPPSTARTET_FL'
| 'FASTSETT_MAANEDSINNTEKT_FL'
| 'FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'
| 'VURDER_LØNNSENDRING'
| 'FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'
| 'VURDER_AT_OG_FL_I_SAMME_ORGANISASJON'
| 'FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE'
| 'VURDER_ETTERLØNN_SLUTTPAKKE'
| 'FASTSETT_ETTERLØNN_SLUTTPAKKE'
| 'VURDER_MOTTAR_YTELSE'
| 'VURDER_BESTEBEREGNING'
| 'VURDER_MILITÆR_SIVILTJENESTE'
| 'VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT'
| 'FASTSETT_BG_KUN_YTELSE'
| 'TILSTØTENDE_YTELSE'
| 'FASTSETT_ENDRET_BEREGNINGSGRUNNLAG'
| '-'`,elements:[{name:"literal",value:"'VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD'"},{name:"literal",value:"'VURDER_SN_NY_I_ARBEIDSLIVET'"},{name:"literal",value:"'VURDER_NYOPPSTARTET_FL'"},{name:"literal",value:"'FASTSETT_MAANEDSINNTEKT_FL'"},{name:"literal",value:"'FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'VURDER_LØNNSENDRING'"},{name:"literal",value:"'FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'VURDER_AT_OG_FL_I_SAMME_ORGANISASJON'"},{name:"literal",value:"'FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE'"},{name:"literal",value:"'VURDER_ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'FASTSETT_ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'VURDER_MOTTAR_YTELSE'"},{name:"literal",value:"'VURDER_BESTEBEREGNING'"},{name:"literal",value:"'VURDER_MILITÆR_SIVILTJENESTE'"},{name:"literal",value:"'VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT'"},{name:"literal",value:"'FASTSETT_BG_KUN_YTELSE'"},{name:"literal",value:"'TILSTØTENDE_YTELSE'"},{name:"literal",value:"'FASTSETT_ENDRET_BEREGNINGSGRUNNLAG'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_domene_modell_kodeverk_FaktaOmBeregningTilfelle>"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!0}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>",required:!0}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  erSlettet: boolean | null;
  erEndret: boolean | null;
  erLagtTil: boolean | null;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"erSlettet",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"erEndret",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"erLagtTil",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}],raw:"Array<foreldrepenger_domene_uttak_UttakPeriodeEndringDto>",required:!0}}]}}],raw:"Array<tjenester_behandling_vedtak_dto_TotrinnskontrollAksjonspunkterDto>",required:!0}}]}}],raw:"Array<tjenester_behandling_vedtak_dto_TotrinnskontrollSkjermlenkeContextDto>",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"risikoAksjonspunkt",value:{name:"union",raw:"tjenester_behandling_aksjonspunkt_AksjonspunktDto | null",elements:[{name:"signature",type:"object",raw:`{
  definisjon: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktDefinisjon;
  status: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType: foreldrepenger_behandlingslager_behandling_vilkår_VilkårType | null;
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent: boolean | null;
  vurderPaNyttArsaker: Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak> | null;
  besluttersBegrunnelse: string | null;
  aksjonspunktType: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktType;
  kanLoses: boolean;
  erAktivt: boolean;
  fristTid: string | null;
  endretTidspunkt: string | null;
  endretAv: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"union",raw:`| '5001'
| '5027'
| '5004'
| '5005'
| '5006'
| '5007'
| '5008'
| '5011'
| '5012'
| '5013'
| '5014'
| '5015'
| '5016'
| '5017'
| '5002'
| '5026'
| '5028'
| '5030'
| '5031'
| '5033'
| '5034'
| '5003'
| '5035'
| '5037'
| '5038'
| '5039'
| '5040'
| '5043'
| '5046'
| '5047'
| '5049'
| '5051'
| '5052'
| '5054'
| '5055'
| '5057'
| '5058'
| '5059'
| '5060'
| '5061'
| '5068'
| '5064'
| '5065'
| '5063'
| '5066'
| '5071'
| '5072'
| '5069'
| '5073'
| '5076'
| '5077'
| '5085'
| '5082'
| '5084'
| '5029'
| '5086'
| '5089'
| '5041'
| '5062'
| '5091'
| '5092'
| '5095'
| '5096'
| '5074'
| '5101'
| '5102'
| '5103'
| '6002'
| '6003'
| '6004'
| '6005'
| '6006'
| '6008'
| '6009'
| '6010'
| '6011'
| '6065'
| '6014'
| '6015'
| '6045'
| '6016'
| '6018'
| '6017'
| '6103'
| '7001'
| '7002'
| '7003'
| '7005'
| '7007'
| '7008'
| '7011'
| '7013'
| '7014'
| '7020'
| '7030'
| '7033'
| '7037'
| '7039'
| '7040'
| "UNDEFINED('null')"
| '5009'
| '5019'
| '5020'
| '5021'
| '5022'
| '5023'
| '5024'
| '5025'
| '5032'
| '5036'
| '5042'
| '5044'
| '5045'
| '5048'
| '5050'
| '5053'
| '5056'
| '5067'
| '5070'
| '5075'
| '5078'
| '5079'
| '5080'
| '5081'
| '5083'
| '5087'
| '5088'
| '5090'
| '5093'
| '5094'
| '5097'
| '5098'
| '5099'
| '6007'
| '6012'
| '6013'
| '6068'
| '6070'
| '7004'
| '7006'
| '7009'
| '7015'
| '7016'
| '7017'
| '7018'
| '7019'
| '7021'
| '7022'
| '7023'
| '7024'
| '7025'
| '7026'
| '7027'
| '7028'
| '7029'
| '7032'
| '7034'
| '7035'
| '7036'
| '7038'
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_vilkår_VilkårType | null",elements:[{name:"union",raw:`| 'FP_VK_1'
| 'FP_VK_11'
| 'FP_VK_16'
| 'FP_VK_2'
| 'FP_VK_2_F'
| 'FP_VK_2_L'
| 'FP_VK_3'
| 'FP_VK_4'
| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| 'FP_VK_34'
| 'FP_VK_21'
| 'FP_VK_23'
| 'FP_VK_41'
| 'SVP_VK_1'
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0},{name:"null"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak> | null",elements:[{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>"},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:`| 'AUTO'
| 'MANU'
| 'OVST'
| 'SAOV'
| '-'`,elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"kontrollResultat",value:{name:"union",raw:"tjenester_behandling_kontroll_dto_KontrollresultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: foreldrepenger_behandlingslager_risikoklassifisering_Kontrollresultat;
  iayFaresignaler: tjenester_behandling_kontroll_dto_KontrollresultatDto_FaresignalgruppeDto | null;
  medlFaresignaler: tjenester_behandling_kontroll_dto_KontrollresultatDto_FaresignalgruppeDto | null;
  faresignalVurdering: foreldrepenger_behandlingslager_risikoklassifisering_FaresignalVurdering | null;
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"union",raw:`| 'HOY'
| 'IKKE_HOY'
| 'IKKE_KLASSIFISERT'
| '-'`,elements:[{name:"literal",value:"'HOY'"},{name:"literal",value:"'IKKE_HOY'"},{name:"literal",value:"'IKKE_KLASSIFISERT'"},{name:"literal",value:"'-'"}],required:!0}},{key:"iayFaresignaler",value:{name:"union",raw:"tjenester_behandling_kontroll_dto_KontrollresultatDto_FaresignalgruppeDto | null",elements:[{name:"signature",type:"object",raw:`{
  faresignaler: Array<string>;
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]}},{name:"null"}],required:!0}},{key:"medlFaresignaler",value:{name:"union",raw:"tjenester_behandling_kontroll_dto_KontrollresultatDto_FaresignalgruppeDto | null",elements:[{name:"signature",type:"object",raw:`{
  faresignaler: Array<string>;
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]}},{name:"null"}],required:!0}},{key:"faresignalVurdering",value:{name:"union",raw:"foreldrepenger_behandlingslager_risikoklassifisering_FaresignalVurdering | null",elements:[{name:"union",raw:`| 'INNVIRKNING'
| 'INNVILGET_REDUSERT'
| 'INNVILGET_UENDRET'
| 'AVSLAG_FARESIGNAL'
| 'AVSLAG_ANNET'
| 'INGEN_INNVIRKNING'
| '-'`,elements:[{name:"literal",value:"'INNVIRKNING'"},{name:"literal",value:"'INNVILGET_REDUSERT'"},{name:"literal",value:"'INNVILGET_UENDRET'"},{name:"literal",value:"'AVSLAG_FARESIGNAL'"},{name:"literal",value:"'AVSLAG_ANNET'"},{name:"literal",value:"'INGEN_INNVIRKNING'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"ugunstAksjonspunkt",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"behandlingKoet",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}],raw:"BehandlingAppKontekst[]"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>]: KodeverkMedNavn<
    K extends KodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"signature",type:"object",raw:`{
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatusEnum;
  BehandlingType: BehandlingTypeEnum;
  BehandlingÅrsakType: BehandlingArsakTypeEnum;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatusEnum;
  FagsakYtelseType: FagsakYtelseTypeEnum;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktorEnum;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsenEnum;
  Landkoder: Landkode;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdArsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverforingArsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StonadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkarType;
  VirksomhetType: NaringsvirksomhetType;
  VurderÅrsak: VurderÅrsak;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatusEnum",required:!0}},{key:"BehandlingType",value:{name:"BehandlingTypeEnum",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakTypeEnum",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatusEnum",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseTypeEnum",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktorEnum",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsenEnum",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:`| 'BARN'
| 'FBARN'
| 'VOKSEN'
| 'ADVOKAT'
| 'ANNEN_F'`,elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavn<
  K extends KodeverkType ? K : unknown
>[]`}}]}},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"union",raw:"VilkarType | '-'",elements:[{name:"VilkarType"},{name:"literal",value:"'-'"}]},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType | '-', KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
  lovHjemmel: string;
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}}]}}]}],raw:"GraderingAvslagÅrsakKodeverk[]",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'PeriodeResultatÅrsak'> & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};function BR(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ud={exports:{}},Mt={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sd;function VR(){if(sd)return Mt;sd=1;var e=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function t(a,i,s){var m=null;if(s!==void 0&&(m=""+s),i.key!==void 0&&(m=""+i.key),"key"in i){s={};for(var d in i)d!=="key"&&(s[d]=i[d])}else s=i;return i=s.ref,{$$typeof:e,type:a,key:m,ref:i!==void 0?i:null,props:s}}return Mt.Fragment=l,Mt.jsx=t,Mt.jsxs=t,Mt}var od;function MR(){return od||(od=1,ud.exports=VR()),ud.exports}MR();var pu={exports:{}},jR=pu.exports,md;function qR(){return md||(md=1,function(e,l){(function(t,a){e.exports=a()})(jR,function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},a=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,i=/\d/,s=/\d\d/,m=/\d\d?/,d=/\d*[^-_:/,()\s\d]+/,v={},f=function(T){return(T=+T)+(T>68?1900:2e3)},_=function(T){return function(b){this[T]=+b}},h=[/[+-]\d\d:?(\d\d)?|Z/,function(T){(this.zone||(this.zone={})).offset=function(b){if(!b||b==="Z")return 0;var K=b.match(/([+-]|\d\d)/g),I=60*K[1]+(+K[2]||0);return I===0?0:K[0]==="+"?-I:I}(T)}],k=function(T){var b=v[T];return b&&(b.indexOf?b:b.s.concat(b.f))},y=function(T,b){var K,I=v.meridiem;if(I){for(var x=1;x<=24;x+=1)if(T.indexOf(I(x,0,b))>-1){K=x>12;break}}else K=T===(b?"pm":"PM");return K},P={A:[d,function(T){this.afternoon=y(T,!1)}],a:[d,function(T){this.afternoon=y(T,!0)}],Q:[i,function(T){this.month=3*(T-1)+1}],S:[i,function(T){this.milliseconds=100*+T}],SS:[s,function(T){this.milliseconds=10*+T}],SSS:[/\d{3}/,function(T){this.milliseconds=+T}],s:[m,_("seconds")],ss:[m,_("seconds")],m:[m,_("minutes")],mm:[m,_("minutes")],H:[m,_("hours")],h:[m,_("hours")],HH:[m,_("hours")],hh:[m,_("hours")],D:[m,_("day")],DD:[s,_("day")],Do:[d,function(T){var b=v.ordinal,K=T.match(/\d+/);if(this.day=K[0],b)for(var I=1;I<=31;I+=1)b(I).replace(/\[|\]/g,"")===T&&(this.day=I)}],w:[m,_("week")],ww:[s,_("week")],M:[m,_("month")],MM:[s,_("month")],MMM:[d,function(T){var b=k("months"),K=(k("monthsShort")||b.map(function(I){return I.slice(0,3)})).indexOf(T)+1;if(K<1)throw new Error;this.month=K%12||K}],MMMM:[d,function(T){var b=k("months").indexOf(T)+1;if(b<1)throw new Error;this.month=b%12||b}],Y:[/[+-]?\d+/,_("year")],YY:[s,function(T){this.year=f(T)}],YYYY:[/\d{4}/,_("year")],Z:h,ZZ:h};function R(T){var b,K;b=T,K=v&&v.formats;for(var I=(T=b.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(Q,X,Z){var M=Z&&Z.toUpperCase();return X||K[Z]||t[Z]||K[M].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(G,z,re){return z||re.slice(1)})})).match(a),x=I.length,D=0;D<x;D+=1){var H=I[D],w=P[H],O=w&&w[0],W=w&&w[1];I[D]=W?{regex:O,parser:W}:H.replace(/^\[|\]$/g,"")}return function(Q){for(var X={},Z=0,M=0;Z<x;Z+=1){var G=I[Z];if(typeof G=="string")M+=G.length;else{var z=G.regex,re=G.parser,J=Q.slice(M),U=z.exec(J)[0];re.call(X,U),Q=Q.replace(U,"")}}return function($){var ae=$.afternoon;if(ae!==void 0){var ne=$.hours;ae?ne<12&&($.hours+=12):ne===12&&($.hours=0),delete $.afternoon}}(X),X}}return function(T,b,K){K.p.customParseFormat=!0,T&&T.parseTwoDigitYear&&(f=T.parseTwoDigitYear);var I=b.prototype,x=I.parse;I.parse=function(D){var H=D.date,w=D.utc,O=D.args;this.$u=w;var W=O[1];if(typeof W=="string"){var Q=O[2]===!0,X=O[3]===!0,Z=Q||X,M=O[2];X&&(M=O[2]),v=this.$locale(),!Q&&M&&(v=K.Ls[M]),this.$d=function(J,U,$,ae){try{if(["x","X"].indexOf(U)>-1)return new Date((U==="X"?1e3:1)*J);var ne=R(U)(J),ue=ne.year,ce=ne.month,En=ne.day,je=ne.hours,Oe=ne.minutes,qe=ne.seconds,pe=ne.milliseconds,Ne=ne.zone,Xe=ne.week,He=new Date,Ue=En||(ue||ce?1:He.getDate()),Rn=ue||He.getFullYear(),Be=0;ue&&!ce||(Be=ce>0?ce-1:He.getMonth());var Ze,Qn=je||0,Qe=Oe||0,Hn=qe||0,er=pe||0;return Ne?new Date(Date.UTC(Rn,Be,Ue,Qn,Qe,Hn,er+60*Ne.offset*1e3)):$?new Date(Date.UTC(Rn,Be,Ue,Qn,Qe,Hn,er)):(Ze=new Date(Rn,Be,Ue,Qn,Qe,Hn,er),Xe&&(Ze=ae(Ze).week(Xe).toDate()),Ze)}catch{return new Date("")}}(H,W,w,K),this.init(),M&&M!==!0&&(this.$L=this.locale(M).$L),Z&&H!=this.format(W)&&(this.$d=new Date("")),v={}}else if(W instanceof Array)for(var G=W.length,z=1;z<=G;z+=1){O[1]=W[z-1];var re=K.apply(this,O);if(re.isValid()){this.$d=re.$d,this.$L=re.$L,this.init();break}z===G&&(this.$d=new Date(""))}else x.call(this,D)}}})}(pu)),pu.exports}var HR=qR();const xR=BR(HR);vt.extend(xR);const na={"AdresseVisning.Adresse":"Adresse","ForelderPanel.Soker":"Søker","ForelderPanel.AnnenForelder":"Annen forelder","AlleBarnPanel.Barn":"Barn","AlleBarnPanel.BarnNr":"Barn {nummer}","AlleBarnPanel.Fodt":"Født","AlleBarnPanel.Dod":"Død","PersonPanel.RolleOgNavn":"{rolle, select, BRUKER {Søker, } ANNEN_PART {Den andre forelderen, } BARN {Barnet, } other {} }{navn}","PersonPanel.Beskrivelse.Bruker":"Adresser for søker registrert i folkeregisteret gyldige for de siste 12 månedene","PersonPanel.Beskrivelse.Barn":"Adresser for barnet registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Beskrivelse.Annenpart":"Adresser for den andre forelderen registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Fodt":"Født {dato}","PersonPanel.Dod":"Død {dato}","AdresseTabell.IngenAdresse":"Ingen adresser funnet for {erAnnenpart, select, true {den andre forelderen} other {søker} }.","AdresseTabell.SammeAdresse":"Den andre forelderen har samme adresse som søker på skjæringstidspunktet","AdresseTabell.PeriodeLabel":"Periode","AdresseTabell.AdresseLabel":"Adresse","AdresseTabell.TypeLabel":"Type","MerkePanel.Dod":"DØD","MerkePanel.DodTittel":"Personen er død","MerkePanel.DodFodt":"DØDFØDT","MerkePanel.Diskresjon6":"Kode 6","MerkePanel.Diskresjon7":"Kode 7","MerkePanel.EgenAnsatt":"Nav","MerkePanel.Verge":"Verge","MerkePanel.Diskresjon6Tittel":"Personen har diskresjonsmerking kode 6","MerkePanel.Diskresjon7Tittel":"Personen har diskresjonsmerking kode 7","MerkePanel.EgenAnsattTittel":"Personen er ansatt i Nav","MerkePanel.VergeTittel":"Personen har verge","SubmitButton.ConfirmInformation":"Bekreft og fortsett","FaktaBegrunnelseTextField.BegrunnEndringene":"Begrunn endringene","FaktaBegrunnelseTextField.Vurdering":"Vurdering","FaktaBegrunnelseTextField.Begrunnelse":"Begrunnelse","TrueFalseInput.True":"Ja","TrueFalseInput.False":"Nei","FaktaKilde.Soknad":"FRA SØKNADEN","FaktaKilde.FREG":"FRA FOLKEREGISTERET","FaktaKilde.MEDL":"FRA MEDLEMSKAPSREGISTERET","FaktaKilde.Ukjent":"FRA UKJENT KILDE","FaktaKilde.SBH":"FRA SAKSBEHANDLER"};jn(na);jn(na);jn(na);const UR=(e,l)=>{const t=new Date(e.tom??Yt),a=new Date(l.tom??Yt);if(t>a)return-1;if(t<a)return 1;if(e.fom&&!l.fom)return-1;if(!e.fom&&l.fom)return 1;if(e.fom&&l.fom){const i=new Date(e.fom),s=new Date(l.fom);if(i>s)return-1;if(i<s)return 1}return 0};var xt={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var CR=xt.exports,dd;function YR(){return dd||(dd=1,function(e,l){(function(){var t,a="4.17.21",i=200,s="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",m="Expected a function",d="Invalid `variable` option passed into `_.template`",v="__lodash_hash_undefined__",f=500,_="__lodash_placeholder__",h=1,k=2,y=4,P=1,R=2,T=1,b=2,K=4,I=8,x=16,D=32,H=64,w=128,O=256,W=512,Q=30,X="...",Z=800,M=16,G=1,z=2,re=3,J=1/0,U=9007199254740991,$=17976931348623157e292,ae=NaN,ne=4294967295,ue=ne-1,ce=ne>>>1,En=[["ary",w],["bind",T],["bindKey",b],["curry",I],["curryRight",x],["flip",W],["partial",D],["partialRight",H],["rearg",O]],je="[object Arguments]",Oe="[object Array]",qe="[object AsyncFunction]",pe="[object Boolean]",Ne="[object Date]",Xe="[object DOMException]",He="[object Error]",Ue="[object Function]",Rn="[object GeneratorFunction]",Be="[object Map]",Ze="[object Number]",Qn="[object Null]",Qe="[object Object]",Hn="[object Promise]",er="[object Proxy]",_t="[object RegExp]",On="[object Set]",pt="[object String]",la="[object Symbol]",iv="[object Undefined]",ht="[object WeakMap]",uv="[object WeakSet]",Tt="[object ArrayBuffer]",xr="[object DataView]",yl="[object Float32Array]",Rl="[object Float64Array]",Nl="[object Int8Array]",Al="[object Int16Array]",bl="[object Int32Array]",Sl="[object Uint8Array]",Il="[object Uint8ClampedArray]",Ll="[object Uint16Array]",Dl="[object Uint32Array]",sv=/\b__p \+= '';/g,ov=/\b(__p \+=) '' \+/g,mv=/(__e\(.*?\)|\b__t\)) \+\n'';/g,zu=/&(?:amp|lt|gt|quot|#39);/g,Xu=/[&<>"']/g,dv=RegExp(zu.source),gv=RegExp(Xu.source),vv=/<%-([\s\S]+?)%>/g,Ev=/<%([\s\S]+?)%>/g,Zu=/<%=([\s\S]+?)%>/g,fv=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,cv=/^\w*$/,_v=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Pl=/[\\^$.*+?()[\]{}|]/g,pv=RegExp(Pl.source),Kl=/^\s+/,hv=/\s/,Tv=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,kv=/\{\n\/\* \[wrapped with (.+)\] \*/,yv=/,? & /,Rv=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Nv=/[()=,{}\[\]\/\s]/,Av=/\\(\\)?/g,bv=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Qu=/\w*$/,Sv=/^[-+]0x[0-9a-f]+$/i,Iv=/^0b[01]+$/i,Lv=/^\[object .+?Constructor\]$/,Dv=/^0o[0-7]+$/i,Pv=/^(?:0|[1-9]\d*)$/,Kv=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ia=/($^)/,Fv=/['\n\r\u2028\u2029\\]/g,ua="\\ud800-\\udfff",wv="\\u0300-\\u036f",Ov="\\ufe20-\\ufe2f",Gv="\\u20d0-\\u20ff",es=wv+Ov+Gv,ns="\\u2700-\\u27bf",rs="a-z\\xdf-\\xf6\\xf8-\\xff",Bv="\\xac\\xb1\\xd7\\xf7",Vv="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Mv="\\u2000-\\u206f",jv=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ts="A-Z\\xc0-\\xd6\\xd8-\\xde",as="\\ufe0e\\ufe0f",ls=Bv+Vv+Mv+jv,Fl="['’]",qv="["+ua+"]",is="["+ls+"]",sa="["+es+"]",us="\\d+",Hv="["+ns+"]",ss="["+rs+"]",os="[^"+ua+ls+us+ns+rs+ts+"]",wl="\\ud83c[\\udffb-\\udfff]",xv="(?:"+sa+"|"+wl+")",ms="[^"+ua+"]",Ol="(?:\\ud83c[\\udde6-\\uddff]){2}",Gl="[\\ud800-\\udbff][\\udc00-\\udfff]",Ur="["+ts+"]",ds="\\u200d",gs="(?:"+ss+"|"+os+")",Uv="(?:"+Ur+"|"+os+")",vs="(?:"+Fl+"(?:d|ll|m|re|s|t|ve))?",Es="(?:"+Fl+"(?:D|LL|M|RE|S|T|VE))?",fs=xv+"?",cs="["+as+"]?",Cv="(?:"+ds+"(?:"+[ms,Ol,Gl].join("|")+")"+cs+fs+")*",Yv="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",$v="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",_s=cs+fs+Cv,Jv="(?:"+[Hv,Ol,Gl].join("|")+")"+_s,Wv="(?:"+[ms+sa+"?",sa,Ol,Gl,qv].join("|")+")",zv=RegExp(Fl,"g"),Xv=RegExp(sa,"g"),Bl=RegExp(wl+"(?="+wl+")|"+Wv+_s,"g"),Zv=RegExp([Ur+"?"+ss+"+"+vs+"(?="+[is,Ur,"$"].join("|")+")",Uv+"+"+Es+"(?="+[is,Ur+gs,"$"].join("|")+")",Ur+"?"+gs+"+"+vs,Ur+"+"+Es,$v,Yv,us,Jv].join("|"),"g"),Qv=RegExp("["+ds+ua+es+as+"]"),eE=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,nE=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],rE=-1,Fe={};Fe[yl]=Fe[Rl]=Fe[Nl]=Fe[Al]=Fe[bl]=Fe[Sl]=Fe[Il]=Fe[Ll]=Fe[Dl]=!0,Fe[je]=Fe[Oe]=Fe[Tt]=Fe[pe]=Fe[xr]=Fe[Ne]=Fe[He]=Fe[Ue]=Fe[Be]=Fe[Ze]=Fe[Qe]=Fe[_t]=Fe[On]=Fe[pt]=Fe[ht]=!1;var Pe={};Pe[je]=Pe[Oe]=Pe[Tt]=Pe[xr]=Pe[pe]=Pe[Ne]=Pe[yl]=Pe[Rl]=Pe[Nl]=Pe[Al]=Pe[bl]=Pe[Be]=Pe[Ze]=Pe[Qe]=Pe[_t]=Pe[On]=Pe[pt]=Pe[la]=Pe[Sl]=Pe[Il]=Pe[Ll]=Pe[Dl]=!0,Pe[He]=Pe[Ue]=Pe[ht]=!1;var tE={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},aE={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},lE={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},iE={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},uE=parseFloat,sE=parseInt,ps=typeof Ja=="object"&&Ja&&Ja.Object===Object&&Ja,oE=typeof self=="object"&&self&&self.Object===Object&&self,en=ps||oE||Function("return this")(),Vl=l&&!l.nodeType&&l,Ir=Vl&&!0&&e&&!e.nodeType&&e,hs=Ir&&Ir.exports===Vl,Ml=hs&&ps.process,Nn=function(){try{var S=Ir&&Ir.require&&Ir.require("util").types;return S||Ml&&Ml.binding&&Ml.binding("util")}catch{}}(),Ts=Nn&&Nn.isArrayBuffer,ks=Nn&&Nn.isDate,ys=Nn&&Nn.isMap,Rs=Nn&&Nn.isRegExp,Ns=Nn&&Nn.isSet,As=Nn&&Nn.isTypedArray;function fn(S,B,F){switch(F.length){case 0:return S.call(B);case 1:return S.call(B,F[0]);case 2:return S.call(B,F[0],F[1]);case 3:return S.call(B,F[0],F[1],F[2])}return S.apply(B,F)}function mE(S,B,F,te){for(var de=-1,Re=S==null?0:S.length;++de<Re;){var $e=S[de];B(te,$e,F($e),S)}return te}function An(S,B){for(var F=-1,te=S==null?0:S.length;++F<te&&B(S[F],F,S)!==!1;);return S}function dE(S,B){for(var F=S==null?0:S.length;F--&&B(S[F],F,S)!==!1;);return S}function bs(S,B){for(var F=-1,te=S==null?0:S.length;++F<te;)if(!B(S[F],F,S))return!1;return!0}function cr(S,B){for(var F=-1,te=S==null?0:S.length,de=0,Re=[];++F<te;){var $e=S[F];B($e,F,S)&&(Re[de++]=$e)}return Re}function oa(S,B){var F=S==null?0:S.length;return!!F&&Cr(S,B,0)>-1}function jl(S,B,F){for(var te=-1,de=S==null?0:S.length;++te<de;)if(F(B,S[te]))return!0;return!1}function Ge(S,B){for(var F=-1,te=S==null?0:S.length,de=Array(te);++F<te;)de[F]=B(S[F],F,S);return de}function _r(S,B){for(var F=-1,te=B.length,de=S.length;++F<te;)S[de+F]=B[F];return S}function ql(S,B,F,te){var de=-1,Re=S==null?0:S.length;for(te&&Re&&(F=S[++de]);++de<Re;)F=B(F,S[de],de,S);return F}function gE(S,B,F,te){var de=S==null?0:S.length;for(te&&de&&(F=S[--de]);de--;)F=B(F,S[de],de,S);return F}function Hl(S,B){for(var F=-1,te=S==null?0:S.length;++F<te;)if(B(S[F],F,S))return!0;return!1}var vE=xl("length");function EE(S){return S.split("")}function fE(S){return S.match(Rv)||[]}function Ss(S,B,F){var te;return F(S,function(de,Re,$e){if(B(de,Re,$e))return te=Re,!1}),te}function ma(S,B,F,te){for(var de=S.length,Re=F+(te?1:-1);te?Re--:++Re<de;)if(B(S[Re],Re,S))return Re;return-1}function Cr(S,B,F){return B===B?SE(S,B,F):ma(S,Is,F)}function cE(S,B,F,te){for(var de=F-1,Re=S.length;++de<Re;)if(te(S[de],B))return de;return-1}function Is(S){return S!==S}function Ls(S,B){var F=S==null?0:S.length;return F?Cl(S,B)/F:ae}function xl(S){return function(B){return B==null?t:B[S]}}function Ul(S){return function(B){return S==null?t:S[B]}}function Ds(S,B,F,te,de){return de(S,function(Re,$e,De){F=te?(te=!1,Re):B(F,Re,$e,De)}),F}function _E(S,B){var F=S.length;for(S.sort(B);F--;)S[F]=S[F].value;return S}function Cl(S,B){for(var F,te=-1,de=S.length;++te<de;){var Re=B(S[te]);Re!==t&&(F=F===t?Re:F+Re)}return F}function Yl(S,B){for(var F=-1,te=Array(S);++F<S;)te[F]=B(F);return te}function pE(S,B){return Ge(B,function(F){return[F,S[F]]})}function Ps(S){return S&&S.slice(0,Os(S)+1).replace(Kl,"")}function cn(S){return function(B){return S(B)}}function $l(S,B){return Ge(B,function(F){return S[F]})}function kt(S,B){return S.has(B)}function Ks(S,B){for(var F=-1,te=S.length;++F<te&&Cr(B,S[F],0)>-1;);return F}function Fs(S,B){for(var F=S.length;F--&&Cr(B,S[F],0)>-1;);return F}function hE(S,B){for(var F=S.length,te=0;F--;)S[F]===B&&++te;return te}var TE=Ul(tE),kE=Ul(aE);function yE(S){return"\\"+iE[S]}function RE(S,B){return S==null?t:S[B]}function Yr(S){return Qv.test(S)}function NE(S){return eE.test(S)}function AE(S){for(var B,F=[];!(B=S.next()).done;)F.push(B.value);return F}function Jl(S){var B=-1,F=Array(S.size);return S.forEach(function(te,de){F[++B]=[de,te]}),F}function ws(S,B){return function(F){return S(B(F))}}function pr(S,B){for(var F=-1,te=S.length,de=0,Re=[];++F<te;){var $e=S[F];($e===B||$e===_)&&(S[F]=_,Re[de++]=F)}return Re}function da(S){var B=-1,F=Array(S.size);return S.forEach(function(te){F[++B]=te}),F}function bE(S){var B=-1,F=Array(S.size);return S.forEach(function(te){F[++B]=[te,te]}),F}function SE(S,B,F){for(var te=F-1,de=S.length;++te<de;)if(S[te]===B)return te;return-1}function IE(S,B,F){for(var te=F+1;te--;)if(S[te]===B)return te;return te}function $r(S){return Yr(S)?DE(S):vE(S)}function Gn(S){return Yr(S)?PE(S):EE(S)}function Os(S){for(var B=S.length;B--&&hv.test(S.charAt(B)););return B}var LE=Ul(lE);function DE(S){for(var B=Bl.lastIndex=0;Bl.test(S);)++B;return B}function PE(S){return S.match(Bl)||[]}function KE(S){return S.match(Zv)||[]}var FE=function S(B){B=B==null?en:Jr.defaults(en.Object(),B,Jr.pick(en,nE));var F=B.Array,te=B.Date,de=B.Error,Re=B.Function,$e=B.Math,De=B.Object,Wl=B.RegExp,wE=B.String,bn=B.TypeError,ga=F.prototype,OE=Re.prototype,Wr=De.prototype,va=B["__core-js_shared__"],Ea=OE.toString,Se=Wr.hasOwnProperty,GE=0,Gs=function(){var n=/[^.]+$/.exec(va&&va.keys&&va.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),fa=Wr.toString,BE=Ea.call(De),VE=en._,ME=Wl("^"+Ea.call(Se).replace(Pl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ca=hs?B.Buffer:t,hr=B.Symbol,_a=B.Uint8Array,Bs=ca?ca.allocUnsafe:t,pa=ws(De.getPrototypeOf,De),Vs=De.create,Ms=Wr.propertyIsEnumerable,ha=ga.splice,js=hr?hr.isConcatSpreadable:t,yt=hr?hr.iterator:t,Lr=hr?hr.toStringTag:t,Ta=function(){try{var n=wr(De,"defineProperty");return n({},"",{}),n}catch{}}(),jE=B.clearTimeout!==en.clearTimeout&&B.clearTimeout,qE=te&&te.now!==en.Date.now&&te.now,HE=B.setTimeout!==en.setTimeout&&B.setTimeout,ka=$e.ceil,ya=$e.floor,zl=De.getOwnPropertySymbols,xE=ca?ca.isBuffer:t,qs=B.isFinite,UE=ga.join,CE=ws(De.keys,De),Je=$e.max,rn=$e.min,YE=te.now,$E=B.parseInt,Hs=$e.random,JE=ga.reverse,Xl=wr(B,"DataView"),Rt=wr(B,"Map"),Zl=wr(B,"Promise"),zr=wr(B,"Set"),Nt=wr(B,"WeakMap"),At=wr(De,"create"),Ra=Nt&&new Nt,Xr={},WE=Or(Xl),zE=Or(Rt),XE=Or(Zl),ZE=Or(zr),QE=Or(Nt),Na=hr?hr.prototype:t,bt=Na?Na.valueOf:t,xs=Na?Na.toString:t;function E(n){if(xe(n)&&!ge(n)&&!(n instanceof he)){if(n instanceof Sn)return n;if(Se.call(n,"__wrapped__"))return Co(n)}return new Sn(n)}var Zr=function(){function n(){}return function(r){if(!Ve(r))return{};if(Vs)return Vs(r);n.prototype=r;var u=new n;return n.prototype=t,u}}();function Aa(){}function Sn(n,r){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=t}E.templateSettings={escape:vv,evaluate:Ev,interpolate:Zu,variable:"",imports:{_:E}},E.prototype=Aa.prototype,E.prototype.constructor=E,Sn.prototype=Zr(Aa.prototype),Sn.prototype.constructor=Sn;function he(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ne,this.__views__=[]}function ef(){var n=new he(this.__wrapped__);return n.__actions__=on(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=on(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=on(this.__views__),n}function nf(){if(this.__filtered__){var n=new he(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function rf(){var n=this.__wrapped__.value(),r=this.__dir__,u=ge(n),o=r<0,g=u?n.length:0,c=fc(0,g,this.__views__),p=c.start,N=c.end,L=N-p,j=o?N:p-1,q=this.__iteratees__,Y=q.length,ee=0,ie=rn(L,this.__takeCount__);if(!u||!o&&g==L&&ie==L)return Eo(n,this.__actions__);var oe=[];e:for(;L--&&ee<ie;){j+=r;for(var Ee=-1,me=n[j];++Ee<Y;){var _e=q[Ee],Te=_e.iteratee,hn=_e.type,un=Te(me);if(hn==z)me=un;else if(!un){if(hn==G)continue e;break e}}oe[ee++]=me}return oe}he.prototype=Zr(Aa.prototype),he.prototype.constructor=he;function Dr(n){var r=-1,u=n==null?0:n.length;for(this.clear();++r<u;){var o=n[r];this.set(o[0],o[1])}}function tf(){this.__data__=At?At(null):{},this.size=0}function af(n){var r=this.has(n)&&delete this.__data__[n];return this.size-=r?1:0,r}function lf(n){var r=this.__data__;if(At){var u=r[n];return u===v?t:u}return Se.call(r,n)?r[n]:t}function uf(n){var r=this.__data__;return At?r[n]!==t:Se.call(r,n)}function sf(n,r){var u=this.__data__;return this.size+=this.has(n)?0:1,u[n]=At&&r===t?v:r,this}Dr.prototype.clear=tf,Dr.prototype.delete=af,Dr.prototype.get=lf,Dr.prototype.has=uf,Dr.prototype.set=sf;function nr(n){var r=-1,u=n==null?0:n.length;for(this.clear();++r<u;){var o=n[r];this.set(o[0],o[1])}}function of(){this.__data__=[],this.size=0}function mf(n){var r=this.__data__,u=ba(r,n);if(u<0)return!1;var o=r.length-1;return u==o?r.pop():ha.call(r,u,1),--this.size,!0}function df(n){var r=this.__data__,u=ba(r,n);return u<0?t:r[u][1]}function gf(n){return ba(this.__data__,n)>-1}function vf(n,r){var u=this.__data__,o=ba(u,n);return o<0?(++this.size,u.push([n,r])):u[o][1]=r,this}nr.prototype.clear=of,nr.prototype.delete=mf,nr.prototype.get=df,nr.prototype.has=gf,nr.prototype.set=vf;function rr(n){var r=-1,u=n==null?0:n.length;for(this.clear();++r<u;){var o=n[r];this.set(o[0],o[1])}}function Ef(){this.size=0,this.__data__={hash:new Dr,map:new(Rt||nr),string:new Dr}}function ff(n){var r=Va(this,n).delete(n);return this.size-=r?1:0,r}function cf(n){return Va(this,n).get(n)}function _f(n){return Va(this,n).has(n)}function pf(n,r){var u=Va(this,n),o=u.size;return u.set(n,r),this.size+=u.size==o?0:1,this}rr.prototype.clear=Ef,rr.prototype.delete=ff,rr.prototype.get=cf,rr.prototype.has=_f,rr.prototype.set=pf;function Pr(n){var r=-1,u=n==null?0:n.length;for(this.__data__=new rr;++r<u;)this.add(n[r])}function hf(n){return this.__data__.set(n,v),this}function Tf(n){return this.__data__.has(n)}Pr.prototype.add=Pr.prototype.push=hf,Pr.prototype.has=Tf;function Bn(n){var r=this.__data__=new nr(n);this.size=r.size}function kf(){this.__data__=new nr,this.size=0}function yf(n){var r=this.__data__,u=r.delete(n);return this.size=r.size,u}function Rf(n){return this.__data__.get(n)}function Nf(n){return this.__data__.has(n)}function Af(n,r){var u=this.__data__;if(u instanceof nr){var o=u.__data__;if(!Rt||o.length<i-1)return o.push([n,r]),this.size=++u.size,this;u=this.__data__=new rr(o)}return u.set(n,r),this.size=u.size,this}Bn.prototype.clear=kf,Bn.prototype.delete=yf,Bn.prototype.get=Rf,Bn.prototype.has=Nf,Bn.prototype.set=Af;function Us(n,r){var u=ge(n),o=!u&&Gr(n),g=!u&&!o&&Nr(n),c=!u&&!o&&!g&&rt(n),p=u||o||g||c,N=p?Yl(n.length,wE):[],L=N.length;for(var j in n)(r||Se.call(n,j))&&!(p&&(j=="length"||g&&(j=="offset"||j=="parent")||c&&(j=="buffer"||j=="byteLength"||j=="byteOffset")||ir(j,L)))&&N.push(j);return N}function Cs(n){var r=n.length;return r?n[oi(0,r-1)]:t}function bf(n,r){return Ma(on(n),Kr(r,0,n.length))}function Sf(n){return Ma(on(n))}function Ql(n,r,u){(u!==t&&!Vn(n[r],u)||u===t&&!(r in n))&&tr(n,r,u)}function St(n,r,u){var o=n[r];(!(Se.call(n,r)&&Vn(o,u))||u===t&&!(r in n))&&tr(n,r,u)}function ba(n,r){for(var u=n.length;u--;)if(Vn(n[u][0],r))return u;return-1}function If(n,r,u,o){return Tr(n,function(g,c,p){r(o,g,u(g),p)}),o}function Ys(n,r){return n&&Un(r,We(r),n)}function Lf(n,r){return n&&Un(r,dn(r),n)}function tr(n,r,u){r=="__proto__"&&Ta?Ta(n,r,{configurable:!0,enumerable:!0,value:u,writable:!0}):n[r]=u}function ei(n,r){for(var u=-1,o=r.length,g=F(o),c=n==null;++u<o;)g[u]=c?t:wi(n,r[u]);return g}function Kr(n,r,u){return n===n&&(u!==t&&(n=n<=u?n:u),r!==t&&(n=n>=r?n:r)),n}function In(n,r,u,o,g,c){var p,N=r&h,L=r&k,j=r&y;if(u&&(p=g?u(n,o,g,c):u(n)),p!==t)return p;if(!Ve(n))return n;var q=ge(n);if(q){if(p=_c(n),!N)return on(n,p)}else{var Y=tn(n),ee=Y==Ue||Y==Rn;if(Nr(n))return _o(n,N);if(Y==Qe||Y==je||ee&&!g){if(p=L||ee?{}:Go(n),!N)return L?ic(n,Lf(p,n)):lc(n,Ys(p,n))}else{if(!Pe[Y])return g?n:{};p=pc(n,Y,N)}}c||(c=new Bn);var ie=c.get(n);if(ie)return ie;c.set(n,p),dm(n)?n.forEach(function(me){p.add(In(me,r,u,me,n,c))}):om(n)&&n.forEach(function(me,_e){p.set(_e,In(me,r,u,_e,n,c))});var oe=j?L?Ti:hi:L?dn:We,Ee=q?t:oe(n);return An(Ee||n,function(me,_e){Ee&&(_e=me,me=n[_e]),St(p,_e,In(me,r,u,_e,n,c))}),p}function Df(n){var r=We(n);return function(u){return $s(u,n,r)}}function $s(n,r,u){var o=u.length;if(n==null)return!o;for(n=De(n);o--;){var g=u[o],c=r[g],p=n[g];if(p===t&&!(g in n)||!c(p))return!1}return!0}function Js(n,r,u){if(typeof n!="function")throw new bn(m);return wt(function(){n.apply(t,u)},r)}function It(n,r,u,o){var g=-1,c=oa,p=!0,N=n.length,L=[],j=r.length;if(!N)return L;u&&(r=Ge(r,cn(u))),o?(c=jl,p=!1):r.length>=i&&(c=kt,p=!1,r=new Pr(r));e:for(;++g<N;){var q=n[g],Y=u==null?q:u(q);if(q=o||q!==0?q:0,p&&Y===Y){for(var ee=j;ee--;)if(r[ee]===Y)continue e;L.push(q)}else c(r,Y,o)||L.push(q)}return L}var Tr=yo(xn),Ws=yo(ri,!0);function Pf(n,r){var u=!0;return Tr(n,function(o,g,c){return u=!!r(o,g,c),u}),u}function Sa(n,r,u){for(var o=-1,g=n.length;++o<g;){var c=n[o],p=r(c);if(p!=null&&(N===t?p===p&&!pn(p):u(p,N)))var N=p,L=c}return L}function Kf(n,r,u,o){var g=n.length;for(u=ve(u),u<0&&(u=-u>g?0:g+u),o=o===t||o>g?g:ve(o),o<0&&(o+=g),o=u>o?0:vm(o);u<o;)n[u++]=r;return n}function zs(n,r){var u=[];return Tr(n,function(o,g,c){r(o,g,c)&&u.push(o)}),u}function nn(n,r,u,o,g){var c=-1,p=n.length;for(u||(u=Tc),g||(g=[]);++c<p;){var N=n[c];r>0&&u(N)?r>1?nn(N,r-1,u,o,g):_r(g,N):o||(g[g.length]=N)}return g}var ni=Ro(),Xs=Ro(!0);function xn(n,r){return n&&ni(n,r,We)}function ri(n,r){return n&&Xs(n,r,We)}function Ia(n,r){return cr(r,function(u){return ur(n[u])})}function Fr(n,r){r=yr(r,n);for(var u=0,o=r.length;n!=null&&u<o;)n=n[Cn(r[u++])];return u&&u==o?n:t}function Zs(n,r,u){var o=r(n);return ge(n)?o:_r(o,u(n))}function an(n){return n==null?n===t?iv:Qn:Lr&&Lr in De(n)?Ec(n):Sc(n)}function ti(n,r){return n>r}function Ff(n,r){return n!=null&&Se.call(n,r)}function wf(n,r){return n!=null&&r in De(n)}function Of(n,r,u){return n>=rn(r,u)&&n<Je(r,u)}function ai(n,r,u){for(var o=u?jl:oa,g=n[0].length,c=n.length,p=c,N=F(c),L=1/0,j=[];p--;){var q=n[p];p&&r&&(q=Ge(q,cn(r))),L=rn(q.length,L),N[p]=!u&&(r||g>=120&&q.length>=120)?new Pr(p&&q):t}q=n[0];var Y=-1,ee=N[0];e:for(;++Y<g&&j.length<L;){var ie=q[Y],oe=r?r(ie):ie;if(ie=u||ie!==0?ie:0,!(ee?kt(ee,oe):o(j,oe,u))){for(p=c;--p;){var Ee=N[p];if(!(Ee?kt(Ee,oe):o(n[p],oe,u)))continue e}ee&&ee.push(oe),j.push(ie)}}return j}function Gf(n,r,u,o){return xn(n,function(g,c,p){r(o,u(g),c,p)}),o}function Lt(n,r,u){r=yr(r,n),n=jo(n,r);var o=n==null?n:n[Cn(Dn(r))];return o==null?t:fn(o,n,u)}function Qs(n){return xe(n)&&an(n)==je}function Bf(n){return xe(n)&&an(n)==Tt}function Vf(n){return xe(n)&&an(n)==Ne}function Dt(n,r,u,o,g){return n===r?!0:n==null||r==null||!xe(n)&&!xe(r)?n!==n&&r!==r:Mf(n,r,u,o,Dt,g)}function Mf(n,r,u,o,g,c){var p=ge(n),N=ge(r),L=p?Oe:tn(n),j=N?Oe:tn(r);L=L==je?Qe:L,j=j==je?Qe:j;var q=L==Qe,Y=j==Qe,ee=L==j;if(ee&&Nr(n)){if(!Nr(r))return!1;p=!0,q=!1}if(ee&&!q)return c||(c=new Bn),p||rt(n)?Fo(n,r,u,o,g,c):gc(n,r,L,u,o,g,c);if(!(u&P)){var ie=q&&Se.call(n,"__wrapped__"),oe=Y&&Se.call(r,"__wrapped__");if(ie||oe){var Ee=ie?n.value():n,me=oe?r.value():r;return c||(c=new Bn),g(Ee,me,u,o,c)}}return ee?(c||(c=new Bn),vc(n,r,u,o,g,c)):!1}function jf(n){return xe(n)&&tn(n)==Be}function li(n,r,u,o){var g=u.length,c=g,p=!o;if(n==null)return!c;for(n=De(n);g--;){var N=u[g];if(p&&N[2]?N[1]!==n[N[0]]:!(N[0]in n))return!1}for(;++g<c;){N=u[g];var L=N[0],j=n[L],q=N[1];if(p&&N[2]){if(j===t&&!(L in n))return!1}else{var Y=new Bn;if(o)var ee=o(j,q,L,n,r,Y);if(!(ee===t?Dt(q,j,P|R,o,Y):ee))return!1}}return!0}function eo(n){if(!Ve(n)||yc(n))return!1;var r=ur(n)?ME:Lv;return r.test(Or(n))}function qf(n){return xe(n)&&an(n)==_t}function Hf(n){return xe(n)&&tn(n)==On}function xf(n){return xe(n)&&Ca(n.length)&&!!Fe[an(n)]}function no(n){return typeof n=="function"?n:n==null?gn:typeof n=="object"?ge(n)?ao(n[0],n[1]):to(n):Nm(n)}function ii(n){if(!Ft(n))return CE(n);var r=[];for(var u in De(n))Se.call(n,u)&&u!="constructor"&&r.push(u);return r}function Uf(n){if(!Ve(n))return bc(n);var r=Ft(n),u=[];for(var o in n)o=="constructor"&&(r||!Se.call(n,o))||u.push(o);return u}function ui(n,r){return n<r}function ro(n,r){var u=-1,o=mn(n)?F(n.length):[];return Tr(n,function(g,c,p){o[++u]=r(g,c,p)}),o}function to(n){var r=yi(n);return r.length==1&&r[0][2]?Vo(r[0][0],r[0][1]):function(u){return u===n||li(u,n,r)}}function ao(n,r){return Ni(n)&&Bo(r)?Vo(Cn(n),r):function(u){var o=wi(u,n);return o===t&&o===r?Oi(u,n):Dt(r,o,P|R)}}function La(n,r,u,o,g){n!==r&&ni(r,function(c,p){if(g||(g=new Bn),Ve(c))Cf(n,r,p,u,La,o,g);else{var N=o?o(bi(n,p),c,p+"",n,r,g):t;N===t&&(N=c),Ql(n,p,N)}},dn)}function Cf(n,r,u,o,g,c,p){var N=bi(n,u),L=bi(r,u),j=p.get(L);if(j){Ql(n,u,j);return}var q=c?c(N,L,u+"",n,r,p):t,Y=q===t;if(Y){var ee=ge(L),ie=!ee&&Nr(L),oe=!ee&&!ie&&rt(L);q=L,ee||ie||oe?ge(N)?q=N:Ce(N)?q=on(N):ie?(Y=!1,q=_o(L,!0)):oe?(Y=!1,q=po(L,!0)):q=[]:Ot(L)||Gr(L)?(q=N,Gr(N)?q=Em(N):(!Ve(N)||ur(N))&&(q=Go(L))):Y=!1}Y&&(p.set(L,q),g(q,L,o,c,p),p.delete(L)),Ql(n,u,q)}function lo(n,r){var u=n.length;if(u)return r+=r<0?u:0,ir(r,u)?n[r]:t}function io(n,r,u){r.length?r=Ge(r,function(c){return ge(c)?function(p){return Fr(p,c.length===1?c[0]:c)}:c}):r=[gn];var o=-1;r=Ge(r,cn(se()));var g=ro(n,function(c,p,N){var L=Ge(r,function(j){return j(c)});return{criteria:L,index:++o,value:c}});return _E(g,function(c,p){return ac(c,p,u)})}function Yf(n,r){return uo(n,r,function(u,o){return Oi(n,o)})}function uo(n,r,u){for(var o=-1,g=r.length,c={};++o<g;){var p=r[o],N=Fr(n,p);u(N,p)&&Pt(c,yr(p,n),N)}return c}function $f(n){return function(r){return Fr(r,n)}}function si(n,r,u,o){var g=o?cE:Cr,c=-1,p=r.length,N=n;for(n===r&&(r=on(r)),u&&(N=Ge(n,cn(u)));++c<p;)for(var L=0,j=r[c],q=u?u(j):j;(L=g(N,q,L,o))>-1;)N!==n&&ha.call(N,L,1),ha.call(n,L,1);return n}function so(n,r){for(var u=n?r.length:0,o=u-1;u--;){var g=r[u];if(u==o||g!==c){var c=g;ir(g)?ha.call(n,g,1):gi(n,g)}}return n}function oi(n,r){return n+ya(Hs()*(r-n+1))}function Jf(n,r,u,o){for(var g=-1,c=Je(ka((r-n)/(u||1)),0),p=F(c);c--;)p[o?c:++g]=n,n+=u;return p}function mi(n,r){var u="";if(!n||r<1||r>U)return u;do r%2&&(u+=n),r=ya(r/2),r&&(n+=n);while(r);return u}function fe(n,r){return Si(Mo(n,r,gn),n+"")}function Wf(n){return Cs(tt(n))}function zf(n,r){var u=tt(n);return Ma(u,Kr(r,0,u.length))}function Pt(n,r,u,o){if(!Ve(n))return n;r=yr(r,n);for(var g=-1,c=r.length,p=c-1,N=n;N!=null&&++g<c;){var L=Cn(r[g]),j=u;if(L==="__proto__"||L==="constructor"||L==="prototype")return n;if(g!=p){var q=N[L];j=o?o(q,L,N):t,j===t&&(j=Ve(q)?q:ir(r[g+1])?[]:{})}St(N,L,j),N=N[L]}return n}var oo=Ra?function(n,r){return Ra.set(n,r),n}:gn,Xf=Ta?function(n,r){return Ta(n,"toString",{configurable:!0,enumerable:!1,value:Bi(r),writable:!0})}:gn;function Zf(n){return Ma(tt(n))}function Ln(n,r,u){var o=-1,g=n.length;r<0&&(r=-r>g?0:g+r),u=u>g?g:u,u<0&&(u+=g),g=r>u?0:u-r>>>0,r>>>=0;for(var c=F(g);++o<g;)c[o]=n[o+r];return c}function Qf(n,r){var u;return Tr(n,function(o,g,c){return u=r(o,g,c),!u}),!!u}function Da(n,r,u){var o=0,g=n==null?o:n.length;if(typeof r=="number"&&r===r&&g<=ce){for(;o<g;){var c=o+g>>>1,p=n[c];p!==null&&!pn(p)&&(u?p<=r:p<r)?o=c+1:g=c}return g}return di(n,r,gn,u)}function di(n,r,u,o){var g=0,c=n==null?0:n.length;if(c===0)return 0;r=u(r);for(var p=r!==r,N=r===null,L=pn(r),j=r===t;g<c;){var q=ya((g+c)/2),Y=u(n[q]),ee=Y!==t,ie=Y===null,oe=Y===Y,Ee=pn(Y);if(p)var me=o||oe;else j?me=oe&&(o||ee):N?me=oe&&ee&&(o||!ie):L?me=oe&&ee&&!ie&&(o||!Ee):ie||Ee?me=!1:me=o?Y<=r:Y<r;me?g=q+1:c=q}return rn(c,ue)}function mo(n,r){for(var u=-1,o=n.length,g=0,c=[];++u<o;){var p=n[u],N=r?r(p):p;if(!u||!Vn(N,L)){var L=N;c[g++]=p===0?0:p}}return c}function go(n){return typeof n=="number"?n:pn(n)?ae:+n}function _n(n){if(typeof n=="string")return n;if(ge(n))return Ge(n,_n)+"";if(pn(n))return xs?xs.call(n):"";var r=n+"";return r=="0"&&1/n==-J?"-0":r}function kr(n,r,u){var o=-1,g=oa,c=n.length,p=!0,N=[],L=N;if(u)p=!1,g=jl;else if(c>=i){var j=r?null:mc(n);if(j)return da(j);p=!1,g=kt,L=new Pr}else L=r?[]:N;e:for(;++o<c;){var q=n[o],Y=r?r(q):q;if(q=u||q!==0?q:0,p&&Y===Y){for(var ee=L.length;ee--;)if(L[ee]===Y)continue e;r&&L.push(Y),N.push(q)}else g(L,Y,u)||(L!==N&&L.push(Y),N.push(q))}return N}function gi(n,r){return r=yr(r,n),n=jo(n,r),n==null||delete n[Cn(Dn(r))]}function vo(n,r,u,o){return Pt(n,r,u(Fr(n,r)),o)}function Pa(n,r,u,o){for(var g=n.length,c=o?g:-1;(o?c--:++c<g)&&r(n[c],c,n););return u?Ln(n,o?0:c,o?c+1:g):Ln(n,o?c+1:0,o?g:c)}function Eo(n,r){var u=n;return u instanceof he&&(u=u.value()),ql(r,function(o,g){return g.func.apply(g.thisArg,_r([o],g.args))},u)}function vi(n,r,u){var o=n.length;if(o<2)return o?kr(n[0]):[];for(var g=-1,c=F(o);++g<o;)for(var p=n[g],N=-1;++N<o;)N!=g&&(c[g]=It(c[g]||p,n[N],r,u));return kr(nn(c,1),r,u)}function fo(n,r,u){for(var o=-1,g=n.length,c=r.length,p={};++o<g;){var N=o<c?r[o]:t;u(p,n[o],N)}return p}function Ei(n){return Ce(n)?n:[]}function fi(n){return typeof n=="function"?n:gn}function yr(n,r){return ge(n)?n:Ni(n,r)?[n]:Uo(Ae(n))}var ec=fe;function Rr(n,r,u){var o=n.length;return u=u===t?o:u,!r&&u>=o?n:Ln(n,r,u)}var co=jE||function(n){return en.clearTimeout(n)};function _o(n,r){if(r)return n.slice();var u=n.length,o=Bs?Bs(u):new n.constructor(u);return n.copy(o),o}function ci(n){var r=new n.constructor(n.byteLength);return new _a(r).set(new _a(n)),r}function nc(n,r){var u=r?ci(n.buffer):n.buffer;return new n.constructor(u,n.byteOffset,n.byteLength)}function rc(n){var r=new n.constructor(n.source,Qu.exec(n));return r.lastIndex=n.lastIndex,r}function tc(n){return bt?De(bt.call(n)):{}}function po(n,r){var u=r?ci(n.buffer):n.buffer;return new n.constructor(u,n.byteOffset,n.length)}function ho(n,r){if(n!==r){var u=n!==t,o=n===null,g=n===n,c=pn(n),p=r!==t,N=r===null,L=r===r,j=pn(r);if(!N&&!j&&!c&&n>r||c&&p&&L&&!N&&!j||o&&p&&L||!u&&L||!g)return 1;if(!o&&!c&&!j&&n<r||j&&u&&g&&!o&&!c||N&&u&&g||!p&&g||!L)return-1}return 0}function ac(n,r,u){for(var o=-1,g=n.criteria,c=r.criteria,p=g.length,N=u.length;++o<p;){var L=ho(g[o],c[o]);if(L){if(o>=N)return L;var j=u[o];return L*(j=="desc"?-1:1)}}return n.index-r.index}function To(n,r,u,o){for(var g=-1,c=n.length,p=u.length,N=-1,L=r.length,j=Je(c-p,0),q=F(L+j),Y=!o;++N<L;)q[N]=r[N];for(;++g<p;)(Y||g<c)&&(q[u[g]]=n[g]);for(;j--;)q[N++]=n[g++];return q}function ko(n,r,u,o){for(var g=-1,c=n.length,p=-1,N=u.length,L=-1,j=r.length,q=Je(c-N,0),Y=F(q+j),ee=!o;++g<q;)Y[g]=n[g];for(var ie=g;++L<j;)Y[ie+L]=r[L];for(;++p<N;)(ee||g<c)&&(Y[ie+u[p]]=n[g++]);return Y}function on(n,r){var u=-1,o=n.length;for(r||(r=F(o));++u<o;)r[u]=n[u];return r}function Un(n,r,u,o){var g=!u;u||(u={});for(var c=-1,p=r.length;++c<p;){var N=r[c],L=o?o(u[N],n[N],N,u,n):t;L===t&&(L=n[N]),g?tr(u,N,L):St(u,N,L)}return u}function lc(n,r){return Un(n,Ri(n),r)}function ic(n,r){return Un(n,wo(n),r)}function Ka(n,r){return function(u,o){var g=ge(u)?mE:If,c=r?r():{};return g(u,n,se(o,2),c)}}function Qr(n){return fe(function(r,u){var o=-1,g=u.length,c=g>1?u[g-1]:t,p=g>2?u[2]:t;for(c=n.length>3&&typeof c=="function"?(g--,c):t,p&&ln(u[0],u[1],p)&&(c=g<3?t:c,g=1),r=De(r);++o<g;){var N=u[o];N&&n(r,N,o,c)}return r})}function yo(n,r){return function(u,o){if(u==null)return u;if(!mn(u))return n(u,o);for(var g=u.length,c=r?g:-1,p=De(u);(r?c--:++c<g)&&o(p[c],c,p)!==!1;);return u}}function Ro(n){return function(r,u,o){for(var g=-1,c=De(r),p=o(r),N=p.length;N--;){var L=p[n?N:++g];if(u(c[L],L,c)===!1)break}return r}}function uc(n,r,u){var o=r&T,g=Kt(n);function c(){var p=this&&this!==en&&this instanceof c?g:n;return p.apply(o?u:this,arguments)}return c}function No(n){return function(r){r=Ae(r);var u=Yr(r)?Gn(r):t,o=u?u[0]:r.charAt(0),g=u?Rr(u,1).join(""):r.slice(1);return o[n]()+g}}function et(n){return function(r){return ql(ym(km(r).replace(zv,"")),n,"")}}function Kt(n){return function(){var r=arguments;switch(r.length){case 0:return new n;case 1:return new n(r[0]);case 2:return new n(r[0],r[1]);case 3:return new n(r[0],r[1],r[2]);case 4:return new n(r[0],r[1],r[2],r[3]);case 5:return new n(r[0],r[1],r[2],r[3],r[4]);case 6:return new n(r[0],r[1],r[2],r[3],r[4],r[5]);case 7:return new n(r[0],r[1],r[2],r[3],r[4],r[5],r[6])}var u=Zr(n.prototype),o=n.apply(u,r);return Ve(o)?o:u}}function sc(n,r,u){var o=Kt(n);function g(){for(var c=arguments.length,p=F(c),N=c,L=nt(g);N--;)p[N]=arguments[N];var j=c<3&&p[0]!==L&&p[c-1]!==L?[]:pr(p,L);if(c-=j.length,c<u)return Lo(n,r,Fa,g.placeholder,t,p,j,t,t,u-c);var q=this&&this!==en&&this instanceof g?o:n;return fn(q,this,p)}return g}function Ao(n){return function(r,u,o){var g=De(r);if(!mn(r)){var c=se(u,3);r=We(r),u=function(N){return c(g[N],N,g)}}var p=n(r,u,o);return p>-1?g[c?r[p]:p]:t}}function bo(n){return lr(function(r){var u=r.length,o=u,g=Sn.prototype.thru;for(n&&r.reverse();o--;){var c=r[o];if(typeof c!="function")throw new bn(m);if(g&&!p&&Ba(c)=="wrapper")var p=new Sn([],!0)}for(o=p?o:u;++o<u;){c=r[o];var N=Ba(c),L=N=="wrapper"?ki(c):t;L&&Ai(L[0])&&L[1]==(w|I|D|O)&&!L[4].length&&L[9]==1?p=p[Ba(L[0])].apply(p,L[3]):p=c.length==1&&Ai(c)?p[N]():p.thru(c)}return function(){var j=arguments,q=j[0];if(p&&j.length==1&&ge(q))return p.plant(q).value();for(var Y=0,ee=u?r[Y].apply(this,j):q;++Y<u;)ee=r[Y].call(this,ee);return ee}})}function Fa(n,r,u,o,g,c,p,N,L,j){var q=r&w,Y=r&T,ee=r&b,ie=r&(I|x),oe=r&W,Ee=ee?t:Kt(n);function me(){for(var _e=arguments.length,Te=F(_e),hn=_e;hn--;)Te[hn]=arguments[hn];if(ie)var un=nt(me),Tn=hE(Te,un);if(o&&(Te=To(Te,o,g,ie)),c&&(Te=ko(Te,c,p,ie)),_e-=Tn,ie&&_e<j){var Ye=pr(Te,un);return Lo(n,r,Fa,me.placeholder,u,Te,Ye,N,L,j-_e)}var Mn=Y?u:this,or=ee?Mn[n]:n;return _e=Te.length,N?Te=Ic(Te,N):oe&&_e>1&&Te.reverse(),q&&L<_e&&(Te.length=L),this&&this!==en&&this instanceof me&&(or=Ee||Kt(or)),or.apply(Mn,Te)}return me}function So(n,r){return function(u,o){return Gf(u,n,r(o),{})}}function wa(n,r){return function(u,o){var g;if(u===t&&o===t)return r;if(u!==t&&(g=u),o!==t){if(g===t)return o;typeof u=="string"||typeof o=="string"?(u=_n(u),o=_n(o)):(u=go(u),o=go(o)),g=n(u,o)}return g}}function _i(n){return lr(function(r){return r=Ge(r,cn(se())),fe(function(u){var o=this;return n(r,function(g){return fn(g,o,u)})})})}function Oa(n,r){r=r===t?" ":_n(r);var u=r.length;if(u<2)return u?mi(r,n):r;var o=mi(r,ka(n/$r(r)));return Yr(r)?Rr(Gn(o),0,n).join(""):o.slice(0,n)}function oc(n,r,u,o){var g=r&T,c=Kt(n);function p(){for(var N=-1,L=arguments.length,j=-1,q=o.length,Y=F(q+L),ee=this&&this!==en&&this instanceof p?c:n;++j<q;)Y[j]=o[j];for(;L--;)Y[j++]=arguments[++N];return fn(ee,g?u:this,Y)}return p}function Io(n){return function(r,u,o){return o&&typeof o!="number"&&ln(r,u,o)&&(u=o=t),r=sr(r),u===t?(u=r,r=0):u=sr(u),o=o===t?r<u?1:-1:sr(o),Jf(r,u,o,n)}}function Ga(n){return function(r,u){return typeof r=="string"&&typeof u=="string"||(r=Pn(r),u=Pn(u)),n(r,u)}}function Lo(n,r,u,o,g,c,p,N,L,j){var q=r&I,Y=q?p:t,ee=q?t:p,ie=q?c:t,oe=q?t:c;r|=q?D:H,r&=~(q?H:D),r&K||(r&=-4);var Ee=[n,r,g,ie,Y,oe,ee,N,L,j],me=u.apply(t,Ee);return Ai(n)&&qo(me,Ee),me.placeholder=o,Ho(me,n,r)}function pi(n){var r=$e[n];return function(u,o){if(u=Pn(u),o=o==null?0:rn(ve(o),292),o&&qs(u)){var g=(Ae(u)+"e").split("e"),c=r(g[0]+"e"+(+g[1]+o));return g=(Ae(c)+"e").split("e"),+(g[0]+"e"+(+g[1]-o))}return r(u)}}var mc=zr&&1/da(new zr([,-0]))[1]==J?function(n){return new zr(n)}:ji;function Do(n){return function(r){var u=tn(r);return u==Be?Jl(r):u==On?bE(r):pE(r,n(r))}}function ar(n,r,u,o,g,c,p,N){var L=r&b;if(!L&&typeof n!="function")throw new bn(m);var j=o?o.length:0;if(j||(r&=-97,o=g=t),p=p===t?p:Je(ve(p),0),N=N===t?N:ve(N),j-=g?g.length:0,r&H){var q=o,Y=g;o=g=t}var ee=L?t:ki(n),ie=[n,r,u,o,g,q,Y,c,p,N];if(ee&&Ac(ie,ee),n=ie[0],r=ie[1],u=ie[2],o=ie[3],g=ie[4],N=ie[9]=ie[9]===t?L?0:n.length:Je(ie[9]-j,0),!N&&r&(I|x)&&(r&=-25),!r||r==T)var oe=uc(n,r,u);else r==I||r==x?oe=sc(n,r,N):(r==D||r==(T|D))&&!g.length?oe=oc(n,r,u,o):oe=Fa.apply(t,ie);var Ee=ee?oo:qo;return Ho(Ee(oe,ie),n,r)}function Po(n,r,u,o){return n===t||Vn(n,Wr[u])&&!Se.call(o,u)?r:n}function Ko(n,r,u,o,g,c){return Ve(n)&&Ve(r)&&(c.set(r,n),La(n,r,t,Ko,c),c.delete(r)),n}function dc(n){return Ot(n)?t:n}function Fo(n,r,u,o,g,c){var p=u&P,N=n.length,L=r.length;if(N!=L&&!(p&&L>N))return!1;var j=c.get(n),q=c.get(r);if(j&&q)return j==r&&q==n;var Y=-1,ee=!0,ie=u&R?new Pr:t;for(c.set(n,r),c.set(r,n);++Y<N;){var oe=n[Y],Ee=r[Y];if(o)var me=p?o(Ee,oe,Y,r,n,c):o(oe,Ee,Y,n,r,c);if(me!==t){if(me)continue;ee=!1;break}if(ie){if(!Hl(r,function(_e,Te){if(!kt(ie,Te)&&(oe===_e||g(oe,_e,u,o,c)))return ie.push(Te)})){ee=!1;break}}else if(!(oe===Ee||g(oe,Ee,u,o,c))){ee=!1;break}}return c.delete(n),c.delete(r),ee}function gc(n,r,u,o,g,c,p){switch(u){case xr:if(n.byteLength!=r.byteLength||n.byteOffset!=r.byteOffset)return!1;n=n.buffer,r=r.buffer;case Tt:return!(n.byteLength!=r.byteLength||!c(new _a(n),new _a(r)));case pe:case Ne:case Ze:return Vn(+n,+r);case He:return n.name==r.name&&n.message==r.message;case _t:case pt:return n==r+"";case Be:var N=Jl;case On:var L=o&P;if(N||(N=da),n.size!=r.size&&!L)return!1;var j=p.get(n);if(j)return j==r;o|=R,p.set(n,r);var q=Fo(N(n),N(r),o,g,c,p);return p.delete(n),q;case la:if(bt)return bt.call(n)==bt.call(r)}return!1}function vc(n,r,u,o,g,c){var p=u&P,N=hi(n),L=N.length,j=hi(r),q=j.length;if(L!=q&&!p)return!1;for(var Y=L;Y--;){var ee=N[Y];if(!(p?ee in r:Se.call(r,ee)))return!1}var ie=c.get(n),oe=c.get(r);if(ie&&oe)return ie==r&&oe==n;var Ee=!0;c.set(n,r),c.set(r,n);for(var me=p;++Y<L;){ee=N[Y];var _e=n[ee],Te=r[ee];if(o)var hn=p?o(Te,_e,ee,r,n,c):o(_e,Te,ee,n,r,c);if(!(hn===t?_e===Te||g(_e,Te,u,o,c):hn)){Ee=!1;break}me||(me=ee=="constructor")}if(Ee&&!me){var un=n.constructor,Tn=r.constructor;un!=Tn&&"constructor"in n&&"constructor"in r&&!(typeof un=="function"&&un instanceof un&&typeof Tn=="function"&&Tn instanceof Tn)&&(Ee=!1)}return c.delete(n),c.delete(r),Ee}function lr(n){return Si(Mo(n,t,Jo),n+"")}function hi(n){return Zs(n,We,Ri)}function Ti(n){return Zs(n,dn,wo)}var ki=Ra?function(n){return Ra.get(n)}:ji;function Ba(n){for(var r=n.name+"",u=Xr[r],o=Se.call(Xr,r)?u.length:0;o--;){var g=u[o],c=g.func;if(c==null||c==n)return g.name}return r}function nt(n){var r=Se.call(E,"placeholder")?E:n;return r.placeholder}function se(){var n=E.iteratee||Vi;return n=n===Vi?no:n,arguments.length?n(arguments[0],arguments[1]):n}function Va(n,r){var u=n.__data__;return kc(r)?u[typeof r=="string"?"string":"hash"]:u.map}function yi(n){for(var r=We(n),u=r.length;u--;){var o=r[u],g=n[o];r[u]=[o,g,Bo(g)]}return r}function wr(n,r){var u=RE(n,r);return eo(u)?u:t}function Ec(n){var r=Se.call(n,Lr),u=n[Lr];try{n[Lr]=t;var o=!0}catch{}var g=fa.call(n);return o&&(r?n[Lr]=u:delete n[Lr]),g}var Ri=zl?function(n){return n==null?[]:(n=De(n),cr(zl(n),function(r){return Ms.call(n,r)}))}:qi,wo=zl?function(n){for(var r=[];n;)_r(r,Ri(n)),n=pa(n);return r}:qi,tn=an;(Xl&&tn(new Xl(new ArrayBuffer(1)))!=xr||Rt&&tn(new Rt)!=Be||Zl&&tn(Zl.resolve())!=Hn||zr&&tn(new zr)!=On||Nt&&tn(new Nt)!=ht)&&(tn=function(n){var r=an(n),u=r==Qe?n.constructor:t,o=u?Or(u):"";if(o)switch(o){case WE:return xr;case zE:return Be;case XE:return Hn;case ZE:return On;case QE:return ht}return r});function fc(n,r,u){for(var o=-1,g=u.length;++o<g;){var c=u[o],p=c.size;switch(c.type){case"drop":n+=p;break;case"dropRight":r-=p;break;case"take":r=rn(r,n+p);break;case"takeRight":n=Je(n,r-p);break}}return{start:n,end:r}}function cc(n){var r=n.match(kv);return r?r[1].split(yv):[]}function Oo(n,r,u){r=yr(r,n);for(var o=-1,g=r.length,c=!1;++o<g;){var p=Cn(r[o]);if(!(c=n!=null&&u(n,p)))break;n=n[p]}return c||++o!=g?c:(g=n==null?0:n.length,!!g&&Ca(g)&&ir(p,g)&&(ge(n)||Gr(n)))}function _c(n){var r=n.length,u=new n.constructor(r);return r&&typeof n[0]=="string"&&Se.call(n,"index")&&(u.index=n.index,u.input=n.input),u}function Go(n){return typeof n.constructor=="function"&&!Ft(n)?Zr(pa(n)):{}}function pc(n,r,u){var o=n.constructor;switch(r){case Tt:return ci(n);case pe:case Ne:return new o(+n);case xr:return nc(n,u);case yl:case Rl:case Nl:case Al:case bl:case Sl:case Il:case Ll:case Dl:return po(n,u);case Be:return new o;case Ze:case pt:return new o(n);case _t:return rc(n);case On:return new o;case la:return tc(n)}}function hc(n,r){var u=r.length;if(!u)return n;var o=u-1;return r[o]=(u>1?"& ":"")+r[o],r=r.join(u>2?", ":" "),n.replace(Tv,`{
/* [wrapped with `+r+`] */
`)}function Tc(n){return ge(n)||Gr(n)||!!(js&&n&&n[js])}function ir(n,r){var u=typeof n;return r=r??U,!!r&&(u=="number"||u!="symbol"&&Pv.test(n))&&n>-1&&n%1==0&&n<r}function ln(n,r,u){if(!Ve(u))return!1;var o=typeof r;return(o=="number"?mn(u)&&ir(r,u.length):o=="string"&&r in u)?Vn(u[r],n):!1}function Ni(n,r){if(ge(n))return!1;var u=typeof n;return u=="number"||u=="symbol"||u=="boolean"||n==null||pn(n)?!0:cv.test(n)||!fv.test(n)||r!=null&&n in De(r)}function kc(n){var r=typeof n;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?n!=="__proto__":n===null}function Ai(n){var r=Ba(n),u=E[r];if(typeof u!="function"||!(r in he.prototype))return!1;if(n===u)return!0;var o=ki(u);return!!o&&n===o[0]}function yc(n){return!!Gs&&Gs in n}var Rc=va?ur:Hi;function Ft(n){var r=n&&n.constructor,u=typeof r=="function"&&r.prototype||Wr;return n===u}function Bo(n){return n===n&&!Ve(n)}function Vo(n,r){return function(u){return u==null?!1:u[n]===r&&(r!==t||n in De(u))}}function Nc(n){var r=xa(n,function(o){return u.size===f&&u.clear(),o}),u=r.cache;return r}function Ac(n,r){var u=n[1],o=r[1],g=u|o,c=g<(T|b|w),p=o==w&&u==I||o==w&&u==O&&n[7].length<=r[8]||o==(w|O)&&r[7].length<=r[8]&&u==I;if(!(c||p))return n;o&T&&(n[2]=r[2],g|=u&T?0:K);var N=r[3];if(N){var L=n[3];n[3]=L?To(L,N,r[4]):N,n[4]=L?pr(n[3],_):r[4]}return N=r[5],N&&(L=n[5],n[5]=L?ko(L,N,r[6]):N,n[6]=L?pr(n[5],_):r[6]),N=r[7],N&&(n[7]=N),o&w&&(n[8]=n[8]==null?r[8]:rn(n[8],r[8])),n[9]==null&&(n[9]=r[9]),n[0]=r[0],n[1]=g,n}function bc(n){var r=[];if(n!=null)for(var u in De(n))r.push(u);return r}function Sc(n){return fa.call(n)}function Mo(n,r,u){return r=Je(r===t?n.length-1:r,0),function(){for(var o=arguments,g=-1,c=Je(o.length-r,0),p=F(c);++g<c;)p[g]=o[r+g];g=-1;for(var N=F(r+1);++g<r;)N[g]=o[g];return N[r]=u(p),fn(n,this,N)}}function jo(n,r){return r.length<2?n:Fr(n,Ln(r,0,-1))}function Ic(n,r){for(var u=n.length,o=rn(r.length,u),g=on(n);o--;){var c=r[o];n[o]=ir(c,u)?g[c]:t}return n}function bi(n,r){if(!(r==="constructor"&&typeof n[r]=="function")&&r!="__proto__")return n[r]}var qo=xo(oo),wt=HE||function(n,r){return en.setTimeout(n,r)},Si=xo(Xf);function Ho(n,r,u){var o=r+"";return Si(n,hc(o,Lc(cc(o),u)))}function xo(n){var r=0,u=0;return function(){var o=YE(),g=M-(o-u);if(u=o,g>0){if(++r>=Z)return arguments[0]}else r=0;return n.apply(t,arguments)}}function Ma(n,r){var u=-1,o=n.length,g=o-1;for(r=r===t?o:r;++u<r;){var c=oi(u,g),p=n[c];n[c]=n[u],n[u]=p}return n.length=r,n}var Uo=Nc(function(n){var r=[];return n.charCodeAt(0)===46&&r.push(""),n.replace(_v,function(u,o,g,c){r.push(g?c.replace(Av,"$1"):o||u)}),r});function Cn(n){if(typeof n=="string"||pn(n))return n;var r=n+"";return r=="0"&&1/n==-J?"-0":r}function Or(n){if(n!=null){try{return Ea.call(n)}catch{}try{return n+""}catch{}}return""}function Lc(n,r){return An(En,function(u){var o="_."+u[0];r&u[1]&&!oa(n,o)&&n.push(o)}),n.sort()}function Co(n){if(n instanceof he)return n.clone();var r=new Sn(n.__wrapped__,n.__chain__);return r.__actions__=on(n.__actions__),r.__index__=n.__index__,r.__values__=n.__values__,r}function Dc(n,r,u){(u?ln(n,r,u):r===t)?r=1:r=Je(ve(r),0);var o=n==null?0:n.length;if(!o||r<1)return[];for(var g=0,c=0,p=F(ka(o/r));g<o;)p[c++]=Ln(n,g,g+=r);return p}function Pc(n){for(var r=-1,u=n==null?0:n.length,o=0,g=[];++r<u;){var c=n[r];c&&(g[o++]=c)}return g}function Kc(){var n=arguments.length;if(!n)return[];for(var r=F(n-1),u=arguments[0],o=n;o--;)r[o-1]=arguments[o];return _r(ge(u)?on(u):[u],nn(r,1))}var Fc=fe(function(n,r){return Ce(n)?It(n,nn(r,1,Ce,!0)):[]}),wc=fe(function(n,r){var u=Dn(r);return Ce(u)&&(u=t),Ce(n)?It(n,nn(r,1,Ce,!0),se(u,2)):[]}),Oc=fe(function(n,r){var u=Dn(r);return Ce(u)&&(u=t),Ce(n)?It(n,nn(r,1,Ce,!0),t,u):[]});function Gc(n,r,u){var o=n==null?0:n.length;return o?(r=u||r===t?1:ve(r),Ln(n,r<0?0:r,o)):[]}function Bc(n,r,u){var o=n==null?0:n.length;return o?(r=u||r===t?1:ve(r),r=o-r,Ln(n,0,r<0?0:r)):[]}function Vc(n,r){return n&&n.length?Pa(n,se(r,3),!0,!0):[]}function Mc(n,r){return n&&n.length?Pa(n,se(r,3),!0):[]}function jc(n,r,u,o){var g=n==null?0:n.length;return g?(u&&typeof u!="number"&&ln(n,r,u)&&(u=0,o=g),Kf(n,r,u,o)):[]}function Yo(n,r,u){var o=n==null?0:n.length;if(!o)return-1;var g=u==null?0:ve(u);return g<0&&(g=Je(o+g,0)),ma(n,se(r,3),g)}function $o(n,r,u){var o=n==null?0:n.length;if(!o)return-1;var g=o-1;return u!==t&&(g=ve(u),g=u<0?Je(o+g,0):rn(g,o-1)),ma(n,se(r,3),g,!0)}function Jo(n){var r=n==null?0:n.length;return r?nn(n,1):[]}function qc(n){var r=n==null?0:n.length;return r?nn(n,J):[]}function Hc(n,r){var u=n==null?0:n.length;return u?(r=r===t?1:ve(r),nn(n,r)):[]}function xc(n){for(var r=-1,u=n==null?0:n.length,o={};++r<u;){var g=n[r];o[g[0]]=g[1]}return o}function Wo(n){return n&&n.length?n[0]:t}function Uc(n,r,u){var o=n==null?0:n.length;if(!o)return-1;var g=u==null?0:ve(u);return g<0&&(g=Je(o+g,0)),Cr(n,r,g)}function Cc(n){var r=n==null?0:n.length;return r?Ln(n,0,-1):[]}var Yc=fe(function(n){var r=Ge(n,Ei);return r.length&&r[0]===n[0]?ai(r):[]}),$c=fe(function(n){var r=Dn(n),u=Ge(n,Ei);return r===Dn(u)?r=t:u.pop(),u.length&&u[0]===n[0]?ai(u,se(r,2)):[]}),Jc=fe(function(n){var r=Dn(n),u=Ge(n,Ei);return r=typeof r=="function"?r:t,r&&u.pop(),u.length&&u[0]===n[0]?ai(u,t,r):[]});function Wc(n,r){return n==null?"":UE.call(n,r)}function Dn(n){var r=n==null?0:n.length;return r?n[r-1]:t}function zc(n,r,u){var o=n==null?0:n.length;if(!o)return-1;var g=o;return u!==t&&(g=ve(u),g=g<0?Je(o+g,0):rn(g,o-1)),r===r?IE(n,r,g):ma(n,Is,g,!0)}function Xc(n,r){return n&&n.length?lo(n,ve(r)):t}var Zc=fe(zo);function zo(n,r){return n&&n.length&&r&&r.length?si(n,r):n}function Qc(n,r,u){return n&&n.length&&r&&r.length?si(n,r,se(u,2)):n}function e_(n,r,u){return n&&n.length&&r&&r.length?si(n,r,t,u):n}var n_=lr(function(n,r){var u=n==null?0:n.length,o=ei(n,r);return so(n,Ge(r,function(g){return ir(g,u)?+g:g}).sort(ho)),o});function r_(n,r){var u=[];if(!(n&&n.length))return u;var o=-1,g=[],c=n.length;for(r=se(r,3);++o<c;){var p=n[o];r(p,o,n)&&(u.push(p),g.push(o))}return so(n,g),u}function Ii(n){return n==null?n:JE.call(n)}function t_(n,r,u){var o=n==null?0:n.length;return o?(u&&typeof u!="number"&&ln(n,r,u)?(r=0,u=o):(r=r==null?0:ve(r),u=u===t?o:ve(u)),Ln(n,r,u)):[]}function a_(n,r){return Da(n,r)}function l_(n,r,u){return di(n,r,se(u,2))}function i_(n,r){var u=n==null?0:n.length;if(u){var o=Da(n,r);if(o<u&&Vn(n[o],r))return o}return-1}function u_(n,r){return Da(n,r,!0)}function s_(n,r,u){return di(n,r,se(u,2),!0)}function o_(n,r){var u=n==null?0:n.length;if(u){var o=Da(n,r,!0)-1;if(Vn(n[o],r))return o}return-1}function m_(n){return n&&n.length?mo(n):[]}function d_(n,r){return n&&n.length?mo(n,se(r,2)):[]}function g_(n){var r=n==null?0:n.length;return r?Ln(n,1,r):[]}function v_(n,r,u){return n&&n.length?(r=u||r===t?1:ve(r),Ln(n,0,r<0?0:r)):[]}function E_(n,r,u){var o=n==null?0:n.length;return o?(r=u||r===t?1:ve(r),r=o-r,Ln(n,r<0?0:r,o)):[]}function f_(n,r){return n&&n.length?Pa(n,se(r,3),!1,!0):[]}function c_(n,r){return n&&n.length?Pa(n,se(r,3)):[]}var __=fe(function(n){return kr(nn(n,1,Ce,!0))}),p_=fe(function(n){var r=Dn(n);return Ce(r)&&(r=t),kr(nn(n,1,Ce,!0),se(r,2))}),h_=fe(function(n){var r=Dn(n);return r=typeof r=="function"?r:t,kr(nn(n,1,Ce,!0),t,r)});function T_(n){return n&&n.length?kr(n):[]}function k_(n,r){return n&&n.length?kr(n,se(r,2)):[]}function y_(n,r){return r=typeof r=="function"?r:t,n&&n.length?kr(n,t,r):[]}function Li(n){if(!(n&&n.length))return[];var r=0;return n=cr(n,function(u){if(Ce(u))return r=Je(u.length,r),!0}),Yl(r,function(u){return Ge(n,xl(u))})}function Xo(n,r){if(!(n&&n.length))return[];var u=Li(n);return r==null?u:Ge(u,function(o){return fn(r,t,o)})}var R_=fe(function(n,r){return Ce(n)?It(n,r):[]}),N_=fe(function(n){return vi(cr(n,Ce))}),A_=fe(function(n){var r=Dn(n);return Ce(r)&&(r=t),vi(cr(n,Ce),se(r,2))}),b_=fe(function(n){var r=Dn(n);return r=typeof r=="function"?r:t,vi(cr(n,Ce),t,r)}),S_=fe(Li);function I_(n,r){return fo(n||[],r||[],St)}function L_(n,r){return fo(n||[],r||[],Pt)}var D_=fe(function(n){var r=n.length,u=r>1?n[r-1]:t;return u=typeof u=="function"?(n.pop(),u):t,Xo(n,u)});function Zo(n){var r=E(n);return r.__chain__=!0,r}function P_(n,r){return r(n),n}function ja(n,r){return r(n)}var K_=lr(function(n){var r=n.length,u=r?n[0]:0,o=this.__wrapped__,g=function(c){return ei(c,n)};return r>1||this.__actions__.length||!(o instanceof he)||!ir(u)?this.thru(g):(o=o.slice(u,+u+(r?1:0)),o.__actions__.push({func:ja,args:[g],thisArg:t}),new Sn(o,this.__chain__).thru(function(c){return r&&!c.length&&c.push(t),c}))});function F_(){return Zo(this)}function w_(){return new Sn(this.value(),this.__chain__)}function O_(){this.__values__===t&&(this.__values__=gm(this.value()));var n=this.__index__>=this.__values__.length,r=n?t:this.__values__[this.__index__++];return{done:n,value:r}}function G_(){return this}function B_(n){for(var r,u=this;u instanceof Aa;){var o=Co(u);o.__index__=0,o.__values__=t,r?g.__wrapped__=o:r=o;var g=o;u=u.__wrapped__}return g.__wrapped__=n,r}function V_(){var n=this.__wrapped__;if(n instanceof he){var r=n;return this.__actions__.length&&(r=new he(this)),r=r.reverse(),r.__actions__.push({func:ja,args:[Ii],thisArg:t}),new Sn(r,this.__chain__)}return this.thru(Ii)}function M_(){return Eo(this.__wrapped__,this.__actions__)}var j_=Ka(function(n,r,u){Se.call(n,u)?++n[u]:tr(n,u,1)});function q_(n,r,u){var o=ge(n)?bs:Pf;return u&&ln(n,r,u)&&(r=t),o(n,se(r,3))}function H_(n,r){var u=ge(n)?cr:zs;return u(n,se(r,3))}var x_=Ao(Yo),U_=Ao($o);function C_(n,r){return nn(qa(n,r),1)}function Y_(n,r){return nn(qa(n,r),J)}function $_(n,r,u){return u=u===t?1:ve(u),nn(qa(n,r),u)}function Qo(n,r){var u=ge(n)?An:Tr;return u(n,se(r,3))}function em(n,r){var u=ge(n)?dE:Ws;return u(n,se(r,3))}var J_=Ka(function(n,r,u){Se.call(n,u)?n[u].push(r):tr(n,u,[r])});function W_(n,r,u,o){n=mn(n)?n:tt(n),u=u&&!o?ve(u):0;var g=n.length;return u<0&&(u=Je(g+u,0)),Ya(n)?u<=g&&n.indexOf(r,u)>-1:!!g&&Cr(n,r,u)>-1}var z_=fe(function(n,r,u){var o=-1,g=typeof r=="function",c=mn(n)?F(n.length):[];return Tr(n,function(p){c[++o]=g?fn(r,p,u):Lt(p,r,u)}),c}),X_=Ka(function(n,r,u){tr(n,u,r)});function qa(n,r){var u=ge(n)?Ge:ro;return u(n,se(r,3))}function Z_(n,r,u,o){return n==null?[]:(ge(r)||(r=r==null?[]:[r]),u=o?t:u,ge(u)||(u=u==null?[]:[u]),io(n,r,u))}var Q_=Ka(function(n,r,u){n[u?0:1].push(r)},function(){return[[],[]]});function ep(n,r,u){var o=ge(n)?ql:Ds,g=arguments.length<3;return o(n,se(r,4),u,g,Tr)}function np(n,r,u){var o=ge(n)?gE:Ds,g=arguments.length<3;return o(n,se(r,4),u,g,Ws)}function rp(n,r){var u=ge(n)?cr:zs;return u(n,Ua(se(r,3)))}function tp(n){var r=ge(n)?Cs:Wf;return r(n)}function ap(n,r,u){(u?ln(n,r,u):r===t)?r=1:r=ve(r);var o=ge(n)?bf:zf;return o(n,r)}function lp(n){var r=ge(n)?Sf:Zf;return r(n)}function ip(n){if(n==null)return 0;if(mn(n))return Ya(n)?$r(n):n.length;var r=tn(n);return r==Be||r==On?n.size:ii(n).length}function up(n,r,u){var o=ge(n)?Hl:Qf;return u&&ln(n,r,u)&&(r=t),o(n,se(r,3))}var sp=fe(function(n,r){if(n==null)return[];var u=r.length;return u>1&&ln(n,r[0],r[1])?r=[]:u>2&&ln(r[0],r[1],r[2])&&(r=[r[0]]),io(n,nn(r,1),[])}),Ha=qE||function(){return en.Date.now()};function op(n,r){if(typeof r!="function")throw new bn(m);return n=ve(n),function(){if(--n<1)return r.apply(this,arguments)}}function nm(n,r,u){return r=u?t:r,r=n&&r==null?n.length:r,ar(n,w,t,t,t,t,r)}function rm(n,r){var u;if(typeof r!="function")throw new bn(m);return n=ve(n),function(){return--n>0&&(u=r.apply(this,arguments)),n<=1&&(r=t),u}}var Di=fe(function(n,r,u){var o=T;if(u.length){var g=pr(u,nt(Di));o|=D}return ar(n,o,r,u,g)}),tm=fe(function(n,r,u){var o=T|b;if(u.length){var g=pr(u,nt(tm));o|=D}return ar(r,o,n,u,g)});function am(n,r,u){r=u?t:r;var o=ar(n,I,t,t,t,t,t,r);return o.placeholder=am.placeholder,o}function lm(n,r,u){r=u?t:r;var o=ar(n,x,t,t,t,t,t,r);return o.placeholder=lm.placeholder,o}function im(n,r,u){var o,g,c,p,N,L,j=0,q=!1,Y=!1,ee=!0;if(typeof n!="function")throw new bn(m);r=Pn(r)||0,Ve(u)&&(q=!!u.leading,Y="maxWait"in u,c=Y?Je(Pn(u.maxWait)||0,r):c,ee="trailing"in u?!!u.trailing:ee);function ie(Ye){var Mn=o,or=g;return o=g=t,j=Ye,p=n.apply(or,Mn),p}function oe(Ye){return j=Ye,N=wt(_e,r),q?ie(Ye):p}function Ee(Ye){var Mn=Ye-L,or=Ye-j,Am=r-Mn;return Y?rn(Am,c-or):Am}function me(Ye){var Mn=Ye-L,or=Ye-j;return L===t||Mn>=r||Mn<0||Y&&or>=c}function _e(){var Ye=Ha();if(me(Ye))return Te(Ye);N=wt(_e,Ee(Ye))}function Te(Ye){return N=t,ee&&o?ie(Ye):(o=g=t,p)}function hn(){N!==t&&co(N),j=0,o=L=g=N=t}function un(){return N===t?p:Te(Ha())}function Tn(){var Ye=Ha(),Mn=me(Ye);if(o=arguments,g=this,L=Ye,Mn){if(N===t)return oe(L);if(Y)return co(N),N=wt(_e,r),ie(L)}return N===t&&(N=wt(_e,r)),p}return Tn.cancel=hn,Tn.flush=un,Tn}var mp=fe(function(n,r){return Js(n,1,r)}),dp=fe(function(n,r,u){return Js(n,Pn(r)||0,u)});function gp(n){return ar(n,W)}function xa(n,r){if(typeof n!="function"||r!=null&&typeof r!="function")throw new bn(m);var u=function(){var o=arguments,g=r?r.apply(this,o):o[0],c=u.cache;if(c.has(g))return c.get(g);var p=n.apply(this,o);return u.cache=c.set(g,p)||c,p};return u.cache=new(xa.Cache||rr),u}xa.Cache=rr;function Ua(n){if(typeof n!="function")throw new bn(m);return function(){var r=arguments;switch(r.length){case 0:return!n.call(this);case 1:return!n.call(this,r[0]);case 2:return!n.call(this,r[0],r[1]);case 3:return!n.call(this,r[0],r[1],r[2])}return!n.apply(this,r)}}function vp(n){return rm(2,n)}var Ep=ec(function(n,r){r=r.length==1&&ge(r[0])?Ge(r[0],cn(se())):Ge(nn(r,1),cn(se()));var u=r.length;return fe(function(o){for(var g=-1,c=rn(o.length,u);++g<c;)o[g]=r[g].call(this,o[g]);return fn(n,this,o)})}),Pi=fe(function(n,r){var u=pr(r,nt(Pi));return ar(n,D,t,r,u)}),um=fe(function(n,r){var u=pr(r,nt(um));return ar(n,H,t,r,u)}),fp=lr(function(n,r){return ar(n,O,t,t,t,r)});function cp(n,r){if(typeof n!="function")throw new bn(m);return r=r===t?r:ve(r),fe(n,r)}function _p(n,r){if(typeof n!="function")throw new bn(m);return r=r==null?0:Je(ve(r),0),fe(function(u){var o=u[r],g=Rr(u,0,r);return o&&_r(g,o),fn(n,this,g)})}function pp(n,r,u){var o=!0,g=!0;if(typeof n!="function")throw new bn(m);return Ve(u)&&(o="leading"in u?!!u.leading:o,g="trailing"in u?!!u.trailing:g),im(n,r,{leading:o,maxWait:r,trailing:g})}function hp(n){return nm(n,1)}function Tp(n,r){return Pi(fi(r),n)}function kp(){if(!arguments.length)return[];var n=arguments[0];return ge(n)?n:[n]}function yp(n){return In(n,y)}function Rp(n,r){return r=typeof r=="function"?r:t,In(n,y,r)}function Np(n){return In(n,h|y)}function Ap(n,r){return r=typeof r=="function"?r:t,In(n,h|y,r)}function bp(n,r){return r==null||$s(n,r,We(r))}function Vn(n,r){return n===r||n!==n&&r!==r}var Sp=Ga(ti),Ip=Ga(function(n,r){return n>=r}),Gr=Qs(function(){return arguments}())?Qs:function(n){return xe(n)&&Se.call(n,"callee")&&!Ms.call(n,"callee")},ge=F.isArray,Lp=Ts?cn(Ts):Bf;function mn(n){return n!=null&&Ca(n.length)&&!ur(n)}function Ce(n){return xe(n)&&mn(n)}function Dp(n){return n===!0||n===!1||xe(n)&&an(n)==pe}var Nr=xE||Hi,Pp=ks?cn(ks):Vf;function Kp(n){return xe(n)&&n.nodeType===1&&!Ot(n)}function Fp(n){if(n==null)return!0;if(mn(n)&&(ge(n)||typeof n=="string"||typeof n.splice=="function"||Nr(n)||rt(n)||Gr(n)))return!n.length;var r=tn(n);if(r==Be||r==On)return!n.size;if(Ft(n))return!ii(n).length;for(var u in n)if(Se.call(n,u))return!1;return!0}function wp(n,r){return Dt(n,r)}function Op(n,r,u){u=typeof u=="function"?u:t;var o=u?u(n,r):t;return o===t?Dt(n,r,t,u):!!o}function Ki(n){if(!xe(n))return!1;var r=an(n);return r==He||r==Xe||typeof n.message=="string"&&typeof n.name=="string"&&!Ot(n)}function Gp(n){return typeof n=="number"&&qs(n)}function ur(n){if(!Ve(n))return!1;var r=an(n);return r==Ue||r==Rn||r==qe||r==er}function sm(n){return typeof n=="number"&&n==ve(n)}function Ca(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=U}function Ve(n){var r=typeof n;return n!=null&&(r=="object"||r=="function")}function xe(n){return n!=null&&typeof n=="object"}var om=ys?cn(ys):jf;function Bp(n,r){return n===r||li(n,r,yi(r))}function Vp(n,r,u){return u=typeof u=="function"?u:t,li(n,r,yi(r),u)}function Mp(n){return mm(n)&&n!=+n}function jp(n){if(Rc(n))throw new de(s);return eo(n)}function qp(n){return n===null}function Hp(n){return n==null}function mm(n){return typeof n=="number"||xe(n)&&an(n)==Ze}function Ot(n){if(!xe(n)||an(n)!=Qe)return!1;var r=pa(n);if(r===null)return!0;var u=Se.call(r,"constructor")&&r.constructor;return typeof u=="function"&&u instanceof u&&Ea.call(u)==BE}var Fi=Rs?cn(Rs):qf;function xp(n){return sm(n)&&n>=-U&&n<=U}var dm=Ns?cn(Ns):Hf;function Ya(n){return typeof n=="string"||!ge(n)&&xe(n)&&an(n)==pt}function pn(n){return typeof n=="symbol"||xe(n)&&an(n)==la}var rt=As?cn(As):xf;function Up(n){return n===t}function Cp(n){return xe(n)&&tn(n)==ht}function Yp(n){return xe(n)&&an(n)==uv}var $p=Ga(ui),Jp=Ga(function(n,r){return n<=r});function gm(n){if(!n)return[];if(mn(n))return Ya(n)?Gn(n):on(n);if(yt&&n[yt])return AE(n[yt]());var r=tn(n),u=r==Be?Jl:r==On?da:tt;return u(n)}function sr(n){if(!n)return n===0?n:0;if(n=Pn(n),n===J||n===-J){var r=n<0?-1:1;return r*$}return n===n?n:0}function ve(n){var r=sr(n),u=r%1;return r===r?u?r-u:r:0}function vm(n){return n?Kr(ve(n),0,ne):0}function Pn(n){if(typeof n=="number")return n;if(pn(n))return ae;if(Ve(n)){var r=typeof n.valueOf=="function"?n.valueOf():n;n=Ve(r)?r+"":r}if(typeof n!="string")return n===0?n:+n;n=Ps(n);var u=Iv.test(n);return u||Dv.test(n)?sE(n.slice(2),u?2:8):Sv.test(n)?ae:+n}function Em(n){return Un(n,dn(n))}function Wp(n){return n?Kr(ve(n),-U,U):n===0?n:0}function Ae(n){return n==null?"":_n(n)}var zp=Qr(function(n,r){if(Ft(r)||mn(r)){Un(r,We(r),n);return}for(var u in r)Se.call(r,u)&&St(n,u,r[u])}),fm=Qr(function(n,r){Un(r,dn(r),n)}),$a=Qr(function(n,r,u,o){Un(r,dn(r),n,o)}),Xp=Qr(function(n,r,u,o){Un(r,We(r),n,o)}),Zp=lr(ei);function Qp(n,r){var u=Zr(n);return r==null?u:Ys(u,r)}var eh=fe(function(n,r){n=De(n);var u=-1,o=r.length,g=o>2?r[2]:t;for(g&&ln(r[0],r[1],g)&&(o=1);++u<o;)for(var c=r[u],p=dn(c),N=-1,L=p.length;++N<L;){var j=p[N],q=n[j];(q===t||Vn(q,Wr[j])&&!Se.call(n,j))&&(n[j]=c[j])}return n}),nh=fe(function(n){return n.push(t,Ko),fn(cm,t,n)});function rh(n,r){return Ss(n,se(r,3),xn)}function th(n,r){return Ss(n,se(r,3),ri)}function ah(n,r){return n==null?n:ni(n,se(r,3),dn)}function lh(n,r){return n==null?n:Xs(n,se(r,3),dn)}function ih(n,r){return n&&xn(n,se(r,3))}function uh(n,r){return n&&ri(n,se(r,3))}function sh(n){return n==null?[]:Ia(n,We(n))}function oh(n){return n==null?[]:Ia(n,dn(n))}function wi(n,r,u){var o=n==null?t:Fr(n,r);return o===t?u:o}function mh(n,r){return n!=null&&Oo(n,r,Ff)}function Oi(n,r){return n!=null&&Oo(n,r,wf)}var dh=So(function(n,r,u){r!=null&&typeof r.toString!="function"&&(r=fa.call(r)),n[r]=u},Bi(gn)),gh=So(function(n,r,u){r!=null&&typeof r.toString!="function"&&(r=fa.call(r)),Se.call(n,r)?n[r].push(u):n[r]=[u]},se),vh=fe(Lt);function We(n){return mn(n)?Us(n):ii(n)}function dn(n){return mn(n)?Us(n,!0):Uf(n)}function Eh(n,r){var u={};return r=se(r,3),xn(n,function(o,g,c){tr(u,r(o,g,c),o)}),u}function fh(n,r){var u={};return r=se(r,3),xn(n,function(o,g,c){tr(u,g,r(o,g,c))}),u}var ch=Qr(function(n,r,u){La(n,r,u)}),cm=Qr(function(n,r,u,o){La(n,r,u,o)}),_h=lr(function(n,r){var u={};if(n==null)return u;var o=!1;r=Ge(r,function(c){return c=yr(c,n),o||(o=c.length>1),c}),Un(n,Ti(n),u),o&&(u=In(u,h|k|y,dc));for(var g=r.length;g--;)gi(u,r[g]);return u});function ph(n,r){return _m(n,Ua(se(r)))}var hh=lr(function(n,r){return n==null?{}:Yf(n,r)});function _m(n,r){if(n==null)return{};var u=Ge(Ti(n),function(o){return[o]});return r=se(r),uo(n,u,function(o,g){return r(o,g[0])})}function Th(n,r,u){r=yr(r,n);var o=-1,g=r.length;for(g||(g=1,n=t);++o<g;){var c=n==null?t:n[Cn(r[o])];c===t&&(o=g,c=u),n=ur(c)?c.call(n):c}return n}function kh(n,r,u){return n==null?n:Pt(n,r,u)}function yh(n,r,u,o){return o=typeof o=="function"?o:t,n==null?n:Pt(n,r,u,o)}var pm=Do(We),hm=Do(dn);function Rh(n,r,u){var o=ge(n),g=o||Nr(n)||rt(n);if(r=se(r,4),u==null){var c=n&&n.constructor;g?u=o?new c:[]:Ve(n)?u=ur(c)?Zr(pa(n)):{}:u={}}return(g?An:xn)(n,function(p,N,L){return r(u,p,N,L)}),u}function Nh(n,r){return n==null?!0:gi(n,r)}function Ah(n,r,u){return n==null?n:vo(n,r,fi(u))}function bh(n,r,u,o){return o=typeof o=="function"?o:t,n==null?n:vo(n,r,fi(u),o)}function tt(n){return n==null?[]:$l(n,We(n))}function Sh(n){return n==null?[]:$l(n,dn(n))}function Ih(n,r,u){return u===t&&(u=r,r=t),u!==t&&(u=Pn(u),u=u===u?u:0),r!==t&&(r=Pn(r),r=r===r?r:0),Kr(Pn(n),r,u)}function Lh(n,r,u){return r=sr(r),u===t?(u=r,r=0):u=sr(u),n=Pn(n),Of(n,r,u)}function Dh(n,r,u){if(u&&typeof u!="boolean"&&ln(n,r,u)&&(r=u=t),u===t&&(typeof r=="boolean"?(u=r,r=t):typeof n=="boolean"&&(u=n,n=t)),n===t&&r===t?(n=0,r=1):(n=sr(n),r===t?(r=n,n=0):r=sr(r)),n>r){var o=n;n=r,r=o}if(u||n%1||r%1){var g=Hs();return rn(n+g*(r-n+uE("1e-"+((g+"").length-1))),r)}return oi(n,r)}var Ph=et(function(n,r,u){return r=r.toLowerCase(),n+(u?Tm(r):r)});function Tm(n){return Gi(Ae(n).toLowerCase())}function km(n){return n=Ae(n),n&&n.replace(Kv,TE).replace(Xv,"")}function Kh(n,r,u){n=Ae(n),r=_n(r);var o=n.length;u=u===t?o:Kr(ve(u),0,o);var g=u;return u-=r.length,u>=0&&n.slice(u,g)==r}function Fh(n){return n=Ae(n),n&&gv.test(n)?n.replace(Xu,kE):n}function wh(n){return n=Ae(n),n&&pv.test(n)?n.replace(Pl,"\\$&"):n}var Oh=et(function(n,r,u){return n+(u?"-":"")+r.toLowerCase()}),Gh=et(function(n,r,u){return n+(u?" ":"")+r.toLowerCase()}),Bh=No("toLowerCase");function Vh(n,r,u){n=Ae(n),r=ve(r);var o=r?$r(n):0;if(!r||o>=r)return n;var g=(r-o)/2;return Oa(ya(g),u)+n+Oa(ka(g),u)}function Mh(n,r,u){n=Ae(n),r=ve(r);var o=r?$r(n):0;return r&&o<r?n+Oa(r-o,u):n}function jh(n,r,u){n=Ae(n),r=ve(r);var o=r?$r(n):0;return r&&o<r?Oa(r-o,u)+n:n}function qh(n,r,u){return u||r==null?r=0:r&&(r=+r),$E(Ae(n).replace(Kl,""),r||0)}function Hh(n,r,u){return(u?ln(n,r,u):r===t)?r=1:r=ve(r),mi(Ae(n),r)}function xh(){var n=arguments,r=Ae(n[0]);return n.length<3?r:r.replace(n[1],n[2])}var Uh=et(function(n,r,u){return n+(u?"_":"")+r.toLowerCase()});function Ch(n,r,u){return u&&typeof u!="number"&&ln(n,r,u)&&(r=u=t),u=u===t?ne:u>>>0,u?(n=Ae(n),n&&(typeof r=="string"||r!=null&&!Fi(r))&&(r=_n(r),!r&&Yr(n))?Rr(Gn(n),0,u):n.split(r,u)):[]}var Yh=et(function(n,r,u){return n+(u?" ":"")+Gi(r)});function $h(n,r,u){return n=Ae(n),u=u==null?0:Kr(ve(u),0,n.length),r=_n(r),n.slice(u,u+r.length)==r}function Jh(n,r,u){var o=E.templateSettings;u&&ln(n,r,u)&&(r=t),n=Ae(n),r=$a({},r,o,Po);var g=$a({},r.imports,o.imports,Po),c=We(g),p=$l(g,c),N,L,j=0,q=r.interpolate||ia,Y="__p += '",ee=Wl((r.escape||ia).source+"|"+q.source+"|"+(q===Zu?bv:ia).source+"|"+(r.evaluate||ia).source+"|$","g"),ie="//# sourceURL="+(Se.call(r,"sourceURL")?(r.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++rE+"]")+`
`;n.replace(ee,function(me,_e,Te,hn,un,Tn){return Te||(Te=hn),Y+=n.slice(j,Tn).replace(Fv,yE),_e&&(N=!0,Y+=`' +
__e(`+_e+`) +
'`),un&&(L=!0,Y+=`';
`+un+`;
__p += '`),Te&&(Y+=`' +
((__t = (`+Te+`)) == null ? '' : __t) +
'`),j=Tn+me.length,me}),Y+=`';
`;var oe=Se.call(r,"variable")&&r.variable;if(!oe)Y=`with (obj) {
`+Y+`
}
`;else if(Nv.test(oe))throw new de(d);Y=(L?Y.replace(sv,""):Y).replace(ov,"$1").replace(mv,"$1;"),Y="function("+(oe||"obj")+`) {
`+(oe?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(N?", __e = _.escape":"")+(L?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+Y+`return __p
}`;var Ee=Rm(function(){return Re(c,ie+"return "+Y).apply(t,p)});if(Ee.source=Y,Ki(Ee))throw Ee;return Ee}function Wh(n){return Ae(n).toLowerCase()}function zh(n){return Ae(n).toUpperCase()}function Xh(n,r,u){if(n=Ae(n),n&&(u||r===t))return Ps(n);if(!n||!(r=_n(r)))return n;var o=Gn(n),g=Gn(r),c=Ks(o,g),p=Fs(o,g)+1;return Rr(o,c,p).join("")}function Zh(n,r,u){if(n=Ae(n),n&&(u||r===t))return n.slice(0,Os(n)+1);if(!n||!(r=_n(r)))return n;var o=Gn(n),g=Fs(o,Gn(r))+1;return Rr(o,0,g).join("")}function Qh(n,r,u){if(n=Ae(n),n&&(u||r===t))return n.replace(Kl,"");if(!n||!(r=_n(r)))return n;var o=Gn(n),g=Ks(o,Gn(r));return Rr(o,g).join("")}function e0(n,r){var u=Q,o=X;if(Ve(r)){var g="separator"in r?r.separator:g;u="length"in r?ve(r.length):u,o="omission"in r?_n(r.omission):o}n=Ae(n);var c=n.length;if(Yr(n)){var p=Gn(n);c=p.length}if(u>=c)return n;var N=u-$r(o);if(N<1)return o;var L=p?Rr(p,0,N).join(""):n.slice(0,N);if(g===t)return L+o;if(p&&(N+=L.length-N),Fi(g)){if(n.slice(N).search(g)){var j,q=L;for(g.global||(g=Wl(g.source,Ae(Qu.exec(g))+"g")),g.lastIndex=0;j=g.exec(q);)var Y=j.index;L=L.slice(0,Y===t?N:Y)}}else if(n.indexOf(_n(g),N)!=N){var ee=L.lastIndexOf(g);ee>-1&&(L=L.slice(0,ee))}return L+o}function n0(n){return n=Ae(n),n&&dv.test(n)?n.replace(zu,LE):n}var r0=et(function(n,r,u){return n+(u?" ":"")+r.toUpperCase()}),Gi=No("toUpperCase");function ym(n,r,u){return n=Ae(n),r=u?t:r,r===t?NE(n)?KE(n):fE(n):n.match(r)||[]}var Rm=fe(function(n,r){try{return fn(n,t,r)}catch(u){return Ki(u)?u:new de(u)}}),t0=lr(function(n,r){return An(r,function(u){u=Cn(u),tr(n,u,Di(n[u],n))}),n});function a0(n){var r=n==null?0:n.length,u=se();return n=r?Ge(n,function(o){if(typeof o[1]!="function")throw new bn(m);return[u(o[0]),o[1]]}):[],fe(function(o){for(var g=-1;++g<r;){var c=n[g];if(fn(c[0],this,o))return fn(c[1],this,o)}})}function l0(n){return Df(In(n,h))}function Bi(n){return function(){return n}}function i0(n,r){return n==null||n!==n?r:n}var u0=bo(),s0=bo(!0);function gn(n){return n}function Vi(n){return no(typeof n=="function"?n:In(n,h))}function o0(n){return to(In(n,h))}function m0(n,r){return ao(n,In(r,h))}var d0=fe(function(n,r){return function(u){return Lt(u,n,r)}}),g0=fe(function(n,r){return function(u){return Lt(n,u,r)}});function Mi(n,r,u){var o=We(r),g=Ia(r,o);u==null&&!(Ve(r)&&(g.length||!o.length))&&(u=r,r=n,n=this,g=Ia(r,We(r)));var c=!(Ve(u)&&"chain"in u)||!!u.chain,p=ur(n);return An(g,function(N){var L=r[N];n[N]=L,p&&(n.prototype[N]=function(){var j=this.__chain__;if(c||j){var q=n(this.__wrapped__),Y=q.__actions__=on(this.__actions__);return Y.push({func:L,args:arguments,thisArg:n}),q.__chain__=j,q}return L.apply(n,_r([this.value()],arguments))})}),n}function v0(){return en._===this&&(en._=VE),this}function ji(){}function E0(n){return n=ve(n),fe(function(r){return lo(r,n)})}var f0=_i(Ge),c0=_i(bs),_0=_i(Hl);function Nm(n){return Ni(n)?xl(Cn(n)):$f(n)}function p0(n){return function(r){return n==null?t:Fr(n,r)}}var h0=Io(),T0=Io(!0);function qi(){return[]}function Hi(){return!1}function k0(){return{}}function y0(){return""}function R0(){return!0}function N0(n,r){if(n=ve(n),n<1||n>U)return[];var u=ne,o=rn(n,ne);r=se(r),n-=ne;for(var g=Yl(o,r);++u<n;)r(u);return g}function A0(n){return ge(n)?Ge(n,Cn):pn(n)?[n]:on(Uo(Ae(n)))}function b0(n){var r=++GE;return Ae(n)+r}var S0=wa(function(n,r){return n+r},0),I0=pi("ceil"),L0=wa(function(n,r){return n/r},1),D0=pi("floor");function P0(n){return n&&n.length?Sa(n,gn,ti):t}function K0(n,r){return n&&n.length?Sa(n,se(r,2),ti):t}function F0(n){return Ls(n,gn)}function w0(n,r){return Ls(n,se(r,2))}function O0(n){return n&&n.length?Sa(n,gn,ui):t}function G0(n,r){return n&&n.length?Sa(n,se(r,2),ui):t}var B0=wa(function(n,r){return n*r},1),V0=pi("round"),M0=wa(function(n,r){return n-r},0);function j0(n){return n&&n.length?Cl(n,gn):0}function q0(n,r){return n&&n.length?Cl(n,se(r,2)):0}return E.after=op,E.ary=nm,E.assign=zp,E.assignIn=fm,E.assignInWith=$a,E.assignWith=Xp,E.at=Zp,E.before=rm,E.bind=Di,E.bindAll=t0,E.bindKey=tm,E.castArray=kp,E.chain=Zo,E.chunk=Dc,E.compact=Pc,E.concat=Kc,E.cond=a0,E.conforms=l0,E.constant=Bi,E.countBy=j_,E.create=Qp,E.curry=am,E.curryRight=lm,E.debounce=im,E.defaults=eh,E.defaultsDeep=nh,E.defer=mp,E.delay=dp,E.difference=Fc,E.differenceBy=wc,E.differenceWith=Oc,E.drop=Gc,E.dropRight=Bc,E.dropRightWhile=Vc,E.dropWhile=Mc,E.fill=jc,E.filter=H_,E.flatMap=C_,E.flatMapDeep=Y_,E.flatMapDepth=$_,E.flatten=Jo,E.flattenDeep=qc,E.flattenDepth=Hc,E.flip=gp,E.flow=u0,E.flowRight=s0,E.fromPairs=xc,E.functions=sh,E.functionsIn=oh,E.groupBy=J_,E.initial=Cc,E.intersection=Yc,E.intersectionBy=$c,E.intersectionWith=Jc,E.invert=dh,E.invertBy=gh,E.invokeMap=z_,E.iteratee=Vi,E.keyBy=X_,E.keys=We,E.keysIn=dn,E.map=qa,E.mapKeys=Eh,E.mapValues=fh,E.matches=o0,E.matchesProperty=m0,E.memoize=xa,E.merge=ch,E.mergeWith=cm,E.method=d0,E.methodOf=g0,E.mixin=Mi,E.negate=Ua,E.nthArg=E0,E.omit=_h,E.omitBy=ph,E.once=vp,E.orderBy=Z_,E.over=f0,E.overArgs=Ep,E.overEvery=c0,E.overSome=_0,E.partial=Pi,E.partialRight=um,E.partition=Q_,E.pick=hh,E.pickBy=_m,E.property=Nm,E.propertyOf=p0,E.pull=Zc,E.pullAll=zo,E.pullAllBy=Qc,E.pullAllWith=e_,E.pullAt=n_,E.range=h0,E.rangeRight=T0,E.rearg=fp,E.reject=rp,E.remove=r_,E.rest=cp,E.reverse=Ii,E.sampleSize=ap,E.set=kh,E.setWith=yh,E.shuffle=lp,E.slice=t_,E.sortBy=sp,E.sortedUniq=m_,E.sortedUniqBy=d_,E.split=Ch,E.spread=_p,E.tail=g_,E.take=v_,E.takeRight=E_,E.takeRightWhile=f_,E.takeWhile=c_,E.tap=P_,E.throttle=pp,E.thru=ja,E.toArray=gm,E.toPairs=pm,E.toPairsIn=hm,E.toPath=A0,E.toPlainObject=Em,E.transform=Rh,E.unary=hp,E.union=__,E.unionBy=p_,E.unionWith=h_,E.uniq=T_,E.uniqBy=k_,E.uniqWith=y_,E.unset=Nh,E.unzip=Li,E.unzipWith=Xo,E.update=Ah,E.updateWith=bh,E.values=tt,E.valuesIn=Sh,E.without=R_,E.words=ym,E.wrap=Tp,E.xor=N_,E.xorBy=A_,E.xorWith=b_,E.zip=S_,E.zipObject=I_,E.zipObjectDeep=L_,E.zipWith=D_,E.entries=pm,E.entriesIn=hm,E.extend=fm,E.extendWith=$a,Mi(E,E),E.add=S0,E.attempt=Rm,E.camelCase=Ph,E.capitalize=Tm,E.ceil=I0,E.clamp=Ih,E.clone=yp,E.cloneDeep=Np,E.cloneDeepWith=Ap,E.cloneWith=Rp,E.conformsTo=bp,E.deburr=km,E.defaultTo=i0,E.divide=L0,E.endsWith=Kh,E.eq=Vn,E.escape=Fh,E.escapeRegExp=wh,E.every=q_,E.find=x_,E.findIndex=Yo,E.findKey=rh,E.findLast=U_,E.findLastIndex=$o,E.findLastKey=th,E.floor=D0,E.forEach=Qo,E.forEachRight=em,E.forIn=ah,E.forInRight=lh,E.forOwn=ih,E.forOwnRight=uh,E.get=wi,E.gt=Sp,E.gte=Ip,E.has=mh,E.hasIn=Oi,E.head=Wo,E.identity=gn,E.includes=W_,E.indexOf=Uc,E.inRange=Lh,E.invoke=vh,E.isArguments=Gr,E.isArray=ge,E.isArrayBuffer=Lp,E.isArrayLike=mn,E.isArrayLikeObject=Ce,E.isBoolean=Dp,E.isBuffer=Nr,E.isDate=Pp,E.isElement=Kp,E.isEmpty=Fp,E.isEqual=wp,E.isEqualWith=Op,E.isError=Ki,E.isFinite=Gp,E.isFunction=ur,E.isInteger=sm,E.isLength=Ca,E.isMap=om,E.isMatch=Bp,E.isMatchWith=Vp,E.isNaN=Mp,E.isNative=jp,E.isNil=Hp,E.isNull=qp,E.isNumber=mm,E.isObject=Ve,E.isObjectLike=xe,E.isPlainObject=Ot,E.isRegExp=Fi,E.isSafeInteger=xp,E.isSet=dm,E.isString=Ya,E.isSymbol=pn,E.isTypedArray=rt,E.isUndefined=Up,E.isWeakMap=Cp,E.isWeakSet=Yp,E.join=Wc,E.kebabCase=Oh,E.last=Dn,E.lastIndexOf=zc,E.lowerCase=Gh,E.lowerFirst=Bh,E.lt=$p,E.lte=Jp,E.max=P0,E.maxBy=K0,E.mean=F0,E.meanBy=w0,E.min=O0,E.minBy=G0,E.stubArray=qi,E.stubFalse=Hi,E.stubObject=k0,E.stubString=y0,E.stubTrue=R0,E.multiply=B0,E.nth=Xc,E.noConflict=v0,E.noop=ji,E.now=Ha,E.pad=Vh,E.padEnd=Mh,E.padStart=jh,E.parseInt=qh,E.random=Dh,E.reduce=ep,E.reduceRight=np,E.repeat=Hh,E.replace=xh,E.result=Th,E.round=V0,E.runInContext=S,E.sample=tp,E.size=ip,E.snakeCase=Uh,E.some=up,E.sortedIndex=a_,E.sortedIndexBy=l_,E.sortedIndexOf=i_,E.sortedLastIndex=u_,E.sortedLastIndexBy=s_,E.sortedLastIndexOf=o_,E.startCase=Yh,E.startsWith=$h,E.subtract=M0,E.sum=j0,E.sumBy=q0,E.template=Jh,E.times=N0,E.toFinite=sr,E.toInteger=ve,E.toLength=vm,E.toLower=Wh,E.toNumber=Pn,E.toSafeInteger=Wp,E.toString=Ae,E.toUpper=zh,E.trim=Xh,E.trimEnd=Zh,E.trimStart=Qh,E.truncate=e0,E.unescape=n0,E.uniqueId=b0,E.upperCase=r0,E.upperFirst=Gi,E.each=Qo,E.eachRight=em,E.first=Wo,Mi(E,function(){var n={};return xn(E,function(r,u){Se.call(E.prototype,u)||(n[u]=r)}),n}(),{chain:!1}),E.VERSION=a,An(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){E[n].placeholder=E}),An(["drop","take"],function(n,r){he.prototype[n]=function(u){u=u===t?1:Je(ve(u),0);var o=this.__filtered__&&!r?new he(this):this.clone();return o.__filtered__?o.__takeCount__=rn(u,o.__takeCount__):o.__views__.push({size:rn(u,ne),type:n+(o.__dir__<0?"Right":"")}),o},he.prototype[n+"Right"]=function(u){return this.reverse()[n](u).reverse()}}),An(["filter","map","takeWhile"],function(n,r){var u=r+1,o=u==G||u==re;he.prototype[n]=function(g){var c=this.clone();return c.__iteratees__.push({iteratee:se(g,3),type:u}),c.__filtered__=c.__filtered__||o,c}}),An(["head","last"],function(n,r){var u="take"+(r?"Right":"");he.prototype[n]=function(){return this[u](1).value()[0]}}),An(["initial","tail"],function(n,r){var u="drop"+(r?"":"Right");he.prototype[n]=function(){return this.__filtered__?new he(this):this[u](1)}}),he.prototype.compact=function(){return this.filter(gn)},he.prototype.find=function(n){return this.filter(n).head()},he.prototype.findLast=function(n){return this.reverse().find(n)},he.prototype.invokeMap=fe(function(n,r){return typeof n=="function"?new he(this):this.map(function(u){return Lt(u,n,r)})}),he.prototype.reject=function(n){return this.filter(Ua(se(n)))},he.prototype.slice=function(n,r){n=ve(n);var u=this;return u.__filtered__&&(n>0||r<0)?new he(u):(n<0?u=u.takeRight(-n):n&&(u=u.drop(n)),r!==t&&(r=ve(r),u=r<0?u.dropRight(-r):u.take(r-n)),u)},he.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},he.prototype.toArray=function(){return this.take(ne)},xn(he.prototype,function(n,r){var u=/^(?:filter|find|map|reject)|While$/.test(r),o=/^(?:head|last)$/.test(r),g=E[o?"take"+(r=="last"?"Right":""):r],c=o||/^find/.test(r);g&&(E.prototype[r]=function(){var p=this.__wrapped__,N=o?[1]:arguments,L=p instanceof he,j=N[0],q=L||ge(p),Y=function(_e){var Te=g.apply(E,_r([_e],N));return o&&ee?Te[0]:Te};q&&u&&typeof j=="function"&&j.length!=1&&(L=q=!1);var ee=this.__chain__,ie=!!this.__actions__.length,oe=c&&!ee,Ee=L&&!ie;if(!c&&q){p=Ee?p:new he(this);var me=n.apply(p,N);return me.__actions__.push({func:ja,args:[Y],thisArg:t}),new Sn(me,ee)}return oe&&Ee?n.apply(this,N):(me=this.thru(Y),oe?o?me.value()[0]:me.value():me)})}),An(["pop","push","shift","sort","splice","unshift"],function(n){var r=ga[n],u=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",o=/^(?:pop|shift)$/.test(n);E.prototype[n]=function(){var g=arguments;if(o&&!this.__chain__){var c=this.value();return r.apply(ge(c)?c:[],g)}return this[u](function(p){return r.apply(ge(p)?p:[],g)})}}),xn(he.prototype,function(n,r){var u=E[r];if(u){var o=u.name+"";Se.call(Xr,o)||(Xr[o]=[]),Xr[o].push({name:r,func:u})}}),Xr[Fa(t,b).name]=[{name:"wrapper",func:t}],he.prototype.clone=ef,he.prototype.reverse=nf,he.prototype.value=rf,E.prototype.at=K_,E.prototype.chain=F_,E.prototype.commit=w_,E.prototype.next=O_,E.prototype.plant=B_,E.prototype.reverse=V_,E.prototype.toJSON=E.prototype.valueOf=E.prototype.value=M_,E.prototype.first=E.prototype.head,yt&&(E.prototype[yt]=G_),E},Jr=FE();Ir?((Ir.exports=Jr)._=Jr,Vl._=Jr):en._=Jr}).call(CR)}(xt,xt.exports)),xt.exports}YR();jn(na);const Sg=A.forwardRef((e,l)=>V.jsx(it,{gap:"space-8",style:{display:"flex"},...e,ref:l}));Sg.displayName="FaktaGruppe";Sg.__docgenInfo={description:"",methods:[],displayName:"FaktaGruppe"};var nu={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var gd;function $R(){return gd||(gd=1,function(e){(function(){var l={}.hasOwnProperty;function t(){for(var s="",m=0;m<arguments.length;m++){var d=arguments[m];d&&(s=i(s,a.call(this,d)))}return s}function a(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return t.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var m="";for(var d in s)l.call(s,d)&&s[d]&&(m=i(m,this&&this[d]||d));return m}function i(s,m){return m?s?s+" "+m:s+m:s}e.exports?(t.default=t,e.exports=t):window.classNames=t})()}(nu)),nu.exports}var JR=$R();const WR=xd(JR),zR="_boks_nm7fe_1",XR="_harBorderLeft_nm7fe_8",ZR="_harBorderTop_nm7fe_12",QR={boks:zR,harBorderLeft:XR,harBorderTop:ZR};WR.bind(QR);var ru={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var vd;function eN(){return vd||(vd=1,function(e){(function(){var l={}.hasOwnProperty;function t(){for(var s="",m=0;m<arguments.length;m++){var d=arguments[m];d&&(s=i(s,a(d)))}return s}function a(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return t.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var m="";for(var d in s)l.call(s,d)&&s[d]&&(m=i(m,d));return m}function i(s,m){return m?s?s+" "+m:s+m:s}e.exports?(t.default=t,e.exports=t):window.classNames=t})()}(ru)),ru.exports}eN();function nN(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ed={exports:{}},jt={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fd;function rN(){if(fd)return jt;fd=1;var e=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function t(a,i,s){var m=null;if(s!==void 0&&(m=""+s),i.key!==void 0&&(m=""+i.key),"key"in i){s={};for(var d in i)d!=="key"&&(s[d]=i[d])}else s=i;return i=s.ref,{$$typeof:e,type:a,key:m,ref:i!==void 0?i:null,props:s}}return jt.Fragment=l,jt.jsx=t,jt.jsxs=t,jt}var cd;function tN(){return cd||(cd=1,Ed.exports=rN()),Ed.exports}var dr=tN();const aN="_autocompleteSuggestion__substring_1s9ip_1",lN="_autocompleteSuggestion__inner_1s9ip_4",qt={autocompleteSuggestion__substring:aN,autocompleteSuggestion__inner:lN,"autocompleteSuggestion--active":"_autocompleteSuggestion--active_1s9ip_12"};class iN extends C.Component{constructor(l){super(l),this.state={value:l.value},this.onClick=this.onClick.bind(this),this.onMouseMove=this.onMouseMove.bind(this)}onClick(){const{onClick:l}=this.props,{value:t}=this.state;l(t)}onMouseMove(){const{setSuggestionIndex:l,index:t}=this.props;l(t)}render(){const{match:l,active:t,avoidBlur:a,id:i}=this.props,{value:s}=this.state.value,m=s.toLowerCase().startsWith(l.toLowerCase());return dr.jsx("li",{id:i,role:"option","aria-selected":t,onClick:this.onClick,onMouseMove:this.onMouseMove,onFocus:a,onMouseDown:a,onKeyDown:a,className:"autocompleteSuggestion typo-normal",children:m?dr.jsxs("span",{className:`${qt.autocompleteSuggestion__inner} ${t?qt["autocompleteSuggestion--active"]:""}`,children:[s.substring(0,l.length),dr.jsx("span",{className:qt.autocompleteSuggestion__substring,children:s.substring(l.length)})]}):dr.jsx("span",{className:`${qt.autocompleteSuggestion__inner} ${t?qt["autocompleteSuggestion--active"]:""}`,children:s})})}}const uN="_autocomplete_cj8jr_1",sN="_autocomplete__suggestions_cj8jr_27",tu={autocomplete:uN,autocomplete__suggestions:sN,"autocomplete__suggestions--hidden":"_autocomplete__suggestions--hidden_cj8jr_31"};class Tb extends C.Component{input;inputRef;constructor(l){super(l),this.state={activeSuggestionIndex:-1,hasFocus:!1,shouldShowSuggestions:!0,setAriaActiveDescendant:!1,shouldBlur:!0,blurDelay:null},this.inputRef=t=>{this.input=t},this.onChange=this.onChange.bind(this),this.onBlur=this.onBlur.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.onFocus=this.onFocus.bind(this),this.setValue=this.setValue.bind(this),this.setSuggestionIndex=this.setSuggestionIndex.bind(this),this.avoidBlur=this.avoidBlur.bind(this),this.clearBlurDelay=this.clearBlurDelay.bind(this),this.onSearchButtonClick=this.onSearchButtonClick.bind(this)}componentWillUnmount(){const{blurDelay:l}=this.state;l&&(clearTimeout(l),this.setState({blurDelay:null}))}onChange(l){const{onChange:t}=this.props;this.setState({activeSuggestionIndex:-1,shouldShowSuggestions:!0}),t(l)}onSearchButtonClick(l){const{onSearchButtonClick:t}=this.props;l.preventDefault(),t&&t()}onKeyDown(l){const{shouldShowSuggestions:t}=this.state;let{activeSuggestionIndex:a}=this.state;const{suggestions:i}=this.props,s=a>-1;switch(this.setState({setAriaActiveDescendant:l.keyCode===38||l.keyCode===40}),l.keyCode){case 9:s&&t&&this.setValue(i[a]);break;case 13:s&&t?(l.preventDefault(),this.setValue(i[a])):t&&i.length===1?this.setValue(i[0]):this.setState({shouldShowSuggestions:!1});break;case 27:t&&i.length>0&&(l.preventDefault(),this.setState({shouldShowSuggestions:!1}));break;case 38:t&&(l.preventDefault(),a=a-1===-2?-1:a-1,this.setState({activeSuggestionIndex:a}));break;case 40:t&&(l.preventDefault(),a=a+1===i.length?i.length-1:a+1,this.setState({activeSuggestionIndex:a}));break}}onFocus(){this.setState({hasFocus:!0,activeSuggestionIndex:-1})}onBlur(){const l=setTimeout(()=>{const{shouldBlur:a}=this.state;a&&this.setState({hasFocus:!1})},10);this.setState({blurDelay:l});const{onBlur:t}=this.props;t&&t()}setSuggestionIndex(l){this.setState({activeSuggestionIndex:l}),this.clearBlurDelay()}setValue(l){this.setState({shouldShowSuggestions:!1,activeSuggestionIndex:-1},()=>{this.inputRef.focus()}),this.clearBlurDelay();const{onSelect:t}=this.props;t(l)}avoidBlur(){this.setState({shouldBlur:!1})}clearBlurDelay(){const{blurDelay:l}=this.state;l&&(clearTimeout(l),this.setState({blurDelay:null})),this.setState({shouldBlur:!0})}render(){const{suggestions:l,id:t,ariaLabel:a,placeholder:i,value:s,name:m,shouldFocusOnMount:d,isLoading:v}=this.props,{activeSuggestionIndex:f,setAriaActiveDescendant:_,hasFocus:h,shouldShowSuggestions:k}=this.state,y=h&&k&&l.length>0,P=_&&f>-1?`${t}-item-${f}`:void 0;return dr.jsxs("div",{className:`${tu.autocomplete} autocomplete`,"aria-expanded":y,"aria-owns":`${t}-suggestions`,"aria-haspopup":"listbox",children:[dr.jsx(_u,{variant:"primary",id:t,name:m,"aria-label":a,"aria-autocomplete":"list","aria-controls":`${t}-suggestions`,"aria-activedescendant":P,placeholder:i,value:s,autoComplete:"off",onChange:this.onChange,onBlur:this.onBlur,onKeyDown:this.onKeyDown,onFocus:this.onFocus,ref:R=>{this.inputRef=R},className:"typo-normal",autoFocus:d,label:a,hideLabel:!0,children:dr.jsx(_u.Button,{loading:v,onClick:this.onSearchButtonClick})}),dr.jsx("ul",{id:`${t}-suggestions`,role:"listbox",className:y?tu.autocomplete__suggestions:tu["autocomplete__suggestions--hidden"],children:y&&l.map((R,T)=>dr.jsx(iN,{id:`${t}-item-${T}`,index:T,value:R,match:s,active:T===f,onClick:this.setValue,setSuggestionIndex:this.setSuggestionIndex,avoidBlur:this.avoidBlur},R.key))})]})}}var hu=function(e,l){return hu=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])},hu(e,l)};function qn(e,l){if(typeof l!="function"&&l!==null)throw new TypeError("Class extends value "+String(l)+" is not a constructor or null");hu(e,l);function t(){this.constructor=e}e.prototype=l===null?Object.create(l):(t.prototype=l.prototype,new t)}var le=function(){return le=Object.assign||function(e){for(var l,t=1,a=arguments.length;t<a;t++){l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e},le.apply(this,arguments)};function hl(e,l){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&l.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)l.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]]);return t}function Jn(e,l,t){if(arguments.length===2)for(var a=0,i=l.length,s;a<i;a++)(s||!(a in l))&&(s||(s=Array.prototype.slice.call(l,0,a)),s[a]=l[a]);return e.concat(s||Array.prototype.slice.call(l))}function Yn(e,l){var t=l&&l.cache?l.cache:fN,a=l&&l.serializer?l.serializer:vN,i=l&&l.strategy?l.strategy:dN;return i(e,{cache:t,serializer:a})}function oN(e){return e==null||typeof e=="number"||typeof e=="boolean"}function mN(e,l,t,a){var i=oN(a)?a:t(a),s=l.get(i);return typeof s>"u"&&(s=e.call(this,a),l.set(i,s)),s}function Ig(e,l,t){var a=Array.prototype.slice.call(arguments,3),i=t(a),s=l.get(i);return typeof s>"u"&&(s=e.apply(this,a),l.set(i,s)),s}function Lg(e,l,t,a,i){return t.bind(l,e,a,i)}function dN(e,l){var t=e.length===1?mN:Ig;return Lg(e,this,t,l.cache.create(),l.serializer)}function gN(e,l){return Lg(e,this,Ig,l.cache.create(),l.serializer)}var vN=function(){return JSON.stringify(arguments)},EN=function(){function e(){this.cache=Object.create(null)}return e.prototype.get=function(l){return this.cache[l]},e.prototype.set=function(l,t){this.cache[l]=t},e}(),fN={create:function(){return new EN}},$n={variadic:gN},ke;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(ke||(ke={}));var we;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(we||(we={}));var dt;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(dt||(dt={}));function _d(e){return e.type===we.literal}function cN(e){return e.type===we.argument}function Dg(e){return e.type===we.number}function Pg(e){return e.type===we.date}function Kg(e){return e.type===we.time}function Fg(e){return e.type===we.select}function wg(e){return e.type===we.plural}function _N(e){return e.type===we.pound}function Og(e){return e.type===we.tag}function Gg(e){return!!(e&&typeof e=="object"&&e.type===dt.number)}function Tu(e){return!!(e&&typeof e=="object"&&e.type===dt.dateTime)}var Bg=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,pN=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function hN(e){var l={};return e.replace(pN,function(t){var a=t.length;switch(t[0]){case"G":l.era=a===4?"long":a===5?"narrow":"short";break;case"y":l.year=a===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":l.month=["numeric","2-digit","short","long","narrow"][a-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":l.day=["numeric","2-digit"][a-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":l.weekday=a===4?"long":a===5?"narrow":"short";break;case"e":if(a<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");l.weekday=["short","long","narrow","short"][a-4];break;case"c":if(a<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");l.weekday=["short","long","narrow","short"][a-4];break;case"a":l.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":l.hourCycle="h12",l.hour=["numeric","2-digit"][a-1];break;case"H":l.hourCycle="h23",l.hour=["numeric","2-digit"][a-1];break;case"K":l.hourCycle="h11",l.hour=["numeric","2-digit"][a-1];break;case"k":l.hourCycle="h24",l.hour=["numeric","2-digit"][a-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":l.minute=["numeric","2-digit"][a-1];break;case"s":l.second=["numeric","2-digit"][a-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":l.timeZoneName=a<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),l}var TN=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function kN(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var l=e.split(TN).filter(function(k){return k.length>0}),t=[],a=0,i=l;a<i.length;a++){var s=i[a],m=s.split("/");if(m.length===0)throw new Error("Invalid number skeleton");for(var d=m[0],v=m.slice(1),f=0,_=v;f<_.length;f++){var h=_[f];if(h.length===0)throw new Error("Invalid number skeleton")}t.push({stem:d,options:v})}return t}function yN(e){return e.replace(/^(.*?)-/,"")}var pd=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,Vg=/^(@+)?(\+|#+)?[rs]?$/g,RN=/(\*)(0+)|(#+)(0+)|(0+)/g,Mg=/^(0+)$/;function hd(e){var l={};return e[e.length-1]==="r"?l.roundingPriority="morePrecision":e[e.length-1]==="s"&&(l.roundingPriority="lessPrecision"),e.replace(Vg,function(t,a,i){return typeof i!="string"?(l.minimumSignificantDigits=a.length,l.maximumSignificantDigits=a.length):i==="+"?l.minimumSignificantDigits=a.length:a[0]==="#"?l.maximumSignificantDigits=a.length:(l.minimumSignificantDigits=a.length,l.maximumSignificantDigits=a.length+(typeof i=="string"?i.length:0)),""}),l}function jg(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function NN(e){var l;if(e[0]==="E"&&e[1]==="E"?(l={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(l={notation:"scientific"},e=e.slice(1)),l){var t=e.slice(0,2);if(t==="+!"?(l.signDisplay="always",e=e.slice(2)):t==="+?"&&(l.signDisplay="exceptZero",e=e.slice(2)),!Mg.test(e))throw new Error("Malformed concise eng/scientific notation");l.minimumIntegerDigits=e.length}return l}function Td(e){var l={},t=jg(e);return t||l}function AN(e){for(var l={},t=0,a=e;t<a.length;t++){var i=a[t];switch(i.stem){case"percent":case"%":l.style="percent";continue;case"%x100":l.style="percent",l.scale=100;continue;case"currency":l.style="currency",l.currency=i.options[0];continue;case"group-off":case",_":l.useGrouping=!1;continue;case"precision-integer":case".":l.maximumFractionDigits=0;continue;case"measure-unit":case"unit":l.style="unit",l.unit=yN(i.options[0]);continue;case"compact-short":case"K":l.notation="compact",l.compactDisplay="short";continue;case"compact-long":case"KK":l.notation="compact",l.compactDisplay="long";continue;case"scientific":l=le(le(le({},l),{notation:"scientific"}),i.options.reduce(function(v,f){return le(le({},v),Td(f))},{}));continue;case"engineering":l=le(le(le({},l),{notation:"engineering"}),i.options.reduce(function(v,f){return le(le({},v),Td(f))},{}));continue;case"notation-simple":l.notation="standard";continue;case"unit-width-narrow":l.currencyDisplay="narrowSymbol",l.unitDisplay="narrow";continue;case"unit-width-short":l.currencyDisplay="code",l.unitDisplay="short";continue;case"unit-width-full-name":l.currencyDisplay="name",l.unitDisplay="long";continue;case"unit-width-iso-code":l.currencyDisplay="symbol";continue;case"scale":l.scale=parseFloat(i.options[0]);continue;case"rounding-mode-floor":l.roundingMode="floor";continue;case"rounding-mode-ceiling":l.roundingMode="ceil";continue;case"rounding-mode-down":l.roundingMode="trunc";continue;case"rounding-mode-up":l.roundingMode="expand";continue;case"rounding-mode-half-even":l.roundingMode="halfEven";continue;case"rounding-mode-half-down":l.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":l.roundingMode="halfExpand";continue;case"integer-width":if(i.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");i.options[0].replace(RN,function(v,f,_,h,k,y){if(f)l.minimumIntegerDigits=_.length;else{if(h&&k)throw new Error("We currently do not support maximum integer digits");if(y)throw new Error("We currently do not support exact integer digits")}return""});continue}if(Mg.test(i.stem)){l.minimumIntegerDigits=i.stem.length;continue}if(pd.test(i.stem)){if(i.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");i.stem.replace(pd,function(v,f,_,h,k,y){return _==="*"?l.minimumFractionDigits=f.length:h&&h[0]==="#"?l.maximumFractionDigits=h.length:k&&y?(l.minimumFractionDigits=k.length,l.maximumFractionDigits=k.length+y.length):(l.minimumFractionDigits=f.length,l.maximumFractionDigits=f.length),""});var s=i.options[0];s==="w"?l=le(le({},l),{trailingZeroDisplay:"stripIfInteger"}):s&&(l=le(le({},l),hd(s)));continue}if(Vg.test(i.stem)){l=le(le({},l),hd(i.stem));continue}var m=jg(i.stem);m&&(l=le(le({},l),m));var d=NN(i.stem);d&&(l=le(le({},l),d))}return l}var Xa={"001":["H","h"],419:["h","H","hB","hb"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["h","H","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["h","H","hB","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["h","H","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["h","H","hB","hb"],CU:["h","H","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["h","H","hB","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["h","H","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["h","H","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["h","H","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["h","H","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["h","H","hB","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["h","H","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["h","H","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["h","H","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"en-HK":["h","hb","H","hB"],"en-IL":["H","h","hb","hB"],"en-MY":["h","hb","H","hB"],"es-BR":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function bN(e,l){for(var t="",a=0;a<e.length;a++){var i=e.charAt(a);if(i==="j"){for(var s=0;a+1<e.length&&e.charAt(a+1)===i;)s++,a++;var m=1+(s&1),d=s<2?1:3+(s>>1),v="a",f=SN(l);for((f=="H"||f=="k")&&(d=0);d-- >0;)t+=v;for(;m-- >0;)t=f+t}else i==="J"?t+="H":t+=i}return t}function SN(e){var l=e.hourCycle;if(l===void 0&&e.hourCycles&&e.hourCycles.length&&(l=e.hourCycles[0]),l)switch(l){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var t=e.language,a;t!=="root"&&(a=e.maximize().region);var i=Xa[a||""]||Xa[t||""]||Xa["".concat(t,"-001")]||Xa["001"];return i[0]}var au,IN=new RegExp("^".concat(Bg.source,"*")),LN=new RegExp("".concat(Bg.source,"*$"));function ye(e,l){return{start:e,end:l}}var DN=!!String.prototype.startsWith&&"_a".startsWith("a",1),PN=!!String.fromCodePoint,KN=!!Object.fromEntries,FN=!!String.prototype.codePointAt,wN=!!String.prototype.trimStart,ON=!!String.prototype.trimEnd,GN=!!Number.isSafeInteger,BN=GN?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},ku=!0;try{var VN=Hg("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");ku=((au=VN.exec("a"))===null||au===void 0?void 0:au[0])==="a"}catch{ku=!1}var kd=DN?function(e,l,t){return e.startsWith(l,t)}:function(e,l,t){return e.slice(t,t+l.length)===l},yu=PN?String.fromCodePoint:function(){for(var e=[],l=0;l<arguments.length;l++)e[l]=arguments[l];for(var t="",a=e.length,i=0,s;a>i;){if(s=e[i++],s>1114111)throw RangeError(s+" is not a valid code point");t+=s<65536?String.fromCharCode(s):String.fromCharCode(((s-=65536)>>10)+55296,s%1024+56320)}return t},yd=KN?Object.fromEntries:function(e){for(var l={},t=0,a=e;t<a.length;t++){var i=a[t],s=i[0],m=i[1];l[s]=m}return l},qg=FN?function(e,l){return e.codePointAt(l)}:function(e,l){var t=e.length;if(!(l<0||l>=t)){var a=e.charCodeAt(l),i;return a<55296||a>56319||l+1===t||(i=e.charCodeAt(l+1))<56320||i>57343?a:(a-55296<<10)+(i-56320)+65536}},MN=wN?function(e){return e.trimStart()}:function(e){return e.replace(IN,"")},jN=ON?function(e){return e.trimEnd()}:function(e){return e.replace(LN,"")};function Hg(e,l){return new RegExp(e,l)}var Ru;if(ku){var Rd=Hg("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Ru=function(e,l){var t;Rd.lastIndex=l;var a=Rd.exec(e);return(t=a[1])!==null&&t!==void 0?t:""}}else Ru=function(e,l){for(var t=[];;){var a=qg(e,l);if(a===void 0||xg(a)||UN(a))break;t.push(a),l+=a>=65536?2:1}return yu.apply(void 0,t)};var qN=function(){function e(l,t){t===void 0&&(t={}),this.message=l,this.position={offset:0,line:1,column:1},this.ignoreTag=!!t.ignoreTag,this.locale=t.locale,this.requiresOtherClause=!!t.requiresOtherClause,this.shouldParseSkeletons=!!t.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(l,t,a){for(var i=[];!this.isEOF();){var s=this.char();if(s===123){var m=this.parseArgument(l,a);if(m.err)return m;i.push(m.val)}else{if(s===125&&l>0)break;if(s===35&&(t==="plural"||t==="selectordinal")){var d=this.clonePosition();this.bump(),i.push({type:we.pound,location:ye(d,this.clonePosition())})}else if(s===60&&!this.ignoreTag&&this.peek()===47){if(a)break;return this.error(ke.UNMATCHED_CLOSING_TAG,ye(this.clonePosition(),this.clonePosition()))}else if(s===60&&!this.ignoreTag&&Nu(this.peek()||0)){var m=this.parseTag(l,t);if(m.err)return m;i.push(m.val)}else{var m=this.parseLiteral(l,t);if(m.err)return m;i.push(m.val)}}}return{val:i,err:null}},e.prototype.parseTag=function(l,t){var a=this.clonePosition();this.bump();var i=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:we.literal,value:"<".concat(i,"/>"),location:ye(a,this.clonePosition())},err:null};if(this.bumpIf(">")){var s=this.parseMessage(l+1,t,!0);if(s.err)return s;var m=s.val,d=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!Nu(this.char()))return this.error(ke.INVALID_TAG,ye(d,this.clonePosition()));var v=this.clonePosition(),f=this.parseTagName();return i!==f?this.error(ke.UNMATCHED_CLOSING_TAG,ye(v,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:we.tag,value:i,children:m,location:ye(a,this.clonePosition())},err:null}:this.error(ke.INVALID_TAG,ye(d,this.clonePosition())))}else return this.error(ke.UNCLOSED_TAG,ye(a,this.clonePosition()))}else return this.error(ke.INVALID_TAG,ye(a,this.clonePosition()))},e.prototype.parseTagName=function(){var l=this.offset();for(this.bump();!this.isEOF()&&xN(this.char());)this.bump();return this.message.slice(l,this.offset())},e.prototype.parseLiteral=function(l,t){for(var a=this.clonePosition(),i="";;){var s=this.tryParseQuote(t);if(s){i+=s;continue}var m=this.tryParseUnquoted(l,t);if(m){i+=m;continue}var d=this.tryParseLeftAngleBracket();if(d){i+=d;continue}break}var v=ye(a,this.clonePosition());return{val:{type:we.literal,value:i,location:v},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!HN(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(l){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(l==="plural"||l==="selectordinal")break;return null;default:return null}this.bump();var t=[this.char()];for(this.bump();!this.isEOF();){var a=this.char();if(a===39)if(this.peek()===39)t.push(39),this.bump();else{this.bump();break}else t.push(a);this.bump()}return yu.apply(void 0,t)},e.prototype.tryParseUnquoted=function(l,t){if(this.isEOF())return null;var a=this.char();return a===60||a===123||a===35&&(t==="plural"||t==="selectordinal")||a===125&&l>0?null:(this.bump(),yu(a))},e.prototype.parseArgument=function(l,t){var a=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(ke.EXPECT_ARGUMENT_CLOSING_BRACE,ye(a,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(ke.EMPTY_ARGUMENT,ye(a,this.clonePosition()));var i=this.parseIdentifierIfPossible().value;if(!i)return this.error(ke.MALFORMED_ARGUMENT,ye(a,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(ke.EXPECT_ARGUMENT_CLOSING_BRACE,ye(a,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:we.argument,value:i,location:ye(a,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(ke.EXPECT_ARGUMENT_CLOSING_BRACE,ye(a,this.clonePosition())):this.parseArgumentOptions(l,t,i,a);default:return this.error(ke.MALFORMED_ARGUMENT,ye(a,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var l=this.clonePosition(),t=this.offset(),a=Ru(this.message,t),i=t+a.length;this.bumpTo(i);var s=this.clonePosition(),m=ye(l,s);return{value:a,location:m}},e.prototype.parseArgumentOptions=function(l,t,a,i){var s,m=this.clonePosition(),d=this.parseIdentifierIfPossible().value,v=this.clonePosition();switch(d){case"":return this.error(ke.EXPECT_ARGUMENT_TYPE,ye(m,v));case"number":case"date":case"time":{this.bumpSpace();var f=null;if(this.bumpIf(",")){this.bumpSpace();var _=this.clonePosition(),h=this.parseSimpleArgStyleIfPossible();if(h.err)return h;var k=jN(h.val);if(k.length===0)return this.error(ke.EXPECT_ARGUMENT_STYLE,ye(this.clonePosition(),this.clonePosition()));var y=ye(_,this.clonePosition());f={style:k,styleLocation:y}}var P=this.tryParseArgumentClose(i);if(P.err)return P;var R=ye(i,this.clonePosition());if(f&&kd(f?.style,"::",0)){var T=MN(f.style.slice(2));if(d==="number"){var h=this.parseNumberSkeletonFromString(T,f.styleLocation);return h.err?h:{val:{type:we.number,value:a,location:R,style:h.val},err:null}}else{if(T.length===0)return this.error(ke.EXPECT_DATE_TIME_SKELETON,R);var b=T;this.locale&&(b=bN(T,this.locale));var k={type:dt.dateTime,pattern:b,location:f.styleLocation,parsedOptions:this.shouldParseSkeletons?hN(b):{}},K=d==="date"?we.date:we.time;return{val:{type:K,value:a,location:R,style:k},err:null}}}return{val:{type:d==="number"?we.number:d==="date"?we.date:we.time,value:a,location:R,style:(s=f?.style)!==null&&s!==void 0?s:null},err:null}}case"plural":case"selectordinal":case"select":{var I=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(ke.EXPECT_SELECT_ARGUMENT_OPTIONS,ye(I,le({},I)));this.bumpSpace();var x=this.parseIdentifierIfPossible(),D=0;if(d!=="select"&&x.value==="offset"){if(!this.bumpIf(":"))return this.error(ke.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,ye(this.clonePosition(),this.clonePosition()));this.bumpSpace();var h=this.tryParseDecimalInteger(ke.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,ke.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(h.err)return h;this.bumpSpace(),x=this.parseIdentifierIfPossible(),D=h.val}var H=this.tryParsePluralOrSelectOptions(l,d,t,x);if(H.err)return H;var P=this.tryParseArgumentClose(i);if(P.err)return P;var w=ye(i,this.clonePosition());return d==="select"?{val:{type:we.select,value:a,options:yd(H.val),location:w},err:null}:{val:{type:we.plural,value:a,options:yd(H.val),offset:D,pluralType:d==="plural"?"cardinal":"ordinal",location:w},err:null}}default:return this.error(ke.INVALID_ARGUMENT_TYPE,ye(m,v))}},e.prototype.tryParseArgumentClose=function(l){return this.isEOF()||this.char()!==125?this.error(ke.EXPECT_ARGUMENT_CLOSING_BRACE,ye(l,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var l=0,t=this.clonePosition();!this.isEOF();){var a=this.char();switch(a){case 39:{this.bump();var i=this.clonePosition();if(!this.bumpUntil("'"))return this.error(ke.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,ye(i,this.clonePosition()));this.bump();break}case 123:{l+=1,this.bump();break}case 125:{if(l>0)l-=1;else return{val:this.message.slice(t.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(t.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(l,t){var a=[];try{a=kN(l)}catch{return this.error(ke.INVALID_NUMBER_SKELETON,t)}return{val:{type:dt.number,tokens:a,location:t,parsedOptions:this.shouldParseSkeletons?AN(a):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(l,t,a,i){for(var s,m=!1,d=[],v=new Set,f=i.value,_=i.location;;){if(f.length===0){var h=this.clonePosition();if(t!=="select"&&this.bumpIf("=")){var k=this.tryParseDecimalInteger(ke.EXPECT_PLURAL_ARGUMENT_SELECTOR,ke.INVALID_PLURAL_ARGUMENT_SELECTOR);if(k.err)return k;_=ye(h,this.clonePosition()),f=this.message.slice(h.offset,this.offset())}else break}if(v.has(f))return this.error(t==="select"?ke.DUPLICATE_SELECT_ARGUMENT_SELECTOR:ke.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,_);f==="other"&&(m=!0),this.bumpSpace();var y=this.clonePosition();if(!this.bumpIf("{"))return this.error(t==="select"?ke.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:ke.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,ye(this.clonePosition(),this.clonePosition()));var P=this.parseMessage(l+1,t,a);if(P.err)return P;var R=this.tryParseArgumentClose(y);if(R.err)return R;d.push([f,{value:P.val,location:ye(y,this.clonePosition())}]),v.add(f),this.bumpSpace(),s=this.parseIdentifierIfPossible(),f=s.value,_=s.location}return d.length===0?this.error(t==="select"?ke.EXPECT_SELECT_ARGUMENT_SELECTOR:ke.EXPECT_PLURAL_ARGUMENT_SELECTOR,ye(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!m?this.error(ke.MISSING_OTHER_CLAUSE,ye(this.clonePosition(),this.clonePosition())):{val:d,err:null}},e.prototype.tryParseDecimalInteger=function(l,t){var a=1,i=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(a=-1);for(var s=!1,m=0;!this.isEOF();){var d=this.char();if(d>=48&&d<=57)s=!0,m=m*10+(d-48),this.bump();else break}var v=ye(i,this.clonePosition());return s?(m*=a,BN(m)?{val:m,err:null}:this.error(t,v)):this.error(l,v)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var l=this.position.offset;if(l>=this.message.length)throw Error("out of bound");var t=qg(this.message,l);if(t===void 0)throw Error("Offset ".concat(l," is at invalid UTF-16 code unit boundary"));return t},e.prototype.error=function(l,t){return{val:null,err:{kind:l,message:this.message,location:t}}},e.prototype.bump=function(){if(!this.isEOF()){var l=this.char();l===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=l<65536?1:2)}},e.prototype.bumpIf=function(l){if(kd(this.message,l,this.offset())){for(var t=0;t<l.length;t++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(l){var t=this.offset(),a=this.message.indexOf(l,t);return a>=0?(this.bumpTo(a),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(l){if(this.offset()>l)throw Error("targetOffset ".concat(l," must be greater than or equal to the current offset ").concat(this.offset()));for(l=Math.min(l,this.message.length);;){var t=this.offset();if(t===l)break;if(t>l)throw Error("targetOffset ".concat(l," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&xg(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var l=this.char(),t=this.offset(),a=this.message.charCodeAt(t+(l>=65536?2:1));return a??null},e}();function Nu(e){return e>=97&&e<=122||e>=65&&e<=90}function HN(e){return Nu(e)||e===47}function xN(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function xg(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function UN(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function Au(e){e.forEach(function(l){if(delete l.location,Fg(l)||wg(l))for(var t in l.options)delete l.options[t].location,Au(l.options[t].value);else Dg(l)&&Gg(l.style)||(Pg(l)||Kg(l))&&Tu(l.style)?delete l.style.location:Og(l)&&Au(l.children)})}function CN(e,l){l===void 0&&(l={}),l=le({shouldParseSkeletons:!0,requiresOtherClause:!0},l);var t=new qN(e,l).parse();if(t.err){var a=SyntaxError(ke[t.err.kind]);throw a.location=t.err.location,a.originalMessage=t.err.message,a}return l?.captureLocation||Au(t.val),t.val}var Xn;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(Xn||(Xn={}));var Sr=function(e){qn(l,e);function l(t,a,i){var s=e.call(this,t)||this;return s.code=a,s.originalMessage=i,s}return l.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},l}(Error),Nd=function(e){qn(l,e);function l(t,a,i,s){return e.call(this,'Invalid values for "'.concat(t,'": "').concat(a,'". Options are "').concat(Object.keys(i).join('", "'),'"'),Xn.INVALID_VALUE,s)||this}return l}(Sr),YN=function(e){qn(l,e);function l(t,a,i){return e.call(this,'Value for "'.concat(t,'" must be of type ').concat(a),Xn.INVALID_VALUE,i)||this}return l}(Sr),$N=function(e){qn(l,e);function l(t,a){return e.call(this,'The intl string context variable "'.concat(t,'" was not provided to the string "').concat(a,'"'),Xn.MISSING_VALUE,a)||this}return l}(Sr),sn;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(sn||(sn={}));function JN(e){return e.length<2?e:e.reduce(function(l,t){var a=l[l.length-1];return!a||a.type!==sn.literal||t.type!==sn.literal?l.push(t):a.value+=t.value,l},[])}function Ug(e){return typeof e=="function"}function rl(e,l,t,a,i,s,m){if(e.length===1&&_d(e[0]))return[{type:sn.literal,value:e[0].value}];for(var d=[],v=0,f=e;v<f.length;v++){var _=f[v];if(_d(_)){d.push({type:sn.literal,value:_.value});continue}if(_N(_)){typeof s=="number"&&d.push({type:sn.literal,value:t.getNumberFormat(l).format(s)});continue}var h=_.value;if(!(i&&h in i))throw new $N(h,m);var k=i[h];if(cN(_)){(!k||typeof k=="string"||typeof k=="number")&&(k=typeof k=="string"||typeof k=="number"?String(k):""),d.push({type:typeof k=="string"?sn.literal:sn.object,value:k});continue}if(Pg(_)){var y=typeof _.style=="string"?a.date[_.style]:Tu(_.style)?_.style.parsedOptions:void 0;d.push({type:sn.literal,value:t.getDateTimeFormat(l,y).format(k)});continue}if(Kg(_)){var y=typeof _.style=="string"?a.time[_.style]:Tu(_.style)?_.style.parsedOptions:a.time.medium;d.push({type:sn.literal,value:t.getDateTimeFormat(l,y).format(k)});continue}if(Dg(_)){var y=typeof _.style=="string"?a.number[_.style]:Gg(_.style)?_.style.parsedOptions:void 0;y&&y.scale&&(k=k*(y.scale||1)),d.push({type:sn.literal,value:t.getNumberFormat(l,y).format(k)});continue}if(Og(_)){var P=_.children,R=_.value,T=i[R];if(!Ug(T))throw new YN(R,"function",m);var b=rl(P,l,t,a,i,s),K=T(b.map(function(D){return D.value}));Array.isArray(K)||(K=[K]),d.push.apply(d,K.map(function(D){return{type:typeof D=="string"?sn.literal:sn.object,value:D}}))}if(Fg(_)){var I=_.options[k]||_.options.other;if(!I)throw new Nd(_.value,k,Object.keys(_.options),m);d.push.apply(d,rl(I.value,l,t,a,i));continue}if(wg(_)){var I=_.options["=".concat(k)];if(!I){if(!Intl.PluralRules)throw new Sr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,Xn.MISSING_INTL_API,m);var x=t.getPluralRules(l,{type:_.pluralType}).select(k-(_.offset||0));I=_.options[x]||_.options.other}if(!I)throw new Nd(_.value,k,Object.keys(_.options),m);d.push.apply(d,rl(I.value,l,t,a,i,k-(_.offset||0)));continue}}return JN(d)}function WN(e,l){return l?le(le(le({},e||{}),l||{}),Object.keys(e).reduce(function(t,a){return t[a]=le(le({},e[a]),l[a]||{}),t},{})):e}function zN(e,l){return l?Object.keys(e).reduce(function(t,a){return t[a]=WN(e[a],l[a]),t},le({},e)):e}function lu(e){return{create:function(){return{get:function(l){return e[l]},set:function(l,t){e[l]=t}}}}}function XN(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:Yn(function(){for(var l,t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return new((l=Intl.NumberFormat).bind.apply(l,Jn([void 0],t,!1)))},{cache:lu(e.number),strategy:$n.variadic}),getDateTimeFormat:Yn(function(){for(var l,t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return new((l=Intl.DateTimeFormat).bind.apply(l,Jn([void 0],t,!1)))},{cache:lu(e.dateTime),strategy:$n.variadic}),getPluralRules:Yn(function(){for(var l,t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return new((l=Intl.PluralRules).bind.apply(l,Jn([void 0],t,!1)))},{cache:lu(e.pluralRules),strategy:$n.variadic})}}var Cg=function(){function e(l,t,a,i){t===void 0&&(t=e.defaultLocale);var s=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(v){var f=s.formatToParts(v);if(f.length===1)return f[0].value;var _=f.reduce(function(h,k){return!h.length||k.type!==sn.literal||typeof h[h.length-1]!="string"?h.push(k.value):h[h.length-1]+=k.value,h},[]);return _.length<=1?_[0]||"":_},this.formatToParts=function(v){return rl(s.ast,s.locales,s.formatters,s.formats,v,void 0,s.message)},this.resolvedOptions=function(){var v;return{locale:((v=s.resolvedLocale)===null||v===void 0?void 0:v.toString())||Intl.NumberFormat.supportedLocalesOf(s.locales)[0]}},this.getAst=function(){return s.ast},this.locales=t,this.resolvedLocale=e.resolveLocale(t),typeof l=="string"){if(this.message=l,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var m=i||{};m.formatters;var d=hl(m,["formatters"]);this.ast=e.__parse(l,le(le({},d),{locale:this.resolvedLocale}))}else this.ast=l;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=zN(e.formats,a),this.formatters=i&&i.formatters||XN(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(l){if(!(typeof Intl.Locale>"u")){var t=Intl.NumberFormat.supportedLocalesOf(l);return t.length>0?new Intl.Locale(t[0]):new Intl.Locale(typeof l=="string"?l:l[0])}},e.__parse=CN,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}(),Hr;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(Hr||(Hr={}));var ra=function(e){qn(l,e);function l(t,a,i){var s=this,m=i?i instanceof Error?i:new Error(String(i)):void 0;return s=e.call(this,"[@formatjs/intl Error ".concat(t,"] ").concat(a,`
`).concat(m?`
`.concat(m.message,`
`).concat(m.stack):""))||this,s.code=t,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(s,l),s}return l}(Error),ZN=function(e){qn(l,e);function l(t,a){return e.call(this,Hr.UNSUPPORTED_FORMATTER,t,a)||this}return l}(ra),QN=function(e){qn(l,e);function l(t,a){return e.call(this,Hr.INVALID_CONFIG,t,a)||this}return l}(ra),Ad=function(e){qn(l,e);function l(t,a){return e.call(this,Hr.MISSING_DATA,t,a)||this}return l}(ra),wn=function(e){qn(l,e);function l(t,a,i){var s=e.call(this,Hr.FORMAT_ERROR,"".concat(t,`
Locale: `).concat(a,`
`),i)||this;return s.locale=a,s}return l}(ra),iu=function(e){qn(l,e);function l(t,a,i,s){var m=e.call(this,"".concat(t,`
MessageID: `).concat(i?.id,`
Default Message: `).concat(i?.defaultMessage,`
Description: `).concat(i?.description,`
`),a,s)||this;return m.descriptor=i,m.locale=a,m}return l}(wn),eA=function(e){qn(l,e);function l(t,a){var i=e.call(this,Hr.MISSING_TRANSLATION,'Missing message: "'.concat(t.id,'" for locale "').concat(a,'", using ').concat(t.defaultMessage?"default message (".concat(typeof t.defaultMessage=="string"?t.defaultMessage:t.defaultMessage.map(function(s){var m;return(m=s.value)!==null&&m!==void 0?m:JSON.stringify(s)}).join(),")"):"id"," as fallback."))||this;return i.descriptor=t,i}return l}(ra);function nA(e,l,t){if(t===void 0&&(t=Error),!e)throw new t(l)}function ct(e,l,t){return t===void 0&&(t={}),l.reduce(function(a,i){return i in e?a[i]=e[i]:i in t&&(a[i]=t[i]),a},{})}var rA=function(e){},tA=function(e){},Yg={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:rA,onWarn:tA};function $g(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function Br(e){return{create:function(){return{get:function(l){return e[l]},set:function(l,t){e[l]=t}}}}}function aA(e){e===void 0&&(e=$g());var l=Intl.RelativeTimeFormat,t=Intl.ListFormat,a=Intl.DisplayNames,i=Yn(function(){for(var d,v=[],f=0;f<arguments.length;f++)v[f]=arguments[f];return new((d=Intl.DateTimeFormat).bind.apply(d,Jn([void 0],v,!1)))},{cache:Br(e.dateTime),strategy:$n.variadic}),s=Yn(function(){for(var d,v=[],f=0;f<arguments.length;f++)v[f]=arguments[f];return new((d=Intl.NumberFormat).bind.apply(d,Jn([void 0],v,!1)))},{cache:Br(e.number),strategy:$n.variadic}),m=Yn(function(){for(var d,v=[],f=0;f<arguments.length;f++)v[f]=arguments[f];return new((d=Intl.PluralRules).bind.apply(d,Jn([void 0],v,!1)))},{cache:Br(e.pluralRules),strategy:$n.variadic});return{getDateTimeFormat:i,getNumberFormat:s,getMessageFormat:Yn(function(d,v,f,_){return new Cg(d,v,f,le({formatters:{getNumberFormat:s,getDateTimeFormat:i,getPluralRules:m}},_||{}))},{cache:Br(e.message),strategy:$n.variadic}),getRelativeTimeFormat:Yn(function(){for(var d=[],v=0;v<arguments.length;v++)d[v]=arguments[v];return new(l.bind.apply(l,Jn([void 0],d,!1)))},{cache:Br(e.relativeTime),strategy:$n.variadic}),getPluralRules:m,getListFormat:Yn(function(){for(var d=[],v=0;v<arguments.length;v++)d[v]=arguments[v];return new(t.bind.apply(t,Jn([void 0],d,!1)))},{cache:Br(e.list),strategy:$n.variadic}),getDisplayNames:Yn(function(){for(var d=[],v=0;v<arguments.length;v++)d[v]=arguments[v];return new(a.bind.apply(a,Jn([void 0],d,!1)))},{cache:Br(e.displayNames),strategy:$n.variadic})}}function $u(e,l,t,a){var i=e&&e[l],s;if(i&&(s=i[t]),s)return s;a(new ZN("No ".concat(l," format named: ").concat(t)))}function Za(e,l){return Object.keys(e).reduce(function(t,a){return t[a]=le({timeZone:l},e[a]),t},{})}function bd(e,l){var t=Object.keys(le(le({},e),l));return t.reduce(function(a,i){return a[i]=le(le({},e[i]||{}),l[i]||{}),a},{})}function Sd(e,l){if(!l)return e;var t=Cg.formats;return le(le(le({},t),e),{date:bd(Za(t.date,l),Za(e.date||{},l)),time:bd(Za(t.time,l),Za(e.time||{},l))})}var bu=function(e,l,t,a,i){var s=e.locale,m=e.formats,d=e.messages,v=e.defaultLocale,f=e.defaultFormats,_=e.fallbackOnEmptyString,h=e.onError,k=e.timeZone,y=e.defaultRichTextElements;t===void 0&&(t={id:""});var P=t.id,R=t.defaultMessage;nA(!!P,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var T=String(P),b=d&&Object.prototype.hasOwnProperty.call(d,T)&&d[T];if(Array.isArray(b)&&b.length===1&&b[0].type===we.literal)return b[0].value;if(!a&&b&&typeof b=="string"&&!y)return b.replace(/'\{(.*?)\}'/gi,"{$1}");if(a=le(le({},y),a||{}),m=Sd(m,k),f=Sd(f,k),!b){if(_===!1&&b==="")return b;if((!R||s&&s.toLowerCase()!==v.toLowerCase())&&h(new eA(t,s)),R)try{var K=l.getMessageFormat(R,v,f,i);return K.format(a)}catch(I){return h(new iu('Error formatting default message for: "'.concat(T,'", rendering default message verbatim'),s,t,I)),typeof R=="string"?R:T}return T}try{var K=l.getMessageFormat(b,s,m,le({formatters:l},i||{}));return K.format(a)}catch(I){h(new iu('Error formatting message: "'.concat(T,'", using ').concat(R?"default message":"id"," as fallback."),s,t,I))}if(R)try{var K=l.getMessageFormat(R,v,f,i);return K.format(a)}catch(I){h(new iu('Error formatting the default message for: "'.concat(T,'", rendering message verbatim'),s,t,I))}return typeof b=="string"?b:typeof R=="string"?R:T},lA=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function ta(e,l,t,a){var i=e.locale,s=e.formats,m=e.onError,d=e.timeZone;a===void 0&&(a={});var v=a.format,f=le(le({},d&&{timeZone:d}),v&&$u(s,l,v,m)),_=ct(a,lA,f);return l==="time"&&!_.hour&&!_.minute&&!_.second&&!_.timeStyle&&!_.dateStyle&&(_=le(le({},_),{hour:"numeric",minute:"numeric"})),t(i,_)}function iA(e,l){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var i=t[0],s=t[1],m=s===void 0?{}:s,d=typeof i=="string"?new Date(i||0):i;try{return ta(e,"date",l,m).format(d)}catch(v){e.onError(new wn("Error formatting date.",e.locale,v))}return String(d)}function uA(e,l){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var i=t[0],s=t[1],m=s===void 0?{}:s,d=typeof i=="string"?new Date(i||0):i;try{return ta(e,"time",l,m).format(d)}catch(v){e.onError(new wn("Error formatting time.",e.locale,v))}return String(d)}function sA(e,l){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var i=t[0],s=t[1],m=t[2],d=m===void 0?{}:m,v=typeof i=="string"?new Date(i||0):i,f=typeof s=="string"?new Date(s||0):s;try{return ta(e,"dateTimeRange",l,d).formatRange(v,f)}catch(_){e.onError(new wn("Error formatting date time range.",e.locale,_))}return String(v)}function oA(e,l){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var i=t[0],s=t[1],m=s===void 0?{}:s,d=typeof i=="string"?new Date(i||0):i;try{return ta(e,"date",l,m).formatToParts(d)}catch(v){e.onError(new wn("Error formatting date.",e.locale,v))}return[]}function mA(e,l){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var i=t[0],s=t[1],m=s===void 0?{}:s,d=typeof i=="string"?new Date(i||0):i;try{return ta(e,"time",l,m).formatToParts(d)}catch(v){e.onError(new wn("Error formatting time.",e.locale,v))}return[]}var dA=["style","type","fallback","languageDisplay"];function gA(e,l,t,a){var i=e.locale,s=e.onError,m=Intl.DisplayNames;m||s(new Sr(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,Xn.MISSING_INTL_API));var d=ct(a,dA);try{return l(i,d).of(t)}catch(v){s(new wn("Error formatting display name.",i,v))}}var vA=["type","style"],Id=Date.now();function EA(e){return"".concat(Id,"_").concat(e,"_").concat(Id)}function fA(e,l,t,a){a===void 0&&(a={});var i=Jg(e,l,t,a).reduce(function(s,m){var d=m.value;return typeof d!="string"?s.push(d):typeof s[s.length-1]=="string"?s[s.length-1]+=d:s.push(d),s},[]);return i.length===1?i[0]:i.length===0?"":i}function Jg(e,l,t,a){var i=e.locale,s=e.onError;a===void 0&&(a={});var m=Intl.ListFormat;m||s(new Sr(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,Xn.MISSING_INTL_API));var d=ct(a,vA);try{var v={},f=t.map(function(_,h){if(typeof _=="object"){var k=EA(h);return v[k]=_,k}return String(_)});return l(i,d).formatToParts(f).map(function(_){return _.type==="literal"?_:le(le({},_),{value:v[_.value]||_.value})})}catch(_){s(new wn("Error formatting list.",i,_))}return t}var cA=["type"];function _A(e,l,t,a){var i=e.locale,s=e.onError;a===void 0&&(a={}),Intl.PluralRules||s(new Sr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,Xn.MISSING_INTL_API));var m=ct(a,cA);try{return l(i,m).select(t)}catch(d){s(new wn("Error formatting plural.",i,d))}return"other"}var pA=["numeric","style"];function hA(e,l,t){var a=e.locale,i=e.formats,s=e.onError;t===void 0&&(t={});var m=t.format,d=!!m&&$u(i,"relative",m,s)||{},v=ct(t,pA,d);return l(a,v)}function TA(e,l,t,a,i){i===void 0&&(i={}),a||(a="second");var s=Intl.RelativeTimeFormat;s||e.onError(new Sr(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,Xn.MISSING_INTL_API));try{return hA(e,l,i).format(t,a)}catch(m){e.onError(new wn("Error formatting relative time.",e.locale,m))}return String(t)}var kA=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function Wg(e,l,t){var a=e.locale,i=e.formats,s=e.onError;t===void 0&&(t={});var m=t.format,d=m&&$u(i,"number",m,s)||{},v=ct(t,kA,d);return l(a,v)}function yA(e,l,t,a){a===void 0&&(a={});try{return Wg(e,l,a).format(t)}catch(i){e.onError(new wn("Error formatting number.",e.locale,i))}return String(t)}function RA(e,l,t,a){a===void 0&&(a={});try{return Wg(e,l,a).formatToParts(t)}catch(i){e.onError(new wn("Error formatting number.",e.locale,i))}return[]}function NA(e){var l=e?e[Object.keys(e)[0]]:void 0;return typeof l=="string"}function AA(e){e.onWarn&&e.defaultRichTextElements&&NA(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`)}function bA(e,l){var t=aA(l),a=le(le({},Yg),e),i=a.locale,s=a.defaultLocale,m=a.onError;return i?!Intl.NumberFormat.supportedLocalesOf(i).length&&m?m(new Ad('Missing locale data for locale: "'.concat(i,'" in Intl.NumberFormat. Using default locale: "').concat(s,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(i).length&&m&&m(new Ad('Missing locale data for locale: "'.concat(i,'" in Intl.DateTimeFormat. Using default locale: "').concat(s,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):(m&&m(new QN('"locale" was not configured, using "'.concat(s,'" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))),a.locale=a.defaultLocale||"en"),AA(a),le(le({},a),{formatters:t,formatNumber:yA.bind(null,a,t.getNumberFormat),formatNumberToParts:RA.bind(null,a,t.getNumberFormat),formatRelativeTime:TA.bind(null,a,t.getRelativeTimeFormat),formatDate:iA.bind(null,a,t.getDateTimeFormat),formatDateToParts:oA.bind(null,a,t.getDateTimeFormat),formatTime:uA.bind(null,a,t.getDateTimeFormat),formatDateTimeRange:sA.bind(null,a,t.getDateTimeFormat),formatTimeToParts:mA.bind(null,a,t.getDateTimeFormat),formatPlural:_A.bind(null,a,t.getPluralRules),formatMessage:bu.bind(null,a,t),$t:bu.bind(null,a,t),formatList:fA.bind(null,a,t.getListFormat),formatListToParts:Jg.bind(null,a,t.getListFormat),formatDisplayName:gA.bind(null,a,t.getDisplayNames)})}function SA(e,l,t){if(t===void 0&&(t=Error),!e)throw new t(l)}function IA(e){SA(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var LA=le(le({},Yg),{textComponent:A.Fragment}),DA={key:42},PA=function(e){return A.isValidElement(e)?A.createElement(A.Fragment,DA,e):e},KA=function(e){var l;return(l=A.Children.map(e,PA))!==null&&l!==void 0?l:[]};function FA(e){return function(l){return e(A.Children.toArray(l))}}var Ld={exports:{}},be={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dd;function wA(){if(Dd)return be;Dd=1;var e=typeof Symbol=="function"&&Symbol.for,l=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,a=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,m=e?Symbol.for("react.provider"):60109,d=e?Symbol.for("react.context"):60110,v=e?Symbol.for("react.async_mode"):60111,f=e?Symbol.for("react.concurrent_mode"):60111,_=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,k=e?Symbol.for("react.suspense_list"):60120,y=e?Symbol.for("react.memo"):60115,P=e?Symbol.for("react.lazy"):60116,R=e?Symbol.for("react.block"):60121,T=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,K=e?Symbol.for("react.scope"):60119;function I(D){if(typeof D=="object"&&D!==null){var H=D.$$typeof;switch(H){case l:switch(D=D.type,D){case v:case f:case a:case s:case i:case h:return D;default:switch(D=D&&D.$$typeof,D){case d:case _:case P:case y:case m:return D;default:return H}}case t:return H}}}function x(D){return I(D)===f}return be.AsyncMode=v,be.ConcurrentMode=f,be.ContextConsumer=d,be.ContextProvider=m,be.Element=l,be.ForwardRef=_,be.Fragment=a,be.Lazy=P,be.Memo=y,be.Portal=t,be.Profiler=s,be.StrictMode=i,be.Suspense=h,be.isAsyncMode=function(D){return x(D)||I(D)===v},be.isConcurrentMode=x,be.isContextConsumer=function(D){return I(D)===d},be.isContextProvider=function(D){return I(D)===m},be.isElement=function(D){return typeof D=="object"&&D!==null&&D.$$typeof===l},be.isForwardRef=function(D){return I(D)===_},be.isFragment=function(D){return I(D)===a},be.isLazy=function(D){return I(D)===P},be.isMemo=function(D){return I(D)===y},be.isPortal=function(D){return I(D)===t},be.isProfiler=function(D){return I(D)===s},be.isStrictMode=function(D){return I(D)===i},be.isSuspense=function(D){return I(D)===h},be.isValidElementType=function(D){return typeof D=="string"||typeof D=="function"||D===a||D===f||D===s||D===i||D===h||D===k||typeof D=="object"&&D!==null&&(D.$$typeof===P||D.$$typeof===y||D.$$typeof===m||D.$$typeof===d||D.$$typeof===_||D.$$typeof===T||D.$$typeof===b||D.$$typeof===K||D.$$typeof===R)},be.typeOf=I,be}var Pd;function OA(){return Pd||(Pd=1,Ld.exports=wA()),Ld.exports}var uu,Kd;function GA(){if(Kd)return uu;Kd=1;var e=OA(),l={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},t={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};s[e.ForwardRef]=a,s[e.Memo]=i;function m(P){return e.isMemo(P)?i:s[P.$$typeof]||l}var d=Object.defineProperty,v=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,_=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,k=Object.prototype;function y(P,R,T){if(typeof R!="string"){if(k){var b=h(R);b&&b!==k&&y(P,b,T)}var K=v(R);f&&(K=K.concat(f(R)));for(var I=m(P),x=m(R),D=0;D<K.length;++D){var H=K[D];if(!t[H]&&!(T&&T[H])&&!(x&&x[H])&&!(I&&I[H])){var w=_(R,H);try{d(P,H,w)}catch{}}}}return P}return uu=y,uu}GA();var Ju=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=A.createContext(null)):A.createContext(null);Ju.Consumer;Ju.Provider;var BA=Ju;function zg(){var e=A.useContext(BA);return IA(e),e}var Su;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(Su||(Su={}));var Iu;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(Iu||(Iu={}));function Xg(e){var l=function(t){var a=zg(),i=t.value,s=t.children,m=hl(t,["value","children"]),d=typeof i=="string"?new Date(i||0):i,v=e==="formatDate"?a.formatDateToParts(d,m):a.formatTimeToParts(d,m);return s(v)};return l.displayName=Iu[e],l}function aa(e){var l=function(t){var a=zg(),i=t.value,s=t.children,m=hl(t,["value","children"]),d=a[e](i,m);if(typeof s=="function")return s(d);var v=a.textComponent||A.Fragment;return A.createElement(v,null,d)};return l.displayName=Su[e],l}function Zg(e){return e&&Object.keys(e).reduce(function(l,t){var a=e[t];return l[t]=Ug(a)?FA(a):a,l},{})}var Fd=function(e,l,t,a){for(var i=[],s=4;s<arguments.length;s++)i[s-4]=arguments[s];var m=Zg(a),d=bu.apply(void 0,Jn([e,l,t,m],i,!1));return Array.isArray(d)?KA(d):d},VA=function(e,l){var t=e.defaultRichTextElements,a=hl(e,["defaultRichTextElements"]),i=Zg(t),s=bA(le(le(le({},LA),a),{defaultRichTextElements:i}),l),m={locale:s.locale,timeZone:s.timeZone,fallbackOnEmptyString:s.fallbackOnEmptyString,formats:s.formats,defaultLocale:s.defaultLocale,defaultFormats:s.defaultFormats,messages:s.messages,onError:s.onError,defaultRichTextElements:i};return le(le({},s),{formatMessage:Fd.bind(null,m,s.formatters),$t:Fd.bind(null,m,s.formatters)})};aa("formatDate");aa("formatTime");aa("formatNumber");aa("formatList");aa("formatDisplayName");Xg("formatDate");Xg("formatTime");function Wu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Lu={exports:{}},MA=Lu.exports,wd;function jA(){return wd||(wd=1,function(e,l){(function(t,a){e.exports=a()})(MA,function(){var t,a,i=1e3,s=6e4,m=36e5,d=864e5,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f=31536e6,_=2628e6,h=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,k={years:f,months:_,days:d,hours:m,minutes:s,seconds:i,milliseconds:1,weeks:6048e5},y=function(H){return H instanceof x},P=function(H,w,O){return new x(H,O,w.$l)},R=function(H){return a.p(H)+"s"},T=function(H){return H<0},b=function(H){return T(H)?Math.ceil(H):Math.floor(H)},K=function(H){return Math.abs(H)},I=function(H,w){return H?T(H)?{negative:!0,format:""+K(H)+w}:{negative:!1,format:""+H+w}:{negative:!1,format:""}},x=function(){function H(O,W,Q){var X=this;if(this.$d={},this.$l=Q,O===void 0&&(this.$ms=0,this.parseFromMilliseconds()),W)return P(O*k[R(W)],this);if(typeof O=="number")return this.$ms=O,this.parseFromMilliseconds(),this;if(typeof O=="object")return Object.keys(O).forEach(function(G){X.$d[R(G)]=O[G]}),this.calMilliseconds(),this;if(typeof O=="string"){var Z=O.match(h);if(Z){var M=Z.slice(2).map(function(G){return G!=null?Number(G):0});return this.$d.years=M[0],this.$d.months=M[1],this.$d.weeks=M[2],this.$d.days=M[3],this.$d.hours=M[4],this.$d.minutes=M[5],this.$d.seconds=M[6],this.calMilliseconds(),this}}return this}var w=H.prototype;return w.calMilliseconds=function(){var O=this;this.$ms=Object.keys(this.$d).reduce(function(W,Q){return W+(O.$d[Q]||0)*k[Q]},0)},w.parseFromMilliseconds=function(){var O=this.$ms;this.$d.years=b(O/f),O%=f,this.$d.months=b(O/_),O%=_,this.$d.days=b(O/d),O%=d,this.$d.hours=b(O/m),O%=m,this.$d.minutes=b(O/s),O%=s,this.$d.seconds=b(O/i),O%=i,this.$d.milliseconds=O},w.toISOString=function(){var O=I(this.$d.years,"Y"),W=I(this.$d.months,"M"),Q=+this.$d.days||0;this.$d.weeks&&(Q+=7*this.$d.weeks);var X=I(Q,"D"),Z=I(this.$d.hours,"H"),M=I(this.$d.minutes,"M"),G=this.$d.seconds||0;this.$d.milliseconds&&(G+=this.$d.milliseconds/1e3,G=Math.round(1e3*G)/1e3);var z=I(G,"S"),re=O.negative||W.negative||X.negative||Z.negative||M.negative||z.negative,J=Z.format||M.format||z.format?"T":"",U=(re?"-":"")+"P"+O.format+W.format+X.format+J+Z.format+M.format+z.format;return U==="P"||U==="-P"?"P0D":U},w.toJSON=function(){return this.toISOString()},w.format=function(O){var W=O||"YYYY-MM-DDTHH:mm:ss",Q={Y:this.$d.years,YY:a.s(this.$d.years,2,"0"),YYYY:a.s(this.$d.years,4,"0"),M:this.$d.months,MM:a.s(this.$d.months,2,"0"),D:this.$d.days,DD:a.s(this.$d.days,2,"0"),H:this.$d.hours,HH:a.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:a.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:a.s(this.$d.seconds,2,"0"),SSS:a.s(this.$d.milliseconds,3,"0")};return W.replace(v,function(X,Z){return Z||String(Q[X])})},w.as=function(O){return this.$ms/k[R(O)]},w.get=function(O){var W=this.$ms,Q=R(O);return Q==="milliseconds"?W%=1e3:W=Q==="weeks"?b(W/k[Q]):this.$d[Q],W||0},w.add=function(O,W,Q){var X;return X=W?O*k[R(W)]:y(O)?O.$ms:P(O,this).$ms,P(this.$ms+X*(Q?-1:1),this)},w.subtract=function(O,W){return this.add(O,W,!0)},w.locale=function(O){var W=this.clone();return W.$l=O,W},w.clone=function(){return P(this.$ms,this)},w.humanize=function(O){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!O)},w.valueOf=function(){return this.asMilliseconds()},w.milliseconds=function(){return this.get("milliseconds")},w.asMilliseconds=function(){return this.as("milliseconds")},w.seconds=function(){return this.get("seconds")},w.asSeconds=function(){return this.as("seconds")},w.minutes=function(){return this.get("minutes")},w.asMinutes=function(){return this.as("minutes")},w.hours=function(){return this.get("hours")},w.asHours=function(){return this.as("hours")},w.days=function(){return this.get("days")},w.asDays=function(){return this.as("days")},w.weeks=function(){return this.get("weeks")},w.asWeeks=function(){return this.as("weeks")},w.months=function(){return this.get("months")},w.asMonths=function(){return this.as("months")},w.years=function(){return this.get("years")},w.asYears=function(){return this.as("years")},H}(),D=function(H,w,O){return H.add(w.years()*O,"y").add(w.months()*O,"M").add(w.days()*O,"d").add(w.hours()*O,"h").add(w.minutes()*O,"m").add(w.seconds()*O,"s").add(w.milliseconds()*O,"ms")};return function(H,w,O){t=O,a=O().$utils(),O.duration=function(X,Z){var M=O.locale();return P(X,{$l:M},Z)},O.isDuration=y;var W=w.prototype.add,Q=w.prototype.subtract;w.prototype.add=function(X,Z){return y(X)?D(this,X,1):W.bind(this)(X,Z)},w.prototype.subtract=function(X,Z){return y(X)?D(this,X,-1):Q.bind(this)(X,Z)}}})}(Lu)),Lu.exports}var qA=jA();const HA=Wu(qA);var Du={exports:{}},xA=Du.exports,Od;function UA(){return Od||(Od=1,function(e,l){(function(t,a){e.exports=a()})(xA,function(){var t="day";return function(a,i,s){var m=function(f){return f.add(4-f.isoWeekday(),t)},d=i.prototype;d.isoWeekYear=function(){return m(this).year()},d.isoWeek=function(f){if(!this.$utils().u(f))return this.add(7*(f-this.isoWeek()),t);var _,h,k,y,P=m(this),R=(_=this.isoWeekYear(),h=this.$u,k=(h?s.utc:s)().year(_).startOf("year"),y=4-k.isoWeekday(),k.isoWeekday()>4&&(y+=7),k.add(y,t));return P.diff(R,"week")+1},d.isoWeekday=function(f){return this.$utils().u(f)?this.day()||7:this.day(this.day()%7?f:f-7)};var v=d.startOf;d.startOf=function(f,_){var h=this.$utils(),k=!!h.u(_)||_;return h.p(f)==="isoweek"?k?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):v.bind(this)(f,_)}}})}(Du)),Du.exports}var CA=UA();const YA=Wu(CA);var Pu={exports:{}},$A=Pu.exports,Gd;function JA(){return Gd||(Gd=1,function(e,l){(function(t,a){e.exports=a()})($A,function(){var t="minute",a=/[+-]\d\d(?::?\d\d)?/g,i=/([+-]|\d\d)/g;return function(s,m,d){var v=m.prototype;d.utc=function(R){var T={date:R,utc:!0,args:arguments};return new m(T)},v.utc=function(R){var T=d(this.toDate(),{locale:this.$L,utc:!0});return R?T.add(this.utcOffset(),t):T},v.local=function(){return d(this.toDate(),{locale:this.$L,utc:!1})};var f=v.parse;v.parse=function(R){R.utc&&(this.$u=!0),this.$utils().u(R.$offset)||(this.$offset=R.$offset),f.call(this,R)};var _=v.init;v.init=function(){if(this.$u){var R=this.$d;this.$y=R.getUTCFullYear(),this.$M=R.getUTCMonth(),this.$D=R.getUTCDate(),this.$W=R.getUTCDay(),this.$H=R.getUTCHours(),this.$m=R.getUTCMinutes(),this.$s=R.getUTCSeconds(),this.$ms=R.getUTCMilliseconds()}else _.call(this)};var h=v.utcOffset;v.utcOffset=function(R,T){var b=this.$utils().u;if(b(R))return this.$u?0:b(this.$offset)?h.call(this):this.$offset;if(typeof R=="string"&&(R=function(D){D===void 0&&(D="");var H=D.match(a);if(!H)return null;var w=(""+H[0]).match(i)||["-",0,0],O=w[0],W=60*+w[1]+ +w[2];return W===0?0:O==="+"?W:-W}(R),R===null))return this;var K=Math.abs(R)<=16?60*R:R,I=this;if(T)return I.$offset=K,I.$u=R===0,I;if(R!==0){var x=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(I=this.local().add(K+x,t)).$offset=K,I.$x.$localOffset=x}else I=this.utc();return I};var k=v.format;v.format=function(R){var T=R||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return k.call(this,T)},v.valueOf=function(){var R=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*R},v.isUTC=function(){return!!this.$u},v.toISOString=function(){return this.toDate().toISOString()},v.toString=function(){return this.toDate().toUTCString()};var y=v.toDate;v.toDate=function(R){return R==="s"&&this.$offset?d(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():y.call(this)};var P=v.diff;v.diff=function(R,T,b){if(R&&this.$u===R.$u)return P.call(this,R,T,b);var K=this.local(),I=d(R).local();return P.call(K,I,T,b)}}})}(Pu)),Pu.exports}var WA=JA();const zA=Wu(WA),XA=$g(),Tl=e=>VA({locale:"nb-NO",messages:e},XA),kl={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","DateTimeLabel.Kl":" kl. ","PeriodLabel.DateToday":"d.d.","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"};Tl(kl);var Ku={exports:{}},ZA=Ku.exports,Bd;function QA(){return Bd||(Bd=1,function(e,l){(function(t,a){e.exports=a(vt)})(ZA,function(t){function a(m){return m&&typeof m=="object"&&"default"in m?m:{default:m}}var i=a(t),s={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(m){return m+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return i.default.locale(s,null,!0),s})}(Ku)),Ku.exports}QA();vt.extend(zA);vt.extend(YA);vt.extend(HA);Tl(kl);Tl(kl);var Vd={exports:{}},Ht={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Md;function eb(){if(Md)return Ht;Md=1;var e=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function t(a,i,s){var m=null;if(s!==void 0&&(m=""+s),i.key!==void 0&&(m=""+i.key),"key"in i){s={};for(var d in i)d!=="key"&&(s[d]=i[d])}else s=i;return i=s.ref,{$$typeof:e,type:a,key:m,ref:i!==void 0?i:null,props:s}}return Ht.Fragment=l,Ht.jsx=t,Ht.jsxs=t,Ht}var jd;function nb(){return jd||(jd=1,Vd.exports=eb()),Vd.exports}nb();Tl(kl);A.createContext({});var Fu={exports:{}},rb=Fu.exports,qd;function tb(){return qd||(qd=1,function(e,l){(function(t,a){e.exports=a()})(rb,function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},a=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,i=/\d/,s=/\d\d/,m=/\d\d?/,d=/\d*[^-_:/,()\s\d]+/,v={},f=function(T){return(T=+T)+(T>68?1900:2e3)},_=function(T){return function(b){this[T]=+b}},h=[/[+-]\d\d:?(\d\d)?|Z/,function(T){(this.zone||(this.zone={})).offset=function(b){if(!b||b==="Z")return 0;var K=b.match(/([+-]|\d\d)/g),I=60*K[1]+(+K[2]||0);return I===0?0:K[0]==="+"?-I:I}(T)}],k=function(T){var b=v[T];return b&&(b.indexOf?b:b.s.concat(b.f))},y=function(T,b){var K,I=v.meridiem;if(I){for(var x=1;x<=24;x+=1)if(T.indexOf(I(x,0,b))>-1){K=x>12;break}}else K=T===(b?"pm":"PM");return K},P={A:[d,function(T){this.afternoon=y(T,!1)}],a:[d,function(T){this.afternoon=y(T,!0)}],Q:[i,function(T){this.month=3*(T-1)+1}],S:[i,function(T){this.milliseconds=100*+T}],SS:[s,function(T){this.milliseconds=10*+T}],SSS:[/\d{3}/,function(T){this.milliseconds=+T}],s:[m,_("seconds")],ss:[m,_("seconds")],m:[m,_("minutes")],mm:[m,_("minutes")],H:[m,_("hours")],h:[m,_("hours")],HH:[m,_("hours")],hh:[m,_("hours")],D:[m,_("day")],DD:[s,_("day")],Do:[d,function(T){var b=v.ordinal,K=T.match(/\d+/);if(this.day=K[0],b)for(var I=1;I<=31;I+=1)b(I).replace(/\[|\]/g,"")===T&&(this.day=I)}],w:[m,_("week")],ww:[s,_("week")],M:[m,_("month")],MM:[s,_("month")],MMM:[d,function(T){var b=k("months"),K=(k("monthsShort")||b.map(function(I){return I.slice(0,3)})).indexOf(T)+1;if(K<1)throw new Error;this.month=K%12||K}],MMMM:[d,function(T){var b=k("months").indexOf(T)+1;if(b<1)throw new Error;this.month=b%12||b}],Y:[/[+-]?\d+/,_("year")],YY:[s,function(T){this.year=f(T)}],YYYY:[/\d{4}/,_("year")],Z:h,ZZ:h};function R(T){var b,K;b=T,K=v&&v.formats;for(var I=(T=b.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(Q,X,Z){var M=Z&&Z.toUpperCase();return X||K[Z]||t[Z]||K[M].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(G,z,re){return z||re.slice(1)})})).match(a),x=I.length,D=0;D<x;D+=1){var H=I[D],w=P[H],O=w&&w[0],W=w&&w[1];I[D]=W?{regex:O,parser:W}:H.replace(/^\[|\]$/g,"")}return function(Q){for(var X={},Z=0,M=0;Z<x;Z+=1){var G=I[Z];if(typeof G=="string")M+=G.length;else{var z=G.regex,re=G.parser,J=Q.slice(M),U=z.exec(J)[0];re.call(X,U),Q=Q.replace(U,"")}}return function($){var ae=$.afternoon;if(ae!==void 0){var ne=$.hours;ae?ne<12&&($.hours+=12):ne===12&&($.hours=0),delete $.afternoon}}(X),X}}return function(T,b,K){K.p.customParseFormat=!0,T&&T.parseTwoDigitYear&&(f=T.parseTwoDigitYear);var I=b.prototype,x=I.parse;I.parse=function(D){var H=D.date,w=D.utc,O=D.args;this.$u=w;var W=O[1];if(typeof W=="string"){var Q=O[2]===!0,X=O[3]===!0,Z=Q||X,M=O[2];X&&(M=O[2]),v=this.$locale(),!Q&&M&&(v=K.Ls[M]),this.$d=function(J,U,$,ae){try{if(["x","X"].indexOf(U)>-1)return new Date((U==="X"?1e3:1)*J);var ne=R(U)(J),ue=ne.year,ce=ne.month,En=ne.day,je=ne.hours,Oe=ne.minutes,qe=ne.seconds,pe=ne.milliseconds,Ne=ne.zone,Xe=ne.week,He=new Date,Ue=En||(ue||ce?1:He.getDate()),Rn=ue||He.getFullYear(),Be=0;ue&&!ce||(Be=ce>0?ce-1:He.getMonth());var Ze,Qn=je||0,Qe=Oe||0,Hn=qe||0,er=pe||0;return Ne?new Date(Date.UTC(Rn,Be,Ue,Qn,Qe,Hn,er+60*Ne.offset*1e3)):$?new Date(Date.UTC(Rn,Be,Ue,Qn,Qe,Hn,er)):(Ze=new Date(Rn,Be,Ue,Qn,Qe,Hn,er),Xe&&(Ze=ae(Ze).week(Xe).toDate()),Ze)}catch{return new Date("")}}(H,W,w,K),this.init(),M&&M!==!0&&(this.$L=this.locale(M).$L),Z&&H!=this.format(W)&&(this.$d=new Date("")),v={}}else if(W instanceof Array)for(var G=W.length,z=1;z<=G;z+=1){O[1]=W[z-1];var re=K.apply(this,O);if(re.isValid()){this.$d=re.$d,this.$L=re.$L,this.init();break}z===G&&(this.$d=new Date(""))}else x.call(this,D)}}})}(Fu)),Fu.exports}var ab=tb();const lb=nN(ab);vt.extend(lb);jn(na);const ib=e=>{const l=e.aktiveNaturalytelser.reduce((a,i)=>{const s=i.type;return s in a?{...a,[s]:[...a[s],i]}:{...a,[s]:[i]}},{}),t={};return Object.entries(l).forEach(([a,i])=>{const s=i.sort((m,d)=>UR({fom:m.periode.fomDato,tom:m.periode.tomDato},{fom:d.periode.fomDato,tom:d.periode.tomDato})).reverse();t[a]=s.flatMap((m,d,v)=>{const f=v[d+1],_=m.periode.tomDato,h=f?.periode.fomDato;return _===Yt?[]:[{...m,periode:{fomDato:Im(_,1),tomDato:h?Im(h,-1):Yt}}]})}),t},Qg=({inntektsmelding:e,alleKodeverk:l})=>{const t=Er(),a=ib(e);return V.jsx(zn,{tittel:t.formatMessage({id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.heading"}),children:e.aktiveNaturalytelser.length===0?V.jsx("span",{children:V.jsx(Ie,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.ingen"})}):V.jsx(pl,{gap:"space-4",children:Object.entries(a).map(([i,s])=>V.jsxs("div",{children:[V.jsx("span",{children:l.NaturalYtelseType.find(m=>m.kode===i)?.navn}),V.jsx("ul",{children:s.map(m=>V.jsxs(C.Fragment,{children:[V.jsxs("li",{children:[V.jsx(Ie,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.fom"})," ",V.jsx(Jt,{dateString:m.periode.fomDato})]}),m.periode.tomDato!==Yt&&V.jsxs("li",{children:[V.jsx(Ie,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.tom"})," ",V.jsx(Jt,{dateString:m.periode.tomDato})]}),V.jsxs("li",{children:[V.jsx(Ie,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.verdi"}),":"," ",V.jsx(ut,{beløp:m.beloepPerMnd.verdi})]})]},m.indexKey))})]},i))})})};Qg.__docgenInfo={description:"",methods:[],displayName:"BortfalteNaturalYtelser",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>]: KodeverkMedNavn<
    K extends KodeverkType ? K : unknown
  >[];
}`,signature:{properties:[{key:{name:"Exclude",elements:[{name:"signature",type:"object",raw:`{
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatusEnum;
  BehandlingType: BehandlingTypeEnum;
  BehandlingÅrsakType: BehandlingArsakTypeEnum;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatusEnum;
  FagsakYtelseType: FagsakYtelseTypeEnum;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktorEnum;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsenEnum;
  Landkoder: Landkode;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdArsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverforingArsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StonadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkarType;
  VirksomhetType: NaringsvirksomhetType;
  VurderÅrsak: VurderÅrsak;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatusEnum",required:!0}},{key:"BehandlingType",value:{name:"BehandlingTypeEnum",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakTypeEnum",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatusEnum",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseTypeEnum",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktorEnum",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsenEnum",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:`| 'BARN'
| 'FBARN'
| 'VOKSEN'
| 'ADVOKAT'
| 'ANNEN_F'`,elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:`KodeverkMedNavn<
  K extends KodeverkType ? K : unknown
>[]`}}]}},{name:"signature",type:"object",raw:`{
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"union",raw:"VilkarType | '-'",elements:[{name:"VilkarType"},{name:"literal",value:"'-'"}]},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType | '-', KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
  lovHjemmel: string;
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}}]}}]}],raw:"GraderingAvslagÅrsakKodeverk[]",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'PeriodeResultatÅrsak'> & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`},{name:"signature",type:"object",raw:`{
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const ev=({kildeSystem:e})=>{const l=Er();return V.jsx(zn,{tittel:l.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.heading"}),children:ub(e,l)})},ub=(e,l)=>{switch(e.toUpperCase()){case"NAV_NO":return l.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.nav"});case"ALTINN":return l.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.altinn"});default:return l.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.lps"})}};ev.__docgenInfo={description:"",methods:[],displayName:"KildeSystem",props:{kildeSystem:{required:!0,tsType:{name:"string"},description:""}}};const nv=({inntektsmelding:e})=>{const l=Er();return V.jsxs(zn,{tittel:l.formatMessage({id:"InntektsmeldingFaktaPanel.kontaktperson.heading"}),children:[V.jsxs("span",{children:[V.jsx(Ie,{id:"InntektsmeldingFaktaPanel.kontaktperson.navn"}),": ",e.kontaktpersonNavn]}),V.jsxs("span",{children:[V.jsx(Ie,{id:"InntektsmeldingFaktaPanel.kontaktperson.telefon"}),": ",e.kontaktpersonNummer]})]})};nv.__docgenInfo={description:"",methods:[],displayName:"KontaktPerson",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`},description:""}}};const rv=({inntektsmelding:e,fagsak:l,arbeidsgiverOpplysninger:t})=>{const a=`IM ${t.navn} - ${$d(e.motattDato)}`;return V.jsx(xu,{type:"button",onClick:()=>{z0(l.saksnummer,e.journalpostId,e.dokumentId,a)},variant:"secondary",size:"small",icon:V.jsx(mT,{}),children:V.jsx(Ie,{id:"InntektsmeldingFaktaPanel.modal.trigger"})})};rv.__docgenInfo={description:"",methods:[],displayName:"LastNedPdfKnapp",props:{fagsak:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  saksnummer: string;
  fagsakYtelseType: foreldrepenger_behandlingslager_fagsak_FagsakYtelseType;
  relasjonsRolleType: foreldrepenger_behandlingslager_behandling_personopplysning_RelasjonsRolleType;
  status: foreldrepenger_behandlingslager_fagsak_FagsakStatus;
  aktørId: string;
  sakSkalTilInfotrygd: boolean;
  dekningsgrad: number;
  bruker: tjenester_fagsak_dto_PersonDto;
  brukerManglerAdresse: boolean;
  annenPart: tjenester_fagsak_dto_PersonDto | null;
  annenpartBehandling: tjenester_behandling_dto_behandling_AnnenPartBehandlingDto | null;
  familiehendelse: tjenester_fagsak_dto_SakHendelseDto | null;
  fagsakMarkeringer: Array<tjenester_fagsak_dto_FagsakMarkeringDto>;
  behandlingTypeKanOpprettes: Array<tjenester_behandling_dto_BehandlingOpprettingDto>;
  behandlinger: Array<tjenester_behandling_dto_behandling_FagsakBehandlingDto>;
  historikkinnslag: Array<tjenester_behandling_historikk_HistorikkinnslagDto>;
  notater: Array<tjenester_fagsak_dto_FagsakNotatDto>;
  kontrollResultat: tjenester_behandling_kontroll_dto_KontrollresultatDto;
  harVergeIÅpenBehandling: boolean;
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"union",raw:"'ES' | 'FP' | 'SVP' | '-'",elements:[{name:"literal",value:"'ES'"},{name:"literal",value:"'FP'"},{name:"literal",value:"'SVP'"},{name:"literal",value:"'-'"}],required:!0}},{key:"relasjonsRolleType",value:{name:"union",raw:`| 'EKTE'
| 'BARN'
| 'FARA'
| 'MORA'
| 'REPA'
| 'MMOR'
| 'ANPA'
| '-'`,elements:[{name:"literal",value:"'EKTE'"},{name:"literal",value:"'BARN'"},{name:"literal",value:"'FARA'"},{name:"literal",value:"'MORA'"},{name:"literal",value:"'REPA'"},{name:"literal",value:"'MMOR'"},{name:"literal",value:"'ANPA'"},{name:"literal",value:"'-'"}],required:!0}},{key:"status",value:{name:"union",raw:"'OPPR' | 'UBEH' | 'LOP' | 'AVSLU'",elements:[{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UBEH'"},{name:"literal",value:"'LOP'"},{name:"literal",value:"'AVSLU'"}],required:!0}},{key:"aktørId",value:{name:"string",required:!0}},{key:"sakSkalTilInfotrygd",value:{name:"boolean",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}},{key:"bruker",value:{name:"signature",type:"object",raw:`{
  aktørId: string | null;
  navn: string;
  fødselsnummer: string;
  kjønn: foreldrepenger_behandlingslager_aktør_NavBrukerKjønn;
  diskresjonskode: string | null;
  fødselsdato: string;
  dødsdato: string | null;
  dodsdato?: string;
  språkkode: foreldrepenger_behandlingslager_geografisk_Språkkode;
}`,signature:{properties:[{key:"aktørId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"diskresjonskode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"dodsdato",value:{name:"string",required:!1}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!0}},{key:"brukerManglerAdresse",value:{name:"boolean",required:!0}},{key:"annenPart",value:{name:"union",raw:"tjenester_fagsak_dto_PersonDto | null",elements:[{name:"signature",type:"object",raw:`{
  aktørId: string | null;
  navn: string;
  fødselsnummer: string;
  kjønn: foreldrepenger_behandlingslager_aktør_NavBrukerKjønn;
  diskresjonskode: string | null;
  fødselsdato: string;
  dødsdato: string | null;
  dodsdato?: string;
  språkkode: foreldrepenger_behandlingslager_geografisk_Språkkode;
}`,signature:{properties:[{key:"aktørId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"diskresjonskode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"dodsdato",value:{name:"string",required:!1}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!0},{name:"null"}],required:!0}},{key:"annenpartBehandling",value:{name:"union",raw:"tjenester_behandling_dto_behandling_AnnenPartBehandlingDto | null",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  relasjonsRolleType: foreldrepenger_behandlingslager_behandling_personopplysning_RelasjonsRolleType;
  behandlingUuid: string;
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"relasjonsRolleType",value:{name:"union",raw:`| 'EKTE'
| 'BARN'
| 'FARA'
| 'MORA'
| 'REPA'
| 'MMOR'
| 'ANPA'
| '-'`,elements:[{name:"literal",value:"'EKTE'"},{name:"literal",value:"'BARN'"},{name:"literal",value:"'FARA'"},{name:"literal",value:"'MORA'"},{name:"literal",value:"'REPA'"},{name:"literal",value:"'MMOR'"},{name:"literal",value:"'ANPA'"},{name:"literal",value:"'-'"}],required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}}]}},{name:"null"}],required:!0}},{key:"familiehendelse",value:{name:"union",raw:"tjenester_fagsak_dto_SakHendelseDto | null",elements:[{name:"signature",type:"object",raw:`{
  hendelseType: foreldrepenger_behandlingslager_behandling_familiehendelse_FamilieHendelseType;
  hendelseDato: string | null;
  antallBarn: number;
  dødfødsel: boolean;
}`,signature:{properties:[{key:"hendelseType",value:{name:"union",raw:`| 'ADPSJN'
| 'OMSRGO'
| 'FODSL'
| 'TERM'
| '-'`,elements:[{name:"literal",value:"'ADPSJN'"},{name:"literal",value:"'OMSRGO'"},{name:"literal",value:"'FODSL'"},{name:"literal",value:"'TERM'"},{name:"literal",value:"'-'"}],required:!0}},{key:"hendelseDato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}}]}},{name:"null"}],required:!0}},{key:"fagsakMarkeringer",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fagsakMarkering: foreldrepenger_behandlingslager_fagsak_egenskaper_FagsakMarkering;
  kortNavn: string;
}`,signature:{properties:[{key:"fagsakMarkering",value:{name:"union",raw:`| 'EØS_BOSATT_NORGE'
| 'BOSATT_UTLAND'
| 'SAMMENSATT_KONTROLL'
| 'DØD_DØDFØDSEL'
| 'PRAKSIS_UTSETTELSE'
| 'BARE_FAR_RETT'
| 'SELVSTENDIG_NÆRING'
| 'HASTER'`,elements:[{name:"literal",value:"'EØS_BOSATT_NORGE'"},{name:"literal",value:"'BOSATT_UTLAND'"},{name:"literal",value:"'SAMMENSATT_KONTROLL'"},{name:"literal",value:"'DØD_DØDFØDSEL'"},{name:"literal",value:"'PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'BARE_FAR_RETT'"},{name:"literal",value:"'SELVSTENDIG_NÆRING'"},{name:"literal",value:"'HASTER'"}],required:!0}},{key:"kortNavn",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_fagsak_dto_FagsakMarkeringDto>",required:!0}},{key:"behandlingTypeKanOpprettes",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: foreldrepenger_behandlingslager_behandling_BehandlingType;
  kanOppretteBehandling: boolean;
}`,signature:{properties:[{key:"behandlingType",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanOppretteBehandling",value:{name:"boolean",required:!0}}]}}],raw:"Array<tjenester_behandling_dto_BehandlingOpprettingDto>",required:!0}},{key:"behandlinger",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: number | null;
  uuid: string;
  versjon: number;
  type: foreldrepenger_behandlingslager_behandling_BehandlingType;
  status: foreldrepenger_behandlingslager_behandling_BehandlingStatus;
  fagsakId: number | null;
  opprettet: string;
  avsluttet: string | null;
  endret: string | null;
  endretAvBrukernavn: string | null;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  erAktivPapirsoknad: boolean;
  førsteÅrsak: tjenester_behandling_dto_behandling_BehandlingÅrsakDto | null;
  behandlingsfristTid: string | null;
  gjeldendeVedtak: boolean;
  erPaaVent: boolean | null;
  originalVedtaksDato: string | null;
  behandlingHenlagt: boolean;
  behandlingPaaVent: boolean | null;
  behandlingPåVent: boolean;
  fristBehandlingPåVent: string | null;
  fristBehandlingPaaVent: string | null;
  venteArsakKode: string | null;
  venteÅrsakKode: string | null;
  sprakkode: foreldrepenger_behandlingslager_geografisk_Språkkode | null;
  språkkode: foreldrepenger_behandlingslager_geografisk_Språkkode;
  behandlingKøet: boolean;
  ansvarligSaksbehandler: string | null;
  toTrinnsBehandling: boolean;
  behandlingsresultat: tjenester_behandling_dto_behandling_BehandlingsresultatDto | null;
  behandlingÅrsaker: Array<tjenester_behandling_dto_behandling_BehandlingÅrsakDto>;
  vilkår: Array<tjenester_behandling_vilkår_VilkårDto>;
  links: Array<rest_ResourceLink>;
  behandlingTillatteOperasjoner: tjenester_behandling_dto_BehandlingOperasjonerDto | null;
  brevmaler: Array<foreldrepenger_kontrakter_formidling_v3_BrevmalDto>;
  totrinnskontrollÅrsaker: Array<tjenester_behandling_vedtak_dto_TotrinnskontrollSkjermlenkeContextDto>;
  totrinnskontrollReadonly: boolean | null;
  risikoAksjonspunkt: tjenester_behandling_aksjonspunkt_AksjonspunktDto | null;
  kontrollResultat: tjenester_behandling_kontroll_dto_KontrollresultatDto | null;
  ugunstAksjonspunkt: boolean | null;
  behandlingKoet: boolean | null;
}`,signature:{properties:[{key:"id",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"versjon",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVSLU' | 'FVED' | 'IVED' | 'OPPRE' | 'UTRED'",elements:[{name:"literal",value:"'AVSLU'"},{name:"literal",value:"'FVED'"},{name:"literal",value:"'IVED'"},{name:"literal",value:"'OPPRE'"},{name:"literal",value:"'UTRED'"}],required:!0}},{key:"fagsakId",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endret",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAvBrukernavn",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"førsteÅrsak",value:{name:"union",raw:"tjenester_behandling_dto_behandling_BehandlingÅrsakDto | null",elements:[{name:"signature",type:"object",raw:`{
  erAutomatiskRevurdering: boolean | null;
  behandlingArsakType: foreldrepenger_behandlingslager_behandling_BehandlingÅrsakType;
  manueltOpprettet: boolean;
}`,signature:{properties:[{key:"erAutomatiskRevurdering",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"behandlingArsakType",value:{name:"union",raw:`| TEMP_FRA_FP_TILBAKE_ÅRSAK
| 'RE-LOV'
| 'RE-RGLF'
| 'RE-FEFAKTA'
| 'RE-PRSSL'
| 'RE-ANNET'
| 'RE-MDL'
| 'RE-OPTJ'
| 'RE-FRDLING'
| 'RE-INNTK'
| 'RE-FØDSEL'
| 'RE-DØD'
| 'RE-SRTB'
| 'RE-FRIST'
| 'RE-BER-GRUN'
| 'RE-KLAG-U-INNTK'
| 'RE-KLAG-M-INNTK'
| 'ETTER_KLAGE'
| 'RE-MF'
| 'RE-MFIP'
| 'RE-AVAB'
| 'RE-END-FRA-BRUKER'
| 'RE-END-INNTEKTSMELD'
| 'BERØRT-BEHANDLING'
| 'REBEREGN-FERIEPENGER'
| 'RE-UTSATT-START'
| 'RE-SATS-REGULERING'
| 'ENDRE-DEKNINGSGRAD'
| 'INFOBREV_BEHANDLING'
| 'INFOBREV_OPPHOLD'
| 'INFOBREV_PÅMINNELSE'
| 'OPPHØR-NYTT-BARN'
| 'RE-HENDELSE-FØDSEL'
| 'RE-HENDELSE-DØD-F'
| 'RE-HENDELSE-DØD-B'
| 'RE-HENDELSE-DØDFØD'
| 'RE-HENDELSE-UTFLYTTING'
| 'RE-VEDTAK-PSB'
| 'FEIL_PRAKSIS_UTSETTELSE'
| 'FEIL_PRAKSIS_IVERKS_UTSET'
| 'KLAGE_TILBAKE'
| 'RE-YTELSE'
| 'RE-REGISTEROPPL'
| 'KØET-BEHANDLING'
| 'RE-TILST-YT-INNVIL'
| 'RE-TILST-YT-OPPH'
| '-'`,elements:[{name:"union",raw:`| 'RE_KLAGE_NFP'
| 'RE_KLAGE_KA'
| 'RE_VILKÅR'
| 'RE_FORELDELSE'
| 'RE_FEILUTBETALT_BELØP_REDUSERT'
| 'FATTET_AV_ANNEN_INSTANS'`,elements:[{name:"literal",value:"'RE_KLAGE_NFP'"},{name:"literal",value:"'RE_KLAGE_KA'"},{name:"literal",value:"'RE_VILKÅR'"},{name:"literal",value:"'RE_FORELDELSE'"},{name:"literal",value:"'RE_FEILUTBETALT_BELØP_REDUSERT'"},{name:"literal",value:"'FATTET_AV_ANNEN_INSTANS'"}]},{name:"literal",value:"'RE-LOV'"},{name:"literal",value:"'RE-RGLF'"},{name:"literal",value:"'RE-FEFAKTA'"},{name:"literal",value:"'RE-PRSSL'"},{name:"literal",value:"'RE-ANNET'"},{name:"literal",value:"'RE-MDL'"},{name:"literal",value:"'RE-OPTJ'"},{name:"literal",value:"'RE-FRDLING'"},{name:"literal",value:"'RE-INNTK'"},{name:"literal",value:"'RE-FØDSEL'"},{name:"literal",value:"'RE-DØD'"},{name:"literal",value:"'RE-SRTB'"},{name:"literal",value:"'RE-FRIST'"},{name:"literal",value:"'RE-BER-GRUN'"},{name:"literal",value:"'RE-KLAG-U-INNTK'"},{name:"literal",value:"'RE-KLAG-M-INNTK'"},{name:"literal",value:"'ETTER_KLAGE'"},{name:"literal",value:"'RE-MF'"},{name:"literal",value:"'RE-MFIP'"},{name:"literal",value:"'RE-AVAB'"},{name:"literal",value:"'RE-END-FRA-BRUKER'"},{name:"literal",value:"'RE-END-INNTEKTSMELD'"},{name:"literal",value:"'BERØRT-BEHANDLING'"},{name:"literal",value:"'REBEREGN-FERIEPENGER'"},{name:"literal",value:"'RE-UTSATT-START'"},{name:"literal",value:"'RE-SATS-REGULERING'"},{name:"literal",value:"'ENDRE-DEKNINGSGRAD'"},{name:"literal",value:"'INFOBREV_BEHANDLING'"},{name:"literal",value:"'INFOBREV_OPPHOLD'"},{name:"literal",value:"'INFOBREV_PÅMINNELSE'"},{name:"literal",value:"'OPPHØR-NYTT-BARN'"},{name:"literal",value:"'RE-HENDELSE-FØDSEL'"},{name:"literal",value:"'RE-HENDELSE-DØD-F'"},{name:"literal",value:"'RE-HENDELSE-DØD-B'"},{name:"literal",value:"'RE-HENDELSE-DØDFØD'"},{name:"literal",value:"'RE-HENDELSE-UTFLYTTING'"},{name:"literal",value:"'RE-VEDTAK-PSB'"},{name:"literal",value:"'FEIL_PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'FEIL_PRAKSIS_IVERKS_UTSET'"},{name:"literal",value:"'KLAGE_TILBAKE'"},{name:"literal",value:"'RE-YTELSE'"},{name:"literal",value:"'RE-REGISTEROPPL'"},{name:"literal",value:"'KØET-BEHANDLING'"},{name:"literal",value:"'RE-TILST-YT-INNVIL'"},{name:"literal",value:"'RE-TILST-YT-OPPH'"},{name:"literal",value:"'-'"}],required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}}]}},{name:"null"}],required:!0}},{key:"behandlingsfristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"erPaaVent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"originalVedtaksDato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingPaaVent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fristBehandlingPaaVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteArsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"sprakkode",value:{name:"union",raw:"foreldrepenger_behandlingslager_geografisk_Språkkode | null",elements:[{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0},{name:"null"}],required:!0}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"union",raw:"tjenester_behandling_dto_behandling_BehandlingsresultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: foreldrepenger_behandlingslager_behandling_BehandlingResultatType;
  avslagsarsak: foreldrepenger_behandlingslager_behandling_vilkår_Avslagsårsak | null;
  avslagsarsakFritekst: string | null;
  rettenTil: foreldrepenger_behandlingslager_behandling_RettenTil | null;
  konsekvenserForYtelsen: Array<foreldrepenger_behandlingslager_behandling_KonsekvensForYtelsen> | null;
  vedtaksbrev: foreldrepenger_behandlingslager_behandling_vedtak_Vedtaksbrev | null;
  vedtaksbrevStatus: foreldrepenger_domene_vedtak_intern_VedtaksbrevStatus;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall: boolean | null;
  skjæringstidspunkt: tjenester_behandling_dto_behandling_SkjæringstidspunktDto | null;
  endretDekningsgrad: boolean | null;
  opphørsdato: string | null;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:`| TEMP_FP_TILBAKE_BEHANDLINGRESULTATTYPE
| 'IKKE_FASTSATT'
| 'INNVILGET'
| 'AVSLÅTT'
| 'OPPHØR'
| 'HENLAGT_SØKNAD_TRUKKET'
| 'HENLAGT_FEILOPPRETTET'
| 'HENLAGT_BRUKER_DØD'
| 'MERGET_OG_HENLAGT'
| 'HENLAGT_SØKNAD_MANGLER'
| 'FORELDREPENGER_ENDRET'
| 'FORELDREPENGER_SENERE'
| 'INGEN_ENDRING'
| 'MANGLER_BEREGNINGSREGLER'
| 'KLAGE_AVVIST'
| 'KLAGE_MEDHOLD'
| 'KLAGE_DELVIS_MEDHOLD'
| 'KLAGE_OMGJORT_UGUNST'
| 'KLAGE_YTELSESVEDTAK_OPPHEVET'
| 'KLAGE_YTELSESVEDTAK_STADFESTET'
| 'KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET'
| 'HENLAGT_KLAGE_TRUKKET'
| 'HJEMSENDE_UTEN_OPPHEVE'
| 'ANKE_AVVIST'
| 'ANKE_MEDHOLD'
| 'ANKE_DELVIS_MEDHOLD'
| 'ANKE_OMGJORT_UGUNST'
| 'ANKE_OPPHEVE_OG_HJEMSENDE'
| 'ANKE_HJEMSENDE_UTEN_OPPHEV'
| 'ANKE_YTELSESVEDTAK_STADFESTET'
| 'HENLAGT_ANKE_TRUKKET'
| 'INNSYN_INNVILGET'
| 'INNSYN_DELVIS_INNVILGET'
| 'INNSYN_AVVIST'
| 'HENLAGT_INNSYN_TRUKKET'`,elements:[{name:"union",raw:`| 'IKKE_FASTSATT'
| 'FASTSATT'
| 'HENLAGT_FEILOPPRETTET'
| 'HENLAGT_FEILOPPRETTET_MED_BREV'
| 'HENLAGT_FEILOPPRETTET_UTEN_BREV'
| 'HENLAGT_KRAVGRUNNLAG_NULLSTILT'
| 'HENLAGT_TEKNISK_VEDLIKEHOLD'
| 'HENLAGT'
| 'INGEN_TILBAKEBETALING'
| 'DELVIS_TILBAKEBETALING'
| 'FULL_TILBAKEBETALING'`,elements:[{name:"literal",value:"'IKKE_FASTSATT'"},{name:"literal",value:"'FASTSATT'"},{name:"literal",value:"'HENLAGT_FEILOPPRETTET'"},{name:"literal",value:"'HENLAGT_FEILOPPRETTET_MED_BREV'"},{name:"literal",value:"'HENLAGT_FEILOPPRETTET_UTEN_BREV'"},{name:"literal",value:"'HENLAGT_KRAVGRUNNLAG_NULLSTILT'"},{name:"literal",value:"'HENLAGT_TEKNISK_VEDLIKEHOLD'"},{name:"literal",value:"'HENLAGT'"},{name:"literal",value:"'INGEN_TILBAKEBETALING'"},{name:"literal",value:"'DELVIS_TILBAKEBETALING'"},{name:"literal",value:"'FULL_TILBAKEBETALING'"}]},{name:"literal",value:"'IKKE_FASTSATT'"},{name:"literal",value:"'INNVILGET'"},{name:"literal",value:"'AVSLÅTT'"},{name:"literal",value:"'OPPHØR'"},{name:"literal",value:"'HENLAGT_SØKNAD_TRUKKET'"},{name:"literal",value:"'HENLAGT_FEILOPPRETTET'"},{name:"literal",value:"'HENLAGT_BRUKER_DØD'"},{name:"literal",value:"'MERGET_OG_HENLAGT'"},{name:"literal",value:"'HENLAGT_SØKNAD_MANGLER'"},{name:"literal",value:"'FORELDREPENGER_ENDRET'"},{name:"literal",value:"'FORELDREPENGER_SENERE'"},{name:"literal",value:"'INGEN_ENDRING'"},{name:"literal",value:"'MANGLER_BEREGNINGSREGLER'"},{name:"literal",value:"'KLAGE_AVVIST'"},{name:"literal",value:"'KLAGE_MEDHOLD'"},{name:"literal",value:"'KLAGE_DELVIS_MEDHOLD'"},{name:"literal",value:"'KLAGE_OMGJORT_UGUNST'"},{name:"literal",value:"'KLAGE_YTELSESVEDTAK_OPPHEVET'"},{name:"literal",value:"'KLAGE_YTELSESVEDTAK_STADFESTET'"},{name:"literal",value:"'KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET'"},{name:"literal",value:"'HENLAGT_KLAGE_TRUKKET'"},{name:"literal",value:"'HJEMSENDE_UTEN_OPPHEVE'"},{name:"literal",value:"'ANKE_AVVIST'"},{name:"literal",value:"'ANKE_MEDHOLD'"},{name:"literal",value:"'ANKE_DELVIS_MEDHOLD'"},{name:"literal",value:"'ANKE_OMGJORT_UGUNST'"},{name:"literal",value:"'ANKE_OPPHEVE_OG_HJEMSENDE'"},{name:"literal",value:"'ANKE_HJEMSENDE_UTEN_OPPHEV'"},{name:"literal",value:"'ANKE_YTELSESVEDTAK_STADFESTET'"},{name:"literal",value:"'HENLAGT_ANKE_TRUKKET'"},{name:"literal",value:"'INNSYN_INNVILGET'"},{name:"literal",value:"'INNSYN_DELVIS_INNVILGET'"},{name:"literal",value:"'INNSYN_AVVIST'"},{name:"literal",value:"'HENLAGT_INNSYN_TRUKKET'"}],required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_vilkår_Avslagsårsak | null",elements:[{name:"union",raw:`| '1001'
| '1002'
| '1003'
| '1004'
| '1005'
| '1006'
| '1007'
| '1008'
| '1009'
| '1010'
| '1011'
| '1012'
| '1013'
| '1014'
| '1015'
| '1016'
| '1017'
| '1018'
| '1019'
| '1020'
| '1021'
| '1023'
| '1024'
| '1025'
| '1026'
| '1027'
| '1028'
| '1029'
| '1031'
| '1032'
| '1033'
| '1034'
| '1035'
| '1041'
| '1051'
| '1052'
| '1060'
| '1061'
| '1062'
| '1063'
| '1064'
| '1065'
| '1066'
| '1099'
| '-'`,elements:[{name:"literal",value:"'1001'"},{name:"literal",value:"'1002'"},{name:"literal",value:"'1003'"},{name:"literal",value:"'1004'"},{name:"literal",value:"'1005'"},{name:"literal",value:"'1006'"},{name:"literal",value:"'1007'"},{name:"literal",value:"'1008'"},{name:"literal",value:"'1009'"},{name:"literal",value:"'1010'"},{name:"literal",value:"'1011'"},{name:"literal",value:"'1012'"},{name:"literal",value:"'1013'"},{name:"literal",value:"'1014'"},{name:"literal",value:"'1015'"},{name:"literal",value:"'1016'"},{name:"literal",value:"'1017'"},{name:"literal",value:"'1018'"},{name:"literal",value:"'1019'"},{name:"literal",value:"'1020'"},{name:"literal",value:"'1021'"},{name:"literal",value:"'1023'"},{name:"literal",value:"'1024'"},{name:"literal",value:"'1025'"},{name:"literal",value:"'1026'"},{name:"literal",value:"'1027'"},{name:"literal",value:"'1028'"},{name:"literal",value:"'1029'"},{name:"literal",value:"'1031'"},{name:"literal",value:"'1032'"},{name:"literal",value:"'1033'"},{name:"literal",value:"'1034'"},{name:"literal",value:"'1035'"},{name:"literal",value:"'1041'"},{name:"literal",value:"'1051'"},{name:"literal",value:"'1052'"},{name:"literal",value:"'1060'"},{name:"literal",value:"'1061'"},{name:"literal",value:"'1062'"},{name:"literal",value:"'1063'"},{name:"literal",value:"'1064'"},{name:"literal",value:"'1065'"},{name:"literal",value:"'1066'"},{name:"literal",value:"'1099'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"rettenTil",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_RettenTil | null",elements:[{name:"union",raw:"'HAR_RETT_TIL_FP' | 'HAR_IKKE_RETT_TIL_FP' | '-'",elements:[{name:"literal",value:"'HAR_RETT_TIL_FP'"},{name:"literal",value:"'HAR_IKKE_RETT_TIL_FP'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"konsekvenserForYtelsen",value:{name:"union",raw:"Array<foreldrepenger_behandlingslager_behandling_KonsekvensForYtelsen> | null",elements:[{name:"Array",elements:[{name:"union",raw:`| 'FORELDREPENGER_OPPHØRER'
| 'ENDRING_I_BEREGNING'
| 'ENDRING_I_UTTAK'
| 'ENDRING_I_FORDELING_AV_YTELSEN'
| 'INGEN_ENDRING'
| '-'`,elements:[{name:"literal",value:"'FORELDREPENGER_OPPHØRER'"},{name:"literal",value:"'ENDRING_I_BEREGNING'"},{name:"literal",value:"'ENDRING_I_UTTAK'"},{name:"literal",value:"'ENDRING_I_FORDELING_AV_YTELSEN'"},{name:"literal",value:"'INGEN_ENDRING'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_KonsekvensForYtelsen>"},{name:"null"}],required:!0}},{key:"vedtaksbrev",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_vedtak_Vedtaksbrev | null",elements:[{name:"union",raw:"'AUTOMATISK' | 'FRITEKST' | 'INGEN' | '-'",elements:[{name:"literal",value:"'AUTOMATISK'"},{name:"literal",value:"'FRITEKST'"},{name:"literal",value:"'INGEN'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"skjæringstidspunkt",value:{name:"union",raw:"tjenester_behandling_dto_behandling_SkjæringstidspunktDto | null",elements:[{name:"signature",type:"object",raw:`{
  dato: string | null;
  utenMinsterett: boolean | null;
}`,signature:{properties:[{key:"dato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"utenMinsterett",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"endretDekningsgrad",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  erAutomatiskRevurdering: boolean | null;
  behandlingArsakType: foreldrepenger_behandlingslager_behandling_BehandlingÅrsakType;
  manueltOpprettet: boolean;
}`,signature:{properties:[{key:"erAutomatiskRevurdering",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"behandlingArsakType",value:{name:"union",raw:`| TEMP_FRA_FP_TILBAKE_ÅRSAK
| 'RE-LOV'
| 'RE-RGLF'
| 'RE-FEFAKTA'
| 'RE-PRSSL'
| 'RE-ANNET'
| 'RE-MDL'
| 'RE-OPTJ'
| 'RE-FRDLING'
| 'RE-INNTK'
| 'RE-FØDSEL'
| 'RE-DØD'
| 'RE-SRTB'
| 'RE-FRIST'
| 'RE-BER-GRUN'
| 'RE-KLAG-U-INNTK'
| 'RE-KLAG-M-INNTK'
| 'ETTER_KLAGE'
| 'RE-MF'
| 'RE-MFIP'
| 'RE-AVAB'
| 'RE-END-FRA-BRUKER'
| 'RE-END-INNTEKTSMELD'
| 'BERØRT-BEHANDLING'
| 'REBEREGN-FERIEPENGER'
| 'RE-UTSATT-START'
| 'RE-SATS-REGULERING'
| 'ENDRE-DEKNINGSGRAD'
| 'INFOBREV_BEHANDLING'
| 'INFOBREV_OPPHOLD'
| 'INFOBREV_PÅMINNELSE'
| 'OPPHØR-NYTT-BARN'
| 'RE-HENDELSE-FØDSEL'
| 'RE-HENDELSE-DØD-F'
| 'RE-HENDELSE-DØD-B'
| 'RE-HENDELSE-DØDFØD'
| 'RE-HENDELSE-UTFLYTTING'
| 'RE-VEDTAK-PSB'
| 'FEIL_PRAKSIS_UTSETTELSE'
| 'FEIL_PRAKSIS_IVERKS_UTSET'
| 'KLAGE_TILBAKE'
| 'RE-YTELSE'
| 'RE-REGISTEROPPL'
| 'KØET-BEHANDLING'
| 'RE-TILST-YT-INNVIL'
| 'RE-TILST-YT-OPPH'
| '-'`,elements:[{name:"union",raw:`| 'RE_KLAGE_NFP'
| 'RE_KLAGE_KA'
| 'RE_VILKÅR'
| 'RE_FORELDELSE'
| 'RE_FEILUTBETALT_BELØP_REDUSERT'
| 'FATTET_AV_ANNEN_INSTANS'`,elements:[{name:"literal",value:"'RE_KLAGE_NFP'"},{name:"literal",value:"'RE_KLAGE_KA'"},{name:"literal",value:"'RE_VILKÅR'"},{name:"literal",value:"'RE_FORELDELSE'"},{name:"literal",value:"'RE_FEILUTBETALT_BELØP_REDUSERT'"},{name:"literal",value:"'FATTET_AV_ANNEN_INSTANS'"}]},{name:"literal",value:"'RE-LOV'"},{name:"literal",value:"'RE-RGLF'"},{name:"literal",value:"'RE-FEFAKTA'"},{name:"literal",value:"'RE-PRSSL'"},{name:"literal",value:"'RE-ANNET'"},{name:"literal",value:"'RE-MDL'"},{name:"literal",value:"'RE-OPTJ'"},{name:"literal",value:"'RE-FRDLING'"},{name:"literal",value:"'RE-INNTK'"},{name:"literal",value:"'RE-FØDSEL'"},{name:"literal",value:"'RE-DØD'"},{name:"literal",value:"'RE-SRTB'"},{name:"literal",value:"'RE-FRIST'"},{name:"literal",value:"'RE-BER-GRUN'"},{name:"literal",value:"'RE-KLAG-U-INNTK'"},{name:"literal",value:"'RE-KLAG-M-INNTK'"},{name:"literal",value:"'ETTER_KLAGE'"},{name:"literal",value:"'RE-MF'"},{name:"literal",value:"'RE-MFIP'"},{name:"literal",value:"'RE-AVAB'"},{name:"literal",value:"'RE-END-FRA-BRUKER'"},{name:"literal",value:"'RE-END-INNTEKTSMELD'"},{name:"literal",value:"'BERØRT-BEHANDLING'"},{name:"literal",value:"'REBEREGN-FERIEPENGER'"},{name:"literal",value:"'RE-UTSATT-START'"},{name:"literal",value:"'RE-SATS-REGULERING'"},{name:"literal",value:"'ENDRE-DEKNINGSGRAD'"},{name:"literal",value:"'INFOBREV_BEHANDLING'"},{name:"literal",value:"'INFOBREV_OPPHOLD'"},{name:"literal",value:"'INFOBREV_PÅMINNELSE'"},{name:"literal",value:"'OPPHØR-NYTT-BARN'"},{name:"literal",value:"'RE-HENDELSE-FØDSEL'"},{name:"literal",value:"'RE-HENDELSE-DØD-F'"},{name:"literal",value:"'RE-HENDELSE-DØD-B'"},{name:"literal",value:"'RE-HENDELSE-DØDFØD'"},{name:"literal",value:"'RE-HENDELSE-UTFLYTTING'"},{name:"literal",value:"'RE-VEDTAK-PSB'"},{name:"literal",value:"'FEIL_PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'FEIL_PRAKSIS_IVERKS_UTSET'"},{name:"literal",value:"'KLAGE_TILBAKE'"},{name:"literal",value:"'RE-YTELSE'"},{name:"literal",value:"'RE-REGISTEROPPL'"},{name:"literal",value:"'KØET-BEHANDLING'"},{name:"literal",value:"'RE-TILST-YT-INNVIL'"},{name:"literal",value:"'RE-TILST-YT-OPPH'"},{name:"literal",value:"'-'"}],required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}}]}}],raw:"Array<tjenester_behandling_dto_behandling_BehandlingÅrsakDto>",required:!0}},{key:"vilkår",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: foreldrepenger_behandlingslager_behandling_vilkår_VilkårType;
  vilkarStatus: foreldrepenger_behandlingslager_behandling_vilkår_VilkårUtfallType;
  avslagKode: string | null;
  lovReferanse: string | null;
  overstyrbar: boolean;
  evaluering: string | null;
  input: string | null;
}`,signature:{properties:[{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
| 'FP_VK_11'
| 'FP_VK_16'
| 'FP_VK_2'
| 'FP_VK_2_F'
| 'FP_VK_2_L'
| 'FP_VK_3'
| 'FP_VK_4'
| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| 'FP_VK_34'
| 'FP_VK_21'
| 'FP_VK_23'
| 'FP_VK_41'
| 'SVP_VK_1'
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0}},{key:"vilkarStatus",value:{name:"union",raw:`| 'OPPFYLT'
| 'IKKE_OPPFYLT'
| 'IKKE_VURDERT'
| '-'`,elements:[{name:"literal",value:"'OPPFYLT'"},{name:"literal",value:"'IKKE_OPPFYLT'"},{name:"literal",value:"'IKKE_VURDERT'"},{name:"literal",value:"'-'"}],required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"lovReferanse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"overstyrbar",value:{name:"boolean",required:!0}},{key:"evaluering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"input",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:"Array<tjenester_behandling_vilkår_VilkårDto>",required:!0}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: {
    [key: string]: unknown;
  };
  type: rest_ResourceLink_HttpMethod;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"signature",type:"object",raw:`{
  [key: string]: unknown;
}`,signature:{properties:[{key:{name:"string"},value:{name:"unknown",required:!0}}]},required:!1}},{key:"type",value:{name:"union",raw:"'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT'",elements:[{name:"literal",value:"'DELETE'"},{name:"literal",value:"'GET'"},{name:"literal",value:"'PATCH'"},{name:"literal",value:"'POST'"},{name:"literal",value:"'PUT'"}],required:!0}}]}}],raw:"Array<rest_ResourceLink>",required:!0}},{key:"behandlingTillatteOperasjoner",value:{name:"union",raw:"tjenester_behandling_dto_BehandlingOperasjonerDto | null",elements:[{name:"signature",type:"object",raw:`{
  uuid: string | null;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanMerkesHaster: boolean;
  behandlingKanSettesPaVent: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingFraBeslutter: boolean;
  behandlingTilGodkjenning: boolean;
  vergeBehandlingsmeny: foreldrepenger_domene_person_verge_dto_VergeBehandlingsmenyEnum;
}`,signature:{properties:[{key:"uuid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanMerkesHaster",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"union",raw:"'SKJUL' | 'OPPRETT' | 'FJERN'",elements:[{name:"literal",value:"'SKJUL'"},{name:"literal",value:"'OPPRETT'"},{name:"literal",value:"'FJERN'"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig: boolean | null;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}],raw:"Array<foreldrepenger_kontrakter_formidling_v3_BrevmalDto>",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: Array<tjenester_behandling_vedtak_dto_TotrinnskontrollAksjonspunkterDto>;
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"string",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter: Array<tjenester_behandling_vedtak_dto_TotrinnskontrollAktivitetDto>;
  beregningDto: tjenester_behandling_vedtak_dto_TotrinnsBeregningDto | null;
  besluttersBegrunnelse: string | null;
  totrinnskontrollGodkjent: boolean;
  vurderPaNyttArsaker: Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>;
  uttakPerioder: Array<foreldrepenger_domene_uttak_UttakPeriodeEndringDto>;
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"opptjeningAktiviteter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktivitetType: string;
  erEndring: boolean;
  godkjent: boolean;
  arbeidsgiverReferanse: string | null;
  arbeidsgiverNavn: string | null;
  orgnr: string | null;
  privatpersonFødselsdato: string | null;
}`,signature:{properties:[{key:"aktivitetType",value:{name:"string",required:!0}},{key:"erEndring",value:{name:"boolean",required:!0}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"arbeidsgiverNavn",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"orgnr",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"privatpersonFødselsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:"Array<tjenester_behandling_vedtak_dto_TotrinnskontrollAktivitetDto>",required:!0}},{key:"beregningDto",value:{name:"union",raw:"tjenester_behandling_vedtak_dto_TotrinnsBeregningDto | null",elements:[{name:"signature",type:"object",raw:`{
  fastsattVarigEndringNaering: boolean | null;
  faktaOmBeregningTilfeller: Array<foreldrepenger_domene_modell_kodeverk_FaktaOmBeregningTilfelle> | null;
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"union",raw:"Array<foreldrepenger_domene_modell_kodeverk_FaktaOmBeregningTilfelle> | null",elements:[{name:"Array",elements:[{name:"union",raw:`| 'VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD'
| 'VURDER_SN_NY_I_ARBEIDSLIVET'
| 'VURDER_NYOPPSTARTET_FL'
| 'FASTSETT_MAANEDSINNTEKT_FL'
| 'FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'
| 'VURDER_LØNNSENDRING'
| 'FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'
| 'VURDER_AT_OG_FL_I_SAMME_ORGANISASJON'
| 'FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE'
| 'VURDER_ETTERLØNN_SLUTTPAKKE'
| 'FASTSETT_ETTERLØNN_SLUTTPAKKE'
| 'VURDER_MOTTAR_YTELSE'
| 'VURDER_BESTEBEREGNING'
| 'VURDER_MILITÆR_SIVILTJENESTE'
| 'VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT'
| 'FASTSETT_BG_KUN_YTELSE'
| 'TILSTØTENDE_YTELSE'
| 'FASTSETT_ENDRET_BEREGNINGSGRUNNLAG'
| '-'`,elements:[{name:"literal",value:"'VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD'"},{name:"literal",value:"'VURDER_SN_NY_I_ARBEIDSLIVET'"},{name:"literal",value:"'VURDER_NYOPPSTARTET_FL'"},{name:"literal",value:"'FASTSETT_MAANEDSINNTEKT_FL'"},{name:"literal",value:"'FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'VURDER_LØNNSENDRING'"},{name:"literal",value:"'FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'VURDER_AT_OG_FL_I_SAMME_ORGANISASJON'"},{name:"literal",value:"'FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE'"},{name:"literal",value:"'VURDER_ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'FASTSETT_ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'VURDER_MOTTAR_YTELSE'"},{name:"literal",value:"'VURDER_BESTEBEREGNING'"},{name:"literal",value:"'VURDER_MILITÆR_SIVILTJENESTE'"},{name:"literal",value:"'VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT'"},{name:"literal",value:"'FASTSETT_BG_KUN_YTELSE'"},{name:"literal",value:"'TILSTØTENDE_YTELSE'"},{name:"literal",value:"'FASTSETT_ENDRET_BEREGNINGSGRUNNLAG'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_domene_modell_kodeverk_FaktaOmBeregningTilfelle>"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!0}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>",required:!0}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  erSlettet: boolean | null;
  erEndret: boolean | null;
  erLagtTil: boolean | null;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"erSlettet",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"erEndret",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"erLagtTil",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}],raw:"Array<foreldrepenger_domene_uttak_UttakPeriodeEndringDto>",required:!0}}]}}],raw:"Array<tjenester_behandling_vedtak_dto_TotrinnskontrollAksjonspunkterDto>",required:!0}}]}}],raw:"Array<tjenester_behandling_vedtak_dto_TotrinnskontrollSkjermlenkeContextDto>",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"risikoAksjonspunkt",value:{name:"union",raw:"tjenester_behandling_aksjonspunkt_AksjonspunktDto | null",elements:[{name:"signature",type:"object",raw:`{
  definisjon: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktDefinisjon;
  status: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType: foreldrepenger_behandlingslager_behandling_vilkår_VilkårType | null;
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent: boolean | null;
  vurderPaNyttArsaker: Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak> | null;
  besluttersBegrunnelse: string | null;
  aksjonspunktType: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktType;
  kanLoses: boolean;
  erAktivt: boolean;
  fristTid: string | null;
  endretTidspunkt: string | null;
  endretAv: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"union",raw:`| '5001'
| '5027'
| '5004'
| '5005'
| '5006'
| '5007'
| '5008'
| '5011'
| '5012'
| '5013'
| '5014'
| '5015'
| '5016'
| '5017'
| '5002'
| '5026'
| '5028'
| '5030'
| '5031'
| '5033'
| '5034'
| '5003'
| '5035'
| '5037'
| '5038'
| '5039'
| '5040'
| '5043'
| '5046'
| '5047'
| '5049'
| '5051'
| '5052'
| '5054'
| '5055'
| '5057'
| '5058'
| '5059'
| '5060'
| '5061'
| '5068'
| '5064'
| '5065'
| '5063'
| '5066'
| '5071'
| '5072'
| '5069'
| '5073'
| '5076'
| '5077'
| '5085'
| '5082'
| '5084'
| '5029'
| '5086'
| '5089'
| '5041'
| '5062'
| '5091'
| '5092'
| '5095'
| '5096'
| '5074'
| '5101'
| '5102'
| '5103'
| '6002'
| '6003'
| '6004'
| '6005'
| '6006'
| '6008'
| '6009'
| '6010'
| '6011'
| '6065'
| '6014'
| '6015'
| '6045'
| '6016'
| '6018'
| '6017'
| '6103'
| '7001'
| '7002'
| '7003'
| '7005'
| '7007'
| '7008'
| '7011'
| '7013'
| '7014'
| '7020'
| '7030'
| '7033'
| '7037'
| '7039'
| '7040'
| "UNDEFINED('null')"
| '5009'
| '5019'
| '5020'
| '5021'
| '5022'
| '5023'
| '5024'
| '5025'
| '5032'
| '5036'
| '5042'
| '5044'
| '5045'
| '5048'
| '5050'
| '5053'
| '5056'
| '5067'
| '5070'
| '5075'
| '5078'
| '5079'
| '5080'
| '5081'
| '5083'
| '5087'
| '5088'
| '5090'
| '5093'
| '5094'
| '5097'
| '5098'
| '5099'
| '6007'
| '6012'
| '6013'
| '6068'
| '6070'
| '7004'
| '7006'
| '7009'
| '7015'
| '7016'
| '7017'
| '7018'
| '7019'
| '7021'
| '7022'
| '7023'
| '7024'
| '7025'
| '7026'
| '7027'
| '7028'
| '7029'
| '7032'
| '7034'
| '7035'
| '7036'
| '7038'
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_vilkår_VilkårType | null",elements:[{name:"union",raw:`| 'FP_VK_1'
| 'FP_VK_11'
| 'FP_VK_16'
| 'FP_VK_2'
| 'FP_VK_2_F'
| 'FP_VK_2_L'
| 'FP_VK_3'
| 'FP_VK_4'
| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| 'FP_VK_34'
| 'FP_VK_21'
| 'FP_VK_23'
| 'FP_VK_41'
| 'SVP_VK_1'
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0},{name:"null"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak> | null",elements:[{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>"},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:`| 'AUTO'
| 'MANU'
| 'OVST'
| 'SAOV'
| '-'`,elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"kontrollResultat",value:{name:"union",raw:"tjenester_behandling_kontroll_dto_KontrollresultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: foreldrepenger_behandlingslager_risikoklassifisering_Kontrollresultat;
  iayFaresignaler: tjenester_behandling_kontroll_dto_KontrollresultatDto_FaresignalgruppeDto | null;
  medlFaresignaler: tjenester_behandling_kontroll_dto_KontrollresultatDto_FaresignalgruppeDto | null;
  faresignalVurdering: foreldrepenger_behandlingslager_risikoklassifisering_FaresignalVurdering | null;
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"union",raw:`| 'HOY'
| 'IKKE_HOY'
| 'IKKE_KLASSIFISERT'
| '-'`,elements:[{name:"literal",value:"'HOY'"},{name:"literal",value:"'IKKE_HOY'"},{name:"literal",value:"'IKKE_KLASSIFISERT'"},{name:"literal",value:"'-'"}],required:!0}},{key:"iayFaresignaler",value:{name:"union",raw:"tjenester_behandling_kontroll_dto_KontrollresultatDto_FaresignalgruppeDto | null",elements:[{name:"signature",type:"object",raw:`{
  faresignaler: Array<string>;
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]}},{name:"null"}],required:!0}},{key:"medlFaresignaler",value:{name:"union",raw:"tjenester_behandling_kontroll_dto_KontrollresultatDto_FaresignalgruppeDto | null",elements:[{name:"signature",type:"object",raw:`{
  faresignaler: Array<string>;
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]}},{name:"null"}],required:!0}},{key:"faresignalVurdering",value:{name:"union",raw:"foreldrepenger_behandlingslager_risikoklassifisering_FaresignalVurdering | null",elements:[{name:"union",raw:`| 'INNVIRKNING'
| 'INNVILGET_REDUSERT'
| 'INNVILGET_UENDRET'
| 'AVSLAG_FARESIGNAL'
| 'AVSLAG_ANNET'
| 'INGEN_INNVIRKNING'
| '-'`,elements:[{name:"literal",value:"'INNVIRKNING'"},{name:"literal",value:"'INNVILGET_REDUSERT'"},{name:"literal",value:"'INNVILGET_UENDRET'"},{name:"literal",value:"'AVSLAG_FARESIGNAL'"},{name:"literal",value:"'AVSLAG_ANNET'"},{name:"literal",value:"'INGEN_INNVIRKNING'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}}]},required:!0},{name:"null"}],required:!0}},{key:"ugunstAksjonspunkt",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"behandlingKoet",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}],raw:"Array<tjenester_behandling_dto_behandling_FagsakBehandlingDto>",required:!0}},{key:"historikkinnslag",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingUuid: string | null;
  aktør: tjenester_behandling_historikk_HistorikkinnslagDto_HistorikkAktørDto;
  skjermlenke: foreldrepenger_behandlingslager_behandling_skjermlenke_SkjermlenkeType | null;
  opprettetTidspunkt: string;
  dokumenter: Array<tjenester_behandling_historikk_HistorikkInnslagDokumentLinkDto> | null;
  tittel: string | null;
  linjer: Array<tjenester_behandling_historikk_HistorikkinnslagDto_Linje>;
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aktør",value:{name:"signature",type:"object",raw:`{
  type: foreldrepenger_behandlingslager_behandling_historikk_HistorikkAktør;
  ident: string | null;
}`,signature:{properties:[{key:"type",value:{name:"union",raw:`| 'BESL'
| 'SBH'
| 'SOKER'
| 'ARBEIDSGIVER'
| 'VL'
| '-'`,elements:[{name:"literal",value:"'BESL'"},{name:"literal",value:"'SBH'"},{name:"literal",value:"'SOKER'"},{name:"literal",value:"'ARBEIDSGIVER'"},{name:"literal",value:"'VL'"},{name:"literal",value:"'-'"}],required:!0}},{key:"ident",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]},required:!0}},{key:"skjermlenke",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_skjermlenke_SkjermlenkeType | null",elements:[{name:"union",raw:`| 'ANKE_MERKNADER'
| 'ANKE_VURDERING'
| 'BEREGNING_ENGANGSSTOENAD'
| 'BEREGNING_FORELDREPENGER'
| 'BESTEBEREGNING'
| 'FAKTA_FOR_OMSORG'
| 'FAKTA_FOR_OPPTJENING'
| 'FAKTA_OM_ADOPSJON'
| 'FAKTA_OM_ARBEIDSFORHOLD'
| 'FAKTA_OM_ARBEIDSFORHOLD_INNTEKTSMELDING'
| 'FAKTA_OM_ARBEIDSFORHOLD_PERMISJON'
| 'FAKTA_OM_BEREGNING'
| 'FAKTA_OM_FOEDSEL'
| 'FAKTA_OM_FORDELING'
| 'FAKTA_OM_MEDLEMSKAP'
| 'FAKTA_OM_OMSORG_OG_FORELDREANSVAR'
| 'FAKTA_OM_OPPTJENING'
| 'FAKTA_OM_SIMULERING'
| 'FAKTA_OM_UTTAK'
| 'FAKTA_OM_AKTIVITETSKRAV'
| 'FAKTA_OMSORG_OG_RETT'
| 'FAKTA_OM_VERGE'
| 'FORMKRAV_KLAGE_KA'
| 'FORMKRAV_KLAGE_NFP'
| 'KLAGE_BEH_NFP'
| 'KLAGE_BEH_NK'
| 'KONTROLL_AV_SAKSOPPLYSNINGER'
| 'OPPLYSNINGSPLIKT'
| 'PUNKT_FOR_ADOPSJON'
| 'PUNKT_FOR_FOEDSEL'
| 'PUNKT_FOR_FORELDREANSVAR'
| 'PUNKT_FOR_MEDLEMSKAP'
| 'PUNKT_FOR_MEDLEMSKAP_LØPENDE'
| 'PUNKT_FOR_OMSORG'
| 'PUNKT_FOR_OPPTJENING'
| 'PUNKT_FOR_SVANGERSKAPSPENGER'
| 'PUNKT_FOR_SVP_INNGANG'
| 'SOEKNADSFRIST'
| 'TILKJENT_YTELSE'
| '-'
| 'UTLAND'
| 'UTTAK'
| 'VEDTAK'
| 'VURDER_FARESIGNALER'
| 'FAKTA_OM_UTTAK_DOKUMENTASJON'
| 'FAKTA_UTTAK'
| 'FAKTA_UTTAK_EØS'`,elements:[{name:"literal",value:"'ANKE_MERKNADER'"},{name:"literal",value:"'ANKE_VURDERING'"},{name:"literal",value:"'BEREGNING_ENGANGSSTOENAD'"},{name:"literal",value:"'BEREGNING_FORELDREPENGER'"},{name:"literal",value:"'BESTEBEREGNING'"},{name:"literal",value:"'FAKTA_FOR_OMSORG'"},{name:"literal",value:"'FAKTA_FOR_OPPTJENING'"},{name:"literal",value:"'FAKTA_OM_ADOPSJON'"},{name:"literal",value:"'FAKTA_OM_ARBEIDSFORHOLD'"},{name:"literal",value:"'FAKTA_OM_ARBEIDSFORHOLD_INNTEKTSMELDING'"},{name:"literal",value:"'FAKTA_OM_ARBEIDSFORHOLD_PERMISJON'"},{name:"literal",value:"'FAKTA_OM_BEREGNING'"},{name:"literal",value:"'FAKTA_OM_FOEDSEL'"},{name:"literal",value:"'FAKTA_OM_FORDELING'"},{name:"literal",value:"'FAKTA_OM_MEDLEMSKAP'"},{name:"literal",value:"'FAKTA_OM_OMSORG_OG_FORELDREANSVAR'"},{name:"literal",value:"'FAKTA_OM_OPPTJENING'"},{name:"literal",value:"'FAKTA_OM_SIMULERING'"},{name:"literal",value:"'FAKTA_OM_UTTAK'"},{name:"literal",value:"'FAKTA_OM_AKTIVITETSKRAV'"},{name:"literal",value:"'FAKTA_OMSORG_OG_RETT'"},{name:"literal",value:"'FAKTA_OM_VERGE'"},{name:"literal",value:"'FORMKRAV_KLAGE_KA'"},{name:"literal",value:"'FORMKRAV_KLAGE_NFP'"},{name:"literal",value:"'KLAGE_BEH_NFP'"},{name:"literal",value:"'KLAGE_BEH_NK'"},{name:"literal",value:"'KONTROLL_AV_SAKSOPPLYSNINGER'"},{name:"literal",value:"'OPPLYSNINGSPLIKT'"},{name:"literal",value:"'PUNKT_FOR_ADOPSJON'"},{name:"literal",value:"'PUNKT_FOR_FOEDSEL'"},{name:"literal",value:"'PUNKT_FOR_FORELDREANSVAR'"},{name:"literal",value:"'PUNKT_FOR_MEDLEMSKAP'"},{name:"literal",value:"'PUNKT_FOR_MEDLEMSKAP_LØPENDE'"},{name:"literal",value:"'PUNKT_FOR_OMSORG'"},{name:"literal",value:"'PUNKT_FOR_OPPTJENING'"},{name:"literal",value:"'PUNKT_FOR_SVANGERSKAPSPENGER'"},{name:"literal",value:"'PUNKT_FOR_SVP_INNGANG'"},{name:"literal",value:"'SOEKNADSFRIST'"},{name:"literal",value:"'TILKJENT_YTELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'UTLAND'"},{name:"literal",value:"'UTTAK'"},{name:"literal",value:"'VEDTAK'"},{name:"literal",value:"'VURDER_FARESIGNALER'"},{name:"literal",value:"'FAKTA_OM_UTTAK_DOKUMENTASJON'"},{name:"literal",value:"'FAKTA_UTTAK'"},{name:"literal",value:"'FAKTA_UTTAK_EØS'"}]},{name:"null"}],required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"dokumenter",value:{name:"union",raw:"Array<tjenester_behandling_historikk_HistorikkInnslagDokumentLinkDto> | null",elements:[{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  tag: string;
  journalpostId: string;
  dokumentId: string;
  utgått: boolean;
}`,signature:{properties:[{key:"tag",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"utgått",value:{name:"boolean",required:!0}}]}}],raw:"Array<tjenester_behandling_historikk_HistorikkInnslagDokumentLinkDto>"},{name:"null"}],required:!0}},{key:"tittel",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"linjer",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  type: tjenester_behandling_historikk_HistorikkinnslagDto_Linje_Type;
  tekst: string | null;
}`,signature:{properties:[{key:"type",value:{name:"union",raw:"'TEKST' | 'LINJESKIFT'",elements:[{name:"literal",value:"'TEKST'"},{name:"literal",value:"'LINJESKIFT'"}],required:!0}},{key:"tekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:"Array<tjenester_behandling_historikk_HistorikkinnslagDto_Linje>",required:!0}}]}}],raw:"Array<tjenester_behandling_historikk_HistorikkinnslagDto>",required:!0}},{key:"notater",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  opprettetAv: string;
  opprettetTidspunkt: string;
  notat: string;
}`,signature:{properties:[{key:"opprettetAv",value:{name:"string",required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"notat",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_fagsak_dto_FagsakNotatDto>",required:!0}},{key:"kontrollResultat",value:{name:"signature",type:"object",raw:`{
  kontrollresultat: foreldrepenger_behandlingslager_risikoklassifisering_Kontrollresultat;
  iayFaresignaler: tjenester_behandling_kontroll_dto_KontrollresultatDto_FaresignalgruppeDto | null;
  medlFaresignaler: tjenester_behandling_kontroll_dto_KontrollresultatDto_FaresignalgruppeDto | null;
  faresignalVurdering: foreldrepenger_behandlingslager_risikoklassifisering_FaresignalVurdering | null;
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"union",raw:`| 'HOY'
| 'IKKE_HOY'
| 'IKKE_KLASSIFISERT'
| '-'`,elements:[{name:"literal",value:"'HOY'"},{name:"literal",value:"'IKKE_HOY'"},{name:"literal",value:"'IKKE_KLASSIFISERT'"},{name:"literal",value:"'-'"}],required:!0}},{key:"iayFaresignaler",value:{name:"union",raw:"tjenester_behandling_kontroll_dto_KontrollresultatDto_FaresignalgruppeDto | null",elements:[{name:"signature",type:"object",raw:`{
  faresignaler: Array<string>;
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]}},{name:"null"}],required:!0}},{key:"medlFaresignaler",value:{name:"union",raw:"tjenester_behandling_kontroll_dto_KontrollresultatDto_FaresignalgruppeDto | null",elements:[{name:"signature",type:"object",raw:`{
  faresignaler: Array<string>;
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]}},{name:"null"}],required:!0}},{key:"faresignalVurdering",value:{name:"union",raw:"foreldrepenger_behandlingslager_risikoklassifisering_FaresignalVurdering | null",elements:[{name:"union",raw:`| 'INNVIRKNING'
| 'INNVILGET_REDUSERT'
| 'INNVILGET_UENDRET'
| 'AVSLAG_FARESIGNAL'
| 'AVSLAG_ANNET'
| 'INGEN_INNVIRKNING'
| '-'`,elements:[{name:"literal",value:"'INNVIRKNING'"},{name:"literal",value:"'INNVILGET_REDUSERT'"},{name:"literal",value:"'INNVILGET_UENDRET'"},{name:"literal",value:"'AVSLAG_FARESIGNAL'"},{name:"literal",value:"'AVSLAG_ANNET'"},{name:"literal",value:"'INGEN_INNVIRKNING'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}}]},required:!0}},{key:"harVergeIÅpenBehandling",value:{name:"boolean",required:!0}}]}},description:""},inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`},description:""},arbeidsgiverOpplysninger:{required:!0,tsType:{name:"union",raw:`| (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: true; fødselsdato: string })
| (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: false })`,elements:[{name:"unknown"},{name:"unknown"}]},description:""}}};const tv=({inntektsmelding:e})=>{const l=Er();if(e.refusjonsperioder.length===0)return V.jsx(zn,{tittel:l.formatMessage({id:"InntektsmeldingFaktaPanel.refusjon.heading"}),children:e.refusjonPrMnd?V.jsx(ut,{beløp:e.refusjonPrMnd}):V.jsx(Ie,{tagName:"span",id:"InntektsmeldingFaktaPanel.refusjon.ingen"})});const t=[...e.refusjonsperioder].sort((a,i)=>new Date(a.fom).getTime()-new Date(i.fom).getTime());return V.jsxs(zn,{tittel:l.formatMessage({id:"InntektsmeldingFaktaPanel.refusjon.heading"}),children:[V.jsx("span",{children:"Krever refusjon"}),V.jsx(ut,{beløp:e.refusjonPrMnd??0}),V.jsx("span",{children:"Endringer i perioden:"}),V.jsx("ul",{children:t.map(a=>V.jsx("li",{children:V.jsx(Ie,{id:"InntektsmeldingFaktaPanel.refusjon.endring.periode",values:{kroner:V.jsx(ut,{beløp:a.refusjonsbeløp.verdi}),fom:V.jsx(Jt,{dateString:a.fom})}})},a.indexKey))})]})};tv.__docgenInfo={description:"",methods:[],displayName:"Refusjon",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`},description:""}}};const av=({startDatoPermisjon:e,ytelse:l})=>{const t=Er();return e?V.jsxs(zn,{tittel:t.formatMessage({id:"InntektsmeldingFaktaPanel.startDato.heading"},{ytelse:l.toLowerCase()}),children:[V.jsx("span",{children:e?V.jsx(Jt,{dateString:e}):"-"}),V.jsx("span",{children:V.jsx(Ie,{id:"InntektsmeldingFaktaPanel.startDato.fraArbeidsgiver"})})]}):null};av.__docgenInfo={description:"",methods:[],displayName:"Startdato",props:{startDatoPermisjon:{required:!1,tsType:{name:"string"},description:""},ytelse:{required:!0,tsType:{name:"string"},description:""}}};const sb="_behandlingCircleIngen_x70wg_1",ob="_behandlingCircleDenne_x70wg_5",mb="_behandlingCircleAndre_x70wg_9",db="_container_x70wg_13",gb="_ingenInntektsmeldinger_x70wg_20",Ct={behandlingCircleIngen:sb,behandlingCircleDenne:ob,behandlingCircleAndre:mb,container:db,ingenInntektsmeldinger:gb},lv=({inntektsmelding:e,arbeidsgiverOpplysningerPerId:l,alleBehandlinger:t})=>{const{alleKodeverk:a,fagsak:i,behandling:s}=Jd(),m=Er();return V.jsxs(pl,{gap:"space-16",className:Ct.container,children:[V.jsxs(it,{gap:"space-16",justify:"space-between",align:"start",children:[V.jsxs(Xd,{level:"3",size:"small",children:[V.jsx(Ie,{id:"InntektsmeldingFaktaPanel.innsendingstidspunkt"})," ",V.jsx(ol,{dateTimeString:e.innsendingstidspunkt,separator:"kl"})]}),V.jsx(rv,{fagsak:i,inntektsmelding:e,arbeidsgiverOpplysninger:l[e.arbeidsgiverIdent]})]}),V.jsxs(qy,{columns:3,gap:"space-32",children:[V.jsx(Ag,{arbeidsgiverOpplysninger:l[e.arbeidsgiverIdent],arbeidsgiverIdent:e.arbeidsgiverIdent}),V.jsx(zn,{tittel:m.formatMessage({id:"InntektsmeldingFaktaPanel.månedsinntekt.heading"}),children:V.jsx(ut,{beløp:e.inntektPrMnd})}),V.jsx(bg,{alleKodeverk:a,inntektsmelding:e,alleBehandlinger:t,behandling:s}),V.jsx(nv,{inntektsmelding:e}),V.jsx(av,{ytelse:a.FagsakYtelseType.find(d=>d.kode===i.fagsakYtelseType)?.navn??"",startDatoPermisjon:e.startDatoPermisjon}),V.jsx(ev,{kildeSystem:e.kildeSystem}),V.jsx(Qg,{inntektsmelding:e,alleKodeverk:a}),V.jsx(tv,{inntektsmelding:e})]})]})};lv.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingInnhold",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"union",raw:`| (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: true; fødselsdato: string })
| (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: false })`,elements:[{name:"unknown"},{name:"unknown"}]}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},alleBehandlinger:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: number | null;
  uuid: string;
  versjon: number;
  type: foreldrepenger_behandlingslager_behandling_BehandlingType;
  status: foreldrepenger_behandlingslager_behandling_BehandlingStatus;
  fagsakId: number | null;
  opprettet: string;
  avsluttet: string | null;
  endret: string | null;
  endretAvBrukernavn: string | null;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  erAktivPapirsoknad: boolean;
  førsteÅrsak: tjenester_behandling_dto_behandling_BehandlingÅrsakDto | null;
  behandlingsfristTid: string | null;
  gjeldendeVedtak: boolean;
  erPaaVent: boolean | null;
  originalVedtaksDato: string | null;
  behandlingHenlagt: boolean;
  behandlingPaaVent: boolean | null;
  behandlingPåVent: boolean;
  fristBehandlingPåVent: string | null;
  fristBehandlingPaaVent: string | null;
  venteArsakKode: string | null;
  venteÅrsakKode: string | null;
  sprakkode: foreldrepenger_behandlingslager_geografisk_Språkkode | null;
  språkkode: foreldrepenger_behandlingslager_geografisk_Språkkode;
  behandlingKøet: boolean;
  ansvarligSaksbehandler: string | null;
  toTrinnsBehandling: boolean;
  behandlingsresultat: tjenester_behandling_dto_behandling_BehandlingsresultatDto | null;
  behandlingÅrsaker: Array<tjenester_behandling_dto_behandling_BehandlingÅrsakDto>;
  vilkår: Array<tjenester_behandling_vilkår_VilkårDto>;
  links: Array<rest_ResourceLink>;
  behandlingTillatteOperasjoner: tjenester_behandling_dto_BehandlingOperasjonerDto | null;
  brevmaler: Array<foreldrepenger_kontrakter_formidling_v3_BrevmalDto>;
  totrinnskontrollÅrsaker: Array<tjenester_behandling_vedtak_dto_TotrinnskontrollSkjermlenkeContextDto>;
  totrinnskontrollReadonly: boolean | null;
  risikoAksjonspunkt: tjenester_behandling_aksjonspunkt_AksjonspunktDto | null;
  kontrollResultat: tjenester_behandling_kontroll_dto_KontrollresultatDto | null;
  ugunstAksjonspunkt: boolean | null;
  behandlingKoet: boolean | null;
}`,signature:{properties:[{key:"id",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"versjon",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVSLU' | 'FVED' | 'IVED' | 'OPPRE' | 'UTRED'",elements:[{name:"literal",value:"'AVSLU'"},{name:"literal",value:"'FVED'"},{name:"literal",value:"'IVED'"},{name:"literal",value:"'OPPRE'"},{name:"literal",value:"'UTRED'"}],required:!0}},{key:"fagsakId",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endret",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAvBrukernavn",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"førsteÅrsak",value:{name:"union",raw:"tjenester_behandling_dto_behandling_BehandlingÅrsakDto | null",elements:[{name:"signature",type:"object",raw:`{
  erAutomatiskRevurdering: boolean | null;
  behandlingArsakType: foreldrepenger_behandlingslager_behandling_BehandlingÅrsakType;
  manueltOpprettet: boolean;
}`,signature:{properties:[{key:"erAutomatiskRevurdering",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"behandlingArsakType",value:{name:"union",raw:`| TEMP_FRA_FP_TILBAKE_ÅRSAK
| 'RE-LOV'
| 'RE-RGLF'
| 'RE-FEFAKTA'
| 'RE-PRSSL'
| 'RE-ANNET'
| 'RE-MDL'
| 'RE-OPTJ'
| 'RE-FRDLING'
| 'RE-INNTK'
| 'RE-FØDSEL'
| 'RE-DØD'
| 'RE-SRTB'
| 'RE-FRIST'
| 'RE-BER-GRUN'
| 'RE-KLAG-U-INNTK'
| 'RE-KLAG-M-INNTK'
| 'ETTER_KLAGE'
| 'RE-MF'
| 'RE-MFIP'
| 'RE-AVAB'
| 'RE-END-FRA-BRUKER'
| 'RE-END-INNTEKTSMELD'
| 'BERØRT-BEHANDLING'
| 'REBEREGN-FERIEPENGER'
| 'RE-UTSATT-START'
| 'RE-SATS-REGULERING'
| 'ENDRE-DEKNINGSGRAD'
| 'INFOBREV_BEHANDLING'
| 'INFOBREV_OPPHOLD'
| 'INFOBREV_PÅMINNELSE'
| 'OPPHØR-NYTT-BARN'
| 'RE-HENDELSE-FØDSEL'
| 'RE-HENDELSE-DØD-F'
| 'RE-HENDELSE-DØD-B'
| 'RE-HENDELSE-DØDFØD'
| 'RE-HENDELSE-UTFLYTTING'
| 'RE-VEDTAK-PSB'
| 'FEIL_PRAKSIS_UTSETTELSE'
| 'FEIL_PRAKSIS_IVERKS_UTSET'
| 'KLAGE_TILBAKE'
| 'RE-YTELSE'
| 'RE-REGISTEROPPL'
| 'KØET-BEHANDLING'
| 'RE-TILST-YT-INNVIL'
| 'RE-TILST-YT-OPPH'
| '-'`,elements:[{name:"union",raw:`| 'RE_KLAGE_NFP'
| 'RE_KLAGE_KA'
| 'RE_VILKÅR'
| 'RE_FORELDELSE'
| 'RE_FEILUTBETALT_BELØP_REDUSERT'
| 'FATTET_AV_ANNEN_INSTANS'`,elements:[{name:"literal",value:"'RE_KLAGE_NFP'"},{name:"literal",value:"'RE_KLAGE_KA'"},{name:"literal",value:"'RE_VILKÅR'"},{name:"literal",value:"'RE_FORELDELSE'"},{name:"literal",value:"'RE_FEILUTBETALT_BELØP_REDUSERT'"},{name:"literal",value:"'FATTET_AV_ANNEN_INSTANS'"}]},{name:"literal",value:"'RE-LOV'"},{name:"literal",value:"'RE-RGLF'"},{name:"literal",value:"'RE-FEFAKTA'"},{name:"literal",value:"'RE-PRSSL'"},{name:"literal",value:"'RE-ANNET'"},{name:"literal",value:"'RE-MDL'"},{name:"literal",value:"'RE-OPTJ'"},{name:"literal",value:"'RE-FRDLING'"},{name:"literal",value:"'RE-INNTK'"},{name:"literal",value:"'RE-FØDSEL'"},{name:"literal",value:"'RE-DØD'"},{name:"literal",value:"'RE-SRTB'"},{name:"literal",value:"'RE-FRIST'"},{name:"literal",value:"'RE-BER-GRUN'"},{name:"literal",value:"'RE-KLAG-U-INNTK'"},{name:"literal",value:"'RE-KLAG-M-INNTK'"},{name:"literal",value:"'ETTER_KLAGE'"},{name:"literal",value:"'RE-MF'"},{name:"literal",value:"'RE-MFIP'"},{name:"literal",value:"'RE-AVAB'"},{name:"literal",value:"'RE-END-FRA-BRUKER'"},{name:"literal",value:"'RE-END-INNTEKTSMELD'"},{name:"literal",value:"'BERØRT-BEHANDLING'"},{name:"literal",value:"'REBEREGN-FERIEPENGER'"},{name:"literal",value:"'RE-UTSATT-START'"},{name:"literal",value:"'RE-SATS-REGULERING'"},{name:"literal",value:"'ENDRE-DEKNINGSGRAD'"},{name:"literal",value:"'INFOBREV_BEHANDLING'"},{name:"literal",value:"'INFOBREV_OPPHOLD'"},{name:"literal",value:"'INFOBREV_PÅMINNELSE'"},{name:"literal",value:"'OPPHØR-NYTT-BARN'"},{name:"literal",value:"'RE-HENDELSE-FØDSEL'"},{name:"literal",value:"'RE-HENDELSE-DØD-F'"},{name:"literal",value:"'RE-HENDELSE-DØD-B'"},{name:"literal",value:"'RE-HENDELSE-DØDFØD'"},{name:"literal",value:"'RE-HENDELSE-UTFLYTTING'"},{name:"literal",value:"'RE-VEDTAK-PSB'"},{name:"literal",value:"'FEIL_PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'FEIL_PRAKSIS_IVERKS_UTSET'"},{name:"literal",value:"'KLAGE_TILBAKE'"},{name:"literal",value:"'RE-YTELSE'"},{name:"literal",value:"'RE-REGISTEROPPL'"},{name:"literal",value:"'KØET-BEHANDLING'"},{name:"literal",value:"'RE-TILST-YT-INNVIL'"},{name:"literal",value:"'RE-TILST-YT-OPPH'"},{name:"literal",value:"'-'"}],required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}}]}},{name:"null"}],required:!0}},{key:"behandlingsfristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"erPaaVent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"originalVedtaksDato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingPaaVent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fristBehandlingPaaVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteArsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"sprakkode",value:{name:"union",raw:"foreldrepenger_behandlingslager_geografisk_Språkkode | null",elements:[{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0},{name:"null"}],required:!0}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"union",raw:"tjenester_behandling_dto_behandling_BehandlingsresultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: foreldrepenger_behandlingslager_behandling_BehandlingResultatType;
  avslagsarsak: foreldrepenger_behandlingslager_behandling_vilkår_Avslagsårsak | null;
  avslagsarsakFritekst: string | null;
  rettenTil: foreldrepenger_behandlingslager_behandling_RettenTil | null;
  konsekvenserForYtelsen: Array<foreldrepenger_behandlingslager_behandling_KonsekvensForYtelsen> | null;
  vedtaksbrev: foreldrepenger_behandlingslager_behandling_vedtak_Vedtaksbrev | null;
  vedtaksbrevStatus: foreldrepenger_domene_vedtak_intern_VedtaksbrevStatus;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall: boolean | null;
  skjæringstidspunkt: tjenester_behandling_dto_behandling_SkjæringstidspunktDto | null;
  endretDekningsgrad: boolean | null;
  opphørsdato: string | null;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:`| TEMP_FP_TILBAKE_BEHANDLINGRESULTATTYPE
| 'IKKE_FASTSATT'
| 'INNVILGET'
| 'AVSLÅTT'
| 'OPPHØR'
| 'HENLAGT_SØKNAD_TRUKKET'
| 'HENLAGT_FEILOPPRETTET'
| 'HENLAGT_BRUKER_DØD'
| 'MERGET_OG_HENLAGT'
| 'HENLAGT_SØKNAD_MANGLER'
| 'FORELDREPENGER_ENDRET'
| 'FORELDREPENGER_SENERE'
| 'INGEN_ENDRING'
| 'MANGLER_BEREGNINGSREGLER'
| 'KLAGE_AVVIST'
| 'KLAGE_MEDHOLD'
| 'KLAGE_DELVIS_MEDHOLD'
| 'KLAGE_OMGJORT_UGUNST'
| 'KLAGE_YTELSESVEDTAK_OPPHEVET'
| 'KLAGE_YTELSESVEDTAK_STADFESTET'
| 'KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET'
| 'HENLAGT_KLAGE_TRUKKET'
| 'HJEMSENDE_UTEN_OPPHEVE'
| 'ANKE_AVVIST'
| 'ANKE_MEDHOLD'
| 'ANKE_DELVIS_MEDHOLD'
| 'ANKE_OMGJORT_UGUNST'
| 'ANKE_OPPHEVE_OG_HJEMSENDE'
| 'ANKE_HJEMSENDE_UTEN_OPPHEV'
| 'ANKE_YTELSESVEDTAK_STADFESTET'
| 'HENLAGT_ANKE_TRUKKET'
| 'INNSYN_INNVILGET'
| 'INNSYN_DELVIS_INNVILGET'
| 'INNSYN_AVVIST'
| 'HENLAGT_INNSYN_TRUKKET'`,elements:[{name:"union",raw:`| 'IKKE_FASTSATT'
| 'FASTSATT'
| 'HENLAGT_FEILOPPRETTET'
| 'HENLAGT_FEILOPPRETTET_MED_BREV'
| 'HENLAGT_FEILOPPRETTET_UTEN_BREV'
| 'HENLAGT_KRAVGRUNNLAG_NULLSTILT'
| 'HENLAGT_TEKNISK_VEDLIKEHOLD'
| 'HENLAGT'
| 'INGEN_TILBAKEBETALING'
| 'DELVIS_TILBAKEBETALING'
| 'FULL_TILBAKEBETALING'`,elements:[{name:"literal",value:"'IKKE_FASTSATT'"},{name:"literal",value:"'FASTSATT'"},{name:"literal",value:"'HENLAGT_FEILOPPRETTET'"},{name:"literal",value:"'HENLAGT_FEILOPPRETTET_MED_BREV'"},{name:"literal",value:"'HENLAGT_FEILOPPRETTET_UTEN_BREV'"},{name:"literal",value:"'HENLAGT_KRAVGRUNNLAG_NULLSTILT'"},{name:"literal",value:"'HENLAGT_TEKNISK_VEDLIKEHOLD'"},{name:"literal",value:"'HENLAGT'"},{name:"literal",value:"'INGEN_TILBAKEBETALING'"},{name:"literal",value:"'DELVIS_TILBAKEBETALING'"},{name:"literal",value:"'FULL_TILBAKEBETALING'"}]},{name:"literal",value:"'IKKE_FASTSATT'"},{name:"literal",value:"'INNVILGET'"},{name:"literal",value:"'AVSLÅTT'"},{name:"literal",value:"'OPPHØR'"},{name:"literal",value:"'HENLAGT_SØKNAD_TRUKKET'"},{name:"literal",value:"'HENLAGT_FEILOPPRETTET'"},{name:"literal",value:"'HENLAGT_BRUKER_DØD'"},{name:"literal",value:"'MERGET_OG_HENLAGT'"},{name:"literal",value:"'HENLAGT_SØKNAD_MANGLER'"},{name:"literal",value:"'FORELDREPENGER_ENDRET'"},{name:"literal",value:"'FORELDREPENGER_SENERE'"},{name:"literal",value:"'INGEN_ENDRING'"},{name:"literal",value:"'MANGLER_BEREGNINGSREGLER'"},{name:"literal",value:"'KLAGE_AVVIST'"},{name:"literal",value:"'KLAGE_MEDHOLD'"},{name:"literal",value:"'KLAGE_DELVIS_MEDHOLD'"},{name:"literal",value:"'KLAGE_OMGJORT_UGUNST'"},{name:"literal",value:"'KLAGE_YTELSESVEDTAK_OPPHEVET'"},{name:"literal",value:"'KLAGE_YTELSESVEDTAK_STADFESTET'"},{name:"literal",value:"'KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET'"},{name:"literal",value:"'HENLAGT_KLAGE_TRUKKET'"},{name:"literal",value:"'HJEMSENDE_UTEN_OPPHEVE'"},{name:"literal",value:"'ANKE_AVVIST'"},{name:"literal",value:"'ANKE_MEDHOLD'"},{name:"literal",value:"'ANKE_DELVIS_MEDHOLD'"},{name:"literal",value:"'ANKE_OMGJORT_UGUNST'"},{name:"literal",value:"'ANKE_OPPHEVE_OG_HJEMSENDE'"},{name:"literal",value:"'ANKE_HJEMSENDE_UTEN_OPPHEV'"},{name:"literal",value:"'ANKE_YTELSESVEDTAK_STADFESTET'"},{name:"literal",value:"'HENLAGT_ANKE_TRUKKET'"},{name:"literal",value:"'INNSYN_INNVILGET'"},{name:"literal",value:"'INNSYN_DELVIS_INNVILGET'"},{name:"literal",value:"'INNSYN_AVVIST'"},{name:"literal",value:"'HENLAGT_INNSYN_TRUKKET'"}],required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_vilkår_Avslagsårsak | null",elements:[{name:"union",raw:`| '1001'
| '1002'
| '1003'
| '1004'
| '1005'
| '1006'
| '1007'
| '1008'
| '1009'
| '1010'
| '1011'
| '1012'
| '1013'
| '1014'
| '1015'
| '1016'
| '1017'
| '1018'
| '1019'
| '1020'
| '1021'
| '1023'
| '1024'
| '1025'
| '1026'
| '1027'
| '1028'
| '1029'
| '1031'
| '1032'
| '1033'
| '1034'
| '1035'
| '1041'
| '1051'
| '1052'
| '1060'
| '1061'
| '1062'
| '1063'
| '1064'
| '1065'
| '1066'
| '1099'
| '-'`,elements:[{name:"literal",value:"'1001'"},{name:"literal",value:"'1002'"},{name:"literal",value:"'1003'"},{name:"literal",value:"'1004'"},{name:"literal",value:"'1005'"},{name:"literal",value:"'1006'"},{name:"literal",value:"'1007'"},{name:"literal",value:"'1008'"},{name:"literal",value:"'1009'"},{name:"literal",value:"'1010'"},{name:"literal",value:"'1011'"},{name:"literal",value:"'1012'"},{name:"literal",value:"'1013'"},{name:"literal",value:"'1014'"},{name:"literal",value:"'1015'"},{name:"literal",value:"'1016'"},{name:"literal",value:"'1017'"},{name:"literal",value:"'1018'"},{name:"literal",value:"'1019'"},{name:"literal",value:"'1020'"},{name:"literal",value:"'1021'"},{name:"literal",value:"'1023'"},{name:"literal",value:"'1024'"},{name:"literal",value:"'1025'"},{name:"literal",value:"'1026'"},{name:"literal",value:"'1027'"},{name:"literal",value:"'1028'"},{name:"literal",value:"'1029'"},{name:"literal",value:"'1031'"},{name:"literal",value:"'1032'"},{name:"literal",value:"'1033'"},{name:"literal",value:"'1034'"},{name:"literal",value:"'1035'"},{name:"literal",value:"'1041'"},{name:"literal",value:"'1051'"},{name:"literal",value:"'1052'"},{name:"literal",value:"'1060'"},{name:"literal",value:"'1061'"},{name:"literal",value:"'1062'"},{name:"literal",value:"'1063'"},{name:"literal",value:"'1064'"},{name:"literal",value:"'1065'"},{name:"literal",value:"'1066'"},{name:"literal",value:"'1099'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"rettenTil",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_RettenTil | null",elements:[{name:"union",raw:"'HAR_RETT_TIL_FP' | 'HAR_IKKE_RETT_TIL_FP' | '-'",elements:[{name:"literal",value:"'HAR_RETT_TIL_FP'"},{name:"literal",value:"'HAR_IKKE_RETT_TIL_FP'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"konsekvenserForYtelsen",value:{name:"union",raw:"Array<foreldrepenger_behandlingslager_behandling_KonsekvensForYtelsen> | null",elements:[{name:"Array",elements:[{name:"union",raw:`| 'FORELDREPENGER_OPPHØRER'
| 'ENDRING_I_BEREGNING'
| 'ENDRING_I_UTTAK'
| 'ENDRING_I_FORDELING_AV_YTELSEN'
| 'INGEN_ENDRING'
| '-'`,elements:[{name:"literal",value:"'FORELDREPENGER_OPPHØRER'"},{name:"literal",value:"'ENDRING_I_BEREGNING'"},{name:"literal",value:"'ENDRING_I_UTTAK'"},{name:"literal",value:"'ENDRING_I_FORDELING_AV_YTELSEN'"},{name:"literal",value:"'INGEN_ENDRING'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_KonsekvensForYtelsen>"},{name:"null"}],required:!0}},{key:"vedtaksbrev",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_vedtak_Vedtaksbrev | null",elements:[{name:"union",raw:"'AUTOMATISK' | 'FRITEKST' | 'INGEN' | '-'",elements:[{name:"literal",value:"'AUTOMATISK'"},{name:"literal",value:"'FRITEKST'"},{name:"literal",value:"'INGEN'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"skjæringstidspunkt",value:{name:"union",raw:"tjenester_behandling_dto_behandling_SkjæringstidspunktDto | null",elements:[{name:"signature",type:"object",raw:`{
  dato: string | null;
  utenMinsterett: boolean | null;
}`,signature:{properties:[{key:"dato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"utenMinsterett",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"endretDekningsgrad",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  erAutomatiskRevurdering: boolean | null;
  behandlingArsakType: foreldrepenger_behandlingslager_behandling_BehandlingÅrsakType;
  manueltOpprettet: boolean;
}`,signature:{properties:[{key:"erAutomatiskRevurdering",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"behandlingArsakType",value:{name:"union",raw:`| TEMP_FRA_FP_TILBAKE_ÅRSAK
| 'RE-LOV'
| 'RE-RGLF'
| 'RE-FEFAKTA'
| 'RE-PRSSL'
| 'RE-ANNET'
| 'RE-MDL'
| 'RE-OPTJ'
| 'RE-FRDLING'
| 'RE-INNTK'
| 'RE-FØDSEL'
| 'RE-DØD'
| 'RE-SRTB'
| 'RE-FRIST'
| 'RE-BER-GRUN'
| 'RE-KLAG-U-INNTK'
| 'RE-KLAG-M-INNTK'
| 'ETTER_KLAGE'
| 'RE-MF'
| 'RE-MFIP'
| 'RE-AVAB'
| 'RE-END-FRA-BRUKER'
| 'RE-END-INNTEKTSMELD'
| 'BERØRT-BEHANDLING'
| 'REBEREGN-FERIEPENGER'
| 'RE-UTSATT-START'
| 'RE-SATS-REGULERING'
| 'ENDRE-DEKNINGSGRAD'
| 'INFOBREV_BEHANDLING'
| 'INFOBREV_OPPHOLD'
| 'INFOBREV_PÅMINNELSE'
| 'OPPHØR-NYTT-BARN'
| 'RE-HENDELSE-FØDSEL'
| 'RE-HENDELSE-DØD-F'
| 'RE-HENDELSE-DØD-B'
| 'RE-HENDELSE-DØDFØD'
| 'RE-HENDELSE-UTFLYTTING'
| 'RE-VEDTAK-PSB'
| 'FEIL_PRAKSIS_UTSETTELSE'
| 'FEIL_PRAKSIS_IVERKS_UTSET'
| 'KLAGE_TILBAKE'
| 'RE-YTELSE'
| 'RE-REGISTEROPPL'
| 'KØET-BEHANDLING'
| 'RE-TILST-YT-INNVIL'
| 'RE-TILST-YT-OPPH'
| '-'`,elements:[{name:"union",raw:`| 'RE_KLAGE_NFP'
| 'RE_KLAGE_KA'
| 'RE_VILKÅR'
| 'RE_FORELDELSE'
| 'RE_FEILUTBETALT_BELØP_REDUSERT'
| 'FATTET_AV_ANNEN_INSTANS'`,elements:[{name:"literal",value:"'RE_KLAGE_NFP'"},{name:"literal",value:"'RE_KLAGE_KA'"},{name:"literal",value:"'RE_VILKÅR'"},{name:"literal",value:"'RE_FORELDELSE'"},{name:"literal",value:"'RE_FEILUTBETALT_BELØP_REDUSERT'"},{name:"literal",value:"'FATTET_AV_ANNEN_INSTANS'"}]},{name:"literal",value:"'RE-LOV'"},{name:"literal",value:"'RE-RGLF'"},{name:"literal",value:"'RE-FEFAKTA'"},{name:"literal",value:"'RE-PRSSL'"},{name:"literal",value:"'RE-ANNET'"},{name:"literal",value:"'RE-MDL'"},{name:"literal",value:"'RE-OPTJ'"},{name:"literal",value:"'RE-FRDLING'"},{name:"literal",value:"'RE-INNTK'"},{name:"literal",value:"'RE-FØDSEL'"},{name:"literal",value:"'RE-DØD'"},{name:"literal",value:"'RE-SRTB'"},{name:"literal",value:"'RE-FRIST'"},{name:"literal",value:"'RE-BER-GRUN'"},{name:"literal",value:"'RE-KLAG-U-INNTK'"},{name:"literal",value:"'RE-KLAG-M-INNTK'"},{name:"literal",value:"'ETTER_KLAGE'"},{name:"literal",value:"'RE-MF'"},{name:"literal",value:"'RE-MFIP'"},{name:"literal",value:"'RE-AVAB'"},{name:"literal",value:"'RE-END-FRA-BRUKER'"},{name:"literal",value:"'RE-END-INNTEKTSMELD'"},{name:"literal",value:"'BERØRT-BEHANDLING'"},{name:"literal",value:"'REBEREGN-FERIEPENGER'"},{name:"literal",value:"'RE-UTSATT-START'"},{name:"literal",value:"'RE-SATS-REGULERING'"},{name:"literal",value:"'ENDRE-DEKNINGSGRAD'"},{name:"literal",value:"'INFOBREV_BEHANDLING'"},{name:"literal",value:"'INFOBREV_OPPHOLD'"},{name:"literal",value:"'INFOBREV_PÅMINNELSE'"},{name:"literal",value:"'OPPHØR-NYTT-BARN'"},{name:"literal",value:"'RE-HENDELSE-FØDSEL'"},{name:"literal",value:"'RE-HENDELSE-DØD-F'"},{name:"literal",value:"'RE-HENDELSE-DØD-B'"},{name:"literal",value:"'RE-HENDELSE-DØDFØD'"},{name:"literal",value:"'RE-HENDELSE-UTFLYTTING'"},{name:"literal",value:"'RE-VEDTAK-PSB'"},{name:"literal",value:"'FEIL_PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'FEIL_PRAKSIS_IVERKS_UTSET'"},{name:"literal",value:"'KLAGE_TILBAKE'"},{name:"literal",value:"'RE-YTELSE'"},{name:"literal",value:"'RE-REGISTEROPPL'"},{name:"literal",value:"'KØET-BEHANDLING'"},{name:"literal",value:"'RE-TILST-YT-INNVIL'"},{name:"literal",value:"'RE-TILST-YT-OPPH'"},{name:"literal",value:"'-'"}],required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}}]}}],raw:"Array<tjenester_behandling_dto_behandling_BehandlingÅrsakDto>",required:!0}},{key:"vilkår",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: foreldrepenger_behandlingslager_behandling_vilkår_VilkårType;
  vilkarStatus: foreldrepenger_behandlingslager_behandling_vilkår_VilkårUtfallType;
  avslagKode: string | null;
  lovReferanse: string | null;
  overstyrbar: boolean;
  evaluering: string | null;
  input: string | null;
}`,signature:{properties:[{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
| 'FP_VK_11'
| 'FP_VK_16'
| 'FP_VK_2'
| 'FP_VK_2_F'
| 'FP_VK_2_L'
| 'FP_VK_3'
| 'FP_VK_4'
| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| 'FP_VK_34'
| 'FP_VK_21'
| 'FP_VK_23'
| 'FP_VK_41'
| 'SVP_VK_1'
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0}},{key:"vilkarStatus",value:{name:"union",raw:`| 'OPPFYLT'
| 'IKKE_OPPFYLT'
| 'IKKE_VURDERT'
| '-'`,elements:[{name:"literal",value:"'OPPFYLT'"},{name:"literal",value:"'IKKE_OPPFYLT'"},{name:"literal",value:"'IKKE_VURDERT'"},{name:"literal",value:"'-'"}],required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"lovReferanse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"overstyrbar",value:{name:"boolean",required:!0}},{key:"evaluering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"input",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:"Array<tjenester_behandling_vilkår_VilkårDto>",required:!0}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: {
    [key: string]: unknown;
  };
  type: rest_ResourceLink_HttpMethod;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"signature",type:"object",raw:`{
  [key: string]: unknown;
}`,signature:{properties:[{key:{name:"string"},value:{name:"unknown",required:!0}}]},required:!1}},{key:"type",value:{name:"union",raw:"'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT'",elements:[{name:"literal",value:"'DELETE'"},{name:"literal",value:"'GET'"},{name:"literal",value:"'PATCH'"},{name:"literal",value:"'POST'"},{name:"literal",value:"'PUT'"}],required:!0}}]}}],raw:"Array<rest_ResourceLink>",required:!0}},{key:"behandlingTillatteOperasjoner",value:{name:"union",raw:"tjenester_behandling_dto_BehandlingOperasjonerDto | null",elements:[{name:"signature",type:"object",raw:`{
  uuid: string | null;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanMerkesHaster: boolean;
  behandlingKanSettesPaVent: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingFraBeslutter: boolean;
  behandlingTilGodkjenning: boolean;
  vergeBehandlingsmeny: foreldrepenger_domene_person_verge_dto_VergeBehandlingsmenyEnum;
}`,signature:{properties:[{key:"uuid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanMerkesHaster",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"union",raw:"'SKJUL' | 'OPPRETT' | 'FJERN'",elements:[{name:"literal",value:"'SKJUL'"},{name:"literal",value:"'OPPRETT'"},{name:"literal",value:"'FJERN'"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig: boolean | null;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}],raw:"Array<foreldrepenger_kontrakter_formidling_v3_BrevmalDto>",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: Array<tjenester_behandling_vedtak_dto_TotrinnskontrollAksjonspunkterDto>;
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"string",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter: Array<tjenester_behandling_vedtak_dto_TotrinnskontrollAktivitetDto>;
  beregningDto: tjenester_behandling_vedtak_dto_TotrinnsBeregningDto | null;
  besluttersBegrunnelse: string | null;
  totrinnskontrollGodkjent: boolean;
  vurderPaNyttArsaker: Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>;
  uttakPerioder: Array<foreldrepenger_domene_uttak_UttakPeriodeEndringDto>;
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"opptjeningAktiviteter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktivitetType: string;
  erEndring: boolean;
  godkjent: boolean;
  arbeidsgiverReferanse: string | null;
  arbeidsgiverNavn: string | null;
  orgnr: string | null;
  privatpersonFødselsdato: string | null;
}`,signature:{properties:[{key:"aktivitetType",value:{name:"string",required:!0}},{key:"erEndring",value:{name:"boolean",required:!0}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"arbeidsgiverNavn",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"orgnr",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"privatpersonFødselsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:"Array<tjenester_behandling_vedtak_dto_TotrinnskontrollAktivitetDto>",required:!0}},{key:"beregningDto",value:{name:"union",raw:"tjenester_behandling_vedtak_dto_TotrinnsBeregningDto | null",elements:[{name:"signature",type:"object",raw:`{
  fastsattVarigEndringNaering: boolean | null;
  faktaOmBeregningTilfeller: Array<foreldrepenger_domene_modell_kodeverk_FaktaOmBeregningTilfelle> | null;
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"union",raw:"Array<foreldrepenger_domene_modell_kodeverk_FaktaOmBeregningTilfelle> | null",elements:[{name:"Array",elements:[{name:"union",raw:`| 'VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD'
| 'VURDER_SN_NY_I_ARBEIDSLIVET'
| 'VURDER_NYOPPSTARTET_FL'
| 'FASTSETT_MAANEDSINNTEKT_FL'
| 'FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'
| 'VURDER_LØNNSENDRING'
| 'FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'
| 'VURDER_AT_OG_FL_I_SAMME_ORGANISASJON'
| 'FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE'
| 'VURDER_ETTERLØNN_SLUTTPAKKE'
| 'FASTSETT_ETTERLØNN_SLUTTPAKKE'
| 'VURDER_MOTTAR_YTELSE'
| 'VURDER_BESTEBEREGNING'
| 'VURDER_MILITÆR_SIVILTJENESTE'
| 'VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT'
| 'FASTSETT_BG_KUN_YTELSE'
| 'TILSTØTENDE_YTELSE'
| 'FASTSETT_ENDRET_BEREGNINGSGRUNNLAG'
| '-'`,elements:[{name:"literal",value:"'VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD'"},{name:"literal",value:"'VURDER_SN_NY_I_ARBEIDSLIVET'"},{name:"literal",value:"'VURDER_NYOPPSTARTET_FL'"},{name:"literal",value:"'FASTSETT_MAANEDSINNTEKT_FL'"},{name:"literal",value:"'FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'VURDER_LØNNSENDRING'"},{name:"literal",value:"'FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'VURDER_AT_OG_FL_I_SAMME_ORGANISASJON'"},{name:"literal",value:"'FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE'"},{name:"literal",value:"'VURDER_ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'FASTSETT_ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'VURDER_MOTTAR_YTELSE'"},{name:"literal",value:"'VURDER_BESTEBEREGNING'"},{name:"literal",value:"'VURDER_MILITÆR_SIVILTJENESTE'"},{name:"literal",value:"'VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT'"},{name:"literal",value:"'FASTSETT_BG_KUN_YTELSE'"},{name:"literal",value:"'TILSTØTENDE_YTELSE'"},{name:"literal",value:"'FASTSETT_ENDRET_BEREGNINGSGRUNNLAG'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_domene_modell_kodeverk_FaktaOmBeregningTilfelle>"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!0}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>",required:!0}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  erSlettet: boolean | null;
  erEndret: boolean | null;
  erLagtTil: boolean | null;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"erSlettet",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"erEndret",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"erLagtTil",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}],raw:"Array<foreldrepenger_domene_uttak_UttakPeriodeEndringDto>",required:!0}}]}}],raw:"Array<tjenester_behandling_vedtak_dto_TotrinnskontrollAksjonspunkterDto>",required:!0}}]}}],raw:"Array<tjenester_behandling_vedtak_dto_TotrinnskontrollSkjermlenkeContextDto>",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"risikoAksjonspunkt",value:{name:"union",raw:"tjenester_behandling_aksjonspunkt_AksjonspunktDto | null",elements:[{name:"signature",type:"object",raw:`{
  definisjon: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktDefinisjon;
  status: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType: foreldrepenger_behandlingslager_behandling_vilkår_VilkårType | null;
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent: boolean | null;
  vurderPaNyttArsaker: Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak> | null;
  besluttersBegrunnelse: string | null;
  aksjonspunktType: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktType;
  kanLoses: boolean;
  erAktivt: boolean;
  fristTid: string | null;
  endretTidspunkt: string | null;
  endretAv: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"union",raw:`| '5001'
| '5027'
| '5004'
| '5005'
| '5006'
| '5007'
| '5008'
| '5011'
| '5012'
| '5013'
| '5014'
| '5015'
| '5016'
| '5017'
| '5002'
| '5026'
| '5028'
| '5030'
| '5031'
| '5033'
| '5034'
| '5003'
| '5035'
| '5037'
| '5038'
| '5039'
| '5040'
| '5043'
| '5046'
| '5047'
| '5049'
| '5051'
| '5052'
| '5054'
| '5055'
| '5057'
| '5058'
| '5059'
| '5060'
| '5061'
| '5068'
| '5064'
| '5065'
| '5063'
| '5066'
| '5071'
| '5072'
| '5069'
| '5073'
| '5076'
| '5077'
| '5085'
| '5082'
| '5084'
| '5029'
| '5086'
| '5089'
| '5041'
| '5062'
| '5091'
| '5092'
| '5095'
| '5096'
| '5074'
| '5101'
| '5102'
| '5103'
| '6002'
| '6003'
| '6004'
| '6005'
| '6006'
| '6008'
| '6009'
| '6010'
| '6011'
| '6065'
| '6014'
| '6015'
| '6045'
| '6016'
| '6018'
| '6017'
| '6103'
| '7001'
| '7002'
| '7003'
| '7005'
| '7007'
| '7008'
| '7011'
| '7013'
| '7014'
| '7020'
| '7030'
| '7033'
| '7037'
| '7039'
| '7040'
| "UNDEFINED('null')"
| '5009'
| '5019'
| '5020'
| '5021'
| '5022'
| '5023'
| '5024'
| '5025'
| '5032'
| '5036'
| '5042'
| '5044'
| '5045'
| '5048'
| '5050'
| '5053'
| '5056'
| '5067'
| '5070'
| '5075'
| '5078'
| '5079'
| '5080'
| '5081'
| '5083'
| '5087'
| '5088'
| '5090'
| '5093'
| '5094'
| '5097'
| '5098'
| '5099'
| '6007'
| '6012'
| '6013'
| '6068'
| '6070'
| '7004'
| '7006'
| '7009'
| '7015'
| '7016'
| '7017'
| '7018'
| '7019'
| '7021'
| '7022'
| '7023'
| '7024'
| '7025'
| '7026'
| '7027'
| '7028'
| '7029'
| '7032'
| '7034'
| '7035'
| '7036'
| '7038'
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_vilkår_VilkårType | null",elements:[{name:"union",raw:`| 'FP_VK_1'
| 'FP_VK_11'
| 'FP_VK_16'
| 'FP_VK_2'
| 'FP_VK_2_F'
| 'FP_VK_2_L'
| 'FP_VK_3'
| 'FP_VK_4'
| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| 'FP_VK_34'
| 'FP_VK_21'
| 'FP_VK_23'
| 'FP_VK_41'
| 'SVP_VK_1'
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0},{name:"null"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak> | null",elements:[{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>"},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:`| 'AUTO'
| 'MANU'
| 'OVST'
| 'SAOV'
| '-'`,elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"kontrollResultat",value:{name:"union",raw:"tjenester_behandling_kontroll_dto_KontrollresultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: foreldrepenger_behandlingslager_risikoklassifisering_Kontrollresultat;
  iayFaresignaler: tjenester_behandling_kontroll_dto_KontrollresultatDto_FaresignalgruppeDto | null;
  medlFaresignaler: tjenester_behandling_kontroll_dto_KontrollresultatDto_FaresignalgruppeDto | null;
  faresignalVurdering: foreldrepenger_behandlingslager_risikoklassifisering_FaresignalVurdering | null;
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"union",raw:`| 'HOY'
| 'IKKE_HOY'
| 'IKKE_KLASSIFISERT'
| '-'`,elements:[{name:"literal",value:"'HOY'"},{name:"literal",value:"'IKKE_HOY'"},{name:"literal",value:"'IKKE_KLASSIFISERT'"},{name:"literal",value:"'-'"}],required:!0}},{key:"iayFaresignaler",value:{name:"union",raw:"tjenester_behandling_kontroll_dto_KontrollresultatDto_FaresignalgruppeDto | null",elements:[{name:"signature",type:"object",raw:`{
  faresignaler: Array<string>;
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]}},{name:"null"}],required:!0}},{key:"medlFaresignaler",value:{name:"union",raw:"tjenester_behandling_kontroll_dto_KontrollresultatDto_FaresignalgruppeDto | null",elements:[{name:"signature",type:"object",raw:`{
  faresignaler: Array<string>;
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]}},{name:"null"}],required:!0}},{key:"faresignalVurdering",value:{name:"union",raw:"foreldrepenger_behandlingslager_risikoklassifisering_FaresignalVurdering | null",elements:[{name:"union",raw:`| 'INNVIRKNING'
| 'INNVILGET_REDUSERT'
| 'INNVILGET_UENDRET'
| 'AVSLAG_FARESIGNAL'
| 'AVSLAG_ANNET'
| 'INGEN_INNVIRKNING'
| '-'`,elements:[{name:"literal",value:"'INNVIRKNING'"},{name:"literal",value:"'INNVILGET_REDUSERT'"},{name:"literal",value:"'INNVILGET_UENDRET'"},{name:"literal",value:"'AVSLAG_FARESIGNAL'"},{name:"literal",value:"'AVSLAG_ANNET'"},{name:"literal",value:"'INGEN_INNVIRKNING'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"ugunstAksjonspunkt",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"behandlingKoet",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}],raw:"BehandlingAppKontekst[]"},description:""}}};const vb={"InntektsmeldingFaktaPanel.ingen":"Ingen inntektsmeldinger er registrert","InntektsmeldingFaktaPanel.tabell.header.innsendt":"Innsendt","InntektsmeldingFaktaPanel.tabell.header.arbeidsgiver":"Arbeidsgiver","InntektsmeldingFaktaPanel.tabell.header.skjæringstidspunkt":"Startdato","InntektsmeldingFaktaPanel.tabell.header.månedsinntekt":"Månedsi.","InntektsmeldingFaktaPanel.tabell.header.behandling":"Behandling","InntektsmeldingFaktaPanel.tabell.cell.behandling.denne":"Denne","InntektsmeldingFaktaPanel.tabell.cell.behandling.andre":"Andre","InntektsmeldingFaktaPanel.tabell.cell.behandling.ingen":"Ingen","InntektsmeldingFaktaPanel.modal.heading":"All informasjon fra PDF’en er tilgjengelig i faktapanelet","InntektsmeldingFaktaPanel.modal.trigger":"Åpne PDF","InntektsmeldingFaktaPanel.modal.body":"PDF’en du skal åpne inneholder ikke noe annet enn det som står i faktapanelet. Du kan likevel åpne den hvis du ønsker det.","InntektsmeldingFaktaPanel.modal.button.primary":"Last ned som PDF","InntektsmeldingFaktaPanel.modal.button.secondary":"Avbryt","InntektsmeldingFaktaPanel.behandling.heading":"Behandling","InntektsmeldingFaktaPanel.behandling.bruktKunIDenne":"Brukt i denne behandlingen","InntektsmeldingFaktaPanel.behandling.ikkeBruktINoen":"Ikke brukt i noen behandlinger","InntektsmeldingFaktaPanel.behandling.bruktIAndre":"Brukt i andre behandlinger","InntektsmeldingFaktaPanel.behandling.bruktIDenneOgFlere":"Brukt i denne og andre behandlinger","InntektsmeldingFaktaPanel.behandling.opprettet":"Opprettet","InntektsmeldingFaktaPanel.behandling.avsluttet":"Avsluttet","InntektsmeldingFaktaPanel.innsendingstidspunkt":"Inntektsmelding sendt","InntektsmeldingFaktaPanel.arbeidsgiver.heading":"Arbeidsgiver","InntektsmeldingFaktaPanel.arbeidsgiver.navn":"Virksomhetsnavn","InntektsmeldingFaktaPanel.arbeidsgiver.underenhet":"Org.nr. for underenhet","InntektsmeldingFaktaPanel.kontaktperson.heading":"Kontaktperson fra arbeidsgiver","InntektsmeldingFaktaPanel.kontaktperson.navn":"Navn","InntektsmeldingFaktaPanel.kontaktperson.telefon":"Telefonnummer","InntektsmeldingFaktaPanel.månedsinntekt.heading":"Månedsinntekt","InntektsmeldingFaktaPanel.startDato.heading":"Første dag med {ytelse}","InntektsmeldingFaktaPanel.startDato.fraArbeidsgiver":"Oppgitt av arbeidsgiver","InntektsmeldingFaktaPanel.kilde.heading":"Kilde","InntektsmeldingFaktaPanel.kilde.nav":"Nav","InntektsmeldingFaktaPanel.kilde.altinn":"Altinn","InntektsmeldingFaktaPanel.kilde.lps":"Arbeidsgiver sitt lønns- og personalsystem(LPS)","InntektsmeldingFaktaPanel.refusjon.heading":"Refusjon","InntektsmeldingFaktaPanel.refusjon.ingen":"Ingen refusjon","InntektsmeldingFaktaPanel.refusjon.endring.periode":"Refusjonsbeløp på {kroner} fra {fom}","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.heading":"Naturalytelser som faller bort","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.ingen":"Ingen","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.fom":"Fra og med","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.tom":"Til og med","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.verdi":"Verdi pr måned"},Hd=jn(vb),wu=({arbeidsgiverOpplysningerPerId:e,alleBehandlinger:l,inntektsmeldinger:t})=>{const{behandling:a}=Jd(),[i,s]=A.useState({orderBy:"innsendingstidspunkt",direction:"descending"}),m=f=>{s(i&&f===i.orderBy&&i.direction==="descending"?void 0:{orderBy:f,direction:i&&f===i.orderBy&&i.direction==="ascending"?"descending":"ascending"})},d=i?Eb({inntektsmeldinger:t,arbeidsgiverOpplysningerPerId:e,sortKey:i.orderBy,behandling:a}):t,v=i?.direction==="ascending"?d:d.toReversed();return v.length===0?V.jsx(Lm,{value:Hd,children:V.jsxs(it,{gap:"space-8",justify:"center",align:"center",className:Ct.ingenInntektsmeldinger,children:[V.jsx(ml,{children:V.jsx(Ie,{id:"InntektsmeldingFaktaPanel.ingen"})}),V.jsx(cT,{})]})}):V.jsx(Lm,{value:Hd,children:V.jsxs(Me,{sort:i,onSortChange:f=>m(f),children:[V.jsx(Me.Header,{children:V.jsxs(Me.Row,{children:[V.jsx(Me.ColumnHeader,{sortKey:"innsendingstidspunkt",sortable:!0,children:V.jsx(Ie,{id:"InntektsmeldingFaktaPanel.tabell.header.innsendt"})}),V.jsx(Me.ColumnHeader,{sortKey:"arbeidsgiverIdent",sortable:!0,children:V.jsx(Ie,{id:"InntektsmeldingFaktaPanel.tabell.header.arbeidsgiver"})}),V.jsx(Me.ColumnHeader,{sortKey:"startDatoPermisjon",sortable:!0,children:V.jsx(Ie,{id:"InntektsmeldingFaktaPanel.tabell.header.skjæringstidspunkt"})}),V.jsx(Me.ColumnHeader,{sortKey:"inntektPrMnd",sortable:!0,children:V.jsx(Ie,{id:"InntektsmeldingFaktaPanel.tabell.header.månedsinntekt"})}),V.jsx(Me.ColumnHeader,{sortKey:"tilknyttedeBehandlingIder",sortable:!0,children:V.jsx(Ie,{id:"InntektsmeldingFaktaPanel.tabell.header.behandling"})}),V.jsx(Me.HeaderCell,{})]})}),V.jsx(Me.Body,{children:v.map(f=>V.jsxs(Me.ExpandableRow,{expandOnRowClick:!0,contentGutter:"none",togglePlacement:"right",content:V.jsx(lv,{alleBehandlinger:l,arbeidsgiverOpplysningerPerId:e,inntektsmelding:f}),children:[V.jsx(Me.DataCell,{children:V.jsx(ol,{dateTimeString:f.innsendingstidspunkt,separator:"kl"})}),V.jsx(Me.DataCell,{children:e[f.arbeidsgiverIdent]?.navn??"-"}),V.jsx(Me.DataCell,{children:f.startDatoPermisjon?V.jsx(Jt,{dateString:f.startDatoPermisjon}):"-"}),V.jsx(Me.DataCell,{children:V.jsx(ut,{beløp:f.inntektPrMnd})}),V.jsx(Me.DataCell,{children:V.jsx(fb,{behandling:a,inntektsmelding:f})})]},`${f.journalpostId}-${f.internArbeidsforholdId}`))})]})})},Eb=({inntektsmeldinger:e,arbeidsgiverOpplysningerPerId:l,sortKey:t,behandling:a})=>t==="arbeidsgiverIdent"?e.slice().sort((i,s)=>{const m=l[i.arbeidsgiverIdent]?.navn,d=l[s.arbeidsgiverIdent]?.navn;return su(m,d)}):t==="tilknyttedeBehandlingIder"?e.slice().sort((i,s)=>{const m=Ou({behandling:a,inntektsmelding:i}),d=Ou({behandling:a,inntektsmelding:s});return su(m,d)}):e.slice().sort((i,s)=>{const m=i[t],d=s[t];return su(m,d)}),su=(e,l)=>e===void 0?-1:l===void 0?1:e<l?-1:e>l?1:0,fb=({behandling:e,inntektsmelding:l})=>{const t=Ou({behandling:e,inntektsmelding:l});return t==="DENNE"?V.jsxs(it,{gap:"space-4",align:"center",children:[V.jsx(xi,{className:Ct.behandlingCircleDenne}),V.jsx(Ie,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.denne"})]}):t==="ANDRE"?V.jsxs(it,{gap:"space-4",align:"center",children:[V.jsx(xi,{className:Ct.behandlingCircleAndre}),V.jsx(Ie,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.andre"})]}):V.jsxs(it,{gap:"space-4",align:"center",children:[V.jsx(xi,{className:Ct.behandlingCircleIngen}),V.jsx(Ie,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.ingen"})]})},Ou=({behandling:e,inntektsmelding:l})=>l.tilknyttedeBehandlingIder.includes(e.uuid)?"DENNE":l.tilknyttedeBehandlingIder.length>0?"ANDRE":"INGEN";wu.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingFaktaIndex",props:{inntektsmeldinger:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"AksjonspunktÅrsak | null",elements:[{name:"AksjonspunktÅrsak"},{name:"null"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  eksternArbeidsforholdId?: string | null;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak | null;
  saksbehandlersVurdering?: string | null;
  begrunnelse?: string | null;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: AktivNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: string[];
}>`}],raw:"Inntektsmelding[]"},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"union",raw:`| (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: true; fødselsdato: string })
| (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: false })`,elements:[{name:"unknown"},{name:"unknown"}]}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},alleBehandlinger:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: number | null;
  uuid: string;
  versjon: number;
  type: foreldrepenger_behandlingslager_behandling_BehandlingType;
  status: foreldrepenger_behandlingslager_behandling_BehandlingStatus;
  fagsakId: number | null;
  opprettet: string;
  avsluttet: string | null;
  endret: string | null;
  endretAvBrukernavn: string | null;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  erAktivPapirsoknad: boolean;
  førsteÅrsak: tjenester_behandling_dto_behandling_BehandlingÅrsakDto | null;
  behandlingsfristTid: string | null;
  gjeldendeVedtak: boolean;
  erPaaVent: boolean | null;
  originalVedtaksDato: string | null;
  behandlingHenlagt: boolean;
  behandlingPaaVent: boolean | null;
  behandlingPåVent: boolean;
  fristBehandlingPåVent: string | null;
  fristBehandlingPaaVent: string | null;
  venteArsakKode: string | null;
  venteÅrsakKode: string | null;
  sprakkode: foreldrepenger_behandlingslager_geografisk_Språkkode | null;
  språkkode: foreldrepenger_behandlingslager_geografisk_Språkkode;
  behandlingKøet: boolean;
  ansvarligSaksbehandler: string | null;
  toTrinnsBehandling: boolean;
  behandlingsresultat: tjenester_behandling_dto_behandling_BehandlingsresultatDto | null;
  behandlingÅrsaker: Array<tjenester_behandling_dto_behandling_BehandlingÅrsakDto>;
  vilkår: Array<tjenester_behandling_vilkår_VilkårDto>;
  links: Array<rest_ResourceLink>;
  behandlingTillatteOperasjoner: tjenester_behandling_dto_BehandlingOperasjonerDto | null;
  brevmaler: Array<foreldrepenger_kontrakter_formidling_v3_BrevmalDto>;
  totrinnskontrollÅrsaker: Array<tjenester_behandling_vedtak_dto_TotrinnskontrollSkjermlenkeContextDto>;
  totrinnskontrollReadonly: boolean | null;
  risikoAksjonspunkt: tjenester_behandling_aksjonspunkt_AksjonspunktDto | null;
  kontrollResultat: tjenester_behandling_kontroll_dto_KontrollresultatDto | null;
  ugunstAksjonspunkt: boolean | null;
  behandlingKoet: boolean | null;
}`,signature:{properties:[{key:"id",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"versjon",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVSLU' | 'FVED' | 'IVED' | 'OPPRE' | 'UTRED'",elements:[{name:"literal",value:"'AVSLU'"},{name:"literal",value:"'FVED'"},{name:"literal",value:"'IVED'"},{name:"literal",value:"'OPPRE'"},{name:"literal",value:"'UTRED'"}],required:!0}},{key:"fagsakId",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endret",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAvBrukernavn",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"førsteÅrsak",value:{name:"union",raw:"tjenester_behandling_dto_behandling_BehandlingÅrsakDto | null",elements:[{name:"signature",type:"object",raw:`{
  erAutomatiskRevurdering: boolean | null;
  behandlingArsakType: foreldrepenger_behandlingslager_behandling_BehandlingÅrsakType;
  manueltOpprettet: boolean;
}`,signature:{properties:[{key:"erAutomatiskRevurdering",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"behandlingArsakType",value:{name:"union",raw:`| TEMP_FRA_FP_TILBAKE_ÅRSAK
| 'RE-LOV'
| 'RE-RGLF'
| 'RE-FEFAKTA'
| 'RE-PRSSL'
| 'RE-ANNET'
| 'RE-MDL'
| 'RE-OPTJ'
| 'RE-FRDLING'
| 'RE-INNTK'
| 'RE-FØDSEL'
| 'RE-DØD'
| 'RE-SRTB'
| 'RE-FRIST'
| 'RE-BER-GRUN'
| 'RE-KLAG-U-INNTK'
| 'RE-KLAG-M-INNTK'
| 'ETTER_KLAGE'
| 'RE-MF'
| 'RE-MFIP'
| 'RE-AVAB'
| 'RE-END-FRA-BRUKER'
| 'RE-END-INNTEKTSMELD'
| 'BERØRT-BEHANDLING'
| 'REBEREGN-FERIEPENGER'
| 'RE-UTSATT-START'
| 'RE-SATS-REGULERING'
| 'ENDRE-DEKNINGSGRAD'
| 'INFOBREV_BEHANDLING'
| 'INFOBREV_OPPHOLD'
| 'INFOBREV_PÅMINNELSE'
| 'OPPHØR-NYTT-BARN'
| 'RE-HENDELSE-FØDSEL'
| 'RE-HENDELSE-DØD-F'
| 'RE-HENDELSE-DØD-B'
| 'RE-HENDELSE-DØDFØD'
| 'RE-HENDELSE-UTFLYTTING'
| 'RE-VEDTAK-PSB'
| 'FEIL_PRAKSIS_UTSETTELSE'
| 'FEIL_PRAKSIS_IVERKS_UTSET'
| 'KLAGE_TILBAKE'
| 'RE-YTELSE'
| 'RE-REGISTEROPPL'
| 'KØET-BEHANDLING'
| 'RE-TILST-YT-INNVIL'
| 'RE-TILST-YT-OPPH'
| '-'`,elements:[{name:"union",raw:`| 'RE_KLAGE_NFP'
| 'RE_KLAGE_KA'
| 'RE_VILKÅR'
| 'RE_FORELDELSE'
| 'RE_FEILUTBETALT_BELØP_REDUSERT'
| 'FATTET_AV_ANNEN_INSTANS'`,elements:[{name:"literal",value:"'RE_KLAGE_NFP'"},{name:"literal",value:"'RE_KLAGE_KA'"},{name:"literal",value:"'RE_VILKÅR'"},{name:"literal",value:"'RE_FORELDELSE'"},{name:"literal",value:"'RE_FEILUTBETALT_BELØP_REDUSERT'"},{name:"literal",value:"'FATTET_AV_ANNEN_INSTANS'"}]},{name:"literal",value:"'RE-LOV'"},{name:"literal",value:"'RE-RGLF'"},{name:"literal",value:"'RE-FEFAKTA'"},{name:"literal",value:"'RE-PRSSL'"},{name:"literal",value:"'RE-ANNET'"},{name:"literal",value:"'RE-MDL'"},{name:"literal",value:"'RE-OPTJ'"},{name:"literal",value:"'RE-FRDLING'"},{name:"literal",value:"'RE-INNTK'"},{name:"literal",value:"'RE-FØDSEL'"},{name:"literal",value:"'RE-DØD'"},{name:"literal",value:"'RE-SRTB'"},{name:"literal",value:"'RE-FRIST'"},{name:"literal",value:"'RE-BER-GRUN'"},{name:"literal",value:"'RE-KLAG-U-INNTK'"},{name:"literal",value:"'RE-KLAG-M-INNTK'"},{name:"literal",value:"'ETTER_KLAGE'"},{name:"literal",value:"'RE-MF'"},{name:"literal",value:"'RE-MFIP'"},{name:"literal",value:"'RE-AVAB'"},{name:"literal",value:"'RE-END-FRA-BRUKER'"},{name:"literal",value:"'RE-END-INNTEKTSMELD'"},{name:"literal",value:"'BERØRT-BEHANDLING'"},{name:"literal",value:"'REBEREGN-FERIEPENGER'"},{name:"literal",value:"'RE-UTSATT-START'"},{name:"literal",value:"'RE-SATS-REGULERING'"},{name:"literal",value:"'ENDRE-DEKNINGSGRAD'"},{name:"literal",value:"'INFOBREV_BEHANDLING'"},{name:"literal",value:"'INFOBREV_OPPHOLD'"},{name:"literal",value:"'INFOBREV_PÅMINNELSE'"},{name:"literal",value:"'OPPHØR-NYTT-BARN'"},{name:"literal",value:"'RE-HENDELSE-FØDSEL'"},{name:"literal",value:"'RE-HENDELSE-DØD-F'"},{name:"literal",value:"'RE-HENDELSE-DØD-B'"},{name:"literal",value:"'RE-HENDELSE-DØDFØD'"},{name:"literal",value:"'RE-HENDELSE-UTFLYTTING'"},{name:"literal",value:"'RE-VEDTAK-PSB'"},{name:"literal",value:"'FEIL_PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'FEIL_PRAKSIS_IVERKS_UTSET'"},{name:"literal",value:"'KLAGE_TILBAKE'"},{name:"literal",value:"'RE-YTELSE'"},{name:"literal",value:"'RE-REGISTEROPPL'"},{name:"literal",value:"'KØET-BEHANDLING'"},{name:"literal",value:"'RE-TILST-YT-INNVIL'"},{name:"literal",value:"'RE-TILST-YT-OPPH'"},{name:"literal",value:"'-'"}],required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}}]}},{name:"null"}],required:!0}},{key:"behandlingsfristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"erPaaVent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"originalVedtaksDato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingPaaVent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fristBehandlingPaaVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteArsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"sprakkode",value:{name:"union",raw:"foreldrepenger_behandlingslager_geografisk_Språkkode | null",elements:[{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0},{name:"null"}],required:!0}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"union",raw:"tjenester_behandling_dto_behandling_BehandlingsresultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: foreldrepenger_behandlingslager_behandling_BehandlingResultatType;
  avslagsarsak: foreldrepenger_behandlingslager_behandling_vilkår_Avslagsårsak | null;
  avslagsarsakFritekst: string | null;
  rettenTil: foreldrepenger_behandlingslager_behandling_RettenTil | null;
  konsekvenserForYtelsen: Array<foreldrepenger_behandlingslager_behandling_KonsekvensForYtelsen> | null;
  vedtaksbrev: foreldrepenger_behandlingslager_behandling_vedtak_Vedtaksbrev | null;
  vedtaksbrevStatus: foreldrepenger_domene_vedtak_intern_VedtaksbrevStatus;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall: boolean | null;
  skjæringstidspunkt: tjenester_behandling_dto_behandling_SkjæringstidspunktDto | null;
  endretDekningsgrad: boolean | null;
  opphørsdato: string | null;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:`| TEMP_FP_TILBAKE_BEHANDLINGRESULTATTYPE
| 'IKKE_FASTSATT'
| 'INNVILGET'
| 'AVSLÅTT'
| 'OPPHØR'
| 'HENLAGT_SØKNAD_TRUKKET'
| 'HENLAGT_FEILOPPRETTET'
| 'HENLAGT_BRUKER_DØD'
| 'MERGET_OG_HENLAGT'
| 'HENLAGT_SØKNAD_MANGLER'
| 'FORELDREPENGER_ENDRET'
| 'FORELDREPENGER_SENERE'
| 'INGEN_ENDRING'
| 'MANGLER_BEREGNINGSREGLER'
| 'KLAGE_AVVIST'
| 'KLAGE_MEDHOLD'
| 'KLAGE_DELVIS_MEDHOLD'
| 'KLAGE_OMGJORT_UGUNST'
| 'KLAGE_YTELSESVEDTAK_OPPHEVET'
| 'KLAGE_YTELSESVEDTAK_STADFESTET'
| 'KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET'
| 'HENLAGT_KLAGE_TRUKKET'
| 'HJEMSENDE_UTEN_OPPHEVE'
| 'ANKE_AVVIST'
| 'ANKE_MEDHOLD'
| 'ANKE_DELVIS_MEDHOLD'
| 'ANKE_OMGJORT_UGUNST'
| 'ANKE_OPPHEVE_OG_HJEMSENDE'
| 'ANKE_HJEMSENDE_UTEN_OPPHEV'
| 'ANKE_YTELSESVEDTAK_STADFESTET'
| 'HENLAGT_ANKE_TRUKKET'
| 'INNSYN_INNVILGET'
| 'INNSYN_DELVIS_INNVILGET'
| 'INNSYN_AVVIST'
| 'HENLAGT_INNSYN_TRUKKET'`,elements:[{name:"union",raw:`| 'IKKE_FASTSATT'
| 'FASTSATT'
| 'HENLAGT_FEILOPPRETTET'
| 'HENLAGT_FEILOPPRETTET_MED_BREV'
| 'HENLAGT_FEILOPPRETTET_UTEN_BREV'
| 'HENLAGT_KRAVGRUNNLAG_NULLSTILT'
| 'HENLAGT_TEKNISK_VEDLIKEHOLD'
| 'HENLAGT'
| 'INGEN_TILBAKEBETALING'
| 'DELVIS_TILBAKEBETALING'
| 'FULL_TILBAKEBETALING'`,elements:[{name:"literal",value:"'IKKE_FASTSATT'"},{name:"literal",value:"'FASTSATT'"},{name:"literal",value:"'HENLAGT_FEILOPPRETTET'"},{name:"literal",value:"'HENLAGT_FEILOPPRETTET_MED_BREV'"},{name:"literal",value:"'HENLAGT_FEILOPPRETTET_UTEN_BREV'"},{name:"literal",value:"'HENLAGT_KRAVGRUNNLAG_NULLSTILT'"},{name:"literal",value:"'HENLAGT_TEKNISK_VEDLIKEHOLD'"},{name:"literal",value:"'HENLAGT'"},{name:"literal",value:"'INGEN_TILBAKEBETALING'"},{name:"literal",value:"'DELVIS_TILBAKEBETALING'"},{name:"literal",value:"'FULL_TILBAKEBETALING'"}]},{name:"literal",value:"'IKKE_FASTSATT'"},{name:"literal",value:"'INNVILGET'"},{name:"literal",value:"'AVSLÅTT'"},{name:"literal",value:"'OPPHØR'"},{name:"literal",value:"'HENLAGT_SØKNAD_TRUKKET'"},{name:"literal",value:"'HENLAGT_FEILOPPRETTET'"},{name:"literal",value:"'HENLAGT_BRUKER_DØD'"},{name:"literal",value:"'MERGET_OG_HENLAGT'"},{name:"literal",value:"'HENLAGT_SØKNAD_MANGLER'"},{name:"literal",value:"'FORELDREPENGER_ENDRET'"},{name:"literal",value:"'FORELDREPENGER_SENERE'"},{name:"literal",value:"'INGEN_ENDRING'"},{name:"literal",value:"'MANGLER_BEREGNINGSREGLER'"},{name:"literal",value:"'KLAGE_AVVIST'"},{name:"literal",value:"'KLAGE_MEDHOLD'"},{name:"literal",value:"'KLAGE_DELVIS_MEDHOLD'"},{name:"literal",value:"'KLAGE_OMGJORT_UGUNST'"},{name:"literal",value:"'KLAGE_YTELSESVEDTAK_OPPHEVET'"},{name:"literal",value:"'KLAGE_YTELSESVEDTAK_STADFESTET'"},{name:"literal",value:"'KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET'"},{name:"literal",value:"'HENLAGT_KLAGE_TRUKKET'"},{name:"literal",value:"'HJEMSENDE_UTEN_OPPHEVE'"},{name:"literal",value:"'ANKE_AVVIST'"},{name:"literal",value:"'ANKE_MEDHOLD'"},{name:"literal",value:"'ANKE_DELVIS_MEDHOLD'"},{name:"literal",value:"'ANKE_OMGJORT_UGUNST'"},{name:"literal",value:"'ANKE_OPPHEVE_OG_HJEMSENDE'"},{name:"literal",value:"'ANKE_HJEMSENDE_UTEN_OPPHEV'"},{name:"literal",value:"'ANKE_YTELSESVEDTAK_STADFESTET'"},{name:"literal",value:"'HENLAGT_ANKE_TRUKKET'"},{name:"literal",value:"'INNSYN_INNVILGET'"},{name:"literal",value:"'INNSYN_DELVIS_INNVILGET'"},{name:"literal",value:"'INNSYN_AVVIST'"},{name:"literal",value:"'HENLAGT_INNSYN_TRUKKET'"}],required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_vilkår_Avslagsårsak | null",elements:[{name:"union",raw:`| '1001'
| '1002'
| '1003'
| '1004'
| '1005'
| '1006'
| '1007'
| '1008'
| '1009'
| '1010'
| '1011'
| '1012'
| '1013'
| '1014'
| '1015'
| '1016'
| '1017'
| '1018'
| '1019'
| '1020'
| '1021'
| '1023'
| '1024'
| '1025'
| '1026'
| '1027'
| '1028'
| '1029'
| '1031'
| '1032'
| '1033'
| '1034'
| '1035'
| '1041'
| '1051'
| '1052'
| '1060'
| '1061'
| '1062'
| '1063'
| '1064'
| '1065'
| '1066'
| '1099'
| '-'`,elements:[{name:"literal",value:"'1001'"},{name:"literal",value:"'1002'"},{name:"literal",value:"'1003'"},{name:"literal",value:"'1004'"},{name:"literal",value:"'1005'"},{name:"literal",value:"'1006'"},{name:"literal",value:"'1007'"},{name:"literal",value:"'1008'"},{name:"literal",value:"'1009'"},{name:"literal",value:"'1010'"},{name:"literal",value:"'1011'"},{name:"literal",value:"'1012'"},{name:"literal",value:"'1013'"},{name:"literal",value:"'1014'"},{name:"literal",value:"'1015'"},{name:"literal",value:"'1016'"},{name:"literal",value:"'1017'"},{name:"literal",value:"'1018'"},{name:"literal",value:"'1019'"},{name:"literal",value:"'1020'"},{name:"literal",value:"'1021'"},{name:"literal",value:"'1023'"},{name:"literal",value:"'1024'"},{name:"literal",value:"'1025'"},{name:"literal",value:"'1026'"},{name:"literal",value:"'1027'"},{name:"literal",value:"'1028'"},{name:"literal",value:"'1029'"},{name:"literal",value:"'1031'"},{name:"literal",value:"'1032'"},{name:"literal",value:"'1033'"},{name:"literal",value:"'1034'"},{name:"literal",value:"'1035'"},{name:"literal",value:"'1041'"},{name:"literal",value:"'1051'"},{name:"literal",value:"'1052'"},{name:"literal",value:"'1060'"},{name:"literal",value:"'1061'"},{name:"literal",value:"'1062'"},{name:"literal",value:"'1063'"},{name:"literal",value:"'1064'"},{name:"literal",value:"'1065'"},{name:"literal",value:"'1066'"},{name:"literal",value:"'1099'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"rettenTil",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_RettenTil | null",elements:[{name:"union",raw:"'HAR_RETT_TIL_FP' | 'HAR_IKKE_RETT_TIL_FP' | '-'",elements:[{name:"literal",value:"'HAR_RETT_TIL_FP'"},{name:"literal",value:"'HAR_IKKE_RETT_TIL_FP'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"konsekvenserForYtelsen",value:{name:"union",raw:"Array<foreldrepenger_behandlingslager_behandling_KonsekvensForYtelsen> | null",elements:[{name:"Array",elements:[{name:"union",raw:`| 'FORELDREPENGER_OPPHØRER'
| 'ENDRING_I_BEREGNING'
| 'ENDRING_I_UTTAK'
| 'ENDRING_I_FORDELING_AV_YTELSEN'
| 'INGEN_ENDRING'
| '-'`,elements:[{name:"literal",value:"'FORELDREPENGER_OPPHØRER'"},{name:"literal",value:"'ENDRING_I_BEREGNING'"},{name:"literal",value:"'ENDRING_I_UTTAK'"},{name:"literal",value:"'ENDRING_I_FORDELING_AV_YTELSEN'"},{name:"literal",value:"'INGEN_ENDRING'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_KonsekvensForYtelsen>"},{name:"null"}],required:!0}},{key:"vedtaksbrev",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_vedtak_Vedtaksbrev | null",elements:[{name:"union",raw:"'AUTOMATISK' | 'FRITEKST' | 'INGEN' | '-'",elements:[{name:"literal",value:"'AUTOMATISK'"},{name:"literal",value:"'FRITEKST'"},{name:"literal",value:"'INGEN'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"skjæringstidspunkt",value:{name:"union",raw:"tjenester_behandling_dto_behandling_SkjæringstidspunktDto | null",elements:[{name:"signature",type:"object",raw:`{
  dato: string | null;
  utenMinsterett: boolean | null;
}`,signature:{properties:[{key:"dato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"utenMinsterett",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"endretDekningsgrad",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  erAutomatiskRevurdering: boolean | null;
  behandlingArsakType: foreldrepenger_behandlingslager_behandling_BehandlingÅrsakType;
  manueltOpprettet: boolean;
}`,signature:{properties:[{key:"erAutomatiskRevurdering",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"behandlingArsakType",value:{name:"union",raw:`| TEMP_FRA_FP_TILBAKE_ÅRSAK
| 'RE-LOV'
| 'RE-RGLF'
| 'RE-FEFAKTA'
| 'RE-PRSSL'
| 'RE-ANNET'
| 'RE-MDL'
| 'RE-OPTJ'
| 'RE-FRDLING'
| 'RE-INNTK'
| 'RE-FØDSEL'
| 'RE-DØD'
| 'RE-SRTB'
| 'RE-FRIST'
| 'RE-BER-GRUN'
| 'RE-KLAG-U-INNTK'
| 'RE-KLAG-M-INNTK'
| 'ETTER_KLAGE'
| 'RE-MF'
| 'RE-MFIP'
| 'RE-AVAB'
| 'RE-END-FRA-BRUKER'
| 'RE-END-INNTEKTSMELD'
| 'BERØRT-BEHANDLING'
| 'REBEREGN-FERIEPENGER'
| 'RE-UTSATT-START'
| 'RE-SATS-REGULERING'
| 'ENDRE-DEKNINGSGRAD'
| 'INFOBREV_BEHANDLING'
| 'INFOBREV_OPPHOLD'
| 'INFOBREV_PÅMINNELSE'
| 'OPPHØR-NYTT-BARN'
| 'RE-HENDELSE-FØDSEL'
| 'RE-HENDELSE-DØD-F'
| 'RE-HENDELSE-DØD-B'
| 'RE-HENDELSE-DØDFØD'
| 'RE-HENDELSE-UTFLYTTING'
| 'RE-VEDTAK-PSB'
| 'FEIL_PRAKSIS_UTSETTELSE'
| 'FEIL_PRAKSIS_IVERKS_UTSET'
| 'KLAGE_TILBAKE'
| 'RE-YTELSE'
| 'RE-REGISTEROPPL'
| 'KØET-BEHANDLING'
| 'RE-TILST-YT-INNVIL'
| 'RE-TILST-YT-OPPH'
| '-'`,elements:[{name:"union",raw:`| 'RE_KLAGE_NFP'
| 'RE_KLAGE_KA'
| 'RE_VILKÅR'
| 'RE_FORELDELSE'
| 'RE_FEILUTBETALT_BELØP_REDUSERT'
| 'FATTET_AV_ANNEN_INSTANS'`,elements:[{name:"literal",value:"'RE_KLAGE_NFP'"},{name:"literal",value:"'RE_KLAGE_KA'"},{name:"literal",value:"'RE_VILKÅR'"},{name:"literal",value:"'RE_FORELDELSE'"},{name:"literal",value:"'RE_FEILUTBETALT_BELØP_REDUSERT'"},{name:"literal",value:"'FATTET_AV_ANNEN_INSTANS'"}]},{name:"literal",value:"'RE-LOV'"},{name:"literal",value:"'RE-RGLF'"},{name:"literal",value:"'RE-FEFAKTA'"},{name:"literal",value:"'RE-PRSSL'"},{name:"literal",value:"'RE-ANNET'"},{name:"literal",value:"'RE-MDL'"},{name:"literal",value:"'RE-OPTJ'"},{name:"literal",value:"'RE-FRDLING'"},{name:"literal",value:"'RE-INNTK'"},{name:"literal",value:"'RE-FØDSEL'"},{name:"literal",value:"'RE-DØD'"},{name:"literal",value:"'RE-SRTB'"},{name:"literal",value:"'RE-FRIST'"},{name:"literal",value:"'RE-BER-GRUN'"},{name:"literal",value:"'RE-KLAG-U-INNTK'"},{name:"literal",value:"'RE-KLAG-M-INNTK'"},{name:"literal",value:"'ETTER_KLAGE'"},{name:"literal",value:"'RE-MF'"},{name:"literal",value:"'RE-MFIP'"},{name:"literal",value:"'RE-AVAB'"},{name:"literal",value:"'RE-END-FRA-BRUKER'"},{name:"literal",value:"'RE-END-INNTEKTSMELD'"},{name:"literal",value:"'BERØRT-BEHANDLING'"},{name:"literal",value:"'REBEREGN-FERIEPENGER'"},{name:"literal",value:"'RE-UTSATT-START'"},{name:"literal",value:"'RE-SATS-REGULERING'"},{name:"literal",value:"'ENDRE-DEKNINGSGRAD'"},{name:"literal",value:"'INFOBREV_BEHANDLING'"},{name:"literal",value:"'INFOBREV_OPPHOLD'"},{name:"literal",value:"'INFOBREV_PÅMINNELSE'"},{name:"literal",value:"'OPPHØR-NYTT-BARN'"},{name:"literal",value:"'RE-HENDELSE-FØDSEL'"},{name:"literal",value:"'RE-HENDELSE-DØD-F'"},{name:"literal",value:"'RE-HENDELSE-DØD-B'"},{name:"literal",value:"'RE-HENDELSE-DØDFØD'"},{name:"literal",value:"'RE-HENDELSE-UTFLYTTING'"},{name:"literal",value:"'RE-VEDTAK-PSB'"},{name:"literal",value:"'FEIL_PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'FEIL_PRAKSIS_IVERKS_UTSET'"},{name:"literal",value:"'KLAGE_TILBAKE'"},{name:"literal",value:"'RE-YTELSE'"},{name:"literal",value:"'RE-REGISTEROPPL'"},{name:"literal",value:"'KØET-BEHANDLING'"},{name:"literal",value:"'RE-TILST-YT-INNVIL'"},{name:"literal",value:"'RE-TILST-YT-OPPH'"},{name:"literal",value:"'-'"}],required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}}]}}],raw:"Array<tjenester_behandling_dto_behandling_BehandlingÅrsakDto>",required:!0}},{key:"vilkår",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: foreldrepenger_behandlingslager_behandling_vilkår_VilkårType;
  vilkarStatus: foreldrepenger_behandlingslager_behandling_vilkår_VilkårUtfallType;
  avslagKode: string | null;
  lovReferanse: string | null;
  overstyrbar: boolean;
  evaluering: string | null;
  input: string | null;
}`,signature:{properties:[{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
| 'FP_VK_11'
| 'FP_VK_16'
| 'FP_VK_2'
| 'FP_VK_2_F'
| 'FP_VK_2_L'
| 'FP_VK_3'
| 'FP_VK_4'
| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| 'FP_VK_34'
| 'FP_VK_21'
| 'FP_VK_23'
| 'FP_VK_41'
| 'SVP_VK_1'
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0}},{key:"vilkarStatus",value:{name:"union",raw:`| 'OPPFYLT'
| 'IKKE_OPPFYLT'
| 'IKKE_VURDERT'
| '-'`,elements:[{name:"literal",value:"'OPPFYLT'"},{name:"literal",value:"'IKKE_OPPFYLT'"},{name:"literal",value:"'IKKE_VURDERT'"},{name:"literal",value:"'-'"}],required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"lovReferanse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"overstyrbar",value:{name:"boolean",required:!0}},{key:"evaluering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"input",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:"Array<tjenester_behandling_vilkår_VilkårDto>",required:!0}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: {
    [key: string]: unknown;
  };
  type: rest_ResourceLink_HttpMethod;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"signature",type:"object",raw:`{
  [key: string]: unknown;
}`,signature:{properties:[{key:{name:"string"},value:{name:"unknown",required:!0}}]},required:!1}},{key:"type",value:{name:"union",raw:"'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT'",elements:[{name:"literal",value:"'DELETE'"},{name:"literal",value:"'GET'"},{name:"literal",value:"'PATCH'"},{name:"literal",value:"'POST'"},{name:"literal",value:"'PUT'"}],required:!0}}]}}],raw:"Array<rest_ResourceLink>",required:!0}},{key:"behandlingTillatteOperasjoner",value:{name:"union",raw:"tjenester_behandling_dto_BehandlingOperasjonerDto | null",elements:[{name:"signature",type:"object",raw:`{
  uuid: string | null;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanMerkesHaster: boolean;
  behandlingKanSettesPaVent: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingFraBeslutter: boolean;
  behandlingTilGodkjenning: boolean;
  vergeBehandlingsmeny: foreldrepenger_domene_person_verge_dto_VergeBehandlingsmenyEnum;
}`,signature:{properties:[{key:"uuid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanMerkesHaster",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"union",raw:"'SKJUL' | 'OPPRETT' | 'FJERN'",elements:[{name:"literal",value:"'SKJUL'"},{name:"literal",value:"'OPPRETT'"},{name:"literal",value:"'FJERN'"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig: boolean | null;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}],raw:"Array<foreldrepenger_kontrakter_formidling_v3_BrevmalDto>",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: string;
  totrinnskontrollAksjonspunkter: Array<tjenester_behandling_vedtak_dto_TotrinnskontrollAksjonspunkterDto>;
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"string",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter: Array<tjenester_behandling_vedtak_dto_TotrinnskontrollAktivitetDto>;
  beregningDto: tjenester_behandling_vedtak_dto_TotrinnsBeregningDto | null;
  besluttersBegrunnelse: string | null;
  totrinnskontrollGodkjent: boolean;
  vurderPaNyttArsaker: Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>;
  uttakPerioder: Array<foreldrepenger_domene_uttak_UttakPeriodeEndringDto>;
}`,signature:{properties:[{key:"aksjonspunktKode",value:{name:"string",required:!0}},{key:"opptjeningAktiviteter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktivitetType: string;
  erEndring: boolean;
  godkjent: boolean;
  arbeidsgiverReferanse: string | null;
  arbeidsgiverNavn: string | null;
  orgnr: string | null;
  privatpersonFødselsdato: string | null;
}`,signature:{properties:[{key:"aktivitetType",value:{name:"string",required:!0}},{key:"erEndring",value:{name:"boolean",required:!0}},{key:"godkjent",value:{name:"boolean",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"arbeidsgiverNavn",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"orgnr",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"privatpersonFødselsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:"Array<tjenester_behandling_vedtak_dto_TotrinnskontrollAktivitetDto>",required:!0}},{key:"beregningDto",value:{name:"union",raw:"tjenester_behandling_vedtak_dto_TotrinnsBeregningDto | null",elements:[{name:"signature",type:"object",raw:`{
  fastsattVarigEndringNaering: boolean | null;
  faktaOmBeregningTilfeller: Array<foreldrepenger_domene_modell_kodeverk_FaktaOmBeregningTilfelle> | null;
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"union",raw:"Array<foreldrepenger_domene_modell_kodeverk_FaktaOmBeregningTilfelle> | null",elements:[{name:"Array",elements:[{name:"union",raw:`| 'VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD'
| 'VURDER_SN_NY_I_ARBEIDSLIVET'
| 'VURDER_NYOPPSTARTET_FL'
| 'FASTSETT_MAANEDSINNTEKT_FL'
| 'FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'
| 'VURDER_LØNNSENDRING'
| 'FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'
| 'VURDER_AT_OG_FL_I_SAMME_ORGANISASJON'
| 'FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE'
| 'VURDER_ETTERLØNN_SLUTTPAKKE'
| 'FASTSETT_ETTERLØNN_SLUTTPAKKE'
| 'VURDER_MOTTAR_YTELSE'
| 'VURDER_BESTEBEREGNING'
| 'VURDER_MILITÆR_SIVILTJENESTE'
| 'VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT'
| 'FASTSETT_BG_KUN_YTELSE'
| 'TILSTØTENDE_YTELSE'
| 'FASTSETT_ENDRET_BEREGNINGSGRUNNLAG'
| '-'`,elements:[{name:"literal",value:"'VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD'"},{name:"literal",value:"'VURDER_SN_NY_I_ARBEIDSLIVET'"},{name:"literal",value:"'VURDER_NYOPPSTARTET_FL'"},{name:"literal",value:"'FASTSETT_MAANEDSINNTEKT_FL'"},{name:"literal",value:"'FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'VURDER_LØNNSENDRING'"},{name:"literal",value:"'FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'VURDER_AT_OG_FL_I_SAMME_ORGANISASJON'"},{name:"literal",value:"'FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE'"},{name:"literal",value:"'VURDER_ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'FASTSETT_ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'VURDER_MOTTAR_YTELSE'"},{name:"literal",value:"'VURDER_BESTEBEREGNING'"},{name:"literal",value:"'VURDER_MILITÆR_SIVILTJENESTE'"},{name:"literal",value:"'VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT'"},{name:"literal",value:"'FASTSETT_BG_KUN_YTELSE'"},{name:"literal",value:"'TILSTØTENDE_YTELSE'"},{name:"literal",value:"'FASTSETT_ENDRET_BEREGNINGSGRUNNLAG'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_domene_modell_kodeverk_FaktaOmBeregningTilfelle>"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!0}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>",required:!0}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  erSlettet: boolean | null;
  erEndret: boolean | null;
  erLagtTil: boolean | null;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"erSlettet",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"erEndret",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"erLagtTil",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}],raw:"Array<foreldrepenger_domene_uttak_UttakPeriodeEndringDto>",required:!0}}]}}],raw:"Array<tjenester_behandling_vedtak_dto_TotrinnskontrollAksjonspunkterDto>",required:!0}}]}}],raw:"Array<tjenester_behandling_vedtak_dto_TotrinnskontrollSkjermlenkeContextDto>",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"risikoAksjonspunkt",value:{name:"union",raw:"tjenester_behandling_aksjonspunkt_AksjonspunktDto | null",elements:[{name:"signature",type:"object",raw:`{
  definisjon: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktDefinisjon;
  status: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType: foreldrepenger_behandlingslager_behandling_vilkår_VilkårType | null;
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent: boolean | null;
  vurderPaNyttArsaker: Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak> | null;
  besluttersBegrunnelse: string | null;
  aksjonspunktType: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktType;
  kanLoses: boolean;
  erAktivt: boolean;
  fristTid: string | null;
  endretTidspunkt: string | null;
  endretAv: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"union",raw:`| '5001'
| '5027'
| '5004'
| '5005'
| '5006'
| '5007'
| '5008'
| '5011'
| '5012'
| '5013'
| '5014'
| '5015'
| '5016'
| '5017'
| '5002'
| '5026'
| '5028'
| '5030'
| '5031'
| '5033'
| '5034'
| '5003'
| '5035'
| '5037'
| '5038'
| '5039'
| '5040'
| '5043'
| '5046'
| '5047'
| '5049'
| '5051'
| '5052'
| '5054'
| '5055'
| '5057'
| '5058'
| '5059'
| '5060'
| '5061'
| '5068'
| '5064'
| '5065'
| '5063'
| '5066'
| '5071'
| '5072'
| '5069'
| '5073'
| '5076'
| '5077'
| '5085'
| '5082'
| '5084'
| '5029'
| '5086'
| '5089'
| '5041'
| '5062'
| '5091'
| '5092'
| '5095'
| '5096'
| '5074'
| '5101'
| '5102'
| '5103'
| '6002'
| '6003'
| '6004'
| '6005'
| '6006'
| '6008'
| '6009'
| '6010'
| '6011'
| '6065'
| '6014'
| '6015'
| '6045'
| '6016'
| '6018'
| '6017'
| '6103'
| '7001'
| '7002'
| '7003'
| '7005'
| '7007'
| '7008'
| '7011'
| '7013'
| '7014'
| '7020'
| '7030'
| '7033'
| '7037'
| '7039'
| '7040'
| "UNDEFINED('null')"
| '5009'
| '5019'
| '5020'
| '5021'
| '5022'
| '5023'
| '5024'
| '5025'
| '5032'
| '5036'
| '5042'
| '5044'
| '5045'
| '5048'
| '5050'
| '5053'
| '5056'
| '5067'
| '5070'
| '5075'
| '5078'
| '5079'
| '5080'
| '5081'
| '5083'
| '5087'
| '5088'
| '5090'
| '5093'
| '5094'
| '5097'
| '5098'
| '5099'
| '6007'
| '6012'
| '6013'
| '6068'
| '6070'
| '7004'
| '7006'
| '7009'
| '7015'
| '7016'
| '7017'
| '7018'
| '7019'
| '7021'
| '7022'
| '7023'
| '7024'
| '7025'
| '7026'
| '7027'
| '7028'
| '7029'
| '7032'
| '7034'
| '7035'
| '7036'
| '7038'
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_vilkår_VilkårType | null",elements:[{name:"union",raw:`| 'FP_VK_1'
| 'FP_VK_11'
| 'FP_VK_16'
| 'FP_VK_2'
| 'FP_VK_2_F'
| 'FP_VK_2_L'
| 'FP_VK_3'
| 'FP_VK_4'
| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| 'FP_VK_34'
| 'FP_VK_21'
| 'FP_VK_23'
| 'FP_VK_41'
| 'SVP_VK_1'
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0},{name:"null"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak> | null",elements:[{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>"},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:`| 'AUTO'
| 'MANU'
| 'OVST'
| 'SAOV'
| '-'`,elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"kontrollResultat",value:{name:"union",raw:"tjenester_behandling_kontroll_dto_KontrollresultatDto | null",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: foreldrepenger_behandlingslager_risikoklassifisering_Kontrollresultat;
  iayFaresignaler: tjenester_behandling_kontroll_dto_KontrollresultatDto_FaresignalgruppeDto | null;
  medlFaresignaler: tjenester_behandling_kontroll_dto_KontrollresultatDto_FaresignalgruppeDto | null;
  faresignalVurdering: foreldrepenger_behandlingslager_risikoklassifisering_FaresignalVurdering | null;
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"union",raw:`| 'HOY'
| 'IKKE_HOY'
| 'IKKE_KLASSIFISERT'
| '-'`,elements:[{name:"literal",value:"'HOY'"},{name:"literal",value:"'IKKE_HOY'"},{name:"literal",value:"'IKKE_KLASSIFISERT'"},{name:"literal",value:"'-'"}],required:!0}},{key:"iayFaresignaler",value:{name:"union",raw:"tjenester_behandling_kontroll_dto_KontrollresultatDto_FaresignalgruppeDto | null",elements:[{name:"signature",type:"object",raw:`{
  faresignaler: Array<string>;
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]}},{name:"null"}],required:!0}},{key:"medlFaresignaler",value:{name:"union",raw:"tjenester_behandling_kontroll_dto_KontrollresultatDto_FaresignalgruppeDto | null",elements:[{name:"signature",type:"object",raw:`{
  faresignaler: Array<string>;
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]}},{name:"null"}],required:!0}},{key:"faresignalVurdering",value:{name:"union",raw:"foreldrepenger_behandlingslager_risikoklassifisering_FaresignalVurdering | null",elements:[{name:"union",raw:`| 'INNVIRKNING'
| 'INNVILGET_REDUSERT'
| 'INNVILGET_UENDRET'
| 'AVSLAG_FARESIGNAL'
| 'AVSLAG_ANNET'
| 'INGEN_INNVIRKNING'
| '-'`,elements:[{name:"literal",value:"'INNVIRKNING'"},{name:"literal",value:"'INNVILGET_REDUSERT'"},{name:"literal",value:"'INNVILGET_UENDRET'"},{name:"literal",value:"'AVSLAG_FARESIGNAL'"},{name:"literal",value:"'AVSLAG_ANNET'"},{name:"literal",value:"'INGEN_INNVIRKNING'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"ugunstAksjonspunkt",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"behandlingKoet",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}],raw:"BehandlingAppKontekst[]"},description:""}}};const ou={innsendingstidspunkt:"2024-08-08T00:00:00",kildeSystem:"Altinn",aktiveNaturalytelser:[],refusjonsperioder:[],innsendingsårsak:"NY",arbeidsgiverIdent:"1",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"},kb={title:"fakta/fakta-inntektsmelding",component:wu,decorators:[Y0],render:e=>V.jsx(wu,{...e})},Ut={args:{alleBehandlinger:[{uuid:"UUID1",type:"BT-002",opprettet:"2024-07-13",avsluttet:"2024-08-13"},{uuid:"UUID2",type:"BT-003",opprettet:"2024-07-14",avsluttet:"2024-08-14"},{uuid:"UUID3",type:"BT-004",opprettet:"2024-07-15",avsluttet:"2024-08-15"}],arbeidsgiverOpplysningerPerId:{1:{navn:"Rema 1000"},2:{navn:"Kiwi"},3:{navn:"Meny"}},behandling:{uuid:"UUID2"},inntektsmeldinger:[{...ou,tilknyttedeBehandlingIder:["UUID1"],inntektPrMnd:10000.5,innsendingstidspunkt:"2024-07-20T00:00:00",startDatoPermisjon:"2024-10-10",refusjonPrMnd:void 0,journalpostId:"1",refusjonsperioder:[{refusjonsbeløp:{verdi:5e3},indexKey:"1",fom:"2024-01-10"},{refusjonsbeløp:{verdi:3e3},indexKey:"2",fom:"2024-01-09"}]},{...ou,tilknyttedeBehandlingIder:["UUID1","UUID2"],inntektPrMnd:2e4,innsendingstidspunkt:"2024-08-01T00:00:00",kildeSystem:"FS22",refusjonPrMnd:void 0,arbeidsgiverIdent:"2",journalpostId:"2"},{...ou,tilknyttedeBehandlingIder:[],inntektPrMnd:3e4,innsendingstidspunkt:"2024-09-10T00:00:00",innsendingsårsak:"ENDRING",kildeSystem:"NAV_NO",startDatoPermisjon:"2024-11-11",arbeidsgiverIdent:"3",journalpostId:"3",aktiveNaturalytelser:[{periode:{fomDato:"2024-01-09",tomDato:"2024-10-09"},type:mu.ELEKTRISK_KOMMUNIKASJON,beloepPerMnd:{verdi:999},indexKey:"1"},{periode:{fomDato:"2024-01-11",tomDato:"2024-10-11"},type:mu.LOSJI,beloepPerMnd:{verdi:10},indexKey:"2"}]}]}},Qa={args:{...Ut.args,inntektsmeldinger:[]}};Ut.parameters={...Ut.parameters,docs:{...Ut.parameters?.docs,source:{originalSource:`{
  args: {
    alleBehandlinger: [{
      uuid: 'UUID1',
      type: 'BT-002',
      opprettet: '2024-07-13',
      avsluttet: '2024-08-13'
    }, {
      uuid: 'UUID2',
      type: 'BT-003',
      opprettet: '2024-07-14',
      avsluttet: '2024-08-14'
    }, {
      uuid: 'UUID3',
      type: 'BT-004',
      opprettet: '2024-07-15',
      avsluttet: '2024-08-15'
    }] as BehandlingAppKontekst[],
    arbeidsgiverOpplysningerPerId: {
      ['1']: {
        navn: 'Rema 1000'
      } as ArbeidsgiverOpplysninger,
      ['2']: {
        navn: 'Kiwi'
      } as ArbeidsgiverOpplysninger,
      ['3']: {
        navn: 'Meny'
      } as ArbeidsgiverOpplysninger
    },
    behandling: {
      uuid: 'UUID2'
    } as Behandling,
    inntektsmeldinger: [{
      ...inntektsmeldingmal,
      tilknyttedeBehandlingIder: ['UUID1'],
      inntektPrMnd: 10000.5,
      innsendingstidspunkt: '2024-07-20T00:00:00',
      startDatoPermisjon: '2024-10-10',
      refusjonPrMnd: undefined,
      journalpostId: '1',
      refusjonsperioder: [{
        refusjonsbeløp: {
          verdi: 5000
        },
        indexKey: '1',
        fom: '2024-01-10'
      }, {
        refusjonsbeløp: {
          verdi: 3000
        },
        indexKey: '2',
        fom: '2024-01-09'
      }]
    }, {
      ...inntektsmeldingmal,
      tilknyttedeBehandlingIder: ['UUID1', 'UUID2'],
      inntektPrMnd: 20000,
      innsendingstidspunkt: '2024-08-01T00:00:00',
      kildeSystem: 'FS22',
      refusjonPrMnd: undefined,
      arbeidsgiverIdent: '2',
      journalpostId: '2'
    }, {
      ...inntektsmeldingmal,
      tilknyttedeBehandlingIder: [],
      inntektPrMnd: 30000,
      innsendingstidspunkt: '2024-09-10T00:00:00',
      innsendingsårsak: 'ENDRING' as const,
      kildeSystem: 'NAV_NO',
      startDatoPermisjon: '2024-11-11',
      arbeidsgiverIdent: '3',
      journalpostId: '3',
      aktiveNaturalytelser: [{
        periode: {
          fomDato: '2024-01-09',
          tomDato: '2024-10-09'
        },
        type: NaturalYtelseType.ELEKTRISK_KOMMUNIKASJON,
        beloepPerMnd: {
          verdi: 999
        },
        indexKey: '1'
      }, {
        periode: {
          fomDato: '2024-01-11',
          tomDato: '2024-10-11'
        },
        type: NaturalYtelseType.LOSJI,
        beloepPerMnd: {
          verdi: 10
        },
        indexKey: '2'
      }]
    }]
  }
}`,...Ut.parameters?.docs?.source}}};Qa.parameters={...Qa.parameters,docs:{...Qa.parameters?.docs,source:{originalSource:`{
  args: {
    ...InntektsmeldingDefault.args,
    inntektsmeldinger: []
  }
}`,...Qa.parameters?.docs?.source}}};const yb=["InntektsmeldingDefault","IngenInntektsmeldinger"];export{Qa as IngenInntektsmeldinger,Ut as InntektsmeldingDefault,yb as __namedExportsOrder,kb as default};
