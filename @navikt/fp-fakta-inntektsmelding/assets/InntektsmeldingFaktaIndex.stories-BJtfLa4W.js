import{g as nf,r as A,u as mt,_ as Id,s as jd,c as tf,a as Fe,R as Q,b as t0,d as fr,T as r0,S as Wr,e as rf,f as af,h as a0,o as sf,P as i0,i as xn,j as H,k as Ml,l as $r,m as Wa,n as Nd,p as lf,q as Od,w as s0}from"./iframe-Z7hbG68s.js";import{r as l0}from"./index-Bv25UrKY.js";var of=l0();const Pd=nf(of);function o0(e,i){var r=e.values,a=Id(e,["values"]),s=i.values,o=Id(i,["values"]);return jd(s,r)&&jd(a,o)}function uf(e){var i=mt(),r=i.formatMessage,a=i.textComponent,s=a===void 0?A.Fragment:a,o=e.id,d=e.description,g=e.defaultMessage,c=e.values,m=e.children,h=e.tagName,v=h===void 0?s:h,_=e.ignoreTag,b={id:o,description:d,defaultMessage:g},O=r(b,c,{ignoreTag:_});return typeof m=="function"?m(Array.isArray(O)?O:[O]):v?A.createElement(v,null,O):A.createElement(A.Fragment,null,O)}uf.displayName="FormattedMessage";var xe=A.memo(uf,o0);xe.displayName="MemoizedFormattedMessage";var ol=(e=>(e.ELEKTRISK_KOMMUNIKASJON="ELEKTRISK_KOMMUNIKASJON",e.LOSJI="LOSJI",e))(ol||{});const u0=(e,i,r)=>`/fpsak/api/dokument/hent-dokument?saksnummer=${e}&journalpostId=${i}&dokumentId=${r}`,d0=(e,i,r,a)=>{const s=u0(e,i,r),o=`${i}-${r}`;a&&g0(s,o,a)},g0=(e,i,r)=>{const a=window.open(e,i);a&&setTimeout(()=>{a.document.title=r},1e3)},cr=e=>tf({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var f0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const ul=A.forwardRef((e,i)=>{var{className:r,size:a="medium",as:s="p",spacing:o,truncate:d,weight:g="regular",align:c,visuallyHidden:m,textColor:h}=e,v=f0(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:_}=Fe();return Q.createElement(s,Object.assign({},v,{ref:i,className:_(r,"navds-body-long",`navds-body-long--${a}`,cr({spacing:o,truncate:d,weight:g,align:c,visuallyHidden:m,textColor:h}))}))});var c0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const ui=A.forwardRef((e,i)=>{var{className:r,size:a="medium",as:s="p",spacing:o,truncate:d,weight:g="regular",align:c,visuallyHidden:m,textColor:h}=e,v=c0(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:_}=Fe();return Q.createElement(s,Object.assign({},v,{ref:i,className:_(r,"navds-body-short",`navds-body-short--${a}`,cr({spacing:o,truncate:d,weight:g,align:c,visuallyHidden:m,textColor:h}))}))});var m0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const p0=A.forwardRef((e,i)=>{var{className:r,size:a="medium",spacing:s,uppercase:o,as:d="p",truncate:g,weight:c="regular",align:m,visuallyHidden:h,textColor:v}=e,_=m0(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:b}=Fe();return Q.createElement(d,Object.assign({},_,{ref:i,className:b(r,"navds-detail",cr({spacing:s,truncate:g,weight:c,align:m,visuallyHidden:h,textColor:v,uppercase:o}),{"navds-detail--small":a==="small"})}))});var h0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const k0=A.forwardRef((e,i)=>{var{children:r,className:a,size:s,spacing:o,as:d="p",showIcon:g=!1}=e,c=h0(e,["children","className","size","spacing","as","showIcon"]);const{cn:m}=Fe();return Q.createElement(d,Object.assign({},c,{ref:i,className:m("navds-error-message","navds-label",a,cr({spacing:o}),{"navds-label--small":s==="small","navds-error-message--show-icon":g})}),g&&Q.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},Q.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),r)});var v0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const df=A.forwardRef((e,i)=>{var{level:r="1",size:a,className:s,as:o,spacing:d,align:g,visuallyHidden:c,textColor:m}=e,h=v0(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:v}=Fe(),_=o??`h${r}`;return Q.createElement(_,Object.assign({},h,{ref:i,className:v(s,"navds-heading",`navds-heading--${a}`,cr({spacing:d,align:g,visuallyHidden:c,textColor:m}))}))});var y0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};A.forwardRef((e,i)=>{var{className:r,spacing:a,as:s="p"}=e,o=y0(e,["className","spacing","as"]);const{cn:d}=Fe();return Q.createElement(s,Object.assign({},o,{ref:i,className:d(r,"navds-ingress",{"navds-typo--spacing":!!a})}))});var b0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const Ll=A.forwardRef((e,i)=>{var{className:r,size:a="medium",as:s="label",spacing:o,visuallyHidden:d,textColor:g}=e,c=b0(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:m}=Fe();return Q.createElement(s,Object.assign({},c,{ref:i,className:m(r,"navds-label",cr({spacing:o,visuallyHidden:d,textColor:g}),{"navds-label--small":a==="small"})}))});function zr(e,i){const r=Object.entries(e).filter(([a])=>!i.includes(a));return Object.fromEntries(r)}let Bd=0;function E0(e){const[i,r]=A.useState(e),a=e||i;return A.useEffect(()=>{i==null&&(Bd+=1,r(`aksel-id-${Bd}`))},[i]),a}const xd=Q.useId;function di(e){var i;if(xd!==void 0){const r=xd();return e??r.replace(/(:)/g,"")}return(i=E0(e))!==null&&i!==void 0?i:""}function qd(e,i=[]){const r=A.useRef(e);return A.useEffect(()=>{r.current=e}),A.useCallback((...a)=>{var s;return(s=r.current)===null||s===void 0?void 0:s.call(r,...a)},i)}function gf({value:e,defaultValue:i,onChange:r}){const a=qd(r),[s,o]=A.useState(i),d=e!==void 0,g=d?e:s,c=qd(m=>{const v=typeof m=="function"?m(g):m;d||o(v),a(v)},[d,a,g]);return[g,c]}let Dd=0;function T0(e){const[i,r]=A.useState(e),a=e||i;return A.useEffect(()=>{i==null&&(Dd+=1,r(`aksel-icon-${Dd}`))},[i]),a}const Md=Q.useId;function pt(e){var i;return Md!==void 0?Md().replace(/(:)/g,""):(i=T0(e))!==null&&i!==void 0?i:""}var _0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const w0=A.forwardRef((e,i)=>{var{title:r,titleId:a}=e,s=_0(e,["title","titleId"]);let o=pt();return o=r?a||"title-"+o:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},s),r?A.createElement("title",{id:o},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13.672 3.825a.75.75 0 0 1 .791.085l7 5.5a.75.75 0 0 1 0 1.18l-7 5.5a.75.75 0 0 1-1.213-.59v-2.724a9.1 9.1 0 0 0-2.63.565c-2.284.87-3.759 2.562-4.671 4.077a12.4 12.4 0 0 0-.957 1.965 10 10 0 0 0-.263.792l-.001.007A.75.75 0 0 1 3.25 20c0-1.654.322-3.941 1.224-6.123.903-2.184 2.413-4.32 4.823-5.558 1.133-.581 2.445-.954 3.953-1.046V4.5a.75.75 0 0 1 .422-.675M5.505 15.412c1.038-1.344 2.519-2.688 4.582-3.473 1.136-.432 2.435-.689 3.913-.689a.75.75 0 0 1 .75.75v1.957L19.786 10 14.75 6.043V8a.75.75 0 0 1-.75.75c-1.606 0-2.927.344-4.018.904-1.996 1.025-3.306 2.824-4.121 4.796q-.197.479-.356.962",clipRule:"evenodd"}))});var A0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const R0=A.forwardRef((e,i)=>{var{title:r,titleId:a}=e,s=A0(e,["title","titleId"]);let o=pt();return o=r?a||"title-"+o:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},s),r?A.createElement("title",{id:o},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.47 21.03a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22V9.5a.75.75 0 0 0-1.5 0v9.19l-2.22-2.22a.75.75 0 1 0-1.06 1.06zM4.03 7.53l2.22-2.22v9.19a.75.75 0 0 0 1.5 0V5.31l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06",clipRule:"evenodd"}))});var S0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const I0=A.forwardRef((e,i)=>{var{title:r,titleId:a}=e,s=S0(e,["title","titleId"]);let o=pt();return o=r?a||"title-"+o:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},s),r?A.createElement("title",{id:o},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var j0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const Ks=A.forwardRef((e,i)=>{var{title:r,titleId:a}=e,s=j0(e,["title","titleId"]);let o=pt();return o=r?a||"title-"+o:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},s),r?A.createElement("title",{id:o},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.5 12C1.5 6.201 6.201 1.5 12 1.5S22.5 6.201 22.5 12 17.799 22.5 12 22.5 1.5 17.799 1.5 12",clipRule:"evenodd"}))});var N0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const O0=A.forwardRef((e,i)=>{var{title:r,titleId:a}=e,s=N0(e,["title","titleId"]);let o=pt();return o=r?a||"title-"+o:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},s),r?A.createElement("title",{id:o},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.1 2.05a.75.75 0 1 0-1.2.9l.98 1.306a.25.25 0 0 1-.024.327l-.773.773a1.75 1.75 0 0 0-.163 2.288l.98 1.306a.75.75 0 0 0 1.2-.9l-.98-1.306a.25.25 0 0 1 .024-.327l.773-.773a1.75 1.75 0 0 0 .163-2.288zm1.75 5.007a.75.75 0 0 1 .83-.66c1.33.152 2.506.417 3.372.776.431.178.826.396 1.125.666.298.269.573.659.573 1.161q0 .404-.032.8.224-.065.446-.092c.556-.069 1.177.037 1.634.494.553.552.592 1.332.43 1.98-.166.665-.57 1.341-1.137 1.91-.568.567-1.244.97-1.909 1.136q-.241.06-.497.078.401.165.733.358c.657.38 1.332.977 1.332 1.836 0 .695-.45 1.219-.933 1.576-.498.369-1.172.669-1.936.907-1.539.481-3.618.767-5.881.767s-4.342-.286-5.88-.767c-.765-.238-1.439-.538-1.937-.907-.484-.357-.933-.881-.933-1.576 0-.859.675-1.457 1.332-1.836.476-.276 1.068-.512 1.739-.709C5.028 13.38 4.25 11.272 4.25 9c0-.467.238-.838.51-1.102.269-.262.624-.474 1.007-.647.771-.35 1.817-.614 3.004-.784a.75.75 0 0 1 .211 1.485c-1.112.159-2.004.397-2.596.665-.299.135-.482.26-.58.356L5.779 9c.06.066.194.178.462.314.333.168.795.332 1.374.474 1.155.284 2.688.462 4.385.462s3.23-.178 4.385-.462c.579-.142 1.04-.306 1.374-.474.268-.136.402-.248.462-.314l-.049-.048c-.123-.11-.345-.25-.693-.393-.69-.286-1.716-.529-2.969-.672a.75.75 0 0 1-.66-.83m4.623 6.754a9.3 9.3 0 0 0 .925-2.204c.355-.251.693-.379.95-.41.26-.033.36.036.39.066.033.033.129.18.035.555-.09.36-.334.804-.742 1.212-.409.409-.854.653-1.213.743a1.1 1.1 0 0 1-.345.038m-.422-2.983c-.387.16-.829.299-1.308.417-1.296.319-2.953.505-4.743.505s-3.447-.186-4.743-.505a9 9 0 0 1-1.308-.417c.707 3.173 3.21 5.422 6.051 5.422 2.84 0 5.344-2.25 6.051-5.422M12 17.75c1.665 0 3.186-.582 4.43-1.565.976.214 1.736.487 2.237.777.565.326.583.538.583.538 0 .003 0 .031-.04.093-.044.068-.13.163-.284.277-.311.23-.81.468-1.493.682-1.357.424-3.278.698-5.433.698s-4.076-.274-5.433-.698c-.683-.214-1.181-.452-1.493-.682a1.2 1.2 0 0 1-.284-.277c-.04-.062-.04-.09-.04-.093 0 0 .018-.212.583-.538.501-.29 1.262-.563 2.236-.777 1.245.983 2.766 1.565 4.431 1.565",clipRule:"evenodd"}))});var P0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const ff=A.forwardRef((e,i)=>{var{title:r,titleId:a}=e,s=P0(e,["title","titleId"]);let o=pt();return o=r?a||"title-"+o:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},s),r?A.createElement("title",{id:o},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10.5 3.25a7.25 7.25 0 1 0 4.569 12.88l5.411 5.41a.75.75 0 1 0 1.06-1.06l-5.41-5.411A7.25 7.25 0 0 0 10.5 3.25M4.75 10.5a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0",clipRule:"evenodd"}))});var B0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const x0=A.forwardRef((e,i)=>{var{title:r,titleId:a}=e,s=B0(e,["title","titleId"]);let o=pt();return o=r?a||"title-"+o:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},s),r?A.createElement("title",{id:o},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 18.53a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V6a.75.75 0 0 1 1.5 0v10.19l2.22-2.22a.75.75 0 1 1 1.06 1.06zM2.75 6.25a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM2 17a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 2 17",clipRule:"evenodd"}))});var q0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const D0=A.forwardRef((e,i)=>{var{title:r,titleId:a}=e,s=q0(e,["title","titleId"]);let o=pt();return o=r?a||"title-"+o:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},s),r?A.createElement("title",{id:o},r):null,A.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 5.47a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 1 0 1.06 1.06l2.22-2.22V18a.75.75 0 0 0 1.5 0V7.81l2.22 2.22a.75.75 0 1 0 1.06-1.06zM2.75 17.75a.75.75 0 0 1 0-1.5h9.5a.75.75 0 0 1 0 1.5zm0-5a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5zM2 7c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5A.75.75 0 0 0 2 7",clipRule:"evenodd"}))});var M0=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const Ld=A.forwardRef((e,i)=>{var{title:r,titleId:a}=e,s=M0(e,["title","titleId"]);let o=pt();return o=r?a||"title-"+o:void 0,A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},s),r?A.createElement("title",{id:o},r):null,A.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});function Fl(e,i,{checkForDefaultPrevented:r=!0}={}){return function(s){if(e==null||e(s),r===!1||!s.defaultPrevented)return i==null?void 0:i(s)}}const[cR,L0]=t0({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"});function Vs(e){return(i={})=>{const r=i.width?String(i.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}function qr(e){return(i,r)=>{const a=r!=null&&r.context?String(r.context):"standalone";let s;if(a==="formatting"&&e.formattingValues){const d=e.defaultFormattingWidth||e.defaultWidth,g=r!=null&&r.width?String(r.width):d;s=e.formattingValues[g]||e.formattingValues[d]}else{const d=e.defaultWidth,g=r!=null&&r.width?String(r.width):e.defaultWidth;s=e.values[g]||e.values[d]}const o=e.argumentCallback?e.argumentCallback(i):i;return s[o]}}function Dr(e){return(i,r={})=>{const a=r.width,s=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],o=i.match(s);if(!o)return null;const d=o[0],g=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(g)?C0(g,v=>v.test(d)):F0(g,v=>v.test(d));let m;m=e.valueCallback?e.valueCallback(c):c,m=r.valueCallback?r.valueCallback(m):m;const h=i.slice(d.length);return{value:m,rest:h}}}function F0(e,i){for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&i(e[r]))return r}function C0(e,i){for(let r=0;r<e.length;r++)if(i(e[r]))return r}function K0(e){return(i,r={})=>{const a=i.match(e.matchPattern);if(!a)return null;const s=a[0],o=i.match(e.parsePattern);if(!o)return null;let d=e.valueCallback?e.valueCallback(o[0]):o[0];d=r.valueCallback?r.valueCallback(d):d;const g=i.slice(s.length);return{value:d,rest:g}}}const V0={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},H0=(e,i,r)=>{let a;const s=V0[e];return typeof s=="string"?a=s:i===1?a=s.one:a=s.other.replace("{{count}}",String(i)),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"om "+a:a+" siden":a},G0={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},$0={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},U0={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Y0={date:Vs({formats:G0,defaultWidth:"full"}),time:Vs({formats:$0,defaultWidth:"full"}),dateTime:Vs({formats:U0,defaultWidth:"full"})},W0={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},z0=(e,i,r,a)=>W0[e],X0={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},J0={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},Z0={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},Q0={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},eE={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},nE=(e,i)=>Number(e)+".",tE={ordinalNumber:nE,era:qr({values:X0,defaultWidth:"wide"}),quarter:qr({values:J0,defaultWidth:"wide",argumentCallback:e=>e-1}),month:qr({values:Z0,defaultWidth:"wide"}),day:qr({values:Q0,defaultWidth:"wide"}),dayPeriod:qr({values:eE,defaultWidth:"wide"})},rE=/^(\d+)\.?/i,aE=/\d+/i,iE={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},sE={any:[/^f/i,/^e/i]},lE={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},oE={any:[/1/i,/2/i,/3/i,/4/i]},uE={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},dE={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},gE={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},fE={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},cE={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},mE={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},pE={ordinalNumber:K0({matchPattern:rE,parsePattern:aE,valueCallback:e=>parseInt(e,10)}),era:Dr({matchPatterns:iE,defaultMatchWidth:"wide",parsePatterns:sE,defaultParseWidth:"any"}),quarter:Dr({matchPatterns:lE,defaultMatchWidth:"wide",parsePatterns:oE,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Dr({matchPatterns:uE,defaultMatchWidth:"wide",parsePatterns:dE,defaultParseWidth:"any"}),day:Dr({matchPatterns:gE,defaultMatchWidth:"wide",parsePatterns:fE,defaultParseWidth:"any"}),dayPeriod:Dr({matchPatterns:cE,defaultMatchWidth:"any",parsePatterns:mE,defaultParseWidth:"any"})},hE={code:"nb",formatDistance:H0,formatLong:Y0,formatRelative:z0,localize:tE,match:pE,options:{weekStartsOn:1,firstWeekContainsDate:4}},kE={global:{dateLocale:hE,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},vE=A.createContext({locale:kE}),cf=()=>A.useContext(vE);var yE=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const bE=A.forwardRef((e,i)=>{var r,a,s,{rootElement:o,asChild:d}=e,g=yE(e,["rootElement","asChild"]);const c=fr(!1),m=(r=cf())===null||r===void 0?void 0:r.rootElement,h=(a=o??m)!==null&&a!==void 0?a:(s=globalThis==null?void 0:globalThis.document)===null||s===void 0?void 0:s.body,v=d?Wr:"div";return c?h?Pd.createPortal(Q.createElement(r0,{theme:c.theme,asChild:!0,hasBackground:!1},Q.createElement(v,Object.assign({ref:i,"data-aksel-portal":""},g))),h):null:h?Pd.createPortal(Q.createElement(v,Object.assign({ref:i,"data-aksel-portal":""},g)),h):null}),or=Math.min,Ft=Math.max,ri=Math.round,za=Math.floor,zn=e=>({x:e,y:e}),EE={left:"right",right:"left",bottom:"top",top:"bottom"},TE={start:"end",end:"start"};function dl(e,i,r){return Ft(e,or(i,r))}function Xr(e,i){return typeof e=="function"?e(i):e}function Ct(e){return e.split("-")[0]}function Jr(e){return e.split("-")[1]}function mf(e){return e==="x"?"y":"x"}function Cl(e){return e==="y"?"height":"width"}function ur(e){return["top","bottom"].includes(Ct(e))?"y":"x"}function Kl(e){return mf(ur(e))}function _E(e,i,r){r===void 0&&(r=!1);const a=Jr(e),s=Kl(e),o=Cl(s);let d=s==="x"?a===(r?"end":"start")?"right":"left":a==="start"?"bottom":"top";return i.reference[o]>i.floating[o]&&(d=ai(d)),[d,ai(d)]}function wE(e){const i=ai(e);return[gl(e),i,gl(i)]}function gl(e){return e.replace(/start|end/g,i=>TE[i])}function AE(e,i,r){const a=["left","right"],s=["right","left"],o=["top","bottom"],d=["bottom","top"];switch(e){case"top":case"bottom":return r?i?s:a:i?a:s;case"left":case"right":return i?o:d;default:return[]}}function RE(e,i,r,a){const s=Jr(e);let o=AE(Ct(e),r==="start",a);return s&&(o=o.map(d=>d+"-"+s),i&&(o=o.concat(o.map(gl)))),o}function ai(e){return e.replace(/left|right|bottom|top/g,i=>EE[i])}function SE(e){return{top:0,right:0,bottom:0,left:0,...e}}function pf(e){return typeof e!="number"?SE(e):{top:e,right:e,bottom:e,left:e}}function ii(e){const{x:i,y:r,width:a,height:s}=e;return{width:a,height:s,top:r,left:i,right:i+a,bottom:r+s,x:i,y:r}}function Fd(e,i,r){let{reference:a,floating:s}=e;const o=ur(i),d=Kl(i),g=Cl(d),c=Ct(i),m=o==="y",h=a.x+a.width/2-s.width/2,v=a.y+a.height/2-s.height/2,_=a[g]/2-s[g]/2;let b;switch(c){case"top":b={x:h,y:a.y-s.height};break;case"bottom":b={x:h,y:a.y+a.height};break;case"right":b={x:a.x+a.width,y:v};break;case"left":b={x:a.x-s.width,y:v};break;default:b={x:a.x,y:a.y}}switch(Jr(i)){case"start":b[d]-=_*(r&&m?-1:1);break;case"end":b[d]+=_*(r&&m?-1:1);break}return b}const IE=async(e,i,r)=>{const{placement:a="bottom",strategy:s="absolute",middleware:o=[],platform:d}=r,g=o.filter(Boolean),c=await(d.isRTL==null?void 0:d.isRTL(i));let m=await d.getElementRects({reference:e,floating:i,strategy:s}),{x:h,y:v}=Fd(m,a,c),_=a,b={},O=0;for(let T=0;T<g.length;T++){const{name:E,fn:R}=g[T],{x:D,y:S,data:z,reset:j}=await R({x:h,y:v,initialPlacement:a,placement:_,strategy:s,middlewareData:b,rects:m,platform:d,elements:{reference:e,floating:i}});h=D??h,v=S??v,b={...b,[E]:{...b[E],...z}},j&&O<=50&&(O++,typeof j=="object"&&(j.placement&&(_=j.placement),j.rects&&(m=j.rects===!0?await d.getElementRects({reference:e,floating:i,strategy:s}):j.rects),{x:h,y:v}=Fd(m,_,c)),T=-1)}return{x:h,y:v,placement:_,strategy:s,middlewareData:b}};async function hf(e,i){var r;i===void 0&&(i={});const{x:a,y:s,platform:o,rects:d,elements:g,strategy:c}=e,{boundary:m="clippingAncestors",rootBoundary:h="viewport",elementContext:v="floating",altBoundary:_=!1,padding:b=0}=Xr(i,e),O=pf(b),E=g[_?v==="floating"?"reference":"floating":v],R=ii(await o.getClippingRect({element:(r=await(o.isElement==null?void 0:o.isElement(E)))==null||r?E:E.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(g.floating)),boundary:m,rootBoundary:h,strategy:c})),D=v==="floating"?{x:a,y:s,width:d.floating.width,height:d.floating.height}:d.reference,S=await(o.getOffsetParent==null?void 0:o.getOffsetParent(g.floating)),z=await(o.isElement==null?void 0:o.isElement(S))?await(o.getScale==null?void 0:o.getScale(S))||{x:1,y:1}:{x:1,y:1},j=ii(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:g,rect:D,offsetParent:S,strategy:c}):D);return{top:(R.top-j.top+O.top)/z.y,bottom:(j.bottom-R.bottom+O.bottom)/z.y,left:(R.left-j.left+O.left)/z.x,right:(j.right-R.right+O.right)/z.x}}const jE=e=>({name:"arrow",options:e,async fn(i){const{x:r,y:a,placement:s,rects:o,platform:d,elements:g,middlewareData:c}=i,{element:m,padding:h=0}=Xr(e,i)||{};if(m==null)return{};const v=pf(h),_={x:r,y:a},b=Kl(s),O=Cl(b),T=await d.getDimensions(m),E=b==="y",R=E?"top":"left",D=E?"bottom":"right",S=E?"clientHeight":"clientWidth",z=o.reference[O]+o.reference[b]-_[b]-o.floating[O],j=_[b]-o.reference[b],$=await(d.getOffsetParent==null?void 0:d.getOffsetParent(m));let M=$?$[S]:0;(!M||!await(d.isElement==null?void 0:d.isElement($)))&&(M=g.floating[S]||o.floating[O]);const K=z/2-j/2,ee=M/2-T[O]/2-1,ne=or(v[R],ee),X=or(v[D],ee),te=ne,G=M-T[O]-X,P=M/2-T[O]/2+K,x=dl(te,P,G),F=!c.arrow&&Jr(s)!=null&&P!==x&&o.reference[O]/2-(P<te?ne:X)-T[O]/2<0,C=F?P<te?P-te:P-G:0;return{[b]:_[b]+C,data:{[b]:x,centerOffset:P-x-C,...F&&{alignmentOffset:C}},reset:F}}}),NE=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(i){var r,a;const{placement:s,middlewareData:o,rects:d,initialPlacement:g,platform:c,elements:m}=i,{mainAxis:h=!0,crossAxis:v=!0,fallbackPlacements:_,fallbackStrategy:b="bestFit",fallbackAxisSideDirection:O="none",flipAlignment:T=!0,...E}=Xr(e,i);if((r=o.arrow)!=null&&r.alignmentOffset)return{};const R=Ct(s),D=ur(g),S=Ct(g)===g,z=await(c.isRTL==null?void 0:c.isRTL(m.floating)),j=_||(S||!T?[ai(g)]:wE(g)),$=O!=="none";!_&&$&&j.push(...RE(g,T,O,z));const M=[g,...j],K=await hf(i,E),ee=[];let ne=((a=o.flip)==null?void 0:a.overflows)||[];if(h&&ee.push(K[R]),v){const P=_E(s,d,z);ee.push(K[P[0]],K[P[1]])}if(ne=[...ne,{placement:s,overflows:ee}],!ee.every(P=>P<=0)){var X,te;const P=(((X=o.flip)==null?void 0:X.index)||0)+1,x=M[P];if(x)return{data:{index:P,overflows:ne},reset:{placement:x}};let F=(te=ne.filter(C=>C.overflows[0]<=0).sort((C,B)=>C.overflows[1]-B.overflows[1])[0])==null?void 0:te.placement;if(!F)switch(b){case"bestFit":{var G;const C=(G=ne.filter(B=>{if($){const q=ur(B.placement);return q===D||q==="y"}return!0}).map(B=>[B.placement,B.overflows.filter(q=>q>0).reduce((q,U)=>q+U,0)]).sort((B,q)=>B[1]-q[1])[0])==null?void 0:G[0];C&&(F=C);break}case"initialPlacement":F=g;break}if(s!==F)return{reset:{placement:F}}}return{}}}};async function OE(e,i){const{placement:r,platform:a,elements:s}=e,o=await(a.isRTL==null?void 0:a.isRTL(s.floating)),d=Ct(r),g=Jr(r),c=ur(r)==="y",m=["left","top"].includes(d)?-1:1,h=o&&c?-1:1,v=Xr(i,e);let{mainAxis:_,crossAxis:b,alignmentAxis:O}=typeof v=="number"?{mainAxis:v,crossAxis:0,alignmentAxis:null}:{mainAxis:v.mainAxis||0,crossAxis:v.crossAxis||0,alignmentAxis:v.alignmentAxis};return g&&typeof O=="number"&&(b=g==="end"?O*-1:O),c?{x:b*h,y:_*m}:{x:_*m,y:b*h}}const PE=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(i){var r,a;const{x:s,y:o,placement:d,middlewareData:g}=i,c=await OE(i,e);return d===((r=g.offset)==null?void 0:r.placement)&&(a=g.arrow)!=null&&a.alignmentOffset?{}:{x:s+c.x,y:o+c.y,data:{...c,placement:d}}}}},BE=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(i){const{x:r,y:a,placement:s}=i,{mainAxis:o=!0,crossAxis:d=!1,limiter:g={fn:E=>{let{x:R,y:D}=E;return{x:R,y:D}}},...c}=Xr(e,i),m={x:r,y:a},h=await hf(i,c),v=ur(Ct(s)),_=mf(v);let b=m[_],O=m[v];if(o){const E=_==="y"?"top":"left",R=_==="y"?"bottom":"right",D=b+h[E],S=b-h[R];b=dl(D,b,S)}if(d){const E=v==="y"?"top":"left",R=v==="y"?"bottom":"right",D=O+h[E],S=O-h[R];O=dl(D,O,S)}const T=g.fn({...i,[_]:b,[v]:O});return{...T,data:{x:T.x-r,y:T.y-a,enabled:{[_]:o,[v]:d}}}}}};function gi(){return typeof window<"u"}function mr(e){return kf(e)?(e.nodeName||"").toLowerCase():"#document"}function pn(e){var i;return(e==null||(i=e.ownerDocument)==null?void 0:i.defaultView)||window}function Zn(e){var i;return(i=(kf(e)?e.ownerDocument:e.document)||window.document)==null?void 0:i.documentElement}function kf(e){return gi()?e instanceof Node||e instanceof pn(e).Node:!1}function Le(e){return gi()?e instanceof Element||e instanceof pn(e).Element:!1}function _n(e){return gi()?e instanceof HTMLElement||e instanceof pn(e).HTMLElement:!1}function si(e){return!gi()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof pn(e).ShadowRoot}function Zr(e){const{overflow:i,overflowX:r,overflowY:a,display:s}=Bn(e);return/auto|scroll|overlay|hidden|clip/.test(i+a+r)&&!["inline","contents"].includes(s)}function xE(e){return["table","td","th"].includes(mr(e))}function fi(e){return[":popover-open",":modal"].some(i=>{try{return e.matches(i)}catch{return!1}})}function Vl(e){const i=ci(),r=Le(e)?Bn(e):e;return["transform","translate","scale","rotate","perspective"].some(a=>r[a]?r[a]!=="none":!1)||(r.containerType?r.containerType!=="normal":!1)||!i&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!i&&(r.filter?r.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(a=>(r.willChange||"").includes(a))||["paint","layout","strict","content"].some(a=>(r.contain||"").includes(a))}function qE(e){let i=ct(e);for(;_n(i)&&!ft(i);){if(Vl(i))return i;if(fi(i))return null;i=ct(i)}return null}function ci(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ft(e){return["html","body","#document"].includes(mr(e))}function Bn(e){return pn(e).getComputedStyle(e)}function mi(e){return Le(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function ct(e){if(mr(e)==="html")return e;const i=e.assignedSlot||e.parentNode||si(e)&&e.host||Zn(e);return si(i)?i.host:i}function vf(e){const i=ct(e);return ft(i)?e.ownerDocument?e.ownerDocument.body:e.body:_n(i)&&Zr(i)?i:vf(i)}function At(e,i,r){var a;i===void 0&&(i=[]),r===void 0&&(r=!0);const s=vf(e),o=s===((a=e.ownerDocument)==null?void 0:a.body),d=pn(s);if(o){const g=fl(d);return i.concat(d,d.visualViewport||[],Zr(s)?s:[],g&&r?At(g):[])}return i.concat(s,At(s,[],r))}function fl(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function yf(e){const i=Bn(e);let r=parseFloat(i.width)||0,a=parseFloat(i.height)||0;const s=_n(e),o=s?e.offsetWidth:r,d=s?e.offsetHeight:a,g=ri(r)!==o||ri(a)!==d;return g&&(r=o,a=d),{width:r,height:a,$:g}}function Hl(e){return Le(e)?e:e.contextElement}function ir(e){const i=Hl(e);if(!_n(i))return zn(1);const r=i.getBoundingClientRect(),{width:a,height:s,$:o}=yf(i);let d=(o?ri(r.width):r.width)/a,g=(o?ri(r.height):r.height)/s;return(!d||!Number.isFinite(d))&&(d=1),(!g||!Number.isFinite(g))&&(g=1),{x:d,y:g}}const DE=zn(0);function bf(e){const i=pn(e);return!ci()||!i.visualViewport?DE:{x:i.visualViewport.offsetLeft,y:i.visualViewport.offsetTop}}function ME(e,i,r){return i===void 0&&(i=!1),!r||i&&r!==pn(e)?!1:i}function Kt(e,i,r,a){i===void 0&&(i=!1),r===void 0&&(r=!1);const s=e.getBoundingClientRect(),o=Hl(e);let d=zn(1);i&&(a?Le(a)&&(d=ir(a)):d=ir(e));const g=ME(o,r,a)?bf(o):zn(0);let c=(s.left+g.x)/d.x,m=(s.top+g.y)/d.y,h=s.width/d.x,v=s.height/d.y;if(o){const _=pn(o),b=a&&Le(a)?pn(a):a;let O=_,T=fl(O);for(;T&&a&&b!==O;){const E=ir(T),R=T.getBoundingClientRect(),D=Bn(T),S=R.left+(T.clientLeft+parseFloat(D.paddingLeft))*E.x,z=R.top+(T.clientTop+parseFloat(D.paddingTop))*E.y;c*=E.x,m*=E.y,h*=E.x,v*=E.y,c+=S,m+=z,O=pn(T),T=fl(O)}}return ii({width:h,height:v,x:c,y:m})}function Gl(e,i){const r=mi(e).scrollLeft;return i?i.left+r:Kt(Zn(e)).left+r}function Ef(e,i,r){r===void 0&&(r=!1);const a=e.getBoundingClientRect(),s=a.left+i.scrollLeft-(r?0:Gl(e,a)),o=a.top+i.scrollTop;return{x:s,y:o}}function LE(e){let{elements:i,rect:r,offsetParent:a,strategy:s}=e;const o=s==="fixed",d=Zn(a),g=i?fi(i.floating):!1;if(a===d||g&&o)return r;let c={scrollLeft:0,scrollTop:0},m=zn(1);const h=zn(0),v=_n(a);if((v||!v&&!o)&&((mr(a)!=="body"||Zr(d))&&(c=mi(a)),_n(a))){const b=Kt(a);m=ir(a),h.x=b.x+a.clientLeft,h.y=b.y+a.clientTop}const _=d&&!v&&!o?Ef(d,c,!0):zn(0);return{width:r.width*m.x,height:r.height*m.y,x:r.x*m.x-c.scrollLeft*m.x+h.x+_.x,y:r.y*m.y-c.scrollTop*m.y+h.y+_.y}}function FE(e){return Array.from(e.getClientRects())}function CE(e){const i=Zn(e),r=mi(e),a=e.ownerDocument.body,s=Ft(i.scrollWidth,i.clientWidth,a.scrollWidth,a.clientWidth),o=Ft(i.scrollHeight,i.clientHeight,a.scrollHeight,a.clientHeight);let d=-r.scrollLeft+Gl(e);const g=-r.scrollTop;return Bn(a).direction==="rtl"&&(d+=Ft(i.clientWidth,a.clientWidth)-s),{width:s,height:o,x:d,y:g}}function KE(e,i){const r=pn(e),a=Zn(e),s=r.visualViewport;let o=a.clientWidth,d=a.clientHeight,g=0,c=0;if(s){o=s.width,d=s.height;const m=ci();(!m||m&&i==="fixed")&&(g=s.offsetLeft,c=s.offsetTop)}return{width:o,height:d,x:g,y:c}}function VE(e,i){const r=Kt(e,!0,i==="fixed"),a=r.top+e.clientTop,s=r.left+e.clientLeft,o=_n(e)?ir(e):zn(1),d=e.clientWidth*o.x,g=e.clientHeight*o.y,c=s*o.x,m=a*o.y;return{width:d,height:g,x:c,y:m}}function Cd(e,i,r){let a;if(i==="viewport")a=KE(e,r);else if(i==="document")a=CE(Zn(e));else if(Le(i))a=VE(i,r);else{const s=bf(e);a={x:i.x-s.x,y:i.y-s.y,width:i.width,height:i.height}}return ii(a)}function Tf(e,i){const r=ct(e);return r===i||!Le(r)||ft(r)?!1:Bn(r).position==="fixed"||Tf(r,i)}function HE(e,i){const r=i.get(e);if(r)return r;let a=At(e,[],!1).filter(g=>Le(g)&&mr(g)!=="body"),s=null;const o=Bn(e).position==="fixed";let d=o?ct(e):e;for(;Le(d)&&!ft(d);){const g=Bn(d),c=Vl(d);!c&&g.position==="fixed"&&(s=null),(o?!c&&!s:!c&&g.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||Zr(d)&&!c&&Tf(e,d))?a=a.filter(h=>h!==d):s=g,d=ct(d)}return i.set(e,a),a}function GE(e){let{element:i,boundary:r,rootBoundary:a,strategy:s}=e;const d=[...r==="clippingAncestors"?fi(i)?[]:HE(i,this._c):[].concat(r),a],g=d[0],c=d.reduce((m,h)=>{const v=Cd(i,h,s);return m.top=Ft(v.top,m.top),m.right=or(v.right,m.right),m.bottom=or(v.bottom,m.bottom),m.left=Ft(v.left,m.left),m},Cd(i,g,s));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function $E(e){const{width:i,height:r}=yf(e);return{width:i,height:r}}function UE(e,i,r){const a=_n(i),s=Zn(i),o=r==="fixed",d=Kt(e,!0,o,i);let g={scrollLeft:0,scrollTop:0};const c=zn(0);if(a||!a&&!o)if((mr(i)!=="body"||Zr(s))&&(g=mi(i)),a){const _=Kt(i,!0,o,i);c.x=_.x+i.clientLeft,c.y=_.y+i.clientTop}else s&&(c.x=Gl(s));const m=s&&!a&&!o?Ef(s,g):zn(0),h=d.left+g.scrollLeft-c.x-m.x,v=d.top+g.scrollTop-c.y-m.y;return{x:h,y:v,width:d.width,height:d.height}}function Hs(e){return Bn(e).position==="static"}function Kd(e,i){if(!_n(e)||Bn(e).position==="fixed")return null;if(i)return i(e);let r=e.offsetParent;return Zn(e)===r&&(r=r.ownerDocument.body),r}function _f(e,i){const r=pn(e);if(fi(e))return r;if(!_n(e)){let s=ct(e);for(;s&&!ft(s);){if(Le(s)&&!Hs(s))return s;s=ct(s)}return r}let a=Kd(e,i);for(;a&&xE(a)&&Hs(a);)a=Kd(a,i);return a&&ft(a)&&Hs(a)&&!Vl(a)?r:a||qE(e)||r}const YE=async function(e){const i=this.getOffsetParent||_f,r=this.getDimensions,a=await r(e.floating);return{reference:UE(e.reference,await i(e.floating),e.strategy),floating:{x:0,y:0,width:a.width,height:a.height}}};function WE(e){return Bn(e).direction==="rtl"}const zE={convertOffsetParentRelativeRectToViewportRelativeRect:LE,getDocumentElement:Zn,getClippingRect:GE,getOffsetParent:_f,getElementRects:YE,getClientRects:FE,getDimensions:$E,getScale:ir,isElement:Le,isRTL:WE};function wf(e,i){return e.x===i.x&&e.y===i.y&&e.width===i.width&&e.height===i.height}function XE(e,i){let r=null,a;const s=Zn(e);function o(){var g;clearTimeout(a),(g=r)==null||g.disconnect(),r=null}function d(g,c){g===void 0&&(g=!1),c===void 0&&(c=1),o();const m=e.getBoundingClientRect(),{left:h,top:v,width:_,height:b}=m;if(g||i(),!_||!b)return;const O=za(v),T=za(s.clientWidth-(h+_)),E=za(s.clientHeight-(v+b)),R=za(h),S={rootMargin:-O+"px "+-T+"px "+-E+"px "+-R+"px",threshold:Ft(0,or(1,c))||1};let z=!0;function j($){const M=$[0].intersectionRatio;if(M!==c){if(!z)return d();M?d(!1,M):a=setTimeout(()=>{d(!1,1e-7)},1e3)}M===1&&!wf(m,e.getBoundingClientRect())&&d(),z=!1}try{r=new IntersectionObserver(j,{...S,root:s.ownerDocument})}catch{r=new IntersectionObserver(j,S)}r.observe(e)}return d(!0),o}function Vd(e,i,r,a){a===void 0&&(a={});const{ancestorScroll:s=!0,ancestorResize:o=!0,elementResize:d=typeof ResizeObserver=="function",layoutShift:g=typeof IntersectionObserver=="function",animationFrame:c=!1}=a,m=Hl(e),h=s||o?[...m?At(m):[],...At(i)]:[];h.forEach(R=>{s&&R.addEventListener("scroll",r,{passive:!0}),o&&R.addEventListener("resize",r)});const v=m&&g?XE(m,r):null;let _=-1,b=null;d&&(b=new ResizeObserver(R=>{let[D]=R;D&&D.target===m&&b&&(b.unobserve(i),cancelAnimationFrame(_),_=requestAnimationFrame(()=>{var S;(S=b)==null||S.observe(i)})),r()}),m&&!c&&b.observe(m),b.observe(i));let O,T=c?Kt(e):null;c&&E();function E(){const R=Kt(e);T&&!wf(T,R)&&r(),T=R,O=requestAnimationFrame(E)}return r(),()=>{var R;h.forEach(D=>{s&&D.removeEventListener("scroll",r),o&&D.removeEventListener("resize",r)}),v==null||v(),(R=b)==null||R.disconnect(),b=null,c&&cancelAnimationFrame(O)}}const JE=PE,ZE=BE,QE=NE,Hd=jE,e1=(e,i,r)=>{const a=new Map,s={platform:zE,...r},o={...s.platform,_c:a};return IE(e,i,{...s,platform:o})};var ei=typeof document<"u"?A.useLayoutEffect:A.useEffect;function li(e,i){if(e===i)return!0;if(typeof e!=typeof i)return!1;if(typeof e=="function"&&e.toString()===i.toString())return!0;let r,a,s;if(e&&i&&typeof e=="object"){if(Array.isArray(e)){if(r=e.length,r!==i.length)return!1;for(a=r;a--!==0;)if(!li(e[a],i[a]))return!1;return!0}if(s=Object.keys(e),r=s.length,r!==Object.keys(i).length)return!1;for(a=r;a--!==0;)if(!{}.hasOwnProperty.call(i,s[a]))return!1;for(a=r;a--!==0;){const o=s[a];if(!(o==="_owner"&&e.$$typeof)&&!li(e[o],i[o]))return!1}return!0}return e!==e&&i!==i}function Af(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Gd(e,i){const r=Af(e);return Math.round(i*r)/r}function Gs(e){const i=A.useRef(e);return ei(()=>{i.current=e}),i}function n1(e){e===void 0&&(e={});const{placement:i="bottom",strategy:r="absolute",middleware:a=[],platform:s,elements:{reference:o,floating:d}={},transform:g=!0,whileElementsMounted:c,open:m}=e,[h,v]=A.useState({x:0,y:0,strategy:r,placement:i,middlewareData:{},isPositioned:!1}),[_,b]=A.useState(a);li(_,a)||b(a);const[O,T]=A.useState(null),[E,R]=A.useState(null),D=A.useCallback(B=>{B!==$.current&&($.current=B,T(B))},[]),S=A.useCallback(B=>{B!==M.current&&(M.current=B,R(B))},[]),z=o||O,j=d||E,$=A.useRef(null),M=A.useRef(null),K=A.useRef(h),ee=c!=null,ne=Gs(c),X=Gs(s),te=Gs(m),G=A.useCallback(()=>{if(!$.current||!M.current)return;const B={placement:i,strategy:r,middleware:_};X.current&&(B.platform=X.current),e1($.current,M.current,B).then(q=>{const U={...q,isPositioned:te.current!==!1};P.current&&!li(K.current,U)&&(K.current=U,of.flushSync(()=>{v(U)}))})},[_,i,r,X,te]);ei(()=>{m===!1&&K.current.isPositioned&&(K.current.isPositioned=!1,v(B=>({...B,isPositioned:!1})))},[m]);const P=A.useRef(!1);ei(()=>(P.current=!0,()=>{P.current=!1}),[]),ei(()=>{if(z&&($.current=z),j&&(M.current=j),z&&j){if(ne.current)return ne.current(z,j,G);G()}},[z,j,G,ne,ee]);const x=A.useMemo(()=>({reference:$,floating:M,setReference:D,setFloating:S}),[D,S]),F=A.useMemo(()=>({reference:z,floating:j}),[z,j]),C=A.useMemo(()=>{const B={position:r,left:0,top:0};if(!F.floating)return B;const q=Gd(F.floating,h.x),U=Gd(F.floating,h.y);return g?{...B,transform:"translate("+q+"px, "+U+"px)",...Af(F.floating)>=1.5&&{willChange:"transform"}}:{position:r,left:q,top:U}},[r,g,F.floating,h.x,h.y]);return A.useMemo(()=>({...h,update:G,refs:x,elements:F,floatingStyles:C}),[h,G,x,F,C])}const t1=e=>{function i(r){return{}.hasOwnProperty.call(r,"current")}return{name:"arrow",options:e,fn(r){const{element:a,padding:s}=typeof e=="function"?e(r):e;return a&&i(a)?a.current!=null?Hd({element:a.current,padding:s}).fn(r):{}:a?Hd({element:a,padding:s}).fn(r):{}}}},r1=(e,i)=>({...JE(e),options:[e,i]}),a1=(e,i)=>({...ZE(e),options:[e,i]}),i1=(e,i)=>({...QE(e),options:[e,i]}),s1=(e,i)=>({...t1(e),options:[e,i]}),$d=/(\w+)/g;function l1(e,i){const r=Array.isArray(e)?e:o1(e);for(const a of i){if(!a)continue;let s=a;for(let o=0;o<r.length;o++){const d=s[r[o]];d!==void 0&&(s=d)}if(typeof s=="string")return s}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function o1(e){const i=[];let r=$d.exec(e);for(;r;){const[,a,s]=r;i.push(a||s),r=$d.exec(e)}return i}const u1=/{[^}]*}/g;function pi(e,...i){const r=cf(),a=r.translations||[],s=[...i,...Array.isArray(a)?a.map(d=>d[e]):[a[e]],r.locale[e]];return(d,g)=>{const c=l1(d,s);return g?c.replace(u1,m=>{const h=m.substring(1,m.length-1);if(g[h]===void 0){const v=JSON.stringify(g);throw new Error(`Error translating key '${d}'. No replacement syntax ({}) found for key '${h}'. The following replacements were passed: '${v}'`)}return g[h]}):c}}var d1=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const g1=A.forwardRef((e,i)=>{var{className:r,size:a="medium",title:s,transparent:o=!1,variant:d="neutral",id:g}=e,c=d1(e,["className","size","title","transparent","variant","id"]);const{cn:m}=Fe(),h=di(),v=pi("Loader");return Q.createElement("svg",Object.assign({"aria-labelledby":g??`loader-${h}`,ref:i,className:m("navds-loader",r,`navds-loader--${a}`,`navds-loader--${d}`,{"navds-loader--transparent":o}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid"},zr(c,["children"])),Q.createElement("title",{id:g??`loader-${h}`},s||v("title")),Q.createElement("circle",{className:m("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),Q.createElement("circle",{className:m("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});var f1=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const $l=A.forwardRef((e,i)=>{var{as:r="button",variant:a="primary",className:s,children:o,size:d="medium",loading:g=!1,disabled:c,icon:m,iconPosition:h="left",onKeyUp:v}=e,_=f1(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp"]);const{cn:b}=Fe(),O=c||g?zr(_,["href"]):_,T=E=>{E.key===" "&&!c&&!g&&E.currentTarget.click()};return Q.createElement(r,Object.assign({},r!=="button"?{role:"button"}:{},O,{ref:i,onKeyUp:Fl(v,T),className:b(s,"navds-button",`navds-button--${a}`,`navds-button--${d}`,{"navds-button--loading":g,"navds-button--icon-only":!!m&&!o,"navds-button--disabled":c??g}),disabled:c??g?!0:void 0}),m&&h==="left"&&Q.createElement("span",{className:b("navds-button__icon")},m),g&&Q.createElement(g1,{size:d}),o&&Q.createElement(Ll,{as:"span",size:d==="medium"?"medium":"small"},o),m&&h==="right"&&Q.createElement("span",{className:b("navds-button__icon")},m))});function c1(){const e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function m1(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(i=>{let{brand:r,version:a}=i;return r+"/"+a}).join(" "):navigator.userAgent}function p1(){return/apple/i.test(navigator.vendor)}function h1(){return c1().toLowerCase().startsWith("mac")&&!navigator.maxTouchPoints}function k1(){return m1().includes("jsdom/")}const v1="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function Ud(e){let i=e.activeElement;for(;((r=i)==null||(r=r.shadowRoot)==null?void 0:r.activeElement)!=null;){var r;i=i.shadowRoot.activeElement}return i}function Ur(e,i){if(!e||!i)return!1;const r=i.getRootNode==null?void 0:i.getRootNode();if(e.contains(i))return!0;if(r&&si(r)){let a=i;for(;a;){if(e===a)return!0;a=a.parentNode||a.host}}return!1}function ar(e){return"composedPath"in e?e.composedPath()[0]:e.target}function $s(e,i){if(i==null)return!1;if("composedPath"in e)return e.composedPath().includes(i);const r=e;return r.target!=null&&i.contains(r.target)}function y1(e){return e.matches("html,body")}function Lt(e){return(e==null?void 0:e.ownerDocument)||document}function b1(e){return _n(e)&&e.matches(v1)}function E1(e){if(!e||k1())return!0;try{return e.matches(":focus-visible")}catch{return!0}}function Us(e,i,r){r===void 0&&(r=!0);let a=e.filter(o=>{var d;return o.parentId===i&&((d=o.context)==null?void 0:d.open)}),s=a;for(;s.length;)s=r?e.filter(o=>{var d;return(d=s)==null?void 0:d.some(g=>{var c;return o.parentId===g.id&&((c=o.context)==null?void 0:c.open)})}):e,a=a.concat(s);return a}function T1(e){return"nativeEvent"in e}function cl(e,i){const r=["mouse","pen"];return r.push("",void 0),r.includes(e)}var dr=typeof document<"u"?A.useLayoutEffect:A.useEffect;const _1={...rf};function Xa(e){const i=A.useRef(e);return dr(()=>{i.current=e}),i}const w1=_1.useInsertionEffect,A1=w1||(e=>e());function dt(e){const i=A.useRef(()=>{});return A1(()=>{i.current=e}),A.useCallback(function(){for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return i.current==null?void 0:i.current(...a)},[])}const R1="data-floating-ui-focusable",Yd="active",Wd="selected",S1={...rf};let zd=!1,I1=0;const Xd=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+I1++;function j1(){const[e,i]=A.useState(()=>zd?Xd():void 0);return dr(()=>{e==null&&i(Xd())},[]),A.useEffect(()=>{zd=!0},[]),e}const N1=S1.useId,O1=N1||j1;function P1(){const e=new Map;return{emit(i,r){var a;(a=e.get(i))==null||a.forEach(s=>s(r))},on(i,r){e.has(i)||e.set(i,new Set),e.get(i).add(r)},off(i,r){var a;(a=e.get(i))==null||a.delete(r)}}}const B1=A.createContext(null),x1=A.createContext(null),Rf=()=>{var e;return((e=A.useContext(B1))==null?void 0:e.id)||null},Ul=()=>A.useContext(x1);function Yl(e){return"data-floating-ui-"+e}function Pn(e){e.current!==-1&&(clearTimeout(e.current),e.current=-1)}const Jd=Yl("safe-polygon");function Ys(e,i,r){if(r&&!cl(r))return 0;if(typeof e=="number")return e;if(typeof e=="function"){const a=e();return typeof a=="number"?a:a==null?void 0:a[i]}return e==null?void 0:e[i]}function Ws(e){return typeof e=="function"?e():e}function q1(e,i){i===void 0&&(i={});const{open:r,onOpenChange:a,dataRef:s,events:o,elements:d}=e,{enabled:g=!0,delay:c=0,handleClose:m=null,mouseOnly:h=!1,restMs:v=0,move:_=!0}=i,b=Ul(),O=Rf(),T=Xa(m),E=Xa(c),R=Xa(r),D=Xa(v),S=A.useRef(),z=A.useRef(-1),j=A.useRef(),$=A.useRef(-1),M=A.useRef(!0),K=A.useRef(!1),ee=A.useRef(()=>{}),ne=A.useRef(!1),X=A.useCallback(()=>{var C;const B=(C=s.current.openEvent)==null?void 0:C.type;return(B==null?void 0:B.includes("mouse"))&&B!=="mousedown"},[s]);A.useEffect(()=>{if(!g)return;function C(B){let{open:q}=B;q||(Pn(z),Pn($),M.current=!0,ne.current=!1)}return o.on("openchange",C),()=>{o.off("openchange",C)}},[g,o]),A.useEffect(()=>{if(!g||!T.current||!r)return;function C(q){X()&&a(!1,q,"hover")}const B=Lt(d.floating).documentElement;return B.addEventListener("mouseleave",C),()=>{B.removeEventListener("mouseleave",C)}},[d.floating,r,a,g,T,X]);const te=A.useCallback(function(C,B,q){B===void 0&&(B=!0),q===void 0&&(q="hover");const U=Ys(E.current,"close",S.current);U&&!j.current?(Pn(z),z.current=window.setTimeout(()=>a(!1,C,q),U)):B&&(Pn(z),a(!1,C,q))},[E,a]),G=dt(()=>{ee.current(),j.current=void 0}),P=dt(()=>{if(K.current){const C=Lt(d.floating).body;C.style.pointerEvents="",C.removeAttribute(Jd),K.current=!1}}),x=dt(()=>s.current.openEvent?["click","mousedown"].includes(s.current.openEvent.type):!1);A.useEffect(()=>{if(!g)return;function C(re){if(Pn(z),M.current=!1,h&&!cl(S.current)||Ws(D.current)>0&&!Ys(E.current,"open"))return;const oe=Ys(E.current,"open",S.current);oe?z.current=window.setTimeout(()=>{R.current||a(!0,re,"hover")},oe):r||a(!0,re,"hover")}function B(re){if(x()){P();return}ee.current();const oe=Lt(d.floating);if(Pn($),ne.current=!1,T.current&&s.current.floatingContext){r||Pn(z),j.current=T.current({...s.current.floatingContext,tree:b,x:re.clientX,y:re.clientY,onClose(){P(),G(),x()||te(re,!0,"safe-polygon")}});const Ee=j.current;oe.addEventListener("mousemove",Ee),ee.current=()=>{oe.removeEventListener("mousemove",Ee)};return}(S.current==="touch"?!Ur(d.floating,re.relatedTarget):!0)&&te(re)}function q(re){x()||s.current.floatingContext&&(T.current==null||T.current({...s.current.floatingContext,tree:b,x:re.clientX,y:re.clientY,onClose(){P(),G(),x()||te(re)}})(re))}function U(){Pn(z)}function Z(re){x()||te(re,!1)}if(Le(d.domReference)){const re=d.domReference,oe=d.floating;return r&&re.addEventListener("mouseleave",q),_&&re.addEventListener("mousemove",C,{once:!0}),re.addEventListener("mouseenter",C),re.addEventListener("mouseleave",B),oe&&(oe.addEventListener("mouseleave",q),oe.addEventListener("mouseenter",U),oe.addEventListener("mouseleave",Z)),()=>{r&&re.removeEventListener("mouseleave",q),_&&re.removeEventListener("mousemove",C),re.removeEventListener("mouseenter",C),re.removeEventListener("mouseleave",B),oe&&(oe.removeEventListener("mouseleave",q),oe.removeEventListener("mouseenter",U),oe.removeEventListener("mouseleave",Z))}}},[d,g,e,h,_,te,G,P,a,r,R,b,E,T,s,x,D]),dr(()=>{var C;if(g&&r&&(C=T.current)!=null&&C.__options.blockPointerEvents&&X()){K.current=!0;const q=d.floating;if(Le(d.domReference)&&q){var B;const U=Lt(d.floating).body;U.setAttribute(Jd,"");const Z=d.domReference,re=b==null||(B=b.nodesRef.current.find(oe=>oe.id===O))==null||(B=B.context)==null?void 0:B.elements.floating;return re&&(re.style.pointerEvents=""),U.style.pointerEvents="none",Z.style.pointerEvents="auto",q.style.pointerEvents="auto",()=>{U.style.pointerEvents="",Z.style.pointerEvents="",q.style.pointerEvents=""}}}},[g,r,O,d,b,T,X]),dr(()=>{r||(S.current=void 0,ne.current=!1,G(),P())},[r,G,P]),A.useEffect(()=>()=>{G(),Pn(z),Pn($),P()},[g,d.domReference,G,P]);const F=A.useMemo(()=>{function C(B){S.current=B.pointerType}return{onPointerDown:C,onPointerEnter:C,onMouseMove(B){const{nativeEvent:q}=B;function U(){!M.current&&!R.current&&a(!0,q,"hover")}h&&!cl(S.current)||r||Ws(D.current)===0||ne.current&&B.movementX**2+B.movementY**2<2||(Pn($),S.current==="touch"?U():(ne.current=!0,$.current=window.setTimeout(U,Ws(D.current))))}}},[h,a,r,R,D]);return A.useMemo(()=>g?{reference:F}:{},[g,F])}function zs(e,i){if(!e||!i)return!1;const r=i.getRootNode==null?void 0:i.getRootNode();if(e.contains(i))return!0;if(r&&si(r)){let a=i;for(;a;){if(e===a)return!0;a=a.parentNode||a.host}}return!1}function D1(e){return"composedPath"in e?e.composedPath()[0]:e.target}const M1={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},L1={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},Zd=e=>{var i,r;return{escapeKey:typeof e=="boolean"?e:(i=e==null?void 0:e.escapeKey)!=null?i:!1,outsidePress:typeof e=="boolean"?e:(r=e==null?void 0:e.outsidePress)!=null?r:!0}};function F1(e,i){i===void 0&&(i={});const{open:r,onOpenChange:a,elements:s,dataRef:o}=e,{enabled:d=!0,escapeKey:g=!0,outsidePress:c=!0,outsidePressEvent:m="pointerdown",referencePress:h=!1,referencePressEvent:v="pointerdown",ancestorScroll:_=!1,bubbles:b,capture:O}=i,T=Ul(),E=dt(typeof c=="function"?c:()=>!1),R=typeof c=="function"?E:c,D=A.useRef(!1),S=A.useRef(!1),{escapeKey:z,outsidePress:j}=Zd(b),{escapeKey:$,outsidePress:M}=Zd(O),K=A.useRef(!1),ee=dt(x=>{var F;if(!r||!d||!g||x.key!=="Escape"||K.current)return;const C=(F=o.current.floatingContext)==null?void 0:F.nodeId,B=T?Us(T.nodesRef.current,C):[];if(!z&&(x.stopPropagation(),B.length>0)){let q=!0;if(B.forEach(U=>{var Z;if((Z=U.context)!=null&&Z.open&&!U.context.dataRef.current.__escapeKeyBubbles){q=!1;return}}),!q)return}a(!1,T1(x)?x.nativeEvent:x,"escape-key")}),ne=dt(x=>{var F;const C=()=>{var B;ee(x),(B=ar(x))==null||B.removeEventListener("keydown",C)};(F=ar(x))==null||F.addEventListener("keydown",C)}),X=dt(x=>{var F;const C=D.current;D.current=!1;const B=S.current;if(S.current=!1,m==="click"&&B||C||typeof R=="function"&&!R(x))return;const q=ar(x),U="["+Yl("inert")+"]",Z=Lt(s.floating).querySelectorAll(U);let re=Le(q)?q:null;for(;re&&!ft(re);){const Re=ct(re);if(ft(Re)||!Le(Re))break;re=Re}if(Z.length&&Le(q)&&!y1(q)&&!Ur(q,s.floating)&&Array.from(Z).every(Re=>!Ur(re,Re)))return;if(_n(q)&&P){const Re=ft(q),Ne=Bn(q),me=/auto|scroll/,ve=Re||me.test(Ne.overflowX),Ae=Re||me.test(Ne.overflowY),Se=ve&&q.clientWidth>0&&q.scrollWidth>q.clientWidth,qe=Ae&&q.clientHeight>0&&q.scrollHeight>q.clientHeight,Qe=Ne.direction==="rtl",He=qe&&(Qe?x.offsetX<=q.offsetWidth-q.clientWidth:x.offsetX>q.clientWidth),en=Se&&x.offsetY>q.clientHeight;if(He||en)return}const oe=(F=o.current.floatingContext)==null?void 0:F.nodeId,je=T&&Us(T.nodesRef.current,oe).some(Re=>{var Ne;return $s(x,(Ne=Re.context)==null?void 0:Ne.elements.floating)});if($s(x,s.floating)||$s(x,s.domReference)||je)return;const Ee=T?Us(T.nodesRef.current,oe):[];if(Ee.length>0){let Re=!0;if(Ee.forEach(Ne=>{var me;if((me=Ne.context)!=null&&me.open&&!Ne.context.dataRef.current.__outsidePressBubbles){Re=!1;return}}),!Re)return}a(!1,x,"outside-press")}),te=dt(x=>{var F;const C=()=>{var B;X(x),(B=ar(x))==null||B.removeEventListener(m,C)};(F=ar(x))==null||F.addEventListener(m,C)});A.useEffect(()=>{if(!r||!d)return;o.current.__escapeKeyBubbles=z,o.current.__outsidePressBubbles=j;let x=-1;function F(Z){a(!1,Z,"ancestor-scroll")}function C(){window.clearTimeout(x),K.current=!0}function B(){x=window.setTimeout(()=>{K.current=!1},ci()?5:0)}const q=Lt(s.floating);g&&(q.addEventListener("keydown",$?ne:ee,$),q.addEventListener("compositionstart",C),q.addEventListener("compositionend",B)),R&&q.addEventListener(m,M?te:X,M);let U=[];return _&&(Le(s.domReference)&&(U=At(s.domReference)),Le(s.floating)&&(U=U.concat(At(s.floating))),!Le(s.reference)&&s.reference&&s.reference.contextElement&&(U=U.concat(At(s.reference.contextElement)))),U=U.filter(Z=>{var re;return Z!==((re=q.defaultView)==null?void 0:re.visualViewport)}),U.forEach(Z=>{Z.addEventListener("scroll",F,{passive:!0})}),()=>{g&&(q.removeEventListener("keydown",$?ne:ee,$),q.removeEventListener("compositionstart",C),q.removeEventListener("compositionend",B)),R&&q.removeEventListener(m,M?te:X,M),U.forEach(Z=>{Z.removeEventListener("scroll",F)}),window.clearTimeout(x)}},[o,s,g,R,m,r,a,_,d,z,j,ee,$,ne,X,M,te]),A.useEffect(()=>{D.current=!1},[R,m]);const G=A.useMemo(()=>({onKeyDown:ee,...h&&{[M1[v]]:x=>{a(!1,x.nativeEvent,"reference-press")},...v!=="click"&&{onClick(x){a(!1,x.nativeEvent,"reference-press")}}}}),[ee,a,h,v]),P=A.useMemo(()=>({onKeyDown:ee,onMouseDown(){S.current=!0},onMouseUp(){S.current=!0},[L1[m]]:()=>{D.current=!0}}),[ee,m]);return A.useMemo(()=>d?{reference:G,floating:P}:{},[d,G,P])}function C1(e){const{open:i=!1,onOpenChange:r,elements:a}=e,s=O1(),o=A.useRef({}),[d]=A.useState(()=>P1()),g=Rf()!=null,[c,m]=A.useState(a.reference),h=dt((b,O,T)=>{o.current.openEvent=b?O:void 0,d.emit("openchange",{open:b,event:O,reason:T,nested:g}),r==null||r(b,O,T)}),v=A.useMemo(()=>({setPositionReference:m}),[]),_=A.useMemo(()=>({reference:c||a.reference||null,floating:a.floating||null,domReference:a.reference}),[c,a.reference,a.floating]);return A.useMemo(()=>({dataRef:o,open:i,onOpenChange:h,elements:_,events:d,floatingId:s,refs:v}),[i,h,_,d,s,v])}function K1(e){e===void 0&&(e={});const{nodeId:i}=e,r=C1({...e,elements:{reference:null,floating:null,...e.elements}}),a=e.rootContext||r,s=a.elements,[o,d]=A.useState(null),[g,c]=A.useState(null),h=(s==null?void 0:s.domReference)||o,v=A.useRef(null),_=Ul();dr(()=>{h&&(v.current=h)},[h]);const b=n1({...e,elements:{...s,...g&&{reference:g}}}),O=A.useCallback(S=>{const z=Le(S)?{getBoundingClientRect:()=>S.getBoundingClientRect(),getClientRects:()=>S.getClientRects(),contextElement:S}:S;c(z),b.refs.setReference(z)},[b.refs]),T=A.useCallback(S=>{(Le(S)||S===null)&&(v.current=S,d(S)),(Le(b.refs.reference.current)||b.refs.reference.current===null||S!==null&&!Le(S))&&b.refs.setReference(S)},[b.refs]),E=A.useMemo(()=>({...b.refs,setReference:T,setPositionReference:O,domReference:v}),[b.refs,T,O]),R=A.useMemo(()=>({...b.elements,domReference:h}),[b.elements,h]),D=A.useMemo(()=>({...b,...a,refs:E,elements:R,nodeId:i}),[b,E,R,i,a]);return dr(()=>{a.dataRef.current.floatingContext=D;const S=_==null?void 0:_.nodesRef.current.find(z=>z.id===i);S&&(S.context=D)}),A.useMemo(()=>({...b,context:D,refs:E,elements:R}),[b,E,R,D])}function Xs(){return h1()&&p1()}function V1(e,i){i===void 0&&(i={});const{open:r,onOpenChange:a,events:s,dataRef:o,elements:d}=e,{enabled:g=!0,visibleOnly:c=!0}=i,m=A.useRef(!1),h=A.useRef(-1),v=A.useRef(!0);A.useEffect(()=>{if(!g)return;const b=pn(d.domReference);function O(){!r&&_n(d.domReference)&&d.domReference===Ud(Lt(d.domReference))&&(m.current=!0)}function T(){v.current=!0}function E(){v.current=!1}return b.addEventListener("blur",O),Xs()&&(b.addEventListener("keydown",T,!0),b.addEventListener("pointerdown",E,!0)),()=>{b.removeEventListener("blur",O),Xs()&&(b.removeEventListener("keydown",T,!0),b.removeEventListener("pointerdown",E,!0))}},[d.domReference,r,g]),A.useEffect(()=>{if(!g)return;function b(O){let{reason:T}=O;(T==="reference-press"||T==="escape-key")&&(m.current=!0)}return s.on("openchange",b),()=>{s.off("openchange",b)}},[s,g]),A.useEffect(()=>()=>{Pn(h)},[]);const _=A.useMemo(()=>({onMouseLeave(){m.current=!1},onFocus(b){if(m.current)return;const O=ar(b.nativeEvent);if(c&&Le(O)){if(Xs()&&!b.relatedTarget){if(!v.current&&!b1(O))return}else if(!E1(O))return}a(!0,b.nativeEvent,"focus")},onBlur(b){m.current=!1;const O=b.relatedTarget,T=b.nativeEvent,E=Le(O)&&O.hasAttribute(Yl("focus-guard"))&&O.getAttribute("data-type")==="outside";h.current=window.setTimeout(()=>{var R;const D=Ud(d.domReference?d.domReference.ownerDocument:document);!O&&D===d.domReference||Ur((R=o.current.floatingContext)==null?void 0:R.refs.floating.current,D)||Ur(d.domReference,D)||E||a(!1,T,"focus")})}}),[o,d.domReference,a,c]);return A.useMemo(()=>g?{reference:_}:{},[g,_])}function Js(e,i,r){const a=new Map,s=r==="item";let o=e;if(s&&e){const{[Yd]:d,[Wd]:g,...c}=e;o=c}return{...r==="floating"&&{tabIndex:-1,[R1]:""},...o,...i.map(d=>{const g=d?d[r]:null;return typeof g=="function"?e?g(e):null:g}).concat(e).reduce((d,g)=>(g&&Object.entries(g).forEach(c=>{let[m,h]=c;if(!(s&&[Yd,Wd].includes(m)))if(m.indexOf("on")===0){if(a.has(m)||a.set(m,[]),typeof h=="function"){var v;(v=a.get(m))==null||v.push(h),d[m]=function(){for(var _,b=arguments.length,O=new Array(b),T=0;T<b;T++)O[T]=arguments[T];return(_=a.get(m))==null?void 0:_.map(E=>E(...O)).find(E=>E!==void 0)}}}else d[m]=h}),d),{})}}function H1(e){e===void 0&&(e=[]);const i=e.map(g=>g==null?void 0:g.reference),r=e.map(g=>g==null?void 0:g.floating),a=e.map(g=>g==null?void 0:g.item),s=A.useCallback(g=>Js(g,e,"reference"),i),o=A.useCallback(g=>Js(g,e,"floating"),r),d=A.useCallback(g=>Js(g,e,"item"),a);return A.useMemo(()=>({getReferenceProps:s,getFloatingProps:o,getItemProps:d}),[s,o,d])}function G1(e,i,r){r===void 0&&(r=!0);let a=e.filter(o=>{var d;return o.parentId===i&&((d=o.context)==null?void 0:d.open)}),s=a;for(;s.length;)s=r?e.filter(o=>{var d;return(d=s)==null?void 0:d.some(g=>{var c;return o.parentId===g.id&&((c=o.context)==null?void 0:c.open)})}):e,a=a.concat(s);return a}function Qd(e,i){const[r,a]=e;let s=!1;const o=i.length;for(let d=0,g=o-1;d<o;g=d++){const[c,m]=i[d]||[0,0],[h,v]=i[g]||[0,0];m>=a!=v>=a&&r<=(h-c)*(a-m)/(v-m)+c&&(s=!s)}return s}function $1(e,i){return e[0]>=i.x&&e[0]<=i.x+i.width&&e[1]>=i.y&&e[1]<=i.y+i.height}function U1(e){e===void 0&&(e={});const{buffer:i=.5,blockPointerEvents:r=!1,requireIntent:a=!0}=e;let s,o=!1,d=null,g=null,c=performance.now();function m(v,_){const b=performance.now(),O=b-c;if(d===null||g===null||O===0)return d=v,g=_,c=b,null;const T=v-d,E=_-g,D=Math.sqrt(T*T+E*E)/O;return d=v,g=_,c=b,D}const h=v=>{let{x:_,y:b,placement:O,elements:T,onClose:E,nodeId:R,tree:D}=v;return function(z){function j(){clearTimeout(s),E()}if(clearTimeout(s),!T.domReference||!T.floating||O==null||_==null||b==null)return;const{clientX:$,clientY:M}=z,K=[$,M],ee=D1(z),ne=z.type==="mouseleave",X=zs(T.floating,ee),te=zs(T.domReference,ee),G=T.domReference.getBoundingClientRect(),P=T.floating.getBoundingClientRect(),x=O.split("-")[0],F=_>P.right-P.width/2,C=b>P.bottom-P.height/2,B=$1(K,G),q=P.width>G.width,U=P.height>G.height,Z=(q?G:P).left,re=(q?G:P).right,oe=(U?G:P).top,je=(U?G:P).bottom;if(X&&(o=!0,!ne))return;if(te&&(o=!1),te&&!ne){o=!0;return}if(ne&&Le(z.relatedTarget)&&zs(T.floating,z.relatedTarget)||D&&G1(D.nodesRef.current,R).some(Ne=>{let{context:me}=Ne;return me==null?void 0:me.open}))return;if(x==="top"&&b>=G.bottom-1||x==="bottom"&&b<=G.top+1||x==="left"&&_>=G.right-1||x==="right"&&_<=G.left+1)return j();let Ee=[];switch(x){case"top":Ee=[[Z,G.top+1],[Z,P.bottom-1],[re,P.bottom-1],[re,G.top+1]];break;case"bottom":Ee=[[Z,P.top+1],[Z,G.bottom-1],[re,G.bottom-1],[re,P.top+1]];break;case"left":Ee=[[P.right-1,je],[P.right-1,oe],[G.left+1,oe],[G.left+1,je]];break;case"right":Ee=[[G.right-1,je],[G.right-1,oe],[P.left+1,oe],[P.left+1,je]];break}function Re(Ne){let[me,ve]=Ne;switch(x){case"top":{const Ae=[q?me+i/2:F?me+i*4:me-i*4,ve+i+1],Se=[q?me-i/2:F?me+i*4:me-i*4,ve+i+1],qe=[[P.left,F||q?P.bottom-i:P.top],[P.right,F?q?P.bottom-i:P.top:P.bottom-i]];return[Ae,Se,...qe]}case"bottom":{const Ae=[q?me+i/2:F?me+i*4:me-i*4,ve-i],Se=[q?me-i/2:F?me+i*4:me-i*4,ve-i],qe=[[P.left,F||q?P.top+i:P.bottom],[P.right,F?q?P.top+i:P.bottom:P.top+i]];return[Ae,Se,...qe]}case"left":{const Ae=[me+i+1,U?ve+i/2:C?ve+i*4:ve-i*4],Se=[me+i+1,U?ve-i/2:C?ve+i*4:ve-i*4];return[...[[C||U?P.right-i:P.left,P.top],[C?U?P.right-i:P.left:P.right-i,P.bottom]],Ae,Se]}case"right":{const Ae=[me-i,U?ve+i/2:C?ve+i*4:ve-i*4],Se=[me-i,U?ve-i/2:C?ve+i*4:ve-i*4],qe=[[C||U?P.left+i:P.right,P.top],[C?U?P.left+i:P.right:P.left+i,P.bottom]];return[Ae,Se,...qe]}}}if(!Qd([$,M],Ee)){if(o&&!B)return j();if(!ne&&a){const Ne=m(z.clientX,z.clientY);if(Ne!==null&&Ne<.1)return j()}Qd([$,M],Re([_,b]))?!o&&a&&(s=window.setTimeout(j,40)):j()}}};return h.__options={blockPointerEvents:r},h}const Y1=A.createContext(null),W1=(e,i)=>{var r,a,s;const{size:o,error:d,errorId:g}=e,c=A.useContext(Y1),m=di(),h=(r=e.id)!==null&&r!==void 0?r:`${i}-${m}`,v=g??`${i}-error-${m}`,_=`${i}-description-${m}`,b=(c==null?void 0:c.disabled)||e.disabled,O=((c==null?void 0:c.readOnly)||e.readOnly)&&!b||void 0,T=!b&&!O&&!!(d||c!=null&&c.error),E=!b&&!O&&!!d&&typeof d!="boolean",R=Object.assign({},T?{"aria-invalid":!0}:{});return e!=null&&e.required,{showErrorMsg:E,hasError:T,errorId:v,inputDescriptionId:_,size:(a=o??(c==null?void 0:c.size))!==null&&a!==void 0?a:"medium",readOnly:O,inputProps:Object.assign(Object.assign({id:h},R),{"aria-describedby":tf(e["aria-describedby"],{[_]:!!(e!=null&&e.description)&&typeof(e==null?void 0:e.description)=="string",[v]:E,[(s=c==null?void 0:c.errorId)!==null&&s!==void 0?s:""]:T&&!!(c!=null&&c.error)})||void 0,disabled:b})}};function Ze(e,i,r,a){return a?typeof a=="string"?{[`--__${e}c-${i}-${r}-xs`]:a}:Object.fromEntries(Object.entries(a).map(([s,o])=>[`--__${e}c-${i}-${r}-${s}`,o])):{}}const z1={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},eg=(e,i,r,a,s,o)=>i.split(" ").map((d,g,c)=>{var m;if(e==="margin-inline"&&d==="full")return`calc((100vw - ${100/c.length}%)/-2)`;if(e==="padding-inline"&&d==="full")return`calc((100vw - ${100/c.length}%)/2)`;if(["mi","mb"].includes(e)&&d==="auto")return"auto";let h=`var(--${o}-${r}-${d})`;if(a.includes(d))h=d==="px"?"1px":d;else if(d.startsWith("space"))h=`var(--${o}-${d})`;else{const v=`--${o}-spacing-${d}`;h=`var(${(m=z1[v])!==null&&m!==void 0?m:v})`}return s?d==="0"?"0":`calc(-1 * ${h})`:h}).join(" ");function Tn(e,i,r,a,s,o=!1,d=[]){if(!s)return{};if(typeof s=="string")return{[`--__${e}c-${i}-${r}-xs`]:eg(r,s,a,d,o,e)};const g={};return Object.entries(s).forEach(([c,m])=>{g[`--__${e}c-${i}-${r}-${c}`]=eg(r,m,a,d,o,e)}),g}const Sf=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],If=({children:e,className:i,padding:r,paddingInline:a,paddingBlock:s,margin:o,marginInline:d,marginBlock:g,width:c,minWidth:m,maxWidth:h,height:v,minHeight:_,maxHeight:b,position:O,inset:T,top:E,right:R,left:D,bottom:S,overflow:z,overflowX:j,overflowY:$,flexBasis:M,flexGrow:K,flexShrink:ee,gridColumn:ne})=>{const X=fr(!1),{cn:te}=Fe(),G=X?"ax":"a",P=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},Tn(G,"r","p","spacing",r)),Tn(G,"r","pi","spacing",a)),Tn(G,"r","pb","spacing",s)),Tn(G,"r","m","spacing",o)),Tn(G,"r","mi","spacing",d)),Tn(G,"r","mb","spacing",g)),Ze(G,"r","w",c)),Ze(G,"r","minw",m)),Ze(G,"r","maxw",h)),Ze(G,"r","h",v)),Ze(G,"r","minh",_)),Ze(G,"r","maxh",b)),Ze(G,"r","position",O)),Tn(G,"r","inset","spacing",T)),Tn(G,"r","top","spacing",E)),Tn(G,"r","right","spacing",R)),Tn(G,"r","bottom","spacing",S)),Tn(G,"r","left","spacing",D)),Ze(G,"r","overflow",z)),Ze(G,"r","overflowx",j)),Ze(G,"r","overflowy",$)),Ze(G,"r","flex-basis",M)),Ze(G,"r","flex-grow",K)),Ze(G,"r","flex-shrink",ee)),Ze(G,"r","grid-column",ne));return Q.createElement(Wr,{className:te({className:i,"navds-r-p":r,"navds-r-pi":a,"navds-r-pb":s,"navds-r-m":o,"navds-r-mi":d,"navds-r-mb":g,"navds-r-w":c,"navds-r-minw":m,"navds-r-maxw":h,"navds-r-h":v,"navds-r-minh":_,"navds-r-maxh":b,"navds-r-position":O,"navds-r-inset":T,"navds-r-top":E,"navds-r-right":R,"navds-r-bottom":S,"navds-r-left":D,"navds-r-overflow":z,"navds-r-overflowx":j,"navds-r-overflowy":$,"navds-r-flex-basis":M,"navds-r-flex-grow":K,"navds-r-flex-shrink":ee,"navds-r-grid-column":ne}),style:P},e)};var X1=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const J1=A.forwardRef((e,i)=>{var{children:r,className:a,as:s="div",columns:o,gap:d,style:g,align:c,asChild:m}=e,h=X1(e,["children","className","as","columns","gap","style","align","asChild"]);const _=fr(!1)?"ax":"a",{cn:b}=Fe(),O=Object.assign(Object.assign(Object.assign(Object.assign({},g),{[`--__${_}c-hgrid-align`]:c}),Tn(_,"hgrid","gap","spacing",d)),Ze(_,"hgrid","columns",Z1(o))),T=m?Wr:s;return Q.createElement(If,Object.assign({},h),Q.createElement(T,Object.assign({},zr(h,Sf),{ref:i,className:b("navds-hgrid",a,{"navds-hgrid-gap":d,"navds-hgrid-align":c}),style:O}),r))});function Z1(e){return e?typeof e=="string"||typeof e=="number"?ng(e):Object.fromEntries(Object.entries(e).map(([i,r])=>[i,ng(r)])):{}}const ng=e=>typeof e=="number"?`repeat(${e}, minmax(0, 1fr))`:e;var Q1=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const jf=A.forwardRef((e,i)=>{var{children:r,className:a,as:s="div",align:o,justify:d,wrap:g=!0,gap:c,style:m,direction:h="row",asChild:v}=e,_=Q1(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const O=fr(!1)?"ax":"a",{cn:T}=Fe(),E=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},m),Tn(O,"stack","gap","spacing",c)),Ze(O,"stack","direction",h)),Ze(O,"stack","align",o)),Ze(O,"stack","justify",d)),R=v?Wr:s;return Q.createElement(If,Object.assign({},_),Q.createElement(R,Object.assign({},zr(_,Sf),{ref:i,style:E,className:T("navds-stack",a,{"navds-vstack":h==="column","navds-hstack":h==="row","navds-stack-gap":c,"navds-stack-align":o,"navds-stack-justify":d,"navds-stack-direction":h,"navds-stack-wrap":g})}),r))});var eT=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const sr=A.forwardRef((e,i)=>{var{as:r="div"}=e,a=eT(e,["as"]);return Q.createElement(jf,Object.assign({as:r},a,{ref:i,direction:"row"}))});var nT=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const hi=A.forwardRef((e,i)=>{var{as:r="div"}=e,a=nT(e,["as"]);return Q.createElement(jf,Object.assign({as:r},a,{ref:i,direction:"column",wrap:!1}))}),ni=A.createContext({listType:"ul",size:"medium"});var tT=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const Nf=A.forwardRef((e,i)=>{var{className:r,children:a,title:s,icon:o}=e,d=tT(e,["className","children","title","icon"]);const{listType:g,size:c}=A.useContext(ni),{cn:m}=Fe();return g==="ol"&&o&&console.warn("<List />: Icon prop is not supported for ordered lists. Please remove the icon prop."),Q.createElement("li",Object.assign({},d,{ref:i,className:m("navds-list__item",r)}),g==="ul"&&Q.createElement("div",{className:m("navds-list__item-marker",{"navds-list__item-marker--icon":o,"navds-list__item-marker--bullet":!o})},o||Q.createElement("svg",{width:"0.375rem",height:"0.375rem",viewBox:"0 0 6 6",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,focusable:!1,role:"img"},Q.createElement("rect",{width:"6",height:"6",rx:"3",fill:"currentColor"}))),Q.createElement("div",null,s&&Q.createElement(ul,{as:"p",size:c,weight:"semibold"},s),a))});Nf.displayName="List.Item";var rT=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const aT={small:"xsmall",medium:"small",large:"medium"},ml=A.forwardRef((e,i)=>{var{children:r,className:a,as:s="ul",title:o,description:d,headingTag:g,size:c,"aria-label":m,"aria-labelledby":h}=e,v=rT(e,["children","className","as","title","description","headingTag","size","aria-label","aria-labelledby"]);const{size:_}=A.useContext(ni),{cn:b}=Fe(),O=fr(!1),T=c??_;return O?Q.createElement(ni.Provider,{value:{listType:s,size:T}},Q.createElement(ul,Object.assign({as:"div"},v,{size:T,ref:i,className:b("navds-list",`navds-list--${T}`,a)}),Q.createElement(s,{role:"list","aria-label":m,"aria-labelledby":h},r))):Q.createElement(ni.Provider,{value:{listType:s,size:T}},Q.createElement(ul,Object.assign({as:"div"},v,{size:T,ref:i,className:b("navds-list",`navds-list--${T}`,a)}),o&&Q.createElement(df,{size:aT[T],as:g??"h3"},o),d&&Q.createElement(ui,{size:T},d),Q.createElement(s,{role:"list","aria-label":m,"aria-labelledby":h},r)))});ml.Item=Nf;var iT=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const sT=A.forwardRef((e,i)=>{var{className:r}=e,a=iT(e,["className"]);const{cn:s}=Fe();return Q.createElement("tbody",Object.assign({},a,{ref:i,className:s("navds-table__body",r)}))});var lT=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const Of=A.forwardRef((e,i)=>{var{className:r,children:a,align:s,textSize:o}=e,d=lT(e,["className","children","align","textSize"]);const{cn:g}=Fe();return Q.createElement("th",Object.assign({ref:i,className:g("navds-table__header-cell","navds-label",r,{[`navds-table__header-cell--align-${s}`]:s,"navds-label--small":o==="small"})},d),a)}),Pf=A.createContext(null);var oT=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const uT=A.forwardRef((e,i)=>{var r,a,s,o,{className:d,children:g,sortable:c=!1,sortKey:m}=e,h=oT(e,["className","children","sortable","sortKey"]);const v=A.useContext(Pf),{cn:_}=Fe();return c&&!m&&console.warn("ColumnHeader with `sortable=true` must have a sortKey."),Q.createElement(Of,Object.assign({scope:"col",ref:i,className:_(d),"aria-sort":c?((r=v==null?void 0:v.sort)===null||r===void 0?void 0:r.orderBy)===m?(a=v==null?void 0:v.sort)===null||a===void 0?void 0:a.direction:"none":void 0},h),c?Q.createElement("button",{type:"button",className:_("navds-table__sort-button"),onClick:c&&m?()=>{var b;return(b=v==null?void 0:v.onSortChange)===null||b===void 0?void 0:b.call(v,m)}:void 0},g,((s=v==null?void 0:v.sort)===null||s===void 0?void 0:s.orderBy)===m?((o=v==null?void 0:v.sort)===null||o===void 0?void 0:o.direction)==="descending"?Q.createElement(x0,{"aria-hidden":!0}):Q.createElement(D0,{"aria-hidden":!0}):Q.createElement(R0,{"aria-hidden":!0})):g)});var dT=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const Bf=A.forwardRef((e,i)=>{var{className:r,children:a="",align:s,textSize:o}=e,d=dT(e,["className","children","align","textSize"]);const{cn:g}=Fe();return Q.createElement(ui,Object.assign({as:"td",ref:i,className:g("navds-table__data-cell",r,{[`navds-table__data-cell--align-${s}`]:s}),size:o},d),a)});var gT=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const fT=globalThis!=null&&globalThis.matchMedia?globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches:!1;function cT(e){const i=parseFloat(e);return!Number.isNaN(i)&&Number.isFinite(i)}function tg(e){return typeof e=="string"&&e[e.length-1]==="%"&&cT(e.substring(0,e.length-1))}function Zs(e,i){i===0&&(e!=null&&e.style)&&(e.style.display="none")}function mT(e,i){i===0&&(e!=null&&e.style)&&(e.style.display="")}const pT=e=>{var{children:i,className:r,innerClassName:a,duration:s=250,easing:o="ease",height:d}=e,g=gT(e,["children","className","innerClassName","duration","easing","height"]);const{cn:c}=Fe(),m=A.useRef(d),h=A.useRef(null),v=A.useRef(),_=A.useRef(),b=A.useRef(d),O=A.useRef("visible"),T=fT?0:s;typeof b.current=="number"?(typeof d!="string"&&(b.current=d<0?0:d),O.current="hidden"):tg(b.current)&&(b.current=d==="0%"?0:d,O.current="hidden");const[E,R]=A.useState(b.current),[D,S]=A.useState(O.current),[z,j]=A.useState(!1);A.useEffect(()=>{Zs(h.current,b.current)},[]),A.useEffect(()=>{if(d!==m.current&&h.current){mT(h.current,m.current),h.current.style.overflow="hidden";const ee=h.current.offsetHeight;h.current.style.overflow="";const ne=T;let X,te,G="hidden",P;const x=m.current==="auto";typeof d=="number"?(X=d<0?0:d,te=X):tg(d)?(X=d==="0%"?0:d,te=X):(X=ee,te="auto",G=void 0),x&&(te=X,X=ee),R(X),S("hidden"),j(!x),clearTimeout(_.current),clearTimeout(v.current),x?(P=!0,_.current=setTimeout(()=>{R(te),S(G),j(P)},50),v.current=setTimeout(()=>{j(!1),Zs(h.current,te)},ne)):_.current=setTimeout(()=>{R(te),S(G),j(!1),d!=="auto"&&Zs(h.current,X)},ne)}return m.current=d,()=>{clearTimeout(_.current),clearTimeout(v.current)}},[d]);const $={height:E,overflow:D};z&&($.transition=`height ${T}ms ${o} 0ms`,$.WebkitTransition=$.transition);const K=typeof g["aria-hidden"]<"u"?g["aria-hidden"]:d===0;return Q.createElement("div",Object.assign({},g,{className:c(r),style:$}),Q.createElement("div",{"aria-hidden":K,className:c(a),ref:h},i))};var hT=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const xf=A.forwardRef((e,i)=>{var{className:r,selected:a=!1,shadeOnHover:s=!0}=e,o=hT(e,["className","selected","shadeOnHover"]);const{cn:d}=Fe();return Q.createElement("tr",Object.assign({},o,{ref:i,className:d("navds-table__row",r,{"navds-table__row--selected":a,"navds-table__row--shade-on-hover":s})}))});var kT=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const vT=A.forwardRef((e,i)=>{var{className:r,children:a,content:s,togglePlacement:o="left",defaultOpen:d=!1,open:g,onOpenChange:c,expansionDisabled:m=!1,expandOnRowClick:h=!1,colSpan:v=999,contentGutter:_,onClick:b}=e,O=kT(e,["className","children","content","togglePlacement","defaultOpen","open","onOpenChange","expansionDisabled","expandOnRowClick","colSpan","contentGutter","onClick"]);const{cn:T}=Fe(),[E,R]=gf({defaultValue:d,value:g,onChange:c}),D=pi("global"),S=di(),z=$=>{R(M=>!M),$.stopPropagation()},j=$=>{h&&!m&&!qf($.target)&&z($)};return Q.createElement(Q.Fragment,null,Q.createElement(xf,Object.assign({},O,{ref:i,className:T("navds-table__expandable-row",r,{"navds-table__expandable-row--open":E,"navds-table__expandable-row--expansion-disabled":m,"navds-table__expandable-row--clickable":h}),onClick:Fl(b,j)}),o==="right"&&a,Q.createElement(Bf,{className:T("navds-table__toggle-expand-cell",{"navds-table__toggle-expand-cell--open":E}),onClick:m?()=>null:z},!m&&Q.createElement("button",{className:T("navds-table__toggle-expand-button"),type:"button","aria-controls":S,"aria-expanded":E,onClick:z},Q.createElement(I0,{className:T("navds-table__expandable-icon"),title:D(E?"showLess":"showMore")}))),o==="left"&&a),Q.createElement("tr",{"data-state":E?"open":"closed",className:T("navds-table__expanded-row"),"aria-hidden":!E,id:S},Q.createElement("td",{colSpan:v,className:T("navds-table__expanded-row-cell")},Q.createElement(pT,{className:T("navds-table__expanded-row-collapse"),innerClassName:T(`navds-table__expanded-row-content navds-table__expanded-row-content--gutter-${_??o}`),height:E?"auto":0,duration:150,easing:"cubic-bezier(0.39,0.57,0.56,1)"},s))))});function qf(e){return e.nodeName==="TD"||e.nodeName==="TH"||!e.parentElement?!1:["BUTTON","DETAILS","LABEL","SELECT","TEXTAREA","INPUT","A"].includes(e.nodeName)?!0:qf(e.parentElement)}var yT=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const bT=A.forwardRef((e,i)=>{var{className:r}=e,a=yT(e,["className"]);const{cn:s}=Fe();return Q.createElement("thead",Object.assign({},a,{ref:i,className:s("navds-table__header",r)}))});var ET=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const $e=A.forwardRef((e,i)=>{var{className:r,zebraStripes:a=!1,size:s="medium",onSortChange:o,sort:d}=e,g=ET(e,["className","zebraStripes","size","onSortChange","sort"]);const{cn:c}=Fe();return Q.createElement(Pf.Provider,{value:{onSortChange:o,sort:d}},Q.createElement("table",Object.assign({},g,{ref:i,className:c("navds-table",`navds-table--${s}`,r,{"navds-table--zebra-stripes":a})})))});$e.Header=bT;$e.Body=sT;$e.Row=xf;$e.ColumnHeader=uT;$e.HeaderCell=Of;$e.DataCell=Bf;$e.ExpandableRow=vT;var TT=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const _T=A.forwardRef((e,i)=>{var{children:r,className:a,arrow:s=!0,placement:o="top",open:d,defaultOpen:g=!1,onOpenChange:c,offset:m,content:h,delay:v=150,id:_,keys:b,maxChar:O=80,describesChild:T=!1}=e,E=TT(e,["children","className","arrow","placement","open","defaultOpen","onOpenChange","offset","content","delay","id","keys","maxChar","describesChild"]);const{cn:R}=Fe(),[D,S]=gf({defaultValue:g,value:d,onChange:c}),z=A.useRef(null),j=L0(!1),$=j?j.ref.current:void 0,{x:M,y:K,strategy:ee,context:ne,placement:X,middlewareData:{arrow:{x:te,y:G}={},hide:{referenceHidden:P}={}},refs:x}=K1({placement:o,open:D,onOpenChange:Z=>S(Z),middleware:[r1(m??(s?8:4)),a1(),i1({padding:5,fallbackPlacements:["bottom","top"]}),s1({element:z,padding:5})],whileElementsMounted:j?(Z,re,oe)=>Vd(Z,re,oe,{animationFrame:!0}):Vd,strategy:j?"fixed":void 0}),{getReferenceProps:F,getFloatingProps:C}=H1([q1(ne,{handleClose:U1(),restMs:v}),V1(ne),F1(ne)]),B=di(_),q=af(i,x.setFloating);if(!r||(r==null?void 0:r.type)===Q.Fragment||r===Q.Fragment)return console.error("<Tooltip> children needs to be a single ReactElement and not: <React.Fragment/> | <></>"),null;(h==null?void 0:h.length)>O&&D&&console.warn(`Because of strict accessibility concers we encourage all Tooltips to have less than 80 characters. Can be overwritten with the maxChar-prop

Length:${h.length}
Tooltip-content: ${h}`);const U=T?D?{"aria-describedby":B}:{title:h}:{"aria-label":h};return Q.createElement(Q.Fragment,null,Q.createElement(Wr,Object.assign({ref:x.setReference},F(),U,{"aria-keyshortcuts":b?b.join("+"):void 0}),r),Q.createElement(bE,{rootElement:$,asChild:!0},D&&Q.createElement("div",Object.assign({},C(Object.assign(Object.assign({},E),{ref:q,style:{position:ee,top:K??0,left:M??0,visibility:P?"hidden":"visible"},role:"tooltip",id:B,className:R("navds-tooltip","navds-detail navds-detail--small",a)})),{"data-side":X,"data-state":"open"}),h,b&&Q.createElement("span",{className:R("navds-tooltip__keys"),"aria-hidden":!0},b.map(Z=>Q.createElement(p0,{as:"kbd",key:Z,className:R("navds-tooltip__key")},Z))),s&&Q.createElement("div",{ref:Z=>{z.current=Z},className:R("navds-tooltip__arrow"),style:{left:te!=null?`${te}px`:"",top:G!=null?`${G}px`:"",right:"",bottom:"",[{top:"bottom",right:"left",bottom:"top",left:"right"}[X]]:"-3.5px"}}))))}),Df=A.createContext(null);var wT=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const Mf=A.forwardRef((e,i)=>{var r,{className:a,children:s,disabled:o,onClick:d}=e,g=wT(e,["className","children","disabled","onClick"]);const{cn:c}=Fe(),m=pi("Search"),h=A.useContext(Df);if(h===null)return console.warn("<Search.Button> has to be wrapped in <Search />"),null;const{size:v,variant:_,handleClick:b}=h;return Q.createElement($l,Object.assign({type:"submit"},g,{ref:i,size:v,variant:_==="secondary"?"secondary":"primary",className:c("navds-search__button-search",a),disabled:(r=h==null?void 0:h.disabled)!==null&&r!==void 0?r:o,onClick:Fl(d,b),icon:Q.createElement(ff,Object.assign({},s?{"aria-hidden":!0}:{title:m("search")}))}),s)});var AT=function(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const pl=A.forwardRef((e,i)=>{const{inputProps:r,size:a="medium",inputDescriptionId:s,errorId:o,showErrorMsg:d,hasError:g}=W1(e,"searchfield"),{className:c,hideLabel:m=!0,label:h,description:v,value:_,clearButtonLabel:b,onClear:O,clearButton:T=!0,children:E,variant:R="primary",defaultValue:D,onChange:S,onSearchClick:z,htmlSize:j}=e,$=AT(e,["className","hideLabel","label","description","value","clearButtonLabel","onClear","clearButton","children","variant","defaultValue","onChange","onSearchClick","htmlSize"]),{cn:M}=Fe(),K=fr(!1),ee=A.useRef(null),ne=af(ee,i),X=pi("Search"),[te,G]=A.useState(D??""),P=q=>{_===void 0&&G(q),S==null||S(q)},x=q=>{var U,Z;O==null||O(q),P(""),(Z=(U=ee.current)===null||U===void 0?void 0:U.focus)===null||Z===void 0||Z.call(U)},F=()=>{z==null||z(`${_??te}`)},C=T&&!r.disabled&&(_??te),B=()=>K?Q.createElement($l,{className:M("navds-search__button-clear"),variant:"tertiary-neutral",size:a==="medium"?"small":"xsmall",icon:Q.createElement(Ld,{"aria-hidden":!0}),title:b||X("clear"),hidden:!C,onClick:q=>x({trigger:"Click",event:q}),type:"button"}):Q.createElement("button",{type:"button",onClick:q=>x({trigger:"Click",event:q}),className:M("navds-search__button-clear"),hidden:!C},Q.createElement("span",{className:M("navds-sr-only")},b||X("clear")),Q.createElement(Ld,{"aria-hidden":!0}));return Q.createElement("div",{onKeyDown:q=>{var U;q.key==="Escape"&&(!((U=ee.current)===null||U===void 0)&&U.value&&q.preventDefault(),x({trigger:"Escape",event:q}))},className:M(c,"navds-form-field",`navds-form-field--${a}`,"navds-search",{"navds-search--error":g,"navds-search--disabled":r.disabled,"navds-search--with-size":j})},Q.createElement(Ll,{htmlFor:r.id,size:a,className:M("navds-form-field__label",{"navds-sr-only":m})},h),!!v&&Q.createElement(ui,{className:M("navds-form-field__description",{"navds-sr-only":m}),id:s,size:a,as:"div"},v),Q.createElement("div",{className:M("navds-search__wrapper")},Q.createElement("div",{className:M("navds-search__wrapper-inner")},R==="simple"&&Q.createElement(ff,{"aria-hidden":!0,className:M("navds-search__search-icon")}),Q.createElement("input",Object.assign({ref:ne},zr($,["error","errorId","size","readOnly"]),r,{value:_??te,onChange:q=>P(q.target.value),type:"search",className:M(c,"navds-search__input",`navds-search__input--${R}`,"navds-text-field__input","navds-body-short",`navds-body-short--${a}`)},j?{size:Number(j)}:{})),Q.createElement(B,null)),Q.createElement(Df.Provider,{value:{size:a,disabled:r.disabled,variant:R,handleClick:F}},E||R!=="simple"&&Q.createElement(Mf,null))),Q.createElement("div",{className:M("navds-form-field__error"),id:o,"aria-relevant":"additions removals","aria-live":"polite"},d&&Q.createElement(k0,{size:a,showIcon:!0},e.error)))});pl.Button=Mf;function RT(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var rg={exports:{}},Mr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ag;function ST(){if(ag)return Mr;ag=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(a,s,o){var d=null;if(o!==void 0&&(d=""+o),s.key!==void 0&&(d=""+s.key),"key"in s){o={};for(var g in s)g!=="key"&&(o[g]=s[g])}else o=s;return s=o.ref,{$$typeof:e,type:a,key:d,ref:s!==void 0?s:null,props:o}}return Mr.Fragment=i,Mr.jsx=r,Mr.jsxs=r,Mr}var ig;function IT(){return ig||(ig=1,rg.exports=ST()),rg.exports}var Rt=IT();const Qr={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"};xn(Qr);var sg={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var lg;function jT(){return lg||(lg=1,function(e){(function(){var i={}.hasOwnProperty;function r(){for(var o="",d=0;d<arguments.length;d++){var g=arguments[d];g&&(o=s(o,a.call(this,g)))}return o}function a(o){if(typeof o=="string"||typeof o=="number")return this&&this[o]||o;if(typeof o!="object")return"";if(Array.isArray(o))return r.apply(this,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var d="";for(var g in o)i.call(o,g)&&o[g]&&(d=s(d,this&&this[g]||g));return d}function s(o,d){return d?o?o+" "+d:o+d:o}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(sg)),sg.exports}var NT=jT();const Wl=RT(NT),OT="_borderbox_1vkvn_1",PT="_error_1vkvn_5",BT="_warning_1vkvn_8",xT={borderbox:OT,error:PT,warning:BT};Wl.bind(xT);const qT="_aksjonspunkt_kn1hn_1",DT="_erAksjonspunktApent_kn1hn_4",MT="_erIkkeGodkjentAvBeslutter_kn1hn_8",LT={aksjonspunkt:qT,erAksjonspunktApent:DT,erIkkeGodkjentAvBeslutter:MT};Wl.bind(LT);const Yr=({dateString:e,year:i,month:r,day:a})=>Rt.jsx(Rt.Fragment,{children:sf(e,{year:i,month:r,day:a})}),oi=({dateTimeString:e,...i})=>Rt.jsx(Rt.Fragment,{children:a0(e,i)});xn(Qr);xn(Qr);const FT="_divider_1t980_1",CT="_dividerParagraf_1t980_8",KT="_leftPanel_1t980_11",VT="_rightPanel_1t980_14",HT={divider:FT,dividerParagraf:CT,leftPanel:KT,rightPanel:VT};Wl.bind(HT);xn(Qr);const GT=xn(Qr),$T=({tekst:e,children:i})=>{const[r,a]=A.useState(!1);if(!e)return i;const s=async()=>{await navigator.clipboard.writeText(e),a(!0),setTimeout(()=>{a(!1)},1e3)};return Rt.jsx(_T,{content:GT.formatMessage({id:r?"KopierbarTekst.Kopiert":"KopierbarTekst.Kopier"}),children:Rt.jsx("span",{"aria-hidden":"true",onClick:s,children:i??e})})},og={default:"_default_1sbt3_1",rød:"_rød_1sbt3_5"},lr=({beløp:e,kr:i=!1,rød:r=!1})=>{const a=e==null?void 0:e.toString().replace(/\s/g,"");return Rt.jsx($T,{tekst:a,children:Rt.jsxs("span",{className:r?og.rød:og.default,children:[a?i0(a):"-",a&&i&&" kr"]})})},Xn=({tittel:e,children:i})=>H.jsxs(hi,{gap:"1",children:[H.jsx(Ll,{size:"medium",children:e}),i]});Xn.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingInfoBlokk",props:{tittel:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Lf=({arbeidsgiverOpplysninger:e,arbeidsgiverIdent:i})=>{const r=mt();return H.jsxs(Xn,{tittel:r.formatMessage({id:"InntektsmeldingFaktaPanel.arbeidsgiver.heading"}),children:[H.jsxs("span",{children:[H.jsx(xe,{id:"InntektsmeldingFaktaPanel.arbeidsgiver.navn"}),": ",e.navn]}),H.jsxs("span",{children:[H.jsx(xe,{id:"InntektsmeldingFaktaPanel.arbeidsgiver.underenhet"}),": ",i]})]})};Lf.__docgenInfo={description:"",methods:[],displayName:"Arbeidsgiver",props:{arbeidsgiverOpplysninger:{required:!0,tsType:{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`},description:""},arbeidsgiverIdent:{required:!0,tsType:{name:"string"},description:""}}};const Ff=({inntektsmelding:e,behandling:i,alleBehandlinger:r,alleKodeverk:a})=>{const s=mt(),o=e.tilknyttedeBehandlingIder.includes(i.uuid),d=r.filter(m=>e.tilknyttedeBehandlingIder.includes(m.uuid)),g=(()=>{const m=d.length;return o&&m>1?H.jsx(xe,{id:"InntektsmeldingFaktaPanel.behandling.bruktIDenneOgFlere"}):o?H.jsx(xe,{id:"InntektsmeldingFaktaPanel.behandling.bruktKunIDenne"}):m===0?H.jsx(xe,{id:"InntektsmeldingFaktaPanel.behandling.ikkeBruktINoen"}):H.jsx(xe,{id:"InntektsmeldingFaktaPanel.behandling.bruktIAndre"})})(),c=[...d].sort((m,h)=>new Date(m.opprettet).getTime()-new Date(h.opprettet).getTime());return H.jsxs(Xn,{tittel:s.formatMessage({id:"InntektsmeldingFaktaPanel.behandling.heading"}),children:[g,H.jsx(ml,{children:c.map(m=>{var h;return H.jsx(ml.Item,{children:H.jsxs(hi,{gap:"1",children:[H.jsx("span",{children:(h=a.BehandlingType.find(({kode:v})=>v===m.type))==null?void 0:h.navn}),H.jsxs("span",{children:[H.jsx(xe,{id:"InntektsmeldingFaktaPanel.behandling.opprettet"})," ",H.jsx(oi,{dateTimeString:m.opprettet,separator:"kl"})]}),m.avsluttet?H.jsxs("span",{children:[H.jsx(xe,{id:"InntektsmeldingFaktaPanel.behandling.avsluttet"})," ",H.jsx(oi,{dateTimeString:m.avsluttet,separator:"kl"})]}):null]})},m.uuid)})})]})};Ff.__docgenInfo={description:"",methods:[],displayName:"BehandlingsOversikt",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"VergeType",required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};function UT(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ug={exports:{}},Lr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dg;function YT(){if(dg)return Lr;dg=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(a,s,o){var d=null;if(o!==void 0&&(d=""+o),s.key!==void 0&&(d=""+s.key),"key"in s){o={};for(var g in s)g!=="key"&&(o[g]=s[g])}else o=s;return s=o.ref,{$$typeof:e,type:a,key:d,ref:s!==void 0?s:null,props:o}}return Lr.Fragment=i,Lr.jsx=r,Lr.jsxs=r,Lr}var gg;function WT(){return gg||(gg=1,ug.exports=YT()),ug.exports}WT();var hl={exports:{}},zT=hl.exports,fg;function XT(){return fg||(fg=1,function(e,i){(function(r,a){e.exports=a()})(zT,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},a=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,s=/\d/,o=/\d\d/,d=/\d\d?/,g=/\d*[^-_:/,()\s\d]+/,c={},m=function(E){return(E=+E)+(E>68?1900:2e3)},h=function(E){return function(R){this[E]=+R}},v=[/[+-]\d\d:?(\d\d)?|Z/,function(E){(this.zone||(this.zone={})).offset=function(R){if(!R||R==="Z")return 0;var D=R.match(/([+-]|\d\d)/g),S=60*D[1]+(+D[2]||0);return S===0?0:D[0]==="+"?-S:S}(E)}],_=function(E){var R=c[E];return R&&(R.indexOf?R:R.s.concat(R.f))},b=function(E,R){var D,S=c.meridiem;if(S){for(var z=1;z<=24;z+=1)if(E.indexOf(S(z,0,R))>-1){D=z>12;break}}else D=E===(R?"pm":"PM");return D},O={A:[g,function(E){this.afternoon=b(E,!1)}],a:[g,function(E){this.afternoon=b(E,!0)}],Q:[s,function(E){this.month=3*(E-1)+1}],S:[s,function(E){this.milliseconds=100*+E}],SS:[o,function(E){this.milliseconds=10*+E}],SSS:[/\d{3}/,function(E){this.milliseconds=+E}],s:[d,h("seconds")],ss:[d,h("seconds")],m:[d,h("minutes")],mm:[d,h("minutes")],H:[d,h("hours")],h:[d,h("hours")],HH:[d,h("hours")],hh:[d,h("hours")],D:[d,h("day")],DD:[o,h("day")],Do:[g,function(E){var R=c.ordinal,D=E.match(/\d+/);if(this.day=D[0],R)for(var S=1;S<=31;S+=1)R(S).replace(/\[|\]/g,"")===E&&(this.day=S)}],w:[d,h("week")],ww:[o,h("week")],M:[d,h("month")],MM:[o,h("month")],MMM:[g,function(E){var R=_("months"),D=(_("monthsShort")||R.map(function(S){return S.slice(0,3)})).indexOf(E)+1;if(D<1)throw new Error;this.month=D%12||D}],MMMM:[g,function(E){var R=_("months").indexOf(E)+1;if(R<1)throw new Error;this.month=R%12||R}],Y:[/[+-]?\d+/,h("year")],YY:[o,function(E){this.year=m(E)}],YYYY:[/\d{4}/,h("year")],Z:v,ZZ:v};function T(E){var R,D;R=E,D=c&&c.formats;for(var S=(E=R.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(ne,X,te){var G=te&&te.toUpperCase();return X||D[te]||r[te]||D[G].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(P,x,F){return x||F.slice(1)})})).match(a),z=S.length,j=0;j<z;j+=1){var $=S[j],M=O[$],K=M&&M[0],ee=M&&M[1];S[j]=ee?{regex:K,parser:ee}:$.replace(/^\[|\]$/g,"")}return function(ne){for(var X={},te=0,G=0;te<z;te+=1){var P=S[te];if(typeof P=="string")G+=P.length;else{var x=P.regex,F=P.parser,C=ne.slice(G),B=x.exec(C)[0];F.call(X,B),ne=ne.replace(B,"")}}return function(q){var U=q.afternoon;if(U!==void 0){var Z=q.hours;U?Z<12&&(q.hours+=12):Z===12&&(q.hours=0),delete q.afternoon}}(X),X}}return function(E,R,D){D.p.customParseFormat=!0,E&&E.parseTwoDigitYear&&(m=E.parseTwoDigitYear);var S=R.prototype,z=S.parse;S.parse=function(j){var $=j.date,M=j.utc,K=j.args;this.$u=M;var ee=K[1];if(typeof ee=="string"){var ne=K[2]===!0,X=K[3]===!0,te=ne||X,G=K[2];X&&(G=K[2]),c=this.$locale(),!ne&&G&&(c=D.Ls[G]),this.$d=function(C,B,q,U){try{if(["x","X"].indexOf(B)>-1)return new Date((B==="X"?1e3:1)*C);var Z=T(B)(C),re=Z.year,oe=Z.month,je=Z.day,Ee=Z.hours,Re=Z.minutes,Ne=Z.seconds,me=Z.milliseconds,ve=Z.zone,Ae=Z.week,Se=new Date,qe=je||(re||oe?1:Se.getDate()),Qe=re||Se.getFullYear(),He=0;re&&!oe||(He=oe>0?oe-1:Se.getMonth());var en,Qn=Ee||0,nn=Re||0,Vn=Ne||0,et=me||0;return ve?new Date(Date.UTC(Qe,He,qe,Qn,nn,Vn,et+60*ve.offset*1e3)):q?new Date(Date.UTC(Qe,He,qe,Qn,nn,Vn,et)):(en=new Date(Qe,He,qe,Qn,nn,Vn,et),Ae&&(en=U(en).week(Ae).toDate()),en)}catch{return new Date("")}}($,ee,M,D),this.init(),G&&G!==!0&&(this.$L=this.locale(G).$L),te&&$!=this.format(ee)&&(this.$d=new Date("")),c={}}else if(ee instanceof Array)for(var P=ee.length,x=1;x<=P;x+=1){K[1]=ee[x-1];var F=D.apply(this,K);if(F.isValid()){this.$d=F.$d,this.$L=F.$L,this.init();break}x===P&&(this.$d=new Date(""))}else z.call(this,j)}}})}(hl)),hl.exports}var JT=XT();const ZT=UT(JT);Ml.extend(ZT);function Cf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var kl={exports:{}},QT=kl.exports,cg;function e_(){return cg||(cg=1,function(e,i){(function(r,a){e.exports=a()})(QT,function(){return function(r,a){a.prototype.isSameOrAfter=function(s,o){return this.isSame(s,o)||this.isAfter(s,o)}}})}(kl)),kl.exports}var n_=e_();const t_=Cf(n_);var vl={exports:{}},r_=vl.exports,mg;function a_(){return mg||(mg=1,function(e,i){(function(r,a){e.exports=a()})(r_,function(){return function(r,a){a.prototype.isSameOrBefore=function(s,o){return this.isSame(s,o)||this.isBefore(s,o)}}})}(vl)),vl.exports}var i_=a_();const s_=Cf(i_),l_="Dato må være før eller lik {limit}",o_="Dato må være etter eller lik {limit}",u_="Perioder kan ikke overlappe i tid",d_="Perioder kan ikke overlappe i tid (uttak, utsettelse, gradering, overforing, opphold)",g_="Dato må være lik {value}",f_="Dato må skrives slik: dd.mm.åååå",c_="Periode må skrives slik: dd.mm.åååå - dd.mm.åååå",m_="Tallet kan ikke inneholde mer enn to desimaler",p_="Tallet kan ikke ha desimaler",h_="Feltet kan kun inneholde tall",k_="Ugyldig fødselsnummer",v_="Feltet må være et fødselsnummer (11 siffer)",y_="Ugyldig organisasjonsnummer.",b_="Ugyldig organisasjonsnummer eller fødselsnummer",E_="Startdato må være før eller lik sluttdato",T_="Periode er utenfor opptjeningsperioden",__="Ugyldig saksnummer eller fødselsnummer",w_="Feltet inneholder ugyldige tegn: {text}",A_="Feltet inneholder en ugyldig verdi: {value}",R_="Feltet kan ikke inneholde mellomrom",S_="Feltet må fylles ut",I_="Du kan skrive maksimalt {length} tegn",j_="Du må skrive minst {length} tegn",N_="Du kan skrive maksimalt {length} tegn eller et fødselsnummer (11 siffer)",O_="Feltet må være mindre eller lik {length}",P_="Feltet må være større eller lik {length}",B_="Fødselsnummer til den andre forelderen kan ikke være det samme som søker",x_={DateNotBeforeOrEqual:l_,DateNotAfterOrEqual:o_,DateRangesOverlapping:u_,DateRangesOverlappingPeriodTypes:d_,DatesNotEqual:g_,InvalidDate:f_,InvalidDatesInPeriod:c_,InvalidDecimal:m_,InvalidInteger:p_,InvalidNumber:h_,InvalidFodselsnr:k_,InvalidFodselsnrFormat:v_,InvalidOrgnr:y_,InvalidOrgnrOrFodselsnr:b_,InvalidPeriod:E_,InvalidPeriodRange:T_,InvalidSaksnrOrFodselsnrFormat:__,InvalidText:w_,InvalidValue:A_,IllegalWhiteSpace:R_,IsRequired:S_,MaxLength:I_,MinLength:j_,MaxLengthOrFodselsnr:N_,MaxValue:O_,MinValue:P_,SammeFodselsnrSomSoker:B_},{formatMessage:mR}=xn(x_);Ml.extend(t_);Ml.extend(s_);const ea={"AdresseVisning.Adresse":"Adresse","ForelderPanel.Soker":"Søker","ForelderPanel.AnnenForelder":"Annen forelder","AlleBarnPanel.Barn":"Barn","AlleBarnPanel.BarnNr":"Barn {nummer}","AlleBarnPanel.Fodt":"Født","AlleBarnPanel.Dod":"Død","PersonPanel.RolleOgNavn":"{rolle, select, BRUKER {Søker, } ANNEN_PART {Den andre forelderen, } BARN {Barnet, } other {} }{navn}","PersonPanel.Beskrivelse.Bruker":"Adresser for søker registrert i folkeregisteret gyldige for de siste 12 månedene","PersonPanel.Beskrivelse.Barn":"Adresser for barnet registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Beskrivelse.Annenpart":"Adresser for den andre forelderen registrert i folkeregisteret gyldige på skjæringstidspunktet","PersonPanel.Fodt":"Født {dato}","PersonPanel.Dod":"Død {dato}","AdresseTabell.IngenAdresse":"Ingen adresser funnet for {erAnnenpart, select, true {den andre forelderen} other {søker} }.","AdresseTabell.SammeAdresse":"Den andre forelderen har samme adresse som søker på skjæringstidspunktet","AdresseTabell.PeriodeLabel":"Periode","AdresseTabell.AdresseLabel":"Adresse","AdresseTabell.TypeLabel":"Type","MerkePanel.Dod":"DØD","MerkePanel.DodTittel":"Personen er død","MerkePanel.DodFodt":"DØDFØDT","MerkePanel.Diskresjon6":"Kode 6","MerkePanel.Diskresjon7":"Kode 7","MerkePanel.EgenAnsatt":"Nav","MerkePanel.Verge":"Verge","MerkePanel.Diskresjon6Tittel":"Personen har diskresjonsmerking kode 6","MerkePanel.Diskresjon7Tittel":"Personen har diskresjonsmerking kode 7","MerkePanel.EgenAnsattTittel":"Personen er ansatt i Nav","MerkePanel.VergeTittel":"Personen har verge","SubmitButton.ConfirmInformation":"Bekreft og fortsett","FaktaBegrunnelseTextField.BegrunnEndringene":"Begrunn endringene","FaktaBegrunnelseTextField.Vurdering":"Vurdering","FaktaBegrunnelseTextField.Begrunnelse":"Begrunnelse","TrueFalseInput.True":"Ja","TrueFalseInput.False":"Nei","FaktaKilde.Soknad":"FRA SØKNADEN","FaktaKilde.FREG":"FRA FOLKEREGISTERET","FaktaKilde.MEDL":"FRA MEDLEMSKAPSREGISTERET"};xn(ea);xn(ea);xn(ea);const q_=(e,i)=>{const r=new Date(e.tom??$r),a=new Date(i.tom??$r);if(r>a)return-1;if(r<a)return 1;if(e.fom&&!i.fom)return-1;if(!e.fom&&i.fom)return 1;if(e.fom&&i.fom){const s=new Date(e.fom),o=new Date(i.fom);if(s>o)return-1;if(s<o)return 1}return 0};var Vr={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var D_=Vr.exports,pg;function M_(){return pg||(pg=1,function(e,i){(function(){var r,a="4.17.21",s=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",d="Expected a function",g="Invalid `variable` option passed into `_.template`",c="__lodash_hash_undefined__",m=500,h="__lodash_placeholder__",v=1,_=2,b=4,O=1,T=2,E=1,R=2,D=4,S=8,z=16,j=32,$=64,M=128,K=256,ee=512,ne=30,X="...",te=800,G=16,P=1,x=2,F=3,C=1/0,B=9007199254740991,q=17976931348623157e292,U=NaN,Z=4294967295,re=Z-1,oe=Z>>>1,je=[["ary",M],["bind",E],["bindKey",R],["curry",S],["curryRight",z],["flip",ee],["partial",j],["partialRight",$],["rearg",K]],Ee="[object Arguments]",Re="[object Array]",Ne="[object AsyncFunction]",me="[object Boolean]",ve="[object Date]",Ae="[object DOMException]",Se="[object Error]",qe="[object Function]",Qe="[object GeneratorFunction]",He="[object Map]",en="[object Number]",Qn="[object Null]",nn="[object Object]",Vn="[object Promise]",et="[object Proxy]",hr="[object RegExp]",Dn="[object Set]",kr="[object String]",ia="[object Symbol]",Ec="[object Undefined]",vr="[object WeakMap]",Tc="[object WeakSet]",yr="[object ArrayBuffer]",Ht="[object DataView]",bi="[object Float32Array]",Ei="[object Float64Array]",Ti="[object Int8Array]",_i="[object Int16Array]",wi="[object Int32Array]",Ai="[object Uint8Array]",Ri="[object Uint8ClampedArray]",Si="[object Uint16Array]",Ii="[object Uint32Array]",_c=/\b__p \+= '';/g,wc=/\b(__p \+=) '' \+/g,Ac=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Zl=/&(?:amp|lt|gt|quot|#39);/g,Ql=/[&<>"']/g,Rc=RegExp(Zl.source),Sc=RegExp(Ql.source),Ic=/<%-([\s\S]+?)%>/g,jc=/<%([\s\S]+?)%>/g,eo=/<%=([\s\S]+?)%>/g,Nc=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Oc=/^\w*$/,Pc=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ji=/[\\^$.*+?()[\]{}|]/g,Bc=RegExp(ji.source),Ni=/^\s+/,xc=/\s/,qc=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Dc=/\{\n\/\* \[wrapped with (.+)\] \*/,Mc=/,? & /,Lc=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Fc=/[()=,{}\[\]\/\s]/,Cc=/\\(\\)?/g,Kc=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,no=/\w*$/,Vc=/^[-+]0x[0-9a-f]+$/i,Hc=/^0b[01]+$/i,Gc=/^\[object .+?Constructor\]$/,$c=/^0o[0-7]+$/i,Uc=/^(?:0|[1-9]\d*)$/,Yc=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,sa=/($^)/,Wc=/['\n\r\u2028\u2029\\]/g,la="\\ud800-\\udfff",zc="\\u0300-\\u036f",Xc="\\ufe20-\\ufe2f",Jc="\\u20d0-\\u20ff",to=zc+Xc+Jc,ro="\\u2700-\\u27bf",ao="a-z\\xdf-\\xf6\\xf8-\\xff",Zc="\\xac\\xb1\\xd7\\xf7",Qc="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",em="\\u2000-\\u206f",nm=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",io="A-Z\\xc0-\\xd6\\xd8-\\xde",so="\\ufe0e\\ufe0f",lo=Zc+Qc+em+nm,Oi="['’]",tm="["+la+"]",oo="["+lo+"]",oa="["+to+"]",uo="\\d+",rm="["+ro+"]",go="["+ao+"]",fo="[^"+la+lo+uo+ro+ao+io+"]",Pi="\\ud83c[\\udffb-\\udfff]",am="(?:"+oa+"|"+Pi+")",co="[^"+la+"]",Bi="(?:\\ud83c[\\udde6-\\uddff]){2}",xi="[\\ud800-\\udbff][\\udc00-\\udfff]",Gt="["+io+"]",mo="\\u200d",po="(?:"+go+"|"+fo+")",im="(?:"+Gt+"|"+fo+")",ho="(?:"+Oi+"(?:d|ll|m|re|s|t|ve))?",ko="(?:"+Oi+"(?:D|LL|M|RE|S|T|VE))?",vo=am+"?",yo="["+so+"]?",sm="(?:"+mo+"(?:"+[co,Bi,xi].join("|")+")"+yo+vo+")*",lm="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",om="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",bo=yo+vo+sm,um="(?:"+[rm,Bi,xi].join("|")+")"+bo,dm="(?:"+[co+oa+"?",oa,Bi,xi,tm].join("|")+")",gm=RegExp(Oi,"g"),fm=RegExp(oa,"g"),qi=RegExp(Pi+"(?="+Pi+")|"+dm+bo,"g"),cm=RegExp([Gt+"?"+go+"+"+ho+"(?="+[oo,Gt,"$"].join("|")+")",im+"+"+ko+"(?="+[oo,Gt+po,"$"].join("|")+")",Gt+"?"+po+"+"+ho,Gt+"+"+ko,om,lm,uo,um].join("|"),"g"),mm=RegExp("["+mo+la+to+so+"]"),pm=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,hm=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],km=-1,Ce={};Ce[bi]=Ce[Ei]=Ce[Ti]=Ce[_i]=Ce[wi]=Ce[Ai]=Ce[Ri]=Ce[Si]=Ce[Ii]=!0,Ce[Ee]=Ce[Re]=Ce[yr]=Ce[me]=Ce[Ht]=Ce[ve]=Ce[Se]=Ce[qe]=Ce[He]=Ce[en]=Ce[nn]=Ce[hr]=Ce[Dn]=Ce[kr]=Ce[vr]=!1;var Me={};Me[Ee]=Me[Re]=Me[yr]=Me[Ht]=Me[me]=Me[ve]=Me[bi]=Me[Ei]=Me[Ti]=Me[_i]=Me[wi]=Me[He]=Me[en]=Me[nn]=Me[hr]=Me[Dn]=Me[kr]=Me[ia]=Me[Ai]=Me[Ri]=Me[Si]=Me[Ii]=!0,Me[Se]=Me[qe]=Me[vr]=!1;var vm={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},ym={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},bm={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Em={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Tm=parseFloat,_m=parseInt,Eo=typeof Wa=="object"&&Wa&&Wa.Object===Object&&Wa,wm=typeof self=="object"&&self&&self.Object===Object&&self,tn=Eo||wm||Function("return this")(),Di=i&&!i.nodeType&&i,It=Di&&!0&&e&&!e.nodeType&&e,To=It&&It.exports===Di,Mi=To&&Eo.process,wn=function(){try{var I=It&&It.require&&It.require("util").types;return I||Mi&&Mi.binding&&Mi.binding("util")}catch{}}(),_o=wn&&wn.isArrayBuffer,wo=wn&&wn.isDate,Ao=wn&&wn.isMap,Ro=wn&&wn.isRegExp,So=wn&&wn.isSet,Io=wn&&wn.isTypedArray;function hn(I,V,L){switch(L.length){case 0:return I.call(V);case 1:return I.call(V,L[0]);case 2:return I.call(V,L[0],L[1]);case 3:return I.call(V,L[0],L[1],L[2])}return I.apply(V,L)}function Am(I,V,L,ie){for(var fe=-1,Ie=I==null?0:I.length;++fe<Ie;){var ze=I[fe];V(ie,ze,L(ze),I)}return ie}function An(I,V){for(var L=-1,ie=I==null?0:I.length;++L<ie&&V(I[L],L,I)!==!1;);return I}function Rm(I,V){for(var L=I==null?0:I.length;L--&&V(I[L],L,I)!==!1;);return I}function jo(I,V){for(var L=-1,ie=I==null?0:I.length;++L<ie;)if(!V(I[L],L,I))return!1;return!0}function ht(I,V){for(var L=-1,ie=I==null?0:I.length,fe=0,Ie=[];++L<ie;){var ze=I[L];V(ze,L,I)&&(Ie[fe++]=ze)}return Ie}function ua(I,V){var L=I==null?0:I.length;return!!L&&$t(I,V,0)>-1}function Li(I,V,L){for(var ie=-1,fe=I==null?0:I.length;++ie<fe;)if(L(V,I[ie]))return!0;return!1}function Ve(I,V){for(var L=-1,ie=I==null?0:I.length,fe=Array(ie);++L<ie;)fe[L]=V(I[L],L,I);return fe}function kt(I,V){for(var L=-1,ie=V.length,fe=I.length;++L<ie;)I[fe+L]=V[L];return I}function Fi(I,V,L,ie){var fe=-1,Ie=I==null?0:I.length;for(ie&&Ie&&(L=I[++fe]);++fe<Ie;)L=V(L,I[fe],fe,I);return L}function Sm(I,V,L,ie){var fe=I==null?0:I.length;for(ie&&fe&&(L=I[--fe]);fe--;)L=V(L,I[fe],fe,I);return L}function Ci(I,V){for(var L=-1,ie=I==null?0:I.length;++L<ie;)if(V(I[L],L,I))return!0;return!1}var Im=Ki("length");function jm(I){return I.split("")}function Nm(I){return I.match(Lc)||[]}function No(I,V,L){var ie;return L(I,function(fe,Ie,ze){if(V(fe,Ie,ze))return ie=Ie,!1}),ie}function da(I,V,L,ie){for(var fe=I.length,Ie=L+(ie?1:-1);ie?Ie--:++Ie<fe;)if(V(I[Ie],Ie,I))return Ie;return-1}function $t(I,V,L){return V===V?Vm(I,V,L):da(I,Oo,L)}function Om(I,V,L,ie){for(var fe=L-1,Ie=I.length;++fe<Ie;)if(ie(I[fe],V))return fe;return-1}function Oo(I){return I!==I}function Po(I,V){var L=I==null?0:I.length;return L?Hi(I,V)/L:U}function Ki(I){return function(V){return V==null?r:V[I]}}function Vi(I){return function(V){return I==null?r:I[V]}}function Bo(I,V,L,ie,fe){return fe(I,function(Ie,ze,De){L=ie?(ie=!1,Ie):V(L,Ie,ze,De)}),L}function Pm(I,V){var L=I.length;for(I.sort(V);L--;)I[L]=I[L].value;return I}function Hi(I,V){for(var L,ie=-1,fe=I.length;++ie<fe;){var Ie=V(I[ie]);Ie!==r&&(L=L===r?Ie:L+Ie)}return L}function Gi(I,V){for(var L=-1,ie=Array(I);++L<I;)ie[L]=V(L);return ie}function Bm(I,V){return Ve(V,function(L){return[L,I[L]]})}function xo(I){return I&&I.slice(0,Lo(I)+1).replace(Ni,"")}function kn(I){return function(V){return I(V)}}function $i(I,V){return Ve(V,function(L){return I[L]})}function br(I,V){return I.has(V)}function qo(I,V){for(var L=-1,ie=I.length;++L<ie&&$t(V,I[L],0)>-1;);return L}function Do(I,V){for(var L=I.length;L--&&$t(V,I[L],0)>-1;);return L}function xm(I,V){for(var L=I.length,ie=0;L--;)I[L]===V&&++ie;return ie}var qm=Vi(vm),Dm=Vi(ym);function Mm(I){return"\\"+Em[I]}function Lm(I,V){return I==null?r:I[V]}function Ut(I){return mm.test(I)}function Fm(I){return pm.test(I)}function Cm(I){for(var V,L=[];!(V=I.next()).done;)L.push(V.value);return L}function Ui(I){var V=-1,L=Array(I.size);return I.forEach(function(ie,fe){L[++V]=[fe,ie]}),L}function Mo(I,V){return function(L){return I(V(L))}}function vt(I,V){for(var L=-1,ie=I.length,fe=0,Ie=[];++L<ie;){var ze=I[L];(ze===V||ze===h)&&(I[L]=h,Ie[fe++]=L)}return Ie}function ga(I){var V=-1,L=Array(I.size);return I.forEach(function(ie){L[++V]=ie}),L}function Km(I){var V=-1,L=Array(I.size);return I.forEach(function(ie){L[++V]=[ie,ie]}),L}function Vm(I,V,L){for(var ie=L-1,fe=I.length;++ie<fe;)if(I[ie]===V)return ie;return-1}function Hm(I,V,L){for(var ie=L+1;ie--;)if(I[ie]===V)return ie;return ie}function Yt(I){return Ut(I)?$m(I):Im(I)}function Mn(I){return Ut(I)?Um(I):jm(I)}function Lo(I){for(var V=I.length;V--&&xc.test(I.charAt(V)););return V}var Gm=Vi(bm);function $m(I){for(var V=qi.lastIndex=0;qi.test(I);)++V;return V}function Um(I){return I.match(qi)||[]}function Ym(I){return I.match(cm)||[]}var Wm=function I(V){V=V==null?tn:Wt.defaults(tn.Object(),V,Wt.pick(tn,hm));var L=V.Array,ie=V.Date,fe=V.Error,Ie=V.Function,ze=V.Math,De=V.Object,Yi=V.RegExp,zm=V.String,Rn=V.TypeError,fa=L.prototype,Xm=Ie.prototype,zt=De.prototype,ca=V["__core-js_shared__"],ma=Xm.toString,Be=zt.hasOwnProperty,Jm=0,Fo=function(){var n=/[^.]+$/.exec(ca&&ca.keys&&ca.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),pa=zt.toString,Zm=ma.call(De),Qm=tn._,ep=Yi("^"+ma.call(Be).replace(ji,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ha=To?V.Buffer:r,yt=V.Symbol,ka=V.Uint8Array,Co=ha?ha.allocUnsafe:r,va=Mo(De.getPrototypeOf,De),Ko=De.create,Vo=zt.propertyIsEnumerable,ya=fa.splice,Ho=yt?yt.isConcatSpreadable:r,Er=yt?yt.iterator:r,jt=yt?yt.toStringTag:r,ba=function(){try{var n=xt(De,"defineProperty");return n({},"",{}),n}catch{}}(),np=V.clearTimeout!==tn.clearTimeout&&V.clearTimeout,tp=ie&&ie.now!==tn.Date.now&&ie.now,rp=V.setTimeout!==tn.setTimeout&&V.setTimeout,Ea=ze.ceil,Ta=ze.floor,Wi=De.getOwnPropertySymbols,ap=ha?ha.isBuffer:r,Go=V.isFinite,ip=fa.join,sp=Mo(De.keys,De),Xe=ze.max,an=ze.min,lp=ie.now,op=V.parseInt,$o=ze.random,up=fa.reverse,zi=xt(V,"DataView"),Tr=xt(V,"Map"),Xi=xt(V,"Promise"),Xt=xt(V,"Set"),_r=xt(V,"WeakMap"),wr=xt(De,"create"),_a=_r&&new _r,Jt={},dp=qt(zi),gp=qt(Tr),fp=qt(Xi),cp=qt(Xt),mp=qt(_r),wa=yt?yt.prototype:r,Ar=wa?wa.valueOf:r,Uo=wa?wa.toString:r;function p(n){if(Ue(n)&&!ce(n)&&!(n instanceof be)){if(n instanceof Sn)return n;if(Be.call(n,"__wrapped__"))return Yu(n)}return new Sn(n)}var Zt=function(){function n(){}return function(t){if(!Ge(t))return{};if(Ko)return Ko(t);n.prototype=t;var l=new n;return n.prototype=r,l}}();function Aa(){}function Sn(n,t){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=r}p.templateSettings={escape:Ic,evaluate:jc,interpolate:eo,variable:"",imports:{_:p}},p.prototype=Aa.prototype,p.prototype.constructor=p,Sn.prototype=Zt(Aa.prototype),Sn.prototype.constructor=Sn;function be(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Z,this.__views__=[]}function pp(){var n=new be(this.__wrapped__);return n.__actions__=gn(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=gn(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=gn(this.__views__),n}function hp(){if(this.__filtered__){var n=new be(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function kp(){var n=this.__wrapped__.value(),t=this.__dir__,l=ce(n),u=t<0,f=l?n.length:0,k=jh(0,f,this.__views__),y=k.start,w=k.end,N=w-y,Y=u?w:y-1,W=this.__iteratees__,J=W.length,ae=0,le=an(N,this.__takeCount__);if(!l||!u&&f==N&&le==N)return hu(n,this.__actions__);var de=[];e:for(;N--&&ae<le;){Y+=t;for(var he=-1,ge=n[Y];++he<J;){var ye=W[he],Te=ye.iteratee,bn=ye.type,un=Te(ge);if(bn==x)ge=un;else if(!un){if(bn==P)continue e;break e}}de[ae++]=ge}return de}be.prototype=Zt(Aa.prototype),be.prototype.constructor=be;function Nt(n){var t=-1,l=n==null?0:n.length;for(this.clear();++t<l;){var u=n[t];this.set(u[0],u[1])}}function vp(){this.__data__=wr?wr(null):{},this.size=0}function yp(n){var t=this.has(n)&&delete this.__data__[n];return this.size-=t?1:0,t}function bp(n){var t=this.__data__;if(wr){var l=t[n];return l===c?r:l}return Be.call(t,n)?t[n]:r}function Ep(n){var t=this.__data__;return wr?t[n]!==r:Be.call(t,n)}function Tp(n,t){var l=this.__data__;return this.size+=this.has(n)?0:1,l[n]=wr&&t===r?c:t,this}Nt.prototype.clear=vp,Nt.prototype.delete=yp,Nt.prototype.get=bp,Nt.prototype.has=Ep,Nt.prototype.set=Tp;function nt(n){var t=-1,l=n==null?0:n.length;for(this.clear();++t<l;){var u=n[t];this.set(u[0],u[1])}}function _p(){this.__data__=[],this.size=0}function wp(n){var t=this.__data__,l=Ra(t,n);if(l<0)return!1;var u=t.length-1;return l==u?t.pop():ya.call(t,l,1),--this.size,!0}function Ap(n){var t=this.__data__,l=Ra(t,n);return l<0?r:t[l][1]}function Rp(n){return Ra(this.__data__,n)>-1}function Sp(n,t){var l=this.__data__,u=Ra(l,n);return u<0?(++this.size,l.push([n,t])):l[u][1]=t,this}nt.prototype.clear=_p,nt.prototype.delete=wp,nt.prototype.get=Ap,nt.prototype.has=Rp,nt.prototype.set=Sp;function tt(n){var t=-1,l=n==null?0:n.length;for(this.clear();++t<l;){var u=n[t];this.set(u[0],u[1])}}function Ip(){this.size=0,this.__data__={hash:new Nt,map:new(Tr||nt),string:new Nt}}function jp(n){var t=La(this,n).delete(n);return this.size-=t?1:0,t}function Np(n){return La(this,n).get(n)}function Op(n){return La(this,n).has(n)}function Pp(n,t){var l=La(this,n),u=l.size;return l.set(n,t),this.size+=l.size==u?0:1,this}tt.prototype.clear=Ip,tt.prototype.delete=jp,tt.prototype.get=Np,tt.prototype.has=Op,tt.prototype.set=Pp;function Ot(n){var t=-1,l=n==null?0:n.length;for(this.__data__=new tt;++t<l;)this.add(n[t])}function Bp(n){return this.__data__.set(n,c),this}function xp(n){return this.__data__.has(n)}Ot.prototype.add=Ot.prototype.push=Bp,Ot.prototype.has=xp;function Ln(n){var t=this.__data__=new nt(n);this.size=t.size}function qp(){this.__data__=new nt,this.size=0}function Dp(n){var t=this.__data__,l=t.delete(n);return this.size=t.size,l}function Mp(n){return this.__data__.get(n)}function Lp(n){return this.__data__.has(n)}function Fp(n,t){var l=this.__data__;if(l instanceof nt){var u=l.__data__;if(!Tr||u.length<s-1)return u.push([n,t]),this.size=++l.size,this;l=this.__data__=new tt(u)}return l.set(n,t),this.size=l.size,this}Ln.prototype.clear=qp,Ln.prototype.delete=Dp,Ln.prototype.get=Mp,Ln.prototype.has=Lp,Ln.prototype.set=Fp;function Yo(n,t){var l=ce(n),u=!l&&Dt(n),f=!l&&!u&&wt(n),k=!l&&!u&&!f&&tr(n),y=l||u||f||k,w=y?Gi(n.length,zm):[],N=w.length;for(var Y in n)(t||Be.call(n,Y))&&!(y&&(Y=="length"||f&&(Y=="offset"||Y=="parent")||k&&(Y=="buffer"||Y=="byteLength"||Y=="byteOffset")||st(Y,N)))&&w.push(Y);return w}function Wo(n){var t=n.length;return t?n[ls(0,t-1)]:r}function Cp(n,t){return Fa(gn(n),Pt(t,0,n.length))}function Kp(n){return Fa(gn(n))}function Ji(n,t,l){(l!==r&&!Fn(n[t],l)||l===r&&!(t in n))&&rt(n,t,l)}function Rr(n,t,l){var u=n[t];(!(Be.call(n,t)&&Fn(u,l))||l===r&&!(t in n))&&rt(n,t,l)}function Ra(n,t){for(var l=n.length;l--;)if(Fn(n[l][0],t))return l;return-1}function Vp(n,t,l,u){return bt(n,function(f,k,y){t(u,f,l(f),y)}),u}function zo(n,t){return n&&Gn(t,Je(t),n)}function Hp(n,t){return n&&Gn(t,cn(t),n)}function rt(n,t,l){t=="__proto__"&&ba?ba(n,t,{configurable:!0,enumerable:!0,value:l,writable:!0}):n[t]=l}function Zi(n,t){for(var l=-1,u=t.length,f=L(u),k=n==null;++l<u;)f[l]=k?r:Ps(n,t[l]);return f}function Pt(n,t,l){return n===n&&(l!==r&&(n=n<=l?n:l),t!==r&&(n=n>=t?n:t)),n}function In(n,t,l,u,f,k){var y,w=t&v,N=t&_,Y=t&b;if(l&&(y=f?l(n,u,f,k):l(n)),y!==r)return y;if(!Ge(n))return n;var W=ce(n);if(W){if(y=Oh(n),!w)return gn(n,y)}else{var J=sn(n),ae=J==qe||J==Qe;if(wt(n))return yu(n,w);if(J==nn||J==Ee||ae&&!f){if(y=N||ae?{}:Lu(n),!w)return N?bh(n,Hp(y,n)):yh(n,zo(y,n))}else{if(!Me[J])return f?n:{};y=Ph(n,J,w)}}k||(k=new Ln);var le=k.get(n);if(le)return le;k.set(n,y),cd(n)?n.forEach(function(ge){y.add(In(ge,t,l,ge,n,k))}):gd(n)&&n.forEach(function(ge,ye){y.set(ye,In(ge,t,l,ye,n,k))});var de=Y?N?vs:ks:N?cn:Je,he=W?r:de(n);return An(he||n,function(ge,ye){he&&(ye=ge,ge=n[ye]),Rr(y,ye,In(ge,t,l,ye,n,k))}),y}function Gp(n){var t=Je(n);return function(l){return Xo(l,n,t)}}function Xo(n,t,l){var u=l.length;if(n==null)return!u;for(n=De(n);u--;){var f=l[u],k=t[f],y=n[f];if(y===r&&!(f in n)||!k(y))return!1}return!0}function Jo(n,t,l){if(typeof n!="function")throw new Rn(d);return Br(function(){n.apply(r,l)},t)}function Sr(n,t,l,u){var f=-1,k=ua,y=!0,w=n.length,N=[],Y=t.length;if(!w)return N;l&&(t=Ve(t,kn(l))),u?(k=Li,y=!1):t.length>=s&&(k=br,y=!1,t=new Ot(t));e:for(;++f<w;){var W=n[f],J=l==null?W:l(W);if(W=u||W!==0?W:0,y&&J===J){for(var ae=Y;ae--;)if(t[ae]===J)continue e;N.push(W)}else k(t,J,u)||N.push(W)}return N}var bt=wu(Hn),Zo=wu(es,!0);function $p(n,t){var l=!0;return bt(n,function(u,f,k){return l=!!t(u,f,k),l}),l}function Sa(n,t,l){for(var u=-1,f=n.length;++u<f;){var k=n[u],y=t(k);if(y!=null&&(w===r?y===y&&!yn(y):l(y,w)))var w=y,N=k}return N}function Up(n,t,l,u){var f=n.length;for(l=pe(l),l<0&&(l=-l>f?0:f+l),u=u===r||u>f?f:pe(u),u<0&&(u+=f),u=l>u?0:pd(u);l<u;)n[l++]=t;return n}function Qo(n,t){var l=[];return bt(n,function(u,f,k){t(u,f,k)&&l.push(u)}),l}function rn(n,t,l,u,f){var k=-1,y=n.length;for(l||(l=xh),f||(f=[]);++k<y;){var w=n[k];t>0&&l(w)?t>1?rn(w,t-1,l,u,f):kt(f,w):u||(f[f.length]=w)}return f}var Qi=Au(),eu=Au(!0);function Hn(n,t){return n&&Qi(n,t,Je)}function es(n,t){return n&&eu(n,t,Je)}function Ia(n,t){return ht(t,function(l){return lt(n[l])})}function Bt(n,t){t=Tt(t,n);for(var l=0,u=t.length;n!=null&&l<u;)n=n[$n(t[l++])];return l&&l==u?n:r}function nu(n,t,l){var u=t(n);return ce(n)?u:kt(u,l(n))}function ln(n){return n==null?n===r?Ec:Qn:jt&&jt in De(n)?Ih(n):Kh(n)}function ns(n,t){return n>t}function Yp(n,t){return n!=null&&Be.call(n,t)}function Wp(n,t){return n!=null&&t in De(n)}function zp(n,t,l){return n>=an(t,l)&&n<Xe(t,l)}function ts(n,t,l){for(var u=l?Li:ua,f=n[0].length,k=n.length,y=k,w=L(k),N=1/0,Y=[];y--;){var W=n[y];y&&t&&(W=Ve(W,kn(t))),N=an(W.length,N),w[y]=!l&&(t||f>=120&&W.length>=120)?new Ot(y&&W):r}W=n[0];var J=-1,ae=w[0];e:for(;++J<f&&Y.length<N;){var le=W[J],de=t?t(le):le;if(le=l||le!==0?le:0,!(ae?br(ae,de):u(Y,de,l))){for(y=k;--y;){var he=w[y];if(!(he?br(he,de):u(n[y],de,l)))continue e}ae&&ae.push(de),Y.push(le)}}return Y}function Xp(n,t,l,u){return Hn(n,function(f,k,y){t(u,l(f),k,y)}),u}function Ir(n,t,l){t=Tt(t,n),n=Vu(n,t);var u=n==null?n:n[$n(Nn(t))];return u==null?r:hn(u,n,l)}function tu(n){return Ue(n)&&ln(n)==Ee}function Jp(n){return Ue(n)&&ln(n)==yr}function Zp(n){return Ue(n)&&ln(n)==ve}function jr(n,t,l,u,f){return n===t?!0:n==null||t==null||!Ue(n)&&!Ue(t)?n!==n&&t!==t:Qp(n,t,l,u,jr,f)}function Qp(n,t,l,u,f,k){var y=ce(n),w=ce(t),N=y?Re:sn(n),Y=w?Re:sn(t);N=N==Ee?nn:N,Y=Y==Ee?nn:Y;var W=N==nn,J=Y==nn,ae=N==Y;if(ae&&wt(n)){if(!wt(t))return!1;y=!0,W=!1}if(ae&&!W)return k||(k=new Ln),y||tr(n)?qu(n,t,l,u,f,k):Rh(n,t,N,l,u,f,k);if(!(l&O)){var le=W&&Be.call(n,"__wrapped__"),de=J&&Be.call(t,"__wrapped__");if(le||de){var he=le?n.value():n,ge=de?t.value():t;return k||(k=new Ln),f(he,ge,l,u,k)}}return ae?(k||(k=new Ln),Sh(n,t,l,u,f,k)):!1}function eh(n){return Ue(n)&&sn(n)==He}function rs(n,t,l,u){var f=l.length,k=f,y=!u;if(n==null)return!k;for(n=De(n);f--;){var w=l[f];if(y&&w[2]?w[1]!==n[w[0]]:!(w[0]in n))return!1}for(;++f<k;){w=l[f];var N=w[0],Y=n[N],W=w[1];if(y&&w[2]){if(Y===r&&!(N in n))return!1}else{var J=new Ln;if(u)var ae=u(Y,W,N,n,t,J);if(!(ae===r?jr(W,Y,O|T,u,J):ae))return!1}}return!0}function ru(n){if(!Ge(n)||Dh(n))return!1;var t=lt(n)?ep:Gc;return t.test(qt(n))}function nh(n){return Ue(n)&&ln(n)==hr}function th(n){return Ue(n)&&sn(n)==Dn}function rh(n){return Ue(n)&&$a(n.length)&&!!Ce[ln(n)]}function au(n){return typeof n=="function"?n:n==null?mn:typeof n=="object"?ce(n)?lu(n[0],n[1]):su(n):Rd(n)}function as(n){if(!Pr(n))return sp(n);var t=[];for(var l in De(n))Be.call(n,l)&&l!="constructor"&&t.push(l);return t}function ah(n){if(!Ge(n))return Ch(n);var t=Pr(n),l=[];for(var u in n)u=="constructor"&&(t||!Be.call(n,u))||l.push(u);return l}function is(n,t){return n<t}function iu(n,t){var l=-1,u=fn(n)?L(n.length):[];return bt(n,function(f,k,y){u[++l]=t(f,k,y)}),u}function su(n){var t=bs(n);return t.length==1&&t[0][2]?Cu(t[0][0],t[0][1]):function(l){return l===n||rs(l,n,t)}}function lu(n,t){return Ts(n)&&Fu(t)?Cu($n(n),t):function(l){var u=Ps(l,n);return u===r&&u===t?Bs(l,n):jr(t,u,O|T)}}function ja(n,t,l,u,f){n!==t&&Qi(t,function(k,y){if(f||(f=new Ln),Ge(k))ih(n,t,y,l,ja,u,f);else{var w=u?u(ws(n,y),k,y+"",n,t,f):r;w===r&&(w=k),Ji(n,y,w)}},cn)}function ih(n,t,l,u,f,k,y){var w=ws(n,l),N=ws(t,l),Y=y.get(N);if(Y){Ji(n,l,Y);return}var W=k?k(w,N,l+"",n,t,y):r,J=W===r;if(J){var ae=ce(N),le=!ae&&wt(N),de=!ae&&!le&&tr(N);W=N,ae||le||de?ce(w)?W=w:Ye(w)?W=gn(w):le?(J=!1,W=yu(N,!0)):de?(J=!1,W=bu(N,!0)):W=[]:xr(N)||Dt(N)?(W=w,Dt(w)?W=hd(w):(!Ge(w)||lt(w))&&(W=Lu(N))):J=!1}J&&(y.set(N,W),f(W,N,u,k,y),y.delete(N)),Ji(n,l,W)}function ou(n,t){var l=n.length;if(l)return t+=t<0?l:0,st(t,l)?n[t]:r}function uu(n,t,l){t.length?t=Ve(t,function(k){return ce(k)?function(y){return Bt(y,k.length===1?k[0]:k)}:k}):t=[mn];var u=-1;t=Ve(t,kn(ue()));var f=iu(n,function(k,y,w){var N=Ve(t,function(Y){return Y(k)});return{criteria:N,index:++u,value:k}});return Pm(f,function(k,y){return vh(k,y,l)})}function sh(n,t){return du(n,t,function(l,u){return Bs(n,u)})}function du(n,t,l){for(var u=-1,f=t.length,k={};++u<f;){var y=t[u],w=Bt(n,y);l(w,y)&&Nr(k,Tt(y,n),w)}return k}function lh(n){return function(t){return Bt(t,n)}}function ss(n,t,l,u){var f=u?Om:$t,k=-1,y=t.length,w=n;for(n===t&&(t=gn(t)),l&&(w=Ve(n,kn(l)));++k<y;)for(var N=0,Y=t[k],W=l?l(Y):Y;(N=f(w,W,N,u))>-1;)w!==n&&ya.call(w,N,1),ya.call(n,N,1);return n}function gu(n,t){for(var l=n?t.length:0,u=l-1;l--;){var f=t[l];if(l==u||f!==k){var k=f;st(f)?ya.call(n,f,1):ds(n,f)}}return n}function ls(n,t){return n+Ta($o()*(t-n+1))}function oh(n,t,l,u){for(var f=-1,k=Xe(Ea((t-n)/(l||1)),0),y=L(k);k--;)y[u?k:++f]=n,n+=l;return y}function os(n,t){var l="";if(!n||t<1||t>B)return l;do t%2&&(l+=n),t=Ta(t/2),t&&(n+=n);while(t);return l}function ke(n,t){return As(Ku(n,t,mn),n+"")}function uh(n){return Wo(rr(n))}function dh(n,t){var l=rr(n);return Fa(l,Pt(t,0,l.length))}function Nr(n,t,l,u){if(!Ge(n))return n;t=Tt(t,n);for(var f=-1,k=t.length,y=k-1,w=n;w!=null&&++f<k;){var N=$n(t[f]),Y=l;if(N==="__proto__"||N==="constructor"||N==="prototype")return n;if(f!=y){var W=w[N];Y=u?u(W,N,w):r,Y===r&&(Y=Ge(W)?W:st(t[f+1])?[]:{})}Rr(w,N,Y),w=w[N]}return n}var fu=_a?function(n,t){return _a.set(n,t),n}:mn,gh=ba?function(n,t){return ba(n,"toString",{configurable:!0,enumerable:!1,value:qs(t),writable:!0})}:mn;function fh(n){return Fa(rr(n))}function jn(n,t,l){var u=-1,f=n.length;t<0&&(t=-t>f?0:f+t),l=l>f?f:l,l<0&&(l+=f),f=t>l?0:l-t>>>0,t>>>=0;for(var k=L(f);++u<f;)k[u]=n[u+t];return k}function ch(n,t){var l;return bt(n,function(u,f,k){return l=t(u,f,k),!l}),!!l}function Na(n,t,l){var u=0,f=n==null?u:n.length;if(typeof t=="number"&&t===t&&f<=oe){for(;u<f;){var k=u+f>>>1,y=n[k];y!==null&&!yn(y)&&(l?y<=t:y<t)?u=k+1:f=k}return f}return us(n,t,mn,l)}function us(n,t,l,u){var f=0,k=n==null?0:n.length;if(k===0)return 0;t=l(t);for(var y=t!==t,w=t===null,N=yn(t),Y=t===r;f<k;){var W=Ta((f+k)/2),J=l(n[W]),ae=J!==r,le=J===null,de=J===J,he=yn(J);if(y)var ge=u||de;else Y?ge=de&&(u||ae):w?ge=de&&ae&&(u||!le):N?ge=de&&ae&&!le&&(u||!he):le||he?ge=!1:ge=u?J<=t:J<t;ge?f=W+1:k=W}return an(k,re)}function cu(n,t){for(var l=-1,u=n.length,f=0,k=[];++l<u;){var y=n[l],w=t?t(y):y;if(!l||!Fn(w,N)){var N=w;k[f++]=y===0?0:y}}return k}function mu(n){return typeof n=="number"?n:yn(n)?U:+n}function vn(n){if(typeof n=="string")return n;if(ce(n))return Ve(n,vn)+"";if(yn(n))return Uo?Uo.call(n):"";var t=n+"";return t=="0"&&1/n==-1/0?"-0":t}function Et(n,t,l){var u=-1,f=ua,k=n.length,y=!0,w=[],N=w;if(l)y=!1,f=Li;else if(k>=s){var Y=t?null:wh(n);if(Y)return ga(Y);y=!1,f=br,N=new Ot}else N=t?[]:w;e:for(;++u<k;){var W=n[u],J=t?t(W):W;if(W=l||W!==0?W:0,y&&J===J){for(var ae=N.length;ae--;)if(N[ae]===J)continue e;t&&N.push(J),w.push(W)}else f(N,J,l)||(N!==w&&N.push(J),w.push(W))}return w}function ds(n,t){return t=Tt(t,n),n=Vu(n,t),n==null||delete n[$n(Nn(t))]}function pu(n,t,l,u){return Nr(n,t,l(Bt(n,t)),u)}function Oa(n,t,l,u){for(var f=n.length,k=u?f:-1;(u?k--:++k<f)&&t(n[k],k,n););return l?jn(n,u?0:k,u?k+1:f):jn(n,u?k+1:0,u?f:k)}function hu(n,t){var l=n;return l instanceof be&&(l=l.value()),Fi(t,function(u,f){return f.func.apply(f.thisArg,kt([u],f.args))},l)}function gs(n,t,l){var u=n.length;if(u<2)return u?Et(n[0]):[];for(var f=-1,k=L(u);++f<u;)for(var y=n[f],w=-1;++w<u;)w!=f&&(k[f]=Sr(k[f]||y,n[w],t,l));return Et(rn(k,1),t,l)}function ku(n,t,l){for(var u=-1,f=n.length,k=t.length,y={};++u<f;){var w=u<k?t[u]:r;l(y,n[u],w)}return y}function fs(n){return Ye(n)?n:[]}function cs(n){return typeof n=="function"?n:mn}function Tt(n,t){return ce(n)?n:Ts(n,t)?[n]:Uu(Oe(n))}var mh=ke;function _t(n,t,l){var u=n.length;return l=l===r?u:l,!t&&l>=u?n:jn(n,t,l)}var vu=np||function(n){return tn.clearTimeout(n)};function yu(n,t){if(t)return n.slice();var l=n.length,u=Co?Co(l):new n.constructor(l);return n.copy(u),u}function ms(n){var t=new n.constructor(n.byteLength);return new ka(t).set(new ka(n)),t}function ph(n,t){var l=t?ms(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.byteLength)}function hh(n){var t=new n.constructor(n.source,no.exec(n));return t.lastIndex=n.lastIndex,t}function kh(n){return Ar?De(Ar.call(n)):{}}function bu(n,t){var l=t?ms(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.length)}function Eu(n,t){if(n!==t){var l=n!==r,u=n===null,f=n===n,k=yn(n),y=t!==r,w=t===null,N=t===t,Y=yn(t);if(!w&&!Y&&!k&&n>t||k&&y&&N&&!w&&!Y||u&&y&&N||!l&&N||!f)return 1;if(!u&&!k&&!Y&&n<t||Y&&l&&f&&!u&&!k||w&&l&&f||!y&&f||!N)return-1}return 0}function vh(n,t,l){for(var u=-1,f=n.criteria,k=t.criteria,y=f.length,w=l.length;++u<y;){var N=Eu(f[u],k[u]);if(N){if(u>=w)return N;var Y=l[u];return N*(Y=="desc"?-1:1)}}return n.index-t.index}function Tu(n,t,l,u){for(var f=-1,k=n.length,y=l.length,w=-1,N=t.length,Y=Xe(k-y,0),W=L(N+Y),J=!u;++w<N;)W[w]=t[w];for(;++f<y;)(J||f<k)&&(W[l[f]]=n[f]);for(;Y--;)W[w++]=n[f++];return W}function _u(n,t,l,u){for(var f=-1,k=n.length,y=-1,w=l.length,N=-1,Y=t.length,W=Xe(k-w,0),J=L(W+Y),ae=!u;++f<W;)J[f]=n[f];for(var le=f;++N<Y;)J[le+N]=t[N];for(;++y<w;)(ae||f<k)&&(J[le+l[y]]=n[f++]);return J}function gn(n,t){var l=-1,u=n.length;for(t||(t=L(u));++l<u;)t[l]=n[l];return t}function Gn(n,t,l,u){var f=!l;l||(l={});for(var k=-1,y=t.length;++k<y;){var w=t[k],N=u?u(l[w],n[w],w,l,n):r;N===r&&(N=n[w]),f?rt(l,w,N):Rr(l,w,N)}return l}function yh(n,t){return Gn(n,Es(n),t)}function bh(n,t){return Gn(n,Du(n),t)}function Pa(n,t){return function(l,u){var f=ce(l)?Am:Vp,k=t?t():{};return f(l,n,ue(u,2),k)}}function Qt(n){return ke(function(t,l){var u=-1,f=l.length,k=f>1?l[f-1]:r,y=f>2?l[2]:r;for(k=n.length>3&&typeof k=="function"?(f--,k):r,y&&on(l[0],l[1],y)&&(k=f<3?r:k,f=1),t=De(t);++u<f;){var w=l[u];w&&n(t,w,u,k)}return t})}function wu(n,t){return function(l,u){if(l==null)return l;if(!fn(l))return n(l,u);for(var f=l.length,k=t?f:-1,y=De(l);(t?k--:++k<f)&&u(y[k],k,y)!==!1;);return l}}function Au(n){return function(t,l,u){for(var f=-1,k=De(t),y=u(t),w=y.length;w--;){var N=y[n?w:++f];if(l(k[N],N,k)===!1)break}return t}}function Eh(n,t,l){var u=t&E,f=Or(n);function k(){var y=this&&this!==tn&&this instanceof k?f:n;return y.apply(u?l:this,arguments)}return k}function Ru(n){return function(t){t=Oe(t);var l=Ut(t)?Mn(t):r,u=l?l[0]:t.charAt(0),f=l?_t(l,1).join(""):t.slice(1);return u[n]()+f}}function er(n){return function(t){return Fi(wd(_d(t).replace(gm,"")),n,"")}}function Or(n){return function(){var t=arguments;switch(t.length){case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var l=Zt(n.prototype),u=n.apply(l,t);return Ge(u)?u:l}}function Th(n,t,l){var u=Or(n);function f(){for(var k=arguments.length,y=L(k),w=k,N=nr(f);w--;)y[w]=arguments[w];var Y=k<3&&y[0]!==N&&y[k-1]!==N?[]:vt(y,N);if(k-=Y.length,k<l)return Ou(n,t,Ba,f.placeholder,r,y,Y,r,r,l-k);var W=this&&this!==tn&&this instanceof f?u:n;return hn(W,this,y)}return f}function Su(n){return function(t,l,u){var f=De(t);if(!fn(t)){var k=ue(l,3);t=Je(t),l=function(w){return k(f[w],w,f)}}var y=n(t,l,u);return y>-1?f[k?t[y]:y]:r}}function Iu(n){return it(function(t){var l=t.length,u=l,f=Sn.prototype.thru;for(n&&t.reverse();u--;){var k=t[u];if(typeof k!="function")throw new Rn(d);if(f&&!y&&Ma(k)=="wrapper")var y=new Sn([],!0)}for(u=y?u:l;++u<l;){k=t[u];var w=Ma(k),N=w=="wrapper"?ys(k):r;N&&_s(N[0])&&N[1]==(M|S|j|K)&&!N[4].length&&N[9]==1?y=y[Ma(N[0])].apply(y,N[3]):y=k.length==1&&_s(k)?y[w]():y.thru(k)}return function(){var Y=arguments,W=Y[0];if(y&&Y.length==1&&ce(W))return y.plant(W).value();for(var J=0,ae=l?t[J].apply(this,Y):W;++J<l;)ae=t[J].call(this,ae);return ae}})}function Ba(n,t,l,u,f,k,y,w,N,Y){var W=t&M,J=t&E,ae=t&R,le=t&(S|z),de=t&ee,he=ae?r:Or(n);function ge(){for(var ye=arguments.length,Te=L(ye),bn=ye;bn--;)Te[bn]=arguments[bn];if(le)var un=nr(ge),En=xm(Te,un);if(u&&(Te=Tu(Te,u,f,le)),k&&(Te=_u(Te,k,y,le)),ye-=En,le&&ye<Y){var We=vt(Te,un);return Ou(n,t,Ba,ge.placeholder,l,Te,We,w,N,Y-ye)}var Cn=J?l:this,ut=ae?Cn[n]:n;return ye=Te.length,w?Te=Vh(Te,w):de&&ye>1&&Te.reverse(),W&&N<ye&&(Te.length=N),this&&this!==tn&&this instanceof ge&&(ut=he||Or(ut)),ut.apply(Cn,Te)}return ge}function ju(n,t){return function(l,u){return Xp(l,n,t(u),{})}}function xa(n,t){return function(l,u){var f;if(l===r&&u===r)return t;if(l!==r&&(f=l),u!==r){if(f===r)return u;typeof l=="string"||typeof u=="string"?(l=vn(l),u=vn(u)):(l=mu(l),u=mu(u)),f=n(l,u)}return f}}function ps(n){return it(function(t){return t=Ve(t,kn(ue())),ke(function(l){var u=this;return n(t,function(f){return hn(f,u,l)})})})}function qa(n,t){t=t===r?" ":vn(t);var l=t.length;if(l<2)return l?os(t,n):t;var u=os(t,Ea(n/Yt(t)));return Ut(t)?_t(Mn(u),0,n).join(""):u.slice(0,n)}function _h(n,t,l,u){var f=t&E,k=Or(n);function y(){for(var w=-1,N=arguments.length,Y=-1,W=u.length,J=L(W+N),ae=this&&this!==tn&&this instanceof y?k:n;++Y<W;)J[Y]=u[Y];for(;N--;)J[Y++]=arguments[++w];return hn(ae,f?l:this,J)}return y}function Nu(n){return function(t,l,u){return u&&typeof u!="number"&&on(t,l,u)&&(l=u=r),t=ot(t),l===r?(l=t,t=0):l=ot(l),u=u===r?t<l?1:-1:ot(u),oh(t,l,u,n)}}function Da(n){return function(t,l){return typeof t=="string"&&typeof l=="string"||(t=On(t),l=On(l)),n(t,l)}}function Ou(n,t,l,u,f,k,y,w,N,Y){var W=t&S,J=W?y:r,ae=W?r:y,le=W?k:r,de=W?r:k;t|=W?j:$,t&=~(W?$:j),t&D||(t&=-4);var he=[n,t,f,le,J,de,ae,w,N,Y],ge=l.apply(r,he);return _s(n)&&Hu(ge,he),ge.placeholder=u,Gu(ge,n,t)}function hs(n){var t=ze[n];return function(l,u){if(l=On(l),u=u==null?0:an(pe(u),292),u&&Go(l)){var f=(Oe(l)+"e").split("e"),k=t(f[0]+"e"+(+f[1]+u));return f=(Oe(k)+"e").split("e"),+(f[0]+"e"+(+f[1]-u))}return t(l)}}var wh=Xt&&1/ga(new Xt([,-0]))[1]==C?function(n){return new Xt(n)}:Ls;function Pu(n){return function(t){var l=sn(t);return l==He?Ui(t):l==Dn?Km(t):Bm(t,n(t))}}function at(n,t,l,u,f,k,y,w){var N=t&R;if(!N&&typeof n!="function")throw new Rn(d);var Y=u?u.length:0;if(Y||(t&=-97,u=f=r),y=y===r?y:Xe(pe(y),0),w=w===r?w:pe(w),Y-=f?f.length:0,t&$){var W=u,J=f;u=f=r}var ae=N?r:ys(n),le=[n,t,l,u,f,W,J,k,y,w];if(ae&&Fh(le,ae),n=le[0],t=le[1],l=le[2],u=le[3],f=le[4],w=le[9]=le[9]===r?N?0:n.length:Xe(le[9]-Y,0),!w&&t&(S|z)&&(t&=-25),!t||t==E)var de=Eh(n,t,l);else t==S||t==z?de=Th(n,t,w):(t==j||t==(E|j))&&!f.length?de=_h(n,t,l,u):de=Ba.apply(r,le);var he=ae?fu:Hu;return Gu(he(de,le),n,t)}function Bu(n,t,l,u){return n===r||Fn(n,zt[l])&&!Be.call(u,l)?t:n}function xu(n,t,l,u,f,k){return Ge(n)&&Ge(t)&&(k.set(t,n),ja(n,t,r,xu,k),k.delete(t)),n}function Ah(n){return xr(n)?r:n}function qu(n,t,l,u,f,k){var y=l&O,w=n.length,N=t.length;if(w!=N&&!(y&&N>w))return!1;var Y=k.get(n),W=k.get(t);if(Y&&W)return Y==t&&W==n;var J=-1,ae=!0,le=l&T?new Ot:r;for(k.set(n,t),k.set(t,n);++J<w;){var de=n[J],he=t[J];if(u)var ge=y?u(he,de,J,t,n,k):u(de,he,J,n,t,k);if(ge!==r){if(ge)continue;ae=!1;break}if(le){if(!Ci(t,function(ye,Te){if(!br(le,Te)&&(de===ye||f(de,ye,l,u,k)))return le.push(Te)})){ae=!1;break}}else if(!(de===he||f(de,he,l,u,k))){ae=!1;break}}return k.delete(n),k.delete(t),ae}function Rh(n,t,l,u,f,k,y){switch(l){case Ht:if(n.byteLength!=t.byteLength||n.byteOffset!=t.byteOffset)return!1;n=n.buffer,t=t.buffer;case yr:return!(n.byteLength!=t.byteLength||!k(new ka(n),new ka(t)));case me:case ve:case en:return Fn(+n,+t);case Se:return n.name==t.name&&n.message==t.message;case hr:case kr:return n==t+"";case He:var w=Ui;case Dn:var N=u&O;if(w||(w=ga),n.size!=t.size&&!N)return!1;var Y=y.get(n);if(Y)return Y==t;u|=T,y.set(n,t);var W=qu(w(n),w(t),u,f,k,y);return y.delete(n),W;case ia:if(Ar)return Ar.call(n)==Ar.call(t)}return!1}function Sh(n,t,l,u,f,k){var y=l&O,w=ks(n),N=w.length,Y=ks(t),W=Y.length;if(N!=W&&!y)return!1;for(var J=N;J--;){var ae=w[J];if(!(y?ae in t:Be.call(t,ae)))return!1}var le=k.get(n),de=k.get(t);if(le&&de)return le==t&&de==n;var he=!0;k.set(n,t),k.set(t,n);for(var ge=y;++J<N;){ae=w[J];var ye=n[ae],Te=t[ae];if(u)var bn=y?u(Te,ye,ae,t,n,k):u(ye,Te,ae,n,t,k);if(!(bn===r?ye===Te||f(ye,Te,l,u,k):bn)){he=!1;break}ge||(ge=ae=="constructor")}if(he&&!ge){var un=n.constructor,En=t.constructor;un!=En&&"constructor"in n&&"constructor"in t&&!(typeof un=="function"&&un instanceof un&&typeof En=="function"&&En instanceof En)&&(he=!1)}return k.delete(n),k.delete(t),he}function it(n){return As(Ku(n,r,Xu),n+"")}function ks(n){return nu(n,Je,Es)}function vs(n){return nu(n,cn,Du)}var ys=_a?function(n){return _a.get(n)}:Ls;function Ma(n){for(var t=n.name+"",l=Jt[t],u=Be.call(Jt,t)?l.length:0;u--;){var f=l[u],k=f.func;if(k==null||k==n)return f.name}return t}function nr(n){var t=Be.call(p,"placeholder")?p:n;return t.placeholder}function ue(){var n=p.iteratee||Ds;return n=n===Ds?au:n,arguments.length?n(arguments[0],arguments[1]):n}function La(n,t){var l=n.__data__;return qh(t)?l[typeof t=="string"?"string":"hash"]:l.map}function bs(n){for(var t=Je(n),l=t.length;l--;){var u=t[l],f=n[u];t[l]=[u,f,Fu(f)]}return t}function xt(n,t){var l=Lm(n,t);return ru(l)?l:r}function Ih(n){var t=Be.call(n,jt),l=n[jt];try{n[jt]=r;var u=!0}catch{}var f=pa.call(n);return u&&(t?n[jt]=l:delete n[jt]),f}var Es=Wi?function(n){return n==null?[]:(n=De(n),ht(Wi(n),function(t){return Vo.call(n,t)}))}:Fs,Du=Wi?function(n){for(var t=[];n;)kt(t,Es(n)),n=va(n);return t}:Fs,sn=ln;(zi&&sn(new zi(new ArrayBuffer(1)))!=Ht||Tr&&sn(new Tr)!=He||Xi&&sn(Xi.resolve())!=Vn||Xt&&sn(new Xt)!=Dn||_r&&sn(new _r)!=vr)&&(sn=function(n){var t=ln(n),l=t==nn?n.constructor:r,u=l?qt(l):"";if(u)switch(u){case dp:return Ht;case gp:return He;case fp:return Vn;case cp:return Dn;case mp:return vr}return t});function jh(n,t,l){for(var u=-1,f=l.length;++u<f;){var k=l[u],y=k.size;switch(k.type){case"drop":n+=y;break;case"dropRight":t-=y;break;case"take":t=an(t,n+y);break;case"takeRight":n=Xe(n,t-y);break}}return{start:n,end:t}}function Nh(n){var t=n.match(Dc);return t?t[1].split(Mc):[]}function Mu(n,t,l){t=Tt(t,n);for(var u=-1,f=t.length,k=!1;++u<f;){var y=$n(t[u]);if(!(k=n!=null&&l(n,y)))break;n=n[y]}return k||++u!=f?k:(f=n==null?0:n.length,!!f&&$a(f)&&st(y,f)&&(ce(n)||Dt(n)))}function Oh(n){var t=n.length,l=new n.constructor(t);return t&&typeof n[0]=="string"&&Be.call(n,"index")&&(l.index=n.index,l.input=n.input),l}function Lu(n){return typeof n.constructor=="function"&&!Pr(n)?Zt(va(n)):{}}function Ph(n,t,l){var u=n.constructor;switch(t){case yr:return ms(n);case me:case ve:return new u(+n);case Ht:return ph(n,l);case bi:case Ei:case Ti:case _i:case wi:case Ai:case Ri:case Si:case Ii:return bu(n,l);case He:return new u;case en:case kr:return new u(n);case hr:return hh(n);case Dn:return new u;case ia:return kh(n)}}function Bh(n,t){var l=t.length;if(!l)return n;var u=l-1;return t[u]=(l>1?"& ":"")+t[u],t=t.join(l>2?", ":" "),n.replace(qc,`{
/* [wrapped with `+t+`] */
`)}function xh(n){return ce(n)||Dt(n)||!!(Ho&&n&&n[Ho])}function st(n,t){var l=typeof n;return t=t??B,!!t&&(l=="number"||l!="symbol"&&Uc.test(n))&&n>-1&&n%1==0&&n<t}function on(n,t,l){if(!Ge(l))return!1;var u=typeof t;return(u=="number"?fn(l)&&st(t,l.length):u=="string"&&t in l)?Fn(l[t],n):!1}function Ts(n,t){if(ce(n))return!1;var l=typeof n;return l=="number"||l=="symbol"||l=="boolean"||n==null||yn(n)?!0:Oc.test(n)||!Nc.test(n)||t!=null&&n in De(t)}function qh(n){var t=typeof n;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?n!=="__proto__":n===null}function _s(n){var t=Ma(n),l=p[t];if(typeof l!="function"||!(t in be.prototype))return!1;if(n===l)return!0;var u=ys(l);return!!u&&n===u[0]}function Dh(n){return!!Fo&&Fo in n}var Mh=ca?lt:Cs;function Pr(n){var t=n&&n.constructor,l=typeof t=="function"&&t.prototype||zt;return n===l}function Fu(n){return n===n&&!Ge(n)}function Cu(n,t){return function(l){return l==null?!1:l[n]===t&&(t!==r||n in De(l))}}function Lh(n){var t=Ha(n,function(u){return l.size===m&&l.clear(),u}),l=t.cache;return t}function Fh(n,t){var l=n[1],u=t[1],f=l|u,k=f<(E|R|M),y=u==M&&l==S||u==M&&l==K&&n[7].length<=t[8]||u==(M|K)&&t[7].length<=t[8]&&l==S;if(!(k||y))return n;u&E&&(n[2]=t[2],f|=l&E?0:D);var w=t[3];if(w){var N=n[3];n[3]=N?Tu(N,w,t[4]):w,n[4]=N?vt(n[3],h):t[4]}return w=t[5],w&&(N=n[5],n[5]=N?_u(N,w,t[6]):w,n[6]=N?vt(n[5],h):t[6]),w=t[7],w&&(n[7]=w),u&M&&(n[8]=n[8]==null?t[8]:an(n[8],t[8])),n[9]==null&&(n[9]=t[9]),n[0]=t[0],n[1]=f,n}function Ch(n){var t=[];if(n!=null)for(var l in De(n))t.push(l);return t}function Kh(n){return pa.call(n)}function Ku(n,t,l){return t=Xe(t===r?n.length-1:t,0),function(){for(var u=arguments,f=-1,k=Xe(u.length-t,0),y=L(k);++f<k;)y[f]=u[t+f];f=-1;for(var w=L(t+1);++f<t;)w[f]=u[f];return w[t]=l(y),hn(n,this,w)}}function Vu(n,t){return t.length<2?n:Bt(n,jn(t,0,-1))}function Vh(n,t){for(var l=n.length,u=an(t.length,l),f=gn(n);u--;){var k=t[u];n[u]=st(k,l)?f[k]:r}return n}function ws(n,t){if(!(t==="constructor"&&typeof n[t]=="function")&&t!="__proto__")return n[t]}var Hu=$u(fu),Br=rp||function(n,t){return tn.setTimeout(n,t)},As=$u(gh);function Gu(n,t,l){var u=t+"";return As(n,Bh(u,Hh(Nh(u),l)))}function $u(n){var t=0,l=0;return function(){var u=lp(),f=G-(u-l);if(l=u,f>0){if(++t>=te)return arguments[0]}else t=0;return n.apply(r,arguments)}}function Fa(n,t){var l=-1,u=n.length,f=u-1;for(t=t===r?u:t;++l<t;){var k=ls(l,f),y=n[k];n[k]=n[l],n[l]=y}return n.length=t,n}var Uu=Lh(function(n){var t=[];return n.charCodeAt(0)===46&&t.push(""),n.replace(Pc,function(l,u,f,k){t.push(f?k.replace(Cc,"$1"):u||l)}),t});function $n(n){if(typeof n=="string"||yn(n))return n;var t=n+"";return t=="0"&&1/n==-1/0?"-0":t}function qt(n){if(n!=null){try{return ma.call(n)}catch{}try{return n+""}catch{}}return""}function Hh(n,t){return An(je,function(l){var u="_."+l[0];t&l[1]&&!ua(n,u)&&n.push(u)}),n.sort()}function Yu(n){if(n instanceof be)return n.clone();var t=new Sn(n.__wrapped__,n.__chain__);return t.__actions__=gn(n.__actions__),t.__index__=n.__index__,t.__values__=n.__values__,t}function Gh(n,t,l){(l?on(n,t,l):t===r)?t=1:t=Xe(pe(t),0);var u=n==null?0:n.length;if(!u||t<1)return[];for(var f=0,k=0,y=L(Ea(u/t));f<u;)y[k++]=jn(n,f,f+=t);return y}function $h(n){for(var t=-1,l=n==null?0:n.length,u=0,f=[];++t<l;){var k=n[t];k&&(f[u++]=k)}return f}function Uh(){var n=arguments.length;if(!n)return[];for(var t=L(n-1),l=arguments[0],u=n;u--;)t[u-1]=arguments[u];return kt(ce(l)?gn(l):[l],rn(t,1))}var Yh=ke(function(n,t){return Ye(n)?Sr(n,rn(t,1,Ye,!0)):[]}),Wh=ke(function(n,t){var l=Nn(t);return Ye(l)&&(l=r),Ye(n)?Sr(n,rn(t,1,Ye,!0),ue(l,2)):[]}),zh=ke(function(n,t){var l=Nn(t);return Ye(l)&&(l=r),Ye(n)?Sr(n,rn(t,1,Ye,!0),r,l):[]});function Xh(n,t,l){var u=n==null?0:n.length;return u?(t=l||t===r?1:pe(t),jn(n,t<0?0:t,u)):[]}function Jh(n,t,l){var u=n==null?0:n.length;return u?(t=l||t===r?1:pe(t),t=u-t,jn(n,0,t<0?0:t)):[]}function Zh(n,t){return n&&n.length?Oa(n,ue(t,3),!0,!0):[]}function Qh(n,t){return n&&n.length?Oa(n,ue(t,3),!0):[]}function ek(n,t,l,u){var f=n==null?0:n.length;return f?(l&&typeof l!="number"&&on(n,t,l)&&(l=0,u=f),Up(n,t,l,u)):[]}function Wu(n,t,l){var u=n==null?0:n.length;if(!u)return-1;var f=l==null?0:pe(l);return f<0&&(f=Xe(u+f,0)),da(n,ue(t,3),f)}function zu(n,t,l){var u=n==null?0:n.length;if(!u)return-1;var f=u-1;return l!==r&&(f=pe(l),f=l<0?Xe(u+f,0):an(f,u-1)),da(n,ue(t,3),f,!0)}function Xu(n){var t=n==null?0:n.length;return t?rn(n,1):[]}function nk(n){var t=n==null?0:n.length;return t?rn(n,C):[]}function tk(n,t){var l=n==null?0:n.length;return l?(t=t===r?1:pe(t),rn(n,t)):[]}function rk(n){for(var t=-1,l=n==null?0:n.length,u={};++t<l;){var f=n[t];u[f[0]]=f[1]}return u}function Ju(n){return n&&n.length?n[0]:r}function ak(n,t,l){var u=n==null?0:n.length;if(!u)return-1;var f=l==null?0:pe(l);return f<0&&(f=Xe(u+f,0)),$t(n,t,f)}function ik(n){var t=n==null?0:n.length;return t?jn(n,0,-1):[]}var sk=ke(function(n){var t=Ve(n,fs);return t.length&&t[0]===n[0]?ts(t):[]}),lk=ke(function(n){var t=Nn(n),l=Ve(n,fs);return t===Nn(l)?t=r:l.pop(),l.length&&l[0]===n[0]?ts(l,ue(t,2)):[]}),ok=ke(function(n){var t=Nn(n),l=Ve(n,fs);return t=typeof t=="function"?t:r,t&&l.pop(),l.length&&l[0]===n[0]?ts(l,r,t):[]});function uk(n,t){return n==null?"":ip.call(n,t)}function Nn(n){var t=n==null?0:n.length;return t?n[t-1]:r}function dk(n,t,l){var u=n==null?0:n.length;if(!u)return-1;var f=u;return l!==r&&(f=pe(l),f=f<0?Xe(u+f,0):an(f,u-1)),t===t?Hm(n,t,f):da(n,Oo,f,!0)}function gk(n,t){return n&&n.length?ou(n,pe(t)):r}var fk=ke(Zu);function Zu(n,t){return n&&n.length&&t&&t.length?ss(n,t):n}function ck(n,t,l){return n&&n.length&&t&&t.length?ss(n,t,ue(l,2)):n}function mk(n,t,l){return n&&n.length&&t&&t.length?ss(n,t,r,l):n}var pk=it(function(n,t){var l=n==null?0:n.length,u=Zi(n,t);return gu(n,Ve(t,function(f){return st(f,l)?+f:f}).sort(Eu)),u});function hk(n,t){var l=[];if(!(n&&n.length))return l;var u=-1,f=[],k=n.length;for(t=ue(t,3);++u<k;){var y=n[u];t(y,u,n)&&(l.push(y),f.push(u))}return gu(n,f),l}function Rs(n){return n==null?n:up.call(n)}function kk(n,t,l){var u=n==null?0:n.length;return u?(l&&typeof l!="number"&&on(n,t,l)?(t=0,l=u):(t=t==null?0:pe(t),l=l===r?u:pe(l)),jn(n,t,l)):[]}function vk(n,t){return Na(n,t)}function yk(n,t,l){return us(n,t,ue(l,2))}function bk(n,t){var l=n==null?0:n.length;if(l){var u=Na(n,t);if(u<l&&Fn(n[u],t))return u}return-1}function Ek(n,t){return Na(n,t,!0)}function Tk(n,t,l){return us(n,t,ue(l,2),!0)}function _k(n,t){var l=n==null?0:n.length;if(l){var u=Na(n,t,!0)-1;if(Fn(n[u],t))return u}return-1}function wk(n){return n&&n.length?cu(n):[]}function Ak(n,t){return n&&n.length?cu(n,ue(t,2)):[]}function Rk(n){var t=n==null?0:n.length;return t?jn(n,1,t):[]}function Sk(n,t,l){return n&&n.length?(t=l||t===r?1:pe(t),jn(n,0,t<0?0:t)):[]}function Ik(n,t,l){var u=n==null?0:n.length;return u?(t=l||t===r?1:pe(t),t=u-t,jn(n,t<0?0:t,u)):[]}function jk(n,t){return n&&n.length?Oa(n,ue(t,3),!1,!0):[]}function Nk(n,t){return n&&n.length?Oa(n,ue(t,3)):[]}var Ok=ke(function(n){return Et(rn(n,1,Ye,!0))}),Pk=ke(function(n){var t=Nn(n);return Ye(t)&&(t=r),Et(rn(n,1,Ye,!0),ue(t,2))}),Bk=ke(function(n){var t=Nn(n);return t=typeof t=="function"?t:r,Et(rn(n,1,Ye,!0),r,t)});function xk(n){return n&&n.length?Et(n):[]}function qk(n,t){return n&&n.length?Et(n,ue(t,2)):[]}function Dk(n,t){return t=typeof t=="function"?t:r,n&&n.length?Et(n,r,t):[]}function Ss(n){if(!(n&&n.length))return[];var t=0;return n=ht(n,function(l){if(Ye(l))return t=Xe(l.length,t),!0}),Gi(t,function(l){return Ve(n,Ki(l))})}function Qu(n,t){if(!(n&&n.length))return[];var l=Ss(n);return t==null?l:Ve(l,function(u){return hn(t,r,u)})}var Mk=ke(function(n,t){return Ye(n)?Sr(n,t):[]}),Lk=ke(function(n){return gs(ht(n,Ye))}),Fk=ke(function(n){var t=Nn(n);return Ye(t)&&(t=r),gs(ht(n,Ye),ue(t,2))}),Ck=ke(function(n){var t=Nn(n);return t=typeof t=="function"?t:r,gs(ht(n,Ye),r,t)}),Kk=ke(Ss);function Vk(n,t){return ku(n||[],t||[],Rr)}function Hk(n,t){return ku(n||[],t||[],Nr)}var Gk=ke(function(n){var t=n.length,l=t>1?n[t-1]:r;return l=typeof l=="function"?(n.pop(),l):r,Qu(n,l)});function ed(n){var t=p(n);return t.__chain__=!0,t}function $k(n,t){return t(n),n}function Ca(n,t){return t(n)}var Uk=it(function(n){var t=n.length,l=t?n[0]:0,u=this.__wrapped__,f=function(k){return Zi(k,n)};return t>1||this.__actions__.length||!(u instanceof be)||!st(l)?this.thru(f):(u=u.slice(l,+l+(t?1:0)),u.__actions__.push({func:Ca,args:[f],thisArg:r}),new Sn(u,this.__chain__).thru(function(k){return t&&!k.length&&k.push(r),k}))});function Yk(){return ed(this)}function Wk(){return new Sn(this.value(),this.__chain__)}function zk(){this.__values__===r&&(this.__values__=md(this.value()));var n=this.__index__>=this.__values__.length,t=n?r:this.__values__[this.__index__++];return{done:n,value:t}}function Xk(){return this}function Jk(n){for(var t,l=this;l instanceof Aa;){var u=Yu(l);u.__index__=0,u.__values__=r,t?f.__wrapped__=u:t=u;var f=u;l=l.__wrapped__}return f.__wrapped__=n,t}function Zk(){var n=this.__wrapped__;if(n instanceof be){var t=n;return this.__actions__.length&&(t=new be(this)),t=t.reverse(),t.__actions__.push({func:Ca,args:[Rs],thisArg:r}),new Sn(t,this.__chain__)}return this.thru(Rs)}function Qk(){return hu(this.__wrapped__,this.__actions__)}var ev=Pa(function(n,t,l){Be.call(n,l)?++n[l]:rt(n,l,1)});function nv(n,t,l){var u=ce(n)?jo:$p;return l&&on(n,t,l)&&(t=r),u(n,ue(t,3))}function tv(n,t){var l=ce(n)?ht:Qo;return l(n,ue(t,3))}var rv=Su(Wu),av=Su(zu);function iv(n,t){return rn(Ka(n,t),1)}function sv(n,t){return rn(Ka(n,t),C)}function lv(n,t,l){return l=l===r?1:pe(l),rn(Ka(n,t),l)}function nd(n,t){var l=ce(n)?An:bt;return l(n,ue(t,3))}function td(n,t){var l=ce(n)?Rm:Zo;return l(n,ue(t,3))}var ov=Pa(function(n,t,l){Be.call(n,l)?n[l].push(t):rt(n,l,[t])});function uv(n,t,l,u){n=fn(n)?n:rr(n),l=l&&!u?pe(l):0;var f=n.length;return l<0&&(l=Xe(f+l,0)),Ua(n)?l<=f&&n.indexOf(t,l)>-1:!!f&&$t(n,t,l)>-1}var dv=ke(function(n,t,l){var u=-1,f=typeof t=="function",k=fn(n)?L(n.length):[];return bt(n,function(y){k[++u]=f?hn(t,y,l):Ir(y,t,l)}),k}),gv=Pa(function(n,t,l){rt(n,l,t)});function Ka(n,t){var l=ce(n)?Ve:iu;return l(n,ue(t,3))}function fv(n,t,l,u){return n==null?[]:(ce(t)||(t=t==null?[]:[t]),l=u?r:l,ce(l)||(l=l==null?[]:[l]),uu(n,t,l))}var cv=Pa(function(n,t,l){n[l?0:1].push(t)},function(){return[[],[]]});function mv(n,t,l){var u=ce(n)?Fi:Bo,f=arguments.length<3;return u(n,ue(t,4),l,f,bt)}function pv(n,t,l){var u=ce(n)?Sm:Bo,f=arguments.length<3;return u(n,ue(t,4),l,f,Zo)}function hv(n,t){var l=ce(n)?ht:Qo;return l(n,Ga(ue(t,3)))}function kv(n){var t=ce(n)?Wo:uh;return t(n)}function vv(n,t,l){(l?on(n,t,l):t===r)?t=1:t=pe(t);var u=ce(n)?Cp:dh;return u(n,t)}function yv(n){var t=ce(n)?Kp:fh;return t(n)}function bv(n){if(n==null)return 0;if(fn(n))return Ua(n)?Yt(n):n.length;var t=sn(n);return t==He||t==Dn?n.size:as(n).length}function Ev(n,t,l){var u=ce(n)?Ci:ch;return l&&on(n,t,l)&&(t=r),u(n,ue(t,3))}var Tv=ke(function(n,t){if(n==null)return[];var l=t.length;return l>1&&on(n,t[0],t[1])?t=[]:l>2&&on(t[0],t[1],t[2])&&(t=[t[0]]),uu(n,rn(t,1),[])}),Va=tp||function(){return tn.Date.now()};function _v(n,t){if(typeof t!="function")throw new Rn(d);return n=pe(n),function(){if(--n<1)return t.apply(this,arguments)}}function rd(n,t,l){return t=l?r:t,t=n&&t==null?n.length:t,at(n,M,r,r,r,r,t)}function ad(n,t){var l;if(typeof t!="function")throw new Rn(d);return n=pe(n),function(){return--n>0&&(l=t.apply(this,arguments)),n<=1&&(t=r),l}}var Is=ke(function(n,t,l){var u=E;if(l.length){var f=vt(l,nr(Is));u|=j}return at(n,u,t,l,f)}),id=ke(function(n,t,l){var u=E|R;if(l.length){var f=vt(l,nr(id));u|=j}return at(t,u,n,l,f)});function sd(n,t,l){t=l?r:t;var u=at(n,S,r,r,r,r,r,t);return u.placeholder=sd.placeholder,u}function ld(n,t,l){t=l?r:t;var u=at(n,z,r,r,r,r,r,t);return u.placeholder=ld.placeholder,u}function od(n,t,l){var u,f,k,y,w,N,Y=0,W=!1,J=!1,ae=!0;if(typeof n!="function")throw new Rn(d);t=On(t)||0,Ge(l)&&(W=!!l.leading,J="maxWait"in l,k=J?Xe(On(l.maxWait)||0,t):k,ae="trailing"in l?!!l.trailing:ae);function le(We){var Cn=u,ut=f;return u=f=r,Y=We,y=n.apply(ut,Cn),y}function de(We){return Y=We,w=Br(ye,t),W?le(We):y}function he(We){var Cn=We-N,ut=We-Y,Sd=t-Cn;return J?an(Sd,k-ut):Sd}function ge(We){var Cn=We-N,ut=We-Y;return N===r||Cn>=t||Cn<0||J&&ut>=k}function ye(){var We=Va();if(ge(We))return Te(We);w=Br(ye,he(We))}function Te(We){return w=r,ae&&u?le(We):(u=f=r,y)}function bn(){w!==r&&vu(w),Y=0,u=N=f=w=r}function un(){return w===r?y:Te(Va())}function En(){var We=Va(),Cn=ge(We);if(u=arguments,f=this,N=We,Cn){if(w===r)return de(N);if(J)return vu(w),w=Br(ye,t),le(N)}return w===r&&(w=Br(ye,t)),y}return En.cancel=bn,En.flush=un,En}var wv=ke(function(n,t){return Jo(n,1,t)}),Av=ke(function(n,t,l){return Jo(n,On(t)||0,l)});function Rv(n){return at(n,ee)}function Ha(n,t){if(typeof n!="function"||t!=null&&typeof t!="function")throw new Rn(d);var l=function(){var u=arguments,f=t?t.apply(this,u):u[0],k=l.cache;if(k.has(f))return k.get(f);var y=n.apply(this,u);return l.cache=k.set(f,y)||k,y};return l.cache=new(Ha.Cache||tt),l}Ha.Cache=tt;function Ga(n){if(typeof n!="function")throw new Rn(d);return function(){var t=arguments;switch(t.length){case 0:return!n.call(this);case 1:return!n.call(this,t[0]);case 2:return!n.call(this,t[0],t[1]);case 3:return!n.call(this,t[0],t[1],t[2])}return!n.apply(this,t)}}function Sv(n){return ad(2,n)}var Iv=mh(function(n,t){t=t.length==1&&ce(t[0])?Ve(t[0],kn(ue())):Ve(rn(t,1),kn(ue()));var l=t.length;return ke(function(u){for(var f=-1,k=an(u.length,l);++f<k;)u[f]=t[f].call(this,u[f]);return hn(n,this,u)})}),js=ke(function(n,t){var l=vt(t,nr(js));return at(n,j,r,t,l)}),ud=ke(function(n,t){var l=vt(t,nr(ud));return at(n,$,r,t,l)}),jv=it(function(n,t){return at(n,K,r,r,r,t)});function Nv(n,t){if(typeof n!="function")throw new Rn(d);return t=t===r?t:pe(t),ke(n,t)}function Ov(n,t){if(typeof n!="function")throw new Rn(d);return t=t==null?0:Xe(pe(t),0),ke(function(l){var u=l[t],f=_t(l,0,t);return u&&kt(f,u),hn(n,this,f)})}function Pv(n,t,l){var u=!0,f=!0;if(typeof n!="function")throw new Rn(d);return Ge(l)&&(u="leading"in l?!!l.leading:u,f="trailing"in l?!!l.trailing:f),od(n,t,{leading:u,maxWait:t,trailing:f})}function Bv(n){return rd(n,1)}function xv(n,t){return js(cs(t),n)}function qv(){if(!arguments.length)return[];var n=arguments[0];return ce(n)?n:[n]}function Dv(n){return In(n,b)}function Mv(n,t){return t=typeof t=="function"?t:r,In(n,b,t)}function Lv(n){return In(n,v|b)}function Fv(n,t){return t=typeof t=="function"?t:r,In(n,v|b,t)}function Cv(n,t){return t==null||Xo(n,t,Je(t))}function Fn(n,t){return n===t||n!==n&&t!==t}var Kv=Da(ns),Vv=Da(function(n,t){return n>=t}),Dt=tu(function(){return arguments}())?tu:function(n){return Ue(n)&&Be.call(n,"callee")&&!Vo.call(n,"callee")},ce=L.isArray,Hv=_o?kn(_o):Jp;function fn(n){return n!=null&&$a(n.length)&&!lt(n)}function Ye(n){return Ue(n)&&fn(n)}function Gv(n){return n===!0||n===!1||Ue(n)&&ln(n)==me}var wt=ap||Cs,$v=wo?kn(wo):Zp;function Uv(n){return Ue(n)&&n.nodeType===1&&!xr(n)}function Yv(n){if(n==null)return!0;if(fn(n)&&(ce(n)||typeof n=="string"||typeof n.splice=="function"||wt(n)||tr(n)||Dt(n)))return!n.length;var t=sn(n);if(t==He||t==Dn)return!n.size;if(Pr(n))return!as(n).length;for(var l in n)if(Be.call(n,l))return!1;return!0}function Wv(n,t){return jr(n,t)}function zv(n,t,l){l=typeof l=="function"?l:r;var u=l?l(n,t):r;return u===r?jr(n,t,r,l):!!u}function Ns(n){if(!Ue(n))return!1;var t=ln(n);return t==Se||t==Ae||typeof n.message=="string"&&typeof n.name=="string"&&!xr(n)}function Xv(n){return typeof n=="number"&&Go(n)}function lt(n){if(!Ge(n))return!1;var t=ln(n);return t==qe||t==Qe||t==Ne||t==et}function dd(n){return typeof n=="number"&&n==pe(n)}function $a(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=B}function Ge(n){var t=typeof n;return n!=null&&(t=="object"||t=="function")}function Ue(n){return n!=null&&typeof n=="object"}var gd=Ao?kn(Ao):eh;function Jv(n,t){return n===t||rs(n,t,bs(t))}function Zv(n,t,l){return l=typeof l=="function"?l:r,rs(n,t,bs(t),l)}function Qv(n){return fd(n)&&n!=+n}function ey(n){if(Mh(n))throw new fe(o);return ru(n)}function ny(n){return n===null}function ty(n){return n==null}function fd(n){return typeof n=="number"||Ue(n)&&ln(n)==en}function xr(n){if(!Ue(n)||ln(n)!=nn)return!1;var t=va(n);if(t===null)return!0;var l=Be.call(t,"constructor")&&t.constructor;return typeof l=="function"&&l instanceof l&&ma.call(l)==Zm}var Os=Ro?kn(Ro):nh;function ry(n){return dd(n)&&n>=-9007199254740991&&n<=B}var cd=So?kn(So):th;function Ua(n){return typeof n=="string"||!ce(n)&&Ue(n)&&ln(n)==kr}function yn(n){return typeof n=="symbol"||Ue(n)&&ln(n)==ia}var tr=Io?kn(Io):rh;function ay(n){return n===r}function iy(n){return Ue(n)&&sn(n)==vr}function sy(n){return Ue(n)&&ln(n)==Tc}var ly=Da(is),oy=Da(function(n,t){return n<=t});function md(n){if(!n)return[];if(fn(n))return Ua(n)?Mn(n):gn(n);if(Er&&n[Er])return Cm(n[Er]());var t=sn(n),l=t==He?Ui:t==Dn?ga:rr;return l(n)}function ot(n){if(!n)return n===0?n:0;if(n=On(n),n===C||n===-1/0){var t=n<0?-1:1;return t*q}return n===n?n:0}function pe(n){var t=ot(n),l=t%1;return t===t?l?t-l:t:0}function pd(n){return n?Pt(pe(n),0,Z):0}function On(n){if(typeof n=="number")return n;if(yn(n))return U;if(Ge(n)){var t=typeof n.valueOf=="function"?n.valueOf():n;n=Ge(t)?t+"":t}if(typeof n!="string")return n===0?n:+n;n=xo(n);var l=Hc.test(n);return l||$c.test(n)?_m(n.slice(2),l?2:8):Vc.test(n)?U:+n}function hd(n){return Gn(n,cn(n))}function uy(n){return n?Pt(pe(n),-9007199254740991,B):n===0?n:0}function Oe(n){return n==null?"":vn(n)}var dy=Qt(function(n,t){if(Pr(t)||fn(t)){Gn(t,Je(t),n);return}for(var l in t)Be.call(t,l)&&Rr(n,l,t[l])}),kd=Qt(function(n,t){Gn(t,cn(t),n)}),Ya=Qt(function(n,t,l,u){Gn(t,cn(t),n,u)}),gy=Qt(function(n,t,l,u){Gn(t,Je(t),n,u)}),fy=it(Zi);function cy(n,t){var l=Zt(n);return t==null?l:zo(l,t)}var my=ke(function(n,t){n=De(n);var l=-1,u=t.length,f=u>2?t[2]:r;for(f&&on(t[0],t[1],f)&&(u=1);++l<u;)for(var k=t[l],y=cn(k),w=-1,N=y.length;++w<N;){var Y=y[w],W=n[Y];(W===r||Fn(W,zt[Y])&&!Be.call(n,Y))&&(n[Y]=k[Y])}return n}),py=ke(function(n){return n.push(r,xu),hn(vd,r,n)});function hy(n,t){return No(n,ue(t,3),Hn)}function ky(n,t){return No(n,ue(t,3),es)}function vy(n,t){return n==null?n:Qi(n,ue(t,3),cn)}function yy(n,t){return n==null?n:eu(n,ue(t,3),cn)}function by(n,t){return n&&Hn(n,ue(t,3))}function Ey(n,t){return n&&es(n,ue(t,3))}function Ty(n){return n==null?[]:Ia(n,Je(n))}function _y(n){return n==null?[]:Ia(n,cn(n))}function Ps(n,t,l){var u=n==null?r:Bt(n,t);return u===r?l:u}function wy(n,t){return n!=null&&Mu(n,t,Yp)}function Bs(n,t){return n!=null&&Mu(n,t,Wp)}var Ay=ju(function(n,t,l){t!=null&&typeof t.toString!="function"&&(t=pa.call(t)),n[t]=l},qs(mn)),Ry=ju(function(n,t,l){t!=null&&typeof t.toString!="function"&&(t=pa.call(t)),Be.call(n,t)?n[t].push(l):n[t]=[l]},ue),Sy=ke(Ir);function Je(n){return fn(n)?Yo(n):as(n)}function cn(n){return fn(n)?Yo(n,!0):ah(n)}function Iy(n,t){var l={};return t=ue(t,3),Hn(n,function(u,f,k){rt(l,t(u,f,k),u)}),l}function jy(n,t){var l={};return t=ue(t,3),Hn(n,function(u,f,k){rt(l,f,t(u,f,k))}),l}var Ny=Qt(function(n,t,l){ja(n,t,l)}),vd=Qt(function(n,t,l,u){ja(n,t,l,u)}),Oy=it(function(n,t){var l={};if(n==null)return l;var u=!1;t=Ve(t,function(k){return k=Tt(k,n),u||(u=k.length>1),k}),Gn(n,vs(n),l),u&&(l=In(l,v|_|b,Ah));for(var f=t.length;f--;)ds(l,t[f]);return l});function Py(n,t){return yd(n,Ga(ue(t)))}var By=it(function(n,t){return n==null?{}:sh(n,t)});function yd(n,t){if(n==null)return{};var l=Ve(vs(n),function(u){return[u]});return t=ue(t),du(n,l,function(u,f){return t(u,f[0])})}function xy(n,t,l){t=Tt(t,n);var u=-1,f=t.length;for(f||(f=1,n=r);++u<f;){var k=n==null?r:n[$n(t[u])];k===r&&(u=f,k=l),n=lt(k)?k.call(n):k}return n}function qy(n,t,l){return n==null?n:Nr(n,t,l)}function Dy(n,t,l,u){return u=typeof u=="function"?u:r,n==null?n:Nr(n,t,l,u)}var bd=Pu(Je),Ed=Pu(cn);function My(n,t,l){var u=ce(n),f=u||wt(n)||tr(n);if(t=ue(t,4),l==null){var k=n&&n.constructor;f?l=u?new k:[]:Ge(n)?l=lt(k)?Zt(va(n)):{}:l={}}return(f?An:Hn)(n,function(y,w,N){return t(l,y,w,N)}),l}function Ly(n,t){return n==null?!0:ds(n,t)}function Fy(n,t,l){return n==null?n:pu(n,t,cs(l))}function Cy(n,t,l,u){return u=typeof u=="function"?u:r,n==null?n:pu(n,t,cs(l),u)}function rr(n){return n==null?[]:$i(n,Je(n))}function Ky(n){return n==null?[]:$i(n,cn(n))}function Vy(n,t,l){return l===r&&(l=t,t=r),l!==r&&(l=On(l),l=l===l?l:0),t!==r&&(t=On(t),t=t===t?t:0),Pt(On(n),t,l)}function Hy(n,t,l){return t=ot(t),l===r?(l=t,t=0):l=ot(l),n=On(n),zp(n,t,l)}function Gy(n,t,l){if(l&&typeof l!="boolean"&&on(n,t,l)&&(t=l=r),l===r&&(typeof t=="boolean"?(l=t,t=r):typeof n=="boolean"&&(l=n,n=r)),n===r&&t===r?(n=0,t=1):(n=ot(n),t===r?(t=n,n=0):t=ot(t)),n>t){var u=n;n=t,t=u}if(l||n%1||t%1){var f=$o();return an(n+f*(t-n+Tm("1e-"+((f+"").length-1))),t)}return ls(n,t)}var $y=er(function(n,t,l){return t=t.toLowerCase(),n+(l?Td(t):t)});function Td(n){return xs(Oe(n).toLowerCase())}function _d(n){return n=Oe(n),n&&n.replace(Yc,qm).replace(fm,"")}function Uy(n,t,l){n=Oe(n),t=vn(t);var u=n.length;l=l===r?u:Pt(pe(l),0,u);var f=l;return l-=t.length,l>=0&&n.slice(l,f)==t}function Yy(n){return n=Oe(n),n&&Sc.test(n)?n.replace(Ql,Dm):n}function Wy(n){return n=Oe(n),n&&Bc.test(n)?n.replace(ji,"\\$&"):n}var zy=er(function(n,t,l){return n+(l?"-":"")+t.toLowerCase()}),Xy=er(function(n,t,l){return n+(l?" ":"")+t.toLowerCase()}),Jy=Ru("toLowerCase");function Zy(n,t,l){n=Oe(n),t=pe(t);var u=t?Yt(n):0;if(!t||u>=t)return n;var f=(t-u)/2;return qa(Ta(f),l)+n+qa(Ea(f),l)}function Qy(n,t,l){n=Oe(n),t=pe(t);var u=t?Yt(n):0;return t&&u<t?n+qa(t-u,l):n}function eb(n,t,l){n=Oe(n),t=pe(t);var u=t?Yt(n):0;return t&&u<t?qa(t-u,l)+n:n}function nb(n,t,l){return l||t==null?t=0:t&&(t=+t),op(Oe(n).replace(Ni,""),t||0)}function tb(n,t,l){return(l?on(n,t,l):t===r)?t=1:t=pe(t),os(Oe(n),t)}function rb(){var n=arguments,t=Oe(n[0]);return n.length<3?t:t.replace(n[1],n[2])}var ab=er(function(n,t,l){return n+(l?"_":"")+t.toLowerCase()});function ib(n,t,l){return l&&typeof l!="number"&&on(n,t,l)&&(t=l=r),l=l===r?Z:l>>>0,l?(n=Oe(n),n&&(typeof t=="string"||t!=null&&!Os(t))&&(t=vn(t),!t&&Ut(n))?_t(Mn(n),0,l):n.split(t,l)):[]}var sb=er(function(n,t,l){return n+(l?" ":"")+xs(t)});function lb(n,t,l){return n=Oe(n),l=l==null?0:Pt(pe(l),0,n.length),t=vn(t),n.slice(l,l+t.length)==t}function ob(n,t,l){var u=p.templateSettings;l&&on(n,t,l)&&(t=r),n=Oe(n),t=Ya({},t,u,Bu);var f=Ya({},t.imports,u.imports,Bu),k=Je(f),y=$i(f,k),w,N,Y=0,W=t.interpolate||sa,J="__p += '",ae=Yi((t.escape||sa).source+"|"+W.source+"|"+(W===eo?Kc:sa).source+"|"+(t.evaluate||sa).source+"|$","g"),le="//# sourceURL="+(Be.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++km+"]")+`
`;n.replace(ae,function(ge,ye,Te,bn,un,En){return Te||(Te=bn),J+=n.slice(Y,En).replace(Wc,Mm),ye&&(w=!0,J+=`' +
__e(`+ye+`) +
'`),un&&(N=!0,J+=`';
`+un+`;
__p += '`),Te&&(J+=`' +
((__t = (`+Te+`)) == null ? '' : __t) +
'`),Y=En+ge.length,ge}),J+=`';
`;var de=Be.call(t,"variable")&&t.variable;if(!de)J=`with (obj) {
`+J+`
}
`;else if(Fc.test(de))throw new fe(g);J=(N?J.replace(_c,""):J).replace(wc,"$1").replace(Ac,"$1;"),J="function("+(de||"obj")+`) {
`+(de?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(w?", __e = _.escape":"")+(N?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+J+`return __p
}`;var he=Ad(function(){return Ie(k,le+"return "+J).apply(r,y)});if(he.source=J,Ns(he))throw he;return he}function ub(n){return Oe(n).toLowerCase()}function db(n){return Oe(n).toUpperCase()}function gb(n,t,l){if(n=Oe(n),n&&(l||t===r))return xo(n);if(!n||!(t=vn(t)))return n;var u=Mn(n),f=Mn(t),k=qo(u,f),y=Do(u,f)+1;return _t(u,k,y).join("")}function fb(n,t,l){if(n=Oe(n),n&&(l||t===r))return n.slice(0,Lo(n)+1);if(!n||!(t=vn(t)))return n;var u=Mn(n),f=Do(u,Mn(t))+1;return _t(u,0,f).join("")}function cb(n,t,l){if(n=Oe(n),n&&(l||t===r))return n.replace(Ni,"");if(!n||!(t=vn(t)))return n;var u=Mn(n),f=qo(u,Mn(t));return _t(u,f).join("")}function mb(n,t){var l=ne,u=X;if(Ge(t)){var f="separator"in t?t.separator:f;l="length"in t?pe(t.length):l,u="omission"in t?vn(t.omission):u}n=Oe(n);var k=n.length;if(Ut(n)){var y=Mn(n);k=y.length}if(l>=k)return n;var w=l-Yt(u);if(w<1)return u;var N=y?_t(y,0,w).join(""):n.slice(0,w);if(f===r)return N+u;if(y&&(w+=N.length-w),Os(f)){if(n.slice(w).search(f)){var Y,W=N;for(f.global||(f=Yi(f.source,Oe(no.exec(f))+"g")),f.lastIndex=0;Y=f.exec(W);)var J=Y.index;N=N.slice(0,J===r?w:J)}}else if(n.indexOf(vn(f),w)!=w){var ae=N.lastIndexOf(f);ae>-1&&(N=N.slice(0,ae))}return N+u}function pb(n){return n=Oe(n),n&&Rc.test(n)?n.replace(Zl,Gm):n}var hb=er(function(n,t,l){return n+(l?" ":"")+t.toUpperCase()}),xs=Ru("toUpperCase");function wd(n,t,l){return n=Oe(n),t=l?r:t,t===r?Fm(n)?Ym(n):Nm(n):n.match(t)||[]}var Ad=ke(function(n,t){try{return hn(n,r,t)}catch(l){return Ns(l)?l:new fe(l)}}),kb=it(function(n,t){return An(t,function(l){l=$n(l),rt(n,l,Is(n[l],n))}),n});function vb(n){var t=n==null?0:n.length,l=ue();return n=t?Ve(n,function(u){if(typeof u[1]!="function")throw new Rn(d);return[l(u[0]),u[1]]}):[],ke(function(u){for(var f=-1;++f<t;){var k=n[f];if(hn(k[0],this,u))return hn(k[1],this,u)}})}function yb(n){return Gp(In(n,v))}function qs(n){return function(){return n}}function bb(n,t){return n==null||n!==n?t:n}var Eb=Iu(),Tb=Iu(!0);function mn(n){return n}function Ds(n){return au(typeof n=="function"?n:In(n,v))}function _b(n){return su(In(n,v))}function wb(n,t){return lu(n,In(t,v))}var Ab=ke(function(n,t){return function(l){return Ir(l,n,t)}}),Rb=ke(function(n,t){return function(l){return Ir(n,l,t)}});function Ms(n,t,l){var u=Je(t),f=Ia(t,u);l==null&&!(Ge(t)&&(f.length||!u.length))&&(l=t,t=n,n=this,f=Ia(t,Je(t)));var k=!(Ge(l)&&"chain"in l)||!!l.chain,y=lt(n);return An(f,function(w){var N=t[w];n[w]=N,y&&(n.prototype[w]=function(){var Y=this.__chain__;if(k||Y){var W=n(this.__wrapped__),J=W.__actions__=gn(this.__actions__);return J.push({func:N,args:arguments,thisArg:n}),W.__chain__=Y,W}return N.apply(n,kt([this.value()],arguments))})}),n}function Sb(){return tn._===this&&(tn._=Qm),this}function Ls(){}function Ib(n){return n=pe(n),ke(function(t){return ou(t,n)})}var jb=ps(Ve),Nb=ps(jo),Ob=ps(Ci);function Rd(n){return Ts(n)?Ki($n(n)):lh(n)}function Pb(n){return function(t){return n==null?r:Bt(n,t)}}var Bb=Nu(),xb=Nu(!0);function Fs(){return[]}function Cs(){return!1}function qb(){return{}}function Db(){return""}function Mb(){return!0}function Lb(n,t){if(n=pe(n),n<1||n>B)return[];var l=Z,u=an(n,Z);t=ue(t),n-=Z;for(var f=Gi(u,t);++l<n;)t(l);return f}function Fb(n){return ce(n)?Ve(n,$n):yn(n)?[n]:gn(Uu(Oe(n)))}function Cb(n){var t=++Jm;return Oe(n)+t}var Kb=xa(function(n,t){return n+t},0),Vb=hs("ceil"),Hb=xa(function(n,t){return n/t},1),Gb=hs("floor");function $b(n){return n&&n.length?Sa(n,mn,ns):r}function Ub(n,t){return n&&n.length?Sa(n,ue(t,2),ns):r}function Yb(n){return Po(n,mn)}function Wb(n,t){return Po(n,ue(t,2))}function zb(n){return n&&n.length?Sa(n,mn,is):r}function Xb(n,t){return n&&n.length?Sa(n,ue(t,2),is):r}var Jb=xa(function(n,t){return n*t},1),Zb=hs("round"),Qb=xa(function(n,t){return n-t},0);function e0(n){return n&&n.length?Hi(n,mn):0}function n0(n,t){return n&&n.length?Hi(n,ue(t,2)):0}return p.after=_v,p.ary=rd,p.assign=dy,p.assignIn=kd,p.assignInWith=Ya,p.assignWith=gy,p.at=fy,p.before=ad,p.bind=Is,p.bindAll=kb,p.bindKey=id,p.castArray=qv,p.chain=ed,p.chunk=Gh,p.compact=$h,p.concat=Uh,p.cond=vb,p.conforms=yb,p.constant=qs,p.countBy=ev,p.create=cy,p.curry=sd,p.curryRight=ld,p.debounce=od,p.defaults=my,p.defaultsDeep=py,p.defer=wv,p.delay=Av,p.difference=Yh,p.differenceBy=Wh,p.differenceWith=zh,p.drop=Xh,p.dropRight=Jh,p.dropRightWhile=Zh,p.dropWhile=Qh,p.fill=ek,p.filter=tv,p.flatMap=iv,p.flatMapDeep=sv,p.flatMapDepth=lv,p.flatten=Xu,p.flattenDeep=nk,p.flattenDepth=tk,p.flip=Rv,p.flow=Eb,p.flowRight=Tb,p.fromPairs=rk,p.functions=Ty,p.functionsIn=_y,p.groupBy=ov,p.initial=ik,p.intersection=sk,p.intersectionBy=lk,p.intersectionWith=ok,p.invert=Ay,p.invertBy=Ry,p.invokeMap=dv,p.iteratee=Ds,p.keyBy=gv,p.keys=Je,p.keysIn=cn,p.map=Ka,p.mapKeys=Iy,p.mapValues=jy,p.matches=_b,p.matchesProperty=wb,p.memoize=Ha,p.merge=Ny,p.mergeWith=vd,p.method=Ab,p.methodOf=Rb,p.mixin=Ms,p.negate=Ga,p.nthArg=Ib,p.omit=Oy,p.omitBy=Py,p.once=Sv,p.orderBy=fv,p.over=jb,p.overArgs=Iv,p.overEvery=Nb,p.overSome=Ob,p.partial=js,p.partialRight=ud,p.partition=cv,p.pick=By,p.pickBy=yd,p.property=Rd,p.propertyOf=Pb,p.pull=fk,p.pullAll=Zu,p.pullAllBy=ck,p.pullAllWith=mk,p.pullAt=pk,p.range=Bb,p.rangeRight=xb,p.rearg=jv,p.reject=hv,p.remove=hk,p.rest=Nv,p.reverse=Rs,p.sampleSize=vv,p.set=qy,p.setWith=Dy,p.shuffle=yv,p.slice=kk,p.sortBy=Tv,p.sortedUniq=wk,p.sortedUniqBy=Ak,p.split=ib,p.spread=Ov,p.tail=Rk,p.take=Sk,p.takeRight=Ik,p.takeRightWhile=jk,p.takeWhile=Nk,p.tap=$k,p.throttle=Pv,p.thru=Ca,p.toArray=md,p.toPairs=bd,p.toPairsIn=Ed,p.toPath=Fb,p.toPlainObject=hd,p.transform=My,p.unary=Bv,p.union=Ok,p.unionBy=Pk,p.unionWith=Bk,p.uniq=xk,p.uniqBy=qk,p.uniqWith=Dk,p.unset=Ly,p.unzip=Ss,p.unzipWith=Qu,p.update=Fy,p.updateWith=Cy,p.values=rr,p.valuesIn=Ky,p.without=Mk,p.words=wd,p.wrap=xv,p.xor=Lk,p.xorBy=Fk,p.xorWith=Ck,p.zip=Kk,p.zipObject=Vk,p.zipObjectDeep=Hk,p.zipWith=Gk,p.entries=bd,p.entriesIn=Ed,p.extend=kd,p.extendWith=Ya,Ms(p,p),p.add=Kb,p.attempt=Ad,p.camelCase=$y,p.capitalize=Td,p.ceil=Vb,p.clamp=Vy,p.clone=Dv,p.cloneDeep=Lv,p.cloneDeepWith=Fv,p.cloneWith=Mv,p.conformsTo=Cv,p.deburr=_d,p.defaultTo=bb,p.divide=Hb,p.endsWith=Uy,p.eq=Fn,p.escape=Yy,p.escapeRegExp=Wy,p.every=nv,p.find=rv,p.findIndex=Wu,p.findKey=hy,p.findLast=av,p.findLastIndex=zu,p.findLastKey=ky,p.floor=Gb,p.forEach=nd,p.forEachRight=td,p.forIn=vy,p.forInRight=yy,p.forOwn=by,p.forOwnRight=Ey,p.get=Ps,p.gt=Kv,p.gte=Vv,p.has=wy,p.hasIn=Bs,p.head=Ju,p.identity=mn,p.includes=uv,p.indexOf=ak,p.inRange=Hy,p.invoke=Sy,p.isArguments=Dt,p.isArray=ce,p.isArrayBuffer=Hv,p.isArrayLike=fn,p.isArrayLikeObject=Ye,p.isBoolean=Gv,p.isBuffer=wt,p.isDate=$v,p.isElement=Uv,p.isEmpty=Yv,p.isEqual=Wv,p.isEqualWith=zv,p.isError=Ns,p.isFinite=Xv,p.isFunction=lt,p.isInteger=dd,p.isLength=$a,p.isMap=gd,p.isMatch=Jv,p.isMatchWith=Zv,p.isNaN=Qv,p.isNative=ey,p.isNil=ty,p.isNull=ny,p.isNumber=fd,p.isObject=Ge,p.isObjectLike=Ue,p.isPlainObject=xr,p.isRegExp=Os,p.isSafeInteger=ry,p.isSet=cd,p.isString=Ua,p.isSymbol=yn,p.isTypedArray=tr,p.isUndefined=ay,p.isWeakMap=iy,p.isWeakSet=sy,p.join=uk,p.kebabCase=zy,p.last=Nn,p.lastIndexOf=dk,p.lowerCase=Xy,p.lowerFirst=Jy,p.lt=ly,p.lte=oy,p.max=$b,p.maxBy=Ub,p.mean=Yb,p.meanBy=Wb,p.min=zb,p.minBy=Xb,p.stubArray=Fs,p.stubFalse=Cs,p.stubObject=qb,p.stubString=Db,p.stubTrue=Mb,p.multiply=Jb,p.nth=gk,p.noConflict=Sb,p.noop=Ls,p.now=Va,p.pad=Zy,p.padEnd=Qy,p.padStart=eb,p.parseInt=nb,p.random=Gy,p.reduce=mv,p.reduceRight=pv,p.repeat=tb,p.replace=rb,p.result=xy,p.round=Zb,p.runInContext=I,p.sample=kv,p.size=bv,p.snakeCase=ab,p.some=Ev,p.sortedIndex=vk,p.sortedIndexBy=yk,p.sortedIndexOf=bk,p.sortedLastIndex=Ek,p.sortedLastIndexBy=Tk,p.sortedLastIndexOf=_k,p.startCase=sb,p.startsWith=lb,p.subtract=Qb,p.sum=e0,p.sumBy=n0,p.template=ob,p.times=Lb,p.toFinite=ot,p.toInteger=pe,p.toLength=pd,p.toLower=ub,p.toNumber=On,p.toSafeInteger=uy,p.toString=Oe,p.toUpper=db,p.trim=gb,p.trimEnd=fb,p.trimStart=cb,p.truncate=mb,p.unescape=pb,p.uniqueId=Cb,p.upperCase=hb,p.upperFirst=xs,p.each=nd,p.eachRight=td,p.first=Ju,Ms(p,function(){var n={};return Hn(p,function(t,l){Be.call(p.prototype,l)||(n[l]=t)}),n}(),{chain:!1}),p.VERSION=a,An(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){p[n].placeholder=p}),An(["drop","take"],function(n,t){be.prototype[n]=function(l){l=l===r?1:Xe(pe(l),0);var u=this.__filtered__&&!t?new be(this):this.clone();return u.__filtered__?u.__takeCount__=an(l,u.__takeCount__):u.__views__.push({size:an(l,Z),type:n+(u.__dir__<0?"Right":"")}),u},be.prototype[n+"Right"]=function(l){return this.reverse()[n](l).reverse()}}),An(["filter","map","takeWhile"],function(n,t){var l=t+1,u=l==P||l==F;be.prototype[n]=function(f){var k=this.clone();return k.__iteratees__.push({iteratee:ue(f,3),type:l}),k.__filtered__=k.__filtered__||u,k}}),An(["head","last"],function(n,t){var l="take"+(t?"Right":"");be.prototype[n]=function(){return this[l](1).value()[0]}}),An(["initial","tail"],function(n,t){var l="drop"+(t?"":"Right");be.prototype[n]=function(){return this.__filtered__?new be(this):this[l](1)}}),be.prototype.compact=function(){return this.filter(mn)},be.prototype.find=function(n){return this.filter(n).head()},be.prototype.findLast=function(n){return this.reverse().find(n)},be.prototype.invokeMap=ke(function(n,t){return typeof n=="function"?new be(this):this.map(function(l){return Ir(l,n,t)})}),be.prototype.reject=function(n){return this.filter(Ga(ue(n)))},be.prototype.slice=function(n,t){n=pe(n);var l=this;return l.__filtered__&&(n>0||t<0)?new be(l):(n<0?l=l.takeRight(-n):n&&(l=l.drop(n)),t!==r&&(t=pe(t),l=t<0?l.dropRight(-t):l.take(t-n)),l)},be.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},be.prototype.toArray=function(){return this.take(Z)},Hn(be.prototype,function(n,t){var l=/^(?:filter|find|map|reject)|While$/.test(t),u=/^(?:head|last)$/.test(t),f=p[u?"take"+(t=="last"?"Right":""):t],k=u||/^find/.test(t);f&&(p.prototype[t]=function(){var y=this.__wrapped__,w=u?[1]:arguments,N=y instanceof be,Y=w[0],W=N||ce(y),J=function(ye){var Te=f.apply(p,kt([ye],w));return u&&ae?Te[0]:Te};W&&l&&typeof Y=="function"&&Y.length!=1&&(N=W=!1);var ae=this.__chain__,le=!!this.__actions__.length,de=k&&!ae,he=N&&!le;if(!k&&W){y=he?y:new be(this);var ge=n.apply(y,w);return ge.__actions__.push({func:Ca,args:[J],thisArg:r}),new Sn(ge,ae)}return de&&he?n.apply(this,w):(ge=this.thru(J),de?u?ge.value()[0]:ge.value():ge)})}),An(["pop","push","shift","sort","splice","unshift"],function(n){var t=fa[n],l=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",u=/^(?:pop|shift)$/.test(n);p.prototype[n]=function(){var f=arguments;if(u&&!this.__chain__){var k=this.value();return t.apply(ce(k)?k:[],f)}return this[l](function(y){return t.apply(ce(y)?y:[],f)})}}),Hn(be.prototype,function(n,t){var l=p[t];if(l){var u=l.name+"";Be.call(Jt,u)||(Jt[u]=[]),Jt[u].push({name:t,func:l})}}),Jt[Ba(r,R).name]=[{name:"wrapper",func:r}],be.prototype.clone=pp,be.prototype.reverse=hp,be.prototype.value=kp,p.prototype.at=Uk,p.prototype.chain=Yk,p.prototype.commit=Wk,p.prototype.next=zk,p.prototype.plant=Jk,p.prototype.reverse=Zk,p.prototype.toJSON=p.prototype.valueOf=p.prototype.value=Qk,p.prototype.first=p.prototype.head,Er&&(p.prototype[Er]=Xk),p},Wt=Wm();It?((It.exports=Wt)._=Wt,Di._=Wt):tn._=Wt}).call(D_)}(Vr,Vr.exports)),Vr.exports}M_();xn(ea);const Kf=A.forwardRef((e,i)=>H.jsx(sr,{gap:"2",style:{display:"flex"},...e,ref:i}));Kf.displayName="FaktaGruppe";Kf.__docgenInfo={description:"",methods:[],displayName:"FaktaGruppe"};var Qs={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var hg;function L_(){return hg||(hg=1,function(e){(function(){var i={}.hasOwnProperty;function r(){for(var o="",d=0;d<arguments.length;d++){var g=arguments[d];g&&(o=s(o,a.call(this,g)))}return o}function a(o){if(typeof o=="string"||typeof o=="number")return this&&this[o]||o;if(typeof o!="object")return"";if(Array.isArray(o))return r.apply(this,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var d="";for(var g in o)i.call(o,g)&&o[g]&&(d=s(d,this&&this[g]||g));return d}function s(o,d){return d?o?o+" "+d:o+d:o}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(Qs)),Qs.exports}var F_=L_();const C_=nf(F_),K_="_boks_c3bfh_1",V_="_harBorderLeft_c3bfh_8",H_="_harBorderTop_c3bfh_12",G_={boks:K_,harBorderLeft:V_,harBorderTop:H_};C_.bind(G_);var el={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var kg;function $_(){return kg||(kg=1,function(e){(function(){var i={}.hasOwnProperty;function r(){for(var o="",d=0;d<arguments.length;d++){var g=arguments[d];g&&(o=s(o,a(g)))}return o}function a(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return r.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var d="";for(var g in o)i.call(o,g)&&o[g]&&(d=s(d,g));return d}function s(o,d){return d?o?o+" "+d:o+d:o}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(el)),el.exports}$_();var U_=Object.defineProperty,Y_=(e,i,r)=>i in e?U_(e,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[i]=r,vg=(e,i,r)=>Y_(e,typeof i!="symbol"?i+"":i,r);function Vf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var yg={exports:{}},Fr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bg;function W_(){if(bg)return Fr;bg=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(a,s,o){var d=null;if(o!==void 0&&(d=""+o),s.key!==void 0&&(d=""+s.key),"key"in s){o={};for(var g in s)g!=="key"&&(o[g]=s[g])}else o=s;return s=o.ref,{$$typeof:e,type:a,key:d,ref:s!==void 0?s:null,props:o}}return Fr.Fragment=i,Fr.jsx=r,Fr.jsxs=r,Fr}var Eg;function z_(){return Eg||(Eg=1,yg.exports=W_()),yg.exports}var gt=z_();const X_="_autocompleteSuggestion__substring_mf7v0_1",J_="_autocompleteSuggestion__inner_mf7v0_4",Cr={autocompleteSuggestion__substring:X_,autocompleteSuggestion__inner:J_,"autocompleteSuggestion--active":"_autocompleteSuggestion--active_mf7v0_12"};class Z_ extends Q.Component{constructor(i){super(i),this.state={value:i.value},this.onClick=this.onClick.bind(this),this.onMouseMove=this.onMouseMove.bind(this)}onClick(){const{onClick:i}=this.props,{value:r}=this.state;i(r)}onMouseMove(){const{setSuggestionIndex:i,index:r}=this.props;i(r)}render(){const{match:i,active:r,avoidBlur:a,id:s}=this.props,{value:o}=this.state.value,d=o.toLowerCase().startsWith(i.toLowerCase());return gt.jsx("li",{id:s,role:"option","aria-selected":r,onClick:this.onClick,onMouseMove:this.onMouseMove,onFocus:a,onMouseDown:a,onKeyDown:a,className:"autocompleteSuggestion typo-normal",children:d?gt.jsxs("span",{className:`${Cr.autocompleteSuggestion__inner} ${r?Cr["autocompleteSuggestion--active"]:""}`,children:[o.substring(0,i.length),gt.jsx("span",{className:Cr.autocompleteSuggestion__substring,children:o.substring(i.length)})]}):gt.jsx("span",{className:`${Cr.autocompleteSuggestion__inner} ${r?Cr["autocompleteSuggestion--active"]:""}`,children:o})})}}const Q_="_autocomplete_9dlnp_1",ew="_autocomplete__suggestions_9dlnp_27",nl={autocomplete:Q_,autocomplete__suggestions:ew,"autocomplete__suggestions--hidden":"_autocomplete__suggestions--hidden_9dlnp_31"};class pR extends Q.Component{constructor(i){super(i),vg(this,"input"),vg(this,"inputRef"),this.state={activeSuggestionIndex:-1,hasFocus:!1,shouldShowSuggestions:!0,setAriaActiveDescendant:!1,shouldBlur:!0,blurDelay:null},this.inputRef=r=>{this.input=r},this.onChange=this.onChange.bind(this),this.onBlur=this.onBlur.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.onFocus=this.onFocus.bind(this),this.setValue=this.setValue.bind(this),this.setSuggestionIndex=this.setSuggestionIndex.bind(this),this.avoidBlur=this.avoidBlur.bind(this),this.clearBlurDelay=this.clearBlurDelay.bind(this),this.onSearchButtonClick=this.onSearchButtonClick.bind(this)}componentWillUnmount(){const{blurDelay:i}=this.state;i&&(clearTimeout(i),this.setState({blurDelay:null}))}onChange(i){const{onChange:r}=this.props;this.setState({activeSuggestionIndex:-1,shouldShowSuggestions:!0}),r(i)}onSearchButtonClick(i){const{onSearchButtonClick:r}=this.props;i.preventDefault(),r&&r()}onKeyDown(i){const{shouldShowSuggestions:r}=this.state;let{activeSuggestionIndex:a}=this.state;const{suggestions:s}=this.props,o=a>-1;switch(this.setState({setAriaActiveDescendant:i.keyCode===38||i.keyCode===40}),i.keyCode){case 9:o&&r&&this.setValue(s[a]);break;case 13:o&&r?(i.preventDefault(),this.setValue(s[a])):r&&s.length===1?this.setValue(s[0]):this.setState({shouldShowSuggestions:!1});break;case 27:r&&s.length>0&&(i.preventDefault(),this.setState({shouldShowSuggestions:!1}));break;case 38:r&&(i.preventDefault(),a=a-1===-2?-1:a-1,this.setState({activeSuggestionIndex:a}));break;case 40:r&&(i.preventDefault(),a=a+1===s.length?s.length-1:a+1,this.setState({activeSuggestionIndex:a}));break}}onFocus(){this.setState({hasFocus:!0,activeSuggestionIndex:-1})}onBlur(){const i=setTimeout(()=>{const{shouldBlur:a}=this.state;a&&this.setState({hasFocus:!1})},10);this.setState({blurDelay:i});const{onBlur:r}=this.props;r&&r()}setSuggestionIndex(i){this.setState({activeSuggestionIndex:i}),this.clearBlurDelay()}setValue(i){this.setState({shouldShowSuggestions:!1,activeSuggestionIndex:-1},()=>{this.inputRef.focus()}),this.clearBlurDelay();const{onSelect:r}=this.props;r(i)}avoidBlur(){this.setState({shouldBlur:!1})}clearBlurDelay(){const{blurDelay:i}=this.state;i&&(clearTimeout(i),this.setState({blurDelay:null})),this.setState({shouldBlur:!0})}render(){const{suggestions:i,id:r,ariaLabel:a,placeholder:s,value:o,name:d,shouldFocusOnMount:g,isLoading:c}=this.props,{activeSuggestionIndex:m,setAriaActiveDescendant:h,hasFocus:v,shouldShowSuggestions:_}=this.state,b=v&&_&&i.length>0,O=h&&m>-1?`${r}-item-${m}`:void 0;return gt.jsxs("div",{className:`${nl.autocomplete} autocomplete`,"aria-expanded":b,"aria-owns":`${r}-suggestions`,"aria-haspopup":"listbox",children:[gt.jsx(pl,{variant:"primary",id:r,name:d,"aria-label":a,"aria-autocomplete":"list","aria-controls":`${r}-suggestions`,"aria-activedescendant":O,placeholder:s,value:o,autoComplete:"off",onChange:this.onChange,onBlur:this.onBlur,onKeyDown:this.onKeyDown,onFocus:this.onFocus,ref:T=>{this.inputRef=T},className:"typo-normal",autoFocus:g,label:a,hideLabel:!0,children:gt.jsx(pl.Button,{loading:c,onClick:this.onSearchButtonClick})}),gt.jsx("ul",{id:`${r}-suggestions`,role:"listbox",className:b?nl.autocomplete__suggestions:nl["autocomplete__suggestions--hidden"],children:b&&i.map((T,E)=>gt.jsx(Z_,{id:`${r}-item-${E}`,index:E,value:T,match:o,active:E===m,onClick:this.setValue,setSuggestionIndex:this.setSuggestionIndex,avoidBlur:this.avoidBlur},T.key))})]})}}var yl={exports:{}},nw=yl.exports,Tg;function tw(){return Tg||(Tg=1,function(e,i){(function(r,a){e.exports=a()})(nw,function(){var r=1e3,a=6e4,s=36e5,o="millisecond",d="second",g="minute",c="hour",m="day",h="week",v="month",_="quarter",b="year",O="date",T="Invalid Date",E=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,R=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,D={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(P){var x=["th","st","nd","rd"],F=P%100;return"["+P+(x[(F-20)%10]||x[F]||x[0])+"]"}},S=function(P,x,F){var C=String(P);return!C||C.length>=x?P:""+Array(x+1-C.length).join(F)+P},z={s:S,z:function(P){var x=-P.utcOffset(),F=Math.abs(x),C=Math.floor(F/60),B=F%60;return(x<=0?"+":"-")+S(C,2,"0")+":"+S(B,2,"0")},m:function P(x,F){if(x.date()<F.date())return-P(F,x);var C=12*(F.year()-x.year())+(F.month()-x.month()),B=x.clone().add(C,v),q=F-B<0,U=x.clone().add(C+(q?-1:1),v);return+(-(C+(F-B)/(q?B-U:U-B))||0)},a:function(P){return P<0?Math.ceil(P)||0:Math.floor(P)},p:function(P){return{M:v,y:b,w:h,d:m,D:O,h:c,m:g,s:d,ms:o,Q:_}[P]||String(P||"").toLowerCase().replace(/s$/,"")},u:function(P){return P===void 0}},j="en",$={};$[j]=D;var M="$isDayjsObject",K=function(P){return P instanceof te||!(!P||!P[M])},ee=function P(x,F,C){var B;if(!x)return j;if(typeof x=="string"){var q=x.toLowerCase();$[q]&&(B=q),F&&($[q]=F,B=q);var U=x.split("-");if(!B&&U.length>1)return P(U[0])}else{var Z=x.name;$[Z]=x,B=Z}return!C&&B&&(j=B),B||!C&&j},ne=function(P,x){if(K(P))return P.clone();var F=typeof x=="object"?x:{};return F.date=P,F.args=arguments,new te(F)},X=z;X.l=ee,X.i=K,X.w=function(P,x){return ne(P,{locale:x.$L,utc:x.$u,x:x.$x,$offset:x.$offset})};var te=function(){function P(F){this.$L=ee(F.locale,null,!0),this.parse(F),this.$x=this.$x||F.x||{},this[M]=!0}var x=P.prototype;return x.parse=function(F){this.$d=function(C){var B=C.date,q=C.utc;if(B===null)return new Date(NaN);if(X.u(B))return new Date;if(B instanceof Date)return new Date(B);if(typeof B=="string"&&!/Z$/i.test(B)){var U=B.match(E);if(U){var Z=U[2]-1||0,re=(U[7]||"0").substring(0,3);return q?new Date(Date.UTC(U[1],Z,U[3]||1,U[4]||0,U[5]||0,U[6]||0,re)):new Date(U[1],Z,U[3]||1,U[4]||0,U[5]||0,U[6]||0,re)}}return new Date(B)}(F),this.init()},x.init=function(){var F=this.$d;this.$y=F.getFullYear(),this.$M=F.getMonth(),this.$D=F.getDate(),this.$W=F.getDay(),this.$H=F.getHours(),this.$m=F.getMinutes(),this.$s=F.getSeconds(),this.$ms=F.getMilliseconds()},x.$utils=function(){return X},x.isValid=function(){return this.$d.toString()!==T},x.isSame=function(F,C){var B=ne(F);return this.startOf(C)<=B&&B<=this.endOf(C)},x.isAfter=function(F,C){return ne(F)<this.startOf(C)},x.isBefore=function(F,C){return this.endOf(C)<ne(F)},x.$g=function(F,C,B){return X.u(F)?this[C]:this.set(B,F)},x.unix=function(){return Math.floor(this.valueOf()/1e3)},x.valueOf=function(){return this.$d.getTime()},x.startOf=function(F,C){var B=this,q=!!X.u(C)||C,U=X.p(F),Z=function(ve,Ae){var Se=X.w(B.$u?Date.UTC(B.$y,Ae,ve):new Date(B.$y,Ae,ve),B);return q?Se:Se.endOf(m)},re=function(ve,Ae){return X.w(B.toDate()[ve].apply(B.toDate("s"),(q?[0,0,0,0]:[23,59,59,999]).slice(Ae)),B)},oe=this.$W,je=this.$M,Ee=this.$D,Re="set"+(this.$u?"UTC":"");switch(U){case b:return q?Z(1,0):Z(31,11);case v:return q?Z(1,je):Z(0,je+1);case h:var Ne=this.$locale().weekStart||0,me=(oe<Ne?oe+7:oe)-Ne;return Z(q?Ee-me:Ee+(6-me),je);case m:case O:return re(Re+"Hours",0);case c:return re(Re+"Minutes",1);case g:return re(Re+"Seconds",2);case d:return re(Re+"Milliseconds",3);default:return this.clone()}},x.endOf=function(F){return this.startOf(F,!1)},x.$set=function(F,C){var B,q=X.p(F),U="set"+(this.$u?"UTC":""),Z=(B={},B[m]=U+"Date",B[O]=U+"Date",B[v]=U+"Month",B[b]=U+"FullYear",B[c]=U+"Hours",B[g]=U+"Minutes",B[d]=U+"Seconds",B[o]=U+"Milliseconds",B)[q],re=q===m?this.$D+(C-this.$W):C;if(q===v||q===b){var oe=this.clone().set(O,1);oe.$d[Z](re),oe.init(),this.$d=oe.set(O,Math.min(this.$D,oe.daysInMonth())).$d}else Z&&this.$d[Z](re);return this.init(),this},x.set=function(F,C){return this.clone().$set(F,C)},x.get=function(F){return this[X.p(F)]()},x.add=function(F,C){var B,q=this;F=Number(F);var U=X.p(C),Z=function(je){var Ee=ne(q);return X.w(Ee.date(Ee.date()+Math.round(je*F)),q)};if(U===v)return this.set(v,this.$M+F);if(U===b)return this.set(b,this.$y+F);if(U===m)return Z(1);if(U===h)return Z(7);var re=(B={},B[g]=a,B[c]=s,B[d]=r,B)[U]||1,oe=this.$d.getTime()+F*re;return X.w(oe,this)},x.subtract=function(F,C){return this.add(-1*F,C)},x.format=function(F){var C=this,B=this.$locale();if(!this.isValid())return B.invalidDate||T;var q=F||"YYYY-MM-DDTHH:mm:ssZ",U=X.z(this),Z=this.$H,re=this.$m,oe=this.$M,je=B.weekdays,Ee=B.months,Re=B.meridiem,Ne=function(Ae,Se,qe,Qe){return Ae&&(Ae[Se]||Ae(C,q))||qe[Se].slice(0,Qe)},me=function(Ae){return X.s(Z%12||12,Ae,"0")},ve=Re||function(Ae,Se,qe){var Qe=Ae<12?"AM":"PM";return qe?Qe.toLowerCase():Qe};return q.replace(R,function(Ae,Se){return Se||function(qe){switch(qe){case"YY":return String(C.$y).slice(-2);case"YYYY":return X.s(C.$y,4,"0");case"M":return oe+1;case"MM":return X.s(oe+1,2,"0");case"MMM":return Ne(B.monthsShort,oe,Ee,3);case"MMMM":return Ne(Ee,oe);case"D":return C.$D;case"DD":return X.s(C.$D,2,"0");case"d":return String(C.$W);case"dd":return Ne(B.weekdaysMin,C.$W,je,2);case"ddd":return Ne(B.weekdaysShort,C.$W,je,3);case"dddd":return je[C.$W];case"H":return String(Z);case"HH":return X.s(Z,2,"0");case"h":return me(1);case"hh":return me(2);case"a":return ve(Z,re,!0);case"A":return ve(Z,re,!1);case"m":return String(re);case"mm":return X.s(re,2,"0");case"s":return String(C.$s);case"ss":return X.s(C.$s,2,"0");case"SSS":return X.s(C.$ms,3,"0");case"Z":return U}return null}(Ae)||U.replace(":","")})},x.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},x.diff=function(F,C,B){var q,U=this,Z=X.p(C),re=ne(F),oe=(re.utcOffset()-this.utcOffset())*a,je=this-re,Ee=function(){return X.m(U,re)};switch(Z){case b:q=Ee()/12;break;case v:q=Ee();break;case _:q=Ee()/3;break;case h:q=(je-oe)/6048e5;break;case m:q=(je-oe)/864e5;break;case c:q=je/s;break;case g:q=je/a;break;case d:q=je/r;break;default:q=je}return B?q:X.a(q)},x.daysInMonth=function(){return this.endOf(v).$D},x.$locale=function(){return $[this.$L]},x.locale=function(F,C){if(!F)return this.$L;var B=this.clone(),q=ee(F,C,!0);return q&&(B.$L=q),B},x.clone=function(){return X.w(this.$d,this)},x.toDate=function(){return new Date(this.valueOf())},x.toJSON=function(){return this.isValid()?this.toISOString():null},x.toISOString=function(){return this.$d.toISOString()},x.toString=function(){return this.$d.toUTCString()},P}(),G=te.prototype;return ne.prototype=G,[["$ms",o],["$s",d],["$m",g],["$H",c],["$W",m],["$M",v],["$y",b],["$D",O]].forEach(function(P){G[P[1]]=function(x){return this.$g(x,P[0],P[1])}}),ne.extend=function(P,x){return P.$i||(P(x,te,ne),P.$i=!0),ne},ne.locale=ee,ne.isDayjs=K,ne.unix=function(P){return ne(1e3*P)},ne.en=$[j],ne.Ls=$,ne.p={},ne})}(yl)),yl.exports}var rw=tw();const na=Vf(rw);var bl=function(e,i){return bl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,a){r.__proto__=a}||function(r,a){for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(r[s]=a[s])},bl(e,i)};function Kn(e,i){if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");bl(e,i);function r(){this.constructor=e}e.prototype=i===null?Object.create(i):(r.prototype=i.prototype,new r)}var se=function(){return se=Object.assign||function(e){for(var i,r=1,a=arguments.length;r<a;r++){i=arguments[r];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e},se.apply(this,arguments)};function ki(e,i){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)i.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r}function Wn(e,i,r){if(arguments.length===2)for(var a=0,s=i.length,o;a<s;a++)(o||!(a in i))&&(o||(o=Array.prototype.slice.call(i,0,a)),o[a]=i[a]);return e.concat(o||Array.prototype.slice.call(i))}function Un(e,i){var r=i&&i.cache?i.cache:dw,a=i&&i.serializer?i.serializer:ow,s=i&&i.strategy?i.strategy:sw;return s(e,{cache:r,serializer:a})}function aw(e){return e==null||typeof e=="number"||typeof e=="boolean"}function iw(e,i,r,a){var s=aw(a)?a:r(a),o=i.get(s);return typeof o>"u"&&(o=e.call(this,a),i.set(s,o)),o}function Hf(e,i,r){var a=Array.prototype.slice.call(arguments,3),s=r(a),o=i.get(s);return typeof o>"u"&&(o=e.apply(this,a),i.set(s,o)),o}function Gf(e,i,r,a,s){return r.bind(i,e,a,s)}function sw(e,i){var r=e.length===1?iw:Hf;return Gf(e,this,r,i.cache.create(),i.serializer)}function lw(e,i){return Gf(e,this,Hf,i.cache.create(),i.serializer)}var ow=function(){return JSON.stringify(arguments)},uw=function(){function e(){this.cache=Object.create(null)}return e.prototype.get=function(i){return this.cache[i]},e.prototype.set=function(i,r){this.cache[i]=r},e}(),dw={create:function(){return new uw}},Yn={variadic:lw},_e;(function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(_e||(_e={}));var Ke;(function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"})(Ke||(Ke={}));var gr;(function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"})(gr||(gr={}));function _g(e){return e.type===Ke.literal}function gw(e){return e.type===Ke.argument}function $f(e){return e.type===Ke.number}function Uf(e){return e.type===Ke.date}function Yf(e){return e.type===Ke.time}function Wf(e){return e.type===Ke.select}function zf(e){return e.type===Ke.plural}function fw(e){return e.type===Ke.pound}function Xf(e){return e.type===Ke.tag}function Jf(e){return!!(e&&typeof e=="object"&&e.type===gr.number)}function El(e){return!!(e&&typeof e=="object"&&e.type===gr.dateTime)}var Zf=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,cw=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function mw(e){var i={};return e.replace(cw,function(r){var a=r.length;switch(r[0]){case"G":i.era=a===4?"long":a===5?"narrow":"short";break;case"y":i.year=a===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":i.month=["numeric","2-digit","short","long","narrow"][a-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":i.day=["numeric","2-digit"][a-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":i.weekday=a===4?"long":a===5?"narrow":"short";break;case"e":if(a<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");i.weekday=["short","long","narrow","short"][a-4];break;case"c":if(a<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");i.weekday=["short","long","narrow","short"][a-4];break;case"a":i.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":i.hourCycle="h12",i.hour=["numeric","2-digit"][a-1];break;case"H":i.hourCycle="h23",i.hour=["numeric","2-digit"][a-1];break;case"K":i.hourCycle="h11",i.hour=["numeric","2-digit"][a-1];break;case"k":i.hourCycle="h24",i.hour=["numeric","2-digit"][a-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":i.minute=["numeric","2-digit"][a-1];break;case"s":i.second=["numeric","2-digit"][a-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":i.timeZoneName=a<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),i}var pw=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function hw(e){if(e.length===0)throw new Error("Number skeleton cannot be empty");for(var i=e.split(pw).filter(function(_){return _.length>0}),r=[],a=0,s=i;a<s.length;a++){var o=s[a],d=o.split("/");if(d.length===0)throw new Error("Invalid number skeleton");for(var g=d[0],c=d.slice(1),m=0,h=c;m<h.length;m++){var v=h[m];if(v.length===0)throw new Error("Invalid number skeleton")}r.push({stem:g,options:c})}return r}function kw(e){return e.replace(/^(.*?)-/,"")}var wg=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,Qf=/^(@+)?(\+|#+)?[rs]?$/g,vw=/(\*)(0+)|(#+)(0+)|(0+)/g,ec=/^(0+)$/;function Ag(e){var i={};return e[e.length-1]==="r"?i.roundingPriority="morePrecision":e[e.length-1]==="s"&&(i.roundingPriority="lessPrecision"),e.replace(Qf,function(r,a,s){return typeof s!="string"?(i.minimumSignificantDigits=a.length,i.maximumSignificantDigits=a.length):s==="+"?i.minimumSignificantDigits=a.length:a[0]==="#"?i.maximumSignificantDigits=a.length:(i.minimumSignificantDigits=a.length,i.maximumSignificantDigits=a.length+(typeof s=="string"?s.length:0)),""}),i}function nc(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function yw(e){var i;if(e[0]==="E"&&e[1]==="E"?(i={notation:"engineering"},e=e.slice(2)):e[0]==="E"&&(i={notation:"scientific"},e=e.slice(1)),i){var r=e.slice(0,2);if(r==="+!"?(i.signDisplay="always",e=e.slice(2)):r==="+?"&&(i.signDisplay="exceptZero",e=e.slice(2)),!ec.test(e))throw new Error("Malformed concise eng/scientific notation");i.minimumIntegerDigits=e.length}return i}function Rg(e){var i={},r=nc(e);return r||i}function bw(e){for(var i={},r=0,a=e;r<a.length;r++){var s=a[r];switch(s.stem){case"percent":case"%":i.style="percent";continue;case"%x100":i.style="percent",i.scale=100;continue;case"currency":i.style="currency",i.currency=s.options[0];continue;case"group-off":case",_":i.useGrouping=!1;continue;case"precision-integer":case".":i.maximumFractionDigits=0;continue;case"measure-unit":case"unit":i.style="unit",i.unit=kw(s.options[0]);continue;case"compact-short":case"K":i.notation="compact",i.compactDisplay="short";continue;case"compact-long":case"KK":i.notation="compact",i.compactDisplay="long";continue;case"scientific":i=se(se(se({},i),{notation:"scientific"}),s.options.reduce(function(c,m){return se(se({},c),Rg(m))},{}));continue;case"engineering":i=se(se(se({},i),{notation:"engineering"}),s.options.reduce(function(c,m){return se(se({},c),Rg(m))},{}));continue;case"notation-simple":i.notation="standard";continue;case"unit-width-narrow":i.currencyDisplay="narrowSymbol",i.unitDisplay="narrow";continue;case"unit-width-short":i.currencyDisplay="code",i.unitDisplay="short";continue;case"unit-width-full-name":i.currencyDisplay="name",i.unitDisplay="long";continue;case"unit-width-iso-code":i.currencyDisplay="symbol";continue;case"scale":i.scale=parseFloat(s.options[0]);continue;case"rounding-mode-floor":i.roundingMode="floor";continue;case"rounding-mode-ceiling":i.roundingMode="ceil";continue;case"rounding-mode-down":i.roundingMode="trunc";continue;case"rounding-mode-up":i.roundingMode="expand";continue;case"rounding-mode-half-even":i.roundingMode="halfEven";continue;case"rounding-mode-half-down":i.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":i.roundingMode="halfExpand";continue;case"integer-width":if(s.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");s.options[0].replace(vw,function(c,m,h,v,_,b){if(m)i.minimumIntegerDigits=h.length;else{if(v&&_)throw new Error("We currently do not support maximum integer digits");if(b)throw new Error("We currently do not support exact integer digits")}return""});continue}if(ec.test(s.stem)){i.minimumIntegerDigits=s.stem.length;continue}if(wg.test(s.stem)){if(s.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");s.stem.replace(wg,function(c,m,h,v,_,b){return h==="*"?i.minimumFractionDigits=m.length:v&&v[0]==="#"?i.maximumFractionDigits=v.length:_&&b?(i.minimumFractionDigits=_.length,i.maximumFractionDigits=_.length+b.length):(i.minimumFractionDigits=m.length,i.maximumFractionDigits=m.length),""});var o=s.options[0];o==="w"?i=se(se({},i),{trailingZeroDisplay:"stripIfInteger"}):o&&(i=se(se({},i),Ag(o)));continue}if(Qf.test(s.stem)){i=se(se({},i),Ag(s.stem));continue}var d=nc(s.stem);d&&(i=se(se({},i),d));var g=yw(s.stem);g&&(i=se(se({},i),g))}return i}var Ja={"001":["H","h"],419:["h","H","hB","hb"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["h","H","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["h","H","hB","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["h","H","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["h","H","hB","hb"],CU:["h","H","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["h","H","hB","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["h","H","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["h","H","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["h","H","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["h","H","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["h","H","hB","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["h","H","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["h","H","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["h","H","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"en-HK":["h","hb","H","hB"],"en-IL":["H","h","hb","hB"],"en-MY":["h","hb","H","hB"],"es-BR":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function Ew(e,i){for(var r="",a=0;a<e.length;a++){var s=e.charAt(a);if(s==="j"){for(var o=0;a+1<e.length&&e.charAt(a+1)===s;)o++,a++;var d=1+(o&1),g=o<2?1:3+(o>>1),c="a",m=Tw(i);for((m=="H"||m=="k")&&(g=0);g-- >0;)r+=c;for(;d-- >0;)r=m+r}else s==="J"?r+="H":r+=s}return r}function Tw(e){var i=e.hourCycle;if(i===void 0&&e.hourCycles&&e.hourCycles.length&&(i=e.hourCycles[0]),i)switch(i){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var r=e.language,a;r!=="root"&&(a=e.maximize().region);var s=Ja[a||""]||Ja[r||""]||Ja["".concat(r,"-001")]||Ja["001"];return s[0]}var tl,_w=new RegExp("^".concat(Zf.source,"*")),ww=new RegExp("".concat(Zf.source,"*$"));function we(e,i){return{start:e,end:i}}var Aw=!!String.prototype.startsWith&&"_a".startsWith("a",1),Rw=!!String.fromCodePoint,Sw=!!Object.fromEntries,Iw=!!String.prototype.codePointAt,jw=!!String.prototype.trimStart,Nw=!!String.prototype.trimEnd,Ow=!!Number.isSafeInteger,Pw=Ow?Number.isSafeInteger:function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},Tl=!0;try{var Bw=rc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Tl=((tl=Bw.exec("a"))===null||tl===void 0?void 0:tl[0])==="a"}catch{Tl=!1}var Sg=Aw?function(e,i,r){return e.startsWith(i,r)}:function(e,i,r){return e.slice(r,r+i.length)===i},_l=Rw?String.fromCodePoint:function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];for(var r="",a=e.length,s=0,o;a>s;){if(o=e[s++],o>1114111)throw RangeError(o+" is not a valid code point");r+=o<65536?String.fromCharCode(o):String.fromCharCode(((o-=65536)>>10)+55296,o%1024+56320)}return r},Ig=Sw?Object.fromEntries:function(e){for(var i={},r=0,a=e;r<a.length;r++){var s=a[r],o=s[0],d=s[1];i[o]=d}return i},tc=Iw?function(e,i){return e.codePointAt(i)}:function(e,i){var r=e.length;if(!(i<0||i>=r)){var a=e.charCodeAt(i),s;return a<55296||a>56319||i+1===r||(s=e.charCodeAt(i+1))<56320||s>57343?a:(a-55296<<10)+(s-56320)+65536}},xw=jw?function(e){return e.trimStart()}:function(e){return e.replace(_w,"")},qw=Nw?function(e){return e.trimEnd()}:function(e){return e.replace(ww,"")};function rc(e,i){return new RegExp(e,i)}var wl;if(Tl){var jg=rc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");wl=function(e,i){var r;jg.lastIndex=i;var a=jg.exec(e);return(r=a[1])!==null&&r!==void 0?r:""}}else wl=function(e,i){for(var r=[];;){var a=tc(e,i);if(a===void 0||ac(a)||Fw(a))break;r.push(a),i+=a>=65536?2:1}return _l.apply(void 0,r)};var Dw=function(){function e(i,r){r===void 0&&(r={}),this.message=i,this.position={offset:0,line:1,column:1},this.ignoreTag=!!r.ignoreTag,this.locale=r.locale,this.requiresOtherClause=!!r.requiresOtherClause,this.shouldParseSkeletons=!!r.shouldParseSkeletons}return e.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(i,r,a){for(var s=[];!this.isEOF();){var o=this.char();if(o===123){var d=this.parseArgument(i,a);if(d.err)return d;s.push(d.val)}else{if(o===125&&i>0)break;if(o===35&&(r==="plural"||r==="selectordinal")){var g=this.clonePosition();this.bump(),s.push({type:Ke.pound,location:we(g,this.clonePosition())})}else if(o===60&&!this.ignoreTag&&this.peek()===47){if(a)break;return this.error(_e.UNMATCHED_CLOSING_TAG,we(this.clonePosition(),this.clonePosition()))}else if(o===60&&!this.ignoreTag&&Al(this.peek()||0)){var d=this.parseTag(i,r);if(d.err)return d;s.push(d.val)}else{var d=this.parseLiteral(i,r);if(d.err)return d;s.push(d.val)}}}return{val:s,err:null}},e.prototype.parseTag=function(i,r){var a=this.clonePosition();this.bump();var s=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:Ke.literal,value:"<".concat(s,"/>"),location:we(a,this.clonePosition())},err:null};if(this.bumpIf(">")){var o=this.parseMessage(i+1,r,!0);if(o.err)return o;var d=o.val,g=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!Al(this.char()))return this.error(_e.INVALID_TAG,we(g,this.clonePosition()));var c=this.clonePosition(),m=this.parseTagName();return s!==m?this.error(_e.UNMATCHED_CLOSING_TAG,we(c,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:Ke.tag,value:s,children:d,location:we(a,this.clonePosition())},err:null}:this.error(_e.INVALID_TAG,we(g,this.clonePosition())))}else return this.error(_e.UNCLOSED_TAG,we(a,this.clonePosition()))}else return this.error(_e.INVALID_TAG,we(a,this.clonePosition()))},e.prototype.parseTagName=function(){var i=this.offset();for(this.bump();!this.isEOF()&&Lw(this.char());)this.bump();return this.message.slice(i,this.offset())},e.prototype.parseLiteral=function(i,r){for(var a=this.clonePosition(),s="";;){var o=this.tryParseQuote(r);if(o){s+=o;continue}var d=this.tryParseUnquoted(i,r);if(d){s+=d;continue}var g=this.tryParseLeftAngleBracket();if(g){s+=g;continue}break}var c=we(a,this.clonePosition());return{val:{type:Ke.literal,value:s,location:c},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!Mw(this.peek()||0))?(this.bump(),"<"):null},e.prototype.tryParseQuote=function(i){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(i==="plural"||i==="selectordinal")break;return null;default:return null}this.bump();var r=[this.char()];for(this.bump();!this.isEOF();){var a=this.char();if(a===39)if(this.peek()===39)r.push(39),this.bump();else{this.bump();break}else r.push(a);this.bump()}return _l.apply(void 0,r)},e.prototype.tryParseUnquoted=function(i,r){if(this.isEOF())return null;var a=this.char();return a===60||a===123||a===35&&(r==="plural"||r==="selectordinal")||a===125&&i>0?null:(this.bump(),_l(a))},e.prototype.parseArgument=function(i,r){var a=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(_e.EXPECT_ARGUMENT_CLOSING_BRACE,we(a,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(_e.EMPTY_ARGUMENT,we(a,this.clonePosition()));var s=this.parseIdentifierIfPossible().value;if(!s)return this.error(_e.MALFORMED_ARGUMENT,we(a,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(_e.EXPECT_ARGUMENT_CLOSING_BRACE,we(a,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:Ke.argument,value:s,location:we(a,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(_e.EXPECT_ARGUMENT_CLOSING_BRACE,we(a,this.clonePosition())):this.parseArgumentOptions(i,r,s,a);default:return this.error(_e.MALFORMED_ARGUMENT,we(a,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var i=this.clonePosition(),r=this.offset(),a=wl(this.message,r),s=r+a.length;this.bumpTo(s);var o=this.clonePosition(),d=we(i,o);return{value:a,location:d}},e.prototype.parseArgumentOptions=function(i,r,a,s){var o,d=this.clonePosition(),g=this.parseIdentifierIfPossible().value,c=this.clonePosition();switch(g){case"":return this.error(_e.EXPECT_ARGUMENT_TYPE,we(d,c));case"number":case"date":case"time":{this.bumpSpace();var m=null;if(this.bumpIf(",")){this.bumpSpace();var h=this.clonePosition(),v=this.parseSimpleArgStyleIfPossible();if(v.err)return v;var _=qw(v.val);if(_.length===0)return this.error(_e.EXPECT_ARGUMENT_STYLE,we(this.clonePosition(),this.clonePosition()));var b=we(h,this.clonePosition());m={style:_,styleLocation:b}}var O=this.tryParseArgumentClose(s);if(O.err)return O;var T=we(s,this.clonePosition());if(m&&Sg(m==null?void 0:m.style,"::",0)){var E=xw(m.style.slice(2));if(g==="number"){var v=this.parseNumberSkeletonFromString(E,m.styleLocation);return v.err?v:{val:{type:Ke.number,value:a,location:T,style:v.val},err:null}}else{if(E.length===0)return this.error(_e.EXPECT_DATE_TIME_SKELETON,T);var R=E;this.locale&&(R=Ew(E,this.locale));var _={type:gr.dateTime,pattern:R,location:m.styleLocation,parsedOptions:this.shouldParseSkeletons?mw(R):{}},D=g==="date"?Ke.date:Ke.time;return{val:{type:D,value:a,location:T,style:_},err:null}}}return{val:{type:g==="number"?Ke.number:g==="date"?Ke.date:Ke.time,value:a,location:T,style:(o=m==null?void 0:m.style)!==null&&o!==void 0?o:null},err:null}}case"plural":case"selectordinal":case"select":{var S=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(_e.EXPECT_SELECT_ARGUMENT_OPTIONS,we(S,se({},S)));this.bumpSpace();var z=this.parseIdentifierIfPossible(),j=0;if(g!=="select"&&z.value==="offset"){if(!this.bumpIf(":"))return this.error(_e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,we(this.clonePosition(),this.clonePosition()));this.bumpSpace();var v=this.tryParseDecimalInteger(_e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,_e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(v.err)return v;this.bumpSpace(),z=this.parseIdentifierIfPossible(),j=v.val}var $=this.tryParsePluralOrSelectOptions(i,g,r,z);if($.err)return $;var O=this.tryParseArgumentClose(s);if(O.err)return O;var M=we(s,this.clonePosition());return g==="select"?{val:{type:Ke.select,value:a,options:Ig($.val),location:M},err:null}:{val:{type:Ke.plural,value:a,options:Ig($.val),offset:j,pluralType:g==="plural"?"cardinal":"ordinal",location:M},err:null}}default:return this.error(_e.INVALID_ARGUMENT_TYPE,we(d,c))}},e.prototype.tryParseArgumentClose=function(i){return this.isEOF()||this.char()!==125?this.error(_e.EXPECT_ARGUMENT_CLOSING_BRACE,we(i,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var i=0,r=this.clonePosition();!this.isEOF();){var a=this.char();switch(a){case 39:{this.bump();var s=this.clonePosition();if(!this.bumpUntil("'"))return this.error(_e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,we(s,this.clonePosition()));this.bump();break}case 123:{i+=1,this.bump();break}case 125:{if(i>0)i-=1;else return{val:this.message.slice(r.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(r.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(i,r){var a=[];try{a=hw(i)}catch{return this.error(_e.INVALID_NUMBER_SKELETON,r)}return{val:{type:gr.number,tokens:a,location:r,parsedOptions:this.shouldParseSkeletons?bw(a):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(i,r,a,s){for(var o,d=!1,g=[],c=new Set,m=s.value,h=s.location;;){if(m.length===0){var v=this.clonePosition();if(r!=="select"&&this.bumpIf("=")){var _=this.tryParseDecimalInteger(_e.EXPECT_PLURAL_ARGUMENT_SELECTOR,_e.INVALID_PLURAL_ARGUMENT_SELECTOR);if(_.err)return _;h=we(v,this.clonePosition()),m=this.message.slice(v.offset,this.offset())}else break}if(c.has(m))return this.error(r==="select"?_e.DUPLICATE_SELECT_ARGUMENT_SELECTOR:_e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,h);m==="other"&&(d=!0),this.bumpSpace();var b=this.clonePosition();if(!this.bumpIf("{"))return this.error(r==="select"?_e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:_e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,we(this.clonePosition(),this.clonePosition()));var O=this.parseMessage(i+1,r,a);if(O.err)return O;var T=this.tryParseArgumentClose(b);if(T.err)return T;g.push([m,{value:O.val,location:we(b,this.clonePosition())}]),c.add(m),this.bumpSpace(),o=this.parseIdentifierIfPossible(),m=o.value,h=o.location}return g.length===0?this.error(r==="select"?_e.EXPECT_SELECT_ARGUMENT_SELECTOR:_e.EXPECT_PLURAL_ARGUMENT_SELECTOR,we(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!d?this.error(_e.MISSING_OTHER_CLAUSE,we(this.clonePosition(),this.clonePosition())):{val:g,err:null}},e.prototype.tryParseDecimalInteger=function(i,r){var a=1,s=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(a=-1);for(var o=!1,d=0;!this.isEOF();){var g=this.char();if(g>=48&&g<=57)o=!0,d=d*10+(g-48),this.bump();else break}var c=we(s,this.clonePosition());return o?(d*=a,Pw(d)?{val:d,err:null}:this.error(r,c)):this.error(i,c)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var i=this.position.offset;if(i>=this.message.length)throw Error("out of bound");var r=tc(this.message,i);if(r===void 0)throw Error("Offset ".concat(i," is at invalid UTF-16 code unit boundary"));return r},e.prototype.error=function(i,r){return{val:null,err:{kind:i,message:this.message,location:r}}},e.prototype.bump=function(){if(!this.isEOF()){var i=this.char();i===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=i<65536?1:2)}},e.prototype.bumpIf=function(i){if(Sg(this.message,i,this.offset())){for(var r=0;r<i.length;r++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(i){var r=this.offset(),a=this.message.indexOf(i,r);return a>=0?(this.bumpTo(a),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(i){if(this.offset()>i)throw Error("targetOffset ".concat(i," must be greater than or equal to the current offset ").concat(this.offset()));for(i=Math.min(i,this.message.length);;){var r=this.offset();if(r===i)break;if(r>i)throw Error("targetOffset ".concat(i," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&ac(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var i=this.char(),r=this.offset(),a=this.message.charCodeAt(r+(i>=65536?2:1));return a??null},e}();function Al(e){return e>=97&&e<=122||e>=65&&e<=90}function Mw(e){return Al(e)||e===47}function Lw(e){return e===45||e===46||e>=48&&e<=57||e===95||e>=97&&e<=122||e>=65&&e<=90||e==183||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function ac(e){return e>=9&&e<=13||e===32||e===133||e>=8206&&e<=8207||e===8232||e===8233}function Fw(e){return e>=33&&e<=35||e===36||e>=37&&e<=39||e===40||e===41||e===42||e===43||e===44||e===45||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||e===91||e===92||e===93||e===94||e===96||e===123||e===124||e===125||e===126||e===161||e>=162&&e<=165||e===166||e===167||e===169||e===171||e===172||e===174||e===176||e===177||e===182||e===187||e===191||e===215||e===247||e>=8208&&e<=8213||e>=8214&&e<=8215||e===8216||e===8217||e===8218||e>=8219&&e<=8220||e===8221||e===8222||e===8223||e>=8224&&e<=8231||e>=8240&&e<=8248||e===8249||e===8250||e>=8251&&e<=8254||e>=8257&&e<=8259||e===8260||e===8261||e===8262||e>=8263&&e<=8273||e===8274||e===8275||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||e===8608||e>=8609&&e<=8610||e===8611||e>=8612&&e<=8613||e===8614||e>=8615&&e<=8621||e===8622||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||e===8658||e===8659||e===8660||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||e===8968||e===8969||e===8970||e===8971||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||e===9001||e===9002||e>=9003&&e<=9083||e===9084||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||e===9655||e>=9656&&e<=9664||e===9665||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||e===9839||e>=9840&&e<=10087||e===10088||e===10089||e===10090||e===10091||e===10092||e===10093||e===10094||e===10095||e===10096||e===10097||e===10098||e===10099||e===10100||e===10101||e>=10132&&e<=10175||e>=10176&&e<=10180||e===10181||e===10182||e>=10183&&e<=10213||e===10214||e===10215||e===10216||e===10217||e===10218||e===10219||e===10220||e===10221||e===10222||e===10223||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||e===10627||e===10628||e===10629||e===10630||e===10631||e===10632||e===10633||e===10634||e===10635||e===10636||e===10637||e===10638||e===10639||e===10640||e===10641||e===10642||e===10643||e===10644||e===10645||e===10646||e===10647||e===10648||e>=10649&&e<=10711||e===10712||e===10713||e===10714||e===10715||e>=10716&&e<=10747||e===10748||e===10749||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||e===11158||e>=11159&&e<=11263||e>=11776&&e<=11777||e===11778||e===11779||e===11780||e===11781||e>=11782&&e<=11784||e===11785||e===11786||e===11787||e===11788||e===11789||e>=11790&&e<=11798||e===11799||e>=11800&&e<=11801||e===11802||e===11803||e===11804||e===11805||e>=11806&&e<=11807||e===11808||e===11809||e===11810||e===11811||e===11812||e===11813||e===11814||e===11815||e===11816||e===11817||e>=11818&&e<=11822||e===11823||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||e===11840||e===11841||e===11842||e>=11843&&e<=11855||e>=11856&&e<=11857||e===11858||e>=11859&&e<=11903||e>=12289&&e<=12291||e===12296||e===12297||e===12298||e===12299||e===12300||e===12301||e===12302||e===12303||e===12304||e===12305||e>=12306&&e<=12307||e===12308||e===12309||e===12310||e===12311||e===12312||e===12313||e===12314||e===12315||e===12316||e===12317||e>=12318&&e<=12319||e===12320||e===12336||e===64830||e===64831||e>=65093&&e<=65094}function Rl(e){e.forEach(function(i){if(delete i.location,Wf(i)||zf(i))for(var r in i.options)delete i.options[r].location,Rl(i.options[r].value);else $f(i)&&Jf(i.style)||(Uf(i)||Yf(i))&&El(i.style)?delete i.style.location:Xf(i)&&Rl(i.children)})}function Cw(e,i){i===void 0&&(i={}),i=se({shouldParseSkeletons:!0,requiresOtherClause:!0},i);var r=new Dw(e,i).parse();if(r.err){var a=SyntaxError(_e[r.err.kind]);throw a.location=r.err.location,a.originalMessage=r.err.message,a}return i!=null&&i.captureLocation||Rl(r.val),r.val}var Jn;(function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"})(Jn||(Jn={}));var St=function(e){Kn(i,e);function i(r,a,s){var o=e.call(this,r)||this;return o.code=a,o.originalMessage=s,o}return i.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},i}(Error),Ng=function(e){Kn(i,e);function i(r,a,s,o){return e.call(this,'Invalid values for "'.concat(r,'": "').concat(a,'". Options are "').concat(Object.keys(s).join('", "'),'"'),Jn.INVALID_VALUE,o)||this}return i}(St),Kw=function(e){Kn(i,e);function i(r,a,s){return e.call(this,'Value for "'.concat(r,'" must be of type ').concat(a),Jn.INVALID_VALUE,s)||this}return i}(St),Vw=function(e){Kn(i,e);function i(r,a){return e.call(this,'The intl string context variable "'.concat(r,'" was not provided to the string "').concat(a,'"'),Jn.MISSING_VALUE,a)||this}return i}(St),dn;(function(e){e[e.literal=0]="literal",e[e.object=1]="object"})(dn||(dn={}));function Hw(e){return e.length<2?e:e.reduce(function(i,r){var a=i[i.length-1];return!a||a.type!==dn.literal||r.type!==dn.literal?i.push(r):a.value+=r.value,i},[])}function ic(e){return typeof e=="function"}function ti(e,i,r,a,s,o,d){if(e.length===1&&_g(e[0]))return[{type:dn.literal,value:e[0].value}];for(var g=[],c=0,m=e;c<m.length;c++){var h=m[c];if(_g(h)){g.push({type:dn.literal,value:h.value});continue}if(fw(h)){typeof o=="number"&&g.push({type:dn.literal,value:r.getNumberFormat(i).format(o)});continue}var v=h.value;if(!(s&&v in s))throw new Vw(v,d);var _=s[v];if(gw(h)){(!_||typeof _=="string"||typeof _=="number")&&(_=typeof _=="string"||typeof _=="number"?String(_):""),g.push({type:typeof _=="string"?dn.literal:dn.object,value:_});continue}if(Uf(h)){var b=typeof h.style=="string"?a.date[h.style]:El(h.style)?h.style.parsedOptions:void 0;g.push({type:dn.literal,value:r.getDateTimeFormat(i,b).format(_)});continue}if(Yf(h)){var b=typeof h.style=="string"?a.time[h.style]:El(h.style)?h.style.parsedOptions:a.time.medium;g.push({type:dn.literal,value:r.getDateTimeFormat(i,b).format(_)});continue}if($f(h)){var b=typeof h.style=="string"?a.number[h.style]:Jf(h.style)?h.style.parsedOptions:void 0;b&&b.scale&&(_=_*(b.scale||1)),g.push({type:dn.literal,value:r.getNumberFormat(i,b).format(_)});continue}if(Xf(h)){var O=h.children,T=h.value,E=s[T];if(!ic(E))throw new Kw(T,"function",d);var R=ti(O,i,r,a,s,o),D=E(R.map(function(j){return j.value}));Array.isArray(D)||(D=[D]),g.push.apply(g,D.map(function(j){return{type:typeof j=="string"?dn.literal:dn.object,value:j}}))}if(Wf(h)){var S=h.options[_]||h.options.other;if(!S)throw new Ng(h.value,_,Object.keys(h.options),d);g.push.apply(g,ti(S.value,i,r,a,s));continue}if(zf(h)){var S=h.options["=".concat(_)];if(!S){if(!Intl.PluralRules)throw new St(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,Jn.MISSING_INTL_API,d);var z=r.getPluralRules(i,{type:h.pluralType}).select(_-(h.offset||0));S=h.options[z]||h.options.other}if(!S)throw new Ng(h.value,_,Object.keys(h.options),d);g.push.apply(g,ti(S.value,i,r,a,s,_-(h.offset||0)));continue}}return Hw(g)}function Gw(e,i){return i?se(se(se({},e||{}),i||{}),Object.keys(e).reduce(function(r,a){return r[a]=se(se({},e[a]),i[a]||{}),r},{})):e}function $w(e,i){return i?Object.keys(e).reduce(function(r,a){return r[a]=Gw(e[a],i[a]),r},se({},e)):e}function rl(e){return{create:function(){return{get:function(i){return e[i]},set:function(i,r){e[i]=r}}}}}function Uw(e){return e===void 0&&(e={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:Un(function(){for(var i,r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];return new((i=Intl.NumberFormat).bind.apply(i,Wn([void 0],r,!1)))},{cache:rl(e.number),strategy:Yn.variadic}),getDateTimeFormat:Un(function(){for(var i,r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];return new((i=Intl.DateTimeFormat).bind.apply(i,Wn([void 0],r,!1)))},{cache:rl(e.dateTime),strategy:Yn.variadic}),getPluralRules:Un(function(){for(var i,r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];return new((i=Intl.PluralRules).bind.apply(i,Wn([void 0],r,!1)))},{cache:rl(e.pluralRules),strategy:Yn.variadic})}}var sc=function(){function e(i,r,a,s){r===void 0&&(r=e.defaultLocale);var o=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(c){var m=o.formatToParts(c);if(m.length===1)return m[0].value;var h=m.reduce(function(v,_){return!v.length||_.type!==dn.literal||typeof v[v.length-1]!="string"?v.push(_.value):v[v.length-1]+=_.value,v},[]);return h.length<=1?h[0]||"":h},this.formatToParts=function(c){return ti(o.ast,o.locales,o.formatters,o.formats,c,void 0,o.message)},this.resolvedOptions=function(){var c;return{locale:((c=o.resolvedLocale)===null||c===void 0?void 0:c.toString())||Intl.NumberFormat.supportedLocalesOf(o.locales)[0]}},this.getAst=function(){return o.ast},this.locales=r,this.resolvedLocale=e.resolveLocale(r),typeof i=="string"){if(this.message=i,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var d=s||{};d.formatters;var g=ki(d,["formatters"]);this.ast=e.__parse(i,se(se({},g),{locale:this.resolvedLocale}))}else this.ast=i;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=$w(e.formats,a),this.formatters=s&&s.formatters||Uw(this.formatterCache)}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(i){if(!(typeof Intl.Locale>"u")){var r=Intl.NumberFormat.supportedLocalesOf(i);return r.length>0?new Intl.Locale(r[0]):new Intl.Locale(typeof i=="string"?i:i[0])}},e.__parse=Cw,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}(),Vt;(function(e){e.FORMAT_ERROR="FORMAT_ERROR",e.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",e.INVALID_CONFIG="INVALID_CONFIG",e.MISSING_DATA="MISSING_DATA",e.MISSING_TRANSLATION="MISSING_TRANSLATION"})(Vt||(Vt={}));var ta=function(e){Kn(i,e);function i(r,a,s){var o=this,d=s?s instanceof Error?s:new Error(String(s)):void 0;return o=e.call(this,"[@formatjs/intl Error ".concat(r,"] ").concat(a,`
`).concat(d?`
`.concat(d.message,`
`).concat(d.stack):""))||this,o.code=r,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(o,i),o}return i}(Error),Yw=function(e){Kn(i,e);function i(r,a){return e.call(this,Vt.UNSUPPORTED_FORMATTER,r,a)||this}return i}(ta),Ww=function(e){Kn(i,e);function i(r,a){return e.call(this,Vt.INVALID_CONFIG,r,a)||this}return i}(ta),Og=function(e){Kn(i,e);function i(r,a){return e.call(this,Vt.MISSING_DATA,r,a)||this}return i}(ta),qn=function(e){Kn(i,e);function i(r,a,s){var o=e.call(this,Vt.FORMAT_ERROR,"".concat(r,`
Locale: `).concat(a,`
`),s)||this;return o.locale=a,o}return i}(ta),al=function(e){Kn(i,e);function i(r,a,s,o){var d=e.call(this,"".concat(r,`
MessageID: `).concat(s==null?void 0:s.id,`
Default Message: `).concat(s==null?void 0:s.defaultMessage,`
Description: `).concat(s==null?void 0:s.description,`
`),a,o)||this;return d.descriptor=s,d.locale=a,d}return i}(qn),zw=function(e){Kn(i,e);function i(r,a){var s=e.call(this,Vt.MISSING_TRANSLATION,'Missing message: "'.concat(r.id,'" for locale "').concat(a,'", using ').concat(r.defaultMessage?"default message (".concat(typeof r.defaultMessage=="string"?r.defaultMessage:r.defaultMessage.map(function(o){var d;return(d=o.value)!==null&&d!==void 0?d:JSON.stringify(o)}).join(),")"):"id"," as fallback."))||this;return s.descriptor=r,s}return i}(ta);function Xw(e,i,r){if(r===void 0&&(r=Error),!e)throw new r(i)}function pr(e,i,r){return r===void 0&&(r={}),i.reduce(function(a,s){return s in e?a[s]=e[s]:s in r&&(a[s]=r[s]),a},{})}var Jw=function(e){},Zw=function(e){},lc={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:Jw,onWarn:Zw};function oc(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function Mt(e){return{create:function(){return{get:function(i){return e[i]},set:function(i,r){e[i]=r}}}}}function Qw(e){e===void 0&&(e=oc());var i=Intl.RelativeTimeFormat,r=Intl.ListFormat,a=Intl.DisplayNames,s=Un(function(){for(var g,c=[],m=0;m<arguments.length;m++)c[m]=arguments[m];return new((g=Intl.DateTimeFormat).bind.apply(g,Wn([void 0],c,!1)))},{cache:Mt(e.dateTime),strategy:Yn.variadic}),o=Un(function(){for(var g,c=[],m=0;m<arguments.length;m++)c[m]=arguments[m];return new((g=Intl.NumberFormat).bind.apply(g,Wn([void 0],c,!1)))},{cache:Mt(e.number),strategy:Yn.variadic}),d=Un(function(){for(var g,c=[],m=0;m<arguments.length;m++)c[m]=arguments[m];return new((g=Intl.PluralRules).bind.apply(g,Wn([void 0],c,!1)))},{cache:Mt(e.pluralRules),strategy:Yn.variadic});return{getDateTimeFormat:s,getNumberFormat:o,getMessageFormat:Un(function(g,c,m,h){return new sc(g,c,m,se({formatters:{getNumberFormat:o,getDateTimeFormat:s,getPluralRules:d}},h||{}))},{cache:Mt(e.message),strategy:Yn.variadic}),getRelativeTimeFormat:Un(function(){for(var g=[],c=0;c<arguments.length;c++)g[c]=arguments[c];return new(i.bind.apply(i,Wn([void 0],g,!1)))},{cache:Mt(e.relativeTime),strategy:Yn.variadic}),getPluralRules:d,getListFormat:Un(function(){for(var g=[],c=0;c<arguments.length;c++)g[c]=arguments[c];return new(r.bind.apply(r,Wn([void 0],g,!1)))},{cache:Mt(e.list),strategy:Yn.variadic}),getDisplayNames:Un(function(){for(var g=[],c=0;c<arguments.length;c++)g[c]=arguments[c];return new(a.bind.apply(a,Wn([void 0],g,!1)))},{cache:Mt(e.displayNames),strategy:Yn.variadic})}}function zl(e,i,r,a){var s=e&&e[i],o;if(s&&(o=s[r]),o)return o;a(new Yw("No ".concat(i," format named: ").concat(r)))}function Za(e,i){return Object.keys(e).reduce(function(r,a){return r[a]=se({timeZone:i},e[a]),r},{})}function Pg(e,i){var r=Object.keys(se(se({},e),i));return r.reduce(function(a,s){return a[s]=se(se({},e[s]||{}),i[s]||{}),a},{})}function Bg(e,i){if(!i)return e;var r=sc.formats;return se(se(se({},r),e),{date:Pg(Za(r.date,i),Za(e.date||{},i)),time:Pg(Za(r.time,i),Za(e.time||{},i))})}var Sl=function(e,i,r,a,s){var o=e.locale,d=e.formats,g=e.messages,c=e.defaultLocale,m=e.defaultFormats,h=e.fallbackOnEmptyString,v=e.onError,_=e.timeZone,b=e.defaultRichTextElements;r===void 0&&(r={id:""});var O=r.id,T=r.defaultMessage;Xw(!!O,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var E=String(O),R=g&&Object.prototype.hasOwnProperty.call(g,E)&&g[E];if(Array.isArray(R)&&R.length===1&&R[0].type===Ke.literal)return R[0].value;if(!a&&R&&typeof R=="string"&&!b)return R.replace(/'\{(.*?)\}'/gi,"{$1}");if(a=se(se({},b),a||{}),d=Bg(d,_),m=Bg(m,_),!R){if(h===!1&&R==="")return R;if((!T||o&&o.toLowerCase()!==c.toLowerCase())&&v(new zw(r,o)),T)try{var D=i.getMessageFormat(T,c,m,s);return D.format(a)}catch(S){return v(new al('Error formatting default message for: "'.concat(E,'", rendering default message verbatim'),o,r,S)),typeof T=="string"?T:E}return E}try{var D=i.getMessageFormat(R,o,d,se({formatters:i},s||{}));return D.format(a)}catch(S){v(new al('Error formatting message: "'.concat(E,'", using ').concat(T?"default message":"id"," as fallback."),o,r,S))}if(T)try{var D=i.getMessageFormat(T,c,m,s);return D.format(a)}catch(S){v(new al('Error formatting the default message for: "'.concat(E,'", rendering message verbatim'),o,r,S))}return typeof R=="string"?R:typeof T=="string"?T:E},eA=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function ra(e,i,r,a){var s=e.locale,o=e.formats,d=e.onError,g=e.timeZone;a===void 0&&(a={});var c=a.format,m=se(se({},g&&{timeZone:g}),c&&zl(o,i,c,d)),h=pr(a,eA,m);return i==="time"&&!h.hour&&!h.minute&&!h.second&&!h.timeStyle&&!h.dateStyle&&(h=se(se({},h),{hour:"numeric",minute:"numeric"})),r(s,h)}function nA(e,i){for(var r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a];var s=r[0],o=r[1],d=o===void 0?{}:o,g=typeof s=="string"?new Date(s||0):s;try{return ra(e,"date",i,d).format(g)}catch(c){e.onError(new qn("Error formatting date.",e.locale,c))}return String(g)}function tA(e,i){for(var r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a];var s=r[0],o=r[1],d=o===void 0?{}:o,g=typeof s=="string"?new Date(s||0):s;try{return ra(e,"time",i,d).format(g)}catch(c){e.onError(new qn("Error formatting time.",e.locale,c))}return String(g)}function rA(e,i){for(var r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a];var s=r[0],o=r[1],d=r[2],g=d===void 0?{}:d,c=typeof s=="string"?new Date(s||0):s,m=typeof o=="string"?new Date(o||0):o;try{return ra(e,"dateTimeRange",i,g).formatRange(c,m)}catch(h){e.onError(new qn("Error formatting date time range.",e.locale,h))}return String(c)}function aA(e,i){for(var r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a];var s=r[0],o=r[1],d=o===void 0?{}:o,g=typeof s=="string"?new Date(s||0):s;try{return ra(e,"date",i,d).formatToParts(g)}catch(c){e.onError(new qn("Error formatting date.",e.locale,c))}return[]}function iA(e,i){for(var r=[],a=2;a<arguments.length;a++)r[a-2]=arguments[a];var s=r[0],o=r[1],d=o===void 0?{}:o,g=typeof s=="string"?new Date(s||0):s;try{return ra(e,"time",i,d).formatToParts(g)}catch(c){e.onError(new qn("Error formatting time.",e.locale,c))}return[]}var sA=["style","type","fallback","languageDisplay"];function lA(e,i,r,a){var s=e.locale,o=e.onError,d=Intl.DisplayNames;d||o(new St(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,Jn.MISSING_INTL_API));var g=pr(a,sA);try{return i(s,g).of(r)}catch(c){o(new qn("Error formatting display name.",s,c))}}var oA=["type","style"],xg=Date.now();function uA(e){return"".concat(xg,"_").concat(e,"_").concat(xg)}function dA(e,i,r,a){a===void 0&&(a={});var s=uc(e,i,r,a).reduce(function(o,d){var g=d.value;return typeof g!="string"?o.push(g):typeof o[o.length-1]=="string"?o[o.length-1]+=g:o.push(g),o},[]);return s.length===1?s[0]:s.length===0?"":s}function uc(e,i,r,a){var s=e.locale,o=e.onError;a===void 0&&(a={});var d=Intl.ListFormat;d||o(new St(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,Jn.MISSING_INTL_API));var g=pr(a,oA);try{var c={},m=r.map(function(h,v){if(typeof h=="object"){var _=uA(v);return c[_]=h,_}return String(h)});return i(s,g).formatToParts(m).map(function(h){return h.type==="literal"?h:se(se({},h),{value:c[h.value]||h.value})})}catch(h){o(new qn("Error formatting list.",s,h))}return r}var gA=["type"];function fA(e,i,r,a){var s=e.locale,o=e.onError;a===void 0&&(a={}),Intl.PluralRules||o(new St(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,Jn.MISSING_INTL_API));var d=pr(a,gA);try{return i(s,d).select(r)}catch(g){o(new qn("Error formatting plural.",s,g))}return"other"}var cA=["numeric","style"];function mA(e,i,r){var a=e.locale,s=e.formats,o=e.onError;r===void 0&&(r={});var d=r.format,g=!!d&&zl(s,"relative",d,o)||{},c=pr(r,cA,g);return i(a,c)}function pA(e,i,r,a,s){s===void 0&&(s={}),a||(a="second");var o=Intl.RelativeTimeFormat;o||e.onError(new St(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,Jn.MISSING_INTL_API));try{return mA(e,i,s).format(r,a)}catch(d){e.onError(new qn("Error formatting relative time.",e.locale,d))}return String(r)}var hA=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function dc(e,i,r){var a=e.locale,s=e.formats,o=e.onError;r===void 0&&(r={});var d=r.format,g=d&&zl(s,"number",d,o)||{},c=pr(r,hA,g);return i(a,c)}function kA(e,i,r,a){a===void 0&&(a={});try{return dc(e,i,a).format(r)}catch(s){e.onError(new qn("Error formatting number.",e.locale,s))}return String(r)}function vA(e,i,r,a){a===void 0&&(a={});try{return dc(e,i,a).formatToParts(r)}catch(s){e.onError(new qn("Error formatting number.",e.locale,s))}return[]}function yA(e){var i=e?e[Object.keys(e)[0]]:void 0;return typeof i=="string"}function bA(e){e.onWarn&&e.defaultRichTextElements&&yA(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`)}function EA(e,i){var r=Qw(i),a=se(se({},lc),e),s=a.locale,o=a.defaultLocale,d=a.onError;return s?!Intl.NumberFormat.supportedLocalesOf(s).length&&d?d(new Og('Missing locale data for locale: "'.concat(s,'" in Intl.NumberFormat. Using default locale: "').concat(o,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(s).length&&d&&d(new Og('Missing locale data for locale: "'.concat(s,'" in Intl.DateTimeFormat. Using default locale: "').concat(o,'" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))):(d&&d(new Ww('"locale" was not configured, using "'.concat(o,'" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))),a.locale=a.defaultLocale||"en"),bA(a),se(se({},a),{formatters:r,formatNumber:kA.bind(null,a,r.getNumberFormat),formatNumberToParts:vA.bind(null,a,r.getNumberFormat),formatRelativeTime:pA.bind(null,a,r.getRelativeTimeFormat),formatDate:nA.bind(null,a,r.getDateTimeFormat),formatDateToParts:aA.bind(null,a,r.getDateTimeFormat),formatTime:tA.bind(null,a,r.getDateTimeFormat),formatDateTimeRange:rA.bind(null,a,r.getDateTimeFormat),formatTimeToParts:iA.bind(null,a,r.getDateTimeFormat),formatPlural:fA.bind(null,a,r.getPluralRules),formatMessage:Sl.bind(null,a,r),$t:Sl.bind(null,a,r),formatList:dA.bind(null,a,r.getListFormat),formatListToParts:uc.bind(null,a,r.getListFormat),formatDisplayName:lA.bind(null,a,r.getDisplayNames)})}function TA(e,i,r){if(r===void 0&&(r=Error),!e)throw new r(i)}function _A(e){TA(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var wA=se(se({},lc),{textComponent:A.Fragment}),AA={key:42},RA=function(e){return A.isValidElement(e)?A.createElement(A.Fragment,AA,e):e},SA=function(e){var i;return(i=A.Children.map(e,RA))!==null&&i!==void 0?i:[]};function IA(e){return function(i){return e(A.Children.toArray(i))}}var qg={exports:{}},Pe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dg;function jA(){if(Dg)return Pe;Dg=1;var e=typeof Symbol=="function"&&Symbol.for,i=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,a=e?Symbol.for("react.fragment"):60107,s=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,d=e?Symbol.for("react.provider"):60109,g=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,m=e?Symbol.for("react.concurrent_mode"):60111,h=e?Symbol.for("react.forward_ref"):60112,v=e?Symbol.for("react.suspense"):60113,_=e?Symbol.for("react.suspense_list"):60120,b=e?Symbol.for("react.memo"):60115,O=e?Symbol.for("react.lazy"):60116,T=e?Symbol.for("react.block"):60121,E=e?Symbol.for("react.fundamental"):60117,R=e?Symbol.for("react.responder"):60118,D=e?Symbol.for("react.scope"):60119;function S(j){if(typeof j=="object"&&j!==null){var $=j.$$typeof;switch($){case i:switch(j=j.type,j){case c:case m:case a:case o:case s:case v:return j;default:switch(j=j&&j.$$typeof,j){case g:case h:case O:case b:case d:return j;default:return $}}case r:return $}}}function z(j){return S(j)===m}return Pe.AsyncMode=c,Pe.ConcurrentMode=m,Pe.ContextConsumer=g,Pe.ContextProvider=d,Pe.Element=i,Pe.ForwardRef=h,Pe.Fragment=a,Pe.Lazy=O,Pe.Memo=b,Pe.Portal=r,Pe.Profiler=o,Pe.StrictMode=s,Pe.Suspense=v,Pe.isAsyncMode=function(j){return z(j)||S(j)===c},Pe.isConcurrentMode=z,Pe.isContextConsumer=function(j){return S(j)===g},Pe.isContextProvider=function(j){return S(j)===d},Pe.isElement=function(j){return typeof j=="object"&&j!==null&&j.$$typeof===i},Pe.isForwardRef=function(j){return S(j)===h},Pe.isFragment=function(j){return S(j)===a},Pe.isLazy=function(j){return S(j)===O},Pe.isMemo=function(j){return S(j)===b},Pe.isPortal=function(j){return S(j)===r},Pe.isProfiler=function(j){return S(j)===o},Pe.isStrictMode=function(j){return S(j)===s},Pe.isSuspense=function(j){return S(j)===v},Pe.isValidElementType=function(j){return typeof j=="string"||typeof j=="function"||j===a||j===m||j===o||j===s||j===v||j===_||typeof j=="object"&&j!==null&&(j.$$typeof===O||j.$$typeof===b||j.$$typeof===d||j.$$typeof===g||j.$$typeof===h||j.$$typeof===E||j.$$typeof===R||j.$$typeof===D||j.$$typeof===T)},Pe.typeOf=S,Pe}var Mg;function NA(){return Mg||(Mg=1,qg.exports=jA()),qg.exports}var il,Lg;function OA(){if(Lg)return il;Lg=1;var e=NA(),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},o={};o[e.ForwardRef]=a,o[e.Memo]=s;function d(O){return e.isMemo(O)?s:o[O.$$typeof]||i}var g=Object.defineProperty,c=Object.getOwnPropertyNames,m=Object.getOwnPropertySymbols,h=Object.getOwnPropertyDescriptor,v=Object.getPrototypeOf,_=Object.prototype;function b(O,T,E){if(typeof T!="string"){if(_){var R=v(T);R&&R!==_&&b(O,R,E)}var D=c(T);m&&(D=D.concat(m(T)));for(var S=d(O),z=d(T),j=0;j<D.length;++j){var $=D[j];if(!r[$]&&!(E&&E[$])&&!(z&&z[$])&&!(S&&S[$])){var M=h(T,$);try{g(O,$,M)}catch{}}}}return O}return il=b,il}OA();var Xl=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=A.createContext(null)):A.createContext(null);Xl.Consumer;Xl.Provider;var PA=Xl;function gc(){var e=A.useContext(PA);return _A(e),e}var Il;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(Il||(Il={}));var jl;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(jl||(jl={}));function fc(e){var i=function(r){var a=gc(),s=r.value,o=r.children,d=ki(r,["value","children"]),g=typeof s=="string"?new Date(s||0):s,c=e==="formatDate"?a.formatDateToParts(g,d):a.formatTimeToParts(g,d);return o(c)};return i.displayName=jl[e],i}function aa(e){var i=function(r){var a=gc(),s=r.value,o=r.children,d=ki(r,["value","children"]),g=a[e](s,d);if(typeof o=="function")return o(g);var c=a.textComponent||A.Fragment;return A.createElement(c,null,g)};return i.displayName=Il[e],i}function cc(e){return e&&Object.keys(e).reduce(function(i,r){var a=e[r];return i[r]=ic(a)?IA(a):a,i},{})}var Fg=function(e,i,r,a){for(var s=[],o=4;o<arguments.length;o++)s[o-4]=arguments[o];var d=cc(a),g=Sl.apply(void 0,Wn([e,i,r,d],s,!1));return Array.isArray(g)?SA(g):g},BA=function(e,i){var r=e.defaultRichTextElements,a=ki(e,["defaultRichTextElements"]),s=cc(r),o=EA(se(se(se({},wA),a),{defaultRichTextElements:s}),i),d={locale:o.locale,timeZone:o.timeZone,fallbackOnEmptyString:o.fallbackOnEmptyString,formats:o.formats,defaultLocale:o.defaultLocale,defaultFormats:o.defaultFormats,messages:o.messages,onError:o.onError,defaultRichTextElements:s};return se(se({},o),{formatMessage:Fg.bind(null,d,o.formatters),$t:Fg.bind(null,d,o.formatters)})};aa("formatDate");aa("formatTime");aa("formatNumber");aa("formatList");aa("formatDisplayName");fc("formatDate");fc("formatTime");function Jl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Nl={exports:{}},xA=Nl.exports,Cg;function qA(){return Cg||(Cg=1,function(e,i){(function(r,a){e.exports=a()})(xA,function(){var r,a,s=1e3,o=6e4,d=36e5,g=864e5,c=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m=31536e6,h=2628e6,v=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,_={years:m,months:h,days:g,hours:d,minutes:o,seconds:s,milliseconds:1,weeks:6048e5},b=function($){return $ instanceof z},O=function($,M,K){return new z($,K,M.$l)},T=function($){return a.p($)+"s"},E=function($){return $<0},R=function($){return E($)?Math.ceil($):Math.floor($)},D=function($){return Math.abs($)},S=function($,M){return $?E($)?{negative:!0,format:""+D($)+M}:{negative:!1,format:""+$+M}:{negative:!1,format:""}},z=function(){function $(K,ee,ne){var X=this;if(this.$d={},this.$l=ne,K===void 0&&(this.$ms=0,this.parseFromMilliseconds()),ee)return O(K*_[T(ee)],this);if(typeof K=="number")return this.$ms=K,this.parseFromMilliseconds(),this;if(typeof K=="object")return Object.keys(K).forEach(function(P){X.$d[T(P)]=K[P]}),this.calMilliseconds(),this;if(typeof K=="string"){var te=K.match(v);if(te){var G=te.slice(2).map(function(P){return P!=null?Number(P):0});return this.$d.years=G[0],this.$d.months=G[1],this.$d.weeks=G[2],this.$d.days=G[3],this.$d.hours=G[4],this.$d.minutes=G[5],this.$d.seconds=G[6],this.calMilliseconds(),this}}return this}var M=$.prototype;return M.calMilliseconds=function(){var K=this;this.$ms=Object.keys(this.$d).reduce(function(ee,ne){return ee+(K.$d[ne]||0)*_[ne]},0)},M.parseFromMilliseconds=function(){var K=this.$ms;this.$d.years=R(K/m),K%=m,this.$d.months=R(K/h),K%=h,this.$d.days=R(K/g),K%=g,this.$d.hours=R(K/d),K%=d,this.$d.minutes=R(K/o),K%=o,this.$d.seconds=R(K/s),K%=s,this.$d.milliseconds=K},M.toISOString=function(){var K=S(this.$d.years,"Y"),ee=S(this.$d.months,"M"),ne=+this.$d.days||0;this.$d.weeks&&(ne+=7*this.$d.weeks);var X=S(ne,"D"),te=S(this.$d.hours,"H"),G=S(this.$d.minutes,"M"),P=this.$d.seconds||0;this.$d.milliseconds&&(P+=this.$d.milliseconds/1e3,P=Math.round(1e3*P)/1e3);var x=S(P,"S"),F=K.negative||ee.negative||X.negative||te.negative||G.negative||x.negative,C=te.format||G.format||x.format?"T":"",B=(F?"-":"")+"P"+K.format+ee.format+X.format+C+te.format+G.format+x.format;return B==="P"||B==="-P"?"P0D":B},M.toJSON=function(){return this.toISOString()},M.format=function(K){var ee=K||"YYYY-MM-DDTHH:mm:ss",ne={Y:this.$d.years,YY:a.s(this.$d.years,2,"0"),YYYY:a.s(this.$d.years,4,"0"),M:this.$d.months,MM:a.s(this.$d.months,2,"0"),D:this.$d.days,DD:a.s(this.$d.days,2,"0"),H:this.$d.hours,HH:a.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:a.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:a.s(this.$d.seconds,2,"0"),SSS:a.s(this.$d.milliseconds,3,"0")};return ee.replace(c,function(X,te){return te||String(ne[X])})},M.as=function(K){return this.$ms/_[T(K)]},M.get=function(K){var ee=this.$ms,ne=T(K);return ne==="milliseconds"?ee%=1e3:ee=ne==="weeks"?R(ee/_[ne]):this.$d[ne],ee||0},M.add=function(K,ee,ne){var X;return X=ee?K*_[T(ee)]:b(K)?K.$ms:O(K,this).$ms,O(this.$ms+X*(ne?-1:1),this)},M.subtract=function(K,ee){return this.add(K,ee,!0)},M.locale=function(K){var ee=this.clone();return ee.$l=K,ee},M.clone=function(){return O(this.$ms,this)},M.humanize=function(K){return r().add(this.$ms,"ms").locale(this.$l).fromNow(!K)},M.valueOf=function(){return this.asMilliseconds()},M.milliseconds=function(){return this.get("milliseconds")},M.asMilliseconds=function(){return this.as("milliseconds")},M.seconds=function(){return this.get("seconds")},M.asSeconds=function(){return this.as("seconds")},M.minutes=function(){return this.get("minutes")},M.asMinutes=function(){return this.as("minutes")},M.hours=function(){return this.get("hours")},M.asHours=function(){return this.as("hours")},M.days=function(){return this.get("days")},M.asDays=function(){return this.as("days")},M.weeks=function(){return this.get("weeks")},M.asWeeks=function(){return this.as("weeks")},M.months=function(){return this.get("months")},M.asMonths=function(){return this.as("months")},M.years=function(){return this.get("years")},M.asYears=function(){return this.as("years")},$}(),j=function($,M,K){return $.add(M.years()*K,"y").add(M.months()*K,"M").add(M.days()*K,"d").add(M.hours()*K,"h").add(M.minutes()*K,"m").add(M.seconds()*K,"s").add(M.milliseconds()*K,"ms")};return function($,M,K){r=K,a=K().$utils(),K.duration=function(X,te){var G=K.locale();return O(X,{$l:G},te)},K.isDuration=b;var ee=M.prototype.add,ne=M.prototype.subtract;M.prototype.add=function(X,te){return b(X)?j(this,X,1):ee.bind(this)(X,te)},M.prototype.subtract=function(X,te){return b(X)?j(this,X,-1):ne.bind(this)(X,te)}}})}(Nl)),Nl.exports}var DA=qA();const MA=Jl(DA);var Ol={exports:{}},LA=Ol.exports,Kg;function FA(){return Kg||(Kg=1,function(e,i){(function(r,a){e.exports=a()})(LA,function(){var r="day";return function(a,s,o){var d=function(m){return m.add(4-m.isoWeekday(),r)},g=s.prototype;g.isoWeekYear=function(){return d(this).year()},g.isoWeek=function(m){if(!this.$utils().u(m))return this.add(7*(m-this.isoWeek()),r);var h,v,_,b,O=d(this),T=(h=this.isoWeekYear(),v=this.$u,_=(v?o.utc:o)().year(h).startOf("year"),b=4-_.isoWeekday(),_.isoWeekday()>4&&(b+=7),_.add(b,r));return O.diff(T,"week")+1},g.isoWeekday=function(m){return this.$utils().u(m)?this.day()||7:this.day(this.day()%7?m:m-7)};var c=g.startOf;g.startOf=function(m,h){var v=this.$utils(),_=!!v.u(h)||h;return v.p(m)==="isoweek"?_?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):c.bind(this)(m,h)}}})}(Ol)),Ol.exports}var CA=FA();const KA=Jl(CA);var Pl={exports:{}},VA=Pl.exports,Vg;function HA(){return Vg||(Vg=1,function(e,i){(function(r,a){e.exports=a()})(VA,function(){var r="minute",a=/[+-]\d\d(?::?\d\d)?/g,s=/([+-]|\d\d)/g;return function(o,d,g){var c=d.prototype;g.utc=function(T){var E={date:T,utc:!0,args:arguments};return new d(E)},c.utc=function(T){var E=g(this.toDate(),{locale:this.$L,utc:!0});return T?E.add(this.utcOffset(),r):E},c.local=function(){return g(this.toDate(),{locale:this.$L,utc:!1})};var m=c.parse;c.parse=function(T){T.utc&&(this.$u=!0),this.$utils().u(T.$offset)||(this.$offset=T.$offset),m.call(this,T)};var h=c.init;c.init=function(){if(this.$u){var T=this.$d;this.$y=T.getUTCFullYear(),this.$M=T.getUTCMonth(),this.$D=T.getUTCDate(),this.$W=T.getUTCDay(),this.$H=T.getUTCHours(),this.$m=T.getUTCMinutes(),this.$s=T.getUTCSeconds(),this.$ms=T.getUTCMilliseconds()}else h.call(this)};var v=c.utcOffset;c.utcOffset=function(T,E){var R=this.$utils().u;if(R(T))return this.$u?0:R(this.$offset)?v.call(this):this.$offset;if(typeof T=="string"&&(T=function(j){j===void 0&&(j="");var $=j.match(a);if(!$)return null;var M=(""+$[0]).match(s)||["-",0,0],K=M[0],ee=60*+M[1]+ +M[2];return ee===0?0:K==="+"?ee:-ee}(T),T===null))return this;var D=Math.abs(T)<=16?60*T:T,S=this;if(E)return S.$offset=D,S.$u=T===0,S;if(T!==0){var z=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(S=this.local().add(D+z,r)).$offset=D,S.$x.$localOffset=z}else S=this.utc();return S};var _=c.format;c.format=function(T){var E=T||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return _.call(this,E)},c.valueOf=function(){var T=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*T},c.isUTC=function(){return!!this.$u},c.toISOString=function(){return this.toDate().toISOString()},c.toString=function(){return this.toDate().toUTCString()};var b=c.toDate;c.toDate=function(T){return T==="s"&&this.$offset?g(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():b.call(this)};var O=c.diff;c.diff=function(T,E,R){if(T&&this.$u===T.$u)return O.call(this,T,E,R);var D=this.local(),S=g(T).local();return O.call(D,S,E,R)}}})}(Pl)),Pl.exports}var GA=HA();const $A=Jl(GA),UA=oc(),vi=e=>BA({locale:"nb-NO",messages:e},UA),yi={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","DateTimeLabel.Kl":" kl. ","PeriodLabel.DateToday":"d.d.","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.NullDager":"0 dager","Dato.TidenesEnde":"Antall uker og dager -"};vi(yi);var Bl={exports:{}},YA=Bl.exports,Hg;function WA(){return Hg||(Hg=1,function(e,i){(function(r,a){e.exports=a(na)})(YA,function(r){function a(d){return d&&typeof d=="object"&&"default"in d?d:{default:d}}var s=a(r),o={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(d){return d+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return s.default.locale(o,null,!0),o})}(Bl)),Bl.exports}WA();na.extend($A);na.extend(KA);na.extend(MA);vi(yi);vi(yi);var Gg={exports:{}},Kr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $g;function zA(){if($g)return Kr;$g=1;var e=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(a,s,o){var d=null;if(o!==void 0&&(d=""+o),s.key!==void 0&&(d=""+s.key),"key"in s){o={};for(var g in s)g!=="key"&&(o[g]=s[g])}else o=s;return s=o.ref,{$$typeof:e,type:a,key:d,ref:s!==void 0?s:null,props:o}}return Kr.Fragment=i,Kr.jsx=r,Kr.jsxs=r,Kr}var Ug;function XA(){return Ug||(Ug=1,Gg.exports=zA()),Gg.exports}XA();vi(yi);A.createContext({});var xl={exports:{}},JA=xl.exports,Yg;function ZA(){return Yg||(Yg=1,function(e,i){(function(r,a){e.exports=a()})(JA,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},a=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,s=/\d/,o=/\d\d/,d=/\d\d?/,g=/\d*[^-_:/,()\s\d]+/,c={},m=function(E){return(E=+E)+(E>68?1900:2e3)},h=function(E){return function(R){this[E]=+R}},v=[/[+-]\d\d:?(\d\d)?|Z/,function(E){(this.zone||(this.zone={})).offset=function(R){if(!R||R==="Z")return 0;var D=R.match(/([+-]|\d\d)/g),S=60*D[1]+(+D[2]||0);return S===0?0:D[0]==="+"?-S:S}(E)}],_=function(E){var R=c[E];return R&&(R.indexOf?R:R.s.concat(R.f))},b=function(E,R){var D,S=c.meridiem;if(S){for(var z=1;z<=24;z+=1)if(E.indexOf(S(z,0,R))>-1){D=z>12;break}}else D=E===(R?"pm":"PM");return D},O={A:[g,function(E){this.afternoon=b(E,!1)}],a:[g,function(E){this.afternoon=b(E,!0)}],Q:[s,function(E){this.month=3*(E-1)+1}],S:[s,function(E){this.milliseconds=100*+E}],SS:[o,function(E){this.milliseconds=10*+E}],SSS:[/\d{3}/,function(E){this.milliseconds=+E}],s:[d,h("seconds")],ss:[d,h("seconds")],m:[d,h("minutes")],mm:[d,h("minutes")],H:[d,h("hours")],h:[d,h("hours")],HH:[d,h("hours")],hh:[d,h("hours")],D:[d,h("day")],DD:[o,h("day")],Do:[g,function(E){var R=c.ordinal,D=E.match(/\d+/);if(this.day=D[0],R)for(var S=1;S<=31;S+=1)R(S).replace(/\[|\]/g,"")===E&&(this.day=S)}],w:[d,h("week")],ww:[o,h("week")],M:[d,h("month")],MM:[o,h("month")],MMM:[g,function(E){var R=_("months"),D=(_("monthsShort")||R.map(function(S){return S.slice(0,3)})).indexOf(E)+1;if(D<1)throw new Error;this.month=D%12||D}],MMMM:[g,function(E){var R=_("months").indexOf(E)+1;if(R<1)throw new Error;this.month=R%12||R}],Y:[/[+-]?\d+/,h("year")],YY:[o,function(E){this.year=m(E)}],YYYY:[/\d{4}/,h("year")],Z:v,ZZ:v};function T(E){var R,D;R=E,D=c&&c.formats;for(var S=(E=R.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(ne,X,te){var G=te&&te.toUpperCase();return X||D[te]||r[te]||D[G].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(P,x,F){return x||F.slice(1)})})).match(a),z=S.length,j=0;j<z;j+=1){var $=S[j],M=O[$],K=M&&M[0],ee=M&&M[1];S[j]=ee?{regex:K,parser:ee}:$.replace(/^\[|\]$/g,"")}return function(ne){for(var X={},te=0,G=0;te<z;te+=1){var P=S[te];if(typeof P=="string")G+=P.length;else{var x=P.regex,F=P.parser,C=ne.slice(G),B=x.exec(C)[0];F.call(X,B),ne=ne.replace(B,"")}}return function(q){var U=q.afternoon;if(U!==void 0){var Z=q.hours;U?Z<12&&(q.hours+=12):Z===12&&(q.hours=0),delete q.afternoon}}(X),X}}return function(E,R,D){D.p.customParseFormat=!0,E&&E.parseTwoDigitYear&&(m=E.parseTwoDigitYear);var S=R.prototype,z=S.parse;S.parse=function(j){var $=j.date,M=j.utc,K=j.args;this.$u=M;var ee=K[1];if(typeof ee=="string"){var ne=K[2]===!0,X=K[3]===!0,te=ne||X,G=K[2];X&&(G=K[2]),c=this.$locale(),!ne&&G&&(c=D.Ls[G]),this.$d=function(C,B,q,U){try{if(["x","X"].indexOf(B)>-1)return new Date((B==="X"?1e3:1)*C);var Z=T(B)(C),re=Z.year,oe=Z.month,je=Z.day,Ee=Z.hours,Re=Z.minutes,Ne=Z.seconds,me=Z.milliseconds,ve=Z.zone,Ae=Z.week,Se=new Date,qe=je||(re||oe?1:Se.getDate()),Qe=re||Se.getFullYear(),He=0;re&&!oe||(He=oe>0?oe-1:Se.getMonth());var en,Qn=Ee||0,nn=Re||0,Vn=Ne||0,et=me||0;return ve?new Date(Date.UTC(Qe,He,qe,Qn,nn,Vn,et+60*ve.offset*1e3)):q?new Date(Date.UTC(Qe,He,qe,Qn,nn,Vn,et)):(en=new Date(Qe,He,qe,Qn,nn,Vn,et),Ae&&(en=U(en).week(Ae).toDate()),en)}catch{return new Date("")}}($,ee,M,D),this.init(),G&&G!==!0&&(this.$L=this.locale(G).$L),te&&$!=this.format(ee)&&(this.$d=new Date("")),c={}}else if(ee instanceof Array)for(var P=ee.length,x=1;x<=P;x+=1){K[1]=ee[x-1];var F=D.apply(this,K);if(F.isValid()){this.$d=F.$d,this.$L=F.$L,this.init();break}x===P&&(this.$d=new Date(""))}else z.call(this,j)}}})}(xl)),xl.exports}var QA=ZA();const eR=Vf(QA);na.extend(eR);xn(ea);const nR=e=>{const i=e.aktiveNaturalytelser.reduce((a,s)=>{const o=s.type;return o in a?{...a,[o]:[...a[o],s]}:{...a,[o]:[s]}},{}),r={};return Object.entries(i).forEach(([a,s])=>{const o=s.sort((d,g)=>q_({fom:d.periode.fomDato,tom:d.periode.tomDato},{fom:g.periode.fomDato,tom:g.periode.tomDato})).reverse();r[a]=o.flatMap((d,g,c)=>{const m=c[g+1],h=d.periode.tomDato,v=m==null?void 0:m.periode.fomDato;return h===$r?[]:[{...d,periode:{fomDato:Nd(h,1),tomDato:v?Nd(v,-1):$r}}]})}),r},mc=({inntektsmelding:e,alleKodeverk:i})=>{const r=mt(),a=nR(e);return H.jsx(Xn,{tittel:r.formatMessage({id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.heading"}),children:e.aktiveNaturalytelser.length===0?H.jsx("span",{children:H.jsx(xe,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.ingen"})}):H.jsx(hi,{gap:"1",children:Object.entries(a).map(([s,o])=>{var d;return H.jsxs("div",{children:[H.jsx("span",{children:(d=i.NaturalYtelseType.find(g=>g.kode===s))==null?void 0:d.navn}),H.jsx("ul",{children:o.map(g=>H.jsxs(Q.Fragment,{children:[H.jsxs("li",{children:[H.jsx(xe,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.fom"})," ",H.jsx(Yr,{dateString:g.periode.fomDato})]}),g.periode.tomDato!==$r&&H.jsxs("li",{children:[H.jsx(xe,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.tom"})," ",H.jsx(Yr,{dateString:g.periode.tomDato})]}),H.jsxs("li",{children:[H.jsx(xe,{id:"InntektsmeldingFaktaPanel.bortfalteNaturalytelser.verdi"}),":"," ",H.jsx(lr,{beløp:g.beloepPerMnd.verdi})]})]},g.indexKey))})]},s)})})})};mc.__docgenInfo={description:"",methods:[],displayName:"BortfalteNaturalYtelser",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"VergeType",required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""}}};const pc=({kildeSystem:e})=>{const i=mt();return H.jsx(Xn,{tittel:i.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.heading"}),children:tR(e,i)})},tR=(e,i)=>{switch(e.toUpperCase()){case"NAV_NO":return i.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.nav"});case"ALTINN":return i.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.altinn"});default:return i.formatMessage({id:"InntektsmeldingFaktaPanel.kilde.lps"})}};pc.__docgenInfo={description:"",methods:[],displayName:"KildeSystem",props:{kildeSystem:{required:!0,tsType:{name:"string"},description:""}}};const hc=({inntektsmelding:e})=>{const i=mt();return H.jsxs(Xn,{tittel:i.formatMessage({id:"InntektsmeldingFaktaPanel.kontaktperson.heading"}),children:[H.jsxs("span",{children:[H.jsx(xe,{id:"InntektsmeldingFaktaPanel.kontaktperson.navn"}),": ",e.kontaktpersonNavn]}),H.jsxs("span",{children:[H.jsx(xe,{id:"InntektsmeldingFaktaPanel.kontaktperson.telefon"}),": ",e.kontaktpersonNummer]})]})};hc.__docgenInfo={description:"",methods:[],displayName:"KontaktPerson",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const kc=({inntektsmelding:e,fagsak:i,arbeidsgiverOpplysninger:r})=>{const a=`IM ${r.navn} - ${sf(e.motattDato)}`;return H.jsx($l,{type:"button",onClick:()=>{d0(i.saksnummer,e.journalpostId,e.dokumentId,a)},variant:"secondary",size:"small",icon:H.jsx(w0,{}),children:H.jsx(xe,{id:"InntektsmeldingFaktaPanel.modal.trigger"})})};kc.__docgenInfo={description:"",methods:[],displayName:"LastNedPdfKnapp",props:{fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
>`},description:""}}};const vc=({inntektsmelding:e})=>{const i=mt();if(e.refusjonsperioder.length===0)return H.jsx(Xn,{tittel:i.formatMessage({id:"InntektsmeldingFaktaPanel.refusjon.heading"}),children:e.refusjonPrMnd?H.jsx(lr,{beløp:e.refusjonPrMnd}):H.jsx(xe,{tagName:"span",id:"InntektsmeldingFaktaPanel.refusjon.ingen"})});const r=[...e.refusjonsperioder].sort((a,s)=>new Date(a.fom).getTime()-new Date(s.fom).getTime());return H.jsxs(Xn,{tittel:i.formatMessage({id:"InntektsmeldingFaktaPanel.refusjon.heading"}),children:[H.jsx("span",{children:"Krever refusjon"}),H.jsx(lr,{beløp:e.refusjonPrMnd??0}),H.jsx("span",{children:"Endringer i perioden:"}),H.jsx("ul",{children:r.map(a=>H.jsx("li",{children:H.jsx(xe,{id:"InntektsmeldingFaktaPanel.refusjon.endring.periode",values:{kroner:H.jsx(lr,{beløp:a.refusjonsbeløp.verdi}),fom:H.jsx(Yr,{dateString:a.fom})}})},a.indexKey))})]})};vc.__docgenInfo={description:"",methods:[],displayName:"Refusjon",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};const yc=({startDatoPermisjon:e,ytelse:i})=>{const r=mt();return e?H.jsxs(Xn,{tittel:r.formatMessage({id:"InntektsmeldingFaktaPanel.startDato.heading"},{ytelse:i.toLowerCase()}),children:[H.jsx("span",{children:e?H.jsx(Yr,{dateString:e}):"-"}),H.jsx("span",{children:H.jsx(xe,{id:"InntektsmeldingFaktaPanel.startDato.fraArbeidsgiver"})})]}):null};yc.__docgenInfo={description:"",methods:[],displayName:"Startdato",props:{startDatoPermisjon:{required:!1,tsType:{name:"string"},description:""},ytelse:{required:!0,tsType:{name:"string"},description:""}}};const rR="_behandlingCircleIngen_g2j3j_1",aR="_behandlingCircleDenne_g2j3j_5",iR="_behandlingCircleAndre_g2j3j_9",sR="_container_g2j3j_13",lR="_ingenInntektsmeldinger_g2j3j_20",Gr={behandlingCircleIngen:rR,behandlingCircleDenne:aR,behandlingCircleAndre:iR,container:sR,ingenInntektsmeldinger:lR},bc=({inntektsmelding:e,arbeidsgiverOpplysningerPerId:i,alleBehandlinger:r})=>{var g;const{alleKodeverk:a,fagsak:s,behandling:o}=lf(),d=mt();return H.jsxs(hi,{gap:"4",className:Gr.container,children:[H.jsxs(sr,{gap:"4",justify:"space-between",align:"start",children:[H.jsxs(df,{level:"3",size:"small",children:[H.jsx(xe,{id:"InntektsmeldingFaktaPanel.innsendingstidspunkt"})," ",H.jsx(oi,{dateTimeString:e.innsendingstidspunkt,separator:"kl"})]}),H.jsx(kc,{fagsak:s,inntektsmelding:e,arbeidsgiverOpplysninger:i[e.arbeidsgiverIdent]})]}),H.jsxs(J1,{columns:3,gap:"8",children:[H.jsx(Lf,{arbeidsgiverOpplysninger:i[e.arbeidsgiverIdent],arbeidsgiverIdent:e.arbeidsgiverIdent}),H.jsx(Xn,{tittel:d.formatMessage({id:"InntektsmeldingFaktaPanel.månedsinntekt.heading"}),children:H.jsx(lr,{beløp:e.inntektPrMnd})}),H.jsx(Ff,{alleKodeverk:a,inntektsmelding:e,alleBehandlinger:r,behandling:o}),H.jsx(hc,{inntektsmelding:e}),H.jsx(yc,{ytelse:((g=a.FagsakYtelseType.find(c=>c.kode===s.fagsakYtelseType))==null?void 0:g.navn)??"",startDatoPermisjon:e.startDatoPermisjon}),H.jsx(pc,{kildeSystem:e.kildeSystem}),H.jsx(mc,{inntektsmelding:e,alleKodeverk:a}),H.jsx(vc,{inntektsmelding:e})]})]})};bc.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingInnhold",props:{inntektsmelding:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""}}};const oR={"InntektsmeldingFaktaPanel.ingen":"Ingen inntektsmeldinger er registrert","InntektsmeldingFaktaPanel.tabell.header.innsendt":"Innsendt","InntektsmeldingFaktaPanel.tabell.header.arbeidsgiver":"Arbeidsgiver","InntektsmeldingFaktaPanel.tabell.header.skjæringstidspunkt":"Startdato","InntektsmeldingFaktaPanel.tabell.header.månedsinntekt":"Månedsi.","InntektsmeldingFaktaPanel.tabell.header.behandling":"Behandling","InntektsmeldingFaktaPanel.tabell.cell.behandling.denne":"Denne","InntektsmeldingFaktaPanel.tabell.cell.behandling.andre":"Andre","InntektsmeldingFaktaPanel.tabell.cell.behandling.ingen":"Ingen","InntektsmeldingFaktaPanel.modal.heading":"All informasjon fra PDF’en er tilgjengelig i faktapanelet","InntektsmeldingFaktaPanel.modal.trigger":"Åpne PDF","InntektsmeldingFaktaPanel.modal.body":"PDF’en du skal åpne inneholder ikke noe annet enn det som står i faktapanelet. Du kan likevel åpne den hvis du ønsker det.","InntektsmeldingFaktaPanel.modal.button.primary":"Last ned som PDF","InntektsmeldingFaktaPanel.modal.button.secondary":"Avbryt","InntektsmeldingFaktaPanel.behandling.heading":"Behandling","InntektsmeldingFaktaPanel.behandling.bruktKunIDenne":"Brukt i denne behandlingen","InntektsmeldingFaktaPanel.behandling.ikkeBruktINoen":"Ikke brukt i noen behandlinger","InntektsmeldingFaktaPanel.behandling.bruktIAndre":"Brukt i andre behandlinger","InntektsmeldingFaktaPanel.behandling.bruktIDenneOgFlere":"Brukt i denne og andre behandlinger","InntektsmeldingFaktaPanel.behandling.opprettet":"Opprettet","InntektsmeldingFaktaPanel.behandling.avsluttet":"Avsluttet","InntektsmeldingFaktaPanel.innsendingstidspunkt":"Inntektsmelding sendt","InntektsmeldingFaktaPanel.arbeidsgiver.heading":"Arbeidsgiver","InntektsmeldingFaktaPanel.arbeidsgiver.navn":"Virksomhetsnavn","InntektsmeldingFaktaPanel.arbeidsgiver.underenhet":"Org.nr. for underenhet","InntektsmeldingFaktaPanel.kontaktperson.heading":"Kontaktperson fra arbeidsgiver","InntektsmeldingFaktaPanel.kontaktperson.navn":"Navn","InntektsmeldingFaktaPanel.kontaktperson.telefon":"Telefonnummer","InntektsmeldingFaktaPanel.månedsinntekt.heading":"Månedsinntekt","InntektsmeldingFaktaPanel.startDato.heading":"Første dag med {ytelse}","InntektsmeldingFaktaPanel.startDato.fraArbeidsgiver":"Oppgitt av arbeidsgiver","InntektsmeldingFaktaPanel.kilde.heading":"Kilde","InntektsmeldingFaktaPanel.kilde.nav":"Nav","InntektsmeldingFaktaPanel.kilde.altinn":"Altinn","InntektsmeldingFaktaPanel.kilde.lps":"Arbeidsgiver sitt lønns- og personalsystem(LPS)","InntektsmeldingFaktaPanel.refusjon.heading":"Refusjon","InntektsmeldingFaktaPanel.refusjon.ingen":"Ingen refusjon","InntektsmeldingFaktaPanel.refusjon.endring.periode":"Refusjonsbeløp på {kroner} fra {fom}","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.heading":"Naturalytelser som faller bort","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.ingen":"Ingen","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.fom":"Fra og med","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.tom":"Til og med","InntektsmeldingFaktaPanel.bortfalteNaturalytelser.verdi":"Verdi pr måned"},Wg=xn(oR),ql=({arbeidsgiverOpplysningerPerId:e,alleBehandlinger:i,inntektsmeldinger:r})=>{const{behandling:a}=lf(),[s,o]=A.useState({orderBy:"innsendingstidspunkt",direction:"descending"}),d=m=>{o(s&&m===s.orderBy&&s.direction==="descending"?void 0:{orderBy:m,direction:s&&m===s.orderBy&&s.direction==="ascending"?"descending":"ascending"})},g=s?uR({inntektsmeldinger:r,arbeidsgiverOpplysningerPerId:e,sortKey:s.orderBy,behandling:a}):r,c=(s==null?void 0:s.direction)==="ascending"?g:g.toReversed();return c.length===0?H.jsx(Od,{value:Wg,children:H.jsxs(sr,{gap:"2",justify:"center",align:"center",className:Gr.ingenInntektsmeldinger,children:[H.jsx(ui,{children:H.jsx(xe,{id:"InntektsmeldingFaktaPanel.ingen"})}),H.jsx(O0,{})]})}):H.jsx(Od,{value:Wg,children:H.jsxs($e,{sort:s,onSortChange:m=>d(m),children:[H.jsx($e.Header,{children:H.jsxs($e.Row,{children:[H.jsx($e.ColumnHeader,{sortKey:"innsendingstidspunkt",sortable:!0,children:H.jsx(xe,{id:"InntektsmeldingFaktaPanel.tabell.header.innsendt"})}),H.jsx($e.ColumnHeader,{sortKey:"arbeidsgiverIdent",sortable:!0,children:H.jsx(xe,{id:"InntektsmeldingFaktaPanel.tabell.header.arbeidsgiver"})}),H.jsx($e.ColumnHeader,{sortKey:"startDatoPermisjon",sortable:!0,children:H.jsx(xe,{id:"InntektsmeldingFaktaPanel.tabell.header.skjæringstidspunkt"})}),H.jsx($e.ColumnHeader,{sortKey:"inntektPrMnd",sortable:!0,children:H.jsx(xe,{id:"InntektsmeldingFaktaPanel.tabell.header.månedsinntekt"})}),H.jsx($e.ColumnHeader,{sortKey:"tilknyttedeBehandlingIder",sortable:!0,children:H.jsx(xe,{id:"InntektsmeldingFaktaPanel.tabell.header.behandling"})}),H.jsx($e.HeaderCell,{})]})}),H.jsx($e.Body,{children:c.map(m=>{var h;return H.jsxs($e.ExpandableRow,{expandOnRowClick:!0,contentGutter:"none",togglePlacement:"right",content:H.jsx(bc,{alleBehandlinger:i,arbeidsgiverOpplysningerPerId:e,inntektsmelding:m}),children:[H.jsx($e.DataCell,{children:H.jsx(oi,{dateTimeString:m.innsendingstidspunkt,separator:"kl"})}),H.jsx($e.DataCell,{children:((h=e[m.arbeidsgiverIdent])==null?void 0:h.navn)??"-"}),H.jsx($e.DataCell,{children:m.startDatoPermisjon?H.jsx(Yr,{dateString:m.startDatoPermisjon}):"-"}),H.jsx($e.DataCell,{children:H.jsx(lr,{beløp:m.inntektPrMnd})}),H.jsx($e.DataCell,{children:H.jsx(dR,{behandling:a,inntektsmelding:m})})]},`${m.journalpostId}-${m.internArbeidsforholdId}`)})})]})})},uR=({inntektsmeldinger:e,arbeidsgiverOpplysningerPerId:i,sortKey:r,behandling:a})=>r==="arbeidsgiverIdent"?e.slice().sort((s,o)=>{var c,m;const d=(c=i[s.arbeidsgiverIdent])==null?void 0:c.navn,g=(m=i[o.arbeidsgiverIdent])==null?void 0:m.navn;return sl(d,g)}):r==="tilknyttedeBehandlingIder"?e.slice().sort((s,o)=>{const d=Dl({behandling:a,inntektsmelding:s}),g=Dl({behandling:a,inntektsmelding:o});return sl(d,g)}):e.slice().sort((s,o)=>{const d=s[r],g=o[r];return sl(d,g)}),sl=(e,i)=>e===void 0?-1:i===void 0?1:e<i?-1:e>i?1:0,dR=({behandling:e,inntektsmelding:i})=>{const r=Dl({behandling:e,inntektsmelding:i});return r==="DENNE"?H.jsxs(sr,{gap:"1",align:"center",children:[H.jsx(Ks,{className:Gr.behandlingCircleDenne}),H.jsx(xe,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.denne"})]}):r==="ANDRE"?H.jsxs(sr,{gap:"1",align:"center",children:[H.jsx(Ks,{className:Gr.behandlingCircleAndre}),H.jsx(xe,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.andre"})]}):H.jsxs(sr,{gap:"1",align:"center",children:[H.jsx(Ks,{className:Gr.behandlingCircleIngen}),H.jsx(xe,{id:"InntektsmeldingFaktaPanel.tabell.cell.behandling.ingen"})]})},Dl=({behandling:e,inntektsmelding:i})=>i.tilknyttedeBehandlingIder.includes(e.uuid)?"DENNE":i.tilknyttedeBehandlingIder.length>0?"ANDRE":"INGEN";ql.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingFaktaIndex",props:{inntektsmeldinger:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}]}],raw:"BehandlingAppKontekst[]"},description:""}}};const ll={innsendingstidspunkt:"2024-08-08T00:00:00",kildeSystem:"Altinn",aktiveNaturalytelser:[],refusjonsperioder:[],innsendingsårsak:"NY",arbeidsgiverIdent:"1",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"},hR={title:"fakta/fakta-inntektsmelding",component:ql,decorators:[s0],render:e=>H.jsx(ql,{...e})},Hr={args:{alleBehandlinger:[{uuid:"UUID1",type:"BT-002",opprettet:"2024-07-13",avsluttet:"2024-08-13"},{uuid:"UUID2",type:"BT-003",opprettet:"2024-07-14",avsluttet:"2024-08-14"},{uuid:"UUID3",type:"BT-004",opprettet:"2024-07-15",avsluttet:"2024-08-15"}],arbeidsgiverOpplysningerPerId:{1:{navn:"Rema 1000"},2:{navn:"Kiwi"},3:{navn:"Meny"}},behandling:{uuid:"UUID2"},inntektsmeldinger:[{...ll,tilknyttedeBehandlingIder:["UUID1"],inntektPrMnd:10000.5,innsendingstidspunkt:"2024-07-20T00:00:00",startDatoPermisjon:"2024-10-10",refusjonPrMnd:void 0,journalpostId:"1",refusjonsperioder:[{refusjonsbeløp:{verdi:5e3},indexKey:"1",fom:"2024-01-10"},{refusjonsbeløp:{verdi:3e3},indexKey:"2",fom:"2024-01-09"}]},{...ll,tilknyttedeBehandlingIder:["UUID1","UUID2"],inntektPrMnd:2e4,innsendingstidspunkt:"2024-08-01T00:00:00",kildeSystem:"FS22",refusjonPrMnd:void 0,arbeidsgiverIdent:"2",journalpostId:"2"},{...ll,tilknyttedeBehandlingIder:[],inntektPrMnd:3e4,innsendingstidspunkt:"2024-09-10T00:00:00",innsendingsårsak:"ENDRING",kildeSystem:"NAV_NO",startDatoPermisjon:"2024-11-11",arbeidsgiverIdent:"3",journalpostId:"3",aktiveNaturalytelser:[{periode:{fomDato:"2024-01-09",tomDato:"2024-10-09"},type:ol.ELEKTRISK_KOMMUNIKASJON,beloepPerMnd:{verdi:999},indexKey:"1"},{periode:{fomDato:"2024-01-11",tomDato:"2024-10-11"},type:ol.LOSJI,beloepPerMnd:{verdi:10},indexKey:"2"}]}]}},Qa={args:{...Hr.args,inntektsmeldinger:[]}};var zg,Xg,Jg;Hr.parameters={...Hr.parameters,docs:{...(zg=Hr.parameters)==null?void 0:zg.docs,source:{originalSource:`{
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
}`,...(Jg=(Xg=Hr.parameters)==null?void 0:Xg.docs)==null?void 0:Jg.source}}};var Zg,Qg,ef;Qa.parameters={...Qa.parameters,docs:{...(Zg=Qa.parameters)==null?void 0:Zg.docs,source:{originalSource:`{
  args: {
    ...InntektsmeldingDefault.args,
    inntektsmeldinger: []
  }
}`,...(ef=(Qg=Qa.parameters)==null?void 0:Qg.docs)==null?void 0:ef.source}}};const kR=["InntektsmeldingDefault","IngenInntektsmeldinger"];export{Qa as IngenInntektsmeldinger,Hr as InntektsmeldingDefault,kR as __namedExportsOrder,hR as default};
