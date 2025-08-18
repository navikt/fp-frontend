import{g as Hg,r as A,u as mt,_ as Rd,s as Sd,c as Gg,a as Ne,R as U,b as Vb,d as fr,T as Hb,S as zr,e as Ug,f as $g,h as Gb,o as Yg,A as Ub,i as Kn,j as L,k as cr,l as $r,m as Wa,E as jd,n as Wg,P as Nd,w as $b}from"./iframe-DUsSRdpo.js";import{r as Yb}from"./index-Dx5mUHGV.js";import"./preload-helper-D9Z9MdNV.js";var zg=Yb();const Id=Hg(zg);function Wb(e,i){var r=e.values,a=Rd(e,["values"]),s=i.values,o=Rd(i,["values"]);return Sd(s,r)&&Sd(a,o)}function Xg(e){var i=mt(),r=i.formatMessage,a=i.textComponent,s=a===void 0?A.Fragment:a,o=e.id,d=e.description,g=e.defaultMessage,c=e.values,p=e.children,k=e.tagName,y=k===void 0?s:k,E=e.ignoreTag,T={id:o,description:d,defaultMessage:g},O=r(T,c,{ignoreTag:E});return typeof p=="function"?p(Array.isArray(O)?O:[O]):y?A.createElement(y,null,O):A.createElement(A.Fragment,null,O)}Xg.displayName="FormattedMessage";var je=A.memo(Xg,Wb);je.displayName="MemoizedFormattedMessage";var dl=(e=>(e.ELEKTRISK_KOMMUNIKASJON="ELEKTRISK_KOMMUNIKASJON",e.LOSJI="LOSJI",e))(dl||{});const zb=(e,i,r)=>`/fpsak/api/dokument/hent-dokument?saksnummer=${e}&journalpostId=${i}&dokumentId=${r}`,Xb=(e,i,r,a)=>{const s=zb(e,i,r),o=`${i}-${r}`;a&&Zb(s,o,a)},Zb=(e,i,r)=>{const a=window.open(e,i);a&&setTimeout(()=>{a.document.title=r},1e3)},mr=e=>Gg({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var Jb=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const ri=A.forwardRef((e,i)=>{var{className:r,size:a="medium",as:s="p",spacing:o,truncate:d,weight:g="regular",align:c,visuallyHidden:p,textColor:k}=e,y=Jb(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:E}=Ne();return U.createElement(s,Object.assign({},y,{ref:i,className:E(r,"navds-body-long",`navds-body-long--${a}`,mr({spacing:o,truncate:d,weight:g,align:c,visuallyHidden:p,textColor:k}))}))});var Qb=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const di=A.forwardRef((e,i)=>{var{className:r,size:a="medium",as:s="p",spacing:o,truncate:d,weight:g="regular",align:c,visuallyHidden:p,textColor:k}=e,y=Qb(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:E}=Ne();return U.createElement(s,Object.assign({},y,{ref:i,className:E(r,"navds-body-short",`navds-body-short--${a}`,mr({spacing:o,truncate:d,weight:g,align:c,visuallyHidden:p,textColor:k}))}))});var e0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const n0=A.forwardRef((e,i)=>{var{className:r,size:a="medium",spacing:s,uppercase:o,as:d="p",truncate:g,weight:c="regular",align:p,visuallyHidden:k,textColor:y}=e,E=e0(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:T}=Ne();return U.createElement(d,Object.assign({},E,{ref:i,className:T(r,"navds-detail",mr({spacing:s,truncate:g,weight:c,align:p,visuallyHidden:k,textColor:y,uppercase:o}),{"navds-detail--small":a==="small"})}))});var t0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const r0=A.forwardRef((e,i)=>{var{children:r,className:a,size:s,spacing:o,as:d="p",showIcon:g=!1}=e,c=t0(e,["children","className","size","spacing","as","showIcon"]);const{cn:p}=Ne();return U.createElement(d,Object.assign({},c,{ref:i,className:p("navds-error-message","navds-label",a,mr({spacing:o}),{"navds-label--small":s==="small","navds-error-message--show-icon":g})}),g&&U.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},U.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),r)});var a0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const Zg=A.forwardRef((e,i)=>{var{level:r="1",size:a,className:s,as:o,spacing:d,align:g,visuallyHidden:c,textColor:p}=e,k=a0(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:y}=Ne(),E=o??`h${r}`;return U.createElement(E,Object.assign({},k,{ref:i,className:y(s,"navds-heading",`navds-heading--${a}`,mr({spacing:d,align:g,visuallyHidden:c,textColor:p}))}))});var i0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};A.forwardRef((e,i)=>{var{className:r,spacing:a,as:s="p"}=e,o=i0(e,["className","spacing","as"]);const{cn:d}=Ne();return U.createElement(s,Object.assign({},o,{ref:i,className:d(r,"navds-ingress",{"navds-typo--spacing":!!a})}))});var s0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const Dl=A.forwardRef((e,i)=>{var{className:r,size:a="medium",as:s="label",spacing:o,visuallyHidden:d,textColor:g}=e,c=s0(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:p}=Ne();return U.createElement(s,Object.assign({},c,{ref:i,className:p(r,"navds-label",mr({spacing:o,visuallyHidden:d,textColor:g}),{"navds-label--small":a==="small"})}))});function Xr(e,i){const r=Object.entries(e).filter(([a])=>!i.includes(a));return Object.fromEntries(r)}let Od=0;function l0(e){const[i,r]=A.useState(e),a=e||i;return A.useEffect(()=>{i==null&&(Od+=1,r(`aksel-id-${Od}`))},[i]),a}const Pd=U.useId;function gi(e){var i;if(Pd!==void 0){const r=Pd();return e??r.replace(/(:)/g,"")}return(i=l0(e))!==null&&i!==void 0?i:""}function Bd(e,i=[]){const r=A.useRef(e);return A.useEffect(()=>{r.current=e}),A.useCallback((...a)=>{var s;return(s=r.current)===null||s===void 0?void 0:s.call(r,...a)},i)}function Ml({value:e,defaultValue:i,onChange:r}){const a=Bd(r),[s,o]=A.useState(i),d=e!==void 0,g=d?e:s,c=Bd(p=>{const y=typeof p=="function"?p(g):p;d||o(y),a(y)},[d,a,g]);return[g,c]}let xd=0;function o0(e){const[i,r]=A.useState(e),a=e||i;return A.useEffect(()=>{i==null&&(xd+=1,r(`aksel-icon-${xd}`))},[i]),a}const qd=U.useId;function pt(e){var i;return qd!==void 0?qd().replace(/(:)/g,""):(i=o0(e))!==null&&i!==void 0?i:""}var u0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const d0=A.forwardRef((e,i)=>{var{title:r,titleId:a}=e,s=u0(e,["title","titleId"]);let o=pt();return o=r?a||"title-"+o:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},s),r?A.createElement("title",{id:o},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13.672 3.825a.75.75 0 0 1 .791.085l7 5.5a.75.75 0 0 1 0 1.18l-7 5.5a.75.75 0 0 1-1.213-.59v-2.724a9.1 9.1 0 0 0-2.63.565c-2.284.87-3.759 2.562-4.671 4.077a12.4 12.4 0 0 0-.957 1.965 10 10 0 0 0-.263.792l-.001.007A.75.75 0 0 1 3.25 20c0-1.654.322-3.941 1.224-6.123.903-2.184 2.413-4.32 4.823-5.558 1.133-.581 2.445-.954 3.953-1.046V4.5a.75.75 0 0 1 .422-.675M5.505 15.412c1.038-1.344 2.519-2.688 4.582-3.473 1.136-.432 2.435-.689 3.913-.689a.75.75 0 0 1 .75.75v1.957L19.786 10 14.75 6.043V8a.75.75 0 0 1-.75.75c-1.606 0-2.927.344-4.018.904-1.996 1.025-3.306 2.824-4.121 4.796q-.197.479-.356.962",clipRule:"evenodd"}))});var g0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const f0=A.forwardRef((e,i)=>{var{title:r,titleId:a}=e,s=g0(e,["title","titleId"]);let o=pt();return o=r?a||"title-"+o:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},s),r?A.createElement("title",{id:o},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.47 21.03a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22V9.5a.75.75 0 0 0-1.5 0v9.19l-2.22-2.22a.75.75 0 1 0-1.06 1.06zM4.03 7.53l2.22-2.22v9.19a.75.75 0 0 0 1.5 0V5.31l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06",clipRule:"evenodd"}))});var c0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const Jg=A.forwardRef((e,i)=>{var{title:r,titleId:a}=e,s=c0(e,["title","titleId"]);let o=pt();return o=r?a||"title-"+o:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},s),r?A.createElement("title",{id:o},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var m0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const Hs=A.forwardRef((e,i)=>{var{title:r,titleId:a}=e,s=m0(e,["title","titleId"]);let o=pt();return o=r?a||"title-"+o:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},s),r?A.createElement("title",{id:o},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.5 12C1.5 6.201 6.201 1.5 12 1.5S22.5 6.201 22.5 12 17.799 22.5 12 22.5 1.5 17.799 1.5 12",clipRule:"evenodd"}))});var p0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const h0=A.forwardRef((e,i)=>{var{title:r,titleId:a}=e,s=p0(e,["title","titleId"]);let o=pt();return o=r?a||"title-"+o:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},s),r?A.createElement("title",{id:o},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.1 2.05a.75.75 0 1 0-1.2.9l.98 1.306a.25.25 0 0 1-.024.327l-.773.773a1.75 1.75 0 0 0-.163 2.288l.98 1.306a.75.75 0 0 0 1.2-.9l-.98-1.306a.25.25 0 0 1 .024-.327l.773-.773a1.75 1.75 0 0 0 .163-2.288zm1.75 5.007a.75.75 0 0 1 .83-.66c1.33.152 2.506.417 3.372.776.431.178.826.396 1.125.666.298.269.573.659.573 1.161q0 .404-.032.8.224-.065.446-.092c.556-.069 1.177.037 1.634.494.553.552.592 1.332.43 1.98-.166.665-.57 1.341-1.137 1.91-.568.567-1.244.97-1.909 1.136q-.241.06-.497.078.401.165.733.358c.657.38 1.332.977 1.332 1.836 0 .695-.45 1.219-.933 1.576-.498.369-1.172.669-1.936.907-1.539.481-3.618.767-5.881.767s-4.342-.286-5.88-.767c-.765-.238-1.439-.538-1.937-.907-.484-.357-.933-.881-.933-1.576 0-.859.675-1.457 1.332-1.836.476-.276 1.068-.512 1.739-.709C5.028 13.38 4.25 11.272 4.25 9c0-.467.238-.838.51-1.102.269-.262.624-.474 1.007-.647.771-.35 1.817-.614 3.004-.784a.75.75 0 0 1 .211 1.485c-1.112.159-2.004.397-2.596.665-.299.135-.482.26-.58.356L5.779 9c.06.066.194.178.462.314.333.168.795.332 1.374.474 1.155.284 2.688.462 4.385.462s3.23-.178 4.385-.462c.579-.142 1.04-.306 1.374-.474.268-.136.402-.248.462-.314l-.049-.048c-.123-.11-.345-.25-.693-.393-.69-.286-1.716-.529-2.969-.672a.75.75 0 0 1-.66-.83m4.623 6.754a9.3 9.3 0 0 0 .925-2.204c.355-.251.693-.379.95-.41.26-.033.36.036.39.066.033.033.129.18.035.555-.09.36-.334.804-.742 1.212-.409.409-.854.653-1.213.743a1.1 1.1 0 0 1-.345.038m-.422-2.983c-.387.16-.829.299-1.308.417-1.296.319-2.953.505-4.743.505s-3.447-.186-4.743-.505a9 9 0 0 1-1.308-.417c.707 3.173 3.21 5.422 6.051 5.422 2.84 0 5.344-2.25 6.051-5.422M12 17.75c1.665 0 3.186-.582 4.43-1.565.976.214 1.736.487 2.237.777.565.326.583.538.583.538 0 .003 0 .031-.04.093-.044.068-.13.163-.284.277-.311.23-.81.468-1.493.682-1.357.424-3.278.698-5.433.698s-4.076-.274-5.433-.698c-.683-.214-1.181-.452-1.493-.682a1.2 1.2 0 0 1-.284-.277c-.04-.062-.04-.09-.04-.093 0 0 .018-.212.583-.538.501-.29 1.262-.563 2.236-.777 1.245.983 2.766 1.565 4.431 1.565",clipRule:"evenodd"}))});var k0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const Qg=A.forwardRef((e,i)=>{var{title:r,titleId:a}=e,s=k0(e,["title","titleId"]);let o=pt();return o=r?a||"title-"+o:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},s),r?A.createElement("title",{id:o},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10.5 3.25a7.25 7.25 0 1 0 4.569 12.88l5.411 5.41a.75.75 0 1 0 1.06-1.06l-5.41-5.411A7.25 7.25 0 0 0 10.5 3.25M4.75 10.5a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0",clipRule:"evenodd"}))});var v0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const y0=A.forwardRef((e,i)=>{var{title:r,titleId:a}=e,s=v0(e,["title","titleId"]);let o=pt();return o=r?a||"title-"+o:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},s),r?A.createElement("title",{id:o},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 18.53a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V6a.75.75 0 0 1 1.5 0v10.19l2.22-2.22a.75.75 0 1 1 1.06 1.06zM2.75 6.25a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM2 17a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 2 17",clipRule:"evenodd"}))});var b0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const E0=A.forwardRef((e,i)=>{var{title:r,titleId:a}=e,s=b0(e,["title","titleId"]);let o=pt();return o=r?a||"title-"+o:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},s),r?A.createElement("title",{id:o},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 5.47a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 1 0 1.06 1.06l2.22-2.22V18a.75.75 0 0 0 1.5 0V7.81l2.22 2.22a.75.75 0 1 0 1.06-1.06zM2.75 17.75a.75.75 0 0 1 0-1.5h9.5a.75.75 0 0 1 0 1.5zm0-5a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5zM2 7c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5A.75.75 0 0 0 2 7",clipRule:"evenodd"}))});var T0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const Dd=A.forwardRef((e,i)=>{var{title:r,titleId:a}=e,s=T0(e,["title","titleId"]);let o=pt();return o=r?a||"title-"+o:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},s),r?A.createElement("title",{id:o},r):null,A.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});function fi(e,i,{checkForDefaultPrevented:r=!0}={}){return function(s){if(e?.(s),r===!1||!s.defaultPrevented)return i?.(s)}}const[yA,_0]=Vb({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"});function Gs(e){return(i={})=>{const r=i.width?String(i.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}function Dr(e){return(i,r)=>{const a=r?.context?String(r.context):"standalone";let s;if(a==="formatting"&&e.formattingValues){const d=e.defaultFormattingWidth||e.defaultWidth,g=r?.width?String(r.width):d;s=e.formattingValues[g]||e.formattingValues[d]}else{const d=e.defaultWidth,g=r?.width?String(r.width):e.defaultWidth;s=e.values[g]||e.values[d]}const o=e.argumentCallback?e.argumentCallback(i):i;return s[o]}}function Mr(e){return(i,r={})=>{const a=r.width,s=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],o=i.match(s);if(!o)return null;const d=o[0],g=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(g)?A0(g,y=>y.test(d)):w0(g,y=>y.test(d));let p;p=e.valueCallback?e.valueCallback(c):c,p=r.valueCallback?r.valueCallback(p):p;const k=i.slice(d.length);return{value:p,rest:k}}}function w0(e,i){for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&i(e[r]))return r}function A0(e,i){for(let r=0;r<e.length;r++)if(i(e[r]))return r}function R0(e){return(i,r={})=>{const a=i.match(e.matchPattern);if(!a)return null;const s=a[0],o=i.match(e.parsePattern);if(!o)return null;let d=e.valueCallback?e.valueCallback(o[0]):o[0];d=r.valueCallback?r.valueCallback(d):d;const g=i.slice(s.length);return{value:d,rest:g}}}const S0={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},j0=(e,i,r)=>{let a;const s=S0[e];return typeof s=="string"?a=s:i===1?a=s.one:a=s.other.replace("{{count}}",String(i)),r?.addSuffix?r.comparison&&r.comparison>0?"om "+a:a+" siden":a},N0={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},I0={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},O0={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},P0={date:Gs({formats:N0,defaultWidth:"full"}),time:Gs({formats:I0,defaultWidth:"full"}),dateTime:Gs({formats:O0,defaultWidth:"full"})},B0={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},x0=(e,i,r,a)=>B0[e],q0={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},D0={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},M0={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},L0={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},F0={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},K0=(e,i)=>Number(e)+".",C0={ordinalNumber:K0,era:Dr({values:q0,defaultWidth:"wide"}),quarter:Dr({values:D0,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Dr({values:M0,defaultWidth:"wide"}),day:Dr({values:L0,defaultWidth:"wide"}),dayPeriod:Dr({values:F0,defaultWidth:"wide"})},V0=/^(\d+)\.?/i,H0=/\d+/i,G0={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},U0={any:[/^f/i,/^e/i]},$0={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},Y0={any:[/1/i,/2/i,/3/i,/4/i]},W0={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},z0={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},X0={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},Z0={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},J0={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},Q0={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},eE={ordinalNumber:R0({matchPattern:V0,parsePattern:H0,valueCallback:e=>parseInt(e,10)}),era:Mr({matchPatterns:G0,defaultMatchWidth:"wide",parsePatterns:U0,defaultParseWidth:"any"}),quarter:Mr({matchPatterns:$0,defaultMatchWidth:"wide",parsePatterns:Y0,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Mr({matchPatterns:W0,defaultMatchWidth:"wide",parsePatterns:z0,defaultParseWidth:"any"}),day:Mr({matchPatterns:X0,defaultMatchWidth:"wide",parsePatterns:Z0,defaultParseWidth:"any"}),dayPeriod:Mr({matchPatterns:J0,defaultMatchWidth:"any",parsePatterns:Q0,defaultParseWidth:"any"})},nE={code:"nb",formatDistance:j0,formatLong:P0,formatRelative:x0,localize:C0,match:eE,options:{weekStartsOn:1,firstWeekContainsDate:4}},tE={global:{dateLocale:nE,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},rE=A.createContext({locale:tE}),ef=()=>A.useContext(rE);var aE=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const iE=A.forwardRef((e,i)=>{var r,a,s,{rootElement:o,asChild:d}=e,g=aE(e,["rootElement","asChild"]);const c=fr(!1),p=(r=ef())===null||r===void 0?void 0:r.rootElement,k=(a=o??p)!==null&&a!==void 0?a:(s=globalThis?.document)===null||s===void 0?void 0:s.body,y=d?zr:"div";return c?k?Id.createPortal(U.createElement(Hb,{theme:c.theme,asChild:!0,hasBackground:!1,"data-color":c.color},U.createElement(y,Object.assign({ref:i,"data-aksel-portal":""},g))),k):null:k?Id.createPortal(U.createElement(y,Object.assign({ref:i,"data-aksel-portal":""},g)),k):null}),or=Math.min,Ft=Math.max,ai=Math.round,za=Math.floor,zn=e=>({x:e,y:e}),sE={left:"right",right:"left",bottom:"top",top:"bottom"},lE={start:"end",end:"start"};function gl(e,i,r){return Ft(e,or(i,r))}function Zr(e,i){return typeof e=="function"?e(i):e}function Kt(e){return e.split("-")[0]}function Jr(e){return e.split("-")[1]}function nf(e){return e==="x"?"y":"x"}function Ll(e){return e==="y"?"height":"width"}function ur(e){return["top","bottom"].includes(Kt(e))?"y":"x"}function Fl(e){return nf(ur(e))}function oE(e,i,r){r===void 0&&(r=!1);const a=Jr(e),s=Fl(e),o=Ll(s);let d=s==="x"?a===(r?"end":"start")?"right":"left":a==="start"?"bottom":"top";return i.reference[o]>i.floating[o]&&(d=ii(d)),[d,ii(d)]}function uE(e){const i=ii(e);return[fl(e),i,fl(i)]}function fl(e){return e.replace(/start|end/g,i=>lE[i])}function dE(e,i,r){const a=["left","right"],s=["right","left"],o=["top","bottom"],d=["bottom","top"];switch(e){case"top":case"bottom":return r?i?s:a:i?a:s;case"left":case"right":return i?o:d;default:return[]}}function gE(e,i,r,a){const s=Jr(e);let o=dE(Kt(e),r==="start",a);return s&&(o=o.map(d=>d+"-"+s),i&&(o=o.concat(o.map(fl)))),o}function ii(e){return e.replace(/left|right|bottom|top/g,i=>sE[i])}function fE(e){return{top:0,right:0,bottom:0,left:0,...e}}function tf(e){return typeof e!="number"?fE(e):{top:e,right:e,bottom:e,left:e}}function si(e){const{x:i,y:r,width:a,height:s}=e;return{width:a,height:s,top:r,left:i,right:i+a,bottom:r+s,x:i,y:r}}function Md(e,i,r){let{reference:a,floating:s}=e;const o=ur(i),d=Fl(i),g=Ll(d),c=Kt(i),p=o==="y",k=a.x+a.width/2-s.width/2,y=a.y+a.height/2-s.height/2,E=a[g]/2-s[g]/2;let T;switch(c){case"top":T={x:k,y:a.y-s.height};break;case"bottom":T={x:k,y:a.y+a.height};break;case"right":T={x:a.x+a.width,y};break;case"left":T={x:a.x-s.width,y};break;default:T={x:a.x,y:a.y}}switch(Jr(i)){case"start":T[d]-=E*(r&&p?-1:1);break;case"end":T[d]+=E*(r&&p?-1:1);break}return T}const cE=async(e,i,r)=>{const{placement:a="bottom",strategy:s="absolute",middleware:o=[],platform:d}=r,g=o.filter(Boolean),c=await(d.isRTL==null?void 0:d.isRTL(i));let p=await d.getElementRects({reference:e,floating:i,strategy:s}),{x:k,y}=Md(p,a,c),E=a,T={},O=0;for(let _=0;_<g.length;_++){const{name:b,fn:R}=g[_],{x:P,y:j,data:H,reset:I}=await R({x:k,y,initialPlacement:a,placement:E,strategy:s,middlewareData:T,rects:p,platform:d,elements:{reference:e,floating:i}});k=P??k,y=j??y,T={...T,[b]:{...T[b],...H}},I&&O<=50&&(O++,typeof I=="object"&&(I.placement&&(E=I.placement),I.rects&&(p=I.rects===!0?await d.getElementRects({reference:e,floating:i,strategy:s}):I.rects),{x:k,y}=Md(p,E,c)),_=-1)}return{x:k,y,placement:E,strategy:s,middlewareData:T}};async function rf(e,i){var r;i===void 0&&(i={});const{x:a,y:s,platform:o,rects:d,elements:g,strategy:c}=e,{boundary:p="clippingAncestors",rootBoundary:k="viewport",elementContext:y="floating",altBoundary:E=!1,padding:T=0}=Zr(i,e),O=tf(T),b=g[E?y==="floating"?"reference":"floating":y],R=si(await o.getClippingRect({element:(r=await(o.isElement==null?void 0:o.isElement(b)))==null||r?b:b.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(g.floating)),boundary:p,rootBoundary:k,strategy:c})),P=y==="floating"?{x:a,y:s,width:d.floating.width,height:d.floating.height}:d.reference,j=await(o.getOffsetParent==null?void 0:o.getOffsetParent(g.floating)),H=await(o.isElement==null?void 0:o.isElement(j))?await(o.getScale==null?void 0:o.getScale(j))||{x:1,y:1}:{x:1,y:1},I=si(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:g,rect:P,offsetParent:j,strategy:c}):P);return{top:(R.top-I.top+O.top)/H.y,bottom:(I.bottom-R.bottom+O.bottom)/H.y,left:(R.left-I.left+O.left)/H.x,right:(I.right-R.right+O.right)/H.x}}const mE=e=>({name:"arrow",options:e,async fn(i){const{x:r,y:a,placement:s,rects:o,platform:d,elements:g,middlewareData:c}=i,{element:p,padding:k=0}=Zr(e,i)||{};if(p==null)return{};const y=tf(k),E={x:r,y:a},T=Fl(s),O=Ll(T),_=await d.getDimensions(p),b=T==="y",R=b?"top":"left",P=b?"bottom":"right",j=b?"clientHeight":"clientWidth",H=o.reference[O]+o.reference[T]-E[T]-o.floating[O],I=E[T]-o.reference[T],V=await(d.getOffsetParent==null?void 0:d.getOffsetParent(p));let x=V?V[j]:0;(!x||!await(d.isElement==null?void 0:d.isElement(V)))&&(x=g.floating[j]||o.floating[O]);const q=H/2-I/2,z=x/2-_[O]/2-1,Q=or(y[R],z),Z=or(y[P],z),J=Q,F=x-_[O]-Z,D=x/2-_[O]/2+q,X=gl(J,D,F),te=!c.arrow&&Jr(s)!=null&&D!==X&&o.reference[O]/2-(D<J?Q:Z)-_[O]/2<0,W=te?D<J?D-J:D-F:0;return{[T]:E[T]+W,data:{[T]:X,centerOffset:D-X-W,...te&&{alignmentOffset:W}},reset:te}}}),pE=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(i){var r,a;const{placement:s,middlewareData:o,rects:d,initialPlacement:g,platform:c,elements:p}=i,{mainAxis:k=!0,crossAxis:y=!0,fallbackPlacements:E,fallbackStrategy:T="bestFit",fallbackAxisSideDirection:O="none",flipAlignment:_=!0,...b}=Zr(e,i);if((r=o.arrow)!=null&&r.alignmentOffset)return{};const R=Kt(s),P=ur(g),j=Kt(g)===g,H=await(c.isRTL==null?void 0:c.isRTL(p.floating)),I=E||(j||!_?[ii(g)]:uE(g)),V=O!=="none";!E&&V&&I.push(...gE(g,_,O,H));const x=[g,...I],q=await rf(i,b),z=[];let Q=((a=o.flip)==null?void 0:a.overflows)||[];if(k&&z.push(q[R]),y){const D=oE(s,d,H);z.push(q[D[0]],q[D[1]])}if(Q=[...Q,{placement:s,overflows:z}],!z.every(D=>D<=0)){var Z,J;const D=(((Z=o.flip)==null?void 0:Z.index)||0)+1,X=x[D];if(X)return{data:{index:D,overflows:Q},reset:{placement:X}};let te=(J=Q.filter(W=>W.overflows[0]<=0).sort((W,G)=>W.overflows[1]-G.overflows[1])[0])==null?void 0:J.placement;if(!te)switch(T){case"bestFit":{var F;const W=(F=Q.filter(G=>{if(V){const Y=ur(G.placement);return Y===P||Y==="y"}return!0}).map(G=>[G.placement,G.overflows.filter(Y=>Y>0).reduce((Y,ae)=>Y+ae,0)]).sort((G,Y)=>G[1]-Y[1])[0])==null?void 0:F[0];W&&(te=W);break}case"initialPlacement":te=g;break}if(s!==te)return{reset:{placement:te}}}return{}}}};async function hE(e,i){const{placement:r,platform:a,elements:s}=e,o=await(a.isRTL==null?void 0:a.isRTL(s.floating)),d=Kt(r),g=Jr(r),c=ur(r)==="y",p=["left","top"].includes(d)?-1:1,k=o&&c?-1:1,y=Zr(i,e);let{mainAxis:E,crossAxis:T,alignmentAxis:O}=typeof y=="number"?{mainAxis:y,crossAxis:0,alignmentAxis:null}:{mainAxis:y.mainAxis||0,crossAxis:y.crossAxis||0,alignmentAxis:y.alignmentAxis};return g&&typeof O=="number"&&(T=g==="end"?O*-1:O),c?{x:T*k,y:E*p}:{x:E*p,y:T*k}}const kE=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(i){var r,a;const{x:s,y:o,placement:d,middlewareData:g}=i,c=await hE(i,e);return d===((r=g.offset)==null?void 0:r.placement)&&(a=g.arrow)!=null&&a.alignmentOffset?{}:{x:s+c.x,y:o+c.y,data:{...c,placement:d}}}}},vE=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(i){const{x:r,y:a,placement:s}=i,{mainAxis:o=!0,crossAxis:d=!1,limiter:g={fn:b=>{let{x:R,y:P}=b;return{x:R,y:P}}},...c}=Zr(e,i),p={x:r,y:a},k=await rf(i,c),y=ur(Kt(s)),E=nf(y);let T=p[E],O=p[y];if(o){const b=E==="y"?"top":"left",R=E==="y"?"bottom":"right",P=T+k[b],j=T-k[R];T=gl(P,T,j)}if(d){const b=y==="y"?"top":"left",R=y==="y"?"bottom":"right",P=O+k[b],j=O-k[R];O=gl(P,O,j)}const _=g.fn({...i,[E]:T,[y]:O});return{..._,data:{x:_.x-r,y:_.y-a,enabled:{[E]:o,[y]:d}}}}}};function ci(){return typeof window<"u"}function pr(e){return af(e)?(e.nodeName||"").toLowerCase():"#document"}function cn(e){var i;return(e==null||(i=e.ownerDocument)==null?void 0:i.defaultView)||window}function Jn(e){var i;return(i=(af(e)?e.ownerDocument:e.document)||window.document)==null?void 0:i.documentElement}function af(e){return ci()?e instanceof Node||e instanceof cn(e).Node:!1}function Pe(e){return ci()?e instanceof Element||e instanceof cn(e).Element:!1}function Tn(e){return ci()?e instanceof HTMLElement||e instanceof cn(e).HTMLElement:!1}function li(e){return!ci()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof cn(e).ShadowRoot}function Qr(e){const{overflow:i,overflowX:r,overflowY:a,display:s}=Bn(e);return/auto|scroll|overlay|hidden|clip/.test(i+a+r)&&!["inline","contents"].includes(s)}function yE(e){return["table","td","th"].includes(pr(e))}function mi(e){return[":popover-open",":modal"].some(i=>{try{return e.matches(i)}catch{return!1}})}function Kl(e){const i=pi(),r=Pe(e)?Bn(e):e;return["transform","translate","scale","rotate","perspective"].some(a=>r[a]?r[a]!=="none":!1)||(r.containerType?r.containerType!=="normal":!1)||!i&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!i&&(r.filter?r.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(a=>(r.willChange||"").includes(a))||["paint","layout","strict","content"].some(a=>(r.contain||"").includes(a))}function bE(e){let i=ct(e);for(;Tn(i)&&!ft(i);){if(Kl(i))return i;if(mi(i))return null;i=ct(i)}return null}function pi(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ft(e){return["html","body","#document"].includes(pr(e))}function Bn(e){return cn(e).getComputedStyle(e)}function hi(e){return Pe(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function ct(e){if(pr(e)==="html")return e;const i=e.assignedSlot||e.parentNode||li(e)&&e.host||Jn(e);return li(i)?i.host:i}function sf(e){const i=ct(e);return ft(i)?e.ownerDocument?e.ownerDocument.body:e.body:Tn(i)&&Qr(i)?i:sf(i)}function At(e,i,r){var a;i===void 0&&(i=[]),r===void 0&&(r=!0);const s=sf(e),o=s===((a=e.ownerDocument)==null?void 0:a.body),d=cn(s);if(o){const g=cl(d);return i.concat(d,d.visualViewport||[],Qr(s)?s:[],g&&r?At(g):[])}return i.concat(s,At(s,[],r))}function cl(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function lf(e){const i=Bn(e);let r=parseFloat(i.width)||0,a=parseFloat(i.height)||0;const s=Tn(e),o=s?e.offsetWidth:r,d=s?e.offsetHeight:a,g=ai(r)!==o||ai(a)!==d;return g&&(r=o,a=d),{width:r,height:a,$:g}}function Cl(e){return Pe(e)?e:e.contextElement}function ir(e){const i=Cl(e);if(!Tn(i))return zn(1);const r=i.getBoundingClientRect(),{width:a,height:s,$:o}=lf(i);let d=(o?ai(r.width):r.width)/a,g=(o?ai(r.height):r.height)/s;return(!d||!Number.isFinite(d))&&(d=1),(!g||!Number.isFinite(g))&&(g=1),{x:d,y:g}}const EE=zn(0);function of(e){const i=cn(e);return!pi()||!i.visualViewport?EE:{x:i.visualViewport.offsetLeft,y:i.visualViewport.offsetTop}}function TE(e,i,r){return i===void 0&&(i=!1),!r||i&&r!==cn(e)?!1:i}function Ct(e,i,r,a){i===void 0&&(i=!1),r===void 0&&(r=!1);const s=e.getBoundingClientRect(),o=Cl(e);let d=zn(1);i&&(a?Pe(a)&&(d=ir(a)):d=ir(e));const g=TE(o,r,a)?of(o):zn(0);let c=(s.left+g.x)/d.x,p=(s.top+g.y)/d.y,k=s.width/d.x,y=s.height/d.y;if(o){const E=cn(o),T=a&&Pe(a)?cn(a):a;let O=E,_=cl(O);for(;_&&a&&T!==O;){const b=ir(_),R=_.getBoundingClientRect(),P=Bn(_),j=R.left+(_.clientLeft+parseFloat(P.paddingLeft))*b.x,H=R.top+(_.clientTop+parseFloat(P.paddingTop))*b.y;c*=b.x,p*=b.y,k*=b.x,y*=b.y,c+=j,p+=H,O=cn(_),_=cl(O)}}return si({width:k,height:y,x:c,y:p})}function Vl(e,i){const r=hi(e).scrollLeft;return i?i.left+r:Ct(Jn(e)).left+r}function uf(e,i,r){r===void 0&&(r=!1);const a=e.getBoundingClientRect(),s=a.left+i.scrollLeft-(r?0:Vl(e,a)),o=a.top+i.scrollTop;return{x:s,y:o}}function _E(e){let{elements:i,rect:r,offsetParent:a,strategy:s}=e;const o=s==="fixed",d=Jn(a),g=i?mi(i.floating):!1;if(a===d||g&&o)return r;let c={scrollLeft:0,scrollTop:0},p=zn(1);const k=zn(0),y=Tn(a);if((y||!y&&!o)&&((pr(a)!=="body"||Qr(d))&&(c=hi(a)),Tn(a))){const T=Ct(a);p=ir(a),k.x=T.x+a.clientLeft,k.y=T.y+a.clientTop}const E=d&&!y&&!o?uf(d,c,!0):zn(0);return{width:r.width*p.x,height:r.height*p.y,x:r.x*p.x-c.scrollLeft*p.x+k.x+E.x,y:r.y*p.y-c.scrollTop*p.y+k.y+E.y}}function wE(e){return Array.from(e.getClientRects())}function AE(e){const i=Jn(e),r=hi(e),a=e.ownerDocument.body,s=Ft(i.scrollWidth,i.clientWidth,a.scrollWidth,a.clientWidth),o=Ft(i.scrollHeight,i.clientHeight,a.scrollHeight,a.clientHeight);let d=-r.scrollLeft+Vl(e);const g=-r.scrollTop;return Bn(a).direction==="rtl"&&(d+=Ft(i.clientWidth,a.clientWidth)-s),{width:s,height:o,x:d,y:g}}function RE(e,i){const r=cn(e),a=Jn(e),s=r.visualViewport;let o=a.clientWidth,d=a.clientHeight,g=0,c=0;if(s){o=s.width,d=s.height;const p=pi();(!p||p&&i==="fixed")&&(g=s.offsetLeft,c=s.offsetTop)}return{width:o,height:d,x:g,y:c}}function SE(e,i){const r=Ct(e,!0,i==="fixed"),a=r.top+e.clientTop,s=r.left+e.clientLeft,o=Tn(e)?ir(e):zn(1),d=e.clientWidth*o.x,g=e.clientHeight*o.y,c=s*o.x,p=a*o.y;return{width:d,height:g,x:c,y:p}}function Ld(e,i,r){let a;if(i==="viewport")a=RE(e,r);else if(i==="document")a=AE(Jn(e));else if(Pe(i))a=SE(i,r);else{const s=of(e);a={x:i.x-s.x,y:i.y-s.y,width:i.width,height:i.height}}return si(a)}function df(e,i){const r=ct(e);return r===i||!Pe(r)||ft(r)?!1:Bn(r).position==="fixed"||df(r,i)}function jE(e,i){const r=i.get(e);if(r)return r;let a=At(e,[],!1).filter(g=>Pe(g)&&pr(g)!=="body"),s=null;const o=Bn(e).position==="fixed";let d=o?ct(e):e;for(;Pe(d)&&!ft(d);){const g=Bn(d),c=Kl(d);!c&&g.position==="fixed"&&(s=null),(o?!c&&!s:!c&&g.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||Qr(d)&&!c&&df(e,d))?a=a.filter(k=>k!==d):s=g,d=ct(d)}return i.set(e,a),a}function NE(e){let{element:i,boundary:r,rootBoundary:a,strategy:s}=e;const d=[...r==="clippingAncestors"?mi(i)?[]:jE(i,this._c):[].concat(r),a],g=d[0],c=d.reduce((p,k)=>{const y=Ld(i,k,s);return p.top=Ft(y.top,p.top),p.right=or(y.right,p.right),p.bottom=or(y.bottom,p.bottom),p.left=Ft(y.left,p.left),p},Ld(i,g,s));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function IE(e){const{width:i,height:r}=lf(e);return{width:i,height:r}}function OE(e,i,r){const a=Tn(i),s=Jn(i),o=r==="fixed",d=Ct(e,!0,o,i);let g={scrollLeft:0,scrollTop:0};const c=zn(0);if(a||!a&&!o)if((pr(i)!=="body"||Qr(s))&&(g=hi(i)),a){const E=Ct(i,!0,o,i);c.x=E.x+i.clientLeft,c.y=E.y+i.clientTop}else s&&(c.x=Vl(s));const p=s&&!a&&!o?uf(s,g):zn(0),k=d.left+g.scrollLeft-c.x-p.x,y=d.top+g.scrollTop-c.y-p.y;return{x:k,y,width:d.width,height:d.height}}function Us(e){return Bn(e).position==="static"}function Fd(e,i){if(!Tn(e)||Bn(e).position==="fixed")return null;if(i)return i(e);let r=e.offsetParent;return Jn(e)===r&&(r=r.ownerDocument.body),r}function gf(e,i){const r=cn(e);if(mi(e))return r;if(!Tn(e)){let s=ct(e);for(;s&&!ft(s);){if(Pe(s)&&!Us(s))return s;s=ct(s)}return r}let a=Fd(e,i);for(;a&&yE(a)&&Us(a);)a=Fd(a,i);return a&&ft(a)&&Us(a)&&!Kl(a)?r:a||bE(e)||r}const PE=async function(e){const i=this.getOffsetParent||gf,r=this.getDimensions,a=await r(e.floating);return{reference:OE(e.reference,await i(e.floating),e.strategy),floating:{x:0,y:0,width:a.width,height:a.height}}};function BE(e){return Bn(e).direction==="rtl"}const xE={convertOffsetParentRelativeRectToViewportRelativeRect:_E,getDocumentElement:Jn,getClippingRect:NE,getOffsetParent:gf,getElementRects:PE,getClientRects:wE,getDimensions:IE,getScale:ir,isElement:Pe,isRTL:BE};function ff(e,i){return e.x===i.x&&e.y===i.y&&e.width===i.width&&e.height===i.height}function qE(e,i){let r=null,a;const s=Jn(e);function o(){var g;clearTimeout(a),(g=r)==null||g.disconnect(),r=null}function d(g,c){g===void 0&&(g=!1),c===void 0&&(c=1),o();const p=e.getBoundingClientRect(),{left:k,top:y,width:E,height:T}=p;if(g||i(),!E||!T)return;const O=za(y),_=za(s.clientWidth-(k+E)),b=za(s.clientHeight-(y+T)),R=za(k),j={rootMargin:-O+"px "+-_+"px "+-b+"px "+-R+"px",threshold:Ft(0,or(1,c))||1};let H=!0;function I(V){const x=V[0].intersectionRatio;if(x!==c){if(!H)return d();x?d(!1,x):a=setTimeout(()=>{d(!1,1e-7)},1e3)}x===1&&!ff(p,e.getBoundingClientRect())&&d(),H=!1}try{r=new IntersectionObserver(I,{...j,root:s.ownerDocument})}catch{r=new IntersectionObserver(I,j)}r.observe(e)}return d(!0),o}function Kd(e,i,r,a){a===void 0&&(a={});const{ancestorScroll:s=!0,ancestorResize:o=!0,elementResize:d=typeof ResizeObserver=="function",layoutShift:g=typeof IntersectionObserver=="function",animationFrame:c=!1}=a,p=Cl(e),k=s||o?[...p?At(p):[],...At(i)]:[];k.forEach(R=>{s&&R.addEventListener("scroll",r,{passive:!0}),o&&R.addEventListener("resize",r)});const y=p&&g?qE(p,r):null;let E=-1,T=null;d&&(T=new ResizeObserver(R=>{let[P]=R;P&&P.target===p&&T&&(T.unobserve(i),cancelAnimationFrame(E),E=requestAnimationFrame(()=>{var j;(j=T)==null||j.observe(i)})),r()}),p&&!c&&T.observe(p),T.observe(i));let O,_=c?Ct(e):null;c&&b();function b(){const R=Ct(e);_&&!ff(_,R)&&r(),_=R,O=requestAnimationFrame(b)}return r(),()=>{var R;k.forEach(P=>{s&&P.removeEventListener("scroll",r),o&&P.removeEventListener("resize",r)}),y?.(),(R=T)==null||R.disconnect(),T=null,c&&cancelAnimationFrame(O)}}const DE=kE,ME=vE,LE=pE,Cd=mE,FE=(e,i,r)=>{const a=new Map,s={platform:xE,...r},o={...s.platform,_c:a};return cE(e,i,{...s,platform:o})};var ei=typeof document<"u"?A.useLayoutEffect:A.useEffect;function oi(e,i){if(e===i)return!0;if(typeof e!=typeof i)return!1;if(typeof e=="function"&&e.toString()===i.toString())return!0;let r,a,s;if(e&&i&&typeof e=="object"){if(Array.isArray(e)){if(r=e.length,r!==i.length)return!1;for(a=r;a--!==0;)if(!oi(e[a],i[a]))return!1;return!0}if(s=Object.keys(e),r=s.length,r!==Object.keys(i).length)return!1;for(a=r;a--!==0;)if(!{}.hasOwnProperty.call(i,s[a]))return!1;for(a=r;a--!==0;){const o=s[a];if(!(o==="_owner"&&e.$$typeof)&&!oi(e[o],i[o]))return!1}return!0}return e!==e&&i!==i}function cf(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Vd(e,i){const r=cf(e);return Math.round(i*r)/r}function $s(e){const i=A.useRef(e);return ei(()=>{i.current=e}),i}function KE(e){e===void 0&&(e={});const{placement:i="bottom",strategy:r="absolute",middleware:a=[],platform:s,elements:{reference:o,floating:d}={},transform:g=!0,whileElementsMounted:c,open:p}=e,[k,y]=A.useState({x:0,y:0,strategy:r,placement:i,middlewareData:{},isPositioned:!1}),[E,T]=A.useState(a);oi(E,a)||T(a);const[O,_]=A.useState(null),[b,R]=A.useState(null),P=A.useCallback(G=>{G!==V.current&&(V.current=G,_(G))},[]),j=A.useCallback(G=>{G!==x.current&&(x.current=G,R(G))},[]),H=o||O,I=d||b,V=A.useRef(null),x=A.useRef(null),q=A.useRef(k),z=c!=null,Q=$s(c),Z=$s(s),J=$s(p),F=A.useCallback(()=>{if(!V.current||!x.current)return;const G={placement:i,strategy:r,middleware:E};Z.current&&(G.platform=Z.current),FE(V.current,x.current,G).then(Y=>{const ae={...Y,isPositioned:J.current!==!1};D.current&&!oi(q.current,ae)&&(q.current=ae,zg.flushSync(()=>{y(ae)}))})},[E,i,r,Z,J]);ei(()=>{p===!1&&q.current.isPositioned&&(q.current.isPositioned=!1,y(G=>({...G,isPositioned:!1})))},[p]);const D=A.useRef(!1);ei(()=>(D.current=!0,()=>{D.current=!1}),[]),ei(()=>{if(H&&(V.current=H),I&&(x.current=I),H&&I){if(Q.current)return Q.current(H,I,F);F()}},[H,I,F,Q,z]);const X=A.useMemo(()=>({reference:V,floating:x,setReference:P,setFloating:j}),[P,j]),te=A.useMemo(()=>({reference:H,floating:I}),[H,I]),W=A.useMemo(()=>{const G={position:r,left:0,top:0};if(!te.floating)return G;const Y=Vd(te.floating,k.x),ae=Vd(te.floating,k.y);return g?{...G,transform:"translate("+Y+"px, "+ae+"px)",...cf(te.floating)>=1.5&&{willChange:"transform"}}:{position:r,left:Y,top:ae}},[r,g,te.floating,k.x,k.y]);return A.useMemo(()=>({...k,update:F,refs:X,elements:te,floatingStyles:W}),[k,F,X,te,W])}const CE=e=>{function i(r){return{}.hasOwnProperty.call(r,"current")}return{name:"arrow",options:e,fn(r){const{element:a,padding:s}=typeof e=="function"?e(r):e;return a&&i(a)?a.current!=null?Cd({element:a.current,padding:s}).fn(r):{}:a?Cd({element:a,padding:s}).fn(r):{}}}},VE=(e,i)=>({...DE(e),options:[e,i]}),HE=(e,i)=>({...ME(e),options:[e,i]}),GE=(e,i)=>({...LE(e),options:[e,i]}),UE=(e,i)=>({...CE(e),options:[e,i]}),Hd=/(\w+)/g;function $E(e,i){const r=Array.isArray(e)?e:YE(e);for(const a of i){if(!a)continue;let s=a;for(let o=0;o<r.length;o++){const d=s[r[o]];d!==void 0&&(s=d)}if(typeof s=="string")return s}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function YE(e){const i=[];let r=Hd.exec(e);for(;r;){const[,a,s]=r;i.push(a||s),r=Hd.exec(e)}return i}const WE=/{[^}]*}/g;function ki(e,...i){const r=ef(),a=r.translations||[],s=[...i,...Array.isArray(a)?a.map(d=>d[e]):[a[e]],r.locale[e]];return(d,g)=>{const c=$E(d,s);return g?c.replace(WE,p=>{const k=p.substring(1,p.length-1);if(g[k]===void 0){const y=JSON.stringify(g);throw new Error(`Error translating key '${d}'. No replacement syntax ({}) found for key '${k}'. The following replacements were passed: '${y}'`)}return g[k]}):c}}var zE=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const XE=A.forwardRef((e,i)=>{var{className:r,size:a="medium",title:s,transparent:o=!1,variant:d="neutral",id:g,"data-color":c}=e,p=zE(e,["className","size","title","transparent","variant","id","data-color"]);const{cn:k}=Ne(),y=gi(),E=ki("Loader");return U.createElement("svg",Object.assign({"aria-labelledby":g??`loader-${y}`,ref:i,className:k("navds-loader",r,`navds-loader--${a}`,`navds-loader--${d}`,{"navds-loader--transparent":o}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid","data-color":c??ZE(d)},Xr(p,["children"]),{"data-variant":d}),U.createElement("title",{id:g??`loader-${y}`},s||E("title")),U.createElement("circle",{className:k("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),U.createElement("circle",{className:k("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});function ZE(e){switch(e){case"neutral":return"neutral";case"inverted":return"neutral";case"interaction":return;default:return"neutral"}}var JE=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const Hl=A.forwardRef((e,i)=>{var{as:r="button",variant:a="primary",className:s,children:o,size:d="medium",loading:g=!1,disabled:c,icon:p,iconPosition:k="left",onKeyUp:y,"data-color":E}=e,T=JE(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp","data-color"]);const{cn:O}=Ne(),_=c||g?Xr(T,["href"]):T,b=R=>{R.key===" "&&!c&&!g&&R.currentTarget.click()};return U.createElement(r,Object.assign({},r!=="button"?{role:"button"}:{},{"data-color":E??QE(a),"data-variant":e1(a)},_,{ref:i,onKeyUp:fi(y,b),className:O(s,"navds-button",`navds-button--${a}`,`navds-button--${d}`,{"navds-button--loading":g,"navds-button--icon-only":!!p&&!o,"navds-button--disabled":c??g}),disabled:c??g?!0:void 0}),p&&k==="left"&&U.createElement("span",{className:O("navds-button__icon")},p),g&&U.createElement(XE,{size:d}),o&&U.createElement(Dl,{as:"span",size:d==="medium"?"medium":"small"},o),p&&k==="right"&&U.createElement("span",{className:O("navds-button__icon")},p))});function QE(e){switch(e){case"primary-neutral":case"secondary-neutral":case"tertiary-neutral":return"neutral";case"danger":return"danger";default:return}}function e1(e){switch(e){case"primary":case"primary-neutral":case"danger":return"primary";case"secondary":case"secondary-neutral":return"secondary";case"tertiary":case"tertiary-neutral":return"tertiary";default:return"primary"}}function n1(){const e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function t1(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(i=>{let{brand:r,version:a}=i;return r+"/"+a}).join(" "):navigator.userAgent}function r1(){return/apple/i.test(navigator.vendor)}function a1(){return n1().toLowerCase().startsWith("mac")&&!navigator.maxTouchPoints}function i1(){return t1().includes("jsdom/")}const s1="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function Gd(e){let i=e.activeElement;for(;((r=i)==null||(r=r.shadowRoot)==null?void 0:r.activeElement)!=null;){var r;i=i.shadowRoot.activeElement}return i}function Yr(e,i){if(!e||!i)return!1;const r=i.getRootNode==null?void 0:i.getRootNode();if(e.contains(i))return!0;if(r&&li(r)){let a=i;for(;a;){if(e===a)return!0;a=a.parentNode||a.host}}return!1}function ar(e){return"composedPath"in e?e.composedPath()[0]:e.target}function Ys(e,i){if(i==null)return!1;if("composedPath"in e)return e.composedPath().includes(i);const r=e;return r.target!=null&&i.contains(r.target)}function l1(e){return e.matches("html,body")}function Lt(e){return e?.ownerDocument||document}function o1(e){return Tn(e)&&e.matches(s1)}function u1(e){if(!e||i1())return!0;try{return e.matches(":focus-visible")}catch{return!0}}function Ws(e,i,r){r===void 0&&(r=!0);let a=e.filter(o=>{var d;return o.parentId===i&&((d=o.context)==null?void 0:d.open)}),s=a;for(;s.length;)s=r?e.filter(o=>{var d;return(d=s)==null?void 0:d.some(g=>{var c;return o.parentId===g.id&&((c=o.context)==null?void 0:c.open)})}):e,a=a.concat(s);return a}function d1(e){return"nativeEvent"in e}function ml(e,i){const r=["mouse","pen"];return r.push("",void 0),r.includes(e)}var dr=typeof document<"u"?A.useLayoutEffect:A.useEffect;const g1={...Ug};function Xa(e){const i=A.useRef(e);return dr(()=>{i.current=e}),i}const f1=g1.useInsertionEffect,c1=f1||(e=>e());function dt(e){const i=A.useRef(()=>{});return c1(()=>{i.current=e}),A.useCallback(function(){for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return i.current==null?void 0:i.current(...a)},[])}const m1="data-floating-ui-focusable",Ud="active",$d="selected",p1={...Ug};let Yd=!1,h1=0;const Wd=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+h1++;function k1(){const[e,i]=A.useState(()=>Yd?Wd():void 0);return dr(()=>{e==null&&i(Wd())},[]),A.useEffect(()=>{Yd=!0},[]),e}const v1=p1.useId,y1=v1||k1;function b1(){const e=new Map;return{emit(i,r){var a;(a=e.get(i))==null||a.forEach(s=>s(r))},on(i,r){e.has(i)||e.set(i,new Set),e.get(i).add(r)},off(i,r){var a;(a=e.get(i))==null||a.delete(r)}}}const E1=A.createContext(null),T1=A.createContext(null),mf=()=>{var e;return((e=A.useContext(E1))==null?void 0:e.id)||null},Gl=()=>A.useContext(T1);function Ul(e){return"data-floating-ui-"+e}function Pn(e){e.current!==-1&&(clearTimeout(e.current),e.current=-1)}const zd=Ul("safe-polygon");function zs(e,i,r){if(r&&!ml(r))return 0;if(typeof e=="number")return e;if(typeof e=="function"){const a=e();return typeof a=="number"?a:a?.[i]}return e?.[i]}function Xs(e){return typeof e=="function"?e():e}function _1(e,i){i===void 0&&(i={});const{open:r,onOpenChange:a,dataRef:s,events:o,elements:d}=e,{enabled:g=!0,delay:c=0,handleClose:p=null,mouseOnly:k=!1,restMs:y=0,move:E=!0}=i,T=Gl(),O=mf(),_=Xa(p),b=Xa(c),R=Xa(r),P=Xa(y),j=A.useRef(),H=A.useRef(-1),I=A.useRef(),V=A.useRef(-1),x=A.useRef(!0),q=A.useRef(!1),z=A.useRef(()=>{}),Q=A.useRef(!1),Z=A.useCallback(()=>{var W;const G=(W=s.current.openEvent)==null?void 0:W.type;return G?.includes("mouse")&&G!=="mousedown"},[s]);A.useEffect(()=>{if(!g)return;function W(G){let{open:Y}=G;Y||(Pn(H),Pn(V),x.current=!0,Q.current=!1)}return o.on("openchange",W),()=>{o.off("openchange",W)}},[g,o]),A.useEffect(()=>{if(!g||!_.current||!r)return;function W(Y){Z()&&a(!1,Y,"hover")}const G=Lt(d.floating).documentElement;return G.addEventListener("mouseleave",W),()=>{G.removeEventListener("mouseleave",W)}},[d.floating,r,a,g,_,Z]);const J=A.useCallback(function(W,G,Y){G===void 0&&(G=!0),Y===void 0&&(Y="hover");const ae=zs(b.current,"close",j.current);ae&&!I.current?(Pn(H),H.current=window.setTimeout(()=>a(!1,W,Y),ae)):G&&(Pn(H),a(!1,W,Y))},[b,a]),F=dt(()=>{z.current(),I.current=void 0}),D=dt(()=>{if(q.current){const W=Lt(d.floating).body;W.style.pointerEvents="",W.removeAttribute(zd),q.current=!1}}),X=dt(()=>s.current.openEvent?["click","mousedown"].includes(s.current.openEvent.type):!1);A.useEffect(()=>{if(!g)return;function W(le){if(Pn(H),x.current=!1,k&&!ml(j.current)||Xs(P.current)>0&&!zs(b.current,"open"))return;const he=zs(b.current,"open",j.current);he?H.current=window.setTimeout(()=>{R.current||a(!0,le,"hover")},he):r||a(!0,le,"hover")}function G(le){if(X()){D();return}z.current();const he=Lt(d.floating);if(Pn(V),Q.current=!1,_.current&&s.current.floatingContext){r||Pn(H),I.current=_.current({...s.current.floatingContext,tree:T,x:le.clientX,y:le.clientY,onClose(){D(),F(),X()||J(le,!0,"safe-polygon")}});const Ke=I.current;he.addEventListener("mousemove",Ke),z.current=()=>{he.removeEventListener("mousemove",Ke)};return}(j.current==="touch"?!Yr(d.floating,le.relatedTarget):!0)&&J(le)}function Y(le){X()||s.current.floatingContext&&(_.current==null||_.current({...s.current.floatingContext,tree:T,x:le.clientX,y:le.clientY,onClose(){D(),F(),X()||J(le)}})(le))}function ae(){Pn(H)}function ne(le){X()||J(le,!1)}if(Pe(d.domReference)){const le=d.domReference,he=d.floating;return r&&le.addEventListener("mouseleave",Y),E&&le.addEventListener("mousemove",W,{once:!0}),le.addEventListener("mouseenter",W),le.addEventListener("mouseleave",G),he&&(he.addEventListener("mouseleave",Y),he.addEventListener("mouseenter",ae),he.addEventListener("mouseleave",ne)),()=>{r&&le.removeEventListener("mouseleave",Y),E&&le.removeEventListener("mousemove",W),le.removeEventListener("mouseenter",W),le.removeEventListener("mouseleave",G),he&&(he.removeEventListener("mouseleave",Y),he.removeEventListener("mouseenter",ae),he.removeEventListener("mouseleave",ne))}}},[d,g,e,k,E,J,F,D,a,r,R,T,b,_,s,X,P]),dr(()=>{var W;if(g&&r&&(W=_.current)!=null&&W.__options.blockPointerEvents&&Z()){q.current=!0;const Y=d.floating;if(Pe(d.domReference)&&Y){var G;const ae=Lt(d.floating).body;ae.setAttribute(zd,"");const ne=d.domReference,le=T==null||(G=T.nodesRef.current.find(he=>he.id===O))==null||(G=G.context)==null?void 0:G.elements.floating;return le&&(le.style.pointerEvents=""),ae.style.pointerEvents="none",ne.style.pointerEvents="auto",Y.style.pointerEvents="auto",()=>{ae.style.pointerEvents="",ne.style.pointerEvents="",Y.style.pointerEvents=""}}}},[g,r,O,d,T,_,Z]),dr(()=>{r||(j.current=void 0,Q.current=!1,F(),D())},[r,F,D]),A.useEffect(()=>()=>{F(),Pn(H),Pn(V),D()},[g,d.domReference,F,D]);const te=A.useMemo(()=>{function W(G){j.current=G.pointerType}return{onPointerDown:W,onPointerEnter:W,onMouseMove(G){const{nativeEvent:Y}=G;function ae(){!x.current&&!R.current&&a(!0,Y,"hover")}k&&!ml(j.current)||r||Xs(P.current)===0||Q.current&&G.movementX**2+G.movementY**2<2||(Pn(V),j.current==="touch"?ae():(Q.current=!0,V.current=window.setTimeout(ae,Xs(P.current))))}}},[k,a,r,R,P]);return A.useMemo(()=>g?{reference:te}:{},[g,te])}function Zs(e,i){if(!e||!i)return!1;const r=i.getRootNode==null?void 0:i.getRootNode();if(e.contains(i))return!0;if(r&&li(r)){let a=i;for(;a;){if(e===a)return!0;a=a.parentNode||a.host}}return!1}function w1(e){return"composedPath"in e?e.composedPath()[0]:e.target}const A1={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},R1={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},Xd=e=>{var i,r;return{escapeKey:typeof e=="boolean"?e:(i=e?.escapeKey)!=null?i:!1,outsidePress:typeof e=="boolean"?e:(r=e?.outsidePress)!=null?r:!0}};function S1(e,i){i===void 0&&(i={});const{open:r,onOpenChange:a,elements:s,dataRef:o}=e,{enabled:d=!0,escapeKey:g=!0,outsidePress:c=!0,outsidePressEvent:p="pointerdown",referencePress:k=!1,referencePressEvent:y="pointerdown",ancestorScroll:E=!1,bubbles:T,capture:O}=i,_=Gl(),b=dt(typeof c=="function"?c:()=>!1),R=typeof c=="function"?b:c,P=A.useRef(!1),j=A.useRef(!1),{escapeKey:H,outsidePress:I}=Xd(T),{escapeKey:V,outsidePress:x}=Xd(O),q=A.useRef(!1),z=dt(X=>{var te;if(!r||!d||!g||X.key!=="Escape"||q.current)return;const W=(te=o.current.floatingContext)==null?void 0:te.nodeId,G=_?Ws(_.nodesRef.current,W):[];if(!H&&(X.stopPropagation(),G.length>0)){let Y=!0;if(G.forEach(ae=>{var ne;if((ne=ae.context)!=null&&ne.open&&!ae.context.dataRef.current.__escapeKeyBubbles){Y=!1;return}}),!Y)return}a(!1,d1(X)?X.nativeEvent:X,"escape-key")}),Q=dt(X=>{var te;const W=()=>{var G;z(X),(G=ar(X))==null||G.removeEventListener("keydown",W)};(te=ar(X))==null||te.addEventListener("keydown",W)}),Z=dt(X=>{var te;const W=P.current;P.current=!1;const G=j.current;if(j.current=!1,p==="click"&&G||W||typeof R=="function"&&!R(X))return;const Y=ar(X),ae="["+Ul("inert")+"]",ne=Lt(s.floating).querySelectorAll(ae);let le=Pe(Y)?Y:null;for(;le&&!ft(le);){const qe=ct(le);if(ft(qe)||!Pe(qe))break;le=qe}if(ne.length&&Pe(Y)&&!l1(Y)&&!Yr(Y,s.floating)&&Array.from(ne).every(qe=>!Yr(le,qe)))return;if(Tn(Y)&&D){const qe=ft(Y),Ce=Bn(Y),ve=/auto|scroll/,we=qe||ve.test(Ce.overflowX),Ze=qe||ve.test(Ce.overflowY),Ve=we&&Y.clientWidth>0&&Y.scrollWidth>Y.clientWidth,Ge=Ze&&Y.clientHeight>0&&Y.scrollHeight>Y.clientHeight,_n=Ce.direction==="rtl",Me=Ge&&(_n?X.offsetX<=Y.offsetWidth-Y.clientWidth:X.offsetX>Y.clientWidth),Je=Ve&&X.offsetY>Y.clientHeight;if(Me||Je)return}const he=(te=o.current.floatingContext)==null?void 0:te.nodeId,mn=_&&Ws(_.nodesRef.current,he).some(qe=>{var Ce;return Ys(X,(Ce=qe.context)==null?void 0:Ce.elements.floating)});if(Ys(X,s.floating)||Ys(X,s.domReference)||mn)return;const Ke=_?Ws(_.nodesRef.current,he):[];if(Ke.length>0){let qe=!0;if(Ke.forEach(Ce=>{var ve;if((ve=Ce.context)!=null&&ve.open&&!Ce.context.dataRef.current.__outsidePressBubbles){qe=!1;return}}),!qe)return}a(!1,X,"outside-press")}),J=dt(X=>{var te;const W=()=>{var G;Z(X),(G=ar(X))==null||G.removeEventListener(p,W)};(te=ar(X))==null||te.addEventListener(p,W)});A.useEffect(()=>{if(!r||!d)return;o.current.__escapeKeyBubbles=H,o.current.__outsidePressBubbles=I;let X=-1;function te(ne){a(!1,ne,"ancestor-scroll")}function W(){window.clearTimeout(X),q.current=!0}function G(){X=window.setTimeout(()=>{q.current=!1},pi()?5:0)}const Y=Lt(s.floating);g&&(Y.addEventListener("keydown",V?Q:z,V),Y.addEventListener("compositionstart",W),Y.addEventListener("compositionend",G)),R&&Y.addEventListener(p,x?J:Z,x);let ae=[];return E&&(Pe(s.domReference)&&(ae=At(s.domReference)),Pe(s.floating)&&(ae=ae.concat(At(s.floating))),!Pe(s.reference)&&s.reference&&s.reference.contextElement&&(ae=ae.concat(At(s.reference.contextElement)))),ae=ae.filter(ne=>{var le;return ne!==((le=Y.defaultView)==null?void 0:le.visualViewport)}),ae.forEach(ne=>{ne.addEventListener("scroll",te,{passive:!0})}),()=>{g&&(Y.removeEventListener("keydown",V?Q:z,V),Y.removeEventListener("compositionstart",W),Y.removeEventListener("compositionend",G)),R&&Y.removeEventListener(p,x?J:Z,x),ae.forEach(ne=>{ne.removeEventListener("scroll",te)}),window.clearTimeout(X)}},[o,s,g,R,p,r,a,E,d,H,I,z,V,Q,Z,x,J]),A.useEffect(()=>{P.current=!1},[R,p]);const F=A.useMemo(()=>({onKeyDown:z,...k&&{[A1[y]]:X=>{a(!1,X.nativeEvent,"reference-press")},...y!=="click"&&{onClick(X){a(!1,X.nativeEvent,"reference-press")}}}}),[z,a,k,y]),D=A.useMemo(()=>({onKeyDown:z,onMouseDown(){j.current=!0},onMouseUp(){j.current=!0},[R1[p]]:()=>{P.current=!0}}),[z,p]);return A.useMemo(()=>d?{reference:F,floating:D}:{},[d,F,D])}function j1(e){const{open:i=!1,onOpenChange:r,elements:a}=e,s=y1(),o=A.useRef({}),[d]=A.useState(()=>b1()),g=mf()!=null,[c,p]=A.useState(a.reference),k=dt((T,O,_)=>{o.current.openEvent=T?O:void 0,d.emit("openchange",{open:T,event:O,reason:_,nested:g}),r?.(T,O,_)}),y=A.useMemo(()=>({setPositionReference:p}),[]),E=A.useMemo(()=>({reference:c||a.reference||null,floating:a.floating||null,domReference:a.reference}),[c,a.reference,a.floating]);return A.useMemo(()=>({dataRef:o,open:i,onOpenChange:k,elements:E,events:d,floatingId:s,refs:y}),[i,k,E,d,s,y])}function N1(e){e===void 0&&(e={});const{nodeId:i}=e,r=j1({...e,elements:{reference:null,floating:null,...e.elements}}),a=e.rootContext||r,s=a.elements,[o,d]=A.useState(null),[g,c]=A.useState(null),k=s?.domReference||o,y=A.useRef(null),E=Gl();dr(()=>{k&&(y.current=k)},[k]);const T=KE({...e,elements:{...s,...g&&{reference:g}}}),O=A.useCallback(j=>{const H=Pe(j)?{getBoundingClientRect:()=>j.getBoundingClientRect(),getClientRects:()=>j.getClientRects(),contextElement:j}:j;c(H),T.refs.setReference(H)},[T.refs]),_=A.useCallback(j=>{(Pe(j)||j===null)&&(y.current=j,d(j)),(Pe(T.refs.reference.current)||T.refs.reference.current===null||j!==null&&!Pe(j))&&T.refs.setReference(j)},[T.refs]),b=A.useMemo(()=>({...T.refs,setReference:_,setPositionReference:O,domReference:y}),[T.refs,_,O]),R=A.useMemo(()=>({...T.elements,domReference:k}),[T.elements,k]),P=A.useMemo(()=>({...T,...a,refs:b,elements:R,nodeId:i}),[T,b,R,i,a]);return dr(()=>{a.dataRef.current.floatingContext=P;const j=E?.nodesRef.current.find(H=>H.id===i);j&&(j.context=P)}),A.useMemo(()=>({...T,context:P,refs:b,elements:R}),[T,b,R,P])}function Js(){return a1()&&r1()}function I1(e,i){i===void 0&&(i={});const{open:r,onOpenChange:a,events:s,dataRef:o,elements:d}=e,{enabled:g=!0,visibleOnly:c=!0}=i,p=A.useRef(!1),k=A.useRef(-1),y=A.useRef(!0);A.useEffect(()=>{if(!g)return;const T=cn(d.domReference);function O(){!r&&Tn(d.domReference)&&d.domReference===Gd(Lt(d.domReference))&&(p.current=!0)}function _(){y.current=!0}function b(){y.current=!1}return T.addEventListener("blur",O),Js()&&(T.addEventListener("keydown",_,!0),T.addEventListener("pointerdown",b,!0)),()=>{T.removeEventListener("blur",O),Js()&&(T.removeEventListener("keydown",_,!0),T.removeEventListener("pointerdown",b,!0))}},[d.domReference,r,g]),A.useEffect(()=>{if(!g)return;function T(O){let{reason:_}=O;(_==="reference-press"||_==="escape-key")&&(p.current=!0)}return s.on("openchange",T),()=>{s.off("openchange",T)}},[s,g]),A.useEffect(()=>()=>{Pn(k)},[]);const E=A.useMemo(()=>({onMouseLeave(){p.current=!1},onFocus(T){if(p.current)return;const O=ar(T.nativeEvent);if(c&&Pe(O)){if(Js()&&!T.relatedTarget){if(!y.current&&!o1(O))return}else if(!u1(O))return}a(!0,T.nativeEvent,"focus")},onBlur(T){p.current=!1;const O=T.relatedTarget,_=T.nativeEvent,b=Pe(O)&&O.hasAttribute(Ul("focus-guard"))&&O.getAttribute("data-type")==="outside";k.current=window.setTimeout(()=>{var R;const P=Gd(d.domReference?d.domReference.ownerDocument:document);!O&&P===d.domReference||Yr((R=o.current.floatingContext)==null?void 0:R.refs.floating.current,P)||Yr(d.domReference,P)||b||a(!1,_,"focus")})}}),[o,d.domReference,a,c]);return A.useMemo(()=>g?{reference:E}:{},[g,E])}function Qs(e,i,r){const a=new Map,s=r==="item";let o=e;if(s&&e){const{[Ud]:d,[$d]:g,...c}=e;o=c}return{...r==="floating"&&{tabIndex:-1,[m1]:""},...o,...i.map(d=>{const g=d?d[r]:null;return typeof g=="function"?e?g(e):null:g}).concat(e).reduce((d,g)=>(g&&Object.entries(g).forEach(c=>{let[p,k]=c;if(!(s&&[Ud,$d].includes(p)))if(p.indexOf("on")===0){if(a.has(p)||a.set(p,[]),typeof k=="function"){var y;(y=a.get(p))==null||y.push(k),d[p]=function(){for(var E,T=arguments.length,O=new Array(T),_=0;_<T;_++)O[_]=arguments[_];return(E=a.get(p))==null?void 0:E.map(b=>b(...O)).find(b=>b!==void 0)}}}else d[p]=k}),d),{})}}function O1(e){e===void 0&&(e=[]);const i=e.map(g=>g?.reference),r=e.map(g=>g?.floating),a=e.map(g=>g?.item),s=A.useCallback(g=>Qs(g,e,"reference"),i),o=A.useCallback(g=>Qs(g,e,"floating"),r),d=A.useCallback(g=>Qs(g,e,"item"),a);return A.useMemo(()=>({getReferenceProps:s,getFloatingProps:o,getItemProps:d}),[s,o,d])}function P1(e,i,r){r===void 0&&(r=!0);let a=e.filter(o=>{var d;return o.parentId===i&&((d=o.context)==null?void 0:d.open)}),s=a;for(;s.length;)s=r?e.filter(o=>{var d;return(d=s)==null?void 0:d.some(g=>{var c;return o.parentId===g.id&&((c=o.context)==null?void 0:c.open)})}):e,a=a.concat(s);return a}function Zd(e,i){const[r,a]=e;let s=!1;const o=i.length;for(let d=0,g=o-1;d<o;g=d++){const[c,p]=i[d]||[0,0],[k,y]=i[g]||[0,0];p>=a!=y>=a&&r<=(k-c)*(a-p)/(y-p)+c&&(s=!s)}return s}function B1(e,i){return e[0]>=i.x&&e[0]<=i.x+i.width&&e[1]>=i.y&&e[1]<=i.y+i.height}function x1(e){e===void 0&&(e={});const{buffer:i=.5,blockPointerEvents:r=!1,requireIntent:a=!0}=e;let s,o=!1,d=null,g=null,c=performance.now();function p(y,E){const T=performance.now(),O=T-c;if(d===null||g===null||O===0)return d=y,g=E,c=T,null;const _=y-d,b=E-g,P=Math.sqrt(_*_+b*b)/O;return d=y,g=E,c=T,P}const k=y=>{let{x:E,y:T,placement:O,elements:_,onClose:b,nodeId:R,tree:P}=y;return function(H){function I(){clearTimeout(s),b()}if(clearTimeout(s),!_.domReference||!_.floating||O==null||E==null||T==null)return;const{clientX:V,clientY:x}=H,q=[V,x],z=w1(H),Q=H.type==="mouseleave",Z=Zs(_.floating,z),J=Zs(_.domReference,z),F=_.domReference.getBoundingClientRect(),D=_.floating.getBoundingClientRect(),X=O.split("-")[0],te=E>D.right-D.width/2,W=T>D.bottom-D.height/2,G=B1(q,F),Y=D.width>F.width,ae=D.height>F.height,ne=(Y?F:D).left,le=(Y?F:D).right,he=(ae?F:D).top,mn=(ae?F:D).bottom;if(Z&&(o=!0,!Q))return;if(J&&(o=!1),J&&!Q){o=!0;return}if(Q&&Pe(H.relatedTarget)&&Zs(_.floating,H.relatedTarget)||P&&P1(P.nodesRef.current,R).some(Ce=>{let{context:ve}=Ce;return ve?.open}))return;if(X==="top"&&T>=F.bottom-1||X==="bottom"&&T<=F.top+1||X==="left"&&E>=F.right-1||X==="right"&&E<=F.left+1)return I();let Ke=[];switch(X){case"top":Ke=[[ne,F.top+1],[ne,D.bottom-1],[le,D.bottom-1],[le,F.top+1]];break;case"bottom":Ke=[[ne,D.top+1],[ne,F.bottom-1],[le,F.bottom-1],[le,D.top+1]];break;case"left":Ke=[[D.right-1,mn],[D.right-1,he],[F.left+1,he],[F.left+1,mn]];break;case"right":Ke=[[F.right-1,mn],[F.right-1,he],[D.left+1,he],[D.left+1,mn]];break}function qe(Ce){let[ve,we]=Ce;switch(X){case"top":{const Ze=[Y?ve+i/2:te?ve+i*4:ve-i*4,we+i+1],Ve=[Y?ve-i/2:te?ve+i*4:ve-i*4,we+i+1],Ge=[[D.left,te||Y?D.bottom-i:D.top],[D.right,te?Y?D.bottom-i:D.top:D.bottom-i]];return[Ze,Ve,...Ge]}case"bottom":{const Ze=[Y?ve+i/2:te?ve+i*4:ve-i*4,we-i],Ve=[Y?ve-i/2:te?ve+i*4:ve-i*4,we-i],Ge=[[D.left,te||Y?D.top+i:D.bottom],[D.right,te?Y?D.top+i:D.bottom:D.top+i]];return[Ze,Ve,...Ge]}case"left":{const Ze=[ve+i+1,ae?we+i/2:W?we+i*4:we-i*4],Ve=[ve+i+1,ae?we-i/2:W?we+i*4:we-i*4];return[...[[W||ae?D.right-i:D.left,D.top],[W?ae?D.right-i:D.left:D.right-i,D.bottom]],Ze,Ve]}case"right":{const Ze=[ve-i,ae?we+i/2:W?we+i*4:we-i*4],Ve=[ve-i,ae?we-i/2:W?we+i*4:we-i*4],Ge=[[W||ae?D.left+i:D.right,D.top],[W?ae?D.left+i:D.right:D.left+i,D.bottom]];return[Ze,Ve,...Ge]}}}if(!Zd([V,x],Ke)){if(o&&!G)return I();if(!Q&&a){const Ce=p(H.clientX,H.clientY);if(Ce!==null&&Ce<.1)return I()}Zd([V,x],qe([E,T]))?!o&&a&&(s=window.setTimeout(I,40)):I()}}};return k.__options={blockPointerEvents:r},k}var q1=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const D1=A.forwardRef((e,i)=>{var{className:r,header:a,children:s,open:o,defaultOpen:d=!1,onClick:g,size:c="medium",onOpenChange:p}=e,k=q1(e,["className","header","children","open","defaultOpen","onClick","size","onOpenChange"]);const{cn:y}=Ne(),[E,T]=Ml({defaultValue:d,value:o,onChange:p}),O=c==="small"?"small":"medium";return U.createElement("div",{className:y("navds-read-more",`navds-read-more--${c}`,r,{"navds-read-more--open":E}),"data-volume":"low"},U.createElement("button",Object.assign({},k,{ref:i,type:"button",className:y("navds-read-more__button","navds-body-short",{"navds-body-short--small":c==="small"}),onClick:fi(g,()=>T(_=>!_)),"aria-expanded":E,"data-state":E?"open":"closed"}),U.createElement(Jg,{className:y("navds-read-more__expand-icon"),"aria-hidden":!0}),U.createElement("span",null,a)),U.createElement(ri,{as:"div","aria-hidden":!E,className:y("navds-read-more__content",{"navds-read-more__content--closed":!E}),size:O,"data-state":E?"open":"closed"},s))}),M1=A.createContext(null),L1=(e,i)=>{var r,a,s;const{size:o,error:d,errorId:g}=e,c=A.useContext(M1),p=gi(),k=(r=e.id)!==null&&r!==void 0?r:`${i}-${p}`,y=g??`${i}-error-${p}`,E=`${i}-description-${p}`,T=c?.disabled||e.disabled,O=(c?.readOnly||e.readOnly)&&!T||void 0,_=!T&&!O&&!!(d||c?.error),b=!T&&!O&&!!d&&typeof d!="boolean",R=Object.assign({},_?{"aria-invalid":!0}:{});return e?.required,{showErrorMsg:b,hasError:_,errorId:y,inputDescriptionId:E,size:(a=o??c?.size)!==null&&a!==void 0?a:"medium",readOnly:O,inputProps:Object.assign(Object.assign({id:k},R),{"aria-describedby":Gg(e["aria-describedby"],{[E]:e.description&&!pl(e.description),[y]:b,[(s=c?.errorId)!==null&&s!==void 0?s:""]:_&&c?.error})||void 0,disabled:T})}};function pl(e,i=!0){if(U.isValidElement(e)){if(e.type===D1)return!0;if(e.props.children&&i)return pl(e.props.children,!1)}else if(Array.isArray(e))return e.some(r=>pl(r,i));return!1}function Xe(e,i,r,a){return a?typeof a=="string"?{[`--__${e}c-${i}-${r}-xs`]:a}:Object.fromEntries(Object.entries(a).map(([s,o])=>[`--__${e}c-${i}-${r}-${s}`,o])):{}}const F1={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},Jd=(e,i,r,a,s,o)=>i.split(" ").map((d,g,c)=>{var p;if(e==="margin-inline"&&d==="full")return`calc((100vw - ${100/c.length}%)/-2)`;if(e==="padding-inline"&&d==="full")return`calc((100vw - ${100/c.length}%)/2)`;if(["mi","mb"].includes(e)&&d==="auto")return"auto";let k=`var(--${o}-${r}-${d})`;if(a.includes(d))k=d==="px"?"1px":d;else if(d.startsWith("space"))k=`var(--${o}-${d})`;else{const y=`--${o}-spacing-${d}`;k=`var(${(p=F1[y])!==null&&p!==void 0?p:y})`}return s?d==="0"?"0":`calc(-1 * ${k})`:k}).join(" ");function En(e,i,r,a,s,o=!1,d=[]){if(!s)return{};if(typeof s=="string")return{[`--__${e}c-${i}-${r}-xs`]:Jd(r,s,a,d,o,e)};const g={};return Object.entries(s).forEach(([c,p])=>{g[`--__${e}c-${i}-${r}-${c}`]=Jd(r,p,a,d,o,e)}),g}const pf=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],hf=({children:e,className:i,padding:r,paddingInline:a,paddingBlock:s,margin:o,marginInline:d,marginBlock:g,width:c,minWidth:p,maxWidth:k,height:y,minHeight:E,maxHeight:T,position:O,inset:_,top:b,right:R,left:P,bottom:j,overflow:H,overflowX:I,overflowY:V,flexBasis:x,flexGrow:q,flexShrink:z,gridColumn:Q})=>{const Z=fr(!1),{cn:J}=Ne(),F=Z?"ax":"a",D=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},En(F,"r","p","spacing",r)),En(F,"r","pi","spacing",a)),En(F,"r","pb","spacing",s)),En(F,"r","m","spacing",o)),En(F,"r","mi","spacing",d)),En(F,"r","mb","spacing",g)),Xe(F,"r","w",c)),Xe(F,"r","minw",p)),Xe(F,"r","maxw",k)),Xe(F,"r","h",y)),Xe(F,"r","minh",E)),Xe(F,"r","maxh",T)),Xe(F,"r","position",O)),En(F,"r","inset","spacing",_)),En(F,"r","top","spacing",b)),En(F,"r","right","spacing",R)),En(F,"r","bottom","spacing",j)),En(F,"r","left","spacing",P)),Xe(F,"r","overflow",H)),Xe(F,"r","overflowx",I)),Xe(F,"r","overflowy",V)),Xe(F,"r","flex-basis",x)),Xe(F,"r","flex-grow",q)),Xe(F,"r","flex-shrink",z)),Xe(F,"r","grid-column",Q));return U.createElement(zr,{className:J({className:i,"navds-r-p":r,"navds-r-pi":a,"navds-r-pb":s,"navds-r-m":o,"navds-r-mi":d,"navds-r-mb":g,"navds-r-w":c,"navds-r-minw":p,"navds-r-maxw":k,"navds-r-h":y,"navds-r-minh":E,"navds-r-maxh":T,"navds-r-position":O,"navds-r-inset":_,"navds-r-top":b,"navds-r-right":R,"navds-r-bottom":j,"navds-r-left":P,"navds-r-overflow":H,"navds-r-overflowx":I,"navds-r-overflowy":V,"navds-r-flex-basis":x,"navds-r-flex-grow":q,"navds-r-flex-shrink":z,"navds-r-grid-column":Q}),style:D},e)};var K1=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const C1=A.forwardRef((e,i)=>{var{children:r,className:a,as:s="div",columns:o,gap:d,style:g,align:c,asChild:p}=e,k=K1(e,["children","className","as","columns","gap","style","align","asChild"]);const E=fr(!1)?"ax":"a",{cn:T}=Ne(),O=Object.assign(Object.assign(Object.assign(Object.assign({},g),{[`--__${E}c-hgrid-align`]:c}),En(E,"hgrid","gap","spacing",d)),Xe(E,"hgrid","columns",V1(o))),_=p?zr:s;return U.createElement(hf,Object.assign({},k),U.createElement(_,Object.assign({},Xr(k,pf),{ref:i,className:T("navds-hgrid",a,{"navds-hgrid-gap":d,"navds-hgrid-align":c}),style:O}),r))});function V1(e){return e?typeof e=="string"||typeof e=="number"?Qd(e):Object.fromEntries(Object.entries(e).map(([i,r])=>[i,Qd(r)])):{}}const Qd=e=>typeof e=="number"?`repeat(${e}, minmax(0, 1fr))`:e;var H1=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const kf=A.forwardRef((e,i)=>{var{children:r,className:a,as:s="div",align:o,justify:d,wrap:g=!0,gap:c,style:p,direction:k="row",asChild:y}=e,E=H1(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const O=fr(!1)?"ax":"a",{cn:_}=Ne(),b=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},p),En(O,"stack","gap","spacing",c)),Xe(O,"stack","direction",k)),Xe(O,"stack","align",o)),Xe(O,"stack","justify",d)),R=y?zr:s;return U.createElement(hf,Object.assign({},E),U.createElement(R,Object.assign({},Xr(E,pf),{ref:i,style:b,className:_("navds-stack",a,{"navds-vstack":k==="column","navds-hstack":k==="row","navds-stack-gap":c,"navds-stack-align":o,"navds-stack-justify":d,"navds-stack-direction":k,"navds-stack-wrap":g})}),r))});var G1=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const sr=A.forwardRef((e,i)=>{var{as:r="div"}=e,a=G1(e,["as"]);return U.createElement(kf,Object.assign({as:r},a,{ref:i,direction:"row"}))});var U1=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const vi=A.forwardRef((e,i)=>{var{as:r="div"}=e,a=U1(e,["as"]);return U.createElement(kf,Object.assign({as:r},a,{ref:i,direction:"column",wrap:!1}))}),ni=A.createContext({listType:"ul",size:"medium"});var $1=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const vf=A.forwardRef((e,i)=>{var{className:r,children:a,title:s,icon:o}=e,d=$1(e,["className","children","title","icon"]);const{listType:g,size:c}=A.useContext(ni),{cn:p}=Ne();return g==="ol"&&o&&console.warn("<List />: Icon prop is not supported for ordered lists. Please remove the icon prop."),U.createElement("li",Object.assign({},d,{ref:i,className:p("navds-list__item",r)}),g==="ul"&&U.createElement("div",{className:p("navds-list__item-marker",{"navds-list__item-marker--icon":o,"navds-list__item-marker--bullet":!o})},o||U.createElement("svg",{width:"0.375rem",height:"0.375rem",viewBox:"0 0 6 6",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,focusable:!1,role:"img"},U.createElement("rect",{width:"6",height:"6",rx:"3",fill:"currentColor"}))),U.createElement("div",null,s&&U.createElement(ri,{as:"p",size:c,weight:"semibold"},s),a))});vf.displayName="List.Item";var Y1=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const W1={small:"xsmall",medium:"small",large:"medium"},hl=A.forwardRef((e,i)=>{var{children:r,className:a,as:s="ul",title:o,description:d,headingTag:g,size:c,"aria-label":p,"aria-labelledby":k}=e,y=Y1(e,["children","className","as","title","description","headingTag","size","aria-label","aria-labelledby"]);const{size:E}=A.useContext(ni),{cn:T}=Ne(),O=fr(!1),_=c??E;return O?U.createElement(ni.Provider,{value:{listType:s,size:_}},U.createElement(ri,Object.assign({as:"div"},y,{size:_,ref:i,className:T("navds-list",`navds-list--${_}`,a)}),U.createElement(s,{role:"list","aria-label":p,"aria-labelledby":k},r))):U.createElement(ni.Provider,{value:{listType:s,size:_}},U.createElement(ri,Object.assign({as:"div"},y,{size:_,ref:i,className:T("navds-list",`navds-list--${_}`,a)}),o&&U.createElement(Zg,{size:W1[_],as:g??"h3"},o),d&&U.createElement(di,{size:_},d),U.createElement(s,{role:"list","aria-label":p,"aria-labelledby":k},r)))});hl.Item=vf;var z1=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const X1=A.forwardRef((e,i)=>{var{className:r}=e,a=z1(e,["className"]);const{cn:s}=Ne();return U.createElement("tbody",Object.assign({},a,{ref:i,className:s("navds-table__body",r)}))});var Z1=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const yf=A.forwardRef((e,i)=>{var{className:r,children:a,align:s,textSize:o}=e,d=Z1(e,["className","children","align","textSize"]);const{cn:g}=Ne();return U.createElement("th",Object.assign({ref:i,className:g("navds-table__header-cell","navds-label",r,{[`navds-table__header-cell--align-${s}`]:s,"navds-label--small":o==="small"})},d),a)}),bf=A.createContext(null);var J1=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const Q1=A.forwardRef((e,i)=>{var r,a,s,o,{className:d,children:g,sortable:c=!1,sortKey:p}=e,k=J1(e,["className","children","sortable","sortKey"]);const y=A.useContext(bf),{cn:E}=Ne();return c&&!p&&console.warn("ColumnHeader with `sortable=true` must have a sortKey."),U.createElement(yf,Object.assign({scope:"col",ref:i,className:E(d),"aria-sort":c?((r=y?.sort)===null||r===void 0?void 0:r.orderBy)===p?(a=y?.sort)===null||a===void 0?void 0:a.direction:"none":void 0},k),c?U.createElement("button",{type:"button",className:E("navds-table__sort-button"),onClick:c&&p?()=>{var T;return(T=y?.onSortChange)===null||T===void 0?void 0:T.call(y,p)}:void 0},g,((s=y?.sort)===null||s===void 0?void 0:s.orderBy)===p?((o=y?.sort)===null||o===void 0?void 0:o.direction)==="descending"?U.createElement(y0,{"aria-hidden":!0}):U.createElement(E0,{"aria-hidden":!0}):U.createElement(f0,{"aria-hidden":!0})):g)});var eT=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const Ef=A.forwardRef((e,i)=>{var{className:r,children:a="",align:s,textSize:o}=e,d=eT(e,["className","children","align","textSize"]);const{cn:g}=Ne();return U.createElement(di,Object.assign({as:"td",ref:i,className:g("navds-table__data-cell",r,{[`navds-table__data-cell--align-${s}`]:s}),size:o},d),a)});var nT=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const tT=globalThis?.matchMedia?globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches:!1;function rT(e){const i=parseFloat(e);return!Number.isNaN(i)&&Number.isFinite(i)}function eg(e){return typeof e=="string"&&e[e.length-1]==="%"&&rT(e.substring(0,e.length-1))}function el(e,i){i===0&&e?.style&&(e.style.display="none")}function aT(e,i){i===0&&e?.style&&(e.style.display="")}const iT=e=>{var{children:i,className:r,innerClassName:a,duration:s=250,easing:o="ease",height:d}=e,g=nT(e,["children","className","innerClassName","duration","easing","height"]);const{cn:c}=Ne(),p=A.useRef(d),k=A.useRef(null),y=A.useRef(),E=A.useRef(),T=A.useRef(d),O=A.useRef("visible"),_=tT?0:s;typeof T.current=="number"?(typeof d!="string"&&(T.current=d<0?0:d),O.current="hidden"):eg(T.current)&&(T.current=d==="0%"?0:d,O.current="hidden");const[b,R]=A.useState(T.current),[P,j]=A.useState(O.current),[H,I]=A.useState(!1);A.useEffect(()=>{el(k.current,T.current)},[]),A.useEffect(()=>{if(d!==p.current&&k.current){aT(k.current,p.current),k.current.style.overflow="hidden";const z=k.current.offsetHeight;k.current.style.overflow="";const Q=_;let Z,J,F="hidden",D;const X=p.current==="auto";typeof d=="number"?(Z=d<0?0:d,J=Z):eg(d)?(Z=d==="0%"?0:d,J=Z):(Z=z,J="auto",F=void 0),X&&(J=Z,Z=z),R(Z),j("hidden"),I(!X),clearTimeout(E.current),clearTimeout(y.current),X?(D=!0,E.current=setTimeout(()=>{R(J),j(F),I(D)},50),y.current=setTimeout(()=>{I(!1),el(k.current,J)},Q)):E.current=setTimeout(()=>{R(J),j(F),I(!1),d!=="auto"&&el(k.current,Z)},Q)}return p.current=d,()=>{clearTimeout(E.current),clearTimeout(y.current)}},[d]);const V={height:b,overflow:P};H&&(V.transition=`height ${_}ms ${o} 0ms`,V.WebkitTransition=V.transition);const q=typeof g["aria-hidden"]<"u"?g["aria-hidden"]:d===0;return U.createElement("div",Object.assign({},g,{className:c(r),style:V}),U.createElement("div",{"aria-hidden":q,className:c(a),ref:k},i))};var sT=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const Tf=A.forwardRef((e,i)=>{var{className:r,selected:a=!1,shadeOnHover:s=!0}=e,o=sT(e,["className","selected","shadeOnHover"]);const{cn:d}=Ne();return U.createElement("tr",Object.assign({},o,{ref:i,className:d("navds-table__row",r,{"navds-table__row--selected":a,"navds-table__row--shade-on-hover":s})}))});var lT=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const oT=A.forwardRef((e,i)=>{var{className:r,children:a,content:s,togglePlacement:o="left",defaultOpen:d=!1,open:g,onOpenChange:c,expansionDisabled:p=!1,expandOnRowClick:k=!1,colSpan:y=999,contentGutter:E,onClick:T}=e,O=lT(e,["className","children","content","togglePlacement","defaultOpen","open","onOpenChange","expansionDisabled","expandOnRowClick","colSpan","contentGutter","onClick"]);const{cn:_}=Ne(),[b,R]=Ml({defaultValue:d,value:g,onChange:c}),P=ki("global"),j=gi(),H=V=>{R(x=>!x),V.stopPropagation()},I=V=>{k&&!p&&!_f(V.target)&&H(V)};return U.createElement(U.Fragment,null,U.createElement(Tf,Object.assign({},O,{ref:i,className:_("navds-table__expandable-row",r,{"navds-table__expandable-row--open":b,"navds-table__expandable-row--expansion-disabled":p,"navds-table__expandable-row--clickable":k}),onClick:fi(T,I)}),o==="right"&&a,U.createElement(Ef,{className:_("navds-table__toggle-expand-cell",{"navds-table__toggle-expand-cell--open":b}),onClick:p?()=>null:H},!p&&U.createElement("button",{className:_("navds-table__toggle-expand-button"),type:"button","aria-controls":j,"aria-expanded":b,onClick:H},U.createElement(Jg,{className:_("navds-table__expandable-icon"),title:P(b?"showLess":"showMore")}))),o==="left"&&a),U.createElement("tr",{"data-state":b?"open":"closed",className:_("navds-table__expanded-row"),"aria-hidden":!b,id:j},U.createElement("td",{colSpan:y,className:_("navds-table__expanded-row-cell")},U.createElement(iT,{className:_("navds-table__expanded-row-collapse"),innerClassName:_(`navds-table__expanded-row-content navds-table__expanded-row-content--gutter-${E??o}`),height:b?"auto":0,duration:150,easing:"cubic-bezier(0.39,0.57,0.56,1)"},s))))});function _f(e){return e.nodeName==="TD"||e.nodeName==="TH"||!e.parentElement?!1:["BUTTON","DETAILS","LABEL","SELECT","TEXTAREA","INPUT","A"].includes(e.nodeName)?!0:_f(e.parentElement)}var uT=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const dT=A.forwardRef((e,i)=>{var{className:r}=e,a=uT(e,["className"]);const{cn:s}=Ne();return U.createElement("thead",Object.assign({},a,{ref:i,className:s("navds-table__header",r)}))});var gT=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const Fe=A.forwardRef((e,i)=>{var{className:r,zebraStripes:a=!1,size:s="medium",onSortChange:o,sort:d,stickyHeader:g=!1}=e,c=gT(e,["className","zebraStripes","size","onSortChange","sort","stickyHeader"]);const{cn:p}=Ne();return U.createElement(bf.Provider,{value:{onSortChange:o,sort:d}},U.createElement("table",Object.assign({},c,{ref:i,className:p("navds-table",`navds-table--${s}`,r,{"navds-table--zebra-stripes":a,"navds-table--sticky-header":g})})))});Fe.Header=dT;Fe.Body=X1;Fe.Row=Tf;Fe.ColumnHeader=Q1;Fe.HeaderCell=yf;Fe.DataCell=Ef;Fe.ExpandableRow=oT;var fT=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const cT=A.forwardRef((e,i)=>{var{children:r,className:a,arrow:s=!0,placement:o="top",open:d,defaultOpen:g=!1,onOpenChange:c,offset:p,content:k,delay:y=150,id:E,keys:T,maxChar:O=80,describesChild:_=!1}=e,b=fT(e,["children","className","arrow","placement","open","defaultOpen","onOpenChange","offset","content","delay","id","keys","maxChar","describesChild"]);const{cn:R}=Ne(),[P,j]=Ml({defaultValue:g,value:d,onChange:c}),H=A.useRef(null),I=_0(!1),V=I?I.ref.current:void 0,{x,y:q,strategy:z,context:Q,placement:Z,middlewareData:{arrow:{x:J,y:F}={},hide:{referenceHidden:D}={}},refs:X}=N1({placement:o,open:P,onOpenChange:ne=>j(ne),middleware:[VE(p??(s?8:4)),HE(),GE({padding:5,fallbackPlacements:["bottom","top"]}),UE({element:H,padding:5})],whileElementsMounted:I?(ne,le,he)=>Kd(ne,le,he,{animationFrame:!0}):Kd,strategy:I?"fixed":void 0}),{getReferenceProps:te,getFloatingProps:W}=O1([_1(Q,{handleClose:x1(),restMs:y}),I1(Q),S1(Q)]),G=gi(E),Y=$g(i,X.setFloating);if(!r||r?.type===U.Fragment||r===U.Fragment)return console.error("<Tooltip> children needs to be a single ReactElement and not: <React.Fragment/> | <></>"),null;k?.length>O&&P&&console.warn(`Because of strict accessibility concers we encourage all Tooltips to have less than 80 characters. Can be overwritten with the maxChar-prop

Length:${k.length}
Tooltip-content: ${k}`);const ae=_?P?{"aria-describedby":G}:{title:k}:{"aria-label":k};return U.createElement(U.Fragment,null,U.createElement(zr,Object.assign({ref:X.setReference},te(),ae,{"aria-keyshortcuts":T?T.join("+"):void 0}),r),U.createElement(iE,{rootElement:V,asChild:!0},P&&U.createElement("div",Object.assign({},W(Object.assign(Object.assign({},b),{ref:Y,style:{position:z,top:q??0,left:x??0,visibility:D?"hidden":"visible"},role:"tooltip",id:G,className:R("navds-tooltip","navds-detail navds-detail--small",a)})),{"data-side":Z,"data-state":"open"}),k,T&&U.createElement("span",{className:R("navds-tooltip__keys"),"aria-hidden":!0},T.map(ne=>U.createElement(n0,{as:"kbd",key:ne,className:R("navds-tooltip__key")},ne))),s&&U.createElement("div",{ref:ne=>{H.current=ne},className:R("navds-tooltip__arrow"),style:{left:J!=null?`${J}px`:"",top:F!=null?`${F}px`:"",right:"",bottom:"",[{top:"bottom",right:"left",bottom:"top",left:"right"}[Z]]:"-3.5px"}}))))}),wf=A.createContext(null);var mT=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const Af=A.forwardRef((e,i)=>{var r,{className:a,children:s,disabled:o,onClick:d}=e,g=mT(e,["className","children","disabled","onClick"]);const{cn:c}=Ne(),p=ki("Search"),k=A.useContext(wf);if(k===null)return console.warn("<Search.Button> has to be wrapped in <Search />"),null;const{size:y,variant:E,handleClick:T}=k;return U.createElement(Hl,Object.assign({type:"submit"},g,{ref:i,size:y,variant:E==="secondary"?"secondary":"primary",className:c("navds-search__button-search",a),disabled:(r=k?.disabled)!==null&&r!==void 0?r:o,onClick:fi(d,T),icon:U.createElement(Qg,Object.assign({},s?{"aria-hidden":!0}:{title:p("search")}))}),s)});var pT=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const kl=A.forwardRef((e,i)=>{const{inputProps:r,size:a="medium",inputDescriptionId:s,errorId:o,showErrorMsg:d,hasError:g}=L1(e,"searchfield"),{className:c,hideLabel:p=!0,label:k,description:y,value:E,clearButtonLabel:T,onClear:O,clearButton:_=!0,children:b,variant:R="primary",defaultValue:P,onChange:j,onSearchClick:H,htmlSize:I,"data-color":V}=e,x=pT(e,["className","hideLabel","label","description","value","clearButtonLabel","onClear","clearButton","children","variant","defaultValue","onChange","onSearchClick","htmlSize","data-color"]),{cn:q}=Ne(),z=A.useRef(null),Q=$g(z,i),[Z,J]=A.useState(P??""),F=W=>{E===void 0&&J(W),j?.(W)},D=W=>{var G,Y;O?.(W),F(""),(Y=(G=z.current)===null||G===void 0?void 0:G.focus)===null||Y===void 0||Y.call(G)},X=()=>{H?.(`${E??Z}`)},te=_&&!r.disabled&&(E??Z);return U.createElement("div",{onKeyDown:W=>{var G;W.key==="Escape"&&(!((G=z.current)===null||G===void 0)&&G.value&&W.preventDefault(),D({trigger:"Escape",event:W}))},className:q(c,"navds-form-field",`navds-form-field--${a}`,"navds-search",{"navds-search--error":g,"navds-search--disabled":r.disabled,"navds-search--with-size":I}),"data-color":V},U.createElement(Dl,{htmlFor:r.id,size:a,className:q("navds-form-field__label",{"navds-sr-only":p})},k),!!y&&U.createElement(di,{className:q("navds-form-field__description",{"navds-sr-only":p}),id:s,size:a,as:"div"},y),U.createElement("div",{className:q("navds-search__wrapper")},U.createElement("div",{className:q("navds-search__wrapper-inner")},R==="simple"&&U.createElement(Qg,{"aria-hidden":!0,className:q("navds-search__search-icon")}),U.createElement("input",Object.assign({ref:Q},Xr(x,["error","errorId","size","readOnly"]),r,{value:E??Z,onChange:W=>F(W.target.value),type:"search",className:q(c,"navds-search__input",`navds-search__input--${R}`,"navds-text-field__input","navds-body-short",`navds-body-short--${a}`)},I?{size:Number(I)}:{})),te&&U.createElement(hT,{handleClear:D,size:a,clearButtonLabel:T})),U.createElement(wf.Provider,{value:{size:a,disabled:r.disabled,variant:R,handleClick:X}},b||R!=="simple"&&U.createElement(Af,{"data-color":V}))),U.createElement("div",{className:q("navds-form-field__error"),id:o,"aria-relevant":"additions removals","aria-live":"polite"},d&&U.createElement(r0,{size:a,showIcon:!0},e.error)))});function hT({size:e,clearButtonLabel:i,handleClear:r}){const{cn:a}=Ne(),s=fr(!1),o=ki("Search");return s?U.createElement(Hl,{className:a("navds-search__button-clear"),variant:"tertiary","data-color":"neutral",size:e==="medium"?"small":"xsmall",icon:U.createElement(Dd,{"aria-hidden":!0}),title:i||o("clear"),onClick:d=>r({trigger:"Click",event:d}),type:"button"}):U.createElement("button",{type:"button",onClick:d=>r({trigger:"Click",event:d}),className:a("navds-search__button-clear")},U.createElement("span",{className:a("navds-sr-only")},i||o("clear")),U.createElement(Dd,{"aria-hidden":!0}))}kl.Button=Af;function kT(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ng={exports:{}},Lr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tg;function vT(){if(tg)return Lr;tg=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(a,s,o){var d=null;if(o!==void 0&&(d=""+o),s.key!==void 0&&(d=""+s.key),"key"in s){o={};for(var g in s)g!=="key"&&(o[g]=s[g])}else o=s;return s=o.ref,{$$typeof:e,type:a,key:d,ref:s!==void 0?s:null,props:o}}return Lr.Fragment=i,Lr.jsx=r,Lr.jsxs=r,Lr}var rg;function yT(){return rg||(rg=1,ng.exports=vT()),ng.exports}var Rt=yT();const ea={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"};Kn(ea);var ag={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var ig;function bT(){return ig||(ig=1,function(e){(function(){var i={}.hasOwnProperty;function r(){for(var o="",d=0;d<arguments.length;d++){var g=arguments[d];g&&(o=s(o,a.call(this,g)))}return o}function a(o){if(typeof o=="string"||typeof o=="number")return this&&this[o]||o;if(typeof o!="object")return"";if(Array.isArray(o))return r.apply(this,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var d="";for(var g in o)i.call(o,g)&&o[g]&&(d=s(d,this&&this[g]||g));return d}function s(o,d){return d?o?o+" "+d:o+d:o}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(ag)),ag.exports}var ET=bT();const $l=kT(ET),TT="_borderbox_1a0x6_1",_T="_error_1a0x6_5",wT="_warning_1a0x6_8",AT={borderbox:TT,error:_T,warning:wT};$l.bind(AT);const RT="_aksjonspunkt_11wjs_1",ST="_erAksjonspunktApent_11wjs_4",jT="_erIkkeGodkjentAvBeslutter_11wjs_8",NT={aksjonspunkt:RT,erAksjonspunktApent:ST,erIkkeGodkjentAvBeslutter:jT};$l.bind(NT);const Wr=({dateString:e,year:i,month:r,day:a})=>Rt.jsx(Rt.Fragment,{children:Yg(e,{year:i,month:r,day:a})}),ui=({dateTimeString:e,...i})=>Rt.jsx(Rt.Fragment,{children:Gb(e,i)});Kn(ea);Kn(ea);const IT="_divider_1jpov_1",OT="_dividerParagraf_1jpov_8",PT="_leftPanel_1jpov_11",BT="_rightPanel_1jpov_14",xT={divider:IT,dividerParagraf:OT,leftPanel:PT,rightPanel:BT};$l.bind(xT);Kn(ea);const qT=Kn(ea),DT=({tekst:e,children:i})=>{const[r,a]=A.useState(!1);if(!e)return i;const s=async()=>{await navigator.clipboard.writeText(e),a(!0),setTimeout(()=>{a(!1)},1e3)};return Rt.jsx(cT,{content:qT.formatMessage({id:r?"KopierbarTekst.Kopiert":"KopierbarTekst.Kopier"}),children:Rt.jsx("span",{"aria-hidden":"true",onClick:s,children:i??e})})},sg={default:"_default_af3od_1",rød:"_rød_af3od_5"},lr=({beløp:e,kr:i=!1,rød:r=!1})=>{const a=e?.toString().replace(/\s/g,"");return Rt.jsx(DT,{tekst:a,children:Rt.jsxs("span",{className:r?sg.rød:sg.default,children:[a?Ub(a):"-",a&&i&&" kr"]})})},Xn=({tittel:e,children:i})=>L.jsxs(vi,{gap:"space-4",children:[L.jsx(Dl,{size:"medium",children:e}),i]});Xn.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingInfoBlokk",props:{tittel:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Rf=({arbeidsgiverOpplysninger:e,arbeidsgiverIdent:i})=>{const r=mt();return L.jsxs(Xn,{tittel:r.formatMessage({id:"InntektsmeldingFaktaPanel.arbeidsgiver.heading"}),children:[L.jsxs("span",{children:[L.jsx(je,{id:"InntektsmeldingFaktaPanel.arbeidsgiver.navn"}),": ",e.navn]}),L.jsxs("span",{children:[L.jsx(je,{id:"InntektsmeldingFaktaPanel.arbeidsgiver.underenhet"}),": ",i]})]})};Rf.__docgenInfo={description:"",methods:[],displayName:"Arbeidsgiver",props:{arbeidsgiverOpplysninger:{required:!0,tsType:{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`},description:""},arbeidsgiverIdent:{required:!0,tsType:{name:"string"},description:""}}};const Sf=({inntektsmelding:e,behandling:i,alleBehandlinger:r,alleKodeverk:a})=>{const s=mt(),o=e.tilknyttedeBehandlingIder.includes(i.uuid),d=r.filter(p=>e.tilknyttedeBehandlingIder.includes(p.uuid)),g=(()=>{const p=d.length;return o&&p>1?L.jsx(je,{id:"InntektsmeldingFaktaPanel.behandling.bruktIDenneOgFlere"}):o?L.jsx(je,{id:"InntektsmeldingFaktaPanel.behandling.bruktKunIDenne"}):p===0?L.jsx(je,{id:"InntektsmeldingFaktaPanel.behandling.ikkeBruktINoen"}):L.jsx(je,{id:"InntektsmeldingFaktaPanel.behandling.bruktIAndre"})})(),c=[...d].sort((p,k)=>new Date(p.opprettet).getTime()-new Date(k.opprettet).getTime());return L.jsxs(Xn,{tittel:s.formatMessage({id:"InntektsmeldingFaktaPanel.behandling.heading"}),children:[g,L.jsx(hl,{children:c.map(p=>L.jsx(hl.Item,{children:L.jsxs(vi,{gap:"space-4",children:[L.jsx("span",{children:a.BehandlingType.find(({kode:k})=>k===p.type)?.navn}),L.jsxs("span",{children:[L.jsx(je,{id:"InntektsmeldingFaktaPanel.behandling.opprettet"})," ",L.jsx(ui,{dateTimeString:p.opprettet,separator:"kl"})]}),p.avsluttet?L.jsxs("span",{children:[L.jsx(je,{id:"InntektsmeldingFaktaPanel.behandling.avsluttet"})," ",L.jsx(ui,{dateTimeString:p.avsluttet,separator:"kl"})]}):null]})},p.uuid))})]})};Sf.__docgenInfo={description:"",methods:[],displayName:"BehandlingsOversikt",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};function MT(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var lg={exports:{}},Fr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var og;function LT(){if(og)return Fr;og=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(a,s,o){var d=null;if(o!==void 0&&(d=""+o),s.key!==void 0&&(d=""+s.key),"key"in s){o={};for(var g in s)g!=="key"&&(o[g]=s[g])}else o=s;return s=o.ref,{$$typeof:e,type:a,key:d,ref:s!==void 0?s:null,props:o}}return Fr.Fragment=i,Fr.jsx=r,Fr.jsxs=r,Fr}var ug;function FT(){return ug||(ug=1,lg.exports=LT()),lg.exports}FT();var vl={exports:{}},KT=vl.exports,dg;function CT(){return dg||(dg=1,function(e,i){(function(r,a){e.exports=a()})(KT,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},a=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,s=/\d/,o=/\d\d/,d=/\d\d?/,g=/\d*[^-_:/,()\s\d]+/,c={},p=function(b){return(b=+b)+(b>68?1900:2e3)},k=function(b){return function(R){this[b]=+R}},y=[/[+-]\d\d:?(\d\d)?|Z/,function(b){(this.zone||(this.zone={})).offset=function(R){if(!R||R==="Z")return 0;var P=R.match(/([+-]|\d\d)/g),j=60*P[1]+(+P[2]||0);return j===0?0:P[0]==="+"?-j:j}(b)}],E=function(b){var R=c[b];return R&&(R.indexOf?R:R.s.concat(R.f))},T=function(b,R){var P,j=c.meridiem;if(j){for(var H=1;H<=24;H+=1)if(b.indexOf(j(H,0,R))>-1){P=H>12;break}}else P=b===(R?"pm":"PM");return P},O={A:[g,function(b){this.afternoon=T(b,!1)}],a:[g,function(b){this.afternoon=T(b,!0)}],Q:[s,function(b){this.month=3*(b-1)+1}],S:[s,function(b){this.milliseconds=100*+b}],SS:[o,function(b){this.milliseconds=10*+b}],SSS:[/\d{3}/,function(b){this.milliseconds=+b}],s:[d,k("seconds")],ss:[d,k("seconds")],m:[d,k("minutes")],mm:[d,k("minutes")],H:[d,k("hours")],h:[d,k("hours")],HH:[d,k("hours")],hh:[d,k("hours")],D:[d,k("day")],DD:[o,k("day")],Do:[g,function(b){var R=c.ordinal,P=b.match(/\d+/);if(this.day=P[0],R)for(var j=1;j<=31;j+=1)R(j).replace(/\[|\]/g,"")===b&&(this.day=j)}],w:[d,k("week")],ww:[o,k("week")],M:[d,k("month")],MM:[o,k("month")],MMM:[g,function(b){var R=E("months"),P=(E("monthsShort")||R.map(function(j){return j.slice(0,3)})).indexOf(b)+1;if(P<1)throw new Error;this.month=P%12||P}],MMMM:[g,function(b){var R=E("months").indexOf(b)+1;if(R<1)throw new Error;this.month=R%12||R}],Y:[/[+-]?\d+/,k("year")],YY:[o,function(b){this.year=p(b)}],YYYY:[/\d{4}/,k("year")],Z:y,ZZ:y};function _(b){var R,P;R=b,P=c&&c.formats;for(var j=(b=R.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(Q,Z,J){var F=J&&J.toUpperCase();return Z||P[J]||r[J]||P[F].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(D,X,te){return X||te.slice(1)})})).match(a),H=j.length,I=0;I<H;I+=1){var V=j[I],x=O[V],q=x&&x[0],z=x&&x[1];j[I]=z?{regex:q,parser:z}:V.replace(/^\[|\]$/g,"")}return function(Q){for(var Z={},J=0,F=0;J<H;J+=1){var D=j[J];if(typeof D=="string")F+=D.length;else{var X=D.regex,te=D.parser,W=Q.slice(F),G=X.exec(W)[0];te.call(Z,G),Q=Q.replace(G,"")}}return function(Y){var ae=Y.afternoon;if(ae!==void 0){var ne=Y.hours;ae?ne<12&&(Y.hours+=12):ne===12&&(Y.hours=0),delete Y.afternoon}}(Z),Z}}return function(b,R,P){P.p.customParseFormat=!0,b&&b.parseTwoDigitYear&&(p=b.parseTwoDigitYear);var j=R.prototype,H=j.parse;j.parse=function(I){var V=I.date,x=I.utc,q=I.args;this.$u=x;var z=q[1];if(typeof z=="string"){var Q=q[2]===!0,Z=q[3]===!0,J=Q||Z,F=q[2];Z&&(F=q[2]),c=this.$locale(),!Q&&F&&(c=P.Ls[F]),this.$d=function(W,G,Y,ae){try{if(["x","X"].indexOf(G)>-1)return new Date((G==="X"?1e3:1)*W);var ne=_(G)(W),le=ne.year,he=ne.month,mn=ne.day,Ke=ne.hours,qe=ne.minutes,Ce=ne.seconds,ve=ne.milliseconds,we=ne.zone,Ze=ne.week,Ve=new Date,Ge=mn||(le||he?1:Ve.getDate()),_n=le||Ve.getFullYear(),Me=0;le&&!he||(Me=he>0?he-1:Ve.getMonth());var Je,Qn=Ke||0,Qe=qe||0,Vn=Ce||0,et=ve||0;return we?new Date(Date.UTC(_n,Me,Ge,Qn,Qe,Vn,et+60*we.offset*1e3)):Y?new Date(Date.UTC(_n,Me,Ge,Qn,Qe,Vn,et)):(Je=new Date(_n,Me,Ge,Qn,Qe,Vn,et),Ze&&(Je=ae(Je).week(Ze).toDate()),Je)}catch{return new Date("")}}(V,z,x,P),this.init(),F&&F!==!0&&(this.$L=this.locale(F).$L),J&&V!=this.format(z)&&(this.$d=new Date("")),c={}}else if(z instanceof Array)for(var D=z.length,X=1;X<=D;X+=1){q[1]=z[X-1];var te=P.apply(this,q);if(te.isValid()){this.$d=te.$d,this.$L=te.$L,this.init();break}X===D&&(this.$d=new Date(""))}else H.call(this,I)}}})}(vl)),vl.exports}var VT=CT();const HT=MT(VT);cr.extend(HT);const na={"AdresseVisning.Adresse":"Adresse","ForelderPanel.Soker":"Søker","ForelderPanel.AnnenForelder":"Annen forelder","AlleBarnPanel.Barn":"Barn","AlleBarnPanel.BarnNr":"Barn {nummer}","AlleBarnPanel.Fodt":"Født","AlleBarnPanel.Dod":"Død","PersonPanel.RolleOgNavn":"{rolle, select, BRUKER {Søker, } ANNEN_PART {Den andre forelderen, } BARN {Barnet, } other {} }{navn}","PersonPanel.Beskrivelse.Bruker":"Adresser for søker registrert i folkeregisteret gyldige for de siste 12 månedene","PersonPanel.Beskrivelse.Barn":"Adresser for barnet registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Beskrivelse.Annenpart":"Adresser for den andre forelderen registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Fodt":"Født {dato}","PersonPanel.Dod":"Død {dato}","AdresseTabell.IngenAdresse":"Ingen adresser funnet for {erAnnenpart, select, true {den andre forelderen} other {søker} }.","AdresseTabell.SammeAdresse":"Den andre forelderen har samme adresse som søker på skjæringstidspunktet","AdresseTabell.PeriodeLabel":"Periode","AdresseTabell.AdresseLabel":"Adresse","AdresseTabell.TypeLabel":"Type","MerkePanel.Dod":"DØD","MerkePanel.DodTittel":"Personen er død","MerkePanel.DodFodt":"DØDFØDT","MerkePanel.Diskresjon6":"Kode 6","MerkePanel.Diskresjon7":"Kode 7","MerkePanel.EgenAnsatt":"Nav","MerkePanel.Verge":"Verge","MerkePanel.Diskresjon6Tittel":"Personen har diskresjonsmerking kode 6","MerkePanel.Diskresjon7Tittel":"Personen har diskresjonsmerking kode 7","MerkePanel.EgenAnsattTittel":"Personen er ansatt i Nav","MerkePanel.VergeTittel":"Personen har verge","SubmitButton.ConfirmInformation":"Bekreft og fortsett","FaktaBegrunnelseTextField.BegrunnEndringene":"Begrunn endringene","FaktaBegrunnelseTextField.Vurdering":"Vurdering","FaktaBegrunnelseTextField.Begrunnelse":"Begrunnelse","TrueFalseInput.True":"Ja","TrueFalseInput.False":"Nei","FaktaKilde.Soknad":"FRA SØKNADEN","FaktaKilde.FREG":"FRA FOLKEREGISTERET","FaktaKilde.MEDL":"FRA MEDLEMSKAPSREGISTERET","FaktaKilde.Ukjent":"FRA UKJENT KILDE","FaktaKilde.SBH":"FRA SAKSBEHANDLER"};Kn(na);Kn(na);Kn(na);const GT=(e,i)=>{const r=new Date(e.tom??$r),a=new Date(i.tom??$r);if(r>a)return-1;if(r<a)return 1;if(e.fom&&!i.fom)return-1;if(!e.fom&&i.fom)return 1;if(e.fom&&i.fom){const s=new Date(e.fom),o=new Date(i.fom);if(s>o)return-1;if(s<o)return 1}return 0};var Hr={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var UT=Hr.exports,gg;function $T(){return gg||(gg=1,function(e,i){(function(){var r,a="4.17.21",s=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",d="Expected a function",g="Invalid `variable` option passed into `_.template`",c="__lodash_hash_undefined__",p=500,k="__lodash_placeholder__",y=1,E=2,T=4,O=1,_=2,b=1,R=2,P=4,j=8,H=16,I=32,V=64,x=128,q=256,z=512,Q=30,Z="...",J=800,F=16,D=1,X=2,te=3,W=1/0,G=9007199254740991,Y=17976931348623157e292,ae=NaN,ne=4294967295,le=ne-1,he=ne>>>1,mn=[["ary",x],["bind",b],["bindKey",R],["curry",j],["curryRight",H],["flip",z],["partial",I],["partialRight",V],["rearg",q]],Ke="[object Arguments]",qe="[object Array]",Ce="[object AsyncFunction]",ve="[object Boolean]",we="[object Date]",Ze="[object DOMException]",Ve="[object Error]",Ge="[object Function]",_n="[object GeneratorFunction]",Me="[object Map]",Je="[object Number]",Qn="[object Null]",Qe="[object Object]",Vn="[object Promise]",et="[object Proxy]",kr="[object RegExp]",qn="[object Set]",vr="[object String]",ia="[object Symbol]",lc="[object Undefined]",yr="[object WeakMap]",oc="[object WeakSet]",br="[object ArrayBuffer]",Ht="[object DataView]",Ti="[object Float32Array]",_i="[object Float64Array]",wi="[object Int8Array]",Ai="[object Int16Array]",Ri="[object Int32Array]",Si="[object Uint8Array]",ji="[object Uint8ClampedArray]",Ni="[object Uint16Array]",Ii="[object Uint32Array]",uc=/\b__p \+= '';/g,dc=/\b(__p \+=) '' \+/g,gc=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Xl=/&(?:amp|lt|gt|quot|#39);/g,Zl=/[&<>"']/g,fc=RegExp(Xl.source),cc=RegExp(Zl.source),mc=/<%-([\s\S]+?)%>/g,pc=/<%([\s\S]+?)%>/g,Jl=/<%=([\s\S]+?)%>/g,hc=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,kc=/^\w*$/,vc=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Oi=/[\\^$.*+?()[\]{}|]/g,yc=RegExp(Oi.source),Pi=/^\s+/,bc=/\s/,Ec=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Tc=/\{\n\/\* \[wrapped with (.+)\] \*/,_c=/,? & /,wc=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Ac=/[()=,{}\[\]\/\s]/,Rc=/\\(\\)?/g,Sc=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Ql=/\w*$/,jc=/^[-+]0x[0-9a-f]+$/i,Nc=/^0b[01]+$/i,Ic=/^\[object .+?Constructor\]$/,Oc=/^0o[0-7]+$/i,Pc=/^(?:0|[1-9]\d*)$/,Bc=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,sa=/($^)/,xc=/['\n\r\u2028\u2029\\]/g,la="\\ud800-\\udfff",qc="\\u0300-\\u036f",Dc="\\ufe20-\\ufe2f",Mc="\\u20d0-\\u20ff",eo=qc+Dc+Mc,no="\\u2700-\\u27bf",to="a-z\\xdf-\\xf6\\xf8-\\xff",Lc="\\xac\\xb1\\xd7\\xf7",Fc="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Kc="\\u2000-\\u206f",Cc=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ro="A-Z\\xc0-\\xd6\\xd8-\\xde",ao="\\ufe0e\\ufe0f",io=Lc+Fc+Kc+Cc,Bi="['’]",Vc="["+la+"]",so="["+io+"]",oa="["+eo+"]",lo="\\d+",Hc="["+no+"]",oo="["+to+"]",uo="[^"+la+io+lo+no+to+ro+"]",xi="\\ud83c[\\udffb-\\udfff]",Gc="(?:"+oa+"|"+xi+")",go="[^"+la+"]",qi="(?:\\ud83c[\\udde6-\\uddff]){2}",Di="[\\ud800-\\udbff][\\udc00-\\udfff]",Gt="["+ro+"]",fo="\\u200d",co="(?:"+oo+"|"+uo+")",Uc="(?:"+Gt+"|"+uo+")",mo="(?:"+Bi+"(?:d|ll|m|re|s|t|ve))?",po="(?:"+Bi+"(?:D|LL|M|RE|S|T|VE))?",ho=Gc+"?",ko="["+ao+"]?",$c="(?:"+fo+"(?:"+[go,qi,Di].join("|")+")"+ko+ho+")*",Yc="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Wc="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",vo=ko+ho+$c,zc="(?:"+[Hc,qi,Di].join("|")+")"+vo,Xc="(?:"+[go+oa+"?",oa,qi,Di,Vc].join("|")+")",Zc=RegExp(Bi,"g"),Jc=RegExp(oa,"g"),Mi=RegExp(xi+"(?="+xi+")|"+Xc+vo,"g"),Qc=RegExp([Gt+"?"+oo+"+"+mo+"(?="+[so,Gt,"$"].join("|")+")",Uc+"+"+po+"(?="+[so,Gt+co,"$"].join("|")+")",Gt+"?"+co+"+"+mo,Gt+"+"+po,Wc,Yc,lo,zc].join("|"),"g"),em=RegExp("["+fo+la+eo+ao+"]"),nm=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,tm=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],rm=-1,Be={};Be[Ti]=Be[_i]=Be[wi]=Be[Ai]=Be[Ri]=Be[Si]=Be[ji]=Be[Ni]=Be[Ii]=!0,Be[Ke]=Be[qe]=Be[br]=Be[ve]=Be[Ht]=Be[we]=Be[Ve]=Be[Ge]=Be[Me]=Be[Je]=Be[Qe]=Be[kr]=Be[qn]=Be[vr]=Be[yr]=!1;var Oe={};Oe[Ke]=Oe[qe]=Oe[br]=Oe[Ht]=Oe[ve]=Oe[we]=Oe[Ti]=Oe[_i]=Oe[wi]=Oe[Ai]=Oe[Ri]=Oe[Me]=Oe[Je]=Oe[Qe]=Oe[kr]=Oe[qn]=Oe[vr]=Oe[ia]=Oe[Si]=Oe[ji]=Oe[Ni]=Oe[Ii]=!0,Oe[Ve]=Oe[Ge]=Oe[yr]=!1;var am={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},im={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},sm={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},lm={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},om=parseFloat,um=parseInt,yo=typeof Wa=="object"&&Wa&&Wa.Object===Object&&Wa,dm=typeof self=="object"&&self&&self.Object===Object&&self,en=yo||dm||Function("return this")(),Li=i&&!i.nodeType&&i,jt=Li&&!0&&e&&!e.nodeType&&e,bo=jt&&jt.exports===Li,Fi=bo&&yo.process,wn=function(){try{var S=jt&&jt.require&&jt.require("util").types;return S||Fi&&Fi.binding&&Fi.binding("util")}catch{}}(),Eo=wn&&wn.isArrayBuffer,To=wn&&wn.isDate,_o=wn&&wn.isMap,wo=wn&&wn.isRegExp,Ao=wn&&wn.isSet,Ro=wn&&wn.isTypedArray;function pn(S,M,B){switch(B.length){case 0:return S.call(M);case 1:return S.call(M,B[0]);case 2:return S.call(M,B[0],B[1]);case 3:return S.call(M,B[0],B[1],B[2])}return S.apply(M,B)}function gm(S,M,B,re){for(var ge=-1,_e=S==null?0:S.length;++ge<_e;){var Ye=S[ge];M(re,Ye,B(Ye),S)}return re}function An(S,M){for(var B=-1,re=S==null?0:S.length;++B<re&&M(S[B],B,S)!==!1;);return S}function fm(S,M){for(var B=S==null?0:S.length;B--&&M(S[B],B,S)!==!1;);return S}function So(S,M){for(var B=-1,re=S==null?0:S.length;++B<re;)if(!M(S[B],B,S))return!1;return!0}function ht(S,M){for(var B=-1,re=S==null?0:S.length,ge=0,_e=[];++B<re;){var Ye=S[B];M(Ye,B,S)&&(_e[ge++]=Ye)}return _e}function ua(S,M){var B=S==null?0:S.length;return!!B&&Ut(S,M,0)>-1}function Ki(S,M,B){for(var re=-1,ge=S==null?0:S.length;++re<ge;)if(B(M,S[re]))return!0;return!1}function De(S,M){for(var B=-1,re=S==null?0:S.length,ge=Array(re);++B<re;)ge[B]=M(S[B],B,S);return ge}function kt(S,M){for(var B=-1,re=M.length,ge=S.length;++B<re;)S[ge+B]=M[B];return S}function Ci(S,M,B,re){var ge=-1,_e=S==null?0:S.length;for(re&&_e&&(B=S[++ge]);++ge<_e;)B=M(B,S[ge],ge,S);return B}function cm(S,M,B,re){var ge=S==null?0:S.length;for(re&&ge&&(B=S[--ge]);ge--;)B=M(B,S[ge],ge,S);return B}function Vi(S,M){for(var B=-1,re=S==null?0:S.length;++B<re;)if(M(S[B],B,S))return!0;return!1}var mm=Hi("length");function pm(S){return S.split("")}function hm(S){return S.match(wc)||[]}function jo(S,M,B){var re;return B(S,function(ge,_e,Ye){if(M(ge,_e,Ye))return re=_e,!1}),re}function da(S,M,B,re){for(var ge=S.length,_e=B+(re?1:-1);re?_e--:++_e<ge;)if(M(S[_e],_e,S))return _e;return-1}function Ut(S,M,B){return M===M?jm(S,M,B):da(S,No,B)}function km(S,M,B,re){for(var ge=B-1,_e=S.length;++ge<_e;)if(re(S[ge],M))return ge;return-1}function No(S){return S!==S}function Io(S,M){var B=S==null?0:S.length;return B?Ui(S,M)/B:ae}function Hi(S){return function(M){return M==null?r:M[S]}}function Gi(S){return function(M){return S==null?r:S[M]}}function Oo(S,M,B,re,ge){return ge(S,function(_e,Ye,Ie){B=re?(re=!1,_e):M(B,_e,Ye,Ie)}),B}function vm(S,M){var B=S.length;for(S.sort(M);B--;)S[B]=S[B].value;return S}function Ui(S,M){for(var B,re=-1,ge=S.length;++re<ge;){var _e=M(S[re]);_e!==r&&(B=B===r?_e:B+_e)}return B}function $i(S,M){for(var B=-1,re=Array(S);++B<S;)re[B]=M(B);return re}function ym(S,M){return De(M,function(B){return[B,S[B]]})}function Po(S){return S&&S.slice(0,Do(S)+1).replace(Pi,"")}function hn(S){return function(M){return S(M)}}function Yi(S,M){return De(M,function(B){return S[B]})}function Er(S,M){return S.has(M)}function Bo(S,M){for(var B=-1,re=S.length;++B<re&&Ut(M,S[B],0)>-1;);return B}function xo(S,M){for(var B=S.length;B--&&Ut(M,S[B],0)>-1;);return B}function bm(S,M){for(var B=S.length,re=0;B--;)S[B]===M&&++re;return re}var Em=Gi(am),Tm=Gi(im);function _m(S){return"\\"+lm[S]}function wm(S,M){return S==null?r:S[M]}function $t(S){return em.test(S)}function Am(S){return nm.test(S)}function Rm(S){for(var M,B=[];!(M=S.next()).done;)B.push(M.value);return B}function Wi(S){var M=-1,B=Array(S.size);return S.forEach(function(re,ge){B[++M]=[ge,re]}),B}function qo(S,M){return function(B){return S(M(B))}}function vt(S,M){for(var B=-1,re=S.length,ge=0,_e=[];++B<re;){var Ye=S[B];(Ye===M||Ye===k)&&(S[B]=k,_e[ge++]=B)}return _e}function ga(S){var M=-1,B=Array(S.size);return S.forEach(function(re){B[++M]=re}),B}function Sm(S){var M=-1,B=Array(S.size);return S.forEach(function(re){B[++M]=[re,re]}),B}function jm(S,M,B){for(var re=B-1,ge=S.length;++re<ge;)if(S[re]===M)return re;return-1}function Nm(S,M,B){for(var re=B+1;re--;)if(S[re]===M)return re;return re}function Yt(S){return $t(S)?Om(S):mm(S)}function Dn(S){return $t(S)?Pm(S):pm(S)}function Do(S){for(var M=S.length;M--&&bc.test(S.charAt(M)););return M}var Im=Gi(sm);function Om(S){for(var M=Mi.lastIndex=0;Mi.test(S);)++M;return M}function Pm(S){return S.match(Mi)||[]}function Bm(S){return S.match(Qc)||[]}var xm=function S(M){M=M==null?en:Wt.defaults(en.Object(),M,Wt.pick(en,tm));var B=M.Array,re=M.Date,ge=M.Error,_e=M.Function,Ye=M.Math,Ie=M.Object,zi=M.RegExp,qm=M.String,Rn=M.TypeError,fa=B.prototype,Dm=_e.prototype,zt=Ie.prototype,ca=M["__core-js_shared__"],ma=Dm.toString,Se=zt.hasOwnProperty,Mm=0,Mo=function(){var n=/[^.]+$/.exec(ca&&ca.keys&&ca.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),pa=zt.toString,Lm=ma.call(Ie),Fm=en._,Km=zi("^"+ma.call(Se).replace(Oi,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ha=bo?M.Buffer:r,yt=M.Symbol,ka=M.Uint8Array,Lo=ha?ha.allocUnsafe:r,va=qo(Ie.getPrototypeOf,Ie),Fo=Ie.create,Ko=zt.propertyIsEnumerable,ya=fa.splice,Co=yt?yt.isConcatSpreadable:r,Tr=yt?yt.iterator:r,Nt=yt?yt.toStringTag:r,ba=function(){try{var n=xt(Ie,"defineProperty");return n({},"",{}),n}catch{}}(),Cm=M.clearTimeout!==en.clearTimeout&&M.clearTimeout,Vm=re&&re.now!==en.Date.now&&re.now,Hm=M.setTimeout!==en.setTimeout&&M.setTimeout,Ea=Ye.ceil,Ta=Ye.floor,Xi=Ie.getOwnPropertySymbols,Gm=ha?ha.isBuffer:r,Vo=M.isFinite,Um=fa.join,$m=qo(Ie.keys,Ie),We=Ye.max,tn=Ye.min,Ym=re.now,Wm=M.parseInt,Ho=Ye.random,zm=fa.reverse,Zi=xt(M,"DataView"),_r=xt(M,"Map"),Ji=xt(M,"Promise"),Xt=xt(M,"Set"),wr=xt(M,"WeakMap"),Ar=xt(Ie,"create"),_a=wr&&new wr,Zt={},Xm=qt(Zi),Zm=qt(_r),Jm=qt(Ji),Qm=qt(Xt),ep=qt(wr),wa=yt?yt.prototype:r,Rr=wa?wa.valueOf:r,Go=wa?wa.toString:r;function m(n){if(He(n)&&!fe(n)&&!(n instanceof ye)){if(n instanceof Sn)return n;if(Se.call(n,"__wrapped__"))return Uu(n)}return new Sn(n)}var Jt=function(){function n(){}return function(t){if(!Le(t))return{};if(Fo)return Fo(t);n.prototype=t;var l=new n;return n.prototype=r,l}}();function Aa(){}function Sn(n,t){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=r}m.templateSettings={escape:mc,evaluate:pc,interpolate:Jl,variable:"",imports:{_:m}},m.prototype=Aa.prototype,m.prototype.constructor=m,Sn.prototype=Jt(Aa.prototype),Sn.prototype.constructor=Sn;function ye(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ne,this.__views__=[]}function np(){var n=new ye(this.__wrapped__);return n.__actions__=un(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=un(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=un(this.__views__),n}function tp(){if(this.__filtered__){var n=new ye(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function rp(){var n=this.__wrapped__.value(),t=this.__dir__,l=fe(n),u=t<0,f=l?n.length:0,h=ph(0,f,this.__views__),v=h.start,w=h.end,N=w-v,K=u?w:v-1,C=this.__iteratees__,$=C.length,ee=0,se=tn(N,this.__takeCount__);if(!l||!u&&f==N&&se==N)return mu(n,this.__actions__);var ue=[];e:for(;N--&&ee<se;){K+=t;for(var me=-1,de=n[K];++me<$;){var ke=C[me],be=ke.iteratee,yn=ke.type,ln=be(de);if(yn==X)de=ln;else if(!ln){if(yn==D)continue e;break e}}ue[ee++]=de}return ue}ye.prototype=Jt(Aa.prototype),ye.prototype.constructor=ye;function It(n){var t=-1,l=n==null?0:n.length;for(this.clear();++t<l;){var u=n[t];this.set(u[0],u[1])}}function ap(){this.__data__=Ar?Ar(null):{},this.size=0}function ip(n){var t=this.has(n)&&delete this.__data__[n];return this.size-=t?1:0,t}function sp(n){var t=this.__data__;if(Ar){var l=t[n];return l===c?r:l}return Se.call(t,n)?t[n]:r}function lp(n){var t=this.__data__;return Ar?t[n]!==r:Se.call(t,n)}function op(n,t){var l=this.__data__;return this.size+=this.has(n)?0:1,l[n]=Ar&&t===r?c:t,this}It.prototype.clear=ap,It.prototype.delete=ip,It.prototype.get=sp,It.prototype.has=lp,It.prototype.set=op;function nt(n){var t=-1,l=n==null?0:n.length;for(this.clear();++t<l;){var u=n[t];this.set(u[0],u[1])}}function up(){this.__data__=[],this.size=0}function dp(n){var t=this.__data__,l=Ra(t,n);if(l<0)return!1;var u=t.length-1;return l==u?t.pop():ya.call(t,l,1),--this.size,!0}function gp(n){var t=this.__data__,l=Ra(t,n);return l<0?r:t[l][1]}function fp(n){return Ra(this.__data__,n)>-1}function cp(n,t){var l=this.__data__,u=Ra(l,n);return u<0?(++this.size,l.push([n,t])):l[u][1]=t,this}nt.prototype.clear=up,nt.prototype.delete=dp,nt.prototype.get=gp,nt.prototype.has=fp,nt.prototype.set=cp;function tt(n){var t=-1,l=n==null?0:n.length;for(this.clear();++t<l;){var u=n[t];this.set(u[0],u[1])}}function mp(){this.size=0,this.__data__={hash:new It,map:new(_r||nt),string:new It}}function pp(n){var t=La(this,n).delete(n);return this.size-=t?1:0,t}function hp(n){return La(this,n).get(n)}function kp(n){return La(this,n).has(n)}function vp(n,t){var l=La(this,n),u=l.size;return l.set(n,t),this.size+=l.size==u?0:1,this}tt.prototype.clear=mp,tt.prototype.delete=pp,tt.prototype.get=hp,tt.prototype.has=kp,tt.prototype.set=vp;function Ot(n){var t=-1,l=n==null?0:n.length;for(this.__data__=new tt;++t<l;)this.add(n[t])}function yp(n){return this.__data__.set(n,c),this}function bp(n){return this.__data__.has(n)}Ot.prototype.add=Ot.prototype.push=yp,Ot.prototype.has=bp;function Mn(n){var t=this.__data__=new nt(n);this.size=t.size}function Ep(){this.__data__=new nt,this.size=0}function Tp(n){var t=this.__data__,l=t.delete(n);return this.size=t.size,l}function _p(n){return this.__data__.get(n)}function wp(n){return this.__data__.has(n)}function Ap(n,t){var l=this.__data__;if(l instanceof nt){var u=l.__data__;if(!_r||u.length<s-1)return u.push([n,t]),this.size=++l.size,this;l=this.__data__=new tt(u)}return l.set(n,t),this.size=l.size,this}Mn.prototype.clear=Ep,Mn.prototype.delete=Tp,Mn.prototype.get=_p,Mn.prototype.has=wp,Mn.prototype.set=Ap;function Uo(n,t){var l=fe(n),u=!l&&Dt(n),f=!l&&!u&&wt(n),h=!l&&!u&&!f&&tr(n),v=l||u||f||h,w=v?$i(n.length,qm):[],N=w.length;for(var K in n)(t||Se.call(n,K))&&!(v&&(K=="length"||f&&(K=="offset"||K=="parent")||h&&(K=="buffer"||K=="byteLength"||K=="byteOffset")||st(K,N)))&&w.push(K);return w}function $o(n){var t=n.length;return t?n[us(0,t-1)]:r}function Rp(n,t){return Fa(un(n),Pt(t,0,n.length))}function Sp(n){return Fa(un(n))}function Qi(n,t,l){(l!==r&&!Ln(n[t],l)||l===r&&!(t in n))&&rt(n,t,l)}function Sr(n,t,l){var u=n[t];(!(Se.call(n,t)&&Ln(u,l))||l===r&&!(t in n))&&rt(n,t,l)}function Ra(n,t){for(var l=n.length;l--;)if(Ln(n[l][0],t))return l;return-1}function jp(n,t,l,u){return bt(n,function(f,h,v){t(u,f,l(f),v)}),u}function Yo(n,t){return n&&Gn(t,ze(t),n)}function Np(n,t){return n&&Gn(t,gn(t),n)}function rt(n,t,l){t=="__proto__"&&ba?ba(n,t,{configurable:!0,enumerable:!0,value:l,writable:!0}):n[t]=l}function es(n,t){for(var l=-1,u=t.length,f=B(u),h=n==null;++l<u;)f[l]=h?r:xs(n,t[l]);return f}function Pt(n,t,l){return n===n&&(l!==r&&(n=n<=l?n:l),t!==r&&(n=n>=t?n:t)),n}function jn(n,t,l,u,f,h){var v,w=t&y,N=t&E,K=t&T;if(l&&(v=f?l(n,u,f,h):l(n)),v!==r)return v;if(!Le(n))return n;var C=fe(n);if(C){if(v=kh(n),!w)return un(n,v)}else{var $=rn(n),ee=$==Ge||$==_n;if(wt(n))return ku(n,w);if($==Qe||$==Ke||ee&&!f){if(v=N||ee?{}:Du(n),!w)return N?sh(n,Np(v,n)):ih(n,Yo(v,n))}else{if(!Oe[$])return f?n:{};v=vh(n,$,w)}}h||(h=new Mn);var se=h.get(n);if(se)return se;h.set(n,v),gd(n)?n.forEach(function(de){v.add(jn(de,t,l,de,n,h))}):ud(n)&&n.forEach(function(de,ke){v.set(ke,jn(de,t,l,ke,n,h))});var ue=K?N?bs:ys:N?gn:ze,me=C?r:ue(n);return An(me||n,function(de,ke){me&&(ke=de,de=n[ke]),Sr(v,ke,jn(de,t,l,ke,n,h))}),v}function Ip(n){var t=ze(n);return function(l){return Wo(l,n,t)}}function Wo(n,t,l){var u=l.length;if(n==null)return!u;for(n=Ie(n);u--;){var f=l[u],h=t[f],v=n[f];if(v===r&&!(f in n)||!h(v))return!1}return!0}function zo(n,t,l){if(typeof n!="function")throw new Rn(d);return xr(function(){n.apply(r,l)},t)}function jr(n,t,l,u){var f=-1,h=ua,v=!0,w=n.length,N=[],K=t.length;if(!w)return N;l&&(t=De(t,hn(l))),u?(h=Ki,v=!1):t.length>=s&&(h=Er,v=!1,t=new Ot(t));e:for(;++f<w;){var C=n[f],$=l==null?C:l(C);if(C=u||C!==0?C:0,v&&$===$){for(var ee=K;ee--;)if(t[ee]===$)continue e;N.push(C)}else h(t,$,u)||N.push(C)}return N}var bt=Tu(Hn),Xo=Tu(ts,!0);function Op(n,t){var l=!0;return bt(n,function(u,f,h){return l=!!t(u,f,h),l}),l}function Sa(n,t,l){for(var u=-1,f=n.length;++u<f;){var h=n[u],v=t(h);if(v!=null&&(w===r?v===v&&!vn(v):l(v,w)))var w=v,N=h}return N}function Pp(n,t,l,u){var f=n.length;for(l=ce(l),l<0&&(l=-l>f?0:f+l),u=u===r||u>f?f:ce(u),u<0&&(u+=f),u=l>u?0:cd(u);l<u;)n[l++]=t;return n}function Zo(n,t){var l=[];return bt(n,function(u,f,h){t(u,f,h)&&l.push(u)}),l}function nn(n,t,l,u,f){var h=-1,v=n.length;for(l||(l=bh),f||(f=[]);++h<v;){var w=n[h];t>0&&l(w)?t>1?nn(w,t-1,l,u,f):kt(f,w):u||(f[f.length]=w)}return f}var ns=_u(),Jo=_u(!0);function Hn(n,t){return n&&ns(n,t,ze)}function ts(n,t){return n&&Jo(n,t,ze)}function ja(n,t){return ht(t,function(l){return lt(n[l])})}function Bt(n,t){t=Tt(t,n);for(var l=0,u=t.length;n!=null&&l<u;)n=n[Un(t[l++])];return l&&l==u?n:r}function Qo(n,t,l){var u=t(n);return fe(n)?u:kt(u,l(n))}function an(n){return n==null?n===r?lc:Qn:Nt&&Nt in Ie(n)?mh(n):Sh(n)}function rs(n,t){return n>t}function Bp(n,t){return n!=null&&Se.call(n,t)}function xp(n,t){return n!=null&&t in Ie(n)}function qp(n,t,l){return n>=tn(t,l)&&n<We(t,l)}function as(n,t,l){for(var u=l?Ki:ua,f=n[0].length,h=n.length,v=h,w=B(h),N=1/0,K=[];v--;){var C=n[v];v&&t&&(C=De(C,hn(t))),N=tn(C.length,N),w[v]=!l&&(t||f>=120&&C.length>=120)?new Ot(v&&C):r}C=n[0];var $=-1,ee=w[0];e:for(;++$<f&&K.length<N;){var se=C[$],ue=t?t(se):se;if(se=l||se!==0?se:0,!(ee?Er(ee,ue):u(K,ue,l))){for(v=h;--v;){var me=w[v];if(!(me?Er(me,ue):u(n[v],ue,l)))continue e}ee&&ee.push(ue),K.push(se)}}return K}function Dp(n,t,l,u){return Hn(n,function(f,h,v){t(u,l(f),h,v)}),u}function Nr(n,t,l){t=Tt(t,n),n=Ku(n,t);var u=n==null?n:n[Un(In(t))];return u==null?r:pn(u,n,l)}function eu(n){return He(n)&&an(n)==Ke}function Mp(n){return He(n)&&an(n)==br}function Lp(n){return He(n)&&an(n)==we}function Ir(n,t,l,u,f){return n===t?!0:n==null||t==null||!He(n)&&!He(t)?n!==n&&t!==t:Fp(n,t,l,u,Ir,f)}function Fp(n,t,l,u,f,h){var v=fe(n),w=fe(t),N=v?qe:rn(n),K=w?qe:rn(t);N=N==Ke?Qe:N,K=K==Ke?Qe:K;var C=N==Qe,$=K==Qe,ee=N==K;if(ee&&wt(n)){if(!wt(t))return!1;v=!0,C=!1}if(ee&&!C)return h||(h=new Mn),v||tr(n)?Bu(n,t,l,u,f,h):fh(n,t,N,l,u,f,h);if(!(l&O)){var se=C&&Se.call(n,"__wrapped__"),ue=$&&Se.call(t,"__wrapped__");if(se||ue){var me=se?n.value():n,de=ue?t.value():t;return h||(h=new Mn),f(me,de,l,u,h)}}return ee?(h||(h=new Mn),ch(n,t,l,u,f,h)):!1}function Kp(n){return He(n)&&rn(n)==Me}function is(n,t,l,u){var f=l.length,h=f,v=!u;if(n==null)return!h;for(n=Ie(n);f--;){var w=l[f];if(v&&w[2]?w[1]!==n[w[0]]:!(w[0]in n))return!1}for(;++f<h;){w=l[f];var N=w[0],K=n[N],C=w[1];if(v&&w[2]){if(K===r&&!(N in n))return!1}else{var $=new Mn;if(u)var ee=u(K,C,N,n,t,$);if(!(ee===r?Ir(C,K,O|_,u,$):ee))return!1}}return!0}function nu(n){if(!Le(n)||Th(n))return!1;var t=lt(n)?Km:Ic;return t.test(qt(n))}function Cp(n){return He(n)&&an(n)==kr}function Vp(n){return He(n)&&rn(n)==qn}function Hp(n){return He(n)&&Ua(n.length)&&!!Be[an(n)]}function tu(n){return typeof n=="function"?n:n==null?fn:typeof n=="object"?fe(n)?iu(n[0],n[1]):au(n):wd(n)}function ss(n){if(!Br(n))return $m(n);var t=[];for(var l in Ie(n))Se.call(n,l)&&l!="constructor"&&t.push(l);return t}function Gp(n){if(!Le(n))return Rh(n);var t=Br(n),l=[];for(var u in n)u=="constructor"&&(t||!Se.call(n,u))||l.push(u);return l}function ls(n,t){return n<t}function ru(n,t){var l=-1,u=dn(n)?B(n.length):[];return bt(n,function(f,h,v){u[++l]=t(f,h,v)}),u}function au(n){var t=Ts(n);return t.length==1&&t[0][2]?Lu(t[0][0],t[0][1]):function(l){return l===n||is(l,n,t)}}function iu(n,t){return ws(n)&&Mu(t)?Lu(Un(n),t):function(l){var u=xs(l,n);return u===r&&u===t?qs(l,n):Ir(t,u,O|_)}}function Na(n,t,l,u,f){n!==t&&ns(t,function(h,v){if(f||(f=new Mn),Le(h))Up(n,t,v,l,Na,u,f);else{var w=u?u(Rs(n,v),h,v+"",n,t,f):r;w===r&&(w=h),Qi(n,v,w)}},gn)}function Up(n,t,l,u,f,h,v){var w=Rs(n,l),N=Rs(t,l),K=v.get(N);if(K){Qi(n,l,K);return}var C=h?h(w,N,l+"",n,t,v):r,$=C===r;if($){var ee=fe(N),se=!ee&&wt(N),ue=!ee&&!se&&tr(N);C=N,ee||se||ue?fe(w)?C=w:Ue(w)?C=un(w):se?($=!1,C=ku(N,!0)):ue?($=!1,C=vu(N,!0)):C=[]:qr(N)||Dt(N)?(C=w,Dt(w)?C=md(w):(!Le(w)||lt(w))&&(C=Du(N))):$=!1}$&&(v.set(N,C),f(C,N,u,h,v),v.delete(N)),Qi(n,l,C)}function su(n,t){var l=n.length;if(l)return t+=t<0?l:0,st(t,l)?n[t]:r}function lu(n,t,l){t.length?t=De(t,function(h){return fe(h)?function(v){return Bt(v,h.length===1?h[0]:h)}:h}):t=[fn];var u=-1;t=De(t,hn(oe()));var f=ru(n,function(h,v,w){var N=De(t,function(K){return K(h)});return{criteria:N,index:++u,value:h}});return vm(f,function(h,v){return ah(h,v,l)})}function $p(n,t){return ou(n,t,function(l,u){return qs(n,u)})}function ou(n,t,l){for(var u=-1,f=t.length,h={};++u<f;){var v=t[u],w=Bt(n,v);l(w,v)&&Or(h,Tt(v,n),w)}return h}function Yp(n){return function(t){return Bt(t,n)}}function os(n,t,l,u){var f=u?km:Ut,h=-1,v=t.length,w=n;for(n===t&&(t=un(t)),l&&(w=De(n,hn(l)));++h<v;)for(var N=0,K=t[h],C=l?l(K):K;(N=f(w,C,N,u))>-1;)w!==n&&ya.call(w,N,1),ya.call(n,N,1);return n}function uu(n,t){for(var l=n?t.length:0,u=l-1;l--;){var f=t[l];if(l==u||f!==h){var h=f;st(f)?ya.call(n,f,1):fs(n,f)}}return n}function us(n,t){return n+Ta(Ho()*(t-n+1))}function Wp(n,t,l,u){for(var f=-1,h=We(Ea((t-n)/(l||1)),0),v=B(h);h--;)v[u?h:++f]=n,n+=l;return v}function ds(n,t){var l="";if(!n||t<1||t>G)return l;do t%2&&(l+=n),t=Ta(t/2),t&&(n+=n);while(t);return l}function pe(n,t){return Ss(Fu(n,t,fn),n+"")}function zp(n){return $o(rr(n))}function Xp(n,t){var l=rr(n);return Fa(l,Pt(t,0,l.length))}function Or(n,t,l,u){if(!Le(n))return n;t=Tt(t,n);for(var f=-1,h=t.length,v=h-1,w=n;w!=null&&++f<h;){var N=Un(t[f]),K=l;if(N==="__proto__"||N==="constructor"||N==="prototype")return n;if(f!=v){var C=w[N];K=u?u(C,N,w):r,K===r&&(K=Le(C)?C:st(t[f+1])?[]:{})}Sr(w,N,K),w=w[N]}return n}var du=_a?function(n,t){return _a.set(n,t),n}:fn,Zp=ba?function(n,t){return ba(n,"toString",{configurable:!0,enumerable:!1,value:Ms(t),writable:!0})}:fn;function Jp(n){return Fa(rr(n))}function Nn(n,t,l){var u=-1,f=n.length;t<0&&(t=-t>f?0:f+t),l=l>f?f:l,l<0&&(l+=f),f=t>l?0:l-t>>>0,t>>>=0;for(var h=B(f);++u<f;)h[u]=n[u+t];return h}function Qp(n,t){var l;return bt(n,function(u,f,h){return l=t(u,f,h),!l}),!!l}function Ia(n,t,l){var u=0,f=n==null?u:n.length;if(typeof t=="number"&&t===t&&f<=he){for(;u<f;){var h=u+f>>>1,v=n[h];v!==null&&!vn(v)&&(l?v<=t:v<t)?u=h+1:f=h}return f}return gs(n,t,fn,l)}function gs(n,t,l,u){var f=0,h=n==null?0:n.length;if(h===0)return 0;t=l(t);for(var v=t!==t,w=t===null,N=vn(t),K=t===r;f<h;){var C=Ta((f+h)/2),$=l(n[C]),ee=$!==r,se=$===null,ue=$===$,me=vn($);if(v)var de=u||ue;else K?de=ue&&(u||ee):w?de=ue&&ee&&(u||!se):N?de=ue&&ee&&!se&&(u||!me):se||me?de=!1:de=u?$<=t:$<t;de?f=C+1:h=C}return tn(h,le)}function gu(n,t){for(var l=-1,u=n.length,f=0,h=[];++l<u;){var v=n[l],w=t?t(v):v;if(!l||!Ln(w,N)){var N=w;h[f++]=v===0?0:v}}return h}function fu(n){return typeof n=="number"?n:vn(n)?ae:+n}function kn(n){if(typeof n=="string")return n;if(fe(n))return De(n,kn)+"";if(vn(n))return Go?Go.call(n):"";var t=n+"";return t=="0"&&1/n==-W?"-0":t}function Et(n,t,l){var u=-1,f=ua,h=n.length,v=!0,w=[],N=w;if(l)v=!1,f=Ki;else if(h>=s){var K=t?null:dh(n);if(K)return ga(K);v=!1,f=Er,N=new Ot}else N=t?[]:w;e:for(;++u<h;){var C=n[u],$=t?t(C):C;if(C=l||C!==0?C:0,v&&$===$){for(var ee=N.length;ee--;)if(N[ee]===$)continue e;t&&N.push($),w.push(C)}else f(N,$,l)||(N!==w&&N.push($),w.push(C))}return w}function fs(n,t){return t=Tt(t,n),n=Ku(n,t),n==null||delete n[Un(In(t))]}function cu(n,t,l,u){return Or(n,t,l(Bt(n,t)),u)}function Oa(n,t,l,u){for(var f=n.length,h=u?f:-1;(u?h--:++h<f)&&t(n[h],h,n););return l?Nn(n,u?0:h,u?h+1:f):Nn(n,u?h+1:0,u?f:h)}function mu(n,t){var l=n;return l instanceof ye&&(l=l.value()),Ci(t,function(u,f){return f.func.apply(f.thisArg,kt([u],f.args))},l)}function cs(n,t,l){var u=n.length;if(u<2)return u?Et(n[0]):[];for(var f=-1,h=B(u);++f<u;)for(var v=n[f],w=-1;++w<u;)w!=f&&(h[f]=jr(h[f]||v,n[w],t,l));return Et(nn(h,1),t,l)}function pu(n,t,l){for(var u=-1,f=n.length,h=t.length,v={};++u<f;){var w=u<h?t[u]:r;l(v,n[u],w)}return v}function ms(n){return Ue(n)?n:[]}function ps(n){return typeof n=="function"?n:fn}function Tt(n,t){return fe(n)?n:ws(n,t)?[n]:Gu(Ae(n))}var eh=pe;function _t(n,t,l){var u=n.length;return l=l===r?u:l,!t&&l>=u?n:Nn(n,t,l)}var hu=Cm||function(n){return en.clearTimeout(n)};function ku(n,t){if(t)return n.slice();var l=n.length,u=Lo?Lo(l):new n.constructor(l);return n.copy(u),u}function hs(n){var t=new n.constructor(n.byteLength);return new ka(t).set(new ka(n)),t}function nh(n,t){var l=t?hs(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.byteLength)}function th(n){var t=new n.constructor(n.source,Ql.exec(n));return t.lastIndex=n.lastIndex,t}function rh(n){return Rr?Ie(Rr.call(n)):{}}function vu(n,t){var l=t?hs(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.length)}function yu(n,t){if(n!==t){var l=n!==r,u=n===null,f=n===n,h=vn(n),v=t!==r,w=t===null,N=t===t,K=vn(t);if(!w&&!K&&!h&&n>t||h&&v&&N&&!w&&!K||u&&v&&N||!l&&N||!f)return 1;if(!u&&!h&&!K&&n<t||K&&l&&f&&!u&&!h||w&&l&&f||!v&&f||!N)return-1}return 0}function ah(n,t,l){for(var u=-1,f=n.criteria,h=t.criteria,v=f.length,w=l.length;++u<v;){var N=yu(f[u],h[u]);if(N){if(u>=w)return N;var K=l[u];return N*(K=="desc"?-1:1)}}return n.index-t.index}function bu(n,t,l,u){for(var f=-1,h=n.length,v=l.length,w=-1,N=t.length,K=We(h-v,0),C=B(N+K),$=!u;++w<N;)C[w]=t[w];for(;++f<v;)($||f<h)&&(C[l[f]]=n[f]);for(;K--;)C[w++]=n[f++];return C}function Eu(n,t,l,u){for(var f=-1,h=n.length,v=-1,w=l.length,N=-1,K=t.length,C=We(h-w,0),$=B(C+K),ee=!u;++f<C;)$[f]=n[f];for(var se=f;++N<K;)$[se+N]=t[N];for(;++v<w;)(ee||f<h)&&($[se+l[v]]=n[f++]);return $}function un(n,t){var l=-1,u=n.length;for(t||(t=B(u));++l<u;)t[l]=n[l];return t}function Gn(n,t,l,u){var f=!l;l||(l={});for(var h=-1,v=t.length;++h<v;){var w=t[h],N=u?u(l[w],n[w],w,l,n):r;N===r&&(N=n[w]),f?rt(l,w,N):Sr(l,w,N)}return l}function ih(n,t){return Gn(n,_s(n),t)}function sh(n,t){return Gn(n,xu(n),t)}function Pa(n,t){return function(l,u){var f=fe(l)?gm:jp,h=t?t():{};return f(l,n,oe(u,2),h)}}function Qt(n){return pe(function(t,l){var u=-1,f=l.length,h=f>1?l[f-1]:r,v=f>2?l[2]:r;for(h=n.length>3&&typeof h=="function"?(f--,h):r,v&&sn(l[0],l[1],v)&&(h=f<3?r:h,f=1),t=Ie(t);++u<f;){var w=l[u];w&&n(t,w,u,h)}return t})}function Tu(n,t){return function(l,u){if(l==null)return l;if(!dn(l))return n(l,u);for(var f=l.length,h=t?f:-1,v=Ie(l);(t?h--:++h<f)&&u(v[h],h,v)!==!1;);return l}}function _u(n){return function(t,l,u){for(var f=-1,h=Ie(t),v=u(t),w=v.length;w--;){var N=v[n?w:++f];if(l(h[N],N,h)===!1)break}return t}}function lh(n,t,l){var u=t&b,f=Pr(n);function h(){var v=this&&this!==en&&this instanceof h?f:n;return v.apply(u?l:this,arguments)}return h}function wu(n){return function(t){t=Ae(t);var l=$t(t)?Dn(t):r,u=l?l[0]:t.charAt(0),f=l?_t(l,1).join(""):t.slice(1);return u[n]()+f}}function er(n){return function(t){return Ci(Td(Ed(t).replace(Zc,"")),n,"")}}function Pr(n){return function(){var t=arguments;switch(t.length){case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var l=Jt(n.prototype),u=n.apply(l,t);return Le(u)?u:l}}function oh(n,t,l){var u=Pr(n);function f(){for(var h=arguments.length,v=B(h),w=h,N=nr(f);w--;)v[w]=arguments[w];var K=h<3&&v[0]!==N&&v[h-1]!==N?[]:vt(v,N);if(h-=K.length,h<l)return Nu(n,t,Ba,f.placeholder,r,v,K,r,r,l-h);var C=this&&this!==en&&this instanceof f?u:n;return pn(C,this,v)}return f}function Au(n){return function(t,l,u){var f=Ie(t);if(!dn(t)){var h=oe(l,3);t=ze(t),l=function(w){return h(f[w],w,f)}}var v=n(t,l,u);return v>-1?f[h?t[v]:v]:r}}function Ru(n){return it(function(t){var l=t.length,u=l,f=Sn.prototype.thru;for(n&&t.reverse();u--;){var h=t[u];if(typeof h!="function")throw new Rn(d);if(f&&!v&&Ma(h)=="wrapper")var v=new Sn([],!0)}for(u=v?u:l;++u<l;){h=t[u];var w=Ma(h),N=w=="wrapper"?Es(h):r;N&&As(N[0])&&N[1]==(x|j|I|q)&&!N[4].length&&N[9]==1?v=v[Ma(N[0])].apply(v,N[3]):v=h.length==1&&As(h)?v[w]():v.thru(h)}return function(){var K=arguments,C=K[0];if(v&&K.length==1&&fe(C))return v.plant(C).value();for(var $=0,ee=l?t[$].apply(this,K):C;++$<l;)ee=t[$].call(this,ee);return ee}})}function Ba(n,t,l,u,f,h,v,w,N,K){var C=t&x,$=t&b,ee=t&R,se=t&(j|H),ue=t&z,me=ee?r:Pr(n);function de(){for(var ke=arguments.length,be=B(ke),yn=ke;yn--;)be[yn]=arguments[yn];if(se)var ln=nr(de),bn=bm(be,ln);if(u&&(be=bu(be,u,f,se)),h&&(be=Eu(be,h,v,se)),ke-=bn,se&&ke<K){var $e=vt(be,ln);return Nu(n,t,Ba,de.placeholder,l,be,$e,w,N,K-ke)}var Fn=$?l:this,ut=ee?Fn[n]:n;return ke=be.length,w?be=jh(be,w):ue&&ke>1&&be.reverse(),C&&N<ke&&(be.length=N),this&&this!==en&&this instanceof de&&(ut=me||Pr(ut)),ut.apply(Fn,be)}return de}function Su(n,t){return function(l,u){return Dp(l,n,t(u),{})}}function xa(n,t){return function(l,u){var f;if(l===r&&u===r)return t;if(l!==r&&(f=l),u!==r){if(f===r)return u;typeof l=="string"||typeof u=="string"?(l=kn(l),u=kn(u)):(l=fu(l),u=fu(u)),f=n(l,u)}return f}}function ks(n){return it(function(t){return t=De(t,hn(oe())),pe(function(l){var u=this;return n(t,function(f){return pn(f,u,l)})})})}function qa(n,t){t=t===r?" ":kn(t);var l=t.length;if(l<2)return l?ds(t,n):t;var u=ds(t,Ea(n/Yt(t)));return $t(t)?_t(Dn(u),0,n).join(""):u.slice(0,n)}function uh(n,t,l,u){var f=t&b,h=Pr(n);function v(){for(var w=-1,N=arguments.length,K=-1,C=u.length,$=B(C+N),ee=this&&this!==en&&this instanceof v?h:n;++K<C;)$[K]=u[K];for(;N--;)$[K++]=arguments[++w];return pn(ee,f?l:this,$)}return v}function ju(n){return function(t,l,u){return u&&typeof u!="number"&&sn(t,l,u)&&(l=u=r),t=ot(t),l===r?(l=t,t=0):l=ot(l),u=u===r?t<l?1:-1:ot(u),Wp(t,l,u,n)}}function Da(n){return function(t,l){return typeof t=="string"&&typeof l=="string"||(t=On(t),l=On(l)),n(t,l)}}function Nu(n,t,l,u,f,h,v,w,N,K){var C=t&j,$=C?v:r,ee=C?r:v,se=C?h:r,ue=C?r:h;t|=C?I:V,t&=~(C?V:I),t&P||(t&=-4);var me=[n,t,f,se,$,ue,ee,w,N,K],de=l.apply(r,me);return As(n)&&Cu(de,me),de.placeholder=u,Vu(de,n,t)}function vs(n){var t=Ye[n];return function(l,u){if(l=On(l),u=u==null?0:tn(ce(u),292),u&&Vo(l)){var f=(Ae(l)+"e").split("e"),h=t(f[0]+"e"+(+f[1]+u));return f=(Ae(h)+"e").split("e"),+(f[0]+"e"+(+f[1]-u))}return t(l)}}var dh=Xt&&1/ga(new Xt([,-0]))[1]==W?function(n){return new Xt(n)}:Ks;function Iu(n){return function(t){var l=rn(t);return l==Me?Wi(t):l==qn?Sm(t):ym(t,n(t))}}function at(n,t,l,u,f,h,v,w){var N=t&R;if(!N&&typeof n!="function")throw new Rn(d);var K=u?u.length:0;if(K||(t&=-97,u=f=r),v=v===r?v:We(ce(v),0),w=w===r?w:ce(w),K-=f?f.length:0,t&V){var C=u,$=f;u=f=r}var ee=N?r:Es(n),se=[n,t,l,u,f,C,$,h,v,w];if(ee&&Ah(se,ee),n=se[0],t=se[1],l=se[2],u=se[3],f=se[4],w=se[9]=se[9]===r?N?0:n.length:We(se[9]-K,0),!w&&t&(j|H)&&(t&=-25),!t||t==b)var ue=lh(n,t,l);else t==j||t==H?ue=oh(n,t,w):(t==I||t==(b|I))&&!f.length?ue=uh(n,t,l,u):ue=Ba.apply(r,se);var me=ee?du:Cu;return Vu(me(ue,se),n,t)}function Ou(n,t,l,u){return n===r||Ln(n,zt[l])&&!Se.call(u,l)?t:n}function Pu(n,t,l,u,f,h){return Le(n)&&Le(t)&&(h.set(t,n),Na(n,t,r,Pu,h),h.delete(t)),n}function gh(n){return qr(n)?r:n}function Bu(n,t,l,u,f,h){var v=l&O,w=n.length,N=t.length;if(w!=N&&!(v&&N>w))return!1;var K=h.get(n),C=h.get(t);if(K&&C)return K==t&&C==n;var $=-1,ee=!0,se=l&_?new Ot:r;for(h.set(n,t),h.set(t,n);++$<w;){var ue=n[$],me=t[$];if(u)var de=v?u(me,ue,$,t,n,h):u(ue,me,$,n,t,h);if(de!==r){if(de)continue;ee=!1;break}if(se){if(!Vi(t,function(ke,be){if(!Er(se,be)&&(ue===ke||f(ue,ke,l,u,h)))return se.push(be)})){ee=!1;break}}else if(!(ue===me||f(ue,me,l,u,h))){ee=!1;break}}return h.delete(n),h.delete(t),ee}function fh(n,t,l,u,f,h,v){switch(l){case Ht:if(n.byteLength!=t.byteLength||n.byteOffset!=t.byteOffset)return!1;n=n.buffer,t=t.buffer;case br:return!(n.byteLength!=t.byteLength||!h(new ka(n),new ka(t)));case ve:case we:case Je:return Ln(+n,+t);case Ve:return n.name==t.name&&n.message==t.message;case kr:case vr:return n==t+"";case Me:var w=Wi;case qn:var N=u&O;if(w||(w=ga),n.size!=t.size&&!N)return!1;var K=v.get(n);if(K)return K==t;u|=_,v.set(n,t);var C=Bu(w(n),w(t),u,f,h,v);return v.delete(n),C;case ia:if(Rr)return Rr.call(n)==Rr.call(t)}return!1}function ch(n,t,l,u,f,h){var v=l&O,w=ys(n),N=w.length,K=ys(t),C=K.length;if(N!=C&&!v)return!1;for(var $=N;$--;){var ee=w[$];if(!(v?ee in t:Se.call(t,ee)))return!1}var se=h.get(n),ue=h.get(t);if(se&&ue)return se==t&&ue==n;var me=!0;h.set(n,t),h.set(t,n);for(var de=v;++$<N;){ee=w[$];var ke=n[ee],be=t[ee];if(u)var yn=v?u(be,ke,ee,t,n,h):u(ke,be,ee,n,t,h);if(!(yn===r?ke===be||f(ke,be,l,u,h):yn)){me=!1;break}de||(de=ee=="constructor")}if(me&&!de){var ln=n.constructor,bn=t.constructor;ln!=bn&&"constructor"in n&&"constructor"in t&&!(typeof ln=="function"&&ln instanceof ln&&typeof bn=="function"&&bn instanceof bn)&&(me=!1)}return h.delete(n),h.delete(t),me}function it(n){return Ss(Fu(n,r,Wu),n+"")}function ys(n){return Qo(n,ze,_s)}function bs(n){return Qo(n,gn,xu)}var Es=_a?function(n){return _a.get(n)}:Ks;function Ma(n){for(var t=n.name+"",l=Zt[t],u=Se.call(Zt,t)?l.length:0;u--;){var f=l[u],h=f.func;if(h==null||h==n)return f.name}return t}function nr(n){var t=Se.call(m,"placeholder")?m:n;return t.placeholder}function oe(){var n=m.iteratee||Ls;return n=n===Ls?tu:n,arguments.length?n(arguments[0],arguments[1]):n}function La(n,t){var l=n.__data__;return Eh(t)?l[typeof t=="string"?"string":"hash"]:l.map}function Ts(n){for(var t=ze(n),l=t.length;l--;){var u=t[l],f=n[u];t[l]=[u,f,Mu(f)]}return t}function xt(n,t){var l=wm(n,t);return nu(l)?l:r}function mh(n){var t=Se.call(n,Nt),l=n[Nt];try{n[Nt]=r;var u=!0}catch{}var f=pa.call(n);return u&&(t?n[Nt]=l:delete n[Nt]),f}var _s=Xi?function(n){return n==null?[]:(n=Ie(n),ht(Xi(n),function(t){return Ko.call(n,t)}))}:Cs,xu=Xi?function(n){for(var t=[];n;)kt(t,_s(n)),n=va(n);return t}:Cs,rn=an;(Zi&&rn(new Zi(new ArrayBuffer(1)))!=Ht||_r&&rn(new _r)!=Me||Ji&&rn(Ji.resolve())!=Vn||Xt&&rn(new Xt)!=qn||wr&&rn(new wr)!=yr)&&(rn=function(n){var t=an(n),l=t==Qe?n.constructor:r,u=l?qt(l):"";if(u)switch(u){case Xm:return Ht;case Zm:return Me;case Jm:return Vn;case Qm:return qn;case ep:return yr}return t});function ph(n,t,l){for(var u=-1,f=l.length;++u<f;){var h=l[u],v=h.size;switch(h.type){case"drop":n+=v;break;case"dropRight":t-=v;break;case"take":t=tn(t,n+v);break;case"takeRight":n=We(n,t-v);break}}return{start:n,end:t}}function hh(n){var t=n.match(Tc);return t?t[1].split(_c):[]}function qu(n,t,l){t=Tt(t,n);for(var u=-1,f=t.length,h=!1;++u<f;){var v=Un(t[u]);if(!(h=n!=null&&l(n,v)))break;n=n[v]}return h||++u!=f?h:(f=n==null?0:n.length,!!f&&Ua(f)&&st(v,f)&&(fe(n)||Dt(n)))}function kh(n){var t=n.length,l=new n.constructor(t);return t&&typeof n[0]=="string"&&Se.call(n,"index")&&(l.index=n.index,l.input=n.input),l}function Du(n){return typeof n.constructor=="function"&&!Br(n)?Jt(va(n)):{}}function vh(n,t,l){var u=n.constructor;switch(t){case br:return hs(n);case ve:case we:return new u(+n);case Ht:return nh(n,l);case Ti:case _i:case wi:case Ai:case Ri:case Si:case ji:case Ni:case Ii:return vu(n,l);case Me:return new u;case Je:case vr:return new u(n);case kr:return th(n);case qn:return new u;case ia:return rh(n)}}function yh(n,t){var l=t.length;if(!l)return n;var u=l-1;return t[u]=(l>1?"& ":"")+t[u],t=t.join(l>2?", ":" "),n.replace(Ec,`{
/* [wrapped with `+t+`] */
`)}function bh(n){return fe(n)||Dt(n)||!!(Co&&n&&n[Co])}function st(n,t){var l=typeof n;return t=t??G,!!t&&(l=="number"||l!="symbol"&&Pc.test(n))&&n>-1&&n%1==0&&n<t}function sn(n,t,l){if(!Le(l))return!1;var u=typeof t;return(u=="number"?dn(l)&&st(t,l.length):u=="string"&&t in l)?Ln(l[t],n):!1}function ws(n,t){if(fe(n))return!1;var l=typeof n;return l=="number"||l=="symbol"||l=="boolean"||n==null||vn(n)?!0:kc.test(n)||!hc.test(n)||t!=null&&n in Ie(t)}function Eh(n){var t=typeof n;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?n!=="__proto__":n===null}function As(n){var t=Ma(n),l=m[t];if(typeof l!="function"||!(t in ye.prototype))return!1;if(n===l)return!0;var u=Es(l);return!!u&&n===u[0]}function Th(n){return!!Mo&&Mo in n}var _h=ca?lt:Vs;function Br(n){var t=n&&n.constructor,l=typeof t=="function"&&t.prototype||zt;return n===l}function Mu(n){return n===n&&!Le(n)}function Lu(n,t){return function(l){return l==null?!1:l[n]===t&&(t!==r||n in Ie(l))}}function wh(n){var t=Ha(n,function(u){return l.size===p&&l.clear(),u}),l=t.cache;return t}function Ah(n,t){var l=n[1],u=t[1],f=l|u,h=f<(b|R|x),v=u==x&&l==j||u==x&&l==q&&n[7].length<=t[8]||u==(x|q)&&t[7].length<=t[8]&&l==j;if(!(h||v))return n;u&b&&(n[2]=t[2],f|=l&b?0:P);var w=t[3];if(w){var N=n[3];n[3]=N?bu(N,w,t[4]):w,n[4]=N?vt(n[3],k):t[4]}return w=t[5],w&&(N=n[5],n[5]=N?Eu(N,w,t[6]):w,n[6]=N?vt(n[5],k):t[6]),w=t[7],w&&(n[7]=w),u&x&&(n[8]=n[8]==null?t[8]:tn(n[8],t[8])),n[9]==null&&(n[9]=t[9]),n[0]=t[0],n[1]=f,n}function Rh(n){var t=[];if(n!=null)for(var l in Ie(n))t.push(l);return t}function Sh(n){return pa.call(n)}function Fu(n,t,l){return t=We(t===r?n.length-1:t,0),function(){for(var u=arguments,f=-1,h=We(u.length-t,0),v=B(h);++f<h;)v[f]=u[t+f];f=-1;for(var w=B(t+1);++f<t;)w[f]=u[f];return w[t]=l(v),pn(n,this,w)}}function Ku(n,t){return t.length<2?n:Bt(n,Nn(t,0,-1))}function jh(n,t){for(var l=n.length,u=tn(t.length,l),f=un(n);u--;){var h=t[u];n[u]=st(h,l)?f[h]:r}return n}function Rs(n,t){if(!(t==="constructor"&&typeof n[t]=="function")&&t!="__proto__")return n[t]}var Cu=Hu(du),xr=Hm||function(n,t){return en.setTimeout(n,t)},Ss=Hu(Zp);function Vu(n,t,l){var u=t+"";return Ss(n,yh(u,Nh(hh(u),l)))}function Hu(n){var t=0,l=0;return function(){var u=Ym(),f=F-(u-l);if(l=u,f>0){if(++t>=J)return arguments[0]}else t=0;return n.apply(r,arguments)}}function Fa(n,t){var l=-1,u=n.length,f=u-1;for(t=t===r?u:t;++l<t;){var h=us(l,f),v=n[h];n[h]=n[l],n[l]=v}return n.length=t,n}var Gu=wh(function(n){var t=[];return n.charCodeAt(0)===46&&t.push(""),n.replace(vc,function(l,u,f,h){t.push(f?h.replace(Rc,"$1"):u||l)}),t});function Un(n){if(typeof n=="string"||vn(n))return n;var t=n+"";return t=="0"&&1/n==-W?"-0":t}function qt(n){if(n!=null){try{return ma.call(n)}catch{}try{return n+""}catch{}}return""}function Nh(n,t){return An(mn,function(l){var u="_."+l[0];t&l[1]&&!ua(n,u)&&n.push(u)}),n.sort()}function Uu(n){if(n instanceof ye)return n.clone();var t=new Sn(n.__wrapped__,n.__chain__);return t.__actions__=un(n.__actions__),t.__index__=n.__index__,t.__values__=n.__values__,t}function Ih(n,t,l){(l?sn(n,t,l):t===r)?t=1:t=We(ce(t),0);var u=n==null?0:n.length;if(!u||t<1)return[];for(var f=0,h=0,v=B(Ea(u/t));f<u;)v[h++]=Nn(n,f,f+=t);return v}function Oh(n){for(var t=-1,l=n==null?0:n.length,u=0,f=[];++t<l;){var h=n[t];h&&(f[u++]=h)}return f}function Ph(){var n=arguments.length;if(!n)return[];for(var t=B(n-1),l=arguments[0],u=n;u--;)t[u-1]=arguments[u];return kt(fe(l)?un(l):[l],nn(t,1))}var Bh=pe(function(n,t){return Ue(n)?jr(n,nn(t,1,Ue,!0)):[]}),xh=pe(function(n,t){var l=In(t);return Ue(l)&&(l=r),Ue(n)?jr(n,nn(t,1,Ue,!0),oe(l,2)):[]}),qh=pe(function(n,t){var l=In(t);return Ue(l)&&(l=r),Ue(n)?jr(n,nn(t,1,Ue,!0),r,l):[]});function Dh(n,t,l){var u=n==null?0:n.length;return u?(t=l||t===r?1:ce(t),Nn(n,t<0?0:t,u)):[]}function Mh(n,t,l){var u=n==null?0:n.length;return u?(t=l||t===r?1:ce(t),t=u-t,Nn(n,0,t<0?0:t)):[]}function Lh(n,t){return n&&n.length?Oa(n,oe(t,3),!0,!0):[]}function Fh(n,t){return n&&n.length?Oa(n,oe(t,3),!0):[]}function Kh(n,t,l,u){var f=n==null?0:n.length;return f?(l&&typeof l!="number"&&sn(n,t,l)&&(l=0,u=f),Pp(n,t,l,u)):[]}function $u(n,t,l){var u=n==null?0:n.length;if(!u)return-1;var f=l==null?0:ce(l);return f<0&&(f=We(u+f,0)),da(n,oe(t,3),f)}function Yu(n,t,l){var u=n==null?0:n.length;if(!u)return-1;var f=u-1;return l!==r&&(f=ce(l),f=l<0?We(u+f,0):tn(f,u-1)),da(n,oe(t,3),f,!0)}function Wu(n){var t=n==null?0:n.length;return t?nn(n,1):[]}function Ch(n){var t=n==null?0:n.length;return t?nn(n,W):[]}function Vh(n,t){var l=n==null?0:n.length;return l?(t=t===r?1:ce(t),nn(n,t)):[]}function Hh(n){for(var t=-1,l=n==null?0:n.length,u={};++t<l;){var f=n[t];u[f[0]]=f[1]}return u}function zu(n){return n&&n.length?n[0]:r}function Gh(n,t,l){var u=n==null?0:n.length;if(!u)return-1;var f=l==null?0:ce(l);return f<0&&(f=We(u+f,0)),Ut(n,t,f)}function Uh(n){var t=n==null?0:n.length;return t?Nn(n,0,-1):[]}var $h=pe(function(n){var t=De(n,ms);return t.length&&t[0]===n[0]?as(t):[]}),Yh=pe(function(n){var t=In(n),l=De(n,ms);return t===In(l)?t=r:l.pop(),l.length&&l[0]===n[0]?as(l,oe(t,2)):[]}),Wh=pe(function(n){var t=In(n),l=De(n,ms);return t=typeof t=="function"?t:r,t&&l.pop(),l.length&&l[0]===n[0]?as(l,r,t):[]});function zh(n,t){return n==null?"":Um.call(n,t)}function In(n){var t=n==null?0:n.length;return t?n[t-1]:r}function Xh(n,t,l){var u=n==null?0:n.length;if(!u)return-1;var f=u;return l!==r&&(f=ce(l),f=f<0?We(u+f,0):tn(f,u-1)),t===t?Nm(n,t,f):da(n,No,f,!0)}function Zh(n,t){return n&&n.length?su(n,ce(t)):r}var Jh=pe(Xu);function Xu(n,t){return n&&n.length&&t&&t.length?os(n,t):n}function Qh(n,t,l){return n&&n.length&&t&&t.length?os(n,t,oe(l,2)):n}function ek(n,t,l){return n&&n.length&&t&&t.length?os(n,t,r,l):n}var nk=it(function(n,t){var l=n==null?0:n.length,u=es(n,t);return uu(n,De(t,function(f){return st(f,l)?+f:f}).sort(yu)),u});function tk(n,t){var l=[];if(!(n&&n.length))return l;var u=-1,f=[],h=n.length;for(t=oe(t,3);++u<h;){var v=n[u];t(v,u,n)&&(l.push(v),f.push(u))}return uu(n,f),l}function js(n){return n==null?n:zm.call(n)}function rk(n,t,l){var u=n==null?0:n.length;return u?(l&&typeof l!="number"&&sn(n,t,l)?(t=0,l=u):(t=t==null?0:ce(t),l=l===r?u:ce(l)),Nn(n,t,l)):[]}function ak(n,t){return Ia(n,t)}function ik(n,t,l){return gs(n,t,oe(l,2))}function sk(n,t){var l=n==null?0:n.length;if(l){var u=Ia(n,t);if(u<l&&Ln(n[u],t))return u}return-1}function lk(n,t){return Ia(n,t,!0)}function ok(n,t,l){return gs(n,t,oe(l,2),!0)}function uk(n,t){var l=n==null?0:n.length;if(l){var u=Ia(n,t,!0)-1;if(Ln(n[u],t))return u}return-1}function dk(n){return n&&n.length?gu(n):[]}function gk(n,t){return n&&n.length?gu(n,oe(t,2)):[]}function fk(n){var t=n==null?0:n.length;return t?Nn(n,1,t):[]}function ck(n,t,l){return n&&n.length?(t=l||t===r?1:ce(t),Nn(n,0,t<0?0:t)):[]}function mk(n,t,l){var u=n==null?0:n.length;return u?(t=l||t===r?1:ce(t),t=u-t,Nn(n,t<0?0:t,u)):[]}function pk(n,t){return n&&n.length?Oa(n,oe(t,3),!1,!0):[]}function hk(n,t){return n&&n.length?Oa(n,oe(t,3)):[]}var kk=pe(function(n){return Et(nn(n,1,Ue,!0))}),vk=pe(function(n){var t=In(n);return Ue(t)&&(t=r),Et(nn(n,1,Ue,!0),oe(t,2))}),yk=pe(function(n){var t=In(n);return t=typeof t=="function"?t:r,Et(nn(n,1,Ue,!0),r,t)});function bk(n){return n&&n.length?Et(n):[]}function Ek(n,t){return n&&n.length?Et(n,oe(t,2)):[]}function Tk(n,t){return t=typeof t=="function"?t:r,n&&n.length?Et(n,r,t):[]}function Ns(n){if(!(n&&n.length))return[];var t=0;return n=ht(n,function(l){if(Ue(l))return t=We(l.length,t),!0}),$i(t,function(l){return De(n,Hi(l))})}function Zu(n,t){if(!(n&&n.length))return[];var l=Ns(n);return t==null?l:De(l,function(u){return pn(t,r,u)})}var _k=pe(function(n,t){return Ue(n)?jr(n,t):[]}),wk=pe(function(n){return cs(ht(n,Ue))}),Ak=pe(function(n){var t=In(n);return Ue(t)&&(t=r),cs(ht(n,Ue),oe(t,2))}),Rk=pe(function(n){var t=In(n);return t=typeof t=="function"?t:r,cs(ht(n,Ue),r,t)}),Sk=pe(Ns);function jk(n,t){return pu(n||[],t||[],Sr)}function Nk(n,t){return pu(n||[],t||[],Or)}var Ik=pe(function(n){var t=n.length,l=t>1?n[t-1]:r;return l=typeof l=="function"?(n.pop(),l):r,Zu(n,l)});function Ju(n){var t=m(n);return t.__chain__=!0,t}function Ok(n,t){return t(n),n}function Ka(n,t){return t(n)}var Pk=it(function(n){var t=n.length,l=t?n[0]:0,u=this.__wrapped__,f=function(h){return es(h,n)};return t>1||this.__actions__.length||!(u instanceof ye)||!st(l)?this.thru(f):(u=u.slice(l,+l+(t?1:0)),u.__actions__.push({func:Ka,args:[f],thisArg:r}),new Sn(u,this.__chain__).thru(function(h){return t&&!h.length&&h.push(r),h}))});function Bk(){return Ju(this)}function xk(){return new Sn(this.value(),this.__chain__)}function qk(){this.__values__===r&&(this.__values__=fd(this.value()));var n=this.__index__>=this.__values__.length,t=n?r:this.__values__[this.__index__++];return{done:n,value:t}}function Dk(){return this}function Mk(n){for(var t,l=this;l instanceof Aa;){var u=Uu(l);u.__index__=0,u.__values__=r,t?f.__wrapped__=u:t=u;var f=u;l=l.__wrapped__}return f.__wrapped__=n,t}function Lk(){var n=this.__wrapped__;if(n instanceof ye){var t=n;return this.__actions__.length&&(t=new ye(this)),t=t.reverse(),t.__actions__.push({func:Ka,args:[js],thisArg:r}),new Sn(t,this.__chain__)}return this.thru(js)}function Fk(){return mu(this.__wrapped__,this.__actions__)}var Kk=Pa(function(n,t,l){Se.call(n,l)?++n[l]:rt(n,l,1)});function Ck(n,t,l){var u=fe(n)?So:Op;return l&&sn(n,t,l)&&(t=r),u(n,oe(t,3))}function Vk(n,t){var l=fe(n)?ht:Zo;return l(n,oe(t,3))}var Hk=Au($u),Gk=Au(Yu);function Uk(n,t){return nn(Ca(n,t),1)}function $k(n,t){return nn(Ca(n,t),W)}function Yk(n,t,l){return l=l===r?1:ce(l),nn(Ca(n,t),l)}function Qu(n,t){var l=fe(n)?An:bt;return l(n,oe(t,3))}function ed(n,t){var l=fe(n)?fm:Xo;return l(n,oe(t,3))}var Wk=Pa(function(n,t,l){Se.call(n,l)?n[l].push(t):rt(n,l,[t])});function zk(n,t,l,u){n=dn(n)?n:rr(n),l=l&&!u?ce(l):0;var f=n.length;return l<0&&(l=We(f+l,0)),$a(n)?l<=f&&n.indexOf(t,l)>-1:!!f&&Ut(n,t,l)>-1}var Xk=pe(function(n,t,l){var u=-1,f=typeof t=="function",h=dn(n)?B(n.length):[];return bt(n,function(v){h[++u]=f?pn(t,v,l):Nr(v,t,l)}),h}),Zk=Pa(function(n,t,l){rt(n,l,t)});function Ca(n,t){var l=fe(n)?De:ru;return l(n,oe(t,3))}function Jk(n,t,l,u){return n==null?[]:(fe(t)||(t=t==null?[]:[t]),l=u?r:l,fe(l)||(l=l==null?[]:[l]),lu(n,t,l))}var Qk=Pa(function(n,t,l){n[l?0:1].push(t)},function(){return[[],[]]});function ev(n,t,l){var u=fe(n)?Ci:Oo,f=arguments.length<3;return u(n,oe(t,4),l,f,bt)}function nv(n,t,l){var u=fe(n)?cm:Oo,f=arguments.length<3;return u(n,oe(t,4),l,f,Xo)}function tv(n,t){var l=fe(n)?ht:Zo;return l(n,Ga(oe(t,3)))}function rv(n){var t=fe(n)?$o:zp;return t(n)}function av(n,t,l){(l?sn(n,t,l):t===r)?t=1:t=ce(t);var u=fe(n)?Rp:Xp;return u(n,t)}function iv(n){var t=fe(n)?Sp:Jp;return t(n)}function sv(n){if(n==null)return 0;if(dn(n))return $a(n)?Yt(n):n.length;var t=rn(n);return t==Me||t==qn?n.size:ss(n).length}function lv(n,t,l){var u=fe(n)?Vi:Qp;return l&&sn(n,t,l)&&(t=r),u(n,oe(t,3))}var ov=pe(function(n,t){if(n==null)return[];var l=t.length;return l>1&&sn(n,t[0],t[1])?t=[]:l>2&&sn(t[0],t[1],t[2])&&(t=[t[0]]),lu(n,nn(t,1),[])}),Va=Vm||function(){return en.Date.now()};function uv(n,t){if(typeof t!="function")throw new Rn(d);return n=ce(n),function(){if(--n<1)return t.apply(this,arguments)}}function nd(n,t,l){return t=l?r:t,t=n&&t==null?n.length:t,at(n,x,r,r,r,r,t)}function td(n,t){var l;if(typeof t!="function")throw new Rn(d);return n=ce(n),function(){return--n>0&&(l=t.apply(this,arguments)),n<=1&&(t=r),l}}var Is=pe(function(n,t,l){var u=b;if(l.length){var f=vt(l,nr(Is));u|=I}return at(n,u,t,l,f)}),rd=pe(function(n,t,l){var u=b|R;if(l.length){var f=vt(l,nr(rd));u|=I}return at(t,u,n,l,f)});function ad(n,t,l){t=l?r:t;var u=at(n,j,r,r,r,r,r,t);return u.placeholder=ad.placeholder,u}function id(n,t,l){t=l?r:t;var u=at(n,H,r,r,r,r,r,t);return u.placeholder=id.placeholder,u}function sd(n,t,l){var u,f,h,v,w,N,K=0,C=!1,$=!1,ee=!0;if(typeof n!="function")throw new Rn(d);t=On(t)||0,Le(l)&&(C=!!l.leading,$="maxWait"in l,h=$?We(On(l.maxWait)||0,t):h,ee="trailing"in l?!!l.trailing:ee);function se($e){var Fn=u,ut=f;return u=f=r,K=$e,v=n.apply(ut,Fn),v}function ue($e){return K=$e,w=xr(ke,t),C?se($e):v}function me($e){var Fn=$e-N,ut=$e-K,Ad=t-Fn;return $?tn(Ad,h-ut):Ad}function de($e){var Fn=$e-N,ut=$e-K;return N===r||Fn>=t||Fn<0||$&&ut>=h}function ke(){var $e=Va();if(de($e))return be($e);w=xr(ke,me($e))}function be($e){return w=r,ee&&u?se($e):(u=f=r,v)}function yn(){w!==r&&hu(w),K=0,u=N=f=w=r}function ln(){return w===r?v:be(Va())}function bn(){var $e=Va(),Fn=de($e);if(u=arguments,f=this,N=$e,Fn){if(w===r)return ue(N);if($)return hu(w),w=xr(ke,t),se(N)}return w===r&&(w=xr(ke,t)),v}return bn.cancel=yn,bn.flush=ln,bn}var dv=pe(function(n,t){return zo(n,1,t)}),gv=pe(function(n,t,l){return zo(n,On(t)||0,l)});function fv(n){return at(n,z)}function Ha(n,t){if(typeof n!="function"||t!=null&&typeof t!="function")throw new Rn(d);var l=function(){var u=arguments,f=t?t.apply(this,u):u[0],h=l.cache;if(h.has(f))return h.get(f);var v=n.apply(this,u);return l.cache=h.set(f,v)||h,v};return l.cache=new(Ha.Cache||tt),l}Ha.Cache=tt;function Ga(n){if(typeof n!="function")throw new Rn(d);return function(){var t=arguments;switch(t.length){case 0:return!n.call(this);case 1:return!n.call(this,t[0]);case 2:return!n.call(this,t[0],t[1]);case 3:return!n.call(this,t[0],t[1],t[2])}return!n.apply(this,t)}}function cv(n){return td(2,n)}var mv=eh(function(n,t){t=t.length==1&&fe(t[0])?De(t[0],hn(oe())):De(nn(t,1),hn(oe()));var l=t.length;return pe(function(u){for(var f=-1,h=tn(u.length,l);++f<h;)u[f]=t[f].call(this,u[f]);return pn(n,this,u)})}),Os=pe(function(n,t){var l=vt(t,nr(Os));return at(n,I,r,t,l)}),ld=pe(function(n,t){var l=vt(t,nr(ld));return at(n,V,r,t,l)}),pv=it(function(n,t){return at(n,q,r,r,r,t)});function hv(n,t){if(typeof n!="function")throw new Rn(d);return t=t===r?t:ce(t),pe(n,t)}function kv(n,t){if(typeof n!="function")throw new Rn(d);return t=t==null?0:We(ce(t),0),pe(function(l){var u=l[t],f=_t(l,0,t);return u&&kt(f,u),pn(n,this,f)})}function vv(n,t,l){var u=!0,f=!0;if(typeof n!="function")throw new Rn(d);return Le(l)&&(u="leading"in l?!!l.leading:u,f="trailing"in l?!!l.trailing:f),sd(n,t,{leading:u,maxWait:t,trailing:f})}function yv(n){return nd(n,1)}function bv(n,t){return Os(ps(t),n)}function Ev(){if(!arguments.length)return[];var n=arguments[0];return fe(n)?n:[n]}function Tv(n){return jn(n,T)}function _v(n,t){return t=typeof t=="function"?t:r,jn(n,T,t)}function wv(n){return jn(n,y|T)}function Av(n,t){return t=typeof t=="function"?t:r,jn(n,y|T,t)}function Rv(n,t){return t==null||Wo(n,t,ze(t))}function Ln(n,t){return n===t||n!==n&&t!==t}var Sv=Da(rs),jv=Da(function(n,t){return n>=t}),Dt=eu(function(){return arguments}())?eu:function(n){return He(n)&&Se.call(n,"callee")&&!Ko.call(n,"callee")},fe=B.isArray,Nv=Eo?hn(Eo):Mp;function dn(n){return n!=null&&Ua(n.length)&&!lt(n)}function Ue(n){return He(n)&&dn(n)}function Iv(n){return n===!0||n===!1||He(n)&&an(n)==ve}var wt=Gm||Vs,Ov=To?hn(To):Lp;function Pv(n){return He(n)&&n.nodeType===1&&!qr(n)}function Bv(n){if(n==null)return!0;if(dn(n)&&(fe(n)||typeof n=="string"||typeof n.splice=="function"||wt(n)||tr(n)||Dt(n)))return!n.length;var t=rn(n);if(t==Me||t==qn)return!n.size;if(Br(n))return!ss(n).length;for(var l in n)if(Se.call(n,l))return!1;return!0}function xv(n,t){return Ir(n,t)}function qv(n,t,l){l=typeof l=="function"?l:r;var u=l?l(n,t):r;return u===r?Ir(n,t,r,l):!!u}function Ps(n){if(!He(n))return!1;var t=an(n);return t==Ve||t==Ze||typeof n.message=="string"&&typeof n.name=="string"&&!qr(n)}function Dv(n){return typeof n=="number"&&Vo(n)}function lt(n){if(!Le(n))return!1;var t=an(n);return t==Ge||t==_n||t==Ce||t==et}function od(n){return typeof n=="number"&&n==ce(n)}function Ua(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=G}function Le(n){var t=typeof n;return n!=null&&(t=="object"||t=="function")}function He(n){return n!=null&&typeof n=="object"}var ud=_o?hn(_o):Kp;function Mv(n,t){return n===t||is(n,t,Ts(t))}function Lv(n,t,l){return l=typeof l=="function"?l:r,is(n,t,Ts(t),l)}function Fv(n){return dd(n)&&n!=+n}function Kv(n){if(_h(n))throw new ge(o);return nu(n)}function Cv(n){return n===null}function Vv(n){return n==null}function dd(n){return typeof n=="number"||He(n)&&an(n)==Je}function qr(n){if(!He(n)||an(n)!=Qe)return!1;var t=va(n);if(t===null)return!0;var l=Se.call(t,"constructor")&&t.constructor;return typeof l=="function"&&l instanceof l&&ma.call(l)==Lm}var Bs=wo?hn(wo):Cp;function Hv(n){return od(n)&&n>=-G&&n<=G}var gd=Ao?hn(Ao):Vp;function $a(n){return typeof n=="string"||!fe(n)&&He(n)&&an(n)==vr}function vn(n){return typeof n=="symbol"||He(n)&&an(n)==ia}var tr=Ro?hn(Ro):Hp;function Gv(n){return n===r}function Uv(n){return He(n)&&rn(n)==yr}function $v(n){return He(n)&&an(n)==oc}var Yv=Da(ls),Wv=Da(function(n,t){return n<=t});function fd(n){if(!n)return[];if(dn(n))return $a(n)?Dn(n):un(n);if(Tr&&n[Tr])return Rm(n[Tr]());var t=rn(n),l=t==Me?Wi:t==qn?ga:rr;return l(n)}function ot(n){if(!n)return n===0?n:0;if(n=On(n),n===W||n===-W){var t=n<0?-1:1;return t*Y}return n===n?n:0}function ce(n){var t=ot(n),l=t%1;return t===t?l?t-l:t:0}function cd(n){return n?Pt(ce(n),0,ne):0}function On(n){if(typeof n=="number")return n;if(vn(n))return ae;if(Le(n)){var t=typeof n.valueOf=="function"?n.valueOf():n;n=Le(t)?t+"":t}if(typeof n!="string")return n===0?n:+n;n=Po(n);var l=Nc.test(n);return l||Oc.test(n)?um(n.slice(2),l?2:8):jc.test(n)?ae:+n}function md(n){return Gn(n,gn(n))}function zv(n){return n?Pt(ce(n),-G,G):n===0?n:0}function Ae(n){return n==null?"":kn(n)}var Xv=Qt(function(n,t){if(Br(t)||dn(t)){Gn(t,ze(t),n);return}for(var l in t)Se.call(t,l)&&Sr(n,l,t[l])}),pd=Qt(function(n,t){Gn(t,gn(t),n)}),Ya=Qt(function(n,t,l,u){Gn(t,gn(t),n,u)}),Zv=Qt(function(n,t,l,u){Gn(t,ze(t),n,u)}),Jv=it(es);function Qv(n,t){var l=Jt(n);return t==null?l:Yo(l,t)}var ey=pe(function(n,t){n=Ie(n);var l=-1,u=t.length,f=u>2?t[2]:r;for(f&&sn(t[0],t[1],f)&&(u=1);++l<u;)for(var h=t[l],v=gn(h),w=-1,N=v.length;++w<N;){var K=v[w],C=n[K];(C===r||Ln(C,zt[K])&&!Se.call(n,K))&&(n[K]=h[K])}return n}),ny=pe(function(n){return n.push(r,Pu),pn(hd,r,n)});function ty(n,t){return jo(n,oe(t,3),Hn)}function ry(n,t){return jo(n,oe(t,3),ts)}function ay(n,t){return n==null?n:ns(n,oe(t,3),gn)}function iy(n,t){return n==null?n:Jo(n,oe(t,3),gn)}function sy(n,t){return n&&Hn(n,oe(t,3))}function ly(n,t){return n&&ts(n,oe(t,3))}function oy(n){return n==null?[]:ja(n,ze(n))}function uy(n){return n==null?[]:ja(n,gn(n))}function xs(n,t,l){var u=n==null?r:Bt(n,t);return u===r?l:u}function dy(n,t){return n!=null&&qu(n,t,Bp)}function qs(n,t){return n!=null&&qu(n,t,xp)}var gy=Su(function(n,t,l){t!=null&&typeof t.toString!="function"&&(t=pa.call(t)),n[t]=l},Ms(fn)),fy=Su(function(n,t,l){t!=null&&typeof t.toString!="function"&&(t=pa.call(t)),Se.call(n,t)?n[t].push(l):n[t]=[l]},oe),cy=pe(Nr);function ze(n){return dn(n)?Uo(n):ss(n)}function gn(n){return dn(n)?Uo(n,!0):Gp(n)}function my(n,t){var l={};return t=oe(t,3),Hn(n,function(u,f,h){rt(l,t(u,f,h),u)}),l}function py(n,t){var l={};return t=oe(t,3),Hn(n,function(u,f,h){rt(l,f,t(u,f,h))}),l}var hy=Qt(function(n,t,l){Na(n,t,l)}),hd=Qt(function(n,t,l,u){Na(n,t,l,u)}),ky=it(function(n,t){var l={};if(n==null)return l;var u=!1;t=De(t,function(h){return h=Tt(h,n),u||(u=h.length>1),h}),Gn(n,bs(n),l),u&&(l=jn(l,y|E|T,gh));for(var f=t.length;f--;)fs(l,t[f]);return l});function vy(n,t){return kd(n,Ga(oe(t)))}var yy=it(function(n,t){return n==null?{}:$p(n,t)});function kd(n,t){if(n==null)return{};var l=De(bs(n),function(u){return[u]});return t=oe(t),ou(n,l,function(u,f){return t(u,f[0])})}function by(n,t,l){t=Tt(t,n);var u=-1,f=t.length;for(f||(f=1,n=r);++u<f;){var h=n==null?r:n[Un(t[u])];h===r&&(u=f,h=l),n=lt(h)?h.call(n):h}return n}function Ey(n,t,l){return n==null?n:Or(n,t,l)}function Ty(n,t,l,u){return u=typeof u=="function"?u:r,n==null?n:Or(n,t,l,u)}var vd=Iu(ze),yd=Iu(gn);function _y(n,t,l){var u=fe(n),f=u||wt(n)||tr(n);if(t=oe(t,4),l==null){var h=n&&n.constructor;f?l=u?new h:[]:Le(n)?l=lt(h)?Jt(va(n)):{}:l={}}return(f?An:Hn)(n,function(v,w,N){return t(l,v,w,N)}),l}function wy(n,t){return n==null?!0:fs(n,t)}function Ay(n,t,l){return n==null?n:cu(n,t,ps(l))}function Ry(n,t,l,u){return u=typeof u=="function"?u:r,n==null?n:cu(n,t,ps(l),u)}function rr(n){return n==null?[]:Yi(n,ze(n))}function Sy(n){return n==null?[]:Yi(n,gn(n))}function jy(n,t,l){return l===r&&(l=t,t=r),l!==r&&(l=On(l),l=l===l?l:0),t!==r&&(t=On(t),t=t===t?t:0),Pt(On(n),t,l)}function Ny(n,t,l){return t=ot(t),l===r?(l=t,t=0):l=ot(l),n=On(n),qp(n,t,l)}function Iy(n,t,l){if(l&&typeof l!="boolean"&&sn(n,t,l)&&(t=l=r),l===r&&(typeof t=="boolean"?(l=t,t=r):typeof n=="boolean"&&(l=n,n=r)),n===r&&t===r?(n=0,t=1):(n=ot(n),t===r?(t=n,n=0):t=ot(t)),n>t){var u=n;n=t,t=u}if(l||n%1||t%1){var f=Ho();return tn(n+f*(t-n+om("1e-"+((f+"").length-1))),t)}return us(n,t)}var Oy=er(function(n,t,l){return t=t.toLowerCase(),n+(l?bd(t):t)});function bd(n){return Ds(Ae(n).toLowerCase())}function Ed(n){return n=Ae(n),n&&n.replace(Bc,Em).replace(Jc,"")}function Py(n,t,l){n=Ae(n),t=kn(t);var u=n.length;l=l===r?u:Pt(ce(l),0,u);var f=l;return l-=t.length,l>=0&&n.slice(l,f)==t}function By(n){return n=Ae(n),n&&cc.test(n)?n.replace(Zl,Tm):n}function xy(n){return n=Ae(n),n&&yc.test(n)?n.replace(Oi,"\\$&"):n}var qy=er(function(n,t,l){return n+(l?"-":"")+t.toLowerCase()}),Dy=er(function(n,t,l){return n+(l?" ":"")+t.toLowerCase()}),My=wu("toLowerCase");function Ly(n,t,l){n=Ae(n),t=ce(t);var u=t?Yt(n):0;if(!t||u>=t)return n;var f=(t-u)/2;return qa(Ta(f),l)+n+qa(Ea(f),l)}function Fy(n,t,l){n=Ae(n),t=ce(t);var u=t?Yt(n):0;return t&&u<t?n+qa(t-u,l):n}function Ky(n,t,l){n=Ae(n),t=ce(t);var u=t?Yt(n):0;return t&&u<t?qa(t-u,l)+n:n}function Cy(n,t,l){return l||t==null?t=0:t&&(t=+t),Wm(Ae(n).replace(Pi,""),t||0)}function Vy(n,t,l){return(l?sn(n,t,l):t===r)?t=1:t=ce(t),ds(Ae(n),t)}function Hy(){var n=arguments,t=Ae(n[0]);return n.length<3?t:t.replace(n[1],n[2])}var Gy=er(function(n,t,l){return n+(l?"_":"")+t.toLowerCase()});function Uy(n,t,l){return l&&typeof l!="number"&&sn(n,t,l)&&(t=l=r),l=l===r?ne:l>>>0,l?(n=Ae(n),n&&(typeof t=="string"||t!=null&&!Bs(t))&&(t=kn(t),!t&&$t(n))?_t(Dn(n),0,l):n.split(t,l)):[]}var $y=er(function(n,t,l){return n+(l?" ":"")+Ds(t)});function Yy(n,t,l){return n=Ae(n),l=l==null?0:Pt(ce(l),0,n.length),t=kn(t),n.slice(l,l+t.length)==t}function Wy(n,t,l){var u=m.templateSettings;l&&sn(n,t,l)&&(t=r),n=Ae(n),t=Ya({},t,u,Ou);var f=Ya({},t.imports,u.imports,Ou),h=ze(f),v=Yi(f,h),w,N,K=0,C=t.interpolate||sa,$="__p += '",ee=zi((t.escape||sa).source+"|"+C.source+"|"+(C===Jl?Sc:sa).source+"|"+(t.evaluate||sa).source+"|$","g"),se="//# sourceURL="+(Se.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++rm+"]")+`
`;n.replace(ee,function(de,ke,be,yn,ln,bn){return be||(be=yn),$+=n.slice(K,bn).replace(xc,_m),ke&&(w=!0,$+=`' +
__e(`+ke+`) +
'`),ln&&(N=!0,$+=`';
`+ln+`;
__p += '`),be&&($+=`' +
((__t = (`+be+`)) == null ? '' : __t) +
'`),K=bn+de.length,de}),$+=`';
`;var ue=Se.call(t,"variable")&&t.variable;if(!ue)$=`with (obj) {
`+$+`
}
`;else if(Ac.test(ue))throw new ge(g);$=(N?$.replace(uc,""):$).replace(dc,"$1").replace(gc,"$1;"),$="function("+(ue||"obj")+`) {
`+(ue?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(w?", __e = _.escape":"")+(N?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+$+`return __p
}`;var me=_d(function(){return _e(h,se+"return "+$).apply(r,v)});if(me.source=$,Ps(me))throw me;return me}function zy(n){return Ae(n).toLowerCase()}function Xy(n){return Ae(n).toUpperCase()}function Zy(n,t,l){if(n=Ae(n),n&&(l||t===r))return Po(n);if(!n||!(t=kn(t)))return n;var u=Dn(n),f=Dn(t),h=Bo(u,f),v=xo(u,f)+1;return _t(u,h,v).join("")}function Jy(n,t,l){if(n=Ae(n),n&&(l||t===r))return n.slice(0,Do(n)+1);if(!n||!(t=kn(t)))return n;var u=Dn(n),f=xo(u,Dn(t))+1;return _t(u,0,f).join("")}function Qy(n,t,l){if(n=Ae(n),n&&(l||t===r))return n.replace(Pi,"");if(!n||!(t=kn(t)))return n;var u=Dn(n),f=Bo(u,Dn(t));return _t(u,f).join("")}function eb(n,t){var l=Q,u=Z;if(Le(t)){var f="separator"in t?t.separator:f;l="length"in t?ce(t.length):l,u="omission"in t?kn(t.omission):u}n=Ae(n);var h=n.length;if($t(n)){var v=Dn(n);h=v.length}if(l>=h)return n;var w=l-Yt(u);if(w<1)return u;var N=v?_t(v,0,w).join(""):n.slice(0,w);if(f===r)return N+u;if(v&&(w+=N.length-w),Bs(f)){if(n.slice(w).search(f)){var K,C=N;for(f.global||(f=zi(f.source,Ae(Ql.exec(f))+"g")),f.lastIndex=0;K=f.exec(C);)var $=K.index;N=N.slice(0,$===r?w:$)}}else if(n.indexOf(kn(f),w)!=w){var ee=N.lastIndexOf(f);ee>-1&&(N=N.slice(0,ee))}return N+u}function nb(n){return n=Ae(n),n&&fc.test(n)?n.replace(Xl,Im):n}var tb=er(function(n,t,l){return n+(l?" ":"")+t.toUpperCase()}),Ds=wu("toUpperCase");function Td(n,t,l){return n=Ae(n),t=l?r:t,t===r?Am(n)?Bm(n):hm(n):n.match(t)||[]}var _d=pe(function(n,t){try{return pn(n,r,t)}catch(l){return Ps(l)?l:new ge(l)}}),rb=it(function(n,t){return An(t,function(l){l=Un(l),rt(n,l,Is(n[l],n))}),n});function ab(n){var t=n==null?0:n.length,l=oe();return n=t?De(n,function(u){if(typeof u[1]!="function")throw new Rn(d);return[l(u[0]),u[1]]}):[],pe(function(u){for(var f=-1;++f<t;){var h=n[f];if(pn(h[0],this,u))return pn(h[1],this,u)}})}function ib(n){return Ip(jn(n,y))}function Ms(n){return function(){return n}}function sb(n,t){return n==null||n!==n?t:n}var lb=Ru(),ob=Ru(!0);function fn(n){return n}function Ls(n){return tu(typeof n=="function"?n:jn(n,y))}function ub(n){return au(jn(n,y))}function db(n,t){return iu(n,jn(t,y))}var gb=pe(function(n,t){return function(l){return Nr(l,n,t)}}),fb=pe(function(n,t){return function(l){return Nr(n,l,t)}});function Fs(n,t,l){var u=ze(t),f=ja(t,u);l==null&&!(Le(t)&&(f.length||!u.length))&&(l=t,t=n,n=this,f=ja(t,ze(t)));var h=!(Le(l)&&"chain"in l)||!!l.chain,v=lt(n);return An(f,function(w){var N=t[w];n[w]=N,v&&(n.prototype[w]=function(){var K=this.__chain__;if(h||K){var C=n(this.__wrapped__),$=C.__actions__=un(this.__actions__);return $.push({func:N,args:arguments,thisArg:n}),C.__chain__=K,C}return N.apply(n,kt([this.value()],arguments))})}),n}function cb(){return en._===this&&(en._=Fm),this}function Ks(){}function mb(n){return n=ce(n),pe(function(t){return su(t,n)})}var pb=ks(De),hb=ks(So),kb=ks(Vi);function wd(n){return ws(n)?Hi(Un(n)):Yp(n)}function vb(n){return function(t){return n==null?r:Bt(n,t)}}var yb=ju(),bb=ju(!0);function Cs(){return[]}function Vs(){return!1}function Eb(){return{}}function Tb(){return""}function _b(){return!0}function wb(n,t){if(n=ce(n),n<1||n>G)return[];var l=ne,u=tn(n,ne);t=oe(t),n-=ne;for(var f=$i(u,t);++l<n;)t(l);return f}function Ab(n){return fe(n)?De(n,Un):vn(n)?[n]:un(Gu(Ae(n)))}function Rb(n){var t=++Mm;return Ae(n)+t}var Sb=xa(function(n,t){return n+t},0),jb=vs("ceil"),Nb=xa(function(n,t){return n/t},1),Ib=vs("floor");function Ob(n){return n&&n.length?Sa(n,fn,rs):r}function Pb(n,t){return n&&n.length?Sa(n,oe(t,2),rs):r}function Bb(n){return Io(n,fn)}function xb(n,t){return Io(n,oe(t,2))}function qb(n){return n&&n.length?Sa(n,fn,ls):r}function Db(n,t){return n&&n.length?Sa(n,oe(t,2),ls):r}var Mb=xa(function(n,t){return n*t},1),Lb=vs("round"),Fb=xa(function(n,t){return n-t},0);function Kb(n){return n&&n.length?Ui(n,fn):0}function Cb(n,t){return n&&n.length?Ui(n,oe(t,2)):0}return m.after=uv,m.ary=nd,m.assign=Xv,m.assignIn=pd,m.assignInWith=Ya,m.assignWith=Zv,m.at=Jv,m.before=td,m.bind=Is,m.bindAll=rb,m.bindKey=rd,m.castArray=Ev,m.chain=Ju,m.chunk=Ih,m.compact=Oh,m.concat=Ph,m.cond=ab,m.conforms=ib,m.constant=Ms,m.countBy=Kk,m.create=Qv,m.curry=ad,m.curryRight=id,m.debounce=sd,m.defaults=ey,m.defaultsDeep=ny,m.defer=dv,m.delay=gv,m.difference=Bh,m.differenceBy=xh,m.differenceWith=qh,m.drop=Dh,m.dropRight=Mh,m.dropRightWhile=Lh,m.dropWhile=Fh,m.fill=Kh,m.filter=Vk,m.flatMap=Uk,m.flatMapDeep=$k,m.flatMapDepth=Yk,m.flatten=Wu,m.flattenDeep=Ch,m.flattenDepth=Vh,m.flip=fv,m.flow=lb,m.flowRight=ob,m.fromPairs=Hh,m.functions=oy,m.functionsIn=uy,m.groupBy=Wk,m.initial=Uh,m.intersection=$h,m.intersectionBy=Yh,m.intersectionWith=Wh,m.invert=gy,m.invertBy=fy,m.invokeMap=Xk,m.iteratee=Ls,m.keyBy=Zk,m.keys=ze,m.keysIn=gn,m.map=Ca,m.mapKeys=my,m.mapValues=py,m.matches=ub,m.matchesProperty=db,m.memoize=Ha,m.merge=hy,m.mergeWith=hd,m.method=gb,m.methodOf=fb,m.mixin=Fs,m.negate=Ga,m.nthArg=mb,m.omit=ky,m.omitBy=vy,m.once=cv,m.orderBy=Jk,m.over=pb,m.overArgs=mv,m.overEvery=hb,m.overSome=kb,m.partial=Os,m.partialRight=ld,m.partition=Qk,m.pick=yy,m.pickBy=kd,m.property=wd,m.propertyOf=vb,m.pull=Jh,m.pullAll=Xu,m.pullAllBy=Qh,m.pullAllWith=ek,m.pullAt=nk,m.range=yb,m.rangeRight=bb,m.rearg=pv,m.reject=tv,m.remove=tk,m.rest=hv,m.reverse=js,m.sampleSize=av,m.set=Ey,m.setWith=Ty,m.shuffle=iv,m.slice=rk,m.sortBy=ov,m.sortedUniq=dk,m.sortedUniqBy=gk,m.split=Uy,m.spread=kv,m.tail=fk,m.take=ck,m.takeRight=mk,m.takeRightWhile=pk,m.takeWhile=hk,m.tap=Ok,m.throttle=vv,m.thru=Ka,m.toArray=fd,m.toPairs=vd,m.toPairsIn=yd,m.toPath=Ab,m.toPlainObject=md,m.transform=_y,m.unary=yv,m.union=kk,m.unionBy=vk,m.unionWith=yk,m.uniq=bk,m.uniqBy=Ek,m.uniqWith=Tk,m.unset=wy,m.unzip=Ns,m.unzipWith=Zu,m.update=Ay,m.updateWith=Ry,m.values=rr,m.valuesIn=Sy,m.without=_k,m.words=Td,m.wrap=bv,m.xor=wk,m.xorBy=Ak,m.xorWith=Rk,m.zip=Sk,m.zipObject=jk,m.zipObjectDeep=Nk,m.zipWith=Ik,m.entries=vd,m.entriesIn=yd,m.extend=pd,m.extendWith=Ya,Fs(m,m),m.add=Sb,m.attempt=_d,m.camelCase=Oy,m.capitalize=bd,m.ceil=jb,m.clamp=jy,m.clone=Tv,m.cloneDeep=wv,m.cloneDeepWith=Av,m.cloneWith=_v,m.conformsTo=Rv,m.deburr=Ed,m.defaultTo=sb,m.divide=Nb,m.endsWith=Py,m.eq=Ln,m.escape=By,m.escapeRegExp=xy,m.every=Ck,m.find=Hk,m.findIndex=$u,m.findKey=ty,m.findLast=Gk,m.findLastIndex=Yu,m.findLastKey=ry,m.floor=Ib,m.forEach=Qu,m.forEachRight=ed,m.forIn=ay,m.forInRight=iy,m.forOwn=sy,m.forOwnRight=ly,m.get=xs,m.gt=Sv,m.gte=jv,m.has=dy,m.hasIn=qs,m.head=zu,m.identity=fn,m.includes=zk,m.indexOf=Gh,m.inRange=Ny,m.invoke=cy,m.isArguments=Dt,m.isArray=fe,m.isArrayBuffer=Nv,m.isArrayLike=dn,m.isArrayLikeObject=Ue,m.isBoolean=Iv,m.isBuffer=wt,m.isDate=Ov,m.isElement=Pv,m.isEmpty=Bv,m.isEqual=xv,m.isEqualWith=qv,m.isError=Ps,m.isFinite=Dv,m.isFunction=lt,m.isInteger=od,m.isLength=Ua,m.isMap=ud,m.isMatch=Mv,m.isMatchWith=Lv,m.isNaN=Fv,m.isNative=Kv,m.isNil=Vv,m.isNull=Cv,m.isNumber=dd,m.isObject=Le,m.isObjectLike=He,m.isPlainObject=qr,m.isRegExp=Bs,m.isSafeInteger=Hv,m.isSet=gd,m.isString=$a,m.isSymbol=vn,m.isTypedArray=tr,m.isUndefined=Gv,m.isWeakMap=Uv,m.isWeakSet=$v,m.join=zh,m.kebabCase=qy,m.last=In,m.lastIndexOf=Xh,m.lowerCase=Dy,m.lowerFirst=My,m.lt=Yv,m.lte=Wv,m.max=Ob,m.maxBy=Pb,m.mean=Bb,m.meanBy=xb,m.min=qb,m.minBy=Db,m.stubArray=Cs,m.stubFalse=Vs,m.stubObject=Eb,m.stubString=Tb,m.stubTrue=_b,m.multiply=Mb,m.nth=Zh,m.noConflict=cb,m.noop=Ks,m.now=Va,m.pad=Ly,m.padEnd=Fy,m.padStart=Ky,m.parseInt=Cy,m.random=Iy,m.reduce=ev,m.reduceRight=nv,m.repeat=Vy,m.replace=Hy,m.result=by,m.round=Lb,m.runInContext=S,m.sample=rv,m.size=sv,m.snakeCase=Gy,m.some=lv,m.sortedIndex=ak,m.sortedIndexBy=ik,m.sortedIndexOf=sk,m.sortedLastIndex=lk,m.sortedLastIndexBy=ok,m.sortedLastIndexOf=uk,m.startCase=$y,m.startsWith=Yy,m.subtract=Fb,m.sum=Kb,m.sumBy=Cb,m.template=Wy,m.times=wb,m.toFinite=ot,m.toInteger=ce,m.toLength=cd,m.toLower=zy,m.toNumber=On,m.toSafeInteger=zv,m.toString=Ae,m.toUpper=Xy,m.trim=Zy,m.trimEnd=Jy,m.trimStart=Qy,m.truncate=eb,m.unescape=nb,m.uniqueId=Rb,m.upperCase=tb,m.upperFirst=Ds,m.each=Qu,m.eachRight=ed,m.first=zu,Fs(m,function(){var n={};return Hn(m,function(t,l){Se.call(m.prototype,l)||(n[l]=t)}),n}(),{chain:!1}),m.VERSION=a,An(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){m[n].placeholder=m}),An(["drop","take"],function(n,t){ye.prototype[n]=function(l){l=l===r?1:We(ce(l),0);var u=this.__filtered__&&!t?new ye(this):this.clone();return u.__filtered__?u.__takeCount__=tn(l,u.__takeCount__):u.__views__.push({size:tn(l,ne),type:n+(u.__dir__<0?"Right":"")}),u},ye.prototype[n+"Right"]=function(l){return this.reverse()[n](l).reverse()}}),An(["filter","map","takeWhile"],function(n,t){var l=t+1,u=l==D||l==te;ye.prototype[n]=function(f){var h=this.clone();return h.__iteratees__.push({iteratee:oe(f,3),type:l}),h.__filtered__=h.__filtered__||u,h}}),An(["head","last"],function(n,t){var l="take"+(t?"Right":"");ye.prototype[n]=function(){return this[l](1).value()[0]}}),An(["initial","tail"],function(n,t){var l="drop"+(t?"":"Right");ye.prototype[n]=function(){return this.__filtered__?new ye(this):this[l](1)}}),ye.prototype.compact=function(){return this.filter(fn)},ye.prototype.find=function(n){return this.filter(n).head()},ye.prototype.findLast=function(n){return this.reverse().find(n)},ye.prototype.invokeMap=pe(function(n,t){return typeof n=="function"?new ye(this):this.map(function(l){return Nr(l,n,t)})}),ye.prototype.reject=function(n){return this.filter(Ga(oe(n)))},ye.prototype.slice=function(n,t){n=ce(n);var l=this;return l.__filtered__&&(n>0||t<0)?new ye(l):(n<0?l=l.takeRight(-n):n&&(l=l.drop(n)),t!==r&&(t=ce(t),l=t<0?l.dropRight(-t):l.take(t-n)),l)},ye.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},ye.prototype.toArray=function(){return this.take(ne)},Hn(ye.prototype,function(n,t){var l=/^(?:filter|find|map|reject)|While$/.test(t),u=/^(?:head|last)$/.test(t),f=m[u?"take"+(t=="last"?"Right":""):t],h=u||/^find/.test(t);f&&(m.prototype[t]=function(){var v=this.__wrapped__,w=u?[1]:arguments,N=v instanceof ye,K=w[0],C=N||fe(v),$=function(ke){var be=f.apply(m,kt([ke],w));return u&&ee?be[0]:be};C&&l&&typeof K=="function"&&K.length!=1&&(N=C=!1);var ee=this.__chain__,se=!!this.__actions__.length,ue=h&&!ee,me=N&&!se;if(!h&&C){v=me?v:new ye(this);var de=n.apply(v,w);return de.__actions__.push({func:Ka,args:[$],thisArg:r}),new Sn(de,ee)}return ue&&me?n.apply(this,w):(de=this.thru($),ue?u?de.value()[0]:de.value():de)})}),An(["pop","push","shift","sort","splice","unshift"],function(n){var t=fa[n],l=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",u=/^(?:pop|shift)$/.test(n);m.prototype[n]=function(){var f=arguments;if(u&&!this.__chain__){var h=this.value();return t.apply(fe(h)?h:[],f)}return this[l](function(v){return t.apply(fe(v)?v:[],f)})}}),Hn(ye.prototype,function(n,t){var l=m[t];if(l){var u=l.name+"";Se.call(Zt,u)||(Zt[u]=[]),Zt[u].push({name:t,func:l})}}),Zt[Ba(r,R).name]=[{name:"wrapper",func:r}],ye.prototype.clone=np,ye.prototype.reverse=tp,ye.prototype.value=rp,m.prototype.at=Pk,m.prototype.chain=Bk,m.prototype.commit=xk,m.prototype.next=qk,m.prototype.plant=Mk,m.prototype.reverse=Lk,m.prototype.toJSON=m.prototype.valueOf=m.prototype.value=Fk,m.prototype.first=m.prototype.head,Tr&&(m.prototype[Tr]=Dk),m},Wt=xm();jt?((jt.exports=Wt)._=Wt,Li._=Wt):en._=Wt}).call(UT)}(Hr,Hr.exports)),Hr.exports}$T();Kn(na);const jf=A.forwardRef((e,i)=>L.jsx(sr,{gap:"space-8",style:{display:"flex"},...e,ref:i}));jf.displayName="FaktaGruppe";jf.__docgenInfo={description:"",methods:[],displayName:"FaktaGruppe"};var nl={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var fg;function YT(){return fg||(fg=1,function(e){(function(){var i={}.hasOwnProperty;function r(){for(var o="",d=0;d<arguments.length;d++){var g=arguments[d];g&&(o=s(o,a.call(this,g)))}return o}function a(o){if(typeof o=="string"||typeof o=="number")return this&&this[o]||o;if(typeof o!="object")return"";if(Array.isArray(o))return r.apply(this,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var d="";for(var g in o)i.call(o,g)&&o[g]&&(d=s(d,this&&this[g]||g));return d}function s(o,d){return d?o?o+" "+d:o+d:o}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(nl)),nl.exports}var WT=YT();const zT=Hg(WT),XT="_boks_nm7fe_1",ZT="_harBorderLeft_nm7fe_8",JT="_harBorderTop_nm7fe_12",QT={boks:XT,harBorderLeft:ZT,harBorderTop:JT};zT.bind(QT);var tl={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var cg;function e_(){return cg||(cg=1,function(e){(function(){var i={}.hasOwnProperty;function r(){for(var o="",d=0;d<arguments.length;d++){var g=arguments[d];g&&(o=s(o,a(g)))}return o}function a(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return r.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var d="";for(var g in o)i.call(o,g)&&o[g]&&(d=s(d,g));return d}function s(o,d){return d?o?o+" "+d:o+d:o}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(tl)),tl.exports}e_();function n_(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var mg={exports:{}},Kr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pg;function t_(){if(pg)return Kr;pg=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(a,s,o){var d=null;if(o!==void 0&&(d=""+o),s.key!==void 0&&(d=""+s.key),"key"in s){o={};for(var g in s)g!=="key"&&(o[g]=s[g])}else o=s;return s=o.ref,{$$typeof:e,type:a,key:d,ref:s!==void 0?s:null,props:o}}return Kr.Fragment=i,Kr.jsx=r,Kr.jsxs=r,Kr}var hg;function r_(){return hg||(hg=1,mg.exports=t_()),mg.exports}var gt=r_();const a_="_autocompleteSuggestion__substring_uvuzd_1",i_="_autocompleteSuggestion__inner_uvuzd_4",Cr={autocompleteSuggestion__substring:a_,autocompleteSuggestion__inner:i_,"autocompleteSuggestion--active":"_autocompleteSuggestion--active_uvuzd_12"};class s_ extends U.Component{constructor(i){super(i),this.state={value:i.value},this.onClick=this.onClick.bind(this),this.onMouseMove=this.onMouseMove.bind(this)}onClick(){const{onClick:i}=this.props,{value:r}=this.state;i(r)}onMouseMove(){const{setSuggestionIndex:i,index:r}=this.props;i(r)}render(){const{match:i,active:r,avoidBlur:a,id:s}=this.props,{value:o}=this.state.value,d=o.toLowerCase().startsWith(i.toLowerCase());return gt.jsx("li",{id:s,role:"option","aria-selected":r,onClick:this.onClick,onMouseMove:this.onMouseMove,onFocus:a,onMouseDown:a,onKeyDown:a,className:"autocompleteSuggestion typo-normal",children:d?gt.jsxs("span",{className:`${Cr.autocompleteSuggestion__inner} ${r?Cr["autocompleteSuggestion--active"]:""}`,children:[o.substring(0,i.length),gt.jsx("span",{className:Cr.autocompleteSuggestion__substring,children:o.substring(i.length)})]}):gt.jsx("span",{className:`${Cr.autocompleteSuggestion__inner} ${r?Cr["autocompleteSuggestion--active"]:""}`,children:o})})}}const l_="_autocomplete_cj8jr_1",o_="_autocomplete__suggestions_cj8jr_27",rl={autocomplete:l_,autocomplete__suggestions:o_,"autocomplete__suggestions--hidden":"_autocomplete__suggestions--hidden_cj8jr_31"};class bA extends U.Component{input;inputRef;constructor(i){super(i),this.state={activeSuggestionIndex:-1,hasFocus:!1,shouldShowSuggestions:!0,setAriaActiveDescendant:!1,shouldBlur:!0,blurDelay:null},this.inputRef=r=>{this.input=r},this.onChange=this.onChange.bind(this),this.onBlur=this.onBlur.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.onFocus=this.onFocus.bind(this),this.setValue=this.setValue.bind(this),this.setSuggestionIndex=this.setSuggestionIndex.bind(this),this.avoidBlur=this.avoidBlur.bind(this),this.clearBlurDelay=this.clearBlurDelay.bind(this),this.onSearchButtonClick=this.onSearchButtonClick.bind(this)}componentWillUnmount(){const{blurDelay:i}=this.state;i&&(clearTimeout(i),this.setState({blurDelay:null}))}onChange(i){const{onChange:r}=this.props;this.setState({activeSuggestionIndex:-1,shouldShowSuggestions:!0}),r(i)}onSearchButtonClick(i){const{onSearchButtonClick:r}=this.props;i.preventDefault(),r&&r()}onKeyDown(i){const{shouldShowSuggestions:r}=this.state;let{activeSuggestionIndex:a}=this.state;const{suggestions:s}=this.props,o=a>-1;switch(this.setState({setAriaActiveDescendant:i.keyCode===38||i.keyCode===40}),i.keyCode){case 9:o&&r&&this.setValue(s[a]);break;case 13:o&&r?(i.preventDefault(),this.setValue(s[a])):r&&s.length===1?this.setValue(s[0]):this.setState({shouldShowSuggestions:!1});break;case 27:r&&s.length>0&&(i.preventDefault(),this.setState({shouldShowSuggestions:!1}));break;case 38:r&&(i.preventDefault(),a=a-1===-2?-1:a-1,this.setState({activeSuggestionIndex:a}));break;case 40:r&&(i.preventDefault(),a=a+1===s.length?s.length-1:a+1,this.setState({activeSuggestionIndex:a}));break}}onFocus(){this.setState({hasFocus:!0,activeSuggestionIndex:-1})}onBlur(){const i=setTimeout(()=>{const{shouldBlur:a}=this.state;a&&this.setState({hasFocus:!1})},10);this.setState({blurDelay:i});const{onBlur:r}=this.props;r&&r()}setSuggestionIndex(i){this.setState({activeSuggestionIndex:i}),this.clearBlurDelay()}setValue(i){this.setState({shouldShowSuggestions:!1,activeSuggestionIndex:-1},()=>{this.inputRef.focus()}),this.clearBlurDelay();const{onSelect:r}=this.props;r(i)}avoidBlur(){this.setState({shouldBlur:!1})}clearBlurDelay(){const{blurDelay:i}=this.state;i&&(clearTimeout(i),this.setState({blurDelay:null})),this.setState({shouldBlur:!0})}render(){const{suggestions:i,id:r,ariaLabel:a,placeholder:s,value:o,name:d,shouldFocusOnMount:g,isLoading:c}=this.props,{activeSuggestionIndex:p,setAriaActiveDescendant:k,hasFocus:y,shouldShowSuggestions:E}=this.state,T=y&&E&&i.length>0,O=k&&p>-1?`${r}-item-${p}`:void 0;return gt.jsxs("div",{className:`${rl.autocomplete} autocomplete`,"aria-expanded":T,"aria-owns":`${r}-suggestions`,"aria-haspopup":"listbox",children:[gt.jsx(kl,{variant:"primary",id:r,name:d,"aria-label":a,"aria-autocomplete":"list","aria-controls":`${r}-suggestions`,"aria-activedescendant":O,placeholder:s,value:o,autoComplete:"off",onChange:this.onChange,onBlur:this.onBlur,onKeyDown:this.onKeyDown,onFocus:this.onFocus,ref:_=>{this.inputRef=_},className:"typo-normal",autoFocus:g,label:a,hideLabel:!0,children:gt.jsx(kl.Button,{loading:c,onClick:this.onSearchButtonClick})}),gt.jsx("ul",{id:`${r}-suggestions`,role:"listbox",className:T?rl.autocomplete__suggestions:rl["autocomplete__suggestions--hidden"],children:T&&i.map((_,b)=>gt.jsx(s_,{id:`${r}-item-${b}`,index:b,value:_,match:o,active:b===p,onClick:this.setValue,setSuggestionIndex:this.setSuggestionIndex,avoidBlur:this.avoidBlur},_.key))})]})}}var yl=function(e,i){return yl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,a){r.__proto__=a}||function(r,a){for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(r[s]=a[s])},yl(e,i)};function Cn(e,i){if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");yl(e,i);function r(){this.constructor=e}e.prototype=i===null?Object.create(i):(r.prototype=i.prototype,new r)}var ie=function(){return ie=Object.assign||function(e){for(var i,r=1,a=arguments.length;r<a;r++){i=arguments[r];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e},ie.apply(this,arguments)};function yi(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r}function Wn(e,i,r){if(arguments.length===2)for(var a=0,s=i.length,o;a<s;a++)(o||!(a in i))&&(o||(o=Array.prototype.slice.call(i,0,a)),o[a]=i[a]);return e.concat(o||Array.prototype.slice.call(i))}function $n(e,i){var r=i&&i.cache?i.cache:p_,a=i&&i.serializer?i.serializer:c_,s=i&&i.strategy?i.strategy:g_;return s(e,{cache:r,serializer:a})}function u_(e){return e==null||typeof e=="number"||typeof e=="boolean"}function d_(e,i,r,a){var s=u_(a)?a:r(a),o=i.get(s);return typeof o>"u"&&(o=e.call(this,a),i.set(s,o)),o}function Nf(e,i,r){var a=Array.prototype.slice.call(arguments,3),s=r(a),o=i.get(s);return typeof o>"u"&&(o=e.apply(this,a),i.set(s,o)),o}function If(e,i,r,a,s){return r.bind(i,e,a,s)}function g_(e,i){var r=e.length===1?d_:Nf;return If(e,this,r,i.cache.create(),i.serializer)}function f_(e,i){return If(e,this,Nf,i.cache.create(),i.serializer)}var c_=function(){return JSON.stringify(arguments)},m_=function(){function e(){this.cache=Object.create(null)}return e.prototype.get=function(i){return this.cache[i]},e.prototype.set=function(i,r){this.cache[i]=r},e}(),p_={create:function(){return new m_}},Yn={variadic:f_},Ee;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(Ee||(Ee={}));var xe;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(xe||(xe={}));var gr;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(gr||(gr={}));function kg(e){return e.type===xe.literal}function h_(e){return e.type===xe.argument}function Of(e){return e.type===xe.number}function Pf(e){return e.type===xe.date}function Bf(e){return e.type===xe.time}function xf(e){return e.type===xe.select}function qf(e){return e.type===xe.plural}function k_(e){return e.type===xe.pound}function Df(e){return e.type===xe.tag}function Mf(e){return!!(e&&typeof e=="object"&&e.type===gr.number)}function bl(e){return!!(e&&typeof e=="object"&&e.type===gr.dateTime)}var Lf=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,v_=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function y_(e){var i={};return e.replace(v_,function(r){var a=r.length;switch(r[0]){case"G":i.era=a===4?"long":a===5?"narrow":"short";break;case"y":i.year=a===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":i.month=["numeric","2-digit","short","long","narrow"][a-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":i.day=["numeric","2-digit"][a-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":i.weekday=a===4?"long":a===5?"narrow":"short";break;case"e":if(a<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");i.weekday=["short","long","narrow","short"][a-4];break;case"c":if(a<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");i.weekday=["short","long","narrow","short"][a-4];break;case"a":i.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":i.hourCycle="h12",i.hour=["numeric","2-digit"][a-1];break;case"H":i.hourCycle="h23",i.hour=["numeric","2-digit"][a-1];break;case"K":i.hourCycle="h11",i.hour=["numeric","2-digit"][a-1];break;case"k":i.hourCycle="h24",i.hour=["numeric","2-digit"][a-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":i.minute=["numeric","2-digit"][a-1];break;case"s":i.second=["numeric","2-digit"][a-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":i.timeZoneName=a<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),i}var b_=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function E_(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var i=e.split(b_).filter(function(E){return E.length>0}),r=[],a=0,s=i;a<s.length;a++){var o=s[a],d=o.split("/");if(d.length===0)throw new Error("Invalid number skeleton");for(var g=d[0],c=d.slice(1),p=0,k=c;p<k.length;p++){var y=k[p];if(y.length===0)throw new Error("Invalid number skeleton")}r.push({stem:g,options:c})}return r}function T_(e){return e.replace(/^(.*?)-/,"")}var vg=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,Ff=/^(@+)?(\+|#+)?[rs]?$/g,__=/(\*)(0+)|(#+)(0+)|(0+)/g,Kf=/^(0+)$/;function yg(e){var i={};return e[e.length-1]==="r"?i.roundingPriority="morePrecision":e[e.length-1]==="s"&&(i.roundingPriority="lessPrecision"),e.replace(Ff,function(r,a,s){return typeof s!="string"?(i.minimumSignificantDigits=a.length,i.maximumSignificantDigits=a.length):s==="+"?i.minimumSignificantDigits=a.length:a[0]==="#"?i.maximumSignificantDigits=a.length:(i.minimumSignificantDigits=a.length,i.maximumSignificantDigits=a.length+(typeof s=="string"?s.length:0)),""}),i}function Cf(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function w_(e){var i;if(e[0]==="E"&&e[1]==="E"?(i={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(i={notation:"scientific"},e=e.slice(1)),i){var r=e.slice(0,2);if(r==="+!"?(i.signDisplay="always",e=e.slice(2)):r==="+?"&&(i.signDisplay="exceptZero",e=e.slice(2)),!Kf.test(e))throw new Error("Malformed concise eng/scientific notation");i.minimumIntegerDigits=e.length}return i}function bg(e){var i={},r=Cf(e);return r||i}function A_(e){for(var i={},r=0,a=e;r<a.length;r++){var s=a[r];switch(s.stem){case"percent":case"%":i.style="percent";continue;case"%x100":i.style="percent",i.scale=100;continue;case"currency":i.style="currency",i.currency=s.options[0];continue;case"group-off":case",_":i.useGrouping=!1;continue;case"precision-integer":case".":i.maximumFractionDigits=0;continue;case"measure-unit":case"unit":i.style="unit",i.unit=T_(s.options[0]);continue;case"compact-short":case"K":i.notation="compact",i.compactDisplay="short";continue;case"compact-long":case"KK":i.notation="compact",i.compactDisplay="long";continue;case"scientific":i=ie(ie(ie({},i),{notation:"scientific"}),s.options.reduce(function(c,p){return ie(ie({},c),bg(p))},{}));continue;case"engineering":i=ie(ie(ie({},i),{notation:"engineering"}),s.options.reduce(function(c,p){return ie(ie({},c),bg(p))},{}));continue;case"notation-simple":i.notation="standard";continue;case"unit-width-narrow":i.currencyDisplay="narrowSymbol",i.unitDisplay="narrow";continue;case"unit-width-short":i.currencyDisplay="code",i.unitDisplay="short";continue;case"unit-width-full-name":i.currencyDisplay="name",i.unitDisplay="long";continue;case"unit-width-iso-code":i.currencyDisplay="symbol";continue;case"scale":i.scale=parseFloat(s.options[0]);continue;case"rounding-mode-floor":i.roundingMode="floor";continue;case"rounding-mode-ceiling":i.roundingMode="ceil";continue;case"rounding-mode-down":i.roundingMode="trunc";continue;case"rounding-mode-up":i.roundingMode="expand";continue;case"rounding-mode-half-even":i.roundingMode="halfEven";continue;case"rounding-mode-half-down":i.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":i.roundingMode="halfExpand";continue;case"integer-width":if(s.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");s.options[0].replace(__,function(c,p,k,y,E,T){if(p)i.minimumIntegerDigits=k.length;else{if(y&&E)throw new Error("We currently do not support maximum integer digits");if(T)throw new Error("We currently do not support exact integer digits")}return""});continue}if(Kf.test(s.stem)){i.minimumIntegerDigits=s.stem.length;continue}if(vg.test(s.stem)){if(s.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");s.stem.replace(vg,function(c,p,k,y,E,T){return k==="*"?i.minimumFractionDigits=p.length:y&&y[0]==="#"?i.maximumFractionDigits=y.length:E&&T?(i.minimumFractionDigits=E.length,i.maximumFractionDigits=E.length+T.length):(i.minimumFractionDigits=p.length,i.maximumFractionDigits=p.length),""});var o=s.options[0];o==="w"?i=ie(ie({},i),{trailingZeroDisplay:"stripIfInteger"}):o&&(i=ie(ie({},i),yg(o)));continue}if(Ff.test(s.stem)){i=ie(ie({},i),yg(s.stem));continue}var d=Cf(s.stem);d&&(i=ie(ie({},i),d));var g=w_(s.stem);g&&(i=ie(ie({},i),g))}return i}var Za={"001":["H","h"],419:["h","H","hB","hb"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["h","H","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["h","H","hB","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["h","H","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["h","H","hB","hb"],CU:["h","H","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["h","H","hB","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["h","H","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["h","H","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["h","H","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["h","H","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["h","H","hB","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["h","H","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["h","H","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["h","H","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"en-HK":["h","hb","H","hB"],"en-IL":["H","h","hb","hB"],"en-MY":["h","hb","H","hB"],"es-BR":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function R_(e,i){for(var r="",a=0;a<e.length;a++){var s=e.charAt(a);if(s==="j"){for(var o=0;a+1<e.length&&e.charAt(a+1)===s;)o++,a++;var d=1+(o&1),g=o<2?1:3+(o>>1),c="a",p=S_(i);for((p=="H"||p=="k")&&(g=0);g-- >0;)r+=c;for(;d-- >0;)r=p+r}else s==="J"?r+="H":r+=s}return r}function S_(e){var i=e.hourCycle;if(i===void 0&&e.hourCycles&&e.hourCycles.length&&(i=e.hourCycles[0]),i)switch(i){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var r=e.language,a;r!=="root"&&(a=e.maximize().region);var s=Za[a||""]||Za[r||""]||Za["".concat(r,"-001")]||Za["001"];return s[0]}var al,j_=new RegExp("^".concat(Lf.source,"*")),N_=new RegExp("".concat(Lf.source,"*$"));function Te(e,i){return{start:e,end:i}}var I_=!!String.prototype.startsWith&&"_a".startsWith("a",1),O_=!!String.fromCodePoint,P_=!!Object.fromEntries,B_=!!String.prototype.codePointAt,x_=!!String.prototype.trimStart,q_=!!String.prototype.trimEnd,D_=!!Number.isSafeInteger,M_=D_?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},El=!0;try{var L_=Hf("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");El=((al=L_.exec("a"))===null||al===void 0?void 0:al[0])==="a"}catch{El=!1}var Eg=I_?function(e,i,r){return e.startsWith(i,r)}:function(e,i,r){return e.slice(r,r+i.length)===i},Tl=O_?String.fromCodePoint:function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];for(var r="",a=e.length,s=0,o;a>s;){if(o=e[s++],o>1114111)throw RangeError(o+" is not a valid code point");r+=o<65536?String.fromCharCode(o):String.fromCharCode(((o-=65536)>>10)+55296,o%1024+56320)}return r},Tg=P_?Object.fromEntries:function(e){for(var i={},r=0,a=e;r<a.length;r++){var s=a[r],o=s[0],d=s[1];i[o]=d}return i},Vf=B_?function(e,i){return e.codePointAt(i)}:function(e,i){var r=e.length;if(!(i<0||i>=r)){var a=e.charCodeAt(i),s;return a<55296||a>56319||i+1===r||(s=e.charCodeAt(i+1))<56320||s>57343?a:(a-55296<<10)+(s-56320)+65536}},F_=x_?function(e){return e.trimStart()}:function(e){return e.replace(j_,"")},K_=q_?function(e){return e.trimEnd()}:function(e){return e.replace(N_,"")};function Hf(e,i){return new RegExp(e,i)}var _l;if(El){var _g=Hf("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");_l=function(e,i){var r;_g.lastIndex=i;var a=_g.exec(e);return(r=a[1])!==null&&r!==void 0?r:""}}else _l=function(e,i){for(var r=[];;){var a=Vf(e,i);if(a===void 0||Gf(a)||G_(a))break;r.push(a),i+=a>=65536?2:1}return Tl.apply(void 0,r)};var C_=function(){function e(i,r){r===void 0&&(r={}),this.message=i,this.position={offset:0,line:1,column:1},this.ignoreTag=!!r.ignoreTag,this.locale=r.locale,this.requiresOtherClause=!!r.requiresOtherClause,this.shouldParseSkeletons=!!r.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(i,r,a){for(var s=[];!this.isEOF();){var o=this.char();if(o===123){var d=this.parseArgument(i,a);if(d.err)return d;s.push(d.val)}else{if(o===125&&i>0)break;if(o===35&&(r==="plural"||r==="selectordinal")){var g=this.clonePosition();this.bump(),s.push({type:xe.pound,location:Te(g,this.clonePosition())})}else if(o===60&&!this.ignoreTag&&this.peek()===47){if(a)break;return this.error(Ee.UNMATCHED_CLOSING_TAG,Te(this.clonePosition(),this.clonePosition()))}else if(o===60&&!this.ignoreTag&&wl(this.peek()||0)){var d=this.parseTag(i,r);if(d.err)return d;s.push(d.val)}else{var d=this.parseLiteral(i,r);if(d.err)return d;s.push(d.val)}}}return{val:s,err:null}},e.prototype.parseTag=function(i,r){var a=this.clonePosition();this.bump();var s=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:xe.literal,value:"<".concat(s,"/>"),location:Te(a,this.clonePosition())},err:null};if(this.bumpIf(">")){var o=this.parseMessage(i+1,r,!0);if(o.err)return o;var d=o.val,g=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!wl(this.char()))return this.error(Ee.INVALID_TAG,Te(g,this.clonePosition()));var c=this.clonePosition(),p=this.parseTagName();return s!==p?this.error(Ee.UNMATCHED_CLOSING_TAG,Te(c,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:xe.tag,value:s,children:d,location:Te(a,this.clonePosition())},err:null}:this.error(Ee.INVALID_TAG,Te(g,this.clonePosition())))}else return this.error(Ee.UNCLOSED_TAG,Te(a,this.clonePosition()))}else return this.error(Ee.INVALID_TAG,Te(a,this.clonePosition()))},e.prototype.parseTagName=function(){var i=this.offset();for(this.bump();!this.isEOF()&&H_(this.char());)this.bump();return this.message.slice(i,this.offset())},e.prototype.parseLiteral=function(i,r){for(var a=this.clonePosition(),s="";;){var o=this.tryParseQuote(r);if(o){s+=o;continue}var d=this.tryParseUnquoted(i,r);if(d){s+=d;continue}var g=this.tryParseLeftAngleBracket();if(g){s+=g;continue}break}var c=Te(a,this.clonePosition());return{val:{type:xe.literal,value:s,location:c},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!V_(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(i){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(i==="plural"||i==="selectordinal")break;return null;default:return null}this.bump();var r=[this.char()];for(this.bump();!this.isEOF();){var a=this.char();if(a===39)if(this.peek()===39)r.push(39),this.bump();else{this.bump();break}else r.push(a);this.bump()}return Tl.apply(void 0,r)},e.prototype.tryParseUnquoted=function(i,r){if(this.isEOF())return null;var a=this.char();return a===60||a===123||a===35&&(r==="plural"||r==="selectordinal")||a===125&&i>0?null:(this.bump(),Tl(a))},e.prototype.parseArgument=function(i,r){var a=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(Ee.EXPECT_ARGUMENT_CLOSING_BRACE,Te(a,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(Ee.EMPTY_ARGUMENT,Te(a,this.clonePosition()));var s=this.parseIdentifierIfPossible().value;if(!s)return this.error(Ee.MALFORMED_ARGUMENT,Te(a,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(Ee.EXPECT_ARGUMENT_CLOSING_BRACE,Te(a,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:xe.argument,value:s,location:Te(a,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(Ee.EXPECT_ARGUMENT_CLOSING_BRACE,Te(a,this.clonePosition())):this.parseArgumentOptions(i,r,s,a);default:return this.error(Ee.MALFORMED_ARGUMENT,Te(a,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var i=this.clonePosition(),r=this.offset(),a=_l(this.message,r),s=r+a.length;this.bumpTo(s);var o=this.clonePosition(),d=Te(i,o);return{value:a,location:d}},e.prototype.parseArgumentOptions=function(i,r,a,s){var o,d=this.clonePosition(),g=this.parseIdentifierIfPossible().value,c=this.clonePosition();switch(g){case"":return this.error(Ee.EXPECT_ARGUMENT_TYPE,Te(d,c));case"number":case"date":case"time":{this.bumpSpace();var p=null;if(this.bumpIf(",")){this.bumpSpace();var k=this.clonePosition(),y=this.parseSimpleArgStyleIfPossible();if(y.err)return y;var E=K_(y.val);if(E.length===0)return this.error(Ee.EXPECT_ARGUMENT_STYLE,Te(this.clonePosition(),this.clonePosition()));var T=Te(k,this.clonePosition());p={style:E,styleLocation:T}}var O=this.tryParseArgumentClose(s);if(O.err)return O;var _=Te(s,this.clonePosition());if(p&&Eg(p?.style,"::",0)){var b=F_(p.style.slice(2));if(g==="number"){var y=this.parseNumberSkeletonFromString(b,p.styleLocation);return y.err?y:{val:{type:xe.number,value:a,location:_,style:y.val},err:null}}else{if(b.length===0)return this.error(Ee.EXPECT_DATE_TIME_SKELETON,_);var R=b;this.locale&&(R=R_(b,this.locale));var E={type:gr.dateTime,pattern:R,location:p.styleLocation,parsedOptions:this.shouldParseSkeletons?y_(R):{}},P=g==="date"?xe.date:xe.time;return{val:{type:P,value:a,location:_,style:E},err:null}}}return{val:{type:g==="number"?xe.number:g==="date"?xe.date:xe.time,value:a,location:_,style:(o=p?.style)!==null&&o!==void 0?o:null},err:null}}case"plural":case"selectordinal":case"select":{var j=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(Ee.EXPECT_SELECT_ARGUMENT_OPTIONS,Te(j,ie({},j)));this.bumpSpace();var H=this.parseIdentifierIfPossible(),I=0;if(g!=="select"&&H.value==="offset"){if(!this.bumpIf(":"))return this.error(Ee.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Te(this.clonePosition(),this.clonePosition()));this.bumpSpace();var y=this.tryParseDecimalInteger(Ee.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Ee.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(y.err)return y;this.bumpSpace(),H=this.parseIdentifierIfPossible(),I=y.val}var V=this.tryParsePluralOrSelectOptions(i,g,r,H);if(V.err)return V;var O=this.tryParseArgumentClose(s);if(O.err)return O;var x=Te(s,this.clonePosition());return g==="select"?{val:{type:xe.select,value:a,options:Tg(V.val),location:x},err:null}:{val:{type:xe.plural,value:a,options:Tg(V.val),offset:I,pluralType:g==="plural"?"cardinal":"ordinal",location:x},err:null}}default:return this.error(Ee.INVALID_ARGUMENT_TYPE,Te(d,c))}},e.prototype.tryParseArgumentClose=function(i){return this.isEOF()||this.char()!==125?this.error(Ee.EXPECT_ARGUMENT_CLOSING_BRACE,Te(i,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var i=0,r=this.clonePosition();!this.isEOF();){var a=this.char();switch(a){case 39:{this.bump();var s=this.clonePosition();if(!this.bumpUntil("'"))return this.error(Ee.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,Te(s,this.clonePosition()));this.bump();break}case 123:{i+=1,this.bump();break}case 125:{if(i>0)i-=1;else return{val:this.message.slice(r.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(r.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(i,r){var a=[];try{a=E_(i)}catch{return this.error(Ee.INVALID_NUMBER_SKELETON,r)}return{val:{type:gr.number,tokens:a,location:r,parsedOptions:this.shouldParseSkeletons?A_(a):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(i,r,a,s){for(var o,d=!1,g=[],c=new Set,p=s.value,k=s.location;;){if(p.length===0){var y=this.clonePosition();if(r!=="select"&&this.bumpIf("=")){var E=this.tryParseDecimalInteger(Ee.EXPECT_PLURAL_ARGUMENT_SELECTOR,Ee.INVALID_PLURAL_ARGUMENT_SELECTOR);if(E.err)return E;k=Te(y,this.clonePosition()),p=this.message.slice(y.offset,this.offset())}else break}if(c.has(p))return this.error(r==="select"?Ee.DUPLICATE_SELECT_ARGUMENT_SELECTOR:Ee.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,k);p==="other"&&(d=!0),this.bumpSpace();var T=this.clonePosition();if(!this.bumpIf("{"))return this.error(r==="select"?Ee.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:Ee.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,Te(this.clonePosition(),this.clonePosition()));var O=this.parseMessage(i+1,r,a);if(O.err)return O;var _=this.tryParseArgumentClose(T);if(_.err)return _;g.push([p,{value:O.val,location:Te(T,this.clonePosition())}]),c.add(p),this.bumpSpace(),o=this.parseIdentifierIfPossible(),p=o.value,k=o.location}return g.length===0?this.error(r==="select"?Ee.EXPECT_SELECT_ARGUMENT_SELECTOR:Ee.EXPECT_PLURAL_ARGUMENT_SELECTOR,Te(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!d?this.error(Ee.MISSING_OTHER_CLAUSE,Te(this.clonePosition(),this.clonePosition())):{val:g,err:null}},e.prototype.tryParseDecimalInteger=function(i,r){var a=1,s=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(a=-1);for(var o=!1,d=0;!this.isEOF();){var g=this.char();if(g>=48&&g<=57)o=!0,d=d*10+(g-48),this.bump();else break}var c=Te(s,this.clonePosition());return o?(d*=a,M_(d)?{val:d,err:null}:this.error(r,c)):this.error(i,c)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var i=this.position.offset;if(i>=this.message.length)throw Error("out of bound");var r=Vf(this.message,i);if(r===void 0)throw Error("Offset ".concat(i," is at invalid UTF-16 code unit boundary"));return r},e.prototype.error=function(i,r){return{val:null,err:{kind:i,message:this.message,location:r}}},e.prototype.bump=function(){if(!this.isEOF()){var i=this.char();i===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=i<65536?1:2)}},e.prototype.bumpIf=function(i){if(Eg(this.message,i,this.offset())){for(var r=0;r<i.length;r++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(i){var r=this.offset(),a=this.message.indexOf(i,r);return a>=0?(this.bumpTo(a),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(i){if(this.offset()>i)throw Error("targetOffset ".concat(i," must be greater than or equal to the current offset ").concat(this.offset()));for(i=Math.min(i,this.message.length);;){var r=this.offset();if(r===i)break;if(r>i)throw Error("targetOffset ".concat(i," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&Gf(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var i=this.char(),r=this.offset(),a=this.message.charCodeAt(r+(i>=65536?2:1));return a??null},e}();function wl(e){return e>=97&&e<=122||e>=65&&e<=90}function V_(e){return wl(e)||e===47}function H_(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function Gf(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function G_(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function Al(e){e.forEach(function(i){if(delete i.location,xf(i)||qf(i))for(var r in i.options)delete i.options[r].location,Al(i.options[r].value);else Of(i)&&Mf(i.style)||(Pf(i)||Bf(i))&&bl(i.style)?delete i.style.location:Df(i)&&Al(i.children)})}function U_(e,i){i===void 0&&(i={}),i=ie({shouldParseSkeletons:!0,requiresOtherClause:!0},i);var r=new C_(e,i).parse();if(r.err){var a=SyntaxError(Ee[r.err.kind]);throw a.location=r.err.location,a.originalMessage=r.err.message,a}return i?.captureLocation||Al(r.val),r.val}var Zn;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(Zn||(Zn={}));var St=function(e){Cn(i,e);function i(r,a,s){var o=e.call(this,r)||this;return o.code=a,o.originalMessage=s,o}return i.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},i}(Error),wg=function(e){Cn(i,e);function i(r,a,s,o){return e.call(this,'Invalid values for "'.concat(r,'": "').concat(a,'". Options are "').concat(Object.keys(s).join('", "'),'"'),Zn.INVALID_VALUE,o)||this}return i}(St),$_=function(e){Cn(i,e);function i(r,a,s){return e.call(this,'Value for "'.concat(r,'" must be of type ').concat(a),Zn.INVALID_VALUE,s)||this}return i}(St),Y_=function(e){Cn(i,e);function i(r,a){return e.call(this,'The intl string context variable "'.concat(r,'" was not provided to the string "').concat(a,'"'),Zn.MISSING_VALUE,a)||this}return i}(St),on;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(on||(on={}));function W_(e){return e.length<2?e:e.reduce(function(i,r){var a=i[i.length-1];return!a||a.type!==on.literal||r.type!==on.literal?i.push(r):a.value+=r.value,i},[])}function Uf(e){return typeof e=="function"}function ti(e,i,r,a,s,o,d){if(e.length===1&&kg(e[0]))return[{type:on.literal,value:e[0].value}];for(var g=[],c=0,p=e;c<p.length;c++){var k=p[c];if(kg(k)){g.push({type:on.literal,value:k.value});continue}if(k_(k)){typeof o=="number"&&g.push({type:on.literal,value:r.getNumberFormat(i).format(o)});continue}var y=k.value;if(!(s&&y in s))throw new Y_(y,d);var E=s[y];if(h_(k)){(!E||typeof E=="string"||typeof E=="number")&&(E=typeof E=="string"||typeof E=="number"?String(E):""),g.push({type:typeof E=="string"?on.literal:on.object,value:E});continue}if(Pf(k)){var T=typeof k.style=="string"?a.date[k.style]:bl(k.style)?k.style.parsedOptions:void 0;g.push({type:on.literal,value:r.getDateTimeFormat(i,T).format(E)});continue}if(Bf(k)){var T=typeof k.style=="string"?a.time[k.style]:bl(k.style)?k.style.parsedOptions:a.time.medium;g.push({type:on.literal,value:r.getDateTimeFormat(i,T).format(E)});continue}if(Of(k)){var T=typeof k.style=="string"?a.number[k.style]:Mf(k.style)?k.style.parsedOptions:void 0;T&&T.scale&&(E=E*(T.scale||1)),g.push({type:on.literal,value:r.getNumberFormat(i,T).format(E)});continue}if(Df(k)){var O=k.children,_=k.value,b=s[_];if(!Uf(b))throw new $_(_,"function",d);var R=ti(O,i,r,a,s,o),P=b(R.map(function(I){return I.value}));Array.isArray(P)||(P=[P]),g.push.apply(g,P.map(function(I){return{type:typeof I=="string"?on.literal:on.object,value:I}}))}if(xf(k)){var j=k.options[E]||k.options.other;if(!j)throw new wg(k.value,E,Object.keys(k.options),d);g.push.apply(g,ti(j.value,i,r,a,s));continue}if(qf(k)){var j=k.options["=".concat(E)];if(!j){if(!Intl.PluralRules)throw new St(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,Zn.MISSING_INTL_API,d);var H=r.getPluralRules(i,{type:k.pluralType}).select(E-(k.offset||0));j=k.options[H]||k.options.other}if(!j)throw new wg(k.value,E,Object.keys(k.options),d);g.push.apply(g,ti(j.value,i,r,a,s,E-(k.offset||0)));continue}}return W_(g)}function z_(e,i){return i?ie(ie(ie({},e||{}),i||{}),Object.keys(e).reduce(function(r,a){return r[a]=ie(ie({},e[a]),i[a]||{}),r},{})):e}function X_(e,i){return i?Object.keys(e).reduce(function(r,a){return r[a]=z_(e[a],i[a]),r},ie({},e)):e}function il(e){return{create:function(){return{get:function(i){return e[i]},set:function(i,r){e[i]=r}}}}}function Z_(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:$n(function(){for(var i,r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];return new((i=Intl.NumberFormat).bind.apply(i,Wn([void 0],r,!1)))},{cache:il(e.number),strategy:Yn.variadic}),getDateTimeFormat:$n(function(){for(var i,r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];return new((i=Intl.DateTimeFormat).bind.apply(i,Wn([void 0],r,!1)))},{cache:il(e.dateTime),strategy:Yn.variadic}),getPluralRules:$n(function(){for(var i,r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];return new((i=Intl.PluralRules).bind.apply(i,Wn([void 0],r,!1)))},{cache:il(e.pluralRules),strategy:Yn.variadic})}}var $f=function(){function e(i,r,a,s){r===void 0&&(r=e.defaultLocale);var o=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(c){var p=o.formatToParts(c);if(p.length===1)return p[0].value;var k=p.reduce(function(y,E){return!y.length||E.type!==on.literal||typeof y[y.length-1]!="string"?y.push(E.value):y[y.length-1]+=E.value,y},[]);return k.length<=1?k[0]||"":k},this.formatToParts=function(c){return ti(o.ast,o.locales,o.formatters,o.formats,c,void 0,o.message)},this.resolvedOptions=function(){var c;return{locale:((c=o.resolvedLocale)===null||c===void 0?void 0:c.toString())||Intl.NumberFormat.supportedLocalesOf(o.locales)[0]}},this.getAst=function(){return o.ast},this.locales=r,this.resolvedLocale=e.resolveLocale(r),typeof i=="string"){if(this.message=i,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var d=s||{};d.formatters;var g=yi(d,["formatters"]);this.ast=e.__parse(i,ie(ie({},g),{locale:this.resolvedLocale}))}else this.ast=i;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=X_(e.formats,a),this.formatters=s&&s.formatters||Z_(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(i){if(!(typeof Intl.Locale>"u")){var r=Intl.NumberFormat.supportedLocalesOf(i);return r.length>0?new Intl.Locale(r[0]):new Intl.Locale(typeof i=="string"?i:i[0])}},e.__parse=U_,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}(),Vt;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(Vt||(Vt={}));var ta=function(e){Cn(i,e);function i(r,a,s){var o=this,d=s?s instanceof Error?s:new Error(String(s)):void 0;return o=e.call(this,"[@formatjs/intl Error ".concat(r,"] ").concat(a,`
`).concat(d?`
`.concat(d.message,`
`).concat(d.stack):""))||this,o.code=r,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(o,i),o}return i}(Error),J_=function(e){Cn(i,e);function i(r,a){return e.call(this,Vt.UNSUPPORTED_FORMATTER,r,a)||this}return i}(ta),Q_=function(e){Cn(i,e);function i(r,a){return e.call(this,Vt.INVALID_CONFIG,r,a)||this}return i}(ta),Ag=function(e){Cn(i,e);function i(r,a){return e.call(this,Vt.MISSING_DATA,r,a)||this}return i}(ta),xn=function(e){Cn(i,e);function i(r,a,s){var o=e.call(this,Vt.FORMAT_ERROR,"".concat(r,`
Locale: `).concat(a,`
`),s)||this;return o.locale=a,o}return i}(ta),sl=function(e){Cn(i,e);function i(r,a,s,o){var d=e.call(this,"".concat(r,`
MessageID: `).concat(s?.id,`
Default Message: `).concat(s?.defaultMessage,`
Description: `).concat(s?.description,`
`),a,o)||this;return d.descriptor=s,d.locale=a,d}return i}(xn),ew=function(e){Cn(i,e);function i(r,a){var s=e.call(this,Vt.MISSING_TRANSLATION,'Missing message: "'.concat(r.id,'" for locale "').concat(a,'", using ').concat(r.defaultMessage?"default message (".concat(typeof r.defaultMessage=="string"?r.defaultMessage:r.defaultMessage.map(function(o){var d;return(d=o.value)!==null&&d!==void 0?d:JSON.stringify(o)}).join(),")"):"id"," as fallback."))||this;return s.descriptor=r,s}return i}(ta);function nw(e,i,r){if(r===void 0&&(r=Error),!e)throw new r(i)}function hr(e,i,r){return r===void 0&&(r={}),i.reduce(function(a,s){return s in e?a[s]=e[s]:s in r&&(a[s]=r[s]),a},{})}var tw=function(e){},rw=function(e){},Yf={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:tw,onWarn:rw};function Wf(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function Mt(e){return{create:function(){return{get:function(i){return e[i]},set:function(i,r){e[i]=r}}}}}function aw(e){e===void 0&&(e=Wf());var i=Intl.RelativeTimeFormat,r=Intl.ListFormat,a=Intl.DisplayNames,s=$n(function(){for(var g,c=[],p=0;p<arguments.length;p++)c[p]=arguments[p];return new((g=Intl.DateTimeFormat).bind.apply(g,Wn([void 0],c,!1)))},{cache:Mt(e.dateTime),strategy:Yn.variadic}),o=$n(function(){for(var g,c=[],p=0;p<arguments.length;p++)c[p]=arguments[p];return new((g=Intl.NumberFormat).bind.apply(g,Wn([void 0],c,!1)))},{cache:Mt(e.number),strategy:Yn.variadic}),d=$n(function(){for(var g,c=[],p=0;p<arguments.length;p++)c[p]=arguments[p];return new((g=Intl.PluralRules).bind.apply(g,Wn([void 0],c,!1)))},{cache:Mt(e.pluralRules),strategy:Yn.variadic});return{getDateTimeFormat:s,getNumberFormat:o,getMessageFormat:$n(function(g,c,p,k){return new $f(g,c,p,ie({formatters:{getNumberFormat:o,getDateTimeFormat:s,getPluralRules:d}},k||{}))},{cache:Mt(e.message),strategy:Yn.variadic}),getRelativeTimeFormat:$n(function(){for(var g=[],c=0;c<arguments.length;c++)g[c]=arguments[c];return new(i.bind.apply(i,Wn([void 0],g,!1)))},{cache:Mt(e.relativeTime),strategy:Yn.variadic}),getPluralRules:d,getListFormat:$n(function(){for(var g=[],c=0;c<arguments.length;c++)g[c]=arguments[c];return new(r.bind.apply(r,Wn([void 0],g,!1)))},{cache:Mt(e.list),strategy:Yn.variadic}),getDisplayNames:$n(function(){for(var g=[],c=0;c<arguments.length;c++)g[c]=arguments[c];return new(a.bind.apply(a,Wn([void 0],g,!1)))},{cache:Mt(e.displayNames),strategy:Yn.variadic})}}function Yl(e,i,r,a){var s=e&&e[i],o;if(s&&(o=s[r]),o)return o;a(new J_("No ".concat(i," format named: ").concat(r)))}function Ja(e,i){return Object.keys(e).reduce(function(r,a){return r[a]=ie({timeZone:i},e[a]),r},{})}function Rg(e,i){var r=Object.keys(ie(ie({},e),i));return r.reduce(function(a,s){return a[s]=ie(ie({},e[s]||{}),i[s]||{}),a},{})}function Sg(e,i){if(!i)return e;var r=$f.formats;return ie(ie(ie({},r),e),{date:Rg(Ja(r.date,i),Ja(e.date||{},i)),time:Rg(Ja(r.time,i),Ja(e.time||{},i))})}var Rl=function(e,i,r,a,s){var o=e.locale,d=e.formats,g=e.messages,c=e.defaultLocale,p=e.defaultFormats,k=e.fallbackOnEmptyString,y=e.onError,E=e.timeZone,T=e.defaultRichTextElements;r===void 0&&(r={id:""});var O=r.id,_=r.defaultMessage;nw(!!O,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var b=String(O),R=g&&Object.prototype.hasOwnProperty.call(g,b)&&g[b];if(Array.isArray(R)&&R.length===1&&R[0].type===xe.literal)return R[0].value;if(!a&&R&&typeof R=="string"&&!T)return R.replace(/'\{(.*?)\}'/gi,"{$1}");if(a=ie(ie({},T),a||{}),d=Sg(d,E),p=Sg(p,E),!R){if(k===!1&&R==="")return R;if((!_||o&&o.toLowerCase()!==c.toLowerCase())&&y(new ew(r,o)),_)try{var P=i.getMessageFormat(_,c,p,s);return P.format(a)}catch(j){return y(new sl('Error formatting default message for: "'.concat(b,'", rendering default message verbatim'),o,r,j)),typeof _=="string"?_:b}return b}try{var P=i.getMessageFormat(R,o,d,ie({formatters:i},s||{}));return P.format(a)}catch(j){y(new sl('Error formatting message: "'.concat(b,'", using ').concat(_?"default message":"id"," as fallback."),o,r,j))}if(_)try{var P=i.getMessageFormat(_,c,p,s);return P.format(a)}catch(j){y(new sl('Error formatting the default message for: "'.concat(b,'", rendering message verbatim'),o,r,j))}return typeof R=="string"?R:typeof _=="string"?_:b},iw=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function ra(e,i,r,a){var s=e.locale,o=e.formats,d=e.onError,g=e.timeZone;a===void 0&&(a={});var c=a.format,p=ie(ie({},g&&{timeZone:g}),c&&Yl(o,i,c,d)),k=hr(a,iw,p);return i==="time"&&!k.hour&&!k.minute&&!k.second&&!k.timeStyle&&!k.dateStyle&&(k=ie(ie({},k),{hour:"numeric",minute:"numeric"})),r(s,k)}function sw(e,i){for(var r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a];var s=r[0],o=r[1],d=o===void 0?{}:o,g=typeof s=="string"?new Date(s||0):s;try{return ra(e,"date",i,d).format(g)}catch(c){e.onError(new xn("Error formatting date.",e.locale,c))}return String(g)}function lw(e,i){for(var r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a];var s=r[0],o=r[1],d=o===void 0?{}:o,g=typeof s=="string"?new Date(s||0):s;try{return ra(e,"time",i,d).format(g)}catch(c){e.onError(new xn("Error formatting time.",e.locale,c))}return String(g)}function ow(e,i){for(var r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a];var s=r[0],o=r[1],d=r[2],g=d===void 0?{}:d,c=typeof s=="string"?new Date(s||0):s,p=typeof o=="string"?new Date(o||0):o;try{return ra(e,"dateTimeRange",i,g).formatRange(c,p)}catch(k){e.onError(new xn("Error formatting date time range.",e.locale,k))}return String(c)}function uw(e,i){for(var r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a];var s=r[0],o=r[1],d=o===void 0?{}:o,g=typeof s=="string"?new Date(s||0):s;try{return ra(e,"date",i,d).formatToParts(g)}catch(c){e.onError(new xn("Error formatting date.",e.locale,c))}return[]}function dw(e,i){for(var r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a];var s=r[0],o=r[1],d=o===void 0?{}:o,g=typeof s=="string"?new Date(s||0):s;try{return ra(e,"time",i,d).formatToParts(g)}catch(c){e.onError(new xn("Error formatting time.",e.locale,c))}return[]}var gw=["style","type","fallback","languageDisplay"];function fw(e,i,r,a){var s=e.locale,o=e.onError,d=Intl.DisplayNames;d||o(new St(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,Zn.MISSING_INTL_API));var g=hr(a,gw);try{return i(s,g).of(r)}catch(c){o(new xn("Error formatting display name.",s,c))}}var cw=["type","style"],jg=Date.now();function mw(e){return"".concat(jg,"_").concat(e,"_").concat(jg)}function pw(e,i,r,a){a===void 0&&(a={});var s=zf(e,i,r,a).reduce(function(o,d){var g=d.value;return typeof g!="string"?o.push(g):typeof o[o.length-1]=="string"?o[o.length-1]+=g:o.push(g),o},[]);return s.length===1?s[0]:s.length===0?"":s}function zf(e,i,r,a){var s=e.locale,o=e.onError;a===void 0&&(a={});var d=Intl.ListFormat;d||o(new St(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,Zn.MISSING_INTL_API));var g=hr(a,cw);try{var c={},p=r.map(function(k,y){if(typeof k=="object"){var E=mw(y);return c[E]=k,E}return String(k)});return i(s,g).formatToParts(p).map(function(k){return k.type==="literal"?k:ie(ie({},k),{value:c[k.value]||k.value})})}catch(k){o(new xn("Error formatting list.",s,k))}return r}var hw=["type"];function kw(e,i,r,a){var s=e.locale,o=e.onError;a===void 0&&(a={}),Intl.PluralRules||o(new St(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,Zn.MISSING_INTL_API));var d=hr(a,hw);try{return i(s,d).select(r)}catch(g){o(new xn("Error formatting plural.",s,g))}return"other"}var vw=["numeric","style"];function yw(e,i,r){var a=e.locale,s=e.formats,o=e.onError;r===void 0&&(r={});var d=r.format,g=!!d&&Yl(s,"relative",d,o)||{},c=hr(r,vw,g);return i(a,c)}function bw(e,i,r,a,s){s===void 0&&(s={}),a||(a="second");var o=Intl.RelativeTimeFormat;o||e.onError(new St(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,Zn.MISSING_INTL_API));try{return yw(e,i,s).format(r,a)}catch(d){e.onError(new xn("Error formatting relative time.",e.locale,d))}return String(r)}var Ew=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function Xf(e,i,r){var a=e.locale,s=e.formats,o=e.onError;r===void 0&&(r={});var d=r.format,g=d&&Yl(s,"number",d,o)||{},c=hr(r,Ew,g);return i(a,c)}function Tw(e,i,r,a){a===void 0&&(a={});try{return Xf(e,i,a).format(r)}catch(s){e.onError(new xn("Error formatting number.",e.locale,s))}return String(r)}function _w(e,i,r,a){a===void 0&&(a={});try{return Xf(e,i,a).formatToParts(r)}catch(s){e.onError(new xn("Error formatting number.",e.locale,s))}return[]}function ww(e){var i=e?e[Object.keys(e)[0]]:void 0;return typeof i=="string"}function Aw(e){e.onWarn&&e.defaultRichTextElements&&ww(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`)}function Rw(e,i){var r=aw(i),a=ie(ie({},Yf),e),s=a.locale,o=a.defaultLocale,d=a.onError;return s?!Intl.NumberFormat.supportedLocalesOf(s).length&&d?d(new Ag('Missing locale data for locale: "'.concat(s,'" in Intl.NumberFormat. Using default locale: "').concat(o,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(s).length&&d&&d(new Ag('Missing locale data for locale: "'.concat(s,'" in Intl.DateTimeFormat. Using default locale: "').concat(o,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):(d&&d(new Q_('"locale" was not configured, using "'.concat(o,'" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))),a.locale=a.defaultLocale||"en"),Aw(a),ie(ie({},a),{formatters:r,formatNumber:Tw.bind(null,a,r.getNumberFormat),formatNumberToParts:_w.bind(null,a,r.getNumberFormat),formatRelativeTime:bw.bind(null,a,r.getRelativeTimeFormat),formatDate:sw.bind(null,a,r.getDateTimeFormat),formatDateToParts:uw.bind(null,a,r.getDateTimeFormat),formatTime:lw.bind(null,a,r.getDateTimeFormat),formatDateTimeRange:ow.bind(null,a,r.getDateTimeFormat),formatTimeToParts:dw.bind(null,a,r.getDateTimeFormat),formatPlural:kw.bind(null,a,r.getPluralRules),formatMessage:Rl.bind(null,a,r),$t:Rl.bind(null,a,r),formatList:pw.bind(null,a,r.getListFormat),formatListToParts:zf.bind(null,a,r.getListFormat),formatDisplayName:fw.bind(null,a,r.getDisplayNames)})}function Sw(e,i,r){if(r===void 0&&(r=Error),!e)throw new r(i)}function jw(e){Sw(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var Nw=ie(ie({},Yf),{textComponent:A.Fragment}),Iw={key:42},Ow=function(e){return A.isValidElement(e)?A.createElement(A.Fragment,Iw,e):e},Pw=function(e){var i;return(i=A.Children.map(e,Ow))!==null&&i!==void 0?i:[]};function Bw(e){return function(i){return e(A.Children.toArray(i))}}var Ng={exports:{}},Re={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ig;function xw(){if(Ig)return Re;Ig=1;var e=typeof Symbol=="function"&&Symbol.for,i=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,a=e?Symbol.for("react.fragment"):60107,s=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,d=e?Symbol.for("react.provider"):60109,g=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,p=e?Symbol.for("react.concurrent_mode"):60111,k=e?Symbol.for("react.forward_ref"):60112,y=e?Symbol.for("react.suspense"):60113,E=e?Symbol.for("react.suspense_list"):60120,T=e?Symbol.for("react.memo"):60115,O=e?Symbol.for("react.lazy"):60116,_=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,R=e?Symbol.for("react.responder"):60118,P=e?Symbol.for("react.scope"):60119;function j(I){if(typeof I=="object"&&I!==null){var V=I.$$typeof;switch(V){case i:switch(I=I.type,I){case c:case p:case a:case o:case s:case y:return I;default:switch(I=I&&I.$$typeof,I){case g:case k:case O:case T:case d:return I;default:return V}}case r:return V}}}function H(I){return j(I)===p}return Re.AsyncMode=c,Re.ConcurrentMode=p,Re.ContextConsumer=g,Re.ContextProvider=d,Re.Element=i,Re.ForwardRef=k,Re.Fragment=a,Re.Lazy=O,Re.Memo=T,Re.Portal=r,Re.Profiler=o,Re.StrictMode=s,Re.Suspense=y,Re.isAsyncMode=function(I){return H(I)||j(I)===c},Re.isConcurrentMode=H,Re.isContextConsumer=function(I){return j(I)===g},Re.isContextProvider=function(I){return j(I)===d},Re.isElement=function(I){return typeof I=="object"&&I!==null&&I.$$typeof===i},Re.isForwardRef=function(I){return j(I)===k},Re.isFragment=function(I){return j(I)===a},Re.isLazy=function(I){return j(I)===O},Re.isMemo=function(I){return j(I)===T},Re.isPortal=function(I){return j(I)===r},Re.isProfiler=function(I){return j(I)===o},Re.isStrictMode=function(I){return j(I)===s},Re.isSuspense=function(I){return j(I)===y},Re.isValidElementType=function(I){return typeof I=="string"||typeof I=="function"||I===a||I===p||I===o||I===s||I===y||I===E||typeof I=="object"&&I!==null&&(I.$$typeof===O||I.$$typeof===T||I.$$typeof===d||I.$$typeof===g||I.$$typeof===k||I.$$typeof===b||I.$$typeof===R||I.$$typeof===P||I.$$typeof===_)},Re.typeOf=j,Re}var Og;function qw(){return Og||(Og=1,Ng.exports=xw()),Ng.exports}var ll,Pg;function Dw(){if(Pg)return ll;Pg=1;var e=qw(),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},o={};o[e.ForwardRef]=a,o[e.Memo]=s;function d(O){return e.isMemo(O)?s:o[O.$$typeof]||i}var g=Object.defineProperty,c=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,k=Object.getOwnPropertyDescriptor,y=Object.getPrototypeOf,E=Object.prototype;function T(O,_,b){if(typeof _!="string"){if(E){var R=y(_);R&&R!==E&&T(O,R,b)}var P=c(_);p&&(P=P.concat(p(_)));for(var j=d(O),H=d(_),I=0;I<P.length;++I){var V=P[I];if(!r[V]&&!(b&&b[V])&&!(H&&H[V])&&!(j&&j[V])){var x=k(_,V);try{g(O,V,x)}catch{}}}}return O}return ll=T,ll}Dw();var Wl=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=A.createContext(null)):A.createContext(null);Wl.Consumer;Wl.Provider;var Mw=Wl;function Zf(){var e=A.useContext(Mw);return jw(e),e}var Sl;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(Sl||(Sl={}));var jl;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(jl||(jl={}));function Jf(e){var i=function(r){var a=Zf(),s=r.value,o=r.children,d=yi(r,["value","children"]),g=typeof s=="string"?new Date(s||0):s,c=e==="formatDate"?a.formatDateToParts(g,d):a.formatTimeToParts(g,d);return o(c)};return i.displayName=jl[e],i}function aa(e){var i=function(r){var a=Zf(),s=r.value,o=r.children,d=yi(r,["value","children"]),g=a[e](s,d);if(typeof o=="function")return o(g);var c=a.textComponent||A.Fragment;return A.createElement(c,null,g)};return i.displayName=Sl[e],i}function Qf(e){return e&&Object.keys(e).reduce(function(i,r){var a=e[r];return i[r]=Uf(a)?Bw(a):a,i},{})}var Bg=function(e,i,r,a){for(var s=[],o=4;o<arguments.length;o++)s[o-4]=arguments[o];var d=Qf(a),g=Rl.apply(void 0,Wn([e,i,r,d],s,!1));return Array.isArray(g)?Pw(g):g},Lw=function(e,i){var r=e.defaultRichTextElements,a=yi(e,["defaultRichTextElements"]),s=Qf(r),o=Rw(ie(ie(ie({},Nw),a),{defaultRichTextElements:s}),i),d={locale:o.locale,timeZone:o.timeZone,fallbackOnEmptyString:o.fallbackOnEmptyString,formats:o.formats,defaultLocale:o.defaultLocale,defaultFormats:o.defaultFormats,messages:o.messages,onError:o.onError,defaultRichTextElements:s};return ie(ie({},o),{formatMessage:Bg.bind(null,d,o.formatters),$t:Bg.bind(null,d,o.formatters)})};aa("formatDate");aa("formatTime");aa("formatNumber");aa("formatList");aa("formatDisplayName");Jf("formatDate");Jf("formatTime");function zl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Nl={exports:{}},Fw=Nl.exports,xg;function Kw(){return xg||(xg=1,function(e,i){(function(r,a){e.exports=a()})(Fw,function(){var r,a,s=1e3,o=6e4,d=36e5,g=864e5,c=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p=31536e6,k=2628e6,y=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,E={years:p,months:k,days:g,hours:d,minutes:o,seconds:s,milliseconds:1,weeks:6048e5},T=function(V){return V instanceof H},O=function(V,x,q){return new H(V,q,x.$l)},_=function(V){return a.p(V)+"s"},b=function(V){return V<0},R=function(V){return b(V)?Math.ceil(V):Math.floor(V)},P=function(V){return Math.abs(V)},j=function(V,x){return V?b(V)?{negative:!0,format:""+P(V)+x}:{negative:!1,format:""+V+x}:{negative:!1,format:""}},H=function(){function V(q,z,Q){var Z=this;if(this.$d={},this.$l=Q,q===void 0&&(this.$ms=0,this.parseFromMilliseconds()),z)return O(q*E[_(z)],this);if(typeof q=="number")return this.$ms=q,this.parseFromMilliseconds(),this;if(typeof q=="object")return Object.keys(q).forEach(function(D){Z.$d[_(D)]=q[D]}),this.calMilliseconds(),this;if(typeof q=="string"){var J=q.match(y);if(J){var F=J.slice(2).map(function(D){return D!=null?Number(D):0});return this.$d.years=F[0],this.$d.months=F[1],this.$d.weeks=F[2],this.$d.days=F[3],this.$d.hours=F[4],this.$d.minutes=F[5],this.$d.seconds=F[6],this.calMilliseconds(),this}}return this}var x=V.prototype;return x.calMilliseconds=function(){var q=this;this.$ms=Object.keys(this.$d).reduce(function(z,Q){return z+(q.$d[Q]||0)*E[Q]},0)},x.parseFromMilliseconds=function(){var q=this.$ms;this.$d.years=R(q/p),q%=p,this.$d.months=R(q/k),q%=k,this.$d.days=R(q/g),q%=g,this.$d.hours=R(q/d),q%=d,this.$d.minutes=R(q/o),q%=o,this.$d.seconds=R(q/s),q%=s,this.$d.milliseconds=q},x.toISOString=function(){var q=j(this.$d.years,"Y"),z=j(this.$d.months,"M"),Q=+this.$d.days||0;this.$d.weeks&&(Q+=7*this.$d.weeks);var Z=j(Q,"D"),J=j(this.$d.hours,"H"),F=j(this.$d.minutes,"M"),D=this.$d.seconds||0;this.$d.milliseconds&&(D+=this.$d.milliseconds/1e3,D=Math.round(1e3*D)/1e3);var X=j(D,"S"),te=q.negative||z.negative||Z.negative||J.negative||F.negative||X.negative,W=J.format||F.format||X.format?"T":"",G=(te?"-":"")+"P"+q.format+z.format+Z.format+W+J.format+F.format+X.format;return G==="P"||G==="-P"?"P0D":G},x.toJSON=function(){return this.toISOString()},x.format=function(q){var z=q||"YYYY-MM-DDTHH:mm:ss",Q={Y:this.$d.years,YY:a.s(this.$d.years,2,"0"),YYYY:a.s(this.$d.years,4,"0"),M:this.$d.months,MM:a.s(this.$d.months,2,"0"),D:this.$d.days,DD:a.s(this.$d.days,2,"0"),H:this.$d.hours,HH:a.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:a.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:a.s(this.$d.seconds,2,"0"),SSS:a.s(this.$d.milliseconds,3,"0")};return z.replace(c,function(Z,J){return J||String(Q[Z])})},x.as=function(q){return this.$ms/E[_(q)]},x.get=function(q){var z=this.$ms,Q=_(q);return Q==="milliseconds"?z%=1e3:z=Q==="weeks"?R(z/E[Q]):this.$d[Q],z||0},x.add=function(q,z,Q){var Z;return Z=z?q*E[_(z)]:T(q)?q.$ms:O(q,this).$ms,O(this.$ms+Z*(Q?-1:1),this)},x.subtract=function(q,z){return this.add(q,z,!0)},x.locale=function(q){var z=this.clone();return z.$l=q,z},x.clone=function(){return O(this.$ms,this)},x.humanize=function(q){return r().add(this.$ms,"ms").locale(this.$l).fromNow(!q)},x.valueOf=function(){return this.asMilliseconds()},x.milliseconds=function(){return this.get("milliseconds")},x.asMilliseconds=function(){return this.as("milliseconds")},x.seconds=function(){return this.get("seconds")},x.asSeconds=function(){return this.as("seconds")},x.minutes=function(){return this.get("minutes")},x.asMinutes=function(){return this.as("minutes")},x.hours=function(){return this.get("hours")},x.asHours=function(){return this.as("hours")},x.days=function(){return this.get("days")},x.asDays=function(){return this.as("days")},x.weeks=function(){return this.get("weeks")},x.asWeeks=function(){return this.as("weeks")},x.months=function(){return this.get("months")},x.asMonths=function(){return this.as("months")},x.years=function(){return this.get("years")},x.asYears=function(){return this.as("years")},V}(),I=function(V,x,q){return V.add(x.years()*q,"y").add(x.months()*q,"M").add(x.days()*q,"d").add(x.hours()*q,"h").add(x.minutes()*q,"m").add(x.seconds()*q,"s").add(x.milliseconds()*q,"ms")};return function(V,x,q){r=q,a=q().$utils(),q.duration=function(Z,J){var F=q.locale();return O(Z,{$l:F},J)},q.isDuration=T;var z=x.prototype.add,Q=x.prototype.subtract;x.prototype.add=function(Z,J){return T(Z)?I(this,Z,1):z.bind(this)(Z,J)},x.prototype.subtract=function(Z,J){return T(Z)?I(this,Z,-1):Q.bind(this)(Z,J)}}})}(Nl)),Nl.exports}var Cw=Kw();const Vw=zl(Cw);var Il={exports:{}},Hw=Il.exports,qg;function Gw(){return qg||(qg=1,function(e,i){(function(r,a){e.exports=a()})(Hw,function(){var r="day";return function(a,s,o){var d=function(p){return p.add(4-p.isoWeekday(),r)},g=s.prototype;g.isoWeekYear=function(){return d(this).year()},g.isoWeek=function(p){if(!this.$utils().u(p))return this.add(7*(p-this.isoWeek()),r);var k,y,E,T,O=d(this),_=(k=this.isoWeekYear(),y=this.$u,E=(y?o.utc:o)().year(k).startOf("year"),T=4-E.isoWeekday(),E.isoWeekday()>4&&(T+=7),E.add(T,r));return O.diff(_,"week")+1},g.isoWeekday=function(p){return this.$utils().u(p)?this.day()||7:this.day(this.day()%7?p:p-7)};var c=g.startOf;g.startOf=function(p,k){var y=this.$utils(),E=!!y.u(k)||k;return y.p(p)==="isoweek"?E?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):c.bind(this)(p,k)}}})}(Il)),Il.exports}var Uw=Gw();const $w=zl(Uw);var Ol={exports:{}},Yw=Ol.exports,Dg;function Ww(){return Dg||(Dg=1,function(e,i){(function(r,a){e.exports=a()})(Yw,function(){var r="minute",a=/[+-]\d\d(?::?\d\d)?/g,s=/([+-]|\d\d)/g;return function(o,d,g){var c=d.prototype;g.utc=function(_){var b={date:_,utc:!0,args:arguments};return new d(b)},c.utc=function(_){var b=g(this.toDate(),{locale:this.$L,utc:!0});return _?b.add(this.utcOffset(),r):b},c.local=function(){return g(this.toDate(),{locale:this.$L,utc:!1})};var p=c.parse;c.parse=function(_){_.utc&&(this.$u=!0),this.$utils().u(_.$offset)||(this.$offset=_.$offset),p.call(this,_)};var k=c.init;c.init=function(){if(this.$u){var _=this.$d;this.$y=_.getUTCFullYear(),this.$M=_.getUTCMonth(),this.$D=_.getUTCDate(),this.$W=_.getUTCDay(),this.$H=_.getUTCHours(),this.$m=_.getUTCMinutes(),this.$s=_.getUTCSeconds(),this.$ms=_.getUTCMilliseconds()}else k.call(this)};var y=c.utcOffset;c.utcOffset=function(_,b){var R=this.$utils().u;if(R(_))return this.$u?0:R(this.$offset)?y.call(this):this.$offset;if(typeof _=="string"&&(_=function(I){I===void 0&&(I="");var V=I.match(a);if(!V)return null;var x=(""+V[0]).match(s)||["-",0,0],q=x[0],z=60*+x[1]+ +x[2];return z===0?0:q==="+"?z:-z}(_),_===null))return this;var P=Math.abs(_)<=16?60*_:_,j=this;if(b)return j.$offset=P,j.$u=_===0,j;if(_!==0){var H=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(j=this.local().add(P+H,r)).$offset=P,j.$x.$localOffset=H}else j=this.utc();return j};var E=c.format;c.format=function(_){var b=_||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return E.call(this,b)},c.valueOf=function(){var _=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*_},c.isUTC=function(){return!!this.$u},c.toISOString=function(){return this.toDate().toISOString()},c.toString=function(){return this.toDate().toUTCString()};var T=c.toDate;c.toDate=function(_){return _==="s"&&this.$offset?g(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():T.call(this)};var O=c.diff;c.diff=function(_,b,R){if(_&&this.$u===_.$u)return O.call(this,_,b,R);var P=this.local(),j=g(_).local();return O.call(P,j,b,R)}}})}(Ol)),Ol.exports}var zw=Ww();const Xw=zl(zw),Zw=Wf(),bi=e=>Lw({locale:"nb-NO",messages:e},Zw),Ei={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","DateTimeLabel.Kl":" kl. ","PeriodLabel.DateToday":"d.d.","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"};bi(Ei);var Pl={exports:{}},Jw=Pl.exports,Mg;function Qw(){return Mg||(Mg=1,function(e,i){(function(r,a){e.exports=a(cr)})(Jw,function(r){function a(d){return d&&typeof d=="object"&&"default"in d?d:{default:d}}var s=a(r),o={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(d){return d+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return s.default.locale(o,null,!0),o})}(Pl)),Pl.exports}Qw();cr.extend(Xw);cr.extend($w);cr.extend(Vw);bi(Ei);bi(Ei);var Lg={exports:{}},Vr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fg;function eA(){if(Fg)return Vr;Fg=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(a,s,o){var d=null;if(o!==void 0&&(d=""+o),s.key!==void 0&&(d=""+s.key),"key"in s){o={};for(var g in s)g!=="key"&&(o[g]=s[g])}else o=s;return s=o.ref,{$$typeof:e,type:a,key:d,ref:s!==void 0?s:null,props:o}}return Vr.Fragment=i,Vr.jsx=r,Vr.jsxs=r,Vr}var Kg;function nA(){return Kg||(Kg=1,Lg.exports=eA()),Lg.exports}nA();bi(Ei);A.createContext({});var Bl={exports:{}},tA=Bl.exports,Cg;function rA(){return Cg||(Cg=1,function(e,i){(function(r,a){e.exports=a()})(tA,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},a=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,s=/\d/,o=/\d\d/,d=/\d\d?/,g=/\d*[^-_:/,()\s\d]+/,c={},p=function(b){return(b=+b)+(b>68?1900:2e3)},k=function(b){return function(R){this[b]=+R}},y=[/[+-]\d\d:?(\d\d)?|Z/,function(b){(this.zone||(this.zone={})).offset=function(R){if(!R||R==="Z")return 0;var P=R.match(/([+-]|\d\d)/g),j=60*P[1]+(+P[2]||0);return j===0?0:P[0]==="+"?-j:j}(b)}],E=function(b){var R=c[b];return R&&(R.indexOf?R:R.s.concat(R.f))},T=function(b,R){var P,j=c.meridiem;if(j){for(var H=1;H<=24;H+=1)if(b.indexOf(j(H,0,R))>-1){P=H>12;break}}else P=b===(R?"pm":"PM");return P},O={A:[g,function(b){this.afternoon=T(b,!1)}],a:[g,function(b){this.afternoon=T(b,!0)}],Q:[s,function(b){this.month=3*(b-1)+1}],S:[s,function(b){this.milliseconds=100*+b}],SS:[o,function(b){this.milliseconds=10*+b}],SSS:[/\d{3}/,function(b){this.milliseconds=+b}],s:[d,k("seconds")],ss:[d,k("seconds")],m:[d,k("minutes")],mm:[d,k("minutes")],H:[d,k("hours")],h:[d,k("hours")],HH:[d,k("hours")],hh:[d,k("hours")],D:[d,k("day")],DD:[o,k("day")],Do:[g,function(b){var R=c.ordinal,P=b.match(/\d+/);if(this.day=P[0],R)for(var j=1;j<=31;j+=1)R(j).replace(/\[|\]/g,"")===b&&(this.day=j)}],w:[d,k("week")],ww:[o,k("week")],M:[d,k("month")],MM:[o,k("month")],MMM:[g,function(b){var R=E("months"),P=(E("monthsShort")||R.map(function(j){return j.slice(0,3)})).indexOf(b)+1;if(P<1)throw new Error;this.month=P%12||P}],MMMM:[g,function(b){var R=E("months").indexOf(b)+1;if(R<1)throw new Error;this.month=R%12||R}],Y:[/[+-]?\d+/,k("year")],YY:[o,function(b){this.year=p(b)}],YYYY:[/\d{4}/,k("year")],Z:y,ZZ:y};function _(b){var R,P;R=b,P=c&&c.formats;for(var j=(b=R.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(Q,Z,J){var F=J&&J.toUpperCase();return Z||P[J]||r[J]||P[F].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(D,X,te){return X||te.slice(1)})})).match(a),H=j.length,I=0;I<H;I+=1){var V=j[I],x=O[V],q=x&&x[0],z=x&&x[1];j[I]=z?{regex:q,parser:z}:V.replace(/^\[|\]$/g,"")}return function(Q){for(var Z={},J=0,F=0;J<H;J+=1){var D=j[J];if(typeof D=="string")F+=D.length;else{var X=D.regex,te=D.parser,W=Q.slice(F),G=X.exec(W)[0];te.call(Z,G),Q=Q.replace(G,"")}}return function(Y){var ae=Y.afternoon;if(ae!==void 0){var ne=Y.hours;ae?ne<12&&(Y.hours+=12):ne===12&&(Y.hours=0),delete Y.afternoon}}(Z),Z}}return function(b,R,P){P.p.customParseFormat=!0,b&&b.parseTwoDigitYear&&(p=b.parseTwoDigitYear);var j=R.prototype,H=j.parse;j.parse=function(I){var V=I.date,x=I.utc,q=I.args;this.$u=x;var z=q[1];if(typeof z=="string"){var Q=q[2]===!0,Z=q[3]===!0,J=Q||Z,F=q[2];Z&&(F=q[2]),c=this.$locale(),!Q&&F&&(c=P.Ls[F]),this.$d=function(W,G,Y,ae){try{if(["x","X"].indexOf(G)>-1)return new Date((G==="X"?1e3:1)*W);var ne=_(G)(W),le=ne.year,he=ne.month,mn=ne.day,Ke=ne.hours,qe=ne.minutes,Ce=ne.seconds,ve=ne.milliseconds,we=ne.zone,Ze=ne.week,Ve=new Date,Ge=mn||(le||he?1:Ve.getDate()),_n=le||Ve.getFullYear(),Me=0;le&&!he||(Me=he>0?he-1:Ve.getMonth());var Je,Qn=Ke||0,Qe=qe||0,Vn=Ce||0,et=ve||0;return we?new Date(Date.UTC(_n,Me,Ge,Qn,Qe,Vn,et+60*we.offset*1e3)):Y?new Date(Date.UTC(_n,Me,Ge,Qn,Qe,Vn,et)):(Je=new Date(_n,Me,Ge,Qn,Qe,Vn,et),Ze&&(Je=ae(Je).week(Ze).toDate()),Je)}catch{return new Date("")}}(V,z,x,P),this.init(),F&&F!==!0&&(this.$L=this.locale(F).$L),J&&V!=this.format(z)&&(this.$d=new Date("")),c={}}else if(z instanceof Array)for(var D=z.length,X=1;X<=D;X+=1){q[1]=z[X-1];var te=P.apply(this,q);if(te.isValid()){this.$d=te.$d,this.$L=te.$L,this.init();break}X===D&&(this.$d=new Date(""))}else H.call(this,I)}}})}(Bl)),Bl.exports}var aA=rA();const iA=n_(aA);cr.extend(iA);Kn(na);const sA=e=>{const i=e.aktiveNaturalytelser.reduce((a,s)=>{const o=s.type;return o in a?{...a,[o]:[...a[o],s]}:{...a,[o]:[s]}},{}),r={};return Object.entries(i).forEach(([a,s])=>{const o=s.sort((d,g)=>GT({fom:d.periode.fomDato,tom:d.periode.tomDato},{fom:g.periode.fomDato,tom:g.periode.tomDato})).reverse();r[a]=o.flatMap((d,g,c)=>{const p=c[g+1],k=d.periode.tomDato,y=p?.periode.fomDato;return k===$r?[]:[{...d,periode:{fomDato:jd(k,1),tomDato:y?jd(y,-1):$r}}]})}),r},ec=({inntektsmelding:e,alleKodeverk:i})=>{const r=mt(),a=sA(e);return L.jsx(Xn,{tittel:r.formatMessage({id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.heading"}),children:e.aktiveNaturalytelser.length===0?L.jsx("span",{children:L.jsx(je,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.ingen"})}):L.jsx(vi,{gap:"space-4",children:Object.entries(a).map(([s,o])=>L.jsxs("div",{children:[L.jsx("span",{children:i.NaturalYtelseType.find(d=>d.kode===s)?.navn}),L.jsx("ul",{children:o.map(d=>L.jsxs(U.Fragment,{children:[L.jsxs("li",{children:[L.jsx(je,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.fom"})," ",L.jsx(Wr,{dateString:d.periode.fomDato})]}),d.periode.tomDato!==$r&&L.jsxs("li",{children:[L.jsx(je,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.tom"})," ",L.jsx(Wr,{dateString:d.periode.tomDato})]}),L.jsxs("li",{children:[L.jsx(je,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.verdi"}),":"," ",L.jsx(lr,{beløp:d.beloepPerMnd.verdi})]})]},d.indexKey))})]},s))})})};ec.__docgenInfo={description:"",methods:[],displayName:"BortfalteNaturalYtelser",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const nc=({kildeSystem:e})=>{const i=mt();return L.jsx(Xn,{tittel:i.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.heading"}),children:lA(e,i)})},lA=(e,i)=>{switch(e.toUpperCase()){case"NAV_NO":return i.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.nav"});case"ALTINN":return i.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.altinn"});default:return i.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.lps"})}};nc.__docgenInfo={description:"",methods:[],displayName:"KildeSystem",props:{kildeSystem:{required:!0,tsType:{name:"string"},description:""}}};const tc=({inntektsmelding:e})=>{const i=mt();return L.jsxs(Xn,{tittel:i.formatMessage({id:"InntektsmeldingFaktaPanel.kontaktperson.heading"}),children:[L.jsxs("span",{children:[L.jsx(je,{id:"InntektsmeldingFaktaPanel.kontaktperson.navn"}),": ",e.kontaktpersonNavn]}),L.jsxs("span",{children:[L.jsx(je,{id:"InntektsmeldingFaktaPanel.kontaktperson.telefon"}),": ",e.kontaktpersonNummer]})]})};tc.__docgenInfo={description:"",methods:[],displayName:"KontaktPerson",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const rc=({inntektsmelding:e,fagsak:i,arbeidsgiverOpplysninger:r})=>{const a=`IM ${r.navn} - ${Yg(e.motattDato)}`;return L.jsx(Hl,{type:"button",onClick:()=>{Xb(i.saksnummer,e.journalpostId,e.dokumentId,a)},variant:"secondary",size:"small",icon:L.jsx(d0,{}),children:L.jsx(je,{id:"InntektsmeldingFaktaPanel.modal.trigger"})})};rc.__docgenInfo={description:"",methods:[],displayName:"LastNedPdfKnapp",props:{fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
>`},description:""}}};const ac=({inntektsmelding:e})=>{const i=mt();if(e.refusjonsperioder.length===0)return L.jsx(Xn,{tittel:i.formatMessage({id:"InntektsmeldingFaktaPanel.refusjon.heading"}),children:e.refusjonPrMnd?L.jsx(lr,{beløp:e.refusjonPrMnd}):L.jsx(je,{tagName:"span",id:"InntektsmeldingFaktaPanel.refusjon.ingen"})});const r=[...e.refusjonsperioder].sort((a,s)=>new Date(a.fom).getTime()-new Date(s.fom).getTime());return L.jsxs(Xn,{tittel:i.formatMessage({id:"InntektsmeldingFaktaPanel.refusjon.heading"}),children:[L.jsx("span",{children:"Krever refusjon"}),L.jsx(lr,{beløp:e.refusjonPrMnd??0}),L.jsx("span",{children:"Endringer i perioden:"}),L.jsx("ul",{children:r.map(a=>L.jsx("li",{children:L.jsx(je,{id:"InntektsmeldingFaktaPanel.refusjon.endring.periode",values:{kroner:L.jsx(lr,{beløp:a.refusjonsbeløp.verdi}),fom:L.jsx(Wr,{dateString:a.fom})}})},a.indexKey))})]})};ac.__docgenInfo={description:"",methods:[],displayName:"Refusjon",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const ic=({startDatoPermisjon:e,ytelse:i})=>{const r=mt();return e?L.jsxs(Xn,{tittel:r.formatMessage({id:"InntektsmeldingFaktaPanel.startDato.heading"},{ytelse:i.toLowerCase()}),children:[L.jsx("span",{children:e?L.jsx(Wr,{dateString:e}):"-"}),L.jsx("span",{children:L.jsx(je,{id:"InntektsmeldingFaktaPanel.startDato.fraArbeidsgiver"})})]}):null};ic.__docgenInfo={description:"",methods:[],displayName:"Startdato",props:{startDatoPermisjon:{required:!1,tsType:{name:"string"},description:""},ytelse:{required:!0,tsType:{name:"string"},description:""}}};const oA="_behandlingCircleIngen_x70wg_1",uA="_behandlingCircleDenne_x70wg_5",dA="_behandlingCircleAndre_x70wg_9",gA="_container_x70wg_13",fA="_ingenInntektsmeldinger_x70wg_20",Ur={behandlingCircleIngen:oA,behandlingCircleDenne:uA,behandlingCircleAndre:dA,container:gA,ingenInntektsmeldinger:fA},sc=({inntektsmelding:e,arbeidsgiverOpplysningerPerId:i,alleBehandlinger:r})=>{const{alleKodeverk:a,fagsak:s,behandling:o}=Wg(),d=mt();return L.jsxs(vi,{gap:"space-16",className:Ur.container,children:[L.jsxs(sr,{gap:"space-16",justify:"space-between",align:"start",children:[L.jsxs(Zg,{level:"3",size:"small",children:[L.jsx(je,{id:"InntektsmeldingFaktaPanel.innsendingstidspunkt"})," ",L.jsx(ui,{dateTimeString:e.innsendingstidspunkt,separator:"kl"})]}),L.jsx(rc,{fagsak:s,inntektsmelding:e,arbeidsgiverOpplysninger:i[e.arbeidsgiverIdent]})]}),L.jsxs(C1,{columns:3,gap:"space-32",children:[L.jsx(Rf,{arbeidsgiverOpplysninger:i[e.arbeidsgiverIdent],arbeidsgiverIdent:e.arbeidsgiverIdent}),L.jsx(Xn,{tittel:d.formatMessage({id:"InntektsmeldingFaktaPanel.månedsinntekt.heading"}),children:L.jsx(lr,{beløp:e.inntektPrMnd})}),L.jsx(Sf,{alleKodeverk:a,inntektsmelding:e,alleBehandlinger:r,behandling:o}),L.jsx(tc,{inntektsmelding:e}),L.jsx(ic,{ytelse:a.FagsakYtelseType.find(g=>g.kode===s.fagsakYtelseType)?.navn??"",startDatoPermisjon:e.startDatoPermisjon}),L.jsx(nc,{kildeSystem:e.kildeSystem}),L.jsx(ec,{inntektsmelding:e,alleKodeverk:a}),L.jsx(ac,{inntektsmelding:e})]})]})};sc.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingInnhold",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""}}};const cA={"InntektsmeldingFaktaPanel.ingen":"Ingen inntektsmeldinger er registrert","InntektsmeldingFaktaPanel.tabell.header.innsendt":"Innsendt","InntektsmeldingFaktaPanel.tabell.header.arbeidsgiver":"Arbeidsgiver","InntektsmeldingFaktaPanel.tabell.header.skjæringstidspunkt":"Startdato","InntektsmeldingFaktaPanel.tabell.header.månedsinntekt":"Månedsi.","InntektsmeldingFaktaPanel.tabell.header.behandling":"Behandling","InntektsmeldingFaktaPanel.tabell.cell.behandling.denne":"Denne","InntektsmeldingFaktaPanel.tabell.cell.behandling.andre":"Andre","InntektsmeldingFaktaPanel.tabell.cell.behandling.ingen":"Ingen","InntektsmeldingFaktaPanel.modal.heading":"All informasjon fra PDF’en er tilgjengelig i faktapanelet","InntektsmeldingFaktaPanel.modal.trigger":"Åpne PDF","InntektsmeldingFaktaPanel.modal.body":"PDF’en du skal åpne inneholder ikke noe annet enn det som står i faktapanelet. Du kan likevel åpne den hvis du ønsker det.","InntektsmeldingFaktaPanel.modal.button.primary":"Last ned som PDF","InntektsmeldingFaktaPanel.modal.button.secondary":"Avbryt","InntektsmeldingFaktaPanel.behandling.heading":"Behandling","InntektsmeldingFaktaPanel.behandling.bruktKunIDenne":"Brukt i denne behandlingen","InntektsmeldingFaktaPanel.behandling.ikkeBruktINoen":"Ikke brukt i noen behandlinger","InntektsmeldingFaktaPanel.behandling.bruktIAndre":"Brukt i andre behandlinger","InntektsmeldingFaktaPanel.behandling.bruktIDenneOgFlere":"Brukt i denne og andre behandlinger","InntektsmeldingFaktaPanel.behandling.opprettet":"Opprettet","InntektsmeldingFaktaPanel.behandling.avsluttet":"Avsluttet","InntektsmeldingFaktaPanel.innsendingstidspunkt":"Inntektsmelding sendt","InntektsmeldingFaktaPanel.arbeidsgiver.heading":"Arbeidsgiver","InntektsmeldingFaktaPanel.arbeidsgiver.navn":"Virksomhetsnavn","InntektsmeldingFaktaPanel.arbeidsgiver.underenhet":"Org.nr. for underenhet","InntektsmeldingFaktaPanel.kontaktperson.heading":"Kontaktperson fra arbeidsgiver","InntektsmeldingFaktaPanel.kontaktperson.navn":"Navn","InntektsmeldingFaktaPanel.kontaktperson.telefon":"Telefonnummer","InntektsmeldingFaktaPanel.månedsinntekt.heading":"Månedsinntekt","InntektsmeldingFaktaPanel.startDato.heading":"Første dag med {ytelse}","InntektsmeldingFaktaPanel.startDato.fraArbeidsgiver":"Oppgitt av arbeidsgiver","InntektsmeldingFaktaPanel.kilde.heading":"Kilde","InntektsmeldingFaktaPanel.kilde.nav":"Nav","InntektsmeldingFaktaPanel.kilde.altinn":"Altinn","InntektsmeldingFaktaPanel.kilde.lps":"Arbeidsgiver sitt lønns- og personalsystem(LPS)","InntektsmeldingFaktaPanel.refusjon.heading":"Refusjon","InntektsmeldingFaktaPanel.refusjon.ingen":"Ingen refusjon","InntektsmeldingFaktaPanel.refusjon.endring.periode":"Refusjonsbeløp på {kroner} fra {fom}","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.heading":"Naturalytelser som faller bort","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.ingen":"Ingen","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.fom":"Fra og med","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.tom":"Til og med","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.verdi":"Verdi pr måned"},Vg=Kn(cA),xl=({arbeidsgiverOpplysningerPerId:e,alleBehandlinger:i,inntektsmeldinger:r})=>{const{behandling:a}=Wg(),[s,o]=A.useState({orderBy:"innsendingstidspunkt",direction:"descending"}),d=p=>{o(s&&p===s.orderBy&&s.direction==="descending"?void 0:{orderBy:p,direction:s&&p===s.orderBy&&s.direction==="ascending"?"descending":"ascending"})},g=s?mA({inntektsmeldinger:r,arbeidsgiverOpplysningerPerId:e,sortKey:s.orderBy,behandling:a}):r,c=s?.direction==="ascending"?g:g.toReversed();return c.length===0?L.jsx(Nd,{value:Vg,children:L.jsxs(sr,{gap:"space-8",justify:"center",align:"center",className:Ur.ingenInntektsmeldinger,children:[L.jsx(di,{children:L.jsx(je,{id:"InntektsmeldingFaktaPanel.ingen"})}),L.jsx(h0,{})]})}):L.jsx(Nd,{value:Vg,children:L.jsxs(Fe,{sort:s,onSortChange:p=>d(p),children:[L.jsx(Fe.Header,{children:L.jsxs(Fe.Row,{children:[L.jsx(Fe.ColumnHeader,{sortKey:"innsendingstidspunkt",sortable:!0,children:L.jsx(je,{id:"InntektsmeldingFaktaPanel.tabell.header.innsendt"})}),L.jsx(Fe.ColumnHeader,{sortKey:"arbeidsgiverIdent",sortable:!0,children:L.jsx(je,{id:"InntektsmeldingFaktaPanel.tabell.header.arbeidsgiver"})}),L.jsx(Fe.ColumnHeader,{sortKey:"startDatoPermisjon",sortable:!0,children:L.jsx(je,{id:"InntektsmeldingFaktaPanel.tabell.header.skjæringstidspunkt"})}),L.jsx(Fe.ColumnHeader,{sortKey:"inntektPrMnd",sortable:!0,children:L.jsx(je,{id:"InntektsmeldingFaktaPanel.tabell.header.månedsinntekt"})}),L.jsx(Fe.ColumnHeader,{sortKey:"tilknyttedeBehandlingIder",sortable:!0,children:L.jsx(je,{id:"InntektsmeldingFaktaPanel.tabell.header.behandling"})}),L.jsx(Fe.HeaderCell,{})]})}),L.jsx(Fe.Body,{children:c.map(p=>L.jsxs(Fe.ExpandableRow,{expandOnRowClick:!0,contentGutter:"none",togglePlacement:"right",content:L.jsx(sc,{alleBehandlinger:i,arbeidsgiverOpplysningerPerId:e,inntektsmelding:p}),children:[L.jsx(Fe.DataCell,{children:L.jsx(ui,{dateTimeString:p.innsendingstidspunkt,separator:"kl"})}),L.jsx(Fe.DataCell,{children:e[p.arbeidsgiverIdent]?.navn??"-"}),L.jsx(Fe.DataCell,{children:p.startDatoPermisjon?L.jsx(Wr,{dateString:p.startDatoPermisjon}):"-"}),L.jsx(Fe.DataCell,{children:L.jsx(lr,{beløp:p.inntektPrMnd})}),L.jsx(Fe.DataCell,{children:L.jsx(pA,{behandling:a,inntektsmelding:p})})]},`${p.journalpostId}-${p.internArbeidsforholdId}`))})]})})},mA=({inntektsmeldinger:e,arbeidsgiverOpplysningerPerId:i,sortKey:r,behandling:a})=>r==="arbeidsgiverIdent"?e.slice().sort((s,o)=>{const d=i[s.arbeidsgiverIdent]?.navn,g=i[o.arbeidsgiverIdent]?.navn;return ol(d,g)}):r==="tilknyttedeBehandlingIder"?e.slice().sort((s,o)=>{const d=ql({behandling:a,inntektsmelding:s}),g=ql({behandling:a,inntektsmelding:o});return ol(d,g)}):e.slice().sort((s,o)=>{const d=s[r],g=o[r];return ol(d,g)}),ol=(e,i)=>e===void 0?-1:i===void 0?1:e<i?-1:e>i?1:0,pA=({behandling:e,inntektsmelding:i})=>{const r=ql({behandling:e,inntektsmelding:i});return r==="DENNE"?L.jsxs(sr,{gap:"space-4",align:"center",children:[L.jsx(Hs,{className:Ur.behandlingCircleDenne}),L.jsx(je,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.denne"})]}):r==="ANDRE"?L.jsxs(sr,{gap:"space-4",align:"center",children:[L.jsx(Hs,{className:Ur.behandlingCircleAndre}),L.jsx(je,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.andre"})]}):L.jsxs(sr,{gap:"space-4",align:"center",children:[L.jsx(Hs,{className:Ur.behandlingCircleIngen}),L.jsx(je,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.ingen"})]})},ql=({behandling:e,inntektsmelding:i})=>i.tilknyttedeBehandlingIder.includes(e.uuid)?"DENNE":i.tilknyttedeBehandlingIder.length>0?"ANDRE":"INGEN";xl.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingFaktaIndex",props:{inntektsmeldinger:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""}}};const ul={innsendingstidspunkt:"2024-08-08T00:00:00",kildeSystem:"Altinn",aktiveNaturalytelser:[],refusjonsperioder:[],innsendingsårsak:"NY",arbeidsgiverIdent:"1",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"},EA={title:"fakta/fakta-inntektsmelding",component:xl,decorators:[$b],render:e=>L.jsx(xl,{...e})},Gr={args:{alleBehandlinger:[{uuid:"UUID1",type:"BT-002",opprettet:"2024-07-13",avsluttet:"2024-08-13"},{uuid:"UUID2",type:"BT-003",opprettet:"2024-07-14",avsluttet:"2024-08-14"},{uuid:"UUID3",type:"BT-004",opprettet:"2024-07-15",avsluttet:"2024-08-15"}],arbeidsgiverOpplysningerPerId:{1:{navn:"Rema 1000"},2:{navn:"Kiwi"},3:{navn:"Meny"}},behandling:{uuid:"UUID2"},inntektsmeldinger:[{...ul,tilknyttedeBehandlingIder:["UUID1"],inntektPrMnd:10000.5,innsendingstidspunkt:"2024-07-20T00:00:00",startDatoPermisjon:"2024-10-10",refusjonPrMnd:void 0,journalpostId:"1",refusjonsperioder:[{refusjonsbeløp:{verdi:5e3},indexKey:"1",fom:"2024-01-10"},{refusjonsbeløp:{verdi:3e3},indexKey:"2",fom:"2024-01-09"}]},{...ul,tilknyttedeBehandlingIder:["UUID1","UUID2"],inntektPrMnd:2e4,innsendingstidspunkt:"2024-08-01T00:00:00",kildeSystem:"FS22",refusjonPrMnd:void 0,arbeidsgiverIdent:"2",journalpostId:"2"},{...ul,tilknyttedeBehandlingIder:[],inntektPrMnd:3e4,innsendingstidspunkt:"2024-09-10T00:00:00",innsendingsårsak:"ENDRING",kildeSystem:"NAV_NO",startDatoPermisjon:"2024-11-11",arbeidsgiverIdent:"3",journalpostId:"3",aktiveNaturalytelser:[{periode:{fomDato:"2024-01-09",tomDato:"2024-10-09"},type:dl.ELEKTRISK_KOMMUNIKASJON,beloepPerMnd:{verdi:999},indexKey:"1"},{periode:{fomDato:"2024-01-11",tomDato:"2024-10-11"},type:dl.LOSJI,beloepPerMnd:{verdi:10},indexKey:"2"}]}]}},Qa={args:{...Gr.args,inntektsmeldinger:[]}};Gr.parameters={...Gr.parameters,docs:{...Gr.parameters?.docs,source:{originalSource:`{
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
}`,...Gr.parameters?.docs?.source}}};Qa.parameters={...Qa.parameters,docs:{...Qa.parameters?.docs,source:{originalSource:`{
  args: {
    ...InntektsmeldingDefault.args,
    inntektsmeldinger: []
  }
}`,...Qa.parameters?.docs?.source}}};const TA=["InntektsmeldingDefault","IngenInntektsmeldinger"];export{Qa as IngenInntektsmeldinger,Gr as InntektsmeldingDefault,TA as __namedExportsOrder,EA as default};
