import{g as of,r as S,u as pt,_ as Bd,s as qd,c as uf,a as Ne,R as z,b as l0,d as mr,T as o0,S as Xr,e as df,f as gf,h as u0,i as wn,j as d0,k as K,l as za,m as ff,P as Dd,w as g0}from"./iframe-DR2vyFF0.js";import{r as f0}from"./index-3tpLX25J.js";var cf=f0();const Md=of(cf);function c0(e,i){var a=e.values,r=Bd(e,["values"]),s=i.values,o=Bd(i,["values"]);return qd(s,a)&&qd(r,o)}function mf(e){var i=pt(),a=i.formatMessage,r=i.textComponent,s=r===void 0?S.Fragment:r,o=e.id,d=e.description,g=e.defaultMessage,c=e.values,m=e.children,h=e.tagName,y=h===void 0?s:h,_=e.ignoreTag,T={id:o,description:d,defaultMessage:g},P=a(T,c,{ignoreTag:_});return typeof m=="function"?m(Array.isArray(P)?P:[P]):y?S.createElement(y,null,P):S.createElement(S.Fragment,null,P)}mf.displayName="FormattedMessage";var Ie=S.memo(mf,c0);Ie.displayName="MemoizedFormattedMessage";var gl=(e=>(e.ELEKTRISK_KOMMUNIKASJON="ELEKTRISK_KOMMUNIKASJON",e.LOSJI="LOSJI",e))(gl||{});const m0=(e,i,a)=>`/fpsak/api/dokument/hent-dokument?saksnummer=${e}&journalpostId=${i}&dokumentId=${a}`,p0=(e,i,a,r)=>{const s=m0(e,i,a),o=`${i}-${a}`;r&&h0(s,o,r)},h0=(e,i,a)=>{const r=window.open(e,i);r&&setTimeout(()=>{r.document.title=a},1e3)},pr=e=>uf({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var k0=function(e,i){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)i.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]]);return a};const fl=S.forwardRef((e,i)=>{var{className:a,size:r="medium",as:s="p",spacing:o,truncate:d,weight:g="regular",align:c,visuallyHidden:m,textColor:h}=e,y=k0(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:_}=Ne();return z.createElement(s,Object.assign({},y,{ref:i,className:_(a,"navds-body-long",`navds-body-long--${r}`,pr({spacing:o,truncate:d,weight:g,align:c,visuallyHidden:m,textColor:h}))}))});var v0=function(e,i){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)i.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]]);return a};const gi=S.forwardRef((e,i)=>{var{className:a,size:r="medium",as:s="p",spacing:o,truncate:d,weight:g="regular",align:c,visuallyHidden:m,textColor:h}=e,y=v0(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:_}=Ne();return z.createElement(s,Object.assign({},y,{ref:i,className:_(a,"navds-body-short",`navds-body-short--${r}`,pr({spacing:o,truncate:d,weight:g,align:c,visuallyHidden:m,textColor:h}))}))});var y0=function(e,i){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)i.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]]);return a};const b0=S.forwardRef((e,i)=>{var{className:a,size:r="medium",spacing:s,uppercase:o,as:d="p",truncate:g,weight:c="regular",align:m,visuallyHidden:h,textColor:y}=e,_=y0(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:T}=Ne();return z.createElement(d,Object.assign({},_,{ref:i,className:T(a,"navds-detail",pr({spacing:s,truncate:g,weight:c,align:m,visuallyHidden:h,textColor:y,uppercase:o}),{"navds-detail--small":r==="small"})}))});var E0=function(e,i){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)i.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]]);return a};const T0=S.forwardRef((e,i)=>{var{children:a,className:r,size:s,spacing:o,as:d="p",showIcon:g=!1}=e,c=E0(e,["children","className","size","spacing","as","showIcon"]);const{cn:m}=Ne();return z.createElement(d,Object.assign({},c,{ref:i,className:m("navds-error-message","navds-label",r,pr({spacing:o}),{"navds-label--small":s==="small","navds-error-message--show-icon":g})}),g&&z.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},z.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),a)});var _0=function(e,i){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)i.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]]);return a};const pf=S.forwardRef((e,i)=>{var{level:a="1",size:r,className:s,as:o,spacing:d,align:g,visuallyHidden:c,textColor:m}=e,h=_0(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:y}=Ne(),_=o??`h${a}`;return z.createElement(_,Object.assign({},h,{ref:i,className:y(s,"navds-heading",`navds-heading--${r}`,pr({spacing:d,align:g,visuallyHidden:c,textColor:m}))}))});var w0=function(e,i){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)i.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]]);return a};S.forwardRef((e,i)=>{var{className:a,spacing:r,as:s="p"}=e,o=w0(e,["className","spacing","as"]);const{cn:d}=Ne();return z.createElement(s,Object.assign({},o,{ref:i,className:d(a,"navds-ingress",{"navds-typo--spacing":!!r})}))});var A0=function(e,i){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)i.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]]);return a};const Hl=S.forwardRef((e,i)=>{var{className:a,size:r="medium",as:s="label",spacing:o,visuallyHidden:d,textColor:g}=e,c=A0(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:m}=Ne();return z.createElement(s,Object.assign({},c,{ref:i,className:m(a,"navds-label",pr({spacing:o,visuallyHidden:d,textColor:g}),{"navds-label--small":r==="small"})}))});function Zr(e,i){const a=Object.entries(e).filter(([r])=>!i.includes(r));return Object.fromEntries(a)}let Ld=0;function R0(e){const[i,a]=S.useState(e),r=e||i;return S.useEffect(()=>{i==null&&(Ld+=1,a(`aksel-id-${Ld}`))},[i]),r}const Fd=z.useId;function fi(e){var i;if(Fd!==void 0){const a=Fd();return e??a.replace(/(:)/g,"")}return(i=R0(e))!==null&&i!==void 0?i:""}function Kd(e,i=[]){const a=S.useRef(e);return S.useEffect(()=>{a.current=e}),S.useCallback((...r)=>{var s;return(s=a.current)===null||s===void 0?void 0:s.call(a,...r)},i)}function hf({value:e,defaultValue:i,onChange:a}){const r=Kd(a),[s,o]=S.useState(i),d=e!==void 0,g=d?e:s,c=Kd(m=>{const y=typeof m=="function"?m(g):m;d||o(y),r(y)},[d,r,g]);return[g,c]}let Cd=0;function S0(e){const[i,a]=S.useState(e),r=e||i;return S.useEffect(()=>{i==null&&(Cd+=1,a(`aksel-icon-${Cd}`))},[i]),r}const Vd=z.useId;function ht(e){var i;return Vd!==void 0?Vd().replace(/(:)/g,""):(i=S0(e))!==null&&i!==void 0?i:""}var I0=function(e,i){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)i.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]]);return a};const j0=S.forwardRef((e,i)=>{var{title:a,titleId:r}=e,s=I0(e,["title","titleId"]);let o=ht();return o=a?r||"title-"+o:void 0,S.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},s),a?S.createElement("title",{id:o},a):null,S.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13.672 3.825a.75.75 0 0 1 .791.085l7 5.5a.75.75 0 0 1 0 1.18l-7 5.5a.75.75 0 0 1-1.213-.59v-2.724a9.1 9.1 0 0 0-2.63.565c-2.284.87-3.759 2.562-4.671 4.077a12.4 12.4 0 0 0-.957 1.965 10 10 0 0 0-.263.792l-.001.007A.75.75 0 0 1 3.25 20c0-1.654.322-3.941 1.224-6.123.903-2.184 2.413-4.32 4.823-5.558 1.133-.581 2.445-.954 3.953-1.046V4.5a.75.75 0 0 1 .422-.675M5.505 15.412c1.038-1.344 2.519-2.688 4.582-3.473 1.136-.432 2.435-.689 3.913-.689a.75.75 0 0 1 .75.75v1.957L19.786 10 14.75 6.043V8a.75.75 0 0 1-.75.75c-1.606 0-2.927.344-4.018.904-1.996 1.025-3.306 2.824-4.121 4.796q-.197.479-.356.962",clipRule:"evenodd"}))});var N0=function(e,i){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)i.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]]);return a};const O0=S.forwardRef((e,i)=>{var{title:a,titleId:r}=e,s=N0(e,["title","titleId"]);let o=ht();return o=a?r||"title-"+o:void 0,S.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},s),a?S.createElement("title",{id:o},a):null,S.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.47 21.03a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22V9.5a.75.75 0 0 0-1.5 0v9.19l-2.22-2.22a.75.75 0 1 0-1.06 1.06zM4.03 7.53l2.22-2.22v9.19a.75.75 0 0 0 1.5 0V5.31l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06",clipRule:"evenodd"}))});var P0=function(e,i){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)i.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]]);return a};const x0=S.forwardRef((e,i)=>{var{title:a,titleId:r}=e,s=P0(e,["title","titleId"]);let o=ht();return o=a?r||"title-"+o:void 0,S.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},s),a?S.createElement("title",{id:o},a):null,S.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var B0=function(e,i){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)i.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]]);return a};const $s=S.forwardRef((e,i)=>{var{title:a,titleId:r}=e,s=B0(e,["title","titleId"]);let o=ht();return o=a?r||"title-"+o:void 0,S.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},s),a?S.createElement("title",{id:o},a):null,S.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.5 12C1.5 6.201 6.201 1.5 12 1.5S22.5 6.201 22.5 12 17.799 22.5 12 22.5 1.5 17.799 1.5 12",clipRule:"evenodd"}))});var q0=function(e,i){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)i.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]]);return a};const D0=S.forwardRef((e,i)=>{var{title:a,titleId:r}=e,s=q0(e,["title","titleId"]);let o=ht();return o=a?r||"title-"+o:void 0,S.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},s),a?S.createElement("title",{id:o},a):null,S.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.1 2.05a.75.75 0 1 0-1.2.9l.98 1.306a.25.25 0 0 1-.024.327l-.773.773a1.75 1.75 0 0 0-.163 2.288l.98 1.306a.75.75 0 0 0 1.2-.9l-.98-1.306a.25.25 0 0 1 .024-.327l.773-.773a1.75 1.75 0 0 0 .163-2.288zm1.75 5.007a.75.75 0 0 1 .83-.66c1.33.152 2.506.417 3.372.776.431.178.826.396 1.125.666.298.269.573.659.573 1.161q0 .404-.032.8.224-.065.446-.092c.556-.069 1.177.037 1.634.494.553.552.592 1.332.43 1.98-.166.665-.57 1.341-1.137 1.91-.568.567-1.244.97-1.909 1.136q-.241.06-.497.078.401.165.733.358c.657.38 1.332.977 1.332 1.836 0 .695-.45 1.219-.933 1.576-.498.369-1.172.669-1.936.907-1.539.481-3.618.767-5.881.767s-4.342-.286-5.88-.767c-.765-.238-1.439-.538-1.937-.907-.484-.357-.933-.881-.933-1.576 0-.859.675-1.457 1.332-1.836.476-.276 1.068-.512 1.739-.709C5.028 13.38 4.25 11.272 4.25 9c0-.467.238-.838.51-1.102.269-.262.624-.474 1.007-.647.771-.35 1.817-.614 3.004-.784a.75.75 0 0 1 .211 1.485c-1.112.159-2.004.397-2.596.665-.299.135-.482.26-.58.356L5.779 9c.06.066.194.178.462.314.333.168.795.332 1.374.474 1.155.284 2.688.462 4.385.462s3.23-.178 4.385-.462c.579-.142 1.04-.306 1.374-.474.268-.136.402-.248.462-.314l-.049-.048c-.123-.11-.345-.25-.693-.393-.69-.286-1.716-.529-2.969-.672a.75.75 0 0 1-.66-.83m4.623 6.754a9.3 9.3 0 0 0 .925-2.204c.355-.251.693-.379.95-.41.26-.033.36.036.39.066.033.033.129.18.035.555-.09.36-.334.804-.742 1.212-.409.409-.854.653-1.213.743a1.1 1.1 0 0 1-.345.038m-.422-2.983c-.387.16-.829.299-1.308.417-1.296.319-2.953.505-4.743.505s-3.447-.186-4.743-.505a9 9 0 0 1-1.308-.417c.707 3.173 3.21 5.422 6.051 5.422 2.84 0 5.344-2.25 6.051-5.422M12 17.75c1.665 0 3.186-.582 4.43-1.565.976.214 1.736.487 2.237.777.565.326.583.538.583.538 0 .003 0 .031-.04.093-.044.068-.13.163-.284.277-.311.23-.81.468-1.493.682-1.357.424-3.278.698-5.433.698s-4.076-.274-5.433-.698c-.683-.214-1.181-.452-1.493-.682a1.2 1.2 0 0 1-.284-.277c-.04-.062-.04-.09-.04-.093 0 0 .018-.212.583-.538.501-.29 1.262-.563 2.236-.777 1.245.983 2.766 1.565 4.431 1.565",clipRule:"evenodd"}))});var M0=function(e,i){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)i.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]]);return a};const kf=S.forwardRef((e,i)=>{var{title:a,titleId:r}=e,s=M0(e,["title","titleId"]);let o=ht();return o=a?r||"title-"+o:void 0,S.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},s),a?S.createElement("title",{id:o},a):null,S.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10.5 3.25a7.25 7.25 0 1 0 4.569 12.88l5.411 5.41a.75.75 0 1 0 1.06-1.06l-5.41-5.411A7.25 7.25 0 0 0 10.5 3.25M4.75 10.5a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0",clipRule:"evenodd"}))});var L0=function(e,i){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)i.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]]);return a};const F0=S.forwardRef((e,i)=>{var{title:a,titleId:r}=e,s=L0(e,["title","titleId"]);let o=ht();return o=a?r||"title-"+o:void 0,S.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},s),a?S.createElement("title",{id:o},a):null,S.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 18.53a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V6a.75.75 0 0 1 1.5 0v10.19l2.22-2.22a.75.75 0 1 1 1.06 1.06zM2.75 6.25a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM2 17a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 2 17",clipRule:"evenodd"}))});var K0=function(e,i){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)i.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]]);return a};const C0=S.forwardRef((e,i)=>{var{title:a,titleId:r}=e,s=K0(e,["title","titleId"]);let o=ht();return o=a?r||"title-"+o:void 0,S.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},s),a?S.createElement("title",{id:o},a):null,S.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 5.47a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 1 0 1.06 1.06l2.22-2.22V18a.75.75 0 0 0 1.5 0V7.81l2.22 2.22a.75.75 0 1 0 1.06-1.06zM2.75 17.75a.75.75 0 0 1 0-1.5h9.5a.75.75 0 0 1 0 1.5zm0-5a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5zM2 7c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5A.75.75 0 0 0 2 7",clipRule:"evenodd"}))});var V0=function(e,i){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)i.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]]);return a};const Hd=S.forwardRef((e,i)=>{var{title:a,titleId:r}=e,s=V0(e,["title","titleId"]);let o=ht();return o=a?r||"title-"+o:void 0,S.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},s),a?S.createElement("title",{id:o},a):null,S.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});function $l(e,i,{checkForDefaultPrevented:a=!0}={}){return function(s){if(e?.(s),a===!1||!s.defaultPrevented)return i?.(s)}}const[LR,H0]=l0({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"});function Gs(e){return(i={})=>{const a=i.width?String(i.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}}function Mr(e){return(i,a)=>{const r=a?.context?String(a.context):"standalone";let s;if(r==="formatting"&&e.formattingValues){const d=e.defaultFormattingWidth||e.defaultWidth,g=a?.width?String(a.width):d;s=e.formattingValues[g]||e.formattingValues[d]}else{const d=e.defaultWidth,g=a?.width?String(a.width):e.defaultWidth;s=e.values[g]||e.values[d]}const o=e.argumentCallback?e.argumentCallback(i):i;return s[o]}}function Lr(e){return(i,a={})=>{const r=a.width,s=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],o=i.match(s);if(!o)return null;const d=o[0],g=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(g)?G0(g,y=>y.test(d)):$0(g,y=>y.test(d));let m;m=e.valueCallback?e.valueCallback(c):c,m=a.valueCallback?a.valueCallback(m):m;const h=i.slice(d.length);return{value:m,rest:h}}}function $0(e,i){for(const a in e)if(Object.prototype.hasOwnProperty.call(e,a)&&i(e[a]))return a}function G0(e,i){for(let a=0;a<e.length;a++)if(i(e[a]))return a}function U0(e){return(i,a={})=>{const r=i.match(e.matchPattern);if(!r)return null;const s=r[0],o=i.match(e.parsePattern);if(!o)return null;let d=e.valueCallback?e.valueCallback(o[0]):o[0];d=a.valueCallback?a.valueCallback(d):d;const g=i.slice(s.length);return{value:d,rest:g}}}const Y0={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},W0=(e,i,a)=>{let r;const s=Y0[e];return typeof s=="string"?r=s:i===1?r=s.one:r=s.other.replace("{{count}}",String(i)),a?.addSuffix?a.comparison&&a.comparison>0?"om "+r:r+" siden":r},z0={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},X0={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Z0={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},J0={date:Gs({formats:z0,defaultWidth:"full"}),time:Gs({formats:X0,defaultWidth:"full"}),dateTime:Gs({formats:Z0,defaultWidth:"full"})},Q0={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},eE=(e,i,a,r)=>Q0[e],nE={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},tE={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},rE={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},aE={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},iE={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},sE=(e,i)=>Number(e)+".",lE={ordinalNumber:sE,era:Mr({values:nE,defaultWidth:"wide"}),quarter:Mr({values:tE,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Mr({values:rE,defaultWidth:"wide"}),day:Mr({values:aE,defaultWidth:"wide"}),dayPeriod:Mr({values:iE,defaultWidth:"wide"})},oE=/^(\d+)\.?/i,uE=/\d+/i,dE={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},gE={any:[/^f/i,/^e/i]},fE={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},cE={any:[/1/i,/2/i,/3/i,/4/i]},mE={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},pE={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},hE={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},kE={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},vE={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},yE={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},bE={ordinalNumber:U0({matchPattern:oE,parsePattern:uE,valueCallback:e=>parseInt(e,10)}),era:Lr({matchPatterns:dE,defaultMatchWidth:"wide",parsePatterns:gE,defaultParseWidth:"any"}),quarter:Lr({matchPatterns:fE,defaultMatchWidth:"wide",parsePatterns:cE,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Lr({matchPatterns:mE,defaultMatchWidth:"wide",parsePatterns:pE,defaultParseWidth:"any"}),day:Lr({matchPatterns:hE,defaultMatchWidth:"wide",parsePatterns:kE,defaultParseWidth:"any"}),dayPeriod:Lr({matchPatterns:vE,defaultMatchWidth:"any",parsePatterns:yE,defaultParseWidth:"any"})},EE={code:"nb",formatDistance:W0,formatLong:J0,formatRelative:eE,localize:lE,match:bE,options:{weekStartsOn:1,firstWeekContainsDate:4}},TE={global:{dateLocale:EE,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},_E=S.createContext({locale:TE}),vf=()=>S.useContext(_E);var wE=function(e,i){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)i.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]]);return a};const AE=S.forwardRef((e,i)=>{var a,r,s,{rootElement:o,asChild:d}=e,g=wE(e,["rootElement","asChild"]);const c=mr(!1),m=(a=vf())===null||a===void 0?void 0:a.rootElement,h=(r=o??m)!==null&&r!==void 0?r:(s=globalThis?.document)===null||s===void 0?void 0:s.body,y=d?Xr:"div";return c?h?Md.createPortal(z.createElement(o0,{theme:c.theme,asChild:!0,hasBackground:!1,"data-color":c.color},z.createElement(y,Object.assign({ref:i,"data-aksel-portal":""},g))),h):null:h?Md.createPortal(z.createElement(y,Object.assign({ref:i,"data-aksel-portal":""},g)),h):null}),ur=Math.min,Kt=Math.max,ii=Math.round,Xa=Math.floor,Xn=e=>({x:e,y:e}),RE={left:"right",right:"left",bottom:"top",top:"bottom"},SE={start:"end",end:"start"};function cl(e,i,a){return Kt(e,ur(i,a))}function Jr(e,i){return typeof e=="function"?e(i):e}function Ct(e){return e.split("-")[0]}function Qr(e){return e.split("-")[1]}function yf(e){return e==="x"?"y":"x"}function Gl(e){return e==="y"?"height":"width"}function dr(e){return["top","bottom"].includes(Ct(e))?"y":"x"}function Ul(e){return yf(dr(e))}function IE(e,i,a){a===void 0&&(a=!1);const r=Qr(e),s=Ul(e),o=Gl(s);let d=s==="x"?r===(a?"end":"start")?"right":"left":r==="start"?"bottom":"top";return i.reference[o]>i.floating[o]&&(d=si(d)),[d,si(d)]}function jE(e){const i=si(e);return[ml(e),i,ml(i)]}function ml(e){return e.replace(/start|end/g,i=>SE[i])}function NE(e,i,a){const r=["left","right"],s=["right","left"],o=["top","bottom"],d=["bottom","top"];switch(e){case"top":case"bottom":return a?i?s:r:i?r:s;case"left":case"right":return i?o:d;default:return[]}}function OE(e,i,a,r){const s=Qr(e);let o=NE(Ct(e),a==="start",r);return s&&(o=o.map(d=>d+"-"+s),i&&(o=o.concat(o.map(ml)))),o}function si(e){return e.replace(/left|right|bottom|top/g,i=>RE[i])}function PE(e){return{top:0,right:0,bottom:0,left:0,...e}}function bf(e){return typeof e!="number"?PE(e):{top:e,right:e,bottom:e,left:e}}function li(e){const{x:i,y:a,width:r,height:s}=e;return{width:r,height:s,top:a,left:i,right:i+r,bottom:a+s,x:i,y:a}}function $d(e,i,a){let{reference:r,floating:s}=e;const o=dr(i),d=Ul(i),g=Gl(d),c=Ct(i),m=o==="y",h=r.x+r.width/2-s.width/2,y=r.y+r.height/2-s.height/2,_=r[g]/2-s[g]/2;let T;switch(c){case"top":T={x:h,y:r.y-s.height};break;case"bottom":T={x:h,y:r.y+r.height};break;case"right":T={x:r.x+r.width,y};break;case"left":T={x:r.x-s.width,y};break;default:T={x:r.x,y:r.y}}switch(Qr(i)){case"start":T[d]-=_*(a&&m?-1:1);break;case"end":T[d]+=_*(a&&m?-1:1);break}return T}const xE=async(e,i,a)=>{const{placement:r="bottom",strategy:s="absolute",middleware:o=[],platform:d}=a,g=o.filter(Boolean),c=await(d.isRTL==null?void 0:d.isRTL(i));let m=await d.getElementRects({reference:e,floating:i,strategy:s}),{x:h,y}=$d(m,r,c),_=r,T={},P=0;for(let v=0;v<g.length;v++){const{name:E,fn:A}=g[v],{x:B,y:R,data:V,reset:O}=await A({x:h,y,initialPlacement:r,placement:_,strategy:s,middlewareData:T,rects:m,platform:d,elements:{reference:e,floating:i}});h=B??h,y=R??y,T={...T,[E]:{...T[E],...V}},O&&P<=50&&(P++,typeof O=="object"&&(O.placement&&(_=O.placement),O.rects&&(m=O.rects===!0?await d.getElementRects({reference:e,floating:i,strategy:s}):O.rects),{x:h,y}=$d(m,_,c)),v=-1)}return{x:h,y,placement:_,strategy:s,middlewareData:T}};async function Ef(e,i){var a;i===void 0&&(i={});const{x:r,y:s,platform:o,rects:d,elements:g,strategy:c}=e,{boundary:m="clippingAncestors",rootBoundary:h="viewport",elementContext:y="floating",altBoundary:_=!1,padding:T=0}=Jr(i,e),P=bf(T),E=g[_?y==="floating"?"reference":"floating":y],A=li(await o.getClippingRect({element:(a=await(o.isElement==null?void 0:o.isElement(E)))==null||a?E:E.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(g.floating)),boundary:m,rootBoundary:h,strategy:c})),B=y==="floating"?{x:r,y:s,width:d.floating.width,height:d.floating.height}:d.reference,R=await(o.getOffsetParent==null?void 0:o.getOffsetParent(g.floating)),V=await(o.isElement==null?void 0:o.isElement(R))?await(o.getScale==null?void 0:o.getScale(R))||{x:1,y:1}:{x:1,y:1},O=li(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:g,rect:B,offsetParent:R,strategy:c}):B);return{top:(A.top-O.top+P.top)/V.y,bottom:(O.bottom-A.bottom+P.bottom)/V.y,left:(A.left-O.left+P.left)/V.x,right:(O.right-A.right+P.right)/V.x}}const BE=e=>({name:"arrow",options:e,async fn(i){const{x:a,y:r,placement:s,rects:o,platform:d,elements:g,middlewareData:c}=i,{element:m,padding:h=0}=Jr(e,i)||{};if(m==null)return{};const y=bf(h),_={x:a,y:r},T=Ul(s),P=Gl(T),v=await d.getDimensions(m),E=T==="y",A=E?"top":"left",B=E?"bottom":"right",R=E?"clientHeight":"clientWidth",V=o.reference[P]+o.reference[T]-_[T]-o.floating[P],O=_[T]-o.reference[T],D=await(d.getOffsetParent==null?void 0:d.getOffsetParent(m));let N=D?D[R]:0;(!N||!await(d.isElement==null?void 0:d.isElement(D)))&&(N=g.floating[R]||o.floating[P]);const I=V/2-O/2,C=N/2-v[P]/2-1,X=ur(y[A],C),Y=ur(y[B],C),J=X,L=N-v[P]-Y,M=N/2-v[P]/2+I,Q=cl(J,M,L),ne=!c.arrow&&Qr(s)!=null&&M!==Q&&o.reference[P]/2-(M<J?X:Y)-v[P]/2<0,Z=ne?M<J?M-J:M-L:0;return{[T]:_[T]+Z,data:{[T]:Q,centerOffset:M-Q-Z,...ne&&{alignmentOffset:Z}},reset:ne}}}),qE=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(i){var a,r;const{placement:s,middlewareData:o,rects:d,initialPlacement:g,platform:c,elements:m}=i,{mainAxis:h=!0,crossAxis:y=!0,fallbackPlacements:_,fallbackStrategy:T="bestFit",fallbackAxisSideDirection:P="none",flipAlignment:v=!0,...E}=Jr(e,i);if((a=o.arrow)!=null&&a.alignmentOffset)return{};const A=Ct(s),B=dr(g),R=Ct(g)===g,V=await(c.isRTL==null?void 0:c.isRTL(m.floating)),O=_||(R||!v?[si(g)]:jE(g)),D=P!=="none";!_&&D&&O.push(...OE(g,v,P,V));const N=[g,...O],I=await Ef(i,E),C=[];let X=((r=o.flip)==null?void 0:r.overflows)||[];if(h&&C.push(I[A]),y){const M=IE(s,d,V);C.push(I[M[0]],I[M[1]])}if(X=[...X,{placement:s,overflows:C}],!C.every(M=>M<=0)){var Y,J;const M=(((Y=o.flip)==null?void 0:Y.index)||0)+1,Q=N[M];if(Q)return{data:{index:M,overflows:X},reset:{placement:Q}};let ne=(J=X.filter(Z=>Z.overflows[0]<=0).sort((Z,G)=>Z.overflows[1]-G.overflows[1])[0])==null?void 0:J.placement;if(!ne)switch(T){case"bestFit":{var L;const Z=(L=X.filter(G=>{if(D){const W=dr(G.placement);return W===B||W==="y"}return!0}).map(G=>[G.placement,G.overflows.filter(W=>W>0).reduce((W,ae)=>W+ae,0)]).sort((G,W)=>G[1]-W[1])[0])==null?void 0:L[0];Z&&(ne=Z);break}case"initialPlacement":ne=g;break}if(s!==ne)return{reset:{placement:ne}}}return{}}}};async function DE(e,i){const{placement:a,platform:r,elements:s}=e,o=await(r.isRTL==null?void 0:r.isRTL(s.floating)),d=Ct(a),g=Qr(a),c=dr(a)==="y",m=["left","top"].includes(d)?-1:1,h=o&&c?-1:1,y=Jr(i,e);let{mainAxis:_,crossAxis:T,alignmentAxis:P}=typeof y=="number"?{mainAxis:y,crossAxis:0,alignmentAxis:null}:{mainAxis:y.mainAxis||0,crossAxis:y.crossAxis||0,alignmentAxis:y.alignmentAxis};return g&&typeof P=="number"&&(T=g==="end"?P*-1:P),c?{x:T*h,y:_*m}:{x:_*m,y:T*h}}const ME=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(i){var a,r;const{x:s,y:o,placement:d,middlewareData:g}=i,c=await DE(i,e);return d===((a=g.offset)==null?void 0:a.placement)&&(r=g.arrow)!=null&&r.alignmentOffset?{}:{x:s+c.x,y:o+c.y,data:{...c,placement:d}}}}},LE=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(i){const{x:a,y:r,placement:s}=i,{mainAxis:o=!0,crossAxis:d=!1,limiter:g={fn:E=>{let{x:A,y:B}=E;return{x:A,y:B}}},...c}=Jr(e,i),m={x:a,y:r},h=await Ef(i,c),y=dr(Ct(s)),_=yf(y);let T=m[_],P=m[y];if(o){const E=_==="y"?"top":"left",A=_==="y"?"bottom":"right",B=T+h[E],R=T-h[A];T=cl(B,T,R)}if(d){const E=y==="y"?"top":"left",A=y==="y"?"bottom":"right",B=P+h[E],R=P-h[A];P=cl(B,P,R)}const v=g.fn({...i,[_]:T,[y]:P});return{...v,data:{x:v.x-a,y:v.y-r,enabled:{[_]:o,[y]:d}}}}}};function ci(){return typeof window<"u"}function hr(e){return Tf(e)?(e.nodeName||"").toLowerCase():"#document"}function mn(e){var i;return(e==null||(i=e.ownerDocument)==null?void 0:i.defaultView)||window}function Qn(e){var i;return(i=(Tf(e)?e.ownerDocument:e.document)||window.document)==null?void 0:i.documentElement}function Tf(e){return ci()?e instanceof Node||e instanceof mn(e).Node:!1}function Pe(e){return ci()?e instanceof Element||e instanceof mn(e).Element:!1}function _n(e){return ci()?e instanceof HTMLElement||e instanceof mn(e).HTMLElement:!1}function oi(e){return!ci()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof mn(e).ShadowRoot}function ea(e){const{overflow:i,overflowX:a,overflowY:r,display:s}=qn(e);return/auto|scroll|overlay|hidden|clip/.test(i+r+a)&&!["inline","contents"].includes(s)}function FE(e){return["table","td","th"].includes(hr(e))}function mi(e){return[":popover-open",":modal"].some(i=>{try{return e.matches(i)}catch{return!1}})}function Yl(e){const i=pi(),a=Pe(e)?qn(e):e;return["transform","translate","scale","rotate","perspective"].some(r=>a[r]?a[r]!=="none":!1)||(a.containerType?a.containerType!=="normal":!1)||!i&&(a.backdropFilter?a.backdropFilter!=="none":!1)||!i&&(a.filter?a.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(r=>(a.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(a.contain||"").includes(r))}function KE(e){let i=mt(e);for(;_n(i)&&!ct(i);){if(Yl(i))return i;if(mi(i))return null;i=mt(i)}return null}function pi(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ct(e){return["html","body","#document"].includes(hr(e))}function qn(e){return mn(e).getComputedStyle(e)}function hi(e){return Pe(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function mt(e){if(hr(e)==="html")return e;const i=e.assignedSlot||e.parentNode||oi(e)&&e.host||Qn(e);return oi(i)?i.host:i}function _f(e){const i=mt(e);return ct(i)?e.ownerDocument?e.ownerDocument.body:e.body:_n(i)&&ea(i)?i:_f(i)}function Rt(e,i,a){var r;i===void 0&&(i=[]),a===void 0&&(a=!0);const s=_f(e),o=s===((r=e.ownerDocument)==null?void 0:r.body),d=mn(s);if(o){const g=pl(d);return i.concat(d,d.visualViewport||[],ea(s)?s:[],g&&a?Rt(g):[])}return i.concat(s,Rt(s,[],a))}function pl(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function wf(e){const i=qn(e);let a=parseFloat(i.width)||0,r=parseFloat(i.height)||0;const s=_n(e),o=s?e.offsetWidth:a,d=s?e.offsetHeight:r,g=ii(a)!==o||ii(r)!==d;return g&&(a=o,r=d),{width:a,height:r,$:g}}function Wl(e){return Pe(e)?e:e.contextElement}function sr(e){const i=Wl(e);if(!_n(i))return Xn(1);const a=i.getBoundingClientRect(),{width:r,height:s,$:o}=wf(i);let d=(o?ii(a.width):a.width)/r,g=(o?ii(a.height):a.height)/s;return(!d||!Number.isFinite(d))&&(d=1),(!g||!Number.isFinite(g))&&(g=1),{x:d,y:g}}const CE=Xn(0);function Af(e){const i=mn(e);return!pi()||!i.visualViewport?CE:{x:i.visualViewport.offsetLeft,y:i.visualViewport.offsetTop}}function VE(e,i,a){return i===void 0&&(i=!1),!a||i&&a!==mn(e)?!1:i}function Vt(e,i,a,r){i===void 0&&(i=!1),a===void 0&&(a=!1);const s=e.getBoundingClientRect(),o=Wl(e);let d=Xn(1);i&&(r?Pe(r)&&(d=sr(r)):d=sr(e));const g=VE(o,a,r)?Af(o):Xn(0);let c=(s.left+g.x)/d.x,m=(s.top+g.y)/d.y,h=s.width/d.x,y=s.height/d.y;if(o){const _=mn(o),T=r&&Pe(r)?mn(r):r;let P=_,v=pl(P);for(;v&&r&&T!==P;){const E=sr(v),A=v.getBoundingClientRect(),B=qn(v),R=A.left+(v.clientLeft+parseFloat(B.paddingLeft))*E.x,V=A.top+(v.clientTop+parseFloat(B.paddingTop))*E.y;c*=E.x,m*=E.y,h*=E.x,y*=E.y,c+=R,m+=V,P=mn(v),v=pl(P)}}return li({width:h,height:y,x:c,y:m})}function zl(e,i){const a=hi(e).scrollLeft;return i?i.left+a:Vt(Qn(e)).left+a}function Rf(e,i,a){a===void 0&&(a=!1);const r=e.getBoundingClientRect(),s=r.left+i.scrollLeft-(a?0:zl(e,r)),o=r.top+i.scrollTop;return{x:s,y:o}}function HE(e){let{elements:i,rect:a,offsetParent:r,strategy:s}=e;const o=s==="fixed",d=Qn(r),g=i?mi(i.floating):!1;if(r===d||g&&o)return a;let c={scrollLeft:0,scrollTop:0},m=Xn(1);const h=Xn(0),y=_n(r);if((y||!y&&!o)&&((hr(r)!=="body"||ea(d))&&(c=hi(r)),_n(r))){const T=Vt(r);m=sr(r),h.x=T.x+r.clientLeft,h.y=T.y+r.clientTop}const _=d&&!y&&!o?Rf(d,c,!0):Xn(0);return{width:a.width*m.x,height:a.height*m.y,x:a.x*m.x-c.scrollLeft*m.x+h.x+_.x,y:a.y*m.y-c.scrollTop*m.y+h.y+_.y}}function $E(e){return Array.from(e.getClientRects())}function GE(e){const i=Qn(e),a=hi(e),r=e.ownerDocument.body,s=Kt(i.scrollWidth,i.clientWidth,r.scrollWidth,r.clientWidth),o=Kt(i.scrollHeight,i.clientHeight,r.scrollHeight,r.clientHeight);let d=-a.scrollLeft+zl(e);const g=-a.scrollTop;return qn(r).direction==="rtl"&&(d+=Kt(i.clientWidth,r.clientWidth)-s),{width:s,height:o,x:d,y:g}}function UE(e,i){const a=mn(e),r=Qn(e),s=a.visualViewport;let o=r.clientWidth,d=r.clientHeight,g=0,c=0;if(s){o=s.width,d=s.height;const m=pi();(!m||m&&i==="fixed")&&(g=s.offsetLeft,c=s.offsetTop)}return{width:o,height:d,x:g,y:c}}function YE(e,i){const a=Vt(e,!0,i==="fixed"),r=a.top+e.clientTop,s=a.left+e.clientLeft,o=_n(e)?sr(e):Xn(1),d=e.clientWidth*o.x,g=e.clientHeight*o.y,c=s*o.x,m=r*o.y;return{width:d,height:g,x:c,y:m}}function Gd(e,i,a){let r;if(i==="viewport")r=UE(e,a);else if(i==="document")r=GE(Qn(e));else if(Pe(i))r=YE(i,a);else{const s=Af(e);r={x:i.x-s.x,y:i.y-s.y,width:i.width,height:i.height}}return li(r)}function Sf(e,i){const a=mt(e);return a===i||!Pe(a)||ct(a)?!1:qn(a).position==="fixed"||Sf(a,i)}function WE(e,i){const a=i.get(e);if(a)return a;let r=Rt(e,[],!1).filter(g=>Pe(g)&&hr(g)!=="body"),s=null;const o=qn(e).position==="fixed";let d=o?mt(e):e;for(;Pe(d)&&!ct(d);){const g=qn(d),c=Yl(d);!c&&g.position==="fixed"&&(s=null),(o?!c&&!s:!c&&g.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||ea(d)&&!c&&Sf(e,d))?r=r.filter(h=>h!==d):s=g,d=mt(d)}return i.set(e,r),r}function zE(e){let{element:i,boundary:a,rootBoundary:r,strategy:s}=e;const d=[...a==="clippingAncestors"?mi(i)?[]:WE(i,this._c):[].concat(a),r],g=d[0],c=d.reduce((m,h)=>{const y=Gd(i,h,s);return m.top=Kt(y.top,m.top),m.right=ur(y.right,m.right),m.bottom=ur(y.bottom,m.bottom),m.left=Kt(y.left,m.left),m},Gd(i,g,s));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function XE(e){const{width:i,height:a}=wf(e);return{width:i,height:a}}function ZE(e,i,a){const r=_n(i),s=Qn(i),o=a==="fixed",d=Vt(e,!0,o,i);let g={scrollLeft:0,scrollTop:0};const c=Xn(0);if(r||!r&&!o)if((hr(i)!=="body"||ea(s))&&(g=hi(i)),r){const _=Vt(i,!0,o,i);c.x=_.x+i.clientLeft,c.y=_.y+i.clientTop}else s&&(c.x=zl(s));const m=s&&!r&&!o?Rf(s,g):Xn(0),h=d.left+g.scrollLeft-c.x-m.x,y=d.top+g.scrollTop-c.y-m.y;return{x:h,y,width:d.width,height:d.height}}function Us(e){return qn(e).position==="static"}function Ud(e,i){if(!_n(e)||qn(e).position==="fixed")return null;if(i)return i(e);let a=e.offsetParent;return Qn(e)===a&&(a=a.ownerDocument.body),a}function If(e,i){const a=mn(e);if(mi(e))return a;if(!_n(e)){let s=mt(e);for(;s&&!ct(s);){if(Pe(s)&&!Us(s))return s;s=mt(s)}return a}let r=Ud(e,i);for(;r&&FE(r)&&Us(r);)r=Ud(r,i);return r&&ct(r)&&Us(r)&&!Yl(r)?a:r||KE(e)||a}const JE=async function(e){const i=this.getOffsetParent||If,a=this.getDimensions,r=await a(e.floating);return{reference:ZE(e.reference,await i(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function QE(e){return qn(e).direction==="rtl"}const e1={convertOffsetParentRelativeRectToViewportRelativeRect:HE,getDocumentElement:Qn,getClippingRect:zE,getOffsetParent:If,getElementRects:JE,getClientRects:$E,getDimensions:XE,getScale:sr,isElement:Pe,isRTL:QE};function jf(e,i){return e.x===i.x&&e.y===i.y&&e.width===i.width&&e.height===i.height}function n1(e,i){let a=null,r;const s=Qn(e);function o(){var g;clearTimeout(r),(g=a)==null||g.disconnect(),a=null}function d(g,c){g===void 0&&(g=!1),c===void 0&&(c=1),o();const m=e.getBoundingClientRect(),{left:h,top:y,width:_,height:T}=m;if(g||i(),!_||!T)return;const P=Xa(y),v=Xa(s.clientWidth-(h+_)),E=Xa(s.clientHeight-(y+T)),A=Xa(h),R={rootMargin:-P+"px "+-v+"px "+-E+"px "+-A+"px",threshold:Kt(0,ur(1,c))||1};let V=!0;function O(D){const N=D[0].intersectionRatio;if(N!==c){if(!V)return d();N?d(!1,N):r=setTimeout(()=>{d(!1,1e-7)},1e3)}N===1&&!jf(m,e.getBoundingClientRect())&&d(),V=!1}try{a=new IntersectionObserver(O,{...R,root:s.ownerDocument})}catch{a=new IntersectionObserver(O,R)}a.observe(e)}return d(!0),o}function Yd(e,i,a,r){r===void 0&&(r={});const{ancestorScroll:s=!0,ancestorResize:o=!0,elementResize:d=typeof ResizeObserver=="function",layoutShift:g=typeof IntersectionObserver=="function",animationFrame:c=!1}=r,m=Wl(e),h=s||o?[...m?Rt(m):[],...Rt(i)]:[];h.forEach(A=>{s&&A.addEventListener("scroll",a,{passive:!0}),o&&A.addEventListener("resize",a)});const y=m&&g?n1(m,a):null;let _=-1,T=null;d&&(T=new ResizeObserver(A=>{let[B]=A;B&&B.target===m&&T&&(T.unobserve(i),cancelAnimationFrame(_),_=requestAnimationFrame(()=>{var R;(R=T)==null||R.observe(i)})),a()}),m&&!c&&T.observe(m),T.observe(i));let P,v=c?Vt(e):null;c&&E();function E(){const A=Vt(e);v&&!jf(v,A)&&a(),v=A,P=requestAnimationFrame(E)}return a(),()=>{var A;h.forEach(B=>{s&&B.removeEventListener("scroll",a),o&&B.removeEventListener("resize",a)}),y?.(),(A=T)==null||A.disconnect(),T=null,c&&cancelAnimationFrame(P)}}const t1=ME,r1=LE,a1=qE,Wd=BE,i1=(e,i,a)=>{const r=new Map,s={platform:e1,...a},o={...s.platform,_c:r};return xE(e,i,{...s,platform:o})};var ni=typeof document<"u"?S.useLayoutEffect:S.useEffect;function ui(e,i){if(e===i)return!0;if(typeof e!=typeof i)return!1;if(typeof e=="function"&&e.toString()===i.toString())return!0;let a,r,s;if(e&&i&&typeof e=="object"){if(Array.isArray(e)){if(a=e.length,a!==i.length)return!1;for(r=a;r--!==0;)if(!ui(e[r],i[r]))return!1;return!0}if(s=Object.keys(e),a=s.length,a!==Object.keys(i).length)return!1;for(r=a;r--!==0;)if(!{}.hasOwnProperty.call(i,s[r]))return!1;for(r=a;r--!==0;){const o=s[r];if(!(o==="_owner"&&e.$$typeof)&&!ui(e[o],i[o]))return!1}return!0}return e!==e&&i!==i}function Nf(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function zd(e,i){const a=Nf(e);return Math.round(i*a)/a}function Ys(e){const i=S.useRef(e);return ni(()=>{i.current=e}),i}function s1(e){e===void 0&&(e={});const{placement:i="bottom",strategy:a="absolute",middleware:r=[],platform:s,elements:{reference:o,floating:d}={},transform:g=!0,whileElementsMounted:c,open:m}=e,[h,y]=S.useState({x:0,y:0,strategy:a,placement:i,middlewareData:{},isPositioned:!1}),[_,T]=S.useState(r);ui(_,r)||T(r);const[P,v]=S.useState(null),[E,A]=S.useState(null),B=S.useCallback(G=>{G!==D.current&&(D.current=G,v(G))},[]),R=S.useCallback(G=>{G!==N.current&&(N.current=G,A(G))},[]),V=o||P,O=d||E,D=S.useRef(null),N=S.useRef(null),I=S.useRef(h),C=c!=null,X=Ys(c),Y=Ys(s),J=Ys(m),L=S.useCallback(()=>{if(!D.current||!N.current)return;const G={placement:i,strategy:a,middleware:_};Y.current&&(G.platform=Y.current),i1(D.current,N.current,G).then(W=>{const ae={...W,isPositioned:J.current!==!1};M.current&&!ui(I.current,ae)&&(I.current=ae,cf.flushSync(()=>{y(ae)}))})},[_,i,a,Y,J]);ni(()=>{m===!1&&I.current.isPositioned&&(I.current.isPositioned=!1,y(G=>({...G,isPositioned:!1})))},[m]);const M=S.useRef(!1);ni(()=>(M.current=!0,()=>{M.current=!1}),[]),ni(()=>{if(V&&(D.current=V),O&&(N.current=O),V&&O){if(X.current)return X.current(V,O,L);L()}},[V,O,L,X,C]);const Q=S.useMemo(()=>({reference:D,floating:N,setReference:B,setFloating:R}),[B,R]),ne=S.useMemo(()=>({reference:V,floating:O}),[V,O]),Z=S.useMemo(()=>{const G={position:a,left:0,top:0};if(!ne.floating)return G;const W=zd(ne.floating,h.x),ae=zd(ne.floating,h.y);return g?{...G,transform:"translate("+W+"px, "+ae+"px)",...Nf(ne.floating)>=1.5&&{willChange:"transform"}}:{position:a,left:W,top:ae}},[a,g,ne.floating,h.x,h.y]);return S.useMemo(()=>({...h,update:L,refs:Q,elements:ne,floatingStyles:Z}),[h,L,Q,ne,Z])}const l1=e=>{function i(a){return{}.hasOwnProperty.call(a,"current")}return{name:"arrow",options:e,fn(a){const{element:r,padding:s}=typeof e=="function"?e(a):e;return r&&i(r)?r.current!=null?Wd({element:r.current,padding:s}).fn(a):{}:r?Wd({element:r,padding:s}).fn(a):{}}}},o1=(e,i)=>({...t1(e),options:[e,i]}),u1=(e,i)=>({...r1(e),options:[e,i]}),d1=(e,i)=>({...a1(e),options:[e,i]}),g1=(e,i)=>({...l1(e),options:[e,i]}),Xd=/(\w+)/g;function f1(e,i){const a=Array.isArray(e)?e:c1(e);for(const r of i){if(!r)continue;let s=r;for(let o=0;o<a.length;o++){const d=s[a[o]];d!==void 0&&(s=d)}if(typeof s=="string")return s}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function c1(e){const i=[];let a=Xd.exec(e);for(;a;){const[,r,s]=a;i.push(r||s),a=Xd.exec(e)}return i}const m1=/{[^}]*}/g;function ki(e,...i){const a=vf(),r=a.translations||[],s=[...i,...Array.isArray(r)?r.map(d=>d[e]):[r[e]],a.locale[e]];return(d,g)=>{const c=f1(d,s);return g?c.replace(m1,m=>{const h=m.substring(1,m.length-1);if(g[h]===void 0){const y=JSON.stringify(g);throw new Error(`Error translating key '${d}'. No replacement syntax ({}) found for key '${h}'. The following replacements were passed: '${y}'`)}return g[h]}):c}}var p1=function(e,i){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)i.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]]);return a};const h1=S.forwardRef((e,i)=>{var{className:a,size:r="medium",title:s,transparent:o=!1,variant:d="neutral",id:g,"data-color":c}=e,m=p1(e,["className","size","title","transparent","variant","id","data-color"]);const{cn:h}=Ne(),y=fi(),_=ki("Loader");return z.createElement("svg",Object.assign({"aria-labelledby":g??`loader-${y}`,ref:i,className:h("navds-loader",a,`navds-loader--${r}`,`navds-loader--${d}`,{"navds-loader--transparent":o}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid","data-color":c??k1(d)},Zr(m,["children"]),{"data-variant":d}),z.createElement("title",{id:g??`loader-${y}`},s||_("title")),z.createElement("circle",{className:h("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),z.createElement("circle",{className:h("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});function k1(e){switch(e){case"neutral":return"neutral";case"inverted":return"neutral";case"interaction":return;default:return"neutral"}}var v1=function(e,i){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)i.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]]);return a};const Xl=S.forwardRef((e,i)=>{var{as:a="button",variant:r="primary",className:s,children:o,size:d="medium",loading:g=!1,disabled:c,icon:m,iconPosition:h="left",onKeyUp:y,"data-color":_}=e,T=v1(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp","data-color"]);const{cn:P}=Ne(),v=c||g?Zr(T,["href"]):T,E=A=>{A.key===" "&&!c&&!g&&A.currentTarget.click()};return z.createElement(a,Object.assign({},a!=="button"?{role:"button"}:{},{"data-color":_??y1(r),"data-variant":b1(r)},v,{ref:i,onKeyUp:$l(y,E),className:P(s,"navds-button",`navds-button--${r}`,`navds-button--${d}`,{"navds-button--loading":g,"navds-button--icon-only":!!m&&!o,"navds-button--disabled":c??g}),disabled:c??g?!0:void 0}),m&&h==="left"&&z.createElement("span",{className:P("navds-button__icon")},m),g&&z.createElement(h1,{size:d}),o&&z.createElement(Hl,{as:"span",size:d==="medium"?"medium":"small"},o),m&&h==="right"&&z.createElement("span",{className:P("navds-button__icon")},m))});function y1(e){switch(e){case"primary-neutral":case"secondary-neutral":case"tertiary-neutral":return"neutral";case"danger":return"danger";default:return}}function b1(e){switch(e){case"primary":case"primary-neutral":case"danger":return"primary";case"secondary":case"secondary-neutral":return"secondary";case"tertiary":case"tertiary-neutral":return"tertiary";default:return"primary"}}function E1(){const e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function T1(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(i=>{let{brand:a,version:r}=i;return a+"/"+r}).join(" "):navigator.userAgent}function _1(){return/apple/i.test(navigator.vendor)}function w1(){return E1().toLowerCase().startsWith("mac")&&!navigator.maxTouchPoints}function A1(){return T1().includes("jsdom/")}const R1="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function Zd(e){let i=e.activeElement;for(;((a=i)==null||(a=a.shadowRoot)==null?void 0:a.activeElement)!=null;){var a;i=i.shadowRoot.activeElement}return i}function Wr(e,i){if(!e||!i)return!1;const a=i.getRootNode==null?void 0:i.getRootNode();if(e.contains(i))return!0;if(a&&oi(a)){let r=i;for(;r;){if(e===r)return!0;r=r.parentNode||r.host}}return!1}function ir(e){return"composedPath"in e?e.composedPath()[0]:e.target}function Ws(e,i){if(i==null)return!1;if("composedPath"in e)return e.composedPath().includes(i);const a=e;return a.target!=null&&i.contains(a.target)}function S1(e){return e.matches("html,body")}function Ft(e){return e?.ownerDocument||document}function I1(e){return _n(e)&&e.matches(R1)}function j1(e){if(!e||A1())return!0;try{return e.matches(":focus-visible")}catch{return!0}}function zs(e,i,a){a===void 0&&(a=!0);let r=e.filter(o=>{var d;return o.parentId===i&&((d=o.context)==null?void 0:d.open)}),s=r;for(;s.length;)s=a?e.filter(o=>{var d;return(d=s)==null?void 0:d.some(g=>{var c;return o.parentId===g.id&&((c=o.context)==null?void 0:c.open)})}):e,r=r.concat(s);return r}function N1(e){return"nativeEvent"in e}function hl(e,i){const a=["mouse","pen"];return a.push("",void 0),a.includes(e)}var gr=typeof document<"u"?S.useLayoutEffect:S.useEffect;const O1={...df};function Za(e){const i=S.useRef(e);return gr(()=>{i.current=e}),i}const P1=O1.useInsertionEffect,x1=P1||(e=>e());function gt(e){const i=S.useRef(()=>{});return x1(()=>{i.current=e}),S.useCallback(function(){for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return i.current==null?void 0:i.current(...r)},[])}const B1="data-floating-ui-focusable",Jd="active",Qd="selected",q1={...df};let eg=!1,D1=0;const ng=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+D1++;function M1(){const[e,i]=S.useState(()=>eg?ng():void 0);return gr(()=>{e==null&&i(ng())},[]),S.useEffect(()=>{eg=!0},[]),e}const L1=q1.useId,F1=L1||M1;function K1(){const e=new Map;return{emit(i,a){var r;(r=e.get(i))==null||r.forEach(s=>s(a))},on(i,a){e.has(i)||e.set(i,new Set),e.get(i).add(a)},off(i,a){var r;(r=e.get(i))==null||r.delete(a)}}}const C1=S.createContext(null),V1=S.createContext(null),Of=()=>{var e;return((e=S.useContext(C1))==null?void 0:e.id)||null},Zl=()=>S.useContext(V1);function Jl(e){return"data-floating-ui-"+e}function Bn(e){e.current!==-1&&(clearTimeout(e.current),e.current=-1)}const tg=Jl("safe-polygon");function Xs(e,i,a){if(a&&!hl(a))return 0;if(typeof e=="number")return e;if(typeof e=="function"){const r=e();return typeof r=="number"?r:r?.[i]}return e?.[i]}function Zs(e){return typeof e=="function"?e():e}function H1(e,i){i===void 0&&(i={});const{open:a,onOpenChange:r,dataRef:s,events:o,elements:d}=e,{enabled:g=!0,delay:c=0,handleClose:m=null,mouseOnly:h=!1,restMs:y=0,move:_=!0}=i,T=Zl(),P=Of(),v=Za(m),E=Za(c),A=Za(a),B=Za(y),R=S.useRef(),V=S.useRef(-1),O=S.useRef(),D=S.useRef(-1),N=S.useRef(!0),I=S.useRef(!1),C=S.useRef(()=>{}),X=S.useRef(!1),Y=S.useCallback(()=>{var Z;const G=(Z=s.current.openEvent)==null?void 0:Z.type;return G?.includes("mouse")&&G!=="mousedown"},[s]);S.useEffect(()=>{if(!g)return;function Z(G){let{open:W}=G;W||(Bn(V),Bn(D),N.current=!0,X.current=!1)}return o.on("openchange",Z),()=>{o.off("openchange",Z)}},[g,o]),S.useEffect(()=>{if(!g||!v.current||!a)return;function Z(W){Y()&&r(!1,W,"hover")}const G=Ft(d.floating).documentElement;return G.addEventListener("mouseleave",Z),()=>{G.removeEventListener("mouseleave",Z)}},[d.floating,a,r,g,v,Y]);const J=S.useCallback(function(Z,G,W){G===void 0&&(G=!0),W===void 0&&(W="hover");const ae=Xs(E.current,"close",R.current);ae&&!O.current?(Bn(V),V.current=window.setTimeout(()=>r(!1,Z,W),ae)):G&&(Bn(V),r(!1,Z,W))},[E,r]),L=gt(()=>{C.current(),O.current=void 0}),M=gt(()=>{if(I.current){const Z=Ft(d.floating).body;Z.style.pointerEvents="",Z.removeAttribute(tg),I.current=!1}}),Q=gt(()=>s.current.openEvent?["click","mousedown"].includes(s.current.openEvent.type):!1);S.useEffect(()=>{if(!g)return;function Z(le){if(Bn(V),N.current=!1,h&&!hl(R.current)||Zs(B.current)>0&&!Xs(E.current,"open"))return;const he=Xs(E.current,"open",R.current);he?V.current=window.setTimeout(()=>{A.current||r(!0,le,"hover")},he):a||r(!0,le,"hover")}function G(le){if(Q()){M();return}C.current();const he=Ft(d.floating);if(Bn(D),X.current=!1,v.current&&s.current.floatingContext){a||Bn(V),O.current=v.current({...s.current.floatingContext,tree:T,x:le.clientX,y:le.clientY,onClose(){M(),L(),Q()||J(le,!0,"safe-polygon")}});const Ke=O.current;he.addEventListener("mousemove",Ke),C.current=()=>{he.removeEventListener("mousemove",Ke)};return}(R.current==="touch"?!Wr(d.floating,le.relatedTarget):!0)&&J(le)}function W(le){Q()||s.current.floatingContext&&(v.current==null||v.current({...s.current.floatingContext,tree:T,x:le.clientX,y:le.clientY,onClose(){M(),L(),Q()||J(le)}})(le))}function ae(){Bn(V)}function te(le){Q()||J(le,!1)}if(Pe(d.domReference)){const le=d.domReference,he=d.floating;return a&&le.addEventListener("mouseleave",W),_&&le.addEventListener("mousemove",Z,{once:!0}),le.addEventListener("mouseenter",Z),le.addEventListener("mouseleave",G),he&&(he.addEventListener("mouseleave",W),he.addEventListener("mouseenter",ae),he.addEventListener("mouseleave",te)),()=>{a&&le.removeEventListener("mouseleave",W),_&&le.removeEventListener("mousemove",Z),le.removeEventListener("mouseenter",Z),le.removeEventListener("mouseleave",G),he&&(he.removeEventListener("mouseleave",W),he.removeEventListener("mouseenter",ae),he.removeEventListener("mouseleave",te))}}},[d,g,e,h,_,J,L,M,r,a,A,T,E,v,s,Q,B]),gr(()=>{var Z;if(g&&a&&(Z=v.current)!=null&&Z.__options.blockPointerEvents&&Y()){I.current=!0;const W=d.floating;if(Pe(d.domReference)&&W){var G;const ae=Ft(d.floating).body;ae.setAttribute(tg,"");const te=d.domReference,le=T==null||(G=T.nodesRef.current.find(he=>he.id===P))==null||(G=G.context)==null?void 0:G.elements.floating;return le&&(le.style.pointerEvents=""),ae.style.pointerEvents="none",te.style.pointerEvents="auto",W.style.pointerEvents="auto",()=>{ae.style.pointerEvents="",te.style.pointerEvents="",W.style.pointerEvents=""}}}},[g,a,P,d,T,v,Y]),gr(()=>{a||(R.current=void 0,X.current=!1,L(),M())},[a,L,M]),S.useEffect(()=>()=>{L(),Bn(V),Bn(D),M()},[g,d.domReference,L,M]);const ne=S.useMemo(()=>{function Z(G){R.current=G.pointerType}return{onPointerDown:Z,onPointerEnter:Z,onMouseMove(G){const{nativeEvent:W}=G;function ae(){!N.current&&!A.current&&r(!0,W,"hover")}h&&!hl(R.current)||a||Zs(B.current)===0||X.current&&G.movementX**2+G.movementY**2<2||(Bn(D),R.current==="touch"?ae():(X.current=!0,D.current=window.setTimeout(ae,Zs(B.current))))}}},[h,r,a,A,B]);return S.useMemo(()=>g?{reference:ne}:{},[g,ne])}function Js(e,i){if(!e||!i)return!1;const a=i.getRootNode==null?void 0:i.getRootNode();if(e.contains(i))return!0;if(a&&oi(a)){let r=i;for(;r;){if(e===r)return!0;r=r.parentNode||r.host}}return!1}function $1(e){return"composedPath"in e?e.composedPath()[0]:e.target}const G1={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},U1={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},rg=e=>{var i,a;return{escapeKey:typeof e=="boolean"?e:(i=e?.escapeKey)!=null?i:!1,outsidePress:typeof e=="boolean"?e:(a=e?.outsidePress)!=null?a:!0}};function Y1(e,i){i===void 0&&(i={});const{open:a,onOpenChange:r,elements:s,dataRef:o}=e,{enabled:d=!0,escapeKey:g=!0,outsidePress:c=!0,outsidePressEvent:m="pointerdown",referencePress:h=!1,referencePressEvent:y="pointerdown",ancestorScroll:_=!1,bubbles:T,capture:P}=i,v=Zl(),E=gt(typeof c=="function"?c:()=>!1),A=typeof c=="function"?E:c,B=S.useRef(!1),R=S.useRef(!1),{escapeKey:V,outsidePress:O}=rg(T),{escapeKey:D,outsidePress:N}=rg(P),I=S.useRef(!1),C=gt(Q=>{var ne;if(!a||!d||!g||Q.key!=="Escape"||I.current)return;const Z=(ne=o.current.floatingContext)==null?void 0:ne.nodeId,G=v?zs(v.nodesRef.current,Z):[];if(!V&&(Q.stopPropagation(),G.length>0)){let W=!0;if(G.forEach(ae=>{var te;if((te=ae.context)!=null&&te.open&&!ae.context.dataRef.current.__escapeKeyBubbles){W=!1;return}}),!W)return}r(!1,N1(Q)?Q.nativeEvent:Q,"escape-key")}),X=gt(Q=>{var ne;const Z=()=>{var G;C(Q),(G=ir(Q))==null||G.removeEventListener("keydown",Z)};(ne=ir(Q))==null||ne.addEventListener("keydown",Z)}),Y=gt(Q=>{var ne;const Z=B.current;B.current=!1;const G=R.current;if(R.current=!1,m==="click"&&G||Z||typeof A=="function"&&!A(Q))return;const W=ir(Q),ae="["+Jl("inert")+"]",te=Ft(s.floating).querySelectorAll(ae);let le=Pe(W)?W:null;for(;le&&!ct(le);){const qe=mt(le);if(ct(qe)||!Pe(qe))break;le=qe}if(te.length&&Pe(W)&&!S1(W)&&!Wr(W,s.floating)&&Array.from(te).every(qe=>!Wr(le,qe)))return;if(_n(W)&&M){const qe=ct(W),Ce=qn(W),ve=/auto|scroll/,we=qe||ve.test(Ce.overflowX),Ze=qe||ve.test(Ce.overflowY),Ve=we&&W.clientWidth>0&&W.scrollWidth>W.clientWidth,$e=Ze&&W.clientHeight>0&&W.scrollHeight>W.clientHeight,An=Ce.direction==="rtl",Me=$e&&(An?Q.offsetX<=W.offsetWidth-W.clientWidth:Q.offsetX>W.clientWidth),Je=Ve&&Q.offsetY>W.clientHeight;if(Me||Je)return}const he=(ne=o.current.floatingContext)==null?void 0:ne.nodeId,pn=v&&zs(v.nodesRef.current,he).some(qe=>{var Ce;return Ws(Q,(Ce=qe.context)==null?void 0:Ce.elements.floating)});if(Ws(Q,s.floating)||Ws(Q,s.domReference)||pn)return;const Ke=v?zs(v.nodesRef.current,he):[];if(Ke.length>0){let qe=!0;if(Ke.forEach(Ce=>{var ve;if((ve=Ce.context)!=null&&ve.open&&!Ce.context.dataRef.current.__outsidePressBubbles){qe=!1;return}}),!qe)return}r(!1,Q,"outside-press")}),J=gt(Q=>{var ne;const Z=()=>{var G;Y(Q),(G=ir(Q))==null||G.removeEventListener(m,Z)};(ne=ir(Q))==null||ne.addEventListener(m,Z)});S.useEffect(()=>{if(!a||!d)return;o.current.__escapeKeyBubbles=V,o.current.__outsidePressBubbles=O;let Q=-1;function ne(te){r(!1,te,"ancestor-scroll")}function Z(){window.clearTimeout(Q),I.current=!0}function G(){Q=window.setTimeout(()=>{I.current=!1},pi()?5:0)}const W=Ft(s.floating);g&&(W.addEventListener("keydown",D?X:C,D),W.addEventListener("compositionstart",Z),W.addEventListener("compositionend",G)),A&&W.addEventListener(m,N?J:Y,N);let ae=[];return _&&(Pe(s.domReference)&&(ae=Rt(s.domReference)),Pe(s.floating)&&(ae=ae.concat(Rt(s.floating))),!Pe(s.reference)&&s.reference&&s.reference.contextElement&&(ae=ae.concat(Rt(s.reference.contextElement)))),ae=ae.filter(te=>{var le;return te!==((le=W.defaultView)==null?void 0:le.visualViewport)}),ae.forEach(te=>{te.addEventListener("scroll",ne,{passive:!0})}),()=>{g&&(W.removeEventListener("keydown",D?X:C,D),W.removeEventListener("compositionstart",Z),W.removeEventListener("compositionend",G)),A&&W.removeEventListener(m,N?J:Y,N),ae.forEach(te=>{te.removeEventListener("scroll",ne)}),window.clearTimeout(Q)}},[o,s,g,A,m,a,r,_,d,V,O,C,D,X,Y,N,J]),S.useEffect(()=>{B.current=!1},[A,m]);const L=S.useMemo(()=>({onKeyDown:C,...h&&{[G1[y]]:Q=>{r(!1,Q.nativeEvent,"reference-press")},...y!=="click"&&{onClick(Q){r(!1,Q.nativeEvent,"reference-press")}}}}),[C,r,h,y]),M=S.useMemo(()=>({onKeyDown:C,onMouseDown(){R.current=!0},onMouseUp(){R.current=!0},[U1[m]]:()=>{B.current=!0}}),[C,m]);return S.useMemo(()=>d?{reference:L,floating:M}:{},[d,L,M])}function W1(e){const{open:i=!1,onOpenChange:a,elements:r}=e,s=F1(),o=S.useRef({}),[d]=S.useState(()=>K1()),g=Of()!=null,[c,m]=S.useState(r.reference),h=gt((T,P,v)=>{o.current.openEvent=T?P:void 0,d.emit("openchange",{open:T,event:P,reason:v,nested:g}),a?.(T,P,v)}),y=S.useMemo(()=>({setPositionReference:m}),[]),_=S.useMemo(()=>({reference:c||r.reference||null,floating:r.floating||null,domReference:r.reference}),[c,r.reference,r.floating]);return S.useMemo(()=>({dataRef:o,open:i,onOpenChange:h,elements:_,events:d,floatingId:s,refs:y}),[i,h,_,d,s,y])}function z1(e){e===void 0&&(e={});const{nodeId:i}=e,a=W1({...e,elements:{reference:null,floating:null,...e.elements}}),r=e.rootContext||a,s=r.elements,[o,d]=S.useState(null),[g,c]=S.useState(null),h=s?.domReference||o,y=S.useRef(null),_=Zl();gr(()=>{h&&(y.current=h)},[h]);const T=s1({...e,elements:{...s,...g&&{reference:g}}}),P=S.useCallback(R=>{const V=Pe(R)?{getBoundingClientRect:()=>R.getBoundingClientRect(),getClientRects:()=>R.getClientRects(),contextElement:R}:R;c(V),T.refs.setReference(V)},[T.refs]),v=S.useCallback(R=>{(Pe(R)||R===null)&&(y.current=R,d(R)),(Pe(T.refs.reference.current)||T.refs.reference.current===null||R!==null&&!Pe(R))&&T.refs.setReference(R)},[T.refs]),E=S.useMemo(()=>({...T.refs,setReference:v,setPositionReference:P,domReference:y}),[T.refs,v,P]),A=S.useMemo(()=>({...T.elements,domReference:h}),[T.elements,h]),B=S.useMemo(()=>({...T,...r,refs:E,elements:A,nodeId:i}),[T,E,A,i,r]);return gr(()=>{r.dataRef.current.floatingContext=B;const R=_?.nodesRef.current.find(V=>V.id===i);R&&(R.context=B)}),S.useMemo(()=>({...T,context:B,refs:E,elements:A}),[T,E,A,B])}function Qs(){return w1()&&_1()}function X1(e,i){i===void 0&&(i={});const{open:a,onOpenChange:r,events:s,dataRef:o,elements:d}=e,{enabled:g=!0,visibleOnly:c=!0}=i,m=S.useRef(!1),h=S.useRef(-1),y=S.useRef(!0);S.useEffect(()=>{if(!g)return;const T=mn(d.domReference);function P(){!a&&_n(d.domReference)&&d.domReference===Zd(Ft(d.domReference))&&(m.current=!0)}function v(){y.current=!0}function E(){y.current=!1}return T.addEventListener("blur",P),Qs()&&(T.addEventListener("keydown",v,!0),T.addEventListener("pointerdown",E,!0)),()=>{T.removeEventListener("blur",P),Qs()&&(T.removeEventListener("keydown",v,!0),T.removeEventListener("pointerdown",E,!0))}},[d.domReference,a,g]),S.useEffect(()=>{if(!g)return;function T(P){let{reason:v}=P;(v==="reference-press"||v==="escape-key")&&(m.current=!0)}return s.on("openchange",T),()=>{s.off("openchange",T)}},[s,g]),S.useEffect(()=>()=>{Bn(h)},[]);const _=S.useMemo(()=>({onMouseLeave(){m.current=!1},onFocus(T){if(m.current)return;const P=ir(T.nativeEvent);if(c&&Pe(P)){if(Qs()&&!T.relatedTarget){if(!y.current&&!I1(P))return}else if(!j1(P))return}r(!0,T.nativeEvent,"focus")},onBlur(T){m.current=!1;const P=T.relatedTarget,v=T.nativeEvent,E=Pe(P)&&P.hasAttribute(Jl("focus-guard"))&&P.getAttribute("data-type")==="outside";h.current=window.setTimeout(()=>{var A;const B=Zd(d.domReference?d.domReference.ownerDocument:document);!P&&B===d.domReference||Wr((A=o.current.floatingContext)==null?void 0:A.refs.floating.current,B)||Wr(d.domReference,B)||E||r(!1,v,"focus")})}}),[o,d.domReference,r,c]);return S.useMemo(()=>g?{reference:_}:{},[g,_])}function el(e,i,a){const r=new Map,s=a==="item";let o=e;if(s&&e){const{[Jd]:d,[Qd]:g,...c}=e;o=c}return{...a==="floating"&&{tabIndex:-1,[B1]:""},...o,...i.map(d=>{const g=d?d[a]:null;return typeof g=="function"?e?g(e):null:g}).concat(e).reduce((d,g)=>(g&&Object.entries(g).forEach(c=>{let[m,h]=c;if(!(s&&[Jd,Qd].includes(m)))if(m.indexOf("on")===0){if(r.has(m)||r.set(m,[]),typeof h=="function"){var y;(y=r.get(m))==null||y.push(h),d[m]=function(){for(var _,T=arguments.length,P=new Array(T),v=0;v<T;v++)P[v]=arguments[v];return(_=r.get(m))==null?void 0:_.map(E=>E(...P)).find(E=>E!==void 0)}}}else d[m]=h}),d),{})}}function Z1(e){e===void 0&&(e=[]);const i=e.map(g=>g?.reference),a=e.map(g=>g?.floating),r=e.map(g=>g?.item),s=S.useCallback(g=>el(g,e,"reference"),i),o=S.useCallback(g=>el(g,e,"floating"),a),d=S.useCallback(g=>el(g,e,"item"),r);return S.useMemo(()=>({getReferenceProps:s,getFloatingProps:o,getItemProps:d}),[s,o,d])}function J1(e,i,a){a===void 0&&(a=!0);let r=e.filter(o=>{var d;return o.parentId===i&&((d=o.context)==null?void 0:d.open)}),s=r;for(;s.length;)s=a?e.filter(o=>{var d;return(d=s)==null?void 0:d.some(g=>{var c;return o.parentId===g.id&&((c=o.context)==null?void 0:c.open)})}):e,r=r.concat(s);return r}function ag(e,i){const[a,r]=e;let s=!1;const o=i.length;for(let d=0,g=o-1;d<o;g=d++){const[c,m]=i[d]||[0,0],[h,y]=i[g]||[0,0];m>=r!=y>=r&&a<=(h-c)*(r-m)/(y-m)+c&&(s=!s)}return s}function Q1(e,i){return e[0]>=i.x&&e[0]<=i.x+i.width&&e[1]>=i.y&&e[1]<=i.y+i.height}function eT(e){e===void 0&&(e={});const{buffer:i=.5,blockPointerEvents:a=!1,requireIntent:r=!0}=e;let s,o=!1,d=null,g=null,c=performance.now();function m(y,_){const T=performance.now(),P=T-c;if(d===null||g===null||P===0)return d=y,g=_,c=T,null;const v=y-d,E=_-g,B=Math.sqrt(v*v+E*E)/P;return d=y,g=_,c=T,B}const h=y=>{let{x:_,y:T,placement:P,elements:v,onClose:E,nodeId:A,tree:B}=y;return function(V){function O(){clearTimeout(s),E()}if(clearTimeout(s),!v.domReference||!v.floating||P==null||_==null||T==null)return;const{clientX:D,clientY:N}=V,I=[D,N],C=$1(V),X=V.type==="mouseleave",Y=Js(v.floating,C),J=Js(v.domReference,C),L=v.domReference.getBoundingClientRect(),M=v.floating.getBoundingClientRect(),Q=P.split("-")[0],ne=_>M.right-M.width/2,Z=T>M.bottom-M.height/2,G=Q1(I,L),W=M.width>L.width,ae=M.height>L.height,te=(W?L:M).left,le=(W?L:M).right,he=(ae?L:M).top,pn=(ae?L:M).bottom;if(Y&&(o=!0,!X))return;if(J&&(o=!1),J&&!X){o=!0;return}if(X&&Pe(V.relatedTarget)&&Js(v.floating,V.relatedTarget)||B&&J1(B.nodesRef.current,A).some(Ce=>{let{context:ve}=Ce;return ve?.open}))return;if(Q==="top"&&T>=L.bottom-1||Q==="bottom"&&T<=L.top+1||Q==="left"&&_>=L.right-1||Q==="right"&&_<=L.left+1)return O();let Ke=[];switch(Q){case"top":Ke=[[te,L.top+1],[te,M.bottom-1],[le,M.bottom-1],[le,L.top+1]];break;case"bottom":Ke=[[te,M.top+1],[te,L.bottom-1],[le,L.bottom-1],[le,M.top+1]];break;case"left":Ke=[[M.right-1,pn],[M.right-1,he],[L.left+1,he],[L.left+1,pn]];break;case"right":Ke=[[L.right-1,pn],[L.right-1,he],[M.left+1,he],[M.left+1,pn]];break}function qe(Ce){let[ve,we]=Ce;switch(Q){case"top":{const Ze=[W?ve+i/2:ne?ve+i*4:ve-i*4,we+i+1],Ve=[W?ve-i/2:ne?ve+i*4:ve-i*4,we+i+1],$e=[[M.left,ne||W?M.bottom-i:M.top],[M.right,ne?W?M.bottom-i:M.top:M.bottom-i]];return[Ze,Ve,...$e]}case"bottom":{const Ze=[W?ve+i/2:ne?ve+i*4:ve-i*4,we-i],Ve=[W?ve-i/2:ne?ve+i*4:ve-i*4,we-i],$e=[[M.left,ne||W?M.top+i:M.bottom],[M.right,ne?W?M.top+i:M.bottom:M.top+i]];return[Ze,Ve,...$e]}case"left":{const Ze=[ve+i+1,ae?we+i/2:Z?we+i*4:we-i*4],Ve=[ve+i+1,ae?we-i/2:Z?we+i*4:we-i*4];return[...[[Z||ae?M.right-i:M.left,M.top],[Z?ae?M.right-i:M.left:M.right-i,M.bottom]],Ze,Ve]}case"right":{const Ze=[ve-i,ae?we+i/2:Z?we+i*4:we-i*4],Ve=[ve-i,ae?we-i/2:Z?we+i*4:we-i*4],$e=[[Z||ae?M.left+i:M.right,M.top],[Z?ae?M.left+i:M.right:M.left+i,M.bottom]];return[Ze,Ve,...$e]}}}if(!ag([D,N],Ke)){if(o&&!G)return O();if(!X&&r){const Ce=m(V.clientX,V.clientY);if(Ce!==null&&Ce<.1)return O()}ag([D,N],qe([_,T]))?!o&&r&&(s=window.setTimeout(O,40)):O()}}};return h.__options={blockPointerEvents:a},h}const nT=S.createContext(null),tT=(e,i)=>{var a,r,s;const{size:o,error:d,errorId:g}=e,c=S.useContext(nT),m=fi(),h=(a=e.id)!==null&&a!==void 0?a:`${i}-${m}`,y=g??`${i}-error-${m}`,_=`${i}-description-${m}`,T=c?.disabled||e.disabled,P=(c?.readOnly||e.readOnly)&&!T||void 0,v=!T&&!P&&!!(d||c?.error),E=!T&&!P&&!!d&&typeof d!="boolean",A=Object.assign({},v?{"aria-invalid":!0}:{});return e?.required,{showErrorMsg:E,hasError:v,errorId:y,inputDescriptionId:_,size:(r=o??c?.size)!==null&&r!==void 0?r:"medium",readOnly:P,inputProps:Object.assign(Object.assign({id:h},A),{"aria-describedby":uf(e["aria-describedby"],{[_]:!!e?.description&&typeof e?.description=="string",[y]:E,[(s=c?.errorId)!==null&&s!==void 0?s:""]:v&&!!c?.error})||void 0,disabled:T})}};function Xe(e,i,a,r){return r?typeof r=="string"?{[`--__${e}c-${i}-${a}-xs`]:r}:Object.fromEntries(Object.entries(r).map(([s,o])=>[`--__${e}c-${i}-${a}-${s}`,o])):{}}const rT={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},ig=(e,i,a,r,s,o)=>i.split(" ").map((d,g,c)=>{var m;if(e==="margin-inline"&&d==="full")return`calc((100vw - ${100/c.length}%)/-2)`;if(e==="padding-inline"&&d==="full")return`calc((100vw - ${100/c.length}%)/2)`;if(["mi","mb"].includes(e)&&d==="auto")return"auto";let h=`var(--${o}-${a}-${d})`;if(r.includes(d))h=d==="px"?"1px":d;else if(d.startsWith("space"))h=`var(--${o}-${d})`;else{const y=`--${o}-spacing-${d}`;h=`var(${(m=rT[y])!==null&&m!==void 0?m:y})`}return s?d==="0"?"0":`calc(-1 * ${h})`:h}).join(" ");function Tn(e,i,a,r,s,o=!1,d=[]){if(!s)return{};if(typeof s=="string")return{[`--__${e}c-${i}-${a}-xs`]:ig(a,s,r,d,o,e)};const g={};return Object.entries(s).forEach(([c,m])=>{g[`--__${e}c-${i}-${a}-${c}`]=ig(a,m,r,d,o,e)}),g}const Pf=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],xf=({children:e,className:i,padding:a,paddingInline:r,paddingBlock:s,margin:o,marginInline:d,marginBlock:g,width:c,minWidth:m,maxWidth:h,height:y,minHeight:_,maxHeight:T,position:P,inset:v,top:E,right:A,left:B,bottom:R,overflow:V,overflowX:O,overflowY:D,flexBasis:N,flexGrow:I,flexShrink:C,gridColumn:X})=>{const Y=mr(!1),{cn:J}=Ne(),L=Y?"ax":"a",M=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},Tn(L,"r","p","spacing",a)),Tn(L,"r","pi","spacing",r)),Tn(L,"r","pb","spacing",s)),Tn(L,"r","m","spacing",o)),Tn(L,"r","mi","spacing",d)),Tn(L,"r","mb","spacing",g)),Xe(L,"r","w",c)),Xe(L,"r","minw",m)),Xe(L,"r","maxw",h)),Xe(L,"r","h",y)),Xe(L,"r","minh",_)),Xe(L,"r","maxh",T)),Xe(L,"r","position",P)),Tn(L,"r","inset","spacing",v)),Tn(L,"r","top","spacing",E)),Tn(L,"r","right","spacing",A)),Tn(L,"r","bottom","spacing",R)),Tn(L,"r","left","spacing",B)),Xe(L,"r","overflow",V)),Xe(L,"r","overflowx",O)),Xe(L,"r","overflowy",D)),Xe(L,"r","flex-basis",N)),Xe(L,"r","flex-grow",I)),Xe(L,"r","flex-shrink",C)),Xe(L,"r","grid-column",X));return z.createElement(Xr,{className:J({className:i,"navds-r-p":a,"navds-r-pi":r,"navds-r-pb":s,"navds-r-m":o,"navds-r-mi":d,"navds-r-mb":g,"navds-r-w":c,"navds-r-minw":m,"navds-r-maxw":h,"navds-r-h":y,"navds-r-minh":_,"navds-r-maxh":T,"navds-r-position":P,"navds-r-inset":v,"navds-r-top":E,"navds-r-right":A,"navds-r-bottom":R,"navds-r-left":B,"navds-r-overflow":V,"navds-r-overflowx":O,"navds-r-overflowy":D,"navds-r-flex-basis":N,"navds-r-flex-grow":I,"navds-r-flex-shrink":C,"navds-r-grid-column":X}),style:M},e)};var aT=function(e,i){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)i.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]]);return a};const iT=S.forwardRef((e,i)=>{var{children:a,className:r,as:s="div",columns:o,gap:d,style:g,align:c,asChild:m}=e,h=aT(e,["children","className","as","columns","gap","style","align","asChild"]);const _=mr(!1)?"ax":"a",{cn:T}=Ne(),P=Object.assign(Object.assign(Object.assign(Object.assign({},g),{[`--__${_}c-hgrid-align`]:c}),Tn(_,"hgrid","gap","spacing",d)),Xe(_,"hgrid","columns",sT(o))),v=m?Xr:s;return z.createElement(xf,Object.assign({},h),z.createElement(v,Object.assign({},Zr(h,Pf),{ref:i,className:T("navds-hgrid",r,{"navds-hgrid-gap":d,"navds-hgrid-align":c}),style:P}),a))});function sT(e){return e?typeof e=="string"||typeof e=="number"?sg(e):Object.fromEntries(Object.entries(e).map(([i,a])=>[i,sg(a)])):{}}const sg=e=>typeof e=="number"?`repeat(${e}, minmax(0, 1fr))`:e;var lT=function(e,i){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)i.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]]);return a};const Bf=S.forwardRef((e,i)=>{var{children:a,className:r,as:s="div",align:o,justify:d,wrap:g=!0,gap:c,style:m,direction:h="row",asChild:y}=e,_=lT(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const P=mr(!1)?"ax":"a",{cn:v}=Ne(),E=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},m),Tn(P,"stack","gap","spacing",c)),Xe(P,"stack","direction",h)),Xe(P,"stack","align",o)),Xe(P,"stack","justify",d)),A=y?Xr:s;return z.createElement(xf,Object.assign({},_),z.createElement(A,Object.assign({},Zr(_,Pf),{ref:i,style:E,className:v("navds-stack",r,{"navds-vstack":h==="column","navds-hstack":h==="row","navds-stack-gap":c,"navds-stack-align":o,"navds-stack-justify":d,"navds-stack-direction":h,"navds-stack-wrap":g})}),a))});var oT=function(e,i){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)i.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]]);return a};const lr=S.forwardRef((e,i)=>{var{as:a="div"}=e,r=oT(e,["as"]);return z.createElement(Bf,Object.assign({as:a},r,{ref:i,direction:"row"}))});var uT=function(e,i){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)i.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]]);return a};const vi=S.forwardRef((e,i)=>{var{as:a="div"}=e,r=uT(e,["as"]);return z.createElement(Bf,Object.assign({as:a},r,{ref:i,direction:"column",wrap:!1}))}),ti=S.createContext({listType:"ul",size:"medium"});var dT=function(e,i){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)i.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]]);return a};const qf=S.forwardRef((e,i)=>{var{className:a,children:r,title:s,icon:o}=e,d=dT(e,["className","children","title","icon"]);const{listType:g,size:c}=S.useContext(ti),{cn:m}=Ne();return g==="ol"&&o&&console.warn("<List />: Icon prop is not supported for ordered lists. Please remove the icon prop."),z.createElement("li",Object.assign({},d,{ref:i,className:m("navds-list__item",a)}),g==="ul"&&z.createElement("div",{className:m("navds-list__item-marker",{"navds-list__item-marker--icon":o,"navds-list__item-marker--bullet":!o})},o||z.createElement("svg",{width:"0.375rem",height:"0.375rem",viewBox:"0 0 6 6",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,focusable:!1,role:"img"},z.createElement("rect",{width:"6",height:"6",rx:"3",fill:"currentColor"}))),z.createElement("div",null,s&&z.createElement(fl,{as:"p",size:c,weight:"semibold"},s),r))});qf.displayName="List.Item";var gT=function(e,i){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)i.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]]);return a};const fT={small:"xsmall",medium:"small",large:"medium"},kl=S.forwardRef((e,i)=>{var{children:a,className:r,as:s="ul",title:o,description:d,headingTag:g,size:c,"aria-label":m,"aria-labelledby":h}=e,y=gT(e,["children","className","as","title","description","headingTag","size","aria-label","aria-labelledby"]);const{size:_}=S.useContext(ti),{cn:T}=Ne(),P=mr(!1),v=c??_;return P?z.createElement(ti.Provider,{value:{listType:s,size:v}},z.createElement(fl,Object.assign({as:"div"},y,{size:v,ref:i,className:T("navds-list",`navds-list--${v}`,r)}),z.createElement(s,{role:"list","aria-label":m,"aria-labelledby":h},a))):z.createElement(ti.Provider,{value:{listType:s,size:v}},z.createElement(fl,Object.assign({as:"div"},y,{size:v,ref:i,className:T("navds-list",`navds-list--${v}`,r)}),o&&z.createElement(pf,{size:fT[v],as:g??"h3"},o),d&&z.createElement(gi,{size:v},d),z.createElement(s,{role:"list","aria-label":m,"aria-labelledby":h},a)))});kl.Item=qf;var cT=function(e,i){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)i.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]]);return a};const mT=S.forwardRef((e,i)=>{var{className:a}=e,r=cT(e,["className"]);const{cn:s}=Ne();return z.createElement("tbody",Object.assign({},r,{ref:i,className:s("navds-table__body",a)}))});var pT=function(e,i){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)i.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]]);return a};const Df=S.forwardRef((e,i)=>{var{className:a,children:r,align:s,textSize:o}=e,d=pT(e,["className","children","align","textSize"]);const{cn:g}=Ne();return z.createElement("th",Object.assign({ref:i,className:g("navds-table__header-cell","navds-label",a,{[`navds-table__header-cell--align-${s}`]:s,"navds-label--small":o==="small"})},d),r)}),Mf=S.createContext(null);var hT=function(e,i){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)i.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]]);return a};const kT=S.forwardRef((e,i)=>{var a,r,s,o,{className:d,children:g,sortable:c=!1,sortKey:m}=e,h=hT(e,["className","children","sortable","sortKey"]);const y=S.useContext(Mf),{cn:_}=Ne();return c&&!m&&console.warn("ColumnHeader with `sortable=true` must have a sortKey."),z.createElement(Df,Object.assign({scope:"col",ref:i,className:_(d),"aria-sort":c?((a=y?.sort)===null||a===void 0?void 0:a.orderBy)===m?(r=y?.sort)===null||r===void 0?void 0:r.direction:"none":void 0},h),c?z.createElement("button",{type:"button",className:_("navds-table__sort-button"),onClick:c&&m?()=>{var T;return(T=y?.onSortChange)===null||T===void 0?void 0:T.call(y,m)}:void 0},g,((s=y?.sort)===null||s===void 0?void 0:s.orderBy)===m?((o=y?.sort)===null||o===void 0?void 0:o.direction)==="descending"?z.createElement(F0,{"aria-hidden":!0}):z.createElement(C0,{"aria-hidden":!0}):z.createElement(O0,{"aria-hidden":!0})):g)});var vT=function(e,i){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)i.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]]);return a};const Lf=S.forwardRef((e,i)=>{var{className:a,children:r="",align:s,textSize:o}=e,d=vT(e,["className","children","align","textSize"]);const{cn:g}=Ne();return z.createElement(gi,Object.assign({as:"td",ref:i,className:g("navds-table__data-cell",a,{[`navds-table__data-cell--align-${s}`]:s}),size:o},d),r)});var yT=function(e,i){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)i.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]]);return a};const bT=globalThis?.matchMedia?globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches:!1;function ET(e){const i=parseFloat(e);return!Number.isNaN(i)&&Number.isFinite(i)}function lg(e){return typeof e=="string"&&e[e.length-1]==="%"&&ET(e.substring(0,e.length-1))}function nl(e,i){i===0&&e?.style&&(e.style.display="none")}function TT(e,i){i===0&&e?.style&&(e.style.display="")}const _T=e=>{var{children:i,className:a,innerClassName:r,duration:s=250,easing:o="ease",height:d}=e,g=yT(e,["children","className","innerClassName","duration","easing","height"]);const{cn:c}=Ne(),m=S.useRef(d),h=S.useRef(null),y=S.useRef(),_=S.useRef(),T=S.useRef(d),P=S.useRef("visible"),v=bT?0:s;typeof T.current=="number"?(typeof d!="string"&&(T.current=d<0?0:d),P.current="hidden"):lg(T.current)&&(T.current=d==="0%"?0:d,P.current="hidden");const[E,A]=S.useState(T.current),[B,R]=S.useState(P.current),[V,O]=S.useState(!1);S.useEffect(()=>{nl(h.current,T.current)},[]),S.useEffect(()=>{if(d!==m.current&&h.current){TT(h.current,m.current),h.current.style.overflow="hidden";const C=h.current.offsetHeight;h.current.style.overflow="";const X=v;let Y,J,L="hidden",M;const Q=m.current==="auto";typeof d=="number"?(Y=d<0?0:d,J=Y):lg(d)?(Y=d==="0%"?0:d,J=Y):(Y=C,J="auto",L=void 0),Q&&(J=Y,Y=C),A(Y),R("hidden"),O(!Q),clearTimeout(_.current),clearTimeout(y.current),Q?(M=!0,_.current=setTimeout(()=>{A(J),R(L),O(M)},50),y.current=setTimeout(()=>{O(!1),nl(h.current,J)},X)):_.current=setTimeout(()=>{A(J),R(L),O(!1),d!=="auto"&&nl(h.current,Y)},X)}return m.current=d,()=>{clearTimeout(_.current),clearTimeout(y.current)}},[d]);const D={height:E,overflow:B};V&&(D.transition=`height ${v}ms ${o} 0ms`,D.WebkitTransition=D.transition);const I=typeof g["aria-hidden"]<"u"?g["aria-hidden"]:d===0;return z.createElement("div",Object.assign({},g,{className:c(a),style:D}),z.createElement("div",{"aria-hidden":I,className:c(r),ref:h},i))};var wT=function(e,i){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)i.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]]);return a};const Ff=S.forwardRef((e,i)=>{var{className:a,selected:r=!1,shadeOnHover:s=!0}=e,o=wT(e,["className","selected","shadeOnHover"]);const{cn:d}=Ne();return z.createElement("tr",Object.assign({},o,{ref:i,className:d("navds-table__row",a,{"navds-table__row--selected":r,"navds-table__row--shade-on-hover":s})}))});var AT=function(e,i){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)i.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]]);return a};const RT=S.forwardRef((e,i)=>{var{className:a,children:r,content:s,togglePlacement:o="left",defaultOpen:d=!1,open:g,onOpenChange:c,expansionDisabled:m=!1,expandOnRowClick:h=!1,colSpan:y=999,contentGutter:_,onClick:T}=e,P=AT(e,["className","children","content","togglePlacement","defaultOpen","open","onOpenChange","expansionDisabled","expandOnRowClick","colSpan","contentGutter","onClick"]);const{cn:v}=Ne(),[E,A]=hf({defaultValue:d,value:g,onChange:c}),B=ki("global"),R=fi(),V=D=>{A(N=>!N),D.stopPropagation()},O=D=>{h&&!m&&!Kf(D.target)&&V(D)};return z.createElement(z.Fragment,null,z.createElement(Ff,Object.assign({},P,{ref:i,className:v("navds-table__expandable-row",a,{"navds-table__expandable-row--open":E,"navds-table__expandable-row--expansion-disabled":m,"navds-table__expandable-row--clickable":h}),onClick:$l(T,O)}),o==="right"&&r,z.createElement(Lf,{className:v("navds-table__toggle-expand-cell",{"navds-table__toggle-expand-cell--open":E}),onClick:m?()=>null:V},!m&&z.createElement("button",{className:v("navds-table__toggle-expand-button"),type:"button","aria-controls":R,"aria-expanded":E,onClick:V},z.createElement(x0,{className:v("navds-table__expandable-icon"),title:B(E?"showLess":"showMore")}))),o==="left"&&r),z.createElement("tr",{"data-state":E?"open":"closed",className:v("navds-table__expanded-row"),"aria-hidden":!E,id:R},z.createElement("td",{colSpan:y,className:v("navds-table__expanded-row-cell")},z.createElement(_T,{className:v("navds-table__expanded-row-collapse"),innerClassName:v(`navds-table__expanded-row-content navds-table__expanded-row-content--gutter-${_??o}`),height:E?"auto":0,duration:150,easing:"cubic-bezier(0.39,0.57,0.56,1)"},s))))});function Kf(e){return e.nodeName==="TD"||e.nodeName==="TH"||!e.parentElement?!1:["BUTTON","DETAILS","LABEL","SELECT","TEXTAREA","INPUT","A"].includes(e.nodeName)?!0:Kf(e.parentElement)}var ST=function(e,i){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)i.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]]);return a};const IT=S.forwardRef((e,i)=>{var{className:a}=e,r=ST(e,["className"]);const{cn:s}=Ne();return z.createElement("thead",Object.assign({},r,{ref:i,className:s("navds-table__header",a)}))});var jT=function(e,i){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)i.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]]);return a};const Fe=S.forwardRef((e,i)=>{var{className:a,zebraStripes:r=!1,size:s="medium",onSortChange:o,sort:d,stickyHeader:g=!1}=e,c=jT(e,["className","zebraStripes","size","onSortChange","sort","stickyHeader"]);const{cn:m}=Ne();return z.createElement(Mf.Provider,{value:{onSortChange:o,sort:d}},z.createElement("table",Object.assign({},c,{ref:i,className:m("navds-table",`navds-table--${s}`,a,{"navds-table--zebra-stripes":r,"navds-table--sticky-header":g})})))});Fe.Header=IT;Fe.Body=mT;Fe.Row=Ff;Fe.ColumnHeader=kT;Fe.HeaderCell=Df;Fe.DataCell=Lf;Fe.ExpandableRow=RT;var NT=function(e,i){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)i.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]]);return a};const OT=S.forwardRef((e,i)=>{var{children:a,className:r,arrow:s=!0,placement:o="top",open:d,defaultOpen:g=!1,onOpenChange:c,offset:m,content:h,delay:y=150,id:_,keys:T,maxChar:P=80,describesChild:v=!1}=e,E=NT(e,["children","className","arrow","placement","open","defaultOpen","onOpenChange","offset","content","delay","id","keys","maxChar","describesChild"]);const{cn:A}=Ne(),[B,R]=hf({defaultValue:g,value:d,onChange:c}),V=S.useRef(null),O=H0(!1),D=O?O.ref.current:void 0,{x:N,y:I,strategy:C,context:X,placement:Y,middlewareData:{arrow:{x:J,y:L}={},hide:{referenceHidden:M}={}},refs:Q}=z1({placement:o,open:B,onOpenChange:te=>R(te),middleware:[o1(m??(s?8:4)),u1(),d1({padding:5,fallbackPlacements:["bottom","top"]}),g1({element:V,padding:5})],whileElementsMounted:O?(te,le,he)=>Yd(te,le,he,{animationFrame:!0}):Yd,strategy:O?"fixed":void 0}),{getReferenceProps:ne,getFloatingProps:Z}=Z1([H1(X,{handleClose:eT(),restMs:y}),X1(X),Y1(X)]),G=fi(_),W=gf(i,Q.setFloating);if(!a||a?.type===z.Fragment||a===z.Fragment)return console.error("<Tooltip> children needs to be a single ReactElement and not: <React.Fragment/> | <></>"),null;h?.length>P&&B&&console.warn(`Because of strict accessibility concers we encourage all Tooltips to have less than 80 characters. Can be overwritten with the maxChar-prop

Length:${h.length}
Tooltip-content: ${h}`);const ae=v?B?{"aria-describedby":G}:{title:h}:{"aria-label":h};return z.createElement(z.Fragment,null,z.createElement(Xr,Object.assign({ref:Q.setReference},ne(),ae,{"aria-keyshortcuts":T?T.join("+"):void 0}),a),z.createElement(AE,{rootElement:D,asChild:!0},B&&z.createElement("div",Object.assign({},Z(Object.assign(Object.assign({},E),{ref:W,style:{position:C,top:I??0,left:N??0,visibility:M?"hidden":"visible"},role:"tooltip",id:G,className:A("navds-tooltip","navds-detail navds-detail--small",r)})),{"data-side":Y,"data-state":"open"}),h,T&&z.createElement("span",{className:A("navds-tooltip__keys"),"aria-hidden":!0},T.map(te=>z.createElement(b0,{as:"kbd",key:te,className:A("navds-tooltip__key")},te))),s&&z.createElement("div",{ref:te=>{V.current=te},className:A("navds-tooltip__arrow"),style:{left:J!=null?`${J}px`:"",top:L!=null?`${L}px`:"",right:"",bottom:"",[{top:"bottom",right:"left",bottom:"top",left:"right"}[Y]]:"-3.5px"}}))))}),Cf=S.createContext(null);var PT=function(e,i){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)i.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]]);return a};const Vf=S.forwardRef((e,i)=>{var a,{className:r,children:s,disabled:o,onClick:d}=e,g=PT(e,["className","children","disabled","onClick"]);const{cn:c}=Ne(),m=ki("Search"),h=S.useContext(Cf);if(h===null)return console.warn("<Search.Button> has to be wrapped in <Search />"),null;const{size:y,variant:_,handleClick:T}=h;return z.createElement(Xl,Object.assign({type:"submit"},g,{ref:i,size:y,variant:_==="secondary"?"secondary":"primary",className:c("navds-search__button-search",r),disabled:(a=h?.disabled)!==null&&a!==void 0?a:o,onClick:$l(d,T),icon:z.createElement(kf,Object.assign({},s?{"aria-hidden":!0}:{title:m("search")}))}),s)});var xT=function(e,i){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)i.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]]);return a};const vl=S.forwardRef((e,i)=>{const{inputProps:a,size:r="medium",inputDescriptionId:s,errorId:o,showErrorMsg:d,hasError:g}=tT(e,"searchfield"),{className:c,hideLabel:m=!0,label:h,description:y,value:_,clearButtonLabel:T,onClear:P,clearButton:v=!0,children:E,variant:A="primary",defaultValue:B,onChange:R,onSearchClick:V,htmlSize:O,"data-color":D}=e,N=xT(e,["className","hideLabel","label","description","value","clearButtonLabel","onClear","clearButton","children","variant","defaultValue","onChange","onSearchClick","htmlSize","data-color"]),{cn:I}=Ne(),C=S.useRef(null),X=gf(C,i),[Y,J]=S.useState(B??""),L=Z=>{_===void 0&&J(Z),R?.(Z)},M=Z=>{var G,W;P?.(Z),L(""),(W=(G=C.current)===null||G===void 0?void 0:G.focus)===null||W===void 0||W.call(G)},Q=()=>{V?.(`${_??Y}`)},ne=v&&!a.disabled&&(_??Y);return z.createElement("div",{onKeyDown:Z=>{var G;Z.key==="Escape"&&(!((G=C.current)===null||G===void 0)&&G.value&&Z.preventDefault(),M({trigger:"Escape",event:Z}))},className:I(c,"navds-form-field",`navds-form-field--${r}`,"navds-search",{"navds-search--error":g,"navds-search--disabled":a.disabled,"navds-search--with-size":O}),"data-color":D},z.createElement(Hl,{htmlFor:a.id,size:r,className:I("navds-form-field__label",{"navds-sr-only":m})},h),!!y&&z.createElement(gi,{className:I("navds-form-field__description",{"navds-sr-only":m}),id:s,size:r,as:"div"},y),z.createElement("div",{className:I("navds-search__wrapper")},z.createElement("div",{className:I("navds-search__wrapper-inner")},A==="simple"&&z.createElement(kf,{"aria-hidden":!0,className:I("navds-search__search-icon")}),z.createElement("input",Object.assign({ref:X},Zr(N,["error","errorId","size","readOnly"]),a,{value:_??Y,onChange:Z=>L(Z.target.value),type:"search",className:I(c,"navds-search__input",`navds-search__input--${A}`,"navds-text-field__input","navds-body-short",`navds-body-short--${r}`)},O?{size:Number(O)}:{})),ne&&z.createElement(BT,{handleClear:M,size:r,clearButtonLabel:T})),z.createElement(Cf.Provider,{value:{size:r,disabled:a.disabled,variant:A,handleClick:Q}},E||A!=="simple"&&z.createElement(Vf,{"data-color":D}))),z.createElement("div",{className:I("navds-form-field__error"),id:o,"aria-relevant":"additions removals","aria-live":"polite"},d&&z.createElement(T0,{size:r,showIcon:!0},e.error)))});function BT({size:e,clearButtonLabel:i,handleClear:a}){const{cn:r}=Ne(),s=mr(!1),o=ki("Search");return s?z.createElement(Xl,{className:r("navds-search__button-clear"),variant:"tertiary","data-color":"neutral",size:e==="medium"?"small":"xsmall",icon:z.createElement(Hd,{"aria-hidden":!0}),title:i||o("clear"),onClick:d=>a({trigger:"Click",event:d}),type:"button"}):z.createElement("button",{type:"button",onClick:d=>a({trigger:"Click",event:d}),className:r("navds-search__button-clear")},z.createElement("span",{className:r("navds-sr-only")},i||o("clear")),z.createElement(Hd,{"aria-hidden":!0}))}vl.Button=Vf;const qT=e=>{if(e==null)return;const i=e.toString().replace(/\s/g,"");if(!Number.isNaN(i))return Number(Math.round(parseFloat(i))).toLocaleString("nb-NO").replace(/,|\s/g," ")};function Ql(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var yl={exports:{}},DT=yl.exports,og;function MT(){return og||(og=1,function(e,i){(function(a,r){e.exports=r()})(DT,function(){var a,r,s=1e3,o=6e4,d=36e5,g=864e5,c=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m=31536e6,h=2628e6,y=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,_={years:m,months:h,days:g,hours:d,minutes:o,seconds:s,milliseconds:1,weeks:6048e5},T=function(D){return D instanceof V},P=function(D,N,I){return new V(D,I,N.$l)},v=function(D){return r.p(D)+"s"},E=function(D){return D<0},A=function(D){return E(D)?Math.ceil(D):Math.floor(D)},B=function(D){return Math.abs(D)},R=function(D,N){return D?E(D)?{negative:!0,format:""+B(D)+N}:{negative:!1,format:""+D+N}:{negative:!1,format:""}},V=function(){function D(I,C,X){var Y=this;if(this.$d={},this.$l=X,I===void 0&&(this.$ms=0,this.parseFromMilliseconds()),C)return P(I*_[v(C)],this);if(typeof I=="number")return this.$ms=I,this.parseFromMilliseconds(),this;if(typeof I=="object")return Object.keys(I).forEach(function(M){Y.$d[v(M)]=I[M]}),this.calMilliseconds(),this;if(typeof I=="string"){var J=I.match(y);if(J){var L=J.slice(2).map(function(M){return M!=null?Number(M):0});return this.$d.years=L[0],this.$d.months=L[1],this.$d.weeks=L[2],this.$d.days=L[3],this.$d.hours=L[4],this.$d.minutes=L[5],this.$d.seconds=L[6],this.calMilliseconds(),this}}return this}var N=D.prototype;return N.calMilliseconds=function(){var I=this;this.$ms=Object.keys(this.$d).reduce(function(C,X){return C+(I.$d[X]||0)*_[X]},0)},N.parseFromMilliseconds=function(){var I=this.$ms;this.$d.years=A(I/m),I%=m,this.$d.months=A(I/h),I%=h,this.$d.days=A(I/g),I%=g,this.$d.hours=A(I/d),I%=d,this.$d.minutes=A(I/o),I%=o,this.$d.seconds=A(I/s),I%=s,this.$d.milliseconds=I},N.toISOString=function(){var I=R(this.$d.years,"Y"),C=R(this.$d.months,"M"),X=+this.$d.days||0;this.$d.weeks&&(X+=7*this.$d.weeks);var Y=R(X,"D"),J=R(this.$d.hours,"H"),L=R(this.$d.minutes,"M"),M=this.$d.seconds||0;this.$d.milliseconds&&(M+=this.$d.milliseconds/1e3,M=Math.round(1e3*M)/1e3);var Q=R(M,"S"),ne=I.negative||C.negative||Y.negative||J.negative||L.negative||Q.negative,Z=J.format||L.format||Q.format?"T":"",G=(ne?"-":"")+"P"+I.format+C.format+Y.format+Z+J.format+L.format+Q.format;return G==="P"||G==="-P"?"P0D":G},N.toJSON=function(){return this.toISOString()},N.format=function(I){var C=I||"YYYY-MM-DDTHH:mm:ss",X={Y:this.$d.years,YY:r.s(this.$d.years,2,"0"),YYYY:r.s(this.$d.years,4,"0"),M:this.$d.months,MM:r.s(this.$d.months,2,"0"),D:this.$d.days,DD:r.s(this.$d.days,2,"0"),H:this.$d.hours,HH:r.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:r.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:r.s(this.$d.seconds,2,"0"),SSS:r.s(this.$d.milliseconds,3,"0")};return C.replace(c,function(Y,J){return J||String(X[Y])})},N.as=function(I){return this.$ms/_[v(I)]},N.get=function(I){var C=this.$ms,X=v(I);return X==="milliseconds"?C%=1e3:C=X==="weeks"?A(C/_[X]):this.$d[X],C||0},N.add=function(I,C,X){var Y;return Y=C?I*_[v(C)]:T(I)?I.$ms:P(I,this).$ms,P(this.$ms+Y*(X?-1:1),this)},N.subtract=function(I,C){return this.add(I,C,!0)},N.locale=function(I){var C=this.clone();return C.$l=I,C},N.clone=function(){return P(this.$ms,this)},N.humanize=function(I){return a().add(this.$ms,"ms").locale(this.$l).fromNow(!I)},N.valueOf=function(){return this.asMilliseconds()},N.milliseconds=function(){return this.get("milliseconds")},N.asMilliseconds=function(){return this.as("milliseconds")},N.seconds=function(){return this.get("seconds")},N.asSeconds=function(){return this.as("seconds")},N.minutes=function(){return this.get("minutes")},N.asMinutes=function(){return this.as("minutes")},N.hours=function(){return this.get("hours")},N.asHours=function(){return this.as("hours")},N.days=function(){return this.get("days")},N.asDays=function(){return this.as("days")},N.weeks=function(){return this.get("weeks")},N.asWeeks=function(){return this.as("weeks")},N.months=function(){return this.get("months")},N.asMonths=function(){return this.as("months")},N.years=function(){return this.get("years")},N.asYears=function(){return this.as("years")},D}(),O=function(D,N,I){return D.add(N.years()*I,"y").add(N.months()*I,"M").add(N.days()*I,"d").add(N.hours()*I,"h").add(N.minutes()*I,"m").add(N.seconds()*I,"s").add(N.milliseconds()*I,"ms")};return function(D,N,I){a=I,r=I().$utils(),I.duration=function(Y,J){var L=I.locale();return P(Y,{$l:L},J)},I.isDuration=T;var C=N.prototype.add,X=N.prototype.subtract;N.prototype.add=function(Y,J){return T(Y)?O(this,Y,1):C.bind(this)(Y,J)},N.prototype.subtract=function(Y,J){return T(Y)?O(this,Y,-1):X.bind(this)(Y,J)}}})}(yl)),yl.exports}var LT=MT();const FT=Ql(LT);var bl={exports:{}},KT=bl.exports,ug;function CT(){return ug||(ug=1,function(e,i){(function(a,r){e.exports=r()})(KT,function(){var a="day";return function(r,s,o){var d=function(m){return m.add(4-m.isoWeekday(),a)},g=s.prototype;g.isoWeekYear=function(){return d(this).year()},g.isoWeek=function(m){if(!this.$utils().u(m))return this.add(7*(m-this.isoWeek()),a);var h,y,_,T,P=d(this),v=(h=this.isoWeekYear(),y=this.$u,_=(y?o.utc:o)().year(h).startOf("year"),T=4-_.isoWeekday(),_.isoWeekday()>4&&(T+=7),_.add(T,a));return P.diff(v,"week")+1},g.isoWeekday=function(m){return this.$utils().u(m)?this.day()||7:this.day(this.day()%7?m:m-7)};var c=g.startOf;g.startOf=function(m,h){var y=this.$utils(),_=!!y.u(h)||h;return y.p(m)==="isoweek"?_?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):c.bind(this)(m,h)}}})}(bl)),bl.exports}var VT=CT();const HT=Ql(VT);var El={exports:{}},$T=El.exports,dg;function GT(){return dg||(dg=1,function(e,i){(function(a,r){e.exports=r()})($T,function(){var a="minute",r=/[+-]\d\d(?::?\d\d)?/g,s=/([+-]|\d\d)/g;return function(o,d,g){var c=d.prototype;g.utc=function(v){var E={date:v,utc:!0,args:arguments};return new d(E)},c.utc=function(v){var E=g(this.toDate(),{locale:this.$L,utc:!0});return v?E.add(this.utcOffset(),a):E},c.local=function(){return g(this.toDate(),{locale:this.$L,utc:!1})};var m=c.parse;c.parse=function(v){v.utc&&(this.$u=!0),this.$utils().u(v.$offset)||(this.$offset=v.$offset),m.call(this,v)};var h=c.init;c.init=function(){if(this.$u){var v=this.$d;this.$y=v.getUTCFullYear(),this.$M=v.getUTCMonth(),this.$D=v.getUTCDate(),this.$W=v.getUTCDay(),this.$H=v.getUTCHours(),this.$m=v.getUTCMinutes(),this.$s=v.getUTCSeconds(),this.$ms=v.getUTCMilliseconds()}else h.call(this)};var y=c.utcOffset;c.utcOffset=function(v,E){var A=this.$utils().u;if(A(v))return this.$u?0:A(this.$offset)?y.call(this):this.$offset;if(typeof v=="string"&&(v=function(O){O===void 0&&(O="");var D=O.match(r);if(!D)return null;var N=(""+D[0]).match(s)||["-",0,0],I=N[0],C=60*+N[1]+ +N[2];return C===0?0:I==="+"?C:-C}(v),v===null))return this;var B=Math.abs(v)<=16?60*v:v,R=this;if(E)return R.$offset=B,R.$u=v===0,R;if(v!==0){var V=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(R=this.local().add(B+V,a)).$offset=B,R.$x.$localOffset=V}else R=this.utc();return R};var _=c.format;c.format=function(v){var E=v||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return _.call(this,E)},c.valueOf=function(){var v=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*v},c.isUTC=function(){return!!this.$u},c.toISOString=function(){return this.toDate().toISOString()},c.toString=function(){return this.toDate().toUTCString()};var T=c.toDate;c.toDate=function(v){return v==="s"&&this.$offset?g(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():T.call(this)};var P=c.diff;c.diff=function(v,E,A){if(v&&this.$u===v.$u)return P.call(this,v,E,A);var B=this.local(),R=g(v).local();return P.call(B,R,E,A)}}})}(El)),El.exports}var UT=GT();const YT=Ql(UT),WT=d0(),an=e=>u0({locale:"nb-NO",messages:e},WT),gg="YYYY-MM-DD",yi={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","DateTimeLabel.Kl":" kl. ","PeriodLabel.DateToday":"d.d.","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"},ri=an(yi),Hf=(e,i)=>{const{year:a="numeric",month:r="2-digit",day:s="2-digit"}=i??{};return ri.formatDate(new Date(e),{year:a,month:r,day:s})},zT=(e,i)=>{const{separator:a="dash",year:r="numeric",month:s="2-digit",day:o="2-digit",hour:d="numeric",minute:g="numeric",second:c=void 0}=i??{},m=()=>{switch(a){case"kl":return ri.formatMessage({id:"DateTimeLabel.Kl"});case"dash":return" - "}},h=ri.formatDate(new Date(e),{year:r,month:s,day:o}),y=ri.formatDate(new Date(e),{hour:d,minute:g,second:c});return`${h}${m()}${y}`};var Tl={exports:{}},XT=Tl.exports,fg;function ZT(){return fg||(fg=1,function(e,i){(function(a,r){e.exports=r(wn)})(XT,function(a){function r(d){return d&&typeof d=="object"&&"default"in d?d:{default:d}}var s=r(a),o={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(d){return d+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return s.default.locale(o,null,!0),o})}(Tl)),Tl.exports}ZT();wn.extend(YT);wn.extend(HT);wn.extend(FT);an(yi);const fr="9999-12-31",JT=(e,i,a)=>wn(e,i,a).utc(!0).startOf("day"),cg=(e,i)=>e===fr?e:JT(e,gg).add(i,"days").format(gg);an(yi);var mg={exports:{}},Fr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pg;function QT(){if(pg)return Fr;pg=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function a(r,s,o){var d=null;if(o!==void 0&&(d=""+o),s.key!==void 0&&(d=""+s.key),"key"in s){o={};for(var g in s)g!=="key"&&(o[g]=s[g])}else o=s;return s=o.ref,{$$typeof:e,type:r,key:d,ref:s!==void 0?s:null,props:o}}return Fr.Fragment=i,Fr.jsx=a,Fr.jsxs=a,Fr}var hg;function e_(){return hg||(hg=1,mg.exports=QT()),mg.exports}e_();an(yi);function n_(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var kg={exports:{}},Kr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vg;function t_(){if(vg)return Kr;vg=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function a(r,s,o){var d=null;if(o!==void 0&&(d=""+o),s.key!==void 0&&(d=""+s.key),"key"in s){o={};for(var g in s)g!=="key"&&(o[g]=s[g])}else o=s;return s=o.ref,{$$typeof:e,type:r,key:d,ref:s!==void 0?s:null,props:o}}return Kr.Fragment=i,Kr.jsx=a,Kr.jsxs=a,Kr}var yg;function r_(){return yg||(yg=1,kg.exports=t_()),kg.exports}var St=r_();const na={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"};an(na);var bg={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Eg;function a_(){return Eg||(Eg=1,function(e){(function(){var i={}.hasOwnProperty;function a(){for(var o="",d=0;d<arguments.length;d++){var g=arguments[d];g&&(o=s(o,r.call(this,g)))}return o}function r(o){if(typeof o=="string"||typeof o=="number")return this&&this[o]||o;if(typeof o!="object")return"";if(Array.isArray(o))return a.apply(this,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var d="";for(var g in o)i.call(o,g)&&o[g]&&(d=s(d,this&&this[g]||g));return d}function s(o,d){return d?o?o+" "+d:o+d:o}e.exports?(a.default=a,e.exports=a):window.classNames=a})()}(bg)),bg.exports}var i_=a_();const eo=n_(i_),s_="_borderbox_1vkvn_1",l_="_error_1vkvn_5",o_="_warning_1vkvn_8",u_={borderbox:s_,error:l_,warning:o_};eo.bind(u_);const d_="_aksjonspunkt_kn1hn_1",g_="_erAksjonspunktApent_kn1hn_4",f_="_erIkkeGodkjentAvBeslutter_kn1hn_8",c_={aksjonspunkt:d_,erAksjonspunktApent:g_,erIkkeGodkjentAvBeslutter:f_};eo.bind(c_);const zr=({dateString:e,year:i,month:a,day:r})=>St.jsx(St.Fragment,{children:Hf(e,{year:i,month:a,day:r})}),di=({dateTimeString:e,...i})=>St.jsx(St.Fragment,{children:zT(e,i)});an(na);an(na);const m_="_divider_1t980_1",p_="_dividerParagraf_1t980_8",h_="_leftPanel_1t980_11",k_="_rightPanel_1t980_14",v_={divider:m_,dividerParagraf:p_,leftPanel:h_,rightPanel:k_};eo.bind(v_);an(na);const y_=an(na),b_=({tekst:e,children:i})=>{const[a,r]=S.useState(!1);if(!e)return i;const s=async()=>{await navigator.clipboard.writeText(e),r(!0),setTimeout(()=>{r(!1)},1e3)};return St.jsx(OT,{content:y_.formatMessage({id:a?"KopierbarTekst.Kopiert":"KopierbarTekst.Kopier"}),children:St.jsx("span",{"aria-hidden":"true",onClick:s,children:i??e})})},Tg={default:"_default_1sbt3_1",rød:"_rød_1sbt3_5"},or=({beløp:e,kr:i=!1,rød:a=!1})=>{const r=e?.toString().replace(/\s/g,"");return St.jsx(b_,{tekst:r,children:St.jsxs("span",{className:a?Tg.rød:Tg.default,children:[r?qT(r):"-",r&&i&&" kr"]})})},Zn=({tittel:e,children:i})=>K.jsxs(vi,{gap:"1",children:[K.jsx(Hl,{size:"medium",children:e}),i]});Zn.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingInfoBlokk",props:{tittel:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const $f=({arbeidsgiverOpplysninger:e,arbeidsgiverIdent:i})=>{const a=pt();return K.jsxs(Zn,{tittel:a.formatMessage({id:"InntektsmeldingFaktaPanel.arbeidsgiver.heading"}),children:[K.jsxs("span",{children:[K.jsx(Ie,{id:"InntektsmeldingFaktaPanel.arbeidsgiver.navn"}),": ",e.navn]}),K.jsxs("span",{children:[K.jsx(Ie,{id:"InntektsmeldingFaktaPanel.arbeidsgiver.underenhet"}),": ",i]})]})};$f.__docgenInfo={description:"",methods:[],displayName:"Arbeidsgiver",props:{arbeidsgiverOpplysninger:{required:!0,tsType:{name:"Readonly",elements:[{name:"union",raw:`| {
    erPrivatPerson: true;
    identifikator: string;
    navn: string;
    referanse: string;
    fødselsdato: string;
  }
| {
    erPrivatPerson: false;
    identifikator: string;
    referanse: string;
    navn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  identifikator: string;
  navn: string;
  referanse: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  identifikator: string;
  referanse: string;
  navn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}]}],raw:`Readonly<
  | {
      erPrivatPerson: true;
      identifikator: string;
      navn: string;
      referanse: string;
      fødselsdato: string;
    }
  | {
      erPrivatPerson: false;
      identifikator: string;
      referanse: string;
      navn: string;
    }
>`},description:""},arbeidsgiverIdent:{required:!0,tsType:{name:"string"},description:""}}};const Gf=({inntektsmelding:e,behandling:i,alleBehandlinger:a,alleKodeverk:r})=>{const s=pt(),o=e.tilknyttedeBehandlingIder.includes(i.uuid),d=a.filter(m=>e.tilknyttedeBehandlingIder.includes(m.uuid)),g=(()=>{const m=d.length;return o&&m>1?K.jsx(Ie,{id:"InntektsmeldingFaktaPanel.behandling.bruktIDenneOgFlere"}):o?K.jsx(Ie,{id:"InntektsmeldingFaktaPanel.behandling.bruktKunIDenne"}):m===0?K.jsx(Ie,{id:"InntektsmeldingFaktaPanel.behandling.ikkeBruktINoen"}):K.jsx(Ie,{id:"InntektsmeldingFaktaPanel.behandling.bruktIAndre"})})(),c=[...d].sort((m,h)=>new Date(m.opprettet).getTime()-new Date(h.opprettet).getTime());return K.jsxs(Zn,{tittel:s.formatMessage({id:"InntektsmeldingFaktaPanel.behandling.heading"}),children:[g,K.jsx(kl,{children:c.map(m=>K.jsx(kl.Item,{children:K.jsxs(vi,{gap:"1",children:[K.jsx("span",{children:r.BehandlingType.find(({kode:h})=>h===m.type)?.navn}),K.jsxs("span",{children:[K.jsx(Ie,{id:"InntektsmeldingFaktaPanel.behandling.opprettet"})," ",K.jsx(di,{dateTimeString:m.opprettet,separator:"kl"})]}),m.avsluttet?K.jsxs("span",{children:[K.jsx(Ie,{id:"InntektsmeldingFaktaPanel.behandling.avsluttet"})," ",K.jsx(di,{dateTimeString:m.avsluttet,separator:"kl"})]}):null]})},m.uuid))})]})};Gf.__docgenInfo={description:"",methods:[],displayName:"BehandlingsOversikt",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"BehandlingStatus",required:!0}},{key:"type",value:{name:"BehandlingType",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:"BehandlingResultatType | BehandlingResultatTypeTilbakekreving",elements:[{name:"BehandlingResultatType"},{name:"BehandlingResultatTypeTilbakekreving"}],required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"Avslagsarsak | null",elements:[{name:"Avslagsarsak"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"KonsekvensForYtelsen"}],raw:"KonsekvensForYtelsen[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
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
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"AksjonspunktKode",required:!0}},{key:"status",value:{name:"AksjonspunktStatus",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"VilkarType",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"VurderÅrsak[] | null",elements:[{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"AksjonspunktType",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"union",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
  eta?: string;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}},{key:"eta",value:{name:"string",required:!1}}]}},{name:"null"}],required:!1}},{key:"vilkår",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
  lovReferanse?: string;
  overstyrbar: boolean;
}`,signature:{properties:[{key:"vilkarType",value:{name:"VilkarType",required:!0}},{key:"vilkarStatus",value:{name:"VilkarUtfallType",required:!0}},{key:"avslagKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  vilkarType: VilkarType;
  vilkarStatus: VilkarUtfallType;
  avslagKode?: string | null;
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
    eta?: string;
  } | null;
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>`}]},description:""},alleBehandlinger:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"BehandlingStatus",required:!0}},{key:"type",value:{name:"BehandlingType",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:"BehandlingResultatType | BehandlingResultatTypeTilbakekreving",elements:[{name:"BehandlingResultatType"},{name:"BehandlingResultatTypeTilbakekreving"}],required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"Avslagsarsak | null",elements:[{name:"Avslagsarsak"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"KonsekvensForYtelsen"}],raw:"KonsekvensForYtelsen[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}`,signature:{properties:[{key:"behandlingTillatteOperasjoner",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  behandlingKanMerkesHaster: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}`,signature:{properties:[{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"behandlingKanMerkesHaster",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"VergeBehandlingmenyValg",required:!0}}]}}],raw:`Readonly<{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  behandlingKanMerkesHaster: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}>`,required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig: boolean;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"boolean",required:!0}}]}}],raw:"Brevmal[]",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: SkjermlenkeType;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: VurderÅrsak[];
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
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"boolean",required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]",required:!1}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
  vurderPaNyttArsaker?: VurderÅrsak[];
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
  skjermlenkeType: SkjermlenkeType;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"union",raw:"Aksjonspunkt | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"AksjonspunktKode",required:!0}},{key:"status",value:{name:"AksjonspunktStatus",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"VilkarType",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"VurderÅrsak[] | null",elements:[{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"AksjonspunktType",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`},{name:"null"}],required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"iayFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}},{key:"medlFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
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
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktor;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
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
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:"'BARN' | 'FBARN' | 'VOKSEN' | 'ADVOKAT' | 'ANNEN_F'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType, KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};function E_(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var _g={exports:{}},Cr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wg;function T_(){if(wg)return Cr;wg=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function a(r,s,o){var d=null;if(o!==void 0&&(d=""+o),s.key!==void 0&&(d=""+s.key),"key"in s){o={};for(var g in s)g!=="key"&&(o[g]=s[g])}else o=s;return s=o.ref,{$$typeof:e,type:r,key:d,ref:s!==void 0?s:null,props:o}}return Cr.Fragment=i,Cr.jsx=a,Cr.jsxs=a,Cr}var Ag;function __(){return Ag||(Ag=1,_g.exports=T_()),_g.exports}__();var _l={exports:{}},w_=_l.exports,Rg;function A_(){return Rg||(Rg=1,function(e,i){(function(a,r){e.exports=r()})(w_,function(){var a={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,s=/\d/,o=/\d\d/,d=/\d\d?/,g=/\d*[^-_:/,()\s\d]+/,c={},m=function(E){return(E=+E)+(E>68?1900:2e3)},h=function(E){return function(A){this[E]=+A}},y=[/[+-]\d\d:?(\d\d)?|Z/,function(E){(this.zone||(this.zone={})).offset=function(A){if(!A||A==="Z")return 0;var B=A.match(/([+-]|\d\d)/g),R=60*B[1]+(+B[2]||0);return R===0?0:B[0]==="+"?-R:R}(E)}],_=function(E){var A=c[E];return A&&(A.indexOf?A:A.s.concat(A.f))},T=function(E,A){var B,R=c.meridiem;if(R){for(var V=1;V<=24;V+=1)if(E.indexOf(R(V,0,A))>-1){B=V>12;break}}else B=E===(A?"pm":"PM");return B},P={A:[g,function(E){this.afternoon=T(E,!1)}],a:[g,function(E){this.afternoon=T(E,!0)}],Q:[s,function(E){this.month=3*(E-1)+1}],S:[s,function(E){this.milliseconds=100*+E}],SS:[o,function(E){this.milliseconds=10*+E}],SSS:[/\d{3}/,function(E){this.milliseconds=+E}],s:[d,h("seconds")],ss:[d,h("seconds")],m:[d,h("minutes")],mm:[d,h("minutes")],H:[d,h("hours")],h:[d,h("hours")],HH:[d,h("hours")],hh:[d,h("hours")],D:[d,h("day")],DD:[o,h("day")],Do:[g,function(E){var A=c.ordinal,B=E.match(/\d+/);if(this.day=B[0],A)for(var R=1;R<=31;R+=1)A(R).replace(/\[|\]/g,"")===E&&(this.day=R)}],w:[d,h("week")],ww:[o,h("week")],M:[d,h("month")],MM:[o,h("month")],MMM:[g,function(E){var A=_("months"),B=(_("monthsShort")||A.map(function(R){return R.slice(0,3)})).indexOf(E)+1;if(B<1)throw new Error;this.month=B%12||B}],MMMM:[g,function(E){var A=_("months").indexOf(E)+1;if(A<1)throw new Error;this.month=A%12||A}],Y:[/[+-]?\d+/,h("year")],YY:[o,function(E){this.year=m(E)}],YYYY:[/\d{4}/,h("year")],Z:y,ZZ:y};function v(E){var A,B;A=E,B=c&&c.formats;for(var R=(E=A.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(X,Y,J){var L=J&&J.toUpperCase();return Y||B[J]||a[J]||B[L].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(M,Q,ne){return Q||ne.slice(1)})})).match(r),V=R.length,O=0;O<V;O+=1){var D=R[O],N=P[D],I=N&&N[0],C=N&&N[1];R[O]=C?{regex:I,parser:C}:D.replace(/^\[|\]$/g,"")}return function(X){for(var Y={},J=0,L=0;J<V;J+=1){var M=R[J];if(typeof M=="string")L+=M.length;else{var Q=M.regex,ne=M.parser,Z=X.slice(L),G=Q.exec(Z)[0];ne.call(Y,G),X=X.replace(G,"")}}return function(W){var ae=W.afternoon;if(ae!==void 0){var te=W.hours;ae?te<12&&(W.hours+=12):te===12&&(W.hours=0),delete W.afternoon}}(Y),Y}}return function(E,A,B){B.p.customParseFormat=!0,E&&E.parseTwoDigitYear&&(m=E.parseTwoDigitYear);var R=A.prototype,V=R.parse;R.parse=function(O){var D=O.date,N=O.utc,I=O.args;this.$u=N;var C=I[1];if(typeof C=="string"){var X=I[2]===!0,Y=I[3]===!0,J=X||Y,L=I[2];Y&&(L=I[2]),c=this.$locale(),!X&&L&&(c=B.Ls[L]),this.$d=function(Z,G,W,ae){try{if(["x","X"].indexOf(G)>-1)return new Date((G==="X"?1e3:1)*Z);var te=v(G)(Z),le=te.year,he=te.month,pn=te.day,Ke=te.hours,qe=te.minutes,Ce=te.seconds,ve=te.milliseconds,we=te.zone,Ze=te.week,Ve=new Date,$e=pn||(le||he?1:Ve.getDate()),An=le||Ve.getFullYear(),Me=0;le&&!he||(Me=he>0?he-1:Ve.getMonth());var Je,et=Ke||0,Qe=qe||0,Hn=Ce||0,nt=ve||0;return we?new Date(Date.UTC(An,Me,$e,et,Qe,Hn,nt+60*we.offset*1e3)):W?new Date(Date.UTC(An,Me,$e,et,Qe,Hn,nt)):(Je=new Date(An,Me,$e,et,Qe,Hn,nt),Ze&&(Je=ae(Je).week(Ze).toDate()),Je)}catch{return new Date("")}}(D,C,N,B),this.init(),L&&L!==!0&&(this.$L=this.locale(L).$L),J&&D!=this.format(C)&&(this.$d=new Date("")),c={}}else if(C instanceof Array)for(var M=C.length,Q=1;Q<=M;Q+=1){I[1]=C[Q-1];var ne=B.apply(this,I);if(ne.isValid()){this.$d=ne.$d,this.$L=ne.$L,this.init();break}Q===M&&(this.$d=new Date(""))}else V.call(this,O)}}})}(_l)),_l.exports}var R_=A_();const S_=E_(R_);wn.extend(S_);function Uf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var wl={exports:{}},I_=wl.exports,Sg;function j_(){return Sg||(Sg=1,function(e,i){(function(a,r){e.exports=r()})(I_,function(){return function(a,r){r.prototype.isSameOrAfter=function(s,o){return this.isSame(s,o)||this.isAfter(s,o)}}})}(wl)),wl.exports}var N_=j_();const O_=Uf(N_);var Al={exports:{}},P_=Al.exports,Ig;function x_(){return Ig||(Ig=1,function(e,i){(function(a,r){e.exports=r()})(P_,function(){return function(a,r){r.prototype.isSameOrBefore=function(s,o){return this.isSame(s,o)||this.isBefore(s,o)}}})}(Al)),Al.exports}var B_=x_();const q_=Uf(B_),D_="Dato må være før eller lik {limit}",M_="Dato må være etter eller lik {limit}",L_="Perioder kan ikke overlappe i tid",F_="Perioder kan ikke overlappe i tid (uttak, utsettelse, gradering, overforing, opphold)",K_="Dato må være lik {value}",C_="Dato må skrives slik: dd.mm.åååå",V_="Periode må skrives slik: dd.mm.åååå - dd.mm.åååå",H_="Tallet kan ikke inneholde mer enn to desimaler",$_="Tallet kan ikke ha desimaler",G_="Feltet kan kun inneholde tall",U_="Ugyldig fødselsnummer",Y_="Feltet må være et fødselsnummer (11 siffer)",W_="Ugyldig organisasjonsnummer. Organisasjonsnummer må være 9 siffer.",z_="Ugyldig organisasjonsnummer eller fødselsnummer",X_="Startdato må være før eller lik sluttdato",Z_="Periode er utenfor opptjeningsperioden",J_="Ugyldig saksnummer eller fødselsnummer",Q_="Feltet inneholder ugyldige tegn: {text}",ew="Feltet inneholder en ugyldig verdi: {value}",nw="Feltet kan ikke inneholde mellomrom",tw="Feltet må fylles ut",rw="Du kan skrive maksimalt {length} tegn",aw="Du må skrive minst {length} tegn",iw="Du kan skrive maksimalt {length} tegn eller et fødselsnummer (11 siffer)",sw="Feltet må være mindre eller lik {length}",lw="Feltet må være større eller lik {length}",ow="Fødselsnummer til den andre forelderen kan ikke være det samme som søker",uw={DateNotBeforeOrEqual:D_,DateNotAfterOrEqual:M_,DateRangesOverlapping:L_,DateRangesOverlappingPeriodTypes:F_,DatesNotEqual:K_,InvalidDate:C_,InvalidDatesInPeriod:V_,InvalidDecimal:H_,InvalidInteger:$_,InvalidNumber:G_,InvalidFodselsnr:U_,InvalidFodselsnrFormat:Y_,InvalidOrgnr:W_,InvalidOrgnrOrFodselsnr:z_,InvalidPeriod:X_,InvalidPeriodRange:Z_,InvalidSaksnrOrFodselsnrFormat:J_,InvalidText:Q_,InvalidValue:ew,IllegalWhiteSpace:nw,IsRequired:tw,MaxLength:rw,MinLength:aw,MaxLengthOrFodselsnr:iw,MaxValue:sw,MinValue:lw,SammeFodselsnrSomSoker:ow},{formatMessage:FR}=an(uw);wn.extend(O_);wn.extend(q_);const ta={"AdresseVisning.Adresse":"Adresse","ForelderPanel.Soker":"Søker","ForelderPanel.AnnenForelder":"Annen forelder","AlleBarnPanel.Barn":"Barn","AlleBarnPanel.BarnNr":"Barn {nummer}","AlleBarnPanel.Fodt":"Født","AlleBarnPanel.Dod":"Død","PersonPanel.RolleOgNavn":"{rolle, select, BRUKER {Søker, } ANNEN_PART {Den andre forelderen, } BARN {Barnet, } other {} }{navn}","PersonPanel.Beskrivelse.Bruker":"Adresser for søker registrert i folkeregisteret gyldige for de siste 12 månedene","PersonPanel.Beskrivelse.Barn":"Adresser for barnet registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Beskrivelse.Annenpart":"Adresser for den andre forelderen registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Fodt":"Født {dato}","PersonPanel.Dod":"Død {dato}","AdresseTabell.IngenAdresse":"Ingen adresser funnet for {erAnnenpart, select, true {den andre forelderen} other {søker} }.","AdresseTabell.SammeAdresse":"Den andre forelderen har samme adresse som søker på skjæringstidspunktet","AdresseTabell.PeriodeLabel":"Periode","AdresseTabell.AdresseLabel":"Adresse","AdresseTabell.TypeLabel":"Type","MerkePanel.Dod":"DØD","MerkePanel.DodTittel":"Personen er død","MerkePanel.DodFodt":"DØDFØDT","MerkePanel.Diskresjon6":"Kode 6","MerkePanel.Diskresjon7":"Kode 7","MerkePanel.EgenAnsatt":"Nav","MerkePanel.Verge":"Verge","MerkePanel.Diskresjon6Tittel":"Personen har diskresjonsmerking kode 6","MerkePanel.Diskresjon7Tittel":"Personen har diskresjonsmerking kode 7","MerkePanel.EgenAnsattTittel":"Personen er ansatt i Nav","MerkePanel.VergeTittel":"Personen har verge","SubmitButton.ConfirmInformation":"Bekreft og fortsett","FaktaBegrunnelseTextField.BegrunnEndringene":"Begrunn endringene","FaktaBegrunnelseTextField.Vurdering":"Vurdering","FaktaBegrunnelseTextField.Begrunnelse":"Begrunnelse","TrueFalseInput.True":"Ja","TrueFalseInput.False":"Nei","FaktaKilde.Soknad":"FRA SØKNADEN","FaktaKilde.FREG":"FRA FOLKEREGISTERET","FaktaKilde.MEDL":"FRA MEDLEMSKAPSREGISTERET","FaktaKilde.Ukjent":"FRA UKJENT KILDE","FaktaKilde.SBH":"FRA SAKSBEHANDLER"};an(ta);an(ta);an(ta);const dw=(e,i)=>{const a=new Date(e.tom??fr),r=new Date(i.tom??fr);if(a>r)return-1;if(a<r)return 1;if(e.fom&&!i.fom)return-1;if(!e.fom&&i.fom)return 1;if(e.fom&&i.fom){const s=new Date(e.fom),o=new Date(i.fom);if(s>o)return-1;if(s<o)return 1}return 0};var Gr={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var gw=Gr.exports,jg;function fw(){return jg||(jg=1,function(e,i){(function(){var a,r="4.17.21",s=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",d="Expected a function",g="Invalid `variable` option passed into `_.template`",c="__lodash_hash_undefined__",m=500,h="__lodash_placeholder__",y=1,_=2,T=4,P=1,v=2,E=1,A=2,B=4,R=8,V=16,O=32,D=64,N=128,I=256,C=512,X=30,Y="...",J=800,L=16,M=1,Q=2,ne=3,Z=1/0,G=9007199254740991,W=17976931348623157e292,ae=NaN,te=4294967295,le=te-1,he=te>>>1,pn=[["ary",N],["bind",E],["bindKey",A],["curry",R],["curryRight",V],["flip",C],["partial",O],["partialRight",D],["rearg",I]],Ke="[object Arguments]",qe="[object Array]",Ce="[object AsyncFunction]",ve="[object Boolean]",we="[object Date]",Ze="[object DOMException]",Ve="[object Error]",$e="[object Function]",An="[object GeneratorFunction]",Me="[object Map]",Je="[object Number]",et="[object Null]",Qe="[object Object]",Hn="[object Promise]",nt="[object Proxy]",vr="[object RegExp]",Mn="[object Set]",yr="[object String]",sa="[object Symbol]",Rc="[object Undefined]",br="[object WeakMap]",Sc="[object WeakSet]",Er="[object ArrayBuffer]",$t="[object DataView]",_i="[object Float32Array]",wi="[object Float64Array]",Ai="[object Int8Array]",Ri="[object Int16Array]",Si="[object Int32Array]",Ii="[object Uint8Array]",ji="[object Uint8ClampedArray]",Ni="[object Uint16Array]",Oi="[object Uint32Array]",Ic=/\b__p \+= '';/g,jc=/\b(__p \+=) '' \+/g,Nc=/(__e\(.*?\)|\b__t\)) \+\n'';/g,ao=/&(?:amp|lt|gt|quot|#39);/g,io=/[&<>"']/g,Oc=RegExp(ao.source),Pc=RegExp(io.source),xc=/<%-([\s\S]+?)%>/g,Bc=/<%([\s\S]+?)%>/g,so=/<%=([\s\S]+?)%>/g,qc=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Dc=/^\w*$/,Mc=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Pi=/[\\^$.*+?()[\]{}|]/g,Lc=RegExp(Pi.source),xi=/^\s+/,Fc=/\s/,Kc=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Cc=/\{\n\/\* \[wrapped with (.+)\] \*/,Vc=/,? & /,Hc=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,$c=/[()=,{}\[\]\/\s]/,Gc=/\\(\\)?/g,Uc=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,lo=/\w*$/,Yc=/^[-+]0x[0-9a-f]+$/i,Wc=/^0b[01]+$/i,zc=/^\[object .+?Constructor\]$/,Xc=/^0o[0-7]+$/i,Zc=/^(?:0|[1-9]\d*)$/,Jc=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,la=/($^)/,Qc=/['\n\r\u2028\u2029\\]/g,oa="\\ud800-\\udfff",em="\\u0300-\\u036f",nm="\\ufe20-\\ufe2f",tm="\\u20d0-\\u20ff",oo=em+nm+tm,uo="\\u2700-\\u27bf",go="a-z\\xdf-\\xf6\\xf8-\\xff",rm="\\xac\\xb1\\xd7\\xf7",am="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",im="\\u2000-\\u206f",sm=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",fo="A-Z\\xc0-\\xd6\\xd8-\\xde",co="\\ufe0e\\ufe0f",mo=rm+am+im+sm,Bi="['’]",lm="["+oa+"]",po="["+mo+"]",ua="["+oo+"]",ho="\\d+",om="["+uo+"]",ko="["+go+"]",vo="[^"+oa+mo+ho+uo+go+fo+"]",qi="\\ud83c[\\udffb-\\udfff]",um="(?:"+ua+"|"+qi+")",yo="[^"+oa+"]",Di="(?:\\ud83c[\\udde6-\\uddff]){2}",Mi="[\\ud800-\\udbff][\\udc00-\\udfff]",Gt="["+fo+"]",bo="\\u200d",Eo="(?:"+ko+"|"+vo+")",dm="(?:"+Gt+"|"+vo+")",To="(?:"+Bi+"(?:d|ll|m|re|s|t|ve))?",_o="(?:"+Bi+"(?:D|LL|M|RE|S|T|VE))?",wo=um+"?",Ao="["+co+"]?",gm="(?:"+bo+"(?:"+[yo,Di,Mi].join("|")+")"+Ao+wo+")*",fm="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",cm="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Ro=Ao+wo+gm,mm="(?:"+[om,Di,Mi].join("|")+")"+Ro,pm="(?:"+[yo+ua+"?",ua,Di,Mi,lm].join("|")+")",hm=RegExp(Bi,"g"),km=RegExp(ua,"g"),Li=RegExp(qi+"(?="+qi+")|"+pm+Ro,"g"),vm=RegExp([Gt+"?"+ko+"+"+To+"(?="+[po,Gt,"$"].join("|")+")",dm+"+"+_o+"(?="+[po,Gt+Eo,"$"].join("|")+")",Gt+"?"+Eo+"+"+To,Gt+"+"+_o,cm,fm,ho,mm].join("|"),"g"),ym=RegExp("["+bo+oa+oo+co+"]"),bm=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Em=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Tm=-1,xe={};xe[_i]=xe[wi]=xe[Ai]=xe[Ri]=xe[Si]=xe[Ii]=xe[ji]=xe[Ni]=xe[Oi]=!0,xe[Ke]=xe[qe]=xe[Er]=xe[ve]=xe[$t]=xe[we]=xe[Ve]=xe[$e]=xe[Me]=xe[Je]=xe[Qe]=xe[vr]=xe[Mn]=xe[yr]=xe[br]=!1;var Oe={};Oe[Ke]=Oe[qe]=Oe[Er]=Oe[$t]=Oe[ve]=Oe[we]=Oe[_i]=Oe[wi]=Oe[Ai]=Oe[Ri]=Oe[Si]=Oe[Me]=Oe[Je]=Oe[Qe]=Oe[vr]=Oe[Mn]=Oe[yr]=Oe[sa]=Oe[Ii]=Oe[ji]=Oe[Ni]=Oe[Oi]=!0,Oe[Ve]=Oe[$e]=Oe[br]=!1;var _m={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},wm={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Am={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Rm={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Sm=parseFloat,Im=parseInt,So=typeof za=="object"&&za&&za.Object===Object&&za,jm=typeof self=="object"&&self&&self.Object===Object&&self,en=So||jm||Function("return this")(),Fi=i&&!i.nodeType&&i,jt=Fi&&!0&&e&&!e.nodeType&&e,Io=jt&&jt.exports===Fi,Ki=Io&&So.process,Rn=function(){try{var j=jt&&jt.require&&jt.require("util").types;return j||Ki&&Ki.binding&&Ki.binding("util")}catch{}}(),jo=Rn&&Rn.isArrayBuffer,No=Rn&&Rn.isDate,Oo=Rn&&Rn.isMap,Po=Rn&&Rn.isRegExp,xo=Rn&&Rn.isSet,Bo=Rn&&Rn.isTypedArray;function hn(j,F,q){switch(q.length){case 0:return j.call(F);case 1:return j.call(F,q[0]);case 2:return j.call(F,q[0],q[1]);case 3:return j.call(F,q[0],q[1],q[2])}return j.apply(F,q)}function Nm(j,F,q,re){for(var ge=-1,_e=j==null?0:j.length;++ge<_e;){var Ye=j[ge];F(re,Ye,q(Ye),j)}return re}function Sn(j,F){for(var q=-1,re=j==null?0:j.length;++q<re&&F(j[q],q,j)!==!1;);return j}function Om(j,F){for(var q=j==null?0:j.length;q--&&F(j[q],q,j)!==!1;);return j}function qo(j,F){for(var q=-1,re=j==null?0:j.length;++q<re;)if(!F(j[q],q,j))return!1;return!0}function kt(j,F){for(var q=-1,re=j==null?0:j.length,ge=0,_e=[];++q<re;){var Ye=j[q];F(Ye,q,j)&&(_e[ge++]=Ye)}return _e}function da(j,F){var q=j==null?0:j.length;return!!q&&Ut(j,F,0)>-1}function Ci(j,F,q){for(var re=-1,ge=j==null?0:j.length;++re<ge;)if(q(F,j[re]))return!0;return!1}function De(j,F){for(var q=-1,re=j==null?0:j.length,ge=Array(re);++q<re;)ge[q]=F(j[q],q,j);return ge}function vt(j,F){for(var q=-1,re=F.length,ge=j.length;++q<re;)j[ge+q]=F[q];return j}function Vi(j,F,q,re){var ge=-1,_e=j==null?0:j.length;for(re&&_e&&(q=j[++ge]);++ge<_e;)q=F(q,j[ge],ge,j);return q}function Pm(j,F,q,re){var ge=j==null?0:j.length;for(re&&ge&&(q=j[--ge]);ge--;)q=F(q,j[ge],ge,j);return q}function Hi(j,F){for(var q=-1,re=j==null?0:j.length;++q<re;)if(F(j[q],q,j))return!0;return!1}var xm=$i("length");function Bm(j){return j.split("")}function qm(j){return j.match(Hc)||[]}function Do(j,F,q){var re;return q(j,function(ge,_e,Ye){if(F(ge,_e,Ye))return re=_e,!1}),re}function ga(j,F,q,re){for(var ge=j.length,_e=q+(re?1:-1);re?_e--:++_e<ge;)if(F(j[_e],_e,j))return _e;return-1}function Ut(j,F,q){return F===F?Ym(j,F,q):ga(j,Mo,q)}function Dm(j,F,q,re){for(var ge=q-1,_e=j.length;++ge<_e;)if(re(j[ge],F))return ge;return-1}function Mo(j){return j!==j}function Lo(j,F){var q=j==null?0:j.length;return q?Ui(j,F)/q:ae}function $i(j){return function(F){return F==null?a:F[j]}}function Gi(j){return function(F){return j==null?a:j[F]}}function Fo(j,F,q,re,ge){return ge(j,function(_e,Ye,je){q=re?(re=!1,_e):F(q,_e,Ye,je)}),q}function Mm(j,F){var q=j.length;for(j.sort(F);q--;)j[q]=j[q].value;return j}function Ui(j,F){for(var q,re=-1,ge=j.length;++re<ge;){var _e=F(j[re]);_e!==a&&(q=q===a?_e:q+_e)}return q}function Yi(j,F){for(var q=-1,re=Array(j);++q<j;)re[q]=F(q);return re}function Lm(j,F){return De(F,function(q){return[q,j[q]]})}function Ko(j){return j&&j.slice(0,$o(j)+1).replace(xi,"")}function kn(j){return function(F){return j(F)}}function Wi(j,F){return De(F,function(q){return j[q]})}function Tr(j,F){return j.has(F)}function Co(j,F){for(var q=-1,re=j.length;++q<re&&Ut(F,j[q],0)>-1;);return q}function Vo(j,F){for(var q=j.length;q--&&Ut(F,j[q],0)>-1;);return q}function Fm(j,F){for(var q=j.length,re=0;q--;)j[q]===F&&++re;return re}var Km=Gi(_m),Cm=Gi(wm);function Vm(j){return"\\"+Rm[j]}function Hm(j,F){return j==null?a:j[F]}function Yt(j){return ym.test(j)}function $m(j){return bm.test(j)}function Gm(j){for(var F,q=[];!(F=j.next()).done;)q.push(F.value);return q}function zi(j){var F=-1,q=Array(j.size);return j.forEach(function(re,ge){q[++F]=[ge,re]}),q}function Ho(j,F){return function(q){return j(F(q))}}function yt(j,F){for(var q=-1,re=j.length,ge=0,_e=[];++q<re;){var Ye=j[q];(Ye===F||Ye===h)&&(j[q]=h,_e[ge++]=q)}return _e}function fa(j){var F=-1,q=Array(j.size);return j.forEach(function(re){q[++F]=re}),q}function Um(j){var F=-1,q=Array(j.size);return j.forEach(function(re){q[++F]=[re,re]}),q}function Ym(j,F,q){for(var re=q-1,ge=j.length;++re<ge;)if(j[re]===F)return re;return-1}function Wm(j,F,q){for(var re=q+1;re--;)if(j[re]===F)return re;return re}function Wt(j){return Yt(j)?Xm(j):xm(j)}function Ln(j){return Yt(j)?Zm(j):Bm(j)}function $o(j){for(var F=j.length;F--&&Fc.test(j.charAt(F)););return F}var zm=Gi(Am);function Xm(j){for(var F=Li.lastIndex=0;Li.test(j);)++F;return F}function Zm(j){return j.match(Li)||[]}function Jm(j){return j.match(vm)||[]}var Qm=function j(F){F=F==null?en:zt.defaults(en.Object(),F,zt.pick(en,Em));var q=F.Array,re=F.Date,ge=F.Error,_e=F.Function,Ye=F.Math,je=F.Object,Xi=F.RegExp,ep=F.String,In=F.TypeError,ca=q.prototype,np=_e.prototype,Xt=je.prototype,ma=F["__core-js_shared__"],pa=np.toString,Se=Xt.hasOwnProperty,tp=0,Go=function(){var n=/[^.]+$/.exec(ma&&ma.keys&&ma.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),ha=Xt.toString,rp=pa.call(je),ap=en._,ip=Xi("^"+pa.call(Se).replace(Pi,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ka=Io?F.Buffer:a,bt=F.Symbol,va=F.Uint8Array,Uo=ka?ka.allocUnsafe:a,ya=Ho(je.getPrototypeOf,je),Yo=je.create,Wo=Xt.propertyIsEnumerable,ba=ca.splice,zo=bt?bt.isConcatSpreadable:a,_r=bt?bt.iterator:a,Nt=bt?bt.toStringTag:a,Ea=function(){try{var n=qt(je,"defineProperty");return n({},"",{}),n}catch{}}(),sp=F.clearTimeout!==en.clearTimeout&&F.clearTimeout,lp=re&&re.now!==en.Date.now&&re.now,op=F.setTimeout!==en.setTimeout&&F.setTimeout,Ta=Ye.ceil,_a=Ye.floor,Zi=je.getOwnPropertySymbols,up=ka?ka.isBuffer:a,Xo=F.isFinite,dp=ca.join,gp=Ho(je.keys,je),We=Ye.max,tn=Ye.min,fp=re.now,cp=F.parseInt,Zo=Ye.random,mp=ca.reverse,Ji=qt(F,"DataView"),wr=qt(F,"Map"),Qi=qt(F,"Promise"),Zt=qt(F,"Set"),Ar=qt(F,"WeakMap"),Rr=qt(je,"create"),wa=Ar&&new Ar,Jt={},pp=Dt(Ji),hp=Dt(wr),kp=Dt(Qi),vp=Dt(Zt),yp=Dt(Ar),Aa=bt?bt.prototype:a,Sr=Aa?Aa.valueOf:a,Jo=Aa?Aa.toString:a;function p(n){if(He(n)&&!fe(n)&&!(n instanceof ye)){if(n instanceof jn)return n;if(Se.call(n,"__wrapped__"))return Qu(n)}return new jn(n)}var Qt=function(){function n(){}return function(t){if(!Le(t))return{};if(Yo)return Yo(t);n.prototype=t;var l=new n;return n.prototype=a,l}}();function Ra(){}function jn(n,t){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=a}p.templateSettings={escape:xc,evaluate:Bc,interpolate:so,variable:"",imports:{_:p}},p.prototype=Ra.prototype,p.prototype.constructor=p,jn.prototype=Qt(Ra.prototype),jn.prototype.constructor=jn;function ye(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=te,this.__views__=[]}function bp(){var n=new ye(this.__wrapped__);return n.__actions__=dn(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=dn(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=dn(this.__views__),n}function Ep(){if(this.__filtered__){var n=new ye(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function Tp(){var n=this.__wrapped__.value(),t=this.__dir__,l=fe(n),u=t<0,f=l?n.length:0,k=Bh(0,f,this.__views__),b=k.start,w=k.end,x=w-b,H=u?w:b-1,$=this.__iteratees__,U=$.length,ee=0,se=tn(x,this.__takeCount__);if(!l||!u&&f==x&&se==x)return Tu(n,this.__actions__);var ue=[];e:for(;x--&&ee<se;){H+=t;for(var me=-1,de=n[H];++me<U;){var ke=$[me],be=ke.iteratee,bn=ke.type,on=be(de);if(bn==Q)de=on;else if(!on){if(bn==M)continue e;break e}}ue[ee++]=de}return ue}ye.prototype=Qt(Ra.prototype),ye.prototype.constructor=ye;function Ot(n){var t=-1,l=n==null?0:n.length;for(this.clear();++t<l;){var u=n[t];this.set(u[0],u[1])}}function _p(){this.__data__=Rr?Rr(null):{},this.size=0}function wp(n){var t=this.has(n)&&delete this.__data__[n];return this.size-=t?1:0,t}function Ap(n){var t=this.__data__;if(Rr){var l=t[n];return l===c?a:l}return Se.call(t,n)?t[n]:a}function Rp(n){var t=this.__data__;return Rr?t[n]!==a:Se.call(t,n)}function Sp(n,t){var l=this.__data__;return this.size+=this.has(n)?0:1,l[n]=Rr&&t===a?c:t,this}Ot.prototype.clear=_p,Ot.prototype.delete=wp,Ot.prototype.get=Ap,Ot.prototype.has=Rp,Ot.prototype.set=Sp;function tt(n){var t=-1,l=n==null?0:n.length;for(this.clear();++t<l;){var u=n[t];this.set(u[0],u[1])}}function Ip(){this.__data__=[],this.size=0}function jp(n){var t=this.__data__,l=Sa(t,n);if(l<0)return!1;var u=t.length-1;return l==u?t.pop():ba.call(t,l,1),--this.size,!0}function Np(n){var t=this.__data__,l=Sa(t,n);return l<0?a:t[l][1]}function Op(n){return Sa(this.__data__,n)>-1}function Pp(n,t){var l=this.__data__,u=Sa(l,n);return u<0?(++this.size,l.push([n,t])):l[u][1]=t,this}tt.prototype.clear=Ip,tt.prototype.delete=jp,tt.prototype.get=Np,tt.prototype.has=Op,tt.prototype.set=Pp;function rt(n){var t=-1,l=n==null?0:n.length;for(this.clear();++t<l;){var u=n[t];this.set(u[0],u[1])}}function xp(){this.size=0,this.__data__={hash:new Ot,map:new(wr||tt),string:new Ot}}function Bp(n){var t=Fa(this,n).delete(n);return this.size-=t?1:0,t}function qp(n){return Fa(this,n).get(n)}function Dp(n){return Fa(this,n).has(n)}function Mp(n,t){var l=Fa(this,n),u=l.size;return l.set(n,t),this.size+=l.size==u?0:1,this}rt.prototype.clear=xp,rt.prototype.delete=Bp,rt.prototype.get=qp,rt.prototype.has=Dp,rt.prototype.set=Mp;function Pt(n){var t=-1,l=n==null?0:n.length;for(this.__data__=new rt;++t<l;)this.add(n[t])}function Lp(n){return this.__data__.set(n,c),this}function Fp(n){return this.__data__.has(n)}Pt.prototype.add=Pt.prototype.push=Lp,Pt.prototype.has=Fp;function Fn(n){var t=this.__data__=new tt(n);this.size=t.size}function Kp(){this.__data__=new tt,this.size=0}function Cp(n){var t=this.__data__,l=t.delete(n);return this.size=t.size,l}function Vp(n){return this.__data__.get(n)}function Hp(n){return this.__data__.has(n)}function $p(n,t){var l=this.__data__;if(l instanceof tt){var u=l.__data__;if(!wr||u.length<s-1)return u.push([n,t]),this.size=++l.size,this;l=this.__data__=new rt(u)}return l.set(n,t),this.size=l.size,this}Fn.prototype.clear=Kp,Fn.prototype.delete=Cp,Fn.prototype.get=Vp,Fn.prototype.has=Hp,Fn.prototype.set=$p;function Qo(n,t){var l=fe(n),u=!l&&Mt(n),f=!l&&!u&&At(n),k=!l&&!u&&!f&&rr(n),b=l||u||f||k,w=b?Yi(n.length,ep):[],x=w.length;for(var H in n)(t||Se.call(n,H))&&!(b&&(H=="length"||f&&(H=="offset"||H=="parent")||k&&(H=="buffer"||H=="byteLength"||H=="byteOffset")||lt(H,x)))&&w.push(H);return w}function eu(n){var t=n.length;return t?n[ds(0,t-1)]:a}function Gp(n,t){return Ka(dn(n),xt(t,0,n.length))}function Up(n){return Ka(dn(n))}function es(n,t,l){(l!==a&&!Kn(n[t],l)||l===a&&!(t in n))&&at(n,t,l)}function Ir(n,t,l){var u=n[t];(!(Se.call(n,t)&&Kn(u,l))||l===a&&!(t in n))&&at(n,t,l)}function Sa(n,t){for(var l=n.length;l--;)if(Kn(n[l][0],t))return l;return-1}function Yp(n,t,l,u){return Et(n,function(f,k,b){t(u,f,l(f),b)}),u}function nu(n,t){return n&&Gn(t,ze(t),n)}function Wp(n,t){return n&&Gn(t,fn(t),n)}function at(n,t,l){t=="__proto__"&&Ea?Ea(n,t,{configurable:!0,enumerable:!0,value:l,writable:!0}):n[t]=l}function ns(n,t){for(var l=-1,u=t.length,f=q(u),k=n==null;++l<u;)f[l]=k?a:qs(n,t[l]);return f}function xt(n,t,l){return n===n&&(l!==a&&(n=n<=l?n:l),t!==a&&(n=n>=t?n:t)),n}function Nn(n,t,l,u,f,k){var b,w=t&y,x=t&_,H=t&T;if(l&&(b=f?l(n,u,f,k):l(n)),b!==a)return b;if(!Le(n))return n;var $=fe(n);if($){if(b=Dh(n),!w)return dn(n,b)}else{var U=rn(n),ee=U==$e||U==An;if(At(n))return Au(n,w);if(U==Qe||U==Ke||ee&&!f){if(b=x||ee?{}:$u(n),!w)return x?Ah(n,Wp(b,n)):wh(n,nu(b,n))}else{if(!Oe[U])return f?n:{};b=Mh(n,U,w)}}k||(k=new Fn);var se=k.get(n);if(se)return se;k.set(n,b),yd(n)?n.forEach(function(de){b.add(Nn(de,t,l,de,n,k))}):kd(n)&&n.forEach(function(de,ke){b.set(ke,Nn(de,t,l,ke,n,k))});var ue=H?x?Es:bs:x?fn:ze,me=$?a:ue(n);return Sn(me||n,function(de,ke){me&&(ke=de,de=n[ke]),Ir(b,ke,Nn(de,t,l,ke,n,k))}),b}function zp(n){var t=ze(n);return function(l){return tu(l,n,t)}}function tu(n,t,l){var u=l.length;if(n==null)return!u;for(n=je(n);u--;){var f=l[u],k=t[f],b=n[f];if(b===a&&!(f in n)||!k(b))return!1}return!0}function ru(n,t,l){if(typeof n!="function")throw new In(d);return qr(function(){n.apply(a,l)},t)}function jr(n,t,l,u){var f=-1,k=da,b=!0,w=n.length,x=[],H=t.length;if(!w)return x;l&&(t=De(t,kn(l))),u?(k=Ci,b=!1):t.length>=s&&(k=Tr,b=!1,t=new Pt(t));e:for(;++f<w;){var $=n[f],U=l==null?$:l($);if($=u||$!==0?$:0,b&&U===U){for(var ee=H;ee--;)if(t[ee]===U)continue e;x.push($)}else k(t,U,u)||x.push($)}return x}var Et=Nu($n),au=Nu(rs,!0);function Xp(n,t){var l=!0;return Et(n,function(u,f,k){return l=!!t(u,f,k),l}),l}function Ia(n,t,l){for(var u=-1,f=n.length;++u<f;){var k=n[u],b=t(k);if(b!=null&&(w===a?b===b&&!yn(b):l(b,w)))var w=b,x=k}return x}function Zp(n,t,l,u){var f=n.length;for(l=ce(l),l<0&&(l=-l>f?0:f+l),u=u===a||u>f?f:ce(u),u<0&&(u+=f),u=l>u?0:Ed(u);l<u;)n[l++]=t;return n}function iu(n,t){var l=[];return Et(n,function(u,f,k){t(u,f,k)&&l.push(u)}),l}function nn(n,t,l,u,f){var k=-1,b=n.length;for(l||(l=Fh),f||(f=[]);++k<b;){var w=n[k];t>0&&l(w)?t>1?nn(w,t-1,l,u,f):vt(f,w):u||(f[f.length]=w)}return f}var ts=Ou(),su=Ou(!0);function $n(n,t){return n&&ts(n,t,ze)}function rs(n,t){return n&&su(n,t,ze)}function ja(n,t){return kt(t,function(l){return ot(n[l])})}function Bt(n,t){t=_t(t,n);for(var l=0,u=t.length;n!=null&&l<u;)n=n[Un(t[l++])];return l&&l==u?n:a}function lu(n,t,l){var u=t(n);return fe(n)?u:vt(u,l(n))}function sn(n){return n==null?n===a?Rc:et:Nt&&Nt in je(n)?xh(n):Uh(n)}function as(n,t){return n>t}function Jp(n,t){return n!=null&&Se.call(n,t)}function Qp(n,t){return n!=null&&t in je(n)}function eh(n,t,l){return n>=tn(t,l)&&n<We(t,l)}function is(n,t,l){for(var u=l?Ci:da,f=n[0].length,k=n.length,b=k,w=q(k),x=1/0,H=[];b--;){var $=n[b];b&&t&&($=De($,kn(t))),x=tn($.length,x),w[b]=!l&&(t||f>=120&&$.length>=120)?new Pt(b&&$):a}$=n[0];var U=-1,ee=w[0];e:for(;++U<f&&H.length<x;){var se=$[U],ue=t?t(se):se;if(se=l||se!==0?se:0,!(ee?Tr(ee,ue):u(H,ue,l))){for(b=k;--b;){var me=w[b];if(!(me?Tr(me,ue):u(n[b],ue,l)))continue e}ee&&ee.push(ue),H.push(se)}}return H}function nh(n,t,l,u){return $n(n,function(f,k,b){t(u,l(f),k,b)}),u}function Nr(n,t,l){t=_t(t,n),n=Wu(n,t);var u=n==null?n:n[Un(Pn(t))];return u==null?a:hn(u,n,l)}function ou(n){return He(n)&&sn(n)==Ke}function th(n){return He(n)&&sn(n)==Er}function rh(n){return He(n)&&sn(n)==we}function Or(n,t,l,u,f){return n===t?!0:n==null||t==null||!He(n)&&!He(t)?n!==n&&t!==t:ah(n,t,l,u,Or,f)}function ah(n,t,l,u,f,k){var b=fe(n),w=fe(t),x=b?qe:rn(n),H=w?qe:rn(t);x=x==Ke?Qe:x,H=H==Ke?Qe:H;var $=x==Qe,U=H==Qe,ee=x==H;if(ee&&At(n)){if(!At(t))return!1;b=!0,$=!1}if(ee&&!$)return k||(k=new Fn),b||rr(n)?Cu(n,t,l,u,f,k):Oh(n,t,x,l,u,f,k);if(!(l&P)){var se=$&&Se.call(n,"__wrapped__"),ue=U&&Se.call(t,"__wrapped__");if(se||ue){var me=se?n.value():n,de=ue?t.value():t;return k||(k=new Fn),f(me,de,l,u,k)}}return ee?(k||(k=new Fn),Ph(n,t,l,u,f,k)):!1}function ih(n){return He(n)&&rn(n)==Me}function ss(n,t,l,u){var f=l.length,k=f,b=!u;if(n==null)return!k;for(n=je(n);f--;){var w=l[f];if(b&&w[2]?w[1]!==n[w[0]]:!(w[0]in n))return!1}for(;++f<k;){w=l[f];var x=w[0],H=n[x],$=w[1];if(b&&w[2]){if(H===a&&!(x in n))return!1}else{var U=new Fn;if(u)var ee=u(H,$,x,n,t,U);if(!(ee===a?Or($,H,P|v,u,U):ee))return!1}}return!0}function uu(n){if(!Le(n)||Ch(n))return!1;var t=ot(n)?ip:zc;return t.test(Dt(n))}function sh(n){return He(n)&&sn(n)==vr}function lh(n){return He(n)&&rn(n)==Mn}function oh(n){return He(n)&&Ua(n.length)&&!!xe[sn(n)]}function du(n){return typeof n=="function"?n:n==null?cn:typeof n=="object"?fe(n)?cu(n[0],n[1]):fu(n):Pd(n)}function ls(n){if(!Br(n))return gp(n);var t=[];for(var l in je(n))Se.call(n,l)&&l!="constructor"&&t.push(l);return t}function uh(n){if(!Le(n))return Gh(n);var t=Br(n),l=[];for(var u in n)u=="constructor"&&(t||!Se.call(n,u))||l.push(u);return l}function os(n,t){return n<t}function gu(n,t){var l=-1,u=gn(n)?q(n.length):[];return Et(n,function(f,k,b){u[++l]=t(f,k,b)}),u}function fu(n){var t=_s(n);return t.length==1&&t[0][2]?Uu(t[0][0],t[0][1]):function(l){return l===n||ss(l,n,t)}}function cu(n,t){return As(n)&&Gu(t)?Uu(Un(n),t):function(l){var u=qs(l,n);return u===a&&u===t?Ds(l,n):Or(t,u,P|v)}}function Na(n,t,l,u,f){n!==t&&ts(t,function(k,b){if(f||(f=new Fn),Le(k))dh(n,t,b,l,Na,u,f);else{var w=u?u(Ss(n,b),k,b+"",n,t,f):a;w===a&&(w=k),es(n,b,w)}},fn)}function dh(n,t,l,u,f,k,b){var w=Ss(n,l),x=Ss(t,l),H=b.get(x);if(H){es(n,l,H);return}var $=k?k(w,x,l+"",n,t,b):a,U=$===a;if(U){var ee=fe(x),se=!ee&&At(x),ue=!ee&&!se&&rr(x);$=x,ee||se||ue?fe(w)?$=w:Ge(w)?$=dn(w):se?(U=!1,$=Au(x,!0)):ue?(U=!1,$=Ru(x,!0)):$=[]:Dr(x)||Mt(x)?($=w,Mt(w)?$=Td(w):(!Le(w)||ot(w))&&($=$u(x))):U=!1}U&&(b.set(x,$),f($,x,u,k,b),b.delete(x)),es(n,l,$)}function mu(n,t){var l=n.length;if(l)return t+=t<0?l:0,lt(t,l)?n[t]:a}function pu(n,t,l){t.length?t=De(t,function(k){return fe(k)?function(b){return Bt(b,k.length===1?k[0]:k)}:k}):t=[cn];var u=-1;t=De(t,kn(oe()));var f=gu(n,function(k,b,w){var x=De(t,function(H){return H(k)});return{criteria:x,index:++u,value:k}});return Mm(f,function(k,b){return _h(k,b,l)})}function gh(n,t){return hu(n,t,function(l,u){return Ds(n,u)})}function hu(n,t,l){for(var u=-1,f=t.length,k={};++u<f;){var b=t[u],w=Bt(n,b);l(w,b)&&Pr(k,_t(b,n),w)}return k}function fh(n){return function(t){return Bt(t,n)}}function us(n,t,l,u){var f=u?Dm:Ut,k=-1,b=t.length,w=n;for(n===t&&(t=dn(t)),l&&(w=De(n,kn(l)));++k<b;)for(var x=0,H=t[k],$=l?l(H):H;(x=f(w,$,x,u))>-1;)w!==n&&ba.call(w,x,1),ba.call(n,x,1);return n}function ku(n,t){for(var l=n?t.length:0,u=l-1;l--;){var f=t[l];if(l==u||f!==k){var k=f;lt(f)?ba.call(n,f,1):cs(n,f)}}return n}function ds(n,t){return n+_a(Zo()*(t-n+1))}function ch(n,t,l,u){for(var f=-1,k=We(Ta((t-n)/(l||1)),0),b=q(k);k--;)b[u?k:++f]=n,n+=l;return b}function gs(n,t){var l="";if(!n||t<1||t>G)return l;do t%2&&(l+=n),t=_a(t/2),t&&(n+=n);while(t);return l}function pe(n,t){return Is(Yu(n,t,cn),n+"")}function mh(n){return eu(ar(n))}function ph(n,t){var l=ar(n);return Ka(l,xt(t,0,l.length))}function Pr(n,t,l,u){if(!Le(n))return n;t=_t(t,n);for(var f=-1,k=t.length,b=k-1,w=n;w!=null&&++f<k;){var x=Un(t[f]),H=l;if(x==="__proto__"||x==="constructor"||x==="prototype")return n;if(f!=b){var $=w[x];H=u?u($,x,w):a,H===a&&(H=Le($)?$:lt(t[f+1])?[]:{})}Ir(w,x,H),w=w[x]}return n}var vu=wa?function(n,t){return wa.set(n,t),n}:cn,hh=Ea?function(n,t){return Ea(n,"toString",{configurable:!0,enumerable:!1,value:Ls(t),writable:!0})}:cn;function kh(n){return Ka(ar(n))}function On(n,t,l){var u=-1,f=n.length;t<0&&(t=-t>f?0:f+t),l=l>f?f:l,l<0&&(l+=f),f=t>l?0:l-t>>>0,t>>>=0;for(var k=q(f);++u<f;)k[u]=n[u+t];return k}function vh(n,t){var l;return Et(n,function(u,f,k){return l=t(u,f,k),!l}),!!l}function Oa(n,t,l){var u=0,f=n==null?u:n.length;if(typeof t=="number"&&t===t&&f<=he){for(;u<f;){var k=u+f>>>1,b=n[k];b!==null&&!yn(b)&&(l?b<=t:b<t)?u=k+1:f=k}return f}return fs(n,t,cn,l)}function fs(n,t,l,u){var f=0,k=n==null?0:n.length;if(k===0)return 0;t=l(t);for(var b=t!==t,w=t===null,x=yn(t),H=t===a;f<k;){var $=_a((f+k)/2),U=l(n[$]),ee=U!==a,se=U===null,ue=U===U,me=yn(U);if(b)var de=u||ue;else H?de=ue&&(u||ee):w?de=ue&&ee&&(u||!se):x?de=ue&&ee&&!se&&(u||!me):se||me?de=!1:de=u?U<=t:U<t;de?f=$+1:k=$}return tn(k,le)}function yu(n,t){for(var l=-1,u=n.length,f=0,k=[];++l<u;){var b=n[l],w=t?t(b):b;if(!l||!Kn(w,x)){var x=w;k[f++]=b===0?0:b}}return k}function bu(n){return typeof n=="number"?n:yn(n)?ae:+n}function vn(n){if(typeof n=="string")return n;if(fe(n))return De(n,vn)+"";if(yn(n))return Jo?Jo.call(n):"";var t=n+"";return t=="0"&&1/n==-1/0?"-0":t}function Tt(n,t,l){var u=-1,f=da,k=n.length,b=!0,w=[],x=w;if(l)b=!1,f=Ci;else if(k>=s){var H=t?null:jh(n);if(H)return fa(H);b=!1,f=Tr,x=new Pt}else x=t?[]:w;e:for(;++u<k;){var $=n[u],U=t?t($):$;if($=l||$!==0?$:0,b&&U===U){for(var ee=x.length;ee--;)if(x[ee]===U)continue e;t&&x.push(U),w.push($)}else f(x,U,l)||(x!==w&&x.push(U),w.push($))}return w}function cs(n,t){return t=_t(t,n),n=Wu(n,t),n==null||delete n[Un(Pn(t))]}function Eu(n,t,l,u){return Pr(n,t,l(Bt(n,t)),u)}function Pa(n,t,l,u){for(var f=n.length,k=u?f:-1;(u?k--:++k<f)&&t(n[k],k,n););return l?On(n,u?0:k,u?k+1:f):On(n,u?k+1:0,u?f:k)}function Tu(n,t){var l=n;return l instanceof ye&&(l=l.value()),Vi(t,function(u,f){return f.func.apply(f.thisArg,vt([u],f.args))},l)}function ms(n,t,l){var u=n.length;if(u<2)return u?Tt(n[0]):[];for(var f=-1,k=q(u);++f<u;)for(var b=n[f],w=-1;++w<u;)w!=f&&(k[f]=jr(k[f]||b,n[w],t,l));return Tt(nn(k,1),t,l)}function _u(n,t,l){for(var u=-1,f=n.length,k=t.length,b={};++u<f;){var w=u<k?t[u]:a;l(b,n[u],w)}return b}function ps(n){return Ge(n)?n:[]}function hs(n){return typeof n=="function"?n:cn}function _t(n,t){return fe(n)?n:As(n,t)?[n]:Ju(Ae(n))}var yh=pe;function wt(n,t,l){var u=n.length;return l=l===a?u:l,!t&&l>=u?n:On(n,t,l)}var wu=sp||function(n){return en.clearTimeout(n)};function Au(n,t){if(t)return n.slice();var l=n.length,u=Uo?Uo(l):new n.constructor(l);return n.copy(u),u}function ks(n){var t=new n.constructor(n.byteLength);return new va(t).set(new va(n)),t}function bh(n,t){var l=t?ks(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.byteLength)}function Eh(n){var t=new n.constructor(n.source,lo.exec(n));return t.lastIndex=n.lastIndex,t}function Th(n){return Sr?je(Sr.call(n)):{}}function Ru(n,t){var l=t?ks(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.length)}function Su(n,t){if(n!==t){var l=n!==a,u=n===null,f=n===n,k=yn(n),b=t!==a,w=t===null,x=t===t,H=yn(t);if(!w&&!H&&!k&&n>t||k&&b&&x&&!w&&!H||u&&b&&x||!l&&x||!f)return 1;if(!u&&!k&&!H&&n<t||H&&l&&f&&!u&&!k||w&&l&&f||!b&&f||!x)return-1}return 0}function _h(n,t,l){for(var u=-1,f=n.criteria,k=t.criteria,b=f.length,w=l.length;++u<b;){var x=Su(f[u],k[u]);if(x){if(u>=w)return x;var H=l[u];return x*(H=="desc"?-1:1)}}return n.index-t.index}function Iu(n,t,l,u){for(var f=-1,k=n.length,b=l.length,w=-1,x=t.length,H=We(k-b,0),$=q(x+H),U=!u;++w<x;)$[w]=t[w];for(;++f<b;)(U||f<k)&&($[l[f]]=n[f]);for(;H--;)$[w++]=n[f++];return $}function ju(n,t,l,u){for(var f=-1,k=n.length,b=-1,w=l.length,x=-1,H=t.length,$=We(k-w,0),U=q($+H),ee=!u;++f<$;)U[f]=n[f];for(var se=f;++x<H;)U[se+x]=t[x];for(;++b<w;)(ee||f<k)&&(U[se+l[b]]=n[f++]);return U}function dn(n,t){var l=-1,u=n.length;for(t||(t=q(u));++l<u;)t[l]=n[l];return t}function Gn(n,t,l,u){var f=!l;l||(l={});for(var k=-1,b=t.length;++k<b;){var w=t[k],x=u?u(l[w],n[w],w,l,n):a;x===a&&(x=n[w]),f?at(l,w,x):Ir(l,w,x)}return l}function wh(n,t){return Gn(n,ws(n),t)}function Ah(n,t){return Gn(n,Vu(n),t)}function xa(n,t){return function(l,u){var f=fe(l)?Nm:Yp,k=t?t():{};return f(l,n,oe(u,2),k)}}function er(n){return pe(function(t,l){var u=-1,f=l.length,k=f>1?l[f-1]:a,b=f>2?l[2]:a;for(k=n.length>3&&typeof k=="function"?(f--,k):a,b&&ln(l[0],l[1],b)&&(k=f<3?a:k,f=1),t=je(t);++u<f;){var w=l[u];w&&n(t,w,u,k)}return t})}function Nu(n,t){return function(l,u){if(l==null)return l;if(!gn(l))return n(l,u);for(var f=l.length,k=t?f:-1,b=je(l);(t?k--:++k<f)&&u(b[k],k,b)!==!1;);return l}}function Ou(n){return function(t,l,u){for(var f=-1,k=je(t),b=u(t),w=b.length;w--;){var x=b[n?w:++f];if(l(k[x],x,k)===!1)break}return t}}function Rh(n,t,l){var u=t&E,f=xr(n);function k(){var b=this&&this!==en&&this instanceof k?f:n;return b.apply(u?l:this,arguments)}return k}function Pu(n){return function(t){t=Ae(t);var l=Yt(t)?Ln(t):a,u=l?l[0]:t.charAt(0),f=l?wt(l,1).join(""):t.slice(1);return u[n]()+f}}function nr(n){return function(t){return Vi(Nd(jd(t).replace(hm,"")),n,"")}}function xr(n){return function(){var t=arguments;switch(t.length){case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var l=Qt(n.prototype),u=n.apply(l,t);return Le(u)?u:l}}function Sh(n,t,l){var u=xr(n);function f(){for(var k=arguments.length,b=q(k),w=k,x=tr(f);w--;)b[w]=arguments[w];var H=k<3&&b[0]!==x&&b[k-1]!==x?[]:yt(b,x);if(k-=H.length,k<l)return Mu(n,t,Ba,f.placeholder,a,b,H,a,a,l-k);var $=this&&this!==en&&this instanceof f?u:n;return hn($,this,b)}return f}function xu(n){return function(t,l,u){var f=je(t);if(!gn(t)){var k=oe(l,3);t=ze(t),l=function(w){return k(f[w],w,f)}}var b=n(t,l,u);return b>-1?f[k?t[b]:b]:a}}function Bu(n){return st(function(t){var l=t.length,u=l,f=jn.prototype.thru;for(n&&t.reverse();u--;){var k=t[u];if(typeof k!="function")throw new In(d);if(f&&!b&&La(k)=="wrapper")var b=new jn([],!0)}for(u=b?u:l;++u<l;){k=t[u];var w=La(k),x=w=="wrapper"?Ts(k):a;x&&Rs(x[0])&&x[1]==(N|R|O|I)&&!x[4].length&&x[9]==1?b=b[La(x[0])].apply(b,x[3]):b=k.length==1&&Rs(k)?b[w]():b.thru(k)}return function(){var H=arguments,$=H[0];if(b&&H.length==1&&fe($))return b.plant($).value();for(var U=0,ee=l?t[U].apply(this,H):$;++U<l;)ee=t[U].call(this,ee);return ee}})}function Ba(n,t,l,u,f,k,b,w,x,H){var $=t&N,U=t&E,ee=t&A,se=t&(R|V),ue=t&C,me=ee?a:xr(n);function de(){for(var ke=arguments.length,be=q(ke),bn=ke;bn--;)be[bn]=arguments[bn];if(se)var on=tr(de),En=Fm(be,on);if(u&&(be=Iu(be,u,f,se)),k&&(be=ju(be,k,b,se)),ke-=En,se&&ke<H){var Ue=yt(be,on);return Mu(n,t,Ba,de.placeholder,l,be,Ue,w,x,H-ke)}var Cn=U?l:this,dt=ee?Cn[n]:n;return ke=be.length,w?be=Yh(be,w):ue&&ke>1&&be.reverse(),$&&x<ke&&(be.length=x),this&&this!==en&&this instanceof de&&(dt=me||xr(dt)),dt.apply(Cn,be)}return de}function qu(n,t){return function(l,u){return nh(l,n,t(u),{})}}function qa(n,t){return function(l,u){var f;if(l===a&&u===a)return t;if(l!==a&&(f=l),u!==a){if(f===a)return u;typeof l=="string"||typeof u=="string"?(l=vn(l),u=vn(u)):(l=bu(l),u=bu(u)),f=n(l,u)}return f}}function vs(n){return st(function(t){return t=De(t,kn(oe())),pe(function(l){var u=this;return n(t,function(f){return hn(f,u,l)})})})}function Da(n,t){t=t===a?" ":vn(t);var l=t.length;if(l<2)return l?gs(t,n):t;var u=gs(t,Ta(n/Wt(t)));return Yt(t)?wt(Ln(u),0,n).join(""):u.slice(0,n)}function Ih(n,t,l,u){var f=t&E,k=xr(n);function b(){for(var w=-1,x=arguments.length,H=-1,$=u.length,U=q($+x),ee=this&&this!==en&&this instanceof b?k:n;++H<$;)U[H]=u[H];for(;x--;)U[H++]=arguments[++w];return hn(ee,f?l:this,U)}return b}function Du(n){return function(t,l,u){return u&&typeof u!="number"&&ln(t,l,u)&&(l=u=a),t=ut(t),l===a?(l=t,t=0):l=ut(l),u=u===a?t<l?1:-1:ut(u),ch(t,l,u,n)}}function Ma(n){return function(t,l){return typeof t=="string"&&typeof l=="string"||(t=xn(t),l=xn(l)),n(t,l)}}function Mu(n,t,l,u,f,k,b,w,x,H){var $=t&R,U=$?b:a,ee=$?a:b,se=$?k:a,ue=$?a:k;t|=$?O:D,t&=~($?D:O),t&B||(t&=-4);var me=[n,t,f,se,U,ue,ee,w,x,H],de=l.apply(a,me);return Rs(n)&&zu(de,me),de.placeholder=u,Xu(de,n,t)}function ys(n){var t=Ye[n];return function(l,u){if(l=xn(l),u=u==null?0:tn(ce(u),292),u&&Xo(l)){var f=(Ae(l)+"e").split("e"),k=t(f[0]+"e"+(+f[1]+u));return f=(Ae(k)+"e").split("e"),+(f[0]+"e"+(+f[1]-u))}return t(l)}}var jh=Zt&&1/fa(new Zt([,-0]))[1]==Z?function(n){return new Zt(n)}:Cs;function Lu(n){return function(t){var l=rn(t);return l==Me?zi(t):l==Mn?Um(t):Lm(t,n(t))}}function it(n,t,l,u,f,k,b,w){var x=t&A;if(!x&&typeof n!="function")throw new In(d);var H=u?u.length:0;if(H||(t&=-97,u=f=a),b=b===a?b:We(ce(b),0),w=w===a?w:ce(w),H-=f?f.length:0,t&D){var $=u,U=f;u=f=a}var ee=x?a:Ts(n),se=[n,t,l,u,f,$,U,k,b,w];if(ee&&$h(se,ee),n=se[0],t=se[1],l=se[2],u=se[3],f=se[4],w=se[9]=se[9]===a?x?0:n.length:We(se[9]-H,0),!w&&t&(R|V)&&(t&=-25),!t||t==E)var ue=Rh(n,t,l);else t==R||t==V?ue=Sh(n,t,w):(t==O||t==(E|O))&&!f.length?ue=Ih(n,t,l,u):ue=Ba.apply(a,se);var me=ee?vu:zu;return Xu(me(ue,se),n,t)}function Fu(n,t,l,u){return n===a||Kn(n,Xt[l])&&!Se.call(u,l)?t:n}function Ku(n,t,l,u,f,k){return Le(n)&&Le(t)&&(k.set(t,n),Na(n,t,a,Ku,k),k.delete(t)),n}function Nh(n){return Dr(n)?a:n}function Cu(n,t,l,u,f,k){var b=l&P,w=n.length,x=t.length;if(w!=x&&!(b&&x>w))return!1;var H=k.get(n),$=k.get(t);if(H&&$)return H==t&&$==n;var U=-1,ee=!0,se=l&v?new Pt:a;for(k.set(n,t),k.set(t,n);++U<w;){var ue=n[U],me=t[U];if(u)var de=b?u(me,ue,U,t,n,k):u(ue,me,U,n,t,k);if(de!==a){if(de)continue;ee=!1;break}if(se){if(!Hi(t,function(ke,be){if(!Tr(se,be)&&(ue===ke||f(ue,ke,l,u,k)))return se.push(be)})){ee=!1;break}}else if(!(ue===me||f(ue,me,l,u,k))){ee=!1;break}}return k.delete(n),k.delete(t),ee}function Oh(n,t,l,u,f,k,b){switch(l){case $t:if(n.byteLength!=t.byteLength||n.byteOffset!=t.byteOffset)return!1;n=n.buffer,t=t.buffer;case Er:return!(n.byteLength!=t.byteLength||!k(new va(n),new va(t)));case ve:case we:case Je:return Kn(+n,+t);case Ve:return n.name==t.name&&n.message==t.message;case vr:case yr:return n==t+"";case Me:var w=zi;case Mn:var x=u&P;if(w||(w=fa),n.size!=t.size&&!x)return!1;var H=b.get(n);if(H)return H==t;u|=v,b.set(n,t);var $=Cu(w(n),w(t),u,f,k,b);return b.delete(n),$;case sa:if(Sr)return Sr.call(n)==Sr.call(t)}return!1}function Ph(n,t,l,u,f,k){var b=l&P,w=bs(n),x=w.length,H=bs(t),$=H.length;if(x!=$&&!b)return!1;for(var U=x;U--;){var ee=w[U];if(!(b?ee in t:Se.call(t,ee)))return!1}var se=k.get(n),ue=k.get(t);if(se&&ue)return se==t&&ue==n;var me=!0;k.set(n,t),k.set(t,n);for(var de=b;++U<x;){ee=w[U];var ke=n[ee],be=t[ee];if(u)var bn=b?u(be,ke,ee,t,n,k):u(ke,be,ee,n,t,k);if(!(bn===a?ke===be||f(ke,be,l,u,k):bn)){me=!1;break}de||(de=ee=="constructor")}if(me&&!de){var on=n.constructor,En=t.constructor;on!=En&&"constructor"in n&&"constructor"in t&&!(typeof on=="function"&&on instanceof on&&typeof En=="function"&&En instanceof En)&&(me=!1)}return k.delete(n),k.delete(t),me}function st(n){return Is(Yu(n,a,td),n+"")}function bs(n){return lu(n,ze,ws)}function Es(n){return lu(n,fn,Vu)}var Ts=wa?function(n){return wa.get(n)}:Cs;function La(n){for(var t=n.name+"",l=Jt[t],u=Se.call(Jt,t)?l.length:0;u--;){var f=l[u],k=f.func;if(k==null||k==n)return f.name}return t}function tr(n){var t=Se.call(p,"placeholder")?p:n;return t.placeholder}function oe(){var n=p.iteratee||Fs;return n=n===Fs?du:n,arguments.length?n(arguments[0],arguments[1]):n}function Fa(n,t){var l=n.__data__;return Kh(t)?l[typeof t=="string"?"string":"hash"]:l.map}function _s(n){for(var t=ze(n),l=t.length;l--;){var u=t[l],f=n[u];t[l]=[u,f,Gu(f)]}return t}function qt(n,t){var l=Hm(n,t);return uu(l)?l:a}function xh(n){var t=Se.call(n,Nt),l=n[Nt];try{n[Nt]=a;var u=!0}catch{}var f=ha.call(n);return u&&(t?n[Nt]=l:delete n[Nt]),f}var ws=Zi?function(n){return n==null?[]:(n=je(n),kt(Zi(n),function(t){return Wo.call(n,t)}))}:Vs,Vu=Zi?function(n){for(var t=[];n;)vt(t,ws(n)),n=ya(n);return t}:Vs,rn=sn;(Ji&&rn(new Ji(new ArrayBuffer(1)))!=$t||wr&&rn(new wr)!=Me||Qi&&rn(Qi.resolve())!=Hn||Zt&&rn(new Zt)!=Mn||Ar&&rn(new Ar)!=br)&&(rn=function(n){var t=sn(n),l=t==Qe?n.constructor:a,u=l?Dt(l):"";if(u)switch(u){case pp:return $t;case hp:return Me;case kp:return Hn;case vp:return Mn;case yp:return br}return t});function Bh(n,t,l){for(var u=-1,f=l.length;++u<f;){var k=l[u],b=k.size;switch(k.type){case"drop":n+=b;break;case"dropRight":t-=b;break;case"take":t=tn(t,n+b);break;case"takeRight":n=We(n,t-b);break}}return{start:n,end:t}}function qh(n){var t=n.match(Cc);return t?t[1].split(Vc):[]}function Hu(n,t,l){t=_t(t,n);for(var u=-1,f=t.length,k=!1;++u<f;){var b=Un(t[u]);if(!(k=n!=null&&l(n,b)))break;n=n[b]}return k||++u!=f?k:(f=n==null?0:n.length,!!f&&Ua(f)&&lt(b,f)&&(fe(n)||Mt(n)))}function Dh(n){var t=n.length,l=new n.constructor(t);return t&&typeof n[0]=="string"&&Se.call(n,"index")&&(l.index=n.index,l.input=n.input),l}function $u(n){return typeof n.constructor=="function"&&!Br(n)?Qt(ya(n)):{}}function Mh(n,t,l){var u=n.constructor;switch(t){case Er:return ks(n);case ve:case we:return new u(+n);case $t:return bh(n,l);case _i:case wi:case Ai:case Ri:case Si:case Ii:case ji:case Ni:case Oi:return Ru(n,l);case Me:return new u;case Je:case yr:return new u(n);case vr:return Eh(n);case Mn:return new u;case sa:return Th(n)}}function Lh(n,t){var l=t.length;if(!l)return n;var u=l-1;return t[u]=(l>1?"& ":"")+t[u],t=t.join(l>2?", ":" "),n.replace(Kc,`{
/* [wrapped with `+t+`] */
`)}function Fh(n){return fe(n)||Mt(n)||!!(zo&&n&&n[zo])}function lt(n,t){var l=typeof n;return t=t??G,!!t&&(l=="number"||l!="symbol"&&Zc.test(n))&&n>-1&&n%1==0&&n<t}function ln(n,t,l){if(!Le(l))return!1;var u=typeof t;return(u=="number"?gn(l)&&lt(t,l.length):u=="string"&&t in l)?Kn(l[t],n):!1}function As(n,t){if(fe(n))return!1;var l=typeof n;return l=="number"||l=="symbol"||l=="boolean"||n==null||yn(n)?!0:Dc.test(n)||!qc.test(n)||t!=null&&n in je(t)}function Kh(n){var t=typeof n;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?n!=="__proto__":n===null}function Rs(n){var t=La(n),l=p[t];if(typeof l!="function"||!(t in ye.prototype))return!1;if(n===l)return!0;var u=Ts(l);return!!u&&n===u[0]}function Ch(n){return!!Go&&Go in n}var Vh=ma?ot:Hs;function Br(n){var t=n&&n.constructor,l=typeof t=="function"&&t.prototype||Xt;return n===l}function Gu(n){return n===n&&!Le(n)}function Uu(n,t){return function(l){return l==null?!1:l[n]===t&&(t!==a||n in je(l))}}function Hh(n){var t=$a(n,function(u){return l.size===m&&l.clear(),u}),l=t.cache;return t}function $h(n,t){var l=n[1],u=t[1],f=l|u,k=f<(E|A|N),b=u==N&&l==R||u==N&&l==I&&n[7].length<=t[8]||u==(N|I)&&t[7].length<=t[8]&&l==R;if(!(k||b))return n;u&E&&(n[2]=t[2],f|=l&E?0:B);var w=t[3];if(w){var x=n[3];n[3]=x?Iu(x,w,t[4]):w,n[4]=x?yt(n[3],h):t[4]}return w=t[5],w&&(x=n[5],n[5]=x?ju(x,w,t[6]):w,n[6]=x?yt(n[5],h):t[6]),w=t[7],w&&(n[7]=w),u&N&&(n[8]=n[8]==null?t[8]:tn(n[8],t[8])),n[9]==null&&(n[9]=t[9]),n[0]=t[0],n[1]=f,n}function Gh(n){var t=[];if(n!=null)for(var l in je(n))t.push(l);return t}function Uh(n){return ha.call(n)}function Yu(n,t,l){return t=We(t===a?n.length-1:t,0),function(){for(var u=arguments,f=-1,k=We(u.length-t,0),b=q(k);++f<k;)b[f]=u[t+f];f=-1;for(var w=q(t+1);++f<t;)w[f]=u[f];return w[t]=l(b),hn(n,this,w)}}function Wu(n,t){return t.length<2?n:Bt(n,On(t,0,-1))}function Yh(n,t){for(var l=n.length,u=tn(t.length,l),f=dn(n);u--;){var k=t[u];n[u]=lt(k,l)?f[k]:a}return n}function Ss(n,t){if(!(t==="constructor"&&typeof n[t]=="function")&&t!="__proto__")return n[t]}var zu=Zu(vu),qr=op||function(n,t){return en.setTimeout(n,t)},Is=Zu(hh);function Xu(n,t,l){var u=t+"";return Is(n,Lh(u,Wh(qh(u),l)))}function Zu(n){var t=0,l=0;return function(){var u=fp(),f=L-(u-l);if(l=u,f>0){if(++t>=J)return arguments[0]}else t=0;return n.apply(a,arguments)}}function Ka(n,t){var l=-1,u=n.length,f=u-1;for(t=t===a?u:t;++l<t;){var k=ds(l,f),b=n[k];n[k]=n[l],n[l]=b}return n.length=t,n}var Ju=Hh(function(n){var t=[];return n.charCodeAt(0)===46&&t.push(""),n.replace(Mc,function(l,u,f,k){t.push(f?k.replace(Gc,"$1"):u||l)}),t});function Un(n){if(typeof n=="string"||yn(n))return n;var t=n+"";return t=="0"&&1/n==-1/0?"-0":t}function Dt(n){if(n!=null){try{return pa.call(n)}catch{}try{return n+""}catch{}}return""}function Wh(n,t){return Sn(pn,function(l){var u="_."+l[0];t&l[1]&&!da(n,u)&&n.push(u)}),n.sort()}function Qu(n){if(n instanceof ye)return n.clone();var t=new jn(n.__wrapped__,n.__chain__);return t.__actions__=dn(n.__actions__),t.__index__=n.__index__,t.__values__=n.__values__,t}function zh(n,t,l){(l?ln(n,t,l):t===a)?t=1:t=We(ce(t),0);var u=n==null?0:n.length;if(!u||t<1)return[];for(var f=0,k=0,b=q(Ta(u/t));f<u;)b[k++]=On(n,f,f+=t);return b}function Xh(n){for(var t=-1,l=n==null?0:n.length,u=0,f=[];++t<l;){var k=n[t];k&&(f[u++]=k)}return f}function Zh(){var n=arguments.length;if(!n)return[];for(var t=q(n-1),l=arguments[0],u=n;u--;)t[u-1]=arguments[u];return vt(fe(l)?dn(l):[l],nn(t,1))}var Jh=pe(function(n,t){return Ge(n)?jr(n,nn(t,1,Ge,!0)):[]}),Qh=pe(function(n,t){var l=Pn(t);return Ge(l)&&(l=a),Ge(n)?jr(n,nn(t,1,Ge,!0),oe(l,2)):[]}),ek=pe(function(n,t){var l=Pn(t);return Ge(l)&&(l=a),Ge(n)?jr(n,nn(t,1,Ge,!0),a,l):[]});function nk(n,t,l){var u=n==null?0:n.length;return u?(t=l||t===a?1:ce(t),On(n,t<0?0:t,u)):[]}function tk(n,t,l){var u=n==null?0:n.length;return u?(t=l||t===a?1:ce(t),t=u-t,On(n,0,t<0?0:t)):[]}function rk(n,t){return n&&n.length?Pa(n,oe(t,3),!0,!0):[]}function ak(n,t){return n&&n.length?Pa(n,oe(t,3),!0):[]}function ik(n,t,l,u){var f=n==null?0:n.length;return f?(l&&typeof l!="number"&&ln(n,t,l)&&(l=0,u=f),Zp(n,t,l,u)):[]}function ed(n,t,l){var u=n==null?0:n.length;if(!u)return-1;var f=l==null?0:ce(l);return f<0&&(f=We(u+f,0)),ga(n,oe(t,3),f)}function nd(n,t,l){var u=n==null?0:n.length;if(!u)return-1;var f=u-1;return l!==a&&(f=ce(l),f=l<0?We(u+f,0):tn(f,u-1)),ga(n,oe(t,3),f,!0)}function td(n){var t=n==null?0:n.length;return t?nn(n,1):[]}function sk(n){var t=n==null?0:n.length;return t?nn(n,Z):[]}function lk(n,t){var l=n==null?0:n.length;return l?(t=t===a?1:ce(t),nn(n,t)):[]}function ok(n){for(var t=-1,l=n==null?0:n.length,u={};++t<l;){var f=n[t];u[f[0]]=f[1]}return u}function rd(n){return n&&n.length?n[0]:a}function uk(n,t,l){var u=n==null?0:n.length;if(!u)return-1;var f=l==null?0:ce(l);return f<0&&(f=We(u+f,0)),Ut(n,t,f)}function dk(n){var t=n==null?0:n.length;return t?On(n,0,-1):[]}var gk=pe(function(n){var t=De(n,ps);return t.length&&t[0]===n[0]?is(t):[]}),fk=pe(function(n){var t=Pn(n),l=De(n,ps);return t===Pn(l)?t=a:l.pop(),l.length&&l[0]===n[0]?is(l,oe(t,2)):[]}),ck=pe(function(n){var t=Pn(n),l=De(n,ps);return t=typeof t=="function"?t:a,t&&l.pop(),l.length&&l[0]===n[0]?is(l,a,t):[]});function mk(n,t){return n==null?"":dp.call(n,t)}function Pn(n){var t=n==null?0:n.length;return t?n[t-1]:a}function pk(n,t,l){var u=n==null?0:n.length;if(!u)return-1;var f=u;return l!==a&&(f=ce(l),f=f<0?We(u+f,0):tn(f,u-1)),t===t?Wm(n,t,f):ga(n,Mo,f,!0)}function hk(n,t){return n&&n.length?mu(n,ce(t)):a}var kk=pe(ad);function ad(n,t){return n&&n.length&&t&&t.length?us(n,t):n}function vk(n,t,l){return n&&n.length&&t&&t.length?us(n,t,oe(l,2)):n}function yk(n,t,l){return n&&n.length&&t&&t.length?us(n,t,a,l):n}var bk=st(function(n,t){var l=n==null?0:n.length,u=ns(n,t);return ku(n,De(t,function(f){return lt(f,l)?+f:f}).sort(Su)),u});function Ek(n,t){var l=[];if(!(n&&n.length))return l;var u=-1,f=[],k=n.length;for(t=oe(t,3);++u<k;){var b=n[u];t(b,u,n)&&(l.push(b),f.push(u))}return ku(n,f),l}function js(n){return n==null?n:mp.call(n)}function Tk(n,t,l){var u=n==null?0:n.length;return u?(l&&typeof l!="number"&&ln(n,t,l)?(t=0,l=u):(t=t==null?0:ce(t),l=l===a?u:ce(l)),On(n,t,l)):[]}function _k(n,t){return Oa(n,t)}function wk(n,t,l){return fs(n,t,oe(l,2))}function Ak(n,t){var l=n==null?0:n.length;if(l){var u=Oa(n,t);if(u<l&&Kn(n[u],t))return u}return-1}function Rk(n,t){return Oa(n,t,!0)}function Sk(n,t,l){return fs(n,t,oe(l,2),!0)}function Ik(n,t){var l=n==null?0:n.length;if(l){var u=Oa(n,t,!0)-1;if(Kn(n[u],t))return u}return-1}function jk(n){return n&&n.length?yu(n):[]}function Nk(n,t){return n&&n.length?yu(n,oe(t,2)):[]}function Ok(n){var t=n==null?0:n.length;return t?On(n,1,t):[]}function Pk(n,t,l){return n&&n.length?(t=l||t===a?1:ce(t),On(n,0,t<0?0:t)):[]}function xk(n,t,l){var u=n==null?0:n.length;return u?(t=l||t===a?1:ce(t),t=u-t,On(n,t<0?0:t,u)):[]}function Bk(n,t){return n&&n.length?Pa(n,oe(t,3),!1,!0):[]}function qk(n,t){return n&&n.length?Pa(n,oe(t,3)):[]}var Dk=pe(function(n){return Tt(nn(n,1,Ge,!0))}),Mk=pe(function(n){var t=Pn(n);return Ge(t)&&(t=a),Tt(nn(n,1,Ge,!0),oe(t,2))}),Lk=pe(function(n){var t=Pn(n);return t=typeof t=="function"?t:a,Tt(nn(n,1,Ge,!0),a,t)});function Fk(n){return n&&n.length?Tt(n):[]}function Kk(n,t){return n&&n.length?Tt(n,oe(t,2)):[]}function Ck(n,t){return t=typeof t=="function"?t:a,n&&n.length?Tt(n,a,t):[]}function Ns(n){if(!(n&&n.length))return[];var t=0;return n=kt(n,function(l){if(Ge(l))return t=We(l.length,t),!0}),Yi(t,function(l){return De(n,$i(l))})}function id(n,t){if(!(n&&n.length))return[];var l=Ns(n);return t==null?l:De(l,function(u){return hn(t,a,u)})}var Vk=pe(function(n,t){return Ge(n)?jr(n,t):[]}),Hk=pe(function(n){return ms(kt(n,Ge))}),$k=pe(function(n){var t=Pn(n);return Ge(t)&&(t=a),ms(kt(n,Ge),oe(t,2))}),Gk=pe(function(n){var t=Pn(n);return t=typeof t=="function"?t:a,ms(kt(n,Ge),a,t)}),Uk=pe(Ns);function Yk(n,t){return _u(n||[],t||[],Ir)}function Wk(n,t){return _u(n||[],t||[],Pr)}var zk=pe(function(n){var t=n.length,l=t>1?n[t-1]:a;return l=typeof l=="function"?(n.pop(),l):a,id(n,l)});function sd(n){var t=p(n);return t.__chain__=!0,t}function Xk(n,t){return t(n),n}function Ca(n,t){return t(n)}var Zk=st(function(n){var t=n.length,l=t?n[0]:0,u=this.__wrapped__,f=function(k){return ns(k,n)};return t>1||this.__actions__.length||!(u instanceof ye)||!lt(l)?this.thru(f):(u=u.slice(l,+l+(t?1:0)),u.__actions__.push({func:Ca,args:[f],thisArg:a}),new jn(u,this.__chain__).thru(function(k){return t&&!k.length&&k.push(a),k}))});function Jk(){return sd(this)}function Qk(){return new jn(this.value(),this.__chain__)}function ev(){this.__values__===a&&(this.__values__=bd(this.value()));var n=this.__index__>=this.__values__.length,t=n?a:this.__values__[this.__index__++];return{done:n,value:t}}function nv(){return this}function tv(n){for(var t,l=this;l instanceof Ra;){var u=Qu(l);u.__index__=0,u.__values__=a,t?f.__wrapped__=u:t=u;var f=u;l=l.__wrapped__}return f.__wrapped__=n,t}function rv(){var n=this.__wrapped__;if(n instanceof ye){var t=n;return this.__actions__.length&&(t=new ye(this)),t=t.reverse(),t.__actions__.push({func:Ca,args:[js],thisArg:a}),new jn(t,this.__chain__)}return this.thru(js)}function av(){return Tu(this.__wrapped__,this.__actions__)}var iv=xa(function(n,t,l){Se.call(n,l)?++n[l]:at(n,l,1)});function sv(n,t,l){var u=fe(n)?qo:Xp;return l&&ln(n,t,l)&&(t=a),u(n,oe(t,3))}function lv(n,t){var l=fe(n)?kt:iu;return l(n,oe(t,3))}var ov=xu(ed),uv=xu(nd);function dv(n,t){return nn(Va(n,t),1)}function gv(n,t){return nn(Va(n,t),Z)}function fv(n,t,l){return l=l===a?1:ce(l),nn(Va(n,t),l)}function ld(n,t){var l=fe(n)?Sn:Et;return l(n,oe(t,3))}function od(n,t){var l=fe(n)?Om:au;return l(n,oe(t,3))}var cv=xa(function(n,t,l){Se.call(n,l)?n[l].push(t):at(n,l,[t])});function mv(n,t,l,u){n=gn(n)?n:ar(n),l=l&&!u?ce(l):0;var f=n.length;return l<0&&(l=We(f+l,0)),Ya(n)?l<=f&&n.indexOf(t,l)>-1:!!f&&Ut(n,t,l)>-1}var pv=pe(function(n,t,l){var u=-1,f=typeof t=="function",k=gn(n)?q(n.length):[];return Et(n,function(b){k[++u]=f?hn(t,b,l):Nr(b,t,l)}),k}),hv=xa(function(n,t,l){at(n,l,t)});function Va(n,t){var l=fe(n)?De:gu;return l(n,oe(t,3))}function kv(n,t,l,u){return n==null?[]:(fe(t)||(t=t==null?[]:[t]),l=u?a:l,fe(l)||(l=l==null?[]:[l]),pu(n,t,l))}var vv=xa(function(n,t,l){n[l?0:1].push(t)},function(){return[[],[]]});function yv(n,t,l){var u=fe(n)?Vi:Fo,f=arguments.length<3;return u(n,oe(t,4),l,f,Et)}function bv(n,t,l){var u=fe(n)?Pm:Fo,f=arguments.length<3;return u(n,oe(t,4),l,f,au)}function Ev(n,t){var l=fe(n)?kt:iu;return l(n,Ga(oe(t,3)))}function Tv(n){var t=fe(n)?eu:mh;return t(n)}function _v(n,t,l){(l?ln(n,t,l):t===a)?t=1:t=ce(t);var u=fe(n)?Gp:ph;return u(n,t)}function wv(n){var t=fe(n)?Up:kh;return t(n)}function Av(n){if(n==null)return 0;if(gn(n))return Ya(n)?Wt(n):n.length;var t=rn(n);return t==Me||t==Mn?n.size:ls(n).length}function Rv(n,t,l){var u=fe(n)?Hi:vh;return l&&ln(n,t,l)&&(t=a),u(n,oe(t,3))}var Sv=pe(function(n,t){if(n==null)return[];var l=t.length;return l>1&&ln(n,t[0],t[1])?t=[]:l>2&&ln(t[0],t[1],t[2])&&(t=[t[0]]),pu(n,nn(t,1),[])}),Ha=lp||function(){return en.Date.now()};function Iv(n,t){if(typeof t!="function")throw new In(d);return n=ce(n),function(){if(--n<1)return t.apply(this,arguments)}}function ud(n,t,l){return t=l?a:t,t=n&&t==null?n.length:t,it(n,N,a,a,a,a,t)}function dd(n,t){var l;if(typeof t!="function")throw new In(d);return n=ce(n),function(){return--n>0&&(l=t.apply(this,arguments)),n<=1&&(t=a),l}}var Os=pe(function(n,t,l){var u=E;if(l.length){var f=yt(l,tr(Os));u|=O}return it(n,u,t,l,f)}),gd=pe(function(n,t,l){var u=E|A;if(l.length){var f=yt(l,tr(gd));u|=O}return it(t,u,n,l,f)});function fd(n,t,l){t=l?a:t;var u=it(n,R,a,a,a,a,a,t);return u.placeholder=fd.placeholder,u}function cd(n,t,l){t=l?a:t;var u=it(n,V,a,a,a,a,a,t);return u.placeholder=cd.placeholder,u}function md(n,t,l){var u,f,k,b,w,x,H=0,$=!1,U=!1,ee=!0;if(typeof n!="function")throw new In(d);t=xn(t)||0,Le(l)&&($=!!l.leading,U="maxWait"in l,k=U?We(xn(l.maxWait)||0,t):k,ee="trailing"in l?!!l.trailing:ee);function se(Ue){var Cn=u,dt=f;return u=f=a,H=Ue,b=n.apply(dt,Cn),b}function ue(Ue){return H=Ue,w=qr(ke,t),$?se(Ue):b}function me(Ue){var Cn=Ue-x,dt=Ue-H,xd=t-Cn;return U?tn(xd,k-dt):xd}function de(Ue){var Cn=Ue-x,dt=Ue-H;return x===a||Cn>=t||Cn<0||U&&dt>=k}function ke(){var Ue=Ha();if(de(Ue))return be(Ue);w=qr(ke,me(Ue))}function be(Ue){return w=a,ee&&u?se(Ue):(u=f=a,b)}function bn(){w!==a&&wu(w),H=0,u=x=f=w=a}function on(){return w===a?b:be(Ha())}function En(){var Ue=Ha(),Cn=de(Ue);if(u=arguments,f=this,x=Ue,Cn){if(w===a)return ue(x);if(U)return wu(w),w=qr(ke,t),se(x)}return w===a&&(w=qr(ke,t)),b}return En.cancel=bn,En.flush=on,En}var jv=pe(function(n,t){return ru(n,1,t)}),Nv=pe(function(n,t,l){return ru(n,xn(t)||0,l)});function Ov(n){return it(n,C)}function $a(n,t){if(typeof n!="function"||t!=null&&typeof t!="function")throw new In(d);var l=function(){var u=arguments,f=t?t.apply(this,u):u[0],k=l.cache;if(k.has(f))return k.get(f);var b=n.apply(this,u);return l.cache=k.set(f,b)||k,b};return l.cache=new($a.Cache||rt),l}$a.Cache=rt;function Ga(n){if(typeof n!="function")throw new In(d);return function(){var t=arguments;switch(t.length){case 0:return!n.call(this);case 1:return!n.call(this,t[0]);case 2:return!n.call(this,t[0],t[1]);case 3:return!n.call(this,t[0],t[1],t[2])}return!n.apply(this,t)}}function Pv(n){return dd(2,n)}var xv=yh(function(n,t){t=t.length==1&&fe(t[0])?De(t[0],kn(oe())):De(nn(t,1),kn(oe()));var l=t.length;return pe(function(u){for(var f=-1,k=tn(u.length,l);++f<k;)u[f]=t[f].call(this,u[f]);return hn(n,this,u)})}),Ps=pe(function(n,t){var l=yt(t,tr(Ps));return it(n,O,a,t,l)}),pd=pe(function(n,t){var l=yt(t,tr(pd));return it(n,D,a,t,l)}),Bv=st(function(n,t){return it(n,I,a,a,a,t)});function qv(n,t){if(typeof n!="function")throw new In(d);return t=t===a?t:ce(t),pe(n,t)}function Dv(n,t){if(typeof n!="function")throw new In(d);return t=t==null?0:We(ce(t),0),pe(function(l){var u=l[t],f=wt(l,0,t);return u&&vt(f,u),hn(n,this,f)})}function Mv(n,t,l){var u=!0,f=!0;if(typeof n!="function")throw new In(d);return Le(l)&&(u="leading"in l?!!l.leading:u,f="trailing"in l?!!l.trailing:f),md(n,t,{leading:u,maxWait:t,trailing:f})}function Lv(n){return ud(n,1)}function Fv(n,t){return Ps(hs(t),n)}function Kv(){if(!arguments.length)return[];var n=arguments[0];return fe(n)?n:[n]}function Cv(n){return Nn(n,T)}function Vv(n,t){return t=typeof t=="function"?t:a,Nn(n,T,t)}function Hv(n){return Nn(n,y|T)}function $v(n,t){return t=typeof t=="function"?t:a,Nn(n,y|T,t)}function Gv(n,t){return t==null||tu(n,t,ze(t))}function Kn(n,t){return n===t||n!==n&&t!==t}var Uv=Ma(as),Yv=Ma(function(n,t){return n>=t}),Mt=ou(function(){return arguments}())?ou:function(n){return He(n)&&Se.call(n,"callee")&&!Wo.call(n,"callee")},fe=q.isArray,Wv=jo?kn(jo):th;function gn(n){return n!=null&&Ua(n.length)&&!ot(n)}function Ge(n){return He(n)&&gn(n)}function zv(n){return n===!0||n===!1||He(n)&&sn(n)==ve}var At=up||Hs,Xv=No?kn(No):rh;function Zv(n){return He(n)&&n.nodeType===1&&!Dr(n)}function Jv(n){if(n==null)return!0;if(gn(n)&&(fe(n)||typeof n=="string"||typeof n.splice=="function"||At(n)||rr(n)||Mt(n)))return!n.length;var t=rn(n);if(t==Me||t==Mn)return!n.size;if(Br(n))return!ls(n).length;for(var l in n)if(Se.call(n,l))return!1;return!0}function Qv(n,t){return Or(n,t)}function ey(n,t,l){l=typeof l=="function"?l:a;var u=l?l(n,t):a;return u===a?Or(n,t,a,l):!!u}function xs(n){if(!He(n))return!1;var t=sn(n);return t==Ve||t==Ze||typeof n.message=="string"&&typeof n.name=="string"&&!Dr(n)}function ny(n){return typeof n=="number"&&Xo(n)}function ot(n){if(!Le(n))return!1;var t=sn(n);return t==$e||t==An||t==Ce||t==nt}function hd(n){return typeof n=="number"&&n==ce(n)}function Ua(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=G}function Le(n){var t=typeof n;return n!=null&&(t=="object"||t=="function")}function He(n){return n!=null&&typeof n=="object"}var kd=Oo?kn(Oo):ih;function ty(n,t){return n===t||ss(n,t,_s(t))}function ry(n,t,l){return l=typeof l=="function"?l:a,ss(n,t,_s(t),l)}function ay(n){return vd(n)&&n!=+n}function iy(n){if(Vh(n))throw new ge(o);return uu(n)}function sy(n){return n===null}function ly(n){return n==null}function vd(n){return typeof n=="number"||He(n)&&sn(n)==Je}function Dr(n){if(!He(n)||sn(n)!=Qe)return!1;var t=ya(n);if(t===null)return!0;var l=Se.call(t,"constructor")&&t.constructor;return typeof l=="function"&&l instanceof l&&pa.call(l)==rp}var Bs=Po?kn(Po):sh;function oy(n){return hd(n)&&n>=-9007199254740991&&n<=G}var yd=xo?kn(xo):lh;function Ya(n){return typeof n=="string"||!fe(n)&&He(n)&&sn(n)==yr}function yn(n){return typeof n=="symbol"||He(n)&&sn(n)==sa}var rr=Bo?kn(Bo):oh;function uy(n){return n===a}function dy(n){return He(n)&&rn(n)==br}function gy(n){return He(n)&&sn(n)==Sc}var fy=Ma(os),cy=Ma(function(n,t){return n<=t});function bd(n){if(!n)return[];if(gn(n))return Ya(n)?Ln(n):dn(n);if(_r&&n[_r])return Gm(n[_r]());var t=rn(n),l=t==Me?zi:t==Mn?fa:ar;return l(n)}function ut(n){if(!n)return n===0?n:0;if(n=xn(n),n===Z||n===-1/0){var t=n<0?-1:1;return t*W}return n===n?n:0}function ce(n){var t=ut(n),l=t%1;return t===t?l?t-l:t:0}function Ed(n){return n?xt(ce(n),0,te):0}function xn(n){if(typeof n=="number")return n;if(yn(n))return ae;if(Le(n)){var t=typeof n.valueOf=="function"?n.valueOf():n;n=Le(t)?t+"":t}if(typeof n!="string")return n===0?n:+n;n=Ko(n);var l=Wc.test(n);return l||Xc.test(n)?Im(n.slice(2),l?2:8):Yc.test(n)?ae:+n}function Td(n){return Gn(n,fn(n))}function my(n){return n?xt(ce(n),-9007199254740991,G):n===0?n:0}function Ae(n){return n==null?"":vn(n)}var py=er(function(n,t){if(Br(t)||gn(t)){Gn(t,ze(t),n);return}for(var l in t)Se.call(t,l)&&Ir(n,l,t[l])}),_d=er(function(n,t){Gn(t,fn(t),n)}),Wa=er(function(n,t,l,u){Gn(t,fn(t),n,u)}),hy=er(function(n,t,l,u){Gn(t,ze(t),n,u)}),ky=st(ns);function vy(n,t){var l=Qt(n);return t==null?l:nu(l,t)}var yy=pe(function(n,t){n=je(n);var l=-1,u=t.length,f=u>2?t[2]:a;for(f&&ln(t[0],t[1],f)&&(u=1);++l<u;)for(var k=t[l],b=fn(k),w=-1,x=b.length;++w<x;){var H=b[w],$=n[H];($===a||Kn($,Xt[H])&&!Se.call(n,H))&&(n[H]=k[H])}return n}),by=pe(function(n){return n.push(a,Ku),hn(wd,a,n)});function Ey(n,t){return Do(n,oe(t,3),$n)}function Ty(n,t){return Do(n,oe(t,3),rs)}function _y(n,t){return n==null?n:ts(n,oe(t,3),fn)}function wy(n,t){return n==null?n:su(n,oe(t,3),fn)}function Ay(n,t){return n&&$n(n,oe(t,3))}function Ry(n,t){return n&&rs(n,oe(t,3))}function Sy(n){return n==null?[]:ja(n,ze(n))}function Iy(n){return n==null?[]:ja(n,fn(n))}function qs(n,t,l){var u=n==null?a:Bt(n,t);return u===a?l:u}function jy(n,t){return n!=null&&Hu(n,t,Jp)}function Ds(n,t){return n!=null&&Hu(n,t,Qp)}var Ny=qu(function(n,t,l){t!=null&&typeof t.toString!="function"&&(t=ha.call(t)),n[t]=l},Ls(cn)),Oy=qu(function(n,t,l){t!=null&&typeof t.toString!="function"&&(t=ha.call(t)),Se.call(n,t)?n[t].push(l):n[t]=[l]},oe),Py=pe(Nr);function ze(n){return gn(n)?Qo(n):ls(n)}function fn(n){return gn(n)?Qo(n,!0):uh(n)}function xy(n,t){var l={};return t=oe(t,3),$n(n,function(u,f,k){at(l,t(u,f,k),u)}),l}function By(n,t){var l={};return t=oe(t,3),$n(n,function(u,f,k){at(l,f,t(u,f,k))}),l}var qy=er(function(n,t,l){Na(n,t,l)}),wd=er(function(n,t,l,u){Na(n,t,l,u)}),Dy=st(function(n,t){var l={};if(n==null)return l;var u=!1;t=De(t,function(k){return k=_t(k,n),u||(u=k.length>1),k}),Gn(n,Es(n),l),u&&(l=Nn(l,y|_|T,Nh));for(var f=t.length;f--;)cs(l,t[f]);return l});function My(n,t){return Ad(n,Ga(oe(t)))}var Ly=st(function(n,t){return n==null?{}:gh(n,t)});function Ad(n,t){if(n==null)return{};var l=De(Es(n),function(u){return[u]});return t=oe(t),hu(n,l,function(u,f){return t(u,f[0])})}function Fy(n,t,l){t=_t(t,n);var u=-1,f=t.length;for(f||(f=1,n=a);++u<f;){var k=n==null?a:n[Un(t[u])];k===a&&(u=f,k=l),n=ot(k)?k.call(n):k}return n}function Ky(n,t,l){return n==null?n:Pr(n,t,l)}function Cy(n,t,l,u){return u=typeof u=="function"?u:a,n==null?n:Pr(n,t,l,u)}var Rd=Lu(ze),Sd=Lu(fn);function Vy(n,t,l){var u=fe(n),f=u||At(n)||rr(n);if(t=oe(t,4),l==null){var k=n&&n.constructor;f?l=u?new k:[]:Le(n)?l=ot(k)?Qt(ya(n)):{}:l={}}return(f?Sn:$n)(n,function(b,w,x){return t(l,b,w,x)}),l}function Hy(n,t){return n==null?!0:cs(n,t)}function $y(n,t,l){return n==null?n:Eu(n,t,hs(l))}function Gy(n,t,l,u){return u=typeof u=="function"?u:a,n==null?n:Eu(n,t,hs(l),u)}function ar(n){return n==null?[]:Wi(n,ze(n))}function Uy(n){return n==null?[]:Wi(n,fn(n))}function Yy(n,t,l){return l===a&&(l=t,t=a),l!==a&&(l=xn(l),l=l===l?l:0),t!==a&&(t=xn(t),t=t===t?t:0),xt(xn(n),t,l)}function Wy(n,t,l){return t=ut(t),l===a?(l=t,t=0):l=ut(l),n=xn(n),eh(n,t,l)}function zy(n,t,l){if(l&&typeof l!="boolean"&&ln(n,t,l)&&(t=l=a),l===a&&(typeof t=="boolean"?(l=t,t=a):typeof n=="boolean"&&(l=n,n=a)),n===a&&t===a?(n=0,t=1):(n=ut(n),t===a?(t=n,n=0):t=ut(t)),n>t){var u=n;n=t,t=u}if(l||n%1||t%1){var f=Zo();return tn(n+f*(t-n+Sm("1e-"+((f+"").length-1))),t)}return ds(n,t)}var Xy=nr(function(n,t,l){return t=t.toLowerCase(),n+(l?Id(t):t)});function Id(n){return Ms(Ae(n).toLowerCase())}function jd(n){return n=Ae(n),n&&n.replace(Jc,Km).replace(km,"")}function Zy(n,t,l){n=Ae(n),t=vn(t);var u=n.length;l=l===a?u:xt(ce(l),0,u);var f=l;return l-=t.length,l>=0&&n.slice(l,f)==t}function Jy(n){return n=Ae(n),n&&Pc.test(n)?n.replace(io,Cm):n}function Qy(n){return n=Ae(n),n&&Lc.test(n)?n.replace(Pi,"\\$&"):n}var eb=nr(function(n,t,l){return n+(l?"-":"")+t.toLowerCase()}),nb=nr(function(n,t,l){return n+(l?" ":"")+t.toLowerCase()}),tb=Pu("toLowerCase");function rb(n,t,l){n=Ae(n),t=ce(t);var u=t?Wt(n):0;if(!t||u>=t)return n;var f=(t-u)/2;return Da(_a(f),l)+n+Da(Ta(f),l)}function ab(n,t,l){n=Ae(n),t=ce(t);var u=t?Wt(n):0;return t&&u<t?n+Da(t-u,l):n}function ib(n,t,l){n=Ae(n),t=ce(t);var u=t?Wt(n):0;return t&&u<t?Da(t-u,l)+n:n}function sb(n,t,l){return l||t==null?t=0:t&&(t=+t),cp(Ae(n).replace(xi,""),t||0)}function lb(n,t,l){return(l?ln(n,t,l):t===a)?t=1:t=ce(t),gs(Ae(n),t)}function ob(){var n=arguments,t=Ae(n[0]);return n.length<3?t:t.replace(n[1],n[2])}var ub=nr(function(n,t,l){return n+(l?"_":"")+t.toLowerCase()});function db(n,t,l){return l&&typeof l!="number"&&ln(n,t,l)&&(t=l=a),l=l===a?te:l>>>0,l?(n=Ae(n),n&&(typeof t=="string"||t!=null&&!Bs(t))&&(t=vn(t),!t&&Yt(n))?wt(Ln(n),0,l):n.split(t,l)):[]}var gb=nr(function(n,t,l){return n+(l?" ":"")+Ms(t)});function fb(n,t,l){return n=Ae(n),l=l==null?0:xt(ce(l),0,n.length),t=vn(t),n.slice(l,l+t.length)==t}function cb(n,t,l){var u=p.templateSettings;l&&ln(n,t,l)&&(t=a),n=Ae(n),t=Wa({},t,u,Fu);var f=Wa({},t.imports,u.imports,Fu),k=ze(f),b=Wi(f,k),w,x,H=0,$=t.interpolate||la,U="__p += '",ee=Xi((t.escape||la).source+"|"+$.source+"|"+($===so?Uc:la).source+"|"+(t.evaluate||la).source+"|$","g"),se="//# sourceURL="+(Se.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Tm+"]")+`
`;n.replace(ee,function(de,ke,be,bn,on,En){return be||(be=bn),U+=n.slice(H,En).replace(Qc,Vm),ke&&(w=!0,U+=`' +
__e(`+ke+`) +
'`),on&&(x=!0,U+=`';
`+on+`;
__p += '`),be&&(U+=`' +
((__t = (`+be+`)) == null ? '' : __t) +
'`),H=En+de.length,de}),U+=`';
`;var ue=Se.call(t,"variable")&&t.variable;if(!ue)U=`with (obj) {
`+U+`
}
`;else if($c.test(ue))throw new ge(g);U=(x?U.replace(Ic,""):U).replace(jc,"$1").replace(Nc,"$1;"),U="function("+(ue||"obj")+`) {
`+(ue?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(w?", __e = _.escape":"")+(x?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+U+`return __p
}`;var me=Od(function(){return _e(k,se+"return "+U).apply(a,b)});if(me.source=U,xs(me))throw me;return me}function mb(n){return Ae(n).toLowerCase()}function pb(n){return Ae(n).toUpperCase()}function hb(n,t,l){if(n=Ae(n),n&&(l||t===a))return Ko(n);if(!n||!(t=vn(t)))return n;var u=Ln(n),f=Ln(t),k=Co(u,f),b=Vo(u,f)+1;return wt(u,k,b).join("")}function kb(n,t,l){if(n=Ae(n),n&&(l||t===a))return n.slice(0,$o(n)+1);if(!n||!(t=vn(t)))return n;var u=Ln(n),f=Vo(u,Ln(t))+1;return wt(u,0,f).join("")}function vb(n,t,l){if(n=Ae(n),n&&(l||t===a))return n.replace(xi,"");if(!n||!(t=vn(t)))return n;var u=Ln(n),f=Co(u,Ln(t));return wt(u,f).join("")}function yb(n,t){var l=X,u=Y;if(Le(t)){var f="separator"in t?t.separator:f;l="length"in t?ce(t.length):l,u="omission"in t?vn(t.omission):u}n=Ae(n);var k=n.length;if(Yt(n)){var b=Ln(n);k=b.length}if(l>=k)return n;var w=l-Wt(u);if(w<1)return u;var x=b?wt(b,0,w).join(""):n.slice(0,w);if(f===a)return x+u;if(b&&(w+=x.length-w),Bs(f)){if(n.slice(w).search(f)){var H,$=x;for(f.global||(f=Xi(f.source,Ae(lo.exec(f))+"g")),f.lastIndex=0;H=f.exec($);)var U=H.index;x=x.slice(0,U===a?w:U)}}else if(n.indexOf(vn(f),w)!=w){var ee=x.lastIndexOf(f);ee>-1&&(x=x.slice(0,ee))}return x+u}function bb(n){return n=Ae(n),n&&Oc.test(n)?n.replace(ao,zm):n}var Eb=nr(function(n,t,l){return n+(l?" ":"")+t.toUpperCase()}),Ms=Pu("toUpperCase");function Nd(n,t,l){return n=Ae(n),t=l?a:t,t===a?$m(n)?Jm(n):qm(n):n.match(t)||[]}var Od=pe(function(n,t){try{return hn(n,a,t)}catch(l){return xs(l)?l:new ge(l)}}),Tb=st(function(n,t){return Sn(t,function(l){l=Un(l),at(n,l,Os(n[l],n))}),n});function _b(n){var t=n==null?0:n.length,l=oe();return n=t?De(n,function(u){if(typeof u[1]!="function")throw new In(d);return[l(u[0]),u[1]]}):[],pe(function(u){for(var f=-1;++f<t;){var k=n[f];if(hn(k[0],this,u))return hn(k[1],this,u)}})}function wb(n){return zp(Nn(n,y))}function Ls(n){return function(){return n}}function Ab(n,t){return n==null||n!==n?t:n}var Rb=Bu(),Sb=Bu(!0);function cn(n){return n}function Fs(n){return du(typeof n=="function"?n:Nn(n,y))}function Ib(n){return fu(Nn(n,y))}function jb(n,t){return cu(n,Nn(t,y))}var Nb=pe(function(n,t){return function(l){return Nr(l,n,t)}}),Ob=pe(function(n,t){return function(l){return Nr(n,l,t)}});function Ks(n,t,l){var u=ze(t),f=ja(t,u);l==null&&!(Le(t)&&(f.length||!u.length))&&(l=t,t=n,n=this,f=ja(t,ze(t)));var k=!(Le(l)&&"chain"in l)||!!l.chain,b=ot(n);return Sn(f,function(w){var x=t[w];n[w]=x,b&&(n.prototype[w]=function(){var H=this.__chain__;if(k||H){var $=n(this.__wrapped__),U=$.__actions__=dn(this.__actions__);return U.push({func:x,args:arguments,thisArg:n}),$.__chain__=H,$}return x.apply(n,vt([this.value()],arguments))})}),n}function Pb(){return en._===this&&(en._=ap),this}function Cs(){}function xb(n){return n=ce(n),pe(function(t){return mu(t,n)})}var Bb=vs(De),qb=vs(qo),Db=vs(Hi);function Pd(n){return As(n)?$i(Un(n)):fh(n)}function Mb(n){return function(t){return n==null?a:Bt(n,t)}}var Lb=Du(),Fb=Du(!0);function Vs(){return[]}function Hs(){return!1}function Kb(){return{}}function Cb(){return""}function Vb(){return!0}function Hb(n,t){if(n=ce(n),n<1||n>G)return[];var l=te,u=tn(n,te);t=oe(t),n-=te;for(var f=Yi(u,t);++l<n;)t(l);return f}function $b(n){return fe(n)?De(n,Un):yn(n)?[n]:dn(Ju(Ae(n)))}function Gb(n){var t=++tp;return Ae(n)+t}var Ub=qa(function(n,t){return n+t},0),Yb=ys("ceil"),Wb=qa(function(n,t){return n/t},1),zb=ys("floor");function Xb(n){return n&&n.length?Ia(n,cn,as):a}function Zb(n,t){return n&&n.length?Ia(n,oe(t,2),as):a}function Jb(n){return Lo(n,cn)}function Qb(n,t){return Lo(n,oe(t,2))}function e0(n){return n&&n.length?Ia(n,cn,os):a}function n0(n,t){return n&&n.length?Ia(n,oe(t,2),os):a}var t0=qa(function(n,t){return n*t},1),r0=ys("round"),a0=qa(function(n,t){return n-t},0);function i0(n){return n&&n.length?Ui(n,cn):0}function s0(n,t){return n&&n.length?Ui(n,oe(t,2)):0}return p.after=Iv,p.ary=ud,p.assign=py,p.assignIn=_d,p.assignInWith=Wa,p.assignWith=hy,p.at=ky,p.before=dd,p.bind=Os,p.bindAll=Tb,p.bindKey=gd,p.castArray=Kv,p.chain=sd,p.chunk=zh,p.compact=Xh,p.concat=Zh,p.cond=_b,p.conforms=wb,p.constant=Ls,p.countBy=iv,p.create=vy,p.curry=fd,p.curryRight=cd,p.debounce=md,p.defaults=yy,p.defaultsDeep=by,p.defer=jv,p.delay=Nv,p.difference=Jh,p.differenceBy=Qh,p.differenceWith=ek,p.drop=nk,p.dropRight=tk,p.dropRightWhile=rk,p.dropWhile=ak,p.fill=ik,p.filter=lv,p.flatMap=dv,p.flatMapDeep=gv,p.flatMapDepth=fv,p.flatten=td,p.flattenDeep=sk,p.flattenDepth=lk,p.flip=Ov,p.flow=Rb,p.flowRight=Sb,p.fromPairs=ok,p.functions=Sy,p.functionsIn=Iy,p.groupBy=cv,p.initial=dk,p.intersection=gk,p.intersectionBy=fk,p.intersectionWith=ck,p.invert=Ny,p.invertBy=Oy,p.invokeMap=pv,p.iteratee=Fs,p.keyBy=hv,p.keys=ze,p.keysIn=fn,p.map=Va,p.mapKeys=xy,p.mapValues=By,p.matches=Ib,p.matchesProperty=jb,p.memoize=$a,p.merge=qy,p.mergeWith=wd,p.method=Nb,p.methodOf=Ob,p.mixin=Ks,p.negate=Ga,p.nthArg=xb,p.omit=Dy,p.omitBy=My,p.once=Pv,p.orderBy=kv,p.over=Bb,p.overArgs=xv,p.overEvery=qb,p.overSome=Db,p.partial=Ps,p.partialRight=pd,p.partition=vv,p.pick=Ly,p.pickBy=Ad,p.property=Pd,p.propertyOf=Mb,p.pull=kk,p.pullAll=ad,p.pullAllBy=vk,p.pullAllWith=yk,p.pullAt=bk,p.range=Lb,p.rangeRight=Fb,p.rearg=Bv,p.reject=Ev,p.remove=Ek,p.rest=qv,p.reverse=js,p.sampleSize=_v,p.set=Ky,p.setWith=Cy,p.shuffle=wv,p.slice=Tk,p.sortBy=Sv,p.sortedUniq=jk,p.sortedUniqBy=Nk,p.split=db,p.spread=Dv,p.tail=Ok,p.take=Pk,p.takeRight=xk,p.takeRightWhile=Bk,p.takeWhile=qk,p.tap=Xk,p.throttle=Mv,p.thru=Ca,p.toArray=bd,p.toPairs=Rd,p.toPairsIn=Sd,p.toPath=$b,p.toPlainObject=Td,p.transform=Vy,p.unary=Lv,p.union=Dk,p.unionBy=Mk,p.unionWith=Lk,p.uniq=Fk,p.uniqBy=Kk,p.uniqWith=Ck,p.unset=Hy,p.unzip=Ns,p.unzipWith=id,p.update=$y,p.updateWith=Gy,p.values=ar,p.valuesIn=Uy,p.without=Vk,p.words=Nd,p.wrap=Fv,p.xor=Hk,p.xorBy=$k,p.xorWith=Gk,p.zip=Uk,p.zipObject=Yk,p.zipObjectDeep=Wk,p.zipWith=zk,p.entries=Rd,p.entriesIn=Sd,p.extend=_d,p.extendWith=Wa,Ks(p,p),p.add=Ub,p.attempt=Od,p.camelCase=Xy,p.capitalize=Id,p.ceil=Yb,p.clamp=Yy,p.clone=Cv,p.cloneDeep=Hv,p.cloneDeepWith=$v,p.cloneWith=Vv,p.conformsTo=Gv,p.deburr=jd,p.defaultTo=Ab,p.divide=Wb,p.endsWith=Zy,p.eq=Kn,p.escape=Jy,p.escapeRegExp=Qy,p.every=sv,p.find=ov,p.findIndex=ed,p.findKey=Ey,p.findLast=uv,p.findLastIndex=nd,p.findLastKey=Ty,p.floor=zb,p.forEach=ld,p.forEachRight=od,p.forIn=_y,p.forInRight=wy,p.forOwn=Ay,p.forOwnRight=Ry,p.get=qs,p.gt=Uv,p.gte=Yv,p.has=jy,p.hasIn=Ds,p.head=rd,p.identity=cn,p.includes=mv,p.indexOf=uk,p.inRange=Wy,p.invoke=Py,p.isArguments=Mt,p.isArray=fe,p.isArrayBuffer=Wv,p.isArrayLike=gn,p.isArrayLikeObject=Ge,p.isBoolean=zv,p.isBuffer=At,p.isDate=Xv,p.isElement=Zv,p.isEmpty=Jv,p.isEqual=Qv,p.isEqualWith=ey,p.isError=xs,p.isFinite=ny,p.isFunction=ot,p.isInteger=hd,p.isLength=Ua,p.isMap=kd,p.isMatch=ty,p.isMatchWith=ry,p.isNaN=ay,p.isNative=iy,p.isNil=ly,p.isNull=sy,p.isNumber=vd,p.isObject=Le,p.isObjectLike=He,p.isPlainObject=Dr,p.isRegExp=Bs,p.isSafeInteger=oy,p.isSet=yd,p.isString=Ya,p.isSymbol=yn,p.isTypedArray=rr,p.isUndefined=uy,p.isWeakMap=dy,p.isWeakSet=gy,p.join=mk,p.kebabCase=eb,p.last=Pn,p.lastIndexOf=pk,p.lowerCase=nb,p.lowerFirst=tb,p.lt=fy,p.lte=cy,p.max=Xb,p.maxBy=Zb,p.mean=Jb,p.meanBy=Qb,p.min=e0,p.minBy=n0,p.stubArray=Vs,p.stubFalse=Hs,p.stubObject=Kb,p.stubString=Cb,p.stubTrue=Vb,p.multiply=t0,p.nth=hk,p.noConflict=Pb,p.noop=Cs,p.now=Ha,p.pad=rb,p.padEnd=ab,p.padStart=ib,p.parseInt=sb,p.random=zy,p.reduce=yv,p.reduceRight=bv,p.repeat=lb,p.replace=ob,p.result=Fy,p.round=r0,p.runInContext=j,p.sample=Tv,p.size=Av,p.snakeCase=ub,p.some=Rv,p.sortedIndex=_k,p.sortedIndexBy=wk,p.sortedIndexOf=Ak,p.sortedLastIndex=Rk,p.sortedLastIndexBy=Sk,p.sortedLastIndexOf=Ik,p.startCase=gb,p.startsWith=fb,p.subtract=a0,p.sum=i0,p.sumBy=s0,p.template=cb,p.times=Hb,p.toFinite=ut,p.toInteger=ce,p.toLength=Ed,p.toLower=mb,p.toNumber=xn,p.toSafeInteger=my,p.toString=Ae,p.toUpper=pb,p.trim=hb,p.trimEnd=kb,p.trimStart=vb,p.truncate=yb,p.unescape=bb,p.uniqueId=Gb,p.upperCase=Eb,p.upperFirst=Ms,p.each=ld,p.eachRight=od,p.first=rd,Ks(p,function(){var n={};return $n(p,function(t,l){Se.call(p.prototype,l)||(n[l]=t)}),n}(),{chain:!1}),p.VERSION=r,Sn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){p[n].placeholder=p}),Sn(["drop","take"],function(n,t){ye.prototype[n]=function(l){l=l===a?1:We(ce(l),0);var u=this.__filtered__&&!t?new ye(this):this.clone();return u.__filtered__?u.__takeCount__=tn(l,u.__takeCount__):u.__views__.push({size:tn(l,te),type:n+(u.__dir__<0?"Right":"")}),u},ye.prototype[n+"Right"]=function(l){return this.reverse()[n](l).reverse()}}),Sn(["filter","map","takeWhile"],function(n,t){var l=t+1,u=l==M||l==ne;ye.prototype[n]=function(f){var k=this.clone();return k.__iteratees__.push({iteratee:oe(f,3),type:l}),k.__filtered__=k.__filtered__||u,k}}),Sn(["head","last"],function(n,t){var l="take"+(t?"Right":"");ye.prototype[n]=function(){return this[l](1).value()[0]}}),Sn(["initial","tail"],function(n,t){var l="drop"+(t?"":"Right");ye.prototype[n]=function(){return this.__filtered__?new ye(this):this[l](1)}}),ye.prototype.compact=function(){return this.filter(cn)},ye.prototype.find=function(n){return this.filter(n).head()},ye.prototype.findLast=function(n){return this.reverse().find(n)},ye.prototype.invokeMap=pe(function(n,t){return typeof n=="function"?new ye(this):this.map(function(l){return Nr(l,n,t)})}),ye.prototype.reject=function(n){return this.filter(Ga(oe(n)))},ye.prototype.slice=function(n,t){n=ce(n);var l=this;return l.__filtered__&&(n>0||t<0)?new ye(l):(n<0?l=l.takeRight(-n):n&&(l=l.drop(n)),t!==a&&(t=ce(t),l=t<0?l.dropRight(-t):l.take(t-n)),l)},ye.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},ye.prototype.toArray=function(){return this.take(te)},$n(ye.prototype,function(n,t){var l=/^(?:filter|find|map|reject)|While$/.test(t),u=/^(?:head|last)$/.test(t),f=p[u?"take"+(t=="last"?"Right":""):t],k=u||/^find/.test(t);f&&(p.prototype[t]=function(){var b=this.__wrapped__,w=u?[1]:arguments,x=b instanceof ye,H=w[0],$=x||fe(b),U=function(ke){var be=f.apply(p,vt([ke],w));return u&&ee?be[0]:be};$&&l&&typeof H=="function"&&H.length!=1&&(x=$=!1);var ee=this.__chain__,se=!!this.__actions__.length,ue=k&&!ee,me=x&&!se;if(!k&&$){b=me?b:new ye(this);var de=n.apply(b,w);return de.__actions__.push({func:Ca,args:[U],thisArg:a}),new jn(de,ee)}return ue&&me?n.apply(this,w):(de=this.thru(U),ue?u?de.value()[0]:de.value():de)})}),Sn(["pop","push","shift","sort","splice","unshift"],function(n){var t=ca[n],l=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",u=/^(?:pop|shift)$/.test(n);p.prototype[n]=function(){var f=arguments;if(u&&!this.__chain__){var k=this.value();return t.apply(fe(k)?k:[],f)}return this[l](function(b){return t.apply(fe(b)?b:[],f)})}}),$n(ye.prototype,function(n,t){var l=p[t];if(l){var u=l.name+"";Se.call(Jt,u)||(Jt[u]=[]),Jt[u].push({name:t,func:l})}}),Jt[Ba(a,A).name]=[{name:"wrapper",func:a}],ye.prototype.clone=bp,ye.prototype.reverse=Ep,ye.prototype.value=Tp,p.prototype.at=Zk,p.prototype.chain=Jk,p.prototype.commit=Qk,p.prototype.next=ev,p.prototype.plant=tv,p.prototype.reverse=rv,p.prototype.toJSON=p.prototype.valueOf=p.prototype.value=av,p.prototype.first=p.prototype.head,_r&&(p.prototype[_r]=nv),p},zt=Qm();jt?((jt.exports=zt)._=zt,Fi._=zt):en._=zt}).call(gw)}(Gr,Gr.exports)),Gr.exports}fw();an(ta);const Yf=S.forwardRef((e,i)=>K.jsx(lr,{gap:"2",style:{display:"flex"},...e,ref:i}));Yf.displayName="FaktaGruppe";Yf.__docgenInfo={description:"",methods:[],displayName:"FaktaGruppe"};var tl={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Ng;function cw(){return Ng||(Ng=1,function(e){(function(){var i={}.hasOwnProperty;function a(){for(var o="",d=0;d<arguments.length;d++){var g=arguments[d];g&&(o=s(o,r.call(this,g)))}return o}function r(o){if(typeof o=="string"||typeof o=="number")return this&&this[o]||o;if(typeof o!="object")return"";if(Array.isArray(o))return a.apply(this,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var d="";for(var g in o)i.call(o,g)&&o[g]&&(d=s(d,this&&this[g]||g));return d}function s(o,d){return d?o?o+" "+d:o+d:o}e.exports?(a.default=a,e.exports=a):window.classNames=a})()}(tl)),tl.exports}var mw=cw();const pw=of(mw),hw="_boks_c3bfh_1",kw="_harBorderLeft_c3bfh_8",vw="_harBorderTop_c3bfh_12",yw={boks:hw,harBorderLeft:kw,harBorderTop:vw};pw.bind(yw);var rl={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Og;function bw(){return Og||(Og=1,function(e){(function(){var i={}.hasOwnProperty;function a(){for(var o="",d=0;d<arguments.length;d++){var g=arguments[d];g&&(o=s(o,r(g)))}return o}function r(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return a.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var d="";for(var g in o)i.call(o,g)&&o[g]&&(d=s(d,g));return d}function s(o,d){return d?o?o+" "+d:o+d:o}e.exports?(a.default=a,e.exports=a):window.classNames=a})()}(rl)),rl.exports}bw();function Ew(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Pg={exports:{}},Vr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xg;function Tw(){if(xg)return Vr;xg=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function a(r,s,o){var d=null;if(o!==void 0&&(d=""+o),s.key!==void 0&&(d=""+s.key),"key"in s){o={};for(var g in s)g!=="key"&&(o[g]=s[g])}else o=s;return s=o.ref,{$$typeof:e,type:r,key:d,ref:s!==void 0?s:null,props:o}}return Vr.Fragment=i,Vr.jsx=a,Vr.jsxs=a,Vr}var Bg;function _w(){return Bg||(Bg=1,Pg.exports=Tw()),Pg.exports}var ft=_w();const ww="_autocompleteSuggestion__substring_mf7v0_1",Aw="_autocompleteSuggestion__inner_mf7v0_4",Hr={autocompleteSuggestion__substring:ww,autocompleteSuggestion__inner:Aw,"autocompleteSuggestion--active":"_autocompleteSuggestion--active_mf7v0_12"};class Rw extends z.Component{constructor(i){super(i),this.state={value:i.value},this.onClick=this.onClick.bind(this),this.onMouseMove=this.onMouseMove.bind(this)}onClick(){const{onClick:i}=this.props,{value:a}=this.state;i(a)}onMouseMove(){const{setSuggestionIndex:i,index:a}=this.props;i(a)}render(){const{match:i,active:a,avoidBlur:r,id:s}=this.props,{value:o}=this.state.value,d=o.toLowerCase().startsWith(i.toLowerCase());return ft.jsx("li",{id:s,role:"option","aria-selected":a,onClick:this.onClick,onMouseMove:this.onMouseMove,onFocus:r,onMouseDown:r,onKeyDown:r,className:"autocompleteSuggestion typo-normal",children:d?ft.jsxs("span",{className:`${Hr.autocompleteSuggestion__inner} ${a?Hr["autocompleteSuggestion--active"]:""}`,children:[o.substring(0,i.length),ft.jsx("span",{className:Hr.autocompleteSuggestion__substring,children:o.substring(i.length)})]}):ft.jsx("span",{className:`${Hr.autocompleteSuggestion__inner} ${a?Hr["autocompleteSuggestion--active"]:""}`,children:o})})}}const Sw="_autocomplete_9dlnp_1",Iw="_autocomplete__suggestions_9dlnp_27",al={autocomplete:Sw,autocomplete__suggestions:Iw,"autocomplete__suggestions--hidden":"_autocomplete__suggestions--hidden_9dlnp_31"};class KR extends z.Component{input;inputRef;constructor(i){super(i),this.state={activeSuggestionIndex:-1,hasFocus:!1,shouldShowSuggestions:!0,setAriaActiveDescendant:!1,shouldBlur:!0,blurDelay:null},this.inputRef=a=>{this.input=a},this.onChange=this.onChange.bind(this),this.onBlur=this.onBlur.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.onFocus=this.onFocus.bind(this),this.setValue=this.setValue.bind(this),this.setSuggestionIndex=this.setSuggestionIndex.bind(this),this.avoidBlur=this.avoidBlur.bind(this),this.clearBlurDelay=this.clearBlurDelay.bind(this),this.onSearchButtonClick=this.onSearchButtonClick.bind(this)}componentWillUnmount(){const{blurDelay:i}=this.state;i&&(clearTimeout(i),this.setState({blurDelay:null}))}onChange(i){const{onChange:a}=this.props;this.setState({activeSuggestionIndex:-1,shouldShowSuggestions:!0}),a(i)}onSearchButtonClick(i){const{onSearchButtonClick:a}=this.props;i.preventDefault(),a&&a()}onKeyDown(i){const{shouldShowSuggestions:a}=this.state;let{activeSuggestionIndex:r}=this.state;const{suggestions:s}=this.props,o=r>-1;switch(this.setState({setAriaActiveDescendant:i.keyCode===38||i.keyCode===40}),i.keyCode){case 9:o&&a&&this.setValue(s[r]);break;case 13:o&&a?(i.preventDefault(),this.setValue(s[r])):a&&s.length===1?this.setValue(s[0]):this.setState({shouldShowSuggestions:!1});break;case 27:a&&s.length>0&&(i.preventDefault(),this.setState({shouldShowSuggestions:!1}));break;case 38:a&&(i.preventDefault(),r=r-1===-2?-1:r-1,this.setState({activeSuggestionIndex:r}));break;case 40:a&&(i.preventDefault(),r=r+1===s.length?s.length-1:r+1,this.setState({activeSuggestionIndex:r}));break}}onFocus(){this.setState({hasFocus:!0,activeSuggestionIndex:-1})}onBlur(){const i=setTimeout(()=>{const{shouldBlur:r}=this.state;r&&this.setState({hasFocus:!1})},10);this.setState({blurDelay:i});const{onBlur:a}=this.props;a&&a()}setSuggestionIndex(i){this.setState({activeSuggestionIndex:i}),this.clearBlurDelay()}setValue(i){this.setState({shouldShowSuggestions:!1,activeSuggestionIndex:-1},()=>{this.inputRef.focus()}),this.clearBlurDelay();const{onSelect:a}=this.props;a(i)}avoidBlur(){this.setState({shouldBlur:!1})}clearBlurDelay(){const{blurDelay:i}=this.state;i&&(clearTimeout(i),this.setState({blurDelay:null})),this.setState({shouldBlur:!0})}render(){const{suggestions:i,id:a,ariaLabel:r,placeholder:s,value:o,name:d,shouldFocusOnMount:g,isLoading:c}=this.props,{activeSuggestionIndex:m,setAriaActiveDescendant:h,hasFocus:y,shouldShowSuggestions:_}=this.state,T=y&&_&&i.length>0,P=h&&m>-1?`${a}-item-${m}`:void 0;return ft.jsxs("div",{className:`${al.autocomplete} autocomplete`,"aria-expanded":T,"aria-owns":`${a}-suggestions`,"aria-haspopup":"listbox",children:[ft.jsx(vl,{variant:"primary",id:a,name:d,"aria-label":r,"aria-autocomplete":"list","aria-controls":`${a}-suggestions`,"aria-activedescendant":P,placeholder:s,value:o,autoComplete:"off",onChange:this.onChange,onBlur:this.onBlur,onKeyDown:this.onKeyDown,onFocus:this.onFocus,ref:v=>{this.inputRef=v},className:"typo-normal",autoFocus:g,label:r,hideLabel:!0,children:ft.jsx(vl.Button,{loading:c,onClick:this.onSearchButtonClick})}),ft.jsx("ul",{id:`${a}-suggestions`,role:"listbox",className:T?al.autocomplete__suggestions:al["autocomplete__suggestions--hidden"],children:T&&i.map((v,E)=>ft.jsx(Rw,{id:`${a}-item-${E}`,index:E,value:v,match:o,active:E===m,onClick:this.setValue,setSuggestionIndex:this.setSuggestionIndex,avoidBlur:this.avoidBlur},v.key))})]})}}var Rl=function(e,i){return Rl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,r){a.__proto__=r}||function(a,r){for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(a[s]=r[s])},Rl(e,i)};function Vn(e,i){if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");Rl(e,i);function a(){this.constructor=e}e.prototype=i===null?Object.create(i):(a.prototype=i.prototype,new a)}var ie=function(){return ie=Object.assign||function(e){for(var i,a=1,r=arguments.length;a<r;a++){i=arguments[a];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e},ie.apply(this,arguments)};function bi(e,i){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)i.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]]);return a}function zn(e,i,a){if(arguments.length===2)for(var r=0,s=i.length,o;r<s;r++)(o||!(r in i))&&(o||(o=Array.prototype.slice.call(i,0,r)),o[r]=i[r]);return e.concat(o||Array.prototype.slice.call(i))}function Yn(e,i){var a=i&&i.cache?i.cache:qw,r=i&&i.serializer?i.serializer:xw,s=i&&i.strategy?i.strategy:Ow;return s(e,{cache:a,serializer:r})}function jw(e){return e==null||typeof e=="number"||typeof e=="boolean"}function Nw(e,i,a,r){var s=jw(r)?r:a(r),o=i.get(s);return typeof o>"u"&&(o=e.call(this,r),i.set(s,o)),o}function Wf(e,i,a){var r=Array.prototype.slice.call(arguments,3),s=a(r),o=i.get(s);return typeof o>"u"&&(o=e.apply(this,r),i.set(s,o)),o}function zf(e,i,a,r,s){return a.bind(i,e,r,s)}function Ow(e,i){var a=e.length===1?Nw:Wf;return zf(e,this,a,i.cache.create(),i.serializer)}function Pw(e,i){return zf(e,this,Wf,i.cache.create(),i.serializer)}var xw=function(){return JSON.stringify(arguments)},Bw=function(){function e(){this.cache=Object.create(null)}return e.prototype.get=function(i){return this.cache[i]},e.prototype.set=function(i,a){this.cache[i]=a},e}(),qw={create:function(){return new Bw}},Wn={variadic:Pw},Ee;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(Ee||(Ee={}));var Be;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(Be||(Be={}));var cr;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(cr||(cr={}));function qg(e){return e.type===Be.literal}function Dw(e){return e.type===Be.argument}function Xf(e){return e.type===Be.number}function Zf(e){return e.type===Be.date}function Jf(e){return e.type===Be.time}function Qf(e){return e.type===Be.select}function ec(e){return e.type===Be.plural}function Mw(e){return e.type===Be.pound}function nc(e){return e.type===Be.tag}function tc(e){return!!(e&&typeof e=="object"&&e.type===cr.number)}function Sl(e){return!!(e&&typeof e=="object"&&e.type===cr.dateTime)}var rc=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,Lw=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function Fw(e){var i={};return e.replace(Lw,function(a){var r=a.length;switch(a[0]){case"G":i.era=r===4?"long":r===5?"narrow":"short";break;case"y":i.year=r===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":i.month=["numeric","2-digit","short","long","narrow"][r-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":i.day=["numeric","2-digit"][r-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":i.weekday=r===4?"long":r===5?"narrow":"short";break;case"e":if(r<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");i.weekday=["short","long","narrow","short"][r-4];break;case"c":if(r<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");i.weekday=["short","long","narrow","short"][r-4];break;case"a":i.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":i.hourCycle="h12",i.hour=["numeric","2-digit"][r-1];break;case"H":i.hourCycle="h23",i.hour=["numeric","2-digit"][r-1];break;case"K":i.hourCycle="h11",i.hour=["numeric","2-digit"][r-1];break;case"k":i.hourCycle="h24",i.hour=["numeric","2-digit"][r-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":i.minute=["numeric","2-digit"][r-1];break;case"s":i.second=["numeric","2-digit"][r-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":i.timeZoneName=r<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),i}var Kw=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function Cw(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var i=e.split(Kw).filter(function(_){return _.length>0}),a=[],r=0,s=i;r<s.length;r++){var o=s[r],d=o.split("/");if(d.length===0)throw new Error("Invalid number skeleton");for(var g=d[0],c=d.slice(1),m=0,h=c;m<h.length;m++){var y=h[m];if(y.length===0)throw new Error("Invalid number skeleton")}a.push({stem:g,options:c})}return a}function Vw(e){return e.replace(/^(.*?)-/,"")}var Dg=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,ac=/^(@+)?(\+|#+)?[rs]?$/g,Hw=/(\*)(0+)|(#+)(0+)|(0+)/g,ic=/^(0+)$/;function Mg(e){var i={};return e[e.length-1]==="r"?i.roundingPriority="morePrecision":e[e.length-1]==="s"&&(i.roundingPriority="lessPrecision"),e.replace(ac,function(a,r,s){return typeof s!="string"?(i.minimumSignificantDigits=r.length,i.maximumSignificantDigits=r.length):s==="+"?i.minimumSignificantDigits=r.length:r[0]==="#"?i.maximumSignificantDigits=r.length:(i.minimumSignificantDigits=r.length,i.maximumSignificantDigits=r.length+(typeof s=="string"?s.length:0)),""}),i}function sc(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function $w(e){var i;if(e[0]==="E"&&e[1]==="E"?(i={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(i={notation:"scientific"},e=e.slice(1)),i){var a=e.slice(0,2);if(a==="+!"?(i.signDisplay="always",e=e.slice(2)):a==="+?"&&(i.signDisplay="exceptZero",e=e.slice(2)),!ic.test(e))throw new Error("Malformed concise eng/scientific notation");i.minimumIntegerDigits=e.length}return i}function Lg(e){var i={},a=sc(e);return a||i}function Gw(e){for(var i={},a=0,r=e;a<r.length;a++){var s=r[a];switch(s.stem){case"percent":case"%":i.style="percent";continue;case"%x100":i.style="percent",i.scale=100;continue;case"currency":i.style="currency",i.currency=s.options[0];continue;case"group-off":case",_":i.useGrouping=!1;continue;case"precision-integer":case".":i.maximumFractionDigits=0;continue;case"measure-unit":case"unit":i.style="unit",i.unit=Vw(s.options[0]);continue;case"compact-short":case"K":i.notation="compact",i.compactDisplay="short";continue;case"compact-long":case"KK":i.notation="compact",i.compactDisplay="long";continue;case"scientific":i=ie(ie(ie({},i),{notation:"scientific"}),s.options.reduce(function(c,m){return ie(ie({},c),Lg(m))},{}));continue;case"engineering":i=ie(ie(ie({},i),{notation:"engineering"}),s.options.reduce(function(c,m){return ie(ie({},c),Lg(m))},{}));continue;case"notation-simple":i.notation="standard";continue;case"unit-width-narrow":i.currencyDisplay="narrowSymbol",i.unitDisplay="narrow";continue;case"unit-width-short":i.currencyDisplay="code",i.unitDisplay="short";continue;case"unit-width-full-name":i.currencyDisplay="name",i.unitDisplay="long";continue;case"unit-width-iso-code":i.currencyDisplay="symbol";continue;case"scale":i.scale=parseFloat(s.options[0]);continue;case"rounding-mode-floor":i.roundingMode="floor";continue;case"rounding-mode-ceiling":i.roundingMode="ceil";continue;case"rounding-mode-down":i.roundingMode="trunc";continue;case"rounding-mode-up":i.roundingMode="expand";continue;case"rounding-mode-half-even":i.roundingMode="halfEven";continue;case"rounding-mode-half-down":i.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":i.roundingMode="halfExpand";continue;case"integer-width":if(s.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");s.options[0].replace(Hw,function(c,m,h,y,_,T){if(m)i.minimumIntegerDigits=h.length;else{if(y&&_)throw new Error("We currently do not support maximum integer digits");if(T)throw new Error("We currently do not support exact integer digits")}return""});continue}if(ic.test(s.stem)){i.minimumIntegerDigits=s.stem.length;continue}if(Dg.test(s.stem)){if(s.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");s.stem.replace(Dg,function(c,m,h,y,_,T){return h==="*"?i.minimumFractionDigits=m.length:y&&y[0]==="#"?i.maximumFractionDigits=y.length:_&&T?(i.minimumFractionDigits=_.length,i.maximumFractionDigits=_.length+T.length):(i.minimumFractionDigits=m.length,i.maximumFractionDigits=m.length),""});var o=s.options[0];o==="w"?i=ie(ie({},i),{trailingZeroDisplay:"stripIfInteger"}):o&&(i=ie(ie({},i),Mg(o)));continue}if(ac.test(s.stem)){i=ie(ie({},i),Mg(s.stem));continue}var d=sc(s.stem);d&&(i=ie(ie({},i),d));var g=$w(s.stem);g&&(i=ie(ie({},i),g))}return i}var Ja={"001":["H","h"],419:["h","H","hB","hb"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["h","H","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["h","H","hB","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["h","H","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["h","H","hB","hb"],CU:["h","H","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["h","H","hB","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["h","H","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["h","H","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["h","H","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["h","H","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["h","H","hB","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["h","H","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["h","H","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["h","H","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"en-HK":["h","hb","H","hB"],"en-IL":["H","h","hb","hB"],"en-MY":["h","hb","H","hB"],"es-BR":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function Uw(e,i){for(var a="",r=0;r<e.length;r++){var s=e.charAt(r);if(s==="j"){for(var o=0;r+1<e.length&&e.charAt(r+1)===s;)o++,r++;var d=1+(o&1),g=o<2?1:3+(o>>1),c="a",m=Yw(i);for((m=="H"||m=="k")&&(g=0);g-- >0;)a+=c;for(;d-- >0;)a=m+a}else s==="J"?a+="H":a+=s}return a}function Yw(e){var i=e.hourCycle;if(i===void 0&&e.hourCycles&&e.hourCycles.length&&(i=e.hourCycles[0]),i)switch(i){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var a=e.language,r;a!=="root"&&(r=e.maximize().region);var s=Ja[r||""]||Ja[a||""]||Ja["".concat(a,"-001")]||Ja["001"];return s[0]}var il,Ww=new RegExp("^".concat(rc.source,"*")),zw=new RegExp("".concat(rc.source,"*$"));function Te(e,i){return{start:e,end:i}}var Xw=!!String.prototype.startsWith&&"_a".startsWith("a",1),Zw=!!String.fromCodePoint,Jw=!!Object.fromEntries,Qw=!!String.prototype.codePointAt,eA=!!String.prototype.trimStart,nA=!!String.prototype.trimEnd,tA=!!Number.isSafeInteger,rA=tA?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},Il=!0;try{var aA=oc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Il=((il=aA.exec("a"))===null||il===void 0?void 0:il[0])==="a"}catch{Il=!1}var Fg=Xw?function(e,i,a){return e.startsWith(i,a)}:function(e,i,a){return e.slice(a,a+i.length)===i},jl=Zw?String.fromCodePoint:function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];for(var a="",r=e.length,s=0,o;r>s;){if(o=e[s++],o>1114111)throw RangeError(o+" is not a valid code point");a+=o<65536?String.fromCharCode(o):String.fromCharCode(((o-=65536)>>10)+55296,o%1024+56320)}return a},Kg=Jw?Object.fromEntries:function(e){for(var i={},a=0,r=e;a<r.length;a++){var s=r[a],o=s[0],d=s[1];i[o]=d}return i},lc=Qw?function(e,i){return e.codePointAt(i)}:function(e,i){var a=e.length;if(!(i<0||i>=a)){var r=e.charCodeAt(i),s;return r<55296||r>56319||i+1===a||(s=e.charCodeAt(i+1))<56320||s>57343?r:(r-55296<<10)+(s-56320)+65536}},iA=eA?function(e){return e.trimStart()}:function(e){return e.replace(Ww,"")},sA=nA?function(e){return e.trimEnd()}:function(e){return e.replace(zw,"")};function oc(e,i){return new RegExp(e,i)}var Nl;if(Il){var Cg=oc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Nl=function(e,i){var a;Cg.lastIndex=i;var r=Cg.exec(e);return(a=r[1])!==null&&a!==void 0?a:""}}else Nl=function(e,i){for(var a=[];;){var r=lc(e,i);if(r===void 0||uc(r)||dA(r))break;a.push(r),i+=r>=65536?2:1}return jl.apply(void 0,a)};var lA=function(){function e(i,a){a===void 0&&(a={}),this.message=i,this.position={offset:0,line:1,column:1},this.ignoreTag=!!a.ignoreTag,this.locale=a.locale,this.requiresOtherClause=!!a.requiresOtherClause,this.shouldParseSkeletons=!!a.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(i,a,r){for(var s=[];!this.isEOF();){var o=this.char();if(o===123){var d=this.parseArgument(i,r);if(d.err)return d;s.push(d.val)}else{if(o===125&&i>0)break;if(o===35&&(a==="plural"||a==="selectordinal")){var g=this.clonePosition();this.bump(),s.push({type:Be.pound,location:Te(g,this.clonePosition())})}else if(o===60&&!this.ignoreTag&&this.peek()===47){if(r)break;return this.error(Ee.UNMATCHED_CLOSING_TAG,Te(this.clonePosition(),this.clonePosition()))}else if(o===60&&!this.ignoreTag&&Ol(this.peek()||0)){var d=this.parseTag(i,a);if(d.err)return d;s.push(d.val)}else{var d=this.parseLiteral(i,a);if(d.err)return d;s.push(d.val)}}}return{val:s,err:null}},e.prototype.parseTag=function(i,a){var r=this.clonePosition();this.bump();var s=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:Be.literal,value:"<".concat(s,"/>"),location:Te(r,this.clonePosition())},err:null};if(this.bumpIf(">")){var o=this.parseMessage(i+1,a,!0);if(o.err)return o;var d=o.val,g=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!Ol(this.char()))return this.error(Ee.INVALID_TAG,Te(g,this.clonePosition()));var c=this.clonePosition(),m=this.parseTagName();return s!==m?this.error(Ee.UNMATCHED_CLOSING_TAG,Te(c,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:Be.tag,value:s,children:d,location:Te(r,this.clonePosition())},err:null}:this.error(Ee.INVALID_TAG,Te(g,this.clonePosition())))}else return this.error(Ee.UNCLOSED_TAG,Te(r,this.clonePosition()))}else return this.error(Ee.INVALID_TAG,Te(r,this.clonePosition()))},e.prototype.parseTagName=function(){var i=this.offset();for(this.bump();!this.isEOF()&&uA(this.char());)this.bump();return this.message.slice(i,this.offset())},e.prototype.parseLiteral=function(i,a){for(var r=this.clonePosition(),s="";;){var o=this.tryParseQuote(a);if(o){s+=o;continue}var d=this.tryParseUnquoted(i,a);if(d){s+=d;continue}var g=this.tryParseLeftAngleBracket();if(g){s+=g;continue}break}var c=Te(r,this.clonePosition());return{val:{type:Be.literal,value:s,location:c},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!oA(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(i){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(i==="plural"||i==="selectordinal")break;return null;default:return null}this.bump();var a=[this.char()];for(this.bump();!this.isEOF();){var r=this.char();if(r===39)if(this.peek()===39)a.push(39),this.bump();else{this.bump();break}else a.push(r);this.bump()}return jl.apply(void 0,a)},e.prototype.tryParseUnquoted=function(i,a){if(this.isEOF())return null;var r=this.char();return r===60||r===123||r===35&&(a==="plural"||a==="selectordinal")||r===125&&i>0?null:(this.bump(),jl(r))},e.prototype.parseArgument=function(i,a){var r=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(Ee.EXPECT_ARGUMENT_CLOSING_BRACE,Te(r,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(Ee.EMPTY_ARGUMENT,Te(r,this.clonePosition()));var s=this.parseIdentifierIfPossible().value;if(!s)return this.error(Ee.MALFORMED_ARGUMENT,Te(r,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(Ee.EXPECT_ARGUMENT_CLOSING_BRACE,Te(r,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:Be.argument,value:s,location:Te(r,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(Ee.EXPECT_ARGUMENT_CLOSING_BRACE,Te(r,this.clonePosition())):this.parseArgumentOptions(i,a,s,r);default:return this.error(Ee.MALFORMED_ARGUMENT,Te(r,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var i=this.clonePosition(),a=this.offset(),r=Nl(this.message,a),s=a+r.length;this.bumpTo(s);var o=this.clonePosition(),d=Te(i,o);return{value:r,location:d}},e.prototype.parseArgumentOptions=function(i,a,r,s){var o,d=this.clonePosition(),g=this.parseIdentifierIfPossible().value,c=this.clonePosition();switch(g){case"":return this.error(Ee.EXPECT_ARGUMENT_TYPE,Te(d,c));case"number":case"date":case"time":{this.bumpSpace();var m=null;if(this.bumpIf(",")){this.bumpSpace();var h=this.clonePosition(),y=this.parseSimpleArgStyleIfPossible();if(y.err)return y;var _=sA(y.val);if(_.length===0)return this.error(Ee.EXPECT_ARGUMENT_STYLE,Te(this.clonePosition(),this.clonePosition()));var T=Te(h,this.clonePosition());m={style:_,styleLocation:T}}var P=this.tryParseArgumentClose(s);if(P.err)return P;var v=Te(s,this.clonePosition());if(m&&Fg(m?.style,"::",0)){var E=iA(m.style.slice(2));if(g==="number"){var y=this.parseNumberSkeletonFromString(E,m.styleLocation);return y.err?y:{val:{type:Be.number,value:r,location:v,style:y.val},err:null}}else{if(E.length===0)return this.error(Ee.EXPECT_DATE_TIME_SKELETON,v);var A=E;this.locale&&(A=Uw(E,this.locale));var _={type:cr.dateTime,pattern:A,location:m.styleLocation,parsedOptions:this.shouldParseSkeletons?Fw(A):{}},B=g==="date"?Be.date:Be.time;return{val:{type:B,value:r,location:v,style:_},err:null}}}return{val:{type:g==="number"?Be.number:g==="date"?Be.date:Be.time,value:r,location:v,style:(o=m?.style)!==null&&o!==void 0?o:null},err:null}}case"plural":case"selectordinal":case"select":{var R=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(Ee.EXPECT_SELECT_ARGUMENT_OPTIONS,Te(R,ie({},R)));this.bumpSpace();var V=this.parseIdentifierIfPossible(),O=0;if(g!=="select"&&V.value==="offset"){if(!this.bumpIf(":"))return this.error(Ee.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Te(this.clonePosition(),this.clonePosition()));this.bumpSpace();var y=this.tryParseDecimalInteger(Ee.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Ee.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(y.err)return y;this.bumpSpace(),V=this.parseIdentifierIfPossible(),O=y.val}var D=this.tryParsePluralOrSelectOptions(i,g,a,V);if(D.err)return D;var P=this.tryParseArgumentClose(s);if(P.err)return P;var N=Te(s,this.clonePosition());return g==="select"?{val:{type:Be.select,value:r,options:Kg(D.val),location:N},err:null}:{val:{type:Be.plural,value:r,options:Kg(D.val),offset:O,pluralType:g==="plural"?"cardinal":"ordinal",location:N},err:null}}default:return this.error(Ee.INVALID_ARGUMENT_TYPE,Te(d,c))}},e.prototype.tryParseArgumentClose=function(i){return this.isEOF()||this.char()!==125?this.error(Ee.EXPECT_ARGUMENT_CLOSING_BRACE,Te(i,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var i=0,a=this.clonePosition();!this.isEOF();){var r=this.char();switch(r){case 39:{this.bump();var s=this.clonePosition();if(!this.bumpUntil("'"))return this.error(Ee.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,Te(s,this.clonePosition()));this.bump();break}case 123:{i+=1,this.bump();break}case 125:{if(i>0)i-=1;else return{val:this.message.slice(a.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(a.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(i,a){var r=[];try{r=Cw(i)}catch{return this.error(Ee.INVALID_NUMBER_SKELETON,a)}return{val:{type:cr.number,tokens:r,location:a,parsedOptions:this.shouldParseSkeletons?Gw(r):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(i,a,r,s){for(var o,d=!1,g=[],c=new Set,m=s.value,h=s.location;;){if(m.length===0){var y=this.clonePosition();if(a!=="select"&&this.bumpIf("=")){var _=this.tryParseDecimalInteger(Ee.EXPECT_PLURAL_ARGUMENT_SELECTOR,Ee.INVALID_PLURAL_ARGUMENT_SELECTOR);if(_.err)return _;h=Te(y,this.clonePosition()),m=this.message.slice(y.offset,this.offset())}else break}if(c.has(m))return this.error(a==="select"?Ee.DUPLICATE_SELECT_ARGUMENT_SELECTOR:Ee.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,h);m==="other"&&(d=!0),this.bumpSpace();var T=this.clonePosition();if(!this.bumpIf("{"))return this.error(a==="select"?Ee.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:Ee.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,Te(this.clonePosition(),this.clonePosition()));var P=this.parseMessage(i+1,a,r);if(P.err)return P;var v=this.tryParseArgumentClose(T);if(v.err)return v;g.push([m,{value:P.val,location:Te(T,this.clonePosition())}]),c.add(m),this.bumpSpace(),o=this.parseIdentifierIfPossible(),m=o.value,h=o.location}return g.length===0?this.error(a==="select"?Ee.EXPECT_SELECT_ARGUMENT_SELECTOR:Ee.EXPECT_PLURAL_ARGUMENT_SELECTOR,Te(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!d?this.error(Ee.MISSING_OTHER_CLAUSE,Te(this.clonePosition(),this.clonePosition())):{val:g,err:null}},e.prototype.tryParseDecimalInteger=function(i,a){var r=1,s=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(r=-1);for(var o=!1,d=0;!this.isEOF();){var g=this.char();if(g>=48&&g<=57)o=!0,d=d*10+(g-48),this.bump();else break}var c=Te(s,this.clonePosition());return o?(d*=r,rA(d)?{val:d,err:null}:this.error(a,c)):this.error(i,c)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var i=this.position.offset;if(i>=this.message.length)throw Error("out of bound");var a=lc(this.message,i);if(a===void 0)throw Error("Offset ".concat(i," is at invalid UTF-16 code unit boundary"));return a},e.prototype.error=function(i,a){return{val:null,err:{kind:i,message:this.message,location:a}}},e.prototype.bump=function(){if(!this.isEOF()){var i=this.char();i===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=i<65536?1:2)}},e.prototype.bumpIf=function(i){if(Fg(this.message,i,this.offset())){for(var a=0;a<i.length;a++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(i){var a=this.offset(),r=this.message.indexOf(i,a);return r>=0?(this.bumpTo(r),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(i){if(this.offset()>i)throw Error("targetOffset ".concat(i," must be greater than or equal to the current offset ").concat(this.offset()));for(i=Math.min(i,this.message.length);;){var a=this.offset();if(a===i)break;if(a>i)throw Error("targetOffset ".concat(i," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&uc(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var i=this.char(),a=this.offset(),r=this.message.charCodeAt(a+(i>=65536?2:1));return r??null},e}();function Ol(e){return e>=97&&e<=122||e>=65&&e<=90}function oA(e){return Ol(e)||e===47}function uA(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function uc(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function dA(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function Pl(e){e.forEach(function(i){if(delete i.location,Qf(i)||ec(i))for(var a in i.options)delete i.options[a].location,Pl(i.options[a].value);else Xf(i)&&tc(i.style)||(Zf(i)||Jf(i))&&Sl(i.style)?delete i.style.location:nc(i)&&Pl(i.children)})}function gA(e,i){i===void 0&&(i={}),i=ie({shouldParseSkeletons:!0,requiresOtherClause:!0},i);var a=new lA(e,i).parse();if(a.err){var r=SyntaxError(Ee[a.err.kind]);throw r.location=a.err.location,r.originalMessage=a.err.message,r}return i?.captureLocation||Pl(a.val),a.val}var Jn;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(Jn||(Jn={}));var It=function(e){Vn(i,e);function i(a,r,s){var o=e.call(this,a)||this;return o.code=r,o.originalMessage=s,o}return i.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},i}(Error),Vg=function(e){Vn(i,e);function i(a,r,s,o){return e.call(this,'Invalid values for "'.concat(a,'": "').concat(r,'". Options are "').concat(Object.keys(s).join('", "'),'"'),Jn.INVALID_VALUE,o)||this}return i}(It),fA=function(e){Vn(i,e);function i(a,r,s){return e.call(this,'Value for "'.concat(a,'" must be of type ').concat(r),Jn.INVALID_VALUE,s)||this}return i}(It),cA=function(e){Vn(i,e);function i(a,r){return e.call(this,'The intl string context variable "'.concat(a,'" was not provided to the string "').concat(r,'"'),Jn.MISSING_VALUE,r)||this}return i}(It),un;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(un||(un={}));function mA(e){return e.length<2?e:e.reduce(function(i,a){var r=i[i.length-1];return!r||r.type!==un.literal||a.type!==un.literal?i.push(a):r.value+=a.value,i},[])}function dc(e){return typeof e=="function"}function ai(e,i,a,r,s,o,d){if(e.length===1&&qg(e[0]))return[{type:un.literal,value:e[0].value}];for(var g=[],c=0,m=e;c<m.length;c++){var h=m[c];if(qg(h)){g.push({type:un.literal,value:h.value});continue}if(Mw(h)){typeof o=="number"&&g.push({type:un.literal,value:a.getNumberFormat(i).format(o)});continue}var y=h.value;if(!(s&&y in s))throw new cA(y,d);var _=s[y];if(Dw(h)){(!_||typeof _=="string"||typeof _=="number")&&(_=typeof _=="string"||typeof _=="number"?String(_):""),g.push({type:typeof _=="string"?un.literal:un.object,value:_});continue}if(Zf(h)){var T=typeof h.style=="string"?r.date[h.style]:Sl(h.style)?h.style.parsedOptions:void 0;g.push({type:un.literal,value:a.getDateTimeFormat(i,T).format(_)});continue}if(Jf(h)){var T=typeof h.style=="string"?r.time[h.style]:Sl(h.style)?h.style.parsedOptions:r.time.medium;g.push({type:un.literal,value:a.getDateTimeFormat(i,T).format(_)});continue}if(Xf(h)){var T=typeof h.style=="string"?r.number[h.style]:tc(h.style)?h.style.parsedOptions:void 0;T&&T.scale&&(_=_*(T.scale||1)),g.push({type:un.literal,value:a.getNumberFormat(i,T).format(_)});continue}if(nc(h)){var P=h.children,v=h.value,E=s[v];if(!dc(E))throw new fA(v,"function",d);var A=ai(P,i,a,r,s,o),B=E(A.map(function(O){return O.value}));Array.isArray(B)||(B=[B]),g.push.apply(g,B.map(function(O){return{type:typeof O=="string"?un.literal:un.object,value:O}}))}if(Qf(h)){var R=h.options[_]||h.options.other;if(!R)throw new Vg(h.value,_,Object.keys(h.options),d);g.push.apply(g,ai(R.value,i,a,r,s));continue}if(ec(h)){var R=h.options["=".concat(_)];if(!R){if(!Intl.PluralRules)throw new It(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,Jn.MISSING_INTL_API,d);var V=a.getPluralRules(i,{type:h.pluralType}).select(_-(h.offset||0));R=h.options[V]||h.options.other}if(!R)throw new Vg(h.value,_,Object.keys(h.options),d);g.push.apply(g,ai(R.value,i,a,r,s,_-(h.offset||0)));continue}}return mA(g)}function pA(e,i){return i?ie(ie(ie({},e||{}),i||{}),Object.keys(e).reduce(function(a,r){return a[r]=ie(ie({},e[r]),i[r]||{}),a},{})):e}function hA(e,i){return i?Object.keys(e).reduce(function(a,r){return a[r]=pA(e[r],i[r]),a},ie({},e)):e}function sl(e){return{create:function(){return{get:function(i){return e[i]},set:function(i,a){e[i]=a}}}}}function kA(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:Yn(function(){for(var i,a=[],r=0;r<arguments.length;r++)a[r]=arguments[r];return new((i=Intl.NumberFormat).bind.apply(i,zn([void 0],a,!1)))},{cache:sl(e.number),strategy:Wn.variadic}),getDateTimeFormat:Yn(function(){for(var i,a=[],r=0;r<arguments.length;r++)a[r]=arguments[r];return new((i=Intl.DateTimeFormat).bind.apply(i,zn([void 0],a,!1)))},{cache:sl(e.dateTime),strategy:Wn.variadic}),getPluralRules:Yn(function(){for(var i,a=[],r=0;r<arguments.length;r++)a[r]=arguments[r];return new((i=Intl.PluralRules).bind.apply(i,zn([void 0],a,!1)))},{cache:sl(e.pluralRules),strategy:Wn.variadic})}}var gc=function(){function e(i,a,r,s){a===void 0&&(a=e.defaultLocale);var o=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(c){var m=o.formatToParts(c);if(m.length===1)return m[0].value;var h=m.reduce(function(y,_){return!y.length||_.type!==un.literal||typeof y[y.length-1]!="string"?y.push(_.value):y[y.length-1]+=_.value,y},[]);return h.length<=1?h[0]||"":h},this.formatToParts=function(c){return ai(o.ast,o.locales,o.formatters,o.formats,c,void 0,o.message)},this.resolvedOptions=function(){var c;return{locale:((c=o.resolvedLocale)===null||c===void 0?void 0:c.toString())||Intl.NumberFormat.supportedLocalesOf(o.locales)[0]}},this.getAst=function(){return o.ast},this.locales=a,this.resolvedLocale=e.resolveLocale(a),typeof i=="string"){if(this.message=i,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var d=s||{};d.formatters;var g=bi(d,["formatters"]);this.ast=e.__parse(i,ie(ie({},g),{locale:this.resolvedLocale}))}else this.ast=i;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=hA(e.formats,r),this.formatters=s&&s.formatters||kA(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(i){if(!(typeof Intl.Locale>"u")){var a=Intl.NumberFormat.supportedLocalesOf(i);return a.length>0?new Intl.Locale(a[0]):new Intl.Locale(typeof i=="string"?i:i[0])}},e.__parse=gA,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}(),Ht;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(Ht||(Ht={}));var ra=function(e){Vn(i,e);function i(a,r,s){var o=this,d=s?s instanceof Error?s:new Error(String(s)):void 0;return o=e.call(this,"[@formatjs/intl Error ".concat(a,"] ").concat(r,`
`).concat(d?`
`.concat(d.message,`
`).concat(d.stack):""))||this,o.code=a,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(o,i),o}return i}(Error),vA=function(e){Vn(i,e);function i(a,r){return e.call(this,Ht.UNSUPPORTED_FORMATTER,a,r)||this}return i}(ra),yA=function(e){Vn(i,e);function i(a,r){return e.call(this,Ht.INVALID_CONFIG,a,r)||this}return i}(ra),Hg=function(e){Vn(i,e);function i(a,r){return e.call(this,Ht.MISSING_DATA,a,r)||this}return i}(ra),Dn=function(e){Vn(i,e);function i(a,r,s){var o=e.call(this,Ht.FORMAT_ERROR,"".concat(a,`
Locale: `).concat(r,`
`),s)||this;return o.locale=r,o}return i}(ra),ll=function(e){Vn(i,e);function i(a,r,s,o){var d=e.call(this,"".concat(a,`
MessageID: `).concat(s?.id,`
Default Message: `).concat(s?.defaultMessage,`
Description: `).concat(s?.description,`
`),r,o)||this;return d.descriptor=s,d.locale=r,d}return i}(Dn),bA=function(e){Vn(i,e);function i(a,r){var s=e.call(this,Ht.MISSING_TRANSLATION,'Missing message: "'.concat(a.id,'" for locale "').concat(r,'", using ').concat(a.defaultMessage?"default message (".concat(typeof a.defaultMessage=="string"?a.defaultMessage:a.defaultMessage.map(function(o){var d;return(d=o.value)!==null&&d!==void 0?d:JSON.stringify(o)}).join(),")"):"id"," as fallback."))||this;return s.descriptor=a,s}return i}(ra);function EA(e,i,a){if(a===void 0&&(a=Error),!e)throw new a(i)}function kr(e,i,a){return a===void 0&&(a={}),i.reduce(function(r,s){return s in e?r[s]=e[s]:s in a&&(r[s]=a[s]),r},{})}var TA=function(e){},_A=function(e){},fc={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:TA,onWarn:_A};function cc(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function Lt(e){return{create:function(){return{get:function(i){return e[i]},set:function(i,a){e[i]=a}}}}}function wA(e){e===void 0&&(e=cc());var i=Intl.RelativeTimeFormat,a=Intl.ListFormat,r=Intl.DisplayNames,s=Yn(function(){for(var g,c=[],m=0;m<arguments.length;m++)c[m]=arguments[m];return new((g=Intl.DateTimeFormat).bind.apply(g,zn([void 0],c,!1)))},{cache:Lt(e.dateTime),strategy:Wn.variadic}),o=Yn(function(){for(var g,c=[],m=0;m<arguments.length;m++)c[m]=arguments[m];return new((g=Intl.NumberFormat).bind.apply(g,zn([void 0],c,!1)))},{cache:Lt(e.number),strategy:Wn.variadic}),d=Yn(function(){for(var g,c=[],m=0;m<arguments.length;m++)c[m]=arguments[m];return new((g=Intl.PluralRules).bind.apply(g,zn([void 0],c,!1)))},{cache:Lt(e.pluralRules),strategy:Wn.variadic});return{getDateTimeFormat:s,getNumberFormat:o,getMessageFormat:Yn(function(g,c,m,h){return new gc(g,c,m,ie({formatters:{getNumberFormat:o,getDateTimeFormat:s,getPluralRules:d}},h||{}))},{cache:Lt(e.message),strategy:Wn.variadic}),getRelativeTimeFormat:Yn(function(){for(var g=[],c=0;c<arguments.length;c++)g[c]=arguments[c];return new(i.bind.apply(i,zn([void 0],g,!1)))},{cache:Lt(e.relativeTime),strategy:Wn.variadic}),getPluralRules:d,getListFormat:Yn(function(){for(var g=[],c=0;c<arguments.length;c++)g[c]=arguments[c];return new(a.bind.apply(a,zn([void 0],g,!1)))},{cache:Lt(e.list),strategy:Wn.variadic}),getDisplayNames:Yn(function(){for(var g=[],c=0;c<arguments.length;c++)g[c]=arguments[c];return new(r.bind.apply(r,zn([void 0],g,!1)))},{cache:Lt(e.displayNames),strategy:Wn.variadic})}}function no(e,i,a,r){var s=e&&e[i],o;if(s&&(o=s[a]),o)return o;r(new vA("No ".concat(i," format named: ").concat(a)))}function Qa(e,i){return Object.keys(e).reduce(function(a,r){return a[r]=ie({timeZone:i},e[r]),a},{})}function $g(e,i){var a=Object.keys(ie(ie({},e),i));return a.reduce(function(r,s){return r[s]=ie(ie({},e[s]||{}),i[s]||{}),r},{})}function Gg(e,i){if(!i)return e;var a=gc.formats;return ie(ie(ie({},a),e),{date:$g(Qa(a.date,i),Qa(e.date||{},i)),time:$g(Qa(a.time,i),Qa(e.time||{},i))})}var xl=function(e,i,a,r,s){var o=e.locale,d=e.formats,g=e.messages,c=e.defaultLocale,m=e.defaultFormats,h=e.fallbackOnEmptyString,y=e.onError,_=e.timeZone,T=e.defaultRichTextElements;a===void 0&&(a={id:""});var P=a.id,v=a.defaultMessage;EA(!!P,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var E=String(P),A=g&&Object.prototype.hasOwnProperty.call(g,E)&&g[E];if(Array.isArray(A)&&A.length===1&&A[0].type===Be.literal)return A[0].value;if(!r&&A&&typeof A=="string"&&!T)return A.replace(/'\{(.*?)\}'/gi,"{$1}");if(r=ie(ie({},T),r||{}),d=Gg(d,_),m=Gg(m,_),!A){if(h===!1&&A==="")return A;if((!v||o&&o.toLowerCase()!==c.toLowerCase())&&y(new bA(a,o)),v)try{var B=i.getMessageFormat(v,c,m,s);return B.format(r)}catch(R){return y(new ll('Error formatting default message for: "'.concat(E,'", rendering default message verbatim'),o,a,R)),typeof v=="string"?v:E}return E}try{var B=i.getMessageFormat(A,o,d,ie({formatters:i},s||{}));return B.format(r)}catch(R){y(new ll('Error formatting message: "'.concat(E,'", using ').concat(v?"default message":"id"," as fallback."),o,a,R))}if(v)try{var B=i.getMessageFormat(v,c,m,s);return B.format(r)}catch(R){y(new ll('Error formatting the default message for: "'.concat(E,'", rendering message verbatim'),o,a,R))}return typeof A=="string"?A:typeof v=="string"?v:E},AA=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function aa(e,i,a,r){var s=e.locale,o=e.formats,d=e.onError,g=e.timeZone;r===void 0&&(r={});var c=r.format,m=ie(ie({},g&&{timeZone:g}),c&&no(o,i,c,d)),h=kr(r,AA,m);return i==="time"&&!h.hour&&!h.minute&&!h.second&&!h.timeStyle&&!h.dateStyle&&(h=ie(ie({},h),{hour:"numeric",minute:"numeric"})),a(s,h)}function RA(e,i){for(var a=[],r=2;r<arguments.length;r++)a[r-2]=arguments[r];var s=a[0],o=a[1],d=o===void 0?{}:o,g=typeof s=="string"?new Date(s||0):s;try{return aa(e,"date",i,d).format(g)}catch(c){e.onError(new Dn("Error formatting date.",e.locale,c))}return String(g)}function SA(e,i){for(var a=[],r=2;r<arguments.length;r++)a[r-2]=arguments[r];var s=a[0],o=a[1],d=o===void 0?{}:o,g=typeof s=="string"?new Date(s||0):s;try{return aa(e,"time",i,d).format(g)}catch(c){e.onError(new Dn("Error formatting time.",e.locale,c))}return String(g)}function IA(e,i){for(var a=[],r=2;r<arguments.length;r++)a[r-2]=arguments[r];var s=a[0],o=a[1],d=a[2],g=d===void 0?{}:d,c=typeof s=="string"?new Date(s||0):s,m=typeof o=="string"?new Date(o||0):o;try{return aa(e,"dateTimeRange",i,g).formatRange(c,m)}catch(h){e.onError(new Dn("Error formatting date time range.",e.locale,h))}return String(c)}function jA(e,i){for(var a=[],r=2;r<arguments.length;r++)a[r-2]=arguments[r];var s=a[0],o=a[1],d=o===void 0?{}:o,g=typeof s=="string"?new Date(s||0):s;try{return aa(e,"date",i,d).formatToParts(g)}catch(c){e.onError(new Dn("Error formatting date.",e.locale,c))}return[]}function NA(e,i){for(var a=[],r=2;r<arguments.length;r++)a[r-2]=arguments[r];var s=a[0],o=a[1],d=o===void 0?{}:o,g=typeof s=="string"?new Date(s||0):s;try{return aa(e,"time",i,d).formatToParts(g)}catch(c){e.onError(new Dn("Error formatting time.",e.locale,c))}return[]}var OA=["style","type","fallback","languageDisplay"];function PA(e,i,a,r){var s=e.locale,o=e.onError,d=Intl.DisplayNames;d||o(new It(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,Jn.MISSING_INTL_API));var g=kr(r,OA);try{return i(s,g).of(a)}catch(c){o(new Dn("Error formatting display name.",s,c))}}var xA=["type","style"],Ug=Date.now();function BA(e){return"".concat(Ug,"_").concat(e,"_").concat(Ug)}function qA(e,i,a,r){r===void 0&&(r={});var s=mc(e,i,a,r).reduce(function(o,d){var g=d.value;return typeof g!="string"?o.push(g):typeof o[o.length-1]=="string"?o[o.length-1]+=g:o.push(g),o},[]);return s.length===1?s[0]:s.length===0?"":s}function mc(e,i,a,r){var s=e.locale,o=e.onError;r===void 0&&(r={});var d=Intl.ListFormat;d||o(new It(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,Jn.MISSING_INTL_API));var g=kr(r,xA);try{var c={},m=a.map(function(h,y){if(typeof h=="object"){var _=BA(y);return c[_]=h,_}return String(h)});return i(s,g).formatToParts(m).map(function(h){return h.type==="literal"?h:ie(ie({},h),{value:c[h.value]||h.value})})}catch(h){o(new Dn("Error formatting list.",s,h))}return a}var DA=["type"];function MA(e,i,a,r){var s=e.locale,o=e.onError;r===void 0&&(r={}),Intl.PluralRules||o(new It(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,Jn.MISSING_INTL_API));var d=kr(r,DA);try{return i(s,d).select(a)}catch(g){o(new Dn("Error formatting plural.",s,g))}return"other"}var LA=["numeric","style"];function FA(e,i,a){var r=e.locale,s=e.formats,o=e.onError;a===void 0&&(a={});var d=a.format,g=!!d&&no(s,"relative",d,o)||{},c=kr(a,LA,g);return i(r,c)}function KA(e,i,a,r,s){s===void 0&&(s={}),r||(r="second");var o=Intl.RelativeTimeFormat;o||e.onError(new It(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,Jn.MISSING_INTL_API));try{return FA(e,i,s).format(a,r)}catch(d){e.onError(new Dn("Error formatting relative time.",e.locale,d))}return String(a)}var CA=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function pc(e,i,a){var r=e.locale,s=e.formats,o=e.onError;a===void 0&&(a={});var d=a.format,g=d&&no(s,"number",d,o)||{},c=kr(a,CA,g);return i(r,c)}function VA(e,i,a,r){r===void 0&&(r={});try{return pc(e,i,r).format(a)}catch(s){e.onError(new Dn("Error formatting number.",e.locale,s))}return String(a)}function HA(e,i,a,r){r===void 0&&(r={});try{return pc(e,i,r).formatToParts(a)}catch(s){e.onError(new Dn("Error formatting number.",e.locale,s))}return[]}function $A(e){var i=e?e[Object.keys(e)[0]]:void 0;return typeof i=="string"}function GA(e){e.onWarn&&e.defaultRichTextElements&&$A(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`)}function UA(e,i){var a=wA(i),r=ie(ie({},fc),e),s=r.locale,o=r.defaultLocale,d=r.onError;return s?!Intl.NumberFormat.supportedLocalesOf(s).length&&d?d(new Hg('Missing locale data for locale: "'.concat(s,'" in Intl.NumberFormat. Using default locale: "').concat(o,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(s).length&&d&&d(new Hg('Missing locale data for locale: "'.concat(s,'" in Intl.DateTimeFormat. Using default locale: "').concat(o,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):(d&&d(new yA('"locale" was not configured, using "'.concat(o,'" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))),r.locale=r.defaultLocale||"en"),GA(r),ie(ie({},r),{formatters:a,formatNumber:VA.bind(null,r,a.getNumberFormat),formatNumberToParts:HA.bind(null,r,a.getNumberFormat),formatRelativeTime:KA.bind(null,r,a.getRelativeTimeFormat),formatDate:RA.bind(null,r,a.getDateTimeFormat),formatDateToParts:jA.bind(null,r,a.getDateTimeFormat),formatTime:SA.bind(null,r,a.getDateTimeFormat),formatDateTimeRange:IA.bind(null,r,a.getDateTimeFormat),formatTimeToParts:NA.bind(null,r,a.getDateTimeFormat),formatPlural:MA.bind(null,r,a.getPluralRules),formatMessage:xl.bind(null,r,a),$t:xl.bind(null,r,a),formatList:qA.bind(null,r,a.getListFormat),formatListToParts:mc.bind(null,r,a.getListFormat),formatDisplayName:PA.bind(null,r,a.getDisplayNames)})}function YA(e,i,a){if(a===void 0&&(a=Error),!e)throw new a(i)}function WA(e){YA(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var zA=ie(ie({},fc),{textComponent:S.Fragment}),XA={key:42},ZA=function(e){return S.isValidElement(e)?S.createElement(S.Fragment,XA,e):e},JA=function(e){var i;return(i=S.Children.map(e,ZA))!==null&&i!==void 0?i:[]};function QA(e){return function(i){return e(S.Children.toArray(i))}}var Yg={exports:{}},Re={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wg;function eR(){if(Wg)return Re;Wg=1;var e=typeof Symbol=="function"&&Symbol.for,i=e?Symbol.for("react.element"):60103,a=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,s=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,d=e?Symbol.for("react.provider"):60109,g=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,m=e?Symbol.for("react.concurrent_mode"):60111,h=e?Symbol.for("react.forward_ref"):60112,y=e?Symbol.for("react.suspense"):60113,_=e?Symbol.for("react.suspense_list"):60120,T=e?Symbol.for("react.memo"):60115,P=e?Symbol.for("react.lazy"):60116,v=e?Symbol.for("react.block"):60121,E=e?Symbol.for("react.fundamental"):60117,A=e?Symbol.for("react.responder"):60118,B=e?Symbol.for("react.scope"):60119;function R(O){if(typeof O=="object"&&O!==null){var D=O.$$typeof;switch(D){case i:switch(O=O.type,O){case c:case m:case r:case o:case s:case y:return O;default:switch(O=O&&O.$$typeof,O){case g:case h:case P:case T:case d:return O;default:return D}}case a:return D}}}function V(O){return R(O)===m}return Re.AsyncMode=c,Re.ConcurrentMode=m,Re.ContextConsumer=g,Re.ContextProvider=d,Re.Element=i,Re.ForwardRef=h,Re.Fragment=r,Re.Lazy=P,Re.Memo=T,Re.Portal=a,Re.Profiler=o,Re.StrictMode=s,Re.Suspense=y,Re.isAsyncMode=function(O){return V(O)||R(O)===c},Re.isConcurrentMode=V,Re.isContextConsumer=function(O){return R(O)===g},Re.isContextProvider=function(O){return R(O)===d},Re.isElement=function(O){return typeof O=="object"&&O!==null&&O.$$typeof===i},Re.isForwardRef=function(O){return R(O)===h},Re.isFragment=function(O){return R(O)===r},Re.isLazy=function(O){return R(O)===P},Re.isMemo=function(O){return R(O)===T},Re.isPortal=function(O){return R(O)===a},Re.isProfiler=function(O){return R(O)===o},Re.isStrictMode=function(O){return R(O)===s},Re.isSuspense=function(O){return R(O)===y},Re.isValidElementType=function(O){return typeof O=="string"||typeof O=="function"||O===r||O===m||O===o||O===s||O===y||O===_||typeof O=="object"&&O!==null&&(O.$$typeof===P||O.$$typeof===T||O.$$typeof===d||O.$$typeof===g||O.$$typeof===h||O.$$typeof===E||O.$$typeof===A||O.$$typeof===B||O.$$typeof===v)},Re.typeOf=R,Re}var zg;function nR(){return zg||(zg=1,Yg.exports=eR()),Yg.exports}var ol,Xg;function tR(){if(Xg)return ol;Xg=1;var e=nR(),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},o={};o[e.ForwardRef]=r,o[e.Memo]=s;function d(P){return e.isMemo(P)?s:o[P.$$typeof]||i}var g=Object.defineProperty,c=Object.getOwnPropertyNames,m=Object.getOwnPropertySymbols,h=Object.getOwnPropertyDescriptor,y=Object.getPrototypeOf,_=Object.prototype;function T(P,v,E){if(typeof v!="string"){if(_){var A=y(v);A&&A!==_&&T(P,A,E)}var B=c(v);m&&(B=B.concat(m(v)));for(var R=d(P),V=d(v),O=0;O<B.length;++O){var D=B[O];if(!a[D]&&!(E&&E[D])&&!(V&&V[D])&&!(R&&R[D])){var N=h(v,D);try{g(P,D,N)}catch{}}}}return P}return ol=T,ol}tR();var to=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=S.createContext(null)):S.createContext(null);to.Consumer;to.Provider;var rR=to;function hc(){var e=S.useContext(rR);return WA(e),e}var Bl;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(Bl||(Bl={}));var ql;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(ql||(ql={}));function kc(e){var i=function(a){var r=hc(),s=a.value,o=a.children,d=bi(a,["value","children"]),g=typeof s=="string"?new Date(s||0):s,c=e==="formatDate"?r.formatDateToParts(g,d):r.formatTimeToParts(g,d);return o(c)};return i.displayName=ql[e],i}function ia(e){var i=function(a){var r=hc(),s=a.value,o=a.children,d=bi(a,["value","children"]),g=r[e](s,d);if(typeof o=="function")return o(g);var c=r.textComponent||S.Fragment;return S.createElement(c,null,g)};return i.displayName=Bl[e],i}function vc(e){return e&&Object.keys(e).reduce(function(i,a){var r=e[a];return i[a]=dc(r)?QA(r):r,i},{})}var Zg=function(e,i,a,r){for(var s=[],o=4;o<arguments.length;o++)s[o-4]=arguments[o];var d=vc(r),g=xl.apply(void 0,zn([e,i,a,d],s,!1));return Array.isArray(g)?JA(g):g},aR=function(e,i){var a=e.defaultRichTextElements,r=bi(e,["defaultRichTextElements"]),s=vc(a),o=UA(ie(ie(ie({},zA),r),{defaultRichTextElements:s}),i),d={locale:o.locale,timeZone:o.timeZone,fallbackOnEmptyString:o.fallbackOnEmptyString,formats:o.formats,defaultLocale:o.defaultLocale,defaultFormats:o.defaultFormats,messages:o.messages,onError:o.onError,defaultRichTextElements:s};return ie(ie({},o),{formatMessage:Zg.bind(null,d,o.formatters),$t:Zg.bind(null,d,o.formatters)})};ia("formatDate");ia("formatTime");ia("formatNumber");ia("formatList");ia("formatDisplayName");kc("formatDate");kc("formatTime");function ro(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Dl={exports:{}},iR=Dl.exports,Jg;function sR(){return Jg||(Jg=1,function(e,i){(function(a,r){e.exports=r()})(iR,function(){var a,r,s=1e3,o=6e4,d=36e5,g=864e5,c=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m=31536e6,h=2628e6,y=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,_={years:m,months:h,days:g,hours:d,minutes:o,seconds:s,milliseconds:1,weeks:6048e5},T=function(D){return D instanceof V},P=function(D,N,I){return new V(D,I,N.$l)},v=function(D){return r.p(D)+"s"},E=function(D){return D<0},A=function(D){return E(D)?Math.ceil(D):Math.floor(D)},B=function(D){return Math.abs(D)},R=function(D,N){return D?E(D)?{negative:!0,format:""+B(D)+N}:{negative:!1,format:""+D+N}:{negative:!1,format:""}},V=function(){function D(I,C,X){var Y=this;if(this.$d={},this.$l=X,I===void 0&&(this.$ms=0,this.parseFromMilliseconds()),C)return P(I*_[v(C)],this);if(typeof I=="number")return this.$ms=I,this.parseFromMilliseconds(),this;if(typeof I=="object")return Object.keys(I).forEach(function(M){Y.$d[v(M)]=I[M]}),this.calMilliseconds(),this;if(typeof I=="string"){var J=I.match(y);if(J){var L=J.slice(2).map(function(M){return M!=null?Number(M):0});return this.$d.years=L[0],this.$d.months=L[1],this.$d.weeks=L[2],this.$d.days=L[3],this.$d.hours=L[4],this.$d.minutes=L[5],this.$d.seconds=L[6],this.calMilliseconds(),this}}return this}var N=D.prototype;return N.calMilliseconds=function(){var I=this;this.$ms=Object.keys(this.$d).reduce(function(C,X){return C+(I.$d[X]||0)*_[X]},0)},N.parseFromMilliseconds=function(){var I=this.$ms;this.$d.years=A(I/m),I%=m,this.$d.months=A(I/h),I%=h,this.$d.days=A(I/g),I%=g,this.$d.hours=A(I/d),I%=d,this.$d.minutes=A(I/o),I%=o,this.$d.seconds=A(I/s),I%=s,this.$d.milliseconds=I},N.toISOString=function(){var I=R(this.$d.years,"Y"),C=R(this.$d.months,"M"),X=+this.$d.days||0;this.$d.weeks&&(X+=7*this.$d.weeks);var Y=R(X,"D"),J=R(this.$d.hours,"H"),L=R(this.$d.minutes,"M"),M=this.$d.seconds||0;this.$d.milliseconds&&(M+=this.$d.milliseconds/1e3,M=Math.round(1e3*M)/1e3);var Q=R(M,"S"),ne=I.negative||C.negative||Y.negative||J.negative||L.negative||Q.negative,Z=J.format||L.format||Q.format?"T":"",G=(ne?"-":"")+"P"+I.format+C.format+Y.format+Z+J.format+L.format+Q.format;return G==="P"||G==="-P"?"P0D":G},N.toJSON=function(){return this.toISOString()},N.format=function(I){var C=I||"YYYY-MM-DDTHH:mm:ss",X={Y:this.$d.years,YY:r.s(this.$d.years,2,"0"),YYYY:r.s(this.$d.years,4,"0"),M:this.$d.months,MM:r.s(this.$d.months,2,"0"),D:this.$d.days,DD:r.s(this.$d.days,2,"0"),H:this.$d.hours,HH:r.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:r.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:r.s(this.$d.seconds,2,"0"),SSS:r.s(this.$d.milliseconds,3,"0")};return C.replace(c,function(Y,J){return J||String(X[Y])})},N.as=function(I){return this.$ms/_[v(I)]},N.get=function(I){var C=this.$ms,X=v(I);return X==="milliseconds"?C%=1e3:C=X==="weeks"?A(C/_[X]):this.$d[X],C||0},N.add=function(I,C,X){var Y;return Y=C?I*_[v(C)]:T(I)?I.$ms:P(I,this).$ms,P(this.$ms+Y*(X?-1:1),this)},N.subtract=function(I,C){return this.add(I,C,!0)},N.locale=function(I){var C=this.clone();return C.$l=I,C},N.clone=function(){return P(this.$ms,this)},N.humanize=function(I){return a().add(this.$ms,"ms").locale(this.$l).fromNow(!I)},N.valueOf=function(){return this.asMilliseconds()},N.milliseconds=function(){return this.get("milliseconds")},N.asMilliseconds=function(){return this.as("milliseconds")},N.seconds=function(){return this.get("seconds")},N.asSeconds=function(){return this.as("seconds")},N.minutes=function(){return this.get("minutes")},N.asMinutes=function(){return this.as("minutes")},N.hours=function(){return this.get("hours")},N.asHours=function(){return this.as("hours")},N.days=function(){return this.get("days")},N.asDays=function(){return this.as("days")},N.weeks=function(){return this.get("weeks")},N.asWeeks=function(){return this.as("weeks")},N.months=function(){return this.get("months")},N.asMonths=function(){return this.as("months")},N.years=function(){return this.get("years")},N.asYears=function(){return this.as("years")},D}(),O=function(D,N,I){return D.add(N.years()*I,"y").add(N.months()*I,"M").add(N.days()*I,"d").add(N.hours()*I,"h").add(N.minutes()*I,"m").add(N.seconds()*I,"s").add(N.milliseconds()*I,"ms")};return function(D,N,I){a=I,r=I().$utils(),I.duration=function(Y,J){var L=I.locale();return P(Y,{$l:L},J)},I.isDuration=T;var C=N.prototype.add,X=N.prototype.subtract;N.prototype.add=function(Y,J){return T(Y)?O(this,Y,1):C.bind(this)(Y,J)},N.prototype.subtract=function(Y,J){return T(Y)?O(this,Y,-1):X.bind(this)(Y,J)}}})}(Dl)),Dl.exports}var lR=sR();const oR=ro(lR);var Ml={exports:{}},uR=Ml.exports,Qg;function dR(){return Qg||(Qg=1,function(e,i){(function(a,r){e.exports=r()})(uR,function(){var a="day";return function(r,s,o){var d=function(m){return m.add(4-m.isoWeekday(),a)},g=s.prototype;g.isoWeekYear=function(){return d(this).year()},g.isoWeek=function(m){if(!this.$utils().u(m))return this.add(7*(m-this.isoWeek()),a);var h,y,_,T,P=d(this),v=(h=this.isoWeekYear(),y=this.$u,_=(y?o.utc:o)().year(h).startOf("year"),T=4-_.isoWeekday(),_.isoWeekday()>4&&(T+=7),_.add(T,a));return P.diff(v,"week")+1},g.isoWeekday=function(m){return this.$utils().u(m)?this.day()||7:this.day(this.day()%7?m:m-7)};var c=g.startOf;g.startOf=function(m,h){var y=this.$utils(),_=!!y.u(h)||h;return y.p(m)==="isoweek"?_?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):c.bind(this)(m,h)}}})}(Ml)),Ml.exports}var gR=dR();const fR=ro(gR);var Ll={exports:{}},cR=Ll.exports,ef;function mR(){return ef||(ef=1,function(e,i){(function(a,r){e.exports=r()})(cR,function(){var a="minute",r=/[+-]\d\d(?::?\d\d)?/g,s=/([+-]|\d\d)/g;return function(o,d,g){var c=d.prototype;g.utc=function(v){var E={date:v,utc:!0,args:arguments};return new d(E)},c.utc=function(v){var E=g(this.toDate(),{locale:this.$L,utc:!0});return v?E.add(this.utcOffset(),a):E},c.local=function(){return g(this.toDate(),{locale:this.$L,utc:!1})};var m=c.parse;c.parse=function(v){v.utc&&(this.$u=!0),this.$utils().u(v.$offset)||(this.$offset=v.$offset),m.call(this,v)};var h=c.init;c.init=function(){if(this.$u){var v=this.$d;this.$y=v.getUTCFullYear(),this.$M=v.getUTCMonth(),this.$D=v.getUTCDate(),this.$W=v.getUTCDay(),this.$H=v.getUTCHours(),this.$m=v.getUTCMinutes(),this.$s=v.getUTCSeconds(),this.$ms=v.getUTCMilliseconds()}else h.call(this)};var y=c.utcOffset;c.utcOffset=function(v,E){var A=this.$utils().u;if(A(v))return this.$u?0:A(this.$offset)?y.call(this):this.$offset;if(typeof v=="string"&&(v=function(O){O===void 0&&(O="");var D=O.match(r);if(!D)return null;var N=(""+D[0]).match(s)||["-",0,0],I=N[0],C=60*+N[1]+ +N[2];return C===0?0:I==="+"?C:-C}(v),v===null))return this;var B=Math.abs(v)<=16?60*v:v,R=this;if(E)return R.$offset=B,R.$u=v===0,R;if(v!==0){var V=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(R=this.local().add(B+V,a)).$offset=B,R.$x.$localOffset=V}else R=this.utc();return R};var _=c.format;c.format=function(v){var E=v||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return _.call(this,E)},c.valueOf=function(){var v=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*v},c.isUTC=function(){return!!this.$u},c.toISOString=function(){return this.toDate().toISOString()},c.toString=function(){return this.toDate().toUTCString()};var T=c.toDate;c.toDate=function(v){return v==="s"&&this.$offset?g(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():T.call(this)};var P=c.diff;c.diff=function(v,E,A){if(v&&this.$u===v.$u)return P.call(this,v,E,A);var B=this.local(),R=g(v).local();return P.call(B,R,E,A)}}})}(Ll)),Ll.exports}var pR=mR();const hR=ro(pR),kR=cc(),Ei=e=>aR({locale:"nb-NO",messages:e},kR),Ti={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","DateTimeLabel.Kl":" kl. ","PeriodLabel.DateToday":"d.d.","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"};Ei(Ti);var Fl={exports:{}},vR=Fl.exports,nf;function yR(){return nf||(nf=1,function(e,i){(function(a,r){e.exports=r(wn)})(vR,function(a){function r(d){return d&&typeof d=="object"&&"default"in d?d:{default:d}}var s=r(a),o={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(d){return d+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return s.default.locale(o,null,!0),o})}(Fl)),Fl.exports}yR();wn.extend(hR);wn.extend(fR);wn.extend(oR);Ei(Ti);Ei(Ti);var tf={exports:{}},$r={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rf;function bR(){if(rf)return $r;rf=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function a(r,s,o){var d=null;if(o!==void 0&&(d=""+o),s.key!==void 0&&(d=""+s.key),"key"in s){o={};for(var g in s)g!=="key"&&(o[g]=s[g])}else o=s;return s=o.ref,{$$typeof:e,type:r,key:d,ref:s!==void 0?s:null,props:o}}return $r.Fragment=i,$r.jsx=a,$r.jsxs=a,$r}var af;function ER(){return af||(af=1,tf.exports=bR()),tf.exports}ER();Ei(Ti);S.createContext({});var Kl={exports:{}},TR=Kl.exports,sf;function _R(){return sf||(sf=1,function(e,i){(function(a,r){e.exports=r()})(TR,function(){var a={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,s=/\d/,o=/\d\d/,d=/\d\d?/,g=/\d*[^-_:/,()\s\d]+/,c={},m=function(E){return(E=+E)+(E>68?1900:2e3)},h=function(E){return function(A){this[E]=+A}},y=[/[+-]\d\d:?(\d\d)?|Z/,function(E){(this.zone||(this.zone={})).offset=function(A){if(!A||A==="Z")return 0;var B=A.match(/([+-]|\d\d)/g),R=60*B[1]+(+B[2]||0);return R===0?0:B[0]==="+"?-R:R}(E)}],_=function(E){var A=c[E];return A&&(A.indexOf?A:A.s.concat(A.f))},T=function(E,A){var B,R=c.meridiem;if(R){for(var V=1;V<=24;V+=1)if(E.indexOf(R(V,0,A))>-1){B=V>12;break}}else B=E===(A?"pm":"PM");return B},P={A:[g,function(E){this.afternoon=T(E,!1)}],a:[g,function(E){this.afternoon=T(E,!0)}],Q:[s,function(E){this.month=3*(E-1)+1}],S:[s,function(E){this.milliseconds=100*+E}],SS:[o,function(E){this.milliseconds=10*+E}],SSS:[/\d{3}/,function(E){this.milliseconds=+E}],s:[d,h("seconds")],ss:[d,h("seconds")],m:[d,h("minutes")],mm:[d,h("minutes")],H:[d,h("hours")],h:[d,h("hours")],HH:[d,h("hours")],hh:[d,h("hours")],D:[d,h("day")],DD:[o,h("day")],Do:[g,function(E){var A=c.ordinal,B=E.match(/\d+/);if(this.day=B[0],A)for(var R=1;R<=31;R+=1)A(R).replace(/\[|\]/g,"")===E&&(this.day=R)}],w:[d,h("week")],ww:[o,h("week")],M:[d,h("month")],MM:[o,h("month")],MMM:[g,function(E){var A=_("months"),B=(_("monthsShort")||A.map(function(R){return R.slice(0,3)})).indexOf(E)+1;if(B<1)throw new Error;this.month=B%12||B}],MMMM:[g,function(E){var A=_("months").indexOf(E)+1;if(A<1)throw new Error;this.month=A%12||A}],Y:[/[+-]?\d+/,h("year")],YY:[o,function(E){this.year=m(E)}],YYYY:[/\d{4}/,h("year")],Z:y,ZZ:y};function v(E){var A,B;A=E,B=c&&c.formats;for(var R=(E=A.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(X,Y,J){var L=J&&J.toUpperCase();return Y||B[J]||a[J]||B[L].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(M,Q,ne){return Q||ne.slice(1)})})).match(r),V=R.length,O=0;O<V;O+=1){var D=R[O],N=P[D],I=N&&N[0],C=N&&N[1];R[O]=C?{regex:I,parser:C}:D.replace(/^\[|\]$/g,"")}return function(X){for(var Y={},J=0,L=0;J<V;J+=1){var M=R[J];if(typeof M=="string")L+=M.length;else{var Q=M.regex,ne=M.parser,Z=X.slice(L),G=Q.exec(Z)[0];ne.call(Y,G),X=X.replace(G,"")}}return function(W){var ae=W.afternoon;if(ae!==void 0){var te=W.hours;ae?te<12&&(W.hours+=12):te===12&&(W.hours=0),delete W.afternoon}}(Y),Y}}return function(E,A,B){B.p.customParseFormat=!0,E&&E.parseTwoDigitYear&&(m=E.parseTwoDigitYear);var R=A.prototype,V=R.parse;R.parse=function(O){var D=O.date,N=O.utc,I=O.args;this.$u=N;var C=I[1];if(typeof C=="string"){var X=I[2]===!0,Y=I[3]===!0,J=X||Y,L=I[2];Y&&(L=I[2]),c=this.$locale(),!X&&L&&(c=B.Ls[L]),this.$d=function(Z,G,W,ae){try{if(["x","X"].indexOf(G)>-1)return new Date((G==="X"?1e3:1)*Z);var te=v(G)(Z),le=te.year,he=te.month,pn=te.day,Ke=te.hours,qe=te.minutes,Ce=te.seconds,ve=te.milliseconds,we=te.zone,Ze=te.week,Ve=new Date,$e=pn||(le||he?1:Ve.getDate()),An=le||Ve.getFullYear(),Me=0;le&&!he||(Me=he>0?he-1:Ve.getMonth());var Je,et=Ke||0,Qe=qe||0,Hn=Ce||0,nt=ve||0;return we?new Date(Date.UTC(An,Me,$e,et,Qe,Hn,nt+60*we.offset*1e3)):W?new Date(Date.UTC(An,Me,$e,et,Qe,Hn,nt)):(Je=new Date(An,Me,$e,et,Qe,Hn,nt),Ze&&(Je=ae(Je).week(Ze).toDate()),Je)}catch{return new Date("")}}(D,C,N,B),this.init(),L&&L!==!0&&(this.$L=this.locale(L).$L),J&&D!=this.format(C)&&(this.$d=new Date("")),c={}}else if(C instanceof Array)for(var M=C.length,Q=1;Q<=M;Q+=1){I[1]=C[Q-1];var ne=B.apply(this,I);if(ne.isValid()){this.$d=ne.$d,this.$L=ne.$L,this.init();break}Q===M&&(this.$d=new Date(""))}else V.call(this,O)}}})}(Kl)),Kl.exports}var wR=_R();const AR=Ew(wR);wn.extend(AR);an(ta);const RR=e=>{const i=e.aktiveNaturalytelser.reduce((r,s)=>{const o=s.type;return o in r?{...r,[o]:[...r[o],s]}:{...r,[o]:[s]}},{}),a={};return Object.entries(i).forEach(([r,s])=>{const o=s.sort((d,g)=>dw({fom:d.periode.fomDato,tom:d.periode.tomDato},{fom:g.periode.fomDato,tom:g.periode.tomDato})).reverse();a[r]=o.flatMap((d,g,c)=>{const m=c[g+1],h=d.periode.tomDato,y=m?.periode.fomDato;return h===fr?[]:[{...d,periode:{fomDato:cg(h,1),tomDato:y?cg(y,-1):fr}}]})}),a},yc=({inntektsmelding:e,alleKodeverk:i})=>{const a=pt(),r=RR(e);return K.jsx(Zn,{tittel:a.formatMessage({id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.heading"}),children:e.aktiveNaturalytelser.length===0?K.jsx("span",{children:K.jsx(Ie,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.ingen"})}):K.jsx(vi,{gap:"1",children:Object.entries(r).map(([s,o])=>K.jsxs("div",{children:[K.jsx("span",{children:i.NaturalYtelseType.find(d=>d.kode===s)?.navn}),K.jsx("ul",{children:o.map(d=>K.jsxs(z.Fragment,{children:[K.jsxs("li",{children:[K.jsx(Ie,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.fom"})," ",K.jsx(zr,{dateString:d.periode.fomDato})]}),d.periode.tomDato!==fr&&K.jsxs("li",{children:[K.jsx(Ie,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.tom"})," ",K.jsx(zr,{dateString:d.periode.tomDato})]}),K.jsxs("li",{children:[K.jsx(Ie,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.verdi"}),":"," ",K.jsx(or,{beløp:d.beloepPerMnd.verdi})]})]},d.indexKey))})]},s))})})};yc.__docgenInfo={description:"",methods:[],displayName:"BortfalteNaturalYtelser",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktor;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
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
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:"'BARN' | 'FBARN' | 'VOKSEN' | 'ADVOKAT' | 'ANNEN_F'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType, KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const bc=({kildeSystem:e})=>{const i=pt();return K.jsx(Zn,{tittel:i.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.heading"}),children:SR(e,i)})},SR=(e,i)=>{switch(e.toUpperCase()){case"NAV_NO":return i.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.nav"});case"ALTINN":return i.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.altinn"});default:return i.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.lps"})}};bc.__docgenInfo={description:"",methods:[],displayName:"KildeSystem",props:{kildeSystem:{required:!0,tsType:{name:"string"},description:""}}};const Ec=({inntektsmelding:e})=>{const i=pt();return K.jsxs(Zn,{tittel:i.formatMessage({id:"InntektsmeldingFaktaPanel.kontaktperson.heading"}),children:[K.jsxs("span",{children:[K.jsx(Ie,{id:"InntektsmeldingFaktaPanel.kontaktperson.navn"}),": ",e.kontaktpersonNavn]}),K.jsxs("span",{children:[K.jsx(Ie,{id:"InntektsmeldingFaktaPanel.kontaktperson.telefon"}),": ",e.kontaktpersonNummer]})]})};Ec.__docgenInfo={description:"",methods:[],displayName:"KontaktPerson",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const Tc=({inntektsmelding:e,fagsak:i,arbeidsgiverOpplysninger:a})=>{const r=`IM ${a.navn} - ${Hf(e.motattDato)}`;return K.jsx(Xl,{type:"button",onClick:()=>{p0(i.saksnummer,e.journalpostId,e.dokumentId,r)},variant:"secondary",size:"small",icon:K.jsx(j0,{}),children:K.jsx(Ie,{id:"InntektsmeldingFaktaPanel.modal.trigger"})})};Tc.__docgenInfo={description:"",methods:[],displayName:"LastNedPdfKnapp",props:{fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  fagsakYtelseType: FagsakYtelseType;
  relasjonsRolleType: RelasjonsRolleType;
  status: FagsakStatus;
  dekningsgrad: number;
  aktørId: string;
  harVergeIÅpenBehandling: boolean;
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  bruker: Person;
  annenPart: Person | null;
  annenpartBehandling: AnnenPartBehandling | null;
  fagsakMarkeringer?: Saksmarkering[];
  familiehendelse?: FagsakHendelse;
  behandlinger: BehandlingAppKontekst[];
  brukerManglerAdresse: boolean;
  historikkinnslag: Historikkinnslag[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"relasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"status",value:{name:"FagsakStatus",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}},{key:"aktørId",value:{name:"string",required:!0}},{key:"harVergeIÅpenBehandling",value:{name:"boolean",required:!0}},{key:"sakSkalTilInfotrygd",value:{name:"boolean",required:!0}},{key:"behandlingTypeKanOpprettes",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: BehandlingType;
  kanOppretteBehandling: boolean;
}`,signature:{properties:[{key:"behandlingType",value:{name:"BehandlingType",required:!0}},{key:"kanOppretteBehandling",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingType: BehandlingType;
  kanOppretteBehandling: boolean;
}>`}],raw:"BehandlingOppretting[]",required:!0}},{key:"bruker",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  fødselsnummer: string;
  kjønn: Kjønnkode;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato: string | null;
  aktørId: string | null;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"unknown[unknown]",raw:"(typeof KjønnkodeEnum)[keyof typeof KjønnkodeEnum]",required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aktørId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  navn: string;
  fødselsnummer: string;
  kjønn: Kjønnkode;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato: string | null;
  aktørId: string | null;
}>`,required:!0}},{key:"annenPart",value:{name:"union",raw:"Person | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  fødselsnummer: string;
  kjønn: Kjønnkode;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato: string | null;
  aktørId: string | null;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"unknown[unknown]",raw:"(typeof KjønnkodeEnum)[keyof typeof KjønnkodeEnum]",required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aktørId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  navn: string;
  fødselsnummer: string;
  kjønn: Kjønnkode;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato: string | null;
  aktørId: string | null;
}>`,required:!0},{name:"null"}],required:!0}},{key:"annenpartBehandling",value:{name:"union",raw:"AnnenPartBehandling | null",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  behandlingUuid: string;
  relasjonsRolleType: RelasjonsRolleType;
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"relasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}}]}},{name:"null"}],required:!0}},{key:"fagsakMarkeringer",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fagsakMarkering: FagsakMarkeringKode;
  kortNavn?: string;
}`,signature:{properties:[{key:"fagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"kortNavn",value:{name:"string",required:!1}}]}}],raw:"Saksmarkering[]",required:!1}},{key:"familiehendelse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}`,signature:{properties:[{key:"hendelseType",value:{name:"string",required:!0}},{key:"hendelseDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}>`,required:!1}},{key:"behandlinger",value:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"BehandlingStatus",required:!0}},{key:"type",value:{name:"BehandlingType",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:"BehandlingResultatType | BehandlingResultatTypeTilbakekreving",elements:[{name:"BehandlingResultatType"},{name:"BehandlingResultatTypeTilbakekreving"}],required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"Avslagsarsak | null",elements:[{name:"Avslagsarsak"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"KonsekvensForYtelsen"}],raw:"KonsekvensForYtelsen[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}`,signature:{properties:[{key:"behandlingTillatteOperasjoner",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  behandlingKanMerkesHaster: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}`,signature:{properties:[{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"behandlingKanMerkesHaster",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"VergeBehandlingmenyValg",required:!0}}]}}],raw:`Readonly<{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  behandlingKanMerkesHaster: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}>`,required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig: boolean;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"boolean",required:!0}}]}}],raw:"Brevmal[]",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: SkjermlenkeType;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: VurderÅrsak[];
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
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"boolean",required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]",required:!1}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
  vurderPaNyttArsaker?: VurderÅrsak[];
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
  skjermlenkeType: SkjermlenkeType;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"union",raw:"Aksjonspunkt | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"AksjonspunktKode",required:!0}},{key:"status",value:{name:"AksjonspunktStatus",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"VilkarType",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"VurderÅrsak[] | null",elements:[{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"AksjonspunktType",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`},{name:"null"}],required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"iayFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}},{key:"medlFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}>`}]}],raw:"BehandlingAppKontekst[]",required:!0}},{key:"brukerManglerAdresse",value:{name:"boolean",required:!0}},{key:"historikkinnslag",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string | null;
  skjermlenke: SkjermlenkeType | null;
  dokumenter: HistorikkInnslagDokumentLink[] | null;
  tittel: string | null;
  linjer: Linje[];
}`,signature:{properties:[{key:"aktør",value:{name:"signature",type:"object",raw:`{
  type: HistorikkAktor;
  ident: string | null;
}`,signature:{properties:[{key:"type",value:{name:"HistorikkAktor",required:!0}},{key:"ident",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]},required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"skjermlenke",value:{name:"union",raw:"SkjermlenkeType | null",elements:[{name:"SkjermlenkeType"},{name:"null"}],required:!0}},{key:"dokumenter",value:{name:"union",raw:"HistorikkInnslagDokumentLink[] | null",elements:[{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  dokumentId: string;
  journalpostId: string;
  tag: string;
  utgått: boolean;
}`,signature:{properties:[{key:"dokumentId",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"tag",value:{name:"string",required:!0}},{key:"utgått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  dokumentId: string;
  journalpostId: string;
  tag: string;
  utgått: boolean;
}>`}],raw:"HistorikkInnslagDokumentLink[]"},{name:"null"}],required:!0}},{key:"tittel",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"linjer",value:{name:"Array",elements:[{name:"union",raw:`| {
    type: 'TEKST';
    tekst: string;
  }
| { type: 'LINJESKIFT' }`,elements:[{name:"signature",type:"object",raw:`{
  type: 'TEKST';
  tekst: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:"'TEKST'",required:!0}},{key:"tekst",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:"{ type: 'LINJESKIFT' }",signature:{properties:[{key:"type",value:{name:"literal",value:"'LINJESKIFT'",required:!0}}]}}]}],raw:"Linje[]",required:!0}}]}}],raw:`Readonly<{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string | null;
  skjermlenke: SkjermlenkeType | null;
  dokumenter: HistorikkInnslagDokumentLink[] | null;
  tittel: string | null;
  linjer: Linje[];
}>`}],raw:"Historikkinnslag[]",required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"iayFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}},{key:"medlFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}>`,required:!0}},{key:"notater",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  opprettetTidspunkt: string;
  opprettetAv: string;
  notat: string;
}`,signature:{properties:[{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"opprettetAv",value:{name:"string",required:!0}},{key:"notat",value:{name:"string",required:!0}}]}}],raw:"Saksnotat[]",required:!0}}]}}],raw:`Readonly<{
  saksnummer: string;
  fagsakYtelseType: FagsakYtelseType;
  relasjonsRolleType: RelasjonsRolleType;
  status: FagsakStatus;
  dekningsgrad: number;
  aktørId: string;
  harVergeIÅpenBehandling: boolean;
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  bruker: Person;
  annenPart: Person | null;
  annenpartBehandling: AnnenPartBehandling | null;
  fagsakMarkeringer?: Saksmarkering[];
  familiehendelse?: FagsakHendelse;
  behandlinger: BehandlingAppKontekst[];
  brukerManglerAdresse: boolean;
  historikkinnslag: Historikkinnslag[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
}>`},description:""},inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},arbeidsgiverOpplysninger:{required:!0,tsType:{name:"Readonly",elements:[{name:"union",raw:`| {
    erPrivatPerson: true;
    identifikator: string;
    navn: string;
    referanse: string;
    fødselsdato: string;
  }
| {
    erPrivatPerson: false;
    identifikator: string;
    referanse: string;
    navn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  identifikator: string;
  navn: string;
  referanse: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  identifikator: string;
  referanse: string;
  navn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}]}],raw:`Readonly<
  | {
      erPrivatPerson: true;
      identifikator: string;
      navn: string;
      referanse: string;
      fødselsdato: string;
    }
  | {
      erPrivatPerson: false;
      identifikator: string;
      referanse: string;
      navn: string;
    }
>`},description:""}}};const _c=({inntektsmelding:e})=>{const i=pt();if(e.refusjonsperioder.length===0)return K.jsx(Zn,{tittel:i.formatMessage({id:"InntektsmeldingFaktaPanel.refusjon.heading"}),children:e.refusjonPrMnd?K.jsx(or,{beløp:e.refusjonPrMnd}):K.jsx(Ie,{tagName:"span",id:"InntektsmeldingFaktaPanel.refusjon.ingen"})});const a=[...e.refusjonsperioder].sort((r,s)=>new Date(r.fom).getTime()-new Date(s.fom).getTime());return K.jsxs(Zn,{tittel:i.formatMessage({id:"InntektsmeldingFaktaPanel.refusjon.heading"}),children:[K.jsx("span",{children:"Krever refusjon"}),K.jsx(or,{beløp:e.refusjonPrMnd??0}),K.jsx("span",{children:"Endringer i perioden:"}),K.jsx("ul",{children:a.map(r=>K.jsx("li",{children:K.jsx(Ie,{id:"InntektsmeldingFaktaPanel.refusjon.endring.periode",values:{kroner:K.jsx(or,{beløp:r.refusjonsbeløp.verdi}),fom:K.jsx(zr,{dateString:r.fom})}})},r.indexKey))})]})};_c.__docgenInfo={description:"",methods:[],displayName:"Refusjon",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const wc=({startDatoPermisjon:e,ytelse:i})=>{const a=pt();return e?K.jsxs(Zn,{tittel:a.formatMessage({id:"InntektsmeldingFaktaPanel.startDato.heading"},{ytelse:i.toLowerCase()}),children:[K.jsx("span",{children:e?K.jsx(zr,{dateString:e}):"-"}),K.jsx("span",{children:K.jsx(Ie,{id:"InntektsmeldingFaktaPanel.startDato.fraArbeidsgiver"})})]}):null};wc.__docgenInfo={description:"",methods:[],displayName:"Startdato",props:{startDatoPermisjon:{required:!1,tsType:{name:"string"},description:""},ytelse:{required:!0,tsType:{name:"string"},description:""}}};const IR="_behandlingCircleIngen_g2j3j_1",jR="_behandlingCircleDenne_g2j3j_5",NR="_behandlingCircleAndre_g2j3j_9",OR="_container_g2j3j_13",PR="_ingenInntektsmeldinger_g2j3j_20",Yr={behandlingCircleIngen:IR,behandlingCircleDenne:jR,behandlingCircleAndre:NR,container:OR,ingenInntektsmeldinger:PR},Ac=({inntektsmelding:e,arbeidsgiverOpplysningerPerId:i,alleBehandlinger:a})=>{const{alleKodeverk:r,fagsak:s,behandling:o}=ff(),d=pt();return K.jsxs(vi,{gap:"4",className:Yr.container,children:[K.jsxs(lr,{gap:"4",justify:"space-between",align:"start",children:[K.jsxs(pf,{level:"3",size:"small",children:[K.jsx(Ie,{id:"InntektsmeldingFaktaPanel.innsendingstidspunkt"})," ",K.jsx(di,{dateTimeString:e.innsendingstidspunkt,separator:"kl"})]}),K.jsx(Tc,{fagsak:s,inntektsmelding:e,arbeidsgiverOpplysninger:i[e.arbeidsgiverIdent]})]}),K.jsxs(iT,{columns:3,gap:"8",children:[K.jsx($f,{arbeidsgiverOpplysninger:i[e.arbeidsgiverIdent],arbeidsgiverIdent:e.arbeidsgiverIdent}),K.jsx(Zn,{tittel:d.formatMessage({id:"InntektsmeldingFaktaPanel.månedsinntekt.heading"}),children:K.jsx(or,{beløp:e.inntektPrMnd})}),K.jsx(Gf,{alleKodeverk:r,inntektsmelding:e,alleBehandlinger:a,behandling:o}),K.jsx(Ec,{inntektsmelding:e}),K.jsx(wc,{ytelse:r.FagsakYtelseType.find(g=>g.kode===s.fagsakYtelseType)?.navn??"",startDatoPermisjon:e.startDatoPermisjon}),K.jsx(bc,{kildeSystem:e.kildeSystem}),K.jsx(yc,{inntektsmelding:e,alleKodeverk:r}),K.jsx(_c,{inntektsmelding:e})]})]})};Ac.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingInnhold",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
    erPrivatPerson: true;
    identifikator: string;
    navn: string;
    referanse: string;
    fødselsdato: string;
  }
| {
    erPrivatPerson: false;
    identifikator: string;
    referanse: string;
    navn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  identifikator: string;
  navn: string;
  referanse: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  identifikator: string;
  referanse: string;
  navn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}]}],raw:`Readonly<
  | {
      erPrivatPerson: true;
      identifikator: string;
      navn: string;
      referanse: string;
      fødselsdato: string;
    }
  | {
      erPrivatPerson: false;
      identifikator: string;
      referanse: string;
      navn: string;
    }
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},alleBehandlinger:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"BehandlingStatus",required:!0}},{key:"type",value:{name:"BehandlingType",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:"BehandlingResultatType | BehandlingResultatTypeTilbakekreving",elements:[{name:"BehandlingResultatType"},{name:"BehandlingResultatTypeTilbakekreving"}],required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"Avslagsarsak | null",elements:[{name:"Avslagsarsak"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"KonsekvensForYtelsen"}],raw:"KonsekvensForYtelsen[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}`,signature:{properties:[{key:"behandlingTillatteOperasjoner",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  behandlingKanMerkesHaster: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}`,signature:{properties:[{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"behandlingKanMerkesHaster",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"VergeBehandlingmenyValg",required:!0}}]}}],raw:`Readonly<{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  behandlingKanMerkesHaster: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}>`,required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig: boolean;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"boolean",required:!0}}]}}],raw:"Brevmal[]",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: SkjermlenkeType;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: VurderÅrsak[];
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
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"boolean",required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]",required:!1}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
  vurderPaNyttArsaker?: VurderÅrsak[];
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
  skjermlenkeType: SkjermlenkeType;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"union",raw:"Aksjonspunkt | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"AksjonspunktKode",required:!0}},{key:"status",value:{name:"AksjonspunktStatus",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"VilkarType",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"VurderÅrsak[] | null",elements:[{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"AksjonspunktType",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`},{name:"null"}],required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"iayFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}},{key:"medlFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""}}};const xR={"InntektsmeldingFaktaPanel.ingen":"Ingen inntektsmeldinger er registrert","InntektsmeldingFaktaPanel.tabell.header.innsendt":"Innsendt","InntektsmeldingFaktaPanel.tabell.header.arbeidsgiver":"Arbeidsgiver","InntektsmeldingFaktaPanel.tabell.header.skjæringstidspunkt":"Startdato","InntektsmeldingFaktaPanel.tabell.header.månedsinntekt":"Månedsi.","InntektsmeldingFaktaPanel.tabell.header.behandling":"Behandling","InntektsmeldingFaktaPanel.tabell.cell.behandling.denne":"Denne","InntektsmeldingFaktaPanel.tabell.cell.behandling.andre":"Andre","InntektsmeldingFaktaPanel.tabell.cell.behandling.ingen":"Ingen","InntektsmeldingFaktaPanel.modal.heading":"All informasjon fra PDF’en er tilgjengelig i faktapanelet","InntektsmeldingFaktaPanel.modal.trigger":"Åpne PDF","InntektsmeldingFaktaPanel.modal.body":"PDF’en du skal åpne inneholder ikke noe annet enn det som står i faktapanelet. Du kan likevel åpne den hvis du ønsker det.","InntektsmeldingFaktaPanel.modal.button.primary":"Last ned som PDF","InntektsmeldingFaktaPanel.modal.button.secondary":"Avbryt","InntektsmeldingFaktaPanel.behandling.heading":"Behandling","InntektsmeldingFaktaPanel.behandling.bruktKunIDenne":"Brukt i denne behandlingen","InntektsmeldingFaktaPanel.behandling.ikkeBruktINoen":"Ikke brukt i noen behandlinger","InntektsmeldingFaktaPanel.behandling.bruktIAndre":"Brukt i andre behandlinger","InntektsmeldingFaktaPanel.behandling.bruktIDenneOgFlere":"Brukt i denne og andre behandlinger","InntektsmeldingFaktaPanel.behandling.opprettet":"Opprettet","InntektsmeldingFaktaPanel.behandling.avsluttet":"Avsluttet","InntektsmeldingFaktaPanel.innsendingstidspunkt":"Inntektsmelding sendt","InntektsmeldingFaktaPanel.arbeidsgiver.heading":"Arbeidsgiver","InntektsmeldingFaktaPanel.arbeidsgiver.navn":"Virksomhetsnavn","InntektsmeldingFaktaPanel.arbeidsgiver.underenhet":"Org.nr. for underenhet","InntektsmeldingFaktaPanel.kontaktperson.heading":"Kontaktperson fra arbeidsgiver","InntektsmeldingFaktaPanel.kontaktperson.navn":"Navn","InntektsmeldingFaktaPanel.kontaktperson.telefon":"Telefonnummer","InntektsmeldingFaktaPanel.månedsinntekt.heading":"Månedsinntekt","InntektsmeldingFaktaPanel.startDato.heading":"Første dag med {ytelse}","InntektsmeldingFaktaPanel.startDato.fraArbeidsgiver":"Oppgitt av arbeidsgiver","InntektsmeldingFaktaPanel.kilde.heading":"Kilde","InntektsmeldingFaktaPanel.kilde.nav":"Nav","InntektsmeldingFaktaPanel.kilde.altinn":"Altinn","InntektsmeldingFaktaPanel.kilde.lps":"Arbeidsgiver sitt lønns- og personalsystem(LPS)","InntektsmeldingFaktaPanel.refusjon.heading":"Refusjon","InntektsmeldingFaktaPanel.refusjon.ingen":"Ingen refusjon","InntektsmeldingFaktaPanel.refusjon.endring.periode":"Refusjonsbeløp på {kroner} fra {fom}","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.heading":"Naturalytelser som faller bort","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.ingen":"Ingen","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.fom":"Fra og med","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.tom":"Til og med","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.verdi":"Verdi pr måned"},lf=an(xR),Cl=({arbeidsgiverOpplysningerPerId:e,alleBehandlinger:i,inntektsmeldinger:a})=>{const{behandling:r}=ff(),[s,o]=S.useState({orderBy:"innsendingstidspunkt",direction:"descending"}),d=m=>{o(s&&m===s.orderBy&&s.direction==="descending"?void 0:{orderBy:m,direction:s&&m===s.orderBy&&s.direction==="ascending"?"descending":"ascending"})},g=s?BR({inntektsmeldinger:a,arbeidsgiverOpplysningerPerId:e,sortKey:s.orderBy,behandling:r}):a,c=s?.direction==="ascending"?g:g.toReversed();return c.length===0?K.jsx(Dd,{value:lf,children:K.jsxs(lr,{gap:"2",justify:"center",align:"center",className:Yr.ingenInntektsmeldinger,children:[K.jsx(gi,{children:K.jsx(Ie,{id:"InntektsmeldingFaktaPanel.ingen"})}),K.jsx(D0,{})]})}):K.jsx(Dd,{value:lf,children:K.jsxs(Fe,{sort:s,onSortChange:m=>d(m),children:[K.jsx(Fe.Header,{children:K.jsxs(Fe.Row,{children:[K.jsx(Fe.ColumnHeader,{sortKey:"innsendingstidspunkt",sortable:!0,children:K.jsx(Ie,{id:"InntektsmeldingFaktaPanel.tabell.header.innsendt"})}),K.jsx(Fe.ColumnHeader,{sortKey:"arbeidsgiverIdent",sortable:!0,children:K.jsx(Ie,{id:"InntektsmeldingFaktaPanel.tabell.header.arbeidsgiver"})}),K.jsx(Fe.ColumnHeader,{sortKey:"startDatoPermisjon",sortable:!0,children:K.jsx(Ie,{id:"InntektsmeldingFaktaPanel.tabell.header.skjæringstidspunkt"})}),K.jsx(Fe.ColumnHeader,{sortKey:"inntektPrMnd",sortable:!0,children:K.jsx(Ie,{id:"InntektsmeldingFaktaPanel.tabell.header.månedsinntekt"})}),K.jsx(Fe.ColumnHeader,{sortKey:"tilknyttedeBehandlingIder",sortable:!0,children:K.jsx(Ie,{id:"InntektsmeldingFaktaPanel.tabell.header.behandling"})}),K.jsx(Fe.HeaderCell,{})]})}),K.jsx(Fe.Body,{children:c.map(m=>K.jsxs(Fe.ExpandableRow,{expandOnRowClick:!0,contentGutter:"none",togglePlacement:"right",content:K.jsx(Ac,{alleBehandlinger:i,arbeidsgiverOpplysningerPerId:e,inntektsmelding:m}),children:[K.jsx(Fe.DataCell,{children:K.jsx(di,{dateTimeString:m.innsendingstidspunkt,separator:"kl"})}),K.jsx(Fe.DataCell,{children:e[m.arbeidsgiverIdent]?.navn??"-"}),K.jsx(Fe.DataCell,{children:m.startDatoPermisjon?K.jsx(zr,{dateString:m.startDatoPermisjon}):"-"}),K.jsx(Fe.DataCell,{children:K.jsx(or,{beløp:m.inntektPrMnd})}),K.jsx(Fe.DataCell,{children:K.jsx(qR,{behandling:r,inntektsmelding:m})})]},`${m.journalpostId}-${m.internArbeidsforholdId}`))})]})})},BR=({inntektsmeldinger:e,arbeidsgiverOpplysningerPerId:i,sortKey:a,behandling:r})=>a==="arbeidsgiverIdent"?e.slice().sort((s,o)=>{const d=i[s.arbeidsgiverIdent]?.navn,g=i[o.arbeidsgiverIdent]?.navn;return ul(d,g)}):a==="tilknyttedeBehandlingIder"?e.slice().sort((s,o)=>{const d=Vl({behandling:r,inntektsmelding:s}),g=Vl({behandling:r,inntektsmelding:o});return ul(d,g)}):e.slice().sort((s,o)=>{const d=s[a],g=o[a];return ul(d,g)}),ul=(e,i)=>e===void 0?-1:i===void 0?1:e<i?-1:e>i?1:0,qR=({behandling:e,inntektsmelding:i})=>{const a=Vl({behandling:e,inntektsmelding:i});return a==="DENNE"?K.jsxs(lr,{gap:"1",align:"center",children:[K.jsx($s,{className:Yr.behandlingCircleDenne}),K.jsx(Ie,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.denne"})]}):a==="ANDRE"?K.jsxs(lr,{gap:"1",align:"center",children:[K.jsx($s,{className:Yr.behandlingCircleAndre}),K.jsx(Ie,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.andre"})]}):K.jsxs(lr,{gap:"1",align:"center",children:[K.jsx($s,{className:Yr.behandlingCircleIngen}),K.jsx(Ie,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.ingen"})]})},Vl=({behandling:e,inntektsmelding:i})=>i.tilknyttedeBehandlingIder.includes(e.uuid)?"DENNE":i.tilknyttedeBehandlingIder.length>0?"ANDRE":"INGEN";Cl.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingFaktaIndex",props:{inntektsmeldinger:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Inntektsmelding[]"},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
    erPrivatPerson: true;
    identifikator: string;
    navn: string;
    referanse: string;
    fødselsdato: string;
  }
| {
    erPrivatPerson: false;
    identifikator: string;
    referanse: string;
    navn: string;
  }`,elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: true;
  identifikator: string;
  navn: string;
  referanse: string;
  fødselsdato: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"true",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  erPrivatPerson: false;
  identifikator: string;
  referanse: string;
  navn: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"identifikator",value:{name:"string",required:!0}},{key:"referanse",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}]}],raw:`Readonly<
  | {
      erPrivatPerson: true;
      identifikator: string;
      navn: string;
      referanse: string;
      fødselsdato: string;
    }
  | {
      erPrivatPerson: false;
      identifikator: string;
      referanse: string;
      navn: string;
    }
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},alleBehandlinger:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}>`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"BehandlingStatus",required:!0}},{key:"type",value:{name:"BehandlingType",required:!0}},{key:"fristBehandlingPåVent",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"venteÅrsakKode",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:"BehandlingResultatType | BehandlingResultatTypeTilbakekreving",elements:[{name:"BehandlingResultatType"},{name:"BehandlingResultatTypeTilbakekreving"}],required:!0}},{key:"avslagsarsak",value:{name:"union",raw:"Avslagsarsak | null",elements:[{name:"Avslagsarsak"},{name:"null"}],required:!0}},{key:"avslagsarsakFritekst",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"KonsekvensForYtelsen"}],raw:"KonsekvensForYtelsen[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fritekstbrev",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}},{key:"opphørsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}}],raw:`Readonly<{
  id: number;
  type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  avslagsarsak: Avslagsarsak | null;
  avslagsarsakFritekst?: string | null;
  rettenTil?: string;
  konsekvenserForYtelsen?: KonsekvensForYtelsen[];
  vedtaksbrev?: string;
  overskrift: string | null;
  fritekstbrev: string | null;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
  opphørsdato: string | null;
  vedtaksbrevStatus:
    | 'VEDTAKSBREV_PRODUSERES'
    | 'INGEN_VEDTAKSBREV'
    | 'INGEN_VEDTAKSBREV_ANKE'
    | 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
    | 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
    | 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
    | 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE';
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  href: string;
  rel: string;
}>`}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: BehandlingArsakType;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent: string | null;
  venteÅrsakKode: string | null;
  behandlingPåVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: ApiLink[];
  opprettet: string;
  avsluttet?: string | null;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  språkkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKøet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string | null;
  kanHenleggeBehandling?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}`,signature:{properties:[{key:"behandlingTillatteOperasjoner",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  behandlingKanMerkesHaster: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}`,signature:{properties:[{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"behandlingKanMerkesHaster",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"VergeBehandlingmenyValg",required:!0}}]}}],raw:`Readonly<{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  behandlingKanMerkesHaster: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}>`,required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig: boolean;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"boolean",required:!0}}]}}],raw:"Brevmal[]",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: SkjermlenkeType;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: VurderÅrsak[];
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
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"boolean",required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]",required:!1}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
  vurderPaNyttArsaker?: VurderÅrsak[];
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
  skjermlenkeType: SkjermlenkeType;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"union",raw:"Aksjonspunkt | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"AksjonspunktKode",required:!0}},{key:"status",value:{name:"AksjonspunktStatus",required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"VilkarType",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"VurderÅrsak[] | null",elements:[{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]"},{name:"null"}],required:!1}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"aksjonspunktType",value:{name:"AksjonspunktType",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  definisjon: AksjonspunktKode;
  status: AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType?: VilkarType;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean | null;
  vurderPaNyttArsaker?: VurderÅrsak[] | null;
  besluttersBegrunnelse?: string | null;
  aksjonspunktType?: AksjonspunktType;
  kanLoses: boolean;
  endretAv?: string | null;
  endretTidspunkt?: string | null;
}>`},{name:"null"}],required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"iayFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}},{key:"medlFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""}}};const dl={innsendingstidspunkt:"2024-08-08T00:00:00",kildeSystem:"Altinn",aktiveNaturalytelser:[],refusjonsperioder:[],innsendingsårsak:"NY",arbeidsgiverIdent:"1",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"},CR={title:"fakta/fakta-inntektsmelding",component:Cl,decorators:[g0],render:e=>K.jsx(Cl,{...e})},Ur={args:{alleBehandlinger:[{uuid:"UUID1",type:"BT-002",opprettet:"2024-07-13",avsluttet:"2024-08-13"},{uuid:"UUID2",type:"BT-003",opprettet:"2024-07-14",avsluttet:"2024-08-14"},{uuid:"UUID3",type:"BT-004",opprettet:"2024-07-15",avsluttet:"2024-08-15"}],arbeidsgiverOpplysningerPerId:{1:{navn:"Rema 1000"},2:{navn:"Kiwi"},3:{navn:"Meny"}},behandling:{uuid:"UUID2"},inntektsmeldinger:[{...dl,tilknyttedeBehandlingIder:["UUID1"],inntektPrMnd:10000.5,innsendingstidspunkt:"2024-07-20T00:00:00",startDatoPermisjon:"2024-10-10",refusjonPrMnd:void 0,journalpostId:"1",refusjonsperioder:[{refusjonsbeløp:{verdi:5e3},indexKey:"1",fom:"2024-01-10"},{refusjonsbeløp:{verdi:3e3},indexKey:"2",fom:"2024-01-09"}]},{...dl,tilknyttedeBehandlingIder:["UUID1","UUID2"],inntektPrMnd:2e4,innsendingstidspunkt:"2024-08-01T00:00:00",kildeSystem:"FS22",refusjonPrMnd:void 0,arbeidsgiverIdent:"2",journalpostId:"2"},{...dl,tilknyttedeBehandlingIder:[],inntektPrMnd:3e4,innsendingstidspunkt:"2024-09-10T00:00:00",innsendingsårsak:"ENDRING",kildeSystem:"NAV_NO",startDatoPermisjon:"2024-11-11",arbeidsgiverIdent:"3",journalpostId:"3",aktiveNaturalytelser:[{periode:{fomDato:"2024-01-09",tomDato:"2024-10-09"},type:gl.ELEKTRISK_KOMMUNIKASJON,beloepPerMnd:{verdi:999},indexKey:"1"},{periode:{fomDato:"2024-01-11",tomDato:"2024-10-11"},type:gl.LOSJI,beloepPerMnd:{verdi:10},indexKey:"2"}]}]}},ei={args:{...Ur.args,inntektsmeldinger:[]}};Ur.parameters={...Ur.parameters,docs:{...Ur.parameters?.docs,source:{originalSource:`{
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
}`,...Ur.parameters?.docs?.source}}};ei.parameters={...ei.parameters,docs:{...ei.parameters?.docs,source:{originalSource:`{
  args: {
    ...InntektsmeldingDefault.args,
    inntektsmeldinger: []
  }
}`,...ei.parameters?.docs?.source}}};const VR=["InntektsmeldingDefault","IngenInntektsmeldinger"];export{ei as IngenInntektsmeldinger,Ur as InntektsmeldingDefault,VR as __namedExportsOrder,CR as default};
