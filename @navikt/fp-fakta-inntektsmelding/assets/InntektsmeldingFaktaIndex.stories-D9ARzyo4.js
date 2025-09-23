import{g as Yd,r as K,u as gr,_ as Sm,s as Im,c as $d,a as Le,R as F,b as Ch,d as Ea,T as Yh,S as Wa,e as Jd,f as Wd,h as $h,o as zd,w as Jh,i as Hn,j as M,k as va,l as Ya,m as Jt,E as bm,n as Xd,P as Lm,p as Wh}from"./iframe-Dw7IYwoB.js";import{r as zh}from"./index-D7OLPkcp.js";import"./preload-helper-PPVm8Dsz.js";var Zd=zh();const Dm=Yd(Zd);function Xh(e,l){var a=e.values,t=Sm(e,["values"]),i=l.values,s=Sm(l,["values"]);return Im(i,a)&&Im(t,s)}function Qd(e){var l=gr(),a=l.formatMessage,t=l.textComponent,i=t===void 0?K.Fragment:t,s=e.id,m=e.description,d=e.defaultMessage,v=e.values,_=e.children,f=e.tagName,T=f===void 0?i:f,R=e.ignoreTag,h={id:s,description:m,defaultMessage:d},L=a(h,v,{ignoreTag:R});return typeof _=="function"?_(Array.isArray(L)?L:[L]):T?K.createElement(T,null,L):K.createElement(K.Fragment,null,L)}Qd.displayName="FormattedMessage";var be=K.memo(Qd,Xh);be.displayName="MemoizedFormattedMessage";var du=(e=>(e.ELEKTRISK_KOMMUNIKASJON="ELEKTRISK_KOMMUNIKASJON",e.LOSJI="LOSJI",e))(du||{});const Zh=(e,l,a)=>`/fpsak/api/dokument/hent-dokument?saksnummer=${e}&journalpostId=${l}&dokumentId=${a}`,Qh=(e,l,a,t)=>{const i=Zh(e,l,a),s=`${l}-${a}`;t&&e0(i,s,t)},e0=(e,l,a)=>{const t=window.open(e,l);t&&setTimeout(()=>{t.document.title=a},1e3)},ga=e=>$d({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var n0=function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)l.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]]);return a};const al=K.forwardRef((e,l)=>{var{className:a,size:t="medium",as:i="p",spacing:s,truncate:m,weight:d="regular",align:v,visuallyHidden:_,textColor:f}=e,T=n0(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:R}=Le();return F.createElement(i,Object.assign({},T,{ref:l,className:R(a,"navds-body-long",`navds-body-long--${t}`,ga({spacing:s,truncate:m,weight:d,align:v,visuallyHidden:_,textColor:f}))}))});var r0=function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)l.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]]);return a};const ml=K.forwardRef((e,l)=>{var{className:a,size:t="medium",as:i="p",spacing:s,truncate:m,weight:d="regular",align:v,visuallyHidden:_,textColor:f}=e,T=r0(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:R}=Le();return F.createElement(i,Object.assign({},T,{ref:l,className:R(a,"navds-body-short",`navds-body-short--${t}`,ga({spacing:s,truncate:m,weight:d,align:v,visuallyHidden:_,textColor:f}))}))});var a0=function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)l.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]]);return a};const t0=K.forwardRef((e,l)=>{var{className:a,size:t="medium",spacing:i,uppercase:s,as:m="p",truncate:d,weight:v="regular",align:_,visuallyHidden:f,textColor:T}=e,R=a0(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:h}=Le();return F.createElement(m,Object.assign({},R,{ref:l,className:h(a,"navds-detail",ga({spacing:i,truncate:d,weight:v,align:_,visuallyHidden:f,textColor:T,uppercase:s}),{"navds-detail--small":t==="small"})}))});var l0=function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)l.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]]);return a};const i0=K.forwardRef((e,l)=>{var{children:a,className:t,size:i,spacing:s,as:m="p",showIcon:d=!1}=e,v=l0(e,["children","className","size","spacing","as","showIcon"]);const{cn:_}=Le();return F.createElement(m,Object.assign({},v,{ref:l,className:_("navds-error-message","navds-label",t,ga({spacing:s}),{"navds-label--small":i==="small","navds-error-message--show-icon":d})}),d&&F.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},F.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),a)});var u0=function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)l.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]]);return a};const eE=K.forwardRef((e,l)=>{var{level:a="1",size:t,className:i,as:s,spacing:m,align:d,visuallyHidden:v,textColor:_}=e,f=u0(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:T}=Le(),R=s??`h${a}`;return F.createElement(R,Object.assign({},f,{ref:l,className:T(i,"navds-heading",`navds-heading--${t}`,ga({spacing:m,align:d,visuallyHidden:v,textColor:_}))}))});var s0=function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)l.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]]);return a};K.forwardRef((e,l)=>{var{className:a,spacing:t,as:i="p"}=e,s=s0(e,["className","spacing","as"]);const{cn:m}=Le();return F.createElement(i,Object.assign({},s,{ref:l,className:m(a,"navds-ingress",{"navds-typo--spacing":!!t})}))});var o0=function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)l.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]]);return a};const Bu=K.forwardRef((e,l)=>{var{className:a,size:t="medium",as:i="label",spacing:s,visuallyHidden:m,textColor:d}=e,v=o0(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:_}=Le();return F.createElement(i,Object.assign({},v,{ref:l,className:_(a,"navds-label",ga({spacing:s,visuallyHidden:m,textColor:d}),{"navds-label--small":t==="small"})}))});function za(e,l){const a=Object.entries(e).filter(([t])=>!l.includes(t));return Object.fromEntries(a)}let Km=0;function m0(e){const[l,a]=K.useState(e),t=e||l;return K.useEffect(()=>{l==null&&(Km+=1,a(`aksel-id-${Km}`))},[l]),t}const Pm=F.useId;function dl(e){var l;if(Pm!==void 0){const a=Pm();return e??a.replace(/(:)/g,"")}return(l=m0(e))!==null&&l!==void 0?l:""}function Om(e,l=[]){const a=K.useRef(e);return K.useEffect(()=>{a.current=e}),K.useCallback(((...t)=>{var i;return(i=a.current)===null||i===void 0?void 0:i.call(a,...t)}),l)}function Vu({value:e,defaultValue:l,onChange:a}){const t=Om(a),[i,s]=K.useState(l),m=e!==void 0,d=m?e:i,v=Om(_=>{const T=typeof _=="function"?_(d):_;m||s(T),t(T)},[m,t,d]);return[d,v]}let Fm=0;function d0(e){const[l,a]=K.useState(e),t=e||l;return K.useEffect(()=>{l==null&&(Fm+=1,a(`aksel-icon-${Fm}`))},[l]),t}const wm=F.useId;function _r(e){var l;return wm!==void 0?wm().replace(/(:)/g,""):(l=d0(e))!==null&&l!==void 0?l:""}var E0=function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)l.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]]);return a};const v0=K.forwardRef((e,l)=>{var{title:a,titleId:t}=e,i=E0(e,["title","titleId"]);let s=_r();return s=a?t||"title-"+s:void 0,F.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:l,"aria-labelledby":s},i),a?F.createElement("title",{id:s},a):null,F.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13.672 3.825a.75.75 0 0 1 .791.085l7 5.5a.75.75 0 0 1 0 1.18l-7 5.5a.75.75 0 0 1-1.213-.59v-2.724a9.1 9.1 0 0 0-2.63.565c-2.284.87-3.759 2.562-4.671 4.077a12.4 12.4 0 0 0-.957 1.965 10 10 0 0 0-.263.792l-.001.007A.75.75 0 0 1 3.25 20c0-1.654.322-3.941 1.224-6.123.903-2.184 2.413-4.32 4.823-5.558 1.133-.581 2.445-.954 3.953-1.046V4.5a.75.75 0 0 1 .422-.675M5.505 15.412c1.038-1.344 2.519-2.688 4.582-3.473 1.136-.432 2.435-.689 3.913-.689a.75.75 0 0 1 .75.75v1.957L19.786 10 14.75 6.043V8a.75.75 0 0 1-.75.75c-1.606 0-2.927.344-4.018.904-1.996 1.025-3.306 2.824-4.121 4.796q-.197.479-.356.962",clipRule:"evenodd"}))});var g0=function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)l.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]]);return a};const _0=K.forwardRef((e,l)=>{var{title:a,titleId:t}=e,i=g0(e,["title","titleId"]);let s=_r();return s=a?t||"title-"+s:void 0,F.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:l,"aria-labelledby":s},i),a?F.createElement("title",{id:s},a):null,F.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.47 21.03a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22V9.5a.75.75 0 0 0-1.5 0v9.19l-2.22-2.22a.75.75 0 1 0-1.06 1.06zM4.03 7.53l2.22-2.22v9.19a.75.75 0 0 0 1.5 0V5.31l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06",clipRule:"evenodd"}))});var f0=function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)l.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]]);return a};const nE=K.forwardRef((e,l)=>{var{title:a,titleId:t}=e,i=f0(e,["title","titleId"]);let s=_r();return s=a?t||"title-"+s:void 0,F.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:l,"aria-labelledby":s},i),a?F.createElement("title",{id:s},a):null,F.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var c0=function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)l.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]]);return a};const xi=K.forwardRef((e,l)=>{var{title:a,titleId:t}=e,i=c0(e,["title","titleId"]);let s=_r();return s=a?t||"title-"+s:void 0,F.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:l,"aria-labelledby":s},i),a?F.createElement("title",{id:s},a):null,F.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.5 12C1.5 6.201 6.201 1.5 12 1.5S22.5 6.201 22.5 12 17.799 22.5 12 22.5 1.5 17.799 1.5 12",clipRule:"evenodd"}))});var T0=function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)l.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]]);return a};const p0=K.forwardRef((e,l)=>{var{title:a,titleId:t}=e,i=T0(e,["title","titleId"]);let s=_r();return s=a?t||"title-"+s:void 0,F.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:l,"aria-labelledby":s},i),a?F.createElement("title",{id:s},a):null,F.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.1 2.05a.75.75 0 1 0-1.2.9l.98 1.306a.25.25 0 0 1-.024.327l-.773.773a1.75 1.75 0 0 0-.163 2.288l.98 1.306a.75.75 0 0 0 1.2-.9l-.98-1.306a.25.25 0 0 1 .024-.327l.773-.773a1.75 1.75 0 0 0 .163-2.288zm1.75 5.007a.75.75 0 0 1 .83-.66c1.33.152 2.506.417 3.372.776.431.178.826.396 1.125.666.298.269.573.659.573 1.161q0 .404-.032.8.224-.065.446-.092c.556-.069 1.177.037 1.634.494.553.552.592 1.332.43 1.98-.166.665-.57 1.341-1.137 1.91-.568.567-1.244.97-1.909 1.136q-.241.06-.497.078.401.165.733.358c.657.38 1.332.977 1.332 1.836 0 .695-.45 1.219-.933 1.576-.498.369-1.172.669-1.936.907-1.539.481-3.618.767-5.881.767s-4.342-.286-5.88-.767c-.765-.238-1.439-.538-1.937-.907-.484-.357-.933-.881-.933-1.576 0-.859.675-1.457 1.332-1.836.476-.276 1.068-.512 1.739-.709C5.028 13.38 4.25 11.272 4.25 9c0-.467.238-.838.51-1.102.269-.262.624-.474 1.007-.647.771-.35 1.817-.614 3.004-.784a.75.75 0 0 1 .211 1.485c-1.112.159-2.004.397-2.596.665-.299.135-.482.26-.58.356L5.779 9c.06.066.194.178.462.314.333.168.795.332 1.374.474 1.155.284 2.688.462 4.385.462s3.23-.178 4.385-.462c.579-.142 1.04-.306 1.374-.474.268-.136.402-.248.462-.314l-.049-.048c-.123-.11-.345-.25-.693-.393-.69-.286-1.716-.529-2.969-.672a.75.75 0 0 1-.66-.83m4.623 6.754a9.3 9.3 0 0 0 .925-2.204c.355-.251.693-.379.95-.41.26-.033.36.036.39.066.033.033.129.18.035.555-.09.36-.334.804-.742 1.212-.409.409-.854.653-1.213.743a1.1 1.1 0 0 1-.345.038m-.422-2.983c-.387.16-.829.299-1.308.417-1.296.319-2.953.505-4.743.505s-3.447-.186-4.743-.505a9 9 0 0 1-1.308-.417c.707 3.173 3.21 5.422 6.051 5.422 2.84 0 5.344-2.25 6.051-5.422M12 17.75c1.665 0 3.186-.582 4.43-1.565.976.214 1.736.487 2.237.777.565.326.583.538.583.538 0 .003 0 .031-.04.093-.044.068-.13.163-.284.277-.311.23-.81.468-1.493.682-1.357.424-3.278.698-5.433.698s-4.076-.274-5.433-.698c-.683-.214-1.181-.452-1.493-.682a1.2 1.2 0 0 1-.284-.277c-.04-.062-.04-.09-.04-.093 0 0 .018-.212.583-.538.501-.29 1.262-.563 2.236-.777 1.245.983 2.766 1.565 4.431 1.565",clipRule:"evenodd"}))});var h0=function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)l.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]]);return a};const rE=K.forwardRef((e,l)=>{var{title:a,titleId:t}=e,i=h0(e,["title","titleId"]);let s=_r();return s=a?t||"title-"+s:void 0,F.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:l,"aria-labelledby":s},i),a?F.createElement("title",{id:s},a):null,F.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10.5 3.25a7.25 7.25 0 1 0 4.569 12.88l5.411 5.41a.75.75 0 1 0 1.06-1.06l-5.41-5.411A7.25 7.25 0 0 0 10.5 3.25M4.75 10.5a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0",clipRule:"evenodd"}))});var N0=function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)l.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]]);return a};const R0=K.forwardRef((e,l)=>{var{title:a,titleId:t}=e,i=N0(e,["title","titleId"]);let s=_r();return s=a?t||"title-"+s:void 0,F.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:l,"aria-labelledby":s},i),a?F.createElement("title",{id:s},a):null,F.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 18.53a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V6a.75.75 0 0 1 1.5 0v10.19l2.22-2.22a.75.75 0 1 1 1.06 1.06zM2.75 6.25a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM2 17a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 2 17",clipRule:"evenodd"}))});var k0=function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)l.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]]);return a};const y0=K.forwardRef((e,l)=>{var{title:a,titleId:t}=e,i=k0(e,["title","titleId"]);let s=_r();return s=a?t||"title-"+s:void 0,F.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:l,"aria-labelledby":s},i),a?F.createElement("title",{id:s},a):null,F.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 5.47a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 1 0 1.06 1.06l2.22-2.22V18a.75.75 0 0 0 1.5 0V7.81l2.22 2.22a.75.75 0 1 0 1.06-1.06zM2.75 17.75a.75.75 0 0 1 0-1.5h9.5a.75.75 0 0 1 0 1.5zm0-5a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5zM2 7c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5A.75.75 0 0 0 2 7",clipRule:"evenodd"}))});var A0=function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)l.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]]);return a};const Gm=K.forwardRef((e,l)=>{var{title:a,titleId:t}=e,i=A0(e,["title","titleId"]);let s=_r();return s=a?t||"title-"+s:void 0,F.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:l,"aria-labelledby":s},i),a?F.createElement("title",{id:s},a):null,F.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});function El(e,l,{checkForDefaultPrevented:a=!0}={}){return function(i){if(e?.(i),a===!1||!i.defaultPrevented)return l?.(i)}}const[GS,S0]=Ch({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"});function Ci(e){return(l={})=>{const a=l.width?String(l.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}}function Ga(e){return(l,a)=>{const t=a?.context?String(a.context):"standalone";let i;if(t==="formatting"&&e.formattingValues){const m=e.defaultFormattingWidth||e.defaultWidth,d=a?.width?String(a.width):m;i=e.formattingValues[d]||e.formattingValues[m]}else{const m=e.defaultWidth,d=a?.width?String(a.width):e.defaultWidth;i=e.values[d]||e.values[m]}const s=e.argumentCallback?e.argumentCallback(l):l;return i[s]}}function Ba(e){return(l,a={})=>{const t=a.width,i=t&&e.matchPatterns[t]||e.matchPatterns[e.defaultMatchWidth],s=l.match(i);if(!s)return null;const m=s[0],d=t&&e.parsePatterns[t]||e.parsePatterns[e.defaultParseWidth],v=Array.isArray(d)?b0(d,T=>T.test(m)):I0(d,T=>T.test(m));let _;_=e.valueCallback?e.valueCallback(v):v,_=a.valueCallback?a.valueCallback(_):_;const f=l.slice(m.length);return{value:_,rest:f}}}function I0(e,l){for(const a in e)if(Object.prototype.hasOwnProperty.call(e,a)&&l(e[a]))return a}function b0(e,l){for(let a=0;a<e.length;a++)if(l(e[a]))return a}function L0(e){return(l,a={})=>{const t=l.match(e.matchPattern);if(!t)return null;const i=t[0],s=l.match(e.parsePattern);if(!s)return null;let m=e.valueCallback?e.valueCallback(s[0]):s[0];m=a.valueCallback?a.valueCallback(m):m;const d=l.slice(i.length);return{value:m,rest:d}}}const D0={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},K0=(e,l,a)=>{let t;const i=D0[e];return typeof i=="string"?t=i:l===1?t=i.one:t=i.other.replace("{{count}}",String(l)),a?.addSuffix?a.comparison&&a.comparison>0?"om "+t:t+" siden":t},P0={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},O0={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},F0={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},w0={date:Ci({formats:P0,defaultWidth:"full"}),time:Ci({formats:O0,defaultWidth:"full"}),dateTime:Ci({formats:F0,defaultWidth:"full"})},G0={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},B0=(e,l,a,t)=>G0[e],V0={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},M0={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},H0={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},j0={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},U0={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},q0=(e,l)=>Number(e)+".",x0={ordinalNumber:q0,era:Ga({values:V0,defaultWidth:"wide"}),quarter:Ga({values:M0,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Ga({values:H0,defaultWidth:"wide"}),day:Ga({values:j0,defaultWidth:"wide"}),dayPeriod:Ga({values:U0,defaultWidth:"wide"})},C0=/^(\d+)\.?/i,Y0=/\d+/i,$0={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},J0={any:[/^f/i,/^e/i]},W0={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},z0={any:[/1/i,/2/i,/3/i,/4/i]},X0={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},Z0={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},Q0={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},eN={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},nN={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},rN={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},aN={ordinalNumber:L0({matchPattern:C0,parsePattern:Y0,valueCallback:e=>parseInt(e,10)}),era:Ba({matchPatterns:$0,defaultMatchWidth:"wide",parsePatterns:J0,defaultParseWidth:"any"}),quarter:Ba({matchPatterns:W0,defaultMatchWidth:"wide",parsePatterns:z0,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Ba({matchPatterns:X0,defaultMatchWidth:"wide",parsePatterns:Z0,defaultParseWidth:"any"}),day:Ba({matchPatterns:Q0,defaultMatchWidth:"wide",parsePatterns:eN,defaultParseWidth:"any"}),dayPeriod:Ba({matchPatterns:nN,defaultMatchWidth:"any",parsePatterns:rN,defaultParseWidth:"any"})},tN={code:"nb",formatDistance:K0,formatLong:w0,formatRelative:B0,localize:x0,match:aN,options:{weekStartsOn:1,firstWeekContainsDate:4}},lN={global:{dateLocale:tN,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},Process:{active:"Aktiv"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},iN=K.createContext({locale:lN}),aE=()=>K.useContext(iN);var uN=function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)l.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]]);return a};const sN=K.forwardRef((e,l)=>{var a,t,i,{rootElement:s,asChild:m}=e,d=uN(e,["rootElement","asChild"]);const v=Ea(!1),_=(a=aE())===null||a===void 0?void 0:a.rootElement,f=(t=s??_)!==null&&t!==void 0?t:(i=globalThis?.document)===null||i===void 0?void 0:i.body,T=m?Wa:"div";return v?.isDarkside?f?Dm.createPortal(F.createElement(Yh,{theme:v.theme,asChild:!0,hasBackground:!1,"data-color":v.color},F.createElement(T,Object.assign({ref:l,"data-aksel-portal":""},d))),f):null:f?Dm.createPortal(F.createElement(T,Object.assign({ref:l,"data-aksel-portal":""},d)),f):null}),oa=Math.min,Hr=Math.max,tl=Math.round,Wt=Math.floor,Wn=e=>({x:e,y:e}),oN={left:"right",right:"left",bottom:"top",top:"bottom"},mN={start:"end",end:"start"};function Eu(e,l,a){return Hr(e,oa(l,a))}function Xa(e,l){return typeof e=="function"?e(l):e}function jr(e){return e.split("-")[0]}function Za(e){return e.split("-")[1]}function tE(e){return e==="x"?"y":"x"}function Mu(e){return e==="y"?"height":"width"}const dN=new Set(["top","bottom"]);function Ar(e){return dN.has(jr(e))?"y":"x"}function Hu(e){return tE(Ar(e))}function EN(e,l,a){a===void 0&&(a=!1);const t=Za(e),i=Hu(e),s=Mu(i);let m=i==="x"?t===(a?"end":"start")?"right":"left":t==="start"?"bottom":"top";return l.reference[s]>l.floating[s]&&(m=ll(m)),[m,ll(m)]}function vN(e){const l=ll(e);return[vu(e),l,vu(l)]}function vu(e){return e.replace(/start|end/g,l=>mN[l])}const Bm=["left","right"],Vm=["right","left"],gN=["top","bottom"],_N=["bottom","top"];function fN(e,l,a){switch(e){case"top":case"bottom":return a?l?Vm:Bm:l?Bm:Vm;case"left":case"right":return l?gN:_N;default:return[]}}function cN(e,l,a,t){const i=Za(e);let s=fN(jr(e),a==="start",t);return i&&(s=s.map(m=>m+"-"+i),l&&(s=s.concat(s.map(vu)))),s}function ll(e){return e.replace(/left|right|bottom|top/g,l=>oN[l])}function TN(e){return{top:0,right:0,bottom:0,left:0,...e}}function lE(e){return typeof e!="number"?TN(e):{top:e,right:e,bottom:e,left:e}}function il(e){const{x:l,y:a,width:t,height:i}=e;return{width:t,height:i,top:a,left:l,right:l+t,bottom:a+i,x:l,y:a}}function Mm(e,l,a){let{reference:t,floating:i}=e;const s=Ar(l),m=Hu(l),d=Mu(m),v=jr(l),_=s==="y",f=t.x+t.width/2-i.width/2,T=t.y+t.height/2-i.height/2,R=t[d]/2-i[d]/2;let h;switch(v){case"top":h={x:f,y:t.y-i.height};break;case"bottom":h={x:f,y:t.y+t.height};break;case"right":h={x:t.x+t.width,y:T};break;case"left":h={x:t.x-i.width,y:T};break;default:h={x:t.x,y:t.y}}switch(Za(l)){case"start":h[m]-=R*(a&&_?-1:1);break;case"end":h[m]+=R*(a&&_?-1:1);break}return h}const pN=async(e,l,a)=>{const{placement:t="bottom",strategy:i="absolute",middleware:s=[],platform:m}=a,d=s.filter(Boolean),v=await(m.isRTL==null?void 0:m.isRTL(l));let _=await m.getElementRects({reference:e,floating:l,strategy:i}),{x:f,y:T}=Mm(_,t,v),R=t,h={},L=0;for(let k=0;k<d.length;k++){const{name:N,fn:A}=d[k],{x:P,y:I,data:x,reset:D}=await A({x:f,y:T,initialPlacement:t,placement:R,strategy:i,middlewareData:h,rects:_,platform:m,elements:{reference:e,floating:l}});f=P??f,T=I??T,h={...h,[N]:{...h[N],...x}},D&&L<=50&&(L++,typeof D=="object"&&(D.placement&&(R=D.placement),D.rects&&(_=D.rects===!0?await m.getElementRects({reference:e,floating:l,strategy:i}):D.rects),{x:f,y:T}=Mm(_,R,v)),k=-1)}return{x:f,y:T,placement:R,strategy:i,middlewareData:h}};async function iE(e,l){var a;l===void 0&&(l={});const{x:t,y:i,platform:s,rects:m,elements:d,strategy:v}=e,{boundary:_="clippingAncestors",rootBoundary:f="viewport",elementContext:T="floating",altBoundary:R=!1,padding:h=0}=Xa(l,e),L=lE(h),N=d[R?T==="floating"?"reference":"floating":T],A=il(await s.getClippingRect({element:(a=await(s.isElement==null?void 0:s.isElement(N)))==null||a?N:N.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(d.floating)),boundary:_,rootBoundary:f,strategy:v})),P=T==="floating"?{x:t,y:i,width:m.floating.width,height:m.floating.height}:m.reference,I=await(s.getOffsetParent==null?void 0:s.getOffsetParent(d.floating)),x=await(s.isElement==null?void 0:s.isElement(I))?await(s.getScale==null?void 0:s.getScale(I))||{x:1,y:1}:{x:1,y:1},D=il(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:d,rect:P,offsetParent:I,strategy:v}):P);return{top:(A.top-D.top+L.top)/x.y,bottom:(D.bottom-A.bottom+L.bottom)/x.y,left:(A.left-D.left+L.left)/x.x,right:(D.right-A.right+L.right)/x.x}}const hN=e=>({name:"arrow",options:e,async fn(l){const{x:a,y:t,placement:i,rects:s,platform:m,elements:d,middlewareData:v}=l,{element:_,padding:f=0}=Xa(e,l)||{};if(_==null)return{};const T=lE(f),R={x:a,y:t},h=Hu(i),L=Mu(h),k=await m.getDimensions(_),N=h==="y",A=N?"top":"left",P=N?"bottom":"right",I=N?"clientHeight":"clientWidth",x=s.reference[L]+s.reference[h]-R[h]-s.floating[L],D=R[h]-s.reference[h],q=await(m.getOffsetParent==null?void 0:m.getOffsetParent(_));let w=q?q[I]:0;(!w||!await(m.isElement==null?void 0:m.isElement(q)))&&(w=d.floating[I]||s.floating[L]);const G=x/2-D/2,W=w/2-k[L]/2-1,Z=oa(T[A],W),X=oa(T[P],W),Q=Z,H=w-k[L]-X,B=w/2-k[L]/2+G,z=Eu(Q,B,H),re=!v.arrow&&Za(i)!=null&&B!==z&&s.reference[L]/2-(B<Q?Z:X)-k[L]/2<0,J=re?B<Q?B-Q:B-H:0;return{[h]:R[h]+J,data:{[h]:z,centerOffset:B-z-J,...re&&{alignmentOffset:J}},reset:re}}}),NN=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(l){var a,t;const{placement:i,middlewareData:s,rects:m,initialPlacement:d,platform:v,elements:_}=l,{mainAxis:f=!0,crossAxis:T=!0,fallbackPlacements:R,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:L="none",flipAlignment:k=!0,...N}=Xa(e,l);if((a=s.arrow)!=null&&a.alignmentOffset)return{};const A=jr(i),P=Ar(d),I=jr(d)===d,x=await(v.isRTL==null?void 0:v.isRTL(_.floating)),D=R||(I||!k?[ll(d)]:vN(d)),q=L!=="none";!R&&q&&D.push(...cN(d,k,L,x));const w=[d,...D],G=await iE(l,N),W=[];let Z=((t=s.flip)==null?void 0:t.overflows)||[];if(f&&W.push(G[A]),T){const B=EN(i,m,x);W.push(G[B[0]],G[B[1]])}if(Z=[...Z,{placement:i,overflows:W}],!W.every(B=>B<=0)){var X,Q;const B=(((X=s.flip)==null?void 0:X.index)||0)+1,z=w[B];if(z&&(!(T==="alignment"?P!==Ar(z):!1)||Z.every(C=>Ar(C.placement)===P?C.overflows[0]>0:!0)))return{data:{index:B,overflows:Z},reset:{placement:z}};let re=(Q=Z.filter(J=>J.overflows[0]<=0).sort((J,C)=>J.overflows[1]-C.overflows[1])[0])==null?void 0:Q.placement;if(!re)switch(h){case"bestFit":{var H;const J=(H=Z.filter(C=>{if(q){const $=Ar(C.placement);return $===P||$==="y"}return!0}).map(C=>[C.placement,C.overflows.filter($=>$>0).reduce(($,te)=>$+te,0)]).sort((C,$)=>C[1]-$[1])[0])==null?void 0:H[0];J&&(re=J);break}case"initialPlacement":re=d;break}if(i!==re)return{reset:{placement:re}}}return{}}}},RN=new Set(["left","top"]);async function kN(e,l){const{placement:a,platform:t,elements:i}=e,s=await(t.isRTL==null?void 0:t.isRTL(i.floating)),m=jr(a),d=Za(a),v=Ar(a)==="y",_=RN.has(m)?-1:1,f=s&&v?-1:1,T=Xa(l,e);let{mainAxis:R,crossAxis:h,alignmentAxis:L}=typeof T=="number"?{mainAxis:T,crossAxis:0,alignmentAxis:null}:{mainAxis:T.mainAxis||0,crossAxis:T.crossAxis||0,alignmentAxis:T.alignmentAxis};return d&&typeof L=="number"&&(h=d==="end"?L*-1:L),v?{x:h*f,y:R*_}:{x:R*_,y:h*f}}const yN=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(l){var a,t;const{x:i,y:s,placement:m,middlewareData:d}=l,v=await kN(l,e);return m===((a=d.offset)==null?void 0:a.placement)&&(t=d.arrow)!=null&&t.alignmentOffset?{}:{x:i+v.x,y:s+v.y,data:{...v,placement:m}}}}},AN=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(l){const{x:a,y:t,placement:i}=l,{mainAxis:s=!0,crossAxis:m=!1,limiter:d={fn:N=>{let{x:A,y:P}=N;return{x:A,y:P}}},...v}=Xa(e,l),_={x:a,y:t},f=await iE(l,v),T=Ar(jr(i)),R=tE(T);let h=_[R],L=_[T];if(s){const N=R==="y"?"top":"left",A=R==="y"?"bottom":"right",P=h+f[N],I=h-f[A];h=Eu(P,h,I)}if(m){const N=T==="y"?"top":"left",A=T==="y"?"bottom":"right",P=L+f[N],I=L-f[A];L=Eu(P,L,I)}const k=d.fn({...l,[R]:h,[T]:L});return{...k,data:{x:k.x-a,y:k.y-t,enabled:{[R]:s,[T]:m}}}}}};function vl(){return typeof window<"u"}function _a(e){return uE(e)?(e.nodeName||"").toLowerCase():"#document"}function vn(e){var l;return(e==null||(l=e.ownerDocument)==null?void 0:l.defaultView)||window}function Zn(e){var l;return(l=(uE(e)?e.ownerDocument:e.document)||window.document)==null?void 0:l.documentElement}function uE(e){return vl()?e instanceof Node||e instanceof vn(e).Node:!1}function Pe(e){return vl()?e instanceof Element||e instanceof vn(e).Element:!1}function Rn(e){return vl()?e instanceof HTMLElement||e instanceof vn(e).HTMLElement:!1}function ul(e){return!vl()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof vn(e).ShadowRoot}const SN=new Set(["inline","contents"]);function Qa(e){const{overflow:l,overflowX:a,overflowY:t,display:i}=On(e);return/auto|scroll|overlay|hidden|clip/.test(l+t+a)&&!SN.has(i)}const IN=new Set(["table","td","th"]);function bN(e){return IN.has(_a(e))}const LN=[":popover-open",":modal"];function gl(e){return LN.some(l=>{try{return e.matches(l)}catch{return!1}})}const DN=["transform","translate","scale","rotate","perspective"],KN=["transform","translate","scale","rotate","perspective","filter"],PN=["paint","layout","strict","content"];function ju(e){const l=_l(),a=Pe(e)?On(e):e;return DN.some(t=>a[t]?a[t]!=="none":!1)||(a.containerType?a.containerType!=="normal":!1)||!l&&(a.backdropFilter?a.backdropFilter!=="none":!1)||!l&&(a.filter?a.filter!=="none":!1)||KN.some(t=>(a.willChange||"").includes(t))||PN.some(t=>(a.contain||"").includes(t))}function ON(e){let l=vr(e);for(;Rn(l)&&!Er(l);){if(ju(l))return l;if(gl(l))return null;l=vr(l)}return null}function _l(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const FN=new Set(["html","body","#document"]);function Er(e){return FN.has(_a(e))}function On(e){return vn(e).getComputedStyle(e)}function fl(e){return Pe(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function vr(e){if(_a(e)==="html")return e;const l=e.assignedSlot||e.parentNode||ul(e)&&e.host||Zn(e);return ul(l)?l.host:l}function sE(e){const l=vr(e);return Er(l)?e.ownerDocument?e.ownerDocument.body:e.body:Rn(l)&&Qa(l)?l:sE(l)}function Sr(e,l,a){var t;l===void 0&&(l=[]),a===void 0&&(a=!0);const i=sE(e),s=i===((t=e.ownerDocument)==null?void 0:t.body),m=vn(i);if(s){const d=gu(m);return l.concat(m,m.visualViewport||[],Qa(i)?i:[],d&&a?Sr(d):[])}return l.concat(i,Sr(i,[],a))}function gu(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function oE(e){const l=On(e);let a=parseFloat(l.width)||0,t=parseFloat(l.height)||0;const i=Rn(e),s=i?e.offsetWidth:a,m=i?e.offsetHeight:t,d=tl(a)!==s||tl(t)!==m;return d&&(a=s,t=m),{width:a,height:t,$:d}}function Uu(e){return Pe(e)?e:e.contextElement}function ia(e){const l=Uu(e);if(!Rn(l))return Wn(1);const a=l.getBoundingClientRect(),{width:t,height:i,$:s}=oE(l);let m=(s?tl(a.width):a.width)/t,d=(s?tl(a.height):a.height)/i;return(!m||!Number.isFinite(m))&&(m=1),(!d||!Number.isFinite(d))&&(d=1),{x:m,y:d}}const wN=Wn(0);function mE(e){const l=vn(e);return!_l()||!l.visualViewport?wN:{x:l.visualViewport.offsetLeft,y:l.visualViewport.offsetTop}}function GN(e,l,a){return l===void 0&&(l=!1),!a||l&&a!==vn(e)?!1:l}function Ur(e,l,a,t){l===void 0&&(l=!1),a===void 0&&(a=!1);const i=e.getBoundingClientRect(),s=Uu(e);let m=Wn(1);l&&(t?Pe(t)&&(m=ia(t)):m=ia(e));const d=GN(s,a,t)?mE(s):Wn(0);let v=(i.left+d.x)/m.x,_=(i.top+d.y)/m.y,f=i.width/m.x,T=i.height/m.y;if(s){const R=vn(s),h=t&&Pe(t)?vn(t):t;let L=R,k=gu(L);for(;k&&t&&h!==L;){const N=ia(k),A=k.getBoundingClientRect(),P=On(k),I=A.left+(k.clientLeft+parseFloat(P.paddingLeft))*N.x,x=A.top+(k.clientTop+parseFloat(P.paddingTop))*N.y;v*=N.x,_*=N.y,f*=N.x,T*=N.y,v+=I,_+=x,L=vn(k),k=gu(L)}}return il({width:f,height:T,x:v,y:_})}function cl(e,l){const a=fl(e).scrollLeft;return l?l.left+a:Ur(Zn(e)).left+a}function dE(e,l){const a=e.getBoundingClientRect(),t=a.left+l.scrollLeft-cl(e,a),i=a.top+l.scrollTop;return{x:t,y:i}}function BN(e){let{elements:l,rect:a,offsetParent:t,strategy:i}=e;const s=i==="fixed",m=Zn(t),d=l?gl(l.floating):!1;if(t===m||d&&s)return a;let v={scrollLeft:0,scrollTop:0},_=Wn(1);const f=Wn(0),T=Rn(t);if((T||!T&&!s)&&((_a(t)!=="body"||Qa(m))&&(v=fl(t)),Rn(t))){const h=Ur(t);_=ia(t),f.x=h.x+t.clientLeft,f.y=h.y+t.clientTop}const R=m&&!T&&!s?dE(m,v):Wn(0);return{width:a.width*_.x,height:a.height*_.y,x:a.x*_.x-v.scrollLeft*_.x+f.x+R.x,y:a.y*_.y-v.scrollTop*_.y+f.y+R.y}}function VN(e){return Array.from(e.getClientRects())}function MN(e){const l=Zn(e),a=fl(e),t=e.ownerDocument.body,i=Hr(l.scrollWidth,l.clientWidth,t.scrollWidth,t.clientWidth),s=Hr(l.scrollHeight,l.clientHeight,t.scrollHeight,t.clientHeight);let m=-a.scrollLeft+cl(e);const d=-a.scrollTop;return On(t).direction==="rtl"&&(m+=Hr(l.clientWidth,t.clientWidth)-i),{width:i,height:s,x:m,y:d}}const Hm=25;function HN(e,l){const a=vn(e),t=Zn(e),i=a.visualViewport;let s=t.clientWidth,m=t.clientHeight,d=0,v=0;if(i){s=i.width,m=i.height;const f=_l();(!f||f&&l==="fixed")&&(d=i.offsetLeft,v=i.offsetTop)}const _=cl(t);if(_<=0){const f=t.ownerDocument,T=f.body,R=getComputedStyle(T),h=f.compatMode==="CSS1Compat"&&parseFloat(R.marginLeft)+parseFloat(R.marginRight)||0,L=Math.abs(t.clientWidth-T.clientWidth-h);L<=Hm&&(s-=L)}else _<=Hm&&(s+=_);return{width:s,height:m,x:d,y:v}}const jN=new Set(["absolute","fixed"]);function UN(e,l){const a=Ur(e,!0,l==="fixed"),t=a.top+e.clientTop,i=a.left+e.clientLeft,s=Rn(e)?ia(e):Wn(1),m=e.clientWidth*s.x,d=e.clientHeight*s.y,v=i*s.x,_=t*s.y;return{width:m,height:d,x:v,y:_}}function jm(e,l,a){let t;if(l==="viewport")t=HN(e,a);else if(l==="document")t=MN(Zn(e));else if(Pe(l))t=UN(l,a);else{const i=mE(e);t={x:l.x-i.x,y:l.y-i.y,width:l.width,height:l.height}}return il(t)}function EE(e,l){const a=vr(e);return a===l||!Pe(a)||Er(a)?!1:On(a).position==="fixed"||EE(a,l)}function qN(e,l){const a=l.get(e);if(a)return a;let t=Sr(e,[],!1).filter(d=>Pe(d)&&_a(d)!=="body"),i=null;const s=On(e).position==="fixed";let m=s?vr(e):e;for(;Pe(m)&&!Er(m);){const d=On(m),v=ju(m);!v&&d.position==="fixed"&&(i=null),(s?!v&&!i:!v&&d.position==="static"&&!!i&&jN.has(i.position)||Qa(m)&&!v&&EE(e,m))?t=t.filter(f=>f!==m):i=d,m=vr(m)}return l.set(e,t),t}function xN(e){let{element:l,boundary:a,rootBoundary:t,strategy:i}=e;const m=[...a==="clippingAncestors"?gl(l)?[]:qN(l,this._c):[].concat(a),t],d=m[0],v=m.reduce((_,f)=>{const T=jm(l,f,i);return _.top=Hr(T.top,_.top),_.right=oa(T.right,_.right),_.bottom=oa(T.bottom,_.bottom),_.left=Hr(T.left,_.left),_},jm(l,d,i));return{width:v.right-v.left,height:v.bottom-v.top,x:v.left,y:v.top}}function CN(e){const{width:l,height:a}=oE(e);return{width:l,height:a}}function YN(e,l,a){const t=Rn(l),i=Zn(l),s=a==="fixed",m=Ur(e,!0,s,l);let d={scrollLeft:0,scrollTop:0};const v=Wn(0);function _(){v.x=cl(i)}if(t||!t&&!s)if((_a(l)!=="body"||Qa(i))&&(d=fl(l)),t){const h=Ur(l,!0,s,l);v.x=h.x+l.clientLeft,v.y=h.y+l.clientTop}else i&&_();s&&!t&&i&&_();const f=i&&!t&&!s?dE(i,d):Wn(0),T=m.left+d.scrollLeft-v.x-f.x,R=m.top+d.scrollTop-v.y-f.y;return{x:T,y:R,width:m.width,height:m.height}}function Yi(e){return On(e).position==="static"}function Um(e,l){if(!Rn(e)||On(e).position==="fixed")return null;if(l)return l(e);let a=e.offsetParent;return Zn(e)===a&&(a=a.ownerDocument.body),a}function vE(e,l){const a=vn(e);if(gl(e))return a;if(!Rn(e)){let i=vr(e);for(;i&&!Er(i);){if(Pe(i)&&!Yi(i))return i;i=vr(i)}return a}let t=Um(e,l);for(;t&&bN(t)&&Yi(t);)t=Um(t,l);return t&&Er(t)&&Yi(t)&&!ju(t)?a:t||ON(e)||a}const $N=async function(e){const l=this.getOffsetParent||vE,a=this.getDimensions,t=await a(e.floating);return{reference:YN(e.reference,await l(e.floating),e.strategy),floating:{x:0,y:0,width:t.width,height:t.height}}};function JN(e){return On(e).direction==="rtl"}const WN={convertOffsetParentRelativeRectToViewportRelativeRect:BN,getDocumentElement:Zn,getClippingRect:xN,getOffsetParent:vE,getElementRects:$N,getClientRects:VN,getDimensions:CN,getScale:ia,isElement:Pe,isRTL:JN};function gE(e,l){return e.x===l.x&&e.y===l.y&&e.width===l.width&&e.height===l.height}function zN(e,l){let a=null,t;const i=Zn(e);function s(){var d;clearTimeout(t),(d=a)==null||d.disconnect(),a=null}function m(d,v){d===void 0&&(d=!1),v===void 0&&(v=1),s();const _=e.getBoundingClientRect(),{left:f,top:T,width:R,height:h}=_;if(d||l(),!R||!h)return;const L=Wt(T),k=Wt(i.clientWidth-(f+R)),N=Wt(i.clientHeight-(T+h)),A=Wt(f),I={rootMargin:-L+"px "+-k+"px "+-N+"px "+-A+"px",threshold:Hr(0,oa(1,v))||1};let x=!0;function D(q){const w=q[0].intersectionRatio;if(w!==v){if(!x)return m();w?m(!1,w):t=setTimeout(()=>{m(!1,1e-7)},1e3)}w===1&&!gE(_,e.getBoundingClientRect())&&m(),x=!1}try{a=new IntersectionObserver(D,{...I,root:i.ownerDocument})}catch{a=new IntersectionObserver(D,I)}a.observe(e)}return m(!0),s}function qm(e,l,a,t){t===void 0&&(t={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:m=typeof ResizeObserver=="function",layoutShift:d=typeof IntersectionObserver=="function",animationFrame:v=!1}=t,_=Uu(e),f=i||s?[..._?Sr(_):[],...Sr(l)]:[];f.forEach(A=>{i&&A.addEventListener("scroll",a,{passive:!0}),s&&A.addEventListener("resize",a)});const T=_&&d?zN(_,a):null;let R=-1,h=null;m&&(h=new ResizeObserver(A=>{let[P]=A;P&&P.target===_&&h&&(h.unobserve(l),cancelAnimationFrame(R),R=requestAnimationFrame(()=>{var I;(I=h)==null||I.observe(l)})),a()}),_&&!v&&h.observe(_),h.observe(l));let L,k=v?Ur(e):null;v&&N();function N(){const A=Ur(e);k&&!gE(k,A)&&a(),k=A,L=requestAnimationFrame(N)}return a(),()=>{var A;f.forEach(P=>{i&&P.removeEventListener("scroll",a),s&&P.removeEventListener("resize",a)}),T?.(),(A=h)==null||A.disconnect(),h=null,v&&cancelAnimationFrame(L)}}const XN=yN,ZN=AN,QN=NN,xm=hN,eR=(e,l,a)=>{const t=new Map,i={platform:WN,...a},s={...i.platform,_c:t};return pN(e,l,{...i,platform:s})};var nR=typeof document<"u",rR=function(){},el=nR?K.useLayoutEffect:rR;function sl(e,l){if(e===l)return!0;if(typeof e!=typeof l)return!1;if(typeof e=="function"&&e.toString()===l.toString())return!0;let a,t,i;if(e&&l&&typeof e=="object"){if(Array.isArray(e)){if(a=e.length,a!==l.length)return!1;for(t=a;t--!==0;)if(!sl(e[t],l[t]))return!1;return!0}if(i=Object.keys(e),a=i.length,a!==Object.keys(l).length)return!1;for(t=a;t--!==0;)if(!{}.hasOwnProperty.call(l,i[t]))return!1;for(t=a;t--!==0;){const s=i[t];if(!(s==="_owner"&&e.$$typeof)&&!sl(e[s],l[s]))return!1}return!0}return e!==e&&l!==l}function _E(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Cm(e,l){const a=_E(e);return Math.round(l*a)/a}function $i(e){const l=K.useRef(e);return el(()=>{l.current=e}),l}function aR(e){e===void 0&&(e={});const{placement:l="bottom",strategy:a="absolute",middleware:t=[],platform:i,elements:{reference:s,floating:m}={},transform:d=!0,whileElementsMounted:v,open:_}=e,[f,T]=K.useState({x:0,y:0,strategy:a,placement:l,middlewareData:{},isPositioned:!1}),[R,h]=K.useState(t);sl(R,t)||h(t);const[L,k]=K.useState(null),[N,A]=K.useState(null),P=K.useCallback(C=>{C!==q.current&&(q.current=C,k(C))},[]),I=K.useCallback(C=>{C!==w.current&&(w.current=C,A(C))},[]),x=s||L,D=m||N,q=K.useRef(null),w=K.useRef(null),G=K.useRef(f),W=v!=null,Z=$i(v),X=$i(i),Q=$i(_),H=K.useCallback(()=>{if(!q.current||!w.current)return;const C={placement:l,strategy:a,middleware:R};X.current&&(C.platform=X.current),eR(q.current,w.current,C).then($=>{const te={...$,isPositioned:Q.current!==!1};B.current&&!sl(G.current,te)&&(G.current=te,Zd.flushSync(()=>{T(te)}))})},[R,l,a,X,Q]);el(()=>{_===!1&&G.current.isPositioned&&(G.current.isPositioned=!1,T(C=>({...C,isPositioned:!1})))},[_]);const B=K.useRef(!1);el(()=>(B.current=!0,()=>{B.current=!1}),[]),el(()=>{if(x&&(q.current=x),D&&(w.current=D),x&&D){if(Z.current)return Z.current(x,D,H);H()}},[x,D,H,Z,W]);const z=K.useMemo(()=>({reference:q,floating:w,setReference:P,setFloating:I}),[P,I]),re=K.useMemo(()=>({reference:x,floating:D}),[x,D]),J=K.useMemo(()=>{const C={position:a,left:0,top:0};if(!re.floating)return C;const $=Cm(re.floating,f.x),te=Cm(re.floating,f.y);return d?{...C,transform:"translate("+$+"px, "+te+"px)",..._E(re.floating)>=1.5&&{willChange:"transform"}}:{position:a,left:$,top:te}},[a,d,re.floating,f.x,f.y]);return K.useMemo(()=>({...f,update:H,refs:z,elements:re,floatingStyles:J}),[f,H,z,re,J])}const tR=e=>{function l(a){return{}.hasOwnProperty.call(a,"current")}return{name:"arrow",options:e,fn(a){const{element:t,padding:i}=typeof e=="function"?e(a):e;return t&&l(t)?t.current!=null?xm({element:t.current,padding:i}).fn(a):{}:t?xm({element:t,padding:i}).fn(a):{}}}},lR=(e,l)=>({...XN(e),options:[e,l]}),iR=(e,l)=>({...ZN(e),options:[e,l]}),uR=(e,l)=>({...QN(e),options:[e,l]}),sR=(e,l)=>({...tR(e),options:[e,l]}),Ym=/(\w+)/g;function oR(e,l){const a=Array.isArray(e)?e:mR(e);for(const t of l){if(!t)continue;let i=t;for(let s=0;s<a.length;s++){const m=i[a[s]];m!==void 0&&(i=m)}if(typeof i=="string")return i}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function mR(e){const l=[];let a=Ym.exec(e);for(;a;){const[,t,i]=a;l.push(t||i),a=Ym.exec(e)}return l}const dR=/{[^}]*}/g;function Tl(e,...l){const a=aE(),t=a.translations||[],i=[...l,...Array.isArray(t)?t.map(m=>m[e]):[t[e]],a.locale[e]];return(m,d)=>{const v=oR(m,i);return d?v.replace(dR,_=>{const f=_.substring(1,_.length-1);if(d[f]===void 0){const T=JSON.stringify(d);throw new Error(`Error translating key '${m}'. No replacement syntax ({}) found for key '${f}'. The following replacements were passed: '${T}'`)}return d[f]}):v}}var ER=function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)l.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]]);return a};const vR=K.forwardRef((e,l)=>{var{className:a,size:t="medium",title:i,transparent:s=!1,variant:m="neutral",id:d,"data-color":v}=e,_=ER(e,["className","size","title","transparent","variant","id","data-color"]);const{cn:f}=Le(),T=dl(),R=Tl("Loader");return F.createElement("svg",Object.assign({"aria-labelledby":d??`loader-${T}`,ref:l,className:f("navds-loader",a,`navds-loader--${t}`,`navds-loader--${m}`,{"navds-loader--transparent":s}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid","data-color":v??gR(m)},za(_,["children"]),{"data-variant":m}),F.createElement("title",{id:d??`loader-${T}`},i||R("title")),F.createElement("circle",{className:f("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),F.createElement("circle",{className:f("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});function gR(e){switch(e){case"neutral":return"neutral";case"inverted":return"neutral";case"interaction":return;default:return"neutral"}}var _R=function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)l.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]]);return a};const qu=K.forwardRef((e,l)=>{var{as:a="button",variant:t="primary",className:i,children:s,size:m="medium",loading:d=!1,disabled:v,icon:_,iconPosition:f="left",onKeyUp:T,"data-color":R}=e,h=_R(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp","data-color"]);const{cn:L}=Le(),k=v||d?za(h,["href"]):h,N=A=>{A.key===" "&&!v&&!d&&A.currentTarget.click()};return F.createElement(a,Object.assign({},a!=="button"?{role:"button"}:{},{"data-color":R??fR(t),"data-variant":cR(t)},k,{ref:l,onKeyUp:El(T,N),className:L(i,"navds-button",`navds-button--${t}`,`navds-button--${m}`,{"navds-button--loading":d,"navds-button--icon-only":!!_&&!s,"navds-button--disabled":v??d}),disabled:v??d?!0:void 0}),_&&f==="left"&&F.createElement("span",{className:L("navds-button__icon")},_),d&&F.createElement(vR,{size:m}),s&&F.createElement(Bu,{as:"span",size:m==="medium"?"medium":"small"},s),_&&f==="right"&&F.createElement("span",{className:L("navds-button__icon")},_))});function fR(e){switch(e){case"primary-neutral":case"secondary-neutral":case"tertiary-neutral":return"neutral";case"danger":return"danger";default:return}}function cR(e){switch(e){case"primary":case"primary-neutral":case"danger":return"primary";case"secondary":case"secondary-neutral":return"secondary";case"tertiary":case"tertiary-neutral":return"tertiary";default:return"primary"}}function TR(){const e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function pR(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(l=>{let{brand:a,version:t}=l;return a+"/"+t}).join(" "):navigator.userAgent}function hR(){return/apple/i.test(navigator.vendor)}function NR(){return TR().toLowerCase().startsWith("mac")&&!navigator.maxTouchPoints}function RR(){return pR().includes("jsdom/")}const kR="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function $m(e){let l=e.activeElement;for(;((a=l)==null||(a=a.shadowRoot)==null?void 0:a.activeElement)!=null;){var a;l=l.shadowRoot.activeElement}return l}function $a(e,l){if(!e||!l)return!1;const a=l.getRootNode==null?void 0:l.getRootNode();if(e.contains(l))return!0;if(a&&ul(a)){let t=l;for(;t;){if(e===t)return!0;t=t.parentNode||t.host}}return!1}function la(e){return"composedPath"in e?e.composedPath()[0]:e.target}function Ji(e,l){if(l==null)return!1;if("composedPath"in e)return e.composedPath().includes(l);const a=e;return a.target!=null&&l.contains(a.target)}function yR(e){return e.matches("html,body")}function Mr(e){return e?.ownerDocument||document}function AR(e){return Rn(e)&&e.matches(kR)}function SR(e){if(!e||RR())return!0;try{return e.matches(":focus-visible")}catch{return!0}}function Wi(e,l,a){a===void 0&&(a=!0);let t=e.filter(s=>{var m;return s.parentId===l&&((m=s.context)==null?void 0:m.open)}),i=t;for(;i.length;)i=a?e.filter(s=>{var m;return(m=i)==null?void 0:m.some(d=>{var v;return s.parentId===d.id&&((v=s.context)==null?void 0:v.open)})}):e,t=t.concat(i);return t}function IR(e){return"nativeEvent"in e}function _u(e,l){const a=["mouse","pen"];return a.push("",void 0),a.includes(e)}var ma=typeof document<"u"?K.useLayoutEffect:K.useEffect;const bR={...Jd};function zt(e){const l=K.useRef(e);return ma(()=>{l.current=e}),l}const LR=bR.useInsertionEffect,DR=LR||(e=>e());function mr(e){const l=K.useRef(()=>{});return DR(()=>{l.current=e}),K.useCallback(function(){for(var a=arguments.length,t=new Array(a),i=0;i<a;i++)t[i]=arguments[i];return l.current==null?void 0:l.current(...t)},[])}const KR="data-floating-ui-focusable",Jm="active",Wm="selected",PR={...Jd};let zm=!1,OR=0;const Xm=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+OR++;function FR(){const[e,l]=K.useState(()=>zm?Xm():void 0);return ma(()=>{e==null&&l(Xm())},[]),K.useEffect(()=>{zm=!0},[]),e}const wR=PR.useId,GR=wR||FR;function BR(){const e=new Map;return{emit(l,a){var t;(t=e.get(l))==null||t.forEach(i=>i(a))},on(l,a){e.has(l)||e.set(l,new Set),e.get(l).add(a)},off(l,a){var t;(t=e.get(l))==null||t.delete(a)}}}const VR=K.createContext(null),MR=K.createContext(null),fE=()=>{var e;return((e=K.useContext(VR))==null?void 0:e.id)||null},xu=()=>K.useContext(MR);function Cu(e){return"data-floating-ui-"+e}function Pn(e){e.current!==-1&&(clearTimeout(e.current),e.current=-1)}const Zm=Cu("safe-polygon");function zi(e,l,a){if(a&&!_u(a))return 0;if(typeof e=="number")return e;if(typeof e=="function"){const t=e();return typeof t=="number"?t:t?.[l]}return e?.[l]}function Xi(e){return typeof e=="function"?e():e}function HR(e,l){l===void 0&&(l={});const{open:a,onOpenChange:t,dataRef:i,events:s,elements:m}=e,{enabled:d=!0,delay:v=0,handleClose:_=null,mouseOnly:f=!1,restMs:T=0,move:R=!0}=l,h=xu(),L=fE(),k=zt(_),N=zt(v),A=zt(a),P=zt(T),I=K.useRef(),x=K.useRef(-1),D=K.useRef(),q=K.useRef(-1),w=K.useRef(!0),G=K.useRef(!1),W=K.useRef(()=>{}),Z=K.useRef(!1),X=K.useCallback(()=>{var J;const C=(J=i.current.openEvent)==null?void 0:J.type;return C?.includes("mouse")&&C!=="mousedown"},[i]);K.useEffect(()=>{if(!d)return;function J(C){let{open:$}=C;$||(Pn(x),Pn(q),w.current=!0,Z.current=!1)}return s.on("openchange",J),()=>{s.off("openchange",J)}},[d,s]),K.useEffect(()=>{if(!d||!k.current||!a)return;function J($){X()&&t(!1,$,"hover")}const C=Mr(m.floating).documentElement;return C.addEventListener("mouseleave",J),()=>{C.removeEventListener("mouseleave",J)}},[m.floating,a,t,d,k,X]);const Q=K.useCallback(function(J,C,$){C===void 0&&(C=!0),$===void 0&&($="hover");const te=zi(N.current,"close",I.current);te&&!D.current?(Pn(x),x.current=window.setTimeout(()=>t(!1,J,$),te)):C&&(Pn(x),t(!1,J,$))},[N,t]),H=mr(()=>{W.current(),D.current=void 0}),B=mr(()=>{if(G.current){const J=Mr(m.floating).body;J.style.pointerEvents="",J.removeAttribute(Zm),G.current=!1}}),z=mr(()=>i.current.openEvent?["click","mousedown"].includes(i.current.openEvent.type):!1);K.useEffect(()=>{if(!d)return;function J(ue){if(Pn(x),w.current=!1,f&&!_u(I.current)||Xi(P.current)>0&&!zi(N.current,"open"))return;const fe=zi(N.current,"open",I.current);fe?x.current=window.setTimeout(()=>{A.current||t(!0,ue,"hover")},fe):a||t(!0,ue,"hover")}function C(ue){if(z()){B();return}W.current();const fe=Mr(m.floating);if(Pn(q),Z.current=!1,k.current&&i.current.floatingContext){a||Pn(x),D.current=k.current({...i.current.floatingContext,tree:h,x:ue.clientX,y:ue.clientY,onClose(){B(),H(),z()||Q(ue,!0,"safe-polygon")}});const He=D.current;fe.addEventListener("mousemove",He),W.current=()=>{fe.removeEventListener("mousemove",He)};return}(I.current==="touch"?!$a(m.floating,ue.relatedTarget):!0)&&Q(ue)}function $(ue){z()||i.current.floatingContext&&(k.current==null||k.current({...i.current.floatingContext,tree:h,x:ue.clientX,y:ue.clientY,onClose(){B(),H(),z()||Q(ue)}})(ue))}function te(){Pn(x)}function ne(ue){z()||Q(ue,!1)}if(Pe(m.domReference)){const ue=m.domReference,fe=m.floating;return a&&ue.addEventListener("mouseleave",$),R&&ue.addEventListener("mousemove",J,{once:!0}),ue.addEventListener("mouseenter",J),ue.addEventListener("mouseleave",C),fe&&(fe.addEventListener("mouseleave",$),fe.addEventListener("mouseenter",te),fe.addEventListener("mouseleave",ne)),()=>{a&&ue.removeEventListener("mouseleave",$),R&&ue.removeEventListener("mousemove",J),ue.removeEventListener("mouseenter",J),ue.removeEventListener("mouseleave",C),fe&&(fe.removeEventListener("mouseleave",$),fe.removeEventListener("mouseenter",te),fe.removeEventListener("mouseleave",ne))}}},[m,d,e,f,R,Q,H,B,t,a,A,h,N,k,i,z,P]),ma(()=>{var J;if(d&&a&&(J=k.current)!=null&&J.__options.blockPointerEvents&&X()){G.current=!0;const $=m.floating;if(Pe(m.domReference)&&$){var C;const te=Mr(m.floating).body;te.setAttribute(Zm,"");const ne=m.domReference,ue=h==null||(C=h.nodesRef.current.find(fe=>fe.id===L))==null||(C=C.context)==null?void 0:C.elements.floating;return ue&&(ue.style.pointerEvents=""),te.style.pointerEvents="none",ne.style.pointerEvents="auto",$.style.pointerEvents="auto",()=>{te.style.pointerEvents="",ne.style.pointerEvents="",$.style.pointerEvents=""}}}},[d,a,L,m,h,k,X]),ma(()=>{a||(I.current=void 0,Z.current=!1,H(),B())},[a,H,B]),K.useEffect(()=>()=>{H(),Pn(x),Pn(q),B()},[d,m.domReference,H,B]);const re=K.useMemo(()=>{function J(C){I.current=C.pointerType}return{onPointerDown:J,onPointerEnter:J,onMouseMove(C){const{nativeEvent:$}=C;function te(){!w.current&&!A.current&&t(!0,$,"hover")}f&&!_u(I.current)||a||Xi(P.current)===0||Z.current&&C.movementX**2+C.movementY**2<2||(Pn(q),I.current==="touch"?te():(Z.current=!0,q.current=window.setTimeout(te,Xi(P.current))))}}},[f,t,a,A,P]);return K.useMemo(()=>d?{reference:re}:{},[d,re])}function Zi(e,l){if(!e||!l)return!1;const a=l.getRootNode==null?void 0:l.getRootNode();if(e.contains(l))return!0;if(a&&ul(a)){let t=l;for(;t;){if(e===t)return!0;t=t.parentNode||t.host}}return!1}function jR(e){return"composedPath"in e?e.composedPath()[0]:e.target}const UR={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},qR={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},Qm=e=>{var l,a;return{escapeKey:typeof e=="boolean"?e:(l=e?.escapeKey)!=null?l:!1,outsidePress:typeof e=="boolean"?e:(a=e?.outsidePress)!=null?a:!0}};function xR(e,l){l===void 0&&(l={});const{open:a,onOpenChange:t,elements:i,dataRef:s}=e,{enabled:m=!0,escapeKey:d=!0,outsidePress:v=!0,outsidePressEvent:_="pointerdown",referencePress:f=!1,referencePressEvent:T="pointerdown",ancestorScroll:R=!1,bubbles:h,capture:L}=l,k=xu(),N=mr(typeof v=="function"?v:()=>!1),A=typeof v=="function"?N:v,P=K.useRef(!1),I=K.useRef(!1),{escapeKey:x,outsidePress:D}=Qm(h),{escapeKey:q,outsidePress:w}=Qm(L),G=K.useRef(!1),W=mr(z=>{var re;if(!a||!m||!d||z.key!=="Escape"||G.current)return;const J=(re=s.current.floatingContext)==null?void 0:re.nodeId,C=k?Wi(k.nodesRef.current,J):[];if(!x&&(z.stopPropagation(),C.length>0)){let $=!0;if(C.forEach(te=>{var ne;if((ne=te.context)!=null&&ne.open&&!te.context.dataRef.current.__escapeKeyBubbles){$=!1;return}}),!$)return}t(!1,IR(z)?z.nativeEvent:z,"escape-key")}),Z=mr(z=>{var re;const J=()=>{var C;W(z),(C=la(z))==null||C.removeEventListener("keydown",J)};(re=la(z))==null||re.addEventListener("keydown",J)}),X=mr(z=>{var re;const J=P.current;P.current=!1;const C=I.current;if(I.current=!1,_==="click"&&C||J||typeof A=="function"&&!A(z))return;const $=la(z),te="["+Cu("inert")+"]",ne=Mr(i.floating).querySelectorAll(te);let ue=Pe($)?$:null;for(;ue&&!Er(ue);){const we=vr(ue);if(Er(we)||!Pe(we))break;ue=we}if(ne.length&&Pe($)&&!yR($)&&!$a($,i.floating)&&Array.from(ne).every(we=>!$a(ue,we)))return;if(Rn($)&&B){const we=Er($),je=On($),Te=/auto|scroll/,ye=we||Te.test(je.overflowX),Xe=we||Te.test(je.overflowY),Ue=ye&&$.clientWidth>0&&$.scrollWidth>$.clientWidth,xe=Xe&&$.clientHeight>0&&$.scrollHeight>$.clientHeight,kn=je.direction==="rtl",Be=xe&&(kn?z.offsetX<=$.offsetWidth-$.clientWidth:z.offsetX>$.clientWidth),Ze=Ue&&z.offsetY>$.clientHeight;if(Be||Ze)return}const fe=(re=s.current.floatingContext)==null?void 0:re.nodeId,gn=k&&Wi(k.nodesRef.current,fe).some(we=>{var je;return Ji(z,(je=we.context)==null?void 0:je.elements.floating)});if(Ji(z,i.floating)||Ji(z,i.domReference)||gn)return;const He=k?Wi(k.nodesRef.current,fe):[];if(He.length>0){let we=!0;if(He.forEach(je=>{var Te;if((Te=je.context)!=null&&Te.open&&!je.context.dataRef.current.__outsidePressBubbles){we=!1;return}}),!we)return}t(!1,z,"outside-press")}),Q=mr(z=>{var re;const J=()=>{var C;X(z),(C=la(z))==null||C.removeEventListener(_,J)};(re=la(z))==null||re.addEventListener(_,J)});K.useEffect(()=>{if(!a||!m)return;s.current.__escapeKeyBubbles=x,s.current.__outsidePressBubbles=D;let z=-1;function re(ne){t(!1,ne,"ancestor-scroll")}function J(){window.clearTimeout(z),G.current=!0}function C(){z=window.setTimeout(()=>{G.current=!1},_l()?5:0)}const $=Mr(i.floating);d&&($.addEventListener("keydown",q?Z:W,q),$.addEventListener("compositionstart",J),$.addEventListener("compositionend",C)),A&&$.addEventListener(_,w?Q:X,w);let te=[];return R&&(Pe(i.domReference)&&(te=Sr(i.domReference)),Pe(i.floating)&&(te=te.concat(Sr(i.floating))),!Pe(i.reference)&&i.reference&&i.reference.contextElement&&(te=te.concat(Sr(i.reference.contextElement)))),te=te.filter(ne=>{var ue;return ne!==((ue=$.defaultView)==null?void 0:ue.visualViewport)}),te.forEach(ne=>{ne.addEventListener("scroll",re,{passive:!0})}),()=>{d&&($.removeEventListener("keydown",q?Z:W,q),$.removeEventListener("compositionstart",J),$.removeEventListener("compositionend",C)),A&&$.removeEventListener(_,w?Q:X,w),te.forEach(ne=>{ne.removeEventListener("scroll",re)}),window.clearTimeout(z)}},[s,i,d,A,_,a,t,R,m,x,D,W,q,Z,X,w,Q]),K.useEffect(()=>{P.current=!1},[A,_]);const H=K.useMemo(()=>({onKeyDown:W,...f&&{[UR[T]]:z=>{t(!1,z.nativeEvent,"reference-press")},...T!=="click"&&{onClick(z){t(!1,z.nativeEvent,"reference-press")}}}}),[W,t,f,T]),B=K.useMemo(()=>({onKeyDown:W,onMouseDown(){I.current=!0},onMouseUp(){I.current=!0},[qR[_]]:()=>{P.current=!0}}),[W,_]);return K.useMemo(()=>m?{reference:H,floating:B}:{},[m,H,B])}function CR(e){const{open:l=!1,onOpenChange:a,elements:t}=e,i=GR(),s=K.useRef({}),[m]=K.useState(()=>BR()),d=fE()!=null,[v,_]=K.useState(t.reference),f=mr((h,L,k)=>{s.current.openEvent=h?L:void 0,m.emit("openchange",{open:h,event:L,reason:k,nested:d}),a?.(h,L,k)}),T=K.useMemo(()=>({setPositionReference:_}),[]),R=K.useMemo(()=>({reference:v||t.reference||null,floating:t.floating||null,domReference:t.reference}),[v,t.reference,t.floating]);return K.useMemo(()=>({dataRef:s,open:l,onOpenChange:f,elements:R,events:m,floatingId:i,refs:T}),[l,f,R,m,i,T])}function YR(e){e===void 0&&(e={});const{nodeId:l}=e,a=CR({...e,elements:{reference:null,floating:null,...e.elements}}),t=e.rootContext||a,i=t.elements,[s,m]=K.useState(null),[d,v]=K.useState(null),f=i?.domReference||s,T=K.useRef(null),R=xu();ma(()=>{f&&(T.current=f)},[f]);const h=aR({...e,elements:{...i,...d&&{reference:d}}}),L=K.useCallback(I=>{const x=Pe(I)?{getBoundingClientRect:()=>I.getBoundingClientRect(),getClientRects:()=>I.getClientRects(),contextElement:I}:I;v(x),h.refs.setReference(x)},[h.refs]),k=K.useCallback(I=>{(Pe(I)||I===null)&&(T.current=I,m(I)),(Pe(h.refs.reference.current)||h.refs.reference.current===null||I!==null&&!Pe(I))&&h.refs.setReference(I)},[h.refs]),N=K.useMemo(()=>({...h.refs,setReference:k,setPositionReference:L,domReference:T}),[h.refs,k,L]),A=K.useMemo(()=>({...h.elements,domReference:f}),[h.elements,f]),P=K.useMemo(()=>({...h,...t,refs:N,elements:A,nodeId:l}),[h,N,A,l,t]);return ma(()=>{t.dataRef.current.floatingContext=P;const I=R?.nodesRef.current.find(x=>x.id===l);I&&(I.context=P)}),K.useMemo(()=>({...h,context:P,refs:N,elements:A}),[h,N,A,P])}function Qi(){return NR()&&hR()}function $R(e,l){l===void 0&&(l={});const{open:a,onOpenChange:t,events:i,dataRef:s,elements:m}=e,{enabled:d=!0,visibleOnly:v=!0}=l,_=K.useRef(!1),f=K.useRef(-1),T=K.useRef(!0);K.useEffect(()=>{if(!d)return;const h=vn(m.domReference);function L(){!a&&Rn(m.domReference)&&m.domReference===$m(Mr(m.domReference))&&(_.current=!0)}function k(){T.current=!0}function N(){T.current=!1}return h.addEventListener("blur",L),Qi()&&(h.addEventListener("keydown",k,!0),h.addEventListener("pointerdown",N,!0)),()=>{h.removeEventListener("blur",L),Qi()&&(h.removeEventListener("keydown",k,!0),h.removeEventListener("pointerdown",N,!0))}},[m.domReference,a,d]),K.useEffect(()=>{if(!d)return;function h(L){let{reason:k}=L;(k==="reference-press"||k==="escape-key")&&(_.current=!0)}return i.on("openchange",h),()=>{i.off("openchange",h)}},[i,d]),K.useEffect(()=>()=>{Pn(f)},[]);const R=K.useMemo(()=>({onMouseLeave(){_.current=!1},onFocus(h){if(_.current)return;const L=la(h.nativeEvent);if(v&&Pe(L)){if(Qi()&&!h.relatedTarget){if(!T.current&&!AR(L))return}else if(!SR(L))return}t(!0,h.nativeEvent,"focus")},onBlur(h){_.current=!1;const L=h.relatedTarget,k=h.nativeEvent,N=Pe(L)&&L.hasAttribute(Cu("focus-guard"))&&L.getAttribute("data-type")==="outside";f.current=window.setTimeout(()=>{var A;const P=$m(m.domReference?m.domReference.ownerDocument:document);!L&&P===m.domReference||$a((A=s.current.floatingContext)==null?void 0:A.refs.floating.current,P)||$a(m.domReference,P)||N||t(!1,k,"focus")})}}),[s,m.domReference,t,v]);return K.useMemo(()=>d?{reference:R}:{},[d,R])}function eu(e,l,a){const t=new Map,i=a==="item";let s=e;if(i&&e){const{[Jm]:m,[Wm]:d,...v}=e;s=v}return{...a==="floating"&&{tabIndex:-1,[KR]:""},...s,...l.map(m=>{const d=m?m[a]:null;return typeof d=="function"?e?d(e):null:d}).concat(e).reduce((m,d)=>(d&&Object.entries(d).forEach(v=>{let[_,f]=v;if(!(i&&[Jm,Wm].includes(_)))if(_.indexOf("on")===0){if(t.has(_)||t.set(_,[]),typeof f=="function"){var T;(T=t.get(_))==null||T.push(f),m[_]=function(){for(var R,h=arguments.length,L=new Array(h),k=0;k<h;k++)L[k]=arguments[k];return(R=t.get(_))==null?void 0:R.map(N=>N(...L)).find(N=>N!==void 0)}}}else m[_]=f}),m),{})}}function JR(e){e===void 0&&(e=[]);const l=e.map(d=>d?.reference),a=e.map(d=>d?.floating),t=e.map(d=>d?.item),i=K.useCallback(d=>eu(d,e,"reference"),l),s=K.useCallback(d=>eu(d,e,"floating"),a),m=K.useCallback(d=>eu(d,e,"item"),t);return K.useMemo(()=>({getReferenceProps:i,getFloatingProps:s,getItemProps:m}),[i,s,m])}function WR(e,l,a){a===void 0&&(a=!0);let t=e.filter(s=>{var m;return s.parentId===l&&((m=s.context)==null?void 0:m.open)}),i=t;for(;i.length;)i=a?e.filter(s=>{var m;return(m=i)==null?void 0:m.some(d=>{var v;return s.parentId===d.id&&((v=s.context)==null?void 0:v.open)})}):e,t=t.concat(i);return t}function ed(e,l){const[a,t]=e;let i=!1;const s=l.length;for(let m=0,d=s-1;m<s;d=m++){const[v,_]=l[m]||[0,0],[f,T]=l[d]||[0,0];_>=t!=T>=t&&a<=(f-v)*(t-_)/(T-_)+v&&(i=!i)}return i}function zR(e,l){return e[0]>=l.x&&e[0]<=l.x+l.width&&e[1]>=l.y&&e[1]<=l.y+l.height}function XR(e){e===void 0&&(e={});const{buffer:l=.5,blockPointerEvents:a=!1,requireIntent:t=!0}=e;let i,s=!1,m=null,d=null,v=performance.now();function _(T,R){const h=performance.now(),L=h-v;if(m===null||d===null||L===0)return m=T,d=R,v=h,null;const k=T-m,N=R-d,P=Math.sqrt(k*k+N*N)/L;return m=T,d=R,v=h,P}const f=T=>{let{x:R,y:h,placement:L,elements:k,onClose:N,nodeId:A,tree:P}=T;return function(x){function D(){clearTimeout(i),N()}if(clearTimeout(i),!k.domReference||!k.floating||L==null||R==null||h==null)return;const{clientX:q,clientY:w}=x,G=[q,w],W=jR(x),Z=x.type==="mouseleave",X=Zi(k.floating,W),Q=Zi(k.domReference,W),H=k.domReference.getBoundingClientRect(),B=k.floating.getBoundingClientRect(),z=L.split("-")[0],re=R>B.right-B.width/2,J=h>B.bottom-B.height/2,C=zR(G,H),$=B.width>H.width,te=B.height>H.height,ne=($?H:B).left,ue=($?H:B).right,fe=(te?H:B).top,gn=(te?H:B).bottom;if(X&&(s=!0,!Z))return;if(Q&&(s=!1),Q&&!Z){s=!0;return}if(Z&&Pe(x.relatedTarget)&&Zi(k.floating,x.relatedTarget)||P&&WR(P.nodesRef.current,A).some(je=>{let{context:Te}=je;return Te?.open}))return;if(z==="top"&&h>=H.bottom-1||z==="bottom"&&h<=H.top+1||z==="left"&&R>=H.right-1||z==="right"&&R<=H.left+1)return D();let He=[];switch(z){case"top":He=[[ne,H.top+1],[ne,B.bottom-1],[ue,B.bottom-1],[ue,H.top+1]];break;case"bottom":He=[[ne,B.top+1],[ne,H.bottom-1],[ue,H.bottom-1],[ue,B.top+1]];break;case"left":He=[[B.right-1,gn],[B.right-1,fe],[H.left+1,fe],[H.left+1,gn]];break;case"right":He=[[H.right-1,gn],[H.right-1,fe],[B.left+1,fe],[B.left+1,gn]];break}function we(je){let[Te,ye]=je;switch(z){case"top":{const Xe=[$?Te+l/2:re?Te+l*4:Te-l*4,ye+l+1],Ue=[$?Te-l/2:re?Te+l*4:Te-l*4,ye+l+1],xe=[[B.left,re||$?B.bottom-l:B.top],[B.right,re?$?B.bottom-l:B.top:B.bottom-l]];return[Xe,Ue,...xe]}case"bottom":{const Xe=[$?Te+l/2:re?Te+l*4:Te-l*4,ye-l],Ue=[$?Te-l/2:re?Te+l*4:Te-l*4,ye-l],xe=[[B.left,re||$?B.top+l:B.bottom],[B.right,re?$?B.top+l:B.bottom:B.top+l]];return[Xe,Ue,...xe]}case"left":{const Xe=[Te+l+1,te?ye+l/2:J?ye+l*4:ye-l*4],Ue=[Te+l+1,te?ye-l/2:J?ye+l*4:ye-l*4];return[...[[J||te?B.right-l:B.left,B.top],[J?te?B.right-l:B.left:B.right-l,B.bottom]],Xe,Ue]}case"right":{const Xe=[Te-l,te?ye+l/2:J?ye+l*4:ye-l*4],Ue=[Te-l,te?ye-l/2:J?ye+l*4:ye-l*4],xe=[[J||te?B.left+l:B.right,B.top],[J?te?B.left+l:B.right:B.left+l,B.bottom]];return[Xe,Ue,...xe]}}}if(!ed([q,w],He)){if(s&&!C)return D();if(!Z&&t){const je=_(x.clientX,x.clientY);if(je!==null&&je<.1)return D()}ed([q,w],we([R,h]))?!s&&t&&(i=window.setTimeout(D,40)):D()}}};return f.__options={blockPointerEvents:a},f}var ZR=function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)l.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]]);return a};const QR=K.forwardRef((e,l)=>{var{className:a,header:t,children:i,open:s,defaultOpen:m=!1,onClick:d,size:v="medium",onOpenChange:_}=e,f=ZR(e,["className","header","children","open","defaultOpen","onClick","size","onOpenChange"]);const{cn:T}=Le(),[R,h]=Vu({defaultValue:m,value:s,onChange:_}),L=v==="small"?"small":"medium";return F.createElement("div",{className:T("navds-read-more",`navds-read-more--${v}`,a,{"navds-read-more--open":R}),"data-volume":"low"},F.createElement("button",Object.assign({},f,{ref:l,type:"button",className:T("navds-read-more__button","navds-body-short",{"navds-body-short--small":v==="small"}),onClick:El(d,()=>h(k=>!k)),"aria-expanded":R,"data-state":R?"open":"closed"}),F.createElement(nE,{className:T("navds-read-more__expand-icon"),"aria-hidden":!0}),F.createElement("span",null,t)),F.createElement(al,{as:"div","aria-hidden":!R,className:T("navds-read-more__content",{"navds-read-more__content--closed":!R}),size:L,"data-state":R?"open":"closed"},i))}),ek=K.createContext(null),nk=(e,l)=>{var a,t,i;const{size:s,error:m,errorId:d}=e,v=K.useContext(ek),_=dl(),f=(a=e.id)!==null&&a!==void 0?a:`${l}-${_}`,T=d??`${l}-error-${_}`,R=`${l}-description-${_}`,h=v?.disabled||e.disabled,L=(v?.readOnly||e.readOnly)&&!h||void 0,k=!h&&!L&&!!(m||v?.error),N=!h&&!L&&!!m&&typeof m!="boolean",A=Object.assign({},k?{"aria-invalid":!0}:{});return e?.required,{showErrorMsg:N,hasError:k,errorId:T,inputDescriptionId:R,size:(t=s??v?.size)!==null&&t!==void 0?t:"medium",readOnly:L,inputProps:Object.assign(Object.assign({id:f},A),{"aria-describedby":$d(e["aria-describedby"],{[R]:e.description&&!fu(e.description),[T]:N,[(i=v?.errorId)!==null&&i!==void 0?i:""]:k&&v?.error})||void 0,disabled:h})}};function fu(e,l=!0){if(F.isValidElement(e)){if(e.type===QR)return!0;if(e.props.children&&l)return fu(e.props.children,!1)}else if(Array.isArray(e))return e.some(a=>fu(a,l));return!1}function ze(e,l,a,t){return t?typeof t=="string"?{[`--__${e}c-${l}-${a}-xs`]:t}:Object.fromEntries(Object.entries(t).map(([i,s])=>[`--__${e}c-${l}-${a}-${i}`,s])):{}}const rk={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},nd=(e,l,a,t,i,s)=>l.split(" ").map((m,d,v)=>{var _;if(e==="margin-inline"&&m==="full")return`calc((100vw - ${100/v.length}%)/-2)`;if(e==="padding-inline"&&m==="full")return`calc((100vw - ${100/v.length}%)/2)`;if(["mi","mb"].includes(e)&&m==="auto")return"auto";let f=`var(--${s}-${a}-${m})`;if(t.includes(m))f=m==="px"?"1px":m;else if(m.startsWith("space"))f=`var(--${s}-${m})`;else{const T=`--${s}-spacing-${m}`;f=`var(${(_=rk[T])!==null&&_!==void 0?_:T})`}return i?m==="0"?"0":`calc(-1 * ${f})`:f}).join(" ");function Nn(e,l,a,t,i,s=!1,m=[]){if(!i)return{};if(typeof i=="string")return{[`--__${e}c-${l}-${a}-xs`]:nd(a,i,t,m,s,e)};const d={};return Object.entries(i).forEach(([v,_])=>{d[`--__${e}c-${l}-${a}-${v}`]=nd(a,_,t,m,s,e)}),d}const cE=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],TE=({children:e,className:l,padding:a,paddingInline:t,paddingBlock:i,margin:s,marginInline:m,marginBlock:d,width:v,minWidth:_,maxWidth:f,height:T,minHeight:R,maxHeight:h,position:L,inset:k,top:N,right:A,left:P,bottom:I,overflow:x,overflowX:D,overflowY:q,flexBasis:w,flexGrow:G,flexShrink:W,gridColumn:Z})=>{const X=Ea(!1),{cn:Q}=Le(),H=X?.isDarkside?"ax":"a",B=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},Nn(H,"r","p","spacing",a)),Nn(H,"r","pi","spacing",t)),Nn(H,"r","pb","spacing",i)),Nn(H,"r","m","spacing",s)),Nn(H,"r","mi","spacing",m)),Nn(H,"r","mb","spacing",d)),ze(H,"r","w",v)),ze(H,"r","minw",_)),ze(H,"r","maxw",f)),ze(H,"r","h",T)),ze(H,"r","minh",R)),ze(H,"r","maxh",h)),ze(H,"r","position",L)),Nn(H,"r","inset","spacing",k)),Nn(H,"r","top","spacing",N)),Nn(H,"r","right","spacing",A)),Nn(H,"r","bottom","spacing",I)),Nn(H,"r","left","spacing",P)),ze(H,"r","overflow",x)),ze(H,"r","overflowx",D)),ze(H,"r","overflowy",q)),ze(H,"r","flex-basis",w)),ze(H,"r","flex-grow",G)),ze(H,"r","flex-shrink",W)),ze(H,"r","grid-column",Z));return F.createElement(Wa,{className:Q({className:l,"navds-r-p":a,"navds-r-pi":t,"navds-r-pb":i,"navds-r-m":s,"navds-r-mi":m,"navds-r-mb":d,"navds-r-w":v,"navds-r-minw":_,"navds-r-maxw":f,"navds-r-h":T,"navds-r-minh":R,"navds-r-maxh":h,"navds-r-position":L,"navds-r-inset":k,"navds-r-top":N,"navds-r-right":A,"navds-r-bottom":I,"navds-r-left":P,"navds-r-overflow":x,"navds-r-overflowx":D,"navds-r-overflowy":q,"navds-r-flex-basis":w,"navds-r-flex-grow":G,"navds-r-flex-shrink":W,"navds-r-grid-column":Z}),style:B},e)};var ak=function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)l.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]]);return a};const tk=K.forwardRef((e,l)=>{var{children:a,className:t,as:i="div",columns:s,gap:m,style:d,align:v,asChild:_}=e,f=ak(e,["children","className","as","columns","gap","style","align","asChild"]);const T=Ea(!1),R=T?.isDarkside?"ax":"a",{cn:h}=Le(),L=Object.assign(Object.assign(Object.assign(Object.assign({},d),{[`--__${R}c-hgrid-align`]:v}),Nn(R,"hgrid","gap","spacing",m)),ze(R,"hgrid","columns",lk(s))),k=_?Wa:i;return F.createElement(TE,Object.assign({},f),F.createElement(k,Object.assign({},za(f,cE),{ref:l,className:h("navds-hgrid",t,{"navds-hgrid-gap":m,"navds-hgrid-align":v}),style:L}),a))});function lk(e){return e?typeof e=="string"||typeof e=="number"?rd(e):Object.fromEntries(Object.entries(e).map(([l,a])=>[l,rd(a)])):{}}const rd=e=>typeof e=="number"?`repeat(${e}, minmax(0, 1fr))`:e;var ik=function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)l.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]]);return a};const pE=K.forwardRef((e,l)=>{var{children:a,className:t,as:i="div",align:s,justify:m,wrap:d=!0,gap:v,style:_,direction:f="row",asChild:T}=e,R=ik(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const h=Ea(!1),L=h?.isDarkside?"ax":"a",{cn:k}=Le(),N=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},_),Nn(L,"stack","gap","spacing",v)),ze(L,"stack","direction",f)),ze(L,"stack","align",s)),ze(L,"stack","justify",m)),A=T?Wa:i;return F.createElement(TE,Object.assign({},R),F.createElement(A,Object.assign({},za(R,cE),{ref:l,style:N,className:k("navds-stack",t,{"navds-vstack":f==="column","navds-hstack":f==="row","navds-stack-gap":v,"navds-stack-align":s,"navds-stack-justify":m,"navds-stack-direction":f,"navds-stack-wrap":d})}),a))});var uk=function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)l.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]]);return a};const ua=K.forwardRef((e,l)=>{var{as:a="div"}=e,t=uk(e,["as"]);return F.createElement(pE,Object.assign({as:a},t,{ref:l,direction:"row"}))});var sk=function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)l.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]]);return a};const pl=K.forwardRef((e,l)=>{var{as:a="div"}=e,t=sk(e,["as"]);return F.createElement(pE,Object.assign({as:a},t,{ref:l,direction:"column",wrap:!1}))}),nl=K.createContext({listType:"ul",size:"medium"});var ok=function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)l.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]]);return a};const hE=K.forwardRef((e,l)=>{var{className:a,children:t,title:i,icon:s}=e,m=ok(e,["className","children","title","icon"]);const{listType:d,size:v}=K.useContext(nl),{cn:_}=Le();return d==="ol"&&s&&console.warn("<List />: Icon prop is not supported for ordered lists. Please remove the icon prop."),F.createElement("li",Object.assign({},m,{ref:l,className:_("navds-list__item",a)}),d==="ul"&&F.createElement("div",{className:_("navds-list__item-marker",{"navds-list__item-marker--icon":s,"navds-list__item-marker--bullet":!s})},s||F.createElement("svg",{viewBox:"0 0 6 6",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,focusable:!1,role:"img"},F.createElement("rect",{width:"6",height:"6",rx:"3",fill:"currentColor"}))),F.createElement("div",null,i&&F.createElement(al,{as:"p",size:v,weight:"semibold"},i),t))});hE.displayName="List.Item";var mk=function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)l.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]]);return a};const dk={small:"xsmall",medium:"small",large:"medium"},cu=K.forwardRef((e,l)=>{var{children:a,className:t,as:i="ul",title:s,description:m,headingTag:d,size:v,"aria-label":_,"aria-labelledby":f}=e,T=mk(e,["children","className","as","title","description","headingTag","size","aria-label","aria-labelledby"]);const{size:R}=K.useContext(nl),{cn:h}=Le(),L=Ea(!1),k=v??R;return L?.isDarkside?F.createElement(nl.Provider,{value:{listType:i,size:k}},F.createElement(al,Object.assign({as:"div"},T,{size:k,ref:l,className:h("navds-list",`navds-list--${k}`,t)}),F.createElement(i,{role:"list","aria-label":_,"aria-labelledby":f},a))):F.createElement(nl.Provider,{value:{listType:i,size:k}},F.createElement(al,Object.assign({as:"div"},T,{size:k,ref:l,className:h("navds-list",`navds-list--${k}`,t)}),s&&F.createElement(eE,{size:dk[k],as:d??"h3"},s),m&&F.createElement(ml,{size:k},m),F.createElement(i,{role:"list","aria-label":_,"aria-labelledby":f},a)))});cu.Item=hE;var Ek=function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)l.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]]);return a};const vk=K.forwardRef((e,l)=>{var{className:a}=e,t=Ek(e,["className"]);const{cn:i}=Le();return F.createElement("tbody",Object.assign({},t,{ref:l,className:i("navds-table__body",a)}))});var gk=function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)l.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]]);return a};const NE=K.forwardRef((e,l)=>{var{className:a,children:t,align:i,textSize:s}=e,m=gk(e,["className","children","align","textSize"]);const{cn:d}=Le();return F.createElement("th",Object.assign({ref:l,className:d("navds-table__header-cell","navds-label",a,{[`navds-table__header-cell--align-${i}`]:i,"navds-label--small":s==="small"})},m),t)}),RE=K.createContext(null);var _k=function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)l.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]]);return a};const fk=K.forwardRef((e,l)=>{var a,t,i,s,{className:m,children:d,sortable:v=!1,sortKey:_}=e,f=_k(e,["className","children","sortable","sortKey"]);const T=K.useContext(RE),{cn:R}=Le();return v&&!_&&console.warn("ColumnHeader with `sortable=true` must have a sortKey."),F.createElement(NE,Object.assign({scope:"col",ref:l,className:R(m),"aria-sort":v?((a=T?.sort)===null||a===void 0?void 0:a.orderBy)===_?(t=T?.sort)===null||t===void 0?void 0:t.direction:"none":void 0},f),v?F.createElement("button",{type:"button",className:R("navds-table__sort-button"),onClick:v&&_?()=>{var h;return(h=T?.onSortChange)===null||h===void 0?void 0:h.call(T,_)}:void 0},d,((i=T?.sort)===null||i===void 0?void 0:i.orderBy)===_?((s=T?.sort)===null||s===void 0?void 0:s.direction)==="descending"?F.createElement(R0,{"aria-hidden":!0}):F.createElement(y0,{"aria-hidden":!0}):F.createElement(_0,{"aria-hidden":!0})):d)});var ck=function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)l.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]]);return a};const kE=K.forwardRef((e,l)=>{var{className:a,children:t="",align:i,textSize:s}=e,m=ck(e,["className","children","align","textSize"]);const{cn:d}=Le();return F.createElement(ml,Object.assign({as:"td",ref:l,className:d("navds-table__data-cell",a,{[`navds-table__data-cell--align-${i}`]:i}),size:s},m),t)});var Tk=function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)l.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]]);return a};const pk=globalThis?.matchMedia?globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches:!1;function hk(e){const l=parseFloat(e);return!Number.isNaN(l)&&Number.isFinite(l)}function ad(e){return typeof e=="string"&&e[e.length-1]==="%"&&hk(e.substring(0,e.length-1))}function nu(e,l){l===0&&e?.style&&(e.style.display="none")}function Nk(e,l){l===0&&e?.style&&(e.style.display="")}const Rk=e=>{var{children:l,className:a,innerClassName:t,duration:i=250,easing:s="ease",height:m}=e,d=Tk(e,["children","className","innerClassName","duration","easing","height"]);const{cn:v}=Le(),_=K.useRef(m),f=K.useRef(null),T=K.useRef(),R=K.useRef(),h=K.useRef(m),L=K.useRef("visible"),k=pk?0:i;typeof h.current=="number"?(typeof m!="string"&&(h.current=m<0?0:m),L.current="hidden"):ad(h.current)&&(h.current=m==="0%"?0:m,L.current="hidden");const[N,A]=K.useState(h.current),[P,I]=K.useState(L.current),[x,D]=K.useState(!1);K.useEffect(()=>{nu(f.current,h.current)},[]),K.useEffect(()=>{if(m!==_.current&&f.current){Nk(f.current,_.current),f.current.style.overflow="hidden";const W=f.current.offsetHeight;f.current.style.overflow="";const Z=k;let X,Q,H="hidden",B;const z=_.current==="auto";typeof m=="number"?(X=m<0?0:m,Q=X):ad(m)?(X=m==="0%"?0:m,Q=X):(X=W,Q="auto",H=void 0),z&&(Q=X,X=W),A(X),I("hidden"),D(!z),clearTimeout(R.current),clearTimeout(T.current),z?(B=!0,R.current=setTimeout(()=>{A(Q),I(H),D(B)},50),T.current=setTimeout(()=>{D(!1),nu(f.current,Q)},Z)):R.current=setTimeout(()=>{A(Q),I(H),D(!1),m!=="auto"&&nu(f.current,X)},Z)}return _.current=m,()=>{clearTimeout(R.current),clearTimeout(T.current)}},[m]);const q={height:N,overflow:P};x&&(q.transition=`height ${k}ms ${s} 0ms`,q.WebkitTransition=q.transition);const G=typeof d["aria-hidden"]<"u"?d["aria-hidden"]:m===0;return F.createElement("div",Object.assign({},d,{className:v(a),style:q}),F.createElement("div",{"aria-hidden":G,className:v(t),ref:f},l))};var kk=function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)l.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]]);return a};const yE=K.forwardRef((e,l)=>{var{className:a,selected:t=!1,shadeOnHover:i=!0}=e,s=kk(e,["className","selected","shadeOnHover"]);const{cn:m}=Le();return F.createElement("tr",Object.assign({},s,{ref:l,className:m("navds-table__row",a,{"navds-table__row--selected":t,"navds-table__row--shade-on-hover":i})}))});var yk=function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)l.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]]);return a};const Ak=K.forwardRef((e,l)=>{var{className:a,children:t,content:i,togglePlacement:s="left",defaultOpen:m=!1,open:d,onOpenChange:v,expansionDisabled:_=!1,expandOnRowClick:f=!1,colSpan:T=999,contentGutter:R,onClick:h}=e,L=yk(e,["className","children","content","togglePlacement","defaultOpen","open","onOpenChange","expansionDisabled","expandOnRowClick","colSpan","contentGutter","onClick"]);const{cn:k}=Le(),[N,A]=Vu({defaultValue:m,value:d,onChange:v}),P=Tl("global"),I=dl(),x=q=>{A(w=>!w),q.stopPropagation()},D=q=>{f&&!_&&!AE(q.target)&&x(q)};return F.createElement(F.Fragment,null,F.createElement(yE,Object.assign({},L,{ref:l,className:k("navds-table__expandable-row",a,{"navds-table__expandable-row--open":N,"navds-table__expandable-row--expansion-disabled":_,"navds-table__expandable-row--clickable":f}),onClick:El(h,D)}),s==="right"&&t,F.createElement(kE,{className:k("navds-table__toggle-expand-cell",{"navds-table__toggle-expand-cell--open":N}),onClick:_?()=>null:x},!_&&F.createElement("button",{className:k("navds-table__toggle-expand-button"),type:"button","aria-controls":I,"aria-expanded":N,onClick:x},F.createElement(nE,{className:k("navds-table__expandable-icon"),title:P(N?"showLess":"showMore")}))),s==="left"&&t),F.createElement("tr",{"data-state":N?"open":"closed",className:k("navds-table__expanded-row"),"aria-hidden":!N,id:I},F.createElement("td",{colSpan:T,className:k("navds-table__expanded-row-cell")},F.createElement(Rk,{className:k("navds-table__expanded-row-collapse"),innerClassName:k(`navds-table__expanded-row-content navds-table__expanded-row-content--gutter-${R??s}`),height:N?"auto":0,duration:150,easing:"cubic-bezier(0.39,0.57,0.56,1)"},i))))});function AE(e){return e.nodeName==="TD"||e.nodeName==="TH"||!e.parentElement?!1:["BUTTON","DETAILS","LABEL","SELECT","TEXTAREA","INPUT","A"].includes(e.nodeName)?!0:AE(e.parentElement)}var Sk=function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)l.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]]);return a};const Ik=K.forwardRef((e,l)=>{var{className:a}=e,t=Sk(e,["className"]);const{cn:i}=Le();return F.createElement("thead",Object.assign({},t,{ref:l,className:i("navds-table__header",a)}))});var bk=function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)l.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]]);return a};const Me=K.forwardRef((e,l)=>{var{className:a,zebraStripes:t=!1,size:i="medium",onSortChange:s,sort:m,stickyHeader:d=!1}=e,v=bk(e,["className","zebraStripes","size","onSortChange","sort","stickyHeader"]);const{cn:_}=Le();return F.createElement(RE.Provider,{value:{onSortChange:s,sort:m}},F.createElement("table",Object.assign({},v,{ref:l,className:_("navds-table",`navds-table--${i}`,a,{"navds-table--zebra-stripes":t,"navds-table--sticky-header":d})})))});Me.Header=Ik;Me.Body=vk;Me.Row=yE;Me.ColumnHeader=fk;Me.HeaderCell=NE;Me.DataCell=kE;Me.ExpandableRow=Ak;var Lk=function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)l.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]]);return a};const Dk=K.forwardRef((e,l)=>{var{children:a,className:t,arrow:i=!0,placement:s="top",open:m,defaultOpen:d=!1,onOpenChange:v,offset:_,content:f,delay:T=150,id:R,keys:h,maxChar:L=80,describesChild:k=!1}=e,N=Lk(e,["children","className","arrow","placement","open","defaultOpen","onOpenChange","offset","content","delay","id","keys","maxChar","describesChild"]);const{cn:A}=Le(),[P,I]=Vu({defaultValue:d,value:m,onChange:v}),x=K.useRef(null),D=S0(!1),q=D?D.ref.current:void 0,{x:w,y:G,strategy:W,context:Z,placement:X,middlewareData:{arrow:{x:Q,y:H}={},hide:{referenceHidden:B}={}},refs:z}=YR({placement:s,open:P,onOpenChange:ne=>I(ne),middleware:[lR(_??(i?8:4)),iR(),uR({padding:5,fallbackPlacements:["bottom","top"]}),sR({element:x,padding:5})],whileElementsMounted:D?(ne,ue,fe)=>qm(ne,ue,fe,{animationFrame:!0}):qm,strategy:D?"fixed":void 0}),{getReferenceProps:re,getFloatingProps:J}=JR([HR(Z,{handleClose:XR(),restMs:T}),$R(Z),xR(Z)]),C=dl(R),$=Wd(l,z.setFloating);if(!a||a?.type===F.Fragment||a===F.Fragment)return console.error("<Tooltip> children needs to be a single ReactElement and not: <React.Fragment/> | <></>"),null;f?.length>L&&P&&console.warn(`Because of strict accessibility concers we encourage all Tooltips to have less than 80 characters. Can be overwritten with the maxChar-prop

Length:${f.length}
Tooltip-content: ${f}`);const te=k?P?{"aria-describedby":C}:{title:f}:{"aria-label":f};return F.createElement(F.Fragment,null,F.createElement(Wa,Object.assign({ref:z.setReference},re(),te,{"aria-keyshortcuts":h?h.join("+"):void 0}),a),F.createElement(sN,{rootElement:q,asChild:!0},P&&F.createElement("div",Object.assign({},J(Object.assign(Object.assign({},N),{ref:$,style:{position:W,top:G??0,left:w??0,visibility:B?"hidden":"visible"},role:"tooltip",id:C,className:A("navds-tooltip","navds-detail navds-detail--small",t)})),{"data-side":X,"data-state":"open"}),f,h&&F.createElement("span",{className:A("navds-tooltip__keys"),"aria-hidden":!0},h.map(ne=>F.createElement(t0,{as:"kbd",key:ne,className:A("navds-tooltip__key")},ne))),i&&F.createElement("div",{ref:ne=>{x.current=ne},className:A("navds-tooltip__arrow"),style:{left:Q!=null?`${Q}px`:"",top:H!=null?`${H}px`:"",right:"",bottom:"",[{top:"bottom",right:"left",bottom:"top",left:"right"}[X]]:"-3.5px"}}))))}),SE=K.createContext(null);var Kk=function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)l.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]]);return a};const IE=K.forwardRef((e,l)=>{var a,{className:t,children:i,disabled:s,onClick:m}=e,d=Kk(e,["className","children","disabled","onClick"]);const{cn:v}=Le(),_=Tl("Search"),f=K.useContext(SE);if(f===null)return console.warn("<Search.Button> has to be wrapped in <Search />"),null;const{size:T,variant:R,handleClick:h}=f;return F.createElement(qu,Object.assign({type:"submit"},d,{ref:l,size:T,variant:R==="secondary"?"secondary":"primary",className:v("navds-search__button-search",t),disabled:(a=f?.disabled)!==null&&a!==void 0?a:s,onClick:El(m,h),icon:F.createElement(rE,Object.assign({},i?{"aria-hidden":!0}:{title:_("search")}))}),i)});var Pk=function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)l.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]]);return a};const Tu=K.forwardRef((e,l)=>{const{inputProps:a,size:t="medium",inputDescriptionId:i,errorId:s,showErrorMsg:m,hasError:d}=nk(e,"searchfield"),{className:v,hideLabel:_=!0,label:f,description:T,value:R,clearButtonLabel:h,onClear:L,clearButton:k=!0,children:N,variant:A="primary",defaultValue:P,onChange:I,onSearchClick:x,htmlSize:D,"data-color":q}=e,w=Pk(e,["className","hideLabel","label","description","value","clearButtonLabel","onClear","clearButton","children","variant","defaultValue","onChange","onSearchClick","htmlSize","data-color"]),{cn:G}=Le(),W=K.useRef(null),Z=Wd(W,l),[X,Q]=K.useState(P??""),H=J=>{R===void 0&&Q(J),I?.(J)},B=J=>{var C,$;L?.(J),H(""),($=(C=W.current)===null||C===void 0?void 0:C.focus)===null||$===void 0||$.call(C)},z=()=>{x?.(`${R??X}`)},re=k&&!a.disabled&&(R??X);return F.createElement("div",{onKeyDown:J=>{var C;J.key==="Escape"&&(!((C=W.current)===null||C===void 0)&&C.value&&J.preventDefault(),B({trigger:"Escape",event:J}))},className:G(v,"navds-form-field",`navds-form-field--${t}`,"navds-search",{"navds-search--error":d,"navds-search--disabled":a.disabled,"navds-search--with-size":D}),"data-color":q},F.createElement(Bu,{htmlFor:a.id,size:t,className:G("navds-form-field__label",{"navds-sr-only":_})},f),!!T&&F.createElement(ml,{className:G("navds-form-field__description",{"navds-sr-only":_}),id:i,size:t,as:"div"},T),F.createElement("div",{className:G("navds-search__wrapper")},F.createElement("div",{className:G("navds-search__wrapper-inner")},A==="simple"&&F.createElement(rE,{"aria-hidden":!0,className:G("navds-search__search-icon")}),F.createElement("input",Object.assign({ref:Z},za(w,["error","errorId","size","readOnly"]),a,{value:R??X,onChange:J=>H(J.target.value),type:"search",className:G(v,"navds-search__input",`navds-search__input--${A}`,"navds-text-field__input","navds-body-short",`navds-body-short--${t}`)},D?{size:Number(D)}:{})),re&&F.createElement(Ok,{handleClear:B,size:t,clearButtonLabel:h})),F.createElement(SE.Provider,{value:{size:t,disabled:a.disabled,variant:A,handleClick:z}},N||A!=="simple"&&F.createElement(IE,{"data-color":q}))),F.createElement("div",{className:G("navds-form-field__error"),id:s,"aria-relevant":"additions removals","aria-live":"polite"},m&&F.createElement(i0,{size:t,showIcon:!0},e.error)))});function Ok({size:e,clearButtonLabel:l,handleClear:a}){const{cn:t}=Le(),i=Ea(!1),s=Tl("Search");return i?.isDarkside?F.createElement(qu,{className:t("navds-search__button-clear"),variant:"tertiary","data-color":"neutral",size:e==="medium"?"small":"xsmall",icon:F.createElement(Gm,{"aria-hidden":!0}),title:l||s("clear"),onClick:m=>a({trigger:"Click",event:m}),type:"button"}):F.createElement("button",{type:"button",onClick:m=>a({trigger:"Click",event:m}),className:t("navds-search__button-clear")},F.createElement("span",{className:t("navds-sr-only")},l||s("clear")),F.createElement(Gm,{"aria-hidden":!0}))}Tu.Button=IE;function Fk(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var td={exports:{}},Va={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ld;function wk(){if(ld)return Va;ld=1;var e=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function a(t,i,s){var m=null;if(s!==void 0&&(m=""+s),i.key!==void 0&&(m=""+i.key),"key"in i){s={};for(var d in i)d!=="key"&&(s[d]=i[d])}else s=i;return i=s.ref,{$$typeof:e,type:t,key:m,ref:i!==void 0?i:null,props:s}}return Va.Fragment=l,Va.jsx=a,Va.jsxs=a,Va}var id;function Gk(){return id||(id=1,td.exports=wk()),td.exports}var Ir=Gk();const et={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"};Hn(et);var ud={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var sd;function Bk(){return sd||(sd=1,(function(e){(function(){var l={}.hasOwnProperty;function a(){for(var s="",m=0;m<arguments.length;m++){var d=arguments[m];d&&(s=i(s,t.call(this,d)))}return s}function t(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return a.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var m="";for(var d in s)l.call(s,d)&&s[d]&&(m=i(m,this&&this[d]||d));return m}function i(s,m){return m?s?s+" "+m:s+m:s}e.exports?(a.default=a,e.exports=a):window.classNames=a})()})(ud)),ud.exports}var Vk=Bk();const Yu=Fk(Vk),Mk="_borderbox_1a0x6_1",Hk="_error_1a0x6_5",jk="_warning_1a0x6_8",Uk={borderbox:Mk,error:Hk,warning:jk};Yu.bind(Uk);const qk="_aksjonspunkt_11wjs_1",xk="_erAksjonspunktApent_11wjs_4",Ck="_erIkkeGodkjentAvBeslutter_11wjs_8",Yk={aksjonspunkt:qk,erAksjonspunktApent:xk,erIkkeGodkjentAvBeslutter:Ck};Yu.bind(Yk);const Ja=({dateString:e,year:l,month:a,day:t})=>Ir.jsx(Ir.Fragment,{children:zd(e,{year:l,month:a,day:t})}),ol=({dateTimeString:e,...l})=>Ir.jsx(Ir.Fragment,{children:$h(e,l)});Hn(et);Hn(et);const $k="_divider_1jpov_1",Jk="_dividerParagraf_1jpov_8",Wk="_leftPanel_1jpov_11",zk="_rightPanel_1jpov_14",Xk={divider:$k,dividerParagraf:Jk,leftPanel:Wk,rightPanel:zk};Yu.bind(Xk);Hn(et);const Zk=Hn(et),Qk=({tekst:e,children:l})=>{const[a,t]=K.useState(!1);if(!e)return l;const i=async()=>{await navigator.clipboard.writeText(e),t(!0),setTimeout(()=>{t(!1)},1e3)};return Ir.jsx(Dk,{content:Zk.formatMessage({id:a?"KopierbarTekst.Kopiert":"KopierbarTekst.Kopier"}),children:Ir.jsx("span",{"aria-hidden":"true",onClick:i,children:l??e})})},od={default:"_default_af3od_1",rød:"_rød_af3od_5"},sa=({beløp:e,kr:l=!1,rød:a=!1})=>{const t=e?.toString().replace(/\s/g,"");return Ir.jsx(Qk,{tekst:t,children:Ir.jsxs("span",{className:a?od.rød:od.default,children:[t?Jh(t):"-",t&&l&&" kr"]})})},zn=({tittel:e,children:l})=>M.jsxs(pl,{gap:"space-4",children:[M.jsx(Bu,{size:"medium",children:e}),l]});zn.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingInfoBlokk",props:{tittel:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const bE=({arbeidsgiverOpplysninger:e,arbeidsgiverIdent:l})=>{const a=gr();return M.jsxs(zn,{tittel:a.formatMessage({id:"InntektsmeldingFaktaPanel.arbeidsgiver.heading"}),children:[M.jsxs("span",{children:[M.jsx(be,{id:"InntektsmeldingFaktaPanel.arbeidsgiver.navn"}),": ",e.navn]}),M.jsxs("span",{children:[M.jsx(be,{id:"InntektsmeldingFaktaPanel.arbeidsgiver.underenhet"}),": ",l]})]})};bE.__docgenInfo={description:"",methods:[],displayName:"Arbeidsgiver",props:{arbeidsgiverOpplysninger:{required:!0,tsType:{name:"union",raw:`| (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: true; fødselsdato: string })
| (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: false })`,elements:[{name:"unknown"},{name:"unknown"}]},description:""},arbeidsgiverIdent:{required:!0,tsType:{name:"string"},description:""}}};const LE=({inntektsmelding:e,behandling:l,alleBehandlinger:a,alleKodeverk:t})=>{const i=gr(),s=e.tilknyttedeBehandlingIder.includes(l.uuid),m=a.filter(_=>e.tilknyttedeBehandlingIder.includes(_.uuid)),d=(()=>{const _=m.length;return s&&_>1?M.jsx(be,{id:"InntektsmeldingFaktaPanel.behandling.bruktIDenneOgFlere"}):s?M.jsx(be,{id:"InntektsmeldingFaktaPanel.behandling.bruktKunIDenne"}):_===0?M.jsx(be,{id:"InntektsmeldingFaktaPanel.behandling.ikkeBruktINoen"}):M.jsx(be,{id:"InntektsmeldingFaktaPanel.behandling.bruktIAndre"})})(),v=[...m].sort((_,f)=>new Date(_.opprettet).getTime()-new Date(f.opprettet).getTime());return M.jsxs(zn,{tittel:i.formatMessage({id:"InntektsmeldingFaktaPanel.behandling.heading"}),children:[d,M.jsx(cu,{children:v.map(_=>M.jsx(cu.Item,{children:M.jsxs(pl,{gap:"space-4",children:[M.jsx("span",{children:t.BehandlingType.find(({kode:f})=>f===_.type)?.navn}),M.jsxs("span",{children:[M.jsx(be,{id:"InntektsmeldingFaktaPanel.behandling.opprettet"})," ",M.jsx(ol,{dateTimeString:_.opprettet,separator:"kl"})]}),_.avsluttet?M.jsxs("span",{children:[M.jsx(be,{id:"InntektsmeldingFaktaPanel.behandling.avsluttet"})," ",M.jsx(ol,{dateTimeString:_.avsluttet,separator:"kl"})]}):null]})},_.uuid))})]})};LE.__docgenInfo={description:"",methods:[],displayName:"BehandlingsOversikt",props:{inntektsmelding:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd: number | null;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId: string | null;
  internArbeidsforholdId: string | null;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak | null;
  begrunnelse: string | null;
  saksbehandlersVurdering: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType | null;
  kildeSystem: string;
  startDatoPermisjon: string | null;
  aktiveNaturalytelser: Array<foreldrepenger_domene_iay_modell_NaturalYtelse>;
  refusjonsperioder: Array<foreldrepenger_domene_iay_modell_Refusjon>;
  innsendingsårsak: foreldrepenger_domene_iay_modell_kodeverk_InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: Array<string>;
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"internArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak | null",elements:[{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}]},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType | null",elements:[{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: foreldrepenger_domene_tid_DatoIntervallEntitet;
  beloepPerMnd: foreldrepenger_domene_typer_Beløp;
  type: foreldrepenger_domene_iay_modell_kodeverk_NaturalYtelseType;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!0}},{key:"type",value:{name:"union",raw:`| 'ELEKTRISK_KOMMUNIKASJON'
| 'AKSJER_UNDERKURS'
| 'LOSJI'
| 'KOST_DOEGN'
| 'BESOEKSREISER_HJEM'
| 'KOSTBESPARELSE_HJEM'
| 'RENTEFORDEL_LAAN'
| 'BIL'
| 'KOST_DAGER'
| 'BOLIG'
| 'FORSIKRINGER'
| 'FRI_TRANSPORT'
| 'OPSJONER'
| 'TILSKUDD_BARNEHAGE'
| 'ANNET'
| 'BEDRIFTSBARNEHAGE'
| 'YRKESBIL_KILOMETER'
| 'YRKESBIL_LISTEPRIS'
| 'UTENLANDSK_PENSJONSORDNING'
| '-'`,elements:[{name:"literal",value:"'ELEKTRISK_KOMMUNIKASJON'"},{name:"literal",value:"'AKSJER_UNDERKURS'"},{name:"literal",value:"'LOSJI'"},{name:"literal",value:"'KOST_DOEGN'"},{name:"literal",value:"'BESOEKSREISER_HJEM'"},{name:"literal",value:"'KOSTBESPARELSE_HJEM'"},{name:"literal",value:"'RENTEFORDEL_LAAN'"},{name:"literal",value:"'BIL'"},{name:"literal",value:"'KOST_DAGER'"},{name:"literal",value:"'BOLIG'"},{name:"literal",value:"'FORSIKRINGER'"},{name:"literal",value:"'FRI_TRANSPORT'"},{name:"literal",value:"'OPSJONER'"},{name:"literal",value:"'TILSKUDD_BARNEHAGE'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'BEDRIFTSBARNEHAGE'"},{name:"literal",value:"'YRKESBIL_KILOMETER'"},{name:"literal",value:"'YRKESBIL_LISTEPRIS'"},{name:"literal",value:"'UTENLANDSK_PENSJONSORDNING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_NaturalYtelse>",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  indexKey: string;
  refusjonsbeløp: foreldrepenger_domene_typer_Beløp;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!0}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_Refusjon>",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"'NY' | 'ENDRING' | '-'",elements:[{name:"literal",value:"'NY'"},{name:"literal",value:"'ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]}},description:""},behandling:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
  vilkår?: Array<tjenester_behandling_vilkår_VilkårDto>;
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
| '-'`,elements:[{name:"literal",value:"'OPPFYLT'"},{name:"literal",value:"'IKKE_OPPFYLT'"},{name:"literal",value:"'IKKE_VURDERT'"},{name:"literal",value:"'-'"}],required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"lovReferanse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"overstyrbar",value:{name:"boolean",required:!0}},{key:"evaluering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"input",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:"Array<tjenester_behandling_vilkår_VilkårDto>",required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
| '6019'
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
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6019'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_vilkår_VilkårType | null",elements:[{name:"union",raw:`| 'FP_VK_1'
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
| '6019'
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
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6019'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_vilkår_VilkårType | null",elements:[{name:"union",raw:`| 'FP_VK_1'
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
  Inntektskategori: Inntektskategori;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatusEnum",required:!0}},{key:"BehandlingType",value:{name:"BehandlingTypeEnum",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakTypeEnum",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatusEnum",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseTypeEnum",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktorEnum",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsenEnum",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:`| 'BARN'
| 'FBARN'
| 'VOKSEN'
| 'ADVOKAT'
| 'ANNEN_F'`,elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}},{key:"Inntektskategori",value:{name:"Inntektskategori",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};var ru={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var md;function ey(){return md||(md=1,(function(e){(function(){var l={}.hasOwnProperty;function a(){for(var s="",m=0;m<arguments.length;m++){var d=arguments[m];d&&(s=i(s,t(d)))}return s}function t(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return a.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var m="";for(var d in s)l.call(s,d)&&s[d]&&(m=i(m,d));return m}function i(s,m){return m?s?s+" "+m:s+m:s}e.exports?(a.default=a,e.exports=a):window.classNames=a})()})(ru)),ru.exports}ey();function ny(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var dd={exports:{}},Ma={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ed;function ry(){if(Ed)return Ma;Ed=1;var e=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function a(t,i,s){var m=null;if(s!==void 0&&(m=""+s),i.key!==void 0&&(m=""+i.key),"key"in i){s={};for(var d in i)d!=="key"&&(s[d]=i[d])}else s=i;return i=s.ref,{$$typeof:e,type:t,key:m,ref:i!==void 0?i:null,props:s}}return Ma.Fragment=l,Ma.jsx=a,Ma.jsxs=a,Ma}var vd;function ay(){return vd||(vd=1,dd.exports=ry()),dd.exports}ay();var pu={exports:{}},ty=pu.exports,gd;function ly(){return gd||(gd=1,(function(e,l){(function(a,t){e.exports=t()})(ty,function(){var a={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,i=/\d/,s=/\d\d/,m=/\d\d?/,d=/\d*[^-_:/,()\s\d]+/,v={},_=function(N){return(N=+N)+(N>68?1900:2e3)},f=function(N){return function(A){this[N]=+A}},T=[/[+-]\d\d:?(\d\d)?|Z/,function(N){(this.zone||(this.zone={})).offset=(function(A){if(!A||A==="Z")return 0;var P=A.match(/([+-]|\d\d)/g),I=60*P[1]+(+P[2]||0);return I===0?0:P[0]==="+"?-I:I})(N)}],R=function(N){var A=v[N];return A&&(A.indexOf?A:A.s.concat(A.f))},h=function(N,A){var P,I=v.meridiem;if(I){for(var x=1;x<=24;x+=1)if(N.indexOf(I(x,0,A))>-1){P=x>12;break}}else P=N===(A?"pm":"PM");return P},L={A:[d,function(N){this.afternoon=h(N,!1)}],a:[d,function(N){this.afternoon=h(N,!0)}],Q:[i,function(N){this.month=3*(N-1)+1}],S:[i,function(N){this.milliseconds=100*+N}],SS:[s,function(N){this.milliseconds=10*+N}],SSS:[/\d{3}/,function(N){this.milliseconds=+N}],s:[m,f("seconds")],ss:[m,f("seconds")],m:[m,f("minutes")],mm:[m,f("minutes")],H:[m,f("hours")],h:[m,f("hours")],HH:[m,f("hours")],hh:[m,f("hours")],D:[m,f("day")],DD:[s,f("day")],Do:[d,function(N){var A=v.ordinal,P=N.match(/\d+/);if(this.day=P[0],A)for(var I=1;I<=31;I+=1)A(I).replace(/\[|\]/g,"")===N&&(this.day=I)}],w:[m,f("week")],ww:[s,f("week")],M:[m,f("month")],MM:[s,f("month")],MMM:[d,function(N){var A=R("months"),P=(R("monthsShort")||A.map(function(I){return I.slice(0,3)})).indexOf(N)+1;if(P<1)throw new Error;this.month=P%12||P}],MMMM:[d,function(N){var A=R("months").indexOf(N)+1;if(A<1)throw new Error;this.month=A%12||A}],Y:[/[+-]?\d+/,f("year")],YY:[s,function(N){this.year=_(N)}],YYYY:[/\d{4}/,f("year")],Z:T,ZZ:T};function k(N){var A,P;A=N,P=v&&v.formats;for(var I=(N=A.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(Z,X,Q){var H=Q&&Q.toUpperCase();return X||P[Q]||a[Q]||P[H].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(B,z,re){return z||re.slice(1)})})).match(t),x=I.length,D=0;D<x;D+=1){var q=I[D],w=L[q],G=w&&w[0],W=w&&w[1];I[D]=W?{regex:G,parser:W}:q.replace(/^\[|\]$/g,"")}return function(Z){for(var X={},Q=0,H=0;Q<x;Q+=1){var B=I[Q];if(typeof B=="string")H+=B.length;else{var z=B.regex,re=B.parser,J=Z.slice(H),C=z.exec(J)[0];re.call(X,C),Z=Z.replace(C,"")}}return(function($){var te=$.afternoon;if(te!==void 0){var ne=$.hours;te?ne<12&&($.hours+=12):ne===12&&($.hours=0),delete $.afternoon}})(X),X}}return function(N,A,P){P.p.customParseFormat=!0,N&&N.parseTwoDigitYear&&(_=N.parseTwoDigitYear);var I=A.prototype,x=I.parse;I.parse=function(D){var q=D.date,w=D.utc,G=D.args;this.$u=w;var W=G[1];if(typeof W=="string"){var Z=G[2]===!0,X=G[3]===!0,Q=Z||X,H=G[2];X&&(H=G[2]),v=this.$locale(),!Z&&H&&(v=P.Ls[H]),this.$d=(function(J,C,$,te){try{if(["x","X"].indexOf(C)>-1)return new Date((C==="X"?1e3:1)*J);var ne=k(C)(J),ue=ne.year,fe=ne.month,gn=ne.day,He=ne.hours,we=ne.minutes,je=ne.seconds,Te=ne.milliseconds,ye=ne.zone,Xe=ne.week,Ue=new Date,xe=gn||(ue||fe?1:Ue.getDate()),kn=ue||Ue.getFullYear(),Be=0;ue&&!fe||(Be=fe>0?fe-1:Ue.getMonth());var Ze,Qn=He||0,Qe=we||0,Un=je||0,er=Te||0;return ye?new Date(Date.UTC(kn,Be,xe,Qn,Qe,Un,er+60*ye.offset*1e3)):$?new Date(Date.UTC(kn,Be,xe,Qn,Qe,Un,er)):(Ze=new Date(kn,Be,xe,Qn,Qe,Un,er),Xe&&(Ze=te(Ze).week(Xe).toDate()),Ze)}catch{return new Date("")}})(q,W,w,P),this.init(),H&&H!==!0&&(this.$L=this.locale(H).$L),Q&&q!=this.format(W)&&(this.$d=new Date("")),v={}}else if(W instanceof Array)for(var B=W.length,z=1;z<=B;z+=1){G[1]=W[z-1];var re=P.apply(this,G);if(re.isValid()){this.$d=re.$d,this.$L=re.$L,this.init();break}z===B&&(this.$d=new Date(""))}else x.call(this,D)}}})})(pu)),pu.exports}var iy=ly();const uy=ny(iy);va.extend(uy);const nt={"AdresseVisning.Adresse":"Adresse","ForelderPanel.Soker":"Søker","ForelderPanel.AnnenForelder":"Annen forelder","AlleBarnPanel.Barn":"Barn","AlleBarnPanel.BarnNr":"Barn {nummer}","AlleBarnPanel.Fodt":"Født","AlleBarnPanel.Dod":"Død","PersonPanel.RolleOgNavn":"{rolle, select, BRUKER {Søker, } ANNEN_PART {Den andre forelderen, } BARN {Barnet, } other {} }{navn}","PersonPanel.Beskrivelse.Bruker":"Adresser for søker registrert i folkeregisteret gyldige for de siste 12 månedene","PersonPanel.Beskrivelse.Barn":"Adresser for barnet registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Beskrivelse.Annenpart":"Adresser for den andre forelderen registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Fodt":"Født {dato}","PersonPanel.Dod":"Død {dato}","AdresseTabell.IngenAdresse":"Ingen adresser funnet for {erAnnenpart, select, true {den andre forelderen} other {søker} }.","AdresseTabell.SammeAdresse":"Den andre forelderen har samme adresse som søker på skjæringstidspunktet","AdresseTabell.PeriodeLabel":"Periode","AdresseTabell.AdresseLabel":"Adresse","AdresseTabell.TypeLabel":"Type","MerkePanel.Dod":"DØD","MerkePanel.DodTittel":"Personen er død","MerkePanel.DodFodt":"DØDFØDT","MerkePanel.Diskresjon6":"Kode 6","MerkePanel.Diskresjon7":"Kode 7","MerkePanel.EgenAnsatt":"Nav","MerkePanel.Verge":"Verge","MerkePanel.Diskresjon6Tittel":"Personen har diskresjonsmerking kode 6","MerkePanel.Diskresjon7Tittel":"Personen har diskresjonsmerking kode 7","MerkePanel.EgenAnsattTittel":"Personen er ansatt i Nav","MerkePanel.VergeTittel":"Personen har verge","SubmitButton.ConfirmInformation":"Bekreft og fortsett","FaktaBegrunnelseTextField.BegrunnEndringene":"Begrunn endringene","FaktaBegrunnelseTextField.Vurdering":"Vurdering","FaktaBegrunnelseTextField.Begrunnelse":"Begrunnelse","TrueFalseInput.True":"Ja","TrueFalseInput.False":"Nei","FaktaKilde.Soknad":"FRA SØKNADEN","FaktaKilde.FREG":"FRA FOLKEREGISTERET","FaktaKilde.MEDL":"FRA MEDLEMSKAPSREGISTERET","FaktaKilde.Ukjent":"FRA UKJENT KILDE","FaktaKilde.SBH":"FRA SAKSBEHANDLER"};Hn(nt);Hn(nt);Hn(nt);const sy=(e,l)=>{const a=new Date(e.tom??Ya),t=new Date(l.tom??Ya);if(a>t)return-1;if(a<t)return 1;if(e.fom&&!l.fom)return-1;if(!e.fom&&l.fom)return 1;if(e.fom&&l.fom){const i=new Date(e.fom),s=new Date(l.fom);if(i>s)return-1;if(i<s)return 1}return 0};var qa={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var oy=qa.exports,_d;function my(){return _d||(_d=1,(function(e,l){(function(){var a,t="4.17.21",i=200,s="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",m="Expected a function",d="Invalid `variable` option passed into `_.template`",v="__lodash_hash_undefined__",_=500,f="__lodash_placeholder__",T=1,R=2,h=4,L=1,k=2,N=1,A=2,P=4,I=8,x=16,D=32,q=64,w=128,G=256,W=512,Z=30,X="...",Q=800,H=16,B=1,z=2,re=3,J=1/0,C=9007199254740991,$=17976931348623157e292,te=NaN,ne=4294967295,ue=ne-1,fe=ne>>>1,gn=[["ary",w],["bind",N],["bindKey",A],["curry",I],["curryRight",x],["flip",W],["partial",D],["partialRight",q],["rearg",G]],He="[object Arguments]",we="[object Array]",je="[object AsyncFunction]",Te="[object Boolean]",ye="[object Date]",Xe="[object DOMException]",Ue="[object Error]",xe="[object Function]",kn="[object GeneratorFunction]",Be="[object Map]",Ze="[object Number]",Qn="[object Null]",Qe="[object Object]",Un="[object Promise]",er="[object Proxy]",ca="[object RegExp]",wn="[object Set]",Ta="[object String]",lt="[object Symbol]",ov="[object Undefined]",pa="[object WeakMap]",mv="[object WeakSet]",ha="[object ArrayBuffer]",xr="[object DataView]",kl="[object Float32Array]",yl="[object Float64Array]",Al="[object Int8Array]",Sl="[object Int16Array]",Il="[object Int32Array]",bl="[object Uint8Array]",Ll="[object Uint8ClampedArray]",Dl="[object Uint16Array]",Kl="[object Uint32Array]",dv=/\b__p \+= '';/g,Ev=/\b(__p \+=) '' \+/g,vv=/(__e\(.*?\)|\b__t\)) \+\n'';/g,zu=/&(?:amp|lt|gt|quot|#39);/g,Xu=/[&<>"']/g,gv=RegExp(zu.source),_v=RegExp(Xu.source),fv=/<%-([\s\S]+?)%>/g,cv=/<%([\s\S]+?)%>/g,Zu=/<%=([\s\S]+?)%>/g,Tv=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,pv=/^\w*$/,hv=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Pl=/[\\^$.*+?()[\]{}|]/g,Nv=RegExp(Pl.source),Ol=/^\s+/,Rv=/\s/,kv=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,yv=/\{\n\/\* \[wrapped with (.+)\] \*/,Av=/,? & /,Sv=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Iv=/[()=,{}\[\]\/\s]/,bv=/\\(\\)?/g,Lv=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Qu=/\w*$/,Dv=/^[-+]0x[0-9a-f]+$/i,Kv=/^0b[01]+$/i,Pv=/^\[object .+?Constructor\]$/,Ov=/^0o[0-7]+$/i,Fv=/^(?:0|[1-9]\d*)$/,wv=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,it=/($^)/,Gv=/['\n\r\u2028\u2029\\]/g,ut="\\ud800-\\udfff",Bv="\\u0300-\\u036f",Vv="\\ufe20-\\ufe2f",Mv="\\u20d0-\\u20ff",es=Bv+Vv+Mv,ns="\\u2700-\\u27bf",rs="a-z\\xdf-\\xf6\\xf8-\\xff",Hv="\\xac\\xb1\\xd7\\xf7",jv="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Uv="\\u2000-\\u206f",qv=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",as="A-Z\\xc0-\\xd6\\xd8-\\xde",ts="\\ufe0e\\ufe0f",ls=Hv+jv+Uv+qv,Fl="['’]",xv="["+ut+"]",is="["+ls+"]",st="["+es+"]",us="\\d+",Cv="["+ns+"]",ss="["+rs+"]",os="[^"+ut+ls+us+ns+rs+as+"]",wl="\\ud83c[\\udffb-\\udfff]",Yv="(?:"+st+"|"+wl+")",ms="[^"+ut+"]",Gl="(?:\\ud83c[\\udde6-\\uddff]){2}",Bl="[\\ud800-\\udbff][\\udc00-\\udfff]",Cr="["+as+"]",ds="\\u200d",Es="(?:"+ss+"|"+os+")",$v="(?:"+Cr+"|"+os+")",vs="(?:"+Fl+"(?:d|ll|m|re|s|t|ve))?",gs="(?:"+Fl+"(?:D|LL|M|RE|S|T|VE))?",_s=Yv+"?",fs="["+ts+"]?",Jv="(?:"+ds+"(?:"+[ms,Gl,Bl].join("|")+")"+fs+_s+")*",Wv="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",zv="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",cs=fs+_s+Jv,Xv="(?:"+[Cv,Gl,Bl].join("|")+")"+cs,Zv="(?:"+[ms+st+"?",st,Gl,Bl,xv].join("|")+")",Qv=RegExp(Fl,"g"),eg=RegExp(st,"g"),Vl=RegExp(wl+"(?="+wl+")|"+Zv+cs,"g"),ng=RegExp([Cr+"?"+ss+"+"+vs+"(?="+[is,Cr,"$"].join("|")+")",$v+"+"+gs+"(?="+[is,Cr+Es,"$"].join("|")+")",Cr+"?"+Es+"+"+vs,Cr+"+"+gs,zv,Wv,us,Xv].join("|"),"g"),rg=RegExp("["+ds+ut+es+ts+"]"),ag=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,tg=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],lg=-1,Oe={};Oe[kl]=Oe[yl]=Oe[Al]=Oe[Sl]=Oe[Il]=Oe[bl]=Oe[Ll]=Oe[Dl]=Oe[Kl]=!0,Oe[He]=Oe[we]=Oe[ha]=Oe[Te]=Oe[xr]=Oe[ye]=Oe[Ue]=Oe[xe]=Oe[Be]=Oe[Ze]=Oe[Qe]=Oe[ca]=Oe[wn]=Oe[Ta]=Oe[pa]=!1;var Ke={};Ke[He]=Ke[we]=Ke[ha]=Ke[xr]=Ke[Te]=Ke[ye]=Ke[kl]=Ke[yl]=Ke[Al]=Ke[Sl]=Ke[Il]=Ke[Be]=Ke[Ze]=Ke[Qe]=Ke[ca]=Ke[wn]=Ke[Ta]=Ke[lt]=Ke[bl]=Ke[Ll]=Ke[Dl]=Ke[Kl]=!0,Ke[Ue]=Ke[xe]=Ke[pa]=!1;var ig={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},ug={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},sg={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},og={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},mg=parseFloat,dg=parseInt,Ts=typeof Jt=="object"&&Jt&&Jt.Object===Object&&Jt,Eg=typeof self=="object"&&self&&self.Object===Object&&self,en=Ts||Eg||Function("return this")(),Ml=l&&!l.nodeType&&l,Lr=Ml&&!0&&e&&!e.nodeType&&e,ps=Lr&&Lr.exports===Ml,Hl=ps&&Ts.process,yn=(function(){try{var S=Lr&&Lr.require&&Lr.require("util").types;return S||Hl&&Hl.binding&&Hl.binding("util")}catch{}})(),hs=yn&&yn.isArrayBuffer,Ns=yn&&yn.isDate,Rs=yn&&yn.isMap,ks=yn&&yn.isRegExp,ys=yn&&yn.isSet,As=yn&&yn.isTypedArray;function _n(S,V,O){switch(O.length){case 0:return S.call(V);case 1:return S.call(V,O[0]);case 2:return S.call(V,O[0],O[1]);case 3:return S.call(V,O[0],O[1],O[2])}return S.apply(V,O)}function vg(S,V,O,ae){for(var de=-1,ke=S==null?0:S.length;++de<ke;){var $e=S[de];V(ae,$e,O($e),S)}return ae}function An(S,V){for(var O=-1,ae=S==null?0:S.length;++O<ae&&V(S[O],O,S)!==!1;);return S}function gg(S,V){for(var O=S==null?0:S.length;O--&&V(S[O],O,S)!==!1;);return S}function Ss(S,V){for(var O=-1,ae=S==null?0:S.length;++O<ae;)if(!V(S[O],O,S))return!1;return!0}function fr(S,V){for(var O=-1,ae=S==null?0:S.length,de=0,ke=[];++O<ae;){var $e=S[O];V($e,O,S)&&(ke[de++]=$e)}return ke}function ot(S,V){var O=S==null?0:S.length;return!!O&&Yr(S,V,0)>-1}function jl(S,V,O){for(var ae=-1,de=S==null?0:S.length;++ae<de;)if(O(V,S[ae]))return!0;return!1}function Ge(S,V){for(var O=-1,ae=S==null?0:S.length,de=Array(ae);++O<ae;)de[O]=V(S[O],O,S);return de}function cr(S,V){for(var O=-1,ae=V.length,de=S.length;++O<ae;)S[de+O]=V[O];return S}function Ul(S,V,O,ae){var de=-1,ke=S==null?0:S.length;for(ae&&ke&&(O=S[++de]);++de<ke;)O=V(O,S[de],de,S);return O}function _g(S,V,O,ae){var de=S==null?0:S.length;for(ae&&de&&(O=S[--de]);de--;)O=V(O,S[de],de,S);return O}function ql(S,V){for(var O=-1,ae=S==null?0:S.length;++O<ae;)if(V(S[O],O,S))return!0;return!1}var fg=xl("length");function cg(S){return S.split("")}function Tg(S){return S.match(Sv)||[]}function Is(S,V,O){var ae;return O(S,function(de,ke,$e){if(V(de,ke,$e))return ae=ke,!1}),ae}function mt(S,V,O,ae){for(var de=S.length,ke=O+(ae?1:-1);ae?ke--:++ke<de;)if(V(S[ke],ke,S))return ke;return-1}function Yr(S,V,O){return V===V?Dg(S,V,O):mt(S,bs,O)}function pg(S,V,O,ae){for(var de=O-1,ke=S.length;++de<ke;)if(ae(S[de],V))return de;return-1}function bs(S){return S!==S}function Ls(S,V){var O=S==null?0:S.length;return O?Yl(S,V)/O:te}function xl(S){return function(V){return V==null?a:V[S]}}function Cl(S){return function(V){return S==null?a:S[V]}}function Ds(S,V,O,ae,de){return de(S,function(ke,$e,De){O=ae?(ae=!1,ke):V(O,ke,$e,De)}),O}function hg(S,V){var O=S.length;for(S.sort(V);O--;)S[O]=S[O].value;return S}function Yl(S,V){for(var O,ae=-1,de=S.length;++ae<de;){var ke=V(S[ae]);ke!==a&&(O=O===a?ke:O+ke)}return O}function $l(S,V){for(var O=-1,ae=Array(S);++O<S;)ae[O]=V(O);return ae}function Ng(S,V){return Ge(V,function(O){return[O,S[O]]})}function Ks(S){return S&&S.slice(0,ws(S)+1).replace(Ol,"")}function fn(S){return function(V){return S(V)}}function Jl(S,V){return Ge(V,function(O){return S[O]})}function Na(S,V){return S.has(V)}function Ps(S,V){for(var O=-1,ae=S.length;++O<ae&&Yr(V,S[O],0)>-1;);return O}function Os(S,V){for(var O=S.length;O--&&Yr(V,S[O],0)>-1;);return O}function Rg(S,V){for(var O=S.length,ae=0;O--;)S[O]===V&&++ae;return ae}var kg=Cl(ig),yg=Cl(ug);function Ag(S){return"\\"+og[S]}function Sg(S,V){return S==null?a:S[V]}function $r(S){return rg.test(S)}function Ig(S){return ag.test(S)}function bg(S){for(var V,O=[];!(V=S.next()).done;)O.push(V.value);return O}function Wl(S){var V=-1,O=Array(S.size);return S.forEach(function(ae,de){O[++V]=[de,ae]}),O}function Fs(S,V){return function(O){return S(V(O))}}function Tr(S,V){for(var O=-1,ae=S.length,de=0,ke=[];++O<ae;){var $e=S[O];($e===V||$e===f)&&(S[O]=f,ke[de++]=O)}return ke}function dt(S){var V=-1,O=Array(S.size);return S.forEach(function(ae){O[++V]=ae}),O}function Lg(S){var V=-1,O=Array(S.size);return S.forEach(function(ae){O[++V]=[ae,ae]}),O}function Dg(S,V,O){for(var ae=O-1,de=S.length;++ae<de;)if(S[ae]===V)return ae;return-1}function Kg(S,V,O){for(var ae=O+1;ae--;)if(S[ae]===V)return ae;return ae}function Jr(S){return $r(S)?Og(S):fg(S)}function Gn(S){return $r(S)?Fg(S):cg(S)}function ws(S){for(var V=S.length;V--&&Rv.test(S.charAt(V)););return V}var Pg=Cl(sg);function Og(S){for(var V=Vl.lastIndex=0;Vl.test(S);)++V;return V}function Fg(S){return S.match(Vl)||[]}function wg(S){return S.match(ng)||[]}var Gg=(function S(V){V=V==null?en:Wr.defaults(en.Object(),V,Wr.pick(en,tg));var O=V.Array,ae=V.Date,de=V.Error,ke=V.Function,$e=V.Math,De=V.Object,zl=V.RegExp,Bg=V.String,Sn=V.TypeError,Et=O.prototype,Vg=ke.prototype,zr=De.prototype,vt=V["__core-js_shared__"],gt=Vg.toString,Ie=zr.hasOwnProperty,Mg=0,Gs=(function(){var n=/[^.]+$/.exec(vt&&vt.keys&&vt.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""})(),_t=zr.toString,Hg=gt.call(De),jg=en._,Ug=zl("^"+gt.call(Ie).replace(Pl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ft=ps?V.Buffer:a,pr=V.Symbol,ct=V.Uint8Array,Bs=ft?ft.allocUnsafe:a,Tt=Fs(De.getPrototypeOf,De),Vs=De.create,Ms=zr.propertyIsEnumerable,pt=Et.splice,Hs=pr?pr.isConcatSpreadable:a,Ra=pr?pr.iterator:a,Dr=pr?pr.toStringTag:a,ht=(function(){try{var n=wr(De,"defineProperty");return n({},"",{}),n}catch{}})(),qg=V.clearTimeout!==en.clearTimeout&&V.clearTimeout,xg=ae&&ae.now!==en.Date.now&&ae.now,Cg=V.setTimeout!==en.setTimeout&&V.setTimeout,Nt=$e.ceil,Rt=$e.floor,Xl=De.getOwnPropertySymbols,Yg=ft?ft.isBuffer:a,js=V.isFinite,$g=Et.join,Jg=Fs(De.keys,De),Je=$e.max,rn=$e.min,Wg=ae.now,zg=V.parseInt,Us=$e.random,Xg=Et.reverse,Zl=wr(V,"DataView"),ka=wr(V,"Map"),Ql=wr(V,"Promise"),Xr=wr(V,"Set"),ya=wr(V,"WeakMap"),Aa=wr(De,"create"),kt=ya&&new ya,Zr={},Zg=Gr(Zl),Qg=Gr(ka),e_=Gr(Ql),n_=Gr(Xr),r_=Gr(ya),yt=pr?pr.prototype:a,Sa=yt?yt.valueOf:a,qs=yt?yt.toString:a;function g(n){if(qe(n)&&!Ee(n)&&!(n instanceof pe)){if(n instanceof In)return n;if(Ie.call(n,"__wrapped__"))return Co(n)}return new In(n)}var Qr=(function(){function n(){}return function(r){if(!Ve(r))return{};if(Vs)return Vs(r);n.prototype=r;var u=new n;return n.prototype=a,u}})();function At(){}function In(n,r){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=a}g.templateSettings={escape:fv,evaluate:cv,interpolate:Zu,variable:"",imports:{_:g}},g.prototype=At.prototype,g.prototype.constructor=g,In.prototype=Qr(At.prototype),In.prototype.constructor=In;function pe(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ne,this.__views__=[]}function a_(){var n=new pe(this.__wrapped__);return n.__actions__=on(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=on(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=on(this.__views__),n}function t_(){if(this.__filtered__){var n=new pe(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function l_(){var n=this.__wrapped__.value(),r=this.__dir__,u=Ee(n),o=r<0,E=u?n.length:0,c=Tf(0,E,this.__views__),p=c.start,y=c.end,b=y-p,j=o?y:p-1,U=this.__iteratees__,Y=U.length,ee=0,ie=rn(b,this.__takeCount__);if(!u||!o&&E==b&&ie==b)return go(n,this.__actions__);var oe=[];e:for(;b--&&ee<ie;){j+=r;for(var ge=-1,me=n[j];++ge<Y;){var ce=U[ge],he=ce.iteratee,pn=ce.type,un=he(me);if(pn==z)me=un;else if(!un){if(pn==B)continue e;break e}}oe[ee++]=me}return oe}pe.prototype=Qr(At.prototype),pe.prototype.constructor=pe;function Kr(n){var r=-1,u=n==null?0:n.length;for(this.clear();++r<u;){var o=n[r];this.set(o[0],o[1])}}function i_(){this.__data__=Aa?Aa(null):{},this.size=0}function u_(n){var r=this.has(n)&&delete this.__data__[n];return this.size-=r?1:0,r}function s_(n){var r=this.__data__;if(Aa){var u=r[n];return u===v?a:u}return Ie.call(r,n)?r[n]:a}function o_(n){var r=this.__data__;return Aa?r[n]!==a:Ie.call(r,n)}function m_(n,r){var u=this.__data__;return this.size+=this.has(n)?0:1,u[n]=Aa&&r===a?v:r,this}Kr.prototype.clear=i_,Kr.prototype.delete=u_,Kr.prototype.get=s_,Kr.prototype.has=o_,Kr.prototype.set=m_;function nr(n){var r=-1,u=n==null?0:n.length;for(this.clear();++r<u;){var o=n[r];this.set(o[0],o[1])}}function d_(){this.__data__=[],this.size=0}function E_(n){var r=this.__data__,u=St(r,n);if(u<0)return!1;var o=r.length-1;return u==o?r.pop():pt.call(r,u,1),--this.size,!0}function v_(n){var r=this.__data__,u=St(r,n);return u<0?a:r[u][1]}function g_(n){return St(this.__data__,n)>-1}function __(n,r){var u=this.__data__,o=St(u,n);return o<0?(++this.size,u.push([n,r])):u[o][1]=r,this}nr.prototype.clear=d_,nr.prototype.delete=E_,nr.prototype.get=v_,nr.prototype.has=g_,nr.prototype.set=__;function rr(n){var r=-1,u=n==null?0:n.length;for(this.clear();++r<u;){var o=n[r];this.set(o[0],o[1])}}function f_(){this.size=0,this.__data__={hash:new Kr,map:new(ka||nr),string:new Kr}}function c_(n){var r=Vt(this,n).delete(n);return this.size-=r?1:0,r}function T_(n){return Vt(this,n).get(n)}function p_(n){return Vt(this,n).has(n)}function h_(n,r){var u=Vt(this,n),o=u.size;return u.set(n,r),this.size+=u.size==o?0:1,this}rr.prototype.clear=f_,rr.prototype.delete=c_,rr.prototype.get=T_,rr.prototype.has=p_,rr.prototype.set=h_;function Pr(n){var r=-1,u=n==null?0:n.length;for(this.__data__=new rr;++r<u;)this.add(n[r])}function N_(n){return this.__data__.set(n,v),this}function R_(n){return this.__data__.has(n)}Pr.prototype.add=Pr.prototype.push=N_,Pr.prototype.has=R_;function Bn(n){var r=this.__data__=new nr(n);this.size=r.size}function k_(){this.__data__=new nr,this.size=0}function y_(n){var r=this.__data__,u=r.delete(n);return this.size=r.size,u}function A_(n){return this.__data__.get(n)}function S_(n){return this.__data__.has(n)}function I_(n,r){var u=this.__data__;if(u instanceof nr){var o=u.__data__;if(!ka||o.length<i-1)return o.push([n,r]),this.size=++u.size,this;u=this.__data__=new rr(o)}return u.set(n,r),this.size=u.size,this}Bn.prototype.clear=k_,Bn.prototype.delete=y_,Bn.prototype.get=A_,Bn.prototype.has=S_,Bn.prototype.set=I_;function xs(n,r){var u=Ee(n),o=!u&&Br(n),E=!u&&!o&&yr(n),c=!u&&!o&&!E&&aa(n),p=u||o||E||c,y=p?$l(n.length,Bg):[],b=y.length;for(var j in n)(r||Ie.call(n,j))&&!(p&&(j=="length"||E&&(j=="offset"||j=="parent")||c&&(j=="buffer"||j=="byteLength"||j=="byteOffset")||ir(j,b)))&&y.push(j);return y}function Cs(n){var r=n.length;return r?n[mi(0,r-1)]:a}function b_(n,r){return Mt(on(n),Or(r,0,n.length))}function L_(n){return Mt(on(n))}function ei(n,r,u){(u!==a&&!Vn(n[r],u)||u===a&&!(r in n))&&ar(n,r,u)}function Ia(n,r,u){var o=n[r];(!(Ie.call(n,r)&&Vn(o,u))||u===a&&!(r in n))&&ar(n,r,u)}function St(n,r){for(var u=n.length;u--;)if(Vn(n[u][0],r))return u;return-1}function D_(n,r,u,o){return hr(n,function(E,c,p){r(o,E,u(E),p)}),o}function Ys(n,r){return n&&xn(r,We(r),n)}function K_(n,r){return n&&xn(r,dn(r),n)}function ar(n,r,u){r=="__proto__"&&ht?ht(n,r,{configurable:!0,enumerable:!0,value:u,writable:!0}):n[r]=u}function ni(n,r){for(var u=-1,o=r.length,E=O(o),c=n==null;++u<o;)E[u]=c?a:wi(n,r[u]);return E}function Or(n,r,u){return n===n&&(u!==a&&(n=n<=u?n:u),r!==a&&(n=n>=r?n:r)),n}function bn(n,r,u,o,E,c){var p,y=r&T,b=r&R,j=r&h;if(u&&(p=E?u(n,o,E,c):u(n)),p!==a)return p;if(!Ve(n))return n;var U=Ee(n);if(U){if(p=hf(n),!y)return on(n,p)}else{var Y=an(n),ee=Y==xe||Y==kn;if(yr(n))return co(n,y);if(Y==Qe||Y==He||ee&&!E){if(p=b||ee?{}:Go(n),!y)return b?of(n,K_(p,n)):sf(n,Ys(p,n))}else{if(!Ke[Y])return E?n:{};p=Nf(n,Y,y)}}c||(c=new Bn);var ie=c.get(n);if(ie)return ie;c.set(n,p),dm(n)?n.forEach(function(me){p.add(bn(me,r,u,me,n,c))}):om(n)&&n.forEach(function(me,ce){p.set(ce,bn(me,r,u,ce,n,c))});var oe=j?b?Ni:hi:b?dn:We,ge=U?a:oe(n);return An(ge||n,function(me,ce){ge&&(ce=me,me=n[ce]),Ia(p,ce,bn(me,r,u,ce,n,c))}),p}function P_(n){var r=We(n);return function(u){return $s(u,n,r)}}function $s(n,r,u){var o=u.length;if(n==null)return!o;for(n=De(n);o--;){var E=u[o],c=r[E],p=n[E];if(p===a&&!(E in n)||!c(p))return!1}return!0}function Js(n,r,u){if(typeof n!="function")throw new Sn(m);return Fa(function(){n.apply(a,u)},r)}function ba(n,r,u,o){var E=-1,c=ot,p=!0,y=n.length,b=[],j=r.length;if(!y)return b;u&&(r=Ge(r,fn(u))),o?(c=jl,p=!1):r.length>=i&&(c=Na,p=!1,r=new Pr(r));e:for(;++E<y;){var U=n[E],Y=u==null?U:u(U);if(U=o||U!==0?U:0,p&&Y===Y){for(var ee=j;ee--;)if(r[ee]===Y)continue e;b.push(U)}else c(r,Y,o)||b.push(U)}return b}var hr=Ro(qn),Ws=Ro(ai,!0);function O_(n,r){var u=!0;return hr(n,function(o,E,c){return u=!!r(o,E,c),u}),u}function It(n,r,u){for(var o=-1,E=n.length;++o<E;){var c=n[o],p=r(c);if(p!=null&&(y===a?p===p&&!Tn(p):u(p,y)))var y=p,b=c}return b}function F_(n,r,u,o){var E=n.length;for(u=ve(u),u<0&&(u=-u>E?0:E+u),o=o===a||o>E?E:ve(o),o<0&&(o+=E),o=u>o?0:vm(o);u<o;)n[u++]=r;return n}function zs(n,r){var u=[];return hr(n,function(o,E,c){r(o,E,c)&&u.push(o)}),u}function nn(n,r,u,o,E){var c=-1,p=n.length;for(u||(u=kf),E||(E=[]);++c<p;){var y=n[c];r>0&&u(y)?r>1?nn(y,r-1,u,o,E):cr(E,y):o||(E[E.length]=y)}return E}var ri=ko(),Xs=ko(!0);function qn(n,r){return n&&ri(n,r,We)}function ai(n,r){return n&&Xs(n,r,We)}function bt(n,r){return fr(r,function(u){return ur(n[u])})}function Fr(n,r){r=Rr(r,n);for(var u=0,o=r.length;n!=null&&u<o;)n=n[Cn(r[u++])];return u&&u==o?n:a}function Zs(n,r,u){var o=r(n);return Ee(n)?o:cr(o,u(n))}function tn(n){return n==null?n===a?ov:Qn:Dr&&Dr in De(n)?cf(n):Df(n)}function ti(n,r){return n>r}function w_(n,r){return n!=null&&Ie.call(n,r)}function G_(n,r){return n!=null&&r in De(n)}function B_(n,r,u){return n>=rn(r,u)&&n<Je(r,u)}function li(n,r,u){for(var o=u?jl:ot,E=n[0].length,c=n.length,p=c,y=O(c),b=1/0,j=[];p--;){var U=n[p];p&&r&&(U=Ge(U,fn(r))),b=rn(U.length,b),y[p]=!u&&(r||E>=120&&U.length>=120)?new Pr(p&&U):a}U=n[0];var Y=-1,ee=y[0];e:for(;++Y<E&&j.length<b;){var ie=U[Y],oe=r?r(ie):ie;if(ie=u||ie!==0?ie:0,!(ee?Na(ee,oe):o(j,oe,u))){for(p=c;--p;){var ge=y[p];if(!(ge?Na(ge,oe):o(n[p],oe,u)))continue e}ee&&ee.push(oe),j.push(ie)}}return j}function V_(n,r,u,o){return qn(n,function(E,c,p){r(o,u(E),c,p)}),o}function La(n,r,u){r=Rr(r,n),n=Ho(n,r);var o=n==null?n:n[Cn(Dn(r))];return o==null?a:_n(o,n,u)}function Qs(n){return qe(n)&&tn(n)==He}function M_(n){return qe(n)&&tn(n)==ha}function H_(n){return qe(n)&&tn(n)==ye}function Da(n,r,u,o,E){return n===r?!0:n==null||r==null||!qe(n)&&!qe(r)?n!==n&&r!==r:j_(n,r,u,o,Da,E)}function j_(n,r,u,o,E,c){var p=Ee(n),y=Ee(r),b=p?we:an(n),j=y?we:an(r);b=b==He?Qe:b,j=j==He?Qe:j;var U=b==Qe,Y=j==Qe,ee=b==j;if(ee&&yr(n)){if(!yr(r))return!1;p=!0,U=!1}if(ee&&!U)return c||(c=new Bn),p||aa(n)?Oo(n,r,u,o,E,c):_f(n,r,b,u,o,E,c);if(!(u&L)){var ie=U&&Ie.call(n,"__wrapped__"),oe=Y&&Ie.call(r,"__wrapped__");if(ie||oe){var ge=ie?n.value():n,me=oe?r.value():r;return c||(c=new Bn),E(ge,me,u,o,c)}}return ee?(c||(c=new Bn),ff(n,r,u,o,E,c)):!1}function U_(n){return qe(n)&&an(n)==Be}function ii(n,r,u,o){var E=u.length,c=E,p=!o;if(n==null)return!c;for(n=De(n);E--;){var y=u[E];if(p&&y[2]?y[1]!==n[y[0]]:!(y[0]in n))return!1}for(;++E<c;){y=u[E];var b=y[0],j=n[b],U=y[1];if(p&&y[2]){if(j===a&&!(b in n))return!1}else{var Y=new Bn;if(o)var ee=o(j,U,b,n,r,Y);if(!(ee===a?Da(U,j,L|k,o,Y):ee))return!1}}return!0}function eo(n){if(!Ve(n)||Af(n))return!1;var r=ur(n)?Ug:Pv;return r.test(Gr(n))}function q_(n){return qe(n)&&tn(n)==ca}function x_(n){return qe(n)&&an(n)==wn}function C_(n){return qe(n)&&Ct(n.length)&&!!Oe[tn(n)]}function no(n){return typeof n=="function"?n:n==null?En:typeof n=="object"?Ee(n)?to(n[0],n[1]):ao(n):ym(n)}function ui(n){if(!Oa(n))return Jg(n);var r=[];for(var u in De(n))Ie.call(n,u)&&u!="constructor"&&r.push(u);return r}function Y_(n){if(!Ve(n))return Lf(n);var r=Oa(n),u=[];for(var o in n)o=="constructor"&&(r||!Ie.call(n,o))||u.push(o);return u}function si(n,r){return n<r}function ro(n,r){var u=-1,o=mn(n)?O(n.length):[];return hr(n,function(E,c,p){o[++u]=r(E,c,p)}),o}function ao(n){var r=ki(n);return r.length==1&&r[0][2]?Vo(r[0][0],r[0][1]):function(u){return u===n||ii(u,n,r)}}function to(n,r){return Ai(n)&&Bo(r)?Vo(Cn(n),r):function(u){var o=wi(u,n);return o===a&&o===r?Gi(u,n):Da(r,o,L|k)}}function Lt(n,r,u,o,E){n!==r&&ri(r,function(c,p){if(E||(E=new Bn),Ve(c))$_(n,r,p,u,Lt,o,E);else{var y=o?o(Ii(n,p),c,p+"",n,r,E):a;y===a&&(y=c),ei(n,p,y)}},dn)}function $_(n,r,u,o,E,c,p){var y=Ii(n,u),b=Ii(r,u),j=p.get(b);if(j){ei(n,u,j);return}var U=c?c(y,b,u+"",n,r,p):a,Y=U===a;if(Y){var ee=Ee(b),ie=!ee&&yr(b),oe=!ee&&!ie&&aa(b);U=b,ee||ie||oe?Ee(y)?U=y:Ce(y)?U=on(y):ie?(Y=!1,U=co(b,!0)):oe?(Y=!1,U=To(b,!0)):U=[]:wa(b)||Br(b)?(U=y,Br(y)?U=gm(y):(!Ve(y)||ur(y))&&(U=Go(b))):Y=!1}Y&&(p.set(b,U),E(U,b,o,c,p),p.delete(b)),ei(n,u,U)}function lo(n,r){var u=n.length;if(u)return r+=r<0?u:0,ir(r,u)?n[r]:a}function io(n,r,u){r.length?r=Ge(r,function(c){return Ee(c)?function(p){return Fr(p,c.length===1?c[0]:c)}:c}):r=[En];var o=-1;r=Ge(r,fn(se()));var E=ro(n,function(c,p,y){var b=Ge(r,function(j){return j(c)});return{criteria:b,index:++o,value:c}});return hg(E,function(c,p){return uf(c,p,u)})}function J_(n,r){return uo(n,r,function(u,o){return Gi(n,o)})}function uo(n,r,u){for(var o=-1,E=r.length,c={};++o<E;){var p=r[o],y=Fr(n,p);u(y,p)&&Ka(c,Rr(p,n),y)}return c}function W_(n){return function(r){return Fr(r,n)}}function oi(n,r,u,o){var E=o?pg:Yr,c=-1,p=r.length,y=n;for(n===r&&(r=on(r)),u&&(y=Ge(n,fn(u)));++c<p;)for(var b=0,j=r[c],U=u?u(j):j;(b=E(y,U,b,o))>-1;)y!==n&&pt.call(y,b,1),pt.call(n,b,1);return n}function so(n,r){for(var u=n?r.length:0,o=u-1;u--;){var E=r[u];if(u==o||E!==c){var c=E;ir(E)?pt.call(n,E,1):vi(n,E)}}return n}function mi(n,r){return n+Rt(Us()*(r-n+1))}function z_(n,r,u,o){for(var E=-1,c=Je(Nt((r-n)/(u||1)),0),p=O(c);c--;)p[o?c:++E]=n,n+=u;return p}function di(n,r){var u="";if(!n||r<1||r>C)return u;do r%2&&(u+=n),r=Rt(r/2),r&&(n+=n);while(r);return u}function _e(n,r){return bi(Mo(n,r,En),n+"")}function X_(n){return Cs(ta(n))}function Z_(n,r){var u=ta(n);return Mt(u,Or(r,0,u.length))}function Ka(n,r,u,o){if(!Ve(n))return n;r=Rr(r,n);for(var E=-1,c=r.length,p=c-1,y=n;y!=null&&++E<c;){var b=Cn(r[E]),j=u;if(b==="__proto__"||b==="constructor"||b==="prototype")return n;if(E!=p){var U=y[b];j=o?o(U,b,y):a,j===a&&(j=Ve(U)?U:ir(r[E+1])?[]:{})}Ia(y,b,j),y=y[b]}return n}var oo=kt?function(n,r){return kt.set(n,r),n}:En,Q_=ht?function(n,r){return ht(n,"toString",{configurable:!0,enumerable:!1,value:Vi(r),writable:!0})}:En;function ef(n){return Mt(ta(n))}function Ln(n,r,u){var o=-1,E=n.length;r<0&&(r=-r>E?0:E+r),u=u>E?E:u,u<0&&(u+=E),E=r>u?0:u-r>>>0,r>>>=0;for(var c=O(E);++o<E;)c[o]=n[o+r];return c}function nf(n,r){var u;return hr(n,function(o,E,c){return u=r(o,E,c),!u}),!!u}function Dt(n,r,u){var o=0,E=n==null?o:n.length;if(typeof r=="number"&&r===r&&E<=fe){for(;o<E;){var c=o+E>>>1,p=n[c];p!==null&&!Tn(p)&&(u?p<=r:p<r)?o=c+1:E=c}return E}return Ei(n,r,En,u)}function Ei(n,r,u,o){var E=0,c=n==null?0:n.length;if(c===0)return 0;r=u(r);for(var p=r!==r,y=r===null,b=Tn(r),j=r===a;E<c;){var U=Rt((E+c)/2),Y=u(n[U]),ee=Y!==a,ie=Y===null,oe=Y===Y,ge=Tn(Y);if(p)var me=o||oe;else j?me=oe&&(o||ee):y?me=oe&&ee&&(o||!ie):b?me=oe&&ee&&!ie&&(o||!ge):ie||ge?me=!1:me=o?Y<=r:Y<r;me?E=U+1:c=U}return rn(c,ue)}function mo(n,r){for(var u=-1,o=n.length,E=0,c=[];++u<o;){var p=n[u],y=r?r(p):p;if(!u||!Vn(y,b)){var b=y;c[E++]=p===0?0:p}}return c}function Eo(n){return typeof n=="number"?n:Tn(n)?te:+n}function cn(n){if(typeof n=="string")return n;if(Ee(n))return Ge(n,cn)+"";if(Tn(n))return qs?qs.call(n):"";var r=n+"";return r=="0"&&1/n==-J?"-0":r}function Nr(n,r,u){var o=-1,E=ot,c=n.length,p=!0,y=[],b=y;if(u)p=!1,E=jl;else if(c>=i){var j=r?null:vf(n);if(j)return dt(j);p=!1,E=Na,b=new Pr}else b=r?[]:y;e:for(;++o<c;){var U=n[o],Y=r?r(U):U;if(U=u||U!==0?U:0,p&&Y===Y){for(var ee=b.length;ee--;)if(b[ee]===Y)continue e;r&&b.push(Y),y.push(U)}else E(b,Y,u)||(b!==y&&b.push(Y),y.push(U))}return y}function vi(n,r){return r=Rr(r,n),n=Ho(n,r),n==null||delete n[Cn(Dn(r))]}function vo(n,r,u,o){return Ka(n,r,u(Fr(n,r)),o)}function Kt(n,r,u,o){for(var E=n.length,c=o?E:-1;(o?c--:++c<E)&&r(n[c],c,n););return u?Ln(n,o?0:c,o?c+1:E):Ln(n,o?c+1:0,o?E:c)}function go(n,r){var u=n;return u instanceof pe&&(u=u.value()),Ul(r,function(o,E){return E.func.apply(E.thisArg,cr([o],E.args))},u)}function gi(n,r,u){var o=n.length;if(o<2)return o?Nr(n[0]):[];for(var E=-1,c=O(o);++E<o;)for(var p=n[E],y=-1;++y<o;)y!=E&&(c[E]=ba(c[E]||p,n[y],r,u));return Nr(nn(c,1),r,u)}function _o(n,r,u){for(var o=-1,E=n.length,c=r.length,p={};++o<E;){var y=o<c?r[o]:a;u(p,n[o],y)}return p}function _i(n){return Ce(n)?n:[]}function fi(n){return typeof n=="function"?n:En}function Rr(n,r){return Ee(n)?n:Ai(n,r)?[n]:xo(Ae(n))}var rf=_e;function kr(n,r,u){var o=n.length;return u=u===a?o:u,!r&&u>=o?n:Ln(n,r,u)}var fo=qg||function(n){return en.clearTimeout(n)};function co(n,r){if(r)return n.slice();var u=n.length,o=Bs?Bs(u):new n.constructor(u);return n.copy(o),o}function ci(n){var r=new n.constructor(n.byteLength);return new ct(r).set(new ct(n)),r}function af(n,r){var u=r?ci(n.buffer):n.buffer;return new n.constructor(u,n.byteOffset,n.byteLength)}function tf(n){var r=new n.constructor(n.source,Qu.exec(n));return r.lastIndex=n.lastIndex,r}function lf(n){return Sa?De(Sa.call(n)):{}}function To(n,r){var u=r?ci(n.buffer):n.buffer;return new n.constructor(u,n.byteOffset,n.length)}function po(n,r){if(n!==r){var u=n!==a,o=n===null,E=n===n,c=Tn(n),p=r!==a,y=r===null,b=r===r,j=Tn(r);if(!y&&!j&&!c&&n>r||c&&p&&b&&!y&&!j||o&&p&&b||!u&&b||!E)return 1;if(!o&&!c&&!j&&n<r||j&&u&&E&&!o&&!c||y&&u&&E||!p&&E||!b)return-1}return 0}function uf(n,r,u){for(var o=-1,E=n.criteria,c=r.criteria,p=E.length,y=u.length;++o<p;){var b=po(E[o],c[o]);if(b){if(o>=y)return b;var j=u[o];return b*(j=="desc"?-1:1)}}return n.index-r.index}function ho(n,r,u,o){for(var E=-1,c=n.length,p=u.length,y=-1,b=r.length,j=Je(c-p,0),U=O(b+j),Y=!o;++y<b;)U[y]=r[y];for(;++E<p;)(Y||E<c)&&(U[u[E]]=n[E]);for(;j--;)U[y++]=n[E++];return U}function No(n,r,u,o){for(var E=-1,c=n.length,p=-1,y=u.length,b=-1,j=r.length,U=Je(c-y,0),Y=O(U+j),ee=!o;++E<U;)Y[E]=n[E];for(var ie=E;++b<j;)Y[ie+b]=r[b];for(;++p<y;)(ee||E<c)&&(Y[ie+u[p]]=n[E++]);return Y}function on(n,r){var u=-1,o=n.length;for(r||(r=O(o));++u<o;)r[u]=n[u];return r}function xn(n,r,u,o){var E=!u;u||(u={});for(var c=-1,p=r.length;++c<p;){var y=r[c],b=o?o(u[y],n[y],y,u,n):a;b===a&&(b=n[y]),E?ar(u,y,b):Ia(u,y,b)}return u}function sf(n,r){return xn(n,yi(n),r)}function of(n,r){return xn(n,Fo(n),r)}function Pt(n,r){return function(u,o){var E=Ee(u)?vg:D_,c=r?r():{};return E(u,n,se(o,2),c)}}function ea(n){return _e(function(r,u){var o=-1,E=u.length,c=E>1?u[E-1]:a,p=E>2?u[2]:a;for(c=n.length>3&&typeof c=="function"?(E--,c):a,p&&ln(u[0],u[1],p)&&(c=E<3?a:c,E=1),r=De(r);++o<E;){var y=u[o];y&&n(r,y,o,c)}return r})}function Ro(n,r){return function(u,o){if(u==null)return u;if(!mn(u))return n(u,o);for(var E=u.length,c=r?E:-1,p=De(u);(r?c--:++c<E)&&o(p[c],c,p)!==!1;);return u}}function ko(n){return function(r,u,o){for(var E=-1,c=De(r),p=o(r),y=p.length;y--;){var b=p[n?y:++E];if(u(c[b],b,c)===!1)break}return r}}function mf(n,r,u){var o=r&N,E=Pa(n);function c(){var p=this&&this!==en&&this instanceof c?E:n;return p.apply(o?u:this,arguments)}return c}function yo(n){return function(r){r=Ae(r);var u=$r(r)?Gn(r):a,o=u?u[0]:r.charAt(0),E=u?kr(u,1).join(""):r.slice(1);return o[n]()+E}}function na(n){return function(r){return Ul(Rm(Nm(r).replace(Qv,"")),n,"")}}function Pa(n){return function(){var r=arguments;switch(r.length){case 0:return new n;case 1:return new n(r[0]);case 2:return new n(r[0],r[1]);case 3:return new n(r[0],r[1],r[2]);case 4:return new n(r[0],r[1],r[2],r[3]);case 5:return new n(r[0],r[1],r[2],r[3],r[4]);case 6:return new n(r[0],r[1],r[2],r[3],r[4],r[5]);case 7:return new n(r[0],r[1],r[2],r[3],r[4],r[5],r[6])}var u=Qr(n.prototype),o=n.apply(u,r);return Ve(o)?o:u}}function df(n,r,u){var o=Pa(n);function E(){for(var c=arguments.length,p=O(c),y=c,b=ra(E);y--;)p[y]=arguments[y];var j=c<3&&p[0]!==b&&p[c-1]!==b?[]:Tr(p,b);if(c-=j.length,c<u)return Lo(n,r,Ot,E.placeholder,a,p,j,a,a,u-c);var U=this&&this!==en&&this instanceof E?o:n;return _n(U,this,p)}return E}function Ao(n){return function(r,u,o){var E=De(r);if(!mn(r)){var c=se(u,3);r=We(r),u=function(y){return c(E[y],y,E)}}var p=n(r,u,o);return p>-1?E[c?r[p]:p]:a}}function So(n){return lr(function(r){var u=r.length,o=u,E=In.prototype.thru;for(n&&r.reverse();o--;){var c=r[o];if(typeof c!="function")throw new Sn(m);if(E&&!p&&Bt(c)=="wrapper")var p=new In([],!0)}for(o=p?o:u;++o<u;){c=r[o];var y=Bt(c),b=y=="wrapper"?Ri(c):a;b&&Si(b[0])&&b[1]==(w|I|D|G)&&!b[4].length&&b[9]==1?p=p[Bt(b[0])].apply(p,b[3]):p=c.length==1&&Si(c)?p[y]():p.thru(c)}return function(){var j=arguments,U=j[0];if(p&&j.length==1&&Ee(U))return p.plant(U).value();for(var Y=0,ee=u?r[Y].apply(this,j):U;++Y<u;)ee=r[Y].call(this,ee);return ee}})}function Ot(n,r,u,o,E,c,p,y,b,j){var U=r&w,Y=r&N,ee=r&A,ie=r&(I|x),oe=r&W,ge=ee?a:Pa(n);function me(){for(var ce=arguments.length,he=O(ce),pn=ce;pn--;)he[pn]=arguments[pn];if(ie)var un=ra(me),hn=Rg(he,un);if(o&&(he=ho(he,o,E,ie)),c&&(he=No(he,c,p,ie)),ce-=hn,ie&&ce<j){var Ye=Tr(he,un);return Lo(n,r,Ot,me.placeholder,u,he,Ye,y,b,j-ce)}var Mn=Y?u:this,or=ee?Mn[n]:n;return ce=he.length,y?he=Kf(he,y):oe&&ce>1&&he.reverse(),U&&b<ce&&(he.length=b),this&&this!==en&&this instanceof me&&(or=ge||Pa(or)),or.apply(Mn,he)}return me}function Io(n,r){return function(u,o){return V_(u,n,r(o),{})}}function Ft(n,r){return function(u,o){var E;if(u===a&&o===a)return r;if(u!==a&&(E=u),o!==a){if(E===a)return o;typeof u=="string"||typeof o=="string"?(u=cn(u),o=cn(o)):(u=Eo(u),o=Eo(o)),E=n(u,o)}return E}}function Ti(n){return lr(function(r){return r=Ge(r,fn(se())),_e(function(u){var o=this;return n(r,function(E){return _n(E,o,u)})})})}function wt(n,r){r=r===a?" ":cn(r);var u=r.length;if(u<2)return u?di(r,n):r;var o=di(r,Nt(n/Jr(r)));return $r(r)?kr(Gn(o),0,n).join(""):o.slice(0,n)}function Ef(n,r,u,o){var E=r&N,c=Pa(n);function p(){for(var y=-1,b=arguments.length,j=-1,U=o.length,Y=O(U+b),ee=this&&this!==en&&this instanceof p?c:n;++j<U;)Y[j]=o[j];for(;b--;)Y[j++]=arguments[++y];return _n(ee,E?u:this,Y)}return p}function bo(n){return function(r,u,o){return o&&typeof o!="number"&&ln(r,u,o)&&(u=o=a),r=sr(r),u===a?(u=r,r=0):u=sr(u),o=o===a?r<u?1:-1:sr(o),z_(r,u,o,n)}}function Gt(n){return function(r,u){return typeof r=="string"&&typeof u=="string"||(r=Kn(r),u=Kn(u)),n(r,u)}}function Lo(n,r,u,o,E,c,p,y,b,j){var U=r&I,Y=U?p:a,ee=U?a:p,ie=U?c:a,oe=U?a:c;r|=U?D:q,r&=~(U?q:D),r&P||(r&=-4);var ge=[n,r,E,ie,Y,oe,ee,y,b,j],me=u.apply(a,ge);return Si(n)&&jo(me,ge),me.placeholder=o,Uo(me,n,r)}function pi(n){var r=$e[n];return function(u,o){if(u=Kn(u),o=o==null?0:rn(ve(o),292),o&&js(u)){var E=(Ae(u)+"e").split("e"),c=r(E[0]+"e"+(+E[1]+o));return E=(Ae(c)+"e").split("e"),+(E[0]+"e"+(+E[1]-o))}return r(u)}}var vf=Xr&&1/dt(new Xr([,-0]))[1]==J?function(n){return new Xr(n)}:ji;function Do(n){return function(r){var u=an(r);return u==Be?Wl(r):u==wn?Lg(r):Ng(r,n(r))}}function tr(n,r,u,o,E,c,p,y){var b=r&A;if(!b&&typeof n!="function")throw new Sn(m);var j=o?o.length:0;if(j||(r&=-97,o=E=a),p=p===a?p:Je(ve(p),0),y=y===a?y:ve(y),j-=E?E.length:0,r&q){var U=o,Y=E;o=E=a}var ee=b?a:Ri(n),ie=[n,r,u,o,E,U,Y,c,p,y];if(ee&&bf(ie,ee),n=ie[0],r=ie[1],u=ie[2],o=ie[3],E=ie[4],y=ie[9]=ie[9]===a?b?0:n.length:Je(ie[9]-j,0),!y&&r&(I|x)&&(r&=-25),!r||r==N)var oe=mf(n,r,u);else r==I||r==x?oe=df(n,r,y):(r==D||r==(N|D))&&!E.length?oe=Ef(n,r,u,o):oe=Ot.apply(a,ie);var ge=ee?oo:jo;return Uo(ge(oe,ie),n,r)}function Ko(n,r,u,o){return n===a||Vn(n,zr[u])&&!Ie.call(o,u)?r:n}function Po(n,r,u,o,E,c){return Ve(n)&&Ve(r)&&(c.set(r,n),Lt(n,r,a,Po,c),c.delete(r)),n}function gf(n){return wa(n)?a:n}function Oo(n,r,u,o,E,c){var p=u&L,y=n.length,b=r.length;if(y!=b&&!(p&&b>y))return!1;var j=c.get(n),U=c.get(r);if(j&&U)return j==r&&U==n;var Y=-1,ee=!0,ie=u&k?new Pr:a;for(c.set(n,r),c.set(r,n);++Y<y;){var oe=n[Y],ge=r[Y];if(o)var me=p?o(ge,oe,Y,r,n,c):o(oe,ge,Y,n,r,c);if(me!==a){if(me)continue;ee=!1;break}if(ie){if(!ql(r,function(ce,he){if(!Na(ie,he)&&(oe===ce||E(oe,ce,u,o,c)))return ie.push(he)})){ee=!1;break}}else if(!(oe===ge||E(oe,ge,u,o,c))){ee=!1;break}}return c.delete(n),c.delete(r),ee}function _f(n,r,u,o,E,c,p){switch(u){case xr:if(n.byteLength!=r.byteLength||n.byteOffset!=r.byteOffset)return!1;n=n.buffer,r=r.buffer;case ha:return!(n.byteLength!=r.byteLength||!c(new ct(n),new ct(r)));case Te:case ye:case Ze:return Vn(+n,+r);case Ue:return n.name==r.name&&n.message==r.message;case ca:case Ta:return n==r+"";case Be:var y=Wl;case wn:var b=o&L;if(y||(y=dt),n.size!=r.size&&!b)return!1;var j=p.get(n);if(j)return j==r;o|=k,p.set(n,r);var U=Oo(y(n),y(r),o,E,c,p);return p.delete(n),U;case lt:if(Sa)return Sa.call(n)==Sa.call(r)}return!1}function ff(n,r,u,o,E,c){var p=u&L,y=hi(n),b=y.length,j=hi(r),U=j.length;if(b!=U&&!p)return!1;for(var Y=b;Y--;){var ee=y[Y];if(!(p?ee in r:Ie.call(r,ee)))return!1}var ie=c.get(n),oe=c.get(r);if(ie&&oe)return ie==r&&oe==n;var ge=!0;c.set(n,r),c.set(r,n);for(var me=p;++Y<b;){ee=y[Y];var ce=n[ee],he=r[ee];if(o)var pn=p?o(he,ce,ee,r,n,c):o(ce,he,ee,n,r,c);if(!(pn===a?ce===he||E(ce,he,u,o,c):pn)){ge=!1;break}me||(me=ee=="constructor")}if(ge&&!me){var un=n.constructor,hn=r.constructor;un!=hn&&"constructor"in n&&"constructor"in r&&!(typeof un=="function"&&un instanceof un&&typeof hn=="function"&&hn instanceof hn)&&(ge=!1)}return c.delete(n),c.delete(r),ge}function lr(n){return bi(Mo(n,a,Jo),n+"")}function hi(n){return Zs(n,We,yi)}function Ni(n){return Zs(n,dn,Fo)}var Ri=kt?function(n){return kt.get(n)}:ji;function Bt(n){for(var r=n.name+"",u=Zr[r],o=Ie.call(Zr,r)?u.length:0;o--;){var E=u[o],c=E.func;if(c==null||c==n)return E.name}return r}function ra(n){var r=Ie.call(g,"placeholder")?g:n;return r.placeholder}function se(){var n=g.iteratee||Mi;return n=n===Mi?no:n,arguments.length?n(arguments[0],arguments[1]):n}function Vt(n,r){var u=n.__data__;return yf(r)?u[typeof r=="string"?"string":"hash"]:u.map}function ki(n){for(var r=We(n),u=r.length;u--;){var o=r[u],E=n[o];r[u]=[o,E,Bo(E)]}return r}function wr(n,r){var u=Sg(n,r);return eo(u)?u:a}function cf(n){var r=Ie.call(n,Dr),u=n[Dr];try{n[Dr]=a;var o=!0}catch{}var E=_t.call(n);return o&&(r?n[Dr]=u:delete n[Dr]),E}var yi=Xl?function(n){return n==null?[]:(n=De(n),fr(Xl(n),function(r){return Ms.call(n,r)}))}:Ui,Fo=Xl?function(n){for(var r=[];n;)cr(r,yi(n)),n=Tt(n);return r}:Ui,an=tn;(Zl&&an(new Zl(new ArrayBuffer(1)))!=xr||ka&&an(new ka)!=Be||Ql&&an(Ql.resolve())!=Un||Xr&&an(new Xr)!=wn||ya&&an(new ya)!=pa)&&(an=function(n){var r=tn(n),u=r==Qe?n.constructor:a,o=u?Gr(u):"";if(o)switch(o){case Zg:return xr;case Qg:return Be;case e_:return Un;case n_:return wn;case r_:return pa}return r});function Tf(n,r,u){for(var o=-1,E=u.length;++o<E;){var c=u[o],p=c.size;switch(c.type){case"drop":n+=p;break;case"dropRight":r-=p;break;case"take":r=rn(r,n+p);break;case"takeRight":n=Je(n,r-p);break}}return{start:n,end:r}}function pf(n){var r=n.match(yv);return r?r[1].split(Av):[]}function wo(n,r,u){r=Rr(r,n);for(var o=-1,E=r.length,c=!1;++o<E;){var p=Cn(r[o]);if(!(c=n!=null&&u(n,p)))break;n=n[p]}return c||++o!=E?c:(E=n==null?0:n.length,!!E&&Ct(E)&&ir(p,E)&&(Ee(n)||Br(n)))}function hf(n){var r=n.length,u=new n.constructor(r);return r&&typeof n[0]=="string"&&Ie.call(n,"index")&&(u.index=n.index,u.input=n.input),u}function Go(n){return typeof n.constructor=="function"&&!Oa(n)?Qr(Tt(n)):{}}function Nf(n,r,u){var o=n.constructor;switch(r){case ha:return ci(n);case Te:case ye:return new o(+n);case xr:return af(n,u);case kl:case yl:case Al:case Sl:case Il:case bl:case Ll:case Dl:case Kl:return To(n,u);case Be:return new o;case Ze:case Ta:return new o(n);case ca:return tf(n);case wn:return new o;case lt:return lf(n)}}function Rf(n,r){var u=r.length;if(!u)return n;var o=u-1;return r[o]=(u>1?"& ":"")+r[o],r=r.join(u>2?", ":" "),n.replace(kv,`{
/* [wrapped with `+r+`] */
`)}function kf(n){return Ee(n)||Br(n)||!!(Hs&&n&&n[Hs])}function ir(n,r){var u=typeof n;return r=r??C,!!r&&(u=="number"||u!="symbol"&&Fv.test(n))&&n>-1&&n%1==0&&n<r}function ln(n,r,u){if(!Ve(u))return!1;var o=typeof r;return(o=="number"?mn(u)&&ir(r,u.length):o=="string"&&r in u)?Vn(u[r],n):!1}function Ai(n,r){if(Ee(n))return!1;var u=typeof n;return u=="number"||u=="symbol"||u=="boolean"||n==null||Tn(n)?!0:pv.test(n)||!Tv.test(n)||r!=null&&n in De(r)}function yf(n){var r=typeof n;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?n!=="__proto__":n===null}function Si(n){var r=Bt(n),u=g[r];if(typeof u!="function"||!(r in pe.prototype))return!1;if(n===u)return!0;var o=Ri(u);return!!o&&n===o[0]}function Af(n){return!!Gs&&Gs in n}var Sf=vt?ur:qi;function Oa(n){var r=n&&n.constructor,u=typeof r=="function"&&r.prototype||zr;return n===u}function Bo(n){return n===n&&!Ve(n)}function Vo(n,r){return function(u){return u==null?!1:u[n]===r&&(r!==a||n in De(u))}}function If(n){var r=qt(n,function(o){return u.size===_&&u.clear(),o}),u=r.cache;return r}function bf(n,r){var u=n[1],o=r[1],E=u|o,c=E<(N|A|w),p=o==w&&u==I||o==w&&u==G&&n[7].length<=r[8]||o==(w|G)&&r[7].length<=r[8]&&u==I;if(!(c||p))return n;o&N&&(n[2]=r[2],E|=u&N?0:P);var y=r[3];if(y){var b=n[3];n[3]=b?ho(b,y,r[4]):y,n[4]=b?Tr(n[3],f):r[4]}return y=r[5],y&&(b=n[5],n[5]=b?No(b,y,r[6]):y,n[6]=b?Tr(n[5],f):r[6]),y=r[7],y&&(n[7]=y),o&w&&(n[8]=n[8]==null?r[8]:rn(n[8],r[8])),n[9]==null&&(n[9]=r[9]),n[0]=r[0],n[1]=E,n}function Lf(n){var r=[];if(n!=null)for(var u in De(n))r.push(u);return r}function Df(n){return _t.call(n)}function Mo(n,r,u){return r=Je(r===a?n.length-1:r,0),function(){for(var o=arguments,E=-1,c=Je(o.length-r,0),p=O(c);++E<c;)p[E]=o[r+E];E=-1;for(var y=O(r+1);++E<r;)y[E]=o[E];return y[r]=u(p),_n(n,this,y)}}function Ho(n,r){return r.length<2?n:Fr(n,Ln(r,0,-1))}function Kf(n,r){for(var u=n.length,o=rn(r.length,u),E=on(n);o--;){var c=r[o];n[o]=ir(c,u)?E[c]:a}return n}function Ii(n,r){if(!(r==="constructor"&&typeof n[r]=="function")&&r!="__proto__")return n[r]}var jo=qo(oo),Fa=Cg||function(n,r){return en.setTimeout(n,r)},bi=qo(Q_);function Uo(n,r,u){var o=r+"";return bi(n,Rf(o,Pf(pf(o),u)))}function qo(n){var r=0,u=0;return function(){var o=Wg(),E=H-(o-u);if(u=o,E>0){if(++r>=Q)return arguments[0]}else r=0;return n.apply(a,arguments)}}function Mt(n,r){var u=-1,o=n.length,E=o-1;for(r=r===a?o:r;++u<r;){var c=mi(u,E),p=n[c];n[c]=n[u],n[u]=p}return n.length=r,n}var xo=If(function(n){var r=[];return n.charCodeAt(0)===46&&r.push(""),n.replace(hv,function(u,o,E,c){r.push(E?c.replace(bv,"$1"):o||u)}),r});function Cn(n){if(typeof n=="string"||Tn(n))return n;var r=n+"";return r=="0"&&1/n==-J?"-0":r}function Gr(n){if(n!=null){try{return gt.call(n)}catch{}try{return n+""}catch{}}return""}function Pf(n,r){return An(gn,function(u){var o="_."+u[0];r&u[1]&&!ot(n,o)&&n.push(o)}),n.sort()}function Co(n){if(n instanceof pe)return n.clone();var r=new In(n.__wrapped__,n.__chain__);return r.__actions__=on(n.__actions__),r.__index__=n.__index__,r.__values__=n.__values__,r}function Of(n,r,u){(u?ln(n,r,u):r===a)?r=1:r=Je(ve(r),0);var o=n==null?0:n.length;if(!o||r<1)return[];for(var E=0,c=0,p=O(Nt(o/r));E<o;)p[c++]=Ln(n,E,E+=r);return p}function Ff(n){for(var r=-1,u=n==null?0:n.length,o=0,E=[];++r<u;){var c=n[r];c&&(E[o++]=c)}return E}function wf(){var n=arguments.length;if(!n)return[];for(var r=O(n-1),u=arguments[0],o=n;o--;)r[o-1]=arguments[o];return cr(Ee(u)?on(u):[u],nn(r,1))}var Gf=_e(function(n,r){return Ce(n)?ba(n,nn(r,1,Ce,!0)):[]}),Bf=_e(function(n,r){var u=Dn(r);return Ce(u)&&(u=a),Ce(n)?ba(n,nn(r,1,Ce,!0),se(u,2)):[]}),Vf=_e(function(n,r){var u=Dn(r);return Ce(u)&&(u=a),Ce(n)?ba(n,nn(r,1,Ce,!0),a,u):[]});function Mf(n,r,u){var o=n==null?0:n.length;return o?(r=u||r===a?1:ve(r),Ln(n,r<0?0:r,o)):[]}function Hf(n,r,u){var o=n==null?0:n.length;return o?(r=u||r===a?1:ve(r),r=o-r,Ln(n,0,r<0?0:r)):[]}function jf(n,r){return n&&n.length?Kt(n,se(r,3),!0,!0):[]}function Uf(n,r){return n&&n.length?Kt(n,se(r,3),!0):[]}function qf(n,r,u,o){var E=n==null?0:n.length;return E?(u&&typeof u!="number"&&ln(n,r,u)&&(u=0,o=E),F_(n,r,u,o)):[]}function Yo(n,r,u){var o=n==null?0:n.length;if(!o)return-1;var E=u==null?0:ve(u);return E<0&&(E=Je(o+E,0)),mt(n,se(r,3),E)}function $o(n,r,u){var o=n==null?0:n.length;if(!o)return-1;var E=o-1;return u!==a&&(E=ve(u),E=u<0?Je(o+E,0):rn(E,o-1)),mt(n,se(r,3),E,!0)}function Jo(n){var r=n==null?0:n.length;return r?nn(n,1):[]}function xf(n){var r=n==null?0:n.length;return r?nn(n,J):[]}function Cf(n,r){var u=n==null?0:n.length;return u?(r=r===a?1:ve(r),nn(n,r)):[]}function Yf(n){for(var r=-1,u=n==null?0:n.length,o={};++r<u;){var E=n[r];o[E[0]]=E[1]}return o}function Wo(n){return n&&n.length?n[0]:a}function $f(n,r,u){var o=n==null?0:n.length;if(!o)return-1;var E=u==null?0:ve(u);return E<0&&(E=Je(o+E,0)),Yr(n,r,E)}function Jf(n){var r=n==null?0:n.length;return r?Ln(n,0,-1):[]}var Wf=_e(function(n){var r=Ge(n,_i);return r.length&&r[0]===n[0]?li(r):[]}),zf=_e(function(n){var r=Dn(n),u=Ge(n,_i);return r===Dn(u)?r=a:u.pop(),u.length&&u[0]===n[0]?li(u,se(r,2)):[]}),Xf=_e(function(n){var r=Dn(n),u=Ge(n,_i);return r=typeof r=="function"?r:a,r&&u.pop(),u.length&&u[0]===n[0]?li(u,a,r):[]});function Zf(n,r){return n==null?"":$g.call(n,r)}function Dn(n){var r=n==null?0:n.length;return r?n[r-1]:a}function Qf(n,r,u){var o=n==null?0:n.length;if(!o)return-1;var E=o;return u!==a&&(E=ve(u),E=E<0?Je(o+E,0):rn(E,o-1)),r===r?Kg(n,r,E):mt(n,bs,E,!0)}function ec(n,r){return n&&n.length?lo(n,ve(r)):a}var nc=_e(zo);function zo(n,r){return n&&n.length&&r&&r.length?oi(n,r):n}function rc(n,r,u){return n&&n.length&&r&&r.length?oi(n,r,se(u,2)):n}function ac(n,r,u){return n&&n.length&&r&&r.length?oi(n,r,a,u):n}var tc=lr(function(n,r){var u=n==null?0:n.length,o=ni(n,r);return so(n,Ge(r,function(E){return ir(E,u)?+E:E}).sort(po)),o});function lc(n,r){var u=[];if(!(n&&n.length))return u;var o=-1,E=[],c=n.length;for(r=se(r,3);++o<c;){var p=n[o];r(p,o,n)&&(u.push(p),E.push(o))}return so(n,E),u}function Li(n){return n==null?n:Xg.call(n)}function ic(n,r,u){var o=n==null?0:n.length;return o?(u&&typeof u!="number"&&ln(n,r,u)?(r=0,u=o):(r=r==null?0:ve(r),u=u===a?o:ve(u)),Ln(n,r,u)):[]}function uc(n,r){return Dt(n,r)}function sc(n,r,u){return Ei(n,r,se(u,2))}function oc(n,r){var u=n==null?0:n.length;if(u){var o=Dt(n,r);if(o<u&&Vn(n[o],r))return o}return-1}function mc(n,r){return Dt(n,r,!0)}function dc(n,r,u){return Ei(n,r,se(u,2),!0)}function Ec(n,r){var u=n==null?0:n.length;if(u){var o=Dt(n,r,!0)-1;if(Vn(n[o],r))return o}return-1}function vc(n){return n&&n.length?mo(n):[]}function gc(n,r){return n&&n.length?mo(n,se(r,2)):[]}function _c(n){var r=n==null?0:n.length;return r?Ln(n,1,r):[]}function fc(n,r,u){return n&&n.length?(r=u||r===a?1:ve(r),Ln(n,0,r<0?0:r)):[]}function cc(n,r,u){var o=n==null?0:n.length;return o?(r=u||r===a?1:ve(r),r=o-r,Ln(n,r<0?0:r,o)):[]}function Tc(n,r){return n&&n.length?Kt(n,se(r,3),!1,!0):[]}function pc(n,r){return n&&n.length?Kt(n,se(r,3)):[]}var hc=_e(function(n){return Nr(nn(n,1,Ce,!0))}),Nc=_e(function(n){var r=Dn(n);return Ce(r)&&(r=a),Nr(nn(n,1,Ce,!0),se(r,2))}),Rc=_e(function(n){var r=Dn(n);return r=typeof r=="function"?r:a,Nr(nn(n,1,Ce,!0),a,r)});function kc(n){return n&&n.length?Nr(n):[]}function yc(n,r){return n&&n.length?Nr(n,se(r,2)):[]}function Ac(n,r){return r=typeof r=="function"?r:a,n&&n.length?Nr(n,a,r):[]}function Di(n){if(!(n&&n.length))return[];var r=0;return n=fr(n,function(u){if(Ce(u))return r=Je(u.length,r),!0}),$l(r,function(u){return Ge(n,xl(u))})}function Xo(n,r){if(!(n&&n.length))return[];var u=Di(n);return r==null?u:Ge(u,function(o){return _n(r,a,o)})}var Sc=_e(function(n,r){return Ce(n)?ba(n,r):[]}),Ic=_e(function(n){return gi(fr(n,Ce))}),bc=_e(function(n){var r=Dn(n);return Ce(r)&&(r=a),gi(fr(n,Ce),se(r,2))}),Lc=_e(function(n){var r=Dn(n);return r=typeof r=="function"?r:a,gi(fr(n,Ce),a,r)}),Dc=_e(Di);function Kc(n,r){return _o(n||[],r||[],Ia)}function Pc(n,r){return _o(n||[],r||[],Ka)}var Oc=_e(function(n){var r=n.length,u=r>1?n[r-1]:a;return u=typeof u=="function"?(n.pop(),u):a,Xo(n,u)});function Zo(n){var r=g(n);return r.__chain__=!0,r}function Fc(n,r){return r(n),n}function Ht(n,r){return r(n)}var wc=lr(function(n){var r=n.length,u=r?n[0]:0,o=this.__wrapped__,E=function(c){return ni(c,n)};return r>1||this.__actions__.length||!(o instanceof pe)||!ir(u)?this.thru(E):(o=o.slice(u,+u+(r?1:0)),o.__actions__.push({func:Ht,args:[E],thisArg:a}),new In(o,this.__chain__).thru(function(c){return r&&!c.length&&c.push(a),c}))});function Gc(){return Zo(this)}function Bc(){return new In(this.value(),this.__chain__)}function Vc(){this.__values__===a&&(this.__values__=Em(this.value()));var n=this.__index__>=this.__values__.length,r=n?a:this.__values__[this.__index__++];return{done:n,value:r}}function Mc(){return this}function Hc(n){for(var r,u=this;u instanceof At;){var o=Co(u);o.__index__=0,o.__values__=a,r?E.__wrapped__=o:r=o;var E=o;u=u.__wrapped__}return E.__wrapped__=n,r}function jc(){var n=this.__wrapped__;if(n instanceof pe){var r=n;return this.__actions__.length&&(r=new pe(this)),r=r.reverse(),r.__actions__.push({func:Ht,args:[Li],thisArg:a}),new In(r,this.__chain__)}return this.thru(Li)}function Uc(){return go(this.__wrapped__,this.__actions__)}var qc=Pt(function(n,r,u){Ie.call(n,u)?++n[u]:ar(n,u,1)});function xc(n,r,u){var o=Ee(n)?Ss:O_;return u&&ln(n,r,u)&&(r=a),o(n,se(r,3))}function Cc(n,r){var u=Ee(n)?fr:zs;return u(n,se(r,3))}var Yc=Ao(Yo),$c=Ao($o);function Jc(n,r){return nn(jt(n,r),1)}function Wc(n,r){return nn(jt(n,r),J)}function zc(n,r,u){return u=u===a?1:ve(u),nn(jt(n,r),u)}function Qo(n,r){var u=Ee(n)?An:hr;return u(n,se(r,3))}function em(n,r){var u=Ee(n)?gg:Ws;return u(n,se(r,3))}var Xc=Pt(function(n,r,u){Ie.call(n,u)?n[u].push(r):ar(n,u,[r])});function Zc(n,r,u,o){n=mn(n)?n:ta(n),u=u&&!o?ve(u):0;var E=n.length;return u<0&&(u=Je(E+u,0)),Yt(n)?u<=E&&n.indexOf(r,u)>-1:!!E&&Yr(n,r,u)>-1}var Qc=_e(function(n,r,u){var o=-1,E=typeof r=="function",c=mn(n)?O(n.length):[];return hr(n,function(p){c[++o]=E?_n(r,p,u):La(p,r,u)}),c}),eT=Pt(function(n,r,u){ar(n,u,r)});function jt(n,r){var u=Ee(n)?Ge:ro;return u(n,se(r,3))}function nT(n,r,u,o){return n==null?[]:(Ee(r)||(r=r==null?[]:[r]),u=o?a:u,Ee(u)||(u=u==null?[]:[u]),io(n,r,u))}var rT=Pt(function(n,r,u){n[u?0:1].push(r)},function(){return[[],[]]});function aT(n,r,u){var o=Ee(n)?Ul:Ds,E=arguments.length<3;return o(n,se(r,4),u,E,hr)}function tT(n,r,u){var o=Ee(n)?_g:Ds,E=arguments.length<3;return o(n,se(r,4),u,E,Ws)}function lT(n,r){var u=Ee(n)?fr:zs;return u(n,xt(se(r,3)))}function iT(n){var r=Ee(n)?Cs:X_;return r(n)}function uT(n,r,u){(u?ln(n,r,u):r===a)?r=1:r=ve(r);var o=Ee(n)?b_:Z_;return o(n,r)}function sT(n){var r=Ee(n)?L_:ef;return r(n)}function oT(n){if(n==null)return 0;if(mn(n))return Yt(n)?Jr(n):n.length;var r=an(n);return r==Be||r==wn?n.size:ui(n).length}function mT(n,r,u){var o=Ee(n)?ql:nf;return u&&ln(n,r,u)&&(r=a),o(n,se(r,3))}var dT=_e(function(n,r){if(n==null)return[];var u=r.length;return u>1&&ln(n,r[0],r[1])?r=[]:u>2&&ln(r[0],r[1],r[2])&&(r=[r[0]]),io(n,nn(r,1),[])}),Ut=xg||function(){return en.Date.now()};function ET(n,r){if(typeof r!="function")throw new Sn(m);return n=ve(n),function(){if(--n<1)return r.apply(this,arguments)}}function nm(n,r,u){return r=u?a:r,r=n&&r==null?n.length:r,tr(n,w,a,a,a,a,r)}function rm(n,r){var u;if(typeof r!="function")throw new Sn(m);return n=ve(n),function(){return--n>0&&(u=r.apply(this,arguments)),n<=1&&(r=a),u}}var Ki=_e(function(n,r,u){var o=N;if(u.length){var E=Tr(u,ra(Ki));o|=D}return tr(n,o,r,u,E)}),am=_e(function(n,r,u){var o=N|A;if(u.length){var E=Tr(u,ra(am));o|=D}return tr(r,o,n,u,E)});function tm(n,r,u){r=u?a:r;var o=tr(n,I,a,a,a,a,a,r);return o.placeholder=tm.placeholder,o}function lm(n,r,u){r=u?a:r;var o=tr(n,x,a,a,a,a,a,r);return o.placeholder=lm.placeholder,o}function im(n,r,u){var o,E,c,p,y,b,j=0,U=!1,Y=!1,ee=!0;if(typeof n!="function")throw new Sn(m);r=Kn(r)||0,Ve(u)&&(U=!!u.leading,Y="maxWait"in u,c=Y?Je(Kn(u.maxWait)||0,r):c,ee="trailing"in u?!!u.trailing:ee);function ie(Ye){var Mn=o,or=E;return o=E=a,j=Ye,p=n.apply(or,Mn),p}function oe(Ye){return j=Ye,y=Fa(ce,r),U?ie(Ye):p}function ge(Ye){var Mn=Ye-b,or=Ye-j,Am=r-Mn;return Y?rn(Am,c-or):Am}function me(Ye){var Mn=Ye-b,or=Ye-j;return b===a||Mn>=r||Mn<0||Y&&or>=c}function ce(){var Ye=Ut();if(me(Ye))return he(Ye);y=Fa(ce,ge(Ye))}function he(Ye){return y=a,ee&&o?ie(Ye):(o=E=a,p)}function pn(){y!==a&&fo(y),j=0,o=b=E=y=a}function un(){return y===a?p:he(Ut())}function hn(){var Ye=Ut(),Mn=me(Ye);if(o=arguments,E=this,b=Ye,Mn){if(y===a)return oe(b);if(Y)return fo(y),y=Fa(ce,r),ie(b)}return y===a&&(y=Fa(ce,r)),p}return hn.cancel=pn,hn.flush=un,hn}var vT=_e(function(n,r){return Js(n,1,r)}),gT=_e(function(n,r,u){return Js(n,Kn(r)||0,u)});function _T(n){return tr(n,W)}function qt(n,r){if(typeof n!="function"||r!=null&&typeof r!="function")throw new Sn(m);var u=function(){var o=arguments,E=r?r.apply(this,o):o[0],c=u.cache;if(c.has(E))return c.get(E);var p=n.apply(this,o);return u.cache=c.set(E,p)||c,p};return u.cache=new(qt.Cache||rr),u}qt.Cache=rr;function xt(n){if(typeof n!="function")throw new Sn(m);return function(){var r=arguments;switch(r.length){case 0:return!n.call(this);case 1:return!n.call(this,r[0]);case 2:return!n.call(this,r[0],r[1]);case 3:return!n.call(this,r[0],r[1],r[2])}return!n.apply(this,r)}}function fT(n){return rm(2,n)}var cT=rf(function(n,r){r=r.length==1&&Ee(r[0])?Ge(r[0],fn(se())):Ge(nn(r,1),fn(se()));var u=r.length;return _e(function(o){for(var E=-1,c=rn(o.length,u);++E<c;)o[E]=r[E].call(this,o[E]);return _n(n,this,o)})}),Pi=_e(function(n,r){var u=Tr(r,ra(Pi));return tr(n,D,a,r,u)}),um=_e(function(n,r){var u=Tr(r,ra(um));return tr(n,q,a,r,u)}),TT=lr(function(n,r){return tr(n,G,a,a,a,r)});function pT(n,r){if(typeof n!="function")throw new Sn(m);return r=r===a?r:ve(r),_e(n,r)}function hT(n,r){if(typeof n!="function")throw new Sn(m);return r=r==null?0:Je(ve(r),0),_e(function(u){var o=u[r],E=kr(u,0,r);return o&&cr(E,o),_n(n,this,E)})}function NT(n,r,u){var o=!0,E=!0;if(typeof n!="function")throw new Sn(m);return Ve(u)&&(o="leading"in u?!!u.leading:o,E="trailing"in u?!!u.trailing:E),im(n,r,{leading:o,maxWait:r,trailing:E})}function RT(n){return nm(n,1)}function kT(n,r){return Pi(fi(r),n)}function yT(){if(!arguments.length)return[];var n=arguments[0];return Ee(n)?n:[n]}function AT(n){return bn(n,h)}function ST(n,r){return r=typeof r=="function"?r:a,bn(n,h,r)}function IT(n){return bn(n,T|h)}function bT(n,r){return r=typeof r=="function"?r:a,bn(n,T|h,r)}function LT(n,r){return r==null||$s(n,r,We(r))}function Vn(n,r){return n===r||n!==n&&r!==r}var DT=Gt(ti),KT=Gt(function(n,r){return n>=r}),Br=Qs((function(){return arguments})())?Qs:function(n){return qe(n)&&Ie.call(n,"callee")&&!Ms.call(n,"callee")},Ee=O.isArray,PT=hs?fn(hs):M_;function mn(n){return n!=null&&Ct(n.length)&&!ur(n)}function Ce(n){return qe(n)&&mn(n)}function OT(n){return n===!0||n===!1||qe(n)&&tn(n)==Te}var yr=Yg||qi,FT=Ns?fn(Ns):H_;function wT(n){return qe(n)&&n.nodeType===1&&!wa(n)}function GT(n){if(n==null)return!0;if(mn(n)&&(Ee(n)||typeof n=="string"||typeof n.splice=="function"||yr(n)||aa(n)||Br(n)))return!n.length;var r=an(n);if(r==Be||r==wn)return!n.size;if(Oa(n))return!ui(n).length;for(var u in n)if(Ie.call(n,u))return!1;return!0}function BT(n,r){return Da(n,r)}function VT(n,r,u){u=typeof u=="function"?u:a;var o=u?u(n,r):a;return o===a?Da(n,r,a,u):!!o}function Oi(n){if(!qe(n))return!1;var r=tn(n);return r==Ue||r==Xe||typeof n.message=="string"&&typeof n.name=="string"&&!wa(n)}function MT(n){return typeof n=="number"&&js(n)}function ur(n){if(!Ve(n))return!1;var r=tn(n);return r==xe||r==kn||r==je||r==er}function sm(n){return typeof n=="number"&&n==ve(n)}function Ct(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=C}function Ve(n){var r=typeof n;return n!=null&&(r=="object"||r=="function")}function qe(n){return n!=null&&typeof n=="object"}var om=Rs?fn(Rs):U_;function HT(n,r){return n===r||ii(n,r,ki(r))}function jT(n,r,u){return u=typeof u=="function"?u:a,ii(n,r,ki(r),u)}function UT(n){return mm(n)&&n!=+n}function qT(n){if(Sf(n))throw new de(s);return eo(n)}function xT(n){return n===null}function CT(n){return n==null}function mm(n){return typeof n=="number"||qe(n)&&tn(n)==Ze}function wa(n){if(!qe(n)||tn(n)!=Qe)return!1;var r=Tt(n);if(r===null)return!0;var u=Ie.call(r,"constructor")&&r.constructor;return typeof u=="function"&&u instanceof u&&gt.call(u)==Hg}var Fi=ks?fn(ks):q_;function YT(n){return sm(n)&&n>=-C&&n<=C}var dm=ys?fn(ys):x_;function Yt(n){return typeof n=="string"||!Ee(n)&&qe(n)&&tn(n)==Ta}function Tn(n){return typeof n=="symbol"||qe(n)&&tn(n)==lt}var aa=As?fn(As):C_;function $T(n){return n===a}function JT(n){return qe(n)&&an(n)==pa}function WT(n){return qe(n)&&tn(n)==mv}var zT=Gt(si),XT=Gt(function(n,r){return n<=r});function Em(n){if(!n)return[];if(mn(n))return Yt(n)?Gn(n):on(n);if(Ra&&n[Ra])return bg(n[Ra]());var r=an(n),u=r==Be?Wl:r==wn?dt:ta;return u(n)}function sr(n){if(!n)return n===0?n:0;if(n=Kn(n),n===J||n===-J){var r=n<0?-1:1;return r*$}return n===n?n:0}function ve(n){var r=sr(n),u=r%1;return r===r?u?r-u:r:0}function vm(n){return n?Or(ve(n),0,ne):0}function Kn(n){if(typeof n=="number")return n;if(Tn(n))return te;if(Ve(n)){var r=typeof n.valueOf=="function"?n.valueOf():n;n=Ve(r)?r+"":r}if(typeof n!="string")return n===0?n:+n;n=Ks(n);var u=Kv.test(n);return u||Ov.test(n)?dg(n.slice(2),u?2:8):Dv.test(n)?te:+n}function gm(n){return xn(n,dn(n))}function ZT(n){return n?Or(ve(n),-C,C):n===0?n:0}function Ae(n){return n==null?"":cn(n)}var QT=ea(function(n,r){if(Oa(r)||mn(r)){xn(r,We(r),n);return}for(var u in r)Ie.call(r,u)&&Ia(n,u,r[u])}),_m=ea(function(n,r){xn(r,dn(r),n)}),$t=ea(function(n,r,u,o){xn(r,dn(r),n,o)}),ep=ea(function(n,r,u,o){xn(r,We(r),n,o)}),np=lr(ni);function rp(n,r){var u=Qr(n);return r==null?u:Ys(u,r)}var ap=_e(function(n,r){n=De(n);var u=-1,o=r.length,E=o>2?r[2]:a;for(E&&ln(r[0],r[1],E)&&(o=1);++u<o;)for(var c=r[u],p=dn(c),y=-1,b=p.length;++y<b;){var j=p[y],U=n[j];(U===a||Vn(U,zr[j])&&!Ie.call(n,j))&&(n[j]=c[j])}return n}),tp=_e(function(n){return n.push(a,Po),_n(fm,a,n)});function lp(n,r){return Is(n,se(r,3),qn)}function ip(n,r){return Is(n,se(r,3),ai)}function up(n,r){return n==null?n:ri(n,se(r,3),dn)}function sp(n,r){return n==null?n:Xs(n,se(r,3),dn)}function op(n,r){return n&&qn(n,se(r,3))}function mp(n,r){return n&&ai(n,se(r,3))}function dp(n){return n==null?[]:bt(n,We(n))}function Ep(n){return n==null?[]:bt(n,dn(n))}function wi(n,r,u){var o=n==null?a:Fr(n,r);return o===a?u:o}function vp(n,r){return n!=null&&wo(n,r,w_)}function Gi(n,r){return n!=null&&wo(n,r,G_)}var gp=Io(function(n,r,u){r!=null&&typeof r.toString!="function"&&(r=_t.call(r)),n[r]=u},Vi(En)),_p=Io(function(n,r,u){r!=null&&typeof r.toString!="function"&&(r=_t.call(r)),Ie.call(n,r)?n[r].push(u):n[r]=[u]},se),fp=_e(La);function We(n){return mn(n)?xs(n):ui(n)}function dn(n){return mn(n)?xs(n,!0):Y_(n)}function cp(n,r){var u={};return r=se(r,3),qn(n,function(o,E,c){ar(u,r(o,E,c),o)}),u}function Tp(n,r){var u={};return r=se(r,3),qn(n,function(o,E,c){ar(u,E,r(o,E,c))}),u}var pp=ea(function(n,r,u){Lt(n,r,u)}),fm=ea(function(n,r,u,o){Lt(n,r,u,o)}),hp=lr(function(n,r){var u={};if(n==null)return u;var o=!1;r=Ge(r,function(c){return c=Rr(c,n),o||(o=c.length>1),c}),xn(n,Ni(n),u),o&&(u=bn(u,T|R|h,gf));for(var E=r.length;E--;)vi(u,r[E]);return u});function Np(n,r){return cm(n,xt(se(r)))}var Rp=lr(function(n,r){return n==null?{}:J_(n,r)});function cm(n,r){if(n==null)return{};var u=Ge(Ni(n),function(o){return[o]});return r=se(r),uo(n,u,function(o,E){return r(o,E[0])})}function kp(n,r,u){r=Rr(r,n);var o=-1,E=r.length;for(E||(E=1,n=a);++o<E;){var c=n==null?a:n[Cn(r[o])];c===a&&(o=E,c=u),n=ur(c)?c.call(n):c}return n}function yp(n,r,u){return n==null?n:Ka(n,r,u)}function Ap(n,r,u,o){return o=typeof o=="function"?o:a,n==null?n:Ka(n,r,u,o)}var Tm=Do(We),pm=Do(dn);function Sp(n,r,u){var o=Ee(n),E=o||yr(n)||aa(n);if(r=se(r,4),u==null){var c=n&&n.constructor;E?u=o?new c:[]:Ve(n)?u=ur(c)?Qr(Tt(n)):{}:u={}}return(E?An:qn)(n,function(p,y,b){return r(u,p,y,b)}),u}function Ip(n,r){return n==null?!0:vi(n,r)}function bp(n,r,u){return n==null?n:vo(n,r,fi(u))}function Lp(n,r,u,o){return o=typeof o=="function"?o:a,n==null?n:vo(n,r,fi(u),o)}function ta(n){return n==null?[]:Jl(n,We(n))}function Dp(n){return n==null?[]:Jl(n,dn(n))}function Kp(n,r,u){return u===a&&(u=r,r=a),u!==a&&(u=Kn(u),u=u===u?u:0),r!==a&&(r=Kn(r),r=r===r?r:0),Or(Kn(n),r,u)}function Pp(n,r,u){return r=sr(r),u===a?(u=r,r=0):u=sr(u),n=Kn(n),B_(n,r,u)}function Op(n,r,u){if(u&&typeof u!="boolean"&&ln(n,r,u)&&(r=u=a),u===a&&(typeof r=="boolean"?(u=r,r=a):typeof n=="boolean"&&(u=n,n=a)),n===a&&r===a?(n=0,r=1):(n=sr(n),r===a?(r=n,n=0):r=sr(r)),n>r){var o=n;n=r,r=o}if(u||n%1||r%1){var E=Us();return rn(n+E*(r-n+mg("1e-"+((E+"").length-1))),r)}return mi(n,r)}var Fp=na(function(n,r,u){return r=r.toLowerCase(),n+(u?hm(r):r)});function hm(n){return Bi(Ae(n).toLowerCase())}function Nm(n){return n=Ae(n),n&&n.replace(wv,kg).replace(eg,"")}function wp(n,r,u){n=Ae(n),r=cn(r);var o=n.length;u=u===a?o:Or(ve(u),0,o);var E=u;return u-=r.length,u>=0&&n.slice(u,E)==r}function Gp(n){return n=Ae(n),n&&_v.test(n)?n.replace(Xu,yg):n}function Bp(n){return n=Ae(n),n&&Nv.test(n)?n.replace(Pl,"\\$&"):n}var Vp=na(function(n,r,u){return n+(u?"-":"")+r.toLowerCase()}),Mp=na(function(n,r,u){return n+(u?" ":"")+r.toLowerCase()}),Hp=yo("toLowerCase");function jp(n,r,u){n=Ae(n),r=ve(r);var o=r?Jr(n):0;if(!r||o>=r)return n;var E=(r-o)/2;return wt(Rt(E),u)+n+wt(Nt(E),u)}function Up(n,r,u){n=Ae(n),r=ve(r);var o=r?Jr(n):0;return r&&o<r?n+wt(r-o,u):n}function qp(n,r,u){n=Ae(n),r=ve(r);var o=r?Jr(n):0;return r&&o<r?wt(r-o,u)+n:n}function xp(n,r,u){return u||r==null?r=0:r&&(r=+r),zg(Ae(n).replace(Ol,""),r||0)}function Cp(n,r,u){return(u?ln(n,r,u):r===a)?r=1:r=ve(r),di(Ae(n),r)}function Yp(){var n=arguments,r=Ae(n[0]);return n.length<3?r:r.replace(n[1],n[2])}var $p=na(function(n,r,u){return n+(u?"_":"")+r.toLowerCase()});function Jp(n,r,u){return u&&typeof u!="number"&&ln(n,r,u)&&(r=u=a),u=u===a?ne:u>>>0,u?(n=Ae(n),n&&(typeof r=="string"||r!=null&&!Fi(r))&&(r=cn(r),!r&&$r(n))?kr(Gn(n),0,u):n.split(r,u)):[]}var Wp=na(function(n,r,u){return n+(u?" ":"")+Bi(r)});function zp(n,r,u){return n=Ae(n),u=u==null?0:Or(ve(u),0,n.length),r=cn(r),n.slice(u,u+r.length)==r}function Xp(n,r,u){var o=g.templateSettings;u&&ln(n,r,u)&&(r=a),n=Ae(n),r=$t({},r,o,Ko);var E=$t({},r.imports,o.imports,Ko),c=We(E),p=Jl(E,c),y,b,j=0,U=r.interpolate||it,Y="__p += '",ee=zl((r.escape||it).source+"|"+U.source+"|"+(U===Zu?Lv:it).source+"|"+(r.evaluate||it).source+"|$","g"),ie="//# sourceURL="+(Ie.call(r,"sourceURL")?(r.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++lg+"]")+`
`;n.replace(ee,function(me,ce,he,pn,un,hn){return he||(he=pn),Y+=n.slice(j,hn).replace(Gv,Ag),ce&&(y=!0,Y+=`' +
__e(`+ce+`) +
'`),un&&(b=!0,Y+=`';
`+un+`;
__p += '`),he&&(Y+=`' +
((__t = (`+he+`)) == null ? '' : __t) +
'`),j=hn+me.length,me}),Y+=`';
`;var oe=Ie.call(r,"variable")&&r.variable;if(!oe)Y=`with (obj) {
`+Y+`
}
`;else if(Iv.test(oe))throw new de(d);Y=(b?Y.replace(dv,""):Y).replace(Ev,"$1").replace(vv,"$1;"),Y="function("+(oe||"obj")+`) {
`+(oe?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(y?", __e = _.escape":"")+(b?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+Y+`return __p
}`;var ge=km(function(){return ke(c,ie+"return "+Y).apply(a,p)});if(ge.source=Y,Oi(ge))throw ge;return ge}function Zp(n){return Ae(n).toLowerCase()}function Qp(n){return Ae(n).toUpperCase()}function eh(n,r,u){if(n=Ae(n),n&&(u||r===a))return Ks(n);if(!n||!(r=cn(r)))return n;var o=Gn(n),E=Gn(r),c=Ps(o,E),p=Os(o,E)+1;return kr(o,c,p).join("")}function nh(n,r,u){if(n=Ae(n),n&&(u||r===a))return n.slice(0,ws(n)+1);if(!n||!(r=cn(r)))return n;var o=Gn(n),E=Os(o,Gn(r))+1;return kr(o,0,E).join("")}function rh(n,r,u){if(n=Ae(n),n&&(u||r===a))return n.replace(Ol,"");if(!n||!(r=cn(r)))return n;var o=Gn(n),E=Ps(o,Gn(r));return kr(o,E).join("")}function ah(n,r){var u=Z,o=X;if(Ve(r)){var E="separator"in r?r.separator:E;u="length"in r?ve(r.length):u,o="omission"in r?cn(r.omission):o}n=Ae(n);var c=n.length;if($r(n)){var p=Gn(n);c=p.length}if(u>=c)return n;var y=u-Jr(o);if(y<1)return o;var b=p?kr(p,0,y).join(""):n.slice(0,y);if(E===a)return b+o;if(p&&(y+=b.length-y),Fi(E)){if(n.slice(y).search(E)){var j,U=b;for(E.global||(E=zl(E.source,Ae(Qu.exec(E))+"g")),E.lastIndex=0;j=E.exec(U);)var Y=j.index;b=b.slice(0,Y===a?y:Y)}}else if(n.indexOf(cn(E),y)!=y){var ee=b.lastIndexOf(E);ee>-1&&(b=b.slice(0,ee))}return b+o}function th(n){return n=Ae(n),n&&gv.test(n)?n.replace(zu,Pg):n}var lh=na(function(n,r,u){return n+(u?" ":"")+r.toUpperCase()}),Bi=yo("toUpperCase");function Rm(n,r,u){return n=Ae(n),r=u?a:r,r===a?Ig(n)?wg(n):Tg(n):n.match(r)||[]}var km=_e(function(n,r){try{return _n(n,a,r)}catch(u){return Oi(u)?u:new de(u)}}),ih=lr(function(n,r){return An(r,function(u){u=Cn(u),ar(n,u,Ki(n[u],n))}),n});function uh(n){var r=n==null?0:n.length,u=se();return n=r?Ge(n,function(o){if(typeof o[1]!="function")throw new Sn(m);return[u(o[0]),o[1]]}):[],_e(function(o){for(var E=-1;++E<r;){var c=n[E];if(_n(c[0],this,o))return _n(c[1],this,o)}})}function sh(n){return P_(bn(n,T))}function Vi(n){return function(){return n}}function oh(n,r){return n==null||n!==n?r:n}var mh=So(),dh=So(!0);function En(n){return n}function Mi(n){return no(typeof n=="function"?n:bn(n,T))}function Eh(n){return ao(bn(n,T))}function vh(n,r){return to(n,bn(r,T))}var gh=_e(function(n,r){return function(u){return La(u,n,r)}}),_h=_e(function(n,r){return function(u){return La(n,u,r)}});function Hi(n,r,u){var o=We(r),E=bt(r,o);u==null&&!(Ve(r)&&(E.length||!o.length))&&(u=r,r=n,n=this,E=bt(r,We(r)));var c=!(Ve(u)&&"chain"in u)||!!u.chain,p=ur(n);return An(E,function(y){var b=r[y];n[y]=b,p&&(n.prototype[y]=function(){var j=this.__chain__;if(c||j){var U=n(this.__wrapped__),Y=U.__actions__=on(this.__actions__);return Y.push({func:b,args:arguments,thisArg:n}),U.__chain__=j,U}return b.apply(n,cr([this.value()],arguments))})}),n}function fh(){return en._===this&&(en._=jg),this}function ji(){}function ch(n){return n=ve(n),_e(function(r){return lo(r,n)})}var Th=Ti(Ge),ph=Ti(Ss),hh=Ti(ql);function ym(n){return Ai(n)?xl(Cn(n)):W_(n)}function Nh(n){return function(r){return n==null?a:Fr(n,r)}}var Rh=bo(),kh=bo(!0);function Ui(){return[]}function qi(){return!1}function yh(){return{}}function Ah(){return""}function Sh(){return!0}function Ih(n,r){if(n=ve(n),n<1||n>C)return[];var u=ne,o=rn(n,ne);r=se(r),n-=ne;for(var E=$l(o,r);++u<n;)r(u);return E}function bh(n){return Ee(n)?Ge(n,Cn):Tn(n)?[n]:on(xo(Ae(n)))}function Lh(n){var r=++Mg;return Ae(n)+r}var Dh=Ft(function(n,r){return n+r},0),Kh=pi("ceil"),Ph=Ft(function(n,r){return n/r},1),Oh=pi("floor");function Fh(n){return n&&n.length?It(n,En,ti):a}function wh(n,r){return n&&n.length?It(n,se(r,2),ti):a}function Gh(n){return Ls(n,En)}function Bh(n,r){return Ls(n,se(r,2))}function Vh(n){return n&&n.length?It(n,En,si):a}function Mh(n,r){return n&&n.length?It(n,se(r,2),si):a}var Hh=Ft(function(n,r){return n*r},1),jh=pi("round"),Uh=Ft(function(n,r){return n-r},0);function qh(n){return n&&n.length?Yl(n,En):0}function xh(n,r){return n&&n.length?Yl(n,se(r,2)):0}return g.after=ET,g.ary=nm,g.assign=QT,g.assignIn=_m,g.assignInWith=$t,g.assignWith=ep,g.at=np,g.before=rm,g.bind=Ki,g.bindAll=ih,g.bindKey=am,g.castArray=yT,g.chain=Zo,g.chunk=Of,g.compact=Ff,g.concat=wf,g.cond=uh,g.conforms=sh,g.constant=Vi,g.countBy=qc,g.create=rp,g.curry=tm,g.curryRight=lm,g.debounce=im,g.defaults=ap,g.defaultsDeep=tp,g.defer=vT,g.delay=gT,g.difference=Gf,g.differenceBy=Bf,g.differenceWith=Vf,g.drop=Mf,g.dropRight=Hf,g.dropRightWhile=jf,g.dropWhile=Uf,g.fill=qf,g.filter=Cc,g.flatMap=Jc,g.flatMapDeep=Wc,g.flatMapDepth=zc,g.flatten=Jo,g.flattenDeep=xf,g.flattenDepth=Cf,g.flip=_T,g.flow=mh,g.flowRight=dh,g.fromPairs=Yf,g.functions=dp,g.functionsIn=Ep,g.groupBy=Xc,g.initial=Jf,g.intersection=Wf,g.intersectionBy=zf,g.intersectionWith=Xf,g.invert=gp,g.invertBy=_p,g.invokeMap=Qc,g.iteratee=Mi,g.keyBy=eT,g.keys=We,g.keysIn=dn,g.map=jt,g.mapKeys=cp,g.mapValues=Tp,g.matches=Eh,g.matchesProperty=vh,g.memoize=qt,g.merge=pp,g.mergeWith=fm,g.method=gh,g.methodOf=_h,g.mixin=Hi,g.negate=xt,g.nthArg=ch,g.omit=hp,g.omitBy=Np,g.once=fT,g.orderBy=nT,g.over=Th,g.overArgs=cT,g.overEvery=ph,g.overSome=hh,g.partial=Pi,g.partialRight=um,g.partition=rT,g.pick=Rp,g.pickBy=cm,g.property=ym,g.propertyOf=Nh,g.pull=nc,g.pullAll=zo,g.pullAllBy=rc,g.pullAllWith=ac,g.pullAt=tc,g.range=Rh,g.rangeRight=kh,g.rearg=TT,g.reject=lT,g.remove=lc,g.rest=pT,g.reverse=Li,g.sampleSize=uT,g.set=yp,g.setWith=Ap,g.shuffle=sT,g.slice=ic,g.sortBy=dT,g.sortedUniq=vc,g.sortedUniqBy=gc,g.split=Jp,g.spread=hT,g.tail=_c,g.take=fc,g.takeRight=cc,g.takeRightWhile=Tc,g.takeWhile=pc,g.tap=Fc,g.throttle=NT,g.thru=Ht,g.toArray=Em,g.toPairs=Tm,g.toPairsIn=pm,g.toPath=bh,g.toPlainObject=gm,g.transform=Sp,g.unary=RT,g.union=hc,g.unionBy=Nc,g.unionWith=Rc,g.uniq=kc,g.uniqBy=yc,g.uniqWith=Ac,g.unset=Ip,g.unzip=Di,g.unzipWith=Xo,g.update=bp,g.updateWith=Lp,g.values=ta,g.valuesIn=Dp,g.without=Sc,g.words=Rm,g.wrap=kT,g.xor=Ic,g.xorBy=bc,g.xorWith=Lc,g.zip=Dc,g.zipObject=Kc,g.zipObjectDeep=Pc,g.zipWith=Oc,g.entries=Tm,g.entriesIn=pm,g.extend=_m,g.extendWith=$t,Hi(g,g),g.add=Dh,g.attempt=km,g.camelCase=Fp,g.capitalize=hm,g.ceil=Kh,g.clamp=Kp,g.clone=AT,g.cloneDeep=IT,g.cloneDeepWith=bT,g.cloneWith=ST,g.conformsTo=LT,g.deburr=Nm,g.defaultTo=oh,g.divide=Ph,g.endsWith=wp,g.eq=Vn,g.escape=Gp,g.escapeRegExp=Bp,g.every=xc,g.find=Yc,g.findIndex=Yo,g.findKey=lp,g.findLast=$c,g.findLastIndex=$o,g.findLastKey=ip,g.floor=Oh,g.forEach=Qo,g.forEachRight=em,g.forIn=up,g.forInRight=sp,g.forOwn=op,g.forOwnRight=mp,g.get=wi,g.gt=DT,g.gte=KT,g.has=vp,g.hasIn=Gi,g.head=Wo,g.identity=En,g.includes=Zc,g.indexOf=$f,g.inRange=Pp,g.invoke=fp,g.isArguments=Br,g.isArray=Ee,g.isArrayBuffer=PT,g.isArrayLike=mn,g.isArrayLikeObject=Ce,g.isBoolean=OT,g.isBuffer=yr,g.isDate=FT,g.isElement=wT,g.isEmpty=GT,g.isEqual=BT,g.isEqualWith=VT,g.isError=Oi,g.isFinite=MT,g.isFunction=ur,g.isInteger=sm,g.isLength=Ct,g.isMap=om,g.isMatch=HT,g.isMatchWith=jT,g.isNaN=UT,g.isNative=qT,g.isNil=CT,g.isNull=xT,g.isNumber=mm,g.isObject=Ve,g.isObjectLike=qe,g.isPlainObject=wa,g.isRegExp=Fi,g.isSafeInteger=YT,g.isSet=dm,g.isString=Yt,g.isSymbol=Tn,g.isTypedArray=aa,g.isUndefined=$T,g.isWeakMap=JT,g.isWeakSet=WT,g.join=Zf,g.kebabCase=Vp,g.last=Dn,g.lastIndexOf=Qf,g.lowerCase=Mp,g.lowerFirst=Hp,g.lt=zT,g.lte=XT,g.max=Fh,g.maxBy=wh,g.mean=Gh,g.meanBy=Bh,g.min=Vh,g.minBy=Mh,g.stubArray=Ui,g.stubFalse=qi,g.stubObject=yh,g.stubString=Ah,g.stubTrue=Sh,g.multiply=Hh,g.nth=ec,g.noConflict=fh,g.noop=ji,g.now=Ut,g.pad=jp,g.padEnd=Up,g.padStart=qp,g.parseInt=xp,g.random=Op,g.reduce=aT,g.reduceRight=tT,g.repeat=Cp,g.replace=Yp,g.result=kp,g.round=jh,g.runInContext=S,g.sample=iT,g.size=oT,g.snakeCase=$p,g.some=mT,g.sortedIndex=uc,g.sortedIndexBy=sc,g.sortedIndexOf=oc,g.sortedLastIndex=mc,g.sortedLastIndexBy=dc,g.sortedLastIndexOf=Ec,g.startCase=Wp,g.startsWith=zp,g.subtract=Uh,g.sum=qh,g.sumBy=xh,g.template=Xp,g.times=Ih,g.toFinite=sr,g.toInteger=ve,g.toLength=vm,g.toLower=Zp,g.toNumber=Kn,g.toSafeInteger=ZT,g.toString=Ae,g.toUpper=Qp,g.trim=eh,g.trimEnd=nh,g.trimStart=rh,g.truncate=ah,g.unescape=th,g.uniqueId=Lh,g.upperCase=lh,g.upperFirst=Bi,g.each=Qo,g.eachRight=em,g.first=Wo,Hi(g,(function(){var n={};return qn(g,function(r,u){Ie.call(g.prototype,u)||(n[u]=r)}),n})(),{chain:!1}),g.VERSION=t,An(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){g[n].placeholder=g}),An(["drop","take"],function(n,r){pe.prototype[n]=function(u){u=u===a?1:Je(ve(u),0);var o=this.__filtered__&&!r?new pe(this):this.clone();return o.__filtered__?o.__takeCount__=rn(u,o.__takeCount__):o.__views__.push({size:rn(u,ne),type:n+(o.__dir__<0?"Right":"")}),o},pe.prototype[n+"Right"]=function(u){return this.reverse()[n](u).reverse()}}),An(["filter","map","takeWhile"],function(n,r){var u=r+1,o=u==B||u==re;pe.prototype[n]=function(E){var c=this.clone();return c.__iteratees__.push({iteratee:se(E,3),type:u}),c.__filtered__=c.__filtered__||o,c}}),An(["head","last"],function(n,r){var u="take"+(r?"Right":"");pe.prototype[n]=function(){return this[u](1).value()[0]}}),An(["initial","tail"],function(n,r){var u="drop"+(r?"":"Right");pe.prototype[n]=function(){return this.__filtered__?new pe(this):this[u](1)}}),pe.prototype.compact=function(){return this.filter(En)},pe.prototype.find=function(n){return this.filter(n).head()},pe.prototype.findLast=function(n){return this.reverse().find(n)},pe.prototype.invokeMap=_e(function(n,r){return typeof n=="function"?new pe(this):this.map(function(u){return La(u,n,r)})}),pe.prototype.reject=function(n){return this.filter(xt(se(n)))},pe.prototype.slice=function(n,r){n=ve(n);var u=this;return u.__filtered__&&(n>0||r<0)?new pe(u):(n<0?u=u.takeRight(-n):n&&(u=u.drop(n)),r!==a&&(r=ve(r),u=r<0?u.dropRight(-r):u.take(r-n)),u)},pe.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},pe.prototype.toArray=function(){return this.take(ne)},qn(pe.prototype,function(n,r){var u=/^(?:filter|find|map|reject)|While$/.test(r),o=/^(?:head|last)$/.test(r),E=g[o?"take"+(r=="last"?"Right":""):r],c=o||/^find/.test(r);E&&(g.prototype[r]=function(){var p=this.__wrapped__,y=o?[1]:arguments,b=p instanceof pe,j=y[0],U=b||Ee(p),Y=function(ce){var he=E.apply(g,cr([ce],y));return o&&ee?he[0]:he};U&&u&&typeof j=="function"&&j.length!=1&&(b=U=!1);var ee=this.__chain__,ie=!!this.__actions__.length,oe=c&&!ee,ge=b&&!ie;if(!c&&U){p=ge?p:new pe(this);var me=n.apply(p,y);return me.__actions__.push({func:Ht,args:[Y],thisArg:a}),new In(me,ee)}return oe&&ge?n.apply(this,y):(me=this.thru(Y),oe?o?me.value()[0]:me.value():me)})}),An(["pop","push","shift","sort","splice","unshift"],function(n){var r=Et[n],u=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",o=/^(?:pop|shift)$/.test(n);g.prototype[n]=function(){var E=arguments;if(o&&!this.__chain__){var c=this.value();return r.apply(Ee(c)?c:[],E)}return this[u](function(p){return r.apply(Ee(p)?p:[],E)})}}),qn(pe.prototype,function(n,r){var u=g[r];if(u){var o=u.name+"";Ie.call(Zr,o)||(Zr[o]=[]),Zr[o].push({name:r,func:u})}}),Zr[Ot(a,A).name]=[{name:"wrapper",func:a}],pe.prototype.clone=a_,pe.prototype.reverse=t_,pe.prototype.value=l_,g.prototype.at=wc,g.prototype.chain=Gc,g.prototype.commit=Bc,g.prototype.next=Vc,g.prototype.plant=Hc,g.prototype.reverse=jc,g.prototype.toJSON=g.prototype.valueOf=g.prototype.value=Uc,g.prototype.first=g.prototype.head,Ra&&(g.prototype[Ra]=Mc),g}),Wr=Gg();Lr?((Lr.exports=Wr)._=Wr,Ml._=Wr):en._=Wr}).call(oy)})(qa,qa.exports)),qa.exports}my();Hn(nt);const DE=K.forwardRef((e,l)=>M.jsx(ua,{gap:"space-8",style:{display:"flex"},...e,ref:l}));DE.displayName="FaktaGruppe";DE.__docgenInfo={description:"",methods:[],displayName:"FaktaGruppe"};var au={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var fd;function dy(){return fd||(fd=1,(function(e){(function(){var l={}.hasOwnProperty;function a(){for(var s="",m=0;m<arguments.length;m++){var d=arguments[m];d&&(s=i(s,t.call(this,d)))}return s}function t(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return a.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var m="";for(var d in s)l.call(s,d)&&s[d]&&(m=i(m,this&&this[d]||d));return m}function i(s,m){return m?s?s+" "+m:s+m:s}e.exports?(a.default=a,e.exports=a):window.classNames=a})()})(au)),au.exports}var Ey=dy();const vy=Yd(Ey),gy="_boks_nm7fe_1",_y="_harBorderLeft_nm7fe_8",fy="_harBorderTop_nm7fe_12",cy={boks:gy,harBorderLeft:_y,harBorderTop:fy};vy.bind(cy);function Ty(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var cd={exports:{}},Ha={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Td;function py(){if(Td)return Ha;Td=1;var e=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function a(t,i,s){var m=null;if(s!==void 0&&(m=""+s),i.key!==void 0&&(m=""+i.key),"key"in i){s={};for(var d in i)d!=="key"&&(s[d]=i[d])}else s=i;return i=s.ref,{$$typeof:e,type:t,key:m,ref:i!==void 0?i:null,props:s}}return Ha.Fragment=l,Ha.jsx=a,Ha.jsxs=a,Ha}var pd;function hy(){return pd||(pd=1,cd.exports=py()),cd.exports}var dr=hy();const Ny="_autocompleteSuggestion__substring_1s9ip_1",Ry="_autocompleteSuggestion__inner_1s9ip_4",ja={autocompleteSuggestion__substring:Ny,autocompleteSuggestion__inner:Ry,"autocompleteSuggestion--active":"_autocompleteSuggestion--active_1s9ip_12"};class ky extends F.Component{constructor(l){super(l),this.state={value:l.value},this.onClick=this.onClick.bind(this),this.onMouseMove=this.onMouseMove.bind(this)}onClick(){const{onClick:l}=this.props,{value:a}=this.state;l(a)}onMouseMove(){const{setSuggestionIndex:l,index:a}=this.props;l(a)}render(){const{match:l,active:a,avoidBlur:t,id:i}=this.props,{value:s}=this.state.value,m=s.toLowerCase().startsWith(l.toLowerCase());return dr.jsx("li",{id:i,role:"option","aria-selected":a,onClick:this.onClick,onMouseMove:this.onMouseMove,onFocus:t,onMouseDown:t,onKeyDown:t,className:"autocompleteSuggestion typo-normal",children:m?dr.jsxs("span",{className:`${ja.autocompleteSuggestion__inner} ${a?ja["autocompleteSuggestion--active"]:""}`,children:[s.substring(0,l.length),dr.jsx("span",{className:ja.autocompleteSuggestion__substring,children:s.substring(l.length)})]}):dr.jsx("span",{className:`${ja.autocompleteSuggestion__inner} ${a?ja["autocompleteSuggestion--active"]:""}`,children:s})})}}const yy="_autocomplete_cj8jr_1",Ay="_autocomplete__suggestions_cj8jr_27",tu={autocomplete:yy,autocomplete__suggestions:Ay,"autocomplete__suggestions--hidden":"_autocomplete__suggestions--hidden_cj8jr_31"};class BS extends F.Component{input;inputRef;constructor(l){super(l),this.state={activeSuggestionIndex:-1,hasFocus:!1,shouldShowSuggestions:!0,setAriaActiveDescendant:!1,shouldBlur:!0,blurDelay:null},this.inputRef=a=>{this.input=a},this.onChange=this.onChange.bind(this),this.onBlur=this.onBlur.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.onFocus=this.onFocus.bind(this),this.setValue=this.setValue.bind(this),this.setSuggestionIndex=this.setSuggestionIndex.bind(this),this.avoidBlur=this.avoidBlur.bind(this),this.clearBlurDelay=this.clearBlurDelay.bind(this),this.onSearchButtonClick=this.onSearchButtonClick.bind(this)}componentWillUnmount(){const{blurDelay:l}=this.state;l&&(clearTimeout(l),this.setState({blurDelay:null}))}onChange(l){const{onChange:a}=this.props;this.setState({activeSuggestionIndex:-1,shouldShowSuggestions:!0}),a(l)}onSearchButtonClick(l){const{onSearchButtonClick:a}=this.props;l.preventDefault(),a&&a()}onKeyDown(l){const{shouldShowSuggestions:a}=this.state;let{activeSuggestionIndex:t}=this.state;const{suggestions:i}=this.props,s=t>-1;switch(this.setState({setAriaActiveDescendant:l.keyCode===38||l.keyCode===40}),l.keyCode){case 9:s&&a&&this.setValue(i[t]);break;case 13:s&&a?(l.preventDefault(),this.setValue(i[t])):a&&i.length===1?this.setValue(i[0]):this.setState({shouldShowSuggestions:!1});break;case 27:a&&i.length>0&&(l.preventDefault(),this.setState({shouldShowSuggestions:!1}));break;case 38:a&&(l.preventDefault(),t=t-1===-2?-1:t-1,this.setState({activeSuggestionIndex:t}));break;case 40:a&&(l.preventDefault(),t=t+1===i.length?i.length-1:t+1,this.setState({activeSuggestionIndex:t}));break}}onFocus(){this.setState({hasFocus:!0,activeSuggestionIndex:-1})}onBlur(){const l=setTimeout(()=>{const{shouldBlur:t}=this.state;t&&this.setState({hasFocus:!1})},10);this.setState({blurDelay:l});const{onBlur:a}=this.props;a&&a()}setSuggestionIndex(l){this.setState({activeSuggestionIndex:l}),this.clearBlurDelay()}setValue(l){this.setState({shouldShowSuggestions:!1,activeSuggestionIndex:-1},()=>{this.inputRef.focus()}),this.clearBlurDelay();const{onSelect:a}=this.props;a(l)}avoidBlur(){this.setState({shouldBlur:!1})}clearBlurDelay(){const{blurDelay:l}=this.state;l&&(clearTimeout(l),this.setState({blurDelay:null})),this.setState({shouldBlur:!0})}render(){const{suggestions:l,id:a,ariaLabel:t,placeholder:i,value:s,name:m,shouldFocusOnMount:d,isLoading:v}=this.props,{activeSuggestionIndex:_,setAriaActiveDescendant:f,hasFocus:T,shouldShowSuggestions:R}=this.state,h=T&&R&&l.length>0,L=f&&_>-1?`${a}-item-${_}`:void 0;return dr.jsxs("div",{className:`${tu.autocomplete} autocomplete`,"aria-expanded":h,"aria-owns":`${a}-suggestions`,"aria-haspopup":"listbox",children:[dr.jsx(Tu,{variant:"primary",id:a,name:m,"aria-label":t,"aria-autocomplete":"list","aria-controls":`${a}-suggestions`,"aria-activedescendant":L,placeholder:i,value:s,autoComplete:"off",onChange:this.onChange,onBlur:this.onBlur,onKeyDown:this.onKeyDown,onFocus:this.onFocus,ref:k=>{this.inputRef=k},className:"typo-normal",autoFocus:d,label:t,hideLabel:!0,children:dr.jsx(Tu.Button,{loading:v,onClick:this.onSearchButtonClick})}),dr.jsx("ul",{id:`${a}-suggestions`,role:"listbox",className:h?tu.autocomplete__suggestions:tu["autocomplete__suggestions--hidden"],children:h&&l.map((k,N)=>dr.jsx(ky,{id:`${a}-item-${N}`,index:N,value:k,match:s,active:N===_,onClick:this.setValue,setSuggestionIndex:this.setSuggestionIndex,avoidBlur:this.avoidBlur},k.key))})]})}}var hu=function(e,l){return hu=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,t){a.__proto__=t}||function(a,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(a[i]=t[i])},hu(e,l)};function jn(e,l){if(typeof l!="function"&&l!==null)throw new TypeError("Class extends value "+String(l)+" is not a constructor or null");hu(e,l);function a(){this.constructor=e}e.prototype=l===null?Object.create(l):(a.prototype=l.prototype,new a)}var le=function(){return le=Object.assign||function(e){for(var l,a=1,t=arguments.length;a<t;a++){l=arguments[a];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e},le.apply(this,arguments)};function hl(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)l.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]]);return a}function Jn(e,l,a){if(arguments.length===2)for(var t=0,i=l.length,s;t<i;t++)(s||!(t in l))&&(s||(s=Array.prototype.slice.call(l,0,t)),s[t]=l[t]);return e.concat(s||Array.prototype.slice.call(l))}function Yn(e,l){var a=l&&l.cache?l.cache:Py,t=l&&l.serializer?l.serializer:Dy,i=l&&l.strategy?l.strategy:by;return i(e,{cache:a,serializer:t})}function Sy(e){return e==null||typeof e=="number"||typeof e=="boolean"}function Iy(e,l,a,t){var i=Sy(t)?t:a(t),s=l.get(i);return typeof s>"u"&&(s=e.call(this,t),l.set(i,s)),s}function KE(e,l,a){var t=Array.prototype.slice.call(arguments,3),i=a(t),s=l.get(i);return typeof s>"u"&&(s=e.apply(this,t),l.set(i,s)),s}function PE(e,l,a,t,i){return a.bind(l,e,t,i)}function by(e,l){var a=e.length===1?Iy:KE;return PE(e,this,a,l.cache.create(),l.serializer)}function Ly(e,l){return PE(e,this,KE,l.cache.create(),l.serializer)}var Dy=function(){return JSON.stringify(arguments)},Ky=(function(){function e(){this.cache=Object.create(null)}return e.prototype.get=function(l){return this.cache[l]},e.prototype.set=function(l,a){this.cache[l]=a},e})(),Py={create:function(){return new Ky}},$n={variadic:Ly},Ne;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(Ne||(Ne={}));var Fe;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(Fe||(Fe={}));var da;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(da||(da={}));function hd(e){return e.type===Fe.literal}function Oy(e){return e.type===Fe.argument}function OE(e){return e.type===Fe.number}function FE(e){return e.type===Fe.date}function wE(e){return e.type===Fe.time}function GE(e){return e.type===Fe.select}function BE(e){return e.type===Fe.plural}function Fy(e){return e.type===Fe.pound}function VE(e){return e.type===Fe.tag}function ME(e){return!!(e&&typeof e=="object"&&e.type===da.number)}function Nu(e){return!!(e&&typeof e=="object"&&e.type===da.dateTime)}var HE=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,wy=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function Gy(e){var l={};return e.replace(wy,function(a){var t=a.length;switch(a[0]){case"G":l.era=t===4?"long":t===5?"narrow":"short";break;case"y":l.year=t===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":l.month=["numeric","2-digit","short","long","narrow"][t-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":l.day=["numeric","2-digit"][t-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":l.weekday=t===4?"long":t===5?"narrow":"short";break;case"e":if(t<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");l.weekday=["short","long","narrow","short"][t-4];break;case"c":if(t<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");l.weekday=["short","long","narrow","short"][t-4];break;case"a":l.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":l.hourCycle="h12",l.hour=["numeric","2-digit"][t-1];break;case"H":l.hourCycle="h23",l.hour=["numeric","2-digit"][t-1];break;case"K":l.hourCycle="h11",l.hour=["numeric","2-digit"][t-1];break;case"k":l.hourCycle="h24",l.hour=["numeric","2-digit"][t-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":l.minute=["numeric","2-digit"][t-1];break;case"s":l.second=["numeric","2-digit"][t-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":l.timeZoneName=t<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),l}var By=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function Vy(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var l=e.split(By).filter(function(R){return R.length>0}),a=[],t=0,i=l;t<i.length;t++){var s=i[t],m=s.split("/");if(m.length===0)throw new Error("Invalid number skeleton");for(var d=m[0],v=m.slice(1),_=0,f=v;_<f.length;_++){var T=f[_];if(T.length===0)throw new Error("Invalid number skeleton")}a.push({stem:d,options:v})}return a}function My(e){return e.replace(/^(.*?)-/,"")}var Nd=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,jE=/^(@+)?(\+|#+)?[rs]?$/g,Hy=/(\*)(0+)|(#+)(0+)|(0+)/g,UE=/^(0+)$/;function Rd(e){var l={};return e[e.length-1]==="r"?l.roundingPriority="morePrecision":e[e.length-1]==="s"&&(l.roundingPriority="lessPrecision"),e.replace(jE,function(a,t,i){return typeof i!="string"?(l.minimumSignificantDigits=t.length,l.maximumSignificantDigits=t.length):i==="+"?l.minimumSignificantDigits=t.length:t[0]==="#"?l.maximumSignificantDigits=t.length:(l.minimumSignificantDigits=t.length,l.maximumSignificantDigits=t.length+(typeof i=="string"?i.length:0)),""}),l}function qE(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function jy(e){var l;if(e[0]==="E"&&e[1]==="E"?(l={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(l={notation:"scientific"},e=e.slice(1)),l){var a=e.slice(0,2);if(a==="+!"?(l.signDisplay="always",e=e.slice(2)):a==="+?"&&(l.signDisplay="exceptZero",e=e.slice(2)),!UE.test(e))throw new Error("Malformed concise eng/scientific notation");l.minimumIntegerDigits=e.length}return l}function kd(e){var l={},a=qE(e);return a||l}function Uy(e){for(var l={},a=0,t=e;a<t.length;a++){var i=t[a];switch(i.stem){case"percent":case"%":l.style="percent";continue;case"%x100":l.style="percent",l.scale=100;continue;case"currency":l.style="currency",l.currency=i.options[0];continue;case"group-off":case",_":l.useGrouping=!1;continue;case"precision-integer":case".":l.maximumFractionDigits=0;continue;case"measure-unit":case"unit":l.style="unit",l.unit=My(i.options[0]);continue;case"compact-short":case"K":l.notation="compact",l.compactDisplay="short";continue;case"compact-long":case"KK":l.notation="compact",l.compactDisplay="long";continue;case"scientific":l=le(le(le({},l),{notation:"scientific"}),i.options.reduce(function(v,_){return le(le({},v),kd(_))},{}));continue;case"engineering":l=le(le(le({},l),{notation:"engineering"}),i.options.reduce(function(v,_){return le(le({},v),kd(_))},{}));continue;case"notation-simple":l.notation="standard";continue;case"unit-width-narrow":l.currencyDisplay="narrowSymbol",l.unitDisplay="narrow";continue;case"unit-width-short":l.currencyDisplay="code",l.unitDisplay="short";continue;case"unit-width-full-name":l.currencyDisplay="name",l.unitDisplay="long";continue;case"unit-width-iso-code":l.currencyDisplay="symbol";continue;case"scale":l.scale=parseFloat(i.options[0]);continue;case"rounding-mode-floor":l.roundingMode="floor";continue;case"rounding-mode-ceiling":l.roundingMode="ceil";continue;case"rounding-mode-down":l.roundingMode="trunc";continue;case"rounding-mode-up":l.roundingMode="expand";continue;case"rounding-mode-half-even":l.roundingMode="halfEven";continue;case"rounding-mode-half-down":l.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":l.roundingMode="halfExpand";continue;case"integer-width":if(i.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");i.options[0].replace(Hy,function(v,_,f,T,R,h){if(_)l.minimumIntegerDigits=f.length;else{if(T&&R)throw new Error("We currently do not support maximum integer digits");if(h)throw new Error("We currently do not support exact integer digits")}return""});continue}if(UE.test(i.stem)){l.minimumIntegerDigits=i.stem.length;continue}if(Nd.test(i.stem)){if(i.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");i.stem.replace(Nd,function(v,_,f,T,R,h){return f==="*"?l.minimumFractionDigits=_.length:T&&T[0]==="#"?l.maximumFractionDigits=T.length:R&&h?(l.minimumFractionDigits=R.length,l.maximumFractionDigits=R.length+h.length):(l.minimumFractionDigits=_.length,l.maximumFractionDigits=_.length),""});var s=i.options[0];s==="w"?l=le(le({},l),{trailingZeroDisplay:"stripIfInteger"}):s&&(l=le(le({},l),Rd(s)));continue}if(jE.test(i.stem)){l=le(le({},l),Rd(i.stem));continue}var m=qE(i.stem);m&&(l=le(le({},l),m));var d=jy(i.stem);d&&(l=le(le({},l),d))}return l}var Xt={"001":["H","h"],419:["h","H","hB","hb"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["h","H","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["h","H","hB","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["h","H","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["h","H","hB","hb"],CU:["h","H","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["h","H","hB","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["h","H","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["h","H","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["h","H","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["h","H","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["h","H","hB","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["h","H","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["h","H","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["h","H","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"en-HK":["h","hb","H","hB"],"en-IL":["H","h","hb","hB"],"en-MY":["h","hb","H","hB"],"es-BR":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function qy(e,l){for(var a="",t=0;t<e.length;t++){var i=e.charAt(t);if(i==="j"){for(var s=0;t+1<e.length&&e.charAt(t+1)===i;)s++,t++;var m=1+(s&1),d=s<2?1:3+(s>>1),v="a",_=xy(l);for((_=="H"||_=="k")&&(d=0);d-- >0;)a+=v;for(;m-- >0;)a=_+a}else i==="J"?a+="H":a+=i}return a}function xy(e){var l=e.hourCycle;if(l===void 0&&e.hourCycles&&e.hourCycles.length&&(l=e.hourCycles[0]),l)switch(l){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var a=e.language,t;a!=="root"&&(t=e.maximize().region);var i=Xt[t||""]||Xt[a||""]||Xt["".concat(a,"-001")]||Xt["001"];return i[0]}var lu,Cy=new RegExp("^".concat(HE.source,"*")),Yy=new RegExp("".concat(HE.source,"*$"));function Re(e,l){return{start:e,end:l}}var $y=!!String.prototype.startsWith&&"_a".startsWith("a",1),Jy=!!String.fromCodePoint,Wy=!!Object.fromEntries,zy=!!String.prototype.codePointAt,Xy=!!String.prototype.trimStart,Zy=!!String.prototype.trimEnd,Qy=!!Number.isSafeInteger,eA=Qy?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},Ru=!0;try{var nA=CE("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Ru=((lu=nA.exec("a"))===null||lu===void 0?void 0:lu[0])==="a"}catch{Ru=!1}var yd=$y?(function(e,l,a){return e.startsWith(l,a)}):(function(e,l,a){return e.slice(a,a+l.length)===l}),ku=Jy?String.fromCodePoint:(function(){for(var e=[],l=0;l<arguments.length;l++)e[l]=arguments[l];for(var a="",t=e.length,i=0,s;t>i;){if(s=e[i++],s>1114111)throw RangeError(s+" is not a valid code point");a+=s<65536?String.fromCharCode(s):String.fromCharCode(((s-=65536)>>10)+55296,s%1024+56320)}return a}),Ad=Wy?Object.fromEntries:(function(e){for(var l={},a=0,t=e;a<t.length;a++){var i=t[a],s=i[0],m=i[1];l[s]=m}return l}),xE=zy?(function(e,l){return e.codePointAt(l)}):(function(e,l){var a=e.length;if(!(l<0||l>=a)){var t=e.charCodeAt(l),i;return t<55296||t>56319||l+1===a||(i=e.charCodeAt(l+1))<56320||i>57343?t:(t-55296<<10)+(i-56320)+65536}}),rA=Xy?(function(e){return e.trimStart()}):(function(e){return e.replace(Cy,"")}),aA=Zy?(function(e){return e.trimEnd()}):(function(e){return e.replace(Yy,"")});function CE(e,l){return new RegExp(e,l)}var yu;if(Ru){var Sd=CE("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");yu=function(e,l){var a;Sd.lastIndex=l;var t=Sd.exec(e);return(a=t[1])!==null&&a!==void 0?a:""}}else yu=function(e,l){for(var a=[];;){var t=xE(e,l);if(t===void 0||YE(t)||uA(t))break;a.push(t),l+=t>=65536?2:1}return ku.apply(void 0,a)};var tA=(function(){function e(l,a){a===void 0&&(a={}),this.message=l,this.position={offset:0,line:1,column:1},this.ignoreTag=!!a.ignoreTag,this.locale=a.locale,this.requiresOtherClause=!!a.requiresOtherClause,this.shouldParseSkeletons=!!a.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(l,a,t){for(var i=[];!this.isEOF();){var s=this.char();if(s===123){var m=this.parseArgument(l,t);if(m.err)return m;i.push(m.val)}else{if(s===125&&l>0)break;if(s===35&&(a==="plural"||a==="selectordinal")){var d=this.clonePosition();this.bump(),i.push({type:Fe.pound,location:Re(d,this.clonePosition())})}else if(s===60&&!this.ignoreTag&&this.peek()===47){if(t)break;return this.error(Ne.UNMATCHED_CLOSING_TAG,Re(this.clonePosition(),this.clonePosition()))}else if(s===60&&!this.ignoreTag&&Au(this.peek()||0)){var m=this.parseTag(l,a);if(m.err)return m;i.push(m.val)}else{var m=this.parseLiteral(l,a);if(m.err)return m;i.push(m.val)}}}return{val:i,err:null}},e.prototype.parseTag=function(l,a){var t=this.clonePosition();this.bump();var i=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:Fe.literal,value:"<".concat(i,"/>"),location:Re(t,this.clonePosition())},err:null};if(this.bumpIf(">")){var s=this.parseMessage(l+1,a,!0);if(s.err)return s;var m=s.val,d=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!Au(this.char()))return this.error(Ne.INVALID_TAG,Re(d,this.clonePosition()));var v=this.clonePosition(),_=this.parseTagName();return i!==_?this.error(Ne.UNMATCHED_CLOSING_TAG,Re(v,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:Fe.tag,value:i,children:m,location:Re(t,this.clonePosition())},err:null}:this.error(Ne.INVALID_TAG,Re(d,this.clonePosition())))}else return this.error(Ne.UNCLOSED_TAG,Re(t,this.clonePosition()))}else return this.error(Ne.INVALID_TAG,Re(t,this.clonePosition()))},e.prototype.parseTagName=function(){var l=this.offset();for(this.bump();!this.isEOF()&&iA(this.char());)this.bump();return this.message.slice(l,this.offset())},e.prototype.parseLiteral=function(l,a){for(var t=this.clonePosition(),i="";;){var s=this.tryParseQuote(a);if(s){i+=s;continue}var m=this.tryParseUnquoted(l,a);if(m){i+=m;continue}var d=this.tryParseLeftAngleBracket();if(d){i+=d;continue}break}var v=Re(t,this.clonePosition());return{val:{type:Fe.literal,value:i,location:v},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!lA(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(l){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(l==="plural"||l==="selectordinal")break;return null;default:return null}this.bump();var a=[this.char()];for(this.bump();!this.isEOF();){var t=this.char();if(t===39)if(this.peek()===39)a.push(39),this.bump();else{this.bump();break}else a.push(t);this.bump()}return ku.apply(void 0,a)},e.prototype.tryParseUnquoted=function(l,a){if(this.isEOF())return null;var t=this.char();return t===60||t===123||t===35&&(a==="plural"||a==="selectordinal")||t===125&&l>0?null:(this.bump(),ku(t))},e.prototype.parseArgument=function(l,a){var t=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(Ne.EXPECT_ARGUMENT_CLOSING_BRACE,Re(t,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(Ne.EMPTY_ARGUMENT,Re(t,this.clonePosition()));var i=this.parseIdentifierIfPossible().value;if(!i)return this.error(Ne.MALFORMED_ARGUMENT,Re(t,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(Ne.EXPECT_ARGUMENT_CLOSING_BRACE,Re(t,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:Fe.argument,value:i,location:Re(t,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(Ne.EXPECT_ARGUMENT_CLOSING_BRACE,Re(t,this.clonePosition())):this.parseArgumentOptions(l,a,i,t);default:return this.error(Ne.MALFORMED_ARGUMENT,Re(t,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var l=this.clonePosition(),a=this.offset(),t=yu(this.message,a),i=a+t.length;this.bumpTo(i);var s=this.clonePosition(),m=Re(l,s);return{value:t,location:m}},e.prototype.parseArgumentOptions=function(l,a,t,i){var s,m=this.clonePosition(),d=this.parseIdentifierIfPossible().value,v=this.clonePosition();switch(d){case"":return this.error(Ne.EXPECT_ARGUMENT_TYPE,Re(m,v));case"number":case"date":case"time":{this.bumpSpace();var _=null;if(this.bumpIf(",")){this.bumpSpace();var f=this.clonePosition(),T=this.parseSimpleArgStyleIfPossible();if(T.err)return T;var R=aA(T.val);if(R.length===0)return this.error(Ne.EXPECT_ARGUMENT_STYLE,Re(this.clonePosition(),this.clonePosition()));var h=Re(f,this.clonePosition());_={style:R,styleLocation:h}}var L=this.tryParseArgumentClose(i);if(L.err)return L;var k=Re(i,this.clonePosition());if(_&&yd(_?.style,"::",0)){var N=rA(_.style.slice(2));if(d==="number"){var T=this.parseNumberSkeletonFromString(N,_.styleLocation);return T.err?T:{val:{type:Fe.number,value:t,location:k,style:T.val},err:null}}else{if(N.length===0)return this.error(Ne.EXPECT_DATE_TIME_SKELETON,k);var A=N;this.locale&&(A=qy(N,this.locale));var R={type:da.dateTime,pattern:A,location:_.styleLocation,parsedOptions:this.shouldParseSkeletons?Gy(A):{}},P=d==="date"?Fe.date:Fe.time;return{val:{type:P,value:t,location:k,style:R},err:null}}}return{val:{type:d==="number"?Fe.number:d==="date"?Fe.date:Fe.time,value:t,location:k,style:(s=_?.style)!==null&&s!==void 0?s:null},err:null}}case"plural":case"selectordinal":case"select":{var I=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(Ne.EXPECT_SELECT_ARGUMENT_OPTIONS,Re(I,le({},I)));this.bumpSpace();var x=this.parseIdentifierIfPossible(),D=0;if(d!=="select"&&x.value==="offset"){if(!this.bumpIf(":"))return this.error(Ne.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Re(this.clonePosition(),this.clonePosition()));this.bumpSpace();var T=this.tryParseDecimalInteger(Ne.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Ne.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(T.err)return T;this.bumpSpace(),x=this.parseIdentifierIfPossible(),D=T.val}var q=this.tryParsePluralOrSelectOptions(l,d,a,x);if(q.err)return q;var L=this.tryParseArgumentClose(i);if(L.err)return L;var w=Re(i,this.clonePosition());return d==="select"?{val:{type:Fe.select,value:t,options:Ad(q.val),location:w},err:null}:{val:{type:Fe.plural,value:t,options:Ad(q.val),offset:D,pluralType:d==="plural"?"cardinal":"ordinal",location:w},err:null}}default:return this.error(Ne.INVALID_ARGUMENT_TYPE,Re(m,v))}},e.prototype.tryParseArgumentClose=function(l){return this.isEOF()||this.char()!==125?this.error(Ne.EXPECT_ARGUMENT_CLOSING_BRACE,Re(l,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var l=0,a=this.clonePosition();!this.isEOF();){var t=this.char();switch(t){case 39:{this.bump();var i=this.clonePosition();if(!this.bumpUntil("'"))return this.error(Ne.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,Re(i,this.clonePosition()));this.bump();break}case 123:{l+=1,this.bump();break}case 125:{if(l>0)l-=1;else return{val:this.message.slice(a.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(a.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(l,a){var t=[];try{t=Vy(l)}catch{return this.error(Ne.INVALID_NUMBER_SKELETON,a)}return{val:{type:da.number,tokens:t,location:a,parsedOptions:this.shouldParseSkeletons?Uy(t):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(l,a,t,i){for(var s,m=!1,d=[],v=new Set,_=i.value,f=i.location;;){if(_.length===0){var T=this.clonePosition();if(a!=="select"&&this.bumpIf("=")){var R=this.tryParseDecimalInteger(Ne.EXPECT_PLURAL_ARGUMENT_SELECTOR,Ne.INVALID_PLURAL_ARGUMENT_SELECTOR);if(R.err)return R;f=Re(T,this.clonePosition()),_=this.message.slice(T.offset,this.offset())}else break}if(v.has(_))return this.error(a==="select"?Ne.DUPLICATE_SELECT_ARGUMENT_SELECTOR:Ne.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,f);_==="other"&&(m=!0),this.bumpSpace();var h=this.clonePosition();if(!this.bumpIf("{"))return this.error(a==="select"?Ne.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:Ne.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,Re(this.clonePosition(),this.clonePosition()));var L=this.parseMessage(l+1,a,t);if(L.err)return L;var k=this.tryParseArgumentClose(h);if(k.err)return k;d.push([_,{value:L.val,location:Re(h,this.clonePosition())}]),v.add(_),this.bumpSpace(),s=this.parseIdentifierIfPossible(),_=s.value,f=s.location}return d.length===0?this.error(a==="select"?Ne.EXPECT_SELECT_ARGUMENT_SELECTOR:Ne.EXPECT_PLURAL_ARGUMENT_SELECTOR,Re(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!m?this.error(Ne.MISSING_OTHER_CLAUSE,Re(this.clonePosition(),this.clonePosition())):{val:d,err:null}},e.prototype.tryParseDecimalInteger=function(l,a){var t=1,i=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(t=-1);for(var s=!1,m=0;!this.isEOF();){var d=this.char();if(d>=48&&d<=57)s=!0,m=m*10+(d-48),this.bump();else break}var v=Re(i,this.clonePosition());return s?(m*=t,eA(m)?{val:m,err:null}:this.error(a,v)):this.error(l,v)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var l=this.position.offset;if(l>=this.message.length)throw Error("out of bound");var a=xE(this.message,l);if(a===void 0)throw Error("Offset ".concat(l," is at invalid UTF-16 code unit boundary"));return a},e.prototype.error=function(l,a){return{val:null,err:{kind:l,message:this.message,location:a}}},e.prototype.bump=function(){if(!this.isEOF()){var l=this.char();l===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=l<65536?1:2)}},e.prototype.bumpIf=function(l){if(yd(this.message,l,this.offset())){for(var a=0;a<l.length;a++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(l){var a=this.offset(),t=this.message.indexOf(l,a);return t>=0?(this.bumpTo(t),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(l){if(this.offset()>l)throw Error("targetOffset ".concat(l," must be greater than or equal to the current offset ").concat(this.offset()));for(l=Math.min(l,this.message.length);;){var a=this.offset();if(a===l)break;if(a>l)throw Error("targetOffset ".concat(l," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&YE(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var l=this.char(),a=this.offset(),t=this.message.charCodeAt(a+(l>=65536?2:1));return t??null},e})();function Au(e){return e>=97&&e<=122||e>=65&&e<=90}function lA(e){return Au(e)||e===47}function iA(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function YE(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function uA(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function Su(e){e.forEach(function(l){if(delete l.location,GE(l)||BE(l))for(var a in l.options)delete l.options[a].location,Su(l.options[a].value);else OE(l)&&ME(l.style)||(FE(l)||wE(l))&&Nu(l.style)?delete l.style.location:VE(l)&&Su(l.children)})}function sA(e,l){l===void 0&&(l={}),l=le({shouldParseSkeletons:!0,requiresOtherClause:!0},l);var a=new tA(e,l).parse();if(a.err){var t=SyntaxError(Ne[a.err.kind]);throw t.location=a.err.location,t.originalMessage=a.err.message,t}return l?.captureLocation||Su(a.val),a.val}var Xn;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(Xn||(Xn={}));var br=(function(e){jn(l,e);function l(a,t,i){var s=e.call(this,a)||this;return s.code=t,s.originalMessage=i,s}return l.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},l})(Error),Id=(function(e){jn(l,e);function l(a,t,i,s){return e.call(this,'Invalid values for "'.concat(a,'": "').concat(t,'". Options are "').concat(Object.keys(i).join('", "'),'"'),Xn.INVALID_VALUE,s)||this}return l})(br),oA=(function(e){jn(l,e);function l(a,t,i){return e.call(this,'Value for "'.concat(a,'" must be of type ').concat(t),Xn.INVALID_VALUE,i)||this}return l})(br),mA=(function(e){jn(l,e);function l(a,t){return e.call(this,'The intl string context variable "'.concat(a,'" was not provided to the string "').concat(t,'"'),Xn.MISSING_VALUE,t)||this}return l})(br),sn;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(sn||(sn={}));function dA(e){return e.length<2?e:e.reduce(function(l,a){var t=l[l.length-1];return!t||t.type!==sn.literal||a.type!==sn.literal?l.push(a):t.value+=a.value,l},[])}function $E(e){return typeof e=="function"}function rl(e,l,a,t,i,s,m){if(e.length===1&&hd(e[0]))return[{type:sn.literal,value:e[0].value}];for(var d=[],v=0,_=e;v<_.length;v++){var f=_[v];if(hd(f)){d.push({type:sn.literal,value:f.value});continue}if(Fy(f)){typeof s=="number"&&d.push({type:sn.literal,value:a.getNumberFormat(l).format(s)});continue}var T=f.value;if(!(i&&T in i))throw new mA(T,m);var R=i[T];if(Oy(f)){(!R||typeof R=="string"||typeof R=="number")&&(R=typeof R=="string"||typeof R=="number"?String(R):""),d.push({type:typeof R=="string"?sn.literal:sn.object,value:R});continue}if(FE(f)){var h=typeof f.style=="string"?t.date[f.style]:Nu(f.style)?f.style.parsedOptions:void 0;d.push({type:sn.literal,value:a.getDateTimeFormat(l,h).format(R)});continue}if(wE(f)){var h=typeof f.style=="string"?t.time[f.style]:Nu(f.style)?f.style.parsedOptions:t.time.medium;d.push({type:sn.literal,value:a.getDateTimeFormat(l,h).format(R)});continue}if(OE(f)){var h=typeof f.style=="string"?t.number[f.style]:ME(f.style)?f.style.parsedOptions:void 0;h&&h.scale&&(R=R*(h.scale||1)),d.push({type:sn.literal,value:a.getNumberFormat(l,h).format(R)});continue}if(VE(f)){var L=f.children,k=f.value,N=i[k];if(!$E(N))throw new oA(k,"function",m);var A=rl(L,l,a,t,i,s),P=N(A.map(function(D){return D.value}));Array.isArray(P)||(P=[P]),d.push.apply(d,P.map(function(D){return{type:typeof D=="string"?sn.literal:sn.object,value:D}}))}if(GE(f)){var I=f.options[R]||f.options.other;if(!I)throw new Id(f.value,R,Object.keys(f.options),m);d.push.apply(d,rl(I.value,l,a,t,i));continue}if(BE(f)){var I=f.options["=".concat(R)];if(!I){if(!Intl.PluralRules)throw new br(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,Xn.MISSING_INTL_API,m);var x=a.getPluralRules(l,{type:f.pluralType}).select(R-(f.offset||0));I=f.options[x]||f.options.other}if(!I)throw new Id(f.value,R,Object.keys(f.options),m);d.push.apply(d,rl(I.value,l,a,t,i,R-(f.offset||0)));continue}}return dA(d)}function EA(e,l){return l?le(le(le({},e||{}),l||{}),Object.keys(e).reduce(function(a,t){return a[t]=le(le({},e[t]),l[t]||{}),a},{})):e}function vA(e,l){return l?Object.keys(e).reduce(function(a,t){return a[t]=EA(e[t],l[t]),a},le({},e)):e}function iu(e){return{create:function(){return{get:function(l){return e[l]},set:function(l,a){e[l]=a}}}}}function gA(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:Yn(function(){for(var l,a=[],t=0;t<arguments.length;t++)a[t]=arguments[t];return new((l=Intl.NumberFormat).bind.apply(l,Jn([void 0],a,!1)))},{cache:iu(e.number),strategy:$n.variadic}),getDateTimeFormat:Yn(function(){for(var l,a=[],t=0;t<arguments.length;t++)a[t]=arguments[t];return new((l=Intl.DateTimeFormat).bind.apply(l,Jn([void 0],a,!1)))},{cache:iu(e.dateTime),strategy:$n.variadic}),getPluralRules:Yn(function(){for(var l,a=[],t=0;t<arguments.length;t++)a[t]=arguments[t];return new((l=Intl.PluralRules).bind.apply(l,Jn([void 0],a,!1)))},{cache:iu(e.pluralRules),strategy:$n.variadic})}}var JE=(function(){function e(l,a,t,i){a===void 0&&(a=e.defaultLocale);var s=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(v){var _=s.formatToParts(v);if(_.length===1)return _[0].value;var f=_.reduce(function(T,R){return!T.length||R.type!==sn.literal||typeof T[T.length-1]!="string"?T.push(R.value):T[T.length-1]+=R.value,T},[]);return f.length<=1?f[0]||"":f},this.formatToParts=function(v){return rl(s.ast,s.locales,s.formatters,s.formats,v,void 0,s.message)},this.resolvedOptions=function(){var v;return{locale:((v=s.resolvedLocale)===null||v===void 0?void 0:v.toString())||Intl.NumberFormat.supportedLocalesOf(s.locales)[0]}},this.getAst=function(){return s.ast},this.locales=a,this.resolvedLocale=e.resolveLocale(a),typeof l=="string"){if(this.message=l,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var m=i||{};m.formatters;var d=hl(m,["formatters"]);this.ast=e.__parse(l,le(le({},d),{locale:this.resolvedLocale}))}else this.ast=l;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=vA(e.formats,t),this.formatters=i&&i.formatters||gA(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(l){if(!(typeof Intl.Locale>"u")){var a=Intl.NumberFormat.supportedLocalesOf(l);return a.length>0?new Intl.Locale(a[0]):new Intl.Locale(typeof l=="string"?l:l[0])}},e.__parse=sA,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e})(),qr;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(qr||(qr={}));var rt=(function(e){jn(l,e);function l(a,t,i){var s=this,m=i?i instanceof Error?i:new Error(String(i)):void 0;return s=e.call(this,"[@formatjs/intl Error ".concat(a,"] ").concat(t,`
`).concat(m?`
`.concat(m.message,`
`).concat(m.stack):""))||this,s.code=a,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(s,l),s}return l})(Error),_A=(function(e){jn(l,e);function l(a,t){return e.call(this,qr.UNSUPPORTED_FORMATTER,a,t)||this}return l})(rt),fA=(function(e){jn(l,e);function l(a,t){return e.call(this,qr.INVALID_CONFIG,a,t)||this}return l})(rt),bd=(function(e){jn(l,e);function l(a,t){return e.call(this,qr.MISSING_DATA,a,t)||this}return l})(rt),Fn=(function(e){jn(l,e);function l(a,t,i){var s=e.call(this,qr.FORMAT_ERROR,"".concat(a,`
Locale: `).concat(t,`
`),i)||this;return s.locale=t,s}return l})(rt),uu=(function(e){jn(l,e);function l(a,t,i,s){var m=e.call(this,"".concat(a,`
MessageID: `).concat(i?.id,`
Default Message: `).concat(i?.defaultMessage,`
Description: `).concat(i?.description,`
`),t,s)||this;return m.descriptor=i,m.locale=t,m}return l})(Fn),cA=(function(e){jn(l,e);function l(a,t){var i=e.call(this,qr.MISSING_TRANSLATION,'Missing message: "'.concat(a.id,'" for locale "').concat(t,'", using ').concat(a.defaultMessage?"default message (".concat(typeof a.defaultMessage=="string"?a.defaultMessage:a.defaultMessage.map(function(s){var m;return(m=s.value)!==null&&m!==void 0?m:JSON.stringify(s)}).join(),")"):"id"," as fallback."))||this;return i.descriptor=a,i}return l})(rt);function TA(e,l,a){if(a===void 0&&(a=Error),!e)throw new a(l)}function fa(e,l,a){return a===void 0&&(a={}),l.reduce(function(t,i){return i in e?t[i]=e[i]:i in a&&(t[i]=a[i]),t},{})}var pA=function(e){},hA=function(e){},WE={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:pA,onWarn:hA};function zE(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function Vr(e){return{create:function(){return{get:function(l){return e[l]},set:function(l,a){e[l]=a}}}}}function NA(e){e===void 0&&(e=zE());var l=Intl.RelativeTimeFormat,a=Intl.ListFormat,t=Intl.DisplayNames,i=Yn(function(){for(var d,v=[],_=0;_<arguments.length;_++)v[_]=arguments[_];return new((d=Intl.DateTimeFormat).bind.apply(d,Jn([void 0],v,!1)))},{cache:Vr(e.dateTime),strategy:$n.variadic}),s=Yn(function(){for(var d,v=[],_=0;_<arguments.length;_++)v[_]=arguments[_];return new((d=Intl.NumberFormat).bind.apply(d,Jn([void 0],v,!1)))},{cache:Vr(e.number),strategy:$n.variadic}),m=Yn(function(){for(var d,v=[],_=0;_<arguments.length;_++)v[_]=arguments[_];return new((d=Intl.PluralRules).bind.apply(d,Jn([void 0],v,!1)))},{cache:Vr(e.pluralRules),strategy:$n.variadic});return{getDateTimeFormat:i,getNumberFormat:s,getMessageFormat:Yn(function(d,v,_,f){return new JE(d,v,_,le({formatters:{getNumberFormat:s,getDateTimeFormat:i,getPluralRules:m}},f||{}))},{cache:Vr(e.message),strategy:$n.variadic}),getRelativeTimeFormat:Yn(function(){for(var d=[],v=0;v<arguments.length;v++)d[v]=arguments[v];return new(l.bind.apply(l,Jn([void 0],d,!1)))},{cache:Vr(e.relativeTime),strategy:$n.variadic}),getPluralRules:m,getListFormat:Yn(function(){for(var d=[],v=0;v<arguments.length;v++)d[v]=arguments[v];return new(a.bind.apply(a,Jn([void 0],d,!1)))},{cache:Vr(e.list),strategy:$n.variadic}),getDisplayNames:Yn(function(){for(var d=[],v=0;v<arguments.length;v++)d[v]=arguments[v];return new(t.bind.apply(t,Jn([void 0],d,!1)))},{cache:Vr(e.displayNames),strategy:$n.variadic})}}function $u(e,l,a,t){var i=e&&e[l],s;if(i&&(s=i[a]),s)return s;t(new _A("No ".concat(l," format named: ").concat(a)))}function Zt(e,l){return Object.keys(e).reduce(function(a,t){return a[t]=le({timeZone:l},e[t]),a},{})}function Ld(e,l){var a=Object.keys(le(le({},e),l));return a.reduce(function(t,i){return t[i]=le(le({},e[i]||{}),l[i]||{}),t},{})}function Dd(e,l){if(!l)return e;var a=JE.formats;return le(le(le({},a),e),{date:Ld(Zt(a.date,l),Zt(e.date||{},l)),time:Ld(Zt(a.time,l),Zt(e.time||{},l))})}var Iu=function(e,l,a,t,i){var s=e.locale,m=e.formats,d=e.messages,v=e.defaultLocale,_=e.defaultFormats,f=e.fallbackOnEmptyString,T=e.onError,R=e.timeZone,h=e.defaultRichTextElements;a===void 0&&(a={id:""});var L=a.id,k=a.defaultMessage;TA(!!L,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var N=String(L),A=d&&Object.prototype.hasOwnProperty.call(d,N)&&d[N];if(Array.isArray(A)&&A.length===1&&A[0].type===Fe.literal)return A[0].value;if(!t&&A&&typeof A=="string"&&!h)return A.replace(/'\{(.*?)\}'/gi,"{$1}");if(t=le(le({},h),t||{}),m=Dd(m,R),_=Dd(_,R),!A){if(f===!1&&A==="")return A;if((!k||s&&s.toLowerCase()!==v.toLowerCase())&&T(new cA(a,s)),k)try{var P=l.getMessageFormat(k,v,_,i);return P.format(t)}catch(I){return T(new uu('Error formatting default message for: "'.concat(N,'", rendering default message verbatim'),s,a,I)),typeof k=="string"?k:N}return N}try{var P=l.getMessageFormat(A,s,m,le({formatters:l},i||{}));return P.format(t)}catch(I){T(new uu('Error formatting message: "'.concat(N,'", using ').concat(k?"default message":"id"," as fallback."),s,a,I))}if(k)try{var P=l.getMessageFormat(k,v,_,i);return P.format(t)}catch(I){T(new uu('Error formatting the default message for: "'.concat(N,'", rendering message verbatim'),s,a,I))}return typeof A=="string"?A:typeof k=="string"?k:N},RA=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function at(e,l,a,t){var i=e.locale,s=e.formats,m=e.onError,d=e.timeZone;t===void 0&&(t={});var v=t.format,_=le(le({},d&&{timeZone:d}),v&&$u(s,l,v,m)),f=fa(t,RA,_);return l==="time"&&!f.hour&&!f.minute&&!f.second&&!f.timeStyle&&!f.dateStyle&&(f=le(le({},f),{hour:"numeric",minute:"numeric"})),a(i,f)}function kA(e,l){for(var a=[],t=2;t<arguments.length;t++)a[t-2]=arguments[t];var i=a[0],s=a[1],m=s===void 0?{}:s,d=typeof i=="string"?new Date(i||0):i;try{return at(e,"date",l,m).format(d)}catch(v){e.onError(new Fn("Error formatting date.",e.locale,v))}return String(d)}function yA(e,l){for(var a=[],t=2;t<arguments.length;t++)a[t-2]=arguments[t];var i=a[0],s=a[1],m=s===void 0?{}:s,d=typeof i=="string"?new Date(i||0):i;try{return at(e,"time",l,m).format(d)}catch(v){e.onError(new Fn("Error formatting time.",e.locale,v))}return String(d)}function AA(e,l){for(var a=[],t=2;t<arguments.length;t++)a[t-2]=arguments[t];var i=a[0],s=a[1],m=a[2],d=m===void 0?{}:m,v=typeof i=="string"?new Date(i||0):i,_=typeof s=="string"?new Date(s||0):s;try{return at(e,"dateTimeRange",l,d).formatRange(v,_)}catch(f){e.onError(new Fn("Error formatting date time range.",e.locale,f))}return String(v)}function SA(e,l){for(var a=[],t=2;t<arguments.length;t++)a[t-2]=arguments[t];var i=a[0],s=a[1],m=s===void 0?{}:s,d=typeof i=="string"?new Date(i||0):i;try{return at(e,"date",l,m).formatToParts(d)}catch(v){e.onError(new Fn("Error formatting date.",e.locale,v))}return[]}function IA(e,l){for(var a=[],t=2;t<arguments.length;t++)a[t-2]=arguments[t];var i=a[0],s=a[1],m=s===void 0?{}:s,d=typeof i=="string"?new Date(i||0):i;try{return at(e,"time",l,m).formatToParts(d)}catch(v){e.onError(new Fn("Error formatting time.",e.locale,v))}return[]}var bA=["style","type","fallback","languageDisplay"];function LA(e,l,a,t){var i=e.locale,s=e.onError,m=Intl.DisplayNames;m||s(new br(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,Xn.MISSING_INTL_API));var d=fa(t,bA);try{return l(i,d).of(a)}catch(v){s(new Fn("Error formatting display name.",i,v))}}var DA=["type","style"],Kd=Date.now();function KA(e){return"".concat(Kd,"_").concat(e,"_").concat(Kd)}function PA(e,l,a,t){t===void 0&&(t={});var i=XE(e,l,a,t).reduce(function(s,m){var d=m.value;return typeof d!="string"?s.push(d):typeof s[s.length-1]=="string"?s[s.length-1]+=d:s.push(d),s},[]);return i.length===1?i[0]:i.length===0?"":i}function XE(e,l,a,t){var i=e.locale,s=e.onError;t===void 0&&(t={});var m=Intl.ListFormat;m||s(new br(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,Xn.MISSING_INTL_API));var d=fa(t,DA);try{var v={},_=a.map(function(f,T){if(typeof f=="object"){var R=KA(T);return v[R]=f,R}return String(f)});return l(i,d).formatToParts(_).map(function(f){return f.type==="literal"?f:le(le({},f),{value:v[f.value]||f.value})})}catch(f){s(new Fn("Error formatting list.",i,f))}return a}var OA=["type"];function FA(e,l,a,t){var i=e.locale,s=e.onError;t===void 0&&(t={}),Intl.PluralRules||s(new br(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,Xn.MISSING_INTL_API));var m=fa(t,OA);try{return l(i,m).select(a)}catch(d){s(new Fn("Error formatting plural.",i,d))}return"other"}var wA=["numeric","style"];function GA(e,l,a){var t=e.locale,i=e.formats,s=e.onError;a===void 0&&(a={});var m=a.format,d=!!m&&$u(i,"relative",m,s)||{},v=fa(a,wA,d);return l(t,v)}function BA(e,l,a,t,i){i===void 0&&(i={}),t||(t="second");var s=Intl.RelativeTimeFormat;s||e.onError(new br(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,Xn.MISSING_INTL_API));try{return GA(e,l,i).format(a,t)}catch(m){e.onError(new Fn("Error formatting relative time.",e.locale,m))}return String(a)}var VA=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function ZE(e,l,a){var t=e.locale,i=e.formats,s=e.onError;a===void 0&&(a={});var m=a.format,d=m&&$u(i,"number",m,s)||{},v=fa(a,VA,d);return l(t,v)}function MA(e,l,a,t){t===void 0&&(t={});try{return ZE(e,l,t).format(a)}catch(i){e.onError(new Fn("Error formatting number.",e.locale,i))}return String(a)}function HA(e,l,a,t){t===void 0&&(t={});try{return ZE(e,l,t).formatToParts(a)}catch(i){e.onError(new Fn("Error formatting number.",e.locale,i))}return[]}function jA(e){var l=e?e[Object.keys(e)[0]]:void 0;return typeof l=="string"}function UA(e){e.onWarn&&e.defaultRichTextElements&&jA(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`)}function qA(e,l){var a=NA(l),t=le(le({},WE),e),i=t.locale,s=t.defaultLocale,m=t.onError;return i?!Intl.NumberFormat.supportedLocalesOf(i).length&&m?m(new bd('Missing locale data for locale: "'.concat(i,'" in Intl.NumberFormat. Using default locale: "').concat(s,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(i).length&&m&&m(new bd('Missing locale data for locale: "'.concat(i,'" in Intl.DateTimeFormat. Using default locale: "').concat(s,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):(m&&m(new fA('"locale" was not configured, using "'.concat(s,'" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))),t.locale=t.defaultLocale||"en"),UA(t),le(le({},t),{formatters:a,formatNumber:MA.bind(null,t,a.getNumberFormat),formatNumberToParts:HA.bind(null,t,a.getNumberFormat),formatRelativeTime:BA.bind(null,t,a.getRelativeTimeFormat),formatDate:kA.bind(null,t,a.getDateTimeFormat),formatDateToParts:SA.bind(null,t,a.getDateTimeFormat),formatTime:yA.bind(null,t,a.getDateTimeFormat),formatDateTimeRange:AA.bind(null,t,a.getDateTimeFormat),formatTimeToParts:IA.bind(null,t,a.getDateTimeFormat),formatPlural:FA.bind(null,t,a.getPluralRules),formatMessage:Iu.bind(null,t,a),$t:Iu.bind(null,t,a),formatList:PA.bind(null,t,a.getListFormat),formatListToParts:XE.bind(null,t,a.getListFormat),formatDisplayName:LA.bind(null,t,a.getDisplayNames)})}function xA(e,l,a){if(a===void 0&&(a=Error),!e)throw new a(l)}function CA(e){xA(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var YA=le(le({},WE),{textComponent:K.Fragment}),$A={key:42},JA=function(e){return K.isValidElement(e)?K.createElement(K.Fragment,$A,e):e},WA=function(e){var l;return(l=K.Children.map(e,JA))!==null&&l!==void 0?l:[]};function zA(e){return function(l){return e(K.Children.toArray(l))}}var Pd={exports:{}},Se={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Od;function XA(){if(Od)return Se;Od=1;var e=typeof Symbol=="function"&&Symbol.for,l=e?Symbol.for("react.element"):60103,a=e?Symbol.for("react.portal"):60106,t=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,m=e?Symbol.for("react.provider"):60109,d=e?Symbol.for("react.context"):60110,v=e?Symbol.for("react.async_mode"):60111,_=e?Symbol.for("react.concurrent_mode"):60111,f=e?Symbol.for("react.forward_ref"):60112,T=e?Symbol.for("react.suspense"):60113,R=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,L=e?Symbol.for("react.lazy"):60116,k=e?Symbol.for("react.block"):60121,N=e?Symbol.for("react.fundamental"):60117,A=e?Symbol.for("react.responder"):60118,P=e?Symbol.for("react.scope"):60119;function I(D){if(typeof D=="object"&&D!==null){var q=D.$$typeof;switch(q){case l:switch(D=D.type,D){case v:case _:case t:case s:case i:case T:return D;default:switch(D=D&&D.$$typeof,D){case d:case f:case L:case h:case m:return D;default:return q}}case a:return q}}}function x(D){return I(D)===_}return Se.AsyncMode=v,Se.ConcurrentMode=_,Se.ContextConsumer=d,Se.ContextProvider=m,Se.Element=l,Se.ForwardRef=f,Se.Fragment=t,Se.Lazy=L,Se.Memo=h,Se.Portal=a,Se.Profiler=s,Se.StrictMode=i,Se.Suspense=T,Se.isAsyncMode=function(D){return x(D)||I(D)===v},Se.isConcurrentMode=x,Se.isContextConsumer=function(D){return I(D)===d},Se.isContextProvider=function(D){return I(D)===m},Se.isElement=function(D){return typeof D=="object"&&D!==null&&D.$$typeof===l},Se.isForwardRef=function(D){return I(D)===f},Se.isFragment=function(D){return I(D)===t},Se.isLazy=function(D){return I(D)===L},Se.isMemo=function(D){return I(D)===h},Se.isPortal=function(D){return I(D)===a},Se.isProfiler=function(D){return I(D)===s},Se.isStrictMode=function(D){return I(D)===i},Se.isSuspense=function(D){return I(D)===T},Se.isValidElementType=function(D){return typeof D=="string"||typeof D=="function"||D===t||D===_||D===s||D===i||D===T||D===R||typeof D=="object"&&D!==null&&(D.$$typeof===L||D.$$typeof===h||D.$$typeof===m||D.$$typeof===d||D.$$typeof===f||D.$$typeof===N||D.$$typeof===A||D.$$typeof===P||D.$$typeof===k)},Se.typeOf=I,Se}var Fd;function ZA(){return Fd||(Fd=1,Pd.exports=XA()),Pd.exports}var su,wd;function QA(){if(wd)return su;wd=1;var e=ZA(),l={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},t={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};s[e.ForwardRef]=t,s[e.Memo]=i;function m(L){return e.isMemo(L)?i:s[L.$$typeof]||l}var d=Object.defineProperty,v=Object.getOwnPropertyNames,_=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,T=Object.getPrototypeOf,R=Object.prototype;function h(L,k,N){if(typeof k!="string"){if(R){var A=T(k);A&&A!==R&&h(L,A,N)}var P=v(k);_&&(P=P.concat(_(k)));for(var I=m(L),x=m(k),D=0;D<P.length;++D){var q=P[D];if(!a[q]&&!(N&&N[q])&&!(x&&x[q])&&!(I&&I[q])){var w=f(k,q);try{d(L,q,w)}catch{}}}}return L}return su=h,su}QA();var Ju=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=K.createContext(null)):K.createContext(null);Ju.Consumer;Ju.Provider;var eS=Ju;function QE(){var e=K.useContext(eS);return CA(e),e}var bu;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(bu||(bu={}));var Lu;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(Lu||(Lu={}));function ev(e){var l=function(a){var t=QE(),i=a.value,s=a.children,m=hl(a,["value","children"]),d=typeof i=="string"?new Date(i||0):i,v=e==="formatDate"?t.formatDateToParts(d,m):t.formatTimeToParts(d,m);return s(v)};return l.displayName=Lu[e],l}function tt(e){var l=function(a){var t=QE(),i=a.value,s=a.children,m=hl(a,["value","children"]),d=t[e](i,m);if(typeof s=="function")return s(d);var v=t.textComponent||K.Fragment;return K.createElement(v,null,d)};return l.displayName=bu[e],l}function nv(e){return e&&Object.keys(e).reduce(function(l,a){var t=e[a];return l[a]=$E(t)?zA(t):t,l},{})}var Gd=function(e,l,a,t){for(var i=[],s=4;s<arguments.length;s++)i[s-4]=arguments[s];var m=nv(t),d=Iu.apply(void 0,Jn([e,l,a,m],i,!1));return Array.isArray(d)?WA(d):d},nS=function(e,l){var a=e.defaultRichTextElements,t=hl(e,["defaultRichTextElements"]),i=nv(a),s=qA(le(le(le({},YA),t),{defaultRichTextElements:i}),l),m={locale:s.locale,timeZone:s.timeZone,fallbackOnEmptyString:s.fallbackOnEmptyString,formats:s.formats,defaultLocale:s.defaultLocale,defaultFormats:s.defaultFormats,messages:s.messages,onError:s.onError,defaultRichTextElements:i};return le(le({},s),{formatMessage:Gd.bind(null,m,s.formatters),$t:Gd.bind(null,m,s.formatters)})};tt("formatDate");tt("formatTime");tt("formatNumber");tt("formatList");tt("formatDisplayName");ev("formatDate");ev("formatTime");function Wu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Du={exports:{}},rS=Du.exports,Bd;function aS(){return Bd||(Bd=1,(function(e,l){(function(a,t){e.exports=t()})(rS,function(){var a,t,i=1e3,s=6e4,m=36e5,d=864e5,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,_=31536e6,f=2628e6,T=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,R={years:_,months:f,days:d,hours:m,minutes:s,seconds:i,milliseconds:1,weeks:6048e5},h=function(q){return q instanceof x},L=function(q,w,G){return new x(q,G,w.$l)},k=function(q){return t.p(q)+"s"},N=function(q){return q<0},A=function(q){return N(q)?Math.ceil(q):Math.floor(q)},P=function(q){return Math.abs(q)},I=function(q,w){return q?N(q)?{negative:!0,format:""+P(q)+w}:{negative:!1,format:""+q+w}:{negative:!1,format:""}},x=(function(){function q(G,W,Z){var X=this;if(this.$d={},this.$l=Z,G===void 0&&(this.$ms=0,this.parseFromMilliseconds()),W)return L(G*R[k(W)],this);if(typeof G=="number")return this.$ms=G,this.parseFromMilliseconds(),this;if(typeof G=="object")return Object.keys(G).forEach(function(B){X.$d[k(B)]=G[B]}),this.calMilliseconds(),this;if(typeof G=="string"){var Q=G.match(T);if(Q){var H=Q.slice(2).map(function(B){return B!=null?Number(B):0});return this.$d.years=H[0],this.$d.months=H[1],this.$d.weeks=H[2],this.$d.days=H[3],this.$d.hours=H[4],this.$d.minutes=H[5],this.$d.seconds=H[6],this.calMilliseconds(),this}}return this}var w=q.prototype;return w.calMilliseconds=function(){var G=this;this.$ms=Object.keys(this.$d).reduce(function(W,Z){return W+(G.$d[Z]||0)*R[Z]},0)},w.parseFromMilliseconds=function(){var G=this.$ms;this.$d.years=A(G/_),G%=_,this.$d.months=A(G/f),G%=f,this.$d.days=A(G/d),G%=d,this.$d.hours=A(G/m),G%=m,this.$d.minutes=A(G/s),G%=s,this.$d.seconds=A(G/i),G%=i,this.$d.milliseconds=G},w.toISOString=function(){var G=I(this.$d.years,"Y"),W=I(this.$d.months,"M"),Z=+this.$d.days||0;this.$d.weeks&&(Z+=7*this.$d.weeks);var X=I(Z,"D"),Q=I(this.$d.hours,"H"),H=I(this.$d.minutes,"M"),B=this.$d.seconds||0;this.$d.milliseconds&&(B+=this.$d.milliseconds/1e3,B=Math.round(1e3*B)/1e3);var z=I(B,"S"),re=G.negative||W.negative||X.negative||Q.negative||H.negative||z.negative,J=Q.format||H.format||z.format?"T":"",C=(re?"-":"")+"P"+G.format+W.format+X.format+J+Q.format+H.format+z.format;return C==="P"||C==="-P"?"P0D":C},w.toJSON=function(){return this.toISOString()},w.format=function(G){var W=G||"YYYY-MM-DDTHH:mm:ss",Z={Y:this.$d.years,YY:t.s(this.$d.years,2,"0"),YYYY:t.s(this.$d.years,4,"0"),M:this.$d.months,MM:t.s(this.$d.months,2,"0"),D:this.$d.days,DD:t.s(this.$d.days,2,"0"),H:this.$d.hours,HH:t.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:t.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:t.s(this.$d.seconds,2,"0"),SSS:t.s(this.$d.milliseconds,3,"0")};return W.replace(v,function(X,Q){return Q||String(Z[X])})},w.as=function(G){return this.$ms/R[k(G)]},w.get=function(G){var W=this.$ms,Z=k(G);return Z==="milliseconds"?W%=1e3:W=Z==="weeks"?A(W/R[Z]):this.$d[Z],W||0},w.add=function(G,W,Z){var X;return X=W?G*R[k(W)]:h(G)?G.$ms:L(G,this).$ms,L(this.$ms+X*(Z?-1:1),this)},w.subtract=function(G,W){return this.add(G,W,!0)},w.locale=function(G){var W=this.clone();return W.$l=G,W},w.clone=function(){return L(this.$ms,this)},w.humanize=function(G){return a().add(this.$ms,"ms").locale(this.$l).fromNow(!G)},w.valueOf=function(){return this.asMilliseconds()},w.milliseconds=function(){return this.get("milliseconds")},w.asMilliseconds=function(){return this.as("milliseconds")},w.seconds=function(){return this.get("seconds")},w.asSeconds=function(){return this.as("seconds")},w.minutes=function(){return this.get("minutes")},w.asMinutes=function(){return this.as("minutes")},w.hours=function(){return this.get("hours")},w.asHours=function(){return this.as("hours")},w.days=function(){return this.get("days")},w.asDays=function(){return this.as("days")},w.weeks=function(){return this.get("weeks")},w.asWeeks=function(){return this.as("weeks")},w.months=function(){return this.get("months")},w.asMonths=function(){return this.as("months")},w.years=function(){return this.get("years")},w.asYears=function(){return this.as("years")},q})(),D=function(q,w,G){return q.add(w.years()*G,"y").add(w.months()*G,"M").add(w.days()*G,"d").add(w.hours()*G,"h").add(w.minutes()*G,"m").add(w.seconds()*G,"s").add(w.milliseconds()*G,"ms")};return function(q,w,G){a=G,t=G().$utils(),G.duration=function(X,Q){var H=G.locale();return L(X,{$l:H},Q)},G.isDuration=h;var W=w.prototype.add,Z=w.prototype.subtract;w.prototype.add=function(X,Q){return h(X)?D(this,X,1):W.bind(this)(X,Q)},w.prototype.subtract=function(X,Q){return h(X)?D(this,X,-1):Z.bind(this)(X,Q)}}})})(Du)),Du.exports}var tS=aS();const lS=Wu(tS);var Ku={exports:{}},iS=Ku.exports,Vd;function uS(){return Vd||(Vd=1,(function(e,l){(function(a,t){e.exports=t()})(iS,function(){var a="day";return function(t,i,s){var m=function(_){return _.add(4-_.isoWeekday(),a)},d=i.prototype;d.isoWeekYear=function(){return m(this).year()},d.isoWeek=function(_){if(!this.$utils().u(_))return this.add(7*(_-this.isoWeek()),a);var f,T,R,h,L=m(this),k=(f=this.isoWeekYear(),T=this.$u,R=(T?s.utc:s)().year(f).startOf("year"),h=4-R.isoWeekday(),R.isoWeekday()>4&&(h+=7),R.add(h,a));return L.diff(k,"week")+1},d.isoWeekday=function(_){return this.$utils().u(_)?this.day()||7:this.day(this.day()%7?_:_-7)};var v=d.startOf;d.startOf=function(_,f){var T=this.$utils(),R=!!T.u(f)||f;return T.p(_)==="isoweek"?R?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):v.bind(this)(_,f)}}})})(Ku)),Ku.exports}var sS=uS();const oS=Wu(sS);var Pu={exports:{}},mS=Pu.exports,Md;function dS(){return Md||(Md=1,(function(e,l){(function(a,t){e.exports=t()})(mS,function(){var a="minute",t=/[+-]\d\d(?::?\d\d)?/g,i=/([+-]|\d\d)/g;return function(s,m,d){var v=m.prototype;d.utc=function(k){var N={date:k,utc:!0,args:arguments};return new m(N)},v.utc=function(k){var N=d(this.toDate(),{locale:this.$L,utc:!0});return k?N.add(this.utcOffset(),a):N},v.local=function(){return d(this.toDate(),{locale:this.$L,utc:!1})};var _=v.parse;v.parse=function(k){k.utc&&(this.$u=!0),this.$utils().u(k.$offset)||(this.$offset=k.$offset),_.call(this,k)};var f=v.init;v.init=function(){if(this.$u){var k=this.$d;this.$y=k.getUTCFullYear(),this.$M=k.getUTCMonth(),this.$D=k.getUTCDate(),this.$W=k.getUTCDay(),this.$H=k.getUTCHours(),this.$m=k.getUTCMinutes(),this.$s=k.getUTCSeconds(),this.$ms=k.getUTCMilliseconds()}else f.call(this)};var T=v.utcOffset;v.utcOffset=function(k,N){var A=this.$utils().u;if(A(k))return this.$u?0:A(this.$offset)?T.call(this):this.$offset;if(typeof k=="string"&&(k=(function(D){D===void 0&&(D="");var q=D.match(t);if(!q)return null;var w=(""+q[0]).match(i)||["-",0,0],G=w[0],W=60*+w[1]+ +w[2];return W===0?0:G==="+"?W:-W})(k),k===null))return this;var P=Math.abs(k)<=16?60*k:k;if(P===0)return this.utc(N);var I=this.clone();if(N)return I.$offset=P,I.$u=!1,I;var x=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();return(I=this.local().add(P+x,a)).$offset=P,I.$x.$localOffset=x,I};var R=v.format;v.format=function(k){var N=k||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return R.call(this,N)},v.valueOf=function(){var k=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*k},v.isUTC=function(){return!!this.$u},v.toISOString=function(){return this.toDate().toISOString()},v.toString=function(){return this.toDate().toUTCString()};var h=v.toDate;v.toDate=function(k){return k==="s"&&this.$offset?d(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():h.call(this)};var L=v.diff;v.diff=function(k,N,A){if(k&&this.$u===k.$u)return L.call(this,k,N,A);var P=this.local(),I=d(k).local();return L.call(P,I,N,A)}}})})(Pu)),Pu.exports}var ES=dS();const vS=Wu(ES),gS=zE(),Nl=e=>nS({locale:"nb-NO",messages:e},gS),Rl={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","DateTimeLabel.Kl":" kl. ","PeriodLabel.DateToday":"d.d.","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"};Nl(Rl);var Ou={exports:{}},_S=Ou.exports,Hd;function fS(){return Hd||(Hd=1,(function(e,l){(function(a,t){e.exports=t(va)})(_S,function(a){function t(m){return m&&typeof m=="object"&&"default"in m?m:{default:m}}var i=t(a),s={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(m){return m+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return i.default.locale(s,null,!0),s})})(Ou)),Ou.exports}fS();va.extend(vS);va.extend(oS);va.extend(lS);Nl(Rl);Nl(Rl);var jd={exports:{}},Ua={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ud;function cS(){if(Ud)return Ua;Ud=1;var e=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function a(t,i,s){var m=null;if(s!==void 0&&(m=""+s),i.key!==void 0&&(m=""+i.key),"key"in i){s={};for(var d in i)d!=="key"&&(s[d]=i[d])}else s=i;return i=s.ref,{$$typeof:e,type:t,key:m,ref:i!==void 0?i:null,props:s}}return Ua.Fragment=l,Ua.jsx=a,Ua.jsxs=a,Ua}var qd;function TS(){return qd||(qd=1,jd.exports=cS()),jd.exports}TS();Nl(Rl);K.createContext({});var Fu={exports:{}},pS=Fu.exports,xd;function hS(){return xd||(xd=1,(function(e,l){(function(a,t){e.exports=t()})(pS,function(){var a={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,i=/\d/,s=/\d\d/,m=/\d\d?/,d=/\d*[^-_:/,()\s\d]+/,v={},_=function(N){return(N=+N)+(N>68?1900:2e3)},f=function(N){return function(A){this[N]=+A}},T=[/[+-]\d\d:?(\d\d)?|Z/,function(N){(this.zone||(this.zone={})).offset=(function(A){if(!A||A==="Z")return 0;var P=A.match(/([+-]|\d\d)/g),I=60*P[1]+(+P[2]||0);return I===0?0:P[0]==="+"?-I:I})(N)}],R=function(N){var A=v[N];return A&&(A.indexOf?A:A.s.concat(A.f))},h=function(N,A){var P,I=v.meridiem;if(I){for(var x=1;x<=24;x+=1)if(N.indexOf(I(x,0,A))>-1){P=x>12;break}}else P=N===(A?"pm":"PM");return P},L={A:[d,function(N){this.afternoon=h(N,!1)}],a:[d,function(N){this.afternoon=h(N,!0)}],Q:[i,function(N){this.month=3*(N-1)+1}],S:[i,function(N){this.milliseconds=100*+N}],SS:[s,function(N){this.milliseconds=10*+N}],SSS:[/\d{3}/,function(N){this.milliseconds=+N}],s:[m,f("seconds")],ss:[m,f("seconds")],m:[m,f("minutes")],mm:[m,f("minutes")],H:[m,f("hours")],h:[m,f("hours")],HH:[m,f("hours")],hh:[m,f("hours")],D:[m,f("day")],DD:[s,f("day")],Do:[d,function(N){var A=v.ordinal,P=N.match(/\d+/);if(this.day=P[0],A)for(var I=1;I<=31;I+=1)A(I).replace(/\[|\]/g,"")===N&&(this.day=I)}],w:[m,f("week")],ww:[s,f("week")],M:[m,f("month")],MM:[s,f("month")],MMM:[d,function(N){var A=R("months"),P=(R("monthsShort")||A.map(function(I){return I.slice(0,3)})).indexOf(N)+1;if(P<1)throw new Error;this.month=P%12||P}],MMMM:[d,function(N){var A=R("months").indexOf(N)+1;if(A<1)throw new Error;this.month=A%12||A}],Y:[/[+-]?\d+/,f("year")],YY:[s,function(N){this.year=_(N)}],YYYY:[/\d{4}/,f("year")],Z:T,ZZ:T};function k(N){var A,P;A=N,P=v&&v.formats;for(var I=(N=A.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(Z,X,Q){var H=Q&&Q.toUpperCase();return X||P[Q]||a[Q]||P[H].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(B,z,re){return z||re.slice(1)})})).match(t),x=I.length,D=0;D<x;D+=1){var q=I[D],w=L[q],G=w&&w[0],W=w&&w[1];I[D]=W?{regex:G,parser:W}:q.replace(/^\[|\]$/g,"")}return function(Z){for(var X={},Q=0,H=0;Q<x;Q+=1){var B=I[Q];if(typeof B=="string")H+=B.length;else{var z=B.regex,re=B.parser,J=Z.slice(H),C=z.exec(J)[0];re.call(X,C),Z=Z.replace(C,"")}}return(function($){var te=$.afternoon;if(te!==void 0){var ne=$.hours;te?ne<12&&($.hours+=12):ne===12&&($.hours=0),delete $.afternoon}})(X),X}}return function(N,A,P){P.p.customParseFormat=!0,N&&N.parseTwoDigitYear&&(_=N.parseTwoDigitYear);var I=A.prototype,x=I.parse;I.parse=function(D){var q=D.date,w=D.utc,G=D.args;this.$u=w;var W=G[1];if(typeof W=="string"){var Z=G[2]===!0,X=G[3]===!0,Q=Z||X,H=G[2];X&&(H=G[2]),v=this.$locale(),!Z&&H&&(v=P.Ls[H]),this.$d=(function(J,C,$,te){try{if(["x","X"].indexOf(C)>-1)return new Date((C==="X"?1e3:1)*J);var ne=k(C)(J),ue=ne.year,fe=ne.month,gn=ne.day,He=ne.hours,we=ne.minutes,je=ne.seconds,Te=ne.milliseconds,ye=ne.zone,Xe=ne.week,Ue=new Date,xe=gn||(ue||fe?1:Ue.getDate()),kn=ue||Ue.getFullYear(),Be=0;ue&&!fe||(Be=fe>0?fe-1:Ue.getMonth());var Ze,Qn=He||0,Qe=we||0,Un=je||0,er=Te||0;return ye?new Date(Date.UTC(kn,Be,xe,Qn,Qe,Un,er+60*ye.offset*1e3)):$?new Date(Date.UTC(kn,Be,xe,Qn,Qe,Un,er)):(Ze=new Date(kn,Be,xe,Qn,Qe,Un,er),Xe&&(Ze=te(Ze).week(Xe).toDate()),Ze)}catch{return new Date("")}})(q,W,w,P),this.init(),H&&H!==!0&&(this.$L=this.locale(H).$L),Q&&q!=this.format(W)&&(this.$d=new Date("")),v={}}else if(W instanceof Array)for(var B=W.length,z=1;z<=B;z+=1){G[1]=W[z-1];var re=P.apply(this,G);if(re.isValid()){this.$d=re.$d,this.$L=re.$L,this.init();break}z===B&&(this.$d=new Date(""))}else x.call(this,D)}}})})(Fu)),Fu.exports}var NS=hS();const RS=Ty(NS);va.extend(RS);Hn(nt);const kS=e=>{const l=e.aktiveNaturalytelser.reduce((t,i)=>{const s=i.type;return s in t?{...t,[s]:[...t[s],i]}:{...t,[s]:[i]}},{}),a={};return Object.entries(l).forEach(([t,i])=>{const s=i.sort((m,d)=>sy({fom:m.periode.fomDato,tom:m.periode.tomDato},{fom:d.periode.fomDato,tom:d.periode.tomDato})).reverse();a[t]=s.flatMap((m,d,v)=>{const _=v[d+1],f=m.periode.tomDato,T=_?.periode.fomDato;return f===Ya?[]:[{...m,periode:{fomDato:bm(f,1),tomDato:T?bm(T,-1):Ya}}]})}),a},rv=({inntektsmelding:e,alleKodeverk:l})=>{const a=gr(),t=kS(e);return M.jsx(zn,{tittel:a.formatMessage({id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.heading"}),children:e.aktiveNaturalytelser.length===0?M.jsx("span",{children:M.jsx(be,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.ingen"})}):M.jsx(pl,{gap:"space-4",children:Object.entries(t).map(([i,s])=>M.jsxs("div",{children:[M.jsx("span",{children:l.NaturalYtelseType.find(m=>m.kode===i)?.navn}),M.jsx("ul",{children:s.map(m=>M.jsxs(F.Fragment,{children:[M.jsxs("li",{children:[M.jsx(be,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.fom"})," ",M.jsx(Ja,{dateString:m.periode.fomDato})]}),m.periode.tomDato!==Ya&&M.jsxs("li",{children:[M.jsx(be,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.tom"})," ",M.jsx(Ja,{dateString:m.periode.tomDato})]}),M.jsxs("li",{children:[M.jsx(be,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.verdi"}),":"," ",M.jsx(sa,{beløp:m.beloepPerMnd.verdi})]})]},m.indexKey))})]},i))})})};rv.__docgenInfo={description:"",methods:[],displayName:"BortfalteNaturalYtelser",props:{inntektsmelding:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd: number | null;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId: string | null;
  internArbeidsforholdId: string | null;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak | null;
  begrunnelse: string | null;
  saksbehandlersVurdering: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType | null;
  kildeSystem: string;
  startDatoPermisjon: string | null;
  aktiveNaturalytelser: Array<foreldrepenger_domene_iay_modell_NaturalYtelse>;
  refusjonsperioder: Array<foreldrepenger_domene_iay_modell_Refusjon>;
  innsendingsårsak: foreldrepenger_domene_iay_modell_kodeverk_InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: Array<string>;
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"internArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak | null",elements:[{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}]},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType | null",elements:[{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: foreldrepenger_domene_tid_DatoIntervallEntitet;
  beloepPerMnd: foreldrepenger_domene_typer_Beløp;
  type: foreldrepenger_domene_iay_modell_kodeverk_NaturalYtelseType;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!0}},{key:"type",value:{name:"union",raw:`| 'ELEKTRISK_KOMMUNIKASJON'
| 'AKSJER_UNDERKURS'
| 'LOSJI'
| 'KOST_DOEGN'
| 'BESOEKSREISER_HJEM'
| 'KOSTBESPARELSE_HJEM'
| 'RENTEFORDEL_LAAN'
| 'BIL'
| 'KOST_DAGER'
| 'BOLIG'
| 'FORSIKRINGER'
| 'FRI_TRANSPORT'
| 'OPSJONER'
| 'TILSKUDD_BARNEHAGE'
| 'ANNET'
| 'BEDRIFTSBARNEHAGE'
| 'YRKESBIL_KILOMETER'
| 'YRKESBIL_LISTEPRIS'
| 'UTENLANDSK_PENSJONSORDNING'
| '-'`,elements:[{name:"literal",value:"'ELEKTRISK_KOMMUNIKASJON'"},{name:"literal",value:"'AKSJER_UNDERKURS'"},{name:"literal",value:"'LOSJI'"},{name:"literal",value:"'KOST_DOEGN'"},{name:"literal",value:"'BESOEKSREISER_HJEM'"},{name:"literal",value:"'KOSTBESPARELSE_HJEM'"},{name:"literal",value:"'RENTEFORDEL_LAAN'"},{name:"literal",value:"'BIL'"},{name:"literal",value:"'KOST_DAGER'"},{name:"literal",value:"'BOLIG'"},{name:"literal",value:"'FORSIKRINGER'"},{name:"literal",value:"'FRI_TRANSPORT'"},{name:"literal",value:"'OPSJONER'"},{name:"literal",value:"'TILSKUDD_BARNEHAGE'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'BEDRIFTSBARNEHAGE'"},{name:"literal",value:"'YRKESBIL_KILOMETER'"},{name:"literal",value:"'YRKESBIL_LISTEPRIS'"},{name:"literal",value:"'UTENLANDSK_PENSJONSORDNING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_NaturalYtelse>",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  indexKey: string;
  refusjonsbeløp: foreldrepenger_domene_typer_Beløp;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!0}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_Refusjon>",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"'NY' | 'ENDRING' | '-'",elements:[{name:"literal",value:"'NY'"},{name:"literal",value:"'ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]}},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
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
  Inntektskategori: Inntektskategori;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatusEnum",required:!0}},{key:"BehandlingType",value:{name:"BehandlingTypeEnum",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakTypeEnum",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatusEnum",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseTypeEnum",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktorEnum",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsenEnum",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:`| 'BARN'
| 'FBARN'
| 'VOKSEN'
| 'ADVOKAT'
| 'ANNEN_F'`,elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}},{key:"Inntektskategori",value:{name:"Inntektskategori",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const av=({kildeSystem:e})=>{const l=gr();return M.jsx(zn,{tittel:l.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.heading"}),children:yS(e,l)})},yS=(e,l)=>{switch(e.toUpperCase()){case"":return l.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.ukjent"});case"NAV_NO":return l.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.nav"});case"ALTINN":return l.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.altinn"});default:return l.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.lps"})}};av.__docgenInfo={description:"",methods:[],displayName:"KildeSystem",props:{kildeSystem:{required:!0,tsType:{name:"string"},description:""}}};const tv=({inntektsmelding:e})=>{const l=gr();return M.jsxs(zn,{tittel:l.formatMessage({id:"InntektsmeldingFaktaPanel.kontaktperson.heading"}),children:[M.jsxs("span",{children:[M.jsx(be,{id:"InntektsmeldingFaktaPanel.kontaktperson.navn"}),": ",e.kontaktpersonNavn]}),M.jsxs("span",{children:[M.jsx(be,{id:"InntektsmeldingFaktaPanel.kontaktperson.telefon"}),": ",e.kontaktpersonNummer]})]})};tv.__docgenInfo={description:"",methods:[],displayName:"KontaktPerson",props:{inntektsmelding:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd: number | null;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId: string | null;
  internArbeidsforholdId: string | null;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak | null;
  begrunnelse: string | null;
  saksbehandlersVurdering: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType | null;
  kildeSystem: string;
  startDatoPermisjon: string | null;
  aktiveNaturalytelser: Array<foreldrepenger_domene_iay_modell_NaturalYtelse>;
  refusjonsperioder: Array<foreldrepenger_domene_iay_modell_Refusjon>;
  innsendingsårsak: foreldrepenger_domene_iay_modell_kodeverk_InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: Array<string>;
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"internArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak | null",elements:[{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}]},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType | null",elements:[{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: foreldrepenger_domene_tid_DatoIntervallEntitet;
  beloepPerMnd: foreldrepenger_domene_typer_Beløp;
  type: foreldrepenger_domene_iay_modell_kodeverk_NaturalYtelseType;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!0}},{key:"type",value:{name:"union",raw:`| 'ELEKTRISK_KOMMUNIKASJON'
| 'AKSJER_UNDERKURS'
| 'LOSJI'
| 'KOST_DOEGN'
| 'BESOEKSREISER_HJEM'
| 'KOSTBESPARELSE_HJEM'
| 'RENTEFORDEL_LAAN'
| 'BIL'
| 'KOST_DAGER'
| 'BOLIG'
| 'FORSIKRINGER'
| 'FRI_TRANSPORT'
| 'OPSJONER'
| 'TILSKUDD_BARNEHAGE'
| 'ANNET'
| 'BEDRIFTSBARNEHAGE'
| 'YRKESBIL_KILOMETER'
| 'YRKESBIL_LISTEPRIS'
| 'UTENLANDSK_PENSJONSORDNING'
| '-'`,elements:[{name:"literal",value:"'ELEKTRISK_KOMMUNIKASJON'"},{name:"literal",value:"'AKSJER_UNDERKURS'"},{name:"literal",value:"'LOSJI'"},{name:"literal",value:"'KOST_DOEGN'"},{name:"literal",value:"'BESOEKSREISER_HJEM'"},{name:"literal",value:"'KOSTBESPARELSE_HJEM'"},{name:"literal",value:"'RENTEFORDEL_LAAN'"},{name:"literal",value:"'BIL'"},{name:"literal",value:"'KOST_DAGER'"},{name:"literal",value:"'BOLIG'"},{name:"literal",value:"'FORSIKRINGER'"},{name:"literal",value:"'FRI_TRANSPORT'"},{name:"literal",value:"'OPSJONER'"},{name:"literal",value:"'TILSKUDD_BARNEHAGE'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'BEDRIFTSBARNEHAGE'"},{name:"literal",value:"'YRKESBIL_KILOMETER'"},{name:"literal",value:"'YRKESBIL_LISTEPRIS'"},{name:"literal",value:"'UTENLANDSK_PENSJONSORDNING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_NaturalYtelse>",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  indexKey: string;
  refusjonsbeløp: foreldrepenger_domene_typer_Beløp;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!0}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_Refusjon>",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"'NY' | 'ENDRING' | '-'",elements:[{name:"literal",value:"'NY'"},{name:"literal",value:"'ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]}},description:""}}};const lv=({inntektsmelding:e,fagsak:l,arbeidsgiverOpplysninger:a})=>{const t=`IM ${a.navn} - ${zd(e.motattDato)}`;return M.jsx(qu,{type:"button",onClick:()=>{Qh(l.saksnummer,e.journalpostId,e.dokumentId,t)},variant:"secondary",size:"small",icon:M.jsx(v0,{}),children:M.jsx(be,{id:"InntektsmeldingFaktaPanel.modal.trigger"})})};lv.__docgenInfo={description:"",methods:[],displayName:"LastNedPdfKnapp",props:{fagsak:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
| '6019'
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
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6019'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_vilkår_VilkårType | null",elements:[{name:"union",raw:`| 'FP_VK_1'
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
| '-'`,elements:[{name:"literal",value:"'INNVIRKNING'"},{name:"literal",value:"'INNVILGET_REDUSERT'"},{name:"literal",value:"'INNVILGET_UENDRET'"},{name:"literal",value:"'AVSLAG_FARESIGNAL'"},{name:"literal",value:"'AVSLAG_ANNET'"},{name:"literal",value:"'INGEN_INNVIRKNING'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}}]},required:!0}},{key:"harVergeIÅpenBehandling",value:{name:"boolean",required:!0}}]}},description:""},inntektsmelding:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd: number | null;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId: string | null;
  internArbeidsforholdId: string | null;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak | null;
  begrunnelse: string | null;
  saksbehandlersVurdering: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType | null;
  kildeSystem: string;
  startDatoPermisjon: string | null;
  aktiveNaturalytelser: Array<foreldrepenger_domene_iay_modell_NaturalYtelse>;
  refusjonsperioder: Array<foreldrepenger_domene_iay_modell_Refusjon>;
  innsendingsårsak: foreldrepenger_domene_iay_modell_kodeverk_InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: Array<string>;
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"internArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak | null",elements:[{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}]},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType | null",elements:[{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: foreldrepenger_domene_tid_DatoIntervallEntitet;
  beloepPerMnd: foreldrepenger_domene_typer_Beløp;
  type: foreldrepenger_domene_iay_modell_kodeverk_NaturalYtelseType;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!0}},{key:"type",value:{name:"union",raw:`| 'ELEKTRISK_KOMMUNIKASJON'
| 'AKSJER_UNDERKURS'
| 'LOSJI'
| 'KOST_DOEGN'
| 'BESOEKSREISER_HJEM'
| 'KOSTBESPARELSE_HJEM'
| 'RENTEFORDEL_LAAN'
| 'BIL'
| 'KOST_DAGER'
| 'BOLIG'
| 'FORSIKRINGER'
| 'FRI_TRANSPORT'
| 'OPSJONER'
| 'TILSKUDD_BARNEHAGE'
| 'ANNET'
| 'BEDRIFTSBARNEHAGE'
| 'YRKESBIL_KILOMETER'
| 'YRKESBIL_LISTEPRIS'
| 'UTENLANDSK_PENSJONSORDNING'
| '-'`,elements:[{name:"literal",value:"'ELEKTRISK_KOMMUNIKASJON'"},{name:"literal",value:"'AKSJER_UNDERKURS'"},{name:"literal",value:"'LOSJI'"},{name:"literal",value:"'KOST_DOEGN'"},{name:"literal",value:"'BESOEKSREISER_HJEM'"},{name:"literal",value:"'KOSTBESPARELSE_HJEM'"},{name:"literal",value:"'RENTEFORDEL_LAAN'"},{name:"literal",value:"'BIL'"},{name:"literal",value:"'KOST_DAGER'"},{name:"literal",value:"'BOLIG'"},{name:"literal",value:"'FORSIKRINGER'"},{name:"literal",value:"'FRI_TRANSPORT'"},{name:"literal",value:"'OPSJONER'"},{name:"literal",value:"'TILSKUDD_BARNEHAGE'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'BEDRIFTSBARNEHAGE'"},{name:"literal",value:"'YRKESBIL_KILOMETER'"},{name:"literal",value:"'YRKESBIL_LISTEPRIS'"},{name:"literal",value:"'UTENLANDSK_PENSJONSORDNING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_NaturalYtelse>",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  indexKey: string;
  refusjonsbeløp: foreldrepenger_domene_typer_Beløp;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!0}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_Refusjon>",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"'NY' | 'ENDRING' | '-'",elements:[{name:"literal",value:"'NY'"},{name:"literal",value:"'ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]}},description:""},arbeidsgiverOpplysninger:{required:!0,tsType:{name:"union",raw:`| (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: true; fødselsdato: string })
| (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: false })`,elements:[{name:"unknown"},{name:"unknown"}]},description:""}}};const iv=({inntektsmelding:e})=>{const l=gr();if(e.refusjonsperioder.length===0)return M.jsx(zn,{tittel:l.formatMessage({id:"InntektsmeldingFaktaPanel.refusjon.heading"}),children:e.refusjonPrMnd?M.jsx(sa,{beløp:e.refusjonPrMnd}):M.jsx(be,{tagName:"span",id:"InntektsmeldingFaktaPanel.refusjon.ingen"})});const a=[...e.refusjonsperioder].sort((t,i)=>new Date(t.fom).getTime()-new Date(i.fom).getTime());return M.jsxs(zn,{tittel:l.formatMessage({id:"InntektsmeldingFaktaPanel.refusjon.heading"}),children:[M.jsx("span",{children:"Krever refusjon"}),M.jsx(sa,{beløp:e.refusjonPrMnd??0}),M.jsx("span",{children:"Endringer i perioden:"}),M.jsx("ul",{children:a.map(t=>M.jsx("li",{children:M.jsx(be,{id:"InntektsmeldingFaktaPanel.refusjon.endring.periode",values:{kroner:M.jsx(sa,{beløp:t.refusjonsbeløp.verdi}),fom:M.jsx(Ja,{dateString:t.fom})}})},t.indexKey))})]})};iv.__docgenInfo={description:"",methods:[],displayName:"Refusjon",props:{inntektsmelding:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd: number | null;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId: string | null;
  internArbeidsforholdId: string | null;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak | null;
  begrunnelse: string | null;
  saksbehandlersVurdering: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType | null;
  kildeSystem: string;
  startDatoPermisjon: string | null;
  aktiveNaturalytelser: Array<foreldrepenger_domene_iay_modell_NaturalYtelse>;
  refusjonsperioder: Array<foreldrepenger_domene_iay_modell_Refusjon>;
  innsendingsårsak: foreldrepenger_domene_iay_modell_kodeverk_InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: Array<string>;
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"internArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak | null",elements:[{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}]},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType | null",elements:[{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: foreldrepenger_domene_tid_DatoIntervallEntitet;
  beloepPerMnd: foreldrepenger_domene_typer_Beløp;
  type: foreldrepenger_domene_iay_modell_kodeverk_NaturalYtelseType;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!0}},{key:"type",value:{name:"union",raw:`| 'ELEKTRISK_KOMMUNIKASJON'
| 'AKSJER_UNDERKURS'
| 'LOSJI'
| 'KOST_DOEGN'
| 'BESOEKSREISER_HJEM'
| 'KOSTBESPARELSE_HJEM'
| 'RENTEFORDEL_LAAN'
| 'BIL'
| 'KOST_DAGER'
| 'BOLIG'
| 'FORSIKRINGER'
| 'FRI_TRANSPORT'
| 'OPSJONER'
| 'TILSKUDD_BARNEHAGE'
| 'ANNET'
| 'BEDRIFTSBARNEHAGE'
| 'YRKESBIL_KILOMETER'
| 'YRKESBIL_LISTEPRIS'
| 'UTENLANDSK_PENSJONSORDNING'
| '-'`,elements:[{name:"literal",value:"'ELEKTRISK_KOMMUNIKASJON'"},{name:"literal",value:"'AKSJER_UNDERKURS'"},{name:"literal",value:"'LOSJI'"},{name:"literal",value:"'KOST_DOEGN'"},{name:"literal",value:"'BESOEKSREISER_HJEM'"},{name:"literal",value:"'KOSTBESPARELSE_HJEM'"},{name:"literal",value:"'RENTEFORDEL_LAAN'"},{name:"literal",value:"'BIL'"},{name:"literal",value:"'KOST_DAGER'"},{name:"literal",value:"'BOLIG'"},{name:"literal",value:"'FORSIKRINGER'"},{name:"literal",value:"'FRI_TRANSPORT'"},{name:"literal",value:"'OPSJONER'"},{name:"literal",value:"'TILSKUDD_BARNEHAGE'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'BEDRIFTSBARNEHAGE'"},{name:"literal",value:"'YRKESBIL_KILOMETER'"},{name:"literal",value:"'YRKESBIL_LISTEPRIS'"},{name:"literal",value:"'UTENLANDSK_PENSJONSORDNING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_NaturalYtelse>",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  indexKey: string;
  refusjonsbeløp: foreldrepenger_domene_typer_Beløp;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!0}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_Refusjon>",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"'NY' | 'ENDRING' | '-'",elements:[{name:"literal",value:"'NY'"},{name:"literal",value:"'ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]}},description:""}}};const uv=({startDatoPermisjon:e,ytelse:l})=>{const a=gr();return e?M.jsxs(zn,{tittel:a.formatMessage({id:"InntektsmeldingFaktaPanel.startDato.heading"},{ytelse:l.toLowerCase()}),children:[M.jsx("span",{children:e?M.jsx(Ja,{dateString:e}):"-"}),M.jsx("span",{children:M.jsx(be,{id:"InntektsmeldingFaktaPanel.startDato.fraArbeidsgiver"})})]}):null};uv.__docgenInfo={description:"",methods:[],displayName:"Startdato",props:{startDatoPermisjon:{required:!1,tsType:{name:"string"},description:""},ytelse:{required:!0,tsType:{name:"string"},description:""}}};const AS="_behandlingCircleIngen_x70wg_1",SS="_behandlingCircleDenne_x70wg_5",IS="_behandlingCircleAndre_x70wg_9",bS="_container_x70wg_13",LS="_ingenInntektsmeldinger_x70wg_20",Ca={behandlingCircleIngen:AS,behandlingCircleDenne:SS,behandlingCircleAndre:IS,container:bS,ingenInntektsmeldinger:LS},sv=({inntektsmelding:e,arbeidsgiverOpplysningerPerId:l,alleBehandlinger:a})=>{const{alleKodeverk:t,fagsak:i,behandling:s}=Xd(),m=gr();return M.jsxs(pl,{gap:"space-16",className:Ca.container,children:[M.jsxs(ua,{gap:"space-16",justify:"space-between",align:"start",children:[M.jsxs(eE,{level:"3",size:"small",children:[M.jsx(be,{id:"InntektsmeldingFaktaPanel.innsendingstidspunkt"})," ",M.jsx(ol,{dateTimeString:e.innsendingstidspunkt,separator:"kl"})]}),M.jsx(lv,{fagsak:i,inntektsmelding:e,arbeidsgiverOpplysninger:l[e.arbeidsgiverIdent]})]}),M.jsxs(tk,{columns:3,gap:"space-32",children:[M.jsx(bE,{arbeidsgiverOpplysninger:l[e.arbeidsgiverIdent],arbeidsgiverIdent:e.arbeidsgiverIdent}),M.jsx(zn,{tittel:m.formatMessage({id:"InntektsmeldingFaktaPanel.månedsinntekt.heading"}),children:M.jsx(sa,{beløp:e.inntektPrMnd})}),M.jsx(LE,{alleKodeverk:t,inntektsmelding:e,alleBehandlinger:a,behandling:s}),M.jsx(tv,{inntektsmelding:e}),M.jsx(uv,{ytelse:t.FagsakYtelseType.find(d=>d.kode===i.fagsakYtelseType)?.navn??"",startDatoPermisjon:e.startDatoPermisjon??void 0}),M.jsx(av,{kildeSystem:e.kildeSystem}),M.jsx(rv,{inntektsmelding:e,alleKodeverk:t}),M.jsx(iv,{inntektsmelding:e})]})]})};sv.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingInnhold",props:{inntektsmelding:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd: number | null;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId: string | null;
  internArbeidsforholdId: string | null;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak | null;
  begrunnelse: string | null;
  saksbehandlersVurdering: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType | null;
  kildeSystem: string;
  startDatoPermisjon: string | null;
  aktiveNaturalytelser: Array<foreldrepenger_domene_iay_modell_NaturalYtelse>;
  refusjonsperioder: Array<foreldrepenger_domene_iay_modell_Refusjon>;
  innsendingsårsak: foreldrepenger_domene_iay_modell_kodeverk_InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: Array<string>;
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"internArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak | null",elements:[{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}]},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType | null",elements:[{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: foreldrepenger_domene_tid_DatoIntervallEntitet;
  beloepPerMnd: foreldrepenger_domene_typer_Beløp;
  type: foreldrepenger_domene_iay_modell_kodeverk_NaturalYtelseType;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!0}},{key:"type",value:{name:"union",raw:`| 'ELEKTRISK_KOMMUNIKASJON'
| 'AKSJER_UNDERKURS'
| 'LOSJI'
| 'KOST_DOEGN'
| 'BESOEKSREISER_HJEM'
| 'KOSTBESPARELSE_HJEM'
| 'RENTEFORDEL_LAAN'
| 'BIL'
| 'KOST_DAGER'
| 'BOLIG'
| 'FORSIKRINGER'
| 'FRI_TRANSPORT'
| 'OPSJONER'
| 'TILSKUDD_BARNEHAGE'
| 'ANNET'
| 'BEDRIFTSBARNEHAGE'
| 'YRKESBIL_KILOMETER'
| 'YRKESBIL_LISTEPRIS'
| 'UTENLANDSK_PENSJONSORDNING'
| '-'`,elements:[{name:"literal",value:"'ELEKTRISK_KOMMUNIKASJON'"},{name:"literal",value:"'AKSJER_UNDERKURS'"},{name:"literal",value:"'LOSJI'"},{name:"literal",value:"'KOST_DOEGN'"},{name:"literal",value:"'BESOEKSREISER_HJEM'"},{name:"literal",value:"'KOSTBESPARELSE_HJEM'"},{name:"literal",value:"'RENTEFORDEL_LAAN'"},{name:"literal",value:"'BIL'"},{name:"literal",value:"'KOST_DAGER'"},{name:"literal",value:"'BOLIG'"},{name:"literal",value:"'FORSIKRINGER'"},{name:"literal",value:"'FRI_TRANSPORT'"},{name:"literal",value:"'OPSJONER'"},{name:"literal",value:"'TILSKUDD_BARNEHAGE'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'BEDRIFTSBARNEHAGE'"},{name:"literal",value:"'YRKESBIL_KILOMETER'"},{name:"literal",value:"'YRKESBIL_LISTEPRIS'"},{name:"literal",value:"'UTENLANDSK_PENSJONSORDNING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_NaturalYtelse>",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  indexKey: string;
  refusjonsbeløp: foreldrepenger_domene_typer_Beløp;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!0}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_Refusjon>",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"'NY' | 'ENDRING' | '-'",elements:[{name:"literal",value:"'NY'"},{name:"literal",value:"'ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]}},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"union",raw:`| (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: true; fødselsdato: string })
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
| '6019'
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
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6019'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_vilkår_VilkårType | null",elements:[{name:"union",raw:`| 'FP_VK_1'
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
| '-'`,elements:[{name:"literal",value:"'INNVIRKNING'"},{name:"literal",value:"'INNVILGET_REDUSERT'"},{name:"literal",value:"'INNVILGET_UENDRET'"},{name:"literal",value:"'AVSLAG_FARESIGNAL'"},{name:"literal",value:"'AVSLAG_ANNET'"},{name:"literal",value:"'INGEN_INNVIRKNING'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"ugunstAksjonspunkt",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"behandlingKoet",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}],raw:"BehandlingAppKontekst[]"},description:""}}};const DS={"InntektsmeldingFaktaPanel.ingen":"Ingen inntektsmeldinger er registrert","InntektsmeldingFaktaPanel.tabell.header.innsendt":"Innsendt","InntektsmeldingFaktaPanel.tabell.header.arbeidsgiver":"Arbeidsgiver","InntektsmeldingFaktaPanel.tabell.header.skjæringstidspunkt":"Startdato","InntektsmeldingFaktaPanel.tabell.header.månedsinntekt":"Månedsi.","InntektsmeldingFaktaPanel.tabell.header.behandling":"Behandling","InntektsmeldingFaktaPanel.tabell.cell.behandling.denne":"Denne","InntektsmeldingFaktaPanel.tabell.cell.behandling.andre":"Andre","InntektsmeldingFaktaPanel.tabell.cell.behandling.ingen":"Ingen","InntektsmeldingFaktaPanel.modal.heading":"All informasjon fra PDF’en er tilgjengelig i faktapanelet","InntektsmeldingFaktaPanel.modal.trigger":"Åpne PDF","InntektsmeldingFaktaPanel.modal.body":"PDF’en du skal åpne inneholder ikke noe annet enn det som står i faktapanelet. Du kan likevel åpne den hvis du ønsker det.","InntektsmeldingFaktaPanel.modal.button.primary":"Last ned som PDF","InntektsmeldingFaktaPanel.modal.button.secondary":"Avbryt","InntektsmeldingFaktaPanel.behandling.heading":"Behandling","InntektsmeldingFaktaPanel.behandling.bruktKunIDenne":"Brukt i denne behandlingen","InntektsmeldingFaktaPanel.behandling.ikkeBruktINoen":"Ikke brukt i noen behandlinger","InntektsmeldingFaktaPanel.behandling.bruktIAndre":"Brukt i andre behandlinger","InntektsmeldingFaktaPanel.behandling.bruktIDenneOgFlere":"Brukt i denne og andre behandlinger","InntektsmeldingFaktaPanel.behandling.opprettet":"Opprettet","InntektsmeldingFaktaPanel.behandling.avsluttet":"Avsluttet","InntektsmeldingFaktaPanel.innsendingstidspunkt":"Inntektsmelding sendt","InntektsmeldingFaktaPanel.arbeidsgiver.heading":"Arbeidsgiver","InntektsmeldingFaktaPanel.arbeidsgiver.navn":"Virksomhetsnavn","InntektsmeldingFaktaPanel.arbeidsgiver.underenhet":"Org.nr. for underenhet","InntektsmeldingFaktaPanel.kontaktperson.heading":"Kontaktperson fra arbeidsgiver","InntektsmeldingFaktaPanel.kontaktperson.navn":"Navn","InntektsmeldingFaktaPanel.kontaktperson.telefon":"Telefonnummer","InntektsmeldingFaktaPanel.månedsinntekt.heading":"Månedsinntekt","InntektsmeldingFaktaPanel.startDato.heading":"Første dag med {ytelse}","InntektsmeldingFaktaPanel.startDato.fraArbeidsgiver":"Oppgitt av arbeidsgiver","InntektsmeldingFaktaPanel.kilde.heading":"Kilde","InntektsmeldingFaktaPanel.kilde.nav":"Nav","InntektsmeldingFaktaPanel.kilde.ukjent":"Ukjent","InntektsmeldingFaktaPanel.kilde.altinn":"Altinn","InntektsmeldingFaktaPanel.kilde.lps":"Arbeidsgiver sitt lønns- og personalsystem(LPS)","InntektsmeldingFaktaPanel.refusjon.heading":"Refusjon","InntektsmeldingFaktaPanel.refusjon.ingen":"Ingen refusjon","InntektsmeldingFaktaPanel.refusjon.endring.periode":"Refusjonsbeløp på {kroner} fra {fom}","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.heading":"Naturalytelser som faller bort","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.ingen":"Ingen","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.fom":"Fra og med","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.tom":"Til og med","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.verdi":"Verdi pr måned"},Cd=Hn(DS),wu=({arbeidsgiverOpplysningerPerId:e,alleBehandlinger:l,inntektsmeldinger:a})=>{const{behandling:t}=Xd(),[i,s]=K.useState({orderBy:"innsendingstidspunkt",direction:"descending"}),m=_=>{s(i&&_===i.orderBy&&i.direction==="descending"?void 0:{orderBy:_,direction:i&&_===i.orderBy&&i.direction==="ascending"?"descending":"ascending"})},d=i?KS({inntektsmeldinger:a,arbeidsgiverOpplysningerPerId:e,sortKey:i.orderBy,behandling:t}):a,v=i?.direction==="ascending"?d:d.toReversed();return v.length===0?M.jsx(Lm,{value:Cd,children:M.jsxs(ua,{gap:"space-8",justify:"center",align:"center",className:Ca.ingenInntektsmeldinger,children:[M.jsx(ml,{children:M.jsx(be,{id:"InntektsmeldingFaktaPanel.ingen"})}),M.jsx(p0,{})]})}):M.jsx(Lm,{value:Cd,children:M.jsxs(Me,{sort:i,onSortChange:_=>m(_),children:[M.jsx(Me.Header,{children:M.jsxs(Me.Row,{children:[M.jsx(Me.ColumnHeader,{sortKey:"innsendingstidspunkt",sortable:!0,children:M.jsx(be,{id:"InntektsmeldingFaktaPanel.tabell.header.innsendt"})}),M.jsx(Me.ColumnHeader,{sortKey:"arbeidsgiverIdent",sortable:!0,children:M.jsx(be,{id:"InntektsmeldingFaktaPanel.tabell.header.arbeidsgiver"})}),M.jsx(Me.ColumnHeader,{sortKey:"startDatoPermisjon",sortable:!0,children:M.jsx(be,{id:"InntektsmeldingFaktaPanel.tabell.header.skjæringstidspunkt"})}),M.jsx(Me.ColumnHeader,{sortKey:"inntektPrMnd",sortable:!0,children:M.jsx(be,{id:"InntektsmeldingFaktaPanel.tabell.header.månedsinntekt"})}),M.jsx(Me.ColumnHeader,{sortKey:"tilknyttedeBehandlingIder",sortable:!0,children:M.jsx(be,{id:"InntektsmeldingFaktaPanel.tabell.header.behandling"})}),M.jsx(Me.HeaderCell,{})]})}),M.jsx(Me.Body,{children:v.map(_=>M.jsxs(Me.ExpandableRow,{expandOnRowClick:!0,contentGutter:"none",togglePlacement:"right",content:M.jsx(sv,{alleBehandlinger:l,arbeidsgiverOpplysningerPerId:e,inntektsmelding:_}),children:[M.jsx(Me.DataCell,{children:M.jsx(ol,{dateTimeString:_.innsendingstidspunkt,separator:"kl"})}),M.jsx(Me.DataCell,{children:e[_.arbeidsgiverIdent]?.navn??"-"}),M.jsx(Me.DataCell,{children:_.startDatoPermisjon?M.jsx(Ja,{dateString:_.startDatoPermisjon}):"-"}),M.jsx(Me.DataCell,{children:M.jsx(sa,{beløp:_.inntektPrMnd})}),M.jsx(Me.DataCell,{children:M.jsx(PS,{behandling:t,inntektsmelding:_})})]},`${_.journalpostId}-${_.internArbeidsforholdId}`))})]})})},KS=({inntektsmeldinger:e,arbeidsgiverOpplysningerPerId:l,sortKey:a,behandling:t})=>a==="arbeidsgiverIdent"?e.slice().sort((i,s)=>{const m=l[i.arbeidsgiverIdent]?.navn,d=l[s.arbeidsgiverIdent]?.navn;return ou(m,d)}):a==="tilknyttedeBehandlingIder"?e.slice().sort((i,s)=>{const m=Gu({behandling:t,inntektsmelding:i}),d=Gu({behandling:t,inntektsmelding:s});return ou(m,d)}):e.slice().sort((i,s)=>{const m=i[a]??void 0,d=s[a]??void 0;return ou(m,d)}),ou=(e,l)=>e===void 0?-1:l===void 0?1:e<l?-1:e>l?1:0,PS=({behandling:e,inntektsmelding:l})=>{const a=Gu({behandling:e,inntektsmelding:l});return a==="DENNE"?M.jsxs(ua,{gap:"space-4",align:"center",children:[M.jsx(xi,{className:Ca.behandlingCircleDenne}),M.jsx(be,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.denne"})]}):a==="ANDRE"?M.jsxs(ua,{gap:"space-4",align:"center",children:[M.jsx(xi,{className:Ca.behandlingCircleAndre}),M.jsx(be,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.andre"})]}):M.jsxs(ua,{gap:"space-4",align:"center",children:[M.jsx(xi,{className:Ca.behandlingCircleIngen}),M.jsx(be,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.ingen"})]})},Gu=({behandling:e,inntektsmelding:l})=>l.tilknyttedeBehandlingIder.includes(e.uuid)?"DENNE":l.tilknyttedeBehandlingIder.length>0?"ANDRE":"INGEN";wu.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingFaktaIndex",props:{inntektsmeldinger:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd: number | null;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId: string | null;
  internArbeidsforholdId: string | null;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak | null;
  begrunnelse: string | null;
  saksbehandlersVurdering: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType | null;
  kildeSystem: string;
  startDatoPermisjon: string | null;
  aktiveNaturalytelser: Array<foreldrepenger_domene_iay_modell_NaturalYtelse>;
  refusjonsperioder: Array<foreldrepenger_domene_iay_modell_Refusjon>;
  innsendingsårsak: foreldrepenger_domene_iay_modell_kodeverk_InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: Array<string>;
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"internArbeidsforholdId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:"foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak | null",elements:[{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}]},{name:"null"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"saksbehandlersVurdering",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType | null",elements:[{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: foreldrepenger_domene_tid_DatoIntervallEntitet;
  beloepPerMnd: foreldrepenger_domene_typer_Beløp;
  type: foreldrepenger_domene_iay_modell_kodeverk_NaturalYtelseType;
  indexKey: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!0}},{key:"type",value:{name:"union",raw:`| 'ELEKTRISK_KOMMUNIKASJON'
| 'AKSJER_UNDERKURS'
| 'LOSJI'
| 'KOST_DOEGN'
| 'BESOEKSREISER_HJEM'
| 'KOSTBESPARELSE_HJEM'
| 'RENTEFORDEL_LAAN'
| 'BIL'
| 'KOST_DAGER'
| 'BOLIG'
| 'FORSIKRINGER'
| 'FRI_TRANSPORT'
| 'OPSJONER'
| 'TILSKUDD_BARNEHAGE'
| 'ANNET'
| 'BEDRIFTSBARNEHAGE'
| 'YRKESBIL_KILOMETER'
| 'YRKESBIL_LISTEPRIS'
| 'UTENLANDSK_PENSJONSORDNING'
| '-'`,elements:[{name:"literal",value:"'ELEKTRISK_KOMMUNIKASJON'"},{name:"literal",value:"'AKSJER_UNDERKURS'"},{name:"literal",value:"'LOSJI'"},{name:"literal",value:"'KOST_DOEGN'"},{name:"literal",value:"'BESOEKSREISER_HJEM'"},{name:"literal",value:"'KOSTBESPARELSE_HJEM'"},{name:"literal",value:"'RENTEFORDEL_LAAN'"},{name:"literal",value:"'BIL'"},{name:"literal",value:"'KOST_DAGER'"},{name:"literal",value:"'BOLIG'"},{name:"literal",value:"'FORSIKRINGER'"},{name:"literal",value:"'FRI_TRANSPORT'"},{name:"literal",value:"'OPSJONER'"},{name:"literal",value:"'TILSKUDD_BARNEHAGE'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'BEDRIFTSBARNEHAGE'"},{name:"literal",value:"'YRKESBIL_KILOMETER'"},{name:"literal",value:"'YRKESBIL_LISTEPRIS'"},{name:"literal",value:"'UTENLANDSK_PENSJONSORDNING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"indexKey",value:{name:"string",required:!0}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_NaturalYtelse>",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  indexKey: string;
  refusjonsbeløp: foreldrepenger_domene_typer_Beløp;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!0}},{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!0}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_Refusjon>",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"'NY' | 'ENDRING' | '-'",elements:[{name:"literal",value:"'NY'"},{name:"literal",value:"'ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]}}],raw:"Inntektsmelding[]"},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"union",raw:`| (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: true; fødselsdato: string })
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
| '6019'
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
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6019'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_vilkår_VilkårType | null",elements:[{name:"union",raw:`| 'FP_VK_1'
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
| '-'`,elements:[{name:"literal",value:"'INNVIRKNING'"},{name:"literal",value:"'INNVILGET_REDUSERT'"},{name:"literal",value:"'INNVILGET_UENDRET'"},{name:"literal",value:"'AVSLAG_FARESIGNAL'"},{name:"literal",value:"'AVSLAG_ANNET'"},{name:"literal",value:"'INGEN_INNVIRKNING'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"ugunstAksjonspunkt",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"behandlingKoet",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}],raw:"BehandlingAppKontekst[]"},description:""}}};const mu={innsendingstidspunkt:"2024-08-08T00:00:00",kildeSystem:"Altinn",aktiveNaturalytelser:[],refusjonsperioder:[],innsendingsårsak:"NY",arbeidsgiverIdent:"1",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"},VS={title:"fakta/fakta-inntektsmelding",component:wu,decorators:[Wh],render:e=>M.jsx(wu,{...e})},xa={args:{alleBehandlinger:[{uuid:"UUID1",type:"BT-002",opprettet:"2024-07-13",avsluttet:"2024-08-13"},{uuid:"UUID2",type:"BT-003",opprettet:"2024-07-14",avsluttet:"2024-08-14"},{uuid:"UUID3",type:"BT-004",opprettet:"2024-07-15",avsluttet:"2024-08-15"}],arbeidsgiverOpplysningerPerId:{1:{navn:"Rema 1000"},2:{navn:"Kiwi"},3:{navn:"Meny"}},behandling:{uuid:"UUID2"},inntektsmeldinger:[{...mu,tilknyttedeBehandlingIder:["UUID1"],inntektPrMnd:10000.5,innsendingstidspunkt:"2024-07-20T00:00:00",startDatoPermisjon:"2024-10-10",refusjonPrMnd:null,journalpostId:"1",refusjonsperioder:[{refusjonsbeløp:{verdi:5e3},indexKey:"1",fom:"2024-01-10"},{refusjonsbeløp:{verdi:3e3},indexKey:"2",fom:"2024-01-09"}],årsak:null,begrunnelse:null,saksbehandlersVurdering:null},{...mu,tilknyttedeBehandlingIder:["UUID1","UUID2"],inntektPrMnd:2e4,innsendingstidspunkt:"2024-08-01T00:00:00",kildeSystem:"FS22",refusjonPrMnd:null,arbeidsgiverIdent:"2",journalpostId:"2",årsak:null,begrunnelse:null,saksbehandlersVurdering:null,startDatoPermisjon:null},{...mu,tilknyttedeBehandlingIder:[],inntektPrMnd:3e4,innsendingstidspunkt:"2024-09-10T00:00:00",innsendingsårsak:"ENDRING",kildeSystem:"NAV_NO",startDatoPermisjon:"2024-11-11",arbeidsgiverIdent:"3",journalpostId:"3",aktiveNaturalytelser:[{periode:{fomDato:"2024-01-09",tomDato:"2024-10-09"},type:du.ELEKTRISK_KOMMUNIKASJON,beloepPerMnd:{verdi:999},indexKey:"1"},{periode:{fomDato:"2024-01-11",tomDato:"2024-10-11"},type:du.LOSJI,beloepPerMnd:{verdi:10},indexKey:"2"}],årsak:null,begrunnelse:null,saksbehandlersVurdering:null}]}},Qt={args:{...xa.args,inntektsmeldinger:[]}};xa.parameters={...xa.parameters,docs:{...xa.parameters?.docs,source:{originalSource:`{
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
      refusjonPrMnd: null,
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
      }],
      årsak: null,
      begrunnelse: null,
      saksbehandlersVurdering: null
    }, {
      ...inntektsmeldingmal,
      tilknyttedeBehandlingIder: ['UUID1', 'UUID2'],
      inntektPrMnd: 20000,
      innsendingstidspunkt: '2024-08-01T00:00:00',
      kildeSystem: 'FS22',
      refusjonPrMnd: null,
      arbeidsgiverIdent: '2',
      journalpostId: '2',
      årsak: null,
      begrunnelse: null,
      saksbehandlersVurdering: null,
      startDatoPermisjon: null
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
      }],
      årsak: null,
      begrunnelse: null,
      saksbehandlersVurdering: null
    }]
  }
}`,...xa.parameters?.docs?.source}}};Qt.parameters={...Qt.parameters,docs:{...Qt.parameters?.docs,source:{originalSource:`{
  args: {
    ...InntektsmeldingDefault.args,
    inntektsmeldinger: []
  }
}`,...Qt.parameters?.docs?.source}}};const MS=["InntektsmeldingDefault","IngenInntektsmeldinger"];export{Qt as IngenInntektsmeldinger,xa as InntektsmeldingDefault,MS as __namedExportsOrder,VS as default};
